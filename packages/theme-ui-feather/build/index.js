import { Box } from '@theme-ui/components';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var arguments$1 = arguments;

  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments$1[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

var n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    z = n ? Symbol.for("react.memo") : 60115,
    A = n ? Symbol.for("react.lazy") : 60116,
    B = "function" === typeof Symbol && Symbol.iterator;

function C(a) {
  var arguments$1 = arguments;

  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) { b += "&args[]=" + encodeURIComponent(arguments$1[c]); }

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var D = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    E = {};

function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

F.prototype.isReactComponent = {};

F.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) { throw Error(C(85)); }
  this.updater.enqueueSetState(this, a, b, "setState");
};

F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function G() {}

G.prototype = F.prototype;

function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

var I = H.prototype = new G();
I.constructor = H;
objectAssign(I, F.prototype);
I.isPureReactComponent = !0;
var J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, c) {
  var arguments$1 = arguments;

  var e,
      d = {},
      g = null,
      k = null;
  if (null != b) { for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) { K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]); } }
  var f = arguments.length - 2;
  if (1 === f) { d.children = c; }else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++) { h[m] = arguments$1[m + 2]; }

    d.children = h;
  }
  if (a && a.defaultProps) { for (e in f = a.defaultProps, f) { void 0 === d[e] && (d[e] = f[e]); } }
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: d,
    _owner: J.current
  };
}

function N(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, c, e) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: e,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, c, e) {
  var d = typeof a;
  if ("undefined" === d || "boolean" === d) { a = null; }
  var g = !1;
  if (null === a) { g = !0; }else { switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  } }
  if (g) { return c(e, a, "" === b ? "." + U(a, 0) : b), 1; }
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) { for (var k = 0; k < a.length; k++) {
    d = a[k];
    var f = b + U(d, k);
    g += T(d, f, c, e);
  } } else if (null === a || "object" !== typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) { for (a = f.call(a), k = 0; !(d = a.next()).done;) { d = d.value, f = b + U(d, k++), g += T(d, f, c, e); } }else if ("object" === d) { throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, "")); }
  return g;
}

function V(a, b, c) {
  return null == a ? 0 : T(a, "", b, c);
}

function U(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function W(a, b) {
  a.func.call(a.context, b, a.count++);
}

function aa(a, b, c) {
  var e = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X(a, e, c, function (a) {
    return a;
  }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
}

function X(a, b, c, e, d) {
  var g = "";
  null != c && (g = ("" + c).replace(P, "$&/") + "/");
  b = R(b, g, e, d);
  V(a, aa, b);
  S(b);
}

var Y = {
  current: null
};

function Z() {
  var a = Y.current;
  if (null === a) { throw Error(C(321)); }
  return a;
}

var ba = {
  ReactCurrentDispatcher: Y,
  ReactCurrentBatchConfig: {
    suspense: null
  },
  ReactCurrentOwner: J,
  IsSomeRendererActing: {
    current: !1
  },
  assign: objectAssign
};
var Children = {
  map: function (a, b, c) {
    if (null == a) { return a; }
    var e = [];
    X(a, e, null, b, c);
    return e;
  },
  forEach: function (a, b, c) {
    if (null == a) { return a; }
    b = R(null, null, b, c);
    V(a, W, b);
    S(b);
  },
  count: function (a) {
    return V(a, function () {
      return null;
    }, null);
  },
  toArray: function (a) {
    var b = [];
    X(a, b, null, function (a) {
      return a;
    });
    return b;
  },
  only: function (a) {
    if (!O(a)) { throw Error(C(143)); }
    return a;
  }
};
var Component = F;
var Fragment = r;
var Profiler = u;
var PureComponent = H;
var StrictMode = t;
var Suspense = y;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;

var cloneElement = function (a, b, c) {
  var arguments$1 = arguments;

  if (null === a || void 0 === a) { throw Error(C(267, a)); }
  var e = objectAssign({}, a.props),
      d = a.key,
      g = a.ref,
      k = a._owner;

  if (null != b) {
    void 0 !== b.ref && (g = b.ref, k = J.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) { var f = a.type.defaultProps; }

    for (h in b) { K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]); }
  }

  var h = arguments.length - 2;
  if (1 === h) { e.children = c; }else if (1 < h) {
    f = Array(h);

    for (var m = 0; m < h; m++) { f[m] = arguments$1[m + 2]; }

    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};

var createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: w,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: v,
    _context: a
  };
  return a.Consumer = a;
};

var createElement = M;

var createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

var createRef = function () {
  return {
    current: null
  };
};

var forwardRef = function (a) {
  return {
    $$typeof: x,
    render: a
  };
};

var isValidElement = O;

var lazy = function (a) {
  return {
    $$typeof: A,
    _ctor: a,
    _status: -1,
    _result: null
  };
};

var memo = function (a, b) {
  return {
    $$typeof: z,
    type: a,
    compare: void 0 === b ? null : b
  };
};

var useCallback = function (a, b) {
  return Z().useCallback(a, b);
};

var useContext = function (a, b) {
  return Z().useContext(a, b);
};

var useDebugValue = function () {};

var useEffect = function (a, b) {
  return Z().useEffect(a, b);
};

var useImperativeHandle = function (a, b, c) {
  return Z().useImperativeHandle(a, b, c);
};

var useLayoutEffect = function (a, b) {
  return Z().useLayoutEffect(a, b);
};

var useMemo = function (a, b) {
  return Z().useMemo(a, b);
};

var useReducer = function (a, b, c) {
  return Z().useReducer(a, b, c);
};

var useRef = function (a) {
  return Z().useRef(a);
};

var useState = function (a) {
  return Z().useState(a);
};

