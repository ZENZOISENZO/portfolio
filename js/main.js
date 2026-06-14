/* ─── Language Toggle ─────────────────────── */
function setLang(lang) {
  document.body.classList.toggle('lang-jp', lang === 'jp');
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Update html lang attribute for accessibility
  document.documentElement.lang = lang === 'jp' ? 'ja' : 'en';
}

/* ─── Work Filter ─────────────────────────── */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workItems  = document.querySelectorAll('.work-item');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      workItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ─── Nav Scroll State ────────────────────── */
function initNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight active page link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ─── Init ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Language
  const savedLang = localStorage.getItem('lang') || 'en';
  setLang(savedLang);

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  initNav();
  initFilters();
});
