"use strict";
var _b, _c, _j;

function _k() {
  var e, t, n, r, a, l, o, i = [131072, 512, 2, 131584, 131330, 514, 131328, 65794, 513, 66048, 256, 1, 257, 258, 65536, 65537, 65538, 65792, 131329, 66049, 66050, 131073, 131074, 131585];
  if (null == _b) {
    for (_c = Array(32), a = _b = Array(32), t = 32; 0 <= --t;) _c[t] = Array(192), a[t] = Array(192);
    for (e = 192; 0 <= --e;) {
      for (r = e + 64, t = 24; 0 <= --t;) n = i[t], a[t][e] = "rgb(" + ((n = n * (r >> 1) + (n >> 1 & 65793) * (1 & r)) >> 16) + "," + (n >> 8 & 255) + "," + (255 & n) + ")";
      for (t = 9; 0 < --t;) a[t + 23][e] = "rgb(" + (n = r * t >> 3) + "," + n + "," + n + ")";
      for (t = 32; 0 <= --t;
      ) _c[t][e] = "rgba" + a[t][e].slice(3, -1) + ",.125)"
    }
  }
  for (l = document.getElementsByTagName("div"), _j = [], e = -1; ++e < l.length;) "miniConvex" == l[e].getAttribute("name") && (o = l[e].getElementsByTagName("canvas")).length && _l(l[e], o[0])
}

