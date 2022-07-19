# Open Telemetry SDK for Cloudflare Workers

A WIP library for adding tracing (and soon, logging) to Cloudflare Workers.

## Installation

```shell
npm i opentelemetry-sdk-workers
```

## Usage

A basic implementation looks like this:

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
		const sdk = new WorkersSDK(request, ctx, {
			service: "worker",
            /* The OTLP/HTTP JSON Endpoint to send traces */
			endpoint: env.OTLP_ENDPOINT
		});
		return sdk.sendResponse(new Response("Hello World!"));
	},
};
```

This SDK does not automatically track fetch requests. In order to fetch, you must do so via the `fetch` method exposed by the trace sdk.

```typescript
export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const sdk = new WorkersSDK(request, ctx, {
			/* This is the service.name */
			workerName: "worker",
			/* The OTLP/HTTP JSON Endpoint to send traces */
			endpoint: env.OTLP_ENDPOINT
		});

		try {
			const response = await sdk.fetch("https://httpbin.org/headers/");
			return sdk.sendResponse(response);
		} catch (ex) {
			sdk.captureException(ex);
		}
	},
};
```