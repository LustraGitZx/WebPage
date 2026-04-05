class HotelFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>© 2025 Отель 5 Угол, Санкт-Петербург</p>
        <div class="fl">
          <a href="https://5ugol.ru/docsDirectory/privacy_policy.docx" target="_blank">Политика конфиденциальности</a>
          <a href="https://5ugol.ru/docsDirectory/personal_data_agreement.docx" target="_blank">Согласие на обработку данных</a>
          <a href="https://5ugol.ru/docsDirectory/dogovorOferty.docx" target="_blank">Договор оферты</a>
        </div>
      </footer>
    `;
  }
}

customElements.define('hotel-footer', HotelFooter);
