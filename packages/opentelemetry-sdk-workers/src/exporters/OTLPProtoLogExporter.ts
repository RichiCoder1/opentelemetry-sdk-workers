import { appendResourcePathToUrl, appendRootPathToUrlIfNeeded } from "@opentelemetry/otlp-exporter-base";
import { LogRecord } from "../types";
import {
	OTLPCloudflareExporterBase,
	OTLPCloudflareExporterBaseConfig
} from "./OTLPCloudflareExporterBase";
import { createExportLogsServiceRequest } from "./utils";
import { opentelemetry as proto } from "../proto";
import { baggageUtils } from "@opentelemetry/core";
const DEFAULT_COLLECTOR_RESOURCE_PATH = "v1/logs";

const {
	proto: {
		collector: {
			logs: {
				v1: { ExportLogsServiceRequest }
			}
		}
	}
} = proto;

export interface OTLPProtoLogExporterConfig
	extends OTLPCloudflareExporterBaseConfig {}

export class OTLPProtoLogExporter extends OTLPCloudflareExporterBase<
	OTLPProtoLogExporterConfig,
	LogRecord,
	Uint8Array
> {
	contentType = "application/x-protobuf";
	static fromEnv(env: Record<string, unknown>) {
		return new OTLPProtoLogExporter(OTLPCloudflareExporterBase.parseEnv(env, "LOGS"));
	}
	convert(logRecords: LogRecord[]): Uint8Array {
		const convertedLogs = createExportLogsServiceRequest(logRecords, false);
		// @ts-ignore
		const message = ExportLogsServiceRequest.create(convertedLogs);
		return ExportLogsServiceRequest.encode(message).finish();
	}
	getUrl(config: OTLPCloudflareExporterBaseConfig): string {
		if (typeof config.url === 'string') {
			return config.url;
		}

		if (config.endpoints?.logs?.length > 0) {
			return appendRootPathToUrlIfNeeded(config.endpoints.logs);
		}

		if (config.endpoints?.default?.length > 0) {
			return appendResourcePathToUrl(config.endpoints.default, DEFAULT_COLLECTOR_RESOURCE_PATH);
		}

		throw new Error("You must provide a valid URL for this exporter. Make sure either config.url or env.OTEL_EXPORTER_OTLP_ENDPOINT are specified.");
	}
}
