import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace opentelemetry. */
export namespace opentelemetry {

    /** Namespace proto. */
    namespace proto {

        /** Namespace common. */
        namespace common {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an AnyValue. */
                interface IAnyValue {

                    /** AnyValue stringValue */
                    stringValue?: (string|null);

                    /** AnyValue boolValue */
                    boolValue?: (boolean|null);

                    /** AnyValue intValue */
                    intValue?: (number|Long|null);

                    /** AnyValue doubleValue */
                    doubleValue?: (number|null);

                    /** AnyValue arrayValue */
                    arrayValue?: (opentelemetry.proto.common.v1.IArrayValue|null);

                    /** AnyValue kvlistValue */
                    kvlistValue?: (opentelemetry.proto.common.v1.IKeyValueList|null);

                    /** AnyValue bytesValue */
                    bytesValue?: (Uint8Array|null);
                }

                /** Represents an AnyValue. */
                class AnyValue implements IAnyValue {

                    /**
                     * Constructs a new AnyValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.IAnyValue);

                    /** AnyValue stringValue. */
                    public stringValue?: (string|null);

                    /** AnyValue boolValue. */
                    public boolValue?: (boolean|null);

                    /** AnyValue intValue. */
                    public intValue?: (number|Long|null);

                    /** AnyValue doubleValue. */
                    public doubleValue?: (number|null);

                    /** AnyValue arrayValue. */
                    public arrayValue?: (opentelemetry.proto.common.v1.IArrayValue|null);

                    /** AnyValue kvlistValue. */
                    public kvlistValue?: (opentelemetry.proto.common.v1.IKeyValueList|null);

                    /** AnyValue bytesValue. */
                    public bytesValue?: (Uint8Array|null);

                    /** AnyValue value. */
                    public value?: ("stringValue"|"boolValue"|"intValue"|"doubleValue"|"arrayValue"|"kvlistValue"|"bytesValue");

                    /**
                     * Creates a new AnyValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnyValue instance
                     */
                    public static create(properties?: opentelemetry.proto.common.v1.IAnyValue): opentelemetry.proto.common.v1.AnyValue;

                    /**
                     * Encodes the specified AnyValue message. Does not implicitly {@link opentelemetry.proto.common.v1.AnyValue.verify|verify} messages.
                     * @param message AnyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.common.v1.IAnyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnyValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.AnyValue.verify|verify} messages.
                     * @param message AnyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.common.v1.IAnyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnyValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.AnyValue;

                    /**
                     * Decodes an AnyValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.common.v1.AnyValue;

                    /**
                     * Verifies an AnyValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnyValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnyValue
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.AnyValue;

                    /**
                     * Creates a plain object from an AnyValue message. Also converts values to other types if specified.
                     * @param message AnyValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.common.v1.AnyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnyValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnyValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ArrayValue. */
                interface IArrayValue {

                    /** ArrayValue values */
                    values?: (opentelemetry.proto.common.v1.IAnyValue[]|null);
                }

                /** Represents an ArrayValue. */
                class ArrayValue implements IArrayValue {

                    /**
                     * Constructs a new ArrayValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.IArrayValue);

                    /** ArrayValue values. */
                    public values: opentelemetry.proto.common.v1.IAnyValue[];

                    /**
                     * Creates a new ArrayValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ArrayValue instance
                     */
                    public static create(properties?: opentelemetry.proto.common.v1.IArrayValue): opentelemetry.proto.common.v1.ArrayValue;

                    /**
                     * Encodes the specified ArrayValue message. Does not implicitly {@link opentelemetry.proto.common.v1.ArrayValue.verify|verify} messages.
                     * @param message ArrayValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.common.v1.IArrayValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ArrayValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.ArrayValue.verify|verify} messages.
                     * @param message ArrayValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.common.v1.IArrayValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ArrayValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ArrayValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.ArrayValue;

                    /**
                     * Decodes an ArrayValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ArrayValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.common.v1.ArrayValue;

                    /**
                     * Verifies an ArrayValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ArrayValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ArrayValue
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.ArrayValue;

                    /**
                     * Creates a plain object from an ArrayValue message. Also converts values to other types if specified.
                     * @param message ArrayValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.common.v1.ArrayValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ArrayValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ArrayValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a KeyValueList. */
                interface IKeyValueList {

                    /** KeyValueList values */
                    values?: (opentelemetry.proto.common.v1.IKeyValue[]|null);
                }

                /** Represents a KeyValueList. */
                class KeyValueList implements IKeyValueList {

                    /**
                     * Constructs a new KeyValueList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.IKeyValueList);

                    /** KeyValueList values. */
                    public values: opentelemetry.proto.common.v1.IKeyValue[];

                    /**
                     * Creates a new KeyValueList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KeyValueList instance
                     */
                    public static create(properties?: opentelemetry.proto.common.v1.IKeyValueList): opentelemetry.proto.common.v1.KeyValueList;

                    /**
                     * Encodes the specified KeyValueList message. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValueList.verify|verify} messages.
                     * @param message KeyValueList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.common.v1.IKeyValueList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KeyValueList message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValueList.verify|verify} messages.
                     * @param message KeyValueList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.common.v1.IKeyValueList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyValueList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KeyValueList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.KeyValueList;

                    /**
                     * Decodes a KeyValueList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KeyValueList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.common.v1.KeyValueList;

                    /**
                     * Verifies a KeyValueList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KeyValueList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyValueList
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.KeyValueList;

                    /**
                     * Creates a plain object from a KeyValueList message. Also converts values to other types if specified.
                     * @param message KeyValueList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.common.v1.KeyValueList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyValueList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for KeyValueList
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a KeyValue. */
                interface IKeyValue {

