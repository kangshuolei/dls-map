import {
  computed,
  createElementBlock,
  defineComponent,
  normalizeClass,
  onMounted,
  openBlock,
  reactive,
  ref,
  renderSlot
} from "./chunk-IYJFJSQY.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// ../node_modules/.pnpm/lodash.clonedeep@4.5.0/node_modules/lodash.clonedeep/index.js
var require_lodash = __commonJS({
  "../node_modules/.pnpm/lodash.clonedeep@4.5.0/node_modules/lodash.clonedeep/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reFlags = /\w*$/;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    function addMapEntry(map2, pair2) {
      map2.set(pair2[0], pair2[1]);
      return map2;
    }
    function addSetEntry(set, value) {
      set.add(value);
      return set;
    }
    function arrayEach(array2, iteratee) {
      var index2 = -1, length3 = array2 ? array2.length : 0;
      while (++index2 < length3) {
        if (iteratee(array2[index2], index2, array2) === false) {
          break;
        }
      }
      return array2;
    }
    function arrayPush(array2, values) {
      var index2 = -1, length3 = values.length, offset = array2.length;
      while (++index2 < length3) {
        array2[offset + index2] = values[index2];
      }
      return array2;
    }
    function arrayReduce(array2, iteratee, accumulator, initAccum) {
      var index2 = -1, length3 = array2 ? array2.length : 0;
      if (initAccum && length3) {
        accumulator = array2[++index2];
      }
      while (++index2 < length3) {
        accumulator = iteratee(accumulator, array2[index2], index2, array2);
      }
      return accumulator;
    }
    function baseTimes(n, iteratee) {
      var index2 = -1, result = Array(n);
      while (++index2 < n) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    function getValue(object2, key) {
      return object2 == null ? void 0 : object2[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function mapToArray(map2) {
      var index2 = -1, result = Array(map2.size);
      map2.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array = root.Uint8Array;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index2 = -1, length3 = entries ? entries.length : 0;
      this.clear();
      while (++index2 < length3) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty2.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index2 = -1, length3 = entries ? entries.length : 0;
      this.clear();
      while (++index2 < length3) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index2 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index2, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      return index2 < 0 ? void 0 : data[index2][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        data.push([key, value]);
      } else {
        data[index2][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index2 = -1, length3 = entries ? entries.length : 0;
      this.clear();
      while (++index2 < length3) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    function stackClear() {
      this.__data__ = new ListCache();
    }
    function stackDelete(key) {
      return this.__data__["delete"](key);
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache(pairs);
      }
      cache.set(key, value);
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length3 = result.length, skipIndexes = !!length3;
      for (var key in value) {
        if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length3)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignValue(object2, key, value) {
      var objValue = object2[key];
      if (!(hasOwnProperty2.call(object2, key) && eq(objValue, value)) || value === void 0 && !(key in object2)) {
        object2[key] = value;
      }
    }
    function assocIndexOf(array2, key) {
      var length3 = array2.length;
      while (length3--) {
        if (eq(array2[length3][0], key)) {
          return length3;
        }
      }
      return -1;
    }
    function baseAssign(object2, source) {
      return object2 && copyObject(source, keys(source), object2);
    }
    function baseClone(value, isDeep, isFull, customizer, key, object2, stack) {
      var result;
      if (customizer) {
        result = object2 ? customizer(value, key, object2, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject3(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag2 = getTag(value), isFunc = tag2 == funcTag || tag2 == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag2 == objectTag || tag2 == argsTag || isFunc && !object2) {
          if (isHostObject(value)) {
            return object2 ? value : {};
          }
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag2]) {
            return object2 ? value : {};
          }
          result = initCloneByTag(value, tag2, baseClone, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (!isArr) {
        var props = isFull ? getAllKeys(value) : keys(value);
      }
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
      });
      return result;
    }
    function baseCreate(proto) {
      return isObject3(proto) ? objectCreate(proto) : {};
    }
    function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
      var result = keysFunc(object2);
      return isArray(object2) ? result : arrayPush(result, symbolsFunc(object2));
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseIsNative(value) {
      if (!isObject3(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseKeys(object2) {
      if (!isPrototype(object2)) {
        return nativeKeys(object2);
      }
      var result = [];
      for (var key in Object(object2)) {
        if (hasOwnProperty2.call(object2, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function cloneBuffer(buffer3, isDeep) {
      if (isDeep) {
        return buffer3.slice();
      }
      var result = new buffer3.constructor(buffer3.length);
      buffer3.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    function cloneDataView(dataView, isDeep) {
      var buffer3 = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer3, dataView.byteOffset, dataView.byteLength);
    }
    function cloneMap(map2, isDeep, cloneFunc) {
      var array2 = isDeep ? cloneFunc(mapToArray(map2), true) : mapToArray(map2);
      return arrayReduce(array2, addMapEntry, new map2.constructor());
    }
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    function cloneSet(set, isDeep, cloneFunc) {
      var array2 = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
      return arrayReduce(array2, addSetEntry, new set.constructor());
    }
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer3 = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer3, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array2) {
      var index2 = -1, length3 = source.length;
      array2 || (array2 = Array(length3));
      while (++index2 < length3) {
        array2[index2] = source[index2];
      }
      return array2;
    }
    function copyObject(source, props, object2, customizer) {
      object2 || (object2 = {});
      var index2 = -1, length3 = props.length;
      while (++index2 < length3) {
        var key = props[index2];
        var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
        assignValue(object2, key, newValue === void 0 ? source[key] : newValue);
      }
      return object2;
    }
    function copySymbols(source, object2) {
      return copyObject(source, getSymbols(source), object2);
    }
    function getAllKeys(object2) {
      return baseGetAllKeys(object2, keys, getSymbols);
    }
    function getMapData(map2, key) {
      var data = map2.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object2, key) {
      var value = getValue(object2, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function initCloneArray(array2) {
      var length3 = array2.length, result = array2.constructor(length3);
      if (length3 && typeof array2[0] == "string" && hasOwnProperty2.call(array2, "index")) {
        result.index = array2.index;
        result.input = array2.input;
      }
      return result;
    }
    function initCloneObject(object2) {
      return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
    }
    function initCloneByTag(object2, tag2, cloneFunc, isDeep) {
      var Ctor = object2.constructor;
      switch (tag2) {
        case arrayBufferTag:
          return cloneArrayBuffer(object2);
        case boolTag:
        case dateTag:
          return new Ctor(+object2);
        case dataViewTag:
          return cloneDataView(object2, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object2, isDeep);
        case mapTag:
          return cloneMap(object2, isDeep, cloneFunc);
        case numberTag:
        case stringTag:
          return new Ctor(object2);
        case regexpTag:
          return cloneRegExp(object2);
        case setTag:
          return cloneSet(object2, isDeep, cloneFunc);
        case symbolTag:
          return cloneSymbol(object2);
      }
    }
    function isIndex(value, length3) {
      length3 = length3 == null ? MAX_SAFE_INTEGER : length3;
      return !!length3 && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length3);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function cloneDeep2(value) {
      return baseClone(value, true, true);
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty2.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction(value) {
      var tag2 = isObject3(value) ? objectToString.call(value) : "";
      return tag2 == funcTag || tag2 == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject3(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function keys(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = cloneDeep2;
  }
});

// ../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal3(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length3, i, keys;
        if (Array.isArray(a)) {
          length3 = a.length;
          if (length3 != b.length) return false;
          for (i = length3; i-- !== 0; )
            if (!equal3(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length3 = keys.length;
        if (length3 !== Object.keys(b).length) return false;
        for (i = length3; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length3; i-- !== 0; ) {
          var key = keys[i];
          if (!equal3(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// ../node_modules/.pnpm/@turf+jsts@2.7.1/node_modules/@turf/jsts/dist/jsts.min.js
var require_jsts_min = __commonJS({
  "../node_modules/.pnpm/@turf+jsts@2.7.1/node_modules/@turf/jsts/dist/jsts.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).jsts = e();
    }(exports, function() {
      "use strict";
      function t(t2, e3) {
        if (!(t2 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }
      function e(t2, e3) {
        for (var n2 = 0; n2 < e3.length; n2++) {
          var i2 = e3[n2];
          i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
        }
      }
      function n(t2, n2, i2) {
        return n2 && e(t2.prototype, n2), i2 && e(t2, i2), t2;
      }
      function i(t2, e3) {
        if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function");
        t2.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t2, writable: true, configurable: true } }), e3 && s(t2, e3);
      }
      function r(t2) {
        return r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        }, r(t2);
      }
      function s(t2, e3) {
        return s = Object.setPrototypeOf || function(t3, e4) {
          return t3.__proto__ = e4, t3;
        }, s(t2, e3);
      }
      function a() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t2) {
          return false;
        }
      }
      function o(t2, e3, n2) {
        return o = a() ? Reflect.construct : function(t3, e4, n3) {
          var i2 = [null];
          i2.push.apply(i2, e4);
          var r2 = new (Function.bind.apply(t3, i2))();
          return n3 && s(r2, n3.prototype), r2;
        }, o.apply(null, arguments);
      }
      function u4(t2) {
        var e3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
        return u4 = function(t3) {
          if (null === t3 || (n2 = t3, -1 === Function.toString.call(n2).indexOf("[native code]"))) return t3;
          var n2;
          if ("function" != typeof t3) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== e3) {
            if (e3.has(t3)) return e3.get(t3);
            e3.set(t3, i2);
          }
          function i2() {
            return o(t3, arguments, r(this).constructor);
          }
          return i2.prototype = Object.create(t3.prototype, { constructor: { value: i2, enumerable: false, writable: true, configurable: true } }), s(i2, t3);
        }, u4(t2);
      }
      function l(t2) {
        if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      }
      function h(t2, e3) {
        if (e3 && ("object" == typeof e3 || "function" == typeof e3)) return e3;
        if (void 0 !== e3) throw new TypeError("Derived constructors may only return object or undefined");
        return l(t2);
      }
      function c(t2) {
        var e3 = a();
        return function() {
          var n2, i2 = r(t2);
          if (e3) {
            var s2 = r(this).constructor;
            n2 = Reflect.construct(i2, arguments, s2);
          } else n2 = i2.apply(this, arguments);
          return h(this, n2);
        };
      }
      function f(t2, e3, n2) {
        return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t3, e4, n3) {
          var i2 = function(t4, e6) {
            for (; !Object.prototype.hasOwnProperty.call(t4, e6) && null !== (t4 = r(t4)); ) ;
            return t4;
          }(t3, e4);
          if (i2) {
            var s2 = Object.getOwnPropertyDescriptor(i2, e4);
            return s2.get ? s2.get.call(n3) : s2.value;
          }
        }, f(t2, e3, n2 || t2);
      }
      function v2(t2) {
        return function(t3) {
          if (Array.isArray(t3)) return y2(t3);
        }(t2) || function(t3) {
          if ("undefined" != typeof Symbol && null != t3[Symbol.iterator] || null != t3["@@iterator"]) return Array.from(t3);
        }(t2) || g(t2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function g(t2, e3) {
        if (t2) {
          if ("string" == typeof t2) return y2(t2, e3);
          var n2 = Object.prototype.toString.call(t2).slice(8, -1);
          return "Object" === n2 && t2.constructor && (n2 = t2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? y2(t2, e3) : void 0;
        }
      }
      function y2(t2, e3) {
        (null == e3 || e3 > t2.length) && (e3 = t2.length);
        for (var n2 = 0, i2 = new Array(e3); n2 < e3; n2++) i2[n2] = t2[n2];
        return i2;
      }
      function d(t2, e3) {
        var n2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
        if (!n2) {
          if (Array.isArray(t2) || (n2 = g(t2)) || e3 && t2 && "number" == typeof t2.length) {
            n2 && (t2 = n2);
            var i2 = 0, r2 = function() {
            };
            return { s: r2, n: function() {
              return i2 >= t2.length ? { done: true } : { done: false, value: t2[i2++] };
            }, e: function(t3) {
              throw t3;
            }, f: r2 };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var s2, a2 = true, o2 = false;
        return { s: function() {
          n2 = n2.call(t2);
        }, n: function() {
          var t3 = n2.next();
          return a2 = t3.done, t3;
        }, e: function(t3) {
          o2 = true, s2 = t3;
        }, f: function() {
          try {
            a2 || null == n2.return || n2.return();
          } finally {
            if (o2) throw s2;
          }
        } };
      }
      var _ = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getEndCapStyle", value: function() {
          return this._endCapStyle;
        } }, { key: "isSingleSided", value: function() {
          return this._isSingleSided;
        } }, { key: "setQuadrantSegments", value: function(t2) {
          this._quadrantSegments = t2, 0 === this._quadrantSegments && (this._joinStyle = e3.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = e3.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t2 <= 0 && (this._quadrantSegments = 1), this._joinStyle !== e3.JOIN_ROUND && (this._quadrantSegments = e3.DEFAULT_QUADRANT_SEGMENTS);
        } }, { key: "getJoinStyle", value: function() {
          return this._joinStyle;
        } }, { key: "setJoinStyle", value: function(t2) {
          this._joinStyle = t2;
        } }, { key: "setSimplifyFactor", value: function(t2) {
          this._simplifyFactor = t2 < 0 ? 0 : t2;
        } }, { key: "getSimplifyFactor", value: function() {
          return this._simplifyFactor;
        } }, { key: "getQuadrantSegments", value: function() {
          return this._quadrantSegments;
        } }, { key: "setEndCapStyle", value: function(t2) {
          this._endCapStyle = t2;
        } }, { key: "getMitreLimit", value: function() {
          return this._mitreLimit;
        } }, { key: "setMitreLimit", value: function(t2) {
          this._mitreLimit = t2;
        } }, { key: "setSingleSided", value: function(t2) {
          this._isSingleSided = t2;
        } }], [{ key: "constructor_", value: function() {
          if (this._quadrantSegments = e3.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = e3.CAP_ROUND, this._joinStyle = e3.JOIN_ROUND, this._mitreLimit = e3.DEFAULT_MITRE_LIMIT, this._isSingleSided = false, this._simplifyFactor = e3.DEFAULT_SIMPLIFY_FACTOR, 0 === arguments.length) ;
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            this.setQuadrantSegments(t2);
          } else if (2 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1];
            this.setQuadrantSegments(n2), this.setEndCapStyle(i2);
          } else if (4 === arguments.length) {
            var r2 = arguments[0], s2 = arguments[1], a2 = arguments[2], o2 = arguments[3];
            this.setQuadrantSegments(r2), this.setEndCapStyle(s2), this.setJoinStyle(a2), this.setMitreLimit(o2);
          }
        } }, { key: "bufferDistanceError", value: function(t2) {
          var e4 = Math.PI / 2 / t2;
          return 1 - Math.cos(e4 / 2);
        } }]), e3;
      }();
      _.CAP_ROUND = 1, _.CAP_FLAT = 2, _.CAP_SQUARE = 3, _.JOIN_ROUND = 1, _.JOIN_MITRE = 2, _.JOIN_BEVEL = 3, _.DEFAULT_QUADRANT_SEGMENTS = 8, _.DEFAULT_MITRE_LIMIT = 5, _.DEFAULT_SIMPLIFY_FACTOR = 0.01;
      var p = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2(e4) {
          var n2;
          return t(this, s2), (n2 = r2.call(this, e4)).name = Object.keys({ Exception: s2 })[0], n2;
        }
        return n(s2, [{ key: "toString", value: function() {
          return this.message;
        } }]), s2;
      }(u4(Error)), m = function(e3) {
        i(r2, e3);
        var n2 = c(r2);
        function r2(e4) {
          var i2;
          return t(this, r2), (i2 = n2.call(this, e4)).name = Object.keys({ IllegalArgumentException: r2 })[0], i2;
        }
        return r2;
      }(p), k = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "filter", value: function(t2) {
        } }]), e3;
      }();
      function x2() {
      }
      function I() {
      }
      function E() {
      }
      var N, T, S, L, C, R, w, O, b = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "equalsWithTolerance", value: function(t2, e4, n2) {
          return Math.abs(t2 - e4) <= n2;
        } }]), e3;
      }(), M = function() {
        function e3(n2, i2) {
          t(this, e3), this.low = i2 || 0, this.high = n2 || 0;
        }
        return n(e3, null, [{ key: "toBinaryString", value: function(t2) {
          var e4, n2 = "";
          for (e4 = 2147483648; e4 > 0; e4 >>>= 1) n2 += (t2.high & e4) === e4 ? "1" : "0";
          for (e4 = 2147483648; e4 > 0; e4 >>>= 1) n2 += (t2.low & e4) === e4 ? "1" : "0";
          return n2;
        } }]), e3;
      }();
      function A() {
      }
      function P() {
      }
      A.NaN = NaN, A.isNaN = function(t2) {
        return Number.isNaN(t2);
      }, A.isInfinite = function(t2) {
        return !Number.isFinite(t2);
      }, A.MAX_VALUE = Number.MAX_VALUE, A.POSITIVE_INFINITY = Number.POSITIVE_INFINITY, A.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, "function" == typeof Float64Array && "function" == typeof Int32Array ? (R = 2146435072, w = new Float64Array(1), O = new Int32Array(w.buffer), A.doubleToLongBits = function(t2) {
        w[0] = t2;
        var e3 = 0 | O[0], n2 = 0 | O[1];
        return (n2 & R) === R && 0 != (1048575 & n2) && 0 !== e3 && (e3 = 0, n2 = 2146959360), new M(n2, e3);
      }, A.longBitsToDouble = function(t2) {
        return O[0] = t2.low, O[1] = t2.high, w[0];
      }) : (N = 1023, T = Math.log2, S = Math.floor, L = Math.pow, C = function() {
        for (var t2 = 53; t2 > 0; t2--) {
          var e3 = L(2, t2) - 1;
          if (S(T(e3)) + 1 === t2) return e3;
        }
        return 0;
      }(), A.doubleToLongBits = function(t2) {
        var e3, n2, i2, r2, s2, a2, o2, u5, l2;
        if (t2 < 0 || 1 / t2 === Number.NEGATIVE_INFINITY ? (a2 = 1 << 31, t2 = -t2) : a2 = 0, 0 === t2) return new M(u5 = a2, l2 = 0);
        if (t2 === 1 / 0) return new M(u5 = 2146435072 | a2, l2 = 0);
        if (t2 != t2) return new M(u5 = 2146959360, l2 = 0);
        if (r2 = 0, l2 = 0, (e3 = S(t2)) > 1) if (e3 <= C) (r2 = S(T(e3))) <= 20 ? (l2 = 0, u5 = e3 << 20 - r2 & 1048575) : (l2 = e3 % (n2 = L(2, i2 = r2 - 20)) << 32 - i2, u5 = e3 / n2 & 1048575);
        else for (i2 = e3, l2 = 0; 0 !== (i2 = S(n2 = i2 / 2)); ) r2++, l2 >>>= 1, l2 |= (1 & u5) << 31, u5 >>>= 1, n2 !== i2 && (u5 |= 524288);
        if (o2 = r2 + N, s2 = 0 === e3, e3 = t2 - e3, r2 < 52 && 0 !== e3) for (i2 = 0; ; ) {
          if ((n2 = 2 * e3) >= 1 ? (e3 = n2 - 1, s2 ? (o2--, s2 = false) : (i2 <<= 1, i2 |= 1, r2++)) : (e3 = n2, s2 ? 0 == --o2 && (r2++, s2 = false) : (i2 <<= 1, r2++)), 20 === r2) u5 |= i2, i2 = 0;
          else if (52 === r2) {
            l2 |= i2;
            break;
          }
          if (1 === n2) {
            r2 < 20 ? u5 |= i2 << 20 - r2 : r2 < 52 && (l2 |= i2 << 52 - r2);
            break;
          }
        }
        return u5 |= o2 << 20, new M(u5 |= a2, l2);
      }, A.longBitsToDouble = function(t2) {
        var e3, n2, i2, r2, s2 = t2.high, a2 = t2.low, o2 = s2 & 1 << 31 ? -1 : 1;
        for (i2 = ((2146435072 & s2) >> 20) - N, r2 = 0, n2 = 1 << 19, e3 = 1; e3 <= 20; e3++) s2 & n2 && (r2 += L(2, -e3)), n2 >>>= 1;
        for (n2 = 1 << 31, e3 = 21; e3 <= 52; e3++) a2 & n2 && (r2 += L(2, -e3)), n2 >>>= 1;
        if (-1023 === i2) {
          if (0 === r2) return 0 * o2;
          i2 = -1022;
        } else {
          if (1024 === i2) return 0 === r2 ? o2 / 0 : NaN;
          r2 += 1;
        }
        return o2 * r2 * L(2, i2);
      });
      var D2 = function(e3) {
        i(r2, e3);
        var n2 = c(r2);
        function r2(e4) {
          var i2;
          return t(this, r2), (i2 = n2.call(this, e4)).name = Object.keys({ RuntimeException: r2 })[0], i2;
        }
        return r2;
      }(p), F = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), e4 = r2.call(this), s2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(s2, null, [{ key: "constructor_", value: function() {
          if (0 === arguments.length) D2.constructor_.call(this);
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            D2.constructor_.call(this, t2);
          }
        } }]), s2;
      }(D2), G = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "shouldNeverReachHere", value: function() {
          if (0 === arguments.length) e3.shouldNeverReachHere(null);
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            throw new F("Should never reach here" + (null !== t2 ? ": " + t2 : ""));
          }
        } }, { key: "isTrue", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            e3.isTrue(t2, null);
          } else if (2 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1];
            if (!n2) throw null === i2 ? new F() : new F(i2);
          }
        } }, { key: "equals", value: function() {
          if (2 === arguments.length) {
            var t2 = arguments[0], n2 = arguments[1];
            e3.equals(t2, n2, null);
          } else if (3 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1], s2 = arguments[2];
            if (!r2.equals(i2)) throw new F("Expected " + i2 + " but encountered " + r2 + (null !== s2 ? ": " + s2 : ""));
          }
        } }]), e3;
      }(), q = new ArrayBuffer(8), Y = new Float64Array(q), z = new Int32Array(q), X = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getM", value: function() {
          return A.NaN;
        } }, { key: "setOrdinate", value: function(t2, n2) {
          switch (t2) {
            case e3.X:
              this.x = n2;
              break;
            case e3.Y:
              this.y = n2;
              break;
            case e3.Z:
              this.setZ(n2);
              break;
            default:
              throw new m("Invalid ordinate index: " + t2);
          }
        } }, { key: "equals2D", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return this.x === t2.x && this.y === t2.y;
          }
          if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            return !!b.equalsWithTolerance(this.x, e4.x, n2) && !!b.equalsWithTolerance(this.y, e4.y, n2);
          }
        } }, { key: "setM", value: function(t2) {
          throw new m("Invalid ordinate index: " + e3.M);
        } }, { key: "getZ", value: function() {
          return this.z;
        } }, { key: "getOrdinate", value: function(t2) {
          switch (t2) {
            case e3.X:
              return this.x;
            case e3.Y:
              return this.y;
            case e3.Z:
              return this.getZ();
          }
          throw new m("Invalid ordinate index: " + t2);
        } }, { key: "equals3D", value: function(t2) {
          return this.x === t2.x && this.y === t2.y && (this.getZ() === t2.getZ() || A.isNaN(this.getZ()) && A.isNaN(t2.getZ()));
        } }, { key: "equals", value: function(t2) {
          return t2 instanceof e3 && this.equals2D(t2);
        } }, { key: "equalInZ", value: function(t2, e4) {
          return b.equalsWithTolerance(this.getZ(), t2.getZ(), e4);
        } }, { key: "setX", value: function(t2) {
          this.x = t2;
        } }, { key: "compareTo", value: function(t2) {
          var e4 = t2;
          return this.x < e4.x ? -1 : this.x > e4.x ? 1 : this.y < e4.y ? -1 : this.y > e4.y ? 1 : 0;
        } }, { key: "getX", value: function() {
          return this.x;
        } }, { key: "setZ", value: function(t2) {
          this.z = t2;
        } }, { key: "clone", value: function() {
          try {
            return null;
          } catch (t2) {
            if (t2 instanceof CloneNotSupportedException) return G.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
            throw t2;
          }
        } }, { key: "copy", value: function() {
          return new e3(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ", " + this.getZ() + ")";
        } }, { key: "distance3D", value: function(t2) {
          var e4 = this.x - t2.x, n2 = this.y - t2.y, i2 = this.getZ() - t2.getZ();
          return Math.sqrt(e4 * e4 + n2 * n2 + i2 * i2);
        } }, { key: "getY", value: function() {
          return this.y;
        } }, { key: "setY", value: function(t2) {
          this.y = t2;
        } }, { key: "distance", value: function(t2) {
          var e4 = this.x - t2.x, n2 = this.y - t2.y;
          return Math.sqrt(e4 * e4 + n2 * n2);
        } }, { key: "hashCode", value: function() {
          var t2 = 17;
          return t2 = 37 * (t2 = 37 * t2 + e3.hashCode(this.x)) + e3.hashCode(this.y);
        } }, { key: "setCoordinate", value: function(t2) {
          this.x = t2.x, this.y = t2.y, this.z = t2.getZ();
        } }, { key: "interfaces_", get: function() {
          return [x2, I, E];
        } }], [{ key: "constructor_", value: function() {
          if (this.x = null, this.y = null, this.z = null, 0 === arguments.length) e3.constructor_.call(this, 0, 0);
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            e3.constructor_.call(this, t2.x, t2.y, t2.getZ());
          } else if (2 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1];
            e3.constructor_.call(this, n2, i2, e3.NULL_ORDINATE);
          } else if (3 === arguments.length) {
            var r2 = arguments[0], s2 = arguments[1], a2 = arguments[2];
            this.x = r2, this.y = s2, this.z = a2;
          }
        } }, { key: "hashCode", value: function(t2) {
          return Y[0] = t2, z[0] ^ z[1];
        } }]), e3;
      }(), B2 = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "compare", value: function(t2, n2) {
          var i2 = e3.compare(t2.x, n2.x);
          if (0 !== i2) return i2;
          var r2 = e3.compare(t2.y, n2.y);
          return 0 !== r2 ? r2 : this._dimensionsToTest <= 2 ? 0 : e3.compare(t2.getZ(), n2.getZ());
        } }, { key: "interfaces_", get: function() {
          return [P];
        } }], [{ key: "constructor_", value: function() {
          if (this._dimensionsToTest = 2, 0 === arguments.length) e3.constructor_.call(this, 2);
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            if (2 !== t2 && 3 !== t2) throw new m("only 2 or 3 dimensions may be specified");
            this._dimensionsToTest = t2;
          }
        } }, { key: "compare", value: function(t2, e4) {
          return t2 < e4 ? -1 : t2 > e4 ? 1 : A.isNaN(t2) ? A.isNaN(e4) ? 0 : -1 : A.isNaN(e4) ? 1 : 0;
        } }]), e3;
      }();
      X.DimensionalComparator = B2, X.NULL_ORDINATE = A.NaN, X.X = 0, X.Y = 1, X.Z = 2, X.M = 3;
      var U = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getArea", value: function() {
          return this.getWidth() * this.getHeight();
        } }, { key: "equals", value: function(t2) {
          if (!(t2 instanceof e3)) return false;
          var n2 = t2;
          return this.isNull() ? n2.isNull() : this._maxx === n2.getMaxX() && this._maxy === n2.getMaxY() && this._minx === n2.getMinX() && this._miny === n2.getMinY();
        } }, { key: "intersection", value: function(t2) {
          if (this.isNull() || t2.isNull() || !this.intersects(t2)) return new e3();
          var n2 = this._minx > t2._minx ? this._minx : t2._minx, i2 = this._miny > t2._miny ? this._miny : t2._miny;
          return new e3(n2, this._maxx < t2._maxx ? this._maxx : t2._maxx, i2, this._maxy < t2._maxy ? this._maxy : t2._maxy);
        } }, { key: "isNull", value: function() {
          return this._maxx < this._minx;
        } }, { key: "getMaxX", value: function() {
          return this._maxx;
        } }, { key: "covers", value: function() {
          if (1 === arguments.length) {
            if (arguments[0] instanceof X) {
              var t2 = arguments[0];
              return this.covers(t2.x, t2.y);
            }
            if (arguments[0] instanceof e3) {
              var n2 = arguments[0];
              return !this.isNull() && !n2.isNull() && (n2.getMinX() >= this._minx && n2.getMaxX() <= this._maxx && n2.getMinY() >= this._miny && n2.getMaxY() <= this._maxy);
            }
          } else if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1];
            return !this.isNull() && (i2 >= this._minx && i2 <= this._maxx && r2 >= this._miny && r2 <= this._maxy);
          }
        } }, { key: "intersects", value: function() {
          if (1 === arguments.length) {
            if (arguments[0] instanceof e3) {
              var t2 = arguments[0];
              return !this.isNull() && !t2.isNull() && !(t2._minx > this._maxx || t2._maxx < this._minx || t2._miny > this._maxy || t2._maxy < this._miny);
            }
            if (arguments[0] instanceof X) {
              var n2 = arguments[0];
              return this.intersects(n2.x, n2.y);
            }
          } else if (2 === arguments.length) {
            if (arguments[0] instanceof X && arguments[1] instanceof X) {
              var i2 = arguments[0], r2 = arguments[1];
              if (this.isNull()) return false;
              var s2 = i2.x < r2.x ? i2.x : r2.x;
              if (s2 > this._maxx) return false;
              var a2 = i2.x > r2.x ? i2.x : r2.x;
              if (a2 < this._minx) return false;
              var o2 = i2.y < r2.y ? i2.y : r2.y;
              if (o2 > this._maxy) return false;
              var u5 = i2.y > r2.y ? i2.y : r2.y;
              return !(u5 < this._miny);
            }
            if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
              var l2 = arguments[0], h2 = arguments[1];
              return !this.isNull() && !(l2 > this._maxx || l2 < this._minx || h2 > this._maxy || h2 < this._miny);
            }
          }
        } }, { key: "getMinY", value: function() {
          return this._miny;
        } }, { key: "getDiameter", value: function() {
          if (this.isNull()) return 0;
          var t2 = this.getWidth(), e4 = this.getHeight();
          return Math.sqrt(t2 * t2 + e4 * e4);
        } }, { key: "getMinX", value: function() {
          return this._minx;
        } }, { key: "expandToInclude", value: function() {
          if (1 === arguments.length) {
            if (arguments[0] instanceof X) {
              var t2 = arguments[0];
              this.expandToInclude(t2.x, t2.y);
            } else if (arguments[0] instanceof e3) {
              var n2 = arguments[0];
              if (n2.isNull()) return null;
              this.isNull() ? (this._minx = n2.getMinX(), this._maxx = n2.getMaxX(), this._miny = n2.getMinY(), this._maxy = n2.getMaxY()) : (n2._minx < this._minx && (this._minx = n2._minx), n2._maxx > this._maxx && (this._maxx = n2._maxx), n2._miny < this._miny && (this._miny = n2._miny), n2._maxy > this._maxy && (this._maxy = n2._maxy));
            }
          } else if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1];
            this.isNull() ? (this._minx = i2, this._maxx = i2, this._miny = r2, this._maxy = r2) : (i2 < this._minx && (this._minx = i2), i2 > this._maxx && (this._maxx = i2), r2 < this._miny && (this._miny = r2), r2 > this._maxy && (this._maxy = r2));
          }
        } }, { key: "minExtent", value: function() {
          if (this.isNull()) return 0;
          var t2 = this.getWidth(), e4 = this.getHeight();
          return t2 < e4 ? t2 : e4;
        } }, { key: "getWidth", value: function() {
          return this.isNull() ? 0 : this._maxx - this._minx;
        } }, { key: "compareTo", value: function(t2) {
          var e4 = t2;
          return this.isNull() ? e4.isNull() ? 0 : -1 : e4.isNull() ? 1 : this._minx < e4._minx ? -1 : this._minx > e4._minx ? 1 : this._miny < e4._miny ? -1 : this._miny > e4._miny ? 1 : this._maxx < e4._maxx ? -1 : this._maxx > e4._maxx ? 1 : this._maxy < e4._maxy ? -1 : this._maxy > e4._maxy ? 1 : 0;
        } }, { key: "translate", value: function(t2, e4) {
          if (this.isNull()) return null;
          this.init(this.getMinX() + t2, this.getMaxX() + t2, this.getMinY() + e4, this.getMaxY() + e4);
        } }, { key: "copy", value: function() {
          return new e3(this);
        } }, { key: "toString", value: function() {
          return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
        } }, { key: "setToNull", value: function() {
          this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
        } }, { key: "disjoint", value: function(t2) {
          return !(!this.isNull() && !t2.isNull()) || (t2._minx > this._maxx || t2._maxx < this._minx || t2._miny > this._maxy || t2._maxy < this._miny);
        } }, { key: "getHeight", value: function() {
          return this.isNull() ? 0 : this._maxy - this._miny;
        } }, { key: "maxExtent", value: function() {
          if (this.isNull()) return 0;
          var t2 = this.getWidth(), e4 = this.getHeight();
          return t2 > e4 ? t2 : e4;
        } }, { key: "expandBy", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            this.expandBy(t2, t2);
          } else if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            if (this.isNull()) return null;
            this._minx -= e4, this._maxx += e4, this._miny -= n2, this._maxy += n2, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
          }
        } }, { key: "contains", value: function() {
          if (1 === arguments.length) {
            if (arguments[0] instanceof e3) {
              var t2 = arguments[0];
              return this.covers(t2);
            }
            if (arguments[0] instanceof X) {
              var n2 = arguments[0];
              return this.covers(n2);
            }
          } else if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1];
            return this.covers(i2, r2);
          }
        } }, { key: "centre", value: function() {
          return this.isNull() ? null : new X((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
        } }, { key: "init", value: function() {
          if (0 === arguments.length) this.setToNull();
          else if (1 === arguments.length) {
            if (arguments[0] instanceof X) {
              var t2 = arguments[0];
              this.init(t2.x, t2.x, t2.y, t2.y);
            } else if (arguments[0] instanceof e3) {
              var n2 = arguments[0];
              this._minx = n2._minx, this._maxx = n2._maxx, this._miny = n2._miny, this._maxy = n2._maxy;
            }
          } else if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1];
            this.init(i2.x, r2.x, i2.y, r2.y);
          } else if (4 === arguments.length) {
            var s2 = arguments[0], a2 = arguments[1], o2 = arguments[2], u5 = arguments[3];
            s2 < a2 ? (this._minx = s2, this._maxx = a2) : (this._minx = a2, this._maxx = s2), o2 < u5 ? (this._miny = o2, this._maxy = u5) : (this._miny = u5, this._maxy = o2);
          }
        } }, { key: "getMaxY", value: function() {
          return this._maxy;
        } }, { key: "distance", value: function(t2) {
          if (this.intersects(t2)) return 0;
          var e4 = 0;
          this._maxx < t2._minx ? e4 = t2._minx - this._maxx : this._minx > t2._maxx && (e4 = this._minx - t2._maxx);
          var n2 = 0;
          return this._maxy < t2._miny ? n2 = t2._miny - this._maxy : this._miny > t2._maxy && (n2 = this._miny - t2._maxy), 0 === e4 ? n2 : 0 === n2 ? e4 : Math.sqrt(e4 * e4 + n2 * n2);
        } }, { key: "hashCode", value: function() {
          var t2 = 17;
          return t2 = 37 * (t2 = 37 * (t2 = 37 * (t2 = 37 * t2 + X.hashCode(this._minx)) + X.hashCode(this._maxx)) + X.hashCode(this._miny)) + X.hashCode(this._maxy);
        } }, { key: "interfaces_", get: function() {
          return [x2, E];
        } }], [{ key: "constructor_", value: function() {
          if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, 0 === arguments.length) this.init();
          else if (1 === arguments.length) {
            if (arguments[0] instanceof X) {
              var t2 = arguments[0];
              this.init(t2.x, t2.x, t2.y, t2.y);
            } else if (arguments[0] instanceof e3) {
              var n2 = arguments[0];
              this.init(n2);
            }
          } else if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1];
            this.init(i2.x, r2.x, i2.y, r2.y);
          } else if (4 === arguments.length) {
            var s2 = arguments[0], a2 = arguments[1], o2 = arguments[2], u5 = arguments[3];
            this.init(s2, a2, o2, u5);
          }
        } }, { key: "intersects", value: function() {
          if (3 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2];
            return n2.x >= (t2.x < e4.x ? t2.x : e4.x) && n2.x <= (t2.x > e4.x ? t2.x : e4.x) && n2.y >= (t2.y < e4.y ? t2.y : e4.y) && n2.y <= (t2.y > e4.y ? t2.y : e4.y);
          }
          if (4 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1], s2 = arguments[2], a2 = arguments[3], o2 = Math.min(s2.x, a2.x), u5 = Math.max(s2.x, a2.x), l2 = Math.min(i2.x, r2.x), h2 = Math.max(i2.x, r2.x);
            return !(l2 > u5) && (!(h2 < o2) && (o2 = Math.min(s2.y, a2.y), u5 = Math.max(s2.y, a2.y), l2 = Math.min(i2.y, r2.y), h2 = Math.max(i2.y, r2.y), !(l2 > u5) && !(h2 < o2)));
          }
        } }]), e3;
      }(), V = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "isGeometryCollection", value: function() {
          return this.getTypeCode() === e3.TYPECODE_GEOMETRYCOLLECTION;
        } }, { key: "getFactory", value: function() {
          return this._factory;
        } }, { key: "getGeometryN", value: function(t2) {
          return this;
        } }, { key: "getArea", value: function() {
          return 0;
        } }, { key: "isRectangle", value: function() {
          return false;
        } }, { key: "equalsExact", value: function(t2) {
          return this === t2 || this.equalsExact(t2, 0);
        } }, { key: "geometryChanged", value: function() {
          this.apply(e3.geometryChangedFilter);
        } }, { key: "geometryChangedAction", value: function() {
          this._envelope = null;
        } }, { key: "equalsNorm", value: function(t2) {
          return null !== t2 && this.norm().equalsExact(t2.norm());
        } }, { key: "getLength", value: function() {
          return 0;
        } }, { key: "getNumGeometries", value: function() {
          return 1;
        } }, { key: "compareTo", value: function() {
          var t2;
          if (1 === arguments.length) {
            var e4 = arguments[0];
            return t2 = e4, this.getTypeCode() !== t2.getTypeCode() ? this.getTypeCode() - t2.getTypeCode() : this.isEmpty() && t2.isEmpty() ? 0 : this.isEmpty() ? -1 : t2.isEmpty() ? 1 : this.compareToSameClass(e4);
          }
          if (2 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1];
            return t2 = n2, this.getTypeCode() !== t2.getTypeCode() ? this.getTypeCode() - t2.getTypeCode() : this.isEmpty() && t2.isEmpty() ? 0 : this.isEmpty() ? -1 : t2.isEmpty() ? 1 : this.compareToSameClass(n2, i2);
          }
        } }, { key: "getUserData", value: function() {
          return this._userData;
        } }, { key: "getSRID", value: function() {
          return this._SRID;
        } }, { key: "getEnvelope", value: function() {
          return this.getFactory().toGeometry(this.getEnvelopeInternal());
        } }, { key: "checkNotGeometryCollection", value: function(t2) {
          if (t2.getTypeCode() === e3.TYPECODE_GEOMETRYCOLLECTION) throw new m("This method does not support GeometryCollection arguments");
        } }, { key: "equal", value: function(t2, e4, n2) {
          return 0 === n2 ? t2.equals(e4) : t2.distance(e4) <= n2;
        } }, { key: "norm", value: function() {
          var t2 = this.copy();
          return t2.normalize(), t2;
        } }, { key: "reverse", value: function() {
          var t2 = this.reverseInternal();
          return null != this.envelope && (t2.envelope = this.envelope.copy()), t2.setSRID(this.getSRID()), t2;
        } }, { key: "copy", value: function() {
          var t2 = this.copyInternal();
          return t2.envelope = null == this._envelope ? null : this._envelope.copy(), t2._SRID = this._SRID, t2._userData = this._userData, t2;
        } }, { key: "getPrecisionModel", value: function() {
          return this._factory.getPrecisionModel();
        } }, { key: "getEnvelopeInternal", value: function() {
          return null === this._envelope && (this._envelope = this.computeEnvelopeInternal()), new U(this._envelope);
        } }, { key: "setSRID", value: function(t2) {
          this._SRID = t2;
        } }, { key: "setUserData", value: function(t2) {
          this._userData = t2;
        } }, { key: "compare", value: function(t2, e4) {
          for (var n2 = t2.iterator(), i2 = e4.iterator(); n2.hasNext() && i2.hasNext(); ) {
            var r2 = n2.next(), s2 = i2.next(), a2 = r2.compareTo(s2);
            if (0 !== a2) return a2;
          }
          return n2.hasNext() ? 1 : i2.hasNext() ? -1 : 0;
        } }, { key: "hashCode", value: function() {
          return this.getEnvelopeInternal().hashCode();
        } }, { key: "isEquivalentClass", value: function(t2) {
          return this.getClass() === t2.getClass();
        } }, { key: "isGeometryCollectionOrDerived", value: function() {
          return this.getTypeCode() === e3.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === e3.TYPECODE_MULTIPOINT || this.getTypeCode() === e3.TYPECODE_MULTILINESTRING || this.getTypeCode() === e3.TYPECODE_MULTIPOLYGON;
        } }, { key: "interfaces_", get: function() {
          return [I, x2, E];
        } }, { key: "getClass", value: function() {
          return e3;
        } }], [{ key: "hasNonEmptyElements", value: function(t2) {
          for (var e4 = 0; e4 < t2.length; e4++) if (!t2[e4].isEmpty()) return true;
          return false;
        } }, { key: "hasNullElements", value: function(t2) {
          for (var e4 = 0; e4 < t2.length; e4++) if (null === t2[e4]) return true;
          return false;
        } }]), e3;
      }();
      V.constructor_ = function(t2) {
        t2 && (this._envelope = null, this._userData = null, this._factory = t2, this._SRID = t2.getSRID());
      }, V.TYPECODE_POINT = 0, V.TYPECODE_MULTIPOINT = 1, V.TYPECODE_LINESTRING = 2, V.TYPECODE_LINEARRING = 3, V.TYPECODE_MULTILINESTRING = 4, V.TYPECODE_POLYGON = 5, V.TYPECODE_MULTIPOLYGON = 6, V.TYPECODE_GEOMETRYCOLLECTION = 7, V.TYPENAME_POINT = "Point", V.TYPENAME_MULTIPOINT = "MultiPoint", V.TYPENAME_LINESTRING = "LineString", V.TYPENAME_LINEARRING = "LinearRing", V.TYPENAME_MULTILINESTRING = "MultiLineString", V.TYPENAME_POLYGON = "Polygon", V.TYPENAME_MULTIPOLYGON = "MultiPolygon", V.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection", V.geometryChangedFilter = { get interfaces_() {
        return [k];
      }, filter: function(t2) {
        t2.geometryChangedAction();
      } };
      var H = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "toLocationSymbol", value: function(t2) {
          switch (t2) {
            case e3.EXTERIOR:
              return "e";
            case e3.BOUNDARY:
              return "b";
            case e3.INTERIOR:
              return "i";
            case e3.NONE:
              return "-";
          }
          throw new m("Unknown location value: " + t2);
        } }]), e3;
      }();
      H.INTERIOR = 0, H.BOUNDARY = 1, H.EXTERIOR = 2, H.NONE = -1;
      var Z = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "add", value: function() {
        } }, { key: "addAll", value: function() {
        } }, { key: "isEmpty", value: function() {
        } }, { key: "iterator", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "toArray", value: function() {
        } }, { key: "remove", value: function() {
        } }]), e3;
      }(), j = function(e3) {
        i(r2, e3);
        var n2 = c(r2);
        function r2(e4) {
          var i2;
          return t(this, r2), (i2 = n2.call(this, e4)).name = Object.keys({ NoSuchElementException: r2 })[0], i2;
        }
        return r2;
      }(p), W = function(e3) {
        i(r2, e3);
        var n2 = c(r2);
        function r2(e4) {
          var i2;
          return t(this, r2), (i2 = n2.call(this, e4)).name = Object.keys({ UnsupportedOperationException: r2 })[0], i2;
        }
        return r2;
      }(p), K = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          return t(this, s2), r2.apply(this, arguments);
        }
        return n(s2, [{ key: "contains", value: function() {
        } }]), s2;
      }(Z), J = function(e3, r2) {
        i(a2, e3);
        var s2 = c(a2);
        function a2(e4) {
          var n2;
          return t(this, a2), (n2 = s2.call(this)).map = /* @__PURE__ */ new Map(), e4 instanceof Z && n2.addAll(e4), n2;
        }
        return n(a2, [{ key: "contains", value: function(t2) {
          var e4 = t2.hashCode ? t2.hashCode() : t2;
          return !!this.map.has(e4);
        } }, { key: "add", value: function(t2) {
          var e4 = t2.hashCode ? t2.hashCode() : t2;
          return !this.map.has(e4) && !!this.map.set(e4, t2);
        } }, { key: "addAll", value: function(t2) {
          var e4, n2 = d(t2);
          try {
            for (n2.s(); !(e4 = n2.n()).done; ) {
              var i2 = e4.value;
              this.add(i2);
            }
          } catch (t3) {
            n2.e(t3);
          } finally {
            n2.f();
          }
          return true;
        } }, { key: "remove", value: function() {
          throw new W();
        } }, { key: "size", value: function() {
          return this.map.size;
        } }, { key: "isEmpty", value: function() {
          return 0 === this.map.size;
        } }, { key: "toArray", value: function() {
          return Array.from(this.map.values());
        } }, { key: "iterator", value: function() {
          return new Q(this.map);
        } }, { key: r2, value: function() {
          return this.map;
        } }]), a2;
      }(K, Symbol.iterator), Q = function() {
        function e3(n2) {
          t(this, e3), this.iterator = n2.values();
          var i2 = this.iterator.next(), r2 = i2.done, s2 = i2.value;
          this.done = r2, this.value = s2;
        }
        return n(e3, [{ key: "next", value: function() {
          if (this.done) throw new j();
          var t2 = this.value, e4 = this.iterator.next(), n2 = e4.done, i2 = e4.value;
          return this.done = n2, this.value = i2, t2;
        } }, { key: "hasNext", value: function() {
          return !this.done;
        } }, { key: "remove", value: function() {
          throw new W();
        } }]), e3;
      }(), $ = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "opposite", value: function(t2) {
          return t2 === e3.LEFT ? e3.RIGHT : t2 === e3.RIGHT ? e3.LEFT : t2;
        } }]), e3;
      }();
      $.ON = 0, $.LEFT = 1, $.RIGHT = 2;
      var tt = function(e3) {
        i(r2, e3);
        var n2 = c(r2);
        function r2(e4) {
          var i2;
          return t(this, r2), (i2 = n2.call(this, e4)).name = Object.keys({ EmptyStackException: r2 })[0], i2;
        }
        return r2;
      }(p), et = function(e3) {
        i(r2, e3);
        var n2 = c(r2);
        function r2(e4) {
          var i2;
          return t(this, r2), (i2 = n2.call(this, e4)).name = Object.keys({ IndexOutOfBoundsException: r2 })[0], i2;
        }
        return r2;
      }(p), nt = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          return t(this, s2), r2.apply(this, arguments);
        }
        return n(s2, [{ key: "get", value: function() {
        } }, { key: "set", value: function() {
        } }, { key: "isEmpty", value: function() {
        } }]), s2;
      }(Z), it = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), (e4 = r2.call(this)).array = [], e4;
        }
        return n(s2, [{ key: "add", value: function(t2) {
          return this.array.push(t2), true;
        } }, { key: "get", value: function(t2) {
          if (t2 < 0 || t2 >= this.size()) throw new et();
          return this.array[t2];
        } }, { key: "push", value: function(t2) {
          return this.array.push(t2), t2;
        } }, { key: "pop", value: function() {
          if (0 === this.array.length) throw new tt();
          return this.array.pop();
        } }, { key: "peek", value: function() {
          if (0 === this.array.length) throw new tt();
          return this.array[this.array.length - 1];
        } }, { key: "empty", value: function() {
          return 0 === this.array.length;
        } }, { key: "isEmpty", value: function() {
          return this.empty();
        } }, { key: "search", value: function(t2) {
          return this.array.indexOf(t2);
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }]), s2;
      }(nt);
      function rt(t2, e3) {
        return t2.interfaces_ && t2.interfaces_.indexOf(e3) > -1;
      }
      var st = function() {
        function e3(n2) {
          t(this, e3), this.str = n2;
        }
        return n(e3, [{ key: "append", value: function(t2) {
          this.str += t2;
        } }, { key: "setCharAt", value: function(t2, e4) {
          this.str = this.str.substr(0, t2) + e4 + this.str.substr(t2 + 1);
        } }, { key: "toString", value: function() {
          return this.str;
        } }]), e3;
      }(), at = function() {
        function e3(n2) {
          t(this, e3), this.value = n2;
        }
        return n(e3, [{ key: "intValue", value: function() {
          return this.value;
        } }, { key: "compareTo", value: function(t2) {
          return this.value < t2 ? -1 : this.value > t2 ? 1 : 0;
        } }], [{ key: "compare", value: function(t2, e4) {
          return t2 < e4 ? -1 : t2 > e4 ? 1 : 0;
        } }, { key: "isNan", value: function(t2) {
          return Number.isNaN(t2);
        } }, { key: "valueOf", value: function(t2) {
          return new e3(t2);
        } }]), e3;
      }(), ot = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "isWhitespace", value: function(t2) {
          return t2 <= 32 && t2 >= 0 || 127 === t2;
        } }, { key: "toUpperCase", value: function(t2) {
          return t2.toUpperCase();
        } }]), e3;
      }(), ut = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "le", value: function(t2) {
          return this._hi < t2._hi || this._hi === t2._hi && this._lo <= t2._lo;
        } }, { key: "extractSignificantDigits", value: function(t2, n2) {
          var i2 = this.abs(), r2 = e3.magnitude(i2._hi), s2 = e3.TEN.pow(r2);
          (i2 = i2.divide(s2)).gt(e3.TEN) ? (i2 = i2.divide(e3.TEN), r2 += 1) : i2.lt(e3.ONE) && (i2 = i2.multiply(e3.TEN), r2 -= 1);
          for (var a2 = r2 + 1, o2 = new st(), u5 = e3.MAX_PRINT_DIGITS - 1, l2 = 0; l2 <= u5; l2++) {
            t2 && l2 === a2 && o2.append(".");
            var h2 = Math.trunc(i2._hi);
            if (h2 < 0) break;
            var c2 = false, f2 = 0;
            h2 > 9 ? (c2 = true, f2 = "9") : f2 = "0" + h2, o2.append(f2), i2 = i2.subtract(e3.valueOf(h2)).multiply(e3.TEN), c2 && i2.selfAdd(e3.TEN);
            var v3 = true, g2 = e3.magnitude(i2._hi);
            if (g2 < 0 && Math.abs(g2) >= u5 - l2 && (v3 = false), !v3) break;
          }
          return n2[0] = r2, o2.toString();
        } }, { key: "sqr", value: function() {
          return this.multiply(this);
        } }, { key: "doubleValue", value: function() {
          return this._hi + this._lo;
        } }, { key: "subtract", value: function() {
          if (arguments[0] instanceof e3) {
            var t2 = arguments[0];
            return this.add(t2.negate());
          }
          if ("number" == typeof arguments[0]) {
            var n2 = arguments[0];
            return this.add(-n2);
          }
        } }, { key: "equals", value: function() {
          if (1 === arguments.length && arguments[0] instanceof e3) {
            var t2 = arguments[0];
            return this._hi === t2._hi && this._lo === t2._lo;
          }
        } }, { key: "isZero", value: function() {
          return 0 === this._hi && 0 === this._lo;
        } }, { key: "selfSubtract", value: function() {
          if (arguments[0] instanceof e3) {
            var t2 = arguments[0];
            return this.isNaN() ? this : this.selfAdd(-t2._hi, -t2._lo);
          }
          if ("number" == typeof arguments[0]) {
            var n2 = arguments[0];
            return this.isNaN() ? this : this.selfAdd(-n2, 0);
          }
        } }, { key: "getSpecialNumberString", value: function() {
          return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
        } }, { key: "min", value: function(t2) {
          return this.le(t2) ? this : t2;
        } }, { key: "selfDivide", value: function() {
          if (1 === arguments.length) {
            if (arguments[0] instanceof e3) {
              var t2 = arguments[0];
              return this.selfDivide(t2._hi, t2._lo);
            }
            if ("number" == typeof arguments[0]) {
              var n2 = arguments[0];
              return this.selfDivide(n2, 0);
            }
          } else if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1], s2 = null, a2 = null, o2 = null, u5 = null, l2 = null, h2 = null, c2 = null, f2 = null;
            return l2 = this._hi / i2, f2 = (s2 = (h2 = e3.SPLIT * l2) - (s2 = h2 - l2)) * (o2 = (f2 = e3.SPLIT * i2) - (o2 = f2 - i2)) - (c2 = l2 * i2) + s2 * (u5 = i2 - o2) + (a2 = l2 - s2) * o2 + a2 * u5, f2 = l2 + (h2 = (this._hi - c2 - f2 + this._lo - l2 * r2) / i2), this._hi = f2, this._lo = l2 - f2 + h2, this;
          }
        } }, { key: "dump", value: function() {
          return "DD<" + this._hi + ", " + this._lo + ">";
        } }, { key: "divide", value: function() {
          if (arguments[0] instanceof e3) {
            var t2 = arguments[0], n2 = null, i2 = null, r2 = null, s2 = null, a2 = null, o2 = null, u5 = null, l2 = null;
            i2 = (a2 = this._hi / t2._hi) - (n2 = (o2 = e3.SPLIT * a2) - (n2 = o2 - a2)), l2 = n2 * (r2 = (l2 = e3.SPLIT * t2._hi) - (r2 = l2 - t2._hi)) - (u5 = a2 * t2._hi) + n2 * (s2 = t2._hi - r2) + i2 * r2 + i2 * s2;
            var h2 = l2 = a2 + (o2 = (this._hi - u5 - l2 + this._lo - a2 * t2._lo) / t2._hi), c2 = a2 - l2 + o2;
            return new e3(h2, c2);
          }
          if ("number" == typeof arguments[0]) {
            var f2 = arguments[0];
            return A.isNaN(f2) ? e3.createNaN() : e3.copy(this).selfDivide(f2, 0);
          }
        } }, { key: "ge", value: function(t2) {
          return this._hi > t2._hi || this._hi === t2._hi && this._lo >= t2._lo;
        } }, { key: "pow", value: function(t2) {
          if (0 === t2) return e3.valueOf(1);
          var n2 = new e3(this), i2 = e3.valueOf(1), r2 = Math.abs(t2);
          if (r2 > 1) for (; r2 > 0; ) r2 % 2 == 1 && i2.selfMultiply(n2), (r2 /= 2) > 0 && (n2 = n2.sqr());
          else i2 = n2;
          return t2 < 0 ? i2.reciprocal() : i2;
        } }, { key: "ceil", value: function() {
          if (this.isNaN()) return e3.NaN;
          var t2 = Math.ceil(this._hi), n2 = 0;
          return t2 === this._hi && (n2 = Math.ceil(this._lo)), new e3(t2, n2);
        } }, { key: "compareTo", value: function(t2) {
          var e4 = t2;
          return this._hi < e4._hi ? -1 : this._hi > e4._hi ? 1 : this._lo < e4._lo ? -1 : this._lo > e4._lo ? 1 : 0;
        } }, { key: "rint", value: function() {
          return this.isNaN() ? this : this.add(0.5).floor();
        } }, { key: "setValue", value: function() {
          if (arguments[0] instanceof e3) {
            var t2 = arguments[0];
            return this.init(t2), this;
          }
          if ("number" == typeof arguments[0]) {
            var n2 = arguments[0];
            return this.init(n2), this;
          }
        } }, { key: "max", value: function(t2) {
          return this.ge(t2) ? this : t2;
        } }, { key: "sqrt", value: function() {
          if (this.isZero()) return e3.valueOf(0);
          if (this.isNegative()) return e3.NaN;
          var t2 = 1 / Math.sqrt(this._hi), n2 = this._hi * t2, i2 = e3.valueOf(n2), r2 = this.subtract(i2.sqr())._hi * (0.5 * t2);
          return i2.add(r2);
        } }, { key: "selfAdd", value: function() {
          if (1 === arguments.length) {
            if (arguments[0] instanceof e3) {
              var t2 = arguments[0];
              return this.selfAdd(t2._hi, t2._lo);
            }
            if ("number" == typeof arguments[0]) {
              var n2 = arguments[0], i2 = null, r2 = null, s2 = null, a2 = null, o2 = null, u5 = null;
              return a2 = (s2 = this._hi + n2) - (o2 = s2 - this._hi), r2 = (u5 = (a2 = n2 - o2 + (this._hi - a2)) + this._lo) + (s2 - (i2 = s2 + u5)), this._hi = i2 + r2, this._lo = r2 + (i2 - this._hi), this;
            }
          } else if (2 === arguments.length) {
            var l2 = arguments[0], h2 = arguments[1], c2 = null, f2 = null, v3 = null, g2 = null, y3 = null, d2 = null, _2 = null;
            g2 = this._hi + l2, f2 = this._lo + h2, y3 = g2 - (d2 = g2 - this._hi), v3 = f2 - (_2 = f2 - this._lo);
            var p2 = (c2 = g2 + (d2 = (y3 = l2 - d2 + (this._hi - y3)) + f2)) + (d2 = (v3 = h2 - _2 + (this._lo - v3)) + (d2 + (g2 - c2))), m2 = d2 + (c2 - p2);
            return this._hi = p2, this._lo = m2, this;
          }
        } }, { key: "selfMultiply", value: function() {
          if (1 === arguments.length) {
            if (arguments[0] instanceof e3) {
              var t2 = arguments[0];
              return this.selfMultiply(t2._hi, t2._lo);
            }
            if ("number" == typeof arguments[0]) {
              var n2 = arguments[0];
              return this.selfMultiply(n2, 0);
            }
          } else if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1], s2 = null, a2 = null, o2 = null, u5 = null, l2 = null, h2 = null;
            s2 = (l2 = e3.SPLIT * this._hi) - this._hi, h2 = e3.SPLIT * i2, s2 = l2 - s2, a2 = this._hi - s2, o2 = h2 - i2;
            var c2 = (l2 = this._hi * i2) + (h2 = s2 * (o2 = h2 - o2) - l2 + s2 * (u5 = i2 - o2) + a2 * o2 + a2 * u5 + (this._hi * r2 + this._lo * i2)), f2 = h2 + (s2 = l2 - c2);
            return this._hi = c2, this._lo = f2, this;
          }
        } }, { key: "selfSqr", value: function() {
          return this.selfMultiply(this);
        } }, { key: "floor", value: function() {
          if (this.isNaN()) return e3.NaN;
          var t2 = Math.floor(this._hi), n2 = 0;
          return t2 === this._hi && (n2 = Math.floor(this._lo)), new e3(t2, n2);
        } }, { key: "negate", value: function() {
          return this.isNaN() ? this : new e3(-this._hi, -this._lo);
        } }, { key: "clone", value: function() {
          try {
            return null;
          } catch (t2) {
            if (t2 instanceof CloneNotSupportedException) return null;
            throw t2;
          }
        } }, { key: "multiply", value: function() {
          if (arguments[0] instanceof e3) {
            var t2 = arguments[0];
            return t2.isNaN() ? e3.createNaN() : e3.copy(this).selfMultiply(t2);
          }
          if ("number" == typeof arguments[0]) {
            var n2 = arguments[0];
            return A.isNaN(n2) ? e3.createNaN() : e3.copy(this).selfMultiply(n2, 0);
          }
        } }, { key: "isNaN", value: function() {
          return A.isNaN(this._hi);
        } }, { key: "intValue", value: function() {
          return Math.trunc(this._hi);
        } }, { key: "toString", value: function() {
          var t2 = e3.magnitude(this._hi);
          return t2 >= -3 && t2 <= 20 ? this.toStandardNotation() : this.toSciNotation();
        } }, { key: "toStandardNotation", value: function() {
          var t2 = this.getSpecialNumberString();
          if (null !== t2) return t2;
          var n2 = new Array(1).fill(null), i2 = this.extractSignificantDigits(true, n2), r2 = n2[0] + 1, s2 = i2;
          if ("." === i2.charAt(0)) s2 = "0" + i2;
          else if (r2 < 0) s2 = "0." + e3.stringOfChar("0", -r2) + i2;
          else if (-1 === i2.indexOf(".")) {
            var a2 = r2 - i2.length;
            s2 = i2 + e3.stringOfChar("0", a2) + ".0";
          }
          return this.isNegative() ? "-" + s2 : s2;
        } }, { key: "reciprocal", value: function() {
          var t2, n2, i2, r2, s2 = null, a2 = null, o2 = null, u5 = null;
          t2 = (i2 = 1 / this._hi) - (s2 = (o2 = e3.SPLIT * i2) - (s2 = o2 - i2)), a2 = (u5 = e3.SPLIT * this._hi) - this._hi;
          var l2 = i2 + (o2 = (1 - (r2 = i2 * this._hi) - (u5 = s2 * (a2 = u5 - a2) - r2 + s2 * (n2 = this._hi - a2) + t2 * a2 + t2 * n2) - i2 * this._lo) / this._hi);
          return new e3(l2, i2 - l2 + o2);
        } }, { key: "toSciNotation", value: function() {
          if (this.isZero()) return e3.SCI_NOT_ZERO;
          var t2 = this.getSpecialNumberString();
          if (null !== t2) return t2;
          var n2 = new Array(1).fill(null), i2 = this.extractSignificantDigits(false, n2), r2 = e3.SCI_NOT_EXPONENT_CHAR + n2[0];
          if ("0" === i2.charAt(0)) throw new IllegalStateException("Found leading zero: " + i2);
          var s2 = "";
          i2.length > 1 && (s2 = i2.substring(1));
          var a2 = i2.charAt(0) + "." + s2;
          return this.isNegative() ? "-" + a2 + r2 : a2 + r2;
        } }, { key: "abs", value: function() {
          return this.isNaN() ? e3.NaN : this.isNegative() ? this.negate() : new e3(this);
        } }, { key: "isPositive", value: function() {
          return this._hi > 0 || 0 === this._hi && this._lo > 0;
        } }, { key: "lt", value: function(t2) {
          return this._hi < t2._hi || this._hi === t2._hi && this._lo < t2._lo;
        } }, { key: "add", value: function() {
          if (arguments[0] instanceof e3) {
            var t2 = arguments[0];
            return e3.copy(this).selfAdd(t2);
          }
          if ("number" == typeof arguments[0]) {
            var n2 = arguments[0];
            return e3.copy(this).selfAdd(n2);
          }
        } }, { key: "init", value: function() {
          if (1 === arguments.length) {
            if ("number" == typeof arguments[0]) {
              var t2 = arguments[0];
              this._hi = t2, this._lo = 0;
            } else if (arguments[0] instanceof e3) {
              var n2 = arguments[0];
              this._hi = n2._hi, this._lo = n2._lo;
            }
          } else if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1];
            this._hi = i2, this._lo = r2;
          }
        } }, { key: "gt", value: function(t2) {
          return this._hi > t2._hi || this._hi === t2._hi && this._lo > t2._lo;
        } }, { key: "isNegative", value: function() {
          return this._hi < 0 || 0 === this._hi && this._lo < 0;
        } }, { key: "trunc", value: function() {
          return this.isNaN() ? e3.NaN : this.isPositive() ? this.floor() : this.ceil();
        } }, { key: "signum", value: function() {
          return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
        } }, { key: "interfaces_", get: function() {
          return [E, x2, I];
        } }], [{ key: "constructor_", value: function() {
          if (this._hi = 0, this._lo = 0, 0 === arguments.length) this.init(0);
          else if (1 === arguments.length) {
            if ("number" == typeof arguments[0]) {
              var t2 = arguments[0];
              this.init(t2);
            } else if (arguments[0] instanceof e3) {
              var n2 = arguments[0];
              this.init(n2);
            } else if ("string" == typeof arguments[0]) {
              var i2 = arguments[0];
              e3.constructor_.call(this, e3.parse(i2));
            }
          } else if (2 === arguments.length) {
            var r2 = arguments[0], s2 = arguments[1];
            this.init(r2, s2);
          }
        } }, { key: "determinant", value: function() {
          if ("number" == typeof arguments[3] && "number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
            var t2 = arguments[0], n2 = arguments[1], i2 = arguments[2], r2 = arguments[3];
            return e3.determinant(e3.valueOf(t2), e3.valueOf(n2), e3.valueOf(i2), e3.valueOf(r2));
          }
          if (arguments[3] instanceof e3 && arguments[2] instanceof e3 && arguments[0] instanceof e3 && arguments[1] instanceof e3) {
            var s2 = arguments[0], a2 = arguments[1], o2 = arguments[2], u5 = arguments[3], l2 = s2.multiply(u5).selfSubtract(a2.multiply(o2));
            return l2;
          }
        } }, { key: "sqr", value: function(t2) {
          return e3.valueOf(t2).selfMultiply(t2);
        } }, { key: "valueOf", value: function() {
          if ("string" == typeof arguments[0]) {
            var t2 = arguments[0];
            return e3.parse(t2);
          }
          if ("number" == typeof arguments[0]) {
            var n2 = arguments[0];
            return new e3(n2);
          }
        } }, { key: "sqrt", value: function(t2) {
          return e3.valueOf(t2).sqrt();
        } }, { key: "parse", value: function(t2) {
          for (var n2 = 0, i2 = t2.length; ot.isWhitespace(t2.charAt(n2)); ) n2++;
          var r2 = false;
          if (n2 < i2) {
            var s2 = t2.charAt(n2);
            "-" !== s2 && "+" !== s2 || (n2++, "-" === s2 && (r2 = true));
          }
          for (var a2 = new e3(), o2 = 0, u5 = 0, l2 = 0, h2 = false; !(n2 >= i2); ) {
            var c2 = t2.charAt(n2);
            if (n2++, ot.isDigit(c2)) {
              var f2 = c2 - "0";
              a2.selfMultiply(e3.TEN), a2.selfAdd(f2), o2++;
            } else {
              if ("." !== c2) {
                if ("e" === c2 || "E" === c2) {
                  var v3 = t2.substring(n2);
                  try {
                    l2 = at.parseInt(v3);
                  } catch (e4) {
                    throw e4 instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + v3 + " in string " + t2) : e4;
                  }
                  break;
                }
                throw new NumberFormatException("Unexpected character '" + c2 + "' at position " + n2 + " in string " + t2);
              }
              u5 = o2, h2 = true;
            }
          }
          var g2 = a2;
          h2 || (u5 = o2);
          var y3 = o2 - u5 - l2;
          if (0 === y3) g2 = a2;
          else if (y3 > 0) {
            var d2 = e3.TEN.pow(y3);
            g2 = a2.divide(d2);
          } else if (y3 < 0) {
            var _2 = e3.TEN.pow(-y3);
            g2 = a2.multiply(_2);
          }
          return r2 ? g2.negate() : g2;
        } }, { key: "createNaN", value: function() {
          return new e3(A.NaN, A.NaN);
        } }, { key: "copy", value: function(t2) {
          return new e3(t2);
        } }, { key: "magnitude", value: function(t2) {
          var e4 = Math.abs(t2), n2 = Math.log(e4) / Math.log(10), i2 = Math.trunc(Math.floor(n2));
          return 10 * Math.pow(10, i2) <= e4 && (i2 += 1), i2;
        } }, { key: "stringOfChar", value: function(t2, e4) {
          for (var n2 = new st(), i2 = 0; i2 < e4; i2++) n2.append(t2);
          return n2.toString();
        } }]), e3;
      }();
      ut.PI = new ut(3.141592653589793, 12246467991473532e-32), ut.TWO_PI = new ut(6.283185307179586, 24492935982947064e-32), ut.PI_2 = new ut(1.5707963267948966, 6123233995736766e-32), ut.E = new ut(2.718281828459045, 14456468917292502e-32), ut.NaN = new ut(A.NaN, A.NaN), ut.EPS = 123259516440783e-46, ut.SPLIT = 134217729, ut.MAX_PRINT_DIGITS = 32, ut.TEN = ut.valueOf(10), ut.ONE = ut.valueOf(1), ut.SCI_NOT_EXPONENT_CHAR = "E", ut.SCI_NOT_ZERO = "0.0E0";
      var lt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "orientationIndex", value: function(t2, n2, i2) {
          var r2 = e3.orientationIndexFilter(t2, n2, i2);
          if (r2 <= 1) return r2;
          var s2 = ut.valueOf(n2.x).selfAdd(-t2.x), a2 = ut.valueOf(n2.y).selfAdd(-t2.y), o2 = ut.valueOf(i2.x).selfAdd(-n2.x), u5 = ut.valueOf(i2.y).selfAdd(-n2.y);
          return s2.selfMultiply(u5).selfSubtract(a2.selfMultiply(o2)).signum();
        } }, { key: "signOfDet2x2", value: function() {
          if (arguments[3] instanceof ut && arguments[2] instanceof ut && arguments[0] instanceof ut && arguments[1] instanceof ut) {
            var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2], i2 = arguments[3], r2 = t2.multiply(i2).selfSubtract(e4.multiply(n2));
            return r2.signum();
          }
          if ("number" == typeof arguments[3] && "number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
            var s2 = arguments[0], a2 = arguments[1], o2 = arguments[2], u5 = arguments[3], l2 = ut.valueOf(s2), h2 = ut.valueOf(a2), c2 = ut.valueOf(o2), f2 = ut.valueOf(u5), v3 = l2.multiply(f2).selfSubtract(h2.multiply(c2));
            return v3.signum();
          }
        } }, { key: "intersection", value: function(t2, e4, n2, i2) {
          var r2 = new ut(t2.y).selfSubtract(e4.y), s2 = new ut(e4.x).selfSubtract(t2.x), a2 = new ut(t2.x).selfMultiply(e4.y).selfSubtract(new ut(e4.x).selfMultiply(t2.y)), o2 = new ut(n2.y).selfSubtract(i2.y), u5 = new ut(i2.x).selfSubtract(n2.x), l2 = new ut(n2.x).selfMultiply(i2.y).selfSubtract(new ut(i2.x).selfMultiply(n2.y)), h2 = s2.multiply(l2).selfSubtract(u5.multiply(a2)), c2 = o2.multiply(a2).selfSubtract(r2.multiply(l2)), f2 = r2.multiply(u5).selfSubtract(o2.multiply(s2)), v3 = h2.selfDivide(f2).doubleValue(), g2 = c2.selfDivide(f2).doubleValue();
          return A.isNaN(v3) || A.isInfinite(v3) || A.isNaN(g2) || A.isInfinite(g2) ? null : new X(v3, g2);
        } }, { key: "orientationIndexFilter", value: function(t2, n2, i2) {
          var r2 = null, s2 = (t2.x - i2.x) * (n2.y - i2.y), a2 = (t2.y - i2.y) * (n2.x - i2.x), o2 = s2 - a2;
          if (s2 > 0) {
            if (a2 <= 0) return e3.signum(o2);
            r2 = s2 + a2;
          } else {
            if (!(s2 < 0)) return e3.signum(o2);
            if (a2 >= 0) return e3.signum(o2);
            r2 = -s2 - a2;
          }
          var u5 = e3.DP_SAFE_EPSILON * r2;
          return o2 >= u5 || -o2 >= u5 ? e3.signum(o2) : 2;
        } }, { key: "signum", value: function(t2) {
          return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
        } }]), e3;
      }();
      lt.DP_SAFE_EPSILON = 1e-15;
      var ht = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "getM", value: function(t2) {
          if (this.hasM()) {
            var e4 = this.getDimension() - this.getMeasures();
            return this.getOrdinate(t2, e4);
          }
          return A.NaN;
        } }, { key: "setOrdinate", value: function(t2, e4, n2) {
        } }, { key: "getZ", value: function(t2) {
          return this.hasZ() ? this.getOrdinate(t2, 2) : A.NaN;
        } }, { key: "size", value: function() {
        } }, { key: "getOrdinate", value: function(t2, e4) {
        } }, { key: "getCoordinate", value: function() {
        } }, { key: "getCoordinateCopy", value: function(t2) {
        } }, { key: "createCoordinate", value: function() {
        } }, { key: "getDimension", value: function() {
        } }, { key: "hasM", value: function() {
          return this.getMeasures() > 0;
        } }, { key: "getX", value: function(t2) {
        } }, { key: "hasZ", value: function() {
          return this.getDimension() - this.getMeasures() > 2;
        } }, { key: "getMeasures", value: function() {
          return 0;
        } }, { key: "expandEnvelope", value: function(t2) {
        } }, { key: "copy", value: function() {
        } }, { key: "getY", value: function(t2) {
        } }, { key: "toCoordinateArray", value: function() {
        } }, { key: "interfaces_", get: function() {
          return [I];
        } }]), e3;
      }();
      ht.X = 0, ht.Y = 1, ht.Z = 2, ht.M = 3;
      var ct = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "index", value: function(t2, e4, n2) {
          return lt.orientationIndex(t2, e4, n2);
        } }, { key: "isCCW", value: function() {
          if (arguments[0] instanceof Array) {
            var t2 = arguments[0], n2 = t2.length - 1;
            if (n2 < 3) throw new m("Ring has fewer than 4 points, so orientation cannot be determined");
            for (var i2 = t2[0], r2 = 0, s2 = 1; s2 <= n2; s2++) {
              var a2 = t2[s2];
              a2.y > i2.y && (i2 = a2, r2 = s2);
            }
            var o2 = r2;
            do {
              (o2 -= 1) < 0 && (o2 = n2);
            } while (t2[o2].equals2D(i2) && o2 !== r2);
            var u5 = r2;
            do {
              u5 = (u5 + 1) % n2;
            } while (t2[u5].equals2D(i2) && u5 !== r2);
            var l2 = t2[o2], h2 = t2[u5];
            if (l2.equals2D(i2) || h2.equals2D(i2) || l2.equals2D(h2)) return false;
            var c2 = e3.index(l2, i2, h2), f2 = null;
            return f2 = 0 === c2 ? l2.x > h2.x : c2 > 0, f2;
          }
          if (rt(arguments[0], ht)) {
            var v3 = arguments[0], g2 = v3.size() - 1;
            if (g2 < 3) throw new m("Ring has fewer than 4 points, so orientation cannot be determined");
            for (var y3 = v3.getCoordinate(0), d2 = 0, _2 = 1; _2 <= g2; _2++) {
              var p2 = v3.getCoordinate(_2);
              p2.y > y3.y && (y3 = p2, d2 = _2);
            }
            var k2 = null, x3 = d2;
            do {
              (x3 -= 1) < 0 && (x3 = g2), k2 = v3.getCoordinate(x3);
            } while (k2.equals2D(y3) && x3 !== d2);
            var I2 = null, E2 = d2;
            do {
              E2 = (E2 + 1) % g2, I2 = v3.getCoordinate(E2);
            } while (I2.equals2D(y3) && E2 !== d2);
            if (k2.equals2D(y3) || I2.equals2D(y3) || k2.equals2D(I2)) return false;
            var N2 = e3.index(k2, y3, I2);
            return 0 === N2 ? k2.x > I2.x : N2 > 0;
          }
        } }]), e3;
      }();
      ct.CLOCKWISE = -1, ct.RIGHT = ct.CLOCKWISE, ct.COUNTERCLOCKWISE = 1, ct.LEFT = ct.COUNTERCLOCKWISE, ct.COLLINEAR = 0, ct.STRAIGHT = ct.COLLINEAR;
      var ft = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getCoordinate", value: function() {
          return this._minCoord;
        } }, { key: "getRightmostSide", value: function(t2, e4) {
          var n2 = this.getRightmostSideOfSegment(t2, e4);
          return n2 < 0 && (n2 = this.getRightmostSideOfSegment(t2, e4 - 1)), n2 < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t2)), n2;
        } }, { key: "findRightmostEdgeAtVertex", value: function() {
          var t2 = this._minDe.getEdge().getCoordinates();
          G.isTrue(this._minIndex > 0 && this._minIndex < t2.length, "rightmost point expected to be interior vertex of edge");
          var e4 = t2[this._minIndex - 1], n2 = t2[this._minIndex + 1], i2 = ct.index(this._minCoord, n2, e4), r2 = false;
          (e4.y < this._minCoord.y && n2.y < this._minCoord.y && i2 === ct.COUNTERCLOCKWISE || e4.y > this._minCoord.y && n2.y > this._minCoord.y && i2 === ct.CLOCKWISE) && (r2 = true), r2 && (this._minIndex = this._minIndex - 1);
        } }, { key: "getRightmostSideOfSegment", value: function(t2, e4) {
          var n2 = t2.getEdge().getCoordinates();
          if (e4 < 0 || e4 + 1 >= n2.length) return -1;
          if (n2[e4].y === n2[e4 + 1].y) return -1;
          var i2 = $.LEFT;
          return n2[e4].y < n2[e4 + 1].y && (i2 = $.RIGHT), i2;
        } }, { key: "getEdge", value: function() {
          return this._orientedDe;
        } }, { key: "checkForRightmostCoordinate", value: function(t2) {
          for (var e4 = t2.getEdge().getCoordinates(), n2 = 0; n2 < e4.length - 1; n2++) (null === this._minCoord || e4[n2].x > this._minCoord.x) && (this._minDe = t2, this._minIndex = n2, this._minCoord = e4[n2]);
        } }, { key: "findRightmostEdgeAtNode", value: function() {
          var t2 = this._minDe.getNode().getEdges();
          this._minDe = t2.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
        } }, { key: "findEdge", value: function(t2) {
          for (var e4 = t2.iterator(); e4.hasNext(); ) {
            var n2 = e4.next();
            n2.isForward() && this.checkForRightmostCoordinate(n2);
          }
          G.isTrue(0 !== this._minIndex || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), 0 === this._minIndex ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === $.LEFT && (this._orientedDe = this._minDe.getSym());
        } }], [{ key: "constructor_", value: function() {
          this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
        } }]), e3;
      }(), vt = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2(e4, n2) {
          var i2;
          return t(this, s2), (i2 = r2.call(this, n2 ? e4 + " [ " + n2 + " ]" : e4)).pt = n2 ? new X(n2) : void 0, i2.name = Object.keys({ TopologyException: s2 })[0], i2;
        }
        return n(s2, [{ key: "getCoordinate", value: function() {
          return this.pt;
        } }]), s2;
      }(D2), gt = function() {
        function e3() {
          t(this, e3), this.array = [];
        }
        return n(e3, [{ key: "addLast", value: function(t2) {
          this.array.push(t2);
        } }, { key: "removeFirst", value: function() {
          return this.array.shift();
        } }, { key: "isEmpty", value: function() {
          return 0 === this.array.length;
        } }]), e3;
      }(), yt = function(e3, r2) {
        i(a2, e3);
        var s2 = c(a2);
        function a2(e4) {
          var n2;
          return t(this, a2), (n2 = s2.call(this)).array = [], e4 instanceof Z && n2.addAll(e4), n2;
        }
        return n(a2, [{ key: "interfaces_", get: function() {
          return [nt, Z];
        } }, { key: "ensureCapacity", value: function() {
        } }, { key: "add", value: function(t2) {
          return 1 === arguments.length ? this.array.push(t2) : this.array.splice(arguments[0], 0, arguments[1]), true;
        } }, { key: "clear", value: function() {
          this.array = [];
        } }, { key: "addAll", value: function(t2) {
          var e4, n2 = d(t2);
          try {
            for (n2.s(); !(e4 = n2.n()).done; ) {
              var i2 = e4.value;
              this.array.push(i2);
            }
          } catch (t3) {
            n2.e(t3);
          } finally {
            n2.f();
          }
        } }, { key: "set", value: function(t2, e4) {
          var n2 = this.array[t2];
          return this.array[t2] = e4, n2;
        } }, { key: "iterator", value: function() {
          return new dt(this);
        } }, { key: "get", value: function(t2) {
          if (t2 < 0 || t2 >= this.size()) throw new et();
          return this.array[t2];
        } }, { key: "isEmpty", value: function() {
          return 0 === this.array.length;
        } }, { key: "sort", value: function(t2) {
          t2 ? this.array.sort(function(e4, n2) {
            return t2.compare(e4, n2);
          }) : this.array.sort();
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }, { key: "remove", value: function(t2) {
          for (var e4 = 0, n2 = this.array.length; e4 < n2; e4++) if (this.array[e4] === t2) return !!this.array.splice(e4, 1);
          return false;
        } }, { key: r2, value: function() {
          return this.array.values();
        } }]), a2;
      }(nt, Symbol.iterator), dt = function() {
        function e3(n2) {
          t(this, e3), this.arrayList = n2, this.position = 0;
        }
        return n(e3, [{ key: "next", value: function() {
          if (this.position === this.arrayList.size()) throw new j();
          return this.arrayList.get(this.position++);
        } }, { key: "hasNext", value: function() {
          return this.position < this.arrayList.size();
        } }, { key: "set", value: function(t2) {
          return this.arrayList.set(this.position - 1, t2);
        } }, { key: "remove", value: function() {
          this.arrayList.remove(this.arrayList.get(this.position));
        } }]), e3;
      }(), _t = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "clearVisitedEdges", value: function() {
          for (var t2 = this._dirEdgeList.iterator(); t2.hasNext(); ) {
            t2.next().setVisited(false);
          }
        } }, { key: "getRightmostCoordinate", value: function() {
          return this._rightMostCoord;
        } }, { key: "computeNodeDepth", value: function(t2) {
          for (var e4 = null, n2 = t2.getEdges().iterator(); n2.hasNext(); ) {
            var i2 = n2.next();
            if (i2.isVisited() || i2.getSym().isVisited()) {
              e4 = i2;
              break;
            }
          }
          if (null === e4) throw new vt("unable to find edge to compute depths at " + t2.getCoordinate());
          t2.getEdges().computeDepths(e4);
          for (var r2 = t2.getEdges().iterator(); r2.hasNext(); ) {
            var s2 = r2.next();
            s2.setVisited(true), this.copySymDepths(s2);
          }
        } }, { key: "computeDepth", value: function(t2) {
          this.clearVisitedEdges();
          var e4 = this._finder.getEdge();
          e4.getNode(), e4.getLabel(), e4.setEdgeDepths($.RIGHT, t2), this.copySymDepths(e4), this.computeDepths(e4);
        } }, { key: "create", value: function(t2) {
          this.addReachable(t2), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
        } }, { key: "findResultEdges", value: function() {
          for (var t2 = this._dirEdgeList.iterator(); t2.hasNext(); ) {
            var e4 = t2.next();
            e4.getDepth($.RIGHT) >= 1 && e4.getDepth($.LEFT) <= 0 && !e4.isInteriorAreaEdge() && e4.setInResult(true);
          }
        } }, { key: "computeDepths", value: function(t2) {
          var e4 = new J(), n2 = new gt(), i2 = t2.getNode();
          for (n2.addLast(i2), e4.add(i2), t2.setVisited(true); !n2.isEmpty(); ) {
            var r2 = n2.removeFirst();
            e4.add(r2), this.computeNodeDepth(r2);
            for (var s2 = r2.getEdges().iterator(); s2.hasNext(); ) {
              var a2 = s2.next().getSym();
              if (!a2.isVisited()) {
                var o2 = a2.getNode();
                e4.contains(o2) || (n2.addLast(o2), e4.add(o2));
              }
            }
          }
        } }, { key: "compareTo", value: function(t2) {
          var e4 = t2;
          return this._rightMostCoord.x < e4._rightMostCoord.x ? -1 : this._rightMostCoord.x > e4._rightMostCoord.x ? 1 : 0;
        } }, { key: "getEnvelope", value: function() {
          if (null === this._env) {
            for (var t2 = new U(), e4 = this._dirEdgeList.iterator(); e4.hasNext(); ) for (var n2 = e4.next().getEdge().getCoordinates(), i2 = 0; i2 < n2.length - 1; i2++) t2.expandToInclude(n2[i2]);
            this._env = t2;
          }
          return this._env;
        } }, { key: "addReachable", value: function(t2) {
          var e4 = new it();
          for (e4.add(t2); !e4.empty(); ) {
            var n2 = e4.pop();
            this.add(n2, e4);
          }
        } }, { key: "copySymDepths", value: function(t2) {
          var e4 = t2.getSym();
          e4.setDepth($.LEFT, t2.getDepth($.RIGHT)), e4.setDepth($.RIGHT, t2.getDepth($.LEFT));
        } }, { key: "add", value: function(t2, e4) {
          t2.setVisited(true), this._nodes.add(t2);
          for (var n2 = t2.getEdges().iterator(); n2.hasNext(); ) {
            var i2 = n2.next();
            this._dirEdgeList.add(i2);
            var r2 = i2.getSym().getNode();
            r2.isVisited() || e4.push(r2);
          }
        } }, { key: "getNodes", value: function() {
          return this._nodes;
        } }, { key: "getDirectedEdges", value: function() {
          return this._dirEdgeList;
        } }, { key: "interfaces_", get: function() {
          return [x2];
        } }], [{ key: "constructor_", value: function() {
          this._finder = null, this._dirEdgeList = new yt(), this._nodes = new yt(), this._rightMostCoord = null, this._env = null, this._finder = new ft();
        } }]), e3;
      }(), pt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "intersection", value: function(t2, e4, n2, i2) {
          var r2 = t2.x < e4.x ? t2.x : e4.x, s2 = t2.y < e4.y ? t2.y : e4.y, a2 = t2.x > e4.x ? t2.x : e4.x, o2 = t2.y > e4.y ? t2.y : e4.y, u5 = n2.x < i2.x ? n2.x : i2.x, l2 = n2.y < i2.y ? n2.y : i2.y, h2 = n2.x > i2.x ? n2.x : i2.x, c2 = n2.y > i2.y ? n2.y : i2.y, f2 = ((r2 > u5 ? r2 : u5) + (a2 < h2 ? a2 : h2)) / 2, v3 = ((s2 > l2 ? s2 : l2) + (o2 < c2 ? o2 : c2)) / 2, g2 = t2.x - f2, y3 = t2.y - v3, d2 = e4.x - f2, _2 = e4.y - v3, p2 = n2.x - f2, m2 = n2.y - v3, k2 = i2.x - f2, x3 = i2.y - v3, I2 = y3 - _2, E2 = d2 - g2, N2 = g2 * _2 - d2 * y3, T2 = m2 - x3, S2 = k2 - p2, L2 = p2 * x3 - k2 * m2, C3 = I2 * S2 - T2 * E2, R2 = (E2 * L2 - S2 * N2) / C3, w2 = (T2 * N2 - I2 * L2) / C3;
          return A.isNaN(R2) || A.isInfinite(R2) || A.isNaN(w2) || A.isInfinite(w2) ? null : new X(R2 + f2, w2 + v3);
        } }]), e3;
      }(), mt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "arraycopy", value: function(t2, e4, n2, i2, r2) {
          for (var s2 = 0, a2 = e4; a2 < e4 + r2; a2++) n2[i2 + s2] = t2[a2], s2++;
        } }, { key: "getProperty", value: function(t2) {
          return { "line.separator": "\n" }[t2];
        } }]), e3;
      }(), kt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "log10", value: function(t2) {
          var n2 = Math.log(t2);
          return A.isInfinite(n2) || A.isNaN(n2) ? n2 : n2 / e3.LOG_10;
        } }, { key: "min", value: function(t2, e4, n2, i2) {
          var r2 = t2;
          return e4 < r2 && (r2 = e4), n2 < r2 && (r2 = n2), i2 < r2 && (r2 = i2), r2;
        } }, { key: "clamp", value: function() {
          if ("number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
            var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2];
            return t2 < e4 ? e4 : t2 > n2 ? n2 : t2;
          }
          if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var i2 = arguments[0], r2 = arguments[1], s2 = arguments[2];
            return i2 < r2 ? r2 : i2 > s2 ? s2 : i2;
          }
        } }, { key: "wrap", value: function(t2, e4) {
          return t2 < 0 ? e4 - -t2 % e4 : t2 % e4;
        } }, { key: "max", value: function() {
          if (3 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2], i2 = t2;
            return e4 > i2 && (i2 = e4), n2 > i2 && (i2 = n2), i2;
          }
          if (4 === arguments.length) {
            var r2 = arguments[0], s2 = arguments[1], a2 = arguments[2], o2 = arguments[3], u5 = r2;
            return s2 > u5 && (u5 = s2), a2 > u5 && (u5 = a2), o2 > u5 && (u5 = o2), u5;
          }
        } }, { key: "average", value: function(t2, e4) {
          return (t2 + e4) / 2;
        } }]), e3;
      }();
      kt.LOG_10 = Math.log(10);
      var xt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "segmentToSegment", value: function(t2, n2, i2, r2) {
          if (t2.equals(n2)) return e3.pointToSegment(t2, i2, r2);
          if (i2.equals(r2)) return e3.pointToSegment(r2, t2, n2);
          var s2 = false;
          if (U.intersects(t2, n2, i2, r2)) {
            var a2 = (n2.x - t2.x) * (r2.y - i2.y) - (n2.y - t2.y) * (r2.x - i2.x);
            if (0 === a2) s2 = true;
            else {
              var o2 = (t2.y - i2.y) * (r2.x - i2.x) - (t2.x - i2.x) * (r2.y - i2.y), u5 = ((t2.y - i2.y) * (n2.x - t2.x) - (t2.x - i2.x) * (n2.y - t2.y)) / a2, l2 = o2 / a2;
              (l2 < 0 || l2 > 1 || u5 < 0 || u5 > 1) && (s2 = true);
            }
          } else s2 = true;
          return s2 ? kt.min(e3.pointToSegment(t2, i2, r2), e3.pointToSegment(n2, i2, r2), e3.pointToSegment(i2, t2, n2), e3.pointToSegment(r2, t2, n2)) : 0;
        } }, { key: "pointToSegment", value: function(t2, e4, n2) {
          if (e4.x === n2.x && e4.y === n2.y) return t2.distance(e4);
          var i2 = (n2.x - e4.x) * (n2.x - e4.x) + (n2.y - e4.y) * (n2.y - e4.y), r2 = ((t2.x - e4.x) * (n2.x - e4.x) + (t2.y - e4.y) * (n2.y - e4.y)) / i2;
          if (r2 <= 0) return t2.distance(e4);
          if (r2 >= 1) return t2.distance(n2);
          var s2 = ((e4.y - t2.y) * (n2.x - e4.x) - (e4.x - t2.x) * (n2.y - e4.y)) / i2;
          return Math.abs(s2) * Math.sqrt(i2);
        } }, { key: "pointToLinePerpendicular", value: function(t2, e4, n2) {
          var i2 = (n2.x - e4.x) * (n2.x - e4.x) + (n2.y - e4.y) * (n2.y - e4.y), r2 = ((e4.y - t2.y) * (n2.x - e4.x) - (e4.x - t2.x) * (n2.y - e4.y)) / i2;
          return Math.abs(r2) * Math.sqrt(i2);
        } }, { key: "pointToSegmentString", value: function(t2, n2) {
          if (0 === n2.length) throw new m("Line array must contain at least one vertex");
          for (var i2 = t2.distance(n2[0]), r2 = 0; r2 < n2.length - 1; r2++) {
            var s2 = e3.pointToSegment(t2, n2[r2], n2[r2 + 1]);
            s2 < i2 && (i2 = s2);
          }
          return i2;
        } }]), e3;
      }(), It = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "create", value: function() {
          if (1 === arguments.length) arguments[0] instanceof Array || rt(arguments[0], ht);
          else if (2 === arguments.length) ;
          else if (3 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1];
            return this.create(t2, e4);
          }
        } }]), e3;
      }(), Et = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "filter", value: function(t2) {
        } }]), e3;
      }(), Nt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "ofLine", value: function(t2) {
          var e4 = t2.size();
          if (e4 <= 1) return 0;
          var n2 = 0, i2 = new X();
          t2.getCoordinate(0, i2);
          for (var r2 = i2.x, s2 = i2.y, a2 = 1; a2 < e4; a2++) {
            t2.getCoordinate(a2, i2);
            var o2 = i2.x, u5 = i2.y, l2 = o2 - r2, h2 = u5 - s2;
            n2 += Math.sqrt(l2 * l2 + h2 * h2), r2 = o2, s2 = u5;
          }
          return n2;
        } }]), e3;
      }(), Tt = function e3() {
        t(this, e3);
      }, St = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "copyCoord", value: function(t2, e4, n2, i2) {
          for (var r2 = Math.min(t2.getDimension(), n2.getDimension()), s2 = 0; s2 < r2; s2++) n2.setOrdinate(i2, s2, t2.getOrdinate(e4, s2));
        } }, { key: "isRing", value: function(t2) {
          var e4 = t2.size();
          return 0 === e4 || !(e4 <= 3) && (t2.getOrdinate(0, ht.X) === t2.getOrdinate(e4 - 1, ht.X) && t2.getOrdinate(0, ht.Y) === t2.getOrdinate(e4 - 1, ht.Y));
        } }, { key: "scroll", value: function() {
          if (2 === arguments.length) {
            if (rt(arguments[0], ht) && Number.isInteger(arguments[1])) {
              var t2 = arguments[0], n2 = arguments[1];
              e3.scroll(t2, n2, e3.isRing(t2));
            } else if (rt(arguments[0], ht) && arguments[1] instanceof X) {
              var i2 = arguments[0], r2 = arguments[1], s2 = e3.indexOf(r2, i2);
              if (s2 <= 0) return null;
              e3.scroll(i2, s2);
            }
          } else if (3 === arguments.length) {
            var a2 = arguments[0], o2 = arguments[1], u5 = arguments[2], l2 = o2;
            if (l2 <= 0) return null;
            for (var h2 = a2.copy(), c2 = u5 ? a2.size() - 1 : a2.size(), f2 = 0; f2 < c2; f2++) for (var v3 = 0; v3 < a2.getDimension(); v3++) a2.setOrdinate(f2, v3, h2.getOrdinate((o2 + f2) % c2, v3));
            if (u5) for (var g2 = 0; g2 < a2.getDimension(); g2++) a2.setOrdinate(c2, g2, a2.getOrdinate(0, g2));
          }
        } }, { key: "isEqual", value: function(t2, e4) {
          var n2 = t2.size();
          if (n2 !== e4.size()) return false;
          for (var i2 = Math.min(t2.getDimension(), e4.getDimension()), r2 = 0; r2 < n2; r2++) for (var s2 = 0; s2 < i2; s2++) {
            var a2 = t2.getOrdinate(r2, s2), o2 = e4.getOrdinate(r2, s2);
            if (t2.getOrdinate(r2, s2) !== e4.getOrdinate(r2, s2) && (!A.isNaN(a2) || !A.isNaN(o2))) return false;
          }
          return true;
        } }, { key: "minCoordinateIndex", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return e3.minCoordinateIndex(t2, 0, t2.size() - 1);
          }
          if (3 === arguments.length) {
            for (var n2 = arguments[0], i2 = arguments[1], r2 = arguments[2], s2 = -1, a2 = null, o2 = i2; o2 <= r2; o2++) {
              var u5 = n2.getCoordinate(o2);
              (null === a2 || a2.compareTo(u5) > 0) && (a2 = u5, s2 = o2);
            }
            return s2;
          }
        } }, { key: "extend", value: function(t2, n2, i2) {
          var r2 = t2.create(i2, n2.getDimension()), s2 = n2.size();
          if (e3.copy(n2, 0, r2, 0, s2), s2 > 0) for (var a2 = s2; a2 < i2; a2++) e3.copy(n2, s2 - 1, r2, a2, 1);
          return r2;
        } }, { key: "reverse", value: function(t2) {
          for (var n2 = t2.size() - 1, i2 = Math.trunc(n2 / 2), r2 = 0; r2 <= i2; r2++) e3.swap(t2, r2, n2 - r2);
        } }, { key: "swap", value: function(t2, e4, n2) {
          if (e4 === n2) return null;
          for (var i2 = 0; i2 < t2.getDimension(); i2++) {
            var r2 = t2.getOrdinate(e4, i2);
            t2.setOrdinate(e4, i2, t2.getOrdinate(n2, i2)), t2.setOrdinate(n2, i2, r2);
          }
        } }, { key: "copy", value: function(t2, n2, i2, r2, s2) {
          for (var a2 = 0; a2 < s2; a2++) e3.copyCoord(t2, n2 + a2, i2, r2 + a2);
        } }, { key: "ensureValidRing", value: function(t2, n2) {
          var i2 = n2.size();
          return 0 === i2 ? n2 : i2 <= 3 ? e3.createClosedRing(t2, n2, 4) : n2.getOrdinate(0, ht.X) === n2.getOrdinate(i2 - 1, ht.X) && n2.getOrdinate(0, ht.Y) === n2.getOrdinate(i2 - 1, ht.Y) ? n2 : e3.createClosedRing(t2, n2, i2 + 1);
        } }, { key: "indexOf", value: function(t2, e4) {
          for (var n2 = 0; n2 < e4.size(); n2++) if (t2.x === e4.getOrdinate(n2, ht.X) && t2.y === e4.getOrdinate(n2, ht.Y)) return n2;
          return -1;
        } }, { key: "createClosedRing", value: function(t2, n2, i2) {
          var r2 = t2.create(i2, n2.getDimension()), s2 = n2.size();
          e3.copy(n2, 0, r2, 0, s2);
          for (var a2 = s2; a2 < i2; a2++) e3.copy(n2, 0, r2, a2, 1);
          return r2;
        } }, { key: "minCoordinate", value: function(t2) {
          for (var e4 = null, n2 = 0; n2 < t2.size(); n2++) {
            var i2 = t2.getCoordinate(n2);
            (null === e4 || e4.compareTo(i2) > 0) && (e4 = i2);
          }
          return e4;
        } }]), e3;
      }(), Lt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "toDimensionSymbol", value: function(t2) {
          switch (t2) {
            case e3.FALSE:
              return e3.SYM_FALSE;
            case e3.TRUE:
              return e3.SYM_TRUE;
            case e3.DONTCARE:
              return e3.SYM_DONTCARE;
            case e3.P:
              return e3.SYM_P;
            case e3.L:
              return e3.SYM_L;
            case e3.A:
              return e3.SYM_A;
          }
          throw new m("Unknown dimension value: " + t2);
        } }, { key: "toDimensionValue", value: function(t2) {
          switch (ot.toUpperCase(t2)) {
            case e3.SYM_FALSE:
              return e3.FALSE;
            case e3.SYM_TRUE:
              return e3.TRUE;
            case e3.SYM_DONTCARE:
              return e3.DONTCARE;
            case e3.SYM_P:
              return e3.P;
            case e3.SYM_L:
              return e3.L;
            case e3.SYM_A:
              return e3.A;
          }
          throw new m("Unknown dimension symbol: " + t2);
        } }]), e3;
      }();
      Lt.P = 0, Lt.L = 1, Lt.A = 2, Lt.FALSE = -1, Lt.TRUE = -2, Lt.DONTCARE = -3, Lt.SYM_FALSE = "F", Lt.SYM_TRUE = "T", Lt.SYM_DONTCARE = "*", Lt.SYM_P = "0", Lt.SYM_L = "1", Lt.SYM_A = "2";
      var Ct = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "filter", value: function(t2) {
        } }]), e3;
      }(), Rt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "filter", value: function(t2, e4) {
        } }, { key: "isDone", value: function() {
        } }, { key: "isGeometryChanged", value: function() {
        } }]), e3;
      }(), wt = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "computeEnvelopeInternal", value: function() {
          return this.isEmpty() ? new U() : this._points.expandEnvelope(new U());
        } }, { key: "isRing", value: function() {
          return this.isClosed() && this.isSimple();
        } }, { key: "getCoordinates", value: function() {
          return this._points.toCoordinateArray();
        } }, { key: "copyInternal", value: function() {
          return new a2(this._points.copy(), this._factory);
        } }, { key: "equalsExact", value: function() {
          if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
            var t2 = arguments[0], e4 = arguments[1];
            if (!this.isEquivalentClass(t2)) return false;
            var n2 = t2;
            if (this._points.size() !== n2._points.size()) return false;
            for (var i2 = 0; i2 < this._points.size(); i2++) if (!this.equal(this._points.getCoordinate(i2), n2._points.getCoordinate(i2), e4)) return false;
            return true;
          }
          return f(r(a2.prototype), "equalsExact", this).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          for (var t2 = 0; t2 < Math.trunc(this._points.size() / 2); t2++) {
            var e4 = this._points.size() - 1 - t2;
            if (!this._points.getCoordinate(t2).equals(this._points.getCoordinate(e4))) {
              if (this._points.getCoordinate(t2).compareTo(this._points.getCoordinate(e4)) > 0) {
                var n2 = this._points.copy();
                St.reverse(n2), this._points = n2;
              }
              return null;
            }
          }
        } }, { key: "getCoordinate", value: function() {
          return this.isEmpty() ? null : this._points.getCoordinate(0);
        } }, { key: "getBoundaryDimension", value: function() {
          return this.isClosed() ? Lt.FALSE : 0;
        } }, { key: "isClosed", value: function() {
          return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
        } }, { key: "reverseInternal", value: function() {
          var t2 = this._points.copy();
          return St.reverse(t2), this.getFactory().createLineString(t2);
        } }, { key: "getEndPoint", value: function() {
          return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
        } }, { key: "getTypeCode", value: function() {
          return V.TYPECODE_LINESTRING;
        } }, { key: "getDimension", value: function() {
          return 1;
        } }, { key: "getLength", value: function() {
          return Nt.ofLine(this._points);
        } }, { key: "getNumPoints", value: function() {
          return this._points.size();
        } }, { key: "compareToSameClass", value: function() {
          if (1 === arguments.length) {
            for (var t2 = arguments[0], e4 = t2, n2 = 0, i2 = 0; n2 < this._points.size() && i2 < e4._points.size(); ) {
              var r2 = this._points.getCoordinate(n2).compareTo(e4._points.getCoordinate(i2));
              if (0 !== r2) return r2;
              n2++, i2++;
            }
            return n2 < this._points.size() ? 1 : i2 < e4._points.size() ? -1 : 0;
          }
          if (2 === arguments.length) {
            var s3 = arguments[0], a3 = arguments[1], o2 = s3;
            return a3.compare(this._points, o2._points);
          }
        } }, { key: "apply", value: function() {
          if (rt(arguments[0], Et)) for (var t2 = arguments[0], e4 = 0; e4 < this._points.size(); e4++) t2.filter(this._points.getCoordinate(e4));
          else if (rt(arguments[0], Rt)) {
            var n2 = arguments[0];
            if (0 === this._points.size()) return null;
            for (var i2 = 0; i2 < this._points.size() && (n2.filter(this._points, i2), !n2.isDone()); i2++) ;
            n2.isGeometryChanged() && this.geometryChanged();
          } else if (rt(arguments[0], Ct)) {
            var r2 = arguments[0];
            r2.filter(this);
          } else if (rt(arguments[0], k)) {
            var s3 = arguments[0];
            s3.filter(this);
          }
        } }, { key: "getBoundary", value: function() {
          throw new W();
        } }, { key: "isEquivalentClass", value: function(t2) {
          return t2 instanceof a2;
        } }, { key: "getCoordinateN", value: function(t2) {
          return this._points.getCoordinate(t2);
        } }, { key: "getGeometryType", value: function() {
          return V.TYPENAME_LINESTRING;
        } }, { key: "getCoordinateSequence", value: function() {
          return this._points;
        } }, { key: "isEmpty", value: function() {
          return 0 === this._points.size();
        } }, { key: "init", value: function(t2) {
          if (null === t2 && (t2 = this.getFactory().getCoordinateSequenceFactory().create([])), 1 === t2.size()) throw new m("Invalid number of points in LineString (found " + t2.size() + " - must be 0 or >= 2)");
          this._points = t2;
        } }, { key: "isCoordinate", value: function(t2) {
          for (var e4 = 0; e4 < this._points.size(); e4++) if (this._points.getCoordinate(e4).equals(t2)) return true;
          return false;
        } }, { key: "getStartPoint", value: function() {
          return this.isEmpty() ? null : this.getPointN(0);
        } }, { key: "getPointN", value: function(t2) {
          return this.getFactory().createPoint(this._points.getCoordinate(t2));
        } }, { key: "interfaces_", get: function() {
          return [Tt];
        } }], [{ key: "constructor_", value: function() {
          if (this._points = null, 0 === arguments.length) ;
          else if (2 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1];
            V.constructor_.call(this, e4), this.init(t2);
          }
        } }]), a2;
      }(V), Ot = function e3() {
        t(this, e3);
      }, bt = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "computeEnvelopeInternal", value: function() {
          if (this.isEmpty()) return new U();
          var t2 = new U();
          return t2.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), t2;
        } }, { key: "getCoordinates", value: function() {
          return this.isEmpty() ? [] : [this.getCoordinate()];
        } }, { key: "copyInternal", value: function() {
          return new a2(this._coordinates.copy(), this._factory);
        } }, { key: "equalsExact", value: function() {
          if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
            var t2 = arguments[0], e4 = arguments[1];
            return !!this.isEquivalentClass(t2) && (!(!this.isEmpty() || !t2.isEmpty()) || this.isEmpty() === t2.isEmpty() && this.equal(t2.getCoordinate(), this.getCoordinate(), e4));
          }
          return f(r(a2.prototype), "equalsExact", this).apply(this, arguments);
        } }, { key: "normalize", value: function() {
        } }, { key: "getCoordinate", value: function() {
          return 0 !== this._coordinates.size() ? this._coordinates.getCoordinate(0) : null;
        } }, { key: "getBoundaryDimension", value: function() {
          return Lt.FALSE;
        } }, { key: "reverseInternal", value: function() {
          return this.getFactory().createPoint(this._coordinates.copy());
        } }, { key: "getTypeCode", value: function() {
          return V.TYPECODE_POINT;
        } }, { key: "getDimension", value: function() {
          return 0;
        } }, { key: "getNumPoints", value: function() {
          return this.isEmpty() ? 0 : 1;
        } }, { key: "getX", value: function() {
          if (null === this.getCoordinate()) throw new IllegalStateException("getX called on empty Point");
          return this.getCoordinate().x;
        } }, { key: "compareToSameClass", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0], e4 = t2;
            return this.getCoordinate().compareTo(e4.getCoordinate());
          }
          if (2 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1], r2 = n2;
            return i2.compare(this._coordinates, r2._coordinates);
          }
        } }, { key: "apply", value: function() {
          if (rt(arguments[0], Et)) {
            var t2 = arguments[0];
            if (this.isEmpty()) return null;
            t2.filter(this.getCoordinate());
          } else if (rt(arguments[0], Rt)) {
            var e4 = arguments[0];
            if (this.isEmpty()) return null;
            e4.filter(this._coordinates, 0), e4.isGeometryChanged() && this.geometryChanged();
          } else if (rt(arguments[0], Ct)) {
            var n2 = arguments[0];
            n2.filter(this);
          } else if (rt(arguments[0], k)) {
            var i2 = arguments[0];
            i2.filter(this);
          }
        } }, { key: "getBoundary", value: function() {
          return this.getFactory().createGeometryCollection();
        } }, { key: "getGeometryType", value: function() {
          return V.TYPENAME_POINT;
        } }, { key: "getCoordinateSequence", value: function() {
          return this._coordinates;
        } }, { key: "getY", value: function() {
          if (null === this.getCoordinate()) throw new IllegalStateException("getY called on empty Point");
          return this.getCoordinate().y;
        } }, { key: "isEmpty", value: function() {
          return 0 === this._coordinates.size();
        } }, { key: "init", value: function(t2) {
          null === t2 && (t2 = this.getFactory().getCoordinateSequenceFactory().create([])), G.isTrue(t2.size() <= 1), this._coordinates = t2;
        } }, { key: "isSimple", value: function() {
          return true;
        } }, { key: "interfaces_", get: function() {
          return [Ot];
        } }], [{ key: "constructor_", value: function() {
          this._coordinates = null;
          var t2 = arguments[0], e4 = arguments[1];
          V.constructor_.call(this, e4), this.init(t2);
        } }]), a2;
      }(V), Mt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "ofRing", value: function() {
          if (arguments[0] instanceof Array) {
            var t2 = arguments[0];
            return Math.abs(e3.ofRingSigned(t2));
          }
          if (rt(arguments[0], ht)) {
            var n2 = arguments[0];
            return Math.abs(e3.ofRingSigned(n2));
          }
        } }, { key: "ofRingSigned", value: function() {
          if (arguments[0] instanceof Array) {
            var t2 = arguments[0];
            if (t2.length < 3) return 0;
            for (var e4 = 0, n2 = t2[0].x, i2 = 1; i2 < t2.length - 1; i2++) {
              var r2 = t2[i2].x - n2, s2 = t2[i2 + 1].y, a2 = t2[i2 - 1].y;
              e4 += r2 * (a2 - s2);
            }
            return e4 / 2;
          }
          if (rt(arguments[0], ht)) {
            var o2 = arguments[0], u5 = o2.size();
            if (u5 < 3) return 0;
            var l2 = new X(), h2 = new X(), c2 = new X();
            o2.getCoordinate(0, h2), o2.getCoordinate(1, c2);
            var f2 = h2.x;
            c2.x -= f2;
            for (var v3 = 0, g2 = 1; g2 < u5 - 1; g2++) l2.y = h2.y, h2.x = c2.x, h2.y = c2.y, o2.getCoordinate(g2 + 1, c2), c2.x -= f2, v3 += h2.x * (l2.y - c2.y);
            return v3 / 2;
          }
        } }]), e3;
      }(), At = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "sort", value: function() {
          var t2 = arguments, e4 = arguments[0];
          if (1 === arguments.length) e4.sort(function(t3, e6) {
            return t3.compareTo(e6);
          });
          else if (2 === arguments.length) e4.sort(function(e6, n3) {
            return t2[1].compare(e6, n3);
          });
          else if (3 === arguments.length) {
            var n2 = e4.slice(arguments[1], arguments[2]);
            n2.sort();
            var i2 = e4.slice(0, arguments[1]).concat(n2, e4.slice(arguments[2], e4.length));
            e4.splice(0, e4.length);
            var r2, s2 = d(i2);
            try {
              for (s2.s(); !(r2 = s2.n()).done; ) {
                var a2 = r2.value;
                e4.push(a2);
              }
            } catch (t3) {
              s2.e(t3);
            } finally {
              s2.f();
            }
          } else if (4 === arguments.length) {
            var o2 = e4.slice(arguments[1], arguments[2]);
            o2.sort(function(e6, n3) {
              return t2[3].compare(e6, n3);
            });
            var u5 = e4.slice(0, arguments[1]).concat(o2, e4.slice(arguments[2], e4.length));
            e4.splice(0, e4.length);
            var l2, h2 = d(u5);
            try {
              for (h2.s(); !(l2 = h2.n()).done; ) {
                var c2 = l2.value;
                e4.push(c2);
              }
            } catch (t3) {
              h2.e(t3);
            } finally {
              h2.f();
            }
          }
        } }, { key: "asList", value: function(t2) {
          var e4, n2 = new yt(), i2 = d(t2);
          try {
            for (i2.s(); !(e4 = i2.n()).done; ) {
              var r2 = e4.value;
              n2.add(r2);
            }
          } catch (t3) {
            i2.e(t3);
          } finally {
            i2.f();
          }
          return n2;
        } }, { key: "copyOf", value: function(t2, e4) {
          return t2.slice(0, e4);
        } }]), e3;
      }(), Pt = function e3() {
        t(this, e3);
      }, Dt = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "computeEnvelopeInternal", value: function() {
          return this._shell.getEnvelopeInternal();
        } }, { key: "getCoordinates", value: function() {
          if (this.isEmpty()) return [];
          for (var t2 = new Array(this.getNumPoints()).fill(null), e4 = -1, n2 = this._shell.getCoordinates(), i2 = 0; i2 < n2.length; i2++) t2[++e4] = n2[i2];
          for (var r2 = 0; r2 < this._holes.length; r2++) for (var s3 = this._holes[r2].getCoordinates(), a3 = 0; a3 < s3.length; a3++) t2[++e4] = s3[a3];
          return t2;
        } }, { key: "getArea", value: function() {
          var t2 = 0;
          t2 += Mt.ofRing(this._shell.getCoordinateSequence());
          for (var e4 = 0; e4 < this._holes.length; e4++) t2 -= Mt.ofRing(this._holes[e4].getCoordinateSequence());
          return t2;
        } }, { key: "copyInternal", value: function() {
          for (var t2 = this._shell.copy(), e4 = new Array(this._holes.length).fill(null), n2 = 0; n2 < this._holes.length; n2++) e4[n2] = this._holes[n2].copy();
          return new a2(t2, e4, this._factory);
        } }, { key: "isRectangle", value: function() {
          if (0 !== this.getNumInteriorRing()) return false;
          if (null === this._shell) return false;
          if (5 !== this._shell.getNumPoints()) return false;
          for (var t2 = this._shell.getCoordinateSequence(), e4 = this.getEnvelopeInternal(), n2 = 0; n2 < 5; n2++) {
            var i2 = t2.getX(n2);
            if (i2 !== e4.getMinX() && i2 !== e4.getMaxX()) return false;
            var r2 = t2.getY(n2);
            if (r2 !== e4.getMinY() && r2 !== e4.getMaxY()) return false;
          }
          for (var s3 = t2.getX(0), a3 = t2.getY(0), o2 = 1; o2 <= 4; o2++) {
            var u5 = t2.getX(o2), l2 = t2.getY(o2);
            if (u5 !== s3 === (l2 !== a3)) return false;
            s3 = u5, a3 = l2;
          }
          return true;
        } }, { key: "equalsExact", value: function() {
          if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
            var t2 = arguments[0], e4 = arguments[1];
            if (!this.isEquivalentClass(t2)) return false;
            var n2 = t2, i2 = this._shell, s3 = n2._shell;
            if (!i2.equalsExact(s3, e4)) return false;
            if (this._holes.length !== n2._holes.length) return false;
            for (var o2 = 0; o2 < this._holes.length; o2++) if (!this._holes[o2].equalsExact(n2._holes[o2], e4)) return false;
            return true;
          }
          return f(r(a2.prototype), "equalsExact", this).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          if (0 === arguments.length) {
            this._shell = this.normalized(this._shell, true);
            for (var t2 = 0; t2 < this._holes.length; t2++) this._holes[t2] = this.normalized(this._holes[t2], false);
            At.sort(this._holes);
          } else if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            if (e4.isEmpty()) return null;
            var i2 = e4.getCoordinateSequence(), r2 = St.minCoordinateIndex(i2, 0, i2.size() - 2);
            St.scroll(i2, r2, true), ct.isCCW(i2) === n2 && St.reverse(i2);
          }
        } }, { key: "getCoordinate", value: function() {
          return this._shell.getCoordinate();
        } }, { key: "getNumInteriorRing", value: function() {
          return this._holes.length;
        } }, { key: "getBoundaryDimension", value: function() {
          return 1;
        } }, { key: "reverseInternal", value: function() {
          for (var t2 = this.getExteriorRing().reverse(), e4 = new Array(this.getNumInteriorRing()).fill(null), n2 = 0; n2 < e4.length; n2++) e4[n2] = this.getInteriorRingN(n2).reverse();
          return this.getFactory().createPolygon(t2, e4);
        } }, { key: "getTypeCode", value: function() {
          return V.TYPECODE_POLYGON;
        } }, { key: "getDimension", value: function() {
          return 2;
        } }, { key: "getLength", value: function() {
          var t2 = 0;
          t2 += this._shell.getLength();
          for (var e4 = 0; e4 < this._holes.length; e4++) t2 += this._holes[e4].getLength();
          return t2;
        } }, { key: "getNumPoints", value: function() {
          for (var t2 = this._shell.getNumPoints(), e4 = 0; e4 < this._holes.length; e4++) t2 += this._holes[e4].getNumPoints();
          return t2;
        } }, { key: "convexHull", value: function() {
          return this.getExteriorRing().convexHull();
        } }, { key: "normalized", value: function(t2, e4) {
          var n2 = t2.copy();
          return this.normalize(n2, e4), n2;
        } }, { key: "compareToSameClass", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0], e4 = this._shell, n2 = t2._shell;
            return e4.compareToSameClass(n2);
          }
          if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1], s3 = i2, a3 = this._shell, o2 = s3._shell, u5 = a3.compareToSameClass(o2, r2);
            if (0 !== u5) return u5;
            for (var l2 = this.getNumInteriorRing(), h2 = s3.getNumInteriorRing(), c2 = 0; c2 < l2 && c2 < h2; ) {
              var f2 = this.getInteriorRingN(c2), v3 = s3.getInteriorRingN(c2), g2 = f2.compareToSameClass(v3, r2);
              if (0 !== g2) return g2;
              c2++;
            }
            return c2 < l2 ? 1 : c2 < h2 ? -1 : 0;
          }
        } }, { key: "apply", value: function() {
          if (rt(arguments[0], Et)) {
            var t2 = arguments[0];
            this._shell.apply(t2);
            for (var e4 = 0; e4 < this._holes.length; e4++) this._holes[e4].apply(t2);
          } else if (rt(arguments[0], Rt)) {
            var n2 = arguments[0];
            if (this._shell.apply(n2), !n2.isDone()) for (var i2 = 0; i2 < this._holes.length && (this._holes[i2].apply(n2), !n2.isDone()); i2++) ;
            n2.isGeometryChanged() && this.geometryChanged();
          } else if (rt(arguments[0], Ct)) {
            var r2 = arguments[0];
            r2.filter(this);
          } else if (rt(arguments[0], k)) {
            var s3 = arguments[0];
            s3.filter(this), this._shell.apply(s3);
            for (var a3 = 0; a3 < this._holes.length; a3++) this._holes[a3].apply(s3);
          }
        } }, { key: "getBoundary", value: function() {
          if (this.isEmpty()) return this.getFactory().createMultiLineString();
          var t2 = new Array(this._holes.length + 1).fill(null);
          t2[0] = this._shell;
          for (var e4 = 0; e4 < this._holes.length; e4++) t2[e4 + 1] = this._holes[e4];
          return t2.length <= 1 ? this.getFactory().createLinearRing(t2[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(t2);
        } }, { key: "getGeometryType", value: function() {
          return V.TYPENAME_POLYGON;
        } }, { key: "getExteriorRing", value: function() {
          return this._shell;
        } }, { key: "isEmpty", value: function() {
          return this._shell.isEmpty();
        } }, { key: "getInteriorRingN", value: function(t2) {
          return this._holes[t2];
        } }, { key: "interfaces_", get: function() {
          return [Pt];
        } }], [{ key: "constructor_", value: function() {
          this._shell = null, this._holes = null;
          var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2];
          if (V.constructor_.call(this, n2), null === t2 && (t2 = this.getFactory().createLinearRing()), null === e4 && (e4 = []), V.hasNullElements(e4)) throw new m("holes must not contain null elements");
          if (t2.isEmpty() && V.hasNonEmptyElements(e4)) throw new m("shell is empty but holes are not");
          this._shell = t2, this._holes = e4;
        } }]), a2;
      }(V), Ft = function(e3) {
        i(r2, e3);
        var n2 = c(r2);
        function r2() {
          return t(this, r2), n2.apply(this, arguments);
        }
        return r2;
      }(K), Gt = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2(e4) {
          var n2;
          return t(this, s2), (n2 = r2.call(this)).array = [], e4 instanceof Z && n2.addAll(e4), n2;
        }
        return n(s2, [{ key: "contains", value: function(t2) {
          var e4, n2 = d(this.array);
          try {
            for (n2.s(); !(e4 = n2.n()).done; ) {
              if (0 === e4.value.compareTo(t2)) return true;
            }
          } catch (t3) {
            n2.e(t3);
          } finally {
            n2.f();
          }
          return false;
        } }, { key: "add", value: function(t2) {
          if (this.contains(t2)) return false;
          for (var e4 = 0, n2 = this.array.length; e4 < n2; e4++) {
            if (1 === this.array[e4].compareTo(t2)) return !!this.array.splice(e4, 0, t2);
          }
          return this.array.push(t2), true;
        } }, { key: "addAll", value: function(t2) {
          var e4, n2 = d(t2);
          try {
            for (n2.s(); !(e4 = n2.n()).done; ) {
              var i2 = e4.value;
              this.add(i2);
            }
          } catch (t3) {
            n2.e(t3);
          } finally {
            n2.f();
          }
          return true;
        } }, { key: "remove", value: function() {
          throw new W();
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "isEmpty", value: function() {
          return 0 === this.array.length;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }, { key: "iterator", value: function() {
          return new qt(this.array);
        } }]), s2;
      }(Ft), qt = function() {
        function e3(n2) {
          t(this, e3), this.array = n2, this.position = 0;
        }
        return n(e3, [{ key: "next", value: function() {
          if (this.position === this.array.length) throw new j();
          return this.array[this.position++];
        } }, { key: "hasNext", value: function() {
          return this.position < this.array.length;
        } }, { key: "remove", value: function() {
          throw new W();
        } }]), e3;
      }(), Yt = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "computeEnvelopeInternal", value: function() {
          for (var t2 = new U(), e4 = 0; e4 < this._geometries.length; e4++) t2.expandToInclude(this._geometries[e4].getEnvelopeInternal());
          return t2;
        } }, { key: "getGeometryN", value: function(t2) {
          return this._geometries[t2];
        } }, { key: "getCoordinates", value: function() {
          for (var t2 = new Array(this.getNumPoints()).fill(null), e4 = -1, n2 = 0; n2 < this._geometries.length; n2++) for (var i2 = this._geometries[n2].getCoordinates(), r2 = 0; r2 < i2.length; r2++) t2[++e4] = i2[r2];
          return t2;
        } }, { key: "getArea", value: function() {
          for (var t2 = 0, e4 = 0; e4 < this._geometries.length; e4++) t2 += this._geometries[e4].getArea();
          return t2;
        } }, { key: "copyInternal", value: function() {
          for (var t2 = new Array(this._geometries.length).fill(null), e4 = 0; e4 < t2.length; e4++) t2[e4] = this._geometries[e4].copy();
          return new a2(t2, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
            var t2 = arguments[0], e4 = arguments[1];
            if (!this.isEquivalentClass(t2)) return false;
            var n2 = t2;
            if (this._geometries.length !== n2._geometries.length) return false;
            for (var i2 = 0; i2 < this._geometries.length; i2++) if (!this._geometries[i2].equalsExact(n2._geometries[i2], e4)) return false;
            return true;
          }
          return f(r(a2.prototype), "equalsExact", this).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          for (var t2 = 0; t2 < this._geometries.length; t2++) this._geometries[t2].normalize();
          At.sort(this._geometries);
        } }, { key: "getCoordinate", value: function() {
          return this.isEmpty() ? null : this._geometries[0].getCoordinate();
        } }, { key: "getBoundaryDimension", value: function() {
          for (var t2 = Lt.FALSE, e4 = 0; e4 < this._geometries.length; e4++) t2 = Math.max(t2, this._geometries[e4].getBoundaryDimension());
          return t2;
        } }, { key: "reverseInternal", value: function() {
          for (var t2 = this._geometries.length, e4 = new yt(t2), n2 = 0; n2 < t2; n2++) e4.add(this._geometries[n2].reverse());
          return this.getFactory().buildGeometry(e4);
        } }, { key: "getTypeCode", value: function() {
          return V.TYPECODE_GEOMETRYCOLLECTION;
        } }, { key: "getDimension", value: function() {
          for (var t2 = Lt.FALSE, e4 = 0; e4 < this._geometries.length; e4++) t2 = Math.max(t2, this._geometries[e4].getDimension());
          return t2;
        } }, { key: "getLength", value: function() {
          for (var t2 = 0, e4 = 0; e4 < this._geometries.length; e4++) t2 += this._geometries[e4].getLength();
          return t2;
        } }, { key: "getNumPoints", value: function() {
          for (var t2 = 0, e4 = 0; e4 < this._geometries.length; e4++) t2 += this._geometries[e4].getNumPoints();
          return t2;
        } }, { key: "getNumGeometries", value: function() {
          return this._geometries.length;
        } }, { key: "compareToSameClass", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0], e4 = new Gt(At.asList(this._geometries)), n2 = new Gt(At.asList(t2._geometries));
            return this.compare(e4, n2);
          }
          if (2 === arguments.length) {
            for (var i2 = arguments[0], r2 = arguments[1], s3 = i2, a3 = this.getNumGeometries(), o2 = s3.getNumGeometries(), u5 = 0; u5 < a3 && u5 < o2; ) {
              var l2 = this.getGeometryN(u5), h2 = s3.getGeometryN(u5), c2 = l2.compareToSameClass(h2, r2);
              if (0 !== c2) return c2;
              u5++;
            }
            return u5 < a3 ? 1 : u5 < o2 ? -1 : 0;
          }
        } }, { key: "apply", value: function() {
          if (rt(arguments[0], Et)) for (var t2 = arguments[0], e4 = 0; e4 < this._geometries.length; e4++) this._geometries[e4].apply(t2);
          else if (rt(arguments[0], Rt)) {
            var n2 = arguments[0];
            if (0 === this._geometries.length) return null;
            for (var i2 = 0; i2 < this._geometries.length && (this._geometries[i2].apply(n2), !n2.isDone()); i2++) ;
            n2.isGeometryChanged() && this.geometryChanged();
          } else if (rt(arguments[0], Ct)) {
            var r2 = arguments[0];
            r2.filter(this);
            for (var s3 = 0; s3 < this._geometries.length; s3++) this._geometries[s3].apply(r2);
          } else if (rt(arguments[0], k)) {
            var a3 = arguments[0];
            a3.filter(this);
            for (var o2 = 0; o2 < this._geometries.length; o2++) this._geometries[o2].apply(a3);
          }
        } }, { key: "getBoundary", value: function() {
          return V.checkNotGeometryCollection(this), G.shouldNeverReachHere(), null;
        } }, { key: "getGeometryType", value: function() {
          return V.TYPENAME_GEOMETRYCOLLECTION;
        } }, { key: "isEmpty", value: function() {
          for (var t2 = 0; t2 < this._geometries.length; t2++) if (!this._geometries[t2].isEmpty()) return false;
          return true;
        } }], [{ key: "constructor_", value: function() {
          if (this._geometries = null, 0 === arguments.length) ;
          else if (2 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1];
            if (V.constructor_.call(this, e4), null === t2 && (t2 = []), V.hasNullElements(t2)) throw new m("geometries must not contain null elements");
            this._geometries = t2;
          }
        } }]), a2;
      }(V), zt = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "copyInternal", value: function() {
          for (var t2 = new Array(this._geometries.length).fill(null), e4 = 0; e4 < t2.length; e4++) t2[e4] = this._geometries[e4].copy();
          return new a2(t2, this._factory);
        } }, { key: "isValid", value: function() {
          return true;
        } }, { key: "equalsExact", value: function() {
          if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
            var t2 = arguments[0], e4 = arguments[1];
            return !!this.isEquivalentClass(t2) && f(r(a2.prototype), "equalsExact", this).call(this, t2, e4);
          }
          return f(r(a2.prototype), "equalsExact", this).apply(this, arguments);
        } }, { key: "getCoordinate", value: function() {
          if (1 === arguments.length && Number.isInteger(arguments[0])) {
            var t2 = arguments[0];
            return this._geometries[t2].getCoordinate();
          }
          return f(r(a2.prototype), "getCoordinate", this).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return Lt.FALSE;
        } }, { key: "getTypeCode", value: function() {
          return V.TYPECODE_MULTIPOINT;
        } }, { key: "getDimension", value: function() {
          return 0;
        } }, { key: "getBoundary", value: function() {
          return this.getFactory().createGeometryCollection();
        } }, { key: "getGeometryType", value: function() {
          return V.TYPENAME_MULTIPOINT;
        } }, { key: "interfaces_", get: function() {
          return [Ot];
        } }], [{ key: "constructor_", value: function() {
          var t2 = arguments[0], e4 = arguments[1];
          Yt.constructor_.call(this, t2, e4);
        } }]), a2;
      }(Yt), Xt = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "copyInternal", value: function() {
          return new a2(this._points.copy(), this._factory);
        } }, { key: "getBoundaryDimension", value: function() {
          return Lt.FALSE;
        } }, { key: "isClosed", value: function() {
          return !!this.isEmpty() || f(r(a2.prototype), "isClosed", this).call(this);
        } }, { key: "reverseInternal", value: function() {
          var t2 = this._points.copy();
          return St.reverse(t2), this.getFactory().createLinearRing(t2);
        } }, { key: "getTypeCode", value: function() {
          return V.TYPECODE_LINEARRING;
        } }, { key: "validateConstruction", value: function() {
          if (!this.isEmpty() && !f(r(a2.prototype), "isClosed", this).call(this)) throw new m("Points of LinearRing do not form a closed linestring");
          if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < a2.MINIMUM_VALID_SIZE) throw new m("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
        } }, { key: "getGeometryType", value: function() {
          return V.TYPENAME_LINEARRING;
        } }], [{ key: "constructor_", value: function() {
          var t2 = arguments[0], e4 = arguments[1];
          wt.constructor_.call(this, t2, e4), this.validateConstruction();
        } }]), a2;
      }(wt);
      Xt.MINIMUM_VALID_SIZE = 4;
      var Bt = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), e4 = r2.call(this), s2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(s2, [{ key: "setOrdinate", value: function(t2, e4) {
          switch (t2) {
            case s2.X:
              this.x = e4;
              break;
            case s2.Y:
              this.y = e4;
              break;
            default:
              throw new m("Invalid ordinate index: " + t2);
          }
        } }, { key: "getZ", value: function() {
          return X.NULL_ORDINATE;
        } }, { key: "getOrdinate", value: function(t2) {
          switch (t2) {
            case s2.X:
              return this.x;
            case s2.Y:
              return this.y;
          }
          throw new m("Invalid ordinate index: " + t2);
        } }, { key: "setZ", value: function(t2) {
          throw new m("CoordinateXY dimension 2 does not support z-ordinate");
        } }, { key: "copy", value: function() {
          return new s2(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ")";
        } }, { key: "setCoordinate", value: function(t2) {
          this.x = t2.x, this.y = t2.y, this.z = t2.getZ();
        } }], [{ key: "constructor_", value: function() {
          if (0 === arguments.length) X.constructor_.call(this);
          else if (1 === arguments.length) {
            if (arguments[0] instanceof s2) {
              var t2 = arguments[0];
              X.constructor_.call(this, t2.x, t2.y);
            } else if (arguments[0] instanceof X) {
              var e4 = arguments[0];
              X.constructor_.call(this, e4.x, e4.y);
            }
          } else if (2 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1];
            X.constructor_.call(this, n2, i2, X.NULL_ORDINATE);
          }
        } }]), s2;
      }(X);
      Bt.X = 0, Bt.Y = 1, Bt.Z = -1, Bt.M = -1;
      var Ut = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), e4 = r2.call(this), s2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(s2, [{ key: "getM", value: function() {
          return this._m;
        } }, { key: "setOrdinate", value: function(t2, e4) {
          switch (t2) {
            case s2.X:
              this.x = e4;
              break;
            case s2.Y:
              this.y = e4;
              break;
            case s2.M:
              this._m = e4;
              break;
            default:
              throw new m("Invalid ordinate index: " + t2);
          }
        } }, { key: "setM", value: function(t2) {
          this._m = t2;
        } }, { key: "getZ", value: function() {
          return X.NULL_ORDINATE;
        } }, { key: "getOrdinate", value: function(t2) {
          switch (t2) {
            case s2.X:
              return this.x;
            case s2.Y:
              return this.y;
            case s2.M:
              return this._m;
          }
          throw new m("Invalid ordinate index: " + t2);
        } }, { key: "setZ", value: function(t2) {
          throw new m("CoordinateXY dimension 2 does not support z-ordinate");
        } }, { key: "copy", value: function() {
          return new s2(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + " m=" + this.getM() + ")";
        } }, { key: "setCoordinate", value: function(t2) {
          this.x = t2.x, this.y = t2.y, this.z = t2.getZ(), this._m = t2.getM();
        } }], [{ key: "constructor_", value: function() {
          if (this._m = null, 0 === arguments.length) X.constructor_.call(this), this._m = 0;
          else if (1 === arguments.length) {
            if (arguments[0] instanceof s2) {
              var t2 = arguments[0];
              X.constructor_.call(this, t2.x, t2.y), this._m = t2._m;
            } else if (arguments[0] instanceof X) {
              var e4 = arguments[0];
              X.constructor_.call(this, e4.x, e4.y), this._m = this.getM();
            }
          } else if (3 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1], r3 = arguments[2];
            X.constructor_.call(this, n2, i2, X.NULL_ORDINATE), this._m = r3;
          }
        } }]), s2;
      }(X);
      Ut.X = 0, Ut.Y = 1, Ut.Z = -1, Ut.M = 2;
      var Vt = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), e4 = r2.call(this), s2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(s2, [{ key: "getM", value: function() {
          return this._m;
        } }, { key: "setOrdinate", value: function(t2, e4) {
          switch (t2) {
            case X.X:
              this.x = e4;
              break;
            case X.Y:
              this.y = e4;
              break;
            case X.Z:
              this.z = e4;
              break;
            case X.M:
              this._m = e4;
              break;
            default:
              throw new m("Invalid ordinate index: " + t2);
          }
        } }, { key: "setM", value: function(t2) {
          this._m = t2;
        } }, { key: "getOrdinate", value: function(t2) {
          switch (t2) {
            case X.X:
              return this.x;
            case X.Y:
              return this.y;
            case X.Z:
              return this.getZ();
            case X.M:
              return this.getM();
          }
          throw new m("Invalid ordinate index: " + t2);
        } }, { key: "copy", value: function() {
          return new s2(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ", " + this.getZ() + " m=" + this.getM() + ")";
        } }, { key: "setCoordinate", value: function(t2) {
          this.x = t2.x, this.y = t2.y, this.z = t2.getZ(), this._m = t2.getM();
        } }], [{ key: "constructor_", value: function() {
          if (this._m = null, 0 === arguments.length) X.constructor_.call(this), this._m = 0;
          else if (1 === arguments.length) {
            if (arguments[0] instanceof s2) {
              var t2 = arguments[0];
              X.constructor_.call(this, t2), this._m = t2._m;
            } else if (arguments[0] instanceof X) {
              var e4 = arguments[0];
              X.constructor_.call(this, e4), this._m = this.getM();
            }
          } else if (4 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1], r3 = arguments[2], a2 = arguments[3];
            X.constructor_.call(this, n2, i2, r3), this._m = a2;
          }
        } }]), s2;
      }(X), Ht = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "measures", value: function(t2) {
          return t2 instanceof Bt ? 0 : t2 instanceof Ut || t2 instanceof Vt ? 1 : 0;
        } }, { key: "dimension", value: function(t2) {
          return t2 instanceof Bt ? 2 : t2 instanceof Ut ? 3 : t2 instanceof Vt ? 4 : 3;
        } }, { key: "create", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return e3.create(t2, 0);
          }
          if (2 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1];
            return 2 === n2 ? new Bt() : 3 === n2 && 0 === i2 ? new X() : 3 === n2 && 1 === i2 ? new Ut() : 4 === n2 && 1 === i2 ? new Vt() : new X();
          }
        } }]), e3;
      }(), Zt = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "getCoordinate", value: function(t2) {
          return this.get(t2);
        } }, { key: "addAll", value: function() {
          if (2 === arguments.length && "boolean" == typeof arguments[1] && rt(arguments[0], Z)) {
            for (var t2 = arguments[0], e4 = arguments[1], n2 = false, i2 = t2.iterator(); i2.hasNext(); ) this.add(i2.next(), e4), n2 = true;
            return n2;
          }
          return f(r(a2.prototype), "addAll", this).apply(this, arguments);
        } }, { key: "clone", value: function() {
          for (var t2 = f(r(a2.prototype), "clone", this).call(this), e4 = 0; e4 < this.size(); e4++) t2.add(e4, this.get(e4).clone());
          return t2;
        } }, { key: "toCoordinateArray", value: function() {
          if (0 === arguments.length) return this.toArray(a2.coordArrayType);
          if (1 === arguments.length) {
            var t2 = arguments[0];
            if (t2) return this.toArray(a2.coordArrayType);
            for (var e4 = this.size(), n2 = new Array(e4).fill(null), i2 = 0; i2 < e4; i2++) n2[i2] = this.get(e4 - i2 - 1);
            return n2;
          }
        } }, { key: "add", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return f(r(a2.prototype), "add", this).call(this, t2);
          }
          if (2 === arguments.length) {
            if (arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
              var e4 = arguments[0], n2 = arguments[1];
              return this.add(e4, n2, true), true;
            }
            if (arguments[0] instanceof X && "boolean" == typeof arguments[1]) {
              var i2 = arguments[0], s3 = arguments[1];
              if (!s3 && this.size() >= 1) {
                var o2 = this.get(this.size() - 1);
                if (o2.equals2D(i2)) return null;
              }
              f(r(a2.prototype), "add", this).call(this, i2);
            } else if (arguments[0] instanceof Object && "boolean" == typeof arguments[1]) {
              var u5 = arguments[0], l2 = arguments[1];
              return this.add(u5, l2), true;
            }
          } else if (3 === arguments.length) {
            if ("boolean" == typeof arguments[2] && arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
              var h2 = arguments[0], c2 = arguments[1], v3 = arguments[2];
              if (v3) for (var g2 = 0; g2 < h2.length; g2++) this.add(h2[g2], c2);
              else for (var y3 = h2.length - 1; y3 >= 0; y3--) this.add(h2[y3], c2);
              return true;
            }
            if ("boolean" == typeof arguments[2] && Number.isInteger(arguments[0]) && arguments[1] instanceof X) {
              var d2 = arguments[0], _2 = arguments[1], p2 = arguments[2];
              if (!p2) {
                var m2 = this.size();
                if (m2 > 0) {
                  if (d2 > 0) {
                    var k2 = this.get(d2 - 1);
                    if (k2.equals2D(_2)) return null;
                  }
                  if (d2 < m2) {
                    var x3 = this.get(d2);
                    if (x3.equals2D(_2)) return null;
                  }
                }
              }
              f(r(a2.prototype), "add", this).call(this, d2, _2);
            }
          } else if (4 === arguments.length) {
            var I2 = arguments[0], E2 = arguments[1], N2 = arguments[2], T2 = arguments[3], S2 = 1;
            N2 > T2 && (S2 = -1);
            for (var L2 = N2; L2 !== T2; L2 += S2) this.add(I2[L2], E2);
            return true;
          }
        } }, { key: "closeRing", value: function() {
          if (this.size() > 0) {
            var t2 = this.get(0).copy();
            this.add(t2, false);
          }
        } }], [{ key: "constructor_", value: function() {
          if (0 === arguments.length) ;
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            this.ensureCapacity(t2.length), this.add(t2, true);
          } else if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            this.ensureCapacity(e4.length), this.add(e4, n2);
          }
        } }]), a2;
      }(yt);
      Zt.coordArrayType = new Array(0).fill(null);
      var jt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "isRing", value: function(t2) {
          return !(t2.length < 4) && !!t2[0].equals2D(t2[t2.length - 1]);
        } }, { key: "ptNotInList", value: function(t2, n2) {
          for (var i2 = 0; i2 < t2.length; i2++) {
            var r2 = t2[i2];
            if (e3.indexOf(r2, n2) < 0) return r2;
          }
          return null;
        } }, { key: "scroll", value: function(t2, n2) {
          var i2 = e3.indexOf(n2, t2);
          if (i2 < 0) return null;
          var r2 = new Array(t2.length).fill(null);
          mt.arraycopy(t2, i2, r2, 0, t2.length - i2), mt.arraycopy(t2, 0, r2, t2.length - i2, i2), mt.arraycopy(r2, 0, t2, 0, t2.length);
        } }, { key: "equals", value: function() {
          if (2 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1];
            if (t2 === e4) return true;
            if (null === t2 || null === e4) return false;
            if (t2.length !== e4.length) return false;
            for (var n2 = 0; n2 < t2.length; n2++) if (!t2[n2].equals(e4[n2])) return false;
            return true;
          }
          if (3 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1], s2 = arguments[2];
            if (i2 === r2) return true;
            if (null === i2 || null === r2) return false;
            if (i2.length !== r2.length) return false;
            for (var a2 = 0; a2 < i2.length; a2++) if (0 !== s2.compare(i2[a2], r2[a2])) return false;
            return true;
          }
        } }, { key: "intersection", value: function(t2, e4) {
          for (var n2 = new Zt(), i2 = 0; i2 < t2.length; i2++) e4.intersects(t2[i2]) && n2.add(t2[i2], true);
          return n2.toCoordinateArray();
        } }, { key: "measures", value: function(t2) {
          if (null === t2 || 0 === t2.length) return 0;
          var e4, n2 = 0, i2 = d(t2);
          try {
            for (i2.s(); !(e4 = i2.n()).done; ) {
              var r2 = e4.value;
              n2 = Math.max(n2, Ht.measures(r2));
            }
          } catch (t3) {
            i2.e(t3);
          } finally {
            i2.f();
          }
          return n2;
        } }, { key: "hasRepeatedPoints", value: function(t2) {
          for (var e4 = 1; e4 < t2.length; e4++) if (t2[e4 - 1].equals(t2[e4])) return true;
          return false;
        } }, { key: "removeRepeatedPoints", value: function(t2) {
          return e3.hasRepeatedPoints(t2) ? new Zt(t2, false).toCoordinateArray() : t2;
        } }, { key: "reverse", value: function(t2) {
          for (var e4 = t2.length - 1, n2 = Math.trunc(e4 / 2), i2 = 0; i2 <= n2; i2++) {
            var r2 = t2[i2];
            t2[i2] = t2[e4 - i2], t2[e4 - i2] = r2;
          }
        } }, { key: "removeNull", value: function(t2) {
          for (var e4 = 0, n2 = 0; n2 < t2.length; n2++) null !== t2[n2] && e4++;
          var i2 = new Array(e4).fill(null);
          if (0 === e4) return i2;
          for (var r2 = 0, s2 = 0; s2 < t2.length; s2++) null !== t2[s2] && (i2[r2++] = t2[s2]);
          return i2;
        } }, { key: "copyDeep", value: function() {
          if (1 === arguments.length) {
            for (var t2 = arguments[0], e4 = new Array(t2.length).fill(null), n2 = 0; n2 < t2.length; n2++) e4[n2] = t2[n2].copy();
            return e4;
          }
          if (5 === arguments.length) for (var i2 = arguments[0], r2 = arguments[1], s2 = arguments[2], a2 = arguments[3], o2 = arguments[4], u5 = 0; u5 < o2; u5++) s2[a2 + u5] = i2[r2 + u5].copy();
        } }, { key: "isEqualReversed", value: function(t2, e4) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var i2 = t2[n2], r2 = e4[t2.length - n2 - 1];
            if (0 !== i2.compareTo(r2)) return false;
          }
          return true;
        } }, { key: "envelope", value: function(t2) {
          for (var e4 = new U(), n2 = 0; n2 < t2.length; n2++) e4.expandToInclude(t2[n2]);
          return e4;
        } }, { key: "toCoordinateArray", value: function(t2) {
          return t2.toArray(e3.coordArrayType);
        } }, { key: "dimension", value: function(t2) {
          if (null === t2 || 0 === t2.length) return 3;
          var e4, n2 = 0, i2 = d(t2);
          try {
            for (i2.s(); !(e4 = i2.n()).done; ) {
              var r2 = e4.value;
              n2 = Math.max(n2, Ht.dimension(r2));
            }
          } catch (t3) {
            i2.e(t3);
          } finally {
            i2.f();
          }
          return n2;
        } }, { key: "atLeastNCoordinatesOrNothing", value: function(t2, e4) {
          return e4.length >= t2 ? e4 : [];
        } }, { key: "indexOf", value: function(t2, e4) {
          for (var n2 = 0; n2 < e4.length; n2++) if (t2.equals(e4[n2])) return n2;
          return -1;
        } }, { key: "increasingDirection", value: function(t2) {
          for (var e4 = 0; e4 < Math.trunc(t2.length / 2); e4++) {
            var n2 = t2.length - 1 - e4, i2 = t2[e4].compareTo(t2[n2]);
            if (0 !== i2) return i2;
          }
          return 1;
        } }, { key: "compare", value: function(t2, e4) {
          for (var n2 = 0; n2 < t2.length && n2 < e4.length; ) {
            var i2 = t2[n2].compareTo(e4[n2]);
            if (0 !== i2) return i2;
            n2++;
          }
          return n2 < e4.length ? -1 : n2 < t2.length ? 1 : 0;
        } }, { key: "minCoordinate", value: function(t2) {
          for (var e4 = null, n2 = 0; n2 < t2.length; n2++) (null === e4 || e4.compareTo(t2[n2]) > 0) && (e4 = t2[n2]);
          return e4;
        } }, { key: "extract", value: function(t2, e4, n2) {
          e4 = kt.clamp(e4, 0, t2.length);
          var i2 = (n2 = kt.clamp(n2, -1, t2.length)) - e4 + 1;
          n2 < 0 && (i2 = 0), e4 >= t2.length && (i2 = 0), n2 < e4 && (i2 = 0);
          var r2 = new Array(i2).fill(null);
          if (0 === i2) return r2;
          for (var s2 = 0, a2 = e4; a2 <= n2; a2++) r2[s2++] = t2[a2];
          return r2;
        } }]), e3;
      }(), Wt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "compare", value: function(t2, e4) {
          var n2 = t2, i2 = e4;
          return jt.compare(n2, i2);
        } }, { key: "interfaces_", get: function() {
          return [P];
        } }]), e3;
      }(), Kt = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "compare", value: function(t2, e4) {
          var n2 = t2, i2 = e4;
          if (n2.length < i2.length) return -1;
          if (n2.length > i2.length) return 1;
          if (0 === n2.length) return 0;
          var r2 = jt.compare(n2, i2);
          return jt.isEqualReversed(n2, i2) ? 0 : r2;
        } }, { key: "OLDcompare", value: function(t2, e4) {
          var n2 = t2, i2 = e4;
          if (n2.length < i2.length) return -1;
          if (n2.length > i2.length) return 1;
          if (0 === n2.length) return 0;
          for (var r2 = jt.increasingDirection(n2), s2 = jt.increasingDirection(i2), a2 = r2 > 0 ? 0 : n2.length - 1, o2 = s2 > 0 ? 0 : n2.length - 1, u5 = 0; u5 < n2.length; u5++) {
            var l2 = n2[a2].compareTo(i2[o2]);
            if (0 !== l2) return l2;
            a2 += r2, o2 += s2;
          }
          return 0;
        } }, { key: "interfaces_", get: function() {
          return [P];
        } }]), e3;
      }();
      jt.ForwardComparator = Wt, jt.BidirectionalComparator = Kt, jt.coordArrayType = new Array(0).fill(null);
      var Jt = function() {
        function e3(n2) {
          t(this, e3), this.str = n2;
        }
        return n(e3, [{ key: "append", value: function(t2) {
          this.str += t2;
        } }, { key: "setCharAt", value: function(t2, e4) {
          this.str = this.str.substr(0, t2) + e4 + this.str.substr(t2 + 1);
        } }, { key: "toString", value: function() {
          return this.str;
        } }]), e3;
      }(), Qt = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getM", value: function(t2) {
          return this.hasM() ? this._coordinates[t2].getM() : A.NaN;
        } }, { key: "setOrdinate", value: function(t2, e4, n2) {
          switch (e4) {
            case ht.X:
              this._coordinates[t2].x = n2;
              break;
            case ht.Y:
              this._coordinates[t2].y = n2;
              break;
            default:
              this._coordinates[t2].setOrdinate(e4, n2);
          }
        } }, { key: "getZ", value: function(t2) {
          return this.hasZ() ? this._coordinates[t2].getZ() : A.NaN;
        } }, { key: "size", value: function() {
          return this._coordinates.length;
        } }, { key: "getOrdinate", value: function(t2, e4) {
          switch (e4) {
            case ht.X:
              return this._coordinates[t2].x;
            case ht.Y:
              return this._coordinates[t2].y;
            default:
              return this._coordinates[t2].getOrdinate(e4);
          }
        } }, { key: "getCoordinate", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return this._coordinates[t2];
          }
          if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            n2.setCoordinate(this._coordinates[e4]);
          }
        } }, { key: "getCoordinateCopy", value: function(t2) {
          var e4 = this.createCoordinate();
          return e4.setCoordinate(this._coordinates[t2]), e4;
        } }, { key: "createCoordinate", value: function() {
          return Ht.create(this.getDimension(), this.getMeasures());
        } }, { key: "getDimension", value: function() {
          return this._dimension;
        } }, { key: "getX", value: function(t2) {
          return this._coordinates[t2].x;
        } }, { key: "getMeasures", value: function() {
          return this._measures;
        } }, { key: "expandEnvelope", value: function(t2) {
          for (var e4 = 0; e4 < this._coordinates.length; e4++) t2.expandToInclude(this._coordinates[e4]);
          return t2;
        } }, { key: "copy", value: function() {
          for (var t2 = new Array(this.size()).fill(null), n2 = 0; n2 < this._coordinates.length; n2++) {
            var i2 = this.createCoordinate();
            i2.setCoordinate(this._coordinates[n2]), t2[n2] = i2;
          }
          return new e3(t2, this._dimension, this._measures);
        } }, { key: "toString", value: function() {
          if (this._coordinates.length > 0) {
            var t2 = new Jt(17 * this._coordinates.length);
            t2.append("("), t2.append(this._coordinates[0]);
            for (var e4 = 1; e4 < this._coordinates.length; e4++) t2.append(", "), t2.append(this._coordinates[e4]);
            return t2.append(")"), t2.toString();
          }
          return "()";
        } }, { key: "getY", value: function(t2) {
          return this._coordinates[t2].y;
        } }, { key: "toCoordinateArray", value: function() {
          return this._coordinates;
        } }, { key: "interfaces_", get: function() {
          return [ht, E];
        } }], [{ key: "constructor_", value: function() {
          if (this._dimension = 3, this._measures = 0, this._coordinates = null, 1 === arguments.length) {
            if (arguments[0] instanceof Array) {
              var t2 = arguments[0];
              e3.constructor_.call(this, t2, jt.dimension(t2), jt.measures(t2));
            } else if (Number.isInteger(arguments[0])) {
              var n2 = arguments[0];
              this._coordinates = new Array(n2).fill(null);
              for (var i2 = 0; i2 < n2; i2++) this._coordinates[i2] = new X();
            } else if (rt(arguments[0], ht)) {
              var r2 = arguments[0];
              if (null === r2) return this._coordinates = new Array(0).fill(null), null;
              this._dimension = r2.getDimension(), this._measures = r2.getMeasures(), this._coordinates = new Array(r2.size()).fill(null);
              for (var s2 = 0; s2 < this._coordinates.length; s2++) this._coordinates[s2] = r2.getCoordinateCopy(s2);
            }
          } else if (2 === arguments.length) {
            if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
              var a2 = arguments[0], o2 = arguments[1];
              e3.constructor_.call(this, a2, o2, jt.measures(a2));
            } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
              var u5 = arguments[0], l2 = arguments[1];
              this._coordinates = new Array(u5).fill(null), this._dimension = l2;
              for (var h2 = 0; h2 < u5; h2++) this._coordinates[h2] = Ht.create(l2);
            }
          } else if (3 === arguments.length) {
            if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
              var c2 = arguments[0], f2 = arguments[1], v3 = arguments[2];
              this._dimension = f2, this._measures = v3, this._coordinates = null === c2 ? new Array(0).fill(null) : c2;
            } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
              var g2 = arguments[0], y3 = arguments[1], d2 = arguments[2];
              this._coordinates = new Array(g2).fill(null), this._dimension = y3, this._measures = d2;
              for (var _2 = 0; _2 < g2; _2++) this._coordinates[_2] = this.createCoordinate();
            }
          }
        } }]), e3;
      }(), $t = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "readResolve", value: function() {
          return e3.instance();
        } }, { key: "create", value: function() {
          if (1 === arguments.length) {
            if (arguments[0] instanceof Array) {
              var t2 = arguments[0];
              return new Qt(t2);
            }
            if (rt(arguments[0], ht)) {
              var e4 = arguments[0];
              return new Qt(e4);
            }
          } else {
            if (2 === arguments.length) {
              var n2 = arguments[0], i2 = arguments[1];
              return i2 > 3 && (i2 = 3), i2 < 2 && (i2 = 2), new Qt(n2, i2);
            }
            if (3 === arguments.length) {
              var r2 = arguments[0], s2 = arguments[1], a2 = arguments[2], o2 = s2 - a2;
              return a2 > 1 && (a2 = 1), o2 > 3 && (o2 = 3), o2 < 2 && (o2 = 2), new Qt(r2, o2 + a2, a2);
            }
          }
        } }, { key: "interfaces_", get: function() {
          return [It, E];
        } }], [{ key: "instance", value: function() {
          return e3.instanceObject;
        } }]), e3;
      }();
      $t.instanceObject = new $t();
      var te = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "copyInternal", value: function() {
          for (var t2 = new Array(this._geometries.length).fill(null), e4 = 0; e4 < t2.length; e4++) t2[e4] = this._geometries[e4].copy();
          return new a2(t2, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
            var t2 = arguments[0], e4 = arguments[1];
            return !!this.isEquivalentClass(t2) && f(r(a2.prototype), "equalsExact", this).call(this, t2, e4);
          }
          return f(r(a2.prototype), "equalsExact", this).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return 1;
        } }, { key: "getTypeCode", value: function() {
          return V.TYPECODE_MULTIPOLYGON;
        } }, { key: "getDimension", value: function() {
          return 2;
        } }, { key: "getBoundary", value: function() {
          if (this.isEmpty()) return this.getFactory().createMultiLineString();
          for (var t2 = new yt(), e4 = 0; e4 < this._geometries.length; e4++) for (var n2 = this._geometries[e4].getBoundary(), i2 = 0; i2 < n2.getNumGeometries(); i2++) t2.add(n2.getGeometryN(i2));
          var r2 = new Array(t2.size()).fill(null);
          return this.getFactory().createMultiLineString(t2.toArray(r2));
        } }, { key: "getGeometryType", value: function() {
          return V.TYPENAME_MULTIPOLYGON;
        } }, { key: "interfaces_", get: function() {
          return [Pt];
        } }], [{ key: "constructor_", value: function() {
          var t2 = arguments[0], e4 = arguments[1];
          Yt.constructor_.call(this, t2, e4);
        } }]), a2;
      }(Yt), ee = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "get", value: function() {
        } }, { key: "put", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "values", value: function() {
        } }, { key: "entrySet", value: function() {
        } }]), e3;
      }(), ne = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), (e4 = r2.call(this)).map = /* @__PURE__ */ new Map(), e4;
        }
        return n(s2, [{ key: "get", value: function(t2) {
          return this.map.get(t2) || null;
        } }, { key: "put", value: function(t2, e4) {
          return this.map.set(t2, e4), e4;
        } }, { key: "values", value: function() {
          for (var t2 = new yt(), e4 = this.map.values(), n2 = e4.next(); !n2.done; ) t2.add(n2.value), n2 = e4.next();
          return t2;
        } }, { key: "entrySet", value: function() {
          var t2 = new J();
          return this.map.entries().forEach(function(e4) {
            return t2.add(e4);
          }), t2;
        } }, { key: "size", value: function() {
          return this.map.size();
        } }]), s2;
      }(ee), ie = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "equals", value: function(t2) {
          if (!(t2 instanceof e3)) return false;
          var n2 = t2;
          return this._modelType === n2._modelType && this._scale === n2._scale;
        } }, { key: "compareTo", value: function(t2) {
          var e4 = t2, n2 = this.getMaximumSignificantDigits(), i2 = e4.getMaximumSignificantDigits();
          return at.compare(n2, i2);
        } }, { key: "getScale", value: function() {
          return this._scale;
        } }, { key: "isFloating", value: function() {
          return this._modelType === e3.FLOATING || this._modelType === e3.FLOATING_SINGLE;
        } }, { key: "getType", value: function() {
          return this._modelType;
        } }, { key: "toString", value: function() {
          var t2 = "UNKNOWN";
          return this._modelType === e3.FLOATING ? t2 = "Floating" : this._modelType === e3.FLOATING_SINGLE ? t2 = "Floating-Single" : this._modelType === e3.FIXED && (t2 = "Fixed (Scale=" + this.getScale() + ")"), t2;
        } }, { key: "makePrecise", value: function() {
          if ("number" == typeof arguments[0]) {
            var t2 = arguments[0];
            if (A.isNaN(t2)) return t2;
            if (this._modelType === e3.FLOATING_SINGLE) {
              return t2;
            }
            return this._modelType === e3.FIXED ? Math.round(t2 * this._scale) / this._scale : t2;
          }
          if (arguments[0] instanceof X) {
            var n2 = arguments[0];
            if (this._modelType === e3.FLOATING) return null;
            n2.x = this.makePrecise(n2.x), n2.y = this.makePrecise(n2.y);
          }
        } }, { key: "getMaximumSignificantDigits", value: function() {
          var t2 = 16;
          return this._modelType === e3.FLOATING ? t2 = 16 : this._modelType === e3.FLOATING_SINGLE ? t2 = 6 : this._modelType === e3.FIXED && (t2 = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t2;
        } }, { key: "setScale", value: function(t2) {
          this._scale = Math.abs(t2);
        } }, { key: "interfaces_", get: function() {
          return [E, x2];
        } }], [{ key: "constructor_", value: function() {
          if (this._modelType = null, this._scale = null, 0 === arguments.length) this._modelType = e3.FLOATING;
          else if (1 === arguments.length) {
            if (arguments[0] instanceof re) {
              var t2 = arguments[0];
              this._modelType = t2, t2 === e3.FIXED && this.setScale(1);
            } else if ("number" == typeof arguments[0]) {
              var n2 = arguments[0];
              this._modelType = e3.FIXED, this.setScale(n2);
            } else if (arguments[0] instanceof e3) {
              var i2 = arguments[0];
              this._modelType = i2._modelType, this._scale = i2._scale;
            }
          }
        } }, { key: "mostPrecise", value: function(t2, e4) {
          return t2.compareTo(e4) >= 0 ? t2 : e4;
        } }]), e3;
      }(), re = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "readResolve", value: function() {
          return e3.nameToTypeMap.get(this._name);
        } }, { key: "toString", value: function() {
          return this._name;
        } }, { key: "interfaces_", get: function() {
          return [E];
        } }], [{ key: "constructor_", value: function() {
          this._name = null;
          var t2 = arguments[0];
          this._name = t2, e3.nameToTypeMap.put(t2, this);
        } }]), e3;
      }();
      re.nameToTypeMap = new ne(), ie.Type = re, ie.FIXED = new re("FIXED"), ie.FLOATING = new re("FLOATING"), ie.FLOATING_SINGLE = new re("FLOATING SINGLE"), ie.maximumPreciseValue = 9007199254740992;
      var se = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "copyInternal", value: function() {
          for (var t2 = new Array(this._geometries.length).fill(null), e4 = 0; e4 < t2.length; e4++) t2[e4] = this._geometries[e4].copy();
          return new a2(t2, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof V) {
            var t2 = arguments[0], e4 = arguments[1];
            return !!this.isEquivalentClass(t2) && f(r(a2.prototype), "equalsExact", this).call(this, t2, e4);
          }
          return f(r(a2.prototype), "equalsExact", this).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return this.isClosed() ? Lt.FALSE : 0;
        } }, { key: "isClosed", value: function() {
          if (this.isEmpty()) return false;
          for (var t2 = 0; t2 < this._geometries.length; t2++) if (!this._geometries[t2].isClosed()) return false;
          return true;
        } }, { key: "getTypeCode", value: function() {
          return V.TYPECODE_MULTILINESTRING;
        } }, { key: "getDimension", value: function() {
          return 1;
        } }, { key: "getBoundary", value: function() {
          throw new W();
        } }, { key: "getGeometryType", value: function() {
          return V.TYPENAME_MULTILINESTRING;
        } }, { key: "interfaces_", get: function() {
          return [Tt];
        } }], [{ key: "constructor_", value: function() {
          var t2 = arguments[0], e4 = arguments[1];
          Yt.constructor_.call(this, t2, e4);
        } }]), a2;
      }(Yt), ae = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "createEmpty", value: function(t2) {
          switch (t2) {
            case -1:
              return this.createGeometryCollection();
            case 0:
              return this.createPoint();
            case 1:
              return this.createLineString();
            case 2:
              return this.createPolygon();
            default:
              throw new m("Invalid dimension: " + t2);
          }
        } }, { key: "toGeometry", value: function(t2) {
          return t2.isNull() ? this.createPoint() : t2.getMinX() === t2.getMaxX() && t2.getMinY() === t2.getMaxY() ? this.createPoint(new X(t2.getMinX(), t2.getMinY())) : t2.getMinX() === t2.getMaxX() || t2.getMinY() === t2.getMaxY() ? this.createLineString([new X(t2.getMinX(), t2.getMinY()), new X(t2.getMaxX(), t2.getMaxY())]) : this.createPolygon(this.createLinearRing([new X(t2.getMinX(), t2.getMinY()), new X(t2.getMinX(), t2.getMaxY()), new X(t2.getMaxX(), t2.getMaxY()), new X(t2.getMaxX(), t2.getMinY()), new X(t2.getMinX(), t2.getMinY())]), null);
        } }, { key: "createLineString", value: function() {
          if (0 === arguments.length) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
          if (1 === arguments.length) {
            if (arguments[0] instanceof Array) {
              var t2 = arguments[0];
              return this.createLineString(null !== t2 ? this.getCoordinateSequenceFactory().create(t2) : null);
            }
            if (rt(arguments[0], ht)) {
              var e4 = arguments[0];
              return new wt(e4, this);
            }
          }
        } }, { key: "createMultiLineString", value: function() {
          if (0 === arguments.length) return new se(null, this);
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return new se(t2, this);
          }
        } }, { key: "buildGeometry", value: function(t2) {
          for (var n2 = null, i2 = false, r2 = false, s2 = t2.iterator(); s2.hasNext(); ) {
            var a2 = s2.next(), o2 = a2.getTypeCode();
            null === n2 && (n2 = o2), o2 !== n2 && (i2 = true), a2 instanceof Yt && (r2 = true);
          }
          if (null === n2) return this.createGeometryCollection();
          if (i2 || r2) return this.createGeometryCollection(e3.toGeometryArray(t2));
          var u5 = t2.iterator().next();
          if (t2.size() > 1) {
            if (u5 instanceof Dt) return this.createMultiPolygon(e3.toPolygonArray(t2));
            if (u5 instanceof wt) return this.createMultiLineString(e3.toLineStringArray(t2));
            if (u5 instanceof bt) return this.createMultiPoint(e3.toPointArray(t2));
            G.shouldNeverReachHere("Unhandled geometry type: " + u5.getGeometryType());
          }
          return u5;
        } }, { key: "createMultiPointFromCoords", value: function(t2) {
          return this.createMultiPoint(null !== t2 ? this.getCoordinateSequenceFactory().create(t2) : null);
        } }, { key: "createPoint", value: function() {
          if (0 === arguments.length) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
          if (1 === arguments.length) {
            if (arguments[0] instanceof X) {
              var t2 = arguments[0];
              return this.createPoint(null !== t2 ? this.getCoordinateSequenceFactory().create([t2]) : null);
            }
            if (rt(arguments[0], ht)) {
              var e4 = arguments[0];
              return new bt(e4, this);
            }
          }
        } }, { key: "getCoordinateSequenceFactory", value: function() {
          return this._coordinateSequenceFactory;
        } }, { key: "createPolygon", value: function() {
          if (0 === arguments.length) return this.createPolygon(null, null);
          if (1 === arguments.length) {
            if (rt(arguments[0], ht)) {
              var t2 = arguments[0];
              return this.createPolygon(this.createLinearRing(t2));
            }
            if (arguments[0] instanceof Array) {
              var e4 = arguments[0];
              return this.createPolygon(this.createLinearRing(e4));
            }
            if (arguments[0] instanceof Xt) {
              var n2 = arguments[0];
              return this.createPolygon(n2, null);
            }
          } else if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1];
            return new Dt(i2, r2, this);
          }
        } }, { key: "getSRID", value: function() {
          return this._SRID;
        } }, { key: "createGeometryCollection", value: function() {
          if (0 === arguments.length) return new Yt(null, this);
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return new Yt(t2, this);
          }
        } }, { key: "getPrecisionModel", value: function() {
          return this._precisionModel;
        } }, { key: "createLinearRing", value: function() {
          if (0 === arguments.length) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
          if (1 === arguments.length) {
            if (arguments[0] instanceof Array) {
              var t2 = arguments[0];
              return this.createLinearRing(null !== t2 ? this.getCoordinateSequenceFactory().create(t2) : null);
            }
            if (rt(arguments[0], ht)) {
              var e4 = arguments[0];
              return new Xt(e4, this);
            }
          }
        } }, { key: "createMultiPolygon", value: function() {
          if (0 === arguments.length) return new te(null, this);
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return new te(t2, this);
          }
        } }, { key: "createMultiPoint", value: function() {
          if (0 === arguments.length) return new zt(null, this);
          if (1 === arguments.length) {
            if (arguments[0] instanceof Array) {
              var t2 = arguments[0];
              return new zt(t2, this);
            }
            if (rt(arguments[0], ht)) {
              var e4 = arguments[0];
              if (null === e4) return this.createMultiPoint(new Array(0).fill(null));
              for (var n2 = new Array(e4.size()).fill(null), i2 = 0; i2 < e4.size(); i2++) {
                var r2 = this.getCoordinateSequenceFactory().create(1, e4.getDimension(), e4.getMeasures());
                St.copy(e4, i2, r2, 0, 1), n2[i2] = this.createPoint(r2);
              }
              return this.createMultiPoint(n2);
            }
          }
        } }, { key: "interfaces_", get: function() {
          return [E];
        } }], [{ key: "constructor_", value: function() {
          if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, 0 === arguments.length) e3.constructor_.call(this, new ie(), 0);
          else if (1 === arguments.length) {
            if (rt(arguments[0], It)) {
              var t2 = arguments[0];
              e3.constructor_.call(this, new ie(), 0, t2);
            } else if (arguments[0] instanceof ie) {
              var n2 = arguments[0];
              e3.constructor_.call(this, n2, 0, e3.getDefaultCoordinateSequenceFactory());
            }
          } else if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1];
            e3.constructor_.call(this, i2, r2, e3.getDefaultCoordinateSequenceFactory());
          } else if (3 === arguments.length) {
            var s2 = arguments[0], a2 = arguments[1], o2 = arguments[2];
            this._precisionModel = s2, this._coordinateSequenceFactory = o2, this._SRID = a2;
          }
        } }, { key: "toMultiPolygonArray", value: function(t2) {
          var e4 = new Array(t2.size()).fill(null);
          return t2.toArray(e4);
        } }, { key: "toGeometryArray", value: function(t2) {
          if (null === t2) return null;
          var e4 = new Array(t2.size()).fill(null);
          return t2.toArray(e4);
        } }, { key: "getDefaultCoordinateSequenceFactory", value: function() {
          return $t.instance();
        } }, { key: "toMultiLineStringArray", value: function(t2) {
          var e4 = new Array(t2.size()).fill(null);
          return t2.toArray(e4);
        } }, { key: "toLineStringArray", value: function(t2) {
          var e4 = new Array(t2.size()).fill(null);
          return t2.toArray(e4);
        } }, { key: "toMultiPointArray", value: function(t2) {
          var e4 = new Array(t2.size()).fill(null);
          return t2.toArray(e4);
        } }, { key: "toLinearRingArray", value: function(t2) {
          var e4 = new Array(t2.size()).fill(null);
          return t2.toArray(e4);
        } }, { key: "toPointArray", value: function(t2) {
          var e4 = new Array(t2.size()).fill(null);
          return t2.toArray(e4);
        } }, { key: "toPolygonArray", value: function(t2) {
          var e4 = new Array(t2.size()).fill(null);
          return t2.toArray(e4);
        } }, { key: "createPointFromInternalCoord", value: function(t2, e4) {
          return e4.getPrecisionModel().makePrecise(t2), e4.getFactory().createPoint(t2);
        } }]), e3;
      }(), oe = "XY", ue = "XYZ", le = "XYM", he = "XYZM", ce2 = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" }, fe = "EMPTY", ve = 1, ge = 2, ye = 3, de2 = 4, _e = 5, pe = 6, me = {};
      for (var ke in ce2) me[ke] = ce2[ke].toUpperCase();
      var xe = function() {
        function e3(n2) {
          t(this, e3), this.wkt = n2, this.index_ = -1;
        }
        return n(e3, [{ key: "isAlpha_", value: function(t2) {
          return t2 >= "a" && t2 <= "z" || t2 >= "A" && t2 <= "Z";
        } }, { key: "isNumeric_", value: function(t2, e4) {
          return t2 >= "0" && t2 <= "9" || "." == t2 && !(void 0 !== e4 && e4);
        } }, { key: "isWhiteSpace_", value: function(t2) {
          return " " == t2 || "	" == t2 || "\r" == t2 || "\n" == t2;
        } }, { key: "nextChar_", value: function() {
          return this.wkt.charAt(++this.index_);
        } }, { key: "nextToken", value: function() {
          var t2, e4 = this.nextChar_(), n2 = this.index_, i2 = e4;
          if ("(" == e4) t2 = ge;
          else if ("," == e4) t2 = _e;
          else if (")" == e4) t2 = ye;
          else if (this.isNumeric_(e4) || "-" == e4) t2 = de2, i2 = this.readNumber_();
          else if (this.isAlpha_(e4)) t2 = ve, i2 = this.readText_();
          else {
            if (this.isWhiteSpace_(e4)) return this.nextToken();
            if ("" !== e4) throw new Error("Unexpected character: " + e4);
            t2 = pe;
          }
          return { position: n2, value: i2, type: t2 };
        } }, { key: "readNumber_", value: function() {
          var t2, e4 = this.index_, n2 = false, i2 = false;
          do {
            "." == t2 ? n2 = true : "e" != t2 && "E" != t2 || (i2 = true), t2 = this.nextChar_();
          } while (this.isNumeric_(t2, n2) || !i2 && ("e" == t2 || "E" == t2) || i2 && ("-" == t2 || "+" == t2));
          return parseFloat(this.wkt.substring(e4, this.index_--));
        } }, { key: "readText_", value: function() {
          var t2, e4 = this.index_;
          do {
            t2 = this.nextChar_();
          } while (this.isAlpha_(t2));
          return this.wkt.substring(e4, this.index_--).toUpperCase();
        } }]), e3;
      }(), Ie = function() {
        function e3(n2, i2) {
          t(this, e3), this.lexer_ = n2, this.token_, this.layout_ = oe, this.factory = i2;
        }
        return n(e3, [{ key: "consume_", value: function() {
          this.token_ = this.lexer_.nextToken();
        } }, { key: "isTokenType", value: function(t2) {
          return this.token_.type == t2;
        } }, { key: "match", value: function(t2) {
          var e4 = this.isTokenType(t2);
          return e4 && this.consume_(), e4;
        } }, { key: "parse", value: function() {
          return this.consume_(), this.parseGeometry_();
        } }, { key: "parseGeometryLayout_", value: function() {
          var t2 = oe, e4 = this.token_;
          if (this.isTokenType(ve)) {
            var n2 = e4.value;
            "Z" === n2 ? t2 = ue : "M" === n2 ? t2 = le : "ZM" === n2 && (t2 = he), t2 !== oe && this.consume_();
          }
          return t2;
        } }, { key: "parseGeometryCollectionText_", value: function() {
          if (this.match(ge)) {
            var t2 = [];
            do {
              t2.push(this.parseGeometry_());
            } while (this.match(_e));
            if (this.match(ye)) return t2;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePointText_", value: function() {
          if (this.match(ge)) {
            var t2 = this.parsePoint_();
            if (this.match(ye)) return t2;
          } else if (this.isEmptyGeometry_()) return null;
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseLineStringText_", value: function() {
          if (this.match(ge)) {
            var t2 = this.parsePointList_();
            if (this.match(ye)) return t2;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePolygonText_", value: function() {
          if (this.match(ge)) {
            var t2 = this.parseLineStringTextList_();
            if (this.match(ye)) return t2;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiPointText_", value: function() {
          var t2;
          if (this.match(ge)) {
            if (t2 = this.token_.type == ge ? this.parsePointTextList_() : this.parsePointList_(), this.match(ye)) return t2;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiLineStringText_", value: function() {
          if (this.match(ge)) {
            var t2 = this.parseLineStringTextList_();
            if (this.match(ye)) return t2;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiPolygonText_", value: function() {
          if (this.match(ge)) {
            var t2 = this.parsePolygonTextList_();
            if (this.match(ye)) return t2;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePoint_", value: function() {
          for (var t2 = [], e4 = this.layout_.length, n2 = 0; n2 < e4; ++n2) {
            var i2 = this.token_;
            if (!this.match(de2)) break;
            t2.push(i2.value);
          }
          if (t2.length == e4) return t2;
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePointList_", value: function() {
          for (var t2 = [this.parsePoint_()]; this.match(_e); ) t2.push(this.parsePoint_());
          return t2;
        } }, { key: "parsePointTextList_", value: function() {
          for (var t2 = [this.parsePointText_()]; this.match(_e); ) t2.push(this.parsePointText_());
          return t2;
        } }, { key: "parseLineStringTextList_", value: function() {
          for (var t2 = [this.parseLineStringText_()]; this.match(_e); ) t2.push(this.parseLineStringText_());
          return t2;
        } }, { key: "parsePolygonTextList_", value: function() {
          for (var t2 = [this.parsePolygonText_()]; this.match(_e); ) t2.push(this.parsePolygonText_());
          return t2;
        } }, { key: "isEmptyGeometry_", value: function() {
          var t2 = this.isTokenType(ve) && this.token_.value == fe;
          return t2 && this.consume_(), t2;
        } }, { key: "formatErrorMessage_", value: function() {
          return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
        } }, { key: "parseGeometry_", value: function() {
          var t2 = this.factory, e4 = function(t3) {
            return o(X, v2(t3));
          }, n2 = function(n3) {
            var i3 = n3.map(function(n4) {
              return t2.createLinearRing(n4.map(e4));
            });
            return i3.length > 1 ? t2.createPolygon(i3[0], i3.slice(1)) : t2.createPolygon(i3[0]);
          }, i2 = this.token_;
          if (this.match(ve)) {
            var r2 = i2.value;
            if (this.layout_ = this.parseGeometryLayout_(), "GEOMETRYCOLLECTION" == r2) {
              var s2 = this.parseGeometryCollectionText_();
              return t2.createGeometryCollection(s2);
            }
            switch (r2) {
              case "POINT":
                var a2 = this.parsePointText_();
                return a2 ? t2.createPoint(o(X, v2(a2))) : t2.createPoint();
              case "LINESTRING":
                var u5 = this.parseLineStringText_().map(e4);
                return t2.createLineString(u5);
              case "LINEARRING":
                var l2 = this.parseLineStringText_().map(e4);
                return t2.createLinearRing(l2);
              case "POLYGON":
                var h2 = this.parsePolygonText_();
                return h2 && 0 !== h2.length ? n2(h2) : t2.createPolygon();
              case "MULTIPOINT":
                var c2 = this.parseMultiPointText_();
                if (!c2 || 0 === c2.length) return t2.createMultiPoint();
                var f2 = c2.map(e4).map(function(e6) {
                  return t2.createPoint(e6);
                });
                return t2.createMultiPoint(f2);
              case "MULTILINESTRING":
                var g2 = this.parseMultiLineStringText_().map(function(n3) {
                  return t2.createLineString(n3.map(e4));
                });
                return t2.createMultiLineString(g2);
              case "MULTIPOLYGON":
                var y3 = this.parseMultiPolygonText_();
                if (!y3 || 0 === y3.length) return t2.createMultiPolygon();
                var d2 = y3.map(n2);
                return t2.createMultiPolygon(d2);
              default:
                throw new Error("Invalid geometry type: " + r2);
            }
          }
          throw new Error(this.formatErrorMessage_());
        } }]), e3;
      }();
      function Ee(t2) {
        if (t2.isEmpty()) return "";
        var e3 = t2.getCoordinate(), n2 = [e3.x, e3.y];
        return void 0 === e3.z || Number.isNaN(e3.z) || n2.push(e3.z), void 0 === e3.m || Number.isNaN(e3.m) || n2.push(e3.m), n2.join(" ");
      }
      function Ne(t2) {
        for (var e3 = t2.getCoordinates().map(function(t3) {
          var e4 = [t3.x, t3.y];
          return void 0 === t3.z || Number.isNaN(t3.z) || e4.push(t3.z), void 0 === t3.m || Number.isNaN(t3.m) || e4.push(t3.m), e4;
        }), n2 = [], i2 = 0, r2 = e3.length; i2 < r2; ++i2) n2.push(e3[i2].join(" "));
        return n2.join(", ");
      }
      function Te(t2) {
        var e3 = [];
        e3.push("(" + Ne(t2.getExteriorRing()) + ")");
        for (var n2 = 0, i2 = t2.getNumInteriorRing(); n2 < i2; ++n2) e3.push("(" + Ne(t2.getInteriorRingN(n2)) + ")");
        return e3.join(", ");
      }
      var Se = { Point: Ee, LineString: Ne, LinearRing: Ne, Polygon: Te, MultiPoint: function(t2) {
        for (var e3 = [], n2 = 0, i2 = t2.getNumGeometries(); n2 < i2; ++n2) e3.push("(" + Ee(t2.getGeometryN(n2)) + ")");
        return e3.join(", ");
      }, MultiLineString: function(t2) {
        for (var e3 = [], n2 = 0, i2 = t2.getNumGeometries(); n2 < i2; ++n2) e3.push("(" + Ne(t2.getGeometryN(n2)) + ")");
        return e3.join(", ");
      }, MultiPolygon: function(t2) {
        for (var e3 = [], n2 = 0, i2 = t2.getNumGeometries(); n2 < i2; ++n2) e3.push("(" + Te(t2.getGeometryN(n2)) + ")");
        return e3.join(", ");
      }, GeometryCollection: function(t2) {
        for (var e3 = [], n2 = 0, i2 = t2.getNumGeometries(); n2 < i2; ++n2) e3.push(Le(t2.getGeometryN(n2)));
        return e3.join(", ");
      } };
      function Le(t2) {
        var e3 = t2.getGeometryType(), n2 = Se[e3];
        e3 = e3.toUpperCase();
        var i2 = function(t3) {
          var e4 = "";
          if (t3.isEmpty()) return e4;
          var n3 = t3.getCoordinate();
          return void 0 === n3.z || Number.isNaN(n3.z) || (e4 += "Z"), void 0 === n3.m || Number.isNaN(n3.m) || (e4 += "M"), e4;
        }(t2);
        return i2.length > 0 && (e3 += " " + i2), t2.isEmpty() ? e3 + " " + fe : e3 + " (" + n2(t2) + ")";
      }
      var Ce = function() {
        function e3(n2) {
          t(this, e3), this.geometryFactory = n2 || new ae(), this.precisionModel = this.geometryFactory.getPrecisionModel();
        }
        return n(e3, [{ key: "read", value: function(t2) {
          var e4 = new xe(t2);
          return new Ie(e4, this.geometryFactory).parse();
        } }, { key: "write", value: function(t2) {
          return Le(t2);
        } }]), e3;
      }(), Re = function() {
        function e3(n2) {
          t(this, e3), this.parser = new Ce(n2);
        }
        return n(e3, [{ key: "write", value: function(t2) {
          return this.parser.write(t2);
        } }], [{ key: "toLineString", value: function(t2, e4) {
          if (2 !== arguments.length) throw new Error("Not implemented");
          return "LINESTRING ( " + t2.x + " " + t2.y + ", " + e4.x + " " + e4.y + " )";
        } }]), e3;
      }(), we = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getIndexAlongSegment", value: function(t2, e4) {
          return this.computeIntLineIndex(), this._intLineIndex[t2][e4];
        } }, { key: "getTopologySummary", value: function() {
          var t2 = new Jt();
          return this.isEndPoint() && t2.append(" endpoint"), this._isProper && t2.append(" proper"), this.isCollinear() && t2.append(" collinear"), t2.toString();
        } }, { key: "computeIntersection", value: function(t2, e4, n2, i2) {
          this._inputLines[0][0] = t2, this._inputLines[0][1] = e4, this._inputLines[1][0] = n2, this._inputLines[1][1] = i2, this._result = this.computeIntersect(t2, e4, n2, i2);
        } }, { key: "getIntersectionNum", value: function() {
          return this._result;
        } }, { key: "computeIntLineIndex", value: function() {
          if (0 === arguments.length) null === this._intLineIndex && (this._intLineIndex = Array(2).fill().map(function() {
            return Array(2);
          }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
          else if (1 === arguments.length) {
            var t2 = arguments[0], e4 = this.getEdgeDistance(t2, 0), n2 = this.getEdgeDistance(t2, 1);
            e4 > n2 ? (this._intLineIndex[t2][0] = 0, this._intLineIndex[t2][1] = 1) : (this._intLineIndex[t2][0] = 1, this._intLineIndex[t2][1] = 0);
          }
        } }, { key: "isProper", value: function() {
          return this.hasIntersection() && this._isProper;
        } }, { key: "setPrecisionModel", value: function(t2) {
          this._precisionModel = t2;
        } }, { key: "isInteriorIntersection", value: function() {
          if (0 === arguments.length) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
          if (1 === arguments.length) {
            for (var t2 = arguments[0], e4 = 0; e4 < this._result; e4++) if (!this._intPt[e4].equals2D(this._inputLines[t2][0]) && !this._intPt[e4].equals2D(this._inputLines[t2][1])) return true;
            return false;
          }
        } }, { key: "getIntersection", value: function(t2) {
          return this._intPt[t2];
        } }, { key: "isEndPoint", value: function() {
          return this.hasIntersection() && !this._isProper;
        } }, { key: "hasIntersection", value: function() {
          return this._result !== e3.NO_INTERSECTION;
        } }, { key: "getEdgeDistance", value: function(t2, n2) {
          return e3.computeEdgeDistance(this._intPt[n2], this._inputLines[t2][0], this._inputLines[t2][1]);
        } }, { key: "isCollinear", value: function() {
          return this._result === e3.COLLINEAR_INTERSECTION;
        } }, { key: "toString", value: function() {
          return Re.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + Re.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
        } }, { key: "getEndpoint", value: function(t2, e4) {
          return this._inputLines[t2][e4];
        } }, { key: "isIntersection", value: function(t2) {
          for (var e4 = 0; e4 < this._result; e4++) if (this._intPt[e4].equals2D(t2)) return true;
          return false;
        } }, { key: "getIntersectionAlongSegment", value: function(t2, e4) {
          return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t2][e4]];
        } }], [{ key: "constructor_", value: function() {
          this._result = null, this._inputLines = Array(2).fill().map(function() {
            return Array(2);
          }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new X(), this._intPt[1] = new X(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
        } }, { key: "computeEdgeDistance", value: function(t2, e4, n2) {
          var i2 = Math.abs(n2.x - e4.x), r2 = Math.abs(n2.y - e4.y), s2 = -1;
          if (t2.equals(e4)) s2 = 0;
          else if (t2.equals(n2)) s2 = i2 > r2 ? i2 : r2;
          else {
            var a2 = Math.abs(t2.x - e4.x), o2 = Math.abs(t2.y - e4.y);
            0 !== (s2 = i2 > r2 ? a2 : o2) || t2.equals(e4) || (s2 = Math.max(a2, o2));
          }
          return G.isTrue(!(0 === s2 && !t2.equals(e4)), "Bad distance calculation"), s2;
        } }, { key: "nonRobustComputeEdgeDistance", value: function(t2, e4, n2) {
          var i2 = t2.x - e4.x, r2 = t2.y - e4.y, s2 = Math.sqrt(i2 * i2 + r2 * r2);
          return G.isTrue(!(0 === s2 && !t2.equals(e4)), "Invalid distance calculation"), s2;
        } }]), e3;
      }();
      we.DONT_INTERSECT = 0, we.DO_INTERSECT = 1, we.COLLINEAR = 2, we.NO_INTERSECTION = 0, we.POINT_INTERSECTION = 1, we.COLLINEAR_INTERSECTION = 2;
      var Oe = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          return t(this, a2), s2.call(this);
        }
        return n(a2, [{ key: "isInSegmentEnvelopes", value: function(t2) {
          var e4 = new U(this._inputLines[0][0], this._inputLines[0][1]), n2 = new U(this._inputLines[1][0], this._inputLines[1][1]);
          return e4.contains(t2) && n2.contains(t2);
        } }, { key: "computeIntersection", value: function() {
          if (3 !== arguments.length) return f(r(a2.prototype), "computeIntersection", this).apply(this, arguments);
          var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2];
          if (this._isProper = false, U.intersects(e4, n2, t2) && 0 === ct.index(e4, n2, t2) && 0 === ct.index(n2, e4, t2)) return this._isProper = true, (t2.equals(e4) || t2.equals(n2)) && (this._isProper = false), this._result = we.POINT_INTERSECTION, null;
          this._result = we.NO_INTERSECTION;
        } }, { key: "intersection", value: function(t2, e4, n2, i2) {
          var r2 = this.intersectionSafe(t2, e4, n2, i2);
          return this.isInSegmentEnvelopes(r2) || (r2 = new X(a2.nearestEndpoint(t2, e4, n2, i2))), null !== this._precisionModel && this._precisionModel.makePrecise(r2), r2;
        } }, { key: "checkDD", value: function(t2, e4, n2, i2, r2) {
          var s3 = lt.intersection(t2, e4, n2, i2), a3 = this.isInSegmentEnvelopes(s3);
          mt.out.println("DD in env = " + a3 + "  --------------------- " + s3), r2.distance(s3) > 1e-4 && mt.out.println("Distance = " + r2.distance(s3));
        } }, { key: "intersectionSafe", value: function(t2, e4, n2, i2) {
          var r2 = pt.intersection(t2, e4, n2, i2);
          return null === r2 && (r2 = a2.nearestEndpoint(t2, e4, n2, i2)), r2;
        } }, { key: "computeCollinearIntersection", value: function(t2, e4, n2, i2) {
          var r2 = U.intersects(t2, e4, n2), s3 = U.intersects(t2, e4, i2), a3 = U.intersects(n2, i2, t2), o2 = U.intersects(n2, i2, e4);
          return r2 && s3 ? (this._intPt[0] = n2, this._intPt[1] = i2, we.COLLINEAR_INTERSECTION) : a3 && o2 ? (this._intPt[0] = t2, this._intPt[1] = e4, we.COLLINEAR_INTERSECTION) : r2 && a3 ? (this._intPt[0] = n2, this._intPt[1] = t2, !n2.equals(t2) || s3 || o2 ? we.COLLINEAR_INTERSECTION : we.POINT_INTERSECTION) : r2 && o2 ? (this._intPt[0] = n2, this._intPt[1] = e4, !n2.equals(e4) || s3 || a3 ? we.COLLINEAR_INTERSECTION : we.POINT_INTERSECTION) : s3 && a3 ? (this._intPt[0] = i2, this._intPt[1] = t2, !i2.equals(t2) || r2 || o2 ? we.COLLINEAR_INTERSECTION : we.POINT_INTERSECTION) : s3 && o2 ? (this._intPt[0] = i2, this._intPt[1] = e4, !i2.equals(e4) || r2 || a3 ? we.COLLINEAR_INTERSECTION : we.POINT_INTERSECTION) : we.NO_INTERSECTION;
        } }, { key: "computeIntersect", value: function(t2, e4, n2, i2) {
          if (this._isProper = false, !U.intersects(t2, e4, n2, i2)) return we.NO_INTERSECTION;
          var r2 = ct.index(t2, e4, n2), s3 = ct.index(t2, e4, i2);
          if (r2 > 0 && s3 > 0 || r2 < 0 && s3 < 0) return we.NO_INTERSECTION;
          var a3 = ct.index(n2, i2, t2), o2 = ct.index(n2, i2, e4);
          return a3 > 0 && o2 > 0 || a3 < 0 && o2 < 0 ? we.NO_INTERSECTION : 0 === r2 && 0 === s3 && 0 === a3 && 0 === o2 ? this.computeCollinearIntersection(t2, e4, n2, i2) : (0 === r2 || 0 === s3 || 0 === a3 || 0 === o2 ? (this._isProper = false, t2.equals2D(n2) || t2.equals2D(i2) ? this._intPt[0] = t2 : e4.equals2D(n2) || e4.equals2D(i2) ? this._intPt[0] = e4 : 0 === r2 ? this._intPt[0] = new X(n2) : 0 === s3 ? this._intPt[0] = new X(i2) : 0 === a3 ? this._intPt[0] = new X(t2) : 0 === o2 && (this._intPt[0] = new X(e4))) : (this._isProper = true, this._intPt[0] = this.intersection(t2, e4, n2, i2)), we.POINT_INTERSECTION);
        } }], [{ key: "nearestEndpoint", value: function(t2, e4, n2, i2) {
          var r2 = t2, s3 = xt.pointToSegment(t2, n2, i2), a3 = xt.pointToSegment(e4, n2, i2);
          return a3 < s3 && (s3 = a3, r2 = e4), (a3 = xt.pointToSegment(n2, t2, e4)) < s3 && (s3 = a3, r2 = n2), (a3 = xt.pointToSegment(i2, t2, e4)) < s3 && (s3 = a3, r2 = i2), r2;
        } }]), a2;
      }(we), be = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "countSegment", value: function(t2, e4) {
          if (t2.x < this._p.x && e4.x < this._p.x) return null;
          if (this._p.x === e4.x && this._p.y === e4.y) return this._isPointOnSegment = true, null;
          if (t2.y === this._p.y && e4.y === this._p.y) {
            var n2 = t2.x, i2 = e4.x;
            return n2 > i2 && (n2 = e4.x, i2 = t2.x), this._p.x >= n2 && this._p.x <= i2 && (this._isPointOnSegment = true), null;
          }
          if (t2.y > this._p.y && e4.y <= this._p.y || e4.y > this._p.y && t2.y <= this._p.y) {
            var r2 = ct.index(t2, e4, this._p);
            if (r2 === ct.COLLINEAR) return this._isPointOnSegment = true, null;
            e4.y < t2.y && (r2 = -r2), r2 === ct.LEFT && this._crossingCount++;
          }
        } }, { key: "isPointInPolygon", value: function() {
          return this.getLocation() !== H.EXTERIOR;
        } }, { key: "getLocation", value: function() {
          return this._isPointOnSegment ? H.BOUNDARY : this._crossingCount % 2 == 1 ? H.INTERIOR : H.EXTERIOR;
        } }, { key: "isOnSegment", value: function() {
          return this._isPointOnSegment;
        } }], [{ key: "constructor_", value: function() {
          this._p = null, this._crossingCount = 0, this._isPointOnSegment = false;
          var t2 = arguments[0];
          this._p = t2;
        } }, { key: "locatePointInRing", value: function() {
          if (arguments[0] instanceof X && rt(arguments[1], ht)) {
            for (var t2 = arguments[0], n2 = arguments[1], i2 = new e3(t2), r2 = new X(), s2 = new X(), a2 = 1; a2 < n2.size(); a2++) if (n2.getCoordinate(a2, r2), n2.getCoordinate(a2 - 1, s2), i2.countSegment(r2, s2), i2.isOnSegment()) return i2.getLocation();
            return i2.getLocation();
          }
          if (arguments[0] instanceof X && arguments[1] instanceof Array) {
            for (var o2 = arguments[0], u5 = arguments[1], l2 = new e3(o2), h2 = 1; h2 < u5.length; h2++) {
              var c2 = u5[h2], f2 = u5[h2 - 1];
              if (l2.countSegment(c2, f2), l2.isOnSegment()) return l2.getLocation();
            }
            return l2.getLocation();
          }
        } }]), e3;
      }(), Me = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "isOnLine", value: function() {
          if (arguments[0] instanceof X && rt(arguments[1], ht)) {
            for (var t2 = arguments[0], e4 = arguments[1], n2 = new Oe(), i2 = new X(), r2 = new X(), s2 = e4.size(), a2 = 1; a2 < s2; a2++) if (e4.getCoordinate(a2 - 1, i2), e4.getCoordinate(a2, r2), n2.computeIntersection(t2, i2, r2), n2.hasIntersection()) return true;
            return false;
          }
          if (arguments[0] instanceof X && arguments[1] instanceof Array) {
            for (var o2 = arguments[0], u5 = arguments[1], l2 = new Oe(), h2 = 1; h2 < u5.length; h2++) {
              var c2 = u5[h2 - 1], f2 = u5[h2];
              if (l2.computeIntersection(o2, c2, f2), l2.hasIntersection()) return true;
            }
            return false;
          }
        } }, { key: "locateInRing", value: function(t2, e4) {
          return be.locatePointInRing(t2, e4);
        } }, { key: "isInRing", value: function(t2, n2) {
          return e3.locateInRing(t2, n2) !== H.EXTERIOR;
        } }]), e3;
      }(), Ae = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "setAllLocations", value: function(t2) {
          for (var e4 = 0; e4 < this.location.length; e4++) this.location[e4] = t2;
        } }, { key: "isNull", value: function() {
          for (var t2 = 0; t2 < this.location.length; t2++) if (this.location[t2] !== H.NONE) return false;
          return true;
        } }, { key: "setAllLocationsIfNull", value: function(t2) {
          for (var e4 = 0; e4 < this.location.length; e4++) this.location[e4] === H.NONE && (this.location[e4] = t2);
        } }, { key: "isLine", value: function() {
          return 1 === this.location.length;
        } }, { key: "merge", value: function(t2) {
          if (t2.location.length > this.location.length) {
            var e4 = new Array(3).fill(null);
            e4[$.ON] = this.location[$.ON], e4[$.LEFT] = H.NONE, e4[$.RIGHT] = H.NONE, this.location = e4;
          }
          for (var n2 = 0; n2 < this.location.length; n2++) this.location[n2] === H.NONE && n2 < t2.location.length && (this.location[n2] = t2.location[n2]);
        } }, { key: "getLocations", value: function() {
          return this.location;
        } }, { key: "flip", value: function() {
          if (this.location.length <= 1) return null;
          var t2 = this.location[$.LEFT];
          this.location[$.LEFT] = this.location[$.RIGHT], this.location[$.RIGHT] = t2;
        } }, { key: "toString", value: function() {
          var t2 = new st();
          return this.location.length > 1 && t2.append(H.toLocationSymbol(this.location[$.LEFT])), t2.append(H.toLocationSymbol(this.location[$.ON])), this.location.length > 1 && t2.append(H.toLocationSymbol(this.location[$.RIGHT])), t2.toString();
        } }, { key: "setLocations", value: function(t2, e4, n2) {
          this.location[$.ON] = t2, this.location[$.LEFT] = e4, this.location[$.RIGHT] = n2;
        } }, { key: "get", value: function(t2) {
          return t2 < this.location.length ? this.location[t2] : H.NONE;
        } }, { key: "isArea", value: function() {
          return this.location.length > 1;
        } }, { key: "isAnyNull", value: function() {
          for (var t2 = 0; t2 < this.location.length; t2++) if (this.location[t2] === H.NONE) return true;
          return false;
        } }, { key: "setLocation", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            this.setLocation($.ON, t2);
          } else if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            this.location[e4] = n2;
          }
        } }, { key: "init", value: function(t2) {
          this.location = new Array(t2).fill(null), this.setAllLocations(H.NONE);
        } }, { key: "isEqualOnSide", value: function(t2, e4) {
          return this.location[e4] === t2.location[e4];
        } }, { key: "allPositionsEqual", value: function(t2) {
          for (var e4 = 0; e4 < this.location.length; e4++) if (this.location[e4] !== t2) return false;
          return true;
        } }], [{ key: "constructor_", value: function() {
          if (this.location = null, 1 === arguments.length) {
            if (arguments[0] instanceof Array) {
              var t2 = arguments[0];
              this.init(t2.length);
            } else if (Number.isInteger(arguments[0])) {
              var n2 = arguments[0];
              this.init(1), this.location[$.ON] = n2;
            } else if (arguments[0] instanceof e3) {
              var i2 = arguments[0];
              if (this.init(i2.location.length), null !== i2) for (var r2 = 0; r2 < this.location.length; r2++) this.location[r2] = i2.location[r2];
            }
          } else if (3 === arguments.length) {
            var s2 = arguments[0], a2 = arguments[1], o2 = arguments[2];
            this.init(3), this.location[$.ON] = s2, this.location[$.LEFT] = a2, this.location[$.RIGHT] = o2;
          }
        } }]), e3;
      }(), Pe = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getGeometryCount", value: function() {
          var t2 = 0;
          return this.elt[0].isNull() || t2++, this.elt[1].isNull() || t2++, t2;
        } }, { key: "setAllLocations", value: function(t2, e4) {
          this.elt[t2].setAllLocations(e4);
        } }, { key: "isNull", value: function(t2) {
          return this.elt[t2].isNull();
        } }, { key: "setAllLocationsIfNull", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            this.setAllLocationsIfNull(0, t2), this.setAllLocationsIfNull(1, t2);
          } else if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            this.elt[e4].setAllLocationsIfNull(n2);
          }
        } }, { key: "isLine", value: function(t2) {
          return this.elt[t2].isLine();
        } }, { key: "merge", value: function(t2) {
          for (var e4 = 0; e4 < 2; e4++) null === this.elt[e4] && null !== t2.elt[e4] ? this.elt[e4] = new Ae(t2.elt[e4]) : this.elt[e4].merge(t2.elt[e4]);
        } }, { key: "flip", value: function() {
          this.elt[0].flip(), this.elt[1].flip();
        } }, { key: "getLocation", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return this.elt[t2].get($.ON);
          }
          if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            return this.elt[e4].get(n2);
          }
        } }, { key: "toString", value: function() {
          var t2 = new st();
          return null !== this.elt[0] && (t2.append("A:"), t2.append(this.elt[0].toString())), null !== this.elt[1] && (t2.append(" B:"), t2.append(this.elt[1].toString())), t2.toString();
        } }, { key: "isArea", value: function() {
          if (0 === arguments.length) return this.elt[0].isArea() || this.elt[1].isArea();
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return this.elt[t2].isArea();
          }
        } }, { key: "isAnyNull", value: function(t2) {
          return this.elt[t2].isAnyNull();
        } }, { key: "setLocation", value: function() {
          if (2 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1];
            this.elt[t2].setLocation($.ON, e4);
          } else if (3 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1], r2 = arguments[2];
            this.elt[n2].setLocation(i2, r2);
          }
        } }, { key: "isEqualOnSide", value: function(t2, e4) {
          return this.elt[0].isEqualOnSide(t2.elt[0], e4) && this.elt[1].isEqualOnSide(t2.elt[1], e4);
        } }, { key: "allPositionsEqual", value: function(t2, e4) {
          return this.elt[t2].allPositionsEqual(e4);
        } }, { key: "toLine", value: function(t2) {
          this.elt[t2].isArea() && (this.elt[t2] = new Ae(this.elt[t2].location[0]));
        } }], [{ key: "constructor_", value: function() {
          if (this.elt = new Array(2).fill(null), 1 === arguments.length) {
            if (Number.isInteger(arguments[0])) {
              var t2 = arguments[0];
              this.elt[0] = new Ae(t2), this.elt[1] = new Ae(t2);
            } else if (arguments[0] instanceof e3) {
              var n2 = arguments[0];
              this.elt[0] = new Ae(n2.elt[0]), this.elt[1] = new Ae(n2.elt[1]);
            }
          } else if (2 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1];
            this.elt[0] = new Ae(H.NONE), this.elt[1] = new Ae(H.NONE), this.elt[i2].setLocation(r2);
          } else if (3 === arguments.length) {
            var s2 = arguments[0], a2 = arguments[1], o2 = arguments[2];
            this.elt[0] = new Ae(s2, a2, o2), this.elt[1] = new Ae(s2, a2, o2);
          } else if (4 === arguments.length) {
            var u5 = arguments[0], l2 = arguments[1], h2 = arguments[2], c2 = arguments[3];
            this.elt[0] = new Ae(H.NONE, H.NONE, H.NONE), this.elt[1] = new Ae(H.NONE, H.NONE, H.NONE), this.elt[u5].setLocations(l2, h2, c2);
          }
        } }, { key: "toLineLabel", value: function(t2) {
          for (var n2 = new e3(H.NONE), i2 = 0; i2 < 2; i2++) n2.setLocation(i2, t2.getLocation(i2));
          return n2;
        } }]), e3;
      }(), De = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "computeRing", value: function() {
          if (null !== this._ring) return null;
          for (var t2 = new Array(this._pts.size()).fill(null), e4 = 0; e4 < this._pts.size(); e4++) t2[e4] = this._pts.get(e4);
          this._ring = this._geometryFactory.createLinearRing(t2), this._isHole = ct.isCCW(this._ring.getCoordinates());
        } }, { key: "isIsolated", value: function() {
          return 1 === this._label.getGeometryCount();
        } }, { key: "computePoints", value: function(t2) {
          this._startDe = t2;
          var e4 = t2, n2 = true;
          do {
            if (null === e4) throw new vt("Found null DirectedEdge");
            if (e4.getEdgeRing() === this) throw new vt("Directed Edge visited twice during ring-building at " + e4.getCoordinate());
            this._edges.add(e4);
            var i2 = e4.getLabel();
            G.isTrue(i2.isArea()), this.mergeLabel(i2), this.addPoints(e4.getEdge(), e4.isForward(), n2), n2 = false, this.setEdgeRing(e4, this), e4 = this.getNext(e4);
          } while (e4 !== this._startDe);
        } }, { key: "getLinearRing", value: function() {
          return this._ring;
        } }, { key: "getCoordinate", value: function(t2) {
          return this._pts.get(t2);
        } }, { key: "computeMaxNodeDegree", value: function() {
          this._maxNodeDegree = 0;
          var t2 = this._startDe;
          do {
            var e4 = t2.getNode().getEdges().getOutgoingDegree(this);
            e4 > this._maxNodeDegree && (this._maxNodeDegree = e4), t2 = this.getNext(t2);
          } while (t2 !== this._startDe);
          this._maxNodeDegree *= 2;
        } }, { key: "addPoints", value: function(t2, e4, n2) {
          var i2 = t2.getCoordinates();
          if (e4) {
            var r2 = 1;
            n2 && (r2 = 0);
            for (var s2 = r2; s2 < i2.length; s2++) this._pts.add(i2[s2]);
          } else {
            var a2 = i2.length - 2;
            n2 && (a2 = i2.length - 1);
            for (var o2 = a2; o2 >= 0; o2--) this._pts.add(i2[o2]);
          }
        } }, { key: "isHole", value: function() {
          return this._isHole;
        } }, { key: "setInResult", value: function() {
          var t2 = this._startDe;
          do {
            t2.getEdge().setInResult(true), t2 = t2.getNext();
          } while (t2 !== this._startDe);
        } }, { key: "containsPoint", value: function(t2) {
          var e4 = this.getLinearRing();
          if (!e4.getEnvelopeInternal().contains(t2)) return false;
          if (!Me.isInRing(t2, e4.getCoordinates())) return false;
          for (var n2 = this._holes.iterator(); n2.hasNext(); ) {
            if (n2.next().containsPoint(t2)) return false;
          }
          return true;
        } }, { key: "addHole", value: function(t2) {
          this._holes.add(t2);
        } }, { key: "isShell", value: function() {
          return null === this._shell;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "getMaxNodeDegree", value: function() {
          return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
        } }, { key: "getShell", value: function() {
          return this._shell;
        } }, { key: "mergeLabel", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            this.mergeLabel(t2, 0), this.mergeLabel(t2, 1);
          } else if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1], i2 = e4.getLocation(n2, $.RIGHT);
            if (i2 === H.NONE) return null;
            if (this._label.getLocation(n2) === H.NONE) return this._label.setLocation(n2, i2), null;
          }
        } }, { key: "setShell", value: function(t2) {
          this._shell = t2, null !== t2 && t2.addHole(this);
        } }, { key: "toPolygon", value: function(t2) {
          for (var e4 = new Array(this._holes.size()).fill(null), n2 = 0; n2 < this._holes.size(); n2++) e4[n2] = this._holes.get(n2).getLinearRing();
          return t2.createPolygon(this.getLinearRing(), e4);
        } }], [{ key: "constructor_", value: function() {
          if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new yt(), this._pts = new yt(), this._label = new Pe(H.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new yt(), this._geometryFactory = null, 0 === arguments.length) ;
          else if (2 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1];
            this._geometryFactory = e4, this.computePoints(t2), this.computeRing();
          }
        } }]), e3;
      }(), Fe = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), e4 = r2.call(this), s2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(s2, [{ key: "setEdgeRing", value: function(t2, e4) {
          t2.setMinEdgeRing(e4);
        } }, { key: "getNext", value: function(t2) {
          return t2.getNextMin();
        } }], [{ key: "constructor_", value: function() {
          var t2 = arguments[0], e4 = arguments[1];
          De.constructor_.call(this, t2, e4);
        } }]), s2;
      }(De), Ge = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), e4 = r2.call(this), s2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(s2, [{ key: "buildMinimalRings", value: function() {
          var t2 = new yt(), e4 = this._startDe;
          do {
            if (null === e4.getMinEdgeRing()) {
              var n2 = new Fe(e4, this._geometryFactory);
              t2.add(n2);
            }
            e4 = e4.getNext();
          } while (e4 !== this._startDe);
          return t2;
        } }, { key: "setEdgeRing", value: function(t2, e4) {
          t2.setEdgeRing(e4);
        } }, { key: "linkDirectedEdgesForMinimalEdgeRings", value: function() {
          var t2 = this._startDe;
          do {
            t2.getNode().getEdges().linkMinimalDirectedEdges(this), t2 = t2.getNext();
          } while (t2 !== this._startDe);
        } }, { key: "getNext", value: function(t2) {
          return t2.getNext();
        } }], [{ key: "constructor_", value: function() {
          var t2 = arguments[0], e4 = arguments[1];
          De.constructor_.call(this, t2, e4);
        } }]), s2;
      }(De), qe = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "setVisited", value: function(t2) {
          this._isVisited = t2;
        } }, { key: "setInResult", value: function(t2) {
          this._isInResult = t2;
        } }, { key: "isCovered", value: function() {
          return this._isCovered;
        } }, { key: "isCoveredSet", value: function() {
          return this._isCoveredSet;
        } }, { key: "setLabel", value: function(t2) {
          this._label = t2;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "setCovered", value: function(t2) {
          this._isCovered = t2, this._isCoveredSet = true;
        } }, { key: "updateIM", value: function(t2) {
          G.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t2);
        } }, { key: "isInResult", value: function() {
          return this._isInResult;
        } }, { key: "isVisited", value: function() {
          return this._isVisited;
        } }], [{ key: "constructor_", value: function() {
          if (this._label = null, this._isInResult = false, this._isCovered = false, this._isCoveredSet = false, this._isVisited = false, 0 === arguments.length) ;
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            this._label = t2;
          }
        } }]), e3;
      }(), Ye = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "isIncidentEdgeInResult", value: function() {
          for (var t2 = this.getEdges().getEdges().iterator(); t2.hasNext(); ) {
            if (t2.next().getEdge().isInResult()) return true;
          }
          return false;
        } }, { key: "isIsolated", value: function() {
          return 1 === this._label.getGeometryCount();
        } }, { key: "getCoordinate", value: function() {
          return this._coord;
        } }, { key: "print", value: function(t2) {
          t2.println("node " + this._coord + " lbl: " + this._label);
        } }, { key: "computeIM", value: function(t2) {
        } }, { key: "computeMergedLocation", value: function(t2, e4) {
          var n2 = H.NONE;
          if (n2 = this._label.getLocation(e4), !t2.isNull(e4)) {
            var i2 = t2.getLocation(e4);
            n2 !== H.BOUNDARY && (n2 = i2);
          }
          return n2;
        } }, { key: "setLabel", value: function() {
          if (2 !== arguments.length || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return f(r(a2.prototype), "setLabel", this).apply(this, arguments);
          var t2 = arguments[0], e4 = arguments[1];
          null === this._label ? this._label = new Pe(t2, e4) : this._label.setLocation(t2, e4);
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "mergeLabel", value: function() {
          if (arguments[0] instanceof a2) {
            var t2 = arguments[0];
            this.mergeLabel(t2._label);
          } else if (arguments[0] instanceof Pe) for (var e4 = arguments[0], n2 = 0; n2 < 2; n2++) {
            var i2 = this.computeMergedLocation(e4, n2), r2 = this._label.getLocation(n2);
            r2 === H.NONE && this._label.setLocation(n2, i2);
          }
        } }, { key: "add", value: function(t2) {
          this._edges.insert(t2), t2.setNode(this);
        } }, { key: "setLabelBoundary", value: function(t2) {
          if (null === this._label) return null;
          var e4 = H.NONE;
          null !== this._label && (e4 = this._label.getLocation(t2));
          var n2 = null;
          switch (e4) {
            case H.BOUNDARY:
              n2 = H.INTERIOR;
              break;
            case H.INTERIOR:
            default:
              n2 = H.BOUNDARY;
          }
          this._label.setLocation(t2, n2);
        } }], [{ key: "constructor_", value: function() {
          this._coord = null, this._edges = null;
          var t2 = arguments[0], e4 = arguments[1];
          this._coord = t2, this._edges = e4, this._label = new Pe(0, H.NONE);
        } }]), a2;
      }(qe), ze = function(e3) {
        i(r2, e3);
        var n2 = c(r2);
        function r2() {
          return t(this, r2), n2.apply(this, arguments);
        }
        return r2;
      }(ee);
      function Xe(t2) {
        return null == t2 ? 0 : t2.color;
      }
      function Be(t2) {
        return null == t2 ? null : t2.parent;
      }
      function Ue(t2, e3) {
        null !== t2 && (t2.color = e3);
      }
      function Ve(t2) {
        return null == t2 ? null : t2.left;
      }
      function He(t2) {
        return null == t2 ? null : t2.right;
      }
      var Ze = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), (e4 = r2.call(this)).root_ = null, e4.size_ = 0, e4;
        }
        return n(s2, [{ key: "get", value: function(t2) {
          for (var e4 = this.root_; null !== e4; ) {
            var n2 = t2.compareTo(e4.key);
            if (n2 < 0) e4 = e4.left;
            else {
              if (!(n2 > 0)) return e4.value;
              e4 = e4.right;
            }
          }
          return null;
        } }, { key: "put", value: function(t2, e4) {
          if (null === this.root_) return this.root_ = { key: t2, value: e4, left: null, right: null, parent: null, color: 0, getValue: function() {
            return this.value;
          }, getKey: function() {
            return this.key;
          } }, this.size_ = 1, null;
          var n2, i2, r3 = this.root_;
          do {
            if (n2 = r3, (i2 = t2.compareTo(r3.key)) < 0) r3 = r3.left;
            else {
              if (!(i2 > 0)) {
                var s3 = r3.value;
                return r3.value = e4, s3;
              }
              r3 = r3.right;
            }
          } while (null !== r3);
          var a2 = { key: t2, left: null, right: null, value: e4, parent: n2, color: 0, getValue: function() {
            return this.value;
          }, getKey: function() {
            return this.key;
          } };
          return i2 < 0 ? n2.left = a2 : n2.right = a2, this.fixAfterInsertion(a2), this.size_++, null;
        } }, { key: "fixAfterInsertion", value: function(t2) {
          var e4;
          for (t2.color = 1; null != t2 && t2 !== this.root_ && 1 === t2.parent.color; ) Be(t2) === Ve(Be(Be(t2))) ? 1 === Xe(e4 = He(Be(Be(t2)))) ? (Ue(Be(t2), 0), Ue(e4, 0), Ue(Be(Be(t2)), 1), t2 = Be(Be(t2))) : (t2 === He(Be(t2)) && (t2 = Be(t2), this.rotateLeft(t2)), Ue(Be(t2), 0), Ue(Be(Be(t2)), 1), this.rotateRight(Be(Be(t2)))) : 1 === Xe(e4 = Ve(Be(Be(t2)))) ? (Ue(Be(t2), 0), Ue(e4, 0), Ue(Be(Be(t2)), 1), t2 = Be(Be(t2))) : (t2 === Ve(Be(t2)) && (t2 = Be(t2), this.rotateRight(t2)), Ue(Be(t2), 0), Ue(Be(Be(t2)), 1), this.rotateLeft(Be(Be(t2))));
          this.root_.color = 0;
        } }, { key: "values", value: function() {
          var t2 = new yt(), e4 = this.getFirstEntry();
          if (null !== e4) for (t2.add(e4.value); null !== (e4 = s2.successor(e4)); ) t2.add(e4.value);
          return t2;
        } }, { key: "entrySet", value: function() {
          var t2 = new J(), e4 = this.getFirstEntry();
          if (null !== e4) for (t2.add(e4); null !== (e4 = s2.successor(e4)); ) t2.add(e4);
          return t2;
        } }, { key: "rotateLeft", value: function(t2) {
          if (null != t2) {
            var e4 = t2.right;
            t2.right = e4.left, null != e4.left && (e4.left.parent = t2), e4.parent = t2.parent, null == t2.parent ? this.root_ = e4 : t2.parent.left === t2 ? t2.parent.left = e4 : t2.parent.right = e4, e4.left = t2, t2.parent = e4;
          }
        } }, { key: "rotateRight", value: function(t2) {
          if (null != t2) {
            var e4 = t2.left;
            t2.left = e4.right, null != e4.right && (e4.right.parent = t2), e4.parent = t2.parent, null == t2.parent ? this.root_ = e4 : t2.parent.right === t2 ? t2.parent.right = e4 : t2.parent.left = e4, e4.right = t2, t2.parent = e4;
          }
        } }, { key: "getFirstEntry", value: function() {
          var t2 = this.root_;
          if (null != t2) for (; null != t2.left; ) t2 = t2.left;
          return t2;
        } }, { key: "size", value: function() {
          return this.size_;
        } }, { key: "containsKey", value: function(t2) {
          for (var e4 = this.root_; null !== e4; ) {
            var n2 = t2.compareTo(e4.key);
            if (n2 < 0) e4 = e4.left;
            else {
              if (!(n2 > 0)) return true;
              e4 = e4.right;
            }
          }
          return false;
        } }], [{ key: "successor", value: function(t2) {
          var e4;
          if (null === t2) return null;
          if (null !== t2.right) {
            for (e4 = t2.right; null !== e4.left; ) e4 = e4.left;
            return e4;
          }
          e4 = t2.parent;
          for (var n2 = t2; null !== e4 && n2 === e4.right; ) n2 = e4, e4 = e4.parent;
          return e4;
        } }]), s2;
      }(ze), je = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "find", value: function(t2) {
          return this.nodeMap.get(t2);
        } }, { key: "addNode", value: function() {
          if (arguments[0] instanceof X) {
            var t2 = arguments[0], e4 = this.nodeMap.get(t2);
            return null === e4 && (e4 = this.nodeFact.createNode(t2), this.nodeMap.put(t2, e4)), e4;
          }
          if (arguments[0] instanceof Ye) {
            var n2 = arguments[0], i2 = this.nodeMap.get(n2.getCoordinate());
            return null === i2 ? (this.nodeMap.put(n2.getCoordinate(), n2), n2) : (i2.mergeLabel(n2), i2);
          }
        } }, { key: "print", value: function(t2) {
          for (var e4 = this.iterator(); e4.hasNext(); ) {
            e4.next().print(t2);
          }
        } }, { key: "iterator", value: function() {
          return this.nodeMap.values().iterator();
        } }, { key: "values", value: function() {
          return this.nodeMap.values();
        } }, { key: "getBoundaryNodes", value: function(t2) {
          for (var e4 = new yt(), n2 = this.iterator(); n2.hasNext(); ) {
            var i2 = n2.next();
            i2.getLabel().getLocation(t2) === H.BOUNDARY && e4.add(i2);
          }
          return e4;
        } }, { key: "add", value: function(t2) {
          var e4 = t2.getCoordinate();
          this.addNode(e4).add(t2);
        } }], [{ key: "constructor_", value: function() {
          this.nodeMap = new Ze(), this.nodeFact = null;
          var t2 = arguments[0];
          this.nodeFact = t2;
        } }]), e3;
      }(), We = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "isNorthern", value: function(t2) {
          return t2 === e3.NE || t2 === e3.NW;
        } }, { key: "isOpposite", value: function(t2, e4) {
          return t2 !== e4 && 2 === (t2 - e4 + 4) % 4;
        } }, { key: "commonHalfPlane", value: function(t2, e4) {
          if (t2 === e4) return t2;
          if (2 === (t2 - e4 + 4) % 4) return -1;
          var n2 = t2 < e4 ? t2 : e4;
          return 0 === n2 && 3 === (t2 > e4 ? t2 : e4) ? 3 : n2;
        } }, { key: "isInHalfPlane", value: function(t2, n2) {
          return n2 === e3.SE ? t2 === e3.SE || t2 === e3.SW : t2 === n2 || t2 === n2 + 1;
        } }, { key: "quadrant", value: function() {
          if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
            var t2 = arguments[0], n2 = arguments[1];
            if (0 === t2 && 0 === n2) throw new m("Cannot compute the quadrant for point ( " + t2 + ", " + n2 + " )");
            return t2 >= 0 ? n2 >= 0 ? e3.NE : e3.SE : n2 >= 0 ? e3.NW : e3.SW;
          }
          if (arguments[0] instanceof X && arguments[1] instanceof X) {
            var i2 = arguments[0], r2 = arguments[1];
            if (r2.x === i2.x && r2.y === i2.y) throw new m("Cannot compute the quadrant for two identical points " + i2);
            return r2.x >= i2.x ? r2.y >= i2.y ? e3.NE : e3.SE : r2.y >= i2.y ? e3.NW : e3.SW;
          }
        } }]), e3;
      }();
      We.NE = 0, We.NW = 1, We.SW = 2, We.SE = 3;
      var Ke = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "compareDirection", value: function(t2) {
          return this._dx === t2._dx && this._dy === t2._dy ? 0 : this._quadrant > t2._quadrant ? 1 : this._quadrant < t2._quadrant ? -1 : ct.index(t2._p0, t2._p1, this._p1);
        } }, { key: "getDy", value: function() {
          return this._dy;
        } }, { key: "getCoordinate", value: function() {
          return this._p0;
        } }, { key: "setNode", value: function(t2) {
          this._node = t2;
        } }, { key: "print", value: function(t2) {
          var e4 = Math.atan2(this._dy, this._dx), n2 = this.getClass().getName(), i2 = n2.lastIndexOf("."), r2 = n2.substring(i2 + 1);
          t2.print("  " + r2 + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e4 + "   " + this._label);
        } }, { key: "compareTo", value: function(t2) {
          var e4 = t2;
          return this.compareDirection(e4);
        } }, { key: "getDirectedCoordinate", value: function() {
          return this._p1;
        } }, { key: "getDx", value: function() {
          return this._dx;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "getQuadrant", value: function() {
          return this._quadrant;
        } }, { key: "getNode", value: function() {
          return this._node;
        } }, { key: "toString", value: function() {
          var t2 = Math.atan2(this._dy, this._dx), e4 = this.getClass().getName(), n2 = e4.lastIndexOf(".");
          return "  " + e4.substring(n2 + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t2 + "   " + this._label;
        } }, { key: "computeLabel", value: function(t2) {
        } }, { key: "init", value: function(t2, e4) {
          this._p0 = t2, this._p1 = e4, this._dx = e4.x - t2.x, this._dy = e4.y - t2.y, this._quadrant = We.quadrant(this._dx, this._dy), G.isTrue(!(0 === this._dx && 0 === this._dy), "EdgeEnd with identical endpoints found");
        } }, { key: "interfaces_", get: function() {
          return [x2];
        } }], [{ key: "constructor_", value: function() {
          if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, 1 === arguments.length) {
            var t2 = arguments[0];
            this._edge = t2;
          } else if (3 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1], r2 = arguments[2];
            e3.constructor_.call(this, n2, i2, r2, null);
          } else if (4 === arguments.length) {
            var s2 = arguments[0], a2 = arguments[1], o2 = arguments[2], u5 = arguments[3];
            e3.constructor_.call(this, s2), this.init(a2, o2), this._label = u5;
          }
        } }]), e3;
      }(), Je = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "getNextMin", value: function() {
          return this._nextMin;
        } }, { key: "getDepth", value: function(t2) {
          return this._depth[t2];
        } }, { key: "setVisited", value: function(t2) {
          this._isVisited = t2;
        } }, { key: "computeDirectedLabel", value: function() {
          this._label = new Pe(this._edge.getLabel()), this._isForward || this._label.flip();
        } }, { key: "getNext", value: function() {
          return this._next;
        } }, { key: "setDepth", value: function(t2, e4) {
          if (-999 !== this._depth[t2] && this._depth[t2] !== e4) throw new vt("assigned depths do not match", this.getCoordinate());
          this._depth[t2] = e4;
        } }, { key: "isInteriorAreaEdge", value: function() {
          for (var t2 = true, e4 = 0; e4 < 2; e4++) this._label.isArea(e4) && this._label.getLocation(e4, $.LEFT) === H.INTERIOR && this._label.getLocation(e4, $.RIGHT) === H.INTERIOR || (t2 = false);
          return t2;
        } }, { key: "setNextMin", value: function(t2) {
          this._nextMin = t2;
        } }, { key: "print", value: function(t2) {
          f(r(a2.prototype), "print", this).call(this, t2), t2.print(" " + this._depth[$.LEFT] + "/" + this._depth[$.RIGHT]), t2.print(" (" + this.getDepthDelta() + ")"), this._isInResult && t2.print(" inResult");
        } }, { key: "setMinEdgeRing", value: function(t2) {
          this._minEdgeRing = t2;
        } }, { key: "isLineEdge", value: function() {
          var t2 = this._label.isLine(0) || this._label.isLine(1), e4 = !this._label.isArea(0) || this._label.allPositionsEqual(0, H.EXTERIOR), n2 = !this._label.isArea(1) || this._label.allPositionsEqual(1, H.EXTERIOR);
          return t2 && e4 && n2;
        } }, { key: "setEdgeRing", value: function(t2) {
          this._edgeRing = t2;
        } }, { key: "getMinEdgeRing", value: function() {
          return this._minEdgeRing;
        } }, { key: "getDepthDelta", value: function() {
          var t2 = this._edge.getDepthDelta();
          return this._isForward || (t2 = -t2), t2;
        } }, { key: "setInResult", value: function(t2) {
          this._isInResult = t2;
        } }, { key: "getSym", value: function() {
          return this._sym;
        } }, { key: "isForward", value: function() {
          return this._isForward;
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "printEdge", value: function(t2) {
          this.print(t2), t2.print(" "), this._isForward ? this._edge.print(t2) : this._edge.printReverse(t2);
        } }, { key: "setSym", value: function(t2) {
          this._sym = t2;
        } }, { key: "setVisitedEdge", value: function(t2) {
          this.setVisited(t2), this._sym.setVisited(t2);
        } }, { key: "setEdgeDepths", value: function(t2, e4) {
          var n2 = this.getEdge().getDepthDelta();
          this._isForward || (n2 = -n2);
          var i2 = 1;
          t2 === $.LEFT && (i2 = -1);
          var r2 = $.opposite(t2), s3 = e4 + n2 * i2;
          this.setDepth(t2, e4), this.setDepth(r2, s3);
        } }, { key: "getEdgeRing", value: function() {
          return this._edgeRing;
        } }, { key: "isInResult", value: function() {
          return this._isInResult;
        } }, { key: "setNext", value: function(t2) {
          this._next = t2;
        } }, { key: "isVisited", value: function() {
          return this._isVisited;
        } }], [{ key: "constructor_", value: function() {
          this._isForward = null, this._isInResult = false, this._isVisited = false, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999];
          var t2 = arguments[0], e4 = arguments[1];
          if (Ke.constructor_.call(this, t2), this._isForward = e4, e4) this.init(t2.getCoordinate(0), t2.getCoordinate(1));
          else {
            var n2 = t2.getNumPoints() - 1;
            this.init(t2.getCoordinate(n2), t2.getCoordinate(n2 - 1));
          }
          this.computeDirectedLabel();
        } }, { key: "depthFactor", value: function(t2, e4) {
          return t2 === H.EXTERIOR && e4 === H.INTERIOR ? 1 : t2 === H.INTERIOR && e4 === H.EXTERIOR ? -1 : 0;
        } }]), a2;
      }(Ke), Qe = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "createNode", value: function(t2) {
          return new Ye(t2, null);
        } }]), e3;
      }(), $e = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "printEdges", value: function(t2) {
          t2.println("Edges:");
          for (var e4 = 0; e4 < this._edges.size(); e4++) {
            t2.println("edge " + e4 + ":");
            var n2 = this._edges.get(e4);
            n2.print(t2), n2.eiList.print(t2);
          }
        } }, { key: "find", value: function(t2) {
          return this._nodes.find(t2);
        } }, { key: "addNode", value: function() {
          if (arguments[0] instanceof Ye) {
            var t2 = arguments[0];
            return this._nodes.addNode(t2);
          }
          if (arguments[0] instanceof X) {
            var e4 = arguments[0];
            return this._nodes.addNode(e4);
          }
        } }, { key: "getNodeIterator", value: function() {
          return this._nodes.iterator();
        } }, { key: "linkResultDirectedEdges", value: function() {
          for (var t2 = this._nodes.iterator(); t2.hasNext(); ) {
            t2.next().getEdges().linkResultDirectedEdges();
          }
        } }, { key: "debugPrintln", value: function(t2) {
          mt.out.println(t2);
        } }, { key: "isBoundaryNode", value: function(t2, e4) {
          var n2 = this._nodes.find(e4);
          if (null === n2) return false;
          var i2 = n2.getLabel();
          return null !== i2 && i2.getLocation(t2) === H.BOUNDARY;
        } }, { key: "linkAllDirectedEdges", value: function() {
          for (var t2 = this._nodes.iterator(); t2.hasNext(); ) {
            t2.next().getEdges().linkAllDirectedEdges();
          }
        } }, { key: "matchInSameDirection", value: function(t2, e4, n2, i2) {
          return !!t2.equals(n2) && (ct.index(t2, e4, i2) === ct.COLLINEAR && We.quadrant(t2, e4) === We.quadrant(n2, i2));
        } }, { key: "getEdgeEnds", value: function() {
          return this._edgeEndList;
        } }, { key: "debugPrint", value: function(t2) {
          mt.out.print(t2);
        } }, { key: "getEdgeIterator", value: function() {
          return this._edges.iterator();
        } }, { key: "findEdgeInSameDirection", value: function(t2, e4) {
          for (var n2 = 0; n2 < this._edges.size(); n2++) {
            var i2 = this._edges.get(n2), r2 = i2.getCoordinates();
            if (this.matchInSameDirection(t2, e4, r2[0], r2[1])) return i2;
            if (this.matchInSameDirection(t2, e4, r2[r2.length - 1], r2[r2.length - 2])) return i2;
          }
          return null;
        } }, { key: "insertEdge", value: function(t2) {
          this._edges.add(t2);
        } }, { key: "findEdgeEnd", value: function(t2) {
          for (var e4 = this.getEdgeEnds().iterator(); e4.hasNext(); ) {
            var n2 = e4.next();
            if (n2.getEdge() === t2) return n2;
          }
          return null;
        } }, { key: "addEdges", value: function(t2) {
          for (var e4 = t2.iterator(); e4.hasNext(); ) {
            var n2 = e4.next();
            this._edges.add(n2);
            var i2 = new Je(n2, true), r2 = new Je(n2, false);
            i2.setSym(r2), r2.setSym(i2), this.add(i2), this.add(r2);
          }
        } }, { key: "add", value: function(t2) {
          this._nodes.add(t2), this._edgeEndList.add(t2);
        } }, { key: "getNodes", value: function() {
          return this._nodes.values();
        } }, { key: "findEdge", value: function(t2, e4) {
          for (var n2 = 0; n2 < this._edges.size(); n2++) {
            var i2 = this._edges.get(n2), r2 = i2.getCoordinates();
            if (t2.equals(r2[0]) && e4.equals(r2[1])) return i2;
          }
          return null;
        } }], [{ key: "constructor_", value: function() {
          if (this._edges = new yt(), this._nodes = null, this._edgeEndList = new yt(), 0 === arguments.length) this._nodes = new je(new Qe());
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            this._nodes = new je(t2);
          }
        } }, { key: "linkResultDirectedEdges", value: function(t2) {
          for (var e4 = t2.iterator(); e4.hasNext(); ) {
            e4.next().getEdges().linkResultDirectedEdges();
          }
        } }]), e3;
      }(), tn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "sortShellsAndHoles", value: function(t2, e4, n2) {
          for (var i2 = t2.iterator(); i2.hasNext(); ) {
            var r2 = i2.next();
            r2.isHole() ? n2.add(r2) : e4.add(r2);
          }
        } }, { key: "computePolygons", value: function(t2) {
          for (var e4 = new yt(), n2 = t2.iterator(); n2.hasNext(); ) {
            var i2 = n2.next().toPolygon(this._geometryFactory);
            e4.add(i2);
          }
          return e4;
        } }, { key: "placeFreeHoles", value: function(t2, n2) {
          for (var i2 = n2.iterator(); i2.hasNext(); ) {
            var r2 = i2.next();
            if (null === r2.getShell()) {
              var s2 = e3.findEdgeRingContaining(r2, t2);
              if (null === s2) throw new vt("unable to assign hole to a shell", r2.getCoordinate(0));
              r2.setShell(s2);
            }
          }
        } }, { key: "buildMinimalEdgeRings", value: function(t2, e4, n2) {
          for (var i2 = new yt(), r2 = t2.iterator(); r2.hasNext(); ) {
            var s2 = r2.next();
            if (s2.getMaxNodeDegree() > 2) {
              s2.linkDirectedEdgesForMinimalEdgeRings();
              var a2 = s2.buildMinimalRings(), o2 = this.findShell(a2);
              null !== o2 ? (this.placePolygonHoles(o2, a2), e4.add(o2)) : n2.addAll(a2);
            } else i2.add(s2);
          }
          return i2;
        } }, { key: "buildMaximalEdgeRings", value: function(t2) {
          for (var e4 = new yt(), n2 = t2.iterator(); n2.hasNext(); ) {
            var i2 = n2.next();
            if (i2.isInResult() && i2.getLabel().isArea() && null === i2.getEdgeRing()) {
              var r2 = new Ge(i2, this._geometryFactory);
              e4.add(r2), r2.setInResult();
            }
          }
          return e4;
        } }, { key: "placePolygonHoles", value: function(t2, e4) {
          for (var n2 = e4.iterator(); n2.hasNext(); ) {
            var i2 = n2.next();
            i2.isHole() && i2.setShell(t2);
          }
        } }, { key: "getPolygons", value: function() {
          return this.computePolygons(this._shellList);
        } }, { key: "findShell", value: function(t2) {
          for (var e4 = 0, n2 = null, i2 = t2.iterator(); i2.hasNext(); ) {
            var r2 = i2.next();
            r2.isHole() || (n2 = r2, e4++);
          }
          return G.isTrue(e4 <= 1, "found two shells in MinimalEdgeRing list"), n2;
        } }, { key: "add", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            this.add(t2.getEdgeEnds(), t2.getNodes());
          } else if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            $e.linkResultDirectedEdges(n2);
            var i2 = this.buildMaximalEdgeRings(e4), r2 = new yt(), s2 = this.buildMinimalEdgeRings(i2, this._shellList, r2);
            this.sortShellsAndHoles(s2, this._shellList, r2), this.placeFreeHoles(this._shellList, r2);
          }
        } }], [{ key: "constructor_", value: function() {
          this._geometryFactory = null, this._shellList = new yt();
          var t2 = arguments[0];
          this._geometryFactory = t2;
        } }, { key: "findEdgeRingContaining", value: function(t2, e4) {
          for (var n2 = t2.getLinearRing(), i2 = n2.getEnvelopeInternal(), r2 = n2.getCoordinateN(0), s2 = null, a2 = null, o2 = e4.iterator(); o2.hasNext(); ) {
            var u5 = o2.next(), l2 = u5.getLinearRing(), h2 = l2.getEnvelopeInternal();
            if (!h2.equals(i2) && h2.contains(i2)) {
              r2 = jt.ptNotInList(n2.getCoordinates(), l2.getCoordinates());
              var c2 = false;
              Me.isInRing(r2, l2.getCoordinates()) && (c2 = true), c2 && (null === s2 || a2.contains(h2)) && (a2 = (s2 = u5).getLinearRing().getEnvelopeInternal());
            }
          }
          return s2;
        } }]), e3;
      }(), en = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "getBounds", value: function() {
        } }]), e3;
      }(), nn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getItem", value: function() {
          return this._item;
        } }, { key: "getBounds", value: function() {
          return this._bounds;
        } }, { key: "interfaces_", get: function() {
          return [en, E];
        } }], [{ key: "constructor_", value: function() {
          this._bounds = null, this._item = null;
          var t2 = arguments[0], e4 = arguments[1];
          this._bounds = t2, this._item = e4;
        } }]), e3;
      }(), rn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "poll", value: function() {
          if (this.isEmpty()) return null;
          var t2 = this._items.get(1);
          return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t2;
        } }, { key: "size", value: function() {
          return this._size;
        } }, { key: "reorder", value: function(t2) {
          for (var e4 = null, n2 = this._items.get(t2); 2 * t2 <= this._size && ((e4 = 2 * t2) !== this._size && this._items.get(e4 + 1).compareTo(this._items.get(e4)) < 0 && e4++, this._items.get(e4).compareTo(n2) < 0); t2 = e4) this._items.set(t2, this._items.get(e4));
          this._items.set(t2, n2);
        } }, { key: "clear", value: function() {
          this._size = 0, this._items.clear();
        } }, { key: "peek", value: function() {
          return this.isEmpty() ? null : this._items.get(1);
        } }, { key: "isEmpty", value: function() {
          return 0 === this._size;
        } }, { key: "add", value: function(t2) {
          this._items.add(null), this._size += 1;
          var e4 = this._size;
          for (this._items.set(0, t2); t2.compareTo(this._items.get(Math.trunc(e4 / 2))) < 0; e4 /= 2) this._items.set(e4, this._items.get(Math.trunc(e4 / 2)));
          this._items.set(e4, t2);
        } }], [{ key: "constructor_", value: function() {
          this._size = null, this._items = null, this._size = 0, this._items = new yt(), this._items.add(null);
        } }]), e3;
      }(), sn = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "insert", value: function(t2, e4) {
        } }, { key: "remove", value: function(t2, e4) {
        } }, { key: "query", value: function() {
        } }]), e3;
      }(), an = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getLevel", value: function() {
          return this._level;
        } }, { key: "size", value: function() {
          return this._childBoundables.size();
        } }, { key: "getChildBoundables", value: function() {
          return this._childBoundables;
        } }, { key: "addChildBoundable", value: function(t2) {
          G.isTrue(null === this._bounds), this._childBoundables.add(t2);
        } }, { key: "isEmpty", value: function() {
          return this._childBoundables.isEmpty();
        } }, { key: "getBounds", value: function() {
          return null === this._bounds && (this._bounds = this.computeBounds()), this._bounds;
        } }, { key: "interfaces_", get: function() {
          return [en, E];
        } }], [{ key: "constructor_", value: function() {
          if (this._childBoundables = new yt(), this._bounds = null, this._level = null, 0 === arguments.length) ;
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            this._level = t2;
          }
        } }]), e3;
      }(), on = { reverseOrder: function() {
        return { compare: function(t2, e3) {
          return e3.compareTo(t2);
        } };
      }, min: function(t2) {
        return on.sort(t2), t2.get(0);
      }, sort: function(t2, e3) {
        var n2 = t2.toArray();
        e3 ? At.sort(n2, e3) : At.sort(n2);
        for (var i2 = t2.iterator(), r2 = 0, s2 = n2.length; r2 < s2; r2++) i2.next(), i2.set(n2[r2]);
      }, singletonList: function(t2) {
        var e3 = new yt();
        return e3.add(t2), e3;
      } }, un = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "maxDistance", value: function(t2, n2, i2, r2, s2, a2, o2, u5) {
          var l2 = e3.distance(t2, n2, s2, a2);
          return l2 = Math.max(l2, e3.distance(t2, n2, o2, u5)), l2 = Math.max(l2, e3.distance(i2, r2, s2, a2)), l2 = Math.max(l2, e3.distance(i2, r2, o2, u5));
        } }, { key: "distance", value: function(t2, e4, n2, i2) {
          var r2 = n2 - t2, s2 = i2 - e4;
          return Math.sqrt(r2 * r2 + s2 * s2);
        } }, { key: "maximumDistance", value: function(t2, n2) {
          var i2 = Math.min(t2.getMinX(), n2.getMinX()), r2 = Math.min(t2.getMinY(), n2.getMinY()), s2 = Math.max(t2.getMaxX(), n2.getMaxX()), a2 = Math.max(t2.getMaxY(), n2.getMaxY());
          return e3.distance(i2, r2, s2, a2);
        } }, { key: "minMaxDistance", value: function(t2, n2) {
          var i2 = t2.getMinX(), r2 = t2.getMinY(), s2 = t2.getMaxX(), a2 = t2.getMaxY(), o2 = n2.getMinX(), u5 = n2.getMinY(), l2 = n2.getMaxX(), h2 = n2.getMaxY(), c2 = e3.maxDistance(i2, r2, i2, a2, o2, u5, o2, h2);
          return c2 = Math.min(c2, e3.maxDistance(i2, r2, i2, a2, o2, u5, l2, u5)), c2 = Math.min(c2, e3.maxDistance(i2, r2, i2, a2, l2, h2, o2, h2)), c2 = Math.min(c2, e3.maxDistance(i2, r2, i2, a2, l2, h2, l2, u5)), c2 = Math.min(c2, e3.maxDistance(i2, r2, s2, r2, o2, u5, o2, h2)), c2 = Math.min(c2, e3.maxDistance(i2, r2, s2, r2, o2, u5, l2, u5)), c2 = Math.min(c2, e3.maxDistance(i2, r2, s2, r2, l2, h2, o2, h2)), c2 = Math.min(c2, e3.maxDistance(i2, r2, s2, r2, l2, h2, l2, u5)), c2 = Math.min(c2, e3.maxDistance(s2, a2, i2, a2, o2, u5, o2, h2)), c2 = Math.min(c2, e3.maxDistance(s2, a2, i2, a2, o2, u5, l2, u5)), c2 = Math.min(c2, e3.maxDistance(s2, a2, i2, a2, l2, h2, o2, h2)), c2 = Math.min(c2, e3.maxDistance(s2, a2, i2, a2, l2, h2, l2, u5)), c2 = Math.min(c2, e3.maxDistance(s2, a2, s2, r2, o2, u5, o2, h2)), c2 = Math.min(c2, e3.maxDistance(s2, a2, s2, r2, o2, u5, l2, u5)), c2 = Math.min(c2, e3.maxDistance(s2, a2, s2, r2, l2, h2, o2, h2)), c2 = Math.min(c2, e3.maxDistance(s2, a2, s2, r2, l2, h2, l2, u5));
        } }]), e3;
      }(), ln = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "maximumDistance", value: function() {
          return un.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
        } }, { key: "expandToQueue", value: function(t2, n2) {
          var i2 = e3.isComposite(this._boundable1), r2 = e3.isComposite(this._boundable2);
          if (i2 && r2) return e3.area(this._boundable1) > e3.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, false, t2, n2), null) : (this.expand(this._boundable2, this._boundable1, true, t2, n2), null);
          if (i2) return this.expand(this._boundable1, this._boundable2, false, t2, n2), null;
          if (r2) return this.expand(this._boundable2, this._boundable1, true, t2, n2), null;
          throw new m("neither boundable is composite");
        } }, { key: "isLeaves", value: function() {
          return !(e3.isComposite(this._boundable1) || e3.isComposite(this._boundable2));
        } }, { key: "compareTo", value: function(t2) {
          var e4 = t2;
          return this._distance < e4._distance ? -1 : this._distance > e4._distance ? 1 : 0;
        } }, { key: "expand", value: function(t2, n2, i2, r2, s2) {
          for (var a2 = t2.getChildBoundables().iterator(); a2.hasNext(); ) {
            var o2 = a2.next(), u5 = null;
            (u5 = i2 ? new e3(n2, o2, this._itemDistance) : new e3(o2, n2, this._itemDistance)).getDistance() < s2 && r2.add(u5);
          }
        } }, { key: "getBoundable", value: function(t2) {
          return 0 === t2 ? this._boundable1 : this._boundable2;
        } }, { key: "getDistance", value: function() {
          return this._distance;
        } }, { key: "distance", value: function() {
          return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
        } }, { key: "interfaces_", get: function() {
          return [x2];
        } }], [{ key: "constructor_", value: function() {
          this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
          var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2];
          this._boundable1 = t2, this._boundable2 = e4, this._itemDistance = n2, this._distance = this.distance();
        } }, { key: "area", value: function(t2) {
          return t2.getBounds().getArea();
        } }, { key: "isComposite", value: function(t2) {
          return t2 instanceof an;
        } }]), e3;
      }(), hn = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "visitItem", value: function(t2) {
        } }]), e3;
      }(), cn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "queryInternal", value: function() {
          if (rt(arguments[2], hn) && arguments[0] instanceof Object && arguments[1] instanceof an) for (var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2], i2 = e4.getChildBoundables(), r2 = 0; r2 < i2.size(); r2++) {
            var s2 = i2.get(r2);
            this.getIntersectsOp().intersects(s2.getBounds(), t2) && (s2 instanceof an ? this.queryInternal(t2, s2, n2) : s2 instanceof nn ? n2.visitItem(s2.getItem()) : G.shouldNeverReachHere());
          }
          else if (rt(arguments[2], nt) && arguments[0] instanceof Object && arguments[1] instanceof an) for (var a2 = arguments[0], o2 = arguments[1], u5 = arguments[2], l2 = o2.getChildBoundables(), h2 = 0; h2 < l2.size(); h2++) {
            var c2 = l2.get(h2);
            this.getIntersectsOp().intersects(c2.getBounds(), a2) && (c2 instanceof an ? this.queryInternal(a2, c2, u5) : c2 instanceof nn ? u5.add(c2.getItem()) : G.shouldNeverReachHere());
          }
        } }, { key: "getNodeCapacity", value: function() {
          return this._nodeCapacity;
        } }, { key: "lastNode", value: function(t2) {
          return t2.get(t2.size() - 1);
        } }, { key: "size", value: function() {
          if (0 === arguments.length) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
          if (1 === arguments.length) {
            for (var t2 = arguments[0], e4 = 0, n2 = t2.getChildBoundables().iterator(); n2.hasNext(); ) {
              var i2 = n2.next();
              i2 instanceof an ? e4 += this.size(i2) : i2 instanceof nn && (e4 += 1);
            }
            return e4;
          }
        } }, { key: "removeItem", value: function(t2, e4) {
          for (var n2 = null, i2 = t2.getChildBoundables().iterator(); i2.hasNext(); ) {
            var r2 = i2.next();
            r2 instanceof nn && r2.getItem() === e4 && (n2 = r2);
          }
          return null !== n2 && (t2.getChildBoundables().remove(n2), true);
        } }, { key: "itemsTree", value: function() {
          if (0 === arguments.length) {
            this.build();
            var t2 = this.itemsTree(this._root);
            return null === t2 ? new yt() : t2;
          }
          if (1 === arguments.length) {
            for (var e4 = arguments[0], n2 = new yt(), i2 = e4.getChildBoundables().iterator(); i2.hasNext(); ) {
              var r2 = i2.next();
              if (r2 instanceof an) {
                var s2 = this.itemsTree(r2);
                null !== s2 && n2.add(s2);
              } else r2 instanceof nn ? n2.add(r2.getItem()) : G.shouldNeverReachHere();
            }
            return n2.size() <= 0 ? null : n2;
          }
        } }, { key: "insert", value: function(t2, e4) {
          G.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new nn(t2, e4));
        } }, { key: "boundablesAtLevel", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0], e4 = new yt();
            return this.boundablesAtLevel(t2, this._root, e4), e4;
          }
          if (3 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1], r2 = arguments[2];
            if (G.isTrue(n2 > -2), i2.getLevel() === n2) return r2.add(i2), null;
            for (var s2 = i2.getChildBoundables().iterator(); s2.hasNext(); ) {
              var a2 = s2.next();
              a2 instanceof an ? this.boundablesAtLevel(n2, a2, r2) : (G.isTrue(a2 instanceof nn), -1 === n2 && r2.add(a2));
            }
            return null;
          }
        } }, { key: "query", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            this.build();
            var e4 = new yt();
            return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), t2) && this.queryInternal(t2, this._root, e4), e4;
          }
          if (2 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1];
            if (this.build(), this.isEmpty()) return null;
            this.getIntersectsOp().intersects(this._root.getBounds(), n2) && this.queryInternal(n2, this._root, i2);
          }
        } }, { key: "build", value: function() {
          if (this._built) return null;
          this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = true;
        } }, { key: "getRoot", value: function() {
          return this.build(), this._root;
        } }, { key: "remove", value: function() {
          if (2 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1];
            return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), t2) && this.remove(t2, this._root, e4);
          }
          if (3 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1], r2 = arguments[2], s2 = this.removeItem(i2, r2);
            if (s2) return true;
            for (var a2 = null, o2 = i2.getChildBoundables().iterator(); o2.hasNext(); ) {
              var u5 = o2.next();
              if (this.getIntersectsOp().intersects(u5.getBounds(), n2) && (u5 instanceof an && (s2 = this.remove(n2, u5, r2)))) {
                a2 = u5;
                break;
              }
            }
            return null !== a2 && a2.getChildBoundables().isEmpty() && i2.getChildBoundables().remove(a2), s2;
          }
        } }, { key: "createHigherLevels", value: function(t2, e4) {
          G.isTrue(!t2.isEmpty());
          var n2 = this.createParentBoundables(t2, e4 + 1);
          return 1 === n2.size() ? n2.get(0) : this.createHigherLevels(n2, e4 + 1);
        } }, { key: "depth", value: function() {
          if (0 === arguments.length) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
          if (1 === arguments.length) {
            for (var t2 = arguments[0], e4 = 0, n2 = t2.getChildBoundables().iterator(); n2.hasNext(); ) {
              var i2 = n2.next();
              if (i2 instanceof an) {
                var r2 = this.depth(i2);
                r2 > e4 && (e4 = r2);
              }
            }
            return e4 + 1;
          }
        } }, { key: "createParentBoundables", value: function(t2, e4) {
          G.isTrue(!t2.isEmpty());
          var n2 = new yt();
          n2.add(this.createNode(e4));
          var i2 = new yt(t2);
          on.sort(i2, this.getComparator());
          for (var r2 = i2.iterator(); r2.hasNext(); ) {
            var s2 = r2.next();
            this.lastNode(n2).getChildBoundables().size() === this.getNodeCapacity() && n2.add(this.createNode(e4)), this.lastNode(n2).addChildBoundable(s2);
          }
          return n2;
        } }, { key: "isEmpty", value: function() {
          return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
        } }, { key: "interfaces_", get: function() {
          return [E];
        } }], [{ key: "constructor_", value: function() {
          if (this._root = null, this._built = false, this._itemBoundables = new yt(), this._nodeCapacity = null, 0 === arguments.length) e3.constructor_.call(this, e3.DEFAULT_NODE_CAPACITY);
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            G.isTrue(t2 > 1, "Node capacity must be greater than 1"), this._nodeCapacity = t2;
          }
        } }, { key: "compareDoubles", value: function(t2, e4) {
          return t2 > e4 ? 1 : t2 < e4 ? -1 : 0;
        } }]), e3;
      }();
      cn.IntersectsOp = function() {
      }, cn.DEFAULT_NODE_CAPACITY = 10;
      var fn = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "distance", value: function(t2, e4) {
        } }]), e3;
      }(), vn = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "createParentBoundablesFromVerticalSlices", value: function(t2, e4) {
          G.isTrue(t2.length > 0);
          for (var n2 = new yt(), i2 = 0; i2 < t2.length; i2++) n2.addAll(this.createParentBoundablesFromVerticalSlice(t2[i2], e4));
          return n2;
        } }, { key: "nearestNeighbourK", value: function() {
          if (2 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1];
            return this.nearestNeighbourK(t2, A.POSITIVE_INFINITY, e4);
          }
          if (3 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1], r2 = arguments[2], s3 = i2, o2 = new rn();
            o2.add(n2);
            for (var u5 = new rn(); !o2.isEmpty() && s3 >= 0; ) {
              var l2 = o2.poll(), h2 = l2.getDistance();
              if (h2 >= s3) break;
              if (l2.isLeaves()) if (u5.size() < r2) u5.add(l2);
              else {
                var c2 = u5.peek();
                c2.getDistance() > h2 && (u5.poll(), u5.add(l2));
                var f2 = u5.peek();
                s3 = f2.getDistance();
              }
              else l2.expandToQueue(o2, s3);
            }
            return a2.getItems(u5);
          }
        } }, { key: "createNode", value: function(t2) {
          return new gn(t2);
        } }, { key: "size", value: function() {
          return 0 === arguments.length ? f(r(a2.prototype), "size", this).call(this) : f(r(a2.prototype), "size", this).apply(this, arguments);
        } }, { key: "insert", value: function() {
          if (!(2 === arguments.length && arguments[1] instanceof Object && arguments[0] instanceof U)) return f(r(a2.prototype), "insert", this).apply(this, arguments);
          var t2 = arguments[0], e4 = arguments[1];
          if (t2.isNull()) return null;
          f(r(a2.prototype), "insert", this).call(this, t2, e4);
        } }, { key: "getIntersectsOp", value: function() {
          return a2.intersectsOp;
        } }, { key: "verticalSlices", value: function(t2, e4) {
          for (var n2 = Math.trunc(Math.ceil(t2.size() / e4)), i2 = new Array(e4).fill(null), r2 = t2.iterator(), s3 = 0; s3 < e4; s3++) {
            i2[s3] = new yt();
            for (var a3 = 0; r2.hasNext() && a3 < n2; ) {
              var o2 = r2.next();
              i2[s3].add(o2), a3++;
            }
          }
          return i2;
        } }, { key: "query", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return f(r(a2.prototype), "query", this).call(this, t2);
          }
          if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            f(r(a2.prototype), "query", this).call(this, e4, n2);
          }
        } }, { key: "getComparator", value: function() {
          return a2.yComparator;
        } }, { key: "createParentBoundablesFromVerticalSlice", value: function(t2, e4) {
          return f(r(a2.prototype), "createParentBoundables", this).call(this, t2, e4);
        } }, { key: "remove", value: function() {
          if (2 === arguments.length && arguments[1] instanceof Object && arguments[0] instanceof U) {
            var t2 = arguments[0], e4 = arguments[1];
            return f(r(a2.prototype), "remove", this).call(this, t2, e4);
          }
          return f(r(a2.prototype), "remove", this).apply(this, arguments);
        } }, { key: "depth", value: function() {
          return 0 === arguments.length ? f(r(a2.prototype), "depth", this).call(this) : f(r(a2.prototype), "depth", this).apply(this, arguments);
        } }, { key: "createParentBoundables", value: function(t2, e4) {
          G.isTrue(!t2.isEmpty());
          var n2 = Math.trunc(Math.ceil(t2.size() / this.getNodeCapacity())), i2 = new yt(t2);
          on.sort(i2, a2.xComparator);
          var r2 = this.verticalSlices(i2, Math.trunc(Math.ceil(Math.sqrt(n2))));
          return this.createParentBoundablesFromVerticalSlices(r2, e4);
        } }, { key: "nearestNeighbour", value: function() {
          if (1 === arguments.length) {
            if (rt(arguments[0], fn)) {
              var t2 = arguments[0];
              if (this.isEmpty()) return null;
              var e4 = new ln(this.getRoot(), this.getRoot(), t2);
              return this.nearestNeighbour(e4);
            }
            if (arguments[0] instanceof ln) {
              var n2 = arguments[0], i2 = A.POSITIVE_INFINITY, r2 = null, s3 = new rn();
              for (s3.add(n2); !s3.isEmpty() && i2 > 0; ) {
                var a3 = s3.poll(), o2 = a3.getDistance();
                if (o2 >= i2) break;
                a3.isLeaves() ? (i2 = o2, r2 = a3) : a3.expandToQueue(s3, i2);
              }
              return null === r2 ? null : [r2.getBoundable(0).getItem(), r2.getBoundable(1).getItem()];
            }
          } else {
            if (2 === arguments.length) {
              var u5 = arguments[0], l2 = arguments[1];
              if (this.isEmpty() || u5.isEmpty()) return null;
              var h2 = new ln(this.getRoot(), u5.getRoot(), l2);
              return this.nearestNeighbour(h2);
            }
            if (3 === arguments.length) {
              var c2 = arguments[0], f2 = arguments[1], v3 = arguments[2], g2 = new nn(c2, f2), y3 = new ln(this.getRoot(), g2, v3);
              return this.nearestNeighbour(y3)[0];
            }
            if (4 === arguments.length) {
              var d2 = arguments[0], _2 = arguments[1], p2 = arguments[2], m2 = arguments[3], k2 = new nn(d2, _2), x3 = new ln(this.getRoot(), k2, p2);
              return this.nearestNeighbourK(x3, m2);
            }
          }
        } }, { key: "isWithinDistance", value: function() {
          if (2 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1], n2 = A.POSITIVE_INFINITY, i2 = new rn();
            for (i2.add(t2); !i2.isEmpty(); ) {
              var r2 = i2.poll(), s3 = r2.getDistance();
              if (s3 > e4) return false;
              if (r2.maximumDistance() <= e4) return true;
              if (r2.isLeaves()) {
                if ((n2 = s3) <= e4) return true;
              } else r2.expandToQueue(i2, n2);
            }
            return false;
          }
          if (3 === arguments.length) {
            var a3 = arguments[0], o2 = arguments[1], u5 = arguments[2], l2 = new ln(this.getRoot(), a3.getRoot(), o2);
            return this.isWithinDistance(l2, u5);
          }
        } }, { key: "interfaces_", get: function() {
          return [sn, E];
        } }], [{ key: "constructor_", value: function() {
          if (0 === arguments.length) a2.constructor_.call(this, a2.DEFAULT_NODE_CAPACITY);
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            cn.constructor_.call(this, t2);
          }
        } }, { key: "centreX", value: function(t2) {
          return a2.avg(t2.getMinX(), t2.getMaxX());
        } }, { key: "avg", value: function(t2, e4) {
          return (t2 + e4) / 2;
        } }, { key: "getItems", value: function(t2) {
          for (var e4 = new Array(t2.size()).fill(null), n2 = 0; !t2.isEmpty(); ) {
            var i2 = t2.poll();
            e4[n2] = i2.getBoundable(0).getItem(), n2++;
          }
          return e4;
        } }, { key: "centreY", value: function(t2) {
          return a2.avg(t2.getMinY(), t2.getMaxY());
        } }]), a2;
      }(cn), gn = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), e4 = r2.call(this), s2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(s2, [{ key: "computeBounds", value: function() {
          for (var t2 = null, e4 = this.getChildBoundables().iterator(); e4.hasNext(); ) {
            var n2 = e4.next();
            null === t2 ? t2 = new U(n2.getBounds()) : t2.expandToInclude(n2.getBounds());
          }
          return t2;
        } }], [{ key: "constructor_", value: function() {
          var t2 = arguments[0];
          an.constructor_.call(this, t2);
        } }]), s2;
      }(an);
      vn.STRtreeNode = gn, vn.xComparator = new (function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "interfaces_", get: function() {
          return [P];
        } }, { key: "compare", value: function(t2, e4) {
          return cn.compareDoubles(vn.centreX(t2.getBounds()), vn.centreX(e4.getBounds()));
        } }]), e3;
      }())(), vn.yComparator = new (function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "interfaces_", get: function() {
          return [P];
        } }, { key: "compare", value: function(t2, e4) {
          return cn.compareDoubles(vn.centreY(t2.getBounds()), vn.centreY(e4.getBounds()));
        } }]), e3;
      }())(), vn.intersectsOp = new (function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "interfaces_", get: function() {
          return [IntersectsOp];
        } }, { key: "intersects", value: function(t2, e4) {
          return t2.intersects(e4);
        } }]), e3;
      }())(), vn.DEFAULT_NODE_CAPACITY = 10;
      var yn = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "relativeSign", value: function(t2, e4) {
          return t2 < e4 ? -1 : t2 > e4 ? 1 : 0;
        } }, { key: "compare", value: function(t2, n2, i2) {
          if (n2.equals2D(i2)) return 0;
          var r2 = e3.relativeSign(n2.x, i2.x), s2 = e3.relativeSign(n2.y, i2.y);
          switch (t2) {
            case 0:
              return e3.compareValue(r2, s2);
            case 1:
              return e3.compareValue(s2, r2);
            case 2:
              return e3.compareValue(s2, -r2);
            case 3:
              return e3.compareValue(-r2, s2);
            case 4:
              return e3.compareValue(-r2, -s2);
            case 5:
              return e3.compareValue(-s2, -r2);
            case 6:
              return e3.compareValue(-s2, r2);
            case 7:
              return e3.compareValue(r2, -s2);
          }
          return G.shouldNeverReachHere("invalid octant value"), 0;
        } }, { key: "compareValue", value: function(t2, e4) {
          return t2 < 0 ? -1 : t2 > 0 ? 1 : e4 < 0 ? -1 : e4 > 0 ? 1 : 0;
        } }]), e3;
      }(), dn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getCoordinate", value: function() {
          return this.coord;
        } }, { key: "print", value: function(t2) {
          t2.print(this.coord), t2.print(" seg # = " + this.segmentIndex);
        } }, { key: "compareTo", value: function(t2) {
          var e4 = t2;
          return this.segmentIndex < e4.segmentIndex ? -1 : this.segmentIndex > e4.segmentIndex ? 1 : this.coord.equals2D(e4.coord) ? 0 : this._isInterior ? e4._isInterior ? yn.compare(this._segmentOctant, this.coord, e4.coord) : 1 : -1;
        } }, { key: "isEndPoint", value: function(t2) {
          return 0 === this.segmentIndex && !this._isInterior || this.segmentIndex === t2;
        } }, { key: "toString", value: function() {
          return this.segmentIndex + ":" + this.coord.toString();
        } }, { key: "isInterior", value: function() {
          return this._isInterior;
        } }, { key: "interfaces_", get: function() {
          return [x2];
        } }], [{ key: "constructor_", value: function() {
          this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
          var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2], i2 = arguments[3];
          this._segString = t2, this.coord = new X(e4), this.segmentIndex = n2, this._segmentOctant = i2, this._isInterior = !e4.equals2D(t2.getCoordinate(n2));
        } }]), e3;
      }(), _n = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "hasNext", value: function() {
        } }, { key: "next", value: function() {
        } }, { key: "remove", value: function() {
        } }]), e3;
      }(), pn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getSplitCoordinates", value: function() {
          var t2 = new Zt();
          this.addEndpoints();
          for (var e4 = this.iterator(), n2 = e4.next(); e4.hasNext(); ) {
            var i2 = e4.next();
            this.addEdgeCoordinates(n2, i2, t2), n2 = i2;
          }
          return t2.toCoordinateArray();
        } }, { key: "addCollapsedNodes", value: function() {
          var t2 = new yt();
          this.findCollapsesFromInsertedNodes(t2), this.findCollapsesFromExistingVertices(t2);
          for (var e4 = t2.iterator(); e4.hasNext(); ) {
            var n2 = e4.next().intValue();
            this.add(this._edge.getCoordinate(n2), n2);
          }
        } }, { key: "createSplitEdgePts", value: function(t2, e4) {
          var n2 = e4.segmentIndex - t2.segmentIndex + 2;
          if (2 === n2) return [new X(t2.coord), new X(e4.coord)];
          var i2 = this._edge.getCoordinate(e4.segmentIndex), r2 = e4.isInterior() || !e4.coord.equals2D(i2);
          r2 || n2--;
          var s2 = new Array(n2).fill(null), a2 = 0;
          s2[a2++] = new X(t2.coord);
          for (var o2 = t2.segmentIndex + 1; o2 <= e4.segmentIndex; o2++) s2[a2++] = this._edge.getCoordinate(o2);
          return r2 && (s2[a2] = new X(e4.coord)), s2;
        } }, { key: "print", value: function(t2) {
          t2.println("Intersections:");
          for (var e4 = this.iterator(); e4.hasNext(); ) {
            e4.next().print(t2);
          }
        } }, { key: "findCollapsesFromExistingVertices", value: function(t2) {
          for (var e4 = 0; e4 < this._edge.size() - 2; e4++) {
            var n2 = this._edge.getCoordinate(e4);
            this._edge.getCoordinate(e4 + 1);
            var i2 = this._edge.getCoordinate(e4 + 2);
            n2.equals2D(i2) && t2.add(at.valueOf(e4 + 1));
          }
        } }, { key: "addEdgeCoordinates", value: function(t2, e4, n2) {
          var i2 = this.createSplitEdgePts(t2, e4);
          n2.add(i2, false);
        } }, { key: "iterator", value: function() {
          return this._nodeMap.values().iterator();
        } }, { key: "addSplitEdges", value: function(t2) {
          this.addEndpoints(), this.addCollapsedNodes();
          for (var e4 = this.iterator(), n2 = e4.next(); e4.hasNext(); ) {
            var i2 = e4.next(), r2 = this.createSplitEdge(n2, i2);
            t2.add(r2), n2 = i2;
          }
        } }, { key: "findCollapseIndex", value: function(t2, e4, n2) {
          if (!t2.coord.equals2D(e4.coord)) return false;
          var i2 = e4.segmentIndex - t2.segmentIndex;
          return e4.isInterior() || i2--, 1 === i2 && (n2[0] = t2.segmentIndex + 1, true);
        } }, { key: "findCollapsesFromInsertedNodes", value: function(t2) {
          for (var e4 = new Array(1).fill(null), n2 = this.iterator(), i2 = n2.next(); n2.hasNext(); ) {
            var r2 = n2.next();
            this.findCollapseIndex(i2, r2, e4) && t2.add(at.valueOf(e4[0])), i2 = r2;
          }
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "addEndpoints", value: function() {
          var t2 = this._edge.size() - 1;
          this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t2), t2);
        } }, { key: "createSplitEdge", value: function(t2, e4) {
          var n2 = this.createSplitEdgePts(t2, e4);
          return new In(n2, this._edge.getData());
        } }, { key: "add", value: function(t2, e4) {
          var n2 = new dn(this._edge, t2, e4, this._edge.getSegmentOctant(e4)), i2 = this._nodeMap.get(n2);
          return null !== i2 ? (G.isTrue(i2.coord.equals2D(t2), "Found equal nodes with different coordinates"), i2) : (this._nodeMap.put(n2, n2), n2);
        } }, { key: "checkSplitEdgesCorrectness", value: function(t2) {
          var e4 = this._edge.getCoordinates(), n2 = t2.get(0).getCoordinate(0);
          if (!n2.equals2D(e4[0])) throw new D2("bad split edge start point at " + n2);
          var i2 = t2.get(t2.size() - 1).getCoordinates(), r2 = i2[i2.length - 1];
          if (!r2.equals2D(e4[e4.length - 1])) throw new D2("bad split edge end point at " + r2);
        } }], [{ key: "constructor_", value: function() {
          this._nodeMap = new Ze(), this._edge = null;
          var t2 = arguments[0];
          this._edge = t2;
        } }]), e3;
      }(), mn = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "octant", value: function() {
          if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
            var t2 = arguments[0], n2 = arguments[1];
            if (0 === t2 && 0 === n2) throw new m("Cannot compute the octant for point ( " + t2 + ", " + n2 + " )");
            var i2 = Math.abs(t2), r2 = Math.abs(n2);
            return t2 >= 0 ? n2 >= 0 ? i2 >= r2 ? 0 : 1 : i2 >= r2 ? 7 : 6 : n2 >= 0 ? i2 >= r2 ? 3 : 2 : i2 >= r2 ? 4 : 5;
          }
          if (arguments[0] instanceof X && arguments[1] instanceof X) {
            var s2 = arguments[0], a2 = arguments[1], o2 = a2.x - s2.x, u5 = a2.y - s2.y;
            if (0 === o2 && 0 === u5) throw new m("Cannot compute the octant for two identical points " + s2);
            return e3.octant(o2, u5);
          }
        } }]), e3;
      }(), kn = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "getCoordinates", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "getCoordinate", value: function(t2) {
        } }, { key: "isClosed", value: function() {
        } }, { key: "setData", value: function(t2) {
        } }, { key: "getData", value: function() {
        } }]), e3;
      }(), xn = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "addIntersection", value: function(t2, e4) {
        } }, { key: "interfaces_", get: function() {
          return [kn];
        } }]), e3;
      }(), In = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getCoordinates", value: function() {
          return this._pts;
        } }, { key: "size", value: function() {
          return this._pts.length;
        } }, { key: "getCoordinate", value: function(t2) {
          return this._pts[t2];
        } }, { key: "isClosed", value: function() {
          return this._pts[0].equals(this._pts[this._pts.length - 1]);
        } }, { key: "getSegmentOctant", value: function(t2) {
          return t2 === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t2), this.getCoordinate(t2 + 1));
        } }, { key: "setData", value: function(t2) {
          this._data = t2;
        } }, { key: "safeOctant", value: function(t2, e4) {
          return t2.equals2D(e4) ? 0 : mn.octant(t2, e4);
        } }, { key: "getData", value: function() {
          return this._data;
        } }, { key: "addIntersection", value: function() {
          if (2 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1];
            this.addIntersectionNode(t2, e4);
          } else if (4 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1], r2 = arguments[3], s2 = new X(n2.getIntersection(r2));
            this.addIntersection(s2, i2);
          }
        } }, { key: "toString", value: function() {
          return Re.toLineString(new Qt(this._pts));
        } }, { key: "getNodeList", value: function() {
          return this._nodeList;
        } }, { key: "addIntersectionNode", value: function(t2, e4) {
          var n2 = e4, i2 = n2 + 1;
          if (i2 < this._pts.length) {
            var r2 = this._pts[i2];
            t2.equals2D(r2) && (n2 = i2);
          }
          return this._nodeList.add(t2, n2);
        } }, { key: "addIntersections", value: function(t2, e4, n2) {
          for (var i2 = 0; i2 < t2.getIntersectionNum(); i2++) this.addIntersection(t2, e4, n2, i2);
        } }, { key: "interfaces_", get: function() {
          return [xn];
        } }], [{ key: "constructor_", value: function() {
          this._nodeList = new pn(this), this._pts = null, this._data = null;
          var t2 = arguments[0], e4 = arguments[1];
          this._pts = t2, this._data = e4;
        } }, { key: "getNodedSubstrings", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0], n2 = new yt();
            return e3.getNodedSubstrings(t2, n2), n2;
          }
          if (2 === arguments.length) for (var i2 = arguments[0], r2 = arguments[1], s2 = i2.iterator(); s2.hasNext(); ) {
            var a2 = s2.next();
            a2.getNodeList().addSplitEdges(r2);
          }
        } }]), e3;
      }(), En = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "minX", value: function() {
          return Math.min(this.p0.x, this.p1.x);
        } }, { key: "orientationIndex", value: function() {
          if (arguments[0] instanceof e3) {
            var t2 = arguments[0], n2 = ct.index(this.p0, this.p1, t2.p0), i2 = ct.index(this.p0, this.p1, t2.p1);
            return n2 >= 0 && i2 >= 0 || n2 <= 0 && i2 <= 0 ? Math.max(n2, i2) : 0;
          }
          if (arguments[0] instanceof X) {
            var r2 = arguments[0];
            return ct.index(this.p0, this.p1, r2);
          }
        } }, { key: "toGeometry", value: function(t2) {
          return t2.createLineString([this.p0, this.p1]);
        } }, { key: "isVertical", value: function() {
          return this.p0.x === this.p1.x;
        } }, { key: "equals", value: function(t2) {
          if (!(t2 instanceof e3)) return false;
          var n2 = t2;
          return this.p0.equals(n2.p0) && this.p1.equals(n2.p1);
        } }, { key: "intersection", value: function(t2) {
          var e4 = new Oe();
          return e4.computeIntersection(this.p0, this.p1, t2.p0, t2.p1), e4.hasIntersection() ? e4.getIntersection(0) : null;
        } }, { key: "project", value: function() {
          if (arguments[0] instanceof X) {
            var t2 = arguments[0];
            if (t2.equals(this.p0) || t2.equals(this.p1)) return new X(t2);
            var n2 = this.projectionFactor(t2), i2 = new X();
            return i2.x = this.p0.x + n2 * (this.p1.x - this.p0.x), i2.y = this.p0.y + n2 * (this.p1.y - this.p0.y), i2;
          }
          if (arguments[0] instanceof e3) {
            var r2 = arguments[0], s2 = this.projectionFactor(r2.p0), a2 = this.projectionFactor(r2.p1);
            if (s2 >= 1 && a2 >= 1) return null;
            if (s2 <= 0 && a2 <= 0) return null;
            var o2 = this.project(r2.p0);
            s2 < 0 && (o2 = this.p0), s2 > 1 && (o2 = this.p1);
            var u5 = this.project(r2.p1);
            return a2 < 0 && (u5 = this.p0), a2 > 1 && (u5 = this.p1), new e3(o2, u5);
          }
        } }, { key: "normalize", value: function() {
          this.p1.compareTo(this.p0) < 0 && this.reverse();
        } }, { key: "angle", value: function() {
          return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
        } }, { key: "getCoordinate", value: function(t2) {
          return 0 === t2 ? this.p0 : this.p1;
        } }, { key: "distancePerpendicular", value: function(t2) {
          return xt.pointToLinePerpendicular(t2, this.p0, this.p1);
        } }, { key: "minY", value: function() {
          return Math.min(this.p0.y, this.p1.y);
        } }, { key: "midPoint", value: function() {
          return e3.midPoint(this.p0, this.p1);
        } }, { key: "projectionFactor", value: function(t2) {
          if (t2.equals(this.p0)) return 0;
          if (t2.equals(this.p1)) return 1;
          var e4 = this.p1.x - this.p0.x, n2 = this.p1.y - this.p0.y, i2 = e4 * e4 + n2 * n2;
          return i2 <= 0 ? A.NaN : ((t2.x - this.p0.x) * e4 + (t2.y - this.p0.y) * n2) / i2;
        } }, { key: "closestPoints", value: function(t2) {
          var e4 = this.intersection(t2);
          if (null !== e4) return [e4, e4];
          var n2 = new Array(2).fill(null), i2 = A.MAX_VALUE, r2 = null, s2 = this.closestPoint(t2.p0);
          i2 = s2.distance(t2.p0), n2[0] = s2, n2[1] = t2.p0;
          var a2 = this.closestPoint(t2.p1);
          (r2 = a2.distance(t2.p1)) < i2 && (i2 = r2, n2[0] = a2, n2[1] = t2.p1);
          var o2 = t2.closestPoint(this.p0);
          (r2 = o2.distance(this.p0)) < i2 && (i2 = r2, n2[0] = this.p0, n2[1] = o2);
          var u5 = t2.closestPoint(this.p1);
          return (r2 = u5.distance(this.p1)) < i2 && (i2 = r2, n2[0] = this.p1, n2[1] = u5), n2;
        } }, { key: "closestPoint", value: function(t2) {
          var e4 = this.projectionFactor(t2);
          return e4 > 0 && e4 < 1 ? this.project(t2) : this.p0.distance(t2) < this.p1.distance(t2) ? this.p0 : this.p1;
        } }, { key: "maxX", value: function() {
          return Math.max(this.p0.x, this.p1.x);
        } }, { key: "getLength", value: function() {
          return this.p0.distance(this.p1);
        } }, { key: "compareTo", value: function(t2) {
          var e4 = t2, n2 = this.p0.compareTo(e4.p0);
          return 0 !== n2 ? n2 : this.p1.compareTo(e4.p1);
        } }, { key: "reverse", value: function() {
          var t2 = this.p0;
          this.p0 = this.p1, this.p1 = t2;
        } }, { key: "equalsTopo", value: function(t2) {
          return this.p0.equals(t2.p0) && this.p1.equals(t2.p1) || this.p0.equals(t2.p1) && this.p1.equals(t2.p0);
        } }, { key: "lineIntersection", value: function(t2) {
          return pt.intersection(this.p0, this.p1, t2.p0, t2.p1);
        } }, { key: "maxY", value: function() {
          return Math.max(this.p0.y, this.p1.y);
        } }, { key: "pointAlongOffset", value: function(t2, e4) {
          var n2 = this.p0.x + t2 * (this.p1.x - this.p0.x), i2 = this.p0.y + t2 * (this.p1.y - this.p0.y), r2 = this.p1.x - this.p0.x, s2 = this.p1.y - this.p0.y, a2 = Math.sqrt(r2 * r2 + s2 * s2), o2 = 0, u5 = 0;
          if (0 !== e4) {
            if (a2 <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
            o2 = e4 * r2 / a2, u5 = e4 * s2 / a2;
          }
          return new X(n2 - u5, i2 + o2);
        } }, { key: "setCoordinates", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            this.setCoordinates(t2.p0, t2.p1);
          } else if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            this.p0.x = e4.x, this.p0.y = e4.y, this.p1.x = n2.x, this.p1.y = n2.y;
          }
        } }, { key: "segmentFraction", value: function(t2) {
          var e4 = this.projectionFactor(t2);
          return e4 < 0 ? e4 = 0 : (e4 > 1 || A.isNaN(e4)) && (e4 = 1), e4;
        } }, { key: "toString", value: function() {
          return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
        } }, { key: "isHorizontal", value: function() {
          return this.p0.y === this.p1.y;
        } }, { key: "reflect", value: function(t2) {
          var e4 = this.p1.getY() - this.p0.getY(), n2 = this.p0.getX() - this.p1.getX(), i2 = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), r2 = e4 * e4 + n2 * n2, s2 = e4 * e4 - n2 * n2, a2 = t2.getX(), o2 = t2.getY();
          return new X((-s2 * a2 - 2 * e4 * n2 * o2 - 2 * e4 * i2) / r2, (s2 * o2 - 2 * e4 * n2 * a2 - 2 * n2 * i2) / r2);
        } }, { key: "distance", value: function() {
          if (arguments[0] instanceof e3) {
            var t2 = arguments[0];
            return xt.segmentToSegment(this.p0, this.p1, t2.p0, t2.p1);
          }
          if (arguments[0] instanceof X) {
            var n2 = arguments[0];
            return xt.pointToSegment(n2, this.p0, this.p1);
          }
        } }, { key: "pointAlong", value: function(t2) {
          var e4 = new X();
          return e4.x = this.p0.x + t2 * (this.p1.x - this.p0.x), e4.y = this.p0.y + t2 * (this.p1.y - this.p0.y), e4;
        } }, { key: "hashCode", value: function() {
          var t2 = A.doubleToLongBits(this.p0.x);
          t2 ^= 31 * A.doubleToLongBits(this.p0.y);
          var e4 = Math.trunc(t2) ^ Math.trunc(t2 >> 32), n2 = A.doubleToLongBits(this.p1.x);
          return n2 ^= 31 * A.doubleToLongBits(this.p1.y), e4 ^ (Math.trunc(n2) ^ Math.trunc(n2 >> 32));
        } }, { key: "interfaces_", get: function() {
          return [x2, E];
        } }], [{ key: "constructor_", value: function() {
          if (this.p0 = null, this.p1 = null, 0 === arguments.length) e3.constructor_.call(this, new X(), new X());
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            e3.constructor_.call(this, t2.p0, t2.p1);
          } else if (2 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1];
            this.p0 = n2, this.p1 = i2;
          } else if (4 === arguments.length) {
            var r2 = arguments[0], s2 = arguments[1], a2 = arguments[2], o2 = arguments[3];
            e3.constructor_.call(this, new X(r2, s2), new X(a2, o2));
          }
        } }, { key: "midPoint", value: function(t2, e4) {
          return new X((t2.x + e4.x) / 2, (t2.y + e4.y) / 2);
        } }]), e3;
      }(), Nn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "overlap", value: function() {
          if (2 === arguments.length) ;
          else if (4 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2], i2 = arguments[3];
            t2.getLineSegment(e4, this._overlapSeg1), n2.getLineSegment(i2, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
          }
        } }], [{ key: "constructor_", value: function() {
          this._overlapSeg1 = new En(), this._overlapSeg2 = new En();
        } }]), e3;
      }(), Tn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getLineSegment", value: function(t2, e4) {
          e4.p0 = this._pts[t2], e4.p1 = this._pts[t2 + 1];
        } }, { key: "computeSelect", value: function(t2, e4, n2, i2) {
          var r2 = this._pts[e4], s2 = this._pts[n2];
          if (n2 - e4 == 1) return i2.select(this, e4), null;
          if (!t2.intersects(r2, s2)) return null;
          var a2 = Math.trunc((e4 + n2) / 2);
          e4 < a2 && this.computeSelect(t2, e4, a2, i2), a2 < n2 && this.computeSelect(t2, a2, n2, i2);
        } }, { key: "getCoordinates", value: function() {
          for (var t2 = new Array(this._end - this._start + 1).fill(null), e4 = 0, n2 = this._start; n2 <= this._end; n2++) t2[e4++] = this._pts[n2];
          return t2;
        } }, { key: "computeOverlaps", value: function() {
          if (2 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1];
            this.computeOverlaps(this._start, this._end, t2, t2._start, t2._end, e4);
          } else if (6 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1], r2 = arguments[2], s2 = arguments[3], a2 = arguments[4], o2 = arguments[5];
            if (i2 - n2 == 1 && a2 - s2 == 1) return o2.overlap(this, n2, r2, s2), null;
            if (!this.overlaps(n2, i2, r2, s2, a2)) return null;
            var u5 = Math.trunc((n2 + i2) / 2), l2 = Math.trunc((s2 + a2) / 2);
            n2 < u5 && (s2 < l2 && this.computeOverlaps(n2, u5, r2, s2, l2, o2), l2 < a2 && this.computeOverlaps(n2, u5, r2, l2, a2, o2)), u5 < i2 && (s2 < l2 && this.computeOverlaps(u5, i2, r2, s2, l2, o2), l2 < a2 && this.computeOverlaps(u5, i2, r2, l2, a2, o2));
          }
        } }, { key: "setId", value: function(t2) {
          this._id = t2;
        } }, { key: "select", value: function(t2, e4) {
          this.computeSelect(t2, this._start, this._end, e4);
        } }, { key: "getEnvelope", value: function() {
          if (null === this._env) {
            var t2 = this._pts[this._start], e4 = this._pts[this._end];
            this._env = new U(t2, e4);
          }
          return this._env;
        } }, { key: "overlaps", value: function(t2, e4, n2, i2, r2) {
          return U.intersects(this._pts[t2], this._pts[e4], n2._pts[i2], n2._pts[r2]);
        } }, { key: "getEndIndex", value: function() {
          return this._end;
        } }, { key: "getStartIndex", value: function() {
          return this._start;
        } }, { key: "getContext", value: function() {
          return this._context;
        } }, { key: "getId", value: function() {
          return this._id;
        } }], [{ key: "constructor_", value: function() {
          this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
          var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2], i2 = arguments[3];
          this._pts = t2, this._start = e4, this._end = n2, this._context = i2;
        } }]), e3;
      }(), Sn = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "findChainEnd", value: function(t2, e4) {
          for (var n2 = e4; n2 < t2.length - 1 && t2[n2].equals2D(t2[n2 + 1]); ) n2++;
          if (n2 >= t2.length - 1) return t2.length - 1;
          for (var i2 = We.quadrant(t2[n2], t2[n2 + 1]), r2 = e4 + 1; r2 < t2.length; ) {
            if (!t2[r2 - 1].equals2D(t2[r2])) {
              if (We.quadrant(t2[r2 - 1], t2[r2]) !== i2) break;
            }
            r2++;
          }
          return r2 - 1;
        } }, { key: "getChains", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return e3.getChains(t2, null);
          }
          if (2 === arguments.length) {
            var n2 = arguments[0], i2 = arguments[1], r2 = new yt(), s2 = 0;
            do {
              var a2 = e3.findChainEnd(n2, s2), o2 = new Tn(n2, s2, a2, i2);
              r2.add(o2), s2 = a2;
            } while (s2 < n2.length - 1);
            return r2;
          }
        } }]), e3;
      }(), Ln = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "computeNodes", value: function(t2) {
        } }, { key: "getNodedSubstrings", value: function() {
        } }]), e3;
      }(), Cn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "setSegmentIntersector", value: function(t2) {
          this._segInt = t2;
        } }, { key: "interfaces_", get: function() {
          return [Ln];
        } }], [{ key: "constructor_", value: function() {
          if (this._segInt = null, 0 === arguments.length) ;
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            this.setSegmentIntersector(t2);
          }
        } }]), e3;
      }(), Rn = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), e4 = r2.call(this), s2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(s2, [{ key: "getMonotoneChains", value: function() {
          return this._monoChains;
        } }, { key: "getNodedSubstrings", value: function() {
          return In.getNodedSubstrings(this._nodedSegStrings);
        } }, { key: "getIndex", value: function() {
          return this._index;
        } }, { key: "add", value: function(t2) {
          for (var e4 = Sn.getChains(t2.getCoordinates(), t2).iterator(); e4.hasNext(); ) {
            var n2 = e4.next();
            n2.setId(this._idCounter++), this._index.insert(n2.getEnvelope(), n2), this._monoChains.add(n2);
          }
        } }, { key: "computeNodes", value: function(t2) {
          this._nodedSegStrings = t2;
          for (var e4 = t2.iterator(); e4.hasNext(); ) this.add(e4.next());
          this.intersectChains();
        } }, { key: "intersectChains", value: function() {
          for (var t2 = new wn(this._segInt), e4 = this._monoChains.iterator(); e4.hasNext(); ) for (var n2 = e4.next(), i2 = this._index.query(n2.getEnvelope()).iterator(); i2.hasNext(); ) {
            var r3 = i2.next();
            if (r3.getId() > n2.getId() && (n2.computeOverlaps(r3, t2), this._nOverlaps++), this._segInt.isDone()) return null;
          }
        } }], [{ key: "constructor_", value: function() {
          if (this._monoChains = new yt(), this._index = new vn(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, 0 === arguments.length) ;
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            Cn.constructor_.call(this, t2);
          }
        } }]), s2;
      }(Cn), wn = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "overlap", value: function() {
          if (4 !== arguments.length) return f(r(a2.prototype), "overlap", this).apply(this, arguments);
          var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2], i2 = arguments[3], s3 = t2.getContext(), o2 = n2.getContext();
          this._si.processIntersections(s3, e4, o2, i2);
        } }], [{ key: "constructor_", value: function() {
          this._si = null;
          var t2 = arguments[0];
          this._si = t2;
        } }]), a2;
      }(Nn);
      Rn.SegmentOverlapAction = wn;
      var On = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "isDeletable", value: function(t2, e4, n2, i2) {
          var r2 = this._inputLine[t2], s2 = this._inputLine[e4], a2 = this._inputLine[n2];
          return !!this.isConcave(r2, s2, a2) && (!!this.isShallow(r2, s2, a2, i2) && this.isShallowSampled(r2, s2, t2, n2, i2));
        } }, { key: "deleteShallowConcavities", value: function() {
          for (var t2 = 1, n2 = this.findNextNonDeletedIndex(t2), i2 = this.findNextNonDeletedIndex(n2), r2 = false; i2 < this._inputLine.length; ) {
            var s2 = false;
            this.isDeletable(t2, n2, i2, this._distanceTol) && (this._isDeleted[n2] = e3.DELETE, s2 = true, r2 = true), t2 = s2 ? i2 : n2, n2 = this.findNextNonDeletedIndex(t2), i2 = this.findNextNonDeletedIndex(n2);
          }
          return r2;
        } }, { key: "isShallowConcavity", value: function(t2, e4, n2, i2) {
          return ct.index(t2, e4, n2) === this._angleOrientation && xt.pointToSegment(e4, t2, n2) < i2;
        } }, { key: "isShallowSampled", value: function(t2, n2, i2, r2, s2) {
          var a2 = Math.trunc((r2 - i2) / e3.NUM_PTS_TO_CHECK);
          a2 <= 0 && (a2 = 1);
          for (var o2 = i2; o2 < r2; o2 += a2) if (!this.isShallow(t2, n2, this._inputLine[o2], s2)) return false;
          return true;
        } }, { key: "isConcave", value: function(t2, e4, n2) {
          var i2 = ct.index(t2, e4, n2) === this._angleOrientation;
          return i2;
        } }, { key: "simplify", value: function(t2) {
          this._distanceTol = Math.abs(t2), t2 < 0 && (this._angleOrientation = ct.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
          var e4 = false;
          do {
            e4 = this.deleteShallowConcavities();
          } while (e4);
          return this.collapseLine();
        } }, { key: "findNextNonDeletedIndex", value: function(t2) {
          for (var n2 = t2 + 1; n2 < this._inputLine.length && this._isDeleted[n2] === e3.DELETE; ) n2++;
          return n2;
        } }, { key: "isShallow", value: function(t2, e4, n2, i2) {
          return xt.pointToSegment(e4, t2, n2) < i2;
        } }, { key: "collapseLine", value: function() {
          for (var t2 = new Zt(), n2 = 0; n2 < this._inputLine.length; n2++) this._isDeleted[n2] !== e3.DELETE && t2.add(this._inputLine[n2]);
          return t2.toCoordinateArray();
        } }], [{ key: "constructor_", value: function() {
          this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = ct.COUNTERCLOCKWISE;
          var t2 = arguments[0];
          this._inputLine = t2;
        } }, { key: "simplify", value: function(t2, n2) {
          return new e3(t2).simplify(n2);
        } }]), e3;
      }();
      On.INIT = 0, On.DELETE = 1, On.KEEP = 1, On.NUM_PTS_TO_CHECK = 10;
      var bn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getCoordinates", value: function() {
          return this._ptList.toArray(e3.COORDINATE_ARRAY_TYPE);
        } }, { key: "setPrecisionModel", value: function(t2) {
          this._precisionModel = t2;
        } }, { key: "addPt", value: function(t2) {
          var e4 = new X(t2);
          if (this._precisionModel.makePrecise(e4), this.isRedundant(e4)) return null;
          this._ptList.add(e4);
        } }, { key: "reverse", value: function() {
        } }, { key: "addPts", value: function(t2, e4) {
          if (e4) for (var n2 = 0; n2 < t2.length; n2++) this.addPt(t2[n2]);
          else for (var i2 = t2.length - 1; i2 >= 0; i2--) this.addPt(t2[i2]);
        } }, { key: "isRedundant", value: function(t2) {
          if (this._ptList.size() < 1) return false;
          var e4 = this._ptList.get(this._ptList.size() - 1);
          return t2.distance(e4) < this._minimimVertexDistance;
        } }, { key: "toString", value: function() {
          return new ae().createLineString(this.getCoordinates()).toString();
        } }, { key: "closeRing", value: function() {
          if (this._ptList.size() < 1) return null;
          var t2 = new X(this._ptList.get(0)), e4 = this._ptList.get(this._ptList.size() - 1);
          if (t2.equals(e4)) return null;
          this._ptList.add(t2);
        } }, { key: "setMinimumVertexDistance", value: function(t2) {
          this._minimimVertexDistance = t2;
        } }], [{ key: "constructor_", value: function() {
          this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new yt();
        } }]), e3;
      }();
      bn.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
      var Mn = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, null, [{ key: "toDegrees", value: function(t2) {
          return 180 * t2 / Math.PI;
        } }, { key: "normalize", value: function(t2) {
          for (; t2 > Math.PI; ) t2 -= e3.PI_TIMES_2;
          for (; t2 <= -Math.PI; ) t2 += e3.PI_TIMES_2;
          return t2;
        } }, { key: "angle", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return Math.atan2(t2.y, t2.x);
          }
          if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1], i2 = n2.x - e4.x, r2 = n2.y - e4.y;
            return Math.atan2(r2, i2);
          }
        } }, { key: "isAcute", value: function(t2, e4, n2) {
          var i2 = t2.x - e4.x, r2 = t2.y - e4.y;
          return i2 * (n2.x - e4.x) + r2 * (n2.y - e4.y) > 0;
        } }, { key: "isObtuse", value: function(t2, e4, n2) {
          var i2 = t2.x - e4.x, r2 = t2.y - e4.y;
          return i2 * (n2.x - e4.x) + r2 * (n2.y - e4.y) < 0;
        } }, { key: "interiorAngle", value: function(t2, n2, i2) {
          var r2 = e3.angle(n2, t2), s2 = e3.angle(n2, i2);
          return Math.abs(s2 - r2);
        } }, { key: "normalizePositive", value: function(t2) {
          if (t2 < 0) {
            for (; t2 < 0; ) t2 += e3.PI_TIMES_2;
            t2 >= e3.PI_TIMES_2 && (t2 = 0);
          } else {
            for (; t2 >= e3.PI_TIMES_2; ) t2 -= e3.PI_TIMES_2;
            t2 < 0 && (t2 = 0);
          }
          return t2;
        } }, { key: "angleBetween", value: function(t2, n2, i2) {
          var r2 = e3.angle(n2, t2), s2 = e3.angle(n2, i2);
          return e3.diff(r2, s2);
        } }, { key: "diff", value: function(t2, e4) {
          var n2 = null;
          return (n2 = t2 < e4 ? e4 - t2 : t2 - e4) > Math.PI && (n2 = 2 * Math.PI - n2), n2;
        } }, { key: "toRadians", value: function(t2) {
          return t2 * Math.PI / 180;
        } }, { key: "getTurn", value: function(t2, n2) {
          var i2 = Math.sin(n2 - t2);
          return i2 > 0 ? e3.COUNTERCLOCKWISE : i2 < 0 ? e3.CLOCKWISE : e3.NONE;
        } }, { key: "angleBetweenOriented", value: function(t2, n2, i2) {
          var r2 = e3.angle(n2, t2), s2 = e3.angle(n2, i2) - r2;
          return s2 <= -Math.PI ? s2 + e3.PI_TIMES_2 : s2 > Math.PI ? s2 - e3.PI_TIMES_2 : s2;
        } }]), e3;
      }();
      Mn.PI_TIMES_2 = 2 * Math.PI, Mn.PI_OVER_2 = Math.PI / 2, Mn.PI_OVER_4 = Math.PI / 4, Mn.COUNTERCLOCKWISE = ct.COUNTERCLOCKWISE, Mn.CLOCKWISE = ct.CLOCKWISE, Mn.NONE = ct.COLLINEAR;
      var An = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "addNextSegment", value: function(t2, e4) {
          if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t2, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
          var n2 = ct.index(this._s0, this._s1, this._s2), i2 = n2 === ct.CLOCKWISE && this._side === $.LEFT || n2 === ct.COUNTERCLOCKWISE && this._side === $.RIGHT;
          0 === n2 ? this.addCollinear(e4) : i2 ? this.addOutsideTurn(n2, e4) : this.addInsideTurn(n2, e4);
        } }, { key: "addLineEndCap", value: function(t2, e4) {
          var n2 = new En(t2, e4), i2 = new En();
          this.computeOffsetSegment(n2, $.LEFT, this._distance, i2);
          var r2 = new En();
          this.computeOffsetSegment(n2, $.RIGHT, this._distance, r2);
          var s2 = e4.x - t2.x, a2 = e4.y - t2.y, o2 = Math.atan2(a2, s2);
          switch (this._bufParams.getEndCapStyle()) {
            case _.CAP_ROUND:
              this._segList.addPt(i2.p1), this.addDirectedFillet(e4, o2 + Math.PI / 2, o2 - Math.PI / 2, ct.CLOCKWISE, this._distance), this._segList.addPt(r2.p1);
              break;
            case _.CAP_FLAT:
              this._segList.addPt(i2.p1), this._segList.addPt(r2.p1);
              break;
            case _.CAP_SQUARE:
              var u5 = new X();
              u5.x = Math.abs(this._distance) * Math.cos(o2), u5.y = Math.abs(this._distance) * Math.sin(o2);
              var l2 = new X(i2.p1.x + u5.x, i2.p1.y + u5.y), h2 = new X(r2.p1.x + u5.x, r2.p1.y + u5.y);
              this._segList.addPt(l2), this._segList.addPt(h2);
          }
        } }, { key: "getCoordinates", value: function() {
          return this._segList.getCoordinates();
        } }, { key: "addMitreJoin", value: function(t2, e4, n2, i2) {
          var r2 = pt.intersection(e4.p0, e4.p1, n2.p0, n2.p1);
          if (null !== r2 && (i2 <= 0 ? 1 : r2.distance(t2) / Math.abs(i2)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(r2), null;
          this.addLimitedMitreJoin(e4, n2, i2, this._bufParams.getMitreLimit());
        } }, { key: "addOutsideTurn", value: function(t2, n2) {
          if (this._offset0.p1.distance(this._offset1.p0) < this._distance * e3.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
          this._bufParams.getJoinStyle() === _.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === _.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (n2 && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, t2, this._distance), this._segList.addPt(this._offset1.p0));
        } }, { key: "createSquare", value: function(t2) {
          this._segList.addPt(new X(t2.x + this._distance, t2.y + this._distance)), this._segList.addPt(new X(t2.x + this._distance, t2.y - this._distance)), this._segList.addPt(new X(t2.x - this._distance, t2.y - this._distance)), this._segList.addPt(new X(t2.x - this._distance, t2.y + this._distance)), this._segList.closeRing();
        } }, { key: "addSegments", value: function(t2, e4) {
          this._segList.addPts(t2, e4);
        } }, { key: "addFirstSegment", value: function() {
          this._segList.addPt(this._offset1.p0);
        } }, { key: "addCornerFillet", value: function(t2, e4, n2, i2, r2) {
          var s2 = e4.x - t2.x, a2 = e4.y - t2.y, o2 = Math.atan2(a2, s2), u5 = n2.x - t2.x, l2 = n2.y - t2.y, h2 = Math.atan2(l2, u5);
          i2 === ct.CLOCKWISE ? o2 <= h2 && (o2 += 2 * Math.PI) : o2 >= h2 && (o2 -= 2 * Math.PI), this._segList.addPt(e4), this.addDirectedFillet(t2, o2, h2, i2, r2), this._segList.addPt(n2);
        } }, { key: "addLastSegment", value: function() {
          this._segList.addPt(this._offset1.p1);
        } }, { key: "initSideSegments", value: function(t2, e4, n2) {
          this._s1 = t2, this._s2 = e4, this._side = n2, this._seg1.setCoordinates(t2, e4), this.computeOffsetSegment(this._seg1, n2, this._distance, this._offset1);
        } }, { key: "addLimitedMitreJoin", value: function(t2, e4, n2, i2) {
          var r2 = this._seg0.p1, s2 = Mn.angle(r2, this._seg0.p0), a2 = Mn.angleBetweenOriented(this._seg0.p0, r2, this._seg1.p1) / 2, o2 = Mn.normalize(s2 + a2), u5 = Mn.normalize(o2 + Math.PI), l2 = i2 * n2, h2 = n2 - l2 * Math.abs(Math.sin(a2)), c2 = r2.x + l2 * Math.cos(u5), f2 = r2.y + l2 * Math.sin(u5), v3 = new X(c2, f2), g2 = new En(r2, v3), y3 = g2.pointAlongOffset(1, h2), d2 = g2.pointAlongOffset(1, -h2);
          this._side === $.LEFT ? (this._segList.addPt(y3), this._segList.addPt(d2)) : (this._segList.addPt(d2), this._segList.addPt(y3));
        } }, { key: "addDirectedFillet", value: function(t2, e4, n2, i2, r2) {
          var s2 = i2 === ct.CLOCKWISE ? -1 : 1, a2 = Math.abs(e4 - n2), o2 = Math.trunc(a2 / this._filletAngleQuantum + 0.5);
          if (o2 < 1) return null;
          for (var u5 = a2 / o2, l2 = new X(), h2 = 0; h2 < o2; h2++) {
            var c2 = e4 + s2 * h2 * u5;
            l2.x = t2.x + r2 * Math.cos(c2), l2.y = t2.y + r2 * Math.sin(c2), this._segList.addPt(l2);
          }
        } }, { key: "computeOffsetSegment", value: function(t2, e4, n2, i2) {
          var r2 = e4 === $.LEFT ? 1 : -1, s2 = t2.p1.x - t2.p0.x, a2 = t2.p1.y - t2.p0.y, o2 = Math.sqrt(s2 * s2 + a2 * a2), u5 = r2 * n2 * s2 / o2, l2 = r2 * n2 * a2 / o2;
          i2.p0.x = t2.p0.x - l2, i2.p0.y = t2.p0.y + u5, i2.p1.x = t2.p1.x - l2, i2.p1.y = t2.p1.y + u5;
        } }, { key: "addInsideTurn", value: function(t2, n2) {
          if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));
          else if (this._hasNarrowConcaveAngle = true, this._offset0.p1.distance(this._offset1.p0) < this._distance * e3.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);
          else {
            if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
              var i2 = new X((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
              this._segList.addPt(i2);
              var r2 = new X((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
              this._segList.addPt(r2);
            } else this._segList.addPt(this._s1);
            this._segList.addPt(this._offset1.p0);
          }
        } }, { key: "createCircle", value: function(t2) {
          var e4 = new X(t2.x + this._distance, t2.y);
          this._segList.addPt(e4), this.addDirectedFillet(t2, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
        } }, { key: "addBevelJoin", value: function(t2, e4) {
          this._segList.addPt(t2.p1), this._segList.addPt(e4.p0);
        } }, { key: "init", value: function(t2) {
          this._distance = t2, this._maxCurveSegmentError = t2 * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new bn(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t2 * e3.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
        } }, { key: "addCollinear", value: function(t2) {
          this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === _.JOIN_BEVEL || this._bufParams.getJoinStyle() === _.JOIN_MITRE ? (t2 && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, ct.CLOCKWISE, this._distance));
        } }, { key: "closeRing", value: function() {
          this._segList.closeRing();
        } }, { key: "hasNarrowConcaveAngle", value: function() {
          return this._hasNarrowConcaveAngle;
        } }], [{ key: "constructor_", value: function() {
          this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new En(), this._seg1 = new En(), this._offset0 = new En(), this._offset1 = new En(), this._side = 0, this._hasNarrowConcaveAngle = false;
          var t2 = arguments[0], n2 = arguments[1], i2 = arguments[2];
          this._precisionModel = t2, this._bufParams = n2, this._li = new Oe(), this._filletAngleQuantum = Math.PI / 2 / n2.getQuadrantSegments(), n2.getQuadrantSegments() >= 8 && n2.getJoinStyle() === _.JOIN_ROUND && (this._closingSegLengthFactor = e3.MAX_CLOSING_SEG_LEN_FACTOR), this.init(i2);
        } }]), e3;
      }();
      An.OFFSET_SEGMENT_SEPARATION_FACTOR = 1e-3, An.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 1e-3, An.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, An.MAX_CLOSING_SEG_LEN_FACTOR = 80;
      var Pn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getOffsetCurve", value: function(t2, e4) {
          if (this._distance = e4, 0 === e4) return null;
          var n2 = e4 < 0, i2 = Math.abs(e4), r2 = this.getSegGen(i2);
          t2.length <= 1 ? this.computePointCurve(t2[0], r2) : this.computeOffsetCurve(t2, n2, r2);
          var s2 = r2.getCoordinates();
          return n2 && jt.reverse(s2), s2;
        } }, { key: "computeSingleSidedBufferCurve", value: function(t2, e4, n2) {
          var i2 = this.simplifyTolerance(this._distance);
          if (e4) {
            n2.addSegments(t2, true);
            var r2 = On.simplify(t2, -i2), s2 = r2.length - 1;
            n2.initSideSegments(r2[s2], r2[s2 - 1], $.LEFT), n2.addFirstSegment();
            for (var a2 = s2 - 2; a2 >= 0; a2--) n2.addNextSegment(r2[a2], true);
          } else {
            n2.addSegments(t2, false);
            var o2 = On.simplify(t2, i2), u5 = o2.length - 1;
            n2.initSideSegments(o2[0], o2[1], $.LEFT), n2.addFirstSegment();
            for (var l2 = 2; l2 <= u5; l2++) n2.addNextSegment(o2[l2], true);
          }
          n2.addLastSegment(), n2.closeRing();
        } }, { key: "computeRingBufferCurve", value: function(t2, e4, n2) {
          var i2 = this.simplifyTolerance(this._distance);
          e4 === $.RIGHT && (i2 = -i2);
          var r2 = On.simplify(t2, i2), s2 = r2.length - 1;
          n2.initSideSegments(r2[s2 - 1], r2[0], e4);
          for (var a2 = 1; a2 <= s2; a2++) {
            var o2 = 1 !== a2;
            n2.addNextSegment(r2[a2], o2);
          }
          n2.closeRing();
        } }, { key: "computeLineBufferCurve", value: function(t2, e4) {
          var n2 = this.simplifyTolerance(this._distance), i2 = On.simplify(t2, n2), r2 = i2.length - 1;
          e4.initSideSegments(i2[0], i2[1], $.LEFT);
          for (var s2 = 2; s2 <= r2; s2++) e4.addNextSegment(i2[s2], true);
          e4.addLastSegment(), e4.addLineEndCap(i2[r2 - 1], i2[r2]);
          var a2 = On.simplify(t2, -n2), o2 = a2.length - 1;
          e4.initSideSegments(a2[o2], a2[o2 - 1], $.LEFT);
          for (var u5 = o2 - 2; u5 >= 0; u5--) e4.addNextSegment(a2[u5], true);
          e4.addLastSegment(), e4.addLineEndCap(a2[1], a2[0]), e4.closeRing();
        } }, { key: "computePointCurve", value: function(t2, e4) {
          switch (this._bufParams.getEndCapStyle()) {
            case _.CAP_ROUND:
              e4.createCircle(t2);
              break;
            case _.CAP_SQUARE:
              e4.createSquare(t2);
          }
        } }, { key: "getLineCurve", value: function(t2, e4) {
          if (this._distance = e4, this.isLineOffsetEmpty(e4)) return null;
          var n2 = Math.abs(e4), i2 = this.getSegGen(n2);
          if (t2.length <= 1) this.computePointCurve(t2[0], i2);
          else if (this._bufParams.isSingleSided()) {
            var r2 = e4 < 0;
            this.computeSingleSidedBufferCurve(t2, r2, i2);
          } else this.computeLineBufferCurve(t2, i2);
          return i2.getCoordinates();
        } }, { key: "getBufferParameters", value: function() {
          return this._bufParams;
        } }, { key: "simplifyTolerance", value: function(t2) {
          return t2 * this._bufParams.getSimplifyFactor();
        } }, { key: "getRingCurve", value: function(t2, n2, i2) {
          if (this._distance = i2, t2.length <= 2) return this.getLineCurve(t2, i2);
          if (0 === i2) return e3.copyCoordinates(t2);
          var r2 = this.getSegGen(i2);
          return this.computeRingBufferCurve(t2, n2, r2), r2.getCoordinates();
        } }, { key: "computeOffsetCurve", value: function(t2, e4, n2) {
          var i2 = this.simplifyTolerance(this._distance);
          if (e4) {
            var r2 = On.simplify(t2, -i2), s2 = r2.length - 1;
            n2.initSideSegments(r2[s2], r2[s2 - 1], $.LEFT), n2.addFirstSegment();
            for (var a2 = s2 - 2; a2 >= 0; a2--) n2.addNextSegment(r2[a2], true);
          } else {
            var o2 = On.simplify(t2, i2), u5 = o2.length - 1;
            n2.initSideSegments(o2[0], o2[1], $.LEFT), n2.addFirstSegment();
            for (var l2 = 2; l2 <= u5; l2++) n2.addNextSegment(o2[l2], true);
          }
          n2.addLastSegment();
        } }, { key: "isLineOffsetEmpty", value: function(t2) {
          return 0 === t2 || t2 < 0 && !this._bufParams.isSingleSided();
        } }, { key: "getSegGen", value: function(t2) {
          return new An(this._precisionModel, this._bufParams, t2);
        } }], [{ key: "constructor_", value: function() {
          this._distance = 0, this._precisionModel = null, this._bufParams = null;
          var t2 = arguments[0], e4 = arguments[1];
          this._precisionModel = t2, this._bufParams = e4;
        } }, { key: "copyCoordinates", value: function(t2) {
          for (var e4 = new Array(t2.length).fill(null), n2 = 0; n2 < e4.length; n2++) e4[n2] = new X(t2[n2]);
          return e4;
        } }]), e3;
      }(), Dn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "findStabbedSegments", value: function() {
          if (1 === arguments.length) {
            for (var t2 = arguments[0], e4 = new yt(), n2 = this._subgraphs.iterator(); n2.hasNext(); ) {
              var i2 = n2.next(), r2 = i2.getEnvelope();
              t2.y < r2.getMinY() || t2.y > r2.getMaxY() || this.findStabbedSegments(t2, i2.getDirectedEdges(), e4);
            }
            return e4;
          }
          if (3 === arguments.length) {
            if (rt(arguments[2], nt) && arguments[0] instanceof X && arguments[1] instanceof Je) for (var s2 = arguments[0], a2 = arguments[1], o2 = arguments[2], u5 = a2.getEdge().getCoordinates(), l2 = 0; l2 < u5.length - 1; l2++) {
              this._seg.p0 = u5[l2], this._seg.p1 = u5[l2 + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse();
              var h2 = Math.max(this._seg.p0.x, this._seg.p1.x);
              if (!(h2 < s2.x) && !(this._seg.isHorizontal() || s2.y < this._seg.p0.y || s2.y > this._seg.p1.y || ct.index(this._seg.p0, this._seg.p1, s2) === ct.RIGHT)) {
                var c2 = a2.getDepth($.LEFT);
                this._seg.p0.equals(u5[l2]) || (c2 = a2.getDepth($.RIGHT));
                var f2 = new Fn(this._seg, c2);
                o2.add(f2);
              }
            }
            else if (rt(arguments[2], nt) && arguments[0] instanceof X && rt(arguments[1], nt)) for (var v3 = arguments[0], g2 = arguments[1], y3 = arguments[2], d2 = g2.iterator(); d2.hasNext(); ) {
              var _2 = d2.next();
              _2.isForward() && this.findStabbedSegments(v3, _2, y3);
            }
          }
        } }, { key: "getDepth", value: function(t2) {
          var e4 = this.findStabbedSegments(t2);
          return 0 === e4.size() ? 0 : on.min(e4)._leftDepth;
        } }], [{ key: "constructor_", value: function() {
          this._subgraphs = null, this._seg = new En();
          var t2 = arguments[0];
          this._subgraphs = t2;
        } }]), e3;
      }(), Fn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "compareTo", value: function(t2) {
          var e4 = t2;
          if (this._upwardSeg.minX() >= e4._upwardSeg.maxX()) return 1;
          if (this._upwardSeg.maxX() <= e4._upwardSeg.minX()) return -1;
          var n2 = this._upwardSeg.orientationIndex(e4._upwardSeg);
          return 0 !== n2 || 0 !== (n2 = -1 * e4._upwardSeg.orientationIndex(this._upwardSeg)) ? n2 : this._upwardSeg.compareTo(e4._upwardSeg);
        } }, { key: "compareX", value: function(t2, e4) {
          var n2 = t2.p0.compareTo(e4.p0);
          return 0 !== n2 ? n2 : t2.p1.compareTo(e4.p1);
        } }, { key: "toString", value: function() {
          return this._upwardSeg.toString();
        } }, { key: "interfaces_", get: function() {
          return [x2];
        } }], [{ key: "constructor_", value: function() {
          this._upwardSeg = null, this._leftDepth = null;
          var t2 = arguments[0], e4 = arguments[1];
          this._upwardSeg = new En(t2), this._leftDepth = e4;
        } }]), e3;
      }();
      Dn.DepthSegment = Fn;
      var Gn = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          var e4;
          return t(this, s2), e4 = r2.call(this), s2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(s2, null, [{ key: "constructor_", value: function() {
          p.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
        } }]), s2;
      }(p), qn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getY", value: function() {
          var t2 = this.y / this.w;
          if (A.isNaN(t2) || A.isInfinite(t2)) throw new Gn();
          return t2;
        } }, { key: "getX", value: function() {
          var t2 = this.x / this.w;
          if (A.isNaN(t2) || A.isInfinite(t2)) throw new Gn();
          return t2;
        } }, { key: "getCoordinate", value: function() {
          var t2 = new X();
          return t2.x = this.getX(), t2.y = this.getY(), t2;
        } }], [{ key: "constructor_", value: function() {
          if (this.x = null, this.y = null, this.w = null, 0 === arguments.length) this.x = 0, this.y = 0, this.w = 1;
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            this.x = t2.x, this.y = t2.y, this.w = 1;
          } else if (2 === arguments.length) {
            if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
              var n2 = arguments[0], i2 = arguments[1];
              this.x = n2, this.y = i2, this.w = 1;
            } else if (arguments[0] instanceof e3 && arguments[1] instanceof e3) {
              var r2 = arguments[0], s2 = arguments[1];
              this.x = r2.y * s2.w - s2.y * r2.w, this.y = s2.x * r2.w - r2.x * s2.w, this.w = r2.x * s2.y - s2.x * r2.y;
            } else if (arguments[0] instanceof X && arguments[1] instanceof X) {
              var a2 = arguments[0], o2 = arguments[1];
              this.x = a2.y - o2.y, this.y = o2.x - a2.x, this.w = a2.x * o2.y - o2.x * a2.y;
            }
          } else if (3 === arguments.length) {
            var u5 = arguments[0], l2 = arguments[1], h2 = arguments[2];
            this.x = u5, this.y = l2, this.w = h2;
          } else if (4 === arguments.length) {
            var c2 = arguments[0], f2 = arguments[1], v3 = arguments[2], g2 = arguments[3], y3 = c2.y - f2.y, d2 = f2.x - c2.x, _2 = c2.x * f2.y - f2.x * c2.y, p2 = v3.y - g2.y, m2 = g2.x - v3.x, k2 = v3.x * g2.y - g2.x * v3.y;
            this.x = d2 * k2 - m2 * _2, this.y = p2 * _2 - y3 * k2, this.w = y3 * m2 - p2 * d2;
          }
        } }]), e3;
      }(), Yn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "area", value: function() {
          return e3.area(this.p0, this.p1, this.p2);
        } }, { key: "signedArea", value: function() {
          return e3.signedArea(this.p0, this.p1, this.p2);
        } }, { key: "interpolateZ", value: function(t2) {
          if (null === t2) throw new m("Supplied point is null.");
          return e3.interpolateZ(t2, this.p0, this.p1, this.p2);
        } }, { key: "longestSideLength", value: function() {
          return e3.longestSideLength(this.p0, this.p1, this.p2);
        } }, { key: "isAcute", value: function() {
          return e3.isAcute(this.p0, this.p1, this.p2);
        } }, { key: "circumcentre", value: function() {
          return e3.circumcentre(this.p0, this.p1, this.p2);
        } }, { key: "area3D", value: function() {
          return e3.area3D(this.p0, this.p1, this.p2);
        } }, { key: "centroid", value: function() {
          return e3.centroid(this.p0, this.p1, this.p2);
        } }, { key: "inCentre", value: function() {
          return e3.inCentre(this.p0, this.p1, this.p2);
        } }], [{ key: "constructor_", value: function() {
          this.p0 = null, this.p1 = null, this.p2 = null;
          var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2];
          this.p0 = t2, this.p1 = e4, this.p2 = n2;
        } }, { key: "area", value: function(t2, e4, n2) {
          return Math.abs(((n2.x - t2.x) * (e4.y - t2.y) - (e4.x - t2.x) * (n2.y - t2.y)) / 2);
        } }, { key: "signedArea", value: function(t2, e4, n2) {
          return ((n2.x - t2.x) * (e4.y - t2.y) - (e4.x - t2.x) * (n2.y - t2.y)) / 2;
        } }, { key: "det", value: function(t2, e4, n2, i2) {
          return t2 * i2 - e4 * n2;
        } }, { key: "interpolateZ", value: function(t2, e4, n2, i2) {
          var r2 = e4.x, s2 = e4.y, a2 = n2.x - r2, o2 = i2.x - r2, u5 = n2.y - s2, l2 = i2.y - s2, h2 = a2 * l2 - o2 * u5, c2 = t2.x - r2, f2 = t2.y - s2, v3 = (l2 * c2 - o2 * f2) / h2, g2 = (-u5 * c2 + a2 * f2) / h2;
          return e4.getZ() + v3 * (n2.getZ() - e4.getZ()) + g2 * (i2.getZ() - e4.getZ());
        } }, { key: "longestSideLength", value: function(t2, e4, n2) {
          var i2 = t2.distance(e4), r2 = e4.distance(n2), s2 = n2.distance(t2), a2 = i2;
          return r2 > a2 && (a2 = r2), s2 > a2 && (a2 = s2), a2;
        } }, { key: "circumcentreDD", value: function(t2, e4, n2) {
          var i2 = ut.valueOf(t2.x).subtract(n2.x), r2 = ut.valueOf(t2.y).subtract(n2.y), s2 = ut.valueOf(e4.x).subtract(n2.x), a2 = ut.valueOf(e4.y).subtract(n2.y), o2 = ut.determinant(i2, r2, s2, a2).multiply(2), u5 = i2.sqr().add(r2.sqr()), l2 = s2.sqr().add(a2.sqr()), h2 = ut.determinant(r2, u5, a2, l2), c2 = ut.determinant(i2, u5, s2, l2), f2 = ut.valueOf(n2.x).subtract(h2.divide(o2)).doubleValue(), v3 = ut.valueOf(n2.y).add(c2.divide(o2)).doubleValue();
          return new X(f2, v3);
        } }, { key: "isAcute", value: function(t2, e4, n2) {
          return !!Mn.isAcute(t2, e4, n2) && (!!Mn.isAcute(e4, n2, t2) && !!Mn.isAcute(n2, t2, e4));
        } }, { key: "circumcentre", value: function(t2, n2, i2) {
          var r2 = i2.x, s2 = i2.y, a2 = t2.x - r2, o2 = t2.y - s2, u5 = n2.x - r2, l2 = n2.y - s2, h2 = 2 * e3.det(a2, o2, u5, l2), c2 = e3.det(o2, a2 * a2 + o2 * o2, l2, u5 * u5 + l2 * l2), f2 = e3.det(a2, a2 * a2 + o2 * o2, u5, u5 * u5 + l2 * l2);
          return new X(r2 - c2 / h2, s2 + f2 / h2);
        } }, { key: "perpendicularBisector", value: function(t2, e4) {
          var n2 = e4.x - t2.x, i2 = e4.y - t2.y, r2 = new qn(t2.x + n2 / 2, t2.y + i2 / 2, 1), s2 = new qn(t2.x - i2 + n2 / 2, t2.y + n2 + i2 / 2, 1);
          return new qn(r2, s2);
        } }, { key: "angleBisector", value: function(t2, e4, n2) {
          var i2 = e4.distance(t2), r2 = i2 / (i2 + e4.distance(n2)), s2 = n2.x - t2.x, a2 = n2.y - t2.y;
          return new X(t2.x + r2 * s2, t2.y + r2 * a2);
        } }, { key: "area3D", value: function(t2, e4, n2) {
          var i2 = e4.x - t2.x, r2 = e4.y - t2.y, s2 = e4.getZ() - t2.getZ(), a2 = n2.x - t2.x, o2 = n2.y - t2.y, u5 = n2.getZ() - t2.getZ(), l2 = r2 * u5 - s2 * o2, h2 = s2 * a2 - i2 * u5, c2 = i2 * o2 - r2 * a2, f2 = l2 * l2 + h2 * h2 + c2 * c2, v3 = Math.sqrt(f2) / 2;
          return v3;
        } }, { key: "centroid", value: function(t2, e4, n2) {
          var i2 = (t2.x + e4.x + n2.x) / 3, r2 = (t2.y + e4.y + n2.y) / 3;
          return new X(i2, r2);
        } }, { key: "inCentre", value: function(t2, e4, n2) {
          var i2 = e4.distance(n2), r2 = t2.distance(n2), s2 = t2.distance(e4), a2 = i2 + r2 + s2, o2 = (i2 * t2.x + r2 * e4.x + s2 * n2.x) / a2, u5 = (i2 * t2.y + r2 * e4.y + s2 * n2.y) / a2;
          return new X(o2, u5);
        } }]), e3;
      }(), zn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "addRingSide", value: function(t2, e4, n2, i2, r2) {
          if (0 === e4 && t2.length < Xt.MINIMUM_VALID_SIZE) return null;
          var s2 = i2, a2 = r2;
          t2.length >= Xt.MINIMUM_VALID_SIZE && ct.isCCW(t2) && (s2 = r2, a2 = i2, n2 = $.opposite(n2));
          var o2 = this._curveBuilder.getRingCurve(t2, n2, e4);
          this.addCurve(o2, s2, a2);
        } }, { key: "addRingBothSides", value: function(t2, e4) {
          this.addRingSide(t2, e4, $.LEFT, H.EXTERIOR, H.INTERIOR), this.addRingSide(t2, e4, $.RIGHT, H.INTERIOR, H.EXTERIOR);
        } }, { key: "addPoint", value: function(t2) {
          if (this._distance <= 0) return null;
          var e4 = t2.getCoordinates(), n2 = this._curveBuilder.getLineCurve(e4, this._distance);
          this.addCurve(n2, H.EXTERIOR, H.INTERIOR);
        } }, { key: "addPolygon", value: function(t2) {
          var e4 = this._distance, n2 = $.LEFT;
          this._distance < 0 && (e4 = -this._distance, n2 = $.RIGHT);
          var i2 = t2.getExteriorRing(), r2 = jt.removeRepeatedPoints(i2.getCoordinates());
          if (this._distance < 0 && this.isErodedCompletely(i2, this._distance)) return null;
          if (this._distance <= 0 && r2.length < 3) return null;
          this.addRingSide(r2, e4, n2, H.EXTERIOR, H.INTERIOR);
          for (var s2 = 0; s2 < t2.getNumInteriorRing(); s2++) {
            var a2 = t2.getInteriorRingN(s2), o2 = jt.removeRepeatedPoints(a2.getCoordinates());
            this._distance > 0 && this.isErodedCompletely(a2, -this._distance) || this.addRingSide(o2, e4, $.opposite(n2), H.INTERIOR, H.EXTERIOR);
          }
        } }, { key: "isTriangleErodedCompletely", value: function(t2, e4) {
          var n2 = new Yn(t2[0], t2[1], t2[2]), i2 = n2.inCentre();
          return xt.pointToSegment(i2, n2.p0, n2.p1) < Math.abs(e4);
        } }, { key: "addLineString", value: function(t2) {
          if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
          var e4 = jt.removeRepeatedPoints(t2.getCoordinates());
          if (jt.isRing(e4) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(e4, this._distance);
          else {
            var n2 = this._curveBuilder.getLineCurve(e4, this._distance);
            this.addCurve(n2, H.EXTERIOR, H.INTERIOR);
          }
        } }, { key: "addCurve", value: function(t2, e4, n2) {
          if (null === t2 || t2.length < 2) return null;
          var i2 = new In(t2, new Pe(0, H.BOUNDARY, e4, n2));
          this._curveList.add(i2);
        } }, { key: "getCurves", value: function() {
          return this.add(this._inputGeom), this._curveList;
        } }, { key: "add", value: function(t2) {
          if (t2.isEmpty()) return null;
          if (t2 instanceof Dt) this.addPolygon(t2);
          else if (t2 instanceof wt) this.addLineString(t2);
          else if (t2 instanceof bt) this.addPoint(t2);
          else if (t2 instanceof zt) this.addCollection(t2);
          else if (t2 instanceof se) this.addCollection(t2);
          else if (t2 instanceof te) this.addCollection(t2);
          else {
            if (!(t2 instanceof Yt)) throw new W(t2.getGeometryType());
            this.addCollection(t2);
          }
        } }, { key: "isErodedCompletely", value: function(t2, e4) {
          var n2 = t2.getCoordinates();
          if (n2.length < 4) return e4 < 0;
          if (4 === n2.length) return this.isTriangleErodedCompletely(n2, e4);
          var i2 = t2.getEnvelopeInternal(), r2 = Math.min(i2.getHeight(), i2.getWidth());
          return e4 < 0 && 2 * Math.abs(e4) > r2;
        } }, { key: "addCollection", value: function(t2) {
          for (var e4 = 0; e4 < t2.getNumGeometries(); e4++) {
            var n2 = t2.getGeometryN(e4);
            this.add(n2);
          }
        } }], [{ key: "constructor_", value: function() {
          this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new yt();
          var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2];
          this._inputGeom = t2, this._distance = e4, this._curveBuilder = n2;
        } }]), e3;
      }(), Xn = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "locate", value: function(t2) {
        } }]), e3;
      }(), Bn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "next", value: function() {
          if (this._atStart) return this._atStart = false, e3.isAtomic(this._parent) && this._index++, this._parent;
          if (null !== this._subcollectionIterator) {
            if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
            this._subcollectionIterator = null;
          }
          if (this._index >= this._max) throw new j();
          var t2 = this._parent.getGeometryN(this._index++);
          return t2 instanceof Yt ? (this._subcollectionIterator = new e3(t2), this._subcollectionIterator.next()) : t2;
        } }, { key: "remove", value: function() {
          throw new W(this.getClass().getName());
        } }, { key: "hasNext", value: function() {
          if (this._atStart) return true;
          if (null !== this._subcollectionIterator) {
            if (this._subcollectionIterator.hasNext()) return true;
            this._subcollectionIterator = null;
          }
          return !(this._index >= this._max);
        } }, { key: "interfaces_", get: function() {
          return [_n];
        } }], [{ key: "constructor_", value: function() {
          this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
          var t2 = arguments[0];
          this._parent = t2, this._atStart = true, this._index = 0, this._max = t2.getNumGeometries();
        } }, { key: "isAtomic", value: function(t2) {
          return !(t2 instanceof Yt);
        } }]), e3;
      }(), Un = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "locate", value: function(t2) {
          return e3.locate(t2, this._geom);
        } }, { key: "interfaces_", get: function() {
          return [Xn];
        } }], [{ key: "constructor_", value: function() {
          this._geom = null;
          var t2 = arguments[0];
          this._geom = t2;
        } }, { key: "locatePointInPolygon", value: function(t2, n2) {
          if (n2.isEmpty()) return H.EXTERIOR;
          var i2 = n2.getExteriorRing(), r2 = e3.locatePointInRing(t2, i2);
          if (r2 !== H.INTERIOR) return r2;
          for (var s2 = 0; s2 < n2.getNumInteriorRing(); s2++) {
            var a2 = n2.getInteriorRingN(s2), o2 = e3.locatePointInRing(t2, a2);
            if (o2 === H.BOUNDARY) return H.BOUNDARY;
            if (o2 === H.INTERIOR) return H.EXTERIOR;
          }
          return H.INTERIOR;
        } }, { key: "locatePointInRing", value: function(t2, e4) {
          return e4.getEnvelopeInternal().intersects(t2) ? Me.locateInRing(t2, e4.getCoordinates()) : H.EXTERIOR;
        } }, { key: "containsPointInPolygon", value: function(t2, n2) {
          return H.EXTERIOR !== e3.locatePointInPolygon(t2, n2);
        } }, { key: "locateInGeometry", value: function(t2, n2) {
          if (n2 instanceof Dt) return e3.locatePointInPolygon(t2, n2);
          if (n2 instanceof Yt) for (var i2 = new Bn(n2); i2.hasNext(); ) {
            var r2 = i2.next();
            if (r2 !== n2) {
              var s2 = e3.locateInGeometry(t2, r2);
              if (s2 !== H.EXTERIOR) return s2;
            }
          }
          return H.EXTERIOR;
        } }, { key: "isContained", value: function(t2, n2) {
          return H.EXTERIOR !== e3.locate(t2, n2);
        } }, { key: "locate", value: function(t2, n2) {
          return n2.isEmpty() ? H.EXTERIOR : n2.getEnvelopeInternal().intersects(t2) ? e3.locateInGeometry(t2, n2) : H.EXTERIOR;
        } }]), e3;
      }(), Vn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getNextCW", value: function(t2) {
          this.getEdges();
          var e4 = this._edgeList.indexOf(t2), n2 = e4 - 1;
          return 0 === e4 && (n2 = this._edgeList.size() - 1), this._edgeList.get(n2);
        } }, { key: "propagateSideLabels", value: function(t2) {
          for (var e4 = H.NONE, n2 = this.iterator(); n2.hasNext(); ) {
            var i2 = n2.next().getLabel();
            i2.isArea(t2) && i2.getLocation(t2, $.LEFT) !== H.NONE && (e4 = i2.getLocation(t2, $.LEFT));
          }
          if (e4 === H.NONE) return null;
          for (var r2 = e4, s2 = this.iterator(); s2.hasNext(); ) {
            var a2 = s2.next(), o2 = a2.getLabel();
            if (o2.getLocation(t2, $.ON) === H.NONE && o2.setLocation(t2, $.ON, r2), o2.isArea(t2)) {
              var u5 = o2.getLocation(t2, $.LEFT), l2 = o2.getLocation(t2, $.RIGHT);
              if (l2 !== H.NONE) {
                if (l2 !== r2) throw new vt("side location conflict", a2.getCoordinate());
                u5 === H.NONE && G.shouldNeverReachHere("found single null side (at " + a2.getCoordinate() + ")"), r2 = u5;
              } else G.isTrue(o2.getLocation(t2, $.LEFT) === H.NONE, "found single null side"), o2.setLocation(t2, $.RIGHT, r2), o2.setLocation(t2, $.LEFT, r2);
            }
          }
        } }, { key: "getCoordinate", value: function() {
          var t2 = this.iterator();
          return t2.hasNext() ? t2.next().getCoordinate() : null;
        } }, { key: "print", value: function(t2) {
          mt.out.println("EdgeEndStar:   " + this.getCoordinate());
          for (var e4 = this.iterator(); e4.hasNext(); ) {
            e4.next().print(t2);
          }
        } }, { key: "isAreaLabelsConsistent", value: function(t2) {
          return this.computeEdgeEndLabels(t2.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
        } }, { key: "checkAreaLabelsConsistent", value: function(t2) {
          var e4 = this.getEdges();
          if (e4.size() <= 0) return true;
          var n2 = e4.size() - 1, i2 = e4.get(n2).getLabel().getLocation(t2, $.LEFT);
          G.isTrue(i2 !== H.NONE, "Found unlabelled area edge");
          for (var r2 = i2, s2 = this.iterator(); s2.hasNext(); ) {
            var a2 = s2.next().getLabel();
            G.isTrue(a2.isArea(t2), "Found non-area edge");
            var o2 = a2.getLocation(t2, $.LEFT), u5 = a2.getLocation(t2, $.RIGHT);
            if (o2 === u5) return false;
            if (u5 !== r2) return false;
            r2 = o2;
          }
          return true;
        } }, { key: "findIndex", value: function(t2) {
          this.iterator();
          for (var e4 = 0; e4 < this._edgeList.size(); e4++) {
            if (this._edgeList.get(e4) === t2) return e4;
          }
          return -1;
        } }, { key: "iterator", value: function() {
          return this.getEdges().iterator();
        } }, { key: "getEdges", value: function() {
          return null === this._edgeList && (this._edgeList = new yt(this._edgeMap.values())), this._edgeList;
        } }, { key: "getLocation", value: function(t2, e4, n2) {
          return this._ptInAreaLocation[t2] === H.NONE && (this._ptInAreaLocation[t2] = Un.locate(e4, n2[t2].getGeometry())), this._ptInAreaLocation[t2];
        } }, { key: "toString", value: function() {
          var t2 = new st();
          t2.append("EdgeEndStar:   " + this.getCoordinate()), t2.append("\n");
          for (var e4 = this.iterator(); e4.hasNext(); ) {
            var n2 = e4.next();
            t2.append(n2), t2.append("\n");
          }
          return t2.toString();
        } }, { key: "computeEdgeEndLabels", value: function(t2) {
          for (var e4 = this.iterator(); e4.hasNext(); ) {
            e4.next().computeLabel(t2);
          }
        } }, { key: "computeLabelling", value: function(t2) {
          this.computeEdgeEndLabels(t2[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
          for (var e4 = [false, false], n2 = this.iterator(); n2.hasNext(); ) for (var i2 = n2.next().getLabel(), r2 = 0; r2 < 2; r2++) i2.isLine(r2) && i2.getLocation(r2) === H.BOUNDARY && (e4[r2] = true);
          for (var s2 = this.iterator(); s2.hasNext(); ) for (var a2 = s2.next(), o2 = a2.getLabel(), u5 = 0; u5 < 2; u5++) if (o2.isAnyNull(u5)) {
            var l2 = H.NONE;
            if (e4[u5]) l2 = H.EXTERIOR;
            else {
              var h2 = a2.getCoordinate();
              l2 = this.getLocation(u5, h2, t2);
            }
            o2.setAllLocationsIfNull(u5, l2);
          }
        } }, { key: "getDegree", value: function() {
          return this._edgeMap.size();
        } }, { key: "insertEdgeEnd", value: function(t2, e4) {
          this._edgeMap.put(t2, e4), this._edgeList = null;
        } }], [{ key: "constructor_", value: function() {
          this._edgeMap = new Ze(), this._edgeList = null, this._ptInAreaLocation = [H.NONE, H.NONE];
        } }]), e3;
      }(), Hn = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "linkResultDirectedEdges", value: function() {
          this.getResultAreaEdges();
          for (var t2 = null, e4 = null, n2 = this._SCANNING_FOR_INCOMING, i2 = 0; i2 < this._resultAreaEdgeList.size(); i2++) {
            var r2 = this._resultAreaEdgeList.get(i2), s3 = r2.getSym();
            if (r2.getLabel().isArea()) switch (null === t2 && r2.isInResult() && (t2 = r2), n2) {
              case this._SCANNING_FOR_INCOMING:
                if (!s3.isInResult()) continue;
                e4 = s3, n2 = this._LINKING_TO_OUTGOING;
                break;
              case this._LINKING_TO_OUTGOING:
                if (!r2.isInResult()) continue;
                e4.setNext(r2), n2 = this._SCANNING_FOR_INCOMING;
            }
          }
          if (n2 === this._LINKING_TO_OUTGOING) {
            if (null === t2) throw new vt("no outgoing dirEdge found", this.getCoordinate());
            G.isTrue(t2.isInResult(), "unable to link last incoming dirEdge"), e4.setNext(t2);
          }
        } }, { key: "insert", value: function(t2) {
          var e4 = t2;
          this.insertEdgeEnd(e4, e4);
        } }, { key: "getRightmostEdge", value: function() {
          var t2 = this.getEdges(), e4 = t2.size();
          if (e4 < 1) return null;
          var n2 = t2.get(0);
          if (1 === e4) return n2;
          var i2 = t2.get(e4 - 1), r2 = n2.getQuadrant(), s3 = i2.getQuadrant();
          return We.isNorthern(r2) && We.isNorthern(s3) ? n2 : We.isNorthern(r2) || We.isNorthern(s3) ? 0 !== n2.getDy() ? n2 : 0 !== i2.getDy() ? i2 : (G.shouldNeverReachHere("found two horizontal edges incident on node"), null) : i2;
        } }, { key: "print", value: function(t2) {
          mt.out.println("DirectedEdgeStar: " + this.getCoordinate());
          for (var e4 = this.iterator(); e4.hasNext(); ) {
            var n2 = e4.next();
            t2.print("out "), n2.print(t2), t2.println(), t2.print("in "), n2.getSym().print(t2), t2.println();
          }
        } }, { key: "getResultAreaEdges", value: function() {
          if (null !== this._resultAreaEdgeList) return this._resultAreaEdgeList;
          this._resultAreaEdgeList = new yt();
          for (var t2 = this.iterator(); t2.hasNext(); ) {
            var e4 = t2.next();
            (e4.isInResult() || e4.getSym().isInResult()) && this._resultAreaEdgeList.add(e4);
          }
          return this._resultAreaEdgeList;
        } }, { key: "updateLabelling", value: function(t2) {
          for (var e4 = this.iterator(); e4.hasNext(); ) {
            var n2 = e4.next().getLabel();
            n2.setAllLocationsIfNull(0, t2.getLocation(0)), n2.setAllLocationsIfNull(1, t2.getLocation(1));
          }
        } }, { key: "linkAllDirectedEdges", value: function() {
          this.getEdges();
          for (var t2 = null, e4 = null, n2 = this._edgeList.size() - 1; n2 >= 0; n2--) {
            var i2 = this._edgeList.get(n2), r2 = i2.getSym();
            null === e4 && (e4 = r2), null !== t2 && r2.setNext(t2), t2 = i2;
          }
          e4.setNext(t2);
        } }, { key: "computeDepths", value: function() {
          if (1 === arguments.length) {
            var t2 = arguments[0], e4 = this.findIndex(t2), n2 = t2.getDepth($.LEFT), i2 = t2.getDepth($.RIGHT), r2 = this.computeDepths(e4 + 1, this._edgeList.size(), n2), s3 = this.computeDepths(0, e4, r2);
            if (s3 !== i2) throw new vt("depth mismatch at " + t2.getCoordinate());
          } else if (3 === arguments.length) {
            for (var a3 = arguments[0], o2 = arguments[1], u5 = arguments[2], l2 = u5, h2 = a3; h2 < o2; h2++) {
              var c2 = this._edgeList.get(h2);
              c2.setEdgeDepths($.RIGHT, l2), l2 = c2.getDepth($.LEFT);
            }
            return l2;
          }
        } }, { key: "mergeSymLabels", value: function() {
          for (var t2 = this.iterator(); t2.hasNext(); ) {
            var e4 = t2.next();
            e4.getLabel().merge(e4.getSym().getLabel());
          }
        } }, { key: "linkMinimalDirectedEdges", value: function(t2) {
          for (var e4 = null, n2 = null, i2 = this._SCANNING_FOR_INCOMING, r2 = this._resultAreaEdgeList.size() - 1; r2 >= 0; r2--) {
            var s3 = this._resultAreaEdgeList.get(r2), a3 = s3.getSym();
            switch (null === e4 && s3.getEdgeRing() === t2 && (e4 = s3), i2) {
              case this._SCANNING_FOR_INCOMING:
                if (a3.getEdgeRing() !== t2) continue;
                n2 = a3, i2 = this._LINKING_TO_OUTGOING;
                break;
              case this._LINKING_TO_OUTGOING:
                if (s3.getEdgeRing() !== t2) continue;
                n2.setNextMin(s3), i2 = this._SCANNING_FOR_INCOMING;
            }
          }
          i2 === this._LINKING_TO_OUTGOING && (G.isTrue(null !== e4, "found null for first outgoing dirEdge"), G.isTrue(e4.getEdgeRing() === t2, "unable to link last incoming dirEdge"), n2.setNextMin(e4));
        } }, { key: "getOutgoingDegree", value: function() {
          if (0 === arguments.length) {
            for (var t2 = 0, e4 = this.iterator(); e4.hasNext(); ) {
              var n2 = e4.next();
              n2.isInResult() && t2++;
            }
            return t2;
          }
          if (1 === arguments.length) {
            for (var i2 = arguments[0], r2 = 0, s3 = this.iterator(); s3.hasNext(); ) {
              var a3 = s3.next();
              a3.getEdgeRing() === i2 && r2++;
            }
            return r2;
          }
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "findCoveredLineEdges", value: function() {
          for (var t2 = H.NONE, e4 = this.iterator(); e4.hasNext(); ) {
            var n2 = e4.next(), i2 = n2.getSym();
            if (!n2.isLineEdge()) {
              if (n2.isInResult()) {
                t2 = H.INTERIOR;
                break;
              }
              if (i2.isInResult()) {
                t2 = H.EXTERIOR;
                break;
              }
            }
          }
          if (t2 === H.NONE) return null;
          for (var r2 = t2, s3 = this.iterator(); s3.hasNext(); ) {
            var a3 = s3.next(), o2 = a3.getSym();
            a3.isLineEdge() ? a3.getEdge().setCovered(r2 === H.INTERIOR) : (a3.isInResult() && (r2 = H.EXTERIOR), o2.isInResult() && (r2 = H.INTERIOR));
          }
        } }, { key: "computeLabelling", value: function(t2) {
          f(r(a2.prototype), "computeLabelling", this).call(this, t2), this._label = new Pe(H.NONE);
          for (var e4 = this.iterator(); e4.hasNext(); ) for (var n2 = e4.next().getEdge().getLabel(), i2 = 0; i2 < 2; i2++) {
            var s3 = n2.getLocation(i2);
            s3 !== H.INTERIOR && s3 !== H.BOUNDARY || this._label.setLocation(i2, H.INTERIOR);
          }
        } }], [{ key: "constructor_", value: function() {
          this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
        } }]), a2;
      }(Vn), Zn = function(e3) {
        i(s2, e3);
        var r2 = c(s2);
        function s2() {
          return t(this, s2), r2.call(this);
        }
        return n(s2, [{ key: "createNode", value: function(t2) {
          return new Ye(t2, new Hn());
        } }]), s2;
      }(Qe), jn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "compareTo", value: function(t2) {
          var n2 = t2;
          return e3.compareOriented(this._pts, this._orientation, n2._pts, n2._orientation);
        } }, { key: "interfaces_", get: function() {
          return [x2];
        } }], [{ key: "constructor_", value: function() {
          this._pts = null, this._orientation = null;
          var t2 = arguments[0];
          this._pts = t2, this._orientation = e3.orientation(t2);
        } }, { key: "orientation", value: function(t2) {
          return 1 === jt.increasingDirection(t2);
        } }, { key: "compareOriented", value: function(t2, e4, n2, i2) {
          for (var r2 = e4 ? 1 : -1, s2 = i2 ? 1 : -1, a2 = e4 ? t2.length : -1, o2 = i2 ? n2.length : -1, u5 = e4 ? 0 : t2.length - 1, l2 = i2 ? 0 : n2.length - 1; ; ) {
            var h2 = t2[u5].compareTo(n2[l2]);
            if (0 !== h2) return h2;
            var c2 = (u5 += r2) === a2, f2 = (l2 += s2) === o2;
            if (c2 && !f2) return -1;
            if (!c2 && f2) return 1;
            if (c2 && f2) return 0;
          }
        } }]), e3;
      }(), Wn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "print", value: function(t2) {
          t2.print("MULTILINESTRING ( ");
          for (var e4 = 0; e4 < this._edges.size(); e4++) {
            var n2 = this._edges.get(e4);
            e4 > 0 && t2.print(","), t2.print("(");
            for (var i2 = n2.getCoordinates(), r2 = 0; r2 < i2.length; r2++) r2 > 0 && t2.print(","), t2.print(i2[r2].x + " " + i2[r2].y);
            t2.println(")");
          }
          t2.print(")  ");
        } }, { key: "addAll", value: function(t2) {
          for (var e4 = t2.iterator(); e4.hasNext(); ) this.add(e4.next());
        } }, { key: "findEdgeIndex", value: function(t2) {
          for (var e4 = 0; e4 < this._edges.size(); e4++) if (this._edges.get(e4).equals(t2)) return e4;
          return -1;
        } }, { key: "iterator", value: function() {
          return this._edges.iterator();
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "get", value: function(t2) {
          return this._edges.get(t2);
        } }, { key: "findEqualEdge", value: function(t2) {
          var e4 = new jn(t2.getCoordinates());
          return this._ocaMap.get(e4);
        } }, { key: "add", value: function(t2) {
          this._edges.add(t2);
          var e4 = new jn(t2.getCoordinates());
          this._ocaMap.put(e4, t2);
        } }], [{ key: "constructor_", value: function() {
          this._edges = new yt(), this._ocaMap = new Ze();
        } }]), e3;
      }(), Kn = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "processIntersections", value: function(t2, e4, n2, i2) {
        } }, { key: "isDone", value: function() {
        } }]), e3;
      }(), Jn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "isTrivialIntersection", value: function(t2, n2, i2, r2) {
          if (t2 === i2 && 1 === this._li.getIntersectionNum()) {
            if (e3.isAdjacentSegments(n2, r2)) return true;
            if (t2.isClosed()) {
              var s2 = t2.size() - 1;
              if (0 === n2 && r2 === s2 || 0 === r2 && n2 === s2) return true;
            }
          }
          return false;
        } }, { key: "getProperIntersectionPoint", value: function() {
          return this._properIntersectionPoint;
        } }, { key: "hasProperInteriorIntersection", value: function() {
          return this._hasProperInterior;
        } }, { key: "getLineIntersector", value: function() {
          return this._li;
        } }, { key: "hasProperIntersection", value: function() {
          return this._hasProper;
        } }, { key: "processIntersections", value: function(t2, e4, n2, i2) {
          if (t2 === n2 && e4 === i2) return null;
          this.numTests++;
          var r2 = t2.getCoordinates()[e4], s2 = t2.getCoordinates()[e4 + 1], a2 = n2.getCoordinates()[i2], o2 = n2.getCoordinates()[i2 + 1];
          this._li.computeIntersection(r2, s2, a2, o2), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = true), this.isTrivialIntersection(t2, e4, n2, i2) || (this._hasIntersection = true, t2.addIntersections(this._li, e4, 0), n2.addIntersections(this._li, i2, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = true, this._hasProperInterior = true)));
        } }, { key: "hasIntersection", value: function() {
          return this._hasIntersection;
        } }, { key: "isDone", value: function() {
          return false;
        } }, { key: "hasInteriorIntersection", value: function() {
          return this._hasInterior;
        } }, { key: "interfaces_", get: function() {
          return [Kn];
        } }], [{ key: "constructor_", value: function() {
          this._hasIntersection = false, this._hasProper = false, this._hasProperInterior = false, this._hasInterior = false, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
          var t2 = arguments[0];
          this._li = t2;
        } }, { key: "isAdjacentSegments", value: function(t2, e4) {
          return 1 === Math.abs(t2 - e4);
        } }]), e3;
      }(), Qn = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getSegmentIndex", value: function() {
          return this.segmentIndex;
        } }, { key: "getCoordinate", value: function() {
          return this.coord;
        } }, { key: "print", value: function(t2) {
          t2.print(this.coord), t2.print(" seg # = " + this.segmentIndex), t2.println(" dist = " + this.dist);
        } }, { key: "compareTo", value: function(t2) {
          var e4 = t2;
          return this.compare(e4.segmentIndex, e4.dist);
        } }, { key: "isEndPoint", value: function(t2) {
          return 0 === this.segmentIndex && 0 === this.dist || this.segmentIndex === t2;
        } }, { key: "toString", value: function() {
          return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
        } }, { key: "getDistance", value: function() {
          return this.dist;
        } }, { key: "compare", value: function(t2, e4) {
          return this.segmentIndex < t2 ? -1 : this.segmentIndex > t2 ? 1 : this.dist < e4 ? -1 : this.dist > e4 ? 1 : 0;
        } }, { key: "interfaces_", get: function() {
          return [x2];
        } }], [{ key: "constructor_", value: function() {
          this.coord = null, this.segmentIndex = null, this.dist = null;
          var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2];
          this.coord = new X(t2), this.segmentIndex = e4, this.dist = n2;
        } }]), e3;
      }(), $n = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "print", value: function(t2) {
          t2.println("Intersections:");
          for (var e4 = this.iterator(); e4.hasNext(); ) {
            e4.next().print(t2);
          }
        } }, { key: "iterator", value: function() {
          return this._nodeMap.values().iterator();
        } }, { key: "addSplitEdges", value: function(t2) {
          this.addEndpoints();
          for (var e4 = this.iterator(), n2 = e4.next(); e4.hasNext(); ) {
            var i2 = e4.next(), r2 = this.createSplitEdge(n2, i2);
            t2.add(r2), n2 = i2;
          }
        } }, { key: "addEndpoints", value: function() {
          var t2 = this.edge.pts.length - 1;
          this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t2], t2, 0);
        } }, { key: "createSplitEdge", value: function(t2, e4) {
          var n2 = e4.segmentIndex - t2.segmentIndex + 2, i2 = this.edge.pts[e4.segmentIndex], r2 = e4.dist > 0 || !e4.coord.equals2D(i2);
          r2 || n2--;
          var s2 = new Array(n2).fill(null), a2 = 0;
          s2[a2++] = new X(t2.coord);
          for (var o2 = t2.segmentIndex + 1; o2 <= e4.segmentIndex; o2++) s2[a2++] = this.edge.pts[o2];
          return r2 && (s2[a2] = e4.coord), new si(s2, new Pe(this.edge._label));
        } }, { key: "add", value: function(t2, e4, n2) {
          var i2 = new Qn(t2, e4, n2), r2 = this._nodeMap.get(i2);
          return null !== r2 ? r2 : (this._nodeMap.put(i2, i2), i2);
        } }, { key: "isIntersection", value: function(t2) {
          for (var e4 = this.iterator(); e4.hasNext(); ) {
            if (e4.next().coord.equals(t2)) return true;
          }
          return false;
        } }], [{ key: "constructor_", value: function() {
          this._nodeMap = new Ze(), this.edge = null;
          var t2 = arguments[0];
          this.edge = t2;
        } }]), e3;
      }(), ti = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "isIntersects", value: function() {
          return !this.isDisjoint();
        } }, { key: "isCovers", value: function() {
          return (e3.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) || e3.isTrue(this._matrix[H.INTERIOR][H.BOUNDARY]) || e3.isTrue(this._matrix[H.BOUNDARY][H.INTERIOR]) || e3.isTrue(this._matrix[H.BOUNDARY][H.BOUNDARY])) && this._matrix[H.EXTERIOR][H.INTERIOR] === Lt.FALSE && this._matrix[H.EXTERIOR][H.BOUNDARY] === Lt.FALSE;
        } }, { key: "isCoveredBy", value: function() {
          return (e3.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) || e3.isTrue(this._matrix[H.INTERIOR][H.BOUNDARY]) || e3.isTrue(this._matrix[H.BOUNDARY][H.INTERIOR]) || e3.isTrue(this._matrix[H.BOUNDARY][H.BOUNDARY])) && this._matrix[H.INTERIOR][H.EXTERIOR] === Lt.FALSE && this._matrix[H.BOUNDARY][H.EXTERIOR] === Lt.FALSE;
        } }, { key: "set", value: function() {
          if (1 === arguments.length) for (var t2 = arguments[0], e4 = 0; e4 < t2.length; e4++) {
            var n2 = Math.trunc(e4 / 3), i2 = e4 % 3;
            this._matrix[n2][i2] = Lt.toDimensionValue(t2.charAt(e4));
          }
          else if (3 === arguments.length) {
            var r2 = arguments[0], s2 = arguments[1], a2 = arguments[2];
            this._matrix[r2][s2] = a2;
          }
        } }, { key: "isContains", value: function() {
          return e3.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && this._matrix[H.EXTERIOR][H.INTERIOR] === Lt.FALSE && this._matrix[H.EXTERIOR][H.BOUNDARY] === Lt.FALSE;
        } }, { key: "setAtLeast", value: function() {
          if (1 === arguments.length) for (var t2 = arguments[0], e4 = 0; e4 < t2.length; e4++) {
            var n2 = Math.trunc(e4 / 3), i2 = e4 % 3;
            this.setAtLeast(n2, i2, Lt.toDimensionValue(t2.charAt(e4)));
          }
          else if (3 === arguments.length) {
            var r2 = arguments[0], s2 = arguments[1], a2 = arguments[2];
            this._matrix[r2][s2] < a2 && (this._matrix[r2][s2] = a2);
          }
        } }, { key: "setAtLeastIfValid", value: function(t2, e4, n2) {
          t2 >= 0 && e4 >= 0 && this.setAtLeast(t2, e4, n2);
        } }, { key: "isWithin", value: function() {
          return e3.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && this._matrix[H.INTERIOR][H.EXTERIOR] === Lt.FALSE && this._matrix[H.BOUNDARY][H.EXTERIOR] === Lt.FALSE;
        } }, { key: "isTouches", value: function(t2, n2) {
          return t2 > n2 ? this.isTouches(n2, t2) : (t2 === Lt.A && n2 === Lt.A || t2 === Lt.L && n2 === Lt.L || t2 === Lt.L && n2 === Lt.A || t2 === Lt.P && n2 === Lt.A || t2 === Lt.P && n2 === Lt.L) && (this._matrix[H.INTERIOR][H.INTERIOR] === Lt.FALSE && (e3.isTrue(this._matrix[H.INTERIOR][H.BOUNDARY]) || e3.isTrue(this._matrix[H.BOUNDARY][H.INTERIOR]) || e3.isTrue(this._matrix[H.BOUNDARY][H.BOUNDARY])));
        } }, { key: "isOverlaps", value: function(t2, n2) {
          return t2 === Lt.P && n2 === Lt.P || t2 === Lt.A && n2 === Lt.A ? e3.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && e3.isTrue(this._matrix[H.INTERIOR][H.EXTERIOR]) && e3.isTrue(this._matrix[H.EXTERIOR][H.INTERIOR]) : t2 === Lt.L && n2 === Lt.L && (1 === this._matrix[H.INTERIOR][H.INTERIOR] && e3.isTrue(this._matrix[H.INTERIOR][H.EXTERIOR]) && e3.isTrue(this._matrix[H.EXTERIOR][H.INTERIOR]));
        } }, { key: "isEquals", value: function(t2, n2) {
          return t2 === n2 && (e3.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && this._matrix[H.INTERIOR][H.EXTERIOR] === Lt.FALSE && this._matrix[H.BOUNDARY][H.EXTERIOR] === Lt.FALSE && this._matrix[H.EXTERIOR][H.INTERIOR] === Lt.FALSE && this._matrix[H.EXTERIOR][H.BOUNDARY] === Lt.FALSE);
        } }, { key: "toString", value: function() {
          for (var t2 = new Jt("123456789"), e4 = 0; e4 < 3; e4++) for (var n2 = 0; n2 < 3; n2++) t2.setCharAt(3 * e4 + n2, Lt.toDimensionSymbol(this._matrix[e4][n2]));
          return t2.toString();
        } }, { key: "setAll", value: function(t2) {
          for (var e4 = 0; e4 < 3; e4++) for (var n2 = 0; n2 < 3; n2++) this._matrix[e4][n2] = t2;
        } }, { key: "get", value: function(t2, e4) {
          return this._matrix[t2][e4];
        } }, { key: "transpose", value: function() {
          var t2 = this._matrix[1][0];
          return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = t2, t2 = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = t2, t2 = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = t2, this;
        } }, { key: "matches", value: function(t2) {
          if (9 !== t2.length) throw new m("Should be length 9: " + t2);
          for (var n2 = 0; n2 < 3; n2++) for (var i2 = 0; i2 < 3; i2++) if (!e3.matches(this._matrix[n2][i2], t2.charAt(3 * n2 + i2))) return false;
          return true;
        } }, { key: "add", value: function(t2) {
          for (var e4 = 0; e4 < 3; e4++) for (var n2 = 0; n2 < 3; n2++) this.setAtLeast(e4, n2, t2.get(e4, n2));
        } }, { key: "isDisjoint", value: function() {
          return this._matrix[H.INTERIOR][H.INTERIOR] === Lt.FALSE && this._matrix[H.INTERIOR][H.BOUNDARY] === Lt.FALSE && this._matrix[H.BOUNDARY][H.INTERIOR] === Lt.FALSE && this._matrix[H.BOUNDARY][H.BOUNDARY] === Lt.FALSE;
        } }, { key: "isCrosses", value: function(t2, n2) {
          return t2 === Lt.P && n2 === Lt.L || t2 === Lt.P && n2 === Lt.A || t2 === Lt.L && n2 === Lt.A ? e3.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && e3.isTrue(this._matrix[H.INTERIOR][H.EXTERIOR]) : t2 === Lt.L && n2 === Lt.P || t2 === Lt.A && n2 === Lt.P || t2 === Lt.A && n2 === Lt.L ? e3.isTrue(this._matrix[H.INTERIOR][H.INTERIOR]) && e3.isTrue(this._matrix[H.EXTERIOR][H.INTERIOR]) : t2 === Lt.L && n2 === Lt.L && 0 === this._matrix[H.INTERIOR][H.INTERIOR];
        } }, { key: "interfaces_", get: function() {
          return [I];
        } }], [{ key: "constructor_", value: function() {
          if (this._matrix = null, 0 === arguments.length) this._matrix = Array(3).fill().map(function() {
            return Array(3);
          }), this.setAll(Lt.FALSE);
          else if (1 === arguments.length) {
            if ("string" == typeof arguments[0]) {
              var t2 = arguments[0];
              e3.constructor_.call(this), this.set(t2);
            } else if (arguments[0] instanceof e3) {
              var n2 = arguments[0];
              e3.constructor_.call(this), this._matrix[H.INTERIOR][H.INTERIOR] = n2._matrix[H.INTERIOR][H.INTERIOR], this._matrix[H.INTERIOR][H.BOUNDARY] = n2._matrix[H.INTERIOR][H.BOUNDARY], this._matrix[H.INTERIOR][H.EXTERIOR] = n2._matrix[H.INTERIOR][H.EXTERIOR], this._matrix[H.BOUNDARY][H.INTERIOR] = n2._matrix[H.BOUNDARY][H.INTERIOR], this._matrix[H.BOUNDARY][H.BOUNDARY] = n2._matrix[H.BOUNDARY][H.BOUNDARY], this._matrix[H.BOUNDARY][H.EXTERIOR] = n2._matrix[H.BOUNDARY][H.EXTERIOR], this._matrix[H.EXTERIOR][H.INTERIOR] = n2._matrix[H.EXTERIOR][H.INTERIOR], this._matrix[H.EXTERIOR][H.BOUNDARY] = n2._matrix[H.EXTERIOR][H.BOUNDARY], this._matrix[H.EXTERIOR][H.EXTERIOR] = n2._matrix[H.EXTERIOR][H.EXTERIOR];
            }
          }
        } }, { key: "matches", value: function() {
          if (Number.isInteger(arguments[0]) && "string" == typeof arguments[1]) {
            var t2 = arguments[0], n2 = arguments[1];
            return n2 === Lt.SYM_DONTCARE || (n2 === Lt.SYM_TRUE && (t2 >= 0 || t2 === Lt.TRUE) || (n2 === Lt.SYM_FALSE && t2 === Lt.FALSE || (n2 === Lt.SYM_P && t2 === Lt.P || (n2 === Lt.SYM_L && t2 === Lt.L || n2 === Lt.SYM_A && t2 === Lt.A))));
          }
          if ("string" == typeof arguments[0] && "string" == typeof arguments[1]) {
            var i2 = arguments[0], r2 = arguments[1], s2 = new e3(i2);
            return s2.matches(r2);
          }
        } }, { key: "isTrue", value: function(t2) {
          return t2 >= 0 || t2 === Lt.TRUE;
        } }]), e3;
      }(), ei = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "size", value: function() {
          return this._size;
        } }, { key: "addAll", value: function(t2) {
          return null === t2 || 0 === t2.length ? null : (this.ensureCapacity(this._size + t2.length), mt.arraycopy(t2, 0, this._data, this._size, t2.length), void (this._size += t2.length));
        } }, { key: "ensureCapacity", value: function(t2) {
          if (t2 <= this._data.length) return null;
          var e4 = Math.max(t2, 2 * this._data.length);
          this._data = At.copyOf(this._data, e4);
        } }, { key: "toArray", value: function() {
          var t2 = new Array(this._size).fill(null);
          return mt.arraycopy(this._data, 0, t2, 0, this._size), t2;
        } }, { key: "add", value: function(t2) {
          this.ensureCapacity(this._size + 1), this._data[this._size] = t2, ++this._size;
        } }], [{ key: "constructor_", value: function() {
          if (this._data = null, this._size = 0, 0 === arguments.length) e3.constructor_.call(this, 10);
          else if (1 === arguments.length) {
            var t2 = arguments[0];
            this._data = new Array(t2).fill(null);
          }
        } }]), e3;
      }(), ni = function() {
        function e3() {
          t(this, e3);
        }
        return n(e3, [{ key: "getChainStartIndices", value: function(t2) {
          var e4 = 0, n2 = new ei(Math.trunc(t2.length / 2));
          n2.add(e4);
          do {
            var i2 = this.findChainEnd(t2, e4);
            n2.add(i2), e4 = i2;
          } while (e4 < t2.length - 1);
          return n2.toArray();
        } }, { key: "findChainEnd", value: function(t2, e4) {
          for (var n2 = We.quadrant(t2[e4], t2[e4 + 1]), i2 = e4 + 1; i2 < t2.length; ) {
            if (We.quadrant(t2[i2 - 1], t2[i2]) !== n2) break;
            i2++;
          }
          return i2 - 1;
        } }, { key: "OLDgetChainStartIndices", value: function(t2) {
          var n2 = 0, i2 = new yt();
          i2.add(n2);
          do {
            var r2 = this.findChainEnd(t2, n2);
            i2.add(r2), n2 = r2;
          } while (n2 < t2.length - 1);
          return e3.toIntArray(i2);
        } }], [{ key: "toIntArray", value: function(t2) {
          for (var e4 = new Array(t2.size()).fill(null), n2 = 0; n2 < e4.length; n2++) e4[n2] = t2.get(n2).intValue();
          return e4;
        } }]), e3;
      }(), ii = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getCoordinates", value: function() {
          return this.pts;
        } }, { key: "getMaxX", value: function(t2) {
          var e4 = this.pts[this.startIndex[t2]].x, n2 = this.pts[this.startIndex[t2 + 1]].x;
          return e4 > n2 ? e4 : n2;
        } }, { key: "getMinX", value: function(t2) {
          var e4 = this.pts[this.startIndex[t2]].x, n2 = this.pts[this.startIndex[t2 + 1]].x;
          return e4 < n2 ? e4 : n2;
        } }, { key: "computeIntersectsForChain", value: function() {
          if (4 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2], i2 = arguments[3];
            this.computeIntersectsForChain(this.startIndex[t2], this.startIndex[t2 + 1], e4, e4.startIndex[n2], e4.startIndex[n2 + 1], i2);
          } else if (6 === arguments.length) {
            var r2 = arguments[0], s2 = arguments[1], a2 = arguments[2], o2 = arguments[3], u5 = arguments[4], l2 = arguments[5];
            if (s2 - r2 == 1 && u5 - o2 == 1) return l2.addIntersections(this.e, r2, a2.e, o2), null;
            if (!this.overlaps(r2, s2, a2, o2, u5)) return null;
            var h2 = Math.trunc((r2 + s2) / 2), c2 = Math.trunc((o2 + u5) / 2);
            r2 < h2 && (o2 < c2 && this.computeIntersectsForChain(r2, h2, a2, o2, c2, l2), c2 < u5 && this.computeIntersectsForChain(r2, h2, a2, c2, u5, l2)), h2 < s2 && (o2 < c2 && this.computeIntersectsForChain(h2, s2, a2, o2, c2, l2), c2 < u5 && this.computeIntersectsForChain(h2, s2, a2, c2, u5, l2));
          }
        } }, { key: "overlaps", value: function(t2, e4, n2, i2, r2) {
          return U.intersects(this.pts[t2], this.pts[e4], n2.pts[i2], n2.pts[r2]);
        } }, { key: "getStartIndexes", value: function() {
          return this.startIndex;
        } }, { key: "computeIntersects", value: function(t2, e4) {
          for (var n2 = 0; n2 < this.startIndex.length - 1; n2++) for (var i2 = 0; i2 < t2.startIndex.length - 1; i2++) this.computeIntersectsForChain(n2, t2, i2, e4);
        } }], [{ key: "constructor_", value: function() {
          this.e = null, this.pts = null, this.startIndex = null;
          var t2 = arguments[0];
          this.e = t2, this.pts = t2.getCoordinates();
          var e4 = new ni();
          this.startIndex = e4.getChainStartIndices(this.pts);
        } }]), e3;
      }(), ri = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "getDepth", value: function(t2, e4) {
          return this._depth[t2][e4];
        } }, { key: "setDepth", value: function(t2, e4, n2) {
          this._depth[t2][e4] = n2;
        } }, { key: "isNull", value: function() {
          if (0 === arguments.length) {
            for (var t2 = 0; t2 < 2; t2++) for (var n2 = 0; n2 < 3; n2++) if (this._depth[t2][n2] !== e3.NULL_VALUE) return false;
            return true;
          }
          if (1 === arguments.length) {
            var i2 = arguments[0];
            return this._depth[i2][1] === e3.NULL_VALUE;
          }
          if (2 === arguments.length) {
            var r2 = arguments[0], s2 = arguments[1];
            return this._depth[r2][s2] === e3.NULL_VALUE;
          }
        } }, { key: "normalize", value: function() {
          for (var t2 = 0; t2 < 2; t2++) if (!this.isNull(t2)) {
            var e4 = this._depth[t2][1];
            this._depth[t2][2] < e4 && (e4 = this._depth[t2][2]), e4 < 0 && (e4 = 0);
            for (var n2 = 1; n2 < 3; n2++) {
              var i2 = 0;
              this._depth[t2][n2] > e4 && (i2 = 1), this._depth[t2][n2] = i2;
            }
          }
        } }, { key: "getDelta", value: function(t2) {
          return this._depth[t2][$.RIGHT] - this._depth[t2][$.LEFT];
        } }, { key: "getLocation", value: function(t2, e4) {
          return this._depth[t2][e4] <= 0 ? H.EXTERIOR : H.INTERIOR;
        } }, { key: "toString", value: function() {
          return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
        } }, { key: "add", value: function() {
          if (1 === arguments.length) for (var t2 = arguments[0], n2 = 0; n2 < 2; n2++) for (var i2 = 1; i2 < 3; i2++) {
            var r2 = t2.getLocation(n2, i2);
            r2 !== H.EXTERIOR && r2 !== H.INTERIOR || (this.isNull(n2, i2) ? this._depth[n2][i2] = e3.depthAtLocation(r2) : this._depth[n2][i2] += e3.depthAtLocation(r2));
          }
          else if (3 === arguments.length) {
            var s2 = arguments[0], a2 = arguments[1], o2 = arguments[2];
            o2 === H.INTERIOR && this._depth[s2][a2]++;
          }
        } }], [{ key: "constructor_", value: function() {
          this._depth = Array(2).fill().map(function() {
            return Array(3);
          });
          for (var t2 = 0; t2 < 2; t2++) for (var n2 = 0; n2 < 3; n2++) this._depth[t2][n2] = e3.NULL_VALUE;
        } }, { key: "depthAtLocation", value: function(t2) {
          return t2 === H.EXTERIOR ? 0 : t2 === H.INTERIOR ? 1 : e3.NULL_VALUE;
        } }]), e3;
      }();
      ri.NULL_VALUE = -1;
      var si = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "getDepth", value: function() {
          return this._depth;
        } }, { key: "getCollapsedEdge", value: function() {
          var t2 = new Array(2).fill(null);
          return t2[0] = this.pts[0], t2[1] = this.pts[1], new a2(t2, Pe.toLineLabel(this._label));
        } }, { key: "isIsolated", value: function() {
          return this._isIsolated;
        } }, { key: "getCoordinates", value: function() {
          return this.pts;
        } }, { key: "setIsolated", value: function(t2) {
          this._isIsolated = t2;
        } }, { key: "setName", value: function(t2) {
          this._name = t2;
        } }, { key: "equals", value: function(t2) {
          if (!(t2 instanceof a2)) return false;
          var e4 = t2;
          if (this.pts.length !== e4.pts.length) return false;
          for (var n2 = true, i2 = true, r2 = this.pts.length, s3 = 0; s3 < this.pts.length; s3++) if (this.pts[s3].equals2D(e4.pts[s3]) || (n2 = false), this.pts[s3].equals2D(e4.pts[--r2]) || (i2 = false), !n2 && !i2) return false;
          return true;
        } }, { key: "getCoordinate", value: function() {
          if (0 === arguments.length) return this.pts.length > 0 ? this.pts[0] : null;
          if (1 === arguments.length) {
            var t2 = arguments[0];
            return this.pts[t2];
          }
        } }, { key: "print", value: function(t2) {
          t2.print("edge " + this._name + ": "), t2.print("LINESTRING (");
          for (var e4 = 0; e4 < this.pts.length; e4++) e4 > 0 && t2.print(","), t2.print(this.pts[e4].x + " " + this.pts[e4].y);
          t2.print(")  " + this._label + " " + this._depthDelta);
        } }, { key: "computeIM", value: function(t2) {
          a2.updateIM(this._label, t2);
        } }, { key: "isCollapsed", value: function() {
          return !!this._label.isArea() && (3 === this.pts.length && !!this.pts[0].equals(this.pts[2]));
        } }, { key: "isClosed", value: function() {
          return this.pts[0].equals(this.pts[this.pts.length - 1]);
        } }, { key: "getMaximumSegmentIndex", value: function() {
          return this.pts.length - 1;
        } }, { key: "getDepthDelta", value: function() {
          return this._depthDelta;
        } }, { key: "getNumPoints", value: function() {
          return this.pts.length;
        } }, { key: "printReverse", value: function(t2) {
          t2.print("edge " + this._name + ": ");
          for (var e4 = this.pts.length - 1; e4 >= 0; e4--) t2.print(this.pts[e4] + " ");
          t2.println("");
        } }, { key: "getMonotoneChainEdge", value: function() {
          return null === this._mce && (this._mce = new ii(this)), this._mce;
        } }, { key: "getEnvelope", value: function() {
          if (null === this._env) {
            this._env = new U();
            for (var t2 = 0; t2 < this.pts.length; t2++) this._env.expandToInclude(this.pts[t2]);
          }
          return this._env;
        } }, { key: "addIntersection", value: function(t2, e4, n2, i2) {
          var r2 = new X(t2.getIntersection(i2)), s3 = e4, a3 = t2.getEdgeDistance(n2, i2), o2 = s3 + 1;
          if (o2 < this.pts.length) {
            var u5 = this.pts[o2];
            r2.equals2D(u5) && (s3 = o2, a3 = 0);
          }
          this.eiList.add(r2, s3, a3);
        } }, { key: "toString", value: function() {
          var t2 = new Jt();
          t2.append("edge " + this._name + ": "), t2.append("LINESTRING (");
          for (var e4 = 0; e4 < this.pts.length; e4++) e4 > 0 && t2.append(","), t2.append(this.pts[e4].x + " " + this.pts[e4].y);
          return t2.append(")  " + this._label + " " + this._depthDelta), t2.toString();
        } }, { key: "isPointwiseEqual", value: function(t2) {
          if (this.pts.length !== t2.pts.length) return false;
          for (var e4 = 0; e4 < this.pts.length; e4++) if (!this.pts[e4].equals2D(t2.pts[e4])) return false;
          return true;
        } }, { key: "setDepthDelta", value: function(t2) {
          this._depthDelta = t2;
        } }, { key: "getEdgeIntersectionList", value: function() {
          return this.eiList;
        } }, { key: "addIntersections", value: function(t2, e4, n2) {
          for (var i2 = 0; i2 < t2.getIntersectionNum(); i2++) this.addIntersection(t2, e4, n2, i2);
        } }], [{ key: "constructor_", value: function() {
          if (this.pts = null, this._env = null, this.eiList = new $n(this), this._name = null, this._mce = null, this._isIsolated = true, this._depth = new ri(), this._depthDelta = 0, 1 === arguments.length) {
            var t2 = arguments[0];
            a2.constructor_.call(this, t2, null);
          } else if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            this.pts = e4, this._label = n2;
          }
        } }, { key: "updateIM", value: function() {
          if (!(2 === arguments.length && arguments[1] instanceof ti && arguments[0] instanceof Pe)) return f(r(a2), "updateIM", this).apply(this, arguments);
          var t2 = arguments[0], e4 = arguments[1];
          e4.setAtLeastIfValid(t2.getLocation(0, $.ON), t2.getLocation(1, $.ON), 1), t2.isArea() && (e4.setAtLeastIfValid(t2.getLocation(0, $.LEFT), t2.getLocation(1, $.LEFT), 2), e4.setAtLeastIfValid(t2.getLocation(0, $.RIGHT), t2.getLocation(1, $.RIGHT), 2));
        } }]), a2;
      }(qe), ai = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "setWorkingPrecisionModel", value: function(t2) {
          this._workingPrecisionModel = t2;
        } }, { key: "insertUniqueEdge", value: function(t2) {
          var n2 = this._edgeList.findEqualEdge(t2);
          if (null !== n2) {
            var i2 = n2.getLabel(), r2 = t2.getLabel();
            n2.isPointwiseEqual(t2) || (r2 = new Pe(t2.getLabel())).flip(), i2.merge(r2);
            var s2 = e3.depthDelta(r2), a2 = n2.getDepthDelta() + s2;
            n2.setDepthDelta(a2);
          } else this._edgeList.add(t2), t2.setDepthDelta(e3.depthDelta(t2.getLabel()));
        } }, { key: "buildSubgraphs", value: function(t2, e4) {
          for (var n2 = new yt(), i2 = t2.iterator(); i2.hasNext(); ) {
            var r2 = i2.next(), s2 = r2.getRightmostCoordinate(), a2 = new Dn(n2).getDepth(s2);
            r2.computeDepth(a2), r2.findResultEdges(), n2.add(r2), e4.add(r2.getDirectedEdges(), r2.getNodes());
          }
        } }, { key: "createSubgraphs", value: function(t2) {
          for (var e4 = new yt(), n2 = t2.getNodes().iterator(); n2.hasNext(); ) {
            var i2 = n2.next();
            if (!i2.isVisited()) {
              var r2 = new _t();
              r2.create(i2), e4.add(r2);
            }
          }
          return on.sort(e4, on.reverseOrder()), e4;
        } }, { key: "createEmptyResultGeometry", value: function() {
          return this._geomFact.createPolygon();
        } }, { key: "getNoder", value: function(t2) {
          if (null !== this._workingNoder) return this._workingNoder;
          var e4 = new Rn(), n2 = new Oe();
          return n2.setPrecisionModel(t2), e4.setSegmentIntersector(new Jn(n2)), e4;
        } }, { key: "buffer", value: function(t2, e4) {
          var n2 = this._workingPrecisionModel;
          null === n2 && (n2 = t2.getPrecisionModel()), this._geomFact = t2.getFactory();
          var i2 = new Pn(n2, this._bufParams), r2 = new zn(t2, e4, i2).getCurves();
          if (r2.size() <= 0) return this.createEmptyResultGeometry();
          this.computeNodedEdges(r2, n2), this._graph = new $e(new Zn()), this._graph.addEdges(this._edgeList.getEdges());
          var s2 = this.createSubgraphs(this._graph), a2 = new tn(this._geomFact);
          this.buildSubgraphs(s2, a2);
          var o2 = a2.getPolygons();
          return o2.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(o2);
        } }, { key: "computeNodedEdges", value: function(t2, e4) {
          var n2 = this.getNoder(e4);
          n2.computeNodes(t2);
          for (var i2 = n2.getNodedSubstrings().iterator(); i2.hasNext(); ) {
            var r2 = i2.next(), s2 = r2.getCoordinates();
            if (2 !== s2.length || !s2[0].equals2D(s2[1])) {
              var a2 = r2.getData(), o2 = new si(r2.getCoordinates(), new Pe(a2));
              this.insertUniqueEdge(o2);
            }
          }
        } }, { key: "setNoder", value: function(t2) {
          this._workingNoder = t2;
        } }], [{ key: "constructor_", value: function() {
          this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new Wn();
          var t2 = arguments[0];
          this._bufParams = t2;
        } }, { key: "depthDelta", value: function(t2) {
          var e4 = t2.getLocation(0, $.LEFT), n2 = t2.getLocation(0, $.RIGHT);
          return e4 === H.INTERIOR && n2 === H.EXTERIOR ? 1 : e4 === H.EXTERIOR && n2 === H.INTERIOR ? -1 : 0;
        } }, { key: "convertSegStrings", value: function(t2) {
          for (var e4 = new ae(), n2 = new yt(); t2.hasNext(); ) {
            var i2 = t2.next(), r2 = e4.createLineString(i2.getCoordinates());
            n2.add(r2);
          }
          return e4.buildGeometry(n2);
        } }]), e3;
      }(), oi = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "rescale", value: function() {
          if (rt(arguments[0], Z)) for (var t2 = arguments[0], e4 = t2.iterator(); e4.hasNext(); ) {
            var n2 = e4.next();
            this.rescale(n2.getCoordinates());
          }
          else if (arguments[0] instanceof Array) {
            for (var i2 = arguments[0], r2 = 0; r2 < i2.length; r2++) i2[r2].x = i2[r2].x / this._scaleFactor + this._offsetX, i2[r2].y = i2[r2].y / this._scaleFactor + this._offsetY;
            2 === i2.length && i2[0].equals2D(i2[1]) && mt.out.println(i2);
          }
        } }, { key: "scale", value: function() {
          if (rt(arguments[0], Z)) {
            for (var t2 = arguments[0], e4 = new yt(t2.size()), n2 = t2.iterator(); n2.hasNext(); ) {
              var i2 = n2.next();
              e4.add(new In(this.scale(i2.getCoordinates()), i2.getData()));
            }
            return e4;
          }
          if (arguments[0] instanceof Array) {
            for (var r2 = arguments[0], s2 = new Array(r2.length).fill(null), a2 = 0; a2 < r2.length; a2++) s2[a2] = new X(Math.round((r2[a2].x - this._offsetX) * this._scaleFactor), Math.round((r2[a2].y - this._offsetY) * this._scaleFactor), r2[a2].getZ());
            var o2 = jt.removeRepeatedPoints(s2);
            return o2;
          }
        } }, { key: "isIntegerPrecision", value: function() {
          return 1 === this._scaleFactor;
        } }, { key: "getNodedSubstrings", value: function() {
          var t2 = this._noder.getNodedSubstrings();
          return this._isScaled && this.rescale(t2), t2;
        } }, { key: "computeNodes", value: function(t2) {
          var e4 = t2;
          this._isScaled && (e4 = this.scale(t2)), this._noder.computeNodes(e4);
        } }, { key: "interfaces_", get: function() {
          return [Ln];
        } }], [{ key: "constructor_", value: function() {
          if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = false, 2 === arguments.length) {
            var t2 = arguments[0], n2 = arguments[1];
            e3.constructor_.call(this, t2, n2, 0, 0);
          } else if (4 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1];
            this._noder = i2, this._scaleFactor = r2, this._isScaled = !this.isIntegerPrecision();
          }
        } }]), e3;
      }(), ui = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "checkEndPtVertexIntersections", value: function() {
          if (0 === arguments.length) for (var t2 = this._segStrings.iterator(); t2.hasNext(); ) {
            var e4 = t2.next(), n2 = e4.getCoordinates();
            this.checkEndPtVertexIntersections(n2[0], this._segStrings), this.checkEndPtVertexIntersections(n2[n2.length - 1], this._segStrings);
          }
          else if (2 === arguments.length) {
            for (var i2 = arguments[0], r2 = arguments[1], s2 = r2.iterator(); s2.hasNext(); ) for (var a2 = s2.next(), o2 = a2.getCoordinates(), u5 = 1; u5 < o2.length - 1; u5++) if (o2[u5].equals(i2)) throw new D2("found endpt/interior pt intersection at index " + u5 + " :pt " + i2);
          }
        } }, { key: "checkInteriorIntersections", value: function() {
          if (0 === arguments.length) for (var t2 = this._segStrings.iterator(); t2.hasNext(); ) for (var e4 = t2.next(), n2 = this._segStrings.iterator(); n2.hasNext(); ) {
            var i2 = n2.next();
            this.checkInteriorIntersections(e4, i2);
          }
          else if (2 === arguments.length) for (var r2 = arguments[0], s2 = arguments[1], a2 = r2.getCoordinates(), o2 = s2.getCoordinates(), u5 = 0; u5 < a2.length - 1; u5++) for (var l2 = 0; l2 < o2.length - 1; l2++) this.checkInteriorIntersections(r2, u5, s2, l2);
          else if (4 === arguments.length) {
            var h2 = arguments[0], c2 = arguments[1], f2 = arguments[2], v3 = arguments[3];
            if (h2 === f2 && c2 === v3) return null;
            var g2 = h2.getCoordinates()[c2], y3 = h2.getCoordinates()[c2 + 1], d2 = f2.getCoordinates()[v3], _2 = f2.getCoordinates()[v3 + 1];
            if (this._li.computeIntersection(g2, y3, d2, _2), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, g2, y3) || this.hasInteriorIntersection(this._li, d2, _2))) throw new D2("found non-noded intersection at " + g2 + "-" + y3 + " and " + d2 + "-" + _2);
          }
        } }, { key: "checkValid", value: function() {
          this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
        } }, { key: "checkCollapses", value: function() {
          if (0 === arguments.length) for (var t2 = this._segStrings.iterator(); t2.hasNext(); ) {
            var e4 = t2.next();
            this.checkCollapses(e4);
          }
          else if (1 === arguments.length) for (var n2 = arguments[0], i2 = n2.getCoordinates(), r2 = 0; r2 < i2.length - 2; r2++) this.checkCollapse(i2[r2], i2[r2 + 1], i2[r2 + 2]);
        } }, { key: "hasInteriorIntersection", value: function(t2, e4, n2) {
          for (var i2 = 0; i2 < t2.getIntersectionNum(); i2++) {
            var r2 = t2.getIntersection(i2);
            if (!r2.equals(e4) && !r2.equals(n2)) return true;
          }
          return false;
        } }, { key: "checkCollapse", value: function(t2, n2, i2) {
          if (t2.equals(i2)) throw new D2("found non-noded collapse at " + e3.fact.createLineString([t2, n2, i2]));
        } }], [{ key: "constructor_", value: function() {
          this._li = new Oe(), this._segStrings = null;
          var t2 = arguments[0];
          this._segStrings = t2;
        } }]), e3;
      }();
      ui.fact = new ae();
      var li = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "intersectsScaled", value: function(t2, e4) {
          var n2 = Math.min(t2.x, e4.x), i2 = Math.max(t2.x, e4.x), r2 = Math.min(t2.y, e4.y), s2 = Math.max(t2.y, e4.y), a2 = this._maxx < n2 || this._minx > i2 || this._maxy < r2 || this._miny > s2;
          if (a2) return false;
          var o2 = this.intersectsToleranceSquare(t2, e4);
          return G.isTrue(!(a2 && o2), "Found bad envelope test"), o2;
        } }, { key: "initCorners", value: function(t2) {
          var e4 = 0.5;
          this._minx = t2.x - e4, this._maxx = t2.x + e4, this._miny = t2.y - e4, this._maxy = t2.y + e4, this._corner[0] = new X(this._maxx, this._maxy), this._corner[1] = new X(this._minx, this._maxy), this._corner[2] = new X(this._minx, this._miny), this._corner[3] = new X(this._maxx, this._miny);
        } }, { key: "intersects", value: function(t2, e4) {
          return 1 === this._scaleFactor ? this.intersectsScaled(t2, e4) : (this.copyScaled(t2, this._p0Scaled), this.copyScaled(e4, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
        } }, { key: "scale", value: function(t2) {
          return Math.round(t2 * this._scaleFactor);
        } }, { key: "getCoordinate", value: function() {
          return this._originalPt;
        } }, { key: "copyScaled", value: function(t2, e4) {
          e4.x = this.scale(t2.x), e4.y = this.scale(t2.y);
        } }, { key: "getSafeEnvelope", value: function() {
          if (null === this._safeEnv) {
            var t2 = e3.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
            this._safeEnv = new U(this._originalPt.x - t2, this._originalPt.x + t2, this._originalPt.y - t2, this._originalPt.y + t2);
          }
          return this._safeEnv;
        } }, { key: "intersectsPixelClosure", value: function(t2, e4) {
          return this._li.computeIntersection(t2, e4, this._corner[0], this._corner[1]), !!this._li.hasIntersection() || (this._li.computeIntersection(t2, e4, this._corner[1], this._corner[2]), !!this._li.hasIntersection() || (this._li.computeIntersection(t2, e4, this._corner[2], this._corner[3]), !!this._li.hasIntersection() || (this._li.computeIntersection(t2, e4, this._corner[3], this._corner[0]), !!this._li.hasIntersection())));
        } }, { key: "intersectsToleranceSquare", value: function(t2, e4) {
          var n2 = false, i2 = false;
          return this._li.computeIntersection(t2, e4, this._corner[0], this._corner[1]), !!this._li.isProper() || (this._li.computeIntersection(t2, e4, this._corner[1], this._corner[2]), !!this._li.isProper() || (this._li.hasIntersection() && (n2 = true), this._li.computeIntersection(t2, e4, this._corner[2], this._corner[3]), !!this._li.isProper() || (this._li.hasIntersection() && (i2 = true), this._li.computeIntersection(t2, e4, this._corner[3], this._corner[0]), !!this._li.isProper() || (!(!n2 || !i2) || (!!t2.equals(this._pt) || !!e4.equals(this._pt))))));
        } }, { key: "addSnappedNode", value: function(t2, e4) {
          var n2 = t2.getCoordinate(e4), i2 = t2.getCoordinate(e4 + 1);
          return !!this.intersects(n2, i2) && (t2.addIntersection(this.getCoordinate(), e4), true);
        } }], [{ key: "constructor_", value: function() {
          this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
          var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2];
          if (this._originalPt = t2, this._pt = t2, this._scaleFactor = e4, this._li = n2, e4 <= 0) throw new m("Scale factor must be non-zero");
          1 !== e4 && (this._pt = new X(this.scale(t2.x), this.scale(t2.y)), this._p0Scaled = new X(), this._p1Scaled = new X()), this.initCorners(this._pt);
        } }]), e3;
      }();
      li.SAFE_ENV_EXPANSION_FACTOR = 0.75;
      var hi = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "select", value: function() {
          if (1 === arguments.length) ;
          else if (2 === arguments.length) {
            var t2 = arguments[0], e4 = arguments[1];
            t2.getLineSegment(e4, this.selectedSegment), this.select(this.selectedSegment);
          }
        } }], [{ key: "constructor_", value: function() {
          this.selectedSegment = new En();
        } }]), e3;
      }(), ci = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "snap", value: function() {
          if (1 === arguments.length) {
            var e4 = arguments[0];
            return this.snap(e4, null, -1);
          }
          if (3 === arguments.length) {
            var i2 = arguments[0], r2 = arguments[1], s2 = arguments[2], a2 = i2.getSafeEnvelope(), o2 = new fi(i2, r2, s2);
            return this._index.query(a2, new (function() {
              function e6() {
                t(this, e6);
              }
              return n(e6, [{ key: "interfaces_", get: function() {
                return [hn];
              } }, { key: "visitItem", value: function(t2) {
                t2.select(a2, o2);
              } }]), e6;
            }())()), o2.isNodeAdded();
          }
        } }], [{ key: "constructor_", value: function() {
          this._index = null;
          var t2 = arguments[0];
          this._index = t2;
        } }]), e3;
      }(), fi = function(e3) {
        i(a2, e3);
        var s2 = c(a2);
        function a2() {
          var e4;
          return t(this, a2), e4 = s2.call(this), a2.constructor_.apply(l(e4), arguments), e4;
        }
        return n(a2, [{ key: "isNodeAdded", value: function() {
          return this._isNodeAdded;
        } }, { key: "select", value: function() {
          if (!(2 === arguments.length && Number.isInteger(arguments[1]) && arguments[0] instanceof Tn)) return f(r(a2.prototype), "select", this).apply(this, arguments);
          var t2 = arguments[0], e4 = arguments[1], n2 = t2.getContext();
          if (this._parentEdge === n2 && (e4 === this._hotPixelVertexIndex || e4 + 1 === this._hotPixelVertexIndex)) return null;
          this._isNodeAdded |= this._hotPixel.addSnappedNode(n2, e4);
        } }], [{ key: "constructor_", value: function() {
          this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = false;
          var t2 = arguments[0], e4 = arguments[1], n2 = arguments[2];
          this._hotPixel = t2, this._parentEdge = e4, this._hotPixelVertexIndex = n2;
        } }]), a2;
      }(hi);
      ci.HotPixelSnapAction = fi;
      var vi = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "processIntersections", value: function(t2, e4, n2, i2) {
          if (t2 === n2 && e4 === i2) return null;
          var r2 = t2.getCoordinates()[e4], s2 = t2.getCoordinates()[e4 + 1], a2 = n2.getCoordinates()[i2], o2 = n2.getCoordinates()[i2 + 1];
          if (this._li.computeIntersection(r2, s2, a2, o2), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
            for (var u5 = 0; u5 < this._li.getIntersectionNum(); u5++) this._interiorIntersections.add(this._li.getIntersection(u5));
            t2.addIntersections(this._li, e4, 0), n2.addIntersections(this._li, i2, 1);
          }
        } }, { key: "isDone", value: function() {
          return false;
        } }, { key: "getInteriorIntersections", value: function() {
          return this._interiorIntersections;
        } }, { key: "interfaces_", get: function() {
          return [Kn];
        } }], [{ key: "constructor_", value: function() {
          this._li = null, this._interiorIntersections = null;
          var t2 = arguments[0];
          this._li = t2, this._interiorIntersections = new yt();
        } }]), e3;
      }(), gi = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "checkCorrectness", value: function(t2) {
          var e4 = In.getNodedSubstrings(t2), n2 = new ui(e4);
          try {
            n2.checkValid();
          } catch (t3) {
            if (!(t3 instanceof p)) throw t3;
            t3.printStackTrace();
          }
        } }, { key: "getNodedSubstrings", value: function() {
          return In.getNodedSubstrings(this._nodedSegStrings);
        } }, { key: "snapRound", value: function(t2, e4) {
          var n2 = this.findInteriorIntersections(t2, e4);
          this.computeIntersectionSnaps(n2), this.computeVertexSnaps(t2);
        } }, { key: "findInteriorIntersections", value: function(t2, e4) {
          var n2 = new vi(e4);
          return this._noder.setSegmentIntersector(n2), this._noder.computeNodes(t2), n2.getInteriorIntersections();
        } }, { key: "computeVertexSnaps", value: function() {
          if (rt(arguments[0], Z)) for (var t2 = arguments[0], e4 = t2.iterator(); e4.hasNext(); ) {
            var n2 = e4.next();
            this.computeVertexSnaps(n2);
          }
          else if (arguments[0] instanceof In) for (var i2 = arguments[0], r2 = i2.getCoordinates(), s2 = 0; s2 < r2.length; s2++) {
            var a2 = new li(r2[s2], this._scaleFactor, this._li), o2 = this._pointSnapper.snap(a2, i2, s2);
            o2 && i2.addIntersection(r2[s2], s2);
          }
        } }, { key: "computeNodes", value: function(t2) {
          this._nodedSegStrings = t2, this._noder = new Rn(), this._pointSnapper = new ci(this._noder.getIndex()), this.snapRound(t2, this._li);
        } }, { key: "computeIntersectionSnaps", value: function(t2) {
          for (var e4 = t2.iterator(); e4.hasNext(); ) {
            var n2 = e4.next(), i2 = new li(n2, this._scaleFactor, this._li);
            this._pointSnapper.snap(i2);
          }
        } }, { key: "interfaces_", get: function() {
          return [Ln];
        } }], [{ key: "constructor_", value: function() {
          this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
          var t2 = arguments[0];
          this._pm = t2, this._li = new Oe(), this._li.setPrecisionModel(t2), this._scaleFactor = t2.getScale();
        } }]), e3;
      }(), yi = function() {
        function e3() {
          t(this, e3), e3.constructor_.apply(this, arguments);
        }
        return n(e3, [{ key: "bufferFixedPrecision", value: function(t2) {
          var e4 = new oi(new gi(new ie(1)), t2.getScale()), n2 = new ai(this._bufParams);
          n2.setWorkingPrecisionModel(t2), n2.setNoder(e4), this._resultGeometry = n2.buffer(this._argGeom, this._distance);
        } }, { key: "bufferReducedPrecision", value: function() {
          if (0 === arguments.length) {
            for (var t2 = e3.MAX_PRECISION_DIGITS; t2 >= 0; t2--) {
              try {
                this.bufferReducedPrecision(t2);
              } catch (t3) {
                if (!(t3 instanceof vt)) throw t3;
                this._saveException = t3;
              }
              if (null !== this._resultGeometry) return null;
            }
            throw this._saveException;
          }
          if (1 === arguments.length) {
            var n2 = arguments[0], i2 = e3.precisionScaleFactor(this._argGeom, this._distance, n2), r2 = new ie(i2);
            this.bufferFixedPrecision(r2);
          }
        } }, { key: "computeGeometry", value: function() {
          if (this.bufferOriginalPrecision(), null !== this._resultGeometry) return null;
          var t2 = this._argGeom.getFactory().getPrecisionModel();
          t2.getType() === ie.FIXED ? this.bufferFixedPrecision(t2) : this.bufferReducedPrecision();
        } }, { key: "setQuadrantSegments", value: function(t2) {
          this._bufParams.setQuadrantSegments(t2);
        } }, { key: "bufferOriginalPrecision", value: function() {
          try {
            var t2 = new ai(this._bufParams);
            this._resultGeometry = t2.buffer(this._argGeom, this._distance);
          } catch (t3) {
            if (!(t3 instanceof D2)) throw t3;
            this._saveException = t3;
          }
        } }, { key: "getResultGeometry", value: function(t2) {
          return this._distance = t2, this.computeGeometry(), this._resultGeometry;
        } }, { key: "setEndCapStyle", value: function(t2) {
          this._bufParams.setEndCapStyle(t2);
        } }], [{ key: "constructor_", value: function() {
          if (this._argGeom = null, this._distance = null, this._bufParams = new _(), this._resultGeometry = null, this._saveException = null, 1 === arguments.length) {
            var t2 = arguments[0];
            this._argGeom = t2;
          } else if (2 === arguments.length) {
            var e4 = arguments[0], n2 = arguments[1];
            this._argGeom = e4, this._bufParams = n2;
          }
        } }, { key: "bufferOp", value: function() {
          if (2 === arguments.length) {
            var t2 = arguments[0], n2 = arguments[1], i2 = new e3(t2), r2 = i2.getResultGeometry(n2);
            return r2;
          }
          if (3 === arguments.length) {
            if (Number.isInteger(arguments[2]) && arguments[0] instanceof V && "number" == typeof arguments[1]) {
              var s2 = arguments[0], a2 = arguments[1], o2 = arguments[2], u5 = new e3(s2);
              u5.setQuadrantSegments(o2);
              var l2 = u5.getResultGeometry(a2);
              return l2;
            }
            if (arguments[2] instanceof _ && arguments[0] instanceof V && "number" == typeof arguments[1]) {
              var h2 = arguments[0], c2 = arguments[1], f2 = arguments[2], v3 = new e3(h2, f2), g2 = v3.getResultGeometry(c2);
              return g2;
            }
          } else if (4 === arguments.length) {
            var y3 = arguments[0], d2 = arguments[1], p2 = arguments[2], m2 = arguments[3], k2 = new e3(y3);
            k2.setQuadrantSegments(p2), k2.setEndCapStyle(m2);
            var x3 = k2.getResultGeometry(d2);
            return x3;
          }
        } }, { key: "precisionScaleFactor", value: function(t2, e4, n2) {
          var i2 = t2.getEnvelopeInternal(), r2 = kt.max(Math.abs(i2.getMaxX()), Math.abs(i2.getMaxY()), Math.abs(i2.getMinX()), Math.abs(i2.getMinY())) + 2 * (e4 > 0 ? e4 : 0), s2 = n2 - Math.trunc(Math.log(r2) / Math.log(10) + 1);
          return Math.pow(10, s2);
        } }]), e3;
      }();
      yi.CAP_ROUND = _.CAP_ROUND, yi.CAP_BUTT = _.CAP_FLAT, yi.CAP_FLAT = _.CAP_FLAT, yi.CAP_SQUARE = _.CAP_SQUARE, yi.MAX_PRECISION_DIGITS = 12;
      var di = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], _i = function() {
        function e3(n2) {
          t(this, e3), this.geometryFactory = n2 || new ae();
        }
        return n(e3, [{ key: "read", value: function(t2) {
          var e4, n2 = (e4 = "string" == typeof t2 ? JSON.parse(t2) : t2).type;
          if (!pi2[n2]) throw new Error("Unknown GeoJSON type: " + e4.type);
          return -1 !== di.indexOf(n2) ? pi2[n2].call(this, e4.coordinates) : "GeometryCollection" === n2 ? pi2[n2].call(this, e4.geometries) : pi2[n2].call(this, e4);
        } }, { key: "write", value: function(t2) {
          var e4 = t2.getGeometryType();
          if (!mi[e4]) throw new Error("Geometry is not supported");
          return mi[e4].call(this, t2);
        } }]), e3;
      }(), pi2 = { Feature: function(t2) {
        var e3 = {};
        for (var n2 in t2) e3[n2] = t2[n2];
        if (t2.geometry) {
          var i2 = t2.geometry.type;
          if (!pi2[i2]) throw new Error("Unknown GeoJSON type: " + t2.type);
          e3.geometry = this.read(t2.geometry);
        }
        return t2.bbox && (e3.bbox = pi2.bbox.call(this, t2.bbox)), e3;
      }, FeatureCollection: function(t2) {
        var e3 = {};
        if (t2.features) {
          e3.features = [];
          for (var n2 = 0; n2 < t2.features.length; ++n2) e3.features.push(this.read(t2.features[n2]));
        }
        return t2.bbox && (e3.bbox = this.parse.bbox.call(this, t2.bbox)), e3;
      }, coordinates: function(t2) {
        for (var e3 = [], n2 = 0; n2 < t2.length; ++n2) {
          var i2 = t2[n2];
          e3.push(o(X, v2(i2)));
        }
        return e3;
      }, bbox: function(t2) {
        return this.geometryFactory.createLinearRing([new X(t2[0], t2[1]), new X(t2[2], t2[1]), new X(t2[2], t2[3]), new X(t2[0], t2[3]), new X(t2[0], t2[1])]);
      }, Point: function(t2) {
        var e3 = o(X, v2(t2));
        return this.geometryFactory.createPoint(e3);
      }, MultiPoint: function(t2) {
        for (var e3 = [], n2 = 0; n2 < t2.length; ++n2) e3.push(pi2.Point.call(this, t2[n2]));
        return this.geometryFactory.createMultiPoint(e3);
      }, LineString: function(t2) {
        var e3 = pi2.coordinates.call(this, t2);
        return this.geometryFactory.createLineString(e3);
      }, MultiLineString: function(t2) {
        for (var e3 = [], n2 = 0; n2 < t2.length; ++n2) e3.push(pi2.LineString.call(this, t2[n2]));
        return this.geometryFactory.createMultiLineString(e3);
      }, Polygon: function(t2) {
        for (var e3 = pi2.coordinates.call(this, t2[0]), n2 = this.geometryFactory.createLinearRing(e3), i2 = [], r2 = 1; r2 < t2.length; ++r2) {
          var s2 = t2[r2], a2 = pi2.coordinates.call(this, s2), o2 = this.geometryFactory.createLinearRing(a2);
          i2.push(o2);
        }
        return this.geometryFactory.createPolygon(n2, i2);
      }, MultiPolygon: function(t2) {
        for (var e3 = [], n2 = 0; n2 < t2.length; ++n2) {
          var i2 = t2[n2];
          e3.push(pi2.Polygon.call(this, i2));
        }
        return this.geometryFactory.createMultiPolygon(e3);
      }, GeometryCollection: function(t2) {
        for (var e3 = [], n2 = 0; n2 < t2.length; ++n2) {
          var i2 = t2[n2];
          e3.push(this.read(i2));
        }
        return this.geometryFactory.createGeometryCollection(e3);
      } }, mi = { coordinate: function(t2) {
        var e3 = [t2.x, t2.y];
        return t2.z && e3.push(t2.z), t2.m && e3.push(t2.m), e3;
      }, Point: function(t2) {
        return { type: "Point", coordinates: mi.coordinate.call(this, t2.getCoordinate()) };
      }, MultiPoint: function(t2) {
        for (var e3 = [], n2 = 0; n2 < t2._geometries.length; ++n2) {
          var i2 = t2._geometries[n2], r2 = mi.Point.call(this, i2);
          e3.push(r2.coordinates);
        }
        return { type: "MultiPoint", coordinates: e3 };
      }, LineString: function(t2) {
        for (var e3 = [], n2 = t2.getCoordinates(), i2 = 0; i2 < n2.length; ++i2) {
          var r2 = n2[i2];
          e3.push(mi.coordinate.call(this, r2));
        }
        return { type: "LineString", coordinates: e3 };
      }, MultiLineString: function(t2) {
        for (var e3 = [], n2 = 0; n2 < t2._geometries.length; ++n2) {
          var i2 = t2._geometries[n2], r2 = mi.LineString.call(this, i2);
          e3.push(r2.coordinates);
        }
        return { type: "MultiLineString", coordinates: e3 };
      }, Polygon: function(t2) {
        var e3 = [], n2 = mi.LineString.call(this, t2._shell);
        e3.push(n2.coordinates);
        for (var i2 = 0; i2 < t2._holes.length; ++i2) {
          var r2 = t2._holes[i2], s2 = mi.LineString.call(this, r2);
          e3.push(s2.coordinates);
        }
        return { type: "Polygon", coordinates: e3 };
      }, MultiPolygon: function(t2) {
        for (var e3 = [], n2 = 0; n2 < t2._geometries.length; ++n2) {
          var i2 = t2._geometries[n2], r2 = mi.Polygon.call(this, i2);
          e3.push(r2.coordinates);
        }
        return { type: "MultiPolygon", coordinates: e3 };
      }, GeometryCollection: function(t2) {
        for (var e3 = [], n2 = 0; n2 < t2._geometries.length; ++n2) {
          var i2 = t2._geometries[n2], r2 = i2.getGeometryType();
          e3.push(mi[r2].call(this, i2));
        }
        return { type: "GeometryCollection", geometries: e3 };
      } };
      return { BufferOp: yi, GeoJSONReader: function() {
        function e3(n2) {
          t(this, e3), this.parser = new _i(n2 || new ae());
        }
        return n(e3, [{ key: "read", value: function(t2) {
          return this.parser.read(t2);
        } }]), e3;
      }(), GeoJSONWriter: function() {
        function e3() {
          t(this, e3), this.parser = new _i(this.geometryFactory);
        }
        return n(e3, [{ key: "write", value: function(t2) {
          return this.parser.write(t2);
        } }]), e3;
      }() };
    });
  }
});

// ../node_modules/.pnpm/rbush@3.0.1/node_modules/rbush/rbush.min.js
var require_rbush_min = __commonJS({
  "../node_modules/.pnpm/rbush@3.0.1/node_modules/rbush/rbush.min.js"(exports, module) {
    !function(t, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = t || self).RBush = i();
    }(exports, function() {
      "use strict";
      function t(t2, r2, e3, a2, h2) {
        !function t3(n2, r3, e4, a3, h3) {
          for (; a3 > e4; ) {
            if (a3 - e4 > 600) {
              var o2 = a3 - e4 + 1, s2 = r3 - e4 + 1, l2 = Math.log(o2), f2 = 0.5 * Math.exp(2 * l2 / 3), u5 = 0.5 * Math.sqrt(l2 * f2 * (o2 - f2) / o2) * (s2 - o2 / 2 < 0 ? -1 : 1), m2 = Math.max(e4, Math.floor(r3 - s2 * f2 / o2 + u5)), c2 = Math.min(a3, Math.floor(r3 + (o2 - s2) * f2 / o2 + u5));
              t3(n2, r3, m2, c2, h3);
            }
            var p2 = n2[r3], d2 = e4, x2 = a3;
            for (i(n2, e4, r3), h3(n2[a3], p2) > 0 && i(n2, e4, a3); d2 < x2; ) {
              for (i(n2, d2, x2), d2++, x2--; h3(n2[d2], p2) < 0; ) d2++;
              for (; h3(n2[x2], p2) > 0; ) x2--;
            }
            0 === h3(n2[e4], p2) ? i(n2, e4, x2) : i(n2, ++x2, a3), x2 <= r3 && (e4 = x2 + 1), r3 <= x2 && (a3 = x2 - 1);
          }
        }(t2, r2, e3 || 0, a2 || t2.length - 1, h2 || n);
      }
      function i(t2, i2, n2) {
        var r2 = t2[i2];
        t2[i2] = t2[n2], t2[n2] = r2;
      }
      function n(t2, i2) {
        return t2 < i2 ? -1 : t2 > i2 ? 1 : 0;
      }
      var r = function(t2) {
        void 0 === t2 && (t2 = 9), this._maxEntries = Math.max(4, t2), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), this.clear();
      };
      function e(t2, i2, n2) {
        if (!n2) return i2.indexOf(t2);
        for (var r2 = 0; r2 < i2.length; r2++) if (n2(t2, i2[r2])) return r2;
        return -1;
      }
      function a(t2, i2) {
        h(t2, 0, t2.children.length, i2, t2);
      }
      function h(t2, i2, n2, r2, e3) {
        e3 || (e3 = p(null)), e3.minX = 1 / 0, e3.minY = 1 / 0, e3.maxX = -1 / 0, e3.maxY = -1 / 0;
        for (var a2 = i2; a2 < n2; a2++) {
          var h2 = t2.children[a2];
          o(e3, t2.leaf ? r2(h2) : h2);
        }
        return e3;
      }
      function o(t2, i2) {
        return t2.minX = Math.min(t2.minX, i2.minX), t2.minY = Math.min(t2.minY, i2.minY), t2.maxX = Math.max(t2.maxX, i2.maxX), t2.maxY = Math.max(t2.maxY, i2.maxY), t2;
      }
      function s(t2, i2) {
        return t2.minX - i2.minX;
      }
      function l(t2, i2) {
        return t2.minY - i2.minY;
      }
      function f(t2) {
        return (t2.maxX - t2.minX) * (t2.maxY - t2.minY);
      }
      function u4(t2) {
        return t2.maxX - t2.minX + (t2.maxY - t2.minY);
      }
      function m(t2, i2) {
        return t2.minX <= i2.minX && t2.minY <= i2.minY && i2.maxX <= t2.maxX && i2.maxY <= t2.maxY;
      }
      function c(t2, i2) {
        return i2.minX <= t2.maxX && i2.minY <= t2.maxY && i2.maxX >= t2.minX && i2.maxY >= t2.minY;
      }
      function p(t2) {
        return { children: t2, height: 1, leaf: true, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
      }
      function d(i2, n2, r2, e3, a2) {
        for (var h2 = [n2, r2]; h2.length; ) if (!((r2 = h2.pop()) - (n2 = h2.pop()) <= e3)) {
          var o2 = n2 + Math.ceil((r2 - n2) / e3 / 2) * e3;
          t(i2, o2, n2, r2, a2), h2.push(n2, o2, o2, r2);
        }
      }
      return r.prototype.all = function() {
        return this._all(this.data, []);
      }, r.prototype.search = function(t2) {
        var i2 = this.data, n2 = [];
        if (!c(t2, i2)) return n2;
        for (var r2 = this.toBBox, e3 = []; i2; ) {
          for (var a2 = 0; a2 < i2.children.length; a2++) {
            var h2 = i2.children[a2], o2 = i2.leaf ? r2(h2) : h2;
            c(t2, o2) && (i2.leaf ? n2.push(h2) : m(t2, o2) ? this._all(h2, n2) : e3.push(h2));
          }
          i2 = e3.pop();
        }
        return n2;
      }, r.prototype.collides = function(t2) {
        var i2 = this.data;
        if (!c(t2, i2)) return false;
        for (var n2 = []; i2; ) {
          for (var r2 = 0; r2 < i2.children.length; r2++) {
            var e3 = i2.children[r2], a2 = i2.leaf ? this.toBBox(e3) : e3;
            if (c(t2, a2)) {
              if (i2.leaf || m(t2, a2)) return true;
              n2.push(e3);
            }
          }
          i2 = n2.pop();
        }
        return false;
      }, r.prototype.load = function(t2) {
        if (!t2 || !t2.length) return this;
        if (t2.length < this._minEntries) {
          for (var i2 = 0; i2 < t2.length; i2++) this.insert(t2[i2]);
          return this;
        }
        var n2 = this._build(t2.slice(), 0, t2.length - 1, 0);
        if (this.data.children.length) if (this.data.height === n2.height) this._splitRoot(this.data, n2);
        else {
          if (this.data.height < n2.height) {
            var r2 = this.data;
            this.data = n2, n2 = r2;
          }
          this._insert(n2, this.data.height - n2.height - 1, true);
        }
        else this.data = n2;
        return this;
      }, r.prototype.insert = function(t2) {
        return t2 && this._insert(t2, this.data.height - 1), this;
      }, r.prototype.clear = function() {
        return this.data = p([]), this;
      }, r.prototype.remove = function(t2, i2) {
        if (!t2) return this;
        for (var n2, r2, a2, h2 = this.data, o2 = this.toBBox(t2), s2 = [], l2 = []; h2 || s2.length; ) {
          if (h2 || (h2 = s2.pop(), r2 = s2[s2.length - 1], n2 = l2.pop(), a2 = true), h2.leaf) {
            var f2 = e(t2, h2.children, i2);
            if (-1 !== f2) return h2.children.splice(f2, 1), s2.push(h2), this._condense(s2), this;
          }
          a2 || h2.leaf || !m(h2, o2) ? r2 ? (n2++, h2 = r2.children[n2], a2 = false) : h2 = null : (s2.push(h2), l2.push(n2), n2 = 0, r2 = h2, h2 = h2.children[0]);
        }
        return this;
      }, r.prototype.toBBox = function(t2) {
        return t2;
      }, r.prototype.compareMinX = function(t2, i2) {
        return t2.minX - i2.minX;
      }, r.prototype.compareMinY = function(t2, i2) {
        return t2.minY - i2.minY;
      }, r.prototype.toJSON = function() {
        return this.data;
      }, r.prototype.fromJSON = function(t2) {
        return this.data = t2, this;
      }, r.prototype._all = function(t2, i2) {
        for (var n2 = []; t2; ) t2.leaf ? i2.push.apply(i2, t2.children) : n2.push.apply(n2, t2.children), t2 = n2.pop();
        return i2;
      }, r.prototype._build = function(t2, i2, n2, r2) {
        var e3, h2 = n2 - i2 + 1, o2 = this._maxEntries;
        if (h2 <= o2) return a(e3 = p(t2.slice(i2, n2 + 1)), this.toBBox), e3;
        r2 || (r2 = Math.ceil(Math.log(h2) / Math.log(o2)), o2 = Math.ceil(h2 / Math.pow(o2, r2 - 1))), (e3 = p([])).leaf = false, e3.height = r2;
        var s2 = Math.ceil(h2 / o2), l2 = s2 * Math.ceil(Math.sqrt(o2));
        d(t2, i2, n2, l2, this.compareMinX);
        for (var f2 = i2; f2 <= n2; f2 += l2) {
          var u5 = Math.min(f2 + l2 - 1, n2);
          d(t2, f2, u5, s2, this.compareMinY);
          for (var m2 = f2; m2 <= u5; m2 += s2) {
            var c2 = Math.min(m2 + s2 - 1, u5);
            e3.children.push(this._build(t2, m2, c2, r2 - 1));
          }
        }
        return a(e3, this.toBBox), e3;
      }, r.prototype._chooseSubtree = function(t2, i2, n2, r2) {
        for (; r2.push(i2), !i2.leaf && r2.length - 1 !== n2; ) {
          for (var e3 = 1 / 0, a2 = 1 / 0, h2 = void 0, o2 = 0; o2 < i2.children.length; o2++) {
            var s2 = i2.children[o2], l2 = f(s2), u5 = (m2 = t2, c2 = s2, (Math.max(c2.maxX, m2.maxX) - Math.min(c2.minX, m2.minX)) * (Math.max(c2.maxY, m2.maxY) - Math.min(c2.minY, m2.minY)) - l2);
            u5 < a2 ? (a2 = u5, e3 = l2 < e3 ? l2 : e3, h2 = s2) : u5 === a2 && l2 < e3 && (e3 = l2, h2 = s2);
          }
          i2 = h2 || i2.children[0];
        }
        var m2, c2;
        return i2;
      }, r.prototype._insert = function(t2, i2, n2) {
        var r2 = n2 ? t2 : this.toBBox(t2), e3 = [], a2 = this._chooseSubtree(r2, this.data, i2, e3);
        for (a2.children.push(t2), o(a2, r2); i2 >= 0 && e3[i2].children.length > this._maxEntries; ) this._split(e3, i2), i2--;
        this._adjustParentBBoxes(r2, e3, i2);
      }, r.prototype._split = function(t2, i2) {
        var n2 = t2[i2], r2 = n2.children.length, e3 = this._minEntries;
        this._chooseSplitAxis(n2, e3, r2);
        var h2 = this._chooseSplitIndex(n2, e3, r2), o2 = p(n2.children.splice(h2, n2.children.length - h2));
        o2.height = n2.height, o2.leaf = n2.leaf, a(n2, this.toBBox), a(o2, this.toBBox), i2 ? t2[i2 - 1].children.push(o2) : this._splitRoot(n2, o2);
      }, r.prototype._splitRoot = function(t2, i2) {
        this.data = p([t2, i2]), this.data.height = t2.height + 1, this.data.leaf = false, a(this.data, this.toBBox);
      }, r.prototype._chooseSplitIndex = function(t2, i2, n2) {
        for (var r2, e3, a2, o2, s2, l2, u5, m2 = 1 / 0, c2 = 1 / 0, p2 = i2; p2 <= n2 - i2; p2++) {
          var d2 = h(t2, 0, p2, this.toBBox), x2 = h(t2, p2, n2, this.toBBox), v2 = (e3 = d2, a2 = x2, o2 = void 0, s2 = void 0, l2 = void 0, u5 = void 0, o2 = Math.max(e3.minX, a2.minX), s2 = Math.max(e3.minY, a2.minY), l2 = Math.min(e3.maxX, a2.maxX), u5 = Math.min(e3.maxY, a2.maxY), Math.max(0, l2 - o2) * Math.max(0, u5 - s2)), M = f(d2) + f(x2);
          v2 < m2 ? (m2 = v2, r2 = p2, c2 = M < c2 ? M : c2) : v2 === m2 && M < c2 && (c2 = M, r2 = p2);
        }
        return r2 || n2 - i2;
      }, r.prototype._chooseSplitAxis = function(t2, i2, n2) {
        var r2 = t2.leaf ? this.compareMinX : s, e3 = t2.leaf ? this.compareMinY : l;
        this._allDistMargin(t2, i2, n2, r2) < this._allDistMargin(t2, i2, n2, e3) && t2.children.sort(r2);
      }, r.prototype._allDistMargin = function(t2, i2, n2, r2) {
        t2.children.sort(r2);
        for (var e3 = this.toBBox, a2 = h(t2, 0, i2, e3), s2 = h(t2, n2 - i2, n2, e3), l2 = u4(a2) + u4(s2), f2 = i2; f2 < n2 - i2; f2++) {
          var m2 = t2.children[f2];
          o(a2, t2.leaf ? e3(m2) : m2), l2 += u4(a2);
        }
        for (var c2 = n2 - i2 - 1; c2 >= i2; c2--) {
          var p2 = t2.children[c2];
          o(s2, t2.leaf ? e3(p2) : p2), l2 += u4(s2);
        }
        return l2;
      }, r.prototype._adjustParentBBoxes = function(t2, i2, n2) {
        for (var r2 = n2; r2 >= 0; r2--) o(i2[r2], t2);
      }, r.prototype._condense = function(t2) {
        for (var i2 = t2.length - 1, n2 = void 0; i2 >= 0; i2--) 0 === t2[i2].children.length ? i2 > 0 ? (n2 = t2[i2 - 1].children).splice(n2.indexOf(t2[i2]), 1) : this.clear() : a(t2[i2], this.toBBox);
      }, r;
    });
  }
});

// ../node_modules/.pnpm/tinyqueue@2.0.3/node_modules/tinyqueue/index.js
var tinyqueue_exports = {};
__export(tinyqueue_exports, {
  default: () => TinyQueue
});
function defaultCompare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
var TinyQueue;
var init_tinyqueue = __esm({
  "../node_modules/.pnpm/tinyqueue@2.0.3/node_modules/tinyqueue/index.js"() {
    TinyQueue = class {
      constructor(data = [], compare = defaultCompare) {
        this.data = data;
        this.length = this.data.length;
        this.compare = compare;
        if (this.length > 0) {
          for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
        }
      }
      push(item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
      }
      pop() {
        if (this.length === 0) return void 0;
        const top = this.data[0];
        const bottom = this.data.pop();
        this.length--;
        if (this.length > 0) {
          this.data[0] = bottom;
          this._down(0);
        }
        return top;
      }
      peek() {
        return this.data[0];
      }
      _up(pos) {
        const { data, compare } = this;
        const item = data[pos];
        while (pos > 0) {
          const parent = pos - 1 >> 1;
          const current = data[parent];
          if (compare(item, current) >= 0) break;
          data[pos] = current;
          pos = parent;
        }
        data[pos] = item;
      }
      _down(pos) {
        const { data, compare } = this;
        const halfLength = this.length >> 1;
        const item = data[pos];
        while (pos < halfLength) {
          let left = (pos << 1) + 1;
          let best = data[left];
          const right = left + 1;
          if (right < this.length && compare(data[right], best) < 0) {
            left = right;
            best = data[right];
          }
          if (compare(best, item) >= 0) break;
          data[pos] = best;
          pos = left;
        }
        data[pos] = item;
      }
    };
  }
});

// ../node_modules/.pnpm/point-in-polygon@1.1.0/node_modules/point-in-polygon/flat.js
var require_flat = __commonJS({
  "../node_modules/.pnpm/point-in-polygon@1.1.0/node_modules/point-in-polygon/flat.js"(exports, module) {
    module.exports = function pointInPolygonFlat(point2, vs, start, end) {
      var x2 = point2[0], y2 = point2[1];
      var inside = false;
      if (start === void 0) start = 0;
      if (end === void 0) end = vs.length;
      var len = (end - start) / 2;
      for (var i = 0, j = len - 1; i < len; j = i++) {
        var xi = vs[start + i * 2 + 0], yi = vs[start + i * 2 + 1];
        var xj = vs[start + j * 2 + 0], yj = vs[start + j * 2 + 1];
        var intersect2 = yi > y2 !== yj > y2 && x2 < (xj - xi) * (y2 - yi) / (yj - yi) + xi;
        if (intersect2) inside = !inside;
      }
      return inside;
    };
  }
});

// ../node_modules/.pnpm/point-in-polygon@1.1.0/node_modules/point-in-polygon/nested.js
var require_nested = __commonJS({
  "../node_modules/.pnpm/point-in-polygon@1.1.0/node_modules/point-in-polygon/nested.js"(exports, module) {
    module.exports = function pointInPolygonNested(point2, vs, start, end) {
      var x2 = point2[0], y2 = point2[1];
      var inside = false;
      if (start === void 0) start = 0;
      if (end === void 0) end = vs.length;
      var len = end - start;
      for (var i = 0, j = len - 1; i < len; j = i++) {
        var xi = vs[i + start][0], yi = vs[i + start][1];
        var xj = vs[j + start][0], yj = vs[j + start][1];
        var intersect2 = yi > y2 !== yj > y2 && x2 < (xj - xi) * (y2 - yi) / (yj - yi) + xi;
        if (intersect2) inside = !inside;
      }
      return inside;
    };
  }
});

// ../node_modules/.pnpm/point-in-polygon@1.1.0/node_modules/point-in-polygon/index.js
var require_point_in_polygon = __commonJS({
  "../node_modules/.pnpm/point-in-polygon@1.1.0/node_modules/point-in-polygon/index.js"(exports, module) {
    var pointInPolygonFlat = require_flat();
    var pointInPolygonNested = require_nested();
    module.exports = function pointInPolygon(point2, vs, start, end) {
      if (vs.length > 0 && Array.isArray(vs[0])) {
        return pointInPolygonNested(point2, vs, start, end);
      } else {
        return pointInPolygonFlat(point2, vs, start, end);
      }
    };
    module.exports.nested = pointInPolygonNested;
    module.exports.flat = pointInPolygonFlat;
  }
});

// ../node_modules/.pnpm/robust-predicates@2.0.4/node_modules/robust-predicates/umd/orient2d.min.js
var require_orient2d_min = __commonJS({
  "../node_modules/.pnpm/robust-predicates@2.0.4/node_modules/robust-predicates/umd/orient2d.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).predicates = {});
    }(exports, function(t) {
      "use strict";
      const e = 134217729, n = 33306690738754706e-32;
      function r(t2, e3, n2, r2, o2) {
        let f2, i2, u5, c2, s2 = e3[0], a2 = r2[0], d2 = 0, l2 = 0;
        a2 > s2 == a2 > -s2 ? (f2 = s2, s2 = e3[++d2]) : (f2 = a2, a2 = r2[++l2]);
        let p = 0;
        if (d2 < t2 && l2 < n2) for (a2 > s2 == a2 > -s2 ? (u5 = f2 - ((i2 = s2 + f2) - s2), s2 = e3[++d2]) : (u5 = f2 - ((i2 = a2 + f2) - a2), a2 = r2[++l2]), f2 = i2, 0 !== u5 && (o2[p++] = u5); d2 < t2 && l2 < n2; ) a2 > s2 == a2 > -s2 ? (u5 = f2 - ((i2 = f2 + s2) - (c2 = i2 - f2)) + (s2 - c2), s2 = e3[++d2]) : (u5 = f2 - ((i2 = f2 + a2) - (c2 = i2 - f2)) + (a2 - c2), a2 = r2[++l2]), f2 = i2, 0 !== u5 && (o2[p++] = u5);
        for (; d2 < t2; ) u5 = f2 - ((i2 = f2 + s2) - (c2 = i2 - f2)) + (s2 - c2), s2 = e3[++d2], f2 = i2, 0 !== u5 && (o2[p++] = u5);
        for (; l2 < n2; ) u5 = f2 - ((i2 = f2 + a2) - (c2 = i2 - f2)) + (a2 - c2), a2 = r2[++l2], f2 = i2, 0 !== u5 && (o2[p++] = u5);
        return 0 === f2 && 0 !== p || (o2[p++] = f2), p;
      }
      function o(t2) {
        return new Float64Array(t2);
      }
      const f = 33306690738754716e-32, i = 22204460492503146e-32, u4 = 11093356479670487e-47, c = o(4), s = o(8), a = o(12), d = o(16), l = o(4);
      t.orient2d = function(t2, o2, p, b, y2, h) {
        const M = (o2 - h) * (p - y2), x2 = (t2 - y2) * (b - h), j = M - x2;
        if (0 === M || 0 === x2 || M > 0 != x2 > 0) return j;
        const m = Math.abs(M + x2);
        return Math.abs(j) >= f * m ? j : -function(t3, o3, f2, p2, b2, y3, h2) {
          let M2, x3, j2, m2, _, v2, w, A, F, O, P, g, k, q, z, B2, C, D2;
          const E = t3 - b2, G = f2 - b2, H = o3 - y3, I = p2 - y3;
          _ = (z = (A = E - (w = (v2 = e * E) - (v2 - E))) * (O = I - (F = (v2 = e * I) - (v2 - I))) - ((q = E * I) - w * F - A * F - w * O)) - (P = z - (C = (A = H - (w = (v2 = e * H) - (v2 - H))) * (O = G - (F = (v2 = e * G) - (v2 - G))) - ((B2 = H * G) - w * F - A * F - w * O))), c[0] = z - (P + _) + (_ - C), _ = (k = q - ((g = q + P) - (_ = g - q)) + (P - _)) - (P = k - B2), c[1] = k - (P + _) + (_ - B2), _ = (D2 = g + P) - g, c[2] = g - (D2 - _) + (P - _), c[3] = D2;
          let J = function(t4, e3) {
            let n2 = e3[0];
            for (let r2 = 1; r2 < t4; r2++) n2 += e3[r2];
            return n2;
          }(4, c), K = i * h2;
          if (J >= K || -J >= K) return J;
          if (M2 = t3 - (E + (_ = t3 - E)) + (_ - b2), j2 = f2 - (G + (_ = f2 - G)) + (_ - b2), x3 = o3 - (H + (_ = o3 - H)) + (_ - y3), m2 = p2 - (I + (_ = p2 - I)) + (_ - y3), 0 === M2 && 0 === x3 && 0 === j2 && 0 === m2) return J;
          if (K = u4 * h2 + n * Math.abs(J), (J += E * m2 + I * M2 - (H * j2 + G * x3)) >= K || -J >= K) return J;
          _ = (z = (A = M2 - (w = (v2 = e * M2) - (v2 - M2))) * (O = I - (F = (v2 = e * I) - (v2 - I))) - ((q = M2 * I) - w * F - A * F - w * O)) - (P = z - (C = (A = x3 - (w = (v2 = e * x3) - (v2 - x3))) * (O = G - (F = (v2 = e * G) - (v2 - G))) - ((B2 = x3 * G) - w * F - A * F - w * O))), l[0] = z - (P + _) + (_ - C), _ = (k = q - ((g = q + P) - (_ = g - q)) + (P - _)) - (P = k - B2), l[1] = k - (P + _) + (_ - B2), _ = (D2 = g + P) - g, l[2] = g - (D2 - _) + (P - _), l[3] = D2;
          const L = r(4, c, 4, l, s);
          _ = (z = (A = E - (w = (v2 = e * E) - (v2 - E))) * (O = m2 - (F = (v2 = e * m2) - (v2 - m2))) - ((q = E * m2) - w * F - A * F - w * O)) - (P = z - (C = (A = H - (w = (v2 = e * H) - (v2 - H))) * (O = j2 - (F = (v2 = e * j2) - (v2 - j2))) - ((B2 = H * j2) - w * F - A * F - w * O))), l[0] = z - (P + _) + (_ - C), _ = (k = q - ((g = q + P) - (_ = g - q)) + (P - _)) - (P = k - B2), l[1] = k - (P + _) + (_ - B2), _ = (D2 = g + P) - g, l[2] = g - (D2 - _) + (P - _), l[3] = D2;
          const N = r(L, s, 4, l, a);
          _ = (z = (A = M2 - (w = (v2 = e * M2) - (v2 - M2))) * (O = m2 - (F = (v2 = e * m2) - (v2 - m2))) - ((q = M2 * m2) - w * F - A * F - w * O)) - (P = z - (C = (A = x3 - (w = (v2 = e * x3) - (v2 - x3))) * (O = j2 - (F = (v2 = e * j2) - (v2 - j2))) - ((B2 = x3 * j2) - w * F - A * F - w * O))), l[0] = z - (P + _) + (_ - C), _ = (k = q - ((g = q + P) - (_ = g - q)) + (P - _)) - (P = k - B2), l[1] = k - (P + _) + (_ - B2), _ = (D2 = g + P) - g, l[2] = g - (D2 - _) + (P - _), l[3] = D2;
          const Q = r(N, a, 4, l, d);
          return d[Q - 1];
        }(t2, o2, p, b, y2, h, m);
      }, t.orient2dfast = function(t2, e3, n2, r2, o2, f2) {
        return (e3 - f2) * (n2 - o2) - (t2 - o2) * (r2 - f2);
      }, Object.defineProperty(t, "__esModule", { value: true });
    });
  }
});

// ../node_modules/.pnpm/concaveman@1.2.1/node_modules/concaveman/index.js
var require_concaveman = __commonJS({
  "../node_modules/.pnpm/concaveman@1.2.1/node_modules/concaveman/index.js"(exports, module) {
    "use strict";
    var RBush2 = require_rbush_min();
    var Queue = (init_tinyqueue(), __toCommonJS(tinyqueue_exports));
    var pointInPolygon = require_point_in_polygon();
    var orient = require_orient2d_min().orient2d;
    if (Queue.default) {
      Queue = Queue.default;
    }
    module.exports = concaveman2;
    module.exports.default = concaveman2;
    function concaveman2(points, concavity, lengthThreshold) {
      concavity = Math.max(0, concavity === void 0 ? 2 : concavity);
      lengthThreshold = lengthThreshold || 0;
      var hull = fastConvexHull(points);
      var tree = new RBush2(16);
      tree.toBBox = function(a2) {
        return {
          minX: a2[0],
          minY: a2[1],
          maxX: a2[0],
          maxY: a2[1]
        };
      };
      tree.compareMinX = function(a2, b2) {
        return a2[0] - b2[0];
      };
      tree.compareMinY = function(a2, b2) {
        return a2[1] - b2[1];
      };
      tree.load(points);
      var queue = [];
      for (var i = 0, last; i < hull.length; i++) {
        var p = hull[i];
        tree.remove(p);
        last = insertNode(p, last);
        queue.push(last);
      }
      var segTree = new RBush2(16);
      for (i = 0; i < queue.length; i++) segTree.insert(updateBBox(queue[i]));
      var sqConcavity = concavity * concavity;
      var sqLenThreshold = lengthThreshold * lengthThreshold;
      while (queue.length) {
        var node = queue.shift();
        var a = node.p;
        var b = node.next.p;
        var sqLen = getSqDist(a, b);
        if (sqLen < sqLenThreshold) continue;
        var maxSqLen = sqLen / sqConcavity;
        p = findCandidate(tree, node.prev.p, a, b, node.next.next.p, maxSqLen, segTree);
        if (p && Math.min(getSqDist(p, a), getSqDist(p, b)) <= maxSqLen) {
          queue.push(node);
          queue.push(insertNode(p, node));
          tree.remove(p);
          segTree.remove(node);
          segTree.insert(updateBBox(node));
          segTree.insert(updateBBox(node.next));
        }
      }
      node = last;
      var concave2 = [];
      do {
        concave2.push(node.p);
        node = node.next;
      } while (node !== last);
      concave2.push(node.p);
      return concave2;
    }
    function findCandidate(tree, a, b, c, d, maxDist, segTree) {
      var queue = new Queue([], compareDist);
      var node = tree.data;
      while (node) {
        for (var i = 0; i < node.children.length; i++) {
          var child = node.children[i];
          var dist = node.leaf ? sqSegDist(child, b, c) : sqSegBoxDist(b, c, child);
          if (dist > maxDist) continue;
          queue.push({
            node: child,
            dist
          });
        }
        while (queue.length && !queue.peek().node.children) {
          var item = queue.pop();
          var p = item.node;
          var d0 = sqSegDist(p, a, b);
          var d1 = sqSegDist(p, c, d);
          if (item.dist < d0 && item.dist < d1 && noIntersections(b, p, segTree) && noIntersections(c, p, segTree)) return p;
        }
        node = queue.pop();
        if (node) node = node.node;
      }
      return null;
    }
    function compareDist(a, b) {
      return a.dist - b.dist;
    }
    function sqSegBoxDist(a, b, bbox2) {
      if (inside(a, bbox2) || inside(b, bbox2)) return 0;
      var d1 = sqSegSegDist(a[0], a[1], b[0], b[1], bbox2.minX, bbox2.minY, bbox2.maxX, bbox2.minY);
      if (d1 === 0) return 0;
      var d2 = sqSegSegDist(a[0], a[1], b[0], b[1], bbox2.minX, bbox2.minY, bbox2.minX, bbox2.maxY);
      if (d2 === 0) return 0;
      var d3 = sqSegSegDist(a[0], a[1], b[0], b[1], bbox2.maxX, bbox2.minY, bbox2.maxX, bbox2.maxY);
      if (d3 === 0) return 0;
      var d4 = sqSegSegDist(a[0], a[1], b[0], b[1], bbox2.minX, bbox2.maxY, bbox2.maxX, bbox2.maxY);
      if (d4 === 0) return 0;
      return Math.min(d1, d2, d3, d4);
    }
    function inside(a, bbox2) {
      return a[0] >= bbox2.minX && a[0] <= bbox2.maxX && a[1] >= bbox2.minY && a[1] <= bbox2.maxY;
    }
    function noIntersections(a, b, segTree) {
      var minX = Math.min(a[0], b[0]);
      var minY = Math.min(a[1], b[1]);
      var maxX = Math.max(a[0], b[0]);
      var maxY = Math.max(a[1], b[1]);
      var edges2 = segTree.search({ minX, minY, maxX, maxY });
      for (var i = 0; i < edges2.length; i++) {
        if (intersects(edges2[i].p, edges2[i].next.p, a, b)) return false;
      }
      return true;
    }
    function cross(p1, p2, p3) {
      return orient(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
    }
    function intersects(p1, q1, p2, q2) {
      return p1 !== q2 && q1 !== p2 && cross(p1, q1, p2) > 0 !== cross(p1, q1, q2) > 0 && cross(p2, q2, p1) > 0 !== cross(p2, q2, q1) > 0;
    }
    function updateBBox(node) {
      var p1 = node.p;
      var p2 = node.next.p;
      node.minX = Math.min(p1[0], p2[0]);
      node.minY = Math.min(p1[1], p2[1]);
      node.maxX = Math.max(p1[0], p2[0]);
      node.maxY = Math.max(p1[1], p2[1]);
      return node;
    }
    function fastConvexHull(points) {
      var left = points[0];
      var top = points[0];
      var right = points[0];
      var bottom = points[0];
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        if (p[0] < left[0]) left = p;
        if (p[0] > right[0]) right = p;
        if (p[1] < top[1]) top = p;
        if (p[1] > bottom[1]) bottom = p;
      }
      var cull = [left, top, right, bottom];
      var filtered = cull.slice();
      for (i = 0; i < points.length; i++) {
        if (!pointInPolygon(points[i], cull)) filtered.push(points[i]);
      }
      return convexHull(filtered);
    }
    function insertNode(p, prev) {
      var node = {
        p,
        prev: null,
        next: null,
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0
      };
      if (!prev) {
        node.prev = node;
        node.next = node;
      } else {
        node.next = prev.next;
        node.prev = prev;
        prev.next.prev = node;
        prev.next = node;
      }
      return node;
    }
    function getSqDist(p1, p2) {
      var dx = p1[0] - p2[0], dy = p1[1] - p2[1];
      return dx * dx + dy * dy;
    }
    function sqSegDist(p, p1, p2) {
      var x2 = p1[0], y2 = p1[1], dx = p2[0] - x2, dy = p2[1] - y2;
      if (dx !== 0 || dy !== 0) {
        var t = ((p[0] - x2) * dx + (p[1] - y2) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
          x2 = p2[0];
          y2 = p2[1];
        } else if (t > 0) {
          x2 += dx * t;
          y2 += dy * t;
        }
      }
      dx = p[0] - x2;
      dy = p[1] - y2;
      return dx * dx + dy * dy;
    }
    function sqSegSegDist(x02, y02, x12, y12, x2, y2, x3, y3) {
      var ux = x12 - x02;
      var uy = y12 - y02;
      var vx = x3 - x2;
      var vy = y3 - y2;
      var wx = x02 - x2;
      var wy = y02 - y2;
      var a = ux * ux + uy * uy;
      var b = ux * vx + uy * vy;
      var c = vx * vx + vy * vy;
      var d = ux * wx + uy * wy;
      var e = vx * wx + vy * wy;
      var D2 = a * c - b * b;
      var sc, sN, tc, tN;
      var sD = D2;
      var tD = D2;
      if (D2 === 0) {
        sN = 0;
        sD = 1;
        tN = e;
        tD = c;
      } else {
        sN = b * e - c * d;
        tN = a * e - b * d;
        if (sN < 0) {
          sN = 0;
          tN = e;
          tD = c;
        } else if (sN > sD) {
          sN = sD;
          tN = e + b;
          tD = c;
        }
      }
      if (tN < 0) {
        tN = 0;
        if (-d < 0) sN = 0;
        else if (-d > a) sN = sD;
        else {
          sN = -d;
          sD = a;
        }
      } else if (tN > tD) {
        tN = tD;
        if (-d + b < 0) sN = 0;
        else if (-d + b > a) sN = sD;
        else {
          sN = -d + b;
          sD = a;
        }
      }
      sc = sN === 0 ? 0 : sN / sD;
      tc = tN === 0 ? 0 : tN / tD;
      var cx = (1 - sc) * x02 + sc * x12;
      var cy = (1 - sc) * y02 + sc * y12;
      var cx2 = (1 - tc) * x2 + tc * x3;
      var cy2 = (1 - tc) * y2 + tc * y3;
      var dx = cx2 - cx;
      var dy = cy2 - cy;
      return dx * dx + dy * dy;
    }
    function compareByX(a, b) {
      return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    }
    function convexHull(points) {
      points.sort(compareByX);
      var lower = [];
      for (var i = 0; i < points.length; i++) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
          lower.pop();
        }
        lower.push(points[i]);
      }
      var upper = [];
      for (var ii = points.length - 1; ii >= 0; ii--) {
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], points[ii]) <= 0) {
          upper.pop();
        }
        upper.push(points[ii]);
      }
      upper.pop();
      lower.pop();
      return lower.concat(upper);
    }
  }
});

// ../node_modules/.pnpm/skmeans@0.9.7/node_modules/skmeans/dist/node/distance.js
var require_distance = __commonJS({
  "../node_modules/.pnpm/skmeans@0.9.7/node_modules/skmeans/dist/node/distance.js"(exports, module) {
    "use strict";
    module.exports = {
      /**
       * Euclidean distance
       */
      eudist: function eudist(v1, v2, sqrt2) {
        var len = v1.length;
        var sum3 = 0;
        for (var i = 0; i < len; i++) {
          var d = (v1[i] || 0) - (v2[i] || 0);
          sum3 += d * d;
        }
        return sqrt2 ? Math.sqrt(sum3) : sum3;
      },
      mandist: function mandist(v1, v2, sqrt2) {
        var len = v1.length;
        var sum3 = 0;
        for (var i = 0; i < len; i++) {
          sum3 += Math.abs((v1[i] || 0) - (v2[i] || 0));
        }
        return sqrt2 ? Math.sqrt(sum3) : sum3;
      },
      /**
       * Unidimensional distance
       */
      dist: function dist(v1, v2, sqrt2) {
        var d = Math.abs(v1 - v2);
        return sqrt2 ? d : d * d;
      }
    };
  }
});

// ../node_modules/.pnpm/skmeans@0.9.7/node_modules/skmeans/dist/node/kinit.js
var require_kinit = __commonJS({
  "../node_modules/.pnpm/skmeans@0.9.7/node_modules/skmeans/dist/node/kinit.js"(exports, module) {
    "use strict";
    var Distance = require_distance();
    var eudist = Distance.eudist;
    var dist = Distance.dist;
    module.exports = {
      kmrand: function kmrand(data, k) {
        var map2 = {}, ks = [], t = k << 2;
        var len = data.length;
        var multi = data[0].length > 0;
        while (ks.length < k && t-- > 0) {
          var d = data[Math.floor(Math.random() * len)];
          var key = multi ? d.join("_") : "" + d;
          if (!map2[key]) {
            map2[key] = true;
            ks.push(d);
          }
        }
        if (ks.length < k) throw new Error("Error initializating clusters");
        else return ks;
      },
      /**
       * K-means++ initial centroid selection
       */
      kmpp: function kmpp(data, k) {
        var distance2 = data[0].length ? eudist : dist;
        var ks = [], len = data.length;
        var multi = data[0].length > 0;
        var map2 = {};
        var c = data[Math.floor(Math.random() * len)];
        var key = multi ? c.join("_") : "" + c;
        ks.push(c);
        map2[key] = true;
        while (ks.length < k) {
          var dists = [], lk = ks.length;
          var dsum = 0, prs = [];
          for (var i = 0; i < len; i++) {
            var min = Infinity;
            for (var j = 0; j < lk; j++) {
              var _dist = distance2(data[i], ks[j]);
              if (_dist <= min) min = _dist;
            }
            dists[i] = min;
          }
          for (var _i = 0; _i < len; _i++) {
            dsum += dists[_i];
          }
          for (var _i2 = 0; _i2 < len; _i2++) {
            prs[_i2] = { i: _i2, v: data[_i2], pr: dists[_i2] / dsum, cs: 0 };
          }
          prs.sort(function(a, b) {
            return a.pr - b.pr;
          });
          prs[0].cs = prs[0].pr;
          for (var _i3 = 1; _i3 < len; _i3++) {
            prs[_i3].cs = prs[_i3 - 1].cs + prs[_i3].pr;
          }
          var rnd = Math.random();
          var idx = 0;
          while (idx < len - 1 && prs[idx++].cs < rnd) {
          }
          ks.push(prs[idx - 1].v);
        }
        return ks;
      }
    };
  }
});

// ../node_modules/.pnpm/skmeans@0.9.7/node_modules/skmeans/dist/node/main.js
var require_main = __commonJS({
  "../node_modules/.pnpm/skmeans@0.9.7/node_modules/skmeans/dist/node/main.js"(exports, module) {
    "use strict";
    var Distance = require_distance();
    var ClusterInit = require_kinit();
    var eudist = Distance.eudist;
    var mandist = Distance.mandist;
    var dist = Distance.dist;
    var kmrand = ClusterInit.kmrand;
    var kmpp = ClusterInit.kmpp;
    var MAX = 1e4;
    function init(len, val, v2) {
      v2 = v2 || [];
      for (var i = 0; i < len; i++) {
        v2[i] = val;
      }
      return v2;
    }
    function skmeans2(data, k, initial, maxit) {
      var ks = [], old = [], idxs = [], dist2 = [];
      var conv = false, it = maxit || MAX;
      var len = data.length, vlen = data[0].length, multi = vlen > 0;
      var count = [];
      if (!initial) {
        var _idxs = {};
        while (ks.length < k) {
          var idx = Math.floor(Math.random() * len);
          if (!_idxs[idx]) {
            _idxs[idx] = true;
            ks.push(data[idx]);
          }
        }
      } else if (initial == "kmrand") {
        ks = kmrand(data, k);
      } else if (initial == "kmpp") {
        ks = kmpp(data, k);
      } else {
        ks = initial;
      }
      do {
        init(k, 0, count);
        for (var i = 0; i < len; i++) {
          var min = Infinity, _idx = 0;
          for (var j = 0; j < k; j++) {
            var dist2 = multi ? eudist(data[i], ks[j]) : Math.abs(data[i] - ks[j]);
            if (dist2 <= min) {
              min = dist2;
              _idx = j;
            }
          }
          idxs[i] = _idx;
          count[_idx]++;
        }
        var sum3 = [], old = [], dif = 0;
        for (var _j = 0; _j < k; _j++) {
          sum3[_j] = multi ? init(vlen, 0, sum3[_j]) : 0;
          old[_j] = ks[_j];
        }
        if (multi) {
          for (var _j2 = 0; _j2 < k; _j2++) {
            ks[_j2] = [];
          }
          for (var _i = 0; _i < len; _i++) {
            var _idx2 = idxs[_i], vsum = sum3[_idx2], vect = data[_i];
            for (var h = 0; h < vlen; h++) {
              vsum[h] += vect[h];
            }
          }
          conv = true;
          for (var _j3 = 0; _j3 < k; _j3++) {
            var ksj = ks[_j3], sumj = sum3[_j3], oldj = old[_j3], cj = count[_j3];
            for (var _h = 0; _h < vlen; _h++) {
              ksj[_h] = sumj[_h] / cj || 0;
            }
            if (conv) {
              for (var _h2 = 0; _h2 < vlen; _h2++) {
                if (oldj[_h2] != ksj[_h2]) {
                  conv = false;
                  break;
                }
              }
            }
          }
        } else {
          for (var _i2 = 0; _i2 < len; _i2++) {
            var _idx3 = idxs[_i2];
            sum3[_idx3] += data[_i2];
          }
          for (var _j4 = 0; _j4 < k; _j4++) {
            ks[_j4] = sum3[_j4] / count[_j4] || 0;
          }
          conv = true;
          for (var _j5 = 0; _j5 < k; _j5++) {
            if (old[_j5] != ks[_j5]) {
              conv = false;
              break;
            }
          }
        }
        conv = conv || --it <= 0;
      } while (!conv);
      return {
        it: MAX - it,
        k,
        idxs,
        centroids: ks
      };
    }
    module.exports = skmeans2;
  }
});

// ../node_modules/.pnpm/earcut@2.2.4/node_modules/earcut/src/earcut.js
var require_earcut = __commonJS({
  "../node_modules/.pnpm/earcut@2.2.4/node_modules/earcut/src/earcut.js"(exports, module) {
    "use strict";
    module.exports = earcut2;
    module.exports.default = earcut2;
    function earcut2(data, holeIndices, dim) {
      dim = dim || 2;
      var hasHoles = holeIndices && holeIndices.length, outerLen = hasHoles ? holeIndices[0] * dim : data.length, outerNode = linkedList(data, 0, outerLen, dim, true), triangles = [];
      if (!outerNode || outerNode.next === outerNode.prev) return triangles;
      var minX, minY, maxX, maxY, x2, y2, invSize;
      if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
      if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];
        for (var i = dim; i < outerLen; i += dim) {
          x2 = data[i];
          y2 = data[i + 1];
          if (x2 < minX) minX = x2;
          if (y2 < minY) minY = y2;
          if (x2 > maxX) maxX = x2;
          if (y2 > maxY) maxY = y2;
        }
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 32767 / invSize : 0;
      }
      earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);
      return triangles;
    }
    function linkedList(data, start, end, dim, clockwise) {
      var i, last;
      if (clockwise === signedArea(data, start, end, dim) > 0) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
      } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
      }
      if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
      }
      return last;
    }
    function filterPoints(start, end) {
      if (!start) return start;
      if (!end) end = start;
      var p = start, again;
      do {
        again = false;
        if (!p.steiner && (equals(p, p.next) || area2(p.prev, p, p.next) === 0)) {
          removeNode(p);
          p = end = p.prev;
          if (p === p.next) break;
          again = true;
        } else {
          p = p.next;
        }
      } while (again || p !== end);
      return end;
    }
    function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
      if (!ear) return;
      if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
      var stop = ear, prev, next;
      while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;
        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
          triangles.push(prev.i / dim | 0);
          triangles.push(ear.i / dim | 0);
          triangles.push(next.i / dim | 0);
          removeNode(ear);
          ear = next.next;
          stop = next.next;
          continue;
        }
        ear = next;
        if (ear === stop) {
          if (!pass) {
            earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
          } else if (pass === 1) {
            ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
            earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
          } else if (pass === 2) {
            splitEarcut(ear, triangles, dim, minX, minY, invSize);
          }
          break;
        }
      }
    }
    function isEar(ear) {
      var a = ear.prev, b = ear, c = ear.next;
      if (area2(a, b, c) >= 0) return false;
      var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
      var x02 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y02 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x12 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y12 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
      var p = c.next;
      while (p !== a) {
        if (p.x >= x02 && p.x <= x12 && p.y >= y02 && p.y <= y12 && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area2(p.prev, p, p.next) >= 0) return false;
        p = p.next;
      }
      return true;
    }
    function isEarHashed(ear, minX, minY, invSize) {
      var a = ear.prev, b = ear, c = ear.next;
      if (area2(a, b, c) >= 0) return false;
      var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
      var x02 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y02 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x12 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y12 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
      var minZ = zOrder(x02, y02, minX, minY, invSize), maxZ = zOrder(x12, y12, minX, minY, invSize);
      var p = ear.prevZ, n = ear.nextZ;
      while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p.x >= x02 && p.x <= x12 && p.y >= y02 && p.y <= y12 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area2(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
        if (n.x >= x02 && n.x <= x12 && n.y >= y02 && n.y <= y12 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area2(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
      }
      while (p && p.z >= minZ) {
        if (p.x >= x02 && p.x <= x12 && p.y >= y02 && p.y <= y12 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area2(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
      }
      while (n && n.z <= maxZ) {
        if (n.x >= x02 && n.x <= x12 && n.y >= y02 && n.y <= y12 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area2(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
      }
      return true;
    }
    function cureLocalIntersections(start, triangles, dim) {
      var p = start;
      do {
        var a = p.prev, b = p.next.next;
        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
          triangles.push(a.i / dim | 0);
          triangles.push(p.i / dim | 0);
          triangles.push(b.i / dim | 0);
          removeNode(p);
          removeNode(p.next);
          p = start = b;
        }
        p = p.next;
      } while (p !== start);
      return filterPoints(p);
    }
    function splitEarcut(start, triangles, dim, minX, minY, invSize) {
      var a = start;
      do {
        var b = a.next.next;
        while (b !== a.prev) {
          if (a.i !== b.i && isValidDiagonal(a, b)) {
            var c = splitPolygon(a, b);
            a = filterPoints(a, a.next);
            c = filterPoints(c, c.next);
            earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
            earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
            return;
          }
          b = b.next;
        }
        a = a.next;
      } while (a !== start);
    }
    function eliminateHoles(data, holeIndices, outerNode, dim) {
      var queue = [], i, len, start, end, list;
      for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
      }
      queue.sort(compareX);
      for (i = 0; i < queue.length; i++) {
        outerNode = eliminateHole(queue[i], outerNode);
      }
      return outerNode;
    }
    function compareX(a, b) {
      return a.x - b.x;
    }
    function eliminateHole(hole, outerNode) {
      var bridge = findHoleBridge(hole, outerNode);
      if (!bridge) {
        return outerNode;
      }
      var bridgeReverse = splitPolygon(bridge, hole);
      filterPoints(bridgeReverse, bridgeReverse.next);
      return filterPoints(bridge, bridge.next);
    }
    function findHoleBridge(hole, outerNode) {
      var p = outerNode, hx = hole.x, hy = hole.y, qx = -Infinity, m;
      do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
          var x2 = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
          if (x2 <= hx && x2 > qx) {
            qx = x2;
            m = p.x < p.next.x ? p : p.next;
            if (x2 === hx) return m;
          }
        }
        p = p.next;
      } while (p !== outerNode);
      if (!m) return null;
      var stop = m, mx = m.x, my = m.y, tanMin = Infinity, tan2;
      p = m;
      do {
        if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
          tan2 = Math.abs(hy - p.y) / (hx - p.x);
          if (locallyInside(p, hole) && (tan2 < tanMin || tan2 === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
            m = p;
            tanMin = tan2;
          }
        }
        p = p.next;
      } while (p !== stop);
      return m;
    }
    function sectorContainsSector(m, p) {
      return area2(m.prev, m, p.prev) < 0 && area2(p.next, m, m.next) < 0;
    }
    function indexCurve(start, minX, minY, invSize) {
      var p = start;
      do {
        if (p.z === 0) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
      } while (p !== start);
      p.prevZ.nextZ = null;
      p.prevZ = null;
      sortLinked(p);
    }
    function sortLinked(list) {
      var i, p, q, e, tail, numMerges, pSize, qSize, inSize = 1;
      do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;
        while (p) {
          numMerges++;
          q = p;
          pSize = 0;
          for (i = 0; i < inSize; i++) {
            pSize++;
            q = q.nextZ;
            if (!q) break;
          }
          qSize = inSize;
          while (pSize > 0 || qSize > 0 && q) {
            if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
              e = p;
              p = p.nextZ;
              pSize--;
            } else {
              e = q;
              q = q.nextZ;
              qSize--;
            }
            if (tail) tail.nextZ = e;
            else list = e;
            e.prevZ = tail;
            tail = e;
          }
          p = q;
        }
        tail.nextZ = null;
        inSize *= 2;
      } while (numMerges > 1);
      return list;
    }
    function zOrder(x2, y2, minX, minY, invSize) {
      x2 = (x2 - minX) * invSize | 0;
      y2 = (y2 - minY) * invSize | 0;
      x2 = (x2 | x2 << 8) & 16711935;
      x2 = (x2 | x2 << 4) & 252645135;
      x2 = (x2 | x2 << 2) & 858993459;
      x2 = (x2 | x2 << 1) & 1431655765;
      y2 = (y2 | y2 << 8) & 16711935;
      y2 = (y2 | y2 << 4) & 252645135;
      y2 = (y2 | y2 << 2) & 858993459;
      y2 = (y2 | y2 << 1) & 1431655765;
      return x2 | y2 << 1;
    }
    function getLeftmost(start) {
      var p = start, leftmost = start;
      do {
        if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y) leftmost = p;
        p = p.next;
      } while (p !== start);
      return leftmost;
    }
    function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
      return (cx - px) * (ay - py) >= (ax - px) * (cy - py) && (ax - px) * (by - py) >= (bx - px) * (ay - py) && (bx - px) * (cy - py) >= (cx - px) * (by - py);
    }
    function isValidDiagonal(a, b) {
      return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
      (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
      (area2(a.prev, a, b.prev) || area2(a, b.prev, b)) || // does not create opposite-facing sectors
      equals(a, b) && area2(a.prev, a, a.next) > 0 && area2(b.prev, b, b.next) > 0);
    }
    function area2(p, q, r) {
      return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    }
    function equals(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
    }
    function intersects(p1, q1, p2, q2) {
      var o1 = sign2(area2(p1, q1, p2));
      var o2 = sign2(area2(p1, q1, q2));
      var o3 = sign2(area2(p2, q2, p1));
      var o4 = sign2(area2(p2, q2, q1));
      if (o1 !== o2 && o3 !== o4) return true;
      if (o1 === 0 && onSegment(p1, p2, q1)) return true;
      if (o2 === 0 && onSegment(p1, q2, q1)) return true;
      if (o3 === 0 && onSegment(p2, p1, q2)) return true;
      if (o4 === 0 && onSegment(p2, q1, q2)) return true;
      return false;
    }
    function onSegment(p, q, r) {
      return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
    }
    function sign2(num) {
      return num > 0 ? 1 : num < 0 ? -1 : 0;
    }
    function intersectsPolygon(a, b) {
      var p = a;
      do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
        p = p.next;
      } while (p !== a);
      return false;
    }
    function locallyInside(a, b) {
      return area2(a.prev, a, a.next) < 0 ? area2(a, b, a.next) >= 0 && area2(a, a.prev, b) >= 0 : area2(a, b, a.prev) < 0 || area2(a, a.next, b) < 0;
    }
    function middleInside(a, b) {
      var p = a, inside = false, px = (a.x + b.x) / 2, py = (a.y + b.y) / 2;
      do {
        if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x)
          inside = !inside;
        p = p.next;
      } while (p !== a);
      return inside;
    }
    function splitPolygon(a, b) {
      var a2 = new Node2(a.i, a.x, a.y), b2 = new Node2(b.i, b.x, b.y), an = a.next, bp = b.prev;
      a.next = b;
      b.prev = a;
      a2.next = an;
      an.prev = a2;
      b2.next = a2;
      a2.prev = b2;
      bp.next = b2;
      b2.prev = bp;
      return b2;
    }
    function insertNode(i, x2, y2, last) {
      var p = new Node2(i, x2, y2);
      if (!last) {
        p.prev = p;
        p.next = p;
      } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
      }
      return p;
    }
    function removeNode(p) {
      p.next.prev = p.prev;
      p.prev.next = p.next;
      if (p.prevZ) p.prevZ.nextZ = p.nextZ;
      if (p.nextZ) p.nextZ.prevZ = p.prevZ;
    }
    function Node2(i, x2, y2) {
      this.i = i;
      this.x = x2;
      this.y = y2;
      this.prev = null;
      this.next = null;
      this.z = 0;
      this.prevZ = null;
      this.nextZ = null;
      this.steiner = false;
    }
    earcut2.deviation = function(data, holeIndices, dim, triangles) {
      var hasHoles = holeIndices && holeIndices.length;
      var outerLen = hasHoles ? holeIndices[0] * dim : data.length;
      var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
      if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
          var start = holeIndices[i] * dim;
          var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
          polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
      }
      var trianglesArea = 0;
      for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
          (data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1])
        );
      }
      return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
    };
    function signedArea(data, start, end, dim) {
      var sum3 = 0;
      for (var i = start, j = end - dim; i < end; i += dim) {
        sum3 += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
      }
      return sum3;
    }
    earcut2.flatten = function(data) {
      var dim = data[0][0].length, result = { vertices: [], holes: [], dimensions: dim }, holeIndex = 0;
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
          for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
          holeIndex += data[i - 1].length;
          result.holes.push(holeIndex);
        }
      }
      return result;
    };
  }
});

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/components/src/dlsButton/dlsButton.vue2.mjs
import "/Users/kangshuolei/Desktop/code/dls-map/node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/components/src/dlsButton/style/index.css";

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/components/src/dlsButton/types.mjs
var ButtonType = [
  "primary",
  "success",
  "info",
  "warning",
  "danger",
  "text"
];
var ButtonSize = ["midium", "small", "mini"];
var buttonProps = {
  type: {
    type: String,
    validator(value) {
      return ButtonType.includes(value);
    }
  },
  size: {
    type: String,
    validator(value) {
      return ButtonSize.includes(value);
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean
};
var buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/components/src/dlsButton/dlsButton.vue2.mjs
var _sfc_main = defineComponent({
  name: "dls-button",
  props: buttonProps,
  emits: buttonEmits,
  setup(props, ctx) {
    const { emit } = ctx;
    const handleButtonClick = (evt) => {
      emit("click", evt);
    };
    const styleClass = computed(() => {
      return {
        [`k-button--${props.type}`]: props.type,
        "is-plain": props.plain,
        "is-round": props.round,
        "is-disabled": props.disabled,
        [`k-button--${props.size}`]: props.size
      };
    });
    return {
      styleClass,
      handleButtonClick
    };
  }
});

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/_virtual/_plugin-vue_export-helper.mjs
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/components/src/dlsButton/dlsButton.vue.mjs
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleButtonClick && _ctx.handleButtonClick(...args)),
    class: normalizeClass(["k-button", _ctx.styleClass])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var _Button = _export_sfc(_sfc_main, [["render", _sfc_render]]);

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/utils/Shader/Shaders.mjs
function Shaders() {
}
Shaders.prototype = {
  // 流动线
  _getFlowLineShader: function() {
    return "uniform vec4 color;\n              uniform float duration;\n              \n              czm_material czm_getMaterial(czm_materialInput materialInput){\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  vec2 st = materialInput.st;\n                  float t =fract(czm_frameNumber / duration);\n                  t *= 1.03;\n                  float alpha = smoothstep(t- 0.03, t, st.s) * step(-t, -st.s);\n                  alpha += 0.1;\n                  vec4 fragColor;\n                  fragColor.rgb = (color.rgb) / 0.5;\n                  fragColor = czm_gammaCorrect(fragColor);\n                  material.diffuse = fragColor.rgb;\n                  material.alpha = alpha;\n                  material.emission = fragColor.rgb;\n                  return material;\n              }\n              ";
  },
  // 动态线
  _getDynamicLineShader: function(options) {
    if (options && options.get) {
      return "czm_material czm_getMaterial(czm_materialInput materialInput)\n              {\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  vec2 st = materialInput.st;\n                  \n                  if(texture(image, vec2(0.0, 0.0)).a == 1.0){\n                      discard;\n                  }else{\n                      material.alpha = texture(image, vec2(1.0 - fract(time - st.s), st.t)).a * color.a;\n                  }\n                  \n                  material.diffuse = max(color.rgb * material.alpha * 3.0, color.rgb);\n                  \n                  return material;\n              }\n              ";
    }
  },
  // 动态泛光线
  _getDynamicLightLineShader: function(options) {
    if (options && options.get) {
      return "czm_material czm_getMaterial(czm_materialInput materialInput)\n              {\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  vec2 st = materialInput.st;\n                  \n                  vec4 colorImage = texture(image, vec2(fract(1.0 *st.s - time), fract(st.t)));\n                  \n                  vec4 fragColor;\n                  fragColor.rgb = (colorImage.rgb+color.rgb) / 1.0;\n                  fragColor = czm_gammaCorrect(fragColor);\n                  material.diffuse = colorImage.rgb;\n                  material.alpha = colorImage.a;\n                  material.emission = fragColor.rgb;\n                  \n                  return material;\n              }\n              ";
    }
  },
  //带方向的墙体
  _getDirectionWallShader: function(options) {
    if (options && options.get) {
      var materail = "czm_material czm_getMaterial(czm_materialInput materialInput)\n                  {\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  vec2 st = materialInput.st;\n                  \n ";
      if (options.freely == "vertical") {
        materail += "vec4 colorImage = texture(image, vec2(fract(float(" + options.count + ")*st.t " + options.direction + " time), fract(st.s)));\n ";
      } else {
        materail += "vec4 colorImage = texture(image, vec2(fract(float(" + options.count + ")*st.s " + options.direction + " time), fract(st.t)));\n ";
      }
      materail += "vec4 fragColor;\n                  fragColor.rgb = (colorImage.rgb+color.rgb) / 1.0;\n                  fragColor = czm_gammaCorrect(fragColor);\n ";
      materail += " material.diffuse = colorImage.rgb;\n                  material.alpha = colorImage.a;\n                  material.emission = fragColor.rgb;\n                  \n                  return material;\n                  }\n                  ";
      return materail;
    }
  },
  _getCircleFadeShader: function(options) {
    if (options && options.get) {
      return `czm_material czm_getMaterial(czm_materialInput materialInput)
                
                  {
                    
                      czm_material material = czm_getDefaultMaterial(materialInput);
                    
                      material.diffuse = 1.5 * color.rgb;
                    
                      vec2 st = materialInput.st;
                    
                      float dis = distance(st, vec2(0.5, 0.5));
                    
                      float per = fract(time);
                    
                      if(dis > per * 0.5){
                        
                          //material.alpha = 0.0;
                        
                          discard;
                    
                      }else {
                            
                          material.alpha = color.a  * dis / per / 2.0;
                    
                      }
                    
                      return material;
                
                  }`;
    }
  },
  // 波动圆
  _getDynamicCircleShader: function(options) {
    if (options && options.get) {
      return "uniform vec4 color;\n              uniform float duration;\n              uniform float count;\n              uniform float gradient;\n              \n              czm_material czm_getMaterial(czm_materialInput materialInput)\n              {\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  material.diffuse = 1.5 * color.rgb;\n                  vec2 st = materialInput.st;\n                  vec3 str = materialInput.str;\n                  float dis = distance(st, vec2(0.5, 0.5));\n                  float per = fract(czm_frameNumber / duration);\n                  if(abs(str.z) > 0.001){\n                      discard;\n                  }\n                  if(dis > 0.5){\n                      discard;\n                  } else {\n                      float perDis = 0.5 / count;\n                      float disNum;\n                      float bl = .0;\n                      for (int i = 0; i <= 10; i++) {\n                          if (float(i) <= count) {\n                              disNum = perDis * float(i) - dis + per / count;\n                              if (disNum > 0.0) {\n                                  if (disNum < perDis) {\n                                      bl = 1.0 - disNum / perDis;\n                                  } else if (disNum - perDis < perDis) {\n                                      bl = 1.0 - abs(1.0 - disNum / perDis);\n                                  }\n                                  material.alpha = pow(bl, gradient);\n                              }\n                          }\n                      }\n                  }\n                  return material;\n              }\n              ";
    }
  },
  // 雷达扫描
  _getRadarScanShader: function(options) {
    if (options && options.get) {
      return "uniform sampler2D colorTexture;\n              uniform sampler2D depthTexture;\n              in vec2 v_textureCoordinates;\n              uniform vec4 u_scanCenterEC;\n              uniform vec3 u_scanPlaneNormalEC;\n              uniform vec3 u_scanLineNormalEC;\n              out vec4 myOutputColor;\n              uniform float u_radius;\n              uniform vec4 u_scanColor;\n              \n              vec4 toEye(in vec2 uv, in float depth){\n              vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));\n              vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);\n              posInCamera =posInCamera / posInCamera.w;\n              return posInCamera;\n              }\n              \n              bool isPointOnLineRight(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt){\n              vec3 v01 = testPt - ptOnLine;\n              normalize(v01);\n              vec3 temp = cross(v01, lineNormal);\n              float d = dot(temp, u_scanPlaneNormalEC);\n              return d > 0.5;\n              }\n              \n              vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point){\n              vec3 v01 = point -planeOrigin;\n              float d = dot(planeNormal, v01) ;\n              return (point - planeNormal * d);\n              }\n              \n              float distancePointToLine(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt){\n              vec3 tempPt = pointProjectOnPlane(lineNormal, ptOnLine, testPt);\n              return length(tempPt - ptOnLine);\n              }\n              \n              float getDepth(in vec4 depth){\n              float z_window = czm_unpackDepth(depth);\n              z_window = czm_reverseLogDepth(z_window);\n              float n_range = czm_depthRange.near;\n              float f_range = czm_depthRange.far;\n              return (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n              }\n              \n              void main(){\n              myOutputColor = texture(colorTexture, v_textureCoordinates);\n              float depth = getDepth( texture(depthTexture, v_textureCoordinates));\n              vec4 viewPos = toEye(v_textureCoordinates, depth);\n              vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);\n              float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);\n              float twou_radius = u_radius * 2.0;\n              if(dis < u_radius){\n                  float f0 = 1.0 -abs(u_radius - dis) / u_radius;\n                  f0 = pow(f0, 64.0);\n                  vec3 lineEndPt = vec3(u_scanCenterEC.xyz) + u_scanLineNormalEC * u_radius;\n                  float f = 0.0;\n                  if(isPointOnLineRight(u_scanCenterEC.xyz, u_scanLineNormalEC.xyz, prjOnPlane.xyz)){\n                      float dis1= length(prjOnPlane.xyz - lineEndPt);\n                      f = abs(twou_radius -dis1) / twou_radius;\n                      f = pow(f, float(" + options.width + "));\n                  }\n                  if(float(" + options.border + ") > 0.0){\n                    myOutputColor = mix(myOutputColor, u_scanColor, f + f0);\n                  } else {\n                    myOutputColor = mix(myOutputColor, u_scanColor, f);\n                  }\n                  }\n              }\n              ";
    }
  },
  // 圆形扫描
  _getCircleScanShader: function(options) {
    if (options && options.get) {
      return "uniform sampler2D colorTexture;\n              uniform sampler2D depthTexture;\n              in vec2 v_textureCoordinates;\n              uniform vec4 u_scanCenterEC;\n              uniform vec3 u_scanPlaneNormalEC;\n              uniform float u_radius;\n              out vec4 myOutputColor;\n              uniform vec4 u_scanColor;\n              \n              vec4 toEye(in vec2 uv, in float depth){\n                vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));\n                vec4 posInCamera = czm_inverseProjection * vec4(xy, depth, 1.0);\n                posInCamera =posInCamera / posInCamera.w;\n                return posInCamera;\n              }\n              \n              vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point){\n                  vec3 v01 = point - planeOrigin;\n                  float d = dot(planeNormal, v01) ;\n                  return (point - planeNormal * d);\n              }\n              \n              float getDepth(in vec4 depth){\n                  float z_window = czm_unpackDepth(depth);\n                  z_window = czm_reverseLogDepth(z_window);\n                  float n_range = czm_depthRange.near;\n                  float f_range = czm_depthRange.far;\n                  return (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n              }\n              \n              void main(){\n                myOutputColor = texture(colorTexture, v_textureCoordinates);\n                  float depth = getDepth(texture(depthTexture, v_textureCoordinates));\n                  vec4 viewPos = toEye(v_textureCoordinates, depth);\n                  vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);\n                  float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);\n                  if(dis < u_radius){\n                    float f = 1.0 - abs(u_radius - dis) / u_radius;\n                    f = pow(f, float(" + options.border + "));\n                    myOutputColor = mix(myOutputColor, u_scanColor, f);\n                  }\n                }\n                ";
    }
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/utils/withinstall/index.mjs
var withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
var withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/components/src/dlsButton/index.mjs
var DlsButton = withInstall(_Button);

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/components/src/dlsMap/dlsMap.vue.mjs
import "/Users/kangshuolei/Desktop/code/dls-map/node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/components/src/dlsMap/style/index.css";

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/components/src/dlsMap/types.mjs
var mapProps = {
  mapConfig: {
    type: Object
    // required: true,
  },
  viewerConfig: {
    type: Object
    // required: false,
  }
};
var mapEmits = {
  cesiumReady: (payload) => true
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/components/src/dlsMap/dlsMap.vue.mjs
var _hoisted_1 = ["id"];
var __default__ = defineComponent({ name: "dls-map" });
var _sfc_main2 = defineComponent({
  ...__default__,
  props: mapProps,
  emits: mapEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const mapConfig = props.mapConfig;
    const viewer = ref(null);
    const dataM = reactive({});
    const containerId = computed(() => {
      return (mapConfig == null ? void 0 : mapConfig.id) || "cesiumContainer";
    });
    onMounted(() => {
      if (mapConfig == null ? void 0 : mapConfig.defaultAccessToken) {
        Cesium.Ion.defaultAccessToken = mapConfig.defaultAccessToken;
      }
      let viewerMap = new Cesium.Viewer(containerId.value, {
        // 不显示基础图层选择器
        baseLayerPicker: false,
        // 不显示地址搜索栏
        geocoder: false,
        // 不显示动画控件（如播放、暂停按钮）
        animation: false,
        // 启用或禁用场景动画
        shouldAnimate: true,
        // 不显示返回主页按钮
        homeButton: false,
        // 场景模式设置为2D或3D，根据 `mapConfig.sceneMode` 来决定
        sceneMode: (mapConfig == null ? void 0 : mapConfig.sceneModeNum) === 2 ? Cesium.SceneMode.SCENE2D : Cesium.SceneMode.SCENE3D,
        // 不显示时间轴
        timeline: false,
        // 不显示全屏按钮
        fullscreenButton: false,
        // 允许切换2D/3D模式
        scene3DOnly: false,
        // 不显示2D/3D视图模式切换按钮
        sceneModePicker: false,
        // 不显示导航帮助信息
        navigationInstructionsInitiallyVisible: false,
        // 不显示导航帮助按钮
        navigationHelpButton: false,
        // 不显示选择指示器
        selectionIndicator: false,
        // 不显示信息窗口
        infoBox: false,
        // 不使用默认影像提供者
        imageryProvider: false,
        ...props.viewerConfig
      });
      if ((mapConfig == null ? void 0 : mapConfig.defaultAccessToken) || (mapConfig == null ? void 0 : mapConfig.imageryProvider)) {
        viewerMap.imageryLayers.addImageryProvider(
          new Cesium.UrlTemplateImageryProvider(mapConfig == null ? void 0 : mapConfig.imageryProvider)
        );
      }
      viewerMap.cesiumWidget.screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      );
      viewer.value = viewerMap;
      emits("cesiumReady", viewer.value);
    });
    __expose({
      dataM,
      viewer
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: containerId.value,
        style: { "position": "absolute", "width": "100%", "height": "100%" },
        class: "dlsMapContainer"
      }, null, 8, _hoisted_1);
    };
  }
});

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/components/src/dlsMap/index.mjs
var DlsMap = withInstall(_sfc_main2);

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-layer/useSwitchMap.mjs
function useSwitchMap(data, viewer) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let imageryLayer = viewer.scene.imageryLayers;
  try {
    if (imageryLayer._layers && imageryLayer._layers.length) {
      imageryLayer._layers.forEach((itemImgery) => {
        if (itemImgery._imageryProvider && itemImgery._imageryProvider.url) {
          imageryLayer.remove(itemImgery);
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
  if (data) {
    viewer.imageryLayers.addImageryProvider(data);
  }
}

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-tools/useCesiumCoord.mjs
function useCesiumCoord() {
  const coords = reactive({
    longitude: "0",
    //经度
    latitude: "0",
    //纬度
    height: "0",
    //视高
    altitude: "0",
    //海拔
    cameraHeading: "0",
    //方向
    pitchDegrees: "0",
    //俯仰角
    zoomLevel: 0
    //级别
  });
  function listenToMouseMovement(viewer = null) {
    if (!viewer) {
      console.error("viewer is undefined");
      return false;
    }
    if (viewer) {
      let debounceTimeout = null;
      const camera = viewer.camera;
      const hander = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
      hander.setInputAction(function(movement) {
        const cartesian2 = viewer.camera.pickEllipsoid(
          movement.endPosition,
          viewer.scene.globe.ellipsoid
        );
        if (cartesian2) {
          if (debounceTimeout) {
            clearTimeout(debounceTimeout);
          }
          debounceTimeout = setTimeout(() => {
            const cartographic = Cesium.Cartographic.fromCartesian(cartesian2);
            coords.longitude = Cesium.Math.toDegrees(
              cartographic.longitude
            ).toFixed(6);
            coords.latitude = Cesium.Math.toDegrees(
              cartographic.latitude
            ).toFixed(6);
          }, 300);
        }
      }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
      hander.setInputAction(function(movement) {
        let pick = movement.position;
        if (pick) {
          let sceneMode = viewer.scene.mode;
          if (sceneMode === Cesium.SceneMode.SCENE3D) {
            let cartesianNew = viewer.scene.globe.pick(
              viewer.camera.getPickRay(pick),
              viewer.scene
            );
            if (cartesianNew) {
              let cartographicPosition = Cesium.Cartographic.fromCartesian(cartesianNew);
              coords.longitude = Cesium.Math.toDegrees(
                cartographicPosition.longitude
              ).toFixed(6);
              coords.latitude = Cesium.Math.toDegrees(
                cartographicPosition.latitude
              ).toFixed(6);
              let cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(
                cartesianNew
              );
              if (cartographic) {
                coords.altitude = viewer.scene.globe.getHeight(cartographic).toFixed(2);
              }
            }
          } else {
            let cartesian2 = viewer.camera.pickEllipsoid(
              pick,
              viewer.scene.globe.ellipsoid
            );
            if (cartesian2 !== void 0) {
              let cartographic = Cesium.Cartographic.fromCartesian(cartesian2);
              let longitude_num = Cesium.Math.toDegrees(cartographic.longitude);
              let latitude_num = Cesium.Math.toDegrees(cartographic.latitude);
              coords.longitude = longitude_num.toFixed(6);
              coords.latitude = latitude_num.toFixed(6);
            }
          }
        }
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
      hander.setInputAction(function(wheelment) {
        coords.height = viewer.camera.positionCartographic.height.toFixed(1);
        let zoom = heightToZoom(
          Math.ceil(viewer.camera.positionCartographic.height)
        );
        coords.zoomLevel = zoom;
      }, Cesium.ScreenSpaceEventType.WHEEL);
      viewer.scene.camera.moveEnd.addEventListener(function() {
        let cameraDirection = camera.direction;
        let cameraHeadingData = Cesium.Math.toDegrees(
          Math.atan2(cameraDirection.y, cameraDirection.x)
        );
        coords.cameraHeading = ((cameraHeadingData + 360) % 360).toFixed(0);
        let pitch = camera.pitch;
        coords.pitchDegrees = Cesium.Math.toDegrees(pitch).toFixed(0);
      });
    }
  }
  function heightToZoom(height) {
    let A = 40487.57;
    let B2 = 7096758e-11;
    let C = 91610.74;
    let D2 = -40467.74;
    return Math.round(D2 + (A - D2) / (1 + Math.pow(height / C, B2)));
  }
  return {
    listenToMouseMovement,
    coords
  };
}

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-tools/useCesiumUtils.mjs
function useCesiumFlyTo(viewer, target) {
  if (!target[2]) target[2] = 1e6;
  if (viewer) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        target[0],
        target[1],
        target[2]
      )
    });
  }
}
function handlePitchDegrees(viewer, value) {
  if (viewer) {
    if (viewer.scene.mode === Cesium.SceneMode.SCENE3D) {
      let scene = viewer.scene;
      let camera = viewer.camera;
      let position = camera.position.clone();
      let heading = camera.heading;
      let roll = camera.roll;
      scene.camera.setView({
        destination: position,
        orientation: {
          heading,
          roll,
          pitch: Cesium.Math.toRadians(value)
        }
      });
    } else {
      console.error("请先切换到三维地球模式！");
      return 1;
    }
  } else {
    console.error("获取地图失败，请刷新重试！");
    return 2;
  }
}

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-tools/useRemoveCesium.mjs
function isDOMElement(obj) {
  return typeof obj === "object" && obj !== null && obj.nodeType && obj.nodeType === 1;
}
function useRemoveCesium(type = ["all"], viewer) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  if (!type) type = ["all"];
  if (viewer) {
    type.forEach((item) => {
      if (item === "all" || item === "entities") {
        viewer.entities.removeAll();
      }
      if (item === "all" || item === "echarts") {
        const children = viewer.container.childNodes;
        const keyword = "echarts";
        children.forEach((item2) => {
          if (isDOMElement(item2)) {
            if (item2.id.includes(keyword)) {
              viewer.container.removeChild(item2);
            }
          }
        });
      }
      if (item === "all" || item === "divLabel") {
        const domDiv = document.querySelectorAll(".cesium-divLabel");
        if (domDiv && domDiv.length) {
          document.querySelectorAll(".cesium-divLabel").forEach((A) => A.remove());
        }
      }
      if (item === "all" || item === "dataSources") {
        viewer.dataSources.removeAll();
      }
      if (item === "all" || item === "imageryLayers") {
        const imageryLayers = viewer.imageryLayers;
        let obj = imageryLayers._layers;
        for (let i = obj.length - 1; i > 0; i--) {
          if (imageryLayers.indexOf(obj[i]) > 0) {
            imageryLayers.remove(obj[i], false);
          }
        }
      }
      if (item === "all" || item === "primitives") {
        const primitives = viewer.scene.primitives._primitives;
        if (primitives && primitives.length) {
          primitives.forEach((item2) => {
            if (!item2.destroyPrimitives) {
              viewer.scene.primitives.remove(item2);
            }
          });
        }
      }
      if (item === "all" || item === "PostProcessStage") {
        viewer.scene.postProcessStages.removeAll(true);
      }
    });
  }
}
function clearEntityByname(name, viewer) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let entityArr = viewer.entities.values;
  let CentityArr = entityArr.filter((v2) => {
    if (v2.name === name) {
      return v2;
    }
  });
  let len = CentityArr.length;
  while (len--) {
    viewer.entities.remove(CentityArr[len]);
  }
}

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-tools/useSwitchViewPoint.mjs
function useSwitchViewPoint(viewType, viewer) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  var scene = viewer.scene;
  switch (viewType) {
    case "3d":
      scene.morphTo3D(0);
      break;
    case "2d":
      scene.morphTo2D(0);
      break;
    case "2.5d":
      scene.morphToColumbusView(0);
      break;
  }
}

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-layer/useLoadTerrain.mjs
function isInRange(lon, lat, range) {
  const [minLon, maxLon, minLat, maxLat] = range;
  return lon >= minLon && lon <= maxLon && lat >= minLat && lat <= maxLat;
}
function findRange(lon, lat, ranges) {
  for (const rangeObj of ranges) {
    if (isInRange(lon, lat, rangeObj.range)) {
      return rangeObj;
    }
  }
  return null;
}
function useLoadTerrain(terrainAry, height = 1e6, viewer) {
  if (!terrainAry.length) return false;
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  if (viewer.scene.mode === Cesium.SceneMode.SCENE3D) {
    let globalTerrain = terrainAry.filter((item) => item.type === "global");
    if (globalTerrain && globalTerrain.length) {
      const terrainProvider = new Cesium.CesiumTerrainProvider({
        url: globalTerrain[0].url
      });
      viewer.terrainProvider = terrainProvider;
    }
    let hasReturneRange = false;
    let hasExecutedOtherMethod = false;
    let regionTerrain = terrainAry.filter((item) => item.type === "region");
    if (regionTerrain && regionTerrain.length) {
      viewer.camera.changed.addEventListener(function() {
        let cameraPosition = viewer.camera.positionCartographic;
        let latitude = Cesium.Math.toDegrees(cameraPosition.latitude);
        let longitude = Cesium.Math.toDegrees(cameraPosition.longitude);
        let heightCam = cameraPosition.height;
        if (!hasReturneRange) {
          let matcheRange = findRange(longitude, latitude, regionTerrain);
          if (matcheRange && heightCam < height) {
            hasReturneRange = true;
            hasExecutedOtherMethod = false;
            const terrainProvider = new Cesium.CesiumTerrainProvider({
              url: matcheRange.url
            });
            viewer.terrainProvider = terrainProvider;
          }
        } else if (!hasExecutedOtherMethod && heightCam > height) {
          if (globalTerrain && globalTerrain.length) {
            const terrainProvider = new Cesium.CesiumTerrainProvider({
              url: globalTerrain[0].url
            });
            viewer.terrainProvider = terrainProvider;
          }
          hasExecutedOtherMethod = true;
          hasReturneRange = false;
        }
      });
    }
  }
}

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/useDrawGraph.mjs
function DrawSoildLine(viewer, names, color, width) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let distance2 = 0;
  var layerLine = void 0;
  let lineEntityCollection = new Cesium.CustomDataSource("measureLine");
  viewer.dataSources.add(lineEntityCollection);
  document.body.style.cursor = "crosshair";
  var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  let option = {
    name: names,
    color: color ? Cesium.Color.fromBytes(...color) : Cesium.Color.RED,
    width
  };
  var layer = new Cesium.CustomDataSource("MyLines");
  viewer.dataSources.add(layer);
  var activeShapePoints = [], activeShape = void 0;
  handler.setInputAction((click) => {
    const earthPosition = getPosition(viewer, click.position);
    if (Cesium.defined(earthPosition)) {
      if (activeShapePoints.length === 0) {
        activeShapePoints.push(earthPosition);
        const dynamicPositions = new Cesium.CallbackProperty(() => {
          return activeShapePoints;
        }, false);
        activeShape = drawLine(layer, dynamicPositions, option);
      }
      activeShapePoints.push(earthPosition);
      try {
        if (lineEntityCollection) {
          let textDisance = distance2 + "米";
          lineEntityCollection.entities.add({
            name: "空间直线距离",
            position: activeShapePoints[activeShapePoints.length - 1],
            point: {
              pixelSize: 5,
              color: Cesium.Color.RED,
              outlineColor: Cesium.Color.WHITE,
              outlineWidth: 2
            },
            label: {
              text: textDisance,
              font: "18px sans-serif",
              fillColor: Cesium.Color.GOLD,
              style: Cesium.LabelStyle.FILL_AND_OUTLINE,
              outlineWidth: 2,
              verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
              pixelOffset: new Cesium.Cartesian2(20, -20)
            }
          });
        }
      } catch (error) {
        console.log(`errorerror`, error);
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  handler.setInputAction((move) => {
    if (activeShapePoints.length >= 2) {
      const earthPosition = getPosition(viewer, move.endPosition);
      if (Cesium.defined(earthPosition)) {
        activeShapePoints.pop();
        activeShapePoints.push(earthPosition);
      }
      distance2 = getSpaceDistance(activeShapePoints);
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  handler.setInputAction((click) => {
    handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    activeShapePoints.pop();
    layer.entities.remove(activeShape);
    layerLine = drawLine(layer, activeShapePoints, option);
    document.body.style.cursor = "default";
    setTimeout(() => {
      activeShapePoints = [];
      handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
      handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
      handler = handler && handler.destroy();
    }, 500);
  }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
  return layerLine;
}
function getPosition(viewer, position) {
  let earthPosition = void 0;
  if (viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider) {
    earthPosition = viewer.scene.camera.pickEllipsoid(position);
  } else {
    const ray = viewer.camera.getPickRay(position);
    earthPosition = viewer.scene.globe.pick(ray, viewer.scene);
  }
  return earthPosition;
}
function drawLine(layer, positionData, option) {
  return layer.entities.add({
    name: option.name,
    polyline: {
      positions: positionData,
      clampToGround: true,
      width: option.width,
      material: option.color
    }
  });
}
function removeDrawLine(viewer) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  viewer.dataSources.removeAll();
}
function getSpaceDistance(positions) {
  let distance2 = 0;
  for (let i = 0; i < positions.length - 1; i++) {
    let point1cartographic = Cesium.Cartographic.fromCartesian(positions[i]);
    let point2cartographic = Cesium.Cartographic.fromCartesian(
      positions[i + 1]
    );
    let geodesic = new Cesium.EllipsoidGeodesic();
    geodesic.setEndPoints(point1cartographic, point2cartographic);
    let s = geodesic.surfaceDistance;
    s = Math.sqrt(
      Math.pow(s, 2) + Math.pow(point2cartographic.height - point1cartographic.height, 2)
    );
    distance2 = distance2 + s;
  }
  return distance2.toFixed(2);
}

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-entity/useCesiumAddEntity.mjs
function addBillboard(lon, lat, imgUrl, {
  name = "Point",
  width,
  height,
  scale: scale2,
  click = true,
  shengClick = false,
  doubleClickHeight = 5e3,
  attribute = {},
  popContent,
  pointHeight,
  doubleClickPitch = -90
}, viewer) {
  let h = pointHeight ? pointHeight : 0;
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let entity = viewer.entities.add({
    name,
    position: Cesium.Cartesian3.fromDegrees(lon, lat, h),
    billboard: {
      image: imgUrl,
      width,
      height,
      scale: scale2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      HorizontalOrigin: Cesium.HorizontalOrigin.CENTER
    },
    attribute,
    click,
    shengClick,
    doubleClickHeight,
    lon,
    lat,
    popContent,
    doubleClickPitch
  });
  return entity;
}
function addLine(positions, material, viewer, { name = "Line", width = 3 }) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let entity = viewer.entities.add({
    name,
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray(positions),
      width,
      material
    }
  });
  return entity;
}
function addCircle(longitude, latitude, radius, color, viewer, name = "Circle") {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
    ellipse: {
      semiMinorAxis: radius,
      semiMajorAxis: radius,
      material: new Cesium.ColorMaterialProperty(
        Cesium.Color.fromCssColorString(color)
      )
    }
  });
  return entity;
}
function addWall(viewer, positions, hexColor, alpha, MaterialIndex, maximumHeights = [], minimumHeights = []) {
  if (!viewer) {
    console.error("viewer is undefined");
    return false;
  }
  let wallGeometry = null;
  if (maximumHeights.length && minimumHeights.length) {
    wallGeometry = new Cesium.WallGeometry({
      positions: Cesium.Cartesian3.fromDegreesArrayHeights(positions),
      maximumHeights,
      minimumHeights
    });
  } else {
    wallGeometry = new Cesium.WallGeometry({
      positions: Cesium.Cartesian3.fromDegreesArrayHeights(positions)
    });
  }
  const wallGeometryInstance = new Cesium.GeometryInstance({
    geometry: wallGeometry,
    attributes: {
      color: Cesium.ColorGeometryInstanceAttribute.fromColor(
        Cesium.Color.WHITE
      )
    }
  });
  let areaFabric = null;
  if (MaterialIndex === 1) {
    areaFabric = {
      type: "Wave",
      uniforms: {
        color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha),
        // 波动颜色
        time: 0
        // 初始时间
      },
      source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
            czm_material material = czm_getDefaultMaterial(materialInput);
            vec2 st = materialInput.st;
            float time = czm_frameNumber / 60.0; // 动态时间
            float wave = sin((st.s + st.t) * 10.0 + time * 4.0); // 波动公式
            material.diffuse = color.rgb;
            material.alpha = color.a * abs(wave);
            return material;
        }`
    };
  } else if (MaterialIndex === 2) {
    areaFabric = {
      type: "Blinking",
      uniforms: {
        color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha),
        // 基础颜色
        time: 0
        // 动态时间
      },
      source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
            czm_material material = czm_getDefaultMaterial(materialInput);
            float alpha = abs(sin(czm_frameNumber / 60.0)); // 闪烁效果
            material.diffuse = color.rgb;
            material.alpha = color.a * alpha;
            return material;
        }`
    };
  } else if (MaterialIndex === 3) {
    areaFabric = {
      type: "Gradient",
      uniforms: {
        color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha)
        // 渐变颜色
      },
      source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
            czm_material material = czm_getDefaultMaterial(materialInput);
            vec2 st = materialInput.st;
            material.diffuse = color.rgb * st.t; // 渐变效果
            material.alpha = color.a;
            return material;
        }`
    };
  } else if (MaterialIndex === 4) {
    areaFabric = {
      type: "MovingStripe",
      uniforms: {
        color: Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha),
        repeat: 10,
        // 条纹重复次数
        speed: 2,
        // 条纹移动速度
        time: 0
        // 动态时间
      },
      source: `
        czm_material czm_getMaterial(czm_materialInput materialInput) {
            czm_material material = czm_getDefaultMaterial(materialInput);
            vec2 st = materialInput.st;
            float time = czm_frameNumber / 60.0 * speed;
            float stripe = abs(sin(st.s * repeat + time));
            material.diffuse = color.rgb * stripe;
            material.alpha = color.a * stripe;
            return material;
        }`
    };
  }
  const wallPrimitive = new Cesium.Primitive({
    geometryInstances: wallGeometryInstance,
    appearance: new Cesium.MaterialAppearance({
      material: new Cesium.Material({
        fabric: areaFabric
      }),
      translucent: true
    }),
    asynchronous: false
  });
  viewer.scene.primitives.add(wallPrimitive);
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(-115, 37, 2e6)
  });
}

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-coverage/CesiumSetDiv.mjs
var DlsDivLabel = class {
  constructor(val) {
    if (val) {
      this.viewer = val.viewer;
      this.height = val.height;
      this.position = Cesium.Cartesian3.fromDegrees(
        val.position[0],
        val.position[1],
        val.height
      );
      this.layerData = val;
      this.vmInstance = typeof val.dom === "string" ? this.createDom(val.dom) : val.dom;
      this.dId = val.id ? val.id : void 0;
      this.className = val.className ? val.className : void 0;
      this.offset = val.offset;
      this.type = val.type;
      if (!this.vmInstance || !this.vmInstance.style) {
        throw new Error("Not passing available Dom");
      }
      this.initDom();
      this.show = true;
      val.viewer.cesiumWidget.container.appendChild(this.vmInstance);
      this.addPostRender();
    }
  }
  createDom(html) {
    const el = document.createElement("div");
    el.innerHTML = html;
    return el;
  }
  initDom() {
    if (this.className) {
      this.vmInstance.classList.add(this.className);
    }
    if (this.dId) this.vmInstance.id = "divLabel" + this.dId;
    this.vmInstance.style.position = "absolute";
    this.vmInstance.style.zIndex = "5";
    this.vmInstance.addEventListener("click", () => {
    });
    if (!this.vmInstance.classList.contains("cesium-divLabel")) {
      this.vmInstance.classList.add("cesium-divLabel");
    }
  }
  setDom(dom) {
    if (dom instanceof HTMLElement) {
      this.vmInstance.remove();
      this.vmInstance = dom;
      this.initDom();
    } else {
      this.vmInstance.innerHTML = dom;
    }
  }
  addPostRender() {
    this.viewer.scene.postRender.addEventListener(this.postRender.bind(this));
    this._render = this.postRender.bind(this);
  }
  postRender() {
    if (!this.vmInstance || !this.vmInstance.style) return;
    if (this.vmInstance.style.zIndex === "-1") return;
    const is3D = this.viewer.scene.mode === Cesium.SceneMode.SCENE3D;
    const is2D = this.viewer.scene.mode === Cesium.SceneMode.SCENE2D;
    let p_2d;
    if (is3D) {
      p_2d = this.viewer.scene.cartesianToCanvasCoordinates(this.position);
    } else if (is2D) {
      p_2d = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
        this.viewer.scene,
        this.position
      );
    }
    if (p_2d) {
      if (this.offset) {
        if (this.type && this.type === "LayerPointTime") {
          this.vmInstance.style.top = p_2d.y + "px";
          this.vmInstance.style.left = p_2d.x + this.offset[0] + "px";
        } else {
          this.vmInstance.style.top = p_2d.y + this.offset[1] + "px";
          const elWidth = this.vmInstance.offsetWidth;
          this.vmInstance.style.left = p_2d.x - elWidth / 2 + this.offset[0] + "px";
        }
      } else {
        this.vmInstance.style.top = p_2d.y + "px";
        const elWidth = this.vmInstance.offsetWidth;
        this.vmInstance.style.left = p_2d.x - elWidth / 2 + "px";
      }
      const camerPosition = this.viewer.camera.position;
      let height = this.viewer.scene.globe.ellipsoid.cartesianToCartographic(
        camerPosition
      ).height;
      height += this.viewer.scene.globe.ellipsoid.maximumRadius;
      if (!(Cesium.Cartesian3.distance(camerPosition, this.position) > height) && this.viewer.camera.positionCartographic.height < 5e7) {
        this.vmInstance.style.display = "block";
      } else {
        this.vmInstance.style.display = "none";
      }
    }
  }
  changePosition(position) {
    if (position.length === 2) {
      this.position = Cesium.Cartesian3.fromDegrees(
        position[0],
        position[1],
        this.height
      );
    }
    return this;
  }
  removeAllDiv(id) {
    document.querySelectorAll(id).forEach((A) => A.remove());
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/events.mjs
var EventDispatcher = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map([
      ["drawStart", /* @__PURE__ */ new Set()],
      ["drawUpdate", /* @__PURE__ */ new Set()],
      ["drawEnd", /* @__PURE__ */ new Set()],
      ["editStart", /* @__PURE__ */ new Set()],
      ["editEnd", /* @__PURE__ */ new Set()]
    ]);
  }
  on(event, listener) {
    if (!this.listeners.has(event)) {
      console.warn("Event binding must be one of 'drawStart', 'drawUpdate', or 'drawEnd'.");
      return;
    }
    this.listeners.get(event).add(listener);
  }
  off(event, listener) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(listener);
    }
  }
  dispatchEvent(event, eventData) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach((listener) => {
        listener(eventData);
      });
    }
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/base.mjs
var import_lodash = __toESM(require_lodash(), 1);

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/utils.mjs
var FITTING_COUNT = 100;
var ZERO_TOLERANCE = 1e-4;
var MathDistance = (pnt1, pnt2) => Math.sqrt((pnt1[0] - pnt2[0]) ** 2 + (pnt1[1] - pnt2[1]) ** 2);
var wholeDistance = (points) => {
  let distance2 = 0;
  if (points && Array.isArray(points) && points.length > 0) {
    points.forEach((item, index2) => {
      if (index2 < points.length - 1) {
        distance2 += MathDistance(item, points[index2 + 1]);
      }
    });
  }
  return distance2;
};
var getBaseLength = (points) => wholeDistance(points) ** 0.99;
var Mid = (point1, point2) => [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];
var getCircleCenterOfThreePoints = (point1, point2, point3) => {
  const pntA = [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];
  const pntB = [pntA[0] - point1[1] + point2[1], pntA[1] + point1[0] - point2[0]];
  const pntC = [(point1[0] + point3[0]) / 2, (point1[1] + point3[1]) / 2];
  const pntD = [pntC[0] - point1[1] + point3[1], pntC[1] + point1[0] - point3[0]];
  return getIntersectPoint(pntA, pntB, pntC, pntD);
};
var getIntersectPoint = (pntA, pntB, pntC, pntD) => {
  if (pntA[1] === pntB[1]) {
    const f2 = (pntD[0] - pntC[0]) / (pntD[1] - pntC[1]);
    const x22 = f2 * (pntA[1] - pntC[1]) + pntC[0];
    const y22 = pntA[1];
    return [x22, y22];
  }
  if (pntC[1] === pntD[1]) {
    const e22 = (pntB[0] - pntA[0]) / (pntB[1] - pntA[1]);
    const x22 = e22 * (pntC[1] - pntA[1]) + pntA[0];
    const y22 = pntC[1];
    return [x22, y22];
  }
  const e = (pntB[0] - pntA[0]) / (pntB[1] - pntA[1]);
  const f = (pntD[0] - pntC[0]) / (pntD[1] - pntC[1]);
  const y2 = (e * pntA[1] - pntA[0] - f * pntC[1] + pntC[0]) / (e - f);
  const x2 = e * y2 - e * pntA[1] + pntA[0];
  return [x2, y2];
};
var getAzimuth = (startPoint, endPoint) => {
  let azimuth;
  const angle2 = Math.asin(Math.abs(endPoint[1] - startPoint[1]) / MathDistance(startPoint, endPoint));
  if (endPoint[1] >= startPoint[1] && endPoint[0] >= startPoint[0]) {
    azimuth = angle2 + Math.PI;
  } else if (endPoint[1] >= startPoint[1] && endPoint[0] < startPoint[0]) {
    azimuth = Math.PI * 2 - angle2;
  } else if (endPoint[1] < startPoint[1] && endPoint[0] < startPoint[0]) {
    azimuth = angle2;
  } else if (endPoint[1] < startPoint[1] && endPoint[0] >= startPoint[0]) {
    azimuth = Math.PI - angle2;
  }
  return azimuth;
};
var getAngleOfThreePoints = (pntA, pntB, pntC) => {
  const angle2 = getAzimuth(pntB, pntA) - getAzimuth(pntB, pntC);
  return angle2 < 0 ? angle2 + Math.PI * 2 : angle2;
};
var isClockWise = (pnt1, pnt2, pnt3) => (pnt3[1] - pnt1[1]) * (pnt2[0] - pnt1[0]) > (pnt2[1] - pnt1[1]) * (pnt3[0] - pnt1[0]);
var getCubicValue = (t, startPnt, cPnt1, cPnt2, endPnt) => {
  t = Math.max(Math.min(t, 1), 0);
  const [tp, t2] = [1 - t, t * t];
  const t3 = t2 * t;
  const tp2 = tp * tp;
  const tp3 = tp2 * tp;
  const x2 = tp3 * startPnt[0] + 3 * tp2 * t * cPnt1[0] + 3 * tp * t2 * cPnt2[0] + t3 * endPnt[0];
  const y2 = tp3 * startPnt[1] + 3 * tp2 * t * cPnt1[1] + 3 * tp * t2 * cPnt2[1] + t3 * endPnt[1];
  return [x2, y2];
};
var getThirdPoint = (startPnt, endPnt, angle2, distance2, clockWise) => {
  const azimuth = getAzimuth(startPnt, endPnt);
  const alpha = clockWise ? azimuth + angle2 : azimuth - angle2;
  const dx = distance2 * Math.cos(alpha);
  const dy = distance2 * Math.sin(alpha);
  return [endPnt[0] + dx, endPnt[1] + dy];
};
var getArcPoints = (center2, radius, startAngle, endAngle) => {
  let [x2, y2, pnts, angleDiff] = [null, null, [], endAngle - startAngle];
  angleDiff = angleDiff < 0 ? angleDiff + Math.PI * 2 : angleDiff;
  for (let i = 0; i <= 100; i++) {
    const angle2 = startAngle + angleDiff * i / 100;
    x2 = center2[0] + radius * Math.cos(angle2);
    y2 = center2[1] + radius * Math.sin(angle2);
    pnts.push([x2, y2]);
  }
  return pnts;
};
var getBisectorNormals = (t, pnt1, pnt2, pnt3) => {
  const normal = getNormal(pnt1, pnt2, pnt3);
  let [bisectorNormalRight, bisectorNormalLeft, dt, x2, y2] = [null, null, null, null, null];
  const dist = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1]);
  const uX = normal[0] / dist;
  const uY = normal[1] / dist;
  const d1 = MathDistance(pnt1, pnt2);
  const d2 = MathDistance(pnt2, pnt3);
  if (dist > ZERO_TOLERANCE) {
    if (isClockWise(pnt1, pnt2, pnt3)) {
      dt = t * d1;
      x2 = pnt2[0] - dt * uY;
      y2 = pnt2[1] + dt * uX;
      bisectorNormalRight = [x2, y2];
      dt = t * d2;
      x2 = pnt2[0] + dt * uY;
      y2 = pnt2[1] - dt * uX;
      bisectorNormalLeft = [x2, y2];
    } else {
      dt = t * d1;
      x2 = pnt2[0] + dt * uY;
      y2 = pnt2[1] - dt * uX;
      bisectorNormalRight = [x2, y2];
      dt = t * d2;
      x2 = pnt2[0] - dt * uY;
      y2 = pnt2[1] + dt * uX;
      bisectorNormalLeft = [x2, y2];
    }
  } else {
    x2 = pnt2[0] + t * (pnt1[0] - pnt2[0]);
    y2 = pnt2[1] + t * (pnt1[1] - pnt2[1]);
    bisectorNormalRight = [x2, y2];
    x2 = pnt2[0] + t * (pnt3[0] - pnt2[0]);
    y2 = pnt2[1] + t * (pnt3[1] - pnt2[1]);
    bisectorNormalLeft = [x2, y2];
  }
  return [bisectorNormalRight, bisectorNormalLeft];
};
var getNormal = (pnt1, pnt2, pnt3) => {
  let dX1 = pnt1[0] - pnt2[0];
  let dY1 = pnt1[1] - pnt2[1];
  const d1 = Math.sqrt(dX1 * dX1 + dY1 * dY1);
  dX1 /= d1;
  dY1 /= d1;
  let dX2 = pnt3[0] - pnt2[0];
  let dY2 = pnt3[1] - pnt2[1];
  const d2 = Math.sqrt(dX2 * dX2 + dY2 * dY2);
  dX2 /= d2;
  dY2 /= d2;
  const uX = dX1 + dX2;
  const uY = dY1 + dY2;
  return [uX, uY];
};
var getLeftMostControlPoint = (controlPoints, t) => {
  let [pnt1, pnt2, pnt3, controlX, controlY] = [controlPoints[0], controlPoints[1], controlPoints[2], null, null];
  const pnts = getBisectorNormals(0, pnt1, pnt2, pnt3);
  const normalRight = pnts[0];
  const normal = getNormal(pnt1, pnt2, pnt3);
  const dist = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1]);
  if (dist > ZERO_TOLERANCE) {
    const mid = Mid(pnt1, pnt2);
    const pX = pnt1[0] - mid[0];
    const pY = pnt1[1] - mid[1];
    const d1 = MathDistance(pnt1, pnt2);
    const n = 2 / d1;
    const nX = -n * pY;
    const nY = n * pX;
    const a11 = nX * nX - nY * nY;
    const a12 = 2 * nX * nY;
    const a22 = nY * nY - nX * nX;
    const dX = normalRight[0] - mid[0];
    const dY = normalRight[1] - mid[1];
    controlX = mid[0] + a11 * dX + a12 * dY;
    controlY = mid[1] + a12 * dX + a22 * dY;
  } else {
    controlX = pnt1[0] + t * (pnt2[0] - pnt1[0]);
    controlY = pnt1[1] + t * (pnt2[1] - pnt1[1]);
  }
  return [controlX, controlY];
};
var getRightMostControlPoint = (controlPoints, t) => {
  const count = controlPoints.length;
  const pnt1 = controlPoints[count - 3];
  const pnt2 = controlPoints[count - 2];
  const pnt3 = controlPoints[count - 1];
  const pnts = getBisectorNormals(0, pnt1, pnt2, pnt3);
  const normalLeft = pnts[1];
  const normal = getNormal(pnt1, pnt2, pnt3);
  const dist = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1]);
  let [controlX, controlY] = [null, null];
  if (dist > ZERO_TOLERANCE) {
    const mid = Mid(pnt2, pnt3);
    const pX = pnt3[0] - mid[0];
    const pY = pnt3[1] - mid[1];
    const d1 = MathDistance(pnt2, pnt3);
    const n = 2 / d1;
    const nX = -n * pY;
    const nY = n * pX;
    const a11 = nX * nX - nY * nY;
    const a12 = 2 * nX * nY;
    const a22 = nY * nY - nX * nX;
    const dX = normalLeft[0] - mid[0];
    const dY = normalLeft[1] - mid[1];
    controlX = mid[0] + a11 * dX + a12 * dY;
    controlY = mid[1] + a12 * dX + a22 * dY;
  } else {
    controlX = pnt3[0] + t * (pnt2[0] - pnt3[0]);
    controlY = pnt3[1] + t * (pnt2[1] - pnt3[1]);
  }
  return [controlX, controlY];
};
var getCurvePoints = (t, controlPoints) => {
  const leftControl = getLeftMostControlPoint(controlPoints, t);
  let [pnt1, pnt2, pnt3, normals, points] = [null, null, null, [leftControl], []];
  for (let i = 0; i < controlPoints.length - 2; i++) {
    [pnt1, pnt2, pnt3] = [controlPoints[i], controlPoints[i + 1], controlPoints[i + 2]];
    const normalPoints = getBisectorNormals(t, pnt1, pnt2, pnt3);
    normals = normals.concat(normalPoints);
  }
  const rightControl = getRightMostControlPoint(controlPoints, t);
  if (rightControl) {
    normals.push(rightControl);
  }
  for (let i = 0; i < controlPoints.length - 1; i++) {
    pnt1 = controlPoints[i];
    pnt2 = controlPoints[i + 1];
    points.push(pnt1);
    for (let j = 0; j < FITTING_COUNT; j++) {
      const pnt = getCubicValue(j / FITTING_COUNT, pnt1, normals[i * 2], normals[i * 2 + 1], pnt2);
      points.push(pnt);
    }
    points.push(pnt2);
  }
  return points;
};
var getBezierPoints = function(points) {
  if (points.length <= 2) {
    return points;
  }
  const bezierPoints = [];
  const n = points.length - 1;
  for (let t = 0; t <= 1; t += 0.01) {
    let [x2, y2] = [0, 0];
    for (let index2 = 0; index2 <= n; index2++) {
      const factor = getBinomialFactor(n, index2);
      const a = t ** index2;
      const b = (1 - t) ** (n - index2);
      x2 += factor * a * b * points[index2][0];
      y2 += factor * a * b * points[index2][1];
    }
    bezierPoints.push([x2, y2]);
  }
  bezierPoints.push(points[n]);
  return bezierPoints;
};
var getFactorial = (n) => {
  let result = 1;
  switch (n) {
    case n <= 1:
      result = 1;
      break;
    case n === 2:
      result = 2;
      break;
    case n === 3:
      result = 6;
      break;
    case n === 24:
      result = 24;
      break;
    case n === 5:
      result = 120;
      break;
    default:
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      break;
  }
  return result;
};
var getBinomialFactor = (n, index2) => getFactorial(n) / (getFactorial(index2) * getFactorial(n - index2));
var getQBSplinePoints = (points) => {
  if (points.length <= 2) {
    return points;
  }
  const [n, bSplinePoints] = [2, []];
  const m = points.length - n - 1;
  bSplinePoints.push(points[0]);
  for (let i = 0; i <= m; i++) {
    for (let t = 0; t <= 1; t += 0.05) {
      let [x2, y2] = [0, 0];
      for (let k = 0; k <= n; k++) {
        const factor = getQuadricBSplineFactor(k, t);
        x2 += factor * points[i + k][0];
        y2 += factor * points[i + k][1];
      }
      bSplinePoints.push([x2, y2]);
    }
  }
  bSplinePoints.push(points[points.length - 1]);
  return bSplinePoints;
};
var getQuadricBSplineFactor = (k, t) => {
  let res = 0;
  if (k === 0) {
    res = (t - 1) ** 2 / 2;
  } else if (k === 1) {
    res = (-2 * t ** 2 + 2 * t + 1) / 2;
  } else if (k === 2) {
    res = t ** 2 / 2;
  }
  return res;
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/base.mjs
var Base = class {
  constructor(cesium, viewer, style) {
    this.geometryPoints = [];
    this.state = "drawing";
    this.controlPoints = [];
    this.entityId = "";
    this.points = [];
    this.minPointsForShape = 0;
    this.cesium = cesium;
    this.viewer = viewer;
    this.type = this.getType();
    this.mergeStyle(style);
    this.cartesianToLnglat = this.cartesianToLnglat.bind(this);
    this.pixelToCartesian = this.pixelToCartesian.bind(this);
    this.eventDispatcher = new EventDispatcher();
    viewer.trackedEntity = void 0;
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    );
    this.onClick();
  }
  mergeStyle(style) {
    if (this.type === "polygon") {
      this.style = Object.assign(
        {
          material: new this.cesium.Color(),
          outlineMaterial: new this.cesium.Color(),
          outlineWidth: 2
        },
        style
      );
    } else if (this.type === "line") {
      this.style = Object.assign(
        {
          material: new this.cesium.Color(),
          lineWidth: 2
        },
        style
      );
    } else if (this.type === "point") {
      this.style = Object.assign(
        {
          pixelSize: 10,
          heightReference: this.cesium.HeightReference.CLAMP_TO_GROUND,
          color: this.cesium.Color.RED
        },
        style
      );
    }
    this.styleCache = (0, import_lodash.default)(this.style);
  }
  /**
   * Base Class提供了更改状态的方法，并根据状态实现不同的逻辑。
   * 状态由各个子组件根据实际情况进行控制。
   * @param State
   */
  setState(state) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
  /**
   * 绑定根据状态而做出不同响应的全局单击事件。当处于绘图状态时，
   * 单击即可为几何形状添加点。在编辑过程中，选择绘制的形状将其置于
   * 可编辑状态。单击空白将其设置为静态状态。
   */
  onClick() {
    this.eventHandler = new this.cesium.ScreenSpaceEventHandler(
      this.viewer.canvas
    );
    this.eventHandler.setInputAction((evt) => {
      const pickedObject = this.viewer.scene.pick(evt.position);
      const hitEntities = this.cesium.defined(pickedObject) && pickedObject.id instanceof this.cesium.Entity;
      let activeEntity = this.polygonEntity;
      if (this.type === "line") {
        activeEntity = this.lineEntity;
      }
      if (this.type === "point") {
        activeEntity = this.pointEntity;
      }
      if (this.state === "drawing") {
        const cartesian2 = this.pixelToCartesian(evt.position);
        const points = this.getPoints();
        if (!cartesian2) {
          return;
        }
        if (!this.freehand && points.length > 0 && !this.checkDistance(cartesian2, points[points.length - 1])) {
          return;
        }
        this.addPoint(cartesian2);
        if (this.getPoints().length === 1) {
          this.eventDispatcher.dispatchEvent("drawStart");
        }
        this.eventDispatcher.dispatchEvent("drawUpdate", cartesian2);
      } else if (this.state === "edit") {
        if (!hitEntities || activeEntity.id !== pickedObject.id.id) {
          this.setState("static");
          this.type !== "point" ? this.removeControlPoints() : null;
          this.disableDrag();
          this.eventDispatcher.dispatchEvent("editEnd", this.getPoints());
        }
      } else if (this.state === "static") {
        try {
          if (hitEntities && activeEntity.id === pickedObject.id.id) {
            const pickedGraphics = this.type === "line" ? pickedObject.id.polyline : this.type === "polygon" ? pickedObject.id.polygon : pickedObject.id.point;
            if (this.cesium.defined(pickedGraphics)) {
              this.setState("edit");
              this.type !== "point" ? this.addControlPoints() : null;
              this.draggable();
              this.eventDispatcher.dispatchEvent("editStart");
            }
          }
        } catch (e) {
          console.log("eeee", e);
        }
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_CLICK);
  }
  onMouseMove() {
    this.eventHandler.setInputAction((evt) => {
      const points = this.getPoints();
      const cartesian2 = this.pixelToCartesian(evt.endPosition);
      if (!cartesian2) {
        return;
      }
      if (this.checkDistance(cartesian2, points[points.length - 1])) {
        this.updateMovingPoint(cartesian2, points.length);
      }
    }, this.cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }
  onDoubleClick() {
    this.eventHandler.setInputAction((evt) => {
      if (this.state === "drawing") {
        this.finishDrawing();
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
  }
  /**
   * 检查两点之间的距离是否大于10米。
   */
  checkDistance(cartesian1, cartesian2) {
    const distance2 = this.cesium.Cartesian3.distance(cartesian1, cartesian2);
    return distance2 > 10;
  }
  finishDrawing() {
    this.type === "polygon" && this.lineEntity && this.viewer.entities.remove(this.lineEntity);
    this.removeMoveListener();
    this.setState("edit");
    this.type !== "point" ? this.addControlPoints() : null;
    this.draggable();
    const entity = this.polygonEntity || this.lineEntity || this.pointEntity;
    this.entityId = entity.id;
    this.eventDispatcher.dispatchEvent("drawEnd", this.getPoints());
  }
  removeClickListener() {
    this.eventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.LEFT_CLICK
    );
  }
  removeMoveListener() {
    this.eventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.MOUSE_MOVE
    );
  }
  removeDoubleClickListener() {
    this.eventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    );
  }
  setGeometryPoints(geometryPoints) {
    this.geometryPoints = geometryPoints;
  }
  getGeometryPoints() {
    return this.geometryPoints;
  }
  drawPolygon() {
    const callback = () => {
      return new this.cesium.PolygonHierarchy(this.geometryPoints);
    };
    if (!this.polygonEntity) {
      const style = this.style;
      this.polygonEntity = this.viewer.entities.add({
        polygon: new this.cesium.PolygonGraphics({
          hierarchy: new this.cesium.CallbackProperty(callback, false),
          show: true,
          material: style.material
        })
      });
      this.outlineEntity = this.viewer.entities.add({
        polyline: {
          positions: new this.cesium.CallbackProperty(() => {
            return [...this.geometryPoints, this.geometryPoints[0]];
          }, false),
          width: style.outlineWidth,
          material: style.outlineMaterial,
          clampToGround: true
        }
      });
    }
  }
  drawLine() {
    if (!this.lineEntity) {
      const style = this.style;
      this.lineEntity = this.addLineEntity(style);
    }
  }
  drawPoint() {
    if (!this.pointEntity) {
      const points = this.getPoints();
      const style = this.style;
      this.pointEntity = this.viewer.entities.add({
        position: points[0],
        point: {
          pixelSize: style.pixelSize,
          heightReference: style.heightReference,
          color: style.color
        }
      });
    }
  }
  addTempLine() {
    if (!this.tempLineEntity) {
      const style = this.style;
      const lineStyle = {
        material: style.outlineMaterial,
        lineWidth: style.outlineWidth
      };
      this.tempLineEntity = this.addLineEntity(lineStyle);
    }
  }
  removeTempLine() {
    if (this.tempLineEntity) {
      this.viewer.entities.remove(this.tempLineEntity);
    }
  }
  addLineEntity(style) {
    const entity = this.viewer.entities.add({
      polyline: {
        positions: new this.cesium.CallbackProperty(
          () => this.geometryPoints,
          false
        ),
        width: style.lineWidth,
        material: style.material,
        clampToGround: true
      }
    });
    return entity;
  }
  cartesianToLnglat(cartesian2) {
    const lnglat = this.viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian2);
    const lat = this.cesium.Math.toDegrees(lnglat.latitude);
    const lng = this.cesium.Math.toDegrees(lnglat.longitude);
    return [lng, lat];
  }
  pixelToCartesian(position) {
    const ray = this.viewer.camera.getPickRay(position);
    const cartesian2 = this.viewer.scene.globe.pick(ray, this.viewer.scene);
    return cartesian2;
  }
  /**
   *  创建形状时显示关键点，允许拖动这些点来编辑和生成新形状。
   */
  addControlPoints() {
    const points = this.getPoints();
    this.controlPoints = points.map((position) => {
      return this.viewer.entities.add({
        position,
        point: {
          pixelSize: 10,
          heightReference: this.cesium.HeightReference.CLAMP_TO_GROUND,
          color: this.cesium.Color.RED
        }
      });
    });
    let isDragging = false;
    let draggedIcon = null;
    let dragStartPosition;
    this.controlPointsEventHandler = new this.cesium.ScreenSpaceEventHandler(
      this.viewer.canvas
    );
    this.controlPointsEventHandler.setInputAction((clickEvent) => {
      const pickedObject = this.viewer.scene.pick(clickEvent.position);
      if (this.cesium.defined(pickedObject)) {
        for (let i = 0; i < this.controlPoints.length; i++) {
          if (pickedObject.id._id === this.controlPoints[i]._id) {
            isDragging = true;
            draggedIcon = this.controlPoints[i];
            dragStartPosition = draggedIcon.position._value;
            draggedIcon.index = i;
            break;
          }
        }
        this.viewer.scene.screenSpaceCameraController.enableRotate = false;
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_DOWN);
    this.controlPointsEventHandler.setInputAction((moveEvent) => {
      if (isDragging && draggedIcon) {
        const cartesian2 = this.viewer.camera.pickEllipsoid(
          moveEvent.endPosition,
          this.viewer.scene.globe.ellipsoid
        );
        if (cartesian2) {
          draggedIcon.position.setValue(cartesian2);
          this.updateDraggingPoint(cartesian2, draggedIcon.index);
        }
      }
    }, this.cesium.ScreenSpaceEventType.MOUSE_MOVE);
    this.controlPointsEventHandler.setInputAction(() => {
      if (draggedIcon && !this.cesium.Cartesian3.equals(
        dragStartPosition,
        draggedIcon.position._value
      )) {
        this.eventDispatcher.dispatchEvent(
          "drawUpdate",
          draggedIcon.position._value
        );
      }
      isDragging = false;
      draggedIcon = null;
      this.viewer.scene.screenSpaceCameraController.enableRotate = true;
    }, this.cesium.ScreenSpaceEventType.LEFT_UP);
  }
  removeControlPoints() {
    if (this.controlPoints.length > 0) {
      this.controlPoints.forEach((entity) => {
        this.viewer.entities.remove(entity);
      });
      this.controlPointsEventHandler.removeInputAction(
        this.cesium.ScreenSpaceEventType.LEFT_DOWN
      );
      this.controlPointsEventHandler.removeInputAction(
        this.cesium.ScreenSpaceEventType.MOUSE_MOVE
      );
      this.controlPointsEventHandler.removeInputAction(
        this.cesium.ScreenSpaceEventType.LEFT_UP
      );
    }
  }
  /**
   *  在编辑模式下允许拖动整个形状。
   */
  draggable() {
    let dragging = false;
    let startPosition;
    this.dragEventHandler = new this.cesium.ScreenSpaceEventHandler(
      this.viewer.canvas
    );
    this.dragEventHandler.setInputAction((event) => {
      const pickRay = this.viewer.scene.camera.getPickRay(event.position);
      if (pickRay) {
        const cartesian2 = this.viewer.scene.globe.pick(
          pickRay,
          this.viewer.scene
        );
        const pickedObject = this.viewer.scene.pick(event.position);
        if (this.cesium.defined(pickedObject) && pickedObject.id instanceof this.cesium.Entity) {
          const clickedEntity = pickedObject.id;
          if (this.isCurrentEntity(clickedEntity.id)) {
            dragging = true;
            startPosition = cartesian2;
            this.viewer.scene.screenSpaceCameraController.enableRotate = false;
          }
        }
      }
    }, this.cesium.ScreenSpaceEventType.LEFT_DOWN);
    this.dragEventHandler.setInputAction((event) => {
      var _a, _b;
      if (dragging && startPosition) {
        const newPosition = this.pixelToCartesian(event.endPosition);
        if (newPosition) {
          const translation = this.cesium.Cartesian3.subtract(
            newPosition,
            startPosition,
            new this.cesium.Cartesian3()
          );
          if (this.type === "point") {
            const position = (_a = this.pointEntity.position) == null ? void 0 : _a.getValue(
              this.cesium.JulianDate.now()
            );
            const newPosition2 = this.cesium.Cartesian3.add(
              position,
              translation,
              new this.cesium.Cartesian3()
            );
            (_b = this.pointEntity.position) == null ? void 0 : _b.setValue(newPosition2);
          }
          const newPoints = this.geometryPoints.map((p) => {
            return this.cesium.Cartesian3.add(
              p,
              translation,
              new this.cesium.Cartesian3()
            );
          });
          this.points = this.points.map((p) => {
            return this.cesium.Cartesian3.add(
              p,
              translation,
              new this.cesium.Cartesian3()
            );
          });
          this.controlPoints.map((p) => {
            var _a2, _b2;
            const position = (_a2 = p.position) == null ? void 0 : _a2.getValue(this.cesium.JulianDate.now());
            const newPosition2 = this.cesium.Cartesian3.add(
              position,
              translation,
              new this.cesium.Cartesian3()
            );
            (_b2 = p.position) == null ? void 0 : _b2.setValue(newPosition2);
          });
          this.setGeometryPoints(newPoints);
          if (this.minPointsForShape === 4) {
            this.curveControlPointLeft = this.cesium.Cartesian3.add(
              this.curveControlPointLeft,
              translation,
              new this.cesium.Cartesian3()
            );
            this.curveControlPointRight = this.cesium.Cartesian3.add(
              this.curveControlPointRight,
              translation,
              new this.cesium.Cartesian3()
            );
          }
          startPosition = newPosition;
        }
      } else {
        const pickRay = this.viewer.scene.camera.getPickRay(event.endPosition);
        if (pickRay) {
          const pickedObject = this.viewer.scene.pick(event.endPosition);
          if (this.cesium.defined(pickedObject) && pickedObject.id instanceof this.cesium.Entity) {
            const clickedEntity = pickedObject.id;
            if (this.isCurrentEntity(clickedEntity.id)) {
              this.viewer.scene.canvas.style.cursor = "move";
            } else {
              this.viewer.scene.canvas.style.cursor = "default";
            }
          } else {
            this.viewer.scene.canvas.style.cursor = "default";
          }
        }
      }
    }, this.cesium.ScreenSpaceEventType.MOUSE_MOVE);
    this.dragEventHandler.setInputAction(() => {
      dragging = false;
      startPosition = void 0;
      this.viewer.scene.screenSpaceCameraController.enableRotate = true;
    }, this.cesium.ScreenSpaceEventType.LEFT_UP);
  }
  // 完成编辑，禁用拖动。
  disableDrag() {
    this.dragEventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.LEFT_DOWN
    );
    this.dragEventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.MOUSE_MOVE
    );
    this.dragEventHandler.removeInputAction(
      this.cesium.ScreenSpaceEventType.LEFT_UP
    );
  }
  show(opts) {
    if (opts) {
      const { duration, delay, callback } = opts;
      this.showWithAnimation(duration, delay, callback);
      return;
    } else {
      this.showWithAnimation(0, 0);
    }
  }
  hide(opts) {
    if (opts) {
      const { duration, delay, callback } = opts;
      this.hideWithAnimation(duration, delay, callback);
      return;
    } else {
      this.hideWithAnimation(0, 0);
    }
  }
  showWithAnimation(duration = 2e3, delay = 0, callback) {
    var _a, _b, _c, _d;
    if (this.state !== "hidden") {
      return;
    }
    this.setState("static");
    if (this.type === "polygon") {
      let alpha = 0.3;
      const material = this.styleCache.material;
      if (material.image) {
        alpha = material.color.getValue().alpha;
      } else {
        alpha = material.alpha;
      }
      this.animateOpacity(
        this.polygonEntity,
        alpha,
        duration,
        delay,
        callback,
        this.state
      );
      const outlineAlpha = (_b = (_a = this.styleCache) == null ? void 0 : _a.outlineMaterial) == null ? void 0 : _b.alpha;
      this.animateOpacity(
        this.outlineEntity,
        outlineAlpha || 1,
        duration,
        delay,
        void 0,
        this.state
      );
    } else if (this.type === "line") {
      const material = this.styleCache.material;
      let alpha = 1;
      if (material.image) {
        alpha = material.color.alpha;
      } else if (material.dashLength) {
        const color = material.color.getValue();
        alpha = color.alpha;
      } else {
        alpha = (_d = (_c = this.styleCache) == null ? void 0 : _c.material) == null ? void 0 : _d.alpha;
      }
      this.animateOpacity(
        this.lineEntity,
        alpha,
        duration,
        delay,
        callback,
        this.state
      );
    }
    if (duration != 0) {
      this.setState("animating");
    }
  }
  hideWithAnimation(duration = 2e3, delay = 0, callback) {
    if (this.state === "hidden" || this.state != "static") {
      return;
    }
    this.setState("hidden");
    if (this.type === "polygon") {
      this.animateOpacity(
        this.polygonEntity,
        0,
        duration,
        delay,
        callback,
        this.state
      );
      this.animateOpacity(
        this.outlineEntity,
        0,
        duration,
        delay,
        void 0,
        this.state
      );
    } else if (this.type === "line") {
      this.animateOpacity(
        this.lineEntity,
        0,
        duration,
        delay,
        callback,
        this.state
      );
    }
    if (duration != 0) {
      this.setState("animating");
    }
  }
  animateOpacity(entity, targetAlpha, duration, delay, callback, state) {
    setTimeout(() => {
      const graphics = entity.polygon || entity.polyline || entity.billboard;
      let startAlpha;
      let material = graphics.material;
      if (material) {
        if (material.image && material.color.alpha !== void 0) {
          startAlpha = material.color.alpha;
        } else {
          startAlpha = material.color.getValue().alpha;
        }
      } else {
        const color = graphics.color.getValue();
        startAlpha = color.alpha;
      }
      let startTime = 0;
      const animate = (currentTime) => {
        if (!startTime) {
          startTime = currentTime;
        }
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          const deltalpha = elapsedTime / duration * (targetAlpha - startAlpha);
          const newAlpha = startAlpha + deltalpha;
          if (material) {
            if (material.image && material.color.alpha !== void 0) {
              material.color.alpha = newAlpha;
            } else {
              const newColor = material.color.getValue().withAlpha(newAlpha);
              material.color.setValue(newColor);
            }
          } else {
            const color = graphics.color.getValue();
            const newColor = color.withAlpha(newAlpha);
            graphics.color.setValue(newColor);
          }
          requestAnimationFrame(animate);
        } else {
          callback && callback();
          const restoredState = state ? state : "static";
          if (material) {
            if (material.image && material.color.alpha !== void 0) {
              material.color.alpha = targetAlpha;
            } else {
              const newColor = material.color.getValue().withAlpha(targetAlpha);
              material.color.setValue(newColor);
            }
          } else {
            const color = graphics.color.getValue();
            const newColor = color.withAlpha(targetAlpha);
            graphics.color.setValue(newColor);
          }
          requestAnimationFrame(() => {
            this.setState(restoredState);
          });
        }
      };
      requestAnimationFrame(animate);
    }, delay);
  }
  startGrowthAnimation(opts) {
    const { duration = 2e3, delay = 0, callback } = opts || {};
    if (this.state === "hidden" || this.state != "static") {
      return;
    }
    if (!this.minPointsForShape) {
      console.warn("Growth animation is not supported for this type of shape");
      return;
    }
    this.setState("animating");
    if (this.minPointsForShape === 4) {
      this.doubleArrowGrowthAnimation(duration, delay, callback);
      return;
    }
    setTimeout(() => {
      this.hideWithAnimation(0, 0, void 0);
      const points = this.getPoints();
      let segmentDuration = 0;
      if (this.minPointsForShape === 2) {
        segmentDuration = duration / (points.length - 1);
      } else {
        segmentDuration = duration / (points.length - 2);
      }
      let startTime = Date.now();
      let movingPointIndex = 0;
      this.viewer.clock.shouldAnimate = true;
      const frameListener = (clock) => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= duration) {
          callback && callback();
          startTime = 0;
          this.viewer.clock.shouldAnimate = false;
          this.viewer.clock.onTick.removeEventListener(frameListener);
          this.setState("static");
          return;
        }
        const currentSegment = Math.floor(elapsedTime / segmentDuration);
        let startPoint;
        if (this.minPointsForShape === 2) {
          movingPointIndex = currentSegment + 1;
        } else {
          movingPointIndex = currentSegment + 2;
        }
        startPoint = points[movingPointIndex - 1];
        if (currentSegment == 0 && this.minPointsForShape === 3) {
          startPoint = this.cesium.Cartesian3.midpoint(
            points[0],
            points[1],
            new this.cesium.Cartesian3()
          );
        }
        let endPoint = points[movingPointIndex];
        const t = (elapsedTime - currentSegment * segmentDuration) / segmentDuration;
        const newPosition = this.cesium.Cartesian3.lerp(
          startPoint,
          endPoint,
          t,
          new this.cesium.Cartesian3()
        );
        const tempPoints = points.slice(0, movingPointIndex + 1);
        tempPoints[tempPoints.length - 1] = newPosition;
        const geometryPoints = this.createGraphic(tempPoints);
        this.setGeometryPoints(geometryPoints);
        this.showWithAnimation(0, 0, void 0);
      };
      this.viewer.clock.onTick.addEventListener(frameListener);
    }, delay);
  }
  doubleArrowGrowthAnimation(duration = 2e3, delay = 0, callback) {
    setTimeout(() => {
      this.hideWithAnimation(0, 0, void 0);
      const points = this.getPoints();
      let startTime = Date.now();
      this.viewer.clock.shouldAnimate = true;
      const frameListener = (clock) => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= duration) {
          callback && callback();
          startTime = 0;
          this.viewer.clock.shouldAnimate = false;
          this.viewer.clock.onTick.removeEventListener(frameListener);
          this.setState("static");
          return;
        }
        const midPoint = this.cesium.Cartesian3.midpoint(
          points[0],
          points[1],
          new this.cesium.Cartesian3()
        );
        const startPointLeft = this.cesium.Cartesian3.midpoint(
          points[0],
          midPoint,
          new this.cesium.Cartesian3()
        );
        const startPointRight = this.cesium.Cartesian3.midpoint(
          midPoint,
          points[1],
          new this.cesium.Cartesian3()
        );
        let endPointLeft = points[3];
        let endPointRight = points[2];
        const t = elapsedTime / duration;
        const controlPoint = this.getBezierControlPointforGrowthAnimation();
        let curveControlPointsLeft = [
          startPointLeft,
          controlPoint.left,
          endPointLeft
        ];
        let curveControlPointsRight = [
          startPointRight,
          controlPoint.right,
          endPointRight
        ];
        const newPositionLeft = this.getNewPosition(curveControlPointsLeft, t);
        const newPositionRight = this.getNewPosition(
          curveControlPointsRight,
          t
        );
        const tempPoints = [...points];
        tempPoints[2] = newPositionRight;
        tempPoints[3] = newPositionLeft;
        const geometryPoints = this.createGraphic(tempPoints);
        this.setGeometryPoints(geometryPoints);
        this.showWithAnimation(0, 0, void 0);
      };
      this.viewer.clock.onTick.addEventListener(frameListener);
    }, delay);
  }
  getNewPosition(curveControlPoints, t) {
    curveControlPoints = curveControlPoints.map((item) => {
      return this.cartesianToLnglat(item);
    });
    let curvePoints = getCurvePoints(0.3, curveControlPoints);
    curvePoints = curvePoints.map((p) => {
      return this.cesium.Cartesian3.fromDegrees(p[0], p[1]);
    });
    let newPosition = this.interpolateAlongCurve(curvePoints, t);
    return newPosition;
  }
  interpolateAlongCurve(curvePoints, t) {
    const numPoints = curvePoints.length - 1;
    const index2 = Math.floor(t * numPoints);
    const tSegment = t * numPoints - index2;
    const startPoint = curvePoints[index2];
    const endPoint = curvePoints[index2 + 1];
    const x2 = startPoint.x + (endPoint.x - startPoint.x) * tSegment;
    const y2 = startPoint.y + (endPoint.y - startPoint.y) * tSegment;
    const z = startPoint.z + (endPoint.z - startPoint.z) * tSegment;
    return new this.cesium.Cartesian3(x2, y2, z);
  }
  remove() {
    if (this.type === "polygon") {
      this.viewer.entities.remove(this.polygonEntity);
      this.viewer.entities.remove(this.outlineEntity);
      this.polygonEntity = null;
      this.outlineEntity = null;
      this.lineEntity = null;
    } else if (this.type === "line") {
      this.viewer.entities.remove(this.lineEntity);
    } else if (this.type === "point") {
      this.viewer.entities.remove(this.pointEntity);
    }
    this.removeClickListener();
    this.removeMoveListener();
    this.removeDoubleClickListener();
    this.removeControlPoints();
  }
  on(eventType, listener) {
    this.eventDispatcher.on(eventType, listener);
  }
  off(eventType, listener) {
    this.eventDispatcher.off(eventType, listener);
  }
  isCurrentEntity(id) {
    return this.entityId === id;
  }
  addPoint(cartesian2) {
  }
  getPoints() {
    return [new this.cesium.Cartesian3()];
  }
  updateMovingPoint(cartesian2, index2) {
  }
  updateDraggingPoint(cartesian2, index2) {
  }
  getType() {
    return "polygon";
  }
  createGraphic(points) {
    return points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/arrow/fine-arrow.mjs
var FineArrow = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 2;
    this.cesium = cesium;
    this.tailWidthFactor = 0.1;
    this.neckWidthFactor = 0.2;
    this.headWidthFactor = 0.25;
    this.headAngle = Math.PI / 8.5;
    this.neckAngle = Math.PI / 13;
    this.minPointsForShape = 2;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    if (this.points.length < 2) {
      this.points.push(cartesian2);
      this.onMouseMove();
    }
    if (this.points.length === 2) {
      const geometryPoints = this.createGraphic(this.points);
      this.setGeometryPoints(geometryPoints);
      this.drawPolygon();
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const [p1, p2] = positions.map(this.cartesianToLnglat);
    const len = getBaseLength([p1, p2]);
    const tailWidth = len * this.tailWidthFactor;
    const neckWidth = len * this.neckWidthFactor;
    const headWidth = len * this.headWidthFactor;
    const tailLeft = getThirdPoint(p2, p1, Math.PI / 2, tailWidth, true);
    const tailRight = getThirdPoint(
      p2,
      p1,
      Math.PI / 2,
      tailWidth,
      false
    );
    const headLeft = getThirdPoint(
      p1,
      p2,
      this.headAngle,
      headWidth,
      false
    );
    const headRight = getThirdPoint(
      p1,
      p2,
      this.headAngle,
      headWidth,
      true
    );
    const neckLeft = getThirdPoint(
      p1,
      p2,
      this.neckAngle,
      neckWidth,
      false
    );
    const neckRight = getThirdPoint(
      p1,
      p2,
      this.neckAngle,
      neckWidth,
      true
    );
    const points = [
      ...tailLeft,
      ...neckLeft,
      ...headLeft,
      ...p2,
      ...headRight,
      ...neckRight,
      ...tailRight,
      ...p1
    ];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(points);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/arrow/attack-arrow.mjs
var AttackArrow = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.headHeightFactor = 0.18;
    this.headWidthFactor = 0.3;
    this.neckHeightFactor = 0.85;
    this.neckWidthFactor = 0.15;
    this.headTailFactor = 0.8;
    this.minPointsForShape = 3;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length === 2) {
      this.setGeometryPoints(this.points);
      this.drawPolygon();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else {
      this.removeTempLine();
      const geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
      this.drawPolygon();
    }
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    let [tailLeft, tailRight] = [lnglatPoints[0], lnglatPoints[1]];
    if (isClockWise(lnglatPoints[0], lnglatPoints[1], lnglatPoints[2])) {
      tailLeft = lnglatPoints[1];
      tailRight = lnglatPoints[0];
    }
    const midTail = Mid(tailLeft, tailRight);
    const bonePnts = [midTail].concat(lnglatPoints.slice(2));
    const headPnts = this.getArrowHeadPoints(bonePnts, tailLeft, tailRight);
    const [neckLeft, neckRight] = [headPnts[0], headPnts[4]];
    const tailWidthFactor = MathDistance(tailLeft, tailRight) / getBaseLength(bonePnts);
    const bodyPnts = this.getArrowBodyPoints(
      bonePnts,
      neckLeft,
      neckRight,
      tailWidthFactor
    );
    const count = bodyPnts.length;
    let leftPnts = [tailLeft].concat(bodyPnts.slice(0, count / 2));
    leftPnts.push(neckLeft);
    let rightPnts = [tailRight].concat(bodyPnts.slice(count / 2, count));
    rightPnts.push(neckRight);
    leftPnts = getQBSplinePoints(leftPnts);
    rightPnts = getQBSplinePoints(rightPnts);
    const points = leftPnts.concat(headPnts, rightPnts.reverse());
    const temp2 = [].concat(...points);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp2);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
  getArrowHeadPoints(points, tailLeft, tailRight) {
    try {
      let len = getBaseLength(points);
      let headHeight = len * this.headHeightFactor;
      const headPnt = points[points.length - 1];
      len = MathDistance(headPnt, points[points.length - 2]);
      const tailWidth = MathDistance(tailLeft, tailRight);
      if (headHeight > tailWidth * this.headTailFactor) {
        headHeight = tailWidth * this.headTailFactor;
      }
      const headWidth = headHeight * this.headWidthFactor;
      const neckWidth = headHeight * this.neckWidthFactor;
      headHeight = headHeight > len ? len : headHeight;
      const neckHeight = headHeight * this.neckHeightFactor;
      const headEndPnt = getThirdPoint(
        points[points.length - 2],
        headPnt,
        0,
        headHeight,
        true
      );
      const neckEndPnt = getThirdPoint(
        points[points.length - 2],
        headPnt,
        0,
        neckHeight,
        true
      );
      const headLeft = getThirdPoint(
        headPnt,
        headEndPnt,
        Math.PI / 2,
        headWidth,
        false
      );
      const headRight = getThirdPoint(
        headPnt,
        headEndPnt,
        Math.PI / 2,
        headWidth,
        true
      );
      const neckLeft = getThirdPoint(
        headPnt,
        neckEndPnt,
        Math.PI / 2,
        neckWidth,
        false
      );
      const neckRight = getThirdPoint(
        headPnt,
        neckEndPnt,
        Math.PI / 2,
        neckWidth,
        true
      );
      return [neckLeft, headLeft, headPnt, headRight, neckRight];
    } catch (e) {
      console.log(e);
    }
  }
  getArrowBodyPoints(points, neckLeft, neckRight, tailWidthFactor) {
    const allLen = wholeDistance(points);
    const len = getBaseLength(points);
    const tailWidth = len * tailWidthFactor;
    const neckWidth = MathDistance(neckLeft, neckRight);
    const widthDif = (tailWidth - neckWidth) / 2;
    let [tempLen, leftBodyPnts, rightBodyPnts] = [0, [], []];
    for (let i = 1; i < points.length - 1; i++) {
      const angle2 = getAngleOfThreePoints(points[i - 1], points[i], points[i + 1]) / 2;
      tempLen += MathDistance(points[i - 1], points[i]);
      const w = (tailWidth / 2 - tempLen / allLen * widthDif) / Math.sin(angle2);
      const left = getThirdPoint(
        points[i - 1],
        points[i],
        Math.PI - angle2,
        w,
        true
      );
      const right = getThirdPoint(
        points[i - 1],
        points[i],
        angle2,
        w,
        false
      );
      leftBodyPnts.push(left);
      rightBodyPnts.push(right);
    }
    return leftBodyPnts.concat(rightBodyPnts);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/arrow/swallowtail-attack-arrow.mjs
var SwallowtailAttackArrow = class extends AttackArrow {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.headHeightFactor = 0.18;
    this.headWidthFactor = 0.3;
    this.neckHeightFactor = 0.85;
    this.neckWidthFactor = 0.15;
    this.tailWidthFactor = 0.1;
    this.headTailFactor = 0.8;
    this.swallowTailFactor = 1;
    this.swallowTailPnt = [0, 0];
    this.minPointsForShape = 3;
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    let [tailLeft, tailRight] = [lnglatPoints[0], lnglatPoints[1]];
    if (isClockWise(lnglatPoints[0], lnglatPoints[1], lnglatPoints[2])) {
      tailLeft = lnglatPoints[1];
      tailRight = lnglatPoints[0];
    }
    const midTail = Mid(tailLeft, tailRight);
    const bonePnts = [midTail].concat(lnglatPoints.slice(2));
    const headPnts = this.getArrowHeadPoints(bonePnts, tailLeft, tailRight);
    const [neckLeft, neckRight] = [headPnts[0], headPnts[4]];
    const tailWidth = MathDistance(tailLeft, tailRight);
    const allLen = getBaseLength(bonePnts);
    const len = allLen * this.tailWidthFactor * this.swallowTailFactor;
    this.swallowTailPnt = getThirdPoint(
      bonePnts[1],
      bonePnts[0],
      0,
      len,
      true
    );
    const factor = tailWidth / allLen;
    const bodyPnts = this.getArrowBodyPoints(
      bonePnts,
      neckLeft,
      neckRight,
      factor
    );
    const count = bodyPnts.length;
    let leftPnts = [tailLeft].concat(bodyPnts.slice(0, count / 2));
    leftPnts.push(neckLeft);
    let rightPnts = [tailRight].concat(bodyPnts.slice(count / 2, count));
    rightPnts.push(neckRight);
    leftPnts = getQBSplinePoints(leftPnts);
    rightPnts = getQBSplinePoints(rightPnts);
    const points = leftPnts.concat(headPnts, rightPnts.reverse(), [
      this.swallowTailPnt,
      leftPnts[0]
    ]);
    const temp2 = [].concat(...points);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp2);
    return cartesianPoints;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/arrow/squad-combat.mjs
var SquadCombat = class extends AttackArrow {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.headHeightFactor = 0.18;
    this.headWidthFactor = 0.3;
    this.neckHeightFactor = 0.85;
    this.neckWidthFactor = 0.15;
    this.tailWidthFactor = 0.1;
    this.minPointsForShape = 2;
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length > 2) {
      this.lineEntity && this.viewer.entities.remove(this.lineEntity);
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length < 2) {
      return;
    } else {
      const geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
      this.drawPolygon();
    }
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const tailPnts = this.getTailPoints(lnglatPoints);
    const headPnts = this.getArrowHeadPoints(
      lnglatPoints,
      tailPnts[0],
      tailPnts[1]
    );
    const neckLeft = headPnts[0];
    const neckRight = headPnts[4];
    const bodyPnts = this.getArrowBodyPoints(
      lnglatPoints,
      neckLeft,
      neckRight,
      this.tailWidthFactor
    );
    const count = bodyPnts.length;
    let leftPnts = [tailPnts[0]].concat(bodyPnts.slice(0, count / 2));
    leftPnts.push(neckLeft);
    let rightPnts = [tailPnts[1]].concat(bodyPnts.slice(count / 2, count));
    rightPnts.push(neckRight);
    leftPnts = getQBSplinePoints(leftPnts);
    rightPnts = getQBSplinePoints(rightPnts);
    const points = leftPnts.concat(headPnts, rightPnts.reverse());
    const temp2 = [].concat(...points);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp2);
    return cartesianPoints;
  }
  getTailPoints(points) {
    const allLen = getBaseLength(points);
    const tailWidth = allLen * this.tailWidthFactor;
    const tailLeft = getThirdPoint(
      points[1],
      points[0],
      Math.PI / 2,
      tailWidth,
      false
    );
    const tailRight = getThirdPoint(
      points[1],
      points[0],
      Math.PI / 2,
      tailWidth,
      true
    );
    return [tailLeft, tailRight];
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/arrow/swallowtail-squad-combat.mjs
var SwallowtailSquadCombat = class extends SquadCombat {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.headHeightFactor = 0.18;
    this.headWidthFactor = 0.3;
    this.neckHeightFactor = 0.85;
    this.neckWidthFactor = 0.15;
    this.tailWidthFactor = 0.1;
    this.swallowTailFactor = 1;
    this.minPointsForShape = 2;
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const tailPnts = this.getTailPoints(lnglatPoints);
    const headPnts = this.getArrowHeadPoints(
      lnglatPoints,
      tailPnts[0],
      tailPnts[2]
    );
    const neckLeft = headPnts[0];
    const neckRight = headPnts[4];
    const bodyPnts = this.getArrowBodyPoints(
      lnglatPoints,
      neckLeft,
      neckRight,
      this.tailWidthFactor
    );
    const count = bodyPnts.length;
    let leftPnts = [tailPnts[0]].concat(bodyPnts.slice(0, count / 2));
    leftPnts.push(neckLeft);
    let rightPnts = [tailPnts[2]].concat(bodyPnts.slice(count / 2, count));
    rightPnts.push(neckRight);
    leftPnts = getQBSplinePoints(leftPnts);
    rightPnts = getQBSplinePoints(rightPnts);
    const points = leftPnts.concat(headPnts, rightPnts.reverse(), [
      tailPnts[1],
      leftPnts[0]
    ]);
    const temp2 = [].concat(...points);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp2);
    return cartesianPoints;
  }
  getTailPoints(points) {
    const allLen = getBaseLength(points);
    const tailWidth = allLen * this.tailWidthFactor;
    const tailLeft = getThirdPoint(
      points[1],
      points[0],
      Math.PI / 2,
      tailWidth,
      false
    );
    const tailRight = getThirdPoint(
      points[1],
      points[0],
      Math.PI / 2,
      tailWidth,
      true
    );
    const len = tailWidth * this.swallowTailFactor;
    const swallowTailPnt = getThirdPoint(
      points[1],
      points[0],
      0,
      len,
      true
    );
    return [tailLeft, swallowTailPnt, tailRight];
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/arrow/straight-arrow.mjs
var StraightArrow = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 3e6;
    this.cesium = cesium;
    this.minPointsForShape = 2;
    this.setState("drawing");
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    if (this.points.length < 2) {
      this.points.push(cartesian2);
      this.onMouseMove();
    }
    if (this.points.length === 2) {
      const geometryPoints = this.createGraphic(this.points);
      this.setGeometryPoints(geometryPoints);
      this.drawLine();
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const [pnt1, pnt2] = positions.map(this.cartesianToLnglat);
    const distance2 = MathDistance(pnt1, pnt2);
    let len = distance2 / this.arrowLengthScale;
    len = len > this.maxArrowLength ? this.maxArrowLength : len;
    const leftPnt = getThirdPoint(
      pnt1,
      pnt2,
      Math.PI / 6,
      len / 2,
      false
    );
    const rightPnt = getThirdPoint(
      pnt1,
      pnt2,
      Math.PI / 6,
      len / 2,
      true
    );
    const points = [...pnt1, ...pnt2, ...leftPnt, ...pnt2, ...rightPnt];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(points);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/arrow/curved-arrow.mjs
var CurvedArrow = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 3e6;
    this.cesium = cesium;
    this.t = 0.3;
    this.minPointsForShape = 2;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length < 2) {
      this.onMouseMove();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    let geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  createStraightArrow(positions) {
    const [pnt1, pnt2] = positions.map(this.cartesianToLnglat);
    const distance2 = MathDistance(pnt1, pnt2);
    let len = distance2 / this.arrowLengthScale;
    len = len > this.maxArrowLength ? this.maxArrowLength : len;
    const leftPnt = getThirdPoint(
      pnt1,
      pnt2,
      Math.PI / 6,
      len / 2,
      false
    );
    const rightPnt = getThirdPoint(
      pnt1,
      pnt2,
      Math.PI / 6,
      len / 2,
      true
    );
    const points = [...pnt1, ...pnt2, ...leftPnt, ...pnt2, ...rightPnt];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(points);
    return cartesianPoints;
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    if (positions.length === 2) {
      return this.createStraightArrow(positions);
    }
    const curvePoints = getCurvePoints(this.t, lnglatPoints);
    lnglatPoints[lnglatPoints.length - 2];
    const pnt2 = lnglatPoints[lnglatPoints.length - 1];
    const distance2 = wholeDistance(lnglatPoints);
    let len = distance2 / this.arrowLengthScale;
    len = len > this.maxArrowLength ? this.maxArrowLength : len;
    const leftPnt = getThirdPoint(
      curvePoints[curvePoints.length - 2],
      curvePoints[curvePoints.length - 1],
      Math.PI / 6,
      len / 2,
      false
    );
    const rightPnt = getThirdPoint(
      curvePoints[curvePoints.length - 2],
      curvePoints[curvePoints.length - 1],
      Math.PI / 6,
      len / 2,
      true
    );
    const temp2 = [].concat(...curvePoints);
    const points = [...temp2, ...leftPnt, ...pnt2, ...rightPnt];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(points);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/arrow/assault-direction.mjs
var AssaultDirection = class extends FineArrow {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 2;
    this.cesium = cesium;
    this.tailWidthFactor = 0.08;
    this.neckWidthFactor = 0.1;
    this.headWidthFactor = 0.13;
    this.headAngle = Math.PI / 4;
    this.neckAngle = Math.PI * 0.17741;
    this.minPointsForShape = 2;
    this.setState("drawing");
  }
  createGraphic(positions) {
    const [p1, p2] = positions.map(this.cartesianToLnglat);
    const len = getBaseLength([p1, p2]) * 1.5;
    const tailWidth = len * this.tailWidthFactor;
    const neckWidth = len * this.neckWidthFactor;
    const headWidth = len * this.headWidthFactor;
    const tailLeft = getThirdPoint(p2, p1, Math.PI / 2, tailWidth, true);
    const tailRight = getThirdPoint(
      p2,
      p1,
      Math.PI / 2,
      tailWidth,
      false
    );
    const headLeft = getThirdPoint(
      p1,
      p2,
      this.headAngle,
      headWidth,
      false
    );
    const headRight = getThirdPoint(
      p1,
      p2,
      this.headAngle,
      headWidth,
      true
    );
    const neckLeft = getThirdPoint(
      p1,
      p2,
      this.neckAngle,
      neckWidth,
      false
    );
    const neckRight = getThirdPoint(
      p1,
      p2,
      this.neckAngle,
      neckWidth,
      true
    );
    const points = [
      ...tailLeft,
      ...neckLeft,
      ...headLeft,
      ...p2,
      ...headRight,
      ...neckRight,
      ...tailRight,
      ...p1
    ];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(points);
    return cartesianPoints;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/arrow/double-arrow.mjs
var DoubleArrow = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 2;
    this.llBodyPnts = [];
    this.rrBodyPnts = [];
    this.cesium = cesium;
    this.headHeightFactor = 0.25;
    this.headWidthFactor = 0.3;
    this.neckHeightFactor = 0.85;
    this.neckWidthFactor = 0.15;
    this.connPoint = [0, 0];
    this.tempPoint4 = [0, 0];
    this.minPointsForShape = 4;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length === 2) {
      this.setGeometryPoints(this.points);
      this.drawPolygon();
    } else if (this.points.length === 3) {
      this.lineEntity && this.viewer.entities.remove(this.lineEntity);
    } else {
      this.finishDrawing();
    }
  }
  finishDrawing() {
    this.curveControlPointLeft = this.cesium.Cartesian3.fromDegrees(
      this.llBodyPnts[2][0],
      this.llBodyPnts[2][1]
    );
    this.curveControlPointRight = this.cesium.Cartesian3.fromDegrees(
      this.rrBodyPnts[1][0],
      this.rrBodyPnts[1][1]
    );
    super.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else if (tempPoints.length > 2) {
      this.removeTempLine();
      const geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
      this.drawPolygon();
    }
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const [pnt1, pnt2, pnt3] = [
      lnglatPoints[0],
      lnglatPoints[1],
      lnglatPoints[2]
    ];
    const count = lnglatPoints.length;
    if (count === 3) {
      this.tempPoint4 = this.getTempPoint4(pnt1, pnt2, pnt3);
      this.connPoint = Mid(pnt1, pnt2);
    } else if (count === 4) {
      this.tempPoint4 = lnglatPoints[3];
      this.connPoint = Mid(pnt1, pnt2);
    } else {
      this.tempPoint4 = lnglatPoints[3];
      this.connPoint = lnglatPoints[4];
    }
    let leftArrowPnts;
    let rightArrowPnts;
    this.isClockWise = isClockWise(pnt1, pnt2, pnt3);
    if (this.isClockWise) {
      leftArrowPnts = this.getArrowPoints(
        pnt1,
        this.connPoint,
        this.tempPoint4,
        false
      );
      rightArrowPnts = this.getArrowPoints(this.connPoint, pnt2, pnt3, true);
    } else {
      leftArrowPnts = this.getArrowPoints(pnt2, this.connPoint, pnt3, false);
      rightArrowPnts = this.getArrowPoints(
        this.connPoint,
        pnt1,
        this.tempPoint4,
        true
      );
    }
    const m = leftArrowPnts.length;
    const t = (m - 5) / 2;
    const llBodyPnts = leftArrowPnts.slice(0, t);
    const lArrowPnts = leftArrowPnts.slice(t, t + 5);
    let lrBodyPnts = leftArrowPnts.slice(t + 5, m);
    this.llBodyPnts = llBodyPnts;
    let rlBodyPnts = rightArrowPnts.slice(0, t);
    const rArrowPnts = rightArrowPnts.slice(t, t + 5);
    const rrBodyPnts = rightArrowPnts.slice(t + 5, m);
    this.rrBodyPnts = rrBodyPnts;
    rlBodyPnts = getBezierPoints(rlBodyPnts);
    const bodyPnts = getBezierPoints(
      rrBodyPnts.concat(llBodyPnts.slice(1))
    );
    lrBodyPnts = getBezierPoints(lrBodyPnts);
    const pnts = rlBodyPnts.concat(
      rArrowPnts,
      bodyPnts,
      lArrowPnts,
      lrBodyPnts
    );
    const temp2 = [].concat(...pnts);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp2);
    return cartesianPoints;
  }
  getTempPoint4(linePnt1, linePnt2, point2) {
    const midPnt = Mid(linePnt1, linePnt2);
    const len = MathDistance(midPnt, point2);
    const angle2 = getAngleOfThreePoints(linePnt1, midPnt, point2);
    let symPnt = [0, 0];
    let distance1;
    let distance2;
    let mid;
    if (angle2 < Math.PI / 2) {
      distance1 = len * Math.sin(angle2);
      distance2 = len * Math.cos(angle2);
      mid = getThirdPoint(
        linePnt1,
        midPnt,
        Math.PI / 2,
        distance1,
        false
      );
      symPnt = getThirdPoint(midPnt, mid, Math.PI / 2, distance2, true);
    } else if (angle2 >= Math.PI / 2 && angle2 < Math.PI) {
      distance1 = len * Math.sin(Math.PI - angle2);
      distance2 = len * Math.cos(Math.PI - angle2);
      mid = getThirdPoint(
        linePnt1,
        midPnt,
        Math.PI / 2,
        distance1,
        false
      );
      symPnt = getThirdPoint(midPnt, mid, Math.PI / 2, distance2, false);
    } else if (angle2 >= Math.PI && angle2 < Math.PI * 1.5) {
      distance1 = len * Math.sin(angle2 - Math.PI);
      distance2 = len * Math.cos(angle2 - Math.PI);
      mid = getThirdPoint(linePnt1, midPnt, Math.PI / 2, distance1, true);
      symPnt = getThirdPoint(midPnt, mid, Math.PI / 2, distance2, true);
    } else {
      distance1 = len * Math.sin(Math.PI * 2 - angle2);
      distance2 = len * Math.cos(Math.PI * 2 - angle2);
      mid = getThirdPoint(linePnt1, midPnt, Math.PI / 2, distance1, true);
      symPnt = getThirdPoint(midPnt, mid, Math.PI / 2, distance2, false);
    }
    return symPnt;
  }
  getArrowPoints(pnt1, pnt2, pnt3, clockWise) {
    const midPnt = Mid(pnt1, pnt2);
    const len = MathDistance(midPnt, pnt3);
    let midPnt1 = getThirdPoint(pnt3, midPnt, 0, len * 0.3, true);
    let midPnt2 = getThirdPoint(pnt3, midPnt, 0, len * 0.5, true);
    midPnt1 = getThirdPoint(
      midPnt,
      midPnt1,
      Math.PI / 2,
      len / 5,
      clockWise
    );
    midPnt2 = getThirdPoint(
      midPnt,
      midPnt2,
      Math.PI / 2,
      len / 4,
      clockWise
    );
    const points = [midPnt, midPnt1, midPnt2, pnt3];
    const arrowPnts = this.getArrowHeadPoints(points);
    if (arrowPnts && Array.isArray(arrowPnts) && arrowPnts.length > 0) {
      const neckLeftPoint = arrowPnts[0];
      const neckRightPoint = arrowPnts[4];
      const tailWidthFactor = MathDistance(pnt1, pnt2) / getBaseLength(points) / 2;
      const bodyPnts = this.getArrowBodyPoints(
        points,
        neckLeftPoint,
        neckRightPoint,
        tailWidthFactor
      );
      if (bodyPnts) {
        const n = bodyPnts.length;
        let lPoints = bodyPnts.slice(0, n / 2);
        let rPoints = bodyPnts.slice(n / 2, n);
        lPoints.push(neckLeftPoint);
        rPoints.push(neckRightPoint);
        lPoints = lPoints.reverse();
        lPoints.push(pnt2);
        rPoints = rPoints.reverse();
        rPoints.push(pnt1);
        return lPoints.reverse().concat(arrowPnts, rPoints);
      }
    } else {
      throw new Error("Interpolation Error");
    }
  }
  getArrowBodyPoints(points, neckLeft, neckRight, tailWidthFactor) {
    const allLen = wholeDistance(points);
    const len = getBaseLength(points);
    const tailWidth = len * tailWidthFactor;
    const neckWidth = MathDistance(neckLeft, neckRight);
    const widthDif = (tailWidth - neckWidth) / 2;
    let tempLen = 0;
    let leftBodyPnts = [];
    let rightBodyPnts = [];
    for (let i = 1; i < points.length - 1; i++) {
      const angle2 = getAngleOfThreePoints(points[i - 1], points[i], points[i + 1]) / 2;
      tempLen += MathDistance(points[i - 1], points[i]);
      const w = (tailWidth / 2 - tempLen / allLen * widthDif) / Math.sin(angle2);
      const left = getThirdPoint(
        points[i - 1],
        points[i],
        Math.PI - angle2,
        w,
        true
      );
      const right = getThirdPoint(
        points[i - 1],
        points[i],
        angle2,
        w,
        false
      );
      leftBodyPnts.push(left);
      rightBodyPnts.push(right);
    }
    return leftBodyPnts.concat(rightBodyPnts);
  }
  getArrowHeadPoints(points) {
    const len = getBaseLength(points);
    const headHeight = len * this.headHeightFactor;
    const headPnt = points[points.length - 1];
    const headWidth = headHeight * this.headWidthFactor;
    const neckWidth = headHeight * this.neckWidthFactor;
    const neckHeight = headHeight * this.neckHeightFactor;
    const headEndPnt = getThirdPoint(
      points[points.length - 2],
      headPnt,
      0,
      headHeight,
      true
    );
    const neckEndPnt = getThirdPoint(
      points[points.length - 2],
      headPnt,
      0,
      neckHeight,
      true
    );
    const headLeft = getThirdPoint(
      headPnt,
      headEndPnt,
      Math.PI / 2,
      headWidth,
      false
    );
    const headRight = getThirdPoint(
      headPnt,
      headEndPnt,
      Math.PI / 2,
      headWidth,
      true
    );
    const neckLeft = getThirdPoint(
      headPnt,
      neckEndPnt,
      Math.PI / 2,
      neckWidth,
      false
    );
    const neckRight = getThirdPoint(
      headPnt,
      neckEndPnt,
      Math.PI / 2,
      neckWidth,
      true
    );
    return [neckLeft, headLeft, headPnt, headRight, neckRight];
  }
  getPoints() {
    return this.points;
  }
  getBezierControlPointforGrowthAnimation() {
    return this.isClockWise ? {
      left: this.curveControlPointLeft,
      right: this.curveControlPointRight
    } : {
      right: this.curveControlPointLeft,
      left: this.curveControlPointRight
    };
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/line/freehand-line.mjs
var FreehandLine = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.setState("drawing");
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    this.points.push(cartesian2);
    this.setGeometryPoints(this.points);
    this.drawLine();
    this.eventDispatcher.dispatchEvent("drawUpdate", cartesian2);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    this.setGeometryPoints(this.points);
    this.drawLine();
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/polygon/freehand-polygon.mjs
var FreehandPolygon = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length > 2) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length > 2) {
      this.setGeometryPoints(this.points);
      this.drawPolygon();
      this.eventDispatcher.dispatchEvent("drawUpdate", cartesian2);
    }
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    this.setGeometryPoints(this.points);
    this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/line/curve.mjs
var Curve = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 3e6;
    this.cesium = cesium;
    this.t = 0.3;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Points are only added upon click events.
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length === 2) {
      this.setGeometryPoints(this.points);
      this.drawLine();
    }
  }
  /**
   * Draw the shape based on the mouse movement position during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    let geometryPoints = [];
    if (tempPoints.length === 2) {
      this.setGeometryPoints(tempPoints);
      this.drawLine();
    } else {
      geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
    }
  }
  /**
   * During editing mode, drag key points to update the corresponding data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * Generate geometric shape points based on key points..
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const curvePoints = getCurvePoints(this.t, lnglatPoints);
    const temp2 = [].concat(...curvePoints);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp2);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/polygon/ellipse.mjs
var Ellipse = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length > 1) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const pnt1 = lnglatPoints[0];
    const pnt2 = lnglatPoints[1];
    const center2 = Mid(pnt1, pnt2);
    const majorRadius = Math.abs((pnt1[0] - pnt2[0]) / 2);
    const minorRadius = Math.abs((pnt1[1] - pnt2[1]) / 2);
    const res = this.generatePoints(center2, majorRadius, minorRadius);
    const temp2 = [].concat(...res);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp2);
    return cartesianPoints;
  }
  generatePoints(center2, majorRadius, minorRadius) {
    let [x2, y2, angle2, points] = [null, null, 0, []];
    for (let i = 0; i <= 100; i++) {
      angle2 = Math.PI * 2 * i / 100;
      x2 = center2[0] + majorRadius * Math.cos(angle2);
      y2 = center2[1] + minorRadius * Math.sin(angle2);
      points.push([x2, y2]);
    }
    return points;
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/polygon/lune.mjs
var Lune = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length === 2) ;
    else if (this.points.length > 2) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    if (lnglatPoints.length === 2) {
      const mid = Mid(lnglatPoints[0], lnglatPoints[1]);
      const d = MathDistance(lnglatPoints[0], mid);
      const pnt = getThirdPoint(
        lnglatPoints[0],
        mid,
        Math.PI / 2,
        d,
        false
      );
      lnglatPoints.push(pnt);
    }
    let [pnt1, pnt2, pnt3, startAngle, endAngle] = [
      lnglatPoints[0],
      lnglatPoints[1],
      lnglatPoints[2],
      void 0,
      void 0
    ];
    const center2 = getCircleCenterOfThreePoints(pnt1, pnt2, pnt3);
    const radius = MathDistance(pnt1, center2);
    const angle1 = getAzimuth(pnt1, center2);
    const angle2 = getAzimuth(pnt2, center2);
    if (isClockWise(pnt1, pnt2, pnt3)) {
      startAngle = angle2;
      endAngle = angle1;
    } else {
      startAngle = angle1;
      endAngle = angle2;
    }
    let points = getArcPoints(center2, radius, startAngle, endAngle);
    const temp2 = [].concat(...points);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp2);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/polygon/rectangle.mjs
var Rectangle = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length > 1) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    const [p1, p2] = positions.map(this.cartesianToLnglat);
    const coords = [...p1, p1[0], p2[1], ...p2, p2[0], p1[1], ...p1];
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(coords);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/polygon/triangle.mjs
var Triangle = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length === 3) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else {
      this.removeTempLine();
      this.drawPolygon();
    }
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    this.setGeometryPoints(this.points);
    this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/polygon/polygon.mjs
var Polygon = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length === 1) {
      this.onMouseMove();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else {
      this.removeTempLine();
      this.drawPolygon();
    }
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    this.setGeometryPoints(this.points);
    this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/polygon/circle.mjs
var Circle = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length > 1) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const center2 = lnglatPoints[0];
    const pnt2 = lnglatPoints[1];
    const radius = MathDistance(center2, pnt2);
    const res = this.generatePoints(center2, radius);
    const temp2 = [].concat(...res);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp2);
    return cartesianPoints;
  }
  generatePoints(center2, radius) {
    let x2, y2, angle2;
    const points = [];
    for (let i = 0; i <= 100; i++) {
      angle2 = Math.PI * 2 * i / 100;
      x2 = center2[0] + radius * Math.cos(angle2);
      y2 = center2[1] + radius * Math.sin(angle2);
      points.push([x2, y2]);
    }
    return points;
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/polygon/sector.mjs
var Sector = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length === 3) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    this.setGeometryPoints(tempPoints);
    if (tempPoints.length === 2) {
      this.addTempLine();
    } else {
      this.removeTempLine();
      const geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
      this.drawPolygon();
    }
  }
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    const [center2, pnt2, pnt3] = [
      lnglatPoints[0],
      lnglatPoints[1],
      lnglatPoints[2]
    ];
    const radius = MathDistance(pnt2, center2);
    const startAngle = getAzimuth(pnt2, center2);
    const endAngle = getAzimuth(pnt3, center2);
    const res = getArcPoints(center2, radius, startAngle, endAngle);
    res.push(center2, res[0]);
    const temp2 = [].concat(...res);
    const cartesianPoints = this.cesium.Cartesian3.fromDegreesArray(temp2);
    return cartesianPoints;
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/polygon/gathering-place.mjs
var GatheringPlace = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.t = 0.4;
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length === 1) {
      this.onMouseMove();
    } else if (this.points.length === 2) ;
    else if (this.points.length > 2) {
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    let arr = [];
    let lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    }).slice(0);
    if (lnglatPoints.length === 2) {
      const mid2 = Mid(lnglatPoints[0], lnglatPoints[1]);
      const d = MathDistance(lnglatPoints[0], mid2);
      const pnt = getThirdPoint(
        lnglatPoints[0],
        mid2,
        Math.PI / 2,
        d,
        true
      );
      lnglatPoints = [lnglatPoints[0], pnt, lnglatPoints[1]];
    }
    let mid = Mid(lnglatPoints[0], lnglatPoints[2]);
    lnglatPoints.push(mid, lnglatPoints[0], lnglatPoints[1]);
    let [normals, pnt1, pnt2, pnt3, pList] = [
      [],
      void 0,
      void 0,
      void 0,
      []
    ];
    for (let i = 0; i < lnglatPoints.length - 2; i++) {
      pnt1 = lnglatPoints[i];
      pnt2 = lnglatPoints[i + 1];
      pnt3 = lnglatPoints[i + 2];
      let normalPoints = getBisectorNormals(
        this.t,
        pnt1,
        pnt2,
        pnt3
      );
      normals = normals.concat(normalPoints);
    }
    let count = normals.length;
    normals = [normals[count - 1]].concat(normals.slice(0, count - 1));
    for (let i = 0; i < lnglatPoints.length - 2; i++) {
      pnt1 = lnglatPoints[i];
      pnt2 = lnglatPoints[i + 1];
      pList.push(pnt1);
      for (let t = 0; t <= 40; t++) {
        let pnt = getCubicValue(
          t / 40,
          pnt1,
          normals[i * 2],
          normals[i * 2 + 1],
          pnt2
        );
        pList.push(pnt);
      }
      pList.push(pnt2);
    }
    let points = pList;
    for (let i = 0; i < points.length; i++) {
      arr = arr.concat(points[i]);
    }
    const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/line/arc.mjs
var Arc = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 3e6;
    this.cesium = cesium;
    this.t = 0.3;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Points are only added upon click events.
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length === 2) {
      this.setGeometryPoints(this.points);
      this.drawLine();
    } else if (this.points.length > 2) {
      this.finishDrawing();
    }
  }
  /**
   * Draw the shape based on the mouse movement position during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    let geometryPoints = [];
    if (tempPoints.length === 2) {
      this.setGeometryPoints(tempPoints);
      this.drawLine();
    } else {
      geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
    }
  }
  /**
   * During editing mode, drag key points to update the corresponding data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * Generate geometric shape points based on key points..
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    let count = lnglatPoints.length;
    let arr = [];
    if (count < 2) return;
    if (count === 2) {
      for (let i = 0; i < lnglatPoints.length; i++) {
        arr = arr.concat(lnglatPoints[i]);
      }
      const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
      return cartesianPoints;
    } else {
      let [pnt1, pnt2, pnt3, startAngle, endAngle] = [
        lnglatPoints[0],
        lnglatPoints[1],
        lnglatPoints[2],
        null,
        null
      ];
      let center2 = getCircleCenterOfThreePoints(pnt1, pnt2, pnt3);
      let radius = MathDistance(pnt1, center2);
      let angle1 = getAzimuth(pnt1, center2);
      let angle2 = getAzimuth(pnt2, center2);
      if (isClockWise(pnt1, pnt2, pnt3)) {
        startAngle = angle2;
        endAngle = angle1;
      } else {
        startAngle = angle1;
        endAngle = angle2;
      }
      let points = getArcPoints(center2, radius, startAngle, endAngle);
      for (let i = 0; i < points.length; i++) {
        arr = arr.concat(points[i]);
      }
      const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
      return cartesianPoints;
    }
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/line/polyline.mjs
var Polyline = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.arrowLengthScale = 5;
    this.maxArrowLength = 3e6;
    this.cesium = cesium;
    this.t = 0.3;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Points are only added upon click events.
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length === 2) {
      this.setGeometryPoints(this.points);
      this.drawLine();
    }
  }
  /**
   * Draw the shape based on the mouse movement position during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    let geometryPoints = [];
    if (tempPoints.length === 2) {
      this.setGeometryPoints(tempPoints);
      this.drawLine();
    } else {
      geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
    }
  }
  /**
   * During editing mode, drag key points to update the corresponding data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }
  /**
   * Generate geometric shape points based on key points..
   */
  createGraphic(positions) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    let arr = [];
    for (let i = 0; i < lnglatPoints.length; i++) {
      arr = arr.concat(lnglatPoints[i]);
    }
    const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
    return cartesianPoints;
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/polygon/closed-curve.mjs
var ClosedCurve = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.freehand = true;
    this.t = 0.4;
    this.setState("drawing");
    this.onDoubleClick();
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length === 1) {
      this.onMouseMove();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }
  createGraphic(positions) {
    let arr = [];
    let lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    if (lnglatPoints.length === 2) {
      for (let i = 0; i < lnglatPoints.length; i++) {
        arr = arr.concat(lnglatPoints[i]);
      }
      const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
      return cartesianPoints;
    } else {
      let pnts = lnglatPoints.slice(0);
      pnts.push(pnts[0], pnts[1]);
      let [normals, pList] = [[], []];
      for (let i = 0; i < pnts.length - 2; i++) {
        let normalPoints = getBisectorNormals(
          this.t,
          pnts[i],
          pnts[i + 1],
          pnts[i + 2]
        );
        normals = normals.concat(normalPoints);
      }
      let count = normals.length;
      normals = [normals[count - 1]].concat(normals.slice(0, count - 1));
      for (let i = 0; i < pnts.length - 2; i++) {
        let pnt1 = pnts[i];
        let pnt2 = pnts[i + 1];
        pList.push(pnt1);
        for (let t = 0; t <= 40; t++) {
          let pnt = getCubicValue(
            t / 40,
            pnt1,
            normals[i * 2],
            normals[i * 2 + 1],
            pnt2
          );
          pList.push(pnt);
        }
        pList.push(pnt2);
      }
      let points = pList;
      for (let i = 0; i < points.length; i++) {
        arr = arr.concat(points[i]);
      }
      const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
      return cartesianPoints;
    }
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/point/point.mjs
var Point = class extends Base {
  constructor(cesium, viewer, style) {
    super(cesium, viewer, style);
    this.points = [];
    this.cesium = cesium;
    this.setState("drawing");
  }
  getType() {
    return "point";
  }
  /**
   * Add points only on click events
   */
  addPoint(cartesian2) {
    this.points.push(cartesian2);
    if (this.points.length === 1) {
      this.drawPoint();
      this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian2) {
    const tempPoints = [...this.points, cartesian2];
    this.setGeometryPoints(tempPoints);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian2, index2) {
    this.points[index2] = cartesian2;
    this.setGeometryPoints(this.points);
  }
  getPoints() {
    return this.points;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/plot/index.mjs
var CesiumPlot = {
  FineArrow,
  AttackArrow,
  SwallowtailAttackArrow,
  SquadCombat,
  SwallowtailSquadCombat,
  StraightArrow,
  CurvedArrow,
  AssaultDirection,
  DoubleArrow,
  FreehandLine,
  FreehandPolygon,
  Curve,
  Ellipse,
  Lune,
  Reactangle: Rectangle,
  Triangle,
  Polygon,
  Circle,
  Sector,
  GatheringPlace,
  Arc,
  Polyline,
  ClosedCurve,
  Point
};
CesiumPlot.createGeometryFromData = (cesium, viewer, opts) => {
  console.log("执行了");
  const { type, style, cartesianPoints } = opts;
  const geometry = new CesiumPlot[type](cesium, viewer, style);
  geometry.points = cartesianPoints;
  const geometryPoints = geometry.createGraphic(cartesianPoints);
  geometry.setGeometryPoints(geometryPoints);
  if (geometry.type == "polygon") {
    geometry.drawPolygon();
  } else {
    geometry.drawLine();
  }
  geometry.finishDrawing();
  geometry.onClick();
  return geometry;
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-environment/useEnvironment.mjs
function FS_Snow() {
  return "#version 300 es\n    precision highp float;\n    uniform sampler2D colorTexture;\n    in vec2 v_textureCoordinates;\n    out vec4 fragColor;\n\n    float snow(vec2 uv, float scale) {\n        float time = czm_frameNumber / 60.0;\n        float w = smoothstep(1.0, 0.0, -uv.y * (scale / 10.0));\n        if (w < 0.1) return 0.0;\n        uv += time / scale;\n        uv.y += time * 2.0 / scale;\n        uv.x += sin(uv.y + time * 0.5) / scale;\n        uv *= scale;\n        vec2 s = floor(uv), f = fract(uv), p;\n        float k = 3.0, d;\n        p = 0.5 + 0.35 * sin(11.0 * fract(sin((s + p + scale) * mat2(7, 3, 6, 5)) * 5.0)) - f;\n        d = length(p);\n        k = min(d, k);\n        k = smoothstep(0.0, k, sin(f.x + f.y) * 0.01);\n        return k * w;\n    }\n\n    void main(void) {\n        vec2 resolution = czm_viewport.zw;\n        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);\n        vec3 finalColor = vec3(0.0);\n        float c = 0.0;\n        c += snow(uv, 30.0) * 0.0;\n        c += snow(uv, 20.0) * 0.0;\n        c += snow(uv, 15.0) * 0.0;\n        c += snow(uv, 10.0);\n        c += snow(uv, 8.0);\n        c += snow(uv, 6.0);\n        c += snow(uv, 5.0);\n        finalColor = vec3(c);\n        fragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(finalColor, 1.0), 0.3);\n    }\n";
}
function FS_Rain() {
  return `#version 300 es
    precision highp float;
    uniform sampler2D colorTexture;
    in vec2 v_textureCoordinates;
    out vec4 fragColor;

    float hash(float x) {
      return fract(sin(x * 23.3) * 13.13);
    }

    void main(void) {
      float time = czm_frameNumber / 60.0;
      vec2 resolution = czm_viewport.zw;

      vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
      vec3 c = vec3(0.6, 0.7, 0.8);

      float a = -0.4;
      float si = sin(a), co = cos(a);
      uv *= mat2(co, -si, si, co);
      uv *= length(uv + vec2(0, 4.9)) * 0.3 + 1.0;

      float v = 1.0 - sin(hash(floor(uv.x * 100.0)) * 2.0);
      float b = clamp(abs(sin(20.0 * time * v + uv.y * (5.0 / (2.0 + v)))) - 0.95, 0.0, 1.0) * 20.0;
      c *= v * b;

      fragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(c, 1.0), 0.5);
    }
  `;
}
function addSnowScene(viewer) {
  let collection = viewer.scene.postProcessStages;
  let fs_snow = FS_Snow();
  let snow = new Cesium.PostProcessStage({
    name: "czm_snow",
    fragmentShader: fs_snow
  });
  collection.add(snow);
}
function addRainScene(viewer) {
  let collection = viewer.scene.postProcessStages;
  let fs_rain = FS_Rain();
  let rain = new Cesium.PostProcessStage({
    name: "czm_rain",
    fragmentShader: fs_rain
  });
  collection.add(rain);
}

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-coverage/CesiumUseEcharts.mjs
async function CesiumUseEcharts(Cesium2, viewer, option, canvasConfig) {
  (function(e) {
    const t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      const i = t[r] = {
        i: r,
        l: false,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = true, i.exports;
    }
    n.m = e, n.c = t, n.d = function(e22, t2, r) {
      n.o(e22, t2) || Object.defineProperty(e22, t2, {
        enumerable: true,
        get: r
      });
    }, n.r = function(e22) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e22, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e22, "__esModule", {
        value: true
      });
    }, n.t = function(e22, t2) {
      if (1 & t2 && (e22 = n(e22)), 8 & t2) return e22;
      if (4 & t2 && "object" == typeof e22 && e22 && e22.__esModule) return e22;
      const r = /* @__PURE__ */ Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: true,
        value: e22
      }), 2 & t2 && "string" != typeof e22)
        for (let i in e22)
          n.d(
            r,
            i,
            (function(t3) {
              return e22[t3];
            }).bind(null, i)
          );
      return r;
    }, n.n = function(e22) {
      let t2 = e22 && e22.__esModule ? function() {
        return e22.default;
      } : function() {
        return e22;
      };
      return n.d(t2, "a", t2), t2;
    }, n.o = function(e22, t2) {
      return Object.prototype.hasOwnProperty.call(e22, t2);
    }, n.p = "", n(n.s = 0);
  })([
    function(e, t, n) {
      e.exports = n(1);
    },
    function(e, t, n) {
      echarts ? n(2).load() : console.error("missing echarts lib");
    },
    function(e, t, n) {
      function r(e22, t2) {
        for (let n2 = 0; n2 < t2.length; n2++) {
          let r2 = t2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e22, r2.key, r2);
        }
      }
      n.r(t);
      let i = function() {
        function e22(t3, n3) {
          !function(e3, t4) {
            if (!(e3 instanceof t4))
              throw new TypeError("Cannot call a class as a function");
          }(this, e22), this._viewer = t3, this.dimensions = ["lng", "lat"], this._mapOffset = [0, 0], this._api = n3;
        }
        let t2, n2, i2;
        return t2 = e22, i2 = [
          {
            key: "create",
            value: function(t3, n3) {
              let r2;
              t3.eachComponent("GLMap", function(t4) {
                (r2 = new e22(echartsWrapper.cesiumViewer, n3)).setMapOffset(
                  t4.__mapOffset || [0, 0]
                ), t4.coordinateSystem = r2;
              }), t3.eachSeries(function(e3) {
                "GLMap" === e3.get("coordinateSystem") && (e3.coordinateSystem = r2);
              });
            }
          },
          {
            key: "dimensions",
            get: function() {
              return ["lng", "lat"];
            }
          }
        ], (n2 = [
          {
            key: "setMapOffset",
            value: function(e3) {
              return this._mapOffset = e3, this;
            }
          },
          {
            key: "getViewer",
            value: function() {
              return this._viewer;
            }
          },
          {
            key: "dataToPoint",
            value: function(e3) {
              let t3 = this._viewer.scene, n3 = [0, 0], r2 = Cesium2.Cartesian3.fromDegrees(e3[0], e3[1]);
              if (!r2) return n3;
              if (t3.mode === Cesium2.SceneMode.SCENE3D && Cesium2.Cartesian3.angleBetween(t3.camera.position, r2) > Cesium2.Math.toRadians(80))
                return false;
              let i3 = t3.cartesianToCanvasCoordinates(r2);
              return i3 ? [i3.x - this._mapOffset[0], i3.y - this._mapOffset[1]] : n3;
            }
          },
          {
            key: "pointToData",
            value: function(e3) {
              let t3 = this._mapOffset, n3 = viewer.scene.globe.ellipsoid, r2 = new Cesium2.cartesian3(e3[1] + t3, e3[2] + t3[2], 0), i3 = n3.cartesianToCartographic(r2);
              return [i3.lng, i3.lat];
            }
          },
          {
            key: "getViewRect",
            value: function() {
              let e3 = this._api;
              return new echarts.graphic.BoundingRect(
                0,
                0,
                e3.getWidth(),
                e3.getHeight()
              );
            }
          },
          {
            key: "getRoamTransform",
            value: function() {
              return echarts.matrix.create();
            }
          }
        ]) && r(t2.prototype, n2), i2 && r(t2, i2), e22;
      }();
      echarts.extendComponentModel({
        type: "GLMap",
        getViewer: function() {
          return echartsWrapper.cesiumViewer;
        },
        defaultOption: {
          roam: false
        }
      }), echarts.extendComponentView({
        type: "GLMap",
        init: function(e22, t2) {
          this.api = t2, echartsWrapper.cesiumViewer.scene.postRender.addEventListener(
            this.moveHandler,
            this
          );
        },
        moveHandler: function(e22, t2) {
          this.api.dispatchAction({
            type: "GLMapRoam"
          });
        },
        render: function(e22, t2, n2) {
        },
        dispose: function(e22) {
          echartsWrapper.cesiumViewer.scene.postRender.removeEventListener(
            this.moveHandler,
            this
          );
        }
      });
      function a() {
        echarts.registerCoordinateSystem("GLMap", i), echarts.registerAction(
          {
            type: "GLMapRoam",
            event: "GLMapRoam",
            update: "updateLayout"
          },
          function(e22, t2) {
          }
        );
      }
      n.d(t, "load", function() {
        return a;
      });
    }
  ]);
  console.log("echarts", echarts);
  const echartsWrapper = { ...echarts, cesiumViewer: viewer };
  function hrcEcharts(t, e, canvasConfig2) {
    this._canvasConfig = canvasConfig2;
    this._mapContainer = t;
    this.viewer = viewer;
    this._overlay = this._createChartOverlay();
    this._overlay.setOption(e);
  }
  hrcEcharts.prototype._createChartOverlay = function() {
    console.log(this);
    const t = this._mapContainer.scene;
    t.canvas.setAttribute("tabIndex", 0);
    const e = document.createElement("div");
    e.style.position = "absolute";
    if (this._canvasConfig) {
      e.style.top = "0px";
      e.style.left = "0px";
      e.style.width = this._canvasConfig.width + "rem";
      e.style.height = this._canvasConfig.height + "rem";
      e.style.pointerEvents = "none";
    } else {
      e.style.top = "0px";
      e.style.left = "0px";
      e.style.width = "120rem";
      e.style.height = "55rem";
      e.style.pointerEvents = "none";
    }
    const l = document.getElementsByClassName("echartMap").length;
    e.setAttribute(
      "id",
      "ysCesium-echarts-" + parseInt(Math.random() * 99999) + "-" + l
    );
    e.setAttribute("class", "echartMap");
    this._mapContainer.container.appendChild(e);
    this._echartsContainer = e;
    return echarts.init(e);
  };
  hrcEcharts.prototype.dispose = function() {
    this._echartsContainer && (this._mapContainer.container.removeChild(this._echartsContainer), this._echartsContainer = null), this._overlay && (this._overlay.dispose(), this._overlay = null);
  };
  hrcEcharts.prototype.updateOverlay = function(t) {
    this._overlay && this._overlay.setOption(t);
  };
  hrcEcharts.prototype.getMap = function() {
    return this._mapContainer;
  };
  hrcEcharts.prototype.getOverlay = function() {
    return this._overlay;
  };
  hrcEcharts.prototype.show = function() {
    document.getElementById(this._id).style.visibility = "visible";
  };
  hrcEcharts.prototype.hide = function() {
    document.getElementById(this._id).style.visibility = "hidden";
  };
  let data = new hrcEcharts(viewer, option, canvasConfig);
  return data;
}

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-coverage/CesiumHeatmap.mjs
var base = {
  config: {
    // radius: 10,
    // maxOpacity: .5,
    // minOpacity: 0,
    // blur: .75
  },
  canvas: {
    width: 1e3,
    delta: 50
  },
  _bounds: {
    min: { lat: Number.MAX_VALUE, lng: Number.MAX_VALUE },
    max: { lat: Number.MIN_VALUE, lng: Number.MIN_VALUE }
  }
};
var CesiumData;
function CesiumHeatMap(Cesium2, viewer, data, config) {
  this.viewer = viewer;
  CesiumData = Cesium2;
  base.config = Object.assign({}, base.config, config);
  base.config.container = document.createElement("canvas");
  this.setData(data);
}
CesiumHeatMap.prototype._parseData = function(data) {
  let parseData = {
    max: Number.MIN_VALUE,
    data: []
  };
  base.bounds = JSON.parse(JSON.stringify(base._bounds));
  data.map((v2) => {
    base.bounds.min.lat = Math.min(base.bounds.min.lat, v2.lat);
    base.bounds.min.lng = Math.min(base.bounds.min.lng, v2.lng);
    base.bounds.max.lat = Math.max(base.bounds.max.lat, v2.lat);
    base.bounds.max.lng = Math.max(base.bounds.max.lng, v2.lng);
  });
  base.canvas.height = Math.floor(
    base.canvas.width * (base.bounds.max.lat - base.bounds.min.lat) / (base.bounds.max.lng - base.bounds.min.lng)
  );
  parseData.delta = {
    x: base.canvas.width / (base.bounds.max.lng - base.bounds.min.lng),
    y: base.canvas.height / (base.bounds.max.lat - base.bounds.min.lat)
  };
  data.map((v2) => {
    let value = !isNaN(parseInt(v2.value)) ? parseInt(v2.value) : 1;
    parseData.max = Math.max(parseData.max, value);
    parseData.data.push({
      x: base.canvas.delta + Math.floor(parseData.delta.x * (v2.lng - base.bounds.min.lng)),
      y: Math.floor(
        base.canvas.height + base.canvas.delta - parseData.delta.y * (v2.lat - base.bounds.min.lat)
      ),
      value
    });
  });
  base.config.container.width = base.canvas.width + base.canvas.delta * 2;
  base.config.container.height = base.canvas.height + base.canvas.delta * 2;
  document.body.appendChild(base.config.container);
  this.heatmapInstance = h337.create(base.config);
  return parseData;
};
CesiumHeatMap.prototype.remove = function() {
  this.viewer.entities.removeById(base.config.id);
};
CesiumHeatMap.prototype.show = function() {
  this.entity && (this.entity.rectangle.show = true);
};
CesiumHeatMap.prototype.hide = function() {
  this.entity && (this.entity.rectangle.show = false);
};
CesiumHeatMap.prototype.fromLatLngToPoint = function(latLng) {
  let y2 = (1 - Math.log(
    Math.tan(latLng.lat * Math.PI / 180) + 1 / Math.cos(latLng.lat * Math.PI / 180)
  ) / Math.PI) / 2 * 256;
  return { x: 256 * (0.5 + latLng.lng / 360), y: y2 };
};
CesiumHeatMap.prototype.setData = function(data) {
  base.config.container.style.display = "block";
  data = this._parseData(data);
  this.viewer.entities.removeById(base.config.id);
  this.heatmapInstance.setData(data);
  base.config.id = (/* @__PURE__ */ new Date()).getTime();
  this.entity = this.viewer.entities.add({
    id: base.config.id,
    zIndex: -100,
    rectangle: {
      heightReference: CesiumData.HeightReference.CLAMP_TO_GROUND,
      coordinates: CesiumData.Rectangle.fromDegrees(
        Math.max(
          base.bounds.min.lng - (base.bounds.max.lng - base.bounds.min.lng) * base.canvas.delta / base.canvas.width,
          -180
        ),
        Math.max(
          base.bounds.min.lat - (base.bounds.max.lat - base.bounds.min.lat) * base.canvas.delta / base.canvas.height,
          -90
        ),
        Math.min(
          base.bounds.max.lng + (base.bounds.max.lng - base.bounds.min.lng) * base.canvas.delta / base.canvas.width,
          180
        ),
        Math.min(
          base.bounds.max.lat + (base.bounds.max.lat - base.bounds.min.lat) * base.canvas.delta / base.canvas.height,
          90
        )
      ),
      outline: true,
      outlineWidth: 10,
      outlineColor: CesiumData.Color.YELLOW,
      materials: CesiumData.Color.RED,
      material: new CesiumData.ImageMaterialProperty({
        image: this.heatmapInstance.getDataURL(),
        repeat: new CesiumData.Cartesian2(1, 1),
        transparent: true
      })
    }
  });
  base.config.container.style.display = "none";
};

// ../node_modules/.pnpm/@turf+helpers@7.1.0/node_modules/@turf/helpers/dist/esm/index.js
var earthRadius = 63710088e-1;
var factors = {
  centimeters: earthRadius * 100,
  centimetres: earthRadius * 100,
  degrees: 360 / (2 * Math.PI),
  feet: earthRadius * 3.28084,
  inches: earthRadius * 39.37,
  kilometers: earthRadius / 1e3,
  kilometres: earthRadius / 1e3,
  meters: earthRadius,
  metres: earthRadius,
  miles: earthRadius / 1609.344,
  millimeters: earthRadius * 1e3,
  millimetres: earthRadius * 1e3,
  nauticalmiles: earthRadius / 1852,
  radians: 1,
  yards: earthRadius * 1.0936
};
function feature(geom, properties, options = {}) {
  const feat = { type: "Feature" };
  if (options.id === 0 || options.id) {
    feat.id = options.id;
  }
  if (options.bbox) {
    feat.bbox = options.bbox;
  }
  feat.properties = properties || {};
  feat.geometry = geom;
  return feat;
}
function point(coordinates, properties, options = {}) {
  if (!coordinates) {
    throw new Error("coordinates is required");
  }
  if (!Array.isArray(coordinates)) {
    throw new Error("coordinates must be an Array");
  }
  if (coordinates.length < 2) {
    throw new Error("coordinates must be at least 2 numbers long");
  }
  if (!isNumber(coordinates[0]) || !isNumber(coordinates[1])) {
    throw new Error("coordinates must contain numbers");
  }
  const geom = {
    type: "Point",
    coordinates
  };
  return feature(geom, properties, options);
}
function polygon(coordinates, properties, options = {}) {
  for (const ring of coordinates) {
    if (ring.length < 4) {
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    }
    if (ring[ring.length - 1].length !== ring[0].length) {
      throw new Error("First and last Position are not equivalent.");
    }
    for (let j = 0; j < ring[ring.length - 1].length; j++) {
      if (ring[ring.length - 1][j] !== ring[0][j]) {
        throw new Error("First and last Position are not equivalent.");
      }
    }
  }
  const geom = {
    type: "Polygon",
    coordinates
  };
  return feature(geom, properties, options);
}
function featureCollection(features, options = {}) {
  const fc = { type: "FeatureCollection" };
  if (options.id) {
    fc.id = options.id;
  }
  if (options.bbox) {
    fc.bbox = options.bbox;
  }
  fc.features = features;
  return fc;
}
function radiansToLength(radians2, units = "kilometers") {
  const factor = factors[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return radians2 * factor;
}
function lengthToRadians(distance2, units = "kilometers") {
  const factor = factors[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return distance2 / factor;
}
function radiansToDegrees(radians2) {
  const degrees2 = radians2 % (2 * Math.PI);
  return degrees2 * 180 / Math.PI;
}
function degreesToRadians(degrees2) {
  const radians2 = degrees2 % 360;
  return radians2 * Math.PI / 180;
}
function isNumber(num) {
  return !isNaN(num) && num !== null && !Array.isArray(num);
}

// ../node_modules/.pnpm/@turf+invariant@7.1.0/node_modules/@turf/invariant/dist/esm/index.js
function getCoord(coord) {
  if (!coord) {
    throw new Error("coord is required");
  }
  if (!Array.isArray(coord)) {
    if (coord.type === "Feature" && coord.geometry !== null && coord.geometry.type === "Point") {
      return [...coord.geometry.coordinates];
    }
    if (coord.type === "Point") {
      return [...coord.coordinates];
    }
  }
  if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) {
    return [...coord];
  }
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}

// ../node_modules/.pnpm/@turf+rhumb-bearing@7.1.0/node_modules/@turf/rhumb-bearing/dist/esm/index.js
function rhumbBearing(start, end, options = {}) {
  let bear360;
  if (options.final) {
    bear360 = calculateRhumbBearing(getCoord(end), getCoord(start));
  } else {
    bear360 = calculateRhumbBearing(getCoord(start), getCoord(end));
  }
  const bear180 = bear360 > 180 ? -(360 - bear360) : bear360;
  return bear180;
}
function calculateRhumbBearing(from, to) {
  const phi1 = degreesToRadians(from[1]);
  const phi2 = degreesToRadians(to[1]);
  let deltaLambda = degreesToRadians(to[0] - from[0]);
  if (deltaLambda > Math.PI) {
    deltaLambda -= 2 * Math.PI;
  }
  if (deltaLambda < -Math.PI) {
    deltaLambda += 2 * Math.PI;
  }
  const deltaPsi = Math.log(
    Math.tan(phi2 / 2 + Math.PI / 4) / Math.tan(phi1 / 2 + Math.PI / 4)
  );
  const theta = Math.atan2(deltaLambda, deltaPsi);
  return (radiansToDegrees(theta) + 360) % 360;
}

// ../node_modules/.pnpm/@turf+meta@7.1.0/node_modules/@turf/meta/dist/esm/index.js
function coordEach(geojson, callback, excludeWrapCoord) {
  if (geojson === null)
    return;
  var j, k, l, geometry, stopG, coords, geometryMaybeCollection, wrapShrink = 0, coordIndex = 0, isGeometryCollection, type = geojson.type, isFeatureCollection = type === "FeatureCollection", isFeature = type === "Feature", stop = isFeatureCollection ? geojson.features.length : 1;
  for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
    geometryMaybeCollection = isFeatureCollection ? geojson.features[featureIndex].geometry : isFeature ? geojson.geometry : geojson;
    isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === "GeometryCollection" : false;
    stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
    for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
      var multiFeatureIndex = 0;
      var geometryIndex = 0;
      geometry = isGeometryCollection ? geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection;
      if (geometry === null)
        continue;
      coords = geometry.coordinates;
      var geomType = geometry.type;
      wrapShrink = excludeWrapCoord && (geomType === "Polygon" || geomType === "MultiPolygon") ? 1 : 0;
      switch (geomType) {
        case null:
          break;
        case "Point":
          if (callback(
            coords,
            coordIndex,
            featureIndex,
            multiFeatureIndex,
            geometryIndex
          ) === false)
            return false;
          coordIndex++;
          multiFeatureIndex++;
          break;
        case "LineString":
        case "MultiPoint":
          for (j = 0; j < coords.length; j++) {
            if (callback(
              coords[j],
              coordIndex,
              featureIndex,
              multiFeatureIndex,
              geometryIndex
            ) === false)
              return false;
            coordIndex++;
            if (geomType === "MultiPoint")
              multiFeatureIndex++;
          }
          if (geomType === "LineString")
            multiFeatureIndex++;
          break;
        case "Polygon":
        case "MultiLineString":
          for (j = 0; j < coords.length; j++) {
            for (k = 0; k < coords[j].length - wrapShrink; k++) {
              if (callback(
                coords[j][k],
                coordIndex,
                featureIndex,
                multiFeatureIndex,
                geometryIndex
              ) === false)
                return false;
              coordIndex++;
            }
            if (geomType === "MultiLineString")
              multiFeatureIndex++;
            if (geomType === "Polygon")
              geometryIndex++;
          }
          if (geomType === "Polygon")
            multiFeatureIndex++;
          break;
        case "MultiPolygon":
          for (j = 0; j < coords.length; j++) {
            geometryIndex = 0;
            for (k = 0; k < coords[j].length; k++) {
              for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                if (callback(
                  coords[j][k][l],
                  coordIndex,
                  featureIndex,
                  multiFeatureIndex,
                  geometryIndex
                ) === false)
                  return false;
                coordIndex++;
              }
              geometryIndex++;
            }
            multiFeatureIndex++;
          }
          break;
        case "GeometryCollection":
          for (j = 0; j < geometry.geometries.length; j++)
            if (coordEach(geometry.geometries[j], callback, excludeWrapCoord) === false)
              return false;
          break;
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
  }
}
function featureEach(geojson, callback) {
  if (geojson.type === "Feature") {
    callback(geojson, 0);
  } else if (geojson.type === "FeatureCollection") {
    for (var i = 0; i < geojson.features.length; i++) {
      if (callback(geojson.features[i], i) === false)
        break;
    }
  }
}
function geomEach(geojson, callback) {
  var i, j, g, geometry, stopG, geometryMaybeCollection, isGeometryCollection, featureProperties, featureBBox, featureId, featureIndex = 0, isFeatureCollection = geojson.type === "FeatureCollection", isFeature = geojson.type === "Feature", stop = isFeatureCollection ? geojson.features.length : 1;
  for (i = 0; i < stop; i++) {
    geometryMaybeCollection = isFeatureCollection ? geojson.features[i].geometry : isFeature ? geojson.geometry : geojson;
    featureProperties = isFeatureCollection ? geojson.features[i].properties : isFeature ? geojson.properties : {};
    featureBBox = isFeatureCollection ? geojson.features[i].bbox : isFeature ? geojson.bbox : void 0;
    featureId = isFeatureCollection ? geojson.features[i].id : isFeature ? geojson.id : void 0;
    isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === "GeometryCollection" : false;
    stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
    for (g = 0; g < stopG; g++) {
      geometry = isGeometryCollection ? geometryMaybeCollection.geometries[g] : geometryMaybeCollection;
      if (geometry === null) {
        if (callback(
          null,
          featureIndex,
          featureProperties,
          featureBBox,
          featureId
        ) === false)
          return false;
        continue;
      }
      switch (geometry.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (callback(
            geometry,
            featureIndex,
            featureProperties,
            featureBBox,
            featureId
          ) === false)
            return false;
          break;
        }
        case "GeometryCollection": {
          for (j = 0; j < geometry.geometries.length; j++) {
            if (callback(
              geometry.geometries[j],
              featureIndex,
              featureProperties,
              featureBBox,
              featureId
            ) === false)
              return false;
          }
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    featureIndex++;
  }
}

// ../node_modules/.pnpm/@turf+area@7.1.0/node_modules/@turf/area/dist/esm/index.js
var FACTOR = earthRadius * earthRadius / 2;
var PI_OVER_180 = Math.PI / 180;

// ../node_modules/.pnpm/@turf+bbox@7.1.0/node_modules/@turf/bbox/dist/esm/index.js
function bbox(geojson, options = {}) {
  if (geojson.bbox != null && true !== options.recompute) {
    return geojson.bbox;
  }
  const result = [Infinity, Infinity, -Infinity, -Infinity];
  coordEach(geojson, (coord) => {
    if (result[0] > coord[0]) {
      result[0] = coord[0];
    }
    if (result[1] > coord[1]) {
      result[1] = coord[1];
    }
    if (result[2] < coord[0]) {
      result[2] = coord[0];
    }
    if (result[3] < coord[1]) {
      result[3] = coord[1];
    }
  });
  return result;
}

// ../node_modules/.pnpm/geojson-equality-ts@1.0.2/node_modules/geojson-equality-ts/dist/esm/index.js
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var _GeojsonEquality = class _GeojsonEquality2 {
  constructor(opts) {
    this.direction = false;
    this.compareProperties = true;
    var _a, _b, _c;
    this.precision = 10 ** -((_a = opts == null ? void 0 : opts.precision) != null ? _a : 17);
    this.direction = (_b = opts == null ? void 0 : opts.direction) != null ? _b : false;
    this.compareProperties = (_c = opts == null ? void 0 : opts.compareProperties) != null ? _c : true;
  }
  compare(g1, g2) {
    if (g1.type !== g2.type) {
      return false;
    }
    if (!sameLength(g1, g2)) {
      return false;
    }
    switch (g1.type) {
      case "Point":
        return this.compareCoord(g1.coordinates, g2.coordinates);
      case "LineString":
        return this.compareLine(g1.coordinates, g2.coordinates);
      case "Polygon":
        return this.comparePolygon(g1, g2);
      case "GeometryCollection":
        return this.compareGeometryCollection(g1, g2);
      case "Feature":
        return this.compareFeature(g1, g2);
      case "FeatureCollection":
        return this.compareFeatureCollection(g1, g2);
      default:
        if (g1.type.startsWith("Multi")) {
          const g1s = explode(g1);
          const g2s = explode(
            g2
          );
          return g1s.every(
            (g1part) => g2s.some((g2part) => this.compare(g1part, g2part))
          );
        }
    }
    return false;
  }
  compareCoord(c1, c2) {
    return c1.length === c2.length && c1.every((c, i) => Math.abs(c - c2[i]) < this.precision);
  }
  compareLine(path1, path2, ind = 0, isPoly = false) {
    if (!sameLength(path1, path2)) {
      return false;
    }
    const p1 = path1;
    let p2 = path2;
    if (isPoly && !this.compareCoord(p1[0], p2[0])) {
      const startIndex = this.fixStartIndex(p2, p1);
      if (!startIndex) {
        return false;
      } else {
        p2 = startIndex;
      }
    }
    const sameDirection = this.compareCoord(p1[ind], p2[ind]);
    if (this.direction || sameDirection) {
      return this.comparePath(p1, p2);
    } else {
      if (this.compareCoord(p1[ind], p2[p2.length - (1 + ind)])) {
        return this.comparePath(p1.slice().reverse(), p2);
      }
      return false;
    }
  }
  fixStartIndex(sourcePath, targetPath) {
    let correctPath, ind = -1;
    for (let i = 0; i < sourcePath.length; i++) {
      if (this.compareCoord(sourcePath[i], targetPath[0])) {
        ind = i;
        break;
      }
    }
    if (ind >= 0) {
      correctPath = [].concat(
        sourcePath.slice(ind, sourcePath.length),
        sourcePath.slice(1, ind + 1)
      );
    }
    return correctPath;
  }
  comparePath(p1, p2) {
    return p1.every((c, i) => this.compareCoord(c, p2[i]));
  }
  comparePolygon(g1, g2) {
    if (this.compareLine(g1.coordinates[0], g2.coordinates[0], 1, true)) {
      const holes1 = g1.coordinates.slice(1, g1.coordinates.length);
      const holes2 = g2.coordinates.slice(1, g2.coordinates.length);
      return holes1.every(
        (h1) => holes2.some((h2) => this.compareLine(h1, h2, 1, true))
      );
    }
    return false;
  }
  compareGeometryCollection(g1, g2) {
    return sameLength(g1.geometries, g2.geometries) && this.compareBBox(g1, g2) && g1.geometries.every((g, i) => this.compare(g, g2.geometries[i]));
  }
  compareFeature(g1, g2) {
    return g1.id === g2.id && (this.compareProperties ? equal(g1.properties, g2.properties) : true) && this.compareBBox(g1, g2) && this.compare(g1.geometry, g2.geometry);
  }
  compareFeatureCollection(g1, g2) {
    return sameLength(g1.features, g2.features) && this.compareBBox(g1, g2) && g1.features.every((f, i) => this.compare(f, g2.features[i]));
  }
  compareBBox(g1, g2) {
    return Boolean(!g1.bbox && !g2.bbox) || (g1.bbox && g2.bbox ? this.compareCoord(g1.bbox, g2.bbox) : false);
  }
};
__name(_GeojsonEquality, "GeojsonEquality");
var GeojsonEquality = _GeojsonEquality;
function sameLength(g1, g2) {
  return g1.coordinates ? g1.coordinates.length === g2.coordinates.length : g1.length === g2.length;
}
__name(sameLength, "sameLength");
function explode(g) {
  return g.coordinates.map((part) => ({
    type: g.type.replace("Multi", ""),
    coordinates: part
  }));
}
__name(explode, "explode");
function geojsonEquality(g1, g2, opts) {
  const eq = new GeojsonEquality(opts);
  return eq.compare(g1, g2);
}
__name(geojsonEquality, "geojsonEquality");
function equal(object1, object2) {
  if (object1 === null && object2 === null) {
    return true;
  }
  if (object1 === null || object2 === null) {
    return false;
  }
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) return false;
  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    const isObjects = isObject2(value1) && isObject2(value2);
    if (isObjects && !equal(value1, value2) || !isObjects && value1 !== value2) {
      return false;
    }
  }
  return true;
}
__name(equal, "equal");
var isObject2 = __name((object2) => {
  return object2 != null && typeof object2 === "object";
}, "isObject");

// ../node_modules/.pnpm/@turf+line-overlap@7.1.0/node_modules/@turf/line-overlap/dist/esm/index.js
var import_fast_deep_equal = __toESM(require_fast_deep_equal());

// ../node_modules/.pnpm/@turf+center@7.1.0/node_modules/@turf/center/dist/esm/index.js
function center(geojson, options = {}) {
  const ext = bbox(geojson);
  const x2 = (ext[0] + ext[2]) / 2;
  const y2 = (ext[1] + ext[3]) / 2;
  return point([x2, y2], options.properties, options);
}

// ../node_modules/.pnpm/@turf+buffer@7.1.0/node_modules/@turf/buffer/dist/esm/index.js
var import_jsts = __toESM(require_jsts_min());

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/adder.js
function adder_default() {
  return new Adder();
}
function Adder() {
  this.reset();
}
Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(y2) {
    add(temp, y2, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var temp = new Adder();
function add(adder, a, b) {
  var x2 = adder.s = a + b, bv = x2 - a, av = x2 - bv;
  adder.t = a - av + (b - bv);
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/math.js
var epsilon = 1e-6;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var exp = Math.exp;
var log = Math.log;
var sin = Math.sin;
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x2) {
  return x2 > 1 ? 0 : x2 < -1 ? pi : Math.acos(x2);
}
function asin(x2) {
  return x2 > 1 ? halfPi : x2 < -1 ? -halfPi : Math.asin(x2);
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/noop.js
function noop() {
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
var streamObjectType = {
  Feature: function(object2, stream) {
    streamGeometry(object2.geometry, stream);
  },
  FeatureCollection: function(object2, stream) {
    var features = object2.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};
var streamGeometryType = {
  Sphere: function(object2, stream) {
    stream.sphere();
  },
  Point: function(object2, stream) {
    object2 = object2.coordinates;
    stream.point(object2[0], object2[1], object2[2]);
  },
  MultiPoint: function(object2, stream) {
    var coordinates = object2.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object2 = coordinates[i], stream.point(object2[0], object2[1], object2[2]);
  },
  LineString: function(object2, stream) {
    streamLine(object2.coordinates, stream, 0);
  },
  MultiLineString: function(object2, stream) {
    var coordinates = object2.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object2, stream) {
    streamPolygon(object2.coordinates, stream);
  },
  MultiPolygon: function(object2, stream) {
    var coordinates = object2.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object2, stream) {
    var geometries = object2.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};
function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}
function stream_default(object2, stream) {
  if (object2 && streamObjectType.hasOwnProperty(object2.type)) {
    streamObjectType[object2.type](object2, stream);
  } else {
    streamGeometry(object2, stream);
  }
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/area.js
var areaRingSum = adder_default();
var areaSum = adder_default();

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/cartesian.js
function spherical(cartesian2) {
  return [atan2(cartesian2[1], cartesian2[0]), asin(cartesian2[2])];
}
function cartesian(spherical2) {
  var lambda = spherical2[0], phi = spherical2[1], cosPhi = cos(phi);
  return [cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi)];
}
function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}
function cartesianNormalizeInPlace(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/bounds.js
var deltaSum = adder_default();

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/compose.js
function compose_default(a, b) {
  function compose(x2, y2) {
    return x2 = a(x2, y2), b(x2[0], x2[1]);
  }
  if (a.invert && b.invert) compose.invert = function(x2, y2) {
    return x2 = b.invert(x2, y2), x2 && a.invert(x2[0], x2[1]);
  };
  return compose;
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/rotation.js
function rotationIdentity(lambda, phi) {
  return [lambda > pi ? lambda - tau : lambda < -pi ? lambda + tau : lambda, phi];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau) ? deltaPhi || deltaGamma ? compose_default(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > pi ? lambda - tau : lambda < -pi ? lambda + tau : lambda, phi];
  };
}
function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos(deltaPhi), sinDeltaPhi = sin(deltaPhi), cosDeltaGamma = cos(deltaGamma), sinDeltaGamma = sin(deltaGamma);
  function rotation(lambda, phi) {
    var cosPhi = cos(phi), x2 = cos(lambda) * cosPhi, y2 = sin(lambda) * cosPhi, z = sin(phi), k = z * cosDeltaPhi + x2 * sinDeltaPhi;
    return [
      atan2(y2 * cosDeltaGamma - k * sinDeltaGamma, x2 * cosDeltaPhi - z * sinDeltaPhi),
      asin(k * cosDeltaGamma + y2 * sinDeltaGamma)
    ];
  }
  rotation.invert = function(lambda, phi) {
    var cosPhi = cos(phi), x2 = cos(lambda) * cosPhi, y2 = sin(lambda) * cosPhi, z = sin(phi), k = z * cosDeltaGamma - y2 * sinDeltaGamma;
    return [
      atan2(y2 * cosDeltaGamma + z * sinDeltaGamma, x2 * cosDeltaPhi + k * sinDeltaPhi),
      asin(k * cosDeltaPhi - x2 * sinDeltaPhi)
    ];
  };
  return rotation;
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/circle.js
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = cos(radius), sinRadius = sin(radius), step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * tau;
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau;
  }
  for (var point2, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point2 = spherical([cosRadius, -sinRadius * cos(t), -sinRadius * sin(t)]);
    stream.point(point2[0], point2[1]);
  }
}
function circleRadius(cosRadius, point2) {
  point2 = cartesian(point2), point2[0] -= cosRadius;
  cartesianNormalizeInPlace(point2);
  var radius = acos(-point2[1]);
  return ((-point2[2] < 0 ? -radius : radius) + tau - epsilon) % tau;
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/clip/buffer.js
function buffer_default() {
  var lines = [], line;
  return {
    point: function(x2, y2) {
      line.push([x2, y2]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop,
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/clip/line.js
function line_default(a, b, x02, y02, x12, y12) {
  var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
  r = x02 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = x12 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  r = y02 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = y12 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/pointEqual.js
function pointEqual_default(a, b) {
  return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/clip/polygon.js
function Intersection(point2, points, other, entry) {
  this.x = point2;
  this.z = points;
  this.o = other;
  this.e = entry;
  this.v = false;
  this.n = this.p = null;
}
function polygon_default(segments, compareIntersection2, startInside, interpolate2, stream) {
  var subject = [], clip = [], i, n;
  segments.forEach(function(segment) {
    if ((n2 = segment.length - 1) <= 0) return;
    var n2, p0 = segment[0], p1 = segment[n2], x2;
    if (pointEqual_default(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n2; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }
    subject.push(x2 = new Intersection(p0, segment, null, true));
    clip.push(x2.o = new Intersection(p0, null, x2, false));
    subject.push(x2 = new Intersection(p1, segment, null, false));
    clip.push(x2.o = new Intersection(p1, null, x2, true));
  });
  if (!subject.length) return;
  clip.sort(compareIntersection2);
  link(subject);
  link(clip);
  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }
  var start = subject[0], points, point2;
  while (1) {
    var current = start, isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point2 = points[i])[0], point2[1]);
        } else {
          interpolate2(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point2 = points[i])[0], point2[1]);
        } else {
          interpolate2(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link(array2) {
  if (!(n = array2.length)) return;
  var n, i = 0, a = array2[0], b;
  while (++i < n) {
    a.n = b = array2[i];
    b.p = a;
    a = b;
  }
  a.n = b = array2[0];
  b.p = a;
}

// ../node_modules/.pnpm/d3-array@1.2.4/node_modules/d3-array/src/ascending.js
function ascending_default(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// ../node_modules/.pnpm/d3-array@1.2.4/node_modules/d3-array/src/bisector.js
function bisector_default(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x2, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x2) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x2, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x2) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}
function ascendingComparator(f) {
  return function(d, x2) {
    return ascending_default(f(d), x2);
  };
}

// ../node_modules/.pnpm/d3-array@1.2.4/node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector_default(ascending_default);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;

// ../node_modules/.pnpm/d3-array@1.2.4/node_modules/d3-array/src/array.js
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

// ../node_modules/.pnpm/d3-array@1.2.4/node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);

// ../node_modules/.pnpm/d3-array@1.2.4/node_modules/d3-array/src/merge.js
function merge_default(arrays) {
  var n = arrays.length, m, i = -1, j = 0, merged, array2;
  while (++i < n) j += arrays[i].length;
  merged = new Array(j);
  while (--n >= 0) {
    array2 = arrays[n];
    m = array2.length;
    while (--m >= 0) {
      merged[--j] = array2[m];
    }
  }
  return merged;
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/clip/extent.js
var clipMax = 1e9;
var clipMin = -clipMax;
function clipExtent(x02, y02, x12, y12) {
  function visible(x2, y2) {
    return x02 <= x2 && x2 <= x12 && y02 <= y2 && y2 <= y12;
  }
  function interpolate2(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do
        stream.point(a === 0 || a === 3 ? x02 : x12, a > 1 ? y12 : y02);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function corner(p, direction) {
    return abs(p[0] - x02) < epsilon ? direction > 0 ? 0 : 3 : abs(p[0] - x12) < epsilon ? direction > 0 ? 2 : 1 : abs(p[1] - y02) < epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
  }
  function compareIntersection2(a, b) {
    return comparePoint(a.x, b.x);
  }
  function comparePoint(a, b) {
    var ca3 = corner(a, 1), cb = corner(b, 1);
    return ca3 !== cb ? ca3 - cb : ca3 === 0 ? b[1] - a[1] : ca3 === 1 ? a[0] - b[0] : ca3 === 2 ? a[1] - b[1] : b[0] - a[0];
  }
  return function(stream) {
    var activeStream = stream, bufferStream = buffer_default(), segments, polygon2, ring, x__, y__, v__, x_, y_, v_, first, clean;
    var clipStream = {
      point: point2,
      lineStart,
      lineEnd,
      polygonStart,
      polygonEnd
    };
    function point2(x2, y2) {
      if (visible(x2, y2)) activeStream.point(x2, y2);
    }
    function polygonInside() {
      var winding = 0;
      for (var i = 0, n = polygon2.length; i < n; ++i) {
        for (var ring2 = polygon2[i], j = 1, m = ring2.length, point3 = ring2[0], a0, a1, b0 = point3[0], b1 = point3[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point3 = ring2[j], b0 = point3[0], b1 = point3[1];
          if (a1 <= y12) {
            if (b1 > y12 && (b0 - a0) * (y12 - a1) > (b1 - a1) * (x02 - a0)) ++winding;
          } else {
            if (b1 <= y12 && (b0 - a0) * (y12 - a1) < (b1 - a1) * (x02 - a0)) --winding;
          }
        }
      }
      return winding;
    }
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon2 = [], clean = true;
    }
    function polygonEnd() {
      var startInside = polygonInside(), cleanInside = clean && startInside, visible2 = (segments = merge_default(segments)).length;
      if (cleanInside || visible2) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate2(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible2) {
          polygon_default(segments, compareIntersection2, startInside, interpolate2, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon2 = ring = null;
    }
    function lineStart() {
      clipStream.point = linePoint;
      if (polygon2) polygon2.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point2;
      if (v_) activeStream.lineEnd();
    }
    function linePoint(x2, y2) {
      var v2 = visible(x2, y2);
      if (polygon2) ring.push([x2, y2]);
      if (first) {
        x__ = x2, y__ = y2, v__ = v2;
        first = false;
        if (v2) {
          activeStream.lineStart();
          activeStream.point(x2, y2);
        }
      } else {
        if (v2 && v_) activeStream.point(x2, y2);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))], b = [x2 = Math.max(clipMin, Math.min(clipMax, x2)), y2 = Math.max(clipMin, Math.min(clipMax, y2))];
          if (line_default(a, b, x02, y02, x12, y12)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v2) activeStream.lineEnd();
            clean = false;
          } else if (v2) {
            activeStream.lineStart();
            activeStream.point(x2, y2);
            clean = false;
          }
        }
      }
      x_ = x2, y_ = y2, v_ = v2;
    }
    return clipStream;
  };
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/polygonContains.js
var sum = adder_default();
function polygonContains_default(polygon2, point2) {
  var lambda = point2[0], phi = point2[1], normal = [sin(lambda), -cos(lambda), 0], angle2 = 0, winding = 0;
  sum.reset();
  for (var i = 0, n = polygon2.length; i < n; ++i) {
    if (!(m = (ring = polygon2[i]).length)) continue;
    var ring, m, point0 = ring[m - 1], lambda0 = point0[0], phi0 = point0[1] / 2 + quarterPi, sinPhi0 = sin(phi0), cosPhi0 = cos(phi0);
    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j], lambda1 = point1[0], phi1 = point1[1] / 2 + quarterPi, sinPhi1 = sin(phi1), cosPhi1 = cos(phi1), delta = lambda1 - lambda0, sign2 = delta >= 0 ? 1 : -1, absDelta = sign2 * delta, antimeridian = absDelta > pi, k = sinPhi0 * sinPhi1;
      sum.add(atan2(k * sign2 * sin(absDelta), cosPhi0 * cosPhi1 + k * cos(absDelta)));
      angle2 += antimeridian ? delta + sign2 * tau : delta;
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }
  return (angle2 < -epsilon || angle2 < epsilon && sum < -epsilon) ^ winding & 1;
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/length.js
var lengthSum = adder_default();

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/identity.js
function identity_default2(x2) {
  return x2;
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/path/area.js
var areaSum2 = adder_default();
var areaRingSum2 = adder_default();

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/path/bounds.js
var x0 = Infinity;
var y0 = x0;
var x1 = -x0;
var y1 = x1;
var boundsStream = {
  point: boundsPoint,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop,
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};
function boundsPoint(x2, y2) {
  if (x2 < x0) x0 = x2;
  if (x2 > x1) x1 = x2;
  if (y2 < y0) y0 = y2;
  if (y2 > y1) y1 = y2;
}
var bounds_default = boundsStream;

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/path/context.js
function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x2, y2) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x2, y2);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x2, y2);
        break;
      }
      default: {
        this._context.moveTo(x2 + this._radius, y2);
        this._context.arc(x2, y2, this._radius, 0, tau);
        break;
      }
    }
  },
  result: noop
};

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/path/measure.js
var lengthSum2 = adder_default();

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/path/string.js
function PathString() {
  this._string = [];
}
PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x2, y2) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x2, ",", y2);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x2, ",", y2);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle(this._radius);
        this._string.push("M", x2, ",", y2, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};
function circle(radius) {
  return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/clip/index.js
function clip_default(pointVisible, clipLine, interpolate2, start) {
  return function(rotate, sink) {
    var line = clipLine(sink), rotatedStart = rotate.invert(start[0], start[1]), ringBuffer = buffer_default(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon2, segments, ring;
    var clip = {
      point: point2,
      lineStart,
      lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon2 = [];
      },
      polygonEnd: function() {
        clip.point = point2;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge_default(segments);
        var startInside = polygonContains_default(polygon2, rotatedStart);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          polygon_default(segments, compareIntersection, startInside, interpolate2, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate2(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon2 = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate2(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point2(lambda, phi) {
      var point3 = rotate(lambda, phi);
      if (pointVisible(lambda = point3[0], phi = point3[1])) sink.point(lambda, phi);
    }
    function pointLine(lambda, phi) {
      var point3 = rotate(lambda, phi);
      line.point(point3[0], point3[1]);
    }
    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }
    function lineEnd() {
      clip.point = point2;
      line.lineEnd();
    }
    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      var point3 = rotate(lambda, phi);
      ringSink.point(point3[0], point3[1]);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point3;
      ring.pop();
      polygon2.push(ring);
      ring = null;
      if (!n) return;
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point3 = segment[i])[0], point3[1]);
          sink.lineEnd();
        }
        return;
      }
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - halfPi - epsilon : halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi - epsilon : halfPi - b[1]);
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/clip/antimeridian.js
var antimeridian_default = clip_default(
  function() {
    return true;
  },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-pi, -halfPi]
);
function clipAntimeridianLine(stream) {
  var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean;
  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? pi : -pi, delta = abs(lambda1 - lambda0);
      if (abs(delta - pi) < epsilon) {
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi : -halfPi);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi) {
        if (abs(lambda0 - sign0) < epsilon) lambda0 -= sign0 * epsilon;
        if (abs(lambda1 - sign1) < epsilon) lambda1 -= sign1 * epsilon;
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean;
    }
  };
}
function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0, cosPhi1, sinLambda0Lambda1 = sin(lambda0 - lambda1);
  return abs(sinLambda0Lambda1) > epsilon ? atan((sin(phi0) * (cosPhi1 = cos(phi1)) * sin(lambda1) - sin(phi1) * (cosPhi0 = cos(phi0)) * sin(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * halfPi;
    stream.point(-pi, phi);
    stream.point(0, phi);
    stream.point(pi, phi);
    stream.point(pi, 0);
    stream.point(pi, -phi);
    stream.point(0, -phi);
    stream.point(-pi, -phi);
    stream.point(-pi, 0);
    stream.point(-pi, phi);
  } else if (abs(from[0] - to[0]) > epsilon) {
    var lambda = from[0] < to[0] ? pi : -pi;
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/clip/circle.js
function circle_default(radius, delta) {
  var cr = cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > epsilon;
  function interpolate2(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }
  function visible(lambda, phi) {
    return cos(lambda) * cos(phi) > cr;
  }
  function clipLine(stream) {
    var point0, c0, v0, v00, clean;
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi], point2, v2 = visible(lambda, phi), c = smallRadius ? v2 ? 0 : code(lambda, phi) : v2 ? code(lambda + (lambda < 0 ? pi : -pi), phi) : 0;
        if (!point0 && (v00 = v0 = v2)) stream.lineStart();
        if (v2 !== v0) {
          point2 = intersect2(point0, point1);
          if (!point2 || pointEqual_default(point0, point2) || pointEqual_default(point1, point2)) {
            point1[0] += epsilon;
            point1[1] += epsilon;
            v2 = visible(point1[0], point1[1]);
          }
        }
        if (v2 !== v0) {
          clean = 0;
          if (v2) {
            stream.lineStart();
            point2 = intersect2(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            point2 = intersect2(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v2) {
          var t;
          if (!(c & c0) && (t = intersect2(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v2 && (!point0 || !pointEqual_default(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v2, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | (v00 && v0) << 1;
      }
    };
  }
  function intersect2(a, b, two) {
    var pa = cartesian(a), pb = cartesian(b);
    var n1 = [1, 0, 0], n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
    if (!determinant) return !two && a;
    var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A = cartesianScale(n1, c1), B2 = cartesianScale(n2, c2);
    cartesianAddInPlace(A, B2);
    var u4 = n1xn2, w = cartesianDot(A, u4), uu = cartesianDot(u4, u4), t2 = w * w - uu * (cartesianDot(A, A) - 1);
    if (t2 < 0) return;
    var t = sqrt(t2), q = cartesianScale(u4, (-w - t) / uu);
    cartesianAddInPlace(q, A);
    q = spherical(q);
    if (!two) return q;
    var lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
    var delta2 = lambda1 - lambda0, polar = abs(delta2 - pi) < epsilon, meridian = polar || delta2 < epsilon;
    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
    if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta2 > pi ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = cartesianScale(u4, (-w + t) / uu);
      cartesianAddInPlace(q1, A);
      return [q, spherical(q1)];
    }
  }
  function code(lambda, phi) {
    var r = smallRadius ? radius : pi - radius, code2 = 0;
    if (lambda < -r) code2 |= 1;
    else if (lambda > r) code2 |= 2;
    if (phi < -r) code2 |= 4;
    else if (phi > r) code2 |= 8;
    return code2;
  }
  return clip_default(visible, clipLine, interpolate2, smallRadius ? [0, -radius] : [-pi, radius - pi]);
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/transform.js
function transformer(methods) {
  return function(stream) {
    var s = new TransformStream();
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}
function TransformStream() {
}
TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x2, y2) {
    this.stream.point(x2, y2);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/fit.js
function fitExtent(projection2, extent, object2) {
  var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], clip = projection2.clipExtent && projection2.clipExtent();
  projection2.scale(150).translate([0, 0]);
  if (clip != null) projection2.clipExtent(null);
  stream_default(object2, projection2.stream(bounds_default));
  var b = bounds_default.result(), k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x2 = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y2 = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
  if (clip != null) projection2.clipExtent(clip);
  return projection2.scale(k * 150).translate([x2, y2]);
}
function fitSize(projection2, size, object2) {
  return fitExtent(projection2, [[0, 0], size], object2);
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/resample.js
var maxDepth = 16;
var cosMinDistance = cos(30 * radians);
function resample_default(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
}
function resampleNone(project) {
  return transformer({
    point: function(x2, y2) {
      x2 = project(x2, y2);
      this.stream.point(x2[0], x2[1]);
    }
  });
}
function resample(project, delta2) {
  function resampleLineTo(x02, y02, lambda0, a0, b0, c0, x12, y12, lambda1, a1, b1, c1, depth, stream) {
    var dx = x12 - x02, dy = y12 - y02, d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = sqrt(a * a + b * b + c * c), phi2 = asin(c /= m), lambda2 = abs(abs(c) - 1) < epsilon || abs(lambda0 - lambda1) < epsilon ? (lambda0 + lambda1) / 2 : atan2(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x02, dy2 = y2 - y02, dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
        resampleLineTo(x02, y02, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x12, y12, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, lambda0, x02, y02, a0, b0, c0;
    var resampleStream = {
      point: point2,
      lineStart,
      lineEnd,
      polygonStart: function() {
        stream.polygonStart();
        resampleStream.lineStart = ringStart;
      },
      polygonEnd: function() {
        stream.polygonEnd();
        resampleStream.lineStart = lineStart;
      }
    };
    function point2(x2, y2) {
      x2 = project(x2, y2);
      stream.point(x2[0], x2[1]);
    }
    function lineStart() {
      x02 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }
    function linePoint(lambda, phi) {
      var c = cartesian([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x02, y02, lambda0, a0, b0, c0, x02 = p[0], y02 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x02, y02);
    }
    function lineEnd() {
      resampleStream.point = point2;
      stream.lineEnd();
    }
    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }
    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x02, y00 = y02, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }
    function ringEnd() {
      resampleLineTo(x02, y02, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }
    return resampleStream;
  };
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/index.js
var transformRadians = transformer({
  point: function(x2, y2) {
    this.stream.point(x2 * radians, y2 * radians);
  }
});
function projection(project) {
  return projectionMutator(function() {
    return project;
  })();
}
function projectionMutator(projectAt) {
  var project, k = 150, x2 = 480, y2 = 250, dx, dy, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, theta = null, preclip = antimeridian_default, x02 = null, y02, x12, y12, postclip = identity_default2, delta2 = 0.5, projectResample = resample_default(projectTransform, delta2), cache, cacheStream;
  function projection2(point2) {
    point2 = projectRotate(point2[0] * radians, point2[1] * radians);
    return [point2[0] * k + dx, dy - point2[1] * k];
  }
  function invert(point2) {
    point2 = projectRotate.invert((point2[0] - dx) / k, (dy - point2[1]) / k);
    return point2 && [point2[0] * degrees, point2[1] * degrees];
  }
  function projectTransform(x3, y3) {
    return x3 = project(x3, y3), [x3[0] * k + dx, dy - x3[1] * k];
  }
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(preclip(rotate, projectResample(postclip(cacheStream = stream))));
  };
  projection2.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? circle_default(theta = _ * radians, 6 * radians) : (theta = null, antimeridian_default), reset()) : theta * degrees;
  };
  projection2.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x02 = y02 = x12 = y12 = null, identity_default2) : clipExtent(x02 = +_[0][0], y02 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reset()) : x02 == null ? null : [[x02, y02], [x12, y12]];
  };
  projection2.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };
  projection2.translate = function(_) {
    return arguments.length ? (x2 = +_[0], y2 = +_[1], recenter()) : [x2, y2];
  };
  projection2.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees, phi * degrees];
  };
  projection2.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees, deltaPhi * degrees, deltaGamma * degrees];
  };
  projection2.precision = function(_) {
    return arguments.length ? (projectResample = resample_default(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
  };
  projection2.fitExtent = function(extent, object2) {
    return fitExtent(projection2, extent, object2);
  };
  projection2.fitSize = function(size, object2) {
    return fitSize(projection2, size, object2);
  };
  function recenter() {
    projectRotate = compose_default(rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma), project);
    var center2 = project(lambda, phi);
    dx = x2 - center2[0] * k;
    dy = y2 + center2[1] * k;
    return reset();
  }
  function reset() {
    cache = cacheStream = null;
    return projection2;
  }
  return function() {
    project = projectAt.apply(this, arguments);
    projection2.invert = project.invert && invert;
    return recenter();
  };
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/azimuthal.js
function azimuthalRaw(scale2) {
  return function(x2, y2) {
    var cx = cos(x2), cy = cos(y2), k = scale2(cx * cy);
    return [
      k * cy * sin(x2),
      k * sin(y2)
    ];
  };
}
function azimuthalInvert(angle2) {
  return function(x2, y2) {
    var z = sqrt(x2 * x2 + y2 * y2), c = angle2(z), sc = sin(c), cc2 = cos(c);
    return [
      atan2(x2 * sc, z * cc2),
      asin(z && y2 * sc / z)
    ];
  };
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/azimuthalEqualArea.js
var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
  return sqrt(2 / (1 + cxcy));
});
azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
  return 2 * asin(z / 2);
});

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/azimuthalEquidistant.js
var azimuthalEquidistantRaw = azimuthalRaw(function(c) {
  return (c = acos(c)) && c / sin(c);
});
azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
  return z;
});
function azimuthalEquidistant_default() {
  return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
}

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/mercator.js
function mercatorRaw(lambda, phi) {
  return [lambda, log(tan((halfPi + phi) / 2))];
}
mercatorRaw.invert = function(x2, y2) {
  return [x2, 2 * atan(exp(y2)) - halfPi];
};

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/equirectangular.js
function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}
equirectangularRaw.invert = equirectangularRaw;

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/gnomonic.js
function gnomonicRaw(x2, y2) {
  var cy = cos(y2), k = cos(x2) * cy;
  return [cy * sin(x2) / k, sin(y2) / k];
}
gnomonicRaw.invert = azimuthalInvert(atan);

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/naturalEarth1.js
function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (3971e-6 * phi2 - 1529e-6 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 5916e-6 * phi4)))
  ];
}
naturalEarth1Raw.invert = function(x2, y2) {
  var phi = y2, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 5916e-6 * phi4))) - y2) / (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 5916e-6 * 11 * phi4)));
  } while (abs(delta) > epsilon && --i > 0);
  return [
    x2 / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (3971e-6 - 1529e-6 * phi2)))),
    phi
  ];
};

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/orthographic.js
function orthographicRaw(x2, y2) {
  return [cos(y2) * sin(x2), sin(y2)];
}
orthographicRaw.invert = azimuthalInvert(asin);

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/stereographic.js
function stereographicRaw(x2, y2) {
  var cy = cos(y2), k = 1 + cos(x2) * cy;
  return [cy * sin(x2) / k, sin(y2) / k];
}
stereographicRaw.invert = azimuthalInvert(function(z) {
  return 2 * atan(z);
});

// ../node_modules/.pnpm/d3-geo@1.7.1/node_modules/d3-geo/src/projection/transverseMercator.js
function transverseMercatorRaw(lambda, phi) {
  return [log(tan((halfPi + phi) / 2)), -lambda];
}
transverseMercatorRaw.invert = function(x2, y2) {
  return [-y2, 2 * atan(exp(x2)) - halfPi];
};

// ../node_modules/.pnpm/@turf+buffer@7.1.0/node_modules/@turf/buffer/dist/esm/index.js
var { BufferOp, GeoJSONReader, GeoJSONWriter } = import_jsts.default;
function buffer(geojson, radius, options) {
  options = options || {};
  var units = options.units || "kilometers";
  var steps = options.steps || 8;
  if (!geojson)
    throw new Error("geojson is required");
  if (typeof options !== "object")
    throw new Error("options must be an object");
  if (typeof steps !== "number")
    throw new Error("steps must be an number");
  if (radius === void 0)
    throw new Error("radius is required");
  if (steps <= 0)
    throw new Error("steps must be greater than 0");
  var results = [];
  switch (geojson.type) {
    case "GeometryCollection":
      geomEach(geojson, function(geometry) {
        var buffered = bufferFeature(geometry, radius, units, steps);
        if (buffered)
          results.push(buffered);
      });
      return featureCollection(results);
    case "FeatureCollection":
      featureEach(geojson, function(feature2) {
        var multiBuffered = bufferFeature(feature2, radius, units, steps);
        if (multiBuffered) {
          featureEach(multiBuffered, function(buffered) {
            if (buffered)
              results.push(buffered);
          });
        }
      });
      return featureCollection(results);
  }
  return bufferFeature(geojson, radius, units, steps);
}
function bufferFeature(geojson, radius, units, steps) {
  var properties = geojson.properties || {};
  var geometry = geojson.type === "Feature" ? geojson.geometry : geojson;
  if (geometry.type === "GeometryCollection") {
    var results = [];
    geomEach(geojson, function(geometry2) {
      var buffered2 = bufferFeature(geometry2, radius, units, steps);
      if (buffered2)
        results.push(buffered2);
    });
    return featureCollection(results);
  }
  var projection2 = defineProjection(geometry);
  var projected = {
    type: geometry.type,
    coordinates: projectCoords(geometry.coordinates, projection2)
  };
  var reader = new GeoJSONReader();
  var geom = reader.read(projected);
  var distance2 = radiansToLength(lengthToRadians(radius, units), "meters");
  var buffered = BufferOp.bufferOp(geom, distance2, steps);
  var writer = new GeoJSONWriter();
  buffered = writer.write(buffered);
  if (coordsIsNaN(buffered.coordinates))
    return void 0;
  var result = {
    type: buffered.type,
    coordinates: unprojectCoords(buffered.coordinates, projection2)
  };
  return feature(result, properties);
}
function coordsIsNaN(coords) {
  if (Array.isArray(coords[0]))
    return coordsIsNaN(coords[0]);
  return isNaN(coords[0]);
}
function projectCoords(coords, proj) {
  if (typeof coords[0] !== "object")
    return proj(coords);
  return coords.map(function(coord) {
    return projectCoords(coord, proj);
  });
}
function unprojectCoords(coords, proj) {
  if (typeof coords[0] !== "object")
    return proj.invert(coords);
  return coords.map(function(coord) {
    return unprojectCoords(coord, proj);
  });
}
function defineProjection(geojson) {
  var coords = center(geojson).geometry.coordinates;
  var rotation = [-coords[0], -coords[1]];
  return azimuthalEquidistant_default().rotate(rotation).scale(earthRadius);
}

// ../node_modules/.pnpm/@turf+convex@7.1.0/node_modules/@turf/convex/dist/esm/index.js
var import_concaveman = __toESM(require_concaveman());

// ../node_modules/.pnpm/@turf+clusters-kmeans@7.1.0/node_modules/@turf/clusters-kmeans/dist/esm/index.js
var import_skmeans = __toESM(require_main());

// ../node_modules/.pnpm/topojson-server@3.0.1/node_modules/topojson-server/src/hash/point-hash.js
var buffer2 = new ArrayBuffer(16);
var floats = new Float64Array(buffer2);
var uints = new Uint32Array(buffer2);

// ../node_modules/.pnpm/splaytree@3.1.2/node_modules/splaytree/dist/splay.esm.js
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y2, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v2) {
      return step([n, v2]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done) return t;
      if (y2 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y2 = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y2 = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var Node = (
  /** @class */
  /* @__PURE__ */ function() {
    function Node2(key, data) {
      this.next = null;
      this.key = key;
      this.data = data;
      this.left = null;
      this.right = null;
    }
    return Node2;
  }()
);
function DEFAULT_COMPARE(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
function splay(i, t, comparator) {
  var N = new Node(null, null);
  var l = N;
  var r = N;
  while (true) {
    var cmp2 = comparator(i, t.key);
    if (cmp2 < 0) {
      if (t.left === null)
        break;
      if (comparator(i, t.left.key) < 0) {
        var y2 = t.left;
        t.left = y2.right;
        y2.right = t;
        t = y2;
        if (t.left === null)
          break;
      }
      r.left = t;
      r = t;
      t = t.left;
    } else if (cmp2 > 0) {
      if (t.right === null)
        break;
      if (comparator(i, t.right.key) > 0) {
        var y2 = t.right;
        t.right = y2.left;
        y2.left = t;
        t = y2;
        if (t.right === null)
          break;
      }
      l.right = t;
      l = t;
      t = t.right;
    } else
      break;
  }
  l.right = t.left;
  r.left = t.right;
  t.left = N.right;
  t.right = N.left;
  return t;
}
function insert(i, data, t, comparator) {
  var node = new Node(i, data);
  if (t === null) {
    node.left = node.right = null;
    return node;
  }
  t = splay(i, t, comparator);
  var cmp2 = comparator(i, t.key);
  if (cmp2 < 0) {
    node.left = t.left;
    node.right = t;
    t.left = null;
  } else if (cmp2 >= 0) {
    node.right = t.right;
    node.left = t;
    t.right = null;
  }
  return node;
}
function split(key, v2, comparator) {
  var left = null;
  var right = null;
  if (v2) {
    v2 = splay(key, v2, comparator);
    var cmp2 = comparator(v2.key, key);
    if (cmp2 === 0) {
      left = v2.left;
      right = v2.right;
    } else if (cmp2 < 0) {
      right = v2.right;
      v2.right = null;
      left = v2;
    } else {
      left = v2.left;
      v2.left = null;
      right = v2;
    }
  }
  return { left, right };
}
function merge(left, right, comparator) {
  if (right === null)
    return left;
  if (left === null)
    return right;
  right = splay(left.key, right, comparator);
  right.left = left;
  return right;
}
function printRow(root, prefix, isTail, out, printNode) {
  if (root) {
    out("" + prefix + (isTail ? "└── " : "├── ") + printNode(root) + "\n");
    var indent = prefix + (isTail ? "    " : "│   ");
    if (root.left)
      printRow(root.left, indent, false, out, printNode);
    if (root.right)
      printRow(root.right, indent, true, out, printNode);
  }
}
var Tree = (
  /** @class */
  function() {
    function Tree2(comparator) {
      if (comparator === void 0) {
        comparator = DEFAULT_COMPARE;
      }
      this._root = null;
      this._size = 0;
      this._comparator = comparator;
    }
    Tree2.prototype.insert = function(key, data) {
      this._size++;
      return this._root = insert(key, data, this._root, this._comparator);
    };
    Tree2.prototype.add = function(key, data) {
      var node = new Node(key, data);
      if (this._root === null) {
        node.left = node.right = null;
        this._size++;
        this._root = node;
      }
      var comparator = this._comparator;
      var t = splay(key, this._root, comparator);
      var cmp2 = comparator(key, t.key);
      if (cmp2 === 0)
        this._root = t;
      else {
        if (cmp2 < 0) {
          node.left = t.left;
          node.right = t;
          t.left = null;
        } else if (cmp2 > 0) {
          node.right = t.right;
          node.left = t;
          t.right = null;
        }
        this._size++;
        this._root = node;
      }
      return this._root;
    };
    Tree2.prototype.remove = function(key) {
      this._root = this._remove(key, this._root, this._comparator);
    };
    Tree2.prototype._remove = function(i, t, comparator) {
      var x2;
      if (t === null)
        return null;
      t = splay(i, t, comparator);
      var cmp2 = comparator(i, t.key);
      if (cmp2 === 0) {
        if (t.left === null) {
          x2 = t.right;
        } else {
          x2 = splay(i, t.left, comparator);
          x2.right = t.right;
        }
        this._size--;
        return x2;
      }
      return t;
    };
    Tree2.prototype.pop = function() {
      var node = this._root;
      if (node) {
        while (node.left)
          node = node.left;
        this._root = splay(node.key, this._root, this._comparator);
        this._root = this._remove(node.key, this._root, this._comparator);
        return { key: node.key, data: node.data };
      }
      return null;
    };
    Tree2.prototype.findStatic = function(key) {
      var current = this._root;
      var compare = this._comparator;
      while (current) {
        var cmp2 = compare(key, current.key);
        if (cmp2 === 0)
          return current;
        else if (cmp2 < 0)
          current = current.left;
        else
          current = current.right;
      }
      return null;
    };
    Tree2.prototype.find = function(key) {
      if (this._root) {
        this._root = splay(key, this._root, this._comparator);
        if (this._comparator(key, this._root.key) !== 0)
          return null;
      }
      return this._root;
    };
    Tree2.prototype.contains = function(key) {
      var current = this._root;
      var compare = this._comparator;
      while (current) {
        var cmp2 = compare(key, current.key);
        if (cmp2 === 0)
          return true;
        else if (cmp2 < 0)
          current = current.left;
        else
          current = current.right;
      }
      return false;
    };
    Tree2.prototype.forEach = function(visitor, ctx) {
      var current = this._root;
      var Q = [];
      var done = false;
      while (!done) {
        if (current !== null) {
          Q.push(current);
          current = current.left;
        } else {
          if (Q.length !== 0) {
            current = Q.pop();
            visitor.call(ctx, current);
            current = current.right;
          } else
            done = true;
        }
      }
      return this;
    };
    Tree2.prototype.range = function(low, high, fn, ctx) {
      var Q = [];
      var compare = this._comparator;
      var node = this._root;
      var cmp2;
      while (Q.length !== 0 || node) {
        if (node) {
          Q.push(node);
          node = node.left;
        } else {
          node = Q.pop();
          cmp2 = compare(node.key, high);
          if (cmp2 > 0) {
            break;
          } else if (compare(node.key, low) >= 0) {
            if (fn.call(ctx, node))
              return this;
          }
          node = node.right;
        }
      }
      return this;
    };
    Tree2.prototype.keys = function() {
      var keys = [];
      this.forEach(function(_a) {
        var key = _a.key;
        return keys.push(key);
      });
      return keys;
    };
    Tree2.prototype.values = function() {
      var values = [];
      this.forEach(function(_a) {
        var data = _a.data;
        return values.push(data);
      });
      return values;
    };
    Tree2.prototype.min = function() {
      if (this._root)
        return this.minNode(this._root).key;
      return null;
    };
    Tree2.prototype.max = function() {
      if (this._root)
        return this.maxNode(this._root).key;
      return null;
    };
    Tree2.prototype.minNode = function(t) {
      if (t === void 0) {
        t = this._root;
      }
      if (t)
        while (t.left)
          t = t.left;
      return t;
    };
    Tree2.prototype.maxNode = function(t) {
      if (t === void 0) {
        t = this._root;
      }
      if (t)
        while (t.right)
          t = t.right;
      return t;
    };
    Tree2.prototype.at = function(index2) {
      var current = this._root;
      var done = false;
      var i = 0;
      var Q = [];
      while (!done) {
        if (current) {
          Q.push(current);
          current = current.left;
        } else {
          if (Q.length > 0) {
            current = Q.pop();
            if (i === index2)
              return current;
            i++;
            current = current.right;
          } else
            done = true;
        }
      }
      return null;
    };
    Tree2.prototype.next = function(d) {
      var root = this._root;
      var successor = null;
      if (d.right) {
        successor = d.right;
        while (successor.left)
          successor = successor.left;
        return successor;
      }
      var comparator = this._comparator;
      while (root) {
        var cmp2 = comparator(d.key, root.key);
        if (cmp2 === 0)
          break;
        else if (cmp2 < 0) {
          successor = root;
          root = root.left;
        } else
          root = root.right;
      }
      return successor;
    };
    Tree2.prototype.prev = function(d) {
      var root = this._root;
      var predecessor = null;
      if (d.left !== null) {
        predecessor = d.left;
        while (predecessor.right)
          predecessor = predecessor.right;
        return predecessor;
      }
      var comparator = this._comparator;
      while (root) {
        var cmp2 = comparator(d.key, root.key);
        if (cmp2 === 0)
          break;
        else if (cmp2 < 0)
          root = root.left;
        else {
          predecessor = root;
          root = root.right;
        }
      }
      return predecessor;
    };
    Tree2.prototype.clear = function() {
      this._root = null;
      this._size = 0;
      return this;
    };
    Tree2.prototype.toList = function() {
      return toList(this._root);
    };
    Tree2.prototype.load = function(keys, values, presort) {
      if (values === void 0) {
        values = [];
      }
      if (presort === void 0) {
        presort = false;
      }
      var size = keys.length;
      var comparator = this._comparator;
      if (presort)
        sort(keys, values, 0, size - 1, comparator);
      if (this._root === null) {
        this._root = loadRecursive(keys, values, 0, size);
        this._size = size;
      } else {
        var mergedList = mergeLists(this.toList(), createList(keys, values), comparator);
        size = this._size + size;
        this._root = sortedListToBST({ head: mergedList }, 0, size);
      }
      return this;
    };
    Tree2.prototype.isEmpty = function() {
      return this._root === null;
    };
    Object.defineProperty(Tree2.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Tree2.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: true,
      configurable: true
    });
    Tree2.prototype.toString = function(printNode) {
      if (printNode === void 0) {
        printNode = function(n) {
          return String(n.key);
        };
      }
      var out = [];
      printRow(this._root, "", true, function(v2) {
        return out.push(v2);
      }, printNode);
      return out.join("");
    };
    Tree2.prototype.update = function(key, newKey, newData) {
      var comparator = this._comparator;
      var _a = split(key, this._root, comparator), left = _a.left, right = _a.right;
      if (comparator(key, newKey) < 0) {
        right = insert(newKey, newData, right, comparator);
      } else {
        left = insert(newKey, newData, left, comparator);
      }
      this._root = merge(left, right, comparator);
    };
    Tree2.prototype.split = function(key) {
      return split(key, this._root, this._comparator);
    };
    Tree2.prototype[Symbol.iterator] = function() {
      var current, Q, done;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            current = this._root;
            Q = [];
            done = false;
            _a.label = 1;
          case 1:
            if (!!done) return [3, 6];
            if (!(current !== null)) return [3, 2];
            Q.push(current);
            current = current.left;
            return [3, 5];
          case 2:
            if (!(Q.length !== 0)) return [3, 4];
            current = Q.pop();
            return [4, current];
          case 3:
            _a.sent();
            current = current.right;
            return [3, 5];
          case 4:
            done = true;
            _a.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    };
    return Tree2;
  }()
);
function loadRecursive(keys, values, start, end) {
  var size = end - start;
  if (size > 0) {
    var middle = start + Math.floor(size / 2);
    var key = keys[middle];
    var data = values[middle];
    var node = new Node(key, data);
    node.left = loadRecursive(keys, values, start, middle);
    node.right = loadRecursive(keys, values, middle + 1, end);
    return node;
  }
  return null;
}
function createList(keys, values) {
  var head = new Node(null, null);
  var p = head;
  for (var i = 0; i < keys.length; i++) {
    p = p.next = new Node(keys[i], values[i]);
  }
  p.next = null;
  return head.next;
}
function toList(root) {
  var current = root;
  var Q = [];
  var done = false;
  var head = new Node(null, null);
  var p = head;
  while (!done) {
    if (current) {
      Q.push(current);
      current = current.left;
    } else {
      if (Q.length > 0) {
        current = p = p.next = Q.pop();
        current = current.right;
      } else
        done = true;
    }
  }
  p.next = null;
  return head.next;
}
function sortedListToBST(list, start, end) {
  var size = end - start;
  if (size > 0) {
    var middle = start + Math.floor(size / 2);
    var left = sortedListToBST(list, start, middle);
    var root = list.head;
    root.left = left;
    list.head = list.head.next;
    root.right = sortedListToBST(list, middle + 1, end);
    return root;
  }
  return null;
}
function mergeLists(l1, l2, compare) {
  var head = new Node(null, null);
  var p = head;
  var p1 = l1;
  var p2 = l2;
  while (p1 !== null && p2 !== null) {
    if (compare(p1.key, p2.key) < 0) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }
  if (p1 !== null) {
    p.next = p1;
  } else if (p2 !== null) {
    p.next = p2;
  }
  return head.next;
}
function sort(keys, values, left, right, compare) {
  if (left >= right)
    return;
  var pivot = keys[left + right >> 1];
  var i = left - 1;
  var j = right + 1;
  while (true) {
    do
      i++;
    while (compare(keys[i], pivot) < 0);
    do
      j--;
    while (compare(keys[j], pivot) > 0);
    if (i >= j)
      break;
    var tmp = keys[i];
    keys[i] = keys[j];
    keys[j] = tmp;
    tmp = values[i];
    values[i] = values[j];
    values[j] = tmp;
  }
  sort(keys, values, left, j, compare);
  sort(keys, values, j + 1, right, compare);
}
var splay_esm_default = Tree;

// ../node_modules/.pnpm/robust-predicates@3.0.2/node_modules/robust-predicates/esm/util.js
var epsilon3 = 11102230246251565e-32;
var splitter = 134217729;
var resulterrbound = (3 + 8 * epsilon3) * epsilon3;
function sum2(elen, e, flen, f, h) {
  let Q, Qnew, hh, bvirt;
  let enow = e[0];
  let fnow = f[0];
  let eindex = 0;
  let findex = 0;
  if (fnow > enow === fnow > -enow) {
    Q = enow;
    enow = e[++eindex];
  } else {
    Q = fnow;
    fnow = f[++findex];
  }
  let hindex = 0;
  if (eindex < elen && findex < flen) {
    if (fnow > enow === fnow > -enow) {
      Qnew = enow + Q;
      hh = Q - (Qnew - enow);
      enow = e[++eindex];
    } else {
      Qnew = fnow + Q;
      hh = Q - (Qnew - fnow);
      fnow = f[++findex];
    }
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
    while (eindex < elen && findex < flen) {
      if (fnow > enow === fnow > -enow) {
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        enow = e[++eindex];
      } else {
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f[++findex];
      }
      Q = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
    }
  }
  while (eindex < elen) {
    Qnew = Q + enow;
    bvirt = Qnew - Q;
    hh = Q - (Qnew - bvirt) + (enow - bvirt);
    enow = e[++eindex];
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  while (findex < flen) {
    Qnew = Q + fnow;
    bvirt = Qnew - Q;
    hh = Q - (Qnew - bvirt) + (fnow - bvirt);
    fnow = f[++findex];
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  if (Q !== 0 || hindex === 0) {
    h[hindex++] = Q;
  }
  return hindex;
}
function estimate(elen, e) {
  let Q = e[0];
  for (let i = 1; i < elen; i++) Q += e[i];
  return Q;
}
function vec(n) {
  return new Float64Array(n);
}

// ../node_modules/.pnpm/robust-predicates@3.0.2/node_modules/robust-predicates/esm/orient2d.js
var ccwerrboundA = (3 + 16 * epsilon3) * epsilon3;
var ccwerrboundB = (2 + 12 * epsilon3) * epsilon3;
var ccwerrboundC = (9 + 64 * epsilon3) * epsilon3 * epsilon3;
var B = vec(4);
var C1 = vec(8);
var C2 = vec(12);
var D = vec(16);
var u = vec(4);
function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
  let acxtail, acytail, bcxtail, bcytail;
  let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u32;
  const acx = ax - cx;
  const bcx = bx - cx;
  const acy = ay - cy;
  const bcy = by - cy;
  s1 = acx * bcy;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcx;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  B[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  B[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  B[2] = _j - (u32 - bvirt) + (_i - bvirt);
  B[3] = u32;
  let det = estimate(4, B);
  let errbound = ccwerrboundB * detsum;
  if (det >= errbound || -det >= errbound) {
    return det;
  }
  bvirt = ax - acx;
  acxtail = ax - (acx + bvirt) + (bvirt - cx);
  bvirt = bx - bcx;
  bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
  bvirt = ay - acy;
  acytail = ay - (acy + bvirt) + (bvirt - cy);
  bvirt = by - bcy;
  bcytail = by - (bcy + bvirt) + (bvirt - cy);
  if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
    return det;
  }
  errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
  det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
  if (det >= errbound || -det >= errbound) return det;
  s1 = acxtail * bcy;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcx;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const C1len = sum2(4, B, 4, u, C1);
  s1 = acx * bcytail;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcxtail;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const C2len = sum2(C1len, C1, 4, u, C2);
  s1 = acxtail * bcytail;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcxtail;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const Dlen = sum2(C2len, C2, 4, u, D);
  return D[Dlen - 1];
}
function orient2d(ax, ay, bx, by, cx, cy) {
  const detleft = (ay - cy) * (bx - cx);
  const detright = (ax - cx) * (by - cy);
  const det = detleft - detright;
  const detsum = Math.abs(detleft + detright);
  if (Math.abs(det) >= ccwerrboundA * detsum) return det;
  return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}

// ../node_modules/.pnpm/robust-predicates@3.0.2/node_modules/robust-predicates/esm/orient3d.js
var o3derrboundA = (7 + 56 * epsilon3) * epsilon3;
var o3derrboundB = (3 + 28 * epsilon3) * epsilon3;
var o3derrboundC = (26 + 288 * epsilon3) * epsilon3 * epsilon3;
var bc = vec(4);
var ca = vec(4);
var ab = vec(4);
var at_b = vec(4);
var at_c = vec(4);
var bt_c = vec(4);
var bt_a = vec(4);
var ct_a = vec(4);
var ct_b = vec(4);
var bct = vec(8);
var cat = vec(8);
var abt = vec(8);
var u2 = vec(4);
var _8 = vec(8);
var _8b = vec(8);
var _16 = vec(8);
var _12 = vec(12);
var fin = vec(192);
var fin2 = vec(192);

// ../node_modules/.pnpm/robust-predicates@3.0.2/node_modules/robust-predicates/esm/incircle.js
var iccerrboundA = (10 + 96 * epsilon3) * epsilon3;
var iccerrboundB = (4 + 48 * epsilon3) * epsilon3;
var iccerrboundC = (44 + 576 * epsilon3) * epsilon3 * epsilon3;
var bc2 = vec(4);
var ca2 = vec(4);
var ab2 = vec(4);
var aa = vec(4);
var bb = vec(4);
var cc = vec(4);
var u3 = vec(4);
var v = vec(4);
var axtbc = vec(8);
var aytbc = vec(8);
var bxtca = vec(8);
var bytca = vec(8);
var cxtab = vec(8);
var cytab = vec(8);
var abt2 = vec(8);
var bct2 = vec(8);
var cat2 = vec(8);
var abtt = vec(4);
var bctt = vec(4);
var catt = vec(4);
var _82 = vec(8);
var _162 = vec(16);
var _16b = vec(16);
var _16c = vec(16);
var _32 = vec(32);
var _32b = vec(32);
var _48 = vec(48);
var _64 = vec(64);
var fin3 = vec(1152);
var fin22 = vec(1152);

// ../node_modules/.pnpm/robust-predicates@3.0.2/node_modules/robust-predicates/esm/insphere.js
var isperrboundA = (16 + 224 * epsilon3) * epsilon3;
var isperrboundB = (5 + 72 * epsilon3) * epsilon3;
var isperrboundC = (71 + 1408 * epsilon3) * epsilon3 * epsilon3;
var ab3 = vec(4);
var bc3 = vec(4);
var cd = vec(4);
var de = vec(4);
var ea = vec(4);
var ac = vec(4);
var bd = vec(4);
var ce = vec(4);
var da = vec(4);
var eb = vec(4);
var abc = vec(24);
var bcd = vec(24);
var cde = vec(24);
var dea = vec(24);
var eab = vec(24);
var abd = vec(24);
var bce = vec(24);
var cda = vec(24);
var deb = vec(24);
var eac = vec(24);
var adet = vec(1152);
var bdet = vec(1152);
var cdet = vec(1152);
var ddet = vec(1152);
var edet = vec(1152);
var abdet = vec(2304);
var cddet = vec(2304);
var cdedet = vec(3456);
var deter = vec(5760);
var _83 = vec(8);
var _8b2 = vec(8);
var _8c = vec(8);
var _163 = vec(16);
var _24 = vec(24);
var _482 = vec(48);
var _48b = vec(48);
var _96 = vec(96);
var _192 = vec(192);
var _384x = vec(384);
var _384y = vec(384);
var _384z = vec(384);
var _768 = vec(768);
var xdet = vec(96);
var ydet = vec(96);
var zdet = vec(96);
var fin4 = vec(1152);

// ../node_modules/.pnpm/polygon-clipping@0.15.7/node_modules/polygon-clipping/dist/polygon-clipping.esm.js
var isInBbox = (bbox2, point2) => {
  return bbox2.ll.x <= point2.x && point2.x <= bbox2.ur.x && bbox2.ll.y <= point2.y && point2.y <= bbox2.ur.y;
};
var getBboxOverlap = (b1, b2) => {
  if (b2.ur.x < b1.ll.x || b1.ur.x < b2.ll.x || b2.ur.y < b1.ll.y || b1.ur.y < b2.ll.y) return null;
  const lowerX = b1.ll.x < b2.ll.x ? b2.ll.x : b1.ll.x;
  const upperX = b1.ur.x < b2.ur.x ? b1.ur.x : b2.ur.x;
  const lowerY = b1.ll.y < b2.ll.y ? b2.ll.y : b1.ll.y;
  const upperY = b1.ur.y < b2.ur.y ? b1.ur.y : b2.ur.y;
  return {
    ll: {
      x: lowerX,
      y: lowerY
    },
    ur: {
      x: upperX,
      y: upperY
    }
  };
};
var epsilon4 = Number.EPSILON;
if (epsilon4 === void 0) epsilon4 = Math.pow(2, -52);
var EPSILON_SQ = epsilon4 * epsilon4;
var cmp = (a, b) => {
  if (-epsilon4 < a && a < epsilon4) {
    if (-epsilon4 < b && b < epsilon4) {
      return 0;
    }
  }
  const ab4 = a - b;
  if (ab4 * ab4 < EPSILON_SQ * a * b) {
    return 0;
  }
  return a < b ? -1 : 1;
};
var PtRounder = class {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new CoordRounder();
    this.yRounder = new CoordRounder();
  }
  round(x2, y2) {
    return {
      x: this.xRounder.round(x2),
      y: this.yRounder.round(y2)
    };
  }
};
var CoordRounder = class {
  constructor() {
    this.tree = new splay_esm_default();
    this.round(0);
  }
  // Note: this can rounds input values backwards or forwards.
  //       You might ask, why not restrict this to just rounding
  //       forwards? Wouldn't that allow left endpoints to always
  //       remain left endpoints during splitting (never change to
  //       right). No - it wouldn't, because we snap intersections
  //       to endpoints (to establish independence from the segment
  //       angle for t-intersections).
  round(coord) {
    const node = this.tree.add(coord);
    const prevNode = this.tree.prev(node);
    if (prevNode !== null && cmp(node.key, prevNode.key) === 0) {
      this.tree.remove(coord);
      return prevNode.key;
    }
    const nextNode = this.tree.next(node);
    if (nextNode !== null && cmp(node.key, nextNode.key) === 0) {
      this.tree.remove(coord);
      return nextNode.key;
    }
    return coord;
  }
};
var rounder = new PtRounder();
var crossProduct = (a, b) => a.x * b.y - a.y * b.x;
var dotProduct = (a, b) => a.x * b.x + a.y * b.y;
var compareVectorAngles = (basePt, endPt1, endPt2) => {
  const res = orient2d(basePt.x, basePt.y, endPt1.x, endPt1.y, endPt2.x, endPt2.y);
  if (res > 0) return -1;
  if (res < 0) return 1;
  return 0;
};
var length = (v2) => Math.sqrt(dotProduct(v2, v2));
var sineOfAngle = (pShared, pBase, pAngle) => {
  const vBase = {
    x: pBase.x - pShared.x,
    y: pBase.y - pShared.y
  };
  const vAngle = {
    x: pAngle.x - pShared.x,
    y: pAngle.y - pShared.y
  };
  return crossProduct(vAngle, vBase) / length(vAngle) / length(vBase);
};
var cosineOfAngle = (pShared, pBase, pAngle) => {
  const vBase = {
    x: pBase.x - pShared.x,
    y: pBase.y - pShared.y
  };
  const vAngle = {
    x: pAngle.x - pShared.x,
    y: pAngle.y - pShared.y
  };
  return dotProduct(vAngle, vBase) / length(vAngle) / length(vBase);
};
var horizontalIntersection = (pt, v2, y2) => {
  if (v2.y === 0) return null;
  return {
    x: pt.x + v2.x / v2.y * (y2 - pt.y),
    y: y2
  };
};
var verticalIntersection = (pt, v2, x2) => {
  if (v2.x === 0) return null;
  return {
    x: x2,
    y: pt.y + v2.y / v2.x * (x2 - pt.x)
  };
};
var intersection$1 = (pt1, v1, pt2, v2) => {
  if (v1.x === 0) return verticalIntersection(pt2, v2, pt1.x);
  if (v2.x === 0) return verticalIntersection(pt1, v1, pt2.x);
  if (v1.y === 0) return horizontalIntersection(pt2, v2, pt1.y);
  if (v2.y === 0) return horizontalIntersection(pt1, v1, pt2.y);
  const kross = crossProduct(v1, v2);
  if (kross == 0) return null;
  const ve = {
    x: pt2.x - pt1.x,
    y: pt2.y - pt1.y
  };
  const d1 = crossProduct(ve, v1) / kross;
  const d2 = crossProduct(ve, v2) / kross;
  const x12 = pt1.x + d2 * v1.x, x2 = pt2.x + d1 * v2.x;
  const y12 = pt1.y + d2 * v1.y, y2 = pt2.y + d1 * v2.y;
  const x3 = (x12 + x2) / 2;
  const y3 = (y12 + y2) / 2;
  return {
    x: x3,
    y: y3
  };
};
var SweepEvent = class _SweepEvent {
  // for ordering sweep events in the sweep event queue
  static compare(a, b) {
    const ptCmp = _SweepEvent.comparePoints(a.point, b.point);
    if (ptCmp !== 0) return ptCmp;
    if (a.point !== b.point) a.link(b);
    if (a.isLeft !== b.isLeft) return a.isLeft ? 1 : -1;
    return Segment.compare(a.segment, b.segment);
  }
  // for ordering points in sweep line order
  static comparePoints(aPt, bPt) {
    if (aPt.x < bPt.x) return -1;
    if (aPt.x > bPt.x) return 1;
    if (aPt.y < bPt.y) return -1;
    if (aPt.y > bPt.y) return 1;
    return 0;
  }
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(point2, isLeft) {
    if (point2.events === void 0) point2.events = [this];
    else point2.events.push(this);
    this.point = point2;
    this.isLeft = isLeft;
  }
  link(other) {
    if (other.point === this.point) {
      throw new Error("Tried to link already linked events");
    }
    const otherEvents = other.point.events;
    for (let i = 0, iMax = otherEvents.length; i < iMax; i++) {
      const evt = otherEvents[i];
      this.point.events.push(evt);
      evt.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const numEvents = this.point.events.length;
    for (let i = 0; i < numEvents; i++) {
      const evt1 = this.point.events[i];
      if (evt1.segment.consumedBy !== void 0) continue;
      for (let j = i + 1; j < numEvents; j++) {
        const evt2 = this.point.events[j];
        if (evt2.consumedBy !== void 0) continue;
        if (evt1.otherSE.point.events !== evt2.otherSE.point.events) continue;
        evt1.segment.consume(evt2.segment);
      }
    }
  }
  getAvailableLinkedEvents() {
    const events = [];
    for (let i = 0, iMax = this.point.events.length; i < iMax; i++) {
      const evt = this.point.events[i];
      if (evt !== this && !evt.segment.ringOut && evt.segment.isInResult()) {
        events.push(evt);
      }
    }
    return events;
  }
  /**
   * Returns a comparator function for sorting linked events that will
   * favor the event that will give us the smallest left-side angle.
   * All ring construction starts as low as possible heading to the right,
   * so by always turning left as sharp as possible we'll get polygons
   * without uncessary loops & holes.
   *
   * The comparator function has a compute cache such that it avoids
   * re-computing already-computed values.
   */
  getLeftmostComparator(baseEvent) {
    const cache = /* @__PURE__ */ new Map();
    const fillCache = (linkedEvent) => {
      const nextEvent = linkedEvent.otherSE;
      cache.set(linkedEvent, {
        sine: sineOfAngle(this.point, baseEvent.point, nextEvent.point),
        cosine: cosineOfAngle(this.point, baseEvent.point, nextEvent.point)
      });
    };
    return (a, b) => {
      if (!cache.has(a)) fillCache(a);
      if (!cache.has(b)) fillCache(b);
      const {
        sine: asine,
        cosine: acosine
      } = cache.get(a);
      const {
        sine: bsine,
        cosine: bcosine
      } = cache.get(b);
      if (asine >= 0 && bsine >= 0) {
        if (acosine < bcosine) return 1;
        if (acosine > bcosine) return -1;
        return 0;
      }
      if (asine < 0 && bsine < 0) {
        if (acosine < bcosine) return -1;
        if (acosine > bcosine) return 1;
        return 0;
      }
      if (bsine < asine) return -1;
      if (bsine > asine) return 1;
      return 0;
    };
  }
};
var segmentId = 0;
var Segment = class _Segment {
  /* This compare() function is for ordering segments in the sweep
   * line tree, and does so according to the following criteria:
   *
   * Consider the vertical line that lies an infinestimal step to the
   * right of the right-more of the two left endpoints of the input
   * segments. Imagine slowly moving a point up from negative infinity
   * in the increasing y direction. Which of the two segments will that
   * point intersect first? That segment comes 'before' the other one.
   *
   * If neither segment would be intersected by such a line, (if one
   * or more of the segments are vertical) then the line to be considered
   * is directly on the right-more of the two left inputs.
   */
  static compare(a, b) {
    const alx = a.leftSE.point.x;
    const blx = b.leftSE.point.x;
    const arx = a.rightSE.point.x;
    const brx = b.rightSE.point.x;
    if (brx < alx) return 1;
    if (arx < blx) return -1;
    const aly = a.leftSE.point.y;
    const bly = b.leftSE.point.y;
    const ary = a.rightSE.point.y;
    const bry = b.rightSE.point.y;
    if (alx < blx) {
      if (bly < aly && bly < ary) return 1;
      if (bly > aly && bly > ary) return -1;
      const aCmpBLeft = a.comparePoint(b.leftSE.point);
      if (aCmpBLeft < 0) return 1;
      if (aCmpBLeft > 0) return -1;
      const bCmpARight = b.comparePoint(a.rightSE.point);
      if (bCmpARight !== 0) return bCmpARight;
      return -1;
    }
    if (alx > blx) {
      if (aly < bly && aly < bry) return -1;
      if (aly > bly && aly > bry) return 1;
      const bCmpALeft = b.comparePoint(a.leftSE.point);
      if (bCmpALeft !== 0) return bCmpALeft;
      const aCmpBRight = a.comparePoint(b.rightSE.point);
      if (aCmpBRight < 0) return 1;
      if (aCmpBRight > 0) return -1;
      return 1;
    }
    if (aly < bly) return -1;
    if (aly > bly) return 1;
    if (arx < brx) {
      const bCmpARight = b.comparePoint(a.rightSE.point);
      if (bCmpARight !== 0) return bCmpARight;
    }
    if (arx > brx) {
      const aCmpBRight = a.comparePoint(b.rightSE.point);
      if (aCmpBRight < 0) return 1;
      if (aCmpBRight > 0) return -1;
    }
    if (arx !== brx) {
      const ay = ary - aly;
      const ax = arx - alx;
      const by = bry - bly;
      const bx = brx - blx;
      if (ay > ax && by < bx) return 1;
      if (ay < ax && by > bx) return -1;
    }
    if (arx > brx) return 1;
    if (arx < brx) return -1;
    if (ary < bry) return -1;
    if (ary > bry) return 1;
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(leftSE, rightSE, rings, windings) {
    this.id = ++segmentId;
    this.leftSE = leftSE;
    leftSE.segment = this;
    leftSE.otherSE = rightSE;
    this.rightSE = rightSE;
    rightSE.segment = this;
    rightSE.otherSE = leftSE;
    this.rings = rings;
    this.windings = windings;
  }
  static fromRing(pt1, pt2, ring) {
    let leftPt, rightPt, winding;
    const cmpPts = SweepEvent.comparePoints(pt1, pt2);
    if (cmpPts < 0) {
      leftPt = pt1;
      rightPt = pt2;
      winding = 1;
    } else if (cmpPts > 0) {
      leftPt = pt2;
      rightPt = pt1;
      winding = -1;
    } else throw new Error(`Tried to create degenerate segment at [${pt1.x}, ${pt1.y}]`);
    const leftSE = new SweepEvent(leftPt, true);
    const rightSE = new SweepEvent(rightPt, false);
    return new _Segment(leftSE, rightSE, [ring], [winding]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(newRightSE) {
    this.rightSE = newRightSE;
    this.rightSE.segment = this;
    this.rightSE.otherSE = this.leftSE;
    this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const y12 = this.leftSE.point.y;
    const y2 = this.rightSE.point.y;
    return {
      ll: {
        x: this.leftSE.point.x,
        y: y12 < y2 ? y12 : y2
      },
      ur: {
        x: this.rightSE.point.x,
        y: y12 > y2 ? y12 : y2
      }
    };
  }
  /* A vector from the left point to the right */
  vector() {
    return {
      x: this.rightSE.point.x - this.leftSE.point.x,
      y: this.rightSE.point.y - this.leftSE.point.y
    };
  }
  isAnEndpoint(pt) {
    return pt.x === this.leftSE.point.x && pt.y === this.leftSE.point.y || pt.x === this.rightSE.point.x && pt.y === this.rightSE.point.y;
  }
  /* Compare this segment with a point.
   *
   * A point P is considered to be colinear to a segment if there
   * exists a distance D such that if we travel along the segment
   * from one * endpoint towards the other a distance D, we find
   * ourselves at point P.
   *
   * Return value indicates:
   *
   *   1: point lies above the segment (to the left of vertical)
   *   0: point is colinear to segment
   *  -1: point lies below the segment (to the right of vertical)
   */
  comparePoint(point2) {
    if (this.isAnEndpoint(point2)) return 0;
    const lPt = this.leftSE.point;
    const rPt = this.rightSE.point;
    const v2 = this.vector();
    if (lPt.x === rPt.x) {
      if (point2.x === lPt.x) return 0;
      return point2.x < lPt.x ? 1 : -1;
    }
    const yDist = (point2.y - lPt.y) / v2.y;
    const xFromYDist = lPt.x + yDist * v2.x;
    if (point2.x === xFromYDist) return 0;
    const xDist = (point2.x - lPt.x) / v2.x;
    const yFromXDist = lPt.y + xDist * v2.y;
    if (point2.y === yFromXDist) return 0;
    return point2.y < yFromXDist ? -1 : 1;
  }
  /**
   * Given another segment, returns the first non-trivial intersection
   * between the two segments (in terms of sweep line ordering), if it exists.
   *
   * A 'non-trivial' intersection is one that will cause one or both of the
   * segments to be split(). As such, 'trivial' vs. 'non-trivial' intersection:
   *
   *   * endpoint of segA with endpoint of segB --> trivial
   *   * endpoint of segA with point along segB --> non-trivial
   *   * endpoint of segB with point along segA --> non-trivial
   *   * point along segA with point along segB --> non-trivial
   *
   * If no non-trivial intersection exists, return null
   * Else, return null.
   */
  getIntersection(other) {
    const tBbox = this.bbox();
    const oBbox = other.bbox();
    const bboxOverlap = getBboxOverlap(tBbox, oBbox);
    if (bboxOverlap === null) return null;
    const tlp = this.leftSE.point;
    const trp = this.rightSE.point;
    const olp = other.leftSE.point;
    const orp = other.rightSE.point;
    const touchesOtherLSE = isInBbox(tBbox, olp) && this.comparePoint(olp) === 0;
    const touchesThisLSE = isInBbox(oBbox, tlp) && other.comparePoint(tlp) === 0;
    const touchesOtherRSE = isInBbox(tBbox, orp) && this.comparePoint(orp) === 0;
    const touchesThisRSE = isInBbox(oBbox, trp) && other.comparePoint(trp) === 0;
    if (touchesThisLSE && touchesOtherLSE) {
      if (touchesThisRSE && !touchesOtherRSE) return trp;
      if (!touchesThisRSE && touchesOtherRSE) return orp;
      return null;
    }
    if (touchesThisLSE) {
      if (touchesOtherRSE) {
        if (tlp.x === orp.x && tlp.y === orp.y) return null;
      }
      return tlp;
    }
    if (touchesOtherLSE) {
      if (touchesThisRSE) {
        if (trp.x === olp.x && trp.y === olp.y) return null;
      }
      return olp;
    }
    if (touchesThisRSE && touchesOtherRSE) return null;
    if (touchesThisRSE) return trp;
    if (touchesOtherRSE) return orp;
    const pt = intersection$1(tlp, this.vector(), olp, other.vector());
    if (pt === null) return null;
    if (!isInBbox(bboxOverlap, pt)) return null;
    return rounder.round(pt.x, pt.y);
  }
  /**
   * Split the given segment into multiple segments on the given points.
   *  * Each existing segment will retain its leftSE and a new rightSE will be
   *    generated for it.
   *  * A new segment will be generated which will adopt the original segment's
   *    rightSE, and a new leftSE will be generated for it.
   *  * If there are more than two points given to split on, new segments
   *    in the middle will be generated with new leftSE and rightSE's.
   *  * An array of the newly generated SweepEvents will be returned.
   *
   * Warning: input array of points is modified
   */
  split(point2) {
    const newEvents = [];
    const alreadyLinked = point2.events !== void 0;
    const newLeftSE = new SweepEvent(point2, true);
    const newRightSE = new SweepEvent(point2, false);
    const oldRightSE = this.rightSE;
    this.replaceRightSE(newRightSE);
    newEvents.push(newRightSE);
    newEvents.push(newLeftSE);
    const newSeg = new _Segment(newLeftSE, oldRightSE, this.rings.slice(), this.windings.slice());
    if (SweepEvent.comparePoints(newSeg.leftSE.point, newSeg.rightSE.point) > 0) {
      newSeg.swapEvents();
    }
    if (SweepEvent.comparePoints(this.leftSE.point, this.rightSE.point) > 0) {
      this.swapEvents();
    }
    if (alreadyLinked) {
      newLeftSE.checkForConsuming();
      newRightSE.checkForConsuming();
    }
    return newEvents;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const tmpEvt = this.rightSE;
    this.rightSE = this.leftSE;
    this.leftSE = tmpEvt;
    this.leftSE.isLeft = true;
    this.rightSE.isLeft = false;
    for (let i = 0, iMax = this.windings.length; i < iMax; i++) {
      this.windings[i] *= -1;
    }
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(other) {
    let consumer = this;
    let consumee = other;
    while (consumer.consumedBy) consumer = consumer.consumedBy;
    while (consumee.consumedBy) consumee = consumee.consumedBy;
    const cmp2 = _Segment.compare(consumer, consumee);
    if (cmp2 === 0) return;
    if (cmp2 > 0) {
      const tmp = consumer;
      consumer = consumee;
      consumee = tmp;
    }
    if (consumer.prev === consumee) {
      const tmp = consumer;
      consumer = consumee;
      consumee = tmp;
    }
    for (let i = 0, iMax = consumee.rings.length; i < iMax; i++) {
      const ring = consumee.rings[i];
      const winding = consumee.windings[i];
      const index2 = consumer.rings.indexOf(ring);
      if (index2 === -1) {
        consumer.rings.push(ring);
        consumer.windings.push(winding);
      } else consumer.windings[index2] += winding;
    }
    consumee.rings = null;
    consumee.windings = null;
    consumee.consumedBy = consumer;
    consumee.leftSE.consumedBy = consumer.leftSE;
    consumee.rightSE.consumedBy = consumer.rightSE;
  }
  /* The first segment previous segment chain that is in the result */
  prevInResult() {
    if (this._prevInResult !== void 0) return this._prevInResult;
    if (!this.prev) this._prevInResult = null;
    else if (this.prev.isInResult()) this._prevInResult = this.prev;
    else this._prevInResult = this.prev.prevInResult();
    return this._prevInResult;
  }
  beforeState() {
    if (this._beforeState !== void 0) return this._beforeState;
    if (!this.prev) this._beforeState = {
      rings: [],
      windings: [],
      multiPolys: []
    };
    else {
      const seg = this.prev.consumedBy || this.prev;
      this._beforeState = seg.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const beforeState = this.beforeState();
    this._afterState = {
      rings: beforeState.rings.slice(0),
      windings: beforeState.windings.slice(0),
      multiPolys: []
    };
    const ringsAfter = this._afterState.rings;
    const windingsAfter = this._afterState.windings;
    const mpsAfter = this._afterState.multiPolys;
    for (let i = 0, iMax = this.rings.length; i < iMax; i++) {
      const ring = this.rings[i];
      const winding = this.windings[i];
      const index2 = ringsAfter.indexOf(ring);
      if (index2 === -1) {
        ringsAfter.push(ring);
        windingsAfter.push(winding);
      } else windingsAfter[index2] += winding;
    }
    const polysAfter = [];
    const polysExclude = [];
    for (let i = 0, iMax = ringsAfter.length; i < iMax; i++) {
      if (windingsAfter[i] === 0) continue;
      const ring = ringsAfter[i];
      const poly = ring.poly;
      if (polysExclude.indexOf(poly) !== -1) continue;
      if (ring.isExterior) polysAfter.push(poly);
      else {
        if (polysExclude.indexOf(poly) === -1) polysExclude.push(poly);
        const index2 = polysAfter.indexOf(ring.poly);
        if (index2 !== -1) polysAfter.splice(index2, 1);
      }
    }
    for (let i = 0, iMax = polysAfter.length; i < iMax; i++) {
      const mp = polysAfter[i].multiPoly;
      if (mpsAfter.indexOf(mp) === -1) mpsAfter.push(mp);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return false;
    if (this._isInResult !== void 0) return this._isInResult;
    const mpsBefore = this.beforeState().multiPolys;
    const mpsAfter = this.afterState().multiPolys;
    switch (operation.type) {
      case "union": {
        const noBefores = mpsBefore.length === 0;
        const noAfters = mpsAfter.length === 0;
        this._isInResult = noBefores !== noAfters;
        break;
      }
      case "intersection": {
        let least;
        let most;
        if (mpsBefore.length < mpsAfter.length) {
          least = mpsBefore.length;
          most = mpsAfter.length;
        } else {
          least = mpsAfter.length;
          most = mpsBefore.length;
        }
        this._isInResult = most === operation.numMultiPolys && least < most;
        break;
      }
      case "xor": {
        const diff = Math.abs(mpsBefore.length - mpsAfter.length);
        this._isInResult = diff % 2 === 1;
        break;
      }
      case "difference": {
        const isJustSubject = (mps) => mps.length === 1 && mps[0].isSubject;
        this._isInResult = isJustSubject(mpsBefore) !== isJustSubject(mpsAfter);
        break;
      }
      default:
        throw new Error(`Unrecognized operation type found ${operation.type}`);
    }
    return this._isInResult;
  }
};
var RingIn = class {
  constructor(geomRing, poly, isExterior) {
    if (!Array.isArray(geomRing) || geomRing.length === 0) {
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    }
    this.poly = poly;
    this.isExterior = isExterior;
    this.segments = [];
    if (typeof geomRing[0][0] !== "number" || typeof geomRing[0][1] !== "number") {
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    }
    const firstPoint = rounder.round(geomRing[0][0], geomRing[0][1]);
    this.bbox = {
      ll: {
        x: firstPoint.x,
        y: firstPoint.y
      },
      ur: {
        x: firstPoint.x,
        y: firstPoint.y
      }
    };
    let prevPoint = firstPoint;
    for (let i = 1, iMax = geomRing.length; i < iMax; i++) {
      if (typeof geomRing[i][0] !== "number" || typeof geomRing[i][1] !== "number") {
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      }
      let point2 = rounder.round(geomRing[i][0], geomRing[i][1]);
      if (point2.x === prevPoint.x && point2.y === prevPoint.y) continue;
      this.segments.push(Segment.fromRing(prevPoint, point2, this));
      if (point2.x < this.bbox.ll.x) this.bbox.ll.x = point2.x;
      if (point2.y < this.bbox.ll.y) this.bbox.ll.y = point2.y;
      if (point2.x > this.bbox.ur.x) this.bbox.ur.x = point2.x;
      if (point2.y > this.bbox.ur.y) this.bbox.ur.y = point2.y;
      prevPoint = point2;
    }
    if (firstPoint.x !== prevPoint.x || firstPoint.y !== prevPoint.y) {
      this.segments.push(Segment.fromRing(prevPoint, firstPoint, this));
    }
  }
  getSweepEvents() {
    const sweepEvents = [];
    for (let i = 0, iMax = this.segments.length; i < iMax; i++) {
      const segment = this.segments[i];
      sweepEvents.push(segment.leftSE);
      sweepEvents.push(segment.rightSE);
    }
    return sweepEvents;
  }
};
var PolyIn = class {
  constructor(geomPoly, multiPoly) {
    if (!Array.isArray(geomPoly)) {
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    }
    this.exteriorRing = new RingIn(geomPoly[0], this, true);
    this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    };
    this.interiorRings = [];
    for (let i = 1, iMax = geomPoly.length; i < iMax; i++) {
      const ring = new RingIn(geomPoly[i], this, false);
      if (ring.bbox.ll.x < this.bbox.ll.x) this.bbox.ll.x = ring.bbox.ll.x;
      if (ring.bbox.ll.y < this.bbox.ll.y) this.bbox.ll.y = ring.bbox.ll.y;
      if (ring.bbox.ur.x > this.bbox.ur.x) this.bbox.ur.x = ring.bbox.ur.x;
      if (ring.bbox.ur.y > this.bbox.ur.y) this.bbox.ur.y = ring.bbox.ur.y;
      this.interiorRings.push(ring);
    }
    this.multiPoly = multiPoly;
  }
  getSweepEvents() {
    const sweepEvents = this.exteriorRing.getSweepEvents();
    for (let i = 0, iMax = this.interiorRings.length; i < iMax; i++) {
      const ringSweepEvents = this.interiorRings[i].getSweepEvents();
      for (let j = 0, jMax = ringSweepEvents.length; j < jMax; j++) {
        sweepEvents.push(ringSweepEvents[j]);
      }
    }
    return sweepEvents;
  }
};
var MultiPolyIn = class {
  constructor(geom, isSubject) {
    if (!Array.isArray(geom)) {
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    }
    try {
      if (typeof geom[0][0][0] === "number") geom = [geom];
    } catch (ex) {
    }
    this.polys = [];
    this.bbox = {
      ll: {
        x: Number.POSITIVE_INFINITY,
        y: Number.POSITIVE_INFINITY
      },
      ur: {
        x: Number.NEGATIVE_INFINITY,
        y: Number.NEGATIVE_INFINITY
      }
    };
    for (let i = 0, iMax = geom.length; i < iMax; i++) {
      const poly = new PolyIn(geom[i], this);
      if (poly.bbox.ll.x < this.bbox.ll.x) this.bbox.ll.x = poly.bbox.ll.x;
      if (poly.bbox.ll.y < this.bbox.ll.y) this.bbox.ll.y = poly.bbox.ll.y;
      if (poly.bbox.ur.x > this.bbox.ur.x) this.bbox.ur.x = poly.bbox.ur.x;
      if (poly.bbox.ur.y > this.bbox.ur.y) this.bbox.ur.y = poly.bbox.ur.y;
      this.polys.push(poly);
    }
    this.isSubject = isSubject;
  }
  getSweepEvents() {
    const sweepEvents = [];
    for (let i = 0, iMax = this.polys.length; i < iMax; i++) {
      const polySweepEvents = this.polys[i].getSweepEvents();
      for (let j = 0, jMax = polySweepEvents.length; j < jMax; j++) {
        sweepEvents.push(polySweepEvents[j]);
      }
    }
    return sweepEvents;
  }
};
var RingOut = class _RingOut {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(allSegments) {
    const ringsOut = [];
    for (let i = 0, iMax = allSegments.length; i < iMax; i++) {
      const segment = allSegments[i];
      if (!segment.isInResult() || segment.ringOut) continue;
      let prevEvent = null;
      let event = segment.leftSE;
      let nextEvent = segment.rightSE;
      const events = [event];
      const startingPoint = event.point;
      const intersectionLEs = [];
      while (true) {
        prevEvent = event;
        event = nextEvent;
        events.push(event);
        if (event.point === startingPoint) break;
        while (true) {
          const availableLEs = event.getAvailableLinkedEvents();
          if (availableLEs.length === 0) {
            const firstPt = events[0].point;
            const lastPt = events[events.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${firstPt.x}, ${firstPt.y}]. Last matching segment found ends at [${lastPt.x}, ${lastPt.y}].`);
          }
          if (availableLEs.length === 1) {
            nextEvent = availableLEs[0].otherSE;
            break;
          }
          let indexLE = null;
          for (let j = 0, jMax = intersectionLEs.length; j < jMax; j++) {
            if (intersectionLEs[j].point === event.point) {
              indexLE = j;
              break;
            }
          }
          if (indexLE !== null) {
            const intersectionLE = intersectionLEs.splice(indexLE)[0];
            const ringEvents = events.splice(intersectionLE.index);
            ringEvents.unshift(ringEvents[0].otherSE);
            ringsOut.push(new _RingOut(ringEvents.reverse()));
            continue;
          }
          intersectionLEs.push({
            index: events.length,
            point: event.point
          });
          const comparator = event.getLeftmostComparator(prevEvent);
          nextEvent = availableLEs.sort(comparator)[0].otherSE;
          break;
        }
      }
      ringsOut.push(new _RingOut(events));
    }
    return ringsOut;
  }
  constructor(events) {
    this.events = events;
    for (let i = 0, iMax = events.length; i < iMax; i++) {
      events[i].segment.ringOut = this;
    }
    this.poly = null;
  }
  getGeom() {
    let prevPt = this.events[0].point;
    const points = [prevPt];
    for (let i = 1, iMax = this.events.length - 1; i < iMax; i++) {
      const pt2 = this.events[i].point;
      const nextPt2 = this.events[i + 1].point;
      if (compareVectorAngles(pt2, prevPt, nextPt2) === 0) continue;
      points.push(pt2);
      prevPt = pt2;
    }
    if (points.length === 1) return null;
    const pt = points[0];
    const nextPt = points[1];
    if (compareVectorAngles(pt, prevPt, nextPt) === 0) points.shift();
    points.push(points[0]);
    const step = this.isExteriorRing() ? 1 : -1;
    const iStart = this.isExteriorRing() ? 0 : points.length - 1;
    const iEnd = this.isExteriorRing() ? points.length : -1;
    const orderedPoints = [];
    for (let i = iStart; i != iEnd; i += step) orderedPoints.push([points[i].x, points[i].y]);
    return orderedPoints;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const enclosing = this.enclosingRing();
      this._isExteriorRing = enclosing ? !enclosing.isExteriorRing() : true;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    if (this._enclosingRing === void 0) {
      this._enclosingRing = this._calcEnclosingRing();
    }
    return this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    let leftMostEvt = this.events[0];
    for (let i = 1, iMax = this.events.length; i < iMax; i++) {
      const evt = this.events[i];
      if (SweepEvent.compare(leftMostEvt, evt) > 0) leftMostEvt = evt;
    }
    let prevSeg = leftMostEvt.segment.prevInResult();
    let prevPrevSeg = prevSeg ? prevSeg.prevInResult() : null;
    while (true) {
      if (!prevSeg) return null;
      if (!prevPrevSeg) return prevSeg.ringOut;
      if (prevPrevSeg.ringOut !== prevSeg.ringOut) {
        if (prevPrevSeg.ringOut.enclosingRing() !== prevSeg.ringOut) {
          return prevSeg.ringOut;
        } else return prevSeg.ringOut.enclosingRing();
      }
      prevSeg = prevPrevSeg.prevInResult();
      prevPrevSeg = prevSeg ? prevSeg.prevInResult() : null;
    }
  }
};
var PolyOut = class {
  constructor(exteriorRing) {
    this.exteriorRing = exteriorRing;
    exteriorRing.poly = this;
    this.interiorRings = [];
  }
  addInterior(ring) {
    this.interiorRings.push(ring);
    ring.poly = this;
  }
  getGeom() {
    const geom = [this.exteriorRing.getGeom()];
    if (geom[0] === null) return null;
    for (let i = 0, iMax = this.interiorRings.length; i < iMax; i++) {
      const ringGeom = this.interiorRings[i].getGeom();
      if (ringGeom === null) continue;
      geom.push(ringGeom);
    }
    return geom;
  }
};
var MultiPolyOut = class {
  constructor(rings) {
    this.rings = rings;
    this.polys = this._composePolys(rings);
  }
  getGeom() {
    const geom = [];
    for (let i = 0, iMax = this.polys.length; i < iMax; i++) {
      const polyGeom = this.polys[i].getGeom();
      if (polyGeom === null) continue;
      geom.push(polyGeom);
    }
    return geom;
  }
  _composePolys(rings) {
    const polys = [];
    for (let i = 0, iMax = rings.length; i < iMax; i++) {
      const ring = rings[i];
      if (ring.poly) continue;
      if (ring.isExteriorRing()) polys.push(new PolyOut(ring));
      else {
        const enclosingRing = ring.enclosingRing();
        if (!enclosingRing.poly) polys.push(new PolyOut(enclosingRing));
        enclosingRing.poly.addInterior(ring);
      }
    }
    return polys;
  }
};
var SweepLine = class {
  constructor(queue) {
    let comparator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Segment.compare;
    this.queue = queue;
    this.tree = new splay_esm_default(comparator);
    this.segments = [];
  }
  process(event) {
    const segment = event.segment;
    const newEvents = [];
    if (event.consumedBy) {
      if (event.isLeft) this.queue.remove(event.otherSE);
      else this.tree.remove(segment);
      return newEvents;
    }
    const node = event.isLeft ? this.tree.add(segment) : this.tree.find(segment);
    if (!node) throw new Error(`Unable to find segment #${segment.id} [${segment.leftSE.point.x}, ${segment.leftSE.point.y}] -> [${segment.rightSE.point.x}, ${segment.rightSE.point.y}] in SweepLine tree.`);
    let prevNode = node;
    let nextNode = node;
    let prevSeg = void 0;
    let nextSeg = void 0;
    while (prevSeg === void 0) {
      prevNode = this.tree.prev(prevNode);
      if (prevNode === null) prevSeg = null;
      else if (prevNode.key.consumedBy === void 0) prevSeg = prevNode.key;
    }
    while (nextSeg === void 0) {
      nextNode = this.tree.next(nextNode);
      if (nextNode === null) nextSeg = null;
      else if (nextNode.key.consumedBy === void 0) nextSeg = nextNode.key;
    }
    if (event.isLeft) {
      let prevMySplitter = null;
      if (prevSeg) {
        const prevInter = prevSeg.getIntersection(segment);
        if (prevInter !== null) {
          if (!segment.isAnEndpoint(prevInter)) prevMySplitter = prevInter;
          if (!prevSeg.isAnEndpoint(prevInter)) {
            const newEventsFromSplit = this._splitSafely(prevSeg, prevInter);
            for (let i = 0, iMax = newEventsFromSplit.length; i < iMax; i++) {
              newEvents.push(newEventsFromSplit[i]);
            }
          }
        }
      }
      let nextMySplitter = null;
      if (nextSeg) {
        const nextInter = nextSeg.getIntersection(segment);
        if (nextInter !== null) {
          if (!segment.isAnEndpoint(nextInter)) nextMySplitter = nextInter;
          if (!nextSeg.isAnEndpoint(nextInter)) {
            const newEventsFromSplit = this._splitSafely(nextSeg, nextInter);
            for (let i = 0, iMax = newEventsFromSplit.length; i < iMax; i++) {
              newEvents.push(newEventsFromSplit[i]);
            }
          }
        }
      }
      if (prevMySplitter !== null || nextMySplitter !== null) {
        let mySplitter = null;
        if (prevMySplitter === null) mySplitter = nextMySplitter;
        else if (nextMySplitter === null) mySplitter = prevMySplitter;
        else {
          const cmpSplitters = SweepEvent.comparePoints(prevMySplitter, nextMySplitter);
          mySplitter = cmpSplitters <= 0 ? prevMySplitter : nextMySplitter;
        }
        this.queue.remove(segment.rightSE);
        newEvents.push(segment.rightSE);
        const newEventsFromSplit = segment.split(mySplitter);
        for (let i = 0, iMax = newEventsFromSplit.length; i < iMax; i++) {
          newEvents.push(newEventsFromSplit[i]);
        }
      }
      if (newEvents.length > 0) {
        this.tree.remove(segment);
        newEvents.push(event);
      } else {
        this.segments.push(segment);
        segment.prev = prevSeg;
      }
    } else {
      if (prevSeg && nextSeg) {
        const inter = prevSeg.getIntersection(nextSeg);
        if (inter !== null) {
          if (!prevSeg.isAnEndpoint(inter)) {
            const newEventsFromSplit = this._splitSafely(prevSeg, inter);
            for (let i = 0, iMax = newEventsFromSplit.length; i < iMax; i++) {
              newEvents.push(newEventsFromSplit[i]);
            }
          }
          if (!nextSeg.isAnEndpoint(inter)) {
            const newEventsFromSplit = this._splitSafely(nextSeg, inter);
            for (let i = 0, iMax = newEventsFromSplit.length; i < iMax; i++) {
              newEvents.push(newEventsFromSplit[i]);
            }
          }
        }
      }
      this.tree.remove(segment);
    }
    return newEvents;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(seg, pt) {
    this.tree.remove(seg);
    const rightSE = seg.rightSE;
    this.queue.remove(rightSE);
    const newEvents = seg.split(pt);
    newEvents.push(rightSE);
    if (seg.consumedBy === void 0) this.tree.add(seg);
    return newEvents;
  }
};
var POLYGON_CLIPPING_MAX_QUEUE_SIZE = typeof process !== "undefined" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6;
var POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS = typeof process !== "undefined" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
var Operation = class {
  run(type, geom, moreGeoms) {
    operation.type = type;
    rounder.reset();
    const multipolys = [new MultiPolyIn(geom, true)];
    for (let i = 0, iMax = moreGeoms.length; i < iMax; i++) {
      multipolys.push(new MultiPolyIn(moreGeoms[i], false));
    }
    operation.numMultiPolys = multipolys.length;
    if (operation.type === "difference") {
      const subject = multipolys[0];
      let i = 1;
      while (i < multipolys.length) {
        if (getBboxOverlap(multipolys[i].bbox, subject.bbox) !== null) i++;
        else multipolys.splice(i, 1);
      }
    }
    if (operation.type === "intersection") {
      for (let i = 0, iMax = multipolys.length; i < iMax; i++) {
        const mpA = multipolys[i];
        for (let j = i + 1, jMax = multipolys.length; j < jMax; j++) {
          if (getBboxOverlap(mpA.bbox, multipolys[j].bbox) === null) return [];
        }
      }
    }
    const queue = new splay_esm_default(SweepEvent.compare);
    for (let i = 0, iMax = multipolys.length; i < iMax; i++) {
      const sweepEvents = multipolys[i].getSweepEvents();
      for (let j = 0, jMax = sweepEvents.length; j < jMax; j++) {
        queue.insert(sweepEvents[j]);
        if (queue.size > POLYGON_CLIPPING_MAX_QUEUE_SIZE) {
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
        }
      }
    }
    const sweepLine = new SweepLine(queue);
    let prevQueueSize = queue.size;
    let node = queue.pop();
    while (node) {
      const evt = node.key;
      if (queue.size === prevQueueSize) {
        const seg = evt.segment;
        throw new Error(`Unable to pop() ${evt.isLeft ? "left" : "right"} SweepEvent [${evt.point.x}, ${evt.point.y}] from segment #${seg.id} [${seg.leftSE.point.x}, ${seg.leftSE.point.y}] -> [${seg.rightSE.point.x}, ${seg.rightSE.point.y}] from queue.`);
      }
      if (queue.size > POLYGON_CLIPPING_MAX_QUEUE_SIZE) {
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      }
      if (sweepLine.segments.length > POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS) {
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      }
      const newEvents = sweepLine.process(evt);
      for (let i = 0, iMax = newEvents.length; i < iMax; i++) {
        const evt2 = newEvents[i];
        if (evt2.consumedBy === void 0) queue.insert(evt2);
      }
      prevQueueSize = queue.size;
      node = queue.pop();
    }
    rounder.reset();
    const ringsOut = RingOut.factory(sweepLine.segments);
    const result = new MultiPolyOut(ringsOut);
    return result.getGeom();
  }
};
var operation = new Operation();

// ../node_modules/.pnpm/@turf+great-circle@7.1.0/node_modules/@turf/great-circle/dist/esm/index.js
var D2R = Math.PI / 180;
var R2D = 180 / Math.PI;
var Coord = function(lon, lat) {
  this.lon = lon;
  this.lat = lat;
  this.x = D2R * lon;
  this.y = D2R * lat;
};
Coord.prototype.view = function() {
  return String(this.lon).slice(0, 4) + "," + String(this.lat).slice(0, 4);
};
Coord.prototype.antipode = function() {
  var anti_lat = -1 * this.lat;
  var anti_lon = this.lon < 0 ? 180 + this.lon : (180 - this.lon) * -1;
  return new Coord(anti_lon, anti_lat);
};
var LineString = function() {
  this.coords = [];
  this.length = 0;
};
LineString.prototype.move_to = function(coord) {
  this.length++;
  this.coords.push(coord);
};
var Arc2 = function(properties) {
  this.properties = properties || {};
  this.geometries = [];
};
Arc2.prototype.json = function() {
  if (this.geometries.length <= 0) {
    return {
      geometry: { type: "LineString", coordinates: null },
      type: "Feature",
      properties: this.properties
    };
  } else if (this.geometries.length === 1) {
    return {
      geometry: { type: "LineString", coordinates: this.geometries[0].coords },
      type: "Feature",
      properties: this.properties
    };
  } else {
    var multiline = [];
    for (var i = 0; i < this.geometries.length; i++) {
      multiline.push(this.geometries[i].coords);
    }
    return {
      geometry: { type: "MultiLineString", coordinates: multiline },
      type: "Feature",
      properties: this.properties
    };
  }
};
Arc2.prototype.wkt = function() {
  var wkt_string = "";
  var wkt = "LINESTRING(";
  var collect2 = function(c) {
    wkt += c[0] + " " + c[1] + ",";
  };
  for (var i = 0; i < this.geometries.length; i++) {
    if (this.geometries[i].coords.length === 0) {
      return "LINESTRING(empty)";
    } else {
      var coords = this.geometries[i].coords;
      coords.forEach(collect2);
      wkt_string += wkt.substring(0, wkt.length - 1) + ")";
    }
  }
  return wkt_string;
};
var GreatCircle = function(start, end, properties) {
  if (!start || start.x === void 0 || start.y === void 0) {
    throw new Error(
      "GreatCircle constructor expects two args: start and end objects with x and y properties"
    );
  }
  if (!end || end.x === void 0 || end.y === void 0) {
    throw new Error(
      "GreatCircle constructor expects two args: start and end objects with x and y properties"
    );
  }
  this.start = new Coord(start.x, start.y);
  this.end = new Coord(end.x, end.y);
  this.properties = properties || {};
  var w = this.start.x - this.end.x;
  var h = this.start.y - this.end.y;
  var z = Math.pow(Math.sin(h / 2), 2) + Math.cos(this.start.y) * Math.cos(this.end.y) * Math.pow(Math.sin(w / 2), 2);
  this.g = 2 * Math.asin(Math.sqrt(z));
  if (this.g === Math.PI) {
    throw new Error(
      "it appears " + start.view() + " and " + end.view() + " are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite"
    );
  } else if (isNaN(this.g)) {
    throw new Error(
      "could not calculate great circle between " + start + " and " + end
    );
  }
};
GreatCircle.prototype.interpolate = function(f) {
  var A = Math.sin((1 - f) * this.g) / Math.sin(this.g);
  var B2 = Math.sin(f * this.g) / Math.sin(this.g);
  var x2 = A * Math.cos(this.start.y) * Math.cos(this.start.x) + B2 * Math.cos(this.end.y) * Math.cos(this.end.x);
  var y2 = A * Math.cos(this.start.y) * Math.sin(this.start.x) + B2 * Math.cos(this.end.y) * Math.sin(this.end.x);
  var z = A * Math.sin(this.start.y) + B2 * Math.sin(this.end.y);
  var lat = R2D * Math.atan2(z, Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)));
  var lon = R2D * Math.atan2(y2, x2);
  return [lon, lat];
};
GreatCircle.prototype.Arc = function(npoints, options) {
  var first_pass = [];
  if (!npoints || npoints <= 2) {
    first_pass.push([this.start.lon, this.start.lat]);
    first_pass.push([this.end.lon, this.end.lat]);
  } else {
    var delta = 1 / (npoints - 1);
    for (var i = 0; i < npoints; ++i) {
      var step = delta * i;
      var pair2 = this.interpolate(step);
      first_pass.push(pair2);
    }
  }
  var bHasBigDiff = false;
  var dfMaxSmallDiffLong = 0;
  var dfDateLineOffset = options && options.offset ? options.offset : 10;
  var dfLeftBorderX = 180 - dfDateLineOffset;
  var dfRightBorderX = -180 + dfDateLineOffset;
  var dfDiffSpace = 360 - dfDateLineOffset;
  for (var j = 1; j < first_pass.length; ++j) {
    var dfPrevX = first_pass[j - 1][0];
    var dfX = first_pass[j][0];
    var dfDiffLong = Math.abs(dfX - dfPrevX);
    if (dfDiffLong > dfDiffSpace && (dfX > dfLeftBorderX && dfPrevX < dfRightBorderX || dfPrevX > dfLeftBorderX && dfX < dfRightBorderX)) {
      bHasBigDiff = true;
    } else if (dfDiffLong > dfMaxSmallDiffLong) {
      dfMaxSmallDiffLong = dfDiffLong;
    }
  }
  var poMulti = [];
  if (bHasBigDiff && dfMaxSmallDiffLong < dfDateLineOffset) {
    var poNewLS = [];
    poMulti.push(poNewLS);
    for (var k = 0; k < first_pass.length; ++k) {
      var dfX0 = parseFloat(first_pass[k][0]);
      if (k > 0 && Math.abs(dfX0 - first_pass[k - 1][0]) > dfDiffSpace) {
        var dfX1 = parseFloat(first_pass[k - 1][0]);
        var dfY1 = parseFloat(first_pass[k - 1][1]);
        var dfX2 = parseFloat(first_pass[k][0]);
        var dfY2 = parseFloat(first_pass[k][1]);
        if (dfX1 > -180 && dfX1 < dfRightBorderX && dfX2 === 180 && k + 1 < first_pass.length && first_pass[k - 1][0] > -180 && first_pass[k - 1][0] < dfRightBorderX) {
          poNewLS.push([-180, first_pass[k][1]]);
          k++;
          poNewLS.push([first_pass[k][0], first_pass[k][1]]);
          continue;
        } else if (dfX1 > dfLeftBorderX && dfX1 < 180 && dfX2 === -180 && k + 1 < first_pass.length && first_pass[k - 1][0] > dfLeftBorderX && first_pass[k - 1][0] < 180) {
          poNewLS.push([180, first_pass[k][1]]);
          k++;
          poNewLS.push([first_pass[k][0], first_pass[k][1]]);
          continue;
        }
        if (dfX1 < dfRightBorderX && dfX2 > dfLeftBorderX) {
          var tmpX = dfX1;
          dfX1 = dfX2;
          dfX2 = tmpX;
          var tmpY = dfY1;
          dfY1 = dfY2;
          dfY2 = tmpY;
        }
        if (dfX1 > dfLeftBorderX && dfX2 < dfRightBorderX) {
          dfX2 += 360;
        }
        if (dfX1 <= 180 && dfX2 >= 180 && dfX1 < dfX2) {
          var dfRatio = (180 - dfX1) / (dfX2 - dfX1);
          var dfY = dfRatio * dfY2 + (1 - dfRatio) * dfY1;
          poNewLS.push([
            first_pass[k - 1][0] > dfLeftBorderX ? 180 : -180,
            dfY
          ]);
          poNewLS = [];
          poNewLS.push([
            first_pass[k - 1][0] > dfLeftBorderX ? -180 : 180,
            dfY
          ]);
          poMulti.push(poNewLS);
        } else {
          poNewLS = [];
          poMulti.push(poNewLS);
        }
        poNewLS.push([dfX0, first_pass[k][1]]);
      } else {
        poNewLS.push([first_pass[k][0], first_pass[k][1]]);
      }
    }
  } else {
    var poNewLS0 = [];
    poMulti.push(poNewLS0);
    for (var l = 0; l < first_pass.length; ++l) {
      poNewLS0.push([first_pass[l][0], first_pass[l][1]]);
    }
  }
  var arc = new Arc2(this.properties);
  for (var m = 0; m < poMulti.length; ++m) {
    var line = new LineString();
    arc.geometries.push(line);
    var points = poMulti[m];
    for (var j0 = 0; j0 < points.length; ++j0) {
      line.move_to(points[j0]);
    }
  }
  return arc;
};

// ../node_modules/.pnpm/marchingsquares@1.3.3/node_modules/marchingsquares/dist/marchingsquares-esm.js
function TreeNode(data, x2, y2, dx, dy) {
  var dx_tmp = dx, dy_tmp = dy, msb_x = 0, msb_y = 0;
  this.x = x2;
  this.y = y2;
  this.lowerBound = null;
  this.upperBound = null;
  this.childA = null;
  this.childB = null;
  this.childC = null;
  this.childD = null;
  if (dx === 1 && dy === 1) {
    this.lowerBound = Math.min(
      data[y2][x2],
      data[y2][x2 + 1],
      data[y2 + 1][x2 + 1],
      data[y2 + 1][x2]
    );
    this.upperBound = Math.max(
      data[y2][x2],
      data[y2][x2 + 1],
      data[y2 + 1][x2 + 1],
      data[y2 + 1][x2]
    );
  } else {
    if (dx > 1) {
      while (dx_tmp !== 0) {
        dx_tmp = dx_tmp >> 1;
        msb_x++;
      }
      if (dx === 1 << msb_x - 1)
        msb_x--;
      dx_tmp = 1 << msb_x - 1;
    }
    if (dy > 1) {
      while (dy_tmp !== 0) {
        dy_tmp = dy_tmp >> 1;
        msb_y++;
      }
      if (dy === 1 << msb_y - 1)
        msb_y--;
      dy_tmp = 1 << msb_y - 1;
    }
    this.childA = new TreeNode(data, x2, y2, dx_tmp, dy_tmp);
    this.lowerBound = this.childA.lowerBound;
    this.upperBound = this.childA.upperBound;
    if (dx - dx_tmp > 0) {
      this.childB = new TreeNode(data, x2 + dx_tmp, y2, dx - dx_tmp, dy_tmp);
      this.lowerBound = Math.min(this.lowerBound, this.childB.lowerBound);
      this.upperBound = Math.max(this.upperBound, this.childB.upperBound);
      if (dy - dy_tmp > 0) {
        this.childC = new TreeNode(data, x2 + dx_tmp, y2 + dy_tmp, dx - dx_tmp, dy - dy_tmp);
        this.lowerBound = Math.min(this.lowerBound, this.childC.lowerBound);
        this.upperBound = Math.max(this.upperBound, this.childC.upperBound);
      }
    }
    if (dy - dy_tmp > 0) {
      this.childD = new TreeNode(data, x2, y2 + dy_tmp, dx_tmp, dy - dy_tmp);
      this.lowerBound = Math.min(this.lowerBound, this.childD.lowerBound);
      this.upperBound = Math.max(this.upperBound, this.childD.upperBound);
    }
  }
}
TreeNode.prototype.cellsInBand = function(lowerBound, upperBound, subsumed) {
  var cells2 = [];
  subsumed = typeof subsumed === "undefined" ? true : subsumed;
  if (this.lowerBound > upperBound || this.upperBound < lowerBound)
    return cells2;
  if (!(this.childA || this.childB || this.childC || this.childD)) {
    if (subsumed || this.lowerBound <= lowerBound || this.upperBound >= upperBound) {
      cells2.push({
        x: this.x,
        y: this.y
      });
    }
  } else {
    if (this.childA)
      cells2 = cells2.concat(this.childA.cellsInBand(lowerBound, upperBound, subsumed));
    if (this.childB)
      cells2 = cells2.concat(this.childB.cellsInBand(lowerBound, upperBound, subsumed));
    if (this.childD)
      cells2 = cells2.concat(this.childD.cellsInBand(lowerBound, upperBound, subsumed));
    if (this.childC)
      cells2 = cells2.concat(this.childC.cellsInBand(lowerBound, upperBound, subsumed));
  }
  return cells2;
};
TreeNode.prototype.cellsBelowThreshold = function(threshold, subsumed) {
  var cells2 = [];
  subsumed = typeof subsumed === "undefined" ? true : subsumed;
  if (this.lowerBound > threshold)
    return cells2;
  if (!(this.childA || this.childB || this.childC || this.childD)) {
    if (subsumed || this.upperBound >= threshold) {
      cells2.push({
        x: this.x,
        y: this.y
      });
    }
  } else {
    if (this.childA)
      cells2 = cells2.concat(this.childA.cellsBelowThreshold(threshold, subsumed));
    if (this.childB)
      cells2 = cells2.concat(this.childB.cellsBelowThreshold(threshold, subsumed));
    if (this.childD)
      cells2 = cells2.concat(this.childD.cellsBelowThreshold(threshold, subsumed));
    if (this.childC)
      cells2 = cells2.concat(this.childC.cellsBelowThreshold(threshold, subsumed));
  }
  return cells2;
};

// ../node_modules/.pnpm/@turf+shortest-path@7.1.0/node_modules/@turf/shortest-path/dist/esm/index.js
function pathTo(node) {
  var curr = node, path = [];
  while (curr.parent) {
    path.unshift(curr);
    curr = curr.parent;
  }
  return path;
}
function getHeap() {
  return new BinaryHeap(function(node) {
    return node.f;
  });
}
var astar = {
  /**
   * Perform an A* Search on a graph given a start and end node.
   *
   * @private
   * @memberof astar
   * @param {Graph} graph Graph
   * @param {GridNode} start Start
   * @param {GridNode} end End
   * @param {Object} [options] Options
   * @param {bool} [options.closest] Specifies whether to return the path to the closest node if the target is unreachable.
   * @param {Function} [options.heuristic] Heuristic function (see astar.heuristics).
   * @returns {Object} Search
   */
  search: function(graph, start, end, options) {
    var _a;
    graph.cleanDirty();
    options = options || {};
    var heuristic = options.heuristic || astar.heuristics.manhattan, closest = (_a = options.closest) != null ? _a : false;
    var openHeap = getHeap(), closestNode = start;
    start.h = heuristic(start, end);
    openHeap.push(start);
    while (openHeap.size() > 0) {
      var currentNode = openHeap.pop();
      if (currentNode === end) {
        return pathTo(currentNode);
      }
      currentNode.closed = true;
      var neighbors = graph.neighbors(currentNode);
      for (var i = 0, il = neighbors.length; i < il; ++i) {
        var neighbor = neighbors[i];
        if (neighbor.closed || neighbor.isWall()) {
          continue;
        }
        var gScore = currentNode.g + neighbor.getCost(currentNode), beenVisited = neighbor.visited;
        if (!beenVisited || gScore < neighbor.g) {
          neighbor.visited = true;
          neighbor.parent = currentNode;
          neighbor.h = neighbor.h || heuristic(neighbor, end);
          neighbor.g = gScore;
          neighbor.f = neighbor.g + neighbor.h;
          graph.markDirty(neighbor);
          if (closest) {
            if (neighbor.h < closestNode.h || neighbor.h === closestNode.h && neighbor.g < closestNode.g) {
              closestNode = neighbor;
            }
          }
          if (!beenVisited) {
            openHeap.push(neighbor);
          } else {
            openHeap.rescoreElement(neighbor);
          }
        }
      }
    }
    if (closest) {
      return pathTo(closestNode);
    }
    return [];
  },
  // See list of heuristics: http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html
  heuristics: {
    manhattan: function(pos0, pos1) {
      var d1 = Math.abs(pos1.x - pos0.x);
      var d2 = Math.abs(pos1.y - pos0.y);
      return d1 + d2;
    },
    diagonal: function(pos0, pos1) {
      var D2 = 1;
      var D22 = Math.sqrt(2);
      var d1 = Math.abs(pos1.x - pos0.x);
      var d2 = Math.abs(pos1.y - pos0.y);
      return D2 * (d1 + d2) + (D22 - 2 * D2) * Math.min(d1, d2);
    }
  },
  cleanNode: function(node) {
    node.f = 0;
    node.g = 0;
    node.h = 0;
    node.visited = false;
    node.closed = false;
    node.parent = null;
  }
};
function Graph(gridIn, options) {
  options = options || {};
  this.nodes = [];
  this.diagonal = !!options.diagonal;
  this.grid = [];
  for (var x2 = 0; x2 < gridIn.length; x2++) {
    this.grid[x2] = [];
    for (var y2 = 0, row = gridIn[x2]; y2 < row.length; y2++) {
      var node = new GridNode(x2, y2, row[y2]);
      this.grid[x2][y2] = node;
      this.nodes.push(node);
    }
  }
  this.init();
}
Graph.prototype.init = function() {
  this.dirtyNodes = [];
  for (var i = 0; i < this.nodes.length; i++) {
    astar.cleanNode(this.nodes[i]);
  }
};
Graph.prototype.cleanDirty = function() {
  for (var i = 0; i < this.dirtyNodes.length; i++) {
    astar.cleanNode(this.dirtyNodes[i]);
  }
  this.dirtyNodes = [];
};
Graph.prototype.markDirty = function(node) {
  this.dirtyNodes.push(node);
};
Graph.prototype.neighbors = function(node) {
  var ret = [], x2 = node.x, y2 = node.y, grid = this.grid;
  if (grid[x2 - 1] && grid[x2 - 1][y2]) {
    ret.push(grid[x2 - 1][y2]);
  }
  if (grid[x2 + 1] && grid[x2 + 1][y2]) {
    ret.push(grid[x2 + 1][y2]);
  }
  if (grid[x2] && grid[x2][y2 - 1]) {
    ret.push(grid[x2][y2 - 1]);
  }
  if (grid[x2] && grid[x2][y2 + 1]) {
    ret.push(grid[x2][y2 + 1]);
  }
  if (this.diagonal) {
    if (grid[x2 - 1] && grid[x2 - 1][y2 - 1]) {
      ret.push(grid[x2 - 1][y2 - 1]);
    }
    if (grid[x2 + 1] && grid[x2 + 1][y2 - 1]) {
      ret.push(grid[x2 + 1][y2 - 1]);
    }
    if (grid[x2 - 1] && grid[x2 - 1][y2 + 1]) {
      ret.push(grid[x2 - 1][y2 + 1]);
    }
    if (grid[x2 + 1] && grid[x2 + 1][y2 + 1]) {
      ret.push(grid[x2 + 1][y2 + 1]);
    }
  }
  return ret;
};
Graph.prototype.toString = function() {
  var graphString = [], nodes = this.grid, rowDebug, row, y2, l;
  for (var x2 = 0, len = nodes.length; x2 < len; x2++) {
    rowDebug = [];
    row = nodes[x2];
    for (y2 = 0, l = row.length; y2 < l; y2++) {
      rowDebug.push(row[y2].weight);
    }
    graphString.push(rowDebug.join(" "));
  }
  return graphString.join("\n");
};
function GridNode(x2, y2, weight) {
  this.x = x2;
  this.y = y2;
  this.weight = weight;
}
GridNode.prototype.toString = function() {
  return "[" + this.x + " " + this.y + "]";
};
GridNode.prototype.getCost = function(fromNeighbor) {
  if (fromNeighbor && fromNeighbor.x !== this.x && fromNeighbor.y !== this.y) {
    return this.weight * 1.41421;
  }
  return this.weight;
};
GridNode.prototype.isWall = function() {
  return this.weight === 0;
};
function BinaryHeap(scoreFunction) {
  this.content = [];
  this.scoreFunction = scoreFunction;
}
BinaryHeap.prototype = {
  push: function(element) {
    this.content.push(element);
    this.sinkDown(this.content.length - 1);
  },
  pop: function() {
    var result = this.content[0];
    var end = this.content.pop();
    if (this.content.length > 0) {
      this.content[0] = end;
      this.bubbleUp(0);
    }
    return result;
  },
  remove: function(node) {
    var i = this.content.indexOf(node);
    var end = this.content.pop();
    if (i !== this.content.length - 1) {
      this.content[i] = end;
      if (this.scoreFunction(end) < this.scoreFunction(node)) {
        this.sinkDown(i);
      } else {
        this.bubbleUp(i);
      }
    }
  },
  size: function() {
    return this.content.length;
  },
  rescoreElement: function(node) {
    this.sinkDown(this.content.indexOf(node));
  },
  sinkDown: function(n) {
    var element = this.content[n];
    while (n > 0) {
      var parentN = (n + 1 >> 1) - 1, parent = this.content[parentN];
      if (this.scoreFunction(element) < this.scoreFunction(parent)) {
        this.content[parentN] = element;
        this.content[n] = parent;
        n = parentN;
      } else {
        break;
      }
    }
  },
  bubbleUp: function(n) {
    var length3 = this.content.length, element = this.content[n], elemScore = this.scoreFunction(element);
    while (true) {
      var child2N = n + 1 << 1, child1N = child2N - 1;
      var swap = null, child1Score;
      if (child1N < length3) {
        var child1 = this.content[child1N];
        child1Score = this.scoreFunction(child1);
        if (child1Score < elemScore) {
          swap = child1N;
        }
      }
      if (child2N < length3) {
        var child2 = this.content[child2N], child2Score = this.scoreFunction(child2);
        if (child2Score < (swap === null ? elemScore : child1Score)) {
          swap = child2N;
        }
      }
      if (swap !== null) {
        this.content[n] = this.content[swap];
        this.content[swap] = element;
        n = swap;
      } else {
        break;
      }
    }
  }
};

// ../node_modules/.pnpm/@turf+tesselate@7.1.0/node_modules/@turf/tesselate/dist/esm/index.js
var import_earcut = __toESM(require_earcut());

// ../node_modules/.pnpm/d3-voronoi@1.1.2/node_modules/d3-voronoi/src/RedBlackTree.js
function RedBlackTree() {
  this._ = null;
}
function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null;
}
RedBlackTree.prototype = {
  constructor: RedBlackTree,
  insert: function(after, node) {
    var parent, grandpa, uncle;
    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;
    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },
  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;
    var parent = node.U, sibling, left = node.L, right = node.R, next, red;
    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);
    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }
    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }
    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) {
      node.C = false;
      return;
    }
    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);
    if (node) node.C = false;
  }
};
function RedBlackRotateLeft(tree, node) {
  var p = node, q = node.R, parent = p.U;
  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }
  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}
function RedBlackRotateRight(tree, node) {
  var p = node, q = node.L, parent = p.U;
  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }
  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}
function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}
var RedBlackTree_default = RedBlackTree;

// ../node_modules/.pnpm/d3-voronoi@1.1.2/node_modules/d3-voronoi/src/Edge.js
function createEdge(left, right, v0, v1) {
  var edge = [null, null], index2 = edges.push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  cells[left.index].halfedges.push(index2);
  cells[right.index].halfedges.push(index2);
  return edge;
}
function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}
function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}
function clipEdge(edge, x02, y02, x12, y12) {
  var a = edge[0], b = edge[1], ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
  r = x02 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = x12 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  r = y02 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = y12 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  if (!(t0 > 0) && !(t1 < 1)) return true;
  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}
function connectEdge(edge, x02, y02, x12, y12) {
  var v1 = edge[1];
  if (v1) return true;
  var v0 = edge[0], left = edge.left, right = edge.right, lx = left[0], ly = left[1], rx = right[0], ry = right[1], fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
  if (ry === ly) {
    if (fx < x02 || fx >= x12) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y02];
      else if (v0[1] >= y12) return;
      v1 = [fx, y12];
    } else {
      if (!v0) v0 = [fx, y12];
      else if (v0[1] < y02) return;
      v1 = [fx, y02];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y02 - fb) / fm, y02];
        else if (v0[1] >= y12) return;
        v1 = [(y12 - fb) / fm, y12];
      } else {
        if (!v0) v0 = [(y12 - fb) / fm, y12];
        else if (v0[1] < y02) return;
        v1 = [(y02 - fb) / fm, y02];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x02, fm * x02 + fb];
        else if (v0[0] >= x12) return;
        v1 = [x12, fm * x12 + fb];
      } else {
        if (!v0) v0 = [x12, fm * x12 + fb];
        else if (v0[0] < x02) return;
        v1 = [x02, fm * x02 + fb];
      }
    }
  }
  edge[0] = v0;
  edge[1] = v1;
  return true;
}
function clipEdges(x02, y02, x12, y12) {
  var i = edges.length, edge;
  while (i--) {
    if (!connectEdge(edge = edges[i], x02, y02, x12, y12) || !clipEdge(edge, x02, y02, x12, y12) || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon5 || Math.abs(edge[0][1] - edge[1][1]) > epsilon5)) {
      delete edges[i];
    }
  }
}

// ../node_modules/.pnpm/d3-voronoi@1.1.2/node_modules/d3-voronoi/src/Cell.js
function createCell(site) {
  return cells[site.index] = {
    site,
    halfedges: []
  };
}
function cellHalfedgeAngle(cell, edge) {
  var site = cell.site, va = edge.left, vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}
function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}
function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}
function sortCellHalfedges() {
  for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
      var index2 = new Array(m), array2 = new Array(m);
      for (j = 0; j < m; ++j) index2[j] = j, array2[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
      index2.sort(function(i2, j2) {
        return array2[j2] - array2[i2];
      });
      for (j = 0; j < m; ++j) array2[j] = halfedges[index2[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array2[j];
    }
  }
}
function clipCells(x02, y02, x12, y12) {
  var nCells = cells.length, iCell, cell, site, iHalfedge, halfedges, nHalfedges, start, startX, startY, end, endX, endY, cover = true;
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;
      while (iHalfedge--) {
        if (!edges[halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > epsilon5 || Math.abs(endY - startY) > epsilon5) {
          halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(
            site,
            end,
            Math.abs(endX - x02) < epsilon5 && y12 - endY > epsilon5 ? [x02, Math.abs(startX - x02) < epsilon5 ? startY : y12] : Math.abs(endY - y12) < epsilon5 && x12 - endX > epsilon5 ? [Math.abs(startY - y12) < epsilon5 ? startX : x12, y12] : Math.abs(endX - x12) < epsilon5 && endY - y02 > epsilon5 ? [x12, Math.abs(startX - x12) < epsilon5 ? startY : y02] : Math.abs(endY - y02) < epsilon5 && endX - x02 > epsilon5 ? [Math.abs(startY - y02) < epsilon5 ? startX : x02, y02] : null
          )) - 1);
          ++nHalfedges;
        }
      }
      if (nHalfedges) cover = false;
    }
  }
  if (cover) {
    var dx, dy, d2, dc = Infinity;
    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        site = cell.site;
        dx = site[0] - x02;
        dy = site[1] - y02;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }
    if (cover) {
      var v00 = [x02, y02], v01 = [x02, y12], v11 = [x12, y12], v10 = [x12, y02];
      cover.halfedges.push(
        edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
        edges.push(createBorderEdge(site, v01, v11)) - 1,
        edges.push(createBorderEdge(site, v11, v10)) - 1,
        edges.push(createBorderEdge(site, v10, v00)) - 1
      );
    }
  }
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      if (!cell.halfedges.length) {
        delete cells[iCell];
      }
    }
  }
}

// ../node_modules/.pnpm/d3-voronoi@1.1.2/node_modules/d3-voronoi/src/Circle.js
var circlePool = [];
var firstCircle;
function Circle2() {
  RedBlackNode(this);
  this.x = this.y = this.arc = this.site = this.cy = null;
}
function attachCircle(arc) {
  var lArc = arc.P, rArc = arc.N;
  if (!lArc || !rArc) return;
  var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
  if (lSite === rSite) return;
  var bx = cSite[0], by = cSite[1], ax = lSite[0] - bx, ay = lSite[1] - by, cx = rSite[0] - bx, cy = rSite[1] - by;
  var d = 2 * (ax * cy - ay * cx);
  if (d >= -epsilon22) return;
  var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x2 = (cy * ha - ay * hc) / d, y2 = (ax * hc - cx * ha) / d;
  var circle3 = circlePool.pop() || new Circle2();
  circle3.arc = arc;
  circle3.site = cSite;
  circle3.x = x2 + bx;
  circle3.y = (circle3.cy = y2 + by) + Math.sqrt(x2 * x2 + y2 * y2);
  arc.circle = circle3;
  var before = null, node = circles._;
  while (node) {
    if (circle3.y < node.y || circle3.y === node.y && circle3.x <= node.x) {
      if (node.L) node = node.L;
      else {
        before = node.P;
        break;
      }
    } else {
      if (node.R) node = node.R;
      else {
        before = node;
        break;
      }
    }
  }
  circles.insert(before, circle3);
  if (!before) firstCircle = circle3;
}
function detachCircle(arc) {
  var circle3 = arc.circle;
  if (circle3) {
    if (!circle3.P) firstCircle = circle3.N;
    circles.remove(circle3);
    circlePool.push(circle3);
    RedBlackNode(circle3);
    arc.circle = null;
  }
}

// ../node_modules/.pnpm/d3-voronoi@1.1.2/node_modules/d3-voronoi/src/Beach.js
var beachPool = [];
function Beach() {
  RedBlackNode(this);
  this.edge = this.site = this.circle = null;
}
function createBeach(site) {
  var beach = beachPool.pop() || new Beach();
  beach.site = site;
  return beach;
}
function detachBeach(beach) {
  detachCircle(beach);
  beaches.remove(beach);
  beachPool.push(beach);
  RedBlackNode(beach);
}
function removeBeach(beach) {
  var circle3 = beach.circle, x2 = circle3.x, y2 = circle3.cy, vertex = [x2, y2], previous = beach.P, next = beach.N, disappearing = [beach];
  detachBeach(beach);
  var lArc = previous;
  while (lArc.circle && Math.abs(x2 - lArc.circle.x) < epsilon5 && Math.abs(y2 - lArc.circle.cy) < epsilon5) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }
  disappearing.unshift(lArc);
  detachCircle(lArc);
  var rArc = next;
  while (rArc.circle && Math.abs(x2 - rArc.circle.x) < epsilon5 && Math.abs(y2 - rArc.circle.cy) < epsilon5) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }
  disappearing.push(rArc);
  detachCircle(rArc);
  var nArcs = disappearing.length, iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
  }
  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}
function addBeach(site) {
  var x2 = site[0], directrix = site[1], lArc, rArc, dxl, dxr, node = beaches._;
  while (node) {
    dxl = leftBreakPoint(node, directrix) - x2;
    if (dxl > epsilon5) node = node.L;
    else {
      dxr = x2 - rightBreakPoint(node, directrix);
      if (dxr > epsilon5) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -epsilon5) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -epsilon5) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }
  createCell(site);
  var newArc = createBeach(site);
  beaches.insert(lArc, newArc);
  if (!lArc && !rArc) return;
  if (lArc === rArc) {
    detachCircle(lArc);
    rArc = createBeach(lArc.site);
    beaches.insert(newArc, rArc);
    newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
    attachCircle(lArc);
    attachCircle(rArc);
    return;
  }
  if (!rArc) {
    newArc.edge = createEdge(lArc.site, newArc.site);
    return;
  }
  detachCircle(lArc);
  detachCircle(rArc);
  var lSite = lArc.site, ax = lSite[0], ay = lSite[1], bx = site[0] - ax, by = site[1] - ay, rSite = rArc.site, cx = rSite[0] - ax, cy = rSite[1] - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];
  setEdgeEnd(rArc.edge, lSite, rSite, vertex);
  newArc.edge = createEdge(lSite, site, null, vertex);
  rArc.edge = createEdge(site, rSite, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}
function leftBreakPoint(arc, directrix) {
  var site = arc.site, rfocx = site[0], rfocy = site[1], pby2 = rfocy - directrix;
  if (!pby2) return rfocx;
  var lArc = arc.P;
  if (!lArc) return -Infinity;
  site = lArc.site;
  var lfocx = site[0], lfocy = site[1], plby2 = lfocy - directrix;
  if (!plby2) return lfocx;
  var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
  return (rfocx + lfocx) / 2;
}
function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}

// ../node_modules/.pnpm/d3-voronoi@1.1.2/node_modules/d3-voronoi/src/Diagram.js
var epsilon5 = 1e-6;
var epsilon22 = 1e-12;
var beaches;
var cells;
var circles;
var edges;
function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}
function lexicographic(a, b) {
  return b[1] - a[1] || b[0] - a[0];
}
function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(), x2, y2, circle3;
  edges = [];
  cells = new Array(sites.length);
  beaches = new RedBlackTree_default();
  circles = new RedBlackTree_default();
  while (true) {
    circle3 = firstCircle;
    if (site && (!circle3 || site[1] < circle3.y || site[1] === circle3.y && site[0] < circle3.x)) {
      if (site[0] !== x2 || site[1] !== y2) {
        addBeach(site);
        x2 = site[0], y2 = site[1];
      }
      site = sites.pop();
    } else if (circle3) {
      removeBeach(circle3.arc);
    } else {
      break;
    }
  }
  sortCellHalfedges();
  if (extent) {
    var x02 = +extent[0][0], y02 = +extent[0][1], x12 = +extent[1][0], y12 = +extent[1][1];
    clipEdges(x02, y02, x12, y12);
    clipCells(x02, y02, x12, y12);
  }
  this.edges = edges;
  this.cells = cells;
  beaches = circles = edges = cells = null;
}
Diagram.prototype = {
  constructor: Diagram,
  polygons: function() {
    var edges2 = this.edges;
    return this.cells.map(function(cell) {
      var polygon2 = cell.halfedges.map(function(i) {
        return cellHalfedgeStart(cell, edges2[i]);
      });
      polygon2.data = cell.site.data;
      return polygon2;
    });
  },
  triangles: function() {
    var triangles = [], edges2 = this.edges;
    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site, halfedges, j = -1, m, s0, e1 = edges2[halfedges[m - 1]], s1 = e1.left === site ? e1.right : e1.left;
      while (++j < m) {
        s0 = s1;
        e1 = edges2[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });
    return triangles;
  },
  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },
  find: function(x2, y2, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x2 - cell.site[0], dy = y2 - cell.site[1], d2 = dx * dx + dy * dy;
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v2 = edge.left;
        if ((v2 === cell.site || !v2) && !(v2 = edge.right)) return;
        var vx = x2 - v2[0], vy = y2 - v2[1], v22 = vx * vx + vy * vy;
        if (v22 < d2) d2 = v22, i1 = v2.index;
      });
    } while (i1 !== null);
    that._found = i0;
    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-analysis/CesiumBufferAnalyze.mjs
var Buffer = class {
  constructor(viewer, radius, options = { basePath: "" }) {
    this.radius = 5e5;
    this.transformWGS84ToCartesian = (position, alt = 0) => position ? Cesium.Cartesian3.fromDegrees(
      position.lon,
      position.lat,
      alt || position.alt,
      Cesium.Ellipsoid.WGS84
    ) : Cesium.Cartesian3.ZERO;
    this.transformCartesianToWGS84 = (cartesian2) => {
      const ellipsoid = Cesium.Ellipsoid.WGS84;
      const cartographic = ellipsoid.cartesianToCartographic(cartesian2);
      return {
        lon: Cesium.Math.toDegrees(cartographic.longitude),
        lat: Cesium.Math.toDegrees(cartographic.latitude),
        alt: cartographic.height
      };
    };
    this.transformWGS84ToCartographic = (position) => position ? Cesium.Cartographic.fromDegrees(
      position.lon || position.lon,
      position.lat,
      position.alt
    ) : Cesium.Cartographic.ZERO;
    this.clear = () => {
      this.drawLayer.entities.removeAll();
      return this.handler && this.handler.destroy();
    };
    this.viewer = viewer;
    this.radius = radius;
    this.drawLayer = new Cesium.CustomDataSource("measureLayer");
    this.viewer.dataSources.add(this.drawLayer);
  }
  /**
   * 坐标数组转换 笛卡尔转84
   * @param {Array} WSG84Arr {lon,lat,alt} 地理坐标数组
   * @param {Number} alt 拔高
   * @return {Array} Cartesian3 三维位置坐标数组
   */
  transformWGS84ArrayToCartesianArray(WSG84Arr, alt) {
    return WSG84Arr ? WSG84Arr.map((item) => this.transformWGS84ToCartesian(item, alt)) : [];
  }
  /**
   * 坐标数组转换 笛卡尔转86
   * @param {Array} cartesianArr 三维位置坐标数组
   * @return {Array} {lon,lat,alt} 地理坐标数组
   */
  transformCartesianArrayToWGS84Array(cartesianArr) {
    if (this.viewer) {
      return cartesianArr ? cartesianArr.map((item) => this.transformCartesianToWGS84(item)) : [];
    }
  }
  /**
   * 拾取位置点
   * @param {Object} px 屏幕坐标
   * @return {Object} Cartesian3 三维坐标
   */
  getCatesian3FromPX(px) {
    if (this.viewer && px) {
      const picks = this.viewer.scene.drillPick(px);
      let cartesian2 = null;
      let isOn3dtiles = false;
      let isOnTerrain = false;
      Object.keys(picks).forEach((i) => {
        const pick = picks[i];
        if (pick && pick.primitive instanceof (Cesium.Cesium3DTileFeature || Cesium.Cesium3DTileset || Cesium.Model)) {
          isOn3dtiles = true;
        }
        if (isOn3dtiles) {
          this.viewer.scene.pick(px);
          cartesian2 = this.viewer.scene.pickPosition(px);
          if (cartesian2) {
            const cartographic = Cesium.Cartographic.fromCartesian(cartesian2);
            if (cartographic.height < 0) cartographic.height = 0;
            const lon = Cesium.Math.toDegrees(cartographic.longitude);
            const lat = Cesium.Math.toDegrees(cartographic.latitude);
            const { height } = cartographic;
            cartesian2 = this.transformWGS84ToCartesian({
              lon,
              lat,
              alt: height
            });
          }
        }
      });
      const boolTerrain = this.viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider;
      if (!isOn3dtiles && !boolTerrain) {
        const ray = this.viewer.scene.camera.getPickRay(px);
        if (!ray) return null;
        cartesian2 = this.viewer.scene.globe.pick(ray, this.viewer.scene);
        isOnTerrain = true;
      }
      if (!isOn3dtiles && !isOnTerrain && boolTerrain) {
        cartesian2 = this.viewer.scene.camera.pickEllipsoid(
          px,
          this.viewer.scene.globe.ellipsoid
        );
      }
      if (cartesian2) {
        const position = this.transformCartesianToWGS84(cartesian2);
        if (position.alt < 0) {
          cartesian2 = this.transformWGS84ToCartesian(position, 0.1);
        }
        return cartesian2;
      }
      return false;
    }
  }
  /**
   * 绘制面
   */
  polyBuffer() {
    return new Promise((resolve, reject) => {
      if (this.viewer) {
        this.viewer.scene.globe.depthTestAgainstTerrain = true;
        let positions = [];
        let polyPoint = [];
        const polygonHie = new Cesium.PolygonHierarchy();
        const polygonEntity = new Cesium.Entity();
        if (this.handler) {
          this.handler.destroy();
        }
        this.handler = new Cesium.ScreenSpaceEventHandler(
          this.viewer.scene.canvas
        );
        this.handler.setInputAction((movement) => {
          const cartesian2 = this.getCatesian3FromPX(movement.position);
          const cartographic = Cesium.Cartographic.fromCartesian(cartesian2);
          if (cartesian2) {
            const lon = Cesium.Math.toDegrees(cartographic.longitude);
            const lat = Cesium.Math.toDegrees(cartographic.latitude);
            const { height } = cartographic;
            if (positions.length === 0) {
              polygonHie.positions.push(cartesian2.clone());
              positions.push(cartesian2.clone());
              polyPoint.push([lon, lat, height]);
            }
            positions.push(cartesian2.clone());
            polygonHie.positions.push(cartesian2.clone());
            polyPoint.push([lon, lat, height]);
          }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        this.handler.setInputAction((movement) => {
          const cartesian2 = this.getCatesian3FromPX(movement.endPosition);
          const cartographic = Cesium.Cartographic.fromCartesian(cartesian2);
          const lon = Cesium.Math.toDegrees(cartographic.longitude);
          const lat = Cesium.Math.toDegrees(cartographic.latitude);
          const { height } = cartographic;
          if (positions.length >= 2) {
            if (cartesian2) {
              positions.pop();
              positions.push(cartesian2);
              polygonHie.positions.pop();
              polygonHie.positions.push(cartesian2);
              polyPoint.pop();
              polyPoint.push([lon, lat, height]);
            }
          }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        this.handler.setInputAction((movement) => {
          if (positions.length > 2) {
            positions.push(positions[0]);
            polyPoint.push(polyPoint[0]);
            const arrData = [...polyPoint];
            this.addPolygon(positions);
            this.initPolygonBuffer(polyPoint, this.radius);
            positions = [];
            polyPoint = [];
            polygonHie.positions = [];
            resolve(arrData);
          }
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
        this.handler.setInputAction((e) => {
          this.clear();
        }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
        polygonEntity.polyline = {
          width: 3,
          material: Cesium.Color.YELLOW.withAlpha(0.8),
          clampToGround: true
        };
        polygonEntity.polyline.positions = new Cesium.CallbackProperty(
          () => positions,
          false
        );
        polygonEntity.polygon = {
          hierarchy: new Cesium.CallbackProperty(() => polygonHie, false),
          material: Cesium.Color.WHITE.withAlpha(0.1),
          clampToGround: true
        };
        this.drawLayer.entities.add(polygonEntity);
      }
    });
  }
  // 初始化面缓冲
  initPolygonBuffer(bufferPolyogn, distance2) {
    return new Promise((resolve, reject) => {
      let degreesArray = this.pointsToDegreesArray(bufferPolyogn);
      const polygonF = polygon([bufferPolyogn]);
      const buffered = buffer(polygonF, distance2, { units: "meters" });
      const { coordinates } = buffered.geometry;
      const points = coordinates[0];
      degreesArray = this.pointsToDegreesArray(points);
      this.addBufferPolyogn(Cesium.Cartesian3.fromDegreesArray(degreesArray));
      resolve(bufferPolyogn);
    });
  }
  // 添加缓冲面
  addBufferPolyogn(positions) {
    this.drawLayer.entities.add({
      id: "polyognBuffer",
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(positions),
        material: Cesium.Color.RED.withAlpha(0.3),
        classificationType: Cesium.ClassificationType.BOTH,
        clampToGround: true
      }
    });
  }
  // 添加面
  addPolygon(positions) {
    this.drawLayer.entities.add({
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(positions),
        material: Cesium.Color.WHITE.withAlpha(0.1),
        classificationType: Cesium.ClassificationType.BOTH,
        clampToGround: true
      },
      polyline: {
        positions,
        width: 2,
        material: Cesium.Color.YELLOW.withAlpha(0.4),
        clampToGround: true
      }
    });
  }
  // 坐标点格式转换
  pointsToDegreesArray(points) {
    const degreesArray = [];
    points.map((item) => {
      degreesArray.push(item[0]);
      degreesArray.push(item[1]);
    });
    return degreesArray;
  }
  changeRadius(changeDis) {
    this.radius = changeDis;
  }
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/utils/util.mjs
var loadScript = (src) => {
  const $script = document.createElement("script");
  $script.async = false;
  $script.src = src;
  document.body.appendChild($script);
  return new Promise((resolve, reject) => {
    $script.onload = () => {
      resolve(true);
    };
  });
};
function groupPoints(pointsArray) {
  const groupedPoints = [];
  for (let i = 0; i < pointsArray.length; i++) {
    const group = [pointsArray[i], pointsArray[i + 1]];
    groupedPoints.push(group);
  }
  groupedPoints.pop();
  return groupedPoints;
}
function twoToCenter(point1, point2) {
  const pointNew1 = Cesium.Cartesian3.fromDegrees(point1[0], point1[1]);
  const pointNew2 = Cesium.Cartesian3.fromDegrees(point2[0], point2[1]);
  const centerPoint = Cesium.Cartesian3.lerp(
    pointNew1,
    pointNew2,
    0.5,
    new Cesium.Cartesian3()
  );
  return centerPoint;
}

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/composables/use-entity/CesiumTrack.mjs
var groupArrPoint = [];
function CesiumTrack(data, viewer, img) {
  return new Promise((resolve, reject) => {
    groupArrPoint = [];
    let lineDataArr = [];
    if (!data.length) return false;
    console.log("dataaaaa", data);
    data.forEach((item, index2) => {
      if (item.color) {
        const line = viewer.entities.add({
          name: "Purple",
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(
              item.positions.flat()
            ),
            width: 3,
            followSurface: false,
            material: new Cesium.PolylineArrowMaterialProperty(
              Cesium.Color.fromCssColorString(item.color)
            )
          }
        });
        handleGeneratePosition(item.positions, item.color, viewer);
        groupArrPoint.push({
          color: item.color,
          data: groupPoints(item.positions)
        });
        lineDataArr.push(line);
      }
    });
    handleGroupArrPoint(viewer, img);
    resolve(null);
    return lineDataArr;
  });
}
var handleGeneratePosition = (data, color, viewer) => {
  if (data && data.length) {
    let startPoint = {
      point: [data[0].lon, data[0].lat],
      track_time: "2020-09-03"
    };
    let endPoint = {
      point: [data[data.length - 1].lon, data[data.length - 1].lat],
      track_time: "2020-09-07"
    };
    let dataArr = [startPoint, endPoint];
    dataArr.forEach((item, index2) => {
      let tooltip = `
          <div>
            <div class="line"></div>
            <div class="panel">
              <span class="content">${item.track_time}</span>
            </div>
          </div>
        `;
      let className = "LayerPointTime";
      ({
        viewer,
        position: [parseFloat(item.point[0]), parseFloat(item.point[1])],
        height: 0,
        offset: [0, -60],
        dom: tooltip,
        className,
        type: "LayerPointTime"
      });
    });
    data.forEach((t) => {
      viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(t[0], t[1], 1e3),
        attribute: {
          data: []
        },
        point: {
          zIndex: 99999999,
          pixelSize: 6,
          pickable: true,
          color: Cesium.Color.fromCssColorString(color),
          heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
        }
      });
    });
  }
};
var handleGroupArrPoint = (viewer, img) => {
  groupArrPoint.forEach((item) => {
    item.data.forEach((coordItem) => {
      let centerPoint = twoToCenter(coordItem[0], coordItem[1]);
      let angle2 = rhumbBearing(coordItem[0], coordItem[1]);
      const angleInRadians = Cesium.Math.toRadians(-angle2 + 90);
      const hexColor = item.color;
      const alpha = 1;
      Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha);
      viewer.entities.add({
        position: centerPoint,
        billboard: {
          rotation: angleInRadians,
          image: img,
          scale: 0.1,
          alignedAxis: Cesium.Cartesian3.ZERO,
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
        }
      });
      viewer.scene.requestRender();
    });
  });
};

// ../node_modules/.pnpm/dls-map@1.0.6/node_modules/dls-map/es/utils/helper/index.mjs
var importHack = (module, moduleName) => {
  if (typeof module === "function") {
    return module;
  }
  if (module.default) {
    return module.default;
  }
  const wModule = window[moduleName];
  if (wModule) {
    return wModule.default ? wModule.default : wModule;
  }
  if (module) {
    return module;
  }
  throw new Error(`无法处理模块 : ${moduleName}`);
};
export {
  Buffer as CesiumBufferAnalyze,
  CesiumHeatMap,
  CesiumPlot,
  CesiumTrack,
  CesiumUseEcharts,
  DlsButton,
  DlsDivLabel,
  DlsMap,
  DrawSoildLine,
  Shaders,
  addBillboard,
  addCircle,
  addLine,
  addRainScene,
  addSnowScene,
  addWall,
  clearEntityByname,
  groupPoints,
  handlePitchDegrees,
  importHack,
  loadScript,
  removeDrawLine,
  twoToCenter,
  useCesiumCoord,
  useCesiumFlyTo,
  useLoadTerrain,
  useRemoveCesium,
  useSwitchMap,
  useSwitchViewPoint,
  withInstall,
  withInstallFunction
};
/*! Bundled license information:

splaytree/dist/splay.esm.js:
  (**
   * splaytree v3.1.2
   * Fast Splay tree for Node and browser
   *
   * @author Alexander Milevski <info@w8r.name>
   * @license MIT
   * @preserve
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)

@turf/great-circle/dist/esm/index.js:
  (*!
   * Copyright (c) 2019, Dane Springmeyer
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are
   * met:
   *
   *     * Redistributions of source code must retain the above copyright
   *       notice, this list of conditions and the following disclaimer.
   *     * Redistributions in binary form must reproduce the above copyright
   *       notice, this list of conditions and the following disclaimer in
   *       the documentation and/or other materials provided with the
   *       distribution.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
   * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
   * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
   * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *)

marchingsquares/dist/marchingsquares-esm.js:
  (*!
  * MarchingSquaresJS
  * version 1.3.3
  * https://github.com/RaumZeit/MarchingSquares.js
  *
  * @license GNU Affero General Public License.
  * Copyright (c) 2015-2019 Ronny Lorenz <ronny@tbi.univie.ac.at>
  *)
*/
//# sourceMappingURL=dls-map.js.map
