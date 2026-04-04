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

// Date initialization for search bar
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