var version = "16.13.1";
var react_production_min = {
  Children: Children,
  Component: Component,
  Fragment: Fragment,
  Profiler: Profiler,
  PureComponent: PureComponent,
  StrictMode: StrictMode,
  Suspense: Suspense,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cloneElement: cloneElement,
  createContext: createContext,
  createElement: createElement,
  createFactory: createFactory,
  createRef: createRef,
  forwardRef: forwardRef,
  isValidElement: isValidElement,
  lazy: lazy,
  memo: memo,
  useCallback: useCallback,
  useContext: useContext,
  useDebugValue: useDebugValue,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  version: version
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function () {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var react_development = createCommonjsModule(function (module, exports) {

  if (process.env.NODE_ENV !== "production") {
    (function () {

      var _assign = objectAssign;
      var checkPropTypes = checkPropTypes_1;
      var ReactVersion = '16.13.1'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary

      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';

      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') {
          return null;
        }

        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }

        return null;
      }
      /**
       * Keeps track of the current dispatcher.
       */


      var ReactCurrentDispatcher = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      };
      /**
       * Keeps track of the current batch's configuration such as how long an update
       * should suspend for if it needs to.
       */

      var ReactCurrentBatchConfig = {
        suspense: null
      };
      /**
       * Keeps track of the current owner.
       *
       * The current owner is the component who should own any components that are
       * currently being constructed.
       */

      var ReactCurrentOwner = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      };
      var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

      function describeComponentFrame(name, source, ownerName) {
        var sourceInfo = '';

        if (source) {
          var path = source.fileName;
          var fileName = path.replace(BEFORE_SLASH_RE, '');
          {
            // In DEV, include code for a common special case:
            // prefer "folder/index.js" instead of just "index.js".
            if (/^index\./.test(fileName)) {
              var match = path.match(BEFORE_SLASH_RE);

              if (match) {
                var pathBeforeSlash = match[1];

                if (pathBeforeSlash) {
                  var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                  fileName = folderName + '/' + fileName;
                }
              }
            }
          }
          sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
        } else if (ownerName) {
          sourceInfo = ' (created by ' + ownerName + ')';
        }

        return '\n    in ' + (name || 'Unknown') + sourceInfo;
      }

      var Resolved = 1;

      function refineResolvedLazyComponent(lazyComponent) {
        return lazyComponent._status === Resolved ? lazyComponent._result : null;
      }

      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
      }

      function getComponentName(type) {
        if (type == null) {
          // Host root, text node or just invalid type.
          return null;
        }

        {
          if (typeof type.tag === 'number') {
            error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
          }
        }

        if (typeof type === 'function') {
          return type.displayName || type.name || null;
        }

        if (typeof type === 'string') {
          return type;
        }

        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return 'Fragment';

          case REACT_PORTAL_TYPE:
            return 'Portal';

          case REACT_PROFILER_TYPE:
            return "Profiler";

          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode';

          case REACT_SUSPENSE_TYPE:
            return 'Suspense';

          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }

        if (typeof type === 'object') {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return 'Context.Consumer';

            case REACT_PROVIDER_TYPE:
              return 'Context.Provider';

            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef');

            case REACT_MEMO_TYPE:
              return getComponentName(type.type);

            case REACT_BLOCK_TYPE:
              return getComponentName(type.render);

            case REACT_LAZY_TYPE:
              {
                var thenable = type;
                var resolvedThenable = refineResolvedLazyComponent(thenable);

                if (resolvedThenable) {
                  return getComponentName(resolvedThenable);
                }

                break;
              }
          }
        }

        return null;
      }

      var ReactDebugCurrentFrame = {};
      var currentlyValidatingElement = null;

      function setCurrentlyValidatingElement(element) {
        {
          currentlyValidatingElement = element;
        }
      }

      {
        // Stack implementation injected by the current renderer.
        ReactDebugCurrentFrame.getCurrentStack = null;

        ReactDebugCurrentFrame.getStackAddendum = function () {
          var stack = ''; // Add an extra top frame while an element is being validated

          if (currentlyValidatingElement) {
            var name = getComponentName(currentlyValidatingElement.type);
            var owner = currentlyValidatingElement._owner;
            stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
          } // Delegate to the injected renderer-specific implementation


          var impl = ReactDebugCurrentFrame.getCurrentStack;

          if (impl) {
            stack += impl() || '';
          }

          return stack;
        };
      }
      /**
       * Used by act() to track whether you're inside an act() scope.
       */

      var IsSomeRendererActing = {
        current: false
      };
      var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner,
        IsSomeRendererActing: IsSomeRendererActing,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: _assign
      };
      {
        _assign(ReactSharedInternals, {
          // These should not be included in production.
          ReactDebugCurrentFrame: ReactDebugCurrentFrame,
          // Shim for React DOM 16.0.0 which still destructured (but not used) this.
          // TODO: remove in React 17.0.
          ReactComponentTreeHook: {}
        });
      } // by calls to these methods by a Babel plugin.
      //
      // In PROD (or in packages without access to React internals),
      // they are left as they are instead.

      function warn(format) {
        var arguments$1 = arguments;

        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments$1[_key];
          }

          printWarning('warn', format, args);
        }
      }

      function error(format) {
        var arguments$1 = arguments;

        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments$1[_key2];
          }

          printWarning('error', format, args);
        }
      }

      function printWarning(level, format, args) {
        // When changing this logic, you might want to also
        // update consoleWithStackDev.www.js as well.
        {
          var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

          if (!hasExistingStack) {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();

            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            }
          }

          var argsWithFormat = args.map(function (item) {
            return '' + item;
          }); // Careful: RN currently depends on this prefix

          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          // eslint-disable-next-line react-internal/no-production-logging

          Function.prototype.apply.call(console[level], console, argsWithFormat);

          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            var argIndex = 0;
            var message = 'Warning: ' + format.replace(/%s/g, function () {
              return args[argIndex++];
            });
            throw new Error(message);
          } catch (x) {}
        }
      }

      var didWarnStateUpdateForUnmountedComponent = {};

      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
          var warningKey = componentName + "." + callerName;

          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return;
          }

          error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
          didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
      }
      /**
       * This is the abstract API for an update queue.
       */


      var ReactNoopUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function (publicInstance) {
          return false;
        },

        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function (publicInstance, callback, callerName) {
          warnNoop(publicInstance, 'forceUpdate');
        },

        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, 'replaceState');
        },

        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function (publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, 'setState');
        }
      };
      var emptyObject = {};
      {
        Object.freeze(emptyObject);
      }
      /**
       * Base class helpers for the updating state of a component.
       */

      function Component(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.

        this.updater = updater || ReactNoopUpdateQueue;
      }

      Component.prototype.isReactComponent = {};
      /**
       * Sets a subset of the state. Always use this to mutate
       * state. You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * There is no guarantee that calls to `setState` will run synchronously,
       * as they may eventually be batched together.  You can provide an optional
       * callback that will be executed when the call to setState is actually
       * completed.
       *
       * When a function is provided to setState, it will be called at some point in
       * the future (not synchronously). It will be called with the up to date
       * component arguments (state, props, context). These values can be different
       * from this.* because your function may be called after receiveProps but before
       * shouldComponentUpdate, and this new state, props, and context will not yet be
       * assigned to this.
       *
       * @param {object|function} partialState Next partial state or function to
       *        produce next partial state to be merged with current state.
       * @param {?function} callback Called after state is updated.
       * @final
       * @protected
       */

      Component.prototype.setState = function (partialState, callback) {
        if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
          {
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
        }

        this.updater.enqueueSetState(this, partialState, callback, 'setState');
      };
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {?function} callback Called after update is complete.
       * @final
       * @protected
       */


      Component.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
      };
      /**
       * Deprecated APIs. These APIs used to exist on classic React classes but since
       * we would like to deprecate them, we're not going to move them over to this
       * modern base class. Instead, we define a getter that warns if it's accessed.
       */


      {
        var deprecatedAPIs = {
          isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
          replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
        };

        var defineDeprecationWarning = function (methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function () {
              warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
              return undefined;
            }
          });
        };

        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }

      function ComponentDummy() {}

      ComponentDummy.prototype = Component.prototype;
      /**
       * Convenience component with default shallow equality check for sCU.
       */

      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }

      var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
      pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

      _assign(pureComponentPrototype, Component.prototype);

      pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

      function createRef() {
        var refObject = {
          current: null
        };
        {
          Object.seal(refObject);
        }
        return refObject;
      }

      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }

      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== undefined;
      }

      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== undefined;
      }

      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function () {
          {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
            }
          }
        };

        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }

      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function () {
          {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
            }
          }
        };

        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }

      function warnIfStringRefCannotBeAutoConverted(config) {
        {
          if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);

            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, instanceof check
       * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} props
       * @param {*} key
       * @param {string|object} ref
       * @param {*} owner
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @internal
       */


      var ReactElement = function (type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.

          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          }); // self and source are DEV only properties.

          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          }); // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.

          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });

          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      /**
       * Create and return a new ReactElement of the given type.
       * See https://reactjs.org/docs/react-api.html#createelement
       */


      function createElement(type, config, children) {
        var arguments$1 = arguments;

        var propName; // Reserved names are extracted

        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;

        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;
            {
              warnIfStringRefCannotBeAutoConverted(config);
            }
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          self = config.__self === undefined ? null : config.__self;
          source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.


        var childrenLength = arguments.length - 2;

        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);

          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments$1[i + 2];
          }

          {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }
          props.children = childArray;
        } // Resolve default props


        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;

          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }

        {
          if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }

            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }

      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
      }
      /**
       * Clone and return a new ReactElement using element as the starting point.
       * See https://reactjs.org/docs/react-api.html#cloneelement
       */


      function cloneElement(element, config, children) {
        var arguments$1 = arguments;

        if (!!(element === null || element === undefined)) {
          {
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
        }

        var propName; // Original props are copied

        var props = _assign({}, element.props); // Reserved names are extracted


        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.

        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.

        var source = element._source; // Owner will be preserved, unless ref is overridden

        var owner = element._owner;

        if (config != null) {
          if (hasValidRef(config)) {
            // Silently steal the ref from the parent.
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          } // Remaining properties override existing props


          var defaultProps;

          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }

          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              if (config[propName] === undefined && defaultProps !== undefined) {
                // Resolve default props
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.


        var childrenLength = arguments.length - 2;

        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);

          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments$1[i + 2];
          }

          props.children = childArray;
        }

        return ReactElement(element.type, key, ref, self, source, owner, props);
      }
      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a ReactElement.
       * @final
       */


      function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      var SEPARATOR = '.';
      var SUBSEPARATOR = ':';
      /**
       * Escape and wrap key so it is safe to use as a reactid
       *
       * @param {string} key to be escaped.
       * @return {string} the escaped key.
       */

      function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          '=': '=0',
          ':': '=2'
        };
        var escapedString = ('' + key).replace(escapeRegex, function (match) {
          return escaperLookup[match];
        });
        return '$' + escapedString;
      }
      /**
       * TODO: Test that a single child and an array with one item have the same key
       * pattern.
       */


      var didWarnAboutMaps = false;
      var userProvidedKeyEscapeRegex = /\/+/g;

      function escapeUserProvidedKey(text) {
        return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
      }

      var POOL_SIZE = 10;
      var traverseContextPool = [];

      function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
        if (traverseContextPool.length) {
          var traverseContext = traverseContextPool.pop();
          traverseContext.result = mapResult;
          traverseContext.keyPrefix = keyPrefix;
          traverseContext.func = mapFunction;
          traverseContext.context = mapContext;
          traverseContext.count = 0;
          return traverseContext;
        } else {
          return {
            result: mapResult,
            keyPrefix: keyPrefix,
            func: mapFunction,
            context: mapContext,
            count: 0
          };
        }
      }

      function releaseTraverseContext(traverseContext) {
        traverseContext.result = null;
        traverseContext.keyPrefix = null;
        traverseContext.func = null;
        traverseContext.context = null;
        traverseContext.count = 0;

        if (traverseContextPool.length < POOL_SIZE) {
          traverseContextPool.push(traverseContext);
        }
      }
      /**
       * @param {?*} children Children tree container.
       * @param {!string} nameSoFar Name of the key path so far.
       * @param {!function} callback Callback to invoke with each child found.
       * @param {?*} traverseContext Used to pass information throughout the traversal
       * process.
       * @return {!number} The number of children in this subtree.
       */


      function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
        var type = typeof children;

        if (type === 'undefined' || type === 'boolean') {
          // All of the above are perceived as null.
          children = null;
        }

        var invokeCallback = false;

        if (children === null) {
          invokeCallback = true;
        } else {
          switch (type) {
            case 'string':
            case 'number':
              invokeCallback = true;
              break;

            case 'object':
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
              }

          }
        }

        if (invokeCallback) {
          callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
          // so that it's consistent if the number of children grows.
          nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
          return 1;
        }

        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.

        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getComponentKey(child, i);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          var iteratorFn = getIteratorFn(children);

          if (typeof iteratorFn === 'function') {
            {
              // Warn about using Maps as children
              if (iteratorFn === children.entries) {
                if (!didWarnAboutMaps) {
                  warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
                }

                didWarnAboutMaps = true;
              }
            }
            var iterator = iteratorFn.call(children);
            var step;
            var ii = 0;

            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getComponentKey(child, ii++);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else if (type === 'object') {
            var addendum = '';
            {
              addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
            }
            var childrenString = '' + children;
            {
              {
                throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum);
              }
            }
          }
        }

        return subtreeCount;
      }
      /**
       * Traverses children that are typically specified as `props.children`, but
       * might also be specified through attributes:
       *
       * - `traverseAllChildren(this.props.children, ...)`
       * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
       *
       * The `traverseContext` is an optional argument that is passed through the
       * entire traversal. It can be used to store accumulations or anything else that
       * the callback might find relevant.
       *
       * @param {?*} children Children tree object.
       * @param {!function} callback To invoke upon traversing each child.
       * @param {?*} traverseContext Context for traversal.
       * @return {!number} The number of children in this subtree.
       */


      function traverseAllChildren(children, callback, traverseContext) {
        if (children == null) {
          return 0;
        }

        return traverseAllChildrenImpl(children, '', callback, traverseContext);
      }
      /**
       * Generate a key string that identifies a component within a set.
       *
       * @param {*} component A component that could contain a manual key.
       * @param {number} index Index that is used if a manual key is not provided.
       * @return {string}
       */


      function getComponentKey(component, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof component === 'object' && component !== null && component.key != null) {
          // Explicit key
          return escape(component.key);
        } // Implicit key determined by the index in the set


        return index.toString(36);
      }

      function forEachSingleChild(bookKeeping, child, name) {
        var func = bookKeeping.func,
            context = bookKeeping.context;
        func.call(context, child, bookKeeping.count++);
      }
      /**
       * Iterates through children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
       *
       * The provided forEachFunc(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} forEachFunc
       * @param {*} forEachContext Context for forEachContext.
       */


      function forEachChildren(children, forEachFunc, forEachContext) {
        if (children == null) {
          return children;
        }

        var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
        traverseAllChildren(children, forEachSingleChild, traverseContext);
        releaseTraverseContext(traverseContext);
      }

      function mapSingleChildIntoContext(bookKeeping, child, childKey) {
        var result = bookKeeping.result,
            keyPrefix = bookKeeping.keyPrefix,
            func = bookKeeping.func,
            context = bookKeeping.context;
        var mappedChild = func.call(context, child, bookKeeping.count++);

        if (Array.isArray(mappedChild)) {
          mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
            return c;
          });
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
          }

          result.push(mappedChild);
        }
      }

      function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
        var escapedPrefix = '';

        if (prefix != null) {
          escapedPrefix = escapeUserProvidedKey(prefix) + '/';
        }

        var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
        traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
        releaseTraverseContext(traverseContext);
      }
      /**
       * Maps children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenmap
       *
       * The provided mapFunction(child, key, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} func The map function.
       * @param {*} context Context for mapFunction.
       * @return {object} Object containing the ordered map of results.
       */


      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }

        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, func, context);
        return result;
      }
      /**
       * Count the number of children that are typically specified as
       * `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrencount
       *
       * @param {?*} children Children tree container.
       * @return {number} The number of children.
       */


      function countChildren(children) {
        return traverseAllChildren(children, function () {
          return null;
        }, null);
      }
      /**
       * Flatten a children object (typically specified as `props.children`) and
       * return an array with appropriately re-keyed children.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
       */


      function toArray(children) {
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
          return child;
        });
        return result;
      }
      /**
       * Returns the first child in a collection of children and verifies that there
       * is only one child in the collection.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenonly
       *
       * The current implementation of this function assumes that a single child gets
       * passed without a wrapper, but the purpose of this helper function is to
       * abstract away the particular structure of children.
       *
       * @param {?object} children Child collection structure.
       * @return {ReactElement} The first and only `ReactElement` contained in the
       * structure.
       */


      function onlyChild(children) {
        if (!isValidElement(children)) {
          {
            throw Error("React.Children.only expected to receive a single React element child.");
          }
        }

        return children;
      }

      function createContext(defaultValue, calculateChangedBits) {
        if (calculateChangedBits === undefined) {
          calculateChangedBits = null;
        } else {
          {
            if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
              error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
            }
          }
        }

        var context = {
          $$typeof: REACT_CONTEXT_TYPE,
          _calculateChangedBits: calculateChangedBits,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null
        };
        context.Provider = {
          $$typeof: REACT_PROVIDER_TYPE,
          _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        {
          // A separate object, but proxies back to the original context object for
          // backwards compatibility. It has a different $$typeof, so we can properly
          // warn for the incorrect usage of Context as a Consumer.
          var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits
          }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

          Object.defineProperties(Consumer, {
            Provider: {
              get: function () {
                if (!hasWarnedAboutUsingConsumerProvider) {
                  hasWarnedAboutUsingConsumerProvider = true;
                  error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
                }

                return context.Provider;
              },
              set: function (_Provider) {
                context.Provider = _Provider;
              }
            },
            _currentValue: {
              get: function () {
                return context._currentValue;
              },
              set: function (_currentValue) {
                context._currentValue = _currentValue;
              }
            },
            _currentValue2: {
              get: function () {
                return context._currentValue2;
              },
              set: function (_currentValue2) {
                context._currentValue2 = _currentValue2;
              }
            },
            _threadCount: {
              get: function () {
                return context._threadCount;
              },
              set: function (_threadCount) {
                context._threadCount = _threadCount;
              }
            },
            Consumer: {
              get: function () {
                if (!hasWarnedAboutUsingNestedContextConsumers) {
                  hasWarnedAboutUsingNestedContextConsumers = true;
                  error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                }

                return context.Consumer;
              }
            }
          }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

          context.Consumer = Consumer;
        }
        {
          context._currentRenderer = null;
          context._currentRenderer2 = null;
        }
        return context;
      }

      function lazy(ctor) {
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _ctor: ctor,
          // React uses these fields to store the result.
          _status: -1,
          _result: null
        };
        {
          // In production, this would just set it on the object.
          var defaultProps;
          var propTypes;
          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: true,
              get: function () {
                return defaultProps;
              },
              set: function (newDefaultProps) {
                error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                defaultProps = newDefaultProps; // Match production behavior more closely:

                Object.defineProperty(lazyType, 'defaultProps', {
                  enumerable: true
                });
              }
            },
            propTypes: {
              configurable: true,
              get: function () {
                return propTypes;
              },
              set: function (newPropTypes) {
                error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                propTypes = newPropTypes; // Match production behavior more closely:

                Object.defineProperty(lazyType, 'propTypes', {
                  enumerable: true
                });
              }
            }
          });
        }
        return lazyType;
      }

      function forwardRef(render) {
        {
          if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
            error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
          } else if (typeof render !== 'function') {
            error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
          } else {
            if (render.length !== 0 && render.length !== 2) {
              error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
            }
          }

          if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) {
              error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
            }
          }
        }
        return {
          $$typeof: REACT_FORWARD_REF_TYPE,
          render: render
        };
      }

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function memo(type, compare) {
        {
          if (!isValidElementType(type)) {
            error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
          }
        }
        return {
          $$typeof: REACT_MEMO_TYPE,
          type: type,
          compare: compare === undefined ? null : compare
        };
      }

      function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;

        if (!(dispatcher !== null)) {
          {
            throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
          }
        }

        return dispatcher;
      }

      function useContext(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();
        {
          if (unstable_observedBits !== undefined) {
            error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
          } // TODO: add a more generic warning for invalid values.


          if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.

            if (realContext.Consumer === Context) {
              error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
            } else if (realContext.Provider === Context) {
              error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
            }
          }
        }
        return dispatcher.useContext(Context, unstable_observedBits);
      }

      function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
      }

      function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
      }

      function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
      }

      function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
      }

      function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
      }

      function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
      }

      function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
      }

      function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
      }

      function useDebugValue(value, formatterFn) {
        {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDebugValue(value, formatterFn);
        }
      }

      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }

      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentName(ReactCurrentOwner.current.type);

          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }

        return '';
      }

      function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }

        return '';
      }

      function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) {
          return getSourceInfoErrorAddendum(elementProps.__source);
        }

        return '';
      }
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */


      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

          if (parentName) {
            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
          }
        }

        return info;
      }
      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */


      function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }

        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }

        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.

        var childOwner = '';

        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          // Give the component that originally created this child.
          childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        }

        setCurrentlyValidatingElement(element);
        {
          error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
        }
        setCurrentlyValidatingElement(null);
      }
      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */


      function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') {
          return;
        }

        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];

            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);

          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;

              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */


      function validatePropTypes(element) {
        {
          var type = element.type;

          if (type === null || type === undefined || typeof type === 'string') {
            return;
          }

          var name = getComponentName(type);
          var propTypes;

          if (typeof type === 'function') {
            propTypes = type.propTypes;
          } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }

          if (propTypes) {
            setCurrentlyValidatingElement(element);
            checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
            setCurrentlyValidatingElement(null);
          } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
          }

          if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
            error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
          }
        }
      }
      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */


      function validateFragmentProps(fragment) {
        {
          setCurrentlyValidatingElement(fragment);
          var keys = Object.keys(fragment.props);

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (key !== 'children' && key !== 'key') {
              error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
              break;
            }
          }

          if (fragment.ref !== null) {
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
          }

          setCurrentlyValidatingElement(null);
        }
      }

      function createElementWithValidation(type, props, children) {
        var arguments$1 = arguments;

        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.

        if (!validType) {
          var info = '';

          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }

          var sourceInfo = getSourceInfoErrorAddendumForProps(props);

          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          var typeString;

          if (type === null) {
            typeString = 'null';
          } else if (Array.isArray(type)) {
            typeString = 'array';
          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
            info = ' Did you accidentally export a JSX literal instead of a component?';
          } else {
            typeString = typeof type;
          }

          {
            error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
          }
        }

        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.

        if (element == null) {
          return element;
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)


        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments$1[i], type);
          }
        }

        if (type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }

        return element;
      }

      var didWarnAboutDeprecatedCreateFactory = false;

      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        {
          if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
          } // Legacy hook: remove it


          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function () {
              warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
              Object.defineProperty(this, 'type', {
                value: type
              });
              return type;
            }
          });
        }
        return validatedFactory;
      }

      function cloneElementWithValidation(element, props, children) {
        var arguments$1 = arguments;

        var newElement = cloneElement.apply(this, arguments);

        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments$1[i], newElement.type);
        }

        validatePropTypes(newElement);
        return newElement;
      }

      {
        try {
          var frozenObject = Object.freeze({});
          var testMap = new Map([[frozenObject, null]]);
          var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
          // https://github.com/rollup/rollup/issues/1771
          // TODO: we can remove these if Rollup fixes the bug.

          testMap.set(0, 0);
          testSet.add(0);
        } catch (e) {}
      }
      var createElement$1 = createElementWithValidation;
      var cloneElement$1 = cloneElementWithValidation;
      var createFactory = createFactoryWithValidation;
      var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
      };
      exports.Children = Children;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
      exports.cloneElement = cloneElement$1;
      exports.createContext = createContext;
      exports.createElement = createElement$1;
      exports.createFactory = createFactory;
      exports.createRef = createRef;
      exports.forwardRef = forwardRef;
      exports.isValidElement = isValidElement;
      exports.lazy = lazy;
      exports.memo = memo;
      exports.useCallback = useCallback;
      exports.useContext = useContext;
      exports.useDebugValue = useDebugValue;
      exports.useEffect = useEffect;
      exports.useImperativeHandle = useImperativeHandle;
      exports.useLayoutEffect = useLayoutEffect;
      exports.useMemo = useMemo;
      exports.useReducer = useReducer;
      exports.useRef = useRef;
      exports.useState = useState;
      exports.version = ReactVersion;
    })();
  }
});

