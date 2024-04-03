/*! For license information please see 3Dmol.ui-min.js.LICENSE.txt */ !function(e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports["3Dmol.ui"] = n() : e["3Dmol.ui"] = n();
}(this, ()=>(()=>{
        var e = {
            9755: function(e, n) {
                var t;
                !function(n, t) {
                    "use strict";
                    "object" == typeof e.exports ? e.exports = n.document ? t(n, !0) : function(e) {
                        if (!e.document) throw new Error("jQuery requires a window with a document");
                        return t(e);
                    } : t(n);
                }("undefined" != typeof window ? window : this, function(i, o) {
                    "use strict";
                    var r = [], a = Object.getPrototypeOf, s = r.slice, l = r.flat ? function(e) {
                        return r.flat.call(e);
                    } : function(e) {
                        return r.concat.apply([], e);
                    }, c = r.push, u = r.indexOf, d = {}, p = d.toString, g = d.hasOwnProperty, f = g.toString, h = f.call(Object), v = {}, m = function(e) {
                        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
                    }, y = function(e) {
                        return null != e && e === e.window;
                    }, x = i.document, w = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };
                    function b(e, n, t) {
                        var i, o, r = (t = t || x).createElement("script");
                        if (r.text = e, n) for(i in w)(o = n[i] || n.getAttribute && n.getAttribute(i)) && r.setAttribute(i, o);
                        t.head.appendChild(r).parentNode.removeChild(r);
                    }
                    function k(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e;
                    }
                    var C = "3.7.1", S = /HTML$/i, T = function(e, n) {
                        return new T.fn.init(e, n);
                    };
                    function D(e) {
                        var n = !!e && "length" in e && e.length, t = k(e);
                        return !m(e) && !y(e) && ("array" === t || 0 === n || "number" == typeof n && n > 0 && n - 1 in e);
                    }
                    function L(e, n) {
                        return e.nodeName && e.nodeName.toLowerCase() === n.toLowerCase();
                    }
                    T.fn = T.prototype = {
                        jquery: C,
                        constructor: T,
                        length: 0,
                        toArray: function() {
                            return s.call(this);
                        },
                        get: function(e) {
                            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
                        },
                        pushStack: function(e) {
                            var n = T.merge(this.constructor(), e);
                            return n.prevObject = this, n;
                        },
                        each: function(e) {
                            return T.each(this, e);
                        },
                        map: function(e) {
                            return this.pushStack(T.map(this, function(n, t) {
                                return e.call(n, t, n);
                            }));
                        },
                        slice: function() {
                            return this.pushStack(s.apply(this, arguments));
                        },
                        first: function() {
                            return this.eq(0);
                        },
                        last: function() {
                            return this.eq(-1);
                        },
                        even: function() {
                            return this.pushStack(T.grep(this, function(e, n) {
                                return (n + 1) % 2;
                            }));
                        },
                        odd: function() {
                            return this.pushStack(T.grep(this, function(e, n) {
                                return n % 2;
                            }));
                        },
                        eq: function(e) {
                            var n = this.length, t = +e + (e < 0 ? n : 0);
                            return this.pushStack(t >= 0 && t < n ? [
                                this[t]
                            ] : []);
                        },
                        end: function() {
                            return this.prevObject || this.constructor();
                        },
                        push: c,
                        sort: r.sort,
                        splice: r.splice
                    }, T.extend = T.fn.extend = function() {
                        var e, n, t, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
                        for("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === l && (a = this, s--); s < l; s++)if (null != (e = arguments[s])) for(n in e)i = e[n], "__proto__" !== n && a !== i && (c && i && (T.isPlainObject(i) || (o = Array.isArray(i))) ? (t = a[n], r = o && !Array.isArray(t) ? [] : o || T.isPlainObject(t) ? t : {}, o = !1, a[n] = T.extend(c, r, i)) : void 0 !== i && (a[n] = i));
                        return a;
                    }, T.extend({
                        expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(e) {
                            throw new Error(e);
                        },
                        noop: function() {},
                        isPlainObject: function(e) {
                            var n, t;
                            return !(!e || "[object Object]" !== p.call(e)) && (!(n = a(e)) || "function" == typeof (t = g.call(n, "constructor") && n.constructor) && f.call(t) === h);
                        },
                        isEmptyObject: function(e) {
                            var n;
                            for(n in e)return !1;
                            return !0;
                        },
                        globalEval: function(e, n, t) {
                            b(e, {
                                nonce: n && n.nonce
                            }, t);
                        },
                        each: function(e, n) {
                            var t, i = 0;
                            if (D(e)) for(t = e.length; i < t && !1 !== n.call(e[i], i, e[i]); i++);
                            else for(i in e)if (!1 === n.call(e[i], i, e[i])) break;
                            return e;
                        },
                        text: function(e) {
                            var n, t = "", i = 0, o = e.nodeType;
                            if (!o) for(; n = e[i++];)t += T.text(n);
                            return 1 === o || 11 === o ? e.textContent : 9 === o ? e.documentElement.textContent : 3 === o || 4 === o ? e.nodeValue : t;
                        },
                        makeArray: function(e, n) {
                            var t = n || [];
                            return null != e && (D(Object(e)) ? T.merge(t, "string" == typeof e ? [
                                e
                            ] : e) : c.call(t, e)), t;
                        },
                        inArray: function(e, n, t) {
                            return null == n ? -1 : u.call(n, e, t);
                        },
                        isXMLDoc: function(e) {
                            var n = e && e.namespaceURI, t = e && (e.ownerDocument || e).documentElement;
                            return !S.test(n || t && t.nodeName || "HTML");
                        },
                        merge: function(e, n) {
                            for(var t = +n.length, i = 0, o = e.length; i < t; i++)e[o++] = n[i];
                            return e.length = o, e;
                        },
                        grep: function(e, n, t) {
                            for(var i = [], o = 0, r = e.length, a = !t; o < r; o++)!n(e[o], o) !== a && i.push(e[o]);
                            return i;
                        },
                        map: function(e, n, t) {
                            var i, o, r = 0, a = [];
                            if (D(e)) for(i = e.length; r < i; r++)null != (o = n(e[r], r, t)) && a.push(o);
                            else for(r in e)null != (o = n(e[r], r, t)) && a.push(o);
                            return l(a);
                        },
                        guid: 1,
                        support: v
                    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = r[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, n) {
                        d["[object " + n + "]"] = n.toLowerCase();
                    });
                    var A = r.pop, E = r.sort, M = r.splice, j = "[\\x20\\t\\r\\n\\f]", I = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g");
                    T.contains = function(e, n) {
                        var t = n && n.parentNode;
                        return e === t || !(!t || 1 !== t.nodeType || !(e.contains ? e.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
                    };
                    var z = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                    function N(e, n) {
                        return n ? "\x00" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
                    }
                    T.escapeSelector = function(e) {
                        return (e + "").replace(z, N);
                    };
                    var O = x, V = c;
                    !function() {
                        var e, n, t, o, a, l, c, d, p, f, h = V, m = T.expando, y = 0, x = 0, w = ee(), b = ee(), k = ee(), C = ee(), S = function(e, n) {
                            return e === n && (a = !0), 0;
                        }, D = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", z = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+", N = "\\[" + j + "*(" + z + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + j + "*\\]", H = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", B = new RegExp(j + "+", "g"), $ = new RegExp("^" + j + "*," + j + "*"), P = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"), q = new RegExp(j + "|>"), R = new RegExp(H), _ = new RegExp("^" + z + "$"), F = {
                            ID: new RegExp("^#(" + z + ")"),
                            CLASS: new RegExp("^\\.(" + z + ")"),
                            TAG: new RegExp("^(" + z + "|[*])"),
                            ATTR: new RegExp("^" + N),
                            PSEUDO: new RegExp("^" + H),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + D + ")$", "i"),
                            needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
                        }, G = /^(?:input|select|textarea|button)$/i, W = /^h\d$/i, U = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, X = /[+~]/, Y = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"), Z = function(e, n) {
                            var t = "0x" + e.slice(1) - 65536;
                            return n || (t < 0 ? String.fromCharCode(t + 65536) : String.fromCharCode(t >> 10 | 55296, 1023 & t | 56320));
                        }, Q = function() {
                            le();
                        }, J = pe(function(e) {
                            return !0 === e.disabled && L(e, "fieldset");
                        }, {
                            dir: "parentNode",
                            next: "legend"
                        });
                        try {
                            h.apply(r = s.call(O.childNodes), O.childNodes), r[O.childNodes.length].nodeType;
                        } catch (e) {
                            h = {
                                apply: function(e, n) {
                                    V.apply(e, s.call(n));
                                },
                                call: function(e) {
                                    V.apply(e, s.call(arguments, 1));
                                }
                            };
                        }
                        function K(e, n, t, i) {
                            var o, r, a, s, c, u, g, f = n && n.ownerDocument, y = n ? n.nodeType : 9;
                            if (t = t || [], "string" != typeof e || !e || 1 !== y && 9 !== y && 11 !== y) return t;
                            if (!i && (le(n), n = n || l, d)) {
                                if (11 !== y && (c = U.exec(e))) {
                                    if (o = c[1]) {
                                        if (9 === y) {
                                            if (!(a = n.getElementById(o))) return t;
                                            if (a.id === o) return h.call(t, a), t;
                                        } else if (f && (a = f.getElementById(o)) && K.contains(n, a) && a.id === o) return h.call(t, a), t;
                                    } else {
                                        if (c[2]) return h.apply(t, n.getElementsByTagName(e)), t;
                                        if ((o = c[3]) && n.getElementsByClassName) return h.apply(t, n.getElementsByClassName(o)), t;
                                    }
                                }
                                if (!(C[e + " "] || p && p.test(e))) {
                                    if (g = e, f = n, 1 === y && (q.test(e) || P.test(e))) {
                                        for((f = X.test(e) && se(n.parentNode) || n) == n && v.scope || ((s = n.getAttribute("id")) ? s = T.escapeSelector(s) : n.setAttribute("id", s = m)), r = (u = ue(e)).length; r--;)u[r] = (s ? "#" + s : ":scope") + " " + de(u[r]);
                                        g = u.join(",");
                                    }
                                    try {
                                        return h.apply(t, f.querySelectorAll(g)), t;
                                    } catch (n) {
                                        C(e, !0);
                                    } finally{
                                        s === m && n.removeAttribute("id");
                                    }
                                }
                            }
                            return ye(e.replace(I, "$1"), n, t, i);
                        }
                        function ee() {
                            var e = [];
                            return function t(i, o) {
                                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = o;
                            };
                        }
                        function ne(e) {
                            return e[m] = !0, e;
                        }
                        function te(e) {
                            var n = l.createElement("fieldset");
                            try {
                                return !!e(n);
                            } catch (e) {
                                return !1;
                            } finally{
                                n.parentNode && n.parentNode.removeChild(n), n = null;
                            }
                        }
                        function ie(e) {
                            return function(n) {
                                return L(n, "input") && n.type === e;
                            };
                        }
                        function oe(e) {
                            return function(n) {
                                return (L(n, "input") || L(n, "button")) && n.type === e;
                            };
                        }
                        function re(e) {
                            return function(n) {
                                return "form" in n ? n.parentNode && !1 === n.disabled ? "label" in n ? "label" in n.parentNode ? n.parentNode.disabled === e : n.disabled === e : n.isDisabled === e || n.isDisabled !== !e && J(n) === e : n.disabled === e : "label" in n && n.disabled === e;
                            };
                        }
                        function ae(e) {
                            return ne(function(n) {
                                return n = +n, ne(function(t, i) {
                                    for(var o, r = e([], t.length, n), a = r.length; a--;)t[o = r[a]] && (t[o] = !(i[o] = t[o]));
                                });
                            });
                        }
                        function se(e) {
                            return e && void 0 !== e.getElementsByTagName && e;
                        }
                        function le(e) {
                            var t, i = e ? e.ownerDocument || e : O;
                            return i != l && 9 === i.nodeType && i.documentElement ? (c = (l = i).documentElement, d = !T.isXMLDoc(l), f = c.matches || c.webkitMatchesSelector || c.msMatchesSelector, c.msMatchesSelector && O != l && (t = l.defaultView) && t.top !== t && t.addEventListener("unload", Q), v.getById = te(function(e) {
                                return c.appendChild(e).id = T.expando, !l.getElementsByName || !l.getElementsByName(T.expando).length;
                            }), v.disconnectedMatch = te(function(e) {
                                return f.call(e, "*");
                            }), v.scope = te(function() {
                                return l.querySelectorAll(":scope");
                            }), v.cssHas = te(function() {
                                try {
                                    return l.querySelector(":has(*,:jqfake)"), !1;
                                } catch (e) {
                                    return !0;
                                }
                            }), v.getById ? (n.filter.ID = function(e) {
                                var n = e.replace(Y, Z);
                                return function(e) {
                                    return e.getAttribute("id") === n;
                                };
                            }, n.find.ID = function(e, n) {
                                if (void 0 !== n.getElementById && d) {
                                    var t = n.getElementById(e);
                                    return t ? [
                                        t
                                    ] : [];
                                }
                            }) : (n.filter.ID = function(e) {
                                var n = e.replace(Y, Z);
                                return function(e) {
                                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return t && t.value === n;
                                };
                            }, n.find.ID = function(e, n) {
                                if (void 0 !== n.getElementById && d) {
                                    var t, i, o, r = n.getElementById(e);
                                    if (r) {
                                        if ((t = r.getAttributeNode("id")) && t.value === e) return [
                                            r
                                        ];
                                        for(o = n.getElementsByName(e), i = 0; r = o[i++];)if ((t = r.getAttributeNode("id")) && t.value === e) return [
                                            r
                                        ];
                                    }
                                    return [];
                                }
                            }), n.find.TAG = function(e, n) {
                                return void 0 !== n.getElementsByTagName ? n.getElementsByTagName(e) : n.querySelectorAll(e);
                            }, n.find.CLASS = function(e, n) {
                                if (void 0 !== n.getElementsByClassName && d) return n.getElementsByClassName(e);
                            }, p = [], te(function(e) {
                                var n;
                                c.appendChild(e).innerHTML = "<a id='" + m + "' href='' disabled='disabled'></a><select id='" + m + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || p.push("\\[" + j + "*(?:value|" + D + ")"), e.querySelectorAll("[id~=" + m + "-]").length || p.push("~="), e.querySelectorAll("a#" + m + "+*").length || p.push(".#.+[+~]"), e.querySelectorAll(":checked").length || p.push(":checked"), (n = l.createElement("input")).setAttribute("type", "hidden"), e.appendChild(n).setAttribute("name", "D"), c.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), (n = l.createElement("input")).setAttribute("name", ""), e.appendChild(n), e.querySelectorAll("[name='']").length || p.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")");
                            }), v.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), S = function(e, n) {
                                if (e === n) return a = !0, 0;
                                var t = !e.compareDocumentPosition - !n.compareDocumentPosition;
                                return t || (1 & (t = (e.ownerDocument || e) == (n.ownerDocument || n) ? e.compareDocumentPosition(n) : 1) || !v.sortDetached && n.compareDocumentPosition(e) === t ? e === l || e.ownerDocument == O && K.contains(O, e) ? -1 : n === l || n.ownerDocument == O && K.contains(O, n) ? 1 : o ? u.call(o, e) - u.call(o, n) : 0 : 4 & t ? -1 : 1);
                            }, l) : l;
                        }
                        for(e in K.matches = function(e, n) {
                            return K(e, null, null, n);
                        }, K.matchesSelector = function(e, n) {
                            if (le(e), d && !C[n + " "] && (!p || !p.test(n))) try {
                                var t = f.call(e, n);
                                if (t || v.disconnectedMatch || e.document && 11 !== e.document.nodeType) return t;
                            } catch (e) {
                                C(n, !0);
                            }
                            return K(n, l, null, [
                                e
                            ]).length > 0;
                        }, K.contains = function(e, n) {
                            return (e.ownerDocument || e) != l && le(e), T.contains(e, n);
                        }, K.attr = function(e, t) {
                            (e.ownerDocument || e) != l && le(e);
                            var i = n.attrHandle[t.toLowerCase()], o = i && g.call(n.attrHandle, t.toLowerCase()) ? i(e, t, !d) : void 0;
                            return void 0 !== o ? o : e.getAttribute(t);
                        }, K.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e);
                        }, T.uniqueSort = function(e) {
                            var n, t = [], i = 0, r = 0;
                            if (a = !v.sortStable, o = !v.sortStable && s.call(e, 0), E.call(e, S), a) {
                                for(; n = e[r++];)n === e[r] && (i = t.push(r));
                                for(; i--;)M.call(e, t[i], 1);
                            }
                            return o = null, e;
                        }, T.fn.uniqueSort = function() {
                            return this.pushStack(T.uniqueSort(s.apply(this)));
                        }, n = T.expr = {
                            cacheLength: 50,
                            createPseudo: ne,
                            match: F,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(Y, Z), e[3] = (e[3] || e[4] || e[5] || "").replace(Y, Z), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || K.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && K.error(e[0]), e;
                                },
                                PSEUDO: function(e) {
                                    var n, t = !e[6] && e[2];
                                    return F.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : t && R.test(t) && (n = ue(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (e[0] = e[0].slice(0, n), e[2] = t.slice(0, n)), e.slice(0, 3));
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var n = e.replace(Y, Z).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0;
                                    } : function(e) {
                                        return L(e, n);
                                    };
                                },
                                CLASS: function(e) {
                                    var n = w[e + " "];
                                    return n || (n = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)"), w(e, function(e) {
                                        return n.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                                    }));
                                },
                                ATTR: function(e, n, t) {
                                    return function(i) {
                                        var o = K.attr(i, e);
                                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === t : "!=" === n ? o !== t : "^=" === n ? t && 0 === o.indexOf(t) : "*=" === n ? t && o.indexOf(t) > -1 : "$=" === n ? t && o.slice(-t.length) === t : "~=" === n ? (" " + o.replace(B, " ") + " ").indexOf(t) > -1 : "|=" === n && (o === t || o.slice(0, t.length + 1) === t + "-"));
                                    };
                                },
                                CHILD: function(e, n, t, i, o) {
                                    var r = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === n;
                                    return 1 === i && 0 === o ? function(e) {
                                        return !!e.parentNode;
                                    } : function(n, t, l) {
                                        var c, u, d, p, g, f = r !== a ? "nextSibling" : "previousSibling", h = n.parentNode, v = s && n.nodeName.toLowerCase(), x = !l && !s, w = !1;
                                        if (h) {
                                            if (r) {
                                                for(; f;){
                                                    for(d = n; d = d[f];)if (s ? L(d, v) : 1 === d.nodeType) return !1;
                                                    g = f = "only" === e && !g && "nextSibling";
                                                }
                                                return !0;
                                            }
                                            if (g = [
                                                a ? h.firstChild : h.lastChild
                                            ], a && x) {
                                                for(w = (p = (c = (u = h[m] || (h[m] = {}))[e] || [])[0] === y && c[1]) && c[2], d = p && h.childNodes[p]; d = ++p && d && d[f] || (w = p = 0) || g.pop();)if (1 === d.nodeType && ++w && d === n) {
                                                    u[e] = [
                                                        y,
                                                        p,
                                                        w
                                                    ];
                                                    break;
                                                }
                                            } else if (x && (w = p = (c = (u = n[m] || (n[m] = {}))[e] || [])[0] === y && c[1]), !1 === w) for(; (d = ++p && d && d[f] || (w = p = 0) || g.pop()) && (!(s ? L(d, v) : 1 === d.nodeType) || !++w || (x && ((u = d[m] || (d[m] = {}))[e] = [
                                                y,
                                                w
                                            ]), d !== n)););
                                            return (w -= o) === i || w % i == 0 && w / i >= 0;
                                        }
                                    };
                                },
                                PSEUDO: function(e, t) {
                                    var i, o = n.pseudos[e] || n.setFilters[e.toLowerCase()] || K.error("unsupported pseudo: " + e);
                                    return o[m] ? o(t) : o.length > 1 ? (i = [
                                        e,
                                        e,
                                        "",
                                        t
                                    ], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ne(function(e, n) {
                                        for(var i, r = o(e, t), a = r.length; a--;)e[i = u.call(e, r[a])] = !(n[i] = r[a]);
                                    }) : function(e) {
                                        return o(e, 0, i);
                                    }) : o;
                                }
                            },
                            pseudos: {
                                not: ne(function(e) {
                                    var n = [], t = [], i = me(e.replace(I, "$1"));
                                    return i[m] ? ne(function(e, n, t, o) {
                                        for(var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(n[s] = r));
                                    }) : function(e, o, r) {
                                        return n[0] = e, i(n, null, r, t), n[0] = null, !t.pop();
                                    };
                                }),
                                has: ne(function(e) {
                                    return function(n) {
                                        return K(e, n).length > 0;
                                    };
                                }),
                                contains: ne(function(e) {
                                    return e = e.replace(Y, Z), function(n) {
                                        return (n.textContent || T.text(n)).indexOf(e) > -1;
                                    };
                                }),
                                lang: ne(function(e) {
                                    return _.test(e || "") || K.error("unsupported lang: " + e), e = e.replace(Y, Z).toLowerCase(), function(n) {
                                        var t;
                                        do {
                                            if (t = d ? n.lang : n.getAttribute("xml:lang") || n.getAttribute("lang")) return (t = t.toLowerCase()) === e || 0 === t.indexOf(e + "-");
                                        }while ((n = n.parentNode) && 1 === n.nodeType);
                                        return !1;
                                    };
                                }),
                                target: function(e) {
                                    var n = i.location && i.location.hash;
                                    return n && n.slice(1) === e.id;
                                },
                                root: function(e) {
                                    return e === c;
                                },
                                focus: function(e) {
                                    return e === function() {
                                        try {
                                            return l.activeElement;
                                        } catch (e) {}
                                    }() && l.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
                                },
                                enabled: re(!1),
                                disabled: re(!0),
                                checked: function(e) {
                                    return L(e, "input") && !!e.checked || L(e, "option") && !!e.selected;
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                },
                                empty: function(e) {
                                    for(e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function(e) {
                                    return !n.pseudos.empty(e);
                                },
                                header: function(e) {
                                    return W.test(e.nodeName);
                                },
                                input: function(e) {
                                    return G.test(e.nodeName);
                                },
                                button: function(e) {
                                    return L(e, "input") && "button" === e.type || L(e, "button");
                                },
                                text: function(e) {
                                    var n;
                                    return L(e, "input") && "text" === e.type && (null == (n = e.getAttribute("type")) || "text" === n.toLowerCase());
                                },
                                first: ae(function() {
                                    return [
                                        0
                                    ];
                                }),
                                last: ae(function(e, n) {
                                    return [
                                        n - 1
                                    ];
                                }),
                                eq: ae(function(e, n, t) {
                                    return [
                                        t < 0 ? t + n : t
                                    ];
                                }),
                                even: ae(function(e, n) {
                                    for(var t = 0; t < n; t += 2)e.push(t);
                                    return e;
                                }),
                                odd: ae(function(e, n) {
                                    for(var t = 1; t < n; t += 2)e.push(t);
                                    return e;
                                }),
                                lt: ae(function(e, n, t) {
                                    var i;
                                    for(i = t < 0 ? t + n : t > n ? n : t; --i >= 0;)e.push(i);
                                    return e;
                                }),
                                gt: ae(function(e, n, t) {
                                    for(var i = t < 0 ? t + n : t; ++i < n;)e.push(i);
                                    return e;
                                })
                            }
                        }, n.pseudos.nth = n.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        })n.pseudos[e] = ie(e);
                        for(e in {
                            submit: !0,
                            reset: !0
                        })n.pseudos[e] = oe(e);
                        function ce() {}
                        function ue(e, t) {
                            var i, o, r, a, s, l, c, u = b[e + " "];
                            if (u) return t ? 0 : u.slice(0);
                            for(s = e, l = [], c = n.preFilter; s;){
                                for(a in i && !(o = $.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = P.exec(s)) && (i = o.shift(), r.push({
                                    value: i,
                                    type: o[0].replace(I, " ")
                                }), s = s.slice(i.length)), n.filter)!(o = F[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                                    value: i,
                                    type: a,
                                    matches: o
                                }), s = s.slice(i.length));
                                if (!i) break;
                            }
                            return t ? s.length : s ? K.error(e) : b(e, l).slice(0);
                        }
                        function de(e) {
                            for(var n = 0, t = e.length, i = ""; n < t; n++)i += e[n].value;
                            return i;
                        }
                        function pe(e, n, t) {
                            var i = n.dir, o = n.next, r = o || i, a = t && "parentNode" === r, s = x++;
                            return n.first ? function(n, t, o) {
                                for(; n = n[i];)if (1 === n.nodeType || a) return e(n, t, o);
                                return !1;
                            } : function(n, t, l) {
                                var c, u, d = [
                                    y,
                                    s
                                ];
                                if (l) {
                                    for(; n = n[i];)if ((1 === n.nodeType || a) && e(n, t, l)) return !0;
                                } else for(; n = n[i];)if (1 === n.nodeType || a) {
                                    if (u = n[m] || (n[m] = {}), o && L(n, o)) n = n[i] || n;
                                    else {
                                        if ((c = u[r]) && c[0] === y && c[1] === s) return d[2] = c[2];
                                        if (u[r] = d, d[2] = e(n, t, l)) return !0;
                                    }
                                }
                                return !1;
                            };
                        }
                        function ge(e) {
                            return e.length > 1 ? function(n, t, i) {
                                for(var o = e.length; o--;)if (!e[o](n, t, i)) return !1;
                                return !0;
                            } : e[0];
                        }
                        function fe(e, n, t, i, o) {
                            for(var r, a = [], s = 0, l = e.length, c = null != n; s < l; s++)(r = e[s]) && (t && !t(r, i, o) || (a.push(r), c && n.push(s)));
                            return a;
                        }
                        function he(e, n, t, i, o, r) {
                            return i && !i[m] && (i = he(i)), o && !o[m] && (o = he(o, r)), ne(function(r, a, s, l) {
                                var c, d, p, g, f = [], v = [], m = a.length, y = r || function(e, n, t) {
                                    for(var i = 0, o = n.length; i < o; i++)K(e, n[i], t);
                                    return t;
                                }(n || "*", s.nodeType ? [
                                    s
                                ] : s, []), x = !e || !r && n ? y : fe(y, f, e, s, l);
                                if (t ? t(x, g = o || (r ? e : m || i) ? [] : a, s, l) : g = x, i) for(c = fe(g, v), i(c, [], s, l), d = c.length; d--;)(p = c[d]) && (g[v[d]] = !(x[v[d]] = p));
                                if (r) {
                                    if (o || e) {
                                        if (o) {
                                            for(c = [], d = g.length; d--;)(p = g[d]) && c.push(x[d] = p);
                                            o(null, g = [], c, l);
                                        }
                                        for(d = g.length; d--;)(p = g[d]) && (c = o ? u.call(r, p) : f[d]) > -1 && (r[c] = !(a[c] = p));
                                    }
                                } else g = fe(g === a ? g.splice(m, g.length) : g), o ? o(null, a, g, l) : h.apply(a, g);
                            });
                        }
                        function ve(e) {
                            for(var i, o, r, a = e.length, s = n.relative[e[0].type], l = s || n.relative[" "], c = s ? 1 : 0, d = pe(function(e) {
                                return e === i;
                            }, l, !0), p = pe(function(e) {
                                return u.call(i, e) > -1;
                            }, l, !0), g = [
                                function(e, n, o) {
                                    var r = !s && (o || n != t) || ((i = n).nodeType ? d(e, n, o) : p(e, n, o));
                                    return i = null, r;
                                }
                            ]; c < a; c++)if (o = n.relative[e[c].type]) g = [
                                pe(ge(g), o)
                            ];
                            else {
                                if ((o = n.filter[e[c].type].apply(null, e[c].matches))[m]) {
                                    for(r = ++c; r < a && !n.relative[e[r].type]; r++);
                                    return he(c > 1 && ge(g), c > 1 && de(e.slice(0, c - 1).concat({
                                        value: " " === e[c - 2].type ? "*" : ""
                                    })).replace(I, "$1"), o, c < r && ve(e.slice(c, r)), r < a && ve(e = e.slice(r)), r < a && de(e));
                                }
                                g.push(o);
                            }
                            return ge(g);
                        }
                        function me(e, i) {
                            var o, r = [], a = [], s = k[e + " "];
                            if (!s) {
                                for(i || (i = ue(e)), o = i.length; o--;)(s = ve(i[o]))[m] ? r.push(s) : a.push(s);
                                s = k(e, function(e, i) {
                                    var o = i.length > 0, r = e.length > 0, a = function(a, s, c, u, p) {
                                        var g, f, v, m = 0, x = "0", w = a && [], b = [], k = t, C = a || r && n.find.TAG("*", p), S = y += null == k ? 1 : Math.random() || .1, D = C.length;
                                        for(p && (t = s == l || s || p); x !== D && null != (g = C[x]); x++){
                                            if (r && g) {
                                                for(f = 0, s || g.ownerDocument == l || (le(g), c = !d); v = e[f++];)if (v(g, s || l, c)) {
                                                    h.call(u, g);
                                                    break;
                                                }
                                                p && (y = S);
                                            }
                                            o && ((g = !v && g) && m--, a && w.push(g));
                                        }
                                        if (m += x, o && x !== m) {
                                            for(f = 0; v = i[f++];)v(w, b, s, c);
                                            if (a) {
                                                if (m > 0) for(; x--;)w[x] || b[x] || (b[x] = A.call(u));
                                                b = fe(b);
                                            }
                                            h.apply(u, b), p && !a && b.length > 0 && m + i.length > 1 && T.uniqueSort(u);
                                        }
                                        return p && (y = S, t = k), w;
                                    };
                                    return o ? ne(a) : a;
                                }(a, r)), s.selector = e;
                            }
                            return s;
                        }
                        function ye(e, t, i, o) {
                            var r, a, s, l, c, u = "function" == typeof e && e, p = !o && ue(e = u.selector || e);
                            if (i = i || [], 1 === p.length) {
                                if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === t.nodeType && d && n.relative[a[1].type]) {
                                    if (!(t = (n.find.ID(s.matches[0].replace(Y, Z), t) || [])[0])) return i;
                                    u && (t = t.parentNode), e = e.slice(a.shift().value.length);
                                }
                                for(r = F.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r], !n.relative[l = s.type]);)if ((c = n.find[l]) && (o = c(s.matches[0].replace(Y, Z), X.test(a[0].type) && se(t.parentNode) || t))) {
                                    if (a.splice(r, 1), !(e = o.length && de(a))) return h.apply(i, o), i;
                                    break;
                                }
                            }
                            return (u || me(e, p))(o, t, !d, i, !t || X.test(e) && se(t.parentNode) || t), i;
                        }
                        ce.prototype = n.filters = n.pseudos, n.setFilters = new ce, v.sortStable = m.split("").sort(S).join("") === m, le(), v.sortDetached = te(function(e) {
                            return 1 & e.compareDocumentPosition(l.createElement("fieldset"));
                        }), T.find = K, T.expr[":"] = T.expr.pseudos, T.unique = T.uniqueSort, K.compile = me, K.select = ye, K.setDocument = le, K.tokenize = ue, K.escape = T.escapeSelector, K.getText = T.text, K.isXML = T.isXMLDoc, K.selectors = T.expr, K.support = T.support, K.uniqueSort = T.uniqueSort;
                    }();
                    var H = function(e, n, t) {
                        for(var i = [], o = void 0 !== t; (e = e[n]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                            if (o && T(e).is(t)) break;
                            i.push(e);
                        }
                        return i;
                    }, B = function(e, n) {
                        for(var t = []; e; e = e.nextSibling)1 === e.nodeType && e !== n && t.push(e);
                        return t;
                    }, $ = T.expr.match.needsContext, P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                    function q(e, n, t) {
                        return m(n) ? T.grep(e, function(e, i) {
                            return !!n.call(e, i, e) !== t;
                        }) : n.nodeType ? T.grep(e, function(e) {
                            return e === n !== t;
                        }) : "string" != typeof n ? T.grep(e, function(e) {
                            return u.call(n, e) > -1 !== t;
                        }) : T.filter(n, e, t);
                    }
                    T.filter = function(e, n, t) {
                        var i = n[0];
                        return t && (e = ":not(" + e + ")"), 1 === n.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [
                            i
                        ] : [] : T.find.matches(e, T.grep(n, function(e) {
                            return 1 === e.nodeType;
                        }));
                    }, T.fn.extend({
                        find: function(e) {
                            var n, t, i = this.length, o = this;
                            if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
                                for(n = 0; n < i; n++)if (T.contains(o[n], this)) return !0;
                            }));
                            for(t = this.pushStack([]), n = 0; n < i; n++)T.find(e, o[n], t);
                            return i > 1 ? T.uniqueSort(t) : t;
                        },
                        filter: function(e) {
                            return this.pushStack(q(this, e || [], !1));
                        },
                        not: function(e) {
                            return this.pushStack(q(this, e || [], !0));
                        },
                        is: function(e) {
                            return !!q(this, "string" == typeof e && $.test(e) ? T(e) : e || [], !1).length;
                        }
                    });
                    var R, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (T.fn.init = function(e, n, t) {
                        var i, o;
                        if (!e) return this;
                        if (t = t || R, "string" == typeof e) {
                            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [
                                null,
                                e,
                                null
                            ] : _.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || t).find(e) : this.constructor(n).find(e);
                            if (i[1]) {
                                if (n = n instanceof T ? n[0] : n, T.merge(this, T.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : x, !0)), P.test(i[1]) && T.isPlainObject(n)) for(i in n)m(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                                return this;
                            }
                            return (o = x.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
                        }
                        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== t.ready ? t.ready(e) : e(T) : T.makeArray(e, this);
                    }).prototype = T.fn, R = T(x);
                    var F = /^(?:parents|prev(?:Until|All))/, G = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };
                    function W(e, n) {
                        for(; (e = e[n]) && 1 !== e.nodeType;);
                        return e;
                    }
                    T.fn.extend({
                        has: function(e) {
                            var n = T(e, this), t = n.length;
                            return this.filter(function() {
                                for(var e = 0; e < t; e++)if (T.contains(this, n[e])) return !0;
                            });
                        },
                        closest: function(e, n) {
                            var t, i = 0, o = this.length, r = [], a = "string" != typeof e && T(e);
                            if (!$.test(e)) {
                                for(; i < o; i++)for(t = this[i]; t && t !== n; t = t.parentNode)if (t.nodeType < 11 && (a ? a.index(t) > -1 : 1 === t.nodeType && T.find.matchesSelector(t, e))) {
                                    r.push(t);
                                    break;
                                }
                            }
                            return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r);
                        },
                        index: function(e) {
                            return e ? "string" == typeof e ? u.call(T(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        },
                        add: function(e, n) {
                            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, n))));
                        },
                        addBack: function(e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                        }
                    }), T.each({
                        parent: function(e) {
                            var n = e.parentNode;
                            return n && 11 !== n.nodeType ? n : null;
                        },
                        parents: function(e) {
                            return H(e, "parentNode");
                        },
                        parentsUntil: function(e, n, t) {
                            return H(e, "parentNode", t);
                        },
                        next: function(e) {
                            return W(e, "nextSibling");
                        },
                        prev: function(e) {
                            return W(e, "previousSibling");
                        },
                        nextAll: function(e) {
                            return H(e, "nextSibling");
                        },
                        prevAll: function(e) {
                            return H(e, "previousSibling");
                        },
                        nextUntil: function(e, n, t) {
                            return H(e, "nextSibling", t);
                        },
                        prevUntil: function(e, n, t) {
                            return H(e, "previousSibling", t);
                        },
                        siblings: function(e) {
                            return B((e.parentNode || {}).firstChild, e);
                        },
                        children: function(e) {
                            return B(e.firstChild);
                        },
                        contents: function(e) {
                            return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (L(e, "template") && (e = e.content || e), T.merge([], e.childNodes));
                        }
                    }, function(e, n) {
                        T.fn[e] = function(t, i) {
                            var o = T.map(this, n, t);
                            return "Until" !== e.slice(-5) && (i = t), i && "string" == typeof i && (o = T.filter(i, o)), this.length > 1 && (G[e] || T.uniqueSort(o), F.test(e) && o.reverse()), this.pushStack(o);
                        };
                    });
                    var U = /[^\x20\t\r\n\f]+/g;
                    function X(e) {
                        return e;
                    }
                    function Y(e) {
                        throw e;
                    }
                    function Z(e, n, t, i) {
                        var o;
                        try {
                            e && m(o = e.promise) ? o.call(e).done(n).fail(t) : e && m(o = e.then) ? o.call(e, n, t) : n.apply(void 0, [
                                e
                            ].slice(i));
                        } catch (e) {
                            t.apply(void 0, [
                                e
                            ]);
                        }
                    }
                    T.Callbacks = function(e) {
                        e = "string" == typeof e ? function(e) {
                            var n = {};
                            return T.each(e.match(U) || [], function(e, t) {
                                n[t] = !0;
                            }), n;
                        }(e) : T.extend({}, e);
                        var n, t, i, o, r = [], a = [], s = -1, l = function() {
                            for(o = o || e.once, i = n = !0; a.length; s = -1)for(t = a.shift(); ++s < r.length;)!1 === r[s].apply(t[0], t[1]) && e.stopOnFalse && (s = r.length, t = !1);
                            e.memory || (t = !1), n = !1, o && (r = t ? [] : "");
                        }, c = {
                            add: function() {
                                return r && (t && !n && (s = r.length - 1, a.push(t)), function n(t) {
                                    T.each(t, function(t, i) {
                                        m(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== k(i) && n(i);
                                    });
                                }(arguments), t && !n && l()), this;
                            },
                            remove: function() {
                                return T.each(arguments, function(e, n) {
                                    for(var t; (t = T.inArray(n, r, t)) > -1;)r.splice(t, 1), t <= s && s--;
                                }), this;
                            },
                            has: function(e) {
                                return e ? T.inArray(e, r) > -1 : r.length > 0;
                            },
                            empty: function() {
                                return r && (r = []), this;
                            },
                            disable: function() {
                                return o = a = [], r = t = "", this;
                            },
                            disabled: function() {
                                return !r;
                            },
                            lock: function() {
                                return o = a = [], t || n || (r = t = ""), this;
                            },
                            locked: function() {
                                return !!o;
                            },
                            fireWith: function(e, t) {
                                return o || (t = [
                                    e,
                                    (t = t || []).slice ? t.slice() : t
                                ], a.push(t), n || l()), this;
                            },
                            fire: function() {
                                return c.fireWith(this, arguments), this;
                            },
                            fired: function() {
                                return !!i;
                            }
                        };
                        return c;
                    }, T.extend({
                        Deferred: function(e) {
                            var n = [
                                [
                                    "notify",
                                    "progress",
                                    T.Callbacks("memory"),
                                    T.Callbacks("memory"),
                                    2
                                ],
                                [
                                    "resolve",
                                    "done",
                                    T.Callbacks("once memory"),
                                    T.Callbacks("once memory"),
                                    0,
                                    "resolved"
                                ],
                                [
                                    "reject",
                                    "fail",
                                    T.Callbacks("once memory"),
                                    T.Callbacks("once memory"),
                                    1,
                                    "rejected"
                                ]
                            ], t = "pending", o = {
                                state: function() {
                                    return t;
                                },
                                always: function() {
                                    return r.done(arguments).fail(arguments), this;
                                },
                                catch: function(e) {
                                    return o.then(null, e);
                                },
                                pipe: function() {
                                    var e = arguments;
                                    return T.Deferred(function(t) {
                                        T.each(n, function(n, i) {
                                            var o = m(e[i[4]]) && e[i[4]];
                                            r[i[1]](function() {
                                                var e = o && o.apply(this, arguments);
                                                e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [
                                                    e
                                                ] : arguments);
                                            });
                                        }), e = null;
                                    }).promise();
                                },
                                then: function(e, t, o) {
                                    var r = 0;
                                    function a(e, n, t, o) {
                                        return function() {
                                            var s = this, l = arguments, c = function() {
                                                var i, c;
                                                if (!(e < r)) {
                                                    if ((i = t.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    c = i && ("object" == typeof i || "function" == typeof i) && i.then, m(c) ? o ? c.call(i, a(r, n, X, o), a(r, n, Y, o)) : (r++, c.call(i, a(r, n, X, o), a(r, n, Y, o), a(r, n, X, n.notifyWith))) : (t !== X && (s = void 0, l = [
                                                        i
                                                    ]), (o || n.resolveWith)(s, l));
                                                }
                                            }, u = o ? c : function() {
                                                try {
                                                    c();
                                                } catch (i) {
                                                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(i, u.error), e + 1 >= r && (t !== Y && (s = void 0, l = [
                                                        i
                                                    ]), n.rejectWith(s, l));
                                                }
                                            };
                                            e ? u() : (T.Deferred.getErrorHook ? u.error = T.Deferred.getErrorHook() : T.Deferred.getStackHook && (u.error = T.Deferred.getStackHook()), i.setTimeout(u));
                                        };
                                    }
                                    return T.Deferred(function(i) {
                                        n[0][3].add(a(0, i, m(o) ? o : X, i.notifyWith)), n[1][3].add(a(0, i, m(e) ? e : X)), n[2][3].add(a(0, i, m(t) ? t : Y));
                                    }).promise();
                                },
                                promise: function(e) {
                                    return null != e ? T.extend(e, o) : o;
                                }
                            }, r = {};
                            return T.each(n, function(e, i) {
                                var a = i[2], s = i[5];
                                o[i[1]] = a.add, s && a.add(function() {
                                    t = s;
                                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(i[3].fire), r[i[0]] = function() {
                                    return r[i[0] + "With"](this === r ? void 0 : this, arguments), this;
                                }, r[i[0] + "With"] = a.fireWith;
                            }), o.promise(r), e && e.call(r, r), r;
                        },
                        when: function(e) {
                            var n = arguments.length, t = n, i = Array(t), o = s.call(arguments), r = T.Deferred(), a = function(e) {
                                return function(t) {
                                    i[e] = this, o[e] = arguments.length > 1 ? s.call(arguments) : t, --n || r.resolveWith(i, o);
                                };
                            };
                            if (n <= 1 && (Z(e, r.done(a(t)).resolve, r.reject, !n), "pending" === r.state() || m(o[t] && o[t].then))) return r.then();
                            for(; t--;)Z(o[t], a(t), r.reject);
                            return r.promise();
                        }
                    });
                    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    T.Deferred.exceptionHook = function(e, n) {
                        i.console && i.console.warn && e && Q.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
                    }, T.readyException = function(e) {
                        i.setTimeout(function() {
                            throw e;
                        });
                    };
                    var J = T.Deferred();
                    function K() {
                        x.removeEventListener("DOMContentLoaded", K), i.removeEventListener("load", K), T.ready();
                    }
                    T.fn.ready = function(e) {
                        return J.then(e).catch(function(e) {
                            T.readyException(e);
                        }), this;
                    }, T.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(e) {
                            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || J.resolveWith(x, [
                                T
                            ]));
                        }
                    }), T.ready.then = J.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? i.setTimeout(T.ready) : (x.addEventListener("DOMContentLoaded", K), i.addEventListener("load", K));
                    var ee = function(e, n, t, i, o, r, a) {
                        var s = 0, l = e.length, c = null == t;
                        if ("object" === k(t)) for(s in o = !0, t)ee(e, n, s, t[s], !0, r, a);
                        else if (void 0 !== i && (o = !0, m(i) || (a = !0), c && (a ? (n.call(e, i), n = null) : (c = n, n = function(e, n, t) {
                            return c.call(T(e), t);
                        })), n)) for(; s < l; s++)n(e[s], t, a ? i : i.call(e[s], s, n(e[s], t)));
                        return o ? e : c ? n.call(e) : l ? n(e[0], t) : r;
                    }, ne = /^-ms-/, te = /-([a-z])/g;
                    function ie(e, n) {
                        return n.toUpperCase();
                    }
                    function oe(e) {
                        return e.replace(ne, "ms-").replace(te, ie);
                    }
                    var re = function(e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                    };
                    function ae() {
                        this.expando = T.expando + ae.uid++;
                    }
                    ae.uid = 1, ae.prototype = {
                        cache: function(e) {
                            var n = e[this.expando];
                            return n || (n = {}, re(e) && (e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                                value: n,
                                configurable: !0
                            }))), n;
                        },
                        set: function(e, n, t) {
                            var i, o = this.cache(e);
                            if ("string" == typeof n) o[oe(n)] = t;
                            else for(i in n)o[oe(i)] = n[i];
                            return o;
                        },
                        get: function(e, n) {
                            return void 0 === n ? this.cache(e) : e[this.expando] && e[this.expando][oe(n)];
                        },
                        access: function(e, n, t) {
                            return void 0 === n || n && "string" == typeof n && void 0 === t ? this.get(e, n) : (this.set(e, n, t), void 0 !== t ? t : n);
                        },
                        remove: function(e, n) {
                            var t, i = e[this.expando];
                            if (void 0 !== i) {
                                if (void 0 !== n) {
                                    t = (n = Array.isArray(n) ? n.map(oe) : (n = oe(n)) in i ? [
                                        n
                                    ] : n.match(U) || []).length;
                                    for(; t--;)delete i[n[t]];
                                }
                                (void 0 === n || T.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
                            }
                        },
                        hasData: function(e) {
                            var n = e[this.expando];
                            return void 0 !== n && !T.isEmptyObject(n);
                        }
                    };
                    var se = new ae, le = new ae, ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ue = /[A-Z]/g;
                    function de(e, n, t) {
                        var i;
                        if (void 0 === t && 1 === e.nodeType) {
                            if (i = "data-" + n.replace(ue, "-$&").toLowerCase(), "string" == typeof (t = e.getAttribute(i))) {
                                try {
                                    t = function(e) {
                                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ce.test(e) ? JSON.parse(e) : e);
                                    }(t);
                                } catch (e) {}
                                le.set(e, n, t);
                            } else t = void 0;
                        }
                        return t;
                    }
                    T.extend({
                        hasData: function(e) {
                            return le.hasData(e) || se.hasData(e);
                        },
                        data: function(e, n, t) {
                            return le.access(e, n, t);
                        },
                        removeData: function(e, n) {
                            le.remove(e, n);
                        },
                        _data: function(e, n, t) {
                            return se.access(e, n, t);
                        },
                        _removeData: function(e, n) {
                            se.remove(e, n);
                        }
                    }), T.fn.extend({
                        data: function(e, n) {
                            var t, i, o, r = this[0], a = r && r.attributes;
                            if (void 0 === e) {
                                if (this.length && (o = le.get(r), 1 === r.nodeType && !se.get(r, "hasDataAttrs"))) {
                                    for(t = a.length; t--;)a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = oe(i.slice(5)), de(r, i, o[i]));
                                    se.set(r, "hasDataAttrs", !0);
                                }
                                return o;
                            }
                            return "object" == typeof e ? this.each(function() {
                                le.set(this, e);
                            }) : ee(this, function(n) {
                                var t;
                                if (r && void 0 === n) return void 0 !== (t = le.get(r, e)) || void 0 !== (t = de(r, e)) ? t : void 0;
                                this.each(function() {
                                    le.set(this, e, n);
                                });
                            }, null, n, arguments.length > 1, null, !0);
                        },
                        removeData: function(e) {
                            return this.each(function() {
                                le.remove(this, e);
                            });
                        }
                    }), T.extend({
                        queue: function(e, n, t) {
                            var i;
                            if (e) return n = (n || "fx") + "queue", i = se.get(e, n), t && (!i || Array.isArray(t) ? i = se.access(e, n, T.makeArray(t)) : i.push(t)), i || [];
                        },
                        dequeue: function(e, n) {
                            n = n || "fx";
                            var t = T.queue(e, n), i = t.length, o = t.shift(), r = T._queueHooks(e, n);
                            "inprogress" === o && (o = t.shift(), i--), o && ("fx" === n && t.unshift("inprogress"), delete r.stop, o.call(e, function() {
                                T.dequeue(e, n);
                            }, r)), !i && r && r.empty.fire();
                        },
                        _queueHooks: function(e, n) {
                            var t = n + "queueHooks";
                            return se.get(e, t) || se.access(e, t, {
                                empty: T.Callbacks("once memory").add(function() {
                                    se.remove(e, [
                                        n + "queue",
                                        t
                                    ]);
                                })
                            });
                        }
                    }), T.fn.extend({
                        queue: function(e, n) {
                            var t = 2;
                            return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? T.queue(this[0], e) : void 0 === n ? this : this.each(function() {
                                var t = T.queue(this, e, n);
                                T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e);
                            });
                        },
                        dequeue: function(e) {
                            return this.each(function() {
                                T.dequeue(this, e);
                            });
                        },
                        clearQueue: function(e) {
                            return this.queue(e || "fx", []);
                        },
                        promise: function(e, n) {
                            var t, i = 1, o = T.Deferred(), r = this, a = this.length, s = function() {
                                --i || o.resolveWith(r, [
                                    r
                                ]);
                            };
                            for("string" != typeof e && (n = e, e = void 0), e = e || "fx"; a--;)(t = se.get(r[a], e + "queueHooks")) && t.empty && (i++, t.empty.add(s));
                            return s(), o.promise(n);
                        }
                    });
                    var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ge = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"), fe = [
                        "Top",
                        "Right",
                        "Bottom",
                        "Left"
                    ], he = x.documentElement, ve = function(e) {
                        return T.contains(e.ownerDocument, e);
                    }, me = {
                        composed: !0
                    };
                    he.getRootNode && (ve = function(e) {
                        return T.contains(e.ownerDocument, e) || e.getRootNode(me) === e.ownerDocument;
                    });
                    var ye = function(e, n) {
                        return "none" === (e = n || e).style.display || "" === e.style.display && ve(e) && "none" === T.css(e, "display");
                    };
                    function xe(e, n, t, i) {
                        var o, r, a = 20, s = i ? function() {
                            return i.cur();
                        } : function() {
                            return T.css(e, n, "");
                        }, l = s(), c = t && t[3] || (T.cssNumber[n] ? "" : "px"), u = e.nodeType && (T.cssNumber[n] || "px" !== c && +l) && ge.exec(T.css(e, n));
                        if (u && u[3] !== c) {
                            for(l /= 2, c = c || u[3], u = +l || 1; a--;)T.style(e, n, u + c), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), u /= r;
                            u *= 2, T.style(e, n, u + c), t = t || [];
                        }
                        return t && (u = +u || +l || 0, o = t[1] ? u + (t[1] + 1) * t[2] : +t[2], i && (i.unit = c, i.start = u, i.end = o)), o;
                    }
                    var we = {};
                    function be(e) {
                        var n, t = e.ownerDocument, i = e.nodeName, o = we[i];
                        return o || (n = t.body.appendChild(t.createElement(i)), o = T.css(n, "display"), n.parentNode.removeChild(n), "none" === o && (o = "block"), we[i] = o, o);
                    }
                    function ke(e, n) {
                        for(var t, i, o = [], r = 0, a = e.length; r < a; r++)(i = e[r]).style && (t = i.style.display, n ? ("none" === t && (o[r] = se.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ye(i) && (o[r] = be(i))) : "none" !== t && (o[r] = "none", se.set(i, "display", t)));
                        for(r = 0; r < a; r++)null != o[r] && (e[r].style.display = o[r]);
                        return e;
                    }
                    T.fn.extend({
                        show: function() {
                            return ke(this, !0);
                        },
                        hide: function() {
                            return ke(this);
                        },
                        toggle: function(e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                                ye(this) ? T(this).show() : T(this).hide();
                            });
                        }
                    });
                    var Ce, Se, Te = /^(?:checkbox|radio)$/i, De = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Le = /^$|^module$|\/(?:java|ecma)script/i;
                    Ce = x.createDocumentFragment().appendChild(x.createElement("div")), (Se = x.createElement("input")).setAttribute("type", "radio"), Se.setAttribute("checked", "checked"), Se.setAttribute("name", "t"), Ce.appendChild(Se), v.checkClone = Ce.cloneNode(!0).cloneNode(!0).lastChild.checked, Ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!Ce.cloneNode(!0).lastChild.defaultValue, Ce.innerHTML = "<option></option>", v.option = !!Ce.lastChild;
                    var Ae = {
                        thead: [
                            1,
                            "<table>",
                            "</table>"
                        ],
                        col: [
                            2,
                            "<table><colgroup>",
                            "</colgroup></table>"
                        ],
                        tr: [
                            2,
                            "<table><tbody>",
                            "</tbody></table>"
                        ],
                        td: [
                            3,
                            "<table><tbody><tr>",
                            "</tr></tbody></table>"
                        ],
                        _default: [
                            0,
                            "",
                            ""
                        ]
                    };
                    function Ee(e, n) {
                        var t;
                        return t = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(n || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(n || "*") : [], void 0 === n || n && L(e, n) ? T.merge([
                            e
                        ], t) : t;
                    }
                    function Me(e, n) {
                        for(var t = 0, i = e.length; t < i; t++)se.set(e[t], "globalEval", !n || se.get(n[t], "globalEval"));
                    }
                    Ae.tbody = Ae.tfoot = Ae.colgroup = Ae.caption = Ae.thead, Ae.th = Ae.td, v.option || (Ae.optgroup = Ae.option = [
                        1,
                        "<select multiple='multiple'>",
                        "</select>"
                    ]);
                    var je = /<|&#?\w+;/;
                    function Ie(e, n, t, i, o) {
                        for(var r, a, s, l, c, u, d = n.createDocumentFragment(), p = [], g = 0, f = e.length; g < f; g++)if ((r = e[g]) || 0 === r) {
                            if ("object" === k(r)) T.merge(p, r.nodeType ? [
                                r
                            ] : r);
                            else if (je.test(r)) {
                                for(a = a || d.appendChild(n.createElement("div")), s = (De.exec(r) || [
                                    "",
                                    ""
                                ])[1].toLowerCase(), l = Ae[s] || Ae._default, a.innerHTML = l[1] + T.htmlPrefilter(r) + l[2], u = l[0]; u--;)a = a.lastChild;
                                T.merge(p, a.childNodes), (a = d.firstChild).textContent = "";
                            } else p.push(n.createTextNode(r));
                        }
                        for(d.textContent = "", g = 0; r = p[g++];)if (i && T.inArray(r, i) > -1) o && o.push(r);
                        else if (c = ve(r), a = Ee(d.appendChild(r), "script"), c && Me(a), t) for(u = 0; r = a[u++];)Le.test(r.type || "") && t.push(r);
                        return d;
                    }
                    var ze = /^([^.]*)(?:\.(.+)|)/;
                    function Ne() {
                        return !0;
                    }
                    function Oe() {
                        return !1;
                    }
                    function Ve(e, n, t, i, o, r) {
                        var a, s;
                        if ("object" == typeof n) {
                            for(s in "string" != typeof t && (i = i || t, t = void 0), n)Ve(e, s, t, i, n[s], r);
                            return e;
                        }
                        if (null == i && null == o ? (o = t, i = t = void 0) : null == o && ("string" == typeof t ? (o = i, i = void 0) : (o = i, i = t, t = void 0)), !1 === o) o = Oe;
                        else if (!o) return e;
                        return 1 === r && (a = o, o = function(e) {
                            return T().off(e), a.apply(this, arguments);
                        }, o.guid = a.guid || (a.guid = T.guid++)), e.each(function() {
                            T.event.add(this, n, o, i, t);
                        });
                    }
                    function He(e, n, t) {
                        t ? (se.set(e, n, !1), T.event.add(e, n, {
                            namespace: !1,
                            handler: function(e) {
                                var t, i = se.get(this, n);
                                if (1 & e.isTrigger && this[n]) {
                                    if (i) (T.event.special[n] || {}).delegateType && e.stopPropagation();
                                    else if (i = s.call(arguments), se.set(this, n, i), this[n](), t = se.get(this, n), se.set(this, n, !1), i !== t) return e.stopImmediatePropagation(), e.preventDefault(), t;
                                } else i && (se.set(this, n, T.event.trigger(i[0], i.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne);
                            }
                        })) : void 0 === se.get(e, n) && T.event.add(e, n, Ne);
                    }
                    T.event = {
                        global: {},
                        add: function(e, n, t, i, o) {
                            var r, a, s, l, c, u, d, p, g, f, h, v = se.get(e);
                            if (re(e)) for(t.handler && (t = (r = t).handler, o = r.selector), o && T.find.matchesSelector(he, o), t.guid || (t.guid = T.guid++), (l = v.events) || (l = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(n) {
                                return void 0 !== T && T.event.triggered !== n.type ? T.event.dispatch.apply(e, arguments) : void 0;
                            }), c = (n = (n || "").match(U) || [
                                ""
                            ]).length; c--;)g = h = (s = ze.exec(n[c]) || [])[1], f = (s[2] || "").split(".").sort(), g && (d = T.event.special[g] || {}, g = (o ? d.delegateType : d.bindType) || g, d = T.event.special[g] || {}, u = T.extend({
                                type: g,
                                origType: h,
                                data: i,
                                handler: t,
                                guid: t.guid,
                                selector: o,
                                needsContext: o && T.expr.match.needsContext.test(o),
                                namespace: f.join(".")
                            }, r), (p = l[g]) || ((p = l[g] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, a) || e.addEventListener && e.addEventListener(g, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = t.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), T.event.global[g] = !0);
                        },
                        remove: function(e, n, t, i, o) {
                            var r, a, s, l, c, u, d, p, g, f, h, v = se.hasData(e) && se.get(e);
                            if (v && (l = v.events)) {
                                for(c = (n = (n || "").match(U) || [
                                    ""
                                ]).length; c--;)if (g = h = (s = ze.exec(n[c]) || [])[1], f = (s[2] || "").split(".").sort(), g) {
                                    for(d = T.event.special[g] || {}, p = l[g = (i ? d.delegateType : d.bindType) || g] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = p.length; r--;)u = p[r], !o && h !== u.origType || t && t.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                                    a && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, v.handle) || T.removeEvent(e, g, v.handle), delete l[g]);
                                } else for(g in l)T.event.remove(e, g + n[c], t, i, !0);
                                T.isEmptyObject(l) && se.remove(e, "handle events");
                            }
                        },
                        dispatch: function(e) {
                            var n, t, i, o, r, a, s = new Array(arguments.length), l = T.event.fix(e), c = (se.get(this, "events") || Object.create(null))[l.type] || [], u = T.event.special[l.type] || {};
                            for(s[0] = l, n = 1; n < arguments.length; n++)s[n] = arguments[n];
                            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                                for(a = T.event.handlers.call(this, l, c), n = 0; (o = a[n++]) && !l.isPropagationStopped();)for(l.currentTarget = o.elem, t = 0; (r = o.handlers[t++]) && !l.isImmediatePropagationStopped();)l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((T.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                                return u.postDispatch && u.postDispatch.call(this, l), l.result;
                            }
                        },
                        handlers: function(e, n) {
                            var t, i, o, r, a, s = [], l = n.delegateCount, c = e.target;
                            if (l && c.nodeType && !("click" === e.type && e.button >= 1)) {
                                for(; c !== this; c = c.parentNode || this)if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                    for(r = [], a = {}, t = 0; t < l; t++)void 0 === a[o = (i = n[t]).selector + " "] && (a[o] = i.needsContext ? T(o, this).index(c) > -1 : T.find(o, this, null, [
                                        c
                                    ]).length), a[o] && r.push(i);
                                    r.length && s.push({
                                        elem: c,
                                        handlers: r
                                    });
                                }
                            }
                            return c = this, l < n.length && s.push({
                                elem: c,
                                handlers: n.slice(l)
                            }), s;
                        },
                        addProp: function(e, n) {
                            Object.defineProperty(T.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: m(n) ? function() {
                                    if (this.originalEvent) return n(this.originalEvent);
                                } : function() {
                                    if (this.originalEvent) return this.originalEvent[e];
                                },
                                set: function(n) {
                                    Object.defineProperty(this, e, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: n
                                    });
                                }
                            });
                        },
                        fix: function(e) {
                            return e[T.expando] ? e : new T.Event(e);
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function(e) {
                                    var n = this || e;
                                    return Te.test(n.type) && n.click && L(n, "input") && He(n, "click", !0), !1;
                                },
                                trigger: function(e) {
                                    var n = this || e;
                                    return Te.test(n.type) && n.click && L(n, "input") && He(n, "click"), !0;
                                },
                                _default: function(e) {
                                    var n = e.target;
                                    return Te.test(n.type) && n.click && L(n, "input") && se.get(n, "click") || L(n, "a");
                                }
                            },
                            beforeunload: {
                                postDispatch: function(e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                                }
                            }
                        }
                    }, T.removeEvent = function(e, n, t) {
                        e.removeEventListener && e.removeEventListener(n, t);
                    }, T.Event = function(e, n) {
                        if (!(this instanceof T.Event)) return new T.Event(e, n);
                        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : Oe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, n && T.extend(this, n), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0;
                    }, T.Event.prototype = {
                        constructor: T.Event,
                        isDefaultPrevented: Oe,
                        isPropagationStopped: Oe,
                        isImmediatePropagationStopped: Oe,
                        isSimulated: !1,
                        preventDefault: function() {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault();
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;
                            this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation();
                        },
                        stopImmediatePropagation: function() {
                            var e = this.originalEvent;
                            this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                        }
                    }, T.each({
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
                        code: !0,
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
                        which: !0
                    }, T.event.addProp), T.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, function(e, n) {
                        function t(e) {
                            if (x.documentMode) {
                                var t = se.get(this, "handle"), i = T.event.fix(e);
                                i.type = "focusin" === e.type ? "focus" : "blur", i.isSimulated = !0, t(e), i.target === i.currentTarget && t(i);
                            } else T.event.simulate(n, e.target, T.event.fix(e));
                        }
                        T.event.special[e] = {
                            setup: function() {
                                var i;
                                if (He(this, e, !0), !x.documentMode) return !1;
                                (i = se.get(this, n)) || this.addEventListener(n, t), se.set(this, n, (i || 0) + 1);
                            },
                            trigger: function() {
                                return He(this, e), !0;
                            },
                            teardown: function() {
                                var e;
                                if (!x.documentMode) return !1;
                                (e = se.get(this, n) - 1) ? se.set(this, n, e) : (this.removeEventListener(n, t), se.remove(this, n));
                            },
                            _default: function(n) {
                                return se.get(n.target, e);
                            },
                            delegateType: n
                        }, T.event.special[n] = {
                            setup: function() {
                                var i = this.ownerDocument || this.document || this, o = x.documentMode ? this : i, r = se.get(o, n);
                                r || (x.documentMode ? this.addEventListener(n, t) : i.addEventListener(e, t, !0)), se.set(o, n, (r || 0) + 1);
                            },
                            teardown: function() {
                                var i = this.ownerDocument || this.document || this, o = x.documentMode ? this : i, r = se.get(o, n) - 1;
                                r ? se.set(o, n, r) : (x.documentMode ? this.removeEventListener(n, t) : i.removeEventListener(e, t, !0), se.remove(o, n));
                            }
                        };
                    }), T.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, function(e, n) {
                        T.event.special[e] = {
                            delegateType: n,
                            bindType: n,
                            handle: function(e) {
                                var t, i = e.relatedTarget, o = e.handleObj;
                                return i && (i === this || T.contains(this, i)) || (e.type = o.origType, t = o.handler.apply(this, arguments), e.type = n), t;
                            }
                        };
                    }), T.fn.extend({
                        on: function(e, n, t, i) {
                            return Ve(this, e, n, t, i);
                        },
                        one: function(e, n, t, i) {
                            return Ve(this, e, n, t, i, 1);
                        },
                        off: function(e, n, t) {
                            var i, o;
                            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                            if ("object" == typeof e) {
                                for(o in e)this.off(o, n, e[o]);
                                return this;
                            }
                            return !1 !== n && "function" != typeof n || (t = n, n = void 0), !1 === t && (t = Oe), this.each(function() {
                                T.event.remove(this, e, t, n);
                            });
                        }
                    });
                    var Be = /<script|<style|<link/i, $e = /checked\s*(?:[^=]|=\s*.checked.)/i, Pe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                    function qe(e, n) {
                        return L(e, "table") && L(11 !== n.nodeType ? n : n.firstChild, "tr") && T(e).children("tbody")[0] || e;
                    }
                    function Re(e) {
                        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
                    }
                    function _e(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
                    }
                    function Fe(e, n) {
                        var t, i, o, r, a, s;
                        if (1 === n.nodeType) {
                            if (se.hasData(e) && (s = se.get(e).events)) for(o in se.remove(n, "handle events"), s)for(t = 0, i = s[o].length; t < i; t++)T.event.add(n, o, s[o][t]);
                            le.hasData(e) && (r = le.access(e), a = T.extend({}, r), le.set(n, a));
                        }
                    }
                    function Ge(e, n) {
                        var t = n.nodeName.toLowerCase();
                        "input" === t && Te.test(e.type) ? n.checked = e.checked : "input" !== t && "textarea" !== t || (n.defaultValue = e.defaultValue);
                    }
                    function We(e, n, t, i) {
                        n = l(n);
                        var o, r, a, s, c, u, d = 0, p = e.length, g = p - 1, f = n[0], h = m(f);
                        if (h || p > 1 && "string" == typeof f && !v.checkClone && $e.test(f)) return e.each(function(o) {
                            var r = e.eq(o);
                            h && (n[0] = f.call(this, o, r.html())), We(r, n, t, i);
                        });
                        if (p && (r = (o = Ie(n, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                            for(s = (a = T.map(Ee(o, "script"), Re)).length; d < p; d++)c = o, d !== g && (c = T.clone(c, !0, !0), s && T.merge(a, Ee(c, "script"))), t.call(e[d], c, d);
                            if (s) for(u = a[a.length - 1].ownerDocument, T.map(a, _e), d = 0; d < s; d++)c = a[d], Le.test(c.type || "") && !se.access(c, "globalEval") && T.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? T._evalUrl && !c.noModule && T._evalUrl(c.src, {
                                nonce: c.nonce || c.getAttribute("nonce")
                            }, u) : b(c.textContent.replace(Pe, ""), c, u));
                        }
                        return e;
                    }
                    function Ue(e, n, t) {
                        for(var i, o = n ? T.filter(n, e) : e, r = 0; null != (i = o[r]); r++)t || 1 !== i.nodeType || T.cleanData(Ee(i)), i.parentNode && (t && ve(i) && Me(Ee(i, "script")), i.parentNode.removeChild(i));
                        return e;
                    }
                    T.extend({
                        htmlPrefilter: function(e) {
                            return e;
                        },
                        clone: function(e, n, t) {
                            var i, o, r, a, s = e.cloneNode(!0), l = ve(e);
                            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for(a = Ee(s), i = 0, o = (r = Ee(e)).length; i < o; i++)Ge(r[i], a[i]);
                            if (n) {
                                if (t) for(r = r || Ee(e), a = a || Ee(s), i = 0, o = r.length; i < o; i++)Fe(r[i], a[i]);
                                else Fe(e, s);
                            }
                            return (a = Ee(s, "script")).length > 0 && Me(a, !l && Ee(e, "script")), s;
                        },
                        cleanData: function(e) {
                            for(var n, t, i, o = T.event.special, r = 0; void 0 !== (t = e[r]); r++)if (re(t)) {
                                if (n = t[se.expando]) {
                                    if (n.events) for(i in n.events)o[i] ? T.event.remove(t, i) : T.removeEvent(t, i, n.handle);
                                    t[se.expando] = void 0;
                                }
                                t[le.expando] && (t[le.expando] = void 0);
                            }
                        }
                    }), T.fn.extend({
                        detach: function(e) {
                            return Ue(this, e, !0);
                        },
                        remove: function(e) {
                            return Ue(this, e);
                        },
                        text: function(e) {
                            return ee(this, function(e) {
                                return void 0 === e ? T.text(this) : this.empty().each(function() {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                                });
                            }, null, e, arguments.length);
                        },
                        append: function() {
                            return We(this, arguments, function(e) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
                            });
                        },
                        prepend: function() {
                            return We(this, arguments, function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var n = qe(this, e);
                                    n.insertBefore(e, n.firstChild);
                                }
                            });
                        },
                        before: function() {
                            return We(this, arguments, function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this);
                            });
                        },
                        after: function() {
                            return We(this, arguments, function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                            });
                        },
                        empty: function() {
                            for(var e, n = 0; null != (e = this[n]); n++)1 === e.nodeType && (T.cleanData(Ee(e, !1)), e.textContent = "");
                            return this;
                        },
                        clone: function(e, n) {
                            return e = null != e && e, n = null == n ? e : n, this.map(function() {
                                return T.clone(this, e, n);
                            });
                        },
                        html: function(e) {
                            return ee(this, function(e) {
                                var n = this[0] || {}, t = 0, i = this.length;
                                if (void 0 === e && 1 === n.nodeType) return n.innerHTML;
                                if ("string" == typeof e && !Be.test(e) && !Ae[(De.exec(e) || [
                                    "",
                                    ""
                                ])[1].toLowerCase()]) {
                                    e = T.htmlPrefilter(e);
                                    try {
                                        for(; t < i; t++)1 === (n = this[t] || {}).nodeType && (T.cleanData(Ee(n, !1)), n.innerHTML = e);
                                        n = 0;
                                    } catch (e) {}
                                }
                                n && this.empty().append(e);
                            }, null, e, arguments.length);
                        },
                        replaceWith: function() {
                            var e = [];
                            return We(this, arguments, function(n) {
                                var t = this.parentNode;
                                T.inArray(this, e) < 0 && (T.cleanData(Ee(this)), t && t.replaceChild(n, this));
                            }, e);
                        }
                    }), T.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, function(e, n) {
                        T.fn[e] = function(e) {
                            for(var t, i = [], o = T(e), r = o.length - 1, a = 0; a <= r; a++)t = a === r ? this : this.clone(!0), T(o[a])[n](t), c.apply(i, t.get());
                            return this.pushStack(i);
                        };
                    });
                    var Xe = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"), Ye = /^--/, Ze = function(e) {
                        var n = e.ownerDocument.defaultView;
                        return n && n.opener || (n = i), n.getComputedStyle(e);
                    }, Qe = function(e, n, t) {
                        var i, o, r = {};
                        for(o in n)r[o] = e.style[o], e.style[o] = n[o];
                        for(o in i = t.call(e), n)e.style[o] = r[o];
                        return i;
                    }, Je = new RegExp(fe.join("|"), "i");
                    function Ke(e, n, t) {
                        var i, o, r, a, s = Ye.test(n), l = e.style;
                        return (t = t || Ze(e)) && (a = t.getPropertyValue(n) || t[n], s && a && (a = a.replace(I, "$1") || void 0), "" !== a || ve(e) || (a = T.style(e, n)), !v.pixelBoxStyles() && Xe.test(a) && Je.test(n) && (i = l.width, o = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = t.width, l.width = i, l.minWidth = o, l.maxWidth = r)), void 0 !== a ? a + "" : a;
                    }
                    function en(e, n) {
                        return {
                            get: function() {
                                if (!e()) return (this.get = n).apply(this, arguments);
                                delete this.get;
                            }
                        };
                    }
                    !function() {
                        function e() {
                            if (u) {
                                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", he.appendChild(c).appendChild(u);
                                var e = i.getComputedStyle(u);
                                t = "1%" !== e.top, l = 12 === n(e.marginLeft), u.style.right = "60%", a = 36 === n(e.right), o = 36 === n(e.width), u.style.position = "absolute", r = 12 === n(u.offsetWidth / 3), he.removeChild(c), u = null;
                            }
                        }
                        function n(e) {
                            return Math.round(parseFloat(e));
                        }
                        var t, o, r, a, s, l, c = x.createElement("div"), u = x.createElement("div");
                        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, T.extend(v, {
                            boxSizingReliable: function() {
                                return e(), o;
                            },
                            pixelBoxStyles: function() {
                                return e(), a;
                            },
                            pixelPosition: function() {
                                return e(), t;
                            },
                            reliableMarginLeft: function() {
                                return e(), l;
                            },
                            scrollboxSize: function() {
                                return e(), r;
                            },
                            reliableTrDimensions: function() {
                                var e, n, t, o;
                                return null == s && (e = x.createElement("table"), n = x.createElement("tr"), t = x.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "box-sizing:content-box;border:1px solid", n.style.height = "1px", t.style.height = "9px", t.style.display = "block", he.appendChild(e).appendChild(n).appendChild(t), o = i.getComputedStyle(n), s = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight, he.removeChild(e)), s;
                            }
                        }));
                    }();
                    var nn = [
                        "Webkit",
                        "Moz",
                        "ms"
                    ], tn = x.createElement("div").style, on = {};
                    function rn(e) {
                        var n = T.cssProps[e] || on[e];
                        return n || (e in tn ? e : on[e] = function(e) {
                            for(var n = e[0].toUpperCase() + e.slice(1), t = nn.length; t--;)if ((e = nn[t] + n) in tn) return e;
                        }(e) || e);
                    }
                    var an = /^(none|table(?!-c[ea]).+)/, sn = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    }, ln = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };
                    function cn(e, n, t) {
                        var i = ge.exec(n);
                        return i ? Math.max(0, i[2] - (t || 0)) + (i[3] || "px") : n;
                    }
                    function un(e, n, t, i, o, r) {
                        var a = "width" === n ? 1 : 0, s = 0, l = 0, c = 0;
                        if (t === (i ? "border" : "content")) return 0;
                        for(; a < 4; a += 2)"margin" === t && (c += T.css(e, t + fe[a], !0, o)), i ? ("content" === t && (l -= T.css(e, "padding" + fe[a], !0, o)), "margin" !== t && (l -= T.css(e, "border" + fe[a] + "Width", !0, o))) : (l += T.css(e, "padding" + fe[a], !0, o), "padding" !== t ? l += T.css(e, "border" + fe[a] + "Width", !0, o) : s += T.css(e, "border" + fe[a] + "Width", !0, o));
                        return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + n[0].toUpperCase() + n.slice(1)] - r - l - s - .5)) || 0), l + c;
                    }
                    function dn(e, n, t) {
                        var i = Ze(e), o = (!v.boxSizingReliable() || t) && "border-box" === T.css(e, "boxSizing", !1, i), r = o, a = Ke(e, n, i), s = "offset" + n[0].toUpperCase() + n.slice(1);
                        if (Xe.test(a)) {
                            if (!t) return a;
                            a = "auto";
                        }
                        return (!v.boxSizingReliable() && o || !v.reliableTrDimensions() && L(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === T.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === T.css(e, "boxSizing", !1, i), (r = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + un(e, n, t || (o ? "border" : "content"), r, i, a) + "px";
                    }
                    function pn(e, n, t, i, o) {
                        return new pn.prototype.init(e, n, t, i, o);
                    }
                    T.extend({
                        cssHooks: {
                            opacity: {
                                get: function(e, n) {
                                    if (n) {
                                        var t = Ke(e, "opacity");
                                        return "" === t ? "1" : t;
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            aspectRatio: !0,
                            borderImageSlice: !0,
                            columnCount: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            scale: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0,
                            fillOpacity: !0,
                            floodOpacity: !0,
                            stopOpacity: !0,
                            strokeMiterlimit: !0,
                            strokeOpacity: !0
                        },
                        cssProps: {},
                        style: function(e, n, t, i) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var o, r, a, s = oe(n), l = Ye.test(n), c = e.style;
                                if (l || (n = rn(s)), a = T.cssHooks[n] || T.cssHooks[s], void 0 === t) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[n];
                                "string" === (r = typeof t) && (o = ge.exec(t)) && o[1] && (t = xe(e, n, o), r = "number"), null != t && t == t && ("number" !== r || l || (t += o && o[3] || (T.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== t || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && void 0 === (t = a.set(e, t, i)) || (l ? c.setProperty(n, t) : c[n] = t));
                            }
                        },
                        css: function(e, n, t, i) {
                            var o, r, a, s = oe(n);
                            return Ye.test(n) || (n = rn(s)), (a = T.cssHooks[n] || T.cssHooks[s]) && "get" in a && (o = a.get(e, !0, t)), void 0 === o && (o = Ke(e, n, i)), "normal" === o && n in ln && (o = ln[n]), "" === t || t ? (r = parseFloat(o), !0 === t || isFinite(r) ? r || 0 : o) : o;
                        }
                    }), T.each([
                        "height",
                        "width"
                    ], function(e, n) {
                        T.cssHooks[n] = {
                            get: function(e, t, i) {
                                if (t) return !an.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? dn(e, n, i) : Qe(e, sn, function() {
                                    return dn(e, n, i);
                                });
                            },
                            set: function(e, t, i) {
                                var o, r = Ze(e), a = !v.scrollboxSize() && "absolute" === r.position, s = (a || i) && "border-box" === T.css(e, "boxSizing", !1, r), l = i ? un(e, n, i, s, r) : 0;
                                return s && a && (l -= Math.ceil(e["offset" + n[0].toUpperCase() + n.slice(1)] - parseFloat(r[n]) - un(e, n, "border", !1, r) - .5)), l && (o = ge.exec(t)) && "px" !== (o[3] || "px") && (e.style[n] = t, t = T.css(e, n)), cn(0, t, l);
                            }
                        };
                    }), T.cssHooks.marginLeft = en(v.reliableMarginLeft, function(e, n) {
                        if (n) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
                            marginLeft: 0
                        }, function() {
                            return e.getBoundingClientRect().left;
                        })) + "px";
                    }), T.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, function(e, n) {
                        T.cssHooks[e + n] = {
                            expand: function(t) {
                                for(var i = 0, o = {}, r = "string" == typeof t ? t.split(" ") : [
                                    t
                                ]; i < 4; i++)o[e + fe[i] + n] = r[i] || r[i - 2] || r[0];
                                return o;
                            }
                        }, "margin" !== e && (T.cssHooks[e + n].set = cn);
                    }), T.fn.extend({
                        css: function(e, n) {
                            return ee(this, function(e, n, t) {
                                var i, o, r = {}, a = 0;
                                if (Array.isArray(n)) {
                                    for(i = Ze(e), o = n.length; a < o; a++)r[n[a]] = T.css(e, n[a], !1, i);
                                    return r;
                                }
                                return void 0 !== t ? T.style(e, n, t) : T.css(e, n);
                            }, e, n, arguments.length > 1);
                        }
                    }), T.Tween = pn, pn.prototype = {
                        constructor: pn,
                        init: function(e, n, t, i, o, r) {
                            this.elem = e, this.prop = t, this.easing = o || T.easing._default, this.options = n, this.start = this.now = this.cur(), this.end = i, this.unit = r || (T.cssNumber[t] ? "" : "px");
                        },
                        cur: function() {
                            var e = pn.propHooks[this.prop];
                            return e && e.get ? e.get(this) : pn.propHooks._default.get(this);
                        },
                        run: function(e) {
                            var n, t = pn.propHooks[this.prop];
                            return this.options.duration ? this.pos = n = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = n = e, this.now = (this.end - this.start) * n + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : pn.propHooks._default.set(this), this;
                        }
                    }, pn.prototype.init.prototype = pn.prototype, pn.propHooks = {
                        _default: {
                            get: function(e) {
                                var n;
                                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (n = T.css(e.elem, e.prop, "")) && "auto" !== n ? n : 0;
                            },
                            set: function(e) {
                                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[rn(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
                            }
                        }
                    }, pn.propHooks.scrollTop = pn.propHooks.scrollLeft = {
                        set: function(e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                        }
                    }, T.easing = {
                        linear: function(e) {
                            return e;
                        },
                        swing: function(e) {
                            return .5 - Math.cos(e * Math.PI) / 2;
                        },
                        _default: "swing"
                    }, T.fx = pn.prototype.init, T.fx.step = {};
                    var gn, fn, hn = /^(?:toggle|show|hide)$/, vn = /queueHooks$/;
                    function mn() {
                        fn && (!1 === x.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(mn) : i.setTimeout(mn, T.fx.interval), T.fx.tick());
                    }
                    function yn() {
                        return i.setTimeout(function() {
                            gn = void 0;
                        }), gn = Date.now();
                    }
                    function xn(e, n) {
                        var t, i = 0, o = {
                            height: e
                        };
                        for(n = n ? 1 : 0; i < 4; i += 2 - n)o["margin" + (t = fe[i])] = o["padding" + t] = e;
                        return n && (o.opacity = o.width = e), o;
                    }
                    function wn(e, n, t) {
                        for(var i, o = (bn.tweeners[n] || []).concat(bn.tweeners["*"]), r = 0, a = o.length; r < a; r++)if (i = o[r].call(t, n, e)) return i;
                    }
                    function bn(e, n, t) {
                        var i, o, r = 0, a = bn.prefilters.length, s = T.Deferred().always(function() {
                            delete l.elem;
                        }), l = function() {
                            if (o) return !1;
                            for(var n = gn || yn(), t = Math.max(0, c.startTime + c.duration - n), i = 1 - (t / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++)c.tweens[r].run(i);
                            return s.notifyWith(e, [
                                c,
                                i,
                                t
                            ]), i < 1 && a ? t : (a || s.notifyWith(e, [
                                c,
                                1,
                                0
                            ]), s.resolveWith(e, [
                                c
                            ]), !1);
                        }, c = s.promise({
                            elem: e,
                            props: T.extend({}, n),
                            opts: T.extend(!0, {
                                specialEasing: {},
                                easing: T.easing._default
                            }, t),
                            originalProperties: n,
                            originalOptions: t,
                            startTime: gn || yn(),
                            duration: t.duration,
                            tweens: [],
                            createTween: function(n, t) {
                                var i = T.Tween(e, c.opts, n, t, c.opts.specialEasing[n] || c.opts.easing);
                                return c.tweens.push(i), i;
                            },
                            stop: function(n) {
                                var t = 0, i = n ? c.tweens.length : 0;
                                if (o) return this;
                                for(o = !0; t < i; t++)c.tweens[t].run(1);
                                return n ? (s.notifyWith(e, [
                                    c,
                                    1,
                                    0
                                ]), s.resolveWith(e, [
                                    c,
                                    n
                                ])) : s.rejectWith(e, [
                                    c,
                                    n
                                ]), this;
                            }
                        }), u = c.props;
                        for(!function(e, n) {
                            var t, i, o, r, a;
                            for(t in e)if (o = n[i = oe(t)], r = e[t], Array.isArray(r) && (o = r[1], r = e[t] = r[0]), t !== i && (e[i] = r, delete e[t]), (a = T.cssHooks[i]) && ("expand" in a)) for(t in r = a.expand(r), delete e[i], r)(t in e) || (e[t] = r[t], n[t] = o);
                            else n[i] = o;
                        }(u, c.opts.specialEasing); r < a; r++)if (i = bn.prefilters[r].call(c, e, u, c.opts)) return m(i.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                        return T.map(u, wn, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, {
                            elem: e,
                            anim: c,
                            queue: c.opts.queue
                        })), c;
                    }
                    T.Animation = T.extend(bn, {
                        tweeners: {
                            "*": [
                                function(e, n) {
                                    var t = this.createTween(e, n);
                                    return xe(t.elem, e, ge.exec(n), t), t;
                                }
                            ]
                        },
                        tweener: function(e, n) {
                            m(e) ? (n = e, e = [
                                "*"
                            ]) : e = e.match(U);
                            for(var t, i = 0, o = e.length; i < o; i++)t = e[i], bn.tweeners[t] = bn.tweeners[t] || [], bn.tweeners[t].unshift(n);
                        },
                        prefilters: [
                            function(e, n, t) {
                                var i, o, r, a, s, l, c, u, d = "width" in n || "height" in n, p = this, g = {}, f = e.style, h = e.nodeType && ye(e), v = se.get(e, "fxshow");
                                for(i in t.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                    a.unqueued || s();
                                }), a.unqueued++, p.always(function() {
                                    p.always(function() {
                                        a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
                                    });
                                })), n)if (o = n[i], hn.test(o)) {
                                    if (delete n[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                                        if ("show" !== o || !v || void 0 === v[i]) continue;
                                        h = !0;
                                    }
                                    g[i] = v && v[i] || T.style(e, i);
                                }
                                if ((l = !T.isEmptyObject(n)) || !T.isEmptyObject(g)) for(i in d && 1 === e.nodeType && (t.overflow = [
                                    f.overflow,
                                    f.overflowX,
                                    f.overflowY
                                ], null == (c = v && v.display) && (c = se.get(e, "display")), "none" === (u = T.css(e, "display")) && (c ? u = c : (ke([
                                    e
                                ], !0), c = e.style.display || c, u = T.css(e, "display"), ke([
                                    e
                                ]))), ("inline" === u || "inline-block" === u && null != c) && "none" === T.css(e, "float") && (l || (p.done(function() {
                                    f.display = c;
                                }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), t.overflow && (f.overflow = "hidden", p.always(function() {
                                    f.overflow = t.overflow[0], f.overflowX = t.overflow[1], f.overflowY = t.overflow[2];
                                })), l = !1, g)l || (v ? "hidden" in v && (h = v.hidden) : v = se.access(e, "fxshow", {
                                    display: c
                                }), r && (v.hidden = !h), h && ke([
                                    e
                                ], !0), p.done(function() {
                                    for(i in h || ke([
                                        e
                                    ]), se.remove(e, "fxshow"), g)T.style(e, i, g[i]);
                                })), l = wn(h ? v[i] : 0, i, p), i in v || (v[i] = l.start, h && (l.end = l.start, l.start = 0));
                            }
                        ],
                        prefilter: function(e, n) {
                            n ? bn.prefilters.unshift(e) : bn.prefilters.push(e);
                        }
                    }), T.speed = function(e, n, t) {
                        var i = e && "object" == typeof e ? T.extend({}, e) : {
                            complete: t || !t && n || m(e) && e,
                            duration: e,
                            easing: t && n || n && !m(n) && n
                        };
                        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                            m(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
                        }, i;
                    }, T.fn.extend({
                        fadeTo: function(e, n, t, i) {
                            return this.filter(ye).css("opacity", 0).show().end().animate({
                                opacity: n
                            }, e, t, i);
                        },
                        animate: function(e, n, t, i) {
                            var o = T.isEmptyObject(e), r = T.speed(n, t, i), a = function() {
                                var n = bn(this, T.extend({}, e), r);
                                (o || se.get(this, "finish")) && n.stop(!0);
                            };
                            return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a);
                        },
                        stop: function(e, n, t) {
                            var i = function(e) {
                                var n = e.stop;
                                delete e.stop, n(t);
                            };
                            return "string" != typeof e && (t = n, n = e, e = void 0), n && this.queue(e || "fx", []), this.each(function() {
                                var n = !0, o = null != e && e + "queueHooks", r = T.timers, a = se.get(this);
                                if (o) a[o] && a[o].stop && i(a[o]);
                                else for(o in a)a[o] && a[o].stop && vn.test(o) && i(a[o]);
                                for(o = r.length; o--;)r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(t), n = !1, r.splice(o, 1));
                                !n && t || T.dequeue(this, e);
                            });
                        },
                        finish: function(e) {
                            return !1 !== e && (e = e || "fx"), this.each(function() {
                                var n, t = se.get(this), i = t[e + "queue"], o = t[e + "queueHooks"], r = T.timers, a = i ? i.length : 0;
                                for(t.finish = !0, T.queue(this, e, []), o && o.stop && o.stop.call(this, !0), n = r.length; n--;)r[n].elem === this && r[n].queue === e && (r[n].anim.stop(!0), r.splice(n, 1));
                                for(n = 0; n < a; n++)i[n] && i[n].finish && i[n].finish.call(this);
                                delete t.finish;
                            });
                        }
                    }), T.each([
                        "toggle",
                        "show",
                        "hide"
                    ], function(e, n) {
                        var t = T.fn[n];
                        T.fn[n] = function(e, i, o) {
                            return null == e || "boolean" == typeof e ? t.apply(this, arguments) : this.animate(xn(n, !0), e, i, o);
                        };
                    }), T.each({
                        slideDown: xn("show"),
                        slideUp: xn("hide"),
                        slideToggle: xn("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, function(e, n) {
                        T.fn[e] = function(e, t, i) {
                            return this.animate(n, e, t, i);
                        };
                    }), T.timers = [], T.fx.tick = function() {
                        var e, n = 0, t = T.timers;
                        for(gn = Date.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                        t.length || T.fx.stop(), gn = void 0;
                    }, T.fx.timer = function(e) {
                        T.timers.push(e), T.fx.start();
                    }, T.fx.interval = 13, T.fx.start = function() {
                        fn || (fn = !0, mn());
                    }, T.fx.stop = function() {
                        fn = null;
                    }, T.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    }, T.fn.delay = function(e, n) {
                        return e = T.fx && T.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, t) {
                            var o = i.setTimeout(n, e);
                            t.stop = function() {
                                i.clearTimeout(o);
                            };
                        });
                    }, function() {
                        var e = x.createElement("input"), n = x.createElement("select").appendChild(x.createElement("option"));
                        e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = n.selected, (e = x.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value;
                    }();
                    var kn, Cn = T.expr.attrHandle;
                    T.fn.extend({
                        attr: function(e, n) {
                            return ee(this, T.attr, e, n, arguments.length > 1);
                        },
                        removeAttr: function(e) {
                            return this.each(function() {
                                T.removeAttr(this, e);
                            });
                        }
                    }), T.extend({
                        attr: function(e, n, t) {
                            var i, o, r = e.nodeType;
                            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? T.prop(e, n, t) : (1 === r && T.isXMLDoc(e) || (o = T.attrHooks[n.toLowerCase()] || (T.expr.match.bool.test(n) ? kn : void 0)), void 0 !== t ? null === t ? void T.removeAttr(e, n) : o && "set" in o && void 0 !== (i = o.set(e, t, n)) ? i : (e.setAttribute(n, t + ""), t) : o && "get" in o && null !== (i = o.get(e, n)) ? i : null == (i = T.find.attr(e, n)) ? void 0 : i);
                        },
                        attrHooks: {
                            type: {
                                set: function(e, n) {
                                    if (!v.radioValue && "radio" === n && L(e, "input")) {
                                        var t = e.value;
                                        return e.setAttribute("type", n), t && (e.value = t), n;
                                    }
                                }
                            }
                        },
                        removeAttr: function(e, n) {
                            var t, i = 0, o = n && n.match(U);
                            if (o && 1 === e.nodeType) for(; t = o[i++];)e.removeAttribute(t);
                        }
                    }), kn = {
                        set: function(e, n, t) {
                            return !1 === n ? T.removeAttr(e, t) : e.setAttribute(t, t), t;
                        }
                    }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, n) {
                        var t = Cn[n] || T.find.attr;
                        Cn[n] = function(e, n, i) {
                            var o, r, a = n.toLowerCase();
                            return i || (r = Cn[a], Cn[a] = o, o = null != t(e, n, i) ? a : null, Cn[a] = r), o;
                        };
                    });
                    var Sn = /^(?:input|select|textarea|button)$/i, Tn = /^(?:a|area)$/i;
                    function Dn(e) {
                        return (e.match(U) || []).join(" ");
                    }
                    function Ln(e) {
                        return e.getAttribute && e.getAttribute("class") || "";
                    }
                    function An(e) {
                        return Array.isArray(e) ? e : "string" == typeof e && e.match(U) || [];
                    }
                    T.fn.extend({
                        prop: function(e, n) {
                            return ee(this, T.prop, e, n, arguments.length > 1);
                        },
                        removeProp: function(e) {
                            return this.each(function() {
                                delete this[T.propFix[e] || e];
                            });
                        }
                    }), T.extend({
                        prop: function(e, n, t) {
                            var i, o, r = e.nodeType;
                            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && T.isXMLDoc(e) || (n = T.propFix[n] || n, o = T.propHooks[n]), void 0 !== t ? o && "set" in o && void 0 !== (i = o.set(e, t, n)) ? i : e[n] = t : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(e) {
                                    var n = T.find.attr(e, "tabindex");
                                    return n ? parseInt(n, 10) : Sn.test(e.nodeName) || Tn.test(e.nodeName) && e.href ? 0 : -1;
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), v.optSelected || (T.propHooks.selected = {
                        get: function(e) {
                            var n = e.parentNode;
                            return n && n.parentNode && n.parentNode.selectedIndex, null;
                        },
                        set: function(e) {
                            var n = e.parentNode;
                            n && (n.selectedIndex, n.parentNode && n.parentNode.selectedIndex);
                        }
                    }), T.each([
                        "tabIndex",
                        "readOnly",
                        "maxLength",
                        "cellSpacing",
                        "cellPadding",
                        "rowSpan",
                        "colSpan",
                        "useMap",
                        "frameBorder",
                        "contentEditable"
                    ], function() {
                        T.propFix[this.toLowerCase()] = this;
                    }), T.fn.extend({
                        addClass: function(e) {
                            var n, t, i, o, r, a;
                            return m(e) ? this.each(function(n) {
                                T(this).addClass(e.call(this, n, Ln(this)));
                            }) : (n = An(e)).length ? this.each(function() {
                                if (i = Ln(this), t = 1 === this.nodeType && " " + Dn(i) + " ") {
                                    for(r = 0; r < n.length; r++)o = n[r], t.indexOf(" " + o + " ") < 0 && (t += o + " ");
                                    a = Dn(t), i !== a && this.setAttribute("class", a);
                                }
                            }) : this;
                        },
                        removeClass: function(e) {
                            var n, t, i, o, r, a;
                            return m(e) ? this.each(function(n) {
                                T(this).removeClass(e.call(this, n, Ln(this)));
                            }) : arguments.length ? (n = An(e)).length ? this.each(function() {
                                if (i = Ln(this), t = 1 === this.nodeType && " " + Dn(i) + " ") {
                                    for(r = 0; r < n.length; r++)for(o = n[r]; t.indexOf(" " + o + " ") > -1;)t = t.replace(" " + o + " ", " ");
                                    a = Dn(t), i !== a && this.setAttribute("class", a);
                                }
                            }) : this : this.attr("class", "");
                        },
                        toggleClass: function(e, n) {
                            var t, i, o, r, a = typeof e, s = "string" === a || Array.isArray(e);
                            return m(e) ? this.each(function(t) {
                                T(this).toggleClass(e.call(this, t, Ln(this), n), n);
                            }) : "boolean" == typeof n && s ? n ? this.addClass(e) : this.removeClass(e) : (t = An(e), this.each(function() {
                                if (s) for(r = T(this), o = 0; o < t.length; o++)i = t[o], r.hasClass(i) ? r.removeClass(i) : r.addClass(i);
                                else void 0 !== e && "boolean" !== a || ((i = Ln(this)) && se.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : se.get(this, "__className__") || ""));
                            }));
                        },
                        hasClass: function(e) {
                            var n, t, i = 0;
                            for(n = " " + e + " "; t = this[i++];)if (1 === t.nodeType && (" " + Dn(Ln(t)) + " ").indexOf(n) > -1) return !0;
                            return !1;
                        }
                    });
                    var En = /\r/g;
                    T.fn.extend({
                        val: function(e) {
                            var n, t, i, o = this[0];
                            return arguments.length ? (i = m(e), this.each(function(t) {
                                var o;
                                1 === this.nodeType && (null == (o = i ? e.call(this, t, T(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = T.map(o, function(e) {
                                    return null == e ? "" : e + "";
                                })), (n = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, o, "value") || (this.value = o));
                            })) : o ? (n = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(o, "value")) ? t : "string" == typeof (t = o.value) ? t.replace(En, "") : null == t ? "" : t : void 0;
                        }
                    }), T.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    var n = T.find.attr(e, "value");
                                    return null != n ? n : Dn(T.text(e));
                                }
                            },
                            select: {
                                get: function(e) {
                                    var n, t, i, o = e.options, r = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? r + 1 : o.length;
                                    for(i = r < 0 ? l : a ? r : 0; i < l; i++)if (((t = o[i]).selected || i === r) && !t.disabled && (!t.parentNode.disabled || !L(t.parentNode, "optgroup"))) {
                                        if (n = T(t).val(), a) return n;
                                        s.push(n);
                                    }
                                    return s;
                                },
                                set: function(e, n) {
                                    for(var t, i, o = e.options, r = T.makeArray(n), a = o.length; a--;)((i = o[a]).selected = T.inArray(T.valHooks.option.get(i), r) > -1) && (t = !0);
                                    return t || (e.selectedIndex = -1), r;
                                }
                            }
                        }
                    }), T.each([
                        "radio",
                        "checkbox"
                    ], function() {
                        T.valHooks[this] = {
                            set: function(e, n) {
                                if (Array.isArray(n)) return e.checked = T.inArray(T(e).val(), n) > -1;
                            }
                        }, v.checkOn || (T.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value;
                        });
                    });
                    var Mn = i.location, jn = {
                        guid: Date.now()
                    }, In = /\?/;
                    T.parseXML = function(e) {
                        var n, t;
                        if (!e || "string" != typeof e) return null;
                        try {
                            n = (new i.DOMParser).parseFromString(e, "text/xml");
                        } catch (e) {}
                        return t = n && n.getElementsByTagName("parsererror")[0], n && !t || T.error("Invalid XML: " + (t ? T.map(t.childNodes, function(e) {
                            return e.textContent;
                        }).join("\n") : e)), n;
                    };
                    var zn = /^(?:focusinfocus|focusoutblur)$/, Nn = function(e) {
                        e.stopPropagation();
                    };
                    T.extend(T.event, {
                        trigger: function(e, n, t, o) {
                            var r, a, s, l, c, u, d, p, f = [
                                t || x
                            ], h = g.call(e, "type") ? e.type : e, v = g.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (a = p = s = t = t || x, 3 !== t.nodeType && 8 !== t.nodeType && !zn.test(h + T.event.triggered) && (h.indexOf(".") > -1 && (v = h.split("."), h = v.shift(), v.sort()), c = h.indexOf(":") < 0 && "on" + h, (e = e[T.expando] ? e : new T.Event(h, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = t), n = null == n ? [
                                e
                            ] : T.makeArray(n, [
                                e
                            ]), d = T.event.special[h] || {}, o || !d.trigger || !1 !== d.trigger.apply(t, n))) {
                                if (!o && !d.noBubble && !y(t)) {
                                    for(l = d.delegateType || h, zn.test(l + h) || (a = a.parentNode); a; a = a.parentNode)f.push(a), s = a;
                                    s === (t.ownerDocument || x) && f.push(s.defaultView || s.parentWindow || i);
                                }
                                for(r = 0; (a = f[r++]) && !e.isPropagationStopped();)p = a, e.type = r > 1 ? l : d.bindType || h, (u = (se.get(a, "events") || Object.create(null))[e.type] && se.get(a, "handle")) && u.apply(a, n), (u = c && a[c]) && u.apply && re(a) && (e.result = u.apply(a, n), !1 === e.result && e.preventDefault());
                                return e.type = h, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !re(t) || c && m(t[h]) && !y(t) && ((s = t[c]) && (t[c] = null), T.event.triggered = h, e.isPropagationStopped() && p.addEventListener(h, Nn), t[h](), e.isPropagationStopped() && p.removeEventListener(h, Nn), T.event.triggered = void 0, s && (t[c] = s)), e.result;
                            }
                        },
                        simulate: function(e, n, t) {
                            var i = T.extend(new T.Event, t, {
                                type: e,
                                isSimulated: !0
                            });
                            T.event.trigger(i, null, n);
                        }
                    }), T.fn.extend({
                        trigger: function(e, n) {
                            return this.each(function() {
                                T.event.trigger(e, n, this);
                            });
                        },
                        triggerHandler: function(e, n) {
                            var t = this[0];
                            if (t) return T.event.trigger(e, n, t, !0);
                        }
                    });
                    var On = /\[\]$/, Vn = /\r?\n/g, Hn = /^(?:submit|button|image|reset|file)$/i, Bn = /^(?:input|select|textarea|keygen)/i;
                    function $n(e, n, t, i) {
                        var o;
                        if (Array.isArray(n)) T.each(n, function(n, o) {
                            t || On.test(e) ? i(e, o) : $n(e + "[" + ("object" == typeof o && null != o ? n : "") + "]", o, t, i);
                        });
                        else if (t || "object" !== k(n)) i(e, n);
                        else for(o in n)$n(e + "[" + o + "]", n[o], t, i);
                    }
                    T.param = function(e, n) {
                        var t, i = [], o = function(e, n) {
                            var t = m(n) ? n() : n;
                            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t);
                        };
                        if (null == e) return "";
                        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
                            o(this.name, this.value);
                        });
                        else for(t in e)$n(t, e[t], n, o);
                        return i.join("&");
                    }, T.fn.extend({
                        serialize: function() {
                            return T.param(this.serializeArray());
                        },
                        serializeArray: function() {
                            return this.map(function() {
                                var e = T.prop(this, "elements");
                                return e ? T.makeArray(e) : this;
                            }).filter(function() {
                                var e = this.type;
                                return this.name && !T(this).is(":disabled") && Bn.test(this.nodeName) && !Hn.test(e) && (this.checked || !Te.test(e));
                            }).map(function(e, n) {
                                var t = T(this).val();
                                return null == t ? null : Array.isArray(t) ? T.map(t, function(e) {
                                    return {
                                        name: n.name,
                                        value: e.replace(Vn, "\r\n")
                                    };
                                }) : {
                                    name: n.name,
                                    value: t.replace(Vn, "\r\n")
                                };
                            }).get();
                        }
                    });
                    var Pn = /%20/g, qn = /#.*$/, Rn = /([?&])_=[^&]*/, _n = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fn = /^(?:GET|HEAD)$/, Gn = /^\/\//, Wn = {}, Un = {}, Xn = "*/".concat("*"), Yn = x.createElement("a");
                    function Zn(e) {
                        return function(n, t) {
                            "string" != typeof n && (t = n, n = "*");
                            var i, o = 0, r = n.toLowerCase().match(U) || [];
                            if (m(t)) for(; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(t)) : (e[i] = e[i] || []).push(t);
                        };
                    }
                    function Qn(e, n, t, i) {
                        var o = {}, r = e === Un;
                        function a(s) {
                            var l;
                            return o[s] = !0, T.each(e[s] || [], function(e, s) {
                                var c = s(n, t, i);
                                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (n.dataTypes.unshift(c), a(c), !1);
                            }), l;
                        }
                        return a(n.dataTypes[0]) || !o["*"] && a("*");
                    }
                    function Jn(e, n) {
                        var t, i, o = T.ajaxSettings.flatOptions || {};
                        for(t in n)void 0 !== n[t] && ((o[t] ? e : i || (i = {}))[t] = n[t]);
                        return i && T.extend(!0, e, i), e;
                    }
                    Yn.href = Mn.href, T.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Mn.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Mn.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Xn,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": JSON.parse,
                                "text xml": T.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(e, n) {
                            return n ? Jn(Jn(e, T.ajaxSettings), n) : Jn(T.ajaxSettings, e);
                        },
                        ajaxPrefilter: Zn(Wn),
                        ajaxTransport: Zn(Un),
                        ajax: function(e, n) {
                            "object" == typeof e && (n = e, e = void 0), n = n || {};
                            var t, o, r, a, s, l, c, u, d, p, g = T.ajaxSetup({}, n), f = g.context || g, h = g.context && (f.nodeType || f.jquery) ? T(f) : T.event, v = T.Deferred(), m = T.Callbacks("once memory"), y = g.statusCode || {}, w = {}, b = {}, k = "canceled", C = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var n;
                                    if (c) {
                                        if (!a) for(a = {}; n = _n.exec(r);)a[n[1].toLowerCase() + " "] = (a[n[1].toLowerCase() + " "] || []).concat(n[2]);
                                        n = a[e.toLowerCase() + " "];
                                    }
                                    return null == n ? null : n.join(", ");
                                },
                                getAllResponseHeaders: function() {
                                    return c ? r : null;
                                },
                                setRequestHeader: function(e, n) {
                                    return null == c && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, w[e] = n), this;
                                },
                                overrideMimeType: function(e) {
                                    return null == c && (g.mimeType = e), this;
                                },
                                statusCode: function(e) {
                                    var n;
                                    if (e) {
                                        if (c) C.always(e[C.status]);
                                        else for(n in e)y[n] = [
                                            y[n],
                                            e[n]
                                        ];
                                    }
                                    return this;
                                },
                                abort: function(e) {
                                    var n = e || k;
                                    return t && t.abort(n), S(0, n), this;
                                }
                            };
                            if (v.promise(C), g.url = ((e || g.url || Mn.href) + "").replace(Gn, Mn.protocol + "//"), g.type = n.method || n.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(U) || [
                                ""
                            ], null == g.crossDomain) {
                                l = x.createElement("a");
                                try {
                                    l.href = g.url, l.href = l.href, g.crossDomain = Yn.protocol + "//" + Yn.host != l.protocol + "//" + l.host;
                                } catch (e) {
                                    g.crossDomain = !0;
                                }
                            }
                            if (g.data && g.processData && "string" != typeof g.data && (g.data = T.param(g.data, g.traditional)), Qn(Wn, g, n, C), c) return C;
                            for(d in (u = T.event && g.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Fn.test(g.type), o = g.url.replace(qn, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Pn, "+")) : (p = g.url.slice(o.length), g.data && (g.processData || "string" == typeof g.data) && (o += (In.test(o) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (o = o.replace(Rn, "$1"), p = (In.test(o) ? "&" : "?") + "_=" + jn.guid++ + p), g.url = o + p), g.ifModified && (T.lastModified[o] && C.setRequestHeader("If-Modified-Since", T.lastModified[o]), T.etag[o] && C.setRequestHeader("If-None-Match", T.etag[o])), (g.data && g.hasContent && !1 !== g.contentType || n.contentType) && C.setRequestHeader("Content-Type", g.contentType), C.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : g.accepts["*"]), g.headers)C.setRequestHeader(d, g.headers[d]);
                            if (g.beforeSend && (!1 === g.beforeSend.call(f, C, g) || c)) return C.abort();
                            if (k = "abort", m.add(g.complete), C.done(g.success), C.fail(g.error), t = Qn(Un, g, n, C)) {
                                if (C.readyState = 1, u && h.trigger("ajaxSend", [
                                    C,
                                    g
                                ]), c) return C;
                                g.async && g.timeout > 0 && (s = i.setTimeout(function() {
                                    C.abort("timeout");
                                }, g.timeout));
                                try {
                                    c = !1, t.send(w, S);
                                } catch (e) {
                                    if (c) throw e;
                                    S(-1, e);
                                }
                            } else S(-1, "No Transport");
                            function S(e, n, a, l) {
                                var d, p, x, w, b, k = n;
                                c || (c = !0, s && i.clearTimeout(s), t = void 0, r = l || "", C.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, a && (w = function(e, n, t) {
                                    for(var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = e.mimeType || n.getResponseHeader("Content-Type"));
                                    if (i) {
                                        for(o in s)if (s[o] && s[o].test(i)) {
                                            l.unshift(o);
                                            break;
                                        }
                                    }
                                    if (l[0] in t) r = l[0];
                                    else {
                                        for(o in t){
                                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                                r = o;
                                                break;
                                            }
                                            a || (a = o);
                                        }
                                        r = r || a;
                                    }
                                    if (r) return r !== l[0] && l.unshift(r), t[r];
                                }(g, C, a)), !d && T.inArray("script", g.dataTypes) > -1 && T.inArray("json", g.dataTypes) < 0 && (g.converters["text script"] = function() {}), w = function(e, n, t, i) {
                                    var o, r, a, s, l, c = {}, u = e.dataTypes.slice();
                                    if (u[1]) for(a in e.converters)c[a.toLowerCase()] = e.converters[a];
                                    for(r = u.shift(); r;)if (e.responseFields[r] && (t[e.responseFields[r]] = n), !l && i && e.dataFilter && (n = e.dataFilter(n, e.dataType)), l = r, r = u.shift()) {
                                        if ("*" === r) r = l;
                                        else if ("*" !== l && l !== r) {
                                            if (!(a = c[l + " " + r] || c["* " + r])) {
                                                for(o in c)if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                                    !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                                                    break;
                                                }
                                            }
                                            if (!0 !== a) {
                                                if (a && e.throws) n = a(n);
                                                else try {
                                                    n = a(n);
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a ? e : "No conversion from " + l + " to " + r
                                                    };
                                                }
                                            }
                                        }
                                    }
                                    return {
                                        state: "success",
                                        data: n
                                    };
                                }(g, w, C, d), d ? (g.ifModified && ((b = C.getResponseHeader("Last-Modified")) && (T.lastModified[o] = b), (b = C.getResponseHeader("etag")) && (T.etag[o] = b)), 204 === e || "HEAD" === g.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state, p = w.data, d = !(x = w.error))) : (x = k, !e && k || (k = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || k) + "", d ? v.resolveWith(f, [
                                    p,
                                    k,
                                    C
                                ]) : v.rejectWith(f, [
                                    C,
                                    k,
                                    x
                                ]), C.statusCode(y), y = void 0, u && h.trigger(d ? "ajaxSuccess" : "ajaxError", [
                                    C,
                                    g,
                                    d ? p : x
                                ]), m.fireWith(f, [
                                    C,
                                    k
                                ]), u && (h.trigger("ajaxComplete", [
                                    C,
                                    g
                                ]), --T.active || T.event.trigger("ajaxStop")));
                            }
                            return C;
                        },
                        getJSON: function(e, n, t) {
                            return T.get(e, n, t, "json");
                        },
                        getScript: function(e, n) {
                            return T.get(e, void 0, n, "script");
                        }
                    }), T.each([
                        "get",
                        "post"
                    ], function(e, n) {
                        T[n] = function(e, t, i, o) {
                            return m(t) && (o = o || i, i = t, t = void 0), T.ajax(T.extend({
                                url: e,
                                type: n,
                                dataType: o,
                                data: t,
                                success: i
                            }, T.isPlainObject(e) && e));
                        };
                    }), T.ajaxPrefilter(function(e) {
                        var n;
                        for(n in e.headers)"content-type" === n.toLowerCase() && (e.contentType = e.headers[n] || "");
                    }), T._evalUrl = function(e, n, t) {
                        return T.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function() {}
                            },
                            dataFilter: function(e) {
                                T.globalEval(e, n, t);
                            }
                        });
                    }, T.fn.extend({
                        wrapAll: function(e) {
                            var n;
                            return this[0] && (m(e) && (e = e.call(this[0])), n = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && n.insertBefore(this[0]), n.map(function() {
                                for(var e = this; e.firstElementChild;)e = e.firstElementChild;
                                return e;
                            }).append(this)), this;
                        },
                        wrapInner: function(e) {
                            return m(e) ? this.each(function(n) {
                                T(this).wrapInner(e.call(this, n));
                            }) : this.each(function() {
                                var n = T(this), t = n.contents();
                                t.length ? t.wrapAll(e) : n.append(e);
                            });
                        },
                        wrap: function(e) {
                            var n = m(e);
                            return this.each(function(t) {
                                T(this).wrapAll(n ? e.call(this, t) : e);
                            });
                        },
                        unwrap: function(e) {
                            return this.parent(e).not("body").each(function() {
                                T(this).replaceWith(this.childNodes);
                            }), this;
                        }
                    }), T.expr.pseudos.hidden = function(e) {
                        return !T.expr.pseudos.visible(e);
                    }, T.expr.pseudos.visible = function(e) {
                        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                    }, T.ajaxSettings.xhr = function() {
                        try {
                            return new i.XMLHttpRequest;
                        } catch (e) {}
                    };
                    var Kn = {
                        0: 200,
                        1223: 204
                    }, et = T.ajaxSettings.xhr();
                    v.cors = !!et && "withCredentials" in et, v.ajax = et = !!et, T.ajaxTransport(function(e) {
                        var n, t;
                        if (v.cors || et && !e.crossDomain) return {
                            send: function(o, r) {
                                var a, s = e.xhr();
                                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for(a in e.xhrFields)s[a] = e.xhrFields[a];
                                for(a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)s.setRequestHeader(a, o[a]);
                                n = function(e) {
                                    return function() {
                                        n && (n = t = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Kn[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                            binary: s.response
                                        } : {
                                            text: s.responseText
                                        }, s.getAllResponseHeaders()));
                                    };
                                }, s.onload = n(), t = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = t : s.onreadystatechange = function() {
                                    4 === s.readyState && i.setTimeout(function() {
                                        n && t();
                                    });
                                }, n = n("abort");
                                try {
                                    s.send(e.hasContent && e.data || null);
                                } catch (e) {
                                    if (n) throw e;
                                }
                            },
                            abort: function() {
                                n && n();
                            }
                        };
                    }), T.ajaxPrefilter(function(e) {
                        e.crossDomain && (e.contents.script = !1);
                    }), T.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(e) {
                                return T.globalEval(e), e;
                            }
                        }
                    }), T.ajaxPrefilter("script", function(e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                    }), T.ajaxTransport("script", function(e) {
                        var n, t;
                        if (e.crossDomain || e.scriptAttrs) return {
                            send: function(i, o) {
                                n = T("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", t = function(e) {
                                    n.remove(), t = null, e && o("error" === e.type ? 404 : 200, e.type);
                                }), x.head.appendChild(n[0]);
                            },
                            abort: function() {
                                t && t();
                            }
                        };
                    });
                    var nt, tt = [], it = /(=)\?(?=&|$)|\?\?/;
                    T.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var e = tt.pop() || T.expando + "_" + jn.guid++;
                            return this[e] = !0, e;
                        }
                    }), T.ajaxPrefilter("json jsonp", function(e, n, t) {
                        var o, r, a, s = !1 !== e.jsonp && (it.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && it.test(e.data) && "data");
                        if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(it, "$1" + o) : !1 !== e.jsonp && (e.url += (In.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                            return a || T.error(o + " was not called"), a[0];
                        }, e.dataTypes[0] = "json", r = i[o], i[o] = function() {
                            a = arguments;
                        }, t.always(function() {
                            void 0 === r ? T(i).removeProp(o) : i[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, tt.push(o)), a && m(r) && r(a[0]), a = r = void 0;
                        }), "script";
                    }), v.createHTMLDocument = ((nt = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === nt.childNodes.length), T.parseHTML = function(e, n, t) {
                        var i, o, r;
                        return "string" != typeof e ? [] : ("boolean" == typeof n && (t = n, n = !1), n || (v.createHTMLDocument ? ((i = (n = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, n.head.appendChild(i)) : n = x), r = !t && [], (o = P.exec(e)) ? [
                            n.createElement(o[1])
                        ] : (o = Ie([
                            e
                        ], n, r), r && r.length && T(r).remove(), T.merge([], o.childNodes)));
                    }, T.fn.load = function(e, n, t) {
                        var i, o, r, a = this, s = e.indexOf(" ");
                        return s > -1 && (i = Dn(e.slice(s)), e = e.slice(0, s)), m(n) ? (t = n, n = void 0) : n && "object" == typeof n && (o = "POST"), a.length > 0 && T.ajax({
                            url: e,
                            type: o || "GET",
                            dataType: "html",
                            data: n
                        }).done(function(e) {
                            r = arguments, a.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e);
                        }).always(t && function(e, n) {
                            a.each(function() {
                                t.apply(this, r || [
                                    e.responseText,
                                    n,
                                    e
                                ]);
                            });
                        }), this;
                    }, T.expr.pseudos.animated = function(e) {
                        return T.grep(T.timers, function(n) {
                            return e === n.elem;
                        }).length;
                    }, T.offset = {
                        setOffset: function(e, n, t) {
                            var i, o, r, a, s, l, c = T.css(e, "position"), u = T(e), d = {};
                            "static" === c && (e.style.position = "relative"), s = u.offset(), r = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (a = (i = u.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), m(n) && (n = n.call(e, t, T.extend({}, s))), null != n.top && (d.top = n.top - s.top + a), null != n.left && (d.left = n.left - s.left + o), "using" in n ? n.using.call(e, d) : u.css(d);
                        }
                    }, T.fn.extend({
                        offset: function(e) {
                            if (arguments.length) return void 0 === e ? this : this.each(function(n) {
                                T.offset.setOffset(this, e, n);
                            });
                            var n, t, i = this[0];
                            return i ? i.getClientRects().length ? (n = i.getBoundingClientRect(), t = i.ownerDocument.defaultView, {
                                top: n.top + t.pageYOffset,
                                left: n.left + t.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            } : void 0;
                        },
                        position: function() {
                            if (this[0]) {
                                var e, n, t, i = this[0], o = {
                                    top: 0,
                                    left: 0
                                };
                                if ("fixed" === T.css(i, "position")) n = i.getBoundingClientRect();
                                else {
                                    for(n = this.offset(), t = i.ownerDocument, e = i.offsetParent || t.documentElement; e && (e === t.body || e === t.documentElement) && "static" === T.css(e, "position");)e = e.parentNode;
                                    e && e !== i && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0), o.left += T.css(e, "borderLeftWidth", !0));
                                }
                                return {
                                    top: n.top - o.top - T.css(i, "marginTop", !0),
                                    left: n.left - o.left - T.css(i, "marginLeft", !0)
                                };
                            }
                        },
                        offsetParent: function() {
                            return this.map(function() {
                                for(var e = this.offsetParent; e && "static" === T.css(e, "position");)e = e.offsetParent;
                                return e || he;
                            });
                        }
                    }), T.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, function(e, n) {
                        var t = "pageYOffset" === n;
                        T.fn[e] = function(i) {
                            return ee(this, function(e, i, o) {
                                var r;
                                if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[n] : e[i];
                                r ? r.scrollTo(t ? r.pageXOffset : o, t ? o : r.pageYOffset) : e[i] = o;
                            }, e, i, arguments.length);
                        };
                    }), T.each([
                        "top",
                        "left"
                    ], function(e, n) {
                        T.cssHooks[n] = en(v.pixelPosition, function(e, t) {
                            if (t) return t = Ke(e, n), Xe.test(t) ? T(e).position()[n] + "px" : t;
                        });
                    }), T.each({
                        Height: "height",
                        Width: "width"
                    }, function(e, n) {
                        T.each({
                            padding: "inner" + e,
                            content: n,
                            "": "outer" + e
                        }, function(t, i) {
                            T.fn[i] = function(o, r) {
                                var a = arguments.length && (t || "boolean" != typeof o), s = t || (!0 === o || !0 === r ? "margin" : "border");
                                return ee(this, function(n, t, o) {
                                    var r;
                                    return y(n) ? 0 === i.indexOf("outer") ? n["inner" + e] : n.document.documentElement["client" + e] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + e], r["scroll" + e], n.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? T.css(n, t, s) : T.style(n, t, o, s);
                                }, n, a ? o : void 0, a);
                            };
                        });
                    }), T.each([
                        "ajaxStart",
                        "ajaxStop",
                        "ajaxComplete",
                        "ajaxError",
                        "ajaxSuccess",
                        "ajaxSend"
                    ], function(e, n) {
                        T.fn[n] = function(e) {
                            return this.on(n, e);
                        };
                    }), T.fn.extend({
                        bind: function(e, n, t) {
                            return this.on(e, null, n, t);
                        },
                        unbind: function(e, n) {
                            return this.off(e, null, n);
                        },
                        delegate: function(e, n, t, i) {
                            return this.on(n, e, t, i);
                        },
                        undelegate: function(e, n, t) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(n, e || "**", t);
                        },
                        hover: function(e, n) {
                            return this.on("mouseenter", e).on("mouseleave", n || e);
                        }
                    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
                        T.fn[n] = function(e, t) {
                            return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
                        };
                    });
                    var ot = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                    T.proxy = function(e, n) {
                        var t, i, o;
                        if ("string" == typeof n && (t = e[n], n = e, e = t), m(e)) return i = s.call(arguments, 2), o = function() {
                            return e.apply(n || this, i.concat(s.call(arguments)));
                        }, o.guid = e.guid = e.guid || T.guid++, o;
                    }, T.holdReady = function(e) {
                        e ? T.readyWait++ : T.ready(!0);
                    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = L, T.isFunction = m, T.isWindow = y, T.camelCase = oe, T.type = k, T.now = Date.now, T.isNumeric = function(e) {
                        var n = T.type(e);
                        return ("number" === n || "string" === n) && !isNaN(e - parseFloat(e));
                    }, T.trim = function(e) {
                        return null == e ? "" : (e + "").replace(ot, "$1");
                    }, void 0 === (t = (function() {
                        return T;
                    }).apply(n, [])) || (e.exports = t);
                    var rt = i.jQuery, at = i.$;
                    return T.noConflict = function(e) {
                        return i.$ === T && (i.$ = at), e && i.jQuery === T && (i.jQuery = rt), T;
                    }, void 0 === o && (i.jQuery = i.$ = T), T;
                });
            }
        }, n = {};
        function t(i) {
            var o = n[i];
            if (void 0 !== o) return o.exports;
            var r = n[i] = {
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, t), r.exports;
        }
        var i;
        return i = t(9755), $3Dmol.UI = function() {
            var e = {
                resn: {
                    type: "string",
                    valid: !0,
                    prop: !0,
                    gui: !0
                },
                x: {
                    type: "number",
                    floatType: !0,
                    valid: !1,
                    step: .1,
                    prop: !0
                },
                y: {
                    type: "number",
                    floatType: !0,
                    valid: !1,
                    step: .1,
                    prop: !0
                },
                z: {
                    type: "number",
                    floatType: !0,
                    valid: !1,
                    step: .1,
                    prop: !0
                },
                color: {
                    type: "color",
                    gui: !1
                },
                surfaceColor: {
                    type: "color",
                    gui: !1
                },
                elem: {
                    type: "element",
                    gui: !0,
                    prop: !0
                },
                hetflag: {
                    type: "boolean",
                    valid: !1,
                    gui: !0
                },
                chain: {
                    type: "string",
                    gui: !0,
                    prop: !0
                },
                resi: {
                    type: "array_range",
                    gui: !0
                },
                icode: {
                    type: "number",
                    valid: !1,
                    step: .1
                },
                rescode: {
                    type: "number",
                    valid: !1,
                    step: .1,
                    prop: !0
                },
                serial: {
                    type: "number",
                    valid: !1,
                    step: .1
                },
                atom: {
                    type: "string",
                    valid: !1,
                    gui: !0,
                    prop: !0
                },
                bonds: {
                    type: "array",
                    valid: !1
                },
                ss: {
                    type: "string",
                    valid: !1
                },
                singleBonds: {
                    type: "boolean",
                    valid: !1
                },
                bondOrder: {
                    type: "array",
                    valid: !1
                },
                properties: {
                    type: "properties",
                    valid: !1
                },
                b: {
                    type: "number",
                    floatType: !0,
                    valid: !1,
                    step: .1,
                    prop: !0
                },
                pdbline: {
                    type: "string",
                    valid: !1
                },
                clickable: {
                    type: "boolean",
                    valid: !1,
                    gui: !1
                },
                contextMenuEnabled: {
                    type: "boolean",
                    valid: !1,
                    gui: !1
                },
                callback: {
                    type: "function",
                    valid: !1
                },
                invert: {
                    type: "boolean",
                    valid: !1
                },
                reflectivity: {
                    type: "number",
                    floatType: !0,
                    gui: !1,
                    step: .1
                },
                altLoc: {
                    type: "invalid",
                    valid: !1
                },
                sym: {
                    type: "number",
                    gui: !1
                }
            }, n = $3Dmol.extend({}, e);
            n = $3Dmol.extend(n, {
                model: {
                    type: "string",
                    valid: !1
                },
                bonds: {
                    type: "number",
                    valid: !1,
                    gui: !0
                },
                predicate: {
                    type: "string",
                    valid: !1
                },
                invert: {
                    type: "boolean",
                    valid: !1,
                    gui: !0
                },
                byres: {
                    type: "boolean",
                    valid: !1,
                    gui: !0
                },
                expand: {
                    type: "number",
                    valid: !1,
                    gui: !1
                },
                within: {
                    type: "string",
                    valid: !1
                },
                and: {
                    type: "string",
                    valid: !1
                },
                or: {
                    type: "string",
                    valid: !1
                },
                not: {
                    type: "string",
                    valid: !1
                }
            });
            var t = {
                hidden: {
                    type: "boolean",
                    gui: !1
                },
                singleBonds: {
                    type: "boolean",
                    gui: !0
                },
                colorscheme: {
                    type: "colorscheme",
                    gui: !0
                },
                color: {
                    type: "color",
                    gui: !0
                },
                radius: {
                    type: "number",
                    floatType: !0,
                    gui: !0,
                    step: .1,
                    default: 1.5,
                    min: 0
                },
                scale: {
                    type: "number",
                    floatType: !0,
                    gui: !0,
                    step: .1,
                    default: 1,
                    min: .1
                },
                opacity: {
                    type: "number",
                    floatType: !0,
                    gui: !0,
                    step: .1,
                    default: 1,
                    min: 0,
                    max: 1
                }
            }, o = {
                line: {
                    validItems: {
                        hidden: {
                            type: "boolean",
                            gui: !0
                        },
                        linewidth: {
                            type: "number",
                            floatType: !0,
                            gui: !0,
                            step: .1,
                            default: 1
                        },
                        colorscheme: {
                            type: "colorscheme",
                            gui: !0
                        },
                        color: {
                            type: "color",
                            gui: !0
                        },
                        opacity: {
                            type: "number",
                            floatType: !0,
                            gui: !0,
                            step: .1,
                            default: 1,
                            min: 0,
                            max: 1
                        }
                    },
                    type: "form",
                    gui: !0
                },
                cross: {
                    validItems: {
                        hidden: {
                            type: "boolean",
                            gui: !0
                        },
                        linewidth: {
                            type: "number",
                            floatType: !0,
                            gui: !1,
                            step: .1,
                            default: 1,
                            min: 0
                        },
                        colorscheme: {
                            type: "colorscheme",
                            gui: !0
                        },
                        color: {
                            type: "color",
                            gui: !0
                        },
                        radius: {
                            type: "number",
                            floatType: !0,
                            gui: !0,
                            step: .1,
                            default: 1,
                            min: .1
                        },
                        scale: {
                            type: "number",
                            floatType: !0,
                            gui: !0,
                            step: .1,
                            default: 1,
                            min: 0
                        },
                        opacity: {
                            type: "number",
                            floatType: !0,
                            gui: !0,
                            step: .1,
                            default: 1,
                            min: 0,
                            max: 1
                        }
                    },
                    type: "form",
                    gui: !0
                },
                stick: {
                    validItems: {
                        hidden: {
                            type: "boolean",
                            gui: !0
                        },
                        colorscheme: {
                            type: "colorscheme",
                            gui: !0
                        },
                        color: {
                            type: "color",
                            gui: !0
                        },
                        radius: {
                            type: "number",
                            floatType: !0,
                            gui: !0,
                            step: .1,
                            default: .25,
                            min: .1
                        },
                        singleBonds: {
                            type: "boolean",
                            gui: !0
                        },
                        opacity: {
                            type: "number",
                            floatType: !0,
                            gui: !0,
                            step: .1,
                            default: 1,
                            min: 0,
                            max: 1
                        }
                    },
                    type: "form",
                    gui: !0
                },
                sphere: {
                    validItems: t,
                    type: "form",
                    gui: !0
                },
                cartoon: {
                    validItems: {
                        style: {
                            validItems: [
                                "trace",
                                "oval",
                                "rectangle",
                                "parabola",
                                "edged"
                            ],
                            gui: !0
                        },
                        color: {
                            type: "color",
                            gui: !0,
                            spectrum: !0
                        },
                        arrows: {
                            type: "boolean",
                            gui: !0
                        },
                        ribbon: {
                            type: "boolean",
                            gui: !0
                        },
                        hidden: {
                            type: "boolean",
                            gui: !0
                        },
                        tubes: {
                            type: "boolean",
                            gui: !0
                        },
                        thickness: {
                            type: "number",
                            floatType: !0,
                            gui: !0,
                            step: .1,
                            default: 1,
                            min: 0
                        },
                        width: {
                            type: "number",
                            floatType: !0,
                            gui: !0,
                            step: .1,
                            default: 1,
                            min: 0
                        },
                        opacity: {
                            type: "number",
                            floatType: !0,
                            gui: !0,
                            step: .1,
                            default: 1,
                            min: 0,
                            max: 1
                        }
                    },
                    type: "form",
                    gui: !0
                },
                colorfunc: {
                    validItems: null,
                    type: "js",
                    valid: !1
                },
                clicksphere: {
                    validItems: t,
                    type: "form"
                }
            }, r = {
                opacity: {
                    type: "number",
                    floatType: !0,
                    gui: !0,
                    step: .01,
                    default: 1,
                    min: 0,
                    max: 1
                },
                colorscheme: {
                    type: "colorscheme",
                    gui: !0
                },
                color: {
                    type: "color",
                    gui: !0
                },
                voldata: {
                    type: "number",
                    floatType: !0,
                    gui: !1
                },
                volscheme: {
                    type: "number",
                    floatType: !0,
                    gui: !1
                },
                map: {
                    type: "number",
                    gui: !1
                }
            };
            return function(t, a, s) {
                a = a || {};
                var l = new $3Dmol.UI.Icons, c = null, u = i(s[0]), d = a.height;
                function p() {
                    var e = this.ui = i("<div></div>");
                    e.css({
                        position: "relative",
                        "min-width": "150px"
                    });
                    var n = new b(l.molecule, 20, {
                        tooltip: "Toggle Model Selection Bar"
                    });
                    e.append(n.ui), n.ui.css({
                        display: "inline-block",
                        top: "3px"
                    });
                    var o = {
                        urlType: {
                            active: !0,
                            value: null,
                            key: "Model type"
                        },
                        url: {
                            active: !0,
                            value: null,
                            key: "Url"
                        }
                    }, r = i("<div></div>");
                    r.css({
                        display: "inline-block",
                        background: "#e4e4e4",
                        padding: "2px",
                        "border-radius": "3px"
                    }), e.append(r);
                    var a = i("<div></div>");
                    a.css({});
                    var s = i("<div></div>");
                    s.css({
                        display: "inline-block",
                        "font-family": "Arial",
                        "font-size": "12px",
                        "font-weight": "bold"
                    }), a.append(s);
                    var c = new b(l.change, 16, {
                        tooltip: "Change Model",
                        backgroundColor: "white",
                        bfr: .5
                    });
                    c.ui.css({
                        display: "inline-block",
                        "margin-left": "4px"
                    }), a.append(c.ui), a.hide(), r.append(a);
                    var u = i("<div></div>");
                    r.append(u);
                    var d = "pdb,mmtf,cid".split(","), p = this.list = new $3Dmol.UI.Form.ListInput(o.urlType, d);
                    p.showAlertBox = !1, p.ui.css({
                        display: "inline-block"
                    }), u.append(p.ui);
                    var g = this.url = new $3Dmol.UI.Form.Input(o.url);
                    u.append(g.ui), g.ui.css({
                        display: "inline-block",
                        width: "125px"
                    });
                    var f = new b(l.tick, 16, {
                        bfr: .5,
                        backgroundColor: "lightgreen",
                        tooltip: "Add Model"
                    });
                    f.ui.css({
                        margin: "0px"
                    }), u.append(f.ui), this.updateInputLength = function() {}, n.ui.on("click", ()=>{
                        r.toggle();
                    }), f.ui.on("click", function() {
                        var e = p.validate();
                        g.validate() && e && t.addModel(o);
                    }), this.setModel = function(e) {
                        s.text(e), a.show(), u.hide();
                    }, c.ui.on("click", function() {
                        a.hide(), u.show(), g.setValue("");
                    }), e.on("keypress", function(e) {
                        "Enter" != e.key && "Return" != e.key || f.ui.trigger("click");
                    });
                }
                function g(e, o = "left") {
                    var r = this.ui = i("<div></div>");
                    c = !1;
                    var a = [], s = i("<div></div>"), u = i("<div></div>");
                    s.css("opacity", "0.9");
                    var p = i("<div></div>"), g = i("<div></div>"), v = new b(l.plus, 20, {
                        tooltip: "Add New Selection"
                    });
                    v.ui.css("margin", "0px");
                    var m = new b(e, 20, {
                        tooltip: "Toggle Selection Menu"
                    });
                    this.selectionObjects = [], r.append(m.ui), r.append(p), r.css("position", "absolute"), u.append(s), p.append(u), g.append(v.ui);
                    var y = new h;
                    p.append(y.ui), p.append(g), y.ui.css("width", 162), "left" == o ? r.css("text-align", "left") : r.css("text-align", "right"), p.css("box-sizing", "border-box"), p.css("padding", "3px"), u.css("max-height", .8 * d), u.css("overflow-y", "auto"), u.css("overflow-x", "visible"), s.css("box-sizing", "content-box"), this.updateScrollBox = function(e) {
                        u.css("max-height", .8 * e);
                    };
                    var x = !0;
                    function w() {
                        var e = this.ui = i("<div></div>"), o = this.id = null;
                        a.push(this), e.css({
                            background: "#e8e8e8",
                            padding: "4px 4px 2px 4px",
                            "border-radius": "6px",
                            "margin-bottom": "3px",
                            position: "relative",
                            width: "156px"
                        });
                        var r = i("<div></div>");
                        e.append(r);
                        var s = i("<div></div>"), u = i("<div></div>");
                        r.append(s, u), s.css({
                            "font-family": "Arial",
                            "font-weight": "bold",
                            "font-size": "12px",
                            display: "inline-block",
                            width: "60px"
                        }), u.css({
                            display: "inline-block"
                        }), r.hide(), u.editMode = !1;
                        var d = new b(l.minus, 16, {
                            bfr: .5,
                            backgroundColor: "#f06f6f",
                            tooltip: "Remove Selection"
                        }), p = new b(l.pencil, 16, {
                            tooltip: "Edit Selection"
                        }), g = new b(l.visible, 16, {
                            tooltip: "Show / Hide Selection"
                        });
                        u.append(d.ui), u.append(p.ui), u.append(g.ui);
                        var v = i("<div></div>");
                        e.append(v);
                        var m = i("<div></div>");
                        d.ui.on("click", function() {
                            t.removeSelection(o), e.detach();
                        }), p.ui.on("click", function() {
                            v.toggle();
                        });
                        var y = !1;
                        g.ui.on("click", ()=>{
                            t.toggleHide(o), y ? (y = !1, g.setSVG(l.visible)) : (y = !0, g.setSVG(l.invisible));
                        });
                        var x = new f;
                        m.append(x.ui), x.ui.css({
                            position: "static",
                            width: "px",
                            "border-radius": "4px"
                        }), x.ui.hide();
                        var w = this.allSelector = {
                            key: "Select All Atom",
                            value: null,
                            active: !0
                        }, k = new $3Dmol.UI.Form.Checkbox(w);
                        v.append(k.ui);
                        var C = this.selectionValue = {
                            key: "Selection Spec",
                            value: null,
                            active: !0
                        }, S = new $3Dmol.UI.Form(n, C);
                        v.append(S.ui);
                        var T = i("<div></div>"), D = new b(l.tick, 16, {
                            backgroundColor: "lightgreen",
                            tooltip: "Submit"
                        }), L = new b(l.cross, 16, {
                            backgroundColor: "lightcoral",
                            tooltip: "Cancel"
                        });
                        T.append(D.ui, L.ui);
                        var A = new h;
                        function E(n) {
                            r.show(), u.editMode = !0, o = this.id = n, s.text("Sel#" + n), e.attr("data-id", n), v.hide(), x.setSid(n), x.ui.show();
                        }
                        function M(e = null) {
                            if (S.validate()) {
                                S.getValue();
                                var n = t.checkAtoms(C.value);
                                0 == Object.keys(C.value).length ? A.error("Please enter some input") : n ? (E(t.addSelection(C.value, e)), null == e && (c = !1)) : A.error("No atom selected");
                            } else A.error("Invalid Input");
                        }
                        v.append(A.ui), v.append(T), e.append(m), k.update = function() {
                            S.ui.toggle();
                        }, D.ui.on("click", ()=>{
                            if (0 == u.editMode) w.value ? (E(t.addSelection({})), c = !1) : M();
                            else if (w.value) {
                                let e = o;
                                t.addSelection({}, e), E(e);
                            } else M(o);
                        }), L.ui.on("click", ()=>{
                            u.editMode ? v.hide() : (e.detach(), c = !1);
                        }), e.on("keyup", (e)=>{
                            "Enter" == e.key && D.ui.trigger("click");
                        }), this.setProperty = function(e, n) {
                            0 == Object.keys(n).length ? k.setValue(!0) : S.setValue(n), E(e);
                        }, this.addStyle = function(e, n, t) {
                            x.addStyle(e, n, t);
                        };
                    }
                    p.hide(), m.ui.click(function() {
                        x ? p.show(100) : p.hide(100), x = !x;
                    }), v.ui.on("click", ()=>{
                        if (c) y.warning("Please complete the previous form");
                        else {
                            var e = new w;
                            s.append(e.ui), c = !0;
                        }
                    }), this.empty = function() {
                        s.empty(), c = !1;
                    }, this.editSelection = function(e, n, t, i) {
                        if (0 == s.children("[data-id=" + e + "]").length) {
                            var o = new w;
                            o.setProperty(e, n), s.append(o.ui), null != t && o.addStyle(e, t, i);
                        }
                    };
                }
                function f(e, n = "left") {
                    var r = this.ui = i("<div></div>");
                    c = !1;
                    var a = this.sid = e;
                    this.setSid = function(e) {
                        a = this.sid = e;
                    };
                    var s = i("<div></div>"), u = i("<div></div>");
                    s.css("opacity", "0.9");
                    var d = i("<div></div>"), p = i("<div></div>");
                    p.css("text-align", "center");
                    var g = new b(l.plus, 20, {
                        tooltip: "Add New Style"
                    });
                    g.ui.css("margin", "0px"), this.selectionObjects = [], r.append(d), r.css("position", "absolute"), u.append(s), d.append(u);
                    var f = new h;
                    function v(e) {
                        var n = this.ui = i("<div></div>"), r = this.id = null;
                        n.css({
                            background: "#e8e8e8",
                            padding: "4px 4px 2px 4px",
                            "border-radius": "6px",
                            "margin-bottom": "3px",
                            position: "relative"
                        });
                        var a = i("<div></div>");
                        n.append(a);
                        var s = i("<div></div>"), u = i("<div></div>");
                        a.append(s, u), s.css({
                            "font-family": "Arial",
                            "font-weight": "bold",
                            "font-size": "12px",
                            display: "inline-block",
                            width: "60px"
                        }), u.css({
                            display: "inline-block"
                        }), a.hide(), u.editMode = !1;
                        var d = new b(l.minus, 16, {
                            bfr: .5,
                            backgroundColor: "#f06f6f",
                            tooltip: "Remove Style"
                        }), p = new b(l.pencil, 16, {
                            tooltip: "Edit Style"
                        }), g = new b(l.visible, 16, {
                            tooltip: "Show / Hide Style"
                        });
                        u.append(d.ui), u.append(p.ui), u.append(g.ui);
                        var f = i("<div></div>");
                        n.append(f), d.ui.on("click", {
                            parent: this,
                            stid: r
                        }, function() {
                            t.removeStyle(e, r), n.detach();
                        }), p.ui.on("click", function() {
                            f.toggle();
                        });
                        var v = !1;
                        g.ui.on("click", ()=>{
                            t.toggleHideStyle(e, r), v ? (v = !1, g.setSVG(l.visible)) : (v = !0, g.setSVG(l.invisible));
                        });
                        var m = this.selectionValue = {
                            key: "Style Spec",
                            value: null,
                            active: !0
                        }, y = new $3Dmol.UI.Form(o, m);
                        f.append(y.ui);
                        var x = i("<div></div>"), w = new b(l.tick, 16, {
                            backgroundColor: "lightgreen",
                            tooltip: "Submit"
                        }), k = new b(l.cross, 16, {
                            backgroundColor: "lightcoral",
                            tooltip: "Cancel"
                        });
                        x.append(w.ui, k.ui);
                        var C = new h;
                        function S(e) {
                            a.show(), u.editMode = !0, r = e, s.text("Sty#" + e), f.hide();
                        }
                        function T(n = null) {
                            y.validate() ? (y.getValue(), 0 == Object.keys(m.value).length ? C.error("Please enter some value") : (S(t.addStyle(m.value, e, n)), null == n && (c = !1))) : C.error("Invalid Input");
                        }
                        f.append(C.ui), f.append(x), w.ui.on("click", ()=>{
                            if (0 == u.editMode) T();
                            else {
                                var e = r;
                                y.getValue(), 0 == Object.keys(m.value).length ? C.error("Please enter some value") : T(e);
                            }
                        }), k.ui.on("click", ()=>{
                            u.editMode ? f.hide() : n.detach();
                        }), n.on("keyup", (e)=>{
                            "Enter" == e.key && w.ui.trigger("click");
                        }), this.updateStyle = function(e, n) {
                            y.setValue(n), S(e);
                        };
                    }
                    d.append(f.ui), p.append(g.ui), d.append(p), "left" == n ? r.css("text-align", "left") : r.css("text-align", "right"), d.css("box-sizing", "border-box"), d.css("padding", "3px"), d.css("background-color", "#a4a4a4"), d.css("border-radius", "4px"), u.css("overflow", "hidden"), s.css("box-sizing", "content-box"), g.ui.on("click", ()=>{
                        if (c) f.warning("Please complete editing the current form");
                        else {
                            var e = new v(a);
                            s.append(e.ui), c = !0;
                        }
                    }), this.addStyle = function(e, n, t) {
                        var i = new v(e);
                        s.append(i.ui), i.updateStyle(n, t);
                    };
                }
                function h(e) {
                    var n = this.ui = i("<div></div>"), t = (e = e || {}).delay || 5e3, o = null == e.autohide || e.autohide;
                    function r() {
                        o && setTimeout(()=>{
                            n.hide();
                        }, t);
                    }
                    n.css({
                        "font-family": "Arial",
                        "font-size": "14px",
                        padding: "3px",
                        "border-radius": "4px",
                        "margin-top": "2px",
                        "margin-bottm": "2px",
                        "font-weight": "bold",
                        "text-align": "center"
                    }), n.hide(), this.error = function(e) {
                        n.css({
                            background: "lightcoral",
                            color: "darkred",
                            border: "1px solid darkred"
                        }), n.text(e), n.show(), r();
                    }, this.warning = function(e) {
                        n.css({
                            background: "#fff3cd",
                            color: "#856409",
                            border: "1px solid #856409"
                        }), n.text(e), n.show(), r();
                    }, this.message = function(e) {
                        n.css({
                            background: "lightgreen",
                            color: "green",
                            border: "1px solid green"
                        }), n.text(e), n.show(), r();
                    };
                }
                function v() {
                    var n = this.ui = i("<div></div>");
                    n.css("position", "absolute"), n.css("border-radius", "3px"), n.css("background", "#f1f1f1"), n.css("z-index", 99);
                    var o = i("<div></div>");
                    o.css("position", "relative"), n.css("opacity", "0.85"), n.append(o), o.css({
                        background: "#f1f1f1",
                        "border-radius": "4px",
                        padding: "4px",
                        width: "140px"
                    });
                    var r = {
                        background: "#d3e2ee",
                        padding: "2px",
                        "font-family": "Arial",
                        "font-weight": "bold",
                        "font-size": "12px",
                        "border-radius": "2px"
                    }, a = i("<div></div>");
                    a.text("Remove Label"), a.css(r), a.css("margin-bottom", "3px"), o.append(a), a.hide();
                    var s = Object.keys(e), c = [], u = [];
                    s.forEach((n)=>{
                        !0 === e[n].prop && c.push(n);
                    });
                    var d = i("<div></div>");
                    function p(e, n) {
                        this.row = i("<tr></tr>");
                        var t = this.control = {
                            key: "",
                            value: null,
                            active: !0,
                            name: e
                        };
                        this.key = e, this.value = n;
                        var o = new $3Dmol.UI.Form.Checkbox(t), r = i("<td></td>");
                        r.append(o.ui);
                        var a = i("<td></td>"), s = i("<td></td>").text(":"), l = i("<td></td>");
                        this.row.append(r, a, s, l), a.text(e), "number" == typeof n ? l.text(n.toFixed(2)) : l.text(n.replace(/\^/g, "")), console.log("Type of value", typeof n, n);
                    }
                    o.append(d);
                    var g = i("<div></div>");
                    o.append(g);
                    var f = i("<div></div>");
                    o.append(f), f.css("width", "100%");
                    var v = i("<div></div>");
                    f.append(v), v.text("Add Label"), v.css(r), v.css("margin-bottom", "3px"), v.hide();
                    var m = i("<div></div>");
                    o.append(m), o.css({
                        position: "relative"
                    }), m.css({
                        background: "#dfdfdf",
                        "border-radius": "3px",
                        "font-family": "Arial",
                        "font-weight": "bold",
                        "font-size": "12px",
                        "box-sizing": "border-box",
                        width: "100%"
                    }), m.hide();
                    var x = new h({
                        autohide: !1
                    });
                    function w() {
                        var e = {};
                        return u.forEach((n)=>{
                            !0 === n.control.value && (e[n.key] = n.value);
                        }), 0 != Object.keys(e).length ? e : null;
                    }
                    function k() {
                        m.children().detach(), m.hide();
                    }
                    o.append(x.ui), n.hide(), this.hidden = !0, this.atom = null, a.on("click", {
                        atom: this.atom
                    }, function() {
                        t.removeAtomLabel(a.atom);
                    }), this.show = function(e, o, r, s) {
                        s ? (a.show(), a.atom = r) : (a.hide(), a.atom = null), x.ui.hide(), v.hide(), 0 == t.getSelectionList().length ? x.message("Please create selections before adding label") : v.show(), k(), y(n, e, o), n.show(), this.hidden = !1, r ? (function(e) {
                            d.empty(), u = [];
                            var n = i("<table></table>");
                            c.forEach((t)=>{
                                var i = new p(t, e[t]);
                                n.append(i.row), u.push(i);
                            }), d.append(n);
                            var o = i("<div><div>"), r = i("<div><div>");
                            r.text("Style"), r.css({
                                display: "inline-block",
                                "font-family": "Arial",
                                "font-size": "14px",
                                "margin-right": "6px",
                                "margin-left": "6px"
                            });
                            var a = new $3Dmol.UI.Form.ListInput(r, Object.keys($3Dmol.labelStyles));
                            a.ui.css({
                                display: "inline-block"
                            }), a.setValue("milk"), o.append(r, a.ui), d.append(o);
                            var s = new b(l.tick, 18, {
                                backgroundColor: "lightgreen",
                                tooltip: "Submit"
                            }), g = new b(l.cross, 18, {
                                backgroundColor: "lightcoral",
                                tooltip: "Cancel"
                            }), f = i("<div></div>");
                            f.append(s.ui, g.ui);
                            var v = new h;
                            d.append(v.ui), d.append(f), s.ui.on("click", ()=>{
                                var n = w(), i = a.validate();
                                null != n ? i ? (t.addAtomLabel(n, e, a.getValue().value), t.exitContextMenu(!1)) : v.error("Select style for label") : v.error("No value selected for label");
                            }), g.ui.on("click", ()=>{
                                t.exitContextMenu();
                            });
                        }(r), this.atom = r) : d.empty();
                    }, this.hide = function(e) {
                        if (e) {
                            var i = w();
                            null != i && t.addAtomLabel(i, this.atom);
                        }
                        n.hide(), this.hidden = !0, k();
                    }, v.on("click", function() {
                        var e, n = function() {
                            var e = i("<div></div>"), n = {
                                text: {
                                    key: "Label Text",
                                    value: null,
                                    active: !0
                                },
                                style: {
                                    key: "Style",
                                    value: null,
                                    active: !0
                                },
                                sel: {
                                    key: "Selection",
                                    value: null,
                                    active: !0
                                }
                            }, o = i("<div></div>"), r = new b(l.minus, 16), a = new b(l.tick, 16, {
                                backgroundColor: "lightgreen",
                                tooltip: "Submit"
                            }), s = new b(l.cross, 16, {
                                backgroundColor: "lightcoral",
                                tooltip: "Cancel"
                            });
                            o.append(r.ui, a.ui, s.ui), r.ui.hide(), e.append(o);
                            var c = i("<div></div>"), u = i("<div></div>").text("Label Text"), d = new $3Dmol.UI.Form.Input(n.text);
                            c.append(u, d.ui), d.setWidth(126), e.append(c);
                            var p = i("<div></div>"), g = i("<div></div>").text("Label Style"), f = new $3Dmol.UI.Form.ListInput(n.style, Object.keys($3Dmol.labelStyles));
                            f.setValue("milk"), p.append(g, f.ui), e.append(p);
                            var h = t.getSelectionList(), v = i("<div></div>"), m = i("<div></div>").text("Label Selection"), y = new $3Dmol.UI.Form.ListInput(n.sel, h);
                            return v.append(m, y.ui), e.append(v), e.css({
                                padding: "2px"
                            }), a.ui.on("click", ()=>{
                                var e = !0;
                                f.validate() || (e = !1), d.validate() || (e = !1), y.validate() || (e = !1), e && t.addLabel(n);
                            }), s.ui.on("click", ()=>{
                                t.exitContextMenu();
                            }), r.ui.on("click", ()=>{
                                t.removeLabel();
                            }), e.on("keyup", (e)=>{
                                "Enter" == e.key && a.ui.trigger("click");
                            }), {
                                boundingBox: e,
                                text: d,
                                style: f,
                                selection: y,
                                editMode: function() {
                                    r.ui.show();
                                }
                            };
                        }();
                        e = n, m.children().detach(), m.append(e.boundingBox), m.show();
                    });
                }
                function m() {
                    var e = this.ui = i("<div></div>"), n = !1;
                    e.css({
                        position: "absolute",
                        width: "140px",
                        "text-align": "right"
                    });
                    var o = new b(l.surface, 20, {
                        tooltip: "Toggle Surface Menu"
                    });
                    e.append(o.ui);
                    var a = i("<div></div>");
                    e.append(a), e.css({
                        overflow: "visible"
                    });
                    var s = i("<div></div>");
                    s.css({
                        "max-height": .8 * d,
                        "overflow-y": "auto",
                        "overflow-x": "hidden"
                    }), this.updateScrollBox = function(e) {
                        s.css("max-height", .8 * e);
                    }, a.append(s);
                    var c = new h;
                    a.append(c.ui);
                    var u = i("<div></div>"), p = new b(l.plus, 20, {
                        tooltip: "Add New Surface"
                    });
                    u.append(p.ui), a.append(u), a.hide();
                    var g = this.surfaces = [];
                    function f() {
                        var e = {
                            surfaceType: {
                                key: "Surface Type",
                                value: null
                            },
                            surfaceStyle: {
                                key: "Surface Style",
                                value: null
                            },
                            surfaceFor: {
                                key: "Selection Atoms",
                                value: null
                            },
                            surfaceOf: {
                                key: "Surface Generating Atoms",
                                value: null
                            }
                        }, o = this.ui = i("<div></div>");
                        o.css({
                            "margin-top": "3px",
                            padding: "6px",
                            "border-radius": "3px",
                            "background-color": "#e8e8e8",
                            width: "100%",
                            "box-sizing": "border-box",
                            opacity: .9,
                            "text-align": "left"
                        });
                        var a = this.heading = i("<div></div>"), s = i("<div></div>");
                        s.css({
                            "text-align": "right"
                        });
                        var c = i("<div></div>"), u = new b(l.pencil, 16, {
                            tooltip: "Edit Surface"
                        }), d = new b(l.minus, 16, {
                            bfr: .5,
                            backgroundColor: "#f06f6f"
                        });
                        c.append(d.ui), c.append(u.ui), c.editButton = u, c.removeButton = d, c.editMode = !1;
                        var p = {
                            "font-weight": "bold",
                            "font-family": "Arial",
                            "font-size": "12px"
                        };
                        a.css("display", "inline-block"), a.css(p), c.css("display", "inline-block"), s.hide(), s.append(a, c), o.append(s);
                        var f = i("<div></div>");
                        o.append(f);
                        var v = i("<div></div>"), m = i("<div></div>");
                        m.text("Surface Type"), m.css(p);
                        var y = new $3Dmol.UI.Form.ListInput(e.surfaceType, Object.keys($3Dmol.SurfaceType));
                        v.append(m, y.ui), f.append(v), y.setValue(Object.keys($3Dmol.SurfaceType)[0]);
                        var x = i("<div></div>"), w = i("<div></div>"), k = new $3Dmol.UI.Form(r, e.surfaceStyle);
                        x.append(w, k.ui), f.append(x);
                        var C = i("<div></div>"), S = i("<div></div>");
                        S.text("Surface Atoms"), S.css(p);
                        var T = "Atoms in the selections will be used to generate the surface", D = "All the atoms will be used to generate the surface", L = new $3Dmol.UI.Form.ListInput(e.surfaceOf, [
                            "self",
                            "all"
                        ]), A = i("<div></div>");
                        A.css({
                            "background-color": "#e4e4e4",
                            border: "1px solid grey",
                            color: "grey",
                            padding: "2px",
                            "border-radius": "3px",
                            "font-family": "Arial",
                            "font-size": "12px",
                            "font-weight": "bold",
                            "margin-top": "3px"
                        }), A.hide(), L.update = function(e) {
                            "self" == e.value ? (A.show(), A.text(T)) : "all" == e.value ? (A.show(), A.text(D)) : A.hide();
                        }, L.setValue("all"), C.append(S, L.ui, A), f.append(C);
                        var E = [
                            "all"
                        ].concat(t.getSelectionList()), M = i("<div></div>"), j = i("<div></div>");
                        j.text("Show Atoms"), j.css(p);
                        var I = new $3Dmol.UI.Form.ListInput(e.surfaceFor, E);
                        I.setValue("all"), M.append(j, I.ui), f.append(M);
                        var z = new h;
                        f.append(z.ui);
                        var N = i("<div></div>"), O = new b(l.tick, 16, {
                            backgroundColor: "lightgreen",
                            tooltip: "Submit"
                        }), V = new b(l.cross, 16, {
                            backgroundColor: "lightcoral",
                            tooltip: "Cancel"
                        });
                        N.append(O.ui), N.append(V.ui), f.append(N), d.ui.on("click", {
                            surfaceBox: o
                        }, function(e) {
                            var n = e.data.surfaceBox.data("surf-id");
                            o.remove(), t.removeSurface(n);
                        }), u.ui.on("click", function() {
                            f.toggle();
                        });
                        var H = this.validateInput = function() {
                            var e = !0;
                            return I.validate() || (e = !1), L.validate() || (e = !1), y.validate() || (e = !1), k.validate() || (e = !1), e;
                        };
                        function B(e) {
                            o.data("surf-id", e), a.text("surf#" + e), s.show(), c.editMode = !0, f.hide();
                        }
                        O.ui.on("click", {}, function() {
                            if (I.getValue(), L.getValue(), y.getValue(), k.getValue(), H()) {
                                if (!1 === c.editMode) {
                                    var i = t.addSurface(e);
                                    e.id = i, B(i), g.push(this), n = !1;
                                } else k.getValue(), e.id = o.data("surf-id"), console.log("Edit surface called"), t.editSurface(e), f.hide();
                            } else z.error("Invalid Input");
                        }), V.ui.on("click", {}, function() {
                            0 == c.editMode ? (o.detach(), o.remove(), n = !1) : (f.hide(), c.editMode = !1);
                        }), o.on("keyup", (e)=>{
                            "Enter" == e.key && O.ui.trigger("click");
                        }), this.editSurface = function(e, n) {
                            B(e), y.setValue(n.surfaceType.value), k.setValue(n.surfaceStyle.value), L.setValue(n.surfaceOf.value), I.setValue(n.surfaceFor.value), I.getValue(), L.getValue(), y.getValue(), k.getValue();
                        };
                    }
                    p.ui.on("click", {
                        surfaces: this
                    }, function() {
                        if (n) c.warning("Please complete the previous form first");
                        else {
                            var e = new f;
                            s.append(e.ui), n = !0;
                        }
                    }), o.ui.on("click", ()=>{
                        a.toggle();
                    }), this.empty = function() {
                        s.empty(), n = !1;
                    }, this.addSurface = function(e, n) {
                        var t = new f;
                        s.append(t.ui), t.editSurface(e, n);
                    };
                }
                function y(e, n, t) {
                    e.css("left", n), e.css("top", t);
                }
                function x(e, n, t = "left", i = "top", o = 0, r = 0) {
                    n.css("z-index", 99);
                    var a = w(e).width, s = function(e) {
                        return w(e).height;
                    }(e), l = n.outerWidth(), c = n.outerHeight(), u = parseInt(e.css("padding").replace("px", ""));
                    u = u || 0;
                    var d = {
                        left: 0,
                        top: 0
                    };
                    d.left = "left" == t ? u + o : "center" == t ? a / 2 - l / 2 + o : "right" == t ? a - l - u + o : o + u, d.top = "top" == i ? r + u : "center" == i ? s / 2 - c / 2 + r : "bottom" == i ? s - c - r - u : r + u, y(n, d.left, d.top);
                }
                function w(e) {
                    let n = e[0], t = n.getBoundingClientRect();
                    if (0 == t.width && 0 == t.height && "none" === n.style.display) {
                        let e = n.style.position, i = n.style.visibility;
                        n.style.display = "block", n.style.visibility = "hidden", n.style.position = "absolute", t = n.getBoundingClientRect(), n.style.display = "none", n.style.visibility = i, n.style.position = e;
                    }
                    return t;
                }
                function b(e, n, t) {
                    var o = (t = t || {}).bfr * n || n / 4, r = t.backgroundColor || "rgb(177, 194, 203)", a = t.color || "black", s = t.hoverable || "true", l = t.tooltip || null, c = this.ui = i("<div></div>"), u = i("<div></div>");
                    c.append(u), c.css("box-sizing", "border-box"), c.css("display", "inline-block"), c.css("margin", "3px"), c.css("height", n), c.css("width", n), c.css("border-radius", o + "px"), c.css("color", a), c.css("background", r), u.css("display", "flex"), u.css("justify-content", "center"), u.css("align-items", "center"), u.css("padding", "2px"), this.setSVG = function(e) {
                        u.empty();
                        var n = i(e);
                        u.append(n);
                    }, this.setSVG(e), c.css({
                        position: "relative"
                    }), null != l && c.attr("title", l), "true" == s && (c.on("mouseenter", ()=>{
                        c.css("box-shadow", "0px 0px 3px black");
                    }).on("mouseleave", ()=>{
                        c.css("box-shadow", "none");
                    }), c.on("mousedown", ()=>{
                        c.css("box-shadow", "0px 0px 1px black");
                    }), c.on("mouseup", ()=>{
                        c.css("box-shadow", "0px 0px 3px black");
                    }), c.on("mousemove", ()=>{}));
                }
                this.tools = function() {
                    var e = new p;
                    u.append(e.ui), x(u, e.ui, "left", "top");
                    var n = new v;
                    u.append(n.ui), y(n.ui, 100, 100);
                    var i = new m;
                    u.append(i.ui), x(u, i.ui, "right", "top", 0, e.ui.height() + 5);
                    var o = new g(l.select);
                    return u.append(o.ui), x(u, o.ui, "left", "top", 0, e.ui.height() + 5), o.ui.on("mousedown", ()=>{
                        t.exitContextMenu();
                    }), i.ui.on("mousedown", ()=>{
                        t.exitContextMenu();
                    }), {
                        modelToolBar: e,
                        selectionBox: o,
                        contextMenu: n,
                        surfaceMenu: i
                    };
                }(), this.resize = function() {
                    var e = this.tools.selectionBox, n = this.tools.surfaceMenu, t = this.tools.modelToolBar, i = u.height();
                    x(u, t.ui, "left", "top"), x(u, e.ui, "left", "top", 0, t.ui.height() + 5), e.updateScrollBox(i), x(u, n.ui, "right", "top", 0, t.ui.height() + 5), n.updateScrollBox(i);
                };
            };
        }(), (()=>{
            var e = t(9755);
            $3Dmol.StateManager = function(n, t) {
                (t = t || n.getConfig()).ui = !0;
                var i = e(n.getCanvas()), o = e(n.container), r = {
                    height: o.height(),
                    width: o.width(),
                    offset: i.offset(),
                    ui: t.ui || void 0
                }, a = {}, s = {}, l = {}, c = {};
                function u(e) {
                    for(var n = Object.keys(a), t = null, i = 0; i < n.length; i++){
                        var o = a[n[i]].spec, r = !0, s = Object.keys(e);
                        if (Object.keys(o).length == s.length) {
                            for(var l = 0; l < s.length; l++)if (o[s[l]] != e[s[l]]) {
                                r = !1;
                                break;
                            }
                        } else r = !1;
                        if (r) {
                            t = n[i];
                            break;
                        }
                    }
                    return t;
                }
                function d() {
                    n.setStyle({}), Object.keys(a).forEach((e)=>{
                        var t = a[e];
                        t.hidden ? (n.setClickable(t.spec, !1, ()=>{}), n.enableContextMenu(t.spec, !1)) : (Object.keys(t.styles).forEach((e)=>{
                            var i = t.styles[e];
                            i.hidden || n.addStyle(t.spec, i.spec);
                        }), n.setClickable(t.spec, !0, ()=>{}), n.enableContextMenu(t.spec, !0));
                    }), n.render();
                }
                function p(e) {
                    for(var n = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < e; i++)n += t.charAt(Math.floor(62 * Math.random()));
                    return n;
                }
                this.addSelection = function(e, n = null) {
                    var t = n || p(4), i = {
                        spec: e,
                        styles: {},
                        hidden: !1
                    };
                    return null == n ? a[t] = i : a[t].spec = i.spec, d(), t;
                }, this.checkAtoms = function(e) {
                    return n.selectedAtoms(e).length > 0;
                }, this.toggleHide = function(e) {
                    a[e].hidden = !a[e].hidden, d();
                }, this.removeSelection = function(e) {
                    delete a[e], d();
                }, this.addStyle = function(e, n, t = null) {
                    var i = a[n], o = {
                        spec: e,
                        hidden: !1
                    }, r = null;
                    return null == t ? (r = p(4), i.styles[r] = o) : (r = t, i.styles[r].spec = e), d(), r;
                }, this.removeStyle = function(e, n) {
                    delete a[e].styles[n], d();
                }, this.toggleHideStyle = function(e, n) {
                    a[e].styles[n].hidden = !a[e].styles[n].hidden, d();
                }, this.addSurface = function(e, t) {
                    var i = p(4);
                    e.id = i;
                    var o = e.surfaceStyle.value;
                    null == o && (o = {});
                    var r = "all" == e.surfaceFor.value ? {
                        spec: {}
                    } : a[e.surfaceFor.value], l = "self" == e.surfaceOf.value ? r.spec : {};
                    return n.addSurface($3Dmol.SurfaceType[e.surfaceType.value], o, r.spec, l).then((e)=>{
                        s[i] = e[0], null != t && t(i, e[0]);
                    }, ()=>{}), i;
                }, this.removeSurface = function(e) {
                    n.removeSurface(s[e]), delete s[e];
                }, this.editSurface = function(e) {
                    var t = e.surfaceStyle.value || {}, i = "all" == e.surfaceFor.value ? {
                        spec: {}
                    } : a[e.surfaceFor.value], o = "self" == e.surfaceOf.value ? i.spec : {};
                    n.removeSurface(s[e.id]), console.log(e), n.addSurface($3Dmol.SurfaceType[e.surfaceType.value], t, i.spec, o).then((n)=>{
                        s[e.id] = n[0];
                    });
                }, this.getSelectionList = function() {
                    return Object.keys(a);
                }, this.openContextMenu = function(e, n, t) {
                    var i = !1;
                    e && (i = null != (i = Object.keys(c).find((n)=>n == e.index))), this.ui && this.ui.tools.contextMenu.show(n, t, e, i);
                }, n.userContextMenuHandler = this.openContextMenu.bind(this), this.addLabel = function(e) {
                    l[e.sel.value] = l[e.sel.value] || [];
                    var t = $3Dmol.labelStyles[e.style.value], i = a[e.sel.value], o = l[e.sel.value].length;
                    t.screenOffset = new $3Dmol.Vector2(0, -1 * o * 35), l[e.sel.value].push(n.addLabel(e.text.value, t, i.spec)), this.ui.tools.contextMenu.hide();
                }, this.addAtomLabel = function(e, t, i = "milk") {
                    var o = Object.keys(c).find((e)=>e == t.index);
                    (o = null != o) && this.removeAtomLabel(t), c[t.index] = c[t.index] || null;
                    var r = $3Dmol.deepCopy($3Dmol.labelStyles[i]);
                    r.position = {
                        x: t.x,
                        y: t.y,
                        z: t.z
                    };
                    var a = [];
                    for(let n in e)a.push(`${n} : ${e[n]}`);
                    a = a.join("\n"), c[t.index] = n.addLabel(a, r);
                }, this.exitContextMenu = function(e = !1) {
                    this.ui && this.ui.tools.contextMenu.hide(e);
                }, n.container.addEventListener("wheel", this.exitContextMenu.bind(this), {
                    passive: !1
                }), this.removeLabel = function() {
                    this.ui.tools.contextMenu.hide();
                }, this.removeAtomLabel = function(e) {
                    var t = c[e.index];
                    n.removeLabel(t), delete c[e.index], this.ui.tools.contextMenu.hide();
                }, this.addModel = function(e) {
                    n.removeAllModels(), n.removeAllSurfaces(), n.removeAllLabels(), n.removeAllShapes();
                    var t = e.urlType.value + ":" + e.url.value;
                    $3Dmol.download(t, n, {}, ()=>{
                        this.ui.tools.modelToolBar.setModel(e.url.value.toUpperCase());
                    }), a = {}, s = {}, c = {}, l = {}, this.ui.tools.selectionBox.empty(), this.ui.tools.surfaceMenu.empty();
                }, this.createSelectionAndStyle = function(e, n) {
                    var t = u(e);
                    null == t && (t = this.addSelection(e));
                    var i = null;
                    0 != Object.keys(n).length && (i = this.addStyle(n, t)), this.ui.tools.selectionBox.editSelection(t, e, i, n);
                }, this.createSurface = function(e, n, t, i) {
                    var o = u(n);
                    null == o && (o = this.addSelection()), this.ui.tools.selectionBox.editSelection(o, n, null);
                    var r = {
                        surfaceType: {
                            value: e = Object.keys(t)[0]
                        },
                        surfaceStyle: {
                            value: t[e]
                        },
                        surfaceOf: {
                            value: "self"
                        },
                        surfaceFor: {
                            value: o
                        }
                    }, a = p(4);
                    s[a] = i, this.ui.tools.surfaceMenu.addSurface(a, r);
                }, this.setModelTitle = function(e) {
                    this.ui.tools.modelToolBar.setModel(e);
                }, i.on("click", ()=>{
                    this.ui && 0 == this.ui.tools.contextMenu.hidden && this.ui.tools.contextMenu.hide();
                }), this.showUI = function() {
                    return new $3Dmol.UI(this, r, o);
                }, 1 == t.ui && (this.ui = this.showUI()), this.initiateUI = function() {
                    this.ui = new $3Dmol.UI(this, r, o), d();
                }, this.updateUI = function() {
                    this.ui && this.ui.resize();
                }, window.addEventListener("resize", this.updateUI.bind(this)), void 0 !== window.ResizeObserver && (this.divwatcher = new window.ResizeObserver(this.updateUI.bind(this)), this.divwatcher.observe(n.container));
            };
        })(), $3Dmol.UI.Icons = function() {
            this.move = '<svg  id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <path d="M31.338,14.538L27.38,10.58C26.994,10.193,26.531,10,26,10c-1.188,0-2,1.016-2,2c0,0.516,0.186,0.986,0.58,1.38L25.2,14H18  V6.8l0.62,0.62C19.014,7.814,19.484,8,20,8c0.984,0,2-0.813,2-2c0-0.531-0.193-0.994-0.58-1.38l-3.973-3.974  C17.08,0.279,16.729,0,16,0s-1.135,0.334-1.463,0.662L10.58,4.62C10.193,5.006,10,5.469,10,6c0,1.188,1.016,2,2,2  c0.516,0,0.986-0.186,1.38-0.58L14,6.8V14H6.8l0.62-0.62C7.814,12.986,8,12.516,8,12c0-0.984-0.813-2-2-2  c-0.531,0-0.994,0.193-1.38,0.58l-3.958,3.958C0.334,14.866,0,15.271,0,16s0.279,1.08,0.646,1.447L4.62,21.42  C5.006,21.807,5.469,22,6,22c1.188,0,2-1.016,2-2c0-0.516-0.186-0.986-0.58-1.38L6.8,18H14v7.2l-0.62-0.62  C12.986,24.186,12.516,24,12,24c-0.984,0-2,0.813-2,2c0,0.531,0.193,0.994,0.58,1.38l3.957,3.958C14.865,31.666,15.271,32,16,32  s1.08-0.279,1.447-0.646l3.973-3.974C21.807,26.994,22,26.531,22,26c0-1.188-1.016-2-2-2c-0.516,0-0.986,0.186-1.38,0.58L18,25.2V18  h7.2l-0.62,0.62C24.186,19.014,24,19.484,24,20c0,0.984,0.813,2,2,2c0.531,0,0.994-0.193,1.38-0.58l3.974-3.973  C31.721,17.08,32,16.729,32,16S31.666,14.866,31.338,14.538z"/>\n    </svg>\n    ', this.rotate = '<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">\n    <style type="text/css">\n    .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n    </style>\n    <polyline class="st0" points="19,19 24,19 24,24 "/>\n    <polyline class="st0" points="6,23 11,23 11,18 "/>\n    <path class="st0" d="M24,19.4c-0.7,0.8-1.4,1.6-2.2,2.4c-7,7-15.3,10.2-18.5,7s-0.1-11.5,7-18.5s15.3-10.2,18.5-7\n    c1.4,1.4,1.6,3.6,0.8,6.3"/>\n    <path class="st0" d="M11,22.5c-0.3-0.2-0.5-0.5-0.8-0.8c-7-7-10.2-15.3-7-18.5s11.5-0.1,18.5,7s10.2,15.3,7,18.5\n    c-1.7,1.7-4.8,1.6-8.4,0.1"/>\n    </svg>', this.pencil = '\n    <svg\n   viewBox="0 0 7.4083332 7.4083335"\n   version="1.1"\n   id="svg46458"\n   inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n   sodipodi:docname="pencil.svg"\n   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg">\n  <sodipodi:namedview\n     id="namedview46460"\n     pagecolor="#ffffff"\n     bordercolor="#666666"\n     borderopacity="1.0"\n     inkscape:pageshadow="2"\n     inkscape:pageopacity="0.0"\n     inkscape:pagecheckerboard="0"\n     inkscape:document-units="mm"\n     showgrid="false"\n     units="px"\n     inkscape:zoom="11.859035"\n     inkscape:cx="39.252773"\n     inkscape:cy="-0.54810532"\n     inkscape:window-width="1920"\n     inkscape:window-height="1017"\n     inkscape:window-x="-8"\n     inkscape:window-y="-8"\n     inkscape:window-maximized="1"\n     inkscape:current-layer="layer1" />\n  <defs\n     id="defs46455" />\n  <g\n     inkscape:label="Layer 1"\n     inkscape:groupmode="layer"\n     id="layer1">\n    <g\n       id="g46369"\n       style="opacity:0.883991"\n       transform="matrix(1.4892662,-0.15686655,0.15686655,1.4892662,-53.265394,-119.92352)">\n      <g\n         id="g49150"\n         transform="matrix(0.91743541,0,0,0.91743541,23.648257,-4.2024208)"\n         style="opacity:0.883991">\n        <path\n           style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\n           d="m 3.8020268,100.20944 0.4890573,-1.325191 3.1552092,-2.461061 0.8203543,1.009666 -3.2340893,2.476838 z"\n           id="path47163"\n           sodipodi:nodetypes="cccccc" />\n        <path\n           style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\n           d="m 4.7012611,98.537178 -0.2738716,0.535677 0.5184006,-0.125499 -0.1893126,0.512722 0.5048334,-0.102546 -0.2287526,0.55216"\n           id="path47167"\n           sodipodi:nodetypes="cccccc" />\n        <path\n           style="fill:none;stroke:#000000;stroke-width:0.288395px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\n           d="m 4.0143928,99.803763 0.189158,0.257937 -0.4015317,0.14774 z"\n           id="path46061" />\n      </g>\n      <path\n         style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\n         d="m 29.910684,84.806844 0.691621,0.847804"\n         id="path46176" />\n    </g>\n  </g>\n</svg>\n\n    ', this.listArrow = '\n    <svg\n    viewBox="0 0 7.4083332 7.4083335"\n    version="1.1"\n    id="svg41603"\n    inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n    sodipodi:docname="listArrow.svg"\n    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:svg="http://www.w3.org/2000/svg">\n   <sodipodi:namedview\n      id="namedview41605"\n      pagecolor="#ffffff"\n      bordercolor="#666666"\n      borderopacity="1.0"\n      inkscape:pageshadow="2"\n      inkscape:pageopacity="0.0"\n      inkscape:pagecheckerboard="0"\n      inkscape:document-units="mm"\n      showgrid="false"\n      units="px"\n      inkscape:zoom="16.771208"\n      inkscape:cx="16.635653"\n      inkscape:cy="11.120248"\n      inkscape:window-width="1920"\n      inkscape:window-height="1017"\n      inkscape:window-x="-8"\n      inkscape:window-y="-8"\n      inkscape:window-maximized="1"\n      inkscape:current-layer="layer1" />\n   <defs\n      id="defs41600" />\n   <g\n      inkscape:label="Layer 1"\n      inkscape:groupmode="layer"\n      id="layer1">\n     <path\n        style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"\n        d="M 1.991198,0.89301893 5.7166459,3.7041667 1.991198,6.5153145 Z"\n        id="path42297"\n        sodipodi:nodetypes="cccc" />\n   </g>\n </svg>\n \n    ', this.option = ' <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title>69.option</title><g id="_69.option" data-name="69.option"><rect class="cls-1" x="1" y="1" width="9" height="9" rx="2" ry="2"/><rect class="cls-1" x="14" y="1" width="9" height="9" rx="2" ry="2"/><rect class="cls-1" x="14" y="14" width="9" height="9" rx="2" ry="2"/><rect class="cls-1" x="1" y="14" width="9" height="9" rx="2" ry="2"/></g></svg>', this.minus = '<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>', this.plus = '<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>', this.paintbrush = '<?xml version="1.0" encoding="iso-8859-1"?>\n    <!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 444.892 444.892" style="enable-background:new 0 0 444.892 444.892;" xml:space="preserve">\n    <g id="XMLID_476_">\n    <path id="XMLID_503_" d="M440.498,173.103c5.858-5.857,5.858-15.355,0-21.213l-22.511-22.511c-5.091-5.091-13.084-5.846-19.038-1.8\n    l-47.332,32.17l31.975-47.652c3.993-5.951,3.219-13.897-1.85-18.964l-48.83-48.83c-4.508-4.508-11.372-5.675-17.114-2.908\n    l-8.443,4.065l4.043-8.97c2.563-5.685,1.341-12.361-3.068-16.771L293.002,4.393c-5.857-5.857-15.355-5.857-21.213,0\n    l-119.06,119.059l168.71,168.71L440.498,173.103z"/>\n    <path id="XMLID_1199_" d="M130.56,145.622l-34.466,34.466c-2.813,2.813-4.394,6.628-4.394,10.606s1.58,7.794,4.394,10.606\n    l32.694,32.694c6.299,6.299,9.354,14.992,8.382,23.849c-0.971,8.851-5.843,16.677-13.366,21.473\n    C27.736,340.554,18.781,349.51,15.839,352.453c-21.119,21.118-21.119,55.48,0,76.6c21.14,21.14,55.504,21.098,76.6,0\n    c2.944-2.943,11.902-11.902,73.136-107.965c4.784-7.505,12.607-12.366,21.462-13.339c8.883-0.969,17.575,2.071,23.859,8.354\n    l32.694,32.694c5.857,5.857,15.356,5.857,21.213,0l34.467-34.467L130.56,145.622z M70.05,404.825c-8.28,8.28-21.704,8.28-29.983,0\n    c-8.28-8.28-8.28-21.704,0-29.983c8.28-8.28,21.704-8.28,29.983,0C78.33,383.121,78.33,396.545,70.05,404.825z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n    ', this.select = '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n    <g>\n    <g>\n    <path d="M416,149.333c-8.768,0-16.939,2.667-23.723,7.211C386.432,139.947,370.581,128,352,128\n    c-8.768,0-16.939,2.667-23.723,7.211c-5.845-16.597-21.696-28.544-40.277-28.544c-7.765,0-15.061,2.091-21.333,5.739V42.667\n    C266.667,19.136,247.531,0,224,0s-42.667,19.136-42.667,42.667v249.408l-58.645-29.333C113.856,258.325,103.957,256,94.08,256\n    c-22.485,0-40.747,18.283-40.747,40.875c0,10.901,4.245,21.12,11.947,28.821l137.941,137.941C234.389,494.827,275.883,512,320,512\n    c76.459,0,138.667-62.208,138.667-138.667V192C458.667,168.469,439.531,149.333,416,149.333z M437.333,373.333\n    c0,64.704-52.651,117.333-117.355,117.333c-38.421,0-74.517-14.955-101.653-42.133L80.363,310.592\n    c-3.669-3.648-5.696-8.533-5.696-13.845c0-10.709,8.704-19.413,19.413-19.413c6.592,0,13.163,1.557,19.072,4.501l74.091,37.035\n    c3.307,1.643,7.253,1.472,10.368-0.469c3.136-1.941,5.056-5.376,5.056-9.067V42.667c0-11.755,9.557-21.333,21.333-21.333\n    s21.333,9.579,21.333,21.333v202.667c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667v-96\n    c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333v96c0,5.888,4.779,10.667,10.667,10.667\n    s10.667-4.779,10.667-10.667v-74.667c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333v74.667\n    c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667V192c0-11.755,9.557-21.333,21.333-21.333\n    s21.333,9.579,21.333,21.333V373.333z"/>\n    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>', this.movie = {}, this.movie.play = '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">\n    <g id="XMLID_228_">\n    <path id="XMLID_229_" d="M236.95,152.281l-108-67.501c-4.624-2.89-10.453-3.044-15.222-0.4C108.959,87.024,106,92.047,106,97.5v135\n    c0,5.453,2.959,10.476,7.728,13.12c2.266,1.256,4.77,1.88,7.271,1.88c2.763,0,5.523-0.763,7.95-2.28l108-67.499\n    c4.386-2.741,7.05-7.548,7.05-12.72C244,159.829,241.336,155.022,236.95,152.281z"/>\n    <path id="XMLID_230_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300\n    c-74.44,0-135-60.561-135-135S90.56,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    ', this.movie.stop = '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">\n    <g id="XMLID_223_">\n    <path id="XMLID_224_" d="M225.75,89.25h-121.5c-8.284,0-15,6.716-15,15v121.5c0,8.284,6.716,15,15,15h121.5c8.284,0,15-6.716,15-15\n    v-121.5C240.75,95.966,234.034,89.25,225.75,89.25z"/>\n    <path id="XMLID_225_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300\n    c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    ', this.movie.pause = '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 271.953 271.953" style="enable-background:new 0 0 271.953 271.953;" xml:space="preserve">\n    <g>\n    <g>\n    <path style="fill:#010002;" d="M135.977,271.953c75.097,0,135.977-60.879,135.977-135.977S211.074,0,135.977,0S0,60.879,0,135.977\n    S60.879,271.953,135.977,271.953z M135.977,21.756c62.979,0,114.22,51.241,114.22,114.22s-51.241,114.22-114.22,114.22\n    s-114.22-51.241-114.22-114.22S72.992,21.756,135.977,21.756z"/>\n    <path style="fill:#010002;" d="M110.707,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598\n    c-7.511,0-13.598,6.086-13.598,13.598v103.342C97.109,194.028,103.195,200.114,110.707,200.114z"/>\n    <path style="fill:#010002;" d="M165.097,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598\n    S151.5,75.663,151.5,83.174v103.342C151.5,194.028,157.586,200.114,165.097,200.114z"/>\n    </g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    ', this.movie.next = '\n    <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n    <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\n    <svg\n    version="1.1"\n    id="Capa_1"\n    x="0px"\n    y="0px"\n    viewBox="0 0 30.05 30.05"\n    style="enable-background:new 0 0 30.05 30.05;"\n    xml:space="preserve"\n    sodipodi:docname="next.svg"\n    inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:svg="http://www.w3.org/2000/svg"><defs\n    id="defs73" /><sodipodi:namedview\n    id="namedview71"\n    pagecolor="#ffffff"\n    bordercolor="#666666"\n    borderopacity="1.0"\n    inkscape:pageshadow="2"\n    inkscape:pageopacity="0.0"\n    inkscape:pagecheckerboard="0"\n    showgrid="false"\n    inkscape:zoom="19.851347"\n    inkscape:cx="11.938737"\n    inkscape:cy="15.79238"\n    inkscape:window-width="1920"\n    inkscape:window-height="1017"\n    inkscape:window-x="-8"\n    inkscape:window-y="-8"\n    inkscape:window-maximized="1"\n    inkscape:current-layer="Capa_1" />\n    <g\n    id="g38"\n    transform="rotate(180,15.025,15.025)">\n    <path\n    d="m 20.814,11 c -0.193,-0.102 -0.43,-0.086 -0.604,0.041 l -2.383,1.73 v -1.258 c 0,-0.217 -0.121,-0.42 -0.32,-0.514 -0.191,-0.102 -0.424,-0.086 -0.602,0.041 l -4.834,3.512 c -0.15,0.109 -0.242,0.287 -0.242,0.473 0,0.184 0.092,0.357 0.242,0.471 l 4.834,3.508 c 0.102,0.076 0.221,0.111 0.342,0.111 0.088,0 0.18,-0.018 0.26,-0.066 0.199,-0.1 0.32,-0.295 0.32,-0.516 v -1.26 l 2.383,1.73 c 0.098,0.076 0.221,0.111 0.34,0.111 0.094,0 0.182,-0.018 0.264,-0.066 0.197,-0.1 0.318,-0.295 0.318,-0.516 v -7.02 C 21.133,11.297 21.012,11.094 20.814,11 Z"\n    id="path2" />\n    <path\n    d="M 15.027,0 C 6.729,0 0,6.729 0,15.025 0,23.326 6.729,30.05 15.027,30.05 23.325,30.05 30.05,23.325 30.05,15.025 30.051,6.729 23.326,0 15.027,0 Z m 0,27.539 C 8.115,27.539 2.509,21.935 2.509,15.025 2.509,8.115 8.115,2.51 15.027,2.51 c 6.914,0 12.516,5.605 12.516,12.516 0,6.911 -5.602,12.513 -12.516,12.513 z"\n    id="path4" />\n    <path\n    d="M 10.617,11.146 H 9.225 c -0.168,0 -0.305,0.137 -0.305,0.305 v 7.146 c 0,0.168 0.137,0.309 0.305,0.309 h 1.393 c 0.17,0 0.307,-0.141 0.307,-0.309 v -7.146 c -0.001,-0.168 -0.138,-0.305 -0.308,-0.305 z"\n    id="path6" />\n    <g\n    id="g8">\n    </g>\n    <g\n    id="g10">\n    </g>\n    <g\n    id="g12">\n    </g>\n    <g\n    id="g14">\n    </g>\n    <g\n    id="g16">\n    </g>\n    <g\n    id="g18">\n    </g>\n    <g\n    id="g20">\n    </g>\n    <g\n    id="g22">\n    </g>\n    <g\n    id="g24">\n    </g>\n    <g\n    id="g26">\n    </g>\n    <g\n    id="g28">\n    </g>\n    <g\n    id="g30">\n    </g>\n    <g\n    id="g32">\n    </g>\n    <g\n    id="g34">\n    </g>\n    <g\n    id="g36">\n    </g>\n    </g>\n    <g\n    id="g40"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g42"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g44"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g46"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g48"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g50"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g52"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g54"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g56"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g58"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g60"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g62"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g64"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g66"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    <g\n    id="g68"\n    transform="rotate(180,15.025,15.025)">\n    </g>\n    </svg>\n    ', this.movie.previous = '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 30.05 30.05" style="enable-background:new 0 0 30.05 30.05;" xml:space="preserve">\n    <g>\n    <path d="M20.814,11c-0.193-0.102-0.43-0.086-0.604,0.041l-2.383,1.73v-1.258c0-0.217-0.121-0.42-0.32-0.514\n    c-0.191-0.102-0.424-0.086-0.602,0.041l-4.834,3.512c-0.15,0.109-0.242,0.287-0.242,0.473c0,0.184,0.092,0.357,0.242,0.471\n    l4.834,3.508c0.102,0.076,0.221,0.111,0.342,0.111c0.088,0,0.18-0.018,0.26-0.066c0.199-0.1,0.32-0.295,0.32-0.516v-1.26\n    l2.383,1.73c0.098,0.076,0.221,0.111,0.34,0.111c0.094,0,0.182-0.018,0.264-0.066c0.197-0.1,0.318-0.295,0.318-0.516v-7.02\n    C21.133,11.297,21.012,11.094,20.814,11z"/>\n    <path d="M15.027,0C6.729,0,0,6.729,0,15.025C0,23.326,6.729,30.05,15.027,30.05S30.05,23.325,30.05,15.025\n    C30.051,6.729,23.326,0,15.027,0z M15.027,27.539c-6.912,0-12.518-5.604-12.518-12.514S8.115,2.51,15.027,2.51\n    c6.914,0,12.516,5.605,12.516,12.516S21.941,27.539,15.027,27.539z"/>\n    <path d="M10.617,11.146H9.225c-0.168,0-0.305,0.137-0.305,0.305v7.146c0,0.168,0.137,0.309,0.305,0.309h1.393\n    c0.17,0,0.307-0.141,0.307-0.309v-7.146C10.924,11.283,10.787,11.146,10.617,11.146z"/>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    ', this.tick = '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n    <g>\n      <g>\n        <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M386.594,226.664\n          L252.747,360.511c-7.551,7.551-17.795,11.794-28.475,11.794s-20.923-4.243-28.475-11.795l-70.388-70.389\n          c-15.726-15.726-15.726-41.223,0.001-56.95c15.727-15.725,41.224-15.726,56.95,0.001l41.913,41.915l105.371-105.371\n          c15.727-15.726,41.223-15.726,56.951,0.001C402.319,185.44,402.319,210.938,386.594,226.664z"/>\n      </g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    ', this.cross = '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n       viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve">\n    <g>\n      <g>\n        <path d="M227.5,0C101.761,0,0,101.75,0,227.5C0,353.239,101.75,455,227.5,455C353.239,455,455,353.25,455,227.5\n          C455.001,101.761,353.251,0,227.5,0z M310.759,268.333c11.715,11.716,11.715,30.711,0,42.427\n          c-5.858,5.858-13.536,8.787-21.213,8.787s-15.355-2.929-21.213-8.787L227.5,269.927l-40.832,40.832\n          c-5.858,5.858-13.536,8.787-21.213,8.787s-15.355-2.929-21.213-8.787c-11.715-11.716-11.715-30.711,0-42.427l40.832-40.832\n          l-40.832-40.832c-11.715-11.716-11.715-30.711,0-42.427c11.716-11.716,30.711-11.716,42.427,0l40.832,40.832l40.832-40.832\n          c11.716-11.716,30.711-11.716,42.427,0c11.715,11.716,11.715,30.711,0,42.427L269.927,227.5L310.759,268.333z"/>\n      </g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    ', this.edit = '\n    <?xml version="1.0" encoding="iso-8859-1"?>\n    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n       viewBox="0 0 490.008 490.008" style="enable-background:new 0 0 490.008 490.008;" xml:space="preserve">\n    <g>\n      <g>\n        <g>\n          <path d="M156.7,142.865h88.6c11.5,0,20.8-9.4,20.8-20.9s-9.4-20.9-20.8-20.9h-88.6c-11.5,0-20.8,9.4-20.8,20.9\n            C135.9,133.465,145.3,142.865,156.7,142.865z"/>\n          <path d="M266.1,223.165c0-11.5-9.4-20.9-20.8-20.9h-88.6c-11.5,0-20.8,9.4-20.8,20.9s9.4,20.9,20.8,20.9h88.6\n            C256.8,244.065,266.1,234.665,266.1,223.165z"/>\n          <ellipse cx="94.2" cy="122.065" rx="20.5" ry="20.5"/>\n          <ellipse cx="94.2" cy="223.165" rx="20.5" ry="20.5"/>\n        </g>\n        <path d="M483.7,258.965l-81.3-81.3c-8.3-8.3-20.8-8.3-29.2,0l-24.3,24.2v-168.5c0-18.4-14.9-33.3-33.3-33.3H33.3\n          c-18.4,0-33.3,15-33.3,33.3v281c0,18.4,14.9,33.3,33.3,33.3h169l-4.1,4c-2.1,3.1-4.2,6.3-5.2,10.4l-20.8,102.2\n          c-3.9,20.1,10.4,28.2,24,25l102.1-20.9c4.2,0,7.3-2.1,10.4-5.2l175-175.1C487.9,284.065,495.5,272.165,483.7,258.965z M40,307.765\n          v-267.7h269v201.5l-66.5,66.1H40V307.765z M283.7,428.965l-65.6,13.6l13.5-65.7l155.2-155.3l53.1,52.1L283.7,428.965z"/>\n      </g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    <g>\n    </g>\n    </svg>\n    ', this.remove = '\n    \n<?xml version="1.0" encoding="iso-8859-1"?>\n<!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 viewBox="0 0 310.285 310.285" style="enable-background:new 0 0 310.285 310.285;" xml:space="preserve">\n<path d="M155.143,0.001C69.597,0.001,0,69.597,0,155.143c0,85.545,69.597,155.142,155.143,155.142s155.143-69.597,155.143-155.142\n	C310.285,69.597,240.689,0.001,155.143,0.001z M244.143,171.498c0,4.411-3.589,8-8,8h-163c-4.411,0-8-3.589-8-8v-32\n	c0-4.411,3.589-8,8-8h163c4.411,0,8,3.589,8,8V171.498z"/>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\n    ', this.list = '\n   <?xml version="1.0" encoding="iso-8859-1"?>\n   <!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n   <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n   <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n      viewBox="0 0 458.18 458.18" style="enable-background:new 0 0 458.18 458.18;" xml:space="preserve">\n   <g>\n     <path d="M36.09,5.948c-18.803,0-34.052,15.248-34.052,34.051c0,18.803,15.249,34.052,34.052,34.052\n       c18.803,0,34.052-15.25,34.052-34.052C70.142,21.196,54.893,5.948,36.09,5.948z"/>\n     <path d="M147.537,80h268.604c22.092,0,40-17.908,40-40s-17.908-40-40-40H147.537c-22.092,0-40,17.908-40,40S125.445,80,147.537,80z\n       "/>\n     <path d="M36.09,132.008c-18.803,0-34.052,15.248-34.052,34.051s15.249,34.052,34.052,34.052c18.803,0,34.052-15.249,34.052-34.052\n       S54.893,132.008,36.09,132.008z"/>\n     <path d="M416.142,126.06H147.537c-22.092,0-40,17.908-40,40s17.908,40,40,40h268.604c22.092,0,40-17.908,40-40\n       S438.233,126.06,416.142,126.06z"/>\n     <path d="M36.09,258.068c-18.803,0-34.052,15.248-34.052,34.051c0,18.803,15.249,34.052,34.052,34.052\n       c18.803,0,34.052-15.249,34.052-34.052C70.142,273.316,54.893,258.068,36.09,258.068z"/>\n     <path d="M416.142,252.119H147.537c-22.092,0-40,17.908-40,40s17.908,40,40,40h268.604c22.092,0,40-17.908,40-40\n       S438.233,252.119,416.142,252.119z"/>\n     <path d="M36.09,384.128c-18.803,0-34.052,15.248-34.052,34.051s15.249,34.053,34.052,34.053c18.803,0,34.052-15.25,34.052-34.053\n       S54.893,384.128,36.09,384.128z"/>\n     <path d="M416.142,378.18H147.537c-22.092,0-40,17.908-40,40s17.908,40,40,40h268.604c22.092,0,40-17.908,40-40\n       S438.233,378.18,416.142,378.18z"/>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   </svg>\n   ', this.style = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n   <path fill-rule="evenodd" clip-rule="evenodd" d="M13 21V13H21V21H13ZM15 15H19L19 19H15V15Z" fill="black"/>\n   <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11L3 3L11 3V11H3ZM5 5L9 5V9L5 9L5 5Z" fill="black"/>\n   <path d="M18 6V12H16V8L12 8V6L18 6Z" fill="black"/>\n   <path d="M12 18H6L6 12H8L8 16H12V18Z" fill="black"/>\n   </svg>\n   ', this.visible = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n  viewBox="0 0 98.48 98.48" style="enable-background:new 0 0 98.48 98.48;" xml:space="preserve"\n >\n<g>\n <path d="M97.204,45.788c-0.865-1.02-21.537-24.945-47.963-24.945c-26.427,0-47.098,23.925-47.965,24.946\n   c-1.701,2-1.701,4.902,0.001,6.904c0.866,1.02,21.537,24.944,47.964,24.944c26.426,0,47.098-23.926,47.964-24.946\n   C98.906,50.691,98.906,47.789,97.204,45.788z M57.313,35.215c1.777-0.97,4.255,0.143,5.534,2.485\n   c1.279,2.343,0.875,5.029-0.902,5.999c-1.776,0.971-4.255-0.143-5.535-2.485C55.132,38.871,55.535,36.185,57.313,35.215z\n    M49.241,68.969c-18.46,0-33.995-14.177-39.372-19.729c3.631-3.75,11.898-11.429,22.567-16.021\n   c-2.081,3.166-3.301,6.949-3.301,11.021c0,11.104,9.001,20.105,20.105,20.105s20.106-9.001,20.106-20.105\n   c0-4.072-1.219-7.855-3.3-11.021C76.715,37.812,84.981,45.49,88.612,49.24C83.235,54.795,67.7,68.969,49.241,68.969z"/>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g></svg>', this.invisible = '<svg\nversion="1.1"\nid="Capa_1"\nx="0px"\ny="0px"\nviewBox="0 0 98.48 98.481"\nstyle="enable-background:new 0 0 98.48 98.481;"\nxml:space="preserve"\nsodipodi:docname="invisible.svg"\ninkscape:version="1.1 (c68e22c387, 2021-05-23)"\nxmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\nxmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\nxmlns="http://www.w3.org/2000/svg"\nxmlns:svg="http://www.w3.org/2000/svg"><defs\nid="defs45" /><sodipodi:namedview\nid="namedview43"\npagecolor="#ffffff"\nbordercolor="#666666"\nborderopacity="1.0"\ninkscape:pageshadow="2"\ninkscape:pageopacity="0.0"\ninkscape:pagecheckerboard="0"\nshowgrid="false"\ninkscape:zoom="2.9869357"\ninkscape:cx="4.8544735"\ninkscape:cy="41.346722"\ninkscape:window-width="1920"\ninkscape:window-height="1017"\ninkscape:window-x="-8"\ninkscape:window-y="-8"\ninkscape:window-maximized="1"\ninkscape:current-layer="g8" />\n<g\nid="g10">\n<g\nid="g8">\n \n \n <g\nid="g843"><path\n  d="M69.322,44.716L49.715,64.323C60.438,64.072,69.071,55.438,69.322,44.716z"\n  id="path2" /><path\n  d="M97.204,45.789c-0.449-0.529-6.245-7.23-15.402-13.554l-6.2,6.2c5.99,3.954,10.559,8.275,13.011,10.806    C83.235,54.795,67.7,68.969,49.241,68.969c-1.334,0-2.651-0.082-3.952-0.222l-7.439,7.438c3.639,0.91,7.449,1.451,11.391,1.451    c26.426,0,47.098-23.927,47.964-24.946C98.906,50.692,98.906,47.79,97.204,45.789z"\n  id="path4" /><path\n  d="M90.651,15.901c0-0.266-0.104-0.52-0.293-0.707l-7.071-7.07c-0.391-0.391-1.022-0.391-1.414,0L66.045,23.952    c-5.202-1.893-10.855-3.108-16.804-3.108c-26.427,0-47.098,23.926-47.965,24.946c-1.701,2-1.701,4.902,0.001,6.903    c0.517,0.606,8.083,9.354,19.707,16.319l-12.86,12.86c-0.188,0.188-0.293,0.441-0.293,0.707c0,0.267,0.105,0.521,0.293,0.707    l7.071,7.07c0.195,0.194,0.451,0.293,0.707,0.293c0.256,0,0.512-0.099,0.707-0.293l73.75-73.75    C90.546,16.421,90.651,16.167,90.651,15.901z M9.869,49.241C13.5,45.49,21.767,37.812,32.436,33.22    c-2.081,3.166-3.301,6.949-3.301,11.021c0,4.665,1.601,8.945,4.27,12.352l-6.124,6.123C19.129,58.196,12.89,52.361,9.869,49.241z"\n  id="path6" /></g>\n</g>\n</g>\n<g\nid="g12">\n</g>\n<g\nid="g14">\n</g>\n<g\nid="g16">\n</g>\n<g\nid="g18">\n</g>\n<g\nid="g20">\n</g>\n<g\nid="g22">\n</g>\n<g\nid="g24">\n</g>\n<g\nid="g26">\n</g>\n<g\nid="g28">\n</g>\n<g\nid="g30">\n</g>\n<g\nid="g32">\n</g>\n<g\nid="g34">\n</g>\n<g\nid="g36">\n</g>\n<g\nid="g38">\n</g>\n<g\nid="g40">\n</g></svg>', this.mouse = '<svg\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 260.366 260.366"\n  style="enable-background:new 0 0 260.366 260.366;"\n  xml:space="preserve"\n  sodipodi:docname="arrow-svgrepo-com.svg"\n  inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:svg="http://www.w3.org/2000/svg"><defs\n  id="defs37" /><sodipodi:namedview\n  id="namedview35"\n  pagecolor="#ffffff"\n  bordercolor="#666666"\n  borderopacity="1.0"\n  inkscape:pageshadow="2"\n  inkscape:pageopacity="0.0"\n  inkscape:pagecheckerboard="0"\n  showgrid="false"\n  inkscape:zoom="3.2339092"\n  inkscape:cx="130.183"\n  inkscape:cy="130.33761"\n  inkscape:window-width="1920"\n  inkscape:window-height="1027"\n  inkscape:window-x="-8"\n  inkscape:window-y="-8"\n  inkscape:window-maximized="1"\n  inkscape:current-layer="Capa_1" />\n  <path\n  d="M255.972,189.463l-47.347-47.348l41.082-41.082c3.675-3.675,5.186-8.989,3.993-14.047c-1.191-5.059-4.917-9.14-9.846-10.786  L19.754,1.316c-5.393-1.804-11.341-0.401-15.36,3.62c-4.021,4.021-5.422,9.968-3.62,15.36l74.885,224.101  c1.646,4.929,5.728,8.654,10.786,9.846c5.053,1.193,10.371-0.317,14.047-3.993l42.165-42.165l47.348,47.347  c2.929,2.929,6.768,4.394,10.606,4.394s7.678-1.465,10.606-4.394l44.755-44.755C261.83,204.819,261.83,195.321,255.972,189.463z   M200.611,223.612l-47.348-47.347c-2.929-2.929-6.768-4.394-10.606-4.394s-7.678,1.465-10.606,4.394l-35.624,35.624L38.752,39.294  l172.595,57.674l-34.541,34.541c-5.858,5.857-5.858,15.355,0,21.213l47.347,47.348L200.611,223.612z"\n  id="path2"\n  style="fill:#000000;fill-opacity:1" />\n  <g\n  id="g4">\n  </g>\n  <g\n  id="g6">\n  </g>\n  <g\n  id="g8">\n  </g>\n  <g\n  id="g10">\n  </g>\n  <g\n  id="g12">\n  </g>\n  <g\n  id="g14">\n  </g>\n  <g\n  id="g16">\n  </g>\n  <g\n  id="g18">\n  </g>\n  <g\n  id="g20">\n  </g>\n  <g\n  id="g22">\n  </g>\n  <g\n  id="g24">\n  </g>\n  <g\n  id="g26">\n  </g>\n  <g\n  id="g28">\n  </g>\n  <g\n  id="g30">\n  </g>\n  <g\n  id="g32">\n  </g>\n  <path\n  style="fill:#000000;fill-opacity:1;stroke-width:38.318;stroke-linecap:round;stroke:#000000;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"\n  d="m 176.25727,198.8633 c -23.68772,-23.64674 -24.49906,-24.41991 -26.7503,-25.49175 -4.55216,-2.16733 -9.11388,-2.17055 -13.60334,-0.01 -2.22046,1.06878 -3.10891,1.90403 -20.87257,19.62262 L 96.477662,211.49087 67.898364,125.92225 C 52.17975,78.859514 39.258366,40.178943 39.184177,39.965428 39.077696,39.658977 210.191,96.551715 210.7197,96.998548 c 0.0763,0.06445 -7.87234,8.148712 -17.66356,17.965012 -11.29533,11.32428 -18.11231,18.38875 -18.65061,19.32772 -2.62177,4.57321 -2.71438,10.25944 -0.24786,15.21817 0.59716,1.20053 6.23919,7.02408 25.242,26.05407 l 24.47294,24.50796 -11.59335,11.5891 -11.59335,11.58911 z"\n  id="path1252" /></svg>', this.nomouse = '<svg\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 260.366 260.366"\n  style="enable-background:new 0 0 260.366 260.366;"\n  xml:space="preserve"\n  sodipodi:docname="noarrow.svg"\n  inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:svg="http://www.w3.org/2000/svg"><defs\n  id="defs37" /><sodipodi:namedview\n  id="namedview35"\n  pagecolor="#ffffff"\n  bordercolor="#666666"\n  borderopacity="1.0"\n  inkscape:pageshadow="2"\n  inkscape:pageopacity="0.0"\n  inkscape:pagecheckerboard="0"\n  showgrid="false"\n  inkscape:zoom="3.2339092"\n  inkscape:cx="148.11795"\n  inkscape:cy="169.91819"\n  inkscape:window-width="1920"\n  inkscape:window-height="1027"\n  inkscape:window-x="-8"\n  inkscape:window-y="-8"\n  inkscape:window-maximized="1"\n  inkscape:current-layer="Capa_1" />\n\n  <g\n  id="g4">\n  </g>\n  <g\n  id="g6">\n  </g>\n  <g\n  id="g8">\n  </g>\n  <g\n  id="g10">\n  </g>\n  <g\n  id="g12">\n  </g>\n  <g\n  id="g14">\n  </g>\n  <g\n  id="g16">\n  </g>\n  <g\n  id="g18">\n  </g>\n  <g\n  id="g20">\n  </g>\n  <g\n  id="g22">\n  </g>\n  <g\n  id="g24">\n  </g>\n  <g\n  id="g26">\n  </g>\n  <g\n  id="g28">\n  </g>\n  <g\n  id="g30">\n  </g>\n  <g\n  id="g32">\n  </g>\n  <rect\n  style="fill:#000000;stroke:#000000;stroke-width:46.339;stroke-linecap:round"\n  id="rect859"\n  width="0.74869555"\n  height="280.91412"\n  x="179.77588"\n  y="-127.59808"\n  rx="12.106069"\n  ry="12.080462"\n  transform="matrix(0.74419993,0.66795693,-0.68686231,0.72678756,0,0)" /><g\n  id="g1327"><path\n    d="M255.972,189.463l-47.347-47.348l41.082-41.082c3.675-3.675,5.186-8.989,3.993-14.047c-1.191-5.059-4.917-9.14-9.846-10.786  L19.754,1.316c-5.393-1.804-11.341-0.401-15.36,3.62c-4.021,4.021-5.422,9.968-3.62,15.36l74.885,224.101  c1.646,4.929,5.728,8.654,10.786,9.846c5.053,1.193,10.371-0.317,14.047-3.993l42.165-42.165l47.348,47.347  c2.929,2.929,6.768,4.394,10.606,4.394s7.678-1.465,10.606-4.394l44.755-44.755C261.83,204.819,261.83,195.321,255.972,189.463z   M200.611,223.612l-47.348-47.347c-2.929-2.929-6.768-4.394-10.606-4.394s-7.678,1.465-10.606,4.394l-35.624,35.624L38.752,39.294  l172.595,57.674l-34.541,34.541c-5.858,5.857-5.858,15.355,0,21.213l47.347,47.348L200.611,223.612z"\n    id="path2"\n    style="fill:#000000;fill-opacity:1" /><path\n    style="fill:#000000;stroke:#000000;stroke-width:47.3953;stroke-linecap:round"\n    d="M 175.54224,197.81395 C 141.49161,163.76332 143.2267,163.93691 115.08233,191.76514 L 96.477662,210.16082 68.362417,125.87737 C 52.899031,79.521474 40.41104,41.430054 40.611324,41.22977 40.811607,41.029486 78.915195,53.517478 125.28596,68.980863 l 84.31049,28.115246 -17.78399,17.934951 c -19.09866,19.26078 -21.49193,23.16051 -19.17388,31.24308 0.79101,2.75809 8.75682,11.60498 25.8883,28.75178 l 24.74573,24.76783 -11.46147,11.41381 -11.46147,11.41382 z"\n    id="path1058" /></g></svg>', this.nolabel = '<svg\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 37.628 37.628"\n  style="enable-background:new 0 0 37.628 37.628;"\n  xml:space="preserve"\n  sodipodi:docname="nolabel.svg"\n  inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:svg="http://www.w3.org/2000/svg"><defs\n  id="defs39" /><sodipodi:namedview\n  id="namedview37"\n  pagecolor="#ffffff"\n  bordercolor="#666666"\n  borderopacity="1.0"\n  inkscape:pageshadow="2"\n  inkscape:pageopacity="0.0"\n  inkscape:pagecheckerboard="0"\n  showgrid="false"\n  inkscape:zoom="11.188477"\n  inkscape:cx="7.1502135"\n  inkscape:cy="14.523871"\n  inkscape:window-x="-8"\n  inkscape:window-y="-8"\n  inkscape:window-maximized="1"\n  inkscape:current-layer="Capa_1" />\n  <g\n  id="g4">\n  <path\n  d="M36.895,23.758L25.092,35.562c-0.488,0.487-1.128,0.731-1.77,0.731c-0.211,0-0.419-0.037-0.625-0.089   c0.418-0.107,0.815-0.315,1.145-0.644l11.803-11.804c0.979-0.977,0.979-2.56,0-3.534L17.488,2.067   c-0.333-0.333-0.752-0.546-1.199-0.651l0.243-0.043c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156   C37.872,21.199,37.872,22.782,36.895,23.758z M34.228,23.758L22.425,35.562c-0.488,0.487-1.128,0.731-1.77,0.731   c-0.64,0-1.279-0.244-1.768-0.731L0.732,17.405c-0.578-0.578-0.837-1.401-0.694-2.206L1.822,5.181   c0.184-1.031,0.992-1.839,2.023-2.023l10.019-1.784c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156   C35.206,21.199,35.206,22.782,34.228,23.758z M9.454,7.193c-0.985-1-2.595-1.012-3.595-0.027s-1.011,2.595-0.026,3.595   c0.985,0.999,2.594,1.012,3.594,0.026C10.426,9.802,10.438,8.192,9.454,7.193z"\n  id="path2" />\n  </g>\n  <g\n  id="g6">\n  </g>\n  <g\n  id="g8">\n  </g>\n  <g\n  id="g10">\n  </g>\n  <g\n  id="g12">\n  </g>\n  <g\n  id="g14">\n  </g>\n  <g\n  id="g16">\n  </g>\n  <g\n  id="g18">\n  </g>\n  <g\n  id="g20">\n  </g>\n  <g\n  id="g22">\n  </g>\n  <g\n  id="g24">\n  </g>\n  <g\n  id="g26">\n  </g>\n  <g\n  id="g28">\n  </g>\n  <g\n  id="g30">\n  </g>\n  <g\n  id="g32">\n  </g>\n  <g\n  id="g34">\n  </g>\n  <rect\n  style="fill:#000000;stroke:none;stroke-width:106.948;stroke-linecap:round"\n  id="rect1062"\n  width="6.4875011"\n  height="46.886227"\n  x="23.606146"\n  y="-23.715155"\n  rx="3.1189909"\n  ry="3.2421327"\n  transform="matrix(0.68940354,0.7243775,-0.72076393,0.69318061,0,0)" /></svg>\n  ', this.label = '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 37.628 37.628" style="enable-background:new 0 0 37.628 37.628;"\n    xml:space="preserve">\n  <g>\n    <path d="M36.895,23.758L25.092,35.562c-0.488,0.487-1.128,0.731-1.77,0.731c-0.211,0-0.419-0.037-0.625-0.089\n      c0.418-0.107,0.815-0.315,1.145-0.644l11.803-11.804c0.979-0.977,0.979-2.56,0-3.534L17.488,2.067\n      c-0.333-0.333-0.752-0.546-1.199-0.651l0.243-0.043c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156\n      C37.872,21.199,37.872,22.782,36.895,23.758z M34.228,23.758L22.425,35.562c-0.488,0.487-1.128,0.731-1.77,0.731\n      c-0.64,0-1.279-0.244-1.768-0.731L0.732,17.405c-0.578-0.578-0.837-1.401-0.694-2.206L1.822,5.181\n      c0.184-1.031,0.992-1.839,2.023-2.023l10.019-1.784c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156\n      C35.206,21.199,35.206,22.782,34.228,23.758z M9.454,7.193c-0.985-1-2.595-1.012-3.595-0.027s-1.011,2.595-0.026,3.595\n      c0.985,0.999,2.594,1.012,3.594,0.026C10.426,9.802,10.438,8.192,9.454,7.193z"/>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  </svg>', this.surface = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n  viewBox="0 0 512.011 512.011" style="enable-background:new 0 0 512.011 512.011;" xml:space="preserve">\n<g>\n <g>\n   <g>\n     <path d="M9.881,188.672l234.667,149.333c3.499,2.219,7.488,3.328,11.456,3.328c3.989,0,7.957-1.109,11.456-3.328l234.667-149.333\n       c6.144-3.925,9.877-10.709,9.877-18.005c0-7.296-3.733-14.08-9.877-17.984L267.459,3.328c-6.997-4.437-15.915-4.437-22.912,0\n       L9.881,152.683c-6.144,3.904-9.877,10.688-9.877,17.984C0.003,177.963,3.737,184.747,9.881,188.672z"/>\n     <path d="M502.13,323.339l-66.069-42.048l-145.685,92.715c-10.347,6.549-22.208,10.005-34.368,10.005s-24.021-3.456-34.304-9.984\n       L75.954,281.291L9.885,323.339c-6.144,3.925-9.877,10.709-9.877,18.005c0,7.296,3.733,14.08,9.877,17.984l234.667,149.355\n       c3.499,2.219,7.467,3.328,11.456,3.328c3.968,0,7.957-1.109,11.456-3.328L502.13,359.328c6.144-3.904,9.877-10.688,9.877-17.984\n       C512.008,334.048,508.274,327.264,502.13,323.339z"/>\n   </g>\n </g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n', this.molecule = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">\n<g>\n<g>\n <path d="M361.461,225.296c-11.33-8.988-20.694-20.332-27.358-33.296l-65.887,54.064c-13.889-11.727-30.673-20.423-49.582-24.736\n   c-25.298-5.773-51.19-3.108-74.431,7.392l-8.563-12.027c-9.292,11.086-21.341,19.775-35.083,25.021l8.225,11.553\n   c-15.352,15.449-26.146,34.892-31.11,56.652c-14.439,63.288,25.302,126.524,88.591,140.963c8.779,2.004,17.549,2.963,26.197,2.963\n   c53.687,0,102.329-37.047,114.765-91.554c6.672-29.25,1.752-58.479-11.697-82.894L361.461,225.296z M182.458,391.885\n   c-1.823,7.991-8.926,13.408-16.789,13.408c-1.27,0-2.56-0.142-3.85-0.437c-32.367-7.385-52.691-39.723-45.306-72.089\n   c2.117-9.281,11.358-15.09,20.638-12.971c9.281,2.117,15.088,11.358,12.971,20.638c-1.528,6.701-0.356,13.597,3.301,19.416\n   c3.657,5.82,9.363,9.867,16.063,11.396C178.768,373.364,184.575,382.605,182.458,391.885z"/>\n</g>\n</g>\n<g>\n<g>\n <path d="M443.878,60.382c-22.81-5.201-46.283-1.212-66.094,11.237c-19.81,12.451-33.586,31.87-38.789,54.68\n   c-10.744,47.09,18.826,94.14,65.917,104.884v0.001c6.533,1.49,13.057,2.203,19.492,2.203c39.947,0,76.139-27.565,85.393-68.122\n   C520.538,118.178,490.968,71.127,443.878,60.382z"/>\n</g>\n</g>\n<g>\n<g>\n <path d="M129.651,124.586c-9.977-15.877-25.542-26.918-43.824-31.088c-37.742-8.611-75.449,15.09-84.06,52.83\n   s15.088,75.449,52.828,84.059c5.236,1.195,10.466,1.767,15.622,1.767c32.016,0,61.022-22.092,68.438-54.597\n   C142.827,159.274,139.63,140.463,129.651,124.586z"/>\n</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>', this.change = '<svg\n  version="1.1"\n  id="Layer_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 512 512"\n  style="enable-background:new 0 0 512 512;"\n  xml:space="preserve"\n  sodipodi:docname="change.svg"\n  inkscape:version="1.1 (c68e22c387, 2021-05-23)"\n  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:svg="http://www.w3.org/2000/svg"><defs\n  id="defs47" /><sodipodi:namedview\n  id="namedview45"\n  pagecolor="#ffffff"\n  bordercolor="#666666"\n  borderopacity="1.0"\n  inkscape:pageshadow="2"\n  inkscape:pageopacity="0.0"\n  inkscape:pagecheckerboard="0"\n  showgrid="false"\n  inkscape:zoom="1"\n  inkscape:cx="226"\n  inkscape:cy="256.5"\n  inkscape:window-width="1920"\n  inkscape:window-height="1027"\n  inkscape:window-x="-8"\n  inkscape:window-y="-8"\n  inkscape:window-maximized="1"\n  inkscape:current-layer="Layer_1" />\n\n\n<g\n  id="g14">\n</g>\n<g\n  id="g16">\n</g>\n<g\n  id="g18">\n</g>\n<g\n  id="g20">\n</g>\n<g\n  id="g22">\n</g>\n<g\n  id="g24">\n</g>\n<g\n  id="g26">\n</g>\n<g\n  id="g28">\n</g>\n<g\n  id="g30">\n</g>\n<g\n  id="g32">\n</g>\n<g\n  id="g34">\n</g>\n<g\n  id="g36">\n</g>\n<g\n  id="g38">\n</g>\n<g\n  id="g40">\n</g>\n<g\n  id="g42">\n</g>\n<g\n  id="g1800"\n  transform="translate(-0.1537225,-4.3038075)"><path\n    style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:22.416;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"\n    d="m 102.46172,128.30302 76.00859,-76.010515 0.15658,38.005766 0.1566,38.005769 h 153.53462 153.53462 v 38.00475 38.00475 H 256.15293 26.453131 Z"\n    id="path1171" /><path\n    style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:22.416;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"\n    d="m 409.84573,392.3046 -76.00859,76.01051 -0.15658,-38.00576 -0.1566,-38.00577 H 179.98934 26.454715 V 354.29883 316.29408 H 256.15452 485.85431 Z"\n    id="path1796" /></g></svg>';
        }, (()=>{
            var e = t(9755);
            $3Dmol.UI.Form = function() {
                function n(t, i) {
                    t = t || {};
                    var o = this.ui = e("<div></div>"), r = e("<div></div>");
                    r.text(i.key), r.css({
                        "border-bottom": "1px solid black",
                        "font-family": "Arial",
                        "font-size": "14px",
                        "font-weight": "bold",
                        "padding-top": "2px",
                        "padding-bottom": "4px"
                    }), o.append(r), o.addClass("form");
                    var a = this.inputs = [];
                    Object.keys(t).forEach((e)=>{
                        if (t[e].gui) {
                            var n = new c(e, t[e].type);
                            a.push(n), o.append(n.ui);
                        }
                    }), this.update = function() {};
                    var s = ()=>{};
                    a.forEach((e)=>{
                        e.update = s;
                    }), this.getValue = function() {
                        return i.value = {}, a.forEach((e)=>{
                            var n = e.getValue();
                            n.active && (i.value[n.key] = n.value);
                        }), i;
                    };
                    var l = function(e) {
                        i.value[e.key] = i.value;
                    };
                    function c(i, o) {
                        var r = this.control = {
                            value: null,
                            type: o,
                            key: i,
                            active: !1
                        }, a = this.ui = e("<div></div>");
                        if (this.placeholder = {
                            ui: e("<div></div>")
                        }, this.active = new n.Checkbox({
                            value: !1,
                            key: i
                        }), "string" == t[i].type || "element" == t[i].type) this.placeholder = new n.Input(r), this.placeholder.ui.attr("type", "text");
                        else if ("number" == t[i].type) {
                            var s = !1;
                            null != t[i].min && null != t[i].max && null != t[i].default && (s = !0), s ? (r.min = t[i].min, r.max = t[i].max, r.default = t[i].default, r.step = t[i].step || (r.max - r.max) / 1e3, this.placeholder = new n.Slider(r)) : (this.placeholder = new n.Input(r), this.placeholder.ui.attr("type", "text"), this.placeholder.validateOnlyNumber(t[i].floatType));
                        } else "array_range" == t[i].type ? (this.placeholder = new n.Input(r), this.placeholder.ui.attr("type", "text"), this.placeholder.validateInputRange()) : "color" == t[i].type ? (this.placeholder = new n.Color(r), t[i].spectrum && this.placeholder.enableSpectrum()) : "boolean" == t[i].type ? this.placeholder = new n.Checkbox(r) : "properties" == t[i].type ? (this.placeholder = new n.Input(r), this.placeholder.ui.attr("type", "text")) : "colorscheme" == t[i].type ? (this.placeholder = new n.ListInput(r, Object.keys($3Dmol.builtinColorSchemes)), this.placeholder.ui.attr("type", "text")) : null == t[i].type ? t[i].validItems && (this.placeholder = new n.ListInput(r, t[i].validItems)) : "form" == t[i].type ? (this.placeholder = new n(t[i].validItems, r), this.placeholder.ui.append(e("<div></div>").css($3Dmol.defaultCSS.LinkBreak))) : this.placeholder = new n.EmptyElement(r);
                        this.getValue = function() {
                            return this.placeholder.getValue ? this.placeholder.getValue() : null;
                        };
                        var c = this.placeholder;
                        "boolean" != o ? (c.ui.hide(), a.append(this.active.ui), this.active.update = function(e) {
                            e.value ? c.ui.show() : c.ui.hide(), r.active = e.value;
                        }) : this.placeholder.update = function(e) {
                            r.active = e.value;
                        }, a.append(this.placeholder.ui), this.placeholder.onUpdate && this.placeholder.onUpdate(l);
                    }
                    this.validate = function() {
                        return null == a.map((e)=>!e.active.getValue().value || e.placeholder.validate()).find((e)=>0 == e);
                    }, this.setValue = function(e) {
                        for(var n = Object.keys(e), t = 0; t < n.length; t++){
                            var o = a.find((e)=>{
                                if (e.control.key == n[t]) return e;
                            });
                            o.placeholder.setValue(e[n[t]]), o.active.setValue(!0), o.placeholder.ui.show(), o.control.active = !0;
                        }
                        this.update(i), this.getValue();
                    }, this.getInputs = function() {
                        return a;
                    };
                }
                return n.Color = function(t) {
                    var i = e("<div></div>");
                    i.height(10), i.width(10), i.css("border-radius", "50%"), i.css("background", "red"), i.css("margin-right", "3px");
                    var o = i.clone();
                    o.css("background", "blue");
                    var r = i.clone();
                    r.css("background", "green");
                    var a = this.control = {
                        R: {
                            value: 0,
                            min: 0,
                            max: 255,
                            label: i
                        },
                        G: {
                            value: 0,
                            min: 0,
                            max: 255,
                            label: r
                        },
                        B: {
                            value: 0,
                            min: 0,
                            max: 255,
                            label: o
                        }
                    }, s = this.ui = e("<div></div>"), l = e("<div></div>");
                    s.append(l);
                    var c = {
                        key: "Spectrum",
                        value: null
                    }, u = new n.Checkbox(c);
                    l.append(u.ui), u.ui.css({
                        "margin-left": "2px"
                    });
                    var d = new n.Slider(a.R), p = new n.Slider(a.G), g = new n.Slider(a.B), f = e("<div></div>");
                    f.append(d.ui, p.ui, g.ui);
                    var h = e("<div></div>");
                    l.append(f), l.append(h), d.slide.css("color", "red"), p.slide.css("color", "green"), g.slide.css("color", "blue"), h.height(15), h.css("margin-top", "6px"), h.css("margin-bottom", "6px"), h.css("border", "1px solid grey"), h.css("border-radius", "500px"), this.update = function() {};
                    var v = this;
                    function m() {
                        var e = `rgb(${a.R.value}, ${a.G.value}, ${a.B.value})`;
                        h.css("background", e), t.value = e, v.update(a);
                    }
                    d.update = p.update = g.update = m, m(), u.update = function(e) {
                        f.toggle(), e.value ? (h.css({
                            background: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
                        }), t.value = "spectrum") : m();
                    }, this.getValue = function() {
                        return t;
                    }, this.validate = function() {
                        return !0;
                    }, this.setValue = function(e) {
                        "spectrum" == e && (u.setValue(!0), u.update(c), f.hide(), t.value = "spectrum");
                    }, u.ui.hide(), this.enableSpectrum = function() {
                        u.ui.show();
                    };
                }, n.ListInput = function(n, t) {
                    var i = this.ui = e("<div></div>"), o = e("<div></div>"), r = t;
                    i.append(o);
                    var a = e("<select></select>");
                    a.css($3Dmol.defaultCSS.ListInput.select), o.append(a), this.showAlertBox = !0;
                    var s = e("<div></div>");
                    s.text("Please select some value"), s.css({
                        color: "crimson",
                        "font-family": "Arial",
                        "font-weight": "bold",
                        "font-size": "10px"
                    }), s.hide(), o.append(s), this.update = function() {}, a.on("click", {
                        parent: this
                    }, (e)=>{
                        n.value = a.children("option:selected").val(), e.data.parent.update(n);
                    }), this.getValue = ()=>n, this.validate = function() {
                        return "select" == n.value || null == n.value ? (this.showAlertBox && s.show(), a.css({
                            "box-shadow": "0px 0px 2px red"
                        }), !1) : (s.hide(), o.css({
                            "box-shadow": "none"
                        }), !0);
                    }, this.setValue = function(i) {
                        -1 != t.indexOf(i) ? (a.empty(), e("<option></option>").text("select"), r.forEach((n)=>{
                            var t = e("<option></option>");
                            t.text(n), t.attr("value", n), a.append(t), i == n && t.prop("selected", !0);
                        }), n.value = a.children("option:selected").val()) : console.error("UI::Form::ListInput:incorrect value", i);
                    }, this.updateList = function(n) {
                        a.empty();
                        var t = e("<option></option>");
                        t.text("select"), t.attr("value", "select"), a.append(t), (r = n).forEach((n)=>{
                            var t = e("<option></option>");
                            t.text(n), t.attr("value", n), a.append(t);
                        });
                    }, this.updateList(r);
                }, n.Input = function(n) {
                    var t = this.ui = e("<div></div>"), i = e("<div></div>");
                    t.append(i);
                    var o = this.validationType = "text";
                    t.css({
                        width: "100%",
                        "box-sizing": "border-box"
                    });
                    var r = this.domElement = e('<input type="text">');
                    i.append(r);
                    var a = e("<div></div>");
                    a.css({
                        border: "1px solid darkred",
                        "border-radius": "3px",
                        "font-family": "Arial",
                        "font-size": "10px",
                        "font-weight": "bold",
                        margin: "2px",
                        "margin-left": "4px",
                        padding: "2px",
                        color: "darkred",
                        background: "lightcoral"
                    });
                    var s = "Invalid input please check the value entered";
                    i.append(a), a.hide(), this.setWidth = function(e) {
                        r.width(e - 6);
                    }, this.setWidth(75), r.css({}), this.update = function() {}, r.on("change", {
                        parent: this,
                        control: n
                    }, (e)=>{
                        let t = r.val();
                        "," == t[t.length - 1] && (t = t.slice(0, -1)), n.value = "range" == o ? t.split(",") : t, e.data.parent.update(n);
                    }), r.on("select", ()=>{}), this.getValue = ()=>n;
                    var l = this.error = function(e) {
                        a.show(), a.text(e);
                    };
                    function c(e) {
                        "," == (e = e.replaceAll(" ", ""))[e.length - 1] && (e = e.slice(0, -1));
                        var n = e.split(",");
                        if (/,,/g.exec(e)) return !1;
                        if (isNaN(parseInt(n[0]))) return !1;
                        var t = n.map((e)=>(function(e) {
                                var n = e.split("-");
                                return !(n.length > 2) && (0 == n.length || (1 == n.length ? !isNaN(parseInt(n[0])) : 2 == n.length && !isNaN(parseInt(n[0])) && !isNaN(parseInt(n[1]))));
                            })(e));
                        return null == t.find((e)=>0 == e);
                    }
                    this.setValue = function(e) {
                        if ("range" == o) {
                            var t = e.join(",");
                            r.val(t);
                        } else r.val(e);
                        n.value = e;
                    };
                    var u = this.checkInput = function() {
                        var e = r.val();
                        return "number" == o ? function() {
                            var e = r.val();
                            return "" == e.replaceAll(/[0-9]/g, "") && !isNaN(parseInt(e));
                        }() ? (a.hide(), !0) : (l(s), !1) : "float" == o ? function() {
                            var e = r.val(), n = e.match(/\./g) || [], t = e.replaceAll(/\./g, "").replaceAll(/[0-9]/g, "");
                            return !(n.length > 1 || "" != t || isNaN(parseFloat(e)));
                        }() ? (a.hide(), !0) : (l(s), !1) : "range" != o || (function(e) {
                            return "" == e.replaceAll(",", "").replaceAll("-", "").replaceAll(/[0-9]/g, "").replaceAll(" ", "");
                        }(e) && c(e) ? (a.hide(), !0) : (l(s), !1));
                    };
                    this.validateOnlyNumber = function(e = !1) {
                        o = e ? "float" : "number", r.on("keydown keyup paste cut", function() {
                            u();
                        });
                    }, this.validateInputRange = function() {
                        o = "range", r.on("keydown keyup paste cut", ()=>{
                            u();
                        });
                    }, this.isEmpty = function() {
                        if ("" == n.value) return !0;
                    }, this.validate = function() {
                        return 1 == n.active && null != n.value && "" != n.value && u() || 0 == n.active ? (r.css("box-shadow", "none"), !0) : (r.css("box-shadow", "0px 0px 2px red"), !1);
                    }, r.css($3Dmol.defaultCSS.Input.input), i.css($3Dmol.defaultCSS.Input.boundingBox);
                }, n.Checkbox = function(n) {
                    var t = e("<div></div>");
                    t.text(n.key), t.css($3Dmol.defaultCSS.TextDefault);
                    var i = this.ui = e("<div></div>"), o = e("<div></div>");
                    i.append(o), i.append(t);
                    var r = e('<input type="checkbox" />');
                    o.append(r), this.click = ()=>{}, this.update = function() {}, this.getValue = ()=>n, r.on("click", {
                        parent: this
                    }, (e)=>{
                        n.value = r.prop("checked"), e.data.parent.update(n);
                    }), t.css("display", "inline-block"), o.css("display", "inline-block"), this.validate = function() {
                        return !0;
                    }, this.setValue = function(e) {
                        r.prop("checked", e), this.update(n), n.value = e;
                    };
                }, n.Slider = function(n) {
                    var t = this.ui = e("<div></div>"), i = e("<div></div>");
                    t.append(i), i.css("display", "flex");
                    var o = this.slide = e('<input type="range">');
                    o.css("width", "100%");
                    var r = n.min || 0, a = n.max || 100, s = n.step || 1, l = n.default || r, c = n.label || "", u = e("<div></div>");
                    u.append(c), i.append(u), o.attr("min", r), o.attr("max", a), o.attr("step", s), o.attr("value", l), n.value = l, i.append(o);
                    var d = !1;
                    this.update = function() {}, this.getValue = ()=>n, o.on("mousedown", ()=>{
                        d = !0;
                    }), o.on("mousemove", {
                        parent: this
                    }, (e)=>{
                        d && (n.value = o.val(), e.data.parent.update(n));
                    }), o.on("mouseup", ()=>{
                        d = !1;
                    }), i.css("align-items", "center"), i.height("21px"), o.css("padding", "0px"), o.css("margin", "0px"), this.validate = function() {
                        return !0;
                    }, this.setValue = function(e) {
                        o.val(e), n.value = o.val();
                    };
                }, n.EmptyElement = function(n) {
                    this.ui = e("<div></div>"), this.onUpdate = ()=>{}, this.getValue = ()=>n, this.validate = function() {
                        return !0;
                    };
                }, n;
            }();
        })(), $3Dmol.labelStyles = {
            purple: {
                backgroundColor: 8388736,
                backgroundOpacity: .8
            },
            milk: {
                font: "Arial",
                fontSize: 12,
                fontColor: $3Dmol.htmlColors.black,
                borderThickness: 1,
                borderColor: $3Dmol.htmlColors.azure,
                backgroundColor: $3Dmol.htmlColors.aliceblue,
                backgroundOpacity: .9
            },
            blue: {
                font: "Arial",
                fontSize: 12,
                fontColor: $3Dmol.htmlColors.aliceblue,
                borderThickness: 1,
                borderColor: $3Dmol.htmlColors.darkviolet,
                backgroundColor: $3Dmol.htmlColors.darkblue,
                backgroundOpacity: .9
            },
            chocolate: {
                font: "Arial",
                fontSize: 12,
                fontColor: $3Dmol.htmlColors.aliceblue,
                borderThickness: 1,
                borderColor: $3Dmol.htmlColors.brown,
                backgroundColor: $3Dmol.htmlColors.chocolate,
                backgroundOpacity: .9
            },
            lime: {
                font: "Arial",
                fontSize: 12,
                fontColor: $3Dmol.htmlColors.black,
                borderThickness: 1,
                borderColor: $3Dmol.htmlColors.lightgreen,
                backgroundColor: $3Dmol.htmlColors.lime,
                backgroundOpacity: .9
            },
            rose: {
                font: "Arial",
                fontSize: 12,
                fontColor: $3Dmol.htmlColors.black,
                borderThickness: 1,
                borderColor: $3Dmol.htmlColors.mintcream,
                backgroundColor: $3Dmol.htmlColors.mistyrose,
                backgroundOpacity: .9
            },
            yellow: {
                font: "Arial",
                fontSize: 12,
                fontColor: $3Dmol.htmlColors.black,
                borderThickness: 1,
                borderColor: $3Dmol.htmlColors.orange,
                backgroundColor: $3Dmol.htmlColors.yellow,
                backgroundOpacity: .9
            }
        }, $3Dmol.longPressDuration = 1500, $3Dmol.defaultCSS = {
            ListInput: {
                select: {
                    width: "auto",
                    border: "none",
                    margin: "0px",
                    "font-family": "Arial",
                    padding: "0px",
                    height: "20px",
                    "border-radius": "4px",
                    "box-sizing": "border-box"
                }
            },
            Input: {
                input: {
                    "margin-bottom": "0px",
                    padding: "0px",
                    "border-radius": "4px",
                    "font-family": "Arial",
                    width: "96%"
                },
                boundingBox: {
                    "margin-left": "4px",
                    "margin-right": ""
                }
            },
            Checkbox: {},
            Slider: {},
            Color: {},
            TextDefault: {
                "font-family": "Arial",
                "margin-left": "4px"
            },
            LinkBreak: {
                height: "3px",
                "border-bottom": "1px solid #687193"
            }
        }, {};
    })());

//# sourceMappingURL=index.1432d89d.js.map
