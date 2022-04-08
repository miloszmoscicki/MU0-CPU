(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-http-js-legacy', 'ktor-ktor-io-js-legacy', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-io-js-legacy'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-http-cio-js-legacy'.");
    }if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-http-cio-js-legacy'.");
    }if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-http-cio-js-legacy'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-http-cio-js-legacy'.");
    }root['ktor-ktor-http-cio-js-legacy'] = factory(typeof this['ktor-ktor-http-cio-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-http-cio-js-legacy'], kotlin, this['ktor-ktor-http-js-legacy'], this['ktor-ktor-io-js-legacy'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_io_js_legacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var LazyThreadSafetyMode = Kotlin.kotlin.LazyThreadSafetyMode;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_ww73n8$;
  var lazy = Kotlin.kotlin.lazy_kls4a0$;
  var Headers = $module$ktor_ktor_http_js_legacy.io.ktor.http.Headers;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var DefaultPool = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.pool.DefaultPool;
  var L_1 = Kotlin.Long.NEG_ONE;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var writer = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.writer_x9a1ni$;
  var L0 = Kotlin.Long.ZERO;
  var EOFException = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.errors.EOFException;
  var copyTo = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.copyTo_47ygvz$;
  var equals = Kotlin.equals;
  var Throwable = Error;
  var close = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.close_x5qia6$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var writeFully = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.writeFully_4scpqu$;
  var ByteChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteChannel;
  var requestBuffer = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.requestBuffer_78elpf$;
  var Buffer = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.Buffer;
  var completeReadingFromBuffer = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.completeReadingFromBuffer_6msh3s$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var encodeToByteArray = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var singleOrNull = Kotlin.kotlin.collections.singleOrNull_2p1efm$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var joinTo = Kotlin.kotlin.collections.joinTo_gcc71v$;
  var throwCCE = Kotlin.throwCCE;
  var hashCode = Kotlin.hashCode;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init;
  var HttpMethod = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpMethod;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var unboxChar = Kotlin.unboxChar;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var Closeable = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.Closeable;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var Array_0 = Array;
  var Collection = Kotlin.kotlin.collections.Collection;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var CharSequence = Kotlin.kotlin.CharSequence;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var Appendable = Kotlin.kotlin.text.Appendable;
  var JsMath = Math;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var L48 = Kotlin.Long.fromInt(48);
  var L97 = Kotlin.Long.fromInt(97);
  var L102 = Kotlin.Long.fromInt(102);
  var L65 = Kotlin.Long.fromInt(65);
  var L70 = Kotlin.Long.fromInt(70);
  var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
  var toByte = Kotlin.toByte;
  var toChar = Kotlin.toChar;
  var toByteArray = Kotlin.kotlin.collections.toByteArray_kdx1v$;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var writeFully_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeFully_i6snlg$;
  var decode = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.decode_lb8wo3$;
  var readShort = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readShort_7wsnj1$;
  var DisposableHandle = $module$kotlinx_coroutines_core.kotlinx.coroutines.DisposableHandle;
  var BytePacketBuilder = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.BytePacketBuilder_za3lpa$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Annotation = Kotlin.kotlin.Annotation;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var CancellationException = Kotlin.kotlin.coroutines.cancellation.CancellationException;
  var writeText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeText_t153jy$;
  var readBytes = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readBytes_xc9h3n$;
  var writeShort = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeShort_9kfkzl$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  ChunkSizeBufferPool$ObjectLiteral.prototype = Object.create(DefaultPool.prototype);
  ChunkSizeBufferPool$ObjectLiteral.prototype.constructor = ChunkSizeBufferPool$ObjectLiteral;
  IntArrayPool$ObjectLiteral.prototype = Object.create(DefaultPool.prototype);
  IntArrayPool$ObjectLiteral.prototype.constructor = IntArrayPool$ObjectLiteral;
  CharArrayPool$ObjectLiteral.prototype = Object.create(DefaultPool.prototype);
  CharArrayPool$ObjectLiteral.prototype.constructor = CharArrayPool$ObjectLiteral;
  function CIOHeaders(headers) {
    this.headers_0 = headers;
    this.names_pj02dq$_0 = lazy(LazyThreadSafetyMode.NONE, CIOHeaders$names$lambda(this));
  }
  var MAX_CHUNK_SIZE_LENGTH;
  var CHUNK_BUFFER_POOL_SIZE;
  var DEFAULT_BYTE_BUFFER_SIZE;
  function ChunkSizeBufferPool$ObjectLiteral(capacity) {
    DefaultPool.call(this, capacity);
  }
  ChunkSizeBufferPool$ObjectLiteral.prototype.produceInstance = function () {
    return StringBuilder_init(128);
  };
  ChunkSizeBufferPool$ObjectLiteral.prototype.clearInstance_trkh7z$ = function (instance) {
    instance.clear();
    return instance;
  };
  ChunkSizeBufferPool$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [DefaultPool]};
  var ChunkSizeBufferPool;
  var CrLfShort;
  var CrLf;
  var LastChunkBytes;
  var ConnectionOptions$Companion_instance = null;
  var EXPECTED_HEADERS_QTY;
  var HEADER_SIZE;
  var HEADER_ARRAY_POOL_SIZE;
  var EMPTY_INT_ARRAY;
  function IntArrayPool$ObjectLiteral(capacity) {
    DefaultPool.call(this, capacity);
  }
  IntArrayPool$ObjectLiteral.prototype.produceInstance = function () {
    return new Int32Array(512);
  };
  IntArrayPool$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [DefaultPool]};
  var IntArrayPool;
  var HTTP_LINE_LIMIT;
  var HTTP_STATUS_CODE_MIN_RANGE;
  var HTTP_STATUS_CODE_MAX_RANGE;
  var hostForbiddenSymbols;
  var versions;
  var SP;
  var CR;
  var LF;
  function AsciiCharTree(root) {
    AsciiCharTree$Companion_getInstance();
    this.root = root;
  }
  function AsciiCharTree$Node(ch, exact, children) {
    this.ch = toBoxedChar(ch);
    this.exact = exact;
    this.children = children;
    var array = Array_0(256);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    loop_label: for (var i = 0; i <= tmp$; i++) {
      var $receiver = this.children;
      var singleOrNull$result;
      singleOrNull$break: do {
        var tmp$_0;
        var single = null;
        var found = false;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if ((unboxChar(element.ch) | 0) === i) {
            if (found) {
              singleOrNull$result = null;
              break singleOrNull$break;
            }single = element;
            found = true;
          }}
        if (!found) {
          singleOrNull$result = null;
          break singleOrNull$break;
        }singleOrNull$result = single;
      }
       while (false);
      array[i] = singleOrNull$result;
    }
    this.array = array;
  }
  AsciiCharTree$Node.$metadata$ = {kind: Kind_CLASS, simpleName: 'Node', interfaces: []};
  AsciiCharTree.prototype.search_5wmzmj$ = function (sequence, fromIdx, end, lowerCase, stopPredicate) {
    if (fromIdx === void 0)
      fromIdx = 0;
    if (end === void 0)
      end = sequence.length;
    if (lowerCase === void 0)
      lowerCase = false;
    var tmp$, tmp$_0;
    if (sequence.length === 0)
      throw IllegalArgumentException_init("Couldn't search in char tree for empty string");
    var node = this.root;
    for (var index = fromIdx; index < end; index++) {
      var current = sequence.charCodeAt(index);
      var currentCode = current | 0;
      if (stopPredicate(toBoxedChar(current), currentCode))
        break;
      tmp$_0 = (tmp$ = node.array[currentCode]) != null ? tmp$ : lowerCase ? node.array[String.fromCharCode(current).toLowerCase().charCodeAt(0) | 0] : null;
      if (tmp$_0 == null) {
        return emptyList();
      }var nextNode = tmp$_0;
      node = nextNode;
    }
    return node.exact;
  };
  function AsciiCharTree$Companion() {
    AsciiCharTree$Companion_instance = this;
  }
  function AsciiCharTree$Companion$build$lambda(it) {
    return it.length;
  }
  function AsciiCharTree$Companion$build$lambda_0(s, idx) {
    return toBoxedChar(s.charCodeAt(idx));
  }
  AsciiCharTree$Companion.prototype.build_mowv1r$ = function (from) {
    return this.build_za6fmz$(from, AsciiCharTree$Companion$build$lambda, AsciiCharTree$Companion$build$lambda_0);
  };
  AsciiCharTree$Companion.prototype.build_za6fmz$ = function (from, length, charAt) {
    var tmp$, tmp$_0;
    var maxByOrNull$result;
    maxByOrNull$break: do {
      var iterator = from.iterator();
      if (!iterator.hasNext()) {
        maxByOrNull$result = null;
        break maxByOrNull$break;
      }var maxElem = iterator.next();
      if (!iterator.hasNext()) {
        maxByOrNull$result = maxElem;
        break maxByOrNull$break;
      }var maxValue = length(maxElem);
      do {
        var e = iterator.next();
        var v = length(e);
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }}
       while (iterator.hasNext());
      maxByOrNull$result = maxElem;
    }
     while (false);
    tmp$_0 = (tmp$ = maxByOrNull$result) != null ? length(tmp$) : null;
    if (tmp$_0 == null) {
      throw new NoSuchElementException('Unable to build char tree from an empty list');
    }var maxLen = tmp$_0;
    var any$result;
    any$break: do {
      var tmp$_1;
      if (Kotlin.isType(from, Collection) && from.isEmpty()) {
        any$result = false;
        break any$break;
      }tmp$_1 = from.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (length(element) === 0) {
          any$result = true;
          break any$break;
        }}
      any$result = false;
    }
     while (false);
    if (any$result)
      throw IllegalArgumentException_init('There should be no empty entries');
    var root = ArrayList_init_0();
    this.build_0(root, from, maxLen, 0, length, charAt);
    root.trimToSize();
    return new AsciiCharTree(new AsciiCharTree$Node(0, emptyList(), root));
  };
  AsciiCharTree$Companion.prototype.build_0 = function (resultList, from, maxLength, idx, length, charAt) {
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = from.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = charAt(element, idx);
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      } else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var tmp$_1;
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var ch = unboxChar(element_0.key);
      var list_0 = element_0.value;
      var nextIdx = idx + 1 | 0;
      var children = ArrayList_init_0();
      var destination_0 = ArrayList_init_0();
      var tmp$_2;
      tmp$_2 = list_0.iterator();
      while (tmp$_2.hasNext()) {
        var element_1 = tmp$_2.next();
        if (length(element_1) > nextIdx)
          destination_0.add_11rb$(element_1);
      }
      this.build_0(children, destination_0, maxLength, nextIdx, length, charAt);
      children.trimToSize();
      var destination_1 = ArrayList_init_0();
      var tmp$_3;
      tmp$_3 = list_0.iterator();
      while (tmp$_3.hasNext()) {
        var element_2 = tmp$_3.next();
        if (length(element_2) === nextIdx)
          destination_1.add_11rb$(element_2);
      }
      resultList.add_11rb$(new AsciiCharTree$Node(ch, destination_1, children));
    }
  };
  AsciiCharTree$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var AsciiCharTree$Companion_instance = null;
  function AsciiCharTree$Companion_getInstance() {
    if (AsciiCharTree$Companion_instance === null) {
      new AsciiCharTree$Companion();
    }return AsciiCharTree$Companion_instance;
  }
  AsciiCharTree.$metadata$ = {kind: Kind_CLASS, simpleName: 'AsciiCharTree', interfaces: []};
  var CHAR_ARRAY_POOL_SIZE;
  var CHAR_BUFFER_ARRAY_LENGTH;
  function CharArrayPool$ObjectLiteral(capacity) {
    DefaultPool.call(this, capacity);
  }
  CharArrayPool$ObjectLiteral.prototype.produceInstance = function () {
    return Kotlin.charArray(2048);
  };
  CharArrayPool$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [DefaultPool]};
  var CharArrayPool;
  var HTAB;
  function DefaultHttpMethods$lambda(it) {
    return it.value.length;
  }
  function DefaultHttpMethods$lambda_0(m, idx) {
    return toBoxedChar(m.value.charCodeAt(idx));
  }
  var DefaultHttpMethods;
  var HexTable;
  var HexLetterTable;
  var CloseReason$Codes$NORMAL_instance;
  var CloseReason$Codes$GOING_AWAY_instance;
  var CloseReason$Codes$PROTOCOL_ERROR_instance;
  var CloseReason$Codes$CANNOT_ACCEPT_instance;
  var CloseReason$Codes$CLOSED_ABNORMALLY_instance;
  var CloseReason$Codes$NOT_CONSISTENT_instance;
  var CloseReason$Codes$VIOLATED_POLICY_instance;
  var CloseReason$Codes$TOO_BIG_instance;
  var CloseReason$Codes$NO_EXTENSION_instance;
  var CloseReason$Codes$INTERNAL_ERROR_instance;
  var CloseReason$Codes$SERVICE_RESTART_instance;
  var CloseReason$Codes$TRY_AGAIN_LATER_instance;
  var CloseReason$Codes$Companion_instance = null;
  var NonDisposableHandle_instance = null;
  var FrameType$TEXT_instance;
  var FrameType$BINARY_instance;
  var FrameType$CLOSE_instance;
  var FrameType$PING_instance;
  var FrameType$PONG_instance;
  var FrameType$Companion_instance = null;
  var SP_0;
  var CR_0;
  var LF_0;
  var Frame$Companion_instance = null;
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$http = package$ktor.http || (package$ktor.http = {});
  var package$cio = package$http.cio || (package$http.cio = {});
  package$cio.CIOHeaders = CIOHeaders;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  AsciiCharTree.Node = AsciiCharTree$Node;
  Object.defineProperty(AsciiCharTree, 'Companion', {get: AsciiCharTree$Companion_getInstance});
  var package$internals = package$cio.internals || (package$cio.internals = {});
  package$internals.AsciiCharTree = AsciiCharTree;
  CIOHeaders.prototype.contains_61zpoe$ = Headers.prototype.contains_61zpoe$;
  CIOHeaders.prototype.contains_puj7f4$ = Headers.prototype.contains_puj7f4$;
  CIOHeaders.prototype.forEach_ubvtmq$ = Headers.prototype.forEach_ubvtmq$;
  MAX_CHUNK_SIZE_LENGTH = 128;
  CHUNK_BUFFER_POOL_SIZE = 2048;
  DEFAULT_BYTE_BUFFER_SIZE = 4088;
  ChunkSizeBufferPool = new ChunkSizeBufferPool$ObjectLiteral(2048);
  CrLfShort = 3338;
  CrLf = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), '\r\n', 0, '\r\n'.length);
  var $receiver = '0\r\n\r\n';
  LastChunkBytes = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length);
  EXPECTED_HEADERS_QTY = 64;
  HEADER_SIZE = 8;
  HEADER_ARRAY_POOL_SIZE = 1000;
  EMPTY_INT_ARRAY = new Int32Array(0);
  IntArrayPool = new IntArrayPool$ObjectLiteral(1000);
  HTTP_LINE_LIMIT = 8192;
  HTTP_STATUS_CODE_MIN_RANGE = 100;
  HTTP_STATUS_CODE_MAX_RANGE = 999;
  hostForbiddenSymbols = setOf([toBoxedChar(47), toBoxedChar(63), toBoxedChar(35), toBoxedChar(64)]);
  versions = AsciiCharTree$Companion_getInstance().build_mowv1r$(listOf_0(['HTTP/1.0', 'HTTP/1.1']));
  SP = 32;
  CR = 13;
  LF = 10;
  CHAR_ARRAY_POOL_SIZE = 4096;
  CHAR_BUFFER_ARRAY_LENGTH = 2048;
  CharArrayPool = new CharArrayPool$ObjectLiteral(4096);
  HTAB = 9;
  DefaultHttpMethods = AsciiCharTree$Companion_getInstance().build_za6fmz$(HttpMethod.Companion.DefaultMethods, DefaultHttpMethods$lambda, DefaultHttpMethods$lambda_0);
  var $receiver_0 = new IntRange(0, 255);
  var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
  var tmp$;
  tmp$ = $receiver_0.iterator();
  while (tmp$.hasNext()) {
    var item = tmp$.next();
    var tmp$_0 = destination.add_11rb$;
    var transform$result;
    if (48 <= item && item <= 57) {
      transform$result = Kotlin.Long.fromInt(item).subtract(L48);
    } else if (item >= L97.toNumber() && item <= L102.toNumber()) {
      transform$result = Kotlin.Long.fromInt(item).subtract(L97).add(Kotlin.Long.fromInt(10));
    } else if (item >= L65.toNumber() && item <= L70.toNumber()) {
      transform$result = Kotlin.Long.fromInt(item).subtract(L65).add(Kotlin.Long.fromInt(10));
    } else {
      transform$result = L_1;
    }
    tmp$_0.call(destination, transform$result);
  }
  HexTable = toLongArray(destination);
  var $receiver_1 = new IntRange(0, 15);
  var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
  var tmp$_1;
  tmp$_1 = $receiver_1.iterator();
  while (tmp$_1.hasNext()) {
    var item_0 = tmp$_1.next();
    destination_0.add_11rb$(item_0 < 10 ? toByte(48 + item_0 | 0) : toByte(toChar(toChar(97 + item_0) - 10) | 0));
  }
  HexLetterTable = toByteArray(destination_0);
  SP_0 = 32;
  CR_0 = 13;
  LF_0 = 10;
  return _;
}));

//# sourceMappingURL=ktor-ktor-http-cio-js-legacy.js.map
