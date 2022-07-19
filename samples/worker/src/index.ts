import "opentelemetry-sdk-workers/performance";
import { WorkersSDK } from "opentelemetry-sdk-workers";

export interface Env {
	OTLP_ENDPOINT: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const otel = new WorkersSDK({
			workerName: "sample-worker",
			endpoint: env.OTLP_ENDPOINT
		});
		const trace = otel.start(request, ctx);

		const url = new URL(request.url);
		const response = await trace.fetch(`https://httpbin.org${url.pathname}`);
		return trace.sendResponse(response);
	},
};
