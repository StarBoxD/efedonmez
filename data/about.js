// Hakkımda Sayfası — Kişisel Favoriler & Karakter Kartları (Her Kategoriden 1 Seçim)
const PERSONAL_FAVORITES = [
  { id: "renk", icon: "🎨", category: "Favori Renk", value: "Belirlenecek", sub: "Renk Tonu", color: "indigo", swatch: "#6366f1" },
  { id: "film", icon: "🎬", category: "Favori Film", value: "Belirlenecek", sub: "Sinema", color: "purple" },
  { id: "dizi", icon: "📺", category: "Favori Dizi", value: "Belirlenecek", sub: "Seri", color: "cyan" },
  { id: "muzik", icon: "🎧", category: "Favori Şarkı / Sanatçı", value: "Belirlenecek", sub: "Spotify", color: "emerald" },
  { id: "oyun", icon: "🎮", category: "Favori Oyun", value: "Belirlenecek", sub: "Gaming", color: "amber" },
  { id: "tik", icon: "🤫", category: "Tikim Var mı?", value: "Var (Ama bende kalsın)", sub: "Gizli Detay", color: "rose" },
  { id: "takinti", icon: "🎯", category: "En Büyük Takıntım", value: "Belirlenecek", sub: "Alışkanlık", color: "purple" },
  { id: "kirmizicizgi", icon: "🚫", category: "Tahammül Edemediğim Şey", value: "Belirlenecek", sub: "Kırmızı Çizgi", color: "rose" },
  { id: "spor", icon: "🏋️", category: "Favori Antrenman Hareketi", value: "Belirlenecek", sub: "Fitness", color: "emerald" },
  { id: "yemek", icon: "🍽️", category: "Favori Yemek", value: "Belirlenecek", sub: "Mutfak", color: "amber" },
  { id: "icecek", icon: "☕", category: "Favori İçecek", value: "Belirlenecek", sub: "Günlük", color: "cyan" },
  { id: "arac", icon: "🚗", category: "Favori Araç", value: "Belirlenecek", sub: "Otomobil", color: "indigo" },
  { id: "mod", icon: "🌙", category: "Gece İnsanı mı Gündüz mü?", value: "Belirlenecek", sub: "Biyoritim", color: "purple" },
  { id: "mevsim", icon: "❄️", category: "Favori Mevsim", value: "Belirlenecek", sub: "Atmosfer", color: "cyan" },
  { id: "sehir", icon: "🌍", category: "Favori Şehir / Ülke", value: "Belirlenecek", sub: "Rota", color: "emerald" },
  { id: "hayvan", icon: "🐾", category: "Favori Hayvan", value: "Belirlenecek", sub: "Doğa", color: "amber" },
  { id: "kelime", icon: "💬", category: "En Çok Kullandığım Kelime", value: "Belirlenecek", sub: "Replik", color: "indigo" },
  { id: "fobi", icon: "⚡", category: "En Garip Huyum", value: "Belirlenecek", sub: "Karakter", color: "rose" },
  { id: "kafadinleme", icon: "🏝️", category: "Kafa Dinleme Şeklim", value: "Belirlenecek", sub: "Deşarj", color: "cyan" },
  { id: "sayi", icon: "🎲", category: "Uğurlu Sayım", value: "Belirlenecek", sub: "Şans", color: "emerald" },
  { id: "burc", icon: "✨", category: "Burç", value: "Belirlenecek", sub: "Profil", color: "purple" }
];

function renderPersonalFavorites() {
  const container = document.getElementById("favorites-container");
  if (!container) return;

  container.innerHTML = PERSONAL_FAVORITES.map((item, idx) => {
    const num = String(idx + 1).padStart(2, "0");
    const swatchHtml = item.swatch
      ? `<span class="color-swatch" style="background:${item.swatch};"></span>`
      : "";

    return `
      <div class="personal-card spotlight-card stagger-item accent-${item.color}" style="--delay: ${0.04 + idx * 0.03}s">
        <div class="p-card-top">
          <span class="p-card-cat"><span class="p-card-icon">${item.icon}</span> ${item.category}</span>
          <span class="p-card-num">#${num}</span>
        </div>
        <div class="p-card-body">
          ${swatchHtml}
          <span class="p-card-val">${item.value}</span>
        </div>
        <div class="p-card-footer">
          <span class="p-card-tag">${item.sub}</span>
        </div>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderPersonalFavorites);
