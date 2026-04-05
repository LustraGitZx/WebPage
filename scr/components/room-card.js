class RoomCard extends HTMLElement {
  connectedCallback() {
    const img   = this.getAttribute('img');
    const name  = this.getAttribute('name');
    const tag   = this.getAttribute('tag');
    const type  = this.getAttribute('data-room-type') || '';
    const floor = this.getAttribute('data-floor') || '';

    this.classList.add('room-card', 'reveal');
    this.dataset.roomType = type;
    this.dataset.floor = floor;

    this.innerHTML = `
      <img class="room-img" src="${img}" alt="${name}" loading="lazy">
      <div class="room-body">
        <h3>${name}</h3>
        <div class="room-tag">${tag}</div>
        <a class="room-link" href="javascript:void(0)">Подробнее</a>
      </div>
    `;

    this.querySelector('.room-link').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('room-select', {
        bubbles: true,
        detail: { type, floor, name, img, tag }
      }));
    });
  }
}

customElements.define('room-card', RoomCard);
