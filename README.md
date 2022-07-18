# Open Telemetry SDK for Cloudflare Workers

A WIP library for adding tracing (and soon, logging) to Cloudflare Workers.

## Installation

```shell
npm i opentelemetry-sdk-workers
```

## Usage

```typescript
/* Required to patch missing performance API in Cloudflare Workers. */
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
            /* This is the service.name */
			workerName: "worker",
            /* The OTLP/HTTP JSON Endpoint to send traces */
			endpoint: env.OTLP_ENDPOINT
		});
		const trace = otel.start(request, ctx);
		return trace.sendResponse(new Response("Hello World!"));
	},
};

```