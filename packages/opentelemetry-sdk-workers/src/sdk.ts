import { OTLPJsonTraceExporter, OTLPJsonTraceExporterConfig } from './exporters/OTLPJsonTraceExporter';
import { OTLPJsonLogExporter } from './exporters/OTLPJsonLogExporter';
import { Resource } from '@opentelemetry/resources';
import { Context, DiagLogLevel, Sampler, Span, SpanKind, TextMapPropagator, trace, } from '@opentelemetry/api';
import {
    CompositePropagator,
    ExportResultCode,
    hrTime,
    W3CBaggagePropagator,
    W3CTraceContextPropagator,
    _globalThis,
} from '@opentelemetry/core';
import { BasicTracerProvider, SpanExporter, Tracer, AlwaysOnSampler } from '@opentelemetry/sdk-trace-base';
import { EventSpanProcessor } from './EventSpanProcessor';
import { SimpleContext } from './SimpleContext';
import { SemanticResourceAttributes, SemanticAttributes } from '@opentelemetry/semantic-conventions';
import { Diary, diary, LogEvent, enable } from "diary";
import { HeadersTextMapper } from './HeadersTextExtractor';
import { cloneRequest } from './utils';
import { LogRecord } from './types';
import { LogExporter } from './exporters/LogExporter';

const headersTextMapper = new HeadersTextMapper();

export type CfContext = { waitUntil: (promise: Promise<any>) => void };

type NodeSdkConfigBase = {
    /**
     * The current worker's name. Corresponds to `service.name` resource attribute.
     */
    readonly service?: string;
    /**
     * Provide default resource attributes.
     */
    resource?: Resource;
    sampler?: Sampler;
    logLevel?: DiagLogLevel;
    logExporter?: LogExporter;
};

type NodeSdkBuiltInExporter = {
    /**
     * The OTLP HTTP Endpoint to send traces.
     */
    endpoint: string;
} & Omit<OTLPJsonTraceExporterConfig, 'url'>;

type NodeSdkExternalExporter = {
    traceExporter: SpanExporter;
};

type NodeSdkConfig = NodeSdkConfigBase & (NodeSdkBuiltInExporter | NodeSdkExternalExporter);

export class WorkersSDK {

    public readonly log: Diary;
    public readonly logExportEnabled: boolean;

    private readonly traceProvider: BasicTracerProvider;
    private readonly traceExporter: SpanExporter;
    private readonly logExporter?: LogExporter;
    private readonly requestTracer: Tracer;
    private readonly propagator: TextMapPropagator;
    private readonly span: Span;
    private readonly spanContext: Context;
    private readonly startTime: number;
    private readonly allowedHeaders: (string | RegExp)[] = ['user-agent', 'cf-ray'];
    private readonly allowedSearch: RegExp | (string | RegExp)[] = /.*/;

    #flushed = false;
    #logs: LogRecord[] = [];

    public static fromEnv(eventOrRequest: Request | ScheduledEvent, env: Record<string, string>, ctx: CfContext, config: Partial<NodeSdkConfig> = {}) {
        const rawAttributes = env["OTEL_RESOURCE_ATTRIBUTES"];
        const attributes = this.#parseAttributes(rawAttributes);

        const serviceName  = env["OTEL_SERVICE_NAME"];
		if (serviceName === null) {
			throw new Error("You must provide a service name via env.OTEL_SERVICE_NAME.");
		}
        if (serviceName) {
            attributes[SemanticResourceAttributes.SERVICE_NAME] = serviceName;
        }

        const resource = new Resource(attributes).merge(new Resource({
            [SemanticResourceAttributes.TELEMETRY_SDK_NAME]: 'opentelemetry-sdk-workers',
            [SemanticResourceAttributes.CLOUD_PROVIDER]: 'cloudflare',
            [SemanticResourceAttributes.CLOUD_PLATFORM]: 'workers',
            [SemanticResourceAttributes.FAAS_NAME]: attributes[SemanticResourceAttributes.SERVICE_NAME],
            [SemanticResourceAttributes.PROCESS_RUNTIME_NAME]: 'Cloudflare-Workers',
        }));

		const rawLoggingValue = env["OTEL_EXPORTER_LOGS_ENABLED"];
		const loggingEnabled = rawLoggingValue === "1" || rawLoggingValue === "true";
        return new WorkersSDK(eventOrRequest, ctx, {
            service: attributes[SemanticResourceAttributes.SERVICE_NAME],
            resource,
            traceExporter: OTLPJsonTraceExporter.fromEnv(env),
			logExporter: loggingEnabled ? OTLPJsonLogExporter.fromEnv(env) : undefined,
			...config
        });
    }

