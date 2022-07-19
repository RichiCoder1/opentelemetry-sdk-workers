import "opentelemetry-sdk-workers/performance";
import { WorkersSDK } from "opentelemetry-sdk-workers";
import { OTLPProtoTraceExporter } from "opentelemetry-sdk-workers/exporters/OTLPProtoTraceExporter";
import { OTLPProtoLogExporter } from "opentelemetry-sdk-workers/exporters/OTLPProtoLogExporter";

export interface Env {
	OTLP_ENDPOINT: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const sdk = new WorkersSDK(request, ctx, {
			service: "sample-worker",
			traceExporter: new OTLPProtoTraceExporter({
				url: env.OTLP_ENDPOINT
			}),
			logExporter: new OTLPProtoLogExporter({
				url: env.OTLP_ENDPOINT
			})
		});

		sdk.log.info("Test Log!");

		const url = new URL(request.url);
		const response = await sdk.fetch(`https://httpbin.org${url.pathname}`);
		return sdk.res(response);
	}
};