                    /** KeyValue key */
                    key?: (string|null);

                    /** KeyValue value */
                    value?: (opentelemetry.proto.common.v1.IAnyValue|null);
                }

                /** Represents a KeyValue. */
                class KeyValue implements IKeyValue {

                    /**
                     * Constructs a new KeyValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.IKeyValue);

                    /** KeyValue key. */
                    public key: string;

                    /** KeyValue value. */
                    public value?: (opentelemetry.proto.common.v1.IAnyValue|null);

                    /**
                     * Creates a new KeyValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KeyValue instance
                     */
                    public static create(properties?: opentelemetry.proto.common.v1.IKeyValue): opentelemetry.proto.common.v1.KeyValue;

                    /**
                     * Encodes the specified KeyValue message. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValue.verify|verify} messages.
                     * @param message KeyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.common.v1.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KeyValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValue.verify|verify} messages.
                     * @param message KeyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.common.v1.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KeyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.KeyValue;

                    /**
                     * Decodes a KeyValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KeyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.common.v1.KeyValue;

                    /**
                     * Verifies a KeyValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KeyValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyValue
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.KeyValue;

                    /**
                     * Creates a plain object from a KeyValue message. Also converts values to other types if specified.
                     * @param message KeyValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.common.v1.KeyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for KeyValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InstrumentationScope. */
                interface IInstrumentationScope {

                    /** InstrumentationScope name */
                    name?: (string|null);

                    /** InstrumentationScope version */
                    version?: (string|null);

                    /** InstrumentationScope attributes */
                    attributes?: (opentelemetry.proto.common.v1.IKeyValue[]|null);

                    /** InstrumentationScope droppedAttributesCount */
                    droppedAttributesCount?: (number|null);
                }

                /** Represents an InstrumentationScope. */
                class InstrumentationScope implements IInstrumentationScope {

                    /**
                     * Constructs a new InstrumentationScope.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.IInstrumentationScope);

                    /** InstrumentationScope name. */
                    public name: string;

                    /** InstrumentationScope version. */
                    public version: string;

                    /** InstrumentationScope attributes. */
                    public attributes: opentelemetry.proto.common.v1.IKeyValue[];

                    /** InstrumentationScope droppedAttributesCount. */
                    public droppedAttributesCount: number;

                    /**
                     * Creates a new InstrumentationScope instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstrumentationScope instance
                     */
                    public static create(properties?: opentelemetry.proto.common.v1.IInstrumentationScope): opentelemetry.proto.common.v1.InstrumentationScope;

                    /**
                     * Encodes the specified InstrumentationScope message. Does not implicitly {@link opentelemetry.proto.common.v1.InstrumentationScope.verify|verify} messages.
                     * @param message InstrumentationScope message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.common.v1.IInstrumentationScope, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstrumentationScope message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.InstrumentationScope.verify|verify} messages.
                     * @param message InstrumentationScope message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.common.v1.IInstrumentationScope, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstrumentationScope message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstrumentationScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.InstrumentationScope;

                    /**
                     * Decodes an InstrumentationScope message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstrumentationScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.common.v1.InstrumentationScope;

                    /**
                     * Verifies an InstrumentationScope message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstrumentationScope message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstrumentationScope
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.InstrumentationScope;

                    /**
                     * Creates a plain object from an InstrumentationScope message. Also converts values to other types if specified.
                     * @param message InstrumentationScope
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.common.v1.InstrumentationScope, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstrumentationScope to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InstrumentationScope
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** Namespace resource. */
        namespace resource {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a Resource. */
                interface IResource {

                    /** Resource attributes */
                    attributes?: (opentelemetry.proto.common.v1.IKeyValue[]|null);

                    /** Resource droppedAttributesCount */
                    droppedAttributesCount?: (number|null);
                }

                /** Represents a Resource. */
                class Resource implements IResource {

                    /**
                     * Constructs a new Resource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.resource.v1.IResource);

                    /** Resource attributes. */
                    public attributes: opentelemetry.proto.common.v1.IKeyValue[];

                    /** Resource droppedAttributesCount. */
                    public droppedAttributesCount: number;

                    /**
                     * Creates a new Resource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Resource instance
                     */
                    public static create(properties?: opentelemetry.proto.resource.v1.IResource): opentelemetry.proto.resource.v1.Resource;

                    /**
                     * Encodes the specified Resource message. Does not implicitly {@link opentelemetry.proto.resource.v1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.resource.v1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Resource message, length delimited. Does not implicitly {@link opentelemetry.proto.resource.v1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.resource.v1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Resource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.resource.v1.Resource;

                    /**
                     * Decodes a Resource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.resource.v1.Resource;

                    /**
                     * Verifies a Resource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Resource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Resource
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.resource.v1.Resource;

                    /**
                     * Creates a plain object from a Resource message. Also converts values to other types if specified.
                     * @param message Resource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.resource.v1.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Resource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Resource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** Namespace trace. */
        namespace trace {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a TracesData. */
                interface ITracesData {

                    /** TracesData resourceSpans */
                    resourceSpans?: (opentelemetry.proto.trace.v1.IResourceSpans[]|null);
                }

                /** Represents a TracesData. */
                class TracesData implements ITracesData {

                    /**
                     * Constructs a new TracesData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.ITracesData);

                    /** TracesData resourceSpans. */
                    public resourceSpans: opentelemetry.proto.trace.v1.IResourceSpans[];

