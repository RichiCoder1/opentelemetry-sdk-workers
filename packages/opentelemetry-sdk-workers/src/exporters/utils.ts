import { hrTimeToNanoseconds, hexToBase64 } from "@opentelemetry/core";
import { IAnyValue, IInstrumentationScope, IKeyValue, IResource } from "@opentelemetry/otlp-transformer";
import { toAttributes, toAnyValue } from "@opentelemetry/otlp-transformer/build/src/common/internal.js";
import { Resource } from "@opentelemetry/resources";
import { LogRecord } from "../types";

type ILogRecord = {
	timeUnixNano?: number;
	observedTimeUnixNano?: number;
	severityNumber?: number;
	severityText?: string;
	body?: IAnyValue;
	attributes?: IKeyValue[];
	droppedAttributesCount?: number;
	flags?: number | null;
	traceId?: string;
	spanId?: string;
};

type IScopeLogs = {
	scope?: IInstrumentationScope;
	logRecords: ILogRecord[];
};

type IResourceLogs = {
	resource?: IResource;
	scopeLogs: IScopeLogs[];
};

export type IExportLogsServiceRequest = {
	resourceLogs: IResourceLogs[];
};


export function createExportLogsServiceRequest(
	spans: LogRecord[],
	useHex?: boolean
) {
	return {
		resourceLogs: spanRecordsToResourceLogs(spans, useHex)
	};
}

function createResourceMap(logRecords: LogRecord[]) {
	const resourceMap: Map<Resource, Map<string, LogRecord[]>> = new Map();
	for (const record of logRecords) {
		let ilmMap = resourceMap.get(record.resource);

		if (!ilmMap) {
			ilmMap = new Map();
			resourceMap.set(record.resource, ilmMap);
		}

		// TODO this is duplicated in basic tracer. Consolidate on a common helper in core
		const instrumentationLibraryKey = `opentelemetry-sdk-workers@:`;
		let records = ilmMap.get(instrumentationLibraryKey);

		if (!records) {
			records = [];
			ilmMap.set(instrumentationLibraryKey, records);
		}

		records.push(record);
	}

	return resourceMap;
}

function spanRecordsToResourceLogs(
	logRecords: LogRecord[],
	useHex?: boolean
): IResourceLogs[] {
	const resourceMap = createResourceMap(logRecords);
	const out: IResourceLogs[] = [];

	for (const [resource, ilmMap] of resourceMap) {
		const scopeResourceLogs: IScopeLogs[] = [];
		for (const [, scopeLogs] of ilmMap) {
			if (scopeLogs.length > 0) {
				const { name, version } = scopeLogs[0].instrumentationLibrary;
				const logs = scopeLogs.map(logRecord =>
					sdkLogRecordToOtlpSpan(logRecord, useHex)
				);

				scopeResourceLogs.push({
					scope: { name, version },
					logRecords: logs
				});
			}
		}
		// TODO SDK types don't provide resource schema URL at this time
		const transformedSpans: IResourceLogs = {
			resource: {
				attributes: toAttributes(resource.attributes),
				droppedAttributesCount: 0
			},
			scopeLogs: scopeResourceLogs
		};

		out.push(transformedSpans);
	}

	const entryIterator = resourceMap.entries();
	let entry = entryIterator.next();
	while (!entry.done) {
		const [resource, ilmMap] = entry.value;
		entry = entryIterator.next();
	}

	return out;
}

export function sdkLogRecordToOtlpSpan(
	logRecord: LogRecord,
	useHex?: boolean
): ILogRecord {
	return {
		timeUnixNano: hrTimeToNanoseconds(logRecord.timestamp),
		observedTimeUnixNano: hrTimeToNanoseconds(logRecord.observedTimestamp),
		severityNumber: logRecord.severityNumber,
		severityText: logRecord.severityText,
		body: toAnyValue(logRecord.body),
		attributes: toAttributes(logRecord.attributes),
		droppedAttributesCount: 0,
		traceId: useHex ? logRecord.traceId : hexToBase64(logRecord.traceId),
		spanId: useHex ? logRecord.spanId : hexToBase64(logRecord.spanId)
	};
}