var react = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV === 'production') {
    module.exports = react_production_min;
  } else {
    module.exports = react_development;
  }
});

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var SVG = react.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties( ref$1, ["size"] );
  var props = rest;

  return react.createElement( Box, Object.assign({}, { ref: ref, as: "svg", xmlns: "http://www.w3.org/2000/svg", width: size + '', height: size + '', viewBox: "0 0 24 24", fill: "currentcolor" }, props));
});

function objectWithoutProperties$1 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Activity = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "22 12 18 12 15 21 9 3 6 12 2 12" })
    );
};

function objectWithoutProperties$2 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Airplay = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }),
      react.createElement( 'polygon', { points: "12 15 17 21 7 21 12 15" })
    );
};

function objectWithoutProperties$3 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var AlertCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'line', { x1: "12", y1: "8", x2: "12", y2: "12" }),
      react.createElement( 'line', { x1: "12", y1: "16", x2: "12.01", y2: "16" })
    );
};

function objectWithoutProperties$4 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var AlertOctagon = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }),
      react.createElement( 'line', { x1: "12", y1: "8", x2: "12", y2: "12" }),
      react.createElement( 'line', { x1: "12", y1: "16", x2: "12.01", y2: "16" })
    );
};

function objectWithoutProperties$5 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var AlertTriangle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$5( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
      react.createElement( 'line', { x1: "12", y1: "9", x2: "12", y2: "13" }),
      react.createElement( 'line', { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    );
};

function objectWithoutProperties$6 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var AlignCenter = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$6( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "18", y1: "10", x2: "6", y2: "10" }),
      react.createElement( 'line', { x1: "21", y1: "6", x2: "3", y2: "6" }),
      react.createElement( 'line', { x1: "21", y1: "14", x2: "3", y2: "14" }),
      react.createElement( 'line', { x1: "18", y1: "18", x2: "6", y2: "18" })
    );
};

function objectWithoutProperties$7 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var AlignJustify = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$7( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "21", y1: "10", x2: "3", y2: "10" }),
      react.createElement( 'line', { x1: "21", y1: "6", x2: "3", y2: "6" }),
      react.createElement( 'line', { x1: "21", y1: "14", x2: "3", y2: "14" }),
      react.createElement( 'line', { x1: "21", y1: "18", x2: "3", y2: "18" })
    );
};

function objectWithoutProperties$8 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var AlignLeft = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$8( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "17", y1: "10", x2: "3", y2: "10" }),
      react.createElement( 'line', { x1: "21", y1: "6", x2: "3", y2: "6" }),
      react.createElement( 'line', { x1: "21", y1: "14", x2: "3", y2: "14" }),
      react.createElement( 'line', { x1: "17", y1: "18", x2: "3", y2: "18" })
    );
};

function objectWithoutProperties$9 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var AlignRight = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$9( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "21", y1: "10", x2: "7", y2: "10" }),
      react.createElement( 'line', { x1: "21", y1: "6", x2: "3", y2: "6" }),
      react.createElement( 'line', { x1: "21", y1: "14", x2: "3", y2: "14" }),
      react.createElement( 'line', { x1: "21", y1: "18", x2: "7", y2: "18" })
    );
};

function objectWithoutProperties$a (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Anchor = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$a( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "5", r: "3" }),
      react.createElement( 'line', { x1: "12", y1: "22", x2: "12", y2: "8" }),
      react.createElement( 'path', { d: "M5 12H2a10 10 0 0 0 20 0h-3" })
    );
};

function objectWithoutProperties$b (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Aperture = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$b( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'line', { x1: "14.31", y1: "8", x2: "20.05", y2: "17.94" }),
      react.createElement( 'line', { x1: "9.69", y1: "8", x2: "21.17", y2: "8" }),
      react.createElement( 'line', { x1: "7.38", y1: "12", x2: "13.12", y2: "2.06" }),
      react.createElement( 'line', { x1: "9.69", y1: "16", x2: "3.95", y2: "6.06" }),
      react.createElement( 'line', { x1: "14.31", y1: "16", x2: "2.83", y2: "16" }),
      react.createElement( 'line', { x1: "16.62", y1: "12", x2: "10.88", y2: "21.94" })
    );
};

function objectWithoutProperties$c (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Archive = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$c( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "21 8 21 21 3 21 3 8" }),
      react.createElement( 'rect', { x: "1", y: "3", width: "22", height: "5" }),
      react.createElement( 'line', { x1: "10", y1: "12", x2: "14", y2: "12" })
    );
};

function objectWithoutProperties$d (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowDownCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$d( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'polyline', { points: "8 12 12 16 16 12" }),
      react.createElement( 'line', { x1: "12", y1: "8", x2: "12", y2: "16" })
    );
};

function objectWithoutProperties$e (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowDownLeft = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$e( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "17", y1: "7", x2: "7", y2: "17" }),
      react.createElement( 'polyline', { points: "17 17 7 17 7 7" })
    );
};

function objectWithoutProperties$f (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowDownRight = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$f( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "7", y1: "7", x2: "17", y2: "17" }),
      react.createElement( 'polyline', { points: "17 7 17 17 7 17" })
    );
};

function objectWithoutProperties$g (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowDown = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$g( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "12", y1: "5", x2: "12", y2: "19" }),
      react.createElement( 'polyline', { points: "19 12 12 19 5 12" })
    );
};

function objectWithoutProperties$h (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowLeftCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$h( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'polyline', { points: "12 8 8 12 12 16" }),
      react.createElement( 'line', { x1: "16", y1: "12", x2: "8", y2: "12" })
    );
};

function objectWithoutProperties$i (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowLeft = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$i( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "19", y1: "12", x2: "5", y2: "12" }),
      react.createElement( 'polyline', { points: "12 19 5 12 12 5" })
    );
};

function objectWithoutProperties$j (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowRightCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$j( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'polyline', { points: "12 16 16 12 12 8" }),
      react.createElement( 'line', { x1: "8", y1: "12", x2: "16", y2: "12" })
    );
};

function objectWithoutProperties$k (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowRight = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$k( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "5", y1: "12", x2: "19", y2: "12" }),
      react.createElement( 'polyline', { points: "12 5 19 12 12 19" })
    );
};

function objectWithoutProperties$l (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowUpCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$l( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'polyline', { points: "16 12 12 8 8 12" }),
      react.createElement( 'line', { x1: "12", y1: "16", x2: "12", y2: "8" })
    );
};

function objectWithoutProperties$m (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowUpLeft = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$m( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "17", y1: "17", x2: "7", y2: "7" }),
      react.createElement( 'polyline', { points: "7 17 7 7 17 7" })
    );
};

function objectWithoutProperties$n (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowUpRight = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$n( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "7", y1: "17", x2: "17", y2: "7" }),
      react.createElement( 'polyline', { points: "7 7 17 7 17 17" })
    );
};

function objectWithoutProperties$o (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ArrowUp = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$o( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "12", y1: "19", x2: "12", y2: "5" }),
      react.createElement( 'polyline', { points: "5 12 12 5 19 12" })
    );
};

function objectWithoutProperties$p (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var AtSign = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$p( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "4" }),
      react.createElement( 'path', { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" })
    );
};

function objectWithoutProperties$q (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Award = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$q( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "8", r: "7" }),
      react.createElement( 'polyline', { points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" })
    );
};

function objectWithoutProperties$r (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var BarChart2 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$r( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "18", y1: "20", x2: "18", y2: "10" }),
      react.createElement( 'line', { x1: "12", y1: "20", x2: "12", y2: "4" }),
      react.createElement( 'line', { x1: "6", y1: "20", x2: "6", y2: "14" })
    );
};

function objectWithoutProperties$s (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var BarChart = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$s( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "12", y1: "20", x2: "12", y2: "10" }),
      react.createElement( 'line', { x1: "18", y1: "20", x2: "18", y2: "4" }),
      react.createElement( 'line', { x1: "6", y1: "20", x2: "6", y2: "16" })
    );
};

function objectWithoutProperties$t (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var BatteryCharging = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$t( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" }),
      react.createElement( 'line', { x1: "23", y1: "13", x2: "23", y2: "11" }),
      react.createElement( 'polyline', { points: "11 6 7 12 13 12 9 18" })
    );
};

