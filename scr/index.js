// ------ Модальное окно с описанием номеров ------
const modal = document.getElementById('roomModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.modal-close');

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

modal.addEventListener('click', function(e) {
  if (e.target === modal) closeModal();
});
if (closeBtn) closeBtn.addEventListener('click', closeModal);

// База данных описаний (по ключу комнаты)
const roomDetails = {
  family: {
    title: 'Семейный',
    area: '35 кв.м',
    capacity: 'до 4 человек',
    beds: '1 двуспальная кровать (180×200 см) + 2 односпальные кровати (80×200 см)',
    layout: 'две изолированные комнаты',
    floor: '3 этаж',
    extra: 'номера для некурящих'
  },
  luxe: {
    title: 'Люкс',
    area: '58 кв.м',
    capacity: 'до 4 человек',
    beds: '1 двуспальная кровать (180×200 см) + раскладной диван (2 дополнительных спальных места)',
    layout: 'спальня и зона отдыха с диваном и креслами',
    view: 'площадь «Пять Углов»',
    floor: '3–4 этаж',
    extra: 'возможна установка детской кроватки или дополнительного спального места; номера для некурящих'
  },
  standard: {
    title: 'Стандарт',
    area: 'около 20 кв.м',
    capacity: '1–2 человека',
    beds: '1 двуспальная (180×200 см) или 2 односпальные (90×200 см)',
    view: 'Загородный проспект, улица Ломоносова или двор',
    floor: '3–4 этаж',
    extra: 'возможна установка детской кроватки (до 3 лет); возможно размещение с животными; номера для некурящих'
  },
  comfort: {
    title: 'Комфорт',
    area: '26–30 кв.м',
    capacity: 'до 3 человек',
    beds: '1 двуспальная (180×200 см) или 2 односпальные (90×200 см)',
    extraBed: 'дополнительная кровать или детская кроватка (по запросу)',
    view: 'Загородный проспект или улица Ломоносова',
    floor: '3–4 этаж',
    extra: 'возможно размещение с животными; номера для некурящих'
  },
  attic: {
    title: 'Мансарда',
    area: '18–25 кв.м',
    capacity: '1–2 человека',
    beds: '1 двуспальная (180×200 см) или 2 односпальные (90×200 см)',
    floor: '5 этаж',
    features: 'мансардные окна в кровле',
    extra: 'возможно размещение с животными; номера для некурящих'
  },
  apartment1: {
    title: 'Однокомнатные апартаменты',
    type: 'двухуровневые апартаменты',
    beds: '1 двуспальная кровать (на втором уровне) + раскладной диван (на первом уровне)',
    layout: 'гостиная-столовая, мини-кухня',
    kitchen: 'электрическая плита, холодильник, кухонная посуда',
    extra: 'стиральные машины в общей зоне; отдельный выход во двор на парковку; окна на улицу Ломоносова и во двор; возможно размещение с животными',
    conditions: 'завтраки не включены; уборка, смена белья и полотенец — 1 раз в 5 дней; дополнительная уборка по запросу за доплату'
  },
  apartment2: {
    title: 'Двухкомнатные апартаменты',
    type: 'двухуровневые апартаменты',
    capacity: 'до 8 человек',
    beds: '2 двуспальные кровати (на втором уровне) + раскладной диван (на первом уровне)',
    layout: 'две комнаты, мини-кухня',
    kitchen: 'электрическая плита, холодильник, кухонная посуда',
    extra: 'стиральные машины в общей зоне; отдельный выход во двор на парковку; окна на улицу Ломоносова и во двор; возможно размещение с животными',
    conditions: 'уборка, смена белья и полотенец — 1 раз в 5 дней; дополнительная уборка по запросу за доплату'
  }
};

// Общие удобства для всех номеров
const commonAmenities = [
  'Холодильник', 'Кондиционер', 'Электронные замки', 'Wi-Fi', 'Шкаф для одежды',
  'Телевизор', 'Сейф', 'Тапочки'
];

const bathroomAmenities = [
  'Фен', 'Унитаз', 'Душ', 'Раковина', 'Комплект полотенец',
  'Туалетная бумага', 'Жидкое мыло-гель для тела и волос', 'Жидкое мыло-пена для рук'
];

