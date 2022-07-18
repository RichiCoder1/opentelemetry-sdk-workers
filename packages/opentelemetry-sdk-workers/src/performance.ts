const unsupportedMethods: Array<string | symbol> = ["mark", "clearMarks", "measure", "clearMeasures", "getEntries", "getEntriesByType", "getEntriesByName"];

class UnsupportedMethodError extends Error {
    constructor(public method: string) {
        super(`The method '${method}' is not supported by this polyfill.`);
        this.name = "UnsupportedMethodError";
    }
}

const performanceShim = new Proxy({
    now: () => Date.now(),
    // TODO: How should this behave in a worker?
    timeOrigin: Date.now(),
}, {
    get(target, prop, receiver) {
        if (unsupportedMethods.includes(prop)) {
            throw new UnsupportedMethodError(prop.toString());
        }
        return Reflect.get(target, prop, receiver);
    }
});

// @ts-ignore
globalThis["performance"] = performanceShim;