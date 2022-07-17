import { performance } from "./performance";

// @ts-ignore
(global || globalThis)["performance"] = performance;