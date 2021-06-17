!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    function n(e, t, n) {
        var r,
            o = (t = t || ae).createElement("script");
        if (((o.text = e), n)) for (r in we) n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function r(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[de.call(e)] || "object" : typeof e;
    }
    function o(e) {
        var t = !!e && "length" in e && e.length,
            n = r(e);
        return !ye(e) && !be(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function a(e, t, n) {
        return ye(t)
            ? xe.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? xe.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? xe.grep(e, function (e) {
                  return fe.call(t, e) > -1 !== n;
              })
            : xe.filter(t, e, n);
    }
    function s(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    function l(e) {
        var t = {};
        return (
            xe.each(e.match(je) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    function c(e) {
        return e;
    }
    function u(e) {
        throw e;
    }
    function f(e, t, n, r) {
        var o;
        try {
            e && ye((o = e.promise)) ? o.call(e).done(t).fail(n) : e && ye((o = e.then)) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    function p() {
        ae.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), xe.ready();
    }
    function d(e, t) {
        return t.toUpperCase();
    }
    function h(e) {
        return e.replace(Me, "ms-").replace(Pe, d);
    }
    function m() {
        this.expando = xe.expando + m.uid++;
    }
    function g(e) {
        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ie.test(e) ? JSON.parse(e) : e));
    }
    function v(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(Be, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = g(n);
                } catch (e) {}
                qe.set(e, t, n);
            } else n = void 0;
        return n;
    }
    function y(e, t, n, r) {
        var o,
            i,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return xe.css(e, t, "");
                  },
            l = s(),
            c = (n && n[3]) || (xe.cssNumber[t] ? "" : "px"),
            u = (xe.cssNumber[t] || ("px" !== c && +l)) && $e.exec(xe.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--; ) xe.style(e, t, u + c), (1 - i) * (1 - (i = s() / l || 0.5)) <= 0 && (a = 0), (u /= i);
            (u *= 2), xe.style(e, t, u + c), (n = n || []);
        }
        return n && ((u = +u || +l || 0), (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = c), (r.start = u), (r.end = o))), o;
    }
    function b(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            o = Ke[r];
        return o || ((t = n.body.appendChild(n.createElement(r))), (o = xe.css(t, "display")), t.parentNode.removeChild(t), "none" === o && (o = "block"), (Ke[r] = o), o);
    }
    function w(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
            (r = e[i]).style &&
                ((n = r.style.display),
                t ? ("none" === n && ((o[i] = Xe.get(r, "display") || null), o[i] || (r.style.display = "")), "" === r.style.display && ze(r) && (o[i] = b(r))) : "none" !== n && ((o[i] = "none"), Xe.set(r, "display", n)));
        for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
        return e;
    }
    function x(e, t) {
        var n;
        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && i(e, t)) ? xe.merge([e], n) : n;
    }
    function T(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Xe.set(e[n], "globalEval", !t || Xe.get(t[n], "globalEval"));
    }
    function E(e, t, n, o, i) {
        for (var a, s, l, c, u, f, p = t.createDocumentFragment(), d = [], h = 0, m = e.length; h < m; h++)
            if ((a = e[h]) || 0 === a)
                if ("object" === r(a)) xe.merge(d, a.nodeType ? [a] : a);
                else if (Ze.test(a)) {
                    for (s = s || p.appendChild(t.createElement("div")), l = (Ge.exec(a) || ["", ""])[1].toLowerCase(), c = Je[l] || Je._default, s.innerHTML = c[1] + xe.htmlPrefilter(a) + c[2], f = c[0]; f--; ) s = s.lastChild;
                    xe.merge(d, s.childNodes), ((s = p.firstChild).textContent = "");
                } else d.push(t.createTextNode(a));
        for (p.textContent = "", h = 0; (a = d[h++]); )
            if (o && xe.inArray(a, o) > -1) i && i.push(a);
            else if (((u = xe.contains(a.ownerDocument, a)), (s = x(p.appendChild(a), "script")), u && T(s), n)) for (f = 0; (a = s[f++]); ) Qe.test(a.type || "") && n.push(a);
        return p;
    }
    function S() {
        return !0;
    }
    function C() {
        return !1;
    }
    function L() {
        try {
            return ae.activeElement;
        } catch (e) {}
    }
    function k(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && ((r = r || n), (n = void 0));
            for (s in t) k(e, s, n, r, t[s], i);
            return e;
        }
        if ((null == r && null == o ? ((o = n), (r = n = void 0)) : null == o && ("string" == typeof n ? ((o = r), (r = void 0)) : ((o = r), (r = n), (n = void 0))), !1 === o)) o = C;
        else if (!o) return e;
        return (
            1 === i &&
                ((a = o),
                ((o = function (e) {
                    return xe().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = xe.guid++))),
            e.each(function () {
                xe.event.add(this, t, o, r, n);
            })
        );
    }
    function D(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? xe(e).children("tbody")[0] || e : e;
    }
    function A(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function N(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function H(e, t) {
        var n, r, o, i, a, s, l, c;
        if (1 === t.nodeType) {
            if (Xe.hasData(e) && ((i = Xe.access(e)), (a = Xe.set(t, i)), (c = i.events))) {
                delete a.handle, (a.events = {});
                for (o in c) for (n = 0, r = c[o].length; n < r; n++) xe.event.add(t, o, c[o][n]);
            }
            qe.hasData(e) && ((s = qe.access(e)), (l = xe.extend({}, s)), qe.set(t, l));
        }
    }
    function j(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ve.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
    }
    function O(e, t, r, o) {
        t = ce.apply([], t);
        var i,
            a,
            s,
            l,
            c,
            u,
            f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            m = ye(h);
        if (m || (p > 1 && "string" == typeof h && !ve.checkClone && at.test(h)))
            return e.each(function (n) {
                var i = e.eq(n);
                m && (t[0] = h.call(this, n, i.html())), O(i, t, r, o);
            });
        if (p && ((i = E(t, e[0].ownerDocument, !1, e, o)), (a = i.firstChild), 1 === i.childNodes.length && (i = a), a || o)) {
            for (l = (s = xe.map(x(i, "script"), A)).length; f < p; f++) (c = i), f !== d && ((c = xe.clone(c, !0, !0)), l && xe.merge(s, x(c, "script"))), r.call(e[f], c, f);
            if (l)
                for (u = s[s.length - 1].ownerDocument, xe.map(s, N), f = 0; f < l; f++)
                    (c = s[f]), Qe.test(c.type || "") && !Xe.access(c, "globalEval") && xe.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? xe._evalUrl && xe._evalUrl(c.src) : n(c.textContent.replace(st, ""), u, c));
        }
        return e;
    }
    function W(e, t, n) {
        for (var r, o = t ? xe.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || xe.cleanData(x(r)), r.parentNode && (n && xe.contains(r.ownerDocument, r) && T(x(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    function R(e, t, n) {
        var r,
            o,
            i,
            a,
            s = e.style;
        return (
            (n = n || ct(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) || xe.contains(e.ownerDocument, e) || (a = xe.style(e, t)),
                !ve.pixelBoxStyles() && lt.test(a) && ut.test(t) && ((r = s.width), (o = s.minWidth), (i = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = o), (s.maxWidth = i))),
            void 0 !== a ? a + "" : a
        );
    }
    function M(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    function P(e) {
        if (e in gt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = mt.length; n--; ) if ((e = mt[n] + t) in gt) return e;
    }
    function Y(e) {
        var t = xe.cssProps[e];
        return t || (t = xe.cssProps[e] = P(e) || e), t;
    }
    function X(e, t, n) {
        var r = $e.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function q(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += xe.css(e, n + _e[a], !0, o)),
                r
                    ? ("content" === n && (l -= xe.css(e, "padding" + _e[a], !0, o)), "margin" !== n && (l -= xe.css(e, "border" + _e[a] + "Width", !0, o)))
                    : ((l += xe.css(e, "padding" + _e[a], !0, o)), "padding" !== n ? (l += xe.css(e, "border" + _e[a] + "Width", !0, o)) : (s += xe.css(e, "border" + _e[a] + "Width", !0, o)));
        return !r && i >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - 0.5))), l;
    }
    function I(e, t, n) {
        var r = ct(e),
            o = R(e, t, r),
            i = "border-box" === xe.css(e, "boxSizing", !1, r),
            a = i;
        if (lt.test(o)) {
            if (!n) return o;
            o = "auto";
        }
        return (
            (a = a && (ve.boxSizingReliable() || o === e.style[t])),
            ("auto" === o || (!parseFloat(o) && "inline" === xe.css(e, "display", !1, r))) && ((o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
            (o = parseFloat(o) || 0) + q(e, t, n || (i ? "border" : "content"), a, r, o) + "px"
        );
    }
    function B(e, t, n, r, o) {
        return new B.prototype.init(e, t, n, r, o);
    }
    function F() {
        yt && (!1 === ae.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(F) : e.setTimeout(F, xe.fx.interval), xe.fx.tick());
    }
    function $() {
        return (
            e.setTimeout(function () {
                vt = void 0;
            }),
            (vt = Date.now())
        );
    }
    function _(e, t) {
        var n,
            r = 0,
            o = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = _e[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
    }
    function z(e, t, n) {
        for (var r, o = (V.tweeners[t] || []).concat(V.tweeners["*"]), i = 0, a = o.length; i < a; i++) if ((r = o[i].call(n, t, e))) return r;
    }
    function U(e, t, n) {
        var r,
            o,
            i,
            a,
            s,
            l,
            c,
            u,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            m = e.nodeType && ze(e),
            g = Xe.get(e, "fxshow");
        n.queue ||
            (null == (a = xe._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                    a.unqueued || s();
                })),
            a.unqueued++,
            p.always(function () {
                p.always(function () {
                    a.unqueued--, xe.queue(e, "fx").length || a.empty.fire();
                });
            }));
        for (r in t)
            if (((o = t[r]), bt.test(o))) {
                if ((delete t[r], (i = i || "toggle" === o), o === (m ? "hide" : "show"))) {
                    if ("show" !== o || !g || void 0 === g[r]) continue;
                    m = !0;
                }
                d[r] = (g && g[r]) || xe.style(e, r);
            }
        if ((l = !xe.isEmptyObject(t)) || !xe.isEmptyObject(d)) {
            f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = g && g.display) && (c = Xe.get(e, "display")),
                "none" === (u = xe.css(e, "display")) && (c ? (u = c) : (w([e], !0), (c = e.style.display || c), (u = xe.css(e, "display")), w([e]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                    "none" === xe.css(e, "float") &&
                    (l ||
                        (p.done(function () {
                            h.display = c;
                        }),
                        null == c && ((u = h.display), (c = "none" === u ? "" : u))),
                    (h.display = "inline-block"))),
                n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                        (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                    })),
                (l = !1);
            for (r in d)
                l ||
                    (g ? "hidden" in g && (m = g.hidden) : (g = Xe.access(e, "fxshow", { display: c })),
                    i && (g.hidden = !m),
                    m && w([e], !0),
                    p.done(function () {
                        m || w([e]), Xe.remove(e, "fxshow");
                        for (r in d) xe.style(e, r, d[r]);
                    })),
                    (l = z(m ? g[r] : 0, r, p)),
                    r in g || ((g[r] = l.start), m && ((l.end = l.start), (l.start = 0)));
        }
    }
    function K(e, t) {
        var n, r, o, i, a;
        for (n in e)
            if (((r = h(n)), (o = t[r]), (i = e[n]), Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])), n !== r && ((e[r] = i), delete e[n]), (a = xe.cssHooks[r]) && "expand" in a)) {
                (i = a.expand(i)), delete e[r];
                for (n in i) n in e || ((e[n] = i[n]), (t[n] = o));
            } else t[r] = o;
    }
    function V(e, t, n) {
        var r,
            o,
            i = 0,
            a = V.prefilters.length,
            s = xe.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (o) return !1;
                for (var t = vt || $(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, a = c.tweens.length; i < a; i++) c.tweens[i].run(r);
                return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1);
            },
            c = s.promise({
                elem: e,
                props: xe.extend({}, t),
                opts: xe.extend(!0, { specialEasing: {}, easing: xe.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: vt || $(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = xe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this;
                },
            }),
            u = c.props;
        for (K(u, c.opts.specialEasing); i < a; i++) if ((r = V.prefilters[i].call(c, e, u, c.opts))) return ye(r.stop) && (xe._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
        return (
            xe.map(u, z, c),
            ye(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            xe.fx.timer(xe.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
        );
    }
    function G(e) {
        return (e.match(je) || []).join(" ");
    }
    function Q(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function J(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(je) || [] : [];
    }
    function Z(e, t, n, o) {
        var i;
        if (Array.isArray(t))
            xe.each(t, function (t, r) {
                n || Ht.test(e) ? o(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, o);
            });
        else if (n || "object" !== r(t)) o(e, t);
        else for (i in t) Z(e + "[" + i + "]", t[i], n, o);
    }
    function ee(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                o = 0,
                i = t.toLowerCase().match(je) || [];
            if (ye(n)) for (; (r = i[o++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function te(e, t, n, r) {
        function o(s) {
            var l;
            return (
                (i[s] = !0),
                xe.each(e[s] || [], function (e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || a || i[c] ? (a ? !(l = c) : void 0) : (t.dataTypes.unshift(c), o(c), !1);
                }),
                l
            );
        }
        var i = {},
            a = e === Ft;
        return o(t.dataTypes[0]) || (!i["*"] && o("*"));
    }
    function ne(e, t) {
        var n,
            r,
            o = xe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && xe.extend(!0, e, r), e;
    }
    function re(e, t, n) {
        for (var r, o, i, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (o in s)
                if (s[o] && s[o].test(r)) {
                    l.unshift(o);
                    break;
                }
        if (l[0] in n) i = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    i = o;
                    break;
                }
                a || (a = o);
            }
            i = i || a;
        }
        if (i) return i !== l[0] && l.unshift(i), n[i];
    }
    function oe(e, t, n, r) {
        var o,
            i,
            a,
            s,
            l,
            c = {},
            u = e.dataTypes.slice();
        if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (i = u.shift(); i; )
            if ((e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = i), (i = u.shift())))
                if ("*" === i) i = l;
                else if ("*" !== l && l !== i) {
                    if (!(a = c[l + " " + i] || c["* " + i]))
                        for (o in c)
                            if ((s = o.split(" "))[1] === i && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                !0 === a ? (a = c[o]) : !0 !== c[o] && ((i = s[0]), u.unshift(s[1]));
                                break;
                            }
                    if (!0 !== a)
                        if (a && e.throws) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (e) {
                                return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + i };
                            }
                }
        return { state: "success", data: t };
    }
    var ie = [],
        ae = e.document,
        se = Object.getPrototypeOf,
        le = ie.slice,
        ce = ie.concat,
        ue = ie.push,
        fe = ie.indexOf,
        pe = {},
        de = pe.toString,
        he = pe.hasOwnProperty,
        me = he.toString,
        ge = me.call(Object),
        ve = {},
        ye = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        be = function (e) {
            return null != e && e === e.window;
        },
        we = { type: !0, src: !0, noModule: !0 },
        xe = function (e, t) {
            return new xe.fn.init(e, t);
        },
        Te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (xe.fn = xe.prototype = {
        jquery: "3.3.1",
        constructor: xe,
        length: 0,
        toArray: function () {
            return le.call(this);
        },
        get: function (e) {
            return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = xe.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return xe.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                xe.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(le.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: ue,
        sort: ie.sort,
        splice: ie.splice,
    }),
        (xe.extend = xe.fn.extend = function () {
            var e,
                t,
                n,
                r,
                o,
                i,
                a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++), "object" == typeof a || ye(a) || (a = {}), s === l && ((a = this), s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (n = a[t]),
                            a !== (r = e[t]) &&
                                (c && r && (xe.isPlainObject(r) || (o = Array.isArray(r)))
                                    ? (o ? ((o = !1), (i = n && Array.isArray(n) ? n : [])) : (i = n && xe.isPlainObject(n) ? n : {}), (a[t] = xe.extend(c, i, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        xe.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== de.call(e) || ((t = se(e)) && ("function" != typeof (n = he.call(t, "constructor") && t.constructor) || me.call(n) !== ge)));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e) {
                n(e);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (o(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(Te, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (o(Object(e)) ? xe.merge(n, "string" == typeof e ? [e] : e) : ue.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : fe.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return (e.length = o), e;
            },
            grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    a = 0,
                    s = [];
                if (o(e)) for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
                else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
                return ce.apply([], s);
            },
            guid: 1,
            support: ve,
        }),
        "function" == typeof Symbol && (xe.fn[Symbol.iterator] = ie[Symbol.iterator]),
        xe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            pe["[object " + t + "]"] = t.toLowerCase();
        });
    var Ee = (function (e) {
        function t(e, t, n, r) {
            var o,
                i,
                a,
                s,
                l,
                u,
                p,
                d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (((n = n || []), "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))) return n;
            if (!r && ((t ? t.ownerDocument || t : X) !== H && N(t), (t = t || H), O)) {
                if (11 !== h && (l = me.exec(e)))
                    if ((o = l[1])) {
                        if (9 === h) {
                            if (!(a = t.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n;
                        } else if (d && (a = d.getElementById(o)) && P(t, a) && a.id === o) return n.push(a), n;
                    } else {
                        if (l[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(o)), n;
                    }
                if (w.qsa && !$[e + " "] && (!W || !W.test(e))) {
                    if (1 !== h) (d = t), (p = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? (s = s.replace(be, we)) : t.setAttribute("id", (s = Y)), i = (u = S(e)).length; i--; ) u[i] = "#" + s + " " + f(u[i]);
                        (p = u.join(",")), (d = (ge.test(e) && c(t.parentNode)) || t);
                    }
                    if (p)
                        try {
                            return G.apply(n, d.querySelectorAll(p)), n;
                        } catch (e) {
                        } finally {
                            s === Y && t.removeAttribute("id");
                        }
                }
            }
            return L(e.replace(ie, "$1"), t, n, r);
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], (e[n + " "] = r);
            }
            var t = [];
            return e;
        }
        function r(e) {
            return (e[Y] = !0), e;
        }
        function o(e) {
            var t = H.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function i(e, t) {
            for (var n = e.split("|"), r = n.length; r--; ) x.attrHandle[n[r]] = t;
        }
        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function s(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && Te(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function l(e) {
            return r(function (t) {
                return (
                    (t = +t),
                    r(function (n, r) {
                        for (var o, i = e([], n.length, t), a = i.length; a--; ) n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                    })
                );
            });
        }
        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function u() {}
        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function p(e, t, n) {
            var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = I++;
            return t.first
                ? function (t, n, o) {
                      for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, o);
                      return !1;
                  }
                : function (t, n, l) {
                      var c,
                          u,
                          f,
                          p = [q, s];
                      if (l) {
                          for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                      } else
                          for (; (t = t[r]); )
                              if (1 === t.nodeType || a)
                                  if (((f = t[Y] || (t[Y] = {})), (u = f[t.uniqueID] || (f[t.uniqueID] = {})), o && o === t.nodeName.toLowerCase())) t = t[r] || t;
                                  else {
                                      if ((c = u[i]) && c[0] === q && c[1] === s) return (p[2] = c[2]);
                                      if (((u[i] = p), (p[2] = e(t, n, l)))) return !0;
                                  }
                      return !1;
                  };
        }
        function d(e) {
            return e.length > 1
                ? function (t, n, r) {
                      for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function h(e, n, r) {
            for (var o = 0, i = n.length; o < i; o++) t(e, n[o], r);
            return r;
        }
        function m(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, c = null != t; s < l; s++) (i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(s)));
            return a;
        }
        function g(e, t, n, o, i, a) {
            return (
                o && !o[Y] && (o = g(o)),
                i && !i[Y] && (i = g(i, a)),
                r(function (r, a, s, l) {
                    var c,
                        u,
                        f,
                        p = [],
                        d = [],
                        g = a.length,
                        v = r || h(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || (!r && t) ? v : m(v, p, e, s, l),
                        b = n ? (i || (r ? e : g || o) ? [] : a) : y;
                    if ((n && n(y, b, s, l), o)) for (c = m(b, d), o(c, [], s, l), u = c.length; u--; ) (f = c[u]) && (b[d[u]] = !(y[d[u]] = f));
                    if (r) {
                        if (i || e) {
                            if (i) {
                                for (c = [], u = b.length; u--; ) (f = b[u]) && c.push((y[u] = f));
                                i(null, (b = []), c, l);
                            }
                            for (u = b.length; u--; ) (f = b[u]) && (c = i ? J(r, f) : p[u]) > -1 && (r[c] = !(a[c] = f));
                        }
                    } else (b = m(b === a ? b.splice(g, b.length) : b)), i ? i(null, a, b, l) : G.apply(a, b);
                })
            );
        }
        function v(e) {
            for (
                var t,
                    n,
                    r,
                    o = e.length,
                    i = x.relative[e[0].type],
                    a = i || x.relative[" "],
                    s = i ? 1 : 0,
                    l = p(
                        function (e) {
                            return e === t;
                        },
                        a,
                        !0
                    ),
                    c = p(
                        function (e) {
                            return J(t, e) > -1;
                        },
                        a,
                        !0
                    ),
                    u = [
                        function (e, n, r) {
                            var o = (!i && (r || n !== k)) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                            return (t = null), o;
                        },
                    ];
                s < o;
                s++
            )
                if ((n = x.relative[e[s].type])) u = [p(d(u), n)];
                else {
                    if ((n = x.filter[e[s].type].apply(null, e[s].matches))[Y]) {
                        for (r = ++s; r < o && !x.relative[e[r].type]; r++);
                        return g(s > 1 && d(u), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ie, "$1"), n, s < r && v(e.slice(s, r)), r < o && v((e = e.slice(r))), r < o && f(e));
                    }
                    u.push(n);
                }
            return d(u);
        }
        function y(e, n) {
            var o = n.length > 0,
                i = e.length > 0,
                a = function (r, a, s, l, c) {
                    var u,
                        f,
                        p,
                        d = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        y = k,
                        b = r || (i && x.find.TAG("*", c)),
                        w = (q += null == y ? 1 : Math.random() || 0.1),
                        T = b.length;
                    for (c && (k = a === H || a || c); h !== T && null != (u = b[h]); h++) {
                        if (i && u) {
                            for (f = 0, a || u.ownerDocument === H || (N(u), (s = !O)); (p = e[f++]); )
                                if (p(u, a || H, s)) {
                                    l.push(u);
                                    break;
                                }
                            c && (q = w);
                        }
                        o && ((u = !p && u) && d--, r && g.push(u));
                    }
                    if (((d += h), o && h !== d)) {
                        for (f = 0; (p = n[f++]); ) p(g, v, a, s);
                        if (r) {
                            if (d > 0) for (; h--; ) g[h] || v[h] || (v[h] = K.call(l));
                            v = m(v);
                        }
                        G.apply(l, v), c && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(l);
                    }
                    return c && ((q = w), (k = y)), g;
                };
            return o ? r(a) : a;
        }
        var b,
            w,
            x,
            T,
            E,
            S,
            C,
            L,
            k,
            D,
            A,
            N,
            H,
            j,
            O,
            W,
            R,
            M,
            P,
            Y = "sizzle" + 1 * new Date(),
            X = e.document,
            q = 0,
            I = 0,
            B = n(),
            F = n(),
            $ = n(),
            _ = function (e, t) {
                return e === t && (A = !0), 0;
            },
            z = {}.hasOwnProperty,
            U = [],
            K = U.pop,
            V = U.push,
            G = U.push,
            Q = U.slice,
            J = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            oe = new RegExp(ee + "+", "g"),
            ie = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ce = new RegExp(re),
            ue = new RegExp("^" + te + "$"),
            fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i"),
            },
            pe = /^(?:input|select|textarea|button)$/i,
            de = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ge = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            we = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            xe = function () {
                N();
            },
            Te = p(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            G.apply((U = Q.call(X.childNodes)), X.childNodes), U[X.childNodes.length].nodeType;
        } catch (e) {
            G = {
                apply: U.length
                    ? function (e, t) {
                          V.apply(e, Q.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                          e.length = n - 1;
                      },
            };
        }
        (w = t.support = {}),
            (E = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
            (N = t.setDocument = function (e) {
                var t,
                    n,
                    r = e ? e.ownerDocument || e : X;
                return r !== H && 9 === r.nodeType && r.documentElement
                    ? ((H = r),
                      (j = H.documentElement),
                      (O = !E(H)),
                      X !== H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)),
                      (w.attributes = o(function (e) {
                          return (e.className = "i"), !e.getAttribute("className");
                      })),
                      (w.getElementsByTagName = o(function (e) {
                          return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length;
                      })),
                      (w.getElementsByClassName = he.test(H.getElementsByClassName)),
                      (w.getById = o(function (e) {
                          return (j.appendChild(e).id = Y), !H.getElementsByName || !H.getElementsByName(Y).length;
                      })),
                      w.getById
                          ? ((x.filter.ID = function (e) {
                                var t = e.replace(ve, ye);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }),
                            (x.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && O) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : [];
                                }
                            }))
                          : ((x.filter.ID = function (e) {
                                var t = e.replace(ve, ye);
                                return function (e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t;
                                };
                            }),
                            (x.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && O) {
                                    var n,
                                        r,
                                        o,
                                        i = t.getElementById(e);
                                    if (i) {
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                        for (o = t.getElementsByName(e), r = 0; (i = o[r++]); ) if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    }
                                    return [];
                                }
                            })),
                      (x.find.TAG = w.getElementsByTagName
                          ? function (e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0;
                            }
                          : function (e, t) {
                                var n,
                                    r = [],
                                    o = 0,
                                    i = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                                    return r;
                                }
                                return i;
                            }),
                      (x.find.CLASS =
                          w.getElementsByClassName &&
                          function (e, t) {
                              if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e);
                          }),
                      (R = []),
                      (W = []),
                      (w.qsa = he.test(H.querySelectorAll)) &&
                          (o(function (e) {
                              (j.appendChild(e).innerHTML = "<a id='" + Y + "'></a><select id='" + Y + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  e.querySelectorAll("[msallowcapture^='']").length && W.push("[*^$]=" + ee + "*(?:''|\"\")"),
                                  e.querySelectorAll("[selected]").length || W.push("\\[" + ee + "*(?:value|" + Z + ")"),
                                  e.querySelectorAll("[id~=" + Y + "-]").length || W.push("~="),
                                  e.querySelectorAll(":checked").length || W.push(":checked"),
                                  e.querySelectorAll("a#" + Y + "+*").length || W.push(".#.+[+~]");
                          }),
                          o(function (e) {
                              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var t = H.createElement("input");
                              t.setAttribute("type", "hidden"),
                                  e.appendChild(t).setAttribute("name", "D"),
                                  e.querySelectorAll("[name=d]").length && W.push("name" + ee + "*[*^$|!~]?="),
                                  2 !== e.querySelectorAll(":enabled").length && W.push(":enabled", ":disabled"),
                                  (j.appendChild(e).disabled = !0),
                                  2 !== e.querySelectorAll(":disabled").length && W.push(":enabled", ":disabled"),
                                  e.querySelectorAll("*,:x"),
                                  W.push(",.*:");
                          })),
                      (w.matchesSelector = he.test((M = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector))) &&
                          o(function (e) {
                              (w.disconnectedMatch = M.call(e, "*")), M.call(e, "[s!='']:x"), R.push("!=", re);
                          }),
                      (W = W.length && new RegExp(W.join("|"))),
                      (R = R.length && new RegExp(R.join("|"))),
                      (t = he.test(j.compareDocumentPosition)),
                      (P =
                          t || he.test(j.contains)
                              ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                }
                              : function (e, t) {
                                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                    return !1;
                                }),
                      (_ = t
                          ? function (e, t) {
                                if (e === t) return (A = !0), 0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return (
                                    n ||
                                    (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!w.sortDetached && t.compareDocumentPosition(e) === n)
                                        ? e === H || (e.ownerDocument === X && P(X, e))
                                            ? -1
                                            : t === H || (t.ownerDocument === X && P(X, t))
                                            ? 1
                                            : D
                                            ? J(D, e) - J(D, t)
                                            : 0
                                        : 4 & n
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (e, t) {
                                if (e === t) return (A = !0), 0;
                                var n,
                                    r = 0,
                                    o = e.parentNode,
                                    i = t.parentNode,
                                    s = [e],
                                    l = [t];
                                if (!o || !i) return e === H ? -1 : t === H ? 1 : o ? -1 : i ? 1 : D ? J(D, e) - J(D, t) : 0;
                                if (o === i) return a(e, t);
                                for (n = e; (n = n.parentNode); ) s.unshift(n);
                                for (n = t; (n = n.parentNode); ) l.unshift(n);
                                for (; s[r] === l[r]; ) r++;
                                return r ? a(s[r], l[r]) : s[r] === X ? -1 : l[r] === X ? 1 : 0;
                            }),
                      H)
                    : H;
            }),
            (t.matches = function (e, n) {
                return t(e, null, null, n);
            }),
            (t.matchesSelector = function (e, n) {
                if (((e.ownerDocument || e) !== H && N(e), (n = n.replace(le, "='$1']")), w.matchesSelector && O && !$[n + " "] && (!R || !R.test(n)) && (!W || !W.test(n))))
                    try {
                        var r = M.call(e, n);
                        if (r || w.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                    } catch (e) {}
                return t(n, H, null, [e]).length > 0;
            }),
            (t.contains = function (e, t) {
                return (e.ownerDocument || e) !== H && N(e), P(e, t);
            }),
            (t.attr = function (e, t) {
                (e.ownerDocument || e) !== H && N(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && z.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            }),
            (t.escape = function (e) {
                return (e + "").replace(be, we);
            }),
            (t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (t.uniqueSort = function (e) {
                var t,
                    n = [],
                    r = 0,
                    o = 0;
                if (((A = !w.detectDuplicates), (D = !w.sortStable && e.slice(0)), e.sort(_), A)) {
                    for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
                    for (; r--; ) e.splice(n[r], 1);
                }
                return (D = null), e;
            }),
            (T = t.getText = function (e) {
                var t,
                    n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += T(t);
                return n;
            }),
            ((x = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: fe,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (e) {
                        return (e[1] = e[1].replace(ve, ye)), (e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && t.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return fe.CHILD.test(e[0])
                            ? null
                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && ce.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ve, ye).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return e.nodeName && e.nodeName.toLowerCase() === t;
                              };
                    },
                    CLASS: function (e) {
                        var t = B[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                                B(e, function (e) {
                                    return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (e, n, r) {
                        return function (o) {
                            var i = t.attr(o, e);
                            return null == i
                                ? "!=" === n
                                : !n ||
                                      ((i += ""),
                                      "=" === n
                                          ? i === r
                                          : "!=" === n
                                          ? i !== r
                                          : "^=" === n
                                          ? r && 0 === i.indexOf(r)
                                          : "*=" === n
                                          ? r && i.indexOf(r) > -1
                                          : "$=" === n
                                          ? r && i.slice(-r.length) === r
                                          : "~=" === n
                                          ? (" " + i.replace(oe, " ") + " ").indexOf(r) > -1
                                          : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"));
                        };
                    },
                    CHILD: function (e, t, n, r, o) {
                        var i = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === o
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (t, n, l) {
                                  var c,
                                      u,
                                      f,
                                      p,
                                      d,
                                      h,
                                      m = i !== a ? "nextSibling" : "previousSibling",
                                      g = t.parentNode,
                                      v = s && t.nodeName.toLowerCase(),
                                      y = !l && !s,
                                      b = !1;
                                  if (g) {
                                      if (i) {
                                          for (; m; ) {
                                              for (p = t; (p = p[m]); ) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                              h = m = "only" === e && !h && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                                          for (
                                              b = (d = (c = (u = (f = (p = g)[Y] || (p[Y] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === q && c[1]) && c[2], p = d && g.childNodes[d];
                                              (p = (++d && p && p[m]) || (b = d = 0) || h.pop());

                                          )
                                              if (1 === p.nodeType && ++b && p === t) {
                                                  u[e] = [q, d, b];
                                                  break;
                                              }
                                      } else if ((y && (b = d = (c = (u = (f = (p = t)[Y] || (p[Y] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === q && c[1]), !1 === b))
                                          for (
                                              ;
                                              (p = (++d && p && p[m]) || (b = d = 0) || h.pop()) &&
                                              ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (f = p[Y] || (p[Y] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [q, b]), p !== t));

                                          );
                                      return (b -= o) === r || (b % r == 0 && b / r >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (e, n) {
                        var o,
                            i = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return i[Y]
                            ? i(n)
                            : i.length > 1
                            ? ((o = [e, e, "", n]),
                              x.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? r(function (e, t) {
                                        for (var r, o = i(e, n), a = o.length; a--; ) e[(r = J(e, o[a]))] = !(t[r] = o[a]);
                                    })
                                  : function (e) {
                                        return i(e, 0, o);
                                    })
                            : i;
                    },
                },
                pseudos: {
                    not: r(function (e) {
                        var t = [],
                            n = [],
                            o = C(e.replace(ie, "$1"));
                        return o[Y]
                            ? r(function (e, t, n, r) {
                                  for (var i, a = o(e, null, r, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
                              })
                            : function (e, r, i) {
                                  return (t[0] = e), o(t, null, i, n), (t[0] = null), !n.pop();
                              };
                    }),
                    has: r(function (e) {
                        return function (n) {
                            return t(e, n).length > 0;
                        };
                    }),
                    contains: r(function (e) {
                        return (
                            (e = e.replace(ve, ye)),
                            function (t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                            }
                        );
                    }),
                    lang: r(function (e) {
                        return (
                            ue.test(e || "") || t.error("unsupported lang: " + e),
                            (e = e.replace(ve, ye).toLowerCase()),
                            function (t) {
                                var n;
                                do {
                                    if ((n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === j;
                    },
                    focus: function (e) {
                        return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !x.pseudos.empty(e);
                    },
                    header: function (e) {
                        return de.test(e.nodeName);
                    },
                    input: function (e) {
                        return pe.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                    },
                    first: l(function () {
                        return [0];
                    }),
                    last: l(function (e, t) {
                        return [t - 1];
                    }),
                    eq: l(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: l(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: l(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: l(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                        return e;
                    }),
                    gt: l(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }).pseudos.nth = x.pseudos.eq);
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
            x.pseudos[b] = (function (e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
            })(b);
        for (b in { submit: !0, reset: !0 })
            x.pseudos[b] = (function (e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e;
                };
            })(b);
        return (
            (u.prototype = x.filters = x.pseudos),
            (x.setFilters = new u()),
            (S = t.tokenize = function (e, n) {
                var r,
                    o,
                    i,
                    a,
                    s,
                    l,
                    c,
                    u = F[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = x.preFilter; s; ) {
                    (r && !(o = ae.exec(s))) || (o && (s = s.slice(o[0].length) || s), l.push((i = []))), (r = !1), (o = se.exec(s)) && ((r = o.shift()), i.push({ value: r, type: o[0].replace(ie, " ") }), (s = s.slice(r.length)));
                    for (a in x.filter) !(o = fe[a].exec(s)) || (c[a] && !(o = c[a](o))) || ((r = o.shift()), i.push({ value: r, type: a, matches: o }), (s = s.slice(r.length)));
                    if (!r) break;
                }
                return n ? s.length : s ? t.error(e) : F(e, l).slice(0);
            }),
            (C = t.compile = function (e, t) {
                var n,
                    r = [],
                    o = [],
                    i = $[e + " "];
                if (!i) {
                    for (t || (t = S(e)), n = t.length; n--; ) (i = v(t[n]))[Y] ? r.push(i) : o.push(i);
                    (i = $(e, y(o, r))).selector = e;
                }
                return i;
            }),
            (L = t.select = function (e, t, n, r) {
                var o,
                    i,
                    a,
                    s,
                    l,
                    u = "function" == typeof e && e,
                    p = !r && S((e = u.selector || e));
                if (((n = n || []), 1 === p.length)) {
                    if ((i = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = i[0]).type && 9 === t.nodeType && O && x.relative[i[1].type]) {
                        if (!(t = (x.find.ID(a.matches[0].replace(ve, ye), t) || [])[0])) return n;
                        u && (t = t.parentNode), (e = e.slice(i.shift().value.length));
                    }
                    for (o = fe.needsContext.test(e) ? 0 : i.length; o-- && ((a = i[o]), !x.relative[(s = a.type)]); )
                        if ((l = x.find[s]) && (r = l(a.matches[0].replace(ve, ye), (ge.test(i[0].type) && c(t.parentNode)) || t))) {
                            if ((i.splice(o, 1), !(e = r.length && f(i)))) return G.apply(n, r), n;
                            break;
                        }
                }
                return (u || C(e, p))(r, t, !O, n, !t || (ge.test(e) && c(t.parentNode)) || t), n;
            }),
            (w.sortStable = Y.split("").sort(_).join("") === Y),
            (w.detectDuplicates = !!A),
            N(),
            (w.sortDetached = o(function (e) {
                return 1 & e.compareDocumentPosition(H.createElement("fieldset"));
            })),
            o(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                i("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (w.attributes &&
                o(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                i("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            o(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                i(Z, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
            t
        );
    })(e);
    (xe.find = Ee), (xe.expr = Ee.selectors), (xe.expr[":"] = xe.expr.pseudos), (xe.uniqueSort = xe.unique = Ee.uniqueSort), (xe.text = Ee.getText), (xe.isXMLDoc = Ee.isXML), (xe.contains = Ee.contains), (xe.escapeSelector = Ee.escape);
    var Se = function (e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (o && xe(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        Ce = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        Le = xe.expr.match.needsContext,
        ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    (xe.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? xe.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : xe.find.matches(
                      e,
                      xe.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        xe.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    o = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        xe(e).filter(function () {
                            for (t = 0; t < r; t++) if (xe.contains(o[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) xe.find(e, o[t], n);
                return r > 1 ? xe.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(a(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(a(this, e || [], !0));
            },
            is: function (e) {
                return !!a(this, "string" == typeof e && Le.test(e) ? xe(e) : e || [], !1).length;
            },
        });
    var De,
        Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((xe.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (((n = n || De), "string" == typeof e)) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (((t = t instanceof xe ? t[0] : t), xe.merge(this, xe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)), ke.test(r[1]) && xe.isPlainObject(t)))
                    for (r in t) ye(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (o = ae.getElementById(r[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : ye(e) ? (void 0 !== n.ready ? n.ready(e) : e(xe)) : xe.makeArray(e, this);
    }).prototype = xe.fn),
        (De = xe(ae));
    var Ne = /^(?:parents|prev(?:Until|All))/,
        He = { children: !0, contents: !0, next: !0, prev: !0 };
    xe.fn.extend({
        has: function (e) {
            var t = xe(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (xe.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && xe(e);
            if (!Le.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && xe.find.matchesSelector(n, e))) {
                            i.push(n);
                            break;
                        }
            return this.pushStack(i.length > 1 ? xe.uniqueSort(i) : i);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? fe.call(xe(e), this[0]) : fe.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(xe.uniqueSort(xe.merge(this.get(), xe(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        xe.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return Se(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return Se(e, "parentNode", n);
                },
                next: function (e) {
                    return s(e, "nextSibling");
                },
                prev: function (e) {
                    return s(e, "previousSibling");
                },
                nextAll: function (e) {
                    return Se(e, "nextSibling");
                },
                prevAll: function (e) {
                    return Se(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return Se(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return Se(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return Ce((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return Ce(e.firstChild);
                },
                contents: function (e) {
                    return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), xe.merge([], e.childNodes));
                },
            },
            function (e, t) {
                xe.fn[e] = function (n, r) {
                    var o = xe.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = xe.filter(r, o)), this.length > 1 && (He[e] || xe.uniqueSort(o), Ne.test(e) && o.reverse()), this.pushStack(o);
                };
            }
        );
    var je = /[^\x20\t\r\n\f]+/g;
    (xe.Callbacks = function (e) {
        e = "string" == typeof e ? l(e) : xe.extend({}, e);
        var t,
            n,
            o,
            i,
            a = [],
            s = [],
            c = -1,
            u = function () {
                for (i = i || e.once, o = t = !0; s.length; c = -1) for (n = s.shift(); ++c < a.length; ) !1 === a[c].apply(n[0], n[1]) && e.stopOnFalse && ((c = a.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (a = n ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        a &&
                            (n && !t && ((c = a.length - 1), s.push(n)),
                            (function t(n) {
                                xe.each(n, function (n, o) {
                                    ye(o) ? (e.unique && f.has(o)) || a.push(o) : o && o.length && "string" !== r(o) && t(o);
                                });
                            })(arguments),
                            n && !t && u()),
                        this
                    );
                },
                remove: function () {
                    return (
                        xe.each(arguments, function (e, t) {
                            for (var n; (n = xe.inArray(t, a, n)) > -1; ) a.splice(n, 1), n <= c && c--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? xe.inArray(e, a) > -1 : a.length > 0;
                },
                empty: function () {
                    return a && (a = []), this;
                },
                disable: function () {
                    return (i = s = []), (a = n = ""), this;
                },
                disabled: function () {
                    return !a;
                },
                lock: function () {
                    return (i = s = []), n || t || (a = n = ""), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || u()), this;
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        xe.extend({
            Deferred: function (t) {
                var n = [
                        ["notify", "progress", xe.Callbacks("memory"), xe.Callbacks("memory"), 2],
                        ["resolve", "done", xe.Callbacks("once memory"), xe.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", xe.Callbacks("once memory"), xe.Callbacks("once memory"), 1, "rejected"],
                    ],
                    r = "pending",
                    o = {
                        state: function () {
                            return r;
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return o.then(null, e);
                        },
                        pipe: function () {
                            var e = arguments;
                            return xe
                                .Deferred(function (t) {
                                    xe.each(n, function (n, r) {
                                        var o = ye(e[r[4]]) && e[r[4]];
                                        i[r[1]](function () {
                                            var e = o && o.apply(this, arguments);
                                            e && ye(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments);
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        then: function (t, r, o) {
                            function i(t, n, r, o) {
                                return function () {
                                    var s = this,
                                        l = arguments,
                                        f = function () {
                                            var e, f;
                                            if (!(t < a)) {
                                                if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                (f = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    ye(f)
                                                        ? o
                                                            ? f.call(e, i(a, n, c, o), i(a, n, u, o))
                                                            : (a++, f.call(e, i(a, n, c, o), i(a, n, u, o), i(a, n, c, n.notifyWith)))
                                                        : (r !== c && ((s = void 0), (l = [e])), (o || n.resolveWith)(s, l));
                                            }
                                        },
                                        p = o
                                            ? f
                                            : function () {
                                                  try {
                                                      f();
                                                  } catch (e) {
                                                      xe.Deferred.exceptionHook && xe.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== u && ((s = void 0), (l = [e])), n.rejectWith(s, l));
                                                  }
                                              };
                                    t ? p() : (xe.Deferred.getStackHook && (p.stackTrace = xe.Deferred.getStackHook()), e.setTimeout(p));
                                };
                            }
                            var a = 0;
                            return xe
                                .Deferred(function (e) {
                                    n[0][3].add(i(0, e, ye(o) ? o : c, e.notifyWith)), n[1][3].add(i(0, e, ye(t) ? t : c)), n[2][3].add(i(0, e, ye(r) ? r : u));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? xe.extend(e, o) : o;
                        },
                    },
                    i = {};
                return (
                    xe.each(n, function (e, t) {
                        var a = t[2],
                            s = t[5];
                        (o[t[1]] = a.add),
                            s &&
                                a.add(
                                    function () {
                                        r = s;
                                    },
                                    n[3 - e][2].disable,
                                    n[3 - e][3].disable,
                                    n[0][2].lock,
                                    n[0][3].lock
                                ),
                            a.add(t[3].fire),
                            (i[t[0]] = function () {
                                return i[t[0] + "With"](this === i ? void 0 : this, arguments), this;
                            }),
                            (i[t[0] + "With"] = a.fireWith);
                    }),
                    o.promise(i),
                    t && t.call(i, i),
                    i
                );
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    o = le.call(arguments),
                    i = xe.Deferred(),
                    a = function (e) {
                        return function (n) {
                            (r[e] = this), (o[e] = arguments.length > 1 ? le.call(arguments) : n), --t || i.resolveWith(r, o);
                        };
                    };
                if (t <= 1 && (f(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || ye(o[n] && o[n].then))) return i.then();
                for (; n--; ) f(o[n], a(n), i.reject);
                return i.promise();
            },
        });
    var Oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (xe.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Oe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (xe.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var We = xe.Deferred();
    (xe.fn.ready = function (e) {
        return (
            We.then(e).catch(function (e) {
                xe.readyException(e);
            }),
            this
        );
    }),
        xe.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --xe.readyWait : xe.isReady) || ((xe.isReady = !0), (!0 !== e && --xe.readyWait > 0) || We.resolveWith(ae, [xe]));
            },
        }),
        (xe.ready.then = We.then),
        "complete" === ae.readyState || ("loading" !== ae.readyState && !ae.documentElement.doScroll) ? e.setTimeout(xe.ready) : (ae.addEventListener("DOMContentLoaded", p), e.addEventListener("load", p));
    var Re = function (e, t, n, o, i, a, s) {
            var l = 0,
                c = e.length,
                u = null == n;
            if ("object" === r(n)) {
                i = !0;
                for (l in n) Re(e, t, l, n[l], !0, a, s);
            } else if (
                void 0 !== o &&
                ((i = !0),
                ye(o) || (s = !0),
                u &&
                    (s
                        ? (t.call(e, o), (t = null))
                        : ((u = t),
                          (t = function (e, t, n) {
                              return u.call(xe(e), n);
                          }))),
                t)
            )
                for (; l < c; l++) t(e[l], n, s ? o : o.call(e[l], l, t(e[l], n)));
            return i ? e : u ? t.call(e) : c ? t(e[0], n) : a;
        },
        Me = /^-ms-/,
        Pe = /-([a-z])/g,
        Ye = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
    (m.uid = 1),
        (m.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Ye(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    o = this.cache(e);
                if ("string" == typeof t) o[h(t)] = n;
                else for (r in t) o[h(r)] = t[r];
                return o;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(h) : (t = h(t)) in r ? [t] : t.match(je) || []).length;
                        for (; n--; ) delete r[t[n]];
                    }
                    (void 0 === t || xe.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !xe.isEmptyObject(t);
            },
        });
    var Xe = new m(),
        qe = new m(),
        Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Be = /[A-Z]/g;
    xe.extend({
        hasData: function (e) {
            return qe.hasData(e) || Xe.hasData(e);
        },
        data: function (e, t, n) {
            return qe.access(e, t, n);
        },
        removeData: function (e, t) {
            qe.remove(e, t);
        },
        _data: function (e, t, n) {
            return Xe.access(e, t, n);
        },
        _removeData: function (e, t) {
            Xe.remove(e, t);
        },
    }),
        xe.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    o,
                    i = this[0],
                    a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && ((o = qe.get(i)), 1 === i.nodeType && !Xe.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = h(r.slice(5))), v(i, r, o[r]));
                        Xe.set(i, "hasDataAttrs", !0);
                    }
                    return o;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          qe.set(this, e);
                      })
                    : Re(
                          this,
                          function (t) {
                              var n;
                              if (i && void 0 === t) {
                                  if (void 0 !== (n = qe.get(i, e))) return n;
                                  if (void 0 !== (n = v(i, e))) return n;
                              } else
                                  this.each(function () {
                                      qe.set(this, e, t);
                                  });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    qe.remove(this, e);
                });
            },
        }),
        xe.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = Xe.get(e, t)), n && (!r || Array.isArray(n) ? (r = Xe.access(e, t, xe.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = xe.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = xe._queueHooks(e, t),
                    a = function () {
                        xe.dequeue(e, t);
                    };
                "inprogress" === o && ((o = n.shift()), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Xe.get(e, n) ||
                    Xe.access(e, n, {
                        empty: xe.Callbacks("once memory").add(function () {
                            Xe.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        xe.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? xe.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = xe.queue(this, e, t);
                              xe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && xe.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    xe.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    o = xe.Deferred(),
                    i = this,
                    a = this.length,
                    s = function () {
                        --r || o.resolveWith(i, [i]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = Xe.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t);
            },
        });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        $e = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        _e = ["Top", "Right", "Bottom", "Left"],
        ze = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && xe.contains(e.ownerDocument, e) && "none" === xe.css(e, "display"));
        },
        Ue = function (e, t, n, r) {
            var o,
                i,
                a = {};
            for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i]);
            o = n.apply(e, r || []);
            for (i in t) e.style[i] = a[i];
            return o;
        },
        Ke = {};
    xe.fn.extend({
        show: function () {
            return w(this, !0);
        },
        hide: function () {
            return w(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ze(this) ? xe(this).show() : xe(this).hide();
                  });
        },
    });
    var Ve = /^(?:checkbox|radio)$/i,
        Ge = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qe = /^$|^module$|\/(?:java|ecma)script/i,
        Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (Je.optgroup = Je.option), (Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead), (Je.th = Je.td);
    var Ze = /<|&#?\w+;/;
    !(function () {
        var e = ae.createDocumentFragment().appendChild(ae.createElement("div")),
            t = ae.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var et = ae.documentElement,
        tt = /^key/,
        nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rt = /^([^.]*)(?:\.(.+)|)/;
    (xe.event = {
        global: {},
        add: function (e, t, n, r, o) {
            var i,
                a,
                s,
                l,
                c,
                u,
                f,
                p,
                d,
                h,
                m,
                g = Xe.get(e);
            if (g)
                for (
                    n.handler && ((n = (i = n).handler), (o = i.selector)),
                        o && xe.find.matchesSelector(et, o),
                        n.guid || (n.guid = xe.guid++),
                        (l = g.events) || (l = g.events = {}),
                        (a = g.handle) ||
                            (a = g.handle = function (t) {
                                return void 0 !== xe && xe.event.triggered !== t.type ? xe.event.dispatch.apply(e, arguments) : void 0;
                            }),
                        c = (t = (t || "").match(je) || [""]).length;
                    c--;

                )
                    (d = m = (s = rt.exec(t[c]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = xe.event.special[d] || {}),
                            (d = (o ? f.delegateType : f.bindType) || d),
                            (f = xe.event.special[d] || {}),
                            (u = xe.extend({ type: d, origType: m, data: r, handler: n, guid: n.guid, selector: o, needsContext: o && xe.expr.match.needsContext.test(o), namespace: h.join(".") }, i)),
                            (p = l[d]) || (((p = l[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                            f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                            o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                            (xe.event.global[d] = !0));
        },
        remove: function (e, t, n, r, o) {
            var i,
                a,
                s,
                l,
                c,
                u,
                f,
                p,
                d,
                h,
                m,
                g = Xe.hasData(e) && Xe.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(je) || [""]).length; c--; )
                    if (((s = rt.exec(t[c]) || []), (d = m = s[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        for (f = xe.event.special[d] || {}, p = l[(d = (r ? f.delegateType : f.bindType) || d)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--; )
                            (u = p[i]),
                                (!o && m !== u.origType) ||
                                    (n && n.guid !== u.guid) ||
                                    (s && !s.test(u.namespace)) ||
                                    (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                                    (p.splice(i, 1), u.selector && p.delegateCount--, f.remove && f.remove.call(e, u));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) || xe.removeEvent(e, d, g.handle), delete l[d]);
                    } else for (d in l) xe.event.remove(e, d + t[c], n, r, !0);
                xe.isEmptyObject(l) && Xe.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                o,
                i,
                a,
                s = xe.event.fix(e),
                l = new Array(arguments.length),
                c = (Xe.get(this, "events") || {})[s.type] || [],
                u = xe.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (((s.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, s))) {
                for (a = xe.event.handlers.call(this, s, c), t = 0; (o = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        (s.rnamespace && !s.rnamespace.test(i.namespace)) ||
                            ((s.handleObj = i), (s.data = i.data), void 0 !== (r = ((xe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (i = [], a = {}, n = 0; n < l; n++) void 0 === a[(o = (r = t[n]).selector + " ")] && (a[o] = r.needsContext ? xe(o, this).index(c) > -1 : xe.find(o, this, null, [c]).length), a[o] && i.push(r);
                        i.length && s.push({ elem: c, handlers: i });
                    }
            return (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(xe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ye(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[xe.expando] ? e : new xe.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== L() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === L() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1;
                },
                _default: function (e) {
                    return i(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (xe.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (xe.Event = function (e, t) {
            if (!(this instanceof xe.Event)) return new xe.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? S : C),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && xe.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[xe.expando] = !0);
        }),
        (xe.Event.prototype = {
            constructor: xe.Event,
            isDefaultPrevented: C,
            isPropagationStopped: C,
            isImmediatePropagationStopped: C,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = S), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = S), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = S), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        xe.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && tt.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && nt.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            xe.event.addProp
        ),
        xe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            xe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        r = this,
                        o = e.relatedTarget,
                        i = e.handleObj;
                    return (o && (o === r || xe.contains(r, o))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        xe.fn.extend({
            on: function (e, t, n, r) {
                return k(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return k(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), xe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = C),
                    this.each(function () {
                        xe.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        it = /<script|<style|<link/i,
        at = /checked\s*(?:[^=]|=\s*.checked.)/i,
        st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    xe.extend({
        htmlPrefilter: function (e) {
            return e.replace(ot, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                o,
                i,
                a,
                s = e.cloneNode(!0),
                l = xe.contains(e.ownerDocument, e);
            if (!(ve.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || xe.isXMLDoc(e))) for (a = x(s), r = 0, o = (i = x(e)).length; r < o; r++) j(i[r], a[r]);
            if (t)
                if (n) for (i = i || x(e), a = a || x(s), r = 0, o = i.length; r < o; r++) H(i[r], a[r]);
                else H(e, s);
            return (a = x(s, "script")).length > 0 && T(a, !l && x(e, "script")), s;
        },
        cleanData: function (e) {
            for (var t, n, r, o = xe.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (Ye(n)) {
                    if ((t = n[Xe.expando])) {
                        if (t.events) for (r in t.events) o[r] ? xe.event.remove(n, r) : xe.removeEvent(n, r, t.handle);
                        n[Xe.expando] = void 0;
                    }
                    n[qe.expando] && (n[qe.expando] = void 0);
                }
        },
    }),
        xe.fn.extend({
            detach: function (e) {
                return W(this, e, !0);
            },
            remove: function (e) {
                return W(this, e);
            },
            text: function (e) {
                return Re(
                    this,
                    function (e) {
                        return void 0 === e
                            ? xe.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return O(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || D(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return O(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = D(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return O(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return O(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (xe.cleanData(x(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return xe.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return Re(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !it.test(e) && !Je[(Ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = xe.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (xe.cleanData(x(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return O(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        xe.inArray(this, e) < 0 && (xe.cleanData(x(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        xe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            xe.fn[e] = function (e) {
                for (var n, r = [], o = xe(e), i = o.length - 1, a = 0; a <= i; a++) (n = a === i ? this : this.clone(!0)), xe(o[a])[t](n), ue.apply(r, n.get());
                return this.pushStack(r);
            };
        });
    var lt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        ct = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        ut = new RegExp(_e.join("|"), "i");
    !(function () {
        function t() {
            if (c) {
                (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    et.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                (r = "1%" !== t.top),
                    (s = 12 === n(t.marginLeft)),
                    (c.style.right = "60%"),
                    (a = 36 === n(t.right)),
                    (o = 36 === n(t.width)),
                    (c.style.position = "absolute"),
                    (i = 36 === c.offsetWidth || "absolute"),
                    et.removeChild(l),
                    (c = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var r,
            o,
            i,
            a,
            s,
            l = ae.createElement("div"),
            c = ae.createElement("div");
        c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (ve.clearCloneStyle = "content-box" === c.style.backgroundClip),
            xe.extend(ve, {
                boxSizingReliable: function () {
                    return t(), o;
                },
                pixelBoxStyles: function () {
                    return t(), a;
                },
                pixelPosition: function () {
                    return t(), r;
                },
                reliableMarginLeft: function () {
                    return t(), s;
                },
                scrollboxSize: function () {
                    return t(), i;
                },
            }));
    })();
    var ft = /^(none|table(?!-c[ea]).+)/,
        pt = /^--/,
        dt = { position: "absolute", visibility: "hidden", display: "block" },
        ht = { letterSpacing: "0", fontWeight: "400" },
        mt = ["Webkit", "Moz", "ms"],
        gt = ae.createElement("div").style;
    xe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = R(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                    i,
                    a,
                    s = h(t),
                    l = pt.test(t),
                    c = e.style;
                if ((l || (t = Y(s)), (a = xe.cssHooks[t] || xe.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
                "string" == (i = typeof n) && (o = $e.exec(n)) && o[1] && ((n = y(e, t, o)), (i = "number")),
                    null != n &&
                        n === n &&
                        ("number" === i && (n += (o && o[3]) || (xe.cssNumber[s] ? "" : "px")),
                        ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (l ? c.setProperty(t, n) : (c[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var o,
                i,
                a,
                s = h(t);
            return (
                pt.test(t) || (t = Y(s)),
                (a = xe.cssHooks[t] || xe.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = R(e, t, r)),
                "normal" === o && t in ht && (o = ht[t]),
                "" === n || n ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o) : o
            );
        },
    }),
        xe.each(["height", "width"], function (e, t) {
            xe.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)
                        return !ft.test(xe.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? I(e, t, r)
                            : Ue(e, dt, function () {
                                  return I(e, t, r);
                              });
                },
                set: function (e, n, r) {
                    var o,
                        i = ct(e),
                        a = "border-box" === xe.css(e, "boxSizing", !1, i),
                        s = r && q(e, t, r, a, i);
                    return (
                        a && ve.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - q(e, t, "border", !1, i) - 0.5)),
                        s && (o = $e.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = xe.css(e, t))),
                        X(e, n, s)
                    );
                },
            };
        }),
        (xe.cssHooks.marginLeft = M(ve.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(R(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Ue(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        xe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (xe.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + _e[r] + t] = i[r] || i[r - 2] || i[0];
                    return o;
                },
            }),
                "margin" !== e && (xe.cssHooks[e + t].set = X);
        }),
        xe.fn.extend({
            css: function (e, t) {
                return Re(
                    this,
                    function (e, t, n) {
                        var r,
                            o,
                            i = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = ct(e), o = t.length; a < o; a++) i[t[a]] = xe.css(e, t[a], !1, r);
                            return i;
                        }
                        return void 0 !== n ? xe.style(e, t, n) : xe.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        }),
        (xe.Tween = B),
        (B.prototype = {
            constructor: B,
            init: function (e, t, n, r, o, i) {
                (this.elem = e), (this.prop = n), (this.easing = o || xe.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = i || (xe.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = B.propHooks[this.prop];
                return e && e.get ? e.get(this) : B.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = B.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = xe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : B.propHooks._default.set(this),
                    this
                );
            },
        }),
        (B.prototype.init.prototype = B.prototype),
        (B.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = xe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    xe.fx.step[e.prop] ? xe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[xe.cssProps[e.prop]] && !xe.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : xe.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (B.propHooks.scrollTop = B.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (xe.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (xe.fx = B.prototype.init),
        (xe.fx.step = {});
    var vt,
        yt,
        bt = /^(?:toggle|show|hide)$/,
        wt = /queueHooks$/;
    (xe.Animation = xe.extend(V, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, $e.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            ye(e) ? ((t = e), (e = ["*"])) : (e = e.match(je));
            for (var n, r = 0, o = e.length; r < o; r++) (n = e[r]), (V.tweeners[n] = V.tweeners[n] || []), V.tweeners[n].unshift(t);
        },
        prefilters: [U],
        prefilter: function (e, t) {
            t ? V.prefilters.unshift(e) : V.prefilters.push(e);
        },
    })),
        (xe.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? xe.extend({}, e) : { complete: n || (!n && t) || (ye(e) && e), duration: e, easing: (n && t) || (t && !ye(t) && t) };
            return (
                xe.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in xe.fx.speeds ? (r.duration = xe.fx.speeds[r.duration]) : (r.duration = xe.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    ye(r.old) && r.old.call(this), r.queue && xe.dequeue(this, r.queue);
                }),
                r
            );
        }),
        xe.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ze).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var o = xe.isEmptyObject(e),
                    i = xe.speed(t, n, r),
                    a = function () {
                        var t = V(this, xe.extend({}, e), i);
                        (o || Xe.get(this, "finish")) && t.stop(!0);
                    };
                return (a.finish = a), o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            i = xe.timers,
                            a = Xe.get(this);
                        if (o) a[o] && a[o].stop && r(a[o]);
                        else for (o in a) a[o] && a[o].stop && wt.test(o) && r(a[o]);
                        for (o = i.length; o--; ) i[o].elem !== this || (null != e && i[o].queue !== e) || (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                        (!t && n) || xe.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = Xe.get(this),
                            r = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            i = xe.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, xe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        xe.each(["toggle", "show", "hide"], function (e, t) {
            var n = xe.fn[t];
            xe.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, r, o);
            };
        }),
        xe.each({ slideDown: _("show"), slideUp: _("hide"), slideToggle: _("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            xe.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }),
        (xe.timers = []),
        (xe.fx.tick = function () {
            var e,
                t = 0,
                n = xe.timers;
            for (vt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || xe.fx.stop(), (vt = void 0);
        }),
        (xe.fx.timer = function (e) {
            xe.timers.push(e), xe.fx.start();
        }),
        (xe.fx.interval = 13),
        (xe.fx.start = function () {
            yt || ((yt = !0), F());
        }),
        (xe.fx.stop = function () {
            yt = null;
        }),
        (xe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (xe.fn.delay = function (t, n) {
            return (
                (t = xe.fx ? xe.fx.speeds[t] || t : t),
                (n = n || "fx"),
                this.queue(n, function (n, r) {
                    var o = e.setTimeout(n, t);
                    r.stop = function () {
                        e.clearTimeout(o);
                    };
                })
            );
        }),
        (function () {
            var e = ae.createElement("input"),
                t = ae.createElement("select").appendChild(ae.createElement("option"));
            (e.type = "checkbox"), (ve.checkOn = "" !== e.value), (ve.optSelected = t.selected), ((e = ae.createElement("input")).value = "t"), (e.type = "radio"), (ve.radioValue = "t" === e.value);
        })();
    var xt,
        Tt = xe.expr.attrHandle;
    xe.fn.extend({
        attr: function (e, t) {
            return Re(this, xe.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                xe.removeAttr(this, e);
            });
        },
    }),
        xe.extend({
            attr: function (e, t, n) {
                var r,
                    o,
                    i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return void 0 === e.getAttribute
                        ? xe.prop(e, t, n)
                        : ((1 === i && xe.isXMLDoc(e)) || (o = xe.attrHooks[t.toLowerCase()] || (xe.expr.match.bool.test(t) ? xt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void xe.removeAttr(e, t)
                                  : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : o && "get" in o && null !== (r = o.get(e, t))
                              ? r
                              : null == (r = xe.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ve.radioValue && "radio" === t && i(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    o = t && t.match(je);
                if (o && 1 === e.nodeType) for (; (n = o[r++]); ) e.removeAttribute(n);
            },
        }),
        (xt = {
            set: function (e, t, n) {
                return !1 === t ? xe.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        xe.each(xe.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Tt[t] || xe.find.attr;
            Tt[t] = function (e, t, r) {
                var o,
                    i,
                    a = t.toLowerCase();
                return r || ((i = Tt[a]), (Tt[a] = o), (o = null != n(e, t, r) ? a : null), (Tt[a] = i)), o;
            };
        });
    var Et = /^(?:input|select|textarea|button)$/i,
        St = /^(?:a|area)$/i;
    xe.fn.extend({
        prop: function (e, t) {
            return Re(this, xe.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[xe.propFix[e] || e];
            });
        },
    }),
        xe.extend({
            prop: function (e, t, n) {
                var r,
                    o,
                    i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return (
                        (1 === i && xe.isXMLDoc(e)) || ((t = xe.propFix[t] || t), (o = xe.propHooks[t])),
                        void 0 !== n ? (o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e[t] = n)) : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = xe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Et.test(e.nodeName) || (St.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        ve.optSelected ||
            (xe.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        xe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            xe.propFix[this.toLowerCase()] = this;
        }),
        xe.fn.extend({
            addClass: function (e) {
                var t,
                    n,
                    r,
                    o,
                    i,
                    a,
                    s,
                    l = 0;
                if (ye(e))
                    return this.each(function (t) {
                        xe(this).addClass(e.call(this, t, Q(this)));
                    });
                if ((t = J(e)).length)
                    for (; (n = this[l++]); )
                        if (((o = Q(n)), (r = 1 === n.nodeType && " " + G(o) + " "))) {
                            for (a = 0; (i = t[a++]); ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            o !== (s = G(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (e) {
                var t,
                    n,
                    r,
                    o,
                    i,
                    a,
                    s,
                    l = 0;
                if (ye(e))
                    return this.each(function (t) {
                        xe(this).removeClass(e.call(this, t, Q(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((t = J(e)).length)
                    for (; (n = this[l++]); )
                        if (((o = Q(n)), (r = 1 === n.nodeType && " " + G(o) + " "))) {
                            for (a = 0; (i = t[a++]); ) for (; r.indexOf(" " + i + " ") > -1; ) r = r.replace(" " + i + " ", " ");
                            o !== (s = G(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                    ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                    : ye(e)
                    ? this.each(function (n) {
                          xe(this).toggleClass(e.call(this, n, Q(this), t), t);
                      })
                    : this.each(function () {
                          var t, o, i, a;
                          if (r) for (o = 0, i = xe(this), a = J(e); (t = a[o++]); ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                          else (void 0 !== e && "boolean" !== n) || ((t = Q(this)) && Xe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Xe.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + G(Q(n)) + " ").indexOf(t) > -1) return !0;
                return !1;
            },
        });
    var Ct = /\r/g;
    xe.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                o = this[0];
            return arguments.length
                ? ((r = ye(e)),
                  this.each(function (n) {
                      var o;
                      1 === this.nodeType &&
                          (null == (o = r ? e.call(this, n, xe(this).val()) : e)
                              ? (o = "")
                              : "number" == typeof o
                              ? (o += "")
                              : Array.isArray(o) &&
                                (o = xe.map(o, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((t = xe.valHooks[this.type] || xe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value")) || (this.value = o));
                  }))
                : o
                ? (t = xe.valHooks[o.type] || xe.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value"))
                    ? n
                    : "string" == typeof (n = o.value)
                    ? n.replace(Ct, "")
                    : null == n
                    ? ""
                    : n
                : void 0;
        },
    }),
        xe.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = xe.find.attr(e, "value");
                        return null != t ? t : G(xe.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            o = e.options,
                            a = e.selectedIndex,
                            s = "select-one" === e.type,
                            l = s ? null : [],
                            c = s ? a + 1 : o.length;
                        for (r = a < 0 ? c : s ? a : 0; r < c; r++)
                            if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                                if (((t = xe(n).val()), s)) return t;
                                l.push(t);
                            }
                        return l;
                    },
                    set: function (e, t) {
                        for (var n, r, o = e.options, i = xe.makeArray(t), a = o.length; a--; ) ((r = o[a]).selected = xe.inArray(xe.valHooks.option.get(r), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), i;
                    },
                },
            },
        }),
        xe.each(["radio", "checkbox"], function () {
            (xe.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = xe.inArray(xe(e).val(), t) > -1);
                },
            }),
                ve.checkOn ||
                    (xe.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (ve.focusin = "onfocusin" in e);
    var Lt = /^(?:focusinfocus|focusoutblur)$/,
        kt = function (e) {
            e.stopPropagation();
        };
    xe.extend(xe.event, {
        trigger: function (t, n, r, o) {
            var i,
                a,
                s,
                l,
                c,
                u,
                f,
                p,
                d = [r || ae],
                h = he.call(t, "type") ? t.type : t,
                m = he.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((a = p = s = r = r || ae),
                3 !== r.nodeType &&
                    8 !== r.nodeType &&
                    !Lt.test(h + xe.event.triggered) &&
                    (h.indexOf(".") > -1 && ((h = (m = h.split(".")).shift()), m.sort()),
                    (c = h.indexOf(":") < 0 && "on" + h),
                    (t = t[xe.expando] ? t : new xe.Event(h, "object" == typeof t && t)),
                    (t.isTrigger = o ? 2 : 3),
                    (t.namespace = m.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = r),
                    (n = null == n ? [t] : xe.makeArray(n, [t])),
                    (f = xe.event.special[h] || {}),
                    o || !f.trigger || !1 !== f.trigger.apply(r, n)))
            ) {
                if (!o && !f.noBubble && !be(r)) {
                    for (l = f.delegateType || h, Lt.test(l + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), (s = a);
                    s === (r.ownerDocument || ae) && d.push(s.defaultView || s.parentWindow || e);
                }
                for (i = 0; (a = d[i++]) && !t.isPropagationStopped(); )
                    (p = a),
                        (t.type = i > 1 ? l : f.bindType || h),
                        (u = (Xe.get(a, "events") || {})[t.type] && Xe.get(a, "handle")) && u.apply(a, n),
                        (u = c && a[c]) && u.apply && Ye(a) && ((t.result = u.apply(a, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = h),
                    o ||
                        t.isDefaultPrevented() ||
                        (f._default && !1 !== f._default.apply(d.pop(), n)) ||
                        !Ye(r) ||
                        (c &&
                            ye(r[h]) &&
                            !be(r) &&
                            ((s = r[c]) && (r[c] = null),
                            (xe.event.triggered = h),
                            t.isPropagationStopped() && p.addEventListener(h, kt),
                            r[h](),
                            t.isPropagationStopped() && p.removeEventListener(h, kt),
                            (xe.event.triggered = void 0),
                            s && (r[c] = s))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = xe.extend(new xe.Event(), n, { type: e, isSimulated: !0 });
            xe.event.trigger(r, null, t);
        },
    }),
        xe.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    xe.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return xe.event.trigger(e, t, n, !0);
            },
        }),
        ve.focusin ||
            xe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    xe.event.simulate(t, e.target, xe.event.fix(e));
                };
                xe.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            o = Xe.access(r, t);
                        o || r.addEventListener(e, n, !0), Xe.access(r, t, (o || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            o = Xe.access(r, t) - 1;
                        o ? Xe.access(r, t, o) : (r.removeEventListener(e, n, !0), Xe.remove(r, t));
                    },
                };
            });
    var Dt = e.location,
        At = Date.now(),
        Nt = /\?/;
    xe.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || xe.error("Invalid XML: " + t), n;
    };
    var Ht = /\[\]$/,
        jt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Wt = /^(?:input|select|textarea|keygen)/i;
    (xe.param = function (e, t) {
        var n,
            r = [],
            o = function (e, t) {
                var n = ye(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !xe.isPlainObject(e)))
            xe.each(e, function () {
                o(this.name, this.value);
            });
        else for (n in e) Z(n, e[n], t, o);
        return r.join("&");
    }),
        xe.fn.extend({
            serialize: function () {
                return xe.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = xe.prop(this, "elements");
                    return e ? xe.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !xe(this).is(":disabled") && Wt.test(this.nodeName) && !Ot.test(e) && (this.checked || !Ve.test(e));
                    })
                    .map(function (e, t) {
                        var n = xe(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? xe.map(n, function (e) {
                                  return { name: t.name, value: e.replace(jt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(jt, "\r\n") };
                    })
                    .get();
            },
        });
    var Rt = /%20/g,
        Mt = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Yt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Bt = {},
        Ft = {},
        $t = "*/".concat("*"),
        _t = ae.createElement("a");
    (_t.href = Dt.href),
        xe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Dt.href,
                type: "GET",
                isLocal: Xt.test(Dt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": xe.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? ne(ne(e, xe.ajaxSettings), t) : ne(xe.ajaxSettings, e);
            },
            ajaxPrefilter: ee(Bt),
            ajaxTransport: ee(Ft),
            ajax: function (t, n) {
                function r(t, n, r, s) {
                    var c,
                        p,
                        d,
                        w,
                        x,
                        T = n;
                    u ||
                        ((u = !0),
                        l && e.clearTimeout(l),
                        (o = void 0),
                        (a = s || ""),
                        (E.readyState = t > 0 ? 4 : 0),
                        (c = (t >= 200 && t < 300) || 304 === t),
                        r && (w = re(h, E, r)),
                        (w = oe(h, w, E, c)),
                        c
                            ? (h.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (xe.lastModified[i] = x), (x = E.getResponseHeader("etag")) && (xe.etag[i] = x)),
                              204 === t || "HEAD" === h.type ? (T = "nocontent") : 304 === t ? (T = "notmodified") : ((T = w.state), (p = w.data), (c = !(d = w.error))))
                            : ((d = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                        (E.status = t),
                        (E.statusText = (n || T) + ""),
                        c ? v.resolveWith(m, [p, T, E]) : v.rejectWith(m, [E, T, d]),
                        E.statusCode(b),
                        (b = void 0),
                        f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [E, h, c ? p : d]),
                        y.fireWith(m, [E, T]),
                        f && (g.trigger("ajaxComplete", [E, h]), --xe.active || xe.event.trigger("ajaxStop")));
                }
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var o,
                    i,
                    a,
                    s,
                    l,
                    c,
                    u,
                    f,
                    p,
                    d,
                    h = xe.ajaxSetup({}, n),
                    m = h.context || h,
                    g = h.context && (m.nodeType || m.jquery) ? xe(m) : xe.event,
                    v = xe.Deferred(),
                    y = xe.Callbacks("once memory"),
                    b = h.statusCode || {},
                    w = {},
                    x = {},
                    T = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!s) for (s = {}; (t = Yt.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return u ? a : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == u && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (w[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == u && (h.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (u) E.always(e[E.status]);
                                else for (t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || T;
                            return o && o.abort(t), r(0, t), this;
                        },
                    };
                if (
                    (v.promise(E),
                    (h.url = ((t || h.url || Dt.href) + "").replace(It, Dt.protocol + "//")),
                    (h.type = n.method || n.type || h.method || h.type),
                    (h.dataTypes = (h.dataType || "*").toLowerCase().match(je) || [""]),
                    null == h.crossDomain)
                ) {
                    c = ae.createElement("a");
                    try {
                        (c.href = h.url), (c.href = c.href), (h.crossDomain = _t.protocol + "//" + _t.host != c.protocol + "//" + c.host);
                    } catch (e) {
                        h.crossDomain = !0;
                    }
                }
                if ((h.data && h.processData && "string" != typeof h.data && (h.data = xe.param(h.data, h.traditional)), te(Bt, h, n, E), u)) return E;
                (f = xe.event && h.global) && 0 == xe.active++ && xe.event.trigger("ajaxStart"),
                    (h.type = h.type.toUpperCase()),
                    (h.hasContent = !qt.test(h.type)),
                    (i = h.url.replace(Mt, "")),
                    h.hasContent
                        ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Rt, "+"))
                        : ((d = h.url.slice(i.length)),
                          h.data && (h.processData || "string" == typeof h.data) && ((i += (Nt.test(i) ? "&" : "?") + h.data), delete h.data),
                          !1 === h.cache && ((i = i.replace(Pt, "$1")), (d = (Nt.test(i) ? "&" : "?") + "_=" + At++ + d)),
                          (h.url = i + d)),
                    h.ifModified && (xe.lastModified[i] && E.setRequestHeader("If-Modified-Since", xe.lastModified[i]), xe.etag[i] && E.setRequestHeader("If-None-Match", xe.etag[i])),
                    ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                    E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
                for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(m, E, h) || u)) return E.abort();
                if (((T = "abort"), y.add(h.complete), E.done(h.success), E.fail(h.error), (o = te(Ft, h, n, E)))) {
                    if (((E.readyState = 1), f && g.trigger("ajaxSend", [E, h]), u)) return E;
                    h.async &&
                        h.timeout > 0 &&
                        (l = e.setTimeout(function () {
                            E.abort("timeout");
                        }, h.timeout));
                    try {
                        (u = !1), o.send(w, r);
                    } catch (e) {
                        if (u) throw e;
                        r(-1, e);
                    }
                } else r(-1, "No Transport");
                return E;
            },
            getJSON: function (e, t, n) {
                return xe.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return xe.get(e, void 0, t, "script");
            },
        }),
        xe.each(["get", "post"], function (e, t) {
            xe[t] = function (e, n, r, o) {
                return ye(n) && ((o = o || r), (r = n), (n = void 0)), xe.ajax(xe.extend({ url: e, type: t, dataType: o, data: n, success: r }, xe.isPlainObject(e) && e));
            };
        }),
        (xe._evalUrl = function (e) {
            return xe.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        xe.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (ye(e) && (e = e.call(this[0])),
                        (t = xe(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return ye(e)
                    ? this.each(function (t) {
                          xe(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = xe(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = ye(e);
                return this.each(function (n) {
                    xe(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            xe(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (xe.expr.pseudos.hidden = function (e) {
            return !xe.expr.pseudos.visible(e);
        }),
        (xe.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (xe.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var zt = { 0: 200, 1223: 204 },
        Ut = xe.ajaxSettings.xhr();
    (ve.cors = !!Ut && "withCredentials" in Ut),
        (ve.ajax = Ut = !!Ut),
        xe.ajaxTransport(function (t) {
            var n, r;
            if (ve.cors || (Ut && !t.crossDomain))
                return {
                    send: function (o, i) {
                        var a,
                            s = t.xhr();
                        if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        for (a in o) s.setRequestHeader(a, o[a]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                    "abort" === e
                                        ? s.abort()
                                        : "error" === e
                                        ? "number" != typeof s.status
                                            ? i(0, "error")
                                            : i(s.status, s.statusText)
                                        : i(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                            };
                        }),
                            (s.onload = n()),
                            (r = s.onerror = s.ontimeout = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = r)
                                : (s.onreadystatechange = function () {
                                      4 === s.readyState &&
                                          e.setTimeout(function () {
                                              n && r();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            s.send((t.hasContent && t.data) || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        xe.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        xe.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return xe.globalEval(e), e;
                },
            },
        }),
        xe.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        xe.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (r, o) {
                        (t = xe("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            ae.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var Kt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    xe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Kt.pop() || xe.expando + "_" + At++;
            return (this[e] = !0), e;
        },
    }),
        xe.ajaxPrefilter("json jsonp", function (t, n, r) {
            var o,
                i,
                a,
                s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return (
                    (o = t.jsonpCallback = ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    s ? (t[s] = t[s].replace(Vt, "$1" + o)) : !1 !== t.jsonp && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                    (t.converters["script json"] = function () {
                        return a || xe.error(o + " was not called"), a[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (i = e[o]),
                    (e[o] = function () {
                        a = arguments;
                    }),
                    r.always(function () {
                        void 0 === i ? xe(e).removeProp(o) : (e[o] = i), t[o] && ((t.jsonpCallback = n.jsonpCallback), Kt.push(o)), a && ye(i) && i(a[0]), (a = i = void 0);
                    }),
                    "script"
                );
        }),
        (ve.createHTMLDocument = (function () {
            var e = ae.implementation.createHTMLDocument("").body;
            return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
        })()),
        (xe.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var r, o, i;
            return (
                t || (ve.createHTMLDocument ? (((r = (t = ae.implementation.createHTMLDocument("")).createElement("base")).href = ae.location.href), t.head.appendChild(r)) : (t = ae)),
                (o = ke.exec(e)),
                (i = !n && []),
                o ? [t.createElement(o[1])] : ((o = E([e], t, i)), i && i.length && xe(i).remove(), xe.merge([], o.childNodes))
            );
        }),
        (xe.fn.load = function (e, t, n) {
            var r,
                o,
                i,
                a = this,
                s = e.indexOf(" ");
            return (
                s > -1 && ((r = G(e.slice(s))), (e = e.slice(0, s))),
                ye(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                a.length > 0 &&
                    xe
                        .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (i = arguments), a.html(r ? xe("<div>").append(xe.parseHTML(e)).find(r) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(this, i || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        xe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            xe.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (xe.expr.pseudos.animated = function (e) {
            return xe.grep(xe.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (xe.offset = {
            setOffset: function (e, t, n) {
                var r,
                    o,
                    i,
                    a,
                    s,
                    l,
                    c = xe.css(e, "position"),
                    u = xe(e),
                    f = {};
                "static" === c && (e.style.position = "relative"),
                    (s = u.offset()),
                    (i = xe.css(e, "top")),
                    (l = xe.css(e, "left")),
                    ("absolute" === c || "fixed" === c) && (i + l).indexOf("auto") > -1 ? ((a = (r = u.position()).top), (o = r.left)) : ((a = parseFloat(i) || 0), (o = parseFloat(l) || 0)),
                    ye(t) && (t = t.call(e, n, xe.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + o),
                    "using" in t ? t.using.call(e, f) : u.css(f);
            },
        }),
        xe.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              xe.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    r = this[0];
                return r ? (r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        o = { top: 0, left: 0 };
                    if ("fixed" === xe.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === xe.css(e, "position"); ) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((o = xe(e).offset()).top += xe.css(e, "borderTopWidth", !0)), (o.left += xe.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - o.top - xe.css(r, "marginTop", !0), left: t.left - o.left - xe.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === xe.css(e, "position"); ) e = e.offsetParent;
                    return e || et;
                });
            },
        }),
        xe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            xe.fn[e] = function (r) {
                return Re(
                    this,
                    function (e, r, o) {
                        var i;
                        if ((be(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === o)) return i ? i[t] : e[r];
                        i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : (e[r] = o);
                    },
                    e,
                    r,
                    arguments.length
                );
            };
        }),
        xe.each(["top", "left"], function (e, t) {
            xe.cssHooks[t] = M(ve.pixelPosition, function (e, n) {
                if (n) return (n = R(e, t)), lt.test(n) ? xe(e).position()[t] + "px" : n;
            });
        }),
        xe.each({ Height: "height", Width: "width" }, function (e, t) {
            xe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                xe.fn[r] = function (o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return Re(
                        this,
                        function (t, n, o) {
                            var i;
                            return be(t)
                                ? 0 === r.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((i = t.documentElement), Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]))
                                : void 0 === o
                                ? xe.css(t, n, s)
                                : xe.style(t, n, o, s);
                        },
                        t,
                        a ? o : void 0,
                        a
                    );
                };
            });
        }),
        xe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            xe.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }),
        xe.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        xe.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (xe.proxy = function (e, t) {
            var n, r, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), ye(e)))
                return (
                    (r = le.call(arguments, 2)),
                    (o = function () {
                        return e.apply(t || this, r.concat(le.call(arguments)));
                    }),
                    (o.guid = e.guid = e.guid || xe.guid++),
                    o
                );
        }),
        (xe.holdReady = function (e) {
            e ? xe.readyWait++ : xe.ready(!0);
        }),
        (xe.isArray = Array.isArray),
        (xe.parseJSON = JSON.parse),
        (xe.nodeName = i),
        (xe.isFunction = ye),
        (xe.isWindow = be),
        (xe.camelCase = h),
        (xe.type = r),
        (xe.now = Date.now),
        (xe.isNumeric = function (e) {
            var t = xe.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return xe;
            });
    var Gt = e.jQuery,
        Qt = e.$;
    return (
        (xe.noConflict = function (t) {
            return e.$ === xe && (e.$ = Qt), t && e.jQuery === xe && (e.jQuery = Gt), xe;
        }),
        t || (e.jQuery = e.$ = xe),
        xe
    );
}),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Popper = t());
    })(this, function () {
        "use strict";
        function e(e) {
            return e && "[object Function]" === {}.toString.call(e);
        }
        function t(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView,
                r = n.getComputedStyle(e, null);
            return t ? r[t] : r;
        }
        function n(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function r(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body;
            }
            var o = t(e),
                i = o.overflow,
                a = o.overflowX;
            return /(auto|scroll|overlay)/.test(i + o.overflowY + a) ? e : r(n(e));
        }
        function o(e) {
            return 11 === e ? ae : 10 === e ? se : ae || se;
        }
        function i(e) {
            if (!e) return document.documentElement;
            for (var n = o(10) ? document.body : null, r = e.offsetParent || null; r === n && e.nextElementSibling; ) r = (e = e.nextElementSibling).offsetParent;
            var a = r && r.nodeName;
            return a && "BODY" !== a && "HTML" !== a ? (-1 !== ["TH", "TD", "TABLE"].indexOf(r.nodeName) && "static" === t(r, "position") ? i(r) : r) : e ? e.ownerDocument.documentElement : document.documentElement;
        }
        function a(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || i(e.firstElementChild) === e);
        }
        function s(e) {
            return null === e.parentNode ? e : s(e.parentNode);
        }
        function l(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                r = n ? e : t,
                o = n ? t : e,
                c = document.createRange();
            c.setStart(r, 0), c.setEnd(o, 0);
            var u = c.commonAncestorContainer;
            if ((e !== u && t !== u) || r.contains(o)) return a(u) ? u : i(u);
            var f = s(e);
            return f.host ? l(f.host, t) : l(e, s(t).host);
        }
        function c(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
                n = "top" === t ? "scrollTop" : "scrollLeft",
                r = e.nodeName;
            if ("BODY" === r || "HTML" === r) {
                var o = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || o)[n];
            }
            return e[n];
        }
        function u(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                r = c(t, "top"),
                o = c(t, "left"),
                i = n ? -1 : 1;
            return (e.top += r * i), (e.bottom += r * i), (e.left += o * i), (e.right += o * i), e;
        }
        function f(e, t) {
            var n = "x" === t ? "Left" : "Top",
                r = "Left" == n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10);
        }
        function p(e, t, n, r) {
            return Z(
                t["offset" + e],
                t["scroll" + e],
                n["client" + e],
                n["offset" + e],
                n["scroll" + e],
                o(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0
            );
        }
        function d(e) {
            var t = e.body,
                n = e.documentElement,
                r = o(10) && getComputedStyle(n);
            return { height: p("Height", t, n, r), width: p("Width", t, n, r) };
        }
        function h(e) {
            return fe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
        }
        function m(e) {
            var n = {};
            try {
                if (o(10)) {
                    n = e.getBoundingClientRect();
                    var r = c(e, "top"),
                        i = c(e, "left");
                    (n.top += r), (n.left += i), (n.bottom += r), (n.right += i);
                } else n = e.getBoundingClientRect();
            } catch (e) {}
            var a = { left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top },
                s = "HTML" === e.nodeName ? d(e.ownerDocument) : {},
                l = s.width || e.clientWidth || a.right - a.left,
                u = s.height || e.clientHeight || a.bottom - a.top,
                p = e.offsetWidth - l,
                m = e.offsetHeight - u;
            if (p || m) {
                var g = t(e);
                (p -= f(g, "x")), (m -= f(g, "y")), (a.width -= p), (a.height -= m);
            }
            return h(a);
        }
        function g(e, n) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                a = o(10),
                s = "HTML" === n.nodeName,
                l = m(e),
                c = m(n),
                f = r(e),
                p = t(n),
                d = parseFloat(p.borderTopWidth, 10),
                g = parseFloat(p.borderLeftWidth, 10);
            i && s && ((c.top = Z(c.top, 0)), (c.left = Z(c.left, 0)));
            var v = h({ top: l.top - c.top - d, left: l.left - c.left - g, width: l.width, height: l.height });
            if (((v.marginTop = 0), (v.marginLeft = 0), !a && s)) {
                var y = parseFloat(p.marginTop, 10),
                    b = parseFloat(p.marginLeft, 10);
                (v.top -= d - y), (v.bottom -= d - y), (v.left -= g - b), (v.right -= g - b), (v.marginTop = y), (v.marginLeft = b);
            }
            return (a && !i ? n.contains(f) : n === f && "BODY" !== f.nodeName) && (v = u(v, n)), v;
        }
        function v(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                r = g(e, n),
                o = Z(n.clientWidth, window.innerWidth || 0),
                i = Z(n.clientHeight, window.innerHeight || 0),
                a = t ? 0 : c(n),
                s = t ? 0 : c(n, "left");
            return h({ top: a - r.top + r.marginTop, left: s - r.left + r.marginLeft, width: o, height: i });
        }
        function y(e) {
            var r = e.nodeName;
            return "BODY" !== r && "HTML" !== r && ("fixed" === t(e, "position") || y(n(e)));
        }
        function b(e) {
            if (!e || !e.parentElement || o()) return document.documentElement;
            for (var n = e.parentElement; n && "none" === t(n, "transform"); ) n = n.parentElement;
            return n || document.documentElement;
        }
        function w(e, t, o, i) {
            var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                s = { top: 0, left: 0 },
                c = a ? b(e) : l(e, t);
            if ("viewport" === i) s = v(c, a);
            else {
                var u;
                "scrollParent" === i ? ((u = r(n(t))), "BODY" === u.nodeName && (u = e.ownerDocument.documentElement)) : (u = "window" === i ? e.ownerDocument.documentElement : i);
                var f = g(u, c, a);
                if ("HTML" !== u.nodeName || y(c)) s = f;
                else {
                    var p = d(e.ownerDocument),
                        h = p.height,
                        m = p.width;
                    (s.top += f.top - f.marginTop), (s.bottom = h + f.top), (s.left += f.left - f.marginLeft), (s.right = m + f.left);
                }
            }
            o = o || 0;
            var w = "number" == typeof o;
            return (s.left += w ? o : o.left || 0), (s.top += w ? o : o.top || 0), (s.right -= w ? o : o.right || 0), (s.bottom -= w ? o : o.bottom || 0), s;
        }
        function x(e) {
            return e.width * e.height;
        }
        function T(e, t, n, r, o) {
            var i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var a = w(n, r, i, o),
                s = { top: { width: a.width, height: t.top - a.top }, right: { width: a.right - t.right, height: a.height }, bottom: { width: a.width, height: a.bottom - t.bottom }, left: { width: t.left - a.left, height: a.height } },
                l = Object.keys(s)
                    .map(function (e) {
                        return fe({ key: e }, s[e], { area: x(s[e]) });
                    })
                    .sort(function (e, t) {
                        return t.area - e.area;
                    }),
                c = l.filter(function (e) {
                    var t = e.width,
                        r = e.height;
                    return t >= n.clientWidth && r >= n.clientHeight;
                }),
                u = 0 < c.length ? c[0].key : l[0].key,
                f = e.split("-")[1];
            return u + (f ? "-" + f : "");
        }
        function E(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return g(n, r ? b(t) : l(t, n), r);
        }
        function S(e) {
            var t = e.ownerDocument.defaultView,
                n = t.getComputedStyle(e),
                r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
                o = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0);
            return { width: e.offsetWidth + o, height: e.offsetHeight + r };
        }
        function C(e) {
            var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e];
            });
        }
        function L(e, t, n) {
            n = n.split("-")[0];
            var r = S(e),
                o = { width: r.width, height: r.height },
                i = -1 !== ["right", "left"].indexOf(n),
                a = i ? "top" : "left",
                s = i ? "left" : "top",
                l = i ? "height" : "width",
                c = i ? "width" : "height";
            return (o[a] = t[a] + t[l] / 2 - r[l] / 2), (o[s] = n === s ? t[s] - r[c] : t[C(s)]), o;
        }
        function k(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function D(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function (e) {
                    return e[t] === n;
                });
            var r = k(e, function (e) {
                return e[t] === n;
            });
            return e.indexOf(r);
        }
        function A(t, n, r) {
            return (
                (void 0 === r ? t : t.slice(0, D(t, "name", r))).forEach(function (t) {
                    t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var r = t.function || t.fn;
                    t.enabled && e(r) && ((n.offsets.popper = h(n.offsets.popper)), (n.offsets.reference = h(n.offsets.reference)), (n = r(n, t)));
                }),
                n
            );
        }
        function N() {
            if (!this.state.isDestroyed) {
                var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                (e.offsets.reference = E(this.state, this.popper, this.reference, this.options.positionFixed)),
                    (e.placement = T(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                    (e.originalPlacement = e.placement),
                    (e.positionFixed = this.options.positionFixed),
                    (e.offsets.popper = L(this.popper, e.offsets.reference, e.placement)),
                    (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                    (e = A(this.modifiers, e)),
                    this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
            }
        }
        function H(e, t) {
            return e.some(function (e) {
                var n = e.name;
                return e.enabled && n === t;
            });
        }
        function j(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                var o = t[r],
                    i = o ? "" + o + n : e;
                if (void 0 !== document.body.style[i]) return i;
            }
            return null;
        }
        function O() {
            return (
                (this.state.isDestroyed = !0),
                H(this.modifiers, "applyStyle") &&
                    (this.popper.removeAttribute("x-placement"),
                    (this.popper.style.position = ""),
                    (this.popper.style.top = ""),
                    (this.popper.style.left = ""),
                    (this.popper.style.right = ""),
                    (this.popper.style.bottom = ""),
                    (this.popper.style.willChange = ""),
                    (this.popper.style[j("transform")] = "")),
                this.disableEventListeners(),
                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                this
            );
        }
        function W(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window;
        }
        function R(e, t, n, o) {
            var i = "BODY" === e.nodeName,
                a = i ? e.ownerDocument.defaultView : e;
            a.addEventListener(t, n, { passive: !0 }), i || R(r(a.parentNode), t, n, o), o.push(a);
        }
        function M(e, t, n, o) {
            (n.updateBound = o), W(e).addEventListener("resize", n.updateBound, { passive: !0 });
            var i = r(e);
            return R(i, "scroll", n.updateBound, n.scrollParents), (n.scrollElement = i), (n.eventsEnabled = !0), n;
        }
        function P() {
            this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate));
        }
        function Y(e, t) {
            return (
                W(e).removeEventListener("resize", t.updateBound),
                t.scrollParents.forEach(function (e) {
                    e.removeEventListener("scroll", t.updateBound);
                }),
                (t.updateBound = null),
                (t.scrollParents = []),
                (t.scrollElement = null),
                (t.eventsEnabled = !1),
                t
            );
        }
        function X() {
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), (this.state = Y(this.reference, this.state)));
        }
        function q(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function I(e, t) {
            Object.keys(t).forEach(function (n) {
                var r = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(t[n]) && (r = "px"), (e.style[n] = t[n] + r);
            });
        }
        function B(e, t) {
            Object.keys(t).forEach(function (n) {
                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
            });
        }
        function F(e, t) {
            var n = e.offsets,
                r = n.popper,
                o = n.reference,
                i = -1 !== ["left", "right"].indexOf(e.placement),
                a = -1 !== e.placement.indexOf("-"),
                s = o.width % 2 == r.width % 2,
                l = 1 == o.width % 2 && 1 == r.width % 2,
                c = function (e) {
                    return e;
                },
                u = t ? (i || a || s ? J : Q) : c,
                f = t ? J : c;
            return { left: u(l && !a && t ? r.left - 1 : r.left), top: f(r.top), bottom: f(r.bottom), right: u(r.right) };
        }
        function $(e, t, n) {
            var r = k(e, function (e) {
                    return e.name === t;
                }),
                o =
                    !!r &&
                    e.some(function (e) {
                        return e.name === n && e.enabled && e.order < r.order;
                    });
            if (!o) {
                var i = "`" + t + "`";
                console.warn("`" + n + "` modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!");
            }
            return o;
        }
        function _(e) {
            return "end" === e ? "start" : "start" === e ? "end" : e;
        }
        function z(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = he.indexOf(e),
                r = he.slice(n + 1).concat(he.slice(0, n));
            return t ? r.reverse() : r;
        }
        function U(e, t, n, r) {
            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                i = +o[1],
                a = o[2];
            if (!i) return e;
            if (0 === a.indexOf("%")) {
                var s;
                switch (a) {
                    case "%p":
                        s = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        s = r;
                }
                return (h(s)[t] / 100) * i;
            }
            if ("vh" === a || "vw" === a) {
                return (("vh" === a ? Z(document.documentElement.clientHeight, window.innerHeight || 0) : Z(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * i;
            }
            return i;
        }
        function K(e, t, n, r) {
            var o = [0, 0],
                i = -1 !== ["right", "left"].indexOf(r),
                a = e.split(/(\+|\-)/).map(function (e) {
                    return e.trim();
                }),
                s = a.indexOf(
                    k(a, function (e) {
                        return -1 !== e.search(/,|\s/);
                    })
                );
            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
            return (
                (c = c.map(function (e, r) {
                    var o = (1 === r ? !i : i) ? "height" : "width",
                        a = !1;
                    return e
                        .reduce(function (e, t) {
                            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (a = !0), e) : a ? ((e[e.length - 1] += t), (a = !1), e) : e.concat(t);
                        }, [])
                        .map(function (e) {
                            return U(e, o, t, n);
                        });
                })),
                c.forEach(function (e, t) {
                    e.forEach(function (n, r) {
                        q(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1));
                    });
                }),
                o
            );
        }
        function V(e, t) {
            var n,
                r = t.offset,
                o = e.placement,
                i = e.offsets,
                a = i.popper,
                s = i.reference,
                l = o.split("-")[0];
            return (
                (n = q(+r) ? [+r, 0] : K(r, a, s, l)),
                "left" === l ? ((a.top += n[0]), (a.left -= n[1])) : "right" === l ? ((a.top += n[0]), (a.left += n[1])) : "top" === l ? ((a.left += n[0]), (a.top -= n[1])) : "bottom" === l && ((a.left += n[0]), (a.top += n[1])),
                (e.popper = a),
                e
            );
        }
        for (var G = Math.min, Q = Math.floor, J = Math.round, Z = Math.max, ee = "undefined" != typeof window && "undefined" != typeof document, te = ["Edge", "Trident", "Firefox"], ne = 0, re = 0; re < te.length; re += 1)
            if (ee && 0 <= navigator.userAgent.indexOf(te[re])) {
                ne = 1;
                break;
            }
        var oe = ee && window.Promise,
            ie = oe
                ? function (e) {
                      var t = !1;
                      return function () {
                          t ||
                              ((t = !0),
                              window.Promise.resolve().then(function () {
                                  (t = !1), e();
                              }));
                      };
                  }
                : function (e) {
                      var t = !1;
                      return function () {
                          t ||
                              ((t = !0),
                              setTimeout(function () {
                                  (t = !1), e();
                              }, ne));
                      };
                  },
            ae = ee && !(!window.MSInputMethodContext || !document.documentMode),
            se = ee && /MSIE 10/.test(navigator.userAgent),
            le = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            },
            ce = (function () {
                function e(e, t) {
                    for (var n, r = 0; r < t.length; r++) (n = t[r]), (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            })(),
            ue = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            },
            fe =
                Object.assign ||
                function (e) {
                    for (var t, n = 1; n < arguments.length; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e;
                },
            pe = ee && /Firefox/i.test(navigator.userAgent),
            de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            he = de.slice(3),
            me = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
            ge = (function () {
                function t(n, r) {
                    var o = this,
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    le(this, t),
                        (this.scheduleUpdate = function () {
                            return requestAnimationFrame(o.update);
                        }),
                        (this.update = ie(this.update.bind(this))),
                        (this.options = fe({}, t.Defaults, i)),
                        (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                        (this.reference = n && n.jquery ? n[0] : n),
                        (this.popper = r && r.jquery ? r[0] : r),
                        (this.options.modifiers = {}),
                        Object.keys(fe({}, t.Defaults.modifiers, i.modifiers)).forEach(function (e) {
                            o.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {});
                        }),
                        (this.modifiers = Object.keys(this.options.modifiers)
                            .map(function (e) {
                                return fe({ name: e }, o.options.modifiers[e]);
                            })
                            .sort(function (e, t) {
                                return e.order - t.order;
                            })),
                        this.modifiers.forEach(function (t) {
                            t.enabled && e(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state);
                        }),
                        this.update();
                    var a = this.options.eventsEnabled;
                    a && this.enableEventListeners(), (this.state.eventsEnabled = a);
                }
                return (
                    ce(t, [
                        {
                            key: "update",
                            value: function () {
                                return N.call(this);
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                return O.call(this);
                            },
                        },
                        {
                            key: "enableEventListeners",
                            value: function () {
                                return P.call(this);
                            },
                        },
                        {
                            key: "disableEventListeners",
                            value: function () {
                                return X.call(this);
                            },
                        },
                    ]),
                    t
                );
            })();
        return (
            (ge.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
            (ge.placements = de),
            (ge.Defaults = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                r = t.split("-")[1];
                            if (r) {
                                var o = e.offsets,
                                    i = o.reference,
                                    a = o.popper,
                                    s = -1 !== ["bottom", "top"].indexOf(n),
                                    l = s ? "left" : "top",
                                    c = s ? "width" : "height",
                                    u = { start: ue({}, l, i[l]), end: ue({}, l, i[l] + i[c] - a[c]) };
                                e.offsets.popper = fe({}, a, u[r]);
                            }
                            return e;
                        },
                    },
                    offset: { order: 200, enabled: !0, fn: V, offset: 0 },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (e, t) {
                            var n = t.boundariesElement || i(e.instance.popper);
                            e.instance.reference === n && (n = i(n));
                            var r = j("transform"),
                                o = e.instance.popper.style,
                                a = o.top,
                                s = o.left,
                                l = o[r];
                            (o.top = ""), (o.left = ""), (o[r] = "");
                            var c = w(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                            (o.top = a), (o.left = s), (o[r] = l), (t.boundaries = c);
                            var u = t.priority,
                                f = e.offsets.popper,
                                p = {
                                    primary: function (e) {
                                        var n = f[e];
                                        return f[e] < c[e] && !t.escapeWithReference && (n = Z(f[e], c[e])), ue({}, e, n);
                                    },
                                    secondary: function (e) {
                                        var n = "right" === e ? "left" : "top",
                                            r = f[n];
                                        return f[e] > c[e] && !t.escapeWithReference && (r = G(f[n], c[e] - ("right" === e ? f.width : f.height))), ue({}, n, r);
                                    },
                                };
                            return (
                                u.forEach(function (e) {
                                    var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                                    f = fe({}, f, p[t](e));
                                }),
                                (e.offsets.popper = f),
                                e
                            );
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent",
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.offsets,
                                n = t.popper,
                                r = t.reference,
                                o = e.placement.split("-")[0],
                                i = Q,
                                a = -1 !== ["top", "bottom"].indexOf(o),
                                s = a ? "right" : "bottom",
                                l = a ? "left" : "top",
                                c = a ? "width" : "height";
                            return n[s] < i(r[l]) && (e.offsets.popper[l] = i(r[l]) - n[c]), n[l] > i(r[s]) && (e.offsets.popper[l] = i(r[s])), e;
                        },
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (e, n) {
                            var r;
                            if (!$(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var o = n.element;
                            if ("string" == typeof o) {
                                if (!(o = e.instance.popper.querySelector(o))) return e;
                            } else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var i = e.placement.split("-")[0],
                                a = e.offsets,
                                s = a.popper,
                                l = a.reference,
                                c = -1 !== ["left", "right"].indexOf(i),
                                u = c ? "height" : "width",
                                f = c ? "Top" : "Left",
                                p = f.toLowerCase(),
                                d = c ? "left" : "top",
                                m = c ? "bottom" : "right",
                                g = S(o)[u];
                            l[m] - g < s[p] && (e.offsets.popper[p] -= s[p] - (l[m] - g)), l[p] + g > s[m] && (e.offsets.popper[p] += l[p] + g - s[m]), (e.offsets.popper = h(e.offsets.popper));
                            var v = l[p] + l[u] / 2 - g / 2,
                                y = t(e.instance.popper),
                                b = parseFloat(y["margin" + f], 10),
                                w = parseFloat(y["border" + f + "Width"], 10),
                                x = v - e.offsets.popper[p] - b - w;
                            return (x = Z(G(s[u] - g, x), 0)), (e.arrowElement = o), (e.offsets.arrow = ((r = {}), ue(r, p, J(x)), ue(r, d, ""), r)), e;
                        },
                        element: "[x-arrow]",
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (e, t) {
                            if (H(e.instance.modifiers, "inner")) return e;
                            if (e.flipped && e.placement === e.originalPlacement) return e;
                            var n = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                r = e.placement.split("-")[0],
                                o = C(r),
                                i = e.placement.split("-")[1] || "",
                                a = [];
                            switch (t.behavior) {
                                case me.FLIP:
                                    a = [r, o];
                                    break;
                                case me.CLOCKWISE:
                                    a = z(r);
                                    break;
                                case me.COUNTERCLOCKWISE:
                                    a = z(r, !0);
                                    break;
                                default:
                                    a = t.behavior;
                            }
                            return (
                                a.forEach(function (s, l) {
                                    if (r !== s || a.length === l + 1) return e;
                                    (r = e.placement.split("-")[0]), (o = C(r));
                                    var c = e.offsets.popper,
                                        u = e.offsets.reference,
                                        f = Q,
                                        p = ("left" === r && f(c.right) > f(u.left)) || ("right" === r && f(c.left) < f(u.right)) || ("top" === r && f(c.bottom) > f(u.top)) || ("bottom" === r && f(c.top) < f(u.bottom)),
                                        d = f(c.left) < f(n.left),
                                        h = f(c.right) > f(n.right),
                                        m = f(c.top) < f(n.top),
                                        g = f(c.bottom) > f(n.bottom),
                                        v = ("left" === r && d) || ("right" === r && h) || ("top" === r && m) || ("bottom" === r && g),
                                        y = -1 !== ["top", "bottom"].indexOf(r),
                                        b = !!t.flipVariations && ((y && "start" === i && d) || (y && "end" === i && h) || (!y && "start" === i && m) || (!y && "end" === i && g));
                                    (p || v || b) &&
                                        ((e.flipped = !0),
                                        (p || v) && (r = a[l + 1]),
                                        b && (i = _(i)),
                                        (e.placement = r + (i ? "-" + i : "")),
                                        (e.offsets.popper = fe({}, e.offsets.popper, L(e.instance.popper, e.offsets.reference, e.placement))),
                                        (e = A(e.instance.modifiers, e, "flip")));
                                }),
                                e
                            );
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                r = e.offsets,
                                o = r.popper,
                                i = r.reference,
                                a = -1 !== ["left", "right"].indexOf(n),
                                s = -1 === ["top", "left"].indexOf(n);
                            return (o[a ? "left" : "top"] = i[n] - (s ? o[a ? "width" : "height"] : 0)), (e.placement = C(t)), (e.offsets.popper = h(o)), e;
                        },
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (e) {
                            if (!$(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference,
                                n = k(e.instance.modifiers, function (e) {
                                    return "preventOverflow" === e.name;
                                }).boundaries;
                            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                if (!0 === e.hide) return e;
                                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                            } else {
                                if (!1 === e.hide) return e;
                                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                            }
                            return e;
                        },
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (e, t) {
                            var n = t.x,
                                r = t.y,
                                o = e.offsets.popper,
                                a = k(e.instance.modifiers, function (e) {
                                    return "applyStyle" === e.name;
                                }).gpuAcceleration;
                            void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var s,
                                l,
                                c = void 0 === a ? t.gpuAcceleration : a,
                                u = i(e.instance.popper),
                                f = m(u),
                                p = { position: o.position },
                                d = F(e, 2 > window.devicePixelRatio || !pe),
                                h = "bottom" === n ? "top" : "bottom",
                                g = "right" === r ? "left" : "right",
                                v = j("transform");
                            if (
                                ((l = "bottom" == h ? ("HTML" === u.nodeName ? -u.clientHeight + d.bottom : -f.height + d.bottom) : d.top),
                                (s = "right" == g ? ("HTML" === u.nodeName ? -u.clientWidth + d.right : -f.width + d.right) : d.left),
                                c && v)
                            )
                                (p[v] = "translate3d(" + s + "px, " + l + "px, 0)"), (p[h] = 0), (p[g] = 0), (p.willChange = "transform");
                            else {
                                var y = "bottom" == h ? -1 : 1,
                                    b = "right" == g ? -1 : 1;
                                (p[h] = l * y), (p[g] = s * b), (p.willChange = h + ", " + g);
                            }
                            var w = { "x-placement": e.placement };
                            return (e.attributes = fe({}, w, e.attributes)), (e.styles = fe({}, p, e.styles)), (e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles)), e;
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right",
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (e) {
                            return I(e.instance.popper, e.styles), B(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && I(e.arrowElement, e.arrowStyles), e;
                        },
                        onLoad: function (e, t, n, r, o) {
                            var i = E(o, t, e, n.positionFixed),
                                a = T(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return t.setAttribute("x-placement", a), I(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
                        },
                        gpuAcceleration: void 0,
                    },
                },
            }),
            ge
        );
    }),
    (function () {
        function e() {
            if (!N && document.body) {
                N = !0;
                var e = document.body,
                    t = document.documentElement,
                    n = window.innerHeight,
                    o = e.scrollHeight;
                if (((H = document.compatMode.indexOf("CSS") >= 0 ? t : e), (b = e), L.keyboardSupport && f("keydown", r), top != self)) D = !0;
                else if (o > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
                    var i,
                        a = document.createElement("div");
                    if (
                        ((a.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + H.scrollHeight + "px"),
                        document.body.appendChild(a),
                        (x = function () {
                            i ||
                                (i = setTimeout(function () {
                                    k || ((a.style.height = "0"), (a.style.height = H.scrollHeight + "px"), (i = null));
                                }, 500));
                        }),
                        setTimeout(x, 10),
                        f("resize", x),
                        (w = new F(x)).observe(e, { attributes: !0, childList: !0, characterData: !1 }),
                        H.offsetHeight <= n)
                    ) {
                        var s = document.createElement("div");
                        (s.style.clear = "both"), e.appendChild(s);
                    }
                }
                L.fixedBackground || k || ((e.style.backgroundAttachment = "scroll"), (t.style.backgroundAttachment = "scroll"));
            }
        }
        function t(e, t, n) {
            var r, o;
            if (((o = n), (r = (r = t) > 0 ? 1 : -1), (o = o > 0 ? 1 : -1), (A.x !== r || A.y !== o) && ((A.x = r), (A.y = o), (R = []), (P = 0)), 1 != L.accelerationMax)) {
                var i = Date.now() - P;
                if (i < L.accelerationDelta) {
                    var a = (1 + 50 / i) / 2;
                    a > 1 && ((a = Math.min(a, L.accelerationMax)), (t *= a), (n *= a));
                }
                P = Date.now();
            }
            if ((R.push({ x: t, y: n, lastX: t < 0 ? 0.99 : -0.99, lastY: n < 0 ? 0.99 : -0.99, start: Date.now() }), !M)) {
                var s = e === document.body,
                    l = function (r) {
                        for (var o = Date.now(), i = 0, a = 0, c = 0; c < R.length; c++) {
                            var u = R[c],
                                f = o - u.start,
                                p = f >= L.animationTime,
                                d = p ? 1 : f / L.animationTime;
                            L.pulseAlgorithm && (d = v(d));
                            var h = (u.x * d - u.lastX) >> 0,
                                m = (u.y * d - u.lastY) >> 0;
                            (i += h), (a += m), (u.lastX += h), (u.lastY += m), p && (R.splice(c, 1), c--);
                        }
                        s ? window.scrollBy(i, a) : (i && (e.scrollLeft += i), a && (e.scrollTop += a)), t || n || (R = []), R.length ? B(l, e, 1e3 / L.frameRate + 1) : (M = !1);
                    };
                B(l, e, 0), (M = !0);
            }
        }
        function n(n) {
            N || e();
            var r = n.target,
                o = s(r);
            if (!o || n.defaultPrevented || n.ctrlKey) return !0;
            if (d(b, "embed") || (d(r, "embed") && /\.pdf/i.test(r.src)) || d(b, "object")) return !0;
            var a = -n.wheelDeltaX || n.deltaX || 0,
                l = -n.wheelDeltaY || n.deltaY || 0;
            if (
                (O && (n.wheelDeltaX && h(n.wheelDeltaX, 120) && (a = (n.wheelDeltaX / Math.abs(n.wheelDeltaX)) * -120), n.wheelDeltaY && h(n.wheelDeltaY, 120) && (l = (n.wheelDeltaY / Math.abs(n.wheelDeltaY)) * -120)),
                a || l || (l = -n.wheelDelta || 0),
                1 === n.deltaMode && ((a *= 40), (l *= 40)),
                !L.touchpadSupport &&
                    (function (e) {
                        if (e)
                            return (
                                j.length || (j = [e, e, e]),
                                (e = Math.abs(e)),
                                j.push(e),
                                j.shift(),
                                clearTimeout(S),
                                (S = setTimeout(function () {
                                    window.localStorage && (localStorage.SS_deltaBuffer = j.join(","));
                                }, 1e3)),
                                !m(120) && !m(100)
                            );
                    })(l))
            )
                return !0;
            Math.abs(a) > 1.2 && (a *= L.stepSize / 120), Math.abs(l) > 1.2 && (l *= L.stepSize / 120), t(o, a, l), n.preventDefault(), i();
        }
        function r(e) {
            var n = e.target,
                r = e.ctrlKey || e.altKey || e.metaKey || (e.shiftKey && e.keyCode !== W.spacebar);
            document.contains(b) || (b = document.activeElement);
            var o = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (
                /^(textarea|select|embed|object)$/i.test(n.nodeName) ||
                (d(n, "input") && !o.test(n.type)) ||
                d(b, "video") ||
                (function (e) {
                    var t = e.target,
                        n = !1;
                    if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                        do {
                            if ((n = t.classList && t.classList.contains("html5-video-controls"))) break;
                        } while ((t = t.parentNode));
                    return n;
                })(e) ||
                n.isContentEditable ||
                e.defaultPrevented ||
                r
            )
                return !0;
            if ((d(n, "button") || (d(n, "input") && o.test(n.type))) && e.keyCode === W.spacebar) return !0;
            var a = 0,
                l = 0,
                c = s(b),
                u = c.clientHeight;
            switch ((c == document.body && (u = window.innerHeight), e.keyCode)) {
                case W.up:
                    l = -L.arrowScroll;
                    break;
                case W.down:
                    l = L.arrowScroll;
                    break;
                case W.spacebar:
                    l = -(e.shiftKey ? 1 : -1) * u * 0.9;
                    break;
                case W.pageup:
                    l = 0.9 * -u;
                    break;
                case W.pagedown:
                    l = 0.9 * u;
                    break;
                case W.home:
                    l = -c.scrollTop;
                    break;
                case W.end:
                    var f = c.scrollHeight - c.scrollTop - u;
                    l = f > 0 ? f + 10 : 0;
                    break;
                case W.left:
                    a = -L.arrowScroll;
                    break;
                case W.right:
                    a = L.arrowScroll;
                    break;
                default:
                    return !0;
            }
            t(c, a, l), e.preventDefault(), i();
        }
        function o(e) {
            b = e.target;
        }
        function i() {
            clearTimeout(E),
                (E = setInterval(function () {
                    X = {};
                }, 1e3));
        }
        function a(e, t) {
            for (var n = e.length; n--; ) X[Y(e[n])] = t;
            return t;
        }
        function s(e) {
            var t = [],
                n = document.body,
                r = H.scrollHeight;
            do {
                var o = X[Y(e)];
                if (o) return a(t, o);
                if ((t.push(e), r === e.scrollHeight)) {
                    var i = (c(H) && c(n)) || u(H);
                    if ((D && l(H)) || (!D && i)) return a(t, $());
                } else if (l(e) && u(e)) return a(t, e);
            } while ((e = e.parentElement));
        }
        function l(e) {
            return e.clientHeight + 10 < e.scrollHeight;
        }
        function c(e) {
            return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
        }
        function u(e) {
            var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
            return "scroll" === t || "auto" === t;
        }
        function f(e, t) {
            window.addEventListener(e, t, !1);
        }
        function p(e, t) {
            window.removeEventListener(e, t, !1);
        }
        function d(e, t) {
            return (e.nodeName || "").toLowerCase() === t.toLowerCase();
        }
        function h(e, t) {
            return Math.floor(e / t) == e / t;
        }
        function m(e) {
            return h(j[0], e) && h(j[1], e) && h(j[2], e);
        }
        function g(e) {
            var t, n;
            return (e *= L.pulseScale) < 1 ? (t = e - (1 - Math.exp(-e))) : ((e -= 1), (t = (n = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - n))), t * L.pulseNormalize;
        }
        function v(e) {
            return e >= 1 ? 1 : e <= 0 ? 0 : (1 == L.pulseNormalize && (L.pulseNormalize /= g(1)), g(e));
        }
        function y(e) {
            for (var t in e) C.hasOwnProperty(t) && (L[t] = e[t]);
        }
        var b,
            w,
            x,
            T,
            E,
            S,
            C = {
                frameRate: 150,
                animationTime: 600,
                stepSize: 50,
                pulseAlgorithm: !0,
                pulseScale: 4,
                pulseNormalize: 1,
                accelerationDelta: 50,
                accelerationMax: 3,
                keyboardSupport: !0,
                arrowScroll: 50,
                touchpadSupport: !1,
                fixedBackground: !0,
                excluded: "",
            },
            L = C,
            k = !1,
            D = !1,
            A = { x: 0, y: 0 },
            N = !1,
            H = document.documentElement,
            j = [],
            O = /^Mac/.test(navigator.platform),
            W = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 },
            R = [],
            M = !1,
            P = Date.now(),
            Y =
                ((T = 0),
                function (e) {
                    return e.uniqueID || (e.uniqueID = T++);
                }),
            X = {};
        window.localStorage && localStorage.SS_deltaBuffer && (j = localStorage.SS_deltaBuffer.split(","));
        var q,
            I,
            B =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (e, t, n) {
                    window.setTimeout(e, n || 1e3 / 60);
                },
            F = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            $ = function () {
                if (!q) {
                    var e = document.createElement("div");
                    (e.style.cssText = "height:10000px;width:1px;"), document.body.appendChild(e);
                    var t = document.body.scrollTop;
                    document.documentElement.scrollTop, window.scrollBy(0, 3), (q = document.body.scrollTop != t ? document.body : document.documentElement), window.scrollBy(0, -3), document.body.removeChild(e);
                }
                return q;
            },
            _ = window.navigator.userAgent,
            z = /Edge/.test(_),
            U = /chrome/i.test(_) && !z,
            K = /safari/i.test(_) && !z,
            V = /mobile/i.test(_),
            G = (U || K) && !V;
        "onwheel" in document.createElement("div") ? (I = "wheel") : "onmousewheel" in document.createElement("div") && (I = "mousewheel"),
            I && G && (f(I, n), f("mousedown", o), f("load", e)),
            (y.destroy = function () {
                w && w.disconnect(), p(I, n), p("mousedown", o), p("keydown", r), p("resize", x), p("load", e);
            }),
            window.SmoothScrollOptions && y(window.SmoothScrollOptions),
            "function" == typeof define && define.amd
                ? define(function () {
                      return y;
                  })
                : "object" == typeof exports
                ? (module.exports = y)
                : (window.SmoothScroll = y);
    })(),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.PerfectScrollbar = t());
    })(this, function () {
        "use strict";
        function e(e) {
            return getComputedStyle(e);
        }
        function t(e, t) {
            for (var n in t) {
                var r = t[n];
                "number" == typeof r && (r += "px"), (e.style[n] = r);
            }
            return e;
        }
        function n(e) {
            var t = document.createElement("div");
            return (t.className = e), t;
        }
        function r(e, t) {
            if (!v) throw new Error("No element matching method supported");
            return v.call(e, t);
        }
        function o(e) {
            e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
        }
        function i(e, t) {
            return Array.prototype.filter.call(e.children, function (e) {
                return r(e, t);
            });
        }
        function a(e, t) {
            var n = e.element.classList,
                r = y.state.scrolling(t);
            n.contains(r) ? clearTimeout(b[t]) : n.add(r);
        }
        function s(e, t) {
            b[t] = setTimeout(function () {
                return e.isAlive && e.element.classList.remove(y.state.scrolling(t));
            }, e.settings.scrollingThreshold);
        }
        function l(e, t) {
            a(e, t), s(e, t);
        }
        function c(e) {
            if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
            var t = document.createEvent("CustomEvent");
            return t.initCustomEvent(e, !1, !1, void 0), t;
        }
        function u(e, t, n, r, o) {
            var i = n[0],
                a = n[1],
                s = n[2],
                u = n[3],
                f = n[4],
                p = n[5];
            void 0 === r && (r = !0), void 0 === o && (o = !1);
            var d = e.element;
            (e.reach[u] = null),
                d[s] < 1 && (e.reach[u] = "start"),
                d[s] > e[i] - e[a] - 1 && (e.reach[u] = "end"),
                t && (d.dispatchEvent(c("ps-scroll-" + u)), t < 0 ? d.dispatchEvent(c("ps-scroll-" + f)) : t > 0 && d.dispatchEvent(c("ps-scroll-" + p)), r && l(e, u)),
                e.reach[u] && (t || o) && d.dispatchEvent(c("ps-" + u + "-reach-" + e.reach[u]));
        }
        function f(e) {
            return parseInt(e, 10) || 0;
        }
        function p(e) {
            return r(e, "input,[contenteditable]") || r(e, "select,[contenteditable]") || r(e, "textarea,[contenteditable]") || r(e, "button,[contenteditable]");
        }
        function d(t) {
            var n = e(t);
            return f(n.width) + f(n.paddingLeft) + f(n.paddingRight) + f(n.borderLeftWidth) + f(n.borderRightWidth);
        }
        function h(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t;
        }
        function m(e, n) {
            var r = { width: n.railXWidth },
                o = Math.floor(e.scrollTop);
            n.isRtl ? (r.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth) : (r.left = e.scrollLeft),
                n.isScrollbarXUsingBottom ? (r.bottom = n.scrollbarXBottom - o) : (r.top = n.scrollbarXTop + o),
                t(n.scrollbarXRail, r);
            var i = { top: o, height: n.railYHeight };
            n.isScrollbarYUsingRight
                ? n.isRtl
                    ? (i.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth)
                    : (i.right = n.scrollbarYRight - e.scrollLeft)
                : n.isRtl
                ? (i.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth)
                : (i.left = n.scrollbarYLeft + e.scrollLeft),
                t(n.scrollbarYRail, i),
                t(n.scrollbarX, { left: n.scrollbarXLeft, width: n.scrollbarXWidth - n.railBorderXWidth }),
                t(n.scrollbarY, { top: n.scrollbarYTop, height: n.scrollbarYHeight - n.railBorderYWidth });
        }
        function g(e, t) {
            function n(t) {
                (m[p] = g + b * (t[l] - v)), a(e, d), C(e), t.stopPropagation(), t.preventDefault();
            }
            function r() {
                s(e, d), e[h].classList.remove(y.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", n);
            }
            var o = t[0],
                i = t[1],
                l = t[2],
                c = t[3],
                u = t[4],
                f = t[5],
                p = t[6],
                d = t[7],
                h = t[8],
                m = e.element,
                g = null,
                v = null,
                b = null;
            e.event.bind(e[u], "mousedown", function (t) {
                (g = m[p]),
                    (v = t[l]),
                    (b = (e[i] - e[o]) / (e[c] - e[f])),
                    e.event.bind(e.ownerDocument, "mousemove", n),
                    e.event.once(e.ownerDocument, "mouseup", r),
                    e[h].classList.add(y.state.clicking),
                    t.stopPropagation(),
                    t.preventDefault();
            });
        }
        var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
            y = {
                main: "ps",
                element: {
                    thumb: function (e) {
                        return "ps__thumb-" + e;
                    },
                    rail: function (e) {
                        return "ps__rail-" + e;
                    },
                    consuming: "ps__child--consume",
                },
                state: {
                    focus: "ps--focus",
                    clicking: "ps--clicking",
                    active: function (e) {
                        return "ps--active-" + e;
                    },
                    scrolling: function (e) {
                        return "ps--scrolling-" + e;
                    },
                },
            },
            b = { x: null, y: null },
            w = function (e) {
                (this.element = e), (this.handlers = {});
            },
            x = { isEmpty: { configurable: !0 } };
        (w.prototype.bind = function (e, t) {
            void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
        }),
            (w.prototype.unbind = function (e, t) {
                var n = this;
                this.handlers[e] = this.handlers[e].filter(function (r) {
                    return !(!t || r === t) || (n.element.removeEventListener(e, r, !1), !1);
                });
            }),
            (w.prototype.unbindAll = function () {
                var e = this;
                for (var t in e.handlers) e.unbind(t);
            }),
            (x.isEmpty.get = function () {
                var e = this;
                return Object.keys(this.handlers).every(function (t) {
                    return 0 === e.handlers[t].length;
                });
            }),
            Object.defineProperties(w.prototype, x);
        var T = function () {
            this.eventElements = [];
        };
        (T.prototype.eventElement = function (e) {
            var t = this.eventElements.filter(function (t) {
                return t.element === e;
            })[0];
            return t || ((t = new w(e)), this.eventElements.push(t)), t;
        }),
            (T.prototype.bind = function (e, t, n) {
                this.eventElement(e).bind(t, n);
            }),
            (T.prototype.unbind = function (e, t, n) {
                var r = this.eventElement(e);
                r.unbind(t, n), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
            }),
            (T.prototype.unbindAll = function () {
                this.eventElements.forEach(function (e) {
                    return e.unbindAll();
                }),
                    (this.eventElements = []);
            }),
            (T.prototype.once = function (e, t, n) {
                var r = this.eventElement(e),
                    o = function (e) {
                        r.unbind(t, o), n(e);
                    };
                r.bind(t, o);
            });
        var E = function (e, t, n, r, o) {
                void 0 === r && (r = !0), void 0 === o && (o = !1);
                var i;
                if ("top" === t) i = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
                else {
                    if ("left" !== t) throw new Error("A proper axis should be provided");
                    i = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
                }
                u(e, n, i, r, o);
            },
            S = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
                supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
                isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
            },
            C = function (e) {
                var t = e.element,
                    n = Math.floor(t.scrollTop);
                (e.containerWidth = t.clientWidth),
                    (e.containerHeight = t.clientHeight),
                    (e.contentWidth = t.scrollWidth),
                    (e.contentHeight = t.scrollHeight),
                    t.contains(e.scrollbarXRail) ||
                        (i(t, y.element.rail("x")).forEach(function (e) {
                            return o(e);
                        }),
                        t.appendChild(e.scrollbarXRail)),
                    t.contains(e.scrollbarYRail) ||
                        (i(t, y.element.rail("y")).forEach(function (e) {
                            return o(e);
                        }),
                        t.appendChild(e.scrollbarYRail)),
                    !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                        ? ((e.scrollbarXActive = !0),
                          (e.railXWidth = e.containerWidth - e.railXMarginWidth),
                          (e.railXRatio = e.containerWidth / e.railXWidth),
                          (e.scrollbarXWidth = h(e, f((e.railXWidth * e.containerWidth) / e.contentWidth))),
                          (e.scrollbarXLeft = f(((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth)) / (e.contentWidth - e.containerWidth))))
                        : (e.scrollbarXActive = !1),
                    !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                        ? ((e.scrollbarYActive = !0),
                          (e.railYHeight = e.containerHeight - e.railYMarginHeight),
                          (e.railYRatio = e.containerHeight / e.railYHeight),
                          (e.scrollbarYHeight = h(e, f((e.railYHeight * e.containerHeight) / e.contentHeight))),
                          (e.scrollbarYTop = f((n * (e.railYHeight - e.scrollbarYHeight)) / (e.contentHeight - e.containerHeight))))
                        : (e.scrollbarYActive = !1),
                    e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                    e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                    m(t, e),
                    e.scrollbarXActive ? t.classList.add(y.state.active("x")) : (t.classList.remove(y.state.active("x")), (e.scrollbarXWidth = 0), (e.scrollbarXLeft = 0), (t.scrollLeft = 0)),
                    e.scrollbarYActive ? t.classList.add(y.state.active("y")) : (t.classList.remove(y.state.active("y")), (e.scrollbarYHeight = 0), (e.scrollbarYTop = 0), (t.scrollTop = 0));
            },
            L = {
                "click-rail": function (e) {
                    e.event.bind(e.scrollbarY, "mousedown", function (e) {
                        return e.stopPropagation();
                    }),
                        e.event.bind(e.scrollbarYRail, "mousedown", function (t) {
                            var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                            (e.element.scrollTop += n * e.containerHeight), C(e), t.stopPropagation();
                        }),
                        e.event.bind(e.scrollbarX, "mousedown", function (e) {
                            return e.stopPropagation();
                        }),
                        e.event.bind(e.scrollbarXRail, "mousedown", function (t) {
                            var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                            (e.element.scrollLeft += n * e.containerWidth), C(e), t.stopPropagation();
                        });
                },
                "drag-thumb": function (e) {
                    g(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]),
                        g(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
                },
                keyboard: function (e) {
                    function t(t, r) {
                        var o = Math.floor(n.scrollTop);
                        if (0 === t) {
                            if (!e.scrollbarYActive) return !1;
                            if ((0 === o && r > 0) || (o >= e.contentHeight - e.containerHeight && r < 0)) return !e.settings.wheelPropagation;
                        }
                        var i = n.scrollLeft;
                        if (0 === r) {
                            if (!e.scrollbarXActive) return !1;
                            if ((0 === i && t < 0) || (i >= e.contentWidth - e.containerWidth && t > 0)) return !e.settings.wheelPropagation;
                        }
                        return !0;
                    }
                    var n = e.element,
                        o = function () {
                            return r(n, ":hover");
                        },
                        i = function () {
                            return r(e.scrollbarX, ":focus") || r(e.scrollbarY, ":focus");
                        };
                    e.event.bind(e.ownerDocument, "keydown", function (r) {
                        if (!((r.isDefaultPrevented && r.isDefaultPrevented()) || r.defaultPrevented) && (o() || i())) {
                            var a = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                            if (a) {
                                if ("IFRAME" === a.tagName) a = a.contentDocument.activeElement;
                                else for (; a.shadowRoot; ) a = a.shadowRoot.activeElement;
                                if (p(a)) return;
                            }
                            var s = 0,
                                l = 0;
                            switch (r.which) {
                                case 37:
                                    s = r.metaKey ? -e.contentWidth : r.altKey ? -e.containerWidth : -30;
                                    break;
                                case 38:
                                    l = r.metaKey ? e.contentHeight : r.altKey ? e.containerHeight : 30;
                                    break;
                                case 39:
                                    s = r.metaKey ? e.contentWidth : r.altKey ? e.containerWidth : 30;
                                    break;
                                case 40:
                                    l = r.metaKey ? -e.contentHeight : r.altKey ? -e.containerHeight : -30;
                                    break;
                                case 32:
                                    l = r.shiftKey ? e.containerHeight : -e.containerHeight;
                                    break;
                                case 33:
                                    l = e.containerHeight;
                                    break;
                                case 34:
                                    l = -e.containerHeight;
                                    break;
                                case 36:
                                    l = e.contentHeight;
                                    break;
                                case 35:
                                    l = -e.contentHeight;
                                    break;
                                default:
                                    return;
                            }
                            (e.settings.suppressScrollX && 0 !== s) || (e.settings.suppressScrollY && 0 !== l) || ((n.scrollTop -= l), (n.scrollLeft += s), C(e), t(s, l) && r.preventDefault());
                        }
                    });
                },
                wheel: function (t) {
                    function n(e, n) {
                        var r = Math.floor(a.scrollTop),
                            o = 0 === a.scrollTop,
                            i = r + a.offsetHeight === a.scrollHeight,
                            s = 0 === a.scrollLeft,
                            l = a.scrollLeft + a.offsetWidth === a.scrollWidth;
                        return !(Math.abs(n) > Math.abs(e) ? o || i : s || l) || !t.settings.wheelPropagation;
                    }
                    function r(e) {
                        var t = e.deltaX,
                            n = -1 * e.deltaY;
                        return (
                            (void 0 !== t && void 0 !== n) || ((t = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
                            e.deltaMode && 1 === e.deltaMode && ((t *= 10), (n *= 10)),
                            t !== t && n !== n && ((t = 0), (n = e.wheelDelta)),
                            e.shiftKey ? [-n, -t] : [t, n]
                        );
                    }
                    function o(t, n, r) {
                        if (!S.isWebKit && a.querySelector("select:focus")) return !0;
                        if (!a.contains(t)) return !1;
                        for (var o = t; o && o !== a; ) {
                            if (o.classList.contains(y.element.consuming)) return !0;
                            var i = e(o);
                            if ([i.overflow, i.overflowX, i.overflowY].join("").match(/(scroll|auto)/)) {
                                var s = o.scrollHeight - o.clientHeight;
                                if (s > 0 && !((0 === o.scrollTop && r > 0) || (o.scrollTop === s && r < 0))) return !0;
                                var l = o.scrollWidth - o.clientWidth;
                                if (l > 0 && !((0 === o.scrollLeft && n < 0) || (o.scrollLeft === l && n > 0))) return !0;
                            }
                            o = o.parentNode;
                        }
                        return !1;
                    }
                    function i(e) {
                        var i = r(e),
                            s = i[0],
                            l = i[1];
                        if (!o(e.target, s, l)) {
                            var c = !1;
                            t.settings.useBothWheelAxes
                                ? t.scrollbarYActive && !t.scrollbarXActive
                                    ? (l ? (a.scrollTop -= l * t.settings.wheelSpeed) : (a.scrollTop += s * t.settings.wheelSpeed), (c = !0))
                                    : t.scrollbarXActive && !t.scrollbarYActive && (s ? (a.scrollLeft += s * t.settings.wheelSpeed) : (a.scrollLeft -= l * t.settings.wheelSpeed), (c = !0))
                                : ((a.scrollTop -= l * t.settings.wheelSpeed), (a.scrollLeft += s * t.settings.wheelSpeed)),
                                C(t),
                                (c = c || n(s, l)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault());
                        }
                    }
                    var a = t.element;
                    void 0 !== window.onwheel ? t.event.bind(a, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(a, "mousewheel", i);
                },
                touch: function (t) {
                    function n(e, n) {
                        var r = Math.floor(u.scrollTop),
                            o = u.scrollLeft,
                            i = Math.abs(e),
                            a = Math.abs(n);
                        if (a > i) {
                            if ((n < 0 && r === t.contentHeight - t.containerHeight) || (n > 0 && 0 === r)) return 0 === window.scrollY && n > 0 && S.isChrome;
                        } else if (i > a && ((e < 0 && o === t.contentWidth - t.containerWidth) || (e > 0 && 0 === o))) return !0;
                        return !0;
                    }
                    function r(e, n) {
                        (u.scrollTop -= n), (u.scrollLeft -= e), C(t);
                    }
                    function o(e) {
                        return e.targetTouches ? e.targetTouches[0] : e;
                    }
                    function i(e) {
                        return !(
                            (e.pointerType && "pen" === e.pointerType && 0 === e.buttons) ||
                            ((!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                        );
                    }
                    function a(e) {
                        if (i(e)) {
                            var t = o(e);
                            (f.pageX = t.pageX), (f.pageY = t.pageY), (p = new Date().getTime()), null !== h && clearInterval(h);
                        }
                    }
                    function s(t, n, r) {
                        if (!u.contains(t)) return !1;
                        for (var o = t; o && o !== u; ) {
                            if (o.classList.contains(y.element.consuming)) return !0;
                            var i = e(o);
                            if ([i.overflow, i.overflowX, i.overflowY].join("").match(/(scroll|auto)/)) {
                                var a = o.scrollHeight - o.clientHeight;
                                if (a > 0 && !((0 === o.scrollTop && r > 0) || (o.scrollTop === a && r < 0))) return !0;
                                var s = o.scrollLeft - o.clientWidth;
                                if (s > 0 && !((0 === o.scrollLeft && n < 0) || (o.scrollLeft === s && n > 0))) return !0;
                            }
                            o = o.parentNode;
                        }
                        return !1;
                    }
                    function l(e) {
                        if (i(e)) {
                            var t = o(e),
                                a = { pageX: t.pageX, pageY: t.pageY },
                                l = a.pageX - f.pageX,
                                c = a.pageY - f.pageY;
                            if (s(e.target, l, c)) return;
                            r(l, c), (f = a);
                            var u = new Date().getTime(),
                                h = u - p;
                            h > 0 && ((d.x = l / h), (d.y = c / h), (p = u)), n(l, c) && e.preventDefault();
                        }
                    }
                    function c() {
                        t.settings.swipeEasing &&
                            (clearInterval(h),
                            (h = setInterval(function () {
                                t.isInitialized ? clearInterval(h) : d.x || d.y ? (Math.abs(d.x) < 0.01 && Math.abs(d.y) < 0.01 ? clearInterval(h) : (r(30 * d.x, 30 * d.y), (d.x *= 0.8), (d.y *= 0.8))) : clearInterval(h);
                            }, 10)));
                    }
                    if (S.supportsTouch || S.supportsIePointer) {
                        var u = t.element,
                            f = {},
                            p = 0,
                            d = {},
                            h = null;
                        S.supportsTouch
                            ? (t.event.bind(u, "touchstart", a), t.event.bind(u, "touchmove", l), t.event.bind(u, "touchend", c))
                            : S.supportsIePointer &&
                              (window.PointerEvent
                                  ? (t.event.bind(u, "pointerdown", a), t.event.bind(u, "pointermove", l), t.event.bind(u, "pointerup", c))
                                  : window.MSPointerEvent && (t.event.bind(u, "MSPointerDown", a), t.event.bind(u, "MSPointerMove", l), t.event.bind(u, "MSPointerUp", c)));
                    }
                },
            },
            k = function (r, o) {
                var i = this;
                if ((void 0 === o && (o = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName)) throw new Error("no element is specified to initialize PerfectScrollbar");
                (this.element = r),
                    r.classList.add(y.main),
                    (this.settings = {
                        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                        maxScrollbarLength: null,
                        minScrollbarLength: null,
                        scrollingThreshold: 1e3,
                        scrollXMarginOffset: 0,
                        scrollYMarginOffset: 0,
                        suppressScrollX: !1,
                        suppressScrollY: !1,
                        swipeEasing: !0,
                        useBothWheelAxes: !1,
                        wheelPropagation: !0,
                        wheelSpeed: 1,
                    });
                for (var a in o) i.settings[a] = o[a];
                (this.containerWidth = null), (this.containerHeight = null), (this.contentWidth = null), (this.contentHeight = null);
                var s = function () {
                        return r.classList.add(y.state.focus);
                    },
                    l = function () {
                        return r.classList.remove(y.state.focus);
                    };
                (this.isRtl = "rtl" === e(r).direction),
                    (this.isNegativeScroll = (function () {
                        var e = r.scrollLeft,
                            t = null;
                        return (r.scrollLeft = -1), (t = r.scrollLeft < 0), (r.scrollLeft = e), t;
                    })()),
                    (this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0),
                    (this.event = new T()),
                    (this.ownerDocument = r.ownerDocument || document),
                    (this.scrollbarXRail = n(y.element.rail("x"))),
                    r.appendChild(this.scrollbarXRail),
                    (this.scrollbarX = n(y.element.thumb("x"))),
                    this.scrollbarXRail.appendChild(this.scrollbarX),
                    this.scrollbarX.setAttribute("tabindex", 0),
                    this.event.bind(this.scrollbarX, "focus", s),
                    this.event.bind(this.scrollbarX, "blur", l),
                    (this.scrollbarXActive = null),
                    (this.scrollbarXWidth = null),
                    (this.scrollbarXLeft = null);
                var c = e(this.scrollbarXRail);
                (this.scrollbarXBottom = parseInt(c.bottom, 10)),
                    isNaN(this.scrollbarXBottom) ? ((this.isScrollbarXUsingBottom = !1), (this.scrollbarXTop = f(c.top))) : (this.isScrollbarXUsingBottom = !0),
                    (this.railBorderXWidth = f(c.borderLeftWidth) + f(c.borderRightWidth)),
                    t(this.scrollbarXRail, { display: "block" }),
                    (this.railXMarginWidth = f(c.marginLeft) + f(c.marginRight)),
                    t(this.scrollbarXRail, { display: "" }),
                    (this.railXWidth = null),
                    (this.railXRatio = null),
                    (this.scrollbarYRail = n(y.element.rail("y"))),
                    r.appendChild(this.scrollbarYRail),
                    (this.scrollbarY = n(y.element.thumb("y"))),
                    this.scrollbarYRail.appendChild(this.scrollbarY),
                    this.scrollbarY.setAttribute("tabindex", 0),
                    this.event.bind(this.scrollbarY, "focus", s),
                    this.event.bind(this.scrollbarY, "blur", l),
                    (this.scrollbarYActive = null),
                    (this.scrollbarYHeight = null),
                    (this.scrollbarYTop = null);
                var u = e(this.scrollbarYRail);
                (this.scrollbarYRight = parseInt(u.right, 10)),
                    isNaN(this.scrollbarYRight) ? ((this.isScrollbarYUsingRight = !1), (this.scrollbarYLeft = f(u.left))) : (this.isScrollbarYUsingRight = !0),
                    (this.scrollbarYOuterWidth = this.isRtl ? d(this.scrollbarY) : null),
                    (this.railBorderYWidth = f(u.borderTopWidth) + f(u.borderBottomWidth)),
                    t(this.scrollbarYRail, { display: "block" }),
                    (this.railYMarginHeight = f(u.marginTop) + f(u.marginBottom)),
                    t(this.scrollbarYRail, { display: "" }),
                    (this.railYHeight = null),
                    (this.railYRatio = null),
                    (this.reach = {
                        x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                        y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null,
                    }),
                    (this.isAlive = !0),
                    this.settings.handlers.forEach(function (e) {
                        return L[e](i);
                    }),
                    (this.lastScrollTop = Math.floor(r.scrollTop)),
                    (this.lastScrollLeft = r.scrollLeft),
                    this.event.bind(this.element, "scroll", function (e) {
                        return i.onScroll(e);
                    }),
                    C(this);
            };
        return (
            (k.prototype.update = function () {
                this.isAlive &&
                    ((this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0),
                    t(this.scrollbarXRail, { display: "block" }),
                    t(this.scrollbarYRail, { display: "block" }),
                    (this.railXMarginWidth = f(e(this.scrollbarXRail).marginLeft) + f(e(this.scrollbarXRail).marginRight)),
                    (this.railYMarginHeight = f(e(this.scrollbarYRail).marginTop) + f(e(this.scrollbarYRail).marginBottom)),
                    t(this.scrollbarXRail, { display: "none" }),
                    t(this.scrollbarYRail, { display: "none" }),
                    C(this),
                    E(this, "top", 0, !1, !0),
                    E(this, "left", 0, !1, !0),
                    t(this.scrollbarXRail, { display: "" }),
                    t(this.scrollbarYRail, { display: "" }));
            }),
            (k.prototype.onScroll = function (e) {
                this.isAlive &&
                    (C(this),
                    E(this, "top", this.element.scrollTop - this.lastScrollTop),
                    E(this, "left", this.element.scrollLeft - this.lastScrollLeft),
                    (this.lastScrollTop = Math.floor(this.element.scrollTop)),
                    (this.lastScrollLeft = this.element.scrollLeft));
            }),
            (k.prototype.destroy = function () {
                this.isAlive &&
                    (this.event.unbindAll(),
                    o(this.scrollbarX),
                    o(this.scrollbarY),
                    o(this.scrollbarXRail),
                    o(this.scrollbarYRail),
                    this.removePsClasses(),
                    (this.element = null),
                    (this.scrollbarX = null),
                    (this.scrollbarY = null),
                    (this.scrollbarXRail = null),
                    (this.scrollbarYRail = null),
                    (this.isAlive = !1));
            }),
            (k.prototype.removePsClasses = function () {
                this.element.className = this.element.className
                    .split(" ")
                    .filter(function (e) {
                        return !e.match(/^ps([-_].+|)$/);
                    })
                    .join(" ");
            }),
            k
        );
    });
