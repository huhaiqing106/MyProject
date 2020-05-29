import React, { PureComponent, createContext, useState, useEffect, Component, Fragment, cloneElement, useRef } from 'react';
import lugiax, { connect } from '@lugia/lugiax';
import { service, DictSelect, antdConfig, appModel, Routes } from 'win-trade-base';
import { Button, Checkbox, Table, message, Modal, Upload, Row, Col, Progress, Tabs, Select, TreeSelect, Input, InputNumber, Form, Radio, DatePicker, Cascader, TimePicker, Rate, Switch, Slider, Drawer, ConfigProvider, Tooltip, Tree, Spin, Result } from 'antd';
import moment from 'moment';
import SnowflakeId from 'snowflake-id';
import 'antd/dist/antd.css';
import 'win-trade-base/static/css/main.css';
import HTML5Backend from 'react-dnd-html5-backend';
import { DropTarget, DragSource, DndProvider } from 'react-dnd';
import { Resizable } from 'react-resizable';
import propTypes from 'prop-types';
import Loadable from 'react-loadable';
import { CSSTransition } from 'react-transition-group';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import Echarts from 'echarts';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var connectModel = (function (Components, file) {
  var bindProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var RoleControl = /*#__PURE__*/function (_PureComponent) {
    inherits(RoleControl, _PureComponent);

    var _super = _createSuper(RoleControl);

    function RoleControl() {
      classCallCheck(this, RoleControl);

      return _super.apply(this, arguments);
    }

    createClass(RoleControl, [{
      key: "render",
      value: function render() {
        var _this = this;

        var props = this.props || {};
        bindProps.map(function (item) {
          return props[item] = _this.props[item];
        });
        return /*#__PURE__*/React.createElement(Components, props);
      }
    }]);

    return RoleControl;
  }(PureComponent);

  return connect(require("../../src/page/".concat(file, "/models"))["default"], function (state) {
    var statejs = state.toJS();
    return Object.keys(statejs).reduce(function (pre, cur) {
      if (bindProps && bindProps.length) {
        if (bindProps.includes(cur)) {
          pre[cur] = statejs[cur];
        }
      } else {
        pre[cur] = statejs[cur];
      }

      return pre;
    }, {});
  }, function (mutations) {
    return Object.keys(mutations).reduce(function (pre, cur) {
      if (bindProps && bindProps.length) {
        if (bindProps.includes(cur)) {
          pre[cur] = mutations[cur];
        }
      } else {
        pre[cur] = mutations[cur];
      }

      return pre;
    }, {});
  })(RoleControl);
});

var $connect = connectModel;

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime =  module.exports ;

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);
});

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

var runtimeModule = runtime;

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

var regenerator = runtimeModule;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var asyncToGenerator = _asyncToGenerator;

/**
 * @file 统一错误处理入口
 * @author lzx
 */
var requestErrMes = {
  0: '\u60A8\u7684\u7F51\u7EDC\u53D1\u751F\u5F02\u5E38\uFF0C\u65E0\u6CD5\u8FDE\u63A5\u670D\u52A1\u5668!',
  400: '\u53D1\u51FA\u7684\u8BF7\u6C42\u6709\u9519\u8BEF\uFF0C\u670D\u52A1\u5668\u6CA1\u6709\u8FDB\u884C\u65B0\u5EFA\u6216\u4FEE\u6539\u6570\u636E\u7684\u64CD\u4F5C\u3002',
  401: '\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09\u3002',
  403: '\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684\u3002',
  404: '\u6570\u636E\u6E90\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002',
  406: '\u8BF7\u6C42\u7684\u683C\u5F0F\u4E0D\u53EF\u5F97\u3002',
  410: '\u8BF7\u6C42\u7684\u8D44\u6E90\u88AB\u6C38\u4E45\u5220\u9664\uFF0C\u4E14\u4E0D\u4F1A\u518D\u5F97\u5230\u7684\u3002',
  422: '\u5F53\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u53D1\u751F\u4E00\u4E2A\u9A8C\u8BC1\u9519\u8BEF\u3002'
};
Object.keys(requestErrMes).forEach(function (key) {
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @file api地址定义
 * @author lzx
 */
// 方便后续更改api前缀，可设置 proxyTable 代理， 相关配置在 config/index.js
var proxy = {
  gitDics: 'dfas-base-biz'
}; // 数据字典

var gitDis = {
  getDicsById: "".concat(proxy['gitDics'], "/dics"),
  getDicsByCode: "".concat(proxy['gitDics'], "/dics/listAllSub")
}; // 相关请求地址,可以分模块，自行解决

var apiUrl = _objectSpread({}, gitDis);

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var $ajax = /*#__PURE__*/function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(url, data, type, obj) {
    var urlArr, afterUrl, getUrl;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            type = typeof data === 'string' ? data : type;
            urlArr = url.split('.');
            url = urlArr[0];
            afterUrl = urlArr[1];
            getUrl = apiUrl[url] || url;
            !!afterUrl && (getUrl = getUrl + '/' + afterUrl);
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              service.httpService(_objectSpread$1({
                url: getUrl,
                method: type || 'get',
                data: data
              }, obj)).then(function (res) {
                // 当请求结果中的状态码为正常的时候，返回请求的 data 结果
                if (res.winRspType === 'SUCC' || Object.prototype.toString.call(res) === "[object ArrayBuffer]") {
                  return resolve(res);
                } else {
                  // 如果请求状态码不正常，根据状态码分派到各个处理函数
                  return resolve({
                    code: '1000',
                    data: {},
                    msg: res.msg
                  });
                }
              })["finally"](function (xx) {
                resolve({
                  code: "",
                  data: {}
                });
              });
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function $ajax(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/**
* @file 正则验证
* @author lzx
*/
var regexp = {
  // 邮箱
  email: /^([a-zA-Z0-9_*-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
  // 手机
  mobile: /^1[3|4|5|7|8][0-9]{9}$/,
  // 整数或浮点数
  fixedAndInt: /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g,
  // 正浮点数
  fixed: /^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$/g
};

var PublicProps = createContext();
/***弹框的默认属性***/

var modalInfo = {
  getContainer: false,
  className: 'modalStyle',
  destroyOnClose: true,
  maskClosable: false,
  okText: '\u786E\u5B9A',
  cancelText: '\u53D6\u6D88'
};
/***按钮组常量***/

var icons = {
  // 新增: <plusOutline />,
  // 删除: <DeleteOutlined />,
  // 编辑: <EditOutlined />,
  // 修改: <EditOutlined />,
  // 下载: <DownloadOutlined />,
  // 上传: <UploadOutlined />,
  // 导入: <ImportOutlined />,
  // 导出: <ExportOutlined />,
  // 反审核: <FileSyncOutlined />,
  审核: 'solution',
  打印: 'printer',
  启用: 'play-circle',
  停止: 'stop',
  注销: 'close-circle',
  浏览: 'container',
  撤销: 'reload',
  授权: 'safety-certificate',
  重置密码: 'reload',
  锁定: 'lock',
  解锁: 'unlock',
  刷新: 'syncOutlined'
};
/***状态 1.启用，1.停用 2，注销***/

var typeStatue = ["#fff", "#67C23A", "#E6A23C", "#F56C6C"];
/***审核状态 2.未审核.1.已审核 ***/

var checkStatue = ["#fff", "#67C23A", "#F56C6C"];
/***默认页码***/

var page = {
  "reqPageNum": 1,
  "reqPageSize": 20
};
var commonInfoVo = [{
  title: '\u5BA1\u6838\u72B6\u6001',
  width: 200,
  dataIndex: 'checkStatus'
}, {
  title: '\u5BA1\u6838\u4EBA',
  dataIndex: 'checkUserId',
  width: 150
}, {
  title: '\u5BA1\u6838\u65F6\u95F4',
  dataIndex: 'checkTime',
  width: 150
}, {
  title: '\u521B\u5EFA\u4EBA',
  dataIndex: 'createUserId',
  width: 150
}, {
  title: '\u521B\u5EFA\u65F6\u95F4',
  dataIndex: 'createTime',
  width: 150
}, {
  title: '\u4FEE\u6539\u4EBA',
  dataIndex: 'updateUserId',
  width: 150
}, {
  title: '\u4FEE\u6539\u65F6\u95F4',
  dataIndex: 'updateTime',
  width: 150
}];
var selectRequest = {
  // 产品
  product: {
    url: '/dfbp-base-manage/productInfo/list',
    option: {
      value: 'prodCode',
      label: 'prodFullName'
    },
    method: 'post'
  },
  // 产品类型树
  ProductTypeTree: {
    url: '/dfbp-base-manage/api/productType/listProductTypeTree',
    option: {
      value: 'prodType',
      label: 'prodTypeName'
    },
    method: 'post'
  },
  fullLabelProduct: {
    url: '/dfbp-base-manage/productInfo/list',
    option: {
      value: 'prodCode',
      label: 'prodFullName'
    },
    fullLabel: true,
    method: 'post'
  },
  // 债券
  bond: {
    url: '/dfbp-info-manage/security/listSecurityLimit',
    option: {
      value: 'securityCode',
      label: 'securityName'
    },
    fullLabel: true,
    method: 'post',
    params: {
      resultCount: '20',
      securityType: 'ZQ'
    },
    resName: 'likeSecurityCode'
  },
  security: {
    url: '/dfbp-info-manage/security/list',
    option: {
      value: 'securityCode',
      label: 'securityName'
    },
    fullLabel: true,
    method: 'post',
    params: {
      resultCount: '20',
      securityType: 'ZQ'
    },
    resName: 'likeSecurityCode'
  },
  // 投资单元
  investUnit: {
    url: '/dfbp-base-manage/api/investUnit/queryInvestUnitByUser',
    option: {
      value: 'investUnitCode',
      label: 'investUnitName'
    },
    method: 'post'
  },
  fullLabelInvestUnit: {
    url: '/dfbp-base-manage/api/investUnit/queryInvestUnitByUser',
    option: {
      value: 'investUnitCode',
      label: 'investUnitName'
    },
    fullLabel: true,
    method: 'post'
  },
  // 对手方
  counterparty: {
    url: '/dfbp-info-manage/rivalInfo/list',
    option: {
      label: 'shortNameCn',
      value: 'companyId'
    },
    method: 'post'
  },
  // 债券交易方向
  bondTradeDirection: {
    url: '/dfbp-base-manage/tradeDirection/list',
    option: {
      label: 'directionName',
      value: 'directionCode'
    },
    method: 'post',
    params: {
      businType: 'YHXQ01'
    }
  },
  // 管理人
  consignor: {
    url: '/bmtp-product-manage/consignor/pullDownList',
    option: {
      value: 'code',
      label: 'fullNameCn'
    },
    method: 'post'
  },
  // 机构
  institution: {
    url: '/bmtp-product-manage/product/product/getLevelTree',
    method: 'post'
  },
  // 债券托管账户
  bondAccount: {
    url: '/bmtp-product-manage/account/bondAccount/getBondRefBatch',
    params: [],
    option: {
      value: 'bondTrusteeshipAccountSn',
      label: 'bondTrusteeshipName'
    },
    fullLabel: true,
    method: 'post'
  },
  // 资金账户
  capitalAccount: {
    url: '/bmtp-product-manage/account/assetAccount/getAllAssetAccount',
    option: {
      value: 'assetAccountSn',
      label: 'assetAccountName'
    }
  }
}; //功能权限

var functionRolue = {
  "\u67E5\u8BE2": "QUERY",
  //查询
  "\u65B0\u589E": "ADD",
  //新增
  "\u4FEE\u6539": "UPDATE",
  //修改
  "\u5220\u9664": "DELETE",
  // 删除
  "\u5BA1\u6838": "CHECK",
  //审核
  "\u53CD\u5BA1\u6838": "UNCHECK",
  //反审核
  "\u6253\u5370": "PRINT",
  //打印
  "\u5BFC\u5165": "IMPORT",
  //导入
  "\u5BFC\u51FA": "EXPORT",
  //导出
  "\u5BA1\u6279\u901A\u8FC7": "APPROVED",
  //审批通过
  "\u5BA1\u6279\u62D2\u7EDD": "APPROVED_REJECT",
  //  审批拒绝   
  "\u5176\u4ED6\u64CD\u4F5C": "OTHER_OPERATION" //其他操作        

};

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getType = function getType(v) {
  return Object.prototype.toString.call(v).replace(/\[object\s(\w+)\]/, '$1').toLowerCase();
};
var isArray = function isArray(v) {
  return getType(v) === 'array';
};
var isObject = function isObject(v) {
  return getType(v) === 'object';
};
var isString = function isString(v) {
  return getType(v) === 'string';
};
var isFunc = function isFunc(v) {
  return getType(v) === 'function';
};
var isElem = function isElem(v) {
  return getType(v) === 'htmldivelement';
}; // 睡眠函数

var sleep = function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, time);
  });
}; // 判断数组中是否包含某个字符串

var include = function include(str, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (str === arr[i]) {
      return true;
    }
  }

  return false;
}; // 拷贝函数

var merge = function merge() {
  var target = (arguments.length <= 0 ? undefined : arguments[0]) || {};
  var src;
  var copy;
  var clone;
  var i = 1;
  var deep = false;

  if (typeof target === 'boolean') {
    deep = target;
    target = (arguments.length <= 1 ? undefined : arguments[1]) || {};
    i++;
  }

  for (; i < arguments.length; i++) {
    var option = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (var name in option) {
      src = target[name];
      copy = option[name];

      if (deep && copy && _typeof_1(copy) === 'object') {
        if (isArray(copy)) {
          clone = src && isArray(src) ? src : [];
        } else {
          clone = src && isObject(src) ? src : {};
        }

        target[name] = merge(clone, copy);
      } else if (copy !== undefined) {
        target[name] = copy;
      }
    }
  }

  return target;
}; // 查找祖级元素节点

var findFaceLevelNode = function findFaceLevelNode(el, nodeStr) {
  if (!el) return {};
  var type;
  /\./g.test(nodeStr) && (type = 'className');
  /#/g.test(nodeStr) && (type = 'id');

  var findClassName = function findClassName(node) {
    if (!node) return {};
    return hasClass(node, nodeStr) ? node : findClassName(node.parentElement);
  };

  var findId = function findId(node) {
    if (!node) return {};
    return node.id === nodeStr ? node : findId(node.parentElement);
  };

  var findNodeName = function findNodeName(node) {
    if (!node) return {};
    return node.tagName.toLowerCase() === nodeStr.toLowerCase() ? node : findNodeName(node.parentElement);
  };

  switch (type) {
    case 'className':
      return findClassName(el.parentElement);

    case 'id':
      return findId(el.parentElement);

    default:
      return findNodeName(el.parentElement);
  }
}; // 检测是否有该class

var hasClass = function hasClass(el, cls) {
  if (!el || !cls) {
    return false;
  }

  if (cls.indexOf(' ') !== -1) {
    throw new Error('className should not contain space.');
  }

  cls = cls.replace(/\./g, '');

  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}; // 从当前节点向上遍历是否存在某个class

var domTreeHasClass = function domTreeHasClass(dom, className) {
  return hasClass(dom, className) ? true : Object.keys(findFaceLevelNode(dom, className)).length > 0 ? true : false;
}; // 移除class

var removeClass = function removeClass(el, cls) {
  if (!el || !cls) {
    return;
  }

  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];

    if (!clsName) {
      continue;
    }

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }

  if (!el.classList) {
    el.className = (curClass || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
  }
}; // 添加class

var addClass = function addClass(el, cls) {
  if (!el) {
    return;
  }

  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];

    if (!clsName) {
      continue;
    }

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }

  if (!el.classList) {
    el.className = curClass;
  }
}; // setStyle

var setStyle = function setStyle(dom, obj) {
  if (!dom || !isObject(obj)) return false;
  Object.keys(obj).forEach(function (key) {
    dom.style[key] = obj[key];
  });
}; // removeStyle

var removeStyle = function removeStyle(dom, array) {
  if (!dom || !Array.isArray(array)) return false;
  array.forEach(function (key) {
    dom.style[key] = '';
  });
}; // 添加事件

var addEvent = function addEvent(dom, event, fn) {
  dom.addEventListener(event, fn);
}; // 去除事件

var removeEvent = function removeEvent(dom, event, fn) {
  dom.removeEventListener(event, fn);
}; // 对象解析为请求字符串

var createGetGinseng = function createGetGinseng(param) {
  var ret = '?';
  Object.keys(param).forEach(function (item) {
    if (item) {
      var val = Array.isArray(param[item]) ? param[item].join() : isObject(param[item]) ? JSON.stringify(param[item]) : param[item];
      ret += encodeURIComponent(item) + '=' + encodeURIComponent(val) + '&';
    }
  });
  return ret.slice(0, ret.length - 1);
}; // 节流函数

var throttle = function throttle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(void 0, args);
    }, delay);
  };
}; // 设备判断

var isMobile = function isMobile() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];

  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) return Agents[v];
  }
}; // 判断浏览器版本

var browser = function browser() {
  var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串

  var browsers = ['compatible', 'Opera', 'Edge', 'Firefox', 'Safari', 'Chrome'];

  var getIe = function getIe() {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    var fIEVersion = parseFloat(RegExp['$1']);
    reIE.test(userAgent);

    switch (fIEVersion) {
      case 7:
        return 'IE7';

      case 8:
        return 'IE8';

      case 9:
        return 'IE9';

      case 10:
        return 'IE10';

      default:
        return 0;
    }
  };

  for (var i = 0, len = browsers.length; i < len; i++) {
    if (userAgent.indexOf(browsers[i])) {
      return browsers[i] !== 'compatible' ? browsers[i] : getIe();
    }
  }
}; // 获取 cookie

var getCookie = function getCookie(name) {
  var arr = document.cookie.split(';');

  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split('=');

    if (temp[0].trim() === name) {
      return unescape(temp[1]);
    }
  }
}; // 验证

var validate = function validate(val, name) {
  return regexp[name].test(val);
}; // 格式化日期

var formatDate = function formatDate(val, type) {
  var date = new Date(val);
  var seperator = '-';

  if (type === 'year') {
    return date.getFullYear() + '';
  } else if (val === 'month') {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;

    if (month >= 1 && month <= 9) {
      month = '0' + month;
    }

    var currentdate = year + seperator + month;
    return currentdate;
  } else if (type === 'date') {
    var _year = date.getFullYear();

    var _month = date.getMonth() + 1;

    var strDate = date.getDate();

    if (_month >= 1 && _month <= 9) {
      _month = '0' + _month;
    }

    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
    }

    var _currentdate = _year + seperator + _month + seperator + strDate;

    return _currentdate;
  }
}; // 当前日期

var getNowFormatDate = function getNowFormatDate(type) {
  var date = new Date();
  return formatDate(date, type);
}; // 格式化时间

var momentToDateStr = function momentToDateStr(time) {
  var formatStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD hh:mm:ss';

  if (Array.isArray(time)) {
    return time.map(function (item) {
      return moment(item).format(formatStr);
    });
  } else {
    return !!time ? moment(time).format(formatStr) : undefined;
  }
};
var dateStrToMoment = function dateStrToMoment(time) {
  var formatStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD hh:mm:ss';

  if (Array.isArray(time)) {
    return time.map(function (item) {
      return moment(new Date(item), formatStr);
    });
  } else {
    return !!time ? moment(new Date(time), formatStr) : undefined;
  }
}; // 获取前一天日期

var getPrevDate = function getPrevDate(date) {
  var day1 = new Date(date);
  day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
  var month = day1.getMonth() + 1;
  var day = day1.getDate();
  month < 10 && (month = '0' + month);
  day < 10 && (day = '0' + day);
  return day1.getFullYear() + "-" + month + "-" + day;
}; // 判断闰月

var getCountDays = function getCountDays(ym) {
  var curDate = new Date(ym);
  /* 获取当前月份 */

  var curMonth = curDate.getMonth();
  /* 生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */

  curDate.setMonth(curMonth + 1);
  /* 将日期设置为0 */

  curDate.setDate(0);
  /* 返回当月的天数 */

  return curDate.getDate();
}; // 获取星期几

var getDay = function getDay(days) {
  var weeks = ['\u661F\u671F\u65E5', '\u661F\u671F\u4E00', '\u661F\u671F\u4E8C', '\u661F\u671F\u4E09', '\u661F\u671F\u56DB', '\u661F\u671F\u4E94', '\u661F\u671F\u516D'];
  return weeks[new Date().getDay()];
}; // base64 解码

var _BASE64 = /*#__PURE__*/function () {
  function _BASE64() {
    classCallCheck(this, _BASE64);

    this._keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  }

  createClass(_BASE64, [{
    key: "encode",
    value: function encode(input) {
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var output = '';
      var i = 0;
      input = this._utf8_encode(input);

      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
      }

      return output;
    }
  }, {
    key: "decode",
    value: function decode(input) {
      var output = '';
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

      while (i < input.length) {
        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output = output + String.fromCharCode(chr1);

        if (enc3 !== 64) {
          output = output + String.fromCharCode(chr2);
        }

        if (enc4 !== 64) {
          output = output + String.fromCharCode(chr3);
        }
      }

      output = this._utf8_decode(output);
      return output;
    }
  }, {
    key: "_utf8_encode",
    value: function _utf8_encode(string) {
      string = string.replace(/\r\n/g, '\n');
      var utftext = '';

      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode(c >> 6 | 192);
          utftext += String.fromCharCode(c & 63 | 128);
        } else {
          utftext += String.fromCharCode(c >> 12 | 224);
          utftext += String.fromCharCode(c >> 6 & 63 | 128);
          utftext += String.fromCharCode(c & 63 | 128);
        }
      }

      return utftext;
    }
  }, {
    key: "_utf8_decode",
    value: function _utf8_decode(utftext) {
      var string = '';
      var i = 0;
      var c, c2, c3;
      c = c2 = 0;

      while (i < utftext.length) {
        c = utftext.charCodeAt(i);

        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if (c > 191 && c < 224) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode((c & 31) << 6 | c2 & 63);
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          i += 3;
        }
      }

      return string;
    }
  }]);

  return _BASE64;
}();

