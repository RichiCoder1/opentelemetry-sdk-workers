import "opentelemetry-sdk-workers/performance";
import { WorkersSDK } from "opentelemetry-sdk-workers";

export interface Env extends Record<string, string> {
	/*
	 * The name of the worker or service it represents.
	 */
	OTEL_SERVICE_NAME: string;
	/*
	 * Should be set to the desired OTLP endpoint.
	 * For example: https://api.honeycomb.io
	 */
	OTEL_EXPORTER_OTLP_ENDPOINT: string;
	/*
	 * Any headers to add to the request.
	 * See https://opentelemetry.io/docs/concepts/sdk-configuration/otlp-exporter-configuration/#otel_exporter_otlp_headers for more details.
	 */
	OTEL_EXPORTER_OTLP_HEADERS: string;
	/*
	 * Wether or not to enable logging. Defaults to false internal, set to "true" or "1" to enable.
	 */
	OTEL_EXPORTER_LOGS_ENABLED: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const sdk = WorkersSDK.fromEnv(request, env, ctx);

		sdk.log.info("Test Log!");

		const url = new URL(request.url);
		const response = await sdk.fetch(`https://httpbin.org${url.pathname}`);
		return sdk.res(response);
	}
};
