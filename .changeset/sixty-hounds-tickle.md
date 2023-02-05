---
"opentelemetry-sdk-workers": minor
---

BREAKING CHANGED: `sdk.log` renamed to `sdk.logger` and console.log disabled by default

The SDK logger has be renamed from `sdk.log` to `sdk.logger` to clarify that it's a provider and not a method itself.

In addition, the logger will no longer output to `console.log` by default. If you'd like to re-enable this behavior, provider `consoleLogEnabled: true` to the configuration or set `env.OTEL_EXPORTER_LOGS_CONSOLE_ENABLED=true` if using `fromEnv`.

This may change again in the future to provide multiple explicit "sinks".

Closes [#15](https://github.com/RichiCoder1/opentelemetry-sdk-workers/issues/15).
