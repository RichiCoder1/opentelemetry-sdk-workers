import { appendResourcePathToUrl } from "@opentelemetry/otlp-exporter-base";
import { ReadableSpan, SpanExporter } from '@opentelemetry/sdk-trace-base';
import { createExportTraceServiceRequest } from '@opentelemetry/otlp-transformer';
import { ExportResult, ExportResultCode } from "@opentelemetry/core";

const DEFAULT_COLLECTOR_RESOURCE_PATH = 'v1/traces';

export interface TracesFetchExporterConfig {
    url: string;
    headers?: Partial<Record<string, unknown>>;
    /** Maximum time the OTLP exporter will wait for each batch export.
     * The default value is 2000ms. */
    timeoutMillis?: number;

}

export class TracesFetchExporter implements SpanExporter {
    constructor(private config: TracesFetchExporterConfig) {
        if (config.url == null) {
            throw new Error("You must provide a valid url to export traces.");
        }
    }

    export(spans: ReadableSpan[], resultCallback: (result: ExportResult) => void): void {
        const convertedSpans = createExportTraceServiceRequest(spans, true);
        const body = JSON.stringify(convertedSpans);

        const url = appendResourcePathToUrl(this.config.url, DEFAULT_COLLECTOR_RESOURCE_PATH);
        const headers = {
            'accept': 'application/json',
            'content-type': 'application/json',
            ...this.config.headers,
        };

        const result = fetch(url, {
            method: "POST",
            headers,
            body,
            signal: AbortSignal.timeout(this.config.timeoutMillis ?? 2000),
        });

        result.then((response) => {
            if (!response.ok) {
                response.text().then(console.log)
                resultCallback({
                    code: ExportResultCode.FAILED,
                    error: new Error(`Failed to POST traces to endpoint. Got ${response.status} ${response.statusText}.`),
                });
            }
            resultCallback({
                code: ExportResultCode.SUCCESS
            });
        }, (reason: Error) => {
            resultCallback({
                code: ExportResultCode.FAILED,
                error: reason
            });
        });
    }

    shutdown(): Promise<void> {
        // TODO: Should this be a no-op instead of erroring?
        throw new Error("Shutdown not implemented for this exporter. No contextual shutdown available in workers.");
    }
}