// Функция генерации HTML для модального окна
function buildModalContent(roomKey) {
  const data = roomDetails[roomKey];
  if (!data) return '<p>Информация временно недоступна</p>';

  let html = `<div class="room-detail">
    <h2>${data.title}</h2>`;

  if (data.area) html += `<p><strong>Площадь:</strong> ${data.area}</p>`;
  if (data.capacity) html += `<p><strong>Размещение:</strong> ${data.capacity}</p>`;
  if (data.beds) html += `<div class="detail-block"><h4>Кровати</h4><p>${data.beds}</p></div>`;
  if (data.layout) html += `<div class="detail-block"><h4>Планировка</h4><p>${data.layout}</p></div>`;
  if (data.type) html += `<div class="detail-block"><h4>Тип</h4><p>${data.type}</p></div>`;
  if (data.view) html += `<div class="detail-block"><h4>Вид из окон</h4><p>${data.view}</p></div>`;
  if (data.floor) html += `<div class="detail-block"><h4>Расположение</h4><p>${data.floor}</p></div>`;
  if (data.features) html += `<div class="detail-block"><h4>Особенности</h4><p>${data.features}</p></div>`;
  if (data.kitchen) html += `<div class="detail-block"><h4>Кухня</h4><p>${data.kitchen}</p></div>`;
  if (data.extraBed) html += `<div class="detail-block"><h4>Дополнительные места</h4><p>${data.extraBed}</p></div>`;
  
  html += `<div class="detail-block"><h4>В номере</h4><div class="features-grid">`;
  commonAmenities.forEach(am => { html += `<span class="feature-tag">${am}</span>`; });
  html += `</div></div>`;
  
  html += `<div class="detail-block"><h4>Ванная комната</h4><div class="features-grid">`;
  bathroomAmenities.forEach(am => { html += `<span class="feature-tag">${am}</span>`; });
  html += `</div></div>`;
  
  if (data.extra) html += `<div class="detail-block"><h4>Дополнительно</h4><p>${data.extra}</p></div>`;
  if (data.conditions) html += `<div class="detail-block"><h4>Условия проживания</h4><p>${data.conditions}</p></div>`;
  
  html += `<hr><p style="font-size:13px; color:#94A3B8;">* Точная конфигурация может незначительно отличаться. Уточняйте при бронировании.</p>`;
  html += `</div>`;
  return html;
}

// Открытие модалки по типу номера
function openRoomModal(roomType) {
  const content = buildModalContent(roomType);
  modalBody.innerHTML = content;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Обработчик клика по ссылке "Подробнее"
document.querySelectorAll('.room-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const roomCard = link.closest('.room-card');
    if (roomCard && roomCard.dataset.roomType) {
      openRoomModal(roomCard.dataset.roomType);
    }
  });
});

// Дополнительно: клик по всей карточке (кроме самой ссылки) тоже открывает модалку
document.querySelectorAll('.room-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.room-link')) return;
    if (card.dataset.roomType) {
      openRoomModal(card.dataset.roomType);
    }
  });
});

// Остальные функции (навигация, даты, анимация) остаются без изменений
function toggleMob() {
  const m = document.getElementById('mobNav');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}
function closeMob() {
  document.getElementById('mobNav').style.display = 'none';
}
function goBook() {
  window.location.href = 'booking.html';
}

// Date initialization for search bar (если поля существуют)
(function() {
  const t = new Date();
  const tmr = new Date(t);
  tmr.setDate(t.getDate() + 1);
  const f = d => d.toISOString().split('T')[0];
  const ci = document.getElementById('ci');
  const co = document.getElementById('co');
  if (ci && co) {
    ci.value = f(t);
    co.value = f(tmr);
    ci.min = f(t);
    co.min = f(tmr);
    ci.addEventListener('change', function() {
      const d = new Date(this.value);
      d.setDate(d.getDate() + 1);
      if (!co.value || co.value <= this.value) co.value = f(d);
      co.min = f(d);
    });
  }
})();

// Reveal on scroll
const obs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('in');
}), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(r => obs.observe(r));