function objectWithoutProperties$u (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Battery = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$u( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "1", y: "6", width: "18", height: "12", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "23", y1: "13", x2: "23", y2: "11" })
    );
};

function objectWithoutProperties$v (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var BellOff = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$v( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M13.73 21a2 2 0 0 1-3.46 0" }),
      react.createElement( 'path', { d: "M18.63 13A17.89 17.89 0 0 1 18 8" }),
      react.createElement( 'path', { d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" }),
      react.createElement( 'path', { d: "M18 8a6 6 0 0 0-9.33-5" }),
      react.createElement( 'line', { x1: "1", y1: "1", x2: "23", y2: "23" })
    );
};

function objectWithoutProperties$w (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Bell = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$w( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }),
      react.createElement( 'path', { d: "M13.73 21a2 2 0 0 1-3.46 0" })
    );
};

function objectWithoutProperties$x (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Bluetooth = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$x( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" })
    );
};

function objectWithoutProperties$y (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Bold = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$y( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
      react.createElement( 'path', { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" })
    );
};

function objectWithoutProperties$z (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var BookOpen = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$z( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
      react.createElement( 'path', { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
    );
};

function objectWithoutProperties$A (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Book = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$A( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }),
      react.createElement( 'path', { d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" })
    );
};

function objectWithoutProperties$B (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Bookmark = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$B( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" })
    );
};

function objectWithoutProperties$C (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Box$1 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$C( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
      react.createElement( 'polyline', { points: "3.27 6.96 12 12.01 20.73 6.96" }),
      react.createElement( 'line', { x1: "12", y1: "22.08", x2: "12", y2: "12" })
    );
};

function objectWithoutProperties$D (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Briefcase = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$D( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
      react.createElement( 'path', { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
    );
};

function objectWithoutProperties$E (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Calendar = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$E( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "16", y1: "2", x2: "16", y2: "6" }),
      react.createElement( 'line', { x1: "8", y1: "2", x2: "8", y2: "6" }),
      react.createElement( 'line', { x1: "3", y1: "10", x2: "21", y2: "10" })
    );
};

function objectWithoutProperties$F (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CameraOff = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$F( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "1", y1: "1", x2: "23", y2: "23" }),
      react.createElement( 'path', { d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" })
    );
};

function objectWithoutProperties$G (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Camera = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$G( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" }),
      react.createElement( 'circle', { cx: "12", cy: "13", r: "4" })
    );
};

function objectWithoutProperties$H (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Cast = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$H( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }),
      react.createElement( 'line', { x1: "2", y1: "20", x2: "2.01", y2: "20" })
    );
};

function objectWithoutProperties$I (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CheckCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$I( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
      react.createElement( 'polyline', { points: "22 4 12 14.01 9 11.01" })
    );
};

function objectWithoutProperties$J (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CheckSquare = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$J( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "9 11 12 14 22 4" }),
      react.createElement( 'path', { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" })
    );
};

function objectWithoutProperties$K (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Check = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$K( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "20 6 9 17 4 12" })
    );
};

function objectWithoutProperties$L (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ChevronDown = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$L( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "6 9 12 15 18 9" })
    );
};

function objectWithoutProperties$M (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ChevronLeft = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$M( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "15 18 9 12 15 6" })
    );
};

function objectWithoutProperties$N (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ChevronRight = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$N( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "9 18 15 12 9 6" })
    );
};

function objectWithoutProperties$O (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ChevronUp = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$O( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "18 15 12 9 6 15" })
    );
};

function objectWithoutProperties$P (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ChevronsDown = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$P( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "7 13 12 18 17 13" }),
      react.createElement( 'polyline', { points: "7 6 12 11 17 6" })
    );
};

function objectWithoutProperties$Q (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ChevronsLeft = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$Q( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "11 17 6 12 11 7" }),
      react.createElement( 'polyline', { points: "18 17 13 12 18 7" })
    );
};

function objectWithoutProperties$R (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ChevronsRight = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$R( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "13 17 18 12 13 7" }),
      react.createElement( 'polyline', { points: "6 17 11 12 6 7" })
    );
};

function objectWithoutProperties$S (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ChevronsUp = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$S( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "17 11 12 6 7 11" }),
      react.createElement( 'polyline', { points: "17 18 12 13 7 18" })
    );
};

function objectWithoutProperties$T (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Chrome = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$T( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "4" }),
      react.createElement( 'line', { x1: "21.17", y1: "8", x2: "12", y2: "8" }),
      react.createElement( 'line', { x1: "3.95", y1: "6.06", x2: "8.54", y2: "14" }),
      react.createElement( 'line', { x1: "10.88", y1: "21.94", x2: "15.46", y2: "14" })
    );
};

function objectWithoutProperties$U (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Circle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$U( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" })
    );
};

function objectWithoutProperties$V (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Clipboard = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$V( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
      react.createElement( 'rect', { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" })
    );
};

function objectWithoutProperties$W (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Clock = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$W( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'polyline', { points: "12 6 12 12 16 14" })
    );
};

function objectWithoutProperties$X (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CloudDrizzle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$X( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "8", y1: "19", x2: "8", y2: "21" }),
      react.createElement( 'line', { x1: "8", y1: "13", x2: "8", y2: "15" }),
      react.createElement( 'line', { x1: "16", y1: "19", x2: "16", y2: "21" }),
      react.createElement( 'line', { x1: "16", y1: "13", x2: "16", y2: "15" }),
      react.createElement( 'line', { x1: "12", y1: "21", x2: "12", y2: "23" }),
      react.createElement( 'line', { x1: "12", y1: "15", x2: "12", y2: "17" }),
      react.createElement( 'path', { d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" })
    );
};

function objectWithoutProperties$Y (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CloudLightning = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$Y( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" }),
      react.createElement( 'polyline', { points: "13 11 9 17 15 17 11 23" })
    );
};

function objectWithoutProperties$Z (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CloudOff = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$Z( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" }),
      react.createElement( 'line', { x1: "1", y1: "1", x2: "23", y2: "23" })
    );
};

function objectWithoutProperties$_ (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CloudRain = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$_( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "16", y1: "13", x2: "16", y2: "21" }),
      react.createElement( 'line', { x1: "8", y1: "13", x2: "8", y2: "21" }),
      react.createElement( 'line', { x1: "12", y1: "15", x2: "12", y2: "23" }),
      react.createElement( 'path', { d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" })
    );
};

function objectWithoutProperties$10 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CloudSnow = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$10( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" }),
      react.createElement( 'line', { x1: "8", y1: "16", x2: "8.01", y2: "16" }),
      react.createElement( 'line', { x1: "8", y1: "20", x2: "8.01", y2: "20" }),
      react.createElement( 'line', { x1: "12", y1: "18", x2: "12.01", y2: "18" }),
      react.createElement( 'line', { x1: "12", y1: "22", x2: "12.01", y2: "22" }),
      react.createElement( 'line', { x1: "16", y1: "16", x2: "16.01", y2: "16" }),
      react.createElement( 'line', { x1: "16", y1: "20", x2: "16.01", y2: "20" })
    );
};

function objectWithoutProperties$11 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Cloud = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$11( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" })
    );
};

function objectWithoutProperties$12 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Code = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$12( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "16 18 22 12 16 6" }),
      react.createElement( 'polyline', { points: "8 6 2 12 8 18" })
    );
};

function objectWithoutProperties$13 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Codepen = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$13( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }),
      react.createElement( 'line', { x1: "12", y1: "22", x2: "12", y2: "15.5" }),
      react.createElement( 'polyline', { points: "22 8.5 12 15.5 2 8.5" }),
      react.createElement( 'polyline', { points: "2 15.5 12 8.5 22 15.5" }),
      react.createElement( 'line', { x1: "12", y1: "2", x2: "12", y2: "8.5" })
    );
};

function objectWithoutProperties$14 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Codesandbox = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$14( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
      react.createElement( 'polyline', { points: "7.5 4.21 12 6.81 16.5 4.21" }),
      react.createElement( 'polyline', { points: "7.5 19.79 7.5 14.6 3 12" }),
      react.createElement( 'polyline', { points: "21 12 16.5 14.6 16.5 19.79" }),
      react.createElement( 'polyline', { points: "3.27 6.96 12 12.01 20.73 6.96" }),
      react.createElement( 'line', { x1: "12", y1: "22.08", x2: "12", y2: "12" })
    );
};

function objectWithoutProperties$15 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Coffee = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$15( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M18 8h1a4 4 0 0 1 0 8h-1" }),
      react.createElement( 'path', { d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" }),
      react.createElement( 'line', { x1: "6", y1: "1", x2: "6", y2: "4" }),
      react.createElement( 'line', { x1: "10", y1: "1", x2: "10", y2: "4" }),
      react.createElement( 'line', { x1: "14", y1: "1", x2: "14", y2: "4" })
    );
};

function objectWithoutProperties$16 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Columns = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$16( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" })
    );
};

function objectWithoutProperties$17 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Command = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$17( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" })
    );
};

function objectWithoutProperties$18 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Compass = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$18( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'polygon', { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" })
    );
};

function objectWithoutProperties$19 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Copy = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$19( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
      react.createElement( 'path', { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
    );
};

function objectWithoutProperties$1a (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CornerDownLeft = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1a( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "9 10 4 15 9 20" }),
      react.createElement( 'path', { d: "M20 4v7a4 4 0 0 1-4 4H4" })
    );
};

function objectWithoutProperties$1b (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CornerDownRight = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1b( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "15 10 20 15 15 20" }),
      react.createElement( 'path', { d: "M4 4v7a4 4 0 0 0 4 4h12" })
    );
};

function objectWithoutProperties$1c (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CornerLeftDown = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1c( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "14 15 9 20 4 15" }),
      react.createElement( 'path', { d: "M20 4h-7a4 4 0 0 0-4 4v12" })
    );
};

function objectWithoutProperties$1d (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CornerLeftUp = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1d( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "14 9 9 4 4 9" }),
      react.createElement( 'path', { d: "M20 20h-7a4 4 0 0 1-4-4V4" })
    );
};

function objectWithoutProperties$1e (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CornerRightDown = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1e( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "10 15 15 20 20 15" }),
      react.createElement( 'path', { d: "M4 4h7a4 4 0 0 1 4 4v12" })
    );
};

function objectWithoutProperties$1f (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CornerRightUp = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1f( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "10 9 15 4 20 9" }),
      react.createElement( 'path', { d: "M4 20h7a4 4 0 0 0 4-4V4" })
    );
};

function objectWithoutProperties$1g (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CornerUpLeft = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1g( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "9 14 4 9 9 4" }),
      react.createElement( 'path', { d: "M20 20v-7a4 4 0 0 0-4-4H4" })
    );
};

function objectWithoutProperties$1h (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CornerUpRight = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1h( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "15 14 20 9 15 4" }),
      react.createElement( 'path', { d: "M4 20v-7a4 4 0 0 1 4-4h12" })
    );
};

function objectWithoutProperties$1i (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Cpu = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1i( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "4", y: "4", width: "16", height: "16", rx: "2", ry: "2" }),
      react.createElement( 'rect', { x: "9", y: "9", width: "6", height: "6" }),
      react.createElement( 'line', { x1: "9", y1: "1", x2: "9", y2: "4" }),
      react.createElement( 'line', { x1: "15", y1: "1", x2: "15", y2: "4" }),
      react.createElement( 'line', { x1: "9", y1: "20", x2: "9", y2: "23" }),
      react.createElement( 'line', { x1: "15", y1: "20", x2: "15", y2: "23" }),
      react.createElement( 'line', { x1: "20", y1: "9", x2: "23", y2: "9" }),
      react.createElement( 'line', { x1: "20", y1: "14", x2: "23", y2: "14" }),
      react.createElement( 'line', { x1: "1", y1: "9", x2: "4", y2: "9" }),
      react.createElement( 'line', { x1: "1", y1: "14", x2: "4", y2: "14" })
    );
};

function objectWithoutProperties$1j (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CreditCard = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1j( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "1", y: "4", width: "22", height: "16", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "1", y1: "10", x2: "23", y2: "10" })
    );
};

function objectWithoutProperties$1k (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Crop = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1k( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M6.13 1L6 16a2 2 0 0 0 2 2h15" }),
      react.createElement( 'path', { d: "M1 6.13L16 6a2 2 0 0 1 2 2v15" })
    );
};

function objectWithoutProperties$1l (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Crosshair = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1l( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'line', { x1: "22", y1: "12", x2: "18", y2: "12" }),
      react.createElement( 'line', { x1: "6", y1: "12", x2: "2", y2: "12" }),
      react.createElement( 'line', { x1: "12", y1: "6", x2: "12", y2: "2" }),
      react.createElement( 'line', { x1: "12", y1: "22", x2: "12", y2: "18" })
    );
};

