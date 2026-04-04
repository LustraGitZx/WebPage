function toggleMob() {
  const m = document.getElementById('mobNav');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}
function closeMob() {
  document.getElementById('mobNav').style.display = 'none';
}

// Date initialization
(function() {
  const t = new Date();
  const tmr = new Date(t);
  tmr.setDate(t.getDate() + 1);
  const f = d => d.toISOString().split('T')[0];
  const ci = document.getElementById('ci');
  const co = document.getElementById('co');
  if (ci && co) {
    ci.value = f(t);
    co.value = f(tmr);
    ci.min = f(t);
    co.min = f(tmr);
    ci.addEventListener('change', function() {
      const d = new Date(this.value);
      d.setDate(d.getDate() + 1);
      if (!co.value || co.value <= this.value) co.value = f(d);
      co.min = f(d);
    });
  }
})();

function updateModule() {
  document.getElementById('tl-booking-form').scrollIntoView({ behavior: 'smooth' });
}

// TravelLine Integration
window.addEventListener('message', function(e) {
  if (e.origin === 'https://ru-ibe.tlintegration.ru' || e.origin === 'https://ibe.tlintegration.ru') {
    console.log('TL event:', e.data);
  }
});

(function(w) {
  var q = [
    ["setContext", "TL-INT-5ugol_2025-11-21", "ru"],
    ["embed", "booking-form", { container: "tl-booking-form" }],
    ["embed", "search-form", { container: "tl-search-form" }],
    ['embed', 'guest-account', { container: 'tl-guest-account' }]
  ];
  var h = ["ru-ibe.tlintegration.ru", "ibe.tlintegration.ru", "ibe.tlintegration.com"];
  var t = w.travelline = (w.travelline || {}), ti = t.integration = (t.integration || {});
  ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
  if (!ti.__loader) {
    ti.__loader = true;
    var d = w.document, c = d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0];
    function e(s, f) { return function() { w.TL || (c.removeChild(s), f()) } }
    (function l(h) {
      if (0 === h.length) return;
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.async = !0;
      s.src = "https://" + h[0] + "/integration/loader.js";
      s.onerror = s.onload = e(s, function() { l(h.slice(1, h.length)) });
      c.appendChild(s);
    })(h);
  }
})(window);