class PromoCard extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute('image');
    const title = this.getAttribute('title');
    const description = this.getAttribute('description');

    this.style.display = 'block';
    this.classList.add('promo-card', 'reveal');

    this.innerHTML = `
      <img class="promo-img" src="${image}" alt="${title}" loading="lazy">
      <div class="promo-body">
        <h3 class="promo-title">${title}</h3>
        <p class="promo-description">${description}</p>
      </div>
    `;
  }
}

customElements.define('promo-card', PromoCard);