    public constructor(private eventOrRequest: Request | ScheduledEvent, private ctx: CfContext, config: NodeSdkConfig) {
		if (config.service == null || config.service?.length == 0) {
			throw new Error("You must provide a service name via `service`.");
		}

        /**
         * Cloudflare workers provides basically no discoverable metadata to workers.
         */
        const resource =
            config.resource ??
            new Resource({
                [SemanticResourceAttributes.TELEMETRY_SDK_NAME]: 'opentelemetry-sdk-workers',
                [SemanticResourceAttributes.CLOUD_PROVIDER]: 'cloudflare',
                [SemanticResourceAttributes.CLOUD_PLATFORM]: 'workers',
                [SemanticResourceAttributes.SERVICE_NAME]: config.service,
                [SemanticResourceAttributes.FAAS_NAME]: config.service,
                [SemanticResourceAttributes.PROCESS_RUNTIME_NAME]: 'Cloudflare-Workers',
            });


        if ('traceExporter' in config) {
            this.traceExporter = config.traceExporter;
        } else {
			const { endpoint, ...exporterConfig } = config;
            this.traceExporter = new OTLPJsonTraceExporter({
                endpoints: { default: endpoint },
                ...exporterConfig,
            });
        }

        const sampler = config.sampler ?? new AlwaysOnSampler();
        this.traceProvider = new BasicTracerProvider({
            sampler: sampler,
            resource: resource,
        });

        const spanProcessor = new EventSpanProcessor(this.traceExporter);
        this.traceProvider.addSpanProcessor(spanProcessor);
        this.propagator = new CompositePropagator({
            propagators: [new W3CTraceContextPropagator(), new W3CBaggagePropagator()],
        });
        this.requestTracer = this.traceProvider.getTracer('opentelemetry-sdk-workers', '0.1.0');

        const { span, spanContext } = this.initSpan();
        this.span = span;
        this.spanContext = spanContext;

        this.logExporter = config.logExporter;
        this.logExportEnabled = config.logExporter != null;
        enable("*");
        this.log = diary(config.service, (event) => {
			const { name, level, messages } = event;
            const consoleLevel = level === 'fatal' ? 'error' : level;

			const [ message, extra ] = messages;
			console[consoleLevel](message, extra);

            if (this.logExporter) {
                this.#ingestEvent(event);
            }
        });
    }

