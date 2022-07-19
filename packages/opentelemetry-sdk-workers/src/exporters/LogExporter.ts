import { ExportResult } from '@opentelemetry/core';
import { LogRecord } from '../types';

export interface LogExporter {
    /**
     * Called to export sampled {@link LogRecord}s.
     * @param logRecords the list of sampled LogRecords to be exported.
     */
    export(logRecords: LogRecord[], resultCallback: (result: ExportResult) => void): void;

    /** Stops the exporter. Throws in Cloudflare, added for future compat */
    shutdown(): Promise<void>;
}
