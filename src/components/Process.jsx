"use client";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Analiz & Strateji",
    description: "Sizi dinliyor, hedeflerinizi anlıyor ve rakiplerinizi analiz ediyoruz. Size en uygun dijital yol haritasını çıkarıyoruz.",
    icon: <Search size={32} />,
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Tasarım (UI/UX)",
    description: "Markanızın ruhunu yansıtan, kullanıcı deneyimi (UX) odaklı modern ve estetik arayüz tasarımları hazırlıyoruz.",
    icon: <PenTool size={32} />,
    color: "bg-purple-600"
  },
  {
    id: 3,
    title: "Yazılım & Geliştirme",
    description: "Onaylanan tasarımı en güncel teknolojilerle (Next.js, React) kodluyor, hızlı ve güvenli bir altyapı kuruyoruz.",
    icon: <Code size={32} />,
    color: "bg-indigo-600"
  },
  {
    id: 4,
    title: "Test & Yayın",
    description: "Tüm fonksiyonları test ediyor, SEO ayarlarını yapıyor ve sitenizi kusursuz bir şekilde yayına alıyoruz.",
    icon: <Rocket size={32} />,
    color: "bg-green-600"
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-dark-900 relative border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BAŞLIK */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">ÇALIŞMA SÜRECİMİZ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Fikirden Gerçeğe <br />
            <span className="text-gray-400">Adım Adım Başarı</span>
          </h2>
        </div>

        {/* SÜREÇ ADIMLARI */}
        <div className="relative">
          
          {/* Bağlantı Çizgisi (Sadece Masaüstünde Görünür) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-dark-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="group flex flex-col items-center text-center">
                
                {/* İkon Yuvarlağı */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white mb-6 shadow-xl relative transition-transform duration-300 group-hover:scale-110 ${step.color}`}>
                  {step.icon}
                  {/* Sayı Rozeti */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-dark-900 border-2 border-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed px-2">
                  {step.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}