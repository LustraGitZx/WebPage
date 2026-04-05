// Переключение табов кофе-брейка через делегирование событий
document.addEventListener('click', e => {
  const tab = e.target.closest('[data-tab]');
  if (!tab) return;

  const targetId = tab.dataset.tab;

  // Деактивируем все табы и панели
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

  // Активируем нужные
  tab.classList.add('active');
  document.getElementById(targetId)?.classList.add('active');
});
