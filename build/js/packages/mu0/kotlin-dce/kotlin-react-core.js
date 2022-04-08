(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-core'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-core'.");
    }root['kotlin-react-core'] = factory(typeof this['kotlin-react-core'] === 'undefined' ? {} : this['kotlin-react-core'], kotlin, react);
  }
}(this, function (_, Kotlin, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Unit = Kotlin.kotlin.Unit;
  var wrapFunction = Kotlin.wrapFunction;
  var Annotation = Kotlin.kotlin.Annotation;
  var isValidElement = $module$react.isValidElement;
  $$importsForInline$$.react = $module$react;
  return _;
}));

//# sourceMappingURL=kotlin-react-core.js.map
