const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.05 }
);

function observeReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    revealObserver.observe(el);
  });
}

// Запускаем сразу после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  observeReveal();
  // Web Components рендерятся чуть позже — повторяем через 100ms и 300ms
  setTimeout(observeReveal, 100);
  setTimeout(observeReveal, 300);
});

// Следим за новыми элементами в DOM
const domObserver = new MutationObserver(observeReveal);
document.addEventListener('DOMContentLoaded', () => {
  domObserver.observe(document.body, { childList: true, subtree: true });
});
