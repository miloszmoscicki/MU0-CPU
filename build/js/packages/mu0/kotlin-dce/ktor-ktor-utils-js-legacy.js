(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-io-js-legacy', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-io-js-legacy'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-utils-js-legacy'.");
    }if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-utils-js-legacy'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-utils-js-legacy'.");
    }if (false) {
    }root['ktor-ktor-utils-js-legacy'] = factory(typeof this['ktor-ktor-utils-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-utils-js-legacy'], kotlin, this['ktor-ktor-io-js-legacy'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_io_js_legacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var Any = Object;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwCCE = Kotlin.throwCCE;
  var toChar = Kotlin.toChar;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var writeText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeText_t153jy$;
  var writeFully = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeFully_i6snlg$;
  var readAvailable = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readAvailable_ja303r$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var String_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.String_xge8xe$;
  var unboxChar = Kotlin.unboxChar;
  var toByte = Kotlin.toByte;
  var readText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readText_1lnizf$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var BytePacketBuilder = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.BytePacketBuilder_za3lpa$;
  var Throwable = Error;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var get_lastIndex = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var L4096 = Kotlin.Long.fromInt(4096);
  var ByteChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteChannel_6taknv$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var ByteChannel_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteChannel;
  var close = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.close_x5qia6$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var readRemaining_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.readRemaining_3dmw3p$;
  var readBytes_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readBytes_xc9h3n$;
  var addSuppressedInternal = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.addSuppressedInternal_oh0dqn$;
  var toShort = Kotlin.toShort;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var MutableMap$MutableEntry = Kotlin.kotlin.collections.MutableMap.MutableEntry;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Map = Kotlin.kotlin.collections.Map;
  var charArray = Kotlin.charArray;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var toString = Kotlin.toString;
  var SupervisorJob = $module$kotlinx_coroutines_core.kotlinx.coroutines.SupervisorJob_5dx9e$;
  var AbstractCoroutineContextElement = Kotlin.kotlin.coroutines.AbstractCoroutineContextElement;
  var CoroutineExceptionHandler = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineExceptionHandler;
  var concatToString = Kotlin.kotlin.text.concatToString_355ntz$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var encodeToByteArray = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var Set = Kotlin.kotlin.collections.Set;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var L0 = Kotlin.Long.ZERO;
  var wrapFunction = Kotlin.wrapFunction;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var toMap = Kotlin.kotlin.collections.toMap_abgq59$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var toMap_0 = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var single = Kotlin.kotlin.collections.single_7wnvza$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var IOException = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.errors.IOException;
  var addAll_0 = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var MutableCollection = Kotlin.kotlin.collections.MutableCollection;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var List = Kotlin.kotlin.collections.List;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var MutableListIterator = Kotlin.kotlin.collections.MutableListIterator;
  var IndexOutOfBoundsException_init = Kotlin.kotlin.IndexOutOfBoundsException_init;
  var makeShared = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.makeShared_s8jyvk$;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var AbstractMutableList = Kotlin.kotlin.collections.AbstractMutableList;
  var JsMath = Math;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var MutableIterable = Kotlin.kotlin.collections.MutableIterable;
  var asReversed = Kotlin.kotlin.collections.asReversed_2p1efm$;
  var ListIterator = Kotlin.kotlin.collections.ListIterator;
  var atomicArrayOfNulls;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var getKClass = Kotlin.getKClass;
  var Long = Kotlin.Long;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var Char = Kotlin.BoxedChar;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var single_0 = Kotlin.kotlin.collections.single_2p1efm$;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var toInt_0 = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var single_1 = Kotlin.kotlin.text.single_gw00vp$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Comparable = Kotlin.kotlin.Comparable;
  var throwUPAE = Kotlin.throwUPAE;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var recoverStackTrace = $module$kotlinx_coroutines_core.kotlinx.coroutines.internal.recoverStackTrace_ak2v6d$;
  var getCallableRef = Kotlin.getCallableRef;
  var coroutines_0 = Kotlin.kotlin.coroutines;
  var Continuation = Kotlin.kotlin.coroutines.Continuation;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  ConcurrentListSlice.prototype = Object.create(AbstractMutableList.prototype);
  ConcurrentListSlice.prototype.constructor = ConcurrentListSlice;
  function AttributeKey(name) {
    this.name = name;
  }
  AttributeKey.prototype.toString = function () {
    return this.name.length === 0 ? Any.prototype.toString.call(this) : 'AttributeKey: ' + this.name;
  };
  AttributeKey.$metadata$ = {kind: Kind_CLASS, simpleName: 'AttributeKey', interfaces: []};
  function Attributes() {
  }
  Attributes.prototype.get_yzaw86$ = function (key) {
    var tmp$;
    tmp$ = this.getOrNull_yzaw86$(key);
    if (tmp$ == null) {
      throw IllegalStateException_init('No instance for key ' + key);
    }return tmp$;
  };
  Attributes.prototype.take_yzaw86$ = function (key) {
    var $receiver = this.get_yzaw86$(key);
    this.remove_yzaw86$(key);
    return $receiver;
  };
  Attributes.prototype.takeOrNull_yzaw86$ = function (key) {
    var $receiver = this.getOrNull_yzaw86$(key);
    this.remove_yzaw86$(key);
    return $receiver;
  };
  Attributes.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Attributes', interfaces: []};
  function putAll($receiver, other) {
    var tmp$;
    tmp$ = other.allKeys.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      $receiver.put_uuntuo$(Kotlin.isType(tmp$_0 = element, AttributeKey) ? tmp$_0 : throwCCE(), other.get_yzaw86$(element));
    }
  }
  var BASE64_ALPHABET;
  var BASE64_MASK;
  var BASE64_PAD;
  var BASE64_INVERSE_ALPHABET;
  var CHUNK_BUFFER_SIZE;
  function CaseInsensitiveMap() {
    this.delegate_0 = LinkedHashMap_init();
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'size', {configurable: true, get: function () {
    return this.delegate_0.size;
  }});
  CaseInsensitiveMap.prototype.containsKey_11rb$ = function (key) {
    return this.delegate_0.containsKey_11rb$(new CaseInsensitiveString(key));
  };
  CaseInsensitiveMap.prototype.containsValue_11rc$ = function (value) {
    return this.delegate_0.containsValue_11rc$(value);
  };
  CaseInsensitiveMap.prototype.get_11rb$ = function (key) {
    return this.delegate_0.get_11rb$(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  CaseInsensitiveMap.prototype.clear = function () {
    this.delegate_0.clear();
  };
  CaseInsensitiveMap.prototype.put_xwzc9p$ = function (key, value) {
    return this.delegate_0.put_xwzc9p$(caseInsensitive(key), value);
  };
  CaseInsensitiveMap.prototype.putAll_a2k3zr$ = function (from) {
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var value = element.value;
      this.put_xwzc9p$(key, value);
    }
  };
  CaseInsensitiveMap.prototype.remove_11rb$ = function (key) {
    return this.delegate_0.remove_11rb$(caseInsensitive(key));
  };
  function CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda($receiver) {
    return $receiver.content;
  }
  function CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda_0($receiver) {
    return caseInsensitive($receiver);
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'keys', {configurable: true, get: function () {
    return new DelegatingMutableSet(this.delegate_0.keys, CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda, CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda_0);
  }});
  function CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda($receiver) {
    return new Entry($receiver.key.content, $receiver.value);
  }
  function CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda_0($receiver) {
    return new Entry(caseInsensitive($receiver.key), $receiver.value);
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'entries', {configurable: true, get: function () {
    return new DelegatingMutableSet(this.delegate_0.entries, CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda, CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda_0);
  }});
  Object.defineProperty(CaseInsensitiveMap.prototype, 'values', {configurable: true, get: function () {
    return this.delegate_0.values;
  }});
  CaseInsensitiveMap.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, CaseInsensitiveMap))
      return false;
    return equals(other.delegate_0, this.delegate_0);
  };
  CaseInsensitiveMap.prototype.hashCode = function () {
    return hashCode(this.delegate_0);
  };
  CaseInsensitiveMap.$metadata$ = {kind: Kind_CLASS, simpleName: 'CaseInsensitiveMap', interfaces: [MutableMap]};
  function Entry(key, value) {
    this.key_3iz5qv$_0 = key;
    this.value_p1xw47$_0 = value;
  }
  Object.defineProperty(Entry.prototype, 'key', {get: function () {
    return this.key_3iz5qv$_0;
  }});
  Object.defineProperty(Entry.prototype, 'value', {get: function () {
    return this.value_p1xw47$_0;
  }, set: function (value) {
    this.value_p1xw47$_0 = value;
  }});
  Entry.prototype.setValue_11rc$ = function (newValue) {
    this.value = newValue;
    return this.value;
  };
  Entry.prototype.hashCode = function () {
    return 527 + hashCode(ensureNotNull(this.key)) + hashCode(ensureNotNull(this.value)) | 0;
  };
  Entry.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, Map$Entry))
      return false;
    return equals(other.key, this.key) && equals(other.value, this.value);
  };
  Entry.prototype.toString = function () {
    return this.key.toString() + '=' + this.value;
  };
  Entry.$metadata$ = {kind: Kind_CLASS, simpleName: 'Entry', interfaces: [MutableMap$MutableEntry]};
  function isLowerCase($receiver) {
    return String.fromCharCode($receiver).toLowerCase().charCodeAt(0) === $receiver;
  }
  function toCharArray($receiver) {
    var tmp$;
    var array = charArray($receiver.length, null);
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var value = unboxChar(toBoxedChar($receiver.charCodeAt(i)));
      array[i] = value;
    }
    return array;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  var digits;
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.delegate_0 = delegate;
    this.convertTo_0 = convertTo;
    this.convert_0 = convert;
    this.size_uukmxx$_0 = this.delegate_0.size;
  }
  DelegatingMutableSet.prototype.convert_9xhtru$ = function ($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.convert_0(item));
    }
    return destination;
  };
  DelegatingMutableSet.prototype.convertTo_9xhuij$ = function ($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.convertTo_0(item));
    }
    return destination;
  };
  Object.defineProperty(DelegatingMutableSet.prototype, 'size', {configurable: true, get: function () {
    return this.size_uukmxx$_0;
  }});
  DelegatingMutableSet.prototype.add_11rb$ = function (element) {
    return this.delegate_0.add_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.addAll_brywnq$ = function (elements) {
    return this.delegate_0.addAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.clear = function () {
    this.delegate_0.clear();
  };
  DelegatingMutableSet.prototype.remove_11rb$ = function (element) {
    return this.delegate_0.remove_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.removeAll_brywnq$ = function (elements) {
    return this.delegate_0.removeAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.retainAll_brywnq$ = function (elements) {
    return this.delegate_0.retainAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.contains_11rb$ = function (element) {
    return this.delegate_0.contains_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.containsAll_brywnq$ = function (elements) {
    return this.delegate_0.containsAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  function DelegatingMutableSet$iterator$ObjectLiteral(this$DelegatingMutableSet) {
    this.this$DelegatingMutableSet = this$DelegatingMutableSet;
    this.delegateIterator = this$DelegatingMutableSet.delegate_0.iterator();
  }
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.delegateIterator.hasNext();
  };
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.next = function () {
    return this.this$DelegatingMutableSet.convertTo_0(this.delegateIterator.next());
  };
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.remove = function () {
    this.delegateIterator.remove();
  };
  DelegatingMutableSet$iterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableIterator]};
  DelegatingMutableSet.prototype.iterator = function () {
    return new DelegatingMutableSet$iterator$ObjectLiteral(this);
  };
  DelegatingMutableSet.prototype.hashCode = function () {
    return hashCode(this.delegate_0);
  };
  DelegatingMutableSet.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, Set))
      return false;
    var elements = this.convertTo_9xhuij$(this.delegate_0);
    var tmp$ = other.containsAll_brywnq$(elements);
    if (tmp$) {
      tmp$ = elements.containsAll_brywnq$(other);
    }return tmp$;
  };
  DelegatingMutableSet.prototype.toString = function () {
    return this.convertTo_9xhuij$(this.delegate_0).toString();
  };
  DelegatingMutableSet.$metadata$ = {kind: Kind_CLASS, simpleName: 'DelegatingMutableSet', interfaces: [MutableSet]};
  var Identity_instance = null;
  function Hash() {
    Hash_instance = this;
  }
  Hash.prototype.combine_jiburq$ = function (objects) {
    return hashCode(toList(objects));
  };
  Hash.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Hash', interfaces: []};
  var Hash_instance = null;
  function Hash_getInstance() {
    if (Hash_instance === null) {
      new Hash();
    }return Hash_instance;
  }
  var GenerateOnlyNonceManager_instance = null;
  var AlwaysFailNonceManager_instance = null;
  function StringValues() {
    StringValues$Companion_getInstance();
  }
  function StringValues$Companion() {
    StringValues$Companion_instance = this;
    this.Empty = new StringValuesImpl();
  }
  StringValues$Companion.prototype.build_o7hlrk$ = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.StringValues.Companion.build_o7hlrk$', wrapFunction(function () {
    var StringValuesBuilder_init = _.io.ktor.util.StringValuesBuilder;
    return function (caseInsensitiveName, builder) {
      if (caseInsensitiveName === void 0)
        caseInsensitiveName = false;
      var $receiver = new StringValuesBuilder_init(caseInsensitiveName);
      builder($receiver);
      return $receiver.build();
    };
  }));
  StringValues$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var StringValues$Companion_instance = null;
  function StringValues$Companion_getInstance() {
    if (StringValues$Companion_instance === null) {
      new StringValues$Companion();
    }return StringValues$Companion_instance;
  }
  StringValues.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.getAll_61zpoe$(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValues.prototype.contains_61zpoe$ = function (name) {
    return this.getAll_61zpoe$(name) != null;
  };
  StringValues.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.getAll_61zpoe$(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValues.prototype.forEach_ubvtmq$ = function (body) {
    var tmp$;
    tmp$ = this.entries().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var k = element.key;
      var v = element.value;
      body(k, v);
    }
  };
  StringValues.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StringValues', interfaces: []};
  function StringValuesSingleImpl(caseInsensitiveName, name, values) {
    this.caseInsensitiveName_xvy381$_0 = caseInsensitiveName;
    this.name = name;
    this.values = values;
  }
  Object.defineProperty(StringValuesSingleImpl.prototype, 'caseInsensitiveName', {get: function () {
    return this.caseInsensitiveName_xvy381$_0;
  }});
  StringValuesSingleImpl.prototype.getAll_61zpoe$ = function (name) {
    return equals_0(this.name, name, this.caseInsensitiveName) ? this.values : null;
  };
  function StringValuesSingleImpl$entries$ObjectLiteral(this$StringValuesSingleImpl) {
    this.key_tykvjz$_0 = this$StringValuesSingleImpl.name;
    this.value_jfkgsx$_0 = this$StringValuesSingleImpl.values;
  }
  Object.defineProperty(StringValuesSingleImpl$entries$ObjectLiteral.prototype, 'key', {configurable: true, get: function () {
    return this.key_tykvjz$_0;
  }});
  Object.defineProperty(StringValuesSingleImpl$entries$ObjectLiteral.prototype, 'value', {configurable: true, get: function () {
    return this.value_jfkgsx$_0;
  }});
  StringValuesSingleImpl$entries$ObjectLiteral.prototype.toString = function () {
    return this.key + '=' + this.value;
  };
  StringValuesSingleImpl$entries$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Map$Entry]};
  StringValuesSingleImpl.prototype.entries = function () {
    return setOf(new StringValuesSingleImpl$entries$ObjectLiteral(this));
  };
  StringValuesSingleImpl.prototype.isEmpty = function () {
    return false;
  };
  StringValuesSingleImpl.prototype.names = function () {
    return setOf(this.name);
  };
  StringValuesSingleImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.caseInsensitiveName + ') ' + this.entries();
  };
  StringValuesSingleImpl.prototype.hashCode = function () {
    return entriesHashCode(this.entries(), 31 * hashCode(this.caseInsensitiveName) | 0);
  };
  StringValuesSingleImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, StringValues))
      return false;
    if (this.caseInsensitiveName !== other.caseInsensitiveName)
      return false;
    return entriesEquals(this.entries(), other.entries());
  };
  StringValuesSingleImpl.prototype.forEach_ubvtmq$ = function (body) {
    body(this.name, this.values);
  };
  StringValuesSingleImpl.prototype.get_61zpoe$ = function (name) {
    return equals_0(name, this.name, this.caseInsensitiveName) ? firstOrNull(this.values) : null;
  };
  StringValuesSingleImpl.prototype.contains_61zpoe$ = function (name) {
    return equals_0(name, this.name, this.caseInsensitiveName);
  };
  StringValuesSingleImpl.prototype.contains_puj7f4$ = function (name, value) {
    return equals_0(name, this.name, this.caseInsensitiveName) && this.values.contains_11rb$(value);
  };
  function StringValuesImpl(caseInsensitiveName, values) {
    if (caseInsensitiveName === void 0)
      caseInsensitiveName = false;
    if (values === void 0)
      values = emptyMap();
    this.caseInsensitiveName_w2tiaf$_0 = caseInsensitiveName;
    this.values_x1t64x$_0 = lazy(StringValuesImpl$values$lambda(this, values));
  }
  Object.defineProperty(StringValuesImpl.prototype, 'caseInsensitiveName', {get: function () {
    return this.caseInsensitiveName_w2tiaf$_0;
  }});
  Object.defineProperty(StringValuesImpl.prototype, 'values', {configurable: true, get: function () {
    return this.values_x1t64x$_0.value;
  }});
  StringValuesImpl.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.listForKey_6rkiov$_0(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValuesImpl.prototype.getAll_61zpoe$ = function (name) {
    return this.listForKey_6rkiov$_0(name);
  };
  StringValuesImpl.prototype.contains_61zpoe$ = function (name) {
    return this.listForKey_6rkiov$_0(name) != null;
  };
  StringValuesImpl.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.listForKey_6rkiov$_0(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesImpl.prototype.names = function () {
    return unmodifiable(this.values.keys);
  };
  StringValuesImpl.prototype.isEmpty = function () {
    return this.values.isEmpty();
  };
  StringValuesImpl.prototype.entries = function () {
    return unmodifiable(this.values.entries);
  };
  StringValuesImpl.prototype.forEach_ubvtmq$ = function (body) {
    var tmp$;
    tmp$ = this.values.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.key;
      var value = tmp$_0.value;
      body(key, value);
    }
  };
  StringValuesImpl.prototype.listForKey_6rkiov$_0 = function (name) {
    return this.values.get_11rb$(name);
  };
  StringValuesImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.caseInsensitiveName + ') ' + this.entries();
  };
  StringValuesImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, StringValues))
      return false;
    if (this.caseInsensitiveName !== other.caseInsensitiveName)
      return false;
    return entriesEquals(this.entries(), other.entries());
  };
  StringValuesImpl.prototype.hashCode = function () {
    return entriesHashCode(this.entries(), 31 * hashCode(this.caseInsensitiveName) | 0);
  };
  function StringValuesImpl$values$lambda(this$StringValuesImpl, closure$values) {
    return function () {
      var tmp$;
      if (this$StringValuesImpl.caseInsensitiveName) {
        var $receiver = caseInsensitiveMap();
        $receiver.putAll_a2k3zr$(closure$values);
        tmp$ = $receiver;
      } else
        tmp$ = toMap(closure$values);
      return tmp$;
    };
  }
  StringValuesImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'StringValuesImpl', interfaces: [StringValues]};
  function StringValuesBuilder(caseInsensitiveName, size) {
    if (caseInsensitiveName === void 0)
      caseInsensitiveName = false;
    if (size === void 0)
      size = 8;
    this.caseInsensitiveName = caseInsensitiveName;
    this.values = this.caseInsensitiveName ? caseInsensitiveMap() : LinkedHashMap_init_0(size);
    this.built = false;
  }
  StringValuesBuilder.prototype.getAll_61zpoe$ = function (name) {
    return this.values.get_11rb$(name);
  };
  StringValuesBuilder.prototype.contains_61zpoe$ = function (name) {
    var $receiver = this.values;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(name);
  };
  StringValuesBuilder.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesBuilder.prototype.names = function () {
    return this.values.keys;
  };
  StringValuesBuilder.prototype.isEmpty = function () {
    return this.values.isEmpty();
  };
  StringValuesBuilder.prototype.entries = function () {
    return unmodifiable(this.values.entries);
  };
  StringValuesBuilder.prototype.set_puj7f4$ = function (name, value) {
    this.validateValue_61zpoe$(value);
    var list = this.ensureListForKey_fsrbb4$_0(name, 1);
    list.clear();
    list.add_11rb$(value);
  };
  StringValuesBuilder.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.getAll_61zpoe$(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValuesBuilder.prototype.append_puj7f4$ = function (name, value) {
    this.validateValue_61zpoe$(value);
    this.ensureListForKey_fsrbb4$_0(name, 1).add_11rb$(value);
  };
  function StringValuesBuilder$appendAll$lambda(this$StringValuesBuilder) {
    return function (name, values) {
      this$StringValuesBuilder.appendAll_poujtz$(name, values);
      return Unit;
    };
  }
  StringValuesBuilder.prototype.appendAll_hb0ubp$ = function (stringValues) {
    stringValues.forEach_ubvtmq$(StringValuesBuilder$appendAll$lambda(this));
  };
  function StringValuesBuilder$appendMissing$lambda(this$StringValuesBuilder) {
    return function (name, values) {
      this$StringValuesBuilder.appendMissing_poujtz$(name, values);
      return Unit;
    };
  }
  StringValuesBuilder.prototype.appendMissing_hb0ubp$ = function (stringValues) {
    stringValues.forEach_ubvtmq$(StringValuesBuilder$appendMissing$lambda(this));
  };
  StringValuesBuilder.prototype.appendAll_poujtz$ = function (name, values) {
    var tmp$, tmp$_0, tmp$_1;
    var list = this.ensureListForKey_fsrbb4$_0(name, (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = values, Collection) ? tmp$ : null) != null ? tmp$_0.size : null) != null ? tmp$_1 : 2);
    var tmp$_2;
    tmp$_2 = values.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      this.validateValue_61zpoe$(element);
      list.add_11rb$(element);
    }
  };
  StringValuesBuilder.prototype.appendMissing_poujtz$ = function (name, values) {
    var tmp$, tmp$_0;
    var existing = (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? toSet(tmp$) : null) != null ? tmp$_0 : emptySet();
    var destination = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = values.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (!existing.contains_11rb$(element))
        destination.add_11rb$(element);
    }
    this.appendAll_poujtz$(name, destination);
  };
  StringValuesBuilder.prototype.remove_61zpoe$ = function (name) {
    this.values.remove_11rb$(name);
  };
  StringValuesBuilder.prototype.removeKeysWithNoEntries = function () {
    var tmp$;
    var $receiver = this.values;
    var destination = LinkedHashMap_init();
    var tmp$_0;
    tmp$_0 = $receiver.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.value.isEmpty()) {
        destination.put_xwzc9p$(element.key, element.value);
      }}
    tmp$ = destination.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var k = tmp$_1.key;
      this.remove_61zpoe$(k);
    }
  };
  StringValuesBuilder.prototype.remove_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? tmp$.remove_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesBuilder.prototype.clear = function () {
    this.values.clear();
  };
  StringValuesBuilder.prototype.build = function () {
    if (!!this.built) {
      var message = 'ValueMapBuilder can only build a single ValueMap';
      throw IllegalArgumentException_init(message.toString());
    }this.built = true;
    return new StringValuesImpl(this.caseInsensitiveName, this.values);
  };
  StringValuesBuilder.prototype.validateName_61zpoe$ = function (name) {
  };
  StringValuesBuilder.prototype.validateValue_61zpoe$ = function (value) {
  };
  StringValuesBuilder.prototype.ensureListForKey_fsrbb4$_0 = function (name, size) {
    var tmp$;
    if (this.built) {
      throw IllegalStateException_init('Cannot modify a builder after build() function already invoked. ' + 'Make sure you call build() last.');
    }var tmp$_0;
    if ((tmp$ = this.values.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = ArrayList_init(size);
      this.validateName_61zpoe$(name);
      this.values.put_xwzc9p$(name, $receiver);
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  StringValuesBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'StringValuesBuilder', interfaces: []};
  function flattenEntries($receiver) {
    var $receiver_0 = $receiver.entries();
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_1 = element.value;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(element.key, item));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return destination;
  }
  function appendAll($receiver, builder) {
    var tmp$;
    tmp$ = builder.entries().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var name = element.key;
      var values = element.value;
      $receiver.appendAll_poujtz$(name, values);
    }
    return $receiver;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return (seed * 31 | 0) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules($receiver) {
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$ = get_indices($receiver);
      tmp$_0 = tmp$.first;
      tmp$_1 = tmp$.last;
      tmp$_2 = tmp$.step;
      for (var index = tmp$_0; index <= tmp$_1; index += tmp$_2) {
        var it = toBoxedChar($receiver.charCodeAt(index));
        if (toLowerCasePreservingASCII(unboxChar(it)) !== unboxChar(it)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }}
      indexOfFirst$result = -1;
    }
     while (false);
    var firstIndex = indexOfFirst$result;
    if (firstIndex === -1) {
      return $receiver;
    }var original = $receiver;
    var $receiver_0 = StringBuilder_init_0($receiver.length);
    var tmp$_3;
    $receiver_0.append_ezbsdh$(original, 0, firstIndex);
    tmp$_3 = get_lastIndex(original);
    for (var index_0 = firstIndex; index_0 <= tmp$_3; index_0++) {
      $receiver_0.append_s8itvh$(toLowerCasePreservingASCII(original.charCodeAt(index_0)));
    }
    return $receiver_0.toString();
  }
  function toLowerCasePreservingASCII(ch) {
    if ((new CharRange(65, 90)).contains_mef7kx$(ch))
      return toChar(ch + 32);
    else if ((new CharRange(0, 127)).contains_mef7kx$(ch))
      return ch;
    else {
      return String.fromCharCode(ch).toLowerCase().charCodeAt(0);
    }
  }
  function caseInsensitive($receiver) {
    return new CaseInsensitiveString($receiver);
  }
  function CaseInsensitiveString(content) {
    this.content = content;
    this.hash_0 = hashCode(this.content.toLowerCase());
  }
  CaseInsensitiveString.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    return ((tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = other, CaseInsensitiveString) ? tmp$ : null) != null ? tmp$_0.content : null) != null ? equals_0(tmp$_1, this.content, true) : null) === true;
  };
  CaseInsensitiveString.prototype.hashCode = function () {
    return this.hash_0;
  };
  CaseInsensitiveString.prototype.toString = function () {
    return this.content;
  };
  CaseInsensitiveString.$metadata$ = {kind: Kind_CLASS, simpleName: 'CaseInsensitiveString', interfaces: []};
  function shared$ObjectLiteral(closure$value) {
    this.value_0 = closure$value;
  }
  shared$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.value_0;
  };
  shared$ObjectLiteral.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.value_0 = value;
  };
  shared$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ReadWriteProperty]};
  var INITIAL_CAPACITY;
  function ConcurrentList() {
    this.data_euorsu$_0 = new shared$ObjectLiteral(new SharedList(32));
    this.size_emamgl$_0 = new shared$ObjectLiteral(0);
    this.lock_0 = new Any();
    makeShared(this);
  }
  var ConcurrentList$data_metadata = new PropertyMetadata('data');
  Object.defineProperty(ConcurrentList.prototype, 'data_0', {configurable: true, get: function () {
    return this.data_euorsu$_0.getValue_lrcp0p$(this, ConcurrentList$data_metadata);
  }, set: function (data) {
    this.data_euorsu$_0.setValue_9rddgb$(this, ConcurrentList$data_metadata, data);
  }});
  var ConcurrentList$size_metadata = new PropertyMetadata('size');
  Object.defineProperty(ConcurrentList.prototype, 'size', {configurable: true, get: function () {
    return this.size_emamgl$_0.getValue_lrcp0p$(this, ConcurrentList$size_metadata);
  }, set: function (size) {
    this.size_emamgl$_0.setValue_9rddgb$(this, ConcurrentList$size_metadata, size);
  }});
  ConcurrentList.prototype.hashCode = function () {
    var tmp$;
    var accumulator = 7;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var state = accumulator;
      var tmp$_0;
      accumulator = Hash_getInstance().combine_jiburq$([state, (tmp$_0 = element != null ? hashCode(element) : null) != null ? tmp$_0 : 0]);
    }
    return accumulator;
  };
  ConcurrentList.prototype.equals = function (other) {
    var block$result;
    block$break: do {
      if (other == null || !Kotlin.isType(other, List) || other.size !== this.size) {
        block$result = false;
        break block$break;
      }var tmp$, tmp$_0;
      var index = 0;
      tmp$ = this.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (!equals(other.get_za3lpa$(checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0))), item)) {
          block$result = false;
          break block$break;
        }}
      block$result = true;
    }
     while (false);
    return block$result;
  };
  ConcurrentList.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    $receiver.append_s8itvh$(91);
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      $receiver.append_pdl1vj$(item.toString());
      if ((index_0 + 1 | 0) < this.size) {
        $receiver.append_pdl1vj$(', ');
      }}
    $receiver.append_s8itvh$(93);
    return $receiver.toString();
  };
  ConcurrentList.prototype.contains_11rb$ = function (element) {
    return this.indexOf_11rb$(element) >= 0;
  };
  ConcurrentList.prototype.containsAll_brywnq$ = function (elements) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        all$result = true;
        break all$break;
      }tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!this.contains_11rb$(element)) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  };
  ConcurrentList.prototype.get_za3lpa$ = function (index) {
    if (index >= this.size) {
      throw NoSuchElementException_init();
    }return ensureNotNull(this.data_0.get_za3lpa$(index));
  };
  ConcurrentList.prototype.indexOf_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.size;
    for (var index = 0; index < tmp$; index++) {
      if (equals(this.data_0.get_za3lpa$(index), element)) {
        return index;
      }}
    return -1;
  };
  ConcurrentList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  ConcurrentList.prototype.lastIndexOf_11rb$ = function (element) {
    for (var index = this.size - 1 | 0; index >= 0; index--) {
      if (equals(this.data_0.get_za3lpa$(index), element)) {
        return index;
      }}
    return -1;
  };
  ConcurrentList.prototype.add_11rb$ = function (element) {
    if (this.size >= this.data_0.size) {
      this.increaseCapacity_0();
    }this.data_0.set_wxm5ur$(this.size, element);
    this.size = this.size + 1 | 0;
    return true;
  };
  ConcurrentList.prototype.add_wxm5ur$ = function (index, element) {
    this.reserve_0(index, 1);
    this.data_0.set_wxm5ur$(index, element);
  };
  ConcurrentList.prototype.addAll_u57x28$ = function (index, elements) {
    var tmp$;
    this.reserve_0(index, elements.size);
    var current = index;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      this.data_0.set_wxm5ur$(current, item);
      current = current + 1 | 0;
    }
    return !elements.isEmpty();
  };
  ConcurrentList.prototype.addAll_brywnq$ = function (elements) {
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        true;
        break all$break;
      }tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!this.add_11rb$(element)) {
          false;
          break all$break;
        }}
      true;
    }
     while (false);
    return !elements.isEmpty();
  };
  ConcurrentList.prototype.clear = function () {
    this.data_0 = new SharedList(32);
    this.size = 0;
  };
  ConcurrentList.prototype.iterator = function () {
    return this.listIterator();
  };
  ConcurrentList.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  function ConcurrentList$listIterator$ObjectLiteral(this$ConcurrentList, closure$index) {
    this.this$ConcurrentList = this$ConcurrentList;
    this.current_cc9gdq$_0 = new shared$ObjectLiteral(closure$index);
  }
  var ConcurrentList$listIterator$ObjectLiteral$current_metadata = new PropertyMetadata('current');
  Object.defineProperty(ConcurrentList$listIterator$ObjectLiteral.prototype, 'current', {configurable: true, get: function () {
    return this.current_cc9gdq$_0.getValue_lrcp0p$(this, ConcurrentList$listIterator$ObjectLiteral$current_metadata);
  }, set: function (current) {
    this.current_cc9gdq$_0.setValue_9rddgb$(this, ConcurrentList$listIterator$ObjectLiteral$current_metadata, current);
  }});
  ConcurrentList$listIterator$ObjectLiteral.prototype.hasNext = function () {
    return this.current < this.this$ConcurrentList.size;
  };
  ConcurrentList$listIterator$ObjectLiteral.prototype.next = function () {
    var tmp$;
    return this.this$ConcurrentList.get_za3lpa$((tmp$ = this.current, this.current = tmp$ + 1 | 0, tmp$));
  };
  ConcurrentList$listIterator$ObjectLiteral.prototype.remove = function () {
    this.this$ConcurrentList.removeAt_za3lpa$(this.current - 1 | 0);
    this.current = this.current - 1 | 0;
  };
  ConcurrentList$listIterator$ObjectLiteral.prototype.hasPrevious = function () {
    return this.current > 0;
  };
  ConcurrentList$listIterator$ObjectLiteral.prototype.nextIndex = function () {
    return this.current + 1 | 0;
  };
  ConcurrentList$listIterator$ObjectLiteral.prototype.previous = function () {
    var tmp$;
    return this.this$ConcurrentList.get_za3lpa$((tmp$ = this.current, this.current = tmp$ - 1 | 0, tmp$));
  };
  ConcurrentList$listIterator$ObjectLiteral.prototype.previousIndex = function () {
    return this.current - 1 | 0;
  };
  ConcurrentList$listIterator$ObjectLiteral.prototype.add_11rb$ = function (element) {
    this.this$ConcurrentList.add_wxm5ur$(this.current, element);
  };
  ConcurrentList$listIterator$ObjectLiteral.prototype.set_11rb$ = function (element) {
    this.this$ConcurrentList.set_wxm5ur$(this.current - 1 | 0, element);
  };
  ConcurrentList$listIterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableListIterator]};
  ConcurrentList.prototype.listIterator_za3lpa$ = function (index) {
    return new ConcurrentList$listIterator$ObjectLiteral(this, index);
  };
  ConcurrentList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new ConcurrentListSlice(this, fromIndex, toIndex);
  };
  ConcurrentList.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index < 0) {
      return false;
    }this.removeAt_za3lpa$(index);
    return true;
  };
  ConcurrentList.prototype.removeAll_brywnq$ = function (elements) {
    var result = {v: false};
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      result.v = this.remove_11rb$(element) || result.v;
    }
    return result.v;
  };
  ConcurrentList.prototype.removeAt_za3lpa$ = function (index) {
    this.checkIndex_0(index);
    var old = this.data_0.get_za3lpa$(index);
    this.data_0.set_wxm5ur$(index, null);
    this.sweep_0(index);
    return ensureNotNull(old);
  };
  ConcurrentList.prototype.retainAll_brywnq$ = function (elements) {
    var tmp$;
    var changed = false;
    var firstNull = -1;
    tmp$ = this.size;
    for (var index = 0; index < tmp$; index++) {
      var item = ensureNotNull(this.data_0.get_za3lpa$(index));
      if (!elements.contains_11rb$(item)) {
        changed = true;
        this.data_0.set_wxm5ur$(index, null);
        if (firstNull < 0) {
          firstNull = index;
        }}}
    if (changed) {
      this.sweep_0(firstNull);
    }return changed;
  };
  ConcurrentList.prototype.set_wxm5ur$ = function (index, element) {
    this.checkIndex_0(index);
    var old = this.data_0.get_za3lpa$(index);
    this.data_0.set_wxm5ur$(index, element);
    return old != null ? old : element;
  };
  ConcurrentList.prototype.checkIndex_0 = function (index) {
    if (index >= this.size || index < 0)
      throw IndexOutOfBoundsException_init();
  };
  ConcurrentList.prototype.increaseCapacity_0 = function (targetCapacity) {
    if (targetCapacity === void 0)
      targetCapacity = this.data_0.size * 2 | 0;
    var tmp$;
    var newData = new SharedList(targetCapacity);
    tmp$ = this.data_0.size;
    for (var index = 0; index < tmp$; index++) {
      newData.set_wxm5ur$(index, this.data_0.get_za3lpa$(index));
    }
    this.data_0 = newData;
  };
  ConcurrentList.prototype.sweep_0 = function (firstNull) {
    var tmp$, tmp$_0;
    var writePosition = firstNull;
    tmp$ = this.size;
    for (var index = writePosition + 1 | 0; index < tmp$; index++) {
      if (this.data_0.get_za3lpa$(index) == null) {
        continue;
      }this.data_0.set_wxm5ur$(writePosition, this.data_0.get_za3lpa$(index));
      writePosition = writePosition + 1 | 0;
    }
    tmp$_0 = this.size;
    for (var index_0 = writePosition; index_0 < tmp$_0; index_0++) {
      this.data_0.set_wxm5ur$(index_0, null);
    }
    this.size = writePosition;
  };
  ConcurrentList.prototype.reserve_0 = function (index, gapSize) {
    var tmp$;
    var targetSize = gapSize + this.size | 0;
    while (this.data_0.size < targetSize) {
      this.increaseCapacity_0();
    }
    var readPosition = this.size - 1 | 0;
    while (readPosition >= index) {
      this.data_0.set_wxm5ur$(readPosition + gapSize | 0, this.data_0.get_za3lpa$(readPosition));
      readPosition = readPosition - 1 | 0;
    }
    tmp$ = index + gapSize | 0;
    for (var current = index; current < tmp$; current++) {
      this.data_0.set_wxm5ur$(current, null);
    }
    this.size = this.size + gapSize | 0;
  };
  ConcurrentList.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConcurrentList', interfaces: [MutableList]};
  function shared$ObjectLiteral_0(closure$value) {
    this.value_0 = closure$value;
  }
  shared$ObjectLiteral_0.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.value_0;
  };
  shared$ObjectLiteral_0.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.value_0 = value;
  };
  shared$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [ReadWriteProperty]};
  var INITIAL_CAPACITY_0;
  var MAX_LOAD_FACTOR;
  var UPSIZE_RATIO;
  function ConcurrentMap(lock, initialCapacity) {
    if (lock === void 0)
      lock = new Lock();
    if (initialCapacity === void 0)
      initialCapacity = 32;
    this.lock_0 = lock;
    this.table_7ekke8$_0 = new shared$ObjectLiteral_0(new SharedList(initialCapacity));
    this.insertionOrder_w7s5d3$_0 = new shared$ObjectLiteral_0(new SharedForwardList());
    this._size_0 = 0;
    makeShared(this);
  }
  var ConcurrentMap$table_metadata = new PropertyMetadata('table');
  Object.defineProperty(ConcurrentMap.prototype, 'table_0', {configurable: true, get: function () {
    return this.table_7ekke8$_0.getValue_lrcp0p$(this, ConcurrentMap$table_metadata);
  }, set: function (table) {
    this.table_7ekke8$_0.setValue_9rddgb$(this, ConcurrentMap$table_metadata, table);
  }});
  var ConcurrentMap$insertionOrder_metadata = new PropertyMetadata('insertionOrder');
  Object.defineProperty(ConcurrentMap.prototype, 'insertionOrder_0', {configurable: true, get: function () {
    return this.insertionOrder_w7s5d3$_0.getValue_lrcp0p$(this, ConcurrentMap$insertionOrder_metadata);
  }, set: function (insertionOrder) {
    this.insertionOrder_w7s5d3$_0.setValue_9rddgb$(this, ConcurrentMap$insertionOrder_metadata, insertionOrder);
  }});
  Object.defineProperty(ConcurrentMap.prototype, 'loadFactor_0', {configurable: true, get: function () {
    return this._size_0 / this.table_0.size;
  }});
  Object.defineProperty(ConcurrentMap.prototype, 'size', {configurable: true, get: function () {
    return this._size_0;
  }});
  ConcurrentMap.prototype.containsKey_11rb$ = function (key) {
    return this.get_11rb$(key) != null;
  };
  function ConcurrentMap$containsValue$lambda(this$ConcurrentMap, closure$value) {
    return function () {
      var tmp$, tmp$_0;
      tmp$ = this$ConcurrentMap.table_0.iterator();
      while (tmp$.hasNext()) {
        var bucket = tmp$.next();
        if (bucket == null)
          continue;
        tmp$_0 = bucket.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          if (equals(item.value, closure$value)) {
            return true;
          }}
      }
      return false;
    };
  }
  ConcurrentMap.prototype.containsValue_11rc$ = function (value) {
    return this.locked_0(ConcurrentMap$containsValue$lambda(this, value));
  };
  function ConcurrentMap$get$lambda(closure$key, this$ConcurrentMap) {
    return function () {
      var tmp$;
      tmp$ = this$ConcurrentMap.findBucket_0(closure$key);
      if (tmp$ == null) {
        return null;
      }var bucket = tmp$;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_0;
        tmp$_0 = bucket.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          var closure$key_0 = closure$key;
          if (equals(element.key, closure$key_0)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      var item = firstOrNull$result;
      return item != null ? item.value : null;
    };
  }
  ConcurrentMap.prototype.get_11rb$ = function (key) {
    return this.locked_0(ConcurrentMap$get$lambda(key, this));
  };
  ConcurrentMap.prototype.isEmpty = function () {
    return this.size === 0;
  };
  function ConcurrentMap$clear$lambda(this$ConcurrentMap) {
    return function () {
      this$ConcurrentMap.table_0 = new SharedList(32);
      this$ConcurrentMap.insertionOrder_0 = new SharedForwardList();
      return Unit;
    };
  }
  ConcurrentMap.prototype.clear = function () {
    this.locked_0(ConcurrentMap$clear$lambda(this));
  };
  function ConcurrentMap$put$lambda(this$ConcurrentMap, closure$key, closure$value) {
    return function () {
      if (this$ConcurrentMap.loadFactor_0 > MAX_LOAD_FACTOR) {
        this$ConcurrentMap.upsize_0();
      }var bucket = this$ConcurrentMap.findOrCreateBucket_0(closure$key);
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = bucket.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          var closure$key_0 = closure$key;
          if (equals(element.key, closure$key_0)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      var item = firstOrNull$result;
      if (item != null) {
        var oldValue = item.value;
        item.value = closure$value;
        return oldValue;
      }var mapNode = new MapNode(closure$key, closure$value);
      var node = this$ConcurrentMap.insertionOrder_0.appendLast_trkh7z$(mapNode);
      mapNode.backReference_8be2vx$ = node;
      bucket.appendFirst_trkh7z$(mapNode);
      (function (scope) {
        return ++this$ConcurrentMap._size_0;
      }(this));
      return null;
    };
  }
  ConcurrentMap.prototype.put_xwzc9p$ = function (key, value) {
    return this.locked_0(ConcurrentMap$put$lambda(this, key, value));
  };
  ConcurrentMap.prototype.putAll_a2k3zr$ = function (from) {
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.key;
      var value = tmp$_0.value;
      this.put_xwzc9p$(key, value);
    }
  };
  function ConcurrentMap$remove$lambda(closure$key, this$ConcurrentMap) {
    return function () {
      var tmp$;
      tmp$ = this$ConcurrentMap.findBucket_0(closure$key);
      if (tmp$ == null) {
        return null;
      }var bucket = tmp$;
      var receiver = bucket.iterator();
      var closure$key_0 = closure$key;
      var this$ConcurrentMap_0 = this$ConcurrentMap;
      while (receiver.hasNext()) {
        var item = receiver.next();
        if (equals(item.key, closure$key_0)) {
          var result = item.value;
          (function (scope) {
            return --this$ConcurrentMap_0._size_0;
          }(this));
          item.remove_8be2vx$();
          receiver.remove();
          return result;
        }}
      return null;
    };
  }
  ConcurrentMap.prototype.remove_11rb$ = function (key) {
    return this.locked_0(ConcurrentMap$remove$lambda(key, this));
  };
  Object.defineProperty(ConcurrentMap.prototype, 'entries', {configurable: true, get: function () {
    return new MutableMapEntries(this);
  }});
  Object.defineProperty(ConcurrentMap.prototype, 'keys', {configurable: true, get: function () {
    return new ConcurrentMapKeys(this);
  }});
  Object.defineProperty(ConcurrentMap.prototype, 'values', {configurable: true, get: function () {
    return new ConcurrentMapValues(this);
  }});
  function ConcurrentMap$equals$lambda(closure$other, this$ConcurrentMap) {
    return function () {
      var tmp$;
      if (closure$other == null || !Kotlin.isType(closure$other, Map) || closure$other.size !== this$ConcurrentMap.size) {
        return false;
      }tmp$ = closure$other.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var key = tmp$_0.key;
        var value = tmp$_0.value;
        var $receiver = this$ConcurrentMap;
        var tmp$_1;
        if (!equals((Kotlin.isType(tmp$_1 = $receiver, Map) ? tmp$_1 : throwCCE()).get_11rb$(key), value)) {
          return false;
        }}
      return true;
    };
  }
  ConcurrentMap.prototype.equals = function (other) {
    return this.locked_0(ConcurrentMap$equals$lambda(other, this));
  };
  function ConcurrentMap$hashCode$lambda(this$ConcurrentMap) {
    return function () {
      var tmp$;
      var current = 7;
      tmp$ = this$ConcurrentMap.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var key = tmp$_0.key;
        var value = tmp$_0.value;
        current = Hash_getInstance().combine_jiburq$([hashCode(key), hashCode(value), current]);
      }
      return current;
    };
  }
  ConcurrentMap.prototype.hashCode = function () {
    return this.locked_0(ConcurrentMap$hashCode$lambda(this));
  };
  function ConcurrentMap$toString$lambda(this$ConcurrentMap) {
    return function () {
      var $receiver = StringBuilder_init();
      var this$ConcurrentMap_0 = this$ConcurrentMap;
      $receiver.append_pdl1vj$('{');
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = this$ConcurrentMap_0.entries.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
        var key = item.key;
        var value = item.value;
        $receiver.append_pdl1vj$(key.toString() + '=' + value);
        if (index_0 !== (this$ConcurrentMap_0.size - 1 | 0)) {
          $receiver.append_pdl1vj$(', ');
        }}
      $receiver.append_pdl1vj$('}');
      return $receiver.toString();
    };
  }
  ConcurrentMap.prototype.toString = function () {
    return this.locked_0(ConcurrentMap$toString$lambda(this));
  };
  function ConcurrentMap$iterator$ObjectLiteral(this$ConcurrentMap) {
    this.this$ConcurrentMap = this$ConcurrentMap;
    this.current_cx5bh6$_0 = new shared$ObjectLiteral_0(this$ConcurrentMap.insertionOrder_0.first());
    makeShared(this);
  }
  var ConcurrentMap$iterator$ObjectLiteral$current_metadata = new PropertyMetadata('current');
  Object.defineProperty(ConcurrentMap$iterator$ObjectLiteral.prototype, 'current_0', {configurable: true, get: function () {
    return this.current_cx5bh6$_0.getValue_lrcp0p$(this, ConcurrentMap$iterator$ObjectLiteral$current_metadata);
  }, set: function (current) {
    this.current_cx5bh6$_0.setValue_9rddgb$(this, ConcurrentMap$iterator$ObjectLiteral$current_metadata, current);
  }});
  Object.defineProperty(ConcurrentMap$iterator$ObjectLiteral.prototype, 'previous_0', {configurable: true, get: function () {
    var tmp$;
    return (tmp$ = this.current_0) != null ? tmp$.previous : null;
  }});
  ConcurrentMap$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.current_0 != null;
  };
  ConcurrentMap$iterator$ObjectLiteral.prototype.next = function () {
    var tmp$;
    var result = ensureNotNull(ensureNotNull(this.current_0).item);
    this.current_0 = (tmp$ = this.current_0) != null ? tmp$.next : null;
    return result;
  };
  ConcurrentMap$iterator$ObjectLiteral.prototype.remove = function () {
    var item = ensureNotNull(ensureNotNull(this.previous_0).item);
    this.this$ConcurrentMap.remove_11rb$(item.key);
  };
  ConcurrentMap$iterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableIterator]};
  ConcurrentMap.prototype.iterator_8be2vx$ = function () {
    return new ConcurrentMap$iterator$ObjectLiteral(this);
  };
  function ConcurrentMap$getOrDefault$lambda(closure$key, closure$block, this$ConcurrentMap) {
    return function () {
      return this$ConcurrentMap.computeIfAbsent_c5ybai$(closure$key, closure$block);
    };
  }
  ConcurrentMap.prototype.getOrDefault_c5ybai$ = function (key, block) {
    return this.locked_0(ConcurrentMap$getOrDefault$lambda(key, block, this));
  };
  function ConcurrentMap$computeIfAbsent$lambda(closure$key, this$ConcurrentMap, closure$block) {
    return function () {
      var value = this$ConcurrentMap.get_11rb$(closure$key);
      if (value != null) {
        return value;
      }var newValue = closure$block();
      this$ConcurrentMap.put_xwzc9p$(closure$key, newValue);
      return newValue;
    };
  }
  ConcurrentMap.prototype.computeIfAbsent_c5ybai$ = function (key, block) {
    return this.locked_0(ConcurrentMap$computeIfAbsent$lambda(key, this, block));
  };
  ConcurrentMap.prototype.findBucket_0 = function (key) {
    var bucketId = hashCode(key) & this.table_0.size - 1;
    return this.table_0.get_za3lpa$(bucketId);
  };
  ConcurrentMap.prototype.findOrCreateBucket_0 = function (key) {
    var bucketId = hashCode(key) & this.table_0.size - 1;
    var result = this.table_0.get_za3lpa$(bucketId);
    if (result == null) {
      var bucket = new SharedForwardList();
      this.table_0.set_wxm5ur$(bucketId, bucket);
      return bucket;
    }return result;
  };
  ConcurrentMap.prototype.upsize_0 = function () {
    var newTable = new ConcurrentMap(void 0, this.table_0.size * 2 | 0);
    newTable.putAll_a2k3zr$(this);
    this.table_0 = newTable.table_0;
  };
  function ConcurrentMap$locked$lambda(closure$block) {
    return function () {
      return closure$block();
    };
  }
  ConcurrentMap.prototype.locked_0 = function (block) {
    var $receiver = this.lock_0;
    var withLock$result;
    try {
      $receiver.lock();
      withLock$result = ConcurrentMap$locked$lambda(block)();
    }finally {
      $receiver.unlock();
    }
    return withLock$result;
  };
  ConcurrentMap.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConcurrentMap', interfaces: [MutableMap]};
  function ConcurrentListSlice(origin, fromIndex, toIndex) {
    AbstractMutableList.call(this);
    this.origin_0 = origin;
    this.fromIndex_0 = fromIndex;
    this.toIndex_0 = toIndex;
  }
  Object.defineProperty(ConcurrentListSlice.prototype, 'size', {configurable: true, get: function () {
    var a = this.origin_0.size;
    var b = this.toIndex_0 - this.fromIndex_0 | 0;
    return JsMath.min(a, b);
  }});
  ConcurrentListSlice.prototype.get_za3lpa$ = function (index) {
    return this.origin_0.get_za3lpa$(this.fromIndex_0 + index | 0);
  };
  ConcurrentListSlice.prototype.add_wxm5ur$ = function (index, element) {
    throw IllegalStateException_init('Unsupported append in ConcurrentList slice'.toString());
  };
  ConcurrentListSlice.prototype.removeAt_za3lpa$ = function (index) {
    throw IllegalStateException_init('Unsupported remove in ConcurrentList slice'.toString());
  };
  ConcurrentListSlice.prototype.set_wxm5ur$ = function (index, element) {
    return this.origin_0.set_wxm5ur$(this.fromIndex_0 + index | 0, element);
  };
  ConcurrentListSlice.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConcurrentListSlice', interfaces: [AbstractMutableList]};
  function ConcurrentMapKeys(delegate) {
    this.delegate_0 = delegate;
    makeShared(this);
  }
  ConcurrentMapKeys.prototype.add_11rb$ = function (element) {
    throw UnsupportedOperationException_init_0();
  };
  ConcurrentMapKeys.prototype.addAll_brywnq$ = function (elements) {
    throw UnsupportedOperationException_init_0();
  };
  ConcurrentMapKeys.prototype.clear = function () {
    this.delegate_0.clear();
  };
  function ConcurrentMapKeys$iterator$ObjectLiteral(this$ConcurrentMapKeys) {
    this.delegateIterator_0 = this$ConcurrentMapKeys.delegate_0.iterator_8be2vx$();
    makeShared(this);
  }
  ConcurrentMapKeys$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.delegateIterator_0.hasNext();
  };
  ConcurrentMapKeys$iterator$ObjectLiteral.prototype.next = function () {
    return this.delegateIterator_0.next().key;
  };
  ConcurrentMapKeys$iterator$ObjectLiteral.prototype.remove = function () {
    this.delegateIterator_0.remove();
  };
  ConcurrentMapKeys$iterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableIterator]};
  ConcurrentMapKeys.prototype.iterator = function () {
    return new ConcurrentMapKeys$iterator$ObjectLiteral(this);
  };
  ConcurrentMapKeys.prototype.remove_11rb$ = function (element) {
    return this.delegate_0.remove_11rb$(element) != null;
  };
  ConcurrentMapKeys.prototype.removeAll_brywnq$ = function (elements) {
    var modified = {v: false};
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      modified.v = this.remove_11rb$(element) || modified.v;
    }
    return modified.v;
  };
  ConcurrentMapKeys.prototype.retainAll_brywnq$ = function (elements) {
    var modified = {v: false};
    var $receiver = this.iterator();
    while ($receiver.hasNext()) {
      if (elements.contains_11rb$($receiver.next())) {
        continue;
      }modified.v = true;
      $receiver.remove();
    }
    return modified.v;
  };
  Object.defineProperty(ConcurrentMapKeys.prototype, 'size', {configurable: true, get: function () {
    return this.delegate_0.size;
  }});
  ConcurrentMapKeys.prototype.contains_11rb$ = function (element) {
    var $receiver = this.delegate_0;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(element);
  };
  ConcurrentMapKeys.prototype.containsAll_brywnq$ = function (elements) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        all$result = true;
        break all$break;
      }tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!this.contains_11rb$(element)) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  };
  ConcurrentMapKeys.prototype.isEmpty = function () {
    return this.size === 0;
  };
  ConcurrentMapKeys.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConcurrentMapKeys', interfaces: [MutableSet]};
  function ConcurrentMapValues(delegate) {
    this.delegate_0 = delegate;
    makeShared(this);
  }
  Object.defineProperty(ConcurrentMapValues.prototype, 'size', {configurable: true, get: function () {
    return this.delegate_0.size;
  }});
  ConcurrentMapValues.prototype.contains_11rb$ = function (element) {
    return this.delegate_0.containsValue_11rc$(element);
  };
  ConcurrentMapValues.prototype.containsAll_brywnq$ = function (elements) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        all$result = true;
        break all$break;
      }tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!this.contains_11rb$(element)) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  };
  ConcurrentMapValues.prototype.isEmpty = function () {
    return this.delegate_0.size === 0;
  };
  ConcurrentMapValues.prototype.add_11rb$ = function (element) {
    throw UnsupportedOperationException_init_0();
  };
  ConcurrentMapValues.prototype.addAll_brywnq$ = function (elements) {
    throw UnsupportedOperationException_init_0();
  };
  ConcurrentMapValues.prototype.clear = function () {
    this.delegate_0.clear();
  };
  function ConcurrentMapValues$iterator$ObjectLiteral(this$ConcurrentMapValues) {
    this.delegateIterator = this$ConcurrentMapValues.delegate_0.iterator_8be2vx$();
    makeShared(this);
  }
  ConcurrentMapValues$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.delegateIterator.hasNext();
  };
  ConcurrentMapValues$iterator$ObjectLiteral.prototype.next = function () {
    return this.delegateIterator.next().value;
  };
  ConcurrentMapValues$iterator$ObjectLiteral.prototype.remove = function () {
    this.delegateIterator.remove();
  };
  ConcurrentMapValues$iterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableIterator]};
  ConcurrentMapValues.prototype.iterator = function () {
    return new ConcurrentMapValues$iterator$ObjectLiteral(this);
  };
  ConcurrentMapValues.prototype.remove_11rb$ = function (element) {
    var modified = {v: false};
    var $receiver = this.iterator();
    while ($receiver.hasNext()) {
      if (equals($receiver.next(), element)) {
        continue;
      }modified.v = true;
      $receiver.remove();
    }
    return modified.v;
  };
  ConcurrentMapValues.prototype.removeAll_brywnq$ = function (elements) {
    var modified = {v: false};
    var $receiver = this.iterator();
    while ($receiver.hasNext()) {
      if (!elements.contains_11rb$($receiver.next())) {
        continue;
      }modified.v = true;
      $receiver.remove();
    }
    return modified.v;
  };
  ConcurrentMapValues.prototype.retainAll_brywnq$ = function (elements) {
    throw IllegalStateException_init("Common concurrent map doesn't support this operation yet.".toString());
  };
  ConcurrentMapValues.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConcurrentMapValues', interfaces: [MutableCollection]};
  function shared$ObjectLiteral_1(closure$value) {
    this.value_0 = closure$value;
  }
  shared$ObjectLiteral_1.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.value_0;
  };
  shared$ObjectLiteral_1.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.value_0 = value;
  };
  shared$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [ReadWriteProperty]};
  function ForwardListIterator(head) {
    this.previous_anlnpc$_0 = new shared$ObjectLiteral_1(head);
  }
  var ForwardListIterator$previous_metadata = new PropertyMetadata('previous');
  Object.defineProperty(ForwardListIterator.prototype, 'previous', {configurable: true, get: function () {
    return this.previous_anlnpc$_0.getValue_lrcp0p$(this, ForwardListIterator$previous_metadata);
  }, set: function (previous) {
    this.previous_anlnpc$_0.setValue_9rddgb$(this, ForwardListIterator$previous_metadata, previous);
  }});
  Object.defineProperty(ForwardListIterator.prototype, 'current', {configurable: true, get: function () {
    var tmp$;
    return (tmp$ = this.previous) != null ? tmp$.next : null;
  }});
  ForwardListIterator.prototype.hasNext = function () {
    var tmp$;
    return ((tmp$ = this.current) != null ? tmp$.item : null) != null;
  };
  ForwardListIterator.prototype.next = function () {
    var tmp$, tmp$_0;
    this.previous = this.current;
    tmp$_0 = (tmp$ = this.previous) != null ? tmp$.item : null;
    if (tmp$_0 == null) {
      throw NoSuchElementException_init();
    }return tmp$_0;
  };
  ForwardListIterator.prototype.remove = function () {
    var tmp$;
    if (((tmp$ = this.previous) != null ? (tmp$.remove(), Unit) : null) == null) {
      throw IllegalStateException_init('Fail to remove element before iteration'.toString());
    }};
  ForwardListIterator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ForwardListIterator', interfaces: [MutableIterator]};
  function shared$ObjectLiteral_2(closure$value) {
    this.value_0 = closure$value;
  }
  shared$ObjectLiteral_2.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.value_0;
  };
  shared$ObjectLiteral_2.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.value_0 = value;
  };
  shared$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [ReadWriteProperty]};
  function ForwardListNode(list, next, item, previous) {
    this.list_0 = list;
    this.item = item;
    this.next_lyuus8$_0 = new shared$ObjectLiteral_2(next);
    this.previous_mhuox8$_0 = new shared$ObjectLiteral_2(previous);
    makeShared(this);
  }
  var ForwardListNode$next_metadata = new PropertyMetadata('next');
  Object.defineProperty(ForwardListNode.prototype, 'next', {configurable: true, get: function () {
    return this.next_lyuus8$_0.getValue_lrcp0p$(this, ForwardListNode$next_metadata);
  }, set: function (next) {
    this.next_lyuus8$_0.setValue_9rddgb$(this, ForwardListNode$next_metadata, next);
  }});
  var ForwardListNode$previous_metadata = new PropertyMetadata('previous');
  Object.defineProperty(ForwardListNode.prototype, 'previous', {configurable: true, get: function () {
    return this.previous_mhuox8$_0.getValue_lrcp0p$(this, ForwardListNode$previous_metadata);
  }, set: function (previous) {
    this.previous_mhuox8$_0.setValue_9rddgb$(this, ForwardListNode$previous_metadata, previous);
  }});
  ForwardListNode.prototype.insertAfter_trkh7z$ = function (value) {
    var tmp$;
    var result = new ForwardListNode(this.list_0, this.next, value, this);
    (tmp$ = this.next) != null ? (tmp$.previous = result) : null;
    this.next = result;
    return result;
  };
  ForwardListNode.prototype.removeNext = function () {
    var tmp$, tmp$_0;
    if (equals(this.next, this.list_0.tail_8be2vx$)) {
      this.list_0.tail_8be2vx$ = this;
    }this.next = (tmp$ = this.next) != null ? tmp$.next : null;
    (tmp$_0 = this.next) != null ? (tmp$_0.previous = this) : null;
  };
  ForwardListNode.prototype.remove = function () {
    ensureNotNull(this.previous).removeNext();
  };
  ForwardListNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'ForwardListNode', interfaces: []};
  function shared$ObjectLiteral_3(closure$value) {
    this.value_0 = closure$value;
  }
  shared$ObjectLiteral_3.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.value_0;
  };
  shared$ObjectLiteral_3.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.value_0 = value;
  };
  shared$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [ReadWriteProperty]};
  function MapNode(key, value) {
    this.key_q49qr5$_0 = key;
    this.backReference_8be2vx$_ku6rvk$_0 = new shared$ObjectLiteral_3(null);
    this.value_v8fgin$_0 = new shared$ObjectLiteral_3(value);
    var $receiver = this.key;
    var tmp$;
    this.hash = (tmp$ = $receiver != null ? hashCode($receiver) : null) != null ? tmp$ : 0;
    makeShared(this);
  }
  Object.defineProperty(MapNode.prototype, 'key', {get: function () {
    return this.key_q49qr5$_0;
  }});
  var MapNode$backReference_metadata = new PropertyMetadata('backReference');
  Object.defineProperty(MapNode.prototype, 'backReference_8be2vx$', {configurable: true, get: function () {
    return this.backReference_8be2vx$_ku6rvk$_0.getValue_lrcp0p$(this, MapNode$backReference_metadata);
  }, set: function (backReference) {
    this.backReference_8be2vx$_ku6rvk$_0.setValue_9rddgb$(this, MapNode$backReference_metadata, backReference);
  }});
  var MapNode$value_metadata = new PropertyMetadata('value');
  Object.defineProperty(MapNode.prototype, 'value', {configurable: true, get: function () {
    return this.value_v8fgin$_0.getValue_lrcp0p$(this, MapNode$value_metadata);
  }, set: function (value) {
    this.value_v8fgin$_0.setValue_9rddgb$(this, MapNode$value_metadata, value);
  }});
  MapNode.prototype.setValue_11rc$ = function (newValue) {
    var result = this.value;
    this.value = newValue;
    return result;
  };
  MapNode.prototype.remove_8be2vx$ = function () {
    ensureNotNull(this.backReference_8be2vx$).remove();
    this.backReference_8be2vx$ = null;
  };
  MapNode.prototype.toString = function () {
    return 'MapItem[' + this.key + ', ' + this.value + ']';
  };
  MapNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'MapNode', interfaces: [MutableMap$MutableEntry]};
  function MutableMapEntries(delegate) {
    this.delegate_0 = delegate;
    makeShared(this);
  }
  MutableMapEntries.prototype.add_11rb$ = function (element) {
    return !equals(this.delegate_0.put_xwzc9p$(element.key, element.value), element.value);
  };
  MutableMapEntries.prototype.addAll_brywnq$ = function (elements) {
    var result = {v: false};
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      result.v = this.add_11rb$(element) || result.v;
    }
    return result.v;
  };
  MutableMapEntries.prototype.clear = function () {
    this.delegate_0.clear();
  };
  function MutableMapEntries$iterator$ObjectLiteral(this$MutableMapEntries) {
    this.origin_0 = this$MutableMapEntries.delegate_0.iterator_8be2vx$();
  }
  MutableMapEntries$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.origin_0.hasNext();
  };
  MutableMapEntries$iterator$ObjectLiteral.prototype.next = function () {
    return this.origin_0.next();
  };
  MutableMapEntries$iterator$ObjectLiteral.prototype.remove = function () {
    this.origin_0.remove();
  };
  MutableMapEntries$iterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableIterator]};
  MutableMapEntries.prototype.iterator = function () {
    return new MutableMapEntries$iterator$ObjectLiteral(this);
  };
  MutableMapEntries.prototype.remove_11rb$ = function (element) {
    return this.delegate_0.remove_11rb$(element.key) != null;
  };
  MutableMapEntries.prototype.removeAll_brywnq$ = function (elements) {
    var modified = {v: false};
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      modified.v = this.remove_11rb$(element) || modified.v;
    }
    return modified.v;
  };
  MutableMapEntries.prototype.retainAll_brywnq$ = function (elements) {
    var modified = {v: false};
    var $receiver = this.iterator();
    while ($receiver.hasNext()) {
      if (elements.contains_11rb$($receiver.next())) {
        continue;
      }modified.v = true;
      $receiver.remove();
    }
    return modified.v;
  };
  Object.defineProperty(MutableMapEntries.prototype, 'size', {configurable: true, get: function () {
    return this.delegate_0.size;
  }});
  MutableMapEntries.prototype.contains_11rb$ = function (element) {
    return equals(this.delegate_0.get_11rb$(element.key), element.value);
  };
  MutableMapEntries.prototype.containsAll_brywnq$ = function (elements) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        all$result = true;
        break all$break;
      }tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!this.contains_11rb$(element)) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  };
  MutableMapEntries.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  MutableMapEntries.$metadata$ = {kind: Kind_CLASS, simpleName: 'MutableMapEntries', interfaces: [MutableSet]};
  function shared$ObjectLiteral_4(closure$value) {
    this.value_0 = closure$value;
  }
  shared$ObjectLiteral_4.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.value_0;
  };
  shared$ObjectLiteral_4.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.value_0 = value;
  };
  shared$ObjectLiteral_4.$metadata$ = {kind: Kind_CLASS, interfaces: [ReadWriteProperty]};
  function SharedForwardList() {
    this.head_8be2vx$_7kv0go$_0 = new shared$ObjectLiteral_4(null);
    this.tail_8be2vx$_w7xtpk$_0 = new shared$ObjectLiteral_4(this.head_8be2vx$);
    makeShared(this);
    this.head_8be2vx$ = new ForwardListNode(this, null, null, null);
    this.tail_8be2vx$ = this.head_8be2vx$;
  }
  var SharedForwardList$head_metadata = new PropertyMetadata('head');
  Object.defineProperty(SharedForwardList.prototype, 'head_8be2vx$', {configurable: true, get: function () {
    return this.head_8be2vx$_7kv0go$_0.getValue_lrcp0p$(this, SharedForwardList$head_metadata);
  }, set: function (head) {
    this.head_8be2vx$_7kv0go$_0.setValue_9rddgb$(this, SharedForwardList$head_metadata, head);
  }});
  var SharedForwardList$tail_metadata = new PropertyMetadata('tail');
  Object.defineProperty(SharedForwardList.prototype, 'tail_8be2vx$', {configurable: true, get: function () {
    return this.tail_8be2vx$_w7xtpk$_0.getValue_lrcp0p$(this, SharedForwardList$tail_metadata);
  }, set: function (tail) {
    this.tail_8be2vx$_w7xtpk$_0.setValue_9rddgb$(this, SharedForwardList$tail_metadata, tail);
  }});
  SharedForwardList.prototype.first = function () {
    return ensureNotNull(this.head_8be2vx$).next;
  };
  SharedForwardList.prototype.last = function () {
    if (equals(this.head_8be2vx$, this.tail_8be2vx$)) {
      return null;
    }return this.tail_8be2vx$;
  };
  SharedForwardList.prototype.appendFirst_trkh7z$ = function (value) {
    var newValue = ensureNotNull(this.head_8be2vx$).insertAfter_trkh7z$(value);
    if (equals(this.head_8be2vx$, this.tail_8be2vx$)) {
      this.tail_8be2vx$ = newValue;
    }return newValue;
  };
  SharedForwardList.prototype.appendLast_trkh7z$ = function (value) {
    this.tail_8be2vx$ = ensureNotNull(this.tail_8be2vx$).insertAfter_trkh7z$(value);
    return ensureNotNull(this.tail_8be2vx$);
  };
  SharedForwardList.prototype.iterator = function () {
    return new ForwardListIterator(ensureNotNull(this.head_8be2vx$));
  };
  SharedForwardList.$metadata$ = {kind: Kind_CLASS, simpleName: 'SharedForwardList', interfaces: [MutableIterable]};
  function SharedList(size) {
    this.size_4if4fg$_0 = size;
    this.data_0 = Array(this.size);
    makeShared(this);
  }
  Object.defineProperty(SharedList.prototype, 'size', {get: function () {
    return this.size_4if4fg$_0;
  }});
  SharedList.prototype.set_wxm5ur$ = function (index, value) {
    this.data_0[index] = value;
  };
  SharedList.prototype.contains_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.size;
    for (var index = 0; index < tmp$; index++) {
      if (equals(this.data_0[index], element)) {
        return true;
      }}
    return false;
  };
  SharedList.prototype.containsAll_brywnq$ = function (elements) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        all$result = true;
        break all$break;
      }tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!this.contains_11rb$(element)) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  };
  SharedList.prototype.get_za3lpa$ = function (index) {
    return this.data_0[index];
  };
  SharedList.prototype.indexOf_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.size;
    for (var index = 0; index < tmp$; index++) {
      if (equals(this.data_0[index], element)) {
        return index;
      }}
    return -1;
  };
  SharedList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  SharedList.prototype.iterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  SharedList.prototype.lastIndexOf_11rb$ = function (element) {
    return asReversed(this).indexOf_11rb$(element);
  };
  SharedList.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  function SharedList$listIterator$ObjectLiteral(this$SharedList, closure$index) {
    this.this$SharedList = this$SharedList;
    this.currentIndex_0 = closure$index;
    makeShared(this);
  }
  SharedList$listIterator$ObjectLiteral.prototype.hasNext = function () {
    return this.currentIndex_0 < this.this$SharedList.size;
  };
  SharedList$listIterator$ObjectLiteral.prototype.hasPrevious = function () {
    return this.currentIndex_0 > 0;
  };
  SharedList$listIterator$ObjectLiteral.prototype.next = function () {
    if (!this.hasNext()) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var current = function (scope) {
      return scope.currentIndex_0++;
    }(this);
    return this.this$SharedList.data_0[current];
  };
  SharedList$listIterator$ObjectLiteral.prototype.nextIndex = function () {
    if (!this.hasNext()) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return this.currentIndex_0 + 1 | 0;
  };
  SharedList$listIterator$ObjectLiteral.prototype.previous = function () {
    if (!this.hasPrevious()) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var current = function (scope) {
      return scope.currentIndex_0--;
    }(this);
    return this.this$SharedList.data_0[current];
  };
  SharedList$listIterator$ObjectLiteral.prototype.previousIndex = function () {
    if (!this.hasPrevious()) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return this.currentIndex_0 - 1 | 0;
  };
  SharedList$listIterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ListIterator]};
  SharedList.prototype.listIterator_za3lpa$ = function (index) {
    return new SharedList$listIterator$ObjectLiteral(this, index);
  };
  SharedList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    var result = new SharedList(toIndex - fromIndex | 0);
    for (var index = fromIndex; index < toIndex; index++) {
      result.set_wxm5ur$(index - fromIndex | 0, this.data_0[index]);
    }
    return result;
  };
  SharedList.$metadata$ = {kind: Kind_CLASS, simpleName: 'SharedList', interfaces: [List]};
  var DefaultConversionService_instance = null;
  var WeekDay$MONDAY_instance;
  var WeekDay$TUESDAY_instance;
  var WeekDay$WEDNESDAY_instance;
  var WeekDay$THURSDAY_instance;
  var WeekDay$FRIDAY_instance;
  var WeekDay$SATURDAY_instance;
  var WeekDay$SUNDAY_instance;
  var WeekDay$Companion_instance = null;
  var Month$JANUARY_instance;
  var Month$FEBRUARY_instance;
  var Month$MARCH_instance;
  var Month$APRIL_instance;
  var Month$MAY_instance;
  var Month$JUNE_instance;
  var Month$JULY_instance;
  var Month$AUGUST_instance;
  var Month$SEPTEMBER_instance;
  var Month$OCTOBER_instance;
  var Month$NOVEMBER_instance;
  var Month$DECEMBER_instance;
  var Month$Companion_instance = null;
  var GMTDate$Companion_instance = null;
  var GMTDateParser$Companion_instance = null;
  var PhaseContent$interceptors_metadata = new PropertyMetadata('interceptors');
  var PhaseContent$shared_metadata = new PropertyMetadata('shared');
  var PhaseContent$Companion_instance = null;
  var Pipeline$interceptorsQuantity_metadata = new PropertyMetadata('interceptorsQuantity');
  var Pipeline$interceptorsListShared_metadata = new PropertyMetadata('interceptorsListShared');
  var Pipeline$interceptorsListSharedPhase_metadata = new PropertyMetadata('interceptorsListSharedPhase');
  defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.pipeline.execute_8vjjyp$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    return function ($receiver, context, continuation) {
      Kotlin.suspendCall($receiver.execute_8pmvt0$(context, Unit, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function PipelinePhase(name) {
    this.name = name;
  }
  PipelinePhase.prototype.toString = function () {
    return "Phase('" + this.name + "')";
  };
  PipelinePhase.$metadata$ = {kind: Kind_CLASS, simpleName: 'PipelinePhase', interfaces: []};
  var PipelinePhaseRelation$Last_instance = null;
  var StackWalkingFailed_instance = null;
  var StackWalkingFailedFrame_instance = null;
  function TypeInfo() {
  }
  TypeInfo.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'TypeInfo', interfaces: []};
  function TypeInfoImpl(type, reifiedType, kotlinType) {
    if (kotlinType === void 0)
      kotlinType = null;
    this.type_f1qwmb$_0 = type;
    this.reifiedType_cmhl4b$_0 = reifiedType;
    this.kotlinType_qb9q04$_0 = kotlinType;
  }
  Object.defineProperty(TypeInfoImpl.prototype, 'type', {get: function () {
    return this.type_f1qwmb$_0;
  }});
  Object.defineProperty(TypeInfoImpl.prototype, 'reifiedType', {get: function () {
    return this.reifiedType_cmhl4b$_0;
  }});
  Object.defineProperty(TypeInfoImpl.prototype, 'kotlinType', {get: function () {
    return this.kotlinType_qb9q04$_0;
  }});
  TypeInfoImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypeInfoImpl', interfaces: [TypeInfo]};
  TypeInfoImpl.prototype.component1 = function () {
    return this.type;
  };
  TypeInfoImpl.prototype.component2 = function () {
    return this.reifiedType;
  };
  TypeInfoImpl.prototype.component3 = function () {
    return this.kotlinType;
  };
  TypeInfoImpl.prototype.copy_yupgpq$ = function (type, reifiedType, kotlinType) {
    return new TypeInfoImpl(type === void 0 ? this.type : type, reifiedType === void 0 ? this.reifiedType : reifiedType, kotlinType === void 0 ? this.kotlinType : kotlinType);
  };
  TypeInfoImpl.prototype.toString = function () {
    return 'TypeInfoImpl(type=' + Kotlin.toString(this.type) + (', reifiedType=' + Kotlin.toString(this.reifiedType)) + (', kotlinType=' + Kotlin.toString(this.kotlinType)) + ')';
  };
  TypeInfoImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.reifiedType) | 0;
    result = result * 31 + Kotlin.hashCode(this.kotlinType) | 0;
    return result;
  };
  TypeInfoImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.reifiedType, other.reifiedType) && Kotlin.equals(this.kotlinType, other.kotlinType)))));
  };
  function Attributes_0(concurrent) {
    if (concurrent === void 0)
      concurrent = false;
    return new AttributesJs();
  }
  function AttributesJs() {
    this.map_0 = LinkedHashMap_init();
  }
  AttributesJs.prototype.getOrNull_yzaw86$ = function (key) {
    var tmp$;
    return (tmp$ = this.map_0.get_11rb$(key)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  AttributesJs.prototype.contains_w48dwb$ = function (key) {
    return this.map_0.containsKey_11rb$(key);
  };
  AttributesJs.prototype.put_uuntuo$ = function (key, value) {
    this.map_0.put_xwzc9p$(key, value);
  };
  AttributesJs.prototype.remove_yzaw86$ = function (key) {
    this.map_0.remove_11rb$(key);
  };
  AttributesJs.prototype.computeIfAbsent_u4q9l2$ = function (key, block) {
    var tmp$;
    if ((tmp$ = this.map_0.get_11rb$(key)) != null) {
      var tmp$_0;
      return Kotlin.isType(tmp$_0 = tmp$, Any) ? tmp$_0 : throwCCE();
    }var $receiver = block();
    this.map_0.put_xwzc9p$(key, $receiver);
    return $receiver;
  };
  Object.defineProperty(AttributesJs.prototype, 'allKeys', {configurable: true, get: function () {
    return toList_0(this.map_0.keys);
  }});
  AttributesJs.$metadata$ = {kind: Kind_CLASS, simpleName: 'AttributesJs', interfaces: [Attributes]};
  function unmodifiable($receiver) {
    return $receiver;
  }
  var NONCE_SIZE_IN_BYTES;
  function _crypto$lambda() {
    if (PlatformUtils_getInstance().IS_NODE) {
      return eval('require')('crypto');
    } else {
      return window.crypto ? window.crypto : window.msCrypto;
    }
  }
  var _crypto;
  function Lock() {
  }
  Lock.prototype.lock = function () {
  };
  Lock.prototype.unlock = function () {
  };
  Lock.prototype.close = function () {
  };
  Lock.$metadata$ = {kind: Kind_CLASS, simpleName: 'Lock', interfaces: []};
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp$, tmp$_0;
    this.IS_BROWSER = typeof (tmp$ = (typeof window !== 'undefined' && typeof window.document !== 'undefined')) === 'boolean' ? tmp$ : throwCCE();
    this.IS_NODE = typeof (tmp$_0 = (typeof process !== 'undefined' && process.versions != null && process.versions.node != null)) === 'boolean' ? tmp$_0 : throwCCE();
    this.IS_JVM = false;
    this.IS_NATIVE = false;
    this.IS_DEVELOPMENT_MODE = false;
  }
  PlatformUtils.$metadata$ = {kind: Kind_OBJECT, simpleName: 'PlatformUtils', interfaces: []};
  var PlatformUtils_instance = null;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance === null) {
      new PlatformUtils();
    }return PlatformUtils_instance;
  }
  function Type() {
  }
  Type.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Type', interfaces: []};
  function JsType() {
    JsType_instance = this;
  }
  JsType.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsType', interfaces: [Type]};
  var JsType_instance = null;
  function JsType_getInstance() {
    if (JsType_instance === null) {
      new JsType();
    }return JsType_instance;
  }
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfoImpl(kClass, reifiedType, kType);
  }
  function instanceOf($receiver, type) {
    return type.isInstance_s8jyv4$($receiver);
  }
  function get_platformType($receiver) {
    return JsType_getInstance();
  }
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$util = package$ktor.util || (package$ktor.util = {});
  package$util.AttributeKey = AttributeKey;
  package$util.Attributes = Attributes;
  package$util.putAll_orn3b7$ = putAll;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  package$util.CaseInsensitiveMap = CaseInsensitiveMap;
  package$util.isLowerCase_myv2d0$ = isLowerCase;
  package$util.toCharArray_pdl1vz$ = toCharArray;
  package$util.caseInsensitiveMap_287e2$ = caseInsensitiveMap;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$util.DelegatingMutableSet = DelegatingMutableSet;
  Object.defineProperty(package$util, 'Hash', {get: Hash_getInstance});
  Object.defineProperty(StringValues, 'Companion', {get: StringValues$Companion_getInstance});
  package$util.StringValues = StringValues;
  package$util.StringValuesSingleImpl = StringValuesSingleImpl;
  package$util.StringValuesImpl = StringValuesImpl;
  package$util.StringValuesBuilder = StringValuesBuilder;
  package$util.flattenEntries_vr6bp2$ = flattenEntries;
  package$util.appendAll_k10e8h$ = appendAll;
  package$util.toLowerCasePreservingASCIIRules_pdl1vz$ = toLowerCasePreservingASCIIRules;
  package$util.caseInsensitive_7efafi$ = caseInsensitive;
  package$util.CaseInsensitiveString = CaseInsensitiveString;
  var package$collections = package$util.collections || (package$util.collections = {});
  package$collections.ConcurrentList = ConcurrentList;
  package$collections.ConcurrentMap = ConcurrentMap;
  var package$internal = package$collections.internal || (package$collections.internal = {});
  package$internal.ConcurrentListSlice = ConcurrentListSlice;
  package$internal.ConcurrentMapKeys = ConcurrentMapKeys;
  package$internal.ConcurrentMapValues = ConcurrentMapValues;
  package$internal.ForwardListIterator = ForwardListIterator;
  package$internal.ForwardListNode = ForwardListNode;
  package$internal.MapNode = MapNode;
  package$internal.MutableMapEntries = MutableMapEntries;
  package$internal.SharedForwardList = SharedForwardList;
  package$internal.SharedList = SharedList;
  var package$pipeline = package$util.pipeline || (package$util.pipeline = {});
  package$pipeline.PipelinePhase = PipelinePhase;
  var package$reflect = package$util.reflect || (package$util.reflect = {});
  package$reflect.TypeInfo = TypeInfo;
  package$reflect.TypeInfoImpl = TypeInfoImpl;
  package$util.AttributesJsFn = Attributes_0;
  package$util.AttributesJs = AttributesJs;
  package$util.unmodifiable_cgavii$ = unmodifiable;
  package$util.Lock = Lock;
  Object.defineProperty(package$util, 'PlatformUtils', {get: PlatformUtils_getInstance});
  package$reflect.Type = Type;
  Object.defineProperty(package$reflect, 'JsType', {get: JsType_getInstance});
  package$reflect.typeInfoImpl_1lvkm8$ = typeInfoImpl;
  package$reflect.instanceOf_lgjw4r$ = instanceOf;
  package$reflect.get_platformType_7v1px$ = get_platformType;
  AttributesJs.prototype.get_yzaw86$ = Attributes.prototype.get_yzaw86$;
  AttributesJs.prototype.take_yzaw86$ = Attributes.prototype.take_yzaw86$;
  AttributesJs.prototype.takeOrNull_yzaw86$ = Attributes.prototype.takeOrNull_yzaw86$;
  BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  BASE64_MASK = 63;
  BASE64_PAD = 61;
  var array = new Int32Array(256);
  var tmp$;
  tmp$ = array.length - 1 | 0;
  for (var i = 0; i <= tmp$; i++) {
    array[i] = indexOf(BASE64_ALPHABET, toChar(i));
  }
  BASE64_INVERSE_ALPHABET = array;
  digits = toCharArray('0123456789abcdef');
  INITIAL_CAPACITY = 32;
  INITIAL_CAPACITY_0 = 32;
  MAX_LOAD_FACTOR = 0.5;
  UPSIZE_RATIO = 2;
  NONCE_SIZE_IN_BYTES = 8;
  _crypto = lazy(_crypto$lambda);
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils-js-legacy.js.map
