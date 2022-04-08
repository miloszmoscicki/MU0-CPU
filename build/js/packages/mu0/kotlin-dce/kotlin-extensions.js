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
  var getCallableRef = Kotlin.getCallableRef;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  function invoke_3($receiver, strings, values) {
    var tmp$;
    return (tmp$ = $receiver).call.apply(tmp$, [null, strings].concat(values));
  }
  function invoke_5($receiver, values) {
    return invoke_3($receiver, [], values.slice());
  }
  var package$kotlinext = _.kotlinext || (_.kotlinext = {});
  var package$js = package$kotlinext.js || (package$kotlinext.js = {});
  package$js.invoke_z5wujd$ = invoke_3;
  package$js.invoke_9p99ed$ = invoke_5;
  return _;
}));

//# sourceMappingURL=kotlin-extensions.js.map