                    /**
                     * Creates a new TracesData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TracesData instance
                     */
                    public static create(properties?: opentelemetry.proto.trace.v1.ITracesData): opentelemetry.proto.trace.v1.TracesData;

                    /**
                     * Encodes the specified TracesData message. Does not implicitly {@link opentelemetry.proto.trace.v1.TracesData.verify|verify} messages.
                     * @param message TracesData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.trace.v1.ITracesData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TracesData message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.TracesData.verify|verify} messages.
                     * @param message TracesData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.trace.v1.ITracesData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TracesData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TracesData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.TracesData;

                    /**
                     * Decodes a TracesData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TracesData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.TracesData;

                    /**
                     * Verifies a TracesData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TracesData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TracesData
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.TracesData;

                    /**
                     * Creates a plain object from a TracesData message. Also converts values to other types if specified.
                     * @param message TracesData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.trace.v1.TracesData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TracesData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TracesData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceSpans. */
                interface IResourceSpans {

                    /** ResourceSpans resource */
                    resource?: (opentelemetry.proto.resource.v1.IResource|null);

                    /** ResourceSpans scopeSpans */
                    scopeSpans?: (opentelemetry.proto.trace.v1.IScopeSpans[]|null);

                    /** ResourceSpans schemaUrl */
                    schemaUrl?: (string|null);
                }

                /** Represents a ResourceSpans. */
                class ResourceSpans implements IResourceSpans {

                    /**
                     * Constructs a new ResourceSpans.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.IResourceSpans);

                    /** ResourceSpans resource. */
                    public resource?: (opentelemetry.proto.resource.v1.IResource|null);

                    /** ResourceSpans scopeSpans. */
                    public scopeSpans: opentelemetry.proto.trace.v1.IScopeSpans[];

                    /** ResourceSpans schemaUrl. */
                    public schemaUrl: string;

                    /**
                     * Creates a new ResourceSpans instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceSpans instance
                     */
                    public static create(properties?: opentelemetry.proto.trace.v1.IResourceSpans): opentelemetry.proto.trace.v1.ResourceSpans;

                    /**
                     * Encodes the specified ResourceSpans message. Does not implicitly {@link opentelemetry.proto.trace.v1.ResourceSpans.verify|verify} messages.
                     * @param message ResourceSpans message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.trace.v1.IResourceSpans, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceSpans message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.ResourceSpans.verify|verify} messages.
                     * @param message ResourceSpans message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.trace.v1.IResourceSpans, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceSpans message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.ResourceSpans;

                    /**
                     * Decodes a ResourceSpans message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.ResourceSpans;

                    /**
                     * Verifies a ResourceSpans message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceSpans message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceSpans
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.ResourceSpans;

                    /**
                     * Creates a plain object from a ResourceSpans message. Also converts values to other types if specified.
                     * @param message ResourceSpans
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.trace.v1.ResourceSpans, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceSpans to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceSpans
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ScopeSpans. */
                interface IScopeSpans {

                    /** ScopeSpans scope */
                    scope?: (opentelemetry.proto.common.v1.IInstrumentationScope|null);

                    /** ScopeSpans spans */
                    spans?: (opentelemetry.proto.trace.v1.ISpan[]|null);

                    /** ScopeSpans schemaUrl */
                    schemaUrl?: (string|null);
                }

                /** Represents a ScopeSpans. */
                class ScopeSpans implements IScopeSpans {

                    /**
                     * Constructs a new ScopeSpans.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.IScopeSpans);

                    /** ScopeSpans scope. */
                    public scope?: (opentelemetry.proto.common.v1.IInstrumentationScope|null);

                    /** ScopeSpans spans. */
                    public spans: opentelemetry.proto.trace.v1.ISpan[];

                    /** ScopeSpans schemaUrl. */
                    public schemaUrl: string;

                    /**
                     * Creates a new ScopeSpans instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScopeSpans instance
                     */
                    public static create(properties?: opentelemetry.proto.trace.v1.IScopeSpans): opentelemetry.proto.trace.v1.ScopeSpans;

                    /**
                     * Encodes the specified ScopeSpans message. Does not implicitly {@link opentelemetry.proto.trace.v1.ScopeSpans.verify|verify} messages.
                     * @param message ScopeSpans message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.trace.v1.IScopeSpans, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScopeSpans message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.ScopeSpans.verify|verify} messages.
                     * @param message ScopeSpans message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.trace.v1.IScopeSpans, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScopeSpans message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScopeSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.ScopeSpans;

                    /**
                     * Decodes a ScopeSpans message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScopeSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.ScopeSpans;

                    /**
                     * Verifies a ScopeSpans message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScopeSpans message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScopeSpans
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.ScopeSpans;

                    /**
                     * Creates a plain object from a ScopeSpans message. Also converts values to other types if specified.
                     * @param message ScopeSpans
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.trace.v1.ScopeSpans, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScopeSpans to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ScopeSpans
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Span. */
                interface ISpan {

                    /** Span traceId */
                    traceId?: (Uint8Array|null);

                    /** Span spanId */
                    spanId?: (Uint8Array|null);

                    /** Span traceState */
                    traceState?: (string|null);

                    /** Span parentSpanId */
                    parentSpanId?: (Uint8Array|null);

                    /** Span name */
                    name?: (string|null);

                    /** Span kind */
                    kind?: (opentelemetry.proto.trace.v1.Span.SpanKind|null);

                    /** Span startTimeUnixNano */
                    startTimeUnixNano?: (number|Long|null);