var BASE64 = new _BASE64();
/**
 * 处理echarts数据
 * @param {*} option
 * 源数据集 => []
 * @param {*} params
 * 参数集 =>
 * {
 *  x: 以此属性为 x 轴坐标 ,
 *  filter: 以此属性为过滤条件 ,
 *  valid: 取此属性的值组成数组
 * }
 */
// 处理时间集合

var returnAutoX = function returnAutoX(dateObj) {
  if (isObject(dateObj)) {
    var type = dateObj.type,
        tagDate = dateObj.tagDate,
        _dateObj$interval = dateObj.interval,
        interval = _dateObj$interval === void 0 ? 1 : _dateObj$interval;

    switch (type) {
      case 'minus':
        var minLen = 1440 / interval;
        var hour = 0;
        var minute = 0;
        var change = 60 / interval;
        var minuArr = ['00:00'];

        for (var i = 1; i < minLen; i++) {
          if (!(i % change)) {
            hour++;
            minute = 0;
          } else {
            minute += interval;
          }

          minuArr.push((hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute));
        }

        return minuArr;

      case 'hours':
        var hourArr = [];
        var hLen = 24 / interval;

        for (i = 0; i < hLen; i++) {
          var currentHour = i * interval;
          hourArr[i] = (currentHour < 10 ? '0' + currentHour : '' + currentHour) + ':00';
        }

        return hourArr;

      case 'days':
        var newMonth = tagDate.split('-')[1];
        var days = getCountDays(tagDate);
        var dLen = days / interval;
        var dayArr = [];

        for (i = 0; i < dLen; i++) {
          var currentDay = i * interval + 1;
          dayArr[i] = newMonth + '-' + (currentDay < 10 ? '0' + currentDay : '' + currentDay);
        }

        return dayArr;

      case 'months':
        var monthArr = [];
        var monLen = 12 / interval;

        for (i = 0; i < monLen; i++) {
          var currentMonth = i * interval + 1;
          monthArr[i] = currentMonth < 10 ? '0' + currentMonth : '' + currentMonth;
        }

        return monthArr;

      case 'years':
        return [];
    }

    return [];
  }
};

var formatBarAndLineDatas = function formatBarAndLineDatas() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!isArray(option) || option.length < 0) {
    return false;
  }

  params = isObject(params) ? params : false;
  var _params = params,
      x = _params.x,
      autoX = _params.autoX,
      y = _params.y,
      filter = _params.filter,
      valid = _params.valid;
  var keys = isObject(option[0]) ? Object.keys(option[0]) : [];

  if (!isArray(keys) || keys.length < 0) {
    return false;
  }

  var datas = {};
  var addMonth = '';
  var isMonth = isObject(autoX) && autoX.type === 'days';

  if (isMonth) {
    !autoX.tagDate && (autoX.tagDate = getNowFormatDate('month'));
    addMonth = autoX.tagDate.split('-')[1];
  }

  option.forEach(function (item, index) {
    keys.forEach(function (key) {
      if (!isArray(datas[key])) {
        datas[key] = [];
      }

      var xVal = isMonth && item[x].length === 2 ? addMonth + '-' + item[x] : item[x];
      datas[key][index] = !x && !y ? item[key] : key === x || key === y ? item[key] : !y ? [xVal, item[key] === 'null' || item[key] === null ? 0 : item[key]] : [item[y], xVal, item[key] === 'null' || item[key] == null ? 0 : item[key]];
    });
  });

  if (!filter) {
    !!x && (datas[x] = returnAutoX(autoX) || datas[x]);
    return datas;
  } else if (x) {
    var filters = {};
    var filtersNames = [];
    datas[filter].map(function (item, index) {
      filtersNames[index] = item.length === 3 ? item[2] : item[1];
      return filtersNames;
    });
    filtersNames = Array.from(new Set(filtersNames));
    filtersNames.map(function (item, index) {
      filters['datas' + index] = {
        values: [],
        name: item
      };
      return filters;
    });
    option.forEach(function (item) {
      for (var key in item) {
        var flag = !valid ? key !== filter && key !== x && key !== y : key === valid;

        if (flag) {
          var _addMonth = '';

          var _isMonth = isObject(autoX) && autoX.type === 'days';

          if (_isMonth) {
            !autoX.tagDate && (autoX.tagDate = getNowFormatDate('month'));
            _addMonth = autoX.tagDate.split('-')[1];
          }

          var xVal = _isMonth && item[x].length === 2 ? _addMonth + '-' + item[x] : item[x];
          filters['datas' + filtersNames.indexOf(item[filter])].values.push(!y ? [xVal, item[key] === 'null' || item[key] == null ? 0 : item[key]] : [item[y], xVal, item[key] === 'null' || item[key] == null ? 0 : item[key]]);
          return filters;
        }
      }
    });
    filters[x] = Array.from(new Set(datas[x]));
    filters[x] = returnAutoX(autoX) || filters[x];
    !!y && (filters[y] = Array.from(new Set(datas[y])));
    return filters;
  } else {
    return {};
  }
}; //把小数前的数分成4位处理

var cutNum = function cutNum(nums) {
  //判断Number对象是否有cutNum方法
  var num = '' + nums; //this指需要转换的数，然后由number类型转为string类型

  var len = Math.ceil(num.length / 4);
  var arr = [];
  var v_len = num.length;

  while (len > 0) {
    var cut_start = v_len - 4 > 0 ? v_len - 4 : 0;
    var cut_len = v_len - 4 > 0 ? 4 : v_len;
    var v = num.substr(cut_start, cut_len);

    if (v.length !== 4) {
      arr.push(' '.repeat(4 - v.length) + v);
    } else {
      arr.push(v);
    }

    len--;
    v_len -= 4;
  }

  return arr.length !== 1 ? arr.reverse().join(',') : '' + arr;
};
var numToChinese = function numToChinese(nums) {
  //有小数点的分为两部分：小数前的数firstPart和小数后的数secondPart，小数前的数进行cutNum方法处理
  //如果小数前的数不足4位，添0补位
  var $this = '' + nums,
      firstPart = '',
      secondPart = '';

  if (/\./.test($this)) {
    var arrPre = $this.split('.');
    firstPart = arrPre[0];

    if (firstPart.length > 12) {
      return '\u6570\u5B57\u4E0D\u80FD\u8D85\u8FC7\u4EDF\u4EBF';
    }

    secondPart = arrPre[1];

    if (secondPart.length > 2) {
      return '\u5C0F\u6570\u70B9\u540E\u7684\u6570\u5B57\u4E0D\u80FD\u8D85\u8FC72\u4F4D';
    }
  } else {
    firstPart = $this;
  } //第一部分：处理小数前的数


  var firstPartArr = [];

  if (firstPart.length > 4) {
    firstPartArr = cutNum(parseInt(firstPart)).split(','); //firstPart是字符串类型
  } else {
    firstPartArr = firstPartArr.concat(' '.repeat(4 - firstPart.length) + firstPart);
  }

  var arrMap = [['0', '\u96F6'], ['1', '\u58F9'], ['2', '\u8D30'], ['3', '\u53C1'], ['4', '\u8086'], ['5', '\u4F0D'], ['6', '\u9646'], ['7', '\u67D2'], ['8', '\u634C'], ['9', '\u7396']],
      unit = ['\u4EDF', '\u4F70', '\u62FE', ''];
  var map = new Map(arrMap),
      //创建Map对象
  splitAddUnit = [],
      //存放4位分割后的单位
  returnArr = []; //最终返回的值

  if (firstPartArr.length === 3) {
    splitAddUnit = ['\u4EBF', '\u4E07'];
  } else if (firstPartArr.length === 2) {
    splitAddUnit = ['\u4E07'];
  } else {
    splitAddUnit = [''];
  }

  for (var k = 0; k < firstPartArr.length; k++) {
    for (var j = 0; j < firstPartArr[k].length; j++) {
      if (firstPartArr[k][j] !== 0) {
        //利用Map对象映射相应的值
        var newUnit = [].concat(unit);
        firstPartArr[k][j] === ' ' && (newUnit[j] = '');
        returnArr.push(map.get(firstPartArr[k][j]) + newUnit[j]);
      }
    }

    if (splitAddUnit[k]) {
      returnArr.push(splitAddUnit[k]);
    }
  }

  returnArr.push('\u5143'); //第二部分：处理小数后的数

  if (secondPart) {
    if (/^0+$/.test(secondPart)) {
      //小数后的数全为0时
      returnArr.push('\u6574');
    } else {
      var pointAfterUnit = ['\u89D2', '\u5206'];

      for (var _j = 0; _j < secondPart.length; _j++) {
        var val = map.get(secondPart[_j]) + pointAfterUnit[_j];

        returnArr.push(val);
      }
    }
  } else {
    returnArr.push('\u6574');
  }

  return returnArr.join('').replace(/undefined/g, '');
}; // 给空值赋默认值

var getValue = function getValue(values) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!values || values === "undefine") {
    return defaultValue;
  }

  return values;
}; // 雪花算法生成唯一id

var createGuid = function createGuid() {
  return new SnowflakeId().generate();
};
/***过滤对象空的属性****/

var filterNullElement = function filterNullElement(object) {
  Object.keys(object).forEach(function (key) {
    (object[key] === undefined || object[key] === null) && delete object[key];
  });
  return object;
}; // 树数据公共方法默认配置

var treeDataConfig = {
  keyField: "",
  titleField: "",
  showValue: false,
  // 指定需要过滤数据的key，用于 formatTreeData 方法
  filterKeys: [],
  // 指定过滤文本条件，用于 filterTreeData 方法
  filterValue: "",
  treeNodeRender: function treeNodeRender(node) {
    return {};
  },
  parKey: "",
  // 指定 keyList 中每一个元素的 key（多个）
  keyList: [],
  parKeyList: []
};
/**
* @des flattenTreeData 树数据扁平化
* @param rows
* @param config {keyField, treeNodeRender, parKey, keyList}
* @returns Array[]
*/

var flattenTreeData = function flattenTreeData(rows, config) {
  var newRows = [];
  config = _objectSpread$2(_objectSpread$2({}, treeDataConfig), config);
  var _config = config,
      keyField = _config.keyField,
      treeNodeRender = _config.treeNodeRender,
      parKey = _config.parKey,
      keyList = _config.keyList,
      parKeyList = _config.parKeyList;
  rows.forEach(function (item) {
    // 自定义节点配置
    var treeNodeConfig = treeNodeRender(item); // key取值优先级：已存在key > 自定义事件处理的key > 使用keyField字段

    item.key = item.key || treeNodeConfig.key || item[keyField] || "";
    var nodeKey = parKey ? "".concat(parKey, "#").concat(item.key) : item.key;

    if (keyList.length) {
      var keyInfo = {};
      keyList.forEach(function (key) {
        keyInfo[key] = item[key];
      });
      item.fullKeyList = [].concat(toConsumableArray(parKeyList), [keyInfo]);
    }

    newRows.push(_objectSpread$2(_objectSpread$2({}, item), {}, {
      fullKey: nodeKey
    }));

    if (item.children) {
      newRows = [].concat(toConsumableArray(newRows), toConsumableArray(flattenTreeData(item.children, _objectSpread$2(_objectSpread$2({}, config), {}, {
        parKey: nodeKey,
        parKeyList: item.fullKeyList || []
      }))));
    }
  });
  return newRows;
};
/**
* @des formatTreeData 格式化数组为 treeData
* @param rows
* @param config {keyField, titleField, showValue, treeNodeRender, filterKeys}
* @returns {rows, keys}
*/

var formatTreeData = function formatTreeData(rows, config) {
  var newRows = [];
  var keys = [];
  config = _objectSpread$2(_objectSpread$2({}, treeDataConfig), config);
  var _config2 = config,
      keyField = _config2.keyField,
      titleField = _config2.titleField,
      showValue = _config2.showValue,
      treeNodeRender = _config2.treeNodeRender,
      filterKeys = _config2.filterKeys;
  rows.forEach(function (item) {
    // 自定义节点配置
    var treeNodeConfig = treeNodeRender(item);
    var nodeKey = treeNodeConfig.key || item[keyField];
    var nodeTitle = treeNodeConfig.title || item[titleField] || nodeKey;

    if (filterKeys && filterKeys.length && !filterKeys.includes(nodeKey)) {
      return true;
    }

    keys.push(nodeKey);
    var newItem = !Object.keys(treeNodeConfig).length ? _objectSpread$2(_objectSpread$2({}, item), {}, {
      key: nodeKey,
      value: nodeKey,
      title: showValue ? nodeKey + "-" + nodeTitle : nodeTitle,
      children: null
    }) : // 自定义节点模式
    _objectSpread$2(_objectSpread$2(_objectSpread$2({}, item), treeNodeConfig), {}, {
      // 存在titleDom（dom结构的title），则取titleDom
      title: treeNodeConfig.titleDom || treeNodeConfig.title,
      children: null
    });
    var children = formatTreeData(item.children || [], config); // 是否为叶子节点

    newItem.isLeaf = !children.rows.length;

    if (children.rows.length) {
      newItem.children = children.rows;
      keys = [].concat(toConsumableArray(keys), toConsumableArray(children.keys));
    }

    newRows.push(newItem);
  });
  return {
    rows: newRows,
    keys: keys
  };
};
/**
* @des filterTreeData 格式化数组为 treeData，并支持筛选
* @param rows
* @param config {keyField, titleField, showValue, filterValue, treeNodeRender}
* @returns {rows, keys}
*/

var filterTreeData = function filterTreeData(rows, config) {
  config = _objectSpread$2(_objectSpread$2({}, treeDataConfig), config);
  var _config3 = config,
      keyField = _config3.keyField,
      titleField = _config3.titleField,
      filterValue = _config3.filterValue,
      treeNodeRender = _config3.treeNodeRender;
  var filterKeys = filterValue ? flattenTreeData(rows, config).filter(function (item) {
    // 自定义节点配置
    var treeNodeConfig = treeNodeRender(item);
    var nodeKey = treeNodeConfig.key || item[keyField] || "";
    var nodeTitle = treeNodeConfig.title || item[titleField] || "";
    return nodeKey.includes(filterValue) || nodeTitle.includes(filterValue);
  }).map(function (item) {
    return item.fullKey;
  }).join("#").split("#") : [];
  return formatTreeData(rows, _objectSpread$2(_objectSpread$2({}, config), {}, {
    filterKeys: Array.from(new Set(filterKeys))
  }));
};
/**
* @des formatTreeTableData 格式化数组为“树形表格数据”
* @param rows
* @param config {parKey, filterKeys}
* @param parKey 父级的key
* @returns Array[]
*/

var formatTreeTableData = function formatTreeTableData(rows, config) {
  config = _objectSpread$2(_objectSpread$2({}, treeDataConfig), config);
  var _config4 = config,
      keyField = _config4.keyField,
      parKey = _config4.parKey,
      filterKeys = _config4.filterKeys;
  var newRows = [];
  var keys = [];
  rows.forEach(function (item, index) {
    var nodeKey = item[keyField];

    if (!nodeKey) {
      nodeKey = parKey ? "".concat(parKey, "-").concat(index + 1) : index + 1 + "";
    }

    var newItem = _objectSpread$2(_objectSpread$2({}, item), {}, {
      key: nodeKey,
      children: null
    });

    if (filterKeys && filterKeys.length && !filterKeys.includes(newItem.key)) {
      return true;
    }

    keys.push(newItem.key);

    if (!parKey) {
      newItem.rowIndex = index + 1;
    }

    if (item.children && item.children.length) {
      var children = formatTreeTableData(item.children, _objectSpread$2(_objectSpread$2({}, config), {}, {
        parKey: newItem.key
      }));
      newItem.children = children.rows;
      keys = [].concat(toConsumableArray(keys), toConsumableArray(children.keys));
    }

    newRows.push(newItem);
  });
  return {
    rows: newRows,
    keys: keys
  };
}; // 数字转英文

var numToEnglish = function numToEnglish(s) {
  //参数
  var NumtoEnglish = {},
      n = "",
      xiao = "",
      regxinteger = /^([0-9]{1,}([.][0-9]*)?)$/; //数字英文写法

  NumtoEnglish.tally = {
    arr1: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    arr2: ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    arr3: ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
    arr4: ["hundred", "thousand", "million", "billion", "trillion", "quadrillion"]
  }; //转换整数部分

  NumtoEnglish.Convert_integer = function (n) {
    try {
      var fenge = this.toThousands(n).split(',');
      var result = "";

      for (var i = 0; i < fenge.length; i++) {
        if (fenge[i].length == 3) {
          result += this.tally.arr1[fenge[i].substring(0, 1)] + " "; //百位

          result += this.tally.arr4[0];

          if (this.doubledight(fenge[i].substring(1)) != "") {
            result += " and " + this.doubledight(fenge[i].substring(1));
          }
        } else if (fenge[i].length == 2) {
          result += this.doubledight(fenge[i]); //十位
        } else if (fenge[i].length == 1) {
          result += this.tally.arr1[fenge[i]]; //个位
        } //添加千分位单位（数字超过1000，每三位数字分配一个单位）


        if (i < fenge.length - 1) {
          result += " " + this.tally.arr4[fenge.length - 1 - i] + " ";
        }
      }

      return result;
    } catch (ex) {
      console.error(ex);
    }
  }; //转换小数部分


  NumtoEnglish.Convert_decimal = function (n) {
    var _this = this;

    var d = n.split('');
    var result = '';

    if (d.length > 0) {
      d.forEach(function (a) {
        result += _this.Convert_integer(a) + " ";
      });
    }

    return result;
  }; //组合两位数


  NumtoEnglish.doubledight = function (n) {
    var result = "";

    if (parseInt(n) != 0) {
      var dd = n.split('');

      if (dd[0] < 1) {
        result = this.tally.arr1[dd[1]];
      } else if (dd[0] == 1) {
        result = this.tally.arr2[dd[1]];
      } else {
        result = this.tally.arr3[dd[0] - 2] + "-" + this.tally.arr1[dd[1]];
      }
    }

    return result;
  }; //转换千分位显示，例：1000000 = 1,000,000


  NumtoEnglish.toThousands = function (num) {
    var num = (num || 0).toString(),
        result = '';

    while (num.length > 3) {
      result = ',' + num.slice(-3) + result;
      num = num.slice(0, num.length - 3);
    }

    if (num) {
      result = num + result;
    }

    return result;
  }; //扩展String方法


  s.prototype.toEnglish = function () {
    n = this;

    if (!regxinteger.test(parseInt(n))) {
      return "Error\uFF1AMust in digital format";
    } //分割整数和小数（如果有小数的话）


    var NumList = n.toString().split('.'),
        zheng = NumtoEnglish.Convert_integer(NumList[0]); //整数部分
    //如果分割长度是2，说明是小数

    if (NumList.length == 2) {
      if (NumList[1].length <= 2) {
        xiao = NumtoEnglish.Convert_decimal(NumList[1]);
      } else {
        //如果小数超过2位，不转换，返回原数据
        return n;
      }
    } //返回转换结果


    return zheng + (xiao == "" ? "" : " point " + xiao);
  };
};
/**数字千分位*/

var formatNumber = function formatNumber(num) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--';

  if (isNaN(Number(num))) {
    return defaultValue;
  }

  return ('' + Number(num)).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
};

var ButtonGroup = Button.Group;
/****ButtonGroup权限按钮组件****/

var withRoleBotton = function withRoleBotton(ButtonType) {
  var _functionRolue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : functionRolue;

  return /*#__PURE__*/React.createElement(ButtonGroup, {
    style: {
      marginBottom: '6px'
    }
  }, ButtonType.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Button, {
      "func-type": _functionRolue[(item === null || item === void 0 ? void 0 : item.name) || ""],
      onClick: (item === null || item === void 0 ? void 0 : item.func) ? item === null || item === void 0 ? void 0 : item.func : null,
      disabled: item.disabled,
      key: item === null || item === void 0 ? void 0 : item.name,
      style: {
        cursor: 'pointer'
      }
    }, item.name, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        left: '17px',
        color: index == ButtonType.length - 1 ? 'transparent' : 'transparent'
      }
    }, "|"), item.children && item.children.length ? /*#__PURE__*/React.createElement("div", {
      className: "buttonChildren"
    }, item.children.map(function (child) {
      return /*#__PURE__*/React.createElement("div", {
        onClick: child.func ? child.func : null,
        key: child.name,
        className: "buttonChildrenItem"
      }, child.name);
    })) : '');
  }));
};
/****ButtonTableGroup权限按钮组件****/