function objectWithoutProperties$1m (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Database = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1m( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'ellipse', { cx: "12", cy: "5", rx: "9", ry: "3" }),
      react.createElement( 'path', { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
      react.createElement( 'path', { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
    );
};

function objectWithoutProperties$1n (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Delete = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1n( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" }),
      react.createElement( 'line', { x1: "18", y1: "9", x2: "12", y2: "15" }),
      react.createElement( 'line', { x1: "12", y1: "9", x2: "18", y2: "15" })
    );
};

function objectWithoutProperties$1o (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Disc = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1o( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "3" })
    );
};

function objectWithoutProperties$1p (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var DivideCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1p( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "8", y1: "12", x2: "16", y2: "12" }),
      react.createElement( 'line', { x1: "12", y1: "16", x2: "12", y2: "16" }),
      react.createElement( 'line', { x1: "12", y1: "8", x2: "12", y2: "8" }),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" })
    );
};

function objectWithoutProperties$1q (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var DivideSquare = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1q( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "8", y1: "12", x2: "16", y2: "12" }),
      react.createElement( 'line', { x1: "12", y1: "16", x2: "12", y2: "16" }),
      react.createElement( 'line', { x1: "12", y1: "8", x2: "12", y2: "8" })
    );
};

function objectWithoutProperties$1r (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Divide = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1r( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "6", r: "2" }),
      react.createElement( 'line', { x1: "5", y1: "12", x2: "19", y2: "12" }),
      react.createElement( 'circle', { cx: "12", cy: "18", r: "2" })
    );
};

function objectWithoutProperties$1s (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var DollarSign = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1s( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "12", y1: "1", x2: "12", y2: "23" }),
      react.createElement( 'path', { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" })
    );
};

function objectWithoutProperties$1t (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var DownloadCloud = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1t( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "8 17 12 21 16 17" }),
      react.createElement( 'line', { x1: "12", y1: "12", x2: "12", y2: "21" }),
      react.createElement( 'path', { d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" })
    );
};

function objectWithoutProperties$1u (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Download = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1u( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
      react.createElement( 'polyline', { points: "7 10 12 15 17 10" }),
      react.createElement( 'line', { x1: "12", y1: "15", x2: "12", y2: "3" })
    );
};

function objectWithoutProperties$1v (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Dribbble = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1v( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'path', { d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" })
    );
};

function objectWithoutProperties$1w (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Droplet = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1w( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" })
    );
};

function objectWithoutProperties$1x (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Edit2 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1x( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })
    );
};

function objectWithoutProperties$1y (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Edit3 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1y( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M12 20h9" }),
      react.createElement( 'path', { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
    );
};

function objectWithoutProperties$1z (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Edit = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1z( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
      react.createElement( 'path', { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })
    );
};

function objectWithoutProperties$1A (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ExternalLink = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1A( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
      react.createElement( 'polyline', { points: "15 3 21 3 21 9" }),
      react.createElement( 'line', { x1: "10", y1: "14", x2: "21", y2: "3" })
    );
};

function objectWithoutProperties$1B (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var EyeOff = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1B( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }),
      react.createElement( 'line', { x1: "1", y1: "1", x2: "23", y2: "23" })
    );
};

function objectWithoutProperties$1C (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Eye = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1C( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "3" })
    );
};

function objectWithoutProperties$1D (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Facebook = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1D( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" })
    );
};

function objectWithoutProperties$1E (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var FastForward = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1E( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "13 19 22 12 13 5 13 19" }),
      react.createElement( 'polygon', { points: "2 19 11 12 2 5 2 19" })
    );
};

function objectWithoutProperties$1F (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Feather = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1F( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }),
      react.createElement( 'line', { x1: "16", y1: "8", x2: "2", y2: "22" }),
      react.createElement( 'line', { x1: "17.5", y1: "15", x2: "9", y2: "15" })
    );
};

function objectWithoutProperties$1G (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Figma = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1G( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" }),
      react.createElement( 'path', { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" }),
      react.createElement( 'path', { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" }),
      react.createElement( 'path', { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" }),
      react.createElement( 'path', { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" })
    );
};

function objectWithoutProperties$1H (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var FileMinus = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1H( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
      react.createElement( 'polyline', { points: "14 2 14 8 20 8" }),
      react.createElement( 'line', { x1: "9", y1: "15", x2: "15", y2: "15" })
    );
};

function objectWithoutProperties$1I (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var FilePlus = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1I( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
      react.createElement( 'polyline', { points: "14 2 14 8 20 8" }),
      react.createElement( 'line', { x1: "12", y1: "18", x2: "12", y2: "12" }),
      react.createElement( 'line', { x1: "9", y1: "15", x2: "15", y2: "15" })
    );
};

function objectWithoutProperties$1J (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var FileText = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1J( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
      react.createElement( 'polyline', { points: "14 2 14 8 20 8" }),
      react.createElement( 'line', { x1: "16", y1: "13", x2: "8", y2: "13" }),
      react.createElement( 'line', { x1: "16", y1: "17", x2: "8", y2: "17" }),
      react.createElement( 'polyline', { points: "10 9 9 9 8 9" })
    );
};

function objectWithoutProperties$1K (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var File = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1K( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }),
      react.createElement( 'polyline', { points: "13 2 13 9 20 9" })
    );
};

function objectWithoutProperties$1L (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Film = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1L( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "2", y: "2", width: "20", height: "20", rx: "2.18", ry: "2.18" }),
      react.createElement( 'line', { x1: "7", y1: "2", x2: "7", y2: "22" }),
      react.createElement( 'line', { x1: "17", y1: "2", x2: "17", y2: "22" }),
      react.createElement( 'line', { x1: "2", y1: "12", x2: "22", y2: "12" }),
      react.createElement( 'line', { x1: "2", y1: "7", x2: "7", y2: "7" }),
      react.createElement( 'line', { x1: "2", y1: "17", x2: "7", y2: "17" }),
      react.createElement( 'line', { x1: "17", y1: "17", x2: "22", y2: "17" }),
      react.createElement( 'line', { x1: "17", y1: "7", x2: "22", y2: "7" })
    );
};

function objectWithoutProperties$1M (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Filter = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1M( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" })
    );
};

function objectWithoutProperties$1N (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Flag = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1N( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }),
      react.createElement( 'line', { x1: "4", y1: "22", x2: "4", y2: "15" })
    );
};

function objectWithoutProperties$1O (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var FolderMinus = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1O( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }),
      react.createElement( 'line', { x1: "9", y1: "14", x2: "15", y2: "14" })
    );
};

function objectWithoutProperties$1P (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var FolderPlus = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1P( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }),
      react.createElement( 'line', { x1: "12", y1: "11", x2: "12", y2: "17" }),
      react.createElement( 'line', { x1: "9", y1: "14", x2: "15", y2: "14" })
    );
};

function objectWithoutProperties$1Q (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Folder = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1Q( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" })
    );
};

function objectWithoutProperties$1R (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Framer = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1R( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" })
    );
};

function objectWithoutProperties$1S (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Frown = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1S( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'path', { d: "M16 16s-1.5-2-4-2-4 2-4 2" }),
      react.createElement( 'line', { x1: "9", y1: "9", x2: "9.01", y2: "9" }),
      react.createElement( 'line', { x1: "15", y1: "9", x2: "15.01", y2: "9" })
    );
};

function objectWithoutProperties$1T (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Gift = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1T( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "20 12 20 22 4 22 4 12" }),
      react.createElement( 'rect', { x: "2", y: "7", width: "20", height: "5" }),
      react.createElement( 'line', { x1: "12", y1: "22", x2: "12", y2: "7" }),
      react.createElement( 'path', { d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" }),
      react.createElement( 'path', { d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" })
    );
};

function objectWithoutProperties$1U (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var GitBranch = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1U( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "6", y1: "3", x2: "6", y2: "15" }),
      react.createElement( 'circle', { cx: "18", cy: "6", r: "3" }),
      react.createElement( 'circle', { cx: "6", cy: "18", r: "3" }),
      react.createElement( 'path', { d: "M18 9a9 9 0 0 1-9 9" })
    );
};

function objectWithoutProperties$1V (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var GitCommit = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1V( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "4" }),
      react.createElement( 'line', { x1: "1.05", y1: "12", x2: "7", y2: "12" }),
      react.createElement( 'line', { x1: "17.01", y1: "12", x2: "22.96", y2: "12" })
    );
};

function objectWithoutProperties$1W (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var GitMerge = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1W( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "18", cy: "18", r: "3" }),
      react.createElement( 'circle', { cx: "6", cy: "6", r: "3" }),
      react.createElement( 'path', { d: "M6 21V9a9 9 0 0 0 9 9" })
    );
};

function objectWithoutProperties$1X (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var GitPullRequest = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1X( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "18", cy: "18", r: "3" }),
      react.createElement( 'circle', { cx: "6", cy: "6", r: "3" }),
      react.createElement( 'path', { d: "M13 6h3a2 2 0 0 1 2 2v7" }),
      react.createElement( 'line', { x1: "6", y1: "9", x2: "6", y2: "21" })
    );
};

function objectWithoutProperties$1Y (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var GitHub = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1Y( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" })
    );
};

function objectWithoutProperties$1Z (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Gitlab = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1Z( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" })
    );
};

function objectWithoutProperties$1_ (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Globe = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1_( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'line', { x1: "2", y1: "12", x2: "22", y2: "12" }),
      react.createElement( 'path', { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
    );
};

function objectWithoutProperties$20 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Grid = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$20( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "3", width: "7", height: "7" }),
      react.createElement( 'rect', { x: "14", y: "3", width: "7", height: "7" }),
      react.createElement( 'rect', { x: "14", y: "14", width: "7", height: "7" }),
      react.createElement( 'rect', { x: "3", y: "14", width: "7", height: "7" })
    );
};

function objectWithoutProperties$21 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var HardDrive = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$21( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "22", y1: "12", x2: "2", y2: "12" }),
      react.createElement( 'path', { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }),
      react.createElement( 'line', { x1: "6", y1: "16", x2: "6.01", y2: "16" }),
      react.createElement( 'line', { x1: "10", y1: "16", x2: "10.01", y2: "16" })
    );
};

function objectWithoutProperties$22 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Hash = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$22( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "4", y1: "9", x2: "20", y2: "9" }),
      react.createElement( 'line', { x1: "4", y1: "15", x2: "20", y2: "15" }),
      react.createElement( 'line', { x1: "10", y1: "3", x2: "8", y2: "21" }),
      react.createElement( 'line', { x1: "16", y1: "3", x2: "14", y2: "21" })
    );
};

function objectWithoutProperties$23 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Headphones = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$23( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M3 18v-6a9 9 0 0 1 18 0v6" }),
      react.createElement( 'path', { d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" })
    );
};

function objectWithoutProperties$24 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Heart = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$24( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
    );
};

function objectWithoutProperties$25 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var HelpCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$25( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'path', { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
      react.createElement( 'line', { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    );
};

function objectWithoutProperties$26 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Hexagon = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$26( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" })
    );
};

function objectWithoutProperties$27 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Home = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$27( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
      react.createElement( 'polyline', { points: "9 22 9 12 15 12 15 22" })
    );
};

function objectWithoutProperties$28 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Image = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$28( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
      react.createElement( 'circle', { cx: "8.5", cy: "8.5", r: "1.5" }),
      react.createElement( 'polyline', { points: "21 15 16 10 5 21" })
    );
};

function objectWithoutProperties$29 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Inbox = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$29( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "22 12 16 12 14 15 10 15 8 12 2 12" }),
      react.createElement( 'path', { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" })
    );
};

function objectWithoutProperties$2a (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Info = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2a( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'line', { x1: "12", y1: "16", x2: "12", y2: "12" }),
      react.createElement( 'line', { x1: "12", y1: "8", x2: "12.01", y2: "8" })
    );
};

function objectWithoutProperties$2b (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Instagram = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2b( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
      react.createElement( 'path', { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
      react.createElement( 'line', { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
    );
};

function objectWithoutProperties$2c (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Italic = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2c( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "19", y1: "4", x2: "10", y2: "4" }),
      react.createElement( 'line', { x1: "14", y1: "20", x2: "5", y2: "20" }),
      react.createElement( 'line', { x1: "15", y1: "4", x2: "9", y2: "20" })
    );
};

function objectWithoutProperties$2d (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Key = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2d( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" })
    );
};

function objectWithoutProperties$2e (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Layers = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2e( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "12 2 2 7 12 12 22 7 12 2" }),
      react.createElement( 'polyline', { points: "2 17 12 22 22 17" }),
      react.createElement( 'polyline', { points: "2 12 12 17 22 12" })
    );
};

function objectWithoutProperties$2f (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Layout = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2f( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "3", y1: "9", x2: "21", y2: "9" }),
      react.createElement( 'line', { x1: "9", y1: "21", x2: "9", y2: "9" })
    );
};

