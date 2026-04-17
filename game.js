const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

const game = games[gameId];

if (!game) {
  document.getElementById("game-container").innerHTML = "Game not found";
} else {
  document.getElementById("game-container").innerHTML = `
    <h1>${game.title}</h1>
    <p>${game.desc}</p>
    <a href="YOUR_DOWNLOAD_LINK" class="btn-primary">Download</a>
  `;
}