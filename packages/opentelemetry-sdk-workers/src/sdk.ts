import { TracesFetchExporter, TracesFetchExporterConfig } from './TracesFetchExporter';
import { Resource } from '@opentelemetry/resources';
import { Context, Sampler, Span, SpanKind, TextMapPropagator } from '@opentelemetry/api';
import {
    AlwaysOnSampler,
    CompositePropagator,
    W3CBaggagePropagator,
    W3CTraceContextPropagator,
    _globalThis,
} from '@opentelemetry/core';
import { BasicTracerProvider, SpanExporter, Tracer } from '@opentelemetry/sdk-trace-base';
import { EventSpanProcessor } from './EventSpanProcessor';
import { SimpleContext } from './SimpleContext';
import { SemanticResourceAttributes, SemanticAttributes } from '@opentelemetry/semantic-conventions';
import { HeadersTextMapper } from './HeadersTextExtractor';
import { cloneRequest } from './utils';

const headersTextMapper = new HeadersTextMapper();

export type CfContext = { waitUntil: (promise: Promise<any>) => void };

type NodeSdkConfigBase = {
    /**
     * The current worker's name. Corresponds to `service.name` resource attribute.
     */
    readonly workerName: string;
    /**
     * Provide default resource attributes.
     */
    resource?: Resource;
    sampler?: Sampler;
};

type NodeSdkBuiltInExporter = {
    /**
     * The OTLP HTTP Endpoint to send traces.
     */
    endpoint: string;
} & Omit<TracesFetchExporterConfig, 'url'>;

type NodeSdkExternalExporter = {
    exporter: SpanExporter;
};

type NodeSdkConfig = NodeSdkConfigBase & (NodeSdkBuiltInExporter | NodeSdkExternalExporter);

export class WorkersSDK {
    private resource: Resource;
    private traceProvider: BasicTracerProvider;
    private traceExporter: SpanExporter;
    private sampler: Sampler | null;
    private spanProcessor: EventSpanProcessor;

    public readonly requestTracer: Tracer;
    public readonly propagator: TextMapPropagator;
    public allowedHeaders: (string | RegExp)[] = ['user-agent', 'cf-ray'];
    public allowedSearch: RegExp | (string | RegExp)[] = /.*/;

    public constructor(config: NodeSdkConfig) {
        /**
         * Cloudflare workers provides basically no discoverable metadata to workers.
         */
        this.resource =
            config.resource ??
            new Resource({
                [SemanticResourceAttributes.CLOUD_PROVIDER]: 'cloudflare',
                [SemanticResourceAttributes.CLOUD_PLATFORM]: 'workers',
                [SemanticResourceAttributes.SERVICE_NAME]: config.workerName,
                [SemanticResourceAttributes.FAAS_NAME]: config.workerName,
                [SemanticResourceAttributes.PROCESS_RUNTIME_NAME]: 'Cloudflare-Workers',
            });

        if ('exporter' in config) {
            this.traceExporter = config.exporter;
        } else {
            this.traceExporter = new TracesFetchExporter({
                url: config.endpoint,
                ...config,
            });
        }

        this.sampler = config.sampler ?? new AlwaysOnSampler();
        this.traceProvider = new BasicTracerProvider({
            sampler: this.sampler,
            resource: this.resource,
        });
        this.spanProcessor = new EventSpanProcessor(this.traceExporter);
        this.traceProvider.addSpanProcessor(this.spanProcessor);
        this.propagator = new CompositePropagator({
            propagators: [new W3CTraceContextPropagator(), new W3CBaggagePropagator()],
        });
        this.requestTracer = this.traceProvider.getTracer('opentelemetry-sdk-workers', '0.1.0');
    }

    public start(event: ScheduledEvent, context: CfContext): WorkerInstance;
    public start(request: Request, context: CfContext): WorkerInstance;
    public start(eventOrRequest: Request | ScheduledEvent, cfContext: CfContext) {
        const [span, context] = this.getSpan(eventOrRequest);
        return new WorkerInstance(this, cfContext, span, context);
    }

    public end() {
        return this.spanProcessor.forceFlush();
    }

