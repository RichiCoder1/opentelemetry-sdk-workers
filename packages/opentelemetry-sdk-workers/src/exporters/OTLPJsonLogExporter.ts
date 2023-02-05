import { baggageUtils } from "@opentelemetry/core";
import { appendResourcePathToUrl, appendRootPathToUrlIfNeeded } from "@opentelemetry/otlp-exporter-base";
import { LogRecord } from "../types";
import {
	OTLPCloudflareExporterBase,
	OTLPCloudflareExporterBaseConfig
} from "./OTLPCloudflareExporterBase";
import {
	createExportLogsServiceRequest,
	IExportLogsServiceRequest
} from "./utils";
const DEFAULT_COLLECTOR_RESOURCE_PATH = "v1/logs";

export interface OTLPJsonLogExporterConfig
	extends OTLPCloudflareExporterBaseConfig {}

export class OTLPJsonLogExporter extends OTLPCloudflareExporterBase<
	OTLPJsonLogExporterConfig,
	LogRecord,
	IExportLogsServiceRequest
> {
	contentType = "application/json";
	static fromEnv(env: Record<string, string>) {
		return new OTLPJsonLogExporter(OTLPCloudflareExporterBase.parseEnv(env, "LOGS"));
	}
	convert(logRecords: LogRecord[]): IExportLogsServiceRequest {
		return createExportLogsServiceRequest(logRecords, true);
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
