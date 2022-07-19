import { appendResourcePathToUrl } from "@opentelemetry/otlp-exporter-base";
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
	convert(logRecords: LogRecord[]): IExportLogsServiceRequest {
		return createExportLogsServiceRequest(logRecords, true);
	}
	getUrl(url: string): string {
		return appendResourcePathToUrl(url, DEFAULT_COLLECTOR_RESOURCE_PATH);
	}
}
