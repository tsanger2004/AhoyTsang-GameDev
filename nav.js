const navHTML = `
<nav>
  <a href="index.html" class="logo">Ahoy<span>Tsang</span></a>

  <ul class="nav-links">
    <li><a href="index.html">Games</a></li>
    <li><a href="index.html#about">About</a></li>
    <li><a href="https://ahoygames.itch.io" target="_blank">itch.io</a></li>
  </ul>

  <button class="nav-cta" onclick="window.open('https://ahoygames.itch.io','_blank')">
    View All
  </button>
</nav>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", navHTML);
});