var withRoleTableBotton = function withRoleTableBotton(ButtonType) {
  var _functionRolue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : functionRolue;

  return function (row) {
    return ButtonType.map(function (item) {
      var stateName = row.accountStatus || row.productEnableStatus || row.assetUnitStatus;
      var rowState = stateName === '1' ? '2' : '1';

      if (item.name === '\u72B6\u6001' || item.name === '\u6CE8\u9500') {
        return stateName != '3' ? /*#__PURE__*/React.createElement(Button, defineProperty({
          "func-type": _functionRolue[(item === null || item === void 0 ? void 0 : item.name) || ""],
          key: item.name,
          disabled: stateName == '3' ? true : false,
          size: "small",
          type: "link",
          onClick: function onClick(e) {
            item.func({
              e: e,
              row: row,
              status: item.name == '\u6CE8\u9500' ? '3' : rowState,
              type: item.type
            });
          }
        }, "key", item.name), item.name == '\u72B6\u6001' ? /*#__PURE__*/React.createElement("span", null, stateName == '1' ? '\u505C\u7528' : '\u542F\u52A8') : /*#__PURE__*/React.createElement("span", null, "\u6CE8\u9500")) : '';
      } else {
        return stateName != '3' ? /*#__PURE__*/React.createElement(Button, {
          "func-type": _functionRolue[(item === null || item === void 0 ? void 0 : item.name) || ""],
          size: "small",
          type: "link",
          disabled: item.disabled ? true : false,
          onClick: function onClick(e) {
            item.func(e, row);
          },
          key: item.name
        }, /*#__PURE__*/React.createElement("span", null, item.name)) : '';
      }
    });
  };
};

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

var CheckboxGroup = (function (props) {
  return /*#__PURE__*/React.createElement(Checkbox.Group, _extends_1({}, props, {
    style: {
      width: '100%'
    }
  }));
});

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var dragingRowIndex = -1;

var BodyRow = /*#__PURE__*/function (_React$Component) {
  inherits(BodyRow, _React$Component);

  var _super = _createSuper$1(BodyRow);

  function BodyRow() {
    classCallCheck(this, BodyRow);

    return _super.apply(this, arguments);
  }

  createClass(BodyRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOver = _this$props.isOver,
          rowDraggable = _this$props.rowDraggable,
          connectDragSource = _this$props.connectDragSource,
          connectDropTarget = _this$props.connectDropTarget,
          moveRow = _this$props.moveRow,
          restProps = objectWithoutProperties(_this$props, ["isOver", "rowDraggable", "connectDragSource", "connectDropTarget", "moveRow"]);

      if (!rowDraggable) {
        return /*#__PURE__*/React.createElement("tr", restProps);
      }

      var style = _objectSpread$3(_objectSpread$3({}, restProps.style), {}, {
        cursor: 'move'
      });

      var className = restProps.className;

      if (isOver) {
        if (restProps.index > dragingRowIndex) {
          className += ' drop-over-downward';
        }

        if (restProps.index < dragingRowIndex) {
          className += ' drop-over-upward';
        }
      }

      return connectDragSource(connectDropTarget( /*#__PURE__*/React.createElement("tr", _extends_1({}, restProps, {
        className: className,
        style: style
      }))));
    }
  }]);

  return BodyRow;
}(React.Component);

var rowSource = {
  beginDrag: function beginDrag(props) {
    dragingRowIndex = props.index;
    return {
      index: props.index
    };
  }
};
var rowTarget = {
  drop: function drop(props, monitor) {
    var dragIndex = monitor.getItem().index;
    var hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    props.moveRow && props.moveRow(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
};
var DragableBodyRow = DropTarget('row', rowTarget, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
})(DragSource('row', rowSource, function (connect) {
  return {
    connectDragSource: connect.dragSource()
  };
})(BodyRow));

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var HeaderCell = /*#__PURE__*/function (_React$Component) {
  inherits(HeaderCell, _React$Component);

  var _super = _createSuper$2(HeaderCell);

  function HeaderCell() {
    classCallCheck(this, HeaderCell);

    return _super.apply(this, arguments);
  }

  createClass(HeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOver = _this$props.isOver,
          connectDragSource = _this$props.connectDragSource,
          connectDropTarget = _this$props.connectDropTarget,
          moveHeaderCell = _this$props.moveHeaderCell,
          colDraggable = _this$props.colDraggable,
          restProps = objectWithoutProperties(_this$props, ["isOver", "connectDragSource", "connectDropTarget", "moveHeaderCell", "colDraggable"]);

      if (!colDraggable) {
        return /*#__PURE__*/React.createElement("th", restProps);
      }

      var style = _objectSpread$4(_objectSpread$4({}, restProps.style), {}, {
        cursor: 'move'
      });

      var className = restProps.className;

      if (isOver) {
        className += ' drop-over-border';
      }

      return connectDragSource(connectDropTarget( /*#__PURE__*/React.createElement("th", _extends_1({}, restProps, {
        style: style,
        className: className
      }))));
    }
  }]);

  return HeaderCell;
}(React.Component);

var ResizableHeaderCell = /*#__PURE__*/function (_React$Component2) {
  inherits(ResizableHeaderCell, _React$Component2);

  var _super2 = _createSuper$2(ResizableHeaderCell);

  function ResizableHeaderCell() {
    classCallCheck(this, ResizableHeaderCell);

    return _super2.apply(this, arguments);
  }

  createClass(ResizableHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          resizable = _this$props2.resizable,
          width = _this$props2.width,
          minWidth = _this$props2.minWidth,
          maxWidth = _this$props2.maxWidth,
          onResize = _this$props2.onResize,
          restProps = objectWithoutProperties(_this$props2, ["resizable", "width", "minWidth", "maxWidth", "onResize"]);

      if (!resizable || !width) {
        return /*#__PURE__*/React.createElement(HeaderCell, restProps);
      }

      return /*#__PURE__*/React.createElement(Resizable, {
        width: width,
        height: 0,
        onResize: onResize,
        minConstraints: [minWidth || 50, 0],
        maxConstraints: [maxWidth || Infinity],
        onResizeStart: function onResizeStart(e) {
          return e.preventDefault();
        },
        draggableOpts: {
          enableUserSelectHack: false,
          allowAnyClick: false
        }
      }, /*#__PURE__*/React.createElement(HeaderCell, restProps));
    }
  }]);

  return ResizableHeaderCell;
}(React.Component);

var cellSource = {
  beginDrag: function beginDrag(props) {
    return {
      index: props.index
    };
  }
};
var cellTarget = {
  drop: function drop(props, monitor) {
    var dragIndex = monitor.getItem().index;
    var hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    props.moveHeaderCell && props.moveHeaderCell(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
};
var DragableHeaderCell = DropTarget('cell', cellTarget, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
})(DragSource('cell', cellSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  };
})(ResizableHeaderCell));

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ConfigableTable = /*#__PURE__*/function (_React$Component) {
  inherits(ConfigableTable, _React$Component);

  var _super = _createSuper$3(ConfigableTable);

  function ConfigableTable() {
    var _this;

    classCallCheck(this, ConfigableTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "components", {
      table: (_this.props.components || {}).table,
      header: _objectSpread$5({
        cell: DragableHeaderCell
      }, (_this.props.components || {}).header),
      body: _objectSpread$5({
        row: DragableBodyRow
      }, (_this.props.components || {}).body)
    });

    defineProperty(assertThisInitialized(_this), "handleSetRowProps", function (record, index) {
      var _this$props = _this.props,
          onRow = _this$props.onRow,
          onRowMove = _this$props.onRowMove,
          rowDraggable = _this$props.rowDraggable;
      var props = onRow && onRow(record, index);

      var onDoubleClick = function onDoubleClick(e) {
        var target = e.target;
        var values = target.innerHTML || target.value;
        copyText(values, function () {
          message.success('\u590D\u5236\u6210\u529F');
        });
        isFunc(props === null || props === void 0 ? void 0 : props.onDoubleClick) && props.onDoubleClick(e);
        props === null || props === void 0 ? true : delete props.onDoubleClick;
      };

      var rowProps = _objectSpread$5(_objectSpread$5({}, props), {}, {
        moveRow: onRowMove,
        index: index,
        rowDraggable: rowDraggable,
        onDoubleClick: onDoubleClick
      });

      return rowProps;
    });

    return _this;
  }

  createClass(ConfigableTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          columns = _this$props2.columns,
          onRowMove = _this$props2.onRowMove,
          onHeaderCellMove = _this$props2.onHeaderCellMove,
          resizable = _this$props2.resizable,
          colDraggable = _this$props2.colDraggable,
          onResize = _this$props2.onResize,
          className = _this$props2.className,
          doubleHeader = _this$props2.doubleHeader,
          restProps = objectWithoutProperties(_this$props2, ["columns", "onRowMove", "onHeaderCellMove", "resizable", "colDraggable", "onResize", "className", "doubleHeader"]);

      var newColumns = (columns || []).map(function (_ref, index) {
        var _onHeaderCell = _ref.onHeaderCell,
            resProps = objectWithoutProperties(_ref, ["onHeaderCell"]);

        return _objectSpread$5(_objectSpread$5({}, resProps), {}, {
          onHeaderCell: function onHeaderCell(column) {
            return _objectSpread$5(_objectSpread$5({}, _onHeaderCell && _onHeaderCell(column)), {}, {
              index: index,
              minWidth: column.minWidth,
              maxWidth: column.maxWidth,
              width: column.width,
              onResize: typeof onResize === 'function' ? onResize.bind(null, index) : null,
              moveHeaderCell: onHeaderCellMove,
              resizable: resizable,
              colDraggable: colDraggable
            });
          }
        });
      });
      return /*#__PURE__*/React.createElement(DndProvider, {
        backend: HTML5Backend
      }, /*#__PURE__*/React.createElement("div", {
        className: "yss-configable-table tableInfo",
        ref: function ref(_ref2) {
          return _this2.divs = _ref2;
        }
      }, /*#__PURE__*/React.createElement(Table, _extends_1({
        className: 'yss-configable-table-inner stripe-table' + (!!doubleHeader ? ' doubleHeader' : '') + (className ? " ".concat(className) : ''),
        columns: newColumns
      }, restProps, {
        onRow: this.handleSetRowProps,
        components: this.components
      }))));
    }
  }]);

  return ConfigableTable;
}(React.Component);

