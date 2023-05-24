<!-- markdownlint-configure-file { "hard_tab": { "code_blocks": false } } -->
# Deprecated

I haven't been able to dedicate time to this project and an excellent successor that uses `node_compat` has been created:

https://github.com/evanderkoogh/otel-cf-workers

Unless you have a very good reason not to be using `node_compat`, I recommend switching over to using that library instead.


## Open Telemetry SDK for Cloudflare Workers

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
			service: "worker",
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

### Service Bindings and Durable Objects

This also works with any `fetch`-based bindings like Service Bindings or Durable Objects.
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

## Logging

This library exposes a basic logger based on [maraisr/diary](https://github.com/maraisr/diary) via `sdk.log`. By default, however, this logger only logs out to console. To enable support logging exports, you'll need to explicitly add the log exporter:

```typescript
export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const sdk = new WorkersSDK(request, ctx, {
			/* This is the service.name */
			service: "worker",
			/* The OTLP/HTTP JSON Endpoint to send traces */
			endpoint: env.OTLP_ENDPOINT,
			logExporter: new OTLPJsonLogExporter({
				url: env.OTLP_ENDPOINT
			}),
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

### Configuring the SDK via Environment Variables

A less verbose way to automatically configure the Workers SDK is to provide all values via Environment Variables.
For example, the logging sample above would become:

```typescript

/***
 * The environment variables, for example, would be:
 * OTEL_SERVICE_NAME: "my-service"
 * OTEL_EXPORTER_OTLP_ENDPOINT: "https://api.otelprovider.io"
 * OTEL_EXPORTER_OTLP_HEADERS: "x-api-key=abc123"
 * OTEL_EXPORTER_LOGS_ENABLED: "true"
 */

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const sdk = WorkersSDK.fromEnv(request, env, ctx);

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

### OTLP/HTTP Protobuf Support

By default this library uses OTLP/HTTP JSON both for size and simplicity reasons. However, this may not be supported by an import or you might the encoded format. If so, you can import and use the protobuf exporter like so:

```typescript
import "opentelemetry-sdk-workers/performance";
import { WorkersSDK } from "opentelemetry-sdk-workers";
/** The proto exporter is packaged seperately due to it's size */
import { OTLPProtoTraceExporter } from "opentelemetry-sdk-workers/exporters/OTLPProtoTraceExporter";

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
				endpoints: { default: env.OTLP_ENDPOINT },
				// or
				// url: "https://api.otelprovider.com/v1/traces"
			})
		});

		const url = new URL(request.url);
		const response = await sdk.fetch(`https://httpbin.org${url.pathname}`);
		return sdk.res(response);
	},
};
```
