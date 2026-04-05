// Intersection Observer для анимации .reveal элементов
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

// Наблюдаем за всеми текущими и будущими .reveal элементами
function observeReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    revealObserver.observe(el);
  });
}

// Запускаем сразу и при изменении DOM (для динамически добавленных компонентов)
document.addEventListener('DOMContentLoaded', observeReveal);

const domObserver = new MutationObserver(observeReveal);
domObserver.observe(document.body, { childList: true, subtree: true });
