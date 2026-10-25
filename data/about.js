// Hakkımda Sayfası — Kişisel Favoriler & Karakter Kartları (36 Kart - < 75 Satır)
const PERSONAL_FAVORITES = [
  { id: "renk", icon: "🎨", category: "Favori Renk", value: "Siyah & Pembe", sub: "Renk", color: "rose" },
  { id: "aksesuar", icon: "🕶️", category: "Vazgeçilmez Aksesuarım", value: "Gözlük :D", sub: "Detay", color: "cyan" },
  { id: "sayi", icon: "🎲", category: "Uğurlu Sayım", value: "7", sub: "Şans", color: "emerald" },
  { id: "dogum", icon: "🎂", category: "Doğum Tarihi", value: "08.10.2004", sub: "Takvim", color: "purple" },
  { id: "burc", icon: "♎", category: "Burç", value: "Terazi", sub: "Profil", color: "indigo" },
  { id: "boy", icon: "📏", category: "Boy", value: "1.75 sanıyorum (Ölçmedim 1.78 olabilir)", sub: "Fiziksel", color: "cyan" },
  { id: "memleket", icon: "🏠", category: "Memleket", value: "Hatay / İskenderun", sub: "Köken", color: "amber" },
  { id: "sehir", icon: "🌍", category: "Favori Şehir / Ülke", value: "Türkiye / İskenderun", sub: "Rota", color: "emerald" },
  { id: "bolum", icon: "🎓", category: "Bölümüm", value: "FTR (Fizik Tedavi)", sub: "Üniversite", color: "indigo" },
  { id: "takim", icon: "🦅", category: "Tuttuğum Takım", value: "Beşiktaş (BJK)", sub: "Taraftar", color: "purple" },
  { id: "sanatci", icon: "🎤", category: "Favori Sanatçı", value: "Şehinşah", sub: "Müzik", color: "rose" },
  { id: "muzik", icon: "🎧", category: "Favori Şarkı / Müzik", value: "Moda Göre Her Şey", sub: "Ritim", color: "emerald" },
  { id: "oyun", icon: "🎮", category: "Favori Oyun", value: "LoL & Minecraft", sub: "Gaming", color: "amber" },
  { id: "oyunturu", icon: "🕹️", category: "Sevdiğim Oyun Tarzı", value: "MOBA & MMORPG", sub: "Rekabet", color: "indigo" },
  { id: "izlenenspor", icon: "🏆", category: "İzlemeyi Sevdiğim Spor", value: "E-Spor", sub: "Heyecan", color: "cyan" },
  { id: "film", icon: "🎬", category: "Favori Film", value: "Süper Kahraman Filmleri & Her Şey", sub: "Sinema", color: "purple" },
  { id: "yemek", icon: "🍽️", category: "Favori Yemek", value: "İçli Köfteli Çorba & Mantı", sub: "Mutfak", color: "amber" },
  { id: "tatli", icon: "🍰", category: "Favori Tatlı", value: "Künefe", sub: "Lezzet", color: "rose" },
  { id: "geceatistirma", icon: "🍕", category: "Gece Açlığı Favorisi", value: "Ankara'da Pizza, Hatay'da Döner", sub: "Atıştırmalık", color: "amber" },
  { id: "icecek", icon: "🥤", category: "Favori İçecek", value: "Kola", sub: "Günlük", color: "rose" },
  { id: "arac", icon: "🚗", category: "Favori Araç", value: "Camaro", sub: "Otomobil", color: "indigo" },
  { id: "hayvan", icon: "🐾", category: "Hayvanlarla Aram", value: "Kedi beni sahiplenir, köpeği ben", sub: "Doğa", color: "emerald" },
  { id: "huy", icon: "⚡", category: "En Belirgin Huyum", value: "Biri için her şeyi yaparım, kendim için üşenirim", sub: "Karakter", color: "purple" },
  { id: "kirmizicizgi", icon: "🚫", category: "Tahammül Edemediğim Şey", value: "Yalan", sub: "Kırmızı Çizgi", color: "rose" },
  { id: "stil", icon: "👟", category: "Giyim Tarzım", value: "Üzerimde düzgün duruyorsa giyerim :D", sub: "Stil", color: "cyan" },
  { id: "alarm", icon: "⏰", category: "Sabah Alarmıyla Aram", value: "Alarmdan önce uyanıp onu uyandırırım", sub: "Rutin", color: "emerald" },
  { id: "mod", icon: "🌙", category: "Gece İnsanı mı Gündüz mü?", value: "Ders Yoksa Gececi", sub: "Biyoritim", color: "indigo" },
  { id: "mevsim", icon: "❄️", category: "Favori Mevsim", value: "Kış", sub: "Atmosfer", color: "cyan" },
  { id: "havadurumu", icon: "🌧️", category: "Favori Hava Durumu", value: "Yağmur", sub: "Atmosfer", color: "purple" },
  { id: "sosyal", icon: "🔋", category: "Sosyal Enerjim", value: "Genelde Yüksek", sub: "İletişim", color: "emerald" },
  { id: "dogumlekesi", icon: "✨", category: "Doğum Leken Var mı?", value: "Var (Baya büyük)", sub: "Fiziksel", color: "rose" },
  { id: "tik", icon: "🤫", category: "Tikim Var mı?", value: "Var (Ama bende kalsın)", sub: "Gizli Detay", color: "purple" },
  { id: "deger", icon: "🤝", category: "İnsanda En Önem Verdiğim Şey", value: "Samimiyet & Doğallık", sub: "Değer", color: "emerald" },
  { id: "kafadinleme", icon: "🏝️", category: "Kafa Dinleme Şeklim", value: "Müzik & Arkadaşlarla Oyun", sub: "Deşarj", color: "cyan" },
  { id: "uygulama", icon: "📱", category: "En Çok Kullandığım Uygulama", value: "Spotify & Instagram", sub: "Dijital", color: "indigo" },
  { id: "motto", icon: "🧭", category: "Hayat Mottom", value: "Nefes alıyorsan hâlâ bir şansın vardır", sub: "Felsefe", color: "amber" }
];

function renderPersonalFavorites() {
  const container = document.getElementById("favorites-container");
  if (!container) return;

  container.innerHTML = PERSONAL_FAVORITES.map((item, idx) => {
    const num = String(idx + 1).padStart(2, "0");
    return `
      <div class="personal-card spotlight-card stagger-item accent-${item.color}" style="--delay: ${Math.min(0.75, 0.03 + idx * 0.02)}s">
        <div class="p-card-top">
          <span class="p-card-cat"><span class="p-card-icon">${item.icon}</span> ${item.category}</span>
          <span class="p-card-num">#${num}</span>
        </div>
        <div class="p-card-body">
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