defineProperty(ConfigableTable, "propTypes", {
  resizable: propTypes.bool,
  colDraggable: propTypes.bool,
  rowDraggable: propTypes.bool,
  onRowMove: propTypes.func,
  onResize: propTypes.func,
  onHeaderCellMove: propTypes.func,
  components: propTypes.object,
  selection: propTypes.object
});

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CommonTable(props) {
  var _useState = useState(props.dataSource),
      _useState2 = slicedToArray(_useState, 2),
      dataSource = _useState2[0],
      setDataSource = _useState2[1];

  var _useState3 = useState(props.columns),
      _useState4 = slicedToArray(_useState3, 2),
      columns = _useState4[0],
      setColumns = _useState4[1];

  useEffect(function () {
    setDataSource(props.dataSource);
    setColumns(props.columns);
  }, [props.dataSource, props.columns]);
  /**拉动改变列宽**/

  var handleResize = function handleResize(index, _, _ref) {
    var size = _ref.size;

    var nextColumns = toConsumableArray(columns);

    nextColumns[index] = _objectSpread$6(_objectSpread$6({}, nextColumns[index]), {}, {
      width: size.width
    });
    setColumns(nextColumns);
  };
  /**拖拽改变列头排序**/


  var handleMoveCol = function handleMoveCol(dragIndex, hoverIndex) {
    var dragColumn = columns[dragIndex];
    var hoverColumn = columns[hoverIndex];

    if (dragColumn.hasOwnProperty('fixed') || hoverColumn.hasOwnProperty('fixed')) {
      return message.warning('\u9760\u5DE6/\u53F3\u56FA\u5B9A\u680F\u4E0D\u652F\u6301\u62D6\u62FD\u6539\u53D8\u6392\u5E8F');
    }

    var nextColumns = toConsumableArray(columns);

    nextColumns[dragIndex] = hoverColumn;
    nextColumns[hoverIndex] = dragColumn;
    setColumns(nextColumns);
  };
  /**修改表格数据行排序**/


  var handleMoveRow = function handleMoveRow(index1, index2) {
    var index1Data = dataSource[index1];
    var index2Data = dataSource[index2];

    var newDataSource = toConsumableArray(dataSource);

    newDataSource[index1] = index2Data;
    newDataSource[index2] = index1Data;
    setDataSource(newDataSource);
  };

  return /*#__PURE__*/React.createElement(ConfigableTable, _extends_1({}, _objectSpread$6(_objectSpread$6({}, props), {}, {
    dataSource: dataSource,
    columns: columns
  }), {
    onResize: handleResize,
    onHeaderCellMove: handleMoveCol,
    onRowMove: handleMoveRow,
    resizable: props.hasOwnProperty("resizable") ? props.resizable : true,
    colDraggable: props.hasOwnProperty("colDraggable") ? props.colDraggable : true,
    rowDraggable: props.hasOwnProperty("rowDraggable") ? props.rowDraggable : true
  }));
}

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ConfigableTable$1 = /*#__PURE__*/function (_React$Component) {
  inherits(ConfigableTable, _React$Component);

  var _super = _createSuper$4(ConfigableTable);

  function ConfigableTable() {
    var _this;

    classCallCheck(this, ConfigableTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      indexColumns: [],
      //右侧索引列表，永远不变
      tableColumns: [],
      //表格列表
      tableColumnsCline: {
        clientX: 0,
        clientY: 0
      },
      //记录索引弹框的距离
      isIndexColunmShow: false,
      //是否显示在线列
      isShowBottom: false // 是否显示按钮

    });

    defineProperty(assertThisInitialized(_this), "handleSetRowProps", function (record, index) {
      var _this$props = _this.props,
          onRow = _this$props.onRow,
          onRowMove = _this$props.onRowMove,
          rowDraggable = _this$props.rowDraggable;
      var props = onRow && onRow(record, index);

      var rowProps = _objectSpread$7(_objectSpread$7({}, props), {}, {
        moveRow: onRowMove,
        index: index,
        rowDraggable: rowDraggable
      });

      return rowProps;
    });

    defineProperty(assertThisInitialized(_this), "checkBoxCol", function (checkedValue, col) {
      var _this$state = _this.state,
          indexColumns = _this$state.indexColumns,
          tableColumns = _this$state.tableColumns;
      var tableColumnsState;
      var indexColumnsState = indexColumns.map(function (item) {
        if (col.dataIndex == item.dataIndex) {
          return _objectSpread$7(_objectSpread$7({}, item), {}, {
            checked: !item.checked
          });
        } else {
          return _objectSpread$7({}, item);
        }
      });

      _this.setState(function () {
        return {
          indexColumns: indexColumnsState
        };
      }, function () {
        if (col.checked) {
          /***去钩 */
          tableColumnsState = tableColumns.filter(function (item) {
            return item.dataIndex != col.dataIndex;
          });
        } else {
          /***打上钩 */
          tableColumnsState = indexColumnsState.filter(function (item) {
            return item.checked;
          });
        }

        _this.setState(function () {
          console.log();
          return {
            tableColumns: tableColumnsState
          };
        });
      });
    });

    defineProperty(assertThisInitialized(_this), "submit", function () {
      Modal.confirm({
        title: '\u662F\u5426\u5BF9\u8868\u5217\u8FDB\u884C\u4FDD\u5B58?',
        // content: '修改的内容',
        onOk: function onOk() {
          var params = _this.setColumn();

          _this.setTableCol(params);
        }
      });
    });

    defineProperty(assertThisInitialized(_this), "setColumn", function () {
      var _this$state2 = _this.state,
          tableColumns = _this$state2.tableColumns,
          indexColumns = _this$state2.indexColumns;
      var columnList = [];
      /**获取表格显示的列**/

      tableColumns.forEach(function (item, index) {
        if (item.title != "\u5E8F\u53F7" && item.title != "\u64CD\u4F5C") {
          columnList.push({
            columnCode: item.dataIndex,
            display: 1,
            sort: index
          });
        }
      });
      /**获取索引列显示不打上勾的选项**/

      indexColumns.forEach(function (item, index) {
        if (!item.checked) {
          columnList.push({
            columnCode: item.dataIndex,
            display: 0,
            sort: 0
          });
        }
      });
      var params = {
        tableCode: _this.props.tableCode,
        columnList: columnList
      };
      return params;
    });

    defineProperty(assertThisInitialized(_this), "resetColumn", function () {
      var indexColumns = _this.state.indexColumns;
      var newIndexColumns = indexColumns.map(function (item) {
        return _objectSpread$7(_objectSpread$7({}, item), {}, {
          checked: true
        });
      });

      _this.setState(function () {
        return {
          indexColumns: newIndexColumns,
          tableColumns: newIndexColumns
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "setIndexColumnShow", function (e) {
      var clientIndexColunmX = e.clientX - 120;
      var clientIndexColunmY = e.clientY - 10;

      _this.setState(function () {
        return {
          isIndexColunmShow: true,
          clientX: clientIndexColunmX,
          clientY: clientIndexColunmY
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "setShowBottom", function () {
      _this.setState(function () {
        return {
          isShowBottom: true
        };
      });
    });

    return _this;
  }

  createClass(ConfigableTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(DndProvider, {
        backend: HTML5Backend
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          "position": "relative",
          height: this.props.height
        }
      }, this.state.isIndexColunmShow && /*#__PURE__*/React.createElement("div", {
        className: "columnSelection",
        style: {
          "left": this.state.clientX,
          top: this.state.clientY
        }
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("span", {
        className: "close",
        onClick: function onClick() {
          _this2.setState({
            isShowBottom: false,
            isIndexColunmShow: false,
            clientX: 0,
            clientY: 0
          });
        }
      }, "\u2716"), this.state.indexColumns.map(function (item) {
        return /*#__PURE__*/React.createElement("li", {
          key: item.title
        }, /*#__PURE__*/React.createElement(Checkbox, {
          checked: item.checked,
          disabled: item.title == "\u5E8F\u53F7" || item.title == "\u64CD\u4F5C" ? true : false,
          onChange: function onChange(checkedValue) {
            _this2.checkBoxCol(checkedValue, item);
          }
        }), /*#__PURE__*/React.createElement("span", {
          className: "checkboxName"
        }, item.title));
      })), /*#__PURE__*/React.createElement("div", {
        className: "butGroup"
      }, /*#__PURE__*/React.createElement(Button, {
        size: "small",
        style: {
          "min-width": "50px",
          margin: '0 5px 0 2px'
        },
        type: "primary",
        onClick: this.submit
      }, "\u786E\u5B9A"), " ", /*#__PURE__*/React.createElement(Button, {
        style: {
          "min-width": "50px"
        },
        size: "small",
        onClick: this.resetColumn
      }, "\u91CD\u7F6E"))), /*#__PURE__*/React.createElement("div", {
        className: "columnBotton",
        ref: function ref(colunmSpan) {
          return _this2.colunmSpan = colunmSpan;
        }
      }, this.state.isShowBottom && !this.state.isIndexColunmShow && /*#__PURE__*/React.createElement("ul", {
        className: "f-clearfix butGroup-btn-list"
      }, /*#__PURE__*/React.createElement("li", {
        className: "f-left butGroup-btn-item",
        onClick: function onClick(e) {
          _this2.setIndexColumnShow(e);
        }
      }, "\u81EA\u5B9A\u4E49\u5E38\u7528\u5217"), /*#__PURE__*/React.createElement("li", {
        className: "f-left butGroup-btn-item",
        onClick: function onClick() {
          _this2.setState({
            isShowBottom: false
          });
        }
      }, "\u2716")), this.props.isSelectColumn && !this.state.isIndexColunmShow && !this.state.isShowBottom && /*#__PURE__*/React.createElement("span", {
        onClick: this.setShowBottom,
        type: "primary",
        style: {
          fontSize: "12px",
          padding: "0 6.6px",
          cursor: "pointer"
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "f-relative",
        style: {
          top: '-2px'
        }
      }, "\xB7\xB7\xB7"))), /*#__PURE__*/React.createElement("div", {
        className: "yss-configable-table tableInfo"
      }, /*#__PURE__*/React.createElement(CommonTable, _extends_1({}, this.props, {
        rowKey: function rowKey(record) {
          return record.id || _this2.props.rowKey;
        },
        columns: this.state.tableColumns
      })))));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var columns = nextProps.columns;
      if (this.props.columns.length === columns.length) return false;
      var formatColumns = columns.map(function (item) {
        return _objectSpread$7(_objectSpread$7({}, item), {}, {
          checked: true
        });
      });
      this.setState(function () {
        return {
          tableColumns: formatColumns,
          indexColumns: formatColumns
        };
      }, function () {
        /**发送请求获取新的表格 */
        if (_this3.props.tableCode) {
          _this3.moustSetColumn();
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      var columns = this.props.columns;
      var formatColumns = columns.map(function (item) {
        return _objectSpread$7(_objectSpread$7({}, item), {}, {
          checked: true
        });
      });
      this.setState(function () {
        return {
          tableColumns: formatColumns,
          indexColumns: formatColumns
        };
      }, function () {
        /**发送请求获取新的表格 */
        if (_this4.props.tableCode) {
          _this4.moustSetColumn();
        }
      });
    }
    /****勾选复选框 */

  }, {
    key: "setTableCol",

    /***设置列发送给后台进行操作 */
    value: function () {
      var _setTableCol = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(params) {
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // let result= await $ajax(`/dfas-base-biz/usertable/config/save`, params, 'post');
                service.httpService({
                  baseURL: "/dfas-base-biz",
                  url: "/usertable/config/save",
                  method: "post",
                  data: params
                }).then(function (res) {
                  var winRspType = res.winRspType,
                      data = res.data,
                      msg = res.msg;

                  if (winRspType == "SUCC") {
                    message.success("\u4FDD\u5B58\u6210\u529F");
                  } else {
                    message.error(msg);
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function setTableCol(_x) {
        return _setTableCol.apply(this, arguments);
      }

      return setTableCol;
    }()
    /***加载表格的时候获取当前表格的列 */

  }, {
    key: "moustSetColumn",
    value: function () {
      var _moustSetColumn = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(params) {
        var _this5 = this;

        var indexColumns;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                indexColumns = this.state.indexColumns;
                service.httpService({
                  baseURL: service.dfasBaseBiz,
                  url: "/usertable/config/get/".concat(this.props.tableCode),
                  method: "get"
                }).then(function (res) {
                  var winRspType = res.winRspType,
                      data = res.data;

                  if (winRspType != "SUCC") {
                    return;
                  }

                  if (data == null) {
                    return;
                  }
                  /*获取与后台对比的值**/


                  var newIndexColumn = indexColumns;

                  for (var i = 0; i < indexColumns.length; i++) {
                    var isTrue = false;

                    for (var j = 0; j < data.columnList.length; j++) {
                      //indexColumns[i]["dataIndex"]==data.columnList[j]["columnCode"]
                      //判断是后台返回的数据是否为true,是true 进行隐藏
                      if (indexColumns[i]["dataIndex"] == data.columnList[j]["columnCode"] && data.columnList[j].display == "1") {
                        newIndexColumn[i]["checked"] = true;
                        isTrue = true;
                      }
                    }

                    if (!isTrue) {
                      newIndexColumn[i]["checked"] = false;
                    }

                    if (indexColumns[i]["title"] == "\u5E8F\u53F7" || indexColumns[i]["title"] == "\u64CD\u4F5C") {
                      newIndexColumn[i]["checked"] = true;
                    }
                  }

                  _this5.setState(function () {
                    return {
                      indexColumns: newIndexColumn,
                      tableColumns: newIndexColumn.filter(function (item) {
                        return item.checked;
                      })
                    };
                  });
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function moustSetColumn(_x2) {
        return _moustSetColumn.apply(this, arguments);
      }

      return moustSetColumn;
    }()
  }]);

  return ConfigableTable;
}(React.Component);
/***设置props默认值 */


ConfigableTable$1.defaultProps = {
  isSelectColumn: true
};

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var confirm = Modal.confirm;
var ConfirmModal = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return confirm(_objectSpread$8({
    title: '\u662F\u5426\u5220\u9664\u9009\u4E2D\u7684\u6570\u636E\uFF1F',
    okText: '\u786E\u5B9A',
    cancelText: '\u53D6\u6D88'
  }, options));
});

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Drag = /*#__PURE__*/function () {
  //构造函数
  function Drag(el, _that, remark, zIndex) {
    var _this = this;

    classCallCheck(this, Drag);

    var formBody = el.getElementsByClassName('formBody')[0];
    var headContent = el.getElementsByClassName('headContent')[0];
    var changeSmall = el.getElementsByClassName('operateItem')[0];
    var changebig = el.getElementsByClassName('operateItem')[1];
    var height = el.offsetHeight;
    var width = el.offsetWidth;
    el.style.left = "calc(10% + ".concat(zIndex * 20, "px)");
    el.style.top = "calc(20% + ".concat(zIndex * 20, "px)");
    this.el = el; //鼠标摁下时的元素位置

    this.startOffset = {}; //鼠标摁下时的鼠标位置

    this.startPoint = {};

    var move = function move(e) {
      _this.move(e);
    };

    this.width = width;

    var end = function end(e) {
      var modalList = _that.state.modalList;

      for (var i = 0; i < modalList.length; i++) {
        if (modalList[i].modalRef !== remark) {
          var box = _that[modalList[i].modalRef];
          box.style.zIndex = i + 1;
        }
      }

      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', end);
    };

    headContent.addEventListener('mousedown', function (e) {
      _this.start(e);

      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', end);
    });
    changeSmall.addEventListener('click', function (e) {
      el.style.width = '200px';
      el.style.left = "".concat(20 + zIndex * 20, "px");
      el.style.top = "calc(95% - ".concat(zIndex * 40, "px)");
      formBody.style.display = 'none';
      changebig.style.display = 'inline-block';
      changeSmall.style.display = 'none';
    });
    changebig.addEventListener('click', function (e) {
      el.style.width = "".concat(_this.width, "px");
      el.style.left = "calc(10% - ".concat(zIndex * 20, "px)");
      el.style.top = "calc(20% - ".concat(zIndex * 20, "px)");
      formBody.style.display = 'block';
      changeSmall.style.display = 'inline-block';
      changebig.style.display = 'none';
    });
  } //摁下时的处理函数


  createClass(Drag, [{
    key: "start",
    value: function start(e) {
      var el = this.el;
      this.startOffset = {
        x: el.offsetLeft,
        y: el.offsetTop
      };
      this.startPoint = {
        x: e.clientX,
        y: e.clientY
      };
      el.style.zIndex = 999;
    } //鼠标移动时的处理函数

  }, {
    key: "move",
    value: function move(e) {
      var el = this.el,
          startOffset = this.startOffset,
          startPoint = this.startPoint;
      var newPoint = {
        x: e.clientX,
        y: e.clientY
      };
      var dis = {
        x: newPoint.x - startPoint.x,
        y: newPoint.y - startPoint.y
      };
      el.style.left = dis.x + startOffset.x + 'px';
      el.style.top = dis.y + startOffset.y + 'px';
    }
  }]);

  return Drag;
}();

var MultipleModals = /*#__PURE__*/function (_Component) {
  inherits(MultipleModals, _Component);

  var _super = _createSuper$5(MultipleModals);

  function MultipleModals(props) {
    var _this2;

    classCallCheck(this, MultipleModals);

    _this2 = _super.call(this, props);

    defineProperty(assertThisInitialized(_this2), "refresh", function (modalList, modalRef) {
      _this2.setState({
        modalList: modalList
      }, function () {
        var box = _this2[modalRef];

        (function () {
          var dragbox = new Drag(box, assertThisInitialized(_this2), modalRef, modalList.length - 1);
        })();

        for (var i = 0; i < modalList.length; i++) {
          var _box = _this2[modalList[i].modalRef];
          _box.style.zIndex = i + 1;
        }
      });
    });

    defineProperty(assertThisInitialized(_this2), "closeModal", function (modalRef) {
      var modalList = _this2.state.modalList;
      var params = modalList.filter(function (item) {
        return item.modalRef !== modalRef;
      });

      _this2.setState({
        modalList: params
      }, function () {
        if (_this2.props.closeModal && typeof _this2.props.closeModal === 'function') {
          _this2.props.closeModal(params);
        }
      });
    });

    _this2.state = {
      modalList: _this2.props.modalList
    };
    _this2.props.classRef && _this2.props.classRef(assertThisInitialized(_this2));
    return _this2;
  }

  createClass(MultipleModals, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var modalList = this.state.modalList;

      var _loop = function _loop(i) {
        var box = _this3[modalList[i].modalRef];

        (function () {
          var dragbox = new Drag(box, _this3, modalList[i].modalRef, i);
        })();
      };

      for (var i = 0; i < modalList.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var modalList = this.state.modalList;
      return /*#__PURE__*/React.createElement("div", null, modalList.map(function (item) {
        var style = {
          width: "".concat(item.width || 800, "px")
        };
        return /*#__PURE__*/React.createElement("div", {
          style: style,
          className: "flexModal",
          key: item.key,
          ref: function ref(classRef) {
            _this4[item.modalRef] = classRef;
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "headContent"
        }, /*#__PURE__*/React.createElement("div", null, item.title || null), /*#__PURE__*/React.createElement("div", {
          className: "headOperate"
        })), /*#__PURE__*/React.createElement("div", {
          className: "formBody"
        }, item.component && /*#__PURE__*/React.createElement(item.component, null) || null));
      }));
    }
  }]);

  return MultipleModals;
}(Component);

var uploadFilesModel = lugiax.register({
  model: 'uploadFilesModel',
  state: {
    visible: false,
    dataSource: []
  },
  mutations: {
    async: {},
    sync: {
      changeVisible: function changeVisible(state, bool) {
        return state.set('visible', bool || false).set('dataSource', []);
      },
      saveDataSource: function saveDataSource(state, data) {
        return state.set('dataSource', data || []);
      }
    }
  }
});

var _dec, _class, _temp;

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Dragger = Upload.Dragger;
var _that = null;
var UploadFilesModal = (_dec = connect(uploadFilesModel, function (state) {
  return {
    visible: state.get('visible'),
    dataSource: state.get('dataSource')
  };
}, function (mutations) {
  return {
    changeVisible: mutations.changeVisible,
    saveDataSource: mutations.saveDataSource
  };
}), _dec(_class = (_temp = /*#__PURE__*/function (_PureComponent) {
  inherits(UploadFilesModal, _PureComponent);

  var _super = _createSuper$6(UploadFilesModal);

  function UploadFilesModal(props) {
    var _this;

    classCallCheck(this, UploadFilesModal);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "onOk", function () {
      var changeVisible = _this.props.changeVisible;

      if (_this.props.uploadList && typeof _this.props.uploadList === 'function') {
        var _uploadFilesPop$getSt = uploadFilesModel.getState().toJS(),
            dataSource = _uploadFilesPop$getSt.dataSource;

        _this.props.uploadList(dataSource);
      }

      changeVisible(false);
    });

    defineProperty(assertThisInitialized(_this), "onCancel", function () {
      var changeVisible = _this.props.changeVisible;
      changeVisible(false);
    });

    defineProperty(assertThisInitialized(_this), "deleteRow", function (data) {
      var saveDataSource = _this.props.saveDataSource;

      var _uploadFilesPop$getSt2 = uploadFilesModel.getState().toJS(),
          dataSource = _uploadFilesPop$getSt2.dataSource;

      var resultData = dataSource.filter(function (item) {
        return item.uid !== data.uid;
      });
      saveDataSource(resultData);
    });

    defineProperty(assertThisInitialized(_this), "updataDataSource", function (data) {
      var saveDataSource = _this.props.saveDataSource;

      var _uploadFilesPop$getSt3 = uploadFilesModel.getState().toJS(),
          dataSource = _uploadFilesPop$getSt3.dataSource;

      var resultData = [];
      dataSource.map(function (item) {
        if (item.uid === data.uid) {
          return resultData.push(data);
        } else {
          return resultData.push(item);
        }
      });
      saveDataSource(resultData);
    });

    defineProperty(assertThisInitialized(_this), "addUploadList", function (data) {
      var saveDataSource = _this.props.saveDataSource;

      var _uploadFilesPop$getSt4 = uploadFilesModel.getState().toJS(),
          dataSource = _uploadFilesPop$getSt4.dataSource;

      dataSource.push(data);
      saveDataSource(dataSource);
    });

    _that = assertThisInitialized(_this);
    return _this;
  }

  createClass(UploadFilesModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          visible = _this$props.visible,
          dataSource = _this$props.dataSource;
      var gutter = [16, 16];
      var uploadProps = {
        name: 'file',
        multiple: this.props.multiple || true,
        action: this.props.action || '/files/uploadFile',
        headers: {
          authorization: 'dev'
        },
        showUploadList: false,
        onChange: function onChange(info) {
          if (info.file && info.file.status === 'done') {
            var uid = info.file.uid;
            var params = {
              uid: uid,
              process: 100,
              id: info.file.response && info.file.response.data,
              fileName: info.file.name
            };

            _this2.updataDataSource(params);
          }
        },
        beforeUpload: function beforeUpload(file, fileList) {
          var params = {
            uid: file.uid,
            fileName: file.name,
            process: 30
          };

          _this2.addUploadList(params);
        }
      };

      if (this.props.accept) {
        uploadProps.accept = this.props.accept;
      }

      var columns = [{
        title: '\u6587\u4EF6\u540D\u79F0',
        dataIndex: 'fileName',
        width: 150
      }, {
        title: '\u4E0A\u4F20\u8FDB\u5EA6',
        dataIndex: 'process',
        width: 150,
        render: function render(text, record, index) {
          if (text === 100) {
            return /*#__PURE__*/React.createElement(Progress, {
              percent: 100
            });
          } else {
            return /*#__PURE__*/React.createElement(Progress, {
              percent: text || 0,
              status: "active"
            });
          }
        }
      }, {
        title: '\u64CD\u4F5C',
        dataIndex: 'action',
        width: 150,
        render: function render(text, record, index) {
          return /*#__PURE__*/React.createElement("span", {
            onClick: function onClick() {
              _this2.deleteRow(record);
            },
            className: "delectBox"
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              color: '#FF900D'
            }
          }, "\u5220\u9664"));
        }
      }];
      return /*#__PURE__*/React.createElement(Modal, {
        width: 1000,
        title: '\u4E0A\u4F20\u9644\u4EF6',
        visible: visible,
        onOk: this.onOk,
        onCancel: this.onCancel,
        destroyOnClose: true,
        className: "modalStyle",
        getContainer: false,
        wrapClassName: "uploadFilesModal"
      }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
        span: 8,
        className: "fileLeft"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ant-upload ant-upload-drag fileLeftBox"
      }, /*#__PURE__*/React.createElement(Upload, uploadProps, /*#__PURE__*/React.createElement(Button, null, "\u9009\u62E9\u4E0A\u4F20\u9644\u4EF6")))), /*#__PURE__*/React.createElement(Col, {
        span: 16
      }, /*#__PURE__*/React.createElement(Dragger, uploadProps, /*#__PURE__*/React.createElement("p", {
        className: "ant-upload-text"
      }, "\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u5904\u4E0A\u4F20")))), /*#__PURE__*/React.createElement(Row, {
        gutter: gutter,
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/React.createElement(Table, {
        bordered: true,
        pagination: false,
        columns: columns,
        dataSource: dataSource.toJS ? dataSource.toJS() : dataSource
      })));
    }
  }]);

  return UploadFilesModal;
}(PureComponent), _temp)) || _class);

UploadFilesModal.show = function () {

  _that.props.changeVisible(true);
};

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NewModal = /*#__PURE__*/function (_Component) {
  inherits(NewModal, _Component);

  var _super = _createSuper$7(NewModal);

  function NewModal() {
    var _this;

    classCallCheck(this, NewModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "submission", function (e) {
      !!_this.formRule ? _this.formRule.handleSubmit(e) : _this.props.onOk(e);
    });

    return _this;
  }

  createClass(NewModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(DragDom, {
        notDragSelect: ".ant-btn",
        canDragSelect: ['.ant-modal-header', '.ant-modal-footer'],
        dragAreaSelect: ".ant-modal"
      }, /*#__PURE__*/React.createElement("div", {
        className: "yss-biz-drag-modal"
      }, /*#__PURE__*/React.createElement(Modal, _extends_1({}, modalInfo, {
        width: this.props.width,
        title: this.props.title,
        visible: this.props.visible,
        onOk: this.submission,
        onCancel: this.props.onCancel
      }, this.props), React.Children.map(this.props.children, function (child) {
        return /*#__PURE__*/React.cloneElement(child, {
          onRef: function onRef(ref) {
            _this2.formRule = ref;
          }
        });
      }))));
    }
  }]);

  return NewModal;
}(Component);

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var DragDom = (function (props) {
  var DragDom;
  var startPosition;
  var mouseStartPosition;
  var movePosition;
  var endPosition;
  var notDragSelect = props.notDragSelect,
      canDragSelect = props.canDragSelect,
      dragAreaSelect = props.dragAreaSelect;
  var Child = isObject(props.children) ? props.children : {}; // 上层是否存在某个class

  var getDomTreeHasClass = function getDomTreeHasClass(dom, classNames) {
    !Array.isArray(classNames) && (classNames = [classNames]);

    for (var i in classNames) {
      if (domTreeHasClass(dom, classNames[i])) return true;
    }

    return false;
  }; // 创建遮罩设置初始位置


  var createMarsk = function createMarsk(e) {
    var notDrag = false;
    var canDrag = false;

    if (!!notDragSelect) {
      notDrag = getDomTreeHasClass(e.target, notDragSelect);
    }

    canDrag = getDomTreeHasClass(e.target, canDragSelect);

    if (!notDrag) {
      if (canDrag || !canDragSelect) {
        var MaskDom = document.createElement("div");
        MaskDom.style = 'position:fixed;top:0;bottom:0;left:0;right:0;z-index:9999999;cursor:move';
        MaskDom.onmousemove = onDragDom;

        MaskDom.onmouseup = function (e) {
          return onDestruct(e);
        };

        document.getElementsByTagName('body')[0].appendChild(MaskDom);
        DragDom = getDragDom(e);
        mouseStartPosition = {
          x: e.clientX,
          y: e.clientY
        };
      }
    }
  }; // 获取拖拽元素


  var getDragDom = function getDragDom(e) {
    var _DragDmo;

    _DragDmo = !!dragAreaSelect ? findFaceLevelNode(e.target, dragAreaSelect) : e.currentTarget;
    !dragAreaSelect && (_DragDmo = props.children);
    var x = _DragDmo.offsetLeft;
    var y = _DragDmo.offsetTop;
    setStyle(_DragDmo, {
      position: 'fixed',
      left: x + 'px',
      top: y + 'px',
      margin: "0"
    });
    startPosition = {
      x: x,
      y: y
    };
    return _DragDmo;
  }; // 拖拽


  var onDragDom = function onDragDom(e) {
    throttle(setPosition, 50)(e);
  }; // 销毁操作层


  var onDestruct = function onDestruct(e) {
    e.currentTarget.parentNode.removeChild(e.currentTarget);
  }; // 设置位置


  var setPosition = function setPosition(e) {
    movePosition = {
      x: e.clientX - mouseStartPosition.x,
      y: e.clientY - mouseStartPosition.y
    };
    endPosition = {
      x: movePosition.x + startPosition.x,
      y: movePosition.y + startPosition.y
    };
    DragDom.style.left = endPosition.x + 'px';
    DragDom.style.top = endPosition.y + 'px';
  }; // 给虚拟dom添加方法


  var setDOMProps = function setDOMProps() {
    return _objectSpread$9(_objectSpread$9({}, Child.props), {}, {
      onMouseDown: function onMouseDown(e) {
        createMarsk(e);
      }
    });
  };

  return /*#__PURE__*/React.cloneElement(Child, setDOMProps());
});

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DragDom$1 = /*#__PURE__*/function (_PureComponent) {
  inherits(DragDom, _PureComponent);

  var _super = _createSuper$8(DragDom);

  function DragDom(props) {
    var _this;

    classCallCheck(this, DragDom);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "getDragProps", function (theChildren, index, push) {
      var me = assertThisInitialized(_this);

      return {
        draggable: me.props["switch"] ? true : false,
        onMouseDown: function onMouseDown(e) {
          me.dragTarget = e.currentTarget || e.target;
          me.dragStart(index);
        },
        onMouseUp: function onMouseUp() {
          me.dragTarget.style.opacity = '';
        },
        onDragEnter: function onDragEnter() {
          me.overIndexs = index;
        },
        onDragOver: function onDragOver(e) {
          if (!me.dragTarget) return false;
          e.preventDefault();
          me.setDragMoveStyle(e, true);
        },
        onDragLeave: function onDragLeave(e) {
          me.setDragMoveStyle(e);
        },
        onDrop: function onDrop(e) {
          push && (theChildren = me.childrenList = [].concat(toConsumableArray(me.childrenList), toConsumableArray(theChildren)));
          me.dropDown(theChildren);
          me.setDragMoveStyle(e, false);
          me.children = theChildren;
          me.setState({
            dragDmos: me.children
          });
        }
      };
    });

    _this.state = {
      dragDmos: []
    };
    _this.childrenList = [];
    _this.setDragMoveStyle = _this.setDragMoveStyle.bind(assertThisInitialized(_this));
    _this.mapChildren = _this.mapChildren.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(DragDom, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.createChildrenDom();
    }
  }, {
    key: "render",
    value: function render() {
      return this.cloneDreagDom(this.mapChildren(this.children));
    } // 根据传入的children创建拖拽节点

  }, {
    key: "createChildrenDom",
    value: function createChildrenDom() {
      var me = this;
      me.parent = me.props.children;

      if (Array.isArray(me.parent)) {
        return console.error('props.children \u6709\u4E14\u53EA\u80FD\u6709\u4E00\u4E2A\u6839\u8282\u70B9');
      }

      me.children = me.parent.props.children;
    }
  }, {
    key: "setDragMoveStyle",
    value: function setDragMoveStyle(e, bool) {
      if (!this.props["switch"]) return false;
      var target = e.currentTarget || e.target;
      var lineNode = this.props.effectOnChild ? target.childNodes[0] : target;
      lineNode.style.outline = bool ? '#FF900D dotted 1px' : '';
    }
  }, {
    key: "cloneDreagDom",
    value: function cloneDreagDom(children) {
      return this.parent !== undefined ? /*#__PURE__*/React.cloneElement(this.parent, {
        children: children
      }) : children;
    }
  }, {
    key: "dragStart",
    value: function dragStart(index) {
      var me = this;
      if (!me.props["switch"]) return false;
      me.dragTarget.style.opacity = '.5';
      me.dragTarget.index = index;
    }
  }, {
    key: "dropDown",
    value: function dropDown(theChildren) {
      var me = this;
      if (!me.dragTarget) return false;
      if (!me.props["switch"]) return false;
      me.dragTarget.style.opacity = '';
      var downDom = theChildren[me.overIndexs];
      theChildren[me.overIndexs] = theChildren[me.dragTarget.index];
      theChildren[me.dragTarget.index] = downDom;
    }
  }, {
    key: "mapChildren",
    value: function mapChildren(childrenList, resetIndex, push) {
      var me = this;

      var theChildren = toConsumableArray(childrenList);

      return React.Children.map(theChildren, function (child, index) {
        index = resetIndex || index;
        return /*#__PURE__*/React.cloneElement(child, me.getDragProps(theChildren, index, push));
      });
    }
  }, {
    key: "getDragList",
    value: function getDragList() {
      return this.parent;
    }
  }]);

  return DragDom;
}(PureComponent);