function _l(se, ue) {
  function ge(e, t, n, r, a) {
    var l, o = r + a;
    if ((l = t - r) < 0) for (; --o >= r;) n[o] = e[o + l]; else for (; r < o; r++) n[r] = e[r + l]
  }

  function he(e, t, n) {
    var r;
    return Mt[r = ke++] = e, Bt[r] = t, St[r] = n, r
  }

  function me(e, t, n) {
    return Math.sqrt((r = e, a = t, l = n, a *= a, (r *= r) < (l *= l) && a < l ? r + a + l : r < a ? r + l + a : a + l + r))
      ;
    var r, a, l
  }

  function ce(e, t) {
    var n;
    return e = e.substring(1 - (n = "-" == e.charAt(0) ? -1 : 1) >> 1), n * ("C" == e.charAt(0) ? t[parseInt(e.substring(1), 10)] : parseFloat(e))
  }

  function ye(e) {
    e.preventDefault()
  }

  function n(e, t, n) {
    var r, a, l, o;
    e ? ut = !0 : st = !0, a = ~~(t - (r = ue.getBoundingClientRect()).left + .5), l = ~~(n - r.top + .5), s = 0, De < a && a <= Xe && Ge < l && l <= Ve ? 0 <= (s = 0 < (f = a - (o = je)) && f <= Je && ze < l && l <= He ? -1 : 1) && (a <= o ? Ze < o && je-- : o + Je < a && o < $e && je++) : tt < a && a <= nt && rt < l && l <= at ? (s = 1, gt ^= !0) : (Pe = a, qe = i = l), 0 < s && (Re = Pe, Ye = qe, Ce(), Te())
  }

  function ve(e) {
    e.button && 2 != e.button || n(e.button, e.clientX, e.clientY)
  }

  function Ae(e) {
    var t;
    e.preventDefault(), n(0, (t = e.targetTouches[0]).clientX, t.clientY)
  }

  function de(e) {
    e.button && 2 != e.button || (e.button ? ut = !1 : st = !1)
  }

  function we(e) {
    e.preventDefault(), st = !1
  }

  function r(e, t) {
    var n, r, a, l, o;
    st | ut && s <= 0 && (r = ~~(e - (n = ue.getBoundingClientRect()).left + .5), Re = Pe, Ye = qe, s < 0 ? je = (r -= f) < Ze ? Ze : $e < r ? $e : r : (a = ~~(t - n.top + .5), st && (Pe = r, qe = a), ut && .5 <= (o = (l = ct * Math.exp((a - i) * dt)) * ht) && (ct = l, yt = .75 / (mt < o ? .5 * (o + mt) : o)),
      i = a), Ce(), Te())
  }

  function be(e) {
    r(e.clientX, e.clientY)
  }

  function pe(e) {
    var t;
    e.preventDefault(), r((t = e.targetTouches[0]).clientX, t.clientY)
  }

  function Fe() {
    st = ut = !1
  }

  function Ce() {
    var e, t, n, r, a, l, o, i, f, s, u, g, h, c, y, v, m, A, d, w, b, p, F, C, E, T, I, N, M, B, S, k, L, x, P, q, R, Y, D, X, G, V, W, O, Q, _, j, z, H, J, K, U, Z, $, ee, te, ne, re, ae, le, oe, ie, fe, se, ue, ge = 1.5707963267948966, he = (Re - Me) * (q = yt), ce = (Be - Ye) * q, ye = (Pe - Me) * q, ve = (Be - qe) * q;
    for (1 <= (Y = Math.hypot(he, ce)) ? (0 != (q = Math.hypot(ye, ve)) && (ye *= q = 1 - (Y - 1) / q, ve *= q), t = 0) : (Y = me(he, ce,
      t = Math.cos(Y * ge)), t /= Y), he /= Y, ce /= Y, 1 < (Y = Math.hypot(ye, ve)) && (ye *= q = (R = Y % 4) / Y, ve *= q, 1 < R && (ye *= q = (R <= 3 ? 2 - R : R - 4) / R, ve *= q)), r = t * (ye /= Y = me(ye, ve, e = Math.cos(Y * ge))) - (e /= Y) * he, a = he * (ve /= Y) - ye * ce, o = (n = ce * e - ve * t) * (Y = .5 / (l = Math.sqrt(.5 * (1 + he * ye + ce * ve + t * e)))), i = r * Y, f = a * Y, ($ = wt)[0] = s = l * (c = $[0]) - o * (y = $[1]) - i * (v = $[2]) - f * (m = $[3]), $[1] = u = l * y + o * c + i * m - f * v, $[2] = g = l * v - o * m + i * c + f * y, $[3] = h = l * m + o * v - i * y + f * c, A = s * (q = 2 * u), b = q * u, p = q * g, F = q * h, d = s * (q = 2 * g), C = q * g, E = q * h, w = s * (q = 2 * h), I = 1 - (C + (T = q * h)), N = p - w, M = F + d, B = p + w, S = 1 - (b + T),
           k = E - A, L = F - d, x = E + A, P = 1 - (b + C), H = (je - et) * vt, ee = Tt, te = It, ne = Nt, re = ct, Z = ke, it = ae = 0; 0 <= --Z;) Ee(Z, I * (n = Mt[Z]) + N * (r = Bt[Z]) + M * (a = St[Z]), B * n + S * r + k * a, H * (ne[Z] = (L * n + x * r + P * a) * re), re, ee, te);
    if (0 == ++ft) for (Z = Se; 0 <= --Z;) qt[Z] = 0;
    for (le = ++ft, oe = Rt, Z = Le; 0 <= --Z;) if (U = 1 + (K = 1 + (J = 3 * Z)), 0 < (z = (V = ee[K] - (D = ee[J])) * (_ = te[U] - (X = te[J])) - (Q = ee[U] - D) * (W = te[K] - X)) || gt) if (Pt[Z] = 191.99 * Math.abs(z) / me(W * (j = ne[U] - (G = ne[J])) - _ * (O = ne[K] - G), O * Q - j * V, z), 0 < z) for (oe[ae++] = Z, fe = (ie = kt[Z]).length; 0 <= --fe;) qt[ie[fe]] = le; else Yt[it++] = Z;
    for (
      se = bt, ue = pt, Z = Se, R = H * re; 0 <= --Z;) !gt && qt[Z] != le || (Ee(Z, I * (n = Ft[Z]) + N * (r = Ct[Z]) + M * (a = Et[Z]), B * n + S * r + k * a, R * (L * n + x * r + P * a), re, se, ue), xt[0][Z] = ~~(mt + se[Z]), xt[1][Z] = ~~(At - ue[Z]));
    ot = ae
  }

  function Ee(e, t, n, r, a, l, o) {
    var i = 42535295865117303e21, f = -42535295865117303e21;
    r = r < 1 ? a / (1 - r) : Number.POSITIVE_INFINITY, o[e] = 0 != n ? n * r : 0, isFinite(l[e] = 0 != t ? t * r : 0) && isFinite(o[e]) || (Math.abs(t) >= Math.abs(n) ? o[e] = (l[e] = 0 < t ? i : f) * (n / t) : l[e] = (o[e] = 0 < n ? i : f) * (t / n))
  }

  function c(e, t, n, r, a) {
    var l, o, i, f, s, u;
    Qt.beginPath(), Qt.moveTo(
      l = e + a, t), Qt.quadraticCurveTo(e, t, e, f = t + a), Qt.lineTo(e, u = (s = t + r) - a), Qt.quadraticCurveTo(e, s, l, s), Qt.lineTo(i = (o = e + n) - a, s), Qt.quadraticCurveTo(o, s, o, u), Qt.lineTo(o, f), Qt.quadraticCurveTo(o, t, i, t), Qt.lineTo(l, t), Qt.fill()
  }

  function Te() {
    var e, t, n, r, a, l, o, i, f, s, u, g, h;
    for (Qt.fillStyle = Gt, Qt.fillRect(0, 0, Ie, Ne), e = Lt[0], t = Lt[1], n = xt[0], r = xt[1], a = gt ? Xt : Dt, i = gt ? 2 : 1; 0 <= --i;) for (s = 0 != i ? it : ot, u = 0 != i ? Yt : Rt, g = gt ? 0 != i ? Ot : Wt : Vt, o = 0; o < s; o++) {
      for (h = (f = kt[l = u[o]]).length; 0 <= --h;) e[h] = n[f[h]], t[h] = r[f[h]]
      ;
      Qt.fillStyle = a[l][255 & Pt[l]], function (e, t, n) {
        var r;
        for (Qt.beginPath(), Qt.moveTo(e[0], t[0]), r = 0; ++r < n;) Qt.lineTo(e[r], t[r]);
        Qt.fill()
      }(e, t, f.length), Qt.strokeStyle = g, function (e, t, n) {
        var r;
        for (Qt.beginPath(), Qt.moveTo(e[0], t[0]), r = 0; ++r < n;) Qt.lineTo(e[r], t[r]);
        Qt.closePath(), Qt.stroke()
      }(e, t, f.length)
    }
    Qt.fillStyle = "lightGray", c(De, l = Ge, We, Oe, o = Ue), Qt.strokeStyle = Gt, Qt.beginPath(), Qt.moveTo(Qe, l), Qt.lineTo(Qe, Ve), Qt.closePath(), Qt.stroke(), Qt.fillStyle = "#505050", c(je, ze, Je, Ke, o), gt || (
      Qt.fillStyle = _b[4][64], Qt.fillRect(tt, rt, lt, lt)), Qt.strokeStyle = Qt.fillStyle = "black", Qt.strokeRect(tt, rt, lt, lt), 0 < (l = xe) && (Qt.font = ~~(Ie / 20) + "px Courier New", Qt.fillText("WARNING: " + l + (1 == l ? " face is non-planar" : " faces are non-planar"), 0, 63 * Ne >> 6)), je == Ze && (Qt.font = "10px Courier New", Qt.fillText("v3.0", Ie >> 6, 63 * Ne >> 6))
  }

  var Ie, Ne, Me, Be, Se, ke, Le, xe, i, Pe, qe, Re, Ye, De, Xe, Ge, Ve, We, Oe, Qe, je, ze, He, Je, Ke, Ue, Ze, $e, et, f, tt, nt, rt, at, lt, ot, it, ft, s, st, ut, gt, ht, ct, yt, vt, mt, At, dt, wt, bt, pt, Ft, Ct, Et, Tt, It, Nt, Mt,
    Bt, St, kt, Lt, xt, Pt, qt, Rt, Yt, Dt, Xt, Gt, Vt, Wt, Ot, Qt;
  _j[_j.length] = (Qt = ue.getContext("2d"), void function () {
    var e, t, n, r, a, l, o, i, f, s, u, g, h, c, y, v, m, A, d, w, b, p, F, C, E, T, I, N, M, B, S, k, L, x, P, q, R, Y, D, X, G, V, W, O, Q, _, j, z, H, J, K, U, Z, $, ee, te, ne, re, ae, le, oe = 2.3283064365386963e-10, ie = 5.960464477539063e-8, fe = 3019169939857233e154;
    if (Pe = Re = Me = (Y = Ie = ue.width) >> 1, qe = Ye = Be = (D = Ne = ue.height) >> 1, Gt = (X = se.getElementsByClassName("Background")).length ? X[0].value : "#606060", Vt = (X = se.getElementsByClassName("EdgeColor")
    ).length ? X[0].value : "black", Wt = (X = se.getElementsByClassName("WireColor")).length ? X[0].value : "black", Qt.fillStyle = Gt, Qt.fillRect(0, 0, Y, D), He = (Ve = (Ge = E = D >> 6) + (Oe = T = D < 256 ? 8 : D >> 5)) - 1, ze = E + 1, Ue = T >> 1, je = (et = I = (3 * (F = ($e = (Xe = (De = Y >> 2) + (We = Y >> 1)) - (Je = Ke = T - 2) - 1) - (Ze = De + 1)) >> 2) + Ze) + (F >> 4), Qe = I + (Je >> 1), vt = (dt = .5 / (mt = Y >> 1)) / (w = 3 * ($e - I) >> 3), (X = se.getElementsByClassName("Perspective")).length && ((je = I + ~~(parseFloat(X[0].value) * w)) > $e && (je = $e), je < Ze && (je = Ze)), nt = (tt = Y >> 6) + (lt = M = T << 1), at = (rt = E) + M, (
      G = wt = new Float64Array(4))[0] = 1, (X = se.getElementsByClassName("Quaternion")).length) {
      for (t = X[0].value.match(/[^ \t\n\r\f,;]+/g), E = -1, w = 0; ++E < 4;) w += (G[E] = parseFloat(t[E])) * G[E];
      for (0 == w && (G[0] = w = 1, G[1] = G[2] = G[3] = 0), E = 4, w = Math.sqrt(w); 0 <= --E;) G[E] /= w
    }
    for (t = se.getElementsByClassName("Counts")[0].value.match(/[^ \t\n\r\f,;]+/g), b = parseInt(t[0], 10), qt = new Int32Array((j = Et = new Float64Array((_ = Ct = new Float64Array((Q = Ft = new Float64Array((O = pt = new Float64Array((W = bt = new Float64Array(V = Se = parseInt(t[1], 10))
    ).length)).length)).length)).length)).length), xt = Array(E = 2); 0 <= --E;) xt[E] = new Int32Array(qt.length);
    for (St = new Float64Array((Bt = new Float64Array((Mt = new Float64Array((Nt = new Float64Array((It = new Float64Array((Tt = new Float64Array(3 * (Xt = Array((Dt = Array((Pt = new Int8Array((Yt = new Int32Array((Rt = new Int32Array((H = kt = Array(z = Le = parseInt(t[2], 10))).length)).length)).length)).length)).length)).length)).length)).length)).length)).length)).length), J = Array(z), E = z; 0 <= --E;) J[E] = new Float64Array(4);
    if (
      K = new Float64Array(b), 0 < b) for (t = se.getElementsByClassName("Constants")[0].value.match(/[^ \t\n\r\f,;]+/g), E = -1; ++E < b;) K[E] = parseFloat(t[E]);
    for (U = new Float64Array(V), t = se.getElementsByClassName("Vertices")[0].value.match(/[^ \t\n\r\f,;]+/g), Z = 0, B = E = -1; ++B < V;) (U[B] = w = me(Q[B] = ce(t[++E], K), _[B] = ce(t[++E], K), j[B] = ce(t[++E], K))) > Z && (Z = w);
    for (K = null, P = new Int32Array(z), t = se.getElementsByClassName("Faces")[0].value.match(/[^ \t\n\r\f,;]+/g), x = new Int32Array(C = 0), E = B = -1, p = 0; ++E < z;) {
      for (I = 0; "#" != (
        e = t[++B]).charAt(0);) qt[I++] = parseInt(e, 10);
      if (ge(qt, 0, H[E] = new Int32Array(I), 0, I), p < I && (p = I), 1 < e.length) {
        for (T = 16777215 & parseInt(e.substring(1), 16), N = C; 0 <= --N && x[N] != T;) ;
        N < 0 && (ge(x, 0, $ = new Int32Array(x.length + 32), 0, x.length), (x = $)[N = C++] = T), P[E] = N
      } else Dt[E] = _b[31 & I], Xt[E] = _c[31 & I]
    }
    for (E = V; 0 <= --E;) qt[E] = 0;
    if (Ot = "#888888", ct = mt * ((X = se.getElementsByClassName("Scale")).length ? .75 * parseFloat(X[0].value) : .75) / (ht = Z), yt = 1 / mt, mt += .5, At = .5 + (D >> 1), q = R = null, 0 != C) for (R = Array((q = Array(E = C)).length); 0 <= --E;
    ) for (R[E] = Array(192), q[E] = Array(192), T = 192, re = q[E], ae = R[E], te = (ee = x[E]) >> 8 & 255, ne = 255 & ee, ee >>= 16; 0 <= --T;) re[T] = "rgb(" + ~~((ee * (I = T + 64) + 127) / 255) + "," + ~~((te * I + 127) / 255) + "," + ~~((ne * I + 127) / 255) + ")", ae[T] = "rgba" + re[T].slice(3, -1) + ",.125)";
    for (k = new Float64Array((S = new Float64Array(p)).length), Lt = Array(E = 2); 0 <= --E;) Lt[E] = new Int32Array(k.length);
    for (E = ke = xe = 0, x = null; E < z; E++) {
      for (null == Dt[E] && (Dt[E] = q[I = P[E]], Xt[E] = R[I]), T = (L = H[E]).length, y = v = m = 0, l = Q[B = L[1]], o = _[B], i = j[B], f = Q[B = L[0]], s = _[B],
             u = j[B]; y += s * (i - (c = j[B = L[--T]])), v += u * (l - (g = Q[B])), m += f * (o - (h = _[B])), !(T <= 0);) l = f, o = s, i = u, f = g, s = h, u = c;
      for (0 == (w = me(y, v, m)) && 0 == (w = me(y *= fe, v *= fe, m *= fe)) && (w = m = 1), f = Math.abs((ae = J[E])[0] = y /= w), s = Math.abs(ae[1] = v /= w), u = Math.abs(ae[2] = m /= w), ae[3] = -(l * y + o * v + i * m), f = (1 - (u = -y) * u / (w = 1 + m * (le = m < 0 ? -1 : 1))) * le, h = 1 - (c = -v * le) * c / w, g = (s = y * c / w) * le, T = L.length, l = Q[B = L[0]], o = _[B], i = j[B]; 0 <= --T;) S[T] = W[B = L[T]] = f * (n = Q[B] - l) + s * (r = _[B] - o) + u * (a = j[B] - i), k[T] = O[B] = g * n + h * r + c * a;
      if (he(n = l + f * (A = function (e, t, n, r, a, l) {
        var o, i, f, s
          , u, g, h, c, y, v, m, A, d, w;
        e:for (o = n; ;) for (d = .5 * ((i = e[r]) + e[a]), w = .5 * ((f = t[r]) + t[a]), u = l, s = (i -= d) * i + (f -= w) * f; ;) {
          for (; u < n; u++) if ((i = e[u] - d) * i + (f = t[u] - w) * f > s) {
            if (0 != l) {
              a = r, n = r = u, l--;
              continue e
            }
            d = (d = e[r]) + (m = ((h = t[u] - (w = t[r])) * (c = (i = e[a] - d) * i + (f = t[a] - w) * f) - f * (y = (g = e[u] - d) * g + h * h)) * (v = .5 / (i * h - f * g))), w += A = (i * y - g * c) * v, s = m * m + A * A
          }
          if (2 == l) return t[0] = w, d;
          u = n + 1, n = 0 == l ? a : o, r = a, a = l++
        }
      }(S, k, L.length, 0, 1, 2)) + g * (d = k[0]), r = o + s * A + h * d, a = i + u * A + c * d), he(n + (w = Z * ie) * f, r + w * s, a + w * u), he(n + w * g, r + w * h, a + w * c), 2 < (T = L.length - 1)
      ) e:for (; 0 <= (I = T--);) for (l = Q[B = L[I]], o = _[B], i = j[B]; 0 <= --I;) if (Math.abs((y * (Q[B = L[I]] - l) + v * (_[B] - o) + m * (j[B] - i)) / U[B]) > oe) {
        xe++;
        break e
      }
    }
    J = U = S = k = q = R = P = null, st = ut = gt = !1, ue.addEventListener("contextmenu", ye, !1), ue.addEventListener("mousedown", ve, !1), ue.addEventListener("touchstart", Ae, !1), document.addEventListener("mouseup", de, !1), document.addEventListener("touchend", we, !1), document.addEventListener("mousemove", be, !1), document.addEventListener("touchmove", pe, !1), document.addEventListener("mouseleave"
      , Fe, !1), ft = 0, Ce(), Te()
  }())
}

window.addEventListener("load", _k, !1);