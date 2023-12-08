let _b, _c, _m;

function _n() {
  let r;
  let n;
  let e;
  let t;
  let a;
  let l;
  let f;
  const o = [131072, 512, 2, 131584, 131330, 514, 131328, 65794, 513, 66048, 256, 1, 257, 258, 65536, 65537, 65538, 65792, 131329, 66049, 66050, 131073, 131074, 131585];
  if (null == _b) {
    for (_c = Array(32), a = _b = Array(32), n = 32; 0 <= --n;) _c[n] = Array(192), a[n] = Array(192);
    for (r = 192; 0 <= --r;) {
      for (t = r + 64, n = 24; 0 <= --n;) e = o[n], a[n][r] = `rgb(${(e = e * (t >> 1) + (e >> 1 & 65793) * (1 & t)) >> 16},${e >> 8 & 255},${255 & e})`;
      for (n = 9; 0 < --n;) a[n + 23][r] = `rgb(${e = t * n >> 3},${e},${e})`;
      for (n = 32; 0 <= --n;
      ) _c[n][r] = `rgba${a[n][r].slice(3, -1)},.125)`
    }
  }
  for (l = document.querySelectorAll('.solid__content'), _m = [], r = -1; ++r < l.length;) {
    (f = l[r].querySelectorAll('.solid__canvas')).length && _o(l[r], f[0])
  }
}

