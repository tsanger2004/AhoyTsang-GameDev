const games = {
  TheCabin: {
    title: "The Cabin",
    desc: "Survive a mysterious monster in your cabin.",
    emoji: "🌌",
    bannerBg: "linear-gradient(135deg,#0a1628,#1a0a2e)"
  }
};

function openModal(id) {
  const g = games[id];
  if (!g) return;

  const modal = document.getElementById("modal");
  const banner = document.getElementById("modal-banner");

  banner.style.background = g.bannerBg;
  banner.innerHTML = `<div style="font-size:3rem;text-align:center;">${g.emoji}</div>`;

  document.getElementById("modal-title").textContent = g.title;
  document.getElementById("modal-desc").textContent = g.desc;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (e && e.target.id !== "modal") return;

  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}