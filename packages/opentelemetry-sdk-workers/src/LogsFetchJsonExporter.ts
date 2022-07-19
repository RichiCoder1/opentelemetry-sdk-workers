import { appendResourcePathToUrl } from "@opentelemetry/otlp-exporter-base";
import { toAnyValue, toAttributes } from '@opentelemetry/otlp-transformer/build/src/common/internal';
import { LogRecord } from "./types";
import type { Resource } from '@opentelemetry/resources';
import { hexToBase64, hrTimeToNanoseconds } from "@opentelemetry/core";
import { IAnyValue, IInstrumentationScope, IKeyValue, IResource } from "@opentelemetry/otlp-transformer";

type ILogRecord = {
    timeUnixNano?: number;
    observedTimeUnixNano?: number;
    severityNumber?: number;
    severityText?: string;
    body?: IAnyValue;
    attributes?: IKeyValue[];
    droppedAttributesCount?: number;
    flags?: string | null;
    traceId?: string;
    spanId?: string;
}

type IScopeLogs = {
    scope?: IInstrumentationScope;
    logRecords: ILogRecord[];
}

type IResourceLogs = {
    resource?: IResource;
    scopeLogs: IScopeLogs[];
}

const DEFAULT_COLLECTOR_RESOURCE_PATH = 'v1/logs';

export interface TracesFetchExporterConfig {
    url: string;
    headers?: Partial<Record<string, unknown>>;
    /** Maximum time the OTLP exporter will wait for each batch export.
     * The default value is 2000ms. */
    timeoutMillis?: number;

}

export class LogsFetchJsonExporter {
    constructor(private config: TracesFetchExporterConfig) {
        if (config.url == null) {
            throw new Error("You must provide a valid url to export logs.");
        }
    }

    async export(logRecords: LogRecord[]): Promise<void> {
        try {
            if (logRecords.length == 0) {
                return;
            }

            const convertedSpans = createExportLogsServiceRequest(logRecords, true);

            const url = appendResourcePathToUrl(this.config.url, DEFAULT_COLLECTOR_RESOURCE_PATH);
            const headers = {
                'accept': 'application/json',
                'content-type': 'application/json',
                ...this.config.headers,
            };

            const result = fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify(convertedSpans),
                signal: (AbortSignal as any).timeout(this.config.timeoutMillis ?? 2000),
            });

            return result.then((response) => {
                if (!response.ok) {
                    response.text().then(data => {
                        console.error("Failed to post spans to endpoint:");
                        console.error(data);
                        throw new Error(`Failed to POST traces to endpoint. Got ${response.status} ${response.statusText}.`);
                    });
                }
            }, (reason: Error) => {
                throw new Error(`Failed to POST traces to endpoint: ${reason}`);
            });
        } catch (e) {
            console.error('failed to export', e);
        }   
    }

    shutdown(): Promise<void> {
        // TODO: Should this be a no-op instead of erroring?
        throw new Error("Shutdown not implemented for this exporter. No contextual shutdown available in workers.");
    }
}

export function createExportLogsServiceRequest(spans: LogRecord[], useHex?: boolean) {
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

function spanRecordsToResourceLogs(logRecords: LogRecord[], useHex?: boolean): IResourceLogs[] {
  const resourceMap = createResourceMap(logRecords);
  const out: IResourceLogs[] = [];

  for (const [resource, ilmMap] of resourceMap) {
    const scopeResourceLogs: IScopeLogs[] = [];    
    for (const [, scopeLogs] of ilmMap) {
        if (scopeLogs.length > 0) {
          const { name, version } = scopeLogs[0].instrumentationLibrary;
          const logs = scopeLogs.map(logRecord => sdkLogRecordToOtlpSpan(logRecord, useHex));
  
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
        droppedAttributesCount: 0,
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