---
"opentelemetry-sdk-workers": minor
---

The gzip compression for the LogExporter is now optional, as some observability platforms won't accept gzipped streams. Compression is activated by default - please set the property "compress" to false in a LogExporter config to deactivate the compression.
