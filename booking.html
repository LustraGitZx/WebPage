class TlWidget extends HTMLElement {
  connectedCallback() {
    const embed = this.getAttribute('embed') || 'search-form';
    const containerId = `tl-${embed}-${Math.random().toString(36).slice(2, 7)}`;

    this.innerHTML = `<div id="${containerId}"></div>`;
    this._initTL(embed, containerId);
  }

  _initTL(embed, containerId) {
    (function (w) {
      const q = [
        ['setContext', 'TL-INT-5ugol_2025-11-21', 'ru'],
        ['embed', embed, { container: containerId }],
        ['embed', 'guest-account', { container: 'tl-guest-account' }],
      ];
      const h = ['ru-ibe.tlintegration.ru', 'ibe.tlintegration.ru', 'ibe.tlintegration.com'];
      const t = (w.travelline = w.travelline || {});
      const ti = (t.integration = t.integration || {});
      ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
      if (!ti.__loader) {
        ti.__loader = true;
        const d = w.document;
        const c = d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0];
        const e = (s, f) => () => { w.TL || (c.removeChild(s), f()); };
        (function l(h) {
          if (!h.length) return;
          const s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://' + h[0] + '/integration/loader.js';
          s.onerror = s.onload = e(s, () => l(h.slice(1)));
          c.appendChild(s);
        })(h);
      }
    })(window);
  }
}

customElements.define('tl-widget', TlWidget);
