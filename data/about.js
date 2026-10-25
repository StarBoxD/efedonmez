// Hakkımda Sayfası — Kişisel Favoriler & Filtreleme Bileşeni (Minimalist & Emojisiz < 85 Satır)
const PERSONAL_FAVORITES = [
  { id: "renk", group: "zevkler", category: "Favori Renk", value: "Siyah & Pembe", sub: "Renk", color: "rose" },
  { id: "aksesuar", group: "kisisel", category: "Vazgeçilmez Aksesuarım", value: "Gözlük :D", sub: "Detay", color: "cyan" },
  { id: "sayi", group: "kisisel", category: "Uğurlu Sayım", value: "7", sub: "Şans", color: "emerald" },
  { id: "dogum", group: "kisisel", category: "Doğum Tarihi", value: "08.10.2004", sub: "Takvim", color: "purple" },
  { id: "burc", group: "kisisel", category: "Burç", value: "Terazi", sub: "Profil", color: "indigo" },
  { id: "boy", group: "kisisel", category: "Boy", value: "1.75 sanıyorum (Ölçmedim 1.78 olabilir)", sub: "Fiziksel", color: "cyan" },
  { id: "memleket", group: "kisisel", category: "Memleket", value: "Hatay / İskenderun", sub: "Köken", color: "amber" },
  { id: "sehir", group: "zevkler", category: "Favori Şehir / Ülke", value: "Türkiye / İskenderun", sub: "Rota", color: "emerald" },
  { id: "bolum", group: "kisisel", category: "Bölümüm", value: "FTR (Fizik Tedavi)", sub: "Üniversite", color: "indigo" },
  { id: "takim", group: "zevkler", category: "Tuttuğum Takım", value: "Beşiktaş (BJK)", sub: "Taraftar", color: "purple" },
  { id: "sanatci", group: "oyunmuzik", category: "Favori Sanatçı", value: "Şehinşah", sub: "Müzik", color: "rose" },
  { id: "muzik", group: "oyunmuzik", category: "Favori Şarkı / Müzik", value: "Moda Göre Her Şey", sub: "Ritim", color: "emerald" },
  { id: "oyun", group: "oyunmuzik", category: "Favori Oyun", value: "LoL & Minecraft", sub: "Gaming", color: "amber" },
  { id: "oyunturu", group: "oyunmuzik", category: "Sevdiğim Oyun Tarzı", value: "MOBA & MMORPG", sub: "Rekabet", color: "indigo" },
  { id: "izlenenspor", group: "oyunmuzik", category: "İzlemeyi Sevdiğim Spor", value: "E-Spor", sub: "Heyecan", color: "cyan" },
  { id: "film", group: "zevkler", category: "Favori Film", value: "Süper Kahraman Filmleri & Her Şey", sub: "Sinema", color: "purple" },
  { id: "yemek", group: "zevkler", category: "Favori Yemek", value: "İçli Köfteli Çorba & Mantı", sub: "Mutfak", color: "amber" },
  { id: "tatli", group: "zevkler", category: "Favori Tatlı", value: "Künefe", sub: "Lezzet", color: "rose" },
  { id: "geceatistirma", group: "zevkler", category: "Gece Açlığı Favorisi", value: "Ankara'da Pizza, Hatay'da Döner", sub: "Atıştırmalık", color: "amber" },
  { id: "icecek", group: "zevkler", category: "Favori İçecek", value: "Kola", sub: "Günlük", color: "rose" },
  { id: "arac", group: "zevkler", category: "Favori Araç", value: "Camaro", sub: "Otomobil", color: "indigo" },
  { id: "hayvan", group: "karakter", category: "Hayvanlarla Aram", value: "Kedi beni sahiplenir, köpeği ben", sub: "Doğa", color: "emerald" },
  { id: "huy", group: "karakter", category: "En Belirgin Huyum", value: "Biri için her şeyi yaparım, kendim için üşenirim", sub: "Karakter", color: "purple" },
  { id: "kirmizicizgi", group: "karakter", category: "Tahammül Edemediğim Şey", value: "Yalan", sub: "Kırmızı Çizgi", color: "rose" },
  { id: "stil", group: "kisisel", category: "Giyim Tarzım", value: "Üzerimde düzgün duruyorsa giyerim :D", sub: "Stil", color: "cyan" },
  { id: "alarm", group: "karakter", category: "Sabah Alarmıyla Aram", value: "Alarmdan önce uyanıp onu uyandırırım", sub: "Rutin", color: "emerald" },
  { id: "mod", group: "karakter", category: "Gece İnsanı mı Gündüz mü?", value: "Ders Yoksa Gececi", sub: "Biyoritim", color: "indigo" },
  { id: "mevsim", group: "zevkler", category: "Favori Mevsim", value: "Kış", sub: "Atmosfer", color: "cyan" },
  { id: "havadurumu", group: "zevkler", category: "Favori Hava Durumu", value: "Yağmur", sub: "Atmosfer", color: "purple" },
  { id: "sosyal", group: "karakter", category: "Sosyal Enerjim", value: "Genelde Yüksek", sub: "İletişim", color: "emerald" },
  { id: "dogumlekesi", group: "kisisel", category: "Doğum Leken Var mı?", value: "Var (Baya büyük)", sub: "Fiziksel", color: "rose" },
  { id: "tik", group: "kisisel", category: "Tikim Var mı?", value: "Var (Ama bende kalsın)", sub: "Gizli Detay", color: "purple" },
  { id: "deger", group: "karakter", category: "İnsanda En Önem Verdiğim Şey", value: "Samimiyet & Doğallık", sub: "Değer", color: "emerald" },
  { id: "kafadinleme", group: "karakter", category: "Kafa Dinleme Şeklim", value: "Müzik & Arkadaşlarla Oyun", sub: "Deşarj", color: "cyan" },
  { id: "uygulama", group: "oyunmuzik", category: "En Çok Kullandığım Uygulama", value: "Spotify & Instagram", sub: "Dijital", color: "indigo" },
  { id: "motto", group: "karakter", category: "Hayat Mottom", value: "Nefes alıyorsan hâlâ bir şansın vardır", sub: "Felsefe", color: "amber" }
];

function renderPersonalFavorites(filterGroup = "all") {
  const container = document.getElementById("favorites-container");
  if (!container) return;

  const list = filterGroup === "all"
    ? PERSONAL_FAVORITES
    : PERSONAL_FAVORITES.filter(item => item.group === filterGroup);

  container.innerHTML = list.map((item, idx) => {
    const num = String(idx + 1).padStart(2, "0");
    return `
      <div class="personal-card spotlight-card stagger-item accent-${item.color}" style="--delay: ${Math.min(0.5, 0.02 + idx * 0.02)}s">
        <div class="p-card-top">
          <span class="p-card-cat"><span class="p-card-dot"></span> ${item.category}</span>
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

function filterAboutCards(group, btnEl) {
  document.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderPersonalFavorites(group);
}

document.addEventListener("DOMContentLoaded", () => renderPersonalFavorites("all"));
