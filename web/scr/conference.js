function toggleMob() {
  const m = document.getElementById('mobNav');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}
function closeMob() {
  document.getElementById('mobNav').style.display = 'none';
}

function switchTab(btn, id) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}

const obs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('in');
}), { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(r => obs.observe(r));