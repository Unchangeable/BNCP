! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c414b363-0764-5ac0-9019-d09a850badbb")
    } catch (e) {}
}();
(self.webpackChunkaccounts_ui = self.webpackChunkaccounts_ui || []).push([
    [4410], {
        qcsv: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => c
            });
            var r = n("sViW"),
                o = n("q0wl"),
                i = n.n(o),
                a = n("lZYQ"),
                c = function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, a.post)("/bapi/accounts/v1/public/account/security/bizCheck", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        IS67: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dr: () => a,
                Gj: () => o,
                tc: () => c,
                wL: () => i
            });
            var r = n("lZYQ"),
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, r.post)("/bapi/accounts/v3/public/authcenter/login", e, t)
                },
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, r.post)("/bapi/accounts/v3/protect/authcenter/login/verifyMfa", e, t)
                },
                a = function() {
                    return (0, r.get)("/bapi/kyc/v1/protect/certificate/reset-apply/check-unlock")
                },
                c = function(e) {
                    return (0, r.post)("/bapi/accounts/v1/public/account/login/reopen", e)
                }
        },
        FucG: (e, t, n) => {
            "use strict";
            n.d(t, {
                M3: () => a,
                Qo: () => c,
                _n: () => i,
                fv: () => o,
                z$: () => s
            });
            var r = n("lZYQ"),
                o = function() {
                    return (0, r.get)("/bapi/accounts/v1/public/country/list")
                },
                i = function() {
                    return (0, r.get)("/bapi/accounts/v2/private/country/user/restricted")
                },
                a = function() {
                    return (0, r.get)("/bapi/accounts/v1/private/country/disable/timeleft")
                },
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, r.get)("/bapi/accounts/v2/public/country/support/mobile/register", e)
                },
                s = function() {
                    return (0, r.post)("/bapi/kyc/v1/private/kyc/kyc-certificate/forbid-flow-validate", {})
                }
        },
        kX4b: (e, t, n) => {
            "use strict";
            n.d(t, {
                PA: () => c,
                kI: () => a
            });
            var r = n("sViW"),
                o = n("q0wl"),
                i = n.n(o),
                a = (function() {
                    var e = (0, r.Z)(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {});
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {});
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {});
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e() {
                        var t = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.length > 0 && void 0 !== t[0] ? t[0] : null, e.abrupt("return", {});
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        result: {}
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        result: {}
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        result: {}
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        code: 0,
                                        data: ""
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        code: 0,
                                        data: ""
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        code: 0,
                                        data: ""
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        code: 0,
                                        data: "",
                                        id: "",
                                        rawId: "",
                                        response: {
                                            authenticatorData: "",
                                            clientDataJSON: "",
                                            signature: "",
                                            userHandle: ""
                                        }
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e() {
                        var t, n = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                        force: !1
                                    }, console.log(t), e.abrupt("return", {
                                        support: !1
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                c = (function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", !0);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        result: !1,
                                        localFidoAvailable: !0,
                                        googleFidoAvailable: !0
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", !1);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", "");
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", !!t);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }())
        },
        vkzD: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => p
            });
            var r = n("sViW"),
                o = n("BK7R"),
                i = n("gZfF"),
                a = n("q0wl"),
                c = n.n(a),
                s = n("DTvD"),
                u = n("qcsv"),
                l = n("T8Gn"),
                d = n("lPrA"),
                f = n("5PeS"),
                p = function(e, t) {
                    var n = (0, s.useRef)(null),
                        a = (0, l.$)("accounts-ui"),
                        p = a.t,
                        v = a.i18n,
                        h = (0, d.m)({
                            staticHost: (0, f.nR)("RECAPTCHA_STATIC_HOST") || (0, f.nR)("STATIC_HOST"),
                            nodeRef: n,
                            bizId: e,
                            lang: t || v.language,
                            googleReCaptchaKey: (0, f.nR)("GOOGLE_RECAPTCHA_KEY")
                        }).manMachineValidate,
                        m = function() {
                            var e = (0, r.Z)(c().mark((function e(t) {
                                var n;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, h(t);
                                        case 2:
                                            if (n = e.sent, console.log("BIDS-816 handleManMachineValidate greetInfo", n), !(null === n || void 0 === n ? void 0 : n.success)) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.abrupt("return", (0, o.Z)({
                                                success: !0
                                            }, n.data));
                                        case 8:
                                            return console.log("BIDS-816 handleManMachineValidate failed", n), e.abrupt("return", (0, o.Z)({
                                                success: !1
                                            }, n));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        g = function() {
                            var e = (0, r.Z)(c().mark((function e(t) {
                                var n, i, a, s, l, d, f, v, h, m = arguments;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = m.length > 1 && void 0 !== m[1] ? m[1] : [], s = {}, l = p("accounts-ui-system-no-response", {
                                                ns: "accounts-ui",
                                                defaultValue: "The system is not responding at the moment. Please try again later."
                                            }), d = function() {
                                                var e = (0, r.Z)(c().mark((function e(t) {
                                                    var n, r, i;
                                                    return c().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.prev = 0, e.next = 3, (0, u.F)((0, o.Z)({}, t));
                                                            case 3:
                                                                return (null === (n = e.sent) || void 0 === n ? void 0 : n.success) || (r = n.code, i = n.message, ["200001048", "024072"].includes(r) ? s[r] = "".concat(p("common-acount-warning", "Please enter a valid email or phone number")).concat(r, "}") : s[r] = "".concat(i, "(").concat(r, ")")), e.abrupt("return", n);
                                                            case 8:
                                                                return e.prev = 8, e.t0 = e.catch(0), s.network = l, e.abrupt("return", !1);
                                                            case 12:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e, null, [
                                                        [0, 8]
                                                    ])
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), e.next = 7, d(t);
                                        case 7:
                                            if (f = e.sent, v = null === f || void 0 === f || null === (i = f.data) || void 0 === i ? void 0 : i.valid, h = null === f || void 0 === f || null === (a = f.data) || void 0 === a ? void 0 : a.disable, "boolean" !== typeof v || v || (s.accountNotExists = p("accounts-ui-account-not-found", {
                                                    ns: "accounts-ui",
                                                    defaultValue: "Binance account not found."
                                                })), h && (s.accountDisable = p("accounts-ui-account-disabled", {
                                                    ns: "accounts-ui",
                                                    defaultValue: "Account disabled. Please contact Customer Support."
                                                })), console.log("BIDS-816 handleCheckAccount accountErrors", s), !n.length) {
                                                e.next = 16;
                                                break
                                            }
                                            return console.log("BIDS-816 handleCheckAccount filterAccoutErrors", n, n.reduce((function(e, t) {
                                                return e[t] = s[t]
                                            }), {})), e.abrupt("return", n.reduce((function(e, t) {
                                                return e[t] = s[t]
                                            }), {}));
                                        case 16:
                                            return e.abrupt("return", s);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        b = function() {
                            var e = (0, r.Z)(c().mark((function e(t) {
                                var n, r, a, s, u, l = arguments;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = l.length > 1 && void 0 !== l[1] ? l[1] : [], e.next = 3, m(t);
                                        case 3:
                                            if (r = e.sent, a = r.success, s = (0, i.Z)(r, ["success"]), a) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.abrupt("return", (0, o.Z)({
                                                success: !1
                                            }, s));
                                        case 8:
                                            return e.next = 10, g((0, o.Z)({}, t, s), n);
                                        case 10:
                                            if (u = e.sent, !Object.keys(u).length) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.abrupt("return", {
                                                success: !1,
                                                accountErrors: u,
                                                code: "BIDS_ERR_RESET_PWD_BIZ",
                                                message: (null === u || void 0 === u ? void 0 : u.accountNotExists) || (null === u || void 0 === u ? void 0 : u.accountDisable) || u[Object.keys(u)[0]]
                                            });
                                        case 13:
                                            return e.abrupt("return", (0, o.Z)({
                                                success: !0
                                            }, s));
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return {
                        handleManMachineValidate: m,
                        handleCheckAccount: g,
                        manMachineAndCheckAccount: b
                    }
                }
        },
        "5PeS": (e, t, n) => {
            "use strict";
            n.d(t, {
                Ak: () => i,
                nR: () => o
            });
            var r = {
                    STATIC_HOST: "",
                    SITE_HOST: "",
                    GOOGLE_RECAPTCHA_KEY: "",
                    RECAPTCHA_STATIC_HOST: ""
                },
                o = function(e) {
                    return e ? r[e] || "" : r
                },
                i = function(e) {
                    var t = e.constants;
                    return Object.keys(t).forEach((function(e) {
                        return function(e, t) {
                            return r[e] = t
                        }(e, t[e])
                    })), null
                }
        },
        SKSe: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => s
            });
            var r = n("sViW"),
                o = n("q0wl"),
                i = n.n(o),
                a = n("v3Z0"),
                c = n("zzYc"),
                s = function() {
                    return (0, a.b)(function() {
                        var e = (0, r.Z)(i().mark((function e(t) {
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return console.log("BIDS-816: checkResetPasswordMFA success data ----\x3e", t), e.next = 3, (0, c.setStorage)({
                                            key: "pd_reset_mfa",
                                            data: t
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        console.log("BIDS-816 useCheckResetPwdMFA error", e, n)
                    }))
                }
        },
        v3Z0: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => g,
                y: () => b
            });
            var r = n("sViW"),
                o = n("BK7R"),
                i = n("gZfF"),
                a = n("q0wl"),
                c = n.n(a),
                s = n("GuDP"),
                u = n("lZYQ"),
                l = n("zzYc"),
                d = n("6fd6"),
                f = n("59hn"),
                p = function() {
                    var e = (0, r.Z)(c().mark((function e() {
                        var t, n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.getStorage)({
                                        key: "pd_reset_mfa"
                                    });
                                case 2:
                                    return t = e.sent, n = t.data, console.log("BIDS-816 getRiskChallengeInfo riskInfo", n), e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = (0, r.Z)(c().mark((function e(t, n, r) {
                        var i, a, s, l, p, v;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = {
                                        needCache: !0,
                                        enableMFAInterceptor: !1
                                    }, a = f.Q6 ? {
                                        fetchType: "origin"
                                    } : (0, o.Z)({}, i, r && {
                                        headers: (0, o.Z)({}, r)
                                    }), e.next = 4, (0, u.post)("/bapi/accounts/v3/public/account/user/forgot-password-precheck", t, a);
                                case 4:
                                    if (s = e.sent, e.prev = 5, console.log("BIDS-816 forgot-password-precheck ->", s), !f.Q6) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 10, d.o.readFile("mfa-bizNo-token");
                                case 10:
                                    l = e.sent, p = l.data, v = JSON.parse(p), console.log("BIDS-816 mp forgot-password-precheck mfa-bizNo-token", v), n({
                                        bizNo: null === v || void 0 === v ? void 0 : v.bizNo,
                                        token: null === v || void 0 === v ? void 0 : v.token
                                    }), e.next = 18;
                                    break;
                                case 17:
                                    n({
                                        bizNo: null === r || void 0 === r ? void 0 : r.risk_challenge_biz_no,
                                        token: null === r || void 0 === r ? void 0 : r.risk_challenge_token
                                    });
                                case 18:
                                    e.next = 23;
                                    break;
                                case 20:
                                    e.prev = 20, e.t0 = e.catch(5), console.log("BIDS-816 mp forgot-password-precheck onChallengeSuccess ---\x3e", e.t0);
                                case 23:
                                    if (!f.Q6) {
                                        e.next = 25;
                                        break
                                    }
                                    return e.abrupt("return", s.json());
                                case 25:
                                    return e.abrupt("return", s);
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [5, 20]
                        ])
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = (0, r.Z)(c().mark((function e(t) {
                        var n, r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, p();
                                case 2:
                                    return n = e.sent, r = (null === n || void 0 === n ? void 0 : n.bizNo) && (null === n || void 0 === n ? void 0 : n.bizToken) ? {
                                        headers: {
                                            risk_challenge_biz_no: null === n || void 0 === n ? void 0 : n.bizNo,
                                            risk_challenge_token: null === n || void 0 === n ? void 0 : n.bizToken
                                        }
                                    } : {}, e.abrupt("return", (0, u.post)("/bapi/accounts/v3/public/account/user/reset-password", t, r));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = n("HqPM"),
                g = function(e, t) {
                    return (0, s.D)(function() {
                        var e = (0, r.Z)(c().mark((function e(t) {
                            var n, r, a, s;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = {}, r = t.opts, a = (0, i.Z)(t, ["opts"]), console.log("BIDS-816 checkResetPasswordMFA payload --\x3e", a, r), (null === r || void 0 === r ? void 0 : r.risk_challenge_biz_no) && (null === r || void 0 === r ? void 0 : r.risk_challenge_token)) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 6, (0, l.setStorage)({
                                            key: "forgotpwdparam",
                                            data: a
                                        });
                                    case 6:
                                        return e.next = 8, v(a, (function(e) {
                                            var t = e.token,
                                                r = e.bizNo;
                                            n.bizToken = t, n.bizNo = r
                                        }), r);
                                    case 8:
                                        if (s = e.sent, console.log("BIDS-816 checkResetPasswordMFA res ----\x3e", s), !s.success) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return", (0, o.Z)({}, n, s.data));
                                    case 12:
                                        throw new m.Z(s.message || "BIDS_ERR_RESET_PWD_PRE", s.code);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), {
                        onError: t,
                        onSuccess: e
                    })
                },
                b = function(e, t) {
                    return (0, s.D)(function() {
                        var e = (0, r.Z)(c().mark((function e(t) {
                            var n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, h(t);
                                    case 2:
                                        if (!(n = e.sent).success) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", n.data);
                                    case 5:
                                        throw new m.Z(n.message, n.code);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), {
                        onError: t,
                        onSuccess: e
                    })
                }
        },
        "2+hd": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("n0xf");
            const c = (0, o.forwardRef)((function(e, t) {
                return i().createElement(a.Z, (0, r.Z)({
                    style: {
                        cursor: "pointer"
                    },
                    ref: t,
                    as: "a",
                    variant: "link",
                    "data-bn-type": "link"
                }, e))
            }))
        },
        "l+NK": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("O3KZ"),
                c = "translate(32,32)",
                s = "stroke-opacity",
                u = "indefinite",
                l = "750ms",
                d = "round",
                f = "none",
                p = {
                    a: "animate",
                    an: "attributeName",
                    at: "animateTransform",
                    c: "circle",
                    da: "stroke-dasharray",
                    os: "stroke-dashoffset",
                    f: "fill",
                    fu: "full-rule",
                    lc: "stroke-linecap",
                    rc: "repeatCount",
                    sw: "stroke-width",
                    t: "transform",
                    v: "values"
                },
                v = {
                    v: "0,32,32;360,32,32",
                    an: "transform",
                    type: "rotate",
                    rc: u,
                    dur: l
                };

            function h(e, t) {
                var n = e.split(";"),
                    r = n.slice(t),
                    o = n.slice(0, n.length - r.length);
                return n = r.concat(o).reverse(), "".concat(n.join(";"), ";").concat(n[0])
            }
            var m = {
                    sw: 4,
                    lc: d,
                    line: [{
                        fn: function(e, t) {
                            return {
                                y1: "ios" === t ? 18 : 13,
                                y2: "ios" === t ? 29 : 20,
                                t: "".concat(c, " rotate(").concat(30 * e + (e < 6 ? 180 : -180), ")"),
                                a: [{
                                    fn: function() {
                                        return {
                                            an: s,
                                            dur: l,
                                            rc: u,
                                            v: h("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1", e)
                                        }
                                    },
                                    t: 1
                                }]
                            }
                        },
                        t: 12
                    }]
                },
                g = {
                    ios: m,
                    "ios-small": m,
                    bubbles: {
                        sw: 0,
                        c: [{
                            fn: function(e) {
                                return {
                                    cx: 24 * Math.cos(2 * Math.PI * e / 8),
                                    cy: 24 * Math.sin(2 * Math.PI * e / 8),
                                    t: c,
                                    a: [{
                                        fn: function() {
                                            return {
                                                an: "r",
                                                dur: l,
                                                rc: u,
                                                v: h("1;1.5;2;2.5;3;3.5;4;4.8", e)
                                            }
                                        },
                                        t: 1
                                    }]
                                }
                            },
                            t: 8
                        }]
                    },
                    circles: {
                        c: [{
                            fn: function(e) {
                                return {
                                    r: 5,
                                    cx: 24 * Math.cos(2 * Math.PI * e / 8),
                                    cy: 24 * Math.sin(2 * Math.PI * e / 8),
                                    t: c,
                                    sw: 0,
                                    a: [{
                                        fn: function() {
                                            return {
                                                an: "fill-opacity",
                                                dur: l,
                                                rc: u,
                                                v: h(".3;.3;.3;.4;.7;.85;.9;1", e)
                                            }
                                        },
                                        t: 1
                                    }]
                                }
                            },
                            t: 8
                        }]
                    },
                    crescent: {
                        c: [{
                            sw: 4,
                            da: 128,
                            os: 82,
                            r: 26,
                            cx: 32,
                            cy: 32,
                            f: f,
                            at: [v]
                        }]
                    },
                    dots: {
                        c: [{
                            fn: function(e) {
                                return {
                                    cx: 16 + 16 * e,
                                    cy: 32,
                                    sw: 0,
                                    a: [{
                                        fn: function() {
                                            return {
                                                an: "fill-opacity",
                                                dur: l,
                                                rc: u,
                                                v: h(".5;.6;.8;1;.8;.6;.5", e)
                                            }
                                        },
                                        t: 1
                                    }, {
                                        fn: function() {
                                            return {
                                                an: "r",
                                                dur: l,
                                                rc: u,
                                                v: h("4;5;6;5;4;3;3", e)
                                            }
                                        },
                                        t: 1
                                    }]
                                }
                            },
                            t: 3
                        }]
                    },
                    lines: {
                        sw: 7,
                        lc: d,
                        line: [{
                            fn: function(e) {
                                return {
                                    x1: 10 + 14 * e,
                                    x2: 10 + 14 * e,
                                    a: [{
                                        fn: function() {
                                            return {
                                                an: "y1",
                                                dur: l,
                                                rc: u,
                                                v: h("16;18;28;18;16", e)
                                            }
                                        },
                                        t: 1
                                    }, {
                                        fn: function() {
                                            return {
                                                an: "y2",
                                                dur: l,
                                                rc: u,
                                                v: h("48;44;36;46;48", e)
                                            }
                                        },
                                        t: 1
                                    }, {
                                        fn: function() {
                                            return {
                                                dur: l,
                                                rc: u,
                                                an: s,
                                                v: h("1;.8;.5;.4;1", e)
                                            }
                                        },
                                        t: 1
                                    }]
                                }
                            },
                            t: 4
                        }]
                    },
                    ripple: {
                        f: f,
                        fu: "evenodd",
                        sw: 3,
                        c: [{
                            fn: function(e) {
                                return {
                                    cx: 32,
                                    cy: 32,
                                    a: [{
                                        fn: function() {
                                            return {
                                                an: "r",
                                                begin: "".concat(-1 * e, "s"),
                                                dur: "2s",
                                                v: "0;24",
                                                keyTimes: "0;1",
                                                keySplines: "0.1,0.2,0.3,1",
                                                calcMode: "spline",
                                                rc: u
                                            }
                                        },
                                        t: 1
                                    }, {
                                        fn: function() {
                                            return {
                                                dur: "2s",
                                                an: s,
                                                begin: "".concat(-1 * e, "s"),
                                                v: ".2;1;.2;0",
                                                rc: u
                                            }
                                        },
                                        t: 1
                                    }]
                                }
                            },
                            t: 2
                        }]
                    },
                    spiral: {
                        defs: [{
                            linearGradient: [{
                                id: "sGD",
                                gradientUnits: "userSpaceOnUse",
                                x1: 55,
                                y1: 46,
                                x2: 2,
                                y2: 46,
                                stop: [{
                                    offset: .1,
                                    class: "stop1"
                                }, {
                                    offset: 1,
                                    class: "stop2"
                                }]
                            }]
                        }],
                        g: [{
                            sw: 4,
                            lc: d,
                            f: f,
                            path: [{
                                stroke: "url(#sGD)",
                                d: "M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"
                            }, {
                                d: "M60,32 C60,16,47.464,4,32,4S4,16,4,32"
                            }],
                            at: [v]
                        }]
                    }
                };

            function b(e, t, n, r) {
                var o = document.createElement(p[e] || e);
                Object.keys(t).forEach((function(e) {
                    var n = t[e];
                    n instanceof Array ? n.forEach((function(t) {
                        var n = t.fn,
                            i = t.t;
                        if (n)
                            for (var a = 0; a < i; a++) b(e, t.fn(a, r), o, r);
                        else b(e, t, o, r)
                    })) : function(e, t, n) {
                        e.setAttribute(p[t] || t, n)
                    }(o, e, n)
                })), n.appendChild(o)
            }
            const y = function(e) {
                var t = e.type,
                    n = (0, a.__rest)(e, ["type"]),
                    r = i().useRef();
                return i().useEffect((function() {
                    var e = g[t];
                    if (r.current instanceof Element) {
                        var n = document.createElement("div");
                        e ? b("svg", {
                            viewBox: "0 0 64 64",
                            g: [e]
                        }, n, t) : n.innerHTML = '\n          <svg class="css" viewBox="25 25 50 50">\n            <circle class="css" cx="50" cy="50" r="20" fill="none"/>\n          </svg>\n        ', r.current.innerHTML = n.innerHTML
                    }
                }), [t]), i().createElement("div", (0, a.__assign)({}, n, {
                    ref: r
                }))
            };
            var w = n("Kmg5"),
                x = n("HI/4"),
                _ = n.n(x),
                E = n("RHSA");
            const k = function(e) {
                var t = e.type,
                    n = e.className,
                    r = (0, a.__rest)(e, ["type", "className"]),
                    o = (0, E.q)().prefixCls,
                    c = _()("".concat(o, "-spinner"), n);
                if (w.Op) throw new Error("this component only use Web side");
                return i().createElement(y, (0, a.__assign)({}, r, {
                    type: t,
                    className: c
                }))
            };
            var Z = (0, n("iUqZ").w)(k);

            function C(e) {
                return i().createElement(Z, (0, r.Z)({
                    __css: {
                        fill: e.itemsColor || "#F0B90B",
                        stroke: e.itemsColor || "#F0B90B"
                    },
                    type: "lines"
                }, e))
            }
        },
        U7vL: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ox: () => f
            });
            var r = n("sViW"),
                o = n("aVXY"),
                i = n("q0wl"),
                a = n.n(i),
                c = n("KNyl"),
                s = n("SYb0"),
                u = n("UiJE"),
                l = n("DTvD"),
                d = n.n(l),
                f = function(e) {
                    var t = e.confirmText,
                        n = e.processing,
                        i = void 0 !== n && n,
                        f = e.onOk,
                        p = e.onClose,
                        v = void 0 === p ? function() {} : p,
                        h = e.cancelText,
                        m = void 0 === h ? void 0 : h,
                        g = e.icon,
                        b = e.description,
                        y = e.title,
                        w = e.className,
                        x = void 0 === w ? "" : w,
                        _ = (0, o.Z)((0, l.useState)(i), 2),
                        E = _[0],
                        k = _[1];
                    return d().createElement(c.Z, {
                        className: x,
                        actions: d().createElement(s.ZP, {
                            className: "flex flex-row gap-2"
                        }, m && d().createElement(u.Z, {
                            style: {
                                flex: 1
                            },
                            variant: "secondary",
                            onClick: v,
                            "data-e2e": "btn-confirm-modal-cancel"
                        }, m), d().createElement(u.Z, {
                            loading: E,
                            disabled: E,
                            onClick: (0, r.Z)(a().mark((function e() {
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return k(!0), e.next = 3, f();
                                        case 3:
                                            k(!1);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            style: {
                                flex: 1,
                                width: "100%"
                            },
                            "data-e2e": "btn-confirm-modal-confirm"
                        }, t)),
                        icon: g,
                        description: b,
                        title: null !== y && void 0 !== y ? y : void 0
                    })
                }
        },
        EXxB: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => u
            });
            var r = n("DTvD"),
                o = n.n(r),
                i = n("T8Gn"),
                a = n("nrP6"),
                c = n("dBmU"),
                s = n("/pg0"),
                u = function() {
                    var e = (0, c.d)(),
                        t = (0, i.$)().t;
                    return {
                        popupForManMachineError: (0, r.useCallback)((function(n) {
                            if (n.code || n.message) {
                                console.log("BIDS-816: greetInfo error popup", n, e.info);
                                var r = n.message ? n.message : t("accounts-manmachine-verify-fail", {
                                        defaultValue: "Verification failed. Please try again.",
                                        ns: "accounts-ui"
                                    }),
                                    i = n.code ? "(".concat(n.code, ")") : "",
                                    c = "".concat(r, " ").concat(i);
                                e.info({
                                    imgSrc: o().createElement(a.Z, {
                                        size: [60, 80]
                                    }),
                                    desc: o().createElement(s.Z, {
                                        sx: {
                                            variant: ["text.subtitle2", "text.subtitle1"],
                                            color: "t.primary"
                                        }
                                    }, c),
                                    okText: t("accounts-common-ok", {
                                        defaultValue: "OK",
                                        ns: "accounts-ui"
                                    }),
                                    width: ["360px"]
                                })
                            }
                        }), [t, e])
                    }
                }
        },
        "7Qg1": (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => g
            });
            var r = n("sViW"),
                o = n("BK7R"),
                i = n("QUKP"),
                a = n("q0wl"),
                c = n.n(a),
                s = n("DTvD"),
                u = n.n(s),
                l = n("qcsv"),
                d = n("T8Gn"),
                f = n("rcf7"),
                p = n("KNyl"),
                v = n("UiJE"),
                h = n("SYb0"),
                m = n("c1zs"),
                g = function() {
                    var e = (0, d.$)("accounts-ui").t,
                        t = (0, f.s)(),
                        n = t.openModal,
                        a = t.closeModal,
                        s = function() {
                            var t = (0, r.Z)(c().mark((function t(r) {
                                var s, d, f, g, b, y, w, x;
                                return c().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return g = {}, t.prev = 3, t.next = 6, (0, l.F)((0, o.Z)({}, r));
                                        case 6:
                                            g = t.sent, t.next = 12;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t.catch(3), console.log("validateAccount request fail", t.t0);
                                        case 12:
                                            if (y = null === g || void 0 === g || null === (s = g.data) || void 0 === s ? void 0 : s.valid, "register" !== r.bizType) {
                                                t.next = 17;
                                                break
                                            }
                                            if (!y) {
                                                t.next = 17;
                                                break
                                            }
                                            return b = e("accounts-ui-account-exists", "This account is already in use."), t.abrupt("return", {
                                                status: !1,
                                                inlineMessage: b,
                                                popupErrorMessage: "",
                                                errorCode: g.code
                                            });
                                        case 17:
                                            if ("login" !== r.bizType) {
                                                t.next = 24;
                                                break
                                            }
                                            if ("boolean" !== typeof y || y) {
                                                t.next = 21;
                                                break
                                            }
                                            return b = e("accounts-ui-account-not-found", "Binance account not found."), t.abrupt("return", {
                                                status: !1,
                                                inlineMessage: b,
                                                popupErrorMessage: "",
                                                errorCode: g.code
                                            });
                                        case 21:
                                            if (!["208027"].includes(g.code)) {
                                                t.next = 24;
                                                break
                                            }
                                            return b = "".concat(g.message, " (").concat(g.code, ")"), t.abrupt("return", {
                                                status: !1,
                                                inlineMessage: b,
                                                popupErrorMessage: "",
                                                errorCode: g.code
                                            });
                                        case 24:
                                            if (g.success) {
                                                t.next = 28;
                                                break
                                            }
                                            return n({
                                                content: u().createElement(p.Z, {
                                                    actions: u().createElement(v.Z, {
                                                        onClick: function() {
                                                            return a()
                                                        },
                                                        style: {
                                                            width: "100%"
                                                        }
                                                    }, e("modal-iUnderstood", "I understood")),
                                                    icon: u().createElement(m.Z, {
                                                        size: 64
                                                    }),
                                                    description: u().createElement(h.ZP, {
                                                        className: "text-[--color-textSecondary]"
                                                    }, u().createElement(h.ZP, null, g.message), g.code && u().createElement(h.ZP, null, "(", e("error-code-text", "Error Code"), ":", g.code, ")"))
                                                })
                                            }), t.abrupt("return", (0, i.Z)((0, o.Z)({}, null === g || void 0 === g ? void 0 : g.data), {
                                                status: !1,
                                                inlineMessage: "",
                                                popupErrorMessage: g.message,
                                                errorCode: g.code,
                                                plessVerifyTypeList: null === g || void 0 === g || null === (w = g.data) || void 0 === w ? void 0 : w.plessVerifyTypeList,
                                                loginFlowId: null === g || void 0 === g || null === (x = g.data) || void 0 === x ? void 0 : x.loginFlowId
                                            }));
                                        case 28:
                                            return t.abrupt("return", (0, i.Z)((0, o.Z)({}, null === g || void 0 === g ? void 0 : g.data), {
                                                status: !0,
                                                inlineMessage: "",
                                                popupErrorMessage: g.message,
                                                errorCode: g.code,
                                                plessVerifyTypeList: null === g || void 0 === g || null === (d = g.data) || void 0 === d ? void 0 : d.plessVerifyTypeList,
                                                loginFlowId: null === g || void 0 === g || null === (f = g.data) || void 0 === f ? void 0 : f.loginFlowId
                                            }));
                                        case 29:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [3, 9]
                                ])
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }();
                    return s
                }
        },
        HqPM: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n("888e"),
                o = n("2PCm"),
                i = n("bwGr"),
                a = n("4Y6J");
            const c = function(e) {
                (0, o.Z)(n, e);
                var t = (0, a.Z)(n);

                function n(e, o) {
                    var i;
                    return (0, r.Z)(this, n), (i = t.call(this, e)).code = o, i
                }
                return n
            }((0, i.Z)(Error))
        },
        L2Kd: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = {
                "password-change-text": "Change Password",
                "password-change-confirm-title": "Account Restrictions",
                "password-change-successful-desc": "Your password has been successfully changed. Please log in with the new password.",
                "password-change-confirm-desc": "In order to protect your account, withdrawals, P2P selling, payment services, and Binance Card applications will be disabled for {{LIMIT_TIME}} hours after you change your password.",
                "email-index-tip": "Email verification adds another layer of security to your withdrawals and Binance account.",
                "email-add-text": "Add Email",
                "email-change-text": "Change Email",
                "email-change-label-email": "New Email Address",
                "email-add-label-email": "Enter Email address",
                "email-change-confirm-title": "Are You Sure You Want to Change Your Email Address?",
                "email-change-confirm-desc": "<ul><li>You will need to log in to your account after changing your email.</li> <li>Withdrawals and P2P transactions will be disabled for {{LIMIT_TIME}} hours after changing your email verification to ensure the safety of your assets. </li><li>The old email address cannot be used to re-register for {{LIMIT_DAY}} days after updating it.</li></ul>",
                "email-change-successful-desc": "Your email address has been successfully changed. Please log in with the new email address.",
                "Log In": "Log In",
                "all-2fa-change-tip": "Withdrawals, P2P selling, and payment services will be disabled for {{LIMIT_TIME}} hours after you make this change to protect your account.",
                "sms-index-tip": "Phone number Verification adds another layer of security to your withdrawals and Binance account.",
                "sms-add-text": "Add Phone Number",
                "sms-change-text": "Change Phone Number",
                "safey-tip": "Safety Tip",
                "sms-remove-safy-tip": "Please enable email verification before removing phone number verification.",
                "sms-change-confirm-title": "Are You Sure You Want to Change Your Phone Number?",
                "sms-remove-confirm-title": "Are You Sure You Want to Remove Your Phone Number?",
                "sms-change-confirm-desc": "<ul><li>You will need to log in to your account after changing your phone number.</li><li>Withdrawals and P2P transactions will be disabled for {{LIMIT_TIME}} hours after removing your phone number verification to ensure the safety of your assets.</li><li>Two security verification methods are required for withdrawals and other actions. Using only one verification method will put your account at greater risk.</li></ul>",
                "sms-remove-confirm-desc": "<ul><li>Withdrawals and P2P transactions will be disabled for {{LIMIT_TIME}} hours after removing your phone number verification to ensure the safety of your assets.</li><li>Two security verification methods are required for withdrawals and other actions. Using only one verification method will put your account at greater risk.</li></ul>",
                "sms-change-label-sms": "Enter Your Number",
                "Enter Verification Code": "Enter Verification Code",
                "Voice verification": "Voice verification",
                "Authenticator App Verification": "Authenticator App Verification",
                "sms-add-label-code": "Please enter the mobile verification code",
                "sms-change-successful-desc": "Your phone number has been successfully changed. Please sign in with the new phone number.",
                "ga-add-text": "Enable Authenticator App",
                "ga-index-empty-tip": "Instead of waiting for text messages, get verification codes from an authenticator app like Google Authenticator/Binance Authenticator. It works even if your phone is offline. ",
                "ga-download-app": "Download Authenticator App",
                "ga-index-guide-title": "How to enable Authenticator App",
                "ga-index-guide-link": "Learn more",
                Enable: "Enable",
                "ga-link-step1-title": "Copy the 16-digit key. Or you can scan the QR code.",
                "ga-link-step1-key": "16-digit key",
                Copy: "Copy",
                Next: "Next",
                "ga-link-step2-title": "Open Binance/Google Authenticator and add a new authenticator using the 16-digit key that you just copied.",
                "ga-link-step3-title": "Come back and verify the new authenticator in Binance App.",
                "ga-link-tip": "Please make sure that you have finished step 2 before you click next.",
                "ga-verify-title": "Verify Authenticator",
                "ga-remove-confirm-title": "Are You Sure You Want to Remove Authenticator App Verification?",
                "ga-remove-confirm-desc": "<ul><li>Withdrawals and P2P transactions will be disabled for {{LIMIT_TIME}} hours after removing your authenticator app verification to ensure the safety of your assets. </li><li>Two security verification methods are required for withdrawals and other actions. Using only one verification method will put your account at greater risk.</li></ul>",
                "ga-change-confirm-title": "Are You Sure You Want to Change Authenticator App Verification?",
                "ga-change-confirm-desc": "Withdrawals and P2P transactions will be disabled for {{LIMIT_TIME}} hours after changing your authenticator app to ensure the safety of your assets.",
                "ga-scan-qr-code": "Scan this QR code in the authenticator app",
                "ga-enter-key-code": "If you are unable to scan the QR code, please enter this code manually into the app.",
                "ga-label-code": "Authenticator App Code",
                "Action Failed": "Action Failed",
                "email-change-successful-title": "Email Updated Successfully",
                "sms-change-successful-title": "Phone Number Updated Successfully",
                "sms-remove-successful-title": "Phone Number Removed Successfully",
                "password-change-successful-title": "Password Changed",
                "action-fail-208055": "This verification session has expired.",
                "sms-remove-successful-desc": "Your phone number has been successfully removed. Please sign in again with your email.",
                "select-dial-code-title": "Select area code",
                "email-invalid": "Please enter a valid email address.",
                "password-invalid": "Password must be at least 8 characters with 1 upper case letter and 1 number.",
                "invalid-confirmPassword": "Passwords are not the same.",
                "phone-invalid": "Please enter a valid phone number.",
                "reset-mfa-title": "Reset Security Verification",
                "reset-mfa-select-desc": "Please select your issue(s):",
                "reset-confirm": "Confirm Reset",
                "password-reset-title": "Reset Password"
            }
        },
        "4SuJ": (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => r,
                x: () => o
            });
            var r = function(e) {
                    if (!e) return "--";
                    var t = e.substr(0, 2),
                        n = e.split("@");
                    return "".concat(t, "***@").concat(n[1])
                },
                o = function(e) {
                    if (!e) return "--";
                    var t = e.substr(0, 2),
                        n = e.substr(e.length - 4, 4);
                    return "".concat(t, "******").concat(n)
                }
        },
        ALnM: (e, t, n) => {
            "use strict";
            n.d(t, {
                PY: () => h,
                fT: () => g,
                qF: () => m
            });
            var r = n("BK7R"),
                o = n("QUKP"),
                i = n("aVXY"),
                a = n("DTvD"),
                c = n.n(a),
                s = n("1Q9x"),
                u = n("KNyl"),
                l = n("naNW"),
                d = n("UiJE"),
                f = n("SYb0"),
                p = n("x4hQ"),
                v = n("T8Gn"),
                h = ["208055", "001499", "001498"],
                m = function(e) {
                    var t = e.submitError,
                        n = e.onCloseErrorModal,
                        r = e.icon,
                        o = void 0 === r ? "warning" : r,
                        i = e.title,
                        h = e.description,
                        m = e.buttonText,
                        g = (0, v.$)(["BioSecMiniprogram", "accounts-ui"]).t,
                        b = (0, a.useMemo)((function() {
                            return "string" === typeof h && !(null === t || void 0 === t ? void 0 : t.code) && (null === h || void 0 === h ? void 0 : h.includes("timeout")) ? g("accounts-ui-system-no-response", {
                                ns: "accounts-ui",
                                defaultValue: "The system is not responding at the moment. Please try again later."
                            }) : h
                        }), [h]);
                    return c().createElement(c().Fragment, null, c().createElement(s.Z, {
                        visible: null === t || void 0 === t ? void 0 : t.show
                    }, (null === t || void 0 === t ? void 0 : t.type) && c().createElement(u.Z, {
                        className: "error-modal",
                        icon: c().createElement(l.Z, {
                            src: (0, p.fW)("warning" === o ? "general-warning" : "general-error"),
                            style: {
                                width: "64px",
                                height: "64px"
                            }
                        }),
                        title: null !== i && void 0 !== i ? i : g("Action Failed"),
                        actions: c().createElement(d.Z, {
                            style: {
                                width: "100%"
                            },
                            onClick: n,
                            variant: "primary"
                        }, null !== m && void 0 !== m ? m : g("Ok")),
                        description: null !== b && void 0 !== b ? b : c().createElement(f.ZP, {
                            className: "typography-Body3",
                            color: "textPrimary"
                        }, "Some error occurred, please try again later.")
                    })))
                };

            function g() {
                var e = (0, i.Z)((0, a.useState)({
                        show: !1
                    }), 2),
                    t = e[0],
                    n = e[1],
                    s = c().useRef();
                return {
                    onCloseErrorModal: function() {
                        var e;
                        n((function(e) {
                            return (0, o.Z)((0, r.Z)({}, e), {
                                show: !1
                            })
                        })), null === (e = s.current) || void 0 === e || e.call(s)
                    },
                    onHandleSubmitError: function(e, t) {
                        var r = {
                            show: !0,
                            type: "general",
                            code: null === e || void 0 === e ? void 0 : e.code,
                            message: null === e || void 0 === e ? void 0 : e.message
                        };
                        n(r), s.current = t
                    },
                    submitError: t
                }
            }
        },
        mDMI: (e, t, n) => {
            "use strict";
            n.d(t, {
                oZ: () => s
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("ALnM"),
                c = function(e) {
                    var t = e.children,
                        n = (0, a.fT)(),
                        r = n.submitError,
                        o = n.onCloseErrorModal,
                        c = n.onHandleSubmitError;
                    return i().createElement(i().Fragment, null, i().cloneElement(t, {
                        onHandleSubmitError: c
                    }), i().createElement(a.qF, {
                        submitError: r,
                        onCloseErrorModal: o,
                        icon: "warning",
                        description: null === r || void 0 === r ? void 0 : r.message
                    }))
                },
                s = function(e) {
                    return function(t) {
                        return i().createElement(c, null, i().createElement(e, (0, r.Z)({}, t)))
                    }
                }
        },
        "+DN6": (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => r
            });
            var r = n("DDQ7").f0
        },
        DDQ7: (e, t, n) => {
            "use strict";
            n.d(t, {
                KC: () => l,
                Pc: () => f,
                T: () => h,
                f0: () => d,
                kH: () => v
            });
            var r = n("DTvD"),
                o = n("YHVh"),
                i = n("sPjN"),
                a = function(e) {
                    return e.userCenter
                },
                c = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.loginStatus
                },
                s = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userInfo
                },
                u = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userPreferredCurrency
                },
                l = function() {
                    return (0, o.v9)(a) || {}
                },
                d = function() {
                    return (0, o.v9)(c, o.wU) || {}
                },
                f = function() {
                    return (0, o.v9)(s, o.wU) || {}
                },
                p = function() {
                    return (0, o.v9)(u, o.wU) || {}
                },
                v = function() {
                    var e = d().isLoggedIn,
                        t = (0, i.CE)().setCacheFiat,
                        n = p().configName;
                    (0, r.useEffect)((function() {
                        e && n && t(n)
                    }), [e, n])
                },
                h = function() {
                    return function() {
                        var e = (0, o.I0)(),
                            t = d().isLoggedIn,
                            n = (0, i.CE)(),
                            a = n.cachePreferFiat,
                            c = n.setCacheFiat,
                            s = p().configName;
                        return {
                            userFiat: (t ? s : a) || a,
                            setUseFiat: (0, r.useMemo)((function() {
                                return t ? function(t) {
                                    return e.userCenter.updateCurrentFiat(t)
                                } : function(e) {
                                    return c(e)
                                }
                            }), [t])
                        }
                    }().userFiat
                }
        },
        lPrA: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => dr
            });
            var r = n("sViW"),
                o = n("BK7R"),
                i = n("QUKP"),
                a = n("q0wl"),
                c = n.n(a),
                s = n("DTvD"),
                u = n.n(s),
                l = n("hTvQ"),
                d = n.n(l),
                f = function(e, t) {
                    return f = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, f(e, t)
                };

            function p(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }

            function v(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }))
            }

            function h(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (c) {
                                i = [6, c], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            }
            Object.create;

            function m(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (c) {
                    o = {
                        error: c
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function b(e, t) {
                for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
                return e
            }

            function y(e) {
                return this instanceof y ? (this.v = e, this) : new y(e)
            }

            function w(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, o = n.apply(e, t || []),
                    i = [];
                return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function a(e) {
                    o[e] && (r[e] = function(t) {
                        return new Promise((function(n, r) {
                            i.push([e, t, n, r]) > 1 || c(e, t)
                        }))
                    })
                }

                function c(e, t) {
                    try {
                        (n = o[e](t)).value instanceof y ? Promise.resolve(n.value.v).then(s, u) : l(i[0][2], n)
                    } catch (r) {
                        l(i[0][3], r)
                    }
                    var n
                }

                function s(e) {
                    c("next", e)
                }

                function u(e) {
                    c("throw", e)
                }

                function l(e, t) {
                    e(t), i.shift(), i.length && c(i[0][0], i[0][1])
                }
            }

            function x(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = m(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise((function(r, o) {
                            (function(e, t, n, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }), t)
                            })(r, o, (t = e[n](t)).done, t.value)
                        }))
                    }
                }
            }
            Object.create;

            function _(e) {
                return "function" === typeof e
            }

            function E(e) {
                var t = e((function(e) {
                    Error.call(e), e.stack = (new Error).stack
                }));
                return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
            }
            var k = E((function(e) {
                return function(t) {
                    e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(e, t) {
                        return t + 1 + ") " + e.toString()
                    })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t
                }
            }));

            function Z(e, t) {
                if (e) {
                    var n = e.indexOf(t);
                    0 <= n && e.splice(n, 1)
                }
            }
            var C = function() {
                    function e(e) {
                        this.initialTeardown = e, this.closed = !1, this._parentage = null, this._teardowns = null
                    }
                    return e.prototype.unsubscribe = function() {
                        var e, t, n, r, o;
                        if (!this.closed) {
                            this.closed = !0;
                            var i = this._parentage;
                            if (i)
                                if (this._parentage = null, Array.isArray(i)) try {
                                    for (var a = m(i), c = a.next(); !c.done; c = a.next()) {
                                        c.value.remove(this)
                                    }
                                } catch (p) {
                                    e = {
                                        error: p
                                    }
                                } finally {
                                    try {
                                        c && !c.done && (t = a.return) && t.call(a)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                } else i.remove(this);
                            var s = this.initialTeardown;
                            if (_(s)) try {
                                s()
                            } catch (v) {
                                o = v instanceof k ? v.errors : [v]
                            }
                            var u = this._teardowns;
                            if (u) {
                                this._teardowns = null;
                                try {
                                    for (var l = m(u), d = l.next(); !d.done; d = l.next()) {
                                        var f = d.value;
                                        try {
                                            I(f)
                                        } catch (h) {
                                            o = null !== o && void 0 !== o ? o : [], h instanceof k ? o = b(b([], g(o)), g(h.errors)) : o.push(h)
                                        }
                                    }
                                } catch (y) {
                                    n = {
                                        error: y
                                    }
                                } finally {
                                    try {
                                        d && !d.done && (r = l.return) && r.call(l)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            }
                            if (o) throw new k(o)
                        }
                    }, e.prototype.add = function(t) {
                        var n;
                        if (t && t !== this)
                            if (this.closed) I(t);
                            else {
                                if (t instanceof e) {
                                    if (t.closed || t._hasParent(this)) return;
                                    t._addParent(this)
                                }(this._teardowns = null !== (n = this._teardowns) && void 0 !== n ? n : []).push(t)
                            }
                    }, e.prototype._hasParent = function(e) {
                        var t = this._parentage;
                        return t === e || Array.isArray(t) && t.includes(e)
                    }, e.prototype._addParent = function(e) {
                        var t = this._parentage;
                        this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e
                    }, e.prototype._removeParent = function(e) {
                        var t = this._parentage;
                        t === e ? this._parentage = null : Array.isArray(t) && Z(t, e)
                    }, e.prototype.remove = function(t) {
                        var n = this._teardowns;
                        n && Z(n, t), t instanceof e && t._removeParent(this)
                    }, e.EMPTY = function() {
                        var t = new e;
                        return t.closed = !0, t
                    }(), e
                }(),
                S = C.EMPTY;

            function T(e) {
                return e instanceof C || e && "closed" in e && _(e.remove) && _(e.add) && _(e.unsubscribe)
            }

            function I(e) {
                _(e) ? e() : e.unsubscribe()
            }
            var P = {
                    onUnhandledError: null,
                    onStoppedNotification: null,
                    Promise: void 0,
                    useDeprecatedSynchronousErrorHandling: !1,
                    useDeprecatedNextContext: !1
                },
                R = {
                    setTimeout: function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = R.delegate;
                        return ((null === n || void 0 === n ? void 0 : n.setTimeout) || setTimeout).apply(void 0, b([], g(e)))
                    },
                    clearTimeout: function(e) {
                        var t = R.delegate;
                        return ((null === t || void 0 === t ? void 0 : t.clearTimeout) || clearTimeout)(e)
                    },
                    delegate: void 0
                };

            function M(e) {
                R.setTimeout((function() {
                    var t = P.onUnhandledError;
                    if (!t) throw e;
                    t(e)
                }))
            }

            function D() {}
            var O = z("C", void 0, void 0);

            function z(e, t, n) {
                return {
                    kind: e,
                    value: t,
                    error: n
                }
            }
            var A = null;

            function L(e) {
                if (P.useDeprecatedSynchronousErrorHandling) {
                    var t = !A;
                    if (t && (A = {
                            errorThrown: !1,
                            error: null
                        }), e(), t) {
                        var n = A,
                            r = n.errorThrown,
                            o = n.error;
                        if (A = null, r) throw o
                    }
                } else e()
            }

            function N(e) {
                P.useDeprecatedSynchronousErrorHandling && A && (A.errorThrown = !0, A.error = e)
            }
            var F = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.isStopped = !1, t ? (n.destination = t, T(t) && t.add(n)) : n.destination = U, n
                    }
                    return p(t, e), t.create = function(e, t, n) {
                        return new j(e, t, n)
                    }, t.prototype.next = function(e) {
                        this.isStopped ? H(function(e) {
                            return z("N", e, void 0)
                        }(e), this) : this._next(e)
                    }, t.prototype.error = function(e) {
                        this.isStopped ? H(z("E", void 0, e), this) : (this.isStopped = !0, this._error(e))
                    }, t.prototype.complete = function() {
                        this.isStopped ? H(O, this) : (this.isStopped = !0, this._complete())
                    }, t.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
                    }, t.prototype._next = function(e) {
                        this.destination.next(e)
                    }, t.prototype._error = function(e) {
                        try {
                            this.destination.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    }, t.prototype._complete = function() {
                        try {
                            this.destination.complete()
                        } finally {
                            this.unsubscribe()
                        }
                    }, t
                }(C),
                j = function(e) {
                    function t(t, n, r) {
                        var o, i = e.call(this) || this;
                        if (_(t)) o = t;
                        else if (t) {
                            var a;
                            o = t.next, n = t.error, r = t.complete, i && P.useDeprecatedNextContext ? (a = Object.create(t)).unsubscribe = function() {
                                return i.unsubscribe()
                            } : a = t, o = null === o || void 0 === o ? void 0 : o.bind(a), n = null === n || void 0 === n ? void 0 : n.bind(a), r = null === r || void 0 === r ? void 0 : r.bind(a)
                        }
                        return i.destination = {
                            next: o ? B(o, i) : D,
                            error: B(null !== n && void 0 !== n ? n : V, i),
                            complete: r ? B(r, i) : D
                        }, i
                    }
                    return p(t, e), t
                }(F);

            function B(e, t) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        e.apply(void 0, b([], g(t)))
                    } catch (r) {
                        P.useDeprecatedSynchronousErrorHandling ? N(r) : M(r)
                    }
                }
            }

            function V(e) {
                throw e
            }

            function H(e, t) {
                var n = P.onStoppedNotification;
                n && R.setTimeout((function() {
                    return n(e, t)
                }))
            }
            var U = {
                    closed: !0,
                    next: D,
                    error: V,
                    complete: D
                },
                G = "function" === typeof Symbol && Symbol.observable || "@@observable";

            function Y(e) {
                return e
            }

            function W(e) {
                return 0 === e.length ? Y : 1 === e.length ? e[0] : function(t) {
                    return e.reduce((function(e, t) {
                        return t(e)
                    }), t)
                }
            }
            var q = function() {
                function e(e) {
                    e && (this._subscribe = e)
                }
                return e.prototype.lift = function(t) {
                    var n = new e;
                    return n.source = this, n.operator = t, n
                }, e.prototype.subscribe = function(e, t, n) {
                    var r, o = this,
                        i = (r = e) && r instanceof F || function(e) {
                            return e && _(e.next) && _(e.error) && _(e.complete)
                        }(r) && T(r) ? e : new j(e, t, n);
                    return L((function() {
                        var e = o,
                            t = e.operator,
                            n = e.source;
                        i.add(t ? t.call(i, n) : n ? o._subscribe(i) : o._trySubscribe(i))
                    })), i
                }, e.prototype._trySubscribe = function(e) {
                    try {
                        return this._subscribe(e)
                    } catch (t) {
                        e.error(t)
                    }
                }, e.prototype.forEach = function(e, t) {
                    var n = this;
                    return new(t = K(t))((function(t, r) {
                        var o;
                        o = n.subscribe((function(t) {
                            try {
                                e(t)
                            } catch (n) {
                                r(n), null === o || void 0 === o || o.unsubscribe()
                            }
                        }), r, t)
                    }))
                }, e.prototype._subscribe = function(e) {
                    var t;
                    return null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)
                }, e.prototype[G] = function() {
                    return this
                }, e.prototype.pipe = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return W(e)(this)
                }, e.prototype.toPromise = function(e) {
                    var t = this;
                    return new(e = K(e))((function(e, n) {
                        var r;
                        t.subscribe((function(e) {
                            return r = e
                        }), (function(e) {
                            return n(e)
                        }), (function() {
                            return e(r)
                        }))
                    }))
                }, e.create = function(t) {
                    return new e(t)
                }, e
            }();

            function K(e) {
                var t;
                return null !== (t = null !== e && void 0 !== e ? e : P.Promise) && void 0 !== t ? t : Promise
            }
            var Q = E((function(e) {
                    return function() {
                        e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
                    }
                })),
                $ = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t.closed = !1, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
                    }
                    return p(t, e), t.prototype.lift = function(e) {
                        var t = new J(this, this);
                        return t.operator = e, t
                    }, t.prototype._throwIfClosed = function() {
                        if (this.closed) throw new Q
                    }, t.prototype.next = function(e) {
                        var t = this;
                        L((function() {
                            var n, r;
                            if (t._throwIfClosed(), !t.isStopped) {
                                var o = t.observers.slice();
                                try {
                                    for (var i = m(o), a = i.next(); !a.done; a = i.next()) {
                                        a.value.next(e)
                                    }
                                } catch (c) {
                                    n = {
                                        error: c
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (r = i.return) && r.call(i)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            }
                        }))
                    }, t.prototype.error = function(e) {
                        var t = this;
                        L((function() {
                            if (t._throwIfClosed(), !t.isStopped) {
                                t.hasError = t.isStopped = !0, t.thrownError = e;
                                for (var n = t.observers; n.length;) n.shift().error(e)
                            }
                        }))
                    }, t.prototype.complete = function() {
                        var e = this;
                        L((function() {
                            if (e._throwIfClosed(), !e.isStopped) {
                                e.isStopped = !0;
                                for (var t = e.observers; t.length;) t.shift().complete()
                            }
                        }))
                    }, t.prototype.unsubscribe = function() {
                        this.isStopped = this.closed = !0, this.observers = null
                    }, Object.defineProperty(t.prototype, "observed", {
                        get: function() {
                            var e;
                            return (null === (e = this.observers) || void 0 === e ? void 0 : e.length) > 0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype._trySubscribe = function(t) {
                        return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
                    }, t.prototype._subscribe = function(e) {
                        return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e)
                    }, t.prototype._innerSubscribe = function(e) {
                        var t = this,
                            n = t.hasError,
                            r = t.isStopped,
                            o = t.observers;
                        return n || r ? S : (o.push(e), new C((function() {
                            return Z(o, e)
                        })))
                    }, t.prototype._checkFinalizedStatuses = function(e) {
                        var t = this,
                            n = t.hasError,
                            r = t.thrownError,
                            o = t.isStopped;
                        n ? e.error(r) : o && e.complete()
                    }, t.prototype.asObservable = function() {
                        var e = new q;
                        return e.source = this, e
                    }, t.create = function(e, t) {
                        return new J(e, t)
                    }, t
                }(q),
                J = function(e) {
                    function t(t, n) {
                        var r = e.call(this) || this;
                        return r.destination = t, r.source = n, r
                    }
                    return p(t, e), t.prototype.next = function(e) {
                        var t, n;
                        null === (n = null === (t = this.destination) || void 0 === t ? void 0 : t.next) || void 0 === n || n.call(t, e)
                    }, t.prototype.error = function(e) {
                        var t, n;
                        null === (n = null === (t = this.destination) || void 0 === t ? void 0 : t.error) || void 0 === n || n.call(t, e)
                    }, t.prototype.complete = function() {
                        var e, t;
                        null === (t = null === (e = this.destination) || void 0 === e ? void 0 : e.complete) || void 0 === t || t.call(e)
                    }, t.prototype._subscribe = function(e) {
                        var t, n;
                        return null !== (n = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)) && void 0 !== n ? n : S
                    }, t
                }($),
                X = new q((function(e) {
                    return e.complete()
                }));

            function ee(e) {
                return function(t) {
                    if (function(e) {
                            return _(null === e || void 0 === e ? void 0 : e.lift)
                        }(t)) return t.lift((function(t) {
                        try {
                            return e(t, this)
                        } catch (n) {
                            this.error(n)
                        }
                    }));
                    throw new TypeError("Unable to lift unknown Observable type")
                }
            }
            var te = function(e) {
                function t(t, n, r, o, i) {
                    var a = e.call(this, t) || this;
                    return a.onFinalize = i, a._next = n ? function(e) {
                        try {
                            n(e)
                        } catch (r) {
                            t.error(r)
                        }
                    } : e.prototype._next, a._error = o ? function(e) {
                        try {
                            o(e)
                        } catch (e) {
                            t.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    } : e.prototype._error, a._complete = r ? function() {
                        try {
                            r()
                        } catch (e) {
                            t.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    } : e.prototype._complete, a
                }
                return p(t, e), t.prototype.unsubscribe = function() {
                    var t, n = this.closed;
                    e.prototype.unsubscribe.call(this), !n && (null === (t = this.onFinalize) || void 0 === t || t.call(this))
                }, t
            }(F);

            function ne(e) {
                return e <= 0 ? function() {
                    return X
                } : ee((function(t, n) {
                    var r = 0;
                    t.subscribe(new te(n, (function(t) {
                        ++r <= e && (n.next(t), e <= r && n.complete())
                    })))
                }))
            }
            var re = n("u7X8"),
                oe = n("ezuS"),
                ie = n("M5j3"),
                ae = n("gZfF"),
                ce = n("aVXY"),
                se = n("N/Z2"),
                ue = n("VtYI"),
                le = n("VlR2"),
                de = n("Dn5G"),
                fe = n("gBph"),
                pe = function(e) {
                    function t(t, n) {
                        return e.call(this) || this
                    }
                    return p(t, e), t.prototype.schedule = function(e, t) {
                        return void 0 === t && (t = 0), this
                    }, t
                }(C),
                ve = {
                    setInterval: function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = ve.delegate;
                        return ((null === n || void 0 === n ? void 0 : n.setInterval) || setInterval).apply(void 0, b([], g(e)))
                    },
                    clearInterval: function(e) {
                        var t = ve.delegate;
                        return ((null === t || void 0 === t ? void 0 : t.clearInterval) || clearInterval)(e)
                    },
                    delegate: void 0
                },
                he = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t, n) || this;
                        return r.scheduler = t, r.work = n, r.pending = !1, r
                    }
                    return p(t, e), t.prototype.schedule = function(e, t) {
                        if (void 0 === t && (t = 0), this.closed) return this;
                        this.state = e;
                        var n = this.id,
                            r = this.scheduler;
                        return null != n && (this.id = this.recycleAsyncId(r, n, t)), this.pending = !0, this.delay = t, this.id = this.id || this.requestAsyncId(r, this.id, t), this
                    }, t.prototype.requestAsyncId = function(e, t, n) {
                        return void 0 === n && (n = 0), ve.setInterval(e.flush.bind(e, this), n)
                    }, t.prototype.recycleAsyncId = function(e, t, n) {
                        if (void 0 === n && (n = 0), null != n && this.delay === n && !1 === this.pending) return t;
                        ve.clearInterval(t)
                    }, t.prototype.execute = function(e, t) {
                        if (this.closed) return new Error("executing a cancelled action");
                        this.pending = !1;
                        var n = this._execute(e, t);
                        if (n) return n;
                        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                    }, t.prototype._execute = function(e, t) {
                        var n, r = !1;
                        try {
                            this.work(e)
                        } catch (o) {
                            r = !0, n = o || new Error("Scheduled action threw falsy error")
                        }
                        if (r) return this.unsubscribe(), n
                    }, t.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            var t = this.id,
                                n = this.scheduler,
                                r = n.actions;
                            this.work = this.state = this.scheduler = null, this.pending = !1, Z(r, this), null != t && (this.id = this.recycleAsyncId(n, t, null)), this.delay = null, e.prototype.unsubscribe.call(this)
                        }
                    }, t
                }(pe),
                me = {
                    now: function() {
                        return (me.delegate || Date).now()
                    },
                    delegate: void 0
                },
                ge = function() {
                    function e(t, n) {
                        void 0 === n && (n = e.now), this.schedulerActionCtor = t, this.now = n
                    }
                    return e.prototype.schedule = function(e, t, n) {
                        return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(n, t)
                    }, e.now = me.now, e
                }(),
                be = new(function(e) {
                    function t(t, n) {
                        void 0 === n && (n = ge.now);
                        var r = e.call(this, t, n) || this;
                        return r.actions = [], r._active = !1, r._scheduled = void 0, r
                    }
                    return p(t, e), t.prototype.flush = function(e) {
                        var t = this.actions;
                        if (this._active) t.push(e);
                        else {
                            var n;
                            this._active = !0;
                            do {
                                if (n = e.execute(e.state, e.delay)) break
                            } while (e = t.shift());
                            if (this._active = !1, n) {
                                for (; e = t.shift();) e.unsubscribe();
                                throw n
                            }
                        }
                    }, t
                }(ge))(he),
                ye = be;

            function we(e) {
                return e && _(e.schedule)
            }

            function xe(e) {
                return e instanceof Date && !isNaN(e)
            }

            function _e(e, t, n) {
                void 0 === e && (e = 0), void 0 === n && (n = ye);
                var r = -1;
                return null != t && (we(t) ? n = t : r = t), new q((function(t) {
                    var o = xe(e) ? +e - n.now() : e;
                    o < 0 && (o = 0);
                    var i = 0;
                    return n.schedule((function() {
                        t.closed || (t.next(i++), 0 <= r ? this.schedule(void 0, r) : t.complete())
                    }), o)
                }))
            }
            var Ee = n("DEOq"),
                ke = n("jYyJ");
            const Ze = function(e) {
                return u().createElement(ke.Z, (0, ie.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M20.7 11.925c0 2.1-.8 4.1-2.3 5.6-1.6 1.5-3.6 2.3-5.6 2.3-2 0-4-.8-5.6-2.3l-1.3-1.3 1.4-1.4 1.3 1.3c2.3 2.3 6 2.3 8.3 0 1.1-1.1 1.7-2.6 1.7-4.2s-.6-3.1-1.7-4.2c-2.3-2.3-6-2.3-8.3 0l-1.1 1.2h3.3v2H4v-6.8h2v3.4l1.2-1.2c3.1-3.1 8.1-3.1 11.2 0 1.5 1.5 2.3 3.5 2.3 5.6z",
                    fill: "currentColor"
                }))
            };
            var Ce = n("lZYQ"),
                Se = function(e) {
                    return e && "number" === typeof e.length && "function" !== typeof e
                };

            function Te(e) {
                return _(null === e || void 0 === e ? void 0 : e.then)
            }

            function Ie(e) {
                return _(e[G])
            }

            function Pe(e) {
                return Symbol.asyncIterator && _(null === e || void 0 === e ? void 0 : e[Symbol.asyncIterator])
            }

            function Re(e) {
                return new TypeError("You provided " + (null !== e && "object" === typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
            }
            var Me = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";

            function De(e) {
                return _(null === e || void 0 === e ? void 0 : e[Me])
            }

            function Oe(e) {
                return w(this, arguments, (function() {
                    var t, n, r;
                    return h(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = e.getReader(), o.label = 1;
                            case 1:
                                o.trys.push([1, , 9, 10]), o.label = 2;
                            case 2:
                                return [4, y(t.read())];
                            case 3:
                                return n = o.sent(), r = n.value, n.done ? [4, y(void 0)] : [3, 5];
                            case 4:
                                return [2, o.sent()];
                            case 5:
                                return [4, y(r)];
                            case 6:
                                return [4, o.sent()];
                            case 7:
                                return o.sent(), [3, 2];
                            case 8:
                                return [3, 10];
                            case 9:
                                return t.releaseLock(), [7];
                            case 10:
                                return [2]
                        }
                    }))
                }))
            }

            function ze(e) {
                return _(null === e || void 0 === e ? void 0 : e.getReader)
            }

            function Ae(e) {
                if (e instanceof q) return e;
                if (null != e) {
                    if (Ie(e)) return o = e, new q((function(e) {
                        var t = o[G]();
                        if (_(t.subscribe)) return t.subscribe(e);
                        throw new TypeError("Provided object does not correctly implement Symbol.observable")
                    }));
                    if (Se(e)) return r = e, new q((function(e) {
                        for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
                        e.complete()
                    }));
                    if (Te(e)) return n = e, new q((function(e) {
                        n.then((function(t) {
                            e.closed || (e.next(t), e.complete())
                        }), (function(t) {
                            return e.error(t)
                        })).then(null, M)
                    }));
                    if (Pe(e)) return Le(e);
                    if (De(e)) return t = e, new q((function(e) {
                        var n, r;
                        try {
                            for (var o = m(t), i = o.next(); !i.done; i = o.next()) {
                                var a = i.value;
                                if (e.next(a), e.closed) return
                            }
                        } catch (c) {
                            n = {
                                error: c
                            }
                        } finally {
                            try {
                                i && !i.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        e.complete()
                    }));
                    if (ze(e)) return Le(Oe(e))
                }
                var t, n, r, o;
                throw Re(e)
            }

            function Le(e) {
                return new q((function(t) {
                    (function(e, t) {
                        var n, r, o, i;
                        return v(this, void 0, void 0, (function() {
                            var a, c;
                            return h(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        s.trys.push([0, 5, 6, 11]), n = x(e), s.label = 1;
                                    case 1:
                                        return [4, n.next()];
                                    case 2:
                                        if ((r = s.sent()).done) return [3, 4];
                                        if (a = r.value, t.next(a), t.closed) return [2];
                                        s.label = 3;
                                    case 3:
                                        return [3, 1];
                                    case 4:
                                        return [3, 11];
                                    case 5:
                                        return c = s.sent(), o = {
                                            error: c
                                        }, [3, 11];
                                    case 6:
                                        return s.trys.push([6, , 9, 10]), r && !r.done && (i = n.return) ? [4, i.call(n)] : [3, 8];
                                    case 7:
                                        s.sent(), s.label = 8;
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        if (o) throw o.error;
                                        return [7];
                                    case 10:
                                        return [7];
                                    case 11:
                                        return t.complete(), [2]
                                }
                            }))
                        }))
                    })(e, t).catch((function(e) {
                        return t.error(e)
                    }))
                }))
            }

            function Ne(e, t) {
                return ee((function(n, r) {
                    var o = 0;
                    n.subscribe(new te(r, (function(n) {
                        r.next(e.call(t, n, o++))
                    })))
                }))
            }

            function Fe(e, t, n, r, o) {
                void 0 === r && (r = 0), void 0 === o && (o = !1);
                var i = t.schedule((function() {
                    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe()
                }), r);
                if (e.add(i), !o) return i
            }

            function je(e, t, n) {
                return void 0 === n && (n = 1 / 0), _(t) ? je((function(n, r) {
                    return Ne((function(e, o) {
                        return t(n, e, r, o)
                    }))(Ae(e(n, r)))
                }), n) : ("number" === typeof t && (n = t), ee((function(t, r) {
                    return function(e, t, n, r, o, i, a, c) {
                        var s = [],
                            u = 0,
                            l = 0,
                            d = !1,
                            f = function() {
                                !d || s.length || u || t.complete()
                            },
                            p = function(e) {
                                return u < r ? v(e) : s.push(e)
                            },
                            v = function(e) {
                                i && t.next(e), u++;
                                var c = !1;
                                Ae(n(e, l++)).subscribe(new te(t, (function(e) {
                                    null === o || void 0 === o || o(e), i ? p(e) : t.next(e)
                                }), (function() {
                                    c = !0
                                }), void 0, (function() {
                                    if (c) try {
                                        u--;
                                        for (var e = function() {
                                                var e = s.shift();
                                                a ? Fe(t, a, (function() {
                                                    return v(e)
                                                })) : v(e)
                                            }; s.length && u < r;) e();
                                        f()
                                    } catch (n) {
                                        t.error(n)
                                    }
                                })))
                            };
                        return e.subscribe(new te(t, p, (function() {
                                d = !0, f()
                            }))),
                            function() {
                                null === c || void 0 === c || c()
                            }
                    }(t, r, e, n)
                })))
            }
            var Be = Array.isArray;

            function Ve(e) {
                return Ne((function(t) {
                    return function(e, t) {
                        return Be(t) ? e.apply(void 0, b([], g(t))) : e(t)
                    }(e, t)
                }))
            }
            var He = ["addListener", "removeListener"],
                Ue = ["addEventListener", "removeEventListener"],
                Ge = ["on", "off"];

            function Ye(e, t, n, r) {
                if (_(n) && (r = n, n = void 0), r) return Ye(e, t, n).pipe(Ve(r));
                var o = g(function(e) {
                        return _(e.addEventListener) && _(e.removeEventListener)
                    }(e) ? Ue.map((function(r) {
                        return function(o) {
                            return e[r](t, o, n)
                        }
                    })) : function(e) {
                        return _(e.addListener) && _(e.removeListener)
                    }(e) ? He.map(We(e, t)) : function(e) {
                        return _(e.on) && _(e.off)
                    }(e) ? Ge.map(We(e, t)) : [], 2),
                    i = o[0],
                    a = o[1];
                if (!i && Se(e)) return je((function(e) {
                    return Ye(e, t, n)
                }))(Ae(e));
                if (!i) throw new TypeError("Invalid event target");
                return new q((function(e) {
                    var t = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        return e.next(1 < t.length ? t : t[0])
                    };
                    return i(t),
                        function() {
                            return a(t)
                        }
                }))
            }

            function We(e, t) {
                return function(n) {
                    return function(r) {
                        return e[n](t, r)
                    }
                }
            }

            function qe(e, t) {
                var n = _(e) ? e : function() {
                        return e
                    },
                    r = function(e) {
                        return e.error(n())
                    };
                return new q(t ? function(e) {
                    return t.schedule(r, 0, e)
                } : r)
            }
            var Ke = Array.isArray;

            function Qe(e) {
                return 1 === e.length && Ke(e[0]) ? e[0] : e
            }

            function $e(e) {
                return void 0 === e && (e = 1 / 0), je(Y, e)
            }

            function Je(e) {
                return e[e.length - 1]
            }

            function Xe(e) {
                return _(Je(e)) ? e.pop() : void 0
            }

            function et(e) {
                return we(Je(e)) ? e.pop() : void 0
            }

            function tt(e, t) {
                return "number" === typeof Je(e) ? e.pop() : t
            }

            function nt(e, t) {
                return void 0 === t && (t = 0), ee((function(n, r) {
                    n.subscribe(new te(r, (function(n) {
                        return Fe(r, e, (function() {
                            return r.next(n)
                        }), t)
                    }), (function() {
                        return Fe(r, e, (function() {
                            return r.complete()
                        }), t)
                    }), (function(n) {
                        return Fe(r, e, (function() {
                            return r.error(n)
                        }), t)
                    })))
                }))
            }

            function rt(e, t) {
                return void 0 === t && (t = 0), ee((function(n, r) {
                    r.add(e.schedule((function() {
                        return n.subscribe(r)
                    }), t))
                }))
            }

            function ot(e, t) {
                if (!e) throw new Error("Iterable cannot be null");
                return new q((function(n) {
                    Fe(n, t, (function() {
                        var r = e[Symbol.asyncIterator]();
                        Fe(n, t, (function() {
                            r.next().then((function(e) {
                                e.done ? n.complete() : n.next(e.value)
                            }))
                        }), 0, !0)
                    }))
                }))
            }

            function it(e, t) {
                if (null != e) {
                    if (Ie(e)) return function(e, t) {
                        return Ae(e).pipe(rt(t), nt(t))
                    }(e, t);
                    if (Se(e)) return function(e, t) {
                        return new q((function(n) {
                            var r = 0;
                            return t.schedule((function() {
                                r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule())
                            }))
                        }))
                    }(e, t);
                    if (Te(e)) return function(e, t) {
                        return Ae(e).pipe(rt(t), nt(t))
                    }(e, t);
                    if (Pe(e)) return ot(e, t);
                    if (De(e)) return function(e, t) {
                        return new q((function(n) {
                            var r;
                            return Fe(n, t, (function() {
                                    r = e[Me](), Fe(n, t, (function() {
                                        var e, t, o;
                                        try {
                                            t = (e = r.next()).value, o = e.done
                                        } catch (i) {
                                            return void n.error(i)
                                        }
                                        o ? n.complete() : n.next(t)
                                    }), 0, !0)
                                })),
                                function() {
                                    return _(null === r || void 0 === r ? void 0 : r.return) && r.return()
                                }
                        }))
                    }(e, t);
                    if (ze(e)) return function(e, t) {
                        return ot(Oe(e), t)
                    }(e, t)
                }
                throw Re(e)
            }

            function at(e, t) {
                return t ? it(e, t) : Ae(e)
            }

            function ct() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = et(e),
                    r = tt(e, 1 / 0);
                return e = Qe(e), ee((function(t, o) {
                    $e(r)(at(b([t], g(e)), n)).subscribe(o)
                }))
            }
            var st = E((function(e) {
                return function(t) {
                    void 0 === t && (t = null), e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t
                }
            }));

            function ut(e, t) {
                var n = xe(e) ? {
                        first: e
                    } : "number" === typeof e ? {
                        each: e
                    } : e,
                    r = n.first,
                    o = n.each,
                    i = n.with,
                    a = void 0 === i ? lt : i,
                    c = n.scheduler,
                    s = void 0 === c ? null !== t && void 0 !== t ? t : be : c,
                    u = n.meta,
                    l = void 0 === u ? null : u;
                if (null == r && null == o) throw new TypeError("No timeout provided.");
                return ee((function(e, t) {
                    var n, i, c = null,
                        u = 0,
                        d = function(e) {
                            i = Fe(t, s, (function() {
                                try {
                                    n.unsubscribe(), Ae(a({
                                        meta: l,
                                        lastValue: c,
                                        seen: u
                                    })).subscribe(t)
                                } catch (e) {
                                    t.error(e)
                                }
                            }), e)
                        };
                    n = e.subscribe(new te(t, (function(e) {
                        null === i || void 0 === i || i.unsubscribe(), u++, t.next(c = e), o > 0 && d(o)
                    }), void 0, void 0, (function() {
                        (null === i || void 0 === i ? void 0 : i.closed) || null === i || void 0 === i || i.unsubscribe(), c = null
                    }))), d(null != r ? "number" === typeof r ? r : +r - s.now() : o)
                }))
            }

            function lt(e) {
                throw new st(e)
            }

            function dt() {
                return window
            }

            function ft() {
                return Math
            }

            function pt() {
                return navigator
            }
            var vt = String.fromCharCode;

            function ht(e) {
                for (var t = function(e, t) {
                        return vt(e >> t & 63 | 128)
                    }, n = function(e) {
                        if (0 === (4294967168 & e)) return vt(e);
                        var n = "";
                        return 0 === (4294965248 & e) ? n = vt(e >> 6 & 31 | 192) : 0 === (4294901760 & e) ? (! function(e) {
                            if (e >= 55296 && e <= 57343) throw Error("not a scalar value")
                        }(e), n = vt(e >> 12 & 15 | 224), n += t(e, 6)) : 0 === (4292870144 & e) && (n = vt(e >> 18 & 7 | 240), n += t(e, 12), n += t(e, 6)), n += vt(63 & e | 128)
                    }, r = function(e) {
                        for (var t = [], n = 0, r = e.length; n < r;) {
                            var o = e.charCodeAt(n++);
                            t.push(o)
                        }
                        return t
                    }(e), o = -1, i = ""; ++o < r.length;) {
                    i += n(r[o])
                }
                return i
            }

            function mt(e, t) {
                var n = t.split("").reverse().join("");
                return function(e, t) {
                    if (t = t || "cdababcddcba", !e) return "";
                    for (var n = ht(e), r = "", o = 0; o < n.length; o++) r += vt(n.charCodeAt(o) ^ t.charCodeAt(o % t.length));
                    return function(e) {
                        var t = "";
                        t += "ABCDEFGHIJKLMNOPQRSTUVWXYZ", t += "abcdefghijklmnopqrstuvwxyz", t += "0123456789", t += "+/";
                        for (var n = e.length, r = [], o = 0; o < n; o++) r[o >>> 2] |= (255 & e.charCodeAt(o)) << 24 - o % 4 * 8;
                        for (var i = [], a = 0; a < n; a += 3)
                            for (var c = (r[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (r[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | r[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, s = 0; s < 4 && a + .75 * s < n; s++) i.push(t.charAt(c >>> 6 * (3 - s) & 63));
                        for (var u = 0; u < i.length % 4; u++) i.push("=");
                        return i.join("")
                    }(r)
                }(e, n + function(e, t, n) {
                    if ("" === e) return "";
                    for (var r = ["a", "b", "c", "d", "h", "i", "j", "k", "x", "y"].join(""), o = Math.floor(e.length / t), i = [], a = 0; a < t; a++) {
                        for (var c = 0, s = a * o, u = a === t - 1 ? o + e.length % t : o, l = 0; l < u; l++) {
                            var d = s + l;
                            d < e.length && (c += e.charCodeAt(d))
                        }
                        c *= n || 31, i.push(r.charAt(c % r.length))
                    }
                    return i.join("")
                }(n, 4))
            }

            function gt() {
                var e, t = function() {
                        return 2 * ft().floor(50 * ft().random())
                    },
                    n = function() {
                        return 2 * ft().floor(50 * ft().random()) + 1
                    },
                    r = function() {
                        for (var e = [], r = "plugins|mimeTypes|webdriver|languages".split("|"), o = 0; o < r.length; o++) {
                            var i = Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(pt(), r[o]) ? t() : n();
                            e.push(i)
                        }
                        return e.join(",")
                    }();
                return e = {}, (0, oe.Z)(e, "wd", ["$", "cd", "c_a", "sdjflasut", "opfhvc", "ZLmcfl_"].join("") in document || pt()[["we", "bdr", "iver"].join("")] ? t() : n()), (0, oe.Z)(e, "im", new RegExp("Android|webOS|iPhone|iPad|iPod|BlackBerry|Mobile", "i").test(pt().userAgent) || "ontouchstart" in dt() || "orientation" in dt() ? t() : n()), (0, oe.Z)(e, "de", function() {
                    if ("undefined" !== typeof captcha_native) try {
                        return captcha_native.geDe()
                    } catch (e) {}
                    return ""
                }()), (0, oe.Z)(e, "brla", pt().browserLanguage ? t() : n()), (0, oe.Z)(e, "prde", r), (0, oe.Z)(e, "pl", pt().platform), (0, oe.Z)(e, "wiinhe", dt().innerHeight), (0, oe.Z)(e, "wiouhe", dt().outerHeight), e
            }
            var bt, yt = "/bapi/composite/v1/public/antibot",
                wt = "/bapi/composite";

            function xt(e) {
                var t = e.nativeSdkVersion,
                    n = {
                        "content-type": "text/plain",
                        "Captcha-Sdk-Version": "1.0.2"
                    };
                return t ? (0, i.Z)((0, o.Z)({}, n), {
                    "Captcha-Native-Sdk-Version": t
                }) : n
            }

            function _t(e) {
                return Object.entries(e).map((function(e) {
                    var t = (0, ce.Z)(e, 2),
                        n = t[0],
                        r = t[1];
                    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(r))
                })).join("&")
            }

            function Et(e, t) {
                return !0 === e.fb || "true" === e.fb ? "".concat(wt).concat(e.path) : t + e.path2
            }

            function kt(e, t) {
                return Zt.apply(this, arguments)
            }

            function Zt() {
                return (Zt = (0, r.Z)(c().mark((function e(t, n) {
                    var r, a, s, u, l;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, r = _t(t), e.next = 4, (0, Ce.postForm)("".concat(yt, "/getCaptcha"), r, {
                                    headers: xt(n)
                                });
                            case 4:
                                if (!(a = e.sent).data) {
                                    e.next = 13;
                                    break
                                }
                                return s = n.staticHost, u = Et(a.data, s), (l = new Image).src = u, e.next = 12, Ye(l, "load").pipe(ct(Ye(l, "error").pipe(je((function(e) {
                                    return qe(e)
                                })))), ne(1), ut(1e4)).toPromise();
                            case 12:
                                return e.abrupt("return", (0, i.Z)((0, o.Z)({}, a.data), {
                                    imageUrl: u
                                }));
                            case 13:
                                return e.abrupt("return", void 0);
                            case 16:
                                return e.prev = 16, e.t0 = e.catch(0), e.abrupt("return", void 0);
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 16]
                    ])
                })))).apply(this, arguments)
            }

            function Ct(e, t) {
                return St.apply(this, arguments)
            }

            function St() {
                return (St = (0, r.Z)(c().mark((function e(t, n) {
                    var r, a, s, u, l;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, r = _t(t), e.next = 4, (0, Ce.postForm)("".concat(yt, "/refreshCaptcha"), r, {
                                    headers: xt(n)
                                });
                            case 4:
                                if (!(a = e.sent).data) {
                                    e.next = 13;
                                    break
                                }
                                return s = n.staticHost, u = Et(a.data, s), (l = new Image).src = u, e.next = 12, Ye(l, "load").pipe(ct(Ye(l, "error").pipe(je((function(e) {
                                    return qe(e)
                                })))), ne(1), ut(1e4)).toPromise();
                            case 12:
                                return e.abrupt("return", (0, i.Z)((0, o.Z)({}, a.data), {
                                    imageUrl: u
                                }));
                            case 13:
                                return e.abrupt("return", void 0);
                            case 16:
                                return e.prev = 16, e.t0 = e.catch(0), e.abrupt("return", void 0);
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 16]
                    ])
                })))).apply(this, arguments)
            }

            function Tt(e, t, n, r) {
                var o = {
                        ev: gt(),
                        be: n.getBehaviorResult(),
                        dist: e
                    },
                    i = mt(JSON.stringify(o), r.ek);
                return {
                    bizId: t,
                    sig: r.sig,
                    data: i
                }
            }

            function It(e, t) {
                return Pt.apply(this, arguments)
            }

            function Pt() {
                return (Pt = (0, r.Z)(c().mark((function e(t, n) {
                    var r, o;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = _t(t), e.prev = 1, e.next = 4, (0, Ce.postForm)("".concat(yt, "/validateCaptcha"), r, {
                                    headers: xt(n)
                                });
                            case 4:
                                if (!(o = e.sent).data) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", o.data);
                            case 7:
                                return e.abrupt("return", void 0);
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(1), e.abrupt("return", void 0);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))).apply(this, arguments)
            }! function(e) {
                e[e.Success = 0] = "Success", e[e.Fail = 1] = "Fail", e[e.Timeout = 2] = "Timeout", e[e.Exception = 3] = "Exception", e[e.NeedReload = 4] = "NeedReload", e[e.TryTooMany = 5] = "TryTooMany"
            }(bt || (bt = {}));
            var Rt, Mt = n("xXd1"),
                Dt = n("5mj1"),
                Ot = n("888e"),
                zt = n("2URn"),
                At = (Rt = {}, (0, oe.Z)(Rt, "mousemove", "mm"), (0, oe.Z)(Rt, "mousedown", "md"), (0, oe.Z)(Rt, "click", "cl"), (0, oe.Z)(Rt, "mouseup", "mu"), (0, oe.Z)(Rt, "touchstart", "ts"), (0, oe.Z)(Rt, "touchmove", "tm"), (0, oe.Z)(Rt, "touchend", "te"), (0, oe.Z)(Rt, "touchcancel", "tc"), (0, oe.Z)(Rt, "mouseenter", "me"), (0, oe.Z)(Rt, "mouseout", "mo"), Rt);

            function Lt(e) {
                return function(t) {
                    t && t.setAttribute("_id", e)
                }
            }
            var Nt = function() {
                function e() {
                    (0, Ot.Z)(this, e), this.eventCount = {}, this.eventList = [], this.thumbnailEventList = [], this.lastEventTime = 0
                }
                var t = e.prototype;
                return t.collectEvent = function(e, t) {
                    var n = t.type,
                        r = function(e) {
                            var t = "";
                            return "undefined" !== typeof TouchEvent && (0, zt.Z)(e, TouchEvent) && e.touches && e.touches.length > 0 ? t = "".concat(ft().floor(e.touches[0].clientX), ",").concat(ft().floor(e.touches[0].clientY)) : (0, zt.Z)(e, MouseEvent) && (t = void 0 !== e.clientY ? "".concat(ft().floor(e.clientX), ",").concat(ft().floor(e.clientY)) : ""), t
                        }(e),
                        o = "";
                    (0, zt.Z)(e.target, Element) && (o = function(e) {
                        var t = null;
                        for (t = e.getAttribute("_id"); null === t && e.parentElement;) t = (e = e.parentElement).getAttribute("_id");
                        return t
                    }(e.target) || "");
                    var i = At[n];
                    i || (i = n), this.eventCount[i] = (this.eventCount[i] || 0) + 1;
                    var a = (new Date).getTime(),
                        c = this.lastEventTime ? a - this.lastEventTime : a;
                    this.lastEventTime = a;
                    var s = 1;
                    !1 === e.isTrusted ? s = 0 : void 0 === e.isTrusted && (s = 2), this.eventList.length > 150 || this.eventList.push([o, i, r, c, s].join("|"))
                }, t.collectSlideThumbnailEvent = function(e, t, n) {
                    var r = function(e, t) {
                            try {
                                var n = e.getBoundingClientRect(),
                                    r = ft().round(t.clientX - n.left),
                                    o = ft().round(t.clientY - n.top);
                                return {
                                    x: ft().floor(r).toString(),
                                    y: ft().floor(o).toString()
                                }
                            } catch (i) {
                                return {
                                    x: "",
                                    y: ""
                                }
                            }
                        }(e, t),
                        o = n.type,
                        i = [At[o], "".concat(r.x, ",").concat(r.y)];
                    this.thumbnailEventList.length > 30 || this.thumbnailEventList.push(i.join("|"))
                }, t.setThumbnailSize = function(e) {
                    this.thumbnailSize = function(e) {
                        try {
                            var t = e.getBoundingClientRect();
                            return {
                                w: ft().floor(t.width),
                                h: ft().floor(t.height)
                            }
                        } catch (n) {
                            return {
                                w: "",
                                h: ""
                            }
                        }
                    }(e)
                }, t.getReactThumbnailEventCollector = function(e) {
                    var t = this,
                        n = function(n) {
                            t.collectSlideThumbnailEvent(e, n.nativeEvent, n)
                        };
                    return {
                        onMouseEnter: n,
                        onMouseMove: n,
                        onMouseDown: n
                    }
                }, t.getReactEventCollector = function() {
                    var e = this,
                        t = function(t) {
                            e.collectEvent(t.nativeEvent, t)
                        };
                    return {
                        onMouseMove: t,
                        onMouseDown: t,
                        onClick: t,
                        onMouseUp: t,
                        onTouchStart: t,
                        onTouchMove: t,
                        onTouchEnd: t,
                        onTouchCancel: t
                    }
                }, t.getBehaviorResult = function() {
                    var e, t;
                    return t = {}, (0, oe.Z)(t, "ec", this.eventCount), (0, oe.Z)(t, "el", this.eventList), (0, oe.Z)(t, "th", (e = {}, (0, oe.Z)(e, "el", this.thumbnailEventList), (0, oe.Z)(e, "si", this.thumbnailSize), e)), t
                }, t.reset = function() {
                    this.eventCount = {}, this.eventList = [], this.thumbnailEventList = [], this.lastEventTime = 0
                }, e
            }();

            function Ft(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (c) {
                    o = {
                        error: c
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }
            const jt = function(e) {
                var t = (0, s.useRef)();
                return t.current || (t.current = {
                    v: e()
                }), t.current.v
            };
            var Bt = function(e, t) {
                return Bt = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }, Bt(e, t)
            };

            function Vt(e, t) {
                function n() {
                    this.constructor = e
                }
                Bt(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }

            function Ht(e) {
                return "function" === typeof e
            }
            var Ut = !1,
                Gt = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(e) {
                        e && (new Error).stack;
                        Ut = e
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return Ut
                    }
                };

            function Yt(e) {
                setTimeout((function() {
                    throw e
                }), 0)
            }
            var Wt = {
                    closed: !0,
                    next: function(e) {},
                    error: function(e) {
                        if (Gt.useDeprecatedSynchronousErrorHandling) throw e;
                        Yt(e)
                    },
                    complete: function() {}
                },
                qt = function() {
                    return Array.isArray || function(e) {
                        return e && "number" === typeof e.length
                    }
                }();
            var Kt = function() {
                    function e(e) {
                        return Error.call(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map((function(e, t) {
                            return t + 1 + ") " + e.toString()
                        })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e, this
                    }
                    return e.prototype = Object.create(Error.prototype), e
                }(),
                Qt = function() {
                    function e(e) {
                        this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e)
                    }
                    return e.prototype.unsubscribe = function() {
                        var t;
                        if (!this.closed) {
                            var n, r = this,
                                o = r._parentOrParents,
                                i = r._ctorUnsubscribe,
                                a = r._unsubscribe,
                                c = r._subscriptions;
                            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, o instanceof e) o.remove(this);
                            else if (null !== o)
                                for (var s = 0; s < o.length; ++s) {
                                    o[s].remove(this)
                                }
                            if (Ht(a)) {
                                i && (this._unsubscribe = void 0);
                                try {
                                    a.call(this)
                                } catch (d) {
                                    t = d instanceof Kt ? $t(d.errors) : [d]
                                }
                            }
                            if (qt(c)) {
                                s = -1;
                                for (var u = c.length; ++s < u;) {
                                    var l = c[s];
                                    if (null !== (n = l) && "object" === typeof n) try {
                                        l.unsubscribe()
                                    } catch (d) {
                                        t = t || [], d instanceof Kt ? t = t.concat($t(d.errors)) : t.push(d)
                                    }
                                }
                            }
                            if (t) throw new Kt(t)
                        }
                    }, e.prototype.add = function(t) {
                        var n = t;
                        if (!t) return e.EMPTY;
                        switch (typeof t) {
                            case "function":
                                n = new e(t);
                            case "object":
                                if (n === this || n.closed || "function" !== typeof n.unsubscribe) return n;
                                if (this.closed) return n.unsubscribe(), n;
                                if (!(n instanceof e)) {
                                    var r = n;
                                    (n = new e)._subscriptions = [r]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + t + " added to Subscription.")
                        }
                        var o = n._parentOrParents;
                        if (null === o) n._parentOrParents = this;
                        else if (o instanceof e) {
                            if (o === this) return n;
                            n._parentOrParents = [o, this]
                        } else {
                            if (-1 !== o.indexOf(this)) return n;
                            o.push(this)
                        }
                        var i = this._subscriptions;
                        return null === i ? this._subscriptions = [n] : i.push(n), n
                    }, e.prototype.remove = function(e) {
                        var t = this._subscriptions;
                        if (t) {
                            var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                        }
                    }, e.EMPTY = function(e) {
                        return e.closed = !0, e
                    }(new e), e
                }();

            function $t(e) {
                return e.reduce((function(e, t) {
                    return e.concat(t instanceof Kt ? t.errors : t)
                }), [])
            }
            var Jt = function() {
                    return "function" === typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
                }(),
                Xt = function(e) {
                    function t(n, r, o) {
                        var i = e.call(this) || this;
                        switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
                            case 0:
                                i.destination = Wt;
                                break;
                            case 1:
                                if (!n) {
                                    i.destination = Wt;
                                    break
                                }
                                if ("object" === typeof n) {
                                    n instanceof t ? (i.syncErrorThrowable = n.syncErrorThrowable, i.destination = n, n.add(i)) : (i.syncErrorThrowable = !0, i.destination = new en(i, n));
                                    break
                                }
                            default:
                                i.syncErrorThrowable = !0, i.destination = new en(i, n, r, o)
                        }
                        return i
                    }
                    return Vt(t, e), t.prototype[Jt] = function() {
                        return this
                    }, t.create = function(e, n, r) {
                        var o = new t(e, n, r);
                        return o.syncErrorThrowable = !1, o
                    }, t.prototype.next = function(e) {
                        this.isStopped || this._next(e)
                    }, t.prototype.error = function(e) {
                        this.isStopped || (this.isStopped = !0, this._error(e))
                    }, t.prototype.complete = function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, t.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
                    }, t.prototype._next = function(e) {
                        this.destination.next(e)
                    }, t.prototype._error = function(e) {
                        this.destination.error(e), this.unsubscribe()
                    }, t.prototype._complete = function() {
                        this.destination.complete(), this.unsubscribe()
                    }, t.prototype._unsubscribeAndRecycle = function() {
                        var e = this._parentOrParents;
                        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
                    }, t
                }(Qt),
                en = function(e) {
                    function t(t, n, r, o) {
                        var i, a = e.call(this) || this;
                        a._parentSubscriber = t;
                        var c = a;
                        return Ht(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== Wt && (Ht((c = Object.create(n)).unsubscribe) && a.add(c.unsubscribe.bind(c)), c.unsubscribe = a.unsubscribe.bind(a))), a._context = c, a._next = i, a._error = r, a._complete = o, a
                    }
                    return Vt(t, e), t.prototype.next = function(e) {
                        if (!this.isStopped && this._next) {
                            var t = this._parentSubscriber;
                            Gt.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                        }
                    }, t.prototype.error = function(e) {
                        if (!this.isStopped) {
                            var t = this._parentSubscriber,
                                n = Gt.useDeprecatedSynchronousErrorHandling;
                            if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                            else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : Yt(e), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), n) throw e;
                                Yt(e)
                            }
                        }
                    }, t.prototype.complete = function() {
                        var e = this;
                        if (!this.isStopped) {
                            var t = this._parentSubscriber;
                            if (this._complete) {
                                var n = function() {
                                    return e._complete.call(e._context)
                                };
                                Gt.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }, t.prototype.__tryOrUnsub = function(e, t) {
                        try {
                            e.call(this._context, t)
                        } catch (n) {
                            if (this.unsubscribe(), Gt.useDeprecatedSynchronousErrorHandling) throw n;
                            Yt(n)
                        }
                    }, t.prototype.__tryOrSetError = function(e, t, n) {
                        if (!Gt.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            t.call(this._context, n)
                        } catch (r) {
                            return Gt.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = r, e.syncErrorThrown = !0, !0) : (Yt(r), !0)
                        }
                        return !1
                    }, t.prototype._unsubscribe = function() {
                        var e = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, e.unsubscribe()
                    }, t
                }(Xt);
            var tn = function() {
                return "function" === typeof Symbol && Symbol.observable || "@@observable"
            }();

            function nn(e) {
                return e
            }

            function rn(e) {
                return 0 === e.length ? nn : 1 === e.length ? e[0] : function(t) {
                    return e.reduce((function(e, t) {
                        return t(e)
                    }), t)
                }
            }
            var on = function() {
                function e(e) {
                    this._isScalar = !1, e && (this._subscribe = e)
                }
                return e.prototype.lift = function(t) {
                    var n = new e;
                    return n.source = this, n.operator = t, n
                }, e.prototype.subscribe = function(e, t, n) {
                    var r = this.operator,
                        o = function(e, t, n) {
                            if (e) {
                                if (e instanceof Xt) return e;
                                if (e[Jt]) return e[Jt]()
                            }
                            return e || t || n ? new Xt(e, t, n) : new Xt(Wt)
                        }(e, t, n);
                    if (r ? o.add(r.call(o, this.source)) : o.add(this.source || Gt.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), Gt.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                    return o
                }, e.prototype._trySubscribe = function(e) {
                    try {
                        return this._subscribe(e)
                    } catch (t) {
                        Gt.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), ! function(e) {
                            for (; e;) {
                                var t = e,
                                    n = t.closed,
                                    r = t.destination,
                                    o = t.isStopped;
                                if (n || o) return !1;
                                e = r && r instanceof Xt ? r : null
                            }
                            return !0
                        }(e) ? console.warn(t) : e.error(t)
                    }
                }, e.prototype.forEach = function(e, t) {
                    var n = this;
                    return new(t = an(t))((function(t, r) {
                        var o;
                        o = n.subscribe((function(t) {
                            try {
                                e(t)
                            } catch (n) {
                                r(n), o && o.unsubscribe()
                            }
                        }), r, t)
                    }))
                }, e.prototype._subscribe = function(e) {
                    var t = this.source;
                    return t && t.subscribe(e)
                }, e.prototype[tn] = function() {
                    return this
                }, e.prototype.pipe = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return 0 === e.length ? this : rn(e)(this)
                }, e.prototype.toPromise = function(e) {
                    var t = this;
                    return new(e = an(e))((function(e, n) {
                        var r;
                        t.subscribe((function(e) {
                            return r = e
                        }), (function(e) {
                            return n(e)
                        }), (function() {
                            return e(r)
                        }))
                    }))
                }, e.create = function(t) {
                    return new e(t)
                }, e
            }();

            function an(e) {
                if (e || (e = Gt.Promise || Promise), !e) throw new Error("no Promise impl found");
                return e
            }
            var cn = function() {
                    function e() {
                        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                    }
                    return e.prototype = Object.create(Error.prototype), e
                }(),
                sn = function(e) {
                    function t(t, n) {
                        var r = e.call(this) || this;
                        return r.subject = t, r.subscriber = n, r.closed = !1, r
                    }
                    return Vt(t, e), t.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            this.closed = !0;
                            var e = this.subject,
                                t = e.observers;
                            if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
                                var n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1)
                            }
                        }
                    }, t
                }(Qt),
                un = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.destination = t, n
                    }
                    return Vt(t, e), t
                }(Xt),
                ln = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t.observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
                    }
                    return Vt(t, e), t.prototype[Jt] = function() {
                        return new un(this)
                    }, t.prototype.lift = function(e) {
                        var t = new dn(this, this);
                        return t.operator = e, t
                    }, t.prototype.next = function(e) {
                        if (this.closed) throw new cn;
                        if (!this.isStopped)
                            for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].next(e)
                    }, t.prototype.error = function(e) {
                        if (this.closed) throw new cn;
                        this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                        for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].error(e);
                        this.observers.length = 0
                    }, t.prototype.complete = function() {
                        if (this.closed) throw new cn;
                        this.isStopped = !0;
                        for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++) n[r].complete();
                        this.observers.length = 0
                    }, t.prototype.unsubscribe = function() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }, t.prototype._trySubscribe = function(t) {
                        if (this.closed) throw new cn;
                        return e.prototype._trySubscribe.call(this, t)
                    }, t.prototype._subscribe = function(e) {
                        if (this.closed) throw new cn;
                        return this.hasError ? (e.error(this.thrownError), Qt.EMPTY) : this.isStopped ? (e.complete(), Qt.EMPTY) : (this.observers.push(e), new sn(this, e))
                    }, t.prototype.asObservable = function() {
                        var e = new on;
                        return e.source = this, e
                    }, t.create = function(e, t) {
                        return new dn(e, t)
                    }, t
                }(on),
                dn = function(e) {
                    function t(t, n) {
                        var r = e.call(this) || this;
                        return r.destination = t, r.source = n, r
                    }
                    return Vt(t, e), t.prototype.next = function(e) {
                        var t = this.destination;
                        t && t.next && t.next(e)
                    }, t.prototype.error = function(e) {
                        var t = this.destination;
                        t && t.error && this.destination.error(e)
                    }, t.prototype.complete = function() {
                        var e = this.destination;
                        e && e.complete && this.destination.complete()
                    }, t.prototype._subscribe = function(e) {
                        return this.source ? this.source.subscribe(e) : Qt.EMPTY
                    }, t
                }(ln),
                fn = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n._value = t, n
                    }
                    return Vt(t, e), Object.defineProperty(t.prototype, "value", {
                        get: function() {
                            return this.getValue()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype._subscribe = function(t) {
                        var n = e.prototype._subscribe.call(this, t);
                        return n && !n.closed && t.next(this._value), n
                    }, t.prototype.getValue = function() {
                        if (this.hasError) throw this.thrownError;
                        if (this.closed) throw new cn;
                        return this._value
                    }, t.prototype.next = function(t) {
                        e.prototype.next.call(this, this._value = t)
                    }, t
                }(ln);

            function pn(e, t, n) {
                var r = "undefined" !== typeof t ? t : null,
                    o = Ft((0, s.useState)(r), 2),
                    i = o[0],
                    a = o[1],
                    c = jt((function() {
                        return new ln
                    })),
                    u = jt((function() {
                        return new fn(r)
                    })),
                    l = jt((function() {
                        return new fn("undefined" === typeof n ? null : n)
                    }));
                var d = (0, s.useCallback)((function(e) {
                    return c.next(e)
                }), []);
                return (0, s.useEffect)((function() {
                    l.next(n)
                }), n || []), (0, s.useEffect)((function() {
                    a(r);
                    var t = (n ? e(c, u, l) : e(c, u)).subscribe((function(e) {
                        u.next(e), a(e)
                    }));
                    return function() {
                        t.unsubscribe(), u.complete(), l.complete(), c.complete()
                    }
                }), []), [d, i]
            }

            function vn() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = et(e),
                    r = tt(e, 1 / 0),
                    o = e;
                return o.length ? 1 === o.length ? Ae(o[0]) : $e(r)(at(o, n)) : X
            }

            function hn() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = Xe(e);
                return ee((function(t, r) {
                    for (var o = e.length, i = new Array(o), a = e.map((function() {
                            return !1
                        })), c = !1, s = function(t) {
                            Ae(e[t]).subscribe(new te(r, (function(e) {
                                i[t] = e, c || a[t] || (a[t] = !0, (c = a.every(Y)) && (a = null))
                            }), D))
                        }, u = 0; u < o; u++) s(u);
                    t.subscribe(new te(r, (function(e) {
                        if (c) {
                            var t = b([e], g(i));
                            r.next(n ? n.apply(void 0, b([], g(t))) : t)
                        }
                    })))
                }))
            }

            function mn(e, t) {
                return t ? function(n) {
                    return n.pipe(mn((function(n, r) {
                        return Ae(e(n, r)).pipe(Ne((function(e, o) {
                            return t(n, e, r, o)
                        })))
                    })))
                } : ee((function(t, n) {
                    var r = 0,
                        o = null,
                        i = !1;
                    t.subscribe(new te(n, (function(t) {
                        o || (o = new te(n, void 0, (function() {
                            o = null, i && n.complete()
                        })), Ae(e(t, r++)).subscribe(o))
                    }), (function() {
                        i = !0, !o && n.complete()
                    })))
                }))
            }

            function gn(e, t, n) {
                var r = _(e) || t || n ? {
                    next: e,
                    error: t,
                    complete: n
                } : e;
                return r ? ee((function(e, t) {
                    var n;
                    null === (n = r.subscribe) || void 0 === n || n.call(r);
                    var o = !0;
                    e.subscribe(new te(t, (function(e) {
                        var n;
                        null === (n = r.next) || void 0 === n || n.call(r, e), t.next(e)
                    }), (function() {
                        var e;
                        o = !1, null === (e = r.complete) || void 0 === e || e.call(r), t.complete()
                    }), (function(e) {
                        var n;
                        o = !1, null === (n = r.error) || void 0 === n || n.call(r, e), t.error(e)
                    }), (function() {
                        var e, t;
                        o && (null === (e = r.unsubscribe) || void 0 === e || e.call(r)), null === (t = r.finalize) || void 0 === t || t.call(r)
                    })))
                })) : Y
            }

            function bn(e) {
                return ee((function(t, n) {
                    Ae(e).subscribe(new te(n, (function() {
                        return n.complete()
                    }), D)), !n.closed && t.subscribe(n)
                }))
            }

            function yn() {
                return $e(1)
            }

            function wn() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = et(e);
                return ee((function(t, r) {
                    yn()(at(b([t], g(e)), n)).subscribe(r)
                }))
            }
            var xn = n("4HwR"),
                _n = n.n(xn);
            const En = function(e) {
                return u().createElement(ke.Z, (0, ie.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z",
                    fill: "currentColor"
                }))
            };
            const kn = function(e) {
                return u().createElement(ke.Z, (0, ie.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M20.5 7.42L9.41 18.5 8 17.09l-5-5 1.41-1.42 5 5L19.08 6l1.42 1.42z",
                    fill: "currentColor"
                }))
            };
            const Zn = function(e) {
                return u().createElement(ke.Z, (0, ie.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M13.4 12l6.6 6.6-1.4 1.4-6.6-6.6L5.4 20 4 18.6l6.6-6.6L4 5.4 5.4 4l6.6 6.6L18.6 4 20 5.4 13.4 12z",
                    fill: "currentColor"
                }))
            };
            var Cn = (0, s.forwardRef)((function(e, t) {
                    var n = e.validateState,
                        r = e.xsBreakPoint,
                        i = e.onMouseDown,
                        a = (0, ae.Z)(e, ["validateState", "xsBreakPoint", "onMouseDown"]),
                        c = {
                            background: "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)"
                        },
                        s = En;
                    return "success" === n && (c = {
                        bg: "button.buyBg"
                    }, s = kn), "fail" === n && (c = {
                        bg: "button.negativeBg"
                    }, s = Zn), u().createElement(Mt.Z, (0, ie.Z)({
                        ref: t,
                        sx: (0, o.Z)((0, oe.Z)({
                            position: "absolute",
                            height: "44px",
                            width: "44px",
                            marginLeft: "-1px",
                            alignItems: "center",
                            justifyContent: "center"
                        }, r, {
                            height: "40px",
                            width: "40px"
                        }), c),
                        onMouseDown: i
                    }, a), u().createElement(Ee.Z, {
                        ref: Lt("ar"),
                        sx: {
                            width: "24px",
                            height: "24px"
                        }
                    }, u().createElement(s, {
                        color: "button.white"
                    })))
                })),
                Sn = n("T8Gn");
            const Tn = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "VeriCode",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "VeriCode",
                    n = (0, Sn.$)(t),
                    r = n.t,
                    o = n.i18n,
                    i = (0, s.useCallback)((function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = "".concat(e, "-").concat(t);
                        return r(o, n)
                    }), [r, e]);
                return {
                    i18n: o,
                    getI18n: i
                }
            };

            function In(e, t, n) {
                return pn((function(e, t, n) {
                    return e.pipe(hn(n), mn((function(e) {
                        var t = (0, ce.Z)(e, 2),
                            n = t[0],
                            r = (0, ce.Z)(t[1], 3),
                            o = r[0],
                            i = r[1],
                            a = function(e) {
                                return function(t) {
                                    return {
                                        position: _n()((t.clientX - c) / i, 0, 1),
                                        state: e
                                    }
                                }
                            };
                        if (!r[2]) return at([]);
                        var c = n.clientX - o * i;
                        return n.preventDefault(), vn(at([{
                            position: 0,
                            state: "dragStart"
                        }]), Ye(dt(), "mousemove", {
                            passive: !1
                        }).pipe(gn((function(e) {
                            return e.preventDefault()
                        })), Ne(a("dragMove")), bn(Ye(dt(), "mouseup", {
                            passive: !1
                        }))), Ye(dt(), "mouseup", {
                            passive: !1
                        }).pipe(gn((function(e) {
                            return e.preventDefault()
                        })), Ne(a("dragEnd")), ne(1), wn(at([{
                            position: 0,
                            state: "none"
                        }]))))
                    })))
                }), {
                    position: 0,
                    state: "none"
                }, [e, t, n])
            }

            function Pn(e, t, n) {
                return pn((function(e, t, n) {
                    return e.pipe(hn(n), mn((function(e) {
                        var t = (0, ce.Z)(e, 2),
                            n = t[0],
                            r = (0, ce.Z)(t[1], 3),
                            o = r[0],
                            i = r[1],
                            a = function(e) {
                                return function(t) {
                                    var n = Array.from(t.touches).find((function(e) {
                                        return e.identifier === l
                                    }));
                                    return n && (f = _n()((n.clientX - d) / i, 0, 1)), {
                                        position: f,
                                        state: e
                                    }
                                }
                            };
                        if (!r[2] || n.changedTouches && 0 === n.changedTouches.length) return at([]);
                        n.preventDefault();
                        var c, s, u = n.changedTouches[0],
                            l = u.identifier,
                            d = u.clientX - o * i,
                            f = 0,
                            p = Ye(dt(), "touchend", {
                                passive: !1
                            }).pipe((c = function(e) {
                                return !!Array.from(e.changedTouches).find((function(e) {
                                    return e.identifier === l
                                }))
                            }, ee((function(e, t) {
                                var n = 0;
                                e.subscribe(new te(t, (function(e) {
                                    return c.call(s, e, n++) && t.next(e)
                                })))
                            }))));
                        return vn(Ye(dt(), "touchmove", {
                            passive: !1
                        }).pipe(gn((function(e) {
                            return e.preventDefault()
                        })), Ne(a("dragMove")), bn(p)), p.pipe(gn((function(e) {
                            return e.preventDefault()
                        })), Ne(a("dragEnd")), ne(1), wn(at([{
                            position: 0,
                            state: "none"
                        }]))))
                    })))
                }), {
                    position: 0,
                    state: "none"
                }, [e, t, n])
            }

            function Rn(e, t) {
                if (e && t) {
                    var n = e.getBoundingClientRect(),
                        r = t.getBoundingClientRect();
                    return n.width - r.width
                }
                return NaN
            }
            var Mn = function(e) {
                    var t = e.state,
                        n = e.position,
                        r = e.transition,
                        o = e.xsBreakPoint,
                        i = e.onSlide,
                        a = e.behaviorCollector,
                        c = e.draggable,
                        l = (0, ce.Z)((0, s.useState)(null), 2),
                        d = l[0],
                        f = l[1],
                        p = (0, ce.Z)((0, s.useState)(null), 2),
                        v = p[0],
                        h = p[1],
                        m = Rn(d, v),
                        g = (0, ce.Z)(In(n, m, c), 2),
                        b = g[0],
                        y = g[1],
                        w = (0, ce.Z)(Pn(n, m, c), 2),
                        x = w[0],
                        _ = w[1],
                        E = Tn().getI18n;
                    (0, s.useEffect)((function() {
                        v && a.setThumbnailSize(v)
                    }), [v]), (0, s.useEffect)((function() {
                        if (i) {
                            if ("none" !== y.state) return i(y);
                            if ("none" !== _.state) return i(_)
                        }
                    }), [y, _, i]);
                    var k, Z, C = (0, s.useMemo)((function() {
                        return v ? a.getReactThumbnailEventCollector(v) : {}
                    }), [v, a]);
                    return u().createElement(Mt.Z, {
                        ref: function(e) {
                            Lt("sl")(e), f(e)
                        },
                        className: "verify-slider",
                        sx: (k = {
                            position: "relative",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "line",
                            bg: "bg3",
                            height: "44px",
                            mb: "sm",
                            ml: "auto",
                            mr: "auto",
                            width: "310px",
                            alignItems: "center"
                        }, (0, oe.Z)(k, o, {
                            height: "40px",
                            width: "266px"
                        }), (0, oe.Z)(k, "userSelect", "none"), k)
                    }, u().createElement(le.Z, {
                        color: "t.primary",
                        ref: Lt("trtx"),
                        variant: "caption",
                        sx: (Z = {
                            ml: "52px"
                        }, (0, oe.Z)(Z, o, {
                            ml: "48px"
                        }), (0, oe.Z)(Z, "transition", "opacity 0.3s"), Z),
                        opacity: 0 === n ? 1 : 0
                    }, E("verify1", "Slide to complete the puzzle")), u().createElement(Cn, (0, ie.Z)({
                        ref: function(e) {
                            e && e.addEventListener("touchstart", x, {
                                passive: !1
                            }), Lt("slth")(e), h(e)
                        },
                        xsBreakPoint: o,
                        style: {
                            left: "".concat(n * m, "px"),
                            transition: r ? "left 0.3s ease-in-out" : void 0,
                            cursor: "dragMove" === y.state || "dragStart" === y.state ? "grabbing" : "grab"
                        }
                    }, C, {
                        onMouseDown: function(e) {
                            b(e), C.onMouseDown && C.onMouseDown(e)
                        },
                        validateState: t
                    })))
                },
                Dn = n("bHpz"),
                On = function(e) {
                    var t = Tn().getI18n,
                        n = e.spinner,
                        r = void 0 === n || n;
                    return u().createElement(Mt.Z, (0, ie.Z)({
                        alignItems: "center",
                        justifyContent: "start",
                        flexDirection: "column"
                    }, e), r && u().createElement(Dn.Z, {
                        size: "36px"
                    }), u().createElement(le.Z, {
                        color: "t.primary",
                        variant: "body2",
                        sx: {
                            mt: "12px"
                        }
                    }, t("loading", "Loading")))
                };

            function zn() {
                var e = (0, se.Z)(["\n  0% {\n    transform: translate(-60px, 0);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translate(0, 0);\n    opacity: 1;\n  }\n"]);
                return zn = function() {
                    return e
                }, e
            }
            var An = (0, fe.keyframes)(zn()),
                Ln = function(e) {
                    var t = e.position,
                        n = e.transition,
                        r = e.imageUrl,
                        o = e.state,
                        i = e.xsBreakPoint,
                        a = e.onSlide,
                        c = e.onRefresh,
                        l = e.draggable,
                        d = (0, ce.Z)((0, s.useState)(null), 2),
                        f = d[0],
                        p = d[1],
                        v = (0, ce.Z)((0, s.useState)(null), 2),
                        h = v[0],
                        m = v[1],
                        g = Tn().getI18n,
                        b = Rn(f, h),
                        y = (0, ce.Z)(In(t, b, l), 2),
                        w = y[0],
                        x = y[1],
                        _ = (0, ce.Z)(Pn(t, b, l), 2),
                        E = _[0],
                        k = _[1];
                    return (0, s.useEffect)((function() {
                        if (a) {
                            if ("none" !== x.state) return a(x);
                            if ("none" !== k.state) return a(k)
                        }
                    }), [x, k, a]), "normal" === o ? u().createElement(Ee.Z, {
                        ref: function(e) {
                            Lt("im")(e), p(e)
                        },
                        sx: (0, oe.Z)({
                            position: "relative",
                            bg: "line",
                            height: "192px",
                            backgroundPositionX: "-60px",
                            width: "310px",
                            mb: "sm",
                            ml: "auto",
                            mr: "auto",
                            overflow: "hidden"
                        }, i, {
                            width: "266px",
                            height: "164px",
                            mb: "12px",
                            backgroundPositionX: "-50px",
                            backgroundSize: "316px 164px"
                        }),
                        style: r && {
                            backgroundImage: "url(".concat(r, ")")
                        } || void 0
                    }, u().createElement(Ee.Z, {
                        ref: function(e) {
                            e && e.addEventListener("touchstart", E, {
                                passive: !0
                            }), Lt("shim")(e), m(e)
                        },
                        sx: (0, oe.Z)({
                            position: "absolute",
                            height: "192px",
                            width: "60px",
                            mb: "sm",
                            animation: "".concat(An, " 0.3s ease-out both")
                        }, i, {
                            width: "50px",
                            height: "164px",
                            mb: "12px",
                            backgroundSize: "316px 164px"
                        }),
                        style: r && {
                            backgroundImage: "url(".concat(r, ")"),
                            left: "".concat(t * b, "px"),
                            transition: n ? "left 0.3s ease-in-out" : void 0,
                            cursor: "dragMove" === x.state || "dragStart" === x.state ? "grabbing" : "grab"
                        } || void 0,
                        onMouseDown: w
                    })) : "loading" === o || "init-loading" === o ? u().createElement(Mt.Z, {
                        alignItems: "center",
                        justifyContent: "center",
                        sx: (0, oe.Z)({
                            bg: "line",
                            width: "310px",
                            height: "192px",
                            mb: "sm",
                            ml: "auto",
                            mr: "auto"
                        }, i, {
                            width: "266px",
                            height: "164px",
                            mb: "12px"
                        })
                    }, u().createElement(On, {
                        spinner: "loading" === o
                    })) : u().createElement(Mt.Z, {
                        alignItems: "center",
                        justifyContent: "center",
                        sx: (0, oe.Z)({
                            bg: "line",
                            width: "310px",
                            height: "192px",
                            mb: "sm",
                            ml: "auto",
                            mr: "auto"
                        }, i, {
                            width: "266px",
                            height: "164px",
                            mb: "12px"
                        })
                    }, u().createElement(Mt.Z, null, ("error" === o || "init-error" === o) && u().createElement(le.Z, {
                        color: "t.primary",
                        variant: "body2",
                        mr: "4px",
                        lineHeight: "normal"
                    }, g("error", "Network issue.")), "try-too-many" === o && u().createElement(le.Z, {
                        color: "t.primary",
                        variant: "body2",
                        mr: "4px",
                        lineHeight: "normal"
                    }, g("try-too-many", "Too many attempts.")), "error" === o && u().createElement(Dt.Z, {
                        variant: "standardLink",
                        sx: {
                            textDecoration: "underline",
                            cursor: "pointer"
                        },
                        onClick: c
                    }, g("refresh", "Please refresh"))))
                },
                Nn = function(e) {
                    var t = e.bizId,
                        n = e.staticHost,
                        o = e.nativeSdkVersion,
                        i = e.behaviorCollector,
                        a = e.xsBreakPoint,
                        l = e.onSuccess,
                        d = e.onStateChange,
                        f = e.initCaptchaInfo,
                        p = e.isInitLoading,
                        v = e.onFail,
                        h = (0, ce.Z)((0, s.useState)(f), 2),
                        m = h[0],
                        g = h[1],
                        b = (0, ce.Z)((0, s.useState)(0), 2),
                        y = b[0],
                        w = b[1],
                        x = (0, ce.Z)((0, s.useState)(!1), 2),
                        _ = x[0],
                        E = x[1],
                        k = (0, ce.Z)((0, s.useState)(!0), 2),
                        Z = k[0],
                        C = k[1],
                        S = (0, ce.Z)((0, s.useState)("default"), 2),
                        T = S[0],
                        I = S[1],
                        P = (0, ce.Z)((0, s.useState)(p ? "init-loading" : f ? "normal" : "init-error"), 2),
                        R = P[0],
                        M = P[1],
                        D = (0, ce.Z)((0, s.useState)(), 2),
                        O = D[0],
                        z = D[1],
                        A = (0, s.useRef)(!1);
                    (0, s.useEffect)((function() {
                        !1 === p && (g(f), M(f ? "normal" : "init-error"))
                    }), [p]);
                    var L, N = (0, s.useCallback)(function() {
                            var e = (0, r.Z)(c().mark((function e(t) {
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return E(!0), w(t), e.next = 4, _e(400).toPromise();
                                        case 4:
                                            E(!1);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), []),
                        F = (0, s.useCallback)(function() {
                            var e = (0, r.Z)(c().mark((function e(r) {
                                var a, s;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!0 !== A.current) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (e.prev = 2, A.current = !0, M("loading"), C(!1), 0 === y) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 9, N(0);
                                        case 9:
                                            if (i.reset(), a = (new Date).getTime() - (O || 0), !(m && r === bt.NeedReload && a < 3e5)) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 14, Ct({
                                                bizId: t,
                                                sig: m.sig
                                            }, {
                                                staticHost: n,
                                                nativeSdkVersion: o
                                            });
                                        case 14:
                                            e.t0 = e.sent, e.next = 20;
                                            break;
                                        case 17:
                                            return e.next = 19, kt({
                                                bizId: t
                                            }, {
                                                staticHost: n,
                                                nativeSdkVersion: o
                                            });
                                        case 19:
                                            e.t0 = e.sent;
                                        case 20:
                                            (s = e.t0) ? (g(s), M("normal"), I("default")) : M("error");
                                        case 22:
                                            return e.prev = 22, C(!0), A.current = !1, e.finish(22);
                                        case 26:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, , 22, 26]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [t, i, N, y, m, O]),
                        j = (0, s.useCallback)(function() {
                            var e = (0, r.Z)(c().mark((function e(r) {
                                var a, s;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!((a = ft().floor(250 * r.position)) <= 1)) {
                                                e.next = 7;
                                                break
                                            }
                                            return C(!1), e.next = 5, N(0);
                                        case 5:
                                            return C(!0), e.abrupt("return");
                                        case 7:
                                            if (!m) {
                                                e.next = 53;
                                                break
                                            }
                                            return e.prev = 8, A.current = !0, C(!1), e.next = 13, It(Tt(a, t, i, m), {
                                                staticHost: n,
                                                nativeSdkVersion: o
                                            });
                                        case 13:
                                            if (s = e.sent, A.current = !1, s) {
                                                e.next = 20;
                                                break
                                            }
                                            return I("fail"), M("error"), C(!0), e.abrupt("return");
                                        case 20:
                                            e.t0 = s.result, e.next = e.t0 === bt.Success ? 23 : e.t0 === bt.Timeout || e.t0 === bt.NeedReload ? 28 : e.t0 === bt.Fail ? 35 : e.t0 === bt.Exception ? 43 : e.t0 === bt.TryTooMany ? 46 : 49;
                                            break;
                                        case 23:
                                            return I("success"), e.next = 26, _e(400).toPromise();
                                        case 26:
                                            return l({
                                                token: s.token,
                                                challenge: m.sig
                                            }), e.abrupt("break", 49);
                                        case 28:
                                            return I("fail"), v && v(), e.next = 32, _e(400).toPromise();
                                        case 32:
                                            return e.next = 34, F(s.result);
                                        case 34:
                                        case 42:
                                            return e.abrupt("break", 49);
                                        case 35:
                                            return I("fail"), v && v(), e.next = 39, _e(400).toPromise();
                                        case 39:
                                            return I("default"), e.next = 42, N(0);
                                        case 43:
                                            return I("fail"), M("error"), e.abrupt("break", 49);
                                        case 46:
                                            return I("fail"), M("try-too-many"), e.abrupt("break", 49);
                                        case 49:
                                            return e.prev = 49, C(!0), A.current = !1, e.finish(49);
                                        case 53:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [8, , 49, 53]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [F, t, i, m, l, v, N]),
                        B = (0, s.useCallback)((function(e) {
                            "normal" === R && (w(e.position), "dragEnd" === e.state && j(e))
                        }), [j, R]);
                    return (0, s.useEffect)((function() {
                        d && d(R)
                    }), [d, R]), (0, s.useEffect)((function() {
                        z((new Date).getTime())
                    }), [null === m || void 0 === m ? void 0 : m.sig]), u().createElement(Ee.Z, null, u().createElement(Ln, {
                        position: y,
                        transition: _,
                        imageUrl: null !== (L = null === m || void 0 === m ? void 0 : m.imageUrl) && void 0 !== L ? L : "",
                        state: R,
                        draggable: Z,
                        xsBreakPoint: a,
                        onSlide: B,
                        onRefresh: F
                    }), u().createElement(Mn, (0, ie.Z)({
                        state: T,
                        xsBreakPoint: a,
                        onSlide: B,
                        position: y,
                        transition: _,
                        draggable: Z
                    }, (0, oe.Z)({}, "behaviorCollector", i))), u().createElement(Ze, {
                        sx: {
                            float: "right",
                            mt: "-4px"
                        },
                        color: "t.third",
                        cursor: "pointer",
                        onClick: function() {
                            return F(bt.NeedReload)
                        }
                    }))
                };

            function Fn() {
                var e = (0, se.Z)(["\n  10%, 90% {\n    transform: translate(-2px, 0);\n  }\n\n  20%, 80% {\n    transform: translate(6px, 0);\n  }\n\n  30%, 70% {\n    transform: translate(-12px, 0);\n  }\n\n  40%, 60% {\n    transform: translate(12px, 0);\n  }\n"]);
                return Fn = function() {
                    return e
                }, e
            }
            var jn = function(e) {
                    return u().createElement(ue.Z, (0, ie.Z)({
                        sx: {
                            width: "112px",
                            height: "102px"
                        },
                        __css: {
                            position: "relative",
                            boxShadow: "dialog",
                            borderRadius: "4px",
                            bg: "popupBg"
                        }
                    }, e), u().createElement(On, {
                        mt: "24px"
                    }))
                },
                Bn = (0, fe.keyframes)(Fn()),
                Vn = function(e) {
                    var t, n = e.visible,
                        i = e.onClose,
                        a = e.onSuccess,
                        l = e.onError,
                        d = e.bizId,
                        f = e.staticHost,
                        p = e.nativeSdkVersion,
                        v = e.xsBreakPoint,
                        h = void 0 === v ? "@media (max-width: 374px)" : v,
                        m = e.displayLoading,
                        g = void 0 === m || m,
                        b = (0, ae.Z)(e, ["visible", "onClose", "onSuccess", "onError", "bizId", "staticHost", "nativeSdkVersion", "xsBreakPoint", "displayLoading"]),
                        y = (0, ce.Z)((0, s.useState)(), 2),
                        w = y[0],
                        x = y[1],
                        _ = (0, ce.Z)((0, s.useState)(!0), 2),
                        E = _[0],
                        k = _[1],
                        Z = (0, ce.Z)((0, s.useState)(!1), 2),
                        C = Z[0],
                        S = Z[1],
                        T = (0, ce.Z)((0, s.useState)(new Nt), 1)[0],
                        I = (0, ce.Z)((0, s.useState)("loading"), 2),
                        P = I[0],
                        R = I[1],
                        M = Tn().getI18n,
                        D = (0, s.useCallback)((0, r.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return S(!0), e.next = 3, _e(400).toPromise();
                                    case 3:
                                        S(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), []),
                        O = (0, s.useCallback)((function(e) {
                            "error" === P || "init-error" === P ? l() : i(e)
                        }), [P, i, l]);
                    return (0, s.useEffect)((function() {
                        var e = function() {
                            var e = (0, r.Z)(c().mark((function e() {
                                var t;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return k(!0), e.next = 3, kt({
                                                bizId: d
                                            }, {
                                                staticHost: f,
                                                nativeSdkVersion: p
                                            });
                                        case 3:
                                            t = e.sent, x(t), k(!1);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [d, x]), (0, s.useEffect)((function() {
                        "init-error" === P ? setTimeout(l, 1e3) : "try-too-many" === P && setTimeout(l, 2e3)
                    }), [P]), E && g ? u().createElement(jn, {
                        visible: !0,
                        onMaskClick: O
                    }) : u().createElement(ue.Z, (0, ie.Z)({
                        visible: n,
                        sx: (0, oe.Z)({
                            width: "342px",
                            height: "355px",
                            p: "sm"
                        }, h, {
                            width: "298px",
                            height: "319px"
                        }),
                        __css: (0, o.Z)({
                            touchAction: "none",
                            position: "relative",
                            boxShadow: "dialog",
                            borderRadius: "4px",
                            bg: "popupBg"
                        }, C ? {
                            animation: "".concat(Bn, " 0.3s cubic-bezier(.36,.07,.19,.97) both"),
                            transform: "translate(0, 0)"
                        } : {}),
                        onMaskClick: O,
                        ref: Lt("wi")
                    }, T.getReactEventCollector(), b), u().createElement(de.Z, {
                        size: 20,
                        sx: {
                            float: "right",
                            mr: "-6px",
                            mt: "-6px"
                        },
                        color: "t.third",
                        cursor: "pointer",
                        onClick: O
                    }), u().createElement(le.Z, {
                        color: "t.primary",
                        variant: "subtitle1",
                        mb: "sm",
                        fontSize: 18,
                        fontWeight: 400,
                        lineHeight: "23px"
                    }, M("verify2", "Security Verification")), u().createElement(Nn, (0, ie.Z)({
                        staticHost: f,
                        nativeSdkVersion: p,
                        xsBreakPoint: h,
                        onSuccess: function(e) {
                            a && a(e)
                        },
                        onFail: D,
                        onStateChange: R
                    }, (t = {}, (0, oe.Z)(t, "bizId", d), (0, oe.Z)(t, "behaviorCollector", T), (0, oe.Z)(t, "initCaptchaInfo", w), (0, oe.Z)(t, "isInitLoading", E), t))))
                },
                Hn = n("UsZr"),
                Un = n("pRz+"),
                Gn = n("oppv"),
                Yn = function(e) {
                    var t = e.children,
                        n = e.theme,
                        r = (0, ce.Z)((0, s.useState)("dark" === n ? Hn.Z : Un.Z), 2),
                        o = r[0],
                        i = r[1];
                    return (0, s.useEffect)((function() {
                        if ("auto" === n && "undefined" !== typeof window && "function" === typeof window.matchMedia) {
                            var e = window.matchMedia("(prefers-color-scheme: dark)");
                            if (e) {
                                i(e.matches ? Hn.Z : Un.Z);
                                var t = function(e) {
                                    i(e.matches ? Hn.Z : Un.Z)
                                };
                                return e.addEventListener ? e.addEventListener("change", t) : e.addListener(t),
                                    function() {
                                        e.removeEventListener ? e.removeEventListener("change", t) : e.removeListener(t)
                                    }
                            }
                        }
                    }), [n]), u().createElement(Gn.Z, {
                        theme: o
                    }, t)
                };
            const Wn = u().memo(Yn);
            var qn, Kn = function() {
                    var e = (0, r.Z)(c().mark((function e() {
                        var t, n, r, o, i, a, s, u = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = u.length > 0 && void 0 !== u[0] ? u[0] : {
                                        sessionId: ""
                                    }, n = {
                                        challenge: "",
                                        gt: "",
                                        gtId: "",
                                        errorMessage: ""
                                    }, r = t.sessionId ? "&sessionId=".concat(t.sessionId) : "", e.prev = 3, e.next = 6, (0, Ce.get)("/bapi/accounts/v1/public/account/security/gt-code?t=".concat(Date.now()).concat(r));
                                case 6:
                                    o = e.sent, i = o.data, a = o.success, s = o.message, a ? n = i : n.errorMessage = s || "get gt-code error", e.next = 16;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(3), n.errorMessage = e.t0 && e.t0.message;
                                case 16:
                                    return e.abrupt("return", n);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 13]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Qn = function(e) {
                    return (0, Ce.post)("/bapi/accounts/v1/public/account/security/check/result", e)
                },
                $n = (qn = "Function", function(e) {
                    return Object.prototype.toString.call(e) === "[object ".concat(qn, "]")
                });

            function Jn(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        bubbles: !1,
                        cancelable: !1,
                        detail: null
                    },
                    n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail || {}), n
            }
            var Xn = {
                product: "bind",
                https: !0,
                lang: "en",
                new_captcha: !0
            };

            function er(e) {
                var t = e.onSuccess,
                    n = e.onError,
                    o = e.onClose,
                    i = e.bizId,
                    a = e.staticHost,
                    u = e.lang,
                    l = e.apiHost,
                    d = (0, s.useRef)(null);
                (0, s.useEffect)((function() {
                    d.current = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6e4;
                        return new Promise((function(n, r) {
                            if (document.getElementById("_bnwv_se_captcha") || window.BCaptcha) return n(!0);
                            var o = document.createElement("script");
                            o.id = "_bnwv_se_captcha", o.src = e, o.onload = function() {
                                n(!0)
                            }, o.onerror = function() {
                                r()
                            }, setTimeout(r, t), document.body.appendChild(o)
                        }))
                    }("".concat(a, "/static/js/se/captcha/v1/captcha.min.js"))
                }), []);
                var f = (0, s.useCallback)(function() {
                    var e = (0, r.Z)(c().mark((function e(r) {
                        var s;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return s = r.validateId, e.next = 3, d.current;
                                case 3:
                                    return e.abrupt("return", new Promise((function(e, r) {
                                        new window.BCaptcha({
                                            bizId: i,
                                            lang: u,
                                            staticHost: a,
                                            apiHost: l || "",
                                            apiBasePath: "/bapi/composite/v1/public/antibot"
                                        }).show({
                                            securityCheckResponseValidateId: s,
                                            onValidateSuccess: function(n, r) {
                                                var o = {
                                                    challenge: n,
                                                    token: r
                                                };
                                                t && t(o), e(o)
                                            },
                                            onError: function(e) {
                                                n && n(e), r({
                                                    message: e
                                                })
                                            },
                                            onCancel: function() {
                                                o && o(), e(!1)
                                            }
                                        })
                                    })));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), [i, a, u, l, n, t, o]);
                return {
                    bCaptcha2Validate: f
                }
            }
            var tr = n("VAOc"),
                nr = {
                    i18nKey: "turnstile-default",
                    defaultMessage: "Something went wrong. Please try again later."
                },
                rr = {
                    crashed: nr,
                    "100***": nr,
                    "102***": nr,
                    "103***": nr,
                    "104***": nr,
                    "105***": nr,
                    "106***": nr,
                    "120***": nr,
                    "300***": nr,
                    "600***": nr,
                    110100: nr,
                    110110: nr,
                    110200: nr,
                    110420: nr,
                    110430: nr,
                    110500: {
                        i18nKey: "turnstile-upgrade-browser-error",
                        defaultMessage: "Please upgrade your browser or try with a different browser."
                    },
                    110510: {
                        i18nKey: "turnstile-browser-extensions-error",
                        defaultMessage: "Please disable your browser extensions and try again."
                    },
                    110600: {
                        i18nKey: "turnstile-clock-error",
                        defaultMessage: "Please check your system clock date and try again."
                    },
                    200100: {
                        i18nKey: "turnstile-set-clock-error",
                        defaultMessage: "Please set your clock to the correct time and try again."
                    },
                    200010: {
                        i18nKey: "turnstile-cache-error",
                        defaultMessage: "Please clear your browser cache and try again."
                    }
                };

            function or(e) {
                if (rr[e]) return rr[e];
                var t = "".concat(e.slice(0, 3), "***");
                return rr[t] || nr
            }
            var ir = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

            function ar(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6e4;
                return new Promise((function(n, r) {
                    if (document.getElementById("_bnwv_turnstile_captcha")) n(!0);
                    else {
                        var o = document.createElement("script");
                        o.id = "_bnwv_turnstile_captcha", o.src = e, o.onload = function() {
                            n(!0)
                        }, o.onerror = function() {
                            r()
                        }, setTimeout(r, t), document.body.appendChild(o)
                    }
                }))
            }
            var cr = function(e, t) {
                    return new Promise((function(n, r) {
                        console.log("create script");
                        var o = document.createElement("script");
                        o.src = "https://www.google.com/recaptcha/enterprise.js?render=".concat(e), o.onload = function() {
                            n({
                                loading: !1
                            })
                        }, o.onerror = function() {
                            r({
                                failed: !0
                            })
                        }, console.log("needManMachine", t), t && e && document.body.appendChild(o)
                    }))
                },
                sr = function() {
                    var e = (0, r.Z)(c().mark((function e(t, n) {
                        var r, o, i, a;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null === (r = window) || void 0 === r ? void 0 : r.grecaptcha) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 4, cr(t, n);
                                case 4:
                                    return e.next = 6, new Promise((function(e) {
                                        var t, n, r;
                                        return null === (t = window) || void 0 === t || null === (n = t.grecaptcha) || void 0 === n || null === (r = n.enterprise) || void 0 === r ? void 0 : r.ready(e)
                                    }));
                                case 6:
                                    return e.abrupt("return", null === (o = window) || void 0 === o || null === (i = o.grecaptcha) || void 0 === i || null === (a = i.enterprise) || void 0 === a ? void 0 : a.execute(t, {
                                        action: "submit"
                                    }).then((function(e) {
                                        return {
                                            reCAPTCHAToken: e,
                                            siteKey: t
                                        }
                                    })));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            var ur = function(e) {
                for (var t = !1, n = !1, r = !1, o = 0; o < e.length; o++) {
                    var i = e[o];
                    t && RegExp("[\\p{Lu}]", "u").test(i) ? (e = "".concat(e.slice(0, o), "-").concat(e.slice(o)), t = !1, r = n, n = !0, o++) : n && r && RegExp("[\\p{Ll}]", "u").test(i) ? (e = "".concat(e.slice(0, o - 1), "-").concat(e.slice(o - 1)), r = n, n = !1, t = !0) : (t = i.toLocaleLowerCase() === i && i.toLocaleUpperCase() !== i, r = n, n = i.toLocaleUpperCase() === i && i.toLocaleLowerCase() !== i)
                }
                return e
            };

            function lr(e) {
                if (e) {
                    if (e.token) return {
                        bCaptchaToken: e.token
                    };
                    if (e.reCAPTCHAToken) return {
                        recaptchaResponse: e.reCAPTCHAToken,
                        siteKey: e.siteKey
                    };
                    if (e.turnstileToken) return {
                        turnstileToken: e.turnstileToken,
                        secret: e.secret
                    };
                    var t = {};
                    return Object.keys(e).forEach((function(n) {
                        return t[function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                pascalCase: !1
                            };
                            if ("string" !== typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
                            var n = function(e) {
                                return t.pascalCase ? e.charAt(0).toLocaleUpperCase() + e.slice(1) : e
                            };
                            return 0 === (e = Array.isArray(e) ? e.map((function(e) {
                                return e.trim()
                            })).filter((function(e) {
                                return e.length
                            })).join("-") : e.trim()).length ? "" : 1 === e.length ? t.pascalCase ? e.toLocaleUpperCase() : e.toLocaleLowerCase() : (e !== e.toLocaleLowerCase() && (e = ur(e)), n(e = e.replace(/^[_.\- ]+/, "").toLocaleLowerCase().replace(RegExp("[_.\\- ]+([\\p{Alpha}\\p{N}_]|$)", "gu"), (function(e, t) {
                                return t.toLocaleUpperCase()
                            })).replace(RegExp("\\d+([\\p{Alpha}\\p{N}_]|$)", "gu"), (function(e) {
                                return e.toLocaleUpperCase()
                            }))))
                        }(n)] = e[n]
                    })), t
                }
            }

            function dr(e) {
                var t = function(e) {
                        var t = e.nodeRef,
                            n = e.geetestOptions,
                            i = e.onReady,
                            a = e.onSuccess,
                            u = e.onError,
                            l = e.onClose,
                            d = (0, s.useMemo)((function() {
                                return (0, o.Z)({}, Xn, n)
                            }), [n]),
                            f = (0, ce.Z)((0, s.useState)(!1), 2),
                            p = f[0],
                            v = f[1],
                            h = (0, s.useRef)(null),
                            m = (0, s.useRef)({
                                challenge: "",
                                gt: "",
                                gtId: ""
                            }),
                            g = (0, s.useRef)({
                                requestGt: 0,
                                initGeetest: 0
                            }),
                            b = (0, s.useCallback)((function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                    r = null === t || void 0 === t ? void 0 : t.current;
                                if (r && $n(r.dispatchEvent)) {
                                    var o = $n(window.CustomEvent) ? new window.CustomEvent(e, {
                                        detail: n,
                                        bubbles: !1,
                                        cancelable: !1
                                    }) : Jn(e, {
                                        detail: n,
                                        bubbles: !1,
                                        cancelable: !1
                                    });
                                    r.dispatchEvent(o)
                                }
                            }), [t]),
                            y = (0, s.useCallback)(function() {
                                var e = (0, r.Z)(c().mark((function e(t) {
                                    var n, r;
                                    return c().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = t.sessionId, console.log("requestGt", n), v(!0), e.next = 5, Kn({
                                                    sessionId: n
                                                });
                                            case 5:
                                                if (!(r = e.sent).errorMessage) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return v(!1), u && u(r.errorMessage), b("geetest-error", {
                                                    msg: "get gt-code error"
                                                }), e.abrupt("return");
                                            case 11:
                                                m.current = r, g.current.requestGt++;
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(), [u, b]),
                            w = (0, s.useCallback)((function() {
                                if (!t || !t.current) throw new Error("nodeRef should not be null");
                                var e = h.current;
                                console.log("start load", e, t.current), e.appendTo(t.current), e.onReady((function() {
                                    console.log("onReady"), i && i(e), b("geetest-ready"), v(!1)
                                })), e.onSuccess((function() {
                                    console.log("onSuccess"), a && a(e.getValidate(), e), b("geetest-success")
                                })), e.onError((function(e) {
                                    console.log("onerror", e), u && u(e), b("geetest-error", e)
                                })), e.onClose((function() {
                                    e.reset(), b("geetest-close"), l && l(e)
                                }))
                            }), [t, h, l, u, i, a, b]),
                            x = (0, s.useCallback)((function() {
                                if (g.current.initGeetest !== g.current.requestGt) {
                                    var e = m.current,
                                        t = e.gt,
                                        n = e.challenge;
                                    t && n && window.initGeetest && (h.current && w(), g.current.initGeetest++, window.initGeetest((0, o.Z)({
                                        gt: t,
                                        challenge: n
                                    }, d), (function(e) {
                                        console.log("load realy", w), h.current = e, w()
                                    })))
                                }
                            }), [w, d, h]),
                            _ = (0, s.useCallback)((function() {
                                return new Promise((function(e, n) {
                                    if (!t || !t.current) return console.log("nodeRef should not be null "), void n(new Error("nodeRef should not be null"));
                                    t.current.addEventListener("geetest-error", (function(e) {
                                        console.log("geetest-error", e), n(e && e.detail.msg)
                                    })), t.current.addEventListener("geetest-success", (function() {
                                        console.log("geetest-success");
                                        var t = h.current.getValidate();
                                        e((0, o.Z)({}, t, m.current))
                                    })), t.current.addEventListener("geetest-close", (function() {
                                        console.log("geetest-close"), e(null)
                                    })), t.current.addEventListener("geetest-ready", (function() {
                                        console.log("geetest-ready"), h.current.verify()
                                    })), x()
                                }))
                            }), [t, h, m, y]);
                        return (0, s.useEffect)((function() {
                            if (t && t.current)
                                if (window.initGeetest) x();
                                else {
                                    var e = document.createElement("script");
                                    e.type = "text/javascript", e.async = !0, e.charset = "utf-8", e.onload = function() {
                                        e.onload = null, x()
                                    }, e.src = "".concat(d.https ? "https:" : document.location.protocol, "//static.geetest.com/static/tools/gt.js?_t=").concat(Date.now()), document.body.appendChild(e)
                                } return function() {
                                h.current && h.current.destroy()
                            }
                        }), [x, t, d.https, h]), {
                            loading: p,
                            geetestValidate: _,
                            initGeetestValidate: y
                        }
                    }(e),
                    n = t.geetestValidate,
                    a = t.initGeetestValidate,
                    l = function(e) {
                        var t = e.onSuccess,
                            n = e.bizId,
                            o = e.staticHost,
                            i = e.nativeSdkVersion,
                            a = (0, re.Fg)();
                        return {
                            captchaValidate: (0, s.useCallback)((0, r.Z)(c().mark((function e() {
                                var r, s, l;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = document.createElement("div"), document.body.appendChild(r), s = new $, d().render(u().createElement(Wn, {
                                                theme: a
                                            }, u().createElement(Vn, {
                                                bizId: n,
                                                staticHost: o,
                                                nativeSdkVersion: i,
                                                visible: !0,
                                                onSuccess: function(e) {
                                                    s.next(e)
                                                },
                                                onClose: function() {
                                                    s.next(null)
                                                },
                                                onError: function(e) {
                                                    s.error({
                                                        message: "string" === typeof e ? e : "Network issue."
                                                    })
                                                }
                                            })), r), e.prev = 4, e.next = 7, s.pipe(ne(1)).toPromise();
                                        case 7:
                                            return (l = e.sent) && t && t(l), e.abrupt("return", l);
                                        case 10:
                                            return e.prev = 10, d().render(u().createElement(u().Fragment, null), r), r.remove(), e.finish(10);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [4, , 10, 14]
                                ])
                            }))), [n, t, a])
                        }
                    }(e).captchaValidate,
                    f = er(e).bCaptcha2Validate,
                    p = function(e) {
                        var t = e.onSuccess,
                            n = e.onError,
                            o = e.onClose,
                            i = e.bizId,
                            a = e.staticHost,
                            u = e.lang,
                            l = e.apiHost,
                            d = e.turnstileKey,
                            f = (0, s.useRef)(null),
                            p = (0, Sn.$)("accounts-ui").t;
                        (0, s.useEffect)((function() {
                            var e = "turnstile-container";
                            if (!document.getElementById(e)) {
                                var t = document.createElement("div");
                                t.id = e, document.body.appendChild(t)
                            }
                        }), [i, a, u, l, n, t, o]), (0, s.useEffect)((function() {
                            f.current = ar(ir)
                        }), []);
                        var v = (0, s.useCallback)((0, r.Z)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, f.current;
                                    case 3:
                                        return e.abrupt("return", new Promise((function(e, r) {
                                            if (!window.turnstile) {
                                                var o = new Error("Captcha network is unstable. Please try again later.");
                                                o.code = "NOT_LOADED";
                                                try {
                                                    f.current = ar(ir)
                                                } catch (a) {}
                                                r(o)
                                            }
                                            window.turnstile.render("#turnstile-container", {
                                                sitekey: d || "0x4AAAAAAAS-6PLr64c70mGs",
                                                action: i || "",
                                                cData: tr.Q.read("BNC_FV_KEY"),
                                                callback: function(n) {
                                                    t && t(n), e({
                                                        turnstileToken: n
                                                    })
                                                },
                                                "error-callback": function(e) {
                                                    console.log("Challenge error Callback Error", e);
                                                    var t = or(e),
                                                        o = t.i18nKey,
                                                        i = t.defaultMessage,
                                                        a = new Error("".concat(p(o, i), " (").concat(e, ")"));
                                                    a.code = e, n && n(a), r(a)
                                                }
                                            })
                                        })));
                                    case 6:
                                        return e.prev = 6, e.t0 = e.catch(0), console.log("turnstileValidate faile", e.t0), e.abrupt("return", Promise.reject(e.t0));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 6]
                            ])
                        }))), [i, a, d, u, l, n, t, o]);
                        return {
                            turnstileValidate: v
                        }
                    }(e).turnstileValidate,
                    v = (0, s.useRef)((function() {}));
                v.current = l;
                var h = (0, s.useCallback)(function() {
                    var t = (0, r.Z)(c().mark((function t(s) {
                        var u, l, d, h, m, g, b, y, w;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return u = {
                                        gt: function() {
                                            var e = (0, r.Z)(c().mark((function e(t) {
                                                var r;
                                                return c().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return r = t.sessionId, console.log({
                                                                sessionId: r
                                                            }), e.next = 4, a({
                                                                sessionId: r
                                                            });
                                                        case 4:
                                                            return e.abrupt("return", n.apply(u, []));
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(),
                                        bcaptcha: v.current,
                                        bcaptcha2: f,
                                        recaptcha: function() {
                                            return sr(e.googleReCaptchaKey, !0)
                                        },
                                        turnstile: p
                                    }, t.next = 3, x = s, _ = void 0, (0, Ce.post)("/bapi/accounts/v1/public/account/security/request/precheck", x, _);
                                case 3:
                                    if (!(l = t.sent).success) {
                                        t.next = 30;
                                        break
                                    }
                                    if (d = l.data, h = d.captchaType, m = d.sessionId, g = d.validateId, "random" !== h) {
                                        t.next = 9;
                                        break
                                    }
                                    return Qn({
                                        sessionId: m,
                                        validateCodeType: h
                                    }), t.abrupt("return", {
                                        success: !0,
                                        data: {
                                            sessionId: m,
                                            validateCodeType: h
                                        }
                                    });
                                case 9:
                                    return t.prev = 9, t.next = 12, u[h.toLowerCase()]({
                                        validateId: g,
                                        sessionId: m
                                    });
                                case 12:
                                    if (b = t.sent, y = lr(b), !b) {
                                        t.next = 22;
                                        break
                                    }
                                    return t.next = 17, Qn((0, o.Z)({
                                        sessionId: m,
                                        validateCodeType: h
                                    }, y));
                                case 17:
                                    if (!(w = t.sent).success) {
                                        t.next = 20;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        success: !0,
                                        data: (0, o.Z)({
                                            sessionId: m,
                                            validateCodeType: h
                                        }, w.data, y)
                                    });
                                case 20:
                                    return w.data = (0, i.Z)((0, o.Z)({}, w.data), {
                                        validateCodeType: h
                                    }), t.abrupt("return", w);
                                case 22:
                                    return t.abrupt("return", {
                                        success: !1,
                                        message: "",
                                        data: {
                                            validateCodeType: h
                                        }
                                    });
                                case 25:
                                    return t.prev = 25, t.t0 = t.catch(9), t.abrupt("return", {
                                        success: !1,
                                        message: t.t0.message,
                                        data: {
                                            validateCodeType: h
                                        }
                                    });
                                case 28:
                                    t.next = 31;
                                    break;
                                case 30:
                                    return t.abrupt("return", {
                                        success: !1,
                                        message: l.message,
                                        code: l.code
                                    });
                                case 31:
                                case "end":
                                    return t.stop()
                            }
                            var x, _
                        }), t, null, [
                            [9, 25]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(), [e.lang]);
                return {
                    manMachineValidate: h
                }
            }
        },
        TsW8: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => G
            });
            var r = n("sViW"),
                o = n("aVXY"),
                i = n("q0wl"),
                a = n.n(i),
                c = n("DTvD"),
                s = n.n(c),
                u = n("sPjN"),
                l = n("KVSf"),
                d = n("/pg0"),
                f = n("n0xf"),
                p = n("pHbR"),
                v = n("8ufs"),
                h = n("Vboq"),
                m = n("M5j3"),
                g = n("jYyJ");
            const b = function(e) {
                return s().createElement(g.Z, (0, m.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7 4h3v3H7v3H4V4h3zm7 0h6v6h-3V7h-3V4zm-4 16v-3H7v-3H4v6h6zm7 0h-3v-3h3v-3h3v6h-3zm-1-9.5H8v3h8v-3z",
                    fill: "currentColor"
                }))
            };
            const y = function(e) {
                return s().createElement(g.Z, (0, m.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.997 12.21a8.161 8.161 0 000-.42v.42zm-4.463 3.327l-2.608-2.608h7.07V20l-2.341-2.342A8.003 8.003 0 014.252 14h3.164a5.001 5.001 0 008.118 1.537zM19.747 10A8.003 8.003 0 006.343 6.343L4.001 4v7.071h7.07L8.466 8.464A5.001 5.001 0 0116.585 10h3.162zM4 12L4 11.845v.31A8.126 8.126 0 014 12z",
                    fill: "currentColor"
                }))
            };
            var w = n("T8Gn"),
                x = n("QdNb"),
                _ = n("5FUq"),
                E = n.n(_),
                k = n("ab8n"),
                Z = n("nRuQ"),
                C = n("VAOc"),
                S = n("lPrA"),
                T = n("EXxB"),
                I = n("L/P0"),
                P = n("sBDV"),
                R = n("0kS3"),
                M = n("BK7R"),
                D = n("lZYQ");

            function O(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e)
                }))
            }
            var z = [],
                A = {
                    url: "",
                    method: "GET",
                    duration: 1e3,
                    strategy: "double",
                    maxDuration: 5e3,
                    start: 0,
                    end: 3e5,
                    counts: 1 / 0
                };

            function L(e) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = (0, r.Z)(a().mark((function e(t) {
                    var n, r, o, i, c, s;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t.url) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (n = (0, M.Z)({}, A, t), !z.includes(n.url)) {
                                    e.next = 8;
                                    break
                                }
                                return -1 !== (r = z.indexOf(n.url)) && z.splice(r, 1), e.next = 8, O(n.maxDuration + 100);
                            case 8:
                                if (z.push(n.url), o = n.duration, i = 0, c = 0, e.t0 = n.start, !e.t0) {
                                    e.next = 16;
                                    break
                                }
                                return e.next = 16, O(n.start);
                            case 16:
                                if (!(c < n.counts || i <= n.end)) {
                                    e.next = 39;
                                    break
                                }
                                if (z.includes(n.url)) {
                                    e.next = 19;
                                    break
                                }
                                return e.abrupt("return", {
                                    success: !1,
                                    data: "\u91cd\u7f6e",
                                    message: "\u8be5url".concat(n.url, "\u5bf9\u5e94\u7684\u8f6e\u8be2\u5df2\u91cd\u7f6e")
                                });
                            case 19:
                                return c++, o = (o = "double" === n.strategy ? 2 * o : o + 1e3) > n.maxDuration ? n.maxDuration : o, i += o, e.next = 25, D[n.method](n.url, n.params);
                            case 25:
                                if (s = e.sent, -1 !== z.indexOf(n.url)) {
                                    e.next = 28;
                                    break
                                }
                                return e.abrupt("return");
                            case 28:
                                if (!s.success) {
                                    e.next = 34;
                                    break
                                }
                                if (!("function" === typeof n.endCondition ? n.endCondition(s) : s.data === n.endCondition)) {
                                    e.next = 32;
                                    break
                                }
                                return e.abrupt("return", s);
                            case 32:
                                e.next = 35;
                                break;
                            case 34:
                                return e.abrupt("return", s);
                            case 35:
                                return e.next = 37, O(o);
                            case 37:
                                e.next = 16;
                                break;
                            case 39:
                                return e.abrupt("return", {
                                    success: !1,
                                    message: "\u8d85\u65f6"
                                });
                            case 40:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var F = n("owGl"),
                j = n("5F35"),
                B = n("jP+i"),
                V = n("Iz9f"),
                H = n("+g7R"),
                U = n("WRKX");
            const G = function(e) {
                var t = e.config,
                    n = (0, w.$)(),
                    i = n.t,
                    m = n.i18n,
                    g = (0, o.Z)((0, c.useState)(""), 2),
                    _ = g[0],
                    M = g[1],
                    O = (0, o.Z)((0, c.useState)("START"), 2),
                    A = O[0],
                    N = O[1],
                    G = (0, B.Z)(),
                    Y = s().useRef(null),
                    W = s().useMemo((function() {
                        return "NEW" !== A
                    }), [A]),
                    q = (0, S.m)({
                        staticHost: (0, R.nR)("RECAPTCHA_STATIC_HOST") || (0, R.nR)("STATIC_HOST"),
                        nodeRef: Y,
                        lang: m.language,
                        bizId: "qrcode_login",
                        googleReCaptchaKey: (0, R.nR)("GOOGLE_RECAPTCHA_KEY")
                    }).manMachineValidate,
                    K = (0, T.S)().popupForManMachineError,
                    Q = (0, U.Z)();
                Z.d.setItem("loginVerify", "qr");
                var $ = (0, u.Fg)().isLight,
                    J = (0, c.useCallback)((0, r.Z)(a().mark((function e() {
                        var t, n;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = (0, k.Z)(), e.next = 3, q({
                                        bizType: "qrcode_login"
                                    });
                                case 3:
                                    (n = e.sent).success ? (N("NEW"), (o = {
                                        random: t,
                                        sessionId: n.data.sessionId
                                    }, (0, D.post)("/bapi/accounts/v1/public/qrcode/login/get", o)).then((function(e) {
                                        if (e.success) return M("".concat(G, "/").concat(m.language, "/qr/").concat(e.data)), e.data
                                    })).then((function(e) {
                                        e && L({
                                            url: "/bapi/accounts/v1/public/qrcode/login/query",
                                            method: "post",
                                            params: {
                                                qrCode: e,
                                                random: t,
                                                sessionId: n.data.sessionId
                                            },
                                            endCondition: function(e) {
                                                return N(e.data.status), "CONFIRM" === e.data.status || "EXPIRED" === e.data.status
                                            }
                                        }).then(function() {
                                            var e = (0, r.Z)(a().mark((function e(t) {
                                                var n;
                                                return a().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if ("CONFIRM" !== (null === t || void 0 === t ? void 0 : t.data.status)) {
                                                                e.next = 10;
                                                                break
                                                            }
                                                            if (!P.D$) {
                                                                e.next = 4;
                                                                break
                                                            }
                                                            return (0, H.ZP)("fin", {
                                                                token: t.data.token
                                                            }, "login"), e.abrupt("return");
                                                        case 4:
                                                            return C.Q.writeCookieWithDomainLevel("logined", "y", 7), C.Q.writeCookieWithDomainLevelV2("BNC-Location", (null === t || void 0 === t ? void 0 : t.data.bncLocation) || "", 365, !0, "High"), e.next = 8, Q(t.data.code);
                                                        case 8:
                                                            n = e.sent, (0, j.t)(n, "login");
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()).catch((function() {
                                            return N("ERROR_HAPREND")
                                        }))
                                    })).catch((function(e) {
                                        e.message = "qrCodeLogin: ".concat(e.message || e.errMsg), (0, I.R)({
                                            err: e,
                                            manual: !0
                                        }), N("ERROR_HAPREND")
                                    }))) : K(n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                            var o
                        }), e)
                    }))), [t]),
                    X = (0, F.Z)((function() {
                        J()
                    }), 300);
                return (0, c.useEffect)((function() {
                    return function() {
                        var e = z.indexOf("/bapi/accounts/v1/public/qrcode/login/query"); - 1 !== e && z.splice(e, 1)
                    }
                }), []), s().createElement(l.Z, {
                    flexDirection: "column",
                    ml: [0, "86px", "11.1111vw"]
                }, s().createElement(d.Z, {
                    variant: "subtitle1",
                    mb: "md"
                }, i("accounts-login-qr-title", "Log in with QR code")), s().createElement(l.Z, {
                    sx: {
                        alignItems: "center"
                    }
                }, s().createElement(f.Z, {
                    width: "178px",
                    height: "178px",
                    bg: _ && "NEW" === A ? "t.white" : "bg1",
                    sx: {
                        position: "relative",
                        borderRadius: "6px",
                        mr: "lg"
                    }
                }, (_ || "START" === A) && s().createElement(f.Z, {
                    width: "100%",
                    height: "100%",
                    className: "qr-code",
                    p: "ls",
                    textAlign: "center",
                    sx: {
                        background: "#f5f5f5",
                        borderRadius: "6px",
                        opacity: W ? ".04" : 1
                    }
                }, s().createElement(p.Z, {
                    width: "24px",
                    height: "24px",
                    sx: {
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        marginLeft: "-12px",
                        marginTop: "-12px",
                        p: "2px",
                        bg: "#f5f5f5",
                        borderTopLeftRadius: "4px",
                        borderTopRightRadius: "4px",
                        borderBottomLeftRadius: "4px"
                    },
                    src: "".concat((0, R.nR)("STATIC_HOST"), "/static/images/accounts/common/binance-logo.png")
                }), s().createElement(f.Z, {
                    sx: {
                        borderRadius: "4px",
                        overflow: "hidden",
                        width: "156px",
                        height: "156px"
                    }
                }, s().createElement(E(), {
                    value: _,
                    size: 156
                }))), s().createElement(f.Z, {
                    textAlign: "center",
                    sx: {
                        width: "100%",
                        zIndex: 2,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translateY(-50%) translateX(-50%)"
                    }
                }, "START" === A && s().createElement(v.Z, {
                    onClick: X,
                    size: "normal",
                    variant: "default",
                    colorStyle: "secondary",
                    height: "40px",
                    minWidth: "106px",
                    sx: {
                        gap: "0"
                    },
                    "data-e2e": "btn-get-qrcode"
                }, s().createElement(b, {
                    size: 24,
                    sx: {
                        mr: "minor"
                    }
                }), i("accounts-qr-getCode", "Get QR Code")), "CONFIRM" === A || "SCAN" === A ? s().createElement(h.Z, {
                    size: 96
                }) : null, "CONFIRM" === A && s().createElement(d.Z, {
                    variant: "subtitle2",
                    mb: "xs"
                }, i("accounts-qr-confirm-status", "Logging in now")), "SCAN" === A && s().createElement(d.Z, {
                    variant: "subtitle2",
                    mb: "xs"
                }, i("accounts-qr-scan-status", "Confirm on your app")), "ERROR_HAPREND" === A && s().createElement(d.Z, {
                    variant: "subtitle2",
                    mb: "xs"
                }, i("accounts-qr-error-status", "Login failed")), "EXPIRED" === A && s().createElement(d.Z, {
                    variant: "subtitle2",
                    mb: "xs"
                }, i("accounts-qr-expired-status", "QR code expired")), "EXPIRED" === A || "ERROR_HAPREND" === A ? s().createElement(v.Z, {
                    onClick: X,
                    size: "normal",
                    variant: "default",
                    colorStyle: "secondary",
                    height: "40px",
                    minWidth: "106px"
                }, s().createElement(y, {
                    size: 24,
                    sx: {
                        mr: "xs"
                    }
                }), i("accounts-qr-action-refresh", "Refresh").replace(/\snow/i, "")) : null)), s().createElement(p.Z, {
                    width: "94px",
                    height: "191px",
                    src: "".concat((0, R.nR)("STATIC_HOST"), "/static/images/accounts/scan-device-").concat($ ? "light" : "dark", ".svg")
                })), s().createElement(d.Z, {
                    mt: "md",
                    variant: "text.body2",
                    style: {
                        color: "var(--color-textPrimary)"
                    }
                }, s().createElement(x.c, {
                    i18nKey: "accounts-login-qr-desc",
                    defaults: "Scan this code with the <lk>Binance mobile app</lk> to log in instantly.",
                    components: {
                        lk: s().createElement(V.F, {
                            external: !0,
                            variant: "text.subtitle2",
                            color: "t.yellow",
                            href: "".concat(G, "/").concat(m.language, "/download"),
                            id: "login-qr-download"
                        })
                    }
                })), s().createElement(f.Z, {
                    ref: Y
                }))
            }
        },
        jiyQ: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => k
            });
            var r = n("M5j3"),
                o = n("BK7R"),
                i = n("WEt1"),
                a = n("DTvD"),
                c = n.n(a),
                s = n("/pg0"),
                u = n("KVSf"),
                l = n("n0xf"),
                d = n("T8Gn"),
                f = n("QdNb"),
                p = n("c1zs"),
                v = n("5R4Y"),
                h = n("Iz9f"),
                m = n("ksK1"),
                g = n("6/mx"),
                b = n("dqot"),
                y = n("0kS3"),
                w = n("F/7r"),
                x = n("Idgt"),
                _ = n("D+jF"),
                E = n("yG0M");
            const k = (0, w.MR)((function(e) {
                var t = e.forgetPwdType,
                    n = void 0 === t ? "" : t,
                    w = e.config,
                    k = e.hiddenPwd,
                    Z = e.hiddenRegister,
                    C = e.origin,
                    S = e.qr,
                    T = e.setQr,
                    I = e.showSwitchPasskey,
                    P = (0, i.Hb)().query,
                    R = (0, d.$)(),
                    M = R.t,
                    D = R.i18n,
                    O = (0, m.Z)(),
                    z = (0, g.Q)(),
                    A = (0, x.$h)(P),
                    L = (0, b.Z)().forgetPWDNew;
                console.log("showSwitchPasskey", I);
                var N = (0, a.useCallback)((function() {
                    C && (0, v.ZP)("webClick", {
                        pageName: C,
                        elementID: "bids_signup_click"
                    }), z.replace("/".concat(D.language, "/register").concat(A ? "?".concat(A) : ""))
                }), [C, P]);
                return (0, a.useCallback)((function() {
                    (0, E.RE)();
                    var e = y.Q6 ? {} : {
                        sx: {
                            width: ["343px", "360px", "360px"],
                            borderRadius: "8px"
                        },
                        cancelBtnProps: {
                            variant: "default",
                            colorStyle: "secondary"
                        }
                    };
                    O.info((0, o.Z)({
                        imgSrc: c().createElement(p.Z, {
                            size: 96
                        }),
                        desc: c().createElement(f.c, {
                            t: M,
                            i18nKey: "resetPassword-noWithin24h",
                            defaultValue: "Withdrawals, P2P selling, and payment services will be disabled for 24 hours after you make this change to protect your account.",
                            components: {
                                b: c().createElement(s.Z, {
                                    as: "span",
                                    variant: "subtitle1",
                                    fontWeight: "bold",
                                    color: "t.secondary"
                                })
                            }
                        }),
                        okText: M("oauth-continue", "Continue"),
                        cancelText: M(["common-cancel", "Cancel"]),
                        onOk: function() {
                            z.push("/".concat(D.language, "/user/reset-password?step=1&type=").concat(n))
                        }
                    }, e))
                }), [n]), c().createElement(u.Z, (0, r.Z)({
                    mt: [0, "sm"],
                    flexDirection: "column"
                }, w), !k && c().createElement(l.Z, {
                    mt: ["md", "xs"]
                }, c().createElement(h.F, {
                    variant: "text.subtitle2",
                    color: y.Q6 ? "t.link" : "t.yellow",
                    external: !0,
                    fontWeight: "500",
                    id: "accounts-helper-forgot-password",
                    onClick: L,
                    "data-e2e": "btn-forgot-password"
                }, M("accounts-helper-forgot-password", "Forgot password?"))), !Z && c().createElement(l.Z, {
                    mt: ["md", "xs"]
                }, c().createElement(h.F, {
                    variant: "text.subtitle2",
                    color: y.Q6 ? "t.link" : "t.yellow",
                    id: "accounts-ui-create-binance-account",
                    onClick: N,
                    "data-e2e": "btn-create-binance-account"
                }, P.inEmail ? "" : M("accounts-ui-create-binance-account", "Create a Binance Account"))), T && c().createElement(l.Z, {
                    mt: ["md", "xs"]
                }, c().createElement(h.F, {
                    variant: "text.subtitle2",
                    color: "t.yellow",
                    onClick: function() {
                        return T(!S)
                    }
                }, S ? M("accounts-toggle-pwd-login", "Login with password") : M("accounts-toggle-qr-login", "Scan to login"))), !y.Q6 && I && c().createElement(l.Z, {
                    mt: ["md", "xs"]
                }, c().createElement(h.F, {
                    variant: "text.subtitle2",
                    color: "t.yellow",
                    onClick: function() {
                        (0, _.M7)({
                            switchFrom: "password",
                            switchTo: "fidoweb"
                        }), z.replace("/".concat(D.language, "/login-verification").concat(A ? "?".concat(A) : ""))
                    }
                }, M("accounts-switch-passkey", "Switch to passkey"))))
            }), "loginTips")
        },
        PTFZ: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => l,
                J: () => d
            });
            var r = n("M5j3"),
                o = n("gZfF"),
                i = n("DTvD"),
                a = n.n(i),
                c = n("KVSf"),
                s = n("TsW8"),
                u = n("F/7r"),
                l = (0, u.MR)(s.Z, "loginQrCode"),
                d = (0, u.MR)((function(e) {
                    var t = e.config,
                        n = (0, o.Z)(e, ["config"]);
                    return a().createElement(c.Z, (0, r.Z)({
                        width: "100%",
                        alignItems: "flex-start",
                        px: [0, "md", 0],
                        justifyContent: "center"
                    }, t, n))
                }), "pageContent")
        },
        "ss/C": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => $
            });
            var r = n("DTvD"),
                o = n.n(r),
                i = n("n0xf"),
                a = n("M5j3"),
                c = n("gZfF"),
                s = n("xmrz"),
                u = n("iiT4"),
                l = n("F/7r"),
                d = n("0kS3");
            const f = (0, l.MR)((function(e) {
                var t = e.config,
                    n = void 0 === t ? {} : t,
                    r = n.title,
                    i = n.desc,
                    l = (0, c.Z)(n, ["title", "desc"]),
                    f = (0, u.F)().isMobile;
                return o().createElement(s.Z, (0, a.Z)({
                    titleVariant: ["text.headline5", "text.headline4"],
                    pageLevel: 2,
                    title: r,
                    subtitle: f ? null : i,
                    sx: {
                        my: "0",
                        mt: [d.Q6 ? "-16px" : "xs", "120px"]
                    },
                    titleAreaMB: ["sm"],
                    noTopSpace: !0
                }, l))
            }), "loginTopPrompt");
            var p = n("PTFZ"),
                v = n("sViW"),
                h = n("BK7R"),
                m = n("QUKP"),
                g = n("aVXY"),
                b = n("q0wl"),
                y = n.n(b),
                w = n("gQYd"),
                x = n("WEt1"),
                _ = n("zJwK"),
                E = n("6fd6"),
                k = n("jP+i"),
                Z = n("jiyQ"),
                C = n("USwW"),
                S = n("YxjL"),
                T = n("TsW8"),
                I = {
                    writeFile: function() {
                        var e = (0, v.Z)(y().mark((function e(t, n, r, o) {
                            var i;
                            return y().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, bn.canIUseCustom({
                                            action: "private-shared-set-storage"
                                        });
                                    case 3:
                                        if (e.sent) {
                                            e.next = 6;
                                            break
                                        }
                                        throw new Error("\u4e0d\u652f\u6301\u5199\u5165\u6587\u4ef6");
                                    case 6:
                                        return e.next = 8, bn.call("private-shared-set-storage", {
                                            key: t,
                                            data: n
                                        });
                                    case 8:
                                        i = e.sent, r && r(i), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(0), o && o(e.t0);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 12]
                            ])
                        })));
                        return function(t, n, r, o) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    readFile: function() {
                        var e = (0, v.Z)(y().mark((function e(t) {
                            var n;
                            return y().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, bn.canIUseCustom({
                                            action: "private-shared-get-storage"
                                        });
                                    case 3:
                                        if (e.sent) {
                                            e.next = 6;
                                            break
                                        }
                                        throw new Error("\u4e0d\u652f\u6301\u8bfb\u53d6\u6587\u4ef6");
                                    case 6:
                                        return e.next = 8, bn.call("private-shared-get-storage", {
                                            key: t
                                        });
                                    case 8:
                                        return n = e.sent, e.abrupt("return", n);
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 12]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                P = n("yG0M"),
                R = n("T8Gn"),
                M = n("wOpj"),
                D = n("zzYc"),
                O = n("lPrA"),
                z = n("7Qg1"),
                A = n("EXxB"),
                L = n("nRuQ"),
                N = n("pj6h"),
                F = n("L/P0"),
                j = n("Idgt"),
                B = n("x/RW"),
                V = n("gLrQ"),
                H = n("EeA/");
            const U = function(e) {
                var t = e.onChange,
                    n = e.value,
                    i = (e.activeTab, (0, c.Z)(e, ["onChange", "value", "activeTab"])),
                    s = (0, R.$)(),
                    u = s.t,
                    l = s.i18n.language,
                    f = (0, g.Z)(o().useState(null), 2),
                    p = f[0],
                    b = f[1],
                    w = (0, g.Z)((0, r.useState)(!1), 2),
                    k = w[0],
                    Z = w[1],
                    C = (0, x.Hb)().query,
                    S = (0, x.tv)(),
                    T = (0, r.useRef)(null),
                    I = (0, z.B)(),
                    U = (0, A.S)().popupForManMachineError,
                    G = (0, O.m)({
                        staticHost: (0, d.nR)("RECAPTCHA_STATIC_HOST") || (0, d.nR)("STATIC_HOST"),
                        nodeRef: T,
                        bizId: "login",
                        lang: l,
                        googleReCaptchaKey: (0, d.nR)("GOOGLE_RECAPTCHA_KEY")
                    }).manMachineValidate;
                (0, r.useEffect)((function() {
                    var e, t;
                    b({
                        code: null === (e = n.current) || void 0 === e ? void 0 : e.code,
                        nationalNumber: null === (t = n.current) || void 0 === t ? void 0 : t.nationalNumber
                    })
                }), [n.current]);
                var Y = function() {
                        var e = (0, v.Z)(y().mark((function e(t, r) {
                            var o, a, c, s, d, f, p, v, g, b, w, x, k, T, R, M, O, z, A, N;
                            return y().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = r.setErrors, e.prev = 1, Z(!0), s = "object" === typeof n.current ? n.current.nationalNumber : "", d = "object" === typeof n.current ? n.current.nationalNumber : "", f = "object" === typeof n.current ? n.current.code : "", /@/.test(s) ? (d = void 0, f = void 0) : s = void 0, p = (null === s || void 0 === s ? void 0 : s.trim().toLowerCase()) || void 0, d && /^\+\d*$/.test(d) && (v = (0, _._)("".concat(decodeURIComponent(d))), d = null === d || void 0 === d ? void 0 : d.replace("+".concat(null === v || void 0 === v ? void 0 : v.countryCallingCode), ""), f = null === v || void 0 === v ? void 0 : v.country), g = {
                                            mobile: d || void 0,
                                            mobileCode: f || void 0,
                                            email: p,
                                            bizType: "login"
                                        }, E.o.writeFile("lastlogin.json", JSON.stringify({
                                            nationalNumber: d || s,
                                            code: f
                                        })), L.d.setItem("lastlogin", JSON.stringify({
                                            nationalNumber: d || s,
                                            code: f
                                        })), (0, P.yl)({
                                            loginType: g.mobile ? "phone" : "email",
                                            elementID: "socialLoginBind" === (null === i || void 0 === i ? void 0 : i.source) ? "bids_existing_account_captcha_page_view" : "bids_login_captcha_page_view"
                                        }), e.next = 16, G(g);
                                    case 16:
                                        if (!(b = e.sent).success) {
                                            e.next = 21;
                                            break
                                        }(0, P.i0)({
                                            isFailure: 0,
                                            loginType: g.mobile ? "phone" : "email",
                                            pageType: null === b || void 0 === b || null === (w = b.data) || void 0 === w ? void 0 : w.validateCodeType,
                                            elementID: "socialLoginBind" === (null === i || void 0 === i ? void 0 : i.source) ? "bids_existing_account_captcha_submit" : "bids_login_captcha_submit"
                                        }), e.next = 28;
                                        break;
                                    case 21:
                                        if ((0, P.i0)({
                                                isFailure: 1,
                                                errorCode: b.code,
                                                errorMsg: b.message || "[login-1st-step]greetInfo failed",
                                                loginType: g.mobile ? "phone" : "email",
                                                pageType: null === b || void 0 === b || null === (x = b.data) || void 0 === x ? void 0 : x.validateCodeType,
                                                elementID: "socialLoginBind" === (null === i || void 0 === i ? void 0 : i.source) ? "bids_existing_account_captcha_submit" : "bids_login_captcha_submit"
                                            }), "200001048" !== b.code && "024072" !== b.code) {
                                            e.next = 26;
                                            break
                                        }
                                        return setTimeout((function() {
                                            o({
                                                username: u("common-acount-warning", "Please enter a valid email or phone number")
                                            })
                                        }), 200), e.abrupt("return");
                                    case 26:
                                        return U(b), e.abrupt("return");
                                    case 28:
                                        return e.next = 30, I((0, m.Z)((0, h.Z)({}, g), {
                                            sessionId: null === b || void 0 === b || null === (a = b.data) || void 0 === a ? void 0 : a.sessionId
                                        }));
                                    case 30:
                                        if (k = e.sent, T = k.status, R = k.inlineMessage, M = k.popupErrorMessage, O = k.errorCode, z = k.plessVerifyTypeList, A = k.loginFlowId, N = k.forceFido, console.log({
                                                plessVerifyTypeList: z
                                            }), !R) {
                                            e.next = 42;
                                            break
                                        }
                                        return setTimeout((function() {
                                            o({
                                                username: R
                                            })
                                        }), 200), e.abrupt("return");
                                    case 42:
                                        if (T) {
                                            e.next = 45;
                                            break
                                        }
                                        return (0, P.pl)({
                                            isFailure: 1,
                                            errorCode: O,
                                            errorMsg: R || M,
                                            btnType: "next"
                                        }), e.abrupt("return");
                                    case 45:
                                        (0, P.pl)({
                                            isFailure: 0,
                                            btnType: "next",
                                            elementID: "socialLoginBind" === (null === i || void 0 === i ? void 0 : i.source) ? "bids_link_existing_account_click" : "bids_login_button_click"
                                        }), (0, D.setStorage)({
                                            key: "loginusername",
                                            data: g
                                        }), L.d.setItem("usernamev2", (0, m.Z)((0, h.Z)({}, g), {
                                            plessVerifyTypeList: z,
                                            loginFlowId: A,
                                            forceFido: N,
                                            sessionId: null === b || void 0 === b || null === (c = b.data) || void 0 === c ? void 0 : c.sessionId,
                                            threePartySource: "socialLoginBind" === (null === i || void 0 === i ? void 0 : i.source) ? "ThreeParty" : ""
                                        })), (null === z || void 0 === z ? void 0 : z.length) ? S.push("/".concat(l, "/login-verification?").concat((0, j.$h)((0, m.Z)((0, h.Z)({}, C), {
                                            isNewLogin: !0
                                        })))) : S.push("/".concat(l, "/login-password?").concat((0, j.$h)((0, m.Z)((0, h.Z)({}, C), {
                                            isNewLogin: !0
                                        })))), e.next = 56;
                                        break;
                                    case 51:
                                        e.prev = 51, e.t0 = e.catch(1), e.t0.message = "webLoginUserNamePageSubmit: ".concat(e.t0.message || e.t0.errMsg), (0, F.R)({
                                            err: e.t0,
                                            manual: !0
                                        }), S.push("/".concat(l, "/login-password?").concat((0, j.$h)((0, m.Z)((0, h.Z)({}, C), {
                                            isNewLogin: !0
                                        }))));
                                    case 56:
                                        return e.prev = 56, Z(!1), e.finish(56);
                                    case 59:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 51, 56, 59]
                            ])
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    W = (0, H.Z)(["username"], {
                        username: {
                            bizScene: "login",
                            autoFill: "username",
                            autoCapitalize: "off",
                            initialValue: p,
                            onFocusProp: function() {
                                (0, P.Vh)()
                            },
                            schema: M.Ry({
                                nationalNumber: M.Z_().trim(),
                                code: M.Z_().trim()
                            }).required(u(["common-acount-warning", "Please enter a valid email or phone number."])).test("validate-invalidMobile", u(["common-acount-warning", "Please enter a valid email or phone number."]), (function(e) {
                                return (0, B.nv)(e, "login")
                            })).nullable(),
                            disabled: "socialLoginBind" === (null === i || void 0 === i ? void 0 : i.source) && (d.Q6 || N.C) && (null === C || void 0 === C ? void 0 : C.socialEmail),
                            pageName: "binance_web_login"
                        }
                    });
                return o().createElement(o().Fragment, null, o().createElement(V.Z, (0, a.Z)({
                    btype: "login",
                    loading: k,
                    onSubmit: Y,
                    handleUsernameValueChange: t,
                    btnText: u("common-next", "Next"),
                    btnTextId: "click_login_submit_v2",
                    fieldsList: W
                }, i)), o().createElement("div", {
                    ref: T
                }))
            };
            const G = function(e) {
                var t = e.config,
                    n = e.qr,
                    a = void 0 !== n && n,
                    s = e.setQr,
                    u = (0, l.Bm)("loginForm", t).config,
                    f = u.afterLogin,
                    p = u.socialLogin,
                    b = u.source,
                    R = u.onPageReady,
                    M = (0, r.useRef)(),
                    D = (0, k.d)(),
                    O = (0, x.Hb)().query,
                    z = O.mobile,
                    A = O.email,
                    L = O.socialEmail,
                    N = (0, r.useMemo)((function() {
                        return function() {
                            if ("undefined" === typeof window) return {
                                isIOS: null,
                                isAndroid: null,
                                isWebview: !1
                            };
                            var e = window.navigator,
                                t = e.userAgent.toLowerCase(),
                                n = e.standalone,
                                r = /ip(ad|hone|od)/.test(t) || "MacIntel" === e.platform && e.maxTouchPoints > 1,
                                o = /android/.test(t),
                                i = /safari/.test(t),
                                a = o && /; wv\)/.test(t) || r && !n && !i;
                            return !a && /tradingview/.test(t) && (a = !0), {
                                isIOS: r,
                                isAndroid: o,
                                isWebview: a
                            }
                        }()
                    }), []),
                    F = (0, g.Z)(o().useState(!d.Q6), 2),
                    j = F[0],
                    B = F[1];
                o().useEffect((function() {
                    var e = function() {
                        var e = (0, v.Z)(y().mark((function e() {
                            var t, n, r, o, i;
                            return y().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!d.Q6) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, E.o.readFile("lastlogin.json");
                                    case 4:
                                        return t = e.sent, console.log("crossRes", t), e.next = 8, I.readFile("lastlogin.json");
                                    case 8:
                                        n = e.sent, r = t || n, o = JSON.parse(null === r || void 0 === r ? void 0 : r.data), M.current = o, e.next = 17;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(1), console.log("shareManager read error", e.t0);
                                    case 17:
                                        B(!0);
                                    case 18:
                                        z && (i = (0, _._)("".concat(decodeURIComponent(z.trim())))) && (M.current = {
                                            nationalNumber: i.nationalNumber,
                                            code: i.country
                                        }), b && L && (M.current = {
                                            nationalNumber: L
                                        }), !b && A && (M.current = {
                                            nationalNumber: A
                                        });
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 14]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [z, b, A, L]);
                var V = (0, r.useMemo)((function() {
                        var e = [];
                        return N.isAndroid && N.isWebview || e.push({
                            type: "google",
                            jsSrc: "https://accounts.google.com/gsi/client",
                            clientId: (0, d.nR)("GOOGLE_CLIENT_ID"),
                            btnText: "continue_with",
                            defaultText: "Continue with Google",
                            thirdOperatorEnum: "GOOGLE_LOGIN"
                        }), e.push({
                            type: "apple",
                            jsSrc: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1",
                            scope: "name email",
                            clientId: (0, d.nR)("APPLE_CLIENT_ID"),
                            redirectUri: "".concat(D, "/redirect/apple"),
                            usePopup: !0,
                            btnText: "continue",
                            defaultText: "Continue with Apple",
                            thirdOperatorEnum: "APPLE_LOGIN"
                        }), e
                    }), [D]),
                    H = (0, r.useCallback)((function(e) {
                        (d.Q6 || "nationalNumber" in e) && (M.current = e)
                    }), [d.Q6]),
                    G = (0, C.$)((function(e) {
                        var t = e.timing,
                            n = (0, c.Z)(e, ["timing"]);
                        switch (t) {
                            case "thirdPartyCaptchaPageView":
                                (0, P.vt)((0, m.Z)((0, h.Z)({}, n), {
                                    loginType: n.type
                                }));
                                break;
                            case "captchaSubmit":
                                (0, P.H2)((0, m.Z)((0, h.Z)({}, n), {
                                    loginType: n.type
                                }));
                                break;
                            case "buttonClickedWithResult":
                                (0, P.pl)((0, h.Z)({}, n))
                        }
                    }));
                return a ? o().createElement(w.Z, {
                    variant: "contentBoxLogin"
                }, o().createElement(i.Z, {
                    bg: "bg3",
                    mt: "-12px",
                    py: "md",
                    sx: {
                        borderRadius: "4px"
                    }
                }, o().createElement(T.Z, null))) : j ? o().createElement(w.Z, {
                    variant: "contentBoxLogin"
                }, o().createElement(U, {
                    source: b,
                    activeTab: "email",
                    onChange: H,
                    value: M
                }), !(null === p || void 0 === p ? void 0 : p.hide) && o().createElement(S.Z, {
                    THIRD_PARTY_LOGIN: V,
                    afterLogin: f,
                    thirdPartyTrackingFunc: G,
                    setSignInWithReady: R
                }), o().createElement(Z.Z, {
                    forgetPwdType: "email",
                    hiddenPwd: !0,
                    hiddenRegister: "socialLoginBind" === b,
                    setQr: s,
                    origin: "login"
                })) : null
            };
            var Y = n("r+9T"),
                W = n("KVSf"),
                q = n("/pg0");
            const K = (0, l.MR)((function(e) {
                var t = e.config,
                    n = void 0 === t ? {} : t,
                    r = (0, R.$)().t,
                    i = (0, k.Z)(),
                    a = n.Icon,
                    c = void 0 === a ? Y.Z : a;
                return o().createElement(W.Z, {
                    width: "100%",
                    bg: "badgeYellowBg",
                    alignItems: "center",
                    justifyContent: "center",
                    py: "xs"
                }, o().createElement(c, {
                    size: 24,
                    color: "buy",
                    mr: "minor"
                }), o().createElement(q.Z, {
                    variant: "captionSub",
                    mr: "minor"
                }, r("accounts-url-verification", {
                    defaultValue: "URL verification:"
                })), o().createElement(q.Z, {
                    dir: "ltr",
                    variant: "caption"
                }, o().createElement(q.Z, {
                    as: "span",
                    color: "buy"
                }, "https://"), i.replace("https://", "").replace("www", "accounts")))
            }), "urlVerification");
            var Q = n("RYKX");

            function $(e) {
                return (0, Q.$)(), (0, r.useEffect)((function() {
                    e.trackingFunc && e.trackingFunc({
                        timing: "login_view"
                    })
                }), []), o().createElement(o().Fragment, null, o().createElement(K, null), o().createElement(i.Z, {
                    width: ["100%", "unset", "unset"]
                }, o().createElement(f, null), o().createElement(p.J, null, o().createElement(G, null), o().createElement(i.Z, {
                    display: ["none", "block", "block"]
                }, o().createElement(p.C, {
                    config: {
                        afterLogin: e.afterLogin
                    }
                })))))
            }
        },
        sBDV: (e, t, n) => {
            "use strict";
            n.d(t, {
                D$: () => r
            });
            var r = !1
        },
        "5F35": (e, t, n) => {
            "use strict";
            n.d(t, {
                t: () => l
            });
            var r = n("sViW"),
                o = n("q0wl"),
                i = n.n(o),
                a = (n("DTvD"), n("nRuQ")),
                c = n("/jO8"),
                s = n("UUfl"),
                u = {
                    login: function(e) {
                        (0, c.n)(e || "close in native app")
                    }
                },
                l = function() {
                    var e = (0, r.Z)(i().mark((function e(t, n) {
                        var r, o = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (o.length > 2 && void 0 !== o[2] ? o[2] : {}, null === (r = u[n]) || void 0 === r || r.call(u, t), !s.Rw || "true" !== a.d.getItem("bncnativeopen")) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 6, s.ZP.sendEventToNative({
                                        name: "web-login-biz-end",
                                        data: {}
                                    });
                                case 6:
                                    e.sent.isEventSupported ? a.d.removeItem("bncnativeopen") : console.log("\u4e0d\u652f\u6301\u8be5\u4e8b\u4ef6\uff0c\u8bf7\u5347\u7ea7app"), e.next = 11;
                                    break;
                                case 10:
                                    window.location.href = t;
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        owGl: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n("tEf9"),
                o = n("DTvD"),
                i = n.n(o);

            function a(e, t) {
                var n = i().useRef(e),
                    o = i().useRef();
                i().useEffect((function() {
                    n.current = e
                }), [n, e]);
                var a = i().useCallback((function() {
                    for (var e = arguments.length, i = new Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                    return new Promise((function(e) {
                        o.current && clearTimeout(o.current), o.current = setTimeout((function() {
                            var t;
                            e((t = n).current.apply(t, (0, r.Z)(i)))
                        }), t)
                    }))
                }), [o, n, t]);
                return a
            }
        },
        "EeA/": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n("BK7R"),
                o = n("DTvD"),
                i = n("T8Gn"),
                a = n("wOpj"),
                c = n("0qoC"),
                s = n.n(c),
                u = n("ouxG"),
                l = n("x/RW");
            const d = function(e, t) {
                var n = (0, i.$)().t;
                return (0, o.useMemo)((function() {
                    var o = s()({
                        email: {
                            readOnly: !1,
                            inputType: "text",
                            autoComplete: "section-email email",
                            type: "email",
                            name: "email",
                            enterkeyhint: "go",
                            label: n("common-email", "Email"),
                            "data-e2e": "input-email",
                            schema: a.Z_().required(n("validate-requiredEmail", "Please enter your email")).test("validate-invalidEmail", n("validate-invalidEmail", "Please enter a correct email address"), (function(e) {
                                return !!e && u.O.email.test(e)
                            }))
                        },
                        emailNew: {
                            readOnly: !1,
                            inputType: "text",
                            autoComplete: "section-email email",
                            type: "email",
                            name: "email",
                            label: n("common-email", "Email"),
                            "data-e2e": "input-email",
                            schema: a.Z_().required(n("validate-requiredEmail", "Please enter your email")).test("validate-invalidEmail", n("validate-invalidEmail", "Please enter a correct email address"), (function(e) {
                                return !!e && u.O.emailForRegister.test(e)
                            }))
                        },
                        mobile: {
                            isStoreCode: !1,
                            readOnly: !1,
                            id: "tel-national",
                            name: "mobile",
                            autoComplete: "section-mobile tel-national",
                            inputType: "inputPhone",
                            size: "lg",
                            label: n("accounts-label-mobile", "Phone Number"),
                            "data-e2e": "input-mobile",
                            schema: a.Ry({
                                nationalNumber: a.Z_(),
                                code: a.Z_()
                            }).required(n("accounts-validate-mobileRequired", "Please enter your phone number.")).test("validate-invalidMobile", n("accounts-validate-invalidMobile", "Please enter a valid phone number."), (function(e) {
                                return (0, l.gG)(e)
                            })).nullable()
                        },
                        username: {
                            isStoreCode: !1,
                            readOnly: !1,
                            id: "username",
                            name: "username",
                            autoComplete: "username",
                            autoCapitalize: "off",
                            enterkeyhint: "go",
                            inputType: "inputPhone",
                            type: "email",
                            size: "lg",
                            label: n("common-new-account", "Email / Phone Number"),
                            "data-e2e": "input-username",
                            schema: a.Ry({
                                nationalNumber: a.Z_(),
                                code: a.Z_()
                            }).required(n("common-acount-warning", "Please enter a valid email or phone number.")).test("validate-invalidMobile", n("common-acount-warning", "Please enter a valid email or phone number."), (function(e) {
                                return (0, l.nv)(e, void 0)
                            })).nullable()
                        },
                        password: {
                            inputType: "password",
                            name: "password",
                            spellCheck: !1,
                            autoCapitalize: "off",
                            maxlength: -1,
                            autoComplete: "section-mobile current-password",
                            label: n("common-password", "Password"),
                            schema: a.Z_().required(n("validate-requiredPassword", "Please enter your password")),
                            "data-e2e": "input-password"
                        },
                        confirmPassword: {
                            inputType: "password",
                            name: "confirmPassword",
                            autoCapitalize: "off",
                            spellCheck: !1,
                            label: n("resetPassword-confirmPassword", "Confirm Password"),
                            "data-e2e": "input-confirm-password",
                            schema: a.Z_().trim().required(n("accounts-requiredConfirmPassword", "Please enter your password")).oneOf([a.iH("password"), ""], n("accounts-invalidConfirmPassword", "Passwords are not the same."))
                        },
                        mobileVerifyCode: {
                            apiType: "protect",
                            inputType: "InputSmsCodeField",
                            name: "mobileVerifyCode",
                            label: n("accounts-2fa-SMSAuthLabel", "SMS Authentication Code"),
                            help: n("accounts-sms-authenticator-code-help", "Please enter sms authentication code"),
                            localeMap: {
                                voiceLabel: n("accounts-2fa-voice-label", "Did not receive SMS message?"),
                                voiceDesc: n("accounts-2fa-voice-desc", "Please try voice verification")
                            },
                            maxlength: 6,
                            relatedFields: ["mobile"],
                            "data-e2e": "input-mobile-verify-code",
                            schema: a.Z_().trim().required(n("accounts-sms-authenticator-code-required", "Please enter correct sms authentication code")).length(6, n("accounts-validate-sms-code", "Please enter correct sms authentication code"))
                        },
                        emailVerifyCode: {
                            inputType: "Input2faCodeField",
                            name: "emailVerifyCode",
                            label: n("accounts-setup-2fa-email-code", "Email Authentication Code"),
                            localeMap: {
                                countDownBtnText: n("accounts-getCode", "Get code")
                            },
                            relatedFields: ["email"],
                            "data-e2e": "input-2fa-code",
                            schema: a.Z_().trim().required(n("accounts-setup-2fa-email-invalid-code", "Please enter correct email authentication code")).test("accounts-setup-2fa-email-invalid-code", n(["accounts-setup-2fa-email-invalid-code", "Please enter correct email authentication code"]), (function(e) {
                                return u.O.emailCode.test(e || "")
                            }))
                        }
                    }, t);
                    return e.map((function(e) {
                        if (e) {
                            if ("string" === typeof e) return o[e] || {
                                render: function() {
                                    return e
                                }
                            };
                            if ("function" === typeof e.getFieldConfig) {
                                var t = o[e.type || e.name];
                                return e.getFieldConfig(t)
                            }
                            return (0, r.Z)({}, o[e.type || e.name], e)
                        }
                    }))
                }), [n, t, e])
            }
        },
        PMnD: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n("DTvD"),
                o = n.n(r),
                i = n("T8Gn"),
                a = n("yjl3"),
                c = n.n(a),
                s = n("jP+i");
            const u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = (0, i.$)(),
                    n = t.i18n,
                    a = n.language,
                    u = (0, s.Z)(),
                    l = (0, r.useMemo)((function() {
                        return c()(u)
                    }), [u]),
                    d = o().useCallback((function(e) {
                        return e.replace("{{rootDomain}}", l).replace("{{suffixOrigin}}", l).replace("#origin#", u).replace("{{siteHost}}", u).replace(":locale", a).replace("{{locale}}", a)
                    }), [l, u, a]),
                    f = (0, r.useMemo)((function() {
                        return d(e || "")
                    }), [d, e]);
                return {
                    linkHandled: f,
                    handleLink: d
                }
            }
        },
        "/Dnx": (e, t, n) => {
            "use strict";
            n.d(t, {
                p: () => l
            });
            var r = n("sViW"),
                o = n("q0wl"),
                i = n.n(o),
                a = n("bUJa"),
                c = n("VAOc"),
                s = n("lZYQ"),
                u = function() {
                    var e = (0, r.Z)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/composite/v1/friendly/marketing/associateTheLink", {
                                        caseId: t
                                    });
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();

            function l() {
                return (0, a.$)((0, r.Z)(i().mark((function e() {
                    var t;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, !(t = c.Q.read("biforstCaseId"))) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 5, u(t);
                            case 5:
                                e.next = 9;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(0);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                }))))
            }
        },
        "5iGD": (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => p
            });
            var r = n("DTvD"),
                o = n.n(r),
                i = n("c1zs"),
                a = n("WEt1"),
                c = n("rcf7"),
                s = n("KNyl"),
                u = n("SYb0"),
                l = n("UiJE"),
                d = n("2cdI"),
                f = n("jP+i"),
                p = function() {
                    var e = (0, c.s)(),
                        t = e.openModal,
                        n = e.closeModal,
                        r = (0, f.Z)(),
                        p = (0, a.wS)().locale;
                    return function(e) {
                        var a = e.message,
                            c = e.title,
                            f = e.linkUrl,
                            v = e.linkTitle,
                            h = e.i18n,
                            m = e.closeAble,
                            g = void 0 === m || m;
                        t({
                            maskClose: !1,
                            content: o().createElement(s.Z, {
                                icon: o().createElement(i.Z, {
                                    size: 96
                                }),
                                title: c,
                                description: a,
                                actions: o().createElement(u.ZP, null, v && f ? o().createElement(u.ZP, {
                                    className: "flex flex-col"
                                }, o().createElement(l.Z, {
                                    style: {
                                        flex: 1
                                    },
                                    variant: "primary",
                                    onClick: function() {
                                        return (0, d.Z)("".concat(r, "/").concat(p, "/").concat(f))
                                    }
                                }, v), o().createElement(l.Z, {
                                    className: "mt-2.5",
                                    onClick: function() {
                                        return n()
                                    },
                                    style: {
                                        flex: 1
                                    },
                                    variant: "text"
                                }, h["dialog-Cancel"] || "Cancel")) : g ? o().createElement(l.Z, {
                                    onClick: function() {
                                        return n()
                                    },
                                    style: {
                                        flex: 1
                                    },
                                    variant: "primary"
                                }, h["dialog-i-understand"] || "I understand") : null)
                            })
                        })
                    }
                }
        },
        RYKX: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => l,
                h: () => d
            });
            var r = n("DTvD"),
                o = n("+DN6"),
                i = n("WEt1"),
                a = n("WRKX"),
                c = n("PMnD"),
                s = n("0kS3"),
                u = n("UUfl");

            function l() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = (0, o.b)(),
                    n = t.isLoggedIn,
                    l = t.isLoading,
                    d = (0, c.Z)().handleLink,
                    f = (0, i.Hb)().query,
                    p = (0, i.tv)(),
                    v = (0, r.useMemo)((function() {
                        return e && !l && n
                    }), [e, l, n]);
                (0, r.useEffect)((function() {
                    if (u.Rw && n) "undefined" !== typeof(null === window || void 0 === window ? void 0 : window.close) && window.close();
                    else if (v) {
                        var e = d((0, s.nR)("RETURN_TO_DEFAULT")),
                            t = (0, a.R)(f.return_to) || e;
                        "undefined" !== typeof(null === window || void 0 === window ? void 0 : window.location) ? window.location.href = t: p.push(t)
                    }
                }), [v])
            }

            function d() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = (0, o.b)(),
                    n = t.isLoggedIn,
                    l = t.isLoading,
                    d = (0, c.Z)().handleLink,
                    f = (0, i.Hb)().query,
                    p = (0, i.tv)(),
                    v = (0, r.useRef)(!1);
                v = (0, r.useMemo)((function() {
                    return e && !l && n
                }), [l, n, e]);
                var h = function(e) {
                    var t = (e || {}).url;
                    if (console.log("isLoggedIn", n), u.Rw && v) "undefined" !== typeof(null === window || void 0 === window ? void 0 : window.close) && window.close();
                    else if (v) {
                        var r = d((0, s.nR)("RETURN_TO_DEFAULT")),
                            o = (0, a.R)(t) || (0, a.R)(f.return_to) || r;
                        "undefined" !== typeof(null === window || void 0 === window ? void 0 : window.location) ? window.location.href = o: p.push(o)
                    }
                };
                return h
            }
        },
        dqot: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => z
            });
            var r = n("DTvD"),
                o = n.n(r),
                i = n("rcf7"),
                a = n("RHSA"),
                c = n("7BxM"),
                s = n("sViW"),
                u = n("BK7R"),
                l = n("QUKP"),
                d = n("gZfF"),
                f = n("aVXY"),
                p = n("q0wl"),
                v = n.n(p),
                h = n("zzYc"),
                m = n("T8Gn"),
                g = n("3Gv2"),
                b = n("naNW"),
                y = n("SYb0"),
                w = n("O3KZ"),
                x = n("0KHN");
            const _ = function(e) {
                return o().createElement(x.Z, (0, w.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16 8a4 4 0 11-8 0 4 4 0 018 0zm-8 6a4 4 0 00-4 4v2h16v-2a4 4 0 00-4-4H8z",
                    fill: "currentColor"
                }))
            };
            var E = n("x4hQ"),
                k = n("59hn"),
                Z = n("L2Kd"),
                C = n("U7vL"),
                S = function(e) {
                    var t = e.onCancel,
                        n = e.onOk,
                        r = e.type,
                        i = e.action,
                        a = e.userInfo,
                        c = (0, m.$)("BioSecMiniprogram").t;
                    return o().createElement(C.Ox, {
                        className: k.Q6 ? "" : "web-2fa-management-warning",
                        onOk: n,
                        confirmText: c("Continue", "Continue"),
                        cancelText: c("Cancel", "Cancel"),
                        onClose: t,
                        icon: o().createElement(g.Z, {
                            style: {
                                width: "96px",
                                height: "auto",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        }, o().createElement(b.Z, {
                            src: (0, E.fW)("security-medium"),
                            className: "h-24 w-24 mt-8 sm:mt-0"
                        })),
                        title: o().createElement(y.ZP, {
                            className: "mb-2"
                        }, o().createElement(y.ZP, {
                            className: "headline4 sm:subtitle1 font-semibold mb-2"
                        }, c("".concat(r, "-").concat(i, "-title"), Z.Z["".concat(r, "-").concat(i, "-title")])), o().createElement(g.Z, {
                            className: "items-center justify-center"
                        }, o().createElement(_, {
                            name: "UserF",
                            color: "textPrimary",
                            className: "h-5 w-5 text-[--color-textPrimary]"
                        }), o().createElement(y.ZP, {
                            className: "typography-Subtitle4 ml-1"
                        }, a))),
                        description: o().createElement(y.ZP, {
                            className: "text-[--color-textSecondary] sm:text-[--color-textThird]"
                        }, c("password-change-confirm-desc", {
                            defaultValue: Z.Z["password-change-confirm-desc"],
                            LIMIT_TIME: 24
                        }))
                    })
                },
                T = n("SKSe"),
                I = n("vkzD"),
                P = n("mDMI"),
                R = n("HqPM"),
                M = n("4SuJ"),
                D = (0, P.oZ)((function(e) {
                    var t = e.needCheckValidAccount,
                        n = void 0 === t || t,
                        i = (0, d.Z)(e, ["needCheckValidAccount"]),
                        a = (0, m.$)("BioSecMiniprogram").i18n,
                        c = (0, T.d)().mutateAsync,
                        p = (0, I.k)("forget_password", a.language).manMachineAndCheckAccount,
                        g = (0, r.useRef)({}),
                        b = (0, r.useRef)({}),
                        y = (0, f.Z)((0, r.useState)(""), 2),
                        w = y[0],
                        x = y[1];
                    (0, r.useEffect)((function() {
                        (0, s.Z)(v().mark((function e() {
                            var t, r, o;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!n) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, (0, h.getStorage)({
                                            key: "loginusername"
                                        });
                                    case 3:
                                        e.t0 = e.sent, e.next = 9;
                                        break;
                                    case 6:
                                        return e.next = 8, (0, h.getStorage)({
                                            key: "forgotpwdparam"
                                        });
                                    case 8:
                                        e.t0 = e.sent;
                                    case 9:
                                        t = e.t0, r = t.data, console.log("BIDS-816 ForgotPasswordForm loginUsername", n, r), n ? g.current = r : b.current = r, o = (null === r || void 0 === r ? void 0 : r.email) ? M.w : M.x, x(o((null === r || void 0 === r ? void 0 : r.email) || (null === r || void 0 === r ? void 0 : r.mobile)));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [n]);
                    var _ = function() {
                            var e = (0, s.Z)(v().mark((function e() {
                                var t, n, r, o;
                                return v().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = (0, l.Z)((0, u.Z)({}, g.current), {
                                                bizType: "forget_password"
                                            }), console.log("BIDS-816 ForgotPasswordForm checkValidAccount params ", t), e.next = 4, p(t, []);
                                        case 4:
                                            if (n = e.sent, console.log("BIDS-816 ForgotPasswordForm checkValidAccount manMachineValidResult ", n), r = n.success, o = (0, d.Z)(n, ["success"]), r) {
                                                e.next = 10;
                                                break
                                            }
                                            return ((null === n || void 0 === n ? void 0 : n.message) || (null === n || void 0 === n ? void 0 : n.code)) && i.onHandleSubmitError(new R.Z((null === n || void 0 === n ? void 0 : n.message) || "", "BIDS_ERR_RESET_PWD_M")), e.abrupt("return");
                                        case 10:
                                            return e.next = 12, (0, h.setStorage)({
                                                key: "forgotpwdparam",
                                                data: (0, l.Z)((0, u.Z)({}, t), {
                                                    sessionId: o.sessionId
                                                })
                                            });
                                        case 12:
                                            return e.abrupt("return", (0, u.Z)({}, t, o));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        E = function() {
                            var e = (0, s.Z)(v().mark((function e() {
                                var t, r, o;
                                return v().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!n) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 3, _();
                                        case 3:
                                            e.t0 = e.sent, e.next = 7;
                                            break;
                                        case 6:
                                            e.t0 = b.current;
                                        case 7:
                                            if (t = e.t0, console.log("BIDS-2890 ForgotPasswordForm onOk checkValidAccountResult ", n, t), t) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 11:
                                            return e.prev = 11, e.next = 15, c(t);
                                        case 15:
                                            null === (r = i.onSuccess) || void 0 === r || r.call(i), e.next = 26;
                                            break;
                                        case 18:
                                            if (e.prev = 18, e.t1 = e.catch(11), "208049" !== e.t1.code) {
                                                e.next = 24;
                                                break
                                            }
                                            return i.onChallenge && (null === (o = i.onChallenge) || void 0 === o || o.call(i)), e.abrupt("return");
                                        case 24:
                                            console.log("BIDS-816 handle password precheck error:", e.t1), i.onHandleSubmitError(e.t1);
                                        case 26:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [11, 18]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return o().createElement(S, {
                        onCancel: i.onCancel,
                        onOk: E,
                        type: "password",
                        action: "reset",
                        userInfo: w
                    })
                })),
                O = n("6/mx");
            const z = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = (0, i.s)(),
                    n = t.openModal,
                    r = t.closeModal,
                    s = (0, a.q)().isMobile,
                    u = (0, O.Q)(),
                    l = (0, m.$)().i18n,
                    d = e ? "?resetType=login" : "",
                    f = function() {
                        n({
                            content: o().createElement(o().Fragment, null, s && o().createElement(c.Z, {
                                name: "CloseF",
                                className: "absolute top-4 right-4 w-5 h-5 cursor-pointer text-[--color-iconNormal]",
                                onClick: r
                            }), o().createElement(D, {
                                onCancel: r,
                                onSuccess: function() {
                                    r(), u.push("/".concat(l.language, "/forgot-password/reset").concat(d))
                                },
                                needCheckValidAccount: e,
                                onChallenge: function() {
                                    r(), u.push("/".concat(l.language, "/forgot-password-mfa").concat(d))
                                }
                            })),
                            className: "bids-full-modal",
                            maskClose: !1
                        })
                    };
                return {
                    forgetPWDNew: f
                }
            }
        },
        iiT4: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => s
            });
            var r = n("aVXY"),
                o = n("DTvD"),
                i = n("UJEx"),
                a = n("pj6h"),
                c = n("YHVh");

            function s() {
                var e = (0, c.v9)((function(e) {
                        var t;
                        return null === (t = e.app) || void 0 === t ? void 0 : t.isMobile
                    })),
                    t = (0, i.useMediaQuery)({
                        maxWidth: 767
                    }),
                    n = (0, i.useMediaQuery)({
                        minWidth: 768,
                        maxWidth: 1023
                    }),
                    s = (0, i.useMediaQuery)({
                        minWidth: 768,
                        maxWidth: 1279
                    }),
                    u = (0, i.useMediaQuery)({
                        minWidth: 768,
                        maxWidth: 1439
                    }),
                    l = (0, r.Z)((0, o.useState)({
                        isMobile: e,
                        isTablet: !1,
                        isDesktop: !e,
                        is13Desk: !1,
                        isLeastWebSize: !1
                    }), 2),
                    d = l[0],
                    f = l[1];
                return (0, o.useEffect)((function() {
                    var r = a.C && !e ? {
                        isMobile: t,
                        isTablet: !t && n,
                        isDesktop: !t && !n,
                        is13Desk: u,
                        isLeastWebSize: !t && !n && s
                    } : {
                        isMobile: e,
                        isTablet: !1,
                        isDesktop: !e,
                        is13Desk: !1,
                        isLeastWebSize: !1
                    };
                    f(r)
                }), [e, t, n, s, u]), d
            }
        },
        "6/mx": (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => d,
                Q: () => f
            });
            var r = n("BK7R"),
                o = n("QUKP"),
                i = n("tEf9"),
                a = n("DTvD"),
                c = n("WEt1"),
                s = n("xrwp"),
                u = n("wVbN"),
                l = n("2cdI"),
                d = function() {
                    return (0, a.useCallback)((function(e) {
                        var t;
                        if (!e || 0 === e.indexOf("https")) return !1;
                        var n = u.Z.filter((function(e) {
                            var t = e.name;
                            return e.path && "404" !== t
                        }));
                        return (null === (t = (0, s.fp)(n, e)) || void 0 === t ? void 0 : t.length) > 0
                    }), [])
                },
                f = function() {
                    var e = d(),
                        t = (0, c.tv)(),
                        n = (0, a.useMemo)((function() {
                            return (0, o.Z)((0, r.Z)({}, t), {
                                push: function(n) {
                                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                                    var c;
                                    e(n) ? (c = t).push.apply(c, [n].concat((0, i.Z)(o))) : (0, l.Z)(n)
                                },
                                replace: function(n) {
                                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                                    var c;
                                    e(n) ? (c = t).replace.apply(c, [n].concat((0, i.Z)(o))) : (0, l.Z)(n)
                                }
                            })
                        }), []);
                    return n
                }
        },
        oGKF: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n("aVXY"),
                o = n("tEf9"),
                i = n("DTvD");

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = (0, r.Z)((0, i.useState)(!1), 2),
                    a = n[0],
                    c = n[1];
                return (0, i.useEffect)((function() {
                    var t = setTimeout((function() {
                        c(!0)
                    }), e);
                    return function() {
                        return clearTimeout(t)
                    }
                }), (0, o.Z)(t).concat([e])), a
            }
        },
        "F/7r": (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => l,
                Bm: () => f,
                MR: () => p
            });
            var r = n("M5j3"),
                o = n("BK7R"),
                i = n("gZfF"),
                a = n("DTvD"),
                c = n.n(a),
                s = {
                    config: {}
                },
                u = (0, a.createContext)(s);

            function l(e) {
                return c().createElement(u.Provider, (0, r.Z)({
                    value: s
                }, e))
            }
            var d = {};

            function f(e, t) {
                var n, r = (null === (n = (0, a.useContext)(u).config) || void 0 === n ? void 0 : n[e]) || d,
                    c = r.config,
                    s = void 0 === c ? d : c,
                    l = (0, i.Z)(r, ["config"]);
                return t ? (0, o.Z)({
                    config: t
                }, l) : (0, o.Z)({
                    config: s
                }, l)
            }

            function p(e, t) {
                var n = function(e) {
                        if (!e) return "";
                        var t = e[0],
                            n = e.slice(1);
                        return t.toLowerCase() + n
                    }(t || e.displayName || e.name || "Component"),
                    o = c().memo((function(t) {
                        return c().createElement(e, (0, r.Z)({}, t))
                    })),
                    i = function(e) {
                        var t = f(n),
                            i = t.hide,
                            a = void 0 !== i && i,
                            s = t.render,
                            u = t.config;
                        return a ? null : "function" === typeof s ? s() : s || c().createElement(o, (0, r.Z)({
                            config: u
                        }, e))
                    };
                return i.displayName = "withHideOrRenderOrConfig(".concat(n, ")"), i
            }
        },
        yG0M: (e, t, n) => {
            "use strict";
            n.d(t, {
                H2: () => v,
                Hw: () => g,
                RE: () => b,
                Tp: () => w,
                V9: () => c,
                Vh: () => y,
                Z1: () => h,
                i0: () => f,
                i1: () => m,
                pl: () => s,
                rA: () => l,
                v1: () => u,
                vt: () => p,
                yl: () => d
            });
            var r = n("5R4Y"),
                o = n("nRuQ"),
                i = n("uuII"),
                a = "login";

            function c() {
                var e = "bids_login_page_view",
                    t = (0, i.U6)();
                (0, i.rj)(e), (0, i.Nx)("login_page"), (0, i.qK)({
                    sceneVal: 0,
                    thirdType: ""
                }), (0, r.ZP)(t, {
                    pageName: a,
                    elementID: e
                })
            }

            function s(e) {
                var t = e.isFailure,
                    n = e.errorCode,
                    o = e.errorMsg,
                    c = e.btnType,
                    s = e.elementID,
                    u = void 0 === s ? "bids_login_button_click" : s,
                    l = (0, i.mB)();
                (0, i.rj)(u);
                (0, r.ZP)(l, {
                    pageName: a,
                    elementID: u,
                    df_3: t,
                    df_4: n,
                    df_5: o,
                    df_6: c,
                    df_8: (0, i.rd)({
                        bids_login_button_click: "bids_login_page_view",
                        bids_link_existing_account_click: "bids_link_existing_account_page_view"
                    } [u])
                })
            }

            function u(e) {
                var t, n = e.thirdOperatorEnum,
                    o = (0, i.mB)(),
                    c = "others",
                    s = (0, i.Ac)(n);
                ["APPLE_LOGIN", "GOOGLE_LOGIN"].includes(n) && (c = "login"), ["APPLE_REGISTER", "GOOGLE_REGISTER"].includes(n) && (c = "signup"), "one_tap" === (0, i.$t)() && (c = "one_tap"), "signup" === c ? t = (0, i.rd)("bids_signup_button_click") : "login" === c ? t = (0, i.rd)("bids_login_button_click") : "one_tap" === c && (t = (0, i.rd)("page_view_onetap_redirection")), (0, r.ZP)(o, {
                    pageName: a,
                    elementID: "bids_3rd_login_success",
                    df_3: s,
                    df_4: t,
                    df_5: "one_tap" === c ? 1 : 0,
                    df_7: c
                })
            }

            function l(e) {
                var t = e.isFailure,
                    n = e.errorCode,
                    o = e.errorMsg,
                    c = e.loginType,
                    s = (0, i.mB)();
                (0, r.ZP)(s, {
                    pageName: a,
                    elementID: "bids_welcome_back_password_button_click",
                    df_3: t,
                    df_4: n,
                    df_5: o,
                    df_7: c,
                    df_8: (0, i.rd)("bids_welcome_back_password_page_view")
                })
            }

            function d(e) {
                var t = e.loginType,
                    n = e.pageType,
                    o = e.elementID,
                    c = void 0 === o ? "bids_login_captcha_page_view" : o,
                    s = (0, i.U6)();
                (0, i.rj)(c), (0, r.ZP)(s, {
                    pageName: a,
                    elementID: c,
                    df_3: t,
                    df_4: n
                })
            }

            function f(e) {
                var t = e.isFailure,
                    n = e.errorCode,
                    o = e.errorMsg,
                    c = e.loginType,
                    s = e.pageType,
                    u = e.elementID,
                    l = void 0 === u ? "bids_login_captcha_submit" : u,
                    d = (0, i.mB)();
                (0, r.ZP)(d, {
                    pageName: a,
                    elementID: l,
                    df_3: t,
                    df_4: n,
                    df_5: o,
                    df_8: s,
                    df_11: c,
                    df_10: (0, i.rd)("bids_login_captcha_page_view")
                })
            }

            function p(e) {
                var t = e.loginType,
                    n = e.pageType,
                    o = (0, i.U6)(),
                    c = "bids_3rd_login_captcha_page_view";
                (0, i.rj)(c), (0, r.ZP)(o, {
                    pageName: a,
                    elementID: c,
                    df_3: t,
                    df_4: n,
                    df_7: "one_tap" === (0, i.$t)() ? 1 : 0
                })
            }

            function v(e) {
                var t = e.isFailure,
                    n = e.errorCode,
                    o = e.errorMsg,
                    c = e.loginType,
                    s = e.pageType,
                    u = (0, i.mB)();
                (0, r.ZP)(u, {
                    pageName: a,
                    elementID: "bids_3rd_login_captcha_submit",
                    df_3: t,
                    df_4: n,
                    df_5: o,
                    df_6: c,
                    df_7: "one_tap" === (0, i.$t)() ? 1 : 0,
                    df_8: s,
                    df_10: (0, i.rd)("bids_3rd_login_captcha_page_view")
                })
            }

            function h(e) {
                var t = e.loginType,
                    n = (0, i.U6)();
                (0, r.ZP)(n, {
                    pageName: a,
                    elementID: "bids_login_ip_block_page_view",
                    df_7: t
                })
            }

            function m() {
                var e = (0, i.U6)();
                (0, r.ZP)(e, {
                    pageName: a,
                    elementID: "bids_login_captcha_pwd_page_view"
                })
            }

            function g(e) {
                var t = e.isFailure,
                    n = e.errorCode,
                    o = e.errorMsg,
                    c = (0, i.mB)();
                (0, r.ZP)(c, {
                    pageName: a,
                    elementID: "bids_login_captcha_pwd_submit",
                    df_3: t,
                    df_4: n,
                    df_5: o
                })
            }

            function b() {
                var e = (0, i.mB)();
                (0, r.ZP)(e, {
                    pageName: a,
                    elementID: "bids_login_verification_forget_pwd_click"
                })
            }

            function y() {
                var e = (0, i.mB)();
                (0, r.ZP)(e, {
                    pageName: a,
                    elementID: "bids_login_page_input"
                })
            }

            function w() {
                var e = o.d.getItem("usernamev2"),
                    t = "ThreeParty" === (null === e || void 0 === e ? void 0 : e.threePartySource) ? "bind" : "login",
                    n = (0, i.mB)();
                (0, r.ZP)(n, {
                    pageName: a,
                    elementID: "bids_login_password_input",
                    df_7: t
                })
            }
        },
        "D+jF": (e, t, n) => {
            "use strict";
            n.d(t, {
                KR: () => s,
                M7: () => u,
                QM: () => c,
                SO: () => d,
                Y0: () => f,
                xC: () => l
            });
            var r = n("uuII"),
                o = n("5R4Y"),
                i = n("FVAE"),
                a = "login_verify";

            function c(e) {
                var t = e.authType,
                    n = e.parentNode,
                    i = (0, r.U6)(),
                    c = "bids_login_verification_view";
                (0, r.rj)(c), (0, o.ZP)(i, {
                    pageName: a,
                    elementID: c,
                    df_6: t,
                    df_7: n
                })
            }

            function s(e) {
                var t = e.authType,
                    n = e.isFailure,
                    c = e.errorCode,
                    s = e.errorMsg,
                    u = e.parentNode;
                if (!n || !(0, i.I8)(c)) {
                    var l = (0, r.mB)();
                    (0, o.ZP)(l, {
                        pageName: a,
                        elementID: "bids_login_verification_submit",
                        df_3: n,
                        df_4: c,
                        df_5: s,
                        df_6: t,
                        df_7: u,
                        df_10: (0, r.rd)({
                            bind: "bids_link_existing_account_click",
                            login: "bids_login_button_click"
                        } [u])
                    })
                }
            }

            function u(e) {
                var t = e.switchFrom,
                    n = e.switchTo,
                    i = (0, r.mB)();
                (0, o.ZP)(i, {
                    pageName: a,
                    elementID: "bids_login_verification_switch_click",
                    df_6: (0, r.n5)(t),
                    df_8: (0, r.n5)(n)
                })
            }

            function l(e) {
                var t = e.verifyType,
                    n = (0, r.mB)();
                (0, o.ZP)(n, {
                    pageName: a,
                    elementID: "bids_login_verification_unavailable_click",
                    df_6: t
                })
            }
            var d = function() {
                    var e = (0, r.mB)();
                    (0, o.ZP)(e, {
                        pageName: a,
                        elementID: "bids_login_verification_try_again_click"
                    })
                },
                f = function() {
                    var e = (0, r.mB)();
                    (0, o.ZP)(e, {
                        pageName: a,
                        elementID: "bids_login_verification_return_button_click"
                    })
                }
        },
        uuII: (e, t, n) => {
            "use strict";
            n.d(t, {
                $t: () => l,
                Ac: () => u,
                Nx: () => d,
                U6: () => s,
                YO: () => p,
                mB: () => c,
                n5: () => h,
                qK: () => f,
                rd: () => a,
                rj: () => i
            });
            var r = n("nRuQ"),
                o = n("0kS3");

            function i(e) {
                r.d.setItem("".concat(e, "_START_TIME_KEY_FOR_TRACKING"), (new Date).getTime())
            }

            function a(e) {
                var t = r.d.getItem("".concat(e, "_START_TIME_KEY_FOR_TRACKING"));
                return t ? "".concat(((new Date).getTime() - t) / 1e3) : ""
            }

            function c() {
                return o.Q6 ? "df_mpclick" : "webClick"
            }

            function s() {
                return o.Q6 ? "df_mpviewscreen" : "pageView"
            }

            function u() {
                var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return (null === (n = n.toLowerCase()) || void 0 === n || null === (e = n.indexOf) || void 0 === e ? void 0 : e.call(n, "apple")) > -1 ? "apple" : (null === n || void 0 === n || null === (t = n.indexOf) || void 0 === t ? void 0 : t.call(n, "google")) > -1 ? "google" : n
            }

            function l() {
                return r.d.getItem("parentNodeForTracking") || "others"
            }

            function d(e) {
                r.d.setItem("parentNodeForTracking", e)
            }

            function f(e) {
                var t = e.sceneVal,
                    n = void 0 === t ? 0 : t,
                    o = e.thirdType,
                    i = void 0 === o ? "" : o;
                r.d.setItem("linkAccountSceneInfo", {
                    sceneVal: n,
                    thirdType: i
                })
            }

            function p(e) {
                return "person" === e ? "personal" : "business" === e ? "entity" : e
            }
            var v = {
                    roaming: "roaming_click",
                    fido: "biometric",
                    fidoExternal: "yubikey",
                    biometric: "biometric",
                    "Touch ID": "Touch ID",
                    "Face ID": "Face ID",
                    passkey: "passkey",
                    yubikey: "yubikey",
                    passkeys: "passkey",
                    fidoweb: "fido",
                    fido2: "fido2",
                    google: "auth_app",
                    email: "email",
                    mobile: "sms",
                    sms: "sms",
                    password: "password",
                    internal: "internal"
                },
                h = function(e) {
                    return null === e || void 0 === e ? void 0 : e.split(",").map((function(e) {
                        return v[e.replace("VerifyCode", "")]
                    })).filter((function(e) {
                        return !!e
                    })).toString()
                }
        },
        rBT2: (e, t, n) => {
            "use strict";
            n.d(t, {
                HL: () => u,
                J9: () => c,
                OC: () => a,
                Wu: () => s
            });
            var r = n("5R4Y"),
                o = n("uuII"),
                i = {
                    APPLE_REGISTER: {
                        pageName: "signup_welcome",
                        elementID: "bids_signup_apple"
                    },
                    GOOGLE_REGISTER: {
                        pageName: "signup_welcome",
                        elementID: "bids_signup_google"
                    },
                    APPLE_LOGIN: {
                        pageName: "login",
                        elementID: "bids_login_apple"
                    },
                    GOOGLE_LOGIN: {
                        pageName: "login",
                        elementID: "bids_login_google"
                    }
                };

            function a(e) {
                var t = e.type,
                    n = e.error;
                (0, r.ZP)("webClick", {
                    pageName: i[t].pageName,
                    elementID: "".concat(i[t].elementID, "_submit_failure"),
                    df_10: n
                })
            }

            function c(e) {
                var t = e.type;
                (0, r.ZP)("webClick", {
                    pageName: i[t].pageName,
                    elementID: "".concat(i[t].elementID, "_submit_success")
                })
            }

            function s(e) {
                var t = e.type;
                (0, r.ZP)("webClick", {
                    pageName: i[t].pageName,
                    elementID: "bids_login_".concat(t.includes("GOOGLE") ? "google" : "apple", "_success")
                })
            }

            function u() {
                var e = (0, o.U6)(),
                    t = "page_view_onetap_redirection";
                (0, o.rj)(t), (0, o.Nx)("one_tap"), (0, r.ZP)(e, {
                    pageName: "Onetap_redirection",
                    elementID: t
                })
            }
        },
        UUfl: (e, t, n) => {
            "use strict";
            n.d(t, {
                Rw: () => i,
                ZP: () => c
            });
            var r = n("BosS"),
                o = n("wMNj"),
                i = Boolean(function() {
                    var e;
                    if ("undefined" !== typeof window && (null === (e = window.navigator) || void 0 === e ? void 0 : e.userAgent) && /BNC\/[\d.]+/i.test(window.navigator.userAgent)) {
                        var t = window.navigator.userAgent.match(/BNC\/[\d.]+/i);
                        return t ? t[0].slice(4) : ""
                    }
                    return ""
                }()),
                a = {
                    ensureLogged: function() {
                        location.href = "".concat(o.Z.language, "/login")
                    },
                    sendAuthToken: function() {}
                };
            const c = (0, r.Ue)((0, r.xf)(a))
        },
        eVLX: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => o,
                Q: () => i
            });
            var r = n("nRuQ"),
                o = function() {
                    r.d.removeItem("email"), r.d.removeItem("registerEmail"), r.d.removeItem("userMobile"), r.d.removeItem("loginParams")
                },
                i = function() {
                    r.d.removeItem("utm_source"), r.d.removeItem("utm_source_info")
                }
        },
        "+g7R": (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => a
            });
            var r = n("sViW"),
                o = n("q0wl"),
                i = n.n(o);

            function a(e, t) {
                return c.apply(this, arguments)
            }

            function c() {
                return c = (0, r.Z)(i().mark((function e(t, n) {
                    var r = arguments;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r.length > 2 && void 0 !== r[2] ? r[2] : "login", window.__ElectronBrowserBridge && ("temp" === t ? window.__ElectronBrowserBridge.postAction({
                                    action: "set-tmp-token",
                                    payload: {
                                        token: n.token
                                    }
                                }) : "fin" === t && window.__ElectronBrowserBridge.postAction({
                                    action: "login",
                                    payload: {
                                        token: n.token
                                    }
                                })), e.abrupt("return", !0);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), c.apply(this, arguments)
            }
        },
        "2cdI": (e, t, n) => {
            "use strict";

            function r(e, t, n) {
                try {
                    window.open(e, t || "_self", n)
                } catch (r) {}
            }
            n.d(t, {
                Z: () => r
            })
        },
        lFNY: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r, o, i = n("uqCI"),
                a = n("888e"),
                c = n("2PCm"),
                s = n("4Y6J"),
                u = n("DTvD"),
                l = n.n(u),
                d = n("hTvQ"),
                f = n.n(d),
                p = n("n0xf"),
                v = n("l+NK"),
                h = function(e) {
                    (0, c.Z)(n, e);
                    var t = (0, s.Z)(n);

                    function n(e) {
                        var o;
                        return (0, a.Z)(this, n), (o = t.call(this, e)).state = {
                            show: !0
                        }, r = (0, i.Z)(o), o
                    }
                    var o = n.prototype;
                    return o.show = function() {
                        this.setState({
                            show: !0
                        })
                    }, o.hide = function() {
                        this.setState({
                            show: !1
                        })
                    }, o.render = function() {
                        return this.state.show ? l().createElement(l().Fragment, null, l().createElement(p.Z, {
                            sx: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: 999
                            }
                        }), l().createElement(p.Z, {
                            sx: {
                                width: "30px",
                                height: "30px",
                                textAlign: "center",
                                fontSize: "10px",
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)"
                            }
                        }, l().createElement(v.Z, {
                            itemsColor: "#F0B90B"
                        }))) : null
                    }, n
                }(l().PureComponent);
            h.show = function() {
                r ? r.show() : (o || (o = window.document.createElement("div"), document.body.appendChild(o)), f().render(l().createElement(h, null), o))
            }, h.hide = function() {
                r && r.hide()
            };
            const m = h
        },
        ESSE: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n("DTvD"),
                o = n.n(r),
                i = n("M5j3"),
                a = n("jYyJ");
            const c = function(e) {
                return o().createElement(a.Z, (0, i.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 88c22.091 0 40-17.909 40-40S70.091 8 48 8 8 25.909 8 48s17.909 40 40 40zm3-58v24h-6V30h6zm0 30v6h-6v-6h6z",
                    fill: "url(#general-warning_svg__paint0_linear_54387_24287)"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M77 48c0-16.016-12.984-29-29-29S19 31.984 19 48s12.984 29 29 29 29-12.984 29-29zM51 30v24h-6V30h6zm0 30v6h-6v-6h6z",
                    fill: "url(#general-warning_svg__paint1_linear_54387_24287)"
                }), o().createElement("defs", null, o().createElement("linearGradient", {
                    id: "general-warning_svg__paint0_linear_54387_24287",
                    x1: 8,
                    y1: 48,
                    x2: 102.5,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B",
                    stopOpacity: 0
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F0B90B"
                })), o().createElement("linearGradient", {
                    id: "general-warning_svg__paint1_linear_54387_24287",
                    x1: 48,
                    y1: 19,
                    x2: 48,
                    y2: 77,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            };
            var s = n("nrP6"),
                u = n("0kS3");
            const l = {
                "001528": {
                    imgSrc: o().createElement(c, {
                        size: [54, 80]
                    }),
                    desc: "accounts-incorrect-password-reset-warning",
                    defaultMessage: 'Incorrect password. Please retry or click "Forgot Password?" to reset. You have 1 more chance left. After 5 failed attempts, your account will be locked for 2 hours, and withdrawals will be disabled tor 24 hours.'
                },
                200001011: {
                    imgSrc: o().createElement(s.Z, {
                        size: [60, 80]
                    }),
                    desc: "accounts-account-locked"
                },
                200001013: {
                    desc: "accounts-2fa-code-error"
                },
                200001016: {
                    desc: "accounts-2fa-code-error"
                },
                200001015: {
                    imgSrc: "".concat((0, u.nR)("STATIC_HOST"), "/static/images/accounts/expired-b96.svg"),
                    desc: "accounts-sms-code-expired"
                },
                200001035: {
                    imgSrc: "".concat((0, u.nR)("STATIC_HOST"), "/static/images/accounts/expired-b96.svg"),
                    desc: "accounts-google-code-expired"
                },
                600000007: {
                    imgSrc: "".concat((0, u.nR)("STATIC_HOST"), "/static/images/accounts/ac-fresh-b96.svg"),
                    desc: "accounts-2fa-code-fail-many"
                },
                "006007": {
                    imgSrc: "".concat((0, u.nR)("STATIC_HOST"), "/static/images/accounts/ac-fresh-b96.svg"),
                    desc: "accounts-2fa-code-fail-many"
                },
                200001041: {
                    imgSrc: "".concat((0, u.nR)("STATIC_HOST"), "/static/images/accounts/ac-fresh-b96.svg"),
                    desc: "accounts-2fa-code-fail-many"
                },
                200001006: {
                    imgSrc: "".concat((0, u.nR)("STATIC_HOST"), "/static/images/accounts/ac-fresh-b96.svg"),
                    desc: "accounts-email-code-expired"
                },
                100001003: {
                    imgSrc: o().createElement(s.Z, {
                        size: 96
                    }),
                    desc: "accounts-email-code-expired"
                },
                "000001": {
                    desc: "accounts-ui-system-no-response",
                    defaultMessage: "The system is not responding at the moment. Please try again later."
                },
                commonErr: {
                    imgSrc: "".concat((0, u.nR)("STATIC_HOST"), "/static/images/accounts/common/error.svg")
                }
            }
        },
        YxjL: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => D
            });
            var r = n("M5j3"),
                o = n("gZfF"),
                i = n("aVXY"),
                a = n("DTvD"),
                c = n.n(a),
                s = n("n0xf"),
                u = n("KVSf"),
                l = n("/pg0"),
                d = n("T8Gn"),
                f = n("sViW"),
                p = n("q0wl"),
                v = n.n(p),
                h = n("8ufs"),
                m = n("pHbR"),
                g = n("lPrA"),
                b = n("dWq7"),
                y = n("nRuQ"),
                w = n("EXxB"),
                x = n("sPjN"),
                _ = n("L/P0"),
                E = n("0kS3"),
                k = n("Zfu8");

            function Z(e, t, n, r, o, i) {
                var a = e.getElementsByTagName(t)[0],
                    c = a,
                    s = a;
                (s = e.createElement(t)).id = n, s.src = r, c && c.parentNode ? c.parentNode.insertBefore(s, c) : e.head.appendChild(s), s.onerror = i, s.onload = o
            }

            function C(e, t) {
                var n = e.getElementById(t);
                n && n.parentNode.removeChild(n)
            }
            var S = function(e) {
                var t = e.handleCredentialResponse,
                    n = e.thirdPartyName,
                    r = "undefined" !== typeof window && !!window.Cypress,
                    o = (0, a.useCallback)((function() {
                        r && t({
                            credential: "autoTest".concat(Math.random().toString(36).substring(7), "@test.com")
                        })
                    }), [r]);
                return r ? c().createElement(s.Z, {
                    id: "cypress".concat(n, "LoginBtn"),
                    sx: {
                        display: "none",
                        height: "0",
                        width: "0"
                    },
                    onClick: o
                }, "hidden") : null
            };
            const T = function(e) {
                var t = e.afterLogin,
                    n = e.jsSrc,
                    i = e.clientId,
                    l = e.btnText,
                    p = e.defaultText,
                    T = e.thirdOperatorEnum,
                    I = e.type,
                    P = (e.handleCallback, e.thirdPartyTrackingFunc),
                    R = e.btnContent,
                    M = (0, o.Z)(e, ["afterLogin", "jsSrc", "clientId", "btnText", "defaultText", "thirdOperatorEnum", "type", "handleCallback", "thirdPartyTrackingFunc", "btnContent"]),
                    D = c().useRef(null),
                    O = (0, k.Z)(),
                    z = (0, x.Fg)().isLight,
                    A = (0, d.$)(),
                    L = A.t,
                    N = A.i18n.language,
                    F = (0, g.m)({
                        staticHost: (0, E.nR)("RECAPTCHA_STATIC_HOST") || (0, E.nR)("STATIC_HOST"),
                        nodeRef: D,
                        lang: N,
                        bizId: "third_login",
                        googleReCaptchaKey: (0, E.nR)("GOOGLE_RECAPTCHA_KEY")
                    }).manMachineValidate,
                    j = (0, w.S)().popupForManMachineError,
                    B = c().useRef(0),
                    V = function() {
                        var e = (0, f.Z)(v().mark((function e(n) {
                            var r, o, i, a, c;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = n.credential, e.prev = 1, y.d.setItem("loginVerify", "google"), P && P({
                                            timing: "buttonClickedWithResult",
                                            isFailure: 0,
                                            btnType: "google"
                                        }), P && P({
                                            timing: "thirdPartyCaptchaPageView",
                                            type: "google",
                                            pageType: ""
                                        }), e.next = 8, F({
                                            bizType: "third_login",
                                            idToken: r
                                        });
                                    case 8:
                                        if (i = e.sent, a = i.success ? i.data.sessionId : "", y.d.setItem("sessionId", a), P && P({
                                                timing: "captchaSubmit",
                                                isFailure: i.success ? 0 : 1,
                                                errorCode: i.success || null === i || void 0 === i ? void 0 : i.code,
                                                errorMsg: i.success || null === i || void 0 === i ? void 0 : i.message,
                                                type: "google",
                                                pageType: null === i || void 0 === i || null === (o = i.data) || void 0 === o ? void 0 : o.validateCodeType
                                            }), !i.success) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 15, (0, b.JA)({
                                            sessionId: a,
                                            idToken: r,
                                            thirdOperatorEnum: T
                                        });
                                    case 15:
                                        return c = e.sent, e.next = 18, O(c, t, T);
                                    case 18:
                                        e.next = 21;
                                        break;
                                    case 20:
                                        j(i);
                                    case 21:
                                        e.next = 27;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t0 = e.catch(1), e.t0.message = "googleLoginWeb: ".concat(e.t0.message || e.t0.errMsg), (0, _.R)({
                                            err: e.t0,
                                            manual: !0
                                        });
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 23]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    H = function() {
                        var e;
                        if (!(null === (e = window.google) || void 0 === e ? void 0 : e.accounts) && B.current < 5) B.current += 1, setTimeout((function() {
                            H()
                        }), 50);
                        else try {
                            ! function() {
                                var e, t;
                                null === (e = window.google.accounts.id) || void 0 === e || e.initialize({
                                    client_id: i,
                                    callback: V
                                }), null === (t = window.google.accounts.id) || void 0 === t || t.renderButton(document.getElementById("buttonDiv"), {
                                    theme: "black",
                                    size: "large",
                                    width: "600px",
                                    height: "48px"
                                })
                            }()
                        } catch (n) {
                            var t = JSON.stringify(n, null, 2);
                            P && P({
                                timing: "buttonClickedWithResult",
                                isFailure: 1,
                                errorCode: n.code,
                                errorMsg: n.message || t,
                                btnType: "google"
                            })
                        }
                    };
                return (0, a.useEffect)((function() {
                    return Z(document, "script", "google-login", n, (function() {
                            H()
                        }), (function(e) {
                            console.log("err", e)
                        })),
                        function() {
                            C(document, "google-login")
                        }
                }), []), c().createElement(c().Fragment, null, c().createElement(S, {
                    handleCredentialResponse: V,
                    thirdPartyName: "Google"
                }), R ? c().createElement(s.Z, {
                    id: "gSignInWrapper",
                    "data-e2e": "btn-google-login"
                }, c().createElement(s.Z, {
                    id: "googleLoginBtn"
                }, R)) : c().createElement(s.Z, (0, r.Z)({
                    className: "sign-with",
                    width: "100%"
                }, M), c().createElement("div", {
                    id: "gSignInWrapper",
                    "data-e2e": "btn-google-login"
                }, c().createElement(s.Z, {
                    id: "googleLoginBtn",
                    sx: {
                        position: "relative",
                        overflow: "hidden",
                        mb: "sm"
                    }
                }, c().createElement(h.Z, {
                    sz: "large",
                    colorStyle: "flatpure",
                    sx: {
                        position: "relative",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "center",
                        color: "t.primary",
                        cursor: "pointer",
                        "&:hover:not(:disabled):not(:active):not(.inactive)": {
                            backgroundColor: z ? "button.secondaryBg" : "#474D57"
                        }
                    }
                }, c().createElement(m.Z, {
                    width: "16px",
                    height: "16px",
                    sx: {
                        position: "absolute",
                        left: ["sm"],
                        top: "50%",
                        transform: "translateY(-50%)"
                    },
                    src: "".concat((0, E.nR)("STATIC_HOST"), "/static/images/accounts/common/logogoogle.png")
                }), c().createElement(u.Z, {
                    justifyContent: "center",
                    sx: {
                        variant: ["text.subtitle1"]
                    }
                }, L("".concat(I, "-").concat(l), p))), c().createElement(s.Z, {
                    id: "buttonDiv",
                    sx: {
                        position: "absolute",
                        opacity: 1e-4,
                        top: 0,
                        left: 0,
                        transform: "scale(2)"
                    }
                }))), c().createElement(s.Z, {
                    ref: D
                })))
            };
            var I = n("1O7J");
            const P = function(e) {
                var t = e.clientId,
                    n = e.redirectUri,
                    r = e.scope,
                    o = e.jsSrc,
                    i = e.state,
                    l = e.nonce,
                    p = e.usePopup,
                    S = e.afterLogin,
                    T = e.thirdOperatorEnum,
                    P = e.type,
                    R = e.handleCallback,
                    M = e.thirdPartyTrackingFunc,
                    D = e.btnContent,
                    O = e.btnText,
                    z = e.defaultText,
                    A = c().useRef(null),
                    L = (0, k.Z)(),
                    N = (0, x.Fg)().isLight,
                    F = (0, d.$)(),
                    j = F.t,
                    B = F.i18n.language,
                    V = (0, I.Z)().enqueueNotification,
                    H = (0, g.m)({
                        staticHost: (0, E.nR)("RECAPTCHA_STATIC_HOST") || (0, E.nR)("STATIC_HOST"),
                        nodeRef: A,
                        bizId: "third_login",
                        lang: B,
                        googleReCaptchaKey: (0, E.nR)("GOOGLE_RECAPTCHA_KEY")
                    }).manMachineValidate,
                    U = (0, w.S)().popupForManMachineError,
                    G = c().useRef(null),
                    Y = (0, a.useCallback)((function() {
                        return G.current = new Promise((function(e, a) {
                            Z(document, "script", "apple-login", "".concat(o, "/en_US/appleid.auth.js"), (function() {
                                window.AppleID.auth.init({
                                    clientId: t,
                                    scope: r,
                                    redirectURI: n || "".concat(location.protocol, "//").concat(location.host).concat(location.pathname),
                                    state: i,
                                    nonce: l,
                                    usePopup: p
                                }), e(!0)
                            }), (function(e) {
                                V(JSON.stringify(e, void 0, 2), {
                                    variant: "error",
                                    anchorOrigin: {
                                        vertical: "top",
                                        horizontal: "right"
                                    }
                                }), console.log("load apple script fail"), a(new Error("load script fail"))
                            }))
                        })), G.current
                    }), []);
                (0, a.useEffect)((function() {
                    return Y(),
                        function() {
                            C(document, "apple-login")
                        }
                }), []);
                var W = function() {
                        var e = (0, f.Z)(v().mark((function e(t, r) {
                            var o, i, a, c;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return y.d.setItem("loginVerify", "apple"), M && M({
                                            timing: "thirdPartyCaptchaPageView",
                                            type: "apple",
                                            pageType: ""
                                        }), e.next = 5, H({
                                            bizType: "third_login",
                                            idToken: t
                                        });
                                    case 5:
                                        if (i = e.sent, a = i.success ? i.data.sessionId : "", y.d.setItem("sessionId", a), M && M({
                                                timing: "captchaSubmit",
                                                isFailure: i.success ? 0 : 1,
                                                errorCode: i.success || null === i || void 0 === i ? void 0 : i.code,
                                                errorMsg: i.success || null === i || void 0 === i ? void 0 : i.message,
                                                type: "apple",
                                                pageType: null === i || void 0 === i || null === (o = i.data) || void 0 === o ? void 0 : o.validateCodeType
                                            }), c = {}, !i.success) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.next = 13, (0, b.C2)({
                                            code: r,
                                            idToken: t,
                                            sessionId: a,
                                            thirdOperatorEnum: T,
                                            redirectUrl: n
                                        });
                                    case 13:
                                        return c = e.sent, e.next = 16, L(c, S, T);
                                    case 16:
                                        e.next = 19;
                                        break;
                                    case 18:
                                        U(i);
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    q = (0, a.useCallback)((0, f.Z)(v().mark((function e() {
                        var t, n, r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.prev = 1, e.next = 4, G.current;
                                case 4:
                                    e.next = 10;
                                    break;
                                case 6:
                                    return e.prev = 6, e.t0 = e.catch(1), e.next = 10, Y();
                                case 10:
                                    return e.next = 12, window.AppleID.auth.signIn();
                                case 12:
                                    if (t = e.sent, n = t.authorization.id_token, r = t.authorization.code, M && M({
                                            timing: "buttonClickedWithResult",
                                            isFailure: 0,
                                            btnType: "apple"
                                        }), !R) {
                                        e.next = 19;
                                        break
                                    }
                                    return R(t), e.abrupt("return");
                                case 19:
                                    return e.next = 21, W(n, r);
                                case 21:
                                    e.next = 29;
                                    break;
                                case 23:
                                    e.prev = 23, e.t1 = e.catch(0), e.t1.message = "appleLoginWeb: ".concat(e.t1.message || JSON.stringify(e.t1), " "), (0, _.R)({
                                        err: e.t1,
                                        manual: !0
                                    }), console.log("apple 3rd", e.t1), M && M({
                                        timing: "buttonClickedWithResult",
                                        isFailure: 1,
                                        errorCode: e.t1.code,
                                        errorMsg: e.t1.message || JSON.stringify(e.t1),
                                        btnType: "apple"
                                    });
                                case 29:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 23],
                            [1, 6]
                        ])
                    }))), []);
                return c().createElement(c().Fragment, null, D ? c().createElement(s.Z, {
                    id: "apple-login-btn",
                    onClick: q,
                    "data-e2e": "btn-apple-login"
                }, D) : c().createElement(s.Z, {
                    className: "sign-with",
                    width: "100%"
                }, c().createElement(h.Z, {
                    sz: "large",
                    colorStyle: "flatpure",
                    sx: {
                        position: "relative",
                        py: "10px",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover:not(:disabled):not(:active):not(.inactive)": {
                            backgroundColor: N ? "button.secondaryBg" : "#474D57"
                        }
                    },
                    id: "apple-login-btn",
                    onClick: q,
                    "data-e2e": "btn-apple-login"
                }, c().createElement(m.Z, {
                    width: "16px",
                    height: "16px",
                    sx: {
                        position: "absolute",
                        left: ["sm"],
                        top: "50%",
                        transform: "translateY(-50%)"
                    },
                    src: "".concat((0, E.nR)("STATIC_HOST"), "/static/images/accounts/common/").concat(N ? "ios-dark.svg" : "ios.png")
                }), c().createElement(u.Z, {
                    justifyContent: "center",
                    color: "t.primary",
                    sx: {
                        variant: ["text.subtitle1"]
                    }
                }, j("".concat(P, "-").concat(O), z))), c().createElement(s.Z, {
                    ref: A
                })))
            };
            var R = n("UUfl"),
                M = {
                    google: T,
                    apple: P
                };
            const D = function(e) {
                var t = e.THIRD_PARTY_LOGIN,
                    n = e.setSignInWithReady,
                    f = void 0 === n ? null : n,
                    p = (0, o.Z)(e, ["THIRD_PARTY_LOGIN", "setSignInWithReady"]),
                    v = (0, i.Z)((0, a.useState)(!0), 2),
                    h = v[0],
                    m = v[1],
                    g = (0, d.$)().t;
                return (0, a.useEffect)((function() {
                    m(!R.Rw), f && f(!0)
                }), []), c().createElement(c().Fragment, null, h && c().createElement(s.Z, {
                    justifyContent: "space-between"
                }, c().createElement(u.Z, {
                    my: "16px",
                    alignItems: "center",
                    justifyContent: "space-between"
                }, c().createElement(s.Z, {
                    sx: {
                        height: "1px",
                        flex: "1",
                        bg: "line"
                    }
                }), c().createElement(l.Z, {
                    sx: {
                        variant: "text.subtitle2",
                        mx: ["24px"]
                    },
                    color: "t.third"
                }, g("common-third-praty-line", "or")), c().createElement(s.Z, {
                    sx: {
                        height: "1px",
                        flex: "1",
                        bg: "line"
                    }
                })), c().createElement(u.Z, {
                    flexDirection: "column",
                    alignItems: "center"
                }, t.map((function(e) {
                    var t = e.type,
                        n = e.btnText,
                        i = (0, o.Z)(e, ["type", "btnText"]),
                        a = M[t];
                    return c().createElement(a, (0, r.Z)({
                        key: i.thirdOperatorEnum,
                        type: t
                    }, i, p, {
                        btnText: n
                    }))
                })))))
            }
        },
        Zfu8: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => L
            });
            var r = n("sViW"),
                o = n("BK7R"),
                i = n("q0wl"),
                a = n.n(i),
                c = n("DTvD"),
                s = n.n(c),
                u = n("WEt1"),
                l = n("nRuQ"),
                d = n("VAOc"),
                f = n("T8Gn"),
                p = n("XSVZ"),
                v = n("c1zs"),
                h = n("qyJY"),
                m = n("6/mx"),
                g = n("T9we"),
                b = n("IS67"),
                y = n("l3os"),
                w = n("2cdI"),
                x = n("ksK1"),
                _ = n("QdNb"),
                E = n("/pg0");
            const k = function() {
                var e = (0, x.Z)(),
                    t = (0, u.wS)().locale,
                    n = void 0 === t ? "en" : t,
                    o = (0, f.$)().t,
                    i = (0, c.useCallback)((0, r.Z)(a().mark((function t() {
                        var r;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, b.Dr)();
                                case 2:
                                    r = t.sent;
                                    try {
                                        r.data.canUnlock ? (0, w.Z)("/".concat(n, "/unlocking"), "_self", {
                                            external: !0
                                        }) : e.info({
                                            imgSrc: s().createElement(y.Z, {
                                                size: 80
                                            }),
                                            desc: o(r.data.message),
                                            okText: o("modal-iUnderstood")
                                        })
                                    } catch (i) {
                                        r.success || (0, g.PV)(r.message, {
                                            variant: "error",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            }
                                        })
                                    }
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), []);
                return function() {
                    e.confirm({
                        imgSrc: s().createElement(v.Z, {
                            size: 80
                        }),
                        modalTitle: o("accounts-login-safety-tip"),
                        desc: s().createElement(E.Z, {
                            color: "t.third"
                        }, s().createElement(_.c, {
                            ns: "accounts-ui",
                            t: o,
                            i18nKey: "accounts-login-accountDisable"
                        })),
                        onOk: i,
                        cancelText: o("accounts-common-cancel"),
                        okText: o("accounts-login-unlock"),
                        sx: {
                            width: ["343px", "360px", "360px"],
                            borderRadius: "8px"
                        },
                        cancelBtnProps: {
                            variant: "default",
                            colorStyle: "secondary"
                        }
                    })
                }
            };
            var Z = n("Idgt"),
                C = n("eVLX"),
                S = n("jP+i"),
                T = n("5F35"),
                I = n("0kS3"),
                P = n("/Dnx"),
                R = n("ESSE"),
                M = n("+g7R"),
                D = n("5iGD"),
                O = n("rBT2"),
                z = n("yG0M"),
                A = n("WRKX");
            const L = function() {
                var e = k(),
                    t = (0, S.Z)(),
                    n = (0, u.wS)().locale,
                    i = void 0 === n ? "en" : n,
                    c = (0, x.Z)(),
                    g = (0, f.$)().t,
                    b = (0, m.Q)(),
                    y = (0, u.Hb)().query,
                    w = (0, P.p)(),
                    _ = (0, A.Z)(),
                    E = (0, D.n)(),
                    L = (0, u.Hb)().query.return_to,
                    N = function() {
                        var n = (0, r.Z)(a().mark((function n(r, u, f) {
                            var m, x, k, S, P, D, A, N, F, j, B, V, H, U, G, Y, W, q, K, Q, $, J, X, ee, te, ne, re;
                            return a().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (k = r.success, S = r.data, P = r.code, D = r.message, A = r.messageDetail, F = (N = S || {}).currentDeviceId, j = N.disable, B = N.code, V = N.legacySecurityKey, H = N.email, U = N.result, G = N.securityKey, Y = N.newDeviceFLag, W = N.authStatus, q = N.registerToken, k ? (0, O.J9)({
                                                type: f
                                            }) : (0, O.OC)({
                                                type: f,
                                                error: P
                                            }), q && l.d.setItem("registerToken", q), "208049" !== P) {
                                            n.next = 7;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 7:
                                        if ("NEED_BINDING" !== U) {
                                            n.next = 10;
                                            break
                                        }
                                        return b.push("/".concat(i, "/social-login-bind-account?").concat((0, Z.$h)((0, o.Z)({
                                            socialEmail: S.email,
                                            thirdType: f
                                        }, y)))), n.abrupt("return");
                                    case 10:
                                        if ("NEED_REGISTER" !== U || "APPLE_REGISTER" !== f && "GOOGLE_REGISTER" !== f) {
                                            n.next = 14;
                                            break
                                        }
                                        return l.d.setItem("thirdOperatorEnum", f), b.push("/".concat(i, "/social-register?").concat((0, Z.$h)(y))), n.abrupt("return");
                                    case 14:
                                        if ("NEED_REGISTER" !== U || "APPLE_LOGIN" !== f && "GOOGLE_LOGIN" !== f) {
                                            n.next = 18;
                                            break
                                        }
                                        return l.d.setItem("thirdOperatorEnum", f), b.push("/".concat(i, "/social-login-bind-ways?").concat((0, Z.$h)((0, o.Z)({
                                            email: S.email,
                                            thirdType: f
                                        }, y)))), n.abrupt("return");
                                    case 18:
                                        if (!k) {
                                            n.next = 58;
                                            break
                                        }
                                        if ((0, z.v1)({
                                                thirdOperatorEnum: f
                                            }), !(j || G || Y || "NO_AUTH" === W)) {
                                            n.next = 27;
                                            break
                                        }
                                        return n.next = 24, (0, M.ZP)("temp", S, "login");
                                    case 24:
                                        if (n.sent) {
                                            n.next = 27;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 27:
                                        if (!j) {
                                            n.next = 30;
                                            break
                                        }
                                        return e(), n.abrupt("return");
                                    case 30:
                                        return n.next = 32, (0, M.ZP)("fin", S, "login");
                                    case 32:
                                        if (K = n.sent, (0, O.Wu)({
                                                type: f || ""
                                            }), K) {
                                            n.next = 36;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 36:
                                        return d.Q.writeCookieWithDomainLevel("logined", "y", 7), d.Q.writeCookieWithDomainLevel("isAccountsLoggedIn", "y", 7), d.Q.writeCookieWithDomainLevel("lang", i), d.Q.writeCookieWithDomainLevelV2("BNC-Location", S.bncLocation || "", 365, !0, "High"), h.VZ(H, F || ""), (0, C.$)(), n.next = 44, w();
                                    case 44:
                                        return n.next = 46, _(B);
                                    case 46:
                                        if (Q = n.sent, !u) {
                                            n.next = 53;
                                            break
                                        }
                                        return n.next = 50, u(r, {}, Q);
                                    case 50:
                                        if (!1 !== n.sent) {
                                            n.next = 53;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 53:
                                        if (!V) {
                                            n.next = 56;
                                            break
                                        }
                                        return (0, T.t)("".concat(t, "/").concat(i, "/my/security?userType=oldYubikey"), "login"), n.abrupt("return");
                                    case 56:
                                        return (0, T.t)(Q, "login"), n.abrupt("return");
                                    case 58:
                                        if ("001440" !== P) {
                                            n.next = 61;
                                            break
                                        }
                                        return c.info({
                                            imgSrc: "".concat((0, I.nR)("STATIC_HOST"), "/static/images/accounts/safety-tip.svg"),
                                            modalTitle: g("accounts-login-safety-tip"),
                                            desc: "".concat(g("accounts-login-safety-desc", {
                                                defaultValue: "We detected a login attempt to your account that seemed suspicious. Please change the password immediately to protect your property."
                                            }), "(").concat(P, ")"),
                                            onOk: function() {
                                                b.push("/".concat(i, "/user/reset-password?step=1&&type=email"))
                                            },
                                            okText: g("accounts-login-safety-btn-text")
                                        }), n.abrupt("return");
                                    case 61:
                                        if ("001452" !== P) {
                                            n.next = 64;
                                            break
                                        }
                                        return c.info({
                                            imgSrc: s().createElement(p.Z, {
                                                size: 80
                                            }),
                                            modalTitle: g("accounts-login-account-disabled"),
                                            desc: "".concat(D, "(").concat(P, ")"),
                                            okText: g("accounts-common-ok")
                                        }), n.abrupt("return");
                                    case 64:
                                        if ("006007" !== P && "600000007" !== P) {
                                            n.next = 68;
                                            break
                                        }
                                        return c.info({
                                            imgSrc: (null === ($ = R.Z[P]) || void 0 === $ ? void 0 : $.imgSrc) || "".concat((0, I.nR)("STATIC_HOST"), "/static/images/accounts/common/error.svg"),
                                            desc: "".concat(g((null === (J = R.Z[P]) || void 0 === J ? void 0 : J.desc) || "", {
                                                defaultValue: D
                                            }), "(").concat(P, ")"),
                                            okText: g("modal-iUnderstood"),
                                            onOk: function() {
                                                return b.push("/".concat(i, "/login?return_to=").concat(L || ""))
                                            }
                                        }), n.abrupt("return");
                                    case 68:
                                        if ("210013" !== P) {
                                            n.next = 71;
                                            break
                                        }
                                        return c.info({
                                            imgSrc: s().createElement(v.Z, {
                                                size: 80
                                            }),
                                            desc: "".concat(g("account-ui-socialLogin-apple-nogetemail", "We couldn\u2019t get the user info from your third party account, please register with your mobile phone number or email."), "(").concat(P, ")"),
                                            okText: g("modal-iUnderstood", {
                                                defaultValue: "I Understood"
                                            })
                                        }), n.abrupt("return");
                                    case 71:
                                        if (ee = (X = A || {}).type, te = X.title, ne = X.linkUrl, re = X.linkTitle, "dialog" !== ee) {
                                            n.next = 74;
                                            break
                                        }
                                        return n.abrupt("return", E({
                                            message: "".concat(D, "(").concat(P, ")"),
                                            linkUrl: ne,
                                            linkTitle: re,
                                            i18n: g,
                                            title: te
                                        }));
                                    case 74:
                                        c.info({
                                            imgSrc: (null === (m = R.Z[P]) || void 0 === m ? void 0 : m.imgSrc) || "".concat((0, I.nR)("STATIC_HOST"), "/static/images/accounts/common/error.svg"),
                                            desc: "".concat(g(null === (x = R.Z[P]) || void 0 === x ? void 0 : x.desc) || D, "(").concat(P, ")"),
                                            okText: g("modal-iUnderstood", {
                                                defaultValue: "I Understood"
                                            })
                                        });
                                    case 75:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t, r) {
                            return n.apply(this, arguments)
                        }
                    }();
                return N
            }
        },
        Iz9f: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => p,
                r: () => f
            });
            var r = n("M5j3"),
                o = n("BK7R"),
                i = n("QUKP"),
                a = n("gZfF"),
                c = n("DTvD"),
                s = n.n(c),
                u = n("2+hd"),
                l = n("iXtZ"),
                d = n("6/mx"),
                f = function(e) {
                    var t = e.href,
                        n = (0, a.Z)(e, ["href"]),
                        o = (0, d.$)();
                    return 0 !== (null === t || void 0 === t ? void 0 : t.indexOf("https")) && o(t) ? s().createElement(l.r, (0, r.Z)({
                        to: t
                    }, n)) : s().createElement("a", (0, r.Z)({
                        href: t
                    }, n))
                },
                p = function(e) {
                    var t = e.sx,
                        n = e.external,
                        c = e.onClick,
                        l = void 0 === c ? function() {} : c,
                        d = e.variant,
                        p = e.children,
                        v = (0, a.Z)(e, ["sx", "external", "onClick", "variant", "children"]);
                    return n ? s().createElement(u.Z, (0, r.Z)({
                        onMouseDown: function(e) {
                            e.preventDefault()
                        },
                        onClick: function() {
                            return l && l()
                        },
                        target: "_blank",
                        variant: d || "defaultLink",
                        sx: (0, o.Z)({
                            ":hover": {
                                textDecoration: "underline",
                                color: "primaryHover"
                            },
                            cursor: "pointer"
                        }, t)
                    }, v), p) : s().createElement(u.Z, (0, r.Z)({
                        onMouseDown: function(e) {
                            e.preventDefault()
                        },
                        variant: d || "defaultLink",
                        as: f
                    }, v, {
                        onClick: function() {
                            return l && l()
                        },
                        sx: (0, i.Z)((0, o.Z)({
                            cursor: "pointer"
                        }, t), {
                            ":hover": {
                                textDecoration: "underline",
                                color: "primaryHover"
                            }
                        })
                    }), p)
                }
        },
        "+ZLa": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("jYyJ");
            const c = function(e) {
                return i().createElement(a.Z, (0, r.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        nrP6: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("jYyJ");
            const c = function(e) {
                return i().createElement(a.Z, (0, r.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 88c22.091 0 40-17.909 40-40S70.091 8 48 8 8 25.909 8 48s17.909 40 40 40zM33 37.198l10.607 10.497L33 58.19l4.243 4.198 10.606-10.496 10.607 10.496 4.242-4.198-10.606-10.496 10.607-10.497L58.456 33 47.849 43.496 37.243 33 33 37.198z",
                    fill: "url(#general-error_svg__paint0)"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 19c-16.016 0-29 12.984-29 29s12.984 29 29 29 29-12.984 29-29-12.984-29-29-29zm-4.393 28.695L33 37.199 37.243 33l10.606 10.496L58.456 33l4.242 4.199-10.606 10.496L62.699 58.19l-4.243 4.198-10.607-10.496-10.606 10.496L33 58.191l10.607-10.496z",
                    fill: "url(#general-error_svg__paint1)"
                }), i().createElement("defs", null, i().createElement("linearGradient", {
                    id: "general-error_svg__paint0",
                    x1: 8,
                    y1: 48,
                    x2: 88,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#F84960",
                    stopOpacity: 0
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#F84960"
                })), i().createElement("linearGradient", {
                    id: "general-error_svg__paint1",
                    x1: 77,
                    y1: 48,
                    x2: 19,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#F84960"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#D9304E"
                }))))
            }
        },
        "r+9T": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("jYyJ");
            const c = function(e) {
                return i().createElement(a.Z, (0, r.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7 8v2H5v11h14V10h-2V8A5 5 0 007 8zm7.5 2V8a2.5 2.5 0 00-5 0v2h5zm-1 8v-5h-3v5h3z",
                    fill: "currentColor"
                }))
            }
        },
        XSVZ: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("jYyJ");
            const c = function(e) {
                return i().createElement(a.Z, (0, r.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M47.998 10c9.941 0 18 8.06 18 18 0 9.942-8.059 18.001-18 18.001s-18-8.06-18-18.001 8.059-18 18-18z",
                    fill: "#E6E8EA"
                }), i().createElement("path", {
                    d: "M36 54h-8c-8.837 0-16 7.163-16 16v14h24V54z",
                    fill: "url(#account-delete-light_svg__paint0_linear)"
                }), i().createElement("path", {
                    d: "M60 84h24V70c0-8.837-7.163-16-16-16h-8v30z",
                    fill: "url(#account-delete-light_svg__paint1_linear)"
                }), i().createElement("path", {
                    d: "M36 54v30h24V54L48 66 36 54z",
                    fill: "#76808F"
                }), i().createElement("path", {
                    d: "M72 48c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15z",
                    fill: "url(#account-delete-light_svg__paint2_linear)"
                }), i().createElement("path", {
                    d: "M81 61.5v3H63v-3h18z",
                    fill: "#76808F"
                }), i().createElement("defs", null, i().createElement("linearGradient", {
                    id: "account-delete-light_svg__paint0_linear",
                    x1: 48,
                    y1: 84,
                    x2: 48,
                    y2: 54,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#929AA5"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), i().createElement("linearGradient", {
                    id: "account-delete-light_svg__paint1_linear",
                    x1: 48,
                    y1: 84,
                    x2: 48,
                    y2: 54,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#929AA5"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), i().createElement("linearGradient", {
                    id: "account-delete-light_svg__paint2_linear",
                    x1: 57,
                    y1: 63,
                    x2: 87,
                    y2: 63,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#F0B90B"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            }
        },
        Vboq: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("jYyJ");
            const c = function(e) {
                return i().createElement(a.Z, (0, r.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M18 8l4 4 4-4-4-4-4 4z",
                    fill: "url(#general-success_svg__paint0_linear_22059_28209)"
                }), i().createElement("path", {
                    d: "M85 76l3 3 3-3-3-3-3 3z",
                    fill: "url(#general-success_svg__paint1_linear_22059_28209)"
                }), i().createElement("path", {
                    d: "M86 20l2 2 2-2-2-2-2 2z",
                    fill: "url(#general-success_svg__paint2_linear_22059_28209)"
                }), i().createElement("path", {
                    d: "M0 47l3 3 3-3-3-3-3 3z",
                    fill: "url(#general-success_svg__paint3_linear_22059_28209)"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 88c22.091 0 40-17.909 40-40S70.091 8 48 8 8 25.909 8 48s17.909 40 40 40zM31 48.335L43.475 61 64 40.241 59.812 36 43.475 52.547l-8.317-8.423L31 48.335z",
                    fill: "url(#general-success_svg__paint4_linear_22059_28209)"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 19c16.016 0 29 12.984 29 29S64.016 77 48 77 19 64.016 19 48s12.984-29 29-29zM31 48.335L43.475 61 64 40.241 59.812 36 43.475 52.547l-8.317-8.423L31 48.335z",
                    fill: "url(#general-success_svg__paint5_linear_22059_28209)"
                }), i().createElement("defs", null, i().createElement("linearGradient", {
                    id: "general-success_svg__paint0_linear_22059_28209",
                    x1: 22,
                    y1: 12,
                    x2: 22,
                    y2: 4,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#02C076"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), i().createElement("linearGradient", {
                    id: "general-success_svg__paint1_linear_22059_28209",
                    x1: 88,
                    y1: 79,
                    x2: 88,
                    y2: 73,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#02C076"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), i().createElement("linearGradient", {
                    id: "general-success_svg__paint2_linear_22059_28209",
                    x1: 88,
                    y1: 22,
                    x2: 88,
                    y2: 18,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#02C076"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), i().createElement("linearGradient", {
                    id: "general-success_svg__paint3_linear_22059_28209",
                    x1: 3,
                    y1: 50,
                    x2: 3,
                    y2: 44,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#02C076"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), i().createElement("linearGradient", {
                    id: "general-success_svg__paint4_linear_22059_28209",
                    x1: 8,
                    y1: 48,
                    x2: 88,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#28D294",
                    stopOpacity: 0
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), i().createElement("linearGradient", {
                    id: "general-success_svg__paint5_linear_22059_28209",
                    x1: 48,
                    y1: 77,
                    x2: 48,
                    y2: 19,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#02C076"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                }))))
            }
        },
        kQr8: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("jYyJ");
            const c = function(e) {
                return i().createElement(a.Z, (0, r.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M46.46 2.5l.08 2.5h2.41V2.5c-.79-.03-1.65-.03-2.49 0zm5.6.16l-.22 2.49c.79.07 1.6.16 2.39.28L54.59 3c-.84-.17-1.69-.27-2.53-.34zm-8.65 0c-.84.08-1.69.19-2.53.32l.39 2.47c.79-.12 1.59-.23 2.39-.31l-.25-2.48zm14.19.84l-.53 2.44c.78.17 1.57.36 2.34.57l.66-2.41c-.81-.22-1.65-.42-2.47-.6zm-19.72.11c-.82.19-1.65.4-2.46.64l.69 2.4c.77-.22 1.55-.43 2.33-.6l-.56-2.44zM63 5l-.83 2.36c.76.26 1.51.55 2.25.85l1-2.3C64.59 5.6 63.78 5.29 63 5zm-30.48.17c-.79.29-1.58.6-2.37.94l1 2.29c.74-.31 1.49-.61 2.24-.88l-.87-2.35zm35.64 2L67 9.43c.72.35 1.43.73 2.13 1.13l1.23-2.18c-.69-.38-1.45-.82-2.21-1.19l.01-.02zm-40.77.23c-.75.39-1.5.8-2.24 1.22l1.25 2.18c.69-.4 1.4-.79 2.11-1.15L27.39 7.4zM73 10l-1.38 2.09c.67.44 1.33.9 2 1.38l1.49-2c-.69-.53-1.4-1.03-2.11-1.47zm-50.45.29c-.7.47-1.4 1-2.07 1.48l1.51 2c.64-.48 1.3-.95 2-1.4l-1.44-2.08zm54.93 3.07l-1.62 1.91c.61.51 1.21 1.05 1.79 1.6L79.38 15c-.61-.54-1.25-1.11-1.89-1.66l-.01.02zm-59.37.34c-.64.55-1.27 1.13-1.88 1.72L18 17.2c.57-.56 1.17-1.11 1.77-1.63l-1.66-1.87zm63.4 3.55l-1.84 1.69c.54.59 1.07 1.2 1.57 1.82l1.94-1.59a27.84 27.84 0 00-1.66-1.94l-.01.02zm-67.39.38c-.57.63-1.12 1.28-1.65 1.94l1.95 1.56c.5-.62 1-1.24 1.56-1.83l-1.86-1.67zm70.91 4L83 23c.46.65.91 1.32 1.34 2l2.11-1.34C86 23 85.53 22.27 85 21.58l.03.05zM10.65 22c-.48.69-1 1.41-1.4 2.13l2.13 1.31c.42-.68.87-1.36 1.32-2L10.65 22zM88 26.33l-2.2 1.19c.38.7.75 1.42 1.09 2.15l2.26-1.07c-.35-.76-.74-1.53-1.15-2.27zm-80.27.45c-.4.75-.78 1.52-1.13 2.29l2.28 1c.33-.73.69-1.46 1.06-2.16l-2.21-1.13zm82.63 4.63l-2.36.91c.29.74.57 1.5.82 2.26l2.37-.78c-.19-.8-.51-1.61-.82-2.39h-.01zm-84.93.48c-.3.79-.59 1.6-.84 2.41l2.39.75c.24-.76.5-1.53.78-2.28l-2.33-.88zm86.65 4.84l-2.43.62c.2.77.38 1.56.53 2.35l2.46-.48c-.16-.83-.35-1.67-.56-2.49zm-88.31.51c-.2.83-.37 1.67-.53 2.5l2.46.45c.15-.79.32-1.58.5-2.36l-2.43-.59zm89.35 5l-2.48.32c.1.79.18 1.6.24 2.39l2.49-.17c-.05-.85-.13-1.71-.25-2.54zm-90.32.53c-.1.84-.17 1.69-.22 2.54l2.49.14c.05-.8.12-1.6.21-2.39l-2.48-.29zM91 47.83V48c0 .8 0 1.61-.07 2.41l2.5.13c0-.84.07-1.69.07-2.55v-.13l-2.5-.03zm-86 .5H2.5c0 .85 0 1.71.09 2.55l2.5-.16c-.04-.78-.09-1.58-.09-2.39zm85.66 4.92c-.1.8-.22 1.6-.36 2.39l2.46.44c.15-.83.28-1.68.38-2.52l-2.48-.31zm-85.29.36l-2.48.33c.11.84.24 1.68.4 2.51L5.76 56c-.15-.79-.28-1.59-.39-2.39zm84.33 4.85c-.19.77-.41 1.55-.65 2.32l2.39.74c.25-.81.48-1.63.69-2.45l-2.43-.61zm-83.31.35L4 59.44c.21.81.45 1.64.71 2.44l2.38-.76c-.28-.76-.5-1.54-.7-2.31zm81.71 4.7c-.29.74-.6 1.49-.93 2.22l2.28 1c.34-.78.68-1.57 1-2.35l-2.35-.87zM8 63.84l-2.32.92c.31.78.65 1.57 1 2.33L9 66c-.36-.68-.68-1.43-1-2.16zm77.86 4.48c-.38.7-.78 1.4-1.2 2.09l2.14 1.3c.44-.73.86-1.47 1.26-2.21l-2.2-1.18zm-75.61.3l-2.19 1.2c.4.74.83 1.48 1.28 2.19l2.12-1.32c-.39-.69-.8-1.37-1.18-2.07h-.03zm72.83 4.2c-.46.65-1 1.3-1.45 1.93l2 1.55c.53-.66 1-1.35 1.53-2l-2.08-1.48zm-70 .27l-2 1.46c.49.69 1 1.37 1.54 2L14.56 75c-.51-.62-1-1.26-1.46-1.91h-.02zM79.79 77c-.45.5-.92 1-1.39 1.47l-.27.27 1.75 1.78.28-.28c.51-.51 1-1 1.49-1.56L79.79 77zm-63.34.24l-1.84 1.69c.57.62 1.17 1.24 1.78 1.83l1.74-1.8-1.68-1.77v.05zM76 80.64c-.61.52-1.24 1-1.87 1.51l1.52 2c.67-.52 1.34-1.06 2-1.61L76 80.64zm-55.73.21l-1.62 1.91c.65.54 1.31 1.08 2 1.59l1.51-2c-.65-.48-1.28-.99-1.89-1.5zm51.51 3c-.67.44-1.35.87-2 1.28L71 87.26c.73-.43 1.46-.88 2.16-1.35l-1.38-2.06zM24.51 84l-1.37 2.09c.71.46 1.44.91 2.17 1.34l1.25-2.17c-.69-.38-1.38-.8-2.05-1.26zm42.69 2.49c-.71.35-1.45.7-2.18 1l1 2.3c.78-.34 1.55-.7 2.31-1.08l-1.13-2.22zm-38.09.15L28 88.89c.76.37 1.54.73 2.32 1.06l1-2.31c-.75-.31-1.49-.64-2.21-1zm33.22 1.92c-.75.27-1.52.51-2.29.74l.71 2.4c.8-.24 1.62-.5 2.42-.79l-.84-2.35zM34 88.68L33.18 91c.81.28 1.62.53 2.43.76l.69-2.4c-.77-.18-1.54-.42-2.3-.68zM57.25 90c-.78.18-1.58.33-2.36.45l.39 2.47c.84-.13 1.68-.29 2.51-.48L57.25 90zm-18.15.08l-.52 2.45c.83.17 1.67.32 2.51.45l.37-2.47c-.78-.11-1.58-.25-2.36-.43zm12.9.75c-.79.07-1.6.13-2.4.16l.1 2.49c.84 0 1.7-.08 2.54-.16L52 90.83zm-7.69 0l-.21 2.49c.84.07 1.7.12 2.54.15l.07-2.5c-.77.03-1.58-.04-2.38-.11l-.02-.03z",
                    fill: "url(#Group-1_svg__paint0_linear)"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.98 24.94C37.71 12.25 58.31 12.28 71 25c6.09 6.1 9.51 14.38 9.5 23 0 8.64-3.44 16.92-9.56 23.02-12.73 12.69-33.33 12.67-46.02-.06-12.69-12.73-12.67-33.33.06-46.02zm24.52 5.3h-3v27.5h3v-27.5zm0 32.5h-3v3h3v-3z",
                    fill: "url(#Group-1_svg__paint1_linear)"
                }), i().createElement("defs", null, i().createElement("linearGradient", {
                    id: "Group-1_svg__paint0_linear",
                    x1: 15.821,
                    y1: 80.199,
                    x2: 80.205,
                    y2: 15.825,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#F0B90B"
                }), i().createElement("stop", {
                    offset: .28,
                    stopColor: "#F1BC0F"
                }), i().createElement("stop", {
                    offset: .569,
                    stopColor: "#F4C41C"
                }), i().createElement("stop", {
                    offset: .862,
                    stopColor: "#F8D230"
                }), i().createElement("stop", {
                    offset: .993,
                    stopColor: "#FBDA3C"
                })), i().createElement("linearGradient", {
                    id: "Group-1_svg__paint1_linear",
                    x1: 24.951,
                    y1: 70.988,
                    x2: 70.921,
                    y2: 25.017,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#F0B90B"
                }), i().createElement("stop", {
                    offset: .28,
                    stopColor: "#F1BC0F"
                }), i().createElement("stop", {
                    offset: .569,
                    stopColor: "#F4C41C"
                }), i().createElement("stop", {
                    offset: .862,
                    stopColor: "#F8D230"
                }), i().createElement("stop", {
                    offset: .993,
                    stopColor: "#FBDA3C"
                }))))
            }
        },
        D1Mq: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("jYyJ");
            const c = function(e) {
                return i().createElement(a.Z, (0, r.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 144 144",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M91.725 28.518l-2.12 1.325 14.063 22.506 2.12-1.325-14.063-22.506zM57.25 73.59l-2.12 1.33 1.32 2.12 2.12-1.33-1.32-2.12zM54.33 68.93l-2.12 1.32 1.33 2.12 2.12-1.32-1.33-2.12zM51.42 64.26l-2.12 1.33 1.32 2.12 2.12-1.33-1.32-2.12zM48.5 59.6l-2.12 1.32 1.33 2.12 2.12-1.32-1.33-2.12z",
                    fill: "currentColor"
                }), i().createElement("path", {
                    d: "M60.16 78.26l-2.12 1.32 1 1.59-14.7 9.19 1.32 2.12 6.82-4.26 21.3 20.65-10.49 6.56-23.15-22.44-5.97 3.72-1.67-2.68-11.56-18.49-1.67-2.68 24.86-15.54.66 1.06 2.12-1.32-.86-1.38 18.07-35.47 8.78-5.48 36.5 58.42c1.08.07 2.16.2 3.21.41L73.69 11.28l-11.48 7.18L43.8 54.58 15.82 72.06l3 4.8-7.65 4.78 11.56 18.5 7.65-4.78 3 4.8 6.42-4.02 23.15 22.44 14.86-9.28-23.15-22.44 6.46-4.04h24.79c.41-.48.85-.95 1.3-1.4.38-.38.77-.75 1.17-1.1H61.45l-1.29-2.06zM23.53 96.69l-8.91-14.26 5.52-3.45 8.91 14.26-5.52 3.45z",
                    fill: "currentColor"
                }), i().createElement("path", {
                    d: "M102.83 126.66c-4.95-.88-9.68-3.24-13.5-7.06a25.38 25.38 0 01-5.67-8.61h10.77c1.42 7.4 4.49 13.14 8.4 15.67zm-9.57-46.34c-1.1.73-2.17 1.56-3.17 2.5-.26.23-.51.47-.76.72a25.38 25.38 0 00-5.67 8.61h10.77c1.42-7.42 4.5-13.16 8.42-15.68-3.37.6-6.64 1.89-9.59 3.85zm3.24 11.83h9.86V77.17c-4.38.79-8.17 6.83-9.86 14.98zm-.36 2c-.38 2.35-.58 4.85-.58 7.42 0 2.57.2 5.07.58 7.42h10.22V94.15H96.14zm.36 16.84c1.69 8.15 5.48 14.19 9.86 14.98v-14.98H96.5zm11.86 0v14.98c4.38-.79 8.17-6.83 9.86-14.98h-9.86zm0-33.82v14.98h9.86c-1.69-8.15-5.48-14.19-9.86-14.98zm10.22 16.98h-10.22v14.84h10.22c.38-2.35.58-4.85.58-7.42 0-2.57-.2-5.07-.58-7.42zm1.71 16.84c-1.42 7.4-4.49 13.14-8.4 15.67a25.34 25.34 0 0013.5-7.06 25.38 25.38 0 005.67-8.61h-10.77zm5.1-27.45a25.34 25.34 0 00-13.5-7.06c3.91 2.53 6.98 8.27 8.4 15.67h10.77a25.38 25.38 0 00-5.67-8.61zm-31.83 18.03c0 2.59.18 5.08.53 7.42H82.96a25.687 25.687 0 010-14.84h11.13c-.35 2.34-.53 4.83-.53 7.42zm37.87 7.42h-10.8c.35-2.34.53-4.83.53-7.42s-.18-5.08-.53-7.42h11.13a25.52 25.52 0 010 14.84h-.33zM83.28 94.15h-.32.32zm48.48 14.84h-.33.33z",
                    fill: "url(#information-global-colour-b144_svg__paint0_linear)"
                }), i().createElement("defs", null, i().createElement("linearGradient", {
                    id: "information-global-colour-b144_svg__paint0_linear",
                    x1: 89.33,
                    y1: 119.6,
                    x2: 125.39,
                    y2: 83.54,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#F0B90B"
                }), i().createElement("stop", {
                    offset: .28,
                    stopColor: "#F1BC0F"
                }), i().createElement("stop", {
                    offset: .569,
                    stopColor: "#F4C41C"
                }), i().createElement("stop", {
                    offset: .862,
                    stopColor: "#F8D230"
                }), i().createElement("stop", {
                    offset: .993,
                    stopColor: "#FBDA3C"
                }))))
            }
        },
        Dn5G: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("jYyJ");
            const c = function(e) {
                return i().createElement(a.Z, (0, r.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M19.003 6.42l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59 5.59-5.59z",
                    fill: "currentColor"
                }))
            }
        },
        l3os: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("jYyJ");
            const c = function(e) {
                return i().createElement(a.Z, (0, r.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), i().createElement("g", {
                    clipPath: "url(#warning-filled-b96_svg__clip0)"
                }, i().createElement("path", {
                    d: "M46.46 2.5l.08 2.5h2.41V2.5c-.79-.03-1.65-.03-2.49 0zm5.6.16l-.22 2.49c.79.07 1.6.16 2.39.28L54.59 3c-.84-.17-1.69-.27-2.53-.34zm-8.65 0c-.84.08-1.69.19-2.53.32l.39 2.47c.79-.12 1.59-.23 2.39-.31l-.25-2.48zm14.19.84l-.53 2.44c.78.17 1.57.36 2.34.57l.66-2.41c-.81-.22-1.65-.42-2.47-.6zm-19.72.11c-.82.19-1.65.4-2.46.64l.69 2.4c.77-.22 1.55-.43 2.33-.6l-.56-2.44zM63 5l-.83 2.36c.76.26 1.51.55 2.25.85l1-2.3C64.59 5.6 63.78 5.29 63 5zm-30.48.17c-.79.29-1.58.6-2.37.94l1 2.29c.74-.31 1.49-.61 2.24-.88l-.87-2.35zm35.64 2L67 9.43c.72.35 1.43.73 2.13 1.13l1.23-2.18c-.69-.38-1.45-.82-2.21-1.19l.01-.02zm-40.77.23c-.75.39-1.5.8-2.24 1.22l1.25 2.18c.69-.4 1.4-.79 2.11-1.15L27.39 7.4zM73 10l-1.38 2.09c.67.44 1.33.9 2 1.38l1.49-2c-.69-.53-1.4-1.03-2.11-1.47zm-50.45.29c-.7.47-1.4 1-2.07 1.48l1.51 2c.64-.48 1.3-.95 2-1.4l-1.44-2.08zm54.93 3.07l-1.62 1.91c.61.51 1.21 1.05 1.79 1.6L79.38 15c-.61-.54-1.25-1.11-1.89-1.66l-.01.02zm-59.37.34c-.64.55-1.27 1.13-1.88 1.72L18 17.2c.57-.56 1.17-1.11 1.77-1.63l-1.66-1.87zm63.4 3.55l-1.84 1.69c.54.59 1.07 1.2 1.57 1.82l1.94-1.59a27.84 27.84 0 00-1.66-1.94l-.01.02zm-67.39.38c-.57.63-1.12 1.28-1.65 1.94l1.95 1.56c.5-.62 1-1.24 1.56-1.83l-1.86-1.67zm70.91 4L83 23c.46.65.91 1.32 1.34 2l2.11-1.34C86 23 85.53 22.27 85 21.58l.03.05zM10.65 22c-.48.69-1 1.41-1.4 2.13l2.13 1.31c.42-.68.87-1.36 1.32-2L10.65 22zM88 26.33l-2.2 1.19c.38.7.75 1.42 1.09 2.15l2.26-1.07c-.35-.76-.74-1.53-1.15-2.27zm-80.27.45c-.4.75-.78 1.52-1.13 2.29l2.28 1c.33-.73.69-1.46 1.06-2.16l-2.21-1.13zm82.63 4.63l-2.36.91c.29.74.57 1.5.82 2.26l2.37-.78c-.19-.8-.51-1.61-.82-2.39h-.01zm-84.93.48c-.3.79-.59 1.6-.84 2.41l2.39.75c.24-.76.5-1.53.78-2.28l-2.33-.88zm86.65 4.84l-2.43.62c.2.77.38 1.56.53 2.35l2.46-.48c-.16-.83-.35-1.67-.56-2.49zm-88.31.51c-.2.83-.37 1.67-.53 2.5l2.46.45c.15-.79.32-1.58.5-2.36l-2.43-.59zm89.35 5l-2.48.32c.1.79.18 1.6.24 2.39l2.49-.17c-.05-.85-.13-1.71-.25-2.54zm-90.32.53c-.1.84-.17 1.69-.22 2.54l2.49.14c.05-.8.12-1.6.21-2.39l-2.48-.29zM91 47.83V48c0 .8 0 1.61-.07 2.41l2.5.13c0-.84.07-1.69.07-2.55v-.13l-2.5-.03zm-86 .5H2.5c0 .85 0 1.71.09 2.55l2.5-.16c-.04-.78-.09-1.58-.09-2.39zm85.66 4.92c-.1.8-.22 1.6-.36 2.39l2.46.44c.15-.83.28-1.68.38-2.52l-2.48-.31zm-85.29.36l-2.48.33c.11.84.24 1.68.4 2.51L5.76 56c-.15-.79-.28-1.59-.39-2.39zm84.33 4.85c-.19.77-.41 1.55-.65 2.32l2.39.74c.25-.81.48-1.63.69-2.45l-2.43-.61zm-83.31.35L4 59.44c.21.81.45 1.64.71 2.44l2.38-.76c-.28-.76-.5-1.54-.7-2.31zm81.71 4.7c-.29.74-.6 1.49-.93 2.22l2.28 1c.34-.78.68-1.57 1-2.35l-2.35-.87zM8 63.84l-2.32.92c.31.78.65 1.57 1 2.33L9 66c-.36-.68-.68-1.43-1-2.16zm77.86 4.48c-.38.7-.78 1.4-1.2 2.09l2.14 1.3c.44-.73.86-1.47 1.26-2.21l-2.2-1.18zm-75.61.3l-2.19 1.2c.4.74.83 1.48 1.28 2.19l2.12-1.32c-.39-.69-.8-1.37-1.18-2.07h-.03zm72.83 4.2c-.46.65-1 1.3-1.45 1.93l2 1.55c.53-.66 1-1.35 1.53-2l-2.08-1.48zm-70 .27l-2 1.46c.49.69 1 1.37 1.54 2L14.56 75c-.51-.62-1-1.26-1.46-1.91h-.02zM79.79 77c-.45.5-.92 1-1.39 1.47l-.27.27 1.75 1.78.28-.28c.51-.51 1-1 1.49-1.56L79.79 77zm-63.34.24l-1.84 1.69c.57.62 1.17 1.24 1.78 1.83l1.74-1.8-1.68-1.77v.05zM76 80.64c-.61.52-1.24 1-1.87 1.51l1.52 2c.67-.52 1.34-1.06 2-1.61L76 80.64zm-55.73.21l-1.62 1.91c.65.54 1.31 1.08 2 1.59l1.51-2c-.65-.48-1.28-.99-1.89-1.5zm51.51 3c-.67.44-1.35.87-2 1.28L71 87.26c.73-.43 1.46-.88 2.16-1.35l-1.38-2.06zM24.51 84l-1.37 2.09c.71.46 1.44.91 2.17 1.34l1.25-2.17c-.69-.38-1.38-.8-2.05-1.26zm42.69 2.49c-.71.35-1.45.7-2.18 1l1 2.3c.78-.34 1.55-.7 2.31-1.08l-1.13-2.22zm-38.09.15L28 88.89c.76.37 1.54.73 2.32 1.06l1-2.31c-.75-.31-1.49-.64-2.21-1zm33.22 1.92c-.75.27-1.52.51-2.29.74l.71 2.4c.8-.24 1.62-.5 2.42-.79l-.84-2.35zM34 88.68L33.18 91c.81.28 1.62.53 2.43.76l.69-2.4c-.77-.18-1.54-.42-2.3-.68zM57.25 90c-.78.18-1.58.33-2.36.45l.39 2.47c.84-.13 1.68-.29 2.51-.48L57.25 90zm-18.15.08l-.52 2.45c.83.17 1.67.32 2.51.45l.37-2.47c-.78-.11-1.58-.25-2.36-.43zm12.9.75c-.79.07-1.6.13-2.4.16l.1 2.49c.84 0 1.7-.08 2.54-.16L52 90.83zm-7.69 0l-.21 2.49c.84.07 1.7.12 2.54.15l.07-2.5c-.77.03-1.58-.04-2.38-.11l-.02-.03z",
                    fill: "url(#warning-filled-b96_svg__paint0_linear)"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.98 24.94C37.71 12.25 58.31 12.28 71 25c6.09 6.1 9.51 14.38 9.5 23 0 8.64-3.44 16.92-9.56 23.02-12.73 12.69-33.33 12.67-46.02-.06-12.69-12.73-12.67-33.33.06-46.02zm24.52 5.3h-3v27.5h3v-27.5zm0 32.5h-3v3h3v-3z",
                    fill: "url(#warning-filled-b96_svg__paint1_linear)"
                })), i().createElement("defs", null, i().createElement("linearGradient", {
                    id: "warning-filled-b96_svg__paint0_linear",
                    x1: 15.821,
                    y1: 80.199,
                    x2: 80.205,
                    y2: 15.825,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#F0B90B"
                }), i().createElement("stop", {
                    offset: .28,
                    stopColor: "#F1BC0F"
                }), i().createElement("stop", {
                    offset: .569,
                    stopColor: "#F4C41C"
                }), i().createElement("stop", {
                    offset: .862,
                    stopColor: "#F8D230"
                }), i().createElement("stop", {
                    offset: .993,
                    stopColor: "#FBDA3C"
                })), i().createElement("linearGradient", {
                    id: "warning-filled-b96_svg__paint1_linear",
                    x1: 24.951,
                    y1: 70.988,
                    x2: 70.921,
                    y2: 25.017,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#F0B90B"
                }), i().createElement("stop", {
                    offset: .28,
                    stopColor: "#F1BC0F"
                }), i().createElement("stop", {
                    offset: .569,
                    stopColor: "#F4C41C"
                }), i().createElement("stop", {
                    offset: .862,
                    stopColor: "#F8D230"
                }), i().createElement("stop", {
                    offset: .993,
                    stopColor: "#FBDA3C"
                })), i().createElement("clipPath", {
                    id: "warning-filled-b96_svg__clip0"
                }, i().createElement("path", {
                    fill: "#fff",
                    d: "M0 0h96v96H0z"
                }))))
            }
        },
        gQYd: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n("M5j3"),
                o = n("gZfF"),
                i = n("DTvD"),
                a = n.n(i),
                c = n("DEOq"),
                s = (0, i.forwardRef)((function(e, t) {
                    var n = e.variant,
                        i = void 0 === n ? "default" : n,
                        s = (e.styling, e.children),
                        u = (0, o.Z)(e, ["variant", "styling", "children"]);
                    return a().createElement(c.Z, (0, r.Z)({
                        ref: t,
                        tx: "mediaBox",
                        variant: i
                    }, u), s)
                }));
            s.displayName = "MediaBox";
            const u = s
        },
        xmrz: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n("M5j3"),
                o = n("gZfF"),
                i = n("DTvD"),
                a = n.n(i),
                c = n("xXd1"),
                s = n("DEOq"),
                u = n("VlR2"),
                l = n("+ZLa"),
                d = function(e) {
                    return a().createElement(c.Z, (0, r.Z)({
                        flexDirection: "column",
                        width: "100%",
                        alignItems: "center"
                    }, e))
                },
                f = function(e) {
                    var t = e.title,
                        n = e.href,
                        i = e.titleRight,
                        u = e.wrapBox,
                        d = void 0 === u ? {} : u,
                        f = (0, o.Z)(e, ["title", "href", "titleRight", "wrapBox"]);
                    return a().createElement(c.Z, (0, r.Z)({
                        maxWidth: 1280,
                        width: "100%",
                        px: ["sm", "md", "xp"],
                        height: ["56px", "80px"]
                    }, d), a().createElement(c.Z, (0, r.Z)({
                        as: "a",
                        alignItems: "center",
                        color: "t.third",
                        href: n
                    }, f, {
                        sx: {
                            variant: ["text.subtitle1", "text.headline6"],
                            "&:hover": {
                                color: "t.primary"
                            }
                        }
                    }), a().createElement(l.Z, {
                        mr: "xs",
                        size: 24
                    }), t), a().createElement(s.Z, {
                        flex: 1
                    }), i)
                },
                p = function(e) {
                    var t = e.title,
                        n = e.titleRight,
                        r = e.subtitle,
                        i = (0, o.Z)(e, ["title", "titleRight", "subtitle"]);
                    return a().createElement(c.Z, {
                        maxWidth: 1200,
                        width: "100%",
                        px: ["sm", "md", 0],
                        alignItems: "center",
                        py: ["sm", "md"]
                    }, a().createElement(s.Z, null, a().createElement(u.Z, {
                        variant: i.variant || ["text.headline4", "text.headline2"]
                    }, t), r && a().createElement(s.Z, {
                        mt: ["xs", "sm"]
                    }, r)), n)
                },
                v = function(e) {
                    var t = e.title,
                        n = e.titleRight,
                        i = e.subtitle,
                        l = e.backBar,
                        d = e.titleVariant,
                        p = e.titleAreaMB,
                        v = e.noTopSpace,
                        h = (0, o.Z)(e, ["title", "titleRight", "subtitle", "backBar", "titleVariant", "titleAreaMB", "noTopSpace"]),
                        m = a().useMemo((function() {
                            return a().createElement(s.Z, null, a().createElement(u.Z, {
                                sx: {
                                    variant: d || ["text.headline4", "text.headline3"]
                                }
                            }, t), i && a().createElement(s.Z, {
                                mt: ["xs"]
                            }, "string" === typeof i ? a().createElement(u.Z, {
                                color: "t.secondary",
                                variant: ["text.body1", "text.body2"]
                            }, i) : i))
                        }), [t, i]);
                    return a().createElement(a().Fragment, null, l ? a().createElement(f, (0, r.Z)({}, l)) : !v && a().createElement(s.Z, {
                        mt: ["md", "xp"]
                    }), a().createElement(s.Z, {
                        mb: p || ["sm", "md"],
                        width: "100%",
                        sx: {
                            borderRadius: "40px 40px 0 0"
                        },
                        className: "title-area"
                    }, a().createElement(c.Z, (0, r.Z)({
                        __css: {
                            mx: "auto",
                            maxWidth: 1200,
                            width: "100%",
                            px: ["sm", "md", 0],
                            alignItems: "center",
                            py: ["sm", "md"],
                            justifyContent: "space-between"
                        }
                    }, h), m, n)))
                };
            const h = function(e) {
                var t = e.pageLevel,
                    n = e.wrapBox,
                    i = (0, o.Z)(e, ["pageLevel", "wrapBox"]);
                return a().createElement(d, (0, r.Z)({}, n), 1 === t ? a().createElement(p, (0, r.Z)({}, i)) : a().createElement(v, (0, r.Z)({}, i)))
            }
        },
        mMNU: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n("7OjC").normalize.clearStorage((function(e) {
                bn.clearStorage(e)
            }));
            t.default = r
        },
        xN1f: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n("7OjC"),
                o = r.normalize.getStorage((function(e) {
                    var t = e.success;
                    e.success = function(e) {
                        var n = function(e) {
                            return {
                                data: e.data
                            }
                        }(e);
                        t(n)
                    }, bn.getStorage(e)
                }));
            t.default = o
        },
        "11iP": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.clearStorage = t.removeStorage = t.setStorage = t.getStorage = void 0;
            var r = n("O3KZ"),
                o = r.__importDefault(n("xN1f"));
            t.getStorage = o.default;
            var i = r.__importDefault(n("8tGK"));
            t.setStorage = i.default;
            var a = r.__importDefault(n("0Luv"));
            t.removeStorage = a.default;
            var c = r.__importDefault(n("mMNU"));
            t.clearStorage = c.default
        },
        "0Luv": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n("7OjC").normalize.removeStorage((function(e) {
                bn.removeStorage(e)
            }));
            t.default = r
        },
        "8tGK": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n("7OjC").normalize.setStorage((function(e) {
                bn.setStorage(e)
            }));
            t.default = r
        },
        "7OjC": (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.normalize = void 0;
            var r = n("QKL0");
            t.normalize = {
                getStorage: r.normalizeApi,
                setStorage: r.normalizeApi,
                removeStorage: r.normalizeApi,
                clearStorage: r.normalizeApi
            }
        },
        xCRy: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n("7OjC").normalize.clearStorage((function(e) {
                var t = e.success,
                    n = e.fail;
                try {
                    window.localStorage.clear(), t()
                } catch (r) {
                    n(r)
                }
            }));
            t.default = r
        },
        txyB: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n("7OjC").normalize.getStorage((function(e) {
                var t = e.success,
                    n = e.fail;
                try {
                    if ("[object Object]" !== Object.prototype.toString.call(e)) throw new Error("the Function need a param of Object type");
                    if (!e.hasOwnProperty("key")) throw new Error('the first param of this Function must contain a property named "key"');
                    if ("string" !== typeof e.key) throw new Error('the first param of this Function must contain a property named "key" of string type');
                    var r = window.localStorage.getItem(e.key);
                    t({
                        data: r ? JSON.parse(r) : r
                    })
                } catch (o) {
                    n(o)
                }
            }));
            t.default = r
        },
        z3oO: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.clearStorage = t.removeStorage = t.setStorage = t.getStorage = void 0;
            var r = n("O3KZ"),
                o = r.__importDefault(n("txyB"));
            t.getStorage = o.default;
            var i = r.__importDefault(n("GM7z"));
            t.setStorage = i.default;
            var a = r.__importDefault(n("O2WK"));
            t.removeStorage = a.default;
            var c = r.__importDefault(n("xCRy"));
            t.clearStorage = c.default
        },
        O2WK: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n("7OjC").normalize.removeStorage((function(e) {
                var t = e.success,
                    n = e.fail;
                try {
                    if ("[object Object]" !== Object.prototype.toString.call(e)) throw new Error("the Function need a param of Object type");
                    if (!e.hasOwnProperty("key")) throw new Error('the first param of this Function must contain a property named "key"');
                    if ("string" !== typeof e.key) throw new Error('the first param of this Function must contain a property named "key" of string type');
                    window.localStorage.removeItem(e.key), t()
                } catch (r) {
                    n(r)
                }
            }));
            t.default = r
        },
        GM7z: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n("7OjC").normalize.setStorage((function(e) {
                var t = e.success,
                    n = e.fail;
                try {
                    if ("[object Object]" !== Object.prototype.toString.call(e)) throw new Error("the Function need a param of Object type");
                    if (!e.hasOwnProperty("key")) throw new Error('the first param of this Function must contain a property named "key"');
                    if ("string" !== typeof e.key) throw new Error('the first param of this Function must contain a property named "key" of string type');
                    if (!e.hasOwnProperty("data")) throw new Error('the first param of this Function must contain a property named "data"');
                    window.localStorage.setItem(e.key, JSON.stringify(e.data)), t()
                } catch (r) {
                    n(r)
                }
            }));
            t.default = r
        },
        zzYc: (e, t, n) => {
            "use strict";
            var r;
            r = n("weapp" === "{}".TARO_ENV || "bmp" === "{}".TARO_ENV ? "11iP" : "z3oO"), e.exports = r
        },
        Tqad: e => {
            e.exports = function(e, t, n) {
                return e === e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
            }
        },
        "4HwR": (e, t, n) => {
            var r = n("Tqad"),
                o = n("iR0W");
            e.exports = function(e, t, n) {
                return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = o(n)) === n ? n : 0), void 0 !== t && (t = (t = o(t)) === t ? t : 0), r(o(e), t, n)
            }
        },
        "5FUq": (e, t, n) => {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            function o() {
                return o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, o.apply(this, arguments)
            }

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(n, !0).forEach((function(t) {
                        m(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function l(e, t, n) {
                return t && u(e.prototype, t), n && u(e, n), e
            }

            function d(e, t) {
                return !t || "object" !== r(t) && "function" !== typeof t ? p(e) : t
            }

            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, f(e)
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
            }

            function h(e, t) {
                return h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var g = n("DTvD"),
                b = (n("aHWH"), n("COly")),
                y = n("LYg8");

            function w(e) {
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    r < 128 ? t += String.fromCharCode(r) : r < 2048 ? (t += String.fromCharCode(192 | r >> 6), t += String.fromCharCode(128 | 63 & r)) : r < 55296 || r >= 57344 ? (t += String.fromCharCode(224 | r >> 12), t += String.fromCharCode(128 | r >> 6 & 63), t += String.fromCharCode(128 | 63 & r)) : (n++, r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n)), t += String.fromCharCode(240 | r >> 18), t += String.fromCharCode(128 | r >> 12 & 63), t += String.fromCharCode(128 | r >> 6 & 63), t += String.fromCharCode(128 | 63 & r))
                }
                return t
            }
            var x = {
                size: 128,
                level: "L",
                bgColor: "#FFFFFF",
                fgColor: "#000000",
                includeMargin: !1
            };

            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = [];
                return e.forEach((function(e, r) {
                    var o = null;
                    e.forEach((function(i, a) {
                        if (!i && null !== o) return n.push("M".concat(o + t, " ").concat(r + t, "h").concat(a - o, "v1H").concat(o + t, "z")), void(o = null);
                        if (a !== e.length - 1) i && null === o && (o = a);
                        else {
                            if (!i) return;
                            null === o ? n.push("M".concat(a + t, ",").concat(r + t, " h1v1H").concat(a + t, "z")) : n.push("M".concat(o + t, ",").concat(r + t, " h").concat(a + 1 - o, "v1H").concat(o + t, "z"))
                        }
                    }))
                })), n.join("")
            }

            function E(e, t) {
                return e.slice().map((function(e, n) {
                    return n < t.y || n >= t.y + t.h ? e : e.map((function(e, n) {
                        return (n < t.x || n >= t.x + t.w) && e
                    }))
                }))
            }

            function k(e, t) {
                var n = e.imageSettings,
                    r = e.size,
                    o = e.includeMargin;
                if (null == n) return null;
                var i = o ? 4 : 0,
                    a = t.length + 2 * i,
                    c = Math.floor(.1 * r),
                    s = a / r,
                    u = (n.width || c) * s,
                    l = (n.height || c) * s,
                    d = null == n.x ? t.length / 2 - u / 2 : n.x * s,
                    f = null == n.y ? t.length / 2 - l / 2 : n.y * s,
                    p = null;
                if (n.excavate) {
                    var v = Math.floor(d),
                        h = Math.floor(f);
                    p = {
                        x: v,
                        y: h,
                        w: Math.ceil(u + d - v),
                        h: Math.ceil(l + f - h)
                    }
                }
                return {
                    x: d,
                    y: f,
                    h: l,
                    w: u,
                    excavation: p
                }
            }
            var Z = function() {
                    try {
                        (new Path2D).addPath(new Path2D)
                    } catch (e) {
                        return !1
                    }
                    return !0
                }(),
                C = function(e) {
                    function t() {
                        var e, n;
                        s(this, t);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return m(p(n = d(this, (e = f(t)).call.apply(e, [this].concat(o)))), "_canvas", void 0), m(p(n), "_image", void 0), m(p(n), "state", {
                            imgLoaded: !1
                        }), m(p(n), "handleImageLoad", (function() {
                            n.setState({
                                imgLoaded: !0
                            })
                        })), n
                    }
                    return v(t, e), l(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this._image && this._image.complete && this.handleImageLoad(), this.update()
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            var t, n;
                            (null === (t = this.props.imageSettings) || void 0 === t ? void 0 : t.src) !== (null === (n = e.imageSettings) || void 0 === n ? void 0 : n.src) && this.setState({
                                imgLoaded: !1
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.update()
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var e = this.props,
                                t = e.value,
                                n = e.size,
                                r = e.level,
                                o = e.bgColor,
                                i = e.fgColor,
                                a = e.includeMargin,
                                c = e.imageSettings,
                                s = new b(-1, y[r]);
                            if (s.addData(w(t)), s.make(), null != this._canvas) {
                                var u = this._canvas,
                                    l = u.getContext("2d");
                                if (!l) return;
                                var d = s.modules;
                                if (null === d) return;
                                var f = a ? 4 : 0,
                                    p = d.length + 2 * f,
                                    v = k(this.props, d);
                                null != c && null != v && null != v.excavation && (d = E(d, v.excavation));
                                var h = window.devicePixelRatio || 1;
                                u.height = u.width = n * h;
                                var m = n / p * h;
                                l.scale(m, m), l.fillStyle = o, l.fillRect(0, 0, p, p), l.fillStyle = i, Z ? l.fill(new Path2D(_(d, f))) : d.forEach((function(e, t) {
                                    e.forEach((function(e, n) {
                                        e && l.fillRect(n + f, t + f, 1, 1)
                                    }))
                                })), this.state.imgLoaded && this._image && null != v && l.drawImage(this._image, v.x + f, v.y + f, v.w, v.h)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = (t.value, t.size),
                                r = (t.level, t.bgColor, t.fgColor, t.style),
                                i = (t.includeMargin, t.imageSettings),
                                s = c(t, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin", "imageSettings"]),
                                u = a({
                                    height: n,
                                    width: n
                                }, r),
                                l = null,
                                d = i && i.src;
                            return null != i && null != d && (l = g.createElement("img", {
                                src: d,
                                style: {
                                    display: "none"
                                },
                                onLoad: this.handleImageLoad,
                                ref: function(t) {
                                    return e._image = t
                                }
                            })), g.createElement(g.Fragment, null, g.createElement("canvas", o({
                                style: u,
                                height: n,
                                width: n,
                                ref: function(t) {
                                    return e._canvas = t
                                }
                            }, s)), l)
                        }
                    }]), t
                }(g.PureComponent);
            m(C, "defaultProps", x);
            var S = function(e) {
                function t() {
                    return s(this, t), d(this, f(t).apply(this, arguments))
                }
                return v(t, e), l(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.value,
                            n = e.size,
                            r = e.level,
                            i = e.bgColor,
                            a = e.fgColor,
                            s = e.includeMargin,
                            u = e.imageSettings,
                            l = c(e, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]),
                            d = new b(-1, y[r]);
                        d.addData(w(t)), d.make();
                        var f = d.modules;
                        if (null === f) return null;
                        var p = s ? 4 : 0,
                            v = f.length + 2 * p,
                            h = k(this.props, f),
                            m = null;
                        null != u && null != h && (null != h.excavation && (f = E(f, h.excavation)), m = g.createElement("image", {
                            xlinkHref: u.src,
                            height: h.h,
                            width: h.w,
                            x: h.x + p,
                            y: h.y + p,
                            preserveAspectRatio: "none"
                        }));
                        var x = _(f, p);
                        return g.createElement("svg", o({
                            shapeRendering: "crispEdges",
                            height: n,
                            width: n,
                            viewBox: "0 0 ".concat(v, " ").concat(v)
                        }, l), g.createElement("path", {
                            fill: i,
                            d: "M0,0 h".concat(v, "v").concat(v, "H0z")
                        }), g.createElement("path", {
                            fill: a,
                            d: x
                        }), m)
                    }
                }]), t
            }(g.PureComponent);
            m(S, "defaultProps", x);
            var T = function(e) {
                var t = e.renderAs,
                    n = c(e, ["renderAs"]),
                    r = "svg" === t ? S : C;
                return g.createElement(r, n)
            };
            T.defaultProps = a({
                renderAs: "canvas"
            }, x), e.exports = T
        },
        dYSB: (e, t, n) => {
            "use strict";
            var r = n("DTvD");
            var o = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                },
                i = r.useState,
                a = r.useEffect,
                c = r.useLayoutEffect,
                s = r.useDebugValue;

            function u(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !o(e, n)
                } catch (r) {
                    return !0
                }
            }
            var l = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    r = i({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    o = r[0].inst,
                    l = r[1];
                return c((function() {
                    o.value = n, o.getSnapshot = t, u(o) && l({
                        inst: o
                    })
                }), [e, n, t]), a((function() {
                    return u(o) && l({
                        inst: o
                    }), e((function() {
                        u(o) && l({
                            inst: o
                        })
                    }))
                }), [e]), s(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
        },
        Tp6k: (e, t, n) => {
            "use strict";
            e.exports = n("dYSB")
        },
        ab8n: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                Z: () => d
            });
            var o = new Uint8Array(16);

            function i() {
                if (!r && !(r = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return r(o)
            }
            const a = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            const c = function(e) {
                return "string" === typeof e && a.test(e)
            };
            for (var s = [], u = 0; u < 256; ++u) s.push((u + 256).toString(16).substr(1));
            const l = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (s[e[t + 0]] + s[e[t + 1]] + s[e[t + 2]] + s[e[t + 3]] + "-" + s[e[t + 4]] + s[e[t + 5]] + "-" + s[e[t + 6]] + s[e[t + 7]] + "-" + s[e[t + 8]] + s[e[t + 9]] + "-" + s[e[t + 10]] + s[e[t + 11]] + s[e[t + 12]] + s[e[t + 13]] + s[e[t + 14]] + s[e[t + 15]]).toLowerCase();
                if (!c(n)) throw TypeError("Stringified UUID is invalid");
                return n
            };
            const d = function(e, t, n) {
                var r = (e = e || {}).random || (e.rng || i)();
                if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                    n = n || 0;
                    for (var o = 0; o < 16; ++o) t[n + o] = r[o];
                    return t
                }
                return l(r)
            }
        },
        kCTS: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r = n("HcPY"),
                o = n("DTvD"),
                i = n("92i9"),
                a = n("sViW"),
                c = n("q0wl"),
                s = n.n(c),
                u = "/authcenter/callback";

            function l(e, t) {
                return d.apply(this, arguments)
            }

            function d() {
                return d = (0, a.Z)(s().mark((function e(t, n) {
                    var r, o, i, a = arguments;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = a.length > 2 && void 0 !== a[2] ? a[2] : "", !/^\/$|^(\/[a-zA-Z]{2}.*)$/.test(t)) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 3:
                                e.prev = 4, o = new URL(t), e.next = 12;
                                break;
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(4), console.error("callback can't create URL", e.t0), e.abrupt("return", t);
                            case 12:
                                if (!o.host.includes("accounts.")) {
                                    e.next = 14;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 14:
                                if (!o.pathname.includes(u)) {
                                    e.next = 16;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 16:
                                if (!n) {
                                    e.next = 23;
                                    break
                                }
                                if (i = n, "function" !== typeof n) {
                                    e.next = 22;
                                    break
                                }
                                return e.next = 21, n();
                            case 21:
                                i = e.sent;
                            case 22:
                                return e.abrupt("return", "https://".concat(o.host, "/bapi/accounts/v1/public/authcenter/callback?code=").concat(i, "&callback=").concat(encodeURIComponent(t)).concat(r));
                            case 23:
                                return e.abrupt("return", t);
                            case 24:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [4, 8]
                    ])
                }))), d.apply(this, arguments)
            }
            var f = n("lFNY"),
                p = n("WRKX"),
                v = n("WEt1"),
                h = n("T8Gn"),
                m = n("DZms");

            function g() {
                var e = (0, v.Hb)().query,
                    t = (0, i.ZP)().bridge,
                    n = (0, h.$)().i18n;
                return (0, o.useLayoutEffect)((function() {
                    f.Z.show(), t && t.ensureLogged().then((function(t) {
                        var r = t.abort,
                            o = t.alreadyLogged,
                            i = t.logged;
                        if (r) return history.go(-1);
                        (o || i) && (e.return_to ? l((0, p.R)(e.return_to), null).then((function(e) {
                            window.location.href = e
                        })) : window.location.href = "https://www.".concat((0, m.nc)(), "/").concat(n.language, "/my/dashboard"))
                    }))
                }), [t]), (0, r.jsx)("div", {})
            }
        },
        "92i9": (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => a
            });
            var r = n("DTvD"),
                o = n("BosS"),
                i = n("oNdK");

            function a() {
                return {
                    isHybrid: (0, r.useMemo)((function() {
                        return Boolean(window.navigator.userAgent && /BNC\/[\d\.]+/i.test(window.navigator.userAgent) ? (window.navigator.userAgent.match(/BNC\/[\d\.]+/i) || [""])[0].slice(4) : "")
                    }), []),
                    bridge: (0, r.useMemo)((function() {
                        return (0, o.Ue)((0, o.xf)(i))
                    }), []),
                    clientType: (0, r.useMemo)((function() {
                        return function() {
                            var e = window.navigator.userAgent || window.navigator.vendor || window.opera;
                            if (e) {
                                if (/android/i.test(e)) return "Android";
                                if (/iPad|iPhone|iPod/.test(e) && !window.MSStream) return "iOS"
                            }
                            return "unknown"
                        }()
                    }), [])
                }
            }
        },
        yHYq: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n("sViW"),
                o = n("AyEA"),
                i = n.n(o),
                a = n("DTvD"),
                c = n("dWq7"),
                s = n("eIot"),
                u = n("92i9");
            const l = function() {
                var e = (0, u.ZP)().isHybrid,
                    t = (0, s.N)((0, r.Z)(i().mark((function t() {
                        var n;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!e) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 3, (0, c.xx)({}, {
                                        excludeErrorCode: ["100002001"]
                                    });
                                case 3:
                                    return n = t.sent, t.abrupt("return", n);
                                case 5:
                                    return t.abrupt("return", {
                                        success: !1
                                    });
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), [e], {
                        value: {
                            success: !1
                        }
                    }).value.success;
                (0, a.useEffect)((function() {
                    try {
                        "undefined" !== typeof(null === window || void 0 === window ? void 0 : window.close) && t && (null === window || void 0 === window || window.close())
                    } catch (e) {}
                }), [t])
            }
        },
        gDEc: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n("sViW"),
                o = n("AyEA"),
                i = n.n(o),
                a = n("DTvD"),
                c = n("FucG"),
                s = n("i9YO"),
                u = n("Idgt"),
                l = n("WEt1"),
                d = n("lZYQ");
            const f = function() {
                var e = (0, l.wS)().locale,
                    t = void 0 === e ? "en" : e,
                    n = (0, a.useCallback)(function() {
                        var e = (0, r.Z)(i().mark((function e(n) {
                            var r, o, a, l, f, p, v, h, m, g, b, y, w, x, _, E, k;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, d.post)("/bapi/kyc/v2/private/certificate/user-kyc/current-kyc-status");
                                    case 3:
                                        if (r = e.sent, o = r.data, a = o.kycStatus, l = o.forbidCountryPassed, f = o.addressStatus, !(2 === a && l)) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 10, (0, c.z$)();
                                    case 10:
                                        if ("KYC_POA_SANC" !== (null === (p = e.sent.data) || void 0 === p ? void 0 : p.tips)) {
                                            e.next = 14;
                                            break
                                        }
                                        return (0, u.Pl)("/".concat(t, "/notice?code=999998&return_to=").concat((0, s.Ok)(n))), e.abrupt("return", !1);
                                    case 14:
                                    case 44:
                                        return e.abrupt("return", !0);
                                    case 15:
                                        return e.next = 17, (0, c._n)();
                                    case 17:
                                        if (!(v = e.sent).success || !v.data) {
                                            e.next = 39;
                                            break
                                        }
                                        if (h = v.data, m = h.checkResult, g = h.country, b = h.extraInfo, m || "ONE" !== g) {
                                            e.next = 39;
                                            break
                                        }
                                        if (y = b.isKycUsCountry, w = b.isKycRestrictedCountry, x = b.isIpUsCountry, _ = b.isIpRestrictedCountry, E = b.hasKyc, k = b.blackOperator, !y) {
                                            e.next = 25;
                                            break
                                        }
                                        return (0, u.Pl)("/".concat(t, "/notice?code=999991&return_to=").concat((0, s.Ok)(n))), e.abrupt("return", !1);
                                    case 25:
                                        if (!w) {
                                            e.next = 30;
                                            break
                                        }
                                        if ("PASS" !== f) {
                                            e.next = 28;
                                            break
                                        }
                                        return e.abrupt("return", !0);
                                    case 28:
                                        return (0, u.Pl)("/".concat(t, "/notice?code=999992&return_to=").concat((0, s.Ok)(n))), e.abrupt("return", !1);
                                    case 30:
                                        if (!x) {
                                            e.next = 33;
                                            break
                                        }
                                        return (0, u.Pl)("/".concat(t, "/notice?code=").concat(E ? 999993 : 999994, "&return_to=").concat((0, s.Ok)(n))), e.abrupt("return", !1);
                                    case 33:
                                        if (!_) {
                                            e.next = 36;
                                            break
                                        }
                                        return (0, u.Pl)("/".concat(t, "/notice?code=").concat(E ? 999995 : 999996, "&return_to=").concat((0, s.Ok)(n))), e.abrupt("return", !1);
                                    case 36:
                                        if (!k || E) {
                                            e.next = 39;
                                            break
                                        }
                                        return (0, u.Pl)("/".concat(t, "/notice?code=999997&return_to=").concat((0, s.Ok)(n))), e.abrupt("return", !1);
                                    case 39:
                                        e.next = 44;
                                        break;
                                    case 41:
                                        return e.prev = 41, e.t0 = e.catch(0), e.abrupt("return", !0);
                                    case 45:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 41]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [t]);
                return n
            }
        },
        vrcq: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n("BK7R"),
                o = n("DTvD"),
                i = n("sViW"),
                a = n("q0wl"),
                c = n.n(a),
                s = n("lZYQ"),
                u = (function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n, r, o, i, a;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/charge-withdraw-histroy", t);
                                case 2:
                                    return n = e.sent, r = n.data, o = r.data, i = r.total, a = r.direction, e.abrupt("return", {
                                        data: o,
                                        total: i,
                                        direction: a
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n, r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/get-payment-methods", t);
                                case 2:
                                    return n = e.sent, r = n.data, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/payment-calculate", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/get-payment-account-info", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/get-country-banks", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/apply-charge", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/charge-notify", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/apply-withdraw", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v2/private/fiatpayment/apply-withdraw", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/re-send-withdraw-mail", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/remove-bank", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/bind-confirm", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/submit-offline-charge", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/get-share-kyc-status", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/share-kyc", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, s.post)("/bapi/fiat/v1/private/fiatpayment/etana/check", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, s.post)("/bapi/fiat/v1/private/fiatpayment/offline-charge-bank-list", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/standardbank/get-charge-reference-code", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/standardbank/get-withdrawal-bank-list", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/get-user-kyclimit-and-available", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/apply-nationality-and-estimated-value", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/cards/get-cards", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/cards/unbind-card", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/account/async-check-account-holder-name", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/private/fiatpayment/account/get-async-check-account-holder-name-result", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.Z)(c().mark((function e() {
                        var t;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/friendly/fiatpayment/eternal/risk/tmx/sessionId");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                l = function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/friendly/fiatpayment/eternal/risk/tmx/notifyDownload", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = (function() {
                    var e = (0, i.Z)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/fiat/v1/friendly/fiatpayment/transactions/get-fiat-currencies", t);
                                case 2:
                                    return n = e.sent.data, e.abrupt("return", {
                                        result: (null === n || void 0 === n ? void 0 : n.fiatCurrencies) || []
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), n("VJs4")),
                f = new Set(["EUR", "GBP"]),
                p = "payRiskSafeInfo",
                v = "payRiskSafeResult",
                h = n("VAOc");
            const m = function() {
                var e, t = function() {
                        var e = function() {
                                var e = document.getElementById("paySafeResult");
                                e && document.body.removeChild(e);
                                var t = document.createElement("script");
                                t.setAttribute("data-ot-ignore", "true"), t.setAttribute("class", "optanon-category-C0001"), t.type = "text/javascript", t.id = "paySafeResult", t.appendChild(document.createTextNode("\n    function tmx_profiling_complete(session_id) {  \n      if (session_id) {\n        const info = { isSuccess: true }\n        typeof window !== 'undefined' &&\n          window.localStorage &&\n          window.localStorage.setItem('payRiskSafeResult', JSON.stringify(info))\n      }\n    }\n    ")), document.body.appendChild(t)
                            },
                            t = function(e) {
                                if (e) {
                                    var t = document.getElementById("paySafe");
                                    t && document.body.removeChild(t);
                                    var n = document.createElement("script");
                                    n.setAttribute("data-ot-ignore", "true"), n.setAttribute("class", "optanon-category-C0001"), n.type = "text/javascript", n.src = "https://h.online-metrix.net/fp/tags.js?org_id=".concat("3t5fmdir", "&session_id=").concat(e), n.id = "paySafe", document.body.appendChild(n)
                                }
                            },
                            n = function() {
                                var e = (0, i.Z)(c().mark((function e(t) {
                                    return c().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, l(t);
                                            case 3:
                                                e.next = 8;
                                                break;
                                            case 5:
                                                e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 5]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            r = function(e) {
                                var t = e.disabledNotify,
                                    r = e.currency,
                                    o = e.source,
                                    i = "undefined" !== typeof window && new RegExp("^/([a-z]{2}(-[a-zA-Z]{2})?)?/?$").test(window.location.pathname),
                                    a = null === r || void 0 === r ? void 0 : r.some((function(e) {
                                        return f.has(e)
                                    }));
                                t || i || !a || n({
                                    source: o
                                })
                            },
                            o = function() {
                                var n = (0, i.Z)(c().mark((function n(o) {
                                    var i, a, s, l, f;
                                    return c().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return i = o.disabledNotify, a = o.currency, s = o.source, n.prev = 1, n.next = 4, u();
                                            case 4:
                                                (l = n.sent.data) && (e(), t(l.sessionId), r({
                                                    disabledNotify: i,
                                                    currency: a,
                                                    source: s
                                                }), f = {
                                                    sessionId: l.sessionId,
                                                    expiredTime: l.expiredTime
                                                }, d.tO.setItem(p, f)), n.next = 11;
                                                break;
                                            case 8:
                                                n.prev = 8, n.t0 = n.catch(1), console.log(n.t0);
                                            case 11:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 8]
                                    ])
                                })));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }();
                        return function(n) {
                            var i = n.source,
                                a = n.currency,
                                c = n.disabledSessionId,
                                s = n.disabledNotify,
                                u = n.forceSessionId,
                                l = Date.now() / 1e3,
                                f = d.tO.getItem(p) || {},
                                h = f.expiredTime,
                                m = void 0 === h ? 0 : h,
                                g = f.sessionId,
                                b = (d.tO.getItem(v) || {}).isSuccess;
                            c || (m < l || u ? (d.tO.setItem(v, {
                                isSuccess: !1
                            }), o({
                                disabledNotify: s,
                                currency: a,
                                source: i
                            })) : (b || (e(), t(g)), r({
                                disabledNotify: s,
                                currency: a,
                                source: i
                            })))
                        }
                    }(),
                    n = null === (e = h.Q.read("userPreferredCurrency")) || void 0 === e ? void 0 : e.split("_")[0],
                    a = (0, o.useCallback)((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        n && t((0, r.Z)({
                            currency: [n],
                            disabledNotify: !0
                        }, e))
                    }), [n]);
                return a
            }
        },
        nj4l: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("DTvD"),
                o = n("ED0S");
            const i = function() {
                (0, r.useEffect)((function() {
                    var e;
                    if ("undefined" === typeof(null === (e = window.document) || void 0 === e ? void 0 : e.createElement)) return function() {};
                    var t = document.createElement("script");
                    try {
                        window.hkAPIs = ["/public/account/security/precheck"], t.src = "".concat(o.Xs, "/static/js/se/se.min.js"), document.head.appendChild(t)
                    } catch (n) {
                        console.error("create security sdk fail", n)
                    }
                    return function() {
                        document.head.contains(t) && document.head.removeChild(t), window.hkAPIs = void 0
                    }
                }), [])
            }
        },
        "7INI": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n("DTvD"),
                o = n("WEt1"),
                i = n("nRuQ");

            function a() {
                var e = (0, o.Hb)().query,
                    t = void 0 === e ? {} : e,
                    n = (0, r.useMemo)((function() {
                        return t.utm_source || i.d.getItem("utm_source")
                    }), [t.utm_source]),
                    a = (0, r.useMemo)((function() {
                        return t.utm_source_info || i.d.getItem("utm_source_info")
                    }), [t.utm_source_info]);
                return (0, r.useEffect)((function() {
                    i.d.setItem("utm_source", n), i.d.setItem("utm_source_info", a)
                }), [n, a]), {
                    utmSource: n,
                    utmSourceInfo: a
                }
            }
        },
        "WHx+": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => D
            });
            var r = n("sViW"),
                o = n("AyEA"),
                i = n.n(o),
                a = n("HcPY"),
                c = n("DTvD"),
                s = n("ksK1"),
                u = n("USwW"),
                l = n("yG0M"),
                d = n("2cdI"),
                f = n("Idgt"),
                p = n("nRuQ"),
                v = n("kQr8"),
                h = n("VAOc"),
                m = n("T8Gn"),
                g = n("WEt1"),
                b = n("FucG"),
                y = n("SqAd"),
                w = n("i9YO"),
                x = n("gDEc"),
                _ = n("IS67"),
                E = n("T9we"),
                k = n("c1zs");
            var Z = n("D1Mq"),
                C = n("dWq7"),
                S = n("Ckv1"),
                T = n("n0xf"),
                I = n("/pg0"),
                P = n("8ufs"),
                R = n("DZms");
            var M = n("vrcq");
            const D = function() {
                var e = (0, m.$)().t,
                    t = function() {
                        var e = (0, s.Z)(),
                            t = (0, m.$)().t,
                            n = !1,
                            o = (0, c.useCallback)(function() {
                                var e = (0, r.Z)(i().mark((function e(r) {
                                    var o, a, c;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (e.prev = 0, !n) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 3:
                                                return n = !0, e.next = 6, (0, _.tc)(r);
                                            case 6:
                                                if (o = e.sent, a = o.data, c = o.message, n = !1, !a) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return (0, E.PV)(t("accounts-unblock-success"), {
                                                    variant: "success",
                                                    anchorOrigin: {
                                                        vertical: "top",
                                                        horizontal: "right"
                                                    }
                                                }), e.abrupt("return");
                                            case 13:
                                                (0, E.PV)(c, {
                                                    variant: "error",
                                                    anchorOrigin: {
                                                        vertical: "top",
                                                        horizontal: "right"
                                                    }
                                                }), e.next = 18;
                                                break;
                                            case 16:
                                                e.prev = 16, e.t0 = e.catch(0);
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 16]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(), []);
                        return function(n, r) {
                            return "001444" === n || "001446" === n ? (e.confirm({
                                imgSrc: (0, a.jsx)(k.Z, {
                                    size: 96
                                }),
                                modalTitle: t("accounts-outService"),
                                desc: t("accounts-unblock-noAsset"),
                                okText: t("modal-iUnderstood")
                            }), !0) : ("001457" === n || "001447" === n) && (e.confirm({
                                imgSrc: (0, a.jsx)(k.Z, {
                                    size: 96
                                }),
                                modalTitle: t("accounts-login-restricted"),
                                onOk: function() {
                                    return o(r)
                                },
                                desc: t("accounts-unblock-hasAsset"),
                                okText: t("accounts-unblock-login")
                            }), !0)
                        }
                    }(),
                    n = (0, s.Z)(),
                    o = (0, g.tv)(),
                    D = (0, g.wS)().locale,
                    O = void 0 === D ? "en" : D,
                    z = function() {
                        var e = (0, s.Z)(),
                            t = (0, m.$)(),
                            n = t.t,
                            r = t.i18n.language || "en";
                        return (0, c.useCallback)((function() {
                            return new Promise((function(t) {
                                try {
                                    (0, C.cr)().then((function(o) {
                                        o.data.cmeConfirm ? e.custom({
                                            render: function(e) {
                                                return (0, a.jsxs)(T.Z, {
                                                    sx: {
                                                        padding: "40px 24px 24px 24px"
                                                    },
                                                    children: [(0, a.jsx)(Z.Z, {
                                                        size: 96
                                                    }), (0, a.jsx)(I.Z, {
                                                        sx: {
                                                            mt: "40px",
                                                            color: "t.primary",
                                                            fontSize: "14px"
                                                        },
                                                        children: n("accounts-cmeCheckDesc")
                                                    }), (0, a.jsxs)(T.Z, {
                                                        sx: {
                                                            mt: "md",
                                                            display: "flex",
                                                            flexWrap: "wrap"
                                                        },
                                                        children: [(0, a.jsx)(P.Z, {
                                                            width: ["242px", "210px", "210px"],
                                                            variant: "outline",
                                                            colorStyle: "second",
                                                            sx: {
                                                                padding: "14px",
                                                                whiteSpace: "normal"
                                                            },
                                                            onClick: function() {
                                                                e(), (0, S.A8)({
                                                                    configName: "userConfirm",
                                                                    configType: "userCmeConfirmFlag"
                                                                }).then((function() {
                                                                    return t(!0)
                                                                }))
                                                            },
                                                            children: n("accounts-notGerman")
                                                        }), (0, a.jsx)(P.Z, {
                                                            width: ["242px", "210px", "210px"],
                                                            sx: {
                                                                padding: "14px",
                                                                whiteSpace: "normal"
                                                            },
                                                            ml: ["0px", "20px", "20px"],
                                                            mt: ["md", "0", "0"],
                                                            onClick: function() {
                                                                e(), (0, d.Z)("https://www.".concat((0, R.nc)(), "/").concat(r, "/my/settings/profile/address-verification")), t(!1)
                                                            },
                                                            children: n("exchange-isGerman")
                                                        })]
                                                    })]
                                                })
                                            },
                                            sx: {
                                                width: ["290px", "490px", "490px"]
                                            },
                                            hasCloseIcon: !1,
                                            hasMaskClick: !1
                                        }) : t(!0)
                                    }))
                                } catch (o) {
                                    t(!0)
                                }
                            }))
                        }), [e])
                    }(),
                    A = (0, x.Z)(),
                    L = (0, M.Z)(),
                    N = (0, u.$)(function() {
                        var c = (0, r.Z)(i().mark((function r(c, s, u) {
                            var m, g, x, _, E, k, Z, C, S, T, I;
                            return i().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (m = c.success, g = c.data, x = c.code, _ = c.message, E = s.email, k = s.mobile, Z = s.mobileCode, !t(x, {
                                                email: E,
                                                mobile: k,
                                                mobileCode: Z
                                            })) {
                                            r.next = 4;
                                            break
                                        }
                                        return r.abrupt("return", !1);
                                    case 4:
                                        if ("001418" !== x) {
                                            r.next = 7;
                                            break
                                        }
                                        return n.info({
                                            imgSrc: (0, a.jsx)(v.Z, {
                                                size: 96
                                            }),
                                            desc: "".concat(e("accounts-no-authorize-mobile", {
                                                defaultValue: _
                                            }), "(").concat(x, ")"),
                                            okText: e("modal-iUnderstood"),
                                            onOk: function() {
                                                return o.push("/".concat(O, "/mobile-login-authorize"))
                                            }
                                        }), r.abrupt("return", !1);
                                    case 7:
                                        if (!["001501", "001502", "001503"].includes(x)) {
                                            r.next = 11;
                                            break
                                        }
                                        return (0, l.Z1)({
                                            loginType: E ? "email" : "phone"
                                        }), (0, d.Z)("/".concat(O, "/restrict-notice?").concat((0, f.$h)({
                                            country: _,
                                            code: x
                                        }))), r.abrupt("return", !1);
                                    case 11:
                                        if (m) {
                                            r.next = 13;
                                            break
                                        }
                                        return r.abrupt("return", !0);
                                    case 13:
                                        if (L({
                                                source: "loginSuccess",
                                                forceSessionId: !0
                                            }), !(g || {}).needComplianceAndHashAsset) {
                                            r.next = 18;
                                            break
                                        }
                                        return (0, d.Z)("/".concat(O, "/restrict-suspend")), r.abrupt("return", !1);
                                    case 18:
                                        return r.next = 20, z();
                                    case 20:
                                        if (r.sent) {
                                            r.next = 23;
                                            break
                                        }
                                        return r.abrupt("return", !1);
                                    case 23:
                                        return r.next = 25, (0, b.M3)();
                                    case 25:
                                        if (!(C = r.sent).data) {
                                            r.next = 30;
                                            break
                                        }
                                        return (0, f.Pl)("/".concat(O, "/notice?code=lefttime&return_to=").concat((0, w.Ok)(u))), p.d.setItem("leftTime", C.data), r.abrupt("return", !1);
                                    case 30:
                                        return r.next = 32, A(u);
                                    case 32:
                                        if (r.sent) {
                                            r.next = 35;
                                            break
                                        }
                                        return r.abrupt("return", !1);
                                    case 35:
                                        return r.next = 37, (0, y.Tk)();
                                    case 37:
                                        return S = r.sent, T = S.data, I = (T || {}).analytics, void 0 === I || I || h.Q.write("data_opt_out", "y"), r.abrupt("return", !0);
                                    case 42:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })));
                        return function(e, t, n) {
                            return c.apply(this, arguments)
                        }
                    }());
                return N
            }
        },
        "kz7/": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("DTvD"),
                o = (0, n("8+ji").client)().isHybrid;

            function i() {
                var e = (0, r.useState)(!1),
                    t = e[0],
                    n = e[1];
                return (0, r.useEffect)((function() {
                    n(o)
                }), []), t
            }
        },
        W8aZ: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => I
            });
            var r = n("aVXY"),
                o = n("HcPY"),
                i = n("DTvD"),
                a = n.n(i),
                c = n("T8Gn"),
                s = n("ksK1"),
                u = n("yG0M"),
                l = n("eVLX"),
                d = n("oGKF"),
                f = n("F/7r"),
                p = n("ss/C"),
                v = n("TOHS"),
                h = n("WEt1"),
                m = n("VAOc"),
                g = n("nRuQ"),
                b = n("kX4b"),
                y = n("c1zs"),
                w = n("nj4l"),
                x = n("7INI"),
                _ = n("IYM8"),
                E = n("kCTS"),
                k = n("WHx+"),
                Z = n("kz7/"),
                C = n("bPYi"),
                S = n("vrcq"),
                T = n("yHYq");

            function I() {
                (0, T.Z)();
                var e = (0, c.$)().t,
                    t = (0, k.Z)(),
                    n = (0, Z.Z)(),
                    I = (0, h.Hb)().query,
                    P = I.registerChannel,
                    R = I.vc,
                    M = I.tipsCode,
                    D = I.tipsMessage,
                    O = (0, S.Z)(),
                    z = (0, r.Z)(a().useState(!1), 2),
                    A = z[0],
                    L = z[1],
                    N = (0, s.Z)();
                (0, i.useEffect)((function() {
                    D && N.info({
                        imgSrc: (0, o.jsx)(y.Z, {
                            size: 64
                        }),
                        desc: "".concat(D, "(").concat(M, ")"),
                        okText: e("modal-iUnderstood", {
                            defaultValue: "I Understood"
                        })
                    })
                }), [N, M, D]), (0, i.useEffect)((function() {
                    (0, u.V9)(), (0, b.PA)({
                        force: !0
                    })
                }), []), (0, i.useEffect)((function() {
                    var e = P || R || m.Q.read("registerChannel");
                    (P || R || m.Q.read("registerChannel")) && g.d.setItem("registerChannel", e)
                }), [P, R]), a().useEffect((function() {
                    return g.d.setItem("bnc-uuid", m.Q.read("bnc-uuid")), O(), (0, v.nb)({
                            pageName: "login",
                            elementID: "bids_login_view"
                        }), (0, l.$)(),
                        function() {
                            document.onkeydown = null
                        }
                }), []);
                var F = (0, i.useMemo)((function() {
                    return (0, o.jsx)(E.Z, {})
                }), []);
                (0, w.Z)(), (0, x.Z)();
                var j = (0, i.useMemo)((function() {
                        return {
                            config: {
                                loginTopPrompt: {
                                    config: {
                                        title: e("accounts-login-title", {
                                            defaultValue: "Log In"
                                        }),
                                        desc: "",
                                        __css: {
                                            mx: "auto",
                                            maxWidth: 1200,
                                            width: "100%",
                                            px: ["sm", "md", 0],
                                            alignItems: "center",
                                            py: ["sm"],
                                            justifyContent: "space-between"
                                        }
                                    }
                                },
                                pageContent: {
                                    config: {
                                        justifyContent: "flex-start"
                                    }
                                },
                                loginForm: {
                                    config: {
                                        initialLoginType: "email",
                                        loginTypeOptions: ["email", "mobile"],
                                        afterLogin: t,
                                        onPageReady: function() {
                                            L(!0)
                                        }
                                    }
                                },
                                loginQrCode: {
                                    hide: !1,
                                    config: {
                                        afterLogin: function() {
                                            return O({
                                                source: "loginSuccess",
                                                forceSessionId: !0
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }), [t, e, O]),
                    B = (0, d.Z)();
                return (0, o.jsx)(_.Z, {
                    withoutLogged: !0,
                    contentSx: C.C,
                    pageName: "binance_web_login",
                    className: A || B ? "" : "hidden",
                    children: (0, o.jsxs)(f.ZP, {
                        value: j,
                        children: [(0, o.jsx)(p.Z, {
                            afterLogin: t
                        }), n && F]
                    })
                })
            }
        },
        bPYi: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => r
            });
            var r = {
                mt: 0
            }
        },
        DY83: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => r.Z
            });
            var r = n("W8aZ")
        },
        GuDP: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => f
            });
            var r = n("DTvD"),
                o = n("lrbr"),
                i = n("G14Y"),
                a = n("gKJf"),
                c = n("3lyO"),
                s = n("WDth");
            class u extends c.l {
                constructor(e, t) {
                    super(), this.client = e, this.setOptions(t), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(e) {
                    var t;
                    const n = this.options;
                    this.options = this.client.defaultMutationOptions(e), (0, s.VS)(n, this.options) || this.client.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.currentMutation,
                        observer: this
                    }), null == (t = this.currentMutation) || t.setOptions(this.options)
                }
                onUnsubscribe() {
                    var e;
                    this.listeners.length || (null == (e = this.currentMutation) || e.removeObserver(this))
                }
                onMutationUpdate(e) {
                    this.updateResult();
                    const t = {
                        listeners: !0
                    };
                    "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(e, t) {
                    return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, {
                        ...this.options,
                        variables: "undefined" !== typeof e ? e : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    const e = this.currentMutation ? this.currentMutation.state : (0, i.R)(),
                        t = {
                            ...e,
                            isLoading: "loading" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = t
                }
                notify(e) {
                    a.V.batch((() => {
                        var t, n, r, o;
                        if (this.mutateOptions && this.hasListeners())
                            if (e.onSuccess) null == (t = (n = this.mutateOptions).onSuccess) || t.call(n, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (r = (o = this.mutateOptions).onSettled) || r.call(o, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
                            else if (e.onError) {
                            var i, a, c, s;
                            null == (i = (a = this.mutateOptions).onError) || i.call(a, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (c = (s = this.mutateOptions).onSettled) || c.call(s, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context)
                        }
                        e.listeners && this.listeners.forEach((e => {
                            e(this.currentResult)
                        }))
                    }))
                }
            }
            var l = n("UgDF"),
                d = n("zZ1F");

            function f(e, t, n) {
                const i = (0, s.lV)(e, t, n),
                    c = (0, l.NL)({
                        context: i.context
                    }),
                    [f] = r.useState((() => new u(c, i)));
                r.useEffect((() => {
                    f.setOptions(i)
                }), [f, i]);
                const v = (0, o.$)(r.useCallback((e => f.subscribe(a.V.batchCalls(e))), [f]), (() => f.getCurrentResult()), (() => f.getCurrentResult())),
                    h = r.useCallback(((e, t) => {
                        f.mutate(e, t).catch(p)
                    }), [f]);
                if (v.error && (0, d.L)(f.options.useErrorBoundary, [v.error])) throw v.error;
                return {
                    ...v,
                    mutate: h,
                    mutateAsync: v.mutate
                }
            }

            function p() {}
        },
        lrbr: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => r
            });
            const r = n("Tp6k").useSyncExternalStore
        },
        zZ1F: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return "function" === typeof e ? e(...t) : !!e
            }
            n.d(t, {
                L: () => r
            })
        }
    }
]);
//# debugId=c414b363-0764-5ac0-9019-d09a850badbb
