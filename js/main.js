/* ─── Slideshow ────────────────────────────── */
function initSlideshows() {
  document.querySelectorAll('.slideshow').forEach(sl => {
    const raw = sl.dataset.images;
    if (!raw) return;

    let images;
    try { images = JSON.parse(raw); } catch (e) { return; }
    if (!images.length) return;

    const mainImg = sl.querySelector('.s-main img');
    if (!mainImg) return;

    let current = 0;

    function goTo(idx) {
      current = ((idx % images.length) + images.length) % images.length;
      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = images[current];
        mainImg.style.opacity = '1';
      }, 130);
    }

    /* Arrow buttons */
    sl.querySelectorAll('.s-arrow').forEach(btn => {
      btn.addEventListener('click', () => {
        goTo(current + (parseInt(btn.dataset.dir) || 1));
      });
    });

    /* Thumbnail click — jump to that image */
    sl.querySelectorAll('.s-thumb').forEach(thumb => {
      const idx = parseInt(thumb.dataset.goto) || 0;
      thumb.addEventListener('click', () => goTo(idx));
    });
  });
}

/* ─── Init ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initSlideshows();
});
