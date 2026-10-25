// Hakkımda Sayfası — Kişisel Favoriler & Karakter Kartları (< 85 Satır)
const PERSONAL_FAVORITES = [
  { id: "renk", icon: "🎨", category: "Favori Renk", value: "Siyah & Pembe", sub: "Renk Tonu", color: "rose", swatch: "linear-gradient(135deg, #09090b 45%, #ec4899 55%)" },
  { id: "aksesuar", icon: "🕶️", category: "Vazgeçilmez Aksesuarım", value: "Gözlük :D", sub: "Detay", color: "cyan" },
  { id: "sayi", icon: "🎲", category: "Uğurlu Sayım", value: "7", sub: "Şans", color: "emerald" },
  { id: "dogumlekesi", icon: "✨", category: "Doğum Leken Var mı?", value: "Var (Baya büyük)", sub: "Fiziksel", color: "rose" },
  { id: "tik", icon: "🤫", category: "Tikim Var mı?", value: "Var (Ama bende kalsın)", sub: "Gizli Detay", color: "purple" },
  { id: "bolum", icon: "🎓", category: "Bölümüm", value: "FTR (Fizik Tedavi)", sub: "Üniversite", color: "indigo" },
  { id: "anatomi", icon: "🦴", category: "Favori Mesleki Konu", value: "Anatomi & Kas-İskelet", sub: "FTR", color: "emerald" },
  { id: "muzikturu", icon: "🎸", category: "En Sevdiğim Müzik Türü", value: "Rap, Synthwave & Rock", sub: "Ritim", color: "purple" },
  { id: "deger", icon: "🤝", category: "İnsanda En Önem Verdiğim Şey", value: "Samimiyet & Doğallık", sub: "Değer", color: "emerald" },
  { id: "kafadinleme", icon: "🏝️", category: "Kafa Dinleme Şeklim", value: "Müzik & Arkadaşlarla Oyun", sub: "Deşarj", color: "cyan" },
  { id: "uygulama", icon: "📱", category: "En Çok Kullandığım Uygulama", value: "Spotify & Instagram", sub: "Dijital", color: "indigo" },
  { id: "film", icon: "🎬", category: "Favori Film", value: "Belirlenecek", sub: "Sinema", color: "purple" },
  { id: "dizi", icon: "📺", category: "Favori Dizi", value: "Belirlenecek", sub: "Seri", color: "cyan" },
  { id: "muzik", icon: "🎧", category: "Favori Şarkı / Sanatçı", value: "Belirlenecek", sub: "Spotify", color: "emerald" },
  { id: "oyun", icon: "🎮", category: "Favori Oyun", value: "Belirlenecek", sub: "Gaming", color: "amber" },
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
  { id: "burc", icon: "✨", category: "Burç", value: "Belirlenecek", sub: "Profil", color: "purple" },
  { id: "boy", icon: "📏", category: "Boy", value: "Belirlenecek", sub: "Fiziksel", color: "indigo" },
  { id: "dogum", icon: "🎂", category: "Doğum Günü", value: "Belirlenecek", sub: "Takvim", color: "rose" },
  { id: "memleket", icon: "🏠", category: "Memleket / Şehir", value: "Belirlenecek", sub: "Konum", color: "cyan" },
  { id: "takim", icon: "🏆", category: "Tuttuğum Takım", value: "Belirlenecek", sub: "Taraftar", color: "amber" },
  { id: "izlenenspor", icon: "🥊", category: "İzlemeyi Sevdiğim Spor", value: "Belirlenecek", sub: "Heyecan", color: "rose" },
  { id: "tatli", icon: "🍰", category: "Favori Tatlı", value: "Belirlenecek", sub: "Lezzet", color: "amber" },
  { id: "geceatistirma", icon: "🍕", category: "Gece Açlığı Favorisi", value: "Belirlenecek", sub: "Atıştırmalık", color: "rose" },
  { id: "stil", icon: "👟", category: "Giyim Tarzım", value: "Belirlenecek", sub: "Stil", color: "indigo" },
  { id: "platform", icon: "💻", category: "Oyun Platformu Tercihim", value: "Belirlenecek", sub: "Donanım", color: "purple" },
  { id: "oyunturu", icon: "🕹️", category: "En Sevdiğim Oyun Türü", value: "Belirlenecek", sub: "Rekabet", color: "amber" },
  { id: "tatil", icon: "🏖️", category: "Tatil Tercihim", value: "Belirlenecek", sub: "Dinlenme", color: "cyan" },
  { id: "havadurumu", icon: "🌧️", category: "Favori Hava Durumu", value: "Belirlenecek", sub: "Atmosfer", color: "indigo" },
  { id: "sosyal", icon: "🔋", category: "Sosyal Enerjim", value: "Belirlenecek", sub: "İletişim", color: "purple" },
  { id: "alarm", icon: "⏰", category: "Sabah Alarmıyla Aram", value: "Belirlenecek", sub: "Rutin", color: "rose" },
  { id: "motto", icon: "🧭", category: "Hayat Mottom", value: "Belirlenecek", sub: "Felsefe", color: "amber" }
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
      <div class="personal-card spotlight-card stagger-item accent-${item.color}" style="--delay: ${Math.min(0.8, 0.03 + idx * 0.02)}s">
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
