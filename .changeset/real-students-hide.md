---
"opentelemetry-sdk-workers": minor
---

Add support for fetch-based bindings.

You can now trace any `fetch`-based bindings like Service Bindings or Durable Objects.
To use this support, you can pass in the Env to the third argument when creating the Workers SDK and access bindings via `sdk.env.<BINDING>`.

For example, say you have an authentication service bound as `auth`:

```typescript
/* Required to patch missing performance API in Cloudflare Workers. */
import "opentelemetry-sdk-workers/performance";
import { WorkersSDK } from "opentelemetry-sdk-workers";

export interface Env {
	OTLP_ENDPOINT: string;

	/***
	 * Authentication Service
	 */
	AUTH: Fetcher /* Type available from @cloudflare/workers-types */;
}


export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const sdk = new WorkersSDK(request, ctx, env, {
			/* This is the service.name */
			service: "worker",
			/* The OTLP/HTTP JSON Endpoint to send traces */
			endpoint: env.OTLP_ENDPOINT
		});

		try {

			const authResponse = await sdk.env.AUTH.fetch(request);
			if (!authResponse.ok) {
				return sdk.sendResponse(authResponse);
			}

			const response = await sdk.fetch("https://httpbin.org/headers/");
			return sdk.sendResponse(response);
		} catch (ex) {
			sdk.captureException(ex);
		}
	},
};
```

> **Note**
> When using TypeScript, you must provide the Environment type with bindings inheriting from the `Fetcher` type in the `@cloudflare/worker-types` in order for them to be available on `sdk.env`.
