(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-extensions'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-extensions'.");
    }root['kotlin-extensions'] = factory(typeof this['kotlin-extensions'] === 'undefined' ? {} : this['kotlin-extensions'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var getCallableRef = Kotlin.getCallableRef;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  function requireAll(context) {
    var $receiver = context.keys();
    var action = getCallableRef('invoke', function ($receiver, p1) {
      return invoke_0($receiver, p1);
    }.bind(null, context));
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      action(element);
    }
  }
  function invoke($receiver) {
    return $receiver();
  }
  function invoke_0($receiver, arg) {
    return $receiver(arg);
  }
  function invoke_1($receiver, arg1, arg2) {
    return $receiver(arg1, arg2);
  }
  function invoke_2($receiver, arg1, arg2, arg3) {
    return $receiver(arg1, arg2, arg3);
  }
  var jso = defineInlineFunction('kotlin-extensions.kotlinext.js.jso_30y1fr$', function () {
    return {};
  });
  var jso_0 = defineInlineFunction('kotlin-extensions.kotlinext.js.jso_dajwzo$', function (builder) {
    var $receiver = {};
    builder($receiver);
    return $receiver;
  });
  var js = defineInlineFunction('kotlin-extensions.kotlinext.js.js_5ij4lk$', function (builder) {
    var $receiver = {};
    builder($receiver);
    return $receiver;
  });
  function clone(obj) {
    return Object.assign({}, obj);
  }
  var assign = defineInlineFunction('kotlin-extensions.kotlinext.js.assign_bjvcay$', wrapFunction(function () {
    var clone = _.kotlinext.js.clone_issdgt$;
    return function (obj, builder) {
      var $receiver = clone(obj);
      builder($receiver);
      return $receiver;
    };
  }));
  function toPlainObjectStripNull(obj) {
    var $receiver = {};
    var tmp$, tmp$_0;
    tmp$ = Object.keys(obj);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var key = tmp$[tmp$_0];
      var value = obj[key];
      if (value != null)
        $receiver[key] = value;
    }
    return $receiver;
  }
  function asJsObject($receiver) {
    return $receiver;
  }
  function getOwnPropertyNames($receiver) {
    return Object.getOwnPropertyNames($receiver);
  }
  function invoke_3($receiver, strings, values) {
    var tmp$;
    return (tmp$ = $receiver).call.apply(tmp$, [null, strings].concat(values));
  }
  function invoke_4($receiver, string, values) {
    return invoke_3($receiver, [string], values.slice());
  }
  function invoke_5($receiver, values) {
    return invoke_3($receiver, [], values.slice());
  }
  function iterator($receiver) {
    return new JsIteratorAdapter($receiver);
  }
  function JsIteratorAdapter(source) {
    this.source_0 = source;
    this.lastResult_0 = this.source_0.next();
  }
  JsIteratorAdapter.prototype.next = function () {
    if (!!this.lastResult_0.done) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var value = this.lastResult_0.value;
    this.lastResult_0 = this.source_0.next();
    return value;
  };
  JsIteratorAdapter.prototype.hasNext = function () {
    return !this.lastResult_0.done;
  };
  JsIteratorAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsIteratorAdapter',
    interfaces: [Iterator]
  };
  function JsPair() {
  }
  JsPair.prototype.component1 = defineInlineFunction('kotlin-extensions.kotlinx.js.JsPair.component1', function () {
    return this[0];
  });
  JsPair.prototype.component2 = defineInlineFunction('kotlin-extensions.kotlinx.js.JsPair.component2', function () {
    return this[1];
  });
  JsPair.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsPair',
    interfaces: []
  };
  var JsPair_0 = defineInlineFunction('kotlin-extensions.kotlinx.js.JsPair_o5fpdy$', function (a, b) {
    return [a, b];
  });
  function Record() {
  }
  Record.prototype.get_trkh7z$ = defineInlineFunction('kotlin-extensions.kotlinx.js.Record.get_trkh7z$', function (key) {
    return this[key];
  });
  Record.prototype.set_wuswzg$ = defineInlineFunction('kotlin-extensions.kotlinx.js.Record.set_wuswzg$', function (key, value) {
    this[key] = value;
  });
  Record.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Record',
    interfaces: []
  };
  function Record_0(block) {
    var $receiver = {};
    block($receiver);
    return $receiver;
  }
  var jso_1 = defineInlineFunction('kotlin-extensions.kotlinx.js.jso_30y1fr$', function () {
    return {};
  });
  var jso_2 = defineInlineFunction('kotlin-extensions.kotlinx.js.jso_dajwzo$', function (block) {
    var $receiver = {};
    block($receiver);
    return $receiver;
  });
  var package$kotlinext = _.kotlinext || (_.kotlinext = {});
  var package$js = package$kotlinext.js || (package$kotlinext.js = {});
  package$js.requireAll_spd3bs$ = requireAll;
  package$js.invoke_o1mxae$ = invoke;
  package$js.invoke_nbfla$ = invoke_0;
  package$js.invoke_xbkh9p$ = invoke_1;
  package$js.invoke_ahlu6z$ = invoke_2;
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$js_0 = package$kotlinx.js || (package$kotlinx.js = {});
  package$js_0.jso_30y1fr$ = jso_1;
  $$importsForInline$$['kotlin-extensions'] = _;
  package$js.jso_30y1fr$ = jso;
  package$js_0.jso_dajwzo$ = jso_2;
  package$js.jso_dajwzo$ = jso_0;
  package$js.js_5ij4lk$ = js;
  package$js.clone_issdgt$ = clone;
  package$js.assign_bjvcay$ = assign;
  package$js.toPlainObjectStripNull_za3rmp$ = toPlainObjectStripNull;
  package$js.asJsObject_s8jyvk$ = asJsObject;
  package$js.getOwnPropertyNames_s8jyvk$ = getOwnPropertyNames;
  package$js.invoke_z5wujd$ = invoke_3;
  package$js.invoke_dgimx$ = invoke_4;
  package$js.invoke_9p99ed$ = invoke_5;
  package$js_0.iterator_8js8x9$ = iterator;
  package$js_0.JsPair = JsPair;
  package$js_0.JsPair_o5fpdy$ = JsPair_0;
  package$js_0.Record = Record;
  package$js_0.Record_a411ad$ = Record_0;
  Kotlin.defineModule('kotlin-extensions', _);
  return _;
}));
