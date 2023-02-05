import { diag } from "@opentelemetry/api";
import { ExportResult, ExportResultCode } from "@opentelemetry/core";
import {
	configureExporterTimeout,
	ExportServiceError,
	OTLPExporterConfigBase,
	OTLPExporterError,
	parseHeaders
} from "@opentelemetry/otlp-exporter-base";
import { isError } from "lodash-es";

export type OTLPCloudflareExporterBaseConfig = Omit<
	OTLPExporterConfigBase,
	"hostname"
> & {
	url: string;
	compress?: boolean;
};

/**
 * Cloudflare Collector Exporter abstract base class
 * Adapted from: https://raw.githubusercontent.com/open-telemetry/opentelemetry-js/main/experimental/packages/otlp-exporter-base/src/OTLPExporterBase.ts
 */
export abstract class OTLPCloudflareExporterBase<
	T extends OTLPCloudflareExporterBaseConfig,
	ExportItem,
	ServiceRequest
> {
	private DEFAULT_HEADERS: Record<string, string> = {};

	public readonly url: string;
	public readonly timeoutMillis: number;
	protected _concurrencyLimit: number;
	protected _sendingPromises: Promise<unknown>[] = [];
	protected headers: Record<string, string>;
	protected enableCompression: boolean;

	/**
	 * @param config
	 */
	constructor(config: T = {} as T) {
		this.url = this.getUrl(config.url);
		if ((config as any).metadata) {
			diag.warn("Metadata cannot be set when using http");
		}
		this.headers = Object.assign(
			this.DEFAULT_HEADERS,
			parseHeaders(config.headers)
		);

		this._concurrencyLimit =
			typeof config.concurrencyLimit === "number"
				? config.concurrencyLimit
				: Infinity;

		this.timeoutMillis = configureExporterTimeout(config.timeoutMillis);
		
		this.enableCompression = config.compress ?? true;
	}

	/**
	 * Export items.
	 * @param items
	 * @param resultCallback
	 */
	export(
		items: ExportItem[],
		resultCallback: (result: ExportResult) => void
	): void {
		if (this._sendingPromises.length >= this._concurrencyLimit) {
			resultCallback({
				code: ExportResultCode.FAILED,
				error: new Error("Concurrent export limit reached")
			});
			return;
		}

		this._export(items)
			.then(() => {
				resultCallback({ code: ExportResultCode.SUCCESS });
			})
			.catch((error: ExportServiceError) => {
				resultCallback({ code: ExportResultCode.FAILED, error });
			});
	}

	private _export(items: ExportItem[]): Promise<unknown> {
		diag.debug("items to be sent", items);
		return this.send(items);
	}
	
	private compress(response: Response) {
		if (!this.enableCompression) {
			return { body: response.body, headers: {} };
		}
		
		const compressionStream = new CompressionStream("gzip");
		const compressedBody = response.body.pipeThrough(compressionStream);
		
		return { body: compressedBody, headers: {"content-encoding": "gzip"} };
	}

	send(items: ExportItem[]): Promise<void> {
		const serviceRequest = this.convert(items);
		let body: string | Uint8Array =
			serviceRequest instanceof Uint8Array
				? serviceRequest
				: JSON.stringify(serviceRequest);

		const signal: AbortSignal = (AbortSignal as any).timeout(
			this.timeoutMillis
		);
		const responseBuffer = new Response(body);
		const compressed = this.compress(responseBuffer);

		const promise = fetch(this.url, {
			method: "POST",
			headers: {
				"content-type": this.contentType,
				...compressed.headers,
				...this.headers
			},
			body: compressed.body,
			signal
		})
			.then(res => {
				if (!res.ok) {
					throw new OTLPExporterError(res.statusText, res.status);
				}
			})
			.catch(error => {
				if (isError(error)) {
					if (error.name === "TimeoutError") {
						throw new OTLPExporterError("Request Timeout");
					}
				}
				throw new OTLPExporterError(`Unknown error ${error}`);
			});

		this._sendingPromises.push(promise);
		return promise;
	}

	/**
	 * Shutdown the exporter.
	 */
	shutdown(): Promise<void> {
		throw new Error("Shutdown is not supported by this exporter.");
	}

	abstract contentType: string;
	abstract convert(objects: ExportItem[]): ServiceRequest;
	abstract getUrl(urlBase: string): string;
}
