// Dijital Kartvizit & QR Kod Modal Bileşeni (Mobil Paylaşım & Kopyalama < 85 Satır)
(function () {
  function injectQrModal() {
    if (document.getElementById("qr-modal")) return;

    const modalHtml = `
      <div class="qr-modal-backdrop" id="qr-modal" onclick="if(event.target===this) closeQrModal()">
        <div class="qr-modal-card" role="dialog" aria-modal="true" aria-label="Dijital Kartvizit">
          <button class="qr-close-btn" onclick="closeQrModal()" aria-label="Kapat">✕</button>
          <div class="qr-profile-head">
            <div class="qr-avatar">
              <img src="assets/avatar.png" alt="Efe Dönmez" />
            </div>
            <div class="qr-name">Efe Dönmez</div>
            <div class="qr-role">FTR (Fizik Tedavi ve Rehabilitasyon)</div>
          </div>
          <div class="qr-box">
            <img src="assets/qr-code.png" alt="efedonmez.com QR Kod" width="176" height="176" />
          </div>
          <span class="qr-domain-badge">efedonmez.com</span>
          <div class="qr-actions">
            <button class="qr-btn primary" id="copy-link-btn" onclick="copySiteUrl()">
              <span>Linki Kopyala</span>
            </button>
            <button class="qr-btn" onclick="shareSiteUrl()">
              <span>Paylaş</span>
            </button>
            <a href="https://www.instagram.com/efe_donmz/" target="_blank" rel="noopener noreferrer" class="qr-btn">
              <span>Instagram</span>
            </a>
            <a href="https://open.spotify.com/user/31pnwsxy466ttvqjtogq2wlmxfla?si=613c1f3e4a0c445a" target="_blank" rel="noopener noreferrer" class="qr-btn">
              <span>Spotify</span>
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHtml);
  }

  window.openQrModal = function () {
    injectQrModal();
    requestAnimationFrame(() => {
      const m = document.getElementById("qr-modal");
      if (m) m.classList.add("open");
    });
  };

  window.closeQrModal = function () {
    const m = document.getElementById("qr-modal");
    if (m) m.classList.remove("open");
  };

  window.copySiteUrl = async function () {
    const btn = document.getElementById("copy-link-btn");
    try {
      await navigator.clipboard.writeText("https://efedonmez.com");
      if (btn) {
        btn.innerHTML = "<span>Kopyalandı ✓</span>";
        setTimeout(() => { btn.innerHTML = "<span>Linki Kopyala</span>"; }, 1800);
      }
    } catch (e) {}
  };

  window.shareSiteUrl = async function () {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Efe Dönmez | efedonmez.com",
          text: "Efe Dönmez — Kişisel Web Sitesi",
          url: "https://efedonmez.com"
        });
      } catch (e) {}
    } else {
      window.copySiteUrl();
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") window.closeQrModal();
  });
})();
