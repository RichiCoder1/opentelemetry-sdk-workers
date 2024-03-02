import {
	appendResourcePathToUrl,
	appendRootPathToUrlIfNeeded,
} from '@opentelemetry/otlp-exporter-base'
import { ReadableSpan } from '@opentelemetry/sdk-trace-base'
import {
	createExportTraceServiceRequest,
	IExportTraceServiceRequest,
} from '@opentelemetry/otlp-transformer'
import {
	OTLPCloudflareExporterBase,
	OTLPCloudflareExporterBaseConfig,
} from './OTLPCloudflareExporterBase'
import { baggageUtils } from '@opentelemetry/core'

const DEFAULT_COLLECTOR_RESOURCE_PATH = 'v1/traces'

export interface OTLPJsonTraceExporterConfig
	extends OTLPCloudflareExporterBaseConfig {}
export class OTLPJsonTraceExporter extends OTLPCloudflareExporterBase<
	OTLPJsonTraceExporterConfig,
	ReadableSpan,
	IExportTraceServiceRequest
> {
	static fromEnv(env: Record<string, unknown>) {
		return new OTLPJsonTraceExporter(
			OTLPCloudflareExporterBase.parseEnv(env, 'TRACES'),
		)
	}
	contentType = 'application/json'
	convert(spans: ReadableSpan[]): IExportTraceServiceRequest {
		return createExportTraceServiceRequest(spans, { useHex: true })
	}
	getUrl(config: OTLPCloudflareExporterBaseConfig): string {
		if (typeof config.url === 'string') {
			return config.url
		}

		if (config.endpoints?.traces?.length > 0) {
			return appendRootPathToUrlIfNeeded(config.endpoints.traces)
		}

		if (config.endpoints?.default?.length > 0) {
			return appendResourcePathToUrl(
				config.endpoints.default,
				DEFAULT_COLLECTOR_RESOURCE_PATH,
			)
		}

		throw new Error(
			'You must provide a valid URL for this exporter. Make sure either config.url or env.OTEL_EXPORTER_OTLP_ENDPOINT are specified.',
		)
	}
}
