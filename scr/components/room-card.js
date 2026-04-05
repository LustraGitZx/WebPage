class RoomCard extends HTMLElement {
  connectedCallback() {
    const img = this.getAttribute('img');
    const name = this.getAttribute('name');
    const tag = this.getAttribute('tag');
    const type = this.getAttribute('data-room-type') || '';
    const floor = this.getAttribute('data-floor') || '';

    this.style.display = 'block';
    this.classList.add('room-card', 'reveal');
    this.style.cursor = 'pointer';   // рука при наведении

    this.innerHTML = `
      <img src="${img}" alt="${name}" class="room-img">
      <div class="room-info">
        <h3 class="room-name">${name}</h3>
        <p class="room-tag">${tag}</p>
      </div>
    `;

    // Восстанавливаем data-атрибуты
    this.dataset.roomType = type;
    this.dataset.floor = floor;

    // Клик по всей карточке → открываем модалку
    this.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('room-select', {
        bubbles: true,
        detail: { type, floor, name, img, tag }
      }));
    });
  }
}

customElements.define('room-card', RoomCard);