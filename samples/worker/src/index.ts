import "opentelemetry-sdk-workers/performance";
import { WorkersSDK } from "opentelemetry-sdk-workers";

export interface Env {
	OTLP_ENDPOINT: string;
	OTLP_AUTH: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const otel = new WorkersSDK({
			workerName: "worker",
			endpoint: env.OTLP_ENDPOINT
		});
		const trace = otel.start(request, ctx);
		return trace.sendResponse(new Response("Hello World!"));
	},
};