function objectWithoutProperties$2g (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var LifeBuoy = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2g( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "4" }),
      react.createElement( 'line', { x1: "4.93", y1: "4.93", x2: "9.17", y2: "9.17" }),
      react.createElement( 'line', { x1: "14.83", y1: "14.83", x2: "19.07", y2: "19.07" }),
      react.createElement( 'line', { x1: "14.83", y1: "9.17", x2: "19.07", y2: "4.93" }),
      react.createElement( 'line', { x1: "14.83", y1: "9.17", x2: "18.36", y2: "5.64" }),
      react.createElement( 'line', { x1: "4.93", y1: "19.07", x2: "9.17", y2: "14.83" })
    );
};

function objectWithoutProperties$2h (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Link2 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2h( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" }),
      react.createElement( 'line', { x1: "8", y1: "12", x2: "16", y2: "12" })
    );
};

function objectWithoutProperties$2i (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Link = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2i( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
      react.createElement( 'path', { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
    );
};

function objectWithoutProperties$2j (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Linkedin = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2j( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
      react.createElement( 'rect', { x: "2", y: "9", width: "4", height: "12" }),
      react.createElement( 'circle', { cx: "4", cy: "4", r: "2" })
    );
};

function objectWithoutProperties$2k (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var List = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2k( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "8", y1: "6", x2: "21", y2: "6" }),
      react.createElement( 'line', { x1: "8", y1: "12", x2: "21", y2: "12" }),
      react.createElement( 'line', { x1: "8", y1: "18", x2: "21", y2: "18" }),
      react.createElement( 'line', { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
      react.createElement( 'line', { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
      react.createElement( 'line', { x1: "3", y1: "18", x2: "3.01", y2: "18" })
    );
};

function objectWithoutProperties$2l (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Loader = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2l( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "12", y1: "2", x2: "12", y2: "6" }),
      react.createElement( 'line', { x1: "12", y1: "18", x2: "12", y2: "22" }),
      react.createElement( 'line', { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" }),
      react.createElement( 'line', { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" }),
      react.createElement( 'line', { x1: "2", y1: "12", x2: "6", y2: "12" }),
      react.createElement( 'line', { x1: "18", y1: "12", x2: "22", y2: "12" }),
      react.createElement( 'line', { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" }),
      react.createElement( 'line', { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" })
    );
};

function objectWithoutProperties$2m (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Lock = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2m( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
      react.createElement( 'path', { d: "M7 11V7a5 5 0 0 1 10 0v4" })
    );
};

function objectWithoutProperties$2n (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var LogIn = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2n( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }),
      react.createElement( 'polyline', { points: "10 17 15 12 10 7" }),
      react.createElement( 'line', { x1: "15", y1: "12", x2: "3", y2: "12" })
    );
};

function objectWithoutProperties$2o (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var LogOut = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2o( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
      react.createElement( 'polyline', { points: "16 17 21 12 16 7" }),
      react.createElement( 'line', { x1: "21", y1: "12", x2: "9", y2: "12" })
    );
};

function objectWithoutProperties$2p (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Mail = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2p( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
      react.createElement( 'polyline', { points: "22,6 12,13 2,6" })
    );
};

function objectWithoutProperties$2q (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var MapPin = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2q( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
      react.createElement( 'circle', { cx: "12", cy: "10", r: "3" })
    );
};

function objectWithoutProperties$2r (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Map$1 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2r( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" }),
      react.createElement( 'line', { x1: "8", y1: "2", x2: "8", y2: "18" }),
      react.createElement( 'line', { x1: "16", y1: "6", x2: "16", y2: "22" })
    );
};

function objectWithoutProperties$2s (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Maximize2 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2s( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "15 3 21 3 21 9" }),
      react.createElement( 'polyline', { points: "9 21 3 21 3 15" }),
      react.createElement( 'line', { x1: "21", y1: "3", x2: "14", y2: "10" }),
      react.createElement( 'line', { x1: "3", y1: "21", x2: "10", y2: "14" })
    );
};

function objectWithoutProperties$2t (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Maximize = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2t( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" })
    );
};

function objectWithoutProperties$2u (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Meh = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2u( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'line', { x1: "8", y1: "15", x2: "16", y2: "15" }),
      react.createElement( 'line', { x1: "9", y1: "9", x2: "9.01", y2: "9" }),
      react.createElement( 'line', { x1: "15", y1: "9", x2: "15.01", y2: "9" })
    );
};

function objectWithoutProperties$2v (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Menu = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2v( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "3", y1: "12", x2: "21", y2: "12" }),
      react.createElement( 'line', { x1: "3", y1: "6", x2: "21", y2: "6" }),
      react.createElement( 'line', { x1: "3", y1: "18", x2: "21", y2: "18" })
    );
};

function objectWithoutProperties$2w (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var MessageCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2w( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
    );
};

function objectWithoutProperties$2x (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var MessageSquare = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2x( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
    );
};

function objectWithoutProperties$2y (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var MicOff = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2y( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "1", y1: "1", x2: "23", y2: "23" }),
      react.createElement( 'path', { d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" }),
      react.createElement( 'path', { d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" }),
      react.createElement( 'line', { x1: "12", y1: "19", x2: "12", y2: "23" }),
      react.createElement( 'line', { x1: "8", y1: "23", x2: "16", y2: "23" })
    );
};

function objectWithoutProperties$2z (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Mic = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2z( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }),
      react.createElement( 'path', { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
      react.createElement( 'line', { x1: "12", y1: "19", x2: "12", y2: "23" }),
      react.createElement( 'line', { x1: "8", y1: "23", x2: "16", y2: "23" })
    );
};

function objectWithoutProperties$2A (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Minimize2 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2A( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "4 14 10 14 10 20" }),
      react.createElement( 'polyline', { points: "20 10 14 10 14 4" }),
      react.createElement( 'line', { x1: "14", y1: "10", x2: "21", y2: "3" }),
      react.createElement( 'line', { x1: "3", y1: "21", x2: "10", y2: "14" })
    );
};

function objectWithoutProperties$2B (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Minimize = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2B( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" })
    );
};

function objectWithoutProperties$2C (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var MinusCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2C( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'line', { x1: "8", y1: "12", x2: "16", y2: "12" })
    );
};

function objectWithoutProperties$2D (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var MinusSquare = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2D( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "8", y1: "12", x2: "16", y2: "12" })
    );
};

function objectWithoutProperties$2E (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Minus = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2E( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "5", y1: "12", x2: "19", y2: "12" })
    );
};

function objectWithoutProperties$2F (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Monitor = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2F( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "8", y1: "21", x2: "16", y2: "21" }),
      react.createElement( 'line', { x1: "12", y1: "17", x2: "12", y2: "21" })
    );
};

function objectWithoutProperties$2G (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Moon = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2G( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
    );
};

function objectWithoutProperties$2H (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var MoreHorizontal = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2H( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "1" }),
      react.createElement( 'circle', { cx: "19", cy: "12", r: "1" }),
      react.createElement( 'circle', { cx: "5", cy: "12", r: "1" })
    );
};

function objectWithoutProperties$2I (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var MoreVertical = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2I( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "1" }),
      react.createElement( 'circle', { cx: "12", cy: "5", r: "1" }),
      react.createElement( 'circle', { cx: "12", cy: "19", r: "1" })
    );
};

function objectWithoutProperties$2J (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var MousePointer = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2J( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" }),
      react.createElement( 'path', { d: "M13 13l6 6" })
    );
};

function objectWithoutProperties$2K (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Move = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2K( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "5 9 2 12 5 15" }),
      react.createElement( 'polyline', { points: "9 5 12 2 15 5" }),
      react.createElement( 'polyline', { points: "15 19 12 22 9 19" }),
      react.createElement( 'polyline', { points: "19 9 22 12 19 15" }),
      react.createElement( 'line', { x1: "2", y1: "12", x2: "22", y2: "12" }),
      react.createElement( 'line', { x1: "12", y1: "2", x2: "12", y2: "22" })
    );
};

function objectWithoutProperties$2L (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Music = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2L( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M9 18V5l12-2v13" }),
      react.createElement( 'circle', { cx: "6", cy: "18", r: "3" }),
      react.createElement( 'circle', { cx: "18", cy: "16", r: "3" })
    );
};

function objectWithoutProperties$2M (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Navigation2 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2M( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "12 2 19 21 12 17 5 21 12 2" })
    );
};

function objectWithoutProperties$2N (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Navigation = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2N( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "3 11 22 2 13 21 11 13 3 11" })
    );
};

function objectWithoutProperties$2O (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Octagon = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2O( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" })
    );
};

function objectWithoutProperties$2P (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Package = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2P( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "16.5", y1: "9.4", x2: "7.5", y2: "4.21" }),
      react.createElement( 'path', { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
      react.createElement( 'polyline', { points: "3.27 6.96 12 12.01 20.73 6.96" }),
      react.createElement( 'line', { x1: "12", y1: "22.08", x2: "12", y2: "12" })
    );
};

function objectWithoutProperties$2Q (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Paperclip = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2Q( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" })
    );
};

function objectWithoutProperties$2R (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PauseCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2R( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'line', { x1: "10", y1: "15", x2: "10", y2: "9" }),
      react.createElement( 'line', { x1: "14", y1: "15", x2: "14", y2: "9" })
    );
};

function objectWithoutProperties$2S (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Pause = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2S( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "6", y: "4", width: "4", height: "16" }),
      react.createElement( 'rect', { x: "14", y: "4", width: "4", height: "16" })
    );
};

function objectWithoutProperties$2T (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PenTool = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2T( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M12 19l7-7 3 3-7 7-3-3z" }),
      react.createElement( 'path', { d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }),
      react.createElement( 'path', { d: "M2 2l7.586 7.586" }),
      react.createElement( 'circle', { cx: "11", cy: "11", r: "2" })
    );
};

function objectWithoutProperties$2U (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Percent = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2U( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "19", y1: "5", x2: "5", y2: "19" }),
      react.createElement( 'circle', { cx: "6.5", cy: "6.5", r: "2.5" }),
      react.createElement( 'circle', { cx: "17.5", cy: "17.5", r: "2.5" })
    );
};

function objectWithoutProperties$2V (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PhoneCall = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2V( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
    );
};

function objectWithoutProperties$2W (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PhoneForwarded = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2W( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "19 1 23 5 19 9" }),
      react.createElement( 'line', { x1: "15", y1: "5", x2: "23", y2: "5" }),
      react.createElement( 'path', { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
    );
};

function objectWithoutProperties$2X (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PhoneIncoming = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2X( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "16 2 16 8 22 8" }),
      react.createElement( 'line', { x1: "23", y1: "1", x2: "16", y2: "8" }),
      react.createElement( 'path', { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
    );
};

function objectWithoutProperties$2Y (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PhoneMissed = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2Y( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "23", y1: "1", x2: "17", y2: "7" }),
      react.createElement( 'line', { x1: "17", y1: "1", x2: "23", y2: "7" }),
      react.createElement( 'path', { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
    );
};

function objectWithoutProperties$2Z (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PhoneOff = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2Z( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" }),
      react.createElement( 'line', { x1: "23", y1: "1", x2: "1", y2: "23" })
    );
};

function objectWithoutProperties$2_ (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PhoneOutgoing = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$2_( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "23 7 23 1 17 1" }),
      react.createElement( 'line', { x1: "16", y1: "8", x2: "23", y2: "1" }),
      react.createElement( 'path', { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
    );
};

function objectWithoutProperties$30 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Phone = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$30( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
    );
};

function objectWithoutProperties$31 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PieChart = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$31( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }),
      react.createElement( 'path', { d: "M22 12A10 10 0 0 0 12 2v10z" })
    );
};

function objectWithoutProperties$32 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PlayCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$32( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'polygon', { points: "10 8 16 12 10 16 10 8" })
    );
};

function objectWithoutProperties$33 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Play = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$33( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "5 3 19 12 5 21 5 3" })
    );
};

function objectWithoutProperties$34 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PlusCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$34( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'line', { x1: "12", y1: "8", x2: "12", y2: "16" }),
      react.createElement( 'line', { x1: "8", y1: "12", x2: "16", y2: "12" })
    );
};

function objectWithoutProperties$35 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var PlusSquare = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$35( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "12", y1: "8", x2: "12", y2: "16" }),
      react.createElement( 'line', { x1: "8", y1: "12", x2: "16", y2: "12" })
    );
};

function objectWithoutProperties$36 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Plus = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$36( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "12", y1: "5", x2: "12", y2: "19" }),
      react.createElement( 'line', { x1: "5", y1: "12", x2: "19", y2: "12" })
    );
};

function objectWithoutProperties$37 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Pocket = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$37( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" }),
      react.createElement( 'polyline', { points: "8 10 12 14 16 10" })
    );
};

function objectWithoutProperties$38 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Power = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$38( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }),
      react.createElement( 'line', { x1: "12", y1: "2", x2: "12", y2: "12" })
    );
};

