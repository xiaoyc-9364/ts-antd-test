(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    h2lT: function(n, t, i) {
      'use strict';
      i.r(t);
      var r = i('43Yg'),
        e = i.n(r),
        o = i('/tCh'),
        c = i.n(o),
        u = i('uqIC'),
        a = i.n(u);
      var f = ['Bob', 'Fred'][1];
      function w(n, t, i) {
        return new n(t, i);
      }
      var l = (function() {
          function n(t, i) {
            e()(this, n), (t = t);
          }
          return c()(n, [{ key: 'tick', value: function() {} }]), n;
        })(),
        h = (function() {
          function n(t, i) {
            e()(this, n);
          }
          return c()(n, [{ key: 'tick', value: function() {} }]), n;
        })(),
        d = w(l, 12, 17),
        s = w(h, 7, 32);
      s.tick(),
        (t.default = function() {
          return a.a.createElement(
            'div',
            null,
            ((n = { width: 100 }),
            (t = { color: 'white', area: 100 }),
            n.color && (t.color = n.color),
            n.width && (t.area = n.width * n.width),
            t).area,
            f,
            JSON.stringify(d),
            JSON.stringify(s),
          );
          var n, t;
        });
    },
  },
]);
