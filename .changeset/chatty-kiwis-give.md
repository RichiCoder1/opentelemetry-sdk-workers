---
"opentelemetry-sdk-workers": minor
---

flesh out support for env vars for logging and compression

You can now provide `OTEL_EXPORTER_LOGS_ENABLED=true` to enable the Logs Exporter, and `OTEL_EXPORTER_COMPRESSION_ENABLED=false` to disable automatic exporter compression.