function objectWithoutProperties$39 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Printer = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$39( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "6 9 6 2 18 2 18 9" }),
      react.createElement( 'path', { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }),
      react.createElement( 'rect', { x: "6", y: "14", width: "12", height: "8" })
    );
};

function objectWithoutProperties$3a (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Radio = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3a( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "2" }),
      react.createElement( 'path', { d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" })
    );
};

function objectWithoutProperties$3b (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var RefreshCcw = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3b( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "1 4 1 10 7 10" }),
      react.createElement( 'polyline', { points: "23 20 23 14 17 14" }),
      react.createElement( 'path', { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
    );
};

function objectWithoutProperties$3c (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var RefreshCw = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3c( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "23 4 23 10 17 10" }),
      react.createElement( 'polyline', { points: "1 20 1 14 7 14" }),
      react.createElement( 'path', { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" })
    );
};

function objectWithoutProperties$3d (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Repeat = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3d( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "17 1 21 5 17 9" }),
      react.createElement( 'path', { d: "M3 11V9a4 4 0 0 1 4-4h14" }),
      react.createElement( 'polyline', { points: "7 23 3 19 7 15" }),
      react.createElement( 'path', { d: "M21 13v2a4 4 0 0 1-4 4H3" })
    );
};

function objectWithoutProperties$3e (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Rewind = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3e( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "11 19 2 12 11 5 11 19" }),
      react.createElement( 'polygon', { points: "22 19 13 12 22 5 22 19" })
    );
};

function objectWithoutProperties$3f (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var RotateCcw = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3f( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "1 4 1 10 7 10" }),
      react.createElement( 'path', { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
    );
};

function objectWithoutProperties$3g (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var RotateCw = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3g( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "23 4 23 10 17 10" }),
      react.createElement( 'path', { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" })
    );
};

function objectWithoutProperties$3h (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Rss = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3h( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M4 11a9 9 0 0 1 9 9" }),
      react.createElement( 'path', { d: "M4 4a16 16 0 0 1 16 16" }),
      react.createElement( 'circle', { cx: "5", cy: "19", r: "1" })
    );
};

function objectWithoutProperties$3i (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Save = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3i( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }),
      react.createElement( 'polyline', { points: "17 21 17 13 7 13 7 21" }),
      react.createElement( 'polyline', { points: "7 3 7 8 15 8" })
    );
};

function objectWithoutProperties$3j (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Scissors = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3j( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "6", cy: "6", r: "3" }),
      react.createElement( 'circle', { cx: "6", cy: "18", r: "3" }),
      react.createElement( 'line', { x1: "20", y1: "4", x2: "8.12", y2: "15.88" }),
      react.createElement( 'line', { x1: "14.47", y1: "14.48", x2: "20", y2: "20" }),
      react.createElement( 'line', { x1: "8.12", y1: "8.12", x2: "12", y2: "12" })
    );
};

function objectWithoutProperties$3k (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Search = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3k( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "11", cy: "11", r: "8" }),
      react.createElement( 'line', { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
    );
};

function objectWithoutProperties$3l (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Send = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3l( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "22", y1: "2", x2: "11", y2: "13" }),
      react.createElement( 'polygon', { points: "22 2 15 22 11 13 2 9 22 2" })
    );
};

function objectWithoutProperties$3m (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Server = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3m( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }),
      react.createElement( 'rect', { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
      react.createElement( 'line', { x1: "6", y1: "18", x2: "6.01", y2: "18" })
    );
};

function objectWithoutProperties$3n (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Settings = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3n( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "3" }),
      react.createElement( 'path', { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
    );
};

function objectWithoutProperties$3o (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Share2 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3o( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "18", cy: "5", r: "3" }),
      react.createElement( 'circle', { cx: "6", cy: "12", r: "3" }),
      react.createElement( 'circle', { cx: "18", cy: "19", r: "3" }),
      react.createElement( 'line', { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }),
      react.createElement( 'line', { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" })
    );
};

function objectWithoutProperties$3p (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Share = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3p( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
      react.createElement( 'polyline', { points: "16 6 12 2 8 6" }),
      react.createElement( 'line', { x1: "12", y1: "2", x2: "12", y2: "15" })
    );
};

function objectWithoutProperties$3q (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ShieldOff = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3q( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" }),
      react.createElement( 'path', { d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" }),
      react.createElement( 'line', { x1: "1", y1: "1", x2: "23", y2: "23" })
    );
};

function objectWithoutProperties$3r (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Shield = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3r( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
    );
};

function objectWithoutProperties$3s (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ShoppingBag = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3s( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }),
      react.createElement( 'line', { x1: "3", y1: "6", x2: "21", y2: "6" }),
      react.createElement( 'path', { d: "M16 10a4 4 0 0 1-8 0" })
    );
};

function objectWithoutProperties$3t (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ShoppingCart = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3t( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "9", cy: "21", r: "1" }),
      react.createElement( 'circle', { cx: "20", cy: "21", r: "1" }),
      react.createElement( 'path', { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
    );
};

function objectWithoutProperties$3u (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Shuffle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3u( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "16 3 21 3 21 8" }),
      react.createElement( 'line', { x1: "4", y1: "20", x2: "21", y2: "3" }),
      react.createElement( 'polyline', { points: "21 16 21 21 16 21" }),
      react.createElement( 'line', { x1: "15", y1: "15", x2: "21", y2: "21" }),
      react.createElement( 'line', { x1: "4", y1: "4", x2: "9", y2: "9" })
    );
};

function objectWithoutProperties$3v (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Sidebar = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3v( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "9", y1: "3", x2: "9", y2: "21" })
    );
};

function objectWithoutProperties$3w (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var SkipBack = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3w( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "19 20 9 12 19 4 19 20" }),
      react.createElement( 'line', { x1: "5", y1: "19", x2: "5", y2: "5" })
    );
};

function objectWithoutProperties$3x (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var SkipForward = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3x( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "5 4 15 12 5 20 5 4" }),
      react.createElement( 'line', { x1: "19", y1: "5", x2: "19", y2: "19" })
    );
};

function objectWithoutProperties$3y (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Slack = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3y( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" }),
      react.createElement( 'path', { d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" }),
      react.createElement( 'path', { d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" }),
      react.createElement( 'path', { d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" }),
      react.createElement( 'path', { d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" }),
      react.createElement( 'path', { d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" }),
      react.createElement( 'path', { d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" }),
      react.createElement( 'path', { d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" })
    );
};

function objectWithoutProperties$3z (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Slash = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3z( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'line', { x1: "4.93", y1: "4.93", x2: "19.07", y2: "19.07" })
    );
};

function objectWithoutProperties$3A (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Sliders = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3A( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "4", y1: "21", x2: "4", y2: "14" }),
      react.createElement( 'line', { x1: "4", y1: "10", x2: "4", y2: "3" }),
      react.createElement( 'line', { x1: "12", y1: "21", x2: "12", y2: "12" }),
      react.createElement( 'line', { x1: "12", y1: "8", x2: "12", y2: "3" }),
      react.createElement( 'line', { x1: "20", y1: "21", x2: "20", y2: "16" }),
      react.createElement( 'line', { x1: "20", y1: "12", x2: "20", y2: "3" }),
      react.createElement( 'line', { x1: "1", y1: "14", x2: "7", y2: "14" }),
      react.createElement( 'line', { x1: "9", y1: "8", x2: "15", y2: "8" }),
      react.createElement( 'line', { x1: "17", y1: "16", x2: "23", y2: "16" })
    );
};

function objectWithoutProperties$3B (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Smartphone = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3B( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "12", y1: "18", x2: "12.01", y2: "18" })
    );
};

function objectWithoutProperties$3C (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Smile = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3C( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'path', { d: "M8 14s1.5 2 4 2 4-2 4-2" }),
      react.createElement( 'line', { x1: "9", y1: "9", x2: "9.01", y2: "9" }),
      react.createElement( 'line', { x1: "15", y1: "9", x2: "15.01", y2: "9" })
    );
};

function objectWithoutProperties$3D (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Speaker = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3D( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "4", y: "2", width: "16", height: "20", rx: "2", ry: "2" }),
      react.createElement( 'circle', { cx: "12", cy: "14", r: "4" }),
      react.createElement( 'line', { x1: "12", y1: "6", x2: "12.01", y2: "6" })
    );
};

function objectWithoutProperties$3E (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Square = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3E( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" })
    );
};

function objectWithoutProperties$3F (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Star = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3F( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
    );
};

function objectWithoutProperties$3G (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var StopCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3G( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'rect', { x: "9", y: "9", width: "6", height: "6" })
    );
};

function objectWithoutProperties$3H (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Sun = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3H( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "5" }),
      react.createElement( 'line', { x1: "12", y1: "1", x2: "12", y2: "3" }),
      react.createElement( 'line', { x1: "12", y1: "21", x2: "12", y2: "23" }),
      react.createElement( 'line', { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
      react.createElement( 'line', { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
      react.createElement( 'line', { x1: "1", y1: "12", x2: "3", y2: "12" }),
      react.createElement( 'line', { x1: "21", y1: "12", x2: "23", y2: "12" }),
      react.createElement( 'line', { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
      react.createElement( 'line', { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
    );
};

function objectWithoutProperties$3I (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Sunrise = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3I( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M17 18a5 5 0 0 0-10 0" }),
      react.createElement( 'line', { x1: "12", y1: "2", x2: "12", y2: "9" }),
      react.createElement( 'line', { x1: "4.22", y1: "10.22", x2: "5.64", y2: "11.64" }),
      react.createElement( 'line', { x1: "1", y1: "18", x2: "3", y2: "18" }),
      react.createElement( 'line', { x1: "21", y1: "18", x2: "23", y2: "18" }),
      react.createElement( 'line', { x1: "18.36", y1: "11.64", x2: "19.78", y2: "10.22" }),
      react.createElement( 'line', { x1: "23", y1: "22", x2: "1", y2: "22" }),
      react.createElement( 'polyline', { points: "8 6 12 2 16 6" })
    );
};

function objectWithoutProperties$3J (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Sunset = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3J( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M17 18a5 5 0 0 0-10 0" }),
      react.createElement( 'line', { x1: "12", y1: "9", x2: "12", y2: "2" }),
      react.createElement( 'line', { x1: "4.22", y1: "10.22", x2: "5.64", y2: "11.64" }),
      react.createElement( 'line', { x1: "1", y1: "18", x2: "3", y2: "18" }),
      react.createElement( 'line', { x1: "21", y1: "18", x2: "23", y2: "18" }),
      react.createElement( 'line', { x1: "18.36", y1: "11.64", x2: "19.78", y2: "10.22" }),
      react.createElement( 'line', { x1: "23", y1: "22", x2: "1", y2: "22" }),
      react.createElement( 'polyline', { points: "16 5 12 9 8 5" })
    );
};

function objectWithoutProperties$3K (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Tablet = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3K( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "4", y: "2", width: "16", height: "20", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "12", y1: "18", x2: "12.01", y2: "18" })
    );
};

function objectWithoutProperties$3L (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Tag = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3L( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }),
      react.createElement( 'line', { x1: "7", y1: "7", x2: "7.01", y2: "7" })
    );
};

function objectWithoutProperties$3M (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Target = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3M( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "6" }),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "2" })
    );
};

function objectWithoutProperties$3N (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Terminal = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3N( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "4 17 10 11 4 5" }),
      react.createElement( 'line', { x1: "12", y1: "19", x2: "20", y2: "19" })
    );
};

function objectWithoutProperties$3O (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Thermometer = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3O( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" })
    );
};

function objectWithoutProperties$3P (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ThumbsDown = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3P( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" })
    );
};

function objectWithoutProperties$3Q (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ThumbsUp = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3Q( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" })
    );
};

function objectWithoutProperties$3R (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ToggleLeft = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3R( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "1", y: "5", width: "22", height: "14", rx: "7", ry: "7" }),
      react.createElement( 'circle', { cx: "8", cy: "12", r: "3" })
    );
};

function objectWithoutProperties$3S (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ToggleRight = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3S( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "1", y: "5", width: "22", height: "14", rx: "7", ry: "7" }),
      react.createElement( 'circle', { cx: "16", cy: "12", r: "3" })
    );
};

function objectWithoutProperties$3T (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Tool = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3T( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
    );
};

function objectWithoutProperties$3U (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Trash2 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3U( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "3 6 5 6 21 6" }),
      react.createElement( 'path', { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
      react.createElement( 'line', { x1: "10", y1: "11", x2: "10", y2: "17" }),
      react.createElement( 'line', { x1: "14", y1: "11", x2: "14", y2: "17" })
    );
};

function objectWithoutProperties$3V (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Trash = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3V( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "3 6 5 6 21 6" }),
      react.createElement( 'path', { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })
    );
};

function objectWithoutProperties$3W (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Trello = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3W( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
      react.createElement( 'rect', { x: "7", y: "7", width: "3", height: "9" }),
      react.createElement( 'rect', { x: "14", y: "7", width: "3", height: "5" })
    );
};