                    /** Span endTimeUnixNano */
                    endTimeUnixNano?: (number|Long|null);

                    /** Span attributes */
                    attributes?: (opentelemetry.proto.common.v1.IKeyValue[]|null);

                    /** Span droppedAttributesCount */
                    droppedAttributesCount?: (number|null);

                    /** Span events */
                    events?: (opentelemetry.proto.trace.v1.Span.IEvent[]|null);

                    /** Span droppedEventsCount */
                    droppedEventsCount?: (number|null);

                    /** Span links */
                    links?: (opentelemetry.proto.trace.v1.Span.ILink[]|null);

                    /** Span droppedLinksCount */
                    droppedLinksCount?: (number|null);

                    /** Span status */
                    status?: (opentelemetry.proto.trace.v1.IStatus|null);
                }

                /** Represents a Span. */
                class Span implements ISpan {

                    /**
                     * Constructs a new Span.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.ISpan);

                    /** Span traceId. */
                    public traceId: Uint8Array;

                    /** Span spanId. */
                    public spanId: Uint8Array;

                    /** Span traceState. */
                    public traceState: string;

                    /** Span parentSpanId. */
                    public parentSpanId: Uint8Array;

                    /** Span name. */
                    public name: string;

                    /** Span kind. */
                    public kind: opentelemetry.proto.trace.v1.Span.SpanKind;

                    /** Span startTimeUnixNano. */
                    public startTimeUnixNano: (number|Long);

                    /** Span endTimeUnixNano. */
                    public endTimeUnixNano: (number|Long);

                    /** Span attributes. */
                    public attributes: opentelemetry.proto.common.v1.IKeyValue[];

                    /** Span droppedAttributesCount. */
                    public droppedAttributesCount: number;

                    /** Span events. */
                    public events: opentelemetry.proto.trace.v1.Span.IEvent[];

                    /** Span droppedEventsCount. */
                    public droppedEventsCount: number;

                    /** Span links. */
                    public links: opentelemetry.proto.trace.v1.Span.ILink[];

                    /** Span droppedLinksCount. */
                    public droppedLinksCount: number;

                    /** Span status. */
                    public status?: (opentelemetry.proto.trace.v1.IStatus|null);

                    /**
                     * Creates a new Span instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Span instance
                     */
                    public static create(properties?: opentelemetry.proto.trace.v1.ISpan): opentelemetry.proto.trace.v1.Span;

                    /**
                     * Encodes the specified Span message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.verify|verify} messages.
                     * @param message Span message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.trace.v1.ISpan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Span message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.verify|verify} messages.
                     * @param message Span message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.trace.v1.ISpan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Span message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Span
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Span;

                    /**
                     * Decodes a Span message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Span
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.Span;

                    /**
                     * Verifies a Span message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Span message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Span
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Span;

                    /**
                     * Creates a plain object from a Span message. Also converts values to other types if specified.
                     * @param message Span
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.trace.v1.Span, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Span to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Span
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Span {

                    /** SpanKind enum. */
                    enum SpanKind {
                        SPAN_KIND_UNSPECIFIED = 0,
                        SPAN_KIND_INTERNAL = 1,
                        SPAN_KIND_SERVER = 2,
                        SPAN_KIND_CLIENT = 3,
                        SPAN_KIND_PRODUCER = 4,
                        SPAN_KIND_CONSUMER = 5
                    }

                    /** Properties of an Event. */
                    interface IEvent {

                        /** Event timeUnixNano */
                        timeUnixNano?: (number|Long|null);

                        /** Event name */
                        name?: (string|null);

                        /** Event attributes */
                        attributes?: (opentelemetry.proto.common.v1.IKeyValue[]|null);

                        /** Event droppedAttributesCount */
                        droppedAttributesCount?: (number|null);
                    }

                    /** Represents an Event. */
                    class Event implements IEvent {

                        /**
                         * Constructs a new Event.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.trace.v1.Span.IEvent);

                        /** Event timeUnixNano. */
                        public timeUnixNano: (number|Long);

                        /** Event name. */
                        public name: string;

                        /** Event attributes. */
                        public attributes: opentelemetry.proto.common.v1.IKeyValue[];

                        /** Event droppedAttributesCount. */
                        public droppedAttributesCount: number;

                        /**
                         * Creates a new Event instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Event instance
                         */
                        public static create(properties?: opentelemetry.proto.trace.v1.Span.IEvent): opentelemetry.proto.trace.v1.Span.Event;

                        /**
                         * Encodes the specified Event message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Event.verify|verify} messages.
                         * @param message Event message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: opentelemetry.proto.trace.v1.Span.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Event message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Event.verify|verify} messages.
                         * @param message Event message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: opentelemetry.proto.trace.v1.Span.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Event message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Span.Event;

                        /**
                         * Decodes an Event message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.Span.Event;

                        /**
                         * Verifies an Event message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Event message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Event
                         */
                        public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Span.Event;

                        /**
                         * Creates a plain object from an Event message. Also converts values to other types if specified.
                         * @param message Event
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: opentelemetry.proto.trace.v1.Span.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Event to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Event
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Link. */
                    interface ILink {

                        /** Link traceId */
                        traceId?: (Uint8Array|null);

                        /** Link spanId */
                        spanId?: (Uint8Array|null);

                        /** Link traceState */
                        traceState?: (string|null);

                        /** Link attributes */
                        attributes?: (opentelemetry.proto.common.v1.IKeyValue[]|null);

                        /** Link droppedAttributesCount */
                        droppedAttributesCount?: (number|null);
                    }

