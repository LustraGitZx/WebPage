class HotelNavbar extends HTMLElement {
  static get observedAttributes() {
    return ['active'];
  }

connectedCallback() {
    this.render();
    this._bindEvents();
  }

  attributeChangedCallback() {
    this.render();
  }

 render() {
    this.innerHTML = `
      <nav>
        <div class="nav-logo">
          <a href="index.html">5 Угол</a>
        </div>

        <!-- Десктоп меню -->
        <div class="nav-links">
          <a href="index.html" class="${this.getAttribute('active')==='home'?'active':''}">Главная</a>
          <a href="conference.html">Конференц-зал</a>
          <a href="booking.html">Забронировать</a>
        </div>

        <!-- Бургер -->
        <button id="burger-btn" class="burger" aria-label="Меню">
          <span></span><span></span><span></span>
        </button>

        <!-- Мобильное меню -->
        <div id="mobNav" class="mob-nav">
          <a href="index.html">Главная</a>
          <a href="conference.html">Конференц-зал</a>
          <a href="booking.html">Забронировать</a>
          <a href="booking.html" class="mob-cta">Забронировать сейчас</a>
        </div>
      </nav>
    `;
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