    public async fetch(request: Request | string, requestInitr?: RequestInit | Request): Promise<Response> {
        let downstreamRequest: Request;
        if (request instanceof Request) {
            downstreamRequest = cloneRequest(request);
        } else {
            downstreamRequest = new Request(request, requestInitr);
        }

        const childSpan = this.createSpan(downstreamRequest);
        this.propagator.inject(this.spanContext, downstreamRequest.headers, headersTextMapper);

        if (this.#flushed) {
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
                !this.allowedHeaders.some((allowed) =>
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
        this.ctx.waitUntil(this.end());
        return response;
    }
    public res: (response: Response) => Response = this.sendResponse.bind(this);

    public captureException(ex: Error): void {
        this.span.recordException(ex);

        let endTime = Date.now();
        if (this.startTime === endTime) {
            endTime += 0.01;
        }
        this.span.end(endTime);
        this.ctx.waitUntil(this.end());
    }

    private createSpan(request: Request): Span {
        const method = (request.method ?? 'GET').toUpperCase();
        const spanName = `HTTP ${method}`;
        const url = new URL(request.url);
        const childSpan = this.requestTracer.startSpan(spanName, {
            kind: SpanKind.CLIENT,
            attributes: {
                [SemanticAttributes.HTTP_METHOD]: method,
                [SemanticAttributes.HTTP_URL]: request.url,
                [SemanticAttributes.HTTP_TARGET]: `${url.pathname}${url.search}`,
                [SemanticAttributes.HTTP_HOST]: url.host,
                [SemanticAttributes.HTTP_SCHEME]: url.protocol.replace(':', ''),
            },
        }, this.spanContext);
        trace.setSpan(this.spanContext, childSpan);
        return childSpan;
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

    public async end() {
        try {
            const exportPromises = [
                this.traceProvider.forceFlush(),
            ];
            if (this.logExporter) {
                exportPromises.push(new Promise<void>((resolve, reject) => {
                    this.logExporter!.export(this.#logs, (result) => {
                        if (result.code === ExportResultCode.SUCCESS) {
                            resolve();
                        } else {
                            reject(result.error);
                        }
                    })
                }));
            }
            await Promise.all(exportPromises);
        } catch (error) {
            console.error("Failed to flush spans:", error);
        }
    }

    private initSpan() {
        const context = new SimpleContext();

        let name: string;
        if ('type' in this.eventOrRequest) {
            const scheduledEvent = this.eventOrRequest as ScheduledEvent;
            name = `scheduled ${scheduledEvent.cron ?? scheduledEvent.scheduledTime}`;
        } else {
            if (!this.eventOrRequest) {
                throw new Error('You must provide the request to start for fetch events!');
            }
            const url = new URL(this.eventOrRequest.url);
            name = `fetch ${this.eventOrRequest.method} ${url.pathname}`;

            // TODO: We should toggle or allow an opt-in for parent trace extraction maybe
            this.propagator.extract(context, this.eventOrRequest.headers, headersTextMapper);
        }

        const span = this.requestTracer.startSpan(
            name,
            {
                // TODO: What is the right SpanKind for cron jobs?
                kind: 'type' in this.eventOrRequest ? SpanKind.SERVER : SpanKind.INTERNAL,
                startTime: Date.now(),
            },
            context
        );
        trace.setSpan(context, span);

        if ('type' in this.eventOrRequest) {
            const scheduledEvent = this.eventOrRequest as ScheduledEvent;
            span.setAttribute(SemanticAttributes.FAAS_TRIGGER, 'timer');
            span.setAttribute(SemanticAttributes.FAAS_TIME, scheduledEvent.scheduledTime);
            if (scheduledEvent.cron) {
                span.setAttribute(SemanticAttributes.FAAS_CRON, scheduledEvent.cron);
            }
        } else {
            const request = this.eventOrRequest as Request;
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

        return { span, spanContext: context };
    }

    #ingestEvent(event: LogEvent) {
        const { spanId, traceId, traceFlags } = this.span.spanContext();
		const { level: defaultLevel, name, messages } = event;
        const level = defaultLevel === "log" ? "info" : defaultLevel;
        let severityNumber: number;
        switch (level) {
            case "debug": severityNumber = 5; break;
            case "info": severityNumber = 9; break;
            case "warn": severityNumber = 13; break;
            case "error": severityNumber = 17; break;
            case "fatal": severityNumber = 21; break;
        }

		const [ message, extra ] = messages;

        this.#logs.push({
            timestamp: hrTime(Date.now()),
            observedTimestamp: hrTime(Date.now()),
            spanId,
            traceId,
            traceFlags,
            severityText: level.toUpperCase(),
            severityNumber: severityNumber,
            body: `${message}`,
            instrumentationLibrary: {
                name: "opentelemetry-sdk-workers",
            },
            resource: this.traceProvider.resource,
            attributes: {
                "log.extra": extra
            }
        });
    }

    /**
     * Implementation of OTEL_RESOURCE_ATTRIBUTES adapted from @opentelemetry/api's EnvDetector.
     * @param rawEnvAttributes OTEL_RESOURCE_ATTRIBUTES Environment Variable
     * @returns parses attributes
     */
    static #parseAttributes(rawEnvAttributes: string) {
        if (!rawEnvAttributes)
            return {};
        const attributes = {};
        const rawAttributes = rawEnvAttributes.split(',', -1);
        for (const rawAttribute of rawAttributes) {
            const keyValuePair = rawAttribute.split('=', -1);
            if (keyValuePair.length !== 2) {
                continue;
            }
            let [key, value] = keyValuePair;
            // Leading and trailing whitespaces are trimmed.
            key = key.trim();
            value = value.trim().split('^"|"$').join('');
            if (!this.#isValidAndNotEmptyKey(key)) {
                throw new Error(`Attribute key should be a ASCII string with a length greater than 0 and not exceed 255 characters.`);
            }
            if (!this.#isValidAttributeKey(value)) {
                throw new Error(`Attribute value should be a ASCII string with a length not exceed 255 characters`);
            }
            attributes[key] = value;
        }
        return attributes;
    }

    /**
     * Determines whether the given String is a valid printable ASCII string with
     * a length not exceed _MAX_LENGTH characters.
     *
     * @param str The String to be validated.
     * @returns Whether the String is valid.
     */
    static #isValidAttributeKey(name: string) {
        return name.length <= 255 && this.#isPrintableString(name);
    }

    static #isPrintableString(str: string) {
        for (let i = 0; i < str.length; i++) {
            const ch = str.charAt(i);
            if (ch <= ' ' || ch >= '~') {
                return false;
            }
        }
        return true;
    }
    /**
     * Determines whether the given String is a valid printable ASCII string with
     * a length greater than 0 and not exceed _MAX_LENGTH characters.
     *
     * @param str The String to be validated.
     * @returns Whether the String is valid and not empty.
     */
    static #isValidAndNotEmptyKey(str: string) {
        return str.length > 0 && this.#isValidAttributeKey(str);
    }
}
