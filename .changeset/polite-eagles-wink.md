---
"opentelemetry-sdk-workers": minor
---

BREAKING CHANGE: service name is now required

You must now provide the service name via the `service` config option or via `env.OTLP_SERVICE_NAME` if using `fromEnv`.
