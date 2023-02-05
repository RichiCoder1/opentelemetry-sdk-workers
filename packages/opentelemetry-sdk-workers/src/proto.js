/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const opentelemetry = $root.opentelemetry = (() => {

    /**
     * Namespace opentelemetry.
     * @exports opentelemetry
     * @namespace
     */
    const opentelemetry = {};

    opentelemetry.proto = (function() {

        /**
         * Namespace proto.
         * @memberof opentelemetry
         * @namespace
         */
        const proto = {};

        proto.common = (function() {

            /**
             * Namespace common.
             * @memberof opentelemetry.proto
             * @namespace
             */
            const common = {};

            common.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof opentelemetry.proto.common
                 * @namespace
                 */
                const v1 = {};

                v1.AnyValue = (function() {

                    /**
                     * Properties of an AnyValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @interface IAnyValue
                     * @property {string|null} [stringValue] AnyValue stringValue
                     * @property {boolean|null} [boolValue] AnyValue boolValue
                     * @property {number|Long|null} [intValue] AnyValue intValue
                     * @property {number|null} [doubleValue] AnyValue doubleValue
                     * @property {opentelemetry.proto.common.v1.IArrayValue|null} [arrayValue] AnyValue arrayValue
                     * @property {opentelemetry.proto.common.v1.IKeyValueList|null} [kvlistValue] AnyValue kvlistValue
                     * @property {Uint8Array|null} [bytesValue] AnyValue bytesValue
                     */

                    /**
                     * Constructs a new AnyValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @classdesc Represents an AnyValue.
                     * @implements IAnyValue
                     * @constructor
                     * @param {opentelemetry.proto.common.v1.IAnyValue=} [properties] Properties to set
                     */
                    function AnyValue(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AnyValue stringValue.
                     * @member {string|null|undefined} stringValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.stringValue = null;

                    /**
                     * AnyValue boolValue.
                     * @member {boolean|null|undefined} boolValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.boolValue = null;

                    /**
                     * AnyValue intValue.
                     * @member {number|Long|null|undefined} intValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.intValue = null;

                    /**
                     * AnyValue doubleValue.
                     * @member {number|null|undefined} doubleValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.doubleValue = null;

                    /**
                     * AnyValue arrayValue.
                     * @member {opentelemetry.proto.common.v1.IArrayValue|null|undefined} arrayValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.arrayValue = null;

                    /**
                     * AnyValue kvlistValue.
                     * @member {opentelemetry.proto.common.v1.IKeyValueList|null|undefined} kvlistValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.kvlistValue = null;

                    /**
                     * AnyValue bytesValue.
                     * @member {Uint8Array|null|undefined} bytesValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.bytesValue = null;

                    // OneOf field names bound to virtual getters and setters
                    let $oneOfFields;

                    /**
                     * AnyValue value.
                     * @member {"stringValue"|"boolValue"|"intValue"|"doubleValue"|"arrayValue"|"kvlistValue"|"bytesValue"|undefined} value
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    Object.defineProperty(AnyValue.prototype, "value", {
                        get: $util.oneOfGetter($oneOfFields = ["stringValue", "boolValue", "intValue", "doubleValue", "arrayValue", "kvlistValue", "bytesValue"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new AnyValue instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IAnyValue=} [properties] Properties to set
                     * @returns {opentelemetry.proto.common.v1.AnyValue} AnyValue instance
                     */
                    AnyValue.create = function create(properties) {
                        return new AnyValue(properties);
                    };

                    /**
                     * Encodes the specified AnyValue message. Does not implicitly {@link opentelemetry.proto.common.v1.AnyValue.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IAnyValue} message AnyValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AnyValue.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringValue);
                        if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.boolValue);
                        if (message.intValue != null && Object.hasOwnProperty.call(message, "intValue"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.intValue);
                        if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                            writer.uint32(/* id 4, wireType 1 =*/33).double(message.doubleValue);
                        if (message.arrayValue != null && Object.hasOwnProperty.call(message, "arrayValue"))
                            $root.opentelemetry.proto.common.v1.ArrayValue.encode(message.arrayValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.kvlistValue != null && Object.hasOwnProperty.call(message, "kvlistValue"))
                            $root.opentelemetry.proto.common.v1.KeyValueList.encode(message.kvlistValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.bytesValue != null && Object.hasOwnProperty.call(message, "bytesValue"))
                            writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.bytesValue);
                        return writer;
                    };

                    /**
                     * Encodes the specified AnyValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.AnyValue.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IAnyValue} message AnyValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AnyValue.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an AnyValue message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.AnyValue} AnyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AnyValue.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.AnyValue();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.stringValue = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.boolValue = reader.bool();
                                    break;
                                }
                            case 3: {
                                    message.intValue = reader.int64();
                                    break;
                                }
                            case 4: {
                                    message.doubleValue = reader.double();
                                    break;
                                }
                            case 5: {
                                    message.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.decode(reader, reader.uint32());
                                    break;
                                }
                            case 6: {
                                    message.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.decode(reader, reader.uint32());
                                    break;
                                }
                            case 7: {
                                    message.bytesValue = reader.bytes();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an AnyValue message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.common.v1.AnyValue} AnyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AnyValue.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an AnyValue message.
                     * @function verify
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AnyValue.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        let properties = {};
                        if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                            properties.value = 1;
                            if (!$util.isString(message.stringValue))
                                return "stringValue: string expected";
                        }
                        if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            if (typeof message.boolValue !== "boolean")
                                return "boolValue: boolean expected";
                        }
                        if (message.intValue != null && message.hasOwnProperty("intValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            if (!$util.isInteger(message.intValue) && !(message.intValue && $util.isInteger(message.intValue.low) && $util.isInteger(message.intValue.high)))
                                return "intValue: integer|Long expected";
                        }
                        if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            if (typeof message.doubleValue !== "number")
                                return "doubleValue: number expected";
                        }
                        if (message.arrayValue != null && message.hasOwnProperty("arrayValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            {
                                let error = $root.opentelemetry.proto.common.v1.ArrayValue.verify(message.arrayValue);
                                if (error)
                                    return "arrayValue." + error;
                            }
                        }
                        if (message.kvlistValue != null && message.hasOwnProperty("kvlistValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            {
                                let error = $root.opentelemetry.proto.common.v1.KeyValueList.verify(message.kvlistValue);
                                if (error)
                                    return "kvlistValue." + error;
                            }
                        }
                        if (message.bytesValue != null && message.hasOwnProperty("bytesValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            if (!(message.bytesValue && typeof message.bytesValue.length === "number" || $util.isString(message.bytesValue)))
                                return "bytesValue: buffer expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an AnyValue message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.common.v1.AnyValue} AnyValue
                     */
                    AnyValue.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.common.v1.AnyValue)
                            return object;
                        let message = new $root.opentelemetry.proto.common.v1.AnyValue();
                        if (object.stringValue != null)
                            message.stringValue = String(object.stringValue);
                        if (object.boolValue != null)
                            message.boolValue = Boolean(object.boolValue);
                        if (object.intValue != null)
                            if ($util.Long)
                                (message.intValue = $util.Long.fromValue(object.intValue)).unsigned = false;
                            else if (typeof object.intValue === "string")
                                message.intValue = parseInt(object.intValue, 10);
                            else if (typeof object.intValue === "number")
                                message.intValue = object.intValue;
                            else if (typeof object.intValue === "object")
                                message.intValue = new $util.LongBits(object.intValue.low >>> 0, object.intValue.high >>> 0).toNumber();
                        if (object.doubleValue != null)
                            message.doubleValue = Number(object.doubleValue);
                        if (object.arrayValue != null) {
                            if (typeof object.arrayValue !== "object")
                                throw TypeError(".opentelemetry.proto.common.v1.AnyValue.arrayValue: object expected");
                            message.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.fromObject(object.arrayValue);
                        }
                        if (object.kvlistValue != null) {
                            if (typeof object.kvlistValue !== "object")
                                throw TypeError(".opentelemetry.proto.common.v1.AnyValue.kvlistValue: object expected");
                            message.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.fromObject(object.kvlistValue);
                        }
                        if (object.bytesValue != null)
                            if (typeof object.bytesValue === "string")
                                $util.base64.decode(object.bytesValue, message.bytesValue = $util.newBuffer($util.base64.length(object.bytesValue)), 0);
                            else if (object.bytesValue.length >= 0)
                                message.bytesValue = object.bytesValue;
                        return message;
                    };

                    /**
                     * Creates a plain object from an AnyValue message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.AnyValue} message AnyValue
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AnyValue.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                            object.stringValue = message.stringValue;
                            if (options.oneofs)
                                object.value = "stringValue";
                        }
                        if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                            object.boolValue = message.boolValue;
                            if (options.oneofs)
                                object.value = "boolValue";
                        }
                        if (message.intValue != null && message.hasOwnProperty("intValue")) {
                            if (typeof message.intValue === "number")
                                object.intValue = options.longs === String ? String(message.intValue) : message.intValue;
                            else
                                object.intValue = options.longs === String ? $util.Long.prototype.toString.call(message.intValue) : options.longs === Number ? new $util.LongBits(message.intValue.low >>> 0, message.intValue.high >>> 0).toNumber() : message.intValue;
                            if (options.oneofs)
                                object.value = "intValue";
                        }
                        if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                            object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                            if (options.oneofs)
                                object.value = "doubleValue";
                        }
                        if (message.arrayValue != null && message.hasOwnProperty("arrayValue")) {
                            object.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.toObject(message.arrayValue, options);
                            if (options.oneofs)
                                object.value = "arrayValue";
                        }
                        if (message.kvlistValue != null && message.hasOwnProperty("kvlistValue")) {
                            object.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.toObject(message.kvlistValue, options);
                            if (options.oneofs)
                                object.value = "kvlistValue";
                        }
                        if (message.bytesValue != null && message.hasOwnProperty("bytesValue")) {
                            object.bytesValue = options.bytes === String ? $util.base64.encode(message.bytesValue, 0, message.bytesValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesValue) : message.bytesValue;
                            if (options.oneofs)
                                object.value = "bytesValue";
                        }
                        return object;
                    };

                    /**
                     * Converts this AnyValue to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AnyValue.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for AnyValue
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    AnyValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.common.v1.AnyValue";
                    };

                    return AnyValue;
                })();

                v1.ArrayValue = (function() {

                    /**
                     * Properties of an ArrayValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @interface IArrayValue
                     * @property {Array.<opentelemetry.proto.common.v1.IAnyValue>|null} [values] ArrayValue values
                     */

                    /**
                     * Constructs a new ArrayValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @classdesc Represents an ArrayValue.
                     * @implements IArrayValue
                     * @constructor
                     * @param {opentelemetry.proto.common.v1.IArrayValue=} [properties] Properties to set
                     */
                    function ArrayValue(properties) {
                        this.values = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ArrayValue values.
                     * @member {Array.<opentelemetry.proto.common.v1.IAnyValue>} values
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @instance
                     */
                    ArrayValue.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new ArrayValue instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IArrayValue=} [properties] Properties to set
                     * @returns {opentelemetry.proto.common.v1.ArrayValue} ArrayValue instance
                     */
                    ArrayValue.create = function create(properties) {
                        return new ArrayValue(properties);
                    };

                    /**
                     * Encodes the specified ArrayValue message. Does not implicitly {@link opentelemetry.proto.common.v1.ArrayValue.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IArrayValue} message ArrayValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ArrayValue.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length)
                            for (let i = 0; i < message.values.length; ++i)
                                $root.opentelemetry.proto.common.v1.AnyValue.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ArrayValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.ArrayValue.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IArrayValue} message ArrayValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ArrayValue.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ArrayValue message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.ArrayValue} ArrayValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ArrayValue.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.ArrayValue();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.values && message.values.length))
                                        message.values = [];
                                    message.values.push($root.opentelemetry.proto.common.v1.AnyValue.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an ArrayValue message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.common.v1.ArrayValue} ArrayValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ArrayValue.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ArrayValue message.
                     * @function verify
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ArrayValue.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (let i = 0; i < message.values.length; ++i) {
                                let error = $root.opentelemetry.proto.common.v1.AnyValue.verify(message.values[i]);
                                if (error)
                                    return "values." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an ArrayValue message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.common.v1.ArrayValue} ArrayValue
                     */
                    ArrayValue.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.common.v1.ArrayValue)
                            return object;
                        let message = new $root.opentelemetry.proto.common.v1.ArrayValue();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: array expected");
                            message.values = [];
                            for (let i = 0; i < object.values.length; ++i) {
                                if (typeof object.values[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: object expected");
                                message.values[i] = $root.opentelemetry.proto.common.v1.AnyValue.fromObject(object.values[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an ArrayValue message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.ArrayValue} message ArrayValue
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ArrayValue.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (let j = 0; j < message.values.length; ++j)
                                object.values[j] = $root.opentelemetry.proto.common.v1.AnyValue.toObject(message.values[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ArrayValue to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ArrayValue.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ArrayValue
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ArrayValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.common.v1.ArrayValue";
                    };

                    return ArrayValue;
                })();

                v1.KeyValueList = (function() {

                    /**
                     * Properties of a KeyValueList.
                     * @memberof opentelemetry.proto.common.v1
                     * @interface IKeyValueList
                     * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [values] KeyValueList values
                     */

                    /**
                     * Constructs a new KeyValueList.
                     * @memberof opentelemetry.proto.common.v1
                     * @classdesc Represents a KeyValueList.
                     * @implements IKeyValueList
                     * @constructor
                     * @param {opentelemetry.proto.common.v1.IKeyValueList=} [properties] Properties to set
                     */
                    function KeyValueList(properties) {
                        this.values = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * KeyValueList values.
                     * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} values
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @instance
                     */
                    KeyValueList.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new KeyValueList instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValueList=} [properties] Properties to set
                     * @returns {opentelemetry.proto.common.v1.KeyValueList} KeyValueList instance
                     */
                    KeyValueList.create = function create(properties) {
                        return new KeyValueList(properties);
                    };

                    /**
                     * Encodes the specified KeyValueList message. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValueList.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValueList} message KeyValueList message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyValueList.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length)
                            for (let i = 0; i < message.values.length; ++i)
                                $root.opentelemetry.proto.common.v1.KeyValue.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified KeyValueList message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValueList.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValueList} message KeyValueList message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyValueList.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a KeyValueList message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.KeyValueList} KeyValueList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyValueList.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.KeyValueList();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.values && message.values.length))
                                        message.values = [];
                                    message.values.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a KeyValueList message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.common.v1.KeyValueList} KeyValueList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyValueList.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a KeyValueList message.
                     * @function verify
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    KeyValueList.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (let i = 0; i < message.values.length; ++i) {
                                let error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.values[i]);
                                if (error)
                                    return "values." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a KeyValueList message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.common.v1.KeyValueList} KeyValueList
                     */
                    KeyValueList.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.common.v1.KeyValueList)
                            return object;
                        let message = new $root.opentelemetry.proto.common.v1.KeyValueList();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: array expected");
                            message.values = [];
                            for (let i = 0; i < object.values.length; ++i) {
                                if (typeof object.values[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: object expected");
                                message.values[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.values[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a KeyValueList message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {opentelemetry.proto.common.v1.KeyValueList} message KeyValueList
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    KeyValueList.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (let j = 0; j < message.values.length; ++j)
                                object.values[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.values[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this KeyValueList to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    KeyValueList.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for KeyValueList
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KeyValueList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.common.v1.KeyValueList";
                    };

                    return KeyValueList;
                })();

                v1.KeyValue = (function() {

                    /**
                     * Properties of a KeyValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @interface IKeyValue
                     * @property {string|null} [key] KeyValue key
                     * @property {opentelemetry.proto.common.v1.IAnyValue|null} [value] KeyValue value
                     */

                    /**
                     * Constructs a new KeyValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @classdesc Represents a KeyValue.
                     * @implements IKeyValue
                     * @constructor
                     * @param {opentelemetry.proto.common.v1.IKeyValue=} [properties] Properties to set
                     */
                    function KeyValue(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * KeyValue key.
                     * @member {string} key
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @instance
                     */
                    KeyValue.prototype.key = "";

                    /**
                     * KeyValue value.
                     * @member {opentelemetry.proto.common.v1.IAnyValue|null|undefined} value
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @instance
                     */
                    KeyValue.prototype.value = null;

                    /**
                     * Creates a new KeyValue instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValue=} [properties] Properties to set
                     * @returns {opentelemetry.proto.common.v1.KeyValue} KeyValue instance
                     */
                    KeyValue.create = function create(properties) {
                        return new KeyValue(properties);
                    };

                    /**
                     * Encodes the specified KeyValue message. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValue.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValue} message KeyValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyValue.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            $root.opentelemetry.proto.common.v1.AnyValue.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified KeyValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValue.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValue} message KeyValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyValue.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a KeyValue message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.KeyValue} KeyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyValue.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.KeyValue();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.key = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.value = $root.opentelemetry.proto.common.v1.AnyValue.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a KeyValue message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.common.v1.KeyValue} KeyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyValue.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a KeyValue message.
                     * @function verify
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    KeyValue.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.key != null && message.hasOwnProperty("key"))
                            if (!$util.isString(message.key))
                                return "key: string expected";
                        if (message.value != null && message.hasOwnProperty("value")) {
                            let error = $root.opentelemetry.proto.common.v1.AnyValue.verify(message.value);
                            if (error)
                                return "value." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a KeyValue message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.common.v1.KeyValue} KeyValue
                     */
                    KeyValue.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.common.v1.KeyValue)
                            return object;
                        let message = new $root.opentelemetry.proto.common.v1.KeyValue();
                        if (object.key != null)
                            message.key = String(object.key);
                        if (object.value != null) {
                            if (typeof object.value !== "object")
                                throw TypeError(".opentelemetry.proto.common.v1.KeyValue.value: object expected");
                            message.value = $root.opentelemetry.proto.common.v1.AnyValue.fromObject(object.value);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a KeyValue message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.KeyValue} message KeyValue
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    KeyValue.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.key = "";
                            object.value = null;
                        }
                        if (message.key != null && message.hasOwnProperty("key"))
                            object.key = message.key;
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = $root.opentelemetry.proto.common.v1.AnyValue.toObject(message.value, options);
                        return object;
                    };

                    /**
                     * Converts this KeyValue to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    KeyValue.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for KeyValue
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KeyValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.common.v1.KeyValue";
                    };

                    return KeyValue;
                })();

                v1.InstrumentationScope = (function() {

                    /**
                     * Properties of an InstrumentationScope.
                     * @memberof opentelemetry.proto.common.v1
                     * @interface IInstrumentationScope
                     * @property {string|null} [name] InstrumentationScope name
                     * @property {string|null} [version] InstrumentationScope version
                     * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [attributes] InstrumentationScope attributes
                     * @property {number|null} [droppedAttributesCount] InstrumentationScope droppedAttributesCount
                     */

                    /**
                     * Constructs a new InstrumentationScope.
                     * @memberof opentelemetry.proto.common.v1
                     * @classdesc Represents an InstrumentationScope.
                     * @implements IInstrumentationScope
                     * @constructor
                     * @param {opentelemetry.proto.common.v1.IInstrumentationScope=} [properties] Properties to set
                     */
                    function InstrumentationScope(properties) {
                        this.attributes = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * InstrumentationScope name.
                     * @member {string} name
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @instance
                     */
                    InstrumentationScope.prototype.name = "";

                    /**
                     * InstrumentationScope version.
                     * @member {string} version
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @instance
                     */
                    InstrumentationScope.prototype.version = "";

                    /**
                     * InstrumentationScope attributes.
                     * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} attributes
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @instance
                     */
                    InstrumentationScope.prototype.attributes = $util.emptyArray;

                    /**
                     * InstrumentationScope droppedAttributesCount.
                     * @member {number} droppedAttributesCount
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @instance
                     */
                    InstrumentationScope.prototype.droppedAttributesCount = 0;

                    /**
                     * Creates a new InstrumentationScope instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {opentelemetry.proto.common.v1.IInstrumentationScope=} [properties] Properties to set
                     * @returns {opentelemetry.proto.common.v1.InstrumentationScope} InstrumentationScope instance
                     */
                    InstrumentationScope.create = function create(properties) {
                        return new InstrumentationScope(properties);
                    };

                    /**
                     * Encodes the specified InstrumentationScope message. Does not implicitly {@link opentelemetry.proto.common.v1.InstrumentationScope.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {opentelemetry.proto.common.v1.IInstrumentationScope} message InstrumentationScope message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InstrumentationScope.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                        if (message.attributes != null && message.attributes.length)
                            for (let i = 0; i < message.attributes.length; ++i)
                                $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.droppedAttributesCount);
                        return writer;
                    };

                    /**
                     * Encodes the specified InstrumentationScope message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.InstrumentationScope.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {opentelemetry.proto.common.v1.IInstrumentationScope} message InstrumentationScope message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InstrumentationScope.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an InstrumentationScope message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.InstrumentationScope} InstrumentationScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InstrumentationScope.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.InstrumentationScope();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.name = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.version = reader.string();
                                    break;
                                }
                            case 3: {
                                    if (!(message.attributes && message.attributes.length))
                                        message.attributes = [];
                                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 4: {
                                    message.droppedAttributesCount = reader.uint32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an InstrumentationScope message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.common.v1.InstrumentationScope} InstrumentationScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InstrumentationScope.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an InstrumentationScope message.
                     * @function verify
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    InstrumentationScope.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isString(message.version))
                                return "version: string expected";
                        if (message.attributes != null && message.hasOwnProperty("attributes")) {
                            if (!Array.isArray(message.attributes))
                                return "attributes: array expected";
                            for (let i = 0; i < message.attributes.length; ++i) {
                                let error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                                if (error)
                                    return "attributes." + error;
                            }
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            if (!$util.isInteger(message.droppedAttributesCount))
                                return "droppedAttributesCount: integer expected";
                        return null;
                    };

                    /**
                     * Creates an InstrumentationScope message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.common.v1.InstrumentationScope} InstrumentationScope
                     */
                    InstrumentationScope.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.common.v1.InstrumentationScope)
                            return object;
                        let message = new $root.opentelemetry.proto.common.v1.InstrumentationScope();
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.version != null)
                            message.version = String(object.version);
                        if (object.attributes) {
                            if (!Array.isArray(object.attributes))
                                throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: array expected");
                            message.attributes = [];
                            for (let i = 0; i < object.attributes.length; ++i) {
                                if (typeof object.attributes[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: object expected");
                                message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                            }
                        }
                        if (object.droppedAttributesCount != null)
                            message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from an InstrumentationScope message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {opentelemetry.proto.common.v1.InstrumentationScope} message InstrumentationScope
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    InstrumentationScope.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.attributes = [];
                        if (options.defaults) {
                            object.name = "";
                            object.version = "";
                            object.droppedAttributesCount = 0;
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = message.version;
                        if (message.attributes && message.attributes.length) {
                            object.attributes = [];
                            for (let j = 0; j < message.attributes.length; ++j)
                                object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            object.droppedAttributesCount = message.droppedAttributesCount;
                        return object;
                    };

                    /**
                     * Converts this InstrumentationScope to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    InstrumentationScope.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for InstrumentationScope
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    InstrumentationScope.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.common.v1.InstrumentationScope";
                    };

                    return InstrumentationScope;
                })();

                return v1;
            })();

            return common;
        })();

        proto.resource = (function() {

            /**
             * Namespace resource.
             * @memberof opentelemetry.proto
             * @namespace
             */
            const resource = {};

            resource.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof opentelemetry.proto.resource
                 * @namespace
                 */
                const v1 = {};

                v1.Resource = (function() {

                    /**
                     * Properties of a Resource.
                     * @memberof opentelemetry.proto.resource.v1
                     * @interface IResource
                     * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [attributes] Resource attributes
                     * @property {number|null} [droppedAttributesCount] Resource droppedAttributesCount
                     */

                    /**
                     * Constructs a new Resource.
                     * @memberof opentelemetry.proto.resource.v1
                     * @classdesc Represents a Resource.
                     * @implements IResource
                     * @constructor
                     * @param {opentelemetry.proto.resource.v1.IResource=} [properties] Properties to set
                     */
                    function Resource(properties) {
                        this.attributes = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Resource attributes.
                     * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} attributes
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @instance
                     */
                    Resource.prototype.attributes = $util.emptyArray;

                    /**
                     * Resource droppedAttributesCount.
                     * @member {number} droppedAttributesCount
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @instance
                     */
                    Resource.prototype.droppedAttributesCount = 0;

                    /**
                     * Creates a new Resource instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {opentelemetry.proto.resource.v1.IResource=} [properties] Properties to set
                     * @returns {opentelemetry.proto.resource.v1.Resource} Resource instance
                     */
                    Resource.create = function create(properties) {
                        return new Resource(properties);
                    };

                    /**
                     * Encodes the specified Resource message. Does not implicitly {@link opentelemetry.proto.resource.v1.Resource.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {opentelemetry.proto.resource.v1.IResource} message Resource message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Resource.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.attributes != null && message.attributes.length)
                            for (let i = 0; i < message.attributes.length; ++i)
                                $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.droppedAttributesCount);
                        return writer;
                    };

                    /**
                     * Encodes the specified Resource message, length delimited. Does not implicitly {@link opentelemetry.proto.resource.v1.Resource.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {opentelemetry.proto.resource.v1.IResource} message Resource message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Resource.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Resource message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.resource.v1.Resource} Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Resource.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.resource.v1.Resource();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.attributes && message.attributes.length))
                                        message.attributes = [];
                                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 2: {
                                    message.droppedAttributesCount = reader.uint32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Resource message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.resource.v1.Resource} Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Resource.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Resource message.
                     * @function verify
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Resource.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.attributes != null && message.hasOwnProperty("attributes")) {
                            if (!Array.isArray(message.attributes))
                                return "attributes: array expected";
                            for (let i = 0; i < message.attributes.length; ++i) {
                                let error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                                if (error)
                                    return "attributes." + error;
                            }
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            if (!$util.isInteger(message.droppedAttributesCount))
                                return "droppedAttributesCount: integer expected";
                        return null;
                    };

                    /**
                     * Creates a Resource message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.resource.v1.Resource} Resource
                     */
                    Resource.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.resource.v1.Resource)
                            return object;
                        let message = new $root.opentelemetry.proto.resource.v1.Resource();
                        if (object.attributes) {
                            if (!Array.isArray(object.attributes))
                                throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: array expected");
                            message.attributes = [];
                            for (let i = 0; i < object.attributes.length; ++i) {
                                if (typeof object.attributes[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: object expected");
                                message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                            }
                        }
                        if (object.droppedAttributesCount != null)
                            message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Resource message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {opentelemetry.proto.resource.v1.Resource} message Resource
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Resource.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.attributes = [];
                        if (options.defaults)
                            object.droppedAttributesCount = 0;
                        if (message.attributes && message.attributes.length) {
                            object.attributes = [];
                            for (let j = 0; j < message.attributes.length; ++j)
                                object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            object.droppedAttributesCount = message.droppedAttributesCount;
                        return object;
                    };

                    /**
                     * Converts this Resource to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Resource.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Resource
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Resource.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.resource.v1.Resource";
                    };

                    return Resource;
                })();

                return v1;
            })();

            return resource;
        })();

        proto.trace = (function() {

            /**
             * Namespace trace.
             * @memberof opentelemetry.proto
             * @namespace
             */
            const trace = {};

            trace.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof opentelemetry.proto.trace
                 * @namespace
                 */
                const v1 = {};

                v1.TracesData = (function() {

                    /**
                     * Properties of a TracesData.
                     * @memberof opentelemetry.proto.trace.v1
                     * @interface ITracesData
                     * @property {Array.<opentelemetry.proto.trace.v1.IResourceSpans>|null} [resourceSpans] TracesData resourceSpans
                     */

                    /**
                     * Constructs a new TracesData.
                     * @memberof opentelemetry.proto.trace.v1
                     * @classdesc Represents a TracesData.
                     * @implements ITracesData
                     * @constructor
                     * @param {opentelemetry.proto.trace.v1.ITracesData=} [properties] Properties to set
                     */
                    function TracesData(properties) {
                        this.resourceSpans = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TracesData resourceSpans.
                     * @member {Array.<opentelemetry.proto.trace.v1.IResourceSpans>} resourceSpans
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @instance
                     */
                    TracesData.prototype.resourceSpans = $util.emptyArray;

                    /**
                     * Creates a new TracesData instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ITracesData=} [properties] Properties to set
                     * @returns {opentelemetry.proto.trace.v1.TracesData} TracesData instance
                     */
                    TracesData.create = function create(properties) {
                        return new TracesData(properties);
                    };

                    /**
                     * Encodes the specified TracesData message. Does not implicitly {@link opentelemetry.proto.trace.v1.TracesData.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ITracesData} message TracesData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TracesData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resourceSpans != null && message.resourceSpans.length)
                            for (let i = 0; i < message.resourceSpans.length; ++i)
                                $root.opentelemetry.proto.trace.v1.ResourceSpans.encode(message.resourceSpans[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified TracesData message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.TracesData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ITracesData} message TracesData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TracesData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TracesData message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.TracesData} TracesData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TracesData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.TracesData();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.resourceSpans && message.resourceSpans.length))
                                        message.resourceSpans = [];
                                    message.resourceSpans.push($root.opentelemetry.proto.trace.v1.ResourceSpans.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TracesData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.trace.v1.TracesData} TracesData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TracesData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TracesData message.
                     * @function verify
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TracesData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resourceSpans != null && message.hasOwnProperty("resourceSpans")) {
                            if (!Array.isArray(message.resourceSpans))
                                return "resourceSpans: array expected";
                            for (let i = 0; i < message.resourceSpans.length; ++i) {
                                let error = $root.opentelemetry.proto.trace.v1.ResourceSpans.verify(message.resourceSpans[i]);
                                if (error)
                                    return "resourceSpans." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a TracesData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.trace.v1.TracesData} TracesData
                     */
                    TracesData.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.trace.v1.TracesData)
                            return object;
                        let message = new $root.opentelemetry.proto.trace.v1.TracesData();
                        if (object.resourceSpans) {
                            if (!Array.isArray(object.resourceSpans))
                                throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: array expected");
                            message.resourceSpans = [];
                            for (let i = 0; i < object.resourceSpans.length; ++i) {
                                if (typeof object.resourceSpans[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: object expected");
                                message.resourceSpans[i] = $root.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(object.resourceSpans[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TracesData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {opentelemetry.proto.trace.v1.TracesData} message TracesData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TracesData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.resourceSpans = [];
                        if (message.resourceSpans && message.resourceSpans.length) {
                            object.resourceSpans = [];
                            for (let j = 0; j < message.resourceSpans.length; ++j)
                                object.resourceSpans[j] = $root.opentelemetry.proto.trace.v1.ResourceSpans.toObject(message.resourceSpans[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TracesData to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TracesData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for TracesData
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    TracesData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.trace.v1.TracesData";
                    };

                    return TracesData;
                })();

                v1.ResourceSpans = (function() {

                    /**
                     * Properties of a ResourceSpans.
                     * @memberof opentelemetry.proto.trace.v1
                     * @interface IResourceSpans
                     * @property {opentelemetry.proto.resource.v1.IResource|null} [resource] ResourceSpans resource
                     * @property {Array.<opentelemetry.proto.trace.v1.IScopeSpans>|null} [scopeSpans] ResourceSpans scopeSpans
                     * @property {string|null} [schemaUrl] ResourceSpans schemaUrl
                     */

                    /**
                     * Constructs a new ResourceSpans.
                     * @memberof opentelemetry.proto.trace.v1
                     * @classdesc Represents a ResourceSpans.
                     * @implements IResourceSpans
                     * @constructor
                     * @param {opentelemetry.proto.trace.v1.IResourceSpans=} [properties] Properties to set
                     */
                    function ResourceSpans(properties) {
                        this.scopeSpans = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ResourceSpans resource.
                     * @member {opentelemetry.proto.resource.v1.IResource|null|undefined} resource
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @instance
                     */
                    ResourceSpans.prototype.resource = null;

                    /**
                     * ResourceSpans scopeSpans.
                     * @member {Array.<opentelemetry.proto.trace.v1.IScopeSpans>} scopeSpans
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @instance
                     */
                    ResourceSpans.prototype.scopeSpans = $util.emptyArray;

                    /**
                     * ResourceSpans schemaUrl.
                     * @member {string} schemaUrl
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @instance
                     */
                    ResourceSpans.prototype.schemaUrl = "";

                    /**
                     * Creates a new ResourceSpans instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IResourceSpans=} [properties] Properties to set
                     * @returns {opentelemetry.proto.trace.v1.ResourceSpans} ResourceSpans instance
                     */
                    ResourceSpans.create = function create(properties) {
                        return new ResourceSpans(properties);
                    };

                    /**
                     * Encodes the specified ResourceSpans message. Does not implicitly {@link opentelemetry.proto.trace.v1.ResourceSpans.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IResourceSpans} message ResourceSpans message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ResourceSpans.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                            $root.opentelemetry.proto.resource.v1.Resource.encode(message.resource, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.scopeSpans != null && message.scopeSpans.length)
                            for (let i = 0; i < message.scopeSpans.length; ++i)
                                $root.opentelemetry.proto.trace.v1.ScopeSpans.encode(message.scopeSpans[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.schemaUrl);
                        return writer;
                    };

                    /**
                     * Encodes the specified ResourceSpans message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.ResourceSpans.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IResourceSpans} message ResourceSpans message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ResourceSpans.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ResourceSpans message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.ResourceSpans} ResourceSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResourceSpans.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.ResourceSpans();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.resource = $root.opentelemetry.proto.resource.v1.Resource.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    if (!(message.scopeSpans && message.scopeSpans.length))
                                        message.scopeSpans = [];
                                    message.scopeSpans.push($root.opentelemetry.proto.trace.v1.ScopeSpans.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    message.schemaUrl = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ResourceSpans message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.trace.v1.ResourceSpans} ResourceSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResourceSpans.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ResourceSpans message.
                     * @function verify
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResourceSpans.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resource != null && message.hasOwnProperty("resource")) {
                            let error = $root.opentelemetry.proto.resource.v1.Resource.verify(message.resource);
                            if (error)
                                return "resource." + error;
                        }
                        if (message.scopeSpans != null && message.hasOwnProperty("scopeSpans")) {
                            if (!Array.isArray(message.scopeSpans))
                                return "scopeSpans: array expected";
                            for (let i = 0; i < message.scopeSpans.length; ++i) {
                                let error = $root.opentelemetry.proto.trace.v1.ScopeSpans.verify(message.scopeSpans[i]);
                                if (error)
                                    return "scopeSpans." + error;
                            }
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            if (!$util.isString(message.schemaUrl))
                                return "schemaUrl: string expected";
                        return null;
                    };

                    /**
                     * Creates a ResourceSpans message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.trace.v1.ResourceSpans} ResourceSpans
                     */
                    ResourceSpans.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.trace.v1.ResourceSpans)
                            return object;
                        let message = new $root.opentelemetry.proto.trace.v1.ResourceSpans();
                        if (object.resource != null) {
                            if (typeof object.resource !== "object")
                                throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.resource: object expected");
                            message.resource = $root.opentelemetry.proto.resource.v1.Resource.fromObject(object.resource);
                        }
                        if (object.scopeSpans) {
                            if (!Array.isArray(object.scopeSpans))
                                throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: array expected");
                            message.scopeSpans = [];
                            for (let i = 0; i < object.scopeSpans.length; ++i) {
                                if (typeof object.scopeSpans[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: object expected");
                                message.scopeSpans[i] = $root.opentelemetry.proto.trace.v1.ScopeSpans.fromObject(object.scopeSpans[i]);
                            }
                        }
                        if (object.schemaUrl != null)
                            message.schemaUrl = String(object.schemaUrl);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ResourceSpans message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ResourceSpans} message ResourceSpans
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResourceSpans.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.scopeSpans = [];
                        if (options.defaults) {
                            object.resource = null;
                            object.schemaUrl = "";
                        }
                        if (message.resource != null && message.hasOwnProperty("resource"))
                            object.resource = $root.opentelemetry.proto.resource.v1.Resource.toObject(message.resource, options);
                        if (message.scopeSpans && message.scopeSpans.length) {
                            object.scopeSpans = [];
                            for (let j = 0; j < message.scopeSpans.length; ++j)
                                object.scopeSpans[j] = $root.opentelemetry.proto.trace.v1.ScopeSpans.toObject(message.scopeSpans[j], options);
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            object.schemaUrl = message.schemaUrl;
                        return object;
                    };

                    /**
                     * Converts this ResourceSpans to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResourceSpans.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ResourceSpans
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ResourceSpans.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.trace.v1.ResourceSpans";
                    };

                    return ResourceSpans;
                })();

                v1.ScopeSpans = (function() {

                    /**
                     * Properties of a ScopeSpans.
                     * @memberof opentelemetry.proto.trace.v1
                     * @interface IScopeSpans
                     * @property {opentelemetry.proto.common.v1.IInstrumentationScope|null} [scope] ScopeSpans scope
                     * @property {Array.<opentelemetry.proto.trace.v1.ISpan>|null} [spans] ScopeSpans spans
                     * @property {string|null} [schemaUrl] ScopeSpans schemaUrl
                     */

                    /**
                     * Constructs a new ScopeSpans.
                     * @memberof opentelemetry.proto.trace.v1
                     * @classdesc Represents a ScopeSpans.
                     * @implements IScopeSpans
                     * @constructor
                     * @param {opentelemetry.proto.trace.v1.IScopeSpans=} [properties] Properties to set
                     */
                    function ScopeSpans(properties) {
                        this.spans = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ScopeSpans scope.
                     * @member {opentelemetry.proto.common.v1.IInstrumentationScope|null|undefined} scope
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @instance
                     */
                    ScopeSpans.prototype.scope = null;

                    /**
                     * ScopeSpans spans.
                     * @member {Array.<opentelemetry.proto.trace.v1.ISpan>} spans
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @instance
                     */
                    ScopeSpans.prototype.spans = $util.emptyArray;

                    /**
                     * ScopeSpans schemaUrl.
                     * @member {string} schemaUrl
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @instance
                     */
                    ScopeSpans.prototype.schemaUrl = "";

                    /**
                     * Creates a new ScopeSpans instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IScopeSpans=} [properties] Properties to set
                     * @returns {opentelemetry.proto.trace.v1.ScopeSpans} ScopeSpans instance
                     */
                    ScopeSpans.create = function create(properties) {
                        return new ScopeSpans(properties);
                    };

                    /**
                     * Encodes the specified ScopeSpans message. Does not implicitly {@link opentelemetry.proto.trace.v1.ScopeSpans.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IScopeSpans} message ScopeSpans message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScopeSpans.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                            $root.opentelemetry.proto.common.v1.InstrumentationScope.encode(message.scope, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.spans != null && message.spans.length)
                            for (let i = 0; i < message.spans.length; ++i)
                                $root.opentelemetry.proto.trace.v1.Span.encode(message.spans[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.schemaUrl);
                        return writer;
                    };

                    /**
                     * Encodes the specified ScopeSpans message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.ScopeSpans.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IScopeSpans} message ScopeSpans message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScopeSpans.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ScopeSpans message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.ScopeSpans} ScopeSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScopeSpans.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.ScopeSpans();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    if (!(message.spans && message.spans.length))
                                        message.spans = [];
                                    message.spans.push($root.opentelemetry.proto.trace.v1.Span.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    message.schemaUrl = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ScopeSpans message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.trace.v1.ScopeSpans} ScopeSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScopeSpans.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ScopeSpans message.
                     * @function verify
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScopeSpans.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.scope != null && message.hasOwnProperty("scope")) {
                            let error = $root.opentelemetry.proto.common.v1.InstrumentationScope.verify(message.scope);
                            if (error)
                                return "scope." + error;
                        }
                        if (message.spans != null && message.hasOwnProperty("spans")) {
                            if (!Array.isArray(message.spans))
                                return "spans: array expected";
                            for (let i = 0; i < message.spans.length; ++i) {
                                let error = $root.opentelemetry.proto.trace.v1.Span.verify(message.spans[i]);
                                if (error)
                                    return "spans." + error;
                            }
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            if (!$util.isString(message.schemaUrl))
                                return "schemaUrl: string expected";
                        return null;
                    };

                    /**
                     * Creates a ScopeSpans message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.trace.v1.ScopeSpans} ScopeSpans
                     */
                    ScopeSpans.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.trace.v1.ScopeSpans)
                            return object;
                        let message = new $root.opentelemetry.proto.trace.v1.ScopeSpans();
                        if (object.scope != null) {
                            if (typeof object.scope !== "object")
                                throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.scope: object expected");
                            message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(object.scope);
                        }
                        if (object.spans) {
                            if (!Array.isArray(object.spans))
                                throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: array expected");
                            message.spans = [];
                            for (let i = 0; i < object.spans.length; ++i) {
                                if (typeof object.spans[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: object expected");
                                message.spans[i] = $root.opentelemetry.proto.trace.v1.Span.fromObject(object.spans[i]);
                            }
                        }
                        if (object.schemaUrl != null)
                            message.schemaUrl = String(object.schemaUrl);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ScopeSpans message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ScopeSpans} message ScopeSpans
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScopeSpans.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.spans = [];
                        if (options.defaults) {
                            object.scope = null;
                            object.schemaUrl = "";
                        }
                        if (message.scope != null && message.hasOwnProperty("scope"))
                            object.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.toObject(message.scope, options);
                        if (message.spans && message.spans.length) {
                            object.spans = [];
                            for (let j = 0; j < message.spans.length; ++j)
                                object.spans[j] = $root.opentelemetry.proto.trace.v1.Span.toObject(message.spans[j], options);
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            object.schemaUrl = message.schemaUrl;
                        return object;
                    };

                    /**
                     * Converts this ScopeSpans to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScopeSpans.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ScopeSpans
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ScopeSpans.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.trace.v1.ScopeSpans";
                    };

                    return ScopeSpans;
                })();

                v1.Span = (function() {

                    /**
                     * Properties of a Span.
                     * @memberof opentelemetry.proto.trace.v1
                     * @interface ISpan
                     * @property {Uint8Array|null} [traceId] Span traceId
                     * @property {Uint8Array|null} [spanId] Span spanId
                     * @property {string|null} [traceState] Span traceState
                     * @property {Uint8Array|null} [parentSpanId] Span parentSpanId
                     * @property {string|null} [name] Span name
                     * @property {opentelemetry.proto.trace.v1.Span.SpanKind|null} [kind] Span kind
                     * @property {number|Long|null} [startTimeUnixNano] Span startTimeUnixNano
                     * @property {number|Long|null} [endTimeUnixNano] Span endTimeUnixNano
                     * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [attributes] Span attributes
                     * @property {number|null} [droppedAttributesCount] Span droppedAttributesCount
                     * @property {Array.<opentelemetry.proto.trace.v1.Span.IEvent>|null} [events] Span events
                     * @property {number|null} [droppedEventsCount] Span droppedEventsCount
                     * @property {Array.<opentelemetry.proto.trace.v1.Span.ILink>|null} [links] Span links
                     * @property {number|null} [droppedLinksCount] Span droppedLinksCount
                     * @property {opentelemetry.proto.trace.v1.IStatus|null} [status] Span status
                     */

                    /**
                     * Constructs a new Span.
                     * @memberof opentelemetry.proto.trace.v1
                     * @classdesc Represents a Span.
                     * @implements ISpan
                     * @constructor
                     * @param {opentelemetry.proto.trace.v1.ISpan=} [properties] Properties to set
                     */
                    function Span(properties) {
                        this.attributes = [];
                        this.events = [];
                        this.links = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Span traceId.
                     * @member {Uint8Array} traceId
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.traceId = $util.newBuffer([]);

                    /**
                     * Span spanId.
                     * @member {Uint8Array} spanId
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.spanId = $util.newBuffer([]);

                    /**
                     * Span traceState.
                     * @member {string} traceState
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.traceState = "";

                    /**
                     * Span parentSpanId.
                     * @member {Uint8Array} parentSpanId
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.parentSpanId = $util.newBuffer([]);

                    /**
                     * Span name.
                     * @member {string} name
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.name = "";

                    /**
                     * Span kind.
                     * @member {opentelemetry.proto.trace.v1.Span.SpanKind} kind
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.kind = 0;

                    /**
                     * Span startTimeUnixNano.
                     * @member {number|Long} startTimeUnixNano
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.startTimeUnixNano = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Span endTimeUnixNano.
                     * @member {number|Long} endTimeUnixNano
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.endTimeUnixNano = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Span attributes.
                     * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} attributes
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.attributes = $util.emptyArray;

                    /**
                     * Span droppedAttributesCount.
                     * @member {number} droppedAttributesCount
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.droppedAttributesCount = 0;

                    /**
                     * Span events.
                     * @member {Array.<opentelemetry.proto.trace.v1.Span.IEvent>} events
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.events = $util.emptyArray;

                    /**
                     * Span droppedEventsCount.
                     * @member {number} droppedEventsCount
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.droppedEventsCount = 0;

                    /**
                     * Span links.
                     * @member {Array.<opentelemetry.proto.trace.v1.Span.ILink>} links
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.links = $util.emptyArray;

                    /**
                     * Span droppedLinksCount.
                     * @member {number} droppedLinksCount
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.droppedLinksCount = 0;

                    /**
                     * Span status.
                     * @member {opentelemetry.proto.trace.v1.IStatus|null|undefined} status
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.status = null;

                    /**
                     * Creates a new Span instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ISpan=} [properties] Properties to set
                     * @returns {opentelemetry.proto.trace.v1.Span} Span instance
                     */
                    Span.create = function create(properties) {
                        return new Span(properties);
                    };

                    /**
                     * Encodes the specified Span message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ISpan} message Span message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Span.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.traceId);
                        if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.spanId);
                        if (message.traceState != null && Object.hasOwnProperty.call(message, "traceState"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceState);
                        if (message.parentSpanId != null && Object.hasOwnProperty.call(message, "parentSpanId"))
                            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.parentSpanId);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
                        if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.kind);
                        if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                            writer.uint32(/* id 7, wireType 1 =*/57).fixed64(message.startTimeUnixNano);
                        if (message.endTimeUnixNano != null && Object.hasOwnProperty.call(message, "endTimeUnixNano"))
                            writer.uint32(/* id 8, wireType 1 =*/65).fixed64(message.endTimeUnixNano);
                        if (message.attributes != null && message.attributes.length)
                            for (let i = 0; i < message.attributes.length; ++i)
                                $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.droppedAttributesCount);
                        if (message.events != null && message.events.length)
                            for (let i = 0; i < message.events.length; ++i)
                                $root.opentelemetry.proto.trace.v1.Span.Event.encode(message.events[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        if (message.droppedEventsCount != null && Object.hasOwnProperty.call(message, "droppedEventsCount"))
                            writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.droppedEventsCount);
                        if (message.links != null && message.links.length)
                            for (let i = 0; i < message.links.length; ++i)
                                $root.opentelemetry.proto.trace.v1.Span.Link.encode(message.links[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                        if (message.droppedLinksCount != null && Object.hasOwnProperty.call(message, "droppedLinksCount"))
                            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.droppedLinksCount);
                        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                            $root.opentelemetry.proto.trace.v1.Status.encode(message.status, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Span message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ISpan} message Span message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Span.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Span message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.Span} Span
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Span.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.traceId = reader.bytes();
                                    break;
                                }
                            case 2: {
                                    message.spanId = reader.bytes();
                                    break;
                                }
                            case 3: {
                                    message.traceState = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.parentSpanId = reader.bytes();
                                    break;
                                }
                            case 5: {
                                    message.name = reader.string();
                                    break;
                                }
                            case 6: {
                                    message.kind = reader.int32();
                                    break;
                                }
                            case 7: {
                                    message.startTimeUnixNano = reader.fixed64();
                                    break;
                                }
                            case 8: {
                                    message.endTimeUnixNano = reader.fixed64();
                                    break;
                                }
                            case 9: {
                                    if (!(message.attributes && message.attributes.length))
                                        message.attributes = [];
                                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 10: {
                                    message.droppedAttributesCount = reader.uint32();
                                    break;
                                }
                            case 11: {
                                    if (!(message.events && message.events.length))
                                        message.events = [];
                                    message.events.push($root.opentelemetry.proto.trace.v1.Span.Event.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 12: {
                                    message.droppedEventsCount = reader.uint32();
                                    break;
                                }
                            case 13: {
                                    if (!(message.links && message.links.length))
                                        message.links = [];
                                    message.links.push($root.opentelemetry.proto.trace.v1.Span.Link.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 14: {
                                    message.droppedLinksCount = reader.uint32();
                                    break;
                                }
                            case 15: {
                                    message.status = $root.opentelemetry.proto.trace.v1.Status.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Span message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.trace.v1.Span} Span
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Span.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Span message.
                     * @function verify
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Span.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.traceId != null && message.hasOwnProperty("traceId"))
                            if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                                return "traceId: buffer expected";
                        if (message.spanId != null && message.hasOwnProperty("spanId"))
                            if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                                return "spanId: buffer expected";
                        if (message.traceState != null && message.hasOwnProperty("traceState"))
                            if (!$util.isString(message.traceState))
                                return "traceState: string expected";
                        if (message.parentSpanId != null && message.hasOwnProperty("parentSpanId"))
                            if (!(message.parentSpanId && typeof message.parentSpanId.length === "number" || $util.isString(message.parentSpanId)))
                                return "parentSpanId: buffer expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.kind != null && message.hasOwnProperty("kind"))
                            switch (message.kind) {
                            default:
                                return "kind: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            }
                        if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                            if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                                return "startTimeUnixNano: integer|Long expected";
                        if (message.endTimeUnixNano != null && message.hasOwnProperty("endTimeUnixNano"))
                            if (!$util.isInteger(message.endTimeUnixNano) && !(message.endTimeUnixNano && $util.isInteger(message.endTimeUnixNano.low) && $util.isInteger(message.endTimeUnixNano.high)))
                                return "endTimeUnixNano: integer|Long expected";
                        if (message.attributes != null && message.hasOwnProperty("attributes")) {
                            if (!Array.isArray(message.attributes))
                                return "attributes: array expected";
                            for (let i = 0; i < message.attributes.length; ++i) {
                                let error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                                if (error)
                                    return "attributes." + error;
                            }
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            if (!$util.isInteger(message.droppedAttributesCount))
                                return "droppedAttributesCount: integer expected";
                        if (message.events != null && message.hasOwnProperty("events")) {
                            if (!Array.isArray(message.events))
                                return "events: array expected";
                            for (let i = 0; i < message.events.length; ++i) {
                                let error = $root.opentelemetry.proto.trace.v1.Span.Event.verify(message.events[i]);
                                if (error)
                                    return "events." + error;
                            }
                        }
                        if (message.droppedEventsCount != null && message.hasOwnProperty("droppedEventsCount"))
                            if (!$util.isInteger(message.droppedEventsCount))
                                return "droppedEventsCount: integer expected";
                        if (message.links != null && message.hasOwnProperty("links")) {
                            if (!Array.isArray(message.links))
                                return "links: array expected";
                            for (let i = 0; i < message.links.length; ++i) {
                                let error = $root.opentelemetry.proto.trace.v1.Span.Link.verify(message.links[i]);
                                if (error)
                                    return "links." + error;
                            }
                        }
                        if (message.droppedLinksCount != null && message.hasOwnProperty("droppedLinksCount"))
                            if (!$util.isInteger(message.droppedLinksCount))
                                return "droppedLinksCount: integer expected";
                        if (message.status != null && message.hasOwnProperty("status")) {
                            let error = $root.opentelemetry.proto.trace.v1.Status.verify(message.status);
                            if (error)
                                return "status." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Span message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.trace.v1.Span} Span
                     */
                    Span.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.trace.v1.Span)
                            return object;
                        let message = new $root.opentelemetry.proto.trace.v1.Span();
                        if (object.traceId != null)
                            if (typeof object.traceId === "string")
                                $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                            else if (object.traceId.length >= 0)
                                message.traceId = object.traceId;
                        if (object.spanId != null)
                            if (typeof object.spanId === "string")
                                $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                            else if (object.spanId.length >= 0)
                                message.spanId = object.spanId;
                        if (object.traceState != null)
                            message.traceState = String(object.traceState);
                        if (object.parentSpanId != null)
                            if (typeof object.parentSpanId === "string")
                                $util.base64.decode(object.parentSpanId, message.parentSpanId = $util.newBuffer($util.base64.length(object.parentSpanId)), 0);
                            else if (object.parentSpanId.length >= 0)
                                message.parentSpanId = object.parentSpanId;
                        if (object.name != null)
                            message.name = String(object.name);
                        switch (object.kind) {
                        default:
                            if (typeof object.kind === "number") {
                                message.kind = object.kind;
                                break;
                            }
                            break;
                        case "SPAN_KIND_UNSPECIFIED":
                        case 0:
                            message.kind = 0;
                            break;
                        case "SPAN_KIND_INTERNAL":
                        case 1:
                            message.kind = 1;
                            break;
                        case "SPAN_KIND_SERVER":
                        case 2:
                            message.kind = 2;
                            break;
                        case "SPAN_KIND_CLIENT":
                        case 3:
                            message.kind = 3;
                            break;
                        case "SPAN_KIND_PRODUCER":
                        case 4:
                            message.kind = 4;
                            break;
                        case "SPAN_KIND_CONSUMER":
                        case 5:
                            message.kind = 5;
                            break;
                        }
                        if (object.startTimeUnixNano != null)
                            if ($util.Long)
                                (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                            else if (typeof object.startTimeUnixNano === "string")
                                message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                            else if (typeof object.startTimeUnixNano === "number")
                                message.startTimeUnixNano = object.startTimeUnixNano;
                            else if (typeof object.startTimeUnixNano === "object")
                                message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
                        if (object.endTimeUnixNano != null)
                            if ($util.Long)
                                (message.endTimeUnixNano = $util.Long.fromValue(object.endTimeUnixNano)).unsigned = false;
                            else if (typeof object.endTimeUnixNano === "string")
                                message.endTimeUnixNano = parseInt(object.endTimeUnixNano, 10);
                            else if (typeof object.endTimeUnixNano === "number")
                                message.endTimeUnixNano = object.endTimeUnixNano;
                            else if (typeof object.endTimeUnixNano === "object")
                                message.endTimeUnixNano = new $util.LongBits(object.endTimeUnixNano.low >>> 0, object.endTimeUnixNano.high >>> 0).toNumber();
                        if (object.attributes) {
                            if (!Array.isArray(object.attributes))
                                throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: array expected");
                            message.attributes = [];
                            for (let i = 0; i < object.attributes.length; ++i) {
                                if (typeof object.attributes[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: object expected");
                                message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                            }
                        }
                        if (object.droppedAttributesCount != null)
                            message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                        if (object.events) {
                            if (!Array.isArray(object.events))
                                throw TypeError(".opentelemetry.proto.trace.v1.Span.events: array expected");
                            message.events = [];
                            for (let i = 0; i < object.events.length; ++i) {
                                if (typeof object.events[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.Span.events: object expected");
                                message.events[i] = $root.opentelemetry.proto.trace.v1.Span.Event.fromObject(object.events[i]);
                            }
                        }
                        if (object.droppedEventsCount != null)
                            message.droppedEventsCount = object.droppedEventsCount >>> 0;
                        if (object.links) {
                            if (!Array.isArray(object.links))
                                throw TypeError(".opentelemetry.proto.trace.v1.Span.links: array expected");
                            message.links = [];
                            for (let i = 0; i < object.links.length; ++i) {
                                if (typeof object.links[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.Span.links: object expected");
                                message.links[i] = $root.opentelemetry.proto.trace.v1.Span.Link.fromObject(object.links[i]);
                            }
                        }
                        if (object.droppedLinksCount != null)
                            message.droppedLinksCount = object.droppedLinksCount >>> 0;
                        if (object.status != null) {
                            if (typeof object.status !== "object")
                                throw TypeError(".opentelemetry.proto.trace.v1.Span.status: object expected");
                            message.status = $root.opentelemetry.proto.trace.v1.Status.fromObject(object.status);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Span message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {opentelemetry.proto.trace.v1.Span} message Span
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Span.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.attributes = [];
                            object.events = [];
                            object.links = [];
                        }
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.traceId = "";
                            else {
                                object.traceId = [];
                                if (options.bytes !== Array)
                                    object.traceId = $util.newBuffer(object.traceId);
                            }
                            if (options.bytes === String)
                                object.spanId = "";
                            else {
                                object.spanId = [];
                                if (options.bytes !== Array)
                                    object.spanId = $util.newBuffer(object.spanId);
                            }
                            object.traceState = "";
                            if (options.bytes === String)
                                object.parentSpanId = "";
                            else {
                                object.parentSpanId = [];
                                if (options.bytes !== Array)
                                    object.parentSpanId = $util.newBuffer(object.parentSpanId);
                            }
                            object.name = "";
                            object.kind = options.enums === String ? "SPAN_KIND_UNSPECIFIED" : 0;
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.startTimeUnixNano = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.endTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.endTimeUnixNano = options.longs === String ? "0" : 0;
                            object.droppedAttributesCount = 0;
                            object.droppedEventsCount = 0;
                            object.droppedLinksCount = 0;
                            object.status = null;
                        }
                        if (message.traceId != null && message.hasOwnProperty("traceId"))
                            object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
                        if (message.spanId != null && message.hasOwnProperty("spanId"))
                            object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
                        if (message.traceState != null && message.hasOwnProperty("traceState"))
                            object.traceState = message.traceState;
                        if (message.parentSpanId != null && message.hasOwnProperty("parentSpanId"))
                            object.parentSpanId = options.bytes === String ? $util.base64.encode(message.parentSpanId, 0, message.parentSpanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.parentSpanId) : message.parentSpanId;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.kind != null && message.hasOwnProperty("kind"))
                            object.kind = options.enums === String ? $root.opentelemetry.proto.trace.v1.Span.SpanKind[message.kind] === undefined ? message.kind : $root.opentelemetry.proto.trace.v1.Span.SpanKind[message.kind] : message.kind;
                        if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                            if (typeof message.startTimeUnixNano === "number")
                                object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                            else
                                object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
                        if (message.endTimeUnixNano != null && message.hasOwnProperty("endTimeUnixNano"))
                            if (typeof message.endTimeUnixNano === "number")
                                object.endTimeUnixNano = options.longs === String ? String(message.endTimeUnixNano) : message.endTimeUnixNano;
                            else
                                object.endTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.endTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.endTimeUnixNano.low >>> 0, message.endTimeUnixNano.high >>> 0).toNumber() : message.endTimeUnixNano;
                        if (message.attributes && message.attributes.length) {
                            object.attributes = [];
                            for (let j = 0; j < message.attributes.length; ++j)
                                object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            object.droppedAttributesCount = message.droppedAttributesCount;
                        if (message.events && message.events.length) {
                            object.events = [];
                            for (let j = 0; j < message.events.length; ++j)
                                object.events[j] = $root.opentelemetry.proto.trace.v1.Span.Event.toObject(message.events[j], options);
                        }
                        if (message.droppedEventsCount != null && message.hasOwnProperty("droppedEventsCount"))
                            object.droppedEventsCount = message.droppedEventsCount;
                        if (message.links && message.links.length) {
                            object.links = [];
                            for (let j = 0; j < message.links.length; ++j)
                                object.links[j] = $root.opentelemetry.proto.trace.v1.Span.Link.toObject(message.links[j], options);
                        }
                        if (message.droppedLinksCount != null && message.hasOwnProperty("droppedLinksCount"))
                            object.droppedLinksCount = message.droppedLinksCount;
                        if (message.status != null && message.hasOwnProperty("status"))
                            object.status = $root.opentelemetry.proto.trace.v1.Status.toObject(message.status, options);
                        return object;
                    };

                    /**
                     * Converts this Span to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Span.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Span
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Span.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span";
                    };

                    /**
                     * SpanKind enum.
                     * @name opentelemetry.proto.trace.v1.Span.SpanKind
                     * @enum {number}
                     * @property {number} SPAN_KIND_UNSPECIFIED=0 SPAN_KIND_UNSPECIFIED value
                     * @property {number} SPAN_KIND_INTERNAL=1 SPAN_KIND_INTERNAL value
                     * @property {number} SPAN_KIND_SERVER=2 SPAN_KIND_SERVER value
                     * @property {number} SPAN_KIND_CLIENT=3 SPAN_KIND_CLIENT value
                     * @property {number} SPAN_KIND_PRODUCER=4 SPAN_KIND_PRODUCER value
                     * @property {number} SPAN_KIND_CONSUMER=5 SPAN_KIND_CONSUMER value
                     */
                    Span.SpanKind = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "SPAN_KIND_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "SPAN_KIND_INTERNAL"] = 1;
                        values[valuesById[2] = "SPAN_KIND_SERVER"] = 2;
                        values[valuesById[3] = "SPAN_KIND_CLIENT"] = 3;
                        values[valuesById[4] = "SPAN_KIND_PRODUCER"] = 4;
                        values[valuesById[5] = "SPAN_KIND_CONSUMER"] = 5;
                        return values;
                    })();

                    Span.Event = (function() {

                        /**
                         * Properties of an Event.
                         * @memberof opentelemetry.proto.trace.v1.Span
                         * @interface IEvent
                         * @property {number|Long|null} [timeUnixNano] Event timeUnixNano
                         * @property {string|null} [name] Event name
                         * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [attributes] Event attributes
                         * @property {number|null} [droppedAttributesCount] Event droppedAttributesCount
                         */

                        /**
                         * Constructs a new Event.
                         * @memberof opentelemetry.proto.trace.v1.Span
                         * @classdesc Represents an Event.
                         * @implements IEvent
                         * @constructor
                         * @param {opentelemetry.proto.trace.v1.Span.IEvent=} [properties] Properties to set
                         */
                        function Event(properties) {
                            this.attributes = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Event timeUnixNano.
                         * @member {number|Long} timeUnixNano
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @instance
                         */
                        Event.prototype.timeUnixNano = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Event name.
                         * @member {string} name
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @instance
                         */
                        Event.prototype.name = "";

                        /**
                         * Event attributes.
                         * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} attributes
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @instance
                         */
                        Event.prototype.attributes = $util.emptyArray;

                        /**
                         * Event droppedAttributesCount.
                         * @member {number} droppedAttributesCount
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @instance
                         */
                        Event.prototype.droppedAttributesCount = 0;

                        /**
                         * Creates a new Event instance using the specified properties.
                         * @function create
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.IEvent=} [properties] Properties to set
                         * @returns {opentelemetry.proto.trace.v1.Span.Event} Event instance
                         */
                        Event.create = function create(properties) {
                            return new Event(properties);
                        };

                        /**
                         * Encodes the specified Event message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Event.verify|verify} messages.
                         * @function encode
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.IEvent} message Event message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Event.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.timeUnixNano);
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                            if (message.attributes != null && message.attributes.length)
                                for (let i = 0; i < message.attributes.length; ++i)
                                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.droppedAttributesCount);
                            return writer;
                        };

                        /**
                         * Encodes the specified Event message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Event.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.IEvent} message Event message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Event.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an Event message from the specified reader or buffer.
                         * @function decode
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.trace.v1.Span.Event} Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Event.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span.Event();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.timeUnixNano = reader.fixed64();
                                        break;
                                    }
                                case 2: {
                                        message.name = reader.string();
                                        break;
                                    }
                                case 3: {
                                        if (!(message.attributes && message.attributes.length))
                                            message.attributes = [];
                                        message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 4: {
                                        message.droppedAttributesCount = reader.uint32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an Event message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {opentelemetry.proto.trace.v1.Span.Event} Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Event.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an Event message.
                         * @function verify
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Event.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                                if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                                    return "timeUnixNano: integer|Long expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.attributes != null && message.hasOwnProperty("attributes")) {
                                if (!Array.isArray(message.attributes))
                                    return "attributes: array expected";
                                for (let i = 0; i < message.attributes.length; ++i) {
                                    let error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                                    if (error)
                                        return "attributes." + error;
                                }
                            }
                            if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                                if (!$util.isInteger(message.droppedAttributesCount))
                                    return "droppedAttributesCount: integer expected";
                            return null;
                        };

                        /**
                         * Creates an Event message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {opentelemetry.proto.trace.v1.Span.Event} Event
                         */
                        Event.fromObject = function fromObject(object) {
                            if (object instanceof $root.opentelemetry.proto.trace.v1.Span.Event)
                                return object;
                            let message = new $root.opentelemetry.proto.trace.v1.Span.Event();
                            if (object.timeUnixNano != null)
                                if ($util.Long)
                                    (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                                else if (typeof object.timeUnixNano === "string")
                                    message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                                else if (typeof object.timeUnixNano === "number")
                                    message.timeUnixNano = object.timeUnixNano;
                                else if (typeof object.timeUnixNano === "object")
                                    message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.attributes) {
                                if (!Array.isArray(object.attributes))
                                    throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: array expected");
                                message.attributes = [];
                                for (let i = 0; i < object.attributes.length; ++i) {
                                    if (typeof object.attributes[i] !== "object")
                                        throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: object expected");
                                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                                }
                            }
                            if (object.droppedAttributesCount != null)
                                message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from an Event message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.Event} message Event
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Event.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.arrays || options.defaults)
                                object.attributes = [];
                            if (options.defaults) {
                                if ($util.Long) {
                                    let long = new $util.Long(0, 0, false);
                                    object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.timeUnixNano = options.longs === String ? "0" : 0;
                                object.name = "";
                                object.droppedAttributesCount = 0;
                            }
                            if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                                if (typeof message.timeUnixNano === "number")
                                    object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                                else
                                    object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.attributes && message.attributes.length) {
                                object.attributes = [];
                                for (let j = 0; j < message.attributes.length; ++j)
                                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                            }
                            if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                                object.droppedAttributesCount = message.droppedAttributesCount;
                            return object;
                        };

                        /**
                         * Converts this Event to JSON.
                         * @function toJSON
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Event.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Event
                         * @function getTypeUrl
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span.Event";
                        };

                        return Event;
                    })();

                    Span.Link = (function() {

                        /**
                         * Properties of a Link.
                         * @memberof opentelemetry.proto.trace.v1.Span
                         * @interface ILink
                         * @property {Uint8Array|null} [traceId] Link traceId
                         * @property {Uint8Array|null} [spanId] Link spanId
                         * @property {string|null} [traceState] Link traceState
                         * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [attributes] Link attributes
                         * @property {number|null} [droppedAttributesCount] Link droppedAttributesCount
                         */

                        /**
                         * Constructs a new Link.
                         * @memberof opentelemetry.proto.trace.v1.Span
                         * @classdesc Represents a Link.
                         * @implements ILink
                         * @constructor
                         * @param {opentelemetry.proto.trace.v1.Span.ILink=} [properties] Properties to set
                         */
                        function Link(properties) {
                            this.attributes = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Link traceId.
                         * @member {Uint8Array} traceId
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         */
                        Link.prototype.traceId = $util.newBuffer([]);

                        /**
                         * Link spanId.
                         * @member {Uint8Array} spanId
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         */
                        Link.prototype.spanId = $util.newBuffer([]);

                        /**
                         * Link traceState.
                         * @member {string} traceState
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         */
                        Link.prototype.traceState = "";

                        /**
                         * Link attributes.
                         * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} attributes
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         */
                        Link.prototype.attributes = $util.emptyArray;

                        /**
                         * Link droppedAttributesCount.
                         * @member {number} droppedAttributesCount
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         */
                        Link.prototype.droppedAttributesCount = 0;

                        /**
                         * Creates a new Link instance using the specified properties.
                         * @function create
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.ILink=} [properties] Properties to set
                         * @returns {opentelemetry.proto.trace.v1.Span.Link} Link instance
                         */
                        Link.create = function create(properties) {
                            return new Link(properties);
                        };

                        /**
                         * Encodes the specified Link message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Link.verify|verify} messages.
                         * @function encode
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.ILink} message Link message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Link.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.traceId);
                            if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.spanId);
                            if (message.traceState != null && Object.hasOwnProperty.call(message, "traceState"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceState);
                            if (message.attributes != null && message.attributes.length)
                                for (let i = 0; i < message.attributes.length; ++i)
                                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.droppedAttributesCount);
                            return writer;
                        };

                        /**
                         * Encodes the specified Link message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Link.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.ILink} message Link message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Link.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Link message from the specified reader or buffer.
                         * @function decode
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.trace.v1.Span.Link} Link
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Link.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span.Link();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.traceId = reader.bytes();
                                        break;
                                    }
                                case 2: {
                                        message.spanId = reader.bytes();
                                        break;
                                    }
                                case 3: {
                                        message.traceState = reader.string();
                                        break;
                                    }
                                case 4: {
                                        if (!(message.attributes && message.attributes.length))
                                            message.attributes = [];
                                        message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 5: {
                                        message.droppedAttributesCount = reader.uint32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Link message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {opentelemetry.proto.trace.v1.Span.Link} Link
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Link.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Link message.
                         * @function verify
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Link.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.traceId != null && message.hasOwnProperty("traceId"))
                                if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                                    return "traceId: buffer expected";
                            if (message.spanId != null && message.hasOwnProperty("spanId"))
                                if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                                    return "spanId: buffer expected";
                            if (message.traceState != null && message.hasOwnProperty("traceState"))
                                if (!$util.isString(message.traceState))
                                    return "traceState: string expected";
                            if (message.attributes != null && message.hasOwnProperty("attributes")) {
                                if (!Array.isArray(message.attributes))
                                    return "attributes: array expected";
                                for (let i = 0; i < message.attributes.length; ++i) {
                                    let error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                                    if (error)
                                        return "attributes." + error;
                                }
                            }
                            if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                                if (!$util.isInteger(message.droppedAttributesCount))
                                    return "droppedAttributesCount: integer expected";
                            return null;
                        };

                        /**
                         * Creates a Link message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {opentelemetry.proto.trace.v1.Span.Link} Link
                         */
                        Link.fromObject = function fromObject(object) {
                            if (object instanceof $root.opentelemetry.proto.trace.v1.Span.Link)
                                return object;
                            let message = new $root.opentelemetry.proto.trace.v1.Span.Link();
                            if (object.traceId != null)
                                if (typeof object.traceId === "string")
                                    $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                                else if (object.traceId.length >= 0)
                                    message.traceId = object.traceId;
                            if (object.spanId != null)
                                if (typeof object.spanId === "string")
                                    $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                                else if (object.spanId.length >= 0)
                                    message.spanId = object.spanId;
                            if (object.traceState != null)
                                message.traceState = String(object.traceState);
                            if (object.attributes) {
                                if (!Array.isArray(object.attributes))
                                    throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: array expected");
                                message.attributes = [];
                                for (let i = 0; i < object.attributes.length; ++i) {
                                    if (typeof object.attributes[i] !== "object")
                                        throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: object expected");
                                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                                }
                            }
                            if (object.droppedAttributesCount != null)
                                message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a Link message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.Link} message Link
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Link.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.arrays || options.defaults)
                                object.attributes = [];
                            if (options.defaults) {
                                if (options.bytes === String)
                                    object.traceId = "";
                                else {
                                    object.traceId = [];
                                    if (options.bytes !== Array)
                                        object.traceId = $util.newBuffer(object.traceId);
                                }
                                if (options.bytes === String)
                                    object.spanId = "";
                                else {
                                    object.spanId = [];
                                    if (options.bytes !== Array)
                                        object.spanId = $util.newBuffer(object.spanId);
                                }
                                object.traceState = "";
                                object.droppedAttributesCount = 0;
                            }
                            if (message.traceId != null && message.hasOwnProperty("traceId"))
                                object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
                            if (message.spanId != null && message.hasOwnProperty("spanId"))
                                object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
                            if (message.traceState != null && message.hasOwnProperty("traceState"))
                                object.traceState = message.traceState;
                            if (message.attributes && message.attributes.length) {
                                object.attributes = [];
                                for (let j = 0; j < message.attributes.length; ++j)
                                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                            }
                            if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                                object.droppedAttributesCount = message.droppedAttributesCount;
                            return object;
                        };

                        /**
                         * Converts this Link to JSON.
                         * @function toJSON
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Link.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Link
                         * @function getTypeUrl
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Link.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span.Link";
                        };

                        return Link;
                    })();

                    return Span;
                })();

                v1.Status = (function() {

                    /**
                     * Properties of a Status.
                     * @memberof opentelemetry.proto.trace.v1
                     * @interface IStatus
                     * @property {string|null} [message] Status message
                     * @property {opentelemetry.proto.trace.v1.Status.StatusCode|null} [code] Status code
                     */

                    /**
                     * Constructs a new Status.
                     * @memberof opentelemetry.proto.trace.v1
                     * @classdesc Represents a Status.
                     * @implements IStatus
                     * @constructor
                     * @param {opentelemetry.proto.trace.v1.IStatus=} [properties] Properties to set
                     */
                    function Status(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Status message.
                     * @member {string} message
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @instance
                     */
                    Status.prototype.message = "";

                    /**
                     * Status code.
                     * @member {opentelemetry.proto.trace.v1.Status.StatusCode} code
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @instance
                     */
                    Status.prototype.code = 0;

                    /**
                     * Creates a new Status instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IStatus=} [properties] Properties to set
                     * @returns {opentelemetry.proto.trace.v1.Status} Status instance
                     */
                    Status.create = function create(properties) {
                        return new Status(properties);
                    };

                    /**
                     * Encodes the specified Status message. Does not implicitly {@link opentelemetry.proto.trace.v1.Status.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IStatus} message Status message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Status.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
                        return writer;
                    };

                    /**
                     * Encodes the specified Status message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Status.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IStatus} message Status message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Status.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Status message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.Status} Status
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Status.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Status();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 2: {
                                    message.message = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.code = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Status message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.trace.v1.Status} Status
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Status.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Status message.
                     * @function verify
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Status.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            switch (message.code) {
                            default:
                                return "code: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a Status message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.trace.v1.Status} Status
                     */
                    Status.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.trace.v1.Status)
                            return object;
                        let message = new $root.opentelemetry.proto.trace.v1.Status();
                        if (object.message != null)
                            message.message = String(object.message);
                        switch (object.code) {
                        default:
                            if (typeof object.code === "number") {
                                message.code = object.code;
                                break;
                            }
                            break;
                        case "STATUS_CODE_UNSET":
                        case 0:
                            message.code = 0;
                            break;
                        case "STATUS_CODE_OK":
                        case 1:
                            message.code = 1;
                            break;
                        case "STATUS_CODE_ERROR":
                        case 2:
                            message.code = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Status message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {opentelemetry.proto.trace.v1.Status} message Status
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Status.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.message = "";
                            object.code = options.enums === String ? "STATUS_CODE_UNSET" : 0;
                        }
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = options.enums === String ? $root.opentelemetry.proto.trace.v1.Status.StatusCode[message.code] === undefined ? message.code : $root.opentelemetry.proto.trace.v1.Status.StatusCode[message.code] : message.code;
                        return object;
                    };

                    /**
                     * Converts this Status to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Status.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Status
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Status";
                    };

                    /**
                     * StatusCode enum.
                     * @name opentelemetry.proto.trace.v1.Status.StatusCode
                     * @enum {number}
                     * @property {number} STATUS_CODE_UNSET=0 STATUS_CODE_UNSET value
                     * @property {number} STATUS_CODE_OK=1 STATUS_CODE_OK value
                     * @property {number} STATUS_CODE_ERROR=2 STATUS_CODE_ERROR value
                     */
                    Status.StatusCode = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "STATUS_CODE_UNSET"] = 0;
                        values[valuesById[1] = "STATUS_CODE_OK"] = 1;
                        values[valuesById[2] = "STATUS_CODE_ERROR"] = 2;
                        return values;
                    })();

                    return Status;
                })();

                return v1;
            })();

            return trace;
        })();

        proto.logs = (function() {

            /**
             * Namespace logs.
             * @memberof opentelemetry.proto
             * @namespace
             */
            const logs = {};

            logs.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof opentelemetry.proto.logs
                 * @namespace
                 */
                const v1 = {};

                v1.LogsData = (function() {

                    /**
                     * Properties of a LogsData.
                     * @memberof opentelemetry.proto.logs.v1
                     * @interface ILogsData
                     * @property {Array.<opentelemetry.proto.logs.v1.IResourceLogs>|null} [resourceLogs] LogsData resourceLogs
                     */

                    /**
                     * Constructs a new LogsData.
                     * @memberof opentelemetry.proto.logs.v1
                     * @classdesc Represents a LogsData.
                     * @implements ILogsData
                     * @constructor
                     * @param {opentelemetry.proto.logs.v1.ILogsData=} [properties] Properties to set
                     */
                    function LogsData(properties) {
                        this.resourceLogs = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LogsData resourceLogs.
                     * @member {Array.<opentelemetry.proto.logs.v1.IResourceLogs>} resourceLogs
                     * @memberof opentelemetry.proto.logs.v1.LogsData
                     * @instance
                     */
                    LogsData.prototype.resourceLogs = $util.emptyArray;

                    /**
                     * Creates a new LogsData instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.logs.v1.LogsData
                     * @static
                     * @param {opentelemetry.proto.logs.v1.ILogsData=} [properties] Properties to set
                     * @returns {opentelemetry.proto.logs.v1.LogsData} LogsData instance
                     */
                    LogsData.create = function create(properties) {
                        return new LogsData(properties);
                    };

                    /**
                     * Encodes the specified LogsData message. Does not implicitly {@link opentelemetry.proto.logs.v1.LogsData.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.logs.v1.LogsData
                     * @static
                     * @param {opentelemetry.proto.logs.v1.ILogsData} message LogsData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LogsData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resourceLogs != null && message.resourceLogs.length)
                            for (let i = 0; i < message.resourceLogs.length; ++i)
                                $root.opentelemetry.proto.logs.v1.ResourceLogs.encode(message.resourceLogs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified LogsData message, length delimited. Does not implicitly {@link opentelemetry.proto.logs.v1.LogsData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.logs.v1.LogsData
                     * @static
                     * @param {opentelemetry.proto.logs.v1.ILogsData} message LogsData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LogsData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a LogsData message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.logs.v1.LogsData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.logs.v1.LogsData} LogsData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LogsData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.logs.v1.LogsData();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.resourceLogs && message.resourceLogs.length))
                                        message.resourceLogs = [];
                                    message.resourceLogs.push($root.opentelemetry.proto.logs.v1.ResourceLogs.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a LogsData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.logs.v1.LogsData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.logs.v1.LogsData} LogsData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LogsData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a LogsData message.
                     * @function verify
                     * @memberof opentelemetry.proto.logs.v1.LogsData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LogsData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resourceLogs != null && message.hasOwnProperty("resourceLogs")) {
                            if (!Array.isArray(message.resourceLogs))
                                return "resourceLogs: array expected";
                            for (let i = 0; i < message.resourceLogs.length; ++i) {
                                let error = $root.opentelemetry.proto.logs.v1.ResourceLogs.verify(message.resourceLogs[i]);
                                if (error)
                                    return "resourceLogs." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a LogsData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.logs.v1.LogsData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.logs.v1.LogsData} LogsData
                     */
                    LogsData.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.logs.v1.LogsData)
                            return object;
                        let message = new $root.opentelemetry.proto.logs.v1.LogsData();
                        if (object.resourceLogs) {
                            if (!Array.isArray(object.resourceLogs))
                                throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: array expected");
                            message.resourceLogs = [];
                            for (let i = 0; i < object.resourceLogs.length; ++i) {
                                if (typeof object.resourceLogs[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: object expected");
                                message.resourceLogs[i] = $root.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(object.resourceLogs[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a LogsData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.logs.v1.LogsData
                     * @static
                     * @param {opentelemetry.proto.logs.v1.LogsData} message LogsData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LogsData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.resourceLogs = [];
                        if (message.resourceLogs && message.resourceLogs.length) {
                            object.resourceLogs = [];
                            for (let j = 0; j < message.resourceLogs.length; ++j)
                                object.resourceLogs[j] = $root.opentelemetry.proto.logs.v1.ResourceLogs.toObject(message.resourceLogs[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this LogsData to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.logs.v1.LogsData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LogsData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for LogsData
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.logs.v1.LogsData
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    LogsData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.logs.v1.LogsData";
                    };

                    return LogsData;
                })();

                v1.ResourceLogs = (function() {

                    /**
                     * Properties of a ResourceLogs.
                     * @memberof opentelemetry.proto.logs.v1
                     * @interface IResourceLogs
                     * @property {opentelemetry.proto.resource.v1.IResource|null} [resource] ResourceLogs resource
                     * @property {Array.<opentelemetry.proto.logs.v1.IScopeLogs>|null} [scopeLogs] ResourceLogs scopeLogs
                     * @property {string|null} [schemaUrl] ResourceLogs schemaUrl
                     */

                    /**
                     * Constructs a new ResourceLogs.
                     * @memberof opentelemetry.proto.logs.v1
                     * @classdesc Represents a ResourceLogs.
                     * @implements IResourceLogs
                     * @constructor
                     * @param {opentelemetry.proto.logs.v1.IResourceLogs=} [properties] Properties to set
                     */
                    function ResourceLogs(properties) {
                        this.scopeLogs = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ResourceLogs resource.
                     * @member {opentelemetry.proto.resource.v1.IResource|null|undefined} resource
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @instance
                     */
                    ResourceLogs.prototype.resource = null;

                    /**
                     * ResourceLogs scopeLogs.
                     * @member {Array.<opentelemetry.proto.logs.v1.IScopeLogs>} scopeLogs
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @instance
                     */
                    ResourceLogs.prototype.scopeLogs = $util.emptyArray;

                    /**
                     * ResourceLogs schemaUrl.
                     * @member {string} schemaUrl
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @instance
                     */
                    ResourceLogs.prototype.schemaUrl = "";

                    /**
                     * Creates a new ResourceLogs instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @static
                     * @param {opentelemetry.proto.logs.v1.IResourceLogs=} [properties] Properties to set
                     * @returns {opentelemetry.proto.logs.v1.ResourceLogs} ResourceLogs instance
                     */
                    ResourceLogs.create = function create(properties) {
                        return new ResourceLogs(properties);
                    };

                    /**
                     * Encodes the specified ResourceLogs message. Does not implicitly {@link opentelemetry.proto.logs.v1.ResourceLogs.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @static
                     * @param {opentelemetry.proto.logs.v1.IResourceLogs} message ResourceLogs message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ResourceLogs.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                            $root.opentelemetry.proto.resource.v1.Resource.encode(message.resource, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.scopeLogs != null && message.scopeLogs.length)
                            for (let i = 0; i < message.scopeLogs.length; ++i)
                                $root.opentelemetry.proto.logs.v1.ScopeLogs.encode(message.scopeLogs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.schemaUrl);
                        return writer;
                    };

                    /**
                     * Encodes the specified ResourceLogs message, length delimited. Does not implicitly {@link opentelemetry.proto.logs.v1.ResourceLogs.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @static
                     * @param {opentelemetry.proto.logs.v1.IResourceLogs} message ResourceLogs message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ResourceLogs.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ResourceLogs message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.logs.v1.ResourceLogs} ResourceLogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResourceLogs.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.logs.v1.ResourceLogs();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.resource = $root.opentelemetry.proto.resource.v1.Resource.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    if (!(message.scopeLogs && message.scopeLogs.length))
                                        message.scopeLogs = [];
                                    message.scopeLogs.push($root.opentelemetry.proto.logs.v1.ScopeLogs.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    message.schemaUrl = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ResourceLogs message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.logs.v1.ResourceLogs} ResourceLogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResourceLogs.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ResourceLogs message.
                     * @function verify
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResourceLogs.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resource != null && message.hasOwnProperty("resource")) {
                            let error = $root.opentelemetry.proto.resource.v1.Resource.verify(message.resource);
                            if (error)
                                return "resource." + error;
                        }
                        if (message.scopeLogs != null && message.hasOwnProperty("scopeLogs")) {
                            if (!Array.isArray(message.scopeLogs))
                                return "scopeLogs: array expected";
                            for (let i = 0; i < message.scopeLogs.length; ++i) {
                                let error = $root.opentelemetry.proto.logs.v1.ScopeLogs.verify(message.scopeLogs[i]);
                                if (error)
                                    return "scopeLogs." + error;
                            }
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            if (!$util.isString(message.schemaUrl))
                                return "schemaUrl: string expected";
                        return null;
                    };

                    /**
                     * Creates a ResourceLogs message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.logs.v1.ResourceLogs} ResourceLogs
                     */
                    ResourceLogs.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.logs.v1.ResourceLogs)
                            return object;
                        let message = new $root.opentelemetry.proto.logs.v1.ResourceLogs();
                        if (object.resource != null) {
                            if (typeof object.resource !== "object")
                                throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.resource: object expected");
                            message.resource = $root.opentelemetry.proto.resource.v1.Resource.fromObject(object.resource);
                        }
                        if (object.scopeLogs) {
                            if (!Array.isArray(object.scopeLogs))
                                throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: array expected");
                            message.scopeLogs = [];
                            for (let i = 0; i < object.scopeLogs.length; ++i) {
                                if (typeof object.scopeLogs[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: object expected");
                                message.scopeLogs[i] = $root.opentelemetry.proto.logs.v1.ScopeLogs.fromObject(object.scopeLogs[i]);
                            }
                        }
                        if (object.schemaUrl != null)
                            message.schemaUrl = String(object.schemaUrl);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ResourceLogs message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @static
                     * @param {opentelemetry.proto.logs.v1.ResourceLogs} message ResourceLogs
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResourceLogs.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.scopeLogs = [];
                        if (options.defaults) {
                            object.resource = null;
                            object.schemaUrl = "";
                        }
                        if (message.resource != null && message.hasOwnProperty("resource"))
                            object.resource = $root.opentelemetry.proto.resource.v1.Resource.toObject(message.resource, options);
                        if (message.scopeLogs && message.scopeLogs.length) {
                            object.scopeLogs = [];
                            for (let j = 0; j < message.scopeLogs.length; ++j)
                                object.scopeLogs[j] = $root.opentelemetry.proto.logs.v1.ScopeLogs.toObject(message.scopeLogs[j], options);
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            object.schemaUrl = message.schemaUrl;
                        return object;
                    };

                    /**
                     * Converts this ResourceLogs to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResourceLogs.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ResourceLogs
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.logs.v1.ResourceLogs
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ResourceLogs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.logs.v1.ResourceLogs";
                    };

                    return ResourceLogs;
                })();

                v1.ScopeLogs = (function() {

                    /**
                     * Properties of a ScopeLogs.
                     * @memberof opentelemetry.proto.logs.v1
                     * @interface IScopeLogs
                     * @property {opentelemetry.proto.common.v1.IInstrumentationScope|null} [scope] ScopeLogs scope
                     * @property {Array.<opentelemetry.proto.logs.v1.ILogRecord>|null} [logRecords] ScopeLogs logRecords
                     * @property {string|null} [schemaUrl] ScopeLogs schemaUrl
                     */

                    /**
                     * Constructs a new ScopeLogs.
                     * @memberof opentelemetry.proto.logs.v1
                     * @classdesc Represents a ScopeLogs.
                     * @implements IScopeLogs
                     * @constructor
                     * @param {opentelemetry.proto.logs.v1.IScopeLogs=} [properties] Properties to set
                     */
                    function ScopeLogs(properties) {
                        this.logRecords = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ScopeLogs scope.
                     * @member {opentelemetry.proto.common.v1.IInstrumentationScope|null|undefined} scope
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @instance
                     */
                    ScopeLogs.prototype.scope = null;

                    /**
                     * ScopeLogs logRecords.
                     * @member {Array.<opentelemetry.proto.logs.v1.ILogRecord>} logRecords
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @instance
                     */
                    ScopeLogs.prototype.logRecords = $util.emptyArray;

                    /**
                     * ScopeLogs schemaUrl.
                     * @member {string} schemaUrl
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @instance
                     */
                    ScopeLogs.prototype.schemaUrl = "";

                    /**
                     * Creates a new ScopeLogs instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @static
                     * @param {opentelemetry.proto.logs.v1.IScopeLogs=} [properties] Properties to set
                     * @returns {opentelemetry.proto.logs.v1.ScopeLogs} ScopeLogs instance
                     */
                    ScopeLogs.create = function create(properties) {
                        return new ScopeLogs(properties);
                    };

                    /**
                     * Encodes the specified ScopeLogs message. Does not implicitly {@link opentelemetry.proto.logs.v1.ScopeLogs.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @static
                     * @param {opentelemetry.proto.logs.v1.IScopeLogs} message ScopeLogs message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScopeLogs.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                            $root.opentelemetry.proto.common.v1.InstrumentationScope.encode(message.scope, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.logRecords != null && message.logRecords.length)
                            for (let i = 0; i < message.logRecords.length; ++i)
                                $root.opentelemetry.proto.logs.v1.LogRecord.encode(message.logRecords[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.schemaUrl);
                        return writer;
                    };

                    /**
                     * Encodes the specified ScopeLogs message, length delimited. Does not implicitly {@link opentelemetry.proto.logs.v1.ScopeLogs.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @static
                     * @param {opentelemetry.proto.logs.v1.IScopeLogs} message ScopeLogs message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScopeLogs.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ScopeLogs message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.logs.v1.ScopeLogs} ScopeLogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScopeLogs.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.logs.v1.ScopeLogs();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    if (!(message.logRecords && message.logRecords.length))
                                        message.logRecords = [];
                                    message.logRecords.push($root.opentelemetry.proto.logs.v1.LogRecord.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    message.schemaUrl = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ScopeLogs message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.logs.v1.ScopeLogs} ScopeLogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScopeLogs.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ScopeLogs message.
                     * @function verify
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScopeLogs.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.scope != null && message.hasOwnProperty("scope")) {
                            let error = $root.opentelemetry.proto.common.v1.InstrumentationScope.verify(message.scope);
                            if (error)
                                return "scope." + error;
                        }
                        if (message.logRecords != null && message.hasOwnProperty("logRecords")) {
                            if (!Array.isArray(message.logRecords))
                                return "logRecords: array expected";
                            for (let i = 0; i < message.logRecords.length; ++i) {
                                let error = $root.opentelemetry.proto.logs.v1.LogRecord.verify(message.logRecords[i]);
                                if (error)
                                    return "logRecords." + error;
                            }
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            if (!$util.isString(message.schemaUrl))
                                return "schemaUrl: string expected";
                        return null;
                    };

                    /**
                     * Creates a ScopeLogs message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.logs.v1.ScopeLogs} ScopeLogs
                     */
                    ScopeLogs.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.logs.v1.ScopeLogs)
                            return object;
                        let message = new $root.opentelemetry.proto.logs.v1.ScopeLogs();
                        if (object.scope != null) {
                            if (typeof object.scope !== "object")
                                throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.scope: object expected");
                            message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(object.scope);
                        }
                        if (object.logRecords) {
                            if (!Array.isArray(object.logRecords))
                                throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: array expected");
                            message.logRecords = [];
                            for (let i = 0; i < object.logRecords.length; ++i) {
                                if (typeof object.logRecords[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: object expected");
                                message.logRecords[i] = $root.opentelemetry.proto.logs.v1.LogRecord.fromObject(object.logRecords[i]);
                            }
                        }
                        if (object.schemaUrl != null)
                            message.schemaUrl = String(object.schemaUrl);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ScopeLogs message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @static
                     * @param {opentelemetry.proto.logs.v1.ScopeLogs} message ScopeLogs
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScopeLogs.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.logRecords = [];
                        if (options.defaults) {
                            object.scope = null;
                            object.schemaUrl = "";
                        }
                        if (message.scope != null && message.hasOwnProperty("scope"))
                            object.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.toObject(message.scope, options);
                        if (message.logRecords && message.logRecords.length) {
                            object.logRecords = [];
                            for (let j = 0; j < message.logRecords.length; ++j)
                                object.logRecords[j] = $root.opentelemetry.proto.logs.v1.LogRecord.toObject(message.logRecords[j], options);
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            object.schemaUrl = message.schemaUrl;
                        return object;
                    };

                    /**
                     * Converts this ScopeLogs to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScopeLogs.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ScopeLogs
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.logs.v1.ScopeLogs
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ScopeLogs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.logs.v1.ScopeLogs";
                    };

                    return ScopeLogs;
                })();

                /**
                 * SeverityNumber enum.
                 * @name opentelemetry.proto.logs.v1.SeverityNumber
                 * @enum {number}
                 * @property {number} SEVERITY_NUMBER_UNSPECIFIED=0 SEVERITY_NUMBER_UNSPECIFIED value
                 * @property {number} SEVERITY_NUMBER_TRACE=1 SEVERITY_NUMBER_TRACE value
                 * @property {number} SEVERITY_NUMBER_TRACE2=2 SEVERITY_NUMBER_TRACE2 value
                 * @property {number} SEVERITY_NUMBER_TRACE3=3 SEVERITY_NUMBER_TRACE3 value
                 * @property {number} SEVERITY_NUMBER_TRACE4=4 SEVERITY_NUMBER_TRACE4 value
                 * @property {number} SEVERITY_NUMBER_DEBUG=5 SEVERITY_NUMBER_DEBUG value
                 * @property {number} SEVERITY_NUMBER_DEBUG2=6 SEVERITY_NUMBER_DEBUG2 value
                 * @property {number} SEVERITY_NUMBER_DEBUG3=7 SEVERITY_NUMBER_DEBUG3 value
                 * @property {number} SEVERITY_NUMBER_DEBUG4=8 SEVERITY_NUMBER_DEBUG4 value
                 * @property {number} SEVERITY_NUMBER_INFO=9 SEVERITY_NUMBER_INFO value
                 * @property {number} SEVERITY_NUMBER_INFO2=10 SEVERITY_NUMBER_INFO2 value
                 * @property {number} SEVERITY_NUMBER_INFO3=11 SEVERITY_NUMBER_INFO3 value
                 * @property {number} SEVERITY_NUMBER_INFO4=12 SEVERITY_NUMBER_INFO4 value
                 * @property {number} SEVERITY_NUMBER_WARN=13 SEVERITY_NUMBER_WARN value
                 * @property {number} SEVERITY_NUMBER_WARN2=14 SEVERITY_NUMBER_WARN2 value
                 * @property {number} SEVERITY_NUMBER_WARN3=15 SEVERITY_NUMBER_WARN3 value
                 * @property {number} SEVERITY_NUMBER_WARN4=16 SEVERITY_NUMBER_WARN4 value
                 * @property {number} SEVERITY_NUMBER_ERROR=17 SEVERITY_NUMBER_ERROR value
                 * @property {number} SEVERITY_NUMBER_ERROR2=18 SEVERITY_NUMBER_ERROR2 value
                 * @property {number} SEVERITY_NUMBER_ERROR3=19 SEVERITY_NUMBER_ERROR3 value
                 * @property {number} SEVERITY_NUMBER_ERROR4=20 SEVERITY_NUMBER_ERROR4 value
                 * @property {number} SEVERITY_NUMBER_FATAL=21 SEVERITY_NUMBER_FATAL value
                 * @property {number} SEVERITY_NUMBER_FATAL2=22 SEVERITY_NUMBER_FATAL2 value
                 * @property {number} SEVERITY_NUMBER_FATAL3=23 SEVERITY_NUMBER_FATAL3 value
                 * @property {number} SEVERITY_NUMBER_FATAL4=24 SEVERITY_NUMBER_FATAL4 value
                 */
                v1.SeverityNumber = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SEVERITY_NUMBER_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "SEVERITY_NUMBER_TRACE"] = 1;
                    values[valuesById[2] = "SEVERITY_NUMBER_TRACE2"] = 2;
                    values[valuesById[3] = "SEVERITY_NUMBER_TRACE3"] = 3;
                    values[valuesById[4] = "SEVERITY_NUMBER_TRACE4"] = 4;
                    values[valuesById[5] = "SEVERITY_NUMBER_DEBUG"] = 5;
                    values[valuesById[6] = "SEVERITY_NUMBER_DEBUG2"] = 6;
                    values[valuesById[7] = "SEVERITY_NUMBER_DEBUG3"] = 7;
                    values[valuesById[8] = "SEVERITY_NUMBER_DEBUG4"] = 8;
                    values[valuesById[9] = "SEVERITY_NUMBER_INFO"] = 9;
                    values[valuesById[10] = "SEVERITY_NUMBER_INFO2"] = 10;
                    values[valuesById[11] = "SEVERITY_NUMBER_INFO3"] = 11;
                    values[valuesById[12] = "SEVERITY_NUMBER_INFO4"] = 12;
                    values[valuesById[13] = "SEVERITY_NUMBER_WARN"] = 13;
                    values[valuesById[14] = "SEVERITY_NUMBER_WARN2"] = 14;
                    values[valuesById[15] = "SEVERITY_NUMBER_WARN3"] = 15;
                    values[valuesById[16] = "SEVERITY_NUMBER_WARN4"] = 16;
                    values[valuesById[17] = "SEVERITY_NUMBER_ERROR"] = 17;
                    values[valuesById[18] = "SEVERITY_NUMBER_ERROR2"] = 18;
                    values[valuesById[19] = "SEVERITY_NUMBER_ERROR3"] = 19;
                    values[valuesById[20] = "SEVERITY_NUMBER_ERROR4"] = 20;
                    values[valuesById[21] = "SEVERITY_NUMBER_FATAL"] = 21;
                    values[valuesById[22] = "SEVERITY_NUMBER_FATAL2"] = 22;
                    values[valuesById[23] = "SEVERITY_NUMBER_FATAL3"] = 23;
                    values[valuesById[24] = "SEVERITY_NUMBER_FATAL4"] = 24;
                    return values;
                })();

                /**
                 * LogRecordFlags enum.
                 * @name opentelemetry.proto.logs.v1.LogRecordFlags
                 * @enum {number}
                 * @property {number} LOG_RECORD_FLAG_UNSPECIFIED=0 LOG_RECORD_FLAG_UNSPECIFIED value
                 * @property {number} LOG_RECORD_FLAG_TRACE_FLAGS_MASK=255 LOG_RECORD_FLAG_TRACE_FLAGS_MASK value
                 */
                v1.LogRecordFlags = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "LOG_RECORD_FLAG_UNSPECIFIED"] = 0;
                    values[valuesById[255] = "LOG_RECORD_FLAG_TRACE_FLAGS_MASK"] = 255;
                    return values;
                })();

                v1.LogRecord = (function() {

                    /**
                     * Properties of a LogRecord.
                     * @memberof opentelemetry.proto.logs.v1
                     * @interface ILogRecord
                     * @property {number|Long|null} [timeUnixNano] LogRecord timeUnixNano
                     * @property {number|Long|null} [observedTimeUnixNano] LogRecord observedTimeUnixNano
                     * @property {opentelemetry.proto.logs.v1.SeverityNumber|null} [severityNumber] LogRecord severityNumber
                     * @property {string|null} [severityText] LogRecord severityText
                     * @property {opentelemetry.proto.common.v1.IAnyValue|null} [body] LogRecord body
                     * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [attributes] LogRecord attributes
                     * @property {number|null} [droppedAttributesCount] LogRecord droppedAttributesCount
                     * @property {number|null} [flags] LogRecord flags
                     * @property {Uint8Array|null} [traceId] LogRecord traceId
                     * @property {Uint8Array|null} [spanId] LogRecord spanId
                     */

                    /**
                     * Constructs a new LogRecord.
                     * @memberof opentelemetry.proto.logs.v1
                     * @classdesc Represents a LogRecord.
                     * @implements ILogRecord
                     * @constructor
                     * @param {opentelemetry.proto.logs.v1.ILogRecord=} [properties] Properties to set
                     */
                    function LogRecord(properties) {
                        this.attributes = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LogRecord timeUnixNano.
                     * @member {number|Long} timeUnixNano
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @instance
                     */
                    LogRecord.prototype.timeUnixNano = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * LogRecord observedTimeUnixNano.
                     * @member {number|Long} observedTimeUnixNano
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @instance
                     */
                    LogRecord.prototype.observedTimeUnixNano = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * LogRecord severityNumber.
                     * @member {opentelemetry.proto.logs.v1.SeverityNumber} severityNumber
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @instance
                     */
                    LogRecord.prototype.severityNumber = 0;

                    /**
                     * LogRecord severityText.
                     * @member {string} severityText
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @instance
                     */
                    LogRecord.prototype.severityText = "";

                    /**
                     * LogRecord body.
                     * @member {opentelemetry.proto.common.v1.IAnyValue|null|undefined} body
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @instance
                     */
                    LogRecord.prototype.body = null;

                    /**
                     * LogRecord attributes.
                     * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} attributes
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @instance
                     */
                    LogRecord.prototype.attributes = $util.emptyArray;

                    /**
                     * LogRecord droppedAttributesCount.
                     * @member {number} droppedAttributesCount
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @instance
                     */
                    LogRecord.prototype.droppedAttributesCount = 0;

                    /**
                     * LogRecord flags.
                     * @member {number} flags
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @instance
                     */
                    LogRecord.prototype.flags = 0;

                    /**
                     * LogRecord traceId.
                     * @member {Uint8Array} traceId
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @instance
                     */
                    LogRecord.prototype.traceId = $util.newBuffer([]);

                    /**
                     * LogRecord spanId.
                     * @member {Uint8Array} spanId
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @instance
                     */
                    LogRecord.prototype.spanId = $util.newBuffer([]);

                    /**
                     * Creates a new LogRecord instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @static
                     * @param {opentelemetry.proto.logs.v1.ILogRecord=} [properties] Properties to set
                     * @returns {opentelemetry.proto.logs.v1.LogRecord} LogRecord instance
                     */
                    LogRecord.create = function create(properties) {
                        return new LogRecord(properties);
                    };

                    /**
                     * Encodes the specified LogRecord message. Does not implicitly {@link opentelemetry.proto.logs.v1.LogRecord.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @static
                     * @param {opentelemetry.proto.logs.v1.ILogRecord} message LogRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LogRecord.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.timeUnixNano);
                        if (message.severityNumber != null && Object.hasOwnProperty.call(message, "severityNumber"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.severityNumber);
                        if (message.severityText != null && Object.hasOwnProperty.call(message, "severityText"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.severityText);
                        if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                            $root.opentelemetry.proto.common.v1.AnyValue.encode(message.body, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.attributes != null && message.attributes.length)
                            for (let i = 0; i < message.attributes.length; ++i)
                                $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.droppedAttributesCount);
                        if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                            writer.uint32(/* id 8, wireType 5 =*/69).fixed32(message.flags);
                        if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                            writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.traceId);
                        if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                            writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.spanId);
                        if (message.observedTimeUnixNano != null && Object.hasOwnProperty.call(message, "observedTimeUnixNano"))
                            writer.uint32(/* id 11, wireType 1 =*/89).fixed64(message.observedTimeUnixNano);
                        return writer;
                    };

                    /**
                     * Encodes the specified LogRecord message, length delimited. Does not implicitly {@link opentelemetry.proto.logs.v1.LogRecord.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @static
                     * @param {opentelemetry.proto.logs.v1.ILogRecord} message LogRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LogRecord.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a LogRecord message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.logs.v1.LogRecord} LogRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LogRecord.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.logs.v1.LogRecord();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.timeUnixNano = reader.fixed64();
                                    break;
                                }
                            case 11: {
                                    message.observedTimeUnixNano = reader.fixed64();
                                    break;
                                }
                            case 2: {
                                    message.severityNumber = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.severityText = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.body = $root.opentelemetry.proto.common.v1.AnyValue.decode(reader, reader.uint32());
                                    break;
                                }
                            case 6: {
                                    if (!(message.attributes && message.attributes.length))
                                        message.attributes = [];
                                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 7: {
                                    message.droppedAttributesCount = reader.uint32();
                                    break;
                                }
                            case 8: {
                                    message.flags = reader.fixed32();
                                    break;
                                }
                            case 9: {
                                    message.traceId = reader.bytes();
                                    break;
                                }
                            case 10: {
                                    message.spanId = reader.bytes();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a LogRecord message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.logs.v1.LogRecord} LogRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LogRecord.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a LogRecord message.
                     * @function verify
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LogRecord.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                            if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                                return "timeUnixNano: integer|Long expected";
                        if (message.observedTimeUnixNano != null && message.hasOwnProperty("observedTimeUnixNano"))
                            if (!$util.isInteger(message.observedTimeUnixNano) && !(message.observedTimeUnixNano && $util.isInteger(message.observedTimeUnixNano.low) && $util.isInteger(message.observedTimeUnixNano.high)))
                                return "observedTimeUnixNano: integer|Long expected";
                        if (message.severityNumber != null && message.hasOwnProperty("severityNumber"))
                            switch (message.severityNumber) {
                            default:
                                return "severityNumber: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                                break;
                            }
                        if (message.severityText != null && message.hasOwnProperty("severityText"))
                            if (!$util.isString(message.severityText))
                                return "severityText: string expected";
                        if (message.body != null && message.hasOwnProperty("body")) {
                            let error = $root.opentelemetry.proto.common.v1.AnyValue.verify(message.body);
                            if (error)
                                return "body." + error;
                        }
                        if (message.attributes != null && message.hasOwnProperty("attributes")) {
                            if (!Array.isArray(message.attributes))
                                return "attributes: array expected";
                            for (let i = 0; i < message.attributes.length; ++i) {
                                let error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                                if (error)
                                    return "attributes." + error;
                            }
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            if (!$util.isInteger(message.droppedAttributesCount))
                                return "droppedAttributesCount: integer expected";
                        if (message.flags != null && message.hasOwnProperty("flags"))
                            if (!$util.isInteger(message.flags))
                                return "flags: integer expected";
                        if (message.traceId != null && message.hasOwnProperty("traceId"))
                            if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                                return "traceId: buffer expected";
                        if (message.spanId != null && message.hasOwnProperty("spanId"))
                            if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                                return "spanId: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a LogRecord message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.logs.v1.LogRecord} LogRecord
                     */
                    LogRecord.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.logs.v1.LogRecord)
                            return object;
                        let message = new $root.opentelemetry.proto.logs.v1.LogRecord();
                        if (object.timeUnixNano != null)
                            if ($util.Long)
                                (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                            else if (typeof object.timeUnixNano === "string")
                                message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                            else if (typeof object.timeUnixNano === "number")
                                message.timeUnixNano = object.timeUnixNano;
                            else if (typeof object.timeUnixNano === "object")
                                message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
                        if (object.observedTimeUnixNano != null)
                            if ($util.Long)
                                (message.observedTimeUnixNano = $util.Long.fromValue(object.observedTimeUnixNano)).unsigned = false;
                            else if (typeof object.observedTimeUnixNano === "string")
                                message.observedTimeUnixNano = parseInt(object.observedTimeUnixNano, 10);
                            else if (typeof object.observedTimeUnixNano === "number")
                                message.observedTimeUnixNano = object.observedTimeUnixNano;
                            else if (typeof object.observedTimeUnixNano === "object")
                                message.observedTimeUnixNano = new $util.LongBits(object.observedTimeUnixNano.low >>> 0, object.observedTimeUnixNano.high >>> 0).toNumber();
                        switch (object.severityNumber) {
                        default:
                            if (typeof object.severityNumber === "number") {
                                message.severityNumber = object.severityNumber;
                                break;
                            }
                            break;
                        case "SEVERITY_NUMBER_UNSPECIFIED":
                        case 0:
                            message.severityNumber = 0;
                            break;
                        case "SEVERITY_NUMBER_TRACE":
                        case 1:
                            message.severityNumber = 1;
                            break;
                        case "SEVERITY_NUMBER_TRACE2":
                        case 2:
                            message.severityNumber = 2;
                            break;
                        case "SEVERITY_NUMBER_TRACE3":
                        case 3:
                            message.severityNumber = 3;
                            break;
                        case "SEVERITY_NUMBER_TRACE4":
                        case 4:
                            message.severityNumber = 4;
                            break;
                        case "SEVERITY_NUMBER_DEBUG":
                        case 5:
                            message.severityNumber = 5;
                            break;
                        case "SEVERITY_NUMBER_DEBUG2":
                        case 6:
                            message.severityNumber = 6;
                            break;
                        case "SEVERITY_NUMBER_DEBUG3":
                        case 7:
                            message.severityNumber = 7;
                            break;
                        case "SEVERITY_NUMBER_DEBUG4":
                        case 8:
                            message.severityNumber = 8;
                            break;
                        case "SEVERITY_NUMBER_INFO":
                        case 9:
                            message.severityNumber = 9;
                            break;
                        case "SEVERITY_NUMBER_INFO2":
                        case 10:
                            message.severityNumber = 10;
                            break;
                        case "SEVERITY_NUMBER_INFO3":
                        case 11:
                            message.severityNumber = 11;
                            break;
                        case "SEVERITY_NUMBER_INFO4":
                        case 12:
                            message.severityNumber = 12;
                            break;
                        case "SEVERITY_NUMBER_WARN":
                        case 13:
                            message.severityNumber = 13;
                            break;
                        case "SEVERITY_NUMBER_WARN2":
                        case 14:
                            message.severityNumber = 14;
                            break;
                        case "SEVERITY_NUMBER_WARN3":
                        case 15:
                            message.severityNumber = 15;
                            break;
                        case "SEVERITY_NUMBER_WARN4":
                        case 16:
                            message.severityNumber = 16;
                            break;
                        case "SEVERITY_NUMBER_ERROR":
                        case 17:
                            message.severityNumber = 17;
                            break;
                        case "SEVERITY_NUMBER_ERROR2":
                        case 18:
                            message.severityNumber = 18;
                            break;
                        case "SEVERITY_NUMBER_ERROR3":
                        case 19:
                            message.severityNumber = 19;
                            break;
                        case "SEVERITY_NUMBER_ERROR4":
                        case 20:
                            message.severityNumber = 20;
                            break;
                        case "SEVERITY_NUMBER_FATAL":
                        case 21:
                            message.severityNumber = 21;
                            break;
                        case "SEVERITY_NUMBER_FATAL2":
                        case 22:
                            message.severityNumber = 22;
                            break;
                        case "SEVERITY_NUMBER_FATAL3":
                        case 23:
                            message.severityNumber = 23;
                            break;
                        case "SEVERITY_NUMBER_FATAL4":
                        case 24:
                            message.severityNumber = 24;
                            break;
                        }
                        if (object.severityText != null)
                            message.severityText = String(object.severityText);
                        if (object.body != null) {
                            if (typeof object.body !== "object")
                                throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.body: object expected");
                            message.body = $root.opentelemetry.proto.common.v1.AnyValue.fromObject(object.body);
                        }
                        if (object.attributes) {
                            if (!Array.isArray(object.attributes))
                                throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: array expected");
                            message.attributes = [];
                            for (let i = 0; i < object.attributes.length; ++i) {
                                if (typeof object.attributes[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: object expected");
                                message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                            }
                        }
                        if (object.droppedAttributesCount != null)
                            message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                        if (object.flags != null)
                            message.flags = object.flags >>> 0;
                        if (object.traceId != null)
                            if (typeof object.traceId === "string")
                                $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                            else if (object.traceId.length >= 0)
                                message.traceId = object.traceId;
                        if (object.spanId != null)
                            if (typeof object.spanId === "string")
                                $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                            else if (object.spanId.length >= 0)
                                message.spanId = object.spanId;
                        return message;
                    };

                    /**
                     * Creates a plain object from a LogRecord message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @static
                     * @param {opentelemetry.proto.logs.v1.LogRecord} message LogRecord
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LogRecord.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.attributes = [];
                        if (options.defaults) {
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timeUnixNano = options.longs === String ? "0" : 0;
                            object.severityNumber = options.enums === String ? "SEVERITY_NUMBER_UNSPECIFIED" : 0;
                            object.severityText = "";
                            object.body = null;
                            object.droppedAttributesCount = 0;
                            object.flags = 0;
                            if (options.bytes === String)
                                object.traceId = "";
                            else {
                                object.traceId = [];
                                if (options.bytes !== Array)
                                    object.traceId = $util.newBuffer(object.traceId);
                            }
                            if (options.bytes === String)
                                object.spanId = "";
                            else {
                                object.spanId = [];
                                if (options.bytes !== Array)
                                    object.spanId = $util.newBuffer(object.spanId);
                            }
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.observedTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.observedTimeUnixNano = options.longs === String ? "0" : 0;
                        }
                        if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                            if (typeof message.timeUnixNano === "number")
                                object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                            else
                                object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
                        if (message.severityNumber != null && message.hasOwnProperty("severityNumber"))
                            object.severityNumber = options.enums === String ? $root.opentelemetry.proto.logs.v1.SeverityNumber[message.severityNumber] === undefined ? message.severityNumber : $root.opentelemetry.proto.logs.v1.SeverityNumber[message.severityNumber] : message.severityNumber;
                        if (message.severityText != null && message.hasOwnProperty("severityText"))
                            object.severityText = message.severityText;
                        if (message.body != null && message.hasOwnProperty("body"))
                            object.body = $root.opentelemetry.proto.common.v1.AnyValue.toObject(message.body, options);
                        if (message.attributes && message.attributes.length) {
                            object.attributes = [];
                            for (let j = 0; j < message.attributes.length; ++j)
                                object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            object.droppedAttributesCount = message.droppedAttributesCount;
                        if (message.flags != null && message.hasOwnProperty("flags"))
                            object.flags = message.flags;
                        if (message.traceId != null && message.hasOwnProperty("traceId"))
                            object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
                        if (message.spanId != null && message.hasOwnProperty("spanId"))
                            object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
                        if (message.observedTimeUnixNano != null && message.hasOwnProperty("observedTimeUnixNano"))
                            if (typeof message.observedTimeUnixNano === "number")
                                object.observedTimeUnixNano = options.longs === String ? String(message.observedTimeUnixNano) : message.observedTimeUnixNano;
                            else
                                object.observedTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.observedTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.observedTimeUnixNano.low >>> 0, message.observedTimeUnixNano.high >>> 0).toNumber() : message.observedTimeUnixNano;
                        return object;
                    };

                    /**
                     * Converts this LogRecord to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LogRecord.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for LogRecord
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.logs.v1.LogRecord
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    LogRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.logs.v1.LogRecord";
                    };

                    return LogRecord;
                })();

                return v1;
            })();

            return logs;
        })();

        proto.collector = (function() {

            /**
             * Namespace collector.
             * @memberof opentelemetry.proto
             * @namespace
             */
            const collector = {};

            collector.logs = (function() {

                /**
                 * Namespace logs.
                 * @memberof opentelemetry.proto.collector
                 * @namespace
                 */
                const logs = {};

                logs.v1 = (function() {

                    /**
                     * Namespace v1.
                     * @memberof opentelemetry.proto.collector.logs
                     * @namespace
                     */
                    const v1 = {};

                    v1.LogsService = (function() {

                        /**
                         * Constructs a new LogsService service.
                         * @memberof opentelemetry.proto.collector.logs.v1
                         * @classdesc Represents a LogsService
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function LogsService(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }

                        (LogsService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = LogsService;

                        /**
                         * Creates new LogsService service using the specified rpc implementation.
                         * @function create
                         * @memberof opentelemetry.proto.collector.logs.v1.LogsService
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {LogsService} RPC service. Useful where requests and/or responses are streamed.
                         */
                        LogsService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };

                        /**
                         * Callback as used by {@link opentelemetry.proto.collector.logs.v1.LogsService#export_}.
                         * @memberof opentelemetry.proto.collector.logs.v1.LogsService
                         * @typedef ExportCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse} [response] ExportLogsServiceResponse
                         */

                        /**
                         * Calls Export.
                         * @function export
                         * @memberof opentelemetry.proto.collector.logs.v1.LogsService
                         * @instance
                         * @param {opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest} request ExportLogsServiceRequest message or plain object
                         * @param {opentelemetry.proto.collector.logs.v1.LogsService.ExportCallback} callback Node-style callback called with the error, if any, and ExportLogsServiceResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(LogsService.prototype["export"] = function export_(request, callback) {
                            return this.rpcCall(export_, $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest, $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse, request, callback);
                        }, "name", { value: "Export" });

                        /**
                         * Calls Export.
                         * @function export
                         * @memberof opentelemetry.proto.collector.logs.v1.LogsService
                         * @instance
                         * @param {opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest} request ExportLogsServiceRequest message or plain object
                         * @returns {Promise<opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse>} Promise
                         * @variation 2
                         */

                        return LogsService;
                    })();

                    v1.ExportLogsServiceRequest = (function() {

                        /**
                         * Properties of an ExportLogsServiceRequest.
                         * @memberof opentelemetry.proto.collector.logs.v1
                         * @interface IExportLogsServiceRequest
                         * @property {Array.<opentelemetry.proto.logs.v1.IResourceLogs>|null} [resourceLogs] ExportLogsServiceRequest resourceLogs
                         */

                        /**
                         * Constructs a new ExportLogsServiceRequest.
                         * @memberof opentelemetry.proto.collector.logs.v1
                         * @classdesc Represents an ExportLogsServiceRequest.
                         * @implements IExportLogsServiceRequest
                         * @constructor
                         * @param {opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest=} [properties] Properties to set
                         */
                        function ExportLogsServiceRequest(properties) {
                            this.resourceLogs = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ExportLogsServiceRequest resourceLogs.
                         * @member {Array.<opentelemetry.proto.logs.v1.IResourceLogs>} resourceLogs
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                         * @instance
                         */
                        ExportLogsServiceRequest.prototype.resourceLogs = $util.emptyArray;

                        /**
                         * Creates a new ExportLogsServiceRequest instance using the specified properties.
                         * @function create
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                         * @static
                         * @param {opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest=} [properties] Properties to set
                         * @returns {opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest} ExportLogsServiceRequest instance
                         */
                        ExportLogsServiceRequest.create = function create(properties) {
                            return new ExportLogsServiceRequest(properties);
                        };

                        /**
                         * Encodes the specified ExportLogsServiceRequest message. Does not implicitly {@link opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.verify|verify} messages.
                         * @function encode
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                         * @static
                         * @param {opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest} message ExportLogsServiceRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ExportLogsServiceRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.resourceLogs != null && message.resourceLogs.length)
                                for (let i = 0; i < message.resourceLogs.length; ++i)
                                    $root.opentelemetry.proto.logs.v1.ResourceLogs.encode(message.resourceLogs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified ExportLogsServiceRequest message, length delimited. Does not implicitly {@link opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                         * @static
                         * @param {opentelemetry.proto.collector.logs.v1.IExportLogsServiceRequest} message ExportLogsServiceRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ExportLogsServiceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an ExportLogsServiceRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest} ExportLogsServiceRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ExportLogsServiceRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.resourceLogs && message.resourceLogs.length))
                                            message.resourceLogs = [];
                                        message.resourceLogs.push($root.opentelemetry.proto.logs.v1.ResourceLogs.decode(reader, reader.uint32()));
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an ExportLogsServiceRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest} ExportLogsServiceRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ExportLogsServiceRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an ExportLogsServiceRequest message.
                         * @function verify
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ExportLogsServiceRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.resourceLogs != null && message.hasOwnProperty("resourceLogs")) {
                                if (!Array.isArray(message.resourceLogs))
                                    return "resourceLogs: array expected";
                                for (let i = 0; i < message.resourceLogs.length; ++i) {
                                    let error = $root.opentelemetry.proto.logs.v1.ResourceLogs.verify(message.resourceLogs[i]);
                                    if (error)
                                        return "resourceLogs." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates an ExportLogsServiceRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest} ExportLogsServiceRequest
                         */
                        ExportLogsServiceRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest)
                                return object;
                            let message = new $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest();
                            if (object.resourceLogs) {
                                if (!Array.isArray(object.resourceLogs))
                                    throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: array expected");
                                message.resourceLogs = [];
                                for (let i = 0; i < object.resourceLogs.length; ++i) {
                                    if (typeof object.resourceLogs[i] !== "object")
                                        throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: object expected");
                                    message.resourceLogs[i] = $root.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(object.resourceLogs[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from an ExportLogsServiceRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                         * @static
                         * @param {opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest} message ExportLogsServiceRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ExportLogsServiceRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.arrays || options.defaults)
                                object.resourceLogs = [];
                            if (message.resourceLogs && message.resourceLogs.length) {
                                object.resourceLogs = [];
                                for (let j = 0; j < message.resourceLogs.length; ++j)
                                    object.resourceLogs[j] = $root.opentelemetry.proto.logs.v1.ResourceLogs.toObject(message.resourceLogs[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this ExportLogsServiceRequest to JSON.
                         * @function toJSON
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ExportLogsServiceRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ExportLogsServiceRequest
                         * @function getTypeUrl
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ExportLogsServiceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest";
                        };

                        return ExportLogsServiceRequest;
                    })();

                    v1.ExportLogsServiceResponse = (function() {

                        /**
                         * Properties of an ExportLogsServiceResponse.
                         * @memberof opentelemetry.proto.collector.logs.v1
                         * @interface IExportLogsServiceResponse
                         */

                        /**
                         * Constructs a new ExportLogsServiceResponse.
                         * @memberof opentelemetry.proto.collector.logs.v1
                         * @classdesc Represents an ExportLogsServiceResponse.
                         * @implements IExportLogsServiceResponse
                         * @constructor
                         * @param {opentelemetry.proto.collector.logs.v1.IExportLogsServiceResponse=} [properties] Properties to set
                         */
                        function ExportLogsServiceResponse(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Creates a new ExportLogsServiceResponse instance using the specified properties.
                         * @function create
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse
                         * @static
                         * @param {opentelemetry.proto.collector.logs.v1.IExportLogsServiceResponse=} [properties] Properties to set
                         * @returns {opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse} ExportLogsServiceResponse instance
                         */
                        ExportLogsServiceResponse.create = function create(properties) {
                            return new ExportLogsServiceResponse(properties);
                        };

                        /**
                         * Encodes the specified ExportLogsServiceResponse message. Does not implicitly {@link opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.verify|verify} messages.
                         * @function encode
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse
                         * @static
                         * @param {opentelemetry.proto.collector.logs.v1.IExportLogsServiceResponse} message ExportLogsServiceResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ExportLogsServiceResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Encodes the specified ExportLogsServiceResponse message, length delimited. Does not implicitly {@link opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse
                         * @static
                         * @param {opentelemetry.proto.collector.logs.v1.IExportLogsServiceResponse} message ExportLogsServiceResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ExportLogsServiceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an ExportLogsServiceResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse} ExportLogsServiceResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ExportLogsServiceResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an ExportLogsServiceResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse} ExportLogsServiceResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ExportLogsServiceResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an ExportLogsServiceResponse message.
                         * @function verify
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ExportLogsServiceResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            return null;
                        };

                        /**
                         * Creates an ExportLogsServiceResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse} ExportLogsServiceResponse
                         */
                        ExportLogsServiceResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse)
                                return object;
                            return new $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse();
                        };

                        /**
                         * Creates a plain object from an ExportLogsServiceResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse
                         * @static
                         * @param {opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse} message ExportLogsServiceResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ExportLogsServiceResponse.toObject = function toObject() {
                            return {};
                        };

                        /**
                         * Converts this ExportLogsServiceResponse to JSON.
                         * @function toJSON
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ExportLogsServiceResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ExportLogsServiceResponse
                         * @function getTypeUrl
                         * @memberof opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ExportLogsServiceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse";
                        };

                        return ExportLogsServiceResponse;
                    })();

                    return v1;
                })();

                return logs;
            })();

            collector.trace = (function() {

                /**
                 * Namespace trace.
                 * @memberof opentelemetry.proto.collector
                 * @namespace
                 */
                const trace = {};

                trace.v1 = (function() {

                    /**
                     * Namespace v1.
                     * @memberof opentelemetry.proto.collector.trace
                     * @namespace
                     */
                    const v1 = {};

                    v1.TraceService = (function() {

                        /**
                         * Constructs a new TraceService service.
                         * @memberof opentelemetry.proto.collector.trace.v1
                         * @classdesc Represents a TraceService
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function TraceService(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }

                        (TraceService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TraceService;

                        /**
                         * Creates new TraceService service using the specified rpc implementation.
                         * @function create
                         * @memberof opentelemetry.proto.collector.trace.v1.TraceService
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {TraceService} RPC service. Useful where requests and/or responses are streamed.
                         */
                        TraceService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };

                        /**
                         * Callback as used by {@link opentelemetry.proto.collector.trace.v1.TraceService#export_}.
                         * @memberof opentelemetry.proto.collector.trace.v1.TraceService
                         * @typedef ExportCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse} [response] ExportTraceServiceResponse
                         */

                        /**
                         * Calls Export.
                         * @function export
                         * @memberof opentelemetry.proto.collector.trace.v1.TraceService
                         * @instance
                         * @param {opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest} request ExportTraceServiceRequest message or plain object
                         * @param {opentelemetry.proto.collector.trace.v1.TraceService.ExportCallback} callback Node-style callback called with the error, if any, and ExportTraceServiceResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(TraceService.prototype["export"] = function export_(request, callback) {
                            return this.rpcCall(export_, $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest, $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse, request, callback);
                        }, "name", { value: "Export" });

                        /**
                         * Calls Export.
                         * @function export
                         * @memberof opentelemetry.proto.collector.trace.v1.TraceService
                         * @instance
                         * @param {opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest} request ExportTraceServiceRequest message or plain object
                         * @returns {Promise<opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse>} Promise
                         * @variation 2
                         */

                        return TraceService;
                    })();

                    v1.ExportTraceServiceRequest = (function() {

                        /**
                         * Properties of an ExportTraceServiceRequest.
                         * @memberof opentelemetry.proto.collector.trace.v1
                         * @interface IExportTraceServiceRequest
                         * @property {Array.<opentelemetry.proto.trace.v1.IResourceSpans>|null} [resourceSpans] ExportTraceServiceRequest resourceSpans
                         */

                        /**
                         * Constructs a new ExportTraceServiceRequest.
                         * @memberof opentelemetry.proto.collector.trace.v1
                         * @classdesc Represents an ExportTraceServiceRequest.
                         * @implements IExportTraceServiceRequest
                         * @constructor
                         * @param {opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest=} [properties] Properties to set
                         */
                        function ExportTraceServiceRequest(properties) {
                            this.resourceSpans = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ExportTraceServiceRequest resourceSpans.
                         * @member {Array.<opentelemetry.proto.trace.v1.IResourceSpans>} resourceSpans
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                         * @instance
                         */
                        ExportTraceServiceRequest.prototype.resourceSpans = $util.emptyArray;

                        /**
                         * Creates a new ExportTraceServiceRequest instance using the specified properties.
                         * @function create
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                         * @static
                         * @param {opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest=} [properties] Properties to set
                         * @returns {opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest} ExportTraceServiceRequest instance
                         */
                        ExportTraceServiceRequest.create = function create(properties) {
                            return new ExportTraceServiceRequest(properties);
                        };

                        /**
                         * Encodes the specified ExportTraceServiceRequest message. Does not implicitly {@link opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.verify|verify} messages.
                         * @function encode
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                         * @static
                         * @param {opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest} message ExportTraceServiceRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ExportTraceServiceRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.resourceSpans != null && message.resourceSpans.length)
                                for (let i = 0; i < message.resourceSpans.length; ++i)
                                    $root.opentelemetry.proto.trace.v1.ResourceSpans.encode(message.resourceSpans[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified ExportTraceServiceRequest message, length delimited. Does not implicitly {@link opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                         * @static
                         * @param {opentelemetry.proto.collector.trace.v1.IExportTraceServiceRequest} message ExportTraceServiceRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ExportTraceServiceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an ExportTraceServiceRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest} ExportTraceServiceRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ExportTraceServiceRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.resourceSpans && message.resourceSpans.length))
                                            message.resourceSpans = [];
                                        message.resourceSpans.push($root.opentelemetry.proto.trace.v1.ResourceSpans.decode(reader, reader.uint32()));
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an ExportTraceServiceRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest} ExportTraceServiceRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ExportTraceServiceRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an ExportTraceServiceRequest message.
                         * @function verify
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ExportTraceServiceRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.resourceSpans != null && message.hasOwnProperty("resourceSpans")) {
                                if (!Array.isArray(message.resourceSpans))
                                    return "resourceSpans: array expected";
                                for (let i = 0; i < message.resourceSpans.length; ++i) {
                                    let error = $root.opentelemetry.proto.trace.v1.ResourceSpans.verify(message.resourceSpans[i]);
                                    if (error)
                                        return "resourceSpans." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates an ExportTraceServiceRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest} ExportTraceServiceRequest
                         */
                        ExportTraceServiceRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest)
                                return object;
                            let message = new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest();
                            if (object.resourceSpans) {
                                if (!Array.isArray(object.resourceSpans))
                                    throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: array expected");
                                message.resourceSpans = [];
                                for (let i = 0; i < object.resourceSpans.length; ++i) {
                                    if (typeof object.resourceSpans[i] !== "object")
                                        throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: object expected");
                                    message.resourceSpans[i] = $root.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(object.resourceSpans[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from an ExportTraceServiceRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                         * @static
                         * @param {opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest} message ExportTraceServiceRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ExportTraceServiceRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.arrays || options.defaults)
                                object.resourceSpans = [];
                            if (message.resourceSpans && message.resourceSpans.length) {
                                object.resourceSpans = [];
                                for (let j = 0; j < message.resourceSpans.length; ++j)
                                    object.resourceSpans[j] = $root.opentelemetry.proto.trace.v1.ResourceSpans.toObject(message.resourceSpans[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this ExportTraceServiceRequest to JSON.
                         * @function toJSON
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ExportTraceServiceRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ExportTraceServiceRequest
                         * @function getTypeUrl
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ExportTraceServiceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest";
                        };

                        return ExportTraceServiceRequest;
                    })();

                    v1.ExportTraceServiceResponse = (function() {

                        /**
                         * Properties of an ExportTraceServiceResponse.
                         * @memberof opentelemetry.proto.collector.trace.v1
                         * @interface IExportTraceServiceResponse
                         */

                        /**
                         * Constructs a new ExportTraceServiceResponse.
                         * @memberof opentelemetry.proto.collector.trace.v1
                         * @classdesc Represents an ExportTraceServiceResponse.
                         * @implements IExportTraceServiceResponse
                         * @constructor
                         * @param {opentelemetry.proto.collector.trace.v1.IExportTraceServiceResponse=} [properties] Properties to set
                         */
                        function ExportTraceServiceResponse(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Creates a new ExportTraceServiceResponse instance using the specified properties.
                         * @function create
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse
                         * @static
                         * @param {opentelemetry.proto.collector.trace.v1.IExportTraceServiceResponse=} [properties] Properties to set
                         * @returns {opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse} ExportTraceServiceResponse instance
                         */
                        ExportTraceServiceResponse.create = function create(properties) {
                            return new ExportTraceServiceResponse(properties);
                        };

                        /**
                         * Encodes the specified ExportTraceServiceResponse message. Does not implicitly {@link opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.verify|verify} messages.
                         * @function encode
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse
                         * @static
                         * @param {opentelemetry.proto.collector.trace.v1.IExportTraceServiceResponse} message ExportTraceServiceResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ExportTraceServiceResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Encodes the specified ExportTraceServiceResponse message, length delimited. Does not implicitly {@link opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse
                         * @static
                         * @param {opentelemetry.proto.collector.trace.v1.IExportTraceServiceResponse} message ExportTraceServiceResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ExportTraceServiceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an ExportTraceServiceResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse} ExportTraceServiceResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ExportTraceServiceResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an ExportTraceServiceResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse} ExportTraceServiceResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ExportTraceServiceResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an ExportTraceServiceResponse message.
                         * @function verify
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ExportTraceServiceResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            return null;
                        };

                        /**
                         * Creates an ExportTraceServiceResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse} ExportTraceServiceResponse
                         */
                        ExportTraceServiceResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse)
                                return object;
                            return new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse();
                        };

                        /**
                         * Creates a plain object from an ExportTraceServiceResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse
                         * @static
                         * @param {opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse} message ExportTraceServiceResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ExportTraceServiceResponse.toObject = function toObject() {
                            return {};
                        };

                        /**
                         * Converts this ExportTraceServiceResponse to JSON.
                         * @function toJSON
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ExportTraceServiceResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ExportTraceServiceResponse
                         * @function getTypeUrl
                         * @memberof opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ExportTraceServiceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse";
                        };

                        return ExportTraceServiceResponse;
                    })();

                    return v1;
                })();

                return trace;
            })();

            return collector;
        })();

        return proto;
    })();

    return opentelemetry;
})();

export { $root as default };
