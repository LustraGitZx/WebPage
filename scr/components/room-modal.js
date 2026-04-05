// Данные о номерах — единый источник правды
const ROOM_DATA = {
  family:   { title: 'Семейный номер',      desc: 'Просторный номер для семей с детьми. Идеально подходит для длительного проживания.', floor: '3 этаж' },
  luxe:     { title: 'Люкс',                desc: 'Премиальный номер с панорамным видом и повышенным уровнем комфорта.', floor: '3–4 этаж' },
  standard: { title: 'Стандарт',            desc: 'Классический номер с оптимальным соотношением цены и качества.', floor: '3–4 этаж' },
  comfort:  { title: 'Комфорт',             desc: 'Улучшенный номер с расширенным пространством и дополнительными удобствами.', floor: '3–4 этаж' },
  attic:    { title: 'Мансарда',            desc: 'Особенный номер с характерными скошенными потолками — настоящий петербургский шарм.', floor: '5 этаж' },
  apartment1: { title: 'Апартаменты 1-комн.', desc: 'Просторные апартаменты с домашней атмосферой для длительного проживания.', floor: '1–2 этаж' },
  apartment2: { title: 'Апартаменты 2-комн.', desc: 'Максимум пространства: две изолированные комнаты и полное оснащение.', floor: '1–2 этаж' },
};

// Общие удобства для всех номеров (как ты просил)
const COMMON_AMENITIES = {
  room: [
    '❄️ Холодильник',
    '❄️ Кондиционер',
    '🔑 Электронные замки',
    '📶 Wi-Fi',
    '👔 Шкаф для одежды',
    '📺 Телевизор',
    '🔒 Сейф',
    '🩴 Тапочки'
  ],
  bathroom: [
    '💨 Фен',
    '🚽 Унитаз',
    '🚿 Душ',
    '🪣 Раковина',
    '🧖‍♂️ Комплект полотенец',
    '🧻 Туалетная бумага',
    '🧴 Жидкое мыло-гель для тела и волос',
    '🧼 Жидкое мыло-пена для рук'
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

    // Слушаем событие от room-card
    document.addEventListener('room-select', e => this.open(e.detail));
  }

  open({ type, name, img, tag }) {
    const data = ROOM_DATA[type] || {};

    const roomList = COMMON_AMENITIES.room.map(item => `<li>${item}</li>`).join('');
    const bathroomList = COMMON_AMENITIES.bathroom.map(item => `<li>${item}</li>`).join('');

    this.querySelector('#modalBody').innerHTML = `
      <img src="${img}" alt="${name}" style="width:100%;border-radius:12px;margin-bottom:1.5rem">
      <h2>${data.title || name}</h2>
      <p class="room-tag" style="margin:0.5rem 0 1rem">${tag}</p>
      <p>${data.desc || ''}</p>

      <p style="margin:1.5rem 0 0.5rem;color:#e67e22;font-weight:600">
        ✅ Ванная комната находится в номере (санузел в номере)
      </p>

      <h3 style="margin:1.8rem 0 0.8rem 0">В номере:</h3>
      <ul style="margin-bottom:1.8rem;padding-left:1.2rem">${roomList}</ul>

      <h3 style="margin:1.2rem 0 0.8rem 0">В ванной комнате:</h3>
      <ul style="padding-left:1.2rem">${bathroomList}</ul>

      <p style="margin-top:1.5rem;color:var(--gray);font-size:0.9rem">Этаж: ${data.floor || ''}</p>
      <a class="btn btn-primary" href="booking.html" style="margin-top:2rem;display:inline-block">Забронировать этот номер</a>
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