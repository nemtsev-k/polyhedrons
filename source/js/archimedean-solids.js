"use strict";
var _b, _c, _j;

function _k() {
  var e, t, n, r, a, l, o, i = [131072, 512, 2, 131584, 131330, 514, 131328, 65794, 513, 66048, 256, 1, 257, 258, 65536, 65537, 65538, 65792, 131329, 66049, 66050, 131073, 131074, 131585];
  if (null == _b) {
    for (_c = Array(32), a = _b = Array(32), t = 32; 0 <= --t;) _c[t] = Array(192), a[t] = Array(192);
    for (e = 192; 0 <= --e;) {
      for (r = e + 64, t = 24; 0 <= --t;) n = i[t], a[t][e] = "rgb(" + ((n = n * (r >> 1) + (n >> 1 & 65793) * (1 & r)) >> 16) + "," + (n >> 8 & 255) + "," + (255 & n) + ")";
      for (t = 9; 0 < --t;) a[t + 23][e] = "rgb(" + (n = r * t >> 3) + "," + n + "," + n + ")";
      for (t = 32; 0 <= --t;) _c[t][e] = "rgba" + a[t][e].slice(3, -1) + ",.125)"
    }
  }
  for (l = document.getElementsByTagName("div"), _j = [], e = -1; ++e < l.length;) "miniConvex" == l[e].getAttribute("name") && (o = l[e].getElementsByTagName("canvas")).length && _l(l[e], o[0])
}