var index = (function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    var xx = opts.loader().then;
    return Loadable(Object.assign(opts, {
      loading: Loading,
      delay: 300,
      timeout: 6000
    }));
  } catch (_unused) {
    return opts.loader;
  }
});

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FadeDown = /*#__PURE__*/function (_Component) {
  inherits(FadeDown, _Component);

  var _super = _createSuper$9(FadeDown);

  function FadeDown() {
    classCallCheck(this, FadeDown);

    return _super.apply(this, arguments);
  }

  createClass(FadeDown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isSHow = _this$props.isSHow;
      return /*#__PURE__*/React.createElement(CSSTransition, {
        "in": isSHow,
        timeout: 300,
        classNames: "down",
        unmountOnExit: true
      }, /*#__PURE__*/React.createElement("div", {
        className: "transfrom"
      }, children));
    }
  }]);

  return FadeDown;
}(Component);

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TransfromDown = /*#__PURE__*/function (_PureComponent) {
  inherits(TransfromDown, _PureComponent);

  var _super = _createSuper$a(TransfromDown);

  function TransfromDown() {
    var _this;

    classCallCheck(this, TransfromDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      isSHow: true
    });

    defineProperty(assertThisInitialized(_this), "toggleMore", function () {
      _this.setState({
        isSHow: !_this.state.isSHow
      });

      isFunc(_this.props.toggleMoreAfter) && _this.props.toggleMoreAfter(!_this.state.isSHow);
    });

    return _this;
  }

  createClass(TransfromDown, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/React.createElement(Fragment, null, children[0], /*#__PURE__*/React.createElement(CSSTransition, {
        "in": !this.state.isSHow,
        timeout: 300,
        classNames: "fade"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fade-layout",
        style: {
          position: this.props.position
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "fade-button"
      }, /*#__PURE__*/React.createElement("span", {
        className: "fade-button-inner",
        onClick: this.toggleMore
      }, "\u5173\u8054\u4FE1\u606F")), children[1])));
    }
  }]);

  return TransfromDown;
}(PureComponent);

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PageBody = function PageBody(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: !!props.className ? props.haveBgColor ? "".concat(props.className, " page-body-have-bg-color layoutColumns") : "".concat(props.className, " layoutColumns") : props.haveBgColor ? 'page-body-have-bg-color layoutColumns' : 'layoutColumns'
  }, props.children);
};

PageBody.PageSide = function (props) {
  return /*#__PURE__*/React.createElement("div", {
    className: !!props.className ? props.className + ' side' : 'side',
    style: _objectSpread$a(_objectSpread$a({}, props.style), {}, {
      marginRight: props.noMargin ? 0 : '',
      width: props.half ? 'calc(50% - 5px)' : props.width,
      backgroundColor: props.noBgColor ? 'transparent' : !!props.bgColor ? props.bgColor : ''
    })
  }, props.children);
};

PageBody.PageMain = function (props) {
  return /*#__PURE__*/React.createElement("div", {
    className: !!props.className ? props.className + " main" : 'main'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: props.height || '100%',
      backgroundColor: props.noBgColor ? 'transparent' : !!props.bgColor ? props.bgColor : ''
    }
  }, props.children));
};

PageBody.Container = function (props) {
  return /*#__PURE__*/React.createElement("div", {
    className: !props.noPadding ? "f-tab-space" : "",
    style: {
      height: props.height ? 'calc(' + props.height + ')' : '100%'
    }
  }, props.children);
};

PageBody.Plate = function (props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "plate-box",
    style: {
      height: "calc(".concat(props.height)
    }
  }, !!props.title && /*#__PURE__*/React.createElement("div", {
    className: "plate-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "plate-title-inner"
  }, /*#__PURE__*/React.createElement("span", null, props.title))), /*#__PURE__*/React.createElement("div", {
    className: !props.title ? 'plate-body not-title' : 'plate-body'
  }, /*#__PURE__*/React.createElement("div", {
    className: !!props.footer ? 'have-footer' : 'not-footer'
  }, /*#__PURE__*/React.createElement("div", {
    className: "plate-body-inner"
  }, props.children)), !!props.footer && /*#__PURE__*/React.createElement("div", {
    className: "plate-footer"
  }, /*#__PURE__*/cloneElement(props.footer, {
    mainProps: (props.children || {}).props
  }))));
};

var TabPane = Tabs.TabPane;

var TabsParent = function TabsParent(props) {
  var tabParent = Array.isArray(props.children) ? props.children : [props.children];
  return /*#__PURE__*/React.createElement("div", {
    className: props.fullHeight ? 'w-tabs-box full-height' : 'w-tabs-box'
  }, /*#__PURE__*/React.createElement(Tabs, _extends_1({}, props, {
    className: props.haveBgColor ? 'have-bgColor' : ''
  }), tabParent.map(function (child, index) {
    var childProps = child.props;
    return /*#__PURE__*/React.createElement(TabPane, {
      tab: childProps.tab,
      key: child.key || index
    }, child);
  })));
};

TabsParent.TabPane = function (props) {
  return /*#__PURE__*/React.createElement("div", {
    className: props.noPadding ? "" : "f-tab-space"
  }, props.children);
};

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SelectNorm = /*#__PURE__*/function (_PureComponent) {
  inherits(SelectNorm, _PureComponent);

  var _super = _createSuper$b(SelectNorm);

  function SelectNorm() {
    classCallCheck(this, SelectNorm);

    return _super.apply(this, arguments);
  }

  createClass(SelectNorm, [{
    key: "render",
    value: function render() {
      var _this = this;

      var resProps = {};
      var options = this.props.options;
      Object.keys(this.props).forEach(function (key) {
        key !== 'options' && (resProps[key] = _this.props[key]);
      });
      return /*#__PURE__*/React.createElement(Select, _extends_1({
        onSearch: this.handleSearch,
        filterOption: function filterOption(input, option) {
          return option.key.toLowerCase().indexOf(input.toLowerCase()) > 0 || option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, resProps, {
        allowClear: true
      }), (options || []).map(function (item) {
        return /*#__PURE__*/React.createElement(Select.Option, {
          key: item.value,
          datas: item.dataSource,
          title: item.label
        }, item.label);
      }));
    }
  }]);

  return SelectNorm;
}(PureComponent);

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SelectMapDics = /*#__PURE__*/function (_PureComponent) {
  inherits(SelectMapDics, _PureComponent);

  var _super = _createSuper$c(SelectMapDics);

  function SelectMapDics() {
    classCallCheck(this, SelectMapDics);

    return _super.apply(this, arguments);
  }

  createClass(SelectMapDics, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      prevProps.code !== this.props.code && this.$dics.getDictData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/React.createElement(DictSelect, _extends_1({
        refs: function refs(ref) {
          _this.$dics = ref;
        }
      }, this.props, {
        dict: this.props.code
      }));
    }
  }]);

  return SelectMapDics;
}(PureComponent);

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SelectRequest = /*#__PURE__*/function (_PureComponent) {
  inherits(SelectRequest, _PureComponent);

  var _super = _createSuper$d(SelectRequest);

  function SelectRequest(_props) {
    var _this;

    classCallCheck(this, SelectRequest);

    _this = _super.call(this, _props);

    defineProperty(assertThisInitialized(_this), "handleSearch", function (value) {
      var type = _this.props.type;
      var resName = (_this.props || {}).resName || _this.config[type].resName;

      if (!!resName) {
        var newProps = _objectSpread$b({}, _this.props);

        newProps.params = newProps.params || {};
        newProps.params[resName] = value;

        _this.handleOptionList(newProps);
      }
    });

    defineProperty(assertThisInitialized(_this), "handleOptionList", function (props) {
      var type = props.type,
          _props$params = props.params,
          params = _props$params === void 0 ? {} : _props$params;
      var _this$config$type = _this.config[type],
          url = _this$config$type.url,
          _this$config$type$met = _this$config$type.method,
          method = _this$config$type$met === void 0 ? 'get' : _this$config$type$met,
          _this$config$type$joi = _this$config$type.join,
          join = _this$config$type$joi === void 0 ? false : _this$config$type$joi,
          _this$config$type$opt = _this$config$type.option,
          option = _this$config$type$opt === void 0 ? {} : _this$config$type$opt;
      params = _objectSpread$b(_objectSpread$b({}, _this.config[type].params), params);
      var _option$label = option.label,
          label = _option$label === void 0 ? 'name' : _option$label,
          _option$value = option.value,
          value = _option$value === void 0 ? 'code' : _option$value;

      if (!!join) {
        url = url + "/" + params;
        params = method;
      }

      $ajax(url, params, method).then(function (res) {
        var list = res.data || [];

        if (isObject(list)) {
          list = list.list || [];
        }

        _this.setState({
          optionsDatas: _this.mapOption(list, label, value)
        });
      });
    });

    defineProperty(assertThisInitialized(_this), "mapOption", function (list, name, value) {
      var type = _this.props.type;
      var _this$config$type$ful = _this.config[type].fullLabel,
          fullLabel = _this$config$type$ful === void 0 ? false : _this$config$type$ful;
      return (list || []).map(function (item) {
        var label = !!fullLabel ? item[value] + ' ' + item[name] : item[name];
        return {
          label: label,
          value: item[value],
          dataSource: item
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "setNotFoundContent", function () {
      var type = _this.props.type;
      var resName = (_this.props || {}).resName || _this.config[type].resName;
      return !!resName ? '\u6309\u6761\u4EF6\u641C\u7D22\u6570\u636E' : '\u6682\u65E0\u6570\u636E';
    });

    _this.config = _this.props.config || {};
    _this.state = {
      optionsDatas: []
    };
    return _this;
  }

  createClass(SelectRequest, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.handleOptionList(this.props);
    } // componentWillReceiveProps(nextProps) {
    //     const newProps = JSON.stringify(nextProps);
    //     const oldProps = JSON.stringify(this.props);
    //     if (newProps !== oldProps) {
    //         this.handleOptionList(nextProps)
    //     }
    // }

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Select, _extends_1({
        onSearch: this.handleSearch,
        filterOption: function filterOption(input, option) {
          return option.key.toLowerCase().indexOf(input.toLowerCase()) > 0 || option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        notFoundContent: this.setNotFoundContent()
      }, this.props, {
        allowClear: true
      }), (this.state.optionsDatas || []).map(function (item) {
        return /*#__PURE__*/React.createElement(Select.Option, {
          key: item.value,
          datas: item.dataSource,
          title: item.label
        }, item.label);
      }));
    }
  }]);

  return SelectRequest;
}(PureComponent);

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TreeSelectRequest = /*#__PURE__*/function (_PureComponent) {
  inherits(TreeSelectRequest, _PureComponent);

  var _super = _createSuper$e(TreeSelectRequest);

  function TreeSelectRequest(_props) {
    var _this;

    classCallCheck(this, TreeSelectRequest);

    _this = _super.call(this, _props);

    defineProperty(assertThisInitialized(_this), "handleOptionList", function (props) {
      var type = props.type,
          _props$params = props.params,
          params = _props$params === void 0 ? {} : _props$params;
      var _this$config$type = _this.config[type],
          url = _this$config$type.url,
          _this$config$type$met = _this$config$type.method,
          method = _this$config$type$met === void 0 ? 'get' : _this$config$type$met,
          _this$config$type$joi = _this$config$type.join,
          join = _this$config$type$joi === void 0 ? false : _this$config$type$joi;
      params = _objectSpread$c(_objectSpread$c({}, _this.config[type].params), params);

      if (!!join) {
        url = url + "/" + params;
        params = method;
      }

      $ajax(url, params, method).then(function (res) {
        var _res$data = res.data,
            data = _res$data === void 0 ? [] : _res$data;

        var datas = _this.loopTree(data);

        _this.setState({
          treeDatas: datas
        });
      });
    });

    defineProperty(assertThisInitialized(_this), "loopTree", function (children) {
      return children === null || children === void 0 ? void 0 : children.map(function (item) {
        var _this$config;

        if (!!item.children) {
          return _this.loopTree(item.children);
        }

        var option = (_this$config = _this.config) === null || _this$config === void 0 ? void 0 : _this$config.option;

        if (!!option) {
          var _item$option, _item$option2;

          return _objectSpread$c(_objectSpread$c({}, item), {}, {
            title: (_item$option = item[option]) === null || _item$option === void 0 ? void 0 : _item$option.label,
            value: (_item$option2 = item[option]) === null || _item$option2 === void 0 ? void 0 : _item$option2.label
          });
        }

        return item;
      });
    });

    _this.config = _this.props.config || {};
    _this.state = {
      treeDatas: []
    };
    return _this;
  }

  createClass(TreeSelectRequest, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.handleOptionList(this.props);
    } // componentWillReceiveProps(nextProps) {
    //     const newProps = JSON.stringify(nextProps);
    //     const oldProps = JSON.stringify(this.props);
    //     if (newProps !== oldProps) {
    //         this.handleOptionList(nextProps)
    //     }
    // }

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(TreeSelect, _extends_1({
        allowClear: true
      }, this.props, {
        treeData: this.state.treeDatas
      }));
    }
  }]);

  return TreeSelectRequest;
}(PureComponent);

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PartInput = /*#__PURE__*/function (_PureComponent) {
  inherits(PartInput, _PureComponent);

  var _super = _createSuper$f(PartInput);

  function PartInput(props) {
    var _this;

    classCallCheck(this, PartInput);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "resetValue", function (value) {
      var reg = value.toString().indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;
      return value.toString().replace(reg, '$1,');
    });

    defineProperty(assertThisInitialized(_this), "onChange", function (e) {
      var value = isNaN(e) && _typeof_1(e) === 'object' ? (e.target.value || '').replace(/,/g, '') : e + '';
      value = _this.resetValue(value);

      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: ''
    };
    return _this;
  }

  createClass(PartInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onChange(this.props.value);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var newProps = JSON.stringify(nextProps);
      var oldwProps = JSON.stringify(this.props);

      if (newProps !== oldwProps) {
        this.onChange(nextProps.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.resetProps = _objectSpread$d({}, this.props);
      var InputType;

      switch (this.resetProps.type) {
        case 'InputNumber':
          InputType = InputNumber;

          this.resetProps.parser = function (value) {
            return (value || '').replace(/,/g, '');
          };

          this.resetProps.formatter = function (value) {
            return _this2.resetValue(value);
          };

          break;

        default:
          InputType = Input;
          !!this.resetProps.value && (this.resetProps.value = this.state.value);
          break;
      }

      return /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'right'
        },
        className: this.props.readOnly ? 'input-part-readOnly' : ''
      }, /*#__PURE__*/React.createElement(InputType, _extends_1({}, this.resetProps, {
        style: {
          width: '100%'
        }
      })));
    }
  }]);

  return PartInput;
}(PureComponent);

function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var InputRange = /*#__PURE__*/function (_PureComponent) {
  inherits(InputRange, _PureComponent);

  var _super = _createSuper$g(InputRange);

  function InputRange() {
    classCallCheck(this, InputRange);

    return _super.apply(this, arguments);
  }

  createClass(InputRange, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          before = _this$props.before,
          after = _this$props.after;
      return /*#__PURE__*/React.createElement("ul", {
        className: "f-clearfix",
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement("li", {
        className: "f-left",
        style: {
          width: 'calc(50% - 12px)'
        }
      }, /*#__PURE__*/React.createElement(Form.Item, {
        wrapperCol: {
          span: 24
        },
        name: before.name,
        style: {
          marginBottom: 0
        },
        rules: before.rules
      }, /*#__PURE__*/React.createElement(PartInput, _extends_1({
        type: "InputNumber"
      }, before.props)))), /*#__PURE__*/React.createElement("li", {
        className: "f-left",
        style: {
          width: '24px',
          heighe: '100%',
          textAlign: 'center'
        }
      }, "~"), /*#__PURE__*/React.createElement("li", {
        className: "f-left",
        style: {
          width: 'calc(50% - 12px)'
        }
      }, /*#__PURE__*/React.createElement(Form.Item, {
        wrapperCol: {
          span: 24
        },
        name: after.name,
        style: {
          marginBottom: 0
        },
        rules: after.rules
      }, /*#__PURE__*/React.createElement(PartInput, _extends_1({
        type: "InputNumber"
      }, after.props)))));
    }
  }]);

  return InputRange;
}(PureComponent);

var RadioGroup = (function (props) {
  var TypeItem;
  var resProps = {};
  Object.keys(props).forEach(function (key) {
    if (key !== 'options') {
      resProps[key] = props[key];
    }
  });
  var options = merge(props.options);

  switch (props.type) {
    case 'Button':
      TypeItem = Radio.Button;
      break;

    default:
      TypeItem = Radio;
  }

  return /*#__PURE__*/React.createElement(Radio.Group, _extends_1({}, resProps, {
    style: {
      width: '100%'
    }
  }), (options || []).map(function (item, index) {
    return /*#__PURE__*/React.createElement(TypeItem, {
      value: item.value,
      key: index
    }, item.label);
  }));
});

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$e(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var TextArea = Input.TextArea;
var MonthPicker = DatePicker.MonthPicker,
    RangePicker = DatePicker.RangePicker,
    WeekPicker = DatePicker.WeekPicker;
var itemList = {
  Input: Input,
  InputPart: PartInput,
  InputNumber: InputNumber,
  InputRange: InputRange,
  SelectMapDics: SelectMapDics,
  Select: SelectNorm,
  SelectRequest: SelectRequest,
  TreeSelect: TreeSelect,
  TreeSelectRequest: TreeSelectRequest,
  Cascader: Cascader,
  TextArea: TextArea,
  DatePicker: DatePicker,
  MonthPicker: MonthPicker,
  RangePicker: RangePicker,
  WeekPicker: WeekPicker,
  TimePicker: TimePicker,
  Rate: Rate,
  Radio: Radio,
  Checkbox: Checkbox,
  CheckboxGroup: CheckboxGroup,
  RadioGroup: RadioGroup,
  Switch: Switch,
  Slider: Slider
};

var NormForm = /*#__PURE__*/function (_PureComponent) {
  inherits(NormForm, _PureComponent);

  var _super = _createSuper$h(NormForm);

  function NormForm(props) {
    var _this;

    classCallCheck(this, NormForm);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "getValues", function () {
      var getFieldsValue = _this.formRef.current.getFieldsValue;

      if (typeof getFieldsValue === 'function') {
        var values = getFieldsValue();
        return values;
      }
    });

    defineProperty(assertThisInitialized(_this), "getError", function (name) {
      var _ref = _this.formRef.current || {},
          getFieldError = _ref.getFieldError;

      return typeof onFinishFailed === 'function' ? onFinishFailed({
        name: name
      }) : '';
    });

    defineProperty(assertThisInitialized(_this), "setValues", function () {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var fn = arguments.length > 1 ? arguments[1] : undefined;
      var newValues;
      var setFieldsValue = _this.formRef.current.setFieldsValue;

      if (typeof setFieldsValue === 'function') {
        newValues = _this.getValues();
        Object.keys(newValues).forEach(function (key) {
          values[key] !== undefined && (newValues[key] = values[key]);
        });
      }

      typeof setFieldsValue === 'function' && _typeof_1(newValues) === 'object' && setFieldsValue(_objectSpread$e({}, newValues));
      typeof fn === 'function' && fn.call(assertThisInitialized(_this), _this.getValues());
    });

    defineProperty(assertThisInitialized(_this), "onReset", function () {
      var resetFields = _this.formRef.current.resetFields;
      typeof resetFields === 'function' && resetFields();
    });

    defineProperty(assertThisInitialized(_this), "onValidate", /*#__PURE__*/asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      var done,
          error,
          validateFields,
          _args = arguments;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              done = _args.length > 0 && _args[0] !== undefined ? _args[0] : function () {};
              error = _args.length > 1 && _args[1] !== undefined ? _args[1] : function () {};
              validateFields = _this.formRef.current.validateFields;
              _context.next = 5;
              return validateFields().then(function (values) {
                return done(values);
              })["catch"](function (errors) {
                return error(errors);
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.props.refs && _this.props.refs(assertThisInitialized(_this));
    _this.getValues = _this.getValues.bind(assertThisInitialized(_this));
    _this.onReset = _this.onReset.bind(assertThisInitialized(_this));
    _this.dis = 0;
    _this.formRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  createClass(NormForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var lineOf = this.props.lineOf;
      var allData = this.props.formItem || [];
      this.dis = 0;
      return /*#__PURE__*/React.createElement(Form, _extends_1({
        ref: this.formRef,
        autoComplete: "off",
        className: "searchForm rowStyle"
      }, this.props.formProps), /*#__PURE__*/React.createElement("section", {
        className: "f-clearfix"
      }, allData.map(function (item, index) {
        if (!!item.props && item.type === 'Select' && !!item.props.getDics && !isNaN(item.props.getDics)) {
          item.type = 'SelectMapDics';
          item.props.code = item.props.getDics;
        }

        if (item.type === 'Select' && !!item.props.config) {
          item.type = 'SelectRequest';
        }

        if (item.type === 'TreeSelect' && !!item.props.config) {
          item.type = 'TreeSelectRequest';
        }

        switch (item.type) {
          case 'TreeSelec':
          case 'Select':
          case 'SelectMapDics':
          case 'SelectRequest':
          case 'TreeSelectRequest':
            item.props.showSearch = true;
            break;
        }

        var ItemType = itemList[item.type];
        (item.type === 'Line' || !!item.hidden) && (_this2.dis = -index - 1);
        var newIndex = index + _this2.dis;
        var itemSize = item.itemSize || _this2.props.itemSize || '200px';
        var labelSize = item.labelSize || _this2.props.labelSize || '4em';
        var nextLine = !isNaN(lineOf) ? newIndex % lineOf === 0 || newIndex === 0 : false;
        var marginRight = item.marginRight || _this2.props.marginRight || '30px';
        var noMargin = !isNaN(lineOf) ? (newIndex + 1) % lineOf === 0 : false;
        var rulesList = item.rules;
        var initialValue = (item.props || {}).initialValue;
        delete (item.props || {}).initialValue;
        var labelStyle = item.labelStyle || _this2.props.labelStyle || {};
        return /*#__PURE__*/React.createElement(Fragment, {
          key: item.name || index
        }, item.type !== 'Line' && !item.destruction && /*#__PURE__*/React.createElement("div", {
          className: "f-left",
          style: {
            display: item.hidden ? 'none' : '',
            width: "calc(".concat(itemSize, " + ").concat(labelSize, ")"),
            clear: nextLine ? 'both' : '',
            marginRight: noMargin ? '' : marginRight,
            marginBottom: item.itemMargin || '8px'
          }
        }, /*#__PURE__*/React.createElement("ul", {
          className: "f-clearfix"
        }, /*#__PURE__*/React.createElement("li", {
          className: "f-left f-mr10 f-text-right",
          style: {
            width: labelSize,
            marginTop: '5px',
            height: '21px'
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: (!!rulesList && rulesList[0] || {}).required ? 'ant-form-item-required' : '',
          style: _objectSpread$e({
            display: 'inline-block',
            lineHeight: 1.1
          }, labelStyle)
        }, item.label)), /*#__PURE__*/React.createElement("li", {
          className: "f-block-hide"
        }, item.type !== 'InputRange' && !item.unBind ? /*#__PURE__*/React.createElement(Form.Item, {
          style: {
            marginBottom: 0
          },
          name: item.name,
          rules: item.rules,
          noStyle: item.noStyle,
          initialValue: initialValue
        }, /*#__PURE__*/React.createElement(ItemType, _extends_1({}, item.props, {
          options: item.options,
          style: _objectSpread$e({
            border: (item.props || {}).readOnly ? 'none' : '',
            backgroundColor: (item.props || {}).readOnly ? 'transparent' : ''
          }, (item.props || {}).style)
        }))) : /*#__PURE__*/React.createElement(ItemType, _extends_1({}, item, item.props, {
          style: _objectSpread$e({
            border: (item.props || {}).readOnly ? 'none' : '',
            boxShadow: (item.props || {}).readOnly ? 'none' : '',
            backgroundColor: (item.props || {}).readOnly ? 'transparent' : ''
          }, (item.props || {}).style)
        })))), /*#__PURE__*/React.createElement("div", {
          style: {
            marginLeft: "calc(".concat(item.labelSize || _this2.props.labelSize || '4em', " + 10px)"),
            position: "relative"
          }
        }, item.render || _this2.props.render)), item.type === 'Line' && /*#__PURE__*/React.createElement("div", {
          className: !item.hidden ? 'u-hr' : '',
          style: {
            "float": 'left',
            width: item.width || '100%',
            clear: 'both',
            borderBottomWidth: item.height,
            marginBottom: !item.hidden ? item.itemMargin || '8px' : ''
          }
        }, item.render || _this2.props.render));
      })));
    }
  }]);

  return NormForm;
}(PureComponent);

NormForm.mapOption = function (list, name, value) {
  if (Array.isArray(list)) {
    return (list || []).map(function (item) {
      return {
        label: item[name],
        value: item[value]
      };
    });
  }
}; // 表单项单位


NormForm.Unit = function (props) {
  var getVal = function getVal(child) {
    if (typeof child !== 'string') {
      if (Array.isArray(child)) {
        var children = child.map(function (item) {
          return getVal(item.props.children);
        });
        return children.join('>-<').replace(/\>\-\</g, '');
      }

      return getVal(child.props.children);
    } else {
      return child;
    }
  };

  var value = getVal(props.children);
  var len = !!props.children ? value.length : 0;
  var offset = props.offset || '0em';
  return /*#__PURE__*/React.createElement("div", {
    className: "f-relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-absolute",
    style: {
      top: '-27px',
      right: "calc(-6px - ".concat(len, "em - ").concat(offset, ")") || '220px',
      whiteSpace: 'nowrap'
    }
  }, props.children));
}; // 表单项居下显示信息


