(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-emotion'.");
    }root['kotlin-emotion'] = factory(typeof this['kotlin-emotion'] === 'undefined' ? {} : this['kotlin-emotion'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('kotlin-emotion', _);
  return _;
}));
