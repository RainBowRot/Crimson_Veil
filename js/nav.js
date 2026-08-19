(function () {
  const prev = document.querySelector("[data-prev]");
  const next = document.querySelector("[data-next]");

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && prev) window.location.href = prev.getAttribute("href");
    if (e.key === "ArrowRight" && next) window.location.href = next.getAttribute("href");
  });

  const layer = document.querySelector(".petals");
  if (!layer) return;
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = 8 + Math.random() * 10 + "s";
    p.style.animationDelay = -Math.random() * 12 + "s";
    p.style.opacity = 0.12 + Math.random() * 0.22;
    p.style.transform = "scale(" + (0.6 + Math.random()) + ")";
    layer.appendChild(p);
  }
})();
