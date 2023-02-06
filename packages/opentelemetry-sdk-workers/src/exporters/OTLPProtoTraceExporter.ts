import { appendResourcePathToUrl, appendRootPathToUrlIfNeeded } from "@opentelemetry/otlp-exporter-base";
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
	static fromEnv(env: Record<string, unknown>) {
		return new OTLPProtoTraceExporter(OTLPCloudflareExporterBase.parseEnv(env, "TRACES"));
	}
	constructor(config: OTLPProtoTraceExporterConfig) {
		super(config);
	}

	contentType = "application/x-protobuf";

	convert(spans: ReadableSpan[]): Uint8Array {
		const convertedSpans = createExportTraceServiceRequest(spans, false);
		const message = ExportTraceServiceRequest.create(convertedSpans);
		return ExportTraceServiceRequest.encode(message).finish();
	}
	getUrl(config: OTLPCloudflareExporterBaseConfig): string {
		if (typeof config.url === 'string') {
			return config.url;
		}

		if (config.endpoints?.traces?.length > 0) {
			return appendRootPathToUrlIfNeeded(config.endpoints.traces);
		}

		if (config.endpoints?.default?.length > 0) {
			return appendResourcePathToUrl(config.endpoints.default, DEFAULT_COLLECTOR_RESOURCE_PATH);
		}

		throw new Error("You must provide a valid URL for this exporter. Make sure either config.url or env.OTEL_EXPORTER_OTLP_ENDPOINT are specified.");
	}
}
