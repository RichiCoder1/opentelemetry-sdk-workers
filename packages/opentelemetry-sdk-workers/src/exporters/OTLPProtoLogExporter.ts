import { appendResourcePathToUrl } from "@opentelemetry/otlp-exporter-base";
import { LogRecord } from "../types";
import {
	OTLPCloudflareExporterBase,
	OTLPCloudflareExporterBaseConfig
} from "./OTLPCloudflareExporterBase";
import { createExportLogsServiceRequest } from "./utils";
import { opentelemetry as proto } from "../proto";
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
	convert(logRecords: LogRecord[]): Uint8Array {
		const convertedLogs = createExportLogsServiceRequest(logRecords, false);
		// @ts-ignore
		const message = ExportLogsServiceRequest.create(convertedLogs);
		return ExportLogsServiceRequest.encode(message).finish();
	}
	getUrl(url: string): string {
		return appendResourcePathToUrl(url, DEFAULT_COLLECTOR_RESOURCE_PATH);
	}
}
