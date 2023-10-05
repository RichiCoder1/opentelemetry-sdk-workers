import { default as base } from "../../configs/tsup.base.config.js";

export default {
	...base,
	entry: [
		"src/index.ts",
		"src/performance.ts",
		"src/exporters/OTLPProtoTraceExporter.ts",
		"src/exporters/OTLPProtoLogExporter.ts",
	],
	noExternal: ['protobufjs'],
};
