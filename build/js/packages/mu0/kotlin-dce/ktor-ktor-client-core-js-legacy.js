(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'ktor-ktor-utils-js-legacy', 'ktor-ktor-io-js-legacy', 'ktor-ktor-http-js-legacy', 'ktor-ktor-http-cio-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('ktor-ktor-utils-js-legacy'), require('ktor-ktor-io-js-legacy'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-http-cio-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }if (false) {
    }if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }if (typeof this['ktor-ktor-http-cio-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'ktor-ktor-http-cio-js-legacy' was not found. Please, check whether 'ktor-ktor-http-cio-js-legacy' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }root['ktor-ktor-client-core-js-legacy'] = factory(typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-core-js-legacy'], kotlin, this['kotlinx-coroutines-core'], this['ktor-ktor-utils-js-legacy'], this['ktor-ktor-io-js-legacy'], this['ktor-ktor-http-js-legacy'], this['ktor-ktor-http-cio-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core, $module$ktor_ktor_utils_js_legacy, $module$ktor_ktor_io_js_legacy, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_http_cio_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job;
  var ensureNotNull = Kotlin.ensureNotNull;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var throwCCE = Kotlin.throwCCE;
  var AttributeKey = $module$ktor_ktor_utils_js_legacy.io.ktor.util.AttributeKey;
  var Closeable = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.Closeable;
  var Job_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var Attributes = $module$ktor_ktor_utils_js_legacy.io.ktor.util.AttributesJsFn;
  var cancel = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancel_q2ti5d$;
  var makeShared = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.makeShared_s8jyvk$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Any = Object;
  var util = $module$ktor_ktor_utils_js_legacy.io.ktor.util;
  var Annotation = Kotlin.kotlin.Annotation;
  var ByteReadChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteReadChannel;
  var throwUPAE = Kotlin.throwUPAE;
  var TypeInfo = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.TypeInfo;
  var cancel_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancel_n4wjt3$;
  var Throwable = Error;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var threadLocal = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.concurrent.threadLocal_issdgt$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var IllegalStateException_init_0 = Kotlin.kotlin.IllegalStateException_init;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init;
  var flattenEntries = $module$ktor_ktor_utils_js_legacy.io.ktor.util.flattenEntries_vr6bp2$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
  var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
  var getKClass = Kotlin.getKClass;
  var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
  var ByteReadChannel_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteReadChannel_fqrh44$;
  var readRemaining = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.readRemaining_3dmw3p$;
  var readBytes = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readBytes_xc9h3n$;
  var instanceOf = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.instanceOf_lgjw4r$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var OutgoingContent$ReadChannelContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.ReadChannelContent;
  var OutgoingContent$ByteArrayContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.ByteArrayContent;
  var OutgoingContent$ProtocolUpgrade = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.ProtocolUpgrade;
  var OutgoingContent$NoContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.NoContent;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var writer = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.writer_x9a1ni$;
  var OutgoingContent$WriteChannelContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.WriteChannelContent;
  var CoroutineName = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineName;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var CompletableJob = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableJob;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var equals = Kotlin.equals;
  var CoroutineContext$Key = Kotlin.kotlin.coroutines.CoroutineContext.Key;
  var CoroutineContext$Element = Kotlin.kotlin.coroutines.CoroutineContext.Element;
  var CancellationException_init = Kotlin.kotlin.coroutines.cancellation.CancellationException_init_pdl1vj$;
  var PipelinePhase = $module$ktor_ktor_utils_js_legacy.io.ktor.util.pipeline.PipelinePhase;
  var OutgoingContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent;
  var ContentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentType;
  var TextContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.TextContent;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var cancel_1 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.cancel_3dmw3p$;
  var kotlin = Kotlin.kotlin;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var ByteReadPacket = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.ByteReadPacket;
  var Input = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.Input;
  var PrimitiveClasses$byteArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteArrayClass;
  var copyTo = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.copyTo_47ygvz$;
  var CancellationException = Kotlin.kotlin.coroutines.cancellation.CancellationException;
  var HttpStatusCode = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpStatusCode;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var charset = $module$ktor_ktor_http_js_legacy.io.ktor.http.charset_10ldo9$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var withCharset = $module$ktor_ktor_http_js_legacy.io.ktor.http.withCharset_73qf4i$;
  var readText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readText_1lnizf$;
  var get_name = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.get_name_2sg7fd$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var Comparator = Kotlin.kotlin.Comparator;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var HttpMethod = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpMethod;
  var setOf_0 = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var get_authority = $module$ktor_ktor_http_js_legacy.io.ktor.http.get_authority_5y8s0c$;
  var UrlEncodingOption = $module$ktor_ktor_http_js_legacy.io.ktor.http.UrlEncodingOption;
  var takeFrom = $module$ktor_ktor_http_js_legacy.io.ktor.http.takeFrom_jl1sg7$;
  var get_authority_0 = $module$ktor_ktor_http_js_legacy.io.ktor.http.get_authority_3q1sfd$;
  var hashCode = Kotlin.hashCode;
  var L0 = Kotlin.Long.ZERO;
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var HeaderValue = $module$ktor_ktor_http_js_legacy.io.ktor.http.HeaderValue;
  var getCallableRef = Kotlin.getCallableRef;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var L1000 = Kotlin.Long.fromInt(1000);
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var parseHeaderValue = $module$ktor_ktor_http_js_legacy.io.ktor.http.parseHeaderValue_pdl1vj$;
  var HeadersBuilder_init = $module$ktor_ktor_http_js_legacy.io.ktor.http.HeadersBuilder;
  var ConcurrentMap = $module$ktor_ktor_utils_js_legacy.io.ktor.util.collections.ConcurrentMap;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var URLBuilder = $module$ktor_ktor_http_js_legacy.io.ktor.http.URLBuilder;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var toLowerCasePreservingASCIIRules = $module$ktor_ktor_utils_js_legacy.io.ktor.util.toLowerCasePreservingASCIIRules_pdl1vz$;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  var endsWith = Kotlin.kotlin.text.endsWith_sgbm27$;
  var toString = Kotlin.toString;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_7epoxm$;
  var L_1 = Kotlin.Long.NEG_ONE;
  var L2147483647 = Kotlin.Long.fromInt(2147483647);
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var URLProtocol = $module$ktor_ktor_http_js_legacy.io.ktor.http.URLProtocol;
  var ByteChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteChannel_6taknv$;
  var HttpMessage = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpMessage;
  var takeFrom_0 = $module$ktor_ktor_http_js_legacy.io.ktor.http.takeFrom_rs9g2p$;
  var appendAll = $module$ktor_ktor_utils_js_legacy.io.ktor.util.appendAll_k10e8h$;
  var putAll = $module$ktor_ktor_utils_js_legacy.io.ktor.util.putAll_orn3b7$;
  var SupervisorJob = $module$kotlinx_coroutines_core.kotlinx.coroutines.SupervisorJob_5dx9e$;
  var HttpMessageBuilder = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpMessageBuilder;
  var takeFrom_1 = $module$ktor_ktor_http_js_legacy.io.ktor.http.takeFrom_wol2ee$;
  var formUrlEncode = $module$ktor_ktor_http_js_legacy.io.ktor.http.formUrlEncode_invt95$;
  var writeFully = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.writeFully_4scpqu$;
  var close_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.close_x5qia6$;
  var BytePacketBuilder = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.BytePacketBuilder_za3lpa$;
  var writeText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeText_t153jy$;
  var writeFully_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeFully_i6snlg$;
  var PartData$FileItem = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.PartData.FileItem;
  var PartData$BinaryItem = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.PartData.BinaryItem;
  var PartData$FormItem = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.PartData.FormItem;
  var Random = Kotlin.kotlin.random.Random;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var take = Kotlin.kotlin.text.take_6ic1pp$;
  var readAvailable = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readAvailable_czhrh1$;
  var encodeToByteArray = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var addSuppressedInternal = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.addSuppressedInternal_oh0dqn$;
  var requestWriteBuffer = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.requestWriteBuffer_9tm6dw$;
  var Buffer = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.Buffer;
  var completeWriting = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.completeWriting_oczduq$;
  var Parameters = $module$ktor_ktor_http_js_legacy.io.ktor.http.Parameters;
  var Headers = $module$ktor_ktor_http_js_legacy.io.ktor.http.Headers;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var decode = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.decode_lb8wo3$;
  var pool = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.pool;
  var readAvailable_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.readAvailable_vg4m8x$;
  var ConcurrentList = $module$ktor_ktor_utils_js_legacy.io.ktor.util.collections.ConcurrentList;
  var numberToInt = Kotlin.numberToInt;
  var CancellationException_init_0 = Kotlin.kotlin.coroutines.cancellation.CancellationException_init_wspj0f$;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var CancellableContinuationImpl_init = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellableContinuationImpl;
  var Error_0 = Kotlin.kotlin.Error;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var String_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.String_xge8xe$;
  var readShort = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readShort_7wsnj1$;
  var cancelConsumed = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.cancelConsumed_v57n85$;
  var IOException = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.errors.IOException;
  DoubleReceiveException.prototype = Object.create(IllegalStateException.prototype);
  DoubleReceiveException.prototype.constructor = DoubleReceiveException;
  NoTransformationFoundException.prototype = Object.create(UnsupportedOperationException.prototype);
  NoTransformationFoundException.prototype.constructor = NoTransformationFoundException;
  SavedHttpCall.prototype = Object.create(HttpClientCall_0.prototype);
  SavedHttpCall.prototype.constructor = SavedHttpCall;
  SavedHttpResponse.prototype = Object.create(HttpResponse_0.prototype);
  SavedHttpResponse.prototype.constructor = SavedHttpResponse;
  HttpRequestTimeoutException.prototype = Object.create(CancellationException.prototype);
  HttpRequestTimeoutException.prototype.constructor = HttpRequestTimeoutException;
  FormDataContent.prototype = Object.create(OutgoingContent$ByteArrayContent.prototype);
  FormDataContent.prototype.constructor = FormDataContent;
  MultiPartFormDataContent.prototype = Object.create(OutgoingContent$WriteChannelContent.prototype);
  MultiPartFormDataContent.prototype.constructor = MultiPartFormDataContent;
  EmptyContent.prototype = Object.create(OutgoingContent$NoContent.prototype);
  EmptyContent.prototype.constructor = EmptyContent;
  wrapHeaders$ObjectLiteral.prototype = Object.create(OutgoingContent$NoContent.prototype);
  wrapHeaders$ObjectLiteral.prototype.constructor = wrapHeaders$ObjectLiteral;
  wrapHeaders$ObjectLiteral_0.prototype = Object.create(OutgoingContent$ReadChannelContent.prototype);
  wrapHeaders$ObjectLiteral_0.prototype.constructor = wrapHeaders$ObjectLiteral_0;
  wrapHeaders$ObjectLiteral_1.prototype = Object.create(OutgoingContent$WriteChannelContent.prototype);
  wrapHeaders$ObjectLiteral_1.prototype.constructor = wrapHeaders$ObjectLiteral_1;
  wrapHeaders$ObjectLiteral_2.prototype = Object.create(OutgoingContent$ByteArrayContent.prototype);
  wrapHeaders$ObjectLiteral_2.prototype.constructor = wrapHeaders$ObjectLiteral_2;
  wrapHeaders$ObjectLiteral_3.prototype = Object.create(OutgoingContent$ProtocolUpgrade.prototype);
  wrapHeaders$ObjectLiteral_3.prototype.constructor = wrapHeaders$ObjectLiteral_3;
  var HttpClient$manageEngine_metadata = new PropertyMetadata('manageEngine');
  var HttpClientConfig$engineConfig_metadata = new PropertyMetadata('engineConfig');
  var HttpClientConfig$followRedirects_metadata = new PropertyMetadata('followRedirects');
  var HttpClientConfig$useDefaultTransformers_metadata = new PropertyMetadata('useDefaultTransformers');
  var HttpClientConfig$expectSuccess_metadata = new PropertyMetadata('expectSuccess');
  var HttpClientConfig$developmentMode_metadata = new PropertyMetadata('developmentMode');
  function HttpClientCall_0(client) {
    HttpClientCall$Companion_getInstance();
    this.received_8b75r7$_0 = false;
    this.client_77eog7$_0 = threadLocal(client);
    this.request_vta333$_0 = this.request_vta333$_0;
    this.response_zcvbsz$_0 = this.response_zcvbsz$_0;
    this.allowDoubleReceive_c2ese3$_0 = false;
  }
  var HttpClientCall$client_metadata = new PropertyMetadata('client');
  Object.defineProperty(HttpClientCall_0.prototype, 'client', {configurable: true, get: function () {
    return this.client_77eog7$_0.getValue_lrcp0p$(this, HttpClientCall$client_metadata);
  }});
  Object.defineProperty(HttpClientCall_0.prototype, 'coroutineContext', {configurable: true, get: function () {
    return this.response.coroutineContext;
  }});
  Object.defineProperty(HttpClientCall_0.prototype, 'attributes', {configurable: true, get: function () {
    return this.request.attributes;
  }});
  Object.defineProperty(HttpClientCall_0.prototype, 'request', {configurable: true, get: function () {
    if (this.request_vta333$_0 == null)
      return throwUPAE('request');
    return this.request_vta333$_0;
  }, set: function (request) {
    this.request_vta333$_0 = request;
  }});
  Object.defineProperty(HttpClientCall_0.prototype, 'response', {configurable: true, get: function () {
    if (this.response_zcvbsz$_0 == null)
      return throwUPAE('response');
    return this.response_zcvbsz$_0;
  }, set: function (response) {
    this.response_zcvbsz$_0 = response;
  }});
  Object.defineProperty(HttpClientCall_0.prototype, 'allowDoubleReceive', {configurable: true, get: function () {
    return this.allowDoubleReceive_c2ese3$_0;
  }});
  HttpClientCall_0.prototype.getResponseContent = function (continuation) {
    return this.response.content;
  };
  HttpClientCall_0.prototype.receive_jo9acv$ = function (info, continuation) {
    var tmp$;
    return this.receive_qi9ur9$(Kotlin.isType(tmp$ = info, TypeInfo) ? tmp$ : throwCCE(), continuation);
  };
  function Coroutine$receive_qi9ur9$($this, info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$info = info_0;
  }
  Coroutine$receive_qi9ur9$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$receive_qi9ur9$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receive_qi9ur9$.prototype.constructor = Coroutine$receive_qi9ur9$;
  Coroutine$receive_qi9ur9$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.exceptionState_0 = 1;
            if (instanceOf_0(this.$this.response, this.local$info.type)) {
              this.exceptionState_0 = 9;
              this.finallyPath_0 = [2];
              this.state_0 = 8;
              this.$returnValue = this.$this.response;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            this.finallyPath_0 = [9];
            this.exceptionState_0 = 8;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              cancel_0(this.$this.response, 'Receive failed', cause);
              throw cause;
            } else
              throw cause;
          case 2:
            return this.$returnValue;
          case 3:
            if (!this.$this.allowDoubleReceive && !function (scope) {
              return scope.$this.received_8b75r7$_0 === false ? function () {
                scope.$this.received_8b75r7$_0 = true;
                return true;
              }() : false;
            }(this)) {
              throw new DoubleReceiveException(this.$this);
            }
            this.local$tmp$ = this.$this.attributes.getOrNull_yzaw86$(HttpClientCall$Companion_getInstance().CustomResponse);
            if (this.local$tmp$ == null) {
              this.state_0 = 4;
              this.result_0 = this.$this.getResponseContent(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 4:
            this.local$tmp$ = this.result_0;
            this.state_0 = 5;
            continue;
          case 5:
            var responseData = this.local$tmp$;
            var subject = HttpResponseContainer_init(this.local$info, responseData);
            var tmp$_0;
            if ((tmp$ = this.$this.client) != null)
              tmp$_0 = tmp$;
            else {
              throw IllegalStateException_init(('Failed to receive call(' + this.$this + ') in different native thread.').toString());
            }

            var currentClient = tmp$_0;
            this.state_0 = 6;
            this.result_0 = currentClient.responsePipeline.execute_8pmvt0$(this.$this, subject, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var result = this.result_0.response;
            if (!instanceOf_0(result, this.local$info.type)) {
              var from = Kotlin.getKClassFromExpression(result);
              var to = this.local$info.type;
              throw new NoTransformationFoundException(this.$this.response, from, to);
            }
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [7];
            this.state_0 = 8;
            this.$returnValue = result;
            continue;
          case 7:
            return this.$returnValue;
          case 8:
            this.exceptionState_0 = 9;
            complete(this.$this.response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 9:
            throw this.exception_0;
          case 10:
            return;
          default:this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 9) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpClientCall_0.prototype.receive_qi9ur9$ = function (info_0, continuation_0, suspended) {
    var instance = new Coroutine$receive_qi9ur9$(this, info_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HttpClientCall_0.prototype.toString = function () {
    return 'HttpClientCall[' + this.request.url + ', ' + this.response.status + ']';
  };
  function HttpClientCall$Companion() {
    HttpClientCall$Companion_instance = this;
    this.CustomResponse = new AttributeKey('CustomResponse');
  }
  HttpClientCall$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var HttpClientCall$Companion_instance = null;
  function HttpClientCall$Companion_getInstance() {
    if (HttpClientCall$Companion_instance === null) {
      new HttpClientCall$Companion();
    }return HttpClientCall$Companion_instance;
  }
  HttpClientCall_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'HttpClientCall', interfaces: [CoroutineScope]};
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.call.receive_8ov3cv$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var throwCCE = Kotlin.throwCCE;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, $receiver, continuation) {
      var tmp$_0;
      var typeInfo$result_0;
      typeInfo$break: do {
        try {
          typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
        } catch (_) {
          typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
          break typeInfo$break;
        }
      }
       while (false);
      Kotlin.suspendCall($receiver.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
      return isT(tmp$_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_0 : throwCCE();
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.call.receive_5sqbag$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var throwCCE = Kotlin.throwCCE;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, $receiver, continuation) {
      var tmp$_1;
      var tmp$_2 = $receiver.call;
      var typeInfo$result_0;
      typeInfo$break: do {
        try {
          typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
        } catch (_) {
          typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
          break typeInfo$break;
        }
      }
       while (false);
      Kotlin.suspendCall(tmp$_2.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
      return isT(tmp$_1 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_1 : throwCCE();
    };
  }));
  function DoubleReceiveException(call) {
    IllegalStateException_init_0(this);
    this.name = 'DoubleReceiveException';
    this.message_eo7lbx$_0 = 'Response already received: ' + call;
  }
  Object.defineProperty(DoubleReceiveException.prototype, 'message', {configurable: true, get: function () {
    return this.message_eo7lbx$_0;
  }});
  DoubleReceiveException.$metadata$ = {kind: Kind_CLASS, simpleName: 'DoubleReceiveException', interfaces: [IllegalStateException]};
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init(this);
    this.name = 'NoTransformationFoundException';
    this.message_gd84kd$_0 = trimMargin('No transformation found: ' + from + ' -> ' + to + '\n' + '        |with response from ' + get_request(response).url + ':' + '\n' + '        |status: ' + response.status + '\n' + '        |response headers: ' + '\n' + '        |' + joinToString(flattenEntries(response.headers), void 0, void 0, void 0, void 0, void 0, NoTransformationFoundException$message$lambda) + '\n' + '    ');
  }
  Object.defineProperty(NoTransformationFoundException.prototype, 'message', {configurable: true, get: function () {
    return this.message_gd84kd$_0;
  }});
  function NoTransformationFoundException$message$lambda(f) {
    var key = f.component1(), value = f.component2();
    return key + ': ' + value + '\n';
  }
  NoTransformationFoundException.$metadata$ = {kind: Kind_CLASS, simpleName: 'NoTransformationFoundException', interfaces: [UnsupportedOperationException]};
  function SavedHttpCall(client, responseBody) {
    HttpClientCall_0.call(this, client);
    this.responseBody_0 = responseBody;
    this.allowDoubleReceive_je4pft$_0 = true;
  }
  SavedHttpCall.prototype.getResponseContent = function (continuation) {
    return ByteReadChannel_0(this.responseBody_0);
  };
  Object.defineProperty(SavedHttpCall.prototype, 'allowDoubleReceive', {configurable: true, get: function () {
    return this.allowDoubleReceive_je4pft$_0;
  }});
  SavedHttpCall.$metadata$ = {kind: Kind_CLASS, simpleName: 'SavedHttpCall', interfaces: [HttpClientCall_0]};
  function SavedHttpRequest(call, origin) {
    this.call_k7cxor$_0 = call;
    this.$delegate_k8mkjd$_0 = origin;
  }
  Object.defineProperty(SavedHttpRequest.prototype, 'call', {get: function () {
    return this.call_k7cxor$_0;
  }});
  Object.defineProperty(SavedHttpRequest.prototype, 'attributes', {configurable: true, get: function () {
    return this.$delegate_k8mkjd$_0.attributes;
  }});
  Object.defineProperty(SavedHttpRequest.prototype, 'content', {configurable: true, get: function () {
    return this.$delegate_k8mkjd$_0.content;
  }});
  Object.defineProperty(SavedHttpRequest.prototype, 'coroutineContext', {configurable: true, get: function () {
    return this.$delegate_k8mkjd$_0.coroutineContext;
  }});
  Object.defineProperty(SavedHttpRequest.prototype, 'executionContext', {configurable: true, get: function () {
    return this.$delegate_k8mkjd$_0.executionContext;
  }});
  Object.defineProperty(SavedHttpRequest.prototype, 'headers', {configurable: true, get: function () {
    return this.$delegate_k8mkjd$_0.headers;
  }});
  Object.defineProperty(SavedHttpRequest.prototype, 'method', {configurable: true, get: function () {
    return this.$delegate_k8mkjd$_0.method;
  }});
  Object.defineProperty(SavedHttpRequest.prototype, 'url', {configurable: true, get: function () {
    return this.$delegate_k8mkjd$_0.url;
  }});
  SavedHttpRequest.$metadata$ = {kind: Kind_CLASS, simpleName: 'SavedHttpRequest', interfaces: [HttpRequest]};
  function SavedHttpResponse(call, body, origin) {
    HttpResponse_0.call(this);
    this.call_tbj7t5$_0 = call;
    this.context_0 = Job_0();
    this.status_i2dvkt$_0 = origin.status;
    this.version_ol3l9j$_0 = origin.version;
    this.requestTime_3msfjx$_0 = origin.requestTime;
    this.responseTime_xhbsdj$_0 = origin.responseTime;
    this.headers_w25qx3$_0 = origin.headers;
    this.coroutineContext_pwmz9e$_0 = origin.coroutineContext.plus_1fupul$(this.context_0);
    this.content_mzxkbe$_0 = ByteReadChannel_0(body);
  }
  Object.defineProperty(SavedHttpResponse.prototype, 'call', {get: function () {
    return this.call_tbj7t5$_0;
  }});
  Object.defineProperty(SavedHttpResponse.prototype, 'status', {configurable: true, get: function () {
    return this.status_i2dvkt$_0;
  }});
  Object.defineProperty(SavedHttpResponse.prototype, 'version', {configurable: true, get: function () {
    return this.version_ol3l9j$_0;
  }});
  Object.defineProperty(SavedHttpResponse.prototype, 'requestTime', {configurable: true, get: function () {
    return this.requestTime_3msfjx$_0;
  }});
  Object.defineProperty(SavedHttpResponse.prototype, 'responseTime', {configurable: true, get: function () {
    return this.responseTime_xhbsdj$_0;
  }});
  Object.defineProperty(SavedHttpResponse.prototype, 'headers', {configurable: true, get: function () {
    return this.headers_w25qx3$_0;
  }});
  Object.defineProperty(SavedHttpResponse.prototype, 'coroutineContext', {configurable: true, get: function () {
    return this.coroutineContext_pwmz9e$_0;
  }});
  Object.defineProperty(SavedHttpResponse.prototype, 'content', {configurable: true, get: function () {
    return this.content_mzxkbe$_0;
  }});
  SavedHttpResponse.$metadata$ = {kind: Kind_CLASS, simpleName: 'SavedHttpResponse', interfaces: [HttpResponse_0]};
  function Coroutine$save($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$currentClient = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$save.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$save.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$save.prototype.constructor = Coroutine$save;
  Coroutine$save.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var tmp$_0;
            if ((tmp$ = this.local$$receiver.client) != null)
              tmp$_0 = tmp$;
            else {
              throw IllegalStateException_init('Failed to save call in different native thread.'.toString());
            }

            this.local$currentClient = tmp$_0;
            this.state_0 = 2;
            this.result_0 = readRemaining(this.local$$receiver.response.content, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var responseBody = readBytes(this.result_0);
            var $receiver = new SavedHttpCall(this.local$currentClient, responseBody);
            $receiver.request = new SavedHttpRequest($receiver, this.local$$receiver.request);
            $receiver.response = new SavedHttpResponse($receiver, responseBody, this.local$$receiver.response);
            return $receiver;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function save($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$save($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function TypeInfo_0(type, reifiedType, kotlinType) {
    if (kotlinType === void 0)
      kotlinType = null;
    this.type_dbbsxt$_0 = type;
    this.reifiedType_npk153$_0 = reifiedType;
    this.kotlinType_c7gzk0$_0 = kotlinType;
  }
  Object.defineProperty(TypeInfo_0.prototype, 'type', {get: function () {
    return this.type_dbbsxt$_0;
  }});
  Object.defineProperty(TypeInfo_0.prototype, 'reifiedType', {get: function () {
    return this.reifiedType_npk153$_0;
  }});
  Object.defineProperty(TypeInfo_0.prototype, 'kotlinType', {get: function () {
    return this.kotlinType_c7gzk0$_0;
  }});
  TypeInfo_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypeInfo', interfaces: [TypeInfo]};
  TypeInfo_0.prototype.component1 = function () {
    return this.type;
  };
  TypeInfo_0.prototype.component2 = function () {
    return this.reifiedType;
  };
  TypeInfo_0.prototype.component3 = function () {
    return this.kotlinType;
  };
  TypeInfo_0.prototype.copy_yupgpq$ = function (type, reifiedType, kotlinType) {
    return new TypeInfo_0(type === void 0 ? this.type : type, reifiedType === void 0 ? this.reifiedType : reifiedType, kotlinType === void 0 ? this.kotlinType : kotlinType);
  };
  TypeInfo_0.prototype.toString = function () {
    return 'TypeInfo(type=' + Kotlin.toString(this.type) + (', reifiedType=' + Kotlin.toString(this.reifiedType)) + (', kotlinType=' + Kotlin.toString(this.kotlinType)) + ')';
  };
  TypeInfo_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.reifiedType) | 0;
    result = result * 31 + Kotlin.hashCode(this.kotlinType) | 0;
    return result;
  };
  TypeInfo_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.reifiedType, other.reifiedType) && Kotlin.equals(this.kotlinType, other.kotlinType)))));
  };
  function instanceOf_0($receiver, type) {
    return instanceOf($receiver, type);
  }
  var CALL_COROUTINE;
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  HttpClientEngineCapability.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'HttpClientEngineCapability', interfaces: []};
  var ProxyType$SOCKS_instance;
  var ProxyType$HTTP_instance;
  var ProxyType$UNKNOWN_instance;
  var KTOR_DEFAULT_USER_AGENT;
  function KtorCallContextElement(callContext) {
    KtorCallContextElement$Companion_getInstance();
    this.callContext = callContext;
  }
  var KtorCallContextElement$Companion_instance = null;
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.engine.attachToUserJob_mmkme6$', wrapFunction(function () {
    var Job = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.Job;
    var CancellationException_init = Kotlin.kotlin.coroutines.cancellation.CancellationException_init_pdl1vj$;
    var Unit = Kotlin.kotlin.Unit;
    function attachToUserJob$lambda(closure$callJob) {
      return function (cause) {
        if (cause == null)
          return;
        closure$callJob.cancel_x5z25k$(CancellationException_init(cause.message));
        return Unit;
      };
    }
    function attachToUserJob$lambda_0(closure$cleanupHandler) {
      return function (it) {
        closure$cleanupHandler.dispose();
        return Unit;
      };
    }
    return function (callJob, continuation) {
      var tmp$_0;
      tmp$_0 = Kotlin.coroutineReceiver().context.get_j3r2sn$(Job.Key);
      if (tmp$_0 == null) {
        return;
      }var userJob_0 = tmp$_0;
      var cleanupHandler_0 = userJob_0.invokeOnCompletion_ct2b2z$(true, void 0, attachToUserJob$lambda(callJob));
      callJob.invokeOnCompletion_f05bi3$(attachToUserJob$lambda_0(cleanupHandler_0));
    };
  }));
  var UploadProgressListenerAttributeKey;
  var DownloadProgressListenerAttributeKey;
  function BodyProgress$Feature() {
    BodyProgress$Feature_instance = this;
    this.key_8p7j2i$_0 = new AttributeKey('BodyProgress');
  }
  var BodyProgress$Feature_instance = null;
  function DataConversion_0() {
    DataConversion_instance = this;
    this.key_fnmdsx$_0 = new AttributeKey('DataConversion');
  }
  var DataConversion_instance = null;
  function DefaultRequest$Feature() {
    DefaultRequest$Feature_instance = this;
    this.key_2n0sxh$_0 = new AttributeKey('DefaultRequest');
  }
  var DefaultRequest$Feature_instance = null;
  var ValidateMark;
  var NO_RESPONSE_TEXT;
  var DEPRECATED_EXCEPTION_CTOR;
  var ResponseException$_response_metadata = new PropertyMetadata('_response');
  function ExpectSuccess$Companion() {
    ExpectSuccess$Companion_instance = this;
  }
  var ExpectSuccess$Companion_instance = null;
  function HttpCallValidator$Companion() {
    HttpCallValidator$Companion_instance = this;
    this.key_uukd7r$_0 = new AttributeKey('HttpResponseValidator');
  }
  var HttpCallValidator$Companion_instance = null;
  var ExpectSuccessAttributeKey;
  var FEATURE_INSTALLED_LIST;
  function HttpClientFeature() {
  }
  function HttpClientFeature$prepare$lambda($receiver) {
    return Unit;
  }
  HttpClientFeature.prototype.prepare_oh3mgy$ = function (block, callback$default) {
    if (block === void 0)
      block = HttpClientFeature$prepare$lambda;
    return callback$default ? callback$default(block) : this.prepare_oh3mgy$$default(block);
  };
  HttpClientFeature.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'HttpClientFeature', interfaces: []};
  function feature($receiver, feature) {
    var tmp$;
    return (tmp$ = $receiver.attributes.getOrNull_yzaw86$(FEATURE_INSTALLED_LIST)) != null ? tmp$.getOrNull_yzaw86$(feature.key) : null;
  }
  function HttpPlainText$Feature() {
    HttpPlainText$Feature_instance = this;
    this.key_wkh146$_0 = new AttributeKey('HttpPlainText');
  }
  var HttpPlainText$Feature_instance = null;
  var ALLOWED_FOR_REDIRECT;
  function HttpRedirect$Feature() {
    HttpRedirect$Feature_instance = this;
    this.key_oxn36d$_0 = new AttributeKey('HttpRedirect');
  }
  var HttpRedirect$Feature_instance = null;
  function HttpRequestLifecycle$Feature() {
    HttpRequestLifecycle$Feature_instance = this;
    this.key_livr7a$_0 = new AttributeKey('RequestLifecycle');
  }
  var HttpRequestLifecycle$Feature_instance = null;
  var HttpSend$maxSendCount_metadata = new PropertyMetadata('maxSendCount');
  function HttpSend$Feature() {
    HttpSend$Feature_instance = this;
    this.key_x494tl$_0 = new AttributeKey('HttpSend');
  }
  var HttpSend$Feature_instance = null;
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
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    HttpTimeout$Feature_getInstance();
    this.requestTimeoutMillis_0 = requestTimeoutMillis;
    this.connectTimeoutMillis_0 = connectTimeoutMillis;
    this.socketTimeoutMillis_0 = socketTimeoutMillis;
  }
  function HttpTimeout$HttpTimeoutCapabilityConfiguration() {
    HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_getInstance();
    this._requestTimeoutMillis_4dr633$_0 = new shared$ObjectLiteral_2(L0);
    this._connectTimeoutMillis_yp3bu2$_0 = new shared$ObjectLiteral_2(L0);
    this._socketTimeoutMillis_d8nrb$_0 = new shared$ObjectLiteral_2(L0);
  }
  var HttpTimeout$HttpTimeoutCapabilityConfiguration$_requestTimeoutMillis_metadata = new PropertyMetadata('_requestTimeoutMillis');
  Object.defineProperty(HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype, '_requestTimeoutMillis_0', {configurable: true, get: function () {
    return this._requestTimeoutMillis_4dr633$_0.getValue_lrcp0p$(this, HttpTimeout$HttpTimeoutCapabilityConfiguration$_requestTimeoutMillis_metadata);
  }, set: function (_requestTimeoutMillis) {
    this._requestTimeoutMillis_4dr633$_0.setValue_9rddgb$(this, HttpTimeout$HttpTimeoutCapabilityConfiguration$_requestTimeoutMillis_metadata, _requestTimeoutMillis);
  }});
  var HttpTimeout$HttpTimeoutCapabilityConfiguration$_connectTimeoutMillis_metadata = new PropertyMetadata('_connectTimeoutMillis');
  Object.defineProperty(HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype, '_connectTimeoutMillis_0', {configurable: true, get: function () {
    return this._connectTimeoutMillis_yp3bu2$_0.getValue_lrcp0p$(this, HttpTimeout$HttpTimeoutCapabilityConfiguration$_connectTimeoutMillis_metadata);
  }, set: function (_connectTimeoutMillis) {
    this._connectTimeoutMillis_yp3bu2$_0.setValue_9rddgb$(this, HttpTimeout$HttpTimeoutCapabilityConfiguration$_connectTimeoutMillis_metadata, _connectTimeoutMillis);
  }});
  var HttpTimeout$HttpTimeoutCapabilityConfiguration$_socketTimeoutMillis_metadata = new PropertyMetadata('_socketTimeoutMillis');
  Object.defineProperty(HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype, '_socketTimeoutMillis_0', {configurable: true, get: function () {
    return this._socketTimeoutMillis_d8nrb$_0.getValue_lrcp0p$(this, HttpTimeout$HttpTimeoutCapabilityConfiguration$_socketTimeoutMillis_metadata);
  }, set: function (_socketTimeoutMillis) {
    this._socketTimeoutMillis_d8nrb$_0.setValue_9rddgb$(this, HttpTimeout$HttpTimeoutCapabilityConfiguration$_socketTimeoutMillis_metadata, _socketTimeoutMillis);
  }});
  Object.defineProperty(HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype, 'requestTimeoutMillis', {configurable: true, get: function () {
    return this._requestTimeoutMillis_0;
  }, set: function (value) {
    this._requestTimeoutMillis_0 = this.checkTimeoutValue_0(value);
  }});
  Object.defineProperty(HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype, 'connectTimeoutMillis', {configurable: true, get: function () {
    return this._connectTimeoutMillis_0;
  }, set: function (value) {
    this._connectTimeoutMillis_0 = this.checkTimeoutValue_0(value);
  }});
  Object.defineProperty(HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype, 'socketTimeoutMillis', {configurable: true, get: function () {
    return this._socketTimeoutMillis_0;
  }, set: function (value) {
    this._socketTimeoutMillis_0 = this.checkTimeoutValue_0(value);
  }});
  HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype.build_8be2vx$ = function () {
    return new HttpTimeout(this.requestTimeoutMillis, this.connectTimeoutMillis, this.socketTimeoutMillis);
  };
  HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype.checkTimeoutValue_0 = function (value) {
    if (!(value == null || value.toNumber() > 0)) {
      var message = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeout.INFINITE_TIMEOUT_MS';
      throw IllegalArgumentException_init(message.toString());
    }return value;
  };
  HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, HttpTimeout$HttpTimeoutCapabilityConfiguration) ? tmp$_0 : throwCCE();
    if (!equals(this._requestTimeoutMillis_0, other._requestTimeoutMillis_0))
      return false;
    if (!equals(this._connectTimeoutMillis_0, other._connectTimeoutMillis_0))
      return false;
    if (!equals(this._socketTimeoutMillis_0, other._socketTimeoutMillis_0))
      return false;
    return true;
  };
  HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var result = (tmp$_0 = (tmp$ = this._requestTimeoutMillis_0) != null ? hashCode(tmp$) : null) != null ? tmp$_0 : 0;
    result = (31 * result | 0) + ((tmp$_2 = (tmp$_1 = this._connectTimeoutMillis_0) != null ? hashCode(tmp$_1) : null) != null ? tmp$_2 : 0) | 0;
    result = (31 * result | 0) + ((tmp$_4 = (tmp$_3 = this._socketTimeoutMillis_0) != null ? hashCode(tmp$_3) : null) != null ? tmp$_4 : 0) | 0;
    return result;
  };
  function HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion() {
    HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_instance = this;
    this.key = new AttributeKey('TimeoutConfiguration');
  }
  HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_instance = null;
  function HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_getInstance() {
    if (HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_instance === null) {
      new HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion();
    }return HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_instance;
  }
  HttpTimeout$HttpTimeoutCapabilityConfiguration.$metadata$ = {kind: Kind_CLASS, simpleName: 'HttpTimeoutCapabilityConfiguration', interfaces: []};
  function HttpTimeout$HttpTimeout$HttpTimeoutCapabilityConfiguration_init(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    if (requestTimeoutMillis === void 0)
      requestTimeoutMillis = null;
    if (connectTimeoutMillis === void 0)
      connectTimeoutMillis = null;
    if (socketTimeoutMillis === void 0)
      socketTimeoutMillis = null;
    $this = $this || Object.create(HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype);
    HttpTimeout$HttpTimeoutCapabilityConfiguration.call($this);
    $this.requestTimeoutMillis = requestTimeoutMillis;
    $this.connectTimeoutMillis = connectTimeoutMillis;
    $this.socketTimeoutMillis = socketTimeoutMillis;
    return $this;
  }
  HttpTimeout.prototype.hasNotNullTimeouts_0 = function () {
    return this.requestTimeoutMillis_0 != null || this.connectTimeoutMillis_0 != null || this.socketTimeoutMillis_0 != null;
  };
  function HttpTimeout$Feature() {
    HttpTimeout$Feature_instance = this;
    this.key_g1vqj4$_0 = new AttributeKey('TimeoutFeature');
    this.INFINITE_TIMEOUT_MS = Long$Companion$MAX_VALUE;
  }
  Object.defineProperty(HttpTimeout$Feature.prototype, 'key', {configurable: true, get: function () {
    return this.key_g1vqj4$_0;
  }});
  HttpTimeout$Feature.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = HttpTimeout$HttpTimeout$HttpTimeoutCapabilityConfiguration_init();
    block($receiver);
    return $receiver.build_8be2vx$();
  };
  function Coroutine$HttpTimeout$Feature$install$lambda$lambda$lambda(closure$requestTimeout_0, closure$executionContext_0, this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$requestTimeout = closure$requestTimeout_0;
    this.local$closure$executionContext = closure$executionContext_0;
    this.local$this$ = this$_0;
  }
  Coroutine$HttpTimeout$Feature$install$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$HttpTimeout$Feature$install$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpTimeout$Feature$install$lambda$lambda$lambda.prototype.constructor = Coroutine$HttpTimeout$Feature$install$lambda$lambda$lambda;
  Coroutine$HttpTimeout$Feature$install$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(this.local$closure$requestTimeout, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$executionContext.cancel_x5z25k$(new HttpRequestTimeoutException(this.local$this$.context)), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HttpTimeout$Feature$install$lambda$lambda$lambda(closure$requestTimeout_0, closure$executionContext_0, this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpTimeout$Feature$install$lambda$lambda$lambda(closure$requestTimeout_0, closure$executionContext_0, this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function HttpTimeout$Feature$install$lambda$lambda$lambda_0(closure$killer) {
    return function (it) {
      closure$killer.cancel_x5z25k$();
      return Unit;
    };
  }
  function Coroutine$HttpTimeout$Feature$install$lambda(closure$feature_0, this$HttpTimeout$_0, closure$scope_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$feature = closure$feature_0;
    this.local$this$HttpTimeout$ = this$HttpTimeout$_0;
    this.local$closure$scope = closure$scope_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$HttpTimeout$Feature$install$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$HttpTimeout$Feature$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpTimeout$Feature$install$lambda.prototype.constructor = Coroutine$HttpTimeout$Feature$install$lambda;
  Coroutine$HttpTimeout$Feature$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var configuration = this.local$$receiver.context.getCapabilityOrNull_i25mbv$(HttpTimeout$Feature_getInstance());
            if (configuration == null && this.local$closure$feature.hasNotNullTimeouts_0()) {
              configuration = HttpTimeout$HttpTimeout$HttpTimeoutCapabilityConfiguration_init();
              this.local$$receiver.context.setCapability_wfl2px$(HttpTimeout$Feature_getInstance(), configuration);
            }
            var tmp$;
            if (configuration != null) {
              var $receiver = configuration;
              var closure$feature = this.local$closure$feature;
              var this$HttpTimeout$ = this.local$this$HttpTimeout$;
              var closure$scope = this.local$closure$scope;
              block$break: do {
                var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
                $receiver.connectTimeoutMillis = (tmp$_0 = $receiver.connectTimeoutMillis) != null ? tmp$_0 : closure$feature.connectTimeoutMillis_0;
                $receiver.socketTimeoutMillis = (tmp$_1 = $receiver.socketTimeoutMillis) != null ? tmp$_1 : closure$feature.socketTimeoutMillis_0;
                $receiver.requestTimeoutMillis = (tmp$_2 = $receiver.requestTimeoutMillis) != null ? tmp$_2 : closure$feature.requestTimeoutMillis_0;
                var requestTimeout = (tmp$_3 = $receiver.requestTimeoutMillis) != null ? tmp$_3 : closure$feature.requestTimeoutMillis_0;
                if (requestTimeout == null || equals(requestTimeout, this$HttpTimeout$.INFINITE_TIMEOUT_MS))
                  break block$break;
                var executionContext = this.local$$receiver.context.executionContext;
                var killer = launch(closure$scope, void 0, void 0, HttpTimeout$Feature$install$lambda$lambda$lambda(requestTimeout, executionContext, this.local$$receiver));
                this.local$$receiver.context.executionContext.invokeOnCompletion_f05bi3$(HttpTimeout$Feature$install$lambda$lambda$lambda_0(killer));
              }
               while (false);
              tmp$ = $receiver;
            } else
              tmp$ = null;
            return tmp$;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HttpTimeout$Feature$install$lambda(closure$feature_0, this$HttpTimeout$_0, closure$scope_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpTimeout$Feature$install$lambda(closure$feature_0, this$HttpTimeout$_0, closure$scope_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpTimeout$Feature.prototype.install_wojrb5$ = function (feature, scope) {
    scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline$Phases_getInstance().Before, HttpTimeout$Feature$install$lambda(feature, this, scope));
  };
  HttpTimeout$Feature.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Feature', interfaces: [HttpClientEngineCapability, HttpClientFeature]};
  var HttpTimeout$Feature_instance = null;
  function HttpTimeout$Feature_getInstance() {
    if (HttpTimeout$Feature_instance === null) {
      new HttpTimeout$Feature();
    }return HttpTimeout$Feature_instance;
  }
  HttpTimeout.$metadata$ = {kind: Kind_CLASS, simpleName: 'HttpTimeout', interfaces: []};
  function HttpRequestTimeoutException(request) {
    var tmp$, tmp$_0;
    CancellationException_init('Request timeout has expired [url=' + request.url.buildString() + ', ' + ('request_timeout=' + ((tmp$_0 = (tmp$ = request.getCapabilityOrNull_i25mbv$(HttpTimeout$Feature_getInstance())) != null ? tmp$.requestTimeoutMillis : null) != null ? tmp$_0 : 'unknown').toString() + ' ms]'), this);
    this.name = 'HttpRequestTimeoutException';
  }
  HttpRequestTimeoutException.$metadata$ = {kind: Kind_CLASS, simpleName: 'HttpRequestTimeoutException', interfaces: [CancellationException]};
  function UserAgent$Feature() {
    UserAgent$Feature_instance = this;
    this.key_2jmgf$_0 = new AttributeKey('UserAgent');
  }
  var UserAgent$Feature_instance = null;
  var CacheControl_instance = null;
  function HttpCache$Companion() {
    HttpCache$Companion_instance = this;
    this.key_pqunrv$_0 = new AttributeKey('HttpCache');
  }
  var HttpCache$Companion_instance = null;
  var DisabledCacheStorage_instance = null;
  var HttpCacheStorage$Companion_instance = null;
  function HttpCookies$Companion() {
    HttpCookies$Companion_instance = this;
    this.key_sy00j9$_0 = new AttributeKey('HttpCookies');
  }
  var HttpCookies$Companion_instance = null;
  function ResponseObserver$Feature() {
    ResponseObserver$Feature_instance = this;
    this.key_1kjwna$_0 = new AttributeKey('BodyInterceptor');
  }
  var ResponseObserver$Feature_instance = null;
  var WEBSOCKET_VERSION;
  var NONCE_SIZE;
  var REQUEST_EXTENSIONS_KEY;
  var WebSocketCapability_instance = null;
  var WebSocketExtensionsCapability_instance = null;
  function WebSockets$Feature() {
    WebSockets$Feature_instance = this;
    this.key_9eo0u2$_0 = new AttributeKey('Websocket');
  }
  var WebSockets$Feature_instance = null;
  function DefaultHttpRequest(call, data) {
    this.call_bo7spw$_0 = call;
    this.method_c5x7eh$_0 = data.method;
    this.url_9j6cnp$_0 = data.url;
    this.content_jw4yw1$_0 = data.body;
    this.headers_atwsac$_0 = data.headers;
    this.attributes_el41s3$_0 = data.attributes;
  }
  function HttpRequest() {
  }
  Object.defineProperty(HttpRequest.prototype, 'coroutineContext', {configurable: true, get: function () {
    return this.call.coroutineContext;
  }});
  Object.defineProperty(HttpRequest.prototype, 'executionContext', {configurable: true, get: function () {
    return ensureNotNull(this.coroutineContext.get_j3r2sn$(Job.Key));
  }});
  HttpRequest.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'HttpRequest', interfaces: [CoroutineScope, HttpMessage]};
  function HttpRequestBuilder() {
    HttpRequestBuilder$Companion_getInstance();
    this.url = new URLBuilder();
    this.method = HttpMethod.Companion.Get;
    this.headers_nor9ye$_0 = new HeadersBuilder_init();
    this.body = EmptyContent_getInstance();
    var $receiver = SupervisorJob();
    makeShared($receiver);
    this.executionContext_h6ms6p$_0 = $receiver;
    this.attributes = Attributes(true);
  }
  Object.defineProperty(HttpRequestBuilder.prototype, 'headers', {configurable: true, get: function () {
    return this.headers_nor9ye$_0;
  }});
  Object.defineProperty(HttpRequestBuilder.prototype, 'executionContext', {configurable: true, get: function () {
    return this.executionContext_h6ms6p$_0;
  }, set: function (value) {
    makeShared(value);
    this.executionContext_h6ms6p$_0 = value;
  }});
  HttpRequestBuilder.prototype.url_6yzzjr$ = function (block) {
    block(this.url, this.url);
  };
  HttpRequestBuilder.prototype.build = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = this.url.build();
    tmp$_0 = this.method;
    tmp$_1 = this.headers.build();
    var tmp$_4;
    if ((tmp$_3 = Kotlin.isType(tmp$_2 = this.body, OutgoingContent) ? tmp$_2 : null) != null)
      tmp$_4 = tmp$_3;
    else {
      throw IllegalStateException_init(('No request transformation found: ' + this.body.toString()).toString());
    }
    return new HttpRequestData(tmp$, tmp$_0, tmp$_1, tmp$_4, this.executionContext, this.attributes);
  };
  HttpRequestBuilder.prototype.setAttributes_yhh5ns$ = function (block) {
    block(this.attributes);
  };
  HttpRequestBuilder.prototype.takeFromWithExecutionContext_s9rlw$ = function (builder) {
    this.executionContext = builder.executionContext;
    return this.takeFrom_s9rlw$(builder);
  };
  HttpRequestBuilder.prototype.takeFrom_s9rlw$ = function (builder) {
    this.method = builder.method;
    this.body = builder.body;
    takeFrom_0(this.url, builder.url);
    this.url.encodedPath = isBlank(this.url.encodedPath) ? '/' : this.url.encodedPath;
    appendAll(this.headers, builder.headers);
    putAll(this.attributes, builder.attributes);
    return this;
  };
  function HttpRequestBuilder$setCapability$lambda() {
    return sharedMap();
  }
  HttpRequestBuilder.prototype.setCapability_wfl2px$ = function (key, capability) {
    var capabilities = this.attributes.computeIfAbsent_u4q9l2$(ENGINE_CAPABILITIES_KEY, HttpRequestBuilder$setCapability$lambda);
    capabilities.put_xwzc9p$(key, capability);
  };
  HttpRequestBuilder.prototype.getCapabilityOrNull_i25mbv$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.attributes.getOrNull_yzaw86$(ENGINE_CAPABILITIES_KEY)) != null ? tmp$.get_11rb$(key) : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  function HttpRequestBuilder$Companion() {
    HttpRequestBuilder$Companion_instance = this;
  }
  HttpRequestBuilder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var HttpRequestBuilder$Companion_instance = null;
  function HttpRequestBuilder$Companion_getInstance() {
    if (HttpRequestBuilder$Companion_instance === null) {
      new HttpRequestBuilder$Companion();
    }return HttpRequestBuilder$Companion_instance;
  }
  HttpRequestBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'HttpRequestBuilder', interfaces: [HttpMessageBuilder]};
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.body = body;
    this.executionContext = executionContext;
    this.attributes = attributes;
    var tmp$, tmp$_0;
    this.requiredCapabilities_8be2vx$ = (tmp$_0 = (tmp$ = this.attributes.getOrNull_yzaw86$(ENGINE_CAPABILITIES_KEY)) != null ? tmp$.keys : null) != null ? tmp$_0 : emptySet();
  }
  HttpRequestData.prototype.getCapabilityOrNull_1sr7de$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.attributes.getOrNull_yzaw86$(ENGINE_CAPABILITIES_KEY)) != null ? tmp$.get_11rb$(key) : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  HttpRequestData.prototype.toString = function () {
    return 'HttpRequestData(url=' + this.url + ', method=' + this.method + ')';
  };
  HttpRequestData.$metadata$ = {kind: Kind_CLASS, simpleName: 'HttpRequestData', interfaces: []};
  function url$lambda($receiver) {
    return Unit;
  }
  function url_0($receiver, scheme, host, port, path, block) {
    if (scheme === void 0)
      scheme = 'http';
    if (host === void 0)
      host = 'localhost';
    if (port === void 0)
      port = 0;
    if (path === void 0)
      path = '/';
    if (block === void 0)
      block = url$lambda;
    var $receiver_0 = $receiver.url;
    $receiver_0.protocol = URLProtocol.Companion.createOrDefault_61zpoe$(scheme);
    $receiver_0.host = host;
    $receiver_0.port = port;
    $receiver_0.encodedPath = path;
    block($receiver.url);
  }
  function url_1($receiver, urlString) {
    takeFrom($receiver.url, urlString);
  }
  function HttpRequestPipeline(developmentMode) {
    HttpRequestPipeline$Phases_getInstance();
    if (developmentMode === void 0)
      developmentMode = false;
    Pipeline.call(this, [HttpRequestPipeline$Phases_getInstance().Before, HttpRequestPipeline$Phases_getInstance().State, HttpRequestPipeline$Phases_getInstance().Transform, HttpRequestPipeline$Phases_getInstance().Render, HttpRequestPipeline$Phases_getInstance().Send]);
    this.developmentMode_dglch5$_0 = developmentMode;
  }
  function HttpRequestPipeline$Phases() {
    HttpRequestPipeline$Phases_instance = this;
    this.Before = new PipelinePhase('Before');
    this.State = new PipelinePhase('State');
    this.Transform = new PipelinePhase('Transform');
    this.Render = new PipelinePhase('Render');
    this.Send = new PipelinePhase('Send');
  }
  HttpRequestPipeline$Phases.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Phases', interfaces: []};
  var HttpRequestPipeline$Phases_instance = null;
  function HttpRequestPipeline$Phases_getInstance() {
    if (HttpRequestPipeline$Phases_instance === null) {
      new HttpRequestPipeline$Phases();
    }return HttpRequestPipeline$Phases_instance;
  }
  var HttpSendPipeline$Phases_instance = null;
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.request_ixrg4t$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, $receiver, builder, continuation) {
      if (builder === void 0)
        builder = new HttpRequestBuilder_init();
      var $this_0 = new HttpStatement_init(builder, $receiver);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.request_g0tv8i$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, $receiver_0, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.request_hf8dw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function request$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, urlString, block, continuation) {
      if (block === void 0)
        block = request$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.request_2swosf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var url = _.io.ktor.client.request.url_qpqkqe$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function request$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, url_0, block, continuation) {
      if (block === void 0)
        block = request$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, url_0);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.get_ixrg4t$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Get;
      var $this_0 = new HttpStatement_init(builder, $receiver);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.post_ixrg4t$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Post;
      var $this_0 = new HttpStatement_init(builder, $receiver);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.put_ixrg4t$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Put;
      var $this_0 = new HttpStatement_init(builder, $receiver);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.delete_ixrg4t$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Delete;
      var $this_0 = new HttpStatement_init(builder, $receiver);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.options_ixrg4t$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Options;
      var $this_0 = new HttpStatement_init(builder, $receiver);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.patch_ixrg4t$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Patch;
      var $this_0 = new HttpStatement_init(builder, $receiver);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.head_ixrg4t$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Head;
      var $this_0 = new HttpStatement_init(builder, $receiver);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.get_xwttm9$', wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function get$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = get$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Get;
      $receiver_1.body = body;
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.post_xwttm9$', wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function post$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = post$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Post;
      $receiver_1.body = body;
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.put_xwttm9$', wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function put$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = put$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Put;
      $receiver_1.body = body;
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.delete_xwttm9$', wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function delete$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = delete$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Delete;
      $receiver_1.body = body;
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.patch_xwttm9$', wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function patch$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = patch$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Patch;
      $receiver_1.body = body;
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.head_xwttm9$', wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function head$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = head$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Head;
      $receiver_1.body = body;
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.options_xwttm9$', wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function options$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = options$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Options;
      $receiver_1.body = body;
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.get_hf8dw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_jl1sg7$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function get$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, urlString, block, continuation) {
      if (block === void 0)
        block = get$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Get;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.post_hf8dw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_jl1sg7$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function post$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, urlString, block, continuation) {
      if (block === void 0)
        block = post$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Post;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.put_hf8dw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_jl1sg7$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function put$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, urlString, block, continuation) {
      if (block === void 0)
        block = put$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Put;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.delete_hf8dw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_jl1sg7$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function delete$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, urlString, block, continuation) {
      if (block === void 0)
        block = delete$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Delete;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.options_hf8dw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_jl1sg7$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function options$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, urlString, block, continuation) {
      if (block === void 0)
        block = options$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Options;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.patch_hf8dw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_jl1sg7$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function patch$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, urlString, block, continuation) {
      if (block === void 0)
        block = patch$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Patch;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.head_hf8dw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_jl1sg7$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function head$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, urlString, block, continuation) {
      if (block === void 0)
        block = head$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Head;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.get_2swosf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function get$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, url_0, block, continuation) {
      if (block === void 0)
        block = get$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Get;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, url_0);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.post_2swosf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function post$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, url_0, block, continuation) {
      if (block === void 0)
        block = post$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Post;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, url_0);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.put_2swosf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function put$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, url_0, block, continuation) {
      if (block === void 0)
        block = put$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Put;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, url_0);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.patch_2swosf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function patch$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, url_0, block, continuation) {
      if (block === void 0)
        block = patch$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Patch;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, url_0);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.options_2swosf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function options$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, url_0, block, continuation) {
      if (block === void 0)
        block = options$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Options;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, url_0);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.head_2swosf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function head$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, url_0, block, continuation) {
      if (block === void 0)
        block = head$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Head;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, url_0);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.delete_2swosf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function delete$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, url_0, block, continuation) {
      if (block === void 0)
        block = delete$lambda;
      var host_0;
      var body_0;
      host_0 = 'localhost';
      body_0 = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host_0, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Delete;
      $receiver_1.body = body_0;
      takeFrom($receiver_1.url, url_0);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function url_2($receiver, url) {
    takeFrom_1($receiver.url, url);
  }
  var RN_BYTES;
  function FormDataContent(formData) {
    OutgoingContent$ByteArrayContent.call(this);
    this.formData = formData;
    var $receiver = formUrlEncode(this.formData);
    this.content_0 = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length);
    this.contentLength_f2tvnf$_0 = Kotlin.Long.fromInt(this.content_0.length);
    this.contentType_gyve29$_0 = withCharset(ContentType.Application.FormUrlEncoded, charsets.Charsets.UTF_8);
  }
  Object.defineProperty(FormDataContent.prototype, 'contentLength', {configurable: true, get: function () {
    return this.contentLength_f2tvnf$_0;
  }});
  Object.defineProperty(FormDataContent.prototype, 'contentType', {configurable: true, get: function () {
    return this.contentType_gyve29$_0;
  }});
  FormDataContent.prototype.bytes = function () {
    return this.content_0;
  };
  FormDataContent.$metadata$ = {kind: Kind_CLASS, simpleName: 'FormDataContent', interfaces: [OutgoingContent$ByteArrayContent]};
  function MultiPartFormDataContent(parts) {
    OutgoingContent$WriteChannelContent.call(this);
    this.boundary_0 = generateBoundary();
    var $receiver = '--' + this.boundary_0 + '\r' + '\n';
    this.BOUNDARY_BYTES_0 = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length);
    var $receiver_0 = '--' + this.boundary_0 + '--' + '\r' + '\n';
    this.LAST_BOUNDARY_BYTES_0 = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver_0, 0, $receiver_0.length);
    this.BODY_OVERHEAD_SIZE_0 = this.LAST_BOUNDARY_BYTES_0.length;
    this.PART_OVERHEAD_SIZE_0 = (RN_BYTES.length * 2 | 0) + this.BOUNDARY_BYTES_0.length | 0;
    var destination = ArrayList_init_0(collectionSizeOrDefault(parts, 10));
    var tmp$;
    tmp$ = parts.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var transform$result;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var headersBuilder = BytePacketBuilder();
      tmp$_1 = item.headers.entries().iterator();
      while (tmp$_1.hasNext()) {
        var tmp$_5 = tmp$_1.next();
        var key = tmp$_5.key;
        var values = tmp$_5.value;
        writeText(headersBuilder, key + ': ' + joinToString(values, '; '));
        writeFully_0(headersBuilder, RN_BYTES);
      }
      var bodySize = (tmp$_2 = item.headers.get_61zpoe$(http.HttpHeaders.ContentLength)) != null ? toLong(tmp$_2) : null;
      if (Kotlin.isType(item, PartData$FileItem)) {
        var headers = readBytes(headersBuilder.build());
        var size = (tmp$_3 = bodySize != null ? bodySize.add(Kotlin.Long.fromInt(this.PART_OVERHEAD_SIZE_0)) : null) != null ? tmp$_3.add(Kotlin.Long.fromInt(headers.length)) : null;
        transform$result = new PreparedPart(headers, item.provider, size);
      } else if (Kotlin.isType(item, PartData$BinaryItem)) {
        var headers_0 = readBytes(headersBuilder.build());
        var size_0 = (tmp$_4 = bodySize != null ? bodySize.add(Kotlin.Long.fromInt(this.PART_OVERHEAD_SIZE_0)) : null) != null ? tmp$_4.add(Kotlin.Long.fromInt(headers_0.length)) : null;
        transform$result = new PreparedPart(headers_0, item.provider, size_0);
      } else if (Kotlin.isType(item, PartData$FormItem)) {
        var buildPacket$result;
        var builder = BytePacketBuilder(0);
        try {
          writeText(builder, item.value);
          buildPacket$result = builder.build();
        } catch (t) {
          if (Kotlin.isType(t, Throwable)) {
            builder.release();
            throw t;
          } else
            throw t;
        }
        var bytes = readBytes(buildPacket$result);
        var provider = MultiPartFormDataContent$rawParts$lambda$lambda(bytes);
        if (bodySize == null) {
          writeText(headersBuilder, http.HttpHeaders.ContentLength + ': ' + bytes.length);
          writeFully_0(headersBuilder, RN_BYTES);
        }var headers_1 = readBytes(headersBuilder.build());
        var size_1 = bytes.length + this.PART_OVERHEAD_SIZE_0 + headers_1.length | 0;
        transform$result = new PreparedPart(headers_1, provider, Kotlin.Long.fromInt(size_1));
      } else {
        transform$result = Kotlin.noWhenBranchMatched();
      }
      tmp$_0.call(destination, transform$result);
    }
    this.rawParts_0 = destination;
    this.contentLength_egukxp$_0 = null;
    this.contentType_azd2en$_0 = ContentType.MultiPart.FormData.withParameter_puj7f4$('boundary', this.boundary_0);
    var tmp$_6;
    var rawLength = L0;
    tmp$_6 = this.rawParts_0.iterator();
    while (tmp$_6.hasNext()) {
      var part = tmp$_6.next();
      var size_2 = part.size;
      if (size_2 == null) {
        rawLength = null;
        break;
      }rawLength = rawLength != null ? rawLength.add(size_2) : null;
    }
    if (rawLength != null) {
      rawLength = rawLength.add(Kotlin.Long.fromInt(this.BODY_OVERHEAD_SIZE_0));
    }this.contentLength_egukxp$_0 = rawLength;
  }
  Object.defineProperty(MultiPartFormDataContent.prototype, 'contentLength', {configurable: true, get: function () {
    return this.contentLength_egukxp$_0;
  }});
  Object.defineProperty(MultiPartFormDataContent.prototype, 'contentType', {configurable: true, get: function () {
    return this.contentType_azd2en$_0;
  }});
  function Coroutine$writeTo_h3x4ir$($this, channel_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 15;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$part = void 0;
    this.local$$receiver = void 0;
    this.local$closed = void 0;
    this.local$channel = channel_0;
  }
  Coroutine$writeTo_h3x4ir$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$writeTo_h3x4ir$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeTo_h3x4ir$.prototype.constructor = Coroutine$writeTo_h3x4ir$;
  Coroutine$writeTo_h3x4ir$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 12;
            this.local$tmp$ = this.$this.rawParts_0.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 10;
              continue;
            }
            this.local$part = this.local$tmp$.next();
            this.state_0 = 2;
            this.result_0 = writeFully(this.local$channel, this.$this.BOUNDARY_BYTES_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.state_0 = 3;
            this.result_0 = writeFully(this.local$channel, this.local$part.headers, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = writeFully(this.local$channel, RN_BYTES, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$$receiver = this.local$part.provider();
            var tmp$;
            this.local$closed = false;
            this.exceptionState_0 = 6;
            this.state_0 = 5;
            this.result_0 = copyTo_0(this.local$$receiver, this.local$channel, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            tmp$ = Unit;
            this.exceptionState_0 = 12;
            this.finallyPath_0 = [8];
            this.state_0 = 7;
            continue;
          case 6:
            this.finallyPath_0 = [12];
            this.exceptionState_0 = 7;
            var first = this.exception_0;
            if (Kotlin.isType(first, Throwable)) {
              try {
                this.local$closed = true;
                this.local$$receiver.close();
              } catch (second) {
                if (Kotlin.isType(second, Throwable)) {
                  addSuppressedInternal(first, second);
                } else
                  throw second;
              }
              throw first;
            } else
              throw first;
          case 7:
            this.exceptionState_0 = 12;
            if (!this.local$closed) {
              this.local$$receiver.close();
            }
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            this.state_0 = 9;
            this.result_0 = writeFully(this.local$channel, RN_BYTES, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.state_0 = 1;
            continue;
          case 10:
            this.state_0 = 11;
            this.result_0 = writeFully(this.local$channel, this.$this.LAST_BOUNDARY_BYTES_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.exceptionState_0 = 15;
            this.finallyPath_0 = [14];
            this.state_0 = 13;
            continue;
          case 12:
            this.finallyPath_0 = [15];
            this.exceptionState_0 = 13;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              this.local$channel.close_dbl4no$(cause);
            } else
              throw cause;
            this.finallyPath_0 = [14];
            this.state_0 = 13;
            continue;
          case 13:
            this.exceptionState_0 = 15;
            close_0(this.local$channel);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 14:
            return;
          case 15:
            throw this.exception_0;
          default:this.state_0 = 15;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 15) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MultiPartFormDataContent.prototype.writeTo_h3x4ir$ = function (channel_0, continuation_0, suspended) {
    var instance = new Coroutine$writeTo_h3x4ir$(this, channel_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function MultiPartFormDataContent$rawParts$lambda$lambda(closure$bytes) {
    return function () {
      var buildPacket$result;
      var builder = BytePacketBuilder(0);
      try {
        writeFully_0(builder, closure$bytes);
        buildPacket$result = builder.build();
      } catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          builder.release();
          throw t;
        } else
          throw t;
      }
      return buildPacket$result;
    };
  }
  MultiPartFormDataContent.$metadata$ = {kind: Kind_CLASS, simpleName: 'MultiPartFormDataContent', interfaces: [OutgoingContent$WriteChannelContent]};
  function generateBoundary() {
    var $receiver = StringBuilder_init();
    for (var index = 0; index < 32; index++) {
      $receiver.append_pdl1vj$(toString_0(Random.Default.nextInt(), 16));
    }
    return take($receiver.toString(), 70);
  }
  function PreparedPart(headers, provider, size) {
    this.headers = headers;
    this.provider = provider;
    this.size = size;
  }
  PreparedPart.$metadata$ = {kind: Kind_CLASS, simpleName: 'PreparedPart', interfaces: []};
  function Coroutine$copyTo($receiver_0, channel_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.local$buffer = void 0;
    this.local$bytesWritten = void 0;
    this.local$$receiver = $receiver_0;
    this.local$channel = channel_0;
  }
  Coroutine$copyTo.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$copyTo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$copyTo.prototype.constructor = Coroutine$copyTo;
  Coroutine$copyTo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$$receiver, ByteReadPacket)) {
              this.state_0 = 1;
              this.result_0 = this.local$channel.writePacket_3uq2w4$(this.local$$receiver, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            return;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$$receiver.endOfInput) {
              this.state_0 = 10;
              continue;
            }
            var tmp$_0;
            this.state_0 = 4;
            this.result_0 = requestWriteBuffer(this.local$channel, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$buffer = (tmp$_0 = this.result_0) != null ? tmp$_0 : Buffer.Companion.Empty;
            this.local$bytesWritten = 0;
            this.exceptionState_0 = 5;
            var freeSpace = this.local$buffer.memory;
            var startOffset = Kotlin.Long.fromInt(this.local$buffer.writePosition);
            this.local$bytesWritten = readAvailable(this.local$$receiver, freeSpace, startOffset, Kotlin.Long.fromInt(this.local$buffer.limit).subtract(startOffset)).toInt();
            this.local$buffer.commitWritten_za3lpa$(this.local$bytesWritten);
            this.result_0 = this.local$bytesWritten;
            this.exceptionState_0 = 8;
            this.finallyPath_0 = [9];
            this.state_0 = 6;
            continue;
          case 5:
            this.finallyPath_0 = [8];
            this.state_0 = 6;
            continue;
          case 6:
            this.exceptionState_0 = 8;
            this.state_0 = 7;
            this.result_0 = completeWriting(this.local$channel, this.local$buffer, this.local$bytesWritten, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            throw this.exception_0;
          case 9:
            this.state_0 = 3;
            continue;
          case 10:
            return;
          default:this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function copyTo_0($receiver_0, channel_0, continuation_0, suspended) {
    var instance = new Coroutine$copyTo($receiver_0, channel_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.submitForm_k24olv$', wrapFunction(function () {
    var Parameters = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.Parameters;
    var Unit = Kotlin.kotlin.Unit;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var FormDataContent_init = _.io.ktor.client.request.forms.FormDataContent;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function submitForm$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, formParameters, encodeInQuery, block, continuation) {
      if (formParameters === void 0)
        formParameters = Parameters.Companion.Empty;
      if (encodeInQuery === void 0)
        encodeInQuery = false;
      if (block === void 0)
        block = submitForm$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      if (encodeInQuery) {
        $receiver_1.method = HttpMethod.Companion.Get;
        $receiver_1.url.parameters.appendAll_hb0ubp$(formParameters);
      } else {
        $receiver_1.method = HttpMethod.Companion.Post;
        $receiver_1.body = new FormDataContent_init(formParameters);
      }
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.submitForm_32veqj$', wrapFunction(function () {
    var Parameters = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.Parameters;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var FormDataContent_init = _.io.ktor.client.request.forms.FormDataContent;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function submitForm$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, url_0, formParameters, encodeInQuery, block, continuation) {
      if (formParameters === void 0)
        formParameters = Parameters.Companion.Empty;
      if (encodeInQuery === void 0)
        encodeInQuery = false;
      if (block === void 0)
        block = submitForm$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      if (encodeInQuery) {
        $receiver_1.method = HttpMethod.Companion.Get;
        $receiver_1.url.parameters.appendAll_hb0ubp$(formParameters);
      } else {
        $receiver_1.method = HttpMethod.Companion.Post;
        $receiver_1.body = new FormDataContent_init(formParameters);
      }
      url($receiver_1, url_0);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.submitFormWithBinaryData_k1tmp5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var MultiPartFormDataContent_init = _.io.ktor.client.request.forms.MultiPartFormDataContent;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function submitFormWithBinaryData$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, formData, block, continuation) {
      if (block === void 0)
        block = submitFormWithBinaryData$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      $receiver_1.method = HttpMethod.Companion.Post;
      $receiver_1.body = new MultiPartFormDataContent_init(formData);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.submitFormWithBinaryData_i2k1l1$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var MultiPartFormDataContent_init = _.io.ktor.client.request.forms.MultiPartFormDataContent;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function submitFormWithBinaryData$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, url_0, formData, block, continuation) {
      if (block === void 0)
        block = submitFormWithBinaryData$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      $receiver_1.method = HttpMethod.Companion.Post;
      $receiver_1.body = new MultiPartFormDataContent_init(formData);
      url($receiver_1, url_0);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.submitForm_ejo4ot$', wrapFunction(function () {
    var Parameters = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.Parameters;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var FormDataContent_init = _.io.ktor.client.request.forms.FormDataContent;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function submitForm$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, scheme, host, port, path, formParameters, encodeInQuery, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 80;
      if (path === void 0)
        path = '/';
      if (formParameters === void 0)
        formParameters = Parameters.Companion.Empty;
      if (encodeInQuery === void 0)
        encodeInQuery = false;
      if (block === void 0)
        block = submitForm$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      if (encodeInQuery) {
        $receiver_1.method = HttpMethod.Companion.Get;
        $receiver_1.url.parameters.appendAll_hb0ubp$(formParameters);
      } else {
        $receiver_1.method = HttpMethod.Companion.Post;
        $receiver_1.body = new FormDataContent_init(formParameters);
      }
      url($receiver_1, scheme, host, port, path);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.submitFormWithBinaryData_vcnbbn$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var MultiPartFormDataContent_init = _.io.ktor.client.request.forms.MultiPartFormDataContent;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    function submitFormWithBinaryData$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver_0, scheme, host, port, path, formData, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 80;
      if (path === void 0)
        path = '/';
      if (formData === void 0)
        formData = emptyList();
      if (block === void 0)
        block = submitFormWithBinaryData$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      $receiver_1.method = HttpMethod.Companion.Post;
      $receiver_1.body = new MultiPartFormDataContent_init(formData);
      url($receiver_1, scheme, host, port, path);
      block($receiver_1);
      var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement_init))) {
        Kotlin.setCoroutineResult(isT(tmp$_5 = $this_0) ? tmp$_5 : throwCCE(), Kotlin.coroutineReceiver());
      } else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall($this_0.execute(Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE(), Kotlin.coroutineReceiver());
      } else {
        Kotlin.suspendCall($this_0.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function HttpResponse_0() {
  }
  HttpResponse_0.prototype.toString = function () {
    return 'HttpResponse[' + get_request(this).url + ', ' + this.status + ']';
  };
  HttpResponse_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'HttpResponse', interfaces: [CoroutineScope, HttpMessage]};
  function get_request($receiver) {
    return $receiver.call.request;
  }
  function complete($receiver) {
    var tmp$;
    var job = Kotlin.isType(tmp$ = ensureNotNull($receiver.coroutineContext.get_j3r2sn$(Job.Key)), CompletableJob) ? tmp$ : throwCCE();
    job.complete();
  }
  var HttpResponsePipeline$Phases_instance = null;
  var HttpReceivePipeline$Phases_instance = null;
  function HttpResponseContainer(expectedType, response) {
    this.expectedType = expectedType;
    this.response = response;
  }
  HttpResponseContainer.$metadata$ = {kind: Kind_CLASS, simpleName: 'HttpResponseContainer', interfaces: []};
  function HttpResponseContainer_init(expectedType, response, $this) {
    $this = $this || Object.create(HttpResponseContainer.prototype);
    HttpResponseContainer.call($this, new TypeInfo_0(expectedType.type, expectedType.reifiedType, expectedType.kotlinType), response);
    return $this;
  }
  HttpResponseContainer.prototype.component1 = function () {
    return this.expectedType;
  };
  HttpResponseContainer.prototype.component2 = function () {
    return this.response;
  };
  HttpResponseContainer.prototype.copy_ju9ok$ = function (expectedType, response) {
    return new HttpResponseContainer(expectedType === void 0 ? this.expectedType : expectedType, response === void 0 ? this.response : response);
  };
  HttpResponseContainer.prototype.toString = function () {
    return 'HttpResponseContainer(expectedType=' + Kotlin.toString(this.expectedType) + (', response=' + Kotlin.toString(this.response)) + ')';
  };
  HttpResponseContainer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expectedType) | 0;
    result = result * 31 + Kotlin.hashCode(this.response) | 0;
    return result;
  };
  HttpResponseContainer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expectedType, other.expectedType) && Kotlin.equals(this.response, other.response)))));
  };
  function HttpStatement(builder, client) {
    this.builder_0 = builder;
    this.client_0 = client;
    this.checkCapabilities_0();
  }
  function Coroutine$execute_2rh6on$($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.$this = $this;
    this.local$response = void 0;
    this.local$block = block_0;
  }
  Coroutine$execute_2rh6on$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$execute_2rh6on$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_2rh6on$.prototype.constructor = Coroutine$execute_2rh6on$;
  Coroutine$execute_2rh6on$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 1;
            this.result_0 = this.$this.executeUnsafe(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 5;
            this.state_0 = 2;
            this.result_0 = this.local$block(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.exceptionState_0 = 8;
            this.finallyPath_0 = [3];
            this.state_0 = 6;
            this.$returnValue = this.result_0;
            continue;
          case 3:
            return this.$returnValue;
          case 4:
            return;
          case 5:
            this.finallyPath_0 = [8];
            this.state_0 = 6;
            continue;
          case 6:
            this.exceptionState_0 = 8;
            this.state_0 = 7;
            this.result_0 = this.$this.cleanup_abn2de$(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            throw this.exception_0;
          default:this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpStatement.prototype.execute_2rh6on$ = function (block_0, continuation_0, suspended) {
    var instance = new Coroutine$execute_2rh6on$(this, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$HttpStatement$execute$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$HttpStatement$execute$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$HttpStatement$execute$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpStatement$execute$lambda.prototype.constructor = Coroutine$HttpStatement$execute$lambda;
  Coroutine$HttpStatement$execute$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = save(this.local$it.call, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var savedCall = this.result_0;
            return savedCall.response;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HttpStatement$execute$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$HttpStatement$execute$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  HttpStatement.prototype.execute = function (continuation) {
    return this.execute_2rh6on$(HttpStatement$execute$lambda, continuation);
  };
  function Coroutine$receive_287e2$($this, T_0_0, isT_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.$this = $this;
    this.local$response = void 0;
    this.local$T_0 = T_0_0;
    this.local$isT = isT_0;
  }
  Coroutine$receive_287e2$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$receive_287e2$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receive_287e2$.prototype.constructor = Coroutine$receive_287e2$;
  Coroutine$receive_287e2$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(this.local$T_0);
            if (equals(tmp$_4, getKClass(HttpStatement))) {
              return this.local$isT(tmp$_5 = this.$this) ? tmp$_5 : throwCCE();
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse_0))) {
                this.state_0 = 8;
                this.result_0 = this.$this.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = this.$this.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 5;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(this.local$T_0), getReifiedTypeParameterKType(this.local$T_0));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(this.local$T_0), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = this.local$isT(tmp$_7 = this.result_0) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 7;
            this.finallyPath_0 = [3];
            this.state_0 = 6;
            this.$returnValue = this.result_0;
            continue;
          case 3:
            return this.$returnValue;
          case 4:
            this.state_0 = 9;
            continue;
          case 5:
            this.finallyPath_0 = [7];
            this.state_0 = 6;
            continue;
          case 6:
            this.exceptionState_0 = 7;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 7:
            throw this.exception_0;
          case 8:
            return this.local$isT(tmp$_6 = this.result_0) ? tmp$_6 : throwCCE();
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            return;
          default:this.state_0 = 7;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 7) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpStatement.prototype.receive_287e2$ = function (T_0_0, isT_0, continuation_0, suspended) {
    var instance = new Coroutine$receive_287e2$(this, T_0_0, isT_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.statement.HttpStatement.receive_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var throwCCE = Kotlin.throwCCE;
    var HttpStatement = _.io.ktor.client.statement.HttpStatement;
    var equals = Kotlin.equals;
    var HttpResponse = _.io.ktor.client.statement.HttpResponse;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, continuation) {
      var tmp$_4, tmp$_5, tmp$_6;
      tmp$_4 = getKClass(T_0);
      if (equals(tmp$_4, getKClass(HttpStatement)))
        return isT(tmp$_5 = this) ? tmp$_5 : throwCCE();
      else if (equals(tmp$_4, getKClass(HttpResponse))) {
        Kotlin.suspendCall(this.execute(Kotlin.coroutineReceiver()));
        return isT(tmp$_6 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_6 : throwCCE();
      } else {
        Kotlin.suspendCall(this.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_7;
          var tmp$_8 = response.call;
          var typeInfo$result_0;
          typeInfo$break: do {
            try {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
            } catch (_) {
              typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
              break typeInfo$break;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_8.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_7 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_7 : throwCCE(), Kotlin.coroutineReceiver());
          return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
      }
    };
  }));
  function Coroutine$receive_yswr0a$($this, T_0_0, isT_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.$this = $this;
    this.local$response = void 0;
    this.local$T_0 = T_0_0;
    this.local$isT = isT_0;
    this.local$block = block_0;
  }
  Coroutine$receive_yswr0a$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$receive_yswr0a$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receive_yswr0a$.prototype.constructor = Coroutine$receive_yswr0a$;
  Coroutine$receive_yswr0a$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 1;
            this.result_0 = this.$this.executeUnsafe(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 6;
            var tmp$_1;
            var tmp$_2 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(this.local$T_0), getReifiedTypeParameterKType(this.local$T_0));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(this.local$T_0), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_2.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = this.local$isT(tmp$_1 = this.result_0) ? tmp$_1 : throwCCE();
            var result_0 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$block(result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [4];
            this.state_0 = 7;
            this.$returnValue = this.result_0;
            continue;
          case 4:
            return this.$returnValue;
          case 5:
            return;
          case 6:
            this.finallyPath_0 = [9];
            this.state_0 = 7;
            continue;
          case 7:
            this.exceptionState_0 = 9;
            this.state_0 = 8;
            this.result_0 = this.$this.cleanup_abn2de$(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 9:
            throw this.exception_0;
          default:this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 9) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpStatement.prototype.receive_yswr0a$ = function (T_0_0, isT_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$receive_yswr0a$(this, T_0_0, isT_0, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.statement.HttpStatement.receive_yswr0a$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var throwCCE = Kotlin.throwCCE;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    return function (T_0, isT, block, continuation) {
      Kotlin.suspendCall(this.executeUnsafe(Kotlin.coroutineReceiver()));
      var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
      try {
        var tmp$_1;
        var tmp$_2 = response.call;
        var typeInfo$result_0;
        typeInfo$break: do {
          try {
            typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), getReifiedTypeParameterKType(T_0));
          } catch (_) {
            typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(T_0), null);
            break typeInfo$break;
          }
        }
         while (false);
        Kotlin.suspendCall(tmp$_2.receive_qi9ur9$(typeInfo$result_0, Kotlin.coroutineReceiver()));
        Kotlin.setCoroutineResult(isT(tmp$_1 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_1 : throwCCE(), Kotlin.coroutineReceiver());
        var result_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        Kotlin.suspendCall(block(result_0, Kotlin.coroutineReceiver()));
        return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
      }finally {
        Kotlin.suspendCall(this.cleanup_abn2de$(response, Kotlin.coroutineReceiver()));
      }
    };
  }));
  function Coroutine$executeUnsafe($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$executeUnsafe.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$executeUnsafe.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$executeUnsafe.prototype.constructor = Coroutine$executeUnsafe;
  Coroutine$executeUnsafe.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var builder = (new HttpRequestBuilder()).takeFromWithExecutionContext_s9rlw$(this.$this.builder_0);
            this.state_0 = 2;
            this.result_0 = this.$this.client_0.execute_s9rlw$(builder, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var call = this.result_0;
            return call.response;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpStatement.prototype.executeUnsafe = function (continuation_0, suspended) {
    var instance = new Coroutine$executeUnsafe(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$cleanup_abn2de$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$cleanup_abn2de$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$cleanup_abn2de$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$cleanup_abn2de$.prototype.constructor = Coroutine$cleanup_abn2de$;
  Coroutine$cleanup_abn2de$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var job = Kotlin.isType(tmp$ = ensureNotNull(this.local$$receiver.coroutineContext.get_j3r2sn$(Job.Key)), CompletableJob) ? tmp$ : throwCCE();
            job.complete();
            try {
              cancel_1(this.local$$receiver.content);
            } catch (_) {
              if (!Kotlin.isType(_, Throwable))
                throw _;
            }

            this.state_0 = 2;
            this.result_0 = job.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpStatement.prototype.cleanup_abn2de$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$cleanup_abn2de$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HttpStatement.prototype.checkCapabilities_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    if ((tmp$_0 = (tmp$ = this.builder_0.attributes.getOrNull_yzaw86$(ENGINE_CAPABILITIES_KEY)) != null ? tmp$.keys : null) != null) {
      var destination = ArrayList_init();
      var tmp$_3;
      tmp$_3 = tmp$_0.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (Kotlin.isType(element, HttpClientFeature))
          destination.add_11rb$(element);
      }
      tmp$_2 = destination;
    } else
      tmp$_2 = null;
    if ((tmp$_1 = tmp$_2) != null) {
      var tmp$_4;
      tmp$_4 = tmp$_1.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        if (feature(this.client_0, element_0) == null) {
          var message = 'Consider installing ' + element_0 + ' feature because the request requires it to be installed';
          throw IllegalArgumentException_init(message.toString());
        }}
    }};
  HttpStatement.prototype.toString = function () {
    return 'HttpStatement[' + this.builder_0.url.buildString() + ']';
  };
  HttpStatement.$metadata$ = {kind: Kind_CLASS, simpleName: 'HttpStatement', interfaces: []};
  function Coroutine$observable$lambda(closure$contentLength_0, this$observable_0, closure$listener_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 11;
    this.local$closure$contentLength = closure$contentLength_0;
    this.local$this$observable = this$observable_0;
    this.local$closure$listener = closure$listener_0;
    this.local$$receiver = void 0;
    this.local$instance = void 0;
    this.local$this$observable_0 = void 0;
    this.local$closure$listener_0 = void 0;
    this.local$total = void 0;
    this.local$bytesSend = void 0;
    this.local$read = void 0;
    this.local$$receiver_0 = $receiver_0;
  }
  Coroutine$observable$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$observable$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$observable$lambda.prototype.constructor = Coroutine$observable$lambda;
  Coroutine$observable$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = pool.ByteArrayPool;
            this.local$instance = this.local$$receiver.borrow();
            this.exceptionState_0 = 9;
            var closure$contentLength = this.local$closure$contentLength;
            this.local$this$observable_0 = this.local$this$observable;
            this.local$closure$listener_0 = this.local$closure$listener;
            this.local$total = closure$contentLength != null ? closure$contentLength : L_1;
            this.local$bytesSend = L0;
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$this$observable_0.isClosedForRead) {
              this.state_0 = 5;
              continue;
            }
            this.state_0 = 2;
            this.result_0 = readAvailable_0(this.local$this$observable_0, this.local$instance, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$read = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver_0.channel.writeFully_mj6st8$(this.local$instance, 0, this.local$read, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$bytesSend = this.local$bytesSend.add(Kotlin.Long.fromInt(this.local$read));
            this.state_0 = 4;
            this.result_0 = this.local$closure$listener_0(this.local$bytesSend, this.local$total, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            var closedCause = this.local$this$observable_0.closedCause;
            this.local$$receiver_0.channel.close_dbl4no$(closedCause);
            if (closedCause == null && equals(this.local$bytesSend, L0)) {
              this.state_0 = 6;
              this.result_0 = this.local$closure$listener_0(this.local$bytesSend, this.local$total, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.exceptionState_0 = 11;
            this.finallyPath_0 = [8];
            this.state_0 = 10;
            continue;
          case 8:
            return Unit;
          case 9:
            this.finallyPath_0 = [11];
            this.state_0 = 10;
            continue;
          case 10:
            this.exceptionState_0 = 11;
            this.local$$receiver.recycle_trkh7z$(this.local$instance);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 11:
            throw this.exception_0;
          default:this.state_0 = 11;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 11) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function observable$lambda(closure$contentLength_0, this$observable_0, closure$listener_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$observable$lambda(closure$contentLength_0, this$observable_0, closure$listener_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function observable($receiver, context, contentLength, listener) {
    return writer(coroutines.GlobalScope, context, true, observable$lambda(contentLength, $receiver, listener)).channel;
  }
  var DEFAULT_HTTP_POOL_SIZE;
  var DEFAULT_HTTP_BUFFER_SIZE;
  function CacheControl_0() {
    CacheControl_instance_0 = this;
    this.MAX_AGE = 'max-age';
    this.MIN_FRESH = 'min-fresh';
    this.ONLY_IF_CACHED = 'only-if-cached';
    this.MAX_STALE = 'max-stale';
    this.NO_CACHE = 'no-cache';
    this.NO_STORE = 'no-store';
    this.NO_TRANSFORM = 'no-transform';
    this.MUST_REVALIDATE = 'must-revalidate';
    this.PUBLIC = 'public';
    this.PRIVATE = 'private';
    this.PROXY_REVALIDATE = 'proxy-revalidate';
    this.S_MAX_AGE = 's-maxage';
  }
  CacheControl_0.prototype.getMAX_AGE = function () {
    return this.MAX_AGE;
  };
  CacheControl_0.prototype.getMIN_FRESH = function () {
    return this.MIN_FRESH;
  };
  CacheControl_0.prototype.getONLY_IF_CACHED = function () {
    return this.ONLY_IF_CACHED;
  };
  CacheControl_0.prototype.getMAX_STALE = function () {
    return this.MAX_STALE;
  };
  CacheControl_0.prototype.getNO_CACHE = function () {
    return this.NO_CACHE;
  };
  CacheControl_0.prototype.getNO_STORE = function () {
    return this.NO_STORE;
  };
  CacheControl_0.prototype.getNO_TRANSFORM = function () {
    return this.NO_TRANSFORM;
  };
  CacheControl_0.prototype.getMUST_REVALIDATE = function () {
    return this.MUST_REVALIDATE;
  };
  CacheControl_0.prototype.getPUBLIC = function () {
    return this.PUBLIC;
  };
  CacheControl_0.prototype.getPRIVATE = function () {
    return this.PRIVATE;
  };
  CacheControl_0.prototype.getPROXY_REVALIDATE = function () {
    return this.PROXY_REVALIDATE;
  };
  CacheControl_0.prototype.getS_MAX_AGE = function () {
    return this.S_MAX_AGE;
  };
  CacheControl_0.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CacheControl', interfaces: []};
  var CacheControl_instance_0 = null;
  function CacheControl_getInstance_0() {
    if (CacheControl_instance_0 === null) {
      new CacheControl_0();
    }return CacheControl_instance_0;
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    OutgoingContent$NoContent.call(this);
    this.contentLength_89rfwp$_0 = L0;
  }
  Object.defineProperty(EmptyContent.prototype, 'contentLength', {configurable: true, get: function () {
    return this.contentLength_89rfwp$_0;
  }});
  EmptyContent.prototype.toString = function () {
    return 'EmptyContent';
  };
  EmptyContent.$metadata$ = {kind: Kind_OBJECT, simpleName: 'EmptyContent', interfaces: [OutgoingContent$NoContent]};
  var EmptyContent_instance = null;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance === null) {
      new EmptyContent();
    }return EmptyContent_instance;
  }
  function wrapHeaders$ObjectLiteral(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$NoContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'contentLength', {configurable: true, get: function () {
    return this.this$wrapHeaders.contentLength;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'contentType', {configurable: true, get: function () {
    return this.this$wrapHeaders.contentType;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'status', {configurable: true, get: function () {
    return this.this$wrapHeaders.status;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'headers', {configurable: true, get: function () {
    return this.headers_byaa2p$_0;
  }});
  wrapHeaders$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [OutgoingContent$NoContent]};
  function wrapHeaders$ObjectLiteral_0(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$ReadChannelContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'contentLength', {configurable: true, get: function () {
    return this.this$wrapHeaders.contentLength;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'contentType', {configurable: true, get: function () {
    return this.this$wrapHeaders.contentType;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'status', {configurable: true, get: function () {
    return this.this$wrapHeaders.status;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'headers', {configurable: true, get: function () {
    return this.headers_byaa2p$_0;
  }});
  wrapHeaders$ObjectLiteral_0.prototype.readFrom = function () {
    return this.this$wrapHeaders.readFrom();
  };
  wrapHeaders$ObjectLiteral_0.prototype.readFrom_6z6t3e$ = function (range) {
    return this.this$wrapHeaders.readFrom_6z6t3e$(range);
  };
  wrapHeaders$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [OutgoingContent$ReadChannelContent]};
  function wrapHeaders$ObjectLiteral_1(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$WriteChannelContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'contentLength', {configurable: true, get: function () {
    return this.this$wrapHeaders.contentLength;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'contentType', {configurable: true, get: function () {
    return this.this$wrapHeaders.contentType;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'status', {configurable: true, get: function () {
    return this.this$wrapHeaders.status;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'headers', {configurable: true, get: function () {
    return this.headers_byaa2p$_0;
  }});
  wrapHeaders$ObjectLiteral_1.prototype.writeTo_h3x4ir$ = function (channel, continuation) {
    return this.this$wrapHeaders.writeTo_h3x4ir$(channel, continuation);
  };
  wrapHeaders$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [OutgoingContent$WriteChannelContent]};
  function wrapHeaders$ObjectLiteral_2(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$ByteArrayContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'contentLength', {configurable: true, get: function () {
    return this.this$wrapHeaders.contentLength;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'contentType', {configurable: true, get: function () {
    return this.this$wrapHeaders.contentType;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'status', {configurable: true, get: function () {
    return this.this$wrapHeaders.status;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'headers', {configurable: true, get: function () {
    return this.headers_byaa2p$_0;
  }});
  wrapHeaders$ObjectLiteral_2.prototype.bytes = function () {
    return this.this$wrapHeaders.bytes();
  };
  wrapHeaders$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [OutgoingContent$ByteArrayContent]};
  function wrapHeaders$ObjectLiteral_3(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$ProtocolUpgrade.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_3.prototype, 'contentLength', {configurable: true, get: function () {
    return this.this$wrapHeaders.contentLength;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral_3.prototype, 'contentType', {configurable: true, get: function () {
    return this.this$wrapHeaders.contentType;
  }});
  Object.defineProperty(wrapHeaders$ObjectLiteral_3.prototype, 'headers', {configurable: true, get: function () {
    return this.headers_byaa2p$_0;
  }});
  wrapHeaders$ObjectLiteral_3.prototype.upgrade_h1mv0l$ = function (input, output, engineContext, userContext, continuation) {
    return this.this$wrapHeaders.upgrade_h1mv0l$(input, output, engineContext, userContext, continuation);
  };
  wrapHeaders$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [OutgoingContent$ProtocolUpgrade]};
  function wrapHeaders($receiver, block) {
    if (Kotlin.isType($receiver, OutgoingContent$NoContent))
      return new wrapHeaders$ObjectLiteral($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$ReadChannelContent))
      return new wrapHeaders$ObjectLiteral_0($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$WriteChannelContent))
      return new wrapHeaders$ObjectLiteral_1($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$ByteArrayContent))
      return new wrapHeaders$ObjectLiteral_2($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$ProtocolUpgrade))
      return new wrapHeaders$ObjectLiteral_3($receiver, block);
    else
      return Kotlin.noWhenBranchMatched();
  }
  function sharedMap() {
    if (util.PlatformUtils.IS_NATIVE) {
      return new ConcurrentMap();
    }return LinkedHashMap_init();
  }
  function sharedList() {
    if (util.PlatformUtils.IS_NATIVE) {
      return new ConcurrentList();
    }return ArrayList_init();
  }
  function buildHeaders$lambda($receiver) {
    return Unit;
  }
  function buildHeaders(block) {
    if (block === void 0)
      block = buildHeaders$lambda;
    var $receiver = new HeadersBuilder_init();
    block($receiver);
    return $receiver.build();
  }
  var ProxyBuilder_instance = null;
  var Js_instance = null;
  function clientDispatcher($receiver, threadCount, dispatcherName) {
    if (dispatcherName === void 0)
      dispatcherName = 'ktor-client-dispatcher';
    return $receiver.Unconfined;
  }
  function checkCoroutinesVersion() {
  }
  function unwrapCancellationException($receiver) {
    return $receiver;
  }
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  var package$call = package$client.call || (package$client.call = {});
  Object.defineProperty(HttpClientCall_0, 'Companion', {get: HttpClientCall$Companion_getInstance});
  package$call.HttpClientCall = HttpClientCall_0;
  $$importsForInline$$['ktor-ktor-utils-js-legacy'] = $module$ktor_ktor_utils_js_legacy;
  package$call.DoubleReceiveException = DoubleReceiveException;
  package$call.NoTransformationFoundException = NoTransformationFoundException;
  package$call.SavedHttpCall = SavedHttpCall;
  package$call.SavedHttpRequest = SavedHttpRequest;
  package$call.SavedHttpResponse = SavedHttpResponse;
  package$call.save_iicrl5$ = save;
  package$call.TypeInfo = TypeInfo_0;
  package$call.instanceOf_ofcvxk$ = instanceOf_0;
  var package$engine = package$client.engine || (package$client.engine = {});
  package$engine.HttpClientEngineCapability = HttpClientEngineCapability;
  package$engine.KtorCallContextElement = KtorCallContextElement;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  var package$features = package$client.features || (package$client.features = {});
  package$features.HttpClientFeature = HttpClientFeature;
  package$features.feature_ccg70z$ = feature;
  Object.defineProperty(HttpTimeout$HttpTimeoutCapabilityConfiguration, 'Companion', {get: HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_getInstance});
  HttpTimeout.HttpTimeoutCapabilityConfiguration_init_oq4a4q$ = HttpTimeout$HttpTimeout$HttpTimeoutCapabilityConfiguration_init;
  HttpTimeout.HttpTimeoutCapabilityConfiguration = HttpTimeout$HttpTimeoutCapabilityConfiguration;
  Object.defineProperty(HttpTimeout, 'Feature', {get: HttpTimeout$Feature_getInstance});
  package$features.HttpTimeout = HttpTimeout;
  package$features.HttpRequestTimeoutException = HttpRequestTimeoutException;
  $$importsForInline$$['ktor-ktor-http-js-legacy'] = $module$ktor_ktor_http_js_legacy;
  var package$request = package$client.request || (package$client.request = {});
  package$request.DefaultHttpRequest = DefaultHttpRequest;
  package$request.HttpRequest = HttpRequest;
  Object.defineProperty(HttpRequestBuilder, 'Companion', {get: HttpRequestBuilder$Companion_getInstance});
  package$request.HttpRequestBuilder = HttpRequestBuilder;
  package$request.HttpRequestData = HttpRequestData;
  package$request.url_3rzbk2$ = url_0;
  package$request.url_g8iu3v$ = url_1;
  Object.defineProperty(HttpRequestPipeline, 'Phases', {get: HttpRequestPipeline$Phases_getInstance});
  package$request.HttpRequestPipeline = HttpRequestPipeline;
  package$request.url_qpqkqe$ = url_2;
  var package$utils = package$client.utils || (package$client.utils = {});
  var package$forms = package$request.forms || (package$request.forms = {});
  package$forms.FormDataContent = FormDataContent;
  package$forms.MultiPartFormDataContent = MultiPartFormDataContent;
  var package$statement = package$client.statement || (package$client.statement = {});
  package$statement.HttpResponse = HttpResponse_0;
  package$statement.get_request_abn2de$ = get_request;
  package$statement.complete_abn2de$ = complete;
  package$statement.HttpResponseContainer_init_487ue8$ = HttpResponseContainer_init;
  package$statement.HttpResponseContainer = HttpResponseContainer;
  package$statement.HttpStatement = HttpStatement;
  package$utils.observable_joo1j6$ = observable;
  Object.defineProperty(package$utils, 'DEFAULT_HTTP_POOL_SIZE', {get: function () {
    return DEFAULT_HTTP_POOL_SIZE;
  }});
  Object.defineProperty(package$utils, 'DEFAULT_HTTP_BUFFER_SIZE', {get: function () {
    return DEFAULT_HTTP_BUFFER_SIZE;
  }});
  Object.defineProperty(package$utils, 'CacheControl', {get: CacheControl_getInstance_0});
  Object.defineProperty(package$utils, 'EmptyContent', {get: EmptyContent_getInstance});
  package$utils.wrapHeaders_j1n6iz$ = wrapHeaders;
  package$utils.sharedMap_aejgjo$ = sharedMap;
  package$utils.sharedList_tnbmyv$ = sharedList;
  package$utils.buildHeaders_g6xk4w$ = buildHeaders;
  package$utils.clientDispatcher_b7msz$ = clientDispatcher;
  package$utils.checkCoroutinesVersion_8be2vx$ = checkCoroutinesVersion;
  package$utils.unwrapCancellationException_dbl4o4$ = unwrapCancellationException;
  KtorCallContextElement.prototype.fold_3cc69b$ = CoroutineContext$Element.prototype.fold_3cc69b$;
  KtorCallContextElement.prototype.get_j3r2sn$ = CoroutineContext$Element.prototype.get_j3r2sn$;
  KtorCallContextElement.prototype.minusKey_yeqjby$ = CoroutineContext$Element.prototype.minusKey_yeqjby$;
  KtorCallContextElement.prototype.plus_1fupul$ = CoroutineContext$Element.prototype.plus_1fupul$;
  BodyProgress$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  DataConversion_0.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  DefaultRequest$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  ExpectSuccess$Companion.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpCallValidator$Companion.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpPlainText$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpRedirect$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpRequestLifecycle$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpSend$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpTimeout$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  UserAgent$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpCache$Companion.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpCookies$Companion.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  ResponseObserver$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  WebSockets$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  Object.defineProperty(DefaultHttpRequest.prototype, 'executionContext', Object.getOwnPropertyDescriptor(HttpRequest.prototype, 'executionContext'));
  CALL_COROUTINE = new CoroutineName('call-context');
  ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
  DEFAULT_CAPABILITIES = setOf(HttpTimeout$Feature_getInstance());
  KTOR_DEFAULT_USER_AGENT = 'Ktor client';
  UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
  DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
  ValidateMark = new AttributeKey('ValidateMark');
  NO_RESPONSE_TEXT = '<no response text provided>';
  DEPRECATED_EXCEPTION_CTOR = 'Please, provide response text in constructor';
  ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
  FEATURE_INSTALLED_LIST = new AttributeKey('ApplicationFeatureRegistry');
  ALLOWED_FOR_REDIRECT = setOf_0([HttpMethod.Companion.Get, HttpMethod.Companion.Head]);
  WEBSOCKET_VERSION = '13';
  NONCE_SIZE = 16;
  REQUEST_EXTENSIONS_KEY = new AttributeKey('Websocket extensions');
  RN_BYTES = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), '\r\n', 0, '\r\n'.length);
  DEFAULT_HTTP_POOL_SIZE = 1000;
  DEFAULT_HTTP_BUFFER_SIZE = 4096;
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core-js-legacy.js.map