NormForm.BText = function (props) {
  var currentRef = useRef();
  var innerClassName = 'form-item-bottom-message-inner f-relative' + (props.disabled ? ' is-disabled' : '');
  return /*#__PURE__*/React.createElement("div", {
    className: 'form-item-bottom-message' + (props.type === 'btn' ? ' is-btn' : ''),
    style: {
      marginTop: '2px',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: innerClassName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-item-bottom-message-mask"
  }), props.children));
}; // 表单项居下下显示的按钮

function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$f(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$f(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var MonthPicker$1 = DatePicker.MonthPicker,
    RangePicker$1 = DatePicker.RangePicker,
    WeekPicker$1 = DatePicker.WeekPicker;
var itemList$1 = {
  Input: Input,
  InputNumber: InputNumber,
  InputPart: PartInput,
  InputRange: InputRange,
  Select: SelectNorm,
  SelectMapDics: SelectMapDics,
  SelectRequest: SelectRequest,
  TreeSelectRequest: TreeSelectRequest,
  TreeSelect: TreeSelect,
  DatePicker: DatePicker,
  MonthPicker: MonthPicker$1,
  RangePicker: RangePicker$1,
  WeekPicker: WeekPicker$1,
  TimePicker: TimePicker,
  Cascader: Cascader,
  Radio: Radio,
  Checkbox: Checkbox,
  RadioGroup: RadioGroup,
  CheckboxGroup: CheckboxGroup,
  Switch: Switch,
  Slider: Slider
};

var SearchForm = /*#__PURE__*/function (_PureComponent) {
  inherits(SearchForm, _PureComponent);

  var _super = _createSuper$i(SearchForm);

  function SearchForm(props) {
    var _this;

    classCallCheck(this, SearchForm);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "changeToggle", function () {
      _this.setState({
        toggle: !_this.state.toggle
      });
    });

    defineProperty(assertThisInitialized(_this), "getValues", function (itemName) {
      var getFieldsValue = _this.formRef.current.getFieldsValue;

      if (typeof getFieldsValue === 'function') {
        return getFieldsValue(itemName);
      }

      return {};
    });

    _this.state = {
      showToggle: _this.props.formItem && _this.props.formItem.length > (_this.props.lineOf || 4) ? true : false,
      toggle: false
    };
    _this.props.refs && _this.props.refs(assertThisInitialized(_this));
    _this.onSearch = _this.onSearch.bind(assertThisInitialized(_this));
    _this.onReset = _this.onReset.bind(assertThisInitialized(_this));
    _this.formRef = /*#__PURE__*/React.createRef(); // moment.locale('zh-cn');

    return _this;
  }

  createClass(SearchForm, [{
    key: "onSearch",
    value: function onSearch(more) {
      var _this2 = this;

      var values;
      values = this.getValues();
      more === 'more' && Object.keys(values).forEach(function (key, index) {
        if (index < _this2.props.lineOf || 4) {
          delete values[key];
        } else {
          return false;
        }
      });
      isFunc(this.props.handleSearch) && this.props.handleSearch(values);
    }
  }, {
    key: "onReset",
    value: function onReset() {
      var resetFields = this.formRef.current.resetFields;
      var theBreak = true;
      isFunc(this.props.handleBeforeReset) && (theBreak = this.props.handleBeforeReset());
      if (theBreak === false) return false;
      typeof resetFields === 'function' && resetFields();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // const { getFieldDecorator } = this.props.form;
      var _this$state = this.state,
          toggle = _this$state.toggle,
          showToggle = _this$state.showToggle;
      var btnSize = this.props.btnSize || this.props.size;
      this.firstData = [];
      this.otherData = [];

      if (this.props.formItem && this.props.formItem.length > this.props.lineOf || 4) {
        this.allData = this.props.formItem;
        this.firstData = this.allData.slice(0, this.props.lineOf || 4);
        this.otherData = this.allData.slice(this.props.lineOf || 4, this.allData.length);
      } else {
        this.firstData = this.props.formItem || [];
      }

      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Form, _extends_1({
        ref: this.formRef,
        autoComplete: "off",
        className: "searchForm rowStyle"
      }, this.props.formProps), /*#__PURE__*/React.createElement("section", {
        className: "f-clearfix"
      }, /*#__PURE__*/React.createElement("div", {
        className: "f-left"
      }, this.firstData.map(function (item, index) {
        var unitSize = (item.props || {}).size || _this3.props.size;
        var itemSize = item.itemSize || _this3.props.itemSize || '200px';
        var labelSize = item.labelSize || _this3.props.labelSize || '4em';
        var marginRight = item.marginRight || _this3.props.marginRight || '30px';

        if (item.type === 'Select' && !!item.props.getDics && !isNaN(item.props.getDics)) {
          item.type = 'SelectMapDics';
          item.props.code = item.props.getDics;
        }

        if (item.type === 'Select' && !!item.props.config) {
          item.type = 'SelectRequest';
        }

        if (item.type === 'TreeSelect' && !!item.props.config) {
          item.type = 'TreeSelectRequest';
        }

        switch (item.type) {
          case 'TreeSelec':
          case 'Select':
          case 'SelectMapDics':
          case 'SelectRequest':
          case 'TreeSelectRequest':
            item.props.showSearch = true;
            break;
        }

        var ItemType = itemList$1[item.type];

        var newProps = _objectSpread$f({}, item.props);

        var rulesList = item.rules;
        var initialValue = (item.props || {}).initialValue;
        delete (item.props || {}).initialValue;
        return /*#__PURE__*/React.createElement("div", {
          key: item.name,
          className: "f-left",
          style: {
            width: "calc(".concat(itemSize, " + ").concat(labelSize, ")"),
            marginRight: marginRight
          }
        }, /*#__PURE__*/React.createElement("ul", {
          className: "f-clearfix"
        }, item.label && /*#__PURE__*/React.createElement("li", {
          className: "f-left f-mr10 f-text-right",
          style: {
            width: labelSize,
            marginTop: unitSize !== 'small' ? '5px' : ''
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: (!!rulesList && rulesList[0] || {}).required ? 'ant-form-item-required' : ''
        }, item.label)), /*#__PURE__*/React.createElement("li", {
          className: "f-block-hide"
        }, item.type !== 'InputRange' ? /*#__PURE__*/React.createElement(Form.Item, {
          wrapperCol: {
            span: 24
          },
          style: {
            marginBottom: item.itemMargin
          },
          name: item.name,
          rules: item.rules,
          initialValue: initialValue
        }, /*#__PURE__*/React.createElement(ItemType, _extends_1({}, item.props, {
          size: unitSize,
          options: item.options
        }))) : /*#__PURE__*/React.createElement(ItemType, _extends_1({}, item, {
          size: unitSize
        })))));
      })), /*#__PURE__*/React.createElement("div", {
        className: "searchBox f-left"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "f-flex-center",
        style: {
          marginTop: btnSize === 'small' ? '3px' : ''
        }
      }, showToggle && /*#__PURE__*/React.createElement("li", {
        onClick: function onClick() {
          _this3.changeToggle();

          _this3.props.hasMorModal && !_this3.props.keepValues && _this3.onReset();
          isFunc(_this3.props.changeToggleAfter) && _this3.props.changeToggleAfter(!toggle);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "inputSearch"
      }, /*#__PURE__*/React.createElement("span", null, "\u66F4\u591A\u67E5\u8BE2"))), /*#__PURE__*/React.createElement("li", {
        className: "f-mr10"
      }, /*#__PURE__*/React.createElement(Button, {
        size: btnSize,
        type: "primary",
        onClick: /*#__PURE__*/asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          var validateFields;
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  validateFields = _this3.formRef.current.validateFields;
                  _context.next = 3;
                  return validateFields().then(function (values) {
                    _this3.onSearch();
                  })["catch"](function (errors) {});

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))
      }, "\u67E5\u8BE2")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Button, {
        size: btnSize,
        onClick: this.onReset
      }, "\u91CD\u7F6E"))))), !this.props.moreTypeModal ? /*#__PURE__*/React.createElement("section", {
        className: "f-clearfix",
        style: {
          display: toggle ? 'block' : 'none'
        }
      }, this.nomalMoreForm()) : /*#__PURE__*/React.createElement(Drawer, {
        className: "darkStyle",
        title: "\u66F4\u591A\u67E5\u8BE2",
        placement: "right",
        closable: false,
        onClose: this.changeToggle,
        visible: toggle,
        width: 400
      }, this.modelMoreForm())));
    }
  }, {
    key: "nomalMoreForm",
    value: function nomalMoreForm() {
      var _this4 = this;

      return this.otherData.map(function (item, index) {
        var nextLine = index % (!!_this4.props.lineOf ? _this4.props.lineOf : 4) === 0;
        var unitSize = (item.props || {}).size || _this4.props.size;
        var itemSize = item.itemSize || _this4.props.itemSize || '200px';
        var labelSize = item.labelSize || _this4.props.labelSize || '4em';

        if (item.type === 'Select' && !!item.props.getDics && !isNaN(item.props.getDics)) {
          item.type = 'SelectMapDics';
          item.props.code = item.props.getDics;
        }

        if (item.type === 'Select' && !!item.props.config) {
          item.type = 'SelectRequest';
        }

        if (item.type === 'TreeSelect' && !!item.props.config) {
          item.type = 'TreeSelectRequest';
        }

        switch (item.type) {
          case 'TreeSelec':
          case 'Select':
          case 'SelectMapDics':
          case 'SelectRequest':
          case 'TreeSelectRequest':
            item.props.showSearch = true;
            break;
        }

        var ItemType = itemList$1[item.type];

        var newProps = _objectSpread$f({}, item.props);

        var rulesList = item.rules;
        var initialValue = (item.props || {}).initialValue;
        delete (item.props || {}).initialValue;
        return /*#__PURE__*/React.createElement("div", {
          key: item.name,
          className: "f-left f-mr30",
          style: {
            width: "calc(".concat(labelSize, " + ").concat(itemSize, ")"),
            clear: nextLine ? 'both' : 'none'
          }
        }, /*#__PURE__*/React.createElement("ul", {
          className: "f-clearfix"
        }, item.label && /*#__PURE__*/React.createElement("li", {
          className: "f-left f-mr10 f-text-right",
          style: {
            width: labelSize,
            marginTop: unitSize !== 'small' ? '5px' : ''
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: (!!rulesList && rulesList[0] || {}).required ? 'ant-form-item-required' : ''
        }, item.label)), /*#__PURE__*/React.createElement("li", {
          className: "f-block-hide"
        }, item.type !== 'InputRange' ? /*#__PURE__*/React.createElement(Form.Item, {
          wrapperCol: {
            span: 24
          },
          style: {
            marginBottom: item.itemMargin
          },
          name: item.name,
          rules: item.rules,
          initialValue: initialValue
        }, /*#__PURE__*/React.createElement(ItemType, _extends_1({}, item.props, {
          size: unitSize,
          options: item.options
        }))) : /*#__PURE__*/React.createElement(ItemType, _extends_1({}, item, {
          size: unitSize
        })))));
      });
    }
  }, {
    key: "modelMoreForm",
    value: function modelMoreForm() {
      var _this5 = this;

      var btnSize = this.props.btnSize || this.props.size;
      return /*#__PURE__*/React.createElement(Form, _extends_1({
        layout: "horizontal",
        className: "rowStyle"
      }, this.props.formProps), /*#__PURE__*/React.createElement("section", {
        className: "f-clearfix"
      }, this.otherData.map(function (item, index) {
        var unitSize = (item.props || {}).size || _this5.props.size;
        var labelSize = item.labelSize || _this5.props.labelSize || '4em';

        if (item.type === 'Select' && !!item.props.getDics && !isNaN(item.props.getDics)) {
          item.type = 'SelectMapDics';
          item.props.code = item.props.getDics;
        }

        if (item.type === 'Select' && !!item.props.config) {
          item.type = 'SelectRequest';
        }

        if (item.type === 'TreeSelect' && !!item.props.config) {
          item.type = 'TreeSelectRequest';
        }

        switch (item.type) {
          case 'TreeSelec':
          case 'Select':
          case 'SelectMapDics':
          case 'SelectRequest':
          case 'TreeSelectRequest':
            item.props.showSearch = true;
            break;
        }

        var ItemType = itemList$1[item.type];

        var newProps = _objectSpread$f({}, item.props);

        var rulesList = item.rules;
        var initialValue = (item.props || {}).initialValue;
        delete (item.props || {}).initialValue;
        return /*#__PURE__*/React.createElement("div", {
          key: item.name
        }, /*#__PURE__*/React.createElement("ul", {
          className: "f-clearfix"
        }, item.label && /*#__PURE__*/React.createElement("li", {
          className: "f-left f-mr10 f-text-right",
          style: {
            width: labelSize,
            marginTop: unitSize !== 'small' ? '5px' : ''
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: (!!rulesList && rulesList[0] || {}).required ? 'ant-form-item-required' : ''
        }, item.label)), /*#__PURE__*/React.createElement("li", {
          className: "f-block-hide"
        }, item.type !== 'InputRange' ? /*#__PURE__*/React.createElement(Form.Item, {
          wrapperCol: {
            span: 24
          },
          style: {
            marginBottom: item.itemMargin
          },
          name: item.name,
          rules: item.rules,
          initialValue: initialValue
        }, /*#__PURE__*/React.createElement(ItemType, _extends_1({}, item.props, {
          size: unitSize,
          options: item.options
        }))) : /*#__PURE__*/React.createElement(ItemType, _extends_1({}, item, {
          size: unitSize
        })))));
      }), /*#__PURE__*/React.createElement("div", {
        className: "searchBox"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "f-flex-center f-mt10"
      }, /*#__PURE__*/React.createElement("li", {
        className: "f-mr10"
      }, /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        size: btnSize,
        onClick: /*#__PURE__*/asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
          var validateFields;
          return regenerator.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  validateFields = _this5.formRef.current.validateFields;
                  _context2.next = 3;
                  return validateFields().then(function (values) {
                    _this5.onSearch('more');
                  })["catch"](function (errors) {});

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))
      }, "\u67E5\u8BE2")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Button, {
        size: btnSize,
        onClick: this.onReset
      }, "\u91CD\u7F6E"))))));
    }
  }]);

  return SearchForm;
}(PureComponent);

SearchForm.mapOption = function (list, name, value) {
  return (list || []).map(function (item, index) {
    return {
      label: item[name],
      value: item[value]
    };
  });
};

var index$1 = (function (props) {
  return /*#__PURE__*/React.createElement("div", {
    className: props.className + " formContanierBody",
    style: {
      width: props.width,
      margin: props.margin
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, props.title), props.children);
});

function _createSuper$j(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$j(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$j() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var _window = window,
    self$1 = _window.self,
    top = _window.top;

var AppComponent = /*#__PURE__*/function (_React$Component) {
  inherits(AppComponent, _React$Component);

  var _super = _createSuper$j(AppComponent);

  function AppComponent() {
    var _this;

    classCallCheck(this, AppComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      baseConfig: _this.props.baseConfig || {}
    });

    defineProperty(assertThisInitialized(_this), "onMessage", function () {
      self$1.addEventListener("message", function (event) {
        if (event.data.operation === "change-theme-color") {
          _this.changeThemeColor(event.data.themeColor);
        }
      });
    });

    defineProperty(assertThisInitialized(_this), "changeThemeColor", function (themeColor) {
      self$1.less.modifyVars(themeColor === "light" ? antdConfig.lightThemeConfig : antdConfig.darkThemeConfig);
    });

    defineProperty(assertThisInitialized(_this), "isDev", function () {
      return "development" === process.env.NODE_ENV;
    });

    return _this;
  }

  createClass(AppComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (self$1 !== top) {
        this.onMessage();
        var themeColor = localStorage.getItem("theme-color");
        themeColor === "light" && this.changeThemeColor(themeColor);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var topProps = {
        baseParth: '',
        appModel: this.state.baseConfig.appModel || appModel,
        isDev: this.isDev(),
        isSingle: !this.props.isIframe ? this.isDev() : false,
        productName: this.props.productName
      };
      antdConfig.locale = zhCN; // 此处待

      var _this$props$ChildRout = this.props.ChildRoutes,
          ChildRoutes = _this$props$ChildRout === void 0 ? [] : _this$props$ChildRout;
      return /*#__PURE__*/React.createElement(ConfigProvider, antdConfig, /*#__PURE__*/React.createElement(Routes, _extends_1({
        childRoutes: function childRoutes() {
          return /*#__PURE__*/React.createElement(ChildRoutes, topProps);
        }
      }, topProps)));
    }
  }]);

  return AppComponent;
}(React.Component);

