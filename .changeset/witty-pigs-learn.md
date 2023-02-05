---
"opentelemetry-sdk-workers": minor
---

BREAKING CHANGE: URL provided to exporters will now be used verbatim

No change is required if you're just using the `endpoint` option in the config.

If you're using exporters explicitly (for example Proto exporters or the Log exporters), you now must either either provide the fully qualified endpoint to `url` or pass the base url in as `endpoints.default`.

For example:
```diff
		const sdk = new WorkersSDK(request, ctx, {
			/* This is the service.name */
			service: "worker",
			/* The OTLP/HTTP JSON Endpoint to send traces */
			endpoint: env.OTLP_ENDPOINT,
			logExporter: new OTLPJsonLogExporter({
-				url: env.OTLP_ENDPOINT
+				endpoints: { default: env.OTLP_ENDPOINT }
			}),
		});
```

or 

```diff
		const sdk = new WorkersSDK(request, ctx, {
			/* This is the service.name */
			service: "worker",
			/* The OTLP/HTTP JSON Endpoint to send traces */
			endpoint: env.OTLP_ENDPOINT,
			logExporter: new OTLPJsonLogExporter({
-				// https://api.otelprovider.io/
-				url: env.OTLP_ENDPOINT
+				// https://api.otelprovider.io/v1/logs/
+				url: env.OTLP_LOGS_ENDPOINT
			}),
		});
```