function objectWithoutProperties$3X (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var TrendingDown = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3X( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "23 18 13.5 8.5 8.5 13.5 1 6" }),
      react.createElement( 'polyline', { points: "17 18 23 18 23 12" })
    );
};

function objectWithoutProperties$3Y (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var TrendingUp = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3Y( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "23 6 13.5 15.5 8.5 10.5 1 18" }),
      react.createElement( 'polyline', { points: "17 6 23 6 23 12" })
    );
};

function objectWithoutProperties$3Z (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Triangle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3Z( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" })
    );
};

function objectWithoutProperties$3_ (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Truck = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$3_( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "1", y: "3", width: "15", height: "13" }),
      react.createElement( 'polygon', { points: "16 8 20 8 23 11 23 16 16 16 16 8" }),
      react.createElement( 'circle', { cx: "5.5", cy: "18.5", r: "2.5" }),
      react.createElement( 'circle', { cx: "18.5", cy: "18.5", r: "2.5" })
    );
};

function objectWithoutProperties$40 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Tv = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$40( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "2", y: "7", width: "20", height: "15", rx: "2", ry: "2" }),
      react.createElement( 'polyline', { points: "17 2 12 7 7 2" })
    );
};

function objectWithoutProperties$41 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Twitch = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$41( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" })
    );
};

function objectWithoutProperties$42 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Twitter = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$42( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" })
    );
};

function objectWithoutProperties$43 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Type = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$43( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "4 7 4 4 20 4 20 7" }),
      react.createElement( 'line', { x1: "9", y1: "20", x2: "15", y2: "20" }),
      react.createElement( 'line', { x1: "12", y1: "4", x2: "12", y2: "20" })
    );
};

function objectWithoutProperties$44 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Umbrella = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$44( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" })
    );
};

function objectWithoutProperties$45 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Underline = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$45( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
      react.createElement( 'line', { x1: "4", y1: "21", x2: "20", y2: "21" })
    );
};

function objectWithoutProperties$46 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Unlock = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$46( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
      react.createElement( 'path', { d: "M7 11V7a5 5 0 0 1 9.9-1" })
    );
};

function objectWithoutProperties$47 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var UploadCloud = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$47( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "16 16 12 12 8 16" }),
      react.createElement( 'line', { x1: "12", y1: "12", x2: "12", y2: "21" }),
      react.createElement( 'path', { d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" }),
      react.createElement( 'polyline', { points: "16 16 12 12 8 16" })
    );
};

function objectWithoutProperties$48 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Upload = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$48( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
      react.createElement( 'polyline', { points: "17 8 12 3 7 8" }),
      react.createElement( 'line', { x1: "12", y1: "3", x2: "12", y2: "15" })
    );
};

function objectWithoutProperties$49 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var UserCheck = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$49( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
      react.createElement( 'circle', { cx: "8.5", cy: "7", r: "4" }),
      react.createElement( 'polyline', { points: "17 11 19 13 23 9" })
    );
};

function objectWithoutProperties$4a (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var UserMinus = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4a( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
      react.createElement( 'circle', { cx: "8.5", cy: "7", r: "4" }),
      react.createElement( 'line', { x1: "23", y1: "11", x2: "17", y2: "11" })
    );
};

function objectWithoutProperties$4b (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var UserPlus = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4b( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
      react.createElement( 'circle', { cx: "8.5", cy: "7", r: "4" }),
      react.createElement( 'line', { x1: "20", y1: "8", x2: "20", y2: "14" }),
      react.createElement( 'line', { x1: "23", y1: "11", x2: "17", y2: "11" })
    );
};

function objectWithoutProperties$4c (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var UserX = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4c( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
      react.createElement( 'circle', { cx: "8.5", cy: "7", r: "4" }),
      react.createElement( 'line', { x1: "18", y1: "8", x2: "23", y2: "13" }),
      react.createElement( 'line', { x1: "23", y1: "8", x2: "18", y2: "13" })
    );
};

function objectWithoutProperties$4d (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var User = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4d( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
      react.createElement( 'circle', { cx: "12", cy: "7", r: "4" })
    );
};

function objectWithoutProperties$4e (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Users = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4e( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
      react.createElement( 'circle', { cx: "9", cy: "7", r: "4" }),
      react.createElement( 'path', { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
      react.createElement( 'path', { d: "M16 3.13a4 4 0 0 1 0 7.75" })
    );
};

function objectWithoutProperties$4f (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var VideoOff = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4f( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" }),
      react.createElement( 'line', { x1: "1", y1: "1", x2: "23", y2: "23" })
    );
};

function objectWithoutProperties$4g (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Video = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4g( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "23 7 16 12 23 17 23 7" }),
      react.createElement( 'rect', { x: "1", y: "5", width: "15", height: "14", rx: "2", ry: "2" })
    );
};

function objectWithoutProperties$4h (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Voicemail = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4h( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "5.5", cy: "11.5", r: "4.5" }),
      react.createElement( 'circle', { cx: "18.5", cy: "11.5", r: "4.5" }),
      react.createElement( 'line', { x1: "5.5", y1: "16", x2: "18.5", y2: "16" })
    );
};

function objectWithoutProperties$4i (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Volume1 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4i( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
      react.createElement( 'path', { d: "M15.54 8.46a5 5 0 0 1 0 7.07" })
    );
};

function objectWithoutProperties$4j (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Volume2 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4j( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
      react.createElement( 'path', { d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" })
    );
};

function objectWithoutProperties$4k (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var VolumeX = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4k( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
      react.createElement( 'line', { x1: "23", y1: "9", x2: "17", y2: "15" }),
      react.createElement( 'line', { x1: "17", y1: "9", x2: "23", y2: "15" })
    );
};

function objectWithoutProperties$4l (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Volume = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4l( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" })
    );
};

function objectWithoutProperties$4m (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Watch = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4m( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "7" }),
      react.createElement( 'polyline', { points: "12 9 12 12 13.5 13.5" }),
      react.createElement( 'path', { d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" })
    );
};

function objectWithoutProperties$4n (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var WifiOff = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4n( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "1", y1: "1", x2: "23", y2: "23" }),
      react.createElement( 'path', { d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55" }),
      react.createElement( 'path', { d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39" }),
      react.createElement( 'path', { d: "M10.71 5.05A16 16 0 0 1 22.58 9" }),
      react.createElement( 'path', { d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88" }),
      react.createElement( 'path', { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }),
      react.createElement( 'line', { x1: "12", y1: "20", x2: "12.01", y2: "20" })
    );
};

function objectWithoutProperties$4o (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Wifi = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4o( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M5 12.55a11 11 0 0 1 14.08 0" }),
      react.createElement( 'path', { d: "M1.42 9a16 16 0 0 1 21.16 0" }),
      react.createElement( 'path', { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }),
      react.createElement( 'line', { x1: "12", y1: "20", x2: "12.01", y2: "20" })
    );
};

function objectWithoutProperties$4p (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Wind = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4p( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" })
    );
};

function objectWithoutProperties$4q (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var XCircle = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4q( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "12", cy: "12", r: "10" }),
      react.createElement( 'line', { x1: "15", y1: "9", x2: "9", y2: "15" }),
      react.createElement( 'line', { x1: "9", y1: "9", x2: "15", y2: "15" })
    );
};

function objectWithoutProperties$4r (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var XOctagon = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4r( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }),
      react.createElement( 'line', { x1: "15", y1: "9", x2: "9", y2: "15" }),
      react.createElement( 'line', { x1: "9", y1: "9", x2: "15", y2: "15" })
    );
};

function objectWithoutProperties$4s (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var XSquare = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4s( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
      react.createElement( 'line', { x1: "9", y1: "9", x2: "15", y2: "15" }),
      react.createElement( 'line', { x1: "15", y1: "9", x2: "9", y2: "15" })
    );
};

function objectWithoutProperties$4t (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var X$1 = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4t( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'line', { x1: "18", y1: "6", x2: "6", y2: "18" }),
      react.createElement( 'line', { x1: "6", y1: "6", x2: "18", y2: "18" })
    );
};

function objectWithoutProperties$4u (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Youtube = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4u( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'path', { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }),
      react.createElement( 'polygon', { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" })
    );
};

function objectWithoutProperties$4v (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ZapOff = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4v( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polyline', { points: "12.41 6.75 13 2 10.57 4.92" }),
      react.createElement( 'polyline', { points: "18.57 12.91 21 10 15.66 10" }),
      react.createElement( 'polyline', { points: "8 8 3 14 12 14 11 22 16 16" }),
      react.createElement( 'line', { x1: "1", y1: "1", x2: "23", y2: "23" })
    );
};

function objectWithoutProperties$4w (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var Zap = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4w( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'polygon', { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
    );
};

function objectWithoutProperties$4x (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ZoomIn = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4x( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "11", cy: "11", r: "8" }),
      react.createElement( 'line', { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      react.createElement( 'line', { x1: "11", y1: "8", x2: "11", y2: "14" }),
      react.createElement( 'line', { x1: "8", y1: "11", x2: "14", y2: "11" })
    );
};

function objectWithoutProperties$4y (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var ZoomOut = function (ref) {
  var color = ref.color; if ( color === void 0 ) color = 'currentColor';
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$4y( ref, ["color", "size"] );
  var otherProps = rest;

  return react.createElement( SVG, Object.assign({}, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, otherProps),
      react.createElement( 'circle', { cx: "11", cy: "11", r: "8" }),
      react.createElement( 'line', { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      react.createElement( 'line', { x1: "8", y1: "11", x2: "14", y2: "11" })
    );
};

export { Activity, Airplay, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight, Anchor, Aperture, Archive, ArrowDownCircle, ArrowDownLeft, ArrowDownRight, ArrowDown, ArrowLeftCircle, ArrowLeft, ArrowRightCircle, ArrowRight, ArrowUpCircle, ArrowUpLeft, ArrowUpRight, ArrowUp, AtSign, Award, BarChart2, BarChart, BatteryCharging, Battery, BellOff, Bell, Bluetooth, Bold, BookOpen, Book, Bookmark, Box$1 as Box, Briefcase, Calendar, CameraOff, Camera, Cast, CheckCircle, CheckSquare, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Chrome, Circle, Clipboard, Clock, CloudDrizzle, CloudLightning, CloudOff, CloudRain, CloudSnow, Cloud, Code, Codepen, Codesandbox, Coffee, Columns, Command, Compass, Copy, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreditCard, Crop, Crosshair, Database, Delete, Disc, DivideCircle, DivideSquare, Divide, DollarSign, DownloadCloud, Download, Dribbble, Droplet, Edit2, Edit3, Edit, ExternalLink, EyeOff, Eye, Facebook, FastForward, Feather, Figma, FileMinus, FilePlus, FileText, File, Film, Filter, Flag, FolderMinus, FolderPlus, Folder, Framer, Frown, Gift, GitBranch, GitCommit, GitMerge, GitPullRequest, GitHub, Gitlab, Globe, Grid, HardDrive, Hash, Headphones, Heart, HelpCircle, Hexagon, Home, Image, Inbox, Info, Instagram, Italic, Key, Layers, Layout, LifeBuoy, Link2, Link, Linkedin, List, Loader, Lock, LogIn, LogOut, Mail, MapPin, Map$1 as Map, Maximize2, Maximize, Meh, Menu, MessageCircle, MessageSquare, MicOff, Mic, Minimize2, Minimize, MinusCircle, MinusSquare, Minus, Monitor, Moon, MoreHorizontal, MoreVertical, MousePointer, Move, Music, Navigation2, Navigation, Octagon, Package, Paperclip, PauseCircle, Pause, PenTool, Percent, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, Phone, PieChart, PlayCircle, Play, PlusCircle, PlusSquare, Plus, Pocket, Power, Printer, Radio, RefreshCcw, RefreshCw, Repeat, Rewind, RotateCcw, RotateCw, Rss, Save, Scissors, Search, Send, Server, Settings, Share2, Share, ShieldOff, Shield, ShoppingBag, ShoppingCart, Shuffle, Sidebar, SkipBack, SkipForward, Slack, Slash, Sliders, Smartphone, Smile, Speaker, Square, Star, StopCircle, Sun, Sunrise, Sunset, Tablet, Tag, Target, Terminal, Thermometer, ThumbsDown, ThumbsUp, ToggleLeft, ToggleRight, Tool, Trash2, Trash, Trello, TrendingDown, TrendingUp, Triangle, Truck, Tv, Twitch, Twitter, Type, Umbrella, Underline, Unlock, UploadCloud, Upload, UserCheck, UserMinus, UserPlus, UserX, User, Users, VideoOff, Video, Voicemail, Volume1, Volume2, VolumeX, Volume, Watch, WifiOff, Wifi, Wind, XCircle, XOctagon, XSquare, X$1 as X, Youtube, ZapOff, Zap, ZoomIn, ZoomOut };
//# sourceMappingURL=index.js.map
