import { HrTime } from "@opentelemetry/api";
import { InstrumentationScope } from "@opentelemetry/core";
import { Resource } from "@opentelemetry/resources";

export interface LogRecord {
	timestamp: HrTime;
	observedTimestamp: HrTime;
	traceId: string;
	spanId: string;
	traceFlags: number;
	severityText: string;
	severityNumber: number;
	body: string;
	resource: Resource;
	attributes: Record<string, any>;
	instrumentationLibrary: InstrumentationScope;
}
