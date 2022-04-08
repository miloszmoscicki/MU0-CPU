(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-csstype', 'kotlin-extensions', '@emotion/css', 'kotlin-emotion'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-csstype'), require('kotlin-extensions'), require('@emotion/css'), require('kotlin-emotion'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-css'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-css'.");
    }if (typeof this['kotlin-csstype'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-css'. Its dependency 'kotlin-csstype' was not found. Please, check whether 'kotlin-csstype' is loaded prior to 'kotlin-react-css'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-css'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-react-css'.");
    }if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-css'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'kotlin-react-css'.");
    }if (typeof this['kotlin-emotion'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-css'. Its dependency 'kotlin-emotion' was not found. Please, check whether 'kotlin-emotion' is loaded prior to 'kotlin-react-css'.");
    }root['kotlin-react-css'] = factory(typeof this['kotlin-react-css'] === 'undefined' ? {} : this['kotlin-react-css'], kotlin, this['kotlin-csstype'], this['kotlin-extensions'], this['@emotion/css'], this['kotlin-emotion']);
  }
}(this, function (_, Kotlin, $module$kotlin_csstype, $module$kotlin_extensions, $module$_emotion_css, $module$kotlin_emotion) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var wrapFunction = Kotlin.wrapFunction;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  return _;
}));

//# sourceMappingURL=kotlin-react-css.js.map
