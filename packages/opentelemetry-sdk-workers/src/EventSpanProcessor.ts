import { Context } from "@opentelemetry/api";
import { ExportResultCode } from "@opentelemetry/core";
import { ReadableSpan, Span, SpanExporter, SpanProcessor } from "@opentelemetry/sdk-trace-base";

export class EventSpanProcessor implements SpanProcessor {
    private spans = new Set<ReadableSpan>();

    constructor(private exporter: SpanExporter) {}

    forceFlush(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.exporter.export(Array.from(this.spans), (result) => {
                if (result.code === ExportResultCode.SUCCESS) {
                    this.spans.clear();
                    resolve();
                } else {
                    reject(result.error);
                }
            });
        });
    }
    onStart(_: Span, __: Context): void {}
    onEnd(span: ReadableSpan): void {
        this.spans.add(span);
    }
    shutdown(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}