                    /** Represents a Link. */
                    class Link implements ILink {

                        /**
                         * Constructs a new Link.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.trace.v1.Span.ILink);

                        /** Link traceId. */
                        public traceId: Uint8Array;

                        /** Link spanId. */
                        public spanId: Uint8Array;

                        /** Link traceState. */
                        public traceState: string;

                        /** Link attributes. */
                        public attributes: opentelemetry.proto.common.v1.IKeyValue[];

                        /** Link droppedAttributesCount. */
                        public droppedAttributesCount: number;

                        /**
                         * Creates a new Link instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Link instance
                         */
                        public static create(properties?: opentelemetry.proto.trace.v1.Span.ILink): opentelemetry.proto.trace.v1.Span.Link;

                        /**
                         * Encodes the specified Link message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Link.verify|verify} messages.
                         * @param message Link message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: opentelemetry.proto.trace.v1.Span.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Link message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Link.verify|verify} messages.
                         * @param message Link message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: opentelemetry.proto.trace.v1.Span.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Link message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Link
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Span.Link;

                        /**
                         * Decodes a Link message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Link
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.Span.Link;

                        /**
                         * Verifies a Link message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Link message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Link
                         */
                        public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Span.Link;

                        /**
                         * Creates a plain object from a Link message. Also converts values to other types if specified.
                         * @param message Link
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: opentelemetry.proto.trace.v1.Span.Link, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Link to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Link
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Status. */
                interface IStatus {

                    /** Status message */
                    message?: (string|null);

                    /** Status code */
                    code?: (opentelemetry.proto.trace.v1.Status.StatusCode|null);
                }

                /** Represents a Status. */
                class Status implements IStatus {

                    /**
                     * Constructs a new Status.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.IStatus);

                    /** Status message. */
                    public message: string;

                    /** Status code. */
                    public code: opentelemetry.proto.trace.v1.Status.StatusCode;

                    /**
                     * Creates a new Status instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Status instance
                     */
                    public static create(properties?: opentelemetry.proto.trace.v1.IStatus): opentelemetry.proto.trace.v1.Status;

                    /**
                     * Encodes the specified Status message. Does not implicitly {@link opentelemetry.proto.trace.v1.Status.verify|verify} messages.
                     * @param message Status message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.trace.v1.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Status message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Status.verify|verify} messages.
                     * @param message Status message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.trace.v1.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Status message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Status
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Status;

                    /**
                     * Decodes a Status message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Status
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.Status;

                    /**
                     * Verifies a Status message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Status message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Status
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Status;

                    /**
                     * Creates a plain object from a Status message. Also converts values to other types if specified.
                     * @param message Status
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.trace.v1.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Status to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Status
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Status {

                    /** StatusCode enum. */
                    enum StatusCode {
                        STATUS_CODE_UNSET = 0,
                        STATUS_CODE_OK = 1,
                        STATUS_CODE_ERROR = 2
                    }
                }
            }
        }

        /** Namespace logs. */
        namespace logs {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a LogsData. */
                interface ILogsData {

                    /** LogsData resourceLogs */
                    resourceLogs?: (opentelemetry.proto.logs.v1.IResourceLogs[]|null);
                }

                /** Represents a LogsData. */
                class LogsData implements ILogsData {

                    /**
                     * Constructs a new LogsData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.logs.v1.ILogsData);

                    /** LogsData resourceLogs. */
                    public resourceLogs: opentelemetry.proto.logs.v1.IResourceLogs[];

                    /**
                     * Creates a new LogsData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LogsData instance
                     */
                    public static create(properties?: opentelemetry.proto.logs.v1.ILogsData): opentelemetry.proto.logs.v1.LogsData;

                    /**
                     * Encodes the specified LogsData message. Does not implicitly {@link opentelemetry.proto.logs.v1.LogsData.verify|verify} messages.
                     * @param message LogsData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.logs.v1.ILogsData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LogsData message, length delimited. Does not implicitly {@link opentelemetry.proto.logs.v1.LogsData.verify|verify} messages.
                     * @param message LogsData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.logs.v1.ILogsData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LogsData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LogsData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.logs.v1.LogsData;

                    /**
                     * Decodes a LogsData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LogsData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.logs.v1.LogsData;

                    /**
                     * Verifies a LogsData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LogsData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LogsData
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.logs.v1.LogsData;

                    /**
                     * Creates a plain object from a LogsData message. Also converts values to other types if specified.
                     * @param message LogsData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.logs.v1.LogsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LogsData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LogsData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceLogs. */
                interface IResourceLogs {

                    /** ResourceLogs resource */
                    resource?: (opentelemetry.proto.resource.v1.IResource|null);

                    /** ResourceLogs scopeLogs */
                    scopeLogs?: (opentelemetry.proto.logs.v1.IScopeLogs[]|null);

                    /** ResourceLogs schemaUrl */
                    schemaUrl?: (string|null);
                }

                /** Represents a ResourceLogs. */
                class ResourceLogs implements IResourceLogs {

                    /**
                     * Constructs a new ResourceLogs.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.logs.v1.IResourceLogs);

                    /** ResourceLogs resource. */
                    public resource?: (opentelemetry.proto.resource.v1.IResource|null);

                    /** ResourceLogs scopeLogs. */
                    public scopeLogs: opentelemetry.proto.logs.v1.IScopeLogs[];

                    /** ResourceLogs schemaUrl. */
                    public schemaUrl: string;