function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$g(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$g(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$k(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$k(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$k() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FormValidItem = /*#__PURE__*/function (_React$Component) {
  inherits(FormValidItem, _React$Component);

  var _super = _createSuper$k(FormValidItem);

  function FormValidItem() {
    var _this;

    classCallCheck(this, FormValidItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      validPlacement: _this.props.validPlacement || "right"
    });

    defineProperty(assertThisInitialized(_this), "getValidMessage", function () {
      var children = _this.props.children;

      if (!children) {
        return "";
      }

      var dataField = children.props["data-__field"];

      if (!dataField) {
        return "";
      }

      return dataField.errors && dataField.errors.map(function (v) {
        return v.message;
      }).join(";") || "";
    });

    return _this;
  }

  createClass(FormValidItem, [{
    key: "render",
    value: function render() {
      var cssClassList = ["form-valid-item"];

      if (this.props.className) {
        cssClassList.push(this.props.className);
      }

      var formItemConfig = _objectSpread$g(_objectSpread$g({
        colon: false
      }, this.props), {}, {
        className: cssClassList.join(" ")
      });

      Object.keys(this.state).forEach(function (key) {
        delete formItemConfig[key];
      });
      return /*#__PURE__*/React.createElement("section", {
        style: this.props.style
      }, /*#__PURE__*/React.createElement(Tooltip, {
        overlayClassName: "has-error",
        placement: this.state.validPlacement,
        title: this.getValidMessage(),
        visible: !!this.getValidMessage()
      }, this.props.children));
    }
  }]);

  return FormValidItem;
}(React.Component);

function _createSuper$l(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$l(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$l() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$h(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$h(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Search = Input.Search;
var TreeNode = Tree.TreeNode;
/**获取所有节点的方法**/

var getAllNodes = function getAllNodes(gData) {
  var dataList = [];

  var generateList = function generateList(data) {
    for (var i = 0; i < data.length; i++) {
      var node = data[i];
      dataList.push(_objectSpread$h(_objectSpread$h({}, node), {}, {
        children: []
      }));

      if (node.children && node.children.length) {
        generateList(node.children);
      }
    }
  };

  generateList(gData);
  return dataList;
};
/**获取所有父节点的key**/


var getParentKey = function getParentKey(key, tree) {
  var parentKey;

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];

    if (node.children) {
      if (node.children.some(function (item) {
        return item.key === key;
      })) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }

  return key !== parentKey ? parentKey : null;
};

var Trees = /*#__PURE__*/function (_Component) {
  inherits(Trees, _Component);

  var _super = _createSuper$l(Trees);

  function Trees(props) {
    var _this;

    classCallCheck(this, Trees);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "initTreeFn", function (treeData) {
      var fn = /*#__PURE__*/function () {
        var _ref = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          var _this$props, selectedKeys, isLeaf, dataList, isLeafNodes, initNode, initExpandedKeys;

          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$props = _this.props, selectedKeys = _this$props.selectedKeys, isLeaf = _this$props.isLeaf;

                  if (!(selectedKeys && selectedKeys.length)) {
                    dataList = getAllNodes(treeData);
                    isLeafNodes = dataList.filter(function (item) {
                      return item[isLeaf].toString() === "true" || item[isLeaf].toString() === "1";
                    });
                    initNode = null;
                    initExpandedKeys = [];

                    if (isLeafNodes && isLeafNodes.length) {
                      initNode = isLeafNodes[0];
                    }

                    if (initNode) {
                      initExpandedKeys = dataList.map(function (item) {
                        if (item.key === initNode.key) {
                          return getParentKey(item.key, treeData);
                        }

                        return null;
                      }).filter(function (item, i, self) {
                        return item && self.indexOf(item) === i;
                      });

                      _this.setState({
                        expandedKeys: [].concat(toConsumableArray(initExpandedKeys), [initNode.key])
                      }, function () {
                        _this.onSelect([initNode.key]);
                      });
                    }
                  }

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function fn() {
          return _ref.apply(this, arguments);
        };
      }();

      fn();
    });

    defineProperty(assertThisInitialized(_this), "searchValueChange", function (value) {
      var treeData = _this.props.treeData;
      var dataList = getAllNodes(treeData);
      var expandedKeys = dataList.map(function (item) {
        if (item.title && item.title.indexOf(value) > -1) {
          return getParentKey(item.key, treeData);
        }

        return null;
      }).filter(function (item, i, self) {
        return item && self.indexOf(item) === i;
      });

      _this.setState({
        expandedKeys: expandedKeys,
        searchValue: value,
        autoExpandParent: true
      });
    });

    defineProperty(assertThisInitialized(_this), "clickTree", function (event) {
      var iconRemark = event.currentTarget.previousSibling;
      var classes = iconRemark.getAttribute("class");

      if (classes.indexOf("ant-tree-switcher_close") > -1 || classes.indexOf("ant-tree-switcher_open") > -1) {
        iconRemark.click();
      }
    });

    defineProperty(assertThisInitialized(_this), "onExpand", function (expandedKeys) {
      _this.setState({
        expandedKeys: expandedKeys,
        autoExpandParent: false
      });
    });

    defineProperty(assertThisInitialized(_this), "onSelect", function (selectedKeys) {
      var treeData = _this.props.treeData;

      if (selectedKeys && selectedKeys.length) {
        var dataList = getAllNodes(treeData);
        var selectNode = dataList.filter(function (item) {
          return item.key === selectedKeys[0];
        });

        if (_this.props.treeSelect && typeof _this.props.treeSelect === "function") {
          _this.props.treeSelect(selectNode[0]);
        }
      }
    });

    _this.state = {
      searchValue: "",
      expandedKeys: [],
      autoExpandParent: true
    };
    return _this;
  }

  createClass(Trees, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var treeData = this.props.treeData;
      this.initTreeFn(treeData);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          searchValue = _this$state.searchValue,
          autoExpandParent = _this$state.autoExpandParent,
          expandedKeys = _this$state.expandedKeys;
      var _this$props2 = this.props,
          treeData = _this$props2.treeData,
          selectedKeys = _this$props2.selectedKeys,
          searchPlaceholder = _this$props2.searchPlaceholder;

      var mapTree = function mapTree(data) {
        return data.map(function (item) {
          var index = item.title.indexOf(searchValue);
          var beforeStr = item.title.substr(0, index);
          var afterStr = item.title.substr(index + searchValue.length);
          var title = index > -1 ? /*#__PURE__*/React.createElement("span", null, beforeStr, /*#__PURE__*/React.createElement("span", {
            style: {
              color: "#f50"
            }
          }, searchValue), afterStr) : /*#__PURE__*/React.createElement("span", null, item.title);

          if (item.children && item.children.length) {
            return /*#__PURE__*/React.createElement(TreeNode, {
              key: item.key,
              title: title
            }, mapTree(item.children));
          }

          return /*#__PURE__*/React.createElement(TreeNode, {
            key: item.key,
            title: title
          });
        });
      };

      return /*#__PURE__*/React.createElement("div", {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "5px"
        }
      }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Search, {
        placeholder: searchPlaceholder || "\u8BF7\u8F93\u5165\u67E5\u8BE2",
        size: "small",
        allowClear: true,
        onChange: function onChange(e) {
          return _this2.searchValueChange(e.target.value);
        },
        className: "searchIcon"
      })), /*#__PURE__*/React.createElement(Tree, {
        autoExpandParent: autoExpandParent,
        expandedKeys: expandedKeys,
        selectedKeys: selectedKeys,
        onSelect: this.onSelect,
        onExpand: this.onExpand,
        treeData: treeData,
        onClick: this.clickTree
      }, mapTree(treeData)));
    }
  }]);

  return Trees;
}(Component);

var construct = createCommonjsModule(function (module) {
function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
});

function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$i(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$i(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function linearGradient() {
  var color1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "transparent";
  var color2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : color1;
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 1, 0, 0];
  return construct(Echarts.graphic.LinearGradient, toConsumableArray(position).concat([[{
    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
    offset: 0,
    color: color1
  }, {
    offset: 1,
    color: color2
  }]]));
}
/**柱状图&折线图组合**/


var lineAndBarGroup = function lineAndBarGroup() {
  var chartData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var series = [];

  var legend = _objectSpread$i({
    data: [],
    top: "10%",
    textStyle: {
      color: "#fff"
    }
  }, chartData.legend);

  var yAxis = [];

  if (chartData.yAxisData && chartData.yAxisData.length) {
    chartData.yAxisData.map(function (item, index) {
      if (index === 0) {
        yAxis.push(_objectSpread$i({
          nameTextStyle: {
            color: "#888"
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#888"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#394979"
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#000"
            }
          }
        }, item));
      } else if (index === 1) {
        yAxis.push(_objectSpread$i({
          axisLabel: {
            show: true,
            textStyle: {
              color: "#888"
            }
          },
          nameTextStyle: {
            color: "#888"
          }
        }, item));
      }

      return yAxis;
    });
  }

  chartData.legendData.map(function (item) {
    return legend.data.push({
      name: item,
      icon: "circle",
      textStyle: {
        color: "#7d838b"
      }
    });
  });
  chartData.seriesData.map(function (item) {
    var pushData = _objectSpread$i({}, item);

    if (item.type === "line") {
      pushData.itemStyle = {
        normal: {
          color: "#ffaa00"
        }
      };
      pushData.smooth = true;
    } else if (item.type === "bar") {
      pushData.barWidth = "15";
      pushData.barGap = "10%";
    }

    if (item.colors && item.colors.length) {
      pushData.itemStyle = {
        color: linearGradient(item.colors[0], item.colors[1])
      };
    }

    return series.push(pushData);
  });
  return {
    title: _objectSpread$i({
      left: "center",
      y: "10",
      textStyle: {
        color: "#fff"
      }
    }, chartData.title),
    color: "#384757",
    tooltip: _objectSpread$i({
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#384757"
        }
      }
    }, chartData.tooltip),
    legend: legend,
    xAxis: [{
      type: "category",
      data: chartData.xAxisData,
      axisPointer: {
        type: "shadow"
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#888"
        }
      },
      axisLine: {
        lineStyle: {
          color: "#394979"
        }
      }
    }],
    yAxis: yAxis,
    grid: _objectSpread$i({
      top: "20%"
    }, chartData.grid),
    series: series
  };
};
/**环形图**/


var ringChart = function ringChart() {
  var chartData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var scale = 1;
  var seriesData = [];
  chartData.seriesData.map(function (item) {
    seriesData.push({
      value: item.value,
      name: item.name,
      itemStyle: {
        color: linearGradient(item.colors[0], item.colors[1])
      }
    });
    return seriesData;
  });
  var rich = {
    yellow: {
      color: "#ffc72b",
      fontSize: 30 * scale,
      padding: [5, 4],
      align: "center"
    },
    total: {
      color: "#ffc72b",
      fontSize: 40 * scale,
      align: "center"
    },
    white: {
      color: "#fff",
      align: "center",
      fontSize: 14 * scale,
      padding: [21, 0]
    },
    blue: {
      color: "#49dff0",
      fontSize: 16 * scale,
      align: "center"
    },
    hr: {
      borderColor: "#0b5263",
      width: "100%",
      borderWidth: 1,
      height: 0
    }
  };
  var option = {
    title: {
      text: chartData.titleText,
      left: "center",
      top: "53%",
      padding: [24, 0],
      textStyle: {
        color: "#fff",
        fontSize: 12 * scale,
        align: "center"
      }
    },
    legend: {
      selectedMode: false,
      formatter: function formatter() {
        var total = 0;
        seriesData.forEach(function (value) {
          total += value.value;
        });
        return "{total|" + total + "}";
      },
      data: [seriesData[0].name],
      left: "center",
      top: "center",
      icon: "none",
      align: "center",
      textStyle: {
        color: "#fff",
        fontSize: 16 * scale,
        rich: rich
      }
    },
    series: [{
      name: "",
      type: "pie",
      radius: ["42%", "50%"],
      hoverAnimation: true,
      color: ["#c487ee", "#deb140", "#49dff0", "#034079", "#6f81da", "#00ffb4"],
      label: {
        normal: {
          formatter: function formatter(params) {
            var total = 0;
            var percent = 0;
            seriesData.forEach(function (value) {
              total += value.value;
            });
            percent = (params.value / total * 100).toFixed(1);
            return "{white|" + params.name + "}\n{hr|}\n{yellow|" + params.value + "}\n{blue|" + percent + "%}";
          },
          rich: rich
        }
      },
      labelLine: {
        normal: {
          length: 55 * scale,
          length2: 0,
          lineStyle: {
            color: "#0b5263"
          }
        }
      },
      data: seriesData
    }]
  };
  return option;
};
/**雷达图**/


var radarChar = function radarChar() {
  var chartData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var legend = chartData.legend,
      radarIndicator = chartData.radarIndicator,
      radar = chartData.radar,
      series = chartData.series,
      colorArr = chartData.colorArr,
      seriesData = chartData.seriesData,
      seriesStyle = chartData.seriesStyle;
  var dataArr = [];
  seriesData && seriesData.length && seriesData.map(function (item, index) {
    var color = colorArr && colorArr.length && colorArr[index] || "#4A99FF";
    return dataArr.push(_objectSpread$i(_objectSpread$i({}, item), {}, {
      itemStyle: {
        normal: {
          lineStyle: {
            color: color
          },
          shadowColor: color,
          shadowBlur: 10
        }
      },
      areaStyle: {
        normal: {
          // 单项区域填充样式
          color: {
            type: "linear",
            x: 0,
            //右
            y: 0,
            //下
            x2: 1,
            //左
            y2: 1,
            //上
            colorStops: [{
              offset: 0,
              color: color
            }, {
              offset: 0.5,
              color: "rgba(0,0,0,0)"
            }, {
              offset: 1,
              color: color
            }],
            globalCoord: false
          },
          opacity: 1 // 区域透明度

        }
      }
    }, seriesStyle));
  });
  var option = {
    color: colorArr,
    legend: _objectSpread$i({
      orient: "vertical",
      icon: "circle",
      //图例形状
      data: legend && legend.data,
      bottom: 35,
      right: 40,
      itemWidth: 14,
      // 图例标记的图形宽度。[ default: 25 ]
      itemHeight: 14,
      // 图例标记的图形高度。[ default: 14 ]
      itemGap: 21,
      // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
      textStyle: {
        fontSize: 14,
        color: "#00E4FF"
      }
    }, legend),
    radar: _objectSpread$i({
      name: {
        textStyle: {
          color: "#fff",
          fontSize: 16
        }
      },
      indicator: radarIndicator,
      splitArea: {
        // 坐标轴在 grid 区域中的分隔区域，默认不显示。
        show: true,
        areaStyle: {
          // 分隔区域的样式设置。
          color: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。

        }
      },
      axisLine: {
        //指向外圈文本的分隔线样式
        lineStyle: {
          color: "#153269"
        }
      },
      splitLine: {
        lineStyle: {
          color: "#113865",
          // 分隔线颜色
          width: 1 // 分隔线线宽

        }
      }
    }, radar),
    series: [_objectSpread$i({
      type: "radar",
      symbolSize: 8,
      // symbol: 'angle',
      data: dataArr
    }, series)]
  };
  return option;
};
/**面积比重图**/


var proportionChar = function proportionChar() {
  var chartData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var titleSubtext = chartData.titleSubtext,
      title = chartData.title,
      tooltip = chartData.tooltip,
      legend = chartData.legend,
      seriesData = chartData.seriesData;
  var titleText = "";
  var total = 0;
  var doneCount = 0;
  var seriesArr = [];

  if (seriesData && seriesData.data && seriesData.data.length === 2) {
    doneCount = seriesData.data[0].value;
    seriesData.data.forEach(function (item) {
      total += item.value;
    });
    titleText = (100 * doneCount / total).toFixed(2);
  }

  if (seriesData && seriesData.data && seriesData.data.length === 2) {
    var _seriesData$data = slicedToArray(seriesData.data, 2),
        data1 = _seriesData$data[0],
        data2 = _seriesData$data[1];

    seriesArr = [{
      name: "\u9762\u79EF\u6A21\u5F0F",
      type: "pie",
      radius: [100, 130],
      center: ["50%", "50%"],
      data: [{
        value: data1.value,
        name: data1.name,
        itemStyle: {
          color: linearGradient(seriesData.colorArr[0], seriesData.colorArr[1])
        },
        label: {
          color: "rgba(255,255,255,.45)",
          fontSize: 14,
          formatter: "".concat(data1.formatterName, "\n{a|").concat(doneCount, "}\u4E2A"),
          rich: {
            a: {
              color: "#fff",
              fontSize: 20,
              lineHeight: 30
            }
          }
        }
      }, {
        value: data2.value,
        name: data2.name,
        itemStyle: {
          color: "transparent"
        }
      }]
    }, {
      name: "\u9762\u79EF\u6A21\u5F0F",
      type: "pie",
      radius: [110, 120],
      center: ["50%", "50%"],
      data: [{
        value: data1.value,
        name: data1.name,
        itemStyle: {
          color: "transparent"
        }
      }, {
        value: data2.value,
        name: data2.name,
        itemStyle: {
          color: linearGradient(seriesData.colorArr[0], seriesData.colorArr[1])
        },
        label: {
          color: "rgba(255,255,255,.45)",
          fontSize: 14,
          formatter: "".concat(data2.formatterName, "\n{a|").concat(total, "}\u4E2A"),
          rich: {
            a: {
              color: "#fff",
              fontSize: 20,
              lineHeight: 30
            }
          }
        }
      }]
    }];
  }

  var option = {
    title: _objectSpread$i({
      text: "".concat(titleText, "%"),
      subtext: titleSubtext,
      x: "center",
      y: "center",
      textStyle: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "normal"
      },
      subtextStyle: {
        color: "rgba(255,255,255,.45)",
        fontSize: 14,
        fontWeight: "normal"
      }
    }, title),
    tooltip: _objectSpread$i({
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    }, tooltip),
    legend: _objectSpread$i({
      x: "center",
      y: "bottom",
      show: false
    }, legend),
    calculable: true,
    series: seriesArr
  };
  return option;
};
/**横向柱状比例图**/


var proportionBarsChart = function proportionBarsChart() {
  var chartData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var titleText = chartData.titleText,
      title = chartData.title,
      grid = chartData.grid,
      yAxis = chartData.yAxis,
      yAxisData = chartData.yAxisData,
      xAxis = chartData.xAxis,
      labelName1 = chartData.labelName1,
      labelName2 = chartData.labelName2,
      seriesData = chartData.seriesData,
      series = chartData.series;
  var option = {
    title: _objectSpread$i({
      top: "5%",
      left: "center",
      text: titleText,
      textStyle: {
        align: "center",
        color: "#fff",
        fontSize: 18
      }
    }, title),
    grid: _objectSpread$i({
      left: "240",
      right: "100"
    }, grid),
    xAxis: _objectSpread$i({
      show: false
    }, xAxis),
    yAxis: _objectSpread$i({
      type: "category",
      axisLabel: {
        margin: 100,
        show: true,
        color: "#4DCEF8",
        fontSize: 12
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: yAxisData
    }, yAxis),
    series: [_objectSpread$i({
      type: "bar",
      label: {
        normal: {
          show: true,
          position: "right",
          color: "#fff",
          fontSize: 12,
          formatter: function formatter(param) {
            return labelName1[param.dataIndex];
          }
        }
      },
      barWidth: 20,
      itemStyle: {
        normal: {
          borderColor: {
            type: "linear",
            x: 0,
            x1: 1,
            colorStops: [{
              offset: 0,
              color: "#02ddff"
            }, {
              offset: 1,
              color: "#00feff"
            }]
          },
          borderWidth: 1,
          barBorderRadius: 15,
          color: "transparent"
        }
      },
      z: 1,
      data: [1, 1, 1]
    }, series && series.length === 2 ? series[0] : {}), _objectSpread$i({
      type: "bar",
      barGap: "-98%",
      barWidth: "19",
      itemStyle: {
        normal: {
          barBorderRadius: 16,
          color: {
            type: "linear",
            x: 0,
            x1: 1,
            colorStops: [{
              offset: 0,
              color: "#02ddff"
            }, {
              offset: 1,
              color: "#00feff"
            }]
          }
        }
      },
      max: 1,
      label: {
        normal: {
          show: true,
          position: "left",
          color: "#fff",
          fontSize: 14,
          formatter: function formatter(param) {
            return labelName2[param.dataIndex];
          }
        }
      },
      labelLine: {
        show: true
      },
      z: 2,
      data: seriesData
    }, series && series.length === 2 ? series[1] : {})]
  };
  return option;
};

var getOptions = function getOptions(type, chartData) {
  switch (type) {
    case "lineAndBarGroup":
      return lineAndBarGroup(chartData);

    case "ring":
      return ringChart(chartData);

    case "radar":
      return radarChar(chartData);

    case "proportion":
      return proportionChar(chartData);

    case "proportionBars":
      return proportionBarsChart(chartData);

    default:
      return chartData;
  }
};

function _createSuper$m(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$m(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$m() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EchartsComponent = /*#__PURE__*/function (_Component) {
  inherits(EchartsComponent, _Component);

  var _super = _createSuper$m(EchartsComponent);

  function EchartsComponent(props) {
    var _this;

    classCallCheck(this, EchartsComponent);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "reloadChart", function (chartData) {
      //预留给外面通过ref逃逸强制刷新图表，不建议使用
      _this.myChart.clear();

      var option = getOptions(_this.props.type, chartData);

      _this.myChart.setOption(option, _this.props.reload || false);
    });

    _this.myChart = null;
    return _this;
  }

  createClass(EchartsComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          type = _this$props.type,
          chartData = _this$props.chartData,
          handleClick = _this$props.handleClick;
      var timer = setTimeout(function () {
        _this2.myChart = Echarts.init(_this2.Chart);
        var option = getOptions(type, chartData);

        _this2.myChart.setOption(option);

        if (typeof handleClick === "function") {
          _this2.myChart.on("click", function (data) {
            handleClick(data);
          });
        }

        clearTimeout(timer);
      }, 300);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
        this.myChart.clear();
        var option = getOptions(nextProps.type, nextProps.chartData);
        this.myChart.setOption(option, nextProps.reload || false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.myChart && this.myChart.dispose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/React.createElement("div", {
        ref: function ref(classRef) {
          return _this3.Chart = classRef;
        },
        style: {
          width: "100%",
          height: "100%"
        }
      });
    }
  }]);

  return EchartsComponent;
}(Component);

