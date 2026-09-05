(function () {
  const prev = document.querySelector("[data-prev]");
  const next = document.querySelector("[data-next]");

  function go(el) {
    if (!el) return;
    const href = el.getAttribute("href");
    if (href) window.location.href = href;
  }

  document.addEventListener("keydown", (e) => {
    if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
    if (e.key === "ArrowLeft") go(prev);
    if (e.key === "ArrowRight") go(next);
  });

  let startX = null;
  document.addEventListener("touchstart", (e) => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    startX = e.changedTouches[0].clientX;
  }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (startX == null || !e.changedTouches || !e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) < 70) return;
    if (dx > 0) go(prev);
    else go(next);
  }, { passive: true });

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const layer = document.querySelector(".petals");
  if (!layer || reduce) return;
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