function _o(jt, zt) {
  function Ht(r, n, e, t, a, l, f, o, h, g, i) {
    for (let y, A, u, w, s, I = r.length; 0 <= --I;) (y = n[(s = r[I]) >> 7])[384 + (s &= 127)] = l * (A = y[s] - e) + f * (u = y[128 + s] - t) + o * (w = y[256 + s] - a), y[512 + s] = h * A + g * u + i * w
  }

  function f(r, n, e) {
    r - ml < n[e] && (n[e] = r - ml), r + ml > n[++e] && (n[e] = r + ml)
  }

  function Jt(r, n, e) {
    let t, a, l = r.length;
    for (e[1] = e[3] = e[5] = -(e[0] = e[2] = e[4] = Number.MAX_VALUE); 0 <= --l;) f((t = n[(a = r[l]) >> 7])[a &= 127], e, 0), f(t[128 + a], e, 2), f(t[256 + a], e, 4)
  }

  function a(r, n, e) {
    for (var t, a = r[n]; (t = 2 * n + 1) < e && (t < e - 1 && r[t] < r[t + 1] && t++, !(a >= r[t])); r[n] = r[t], n = t) ;
    r[n] = a
  }

  function y(r, n) {
    for (var e, t = (n >> 1) - 1; 0 <= t; t--) a(r, t, n);
    for (t = n - 1; 0 < t; t--) e = r[t], r[t] = r[0], r[0] = e, a(r, 0, t)
  }

  function Kt(r, n, e, t) {
    let a, l, f, o, h, g, i;
    for (y(r, e), y(n, t), a = l = f = o = h = 0; ;) if ((g = r[f]) < (i = n[o])) {
      if (2 == (h ^= 1) && (l += g - a), a = g, ++f >= e) return l
    } else if (
      1 == (h ^= 2) && (l += i - a), a = i, ++o >= t) return l
  }

  function Zt(r, n, e, t, a, l, f, o, h, g, i, y) {
    for (var A, u, w, s, I, c, b, v, M, m, F, k, p, d, E, N, T, C, L, B, S, U, X, V, P, _, q, x, R, Y, D, G, W, O, Q, j, z = 3019169939857233e154, H = g.length; 0 <= --H;) g[H] = 0;
    for (R = Array(H = r), d = l[0], E = l[1], N = l[2]; 0 <= --H;) for (R[H] = D = new Int32Array(L = (Y = e[H >> 9][511 & H]).length), s = (T = t[(q = Y[0]) >> 7])[B = 127 & q], I = T[B + 128], c = T[B + 256]; 0 <= --L; q = _, s = b, I = v, c = M) {
      0 == (p = Ia(A = s - (b = (T = t[(_ = Y[L]) >> 7])[B = 127 & _]), u = I - (v = T[B + 128]), w = c - (M = T[B + 256]))) && 0 == (p = Ia(A *= z, u *= z, w *= z)) || (
        A /= p = w < 0 ? -p : p, u /= p, w /= p), (D[L] = P = ua(A, u, w, b, v, M, a, l, f, o, n)) == n && n++, k = N[P];
      r:for (C = _, U = q, G = h[P], p = 0 == (W = (m = Math.abs(d[P])) > (F = Math.abs(E[P])) ? k < m ? 0 : 256 : k < F ? 128 : 256) ? b : 128 == W ? v : M, O = 0 == W ? s : 128 == W ? I : c; 0 <= C; C = U, U = -1, p = O) {
        for (Q = 0, S = B = g[P]; (V = Q + S >> 1) < S;) {
          if ((X = G[V]) == C) continue r;
          p < t[X >> 7][(127 & X) + W] ? S = V : Q = V + 1
        }
        g[P]++ == (j = G).length && la(G, 0, h[P] = G = new Int32Array(G.length + 4), 0, V), la(j, V, G, V + 1, B - V), G[V] = C
      }
    }
    for (H = r, x = new Int32Array(11); 0 <= --H;) {
      for (L = S = 0, Y = e[H >> 9][511 & H], D = R[H]; L < Y.length;) {
        for (B = g[P = D[L]]
               , G = h[P], _ = Y[L], q = Y[++L % Y.length], C = -1; (P = G[--B]) != _;) P == q && (C = 1);
        for (; (_ = G[B]) != q; B += C) x = oa(x, S++, _, 8), null != y && y[_]++
      }
      if (null != (Y = null == i ? S == Y.length ? null : e[H >> 9][511 & H] = new Int32Array(S) : i[H] = new Int32Array(3 * S)) && la(x, 0, Y, 0, S), null != i) for (L = S << 1; --L >= S;) Y[L] = -1
    }
    return n
  }

  function $t(r, n, e, t, a, l, f, o, h) {
    let g;
    let i;
    let y;
    let A;
    let u;
    let w;
    let s;
    let I;
    const c = 5820766091346741e-26;
    return Math.hypot(r - e, n - t) <= ml ? Math.abs((u = (g = h[(s = o[(l + 2) % o.length]) >> 7])[384 + (s &= 127)] - (y = (i = h[(I = f[(a + f.length - 1) % f.length]) >> 7])[384 + (I &= 127)])) * ((
      A = i[512 + I]) - .5 * (n + t)) - (w = g[512 + s] - A) * (y - .5 * (r + e))) < (u * u + w * w) * c ? 2 : 1 : 0
  }

  function ra(r, n, e, t, a, l) {
    let f;
    let o;
    let h;
    let g;
    let i;
    let y;
    let A;
    const u = 5820766091346741e-26;
    return (A = Math.hypot(f = r - e, o = n - t)) <= ml ? 0 : Math.hypot(h = a - r, g = l - n) <= ml ? 1 : Math.abs(f * (y = l - t) - o * (i = a - e)) < (f * i + o * y) * u && Math.abs(h * y - g * i) < (h * i + g * y) * u ? A / Math.hypot(i, y) : -1
  }

  function na(r, n, e, t, a) {
    let l, f;
    return (r[t] - (l = r[e])) * (n[a] - (f = n[e])) - (r[a] - l) * (n[t] - f)
  }

  function ea(r, n, e, t, a, l) {
    for (var f, o, h = 0, g = r[e], i = n[e]; --t >= e;) f = r[t], o = n[t], i <= l ? l < o && (a - g) * (o - i) < (f - g) * (l - i
    ) && h++ : o <= l && (f - g) * (l - i) < (a - g) * (o - i) && h--, g = f, i = o;
    return h
  }

  function ta(r, n, e, t, a, l, f) {
    let o, h, g;
    if (l != t && l != a) {
      for (o = h = r[t] - 1; 0 <= o && e[o] > f; o--) ;
      if ((o < 0 || n[o] != l) && (o == h || n[o + 1] != l)) {
        for (o++, g = r[t]++; (h = g) > o;) n[h] = n[g = h - 1], e[h] = e[g];
        n[o] = l, e[o] = f
      }
    }
  }

  function aa(r, n, e, t, a) {
    let l, f = t + a;
    if ((l = n - t) < 0) for (; --f >= t;) e[f] = r[f + l]; else for (; t < f; t++) e[t] = r[t + l]
  }

  function la(r, n, e, t, a) {
    let l, f = t + a;
    if ((l = n - t) < 0) for (; --f >= t;) e[f] = r[f + l]; else for (; t < f; t++) e[t] = r[t + l]
  }

  function fa(r, n, e, t, a) {
    let l, f = t + a;
    if ((l = n - t
    ) < 0) for (; --f >= t;) e[f] = r[f + l]; else for (; t < f; t++) e[t] = r[t + l]
  }

  function oa(r, n, e, t) {
    let a;
    return n >= r.length && (la(r, 0, a = new Int32Array(r.length + t), 0, r.length), r = a), r[n] = e, r
  }

  function ha(r, n) {
    return r[r.length] = n, r
  }

  function ga(r, n, e) {
    for (var t, a, l, f, o = r.length, h = n[0], g = n[1], i = n[2], y = n[3], A = 0; 0 <= --o;) if ((l = Math.abs(a = (t = e[(f = r[o]) >> 7])[f &= 127] * h + t[f + 128] * g + t[f + 256] * i + y)) > ml) {
      if (A == (f = 3 + l / a >> 1)) return 3;
      A = 3 - f
    }
    return A
  }

  function Q(r, n, e) {
    for (var t, a = t = r.length - 1; 0 <= a && r[a] != n; a--) ;
    return 0 <= a && (r[(a + 1
    ) % r.length] == e || r[(a + t) % r.length] == e) ? -1 : -2
  }

  function ia(r, n, e, t, a, l, f) {
    for (var o, h, g, i, y, A, u, w, s, I, c, b, v, M, m, F, k, p, d, E, N, T, C, L, B, S, U, X, V, P, _ = 0, q = a[0], x = a[1], R = a[2], Y = l[0], D = l[1], G = l[2], W = l[3], O = -1; ++O < e.length;) if (Math.abs(k = (y = (o = f[(S = e[O]) >> 7])[V = 127 & S]) * Y + (A = o[V + 128]) * D + (u = o[V + 256]) * G + W) > ml) {
      _ = k / Math.abs(k);
      break
    }
    if (0 == _) return 0;
    for (P = O++ + e.length, d = C = L = X = 0; ; O++) {
      if (p = (w = (o = f[(U = e[O % e.length]) >> 7])[V = 127 & U]) * Y + (s = o[V + 128]) * D + (I = o[V + 256]) * G + W, N = Math.abs(p) > ml ? p / Math.abs(p) : 0, 0 == d
      ) 0 == N ? d = 1 : N != _ && (k /= k - p, r[C++] = n < 0 ? y + k * (w - y) : 0 == n ? A + k * (s - A) : u + k * (I - u), L = 2147483648); else if (1 == d) 0 == N ? ((X = Q(t, S, U)) == (2 == (d = ((b = A - g) * (F = I - u) - (m = s - A) * (v = u - i)) * q + (v * (M = w - y) - F * (c = y - h)) * x + (c * m - M * b) * R < 0 ? 3 : 2) ? -2 : -1) && (r[C++] = n < 0 ? y : 0 == n ? A : u), T = E) : (N != E && (r[C++] = n < 0 ? y : 0 == n ? A : u, L = 2147483648), d = 0); else {
        if (0 == N) {
          X = S, S = U, y = w, A = s, u = I;
          continue
        }
        0 <= X && (X = Q(t, X, S)), L |= (B = N == T ? 0 : 1) << 31, 0 == (X + d + B & 1) && (r[C++] = n < 0 ? y : 0 == n ? A : u), d = 0
      }
      if (P <= O) return L | C;
      h = y, g = A, i = u, E = _, S = U, y = w, A = s, u = I, k = p, _ = N
    }
  }

  function ya(r, n, e, t, a, l, f, o
    , h, g, i, y, A) {
    for (var u, w, s, I, c, b, v, M, m, F, k, p, d, E, N, T, C, L, B, S, U, X, V, P, _, q, x, R, Y, D, G, W, O, Q, j, z, H, J, K, Z, $, rr, nr, er, tr, ar, lr, fr, or, hr, gr, ir, yr, Ar, ur, wr, sr, Ir, cr = e[or = r >> 9][hr = 511 & r], br = (sr = dl[rf[Ir = (Ar = a[0])[or][hr]]])[0] * (Tr = t[or][hr]), vr = sr[1] * Tr, Mr = sr[2] * Tr, mr = n[0], Fr = n[1], kr = n[2], pr = n[3], dr = f[0], Er = f[1], Nr = f[2], Tr = 0; ; Tr++) if (Math.abs(W = (c = (u = A[(rr = cr[Tr]) >> 7])[lr = 127 & rr]) * mr + (b = u[lr + 128]) * Fr + (v = u[lr + 256]) * kr + pr) > ml) {
      J = W / Math.abs(W);
      break
    }
    for (gr = Tr++ + cr.length, Q = !1, ir = yr = l[$ = z = ar = 0]; ; Tr++) {
      if (O = (
        M = (u = A[(nr = cr[Tr % cr.length]) >> 7])[lr = 127 & nr]) * mr + (m = u[lr + 128]) * Fr + (F = u[lr + 256]) * kr + pr, 0 == (K = Math.abs(O) > ml ? O / Math.abs(O) : 0) && (tr = nr), 0 == z) 0 == K || K == J ? (ir[ar++] = nr, z = 1 - K * K) : (ir[ar++] = tr = er = Aa(A, k = E = c + (W /= W - O) * (V = M - c), p = N = b + W * (P = m - b), d = T = v + W * (_ = F - v), o, h, g, i, y), Z = J, Q = !0); else if (1 == z) 0 != K && K != H ? (er = rr, k = E = c, p = N = b, d = T = v, Z = H, Q = !0, z = 0) : (j = ((P = b - s) * (R = F - v) - (x = m - b) * (_ = v - I)) * br + (_ * (q = M - c) - R * (V = c - w)) * vr + (V * x - q * P) * Mr < 0, 0 == K ? (z = j ? 3 : 2, Z = H) : (j ? (er = rr, k = E = c, p = N = b, d = T = v, Z = H, Q = !0) : ir[ar++] = nr, z = 0)); else {
        if (0 == K) {
          rr = nr, c = M, b = m, v = F;
          continue
        }
        3 == z || K != Z ? (er = rr, k = w, p = s, d = I, E = c, N = b, T = v, Q = !0) : (ir[ar++] = rr, ir[ar++] = nr), z = 0
      }
      if (Q && (0 == $ ? (S = k, U = p, X = d) : (q = k - C, x = p - L, R = d - B, Nr[$] = 0 < (D * R - x * G) * br + (G * q - R * Y) * vr + (Y * x - q * D) * Mr ? 1 : 0, Er[$] = Z), dr[$] = ar, (ir = l[++$])[0] = er, ir[1] = nr, Y = M - (C = E), D = m - (L = N), G = F - (B = T), Q = !(ar = 2)), gr <= Tr) break;
      w = c, s = b, I = v, H = J, rr = nr, c = M, b = m, v = F, W = O, J = K
    }
    if (q = S - C, x = U - L, R = X - B, Nr[$] = 0 < (D * R - x * G) * br + (G * q - R * Y) * vr + (Y * x - q * D) * Mr ? 1 : 0, Er[$] = K, dr[$] = ar + (lr = dr[0]), la(yr, 0, ir, ar, lr), 4 <= $) for (Tr = 0; ++Tr <= $;) if (1 == Nr[Tr]) for (
      w = (u = A[(er = (ir = l[Tr])[0]) >> 7])[er &= 127], s = u[er + 128], I = u[er + 256], c = (u = A[(er = ir[(fr = dr[Tr]) - 1]) >> 7])[er &= 127], b = u[er + 128], v = u[er + 256]; ;) {
      for (ar = 0, V = c - w, P = b - s, _ = v - I, W = -Number.MAX_VALUE, lr = -1; ++ar <= $;) ar != Tr && 0 == Nr[ar] && Er[ar] == Er[Tr] && (O = V * (q = (u = A[(er = (yr = l[ar])[0]) >> 7])[er &= 127] - c) + P * (x = u[er + 128] - b) + _ * (R = u[er + 256] - v)) <= 0 && W <= O && (W = O, 0 <= V * (Y = (k = (u = A[(er = yr[dr[ar] - 1]) >> 7])[er &= 127]) - w) + P * (D = (p = u[er + 128]) - s) + _ * (G = (d = u[er + 256]) - I) && (lr = ar, S = k, U = p, X = d));
      if (lr < 0) break;
      la(l[lr], 0, ir, fr, ar = dr[lr]),
        Nr[lr] = 2, dr[Tr] = fr += ar, c = S, b = U, v = X
    }
    for (ur = a[1], wr = a[2], Tr = fr = 0; ++Tr <= $;) 1 == Nr[Tr] && (ar = dr[Tr], null == e[er = (lr = 0 == fr++ ? r : Va++) >> 9] && (wr[er] = new Int16Array((ur[er] = new Int16Array((Ar[er] = new Int16Array((t[er] = new Int8Array((e[er] = Array(512)).length)).length)).length)).length)), rr = 511 & lr, lr == r && ar == cr.length || (e[er][rr] = cr = new Int32Array(ar)), la(l[Tr], 0, cr, 0, ar), t[er][rr] = t[or][hr], Ar[er][rr] = Ir, ur[er][rr] = ur[or][hr], wr[er][rr] = wr[or][hr]);
    return tr
  }

  function Aa(r, n, e, t, a, l, f, o, h) {
    for (var g, i, y, A, u,
           w = 4095 & ~~(((i = n - l) - ml) * f), s = 4095 & ~~((i + ml) * f); ; w = w + 1 & 4095) {
      for (y = o[w]; 0 <= y; y = h[u][A]) if (sa((g = r[u = y >> 7])[A = 127 & y] - n, g[128 + A] - e, g[256 + A] - t) < a) return y;
      if (w == s) break
    }
    return null == (g = r[w = (y = Sa++) >> 7]) && (g = r[w] = new Float64Array(640), h[w] = new Int32Array(128)), g[s = 127 & y] = n, g[s + 128] = e, g[s + 256] = t, h[w][s] = o[w = 4095 & ~~(i * f)], o[w] = y
  }

  function ua(r, n, e, t, a, l, f, o, h, g, i) {
    for (var y, A, u, w, s, I, c = 4095.99, b = 5.960464477539063e-8, v = .2857142857142857, M = 5.421010862427522e-20, m = (4095 & ~~(((w = Math.abs(3 * (e - .5 * n) - r) * v) - b) * c
    )) - 1, F = 4095 & ~~((w + b) * c), k = o[0], p = o[1], d = o[2], E = o[3], N = o[4]; ++m <= F;) for (I = h[m]; 0 <= I; I = g[I]) if (sa((A = p[I]) * e - (u = d[I]) * n, u * r - (y = k[I]) * e, y * n - A * r) <= M && Math.hypot(E[I] - (t - (s = l + (t * y + a * A) / (u + 1)) * y), N[I] - (a - s * A)) <= f) return I;
    return k[i] = r, p[i] = n, d[i] = e, E[i] = t - (s = l + (t * r + a * n) / (e + 1)) * r, N[i] = a - s * n, g[i] = h[m = 4095 & ~~(w * c)], h[m] = i
  }

  function wa(r, n, e) {
    let t;
    return Vl[t = Ua++] = r, Pl[t] = n, ql[t] = e, t
  }

  function sa(r, n, e) {
    return n *= n, (r *= r) < (e *= e) && n < e ? r + n + e : r < n ? r + e + n : n + e + r
  }

  function Ia(r, n, e) {
    return Math.sqrt(sa(r, n, e))
  }

  function ca(r, n) {
    let e;
    return r = r.substring(1 - (e = '-' == r.charAt(0) ? -1 : 1) >> 1), e * ('C' == r.charAt(0) ? n[parseInt(r.substring(1), 10)] : parseFloat(r))
  }

  function ba(r) {
    r.preventDefault()
  }

  function e(r, n, e) {
    let t, a, l, f;
    r ? Al = !0 : yl = !0, a = ~~(n - (t = zt.getBoundingClientRect()).left + .5), l = ~~(e - t.top + .5), g = 0, Ga < a && a <= Wa && Oa < l && l <= Qa ? 0 <= (g = 0 < (h = a - (f = Ja)) && h <= $a && Ka < l && l <= Za ? -1 : 1) && (a <= f ? el < f && Ja-- : f + $a < a && f < tl && Ja++) : ll < a && a <= fl && ol < l && l <= hl ? (g = 1, ul ^= !0) : (xa = a, Ra = o = l), 0 < g && (Ya = xa, Da = Ra, Ea(), Na())
  }

  function va({button, clientX, clientY}) {
    button && 2 != button || e(button, clientX, clientY)
  }

  function Ma(r) {
    let n;
    r.preventDefault(), e(0, (n = r.targetTouches[0]).clientX, n.clientY)
  }

  function ma({button}) {
    button && 2 != button || (button ? Al = !1 : yl = !1)
  }

  function Fa(r) {
    r.preventDefault(), yl = !1
  }

  function t(r, n) {
    let e, t, a, l, f;
    yl | Al && g <= 0 && (t = ~~(r - (e = zt.getBoundingClientRect()).left + .5), Ya = xa, Da = Ra, g < 0 ? Ja = (t -= h) < el ? el : tl < t ? tl : t : (a = ~~(n - e.top + .5), yl && (xa = t, Ra = a), Al && .5 <= (f = (l = bl * Math.exp((a - o) * pl)) * cl) && (bl = l, vl = .75 / (Fl < f ? .5 * (f + Fl) : f)), o = a), Ea(), Na())
  }

  function ka({clientX, clientY}) {
    t(clientX, clientY)
  }

  function pa(r) {
    let n;
    r.preventDefault(), t((n = r.targetTouches[0]).clientX, n.clientY)
  }

  function da() {
    yl = Al = !1
  }

  function Ea() {
    let r;
    let n;
    let e;
    let t;
    let a;
    let l;
    let f;
    let o;
    let h;
    let g;
    let i;
    let y;
    let A;
    let u;
    let w;
    let s;
    let I;
    let c;
    let b;
    let v;
    let M;
    let m;
    let F;
    let k;
    let p;
    let d;
    let E;
    let N;
    let T;
    let C;
    let L;
    let B;
    let S;
    let U;
    let X;
    let V;
    let P;
    let _;
    let q;
    let x;
    let R;
    let Y;
    let D;
    let G;
    let W;
    let O;
    let Q;
    let j;
    let z;
    let H;
    let J;
    let K;
    let Z;
    let $;
    let rr;
    let nr;
    let er;
    let tr;
    let ar;
    let lr;
    let fr;
    let or;
    let hr;
    let gr;
    let ir;
    let yr;
    let Ar;
    let ur;
    let wr;
    let sr;
    let Ir;
    let cr;
    let br;
    let vr;
    let Mr;
    let mr;
    let Fr;
    const kr = 1.5707963267948966;
    let pr = (Ya - La) * (V = vl);
    let dr = (Ba - Da) * V;
    let Er = (xa - La) * V;
    let Nr = (Ba - Ra) * V;
    for (1 <= (_ = Math.hypot(pr, dr)) ? (0 != (V = Math.hypot(Er, Nr)) && (Er *= V = 1 - (_ - 1) / V, Nr *= V),
      n = 0) : (_ = Ia(pr, dr, n = Math.cos(_ * kr)), n /= _), pr /= _, dr /= _, 1 < (_ = Math.hypot(Er, Nr)) && (Er *= V = (P = _ % 4) / _, Nr *= V, 1 < P && (Er *= V = (P <= 3 ? 2 - P : P - 4) / P, Nr *= V)), t = n * (Er /= _ = Ia(Er, Nr, r = Math.cos(_ * kr))) - (r /= _) * pr, a = pr * (Nr /= _) - Er * dr, f = (e = dr * r - Nr * n) * (_ = .5 / (l = Math.sqrt(.5 * (1 + pr * Er + dr * Nr + n * r)))), o = t * _, h = a * _, ($ = El)[0] = g = l * (u = $[0]) - f * (w = $[1]) - o * (s = $[2]) - h * (I = $[3]), $[1] = i = l * w + f * u + o * I - h * s, $[2] = y = l * s - f * I + o * u + h * w, $[3] = A = l * I + f * s - o * w + h * u, c = g * (V = 2 * i), M = V * i, m = V * y, F = V * A, b = g * (V = 2 * y), k = V * y, p = V * A, v = g * (V = 2 * A), E = 1 - (k + (d = V * A)), N = m - v, T = F + b,
           C = m + v, L = 1 - (M + d), B = p - c, S = F - b, U = p + c, X = 1 - (M + k), z = (Ja - al) * Ml, rr = Sl, nr = Ul, er = Xl, tr = bl, Z = Ua, Lr = ar = 0; 0 <= --Z;) Tr(Z, E * (e = Vl[Z]) + N * (t = Pl[Z]) + T * (a = ql[Z]), C * e + L * t + B * a, z * (er[Z] = (S * e + U * t + X * a) * tr), tr, rr, nr);
    if (0 == ++il) for (Z = Sa; 0 <= --Z;) $l[Z] = 0;
    for (fr = ++il, or = ef, hr = Hl, gr = Jl, Z = qa; 0 <= --Z;) if (K = 1 + (J = 1 + (H = 3 * Z)), j = (Y = rr[J] - (q = rr[H])) * (O = nr[K] - (x = nr[H])) - (W = rr[K] - q) * (D = nr[J] - x), ul) {
      for (Ar = 0 < j ? or : tf, ur = 0 < j ? ar : Lr, ir = (yr = Ql[Z]).length, lr = ~~(191.99 * Math.abs(j) / Ia(D * (Q = er[K] - (R = er[H])) - O * (G = er[J] - R), G * W - Q * Y, j)); 0 <= --ir;
      ) Zl[Ar[ur++] = yr[ir]] = lr;
      0 < j ? ar = ur : Lr = ur
    } else {
      for (ir = (yr = Ol[Z]).length, lr = -1; 0 <= --ir;) if (!(hr[wr = yr[ir]] = (V = j * Kl[wr]) <= 0)) for (lr < 0 && (lr = ~~(191.99 * V / Ia(D * (Q = er[K] - (R = er[H])) - O * (G = er[J] - R), G * W - Q * Y, j))), Zl[wr] = lr, sr = (Ar = Gl[wr]).length; 0 <= --sr;) $l[Ar[sr]] = fr;
      gr[Z] = j <= 0 ? 2 : 1
    }
    for (Ir = Nl, cr = Tl, Z = ul ? Xa : Sa, P = z * tr; 0 <= --Z;) !ul && $l[Z] != fr || (Tr(Z, E * (e = Cl[Z]) + N * (t = Ll[Z]) + T * (a = Bl[Z]), C * e + L * t + B * a, P * (S * e + U * t + X * a), tr, Ir, cr), zl[0][Z] = ~~(Fl + Ir[Z]), zl[1][Z] = ~~(kl - cr[Z]));
    if (ul) Cr = ar; else for (br = Wl, vr = af, Z = lr = mr = 0; ;) if (
      Mr = br[Z], 0 == lr && 0 <= Mr[lr = gr[nf[Fr = Mr[0]]]]) vr[mr++] = lr << 24 | Z, Z = Mr[lr], lr = 0; else {
      for (ir = 2; ++ir < Mr.length;) hr[Fr = Mr[ir]] || (or[ar++] = Fr);
      if (0 <= Mr[3 - lr]) Z = Mr[3 - lr], lr = 0; else {
        if (0 == mr) return void (Cr = ar);
        lr = (Z = vr[--mr]) >> 24, Z &= 16777215
      }
    }
  }

  function Tr(r, n, e, t, a, l, f) {
    const o = 42535295865117303e21, h = -42535295865117303e21;
    t = t < 1 ? a / (1 - t) : Number.POSITIVE_INFINITY, f[r] = 0 != e ? e * t : 0, isFinite(l[r] = 0 != n ? n * t : 0) && isFinite(f[r]) || (Math.abs(n) >= Math.abs(e) ? f[r] = (l[r] = 0 < n ? o : h) * (e / n) : l[r] = (f[r] = 0 < e ? o : h) * (n / e))
  }

  function w(r,
             n, e, t, a) {
    for (let l = r.length; 0 <= --l;) n[l] = t[r[l]], e[l] = a[r[l]]
  }

  function s(r, n, e) {
    let t;
    for (Af.beginPath(), Af.moveTo(r[0], n[0]), t = 0; ++t < e;) Af.lineTo(r[t], n[t]);
    Af.closePath(), Af.stroke()
  }

  function I(r, n, e) {
    let t;
    for (Af.beginPath(), Af.moveTo(r[0], n[0]), t = 0; ++t < e;) Af.lineTo(r[t], n[t]);
    Af.fill()
  }

  function c(r, n, e, t, a) {
    let l, f, o, h, g, i;
    Af.beginPath(), Af.moveTo(l = r + a, n), Af.quadraticCurveTo(r, n, r, h = n + a), Af.lineTo(r, i = (g = n + t) - a), Af.quadraticCurveTo(r, g, l, g), Af.lineTo(o = (f = r + e) - a, g), Af.quadraticCurveTo(f, g, f
      , i), Af.lineTo(f, h), Af.quadraticCurveTo(f, n, o, n), Af.lineTo(l, n), Af.fill()
  }

  function Na() {
    let r, n, e, t, a, l, f, o, h, g, i, y, A, u;
    if (Af.fillStyle = of, Af.fillRect(0, 0, Ta, Ca), t = jl[0], a = jl[1], l = zl[0], f = zl[1], ul) for (o = Lr, h = tf, g = yf; ;) {
      for (n = 0; n < o; n++) w(e = Yl[r = h[n]], t, a, l, f), Af.fillStyle = ff[r][255 & Zl[r]], I(t, a, e.length), Af.strokeStyle = g, s(t, a, e.length);
      if (h == ef) break;
      o = Cr, h = ef, g = gf
    } else for (n = 0; n < Cr; n++) for (w(e = Dl[r = ef[n]], t, a, l, f), Af.fillStyle = Af.strokeStyle = lf[r][255 & Zl[r]], I(t, a, e.length), i = Rl; ;) {
      if (null == i[r]
      ) s(t, a, e.length); else for (A = (y = i[r]).length; 0 <= --A;) w(u = y[A], t, a, l, f), ((r, n, e) => {
        let t;
        for (Af.beginPath(), Af.moveTo(r[0], n[0]), t = 0; ++t < e;) Af.lineTo(r[t], n[t]);
        Af.stroke()
      })(t, a, u.length);
      if (i == xl) break;
      Af.strokeStyle = hf, i = xl
    }
    Af.fillStyle = 'lightGray', c(Ga, r = Oa, ja, za, n = nl), Af.strokeStyle = of, Af.beginPath(), Af.moveTo(Ha, r), Af.lineTo(Ha, Qa), Af.closePath(), Af.stroke(), Af.fillStyle = '#505050', c(Ja, Ka, $a, rl, n), ul || (Af.fillStyle = _b[4][64], Af.fillRect(ll, ol, gl, gl)), Af.strokeStyle = Af.fillStyle = 'black',
      Af.strokeRect(ll, ol, gl, gl), 0 < (r = Pa) && (Af.font = `${~~(Ta / 20)}px Courier New`, Af.fillText(`WARNING: ${r}${1 == r ? ' face is non-planar' : ' faces are non-planar'}`, 0, 63 * Ca >> 6)), Ja == el && (Af.font = '10px Courier New', Af.fillText('v3.0', Ta >> 6, 63 * Ca >> 6))
  }

  var Ta;
  var Ca;
  var La;
  var Ba;
  var Sa;
  var Ua;
  var Xa;
  var Va;
  var Pa;
  var qa;
  var o;
  var xa;
  var Ra;
  var Ya;
  var Da;
  var Ga;
  var Wa;
  var Oa;
  var Qa;
  var ja;
  var za;
  var Ha;
  var Ja;
  var Ka;
  var Za;
  var $a;
  var rl;
  var nl;
  var el;
  var tl;
  var al;
  var h;
  var ll;
  var fl;
  var ol;
  var hl;
  var gl;
  var Cr;
  var Lr;
  var il;
  var g;
  var yl;
  var Al;
  var ul;
  let wl;
  let sl;
  let Il;
  var cl;
  var bl;
  var vl;
  var Ml;
  var ml;
  var Fl;
  var kl;
  var pl;
  var dl;
  var El;
  var Nl;
  var Tl;
  var Cl;
  var Ll;
  var Bl;
  var Sl;
  var Ul;
  var Xl;
  var Vl;
  var Pl;
  var ql;
  var xl;
  var Rl;
  var Yl;
  var Dl;
  var Gl;
  var Wl;
  var Ol;
  var Ql;
  var jl;
  var zl;
  var Hl;
  var Jl;
  var Kl;
  var Zl;
  var $l;
  var rf;
  var nf;
  var ef;
  var tf;
  var af;
  var lf;
  var ff;
  var of;
  var hf;
  var gf;
  var yf;
  var Af;
  _m[_m.length] = (Af = zt.getContext('2d'), void (() => {
    let r;
    let n;
    let e;
    let t;
    let a;
    let l;
    let f;
    let o;
    let h;
    let g;
    let i;
    let y;
    let A;
    let u;
    let w;
    let s;
    let I;
    let c;
    let b;
    let v;
    let M;
    let m;
    let F;
    let k;
    let p;
    let d;
    let E;
    let N;
    let T;
    let C;
    let L;
    let B;
    let S;
    let U;
    let X;
    let V;
    let P;
    let _;
    let q;
    let x;
    let R;
    let Y;
    let D;
    let G;
    let W;
    let O;
    let Q;
    let j;
    let z;
    let H;
    let J;
    let K;
    let Z;
    let $;
    let rr;
    let nr;
    let er;
    let tr;
    let ar;
    let lr;
    let fr;
    let or;
    let hr;
    let gr;
    let ir;
    let yr;
    let Ar;
    let ur;
    let wr;
    let sr;
    let Ir;
    let cr;
    let br;
    let vr;
    let Mr;
    let mr;
    let Fr;
    let kr;
    let pr;
    let dr;
    let Er;
    let Nr;
    let Tr;
    let Cr;
    let Lr;
    let Br;
    let Sr;
    let Ur;
    let Xr;
    let Vr;
    let Pr;
    let qr;
    let xr;
    let Rr;
    let Yr;
    let Dr;
    let Gr;
    let Wr;
    let Or;
    let Qr;
    let jr;
    let zr;
    let Hr;
    let Jr;
    let Kr;
    let Zr;
    let $r;
    let rn;
    let nn;
    let en;
    let tn;
    let an;
    let ln;
    let fn;
    let on;
    let hn;
    let gn;
    let yn;
    let An;
    let un;
    let wn;
    let sn;
    let In;
    let cn;
    let bn;
    let vn;
    let Mn;
    let mn;
    let Fn;
    let kn;
    let pn;
    let dn;
    let En;
    let Nn;
    let Tn;
    let Cn;
    let Ln;
    let Bn;
    let Sn;
    let Un;
    let Xn;
    let Vn;
    let Pn;
    let qn;
    let xn;
    let Rn;
    let Yn;
    let Dn;
    let Gn;
    let Wn;
    let On;
    let Qn;
    let jn;
    let zn;
    let Hn;
    let Jn;
    let Kn;
    let Zn;
    let $n;
    let re;
    let ne;
    let ee;
    let te;
    let ae;
    let le;
    let fe;
    let oe;
    let he;
    let ge;
    let ie;
    let ye;
    let Ae;
    let ue;
    let we;
    let se;
    let Ie;
    let ce;
    let be;
    let ve;
    let Me;
    let me;
    let Fe;
    let ke;
    let pe;
    let de;
    let Ee;
    let Ne;
    let Te;
    let Ce;
    let Le;
    let Be;
    let Se;
    let Ue;
    let Xe;
    let Ve;
    let Pe;
    let qe;
    let xe;
    let Re;
    let Ye;
    let De;
    let Ge;
    let We;
    let Oe;
    let Qe;
    let je;
    let ze;
    let He;
    let Je;
    let Ke;
    let Ze;
    let $e;
    let rt;
    let nt;
    let et;
    let tt;
    let at;
    let lt;
    let ft;
    let ot;
    let ht;
    let gt;
    let it;
    let yt;
    let At;
    let ut;
    let wt;
    let st;
    let It;
    let ct;
    let bt;
    let vt;
    let Mt;
    let mt;
    let Ft;
    let kt;
    let pt;
    let dt;
    let Et;
    let Nt;
    let Tt;
    let Ct;
    let Lt;
    let Bt;
    let St;
    let Ut;
    let Xt;
    let Vt;
    let Pt;
    let _t;
    let qt;
    const xt = 5820766091346741e-26;
    const Rt = 33881317890172014e-37;
    const Yt = 2.3283064365386963e-10;
    const Dt = 1.4629180792671596e-9;
    const Gt = 6.283185307179586;
    const Wt = -3.141592653589793;
    const Ot = 5.960464477539063e-8;
    const Qt = 3019169939857233e154;
    if (xa = Ya = La = (Br = Ta = zt.width
    ) >> 1, Ra = Da = Ba = (Sr = Ca = zt.height) >> 1, of = (Ur = jt.getElementsByClassName('solid__background')).length ? Ur[0].value : '#606060', hf = (Ur = jt.getElementsByClassName('EdgeColor')).length ? Ur[0].value : 'black', gf = (Ur = jt.getElementsByClassName('WireColor')).length ? Ur[0].value : 'black', Af.fillStyle = of, Af.fillRect(0, 0, Br, Sr), Za = (Qa = (Oa = er = Sr >> 6) + (za = tr = Sr < 256 ? 8 : Sr >> 5)) - 1, Ka = er + 1, nl = tr >> 1, Ja = (al = ar = (3 * (Y = (tl = (Wa = (Ga = Br >> 2) + (ja = Br >> 1)) - ($a = rl = tr - 2) - 1) - (el = Ga + 1)) >> 2) + el) + (Y >> 4), Ha = ar + ($a >> 1), Ml = (pl = .5 / (Fl = Br >> 1)) / (P = 3 * (tl - ar
    ) >> 3), (Ur = jt.getElementsByClassName('Perspective')).length && ((Ja = ar + ~~(parseFloat(Ur[0].value) * P)) > tl && (Ja = tl), Ja < el && (Ja = el)), fl = (ll = Br >> 6) + (gl = hr = tr << 1), hl = (ol = er) + hr, (Xr = El = new Float64Array(4))[0] = 1, (Ur = jt.getElementsByClassName('Quaternion')).length) {
      for (n = Ur[0].value.match(/[^ \t\n\r\f,;]+/g), er = -1, P = 0; ++er < 4;) P += (Xr[er] = parseFloat(n[er])) * Xr[er];
      for (0 == P && (Xr[0] = P = 1, Xr[1] = Xr[2] = Xr[3] = 0), er = 4, P = Math.sqrt(P); 0 <= --er;) Xr[er] /= P
    }
    if (n = jt.getElementsByClassName('solid__counts')[0].value.match(
      /[^ \t\n\r\f,;]+/g), _ = parseInt(n[0], 10), Vr = q = parseInt(n[1], 10), qr = Pr = qa = parseInt(n[2], 10), Rr = Ol = Array((xr = new Int32Array(qr)).length), Gr = ql = new Float64Array((Dr = Pl = new Float64Array((Yr = Vl = new Float64Array((Xl = new Float64Array((Ul = new Float64Array((Sl = new Float64Array(3 * Pr)).length)).length)).length)).length)).length), Jl = new Int8Array((Ql = Array(Pr)).length), Wr = new Float64Array(_), 0 < _) for (n = jt.getElementsByClassName('solid__constants')[0].value.match(/[^ \t\n\r\f,;]+/g), er = -1; ++er < _;) Wr[er] = parseFloat(
      n[er]);
    for (jr = Bl = new Float64Array((Qr = Ll = new Float64Array((Or = Cl = new Float64Array((Tl = new Float64Array((Nl = new Float64Array(Vr)).length)).length)).length)).length), zr = new Float64Array(q), n = jt.getElementsByClassName('solid__vertices')[0].value.match(/[^ \t\n\r\f,;]+/g), Hr = 0, yr = er = -1, Kr = -(Jr = Number.MAX_VALUE); ++yr < Vr;) (zr[yr] = P = Ia(Zr = Or[yr] = ca(n[++er], Wr), Qr[yr] = ca(n[++er], Wr), jr[yr] = ca(n[++er], Wr))) > Hr && (Hr = P), Zr < Jr && (Jr = Zr), Kr < Zr && (Kr = Zr);
    for (1 == ($r = new Int32Array(isFinite(Zr = 4095.99 / (Kr - Jr)) ? 4096 : 1)
    ).length && (Zr = 0), er = $r.length; 0 <= --er;) $r[er] = -1;
    for (Wr = null, rn = Array(Pr), nn = Array(q), en = new Int32Array((pr = new Int32Array(Vr)).length), hn = Array((tn = Array(512)).length), an = Array(er = 3); 0 <= --er;) an[er] = Array(hn.length);
    for (er = qr + 511 >> 9, ln = an[0], fn = an[1], on = an[2]; 0 <= --er;) on[er] = new Int16Array((fn[er] = new Int16Array((ln[er] = new Int16Array((hn[er] = new Int8Array((tn[er] = Array(512)).length)).length)).length)).length);
    for (gn = Array((Tr = new Int32Array(qr)).length), er = qr; 0 <= --er;) gn[er] = new Float64Array(4
    );
    for (n = jt.getElementsByClassName('solid__faces')[0].value.match(/[^ \t\n\r\f,;]+/g), Nr = new Int32Array(W = 0), er = yr = -1, R = x = 0; ++er < Pr;) {
      for (ar = 0; '#' != (r = n[++yr]).charAt(0);) en[pr[ar++] = parseInt(r, 10)]++;
      if (x += ar, rn[er] = new Int32Array(ar), Tr[er] = -ar, la(pr, 0, tn[lr = er >> 9][gr = 511 & er] = new Int32Array(ar), 0, ar), R < ar && (R = ar), 1 < r.length) {
        for (tr = 16777215 & parseInt(r.substring(1), 16), or = W; 0 <= --or && Nr[or] != tr;) ;
        or < 0 && (Nr = oa(Nr, or = W++, tr, 32)), Tr[er] = or
      }
      ln[lr][gr] = er
    }
    for (yn = Array(er = 4); 0 <= --er;) yn[er] = new Int32Array(x)
    ;
    for (An = Array(er = q); 0 <= --er;) for (An[er] = new Int32Array(tr = en[er]), nn[er] = pr = new Int32Array(tr <<= 1); 0 <= --tr;) pr[tr] = -1;
    for (er = Pr; 0 <= --er;) for (tr = (pr = tn[er >> 9][511 & er]).length; 0 <= --tr;) An[ar = pr[tr]][--en[ar]] = tr << 18 | er;
    for (er = q, wl = Il = !1; 0 <= --er;) if (0 < (pr = An[er]).length) for (wn = (un = tn[(262143 & (ar = pr[gr = 0])) >> 9][511 & ar]).length - 1, ar >>>= 18; gr < pr.length - 1;) {
      for (ir = un[(ar + wn) % un.length], tr = ++gr; tr < pr.length; tr++) if (or = (un = tn[(262143 & (ar = pr[tr])) >> 9][511 & ar]).length - 1, (sn = un[((ar >>>= 18) + 1) % un.length] == ir
      ) || un[(ar + or) % un.length] == ir) {
        (sn ? 1 == wn : 1 < wn) && (wl = !0), wn = sn ? or : 1;
        break
      }
      tr >= pr.length ? (Il = !0, wn = (un = tn[(262143 & (ar = pr[gr])) >> 9][511 & ar]).length - 1, ar >>>= 18) : tr != gr && (hr = pr[gr], pr[gr] = pr[tr], pr[tr] = hr)
    }
    for (er = Pr, In = yn[x = 0], cn = yn[1], bn = yn[2], vn = yn[3]; 0 <= --er;) for (tr = (pr = tn[er >> 9][511 & er]).length, mn = pr[0], Mn = rn[er]; 0 <= --tr;) {
      for (or = mn + (Fn = pr[tr]) - (lr = mn < Fn ? mn : Fn), ar = 0, un = nn[mn]; 0 <= (gr = un[ar]) && (In[gr] != lr || cn[gr] != or); ar++) ;
      gr < 0 ? (In[un[en[mn]++] = nn[Fn][en[Fn]++] = gr = x++] = lr, cn[gr] = or, bn[gr] = vn[gr] = er
      ) : (vn[gr] != bn[gr] && (Il = !0), bn[gr] += er - (vn[gr] = er < (ar = bn[gr]) ? ar : er)), Mn[tr] = gr, mn = Fn
    }
    for (er = q; 0 <= --er;) if (0 < (pr = An[er]).length) if (1 == pr.length) Il = !0; else for (fr = 0, tr = 1, un = nn[er], yr = en[er], kn = 262143 & pr[0]; ;) {
      for (or = kn + (pn = 262143 & pr[tr]) - (lr = kn < pn ? kn : pn), ar = fr; ar < yr && (bn[gr = un[ar]] != lr || vn[gr] != or); ar++) ;
      if (ar < yr ? (un[ar] = un[fr], un[fr++] = gr) : Il = !0, yr <= fr || 1 == (tr = (tr + 1) % pr.length)) break;
      kn = pn
    }
    if (!(sl = Il) && wl) r:for (Nn = new Uint8Array((En = new Uint8Array((dn = new Int32Array(er = Pr)).length)).length),
                                   nr = 0; 0 <= --er;) if (!En[er]) for (En[dn[ar = 0] = er] = !0, tr = 1; ar < tr; ar++) for (lr = (un = rn[fr = dn[ar]]).length, pr = tn[fr >> 9][511 & fr], Tn = Nn[fr]; 0 <= --lr;) {
      for (hr = (Cn = rn[or = bn[gr = un[lr]] + vn[gr] - fr]).length, Mn = tn[or >> 9][511 & or]; 0 <= --hr && Cn[hr] != gr;) ;
      if (Ln = Tn != (pr[lr] == Mn[hr]), En[or]) {
        if (Nn[or] != Ln) {
          sl = !0;
          break r
        }
      } else En[dn[tr++] = or] = !0, (Nn[or] = Ln) && nr++
    }
    if (An = nn = rn = null, yf = sl ? gf : '#888888', bl = Fl * ((Ur = jt.getElementsByClassName('Scale')).length ? .75 * parseFloat(Ur[0].value) : .75) / Hr, vl = 1 / Fl, Fl += .5, kl = .5 + (Sr >> 1), Bn = (
      ml = (cl = Hr) * xt) * ml, Cr = Lr = null, 0 != W) for (Lr = Array((Cr = Array(er = W)).length); 0 <= --er;) for (Lr[er] = Array(192), Cr[er] = Array(192), tr = 192, un = Cr[er], Mn = Lr[er], Un = (Sn = Nr[er]) >> 8 & 255, Xn = 255 & Sn, Sn >>= 16; 0 <= --tr;) un[tr] = `rgb(${~~((Sn * (ar = tr + 64) + 127) / 255)},${~~((Un * ar + 127) / 255)},${~~((Xn * ar + 127) / 255)})`, Mn[tr] = `rgba${un[tr].slice(3, -1)},.125)`;
    for (yr = -1, Sa = ar = 0, Vn = Array((Pn = Array(1024)).length); ++yr < Vr;) (en[yr] = Aa(Vn, e = Or[yr], t = Qr[yr], a = jr[yr], Bn, Jr, Zr, $r, Pn)) != yr && (Sa++, ar = 1, (
      sr = Vn[er = yr >> 7] = null == Vn[er] ? new Float64Array(640) : Vn[er])[tr = 127 & yr] = e, sr[tr + 128] = t, sr[tr + 256] = a);
    if (0 != ar) for (er = qr; 0 <= --er;) for (tr = (pr = tn[er >> 9][511 & er]).length; 0 <= --tr;) for (; (pr[tr] = en[fr = pr[tr]]) != fr;) ;
    for (wr = new Float64Array((ur = new Float64Array((br = new Int32Array(O = R)).length)).length), er = Ua = Pa = rr = j = z = J = K = 0, Nr = null, Sa = Vr; er < Pr; er++) {
      for (tr = (pr = tn[gr = er >> 9][fr = 511 & er]).length, w = s = I = 0, l = (sr = Vn[(yr = pr[1]) >> 7])[yr &= 127], f = sr[yr + 128], o = sr[yr + 256], h = (sr = Vn[(yr = pr[0]) >> 7])[yr &= 127], g = sr[yr + 128],
             i = sr[yr + 256]; w += (ar = (e = (f - g) * ((u = (sr = Vn[(yr = pr[--tr]) >> 7])[256 + (yr &= 127)]) - i) - (o - i) * ((A = sr[yr + 128]) - g)) * w + (t = (o - i) * ((y = sr[yr]) - h) - (l - h) * (u - i)) * s + (a = (l - h) * (A - g) - (f - g) * (y - h)) * I < 0 ? -1 : 1) * e, s += ar * t, I += ar * a, !(tr <= 0);) l = h, f = g, o = i, h = y, g = A, i = u;
      for (0 == (P = Ia(w, s, I)) && 0 == (P = Ia(w *= Qt, s *= Qt, I *= Qt)) && (P = I = 1), w /= P, s /= P, I /= P, ar = -1, on[gr][fr] = er; ++ar < er && sa(s * (a = (Mn = gn[xr[ar]])[2]) - (t = Mn[1]) * I, I * (e = Mn[0]) - a * w, w * t - e * s) > Rt;) ;
      for (qn = 0, on[gr][fr] = on[ar >> 9][511 & ar]; ;) {
        for (h = (1 - (i = -w) * i / (P = 1 + I * (xn = I < 0 ? -1 : 1))) * xn, A = 1 - (
          u = -s * xn) * u / P, y = (g = w * u / P) * xn, tr = pr.length, l = (sr = Vn[(yr = pr[0]) >> 7])[yr &= 127], f = sr[yr + 128], o = sr[yr + 256]; 0 <= --tr;) ur[tr] = (sr = Vn[(yr = pr[tr]) >> 7])[384 + (yr &= 127)] = h * (e = sr[yr] - l) + g * (t = sr[yr + 128] - f) + i * (a = sr[yr + 256] - o), wr[tr] = sr[yr + 512] = y * e + A * t + u * a;
        if (0 != qn) break;
        for (tr = pr.length, qn = 0, F = ur[1] - (e = ur[0]), k = wr[1] - (t = wr[0]); 0 <= --tr;) qn += Math.atan2((M = e - (e = ur[tr])) * k - (m = t - (t = wr[tr])) * F, M * F + m * k), F = M, k = m;
        if (0 <= qn) break;
        w = -w, s = -s, I = -I
      }
      for (P = -(l * w + f * s + o * I); ar < er && (Math.abs(P - (Mn = gn[xr[ar]])[3]) > ml || sa(w - Mn[0],
        s - Mn[1], I - Mn[2]) > Rt); ar++) ;
      if ((Mn = gn[xr[er] = ar == er ? rr++ : xr[ar]])[0] = w, Mn[1] = s, Mn[2] = I, Mn[3] = P, wa(e = l + h * (p = ((r, n, e, t, a, l) => {
        let f, o, h, g, i, y, A, u, w, s, I, c, b, v;
        r:for (f = e; ;) for (b = .5 * ((o = r[t]) + r[a]), v = .5 * ((h = n[t]) + n[a]), i = l, g = (o -= b) * o + (h -= v) * h; ;) {
          for (; i < e; i++) if ((o = r[i] - b) * o + (h = n[i] - v) * h > g) {
            if (0 != l) {
              a = t, e = t = i, l--;
              continue r
            }
            b = (b = r[t]) + (I = ((A = n[i] - (v = n[t])) * (u = (o = r[a] - b) * o + (h = n[a] - v) * h) - h * (w = (y = r[i] - b) * y + A * A)) * (s = .5 / (o * A - h * y))), v += c = (o * w - y * u) * s, g = I * I + c * c
          }
          if (2 == l) return n[0] = v, b;
          i = e + 1, e = 0 == l ? a : f, t = a
            , a = l++
        }
      })(ur, wr, pr.length, 0, 1, 2)) + y * (d = wr[0]), t = f + g * p + A * d, a = o + i * p + u * d), wa(e + (P = Hr * Ot) * h, t + P * g, a + P * i), wa(e + P * y, t + P * A, a + P * u), $ = 0, 2 < (tr = pr.length - 1)) {
        r:for (; 0 <= (ar = tr--);) for (l = (sr = Vn[(yr = pr[ar]) >> 7])[yr &= 127], f = sr[yr + 128], o = sr[yr + 256]; 0 <= --ar;) if (Math.abs((w * ((sr = Vn[(yr = pr[ar]) >> 7])[ir = 127 & yr] - l) + s * (sr[ir + 128] - f) + I * (sr[ir + 256] - o)) / zr[yr]) > Yt) {
          Pa++;
          break r
        }
        for (tr = pr.length, M = (sr = Vn[(yr = pr[nr = 0]) >> 7])[384 + (yr &= 127)], m = sr[yr + 512], lr = 1; 1 < --tr; nr = tr, lr = 0) {
          for (X = (F = (sr = Vn[(yr = pr[tr]) >> 7])[384 + (yr &= 127)]
          ) - M, V = (k = sr[yr + 512]) - m, p = (sr = Vn[(yr = pr[ar = tr - 1]) >> 7])[384 + (yr &= 127)], d = sr[yr + 512]; lr < ar; ar--) {
            if (L = (E = (sr = Vn[(yr = pr[ar - 1]) >> 7])[384 + (yr &= 127)]) - p, B = (N = sr[yr + 512]) - d, Math.abs(P = B * X - L * V) > ml && 0 <= (Rn = (L * (U = m - d) - B * (S = M - p)) / P) && Rn <= 1 && 0 <= (Yn = (X * U - V * S) / P) && Yn <= 1) {
              if (0 == $) {
                if (0 == j && (mr = new Int32Array(j = R << 1)), O < (fr = pr.length << 2) && (wr = new Float64Array((ur = new Float64Array((br = new Int32Array(O = fr)).length)).length)), z < pr.length) for (Ar = Array((Ir = Array((vr = new Int32Array(fr = z = pr.length)).length)).length
                ); 0 <= --fr;) Ar[fr] = new Float64Array((Ir[fr] = new Int32Array(z - 3)).length);
                for (fr = Q = pr.length; 0 <= --fr;) ur[fr] = (sr = Vn[(yr = br[fr] = pr[fr]) >> 7])[384 + (yr &= 127)], wr[fr] = sr[yr + 512], vr[fr] = 0
              }
              for (fr = Q, T = M + Rn * X, C = m + Rn * V; 0 <= --fr && Math.hypot(ur[fr] - T, wr[fr] - C) > ml;) ;
              $ += 4, 0 <= fr && fr < pr.length && ($ -= 1 + ((T = ur[fr]) == M && (C = wr[fr]) == m || T == F && C == k ? 1 : 0) + (T == p && C == d || T == E && C == N ? 1 : 0)), fr < 0 && (O <= Q && (Dn = O, fa(ur, 0, ur = new Float64Array(O += pr.length), 0, Dn), fa(wr, 0, wr = new Float64Array(O), 0, Dn), la(br, 0, br = new Int32Array(O), 0, Dn)),
                ur[fr = Q++] = T, wr[fr] = C, br[fr] = Aa(Vn, l + h * T + y * C, f + g * T + A * C, o + i * T + u * C, Bn, Jr, Zr, $r, Pn), Vr = Sa), ta(vr, Ir[nr], Ar[nr], nr, tr, fr, Rn), ta(vr, Ir[ar], Ar[ar], ar, ar - 1, fr, Yn)
            }
            p = E, d = N
          }
          M = F, m = k
        }
      }
      if (4 <= $) {
        if (J < Q) cr = Array((Mr = new Int32Array(J = Q)).length), K = 0; else for (tr = Q; 0 <= --tr;) Mr[tr] = 0;
        if (K < (fr = 4294967294 & pr.length)) for (tr = Q, K = fr; 0 <= --tr;) cr[tr] = new Int32Array(fr);
        for (tr = pr.length, ar = hr = 0; 0 <= --tr; ar = tr) {
          for (fr = vr[ar], un = Ir[ar], or = tr; 0 <= --fr;) cr[cr[or][Mr[or]++] = lr = un[fr]][Mr[lr]++] = or, or = lr
          ;
          cr[cr[or][Mr[or]++] = ar][Mr[ar]++] = or
        }
        for (tr = Q; 0 <= --tr;) for (; 0 < Mr[tr];) {
          for (qn = Gn = 0, X = (M = ur[ar = ir = cr[or = tr][Mr[or] - 1]]) - ur[or], V = (m = wr[ar]) - wr[or]; ;) {
            for (lr = wn = --Mr[ar], un = cr[ar], Wn = -Number.MAX_VALUE; 0 <= lr; lr--) (fr = un[lr]) != or && (L = ur[fr] - M, B = wr[fr] - m, (On = Math.atan2(X * B - V * L, X * L + V * B)) > Wn && (Wn = On, nr = lr, gr = fr));
            if (un[nr] = un[wn], qn += Wn, mr[Gn++] = br[or = ar], ar == tr && gr == ir) break;
            X = -M + (M = ur[ar = gr]), V = -m + (m = wr[ar])
          }
          0 < qn && (null == tn[lr = (ar = 0 == hr ? er : qr++) >> 9] && (on[lr] = new Int16Array((fn[lr] = new Int16Array((
            ln[lr] = new Int16Array((hn[lr] = new Int8Array((tn[lr] = Array(512)).length)).length)).length)).length)), la(mr, 0, tn[lr][fr = 511 & ar] = 0 == hr && Gn == pr.length ? tn[lr][fr] : new Int32Array(Gn), 0, Gn), hr = 1, on[lr][fr] = on[(gr = ln[lr][fr] = er) >> 9][511 & gr])
        }
      }
    }
    for (zr = null, jn = 0, Qn = new Int32Array(er = rr), pr = new Int32Array(rr), zn = x; 0 <= --er;) {
      for (w = (Mn = gn[er])[tr = ar = 0], s = Mn[1], I = Mn[2], P = Mn[3]; ar < jn; ar++) if (sa(w - (Mn = gn[Qn[ar]])[0], s - Mn[1], I - Mn[2]) <= Rt) {
        if (Math.abs(P - Mn[3]) <= ml) break
      } else if (sa(w + Mn[0], s + Mn[1], I + Mn[2]) <= Rt) {
        if (Math.abs(P + Mn[3]) <= ml) break
      } else tr++;
      (pr[er] = ar) == jn && (Qn[jn++] = er, zn += tr)
    }
    for (Hn = new Int32Array(er = Pr), nf = new Int32Array(jn); 0 <= --er;) Qn[Hn[er] = tr = pr[ar = xr[er]]] == ar && (nf[tr] = er);
    for (er = qr, Jn = Array((pr = new Int32Array(jn)).length); 0 <= --er;) pr[Hn[ln[er >> 9][511 & er]]]++;
    for (er = jn; 0 <= --er;) Jn[er] = new Int32Array(pr[er]);
    for (er = qr, Kn = Array(512); 0 <= --er;) Jn[tr = Hn[ln[ar = er >> 9][gr = 511 & er]]][--pr[tr]] = er, Jt(tn[ar][gr], Vn, (Kn[ar] = null == Kn[ar] ? Array(512) : Kn[ar])[gr] = new Float64Array(6));
    for (er = jn,
           H = z - 3; 0 <= --er;) {
      for (Zn = $n = 0, pr = Jn[er]; Zn < pr.length; Zn++) for (ne = pr.length, te = !0, ee = ln[(re = pr[Zn]) >> 9][511 & re]; --ne > Zn;) if (te && (te = !1, e = (Mn = Kn[re >> 9][511 & re])[0], c = Mn[1], t = Mn[2], b = Mn[3], a = Mn[4], v = Mn[5]), (oe = ln[fe = (ae = pr[ne]) >> 9][le = 511 & ae]) != ee && c > (Mn = Kn[fe][le])[0] && e < Mn[1] && b > Mn[2] && t < Mn[3] && v > Mn[4] && a < Mn[5]) {
        for (0 == $n++ && (P = 1 + (I = (Mn = gn[Qn[er]])[2]) * (xn = I < 0 ? -1 : 1), h = (1 - (i = -Mn[0]) * i / P) * xn, A = 1 - (u = -Mn[1] * xn) * u / P, y = (g = -i * u / P) * xn), Ht(un = tn[re >> 9][511 & re], Vn, l = Yr[yr = 3 * ee], f = Dr[yr], o = Gr[yr], h, g, i, y, A, u)
               , Ht(Cn = tn[fe][le], Vn, l, f, o, h, g, i, y, A, u), tr = un.length, M = (sr = Vn[(yr = un[$ = 0]) >> 7])[384 + (yr &= 127)], m = sr[yr + 512]; ;) {
          for (ar = Cn.length, X = (F = (sr = Vn[(yr = un[--tr]) >> 7])[384 + (yr &= 127)]) - M, V = (k = sr[yr + 512]) - m, p = (sr = Vn[(yr = Cn[0]) >> 7])[384 + (yr &= 127)], d = sr[yr + 512]; ;) {
            for (ge = he = 0, L = (E = (sr = Vn[(yr = Cn[--ar]) >> 7])[384 + (yr &= 127)]) - p, B = (N = sr[yr + 512]) - d; ge < 4; he++) {
              if (0 == he) {
                if ((Yn = ra(M, m, p, d, E, N)) < 0) continue;
                ge++, Rn = 0
              } else if (1 == he) {
                if ((Yn = ra(F, k, p, d, E, N)) < 0) continue;
                ge++, Rn = 1
              } else if (2 == he) {
                if ((Rn = ra(p, d, M, m, F, k)) < 0
                ) continue;
                ge++, Yn = 0
              } else if (3 == he) {
                if ((Rn = ra(E, N, M, m, F, k)) < 0) continue;
                ge++, Yn = 1
              } else {
                if (0 != ge || Math.abs(P = B * X - L * V) <= ml || (Rn = (L * (U = m - d) - B * (S = M - p)) / P) < 0 || 1 < Rn || (Yn = (X * U - V * S) / P) < 0 || 1 < Yn) break;
                ge = 4
              }
              if (0 == $) {
                if (O < (fr = (hr = un.length + Cn.length) << 1) && (wr = new Float64Array((ur = new Float64Array((br = new Int32Array(O = fr)).length)).length)), j < (fr = un.length + Cn.length << 1) && (mr = new Int32Array(j = fr)), z < hr && (Ar = Array((Ir = Array((vr = new Int32Array(z = hr)).length)).length), H = 0), H < (
                  hr = un.length > Cn.length ? un.length : Cn.length)) for (fr = z; 0 <= --fr;) Ar[fr] = new Float64Array((Ir[fr] = new Int32Array(H = hr)).length);
                for (ie = un, Q = 0; ;) {
                  for (fr = -1; ++fr < ie.length;) ur[Q] = (sr = Vn[(yr = br[Q] = ie[fr]) >> 7])[384 + (yr &= 127)], wr[Q] = sr[yr + 512], vr[Q++] = 0;
                  if (ie == Cn) break;
                  ie = Cn
                }
              }
              for (fr = Q, T = M + Rn * X, C = m + Rn * V, ir = yr = 0; 0 <= --fr && Math.hypot(ur[fr] - T, wr[fr] - C) > ml;) ;
              $ += 8, 0 <= fr && fr < un.length + Cn.length && (C = wr[fr], $ -= 1 + (ir = (T = ur[fr]) == M && C == m || T == F && C == k ? 3 : 0) + (yr = T == p && C == d || T == E && C == N ? 3 : 0)), fr < 0 && (O <= Q && (Dn = O, fa(ur, 0,
                ur = new Float64Array(O += un.length + Cn.length), 0, Dn), fa(wr, 0, wr = new Float64Array(O), 0, Dn), la(br, 0, br = new Int32Array(O), 0, Dn)), ur[fr = Q++] = T, wr[fr] = C, br[fr] = Aa(Vn, l + h * T + y * C, f + g * T + A * C, o + i * T + u * C, Bn, Jr, Zr, $r, Pn), Vr = Sa), 0 == ir && ta(vr, Ir[hr = (tr + 1) % un.length], Ar[hr], hr, tr, fr, Rn), 0 == yr && ta(vr, Ir[hr = un.length + (ar + 1) % Cn.length], Ar[hr], hr, un.length + ar, fr, Yn)
            }
            if (ar <= 0) break;
            p = E, d = N
          }
          if (tr <= 0) break;
          M = F, m = k
        }
        if (16 <= $) {
          if (J < Q) cr = Array((Mr = new Int32Array(J = Q)).length), K = 0; else for (tr = Q; 0 <= --tr;) Mr[tr] = 0;
          if (0 == K) for (
            fr = Q, K = 4; 0 <= --fr;) cr[fr] = new Int32Array(4);
          for (tr = (ar = un.length) + Cn.length; 0 <= --tr; ar = tr == un.length ? 0 : tr) {
            for (fr = vr[ar], ie = Ir[ar], or = tr; 0 <= --fr;) cr[cr[or][Mr[or]++] = lr = ie[fr]][Mr[lr]++] = or, or = lr;
            cr[cr[or][Mr[or]++] = ar][Mr[ar]++] = or
          }
          for (tr = Q; 0 <= --tr;) for (M = (sr = Vn[(ir = br[ar = tr]) >> 7])[yr = 127 & ir], m = sr[yr + 128], F = sr[yr + 256]; 0 <= --ar;) (yr = br[ar]) != ir && (sr = Vn[yr >> 7])[yr &= 127] == M && sr[yr + 128] == m && sr[yr + 256] == F && (br[ar] = ir);
          for (tr = -1; ++tr < Q;) for (yr = br[ar = tr]; ++ar < Q;) if (br[ar] == yr) for (aa(cr[ar], 0, cr[tr],
            Mr[tr], Mr[ar]), fr = Q, Mr[tr] += Mr[ar], Mr[ar] = 0; 0 <= --fr;) for (or = Mr[fr], ie = cr[fr]; 0 <= --or;) ie[or] == ar && (ie[or] = tr);
          for (tr = Q; 0 <= --tr;) {
            for (ar = -1, gr = Mr[tr], ie = cr[tr]; ++ar < gr;) for (or = ie[fr = ar]; ++fr < gr;) ie[fr] == or && (ie[fr] = ie[--gr]);
            Mr[tr] = gr
          }
          for (tr = Q, hr = 0; 0 <= --tr;) for (; 0 < Mr[tr];) {
            for (qn = Gn = 0, X = (M = ur[ar = ir = cr[or = tr][Mr[or] - 1]]) - ur[or], V = (m = wr[ar]) - wr[or]; ;) {
              for (wn = (lr = Mr[ar]--) - 1, ie = cr[ar], Wn = -Number.MAX_VALUE; 0 <= --lr;) (fr = ie[lr]) != or && (P = Math.atan2(X * (B = wr[fr] - m) - V * (L = ur[fr] - M), X * L + V * B)) > Wn && (Wn = P, nr = lr
                , gr = fr);
              if (ie[nr] = ie[wn], qn += Wn, (mr[Gn++] = or = ar) == tr && gr == ir) break;
              X = -M + (M = ur[ar = gr]), V = -m + (m = wr[ar])
            }
            if (0 < qn) {
              r:for (fr = 0, gr = mr[Gn - 2], ir = mr[Gn - 1]; fr < Gn; gr = ir, ir = yr, fr++) if (na(ur, wr, gr, ir, yr = mr[fr]) > ml) {
                for (or = fr + Gn - 2; --or > fr;) if (na(ur, wr, gr, ir, lr = mr[or % Gn]) > ml && na(ur, wr, ir, yr, lr) > ml && na(ur, wr, yr, gr, lr) > ml) continue r;
                M = (ur[gr] + ur[ir] + ur[yr]) / 3, m = (wr[gr] + wr[ir] + wr[yr]) / 3;
                break
              }
              if (0 != (lr = (0 == ea(ur, wr, 0, un.length, M, m) ? 0 : 1) + (0 == ea(ur, wr, un.length, un.length + Cn.length, M, m) ? 0 : 2))) {
                if (3 == lr && (
                  lr = un.length > Cn.length || un.length == Cn.length && (xr[ee] == Qn[er] || xr[oe] != Qn[er]) ? 1 : 2), fr = ln[(or = re + (lr - 1) * (ae - re)) >> 9][511 & or], null == tn[nr = (ar = 0 == (hr & lr) ? or : qr++) >> 9] && (on[nr] = new Int16Array((fn[nr] = new Int16Array((ln[nr] = new Int16Array((hn[nr] = new Int8Array((tn[nr] = Array(512)).length)).length)).length)).length)), wn = 511 & ar, ar != or && (on[nr][wn] = on[(gr = ln[nr][wn] = fr) >> 9][511 & gr], (Kn[nr] = null == Kn[nr] ? Array(512) : Kn[nr])[wn] = new Float64Array(6), pr = oa(pr, pr.length, ar, 1)), ar == re && (te = !0), xr[fr] != Qn[er]
                ) for (ir = 1 + (yr = Gn - 1) >> 1; 0 <= --ir;) gr = mr[ir], mr[ir] = mr[yr - ir], mr[yr - ir] = gr;
                for (gr = Gn, tn[nr][wn] = ye = ar == or && Gn == tn[nr][wn].length ? tn[nr][wn] : new Int32Array(Gn); 0 <= --gr;) ye[gr] = br[mr[gr]];
                Jt(ye, Vn, Kn[nr][wn]), hr |= lr
              }
            }
          }
          if (3 != hr) {
            for (Jt(tn[lr = (or = 1 == hr ? ae : re) >> 9][fr = 511 & or] = tn[tr = --qr >> 9][ar = 511 & qr], Vn, Kn[lr][fr]), pr[1 == hr ? ne : Zn] = pr[yr = pr.length - 1], la(pr, 0, pr = new Int32Array(yr), 0, yr); 0 < yr--;) if (pr[yr] == qr) {
              pr[yr] = or;
              break
            }
            re == qr && (re = or), 2 == hr && (ne = --Zn), ln[lr][fr] = ln[tr][ar], on[lr][fr] = on[tr][ar]
          }
        }
      }
      Jn[er] = pr
    }
    for (Ir = cr = Jn = br = vr = Mr = mr = ur = wr = null, er = qr, pr = new Int32Array(qa); 0 <= --er;) pr[ln[er >> 9][511 & er]]++;
    for (er = Pr; 0 <= --er;) Ql[er] = new Int32Array(pr[er]);
    for (ff = Array(er = qr); 0 <= --er;) ff[Ql[tr = ln[er >> 9][511 & er]][--pr[tr]] = er] = (ar = Tr[tr]) < 0 ? _c[31 & -ar] : Lr[ar];
    for (gn.length = rr, dl = gn, rf = xr, Xa = Vr, Ae = Yl = Array((tf = new Int32Array(er = Z = Va = qr)).length), G = 0; 0 <= --er;) (ar = (pr = tn[(tr = fn[gr = er >> 9][lr = 511 & er] = er) >> 9][511 & tr]).length) > G && (G = ar), la(pr, 0, Ae[er] = new Int32Array(ar), 0, ar), hn[gr][lr] = 1;
    for (we = Array(3
    ), er = 3, tr = (ue = Array(G + 1)).length; 0 <= --er;) we[er] = new Int32Array(tr);
    for (er = G + 1, tr = jn - 2 + (3 * G >> 1); 0 <= --er;) ue[er] = new Int32Array(tr);
    for (Ie = Array((se = new Int32Array(er = qr)).length); 0 <= --er;) Ie[er] = new Int32Array(0);
    for (er = 0, be = new Float64Array((ce = new Float64Array(4294967294 & G)).length); er < qr; er++) for (l = (Mn = Kn[lr = (tr = er) >> 9][yr = 511 & er])[0], h = Mn[1], f = Mn[2], g = Mn[3], o = Mn[4], i = Mn[5], w = (Me = gn[xr[ln[lr][yr]]])[0], s = Me[1], I = Me[2], ve = on[lr][yr], pr = tn[lr][yr]; ++tr < qr;) on[hr = tr >> 9][gr = 511 & tr] != ve && h > (
      Mn = Kn[hr][gr])[0] && l < Mn[1] && g > Mn[2] && f < Mn[3] && i > Mn[4] && o < Mn[5] && (a = Math.abs(w * (A = (me = gn[xr[ln[hr][gr]]])[1]) - (y = me[0]) * s), 0 != (fr = ia(ce, ar = (e = Math.abs(s * (u = me[2]) - A * I)) > (t = Math.abs(I * y - u * w)) ? a < e ? -1 : 1 : a < t ? 0 : 1, pr, tn[hr][gr], Me, me, Vn)) && 0 != (or = ia(be, ar, tn[hr][gr], pr, me, Me, Vn)) && (or < 0 || fr < 0) && Kt(ce, be, 2147483647 & fr, 2147483647 & or) * Ia(e, t, a) > Yt * (ar < 0 ? e : 0 == ar ? t : a) && (or < 0 && (Ie[tr] = oa(Ie[tr], se[tr]++, er, 16)), fr < 0 && (Ie[er] = oa(Ie[er], se[er]++, tr, 16))));
    for (Kn = null, Fe = Array(Z << 1), ke = new Int32Array(er = 4096
    ); 0 <= --er;) ke[er] = -1;
    for (de = Array(er = 5), tr = (pe = new Int32Array(zn)).length; 0 <= --er;) de[er] = new Float64Array(tr);
    for (er = x, Ee = 0; 0 <= --er;) 0 == (P = Ia(e = (sr = Vn[(ir = In[er]) >> 7])[ir &= 127] - (h = (Ne = Vn[(yr = cn[er]) >> 7])[yr &= 127]), t = sr[ir + 128] - (g = Ne[yr + 128]), a = sr[ir + 256] - (i = Ne[yr + 256]))) && 0 == (P = Ia(e *= Qt, t *= Qt, a *= Qt)) || (e /= P = a < 0 ? -P : P, t /= P, a /= P), ua(e, t, a, h, g, i, ml, de, ke, pe, Ee) == Ee && Ee++;
    for (yn = null, er = qr, Le = !1, Ce = new Int32Array((Te = new Int32Array(512)).length << 1); 0 <= --er;) {
      for (w = (Me = gn[xr[ln[er >> 9][511 & er]]])[0],
             s = Me[1], I = Me[2], tr = se[Ce[Te[0] = 0] = er], yr = 1, pr = Ie[er], gr = (ar = qr) - 1; 0 <= --tr;) for (me = gn[xr[ln[(ne = pr[tr]) >> 9][511 & ne]]], i = Math.abs(a = w * (A = me[1]) - (y = me[0]) * s), Be = (wn = (h = Math.abs(e = s * (u = me[2]) - A * I)) > (g = Math.abs(t = I * y - u * w)) ? i < h ? -1 : 1 : i < g ? 0 : 1) < 0 ? h : 0 == wn ? g : i, e /= P = (a < 0 ? -1 : 1) * (On = Ia(e, t, a)), t /= P, a /= P, On = Yt * Be / On, fr = ar - (hr = er), nr = qr, Cn = Ae[ne]; hr < nr; hr += fr, fr = 1) if ((lr = ia(ce, wn, ie = tn[hr >> 9][511 & hr], Cn, Me, me, Vn)) < 0 && 0 != (ir = ia(be, wn, Cn, ie, me, Me, Vn)) && Kt(ce, be, 2147483647 & lr, 2147483647 & ir) > On) for (Le = !0, ua(e, t, a, (
        sr = Vn[(ir = ya(hr, me, tn, hn, an, ue, we, Bn, Jr, Zr, $r, Pn, Vn)) >> 7])[ir &= 127], sr[ir + 128], sr[ir + 256], ml, de, ke, pe, Ee) == Ee && Ee++, yr + (lr = (ir = Va) - qr + 1) > Ce.length && la(Ce, 0, Ce = new Int32Array(Ce.length + 4096), 0, yr), Ce[Te[or = hr == er ? 0 : hr - gr]] = lr << 20 | yr, Ce[Te[or] = yr++] = hr, ir - gr > Te.length && la(Te, 0, Te = new Int32Array(Te.length + 2048), 0, qr - gr); qr < ir; Ce[Te[qr - gr] = yr++] = qr++) ;
      Fe[er] = un = new Int32Array(yr);
      r:for (tr = ar = 0, nr = 1048575, lr = 1; ;) if (1048575 < (gr = Ce[tr]) && (Ce[tr] = lr << 20 | nr, nr = tr, tr = 1048575 & gr, gr = -(lr = gr >>> 20)), 0 <= (
        un[ar++] = gr)) {
        for (; 0 == --lr;) {
          if (1048575 == nr) break r;
          nr = 1048575 & (lr = Ce[tr = nr]), lr >>>= 20
        }
        tr++
      }
    }
    for (Te = Ce = null, Ue = Array((Se = new Int32Array(er = zn)).length); 0 <= --er;) Ue[er] = new Int32Array(5);
    for (Ar = ce = be = Ie = se = null, An = Array((en = new Int32Array(Vr = Sa)).length), Ee = Zt(qr, Ee, tn, Vn, ml, de, ke, pe, Ue, Se, Xe = Array(qr), en), er = Vr; 0 <= --er;) An[er] = new Int32Array(en[er]);
    for (er = qr; 0 <= --er;) for (tr = ~~((pr = Xe[er]).length / 3); 0 <= --tr;) An[ar = pr[tr]][--en[ar]] = tr << 18 | er;
    for (er = qr, Ve = new Float64Array((Pe = new Int32Array(4)
    ).length); 0 <= --er;) for (tr = ar = ~~((pr = Xe[er]).length / 3), yr = pr[0], ye = null; 0 <= --tr; yr = pr[tr]) if (pr[ar + tr] < 0) {
      for (null == ye && (w = (ye = gn[xr[ln[er >> 9][511 & er]]])[0], s = ye[1], I = ye[2]), gr = (un = An[ir = pr[tr]]).length, ge = 1, Pe[0] = tr << 18 | er; 0 <= --gr;) if ((nr = 262143 & (or = un[gr])) != er && ((Cn = Xe[nr])[((hr = (or >>>= 18) + (lr = ~~(Cn.length / 3))) - (fr = -1)) % lr] == yr || Cn[or = (hr - (fr = 1)) % lr] == yr)) {
        for (P = Math.atan2(Ia(l = s * (a = (ye = gn[xr[ln[nr >> 9][511 & nr]]])[2] * fr) - I * (t = ye[1] * fr), f = I * (e = ye[0] * fr) - w * a, o = w * t - s * e), w * e + s * t + I * a), (P *= 0 <= l * ((
          Ne = Vn[yr >> 7])[hr = 127 & yr] - (sr = Vn[ir >> 7])[lr = 127 & ir]) + f * (Ne[hr + 128] - sr[lr + 128]) + o * (Ne[hr + 256] - sr[lr + 256]) ? -1 : 1) <= Wt && (P += Gt), hr = 0; ++hr < ge && ((On = Ve[hr]) - P >= Dt || P - On < Dt && (Xe[262143 & (lr = Pe[hr])][lr >>> 18] == yr ? fr < 0 && P <= On : fr < 0 || P <= On));) ;
        Mn = Ve, (lr = ge++) == (ie = Pe).length && (la(Pe, 0, Pe = new Int32Array(Pe.length + 2), 0, hr), fa(Ve, 0, Ve = new Float64Array(Ve.length + 2), 0, hr)), la(ie, hr, Pe, hr + 1, lr - hr), fa(Mn, hr, Ve, hr + 1, lr - hr), Pe[hr] = or << 18 | nr, Ve[hr] = P
      }
      for (fr = er, or = 1, lr = tr, gr = ar, Cn = pr; 0 <= --ge; or = 1 - wn, lr = hr, gr = ne, Cn = ie
      ) wn = (ie = Xe[nr = 262143 & (hr = Pe[ge])])[hr >>>= 18] == yr ? 1 : 0, ie[((ne = ~~(ie.length / 3)) << wn) + hr] = or * qr + fr, Cn[(gr << or) + lr] = wn * qr + (fr = nr)
    }
    for (xe = new Int32Array((Re = new Int32Array((Ye = new Int32Array((qe = new Float64Array(qr)).length)).length)).length), er = qr; 0 <= --er;) xe[er] = -1;
    for (De = new Int32Array((En = new Uint8Array((dn = new Int32Array(er = qr << 1)).length)).length), Ge = We = 0; 0 <= --er;) if (!En[er]) {
      for (En[dn[ar = 0] = er] = !0, tr = 1; ar < tr; ar++) for (De[We + ar] = or = dn[ar], (xe[fr = or % qr] < 0 ? xe : Re)[fr] = Ge, gr = (lr = ~~((pr = Xe[fr]
      ).length / 3)) << ~~(or / qr); 0 <= --lr;) En[nr = pr[gr + lr]] || (En[dn[tr++] = nr] = !0);
      for (nr = (Ye[Ge] = We) + tr, P = 0; We < nr; We++) for (tr = 1, gr = ~~((pr = Xe[(ar = De[We]) % qr]).length / 3), ir = 1 - (~~(ar / qr) << 1), h = (sr = Vn[(yr = pr[0]) >> 7])[yr &= 127], g = sr[yr + 128], i = sr[yr + 256], y = (sr = Vn[(yr = pr[1]) >> 7])[yr &= 127], A = sr[yr + 128], u = sr[yr + 256]; ++tr < gr;) P += ((A - g) * ((o = (sr = Vn[(yr = pr[tr]) >> 7])[256 + (yr &= 127)]) - i) - (u - i) * ((A = sr[yr + 128]) - g)) * (h + y + (y = sr[yr])) * ir, u = o;
      qe[Ge++] = P / 6
    }
    for (En = An = Xe = null, je = new Int32Array((Qe = new Int32Array((
      Oe = new Int32Array(er = Ge)).length)).length); 0 <= --er;) Oe[Qe[er] = je[er] = er] = -1;
    for (er = qr; 0 <= --er;) {
      if ((tr = je[xe[er]]) != (ar = je[Re[er]])) for (or = tr + ar - (lr = tr < ar ? tr : ar), Qe[lr] = Qe[Oe[Qe[lr]] = or], Qe[or] = -1; -1 != or; or = Oe[or]) je[or] = lr;
      hn[er >> 9][511 & er] = 0
    }
    for (er = Ge; 0 <= --er;) if (-1 != (gr = Qe[er])) {
      for (tr = er, P = -Number.MAX_VALUE; qe[tr] > P && (P = qe[tr], ar = tr), tr != gr; tr = Oe[tr]) ;
      for (tr = Ye[ar++] - 1, gr = ar == Ge ? qr << 1 : Ye[ar]; ++tr < gr;) hn[(lr = (ar = De[tr]) % qr) >> 9][511 & lr] |= 1 + ~~(ar / qr)
    }
    Ve = qe = null, He = new Int32Array((
      ze = new Int32Array(qr)).length), Pe = Re = xe = Ye = dn = De = Oe = Qe = je = null;
    r:for (er = -1, nr = qr; ++er < nr;) if (0 == hn[tr = (He[er] = er) >> 9][gr = 511 & er]) {
      for (He[er] = -1; ; He[nr] = -1) {
        if (--nr <= er) break r;
        if (0 != (ar = hn[fr = nr >> 9][or = 511 & nr])) break
      }
      tn[(He[nr] = er) >> 9][gr] = tn[fr][or], ln[tr][gr] = ln[fr][or], fn[tr][gr] = fn[fr][or], on[tr][gr] = on[fr][or], hn[tr][gr] = ar
    }
    for (tr = Z; 0 <= --tr;) {
      for (lr = gr = (pr = Fe[tr]).length, ar = 0; 0 <= --lr;) 0 <= (er = pr[lr]) && 0 <= (pr[lr] = ir = He[er]) && (ar |= hn[ir >> 9][511 & ir]);
      3 == ar && la(pr, 0, Fe[tr + Z] = new Int32Array(gr), 0
        , gr)
    }
    for (tr = Z, qr = nr; 0 <= --tr;) for (lr = (Je = Fe[tr]).length, Ke = Fe[tr + Z]; 0 <= --lr;) if (0 <= (er = Je[lr])) if (1 == (ar = hn[gr = er >> 9][nr = 511 & er])) null != Ke && (Ke[lr] = -1); else if (yr = (ir = (pr = tn[gr][nr]).length) - 1, 3 == ar) {
      for (null == tn[fr = qr >> 9] && (on[fr] = new Int16Array((fn[fr] = new Int16Array((ln[fr] = new Int16Array((hn[fr] = new Int8Array((tn[fr] = Array(512)).length)).length)).length)).length)), tn[fr][or = 511 & qr] = un = new Int32Array(pr.length); 0 <= --ir;) un[yr - ir] = pr[ir];
      ln[fr][or] = ln[gr][nr], fn[fr][or] = fn[gr][nr],
        on[fr][or] = on[gr][nr], hn[fr][or] = -(hn[gr][nr] = 1), Ke[lr] = qr++
    } else {
      for (ir >>= 1, hn[gr][nr] = -1; 0 <= --ir;) hr = pr[ir], pr[ir] = pr[yr - ir], pr[yr - ir] = hr;
      null != Ke && (Je[lr] = -1)
    }
    for (tr = Fe.length; 0 <= --tr;) if (null != (pr = Fe[tr])) {
      if ((ir = pr[fr = 0]) < -1) r:for (er = 0, gr = -1; ;) if ((pr[fr] = ir = pr[er++]) < -1) 0 <= gr && (pr[He[gr]] = yr, ze[gr] = hr), He[++gr] = fr++, yr = hr = ir; else for (ir < 0 ? yr++ : fr++; 0 == ++hr;) {
        if (0 == yr ? fr-- : -1 == (pr[ar = He[gr]] = yr) && la(pr, ar + 1, pr, ar, --fr - ar), 0 == gr) break r;
        ar = He[--gr], 0 == yr && ++pr[ar], yr = pr[ar], hr = ze[gr]
      }
      fr < 2 && (
        Fe[tr] = null)
    }
    for (tr = Fe.length, $e = qr, Ze = new Uint8Array(120); 0 <= --tr;) if (null != (pr = Fe[tr])) {
      for (er = 0; (ir = pr[er++]) < 0;) ;
      w = (ye = gn[xr[ar = ln[ir >> 9][511 & ir]]])[0], s = ye[1], h = (1 - (i = -w) * i / (P = 1 + (I = ye[2]) * (xn = I < 0 ? -1 : 1))) * xn, A = 1 - (u = -s * xn) * u / P, y = (g = w * u / P) * xn;
      r:for (or = 1, l = Yr[ar *= 3], f = Dr[ar], o = Gr[ar]; ; or = 2) n:for (er = fr = lr = rt = 0, gr = -1; ;) if ((pr[fr++] = ir = pr[er++]) < 0) 0 <= gr && (ze[gr] = hr), He[++gr] = fr - 1, hr = ir, lr = or; else for (1 == or && Ht(tn[ir >> 9][511 & ir], Vn, l, f, o, h, g, i, y, A, u); 0 == ++hr;) {
        if (0 == --lr) {
          for (Zn = ar = wn = He[gr] - (yr = -1
          ), $n = ne = 0, rt = 1; ar < fr; $n++) for ((ir = pr[ar++]) < 0 ? (nr = $n, yr = ir, ir = pr[ar++]) : 0 == ++yr && (nr = 2147483647), pr[Zn++] = ir, (re = ne + $n) > (Dn = Ze.length) && ((r, n, e, t, a) => {
            let l, f;
            if (l = t + a, (f = n - t) < 0) for (; --l >= t;) e[l] = r[l + f]; else for (; t < l; t++) e[t] = r[t + f]
          })(Ze, 0, Ze = new Uint8Array(re), 0, Dn), re = -1; ++re < $n;) Ze[ne++] = nr <= re;
          for (yr = wn, nr = 0, re = Zn; ++yr < Zn;) e:for (ir = wn - 1; ++ir < yr; nr++) if (!Ze[nr] && 0 <= (kn = pr[ir])) {
            for (ar = (un = tn[kn >> 9][511 & kn]).length, Mn = tn[(pn = pr[yr]) >> 9][511 & pn], M = (sr = Vn[(mn = un[0]) >> 7])[384 + (mn &= 127)],
                   m = sr[mn + 512], et = (sr = Vn[(mn = Mn[0]) >> 7])[384 + (mn &= 127)], tt = sr[mn + 512], nt = 0; 0 <= --ar; M = F, m = k) for (hr = Mn.length, X = (F = (sr = Vn[(mn = un[ar]) >> 7])[384 + (mn &= 127)]) - M, V = (k = sr[mn + 512]) - m, p = et, d = tt; 0 <= --hr; p = E, d = N) if (Math.hypot(S = F - (E = (sr = Vn[(mn = Mn[hr]) >> 7])[384 + (mn &= 127)]), U = k - (N = sr[mn + 512])) > ml && Math.hypot(L = p - M, B = d - m) > ml && Math.abs(L * V - B * X) < (L * X + B * V) * xt && Math.abs(S * V - U * X) < (S * X + U * V) * xt) {
              if (0 < nt++) continue e;
              e = M, t = m, w = F, s = k, T = p, C = d, c = E, b = N, $n = ar, ne = hr
            }
            if (0 < nt) {
              for (ar = un.length; 0 <= --ar;) for (hr = Mn.length,
                                                      mn = un[ar]; 0 <= --hr;) if (Mn[hr] == mn) {
                if (Math.hypot((M = (sr = Vn[mn >> 7])[384 + (mn &= 127)]) - e, (m = sr[mn + 512]) - t) <= ml ? Math.hypot(M - c, m - b) > ml : Math.hypot(M - w, m - s) > ml || Math.hypot(M - T, m - C) > ml) continue e;
                break
              }
              for ((ae = un.length + Mn.length - (at = $t(e, t, c, b, ne, $n, Mn, un, Vn)) - (lt = $t(w, s, T, C, $n, ne, un, Mn, Vn))) == un.length || ae == Mn.length ? (ot = $n + ne - (ft = ae == un.length ? $n : ne) + 2, 3 == (ie = (Cn = ae == un.length ? un : Mn) == un ? Mn : un).length ? Cn[(ft + ((ae == un.length ? at : lt) >> 1)) % Cn.length] = ie[ot % 3] : (Cn[ft] = ie[3 & ot], Cn[(ft + 1
              ) % Cn.length] = ie[ot + 1 & 3])) : (la(un, ft = ($n + (at + 3 >> 1)) % un.length, Cn = new Int32Array(ae), 0, ht = ((ot = $n + (3 - lt >> 1)) > ft ? ot : un.length) - ft), (gt = ot - ft) <= 0 && (gt += un.length, la(un, 0, Cn, ht, ot)), la(Mn, ft = (ne + (lt + 3 >> 1)) % Mn.length, Cn, gt, ht = ((ot = ne + (3 - at >> 1)) > ft ? ot : Mn.length) - ft), ot <= ft && la(Mn, 0, Cn, gt + ht, ot)), tn[(pr[yr] = ae = kn + pn - (ot = pn < kn ? kn : pn)) >> 9][511 & ae] = Cn, ft = yr - wn - 1, tn[ot >> 9][511 & ot] = null, ot = Zn - wn + (pr[ir] = -1), ht = nr + (gt = yr - ir), re--, $e--; ++ft < ot;) Ze[ht += ft] &= Ze[ht - gt]
            }
          }
          if (1 == wn) break r;
          if (pr[wn - 1] = wn - re, (fr = re
          ) < Zn) e:for (; wn < Zn; wn++) if (pr[wn] < 0) {
            do {
              if (--Zn <= wn) break e
            } while (pr[Zn] < 0);
            pr[wn] = pr[Zn]
          }
        }
        if (0 == gr) {
          if (0 != rt) break n;
          break r
        }
        hr = ze[--gr], lr = or - 1
      }
    }
    if (Ze = ze = He = null, $e < qr) {
      r:for (er = -1, D = 0; ++er < $e;) {
        if (null == (pr = tn[ar = er >> 9][gr = 511 & er])) {
          do {
            if (--qr <= er) break r
          } while (null == tn[fr = qr >> 9][or = 511 & qr]);
          tn[ar][gr] = pr = tn[fr][or], ln[ar][gr] = ln[fr][or], fn[ar][gr] = fn[fr][or], on[ar][gr] = on[fr][or], hn[ar][gr] = hn[fr][or]
        }
        (tr = pr.length) > D && (D = tr)
      }
      if (qr = $e, G < D) {
        for (ue = Array(D + 1), er = D + 1, tr = jn - 2 + (3 * D >> 1); 0 <= --er;
        ) ue[er] = new Int32Array(tr);
        for (we = Array(er = 3); 0 <= --er;) we[er] = new Int32Array(ue.length)
      }
    }
    for (er = Va = qr, ar = -1, it = Array(512); 0 <= --er; it[tr][511 & er] = ar, ar = er) null == it[tr = er >> 9] && (it[tr] = new Int32Array(512));
    r:for (yr = At = 0, ut = lr = -1, yt = 2, wt = null, pr = new Int32Array(jn), It = new Int32Array(jn), st = Array(256); ; ut--) {
      for (tr = yr, er = -1; 0 <= tr; tr = it[ne][wn]) It[ar = Hn[ln[ne = tr >> 9][wn = 511 & tr]]] != ut && (It[ar] = ut, er < 0 ? er = ar : pr[gr] = ar, gr = ar);
      for (ar = 0, pr[gr] = -1, gr = 2147483647; 0 <= er; er = pr[er]) {
        for (tr = yr,
               nr = hr = ir = 0; 0 <= tr; tr = it[ne][wn]) Hn[bt = ln[ne = tr >> 9][wn = 511 & tr]] == er ? nr++ : (3 == (or = ga(un = tn[ne][wn], ct = gn[Qn[er]], Vn)) && (hr += ((r, n, e, t, a) => {
          let l, f, o, h, g, i, y, A, u, w, s, I, c, b, v, M, m, F, k, p, d, E, N, T, C, L, B, S, U, X, V, P, _, q;
          for (f = (q = dl[rf[t]])[0] * r, o = q[1] * r, h = q[2] * r, g = e[0], i = e[1], y = e[2], A = e[3], P = 0; ; P++) if (Math.abs(T = (I = (l = a[(V = n[P]) >> 7])[V &= 127]) * g + (c = l[V + 128]) * i + (b = l[V + 256]) * y + A) > ml) {
            B = T / Math.abs(T);
            break
          }
          for (_ = P++ + n.length, C = X = 0; ; P++) {
            if (S = Math.abs(T = (v = (l = a[(V = n[P % n.length]) >> 7])[V &= 127]) * g + (M = l[V + 128]
            ) * i + (m = l[V + 256]) * y + A) > ml ? T / Math.abs(T) : 0, 0 == C) 0 == S ? C = 1 : S != B && X++; else if (1 == C) 0 != S && S != L ? (X++, C = 0) : (C = ((k = c - w) * (N = m - b) - (E = M - c) * (p = b - s)) * f + (p * (d = v - I) - N * (F = I - u)) * o + (F * E - d * k) * h < 0 ? 8 : 2, 0 == S ? U = L : (X += C >> 2, C = 0)); else {
              if (0 == S) {
                I = v, c = M, b = m;
                continue
              }
              X += S != U ? 1 : C >> 2, C = 0
            }
            if (_ <= P) return X >> 1;
            u = I, w = c, s = b, L = B, I = v, c = M, b = m, B = S
          }
        })(hn[ne][wn], un, ct, bt, Vn)), ir |= or);
        (0 != nr || 3 == ir) && hr <= gr && (hr < gr || ar < nr) && (fr = er, gr = hr, ar = nr)
      }
      for (null != wt && (wt[yt] = At), ct = gn[Qn[((st[ne = At >> 8] = null == st[ne] ? Array(256) : st[ne]
      )[255 & At++] = wt = new Int32Array(ar + 3))[0] = fr]], ar = yr, ir = yr = -1, nr = 3; 0 <= (tr = ar);) if (ar = it[ne = tr >> 9][wn = 511 & tr], Hn[ln[ne][wn]] == fr) wt[nr++] = tr; else {
        if (3 == (or = ga(un = tn[ne][wn], ct, Vn))) {
          for (Le = !0, ya(tr, ct, tn, hn, an, ue, we, Bn, Jr, Zr, $r, Pn, Vn), or = ga(tn[ne][wn], ct, Vn), hr = qr, qr = Va; hr < qr; it[re][511 & hr] = ar, ar = hr++) null == it[re = hr >> 9] && (it[re] = new Int32Array(512));
          it[ne][wn] = ar
        }
        1 == or ? (ir < 0 ? ir = tr : it[gr >> 9][511 & gr] = tr, gr = tr) : (yr < 0 ? yr = tr : it[er >> 9][511 & er] = tr, er = tr)
      }
      for (0 <= yr && (it[er >> 9][511 & er] = -1), 0 <= ir && (
        it[gr >> 9][511 & gr] = -1), wt[1] = yr, wt[2] = ir; ;) {
        if (1 == (yt = 3 - yt) && ++lr >= At) break r;
        if (0 <= (yr = (wt = st[lr >> 8][255 & lr])[yt])) break
      }
    }
    for (tr = At + 256 - ((er = At + 255 >> 8) << 8), Wl = Array(At); 0 <= --er; tr = 256) aa(st[er], 0, Wl, er << 8, tr);
    if (Zt(Va = qr, Ee, tn, Vn, ml, de, ke, pe, Ue, Se, null, null), Ue = ue = we = Fe = Pn = it = Se = pe = ke = de = null, (Vr = Sa) > q) {
      for (en = new Int32Array(er = Vr); --er >= Xa;) en[er] = -1;
      for (er = Xa; 0 <= --er;) en[er] = er;
      for (er = qr; 0 <= --er;) for (tr = (pr = tn[er >> 9][511 & er]).length; 0 <= --tr;) en[ar = pr[tr]] = ar;
      r:for (er = Xa - 1, yr = Vr; ++er < yr;) if (
        en[er] < 0) {
        do {
          if (--yr <= er) break r
        } while (en[yr] < 0);
        en[yr] = er
      }
      for (jr = Bl = new Float64Array((Qr = Ll = new Float64Array((Or = Cl = new Float64Array((Tl = new Float64Array((Nl = new Float64Array(yr)).length)).length)).length)).length), er = Vr; 0 <= --er;) 0 <= (ar = en[er]) && (Or[ar] = (sr = Vn[er >> 7])[fr = 127 & er], Qr[ar] = sr[fr + 128], jr[ar] = sr[fr + 256]);
      for (Vr = Sa = yr, er = qr; 0 <= --er;) for (tr = (pr = tn[er >> 9][511 & er]).length; 0 <= --tr;) pr[tr] = en[pr[tr]]
    }
    for (en = $r = Qn = Hn = It = Vn = null, er = qr, pr = new Int32Array(Pr), vt = Array((Er = new Int32Array(Z)
    ).length); 0 <= --er;) pr[ln[tr = er >> 9][ar = 511 & er]]++, Er[fn[tr][ar]]++;
    for (er = Pr; 0 <= --er;) Rr[er] = new Int32Array(pr[er]), pr[er] = 0;
    for (er = Z; 0 <= --er;) vt[er] = new Int32Array(Er[er]), Er[er] = 0;
    for (lf = Array(er = qr), D = 0; 0 <= --er;) Rr[tr = ln[gr = er >> 9][lr = 511 & er]][pr[tr]++] = er, vt[ar = fn[gr][lr]][Er[ar]++] = er, lf[er] = (ar = Tr[tr]) < 0 ? _b[31 & -ar] : Cr[ar], (ar = tn[gr][lr].length) > D && (D = ar);
    for (tr = qr + 512 - ((er = qr + 511 >> 9) << 9), Kl = new Int8Array((Dl = Array(qr)).length); 0 <= --er; tr = 512) aa(tn[er], 0, Dl, ar = er << 9, tr), ((r, n, e, t, a) => {
      let l, f;
      if (l = t + a, (f = n - t) < 0) for (; --l >= t;) e[l] = r[l + f]; else for (; t < l; t++) e[t] = r[t + f]
    })(hn[er], 0, Kl, ar, tr);
    for (hn = tn = st = null, xl = Array((Rl = Array(qr)).length), kr = new Int32Array((Fr = new Int32Array((dr = new Int32Array(D)).length + 1)).length), Le && (Er = new Int32Array(D)), Mt = Gl = Array(qr), mt = Nl, Ft = Tl, kt = new Int32Array(0), pt = new Int32Array(0), hr = Z; 0 <= --hr;) if (0 != (dt = vt[hr]).length) {
      for (P = 1 + (I = (Mn = gn[xr[bt = ln[(er = dt[0]) >> 9][511 & er]]])[2]) * (xn = I < 0 ? -1 : 1), h = (1 - (i = -Mn[0]) * i / P) * xn, A = 1 - (u = -Mn[1] * xn) * u / P, y = (g = -i * u / P) * xn
             , l = Yr[ar = 3 * bt], f = Dr[ar], o = Gr[ar], tr = (Cn = Ae[hr]).length; 0 <= --tr;) mt[yr = Cn[tr]] = h * (e = Or[yr] - l) + g * (t = Qr[yr] - f) + i * (a = jr[yr] - o), Ft[yr] = y * e + A * t + u * a;
      for (er = dt.length; 0 <= --er;) {
        for (tr = (ye = Dl[nr = dt[er]]).length; 0 <= --tr;) mt[yr = ye[tr]] = h * (e = Or[yr] - l) + g * (t = Qr[yr] - f) + i * (a = jr[yr] - o), Ft[yr] = y * e + A * t + u * a;
        for (pr = Fr, We = Cn.length - 1, ie = Array(0), M = mt[yr = ye[Ct = or = (1 - (ir = Kl[nr]) >> 1) * ((fr = ye.length) - 1)]], m = Ft[yr], Nt = Tt = -1, Et = tr = ar = lr = 0; 0 <= --fr;) {
          for (P = Math.hypot(X = (F = mt[mn = ye[Lt = or + ir * fr]]) - M, V = (k = Ft[mn]) - m), gr = We,
                 p = mt[Fn = Cn[0]], d = Ft[Fn]; E = mt[Vt = Cn[gr]], N = Ft[Vt], Rn = Yn = Number.MAX_VALUE, (Vt == mn && Fn == yr || (Rn = Math.hypot(L = E - M, B = N - m)) > ml && (Yn = Math.hypot(S = F - p, U = k - d)) > ml && Math.abs(L * V - B * X) < (L * X + B * V) * xt && Math.abs(S * V - U * X) < (S * X + U * V) * xt) && ((Pt = Yn < P ? Fn : yr) != yr || 0 != lr && dr[lr - 1] == Ct || (dr[lr++] = Ct), (_t = Rn < P ? Vt : mn) != mn || 0 != lr && dr[0] == Lt || (dr[lr++] = Lt), 0 != tr && Pt == Tt || (0 == tr ? (Nt = Pt, Ut = Ct) : (pr == Fr ? (ar = tr, pr = kr, Xt = St) : (kt = oa(kt, ie.length, Bt, 1), pt = oa(pt, ie.length, St, 1), ie = ha(ie, un = new Int32Array(tr)), la(pr, 0, un, 0, tr), Et += tr
          ), Bt = Ct), pr[0] = Pt, tr = 1), pr[tr++] = Tt = _t, St = Ct), 0 != gr; gr--) Fn = Vt, p = E, d = N;
          yr = mn, Ct = Lt, M = F, m = k
        }
        if (0 <= Nt) if (Nt != Tt ? (pr == Fr ? (ar = tr, Xt = St) : (kt = oa(kt, ie.length, Bt, 1), pt = oa(pt, ie.length, St, 1), ie = ha(ie, un = new Int32Array(tr)), la(kr, 0, un, 0, tr), Et += tr), kt = oa(kt, ie.length, Ut, 1), pt = oa(pt, ie.length, Xt, 1), xl[nr] = ie = ha(ie, un = new Int32Array(ar)), la(Fr, 0, un, 0, ar), Et += ar) : 0 == ar ? Et = ye.length : (kt = oa(kt, ie.length, Bt, 1), pt = oa(pt, ie.length, Xt, 1), xl[nr] = ie = ha(ie, un = new Int32Array(fr = --tr + ar)), la(kr, 0, un, 0, tr), la(Fr, 0, un,
          tr, ar), Et += fr), 0 == ie.length) Rl[nr] = Array(0); else for (Rl[nr] = qt = Array(ie.length), ar = -1, gr = ie.length - 1, ir = ye.length - ir; ++ar < ie.length; gr = ar) {
          if (Ct = pt[gr], Fr[0] = mn = (un = ie[gr])[un.length - (tr = 1)], Lt = kt[ar], Fn = ie[ar][0], Ct == Lt && Math.hypot((M = mt[Nt = ye[Ct]]) - mt[mn], (m = Ft[Nt]) - Ft[mn]) < Math.hypot(M - mt[Fn], m - Ft[Fn]) && (Fr[tr++] = Fn), 1 == tr) {
            for (mn != (yr = ye[Bt = (Ct + ir) % ye.length]) && Math.hypot(mt[yr] - mt[mn], Ft[yr] - Ft[mn]) > ml && (Fr[tr++] = yr); Bt != Lt;) Fr[tr++] = yr = ye[Bt = (Bt + ir) % ye.length];
            yr != Fn && Math.hypot(
              mt[Fn] - mt[yr], Ft[Fn] - Ft[yr]) > ml && (Fr[tr++] = Fn)
          }
          la(Fr, 0, qt[ar] = new Int32Array(tr), 0, tr)
        } else xl[nr] = ie = Array(0);
        if (lr == ye.length && Et == ye.length) Mt[nr] = ye; else {
          if (la(ye, 0, Er, 0, tr = ye.length), 0 < lr) {
            for (; 0 < lr;) Er[dr[--lr]] = -1;
            for (fr = tr = 0; fr < ye.length;) 0 <= (Er[tr] = Er[fr++]) && tr++
          }
          for (la(Er, 0, Mt[nr] = Je = new Int32Array(Et + tr), 0, tr), fr = 0; fr < ie.length; tr += un.length) la(un = ie[fr++], 0, Je, tr, un.length)
        }
      }
    }
    for (vt = an = Cr = Lr = rf = Fr = kr = dr = Er = kt = pt = Tr = dl = null, jl = Array(er = 2), tr = (ar = R < D ? D : R) > G ? ar : G; 0 <= --er;
    ) jl[er] = new Int32Array(tr);
    for (zl = Array(er = 2), tr = ($l = new Int32Array(Vr)).length; 0 <= --er;) zl[er] = new Int32Array(tr);
    ef = new Int32Array((Zl = new Int8Array(Z < qr ? qr : Z)).length), Hl = new Uint8Array(qr), af = new Int32Array(At), yl = Al = ul = !1, zt.addEventListener('contextmenu', ba, !1), zt.addEventListener('mousedown', va, !1), zt.addEventListener('touchstart', Ma, !1), document.addEventListener('mouseup', ma, !1), document.addEventListener('touchend', Fa, !1), document.addEventListener('mousemove', ka, !1),
      document.addEventListener('touchmove', pa, !1), document.addEventListener('mouseleave', da, !1), il = 0, Ea(), Na()
  })())
}

window.addEventListener('load', _n, !1);
