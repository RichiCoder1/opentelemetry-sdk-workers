---
"opentelemetry-sdk-workers": patch
---

add support for providing propagators

You can now providers to the Workers SDK via `config.propagators`. It's recommended to still provide the default WC3 Context and Baggage Providers.

For example:

```typescript
/* Required to patch missing performance API in Cloudflare Workers. */
import "opentelemetry-sdk-workers/performance";
import { WorkersSDK } from "opentelemetry-sdk-workers";
import {
    CompositePropagator,
    W3CBaggagePropagator,
    W3CTraceContextPropagator,
} from '@opentelemetry/core';
import { BigBrandPropagator } from "@big-brand/opentelemetry-propagator";

export interface Env {
	OTLP_ENDPOINT: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const sdk = WorkersSDK.fromEnv(request, env, ctx, {
			propagator: new CompositePropagator({
					propagators: [new BigBrandPropagator(), new W3CTraceContextPropagator(), new W3CBaggagePropagator()],
			})
		});

		try {
			sdk.log.info("Test Log!");

			const response = await sdk.fetch("https://httpbin.org/headers/");
			return sdk.sendResponse(response);
		} catch (ex) {
			sdk.captureException(ex);
		}
	},
};
```
