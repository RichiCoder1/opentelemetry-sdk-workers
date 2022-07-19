import "opentelemetry-sdk-workers/performance";
import { OTLPJsonLogExporter, WorkersSDK } from "opentelemetry-sdk-workers";

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
			endpoint: env.OTLP_ENDPOINT,
			logExporter: new OTLPJsonLogExporter({
				url: env.OTLP_ENDPOINT
			}),
		});

		sdk.log.info("Test Log!");

		const url = new URL(request.url);
		const response = await sdk.fetch(`https://httpbin.org${url.pathname}`);
		return sdk.res(response);
	}
};
