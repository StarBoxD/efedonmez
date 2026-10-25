// Bileşen Yükleyici (Component Loader) & Aktif Navigasyon Yöneticisi (< 60 Satır)
(function () {
  async function loadComponent(selector, file) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const res = await fetch(`components/${file}`);
      if (res.ok) {
        el.innerHTML = await res.text();
        highlightActiveNav();
      }
    } catch (e) {
      console.warn(`[Component] ${file} yüklenemedi:`, e);
    }
  }

  function highlightActiveNav() {
    const isAbout = window.location.pathname.includes('hakkimda');
    const homeTab = document.getElementById('nav-home');
    const aboutTab = document.getElementById('nav-about');
    if (homeTab && aboutTab) {
      if (isAbout) {
        aboutTab.classList.add('active');
        homeTab.classList.remove('active');
      } else {
        homeTab.classList.add('active');
        aboutTab.classList.remove('active');
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Statik içeriğin üzerine gerektiğinde bileşen enjeksiyonu
    const dynamicHeader = document.querySelector('[data-component="header"]');
    if (dynamicHeader) loadComponent('[data-component="header"]', 'header.html');

    const dynamicFooter = document.querySelector('[data-component="footer"]');
    if (dynamicFooter) loadComponent('[data-component="footer"]', 'footer.html');

    const dynamicAmbient = document.querySelector('[data-component="ambient"]');
    if (dynamicAmbient) loadComponent('[data-component="ambient"]', 'ambient.html');

    highlightActiveNav();
  });
})();