    private getSpan(eventOrRequest: Request | ScheduledEvent) {
        const context = new SimpleContext();

        let name: string;
        if ('type' in eventOrRequest) {
            const scheduledEvent = eventOrRequest as ScheduledEvent;
            name = `scheduled ${scheduledEvent.cron ?? scheduledEvent.scheduledTime}`;
        } else {
            if (!eventOrRequest) {
                throw new Error('You must provide the request to start for fetch events!');
            }
            const url = new URL(eventOrRequest.url);
            name = `fetch ${eventOrRequest.method} ${url.pathname}`;

            // TODO: We should toggle or allow an opt-in for parent trace extraction maybe
            this.propagator.extract(context, eventOrRequest.headers, headersTextMapper);
        }

        const span = this.requestTracer.startSpan(
            name,
            {
                // TODO: What is the right SpanKind for cron jobs?
                kind: 'type' in eventOrRequest ? SpanKind.SERVER : SpanKind.INTERNAL,
                startTime: Date.now(),
            },
            context
        );

        if ('type' in eventOrRequest) {
            const scheduledEvent = eventOrRequest as ScheduledEvent;
            span.setAttribute(SemanticAttributes.FAAS_TRIGGER, 'timer');
            span.setAttribute(SemanticAttributes.FAAS_TIME, scheduledEvent.scheduledTime);
            if (scheduledEvent.cron) {
                span.setAttribute(SemanticAttributes.FAAS_CRON, scheduledEvent.cron);
            }
        } else {
            const request = eventOrRequest as Request;
            const url = new URL(request.url);
            const searchParams = new URLSearchParams();
            for (const [key, value] of url.searchParams) {
                if (Array.isArray(this.allowedSearch)) {
                    if (
                        this.allowedSearch.some((allowed) =>
                            typeof allowed === 'string' ? allowed === key : allowed.test(key)
                        )
                    ) {
                        searchParams.append(key, value);
                    }
                } else if (this.allowedSearch.test(key)) {
                    searchParams.append(key, value);
                }
            }
            const search = searchParams.toString();
            const target = `${url.pathname}${search === '' ? '' : `?${search}`}`;

            span.setAttributes({
                [SemanticAttributes.HTTP_METHOD]: request.method,
                [SemanticAttributes.HTTP_URL]: request.url,
                [SemanticAttributes.HTTP_TARGET]: target,
                [SemanticAttributes.HTTP_HOST]: url.host,
                [SemanticAttributes.NET_HOST_NAME]: url.hostname,
                [SemanticAttributes.NET_HOST_PORT]: url.port,
                [SemanticAttributes.HTTP_SCHEME]: url.protocol.substring(0, url.protocol.length - 1),
                [SemanticAttributes.HTTP_USER_AGENT]: request.headers.get('user-agent'),
                [SemanticAttributes.NET_PEER_IP]: request.headers.get('cf-connecting-ip'),
                [SemanticAttributes.HTTP_CLIENT_IP]: request.headers.get('cf-connecting-ip'),
            });

            for (const headerKey of request.headers.keys()) {
                if (headerKey === 'cookie') {
                    continue;
                }
                if (
                    !this.allowedHeaders.some((allowed) =>
                        typeof allowed === 'string' ? headerKey === allowed : allowed.test(headerKey)
                    )
                ) {
                    continue;
                }
                span.setAttribute(`http.request.header.${headerKey.toLowerCase()}`, [request.headers.get(headerKey)]);
            }
        }
        return [span, context] as const;
    }
}

export class WorkerInstance {
    private flushed = false;
    private startTime = Date.now();

    constructor(private sdk: WorkersSDK, private cfContext: CfContext, public span: Span, private context: Context) {}

    public async fetch(request: Request | string, requestInitr?: RequestInit | Request): Promise<Response> {
        let downstreamRequest: Request;
        if (request instanceof Request) {
            downstreamRequest = cloneRequest(request);
        } else {
            downstreamRequest = new Request(request, requestInitr);
        }

        const childSpan = this.createSpan(downstreamRequest);
        this.sdk.propagator.inject(this.context, downstreamRequest.headers, headersTextMapper);

        if (this.flushed) {
            console.warn(
                'Fetch request sent after worker spans were flushed. Avoid using instance.fetch after calling sendResponse or captureException.'
            );
        }
        try {
            const response = await _globalThis.fetch(downstreamRequest);
            this.endSpan(downstreamRequest, childSpan, response);
            return response;
        } catch (reason) {
            this.endSpan(downstreamRequest, childSpan, reason);
            return reason;
        }
    }

    public sendResponse(response: Response): Response {
        this.span.setAttributes({
            [SemanticAttributes.HTTP_STATUS_CODE]: response.status,
        });
        for (const headerKey of response.headers.keys()) {
            if (headerKey === 'set-cookie') {
                continue;
            }
            if (
                !this.sdk.allowedHeaders.some((allowed) =>
                    typeof allowed === 'string' ? headerKey === allowed : allowed.test(headerKey)
                )
            ) {
                continue;
            }
            this.span.setAttribute(`http.response.header.${headerKey.toLowerCase()}`, [
                response.headers.get(headerKey),
            ]);
        }

        let endTime = Date.now();
        if (this.startTime === endTime) {
            endTime += 0.01;
        }

        this.span.end(endTime);
        this.cfContext.waitUntil(this.sdk.end());
        return response;
    }

    public captureException(ex: Error): void {
        this.span.recordException(ex);

        let endTime = Date.now();
        if (this.startTime === endTime) {
            endTime += 0.01;
        }
        this.span.end(endTime);
        this.cfContext.waitUntil(this.sdk.end());
    }

    private createSpan(request: Request): Span | undefined {
        const method = (request.method ?? 'GET').toUpperCase();
        const spanName = `HTTP ${method}`;
        const url = new URL(request.url);
        return this.sdk.requestTracer.startSpan(spanName, {
            kind: SpanKind.CLIENT,
            attributes: {
                [SemanticAttributes.HTTP_METHOD]: method,
                [SemanticAttributes.HTTP_URL]: request.url,
                [SemanticAttributes.HTTP_TARGET]: `${url.pathname}${url.search}`,
                [SemanticAttributes.HTTP_HOST]: url.host,
                [SemanticAttributes.HTTP_SCHEME]: url.protocol.replace(':', ''),
            },
        });
    }

    private endSpan(request: Request, span: Span, responseOrError: Response | Error) {
        const url = new URL('url' in responseOrError ? responseOrError.url : request.url);
        if (responseOrError instanceof Response) {
            span.setAttribute(SemanticAttributes.HTTP_STATUS_CODE, responseOrError.status);
        } else {
            span.setAttribute(SemanticAttributes.HTTP_STATUS_CODE, responseOrError['status'] ?? 0);
            span.recordException(responseOrError, new Date());
        }
        span.end(new Date());
    }
}
