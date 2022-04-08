(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-http-js-legacy', 'ktor-ktor-client-core-js-legacy', 'ktor-ktor-io-js-legacy', 'ktor-ktor-utils-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-client-core-js-legacy'), require('ktor-ktor-io-js-legacy'), require('ktor-ktor-utils-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }if (typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-client-core-js-legacy' was not found. Please, check whether 'ktor-ktor-client-core-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }root['ktor-ktor-client-json-js-legacy'] = factory(typeof this['ktor-ktor-client-json-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-json-js-legacy'], kotlin, this['ktor-ktor-http-js-legacy'], this['ktor-ktor-client-core-js-legacy'], this['ktor-ktor-io-js-legacy'], this['ktor-ktor-utils-js-legacy']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_client_core_js_legacy, $module$ktor_ktor_io_js_legacy, $module$ktor_ktor_utils_js_legacy) {
  'use strict';
  var ContentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentType;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var HttpRequestPipeline = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.HttpRequestPipeline;
  var Unit = Kotlin.kotlin.Unit;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var utils = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.utils;
  var equals = Kotlin.equals;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var ByteReadChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteReadChannel;
  var readRemaining = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.readRemaining_3dmw3p$;
  var HttpResponseContainer = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpResponseContainer;
  var AttributeKey = $module$ktor_ktor_utils_js_legacy.io.ktor.util.AttributeKey;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var HttpClientFeature = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.features.HttpClientFeature;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var TypeInfo = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.TypeInfo;
  var throwCCE = Kotlin.throwCCE;
  var TypeInfo_0 = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.call.TypeInfo;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function JsonFeature$Feature() {
    JsonFeature$Feature_instance = this;
    this.key_nhnsxd$_0 = new AttributeKey('Json');
  }
  var JsonFeature$Feature_instance = null;
  function JsonSerializer() {
  }
  JsonSerializer.prototype.write_za3rmp$ = function (data) {
    return this.write_ydd6c4$(data, ContentType.Application.Json);
  };
  JsonSerializer.prototype.read_2ktxo1$ = function (type, body) {
    var tmp$;
    return this.read_slinh1$(Kotlin.isType(tmp$ = type, TypeInfo) ? tmp$ : throwCCE(), body);
  };
  JsonSerializer.prototype.read_slinh1$ = function (type, body) {
    return this.read_2ktxo1$(new TypeInfo_0(type.type, type.reifiedType, type.kotlinType), body);
  };
  JsonSerializer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'JsonSerializer', interfaces: []};
  var serializersStore;
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$features = package$client.features || (package$client.features = {});
  var package$json = package$features.json || (package$features.json = {});
  package$json.JsonSerializer = JsonSerializer;
  Object.defineProperty(package$json, 'serializersStore', {get: function () {
    return serializersStore;
  }});
  JsonFeature$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  serializersStore = ArrayList_init();
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-json-js-legacy.js.map
