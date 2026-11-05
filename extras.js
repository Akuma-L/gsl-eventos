// Confeti que cae suavemente (agregar al final de script.js o cargar aparte)
(() => {
  const scene = document.querySelector('.scene');
  if (!scene || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#ff6b8a', '#ffd166', '#6fe3c1', '#7ad7f0', '#b79cff'];
  const total = innerWidth < 600 ? 10 : 18;
  for (let i = 0; i < total; i++) {
    const b = document.createElement('i');
    b.className = 'bit';
    const r = (a, z) => a + Math.random() * (z - a);
    b.style.cssText =
      `left:${r(2, 98)}%;--c:${colors[i % colors.length]};--w:${r(6, 10)}px;--h:${r(9, 15)}px;` +
      `--t:${r(11, 20)}s;--d:${-r(0, 20)}s;--dx:${r(-50, 50)}px`;
    scene.appendChild(b);
  }
})();
