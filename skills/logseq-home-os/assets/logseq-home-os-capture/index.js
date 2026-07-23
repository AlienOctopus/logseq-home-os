(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@logseq/libs/dist/lsplugin.user.js
  var require_lsplugin_user = __commonJS({
    "node_modules/@logseq/libs/dist/lsplugin.user.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.LSPluginEntry = t() : e.LSPluginEntry = t();
      }(self, () => (() => {
        var e = { 221(e2, t2, n2) {
          var r2 = n2(558);
          t2.formatArgs = function(t3) {
            if (t3[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t3[0] + (this.useColors ? "%c " : " ") + "+" + e2.exports.humanize(this.diff), !this.useColors) return;
            const n3 = "color: " + this.color;
            t3.splice(1, 0, n3, "color: inherit");
            let r3 = 0, o2 = 0;
            t3[0].replace(/%[a-zA-Z%]/g, (e3) => {
              "%%" !== e3 && (r3++, "%c" === e3 && (o2 = r3));
            }), t3.splice(o2, 0, n3);
          }, t2.save = function(e3) {
            try {
              e3 ? t2.storage.setItem("debug", e3) : t2.storage.removeItem("debug");
            } catch (e4) {
            }
          }, t2.load = function() {
            let e3;
            try {
              e3 = t2.storage.getItem("debug") || t2.storage.getItem("DEBUG");
            } catch (e4) {
            }
            !e3 && void 0 !== r2 && "env" in r2 && (e3 = r2.env.DEBUG);
            return e3;
          }, t2.useColors = function() {
            if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return true;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
            let e3;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && (e3 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e3[1], 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
          }, t2.storage = function() {
            try {
              return localStorage;
            } catch (e3) {
            }
          }(), t2.destroy = /* @__PURE__ */ (() => {
            let e3 = false;
            return () => {
              e3 || (e3 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
            };
          })(), t2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t2.log = console.debug || console.log || (() => {
          }), e2.exports = n2(156)(t2);
          const { formatters: o } = e2.exports;
          o.j = function(e3) {
            try {
              return JSON.stringify(e3);
            } catch (e4) {
              return "[UnexpectedJSONParseError]: " + e4.message;
            }
          };
        }, 156(e2, t2, n2) {
          e2.exports = function(e3) {
            function t3(e4) {
              let n3, o2, i, s = null;
              function a(...e5) {
                if (!a.enabled) return;
                const r3 = a, o3 = Number(/* @__PURE__ */ new Date()), i2 = o3 - (n3 || o3);
                r3.diff = i2, r3.prev = n3, r3.curr = o3, n3 = o3, e5[0] = t3.coerce(e5[0]), "string" != typeof e5[0] && e5.unshift("%O");
                let s2 = 0;
                e5[0] = e5[0].replace(/%([a-zA-Z%])/g, (n4, o4) => {
                  if ("%%" === n4) return "%";
                  s2++;
                  const i3 = t3.formatters[o4];
                  if ("function" == typeof i3) {
                    const t4 = e5[s2];
                    n4 = i3.call(r3, t4), e5.splice(s2, 1), s2--;
                  }
                  return n4;
                }), t3.formatArgs.call(r3, e5);
                (r3.log || t3.log).apply(r3, e5);
              }
              return a.namespace = e4, a.useColors = t3.useColors(), a.color = t3.selectColor(e4), a.extend = r2, a.destroy = t3.destroy, Object.defineProperty(a, "enabled", { enumerable: true, configurable: false, get: () => null !== s ? s : (o2 !== t3.namespaces && (o2 = t3.namespaces, i = t3.enabled(e4)), i), set: (e5) => {
                s = e5;
              } }), "function" == typeof t3.init && t3.init(a), a;
            }
            function r2(e4, n3) {
              const r3 = t3(this.namespace + (void 0 === n3 ? ":" : n3) + e4);
              return r3.log = this.log, r3;
            }
            function o(e4, t4) {
              let n3 = 0, r3 = 0, o2 = -1, i = 0;
              for (; n3 < e4.length; ) if (r3 < t4.length && (t4[r3] === e4[n3] || "*" === t4[r3])) "*" === t4[r3] ? (o2 = r3, i = n3, r3++) : (n3++, r3++);
              else {
                if (-1 === o2) return false;
                r3 = o2 + 1, i++, n3 = i;
              }
              for (; r3 < t4.length && "*" === t4[r3]; ) r3++;
              return r3 === t4.length;
            }
            return t3.debug = t3, t3.default = t3, t3.coerce = function(e4) {
              if (e4 instanceof Error) return e4.stack || e4.message;
              return e4;
            }, t3.disable = function() {
              const e4 = [...t3.names, ...t3.skips.map((e5) => "-" + e5)].join(",");
              return t3.enable(""), e4;
            }, t3.enable = function(e4) {
              t3.save(e4), t3.namespaces = e4, t3.names = [], t3.skips = [];
              const n3 = ("string" == typeof e4 ? e4 : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
              for (const e5 of n3) "-" === e5[0] ? t3.skips.push(e5.slice(1)) : t3.names.push(e5);
            }, t3.enabled = function(e4) {
              for (const n3 of t3.skips) if (o(e4, n3)) return false;
              for (const n3 of t3.names) if (o(e4, n3)) return true;
              return false;
            }, t3.humanize = n2(49), t3.destroy = function() {
              console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
            }, Object.keys(e3).forEach((n3) => {
              t3[n3] = e3[n3];
            }), t3.names = [], t3.skips = [], t3.formatters = {}, t3.selectColor = function(e4) {
              let n3 = 0;
              for (let t4 = 0; t4 < e4.length; t4++) n3 = (n3 << 5) - n3 + e4.charCodeAt(t4), n3 |= 0;
              return t3.colors[Math.abs(n3) % t3.colors.length];
            }, t3.enable(t3.load()), t3;
          };
        }, 314(e2) {
          "use strict";
          var t2 = function(e3) {
            return /* @__PURE__ */ function(e4) {
              return !!e4 && "object" == typeof e4;
            }(e3) && !function(e4) {
              var t3 = Object.prototype.toString.call(e4);
              return "[object RegExp]" === t3 || "[object Date]" === t3 || function(e5) {
                return e5.$$typeof === n2;
              }(e4);
            }(e3);
          };
          var n2 = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
          function r2(e3, t3) {
            return false !== t3.clone && t3.isMergeableObject(e3) ? l((n3 = e3, Array.isArray(n3) ? [] : {}), e3, t3) : e3;
            var n3;
          }
          function o(e3, t3, n3) {
            return e3.concat(t3).map(function(e4) {
              return r2(e4, n3);
            });
          }
          function i(e3) {
            return Object.keys(e3).concat(function(e4) {
              return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e4).filter(function(t3) {
                return Object.propertyIsEnumerable.call(e4, t3);
              }) : [];
            }(e3));
          }
          function s(e3, t3) {
            try {
              return t3 in e3;
            } catch (e4) {
              return false;
            }
          }
          function a(e3, t3, n3) {
            var o2 = {};
            return n3.isMergeableObject(e3) && i(e3).forEach(function(t4) {
              o2[t4] = r2(e3[t4], n3);
            }), i(t3).forEach(function(i2) {
              (function(e4, t4) {
                return s(e4, t4) && !(Object.hasOwnProperty.call(e4, t4) && Object.propertyIsEnumerable.call(e4, t4));
              })(e3, i2) || (s(e3, i2) && n3.isMergeableObject(t3[i2]) ? o2[i2] = function(e4, t4) {
                if (!t4.customMerge) return l;
                var n4 = t4.customMerge(e4);
                return "function" == typeof n4 ? n4 : l;
              }(i2, n3)(e3[i2], t3[i2], n3) : o2[i2] = r2(t3[i2], n3));
            }), o2;
          }
          function l(e3, n3, i2) {
            (i2 = i2 || {}).arrayMerge = i2.arrayMerge || o, i2.isMergeableObject = i2.isMergeableObject || t2, i2.cloneUnlessOtherwiseSpecified = r2;
            var s2 = Array.isArray(n3);
            return s2 === Array.isArray(e3) ? s2 ? i2.arrayMerge(e3, n3, i2) : a(e3, n3, i2) : r2(n3, i2);
          }
          l.all = function(e3, t3) {
            if (!Array.isArray(e3)) throw new Error("first argument should be an array");
            return e3.reduce(function(e4, n3) {
              return l(e4, n3, t3);
            }, {});
          };
          var c = l;
          e2.exports = c;
        }, 138(e2) {
          "use strict";
          var t2 = Object.prototype.hasOwnProperty, n2 = "~";
          function r2() {
          }
          function o(e3, t3, n3) {
            this.fn = e3, this.context = t3, this.once = n3 || false;
          }
          function i(e3, t3, r3, i2, s2) {
            if ("function" != typeof r3) throw new TypeError("The listener must be a function");
            var a2 = new o(r3, i2 || e3, s2), l = n2 ? n2 + t3 : t3;
            return e3._events[l] ? e3._events[l].fn ? e3._events[l] = [e3._events[l], a2] : e3._events[l].push(a2) : (e3._events[l] = a2, e3._eventsCount++), e3;
          }
          function s(e3, t3) {
            0 === --e3._eventsCount ? e3._events = new r2() : delete e3._events[t3];
          }
          function a() {
            this._events = new r2(), this._eventsCount = 0;
          }
          Object.create && (r2.prototype = /* @__PURE__ */ Object.create(null), new r2().__proto__ || (n2 = false)), a.prototype.eventNames = function() {
            var e3, r3, o2 = [];
            if (0 === this._eventsCount) return o2;
            for (r3 in e3 = this._events) t2.call(e3, r3) && o2.push(n2 ? r3.slice(1) : r3);
            return Object.getOwnPropertySymbols ? o2.concat(Object.getOwnPropertySymbols(e3)) : o2;
          }, a.prototype.listeners = function(e3) {
            var t3 = n2 ? n2 + e3 : e3, r3 = this._events[t3];
            if (!r3) return [];
            if (r3.fn) return [r3.fn];
            for (var o2 = 0, i2 = r3.length, s2 = new Array(i2); o2 < i2; o2++) s2[o2] = r3[o2].fn;
            return s2;
          }, a.prototype.listenerCount = function(e3) {
            var t3 = n2 ? n2 + e3 : e3, r3 = this._events[t3];
            return r3 ? r3.fn ? 1 : r3.length : 0;
          }, a.prototype.emit = function(e3, t3, r3, o2, i2, s2) {
            var a2 = n2 ? n2 + e3 : e3;
            if (!this._events[a2]) return false;
            var l, c, u = this._events[a2], h = arguments.length;
            if (u.fn) {
              switch (u.once && this.removeListener(e3, u.fn, void 0, true), h) {
                case 1:
                  return u.fn.call(u.context), true;
                case 2:
                  return u.fn.call(u.context, t3), true;
                case 3:
                  return u.fn.call(u.context, t3, r3), true;
                case 4:
                  return u.fn.call(u.context, t3, r3, o2), true;
                case 5:
                  return u.fn.call(u.context, t3, r3, o2, i2), true;
                case 6:
                  return u.fn.call(u.context, t3, r3, o2, i2, s2), true;
              }
              for (c = 1, l = new Array(h - 1); c < h; c++) l[c - 1] = arguments[c];
              u.fn.apply(u.context, l);
            } else {
              var f, d = u.length;
              for (c = 0; c < d; c++) switch (u[c].once && this.removeListener(e3, u[c].fn, void 0, true), h) {
                case 1:
                  u[c].fn.call(u[c].context);
                  break;
                case 2:
                  u[c].fn.call(u[c].context, t3);
                  break;
                case 3:
                  u[c].fn.call(u[c].context, t3, r3);
                  break;
                case 4:
                  u[c].fn.call(u[c].context, t3, r3, o2);
                  break;
                default:
                  if (!l) for (f = 1, l = new Array(h - 1); f < h; f++) l[f - 1] = arguments[f];
                  u[c].fn.apply(u[c].context, l);
              }
            }
            return true;
          }, a.prototype.on = function(e3, t3, n3) {
            return i(this, e3, t3, n3, false);
          }, a.prototype.once = function(e3, t3, n3) {
            return i(this, e3, t3, n3, true);
          }, a.prototype.removeListener = function(e3, t3, r3, o2) {
            var i2 = n2 ? n2 + e3 : e3;
            if (!this._events[i2]) return this;
            if (!t3) return s(this, i2), this;
            var a2 = this._events[i2];
            if (a2.fn) a2.fn !== t3 || o2 && !a2.once || r3 && a2.context !== r3 || s(this, i2);
            else {
              for (var l = 0, c = [], u = a2.length; l < u; l++) (a2[l].fn !== t3 || o2 && !a2[l].once || r3 && a2[l].context !== r3) && c.push(a2[l]);
              c.length ? this._events[i2] = 1 === c.length ? c[0] : c : s(this, i2);
            }
            return this;
          }, a.prototype.removeAllListeners = function(e3) {
            var t3;
            return e3 ? (t3 = n2 ? n2 + e3 : e3, this._events[t3] && s(this, t3)) : (this._events = new r2(), this._eventsCount = 0), this;
          }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n2, a.EventEmitter = a, e2.exports = a;
        }, 543(e2) {
          "function" == typeof Object.create ? e2.exports = function(e3, t2) {
            e3.super_ = t2, e3.prototype = Object.create(t2.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } });
          } : e2.exports = function(e3, t2) {
            e3.super_ = t2;
            var n2 = function() {
            };
            n2.prototype = t2.prototype, e3.prototype = new n2(), e3.prototype.constructor = e3;
          };
        }, 49(e2) {
          var t2 = 1e3, n2 = 60 * t2, r2 = 60 * n2, o = 24 * r2, i = 7 * o, s = 365.25 * o;
          function a(e3, t3, n3, r3) {
            var o2 = t3 >= 1.5 * n3;
            return Math.round(e3 / n3) + " " + r3 + (o2 ? "s" : "");
          }
          e2.exports = function(e3, l) {
            l = l || {};
            var c = typeof e3;
            if ("string" === c && e3.length > 0) return function(e4) {
              if ((e4 = String(e4)).length > 100) return;
              var a2 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e4);
              if (!a2) return;
              var l2 = parseFloat(a2[1]);
              switch ((a2[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return l2 * s;
                case "weeks":
                case "week":
                case "w":
                  return l2 * i;
                case "days":
                case "day":
                case "d":
                  return l2 * o;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return l2 * r2;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return l2 * n2;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return l2 * t2;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return l2;
                default:
                  return;
              }
            }(e3);
            if ("number" === c && isFinite(e3)) return l.long ? function(e4) {
              var i2 = Math.abs(e4);
              if (i2 >= o) return a(e4, i2, o, "day");
              if (i2 >= r2) return a(e4, i2, r2, "hour");
              if (i2 >= n2) return a(e4, i2, n2, "minute");
              if (i2 >= t2) return a(e4, i2, t2, "second");
              return e4 + " ms";
            }(e3) : function(e4) {
              var i2 = Math.abs(e4);
              if (i2 >= o) return Math.round(e4 / o) + "d";
              if (i2 >= r2) return Math.round(e4 / r2) + "h";
              if (i2 >= n2) return Math.round(e4 / n2) + "m";
              if (i2 >= t2) return Math.round(e4 / t2) + "s";
              return e4 + "ms";
            }(e3);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e3));
          };
        }, 528(e2, t2, n2) {
          "use strict";
          var r2 = n2(558), o = "win32" === r2.platform, i = n2(496);
          function s(e3, t3) {
            for (var n3 = [], r3 = 0; r3 < e3.length; r3++) {
              var o2 = e3[r3];
              o2 && "." !== o2 && (".." === o2 ? n3.length && ".." !== n3[n3.length - 1] ? n3.pop() : t3 && n3.push("..") : n3.push(o2));
            }
            return n3;
          }
          function a(e3) {
            for (var t3 = e3.length - 1, n3 = 0; n3 <= t3 && !e3[n3]; n3++) ;
            for (var r3 = t3; r3 >= 0 && !e3[r3]; r3--) ;
            return 0 === n3 && r3 === t3 ? e3 : n3 > r3 ? [] : e3.slice(n3, r3 + 1);
          }
          var l = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/, c = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/, u = {};
          function h(e3) {
            var t3 = l.exec(e3), n3 = (t3[1] || "") + (t3[2] || ""), r3 = t3[3] || "", o2 = c.exec(r3);
            return [n3, o2[1], o2[2], o2[3]];
          }
          function f(e3) {
            var t3 = l.exec(e3), n3 = t3[1] || "", r3 = !!n3 && ":" !== n3[1];
            return { device: n3, isUnc: r3, isAbsolute: r3 || !!t3[2], tail: t3[3] };
          }
          function d(e3) {
            return "\\\\" + e3.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\");
          }
          u.resolve = function() {
            for (var e3 = "", t3 = "", n3 = false, o2 = arguments.length - 1; o2 >= -1; o2--) {
              var a2;
              if (o2 >= 0 ? a2 = arguments[o2] : e3 ? (a2 = r2.env["=" + e3]) && a2.substr(0, 3).toLowerCase() === e3.toLowerCase() + "\\" || (a2 = e3 + "\\") : a2 = r2.cwd(), !i.isString(a2)) throw new TypeError("Arguments to path.resolve must be strings");
              if (a2) {
                var l2 = f(a2), c2 = l2.device, u2 = l2.isUnc, h2 = l2.isAbsolute, p2 = l2.tail;
                if ((!c2 || !e3 || c2.toLowerCase() === e3.toLowerCase()) && (e3 || (e3 = c2), n3 || (t3 = p2 + "\\" + t3, n3 = h2), e3 && n3)) break;
              }
            }
            return u2 && (e3 = d(e3)), e3 + (n3 ? "\\" : "") + (t3 = s(t3.split(/[\\\/]+/), !n3).join("\\")) || ".";
          }, u.normalize = function(e3) {
            var t3 = f(e3), n3 = t3.device, r3 = t3.isUnc, o2 = t3.isAbsolute, i2 = t3.tail, a2 = /[\\\/]$/.test(i2);
            return (i2 = s(i2.split(/[\\\/]+/), !o2).join("\\")) || o2 || (i2 = "."), i2 && a2 && (i2 += "\\"), r3 && (n3 = d(n3)), n3 + (o2 ? "\\" : "") + i2;
          }, u.isAbsolute = function(e3) {
            return f(e3).isAbsolute;
          }, u.join = function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) {
              var n3 = arguments[t3];
              if (!i.isString(n3)) throw new TypeError("Arguments to path.join must be strings");
              n3 && e3.push(n3);
            }
            var r3 = e3.join("\\");
            return /^[\\\/]{2}[^\\\/]/.test(e3[0]) || (r3 = r3.replace(/^[\\\/]{2,}/, "\\")), u.normalize(r3);
          }, u.relative = function(e3, t3) {
            e3 = u.resolve(e3), t3 = u.resolve(t3);
            for (var n3 = e3.toLowerCase(), r3 = t3.toLowerCase(), o2 = a(t3.split("\\")), i2 = a(n3.split("\\")), s2 = a(r3.split("\\")), l2 = Math.min(i2.length, s2.length), c2 = l2, h2 = 0; h2 < l2; h2++) if (i2[h2] !== s2[h2]) {
              c2 = h2;
              break;
            }
            if (0 == c2) return t3;
            var f2 = [];
            for (h2 = c2; h2 < i2.length; h2++) f2.push("..");
            return (f2 = f2.concat(o2.slice(c2))).join("\\");
          }, u._makeLong = function(e3) {
            if (!i.isString(e3)) return e3;
            if (!e3) return "";
            var t3 = u.resolve(e3);
            return /^[a-zA-Z]\:\\/.test(t3) ? "\\\\?\\" + t3 : /^\\\\[^?.]/.test(t3) ? "\\\\?\\UNC\\" + t3.substring(2) : e3;
          }, u.dirname = function(e3) {
            var t3 = h(e3), n3 = t3[0], r3 = t3[1];
            return n3 || r3 ? (r3 && (r3 = r3.substr(0, r3.length - 1)), n3 + r3) : ".";
          }, u.basename = function(e3, t3) {
            var n3 = h(e3)[2];
            return t3 && n3.substr(-1 * t3.length) === t3 && (n3 = n3.substr(0, n3.length - t3.length)), n3;
          }, u.extname = function(e3) {
            return h(e3)[3];
          }, u.format = function(e3) {
            if (!i.isObject(e3)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof e3);
            var t3 = e3.root || "";
            if (!i.isString(t3)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof e3.root);
            var n3 = e3.dir, r3 = e3.base || "";
            return n3 ? n3[n3.length - 1] === u.sep ? n3 + r3 : n3 + u.sep + r3 : r3;
          }, u.parse = function(e3) {
            if (!i.isString(e3)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e3);
            var t3 = h(e3);
            if (!t3 || 4 !== t3.length) throw new TypeError("Invalid path '" + e3 + "'");
            return { root: t3[0], dir: t3[0] + t3[1].slice(0, -1), base: t3[2], ext: t3[3], name: t3[2].slice(0, t3[2].length - t3[3].length) };
          }, u.sep = "\\", u.delimiter = ";";
          var p = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, m = {};
          function g(e3) {
            return p.exec(e3).slice(1);
          }
          m.resolve = function() {
            for (var e3 = "", t3 = false, n3 = arguments.length - 1; n3 >= -1 && !t3; n3--) {
              var o2 = n3 >= 0 ? arguments[n3] : r2.cwd();
              if (!i.isString(o2)) throw new TypeError("Arguments to path.resolve must be strings");
              o2 && (e3 = o2 + "/" + e3, t3 = "/" === o2[0]);
            }
            return (t3 ? "/" : "") + (e3 = s(e3.split("/"), !t3).join("/")) || ".";
          }, m.normalize = function(e3) {
            var t3 = m.isAbsolute(e3), n3 = e3 && "/" === e3[e3.length - 1];
            return (e3 = s(e3.split("/"), !t3).join("/")) || t3 || (e3 = "."), e3 && n3 && (e3 += "/"), (t3 ? "/" : "") + e3;
          }, m.isAbsolute = function(e3) {
            return "/" === e3.charAt(0);
          }, m.join = function() {
            for (var e3 = "", t3 = 0; t3 < arguments.length; t3++) {
              var n3 = arguments[t3];
              if (!i.isString(n3)) throw new TypeError("Arguments to path.join must be strings");
              n3 && (e3 += e3 ? "/" + n3 : n3);
            }
            return m.normalize(e3);
          }, m.relative = function(e3, t3) {
            e3 = m.resolve(e3).substr(1), t3 = m.resolve(t3).substr(1);
            for (var n3 = a(e3.split("/")), r3 = a(t3.split("/")), o2 = Math.min(n3.length, r3.length), i2 = o2, s2 = 0; s2 < o2; s2++) if (n3[s2] !== r3[s2]) {
              i2 = s2;
              break;
            }
            var l2 = [];
            for (s2 = i2; s2 < n3.length; s2++) l2.push("..");
            return (l2 = l2.concat(r3.slice(i2))).join("/");
          }, m._makeLong = function(e3) {
            return e3;
          }, m.dirname = function(e3) {
            var t3 = g(e3), n3 = t3[0], r3 = t3[1];
            return n3 || r3 ? (r3 && (r3 = r3.substr(0, r3.length - 1)), n3 + r3) : ".";
          }, m.basename = function(e3, t3) {
            var n3 = g(e3)[2];
            return t3 && n3.substr(-1 * t3.length) === t3 && (n3 = n3.substr(0, n3.length - t3.length)), n3;
          }, m.extname = function(e3) {
            return g(e3)[3];
          }, m.format = function(e3) {
            if (!i.isObject(e3)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof e3);
            var t3 = e3.root || "";
            if (!i.isString(t3)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof e3.root);
            return (e3.dir ? e3.dir + m.sep : "") + (e3.base || "");
          }, m.parse = function(e3) {
            if (!i.isString(e3)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e3);
            var t3 = g(e3);
            if (!t3 || 4 !== t3.length) throw new TypeError("Invalid path '" + e3 + "'");
            return t3[1] = t3[1] || "", t3[2] = t3[2] || "", t3[3] = t3[3] || "", { root: t3[0], dir: t3[0] + t3[1].slice(0, -1), base: t3[2], ext: t3[3], name: t3[2].slice(0, t3[2].length - t3[3].length) };
          }, m.sep = "/", m.delimiter = ":", e2.exports = o ? u : m, e2.exports.posix = m, e2.exports.win32 = u;
        }, 558(e2) {
          var t2, n2, r2 = e2.exports = {};
          function o() {
            throw new Error("setTimeout has not been defined");
          }
          function i() {
            throw new Error("clearTimeout has not been defined");
          }
          function s(e3) {
            if (t2 === setTimeout) return setTimeout(e3, 0);
            if ((t2 === o || !t2) && setTimeout) return t2 = setTimeout, setTimeout(e3, 0);
            try {
              return t2(e3, 0);
            } catch (n3) {
              try {
                return t2.call(null, e3, 0);
              } catch (n4) {
                return t2.call(this, e3, 0);
              }
            }
          }
          !function() {
            try {
              t2 = "function" == typeof setTimeout ? setTimeout : o;
            } catch (e3) {
              t2 = o;
            }
            try {
              n2 = "function" == typeof clearTimeout ? clearTimeout : i;
            } catch (e3) {
              n2 = i;
            }
          }();
          var a, l = [], c = false, u = -1;
          function h() {
            c && a && (c = false, a.length ? l = a.concat(l) : u = -1, l.length && f());
          }
          function f() {
            if (!c) {
              var e3 = s(h);
              c = true;
              for (var t3 = l.length; t3; ) {
                for (a = l, l = []; ++u < t3; ) a && a[u].run();
                u = -1, t3 = l.length;
              }
              a = null, c = false, function(e4) {
                if (n2 === clearTimeout) return clearTimeout(e4);
                if ((n2 === i || !n2) && clearTimeout) return n2 = clearTimeout, clearTimeout(e4);
                try {
                  return n2(e4);
                } catch (t4) {
                  try {
                    return n2.call(null, e4);
                  } catch (t5) {
                    return n2.call(this, e4);
                  }
                }
              }(e3);
            }
          }
          function d(e3, t3) {
            this.fun = e3, this.array = t3;
          }
          function p() {
          }
          r2.nextTick = function(e3) {
            var t3 = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n3 = 1; n3 < arguments.length; n3++) t3[n3 - 1] = arguments[n3];
            l.push(new d(e3, t3)), 1 !== l.length || c || s(f);
          }, d.prototype.run = function() {
            this.fun.apply(null, this.array);
          }, r2.title = "browser", r2.browser = true, r2.env = {}, r2.argv = [], r2.version = "", r2.versions = {}, r2.on = p, r2.addListener = p, r2.once = p, r2.off = p, r2.removeListener = p, r2.removeAllListeners = p, r2.emit = p, r2.prependListener = p, r2.prependOnceListener = p, r2.listeners = function(e3) {
            return [];
          }, r2.binding = function(e3) {
            throw new Error("process.binding is not supported");
          }, r2.cwd = function() {
            return "/";
          }, r2.chdir = function(e3) {
            throw new Error("process.chdir is not supported");
          }, r2.umask = function() {
            return 0;
          };
        }, 80(e2) {
          e2.exports = function(e3) {
            return e3 && "object" == typeof e3 && "function" == typeof e3.copy && "function" == typeof e3.fill && "function" == typeof e3.readUInt8;
          };
        }, 496(e2, t2, n2) {
          var r2 = n2(558), o = /%[sdj%]/g;
          t2.format = function(e3) {
            if (!y(e3)) {
              for (var t3 = [], n3 = 0; n3 < arguments.length; n3++) t3.push(a(arguments[n3]));
              return t3.join(" ");
            }
            n3 = 1;
            for (var r3 = arguments, i2 = r3.length, s2 = String(e3).replace(o, function(e4) {
              if ("%%" === e4) return "%";
              if (n3 >= i2) return e4;
              switch (e4) {
                case "%s":
                  return String(r3[n3++]);
                case "%d":
                  return Number(r3[n3++]);
                case "%j":
                  try {
                    return JSON.stringify(r3[n3++]);
                  } catch (e5) {
                    return "[Circular]";
                  }
                default:
                  return e4;
              }
            }), l2 = r3[n3]; n3 < i2; l2 = r3[++n3]) m(l2) || !_(l2) ? s2 += " " + l2 : s2 += " " + a(l2);
            return s2;
          }, t2.deprecate = function(e3, o2) {
            if (v(n2.g.process)) return function() {
              return t2.deprecate(e3, o2).apply(this, arguments);
            };
            if (true === r2.noDeprecation) return e3;
            var i2 = false;
            return function() {
              if (!i2) {
                if (r2.throwDeprecation) throw new Error(o2);
                r2.traceDeprecation ? console.trace(o2) : console.error(o2), i2 = true;
              }
              return e3.apply(this, arguments);
            };
          };
          var i, s = {};
          function a(e3, n3) {
            var r3 = { seen: [], stylize: c };
            return arguments.length >= 3 && (r3.depth = arguments[2]), arguments.length >= 4 && (r3.colors = arguments[3]), p(n3) ? r3.showHidden = n3 : n3 && t2._extend(r3, n3), v(r3.showHidden) && (r3.showHidden = false), v(r3.depth) && (r3.depth = 2), v(r3.colors) && (r3.colors = false), v(r3.customInspect) && (r3.customInspect = true), r3.colors && (r3.stylize = l), u(r3, e3, r3.depth);
          }
          function l(e3, t3) {
            var n3 = a.styles[t3];
            return n3 ? "\x1B[" + a.colors[n3][0] + "m" + e3 + "\x1B[" + a.colors[n3][1] + "m" : e3;
          }
          function c(e3, t3) {
            return e3;
          }
          function u(e3, n3, r3) {
            if (e3.customInspect && n3 && C(n3.inspect) && n3.inspect !== t2.inspect && (!n3.constructor || n3.constructor.prototype !== n3)) {
              var o2 = n3.inspect(r3, e3);
              return y(o2) || (o2 = u(e3, o2, r3)), o2;
            }
            var i2 = function(e4, t3) {
              if (v(t3)) return e4.stylize("undefined", "undefined");
              if (y(t3)) {
                var n4 = "'" + JSON.stringify(t3).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return e4.stylize(n4, "string");
              }
              if (g(t3)) return e4.stylize("" + t3, "number");
              if (p(t3)) return e4.stylize("" + t3, "boolean");
              if (m(t3)) return e4.stylize("null", "null");
            }(e3, n3);
            if (i2) return i2;
            var s2 = Object.keys(n3), a2 = function(e4) {
              var t3 = {};
              return e4.forEach(function(e5, n4) {
                t3[e5] = true;
              }), t3;
            }(s2);
            if (e3.showHidden && (s2 = Object.getOwnPropertyNames(n3)), x(n3) && (s2.indexOf("message") >= 0 || s2.indexOf("description") >= 0)) return h(n3);
            if (0 === s2.length) {
              if (C(n3)) {
                var l2 = n3.name ? ": " + n3.name : "";
                return e3.stylize("[Function" + l2 + "]", "special");
              }
              if (b(n3)) return e3.stylize(RegExp.prototype.toString.call(n3), "regexp");
              if (w(n3)) return e3.stylize(Date.prototype.toString.call(n3), "date");
              if (x(n3)) return h(n3);
            }
            var c2, _2 = "", S2 = false, T2 = ["{", "}"];
            (d(n3) && (S2 = true, T2 = ["[", "]"]), C(n3)) && (_2 = " [Function" + (n3.name ? ": " + n3.name : "") + "]");
            return b(n3) && (_2 = " " + RegExp.prototype.toString.call(n3)), w(n3) && (_2 = " " + Date.prototype.toUTCString.call(n3)), x(n3) && (_2 = " " + h(n3)), 0 !== s2.length || S2 && 0 != n3.length ? r3 < 0 ? b(n3) ? e3.stylize(RegExp.prototype.toString.call(n3), "regexp") : e3.stylize("[Object]", "special") : (e3.seen.push(n3), c2 = S2 ? function(e4, t3, n4, r4, o3) {
              for (var i3 = [], s3 = 0, a3 = t3.length; s3 < a3; ++s3) A(t3, String(s3)) ? i3.push(f(e4, t3, n4, r4, String(s3), true)) : i3.push("");
              return o3.forEach(function(o4) {
                o4.match(/^\d+$/) || i3.push(f(e4, t3, n4, r4, o4, true));
              }), i3;
            }(e3, n3, r3, a2, s2) : s2.map(function(t3) {
              return f(e3, n3, r3, a2, t3, S2);
            }), e3.seen.pop(), function(e4, t3, n4) {
              var r4 = e4.reduce(function(e5, t4) {
                return t4.indexOf("\n") >= 0 && 0, e5 + t4.replace(/\u001b\[\d\d?m/g, "").length + 1;
              }, 0);
              if (r4 > 60) return n4[0] + ("" === t3 ? "" : t3 + "\n ") + " " + e4.join(",\n  ") + " " + n4[1];
              return n4[0] + t3 + " " + e4.join(", ") + " " + n4[1];
            }(c2, _2, T2)) : T2[0] + _2 + T2[1];
          }
          function h(e3) {
            return "[" + Error.prototype.toString.call(e3) + "]";
          }
          function f(e3, t3, n3, r3, o2, i2) {
            var s2, a2, l2;
            if ((l2 = Object.getOwnPropertyDescriptor(t3, o2) || { value: t3[o2] }).get ? a2 = l2.set ? e3.stylize("[Getter/Setter]", "special") : e3.stylize("[Getter]", "special") : l2.set && (a2 = e3.stylize("[Setter]", "special")), A(r3, o2) || (s2 = "[" + o2 + "]"), a2 || (e3.seen.indexOf(l2.value) < 0 ? (a2 = m(n3) ? u(e3, l2.value, null) : u(e3, l2.value, n3 - 1)).indexOf("\n") > -1 && (a2 = i2 ? a2.split("\n").map(function(e4) {
              return "  " + e4;
            }).join("\n").substr(2) : "\n" + a2.split("\n").map(function(e4) {
              return "   " + e4;
            }).join("\n")) : a2 = e3.stylize("[Circular]", "special")), v(s2)) {
              if (i2 && o2.match(/^\d+$/)) return a2;
              (s2 = JSON.stringify("" + o2)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s2 = s2.substr(1, s2.length - 2), s2 = e3.stylize(s2, "name")) : (s2 = s2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s2 = e3.stylize(s2, "string"));
            }
            return s2 + ": " + a2;
          }
          function d(e3) {
            return Array.isArray(e3);
          }
          function p(e3) {
            return "boolean" == typeof e3;
          }
          function m(e3) {
            return null === e3;
          }
          function g(e3) {
            return "number" == typeof e3;
          }
          function y(e3) {
            return "string" == typeof e3;
          }
          function v(e3) {
            return void 0 === e3;
          }
          function b(e3) {
            return _(e3) && "[object RegExp]" === S(e3);
          }
          function _(e3) {
            return "object" == typeof e3 && null !== e3;
          }
          function w(e3) {
            return _(e3) && "[object Date]" === S(e3);
          }
          function x(e3) {
            return _(e3) && ("[object Error]" === S(e3) || e3 instanceof Error);
          }
          function C(e3) {
            return "function" == typeof e3;
          }
          function S(e3) {
            return Object.prototype.toString.call(e3);
          }
          function T(e3) {
            return e3 < 10 ? "0" + e3.toString(10) : e3.toString(10);
          }
          t2.debuglog = function(e3) {
            if (v(i) && (i = r2.env.NODE_DEBUG || ""), e3 = e3.toUpperCase(), !s[e3]) if (new RegExp("\\b" + e3 + "\\b", "i").test(i)) {
              var n3 = r2.pid;
              s[e3] = function() {
                var r3 = t2.format.apply(t2, arguments);
                console.error("%s %d: %s", e3, n3, r3);
              };
            } else s[e3] = function() {
            };
            return s[e3];
          }, t2.inspect = a, a.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, a.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, t2.isArray = d, t2.isBoolean = p, t2.isNull = m, t2.isNullOrUndefined = function(e3) {
            return null == e3;
          }, t2.isNumber = g, t2.isString = y, t2.isSymbol = function(e3) {
            return "symbol" == typeof e3;
          }, t2.isUndefined = v, t2.isRegExp = b, t2.isObject = _, t2.isDate = w, t2.isError = x, t2.isFunction = C, t2.isPrimitive = function(e3) {
            return null === e3 || "boolean" == typeof e3 || "number" == typeof e3 || "string" == typeof e3 || "symbol" == typeof e3 || void 0 === e3;
          }, t2.isBuffer = n2(80);
          var E = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          function A(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          }
          t2.log = function() {
            var e3, n3;
            console.log("%s - %s", (e3 = /* @__PURE__ */ new Date(), n3 = [T(e3.getHours()), T(e3.getMinutes()), T(e3.getSeconds())].join(":"), [e3.getDate(), E[e3.getMonth()], n3].join(" ")), t2.format.apply(t2, arguments));
          }, t2.inherits = n2(543), t2._extend = function(e3, t3) {
            if (!t3 || !_(t3)) return e3;
            for (var n3 = Object.keys(t3), r3 = n3.length; r3--; ) e3[n3[r3]] = t3[n3[r3]];
            return e3;
          };
        } }, t = {};
        function n(r2) {
          var o = t[r2];
          if (void 0 !== o) return o.exports;
          var i = t[r2] = { exports: {} };
          return e[r2](i, i.exports, n), i.exports;
        }
        n.n = (e2) => {
          var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
          return n.d(t2, { a: t2 }), t2;
        }, n.d = (e2, t2) => {
          for (var r2 in t2) n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
        }, n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if ("object" == typeof window) return window;
          }
        }(), n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        };
        var r = {};
        return (() => {
          "use strict";
          n.r(r), n.d(r, { LSPluginUser: () => wi, setupPluginUserInstance: () => xi });
          var e2 = n(528);
          const { entries: t2, setPrototypeOf: o, isFrozen: i, getPrototypeOf: s, getOwnPropertyDescriptor: a } = Object;
          let { freeze: l, seal: c, create: u } = Object, { apply: h, construct: f } = "undefined" != typeof Reflect && Reflect;
          l || (l = function(e3) {
            return e3;
          }), c || (c = function(e3) {
            return e3;
          }), h || (h = function(e3, t3) {
            for (var n2 = arguments.length, r2 = new Array(n2 > 2 ? n2 - 2 : 0), o2 = 2; o2 < n2; o2++) r2[o2 - 2] = arguments[o2];
            return e3.apply(t3, r2);
          }), f || (f = function(e3) {
            for (var t3 = arguments.length, n2 = new Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++) n2[r2 - 1] = arguments[r2];
            return new e3(...n2);
          });
          const d = k(Array.prototype.forEach), p = k(Array.prototype.lastIndexOf), m = k(Array.prototype.pop), g = k(Array.prototype.push), y = k(Array.prototype.splice), v = k(String.prototype.toLowerCase), b = k(String.prototype.toString), _ = k(String.prototype.match), w = k(String.prototype.replace), x = k(String.prototype.indexOf), C = k(String.prototype.trim), S = k(Object.prototype.hasOwnProperty), T = k(RegExp.prototype.test), E = (A = TypeError, function() {
            for (var e3 = arguments.length, t3 = new Array(e3), n2 = 0; n2 < e3; n2++) t3[n2] = arguments[n2];
            return f(A, t3);
          });
          var A;
          function k(e3) {
            return function(t3) {
              t3 instanceof RegExp && (t3.lastIndex = 0);
              for (var n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), o2 = 1; o2 < n2; o2++) r2[o2 - 1] = arguments[o2];
              return h(e3, t3, r2);
            };
          }
          function O(e3, t3) {
            let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
            o && o(e3, null);
            let r2 = t3.length;
            for (; r2--; ) {
              let o2 = t3[r2];
              if ("string" == typeof o2) {
                const e4 = n2(o2);
                e4 !== o2 && (i(t3) || (t3[r2] = e4), o2 = e4);
              }
              e3[o2] = true;
            }
            return e3;
          }
          function j(e3) {
            for (let t3 = 0; t3 < e3.length; t3++) {
              S(e3, t3) || (e3[t3] = null);
            }
            return e3;
          }
          function P(e3) {
            const n2 = u(null);
            for (const [r2, o2] of t2(e3)) {
              S(e3, r2) && (Array.isArray(o2) ? n2[r2] = j(o2) : o2 && "object" == typeof o2 && o2.constructor === Object ? n2[r2] = P(o2) : n2[r2] = o2);
            }
            return n2;
          }
          function L(e3, t3) {
            for (; null !== e3; ) {
              const n2 = a(e3, t3);
              if (n2) {
                if (n2.get) return k(n2.get);
                if ("function" == typeof n2.value) return k(n2.value);
              }
              e3 = s(e3);
            }
            return function() {
              return null;
            };
          }
          const M = l(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), I = l(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), N = l(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), R = l(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), F = l(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), D = l(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), U = l(["#text"]), z = l(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), $ = l(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), H = l(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), B = l(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), W = c(/\{\{[\w\W]*|[\w\W]*\}\}/gm), q = c(/<%[\w\W]*|[\w\W]*%>/gm), G = c(/\$\{[\w\W]*/gm), J = c(/^data-[\-\w.\u00B7-\uFFFF]+$/), Y = c(/^aria-[\-\w]+$/), K = c(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), V = c(/^(?:\w+script|data):/i), X = c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Z = c(/^html$/i), Q = c(/^[a-z][.\w]*(-[.\w]+)+$/i);
          var ee = Object.freeze({ __proto__: null, ARIA_ATTR: Y, ATTR_WHITESPACE: X, CUSTOM_ELEMENT: Q, DATA_ATTR: J, DOCTYPE_NAME: Z, ERB_EXPR: q, IS_ALLOWED_URI: K, IS_SCRIPT_OR_DATA: V, MUSTACHE_EXPR: W, TMPLIT_EXPR: G });
          const te = 1, ne = 3, re = 7, oe = 8, ie = 9, se = function() {
            return "undefined" == typeof window ? null : window;
          };
          (function e3() {
            let n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se();
            const r2 = (t3) => e3(t3);
            if (r2.version = "3.3.3", r2.removed = [], !n2 || !n2.document || n2.document.nodeType !== ie || !n2.Element) return r2.isSupported = false, r2;
            let { document: o2 } = n2;
            const i2 = o2, s2 = i2.currentScript, { DocumentFragment: a2, HTMLTemplateElement: c2, Node: h2, Element: f2, NodeFilter: A2, NamedNodeMap: k2 = n2.NamedNodeMap || n2.MozNamedAttrMap, HTMLFormElement: j2, DOMParser: W2, trustedTypes: q2 } = n2, G2 = f2.prototype, J2 = L(G2, "cloneNode"), Y2 = L(G2, "remove"), V2 = L(G2, "nextSibling"), X2 = L(G2, "childNodes"), Q2 = L(G2, "parentNode");
            if ("function" == typeof c2) {
              const e4 = o2.createElement("template");
              e4.content && e4.content.ownerDocument && (o2 = e4.content.ownerDocument);
            }
            let ae2, le2 = "";
            const { implementation: ce2, createNodeIterator: ue2, createDocumentFragment: he2, getElementsByTagName: fe2 } = o2, { importNode: de2 } = i2;
            let pe2 = { afterSanitizeAttributes: [], afterSanitizeElements: [], afterSanitizeShadowDOM: [], beforeSanitizeAttributes: [], beforeSanitizeElements: [], beforeSanitizeShadowDOM: [], uponSanitizeAttribute: [], uponSanitizeElement: [], uponSanitizeShadowNode: [] };
            r2.isSupported = "function" == typeof t2 && "function" == typeof Q2 && ce2 && void 0 !== ce2.createHTMLDocument;
            const { MUSTACHE_EXPR: me2, ERB_EXPR: ge2, TMPLIT_EXPR: ye2, DATA_ATTR: ve2, ARIA_ATTR: be2, IS_SCRIPT_OR_DATA: _e2, ATTR_WHITESPACE: we2, CUSTOM_ELEMENT: xe2 } = ee;
            let { IS_ALLOWED_URI: Ce2 } = ee, Se2 = null;
            const Te2 = O({}, [...M, ...I, ...N, ...F, ...U]);
            let Ee2 = null;
            const Ae2 = O({}, [...z, ...$, ...H, ...B]);
            let ke2 = Object.seal(u(null, { tagNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, attributeNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, allowCustomizedBuiltInElements: { writable: true, configurable: false, enumerable: true, value: false } })), Oe2 = null, je2 = null;
            const Pe2 = Object.seal(u(null, { tagCheck: { writable: true, configurable: false, enumerable: true, value: null }, attributeCheck: { writable: true, configurable: false, enumerable: true, value: null } }));
            let Le2 = true, Me2 = true, Ie2 = false, Ne2 = true, Re2 = false, Fe2 = true, De2 = false, Ue2 = false, ze2 = false, $e2 = false, He2 = false, Be2 = false, We2 = true, qe2 = false, Ge2 = true, Je2 = false, Ye2 = {}, Ke2 = null;
            const Ve2 = O({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
            let Xe2 = null;
            const Ze2 = O({}, ["audio", "video", "img", "source", "image", "track"]);
            let Qe2 = null;
            const et2 = O({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tt2 = "http://www.w3.org/1998/Math/MathML", nt2 = "http://www.w3.org/2000/svg", rt2 = "http://www.w3.org/1999/xhtml";
            let ot2 = rt2, it2 = false, st2 = null;
            const at2 = O({}, [tt2, nt2, rt2], b);
            let lt2 = O({}, ["mi", "mo", "mn", "ms", "mtext"]), ct2 = O({}, ["annotation-xml"]);
            const ut2 = O({}, ["title", "style", "font", "a", "script"]);
            let ht2 = null;
            const ft2 = ["application/xhtml+xml", "text/html"];
            let dt2 = null, pt2 = null;
            const mt2 = o2.createElement("form"), gt2 = function(e4) {
              return e4 instanceof RegExp || e4 instanceof Function;
            }, yt2 = function() {
              let e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (!pt2 || pt2 !== e4) {
                if (e4 && "object" == typeof e4 || (e4 = {}), e4 = P(e4), ht2 = -1 === ft2.indexOf(e4.PARSER_MEDIA_TYPE) ? "text/html" : e4.PARSER_MEDIA_TYPE, dt2 = "application/xhtml+xml" === ht2 ? b : v, Se2 = S(e4, "ALLOWED_TAGS") ? O({}, e4.ALLOWED_TAGS, dt2) : Te2, Ee2 = S(e4, "ALLOWED_ATTR") ? O({}, e4.ALLOWED_ATTR, dt2) : Ae2, st2 = S(e4, "ALLOWED_NAMESPACES") ? O({}, e4.ALLOWED_NAMESPACES, b) : at2, Qe2 = S(e4, "ADD_URI_SAFE_ATTR") ? O(P(et2), e4.ADD_URI_SAFE_ATTR, dt2) : et2, Xe2 = S(e4, "ADD_DATA_URI_TAGS") ? O(P(Ze2), e4.ADD_DATA_URI_TAGS, dt2) : Ze2, Ke2 = S(e4, "FORBID_CONTENTS") ? O({}, e4.FORBID_CONTENTS, dt2) : Ve2, Oe2 = S(e4, "FORBID_TAGS") ? O({}, e4.FORBID_TAGS, dt2) : P({}), je2 = S(e4, "FORBID_ATTR") ? O({}, e4.FORBID_ATTR, dt2) : P({}), Ye2 = !!S(e4, "USE_PROFILES") && e4.USE_PROFILES, Le2 = false !== e4.ALLOW_ARIA_ATTR, Me2 = false !== e4.ALLOW_DATA_ATTR, Ie2 = e4.ALLOW_UNKNOWN_PROTOCOLS || false, Ne2 = false !== e4.ALLOW_SELF_CLOSE_IN_ATTR, Re2 = e4.SAFE_FOR_TEMPLATES || false, Fe2 = false !== e4.SAFE_FOR_XML, De2 = e4.WHOLE_DOCUMENT || false, $e2 = e4.RETURN_DOM || false, He2 = e4.RETURN_DOM_FRAGMENT || false, Be2 = e4.RETURN_TRUSTED_TYPE || false, ze2 = e4.FORCE_BODY || false, We2 = false !== e4.SANITIZE_DOM, qe2 = e4.SANITIZE_NAMED_PROPS || false, Ge2 = false !== e4.KEEP_CONTENT, Je2 = e4.IN_PLACE || false, Ce2 = e4.ALLOWED_URI_REGEXP || K, ot2 = e4.NAMESPACE || rt2, lt2 = e4.MATHML_TEXT_INTEGRATION_POINTS || lt2, ct2 = e4.HTML_INTEGRATION_POINTS || ct2, ke2 = e4.CUSTOM_ELEMENT_HANDLING || {}, e4.CUSTOM_ELEMENT_HANDLING && gt2(e4.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ke2.tagNameCheck = e4.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e4.CUSTOM_ELEMENT_HANDLING && gt2(e4.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ke2.attributeNameCheck = e4.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e4.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e4.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (ke2.allowCustomizedBuiltInElements = e4.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Re2 && (Me2 = false), He2 && ($e2 = true), Ye2 && (Se2 = O({}, U), Ee2 = u(null), true === Ye2.html && (O(Se2, M), O(Ee2, z)), true === Ye2.svg && (O(Se2, I), O(Ee2, $), O(Ee2, B)), true === Ye2.svgFilters && (O(Se2, N), O(Ee2, $), O(Ee2, B)), true === Ye2.mathMl && (O(Se2, F), O(Ee2, H), O(Ee2, B))), S(e4, "ADD_TAGS") || (Pe2.tagCheck = null), S(e4, "ADD_ATTR") || (Pe2.attributeCheck = null), e4.ADD_TAGS && ("function" == typeof e4.ADD_TAGS ? Pe2.tagCheck = e4.ADD_TAGS : (Se2 === Te2 && (Se2 = P(Se2)), O(Se2, e4.ADD_TAGS, dt2))), e4.ADD_ATTR && ("function" == typeof e4.ADD_ATTR ? Pe2.attributeCheck = e4.ADD_ATTR : (Ee2 === Ae2 && (Ee2 = P(Ee2)), O(Ee2, e4.ADD_ATTR, dt2))), e4.ADD_URI_SAFE_ATTR && O(Qe2, e4.ADD_URI_SAFE_ATTR, dt2), e4.FORBID_CONTENTS && (Ke2 === Ve2 && (Ke2 = P(Ke2)), O(Ke2, e4.FORBID_CONTENTS, dt2)), e4.ADD_FORBID_CONTENTS && (Ke2 === Ve2 && (Ke2 = P(Ke2)), O(Ke2, e4.ADD_FORBID_CONTENTS, dt2)), Ge2 && (Se2["#text"] = true), De2 && O(Se2, ["html", "head", "body"]), Se2.table && (O(Se2, ["tbody"]), delete Oe2.tbody), e4.TRUSTED_TYPES_POLICY) {
                  if ("function" != typeof e4.TRUSTED_TYPES_POLICY.createHTML) throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                  if ("function" != typeof e4.TRUSTED_TYPES_POLICY.createScriptURL) throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                  ae2 = e4.TRUSTED_TYPES_POLICY, le2 = ae2.createHTML("");
                } else void 0 === ae2 && (ae2 = function(e5, t3) {
                  if ("object" != typeof e5 || "function" != typeof e5.createPolicy) return null;
                  let n3 = null;
                  const r3 = "data-tt-policy-suffix";
                  t3 && t3.hasAttribute(r3) && (n3 = t3.getAttribute(r3));
                  const o3 = "dompurify" + (n3 ? "#" + n3 : "");
                  try {
                    return e5.createPolicy(o3, { createHTML: (e6) => e6, createScriptURL: (e6) => e6 });
                  } catch (e6) {
                    return console.warn("TrustedTypes policy " + o3 + " could not be created."), null;
                  }
                }(q2, s2)), null !== ae2 && "string" == typeof le2 && (le2 = ae2.createHTML(""));
                l && l(e4), pt2 = e4;
              }
            }, vt2 = O({}, [...I, ...N, ...R]), bt2 = O({}, [...F, ...D]), _t2 = function(e4) {
              g(r2.removed, { element: e4 });
              try {
                Q2(e4).removeChild(e4);
              } catch (t3) {
                Y2(e4);
              }
            }, wt2 = function(e4, t3) {
              try {
                g(r2.removed, { attribute: t3.getAttributeNode(e4), from: t3 });
              } catch (e5) {
                g(r2.removed, { attribute: null, from: t3 });
              }
              if (t3.removeAttribute(e4), "is" === e4) if ($e2 || He2) try {
                _t2(t3);
              } catch (e5) {
              }
              else try {
                t3.setAttribute(e4, "");
              } catch (e5) {
              }
            }, xt2 = function(e4) {
              let t3 = null, n3 = null;
              if (ze2) e4 = "<remove></remove>" + e4;
              else {
                const t4 = _(e4, /^[\r\n\t ]+/);
                n3 = t4 && t4[0];
              }
              "application/xhtml+xml" === ht2 && ot2 === rt2 && (e4 = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e4 + "</body></html>");
              const r3 = ae2 ? ae2.createHTML(e4) : e4;
              if (ot2 === rt2) try {
                t3 = new W2().parseFromString(r3, ht2);
              } catch (e5) {
              }
              if (!t3 || !t3.documentElement) {
                t3 = ce2.createDocument(ot2, "template", null);
                try {
                  t3.documentElement.innerHTML = it2 ? le2 : r3;
                } catch (e5) {
                }
              }
              const i3 = t3.body || t3.documentElement;
              return e4 && n3 && i3.insertBefore(o2.createTextNode(n3), i3.childNodes[0] || null), ot2 === rt2 ? fe2.call(t3, De2 ? "html" : "body")[0] : De2 ? t3.documentElement : i3;
            }, Ct2 = function(e4) {
              return ue2.call(e4.ownerDocument || e4, e4, A2.SHOW_ELEMENT | A2.SHOW_COMMENT | A2.SHOW_TEXT | A2.SHOW_PROCESSING_INSTRUCTION | A2.SHOW_CDATA_SECTION, null);
            }, St2 = function(e4) {
              return e4 instanceof j2 && ("string" != typeof e4.nodeName || "string" != typeof e4.textContent || "function" != typeof e4.removeChild || !(e4.attributes instanceof k2) || "function" != typeof e4.removeAttribute || "function" != typeof e4.setAttribute || "string" != typeof e4.namespaceURI || "function" != typeof e4.insertBefore || "function" != typeof e4.hasChildNodes);
            }, Tt2 = function(e4) {
              return "function" == typeof h2 && e4 instanceof h2;
            };
            function Et2(e4, t3, n3) {
              d(e4, (e5) => {
                e5.call(r2, t3, n3, pt2);
              });
            }
            const At2 = function(e4) {
              let t3 = null;
              if (Et2(pe2.beforeSanitizeElements, e4, null), St2(e4)) return _t2(e4), true;
              const n3 = dt2(e4.nodeName);
              if (Et2(pe2.uponSanitizeElement, e4, { tagName: n3, allowedTags: Se2 }), Fe2 && e4.hasChildNodes() && !Tt2(e4.firstElementChild) && T(/<[/\w!]/g, e4.innerHTML) && T(/<[/\w!]/g, e4.textContent)) return _t2(e4), true;
              if (e4.nodeType === re) return _t2(e4), true;
              if (Fe2 && e4.nodeType === oe && T(/<[/\w]/g, e4.data)) return _t2(e4), true;
              if (!(Pe2.tagCheck instanceof Function && Pe2.tagCheck(n3)) && (!Se2[n3] || Oe2[n3])) {
                if (!Oe2[n3] && Ot2(n3)) {
                  if (ke2.tagNameCheck instanceof RegExp && T(ke2.tagNameCheck, n3)) return false;
                  if (ke2.tagNameCheck instanceof Function && ke2.tagNameCheck(n3)) return false;
                }
                if (Ge2 && !Ke2[n3]) {
                  const t4 = Q2(e4) || e4.parentNode, n4 = X2(e4) || e4.childNodes;
                  if (n4 && t4) {
                    for (let r3 = n4.length - 1; r3 >= 0; --r3) {
                      const o3 = J2(n4[r3], true);
                      o3.__removalCount = (e4.__removalCount || 0) + 1, t4.insertBefore(o3, V2(e4));
                    }
                  }
                }
                return _t2(e4), true;
              }
              return e4 instanceof f2 && !function(e5) {
                let t4 = Q2(e5);
                t4 && t4.tagName || (t4 = { namespaceURI: ot2, tagName: "template" });
                const n4 = v(e5.tagName), r3 = v(t4.tagName);
                return !!st2[e5.namespaceURI] && (e5.namespaceURI === nt2 ? t4.namespaceURI === rt2 ? "svg" === n4 : t4.namespaceURI === tt2 ? "svg" === n4 && ("annotation-xml" === r3 || lt2[r3]) : Boolean(vt2[n4]) : e5.namespaceURI === tt2 ? t4.namespaceURI === rt2 ? "math" === n4 : t4.namespaceURI === nt2 ? "math" === n4 && ct2[r3] : Boolean(bt2[n4]) : e5.namespaceURI === rt2 ? !(t4.namespaceURI === nt2 && !ct2[r3]) && !(t4.namespaceURI === tt2 && !lt2[r3]) && !bt2[n4] && (ut2[n4] || !vt2[n4]) : !("application/xhtml+xml" !== ht2 || !st2[e5.namespaceURI]));
              }(e4) ? (_t2(e4), true) : "noscript" !== n3 && "noembed" !== n3 && "noframes" !== n3 || !T(/<\/no(script|embed|frames)/i, e4.innerHTML) ? (Re2 && e4.nodeType === ne && (t3 = e4.textContent, d([me2, ge2, ye2], (e5) => {
                t3 = w(t3, e5, " ");
              }), e4.textContent !== t3 && (g(r2.removed, { element: e4.cloneNode() }), e4.textContent = t3)), Et2(pe2.afterSanitizeElements, e4, null), false) : (_t2(e4), true);
            }, kt2 = function(e4, t3, n3) {
              if (je2[t3]) return false;
              if (We2 && ("id" === t3 || "name" === t3) && (n3 in o2 || n3 in mt2)) return false;
              if (Me2 && !je2[t3] && T(ve2, t3)) ;
              else if (Le2 && T(be2, t3)) ;
              else if (Pe2.attributeCheck instanceof Function && Pe2.attributeCheck(t3, e4)) ;
              else if (!Ee2[t3] || je2[t3]) {
                if (!(Ot2(e4) && (ke2.tagNameCheck instanceof RegExp && T(ke2.tagNameCheck, e4) || ke2.tagNameCheck instanceof Function && ke2.tagNameCheck(e4)) && (ke2.attributeNameCheck instanceof RegExp && T(ke2.attributeNameCheck, t3) || ke2.attributeNameCheck instanceof Function && ke2.attributeNameCheck(t3, e4)) || "is" === t3 && ke2.allowCustomizedBuiltInElements && (ke2.tagNameCheck instanceof RegExp && T(ke2.tagNameCheck, n3) || ke2.tagNameCheck instanceof Function && ke2.tagNameCheck(n3)))) return false;
              } else if (Qe2[t3]) ;
              else if (T(Ce2, w(n3, we2, ""))) ;
              else if ("src" !== t3 && "xlink:href" !== t3 && "href" !== t3 || "script" === e4 || 0 !== x(n3, "data:") || !Xe2[e4]) {
                if (Ie2 && !T(_e2, w(n3, we2, ""))) ;
                else if (n3) return false;
              } else ;
              return true;
            }, Ot2 = function(e4) {
              return "annotation-xml" !== e4 && _(e4, xe2);
            }, jt2 = function(e4) {
              Et2(pe2.beforeSanitizeAttributes, e4, null);
              const { attributes: t3 } = e4;
              if (!t3 || St2(e4)) return;
              const n3 = { attrName: "", attrValue: "", keepAttr: true, allowedAttributes: Ee2, forceKeepAttr: void 0 };
              let o3 = t3.length;
              for (; o3--; ) {
                const i3 = t3[o3], { name: s3, namespaceURI: a3, value: l2 } = i3, c3 = dt2(s3), u2 = l2;
                let h3 = "value" === s3 ? u2 : C(u2);
                if (n3.attrName = c3, n3.attrValue = h3, n3.keepAttr = true, n3.forceKeepAttr = void 0, Et2(pe2.uponSanitizeAttribute, e4, n3), h3 = n3.attrValue, !qe2 || "id" !== c3 && "name" !== c3 || (wt2(s3, e4), h3 = "user-content-" + h3), Fe2 && T(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, h3)) {
                  wt2(s3, e4);
                  continue;
                }
                if ("attributename" === c3 && _(h3, "href")) {
                  wt2(s3, e4);
                  continue;
                }
                if (n3.forceKeepAttr) continue;
                if (!n3.keepAttr) {
                  wt2(s3, e4);
                  continue;
                }
                if (!Ne2 && T(/\/>/i, h3)) {
                  wt2(s3, e4);
                  continue;
                }
                Re2 && d([me2, ge2, ye2], (e5) => {
                  h3 = w(h3, e5, " ");
                });
                const f3 = dt2(e4.nodeName);
                if (kt2(f3, c3, h3)) {
                  if (ae2 && "object" == typeof q2 && "function" == typeof q2.getAttributeType) if (a3) ;
                  else switch (q2.getAttributeType(f3, c3)) {
                    case "TrustedHTML":
                      h3 = ae2.createHTML(h3);
                      break;
                    case "TrustedScriptURL":
                      h3 = ae2.createScriptURL(h3);
                  }
                  if (h3 !== u2) try {
                    a3 ? e4.setAttributeNS(a3, s3, h3) : e4.setAttribute(s3, h3), St2(e4) ? _t2(e4) : m(r2.removed);
                  } catch (t4) {
                    wt2(s3, e4);
                  }
                } else wt2(s3, e4);
              }
              Et2(pe2.afterSanitizeAttributes, e4, null);
            }, Pt2 = function e4(t3) {
              let n3 = null;
              const r3 = Ct2(t3);
              for (Et2(pe2.beforeSanitizeShadowDOM, t3, null); n3 = r3.nextNode(); ) Et2(pe2.uponSanitizeShadowNode, n3, null), At2(n3), jt2(n3), n3.content instanceof a2 && e4(n3.content);
              Et2(pe2.afterSanitizeShadowDOM, t3, null);
            };
            return r2.sanitize = function(e4) {
              let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n3 = null, o3 = null, s3 = null, l2 = null;
              if (it2 = !e4, it2 && (e4 = "<!-->"), "string" != typeof e4 && !Tt2(e4)) {
                if ("function" != typeof e4.toString) throw E("toString is not a function");
                if ("string" != typeof (e4 = e4.toString())) throw E("dirty is not a string, aborting");
              }
              if (!r2.isSupported) return e4;
              if (Ue2 || yt2(t3), r2.removed = [], "string" == typeof e4 && (Je2 = false), Je2) {
                if (e4.nodeName) {
                  const t4 = dt2(e4.nodeName);
                  if (!Se2[t4] || Oe2[t4]) throw E("root node is forbidden and cannot be sanitized in-place");
                }
              } else if (e4 instanceof h2) n3 = xt2("<!---->"), o3 = n3.ownerDocument.importNode(e4, true), o3.nodeType === te && "BODY" === o3.nodeName || "HTML" === o3.nodeName ? n3 = o3 : n3.appendChild(o3);
              else {
                if (!$e2 && !Re2 && !De2 && -1 === e4.indexOf("<")) return ae2 && Be2 ? ae2.createHTML(e4) : e4;
                if (n3 = xt2(e4), !n3) return $e2 ? null : Be2 ? le2 : "";
              }
              n3 && ze2 && _t2(n3.firstChild);
              const c3 = Ct2(Je2 ? e4 : n3);
              for (; s3 = c3.nextNode(); ) At2(s3), jt2(s3), s3.content instanceof a2 && Pt2(s3.content);
              if (Je2) return e4;
              if ($e2) {
                if (He2) for (l2 = he2.call(n3.ownerDocument); n3.firstChild; ) l2.appendChild(n3.firstChild);
                else l2 = n3;
                return (Ee2.shadowroot || Ee2.shadowrootmode) && (l2 = de2.call(i2, l2, true)), l2;
              }
              let u2 = De2 ? n3.outerHTML : n3.innerHTML;
              return De2 && Se2["!doctype"] && n3.ownerDocument && n3.ownerDocument.doctype && n3.ownerDocument.doctype.name && T(Z, n3.ownerDocument.doctype.name) && (u2 = "<!DOCTYPE " + n3.ownerDocument.doctype.name + ">\n" + u2), Re2 && d([me2, ge2, ye2], (e5) => {
                u2 = w(u2, e5, " ");
              }), ae2 && Be2 ? ae2.createHTML(u2) : u2;
            }, r2.setConfig = function() {
              yt2(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), Ue2 = true;
            }, r2.clearConfig = function() {
              pt2 = null, Ue2 = false;
            }, r2.isValidAttribute = function(e4, t3, n3) {
              pt2 || yt2({});
              const r3 = dt2(e4), o3 = dt2(t3);
              return kt2(r3, o3, n3);
            }, r2.addHook = function(e4, t3) {
              "function" == typeof t3 && g(pe2[e4], t3);
            }, r2.removeHook = function(e4, t3) {
              if (void 0 !== t3) {
                const n3 = p(pe2[e4], t3);
                return -1 === n3 ? void 0 : y(pe2[e4], n3, 1)[0];
              }
              return m(pe2[e4]);
            }, r2.removeHooks = function(e4) {
              pe2[e4] = [];
            }, r2.removeAllHooks = function() {
              pe2 = { afterSanitizeAttributes: [], afterSanitizeElements: [], afterSanitizeShadowDOM: [], beforeSanitizeAttributes: [], beforeSanitizeElements: [], beforeSanitizeShadowDOM: [], uponSanitizeAttribute: [], uponSanitizeElement: [], uponSanitizeShadowNode: [] };
            }, r2;
          })();
          var ae = n(314), le = n.n(ae);
          const ce = /([\p{Ll}\d])(\p{Lu})/gu, ue = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu, he = /(\d)\p{Ll}|(\p{L})\d/u, fe = /[^\p{L}\d]+/giu, de = "$1\0$2";
          function pe(e3) {
            let t3 = e3.trim();
            t3 = t3.replace(ce, de).replace(ue, de), t3 = t3.replace(fe, "\0");
            let n2 = 0, r2 = t3.length;
            for (; "\0" === t3.charAt(n2); ) n2++;
            if (n2 === r2) return [];
            for (; "\0" === t3.charAt(r2 - 1); ) r2--;
            return t3.slice(n2, r2).split(/\0/g);
          }
          function me(e3) {
            const t3 = pe(e3);
            for (let e4 = 0; e4 < t3.length; e4++) {
              const n2 = t3[e4], r2 = he.exec(n2);
              if (r2) {
                const o2 = r2.index + (r2[1] ?? r2[2]).length;
                t3.splice(e4, 1, n2.slice(0, o2), n2.slice(o2));
              }
            }
            return t3;
          }
          function ge(e3, t3) {
            const [n2, r2, o2] = ve(e3, t3);
            return n2 + r2.map(ye(t3?.locale)).join(t3?.delimiter ?? " ") + o2;
          }
          function ye(e3) {
            return false === e3 ? (e4) => e4.toLowerCase() : (t3) => t3.toLocaleLowerCase(e3);
          }
          function ve(e3, t3 = {}) {
            const n2 = t3.split ?? (t3.separateNumbers ? me : pe), r2 = t3.prefixCharacters ?? "", o2 = t3.suffixCharacters ?? "";
            let i2 = 0, s2 = e3.length;
            for (; i2 < e3.length; ) {
              const t4 = e3.charAt(i2);
              if (!r2.includes(t4)) break;
              i2++;
            }
            for (; s2 > i2; ) {
              const t4 = s2 - 1, n3 = e3.charAt(t4);
              if (!o2.includes(n3)) break;
              s2 = t4;
            }
            return [e3.slice(0, i2), n2(e3.slice(i2, s2)), e3.slice(s2)];
          }
          const be = n(138);
          function _e(e3, t3, n2) {
            return (t3 = function(e4) {
              var t4 = function(e5, t5) {
                if ("object" != typeof e5 || !e5) return e5;
                var n3 = e5[Symbol.toPrimitive];
                if (void 0 !== n3) {
                  var r2 = n3.call(e5, t5 || "default");
                  if ("object" != typeof r2) return r2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t5 ? String : Number)(e5);
              }(e4, "string");
              return "symbol" == typeof t4 ? t4 : t4 + "";
            }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          const we = "win32" === navigator.platform.toLowerCase() ? e2.win32 : e2.posix;
          const xe = function(e3, t3) {
            return ge(e3, { delimiter: "_", ...t3 });
          };
          const Ce = { DEBUG: 10, INFO: 20, WARN: 30, ERROR: 40 };
          function Se(e3) {
            if (null == e3) return String(e3);
            if (e3 instanceof Error) return `${e3.message}${e3.stack ? "\n" + e3.stack : ""}`;
            if ("string" == typeof e3) return e3;
            if ("object" == typeof e3) try {
              const t3 = /* @__PURE__ */ new WeakSet();
              return JSON.stringify(e3, (e4, n2) => {
                if ("object" == typeof n2 && null !== n2) {
                  if (t3.has(n2)) return "[Circular]";
                  t3.add(n2);
                }
                return n2;
              });
            } catch (t3) {
              try {
                return String(e3);
              } catch (e4) {
                return "[Unserializable]";
              }
            }
            try {
              return String(e3);
            } catch (e4) {
              return "[Unserializable]";
            }
          }
          function Te(e3, ...t3) {
            try {
              const n2 = new URL(e3);
              if (!n2.origin) throw new Error(null);
              const r2 = we.join(e3.substr(n2.origin.length), ...t3);
              return n2.origin + r2;
            } catch (n2) {
              return we.join(e3, ...t3);
            }
          }
          function Ee(e3, t3) {
            let n2, r2, o2 = false;
            const i2 = (t4) => (n3) => {
              e3 && clearTimeout(e3), t4(n3), o2 = true;
            }, s2 = new Promise((o3, s3) => {
              n2 = i2(o3), r2 = i2(s3), e3 && (e3 = setTimeout(() => r2(new Error(`[deferred timeout] ${t3}`)), e3));
            });
            return { created: Date.now(), setTag: (e4) => t3 = e4, resolve: n2, reject: r2, promise: s2, get settled() {
              return o2;
            } };
          }
          const Ae = /* @__PURE__ */ new Map();
          function ke(e3) {
            if ("string" == typeof e3) return e3.trim().replace(/\s/g, "_").toLowerCase();
          }
          window.__injectedUIEffects = Ae;
          var Oe = n(221), je = n.n(Oe);
          function Pe(e3, t3, n2) {
            return (t3 = function(e4) {
              var t4 = function(e5, t5) {
                if ("object" != typeof e5 || !e5) return e5;
                var n3 = e5[Symbol.toPrimitive];
                if (void 0 !== n3) {
                  var r2 = n3.call(e5, t5 || "default");
                  if ("object" != typeof r2) return r2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t5 ? String : Number)(e5);
              }(e4, "string");
              return "symbol" == typeof t4 ? t4 : t4 + "";
            }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          const Le = "application/x-postmate-v1+json";
          let Me = 0;
          const Ie = { handshake: 1, "handshake-reply": 1, call: 1, emit: 1, reply: 1, request: 1 }, Ne = (e3, t3) => ("string" != typeof t3 || "*" === t3 || e3.origin === t3) && (!!e3.data && (("object" != typeof e3.data || "postmate" in e3.data) && (e3.data.type === Le && !!Ie[e3.data.postmate])));
          class Re {
            addTransportListener(e3) {
              var t3, n2;
              this.messagePort ? (console.debug("[DEBUG] Using MessagePort for communication:", this.frame.src), this.messagePort.addEventListener("message", e3), null === (t3 = (n2 = this.messagePort).start) || void 0 === t3 || t3.call(n2)) : (console.debug("[DEBUG] Using postMessage for communication:", this.frame.src), this.parent.addEventListener("message", e3, false));
            }
            removeTransportListener(e3) {
              this.messagePort ? this.messagePort.removeEventListener("message", e3) : this.parent.removeEventListener("message", e3, false);
            }
            postToChild(e3) {
              this.messagePort ? this.messagePort.postMessage(e3) : this.child.postMessage(e3, this.childOrigin);
            }
            constructor(e3) {
              Pe(this, "parent", void 0), Pe(this, "frame", void 0), Pe(this, "child", void 0), Pe(this, "events", {}), Pe(this, "childOrigin", void 0), Pe(this, "listener", void 0), Pe(this, "messagePort", void 0), this.parent = e3.parent, this.frame = e3.frame, this.child = e3.child, this.childOrigin = e3.childOrigin, this.messagePort = e3.messagePort, this.listener = (e4) => {
                if (this.messagePort) {
                  if (null == e4 || !e4.data) return false;
                  if ("object" == typeof e4.data && !("postmate" in e4.data)) return false;
                  if (e4.data.type !== Le) return false;
                  if (!Ie[e4.data.postmate]) return false;
                } else if (!Ne(e4, this.childOrigin)) return false;
                const { data: t3, name: n2 } = ((e4 || {}).data || {}).value || {};
                "emit" === e4.data.postmate && n2 in this.events && this.events[n2].forEach((e5) => {
                  e5.call(this, t3);
                });
              }, this.addTransportListener(this.listener);
            }
            get(e3, ...t3) {
              return new Promise((n2, r2) => {
                const o2 = ++Me, i2 = "number" == typeof De.requestTimeout ? De.requestTimeout : 1e4;
                let s2;
                const a2 = (e4) => {
                  var t4;
                  (null == e4 || null === (t4 = e4.data) || void 0 === t4 ? void 0 : t4.uid) === o2 && "reply" === e4.data.postmate && (this.removeTransportListener(a2), s2 && clearTimeout(s2), e4.data.error ? r2(e4.data.error) : n2(e4.data.value));
                };
                this.addTransportListener(a2), i2 > 0 && (s2 = setTimeout(() => {
                  this.removeTransportListener(a2), r2(new Error(`Postmate: request timeout (${i2}ms)`));
                }, i2)), this.postToChild({ postmate: "request", type: Le, property: e3, args: t3, uid: o2 });
              });
            }
            call(e3, t3) {
              this.postToChild({ postmate: "call", type: Le, property: e3, data: t3 });
            }
            on(e3, t3) {
              this.events[e3] || (this.events[e3] = []), this.events[e3].push(t3);
            }
            destroy() {
              this.removeTransportListener(this.listener);
              try {
                var e3;
                null === (e3 = this.messagePort) || void 0 === e3 || e3.close();
              } catch (e4) {
              }
              this.frame.parentNode.removeChild(this.frame);
            }
          }
          class Fe {
            addTransportListener(e3) {
              var t3, n2;
              this.messagePort ? (this.messagePort.addEventListener("message", e3), null === (t3 = (n2 = this.messagePort).start) || void 0 === t3 || t3.call(n2)) : this.child.addEventListener("message", e3, false);
            }
            postToParent(e3, t3) {
              if (this.messagePort) this.messagePort.postMessage(e3);
              else if (null != t3 && t3.source) {
                const n2 = "null" === t3.origin ? "*" : t3.origin;
                t3.source.postMessage(e3, n2);
              } else this.parent.postMessage(e3, this.parentOrigin);
            }
            constructor(e3) {
              if (Pe(this, "model", void 0), Pe(this, "parent", void 0), Pe(this, "parentOrigin", void 0), Pe(this, "child", void 0), Pe(this, "messagePort", void 0), Pe(this, "listener", void 0), this.model = e3.model, this.parent = e3.parent, this.parentOrigin = e3.parentOrigin, this.child = e3.child, this.messagePort = e3.messagePort, this.listener = (e4) => {
                if (this.messagePort) {
                  if (null == e4 || !e4.data) return;
                  if ("object" == typeof e4.data && !("postmate" in e4.data)) return;
                  if (e4.data.type !== Le) return;
                  if (!Ie[e4.data.postmate]) return;
                } else if (!Ne(e4, this.parentOrigin)) return;
                const { property: t3, uid: n2, data: r2, args: o2 } = e4.data;
                "call" !== e4.data.postmate ? ((e5, t4, n3) => {
                  const r3 = "function" == typeof e5[t4] ? e5[t4].apply(null, n3) : e5[t4];
                  return Promise.resolve(r3);
                })(this.model, t3, o2).then((r3) => {
                  this.postToParent({ property: t3, postmate: "reply", type: Le, uid: n2, value: r3 }, e4);
                }).catch((r3) => {
                  this.postToParent({ property: t3, postmate: "reply", type: Le, uid: n2, error: r3 }, e4);
                }) : t3 in this.model && "function" == typeof this.model[t3] && this.model[t3](r2);
              }, this.addTransportListener(this.listener), !this.messagePort) {
                const e4 = (t3) => {
                  var n2;
                  const r2 = null === (n2 = t3.detail) || void 0 === n2 ? void 0 : n2.port;
                  var o2, i2;
                  r2 && (this.child.removeEventListener("message", this.listener, false), this.messagePort = r2, this.messagePort.addEventListener("message", this.listener), null === (o2 = (i2 = this.messagePort).start) || void 0 === o2 || o2.call(i2), this.child.removeEventListener("postmate:channel-ready", e4));
                };
                this.child.addEventListener("postmate:channel-ready", e4);
              }
            }
            emit(e3, t3) {
              this.postToParent({ postmate: "emit", type: Le, value: { name: e3, data: t3 } });
            }
          }
          class De {
            constructor(e3) {
              Pe(this, "container", void 0), Pe(this, "parent", void 0), Pe(this, "frame", void 0), Pe(this, "child", void 0), Pe(this, "childOrigin", void 0), Pe(this, "url", void 0), Pe(this, "model", void 0), Pe(this, "messagePort", void 0), Pe(this, "enableMessageChannel", void 0), this.container = e3.container, this.url = e3.url, this.parent = window, this.frame = document.createElement("iframe"), e3.id && (this.frame.id = e3.id), e3.name && (this.frame.name = e3.name), e3.allow && (this.frame.allow = e3.allow), this.frame.classList.add.apply(this.frame.classList, e3.classListArray || []), this.container.appendChild(this.frame), this.child = this.frame.contentWindow, this.model = e3.model || {}, this.enableMessageChannel = !!e3.enableMessageChannel;
            }
            sendHandshake(e3) {
              const t3 = ((e4) => {
                const t4 = document.createElement("a");
                if (t4.href = e4, "file:" === t4.protocol) return "*";
                const n3 = t4.protocol.length > 4 ? t4.protocol : window.location.protocol, r3 = t4.host.length ? "80" === t4.port || "443" === t4.port ? t4.hostname : t4.host : window.location.host;
                return t4.origin || `${n3}//${r3}`;
              })(e3 = e3 || this.url);
              let n2, r2 = 0;
              return new Promise((o2, i2) => {
                const s2 = "undefined" != typeof MessageChannel && "function" == typeof MessageChannel, a2 = this.enableMessageChannel && s2, l2 = (e4) => {
                  if (!Ne(e4, t3)) return false;
                  if ("handshake-reply" === e4.data.postmate) {
                    var r3;
                    if (clearInterval(n2), this.parent.removeEventListener("message", l2, false), this.childOrigin = e4.origin, a2) {
                      if (null != e4 && null !== (r3 = e4.ports) && void 0 !== r3 && r3.length) {
                        const t4 = e4.ports[0];
                        var s3, c3;
                        if (t4) this.messagePort = t4, null === (s3 = (c3 = this.messagePort).start) || void 0 === s3 || s3.call(c3);
                      } else if (e4.data.acceptsMessageChannel) {
                        var u2, h2;
                        const e5 = new MessageChannel();
                        this.messagePort = e5.port1, null === (u2 = (h2 = this.messagePort).start) || void 0 === u2 || u2.call(h2), this.child.postMessage({ postmate: "setup-channel", type: Le }, t3, [e5.port2]);
                      }
                    }
                    return o2(new Re(this));
                  }
                  return i2("Failed handshake");
                };
                this.parent.addEventListener("message", l2, false);
                const c2 = () => {
                  r2++;
                  const e4 = { postmate: "handshake", type: Le, model: this.model, enableMessageChannel: a2 ? 1 : 0 };
                  this.child.postMessage(e4, t3), 5 === r2 && clearInterval(n2);
                };
                this.frame.addEventListener("load", () => {
                  c2(), n2 = setInterval(c2, 500);
                }), this.frame.src = e3;
              });
            }
            destroy() {
              try {
                var e3;
                null === (e3 = this.messagePort) || void 0 === e3 || e3.close();
              } catch (e4) {
              }
              this.frame.parentNode.removeChild(this.frame);
            }
          }
          Pe(De, "debug", false), Pe(De, "requestTimeout", 1e4), Pe(De, "Model", void 0);
          class Ue {
            constructor(e3) {
              Pe(this, "child", void 0), Pe(this, "model", void 0), Pe(this, "parent", void 0), Pe(this, "parentOrigin", void 0), Pe(this, "messagePort", void 0), Pe(this, "enableMessageChannel", void 0), this.child = window, this.model = e3, this.parent = this.child.parent, this.enableMessageChannel = false;
            }
            sendHandshakeReply() {
              return new Promise((e3, t3) => {
                const n2 = (r2) => {
                  if (r2.data.postmate) {
                    if ("handshake" === r2.data.postmate) {
                      var o2;
                      0, this.child.removeEventListener("message", n2, false), this.enableMessageChannel = !(null === (o2 = r2.data) || void 0 === o2 || !o2.enableMessageChannel), this.parentOrigin = r2.origin;
                      const t4 = "undefined" != typeof MessageChannel && "function" == typeof MessageChannel;
                      r2.source.postMessage({ postmate: "handshake-reply", type: Le, acceptsMessageChannel: this.enableMessageChannel && t4 ? 1 : 0 }, "null" === r2.origin ? "*" : r2.origin);
                      const i2 = r2.data.model;
                      if (i2 && Object.keys(i2).forEach((e4) => {
                        this.model[e4] = i2[e4];
                      }), this.enableMessageChannel && t4) {
                        const e4 = (t5) => {
                          var n3, r3;
                          if ("setup-channel" === (null === (n3 = t5.data) || void 0 === n3 ? void 0 : n3.postmate) && (null === (r3 = t5.data) || void 0 === r3 ? void 0 : r3.type) === Le && t5.origin === this.parentOrigin) {
                            var o3;
                            const n4 = null == t5 || null === (o3 = t5.ports) || void 0 === o3 ? void 0 : o3[0];
                            var i3, s2;
                            if (n4) this.messagePort = n4, null === (i3 = (s2 = this.messagePort).start) || void 0 === i3 || i3.call(s2), this.child.dispatchEvent(new CustomEvent("postmate:channel-ready", { detail: { port: this.messagePort } }));
                            this.child.removeEventListener("message", e4, false);
                          }
                        };
                        this.child.addEventListener("message", e4, false);
                      }
                      return e3(new Fe(this));
                    }
                    return t3("Handshake Reply Failed");
                  }
                };
                this.child.addEventListener("message", n2, false);
              });
            }
          }
          function ze(e3, t3, n2) {
            return (t3 = function(e4) {
              var t4 = function(e5, t5) {
                if ("object" != typeof e5 || !e5) return e5;
                var n3 = e5[Symbol.toPrimitive];
                if (void 0 !== n3) {
                  var r2 = n3.call(e5, t5 || "default");
                  if ("object" != typeof r2) return r2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t5 ? String : Number)(e5);
              }(e4, "string");
              return "symbol" == typeof t4 ? t4 : t4 + "";
            }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          const { importHTML: $e, createSandboxContainer: He } = window.QSandbox || {};
          function Be(e3, t3) {
            return e3.startsWith("http") ? fetch(e3, t3) : (e3 = e3.replace("file://", ""), new Promise(async (t4, n2) => {
              try {
                const n3 = await window.apis.doAction(["readFile", e3]);
                t4({ text: () => n3 });
              } catch (e4) {
                console.error(e4), n2(e4);
              }
            }));
          }
          class We extends be {
            constructor(e3) {
              super(), ze(this, "_pluginLocal", void 0), ze(this, "_frame", void 0), ze(this, "_root", void 0), ze(this, "_loaded", false), ze(this, "_unmountFns", []), this._pluginLocal = e3, e3._dispose(() => {
                this._unmount();
              });
            }
            async load() {
              const { name: e3, entry: t3 } = this._pluginLocal.options;
              if (this.loaded || !t3) return;
              const { template: n2, execScripts: r2 } = await $e(t3, { fetch: Be });
              this._mount(n2, document.body);
              const o2 = He(e3, { elementGetter: () => {
                var e4;
                return null === (e4 = this._root) || void 0 === e4 ? void 0 : e4.firstChild;
              } }).instance.proxy;
              o2.__shadow_mode__ = true, o2.LSPluginLocal = this._pluginLocal, o2.LSPluginShadow = this, o2.LSPluginUser = o2.logseq = new wi(this._pluginLocal.toJSON(), this._pluginLocal.caller);
              const i2 = await r2(o2, true);
              this._unmountFns.push(i2.unmount), this._loaded = true;
            }
            _mount(e3, t3) {
              const n2 = this._frame = document.createElement("div");
              n2.classList.add("lsp-shadow-sandbox"), n2.id = this._pluginLocal.id, this._root = n2.attachShadow({ mode: "open" }), this._root.innerHTML = `<div>${e3}</div>`, t3.appendChild(n2), this.emit("mounted");
            }
            _unmount() {
              for (const e3 of this._unmountFns) e3 && e3.call(null);
            }
            destroy() {
              var e3;
              null === (e3 = this.frame) || void 0 === e3 || null === (e3 = e3.parentNode) || void 0 === e3 || e3.removeChild(this.frame);
            }
            get loaded() {
              return this._loaded;
            }
            get document() {
              var e3;
              return null === (e3 = this._root) || void 0 === e3 ? void 0 : e3.firstChild;
            }
            get frame() {
              return this._frame;
            }
          }
          function qe(e3, t3, n2) {
            return (t3 = function(e4) {
              var t4 = function(e5, t5) {
                if ("object" != typeof e5 || !e5) return e5;
                var n3 = e5[Symbol.toPrimitive];
                if (void 0 !== n3) {
                  var r2 = n3.call(e5, t5 || "default");
                  if ("object" != typeof r2) return r2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t5 ? String : Number)(e5);
              }(e4, "string");
              return "symbol" == typeof t4 ? t4 : t4 + "";
            }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          const Ge = je()("LSPlugin:caller"), Je = "#await#response#", Ye = "#lspmsg#", Ke = "#lspmsg#error#", Ve = "#lspmsg#settings#", Xe = "#lspmsg#beforeunload#", Ze = "#lspmsg#reply#", Qe = "#lspmsg#ready#", et = (e3) => `${Ye}${e3}`;
          class tt extends be {
            constructor(e3) {
              super(), qe(this, "_pluginLocal", void 0), qe(this, "_connected", false), qe(this, "_parent", void 0), qe(this, "_child", void 0), qe(this, "_shadow", void 0), qe(this, "_status", void 0), qe(this, "_userModel", {}), qe(this, "_syncGCTimer", null), qe(this, "_call", void 0), qe(this, "_callUserModel", void 0), qe(this, "_debugTag", ""), this._pluginLocal = e3, e3 && (this._debugTag = e3.debugTag);
            }
            async connectToChild() {
              if (this._connected) return;
              const { shadow: e3 } = this._pluginLocal;
              e3 ? await this._setupShadowSandbox() : await this._setupIframeSandbox();
            }
            async connectToParent(e3 = {}) {
              if (this._connected) return;
              const t3 = this, n2 = null != this._pluginLocal;
              let r2 = 0;
              const o2 = /* @__PURE__ */ new Map(), i2 = Ee(6e4), s2 = this._extendUserModel({ [Qe]: async (e4) => {
                s2[et(null == e4 ? void 0 : e4.pid)] = ({ type: e5, payload: n3 }) => {
                  Ge(`[host (_call) -> *user] ${this._debugTag}`, e5, n3), t3.emit(e5, n3);
                }, await i2.resolve();
              }, [Xe]: async (e4) => {
                const n3 = Ee(1e4);
                t3.emit("beforeunload", Object.assign({ actor: n3 }, e4)), await n3.promise;
              }, [Ve]: async ({ payload: e4 }) => {
                t3.emit("settings:changed", e4);
              }, [Ye]: async ({ ns: e4, type: n3, payload: r3 }) => {
                Ge(`[host (async) -> *user] ${this._debugTag} ns=${e4} type=${n3}`, r3), e4 && e4.startsWith("hook") ? t3.emit(`${e4}:${n3}`, r3) : t3.emit(n3, r3);
              }, [Ze]: ({ _sync: e4, result: t4 }) => {
                if (Ge(`[sync host -> *user] #${e4}`, t4), o2.has(e4)) {
                  const n3 = o2.get(e4);
                  n3 && (null != t4 && t4.hasOwnProperty(Ke) ? n3.reject(t4[Ke]) : n3.resolve(t4), o2.delete(e4));
                }
              }, ...e3 });
              var a2;
              if (n2) return await i2.promise, JSON.parse(JSON.stringify(null === (a2 = this._pluginLocal) || void 0 === a2 ? void 0 : a2.toJSON()));
              const l2 = new Ue(s2).sendHandshakeReply();
              return this._status = "pending", await l2.then((e4) => {
                this._child = e4, this._connected = true, this._call = async (t4, n3 = {}, i3) => {
                  if (i3) {
                    const e5 = ++r2;
                    o2.set(e5, i3), n3._sync = e5, i3.setTag(`async call #${e5}`), Ge(`async call #${e5}`);
                  }
                  return e4.emit(et(s2.baseInfo.id), { type: t4, payload: n3 }), null == i3 ? void 0 : i3.promise;
                }, this._callUserModel = async (e5, t4) => {
                  try {
                    s2[e5](t4);
                  } catch (t5) {
                    Ge(`call user model(${e5}) not exist. #${this._debugTag}`);
                  }
                }, this._syncGCTimer = setInterval(() => {
                  if (o2.size > 100) for (const [e5, t4] of o2) t4.settled && o2.delete(e5);
                }, 18e5);
              }).finally(() => {
                this._status = void 0;
              }), await i2.promise, s2.baseInfo;
            }
            async call(e3, t3 = {}) {
              var n2;
              return null === (n2 = this._call) || void 0 === n2 ? void 0 : n2.call(this, e3, t3);
            }
            async callAsync(e3, t3 = {}) {
              var n2;
              const r2 = Ee(1e4);
              return null === (n2 = this._call) || void 0 === n2 ? void 0 : n2.call(this, e3, t3, r2);
            }
            async callUserModel(e3, ...t3) {
              var n2;
              return null === (n2 = this._callUserModel) || void 0 === n2 ? void 0 : n2.apply(this, [e3, ...t3]);
            }
            async callUserModelAsync(e3, ...t3) {
              var n2;
              return e3 = `${Je}${e3}`, null === (n2 = this._callUserModel) || void 0 === n2 ? void 0 : n2.apply(this, [e3, ...t3]);
            }
            _calcLayoutPosition(e3, t3, n2 = 0) {
              const r2 = Math.max(e3, n2);
              return "number" == typeof t3 ? `${Math.min(100 * r2 / t3, 99)}%` : `${r2}px`;
            }
            async _applyContainerLayout(e3) {
              var t3, n2;
              const r2 = null === (t3 = await (null === (n2 = this._pluginLocal) || void 0 === n2 ? void 0 : n2._loadLayoutsData())) || void 0 === t3 ? void 0 : t3.$$0;
              if (!r2) return;
              const { width: o2, height: i2, left: s2, top: a2, vw: l2, vh: c2 } = r2;
              e3.dataset.inited_layout = "true", Object.assign(e3.style, { width: `${o2}px`, height: `${i2}px`, left: this._calcLayoutPosition(s2, l2), top: this._calcLayoutPosition(a2, c2, 45) });
            }
            async _setupIframeSandbox() {
              var e3;
              const t3 = this._pluginLocal, n2 = t3.id, r2 = `${n2}_lsp_main`, o2 = new URL(t3.options.entry);
              o2.searchParams.set("__v__", t3.options.version), null === (e3 = document.querySelector(`#${r2}`)) || void 0 === e3 || e3.remove();
              const i2 = document.createElement("div");
              i2.classList.add("lsp-iframe-sandbox-container"), i2.id = r2, i2.dataset.pid = n2;
              try {
                await this._applyContainerLayout(i2);
              } catch (e4) {
                console.error("[Restore Layout Error]", e4);
              }
              document.body.appendChild(i2);
              const s2 = new De({ id: n2 + "_iframe", container: i2, url: o2.href, classListArray: ["lsp-iframe-sandbox"], model: { baseInfo: JSON.parse(JSON.stringify(t3.toJSON())) }, allow: t3.options.allow, enableMessageChannel: true });
              this._status = "pending";
              let a2;
              const l2 = new Promise((e4, t4) => {
                a2 = setTimeout(() => {
                  s2.destroy(), t4(new Error("handshake Timeout"));
                }, 8e3);
              });
              try {
                const e4 = await Promise.race([s2.sendHandshake(), l2]);
                this._parent = e4, this._connected = true, this.emit("connected"), e4.on(et(t3.id), ({ type: e5, payload: t4 }) => {
                  var n3, r3;
                  Ge("[user -> *host] ", e5, t4), null === (n3 = this._pluginLocal) || void 0 === n3 || n3.emit(e5, t4 || {}), null === (r3 = this._pluginLocal) || void 0 === r3 || r3.caller.emit(e5, t4 || {});
                }), this._call = async (...n3) => {
                  e4.call(et(t3.id), { type: n3[0], payload: Object.assign(n3[1] || {}, { $$pid: t3.id }) });
                }, this._callUserModel = async (t4, ...n3) => {
                  if (t4.startsWith(Je)) return await e4.get(t4.replace(Je, ""), ...n3);
                  e4.call(t4, null == n3 ? void 0 : n3[0]);
                };
              } catch (e4) {
                throw Ge("[iframe sandbox] error", e4), e4;
              } finally {
                clearTimeout(a2), this._status = void 0;
              }
            }
            async _setupShadowSandbox() {
              const e3 = this._pluginLocal, t3 = this._shadow = new We(e3);
              try {
                this._status = "pending", await t3.load(), this._connected = true, this.emit("connected"), this._call = async (t4, n2 = {}, r2) => {
                  var o2;
                  return r2 && (n2.actor = r2), null === (o2 = this._pluginLocal) || void 0 === o2 || o2.emit(t4, Object.assign(n2, { $$pid: e3.id })), null == r2 ? void 0 : r2.promise;
                }, this._callUserModel = async (...e4) => {
                  var t4;
                  let n2 = e4[0];
                  null !== (t4 = n2) && void 0 !== t4 && t4.startsWith(Je) && (n2 = n2.replace(Je, ""));
                  const r2 = e4[1] || {}, o2 = this._userModel[n2];
                  "function" == typeof o2 && await o2.call(null, r2);
                };
              } catch (e4) {
                throw Ge("[shadow sandbox] error", e4), e4;
              } finally {
                this._status = void 0;
              }
            }
            _extendUserModel(e3) {
              return Object.assign(this._userModel, e3);
            }
            _getSandboxIframeContainer() {
              var e3;
              return null === (e3 = this._parent) || void 0 === e3 ? void 0 : e3.frame.parentNode;
            }
            _getSandboxShadowContainer() {
              var e3;
              return null === (e3 = this._shadow) || void 0 === e3 ? void 0 : e3.frame;
            }
            _getSandboxIframeRoot() {
              var e3;
              return null === (e3 = this._parent) || void 0 === e3 ? void 0 : e3.frame;
            }
            _getSandboxShadowRoot() {
              var e3;
              return null === (e3 = this._shadow) || void 0 === e3 ? void 0 : e3.frame;
            }
            set debugTag(e3) {
              this._debugTag = e3;
            }
            async destroy() {
              var e3;
              let t3 = null;
              this._parent && (t3 = this._getSandboxIframeContainer(), this._parent.destroy()), this._shadow && (t3 = this._getSandboxShadowContainer(), this._shadow.destroy()), null === (e3 = t3) || void 0 === e3 || null === (e3 = e3.parentNode) || void 0 === e3 || e3.removeChild(t3), this._syncGCTimer && (clearInterval(this._syncGCTimer), this._syncGCTimer = null), this._connected = false, this._parent = void 0, this._child = void 0, this._shadow = void 0, this._call = void 0, this._callUserModel = void 0, this._status = void 0;
            }
          }
          function nt(e3, t3, n2) {
            return (t3 = function(e4) {
              var t4 = function(e5, t5) {
                if ("object" != typeof e5 || !e5) return e5;
                var n3 = e5[Symbol.toPrimitive];
                if (void 0 !== n3) {
                  var r2 = n3.call(e5, t5 || "default");
                  if ("object" != typeof r2) return r2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t5 ? String : Number)(e5);
              }(e4, "string");
              return "symbol" == typeof t4 ? t4 : t4 + "";
            }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          class rt {
            constructor(e3, t3) {
              nt(this, "ctx", void 0), nt(this, "opts", void 0), this.ctx = e3, this.opts = t3;
            }
            get ctxId() {
              return this.ctx.baseInfo.id;
            }
            setItem(e3, t3) {
              var n2;
              return this.ctx.caller.callAsync("api:call", { method: "write-plugin-storage-file", args: [this.ctxId, e3, t3, null === (n2 = this.opts) || void 0 === n2 ? void 0 : n2.assets] });
            }
            getItem(e3) {
              var t3;
              return this.ctx.caller.callAsync("api:call", { method: "read-plugin-storage-file", args: [this.ctxId, e3, null === (t3 = this.opts) || void 0 === t3 ? void 0 : t3.assets] });
            }
            removeItem(e3) {
              var t3;
              return this.ctx.caller.callAsync("api:call", { method: "unlink-plugin-storage-file", args: [this.ctxId, e3, null === (t3 = this.opts) || void 0 === t3 ? void 0 : t3.assets] });
            }
            allKeys() {
              var e3;
              return this.ctx.caller.callAsync("api:call", { method: "list-plugin-storage-files", args: [this.ctxId, null === (e3 = this.opts) || void 0 === e3 ? void 0 : e3.assets] });
            }
            clear() {
              var e3;
              return this.ctx.caller.callAsync("api:call", { method: "clear-plugin-storage-files", args: [this.ctxId, null === (e3 = this.opts) || void 0 === e3 ? void 0 : e3.assets] });
            }
            hasItem(e3) {
              var t3;
              return this.ctx.caller.callAsync("api:call", { method: "exist-plugin-storage-file", args: [this.ctxId, e3, null === (t3 = this.opts) || void 0 === t3 ? void 0 : t3.assets] });
            }
          }
          function ot(e3, t3, n2) {
            return (t3 = function(e4) {
              var t4 = function(e5, t5) {
                if ("object" != typeof e5 || !e5) return e5;
                var n3 = e5[Symbol.toPrimitive];
                if (void 0 !== n3) {
                  var r2 = n3.call(e5, t5 || "default");
                  if ("object" != typeof r2) return r2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t5 ? String : Number)(e5);
              }(e4, "string");
              return "symbol" == typeof t4 ? t4 : t4 + "";
            }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          class it {
            constructor(e3) {
              ot(this, "ctx", void 0), this.ctx = e3;
            }
            get React() {
              return this.ensureHostScope().React;
            }
            get ReactDOM() {
              return this.ensureHostScope().ReactDOM;
            }
            get Components() {
              return { Editor: this.ensureHostScope().logseq.sdk.experiments.cp_page_editor };
            }
            get Utils() {
              const e3 = this.ensureHostScope().logseq.sdk.utils, t3 = (t4) => e3[xe(t4)];
              return { toClj: t3("toClj"), jsxToClj: t3("jsxToClj"), toJs: t3("toJs"), toKeyword: t3("toKeyword"), toSymbol: t3("toSymbol") };
            }
            get pluginLocal() {
              return this.ensureHostScope().LSPluginCore.ensurePlugin(this.ctx.baseInfo.id);
            }
            invokeExperMethod(e3, ...t3) {
              var n2;
              const r2 = this.ensureHostScope();
              e3 = null === (n2 = xe(e3)) || void 0 === n2 ? void 0 : n2.toLowerCase();
              const o2 = r2.logseq.api["exper_" + e3] || r2.logseq.sdk.experiments[e3];
              return null == o2 ? void 0 : o2.apply(r2, t3);
            }
            async loadScripts(...e3) {
              (e3 = e3.map((e4) => null != e4 && e4.startsWith("http") ? e4 : this.ctx.resolveResourceFullUrl(e4))).unshift(this.ctx.baseInfo.id), await this.invokeExperMethod("loadScripts", ...e3);
            }
            registerFencedCodeRenderer(e3, t3) {
              return this.invokeExperMethod("registerFencedCodeRenderer", this.ctx.baseInfo.id, e3, t3);
            }
            registerDaemonRenderer(e3, t3) {
              return this.invokeExperMethod("registerDaemonRenderer", this.ctx.baseInfo.id, e3, t3);
            }
            registerHostedRenderer(e3, t3) {
              return this.invokeExperMethod("registerHostedRenderer", this.ctx.baseInfo.id, e3, t3);
            }
            registerSidebarRenderer(e3, t3) {
              return e3 = `_sidebar.${e3}`, t3.type = "sidebar", this.registerHostedRenderer(e3, t3);
            }
            registerRouteRenderer(e3, t3) {
              return this.invokeExperMethod("registerRouteRenderer", this.ctx.baseInfo.id, e3, t3);
            }
            registerBlockPropertiesRenderer(e3, t3) {
              return this.invokeExperMethod("registerBlockPropertiesRenderer", this.ctx.baseInfo.id, e3, t3);
            }
            registerBlockRenderer(e3, t3) {
              return this.invokeExperMethod("registerBlockRenderer", this.ctx.baseInfo.id, e3, t3);
            }
            registerExtensionsEnhancer(e3, t3) {
              const n2 = this.ensureHostScope();
              if ("katex" === e3) n2.katex && t3(n2.katex).catch(console.error);
              return this.invokeExperMethod("registerExtensionsEnhancer", this.ctx.baseInfo.id, e3, t3);
            }
            ensureHostScope() {
              try {
                var e3;
                null === (e3 = window.top) || void 0 === e3 || e3.document;
              } catch (e4) {
                console.error("Can not access host scope!");
              }
              return window.top;
            }
          }
          function st(e3, t3, n2) {
            return (t3 = function(e4) {
              var t4 = function(e5, t5) {
                if ("object" != typeof e5 || !e5) return e5;
                var n3 = e5[Symbol.toPrimitive];
                if (void 0 !== n3) {
                  var r2 = n3.call(e5, t5 || "default");
                  if ("object" != typeof r2) return r2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t5 ? String : Number)(e5);
              }(e4, "string");
              return "symbol" == typeof t4 ? t4 : t4 + "";
            }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          const at = (e3) => `task_callback_${e3}`;
          function lt() {
            const e3 = new Error("The request was aborted");
            return e3.name = "AbortError", e3;
          }
          function ct(e3) {
            return new Promise((t3) => setTimeout(t3, e3));
          }
          function ut(e3) {
            return new TextEncoder().encode(e3).buffer;
          }
          function ht(e3) {
            return new TextDecoder().decode(e3);
          }
          function ft(e3) {
            const t3 = {};
            return e3.forEach((e4, n2) => {
              t3[n2] = e4;
            }), t3;
          }
          function dt(e3) {
            if (null != e3) return "string" == typeof e3 || e3 instanceof ArrayBuffer || ArrayBuffer.isView(e3) ? e3 : JSON.stringify(e3);
          }
          class pt {
            constructor(e3, t3) {
              st(this, "_payload", void 0), st(this, "_responseType", void 0), this._payload = e3, this._responseType = t3;
            }
            get status() {
              return this._payload.status;
            }
            get statusText() {
              return this._payload.statusText;
            }
            get ok() {
              return this._payload.ok;
            }
            get url() {
              return this._payload.url;
            }
            get headers() {
              return this._payload.headers;
            }
            get body() {
              return this._payload.body;
            }
            async json() {
              const { body: e3 } = this._payload;
              return "json" === this._responseType ? e3 : "string" == typeof e3 ? JSON.parse(e3) : e3 instanceof ArrayBuffer ? JSON.parse(ht(e3)) : e3;
            }
            async text() {
              const { body: e3 } = this._payload;
              return "string" == typeof e3 ? e3 : e3 instanceof ArrayBuffer ? ht(e3) : JSON.stringify(e3);
            }
            async arrayBuffer() {
              const { body: e3 } = this._payload;
              return e3 instanceof ArrayBuffer ? e3 : "base64" === this._responseType && "string" == typeof e3 ? function(e4) {
                const t3 = atob(e4), n2 = new Uint8Array(t3.length);
                for (let e5 = 0; e5 < t3.length; e5++) n2[e5] = t3.charCodeAt(e5);
                return n2.buffer;
              }(e3) : ut("string" == typeof e3 ? e3 : JSON.stringify(e3));
            }
            clone() {
              return new pt({ status: (e3 = this).status, statusText: e3.statusText, ok: e3.ok, url: e3.url, headers: { ...e3.headers }, body: e3.body }, this._responseType);
              var e3;
            }
          }
          class mt extends Error {
            constructor(e3) {
              super(`HTTP request failed with status ${e3.status} ${e3.statusText}`.trim()), st(this, "response", void 0), this.response = e3, this.name = "LSPluginNetError";
            }
            get status() {
              return this.response.status;
            }
            get statusText() {
              return this.response.statusText;
            }
            get url() {
              return this.response.url;
            }
            get headers() {
              return this.response.headers;
            }
            get body() {
              return this.response.body;
            }
          }
          function gt(e3) {
            if (e3.status >= 200 && e3.status < 300) return e3.body;
            throw new mt(e3);
          }
          class yt {
            constructor(e3) {
              st(this, "_ctx", void 0), st(this, "_cache", /* @__PURE__ */ new Map()), st(this, "_events", new EventTarget()), this._ctx = e3, this._ctx.caller.on("#lsp#request#callback", (e4) => {
                const t3 = null == e4 ? void 0 : e4.requestId;
                t3 && this._events.dispatchEvent(new CustomEvent(at(t3), { detail: null == e4 ? void 0 : e4.payload }));
              });
            }
            async request(e3) {
              const t3 = (e3.method || "GET").toUpperCase(), n2 = "arrayBuffer" === (r2 = e3.responseType) ? "arraybuffer" : r2 || "json";
              var r2;
              const o2 = this.normalizeRetry(e3.retry), i2 = this.getCacheKey(e3, t3, n2);
              if (i2) {
                const e4 = this._cache.get(i2);
                if (e4 && e4.expires > Date.now()) return this._cache.delete(i2), this._cache.set(i2, e4), e4.response.clone();
                e4 && this._cache.delete(i2);
              }
              let s2 = 0;
              for (; ; ) try {
                const r3 = await this.performRequest(e3, t3, n2);
                if (s2 < o2.retries && this.shouldRetry(o2, r3)) {
                  await ct(o2.delay * Math.pow(o2.factor, s2++));
                  continue;
                }
                return i2 && (this.pruneCache(this.getCacheMaxEntries(e3.cache)), this._cache.set(i2, { expires: Date.now() + this.getCacheTTL(e3.cache), response: r3.clone() })), r3;
              } catch (t4) {
                var a2;
                if (null !== (a2 = e3.signal) && void 0 !== a2 && a2.aborted || s2 >= o2.retries || !this.shouldRetry(o2, t4)) throw t4;
                await ct(o2.delay * Math.pow(o2.factor, s2++));
              }
            }
            get(e3, t3) {
              return this.requestWithMethod("GET", e3, t3);
            }
            head(e3, t3) {
              return this.requestWithMethod("HEAD", e3, t3);
            }
            post(e3, t3, n2) {
              return this.requestWithBody("POST", e3, t3, n2);
            }
            put(e3, t3, n2) {
              return this.requestWithBody("PUT", e3, t3, n2);
            }
            patch(e3, t3, n2) {
              return this.requestWithBody("PATCH", e3, t3, n2);
            }
            delete(e3, t3) {
              return this.requestWithMethod("DELETE", e3, t3);
            }
            requestWithMethod(e3, t3, n2 = {}) {
              return this.request({ ...n2, url: t3, method: e3 }).then(gt);
            }
            requestWithBody(e3, t3, n2, r2 = {}) {
              const o2 = void 0 === n2 ? r2.body : n2;
              return this.request({ ...r2, url: t3, method: e3, body: o2 }).then(gt);
            }
            async performRequest(e3, t3, n2) {
              if (this.shouldUseFetchFallback()) return this.performFetchRequest(e3, t3, n2);
              try {
                return await this.performProxyRequest(e3, t3, n2);
              } catch (r2) {
                if (this.shouldFallbackAfterProxyError(r2)) return this.performFetchRequest(e3, t3, n2);
                throw r2;
              }
            }
            async performProxyRequest(e3, t3, n2) {
              var r2, o2, i2;
              if (null !== (r2 = e3.signal) && void 0 !== r2 && r2.aborted) throw lt();
              const s2 = Boolean(e3.abortable || e3.signal), a2 = await this._ctx._execCallableAPIAsync("exper_request", this._ctx.baseInfo.id, { url: e3.url, method: t3, headers: e3.headers, data: null !== (o2 = e3.body) && void 0 !== o2 ? o2 : e3.data, timeout: e3.timeout, returnType: n2, abortable: s2, includeResponse: true });
              if (!a2) throw new Error("Host HTTP request proxy is not available");
              const l2 = at(a2), c2 = new Promise((e4, t4) => {
                const n3 = (r3) => {
                  const o3 = r3.detail;
                  this._events.removeEventListener(l2, n3), o3 && o3 instanceof Error ? t4(o3) : e4(o3);
                };
                this._events.addEventListener(l2, n3, { once: true });
              }), u2 = () => this.abortProxyRequest(a2, s2);
              null === (i2 = e3.signal) || void 0 === i2 || i2.addEventListener("abort", u2, { once: true });
              try {
                const e4 = await c2;
                return new pt(e4, n2);
              } finally {
                var h2;
                null === (h2 = e3.signal) || void 0 === h2 || h2.removeEventListener("abort", u2);
              }
            }
            abortProxyRequest(e3, t3) {
              t3 && this._ctx._execCallableAPI("http_request_abort", e3);
            }
            async performFetchRequest(e3, t3, n2) {
              var r2, o2;
              if ("function" != typeof fetch) throw new Error("Browser fetch is not available");
              if (null !== (r2 = e3.signal) && void 0 !== r2 && r2.aborted) throw lt();
              const i2 = "number" == typeof e3.timeout && e3.timeout > 0 ? e3.timeout : void 0, s2 = i2 || e3.signal ? new AbortController() : null, a2 = () => null == s2 ? void 0 : s2.abort(), l2 = i2 ? setTimeout(a2, i2) : null;
              null === (o2 = e3.signal) || void 0 === o2 || o2.addEventListener("abort", a2, { once: true });
              try {
                var c2;
                const r3 = await fetch(e3.url, { method: t3, headers: e3.headers, body: ["GET", "HEAD"].includes(t3) ? void 0 : dt(null !== (c2 = e3.body) && void 0 !== c2 ? c2 : e3.data), signal: (null == s2 ? void 0 : s2.signal) || e3.signal }), o3 = await this.readFetchBody(r3, t3, n2);
                return new pt({ status: r3.status, statusText: r3.statusText, ok: r3.ok, url: r3.url, headers: ft(r3.headers), body: o3 }, n2);
              } finally {
                var u2;
                l2 && clearTimeout(l2), null === (u2 = e3.signal) || void 0 === u2 || u2.removeEventListener("abort", a2);
              }
            }
            async readFetchBody(e3, t3, n2) {
              if ("HEAD" === t3 || 204 === e3.status || 205 === e3.status) return null;
              switch (n2) {
                case "json":
                  return await e3.json();
                case "text":
                  return await e3.text();
                case "arraybuffer":
                  return await e3.arrayBuffer();
                case "base64":
                  return function(e4) {
                    const t4 = new Uint8Array(e4);
                    let n3 = "";
                    for (let e5 = 0; e5 < t4.length; e5 += 32768) n3 += String.fromCharCode(...t4.subarray(e5, e5 + 32768));
                    return btoa(n3);
                  }(await e3.arrayBuffer());
              }
            }
            shouldUseFetchFallback() {
              var e3;
              return Boolean(null === (e3 = this._ctx.baseInfo) || void 0 === e3 ? void 0 : e3.webMode);
            }
            shouldFallbackAfterProxyError(e3) {
              return null == e3 && "function" == typeof fetch;
            }
            normalizeRetry(e3) {
              return "number" == typeof e3 ? { retries: Math.max(0, e3), delay: 300, factor: 2 } : { retries: Math.max(0, (null == e3 ? void 0 : e3.retries) || 0), delay: (null == e3 ? void 0 : e3.delay) || 300, factor: (null == e3 ? void 0 : e3.factor) || 2, retryOn: null == e3 ? void 0 : e3.retryOn };
            }
            shouldRetry(e3, t3) {
              const { retryOn: n2 } = e3;
              return "function" == typeof n2 ? n2(t3) : !(t3 instanceof pt) || (Array.isArray(n2) ? n2.includes(t3.status) : 429 === t3.status || t3.status >= 500);
            }
            getCacheKey(e3, t3, n2) {
              return e3.cache && ["GET", "HEAD"].includes(t3) ? "object" == typeof e3.cache && e3.cache.key ? e3.cache.key : JSON.stringify({ method: t3, url: e3.url, headers: e3.headers || {}, responseType: n2 }) : null;
            }
            getCacheTTL(e3) {
              return "object" == typeof e3 && "number" == typeof e3.ttl ? Math.max(0, e3.ttl) : 3e5;
            }
            getCacheMaxEntries(e3) {
              return "object" == typeof e3 && "number" == typeof e3.maxEntries ? Math.max(1, e3.maxEntries) : 100;
            }
            pruneCache(e3) {
              for (; this._cache.size >= e3; ) {
                const e4 = this._cache.keys().next().value;
                if (!e4) return;
                this._cache.delete(e4);
              }
            }
            get ctx() {
              return this._ctx;
            }
          }
          const vt = Array.isArray;
          const bt = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
          var _t = "object" == typeof self && self && self.Object === Object && self;
          const wt = bt || _t || Function("return this")();
          const xt = wt.Symbol;
          var Ct = Object.prototype, St = Ct.hasOwnProperty, Tt = Ct.toString, Et = xt ? xt.toStringTag : void 0;
          const At = function(e3) {
            var t3 = St.call(e3, Et), n2 = e3[Et];
            try {
              e3[Et] = void 0;
              var r2 = true;
            } catch (e4) {
            }
            var o2 = Tt.call(e3);
            return r2 && (t3 ? e3[Et] = n2 : delete e3[Et]), o2;
          };
          var kt = Object.prototype.toString;
          const Ot = function(e3) {
            return kt.call(e3);
          };
          var jt = xt ? xt.toStringTag : void 0;
          const Pt = function(e3) {
            return null == e3 ? void 0 === e3 ? "[object Undefined]" : "[object Null]" : jt && jt in Object(e3) ? At(e3) : Ot(e3);
          };
          const Lt = function(e3) {
            var t3 = typeof e3;
            return null != e3 && ("object" == t3 || "function" == t3);
          };
          const Mt = function(e3) {
            if (!Lt(e3)) return false;
            var t3 = Pt(e3);
            return "[object Function]" == t3 || "[object GeneratorFunction]" == t3 || "[object AsyncFunction]" == t3 || "[object Proxy]" == t3;
          };
          const It = wt["__core-js_shared__"];
          var Nt, Rt = (Nt = /[^.]+$/.exec(It && It.keys && It.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Nt : "";
          const Ft = function(e3) {
            return !!Rt && Rt in e3;
          };
          var Dt = Function.prototype.toString;
          const Ut = function(e3) {
            if (null != e3) {
              try {
                return Dt.call(e3);
              } catch (e4) {
              }
              try {
                return e3 + "";
              } catch (e4) {
              }
            }
            return "";
          };
          var zt = /^\[object .+?Constructor\]$/, $t = Function.prototype, Ht = Object.prototype, Bt = $t.toString, Wt = Ht.hasOwnProperty, qt = RegExp("^" + Bt.call(Wt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          const Gt = function(e3) {
            return !(!Lt(e3) || Ft(e3)) && (Mt(e3) ? qt : zt).test(Ut(e3));
          };
          const Jt = function(e3, t3) {
            return null == e3 ? void 0 : e3[t3];
          };
          const Yt = function(e3, t3) {
            var n2 = Jt(e3, t3);
            return Gt(n2) ? n2 : void 0;
          };
          const Kt = function() {
            try {
              var e3 = Yt(Object, "defineProperty");
              return e3({}, "", {}), e3;
            } catch (e4) {
            }
          }();
          const Vt = function(e3, t3, n2) {
            "__proto__" == t3 && Kt ? Kt(e3, t3, { configurable: true, enumerable: true, value: n2, writable: true }) : e3[t3] = n2;
          };
          const Xt = /* @__PURE__ */ function(e3) {
            return function(t3, n2, r2) {
              for (var o2 = -1, i2 = Object(t3), s2 = r2(t3), a2 = s2.length; a2--; ) {
                var l2 = s2[e3 ? a2 : ++o2];
                if (false === n2(i2[l2], l2, i2)) break;
              }
              return t3;
            };
          }();
          const Zt = function(e3, t3) {
            for (var n2 = -1, r2 = Array(e3); ++n2 < e3; ) r2[n2] = t3(n2);
            return r2;
          };
          const Qt = function(e3) {
            return null != e3 && "object" == typeof e3;
          };
          const en = function(e3) {
            return Qt(e3) && "[object Arguments]" == Pt(e3);
          };
          var tn = Object.prototype, nn = tn.hasOwnProperty, rn = tn.propertyIsEnumerable;
          const on = en(/* @__PURE__ */ function() {
            return arguments;
          }()) ? en : function(e3) {
            return Qt(e3) && nn.call(e3, "callee") && !rn.call(e3, "callee");
          };
          const sn = function() {
            return false;
          };
          var an = "object" == typeof exports && exports && !exports.nodeType && exports, ln = an && "object" == typeof module && module && !module.nodeType && module, cn = ln && ln.exports === an ? wt.Buffer : void 0;
          const un = (cn ? cn.isBuffer : void 0) || sn;
          var hn = /^(?:0|[1-9]\d*)$/;
          const fn = function(e3, t3) {
            var n2 = typeof e3;
            return !!(t3 = null == t3 ? 9007199254740991 : t3) && ("number" == n2 || "symbol" != n2 && hn.test(e3)) && e3 > -1 && e3 % 1 == 0 && e3 < t3;
          };
          const dn = function(e3) {
            return "number" == typeof e3 && e3 > -1 && e3 % 1 == 0 && e3 <= 9007199254740991;
          };
          var pn = {};
          pn["[object Float32Array]"] = pn["[object Float64Array]"] = pn["[object Int8Array]"] = pn["[object Int16Array]"] = pn["[object Int32Array]"] = pn["[object Uint8Array]"] = pn["[object Uint8ClampedArray]"] = pn["[object Uint16Array]"] = pn["[object Uint32Array]"] = true, pn["[object Arguments]"] = pn["[object Array]"] = pn["[object ArrayBuffer]"] = pn["[object Boolean]"] = pn["[object DataView]"] = pn["[object Date]"] = pn["[object Error]"] = pn["[object Function]"] = pn["[object Map]"] = pn["[object Number]"] = pn["[object Object]"] = pn["[object RegExp]"] = pn["[object Set]"] = pn["[object String]"] = pn["[object WeakMap]"] = false;
          const mn = function(e3) {
            return Qt(e3) && dn(e3.length) && !!pn[Pt(e3)];
          };
          const gn = function(e3) {
            return function(t3) {
              return e3(t3);
            };
          };
          var yn = "object" == typeof exports && exports && !exports.nodeType && exports, vn = yn && "object" == typeof module && module && !module.nodeType && module, bn = vn && vn.exports === yn && bt.process, _n = function() {
            try {
              var e3 = vn && vn.require && vn.require("util").types;
              return e3 || bn && bn.binding && bn.binding("util");
            } catch (e4) {
            }
          }();
          var wn = _n && _n.isTypedArray;
          const xn = wn ? gn(wn) : mn;
          var Cn = Object.prototype.hasOwnProperty;
          const Sn = function(e3, t3) {
            var n2 = vt(e3), r2 = !n2 && on(e3), o2 = !n2 && !r2 && un(e3), i2 = !n2 && !r2 && !o2 && xn(e3), s2 = n2 || r2 || o2 || i2, a2 = s2 ? Zt(e3.length, String) : [], l2 = a2.length;
            for (var c2 in e3) !t3 && !Cn.call(e3, c2) || s2 && ("length" == c2 || o2 && ("offset" == c2 || "parent" == c2) || i2 && ("buffer" == c2 || "byteLength" == c2 || "byteOffset" == c2) || fn(c2, l2)) || a2.push(c2);
            return a2;
          };
          var Tn = Object.prototype;
          const En = function(e3) {
            var t3 = e3 && e3.constructor;
            return e3 === ("function" == typeof t3 && t3.prototype || Tn);
          };
          const An = /* @__PURE__ */ function(e3, t3) {
            return function(n2) {
              return e3(t3(n2));
            };
          }(Object.keys, Object);
          var kn = Object.prototype.hasOwnProperty;
          const On = function(e3) {
            if (!En(e3)) return An(e3);
            var t3 = [];
            for (var n2 in Object(e3)) kn.call(e3, n2) && "constructor" != n2 && t3.push(n2);
            return t3;
          };
          const jn = function(e3) {
            return null != e3 && dn(e3.length) && !Mt(e3);
          };
          const Pn = function(e3) {
            return jn(e3) ? Sn(e3) : On(e3);
          };
          const Ln = function(e3, t3) {
            return e3 && Xt(e3, t3, Pn);
          };
          const Mn = function() {
            this.__data__ = [], this.size = 0;
          };
          const In = function(e3, t3) {
            return e3 === t3 || e3 != e3 && t3 != t3;
          };
          const Nn = function(e3, t3) {
            for (var n2 = e3.length; n2--; ) if (In(e3[n2][0], t3)) return n2;
            return -1;
          };
          var Rn = Array.prototype.splice;
          const Fn = function(e3) {
            var t3 = this.__data__, n2 = Nn(t3, e3);
            return !(n2 < 0) && (n2 == t3.length - 1 ? t3.pop() : Rn.call(t3, n2, 1), --this.size, true);
          };
          const Dn = function(e3) {
            var t3 = this.__data__, n2 = Nn(t3, e3);
            return n2 < 0 ? void 0 : t3[n2][1];
          };
          const Un = function(e3) {
            return Nn(this.__data__, e3) > -1;
          };
          const zn = function(e3, t3) {
            var n2 = this.__data__, r2 = Nn(n2, e3);
            return r2 < 0 ? (++this.size, n2.push([e3, t3])) : n2[r2][1] = t3, this;
          };
          function $n(e3) {
            var t3 = -1, n2 = null == e3 ? 0 : e3.length;
            for (this.clear(); ++t3 < n2; ) {
              var r2 = e3[t3];
              this.set(r2[0], r2[1]);
            }
          }
          $n.prototype.clear = Mn, $n.prototype.delete = Fn, $n.prototype.get = Dn, $n.prototype.has = Un, $n.prototype.set = zn;
          const Hn = $n;
          const Bn = function() {
            this.__data__ = new Hn(), this.size = 0;
          };
          const Wn = function(e3) {
            var t3 = this.__data__, n2 = t3.delete(e3);
            return this.size = t3.size, n2;
          };
          const qn = function(e3) {
            return this.__data__.get(e3);
          };
          const Gn = function(e3) {
            return this.__data__.has(e3);
          };
          const Jn = Yt(wt, "Map");
          const Yn = Yt(Object, "create");
          const Kn = function() {
            this.__data__ = Yn ? Yn(null) : {}, this.size = 0;
          };
          const Vn = function(e3) {
            var t3 = this.has(e3) && delete this.__data__[e3];
            return this.size -= t3 ? 1 : 0, t3;
          };
          var Xn = Object.prototype.hasOwnProperty;
          const Zn = function(e3) {
            var t3 = this.__data__;
            if (Yn) {
              var n2 = t3[e3];
              return "__lodash_hash_undefined__" === n2 ? void 0 : n2;
            }
            return Xn.call(t3, e3) ? t3[e3] : void 0;
          };
          var Qn = Object.prototype.hasOwnProperty;
          const er = function(e3) {
            var t3 = this.__data__;
            return Yn ? void 0 !== t3[e3] : Qn.call(t3, e3);
          };
          const tr = function(e3, t3) {
            var n2 = this.__data__;
            return this.size += this.has(e3) ? 0 : 1, n2[e3] = Yn && void 0 === t3 ? "__lodash_hash_undefined__" : t3, this;
          };
          function nr(e3) {
            var t3 = -1, n2 = null == e3 ? 0 : e3.length;
            for (this.clear(); ++t3 < n2; ) {
              var r2 = e3[t3];
              this.set(r2[0], r2[1]);
            }
          }
          nr.prototype.clear = Kn, nr.prototype.delete = Vn, nr.prototype.get = Zn, nr.prototype.has = er, nr.prototype.set = tr;
          const rr = nr;
          const or = function() {
            this.size = 0, this.__data__ = { hash: new rr(), map: new (Jn || Hn)(), string: new rr() };
          };
          const ir = function(e3) {
            var t3 = typeof e3;
            return "string" == t3 || "number" == t3 || "symbol" == t3 || "boolean" == t3 ? "__proto__" !== e3 : null === e3;
          };
          const sr = function(e3, t3) {
            var n2 = e3.__data__;
            return ir(t3) ? n2["string" == typeof t3 ? "string" : "hash"] : n2.map;
          };
          const ar = function(e3) {
            var t3 = sr(this, e3).delete(e3);
            return this.size -= t3 ? 1 : 0, t3;
          };
          const lr = function(e3) {
            return sr(this, e3).get(e3);
          };
          const cr = function(e3) {
            return sr(this, e3).has(e3);
          };
          const ur = function(e3, t3) {
            var n2 = sr(this, e3), r2 = n2.size;
            return n2.set(e3, t3), this.size += n2.size == r2 ? 0 : 1, this;
          };
          function hr(e3) {
            var t3 = -1, n2 = null == e3 ? 0 : e3.length;
            for (this.clear(); ++t3 < n2; ) {
              var r2 = e3[t3];
              this.set(r2[0], r2[1]);
            }
          }
          hr.prototype.clear = or, hr.prototype.delete = ar, hr.prototype.get = lr, hr.prototype.has = cr, hr.prototype.set = ur;
          const fr = hr;
          const dr = function(e3, t3) {
            var n2 = this.__data__;
            if (n2 instanceof Hn) {
              var r2 = n2.__data__;
              if (!Jn || r2.length < 199) return r2.push([e3, t3]), this.size = ++n2.size, this;
              n2 = this.__data__ = new fr(r2);
            }
            return n2.set(e3, t3), this.size = n2.size, this;
          };
          function pr(e3) {
            var t3 = this.__data__ = new Hn(e3);
            this.size = t3.size;
          }
          pr.prototype.clear = Bn, pr.prototype.delete = Wn, pr.prototype.get = qn, pr.prototype.has = Gn, pr.prototype.set = dr;
          const mr = pr;
          const gr = function(e3) {
            return this.__data__.set(e3, "__lodash_hash_undefined__"), this;
          };
          const yr = function(e3) {
            return this.__data__.has(e3);
          };
          function vr(e3) {
            var t3 = -1, n2 = null == e3 ? 0 : e3.length;
            for (this.__data__ = new fr(); ++t3 < n2; ) this.add(e3[t3]);
          }
          vr.prototype.add = vr.prototype.push = gr, vr.prototype.has = yr;
          const br = vr;
          const _r = function(e3, t3) {
            for (var n2 = -1, r2 = null == e3 ? 0 : e3.length; ++n2 < r2; ) if (t3(e3[n2], n2, e3)) return true;
            return false;
          };
          const wr = function(e3, t3) {
            return e3.has(t3);
          };
          const xr = function(e3, t3, n2, r2, o2, i2) {
            var s2 = 1 & n2, a2 = e3.length, l2 = t3.length;
            if (a2 != l2 && !(s2 && l2 > a2)) return false;
            var c2 = i2.get(e3), u2 = i2.get(t3);
            if (c2 && u2) return c2 == t3 && u2 == e3;
            var h2 = -1, f2 = true, d2 = 2 & n2 ? new br() : void 0;
            for (i2.set(e3, t3), i2.set(t3, e3); ++h2 < a2; ) {
              var p2 = e3[h2], m2 = t3[h2];
              if (r2) var g2 = s2 ? r2(m2, p2, h2, t3, e3, i2) : r2(p2, m2, h2, e3, t3, i2);
              if (void 0 !== g2) {
                if (g2) continue;
                f2 = false;
                break;
              }
              if (d2) {
                if (!_r(t3, function(e4, t4) {
                  if (!wr(d2, t4) && (p2 === e4 || o2(p2, e4, n2, r2, i2))) return d2.push(t4);
                })) {
                  f2 = false;
                  break;
                }
              } else if (p2 !== m2 && !o2(p2, m2, n2, r2, i2)) {
                f2 = false;
                break;
              }
            }
            return i2.delete(e3), i2.delete(t3), f2;
          };
          const Cr = wt.Uint8Array;
          const Sr = function(e3) {
            var t3 = -1, n2 = Array(e3.size);
            return e3.forEach(function(e4, r2) {
              n2[++t3] = [r2, e4];
            }), n2;
          };
          const Tr = function(e3) {
            var t3 = -1, n2 = Array(e3.size);
            return e3.forEach(function(e4) {
              n2[++t3] = e4;
            }), n2;
          };
          var Er = xt ? xt.prototype : void 0, Ar = Er ? Er.valueOf : void 0;
          const kr = function(e3, t3, n2, r2, o2, i2, s2) {
            switch (n2) {
              case "[object DataView]":
                if (e3.byteLength != t3.byteLength || e3.byteOffset != t3.byteOffset) return false;
                e3 = e3.buffer, t3 = t3.buffer;
              case "[object ArrayBuffer]":
                return !(e3.byteLength != t3.byteLength || !i2(new Cr(e3), new Cr(t3)));
              case "[object Boolean]":
              case "[object Date]":
              case "[object Number]":
                return In(+e3, +t3);
              case "[object Error]":
                return e3.name == t3.name && e3.message == t3.message;
              case "[object RegExp]":
              case "[object String]":
                return e3 == t3 + "";
              case "[object Map]":
                var a2 = Sr;
              case "[object Set]":
                var l2 = 1 & r2;
                if (a2 || (a2 = Tr), e3.size != t3.size && !l2) return false;
                var c2 = s2.get(e3);
                if (c2) return c2 == t3;
                r2 |= 2, s2.set(e3, t3);
                var u2 = xr(a2(e3), a2(t3), r2, o2, i2, s2);
                return s2.delete(e3), u2;
              case "[object Symbol]":
                if (Ar) return Ar.call(e3) == Ar.call(t3);
            }
            return false;
          };
          const Or = function(e3, t3) {
            for (var n2 = -1, r2 = t3.length, o2 = e3.length; ++n2 < r2; ) e3[o2 + n2] = t3[n2];
            return e3;
          };
          const jr = function(e3, t3, n2) {
            var r2 = t3(e3);
            return vt(e3) ? r2 : Or(r2, n2(e3));
          };
          const Pr = function(e3, t3) {
            for (var n2 = -1, r2 = null == e3 ? 0 : e3.length, o2 = 0, i2 = []; ++n2 < r2; ) {
              var s2 = e3[n2];
              t3(s2, n2, e3) && (i2[o2++] = s2);
            }
            return i2;
          };
          const Lr = function() {
            return [];
          };
          var Mr = Object.prototype.propertyIsEnumerable, Ir = Object.getOwnPropertySymbols;
          const Nr = Ir ? function(e3) {
            return null == e3 ? [] : (e3 = Object(e3), Pr(Ir(e3), function(t3) {
              return Mr.call(e3, t3);
            }));
          } : Lr;
          const Rr = function(e3) {
            return jr(e3, Pn, Nr);
          };
          var Fr = Object.prototype.hasOwnProperty;
          const Dr = function(e3, t3, n2, r2, o2, i2) {
            var s2 = 1 & n2, a2 = Rr(e3), l2 = a2.length;
            if (l2 != Rr(t3).length && !s2) return false;
            for (var c2 = l2; c2--; ) {
              var u2 = a2[c2];
              if (!(s2 ? u2 in t3 : Fr.call(t3, u2))) return false;
            }
            var h2 = i2.get(e3), f2 = i2.get(t3);
            if (h2 && f2) return h2 == t3 && f2 == e3;
            var d2 = true;
            i2.set(e3, t3), i2.set(t3, e3);
            for (var p2 = s2; ++c2 < l2; ) {
              var m2 = e3[u2 = a2[c2]], g2 = t3[u2];
              if (r2) var y2 = s2 ? r2(g2, m2, u2, t3, e3, i2) : r2(m2, g2, u2, e3, t3, i2);
              if (!(void 0 === y2 ? m2 === g2 || o2(m2, g2, n2, r2, i2) : y2)) {
                d2 = false;
                break;
              }
              p2 || (p2 = "constructor" == u2);
            }
            if (d2 && !p2) {
              var v2 = e3.constructor, b2 = t3.constructor;
              v2 == b2 || !("constructor" in e3) || !("constructor" in t3) || "function" == typeof v2 && v2 instanceof v2 && "function" == typeof b2 && b2 instanceof b2 || (d2 = false);
            }
            return i2.delete(e3), i2.delete(t3), d2;
          };
          const Ur = Yt(wt, "DataView");
          const zr = Yt(wt, "Promise");
          const $r = Yt(wt, "Set");
          const Hr = Yt(wt, "WeakMap");
          var Br = "[object Map]", Wr = "[object Promise]", qr = "[object Set]", Gr = "[object WeakMap]", Jr = "[object DataView]", Yr = Ut(Ur), Kr = Ut(Jn), Vr = Ut(zr), Xr = Ut($r), Zr = Ut(Hr), Qr = Pt;
          (Ur && Qr(new Ur(new ArrayBuffer(1))) != Jr || Jn && Qr(new Jn()) != Br || zr && Qr(zr.resolve()) != Wr || $r && Qr(new $r()) != qr || Hr && Qr(new Hr()) != Gr) && (Qr = function(e3) {
            var t3 = Pt(e3), n2 = "[object Object]" == t3 ? e3.constructor : void 0, r2 = n2 ? Ut(n2) : "";
            if (r2) switch (r2) {
              case Yr:
                return Jr;
              case Kr:
                return Br;
              case Vr:
                return Wr;
              case Xr:
                return qr;
              case Zr:
                return Gr;
            }
            return t3;
          });
          const eo = Qr;
          var to = "[object Arguments]", no = "[object Array]", ro = "[object Object]", oo = Object.prototype.hasOwnProperty;
          const io = function(e3, t3, n2, r2, o2, i2) {
            var s2 = vt(e3), a2 = vt(t3), l2 = s2 ? no : eo(e3), c2 = a2 ? no : eo(t3), u2 = (l2 = l2 == to ? ro : l2) == ro, h2 = (c2 = c2 == to ? ro : c2) == ro, f2 = l2 == c2;
            if (f2 && un(e3)) {
              if (!un(t3)) return false;
              s2 = true, u2 = false;
            }
            if (f2 && !u2) return i2 || (i2 = new mr()), s2 || xn(e3) ? xr(e3, t3, n2, r2, o2, i2) : kr(e3, t3, l2, n2, r2, o2, i2);
            if (!(1 & n2)) {
              var d2 = u2 && oo.call(e3, "__wrapped__"), p2 = h2 && oo.call(t3, "__wrapped__");
              if (d2 || p2) {
                var m2 = d2 ? e3.value() : e3, g2 = p2 ? t3.value() : t3;
                return i2 || (i2 = new mr()), o2(m2, g2, n2, r2, i2);
              }
            }
            return !!f2 && (i2 || (i2 = new mr()), Dr(e3, t3, n2, r2, o2, i2));
          };
          const so = function e3(t3, n2, r2, o2, i2) {
            return t3 === n2 || (null == t3 || null == n2 || !Qt(t3) && !Qt(n2) ? t3 != t3 && n2 != n2 : io(t3, n2, r2, o2, e3, i2));
          };
          const ao = function(e3, t3, n2, r2) {
            var o2 = n2.length, i2 = o2, s2 = !r2;
            if (null == e3) return !i2;
            for (e3 = Object(e3); o2--; ) {
              var a2 = n2[o2];
              if (s2 && a2[2] ? a2[1] !== e3[a2[0]] : !(a2[0] in e3)) return false;
            }
            for (; ++o2 < i2; ) {
              var l2 = (a2 = n2[o2])[0], c2 = e3[l2], u2 = a2[1];
              if (s2 && a2[2]) {
                if (void 0 === c2 && !(l2 in e3)) return false;
              } else {
                var h2 = new mr();
                if (r2) var f2 = r2(c2, u2, l2, e3, t3, h2);
                if (!(void 0 === f2 ? so(u2, c2, 3, r2, h2) : f2)) return false;
              }
            }
            return true;
          };
          const lo = function(e3) {
            return e3 == e3 && !Lt(e3);
          };
          const co = function(e3) {
            for (var t3 = Pn(e3), n2 = t3.length; n2--; ) {
              var r2 = t3[n2], o2 = e3[r2];
              t3[n2] = [r2, o2, lo(o2)];
            }
            return t3;
          };
          const uo = function(e3, t3) {
            return function(n2) {
              return null != n2 && (n2[e3] === t3 && (void 0 !== t3 || e3 in Object(n2)));
            };
          };
          const ho = function(e3) {
            var t3 = co(e3);
            return 1 == t3.length && t3[0][2] ? uo(t3[0][0], t3[0][1]) : function(n2) {
              return n2 === e3 || ao(n2, e3, t3);
            };
          };
          const fo = function(e3) {
            return "symbol" == typeof e3 || Qt(e3) && "[object Symbol]" == Pt(e3);
          };
          var po = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, mo = /^\w*$/;
          const go = function(e3, t3) {
            if (vt(e3)) return false;
            var n2 = typeof e3;
            return !("number" != n2 && "symbol" != n2 && "boolean" != n2 && null != e3 && !fo(e3)) || (mo.test(e3) || !po.test(e3) || null != t3 && e3 in Object(t3));
          };
          function yo(e3, t3) {
            if ("function" != typeof e3 || null != t3 && "function" != typeof t3) throw new TypeError("Expected a function");
            var n2 = function() {
              var r2 = arguments, o2 = t3 ? t3.apply(this, r2) : r2[0], i2 = n2.cache;
              if (i2.has(o2)) return i2.get(o2);
              var s2 = e3.apply(this, r2);
              return n2.cache = i2.set(o2, s2) || i2, s2;
            };
            return n2.cache = new (yo.Cache || fr)(), n2;
          }
          yo.Cache = fr;
          const vo = yo;
          var bo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _o = /\\(\\)?/g;
          const wo = function(e3) {
            var t3 = vo(e3, function(e4) {
              return 500 === n2.size && n2.clear(), e4;
            }), n2 = t3.cache;
            return t3;
          }(function(e3) {
            var t3 = [];
            return 46 === e3.charCodeAt(0) && t3.push(""), e3.replace(bo, function(e4, n2, r2, o2) {
              t3.push(r2 ? o2.replace(_o, "$1") : n2 || e4);
            }), t3;
          });
          const xo = function(e3, t3) {
            for (var n2 = -1, r2 = null == e3 ? 0 : e3.length, o2 = Array(r2); ++n2 < r2; ) o2[n2] = t3(e3[n2], n2, e3);
            return o2;
          };
          var Co = xt ? xt.prototype : void 0, So = Co ? Co.toString : void 0;
          const To = function e3(t3) {
            if ("string" == typeof t3) return t3;
            if (vt(t3)) return xo(t3, e3) + "";
            if (fo(t3)) return So ? So.call(t3) : "";
            var n2 = t3 + "";
            return "0" == n2 && 1 / t3 == -1 / 0 ? "-0" : n2;
          };
          const Eo = function(e3) {
            return null == e3 ? "" : To(e3);
          };
          const Ao = function(e3, t3) {
            return vt(e3) ? e3 : go(e3, t3) ? [e3] : wo(Eo(e3));
          };
          const ko = function(e3) {
            if ("string" == typeof e3 || fo(e3)) return e3;
            var t3 = e3 + "";
            return "0" == t3 && 1 / e3 == -1 / 0 ? "-0" : t3;
          };
          const Oo = function(e3, t3) {
            for (var n2 = 0, r2 = (t3 = Ao(t3, e3)).length; null != e3 && n2 < r2; ) e3 = e3[ko(t3[n2++])];
            return n2 && n2 == r2 ? e3 : void 0;
          };
          const jo = function(e3, t3, n2) {
            var r2 = null == e3 ? void 0 : Oo(e3, t3);
            return void 0 === r2 ? n2 : r2;
          };
          const Po = function(e3, t3) {
            return null != e3 && t3 in Object(e3);
          };
          const Lo = function(e3, t3, n2) {
            for (var r2 = -1, o2 = (t3 = Ao(t3, e3)).length, i2 = false; ++r2 < o2; ) {
              var s2 = ko(t3[r2]);
              if (!(i2 = null != e3 && n2(e3, s2))) break;
              e3 = e3[s2];
            }
            return i2 || ++r2 != o2 ? i2 : !!(o2 = null == e3 ? 0 : e3.length) && dn(o2) && fn(s2, o2) && (vt(e3) || on(e3));
          };
          const Mo = function(e3, t3) {
            return null != e3 && Lo(e3, t3, Po);
          };
          const Io = function(e3, t3) {
            return go(e3) && lo(t3) ? uo(ko(e3), t3) : function(n2) {
              var r2 = jo(n2, e3);
              return void 0 === r2 && r2 === t3 ? Mo(n2, e3) : so(t3, r2, 3);
            };
          };
          const No = function(e3) {
            return e3;
          };
          const Ro = function(e3) {
            return function(t3) {
              return null == t3 ? void 0 : t3[e3];
            };
          };
          const Fo = function(e3) {
            return function(t3) {
              return Oo(t3, e3);
            };
          };
          const Do = function(e3) {
            return go(e3) ? Ro(ko(e3)) : Fo(e3);
          };
          const Uo = function(e3) {
            return "function" == typeof e3 ? e3 : null == e3 ? No : "object" == typeof e3 ? vt(e3) ? Io(e3[0], e3[1]) : ho(e3) : Do(e3);
          };
          const zo = function(e3, t3) {
            var n2 = {};
            return t3 = Uo(t3, 3), Ln(e3, function(e4, r2, o2) {
              Vt(n2, t3(e4, r2, o2), e4);
            }), n2;
          };
          function $o(e3, t3, n2) {
            return (t3 = function(e4) {
              var t4 = function(e5, t5) {
                if ("object" != typeof e5 || !e5) return e5;
                var n3 = e5[Symbol.toPrimitive];
                if (void 0 !== n3) {
                  var r2 = n3.call(e5, t5 || "default");
                  if ("object" != typeof r2) return r2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t5 ? String : Number)(e5);
              }(e4, "string");
              return "symbol" == typeof t4 ? t4 : t4 + "";
            }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          class Ho {
            constructor(e3, t3) {
              $o(this, "ctx", void 0), $o(this, "serviceHooks", void 0), this.ctx = e3, this.serviceHooks = t3, e3._execCallableAPI("register-search-service", e3.baseInfo.id, t3.name, t3.options);
              Object.entries({ query: { f: "onQuery", args: ["graph", "q", true], reply: true, transformOutput: (e4) => (vt(null == e4 ? void 0 : e4.blocks) && (e4.blocks = e4.blocks.map((e5) => e5 && zo(e5, (e6, t4) => `block/${t4}`))), e4) }, rebuildBlocksIndice: { f: "onIndiceInit", args: ["graph", "blocks"] }, transactBlocks: { f: "onBlocksChanged", args: ["graph", "data"] }, truncateBlocks: { f: "onIndiceReset", args: ["graph"] }, removeDb: { f: "onGraph", args: ["graph"] } }).forEach(([n2, r2]) => {
                const o2 = ((e4) => `service:search:${e4}:${t3.name}`)(n2);
                e3.caller.on(o2, async (n3) => {
                  if (Mt(null == t3 ? void 0 : t3[r2.f])) {
                    let i2 = null;
                    try {
                      i2 = await t3[r2.f].apply(t3, (r2.args || []).map((e4) => {
                        if (n3) {
                          if (true === e4) return n3;
                          if (n3.hasOwnProperty(e4)) {
                            const t4 = n3[e4];
                            return delete n3[e4], t4;
                          }
                        }
                      })), r2.transformOutput && (i2 = r2.transformOutput(i2));
                    } catch (e4) {
                      console.error("[SearchService] ", e4), i2 = e4;
                    } finally {
                      r2.reply && e3.caller.call(`${o2}:reply`, i2);
                    }
                  }
                });
              });
            }
          }
          function Bo(e3, t3, n2) {
            (function(e4, t4) {
              if (t4.has(e4)) throw new TypeError("Cannot initialize the same private elements twice on an object");
            })(e3, t3), t3.set(e3, n2);
          }
          function Wo(e3, t3, n2) {
            return (t3 = function(e4) {
              var t4 = function(e5, t5) {
                if ("object" != typeof e5 || !e5) return e5;
                var n3 = e5[Symbol.toPrimitive];
                if (void 0 !== n3) {
                  var r2 = n3.call(e5, t5 || "default");
                  if ("object" != typeof r2) return r2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t5 ? String : Number)(e5);
              }(e4, "string");
              return "symbol" == typeof t4 ? t4 : t4 + "";
            }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          function qo(e3, t3, n2) {
            return e3.set(Jo(e3, t3), n2), n2;
          }
          function Go(e3, t3) {
            return e3.get(Jo(e3, t3));
          }
          function Jo(e3, t3, n2) {
            if ("function" == typeof e3 ? e3 === t3 : e3.has(t3)) return arguments.length < 3 ? t3 : n2;
            throw new TypeError("Private element is not present on this object");
          }
          const Yo = Symbol.for("proxy-continue"), Ko = je()("LSPlugin:user"), Vo = new class extends be {
            constructor(e3, t3) {
              var n2, r2;
              super(), _e(this, "_tag", void 0), _e(this, "_opts", void 0), _e(this, "_logs", []), _e(this, "_maxSize", void 0), _e(this, "_level", void 0), this._tag = e3, this._opts = t3, this._maxSize = Math.max(50, null !== (n2 = null == t3 ? void 0 : t3.maxSize) && void 0 !== n2 ? n2 : 500), this._level = null !== (r2 = null == t3 ? void 0 : t3.level) && void 0 !== r2 ? r2 : "DEBUG";
            }
            write(e3, t3, n2) {
              var r2;
              Array.isArray(t3) && t3.length && true === t3[t3.length - 1] && (n2 = true, t3 = t3.slice(0, -1));
              const o2 = "string" == typeof e3 ? e3.toUpperCase() : e3, i2 = o2 in Ce ? o2 : "INFO";
              if (Ce[i2] < Ce[this._level]) return;
              const s2 = (t3 || []).map(Se).join(" "), a2 = { ts: Date.now(), level: i2, tag: this._tag || "", message: s2 };
              if (this._logs.push(a2), this._logs.length > this._maxSize && this._logs.splice(0, this._logs.length - this._maxSize), n2 || null !== (r2 = this._opts) && void 0 !== r2 && r2.console) {
                const e4 = "ERROR" === i2 ? "error" : "WARN" === i2 ? "warn" : "DEBUG" === i2 ? "debug" : "info";
                try {
                  console[e4](`[${a2.tag}][${new Date(a2.ts).toLocaleTimeString()}] ${i2}: ${s2}`);
                } catch (e5) {
                }
              }
              this.emit("append", a2), this.emit("change");
            }
            clear() {
              this._logs = [], this.emit("clear"), this.emit("change");
            }
            debug(...e3) {
              this.write("DEBUG", e3);
            }
            info(...e3) {
              this.write("INFO", e3);
            }
            warn(...e3) {
              this.write("WARN", e3);
            }
            error(...e3) {
              this.write("ERROR", e3);
            }
            setTag(e3) {
              this._tag = e3;
            }
            getTag() {
              return this._tag;
            }
            setLevel(e3) {
              e3 in Ce && (this._level = e3);
            }
            getLevel() {
              return this._level;
            }
            setMaxSize(e3) {
              this._maxSize = Math.max(50, 0 | e3), this._logs.length > this._maxSize && (this._logs.splice(0, this._logs.length - this._maxSize), this.emit("change"));
            }
            getEntries() {
              return this._logs.slice();
            }
            toJSON() {
              return this._logs.map((e3) => [e3.level, `[${e3.tag}][${new Date(e3.ts).toLocaleTimeString()}] ${e3.message}`]);
            }
          }("", { console: true });
          function Xo(e3) {
            let t3 = false;
            return () => {
              t3 || (t3 = true, e3());
            };
          }
          function Zo(e3, t3, n2) {
            var r2;
            const { key: o2, label: i2, desc: s2, palette: a2, keybinding: l2, extras: c2 } = t3;
            if ("function" != typeof n2) return this.logger.error(`${o2 || i2}: command action should be function.`), false;
            const u2 = ke(o2);
            if (!u2) return this.logger.error(`${i2}: command key is required.`), false;
            const h2 = `SimpleCommandHook${u2}${++li}`;
            return this.Editor["on" + h2](n2), null === (r2 = this.caller) || void 0 === r2 || r2.call("api:call", { method: "register-plugin-simple-command", args: [this.baseInfo.id, [{ key: u2, label: i2, type: e3, desc: s2, keybinding: l2, extras: c2 }, ["editor/hook", h2]], a2] }), Xo(() => {
              this.Editor["off" + h2](n2), this._execCallableAPI("unregister_plugin_simple_command", this.baseInfo.id, u2);
            });
          }
          function Qo(e3) {
            return "string" == typeof e3 ? { mode: "global", binding: e3 } : e3;
          }
          function ei(e3, t3) {
            var n2;
            Ko("Register slash command #", this.baseInfo.id, e3, t3);
            const r2 = [];
            return "function" == typeof t3 && (t3 = [["editor/clear-current-slash", false], ["editor/restore-saved-cursor"], ["editor/hook", t3]]), t3 = t3.map((e4) => {
              const [t4, ...n3] = e4;
              if ("editor/hook" === t4) {
                let o2 = n3[0], i2 = () => {
                  var e5;
                  null === (e5 = this.caller) || void 0 === e5 || e5.callUserModel(o2);
                };
                "function" == typeof o2 && (i2 = o2);
                const s2 = `SlashCommandHook${t4}${++li}`;
                e4[1] = s2, r2.push(this.Editor["on" + s2](i2));
              }
              return e4;
            }), null === (n2 = this.caller) || void 0 === n2 || n2.call("api:call", { method: "register-plugin-slash-command", args: [this.baseInfo.id, [e3, t3]] }), Xo(() => {
              r2.forEach((e4) => e4()), this._execCallableAPI("unregister_plugin_slash_command", this.baseInfo.id, e3);
            });
          }
          function ti(e3, t3 = {}, n2) {
            if (!(n2 = n2 || t3.handler)) return this.logger.error(`${e3}: command handler is required.`), false;
            const r2 = t3.key || e3, o2 = t3.label || t3.title || e3, i2 = Qo(t3.keybinding), s2 = function(e4) {
              return void 0 === e4.when ? e4.extras : { ...e4.extras || {}, when: e4.when };
            }(t3), a2 = function(e4) {
              return Array.isArray(e4.placements) && e4.placements.length ? e4.placements : e4.placement ? [e4.placement] : e4.palette ? ["palette"] : e4.keybinding ? ["shortcut"] : ["simple"];
            }(t3).map((e4) => {
              switch (e4) {
                case "palette":
                  return Zo.call(this, "$palette$", { key: r2, label: o2, desc: t3.desc, palette: true, keybinding: i2, extras: s2 }, n2);
                case "shortcut": {
                  var a3;
                  const e5 = "$shortcut$", l2 = r2 || e5 + xe(null == i2 || null === (a3 = i2.binding) || void 0 === a3 ? void 0 : a3.toString());
                  return Zo.call(this, e5, { key: l2, label: o2, desc: t3.desc, palette: false, keybinding: i2, extras: s2 }, n2);
                }
                case "slash":
                  return ei.call(this, o2, n2);
                case "block-context-menu":
                  return Zo.call(this, "block-context-menu-item", { key: r2, label: o2, desc: t3.desc, extras: s2 }, n2);
                case "highlight-context-menu":
                  return Zo.call(this, "highlight-context-menu-item", { key: r2, label: o2, desc: t3.desc, extras: s2 }, n2);
                case "page-menu":
                  return Zo.call(this, "page-menu-item", { key: r2, label: o2, desc: t3.desc, extras: s2 }, n2);
                default:
                  return Zo.call(this, t3.type || "$commands$", { key: r2, label: o2, desc: t3.desc, palette: t3.palette, keybinding: i2, extras: s2 }, n2);
              }
            });
            return Xo(() => {
              a2.forEach((e4) => {
                "function" == typeof e4 && e4();
              });
            });
          }
          function ni(e3) {
            var t3;
            return null === (t3 = ke(e3)) || void 0 === t3 ? void 0 : t3.replace(/:/g, "-").replace(/^([0-9])/, "_$1");
          }
          function ri(e3) {
            return !("string" != typeof (t3 = e3) || 36 !== t3.length || !/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(t3)) || (Vo.error(`#${e3} is not a valid UUID string.`), false);
            var t3;
          }
          let oi = null, ii = /* @__PURE__ */ new Map();
          const si = { async getInfo(e3) {
            return oi || (oi = await this._execCallableAPIAsync("get-app-info")), "string" == typeof e3 ? oi[e3] : oi;
          }, registerCommand(e3, t3, n2) {
            return ti.call(this, t3.key, { ...t3, type: e3, placement: "simple" }, n2);
          }, registerSearchService(e3) {
            if (ii.has(e3.name)) throw new Error(`SearchService: #${e3.name} has registered!`);
            ii.set(e3.name, new Ho(this, e3));
          }, registerCommandPalette(e3, t3) {
            return ti.call(this, e3.key, { ...e3, placement: "palette" }, t3);
          }, registerCommandShortcut(e3, t3, n2 = {}) {
            e3 = Qo(e3);
            const { binding: r2 } = e3, o2 = n2.key || "$shortcut$" + xe(null == r2 ? void 0 : r2.toString());
            return ti.call(this, o2, { ...n2, key: o2, placement: "shortcut", keybinding: e3 }, t3);
          }, registerUIItem(e3, t3) {
            var n2;
            const r2 = this.baseInfo.id;
            null === (n2 = this.caller) || void 0 === n2 || n2.call("api:call", { method: "register-plugin-ui-item", args: [r2, e3, t3] });
          }, registerPageMenuItem(e3, t3) {
            if ("function" != typeof t3) return false;
            const n2 = e3 + "_" + this.baseInfo.id, r2 = e3;
            ti.call(this, n2, { key: n2, label: r2, placement: "page-menu" }, t3);
          }, onBlockRendererSlotted(e3, t3) {
            if (!ri(e3)) return;
            const n2 = this.baseInfo.id, r2 = `hook:editor:${xe(`slot:${e3}`)}`;
            return this.caller.on(r2, t3), this.App._installPluginHook(n2, r2), () => {
              this.caller.off(r2, t3), this.App._uninstallPluginHook(n2, r2);
            };
          }, invokeExternalPlugin(e3, ...t3) {
            var n2;
            if (!(e3 = null === (n2 = e3) || void 0 === n2 ? void 0 : n2.trim())) return;
            let [r2, o2] = e3.split(".");
            if (!["models", "commands"].includes(null == o2 ? void 0 : o2.toLowerCase())) throw new Error("Type only support '.models' or '.commands' currently.");
            const i2 = e3.replace(`${r2}.${o2}.`, "");
            if (!r2 || !o2 || !i2) throw new Error(`Illegal type of #${e3} to invoke external plugin.`);
            return this._execCallableAPIAsync("invoke_external_plugin_cmd", r2, o2.toLowerCase(), i2, t3);
          }, setFullScreen(e3) {
            const t3 = (...e4) => this._callWin("setFullScreen", ...e4);
            "toggle" === e3 ? this._callWin("isFullScreen").then((e4) => {
              e4 ? t3() : t3(true);
            }) : e3 ? t3(true) : t3();
          } }, ai = { register: ti, execute: function(e3, ...t3) {
            var n2;
            if (!(e3 = null === (n2 = e3) || void 0 === n2 ? void 0 : n2.trim())) return;
            if (e3.startsWith("logseq.")) return this.App.invokeExternalCommand(e3, ...t3);
            const r2 = e3.match(/^([^.]+)\.commands\.(.+)$/);
            if (r2) {
              const [, e4, n3] = r2, o3 = ni(n3);
              return this._execCallableAPIAsync("invoke_external_plugin_cmd", e4, "commands", o3, t3);
            }
            const o2 = e3.indexOf("/");
            return o2 > 0 ? this._execCallableAPIAsync("invoke_external_plugin_cmd", e3.slice(0, o2), "commands", ni(e3.slice(o2 + 1)), t3) : this._execCallableAPIAsync("invoke_external_plugin_cmd", this.baseInfo.id, "commands", ni(e3), t3);
          } };
          let li = 0;
          const ci = { newBlockUUID() {
            return this._execCallableAPIAsync("new_block_uuid");
          }, isPageBlock: (e3) => e3.uuid && e3.hasOwnProperty("name"), registerSlashCommand(e3, t3) {
            return ti.call(this, e3, { title: e3, placement: "slash" }, t3);
          }, registerBlockContextMenuItem(e3, t3) {
            if ("function" != typeof t3) return false;
            const n2 = e3 + "_" + this.baseInfo.id;
            ti.call(this, n2, { key: n2, label: e3, placement: "block-context-menu" }, t3);
          }, registerHighlightContextMenuItem(e3, t3, n2) {
            if ("function" != typeof t3) return false;
            const r2 = e3 + "_" + this.baseInfo.id;
            ti.call(this, r2, { key: r2, label: e3, placement: "highlight-context-menu", extras: n2 }, t3);
          }, scrollToBlockInPage(e3, t3, n2) {
            const r2 = "block-content-" + t3;
            null != n2 && n2.replaceState ? this.App.replaceState("page", { name: e3 }, { anchor: r2 }) : this.App.pushState("page", { name: e3 }, { anchor: r2 });
          } }, ui = { onBlockChanged(e3, t3) {
            if (!ri(e3)) return;
            const n2 = this.baseInfo.id, r2 = `hook:db:${xe(`block:${e3}`)}`, o2 = ({ block: n3, txData: r3, txMeta: o3 }) => {
              n3.uuid === e3 && t3(n3, r3, o3);
            };
            return this.caller.on(r2, o2), this.App._installPluginHook(n2, r2), () => {
              this.caller.off(r2, o2), this.App._uninstallPluginHook(n2, r2);
            };
          }, datascriptQuery(e3, ...t3) {
            if (t3.pop(), null != t3 && t3.some((e4) => "function" == typeof e4)) {
              return this.Experiments.ensureHostScope().logseq.api.datascript_query(e3, ...t3);
            }
            return this._execCallableAPIAsync("datascript_query", e3, ...t3);
          } }, hi = {}, fi = {}, di = {}, pi = { makeSandboxStorage() {
            return new rt(this, { assets: true });
          } };
          var mi = /* @__PURE__ */ new WeakMap(), gi = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap();
          class wi extends be {
            constructor(e3, t3) {
              super(), Wo(this, "_baseInfo", void 0), Wo(this, "_caller", void 0), Wo(this, "_version", "0.3.4"), Wo(this, "_debugTag", ""), Wo(this, "_settingsSchema", void 0), Wo(this, "_connected", false), Wo(this, "_ui", /* @__PURE__ */ new Map()), Wo(this, "_mFileStorage", void 0), Wo(this, "_mNet", void 0), Wo(this, "_mExperiments", void 0), Wo(this, "_beforeunloadCallback", void 0), Bo(this, mi, void 0), Bo(this, gi, void 0), Bo(this, yi, void 0), Bo(this, vi, void 0), Bo(this, bi, void 0), Bo(this, _i, void 0), this._baseInfo = e3, this._caller = t3, t3.on("sys:ui:visible", (e4) => {
                null != e4 && e4.toggle && this.toggleMainUI();
              }), t3.on("settings:changed", (e4) => {
                const t4 = { ...this.settings || {} }, n2 = { ...e4 || {} };
                this._baseInfo = { ...this._baseInfo, settings: n2 }, this.emit("settings:changed", n2, t4);
              }), t3.on("beforeunload", async (e4) => {
                const { actor: t4, ...n2 } = e4, r2 = this._beforeunloadCallback;
                try {
                  r2 && await r2(n2), null == t4 || t4.resolve(null);
                } catch (e5) {
                  this.logger.error("[beforeunload] ", e5), null == t4 || t4.reject(e5);
                }
              });
            }
            async ready(e3, t3) {
              var n2, r2;
              if (!this._connected) try {
                var o2, i2;
                "function" == typeof e3 && (t3 = e3, e3 = {});
                let s2 = await this._caller.connectToParent(e3);
                const a2 = null === (o2 = s2) || void 0 === o2 ? void 0 : o2.settings;
                this._connected = true, n2 = this._baseInfo, r2 = s2, s2 = le()(n2, r2, { arrayMerge: (e4, t4) => t4 }), void 0 !== a2 && (s2.settings = a2), this._baseInfo = s2, null !== (i2 = s2) && void 0 !== i2 && i2.id && (this._debugTag = this._caller.debugTag = `#${s2.id} [${s2.name}]`, this.logger.setTag(this._debugTag)), this._settingsSchema && (s2.settings = function(e4, t4) {
                  const n3 = (t4 || []).reduce((e5, t5) => ("default" in t5 && (e5[t5.key] = t5.default), e5), {});
                  return Object.assign(n3, e4);
                }(s2.settings, this._settingsSchema), await this.useSettingsSchema(this._settingsSchema));
                try {
                  await this._execCallableAPIAsync("setSDKMetadata", { version: this._version, runtime: "js" });
                } catch (e4) {
                  console.warn(e4);
                }
                t3 && t3.call(this, s2);
              } catch (e4) {
                console.error(`${this._debugTag} [Ready Error]`, e4);
              }
            }
            ensureConnected() {
              if (!this._connected) throw new Error("not connected");
            }
            beforeunload(e3) {
              "function" == typeof e3 && (this._beforeunloadCallback = e3);
            }
            provideModel(e3) {
              return this.caller._extendUserModel(e3), this;
            }
            provideTheme(e3) {
              return this.caller.call("provider:theme", e3), this;
            }
            provideStyle(e3) {
              return this.caller.call("provider:style", e3), this;
            }
            provideUI(e3) {
              return this.caller.call("provider:ui", e3), this;
            }
            useSettingsSchema(e3) {
              return this.connected && this.caller.call("settings:schema", { schema: e3, isSync: true }), this._settingsSchema = e3, this;
            }
            updateSettings(e3) {
              this.caller.call("settings:update", e3);
            }
            onSettingsChanged(e3) {
              const t3 = "settings:changed";
              return this.on(t3, e3), () => this.off(t3, e3);
            }
            showSettingsUI() {
              this.caller.call("settings:visible:changed", { visible: true });
            }
            hideSettingsUI() {
              this.caller.call("settings:visible:changed", { visible: false });
            }
            setMainUIAttrs(e3) {
              this.caller.call("main-ui:attrs", e3);
            }
            setMainUIInlineStyle(e3) {
              this.caller.call("main-ui:style", e3);
            }
            hideMainUI(e3) {
              const t3 = { key: 0, visible: false, cursor: null == e3 ? void 0 : e3.restoreEditingCursor };
              this.caller.call("main-ui:visible", t3), this.emit("ui:visible:changed", t3), this._ui.set(t3.key, t3);
            }
            showMainUI(e3) {
              const t3 = { key: 0, visible: true, autoFocus: null == e3 ? void 0 : e3.autoFocus };
              this.caller.call("main-ui:visible", t3), this.emit("ui:visible:changed", t3), this._ui.set(t3.key, t3);
            }
            toggleMainUI() {
              const e3 = 0, t3 = this._ui.get(e3);
              t3 && t3.visible ? this.hideMainUI() : this.showMainUI();
            }
            get version() {
              return this._version;
            }
            get isMainUIVisible() {
              const e3 = this._ui.get(0);
              return Boolean(e3 && e3.visible);
            }
            get connected() {
              return this._connected;
            }
            get baseInfo() {
              return this._baseInfo;
            }
            get effect() {
              return (e3 = this) && ((null === (t3 = e3.baseInfo) || void 0 === t3 ? void 0 : t3.effect) || !(null !== (n2 = e3.baseInfo) && void 0 !== n2 && n2.iir));
              var e3, t3, n2;
            }
            get logger() {
              return Vo;
            }
            get settings() {
              var e3;
              return null === (e3 = this.baseInfo) || void 0 === e3 ? void 0 : e3.settings;
            }
            get caller() {
              return this._caller;
            }
            resolveResourceFullUrl(e3) {
              if (this.ensureConnected(), e3) return e3 = e3.replace(/^[.\\/]+/, ""), Te(this._baseInfo.lsr, e3);
            }
            _makeUserProxy(e3, t3) {
              const n2 = this, r2 = this.caller;
              return new Proxy(e3, { get(e4, o2, i2) {
                const s2 = e4[o2];
                return function(...e5) {
                  if (s2) {
                    0 !== (null == e5 ? void 0 : e5.length) && e5.push(t3);
                    const r3 = s2.apply(n2, e5);
                    if (r3 !== Yo) return r3;
                  }
                  if (t3) {
                    const i4 = o2.toString().match(/^(once|off|on)/i);
                    if (null != i4) {
                      const o3 = i4[0].toLowerCase(), s3 = i4.input, a2 = "off" === o3, l2 = n2.baseInfo.id;
                      let c2 = s3.slice(o3.length), u2 = e5[0], h2 = e5[1];
                      "string" == typeof u2 && "function" == typeof h2 && (u2 = u2.replace(/^logseq./, ":"), c2 = `${c2}${u2}`, u2 = h2, h2 = e5[2]), c2 = `hook:${t3}:${xe(c2)}`, r2[o3](c2, u2);
                      const f2 = () => {
                        r2.off(c2, u2), r2.listenerCount(c2) || n2.App._uninstallPluginHook(l2, c2);
                      };
                      return a2 ? void f2() : (n2.App._installPluginHook(l2, c2, h2), f2);
                    }
                  }
                  let i3 = o2;
                  return ["git", "ui", "assets", "utils"].includes(t3) && (i3 = t3 + "_" + i3), r2.callAsync("api:call", { tag: t3, method: i3, args: e5 });
                };
              } });
            }
            _execCallableAPIAsync(e3, ...t3) {
              return this._caller.callAsync("api:call", { method: e3, args: t3 });
            }
            _execCallableAPI(e3, ...t3) {
              this._caller.call("api:call", { method: e3, args: t3 });
            }
            _callWin(...e3) {
              return this._execCallableAPIAsync("_callMainWin", ...e3);
            }
            get App() {
              return Go(mi, this) ? Go(mi, this) : qo(mi, this, this._makeUserProxy(si, "app"));
            }
            get Commands() {
              return Go(gi, this) ? Go(gi, this) : qo(gi, this, this._makeUserProxy(ai, "commands"));
            }
            get Editor() {
              return Go(yi, this) ? Go(yi, this) : qo(yi, this, this._makeUserProxy(ci, "editor"));
            }
            get DB() {
              return Go(vi, this) ? Go(vi, this) : qo(vi, this, this._makeUserProxy(ui, "db"));
            }
            get UI() {
              return Go(bi, this) ? Go(bi, this) : qo(bi, this, this._makeUserProxy(fi, "ui"));
            }
            get Utils() {
              return Go(_i, this) ? Go(_i, this) : qo(_i, this, this._makeUserProxy(di, "utils"));
            }
            get Git() {
              return this._makeUserProxy(hi, "git");
            }
            get Assets() {
              return this._makeUserProxy(pi, "assets");
            }
            get FileStorage() {
              let e3 = this._mFileStorage;
              return e3 || (e3 = this._mFileStorage = new rt(this)), e3;
            }
            get Net() {
              let e3 = this._mNet;
              return e3 || (e3 = this._mNet = new yt(this)), e3;
            }
            get Experiments() {
              let e3 = this._mExperiments;
              return e3 || (e3 = this._mExperiments = new it(this)), e3;
            }
          }
          function xi(e3, t3) {
            return new wi(e3, t3);
          }
          if (null == window.__LSP__HOST__) {
            const e3 = new tt(null);
            window.logseq = xi({}, e3);
          }
        })(), r;
      })());
    }
  });

  // src/main.js
  var import_libs = __toESM(require_lsplugin_user());
  var DEFAULTS = {
    bridgeUrl: "http://127.0.0.1:32145",
    bridgeSecret: "",
    debounceMs: 8e3
  };
  var runtime = { ...DEFAULTS, ...globalThis.__HOME_OS_CONFIG__ || {} };
  var timer = null;
  var setupContext = null;
  var stopChangeListener = null;
  var LOCAL_README_DIALOG_FIX = `
  .ui__dialog-content[label="plugin-readme"] {
    width: min(900px, calc(100vw - 4rem)) !important;
    max-width: calc(100vw - 2rem) !important;
  }

  .ui__dialog-content[label="plugin-readme"] .cp__plugins-details {
    width: 100%;
    min-width: 0;
  }
`;
  async function bridgeRequest(path, body) {
    const response = await fetch(`${runtime.bridgeUrl}${path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${runtime.bridgeSecret}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body || {})
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(payload.error || `Bridge returned ${response.status}`);
      error.payload = payload;
      throw error;
    }
    return payload;
  }
  async function bridgeHealth() {
    const response = await fetch(`${runtime.bridgeUrl}/health`);
    if (!response.ok) throw new Error(`Bridge health returned ${response.status}`);
    return response.json();
  }
  function delay(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }
  function completionMessage(run) {
    if (run.outcome === "processed") {
      const count = Number(run.handledCount || run.captureCount || 0);
      return {
        message: `${count} capture${count === 1 ? "" : "s"} processed. Home OS is up to date.`,
        type: "success"
      };
    }
    if (run.outcome === "up_to_date") {
      return { message: "Home OS is up to date. No new captures.", type: "success" };
    }
    if (run.outcome === "partially_processed") {
      return { message: "Some captures were processed; at least one still needs attention.", type: "warning" };
    }
    return { message: run.message || "Home OS stopped safely. Your captures were not changed.", type: "warning" };
  }
  async function refreshDashboard() {
    try {
      return await bridgeRequest("/dashboard", {});
    } catch (error) {
      console.warn("Home OS dashboard refresh failed", error);
      return null;
    }
  }
  async function waitForRun(runId) {
    if (!runId) return;
    for (let attempt = 0; attempt < 1200; attempt += 1) {
      await delay(1e3);
      try {
        const health = await bridgeHealth();
        if (health.lastRun?.runId !== runId) continue;
        const result = completionMessage(health.lastRun);
        if (health.lastRun.outcome === "processed" || health.lastRun.outcome === "partially_processed") {
          await refreshDashboard();
        }
        logseq.UI.showMsg(result.message, result.type);
        return;
      } catch (error) {
        if (attempt >= 4) {
          console.warn("Home OS processing status became unavailable", error);
          logseq.UI.showMsg("Home OS is still safe, but its processing status is temporarily unavailable.", "warning");
          return;
        }
      }
    }
    logseq.UI.showMsg("Home OS is still working. You can continue using Logseq.", "warning");
  }
  function setupElements() {
    return {
      title: document.getElementById("home-os-title"),
      lede: document.getElementById("home-os-lede"),
      details: document.getElementById("home-os-details"),
      status: document.getElementById("home-os-status"),
      setup: document.getElementById("home-os-setup"),
      cancel: document.getElementById("home-os-cancel")
    };
  }
  function captureLabel(count) {
    if (count === 1) return "1 capture waiting";
    return `${count || 0} captures waiting`;
  }
  function setSetupStatus(message, state = "working") {
    const { status } = setupElements();
    status.className = `status visible${state === "error" ? " error" : state === "success" ? " success" : ""}`;
    status.innerHTML = state === "working" ? `<span class="spinner" aria-hidden="true"></span><span></span>` : "<span></span>";
    status.lastElementChild.textContent = message;
  }
  function showSetupDialog(payload) {
    setupContext = payload;
    const { title, lede, details, setup, cancel, status } = setupElements();
    const pending = Number(payload.pendingCaptureCount || 0);
    const summary = payload.plan?.summary || {};
    const blocked = payload.plan && payload.plan.ok === false;
    const nextStep = pending > 0 ? `then process ${captureLabel(pending)} from your Journal.` : "then open your dashboard.";
    title.textContent = blocked ? "Home OS needs your attention" : "Make this graph ready for Home OS";
    lede.textContent = blocked ? "An existing name or field conflicts with Home OS, so nothing was changed." : `Home OS will back up this graph, add its organizing fields, and ${nextStep}`;
    details.textContent = blocked ? (payload.plan.conflicts || []).map((conflict) => conflict.reason || conflict.kind).join(" ") : `Adds or reuses fields for homes, rooms, equipment, manufacturer, model, serial number, warranty, manuals, photos, and source review. The plan includes ${summary.tags?.create || 0} new record types and ${summary.properties?.create || 0} new fields.`;
    setup.textContent = pending === 1 ? "Set up and process 1 capture" : pending > 1 ? `Set up and process ${pending} captures` : "Set up Home OS";
    setup.disabled = blocked;
    cancel.disabled = false;
    status.className = "status";
    status.textContent = "";
    logseq.setMainUIInlineStyle({ position: "fixed", inset: "0", width: "100vw", height: "100vh", zIndex: 1e3 });
    logseq.showMainUI({ autoFocus: true });
    window.setTimeout(() => (blocked ? cancel : setup).focus(), 50);
  }
  function hideSetupDialog() {
    if (setupElements().setup.disabled && setupElements().cancel.disabled) return;
    setupContext = null;
    logseq.hideMainUI({ restoreEditingCursor: true });
  }
  async function applyClientSchemaOperations(operations) {
    const tags = await logseq.Editor.getAllTags();
    const byTitle = new Map((tags || []).map((tag) => [tag.title || tag.fullTitle || tag.content, tag]));
    for (const operation of operations || []) {
      if (operation.operation !== "add-tag-extends") throw new Error(`Unsupported Home OS setup operation: ${operation.operation}`);
      const child = byTitle.get(operation.child);
      const parent = byTitle.get(operation.parent);
      if (!child?.uuid || !parent?.uuid) throw new Error(`Could not resolve Home OS tags: ${operation.child} \u2192 ${operation.parent}`);
      await logseq.Editor.addTagExtends(child.uuid, parent.uuid);
    }
  }
  async function installAndProcess() {
    const { setup, cancel } = setupElements();
    setup.disabled = true;
    cancel.disabled = true;
    setSetupStatus("Creating a backup and building your Home OS\u2026");
    try {
      let payload = await bridgeRequest("/setup", { action: "install-and-process" });
      if (payload.clientSetupRequired) {
        setSetupStatus("Finishing the graph structure inside Logseq\u2026");
        await applyClientSchemaOperations(payload.clientOperations);
        payload = await bridgeRequest("/setup/complete", { setupToken: payload.setupToken });
      }
      setSetupStatus(payload.processingQueued ? "Setup verified. Your captures are processing now." : "Setup verified. Opening Home OS.", "success");
      setup.textContent = "Done";
      window.setTimeout(() => {
        setup.disabled = false;
        cancel.disabled = false;
        hideSetupDialog();
        logseq.App.pushState("page", { name: payload.dashboard?.title || "Home OS" });
        if (payload.processingQueued) {
          const count = Number(payload.pendingCaptureCount || 0);
          logseq.UI.showMsg(`Processing ${count} capture${count === 1 ? "" : "s"} now. This can take a few minutes.`, "success");
          void waitForRun(payload.processingRunId);
        } else {
          logseq.UI.showMsg("Home OS is ready.", "success");
        }
      }, 1300);
    } catch (error) {
      console.warn("Home OS setup failed", error);
      setSetupStatus(error.payload?.message || "Setup stopped safely. Your captures were not changed.", "error");
      setup.textContent = "Try again";
      setup.disabled = false;
      cancel.disabled = false;
    }
  }
  async function notifyBridge(reason, visible) {
    try {
      const payload = await bridgeRequest("/events", { reason });
      if (visible && payload.setupRequired) {
        showSetupDialog(payload);
        return;
      }
      if (visible && payload.busy) {
        logseq.UI.showMsg("Home OS is already processing a capture. You can keep using Logseq.", "warning");
        return;
      }
      if (visible && payload.outcome === "up_to_date") {
        logseq.UI.showMsg("Home OS is up to date. No new captures.", "success");
        return;
      }
      if (visible && payload.queued) {
        const count = Number(payload.changedCount || 0);
        logseq.UI.showMsg(`Processing ${count} capture${count === 1 ? "" : "s"} now. This can take a few minutes.`, "success");
        void waitForRun(payload.runId);
      }
      return payload;
    } catch (error) {
      if (visible) logseq.UI.showMsg("Home OS is not running on this Mac. Your capture is safe in Logseq.", "warning");
      console.warn("Home OS bridge notification failed", error);
    }
  }
  async function openHomeOs() {
    try {
      const payload = await bridgeRequest("/dashboard", {});
      if (payload.setupRequired) {
        showSetupDialog(payload);
        return;
      }
      logseq.App.pushState("page", { name: payload.dashboard?.title || "Home OS" });
      await notifyBridge("manual", true);
    } catch (error) {
      logseq.UI.showMsg("Home OS is not running on this Mac. Your Logseq data is unchanged.", "warning");
      console.warn("Home OS dashboard could not open", error);
    }
  }
  function scheduleChangeCheck() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => notifyBridge("db-changed", false), runtime.debounceMs);
  }
  async function main() {
    if (!await logseq.App.checkCurrentIsDbGraph()) {
      logseq.UI.showMsg("Home OS requires a Logseq DB graph.", "warning");
      return;
    }
    logseq.provideStyle(LOCAL_README_DIALOG_FIX);
    logseq.hideMainUI();
    setupElements().setup.addEventListener("click", installAndProcess);
    setupElements().cancel.addEventListener("click", hideSetupDialog);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") hideSetupDialog();
    });
    logseq.provideModel({
      openHomeOs,
      processHomeOs: () => notifyBridge("manual", true)
    });
    logseq.App.registerCommandPalette(
      { key: "home-os-open-dashboard", label: "Home OS: Open dashboard" },
      openHomeOs
    );
    logseq.App.registerCommandPalette(
      { key: "home-os-process-captures", label: "Home OS: Process new captures" },
      () => notifyBridge("manual", true)
    );
    logseq.App.registerUIItem("toolbar", {
      // Keep the legacy toolbar key so an already-pinned Home OS action becomes
      // the dashboard button after upgrading instead of silently disappearing.
      key: "home-os-process-captures",
      template: `
      <a class="button" data-on-click="openHomeOs" title="Open Home OS" aria-label="Open Home OS">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 7v10M18 7v10M8 12h8" />
          <circle cx="6" cy="5" r="2" fill="currentColor" stroke="none" />
          <circle cx="6" cy="19" r="2" fill="currentColor" stroke="none" />
          <circle cx="18" cy="5" r="2" fill="currentColor" stroke="none" />
          <circle cx="18" cy="19" r="2" fill="currentColor" stroke="none" />
        </svg>
      </a>
    `
    });
    stopChangeListener = logseq.DB.onChanged(scheduleChangeCheck);
    logseq.beforeunload(() => {
      if (timer) window.clearTimeout(timer);
      if (typeof stopChangeListener === "function") stopChangeListener();
    });
  }
  logseq.ready(main).catch((error) => console.error("Home OS Capture failed to start", error));
})();
/*! Bundled license information:

@logseq/libs/dist/lsplugin.user.js:
  (*! For license information please see lsplugin.user.js.LICENSE.txt *)
*/
