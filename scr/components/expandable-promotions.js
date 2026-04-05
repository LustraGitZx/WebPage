// ==================== WEB COMPONENT: EXPANDABLE-PROMOTIONS ====================
const PROMOS = [
  {
    image: "https://5ugol.ru/upload/resize_cache/iblock/d75/600_350_2/vnkl1i05ezmnnw5rdy5fjmfy49she48k.jpg",
    title: "Программа лояльности",
    description: "Программа для постоянных гостей отеля. Позволяет получать дополнительные бонусы и преимущества при бронировании напрямую через сайт."
  },
  {
    image: "https://5ugol.ru/upload/iblock/7d4/1lhxf98rfl6xq215nfisrz21lg9iv8p6.png",
    title: "Сертификат с открытой датой",
    description: "Подарочный сертификат на проживание в отеле без фиксированной даты заезда. Получатель может выбрать удобное время для использования."
  },
  {
    image: "https://5ugol.ru/upload/resize_cache/iblock/cc9/600_350_2/4o3xua6rkz2xib0j21khiljv9ggsuf28.jpg",
    title: "Командировка с щедрым личным кешбэком",
    description: "Специальное предложение для деловых поездок. Позволяет получить личный кешбэк при бронировании проживания по условиям акции."
  },
  {
    image: "https://5ugol.ru/upload/resize_cache/iblock/18a/600_350_2/18a6f62eaa781ca31a958d5c0a96797f.jpg",
    title: "Раннее бронирование",
    description: "Для уверенных и неотложных поездок. Позволяет получить более выгодную цену при бронировании заранее."
  },
  {
    image: "https://5ugol.ru/upload/resize_cache/iblock/fa4/600_350_2/1891w745zlfeak5gqkcqbtbkrmt5fhsh.jpeg",
    title: "Тариф \"Командировочный\"",
    description: "Специальный тариф для гостей в деловой поездке с условиями, удобными для командировок и предоставлением отчетных документов."
  }
];

class ExpandablePromotions extends HTMLElement {
  constructor() {
    super();
    this.visibleCount = 3; // первые 3 акции «что влезают» по умолчанию
    this.expanded = false;
  }

  connectedCallback() {
    this.render();

    // Клик по кнопке
    this.querySelector('#toggleBtn').addEventListener('click', () => {
      this.toggle();
    });
  }

  render() {
    const gridHTML = PROMOS.map((promo, index) => `
      <promo-card 
        image="${promo.image}"
        title="${promo.title}"
        description="${promo.description}">
      </promo-card>
    `).join('');

    this.innerHTML = `
      <div class="promotions-grid ${this.expanded ? 'expanded' : 'collapsed'}" id="promoGrid">
        ${gridHTML}
      </div>

      <div class="promotions-toggle">
        <button id="toggleBtn" class="btn btn-secondary">
          ${this.expanded ? 'Скрыть акции' : 'Показать все акции'}
        </button>
      </div>
    `;
  }

  toggle() {
    this.expanded = !this.expanded;
    this.render(); // перерисовываем с новым состоянием
  }
}

customElements.define('expandable-promotions', ExpandablePromotions);
