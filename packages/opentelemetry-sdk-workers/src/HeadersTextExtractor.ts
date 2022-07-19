import { TextMapGetter, TextMapSetter } from "@opentelemetry/api";

export class HeadersTextMapper
	implements TextMapGetter<Headers>, TextMapSetter<Headers> {
	keys(carrier: Headers): string[] {
		return Array.from(carrier.keys());
	}
	get(carrier: Headers, key: string): string | string[] {
		if (key.toLowerCase() === "set-cookie") {
			return carrier.getAll(key);
		}
		return carrier.get(key);
	}
	set(carrier: Headers, key: string, value: string): void {
		carrier.set(key, value);
	}
}