                    /**
                     * Creates a new ResourceLogs instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceLogs instance
                     */
                    public static create(properties?: opentelemetry.proto.logs.v1.IResourceLogs): opentelemetry.proto.logs.v1.ResourceLogs;

                    /**
                     * Encodes the specified ResourceLogs message. Does not implicitly {@link opentelemetry.proto.logs.v1.ResourceLogs.verify|verify} messages.
                     * @param message ResourceLogs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.logs.v1.IResourceLogs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceLogs message, length delimited. Does not implicitly {@link opentelemetry.proto.logs.v1.ResourceLogs.verify|verify} messages.
                     * @param message ResourceLogs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.logs.v1.IResourceLogs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceLogs message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceLogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.logs.v1.ResourceLogs;

                    /**
                     * Decodes a ResourceLogs message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceLogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.logs.v1.ResourceLogs;

                    /**
                     * Verifies a ResourceLogs message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceLogs message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceLogs
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.logs.v1.ResourceLogs;

                    /**
                     * Creates a plain object from a ResourceLogs message. Also converts values to other types if specified.
                     * @param message ResourceLogs
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.logs.v1.ResourceLogs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceLogs to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceLogs
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ScopeLogs. */
                interface IScopeLogs {

                    /** ScopeLogs scope */
                    scope?: (opentelemetry.proto.common.v1.IInstrumentationScope|null);

                    /** ScopeLogs logRecords */
                    logRecords?: (opentelemetry.proto.logs.v1.ILogRecord[]|null);

                    /** ScopeLogs schemaUrl */
                    schemaUrl?: (string|null);
                }

                /** Represents a ScopeLogs. */
                class ScopeLogs implements IScopeLogs {

                    /**
                     * Constructs a new ScopeLogs.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.logs.v1.IScopeLogs);

                    /** ScopeLogs scope. */
                    public scope?: (opentelemetry.proto.common.v1.IInstrumentationScope|null);

                    /** ScopeLogs logRecords. */
                    public logRecords: opentelemetry.proto.logs.v1.ILogRecord[];

                    /** ScopeLogs schemaUrl. */
                    public schemaUrl: string;

                    /**
                     * Creates a new ScopeLogs instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScopeLogs instance
                     */
                    public static create(properties?: opentelemetry.proto.logs.v1.IScopeLogs): opentelemetry.proto.logs.v1.ScopeLogs;

                    /**
                     * Encodes the specified ScopeLogs message. Does not implicitly {@link opentelemetry.proto.logs.v1.ScopeLogs.verify|verify} messages.
                     * @param message ScopeLogs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.logs.v1.IScopeLogs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScopeLogs message, length delimited. Does not implicitly {@link opentelemetry.proto.logs.v1.ScopeLogs.verify|verify} messages.
                     * @param message ScopeLogs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.logs.v1.IScopeLogs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScopeLogs message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScopeLogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.logs.v1.ScopeLogs;

                    /**
                     * Decodes a ScopeLogs message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScopeLogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.logs.v1.ScopeLogs;

                    /**
                     * Verifies a ScopeLogs message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScopeLogs message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScopeLogs
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.logs.v1.ScopeLogs;

                    /**
                     * Creates a plain object from a ScopeLogs message. Also converts values to other types if specified.
                     * @param message ScopeLogs
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.logs.v1.ScopeLogs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScopeLogs to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ScopeLogs
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** SeverityNumber enum. */
                enum SeverityNumber {
                    SEVERITY_NUMBER_UNSPECIFIED = 0,
                    SEVERITY_NUMBER_TRACE = 1,
                    SEVERITY_NUMBER_TRACE2 = 2,
                    SEVERITY_NUMBER_TRACE3 = 3,
                    SEVERITY_NUMBER_TRACE4 = 4,
                    SEVERITY_NUMBER_DEBUG = 5,
                    SEVERITY_NUMBER_DEBUG2 = 6,
                    SEVERITY_NUMBER_DEBUG3 = 7,
                    SEVERITY_NUMBER_DEBUG4 = 8,
                    SEVERITY_NUMBER_INFO = 9,
                    SEVERITY_NUMBER_INFO2 = 10,
                    SEVERITY_NUMBER_INFO3 = 11,
                    SEVERITY_NUMBER_INFO4 = 12,
                    SEVERITY_NUMBER_WARN = 13,
                    SEVERITY_NUMBER_WARN2 = 14,
                    SEVERITY_NUMBER_WARN3 = 15,
                    SEVERITY_NUMBER_WARN4 = 16,
                    SEVERITY_NUMBER_ERROR = 17,
                    SEVERITY_NUMBER_ERROR2 = 18,
                    SEVERITY_NUMBER_ERROR3 = 19,
                    SEVERITY_NUMBER_ERROR4 = 20,
                    SEVERITY_NUMBER_FATAL = 21,
                    SEVERITY_NUMBER_FATAL2 = 22,
                    SEVERITY_NUMBER_FATAL3 = 23,
                    SEVERITY_NUMBER_FATAL4 = 24
                }

                /** LogRecordFlags enum. */
                enum LogRecordFlags {
                    LOG_RECORD_FLAG_UNSPECIFIED = 0,
                    LOG_RECORD_FLAG_TRACE_FLAGS_MASK = 255
                }

                /** Properties of a LogRecord. */
                interface ILogRecord {

                    /** LogRecord timeUnixNano */
                    timeUnixNano?: (number|Long|null);

                    /** LogRecord observedTimeUnixNano */
                    observedTimeUnixNano?: (number|Long|null);

