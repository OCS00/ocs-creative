"use client";
import { useState } from "react";
import { Check, Code2, BarChart3, Megaphone, Palette } from "lucide-react";

// 🔥 Hizmetler Sayfasıyla Birebir Aynı Başlıklar ve İkonlar
const options = [
  { 
    id: "web", 
    title: "Web Tasarım & Yazılım", 
    icon: <Code2 size={32}/>, 
    price: "Proje Bazlı",
    desc: "Modern, hızlı ve mobil uyumlu web sitesi." 
  },
  { 
    id: "seo", 
    title: "SEO Optimizasyonu", 
    icon: <BarChart3 size={32}/>, 
    price: "Aylık Plan",
    desc: "Google'da üst sıralara çıkma stratejisi." 
  },
  { 
    id: "sosyal", 
    title: "Sosyal Medya Yönetimi", 
    icon: <Megaphone size={32}/>, 
    price: "Aylık Plan",
    desc: "Instagram & LinkedIn hesap yönetimi." 
  },
  { 
    id: "kimlik", 
    title: "Kurumsal Kimlik", 
    icon: <Palette size={32}/>, 
    price: "Tek Seferlik",
    desc: "Logo, kartvizit ve marka yüzü tasarımı." 
  }
];

export default function ProjectBuilder() {
  const [selected, setSelected] = useState([]);

  const toggleOption = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const getWhatsappLink = () => {
    const services = options.filter(opt => selected.includes(opt.id)).map(o => o.title).join(", ");
    const text = `Merhaba OCS Creative, şu hizmetler için fiyat teklifi almak istiyorum: ${services}`;
    return `https://wa.me/905551234567?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-24 bg-dark-900 relative border-t border-dark-800">
      {/* Arka Plan Efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">SİZE ÖZEL PAKET</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            Projenizi Oluşturun
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Hangi hizmetlere ihtiyacınız var? Aşağıdan seçin, size özel fiyat teklifimizi hemen hazırlayalım.
          </p>
        </div>

        {/* SEÇİM KUTULARI (4 Kolonlu Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => toggleOption(opt.id)}
              className={`relative p-8 rounded-3xl border-2 text-left transition-all duration-300 group flex flex-col h-full ${
                selected.includes(opt.id) 
                  ? "bg-dark-800 border-primary shadow-2xl shadow-primary/10 scale-105 z-10" 
                  : "bg-dark-800/50 border-dark-700 hover:border-gray-600 hover:bg-dark-800"
              }`}
            >
              {/* İkon */}
              <div className={`mb-6 p-4 rounded-2xl w-fit transition-colors ${selected.includes(opt.id) ? "bg-primary text-white" : "bg-dark-900 text-gray-400 group-hover:text-white"}`}>
                {opt.icon}
              </div>
              
              {/* Başlık & Açıklama */}
              <h3 className={`text-xl font-bold mb-2 ${selected.includes(opt.id) ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                {opt.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                {opt.desc}
              </p>
              
              {/* Fiyat Etiketi */}
              <div className="pt-4 border-t border-dark-700/50 w-full">
                 <span className="text-xs font-bold uppercase tracking-wider text-primary">{opt.price}</span>
              </div>
              
              {/* Seçildi Tik İşareti */}
              {selected.includes(opt.id) && (
                <div className="absolute top-4 right-4 bg-primary text-white rounded-full p-1.5 shadow-lg animate-in zoom-in duration-300">
                  <Check size={16} strokeWidth={3} />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* ALT BAR (Toplam Özeti) */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-dark-800 to-dark-900 border border-dark-700 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          {/* Parlama Efekti */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left">
            <p className="text-gray-400 text-sm mb-2 font-medium">Seçilen Hizmetler:</p>
            <div className="text-white font-bold text-xl md:text-2xl">
              {selected.length > 0 
                ? <span className="text-primary">{selected.length} Hizmet</span> 
                : "Henüz seçim yapılmadı"} 
               {selected.length > 0 && " Pakete Eklendi"}
            </div>
          </div>
          
          <a 
            href={selected.length > 0 ? getWhatsappLink() : "#"}
            className={`relative z-10 px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center gap-3 shadow-xl ${
              selected.length > 0 
                ? "bg-primary hover:bg-primary-dark text-white cursor-pointer hover:scale-105" 
                : "bg-dark-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            Fiyatı Öğren <Check size={24} />
          </a>
        </div>

      </div>
    </section>
  );
}