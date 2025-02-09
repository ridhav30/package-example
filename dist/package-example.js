var Le = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function dt() {
  if (ut) return Pe;
  ut = 1;
  var k = Symbol.for("react.transitional.element"), E = Symbol.for("react.fragment");
  function F(ee, P, N) {
    var U = null;
    if (N !== void 0 && (U = "" + N), P.key !== void 0 && (U = "" + P.key), "key" in P) {
      N = {};
      for (var q in P)
        q !== "key" && (N[q] = P[q]);
    } else N = P;
    return P = N.ref, {
      $$typeof: k,
      type: ee,
      key: U,
      ref: P !== void 0 ? P : null,
      props: N
    };
  }
  return Pe.Fragment = E, Pe.jsx = F, Pe.jsxs = F, Pe;
}
var Me = {}, qe = { exports: {} }, y = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function vt() {
  if (st) return y;
  st = 1;
  var k = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), U = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Q = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), Ee = Symbol.iterator;
  function Oe(n) {
    return n === null || typeof n != "object" ? null : (n = Ee && n[Ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Ae = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, me = Object.assign, X = {};
  function H(n, u, p) {
    this.props = n, this.context = u, this.refs = X, this.updater = p || Ae;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(n, u) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, n, u, "setState");
  }, H.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function te() {
  }
  te.prototype = H.prototype;
  function D(n, u, p) {
    this.props = n, this.context = u, this.refs = X, this.updater = p || Ae;
  }
  var se = D.prototype = new te();
  se.constructor = D, me(se, H.prototype), se.isPureReactComponent = !0;
  var ae = Array.isArray, O = { H: null, A: null, T: null, S: null }, V = Object.prototype.hasOwnProperty;
  function ie(n, u, p, d, h, R) {
    return p = R.ref, {
      $$typeof: k,
      type: n,
      key: u,
      ref: p !== void 0 ? p : null,
      props: R
    };
  }
  function he(n, u) {
    return ie(
      n.type,
      u,
      void 0,
      void 0,
      void 0,
      n.props
    );
  }
  function $(n) {
    return typeof n == "object" && n !== null && n.$$typeof === k;
  }
  function ge(n) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(p) {
      return u[p];
    });
  }
  var fe = /\/+/g;
  function re(n, u) {
    return typeof n == "object" && n !== null && n.key != null ? ge("" + n.key) : u.toString(36);
  }
  function J() {
  }
  function ce(n) {
    switch (n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw n.reason;
      default:
        switch (typeof n.status == "string" ? n.then(J, J) : (n.status = "pending", n.then(
          function(u) {
            n.status === "pending" && (n.status = "fulfilled", n.value = u);
          },
          function(u) {
            n.status === "pending" && (n.status = "rejected", n.reason = u);
          }
        )), n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw n.reason;
        }
    }
    throw n;
  }
  function I(n, u, p, d, h) {
    var R = typeof n;
    (R === "undefined" || R === "boolean") && (n = null);
    var m = !1;
    if (n === null) m = !0;
    else
      switch (R) {
        case "bigint":
        case "string":
        case "number":
          m = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case k:
            case E:
              m = !0;
              break;
            case z:
              return m = n._init, I(
                m(n._payload),
                u,
                p,
                d,
                h
              );
          }
      }
    if (m)
      return h = h(n), m = d === "" ? "." + re(n, 0) : d, ae(h) ? (p = "", m != null && (p = m.replace(fe, "$&/") + "/"), I(h, u, p, "", function(le) {
        return le;
      })) : h != null && ($(h) && (h = he(
        h,
        p + (h.key == null || n && n.key === h.key ? "" : ("" + h.key).replace(
          fe,
          "$&/"
        ) + "/") + m
      )), u.push(h)), 1;
    m = 0;
    var x = d === "" ? "." : d + ":";
    if (ae(n))
      for (var A = 0; A < n.length; A++)
        d = n[A], R = x + re(d, A), m += I(
          d,
          u,
          p,
          R,
          h
        );
    else if (A = Oe(n), typeof A == "function")
      for (n = A.call(n), A = 0; !(d = n.next()).done; )
        d = d.value, R = x + re(d, A++), m += I(
          d,
          u,
          p,
          R,
          h
        );
    else if (R === "object") {
      if (typeof n.then == "function")
        return I(
          ce(n),
          u,
          p,
          d,
          h
        );
      throw u = String(n), Error(
        "Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return m;
  }
  function W(n, u, p) {
    if (n == null) return n;
    var d = [], h = 0;
    return I(n, d, "", "", function(R) {
      return u.call(p, R, h++);
    }), d;
  }
  function ne(n) {
    if (n._status === -1) {
      var u = n._result;
      u = u(), u.then(
        function(p) {
          (n._status === 0 || n._status === -1) && (n._status = 1, n._result = p);
        },
        function(p) {
          (n._status === 0 || n._status === -1) && (n._status = 2, n._result = p);
        }
      ), n._status === -1 && (n._status = 0, n._result = u);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var Se = typeof reportError == "function" ? reportError : function(n) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var u = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof n == "object" && n !== null && typeof n.message == "string" ? String(n.message) : String(n),
        error: n
      });
      if (!window.dispatchEvent(u)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", n);
      return;
    }
    console.error(n);
  };
  function b() {
  }
  return y.Children = {
    map: W,
    forEach: function(n, u, p) {
      W(
        n,
        function() {
          u.apply(this, arguments);
        },
        p
      );
    },
    count: function(n) {
      var u = 0;
      return W(n, function() {
        u++;
      }), u;
    },
    toArray: function(n) {
      return W(n, function(u) {
        return u;
      }) || [];
    },
    only: function(n) {
      if (!$(n))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return n;
    }
  }, y.Component = H, y.Fragment = F, y.Profiler = P, y.PureComponent = D, y.StrictMode = ee, y.Suspense = ue, y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O, y.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, y.cache = function(n) {
    return function() {
      return n.apply(null, arguments);
    };
  }, y.cloneElement = function(n, u, p) {
    if (n == null)
      throw Error(
        "The argument must be a React element, but you passed " + n + "."
      );
    var d = me({}, n.props), h = n.key, R = void 0;
    if (u != null)
      for (m in u.ref !== void 0 && (R = void 0), u.key !== void 0 && (h = "" + u.key), u)
        !V.call(u, m) || m === "key" || m === "__self" || m === "__source" || m === "ref" && u.ref === void 0 || (d[m] = u[m]);
    var m = arguments.length - 2;
    if (m === 1) d.children = p;
    else if (1 < m) {
      for (var x = Array(m), A = 0; A < m; A++)
        x[A] = arguments[A + 2];
      d.children = x;
    }
    return ie(n.type, h, void 0, void 0, R, d);
  }, y.createContext = function(n) {
    return n = {
      $$typeof: U,
      _currentValue: n,
      _currentValue2: n,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, n.Provider = n, n.Consumer = {
      $$typeof: N,
      _context: n
    }, n;
  }, y.createElement = function(n, u, p) {
    var d, h = {}, R = null;
    if (u != null)
      for (d in u.key !== void 0 && (R = "" + u.key), u)
        V.call(u, d) && d !== "key" && d !== "__self" && d !== "__source" && (h[d] = u[d]);
    var m = arguments.length - 2;
    if (m === 1) h.children = p;
    else if (1 < m) {
      for (var x = Array(m), A = 0; A < m; A++)
        x[A] = arguments[A + 2];
      h.children = x;
    }
    if (n && n.defaultProps)
      for (d in m = n.defaultProps, m)
        h[d] === void 0 && (h[d] = m[d]);
    return ie(n, R, void 0, void 0, null, h);
  }, y.createRef = function() {
    return { current: null };
  }, y.forwardRef = function(n) {
    return { $$typeof: q, render: n };
  }, y.isValidElement = $, y.lazy = function(n) {
    return {
      $$typeof: z,
      _payload: { _status: -1, _result: n },
      _init: ne
    };
  }, y.memo = function(n, u) {
    return {
      $$typeof: Q,
      type: n,
      compare: u === void 0 ? null : u
    };
  }, y.startTransition = function(n) {
    var u = O.T, p = {};
    O.T = p;
    try {
      var d = n(), h = O.S;
      h !== null && h(p, d), typeof d == "object" && d !== null && typeof d.then == "function" && d.then(b, Se);
    } catch (R) {
      Se(R);
    } finally {
      O.T = u;
    }
  }, y.unstable_useCacheRefresh = function() {
    return O.H.useCacheRefresh();
  }, y.use = function(n) {
    return O.H.use(n);
  }, y.useActionState = function(n, u, p) {
    return O.H.useActionState(n, u, p);
  }, y.useCallback = function(n, u) {
    return O.H.useCallback(n, u);
  }, y.useContext = function(n) {
    return O.H.useContext(n);
  }, y.useDebugValue = function() {
  }, y.useDeferredValue = function(n, u) {
    return O.H.useDeferredValue(n, u);
  }, y.useEffect = function(n, u) {
    return O.H.useEffect(n, u);
  }, y.useId = function() {
    return O.H.useId();
  }, y.useImperativeHandle = function(n, u, p) {
    return O.H.useImperativeHandle(n, u, p);
  }, y.useInsertionEffect = function(n, u) {
    return O.H.useInsertionEffect(n, u);
  }, y.useLayoutEffect = function(n, u) {
    return O.H.useLayoutEffect(n, u);
  }, y.useMemo = function(n, u) {
    return O.H.useMemo(n, u);
  }, y.useOptimistic = function(n, u) {
    return O.H.useOptimistic(n, u);
  }, y.useReducer = function(n, u, p) {
    return O.H.useReducer(n, u, p);
  }, y.useRef = function(n) {
    return O.H.useRef(n);
  }, y.useState = function(n) {
    return O.H.useState(n);
  }, y.useSyncExternalStore = function(n, u, p) {
    return O.H.useSyncExternalStore(
      n,
      u,
      p
    );
  }, y.useTransition = function() {
    return O.H.useTransition();
  }, y.version = "19.0.0", y;
}
var $e = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
$e.exports;
var at;
function pt() {
  return at || (at = 1, function(k, E) {
    process.env.NODE_ENV !== "production" && function() {
      function F(e, r) {
        Object.defineProperty(N.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function ee(e) {
        return e === null || typeof e != "object" ? null : (e = ke && e[ke] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function P(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var o = e + "." + r;
        Ne[o] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), Ne[o] = !0);
      }
      function N(e, r, o) {
        this.props = e, this.context = r, this.refs = i, this.updater = o || t;
      }
      function U() {
      }
      function q(e, r, o) {
        this.props = e, this.context = r, this.refs = i, this.updater = o || t;
      }
      function ue(e) {
        return "" + e;
      }
      function Q(e) {
        try {
          ue(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var o = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            s
          ), ue(e);
        }
      }
      function z(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === g ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case A:
            return "Fragment";
          case x:
            return "Portal";
          case je:
            return "Profiler";
          case le:
            return "StrictMode";
          case de:
            return "Suspense";
          case be:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case _e:
              return (e.displayName || "Context") + ".Provider";
            case ye:
              return (e._context.displayName || "Context") + ".Consumer";
            case we:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Te:
              return r = e.displayName || null, r !== null ? r : z(e.type) || "Memo";
            case ve:
              r = e._payload, e = e._init;
              try {
                return z(e(r));
              } catch {
              }
          }
        return null;
      }
      function Ee(e) {
        return typeof e == "string" || typeof e == "function" || e === A || e === je || e === le || e === de || e === be || e === xe || typeof e == "object" && e !== null && (e.$$typeof === ve || e.$$typeof === Te || e.$$typeof === _e || e.$$typeof === ye || e.$$typeof === we || e.$$typeof === M || e.getModuleId !== void 0);
      }
      function Oe() {
      }
      function Ae() {
        if (L === 0) {
          pe = console.log, K = console.info, Re = console.warn, G = console.error, Ke = console.group, Qe = console.groupCollapsed, Xe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        L++;
      }
      function me() {
        if (L--, L === 0) {
          var e = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: a({}, e, { value: pe }),
            info: a({}, e, { value: K }),
            warn: a({}, e, { value: Re }),
            error: a({}, e, { value: G }),
            group: a({}, e, { value: Ke }),
            groupCollapsed: a({}, e, { value: Qe }),
            groupEnd: a({}, e, { value: Xe })
          });
        }
        0 > L && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function X(e) {
        if (ze === void 0)
          try {
            throw Error();
          } catch (o) {
            var r = o.stack.trim().match(/\n( *(at )?)/);
            ze = r && r[1] || "", De = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + ze + e + De;
      }
      function H(e, r) {
        if (!e || Ie) return "";
        var o = Ge.get(e);
        if (o !== void 0) return o;
        Ie = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
        var s = null;
        s = v.H, v.H = null, Ae();
        try {
          var f = {
            DetermineComponentFrameRoot: function() {
              try {
                if (r) {
                  var Z = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Z.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Z, []);
                    } catch (oe) {
                      var We = oe;
                    }
                    Reflect.construct(e, [], Z);
                  } else {
                    try {
                      Z.call();
                    } catch (oe) {
                      We = oe;
                    }
                    e.call(Z.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (oe) {
                    We = oe;
                  }
                  (Z = e()) && typeof Z.catch == "function" && Z.catch(function() {
                  });
                }
              } catch (oe) {
                if (oe && We && typeof oe.stack == "string")
                  return [oe.stack, We.stack];
              }
              return [null, null];
            }
          };
          f.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var l = Object.getOwnPropertyDescriptor(
            f.DetermineComponentFrameRoot,
            "name"
          );
          l && l.configurable && Object.defineProperty(
            f.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var c = f.DetermineComponentFrameRoot(), T = c[0], w = c[1];
          if (T && w) {
            var S = T.split(`
`), Y = w.split(`
`);
            for (c = l = 0; l < S.length && !S[l].includes(
              "DetermineComponentFrameRoot"
            ); )
              l++;
            for (; c < Y.length && !Y[c].includes(
              "DetermineComponentFrameRoot"
            ); )
              c++;
            if (l === S.length || c === Y.length)
              for (l = S.length - 1, c = Y.length - 1; 1 <= l && 0 <= c && S[l] !== Y[c]; )
                c--;
            for (; 1 <= l && 0 <= c; l--, c--)
              if (S[l] !== Y[c]) {
                if (l !== 1 || c !== 1)
                  do
                    if (l--, c--, 0 > c || S[l] !== Y[c]) {
                      var Ce = `
` + S[l].replace(
                        " at new ",
                        " at "
                      );
                      return e.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", e.displayName)), typeof e == "function" && Ge.set(e, Ce), Ce;
                    }
                  while (1 <= l && 0 <= c);
                break;
              }
          }
        } finally {
          Ie = !1, v.H = s, me(), Error.prepareStackTrace = o;
        }
        return S = (S = e ? e.displayName || e.name : "") ? X(S) : "", typeof e == "function" && Ge.set(e, S), S;
      }
      function te(e) {
        if (e == null) return "";
        if (typeof e == "function") {
          var r = e.prototype;
          return H(
            e,
            !(!r || !r.isReactComponent)
          );
        }
        if (typeof e == "string") return X(e);
        switch (e) {
          case de:
            return X("Suspense");
          case be:
            return X("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case we:
              return e = H(e.render, !1), e;
            case Te:
              return te(e.type);
            case ve:
              r = e._payload, e = e._init;
              try {
                return te(e(r));
              } catch {
              }
          }
        return "";
      }
      function D() {
        var e = v.A;
        return e === null ? null : e.getOwner();
      }
      function se(e) {
        if (B.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function ae(e, r) {
        function o() {
          Ve || (Ve = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function O() {
        var e = z(this.type);
        return Ze[e] || (Ze[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function V(e, r, o, s, f, l) {
        return o = l.ref, e = {
          $$typeof: m,
          type: e,
          key: r,
          props: l,
          _owner: f
        }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: O
        }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(e, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function ie(e, r) {
        return r = V(
          e.type,
          r,
          void 0,
          void 0,
          e._owner,
          e.props
        ), r._store.validated = e._store.validated, r;
      }
      function he(e, r) {
        if (typeof e == "object" && e && e.$$typeof !== lt) {
          if (C(e))
            for (var o = 0; o < e.length; o++) {
              var s = e[o];
              $(s) && ge(s, r);
            }
          else if ($(e))
            e._store && (e._store.validated = 1);
          else if (o = ee(e), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
            for (; !(e = o.next()).done; )
              $(e.value) && ge(e.value, r);
        }
      }
      function $(e) {
        return typeof e == "object" && e !== null && e.$$typeof === m;
      }
      function ge(e, r) {
        if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = fe(r), !Fe[r])) {
          Fe[r] = !0;
          var o = "";
          e && e._owner != null && e._owner !== D() && (o = null, typeof e._owner.tag == "number" ? o = z(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
          var s = v.getCurrentStack;
          v.getCurrentStack = function() {
            var f = te(e.type);
            return s && (f += s() || ""), f;
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            r,
            o
          ), v.getCurrentStack = s;
        }
      }
      function fe(e) {
        var r = "", o = D();
        return o && (o = z(o.type)) && (r = `

Check the render method of \`` + o + "`."), r || (e = z(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
      }
      function re(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(o) {
          return r[o];
        });
      }
      function J(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Q(e.key), re("" + e.key)) : r.toString(36);
      }
      function ce() {
      }
      function I(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(ce, ce) : (e.status = "pending", e.then(
              function(r) {
                e.status === "pending" && (e.status = "fulfilled", e.value = r);
              },
              function(r) {
                e.status === "pending" && (e.status = "rejected", e.reason = r);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function W(e, r, o, s, f) {
        var l = typeof e;
        (l === "undefined" || l === "boolean") && (e = null);
        var c = !1;
        if (e === null) c = !0;
        else
          switch (l) {
            case "bigint":
            case "string":
            case "number":
              c = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case m:
                case x:
                  c = !0;
                  break;
                case ve:
                  return c = e._init, W(
                    c(e._payload),
                    r,
                    o,
                    s,
                    f
                  );
              }
          }
        if (c) {
          c = e, f = f(c);
          var T = s === "" ? "." + J(c, 0) : s;
          return C(f) ? (o = "", T != null && (o = T.replace(tt, "$&/") + "/"), W(f, r, o, "", function(S) {
            return S;
          })) : f != null && ($(f) && (f.key != null && (c && c.key === f.key || Q(f.key)), o = ie(
            f,
            o + (f.key == null || c && c.key === f.key ? "" : ("" + f.key).replace(
              tt,
              "$&/"
            ) + "/") + T
          ), s !== "" && c != null && $(c) && c.key == null && c._store && !c._store.validated && (o._store.validated = 2), f = o), r.push(f)), 1;
        }
        if (c = 0, T = s === "" ? "." : s + ":", C(e))
          for (var w = 0; w < e.length; w++)
            s = e[w], l = T + J(s, w), c += W(
              s,
              r,
              o,
              l,
              f
            );
        else if (w = ee(e), typeof w == "function")
          for (w === e.entries && (et || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), et = !0), e = w.call(e), w = 0; !(s = e.next()).done; )
            s = s.value, l = T + J(s, w++), c += W(
              s,
              r,
              o,
              l,
              f
            );
        else if (l === "object") {
          if (typeof e.then == "function")
            return W(
              I(e),
              r,
              o,
              s,
              f
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return c;
      }
      function ne(e, r, o) {
        if (e == null) return e;
        var s = [], f = 0;
        return W(e, s, "", "", function(l) {
          return r.call(o, l, f++);
        }), s;
      }
      function Se(e) {
        if (e._status === -1) {
          var r = e._result;
          r = r(), r.then(
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = o);
            },
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = o);
            }
          ), e._status === -1 && (e._status = 0, e._result = r);
        }
        if (e._status === 1)
          return r = e._result, r === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            r
          ), "default" in r || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            r
          ), r.default;
        throw e._result;
      }
      function b() {
        var e = v.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function n() {
      }
      function u(e) {
        if (Ye === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            Ye = (k && k[r]).call(
              k,
              "timers"
            ).setImmediate;
          } catch {
            Ye = function(s) {
              nt === !1 && (nt = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var f = new MessageChannel();
              f.port1.onmessage = s, f.port2.postMessage(void 0);
            };
          }
        return Ye(e);
      }
      function p(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function d(e, r) {
        r !== Ue - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Ue = r;
      }
      function h(e, r, o) {
        var s = v.actQueue;
        if (s !== null)
          if (s.length !== 0)
            try {
              R(s), u(function() {
                return h(e, r, o);
              });
              return;
            } catch (f) {
              v.thrownErrors.push(f);
            }
          else v.actQueue = null;
        0 < v.thrownErrors.length ? (s = p(v.thrownErrors), v.thrownErrors.length = 0, o(s)) : r(e);
      }
      function R(e) {
        if (!Be) {
          Be = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do {
                v.didUsePromise = !1;
                var s = o(!1);
                if (s !== null) {
                  if (v.didUsePromise) {
                    e[r] = o, e.splice(0, r);
                    return;
                  }
                  o = s;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (f) {
            e.splice(0, r + 1), v.thrownErrors.push(f);
          } finally {
            Be = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var m = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), le = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), ye = Symbol.for("react.consumer"), _e = Symbol.for("react.context"), we = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), Te = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), ke = Symbol.iterator, Ne = {}, t = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          P(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          P(e, "replaceState");
        },
        enqueueSetState: function(e) {
          P(e, "setState");
        }
      }, a = Object.assign, i = {};
      Object.freeze(i), N.prototype.isReactComponent = {}, N.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, N.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var _ = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, j;
      for (j in _)
        _.hasOwnProperty(j) && F(j, _[j]);
      U.prototype = N.prototype, _ = q.prototype = new U(), _.constructor = q, a(_, N.prototype), _.isPureReactComponent = !0;
      var C = Array.isArray, g = Symbol.for("react.client.reference"), v = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null
      }, B = Object.prototype.hasOwnProperty, M = Symbol.for("react.client.reference"), L = 0, pe, K, Re, G, Ke, Qe, Xe;
      Oe.__reactDisabledLog = !0;
      var ze, De, Ie = !1, Ge = new (typeof WeakMap == "function" ? WeakMap : Map)(), lt = Symbol.for("react.client.reference"), Ve, Je, Ze = {}, Fe = {}, et = !1, tt = /\/+/g, rt = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(r)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, nt = !1, Ye = null, Ue = 0, He = !1, Be = !1, ot = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : u;
      E.Children = {
        map: ne,
        forEach: function(e, r, o) {
          ne(
            e,
            function() {
              r.apply(this, arguments);
            },
            o
          );
        },
        count: function(e) {
          var r = 0;
          return ne(e, function() {
            r++;
          }), r;
        },
        toArray: function(e) {
          return ne(e, function(r) {
            return r;
          }) || [];
        },
        only: function(e) {
          if (!$(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, E.Component = N, E.Fragment = A, E.Profiler = je, E.PureComponent = q, E.StrictMode = le, E.Suspense = de, E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, E.act = function(e) {
        var r = v.actQueue, o = Ue;
        Ue++;
        var s = v.actQueue = r !== null ? r : [], f = !1;
        try {
          var l = e();
        } catch (w) {
          v.thrownErrors.push(w);
        }
        if (0 < v.thrownErrors.length)
          throw d(r, o), e = p(v.thrownErrors), v.thrownErrors.length = 0, e;
        if (l !== null && typeof l == "object" && typeof l.then == "function") {
          var c = l;
          return ot(function() {
            f || He || (He = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(w, S) {
              f = !0, c.then(
                function(Y) {
                  if (d(r, o), o === 0) {
                    try {
                      R(s), u(function() {
                        return h(
                          Y,
                          w,
                          S
                        );
                      });
                    } catch (Z) {
                      v.thrownErrors.push(Z);
                    }
                    if (0 < v.thrownErrors.length) {
                      var Ce = p(
                        v.thrownErrors
                      );
                      v.thrownErrors.length = 0, S(Ce);
                    }
                  } else w(Y);
                },
                function(Y) {
                  d(r, o), 0 < v.thrownErrors.length && (Y = p(
                    v.thrownErrors
                  ), v.thrownErrors.length = 0), S(Y);
                }
              );
            }
          };
        }
        var T = l;
        if (d(r, o), o === 0 && (R(s), s.length !== 0 && ot(function() {
          f || He || (He = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), v.actQueue = null), 0 < v.thrownErrors.length)
          throw e = p(v.thrownErrors), v.thrownErrors.length = 0, e;
        return {
          then: function(w, S) {
            f = !0, o === 0 ? (v.actQueue = s, u(function() {
              return h(
                T,
                w,
                S
              );
            })) : w(T);
          }
        };
      }, E.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, E.cloneElement = function(e, r, o) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var s = a({}, e.props), f = e.key, l = e._owner;
        if (r != null) {
          var c;
          e: {
            if (B.call(r, "ref") && (c = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && c.isReactWarning) {
              c = !1;
              break e;
            }
            c = r.ref !== void 0;
          }
          c && (l = D()), se(r) && (Q(r.key), f = "" + r.key);
          for (T in r)
            !B.call(r, T) || T === "key" || T === "__self" || T === "__source" || T === "ref" && r.ref === void 0 || (s[T] = r[T]);
        }
        var T = arguments.length - 2;
        if (T === 1) s.children = o;
        else if (1 < T) {
          c = Array(T);
          for (var w = 0; w < T; w++)
            c[w] = arguments[w + 2];
          s.children = c;
        }
        for (s = V(e.type, f, void 0, void 0, l, s), f = 2; f < arguments.length; f++)
          he(arguments[f], s.type);
        return s;
      }, E.createContext = function(e) {
        return e = {
          $$typeof: _e,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: ye,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, E.createElement = function(e, r, o) {
        if (Ee(e))
          for (var s = 2; s < arguments.length; s++)
            he(arguments[s], e);
        else {
          if (s = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null) var f = "null";
          else
            C(e) ? f = "array" : e !== void 0 && e.$$typeof === m ? (f = "<" + (z(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e;
          console.error(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            f,
            s
          );
        }
        var l;
        if (s = {}, f = null, r != null)
          for (l in Je || !("__self" in r) || "key" in r || (Je = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), se(r) && (Q(r.key), f = "" + r.key), r)
            B.call(r, l) && l !== "key" && l !== "__self" && l !== "__source" && (s[l] = r[l]);
        var c = arguments.length - 2;
        if (c === 1) s.children = o;
        else if (1 < c) {
          for (var T = Array(c), w = 0; w < c; w++)
            T[w] = arguments[w + 2];
          Object.freeze && Object.freeze(T), s.children = T;
        }
        if (e && e.defaultProps)
          for (l in c = e.defaultProps, c)
            s[l] === void 0 && (s[l] = c[l]);
        return f && ae(
          s,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        ), V(e, f, void 0, void 0, D(), s);
      }, E.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, E.forwardRef = function(e) {
        e != null && e.$$typeof === Te ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var r = { $$typeof: we, render: e }, o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(s) {
            o = s, e.name || e.displayName || (Object.defineProperty(e, "name", { value: s }), e.displayName = s);
          }
        }), r;
      }, E.isValidElement = $, E.lazy = function(e) {
        return {
          $$typeof: ve,
          _payload: { _status: -1, _result: e },
          _init: Se
        };
      }, E.memo = function(e, r) {
        Ee(e) || console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: Te,
          type: e,
          compare: r === void 0 ? null : r
        };
        var o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(s) {
            o = s, e.name || e.displayName || (Object.defineProperty(e, "name", { value: s }), e.displayName = s);
          }
        }), r;
      }, E.startTransition = function(e) {
        var r = v.T, o = {};
        v.T = o, o._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var s = e(), f = v.S;
          f !== null && f(o, s), typeof s == "object" && s !== null && typeof s.then == "function" && s.then(n, rt);
        } catch (l) {
          rt(l);
        } finally {
          r === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), v.T = r;
        }
      }, E.unstable_useCacheRefresh = function() {
        return b().useCacheRefresh();
      }, E.use = function(e) {
        return b().use(e);
      }, E.useActionState = function(e, r, o) {
        return b().useActionState(
          e,
          r,
          o
        );
      }, E.useCallback = function(e, r) {
        return b().useCallback(e, r);
      }, E.useContext = function(e) {
        var r = b();
        return e.$$typeof === ye && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, E.useDebugValue = function(e, r) {
        return b().useDebugValue(e, r);
      }, E.useDeferredValue = function(e, r) {
        return b().useDeferredValue(e, r);
      }, E.useEffect = function(e, r) {
        return b().useEffect(e, r);
      }, E.useId = function() {
        return b().useId();
      }, E.useImperativeHandle = function(e, r, o) {
        return b().useImperativeHandle(e, r, o);
      }, E.useInsertionEffect = function(e, r) {
        return b().useInsertionEffect(e, r);
      }, E.useLayoutEffect = function(e, r) {
        return b().useLayoutEffect(e, r);
      }, E.useMemo = function(e, r) {
        return b().useMemo(e, r);
      }, E.useOptimistic = function(e, r) {
        return b().useOptimistic(e, r);
      }, E.useReducer = function(e, r, o) {
        return b().useReducer(e, r, o);
      }, E.useRef = function(e) {
        return b().useRef(e);
      }, E.useState = function(e) {
        return b().useState(e);
      }, E.useSyncExternalStore = function(e, r, o) {
        return b().useSyncExternalStore(
          e,
          r,
          o
        );
      }, E.useTransition = function() {
        return b().useTransition();
      }, E.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }($e, $e.exports)), $e.exports;
}
var it;
function Et() {
  return it || (it = 1, process.env.NODE_ENV === "production" ? qe.exports = vt() : qe.exports = pt()), qe.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function mt() {
  return ft || (ft = 1, process.env.NODE_ENV !== "production" && function() {
    function k(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === Se ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case V:
          return "Fragment";
        case O:
          return "Portal";
        case he:
          return "Profiler";
        case ie:
          return "StrictMode";
        case re:
          return "Suspense";
        case J:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case ge:
            return (t.displayName || "Context") + ".Provider";
          case $:
            return (t._context.displayName || "Context") + ".Consumer";
          case fe:
            var a = t.render;
            return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ce:
            return a = t.displayName || null, a !== null ? a : k(t.type) || "Memo";
          case I:
            a = t._payload, t = t._init;
            try {
              return k(t(a));
            } catch {
            }
        }
      return null;
    }
    function E(t) {
      return "" + t;
    }
    function F(t) {
      try {
        E(t);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var i = a.error, _ = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return i.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), E(t);
      }
    }
    function ee() {
    }
    function P() {
      if (h === 0) {
        R = console.log, m = console.info, x = console.warn, A = console.error, le = console.group, je = console.groupCollapsed, ye = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: ee,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      h++;
    }
    function N() {
      if (h--, h === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: u({}, t, { value: R }),
          info: u({}, t, { value: m }),
          warn: u({}, t, { value: x }),
          error: u({}, t, { value: A }),
          group: u({}, t, { value: le }),
          groupCollapsed: u({}, t, { value: je }),
          groupEnd: u({}, t, { value: ye })
        });
      }
      0 > h && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function U(t) {
      if (_e === void 0)
        try {
          throw Error();
        } catch (i) {
          var a = i.stack.trim().match(/\n( *(at )?)/);
          _e = a && a[1] || "", we = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + _e + t + we;
    }
    function q(t, a) {
      if (!t || de) return "";
      var i = be.get(t);
      if (i !== void 0) return i;
      de = !0, i = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var _ = null;
      _ = b.H, b.H = null, P();
      try {
        var j = {
          DetermineComponentFrameRoot: function() {
            try {
              if (a) {
                var K = function() {
                  throw Error();
                };
                if (Object.defineProperty(K.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(K, []);
                  } catch (G) {
                    var Re = G;
                  }
                  Reflect.construct(t, [], K);
                } else {
                  try {
                    K.call();
                  } catch (G) {
                    Re = G;
                  }
                  t.call(K.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (G) {
                  Re = G;
                }
                (K = t()) && typeof K.catch == "function" && K.catch(function() {
                });
              }
            } catch (G) {
              if (G && Re && typeof G.stack == "string")
                return [G.stack, Re.stack];
            }
            return [null, null];
          }
        };
        j.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var C = Object.getOwnPropertyDescriptor(
          j.DetermineComponentFrameRoot,
          "name"
        );
        C && C.configurable && Object.defineProperty(
          j.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var g = j.DetermineComponentFrameRoot(), v = g[0], B = g[1];
        if (v && B) {
          var M = v.split(`
`), L = B.split(`
`);
          for (g = C = 0; C < M.length && !M[C].includes(
            "DetermineComponentFrameRoot"
          ); )
            C++;
          for (; g < L.length && !L[g].includes(
            "DetermineComponentFrameRoot"
          ); )
            g++;
          if (C === M.length || g === L.length)
            for (C = M.length - 1, g = L.length - 1; 1 <= C && 0 <= g && M[C] !== L[g]; )
              g--;
          for (; 1 <= C && 0 <= g; C--, g--)
            if (M[C] !== L[g]) {
              if (C !== 1 || g !== 1)
                do
                  if (C--, g--, 0 > g || M[C] !== L[g]) {
                    var pe = `
` + M[C].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", t.displayName)), typeof t == "function" && be.set(t, pe), pe;
                  }
                while (1 <= C && 0 <= g);
              break;
            }
        }
      } finally {
        de = !1, b.H = _, N(), Error.prepareStackTrace = i;
      }
      return M = (M = t ? t.displayName || t.name : "") ? U(M) : "", typeof t == "function" && be.set(t, M), M;
    }
    function ue(t) {
      if (t == null) return "";
      if (typeof t == "function") {
        var a = t.prototype;
        return q(
          t,
          !(!a || !a.isReactComponent)
        );
      }
      if (typeof t == "string") return U(t);
      switch (t) {
        case re:
          return U("Suspense");
        case J:
          return U("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case fe:
            return t = q(t.render, !1), t;
          case ce:
            return ue(t.type);
          case I:
            a = t._payload, t = t._init;
            try {
              return ue(t(a));
            } catch {
            }
        }
      return "";
    }
    function Q() {
      var t = b.A;
      return t === null ? null : t.getOwner();
    }
    function z(t) {
      if (n.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function Ee(t, a) {
      function i() {
        ve || (ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: i,
        configurable: !0
      });
    }
    function Oe() {
      var t = k(this.type);
      return xe[t] || (xe[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function Ae(t, a, i, _, j, C) {
      return i = C.ref, t = {
        $$typeof: ae,
        type: t,
        key: a,
        props: C,
        _owner: j
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: Oe
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function me(t, a, i, _, j, C) {
      if (typeof t == "string" || typeof t == "function" || t === V || t === he || t === ie || t === re || t === J || t === W || typeof t == "object" && t !== null && (t.$$typeof === I || t.$$typeof === ce || t.$$typeof === ge || t.$$typeof === $ || t.$$typeof === fe || t.$$typeof === p || t.getModuleId !== void 0)) {
        var g = a.children;
        if (g !== void 0)
          if (_)
            if (d(g)) {
              for (_ = 0; _ < g.length; _++)
                X(g[_], t);
              Object.freeze && Object.freeze(g);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else X(g, t);
      } else
        g = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? _ = "null" : d(t) ? _ = "array" : t !== void 0 && t.$$typeof === ae ? (_ = "<" + (k(t.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof t, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          _,
          g
        );
      if (n.call(a, "key")) {
        g = k(t);
        var v = Object.keys(a).filter(function(M) {
          return M !== "key";
        });
        _ = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", ke[g + _] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          g,
          v,
          g
        ), ke[g + _] = !0);
      }
      if (g = null, i !== void 0 && (F(i), g = "" + i), z(a) && (F(a.key), g = "" + a.key), "key" in a) {
        i = {};
        for (var B in a)
          B !== "key" && (i[B] = a[B]);
      } else i = a;
      return g && Ee(
        i,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), Ae(t, g, C, j, Q(), i);
    }
    function X(t, a) {
      if (typeof t == "object" && t && t.$$typeof !== Te) {
        if (d(t))
          for (var i = 0; i < t.length; i++) {
            var _ = t[i];
            H(_) && te(_, a);
          }
        else if (H(t))
          t._store && (t._store.validated = 1);
        else if (t === null || typeof t != "object" ? i = null : (i = ne && t[ne] || t["@@iterator"], i = typeof i == "function" ? i : null), typeof i == "function" && i !== t.entries && (i = i.call(t), i !== t))
          for (; !(t = i.next()).done; )
            H(t.value) && te(t.value, a);
      }
    }
    function H(t) {
      return typeof t == "object" && t !== null && t.$$typeof === ae;
    }
    function te(t, a) {
      if (t._store && !t._store.validated && t.key == null && (t._store.validated = 1, a = D(a), !Ne[a])) {
        Ne[a] = !0;
        var i = "";
        t && t._owner != null && t._owner !== Q() && (i = null, typeof t._owner.tag == "number" ? i = k(t._owner.type) : typeof t._owner.name == "string" && (i = t._owner.name), i = " It was passed a child from " + i + ".");
        var _ = b.getCurrentStack;
        b.getCurrentStack = function() {
          var j = ue(t.type);
          return _ && (j += _() || ""), j;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          a,
          i
        ), b.getCurrentStack = _;
      }
    }
    function D(t) {
      var a = "", i = Q();
      return i && (i = k(i.type)) && (a = `

Check the render method of \`` + i + "`."), a || (t = k(t)) && (a = `

Check the top-level render call using <` + t + ">."), a;
    }
    var se = Et(), ae = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), he = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), ge = Symbol.for("react.context"), fe = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ne = Symbol.iterator, Se = Symbol.for("react.client.reference"), b = se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, n = Object.prototype.hasOwnProperty, u = Object.assign, p = Symbol.for("react.client.reference"), d = Array.isArray, h = 0, R, m, x, A, le, je, ye;
    ee.__reactDisabledLog = !0;
    var _e, we, de = !1, be = new (typeof WeakMap == "function" ? WeakMap : Map)(), Te = Symbol.for("react.client.reference"), ve, xe = {}, ke = {}, Ne = {};
    Me.Fragment = V, Me.jsx = function(t, a, i, _, j) {
      return me(t, a, i, !1, _, j);
    }, Me.jsxs = function(t, a, i, _, j) {
      return me(t, a, i, !0, _, j);
    };
  }()), Me;
}
var ct;
function ht() {
  return ct || (ct = 1, process.env.NODE_ENV === "production" ? Le.exports = dt() : Le.exports = mt()), Le.exports;
}
var gt = ht();
const yt = ({ label: k = "RIdha" }) => /* @__PURE__ */ gt.jsx("button", { children: k });
export {
  yt as Button
};
