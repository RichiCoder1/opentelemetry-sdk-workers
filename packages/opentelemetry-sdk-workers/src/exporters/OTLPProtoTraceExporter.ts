import { appendResourcePathToUrl } from "@opentelemetry/otlp-exporter-base";
import { ReadableSpan } from "@opentelemetry/sdk-trace-base";
import { createExportTraceServiceRequest } from "@opentelemetry/otlp-transformer";
import { opentelemetry as proto } from "../proto";
import {
	OTLPCloudflareExporterBase,
	OTLPCloudflareExporterBaseConfig
} from "./OTLPCloudflareExporterBase";
import { baggageUtils } from "@opentelemetry/core";

const {
	proto: {
		collector: {
			trace: {
				v1: { ExportTraceServiceRequest }
			}
		}
	}
} = proto;

const DEFAULT_COLLECTOR_RESOURCE_PATH = "v1/traces";

export interface OTLPProtoTraceExporterConfig
	extends OTLPCloudflareExporterBaseConfig {}

export class OTLPProtoTraceExporter extends OTLPCloudflareExporterBase<
	OTLPProtoTraceExporterConfig,
	ReadableSpan,
	Uint8Array
> {
	static fromEnv(env: Record<string, string>) {
		return new OTLPProtoTraceExporter(OTLPCloudflareExporterBase.parseEnv(env, "TRACES"));
	}
	constructor(config: OTLPProtoTraceExporterConfig) {
		super(config);
	}

	getUrl(url: string): string {
		return appendResourcePathToUrl(url, DEFAULT_COLLECTOR_RESOURCE_PATH);
	}
	contentType = "application/x-protobuf";

	convert(spans: ReadableSpan[]): Uint8Array {
		const convertedSpans = createExportTraceServiceRequest(spans, false);
		const message = ExportTraceServiceRequest.create(convertedSpans);
		return ExportTraceServiceRequest.encode(message).finish();
	}
}
