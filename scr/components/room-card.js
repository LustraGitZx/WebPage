class RoomCard extends HTMLElement {
  connectedCallback() {
    const img   = this.getAttribute('img');
    const name  = this.getAttribute('name');
    const tag   = this.getAttribute('tag');
    const type  = this.getAttribute('data-room-type') || '';
    const floor = this.getAttribute('data-floor') || '';

    this.style.display = 'block';
    this.classList.add('room-card', 'reveal');

    this.innerHTML = `
      <img class="room-img" src="${img}" alt="${name}" loading="lazy">
      <div class="room-body">
        <h3>${name}</h3>
        <div class="room-tag">${tag}</div>
      </div>
    `;

    this.dataset.roomType = type;
    this.dataset.floor = floor;

    // Клик по ВСЕЙ карточке → открываем модалку
    this.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('room-select', {
        bubbles: true,
        detail: { type, floor, name, img, tag }
      }));
    });
  }
}

customElements.define('room-card', RoomCard);