                    /** LogRecord severityNumber */
                    severityNumber?: (opentelemetry.proto.logs.v1.SeverityNumber|null);

                    /** LogRecord severityText */
                    severityText?: (string|null);

                    /** LogRecord body */
                    body?: (opentelemetry.proto.common.v1.IAnyValue|null);

                    /** LogRecord attributes */
                    attributes?: (opentelemetry.proto.common.v1.IKeyValue[]|null);

                    /** LogRecord droppedAttributesCount */
                    droppedAttributesCount?: (number|null);

                    /** LogRecord flags */
                    flags?: (number|null);

                    /** LogRecord traceId */
                    traceId?: (Uint8Array|null);

                    /** LogRecord spanId */
                    spanId?: (Uint8Array|null);
                }

                /** Represents a LogRecord. */
                class LogRecord implements ILogRecord {

                    /**
                     * Constructs a new LogRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.logs.v1.ILogRecord);

                    /** LogRecord timeUnixNano. */
                    public timeUnixNano: (number|Long);

                    /** LogRecord observedTimeUnixNano. */
                    public observedTimeUnixNano: (number|Long);

                    /** LogRecord severityNumber. */
                    public severityNumber: opentelemetry.proto.logs.v1.SeverityNumber;

                    /** LogRecord severityText. */
                    public severityText: string;

                    /** LogRecord body. */
                    public body?: (opentelemetry.proto.common.v1.IAnyValue|null);

                    /** LogRecord attributes. */
                    public attributes: opentelemetry.proto.common.v1.IKeyValue[];

                    /** LogRecord droppedAttributesCount. */
                    public droppedAttributesCount: number;

                    /** LogRecord flags. */
                    public flags: number;

                    /** LogRecord traceId. */
                    public traceId: Uint8Array;

                    /** LogRecord spanId. */
                    public spanId: Uint8Array;

                    /**
                     * Creates a new LogRecord instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LogRecord instance
                     */
                    public static create(properties?: opentelemetry.proto.logs.v1.ILogRecord): opentelemetry.proto.logs.v1.LogRecord;

                    /**
                     * Encodes the specified LogRecord message. Does not implicitly {@link opentelemetry.proto.logs.v1.LogRecord.verify|verify} messages.
                     * @param message LogRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.logs.v1.ILogRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LogRecord message, length delimited. Does not implicitly {@link opentelemetry.proto.logs.v1.LogRecord.verify|verify} messages.
                     * @param message LogRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.logs.v1.ILogRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LogRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LogRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.logs.v1.LogRecord;

                    /**
                     * Decodes a LogRecord message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LogRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.logs.v1.LogRecord;

                    /**
                     * Verifies a LogRecord message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LogRecord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LogRecord
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.logs.v1.LogRecord;

                    /**
                     * Creates a plain object from a LogRecord message. Also converts values to other types if specified.
                     * @param message LogRecord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.logs.v1.LogRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LogRecord to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LogRecord
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** Namespace collector. */
        namespace collector {

            /** Namespace logs. */
            namespace logs {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents a LogsService */
                    class LogsService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new LogsService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new LogsService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LogsService;

                        /**
                         * Calls Export.
                         * @param request ExportLogsServiceRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ExportLogsServiceResponse
                         */
                        public export(request: opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest, callback: opentelemetry.proto.collector.logs.v1.LogsService.ExportCallback): void;

                        /**
                         * Calls Export.
                         * @param request ExportLogsServiceRequest message or plain object
                         * @returns Promise
                         */
                        public export(request: opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest): Promise<opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse>;
                    }

                    namespace LogsService {

                        /**
                         * Callback as used by {@link opentelemetry.proto.collector.logs.v1.LogsService#export_}.
                         * @param error Error, if any
                         * @param [response] ExportLogsServiceResponse
                         */
                        type ExportCallback = (error: (Error|null), response?: opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse) => void;
                    }

                    /** Properties of an ExportLogsServiceRequest. */
                    interface IExportLogsServiceRequest {

                        /** ExportLogsServiceRequest resourceLogs */
                        resourceLogs?: (opentelemetry.proto.logs.v1.IResourceLogs[]|null);
                    }

                    /** Represents an ExportLogsServiceRequest. */
                    class ExportLogsServiceRequest implements IExportLogsServiceRequest {

                        /**
                         * Constructs a new ExportLogsServiceRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest);

                        /** ExportLogsServiceRequest resourceLogs. */
                        public resourceLogs: opentelemetry.proto.logs.v1.IResourceLogs[];

                        /**
                         * Creates a new ExportLogsServiceRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExportLogsServiceRequest instance
                         */
                        public static create(properties?: opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest): opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;

                        /**
                         * Encodes the specified ExportLogsServiceRequest message. Does not implicitly {@link opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.verify|verify} messages.
                         * @param message ExportLogsServiceRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExportLogsServiceRequest message, length delimited. Does not implicitly {@link opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.verify|verify} messages.
                         * @param message ExportLogsServiceRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportLogsServiceRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExportLogsServiceRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;

                        /**
                         * Decodes an ExportLogsServiceRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExportLogsServiceRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;

                        /**
                         * Verifies an ExportLogsServiceRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExportLogsServiceRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportLogsServiceRequest
                         */
                        public static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;

                        /**
                         * Creates a plain object from an ExportLogsServiceRequest message. Also converts values to other types if specified.
                         * @param message ExportLogsServiceRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportLogsServiceRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExportLogsServiceRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExportLogsServiceResponse. */
                    interface IExportLogsServiceResponse {
                    }

