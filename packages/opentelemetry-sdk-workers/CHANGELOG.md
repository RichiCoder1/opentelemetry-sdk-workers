# opentelemetry-sdk-workers

## 0.5.0

### Minor Changes

- [`ac2178d`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/ac2178df3d62e7866358dec3f4a386725f44cbfc) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - flesh out support for env vars for logging and compression

  You can now provide `OTEL_EXPORTER_LOGS_ENABLED=true` to enable the Logs Exporter, and `OTEL_EXPORTER_COMPRESSION_ENABLED=false` to disable automatic exporter compression.

- [`7e10209`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/7e10209c13429e9e0dd984eb507237930df3adc2) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - BREAKING CHANGE: service name is now required

  You must now provide the service name via the `service` config option or via `env.OTLP_SERVICE_NAME` if using `fromEnv`.

- [#14](https://github.com/RichiCoder1/opentelemetry-sdk-workers/pull/14) [`ba6864a`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/ba6864a65c8b827536b5579c00c4c1d22b44e3cb) Thanks [@BraunreutherA](https://github.com/BraunreutherA)! - The gzip compression for the LogExporter is now optional, as some observability platforms won't accept gzipped streams. Compression is activated by default - please set the property "compress" to false in a LogExporter config to deactivate the compression.

  Closes [#10](https://github.com/RichiCoder1/opentelemetry-sdk-workers/issues/10)

- [`e64b42f`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/e64b42f09d19e36e29a3da2a5de03dee1b72cbe9) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - BREAKING CHANGED: `sdk.log` renamed to `sdk.logger` and console.log disabled by default

  The SDK logger has be renamed from `sdk.log` to `sdk.logger` to clarify that it's a provider and not a method itself.

  In addition, the logger will no longer output to `console.log` by default. If you'd like to re-enable this behavior, provider `consoleLogEnabled: true` to the configuration or set `env.OTEL_EXPORTER_LOGS_CONSOLE_ENABLED=true` if using `fromEnv`.

  This may change again in the future to provide multiple explicit "sinks".

  Closes [#15](https://github.com/RichiCoder1/opentelemetry-sdk-workers/issues/15).

- [`3fa6a2f`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/3fa6a2fcba91df94bbef9c329aa75e94470c5f77) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - Update dependencies

- [`8c732df`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/8c732df6a5e45bbc826bbe05787ed10ae6d8f7e9) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - BREAKING CHANGE: URL provided to exporters will now be used verbatim

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

  Closes [#16](https://github.com/RichiCoder1/opentelemetry-sdk-workers/issues/16)

### Patch Changes

- [`a60240e`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/a60240e22f25c35013e7ad92281f465f8e87f5f6) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - adapt to diary behavioral changes

## 0.4.0

### Minor Changes

- [`10d3aa8`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/10d3aa87a3a9675a5c3460759518b6bb74386967) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - Added OTLP/HTTP Protobuf support as an optional exporter

* [#8](https://github.com/RichiCoder1/opentelemetry-sdk-workers/pull/8) [`cd0f07b`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/cd0f07bc77116389394907f1dafb7d874b8d1e80) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - Reorganized exporters and added exporter base for extensibility.

  Exporters are now in `exporters/` and implement a Cloudflare fetch-based exporter base.

- [#8](https://github.com/RichiCoder1/opentelemetry-sdk-workers/pull/8) [`cd0f07b`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/cd0f07bc77116389394907f1dafb7d874b8d1e80) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - Add compression support to outgoing requests

## 0.3.0

### Minor Changes

- [`bbe5dd6`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/bbe5dd6614649bf19797570bc68b2a926f3e24c1) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - Republishing to solve publishing issues.

## 0.2.0

### Minor Changes

- [`b4e95f1`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/b4e95f17812e9a3589836e692c35f957c3eaeb5b) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - Change SDK API and officially support subrequests

## 0.1.0

### Minor Changes

- [`4b0be74`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/4b0be74f65082160cb568cb2b8787d8d9e9d2012) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - Add subrequest support and more span metadata

* [`ad004e9`](https://github.com/RichiCoder1/opentelemetry-sdk-workers/commit/ad004e93ce8942466427b2ee959e1c2bd1dddecb) Thanks [@RichiCoder1](https://github.com/RichiCoder1)! - Initial testing release
