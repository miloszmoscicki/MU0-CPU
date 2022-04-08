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
  var RuleBuilder = $module$kotlin_csstype.csstype.RuleBuilder;
  var PseudosRuleBuilder = $module$kotlin_csstype.csstype.PseudosRuleBuilder;
  var wrapFunction = Kotlin.wrapFunction;
  function PropertiesBuilder() {
  }
  PropertiesBuilder.prototype.invoke_7l8rv6$ = defineInlineFunction('kotlin-react-css.react.css.PropertiesBuilder.invoke_7l8rv6$', function ($receiver, block) {
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  PropertiesBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertiesBuilder',
    interfaces: [PseudosRuleBuilder, RuleBuilder]
  };
  var className = defineInlineFunction('kotlin-react-css.react.css.className_rsj6gz$', wrapFunction(function () {
    var css = _.$$importsForInline$$['@emotion/css'].css;
    return function (block) {
      var $receiver = {};
      block($receiver);
      return css($receiver);
    };
  }));
  var css = defineInlineFunction('kotlin-react-css.react.css.css_ck0762$', wrapFunction(function () {
    var css = _.$$importsForInline$$['@emotion/css'].css;
    return function ($receiver, block) {
      var $receiver_0 = {};
      block($receiver_0);
      $receiver.className = css($receiver_0);
    };
  }));
  var css_0 = defineInlineFunction('kotlin-react-css.react.css.css_hbagfw$', wrapFunction(function () {
    var cx = _.$$importsForInline$$['@emotion/css'].cx;
    var css = _.$$importsForInline$$['@emotion/css'].css;
    return function ($receiver, classNames, block) {
      var $receiver_0 = {};
      block($receiver_0);
      var element = css($receiver_0);
      $receiver.className = cx.apply(null, classNames.concat([element]));
    };
  }));
  $$importsForInline$$['kotlin-csstype'] = $module$kotlin_csstype;
  var package$react = _.react || (_.react = {});
  var package$css = package$react.css || (package$react.css = {});
  package$css.PropertiesBuilder = PropertiesBuilder;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  $$importsForInline$$['kotlin-emotion'] = $module$kotlin_emotion;
  $$importsForInline$$['@emotion/css'] = $module$_emotion_css;
  package$css.className_rsj6gz$ = className;
  $$importsForInline$$['kotlin-react-css'] = _;
  package$css.css_ck0762$ = css;
  package$css.css_hbagfw$ = css_0;
  PropertiesBuilder.prototype.invoke_thkxg3$ = RuleBuilder.prototype.invoke_thkxg3$;
  PropertiesBuilder.prototype.active_oh3mgy$ = PseudosRuleBuilder.prototype.active_oh3mgy$;
  PropertiesBuilder.prototype.after_oh3mgy$ = PseudosRuleBuilder.prototype.after_oh3mgy$;
  PropertiesBuilder.prototype.anyLink_oh3mgy$ = PseudosRuleBuilder.prototype.anyLink_oh3mgy$;
  PropertiesBuilder.prototype.backdrop_oh3mgy$ = PseudosRuleBuilder.prototype.backdrop_oh3mgy$;
  PropertiesBuilder.prototype.before_oh3mgy$ = PseudosRuleBuilder.prototype.before_oh3mgy$;
  PropertiesBuilder.prototype.blank_oh3mgy$ = PseudosRuleBuilder.prototype.blank_oh3mgy$;
  PropertiesBuilder.prototype.checked_oh3mgy$ = PseudosRuleBuilder.prototype.checked_oh3mgy$;
  PropertiesBuilder.prototype.cue_3dp6ds$ = PseudosRuleBuilder.prototype.cue_3dp6ds$;
  PropertiesBuilder.prototype.cue_oh3mgy$ = PseudosRuleBuilder.prototype.cue_oh3mgy$;
  PropertiesBuilder.prototype.cueRegion_3dp6ds$ = PseudosRuleBuilder.prototype.cueRegion_3dp6ds$;
  PropertiesBuilder.prototype.cueRegion_oh3mgy$ = PseudosRuleBuilder.prototype.cueRegion_oh3mgy$;
  PropertiesBuilder.prototype.current_oh3mgy$ = PseudosRuleBuilder.prototype.current_oh3mgy$;
  PropertiesBuilder.prototype.default_oh3mgy$ = PseudosRuleBuilder.prototype.default_oh3mgy$;
  PropertiesBuilder.prototype.defined_oh3mgy$ = PseudosRuleBuilder.prototype.defined_oh3mgy$;
  PropertiesBuilder.prototype.dir_3dp6ds$ = PseudosRuleBuilder.prototype.dir_3dp6ds$;
  PropertiesBuilder.prototype.disabled_oh3mgy$ = PseudosRuleBuilder.prototype.disabled_oh3mgy$;
  PropertiesBuilder.prototype.empty_oh3mgy$ = PseudosRuleBuilder.prototype.empty_oh3mgy$;
  PropertiesBuilder.prototype.enabled_oh3mgy$ = PseudosRuleBuilder.prototype.enabled_oh3mgy$;
  PropertiesBuilder.prototype.first_oh3mgy$ = PseudosRuleBuilder.prototype.first_oh3mgy$;
  PropertiesBuilder.prototype.firstChild_oh3mgy$ = PseudosRuleBuilder.prototype.firstChild_oh3mgy$;
  PropertiesBuilder.prototype.firstLetter_oh3mgy$ = PseudosRuleBuilder.prototype.firstLetter_oh3mgy$;
  PropertiesBuilder.prototype.firstLine_oh3mgy$ = PseudosRuleBuilder.prototype.firstLine_oh3mgy$;
  PropertiesBuilder.prototype.firstOfType_oh3mgy$ = PseudosRuleBuilder.prototype.firstOfType_oh3mgy$;
  PropertiesBuilder.prototype.focus_oh3mgy$ = PseudosRuleBuilder.prototype.focus_oh3mgy$;
  PropertiesBuilder.prototype.focusVisible_oh3mgy$ = PseudosRuleBuilder.prototype.focusVisible_oh3mgy$;
  PropertiesBuilder.prototype.focusWithin_oh3mgy$ = PseudosRuleBuilder.prototype.focusWithin_oh3mgy$;
  PropertiesBuilder.prototype.fullscreen_oh3mgy$ = PseudosRuleBuilder.prototype.fullscreen_oh3mgy$;
  PropertiesBuilder.prototype.future_oh3mgy$ = PseudosRuleBuilder.prototype.future_oh3mgy$;
  PropertiesBuilder.prototype.grammarError_oh3mgy$ = PseudosRuleBuilder.prototype.grammarError_oh3mgy$;
  PropertiesBuilder.prototype.has_3dp6ds$ = PseudosRuleBuilder.prototype.has_3dp6ds$;
  PropertiesBuilder.prototype.host_3dp6ds$ = PseudosRuleBuilder.prototype.host_3dp6ds$;
  PropertiesBuilder.prototype.hostContext_3dp6ds$ = PseudosRuleBuilder.prototype.hostContext_3dp6ds$;
  PropertiesBuilder.prototype.hover_oh3mgy$ = PseudosRuleBuilder.prototype.hover_oh3mgy$;
  PropertiesBuilder.prototype.inRange_oh3mgy$ = PseudosRuleBuilder.prototype.inRange_oh3mgy$;
  PropertiesBuilder.prototype.indeterminate_oh3mgy$ = PseudosRuleBuilder.prototype.indeterminate_oh3mgy$;
  PropertiesBuilder.prototype.invalid_oh3mgy$ = PseudosRuleBuilder.prototype.invalid_oh3mgy$;
  PropertiesBuilder.prototype.is_3dp6ds$ = PseudosRuleBuilder.prototype.is_3dp6ds$;
  PropertiesBuilder.prototype.lang_3dp6ds$ = PseudosRuleBuilder.prototype.lang_3dp6ds$;
  PropertiesBuilder.prototype.lastChild_oh3mgy$ = PseudosRuleBuilder.prototype.lastChild_oh3mgy$;
  PropertiesBuilder.prototype.lastOfType_oh3mgy$ = PseudosRuleBuilder.prototype.lastOfType_oh3mgy$;
  PropertiesBuilder.prototype.left_oh3mgy$ = PseudosRuleBuilder.prototype.left_oh3mgy$;
  PropertiesBuilder.prototype.link_oh3mgy$ = PseudosRuleBuilder.prototype.link_oh3mgy$;
  PropertiesBuilder.prototype.localLink_oh3mgy$ = PseudosRuleBuilder.prototype.localLink_oh3mgy$;
  PropertiesBuilder.prototype.marker_oh3mgy$ = PseudosRuleBuilder.prototype.marker_oh3mgy$;
  PropertiesBuilder.prototype.matches_3dp6ds$ = PseudosRuleBuilder.prototype.matches_3dp6ds$;
  PropertiesBuilder.prototype.not_3dp6ds$ = PseudosRuleBuilder.prototype.not_3dp6ds$;
  PropertiesBuilder.prototype.nthChild_3dp6ds$ = PseudosRuleBuilder.prototype.nthChild_3dp6ds$;
  PropertiesBuilder.prototype.nthCol_oh3mgy$ = PseudosRuleBuilder.prototype.nthCol_oh3mgy$;
  PropertiesBuilder.prototype.nthLastChild_3dp6ds$ = PseudosRuleBuilder.prototype.nthLastChild_3dp6ds$;
  PropertiesBuilder.prototype.nthLastCol_oh3mgy$ = PseudosRuleBuilder.prototype.nthLastCol_oh3mgy$;
  PropertiesBuilder.prototype.nthLastOfType_3dp6ds$ = PseudosRuleBuilder.prototype.nthLastOfType_3dp6ds$;
  PropertiesBuilder.prototype.nthOfType_3dp6ds$ = PseudosRuleBuilder.prototype.nthOfType_3dp6ds$;
  PropertiesBuilder.prototype.onlyChild_oh3mgy$ = PseudosRuleBuilder.prototype.onlyChild_oh3mgy$;
  PropertiesBuilder.prototype.onlyOfType_oh3mgy$ = PseudosRuleBuilder.prototype.onlyOfType_oh3mgy$;
  PropertiesBuilder.prototype.optional_oh3mgy$ = PseudosRuleBuilder.prototype.optional_oh3mgy$;
  PropertiesBuilder.prototype.outOfRange_oh3mgy$ = PseudosRuleBuilder.prototype.outOfRange_oh3mgy$;
  PropertiesBuilder.prototype.part_3dp6ds$ = PseudosRuleBuilder.prototype.part_3dp6ds$;
  PropertiesBuilder.prototype.past_oh3mgy$ = PseudosRuleBuilder.prototype.past_oh3mgy$;
  PropertiesBuilder.prototype.paused_oh3mgy$ = PseudosRuleBuilder.prototype.paused_oh3mgy$;
  PropertiesBuilder.prototype.pictureInPicture_oh3mgy$ = PseudosRuleBuilder.prototype.pictureInPicture_oh3mgy$;
  PropertiesBuilder.prototype.placeholder_oh3mgy$ = PseudosRuleBuilder.prototype.placeholder_oh3mgy$;
  PropertiesBuilder.prototype.placeholderShown_oh3mgy$ = PseudosRuleBuilder.prototype.placeholderShown_oh3mgy$;
  PropertiesBuilder.prototype.readOnly_oh3mgy$ = PseudosRuleBuilder.prototype.readOnly_oh3mgy$;
  PropertiesBuilder.prototype.readWrite_oh3mgy$ = PseudosRuleBuilder.prototype.readWrite_oh3mgy$;
  PropertiesBuilder.prototype.required_oh3mgy$ = PseudosRuleBuilder.prototype.required_oh3mgy$;
  PropertiesBuilder.prototype.right_oh3mgy$ = PseudosRuleBuilder.prototype.right_oh3mgy$;
  PropertiesBuilder.prototype.root_oh3mgy$ = PseudosRuleBuilder.prototype.root_oh3mgy$;
  PropertiesBuilder.prototype.scope_oh3mgy$ = PseudosRuleBuilder.prototype.scope_oh3mgy$;
  PropertiesBuilder.prototype.selection_oh3mgy$ = PseudosRuleBuilder.prototype.selection_oh3mgy$;
  PropertiesBuilder.prototype.slotted_3dp6ds$ = PseudosRuleBuilder.prototype.slotted_3dp6ds$;
  PropertiesBuilder.prototype.spellingError_oh3mgy$ = PseudosRuleBuilder.prototype.spellingError_oh3mgy$;
  PropertiesBuilder.prototype.target_oh3mgy$ = PseudosRuleBuilder.prototype.target_oh3mgy$;
  PropertiesBuilder.prototype.targetText_oh3mgy$ = PseudosRuleBuilder.prototype.targetText_oh3mgy$;
  PropertiesBuilder.prototype.targetWithin_oh3mgy$ = PseudosRuleBuilder.prototype.targetWithin_oh3mgy$;
  PropertiesBuilder.prototype.userInvalid_oh3mgy$ = PseudosRuleBuilder.prototype.userInvalid_oh3mgy$;
  PropertiesBuilder.prototype.userValid_oh3mgy$ = PseudosRuleBuilder.prototype.userValid_oh3mgy$;
  PropertiesBuilder.prototype.valid_oh3mgy$ = PseudosRuleBuilder.prototype.valid_oh3mgy$;
  PropertiesBuilder.prototype.visited_oh3mgy$ = PseudosRuleBuilder.prototype.visited_oh3mgy$;
  PropertiesBuilder.prototype.where_3dp6ds$ = PseudosRuleBuilder.prototype.where_3dp6ds$;
  Kotlin.defineModule('kotlin-react-css', _);
  return _;
}));
