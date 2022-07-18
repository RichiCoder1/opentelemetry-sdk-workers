import { Context } from "@opentelemetry/api";

export class SimpleContext implements Context {
    private _data = new Map<symbol, unknown>();
    getValue(key: symbol): unknown {
        return this._data.get(key);
    }
    setValue(key: symbol, value: unknown): Context {
        this._data.set(key, value);
        return this;
    }
    deleteValue(key: symbol): Context {
        this._data.delete(key);
        return this;
    }

}