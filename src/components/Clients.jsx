"use client";
import Marquee from "react-fast-marquee";

// Müşteriye sunduğumuz "Sonuçlar" ve "Vizyon" (Teknik detay yok, sadece PR var)
const concepts = [
  "STRATEJİK TASARIM",
  "•",
  "KULLANICI DENEYİMİ (UX)",
  "•",
  "GLOBAL STANDARTLAR",
  "•",
  "YÜKSEK PERFORMANS",
  "•",
  "YARATICI ÇÖZÜMLER",
  "•",
  "DİJİTAL DÖNÜŞÜM",
  "•",
  "SEO & BÜYÜME",
  "•",
  "MOBİL ÖNCELİKLİ",
  "•"
];

export default function Clients() {
  return (
    <section className="py-8 bg-black border-t border-white/10 overflow-hidden relative z-20">
      {/* Sol ve Sağ kenarlarda yumuşak geçiş efekti */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
      
      {/* İsteğe bağlı üst başlık (İstemezsen silebilirsin) */}
      {/* <p className="text-center text-gray-600 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 font-medium">
        Yaklaşımımız
      </p> */}
      
      <Marquee gradient={false} speed={30}>
        {concepts.map((item, index) => (
          <div key={index} className="mx-4 md:mx-6 select-none">
            <span className={`text-xl md:text-4xl font-bold tracking-tighter ${
              item === "•" 
                ? "text-indigo-500 text-2xl" // Noktalar renkli olsun
                : "text-white/20 hover:text-white transition-colors duration-500" // Yazılar silik, üzerine gelince parlasın
            }`}>
              {item}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}