function _l(e, t) {
  function n(e, t, n, r, a) {
    var l, o = r + a;
    if ((l = t - r) < 0) for (; --o >= r;) n[o] = e[o + l]; else for (; r < o; r++) n[r] = e[r + l]
  }

  function r(e, t, n) {
    var r;
    return Ee[r = T++] = e, Te[r] = t, Ie[r] = n, r
  }

  function a(e, t, n) {
    return Math.sqrt((r = e, a = t, l = n, a *= a, (r *= r) < (l *= l) && a < l ? r + a + l : r < a ? r + l + a : a + l + r));
    var r, a, l
  }

  function l(e, t) {
    var n;
    return e = e.substring(1 - (n = "-" == e.charAt(0) ? -1 : 1) >> 1), n * ("C" == e.charAt(0) ? t[parseInt(e.substring(1), 10)] : parseFloat(e))
  }

  function o(e) {
    e.preventDefault()
  }

  function i(e, n, r) {
    var a, l, o, i;
    e ? oe = !0 : le = !0, l = ~~(n - (a = t.getBoundingClientRect()).left + .5), o = ~~(r - a.top + .5), ae = 0, L < l && l <= x && P < o && o <= q ? 0 <= (ae = 0 < (J = l - (i = D)) && J <= V && X < o && o <= G ? -1 : 1) && (l <= i ? Q < i && D-- : i + V < l && i < z && D++) : K < l && l <= U && Z < o && o <= $ ? (ae = 1, ie ^= !0) : (M = l, B = _ = o), 0 < ae && (k = M, S = B, m(), b())
  }

  function f(e) {
    e.button && 2 != e.button || i(e.button, e.clientX, e.clientY)
  }

  function s(e) {
    var t;
    e.preventDefault(), i(0, (t = e.targetTouches[0]).clientX, t.clientY)
  }

  function u(e) {
    e.button && 2 != e.button || (e.button ? oe = !1 : le = !1)
  }

  function c(e) {
    e.preventDefault(), le = !1
  }

  function g(e, n) {
    var r, a, l, o, i;
    le | oe && ae <= 0 && (a = ~~(e - (r = t.getBoundingClientRect()).left + .5), k = M, S = B, ae < 0 ? D = (a -= J) < Q ? Q : z < a ? z : a : (l = ~~(n - r.top + .5), le && (M = a, B = l), oe && .5 <= (i = (o = se * Math.exp((l - _) * ye)) * fe) && (se = o, ue = .75 / (ge < i ? .5 * (i + ge) : i)), _ = l), m(), b())
  }

  function h(e) {
    g(e.clientX, e.clientY)
  }

  function y(e) {
    var t;
    e.preventDefault(), g((t = e.targetTouches[0]).clientX, t.clientY)
  }

  function v() {
    le = oe = !1
  }

  function m() {
    var e, t, n, r, l, o, i, f, s, u, c, g, h, y, v, m, d, b, w, p, N, _, L, x, P, q, R, Y, j, X, G, V, W, O, Q, z, J, K, U, Z, $, ee, ae, le, oe, fe, ye, _e, xe, Pe, qe, Re, Ye, je, De, Xe, Ge, Ve, We, Oe, Qe, ze, He, Je, Ke, Ue = 1.5707963267948966, Ze = (k - F) * (z = ue), $e = (C - S) * z, et = (M - F) * z, tt = (C - B) * z;
    for (1 <= (K = Math.hypot(Ze, $e)) ? (0 != (z = Math.hypot(et, tt)) && (et *= z = 1 - (K - 1) / z, tt *= z), t = 0) : (K = a(Ze, $e, t = Math.cos(K * Ue)), t /= K), Ze /= K, $e /= K, 1 < (K = Math.hypot(et, tt)) && (et *= z = (J = K % 4) / K, tt *= z, 1 < J && (et *= z = (J <= 3 ? 2 - J : J - 4) / J, tt *= z)), r = t * (et /= K = a(et, tt, e = Math.cos(K * Ue))) - (e /= K) * Ze, l = Ze * (tt /= K) - et * $e, i = (n = $e * e - tt * t) * (K = .5 / (o = Math.sqrt(.5 * (1 + Ze * et + $e * tt + t * e)))), f = r * K, s = l * K, (je = ve)[0] = u = o * (y = je[0]) - i * (v = je[1]) - f * (m = je[2]) - s * (d = je[3]), je[1] = c = o * v + i * y + f * d - s * m, je[2] = g = o * m - i * d + f * y + s * v, je[3] = h = o * d + i * m - f * v + s * y, b = u * (z = 2 * c), N = z * c, _ = z * g, L = z * h, w = u * (z = 2 * g), x = z * g, P = z * h, p = u * (z = 2 * h), R = 1 - (x + (q = z * h)), Y = _ - p, j = L + w, X = _ + p, G = 1 - (N + q), V = P - b, W = L - w, O = P + b, Q = 1 - (N + x), xe = (D - H) * ce, De = pe, Xe = Fe, Ge = Ce, Ve = se, Ye = T, ne = We = 0; 0 <= --Ye;) A(Ye, R * (n = Ee[Ye]) + Y * (r = Te[Ye]) + j * (l = Ie[Ye]), X * n + G * r + V * l, xe * (Ge[Ye] = (W * n + O * r + Q * l) * Ve), Ve, De, Xe);
    if (0 == ++re) for (Ye = E; 0 <= --Ye;) ke[Ye] = 0;
    for (Oe = ++re, Qe = Se, Ye = I; 0 <= --Ye;) if (Re = 1 + (qe = 1 + (Pe = 3 * Ye)), 0 < (_e = (ee = De[qe] - (U = De[Pe])) * (fe = Xe[Re] - (Z = Xe[Pe])) - (oe = De[Re] - U) * (ae = Xe[qe] - Z)) || ie) if (Be[Ye] = 191.99 * Math.abs(_e) / a(ae * (ye = Ge[Re] - ($ = Ge[Pe])) - fe * (le = Ge[qe] - $), le * oe - ye * ee, _e), 0 < _e) for (Qe[We++] = Ye, He = (ze = Ne[Ye]).length; 0 <= --He;) ke[ze[He]] = Oe; else Le[ne++] = Ye;
    for (Je = me, Ke = Ae, Ye = E, J = xe * Ve; 0 <= --Ye;) !ie && ke[Ye] != Oe || (A(Ye, R * (n = de[Ye]) + Y * (r = be[Ye]) + j * (l = we[Ye]), X * n + G * r + V * l, J * (W * n + O * r + Q * l), Ve, Je, Ke), Me[0][Ye] = ~~(ge + Je[Ye]), Me[1][Ye] = ~~(he - Ke[Ye]));
    te = We
  }

  function A(e, t, n, r, a, l, o) {
    var i = 42535295865117303e21, f = -42535295865117303e21;
    r = r < 1 ? a / (1 - r) : Number.POSITIVE_INFINITY, o[e] = 0 != n ? n * r : 0, isFinite(l[e] = 0 != t ? t * r : 0) && isFinite(o[e]) || (Math.abs(t) >= Math.abs(n) ? o[e] = (l[e] = 0 < t ? i : f) * (n / t) : l[e] = (o[e] = 0 < n ? i : f) * (t / n))
  }

  function d(e, t, n, r, a) {
    var l, o, i, f, s, u;
    De.beginPath(), De.moveTo(l = e + a, t), De.quadraticCurveTo(e, t, e, f = t + a), De.lineTo(e, u = (s = t + r) - a), De.quadraticCurveTo(e, s, l, s), De.lineTo(i = (o = e + n) - a, s), De.quadraticCurveTo(o, s, o, u), De.lineTo(o, f), De.quadraticCurveTo(o, t, i, t), De.lineTo(l, t), De.fill()
  }

  function b() {
    var e, t, n, r, a, l, o, i, f, s, u, c, g;
    for (De.fillStyle = qe, De.fillRect(0, 0, w, p), e = _e[0], t = _e[1], n = Me[0], r = Me[1], a = ie ? Pe : xe, i = ie ? 2 : 1; 0 <= --i;) for (s = 0 != i ? ne : te, u = 0 != i ? Le : Se, c = ie ? 0 != i ? je : Ye : Re, o = 0; o < s; o++) {
      for (g = (f = Ne[l = u[o]]).length; 0 <= --g;) e[g] = n[f[g]], t[g] = r[f[g]];
      De.fillStyle = a[l][255 & Be[l]], function (e, t, n) {
        var r;
        for (De.beginPath(), De.moveTo(e[0], t[0]), r = 0; ++r < n;) De.lineTo(e[r], t[r]);
        De.fill()
      }(e, t, f.length), De.strokeStyle = c, function (e, t, n) {
        var r;
        for (De.beginPath(), De.moveTo(e[0], t[0]), r = 0; ++r < n;) De.lineTo(e[r], t[r]);
        De.closePath(), De.stroke()
      }(e, t, f.length)
    }
    De.fillStyle = "lightGray", d(L, l = P, R, Y, o = O), De.strokeStyle = qe, De.beginPath(), De.moveTo(j, l), De.lineTo(j, q), De.closePath(), De.stroke(), De.fillStyle = "#505050", d(D, X, V, W, o), ie || (De.fillStyle = _b[4][64], De.fillRect(K, Z, ee, ee)), De.strokeStyle = De.fillStyle = "black", De.strokeRect(K, Z, ee, ee), 0 < (l = N) && (De.font = ~~(w / 20) + "px Courier New", De.fillText("WARNING: " + l + (1 == l ? " face is non-planar" : " faces are non-planar"), 0, 63 * p >> 6)), D == Q && (De.font = "10px Courier New", De.fillText("v3.0", w >> 6, 63 * p >> 6))
  }

  var w, p, F, C, E, T, I, N, _, M, B, k, S, L, x, P, q, R, Y, j, D, X, G, V, W, O, Q, z, H, J, K, U, Z, $, ee, te, ne, re, ae, le, oe, ie, fe, se, ue, ce, ge, he, ye, ve, me, Ae, de, be, we, pe, Fe, Ce, Ee, Te, Ie, Ne, _e, Me, Be, ke, Se, Le, xe, Pe, qe, Re, Ye, je, De;
  _j[_j.length] = (De = t.getContext("2d"), void function () {
    var i, g, A, d, _, J, te, ne, ae, Xe, Ge, Ve, We, Oe, Qe, ze, He, Je, Ke, Ue, Ze, $e, et, tt, nt, rt, at, lt, ot, it, ft, st, ut, ct, gt, ht, yt, vt, mt, At, dt, bt, wt, pt, Ft, Ct, Et, Tt, It, Nt, _t, Mt, Bt, kt, St, Lt, xt, Pt, qt, Rt, Yt = 3019169939857233e154;
    if (M = k = F = (vt = w = t.width) >> 1, B = S = C = (mt = p = t.height) >> 1, qe = (At = e.getElementsByClassName("Background")).length ? At[0].value : "#606060", Re = (At = e.getElementsByClassName("EdgeColor")).length ? At[0].value : "black", Ye = (At = e.getElementsByClassName("WireColor")).length ? At[0].value : "black", De.fillStyle = qe, De.fillRect(0, 0, vt, mt), G = (q = (P = nt = mt >> 6) + (Y = rt = mt < 256 ? 8 : mt >> 5)) - 1, X = nt + 1, O = rt >> 1, D = (H = at = (3 * (et = (z = (x = (L = vt >> 2) + (R = vt >> 1)) - (V = W = rt - 2) - 1) - (Q = L + 1)) >> 2) + Q) + (et >> 4), j = at + (V >> 1), ce = (ye = .5 / (ge = vt >> 1)) / (Ue = 3 * (z - at) >> 3), (At = e.getElementsByClassName("Perspective")).length && ((D = at + ~~(parseFloat(At[0].value) * Ue)) > z && (D = z), D < Q && (D = Q)), U = (K = vt >> 6) + (ee = ot = rt << 1), $ = (Z = nt) + ot, (dt = ve = new Float64Array(4))[0] = 1, (At = e.getElementsByClassName("Quaternion")).length) {
      for (g = At[0].value.match(/[^ \t\n\r\f,;]+/g), nt = -1, Ue = 0; ++nt < 4;) Ue += (dt[nt] = parseFloat(g[nt])) * dt[nt];
      for (0 == Ue && (dt[0] = Ue = 1, dt[1] = dt[2] = dt[3] = 0), nt = 4, Ue = Math.sqrt(Ue); 0 <= --nt;) dt[nt] /= Ue
    }
    for (g = e.getElementsByClassName("Counts")[0].value.match(/[^ \t\n\r\f,;]+/g), Ze = parseInt(g[0], 10), ke = new Int32Array((Et = we = new Float64Array((Ct = be = new Float64Array((Ft = de = new Float64Array((pt = Ae = new Float64Array((wt = me = new Float64Array(bt = E = parseInt(g[1], 10))).length)).length)).length)).length)).length), Me = Array(nt = 2); 0 <= --nt;) Me[nt] = new Int32Array(ke.length);
    for (Ie = new Float64Array((Te = new Float64Array((Ee = new Float64Array((Ce = new Float64Array((Fe = new Float64Array((pe = new Float64Array(3 * (Pe = Array((xe = Array((Be = new Int8Array((Le = new Int32Array((Se = new Int32Array((It = Ne = Array(Tt = I = parseInt(g[2], 10))).length)).length)).length)).length)).length)).length)).length)).length)).length)).length)).length), Nt = Array(Tt), nt = Tt; 0 <= --nt;) Nt[nt] = new Float64Array(4);
    if (_t = new Float64Array(Ze), 0 < Ze) for (g = e.getElementsByClassName("Constants")[0].value.match(/[^ \t\n\r\f,;]+/g), nt = -1; ++nt < Ze;) _t[nt] = parseFloat(g[nt]);
    for (Mt = new Float64Array(bt), g = e.getElementsByClassName("Vertices")[0].value.match(/[^ \t\n\r\f,;]+/g), Bt = 0, it = nt = -1; ++it < bt;) (Mt[it] = Ue = a(Ft[it] = l(g[++nt], _t), Ct[it] = l(g[++nt], _t), Et[it] = l(g[++nt], _t))) > Bt && (Bt = Ue);
    for (_t = null, gt = new Int32Array(Tt), g = e.getElementsByClassName("Faces")[0].value.match(/[^ \t\n\r\f,;]+/g), ct = new Int32Array(tt = 0), nt = it = -1, $e = 0; ++nt < Tt;) {
      for (at = 0; "#" != (i = g[++it]).charAt(0);) ke[at++] = parseInt(i, 10);
      if (n(ke, 0, It[nt] = new Int32Array(at), 0, at), $e < at && ($e = at), 1 < i.length) {
        for (rt = 16777215 & parseInt(i.substring(1), 16), lt = tt; 0 <= --lt && ct[lt] != rt;) ;
        lt < 0 && (n(ct, 0, kt = new Int32Array(ct.length + 32), 0, ct.length), (ct = kt)[lt = tt++] = rt), gt[nt] = lt
      } else xe[nt] = _b[31 & at], Pe[nt] = _c[31 & at]
    }
    for (nt = bt; 0 <= --nt;) ke[nt] = 0;
    if (je = "#888888", se = ge * ((At = e.getElementsByClassName("Scale")).length ? .75 * parseFloat(At[0].value) : .75) / (fe = Bt), ue = 1 / ge, ge += .5, he = .5 + (mt >> 1), ht = yt = null, 0 != tt) for (yt = Array((ht = Array(nt = tt)).length); 0 <= --nt;) for (yt[nt] = Array(192), ht[nt] = Array(192), rt = 192, Pt = ht[nt], qt = yt[nt], Lt = (St = ct[nt]) >> 8 & 255, xt = 255 & St, St >>= 16; 0 <= --rt;) Pt[rt] = "rgb(" + ~~((St * (at = rt + 64) + 127) / 255) + "," + ~~((Lt * at + 127) / 255) + "," + ~~((xt * at + 127) / 255) + ")", qt[rt] = "rgba" + Pt[rt].slice(3, -1) + ",.125)";
    for (st = new Float64Array((ft = new Float64Array($e)).length), _e = Array(nt = 2); 0 <= --nt;) _e[nt] = new Int32Array(st.length);
    for (nt = T = N = 0, ct = null; nt < Tt; nt++) {
      for (null == xe[nt] && (xe[nt] = ht[at = gt[nt]], Pe[nt] = yt[at]), rt = (ut = It[nt]).length, Qe = ze = He = 0, J = Ft[it = ut[1]], te = Ct[it], ne = Et[it], ae = Ft[it = ut[0]], Xe = Ct[it], Ge = Et[it]; Qe += Xe * (ne - (Oe = Et[it = ut[--rt]])), ze += Ge * (J - (Ve = Ft[it])), He += ae * (te - (We = Ct[it])), !(rt <= 0);) J = ae, te = Xe, ne = Ge, ae = Ve, Xe = We, Ge = Oe;
      for (0 == (Ue = a(Qe, ze, He)) && 0 == (Ue = a(Qe *= Yt, ze *= Yt, He *= Yt)) && (Ue = He = 1), ae = Math.abs((qt = Nt[nt])[0] = Qe /= Ue), Xe = Math.abs(qt[1] = ze /= Ue), Ge = Math.abs(qt[2] = He /= Ue), qt[3] = -(J * Qe + te * ze + ne * He), ae = (1 - (Ge = -Qe) * Ge / (Ue = 1 + He * (Rt = He < 0 ? -1 : 1))) * Rt, We = 1 - (Oe = -ze * Rt) * Oe / Ue, Ve = (Xe = Qe * Oe / Ue) * Rt, rt = ut.length, J = Ft[it = ut[0]], te = Ct[it], ne = Et[it]; 0 <= --rt;) ft[rt] = wt[it = ut[rt]] = ae * (A = Ft[it] - J) + Xe * (d = Ct[it] - te) + Ge * (_ = Et[it] - ne), st[rt] = pt[it] = Ve * A + We * d + Oe * _;
      if (r(A = J + ae * (Je = function (e, t, n, r, a, l) {
        var o, i, f, s, u, c, g, h, y, v, m, A, d, b;
        e:for (o = n; ;) for (d = .5 * ((i = e[r]) + e[a]), b = .5 * ((f = t[r]) + t[a]), u = l, s = (i -= d) * i + (f -= b) * f; ;) {
          for (; u < n; u++) if ((i = e[u] - d) * i + (f = t[u] - b) * f > s) {
            if (0 != l) {
              a = r, n = r = u, l--;
              continue e
            }
            d = (d = e[r]) + (m = ((g = t[u] - (b = t[r])) * (h = (i = e[a] - d) * i + (f = t[a] - b) * f) - f * (y = (c = e[u] - d) * c + g * g)) * (v = .5 / (i * g - f * c))), b += A = (i * y - c * h) * v, s = m * m + A * A
          }
          if (2 == l) return t[0] = b, d;
          u = n + 1, n = 0 == l ? a : o, r = a, a = l++
        }
      }(ft, st, ut.length, 0, 1, 2)) + Ve * (Ke = st[0]), d = te + Xe * Je + We * Ke, _ = ne + Ge * Je + Oe * Ke), r(A + (Ue = 5.960464477539063e-8 * Bt) * ae, d + Ue * Xe, _ + Ue * Ge), r(A + Ue * Ve, d + Ue * We, _ + Ue * Oe), 2 < (rt = ut.length - 1)) e:for (; 0 <= (at = rt--);) for (J = Ft[it = ut[at]], te = Ct[it], ne = Et[it]; 0 <= --at;) if (Math.abs((Qe * (Ft[it = ut[at]] - J) + ze * (Ct[it] - te) + He * (Et[it] - ne)) / Mt[it]) > 2.3283064365386963e-10) {
        N++;
        break e
      }
    }
    Nt = Mt = ft = st = ht = yt = gt = null, le = oe = ie = !1, t.addEventListener("contextmenu", o, !1), t.addEventListener("mousedown", f, !1), t.addEventListener("touchstart", s, !1), document.addEventListener("mouseup", u, !1), document.addEventListener("touchend", c, !1), document.addEventListener("mousemove", h, !1), document.addEventListener("touchmove", y, !1), document.addEventListener("mouseleave", v, !1), re = 0, m(), b()
  }())
}

window.addEventListener("load", _k, !1);
