const COMMON_AMENITIES = {
  room: [
    'Холодильник',
    'Кондиционер',
    'Электронные замки',
    'Wi-Fi',
    'Шкаф для одежды',
    'Телевизор',
    'Сейф',
    'Тапочки'
  ],
  bathroom: [
    'Фен',
    'Унитаз',
    'Душ',
    'Раковина',
    'Комплект полотенец',
    'Туалетная бумага',
    'Жидкое мыло-гель для тела и волос',
    'Жидкое мыло-пена для рук'
  ]
};

class RoomModal extends HTMLElement {
  connectedCallback() {
    this.id = 'roomModal';
    this.className = 'modal';
    this.innerHTML = `
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <div id="modalBody"></div>
      </div>
    `;

    this.querySelector('.modal-close').addEventListener('click', () => this.close());
    this.addEventListener('click', e => { if (e.target === this) this.close(); });

    document.addEventListener('room-select', e => this.open(e.detail));
  }

  open({ type, name, img, tag }) {
    const roomList = COMMON_AMENITIES.room.map(item => `<li>${item}</li>`).join('');
    const bathroomList = COMMON_AMENITIES.bathroom.map(item => `<li>${item}</li>`).join('');

    this.querySelector('#modalBody').innerHTML = `
      <img src="${img}" alt="${name}" style="width:100%; border-radius:12px; margin-bottom:28px; display:block;">

      <h2 style="font-size:28px; font-weight:700; color:var(--navy); margin:0 0 8px;">${name}</h2>
      <p style="font-size:13px; text-transform:uppercase; letter-spacing:0.1em; color:var(--gray); margin-bottom:24px;">${tag}</p>

      <p style="margin-bottom:28px; line-height:1.6; color:#333;">
        Ванная комната находится в номере (санузел в номере)
      </p>

      <h3 style="font-size:17px; font-weight:600; margin:0 0 12px; color:var(--navy);">В номере:</h3>
      <ul style="margin-bottom:32px; padding-left:20px; line-height:1.7;">${roomList}</ul>

      <h3 style="font-size:17px; font-weight:600; margin:0 0 12px; color:var(--navy);">В ванной комнате:</h3>
      <ul style="padding-left:20px; line-height:1.7;">${bathroomList}</ul>

      <a class="btn btn-primary" href="booking.html" 
         style="margin-top:32px; display:inline-block; width:100%; text-align:center;">
        Забронировать этот номер
      </a>
    `;

    this.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.classList.remove('open');
    document.body.style.overflow = '';
  }
}

customElements.define('room-modal', RoomModal);
