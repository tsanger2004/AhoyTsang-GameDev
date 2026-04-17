const games = {
  TheCabin: {
    title: "The Cabin",
    genre: "Horror · Survival · Timed",
    tags: [["Horror","purple"],["Survival","cyan"],["Timed","orange"]],
    desc: "Survive a mysterious monster in your cabin, try to stay warm and see daylight.",
    meta: [
      ["Platform","Windows / Mac"],
      ["Version","v0.9.2 Beta"],
      ["Genre","Horror"],
      ["Price","FREE"],
    ],
    bannerBg: "linear-gradient(135deg, #0a1628 0%, #1a0a2e 50%, #0d1a2e 100%)",
    emoji: "🌌",
    itchio: "https://ahoygames.itch.io"
  },
};

function openModal(id) {
  const g = games[id];
  if (!g) return;
  const overlay = document.getElementById('modal');
  const banner = document.getElementById('modal-banner');
  banner.style.background = g.bannerBg;
  banner.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;">${g.emoji}</div>`;
  document.getElementById('modal-title').textContent = g.title;
  document.getElementById('modal-genre').textContent = '// ' + g.genre;
  document.getElementById('modal-desc').textContent = g.desc;
  document.getElementById('modal-tags').innerHTML = g.tags.map(([t,c]) => `<span class="tag tag-${c}">${t}</span>`).join('');
  document.getElementById('modal-meta').innerHTML = g.meta.map(([l,v]) => `<div class="meta-item"><label>${l}</label><span>${v}</span></div>`).join('');
  document.getElementById('modal-dl-btn').href = g.itchio;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal')) return;
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}