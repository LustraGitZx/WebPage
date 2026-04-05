class HotelNavbar extends HTMLElement {
  static get observedAttributes() {
    return ['active'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const active = this.getAttribute('active') || 'home';

    this.innerHTML = `
      <nav>
        <a class="nav-logo" href="index.html">
          <div class="logo-mark">
            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="7,1 13,5 11,12 3,12 1,5" fill="none" stroke="white" stroke-width="1.5"/>
            </svg>
          </div>
          5 Угол
        </a>
        <ul class="nav-links">
          <li><a href="index.html" ${active === 'home' ? 'class="active"' : ''}>Главная</a></li>
          <li><a href="conference.html" ${active === 'conference' ? 'class="active"' : ''}>Конференц-зал</a></li>
          <li><a href="booking.html" class="nav-cta ${active === 'booking' ? 'active' : ''}">Забронировать</a></li>
        </ul>
        <div class="burger" id="burger-btn"><span></span><span></span><span></span></div>
      </nav>

      <div class="mob-nav" id="mobNav">
        <a href="index.html">Главная</a>
        <a href="conference.html">Конференц-зал</a>
        <a href="booking.html" class="mob-cta">Забронировать</a>
      </div>
    `;

    this._bindEvents();
  }

  _bindEvents() {
    const burger = this.querySelector('#burger-btn');
    const mobNav = this.querySelector('#mobNav');

    burger?.addEventListener('click', () => {
      mobNav.classList.toggle('open');
      burger.classList.toggle('open');
    });

    this.querySelectorAll('.mob-nav a').forEach(link => {
      link.addEventListener('click', () => {
        mobNav.classList.remove('open');
        burger?.classList.remove('open');
      });
    });
  }
}

customElements.define('hotel-navbar', HotelNavbar);