var omittedToolTip = function omittedToolTip() {
  var omittedValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return /*#__PURE__*/React.createElement(Tooltip, {
    title: omittedValues.map(function (item) {
      return /*#__PURE__*/React.createElement("div", null, item.label);
    }),
    placement: "right"
  }, "+ ", omittedValues.length, " ...");
};

var clipboardInstance;

var getClipBoardInstance = function getClipBoardInstance() {
  var clipboardInstance = document.createElement('textarea');
  addClass(clipboardInstance, 'yss-copy-onlyone-textarea');
  setStyle(clipboardInstance, {
    opacity: 0,
    position: 'fixed',
    top: '-100px'
  });
  document.body.appendChild(clipboardInstance);
  return clipboardInstance;
};

var copyText = (function (text, onSuccess, onError) {
  clipboardInstance = clipboardInstance || getClipBoardInstance();
  clipboardInstance.value = text;
  clipboardInstance.select();
  clipboardInstance.setSelectionRange(0, clipboardInstance.value.length);
  var res;

  try {
    document.execCommand('copy');
    res = true;
  } catch (err) {
    res = false;
  }

  if (res) {
    isFunc(onSuccess) && onSuccess();
  } else {
    isFunc(onError) && onError();
  }
});

var styles = {"loading":"index-module_loading__3ba_h"};

var Loading = (function (props) {
  var isLoading = props.isLoading,
      error = props.error,
      retry = props.retry;

  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.loading
    }, /*#__PURE__*/React.createElement(Spin, {
      tip: "\u6B63\u5728\u52A0\u8F7D\u4E2D\uFF01",
      size: "large"
    }));
  } else if (error) {
    return /*#__PURE__*/React.createElement(Result, {
      status: "error",
      title: "\u9875\u9762\u52A0\u8F7D\u5931\u8D25\uFF01",
      extra: [/*#__PURE__*/React.createElement(Button, {
        key: "back",
        type: "primary"
      }, "\u8FD4\u56DE"), /*#__PURE__*/React.createElement(Button, {
        key: "retry",
        onClick: retry
      }, "\u518D\u8BD5\u4E00\u6B21")]
    });
  } else {
    return null;
  }
});

function ownKeys$j(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$j(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$j(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$j(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var hanbleConfirm = function hanbleConfirm() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var formDom = '';
  var contentName = options.contentName,
      contentLabel = options.contentLabel,
      contentRequired = options.contentRequired,
      requiredMessage = options.requiredMessage,
      _options$rowChecked = options.rowChecked,
      rowChecked = _options$rowChecked === void 0 ? [] : _options$rowChecked,
      _options$done = options.done,
      done = _options$done === void 0 ? function () {} : _options$done,
      _options$then = options.then,
      then = _options$then === void 0 ? function () {} : _options$then,
      _options$title = options.title,
      title = _options$title === void 0 ? '\u8BF7\u786E\u8BA4\u60A8\u7684\u64CD\u4F5C' : _options$title,
      _options$success = options.success,
      success = _options$success === void 0 ? '' : _options$success,
      _options$error = options.error,
      error = _options$error === void 0 ? '' : _options$error,
      _options$response = options.response,
      response = _options$response === void 0 ? 'callbackForTableChange' : _options$response;
  if (!rowChecked.length) return message.error('\u8BF7\u9009\u62E9\u9700\u8981\u64CD\u4F5C\u7684\u6570\u636E');

  var doing = /*#__PURE__*/function () {
    var _ref = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(formValues) {
      var rowDatas, data, res;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!!formValues) {
                rowDatas = rowChecked.map(function (item) {
                  return _objectSpread$j(_objectSpread$j({}, item), formValues);
                });
              } else {
                rowDatas = rowChecked;
              }

              _context.next = 3;
              return done(rowDatas);

            case 3:
              data = _context.sent;
              res = data.get(response);
              !res && (res = data);
              _context.t0 = res.winRspType;
              _context.next = _context.t0 === 'SUCC' ? 9 : 11;
              break;

            case 9:
              message.success(success || res.msg);
              return _context.abrupt("return", then(res, rowChecked));

            case 11:
              return _context.abrupt("return", message.error(error || res.msg));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function doing(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleOk = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4() {
      var formValues;
      return regenerator.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!contentName) {
                _context4.next = 11;
                break;
              }

              formValues = formDom.getValues();

              if (!contentRequired) {
                _context4.next = 7;
                break;
              }

              _context4.next = 5;
              return formDom.onValidate( /*#__PURE__*/asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
                return regenerator.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return doing(formValues);

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })), /*#__PURE__*/asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
                return regenerator.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        return _context3.abrupt("return", Promise.reject());

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })));

            case 5:
              _context4.next = 9;
              break;

            case 7:
              _context4.next = 9;
              return doing(formValues);

            case 9:
              _context4.next = 13;
              break;

            case 11:
              _context4.next = 13;
              return doing();

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleOk() {
      return _ref2.apply(this, arguments);
    };
  }();

  ConfirmModal({
    title: title,
    content: !!contentName ? /*#__PURE__*/React.createElement(NormForm, {
      refs: function refs(ref) {
        return formDom = ref;
      },
      formItem: [{
        name: contentName,
        label: contentLabel,
        type: 'TextArea',
        rules: [{
          required: contentRequired,
          message: requiredMessage
        }]
      }]
    }) : null,
    onOk: handleOk
  });
};
/***设置表头信息 */

var setColumns = function setColumns(array, prams) {
  if (isObject(array)) {
    var list = array.list,
        datas = array.datas,
        index = array.index;
    list[index] = _objectSpread$j(_objectSpread$j({}, list[index]), datas);
    return list;
  }

  var newArray = array || [];

  if (!newArray.length) {
    return;
  }

  var columns = newArray.map(function (item, index) {
    var r = /(元\)$)/g;

    if (item.title === '\u5E8F\u53F7') {
      return {
        title: item.title,
        width: 80,
        dataIndex: item.dataIndex,
        key: item.dataIndex,
        ellipsis: true,
        fixed: 'left',
        render: function render(text, record, index) {
          if (record.serialNumber == '\u5408\u8BA1') {
            return /*#__PURE__*/React.createElement("span", {
              style: {
                color: '#E6A23C',
                fontWeight: 'bolder'
              }
            }, "\u5408\u8BA1");
          } else {
            return ++index;
          }
        }
      };
    } else if (item.title === '\u72B6\u6001') {
      return {
        title: '\u72B6\u6001',
        dataIndex: item.dataIndex,
        key: item.dataIndex,
        width: item.width,
        ellipsis: true,
        render: function render(column) {
          return /*#__PURE__*/React.createElement("span", {
            style: {
              color: typeStatue[column]
            }
          }, column === "1" ? '\u542F\u7528' : column === "2" ? '\u505C\u7528' : '\u6CE8\u9500');
        }
      };
    } else if (item.title === '\u5BA1\u6838\u72B6\u6001') {
      return {
        title: '\u5BA1\u6838\u72B6\u6001',
        dataIndex: item.dataIndex,
        key: item.dataIndex,
        ellipsis: true,
        width: item.width,
        render: function render(column) {
          return /*#__PURE__*/React.createElement("span", {
            style: {
              color: checkStatue[column]
            }
          }, column === "2" ? '\u5F85\u5BA1\u6838' : column === "1" ? '\u5DF2\u5BA1\u6838' : '');
        }
      };
    } else if (item.title === '\u64CD\u4F5C') {
      return item;
    } else if (r.test(item.title)) {
      return {
        title: item.title,
        dataIndex: item.dataIndex,
        key: item.dataIndex,
        width: item.width,
        align: 'right',
        ellipsis: true,
        render: function render(column) {
          return /*#__PURE__*/React.createElement("span", {
            style: {
              color: '#E6A23C'
            }
          }, formatNumber(column));
        }
      };
    } else {
      return _objectSpread$j(_objectSpread$j({}, item), {}, {
        ellipsis: true,
        title: item.title,
        render: typeof item.render === 'function' ? function (text, record, index) {
          return item.render(text, record, index, prams);
        } : null
      });
    }
  });
  return columns;
};
/***设置表格属性 */

var setTableInfo = function setTableInfo(params) {
  var pageCallback = (params.pagination || {}).callback;
  return _objectSpread$j(_objectSpread$j({}, params), {}, {
    scroll: {
      x: '100%',
      y: '100%'
    },
    bordered: true,
    pagination: !!params.pagination ? _objectSpread$j({
      pageSize: page.reqPageSize,
      size: 'small',
      onChange: function onChange(page, pageSize) {
        isFunc(pageCallback) && pageCallback(page, pageSize);
      },
      onShowSizeChange: function onShowSizeChange(page, pageSize) {
        isFunc(pageCallback) && pageCallback(page, pageSize);
      },
      showTotal: function showTotal(total) {
        return /*#__PURE__*/React.createElement("span", null, "\u603B\u8BB0\u5F55\u6570\uFF1A".concat(total));
      }
    }, function () {
      delete params.pagination.callback;
      return params.pagination;
    }()) : false,
    rowClassName: function rowClassName(record, index) {
      var _rowClassName = isFunc(params.rowClassName) ? params.rowClassName(record, index) : false;

      var _tableRowBlue = index % 2 === 0 ? 'tableRowBlue' : '';

      return !!_rowClassName ? _rowClassName : _tableRowBlue;
    }
  });
};
/***勾选表格单选框列获取已经勾选的id */

var rowSelectionFunc = function rowSelectionFunc(callback) {
  var _this = this;

  return {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      //获取批量选择中的批量的Id号;
      var ids = selectedRows.map(function (item) {
        return item;
      });

      if (typeof callback === 'function') {
        return callback(ids, selectedRowKeys);
      } else {
        _this.setState(function () {
          return {
            ids: ids,
            selectedRowKeys: selectedRowKeys
          };
        });
      }
    }
  };
};
/***设置验证表单数据*****/

var setFieldsObject = function setFieldsObject(object, type) {
  var newObject = {};
  Object.keys(object).forEach(function (item) {
    /*判断当时增加的时候初始化返回空**/
    newObject[item] = type === 'add' ? '' : object[item];
  });
  return newObject;
};
/***审核反审核前端局部刷新***/

var batchexamine = function batchexamine(ids, state, list, type) {
  var newState = state.get(list);
  ids.forEach(function (rowId) {
    state.get(list).forEach(function (element, index) {
      if (element.get("id") === rowId) {
        var newRow = state.get(list).get(index).set("checkStatus", type);
        newState = newState.splice(index, 1, newRow);
      }
    });
  });
  return newState;
};
/***批量删除前端局部刷新***/

var batcheDelete = function batcheDelete(ids, state, list) {
  var newState = state.get(list);
  ids.forEach(function (rowId) {
    newState.forEach(function (element, index) {
      if (element.get("id") === rowId) {
        newState = newState.splice(index, 1);
      }
    });
  });
  return newState;
};
/**更新状态***/

var upState = function upState(state, stateList, statusName, status, tableRowId) {
  var index = state.get(stateList).findIndex(function (item) {
    return item.get("id") === tableRowId;
  });
  var newRow = state.get(stateList).get(index).set(statusName, status);
  var newState = state.get(stateList).splice(index, 1, newRow);
  return newState;
};
/***点击表格复选框，获取选中的行ID,return array代表能能够进行http请求，returen boolean代表存在重复的不能进行http请求***/

var isCheckTrue = function isCheckTrue(params, type) {
  var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "checkStatus";
  var ids = [];
  var isNoCheck = true;
  params.forEach(function (item) {
    if (item[sign] === type) {
      isNoCheck = false;
      return;
    } else {
      ids.push(item.id);
    }
  });

  if (isNoCheck) {
    return ids;
  } else {
    return isNoCheck;
  }
};
/***表格修改行前端局部刷新***/

var upDate = function upDate(state, result, list, params) {
  var winRspType = result.data.winRspType;

  if (winRspType === "SUCC") {
    var newList = state.get(list).map(function (item) {
      //判断浏览器对immtable 的兼容
      var id = item.id || item.get("id");

      if (id === params.id) {
        return params;
      } else {
        return item;
      }
    });
    return newList;
  } else {
    message.error("\u8BF7\u6C42\u9519\u8BEF");
  }
};
/***表格增加行前端局部刷新***/

var add = function add(state, result, list, params) {
  var winRspType = result.data.winRspType;

  if (winRspType === "SUCC") {
    var newList = state.get(list).unshift(params);
    message.success('\u65B0\u589E\u6210\u529F');
    return newList;
  } else {
    message.error("\u65B0\u589E\u5931\u8D25");
  }
};
/***表格删除行前端局部刷新***/

var deletes = function deletes(state, result, list, id) {
  var _result$data = result.data,
      msg = _result$data.msg,
      winRspType = _result$data.winRspType;

  if (winRspType === "SUCC") {
    var newList = state.get(list).filter(function (item) {
      var filterId = item.id || item.get("id");
      return filterId !== id;
    });
    message.success('\u5220\u9664\u6210\u529F');
    return newList;
  } else {
    message.error(msg);
  }
}; // 格式化表格数据

var formatTableDatas = function formatTableDatas() {
  var datas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return datas.map(function (item, index) {
    item.key = prefix + index;
    return item;
  });
}; // 点击行样式

var setClickTrStyle = function setClickTrStyle() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var currentTr = findFaceLevelNode(e.target, 'tr');
  var _obj$cls = obj.cls,
      cls = _obj$cls === void 0 ? 'yss-biz-table-click-tr' : _obj$cls,
      _obj$multiple = obj.multiple,
      multiple = _obj$multiple === void 0 ? false : _obj$multiple,
      _obj$cancel = obj.cancel,
      cancel = _obj$cancel === void 0 ? false : _obj$cancel,
      _obj$clear = obj.clear,
      clear = _obj$clear === void 0 ? false : _obj$clear;
  var parentEl = currentTr.parentElement || {};
  var allTr = [isFunc(parentEl.querySelector) ? parentEl.querySelector(".".concat(cls)) : null] || [];
  var noHaveClass = cancel ? !hasClass(currentTr, cls) : true;
  !multiple && allTr.forEach(function (item) {
    removeClass(item, cls);
  });
  !clear && noHaveClass && addClass(currentTr, cls);
  return clear ? false : noHaveClass;
}; // 强制渲染 - 适用于表格和按钮组

var forceRender = function forceRender() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var len = array.length - 1;
  len < 0 && (len = 0);
  !!(array[len] || {}).fill ? array.pop() : array.push({
    fill: true
  });
};

var handleExport = function handleExport(result, title) {
  if (!result) return false;
  var aLink = document.createElement("a");
  var blob = new Blob([result], {
    type: "application/vnd.ms-excel"
  });
  aLink.href = URL.createObjectURL(blob);
  aLink.download = title;
  aLink.click();
  document.body.appendChild(aLink);
};
/***按条件：导出全部和导出当前页
 * 
 * url：导出地址
 * params：按条件导出元素
 * title：导出文件的名称
 * isAll：是否全部导出
 * ***/

var exportFile = /*#__PURE__*/function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(url, params, title, isAll) {
    var result;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (isAll) {
              delete params["reqPageNum"];
              delete params["reqPageSize"];
            }

            delete params["clearingStatus"];
            _context.next = 4;
            return $ajax(url, params, 'post', {
              responseType: 'arraybuffer'
            });

          case 4:
            result = _context.sent;
            handleExport(result, title);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function exportFile(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
/***导出选中行
 * 
 * url：导出地址
 * params：按选中的行
 * title：导出文件的名称
 * 
 * ***/

var exportSelectFile = /*#__PURE__*/function () {
  var _ref2 = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(url, params, title) {
    var newParams, result;
    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (params.length) {
              _context2.next = 3;
              break;
            }

            message.error('\u8BF7\u9009\u62E9\u9700\u8981\u5BFC\u51FA\u7684\u9879\u76EE');
            return _context2.abrupt("return");

          case 3:
            newParams = {
              ids: []
            };
            params.forEach(function (element) {
              newParams.ids.push(element.id);
            });
            _context2.next = 7;
            return $ajax(url, newParams, 'post', {
              responseType: 'arraybuffer'
            });

          case 7:
            result = _context2.sent;
            handleExport(result, title);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function exportSelectFile(_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();

function ownKeys$k(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$k(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$k(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$k(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var publicSync = {
  // 设置弹窗状态
  setModalStatus: function setModalStatus(state, values) {
    var modalType = values.modalType,
        isShow = values.isShow;
    return state.merge(defineProperty({}, modalType, {
      'show': isShow
    }));
  },
  // 设置点击或选中行数据
  setTrDatas: function setTrDatas(state, _ref, _ref2) {
    var _ref$type = _ref.type,
        type = _ref$type === void 0 ? 'click' : _ref$type,
        row = _ref.row,
        _ref$clickKey = _ref.clickKey,
        clickKey = _ref$clickKey === void 0 ? 'clickedRow' : _ref$clickKey,
        _ref$selectKey = _ref.selectKey,
        selectKey = _ref$selectKey === void 0 ? 'selectedRows' : _ref$selectKey;
    var getState = _ref2.getState;
    state = getState();
    return state.merge(defineProperty({}, type === 'click' ? clickKey : selectKey, row || {}));
  },
  // 设置分页
  setPages: function setPages(state, value) {
    return state.set('page', {
      pageNum: value,
      pageSize: '20'
    });
  },
  // 设置其它 Model 数据
  setModelData: function setModelData(state, values) {
    if (isObject(values)) {
      Object.keys(values).forEach(function (key) {
        state = state.set(key, values[key]);
      });
    }

    return state;
  }
};
var publicAsync = {
  // 初始化表格和模糊查询
  _httpPageList: function _httpPageList(state, _ref3, _ref4) {
    return asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      var _ref3$relyKeys, relyKeys, _ref3$setKey, setKey, _ref3$params, params, _ref3$defaultParams, defaultParams, _ref3$request, request, getState, _page, resPage, resValue, res, datas, list, total;

      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref3$relyKeys = _ref3.relyKeys, relyKeys = _ref3$relyKeys === void 0 ? ['page', 'query'] : _ref3$relyKeys, _ref3$setKey = _ref3.setKey, setKey = _ref3$setKey === void 0 ? 'pageList' : _ref3$setKey, _ref3$params = _ref3.params, params = _ref3$params === void 0 ? {} : _ref3$params, _ref3$defaultParams = _ref3.defaultParams, defaultParams = _ref3$defaultParams === void 0 ? {} : _ref3$defaultParams, _ref3$request = _ref3.request, request = _ref3$request === void 0 ? function () {} : _ref3$request;
              getState = _ref4.getState;
              _page = state.get(relyKeys[0]);
              resPage = _page.toJS ? _page.toJS() : _page;
              params = state.get(relyKeys[1]);
              !!params.toJS && (params = params.toJS());
              resValue = _objectSpread$k(_objectSpread$k({}, defaultParams), params);
              params = filterNullElement(resValue);
              params = _objectSpread$k(_objectSpread$k({}, resValue), resPage);
              _context.next = 11;
              return request(params);

            case 11:
              res = _context.sent;
              datas = getValue(res.data, {});
              list = getValue(datas.list, []);
              total = datas.total;
              list.total = total;
              state = getState();
              return _context.abrupt("return", state.set(setKey, list));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
var publicModels = {
  page: _objectSpread$k({}, page),
  //页码
  trDom: '',
  //选中行的节点
  query: {},
  //模糊查询
  pageList: [],
  //表格数据
  clickedRow: {},
  selectedRows: {},
  callbackForTableChange: {} //请求返回状态

};

export { $ajax, $connect, BASE64, CheckboxGroup, ConfigableTable$1 as ConfigableTable, ConfirmModal, DragDom, DragDom$1 as DragSort, index as Dynamic, EchartsComponent as EchartsComp, FadeDown, FormValidItem, PartInput as InputPart, index$1 as LabelBody, Loading, AppComponent as MainPort, NewModal as Modal, MultipleModals as MultipleModal, NormForm as NormalForm, PageBody, PublicProps, SearchForm, Trees as SearchTree, SelectMapDics, SelectNorm as SelectNormal, SelectRequest, TabsParent as Tabs, TransfromDown, TreeSelectRequest, UploadFilesModal as UploadModal, add, addClass, addEvent, batcheDelete, batchexamine, browser, checkStatue, commonInfoVo, copyText, createGetGinseng, createGuid, cutNum, dateStrToMoment, deletes, domTreeHasClass, exportFile, exportSelectFile, filterNullElement, filterTreeData, findFaceLevelNode, flattenTreeData, forceRender, formatBarAndLineDatas, formatDate, formatNumber, formatTableDatas, formatTreeData, formatTreeTableData, functionRolue, getCookie, getCountDays, getDay, getNowFormatDate, getPrevDate, getType, getValue, hanbleConfirm, handleExport, hasClass, icons, include, isArray, isCheckTrue, isElem, isFunc, isMobile, isObject, isString, merge, modalInfo, momentToDateStr, numToChinese, numToEnglish, omittedToolTip, page, publicAsync, publicModels, publicSync, regexp, removeClass, removeEvent, removeStyle, rowSelectionFunc, selectRequest, setClickTrStyle, setColumns, setFieldsObject, setStyle, setTableInfo, sleep, throttle, typeStatue, upDate, upState, validate, withRoleBotton, withRoleTableBotton };
//# sourceMappingURL=index.js.map
