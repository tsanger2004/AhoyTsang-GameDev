const games = {
  TheCabin: {
    id: "TheCabin",
    title: "The Cabin",
    description: "Survive a mysterious monster in your cabin, try to stay warm and see daylight.",
    genre: "Horror · Survival",
    tags: [
      { name: "Horror", color: "purple" },
      { name: "Survival", color: "cyan" },
      { name: "Timed", color: "orange" }
    ],
    platform: "Windows",
    version: "v0.9.2 Beta",
    price: "FREE",
    download: "https://drive.google.com/file/d/1f7B0Jsfx-ptIldr6J-xstcRSRqf7E3GB/view",
    emoji: "🌌",
    bannerBg: "linear-gradient(135deg,#0a1628,#1a0a2e)"
  },
  NextGame: {
    id: "NextGame",
    title: "Next Game",
    genre: "Coming Soon",
    description: "Something new is in development. Stay tuned.",
    price: "TBA",
    platform: "",
    version: "",
    emoji: "＋",
    bannerBg: "var(--bg3)",
    placeholder: true
    }
};

/* -------------------------
   RENDER FEATURED GAME
--------------------------*/
function renderFeatured(game) {
  return `
  <div class="featured-card">
    <div class="featured-banner">
      <div class="art-title-text">${game.title}</div>
      <div class="featured-badge">▶ New Release</div>
    </div>

    <div class="featured-info">
      <div>
        <div class="game-tags">
          ${game.tags.map(t => `<span class="tag tag-${t.color}">${t.name}</span>`).join("")}
        </div>

        <h3 class="game-title">${game.title}</h3>
        <p class="game-description">${game.description}</p>

        <div class="game-meta">
          <div class="meta-item"><label>Platform</label><span>${game.platform}</span></div>
          <div class="meta-item"><label>Version</label><span>${game.version}</span></div>
          <div class="meta-item"><label>Genre</label><span>${game.genre}</span></div>
          <div class="meta-item"><label>Price</label><span style="color:#4ade80">${game.price}</span></div>
        </div>
      </div>

      <div>
        <a href="${game.download}" target="_blank" class="btn-primary">⬇ Download</a>
        <a href="#" onclick="openModal('${game.id}'); return false;" class="btn-secondary">◈ View Details</a>
      </div>
    </div>
  </div>`;
}

/* -------------------------
   RENDER GAME GRID
--------------------------*/
function renderGrid() {
  const grid = document.getElementById("game-grid");

  grid.innerHTML = Object.values(games).map(game => `
    <div class="game-card" onclick="openModal('${game.id}')">
      <div class="card-banner banner-1">
        <div class="card-art">${game.emoji}</div>
        <div class="card-overlay"></div>
      </div>

      <div class="card-body">
        <div class="card-genre">${game.genre}</div>
        <div class="card-title">${game.title}</div>
        <p class="card-desc">${game.description}</p>

        <div class="card-footer">
          <span class="card-price ${game.price === "FREE" ? "free" : ""}">
            ${game.price}
          </span>

          <a href="${game.download}" target="_blank" class="card-btn" onclick="event.stopPropagation()">
            Download
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

/* -------------------------
   MODAL
--------------------------*/
function openModal(id) {
  const g = games[id];
  if (!g) return;

  const modal = document.getElementById("modal");

  document.getElementById("modal-banner").style.background = g.bannerBg;
  document.getElementById("modal-banner").innerHTML =
    `<div style="font-size:3rem">${g.emoji}</div>`;

  document.getElementById("modal-title").textContent = g.title;
  document.getElementById("modal-desc").textContent = g.description;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (e && e.target.id !== "modal") return;

  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}

/* -------------------------
   INIT
--------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("featured-container").innerHTML =
    renderFeatured(games.TheCabin);

  renderGrid();
});