
/*!
 * GSAP 3.9.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, function (e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
  }

  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function o(t) {
    return "string" == typeof t;
  }

  function p(t) {
    return "function" == typeof t;
  }

  function q(t) {
    return "number" == typeof t;
  }

  function r(t) {
    return void 0 === t;
  }

  function s(t) {
    return "object" == typeof t;
  }

  function t(t) {
    return !1 !== t;
  }

  function u() {
    return "undefined" != typeof window;
  }

  function v(t) {
    return p(t) || o(t);
  }

  function M(t) {
    return (h = mt(t, ot)) && oe;
  }

  function N(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }

  function O(t, e) {
    return !e && console.warn(t);
  }

  function P(t, e) {
    return t && (ot[t] = e) && h && (h[t] = e) || ot;
  }

  function Q() {
    return 0;
  }

  function $(t) {
    var e,
        r,
        i = t[0];

    if (s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
      for (r = ct.length; r-- && !ct[r].targetTest(i););

      e = ct[r];
    }

    for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r], e))) || t.splice(r, 1);

    return t;
  }

  function _(t) {
    return t._gsap || $(xt(t))[0]._gsap;
  }

  function aa(t, e, i) {
    return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i;
  }

  function ba(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }

  function ca(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }

  function da(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }

  function ea(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);

    return i < r;
  }

  function fa() {
    var t,
        e,
        r = ht.length,
        i = ht.slice(0);

    for (lt = {}, t = ht.length = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }

  function ga(t, e, r, i) {
    ht.length && fa(), t.render(e, r, i), ht.length && fa();
  }

  function ha(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t;
  }

  function ia(t) {
    return t;
  }

  function ja(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);

    return t;
  }

  function ma(t, e) {
    for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? ma(t[r] || (t[r] = {}), e[r]) : e[r]);

    return t;
  }

  function na(t, e) {
    var r,
        i = {};

    for (r in t) r in e || (i[r] = t[r]);

    return i;
  }

  function oa(e) {
    var r = e.parent || I,
        i = e.keyframes ? function _setKeyframeDefaults(i) {
      return function (t, e) {
        for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r]);
      };
    }(W(e.keyframes)) : ja;
    if (t(e.inherit)) for (; r;) i(e, r.vars.defaults), r = r.parent || r._dp;
    return e;
  }

  function ra(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
        a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
  }

  function sa(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
  }

  function ta(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) r._dirty = 1, r = r.parent;
    return t;
  }

  function wa(t) {
    return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  }

  function ya(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }

  function za(t) {
    return t._end = da(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0));
  }

  function Aa(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = da(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), za(t), r._dirty || ta(r, t)), t;
  }

  function Ba(t, e) {
    var r;

    if ((e._time || e._initted && !e._dur) && (r = ya(t.rawTime(), e), (!e._dur || Tt(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)), ta(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      t._zTime = -X;
    }
  }

  function Ca(t, e, r, i) {
    return e.parent && sa(e), e._start = da((q(r) ? r : r || t !== I ? bt(t, r, e) : t._time) + e._delay), e._end = da(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), function _addLinkedListItem(t, e, r, i, n) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var a,
          s = t[i];
      if (n) for (a = e[n]; s && s[n] > a;) s = s._prev;
      s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t;
    }(t, e, "_first", "_last", t._sort ? "_start" : 0), vt(e) || (t._recent = e), i || Ba(t, e), t;
  }

  function Da(t, e) {
    return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
  }

  function Ea(t, e, r, i) {
    return jt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== St.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1;
  }

  function Ja(t, e, r, i) {
    var n = t._repeat,
        a = da(e) || 0,
        s = t._tTime / t._tDur;
    return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : da(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i ? Aa(t, t._tTime = t._tDur * s) : t.parent && za(t), r || ta(t.parent, t), t;
  }

  function Ka(t) {
    return t instanceof Nt ? ta(t) : Ja(t, t._dur);
  }

  function Na(e, r, i) {
    var n,
        a,
        s = q(r[1]),
        o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
        u = r[o];

    if (s && (u.duration = r[1]), u.parent = i, e) {
      for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = t(a.vars.inherit) && a.parent;

      u.immediateRender = t(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1];
    }

    return new Jt(r[0], u, r[1 + o]);
  }

  function Oa(t, e) {
    return t || 0 === t ? e(t) : e;
  }

  function Qa(t, e) {
    return o(t) && (e = st.exec(t)) ? t.substr(e.index + e[0].length) : "";
  }

  function Ta(t, e) {
    return t && s(t) && "length" in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i;
  }

  function Xa(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  }

  function Ya(t) {
    if (p(t)) return t;

    var c = s(t) ? t : {
      each: t
    },
        _ = Rt(c.ease),
        m = c.from || 0,
        g = parseFloat(c.base) || 0,
        v = {},
        e = 0 < m && m < 1,
        y = isNaN(m) || e,
        b = c.axis,
        T = m,
        w = m;

    return o(m) ? T = w = {
      center: .5,
      edges: .5,
      end: 1
    }[m] || 0 : !e && y && (T = m[0], w = m[1]), function (t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || c).length,
          p = v[d];

      if (!p) {
        if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, j])[1])) {
          for (h = -j; h < (h = r[f++].getBoundingClientRect().left) && f < d;);

          f--;
        }

        for (p = v[d] = [], i = y ? Math.min(f, d) * T - .5 : m % f, n = f === j ? 0 : y ? d * w / f - .5 : m / f | 0, l = j, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), p[u] = o = b ? Math.abs("y" === b ? s : a) : G(a * a + s * s), h < o && (h = o), o < l && (l = o);

        "random" === m && Xa(p), p.max = h - l, p.min = l, p.v = d = (parseFloat(c.amount) || parseFloat(c.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), p.b = d < 0 ? g - d : g, p.u = Qa(c.amount || c.each) || 0, _ = _ && d < 0 ? Bt(_) : _;
      }

      return d = (p[t] - p.min) / p.max || 0, da(p.b + (_ ? _(d) : d) * p.v) + p.u;
    };
  }

  function Za(r) {
    var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
    return function (t) {
      var e = Math.round(parseFloat(t) / r) * r * i;
      return (e - e % 1) / i + (q(t) ? 0 : Qa(t));
    };
  }

  function $a(u, t) {
    var h,
        l,
        e = W(u);
    return !e && s(u) && (h = e = u.radius || j, u.values ? (u = xt(u.values), (l = !q(u[0])) && (h *= h)) : u = Za(u.increment)), Oa(t, e ? p(u) ? function (t) {
      return l = u(t), Math.abs(l - t) <= h ? l : t;
    } : function (t) {
      for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = j, s = 0, o = u.length; o--;) (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);

      return s = !h || a <= h ? u[s] : t, l || s === t || q(t) ? s : s + Qa(t);
    } : Za(u));
  }

  function _a(t, e, r, i) {
    return Oa(W(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return W(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i;
    });
  }

  function db(e, r, t) {
    return Oa(t, function (t) {
      return e[~~r(t)];
    });
  }

  function gb(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + _a(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;

    return s + t.substr(a, t.length - a);
  }

  function jb(t, e, r) {
    var i,
        n,
        a,
        s = t.labels,
        o = j;

    for (i in s) (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);

    return a;
  }

  function lb(t) {
    return sa(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Mt(t, "onInterrupt"), t;
  }

  function qb(t, e, r) {
    return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * kt + .5 | 0;
  }

  function rb(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        p = t ? q(t) ? [t >> 16, t >> 8 & kt, t & kt] : 0 : Ct.black;

    if (!p) {
      if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ct[t]) p = Ct[t];else if ("#" === t.charAt(0)) {
        if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & kt, p & kt, parseInt(t.substr(7), 16) / 255];
        p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & kt, t & kt];
      } else if ("hsl" === t.substr(0, 3)) {
        if (p = d = t.match(tt), e) {
          if (~t.indexOf("=")) return p = t.match(et), r && p.length < 4 && (p[3] = 1), p;
        } else s = +p[0] % 360 / 360, o = p[1] / 100, i = 2 * (u = p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < p.length && (p[3] *= 1), p[0] = qb(s + 1 / 3, i, n), p[1] = qb(s, i, n), p[2] = qb(s - 1 / 3, i, n);
      } else p = t.match(tt) || Ct.transparent;
      p = p.map(Number);
    }

    return e && !d && (i = p[0] / kt, n = p[1] / kt, a = p[2] / kt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p;
  }

  function sb(t) {
    var r = [],
        i = [],
        n = -1;
    return t.split(Pt).forEach(function (t) {
      var e = t.match(rt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1);
    }), r.c = i, r;
  }

  function tb(t, e, r) {
    var i,
        n,
        a,
        s,
        o = "",
        u = (t + o).match(Pt),
        h = e ? "hsla(" : "rgba(",
        l = 0;
    if (!u) return t;
    if (u = u.map(function (t) {
      return (t = rb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), r && (a = sb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(Pt, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(Pt)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }

  function wb(t) {
    var e,
        r = t.join(" ");
    if (Pt.lastIndex = 0, Pt.test(r)) return e = At.test(r), t[1] = tb(t[1], e), t[0] = tb(t[0], e, sb(t[1])), !0;
  }

  function Fb(t) {
    var e = (t + "").split("("),
        r = zt[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Et, "").trim() : +i, s = r.substr(e + 1).trim();

      return n;
    }(e[1])] : function _valueInParentheses(t) {
      var e = t.indexOf("(") + 1,
          r = t.indexOf(")"),
          i = t.indexOf("(", e);
      return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
    }(t).split(",").map(ha)) : zt._CE && Ft.test(t) ? zt._CE("", t) : r;
  }

  function Hb(t, e) {
    for (var r, i = t._first; i;) i instanceof Nt ? Hb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Hb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
  }

  function Jb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t);
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var n,
        a = {
      easeIn: e,
      easeOut: r,
      easeInOut: i
    };
    return ba(t, function (t) {
      for (var e in zt[t] = ot[t] = a, zt[n = t.toLowerCase()] = r, a) zt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zt[t + "." + e] = a[e];
    }), a;
  }

  function Kb(e) {
    return function (t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
    };
  }

  function Lb(r, t, e) {
    function Sl(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * K((t - a) * n) + 1;
    }

    var i = 1 <= t ? t : 1,
        n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
        a = n / U * (Math.asin(1 / i) || 0),
        s = "out" === r ? Sl : "in" === r ? function (t) {
      return 1 - Sl(1 - t);
    } : Kb(Sl);
    return n = U / n, s.config = function (t, e) {
      return Lb(r, t, e);
    }, s;
  }

  function Mb(e, r) {
    function $l(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }

    void 0 === r && (r = 1.70158);
    var t = "out" === e ? $l : "in" === e ? function (t) {
      return 1 - $l(1 - t);
    } : Kb($l);
    return t.config = function (t) {
      return Mb(e, t);
    }, t;
  }

  var R,
      I,
      i,
      n,
      a,
      h,
      l,
      f,
      d,
      c,
      m,
      g,
      y,
      b,
      T,
      w,
      x,
      k,
      C,
      A,
      S,
      D,
      z,
      F,
      E,
      B,
      Y = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      L = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
      j = 1e8,
      X = 1 / j,
      U = 2 * Math.PI,
      V = U / 4,
      J = 0,
      G = Math.sqrt,
      Z = Math.cos,
      K = Math.sin,
      H = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
      W = Array.isArray,
      tt = /(?:-?\.?\d|\.)+/gi,
      et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      nt = /[+-]=-?[.\d]+/,
      at = /[^,'"\[\]\s]+/gi,
      st = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      ot = {},
      ut = {},
      ht = [],
      lt = {},
      ft = {},
      dt = {},
      pt = 30,
      ct = [],
      _t = "",
      mt = function _merge(t, e) {
    for (var r in e) t[r] = e[r];

    return t;
  },
      gt = function _animationCycle(t, e) {
    var r = Math.floor(t /= e);
    return t && r === t ? r - 1 : r;
  },
      vt = function _isFromOrFromStart(t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e;
  },
      yt = {
    _start: 0,
    endTime: Q,
    totalDuration: Q
  },
      bt = function _parsePosition(t, e, r) {
    var i,
        n,
        a,
        s = t.labels,
        u = t._recent || yt,
        h = t.duration() >= j ? u.endTime(!1) : t._dur;
    return o(e) && (isNaN(e) || e in s) ? (n = e.charAt(0), a = "%" === e.substr(-1), i = e.indexOf("="), "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")), ("<" === n ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = h), s[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)), a && r && (n = n / 100 * (W(r) ? r[0] : r).totalDuration()), 1 < i ? _parsePosition(t, e.substr(0, i - 1), r) + n : h + n)) : null == e ? h : +e;
  },
      Tt = function _clamp(t, e, r) {
    return r < t ? t : e < r ? e : r;
  },
      wt = [].slice,
      xt = function toArray(t, e, r) {
    return !o(t) || r || !n && Dt() ? W(t) ? function _flatten(t, e, r) {
      return void 0 === r && (r = []), t.forEach(function (t) {
        return o(t) && !e || Ta(t, 1) ? r.push.apply(r, xt(t)) : r.push(t);
      }) || r;
    }(t, r) : Ta(t) ? wt.call(t, 0) : t ? [t] : [] : wt.call((e || a).querySelectorAll(t), 0);
  },
      Ot = function mapRange(e, t, r, i, n) {
    var a = t - e,
        s = i - r;
    return Oa(n, function (t) {
      return r + ((t - e) / a * s || 0);
    });
  },
      Mt = function _callback(t, e, r) {
    var i,
        n,
        a = t.vars,
        s = a[e];
    if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && fa(), i ? s.apply(n, i) : s.call(n);
  },
      kt = 255,
      Ct = {
    aqua: [0, kt, kt],
    lime: [0, kt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, kt],
    navy: [0, 0, 128],
    white: [kt, kt, kt],
    olive: [128, 128, 0],
    yellow: [kt, kt, 0],
    orange: [kt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [kt, 0, 0],
    pink: [kt, 192, 203],
    cyan: [0, kt, kt],
    transparent: [kt, kt, kt, 0]
  },
      Pt = function () {
    var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";

    for (t in Ct) e += "|" + t + "\\b";

    return new RegExp(e + ")", "gi");
  }(),
      At = /hsl[a]?\(/,
      St = (x = Date.now, k = 500, C = 33, A = x(), S = A, z = D = 1e3 / 240, b = {
    time: 0,
    frame: 0,
    tick: function tick() {
      Ok(!0);
    },
    deltaRatio: function deltaRatio(t) {
      return T / (1e3 / (t || 60));
    },
    wake: function wake() {
      l && (!n && u() && (i = n = window, a = i.document || {}, ot.gsap = oe, (i.gsapVersions || (i.gsapVersions = [])).push(oe.version), M(h || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), m && b.sleep(), g = y || function (t) {
        return setTimeout(t, z - 1e3 * b.time + 1 | 0);
      }, c = 1, Ok(2));
    },
    sleep: function sleep() {
      (y ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = Q;
    },
    lagSmoothing: function lagSmoothing(t, e) {
      k = t || 1e8, C = Math.min(e, k, 0);
    },
    fps: function fps(t) {
      D = 1e3 / (t || 240), z = 1e3 * b.time + D;
    },
    add: function add(t) {
      F.indexOf(t) < 0 && F.push(t), Dt();
    },
    remove: function remove(t, e) {
      ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= w && w--;
    },
    _listeners: F = []
  }),
      Dt = function _wake() {
    return !c && St.wake();
  },
      zt = {},
      Ft = /^[\d.\-M][\d.\-,\s]/,
      Et = /["']/g,
      Bt = function _invertEase(e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
      Rt = function _parseEase(t, e) {
    return t && (p(t) ? t : zt[t] || Fb(t)) || e;
  };

  function Ok(t) {
    var e,
        r,
        i,
        n,
        a = x() - S,
        s = !0 === t;
    if (k < a && (A += a - C), (0 < (e = (i = (S += a) - A) - z) || s) && (n = ++b.frame, T = i - 1e3 * b.time, b.time = i /= 1e3, z += e + (D <= e ? 4 : D - e), r = 1), s || (m = g(Ok)), r) for (w = 0; w < F.length; w++) F[w](i, T, n, t);
  }

  function pm(t) {
    return t < B ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / 2.75) * t + .9375 : E * Math.pow(t - 2.625 / 2.75, 2) + .984375;
  }

  ba("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Jb(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, r);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
    });
  }), zt.Linear.easeNone = zt.none = zt.Linear.easeIn, Jb("Elastic", Lb("in"), Lb("out"), Lb()), E = 7.5625, B = 1 / 2.75, Jb("Bounce", function (t) {
    return 1 - pm(1 - t);
  }, pm), Jb("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), Jb("Circ", function (t) {
    return -(G(1 - t * t) - 1);
  }), Jb("Sine", function (t) {
    return 1 === t ? 1 : 1 - Z(t * V);
  }), Jb("Back", Mb("in"), Mb("out"), Mb()), zt.SteppedEase = zt.steps = ot.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
          i = t + (e ? 0 : 1),
          n = e ? 1 : 0;
      return function (t) {
        return ((i * Tt(0, .99999999, t) | 0) + n) * r;
      };
    }
  }, L.ease = zt["quad.out"], ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return _t += t + "," + t + "Params,";
  });

  var It,
      Lt = function GSCache(t, e) {
    this.id = J++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : aa, this.set = e ? e.getSetter : Kt;
  },
      qt = ((It = Animation.prototype).delay = function delay(t) {
    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, It.duration = function duration(t) {
    return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, It.totalDuration = function totalDuration(t) {
    return arguments.length ? (this._dirty = 0, Ja(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, It.totalTime = function totalTime(t, e) {
    if (Dt(), !arguments.length) return this._tTime;
    var r = this._dp;

    if (r && r.smoothChildTiming && this._ts) {
      for (Aa(this, t), !r._dp || r.parent || Ba(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;

      !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ca(this._dp, this, this._start - this._delay);
    }

    return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === X || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ga(this, t, e)), this;
  }, It.time = function time(t, e) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + wa(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
  }, It.totalProgress = function totalProgress(t, e) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, It.progress = function progress(t, e) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + wa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, It.iteration = function iteration(t, e) {
    var r = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1;
  }, It.timeScale = function timeScale(t) {
    if (!arguments.length) return this._rts === -X ? 0 : this._rts;
    if (this._rts === t) return this;
    var e = this.parent && this._ts ? ya(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -X ? 0 : this._rts, function _recacheAncestors(t) {
      for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
    }(this.totalTime(Tt(-this._delay, this._tDur, e), !0)), za(this), this;
  }, It.paused = function paused(t) {
    return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Dt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)))), this) : this._ps;
  }, It.startTime = function startTime(t) {
    if (arguments.length) {
      this._start = t;
      var e = this.parent || this._dp;
      return !e || !e._sort && this.parent || Ca(e, this, t - this._delay), this;
    }

    return this._start;
  }, It.endTime = function endTime(e) {
    return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, It.rawTime = function rawTime(t) {
    var e = this.parent || this._dp;
    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ya(e.rawTime(t), this) : this._tTime : this._tTime;
  }, It.globalTime = function globalTime(t) {
    for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;

    return r;
  }, It.repeat = function repeat(t) {
    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ka(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
  }, It.repeatDelay = function repeatDelay(t) {
    if (arguments.length) {
      var e = this._time;
      return this._rDelay = t, Ka(this), e ? this.time(e) : this;
    }

    return this._rDelay;
  }, It.yoyo = function yoyo(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, It.seek = function seek(e, r) {
    return this.totalTime(bt(this, e), t(r));
  }, It.restart = function restart(e, r) {
    return this.play().totalTime(e ? -this._delay : 0, t(r));
  }, It.play = function play(t, e) {
    return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
  }, It.reverse = function reverse(t, e) {
    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
  }, It.pause = function pause(t, e) {
    return null != t && this.seek(t, e), this.paused(!0);
  }, It.resume = function resume() {
    return this.paused(!1);
  }, It.reversed = function reversed(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -X : 0)), this) : this._rts < 0;
  }, It.invalidate = function invalidate() {
    return this._initted = this._act = 0, this._zTime = -X, this;
  }, It.isActive = function isActive() {
    var t,
        e = this.parent || this._dp,
        r = this._start;
    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - X));
  }, It.eventCallback = function eventCallback(t, e, r) {
    var i = this.vars;
    return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
  }, It.then = function then(t) {
    var i = this;
    return new Promise(function (e) {
      function Gn() {
        var t = i.then;
        i.then = null, p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
      }

      var r = p(t) ? t : ia;
      i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Gn() : i._prom = Gn;
    });
  }, It.kill = function kill() {
    lb(this);
  }, Animation);

  function Animation(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ja(this, +t.duration, 1, 1), this.data = t.data, c || St.wake();
  }

  ja(qt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -X,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });

  var Nt = function (n) {
    function Timeline(e, r) {
      var i;
      return void 0 === e && (e = {}), (i = n.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = t(e.sortChildren), I && Ca(e.parent || I, _assertThisInitialized(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Da(_assertThisInitialized(i), e.scrollTrigger), i;
    }

    _inheritsLoose(Timeline, n);

    var e = Timeline.prototype;
    return e.to = function to(t, e, r) {
      return Na(0, arguments, this), this;
    }, e.from = function from(t, e, r) {
      return Na(1, arguments, this), this;
    }, e.fromTo = function fromTo(t, e, r, i) {
      return Na(2, arguments, this), this;
    }, e.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, oa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Jt(t, e, bt(this, r), 1), this;
    }, e.call = function call(t, e, r) {
      return Ca(this, Jt.delayedCall(0, t, e), r);
    }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Jt(t, r, bt(this, n)), this;
    }, e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
      return i.runBackwards = 1, oa(i).immediateRender = t(i.immediateRender), this.staggerTo(e, r, i, n, a, s, o);
    }, e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
      return n.startAt = i, oa(n).immediateRender = t(n.immediateRender), this.staggerTo(e, r, n, a, s, o, u);
    }, e.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          p,
          c,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = t <= 0 ? 0 : da(t),
          y = this._zTime < 0 != t < 0 && (this._initted || !g);

      if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
        if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
          if (p = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);

          if (i = da(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !_ && this._tTime && d !== s && (d = s), p && 1 & s && (i = g - i, c = 1), s !== d && !this._lock) {
            var b = p && 1 & d,
                T = b === (p && 1 & s);
            if (s < d && (b = !b), _ = b ? 0 : g, this._lock = 1, this.render(_ || (c ? 0 : da(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Mt(this, "onRepeat"), this.vars.repeatRefresh && !c && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (g = this._dur, m = this._tDur, T && (this._lock = 2, _ = b ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !c && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
            Hb(this, c);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
          var i;
          if (e < r) for (i = t._first; i && i._start <= r;) {
            if ("isPause" === i.data && i._start > e) return i;
            i = i._next;
          } else for (i = t._last; i && i._start >= r;) {
            if ("isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
        }(this, da(_), da(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && (Mt(this, "onStart"), this._tTime !== v)) return this;
        if (_ <= i && 0 <= t) for (n = this._first; n;) {
          if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
            if (n.parent !== this) return this.render(t, e, r);

            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
              h = 0, a && (v += this._zTime = -X);
              break;
            }
          }

          n = a;
        } else {
          n = this._last;

          for (var w = t < 0 ? t : i; n;) {
            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);

              if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = w ? -X : X);
                break;
              }
            }

            n = a;
          }
        }
        if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, za(this), this.render(t, e, r);
        this._onUpdate && !e && Mt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || sa(this, 1), e || t < 0 && !_ || !v && !_ && m || (Mt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
      }

      return this;
    }, e.add = function add(t, e) {
      var r = this;

      if (q(e) || (e = bt(this, e, t)), !(t instanceof qt)) {
        if (W(t)) return t.forEach(function (t) {
          return r.add(t, e);
        }), this;
        if (o(t)) return this.addLabel(t, e);
        if (!p(t)) return this;
        t = Jt.delayedCall(0, t);
      }

      return this !== t ? Ca(this, t, e) : this;
    }, e.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -j);

      for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Jt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;

      return n;
    }, e.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) if (e[r].vars.id === t) return e[r];
    }, e.remove = function remove(t) {
      return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (ra(this, t), t === this._recent && (this._recent = this._last), ta(this));
    }, e.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = da(St.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
    }, e.addLabel = function addLabel(t, e) {
      return this.labels[t] = bt(this, e), this;
    }, e.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this;
    }, e.addPause = function addPause(t, e, r) {
      var i = Jt.delayedCall(0, e || Q, r);
      return i.data = "isPause", this._hasPause = 1, Ca(this, i, bt(this, t));
    }, e.removePause = function removePause(t) {
      var e = this._first;

      for (t = bt(this, t); e;) e._start === t && "isPause" === e.data && sa(e), e = e._next;
    }, e.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) Qt !== i[n] && i[n].kill(t, e);

      return this;
    }, e.getTweensOf = function getTweensOf(t, e) {
      for (var r, i = [], n = xt(t), a = this._first, s = q(e); a;) a instanceof Jt ? ea(a._targets, n) && (s ? (!Qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;

      return i;
    }, e.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r,
          i = this,
          n = bt(i, t),
          a = e.startAt,
          s = e.onStart,
          o = e.onStartParams,
          u = e.immediateRender,
          h = Jt.to(i, ja({
        ease: e.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: n,
        overwrite: "auto",
        duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || X,
        onStart: function onStart() {
          if (i.pause(), !r) {
            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
            h._dur !== t && Ja(h, t, 0, 1).render(h._time, !0, !0), r = 1;
          }

          s && s.apply(h, o || []);
        }
      }, e));
      return u ? h.render(0) : h;
    }, e.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, ja({
        startAt: {
          time: bt(this, t)
        }
      }, r));
    }, e.recent = function recent() {
      return this._recent;
    }, e.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), jb(this, bt(this, t));
    }, e.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), jb(this, bt(this, t), 1);
    }, e.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + X);
    }, e.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);

      for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;

      if (e) for (i in a) a[i] >= r && (a[i] += t);
      return ta(this);
    }, e.invalidate = function invalidate() {
      var t = this._first;

      for (this._lock = 0; t;) t.invalidate(), t = t._next;

      return n.prototype.invalidate.call(this);
    }, e.clear = function clear(t) {
      void 0 === t && (t = !0);

      for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;

      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ta(this);
    }, e.totalDuration = function totalDuration(t) {
      var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = j;
      if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));

      if (a._dirty) {
        for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ca(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;

        Ja(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
      }

      return a._tDur;
    }, Timeline.updateRoot = function updateRoot(t) {
      if (I._ts && (ga(I, ya(t, I)), f = St.frame), St.frame >= pt) {
        pt += Y.autoSleep || 120;
        var e = I._first;

        if ((!e || !e._ts) && Y.autoSleep && St._listeners.length < 2) {
          for (; e && !e._ts;) e = e._next;

          e || St.sleep();
        }
      }
    }, Timeline;
  }(qt);

  ja(Nt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  function Tb(t, e, r, i, n, a) {
    var u, h, l, f;
    if (ft[t] && !1 !== (u = new ft[t]()).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) {
      if (p(t) && (t = Xt(t, n, e, r, i)), !s(t) || t.style && t.nodeType || W(t) || H(t)) return o(t) ? Xt(t, n, e, r, i) : t;
      var a,
          u = {};

      for (a in t) u[a] = Xt(t[a], n, e, r, i);

      return u;
    }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new ae(r._pt, n, t, 0, 1, u.render, u, 0, u.priority), r !== d)) for (l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length; f--;) l[u._props[f]] = h;
    return u;
  }

  function Xb(t, r, e, i) {
    var n,
        a,
        s = r.ease || i || "power1.inOut";
    if (W(r)) a = e[t] || (e[t] = []), r.forEach(function (t, e) {
      return a.push({
        t: e / (r.length - 1) * 100,
        v: t,
        e: s
      });
    });else for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
      t: parseFloat(t),
      v: r[n],
      e: s
    });
  }

  var Qt,
      Yt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
    p(i) && (i = i(n || 0, t, a));
    var l,
        f = t[e],
        d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f,
        c = p(f) ? h ? Zt : $t : Gt;
    if (o(i) && (~i.indexOf("random(") && (i = gb(i)), "=" === i.charAt(1) && (!(l = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Qa(d) || 0)) && 0 !== l || (i = l))), d !== i) return isNaN(d * i) || "" === i ? (f || e in t || N(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
      var o,
          u,
          h,
          l,
          f,
          d,
          p,
          c,
          _ = new ae(this._pt, t, e, 0, 1, te, null, n),
          m = 0,
          g = 0;

      for (_.b = r, _.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = gb(i)), a && (a(c = [r, i], t, e), r = c[0], i = c[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
        _next: _._pt,
        p: f || 1 === g ? f : ",",
        s: d,
        c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
        m: h && h < 4 ? Math.round : 0
      }, m = it.lastIndex);

      return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || p) && (_.e = 0), this._pt = _;
    }.call(this, t, e, d, i, c, u || Y.stringFilter, h)) : (l = new ae(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof f ? Wt : Ht, 0, c), h && (l.fp = h), s && l.modifier(s, this, t), this._pt = l);
  },
      jt = function _initTween(e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        c,
        m,
        g = e.vars,
        v = g.ease,
        y = g.startAt,
        b = g.immediateRender,
        T = g.lazy,
        w = g.onUpdate,
        x = g.onUpdateParams,
        O = g.callbackScope,
        M = g.runBackwards,
        k = g.yoyoEase,
        C = g.keyframes,
        P = g.autoRevert,
        A = e._dur,
        S = e._startAt,
        D = e._targets,
        z = e.parent,
        F = z && "nested" === z.data ? z.parent._targets : D,
        E = "auto" === e._overwrite && !R,
        B = e.timeline;

    if (!B || C && v || (v = "none"), e._ease = Rt(v, L.ease), e._yEase = k ? Bt(Rt(!0 === k ? v : k, L.ease)) : 0, k && e._yoyo && !e._repeat && (k = e._yEase, e._yEase = e._ease, e._ease = k), e._from = !B && !!g.runBackwards, !B || C && !g.stagger) {
      if (c = (l = D[0] ? _(D[0]).harness : 0) && g[l.prop], i = na(g, ut), S && sa(S.render(-1, !0)), y) {
        if (sa(e._startAt = Jt.set(D, ja({
          data: "isStart",
          overwrite: !1,
          parent: z,
          immediateRender: !0,
          lazy: t(T),
          startAt: null,
          delay: 0,
          onUpdate: w,
          onUpdateParams: x,
          callbackScope: O,
          stagger: 0
        }, y))), r < 0 && !b && !P && e._startAt.render(-1, !0), b) {
          if (0 < r && !P && (e._startAt = 0), A && r <= 0) return void (r && (e._zTime = r));
        } else !1 === P && (e._startAt = 0);
      } else if (M && A) if (S) P || (e._startAt = 0);else if (r && (b = !1), a = ja({
        overwrite: !1,
        data: "isFromStart",
        lazy: b && t(T),
        immediateRender: b,
        stagger: 0,
        parent: z
      }, i), c && (a[l.prop] = c), sa(e._startAt = Jt.set(D, a)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, b) {
        if (!r) return;
      } else _initTween(e._startAt, X);

      for (e._pt = 0, T = A && t(T) || T && !A, n = 0; n < D.length; n++) {
        if (h = (o = D[n])._gsap || $(D)[n]._gsap, e._ptLookup[n] = d = {}, lt[h.id] && ht.length && fa(), p = F === D ? n : F.indexOf(o), l && !1 !== (f = new l()).init(o, c || i, e, p, F) && (e._pt = s = new ae(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
          d[t] = s;
        }), f.priority && (u = 1)), !l || c) for (a in i) ft[a] && (f = Tb(a, i, e, p, o, F)) ? f.priority && (u = 1) : d[a] = s = Yt.call(e, o, a, "get", i[a], p, F, 0, g.stringFilter);
        e._op && e._op[n] && e.kill(o, e._op[n]), E && e._pt && (Qt = e, I.killTweensOf(o, d, e.globalTime(r)), m = !e.parent, Qt = 0), e._pt && T && (lt[h.id] = 1);
      }

      u && ne(e), e._onInit && e._onInit(e);
    }

    e._onUpdate = w, e._initted = (!e._op || e._pt) && !m, C && r <= 0 && B.render(j, !0, !0);
  },
      Xt = function _parseFuncOrString(t, e, r, i, n) {
    return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? gb(t) : t;
  },
      Ut = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Vt = {};

  ba(Ut + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return Vt[t] = 1;
  });

  var Jt = function (F) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && (i.duration = r, r = i, i = null);
      var o,
          u,
          h,
          l,
          f,
          d,
          p,
          c,
          _ = (a = F.call(this, n ? r : oa(r)) || this).vars,
          m = _.duration,
          g = _.delay,
          y = _.immediateRender,
          b = _.stagger,
          T = _.overwrite,
          w = _.keyframes,
          x = _.defaults,
          M = _.scrollTrigger,
          k = _.yoyoEase,
          C = r.parent || I,
          P = (W(e) || H(e) ? q(e[0]) : "length" in r) ? [e] : xt(e);

      if (a._targets = P.length ? $(P) : O("GSAP target " + e + " not found. https://greensock.com", !Y.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = T, w || b || v(m) || v(g)) {
        if (r = a.vars, (o = a.timeline = new Nt({
          data: "nested",
          defaults: x || {}
        })).kill(), o.parent = o._dp = _assertThisInitialized(a), o._start = 0, b || v(m) || v(g)) {
          if (l = P.length, p = b && Ya(b), s(b)) for (f in b) ~Ut.indexOf(f) && ((c = c || {})[f] = b[f]);

          for (u = 0; u < l; u++) (h = na(r, Vt)).stagger = 0, k && (h.yoyoEase = k), c && mt(h, c), d = P[u], h.duration = +Xt(m, _assertThisInitialized(a), u, d, P), h.delay = (+Xt(g, _assertThisInitialized(a), u, d, P) || 0) - a._delay, !b && 1 === l && h.delay && (a._delay = g = h.delay, a._start += g, h.delay = 0), o.to(d, h, p ? p(u, d, P) : 0), o._ease = zt.none;

          o.duration() ? m = g = 0 : a.timeline = 0;
        } else if (w) {
          oa(ja(o.vars.defaults, {
            ease: "none"
          })), o._ease = Rt(w.ease || r.ease || "none");
          var A,
              S,
              D,
              z = 0;
          if (W(w)) w.forEach(function (t) {
            return o.to(P, t, ">");
          });else {
            for (f in h = {}, w) "ease" === f || "easeEach" === f || Xb(f, w[f], h, w.easeEach);

            for (f in h) for (A = h[f].sort(function (t, e) {
              return t.t - e.t;
            }), u = z = 0; u < A.length; u++) (D = {
              ease: (S = A[u]).e,
              duration: (S.t - (u ? A[u - 1].t : 0)) / 100 * m
            })[f] = S.v, o.to(P, D, z), z += D.duration;

            o.duration() < m && o.to({}, {
              duration: m - o.duration()
            });
          }
        }

        m || a.duration(m = o.duration());
      } else a.timeline = 0;

      return !0 !== T || R || (Qt = _assertThisInitialized(a), I.killTweensOf(P), Qt = 0), Ca(C, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (y || !m && !w && a._start === da(C._time) && t(y) && function _hasNoPausedAncestors(t) {
        return !t || t._ts && _hasNoPausedAncestors(t.parent);
      }(_assertThisInitialized(a)) && "nested" !== C.data) && (a._tTime = -X, a.render(Math.max(0, -g))), M && Da(_assertThisInitialized(a), M), a;
    }

    _inheritsLoose(Tween, F);

    var e = Tween.prototype;
    return e.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = this._time,
          p = this._tDur,
          c = this._dur,
          _ = p - X < t && 0 <= t ? p : t < X ? 0 : t;

      if (c) {
        if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
          if (i = _, l = this.timeline, this._repeat) {
            if (s = c + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
            if (i = da(_ % s), _ === p ? (a = this._repeat, i = c) : ((a = ~~(_ / s)) && a === _ / s && (i = c, a--), c < i && (i = c)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = c - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this;
            a !== o && (l && this._yEase && Hb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(da(s * a), !0).invalidate()._lock = 0));
          }

          if (!this._initted) {
            if (Ea(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
            if (c !== this._dur) return this.render(t, e, r);
          }

          if (this._tTime = _, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / c), this._from && (this.ratio = h = 1 - h), i && !d && !e && (Mt(this, "onStart"), this._tTime !== _)) return this;

          for (n = this._pt; n;) n.r(h, n.d), n = n._next;

          l && l.render(t < 0 ? t : !i && u ? -X : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), Mt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Mt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && c || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || sa(this, 1), e || t < 0 && !d || !_ && !d || (Mt(this, _ === p ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < p && 0 < this.timeScale() || this._prom()));
        }
      } else !function _renderZeroDurationTween(t, e, r, i) {
        var n,
            a,
            s,
            o = t.ratio,
            u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
          var e = t.parent;
          return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e));
        }(t) && (t._initted || !vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !vt(t)) ? 0 : 1,
            h = t._rDelay,
            l = 0;

        if (h && t._repeat && (l = Tt(0, t._tDur, e), a = gt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== gt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === X || !e && t._zTime) {
          if (!t._initted && Ea(t, e, i, r)) return;

          for (s = t._zTime, t._zTime = e || (r ? X : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;

          t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && Mt(t, "onUpdate"), l && t._repeat && !r && t.parent && Mt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && sa(t, 1), r || (Mt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, r);

      return this;
    }, e.targets = function targets() {
      return this._targets;
    }, e.invalidate = function invalidate() {
      return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), F.prototype.invalidate.call(this);
    }, e.kill = function kill(t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? lb(this) : this;

      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Qt && !0 !== Qt.vars.overwrite)._first || lb(this), this.parent && r !== this.timeline.totalDuration() && Ja(this, this._dur * this.timeline._tDur / r, 0, 1), this;
      }

      var i,
          n,
          a,
          s,
          u,
          h,
          l,
          f = this._targets,
          d = t ? xt(t) : f,
          p = this._ptLookup,
          c = this._pt;
      if ((!e || "all" === e) && function _arraysMatch(t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);

        return r < 0;
      }(f, d)) return "all" === e && (this._pt = 0), lb(this);

      for (i = this._op = this._op || [], "all" !== e && (o(e) && (u = {}, ba(e, function (t) {
        return u[t] = 1;
      }), e = u), e = function _addAliasesToVars(t, e) {
        var r,
            i,
            n,
            a,
            s = t[0] ? _(t[0]).harness : 0,
            o = s && s.aliases;
        if (!o) return e;

        for (i in r = mt({}, e), o) if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];

        return r;
      }(f, e)), l = f.length; l--;) if (~d.indexOf(f[l])) for (u in n = p[l], "all" === e ? (i[l] = e, s = n, a = {}) : (a = i[l] = i[l] || {}, s = e), s) (h = n && n[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ra(this, h, "_pt"), delete n[u]), "all" !== a && (a[u] = 1);

      return this._initted && !this._pt && c && lb(this), this;
    }, Tween.to = function to(t, e, r) {
      return new Tween(t, e, r);
    }, Tween.from = function from(t, e) {
      return Na(1, arguments);
    }, Tween.delayedCall = function delayedCall(t, e, r, i) {
      return new Tween(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      });
    }, Tween.fromTo = function fromTo(t, e, r) {
      return Na(2, arguments);
    }, Tween.set = function set(t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
    }, Tween.killTweensOf = function killTweensOf(t, e, r) {
      return I.killTweensOf(t, e, r);
    }, Tween;
  }(qt);

  ja(Jt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), ba("staggerTo,staggerFrom,staggerFromTo", function (r) {
    Jt[r] = function () {
      var t = new Nt(),
          e = wt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
    };
  });

  function dc(t, e, r) {
    return t.setAttribute(e, r);
  }

  function lc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }

  var Gt = function _setterPlain(t, e, r) {
    return t[e] = r;
  },
      $t = function _setterFunc(t, e, r) {
    return t[e](r);
  },
      Zt = function _setterFuncWithParam(t, e, r, i) {
    return t[e](i.fp, r);
  },
      Kt = function _getSetter(t, e) {
    return p(t[e]) ? $t : r(t[e]) && t.setAttribute ? dc : Gt;
  },
      Ht = function _renderPlain(t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
  },
      Wt = function _renderBoolean(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
      te = function _renderComplexString(t, e) {
    var r = e._pt,
        i = "";
    if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
      for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;

      i += e.c;
    }
    e.set(e.t, e.p, i, e);
  },
      ee = function _renderPropTweens(t, e) {
    for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
  },
      re = function _addPluginModifier(t, e, r, i) {
    for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n;
  },
      ie = function _killPropTweensOf(t) {
    for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? ra(this, i, "_pt") : i.dep || (e = 1), i = r;

    return !e;
  },
      ne = function _sortPropTweensByPriority(t) {
    for (var e, r, i, n, a = t._pt; a;) {
      for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;

      (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
    }

    t._pt = i;
  },
      ae = (PropTween.prototype.modifier = function modifier(t, e, r) {
    this.mSet = this.mSet || this.set, this.set = lc, this.m = t, this.mt = r, this.tween = e;
  }, PropTween);

  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Ht, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this);
  }

  ba(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return ut[t] = 1;
  }), ot.TweenMax = ot.TweenLite = Jt, ot.TimelineLite = ot.TimelineMax = Nt, I = new Nt({
    sortChildren: !1,
    defaults: L,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), Y.stringFilter = wb;
  var se = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];

      e.forEach(function (t) {
        return function _createPlugin(t) {
          var e = (t = !t.name && t.default || t).name,
              r = p(t),
              i = e && !r && t.init ? function () {
            this._props = [];
          } : t,
              n = {
            init: Q,
            render: ee,
            add: Yt,
            kill: ie,
            modifier: re,
            rawVars: 0
          },
              a = {
            targetTest: 0,
            get: 0,
            getSetter: Kt,
            aliases: {},
            register: 0
          };

          if (Dt(), t !== i) {
            if (ft[e]) return;
            ja(i, ja(na(t, n), a)), mt(i.prototype, mt(n, na(t, a))), ft[i.prop = e] = i, t.targetTest && (ct.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
          }

          P(e, i), t.register && t.register(oe, i, ae);
        }(t);
      });
    },
    timeline: function timeline(t) {
      return new Nt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return I.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      o(i) && (i = xt(i)[0]);

      var n = _(i || {}).get,
          a = e ? ia : ha;

      return "native" === e && (e = ""), i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function (t, e, r) {
        return a((ft[t] && ft[t].get || n)(i, t, e, r));
      } : i;
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = xt(r)).length) {
        var n = r.map(function (t) {
          return oe.quickSetter(t, e, i);
        }),
            a = n.length;
        return function (t) {
          for (var e = a; e--;) n[e](t);
        };
      }

      r = r[0] || {};

      var s = ft[e],
          o = _(r),
          u = o.harness && (o.harness.aliases || {})[e] || e,
          h = s ? function (t) {
        var e = new s();
        d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && ee(1, d);
      } : o.set(r, u);

      return s ? h : function (t) {
        return h(r, u, i ? t + i : t, o, 1);
      };
    },
    isTweening: function isTweening(t) {
      return 0 < I.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Rt(t.ease, L.ease)), ma(L, t || {});
    },
    config: function config(t) {
      return ma(Y, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
          n = t.effect,
          e = t.plugins,
          a = t.defaults,
          r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.");
      }), dt[i] = function (t, e, r) {
        return n(xt(t), ja(e || {}, a), r);
      }, r && (Nt.prototype[i] = function (t, e, r) {
        return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r);
      });
    },
    registerEase: function registerEase(t, e) {
      zt[t] = Rt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Rt(t, e) : zt;
    },
    getById: function getById(t) {
      return I.getById(t);
    },
    exportRoot: function exportRoot(e, r) {
      void 0 === e && (e = {});
      var i,
          n,
          a = new Nt(e);

      for (a.smoothChildTiming = t(e.smoothChildTiming), I.remove(a), a._dp = 0, a._time = a._tTime = I._time, i = I._first; i;) n = i._next, !r && !i._dur && i instanceof Jt && i.vars.onComplete === i._targets[0] || Ca(a, i, i._start - i._delay), i = n;

      return Ca(I, a, 0), a;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return W(e) ? db(e, wrap(0, e.length), t) : Oa(r, function (t) {
          return (i + (t - e) % i) % i + e;
        });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
            n = 2 * i;
        return W(e) ? db(e, wrapYoyo(0, e.length - 1), t) : Oa(r, function (t) {
          return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
        });
      },
      distribute: Ya,
      random: _a,
      snap: $a,
      normalize: function normalize(t, e, r) {
        return Ot(t, e, 0, 1, r);
      },
      getUnit: Qa,
      clamp: function clamp(e, r, t) {
        return Oa(t, function (t) {
          return Tt(e, r, t);
        });
      },
      splitColor: rb,
      toArray: xt,
      selector: function selector(r) {
        return r = xt(r)[0] || O("Invalid scope") || {}, function (t) {
          var e = r.current || r.nativeElement || r;
          return xt(t, e.querySelectorAll ? e : e === r ? O("Invalid scope") || a.createElement("div") : r);
        };
      },
      mapRange: Ot,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];

        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Qa(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var n = isNaN(e + r) ? 0 : function (t) {
          return (1 - t) * e + t * r;
        };

        if (!n) {
          var a,
              s,
              u,
              h,
              l,
              f = o(e),
              d = {};
          if (!0 === t && (i = 1) && (t = null), f) e = {
            p: e
          }, r = {
            p: r
          };else if (W(e) && !W(r)) {
            for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++) u.push(interpolate(e[s - 1], e[s]));

            h--, n = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }, t = r;
          } else i || (e = mt(W(e) ? [] : {}, e));

          if (!u) {
            for (a in r) Yt.call(d, e, a, "get", r[a]);

            n = function func(t) {
              return ee(t, d) || (f ? e.p : e);
            };
          }
        }

        return Oa(t, n);
      },
      shuffle: Xa
    },
    install: M,
    effects: dt,
    ticker: St,
    updateRoot: Nt.updateRoot,
    plugins: ft,
    globalTimeline: I,
    core: {
      PropTween: ae,
      globals: P,
      Tween: Jt,
      Timeline: Nt,
      Animation: qt,
      getCache: _,
      _removeLinkedListItem: ra,
      suppressOverwrites: function suppressOverwrites(t) {
        return R = t;
      }
    }
  };
  ba("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return se[t] = Jt[t];
  }), St.add(Nt.updateRoot), d = se.to({}, {
    duration: 0
  });

  function pc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;

    return r;
  }

  function rc(t, n) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;

          if (o(i) && (e = {}, ba(i, function (t) {
            return e[t] = 1;
          }), i = e), n) {
            for (r in e = {}, i) e[r] = n(i[r]);

            i = e;
          }

          !function _addModifiers(t, e) {
            var r,
                i,
                n,
                a = t._targets;

            for (r in e) for (i = a.length; i--;) (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = pc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
          }(t, i);
        };
      }
    };
  }

  var oe = se.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      var a, s;

      for (a in e) (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a);
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r]);
    }
  }, rc("roundProps", Za), rc("modifiers"), rc("snap", $a)) || se;
  Jt.version = Nt.version = oe.version = "3.9.1", l = 1, u() && Dt();

  function ad(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function bd(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function cd(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }

  function dd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
  }

  function ed(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }

  function fd(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }

  function gd(t, e, r) {
    return t.style[e] = r;
  }

  function hd(t, e, r) {
    return t.style.setProperty(e, r);
  }

  function id(t, e, r) {
    return t._gsap[e] = r;
  }

  function jd(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r;
  }

  function kd(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a);
  }

  function ld(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a);
  }

  function pd(t, e) {
    var r = he.createElementNS ? he.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : he.createElement(t);
    return r.style ? r : he.createElement(t);
  }

  function qd(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(Ie, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && qd(t, Xe(e) || e, 1) || "";
  }

  function td() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() && window.document && (ue = window, he = ue.document, le = he.documentElement, de = pd("div") || {
      style: {}
    }, pd("div"), Qe = Xe(Qe), Ye = Qe + "Origin", de.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ce = !!Xe("perspective"), fe = 1);
  }

  function ud(t) {
    var e,
        r = pd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        i = this.parentNode,
        n = this.nextSibling,
        a = this.style.cssText;
    if (le.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = ud;
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), le.removeChild(r), this.style.cssText = a, e;
  }

  function vd(t, e) {
    for (var r = e.length; r--;) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }

  function wd(e) {
    var r;

    try {
      r = e.getBBox();
    } catch (t) {
      r = ud.call(e, !0);
    }

    return r && (r.width || r.height) || e.getBBox === ud || (r = ud.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +vd(e, ["x", "cx", "x1"]) || 0,
      y: +vd(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  }

  function xd(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !wd(t));
  }

  function yd(t, e) {
    if (e) {
      var r = t.style;
      e in Fe && e !== Ye && (e = Qe), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Ie, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }

  function zd(t, e, r, i, n, a) {
    var s = new ae(t._pt, e, r, 0, 1, a ? fd : ed);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
  }

  function Bd(t, e, r, i) {
    var n,
        a,
        s,
        o,
        u = parseFloat(r) || 0,
        h = (r + "").trim().substr((u + "").length) || "px",
        l = de.style,
        f = Le.test(e),
        d = "svg" === t.tagName.toLowerCase(),
        p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
        c = "px" === i,
        m = "%" === i;
    return i === h || !u || Ue[i] || Ue[h] ? u : ("px" === h || c || (u = Bd(t, e, r, "px")), o = t.getCTM && xd(t), !m && "%" !== h || !Fe[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (c ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== he && a.appendChild || (a = he.body), (s = a._gsap) && m && s.width && f && s.time === St.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = qd(t, "position")), a === t && (l.position = "static"), a.appendChild(de), n = de[p], a.removeChild(de), l.position = "absolute", f && m && ((s = _(a)).time = St.time, s.width = a[p]), ca(c ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[p], ca(m ? u / n * 100 : u / 100 * n)));
  }

  function Cd(t, e, r, i) {
    var n;
    return fe || td(), e in Ne && "transform" !== e && ~(e = Ne[e]).indexOf(",") && (e = e.split(",")[0]), Fe[e] && "transform" !== e ? (n = Ze(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Ke(qd(t, Ye)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Je[e] && Je[e](t, e, r) || qd(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Bd(t, e, n, r) + r : n;
  }

  function Dd(t, e, r, i) {
    if (!r || "none" === r) {
      var n = Xe(e, t, 1),
          a = n && qd(t, n, 1);
      a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = qd(t, "borderTopColor"));
    }

    var s,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        c,
        _,
        m,
        g,
        v = new ae(this._pt, t.style, e, 0, 1, te),
        y = 0,
        b = 0;

    if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = qd(t, e) || i, t.style[e] = r), wb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
      for (; o = rt.exec(i);) d = o[0], c = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5) || (l = 1), d !== (f = u[b++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), p = parseFloat(d), _ = d.substr((p + "").length), y = rt.lastIndex - _.length, _ || (_ = _ || Y.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = Bd(t, e, f, _) || 0), v._pt = {
        _next: v._pt,
        p: c || 1 === b ? c : ",",
        s: h,
        c: g ? g * p : p - h,
        m: l && l < 4 || "zIndex" === e ? Math.round : 0
      });

      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === e && "none" === i ? fd : ed;

    return nt.test(i) && (v.e = 0), this._pt = v;
  }

  function Fd(t) {
    var e = t.split(" "),
        r = e[0],
        i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Ve[r] || r, e[1] = Ve[i] || i, e.join(" ");
  }

  function Gd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
          i,
          n,
          a = e.t,
          s = a.style,
          o = e.u,
          u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) r = o[n], Fe[r] && (i = 1, r = "transformOrigin" === r ? Ye : Qe), yd(a, r);
      i && (yd(a, Qe), u && (u.svg && a.removeAttribute("transform"), Ze(a, 1), u.uncache = 1));
    }
  }

  function Kd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }

  function Ld(t) {
    var e = qd(t, Qe);
    return Kd(e) ? Ge : e.substr(7).match(et).map(ca);
  }

  function Md(t, e) {
    var r,
        i,
        n,
        a,
        s = t._gsap || _(t),
        o = t.style,
        u = Ld(t);

    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ge : u : (u !== Ge || t.offsetParent || t === le || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, le.appendChild(t)), u = Ld(t), n ? o.display = n : yd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : le.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }

  function Nd(t, e, r, i, n, a) {
    var s,
        o,
        u,
        h = t._gsap,
        l = n || Md(t, !0),
        f = h.xOrigin || 0,
        d = h.yOrigin || 0,
        p = h.xOffset || 0,
        c = h.yOffset || 0,
        _ = l[0],
        m = l[1],
        g = l[2],
        v = l[3],
        y = l[4],
        b = l[5],
        T = e.split(" "),
        w = parseFloat(T[0]) || 0,
        x = parseFloat(T[1]) || 0;
    r ? l !== Ge && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * b - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * b - v * y) / o, x = u) : (w = (s = wd(t)).x + (~T[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, b = x - d, h.xOffset = p + (y * _ + b * g) - y, h.yOffset = c + (y * m + b * v) - b) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Ye] = "0px 0px", a && (zd(a, h, "xOrigin", f, w), zd(a, h, "yOrigin", d, x), zd(a, h, "xOffset", p, h.xOffset), zd(a, h, "yOffset", c, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
  }

  function Qd(t, e, r) {
    var i = Qa(e);
    return ca(parseFloat(e) + parseFloat(Bd(t, "x", r + "px", i))) + i;
  }

  function Xd(t, e, r, i, n, a) {
    var s,
        u,
        h = 360,
        l = o(n),
        f = parseFloat(n) * (l && ~n.indexOf("rad") ? Ee : 1),
        d = a ? f * a : f - i,
        p = i + d + "deg";
    return l && ("short" === (s = n.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === s && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === s && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ae(t._pt, e, r, i, d, bd), u.e = p, u.u = "deg", t._props.push(r), u;
  }

  function Yd(t, e) {
    for (var r in e) t[r] = e[r];

    return t;
  }

  function Zd(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l = Yd({}, r._gsap),
        f = r.style;

    for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[Qe] = e, i = Ze(r, 1), yd(r, Qe), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[Qe], f[Qe] = e, i = Ze(r, 1), f[Qe] = a), Fe) (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Qa(a) !== (h = Qa(s)) ? Bd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ae(t._pt, i, n, o, u - o, ad), t._pt.u = h || 0, t._props.push(n));

    Yd(i, l);
  }

  var ue,
      he,
      le,
      fe,
      de,
      pe,
      ce,
      _e = zt.Power0,
      me = zt.Power1,
      ge = zt.Power2,
      ve = zt.Power3,
      ye = zt.Power4,
      be = zt.Linear,
      Te = zt.Quad,
      we = zt.Cubic,
      xe = zt.Quart,
      Oe = zt.Quint,
      Me = zt.Strong,
      ke = zt.Elastic,
      Ce = zt.Back,
      Pe = zt.SteppedEase,
      Ae = zt.Bounce,
      Se = zt.Sine,
      De = zt.Expo,
      ze = zt.Circ,
      Fe = {},
      Ee = 180 / Math.PI,
      Be = Math.PI / 180,
      Re = Math.atan2,
      Ie = /([A-Z])/g,
      Le = /(?:left|right|width|margin|padding|x)/i,
      qe = /[\s,\(]\S/,
      Ne = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      Qe = "transform",
      Ye = Qe + "Origin",
      je = "O,Moz,ms,Ms,Webkit".split(","),
      Xe = function _checkPropPrefix(t, e, r) {
    var i = (e || de).style,
        n = 5;
    if (t in i && !r) return t;

    for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(je[n] + t in i););

    return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? je[n] : "") + t;
  },
      Ue = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      Ve = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      Je = {
    clearProps: function clearProps(t, e, r, i, n) {
      if ("isFromStart" !== n.data) {
        var a = t._pt = new ae(t._pt, e, r, 0, 0, Gd);
        return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
      }
    }
  },
      Ge = [1, 0, 0, 1, 0, 0],
      $e = {},
      Ze = function _parseTransform(t, e) {
    var r = t._gsap || new Lt(t);
    if ("x" in r && !e && !r.uncache) return r;

    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        c,
        _,
        m,
        g,
        v,
        y,
        b,
        T,
        w,
        x,
        O,
        M,
        k,
        C,
        P,
        A,
        S,
        D,
        z,
        F,
        E,
        B = t.style,
        R = r.scaleX < 0,
        I = "deg",
        L = qd(t, Ye) || "0";

    return i = n = a = u = h = l = f = d = p = 0, s = o = 1, r.svg = !(!t.getCTM || !xd(t)), m = Md(t, r.svg), r.svg && (k = (!r.uncache || "0px 0px" === L) && !e && t.getAttribute("data-svg-origin"), Nd(t, k || L, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), c = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Ge && (b = m[0], T = m[1], w = m[2], x = m[3], i = O = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(b * b + T * T), o = Math.sqrt(x * x + w * w), u = b || T ? Re(T, b) * Ee : 0, (f = w || x ? Re(w, x) * Ee + u : 0) && (o *= Math.abs(Math.cos(f * Be))), r.svg && (i -= c - (c * b + _ * w), n -= _ - (c * T + _ * x))) : (E = m[6], z = m[7], A = m[8], S = m[9], D = m[10], F = m[11], i = m[12], n = m[13], a = m[14], h = (g = Re(E, D)) * Ee, g && (k = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), C = M * v + S * y, P = E * v + D * y, A = O * -y + A * v, S = M * -y + S * v, D = E * -y + D * v, F = z * -y + F * v, O = k, M = C, E = P), l = (g = Re(-w, D)) * Ee, g && (v = Math.cos(-g), F = x * (y = Math.sin(-g)) + F * v, b = k = b * v - A * y, T = C = T * v - S * y, w = P = w * v - D * y), u = (g = Re(T, b)) * Ee, g && (k = b * (v = Math.cos(g)) + T * (y = Math.sin(g)), C = O * v + M * y, T = T * v - b * y, M = M * v - O * y, b = k, O = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ca(Math.sqrt(b * b + T * T + w * w)), o = ca(Math.sqrt(M * M + E * E)), g = Re(O, M), f = 2e-4 < Math.abs(g) ? g * Ee : 0, p = F ? 1 / (F < 0 ? -F : F) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Kd(qd(t, Qe)), k && t.setAttribute("transform", k))), 90 < Math.abs(f) && Math.abs(f) < 270 && (R ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ca(s), r.scaleY = ca(o), r.rotation = ca(u) + I, r.rotationX = ca(h) + I, r.rotationY = ca(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = p + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (B[Ye] = Ke(L)), r.xOffset = r.yOffset = 0, r.force3D = Y.force3D, r.renderTransform = r.svg ? ir : ce ? rr : He, r.uncache = 0, r;
  },
      Ke = function _firstTwoOnly(t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
      He = function _renderNon3DTransforms(t, e) {
    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, rr(t, e);
  },
      We = "0deg",
      tr = "0px",
      er = ") ",
      rr = function _renderCSSTransforms(t, e) {
    var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        p = r.scaleX,
        c = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        b = "auto" === m && t && 1 !== t || !0 === m;

    if (v && (l !== We || h !== We)) {
      var T,
          w = parseFloat(h) * Be,
          x = Math.sin(w),
          O = Math.cos(w);
      w = parseFloat(l) * Be, T = Math.cos(w), a = Qd(g, a, x * T * -v), s = Qd(g, s, -Math.sin(w) * -v), o = Qd(g, o, O * T * -v + v);
    }

    _ !== tr && (y += "perspective(" + _ + er), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !b && a === tr && s === tr && o === tr || (y += o !== tr || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + er), u !== We && (y += "rotate(" + u + er), h !== We && (y += "rotateY(" + h + er), l !== We && (y += "rotateX(" + l + er), f === We && d === We || (y += "skew(" + f + ", " + d + er), 1 === p && 1 === c || (y += "scale(" + p + ", " + c + er), g.style[Qe] = y || "translate(0, 0)";
  },
      ir = function _renderSVGTransforms(t, e) {
    var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        p = o.skewX,
        c = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        b = o.xOffset,
        T = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        O = parseFloat(f);
    d = parseFloat(d), p = parseFloat(p), (c = parseFloat(c)) && (p += c = parseFloat(c), d += c), d || p ? (d *= Be, p *= Be, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - p) * -m, a = Math.cos(d - p) * m, p && (c *= Be, s = Math.tan(p - c), n *= s = Math.sqrt(1 + s * s), a *= s, c && (s = Math.tan(c), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ca(r), i = ca(i), n = ca(n), a = ca(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = Bd(g, "x", l, "px"), O = Bd(g, "y", f, "px")), (v || y || b || T) && (x = ca(x + v - (v * r + y * n) + b), O = ca(O + y - (v * i + y * a) + T)), (u || h) && (s = g.getBBox(), x = ca(x + u / 100 * s.width), O = ca(O + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")", g.setAttribute("transform", s), w && (g.style[Qe] = s);
  };

  ba("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
        i = "Bottom",
        n = "Left",
        o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
      return r < 2 ? e + t : "border" + t + e;
    });

    Je[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function (t) {
        return Cd(e, t, r);
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
      }), e.init(t, s, n);
    };
  });
  var nr,
      ar,
      sr,
      or = {
    name: "css",
    register: td,
    targetTest: function targetTest(t) {
      return t.style && t.nodeType;
    },
    init: function init(t, e, r, i, n) {
      var a,
          s,
          u,
          h,
          l,
          f,
          d,
          p,
          c,
          _,
          m,
          g,
          v,
          y,
          b,
          T = this._props,
          w = t.style,
          x = r.vars.startAt;

      for (d in fe || td(), e) if ("autoRound" !== d && (s = e[d], !ft[d] || !Tb(d, e, r, i, t, n))) if (l = typeof s, f = Je[d], "function" === l && (l = typeof (s = s.call(r, i, t, n))), "string" === l && ~s.indexOf("random(") && (s = gb(s)), f) f(this, t, d, s, r) && (b = 1);else if ("--" === d.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(d) + "").trim(), s += "", Pt.lastIndex = 0, Pt.test(a) || (p = Qa(a), c = Qa(s)), c ? p !== c && (a = Bd(t, d, a, c) + c) : p && (s += p), this.add(w, "setProperty", a, s, i, n, 0, 0, d), T.push(d);else if ("undefined" !== l) {
        if (x && d in x ? (a = "function" == typeof x[d] ? x[d].call(r, i, t, n) : x[d], o(a) && ~a.indexOf("random(") && (a = gb(a)), Qa(a + "") || (a += Y.units[d] || Qa(Cd(t, d)) || ""), "=" === (a + "").charAt(1) && (a = Cd(t, d))) : a = Cd(t, d), h = parseFloat(a), (_ = "string" === l && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), u = parseFloat(s), d in Ne && ("autoAlpha" === d && (1 === h && "hidden" === Cd(t, "visibility") && u && (h = 0), zd(this, w, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== d && "transform" !== d && ~(d = Ne[d]).indexOf(",") && (d = d.split(",")[0])), m = d in Fe) {
          if (g || ((v = t._gsap).renderTransform && !e.parseTransform || Ze(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new ae(this._pt, w, Qe, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new ae(this._pt, v, "scaleY", v.scaleY, (_ ? _ * u : u - v.scaleY) || 0), T.push("scaleY", d), d += "X";else {
            if ("transformOrigin" === d) {
              s = Fd(s), v.svg ? Nd(t, s, 0, y, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && zd(this, v, "zOrigin", v.zOrigin, c), zd(this, w, d, Ke(a), Ke(s)));
              continue;
            }

            if ("svgOrigin" === d) {
              Nd(t, s, 1, y, 0, this);
              continue;
            }

            if (d in $e) {
              Xd(this, v, d, h, s, _);
              continue;
            }

            if ("smoothOrigin" === d) {
              zd(this, v, "smooth", v.smooth, s);
              continue;
            }

            if ("force3D" === d) {
              v[d] = s;
              continue;
            }

            if ("transform" === d) {
              Zd(this, s, t);
              continue;
            }
          }
        } else d in w || (d = Xe(d) || d);
        if (m || (u || 0 === u) && (h || 0 === h) && !qe.test(s) && d in w) u = u || 0, (p = (a + "").substr((h + "").length)) !== (c = Qa(s) || (d in Y.units ? Y.units[d] : p)) && (h = Bd(t, d, a, c)), this._pt = new ae(this._pt, m ? v : w, d, h, _ ? _ * u : u - h, m || "px" !== c && "zIndex" !== d || !1 === e.autoRound ? ad : dd), this._pt.u = c || 0, p !== c && "%" !== c && (this._pt.b = a, this._pt.r = cd);else if (d in w) Dd.call(this, t, d, a, s);else {
          if (!(d in t)) {
            N(d, s);
            continue;
          }

          this.add(t, d, a || t[d], s, i, n);
        }
        T.push(d);
      }

      b && ne(this);
    },
    get: Cd,
    aliases: Ne,
    getSetter: function getSetter(t, e, i) {
      var n = Ne[e];
      return n && n.indexOf(",") < 0 && (e = n), e in Fe && e !== Ye && (t._gsap.x || Cd(t, "x")) ? i && pe === i ? "scale" === e ? jd : id : (pe = i || {}) && ("scale" === e ? kd : ld) : t.style && !r(t.style[e]) ? gd : ~e.indexOf("-") ? hd : Kt(t, e);
    },
    core: {
      _removeProperty: yd,
      _getMatrix: Md
    }
  };
  oe.utils.checkPrefix = Xe, sr = ba((nr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ar = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    Fe[t] = 1;
  }), ba(ar, function (t) {
    Y.units[t] = "deg", $e[t] = 1;
  }), Ne[sr[13]] = nr + "," + ar, ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    Ne[e[1]] = sr[e[0]];
  }), ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    Y.units[t] = "px";
  }), oe.registerPlugin(or);
  var ur = oe.registerPlugin(or) || oe,
      hr = ur.core.Tween;
  e.Back = Ce, e.Bounce = Ae, e.CSSPlugin = or, e.Circ = ze, e.Cubic = we, e.Elastic = ke, e.Expo = De, e.Linear = be, e.Power0 = _e, e.Power1 = me, e.Power2 = ge, e.Power3 = ve, e.Power4 = ye, e.Quad = Te, e.Quart = xe, e.Quint = Oe, e.Sine = Se, e.SteppedEase = Pe, e.Strong = Me, e.TimelineLite = Nt, e.TimelineMax = Nt, e.TweenLite = Jt, e.TweenMax = hr, e.default = ur, e.gsap = ur;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});
!function (n, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).LazyLoad = t();
}(this, function () {
  "use strict";

  function n() {
    return n = Object.assign || function (n) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];

        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
      }

      return n;
    }, n.apply(this, arguments);
  }

  var t = "undefined" != typeof window,
      e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
      i = t && "IntersectionObserver" in window,
      o = t && "classList" in document.createElement("p"),
      a = t && window.devicePixelRatio > 1,
      r = {
    elements_selector: ".lazy",
    container: e || t ? document : null,
    threshold: 300,
    thresholds: null,
    data_src: "src",
    data_srcset: "srcset",
    data_sizes: "sizes",
    data_bg: "bg",
    data_bg_hidpi: "bg-hidpi",
    data_bg_multi: "bg-multi",
    data_bg_multi_hidpi: "bg-multi-hidpi",
    data_bg_set: "bg-set",
    data_poster: "poster",
    class_applied: "applied",
    class_loading: "loading",
    class_loaded: "loaded",
    class_error: "error",
    class_entered: "entered",
    class_exited: "exited",
    unobserve_completed: !0,
    unobserve_entered: !1,
    cancel_on_exit: !0,
    callback_enter: null,
    callback_exit: null,
    callback_applied: null,
    callback_loading: null,
    callback_loaded: null,
    callback_error: null,
    callback_finish: null,
    callback_cancel: null,
    use_native: !1,
    restore_on_error: !1
  },
      c = function (t) {
    return n({}, r, t);
  },
      l = function (n, t) {
    var e,
        i = "LazyLoad::Initialized",
        o = new n(t);

    try {
      e = new CustomEvent(i, {
        detail: {
          instance: o
        }
      });
    } catch (n) {
      (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
        instance: o
      });
    }

    window.dispatchEvent(e);
  },
      u = "src",
      s = "srcset",
      d = "sizes",
      f = "poster",
      _ = "llOriginalAttrs",
      g = "data",
      v = "loading",
      b = "loaded",
      m = "applied",
      p = "error",
      h = "native",
      E = "data-",
      I = "ll-status",
      y = function (n, t) {
    return n.getAttribute(E + t);
  },
      k = function (n) {
    return y(n, I);
  },
      w = function (n, t) {
    return function (n, t, e) {
      var i = "data-ll-status";
      null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
    }(n, 0, t);
  },
      A = function (n) {
    return w(n, null);
  },
      L = function (n) {
    return null === k(n);
  },
      O = function (n) {
    return k(n) === h;
  },
      x = [v, b, m, p],
      C = function (n, t, e, i) {
    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
  },
      N = function (n, t) {
    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
  },
      M = function (n, t) {
    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
  },
      z = function (n) {
    return n.llTempImage;
  },
      T = function (n, t) {
    if (t) {
      var e = t._observer;
      e && e.unobserve(n);
    }
  },
      R = function (n, t) {
    n && (n.loadingCount += t);
  },
      G = function (n, t) {
    n && (n.toLoadCount = t);
  },
      j = function (n) {
    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);

    return e;
  },
      D = function (n, t) {
    var e = n.parentNode;
    e && "PICTURE" === e.tagName && j(e).forEach(t);
  },
      H = function (n, t) {
    j(n).forEach(t);
  },
      V = [u],
      F = [u, f],
      B = [u, s, d],
      J = [g],
      P = function (n) {
    return !!n[_];
  },
      S = function (n) {
    return n[_];
  },
      U = function (n) {
    return delete n[_];
  },
      $ = function (n, t) {
    if (!P(n)) {
      var e = {};
      t.forEach(function (t) {
        e[t] = n.getAttribute(t);
      }), n[_] = e;
    }
  },
      q = function (n, t) {
    if (P(n)) {
      var e = S(n);
      t.forEach(function (t) {
        !function (n, t, e) {
          e ? n.setAttribute(t, e) : n.removeAttribute(t);
        }(n, t, e[t]);
      });
    }
  },
      K = function (n, t, e) {
    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
  },
      Q = function (n, t, e) {
    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
  },
      W = function (n, t, e) {
    e && n.setAttribute(t, e);
  },
      X = function (n, t) {
    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
  },
      Y = {
    IMG: function (n, t) {
      D(n, function (n) {
        $(n, B), X(n, t);
      }), $(n, B), X(n, t);
    },
    IFRAME: function (n, t) {
      $(n, V), W(n, u, y(n, t.data_src));
    },
    VIDEO: function (n, t) {
      H(n, function (n) {
        $(n, V), W(n, u, y(n, t.data_src));
      }), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
    },
    OBJECT: function (n, t) {
      $(n, J), W(n, g, y(n, t.data_src));
    }
  },
      Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
      nn = function (n, t) {
    !t || function (n) {
      return n.loadingCount > 0;
    }(t) || function (n) {
      return n.toLoadCount > 0;
    }(t) || C(n.callback_finish, t);
  },
      tn = function (n, t, e) {
    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
  },
      en = function (n, t, e) {
    n.removeEventListener(t, e);
  },
      on = function (n) {
    return !!n.llEvLisnrs;
  },
      an = function (n) {
    if (on(n)) {
      var t = n.llEvLisnrs;

      for (var e in t) {
        var i = t[e];
        en(n, e, i);
      }

      delete n.llEvLisnrs;
    }
  },
      rn = function (n, t, e) {
    !function (n) {
      delete n.llTempImage;
    }(n), R(e, -1), function (n) {
      n && (n.toLoadCount -= 1);
    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
  },
      cn = function (n, t, e) {
    var i = z(n) || n;
    on(i) || function (n, t, e) {
      on(n) || (n.llEvLisnrs = {});
      var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
      tn(n, i, t), tn(n, "error", e);
    }(i, function (o) {
      !function (n, t, e, i) {
        var o = O(t);
        rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
      }(0, n, t, e), an(i);
    }, function (o) {
      !function (n, t, e, i) {
        var o = O(t);
        rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), o || nn(e, i);
      }(0, n, t, e), an(i);
    });
  },
      ln = function (n, t, e) {
    !function (n) {
      return Z.indexOf(n.tagName) > -1;
    }(n) ? function (n, t, e) {
      !function (n) {
        n.llTempImage = document.createElement("IMG");
      }(n), cn(n, t, e), function (n) {
        P(n) || (n[_] = {
          backgroundImage: n.style.backgroundImage
        });
      }(n), function (n, t, e) {
        var i = y(n, t.data_bg),
            o = y(n, t.data_bg_hidpi),
            r = a && o ? o : i;
        r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), Q(n, t, e));
      }(n, t, e), function (n, t, e) {
        var i = y(n, t.data_bg_multi),
            o = y(n, t.data_bg_multi_hidpi),
            r = a && o ? o : i;
        r && (n.style.backgroundImage = r, K(n, t, e));
      }(n, t, e), function (n, t, e) {
        var i = y(n, t.data_bg_set);

        if (i) {
          var o = i.split("|"),
              a = o.map(function (n) {
            return "image-set(".concat(n, ")");
          });
          n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map(function (n) {
            return "-webkit-image-set(".concat(n, ")");
          }), n.style.backgroundImage = a.join()), K(n, t, e);
        }
      }(n, t, e);
    }(n, t, e) : function (n, t, e) {
      cn(n, t, e), function (n, t, e) {
        var i = Y[n.tagName];
        i && (i(n, t), Q(n, t, e));
      }(n, t, e);
    }(n, t, e);
  },
      un = function (n) {
    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
  },
      sn = function (n) {
    D(n, function (n) {
      q(n, B);
    }), q(n, B);
  },
      dn = {
    IMG: sn,
    IFRAME: function (n) {
      q(n, V);
    },
    VIDEO: function (n) {
      H(n, function (n) {
        q(n, V);
      }), q(n, F), n.load();
    },
    OBJECT: function (n) {
      q(n, J);
    }
  },
      fn = function (n, t) {
    (function (n) {
      var t = dn[n.tagName];
      t ? t(n) : function (n) {
        if (P(n)) {
          var t = S(n);
          n.style.backgroundImage = t.backgroundImage;
        }
      }(n);
    })(n), function (n, t) {
      L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
    }(n, t), A(n), U(n);
  },
      _n = ["IMG", "IFRAME", "VIDEO"],
      gn = function (n) {
    return n.use_native && "loading" in HTMLImageElement.prototype;
  },
      vn = function (n, t, e) {
    n.forEach(function (n) {
      return function (n) {
        return n.isIntersecting || n.intersectionRatio > 0;
      }(n) ? function (n, t, e, i) {
        var o = function (n) {
          return x.indexOf(k(n)) >= 0;
        }(n);

        w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function (n, t, e) {
          t.unobserve_entered && T(n, e);
        }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
      }(n.target, n, t, e) : function (n, t, e, i) {
        L(n) || (N(n, e.class_exited), function (n, t, e, i) {
          e.cancel_on_exit && function (n) {
            return k(n) === v;
          }(n) && "IMG" === n.tagName && (an(n), function (n) {
            D(n, function (n) {
              un(n);
            }), un(n);
          }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
        }(n, t, e, i), C(e.callback_exit, n, t, i));
      }(n.target, n, t, e);
    });
  },
      bn = function (n) {
    return Array.prototype.slice.call(n);
  },
      mn = function (n) {
    return n.container.querySelectorAll(n.elements_selector);
  },
      pn = function (n) {
    return function (n) {
      return k(n) === p;
    }(n);
  },
      hn = function (n, t) {
    return function (n) {
      return bn(n).filter(L);
    }(n || mn(t));
  },
      En = function (n, e) {
    var o = c(n);
    this._settings = o, this.loadingCount = 0, function (n, t) {
      i && !gn(n) && (t._observer = new IntersectionObserver(function (e) {
        vn(e, n, t);
      }, function (n) {
        return {
          root: n.container === document ? null : n.container,
          rootMargin: n.thresholds || n.threshold + "px"
        };
      }(n)));
    }(o, this), function (n, e) {
      t && (e._onlineHandler = function () {
        !function (n, t) {
          var e;
          (e = mn(n), bn(e).filter(pn)).forEach(function (t) {
            M(t, n.class_error), A(t);
          }), t.update();
        }(n, e);
      }, window.addEventListener("online", e._onlineHandler));
    }(o, this), this.update(e);
  };

  return En.prototype = {
    update: function (n) {
      var t,
          o,
          a = this._settings,
          r = hn(n, a);
      G(this, r.length), !e && i ? gn(a) ? function (n, t, e) {
        n.forEach(function (n) {
          -1 !== _n.indexOf(n.tagName) && function (n, t, e) {
            n.setAttribute("loading", "lazy"), cn(n, t, e), function (n, t) {
              var e = Y[n.tagName];
              e && e(n, t);
            }(n, t), w(n, h);
          }(n, t, e);
        }), G(e, 0);
      }(r, a, this) : (o = r, function (n) {
        n.disconnect();
      }(t = this._observer), function (n, t) {
        t.forEach(function (t) {
          n.observe(t);
        });
      }(t, o)) : this.loadAll(r);
    },
    destroy: function () {
      this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), mn(this._settings).forEach(function (n) {
        U(n);
      }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
    },
    loadAll: function (n) {
      var t = this,
          e = this._settings;
      hn(n, e).forEach(function (n) {
        T(n, t), ln(n, e, t);
      });
    },
    restoreAll: function () {
      var n = this._settings;
      mn(n).forEach(function (t) {
        fn(t, n);
      });
    }
  }, En.load = function (n, t) {
    var e = c(t);
    ln(n, e);
  }, En.resetStatus = function (n) {
    A(n);
  }, t && function (n, t) {
    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e);else l(n, t);
  }(En, window.lazyLoadOptions), En;
});
/*!
 * ScrollTrigger 3.9.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (e, r) {
  "object" == typeof exports && "undefined" != typeof module ? r(exports) : "function" == typeof define && define.amd ? define(["exports"], r) : r((e = e || self).window = e.window || {});
}(this, function (e) {
  "use strict";

  function H(e) {
    return e;
  }

  function I(e) {
    return Ve(e)[0] || (rr(e) && !1 !== Re.config().nullTargetWarn ? console.warn("Element not found:", e) : null);
  }

  function J(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }

  function K() {
    return "undefined" != typeof window;
  }

  function L() {
    return Re || K() && (Re = window.gsap) && Re.registerPlugin && Re;
  }

  function M(e) {
    return !!~i.indexOf(e);
  }

  function N(e, r) {
    return ~Ue.indexOf(e) && Ue[Ue.indexOf(e) + 1][r];
  }

  function O(r, e) {
    var t = e.s,
        n = e.sc,
        i = g.indexOf(r),
        o = n === gr.sc ? 1 : 2;
    return ~i || (i = g.push(r) - 1), g[i + o] || (g[i + o] = N(r, t) || (M(r) ? n : function (e) {
      return arguments.length ? r[t] = e : r[t];
    }));
  }

  function P(e) {
    return N(e, "getBoundingClientRect") || (M(e) ? function () {
      return wr.width = ze.innerWidth, wr.height = ze.innerHeight, wr;
    } : function () {
      return hr(e);
    });
  }

  function S(e, r) {
    var t = r.s,
        n = r.d2,
        i = r.d,
        o = r.a;
    return (t = "scroll" + n) && (o = N(e, t)) ? o() - P(e)()[i] : M(e) ? (Fe[t] || We[t]) - (ze["inner" + n] || We["client" + n] || Fe["client" + n]) : e[t] - e["offset" + n];
  }

  function T(e, r) {
    for (var t = 0; t < f.length; t += 3) r && !~r.indexOf(f[t + 1]) || e(f[t], f[t + 1], f[t + 2]);
  }

  function V(e) {
    return "function" == typeof e;
  }

  function W(e) {
    return "number" == typeof e;
  }

  function X(e) {
    return "object" == typeof e;
  }

  function Y(e) {
    return V(e) && e();
  }

  function Z(t, n) {
    return function () {
      var e = Y(t),
          r = Y(n);
      return function () {
        Y(e), Y(r);
      };
    };
  }

  function $(e, r, t) {
    return e && e.progress(r ? 0 : 1) && t && e.pause();
  }

  function _(e, r) {
    if (e.enabled) {
      var t = r(e);
      t && t.totalTime && (e.callbackAnimation = t);
    }
  }

  function ua(e) {
    return ze.getComputedStyle(e);
  }

  function wa(e, r) {
    for (var t in r) t in e || (e[t] = r[t]);

    return e;
  }

  function ya(e, r) {
    var t = r.d2;
    return e["offset" + t] || e["client" + t] || 0;
  }

  function za(e) {
    var r,
        t = [],
        n = e.labels,
        i = e.duration();

    for (r in n) t.push(n[r] / i);

    return t;
  }

  function Ba(i) {
    var o = Re.utils.snap(i),
        a = Array.isArray(i) && i.slice(0).sort(function (e, r) {
      return e - r;
    });
    return a ? function (e, r, t) {
      var n;
      if (void 0 === t && (t = .001), !r) return o(e);

      if (0 < r) {
        for (e -= t, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];

        return a[n - 1];
      }

      for (n = a.length, e += t; n--;) if (a[n] <= e) return a[n];

      return a[0];
    } : function (e, r, t) {
      void 0 === t && (t = .001);
      var n = o(e);
      return !r || Math.abs(n - e) < t || n - e < 0 == r < 0 ? n : o(r < 0 ? e - i : e + i);
    };
  }

  function Da(r, t, e, n) {
    return e.split(",").forEach(function (e) {
      return r(t, e, n);
    });
  }

  function Ea(e, r, t) {
    return e.addEventListener(r, t, {
      passive: !0
    });
  }

  function Fa(e, r, t) {
    return e.removeEventListener(r, t);
  }

  function Ja(e, r) {
    if (rr(e)) {
      var t = e.indexOf("="),
          n = ~t ? (e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
      ~t && (e.indexOf("%") > t && (n *= r / 100), e = e.substr(0, t - 1)), e = n + (e in b ? b[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0);
    }

    return e;
  }

  function Ka(e, r, t, n, i, o, a, s) {
    var l = i.startColor,
        c = i.endColor,
        u = i.fontSize,
        f = i.indent,
        p = i.fontWeight,
        d = Le.createElement("div"),
        g = M(t) || "fixed" === N(t, "pinType"),
        h = -1 !== e.indexOf("scroller"),
        v = g ? Fe : t,
        m = -1 !== e.indexOf("start"),
        b = m ? l : c,
        x = "border-color:" + b + ";font-size:" + u + ";color:" + b + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return x += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (x += (n === gr ? y : w) + ":" + (o + parseFloat(f)) + "px;"), a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = m, d.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")), d.style.cssText = x, d.innerText = r || 0 === r ? e + "-" + r : e, v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d), d._offset = d["offset" + n.op.d2], E(d, 0, n, m), d;
  }

  function Oa() {
    return 34 < Ze() - Ge && j();
  }

  function Pa() {
    j(), Ge || A("scrollStart"), Ge = Ze();
  }

  function Qa() {
    return !Xe && !t && !Le.fullscreenElement && a.restart(!0);
  }

  function Wa(e) {
    var r,
        t = Re.ticker.frame,
        n = [],
        i = 0;

    if (p !== t || qe) {
      for (z(); i < C.length; i += 4) (r = ze.matchMedia(C[i]).matches) !== C[i + 3] && ((C[i + 3] = r) ? n.push(i) : z(1, C[i]) || V(C[i + 2]) && C[i + 2]());

      for (R(), i = 0; i < n.length; i++) r = n[i], Qe = C[r], C[r + 2] = C[r + 1](e);

      Qe = 0, o && F(0, 1), p = t, A("matchMedia");
    }
  }

  function Xa() {
    return Fa(ee, "scrollEnd", Xa) || F(!0);
  }

  function ab() {
    return g.forEach(function (e) {
      return "function" == typeof e && (e.rec = 0);
    });
  }

  function jb(e, r, t, n) {
    if (e.parentNode !== r) {
      for (var i, o = Q.length, a = r.style, s = e.style; o--;) a[i = Q[o]] = t[i];

      a.position = "absolute" === t.position ? "absolute" : "relative", "inline" === t.display && (a.display = "inline-block"), s[w] = s[y] = a.flexBasis = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[nr] = ya(e, dr) + pr, a[ir] = ya(e, gr) + pr, a[cr] = s[ur] = s.top = s[v] = "0", Sr(n), s[nr] = s.maxWidth = t[nr], s[ir] = s.maxHeight = t[ir], s[cr] = t[cr], e.parentNode.insertBefore(r, e), r.appendChild(e);
    }
  }

  function mb(e) {
    for (var r = q.length, t = e.style, n = [], i = 0; i < r; i++) n.push(q[i], t[q[i]]);

    return n.t = e, n;
  }

  function pb(e, r, t, n, i, o, a, s, l, c, u, f, p) {
    V(e) && (e = e(s)), rr(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Ja("0" + e.substr(3), t) : 0));
    var d,
        g,
        h,
        v = p ? p.time() : 0;
    if (p && p.seek(0), W(e)) a && E(a, t, n, !0);else {
      V(r) && (r = r(s));
      var m,
          b,
          x,
          y,
          S = e.split(" ");
      h = I(r) || Fe, (m = hr(h) || {}) && (m.left || m.top) || "none" !== ua(h).display || (y = h.style.display, h.style.display = "block", m = hr(h), y ? h.style.display = y : h.style.removeProperty("display")), b = Ja(S[0], m[n.d]), x = Ja(S[1] || "0", t), e = m[n.p] - l[n.p] - c + b + i - x, a && E(a, x, n, t - x < 20 || a._isStart && 20 < x), t -= t - x;
    }

    if (o) {
      var w = e + t,
          T = o._isStart;
      d = "scroll" + n.d2, E(o, w, n, T && 20 < w || !T && (u ? Math.max(Fe[d], We[d]) : o.parentNode[d]) <= w + 1), u && (l = hr(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + pr));
    }

    return p && h && (d = hr(h), p.seek(f), g = hr(h), p._caScrollDist = d[n.p] - g[n.p], e = e / p._caScrollDist * f), p && p.seek(v), p ? e : Math.round(e);
  }

  function rb(e, r, t, n) {
    if (e.parentNode !== r) {
      var i,
          o,
          a = e.style;

      if (r === Fe) {
        for (i in e._stOrig = a.cssText, o = ua(e)) +i || G.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);

        a.top = t, a.left = n;
      } else a.cssText = e._stOrig;

      Re.core.getCache(e).uncache = 1, r.appendChild(e);
    }
  }

  function sb(l, e) {
    function xf(e, r, t, n, i) {
      var o = xf.tween,
          a = r.onComplete,
          s = {};
      return o && o.kill(), c = Math.round(t), r[p] = e, (r.modifiers = s)[p] = function (e) {
        return (e = J(f())) !== c && e !== u && 2 < Math.abs(e - c) && 2 < Math.abs(e - u) ? (o.kill(), xf.tween = 0) : e = t + n * o.ratio + i * o.ratio * o.ratio, u = c, c = J(e);
      }, r.onComplete = function () {
        xf.tween = 0, a && a.call(o);
      }, o = xf.tween = Re.to(l, r);
    }

    var c,
        u,
        f = O(l, e),
        p = "_scroll" + e.p2;
    return l[p] = f, Ea(l, "wheel", function () {
      return xf.tween && xf.tween.kill() && (xf.tween = 0);
    }), xf;
  }

  var Re,
      o,
      ze,
      Le,
      We,
      Fe,
      i,
      a,
      Ve,
      De,
      He,
      s,
      Xe,
      je,
      l,
      Je,
      c,
      u,
      f,
      Ke,
      Ye,
      t,
      $e,
      Qe,
      p,
      d,
      qe = 1,
      Ue = [],
      g = [],
      Ze = Date.now,
      h = Ze(),
      Ge = 0,
      er = 1,
      rr = function _isString(e) {
    return "string" == typeof e;
  },
      tr = Math.abs,
      r = "scrollLeft",
      n = "scrollTop",
      v = "left",
      y = "right",
      w = "bottom",
      nr = "width",
      ir = "height",
      or = "Right",
      ar = "Left",
      sr = "Top",
      lr = "Bottom",
      cr = "padding",
      ur = "margin",
      fr = "Width",
      m = "Height",
      pr = "px",
      dr = {
    s: r,
    p: v,
    p2: ar,
    os: y,
    os2: or,
    d: nr,
    d2: fr,
    a: "x",
    sc: function sc(e) {
      return arguments.length ? ze.scrollTo(e, gr.sc()) : ze.pageXOffset || Le[r] || We[r] || Fe[r] || 0;
    }
  },
      gr = {
    s: n,
    p: "top",
    p2: sr,
    os: w,
    os2: lr,
    d: ir,
    d2: m,
    a: "y",
    op: dr,
    sc: function sc(e) {
      return arguments.length ? ze.scrollTo(dr.sc(), e) : ze.pageYOffset || Le[n] || We[n] || Fe[n] || 0;
    }
  },
      hr = function _getBounds(e, r) {
    var t = r && "matrix(1, 0, 0, 1, 0, 0)" !== ua(e)[l] && Re.to(e, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1),
        n = e.getBoundingClientRect();
    return t && t.progress(0).kill(), n;
  },
      vr = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
      mr = {
    toggleActions: "play",
    anticipatePin: 0
  },
      b = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
  },
      E = function _positionMarker(e, r, t, n) {
    var i = {
      display: "block"
    },
        o = t[n ? "os2" : "p2"],
        a = t[n ? "p2" : "os2"];
    e._isFlipped = n, i[t.a + "Percent"] = n ? -100 : 0, i[t.a] = n ? "1px" : 0, i["border" + o + fr] = 1, i["border" + a + fr] = 0, i[t.p] = r + "px", Re.set(e, i);
  },
      br = [],
      xr = {},
      x = {},
      k = [],
      C = [],
      A = function _dispatch(e) {
    return x[e] && x[e].map(function (e) {
      return e();
    }) || k;
  },
      B = [],
      R = function _revertRecorded(e) {
    for (var r = 0; r < B.length; r += 5) e && B[r + 4] !== e || (B[r].style.cssText = B[r + 1], B[r].getBBox && B[r].setAttribute("transform", B[r + 2] || ""), B[r + 3].uncache = 1);
  },
      z = function _revertAll(e, r) {
    var t;

    for (Je = 0; Je < br.length; Je++) t = br[Je], r && t.media !== r || (e ? t.kill(1) : t.revert());

    r && R(r), r || A("revert");
  },
      F = function _refreshAll(e, r) {
    if (!Ge || e) {
      d = !0;
      var t = A("refreshInit");
      Ke && ee.sort(), r || z(), br.forEach(function (e) {
        return e.refresh();
      }), br.forEach(function (e) {
        return "max" === e.vars.end && e.setPositions(e.start, S(e.scroller, e._dir));
      }), t.forEach(function (e) {
        return e && e.render && e.render(-1);
      }), ab(), a.pause(), d = !1, A("refresh");
    } else Ea(ee, "scrollEnd", Xa);
  },
      D = 0,
      yr = 1,
      j = function _updateAll() {
    if (!d) {
      var e = br.length,
          r = Ze(),
          t = 50 <= r - h,
          n = e && br[0].scroll();

      if (yr = n < D ? -1 : 1, D = n, t && (Ge && !je && 200 < r - Ge && (Ge = 0, A("scrollEnd")), He = h, h = r), yr < 0) {
        for (Je = e; 0 < Je--;) br[Je] && br[Je].update(0, t);

        yr = 1;
      } else for (Je = 0; Je < e; Je++) br[Je] && br[Je].update(0, t);
    }
  },
      Q = [v, "top", w, y, ur + lr, ur + or, ur + sr, ur + ar, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
      q = Q.concat([nr, ir, "boxSizing", "max" + fr, "max" + m, "position", ur, cr, cr + sr, cr + or, cr + lr, cr + ar]),
      U = /([A-Z])/g,
      Sr = function _setState(e) {
    if (e) {
      var r,
          t,
          n = e.t.style,
          i = e.length,
          o = 0;

      for ((e.t._gsap || Re.core.getCache(e.t)).uncache = 1; o < i; o += 2) t = e[o + 1], r = e[o], t ? n[r] = t : n[r] && n.removeProperty(r.replace(U, "-$1").toLowerCase());
    }
  },
      wr = {
    left: 0,
    top: 0
  },
      G = /(?:webkit|moz|length|cssText|inset)/i;

  dr.op = gr;
  var ee = (ScrollTrigger.prototype.init = function init(E, k) {
    if (this.progress = this.start = 0, this.vars && this.kill(1), er) {
      var m,
          n,
          f,
          C,
          A,
          B,
          R,
          z,
          L,
          F,
          D,
          e,
          j,
          J,
          K,
          Y,
          Q,
          r,
          q,
          b,
          U,
          Z,
          x,
          G,
          y,
          w,
          t,
          T,
          ee,
          re,
          i,
          p,
          te,
          ne,
          ie,
          oe,
          ae,
          se = (E = wa(rr(E) || W(E) || E.nodeType ? {
        trigger: E
      } : E, mr)).onUpdate,
          le = E.toggleClass,
          o = E.id,
          ce = E.onToggle,
          ue = E.onRefresh,
          fe = E.scrub,
          pe = E.trigger,
          de = E.pin,
          ge = E.pinSpacing,
          he = E.invalidateOnRefresh,
          ve = E.anticipatePin,
          a = E.onScrubComplete,
          d = E.onSnapComplete,
          me = E.once,
          be = E.snap,
          xe = E.pinReparent,
          s = E.pinSpacer,
          ye = E.containerAnimation,
          Se = E.fastScrollEnd,
          we = E.preventOverlaps,
          Te = E.horizontal || E.containerAnimation && !1 !== E.horizontal ? dr : gr,
          Ee = !fe && 0 !== fe,
          Oe = I(E.scroller || ze),
          l = Re.core.getCache(Oe),
          _e = M(Oe),
          ke = "fixed" === ("pinType" in E ? E.pinType : N(Oe, "pinType") || _e && "fixed"),
          Ce = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack],
          Me = Ee && E.toggleActions.split(" "),
          c = "markers" in E ? E.markers : mr.markers,
          Pe = _e ? 0 : parseFloat(ua(Oe)["border" + Te.p2 + fr]) || 0,
          Ie = this,
          u = E.onRefreshInit && function () {
        return E.onRefreshInit(Ie);
      },
          Ae = function _getSizeFunc(e, r, t) {
        var n = t.d,
            i = t.d2,
            o = t.a;
        return (o = N(e, "getBoundingClientRect")) ? function () {
          return o()[n];
        } : function () {
          return (r ? ze["inner" + i] : e["client" + i]) || 0;
        };
      }(Oe, _e, Te),
          Ne = function _getOffsetsFunc(e, r) {
        return !r || ~Ue.indexOf(e) ? P(e) : function () {
          return wr;
        };
      }(Oe, _e),
          g = 0,
          Be = O(Oe, Te);

      if (Ie.media = Qe, Ie._dir = Te, ve *= 45, Ie.scroller = Oe, Ie.scroll = ye ? ye.time.bind(ye) : Be, C = Be(), Ie.vars = E, k = k || E.animation, "refreshPriority" in E && (Ke = 1), l.tweenScroll = l.tweenScroll || {
        top: sb(Oe, gr),
        left: sb(Oe, dr)
      }, Ie.tweenTo = m = l.tweenScroll[Te.p], k && (k.vars.lazy = !1, k._initted || !1 !== k.vars.immediateRender && !1 !== E.immediateRender && k.render(0, !0, !0), Ie.animation = k.pause(), k.scrollTrigger = Ie, (i = W(fe) && fe) && (re = Re.to(k, {
        ease: "power3",
        duration: i,
        onComplete: function onComplete() {
          return a && a(Ie);
        }
      })), T = 0, o = o || k.vars.id), br.push(Ie), be && (X(be) && !be.push || (be = {
        snapTo: be
      }), "scrollBehavior" in Fe.style && Re.set(_e ? [Fe, We] : Oe, {
        scrollBehavior: "auto"
      }), f = V(be.snapTo) ? be.snapTo : "labels" === be.snapTo ? function _getClosestLabel(r) {
        return function (e) {
          return Re.utils.snap(za(r), e);
        };
      }(k) : "labelsDirectional" === be.snapTo ? function _getLabelAtDirection(t) {
        return function (e, r) {
          return Ba(za(t))(e, r.direction);
        };
      }(k) : !1 !== be.directional ? function (e, r) {
        return Ba(be.snapTo)(e, r.direction);
      } : Re.utils.snap(be.snapTo), p = be.duration || {
        min: .1,
        max: 2
      }, p = X(p) ? De(p.min, p.max) : De(p, p), te = Re.delayedCall(be.delay || i / 2 || .1, function () {
        if (Math.abs(Ie.getVelocity()) < 10 && !je && g !== Be()) {
          var e = k && !Ee ? k.totalProgress() : Ie.progress,
              r = (e - ee) / (Ze() - He) * 1e3 || 0,
              t = Re.utils.clamp(-Ie.progress, 1 - Ie.progress, tr(r / 2) * r / .185),
              n = Ie.progress + (!1 === be.inertia ? 0 : t),
              i = De(0, 1, f(n, Ie)),
              o = Be(),
              a = Math.round(B + i * j),
              s = be.onStart,
              l = be.onInterrupt,
              c = be.onComplete,
              u = m.tween;

          if (o <= R && B <= o && a !== o) {
            if (u && !u._initted && u.data <= tr(a - o)) return;
            !1 === be.inertia && (t = i - Ie.progress), m(a, {
              duration: p(tr(.185 * Math.max(tr(n - e), tr(i - e)) / r / .05 || 0)),
              ease: be.ease || "power3",
              data: tr(a - o),
              onInterrupt: function onInterrupt() {
                return te.restart(!0) && l && l(Ie);
              },
              onComplete: function onComplete() {
                Ie.update(), g = Be(), T = ee = k && !Ee ? k.totalProgress() : Ie.progress, d && d(Ie), c && c(Ie);
              }
            }, o, t * j, a - o - t * j), s && s(Ie, m.tween);
          }
        } else Ie.isActive && te.restart(!0);
      }).pause()), o && (xr[o] = Ie), pe = Ie.trigger = I(pe || de), de = !0 === de ? pe : I(de), rr(le) && (le = {
        targets: pe,
        className: le
      }), de && (!1 === ge || ge === ur || (ge = !(!ge && "flex" === ua(de.parentNode).display) && cr), Ie.pin = de, !1 !== E.force3D && Re.set(de, {
        force3D: !0
      }), (n = Re.core.getCache(de)).spacer ? J = n.pinState : (s && ((s = I(s)) && !s.nodeType && (s = s.current || s.nativeElement), n.spacerIsNative = !!s, s && (n.spacerState = mb(s))), n.spacer = Q = s || Le.createElement("div"), Q.classList.add("pin-spacer"), o && Q.classList.add("pin-spacer-" + o), n.pinState = J = mb(de)), Ie.spacer = Q = n.spacer, t = ua(de), x = t[ge + Te.os2], q = Re.getProperty(de), b = Re.quickSetter(de, Te.a, pr), jb(de, Q, t), Y = mb(de)), c && (e = X(c) ? wa(c, vr) : vr, F = Ka("scroller-start", o, Oe, Te, e, 0), D = Ka("scroller-end", o, Oe, Te, e, 0, F), r = F["offset" + Te.op.d2], z = Ka("start", o, Oe, Te, e, r, 0, ye), L = Ka("end", o, Oe, Te, e, r, 0, ye), ye && (ae = Re.quickSetter([z, L], Te.a, pr)), ke || Ue.length && !0 === N(Oe, "fixedMarkers") || (function _makePositionable(e) {
        var r = ua(e).position;
        e.style.position = "absolute" === r || "fixed" === r ? r : "relative";
      }(_e ? Fe : Oe), Re.set([F, D], {
        force3D: !0
      }), y = Re.quickSetter(F, Te.a, pr), w = Re.quickSetter(D, Te.a, pr))), ye) {
        var h = ye.vars.onUpdate,
            v = ye.vars.onUpdateParams;
        ye.eventCallback("onUpdate", function () {
          Ie.update(0, 0, 1), h && h.apply(v || []);
        });
      }

      Ie.previous = function () {
        return br[br.indexOf(Ie) - 1];
      }, Ie.next = function () {
        return br[br.indexOf(Ie) + 1];
      }, Ie.revert = function (e) {
        var r = !1 !== e || !Ie.enabled,
            t = Xe;
        r !== Ie.isReverted && (r && (Ie.scroll.rec || (Ie.scroll.rec = Be()), ie = Math.max(Be(), Ie.scroll.rec || 0), ne = Ie.progress, oe = k && k.progress()), z && [z, L, F, D].forEach(function (e) {
          return e.style.display = r ? "none" : "block";
        }), r && (Xe = 1), Ie.update(r), Xe = t, de && (r ? function _swapPinOut(e, r, t) {
          Sr(t);
          var n = e._gsap;
          if (n.spacerIsNative) Sr(n.spacerState);else if (e.parentNode === r) {
            var i = r.parentNode;
            i && (i.insertBefore(e, r), i.removeChild(r));
          }
        }(de, Q, J) : xe && Ie.isActive || jb(de, Q, ua(de), G)), Ie.isReverted = r);
      }, Ie.refresh = function (e, r) {
        if (!Xe && Ie.enabled || r) if (de && e && Ge) Ea(ScrollTrigger, "scrollEnd", Xa);else {
          Xe = 1, re && re.pause(), he && k && k.time(-.01, !0).invalidate(), Ie.isReverted || Ie.revert();

          for (var t, n, i, o, a, s, l, c, u, f, p = Ae(), d = Ne(), g = ye ? ye.duration() : S(Oe, Te), h = 0, v = 0, m = E.end, b = E.endTrigger || pe, x = E.start || (0 !== E.start && pe ? de ? "0 0" : "0 100%" : 0), y = E.pinnedContainer && I(E.pinnedContainer), w = pe && Math.max(0, br.indexOf(Ie)) || 0, T = w; T--;) (s = br[T]).end || s.refresh(0, 1) || (Xe = 1), !(l = s.pin) || l !== pe && l !== de || s.isReverted || ((f = f || []).unshift(s), s.revert());

          for (V(x) && (x = x(Ie)), B = pb(x, pe, p, Te, Be(), z, F, Ie, d, Pe, ke, g, ye) || (de ? -.001 : 0), V(m) && (m = m(Ie)), rr(m) && !m.indexOf("+=") && (~m.indexOf(" ") ? m = (rr(x) ? x.split(" ")[0] : "") + m : (h = Ja(m.substr(2), p), m = rr(x) ? x : B + h, b = pe)), R = Math.max(B, pb(m || (b ? "100% 0" : g), b, p, Te, Be() + h, L, D, Ie, d, Pe, ke, g, ye)) || -.001, j = R - B || (B -= .01) && .001, h = 0, T = w; T--;) (l = (s = br[T]).pin) && s.start - s._pinPush < B && !ye && (t = s.end - s.start, l !== pe && l !== y || W(x) || (h += t * (1 - s.progress)), l === de && (v += t));

          if (B += h, R += h, Ie._pinPush = v, z && h && ((t = {})[Te.a] = "+=" + h, y && (t[Te.p] = "-=" + Be()), Re.set([z, L], t)), de) t = ua(de), o = Te === gr, i = Be(), U = parseFloat(q(Te.a)) + v, !g && 1 < R && ((_e ? Fe : Oe).style["overflow-" + Te.a] = "scroll"), jb(de, Q, t), Y = mb(de), n = hr(de, !0), c = ke && O(Oe, o ? dr : gr)(), ge && ((G = [ge + Te.os2, j + v + pr]).t = Q, (T = ge === cr ? ya(de, Te) + j + v : 0) && G.push(Te.d, T + pr), Sr(G), ke && Be(ie)), ke && ((a = {
            top: n.top + (o ? i - B : c) + pr,
            left: n.left + (o ? c : i - B) + pr,
            boxSizing: "border-box",
            position: "fixed"
          })[nr] = a.maxWidth = Math.ceil(n.width) + pr, a[ir] = a.maxHeight = Math.ceil(n.height) + pr, a[ur] = a[ur + sr] = a[ur + or] = a[ur + lr] = a[ur + ar] = "0", a[cr] = t[cr], a[cr + sr] = t[cr + sr], a[cr + or] = t[cr + or], a[cr + lr] = t[cr + lr], a[cr + ar] = t[cr + ar], K = function _copyState(e, r, t) {
            for (var n, i = [], o = e.length, a = t ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in r ? r[n] : e[a + 1]);

            return i.t = e.t, i;
          }(J, a, xe)), k ? (u = k._initted, Ye(1), k.render(k.duration(), !0, !0), Z = q(Te.a) - U + j + v, j !== Z && K.splice(K.length - 2, 2), k.render(0, !0, !0), u || k.invalidate(), Ye(0)) : Z = j;else if (pe && Be() && !ye) for (n = pe.parentNode; n && n !== Fe;) n._pinOffset && (B -= n._pinOffset, R -= n._pinOffset), n = n.parentNode;
          f && f.forEach(function (e) {
            return e.revert(!1);
          }), Ie.start = B, Ie.end = R, C = A = Be(), ye || (C < ie && Be(ie), Ie.scroll.rec = 0), Ie.revert(!1), Xe = 0, k && Ee && k._initted && k.progress() !== oe && k.progress(oe, !0).render(k.time(), !0, !0), ne === Ie.progress && !ye || (k && !Ee && k.totalProgress(ne, !0), Ie.progress = ne, Ie.update(0, 0, 1)), de && ge && (Q._pinOffset = Math.round(Ie.progress * Z)), ue && ue(Ie);
        }
      }, Ie.getVelocity = function () {
        return (Be() - A) / (Ze() - He) * 1e3 || 0;
      }, Ie.endAnimation = function () {
        $(Ie.callbackAnimation), k && (re ? re.progress(1) : k.paused() ? Ee || $(k, Ie.direction < 0, 1) : $(k, k.reversed()));
      }, Ie.labelToScroll = function (e) {
        return k && k.labels && (B || Ie.refresh() || B) + k.labels[e] / k.duration() * j || 0;
      }, Ie.getTrailing = function (r) {
        var e = br.indexOf(Ie),
            t = 0 < Ie.direction ? br.slice(0, e).reverse() : br.slice(e + 1);
        return rr(r) ? t.filter(function (e) {
          return e.vars.preventOverlaps === r;
        }) : t;
      }, Ie.update = function (e, r, t) {
        if (!ye || t || e) {
          var n,
              i,
              o,
              a,
              s,
              l,
              c,
              u = Ie.scroll(),
              f = e ? 0 : (u - B) / j,
              p = f < 0 ? 0 : 1 < f ? 1 : f || 0,
              d = Ie.progress;

          if (r && (A = C, C = ye ? Be() : u, be && (ee = T, T = k && !Ee ? k.totalProgress() : p)), ve && !p && de && !Xe && !qe && Ge && B < u + (u - A) / (Ze() - He) * ve && (p = 1e-4), p !== d && Ie.enabled) {
            if (a = (s = (n = Ie.isActive = !!p && p < 1) != (!!d && d < 1)) || !!p != !!d, Ie.direction = d < p ? 1 : -1, Ie.progress = p, a && !Xe && (i = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3, Ee && (o = !s && "none" !== Me[i + 1] && Me[i + 1] || Me[i], c = k && ("complete" === o || "reset" === o || o in k))), we && s && (c || fe || !k) && (V(we) ? we(Ie) : Ie.getTrailing(we).forEach(function (e) {
              return e.endAnimation();
            })), Ee || (!re || Xe || qe ? k && k.totalProgress(p, !!Xe) : (re.vars.totalProgress = p, re.invalidate().restart())), de) if (e && ge && (Q.style[ge + Te.os2] = x), ke) {
              if (a) {
                if (l = !e && d < p && u < R + 1 && u + 1 >= S(Oe, Te), xe) if (e || !n && !l) rb(de, Q);else {
                  var g = hr(de, !0),
                      h = u - B;
                  rb(de, Fe, g.top + (Te === gr ? h : 0) + pr, g.left + (Te === gr ? 0 : h) + pr);
                }
                Sr(n || l ? K : Y), Z !== j && p < 1 && n || b(U + (1 !== p || l ? 0 : Z));
              }
            } else b(U + Z * p);
            !be || m.tween || Xe || qe || te.restart(!0), le && (s || me && p && (p < 1 || !$e)) && Ve(le.targets).forEach(function (e) {
              return e.classList[n || me ? "add" : "remove"](le.className);
            }), !se || Ee || e || se(Ie), a && !Xe ? (Ee && (c && ("complete" === o ? k.pause().totalProgress(1) : "reset" === o ? k.restart(!0).pause() : "restart" === o ? k.restart(!0) : k[o]()), se && se(Ie)), !s && $e || (ce && s && _(Ie, ce), Ce[i] && _(Ie, Ce[i]), me && (1 === p ? Ie.kill(!1, 1) : Ce[i] = 0), s || Ce[i = 1 === p ? 1 : 3] && _(Ie, Ce[i])), Se && !n && Math.abs(Ie.getVelocity()) > (W(Se) ? Se : 2500) && ($(Ie.callbackAnimation), re ? re.progress(1) : $(k, !p, 1))) : Ee && se && !Xe && se(Ie);
          }

          if (w) {
            var v = ye ? u / ye.duration() * (ye._caScrollDist || 0) : u;
            y(v + (F._isFlipped ? 1 : 0)), w(v);
          }

          ae && ae(-u / ye.duration() * (ye._caScrollDist || 0));
        }
      }, Ie.enable = function (e, r) {
        Ie.enabled || (Ie.enabled = !0, Ea(Oe, "resize", Qa), Ea(Oe, "scroll", Pa), u && Ea(ScrollTrigger, "refreshInit", u), !1 !== e && (Ie.progress = ne = 0, C = A = g = Be()), !1 !== r && Ie.refresh());
      }, Ie.getTween = function (e) {
        return e && m ? m.tween : re;
      }, Ie.setPositions = function (e, r) {
        de && (U += e - B, Z += r - e - j), Ie.start = B = e, Ie.end = R = r, j = r - e, Ie.update();
      }, Ie.disable = function (e, r) {
        if (Ie.enabled && (!1 !== e && Ie.revert(), Ie.enabled = Ie.isActive = !1, r || re && re.pause(), ie = 0, n && (n.uncache = 1), u && Fa(ScrollTrigger, "refreshInit", u), te && (te.pause(), m.tween && m.tween.kill() && (m.tween = 0)), !_e)) {
          for (var t = br.length; t--;) if (br[t].scroller === Oe && br[t] !== Ie) return;

          Fa(Oe, "resize", Qa), Fa(Oe, "scroll", Pa);
        }
      }, Ie.kill = function (e, r) {
        Ie.disable(e, r), re && re.kill(), o && delete xr[o];
        var t = br.indexOf(Ie);
        0 <= t && br.splice(t, 1), t === Je && 0 < yr && Je--, t = 0, br.forEach(function (e) {
          return e.scroller === Ie.scroller && (t = 1);
        }), t || (Ie.scroll.rec = 0), k && (k.scrollTrigger = null, e && k.render(-1), r || k.kill()), z && [z, L, F, D].forEach(function (e) {
          return e.parentNode && e.parentNode.removeChild(e);
        }), de && (n && (n.uncache = 1), t = 0, br.forEach(function (e) {
          return e.pin === de && t++;
        }), t || (n.spacer = 0));
      }, Ie.enable(!1, !1), k && k.add && !j ? Re.delayedCall(.01, function () {
        return B || R || Ie.refresh();
      }) && (j = .01) && (B = R = 0) : Ie.refresh();
    } else this.update = this.refresh = this.kill = H;
  }, ScrollTrigger.register = function register(e) {
    if (!o && (Re = e || L(), K() && window.document && (ze = window, Le = document, We = Le.documentElement, Fe = Le.body), Re && (Ve = Re.utils.toArray, De = Re.utils.clamp, Ye = Re.core.suppressOverwrites || H, Re.core.globals("ScrollTrigger", ScrollTrigger), Fe))) {
      Ea(ze, "wheel", Pa), i = [ze, Le, We, Fe], Ea(Le, "scroll", Pa);
      var r,
          t = Fe.style,
          n = t.borderTopStyle;
      t.borderTopStyle = "solid", r = hr(Fe), gr.m = Math.round(r.top + gr.sc()) || 0, dr.m = Math.round(r.left + dr.sc()) || 0, n ? t.borderTopStyle = n : t.removeProperty("border-top-style"), s = setInterval(Oa, 200), Re.delayedCall(.5, function () {
        return qe = 0;
      }), Ea(Le, "touchcancel", H), Ea(Fe, "touchstart", H), Da(Ea, Le, "pointerdown,touchstart,mousedown", function () {
        return je = 1;
      }), Da(Ea, Le, "pointerup,touchend,mouseup", function () {
        return je = 0;
      }), l = Re.utils.checkPrefix("transform"), q.push(l), o = Ze(), a = Re.delayedCall(.2, F).pause(), f = [Le, "visibilitychange", function () {
        var e = ze.innerWidth,
            r = ze.innerHeight;
        Le.hidden ? (c = e, u = r) : c === e && u === r || Qa();
      }, Le, "DOMContentLoaded", F, ze, "load", function () {
        return Ge || F();
      }, ze, "resize", Qa], T(Ea);
    }

    return o;
  }, ScrollTrigger.defaults = function defaults(e) {
    if (e) for (var r in e) mr[r] = e[r];
    return mr;
  }, ScrollTrigger.kill = function kill() {
    er = 0, br.slice(0).forEach(function (e) {
      return e.kill(1);
    });
  }, ScrollTrigger.config = function config(e) {
    "limitCallbacks" in e && ($e = !!e.limitCallbacks);
    var r = e.syncInterval;
    r && clearInterval(s) || (s = r) && setInterval(Oa, r), "autoRefreshEvents" in e && (T(Fa) || T(Ea, e.autoRefreshEvents || "none"), t = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
  }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, r) {
    var t = I(e),
        n = g.indexOf(t),
        i = M(t);
    ~n && g.splice(n, i ? 6 : 2), r && (i ? Ue.unshift(ze, r, Fe, r, We, r) : Ue.unshift(t, r));
  }, ScrollTrigger.matchMedia = function matchMedia(e) {
    var r, t, n, i, o;

    for (t in e) n = C.indexOf(t), i = e[t], "all" === (Qe = t) ? i() : (r = ze.matchMedia(t)) && (r.matches && (o = i()), ~n ? (C[n + 1] = Z(C[n + 1], i), C[n + 2] = Z(C[n + 2], o)) : (n = C.length, C.push(t, i, o), r.addListener ? r.addListener(Wa) : r.addEventListener("change", Wa)), C[n + 3] = r.matches), Qe = 0;

    return C;
  }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
    e || (C.length = 0), 0 <= (e = C.indexOf(e)) && C.splice(e, 4);
  }, ScrollTrigger.isInViewport = function isInViewport(e, r, t) {
    var n = (rr(e) ? I(e) : e).getBoundingClientRect(),
        i = n[t ? nr : ir] * r || 0;
    return t ? 0 < n.right - i && n.left + i < ze.innerWidth : 0 < n.bottom - i && n.top + i < ze.innerHeight;
  }, ScrollTrigger.positionInViewport = function positionInViewport(e, r, t) {
    rr(e) && (e = I(e));
    var n = e.getBoundingClientRect(),
        i = n[t ? nr : ir],
        o = null == r ? i / 2 : r in b ? b[r] * i : ~r.indexOf("%") ? parseFloat(r) * i / 100 : parseFloat(r) || 0;
    return t ? (n.left + o) / ze.innerWidth : (n.top + o) / ze.innerHeight;
  }, ScrollTrigger);

  function ScrollTrigger(e, r) {
    o || ScrollTrigger.register(Re) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, r);
  }

  ee.version = "3.9.1", ee.saveStyles = function (e) {
    return e ? Ve(e).forEach(function (e) {
      if (e && e.style) {
        var r = B.indexOf(e);
        0 <= r && B.splice(r, 5), B.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Re.core.getCache(e), Qe);
      }
    }) : B;
  }, ee.revert = function (e, r) {
    return z(!e, r);
  }, ee.create = function (e, r) {
    return new ee(e, r);
  }, ee.refresh = function (e) {
    return e ? Qa() : (o || ee.register()) && F(!0);
  }, ee.update = j, ee.clearScrollMemory = ab, ee.maxScroll = function (e, r) {
    return S(e, r ? dr : gr);
  }, ee.getScrollFunc = function (e, r) {
    return O(I(e), r ? dr : gr);
  }, ee.getById = function (e) {
    return xr[e];
  }, ee.getAll = function () {
    return br.slice(0);
  }, ee.isScrolling = function () {
    return !!Ge;
  }, ee.snapDirectional = Ba, ee.addEventListener = function (e, r) {
    var t = x[e] || (x[e] = []);
    ~t.indexOf(r) || t.push(r);
  }, ee.removeEventListener = function (e, r) {
    var t = x[e],
        n = t && t.indexOf(r);
    0 <= n && t.splice(n, 1);
  }, ee.batch = function (e, r) {
    function Nj(e, r) {
      var t = [],
          n = [],
          i = Re.delayedCall(o, function () {
        r(t, n), t = [], n = [];
      }).pause();
      return function (e) {
        t.length || i.restart(!0), t.push(e.trigger), n.push(e), a <= t.length && i.progress(1);
      };
    }

    var t,
        n = [],
        i = {},
        o = r.interval || .016,
        a = r.batchMax || 1e9;

    for (t in r) i[t] = "on" === t.substr(0, 2) && V(r[t]) && "onRefreshInit" !== t ? Nj(0, r[t]) : r[t];

    return V(a) && (a = a(), Ea(ee, "refresh", function () {
      return a = r.batchMax();
    })), Ve(e).forEach(function (e) {
      var r = {};

      for (t in i) r[t] = i[t];

      r.trigger = e, n.push(ee.create(r));
    }), n;
  }, ee.sort = function (e) {
    return br.sort(e || function (e, r) {
      return -1e6 * (e.vars.refreshPriority || 0) + e.start - (r.start + -1e6 * (r.vars.refreshPriority || 0));
    });
  }, L() && Re.registerPlugin(ee), e.ScrollTrigger = ee, e.default = ee;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});
(function () {
  let lazyLoadInstance = new LazyLoad();
  gsap.registerPlugin(ScrollTrigger);

  window.onload = function (e) {
    // tl
    const tl0 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".promo",
        start: "-100 center",
        end: "bottom top",
        scrub: false,
        pin: false,
        markers: false
      }
    });
    tl0.fromTo(".promo__block img", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: 0.2
    }).fromTo(".promo__content > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.2
    }); // tl

    const tl1 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".text-col--lines",
        start: "-100 center",
        end: "bottom top",
        scrub: false,
        pin: false,
        markers: false
      }
    });
    tl1.fromTo(".text-col--lines .text-col__col .text-col__inner > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }); // tl

    const tl2 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".design",
        start: "-100 center",
        end: "bottom top",
        scrub: false,
        pin: false,
        markers: false
      }
    });
    tl2.fromTo(".design h2", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }).fromTo(".design p > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }); // tl

    const tl3 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".design-pic",
        start: "-100 center",
        end: "bottom top",
        scrub: true,
        pin: false,
        markers: false
      }
    });
    tl3.fromTo(".design-pic img", {
      y: "50%"
    }, {
      y: "-35%"
    }); // tl

    const tl4 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".design-pic",
        start: "40% center",
        end: "bottom top",
        scrub: false,
        pin: false,
        markers: false
      }
    });
    tl4.fromTo(".design-text > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }, "tl4"); // tl

    let sectionsBottom = gsap.utils.toArray(".pic-grid__pic[data-direction='bottom']");
    sectionsBottom.forEach(sectionBottom => {
      let items = sectionBottom.querySelector('img');
      gsap.timeline({
        scrollTrigger: {
          toggleActions: "play pause resume reverse",
          trigger: sectionBottom,
          start: "-50% center",
          end: "150% center",
          scrub: true,
          pin: false,
          markers: false
        }
      }).fromTo(items, {
        bottom: '15%'
      }, {
        bottom: '-15%'
      });
    }); // tl

    let sectionsTop = gsap.utils.toArray(".pic-grid__pic[data-direction='top']");
    sectionsTop.forEach(sectionTop => {
      let items = sectionTop.querySelector('img');
      gsap.timeline({
        scrollTrigger: {
          toggleActions: "play pause resume reverse",
          trigger: sectionTop,
          start: "-100% center",
          end: "150% center",
          scrub: true,
          pin: false,
          markers: false
        }
      }).fromTo(items, {
        top: '15%'
      }, {
        top: '-15%'
      });
    }); // tl

    const tl5 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".uniq",
        start: "-100 center",
        end: "bottom top",
        scrub: false,
        pin: false,
        markers: false
      }
    });
    tl5.fromTo(".uniq__content > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }, 'tl5').fromTo(".uniq__benefits > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      delay: 0.5
    }, 'tl5').fromTo(".uniq__benefit > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      delay: 0.5
    }, 'tl5'); // tl

    const tl6 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".uniq",
        start: "-25% center",
        end: "125% top",
        scrub: true,
        pin: false,
        markers: false
      }
    });
    tl6.fromTo(".uniq__pic img", {
      y: "25%"
    }, {
      y: "-25%"
    }); // tl

    const tl7 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".reload",
        start: "-100 center",
        end: "bottom top",
        scrub: false,
        pin: false,
        markers: false
      }
    });
    tl7.fromTo(".reload__title > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }).fromTo(".reload__block > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }).fromTo(".reload__video > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }); // tl

    const tl8 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".sights",
        start: "-100 center",
        end: "bottom top",
        scrub: false,
        pin: false,
        markers: false
      }
    });
    tl8.fromTo(".sights__col > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }); // tl

    const tl_content = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".prisma",
        start: `-100% top`,
        end: `top top`,
        scrub: true,
        pin: false,
        markers: false
      }
    });
    tl_content.fromTo(".prisma__inner", {
      top: `-${parseFloat(getComputedStyle(document.querySelector('.prisma'), null).height.replace("px", ""))}`,
      opacity: 0.5
    }, {
      top: '0px',
      opacity: 1
    }); // tl

    const tl9 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".trigger",
        start: "-100 center",
        end: "bottom top",
        scrub: false,
        pin: false,
        markers: false
      }
    });
    tl9.fromTo(".trigger__content-big > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }, 'tl9').fromTo(".trigger__content-small > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: 0.2,
      stagger: 0.1
    }, 'tl9'); // tl

    const tl_mask = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".mask-track",
        pin: ".pin",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false
      }
    });
    tl_mask.fromTo(".mask", {
      '-webkit-mask-size': '0%',
      'mask-size': '0%'
    }, {
      '-webkit-mask-size': '250%',
      'mask-size': '250%'
    }); // tl

    const tl10 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".x2-content",
        start: "-100 center",
        end: "bottom top",
        scrub: false,
        pin: false,
        markers: false
      }
    });
    tl10.fromTo(".x2-content__big p > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }).fromTo(".x2-content__small > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }, 'tl9'); // preload animation images

    const imagesRotate = ["/img/seq/1", "/img/seq/2", "/img/seq/3", "/img/seq/4", "/img/seq/5", "/img/seq/6", "/img/seq/7", "/img/seq/8", "/img/seq/9", "/img/seq/10", "/img/seq/11", "/img/seq/12", "/img/seq/13", "/img/seq/14", "/img/seq/15", "/img/seq/16", "/img/seq/17", "/img/seq/18", "/img/seq/19", "/img/seq/20", "/img/seq/21", "/img/seq/22", "/img/seq/23", "/img/seq/24", "/img/seq/25", "/img/seq/26", "/img/seq/27", "/img/seq/28", "/img/seq/29", "/img/seq/30", "/img/seq/31", "/img/seq/32", "/img/seq/33", "/img/seq/34", "/img/seq/35", "/img/seq/36", "/img/seq/37", "/img/seq/38", "/img/seq/39", "/img/seq/40", "/img/seq/41", "/img/seq/42", "/img/seq/43", "/img/seq/44", "/img/seq/45", "/img/seq/46", "/img/seq/47", "/img/seq/48", "/img/seq/49", "/img/seq/50", "/img/seq/51", "/img/seq/52", "/img/seq/53", "/img/seq/54", "/img/seq/55", "/img/seq/56", "/img/seq/57", "/img/seq/58", "/img/seq/59", "/img/seq/60", "/img/seq/61", "/img/seq/62", "/img/seq/63", "/img/seq/64", "/img/seq/65", "/img/seq/66", "/img/seq/67", "/img/seq/68", "/img/seq/69", "/img/seq/70", "/img/seq/71", "/img/seq/72", "/img/seq/73", "/img/seq/74", "/img/seq/75", "/img/seq/76", "/img/seq/77", "/img/seq/78", "/img/seq/79", "/img/seq/80", "/img/seq/81", "/img/seq/82", "/img/seq/83", "/img/seq/84", "/img/seq/85", "/img/seq/86", "/img/seq/87", "/img/seq/88", "/img/seq/89", "/img/seq/90", "/img/seq/91", "/img/seq/92", "/img/seq/93", "/img/seq/94", "/img/seq/95", "/img/seq/96", "/img/seq/97", "/img/seq/98", "/img/seq/99", "/img/seq/100", "/img/seq/101", "/img/seq/102", "/img/seq/103", "/img/seq/104", "/img/seq/105", "/img/seq/106", "/img/seq/107", "/img/seq/108", "/img/seq/109", "/img/seq/110", "/img/seq/111", "/img/seq/112", "/img/seq/113", "/img/seq/114", "/img/seq/115", "/img/seq/116", "/img/seq/117", "/img/seq/118", "/img/seq/119", "/img/seq/120", "/img/seq/121", "/img/seq/122", "/img/seq/123", "/img/seq/124", "/img/seq/125", "/img/seq/126", "/img/seq/127", "/img/seq/128", "/img/seq/129", "/img/seq/130", "/img/seq/131", "/img/seq/132", "/img/seq/133", "/img/seq/134", "/img/seq/135", "/img/seq/136", "/img/seq/137", "/img/seq/138", "/img/seq/139", "/img/seq/140", "/img/seq/141", "/img/seq/142", "/img/seq/143", "/img/seq/144", "/img/seq/145", "/img/seq/146", "/img/seq/147", "/img/seq/148", "/img/seq/149", "/img/seq/150", "/img/seq/151", "/img/seq/152", "/img/seq/153", "/img/seq/154", "/img/seq/155", "/img/seq/156", "/img/seq/157", "/img/seq/158", "/img/seq/159", "/img/seq/160", "/img/seq/161", "/img/seq/162", "/img/seq/163", "/img/seq/164", "/img/seq/165", "/img/seq/166", "/img/seq/167", "/img/seq/168", "/img/seq/169"];

    function preloadImage(url) {
      var img = new Image();
      img.src = url;
    }

    function canUseWebP() {
      var elem = document.createElement('canvas');

      if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
      } // very old browser like IE 8, canvas not supported


      return false;
    }

    let extension = canUseWebP() ? '.webp' : '.jpg';

    function preloadImages() {
      for (let image of imagesRotate) {
        preloadImage(image + extension);
      }
    }

    preloadImages();
    Array.prototype.forEach.call(imagesRotate, function (el, index) {
      let src = `${el}`;
      let pcr = document.createElement("PICTURE");
      let sc1 = document.createElement("SOURCE");
      let sc2 = document.createElement("SOURCE");
      let img = document.createElement("IMG");
      pcr.srcset = `${src}.webp`;
      pcr.type = "image/webp";
      sc1.srcset = `${src}.jpg`;
      sc1.type = "image/jpeg";
      sc2.srcset = `${src}.jpg`;
      sc2.type = "image/jpeg";
      img.src = `${src}.jpg`;
      img.classList.add('js-bumper-image');
      img.dataset.id = `bumper-image-${index}`;
      img.alt = "";
      pcr.appendChild(sc1);
      pcr.appendChild(sc2);
      pcr.appendChild(img);
      document.querySelector('.js-bumper-block').appendChild(pcr);
    });
    let tl_bumper = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play none none reverse",
        trigger: ".bumper-track",
        start: "top top",
        end: "5000 bottom",
        scrub: 0.5,
        markers: false,
        id: "tl_bumper",
        pin: '.bumper__seq',
        onUpdate: self => {
          curImg = parseInt(self.progress * imagesRotate.length - 1) || imagesRotate.length;
          Array.prototype.forEach.call(document.querySelector('.js-bumper-block').querySelectorAll('.js-bumper-image'), function (el, i) {
            if (el.dataset.id === `bumper-image-${curImg}`) {
              el.classList.add('active');
            } else {
              el.classList.remove('active');
            }
          });
        }
      }
    });
    tl_bumper.fromTo('.bumper__seq', {
      opacity: 1
    }, {
      delay: 1,
      delay: 0.9,
      opacity: 0.2
    });
    let tl_bumper_2 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play none none reverse",
        trigger: ".bumper-track",
        start: `${5000 - parseFloat(getComputedStyle(document.querySelector('.bumper__content'), null).height.replace("px", "")) * 1.5} center`,
        end: "5000 center",
        scrub: 0.5,
        markers: false,
        pin: false
      }
    });
    tl_bumper_2.fromTo('.bumper__benefits > :nth-child(1), .bumper__benefits > :nth-child(4)', {
      top: 100
    }, {
      duration: 10,
      top: 0
    }, 'tl_bumper_2').fromTo('.bumper__benefits > :nth-child(2), .bumper__benefits > :nth-child(5)', {
      top: 200
    }, {
      duration: 10,
      top: 0
    }, 'tl_bumper_2').fromTo('.bumper__benefits > :nth-child(3), .bumper__benefits > :nth-child(6)', {
      top: 300
    }, {
      duration: 10,
      top: 0
    }, 'tl_bumper_2'); // tl

    const tl11 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".aim",
        start: "-10% center",
        end: "110% top",
        scrub: true,
        pin: false,
        markers: false
      }
    });
    tl11.fromTo(".aim__pic", {
      y: '+=20%'
    }, {
      y: '-=20%'
    }); // tl

    const tl12 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".aim",
        start: "-100 center",
        end: "bottom top",
        scrub: false,
        pin: false,
        markers: false
      }
    });
    tl12.set(".aim__pic", {
      className: "aim__pic anim"
    }).fromTo(".aim__pic", {
      opacity: 0
    }, {
      opacity: 1
    }).fromTo(".aim__content > *", {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    }); //

    let sections = gsap.utils.toArray(".benefits__item");
    sections.forEach(section => {
      let pic = section.querySelector('.benefits__pic img');
      gsap.timeline({
        scrollTrigger: {
          toggleActions: "play pause resume reverse",
          trigger: section,
          start: 'top bottom',
          end: "bottom top",
          scrub: true,
          pin: false,
          markers: false
        }
      }).fromTo(pic, {
        y: 100
      }, {
        y: -100
      });
      let title = section.querySelector('.benefits__content h2');
      let cols = section.querySelectorAll('.benefits__content-col > *');
      gsap.timeline({
        scrollTrigger: {
          toggleActions: "play pause resume reverse",
          trigger: section,
          start: 'top center',
          end: "bottom center",
          scrub: false,
          pin: false,
          markers: false
        }
      }).fromTo(title, {
        y: -20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }).fromTo(cols, {
        y: -20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.2
      });
    }); // tl

    const tl13 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: ".add",
        start: "-100 center",
        end: "bottom top",
        scrub: false,
        pin: false,
        markers: false
      }
    });
    tl13.fromTo(".add__pic img", {
      y: '-40%',
      opacity: 0
    }, {
      y: '-45%',
      opacity: 1
    });
  }; // window loaded

})();
//# sourceMappingURL=maps/main.js.map