                    /** Represents an ExportLogsServiceResponse. */
                    class ExportLogsServiceResponse implements IExportLogsServiceResponse {

                        /**
                         * Constructs a new ExportLogsServiceResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.logs.v1.IExportLogsServiceResponse);

                        /**
                         * Creates a new ExportLogsServiceResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExportLogsServiceResponse instance
                         */
                        public static create(properties?: opentelemetry.proto.collector.logs.v1.IExportLogsServiceResponse): opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;

                        /**
                         * Encodes the specified ExportLogsServiceResponse message. Does not implicitly {@link opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.verify|verify} messages.
                         * @param message ExportLogsServiceResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: opentelemetry.proto.collector.logs.v1.IExportLogsServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExportLogsServiceResponse message, length delimited. Does not implicitly {@link opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.verify|verify} messages.
                         * @param message ExportLogsServiceResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: opentelemetry.proto.collector.logs.v1.IExportLogsServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportLogsServiceResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExportLogsServiceResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;

                        /**
                         * Decodes an ExportLogsServiceResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExportLogsServiceResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;

                        /**
                         * Verifies an ExportLogsServiceResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExportLogsServiceResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportLogsServiceResponse
                         */
                        public static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;

                        /**
                         * Creates a plain object from an ExportLogsServiceResponse message. Also converts values to other types if specified.
                         * @param message ExportLogsServiceResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportLogsServiceResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExportLogsServiceResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Namespace trace. */
            namespace trace {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents a TraceService */
                    class TraceService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new TraceService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new TraceService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TraceService;

                        /**
                         * Calls Export.
                         * @param request ExportTraceServiceRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ExportTraceServiceResponse
                         */
                        public export(request: opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest, callback: opentelemetry.proto.collector.trace.v1.TraceService.ExportCallback): void;

                        /**
                         * Calls Export.
                         * @param request ExportTraceServiceRequest message or plain object
                         * @returns Promise
                         */
                        public export(request: opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest): Promise<opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse>;
                    }

                    namespace TraceService {

                        /**
                         * Callback as used by {@link opentelemetry.proto.collector.trace.v1.TraceService#export_}.
                         * @param error Error, if any
                         * @param [response] ExportTraceServiceResponse
                         */
                        type ExportCallback = (error: (Error|null), response?: opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse) => void;
                    }

                    /** Properties of an ExportTraceServiceRequest. */
                    interface IExportTraceServiceRequest {

                        /** ExportTraceServiceRequest resourceSpans */
                        resourceSpans?: (opentelemetry.proto.trace.v1.IResourceSpans[]|null);
                    }

                    /** Represents an ExportTraceServiceRequest. */
                    class ExportTraceServiceRequest implements IExportTraceServiceRequest {

                        /**
                         * Constructs a new ExportTraceServiceRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest);

                        /** ExportTraceServiceRequest resourceSpans. */
                        public resourceSpans: opentelemetry.proto.trace.v1.IResourceSpans[];

                        /**
                         * Creates a new ExportTraceServiceRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExportTraceServiceRequest instance
                         */
                        public static create(properties?: opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest): opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;

                        /**
                         * Encodes the specified ExportTraceServiceRequest message. Does not implicitly {@link opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.verify|verify} messages.
                         * @param message ExportTraceServiceRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExportTraceServiceRequest message, length delimited. Does not implicitly {@link opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.verify|verify} messages.
                         * @param message ExportTraceServiceRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportTraceServiceRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExportTraceServiceRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;

                        /**
                         * Decodes an ExportTraceServiceRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExportTraceServiceRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;

                        /**
                         * Verifies an ExportTraceServiceRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExportTraceServiceRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportTraceServiceRequest
                         */
                        public static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;

                        /**
                         * Creates a plain object from an ExportTraceServiceRequest message. Also converts values to other types if specified.
                         * @param message ExportTraceServiceRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportTraceServiceRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExportTraceServiceRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExportTraceServiceResponse. */
                    interface IExportTraceServiceResponse {
                    }

                    /** Represents an ExportTraceServiceResponse. */
                    class ExportTraceServiceResponse implements IExportTraceServiceResponse {

                        /**
                         * Constructs a new ExportTraceServiceResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.collector.trace.v1.IExportTraceServiceResponse);

                        /**
                         * Creates a new ExportTraceServiceResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExportTraceServiceResponse instance
                         */
                        public static create(properties?: opentelemetry.proto.collector.trace.v1.IExportTraceServiceResponse): opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;

                        /**
                         * Encodes the specified ExportTraceServiceResponse message. Does not implicitly {@link opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.verify|verify} messages.
                         * @param message ExportTraceServiceResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: opentelemetry.proto.collector.trace.v1.IExportTraceServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExportTraceServiceResponse message, length delimited. Does not implicitly {@link opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.verify|verify} messages.
                         * @param message ExportTraceServiceResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: opentelemetry.proto.collector.trace.v1.IExportTraceServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExportTraceServiceResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExportTraceServiceResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;

                        /**
                         * Decodes an ExportTraceServiceResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExportTraceServiceResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;

                        /**
                         * Verifies an ExportTraceServiceResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExportTraceServiceResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExportTraceServiceResponse
                         */
                        public static fromObject(object: { [k: string]: any }): opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;

                        /**
                         * Creates a plain object from an ExportTraceServiceResponse message. Also converts values to other types if specified.
                         * @param message ExportTraceServiceResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExportTraceServiceResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExportTraceServiceResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }
    }
}
