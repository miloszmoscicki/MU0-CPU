(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-atomicfu'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-atomicfu'.");
    }root['kotlinx-atomicfu'] = factory(typeof this['kotlinx-atomicfu'] === 'undefined' ? {} : this['kotlinx-atomicfu'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L0 = Kotlin.Long.ZERO;
  var Array_0 = Array;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var wrapFunction = Kotlin.wrapFunction;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  var ATOMIC_REF_FACTORY;
  var ATOMIC_REF_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_INT_FACTORY;
  var ATOMIC_INT_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_LONG_FACTORY;
  var ATOMIC_LONG_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_BOOLEAN_FACTORY;
  var ATOMIC_BOOLEAN_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_VALUE;
  var COMPARE_AND_SET;
  var GET_AND_SET;
  var GET_AND_INCREMENT;
  var GET_AND_INCREMENT_LONG;
  var GET_AND_DECREMENT;
  var GET_AND_DECREMENT_LONG;
  var INCREMENT_AND_GET;
  var INCREMENT_AND_GET_LONG;
  var DECREMENT_AND_GET;
  var DECREMENT_AND_GET_LONG;
  var GET_AND_ADD;
  var GET_AND_ADD_LONG;
  var ADD_AND_GET;
  var ADD_AND_GET_LONG;
  var ATOMIC_ARRAY_OF_NULLS;
  var ATOMIC_INT_ARRAY;
  var ATOMIC_LONG_ARRAY;
  var ATOMIC_BOOLEAN_ARRAY;
  var ATOMIC_REF_ARRAY;
  var ARRAY_SIZE;
  var ARRAY_ELEMENT_GET;
  var REENTRANT_LOCK;
  var TRACE_FACTORY_FUNCTION;
  var TRACE_BASE_CONSTRUCTOR;
  var TRACE_NAMED;
  var TRACE_FORMAT_CLASS;
  var TRACE_FORMAT_FORMAT_FUNCTION;
  var TRACE_APPEND_1;
  var TRACE_APPEND_2;
  var TRACE_APPEND_3;
  var TRACE_APPEND_4;
  var TraceBase$None_instance = null;
  function TraceFormat() {
  }
  TraceFormat.prototype.atomicfu$TraceFormat$format = function (index, event) {
    return index.toString() + ': ' + event.toString();
  };
  TraceFormat.$metadata$ = {kind: Kind_CLASS, simpleName: 'TraceFormat', interfaces: []};
  var traceFormatDefault;
  var Lock;
  function ReentrantLock() {
  }
  ReentrantLock.prototype.lock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.lock', function () {
  });
  ReentrantLock.prototype.tryLock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.tryLock', function () {
    return true;
  });
  ReentrantLock.prototype.unlock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.unlock', function () {
  });
  ReentrantLock.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReentrantLock', interfaces: []};
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$atomicfu = package$kotlinx.atomicfu || (package$kotlinx.atomicfu = {});
  package$atomicfu.atomicfu$TraceFormat = TraceFormat;
  var package$locks = package$atomicfu.locks || (package$atomicfu.locks = {});
  package$locks.ReentrantLock = ReentrantLock;
  ATOMIC_REF_FACTORY = 'atomic$ref$';
  ATOMIC_REF_FACTORY_BINARY_COMPATIBILITY = 'atomic$ref$1';
  ATOMIC_INT_FACTORY = 'atomic$int$';
  ATOMIC_INT_FACTORY_BINARY_COMPATIBILITY = 'atomic$int$1';
  ATOMIC_LONG_FACTORY = 'atomic$long$';
  ATOMIC_LONG_FACTORY_BINARY_COMPATIBILITY = 'atomic$long$1';
  ATOMIC_BOOLEAN_FACTORY = 'atomic$boolean$';
  ATOMIC_BOOLEAN_FACTORY_BINARY_COMPATIBILITY = 'atomic$boolean$1';
  ATOMIC_VALUE = 'kotlinx$atomicfu$value';
  COMPARE_AND_SET = 'atomicfu$compareAndSet';
  GET_AND_SET = 'atomicfu$getAndSet';
  GET_AND_INCREMENT = 'atomicfu$getAndIncrement';
  GET_AND_INCREMENT_LONG = 'atomicfu$getAndIncrement$long';
  GET_AND_DECREMENT = 'atomicfu$getAndDecrement';
  GET_AND_DECREMENT_LONG = 'atomicfu$getAndDecrement$long';
  INCREMENT_AND_GET = 'atomicfu$incrementAndGet';
  INCREMENT_AND_GET_LONG = 'atomicfu$incrementAndGet$long';
  DECREMENT_AND_GET = 'atomicfu$decrementAndGet';
  DECREMENT_AND_GET_LONG = 'atomicfu$decrementAndGet$long';
  GET_AND_ADD = 'atomicfu$getAndAdd';
  GET_AND_ADD_LONG = 'atomicfu$getAndAdd$long';
  ADD_AND_GET = 'atomicfu$addAndGet';
  ADD_AND_GET_LONG = 'atomicfu$addAndGet$long';
  ATOMIC_ARRAY_OF_NULLS = 'atomicfu$AtomicRefArray$ofNulls';
  ATOMIC_INT_ARRAY = 'atomicfu$AtomicIntArray$int';
  ATOMIC_LONG_ARRAY = 'atomicfu$AtomicLongArray$long';
  ATOMIC_BOOLEAN_ARRAY = 'atomicfu$AtomicBooleanArray$boolean';
  ATOMIC_REF_ARRAY = 'atomicfu$AtomicRefArray$ref';
  ARRAY_SIZE = 'atomicfu$size';
  ARRAY_ELEMENT_GET = 'atomicfu$get';
  REENTRANT_LOCK = 'atomicfu$reentrantLock';
  TRACE_FACTORY_FUNCTION = 'atomicfu$Trace';
  TRACE_BASE_CONSTRUCTOR = 'atomicfu$TraceBase';
  TRACE_NAMED = 'atomicfu$Trace$named';
  TRACE_FORMAT_CLASS = 'atomicfu$TraceFormat';
  TRACE_FORMAT_FORMAT_FUNCTION = 'atomicfu$TraceFormat$format';
  TRACE_APPEND_1 = 'atomicfu$Trace$append$1';
  TRACE_APPEND_2 = 'atomicfu$Trace$append$2';
  TRACE_APPEND_3 = 'atomicfu$Trace$append$3';
  TRACE_APPEND_4 = 'atomicfu$Trace$append$4';
  traceFormatDefault = new TraceFormat();
  Lock = new ReentrantLock();
  return _;
}));

//# sourceMappingURL=kotlinx-atomicfu.js.map
