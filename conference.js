// Данные о номерах — единый источник правды
const ROOM_DATA = {
  family: {
    title: 'Семейный номер',
    desc: 'Просторный номер для семей с детьми. Идеально подходит для длительного проживания.',
    features: ['Две отдельные кровати', 'Детская кроватка по запросу', 'Просторная ванная', 'Мини-кухня'],
    floor: '3 этаж',
  },
  luxe: {
    title: 'Люкс',
    desc: 'Премиальный номер с панорамным видом и повышенным уровнем комфорта.',
    features: ['Кровать King Size', 'Гидромассажная ванна', 'Панорамный вид', 'Халат и тапочки'],
    floor: '3–4 этаж',
  },
  standard: {
    title: 'Стандарт',
    desc: 'Классический номер с оптимальным соотношением цены и качества.',
    features: ['Двуспальная кровать', 'Рабочий стол', 'Душевая кабина', 'Wi-Fi'],
    floor: '3–4 этаж',
  },
  comfort: {
    title: 'Комфорт',
    desc: 'Улучшенный номер с расширенным пространством и дополнительными удобствами.',
    features: ['Двуспальная кровать', 'Диван', 'Ванная', 'Мини-бар'],
    floor: '3–4 этаж',
  },
  attic: {
    title: 'Мансарда',
    desc: 'Особенный номер с характерными скошенными потолками — настоящий петербургский шарм.',
    features: ['Скошенные потолки', 'Уютная атмосфера', 'Двуспальная кровать', 'Душевая'],
    floor: '5 этаж',
  },
  apartment1: {
    title: 'Апартаменты 1-комн.',
    desc: 'Просторные апартаменты с домашней атмосферой для длительного проживания.',
    features: ['Гостиная зона', 'Полноценная кухня', 'Стиральная машина', 'Отдельная спальня'],
    floor: '1–2 этаж',
  },
  apartment2: {
    title: 'Апартаменты 2-комн.',
    desc: 'Максимум пространства: две изолированные комнаты и полное оснащение.',
    features: ['Две спальни', 'Гостиная', 'Полноценная кухня', 'Стиральная машина'],
    floor: '1–2 этаж',
  },
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

    // Слушаем событие выбора номера от room-card
    document.addEventListener('room-select', e => this.open(e.detail));
  }

  open({ type, name, img, tag }) {
    const data = ROOM_DATA[type] || {};
    const features = (data.features || []).map(f => `<li>${f}</li>`).join('');

    this.querySelector('#modalBody').innerHTML = `
      <img src="${img}" alt="${name}" style="width:100%;border-radius:8px;margin-bottom:1.2rem">
      <h2>${data.title || name}</h2>
      <p class="room-tag" style="margin:.5rem 0 1rem">${tag}</p>
      <p>${data.desc || ''}</p>
      ${features ? `<ul style="margin-top:1rem;padding-left:1.2rem">${features}</ul>` : ''}
      <p style="margin-top:1rem;color:var(--gray);font-size:.85rem">Этаж: ${data.floor || ''}</p>
      <a class="btn btn-primary" href="booking.html" style="margin-top:1.5rem;display:inline-block">Забронировать</a>
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
