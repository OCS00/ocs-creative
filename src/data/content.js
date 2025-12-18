"use client";
import { useState } from "react";
import { Plus, Minus, HelpCircle, Phone } from "lucide-react";
import VatCalculator from "@/components/VatCalculator"; 

// 🔥 VERİYİ DİREKT BURAYA KOYUYORUZ (GARANTİ YÖNTEM)
const faqData = [
  {
    question: "Şirket kurmak ne kadar sürer?",
    answer: "Gerekli evraklar (imza beyannamesi, kira kontratı vb.) tamamlandığında, şahıs şirketleri aynı gün, Limited ve Anonim şirketler ortalama 2-3 iş günü içinde kurulur."
  },
  {
    question: "Home-ofis şahıs şirketi kurabilir miyim?",
    answer: "Evet, kurabilirsiniz. Evinizin bir odasını ofis olarak göstererek kira stopaj avantajından yararlanabilir ve şahıs firmanızı yasal olarak faaliyete geçirebilirsiniz."
  },
  {
    question: "Hiç fatura kesmesem de vergi öder miyim?",
    answer: "Evet. Hiç satış yapmasanız bile her ay sabit Damga Vergisi (KDV ve Muhtasar beyannameleri için) ödenmesi gerekmektedir. Bu tutar her yıl yeniden belirlenir."
  },
  {
    question: "Genç Girişimci Desteği nedir?",
    answer: "18-29 yaş arası girişimciler için 3 yıl boyunca kazancın belirli bir kısmına gelir vergisi muafiyeti ve 1 yıl boyunca Bağ-Kur primlerinin devlet tarafından ödenmesi desteğidir."
  },
  {
    question: "E-Fatura'ya geçmek zorunlu mu?",
    answer: "Yıllık cirosu belirli bir limiti aşan işletmeler ve e-ticaret yapanlar için zorunludur. Ancak ciro şartı aranmaksızın isteğe bağlı olarak da geçiş yapılabilir ve maliyet avantajı sağlar."
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="sss" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 flex items-center justify-center gap-2">
            <HelpCircle size={16} /> Destek Merkezi
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary">
            Sıkça Sorulan <span className="text-primary">Sorular</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Aklınıza takılan soruların cevaplarını burada bulabilir veya yandaki araçla KDV hesaplaması yapabilirsiniz.
          </p>
        </div>

        {/* İKİLİ KOLON YAPISI: SOLDA SSS, SAĞDA HESAP MAKİNESİ */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* SOL: SORULAR (Geniş Alan - 2 birim) */}
          <div className="lg:col-span-2 space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? "bg-white border-primary/30 shadow-lg ring-1 ring-primary/20" 
                    : "bg-gray-50 border-gray-100 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? "text-primary" : "text-secondary"}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <div className="bg-primary text-white p-1 rounded-full"><Minus size={16} /></div>
                  ) : (
                    <div className="bg-gray-200 text-gray-500 p-1 rounded-full"><Plus size={16} /></div>
                  )}
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-gray-100/50 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SAĞ: HESAP MAKİNESİ (Dar Alan - 1 birim) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24"> 
              <VatCalculator />
              
              {/* İletişim Kutusu */}
              <div className="mt-6 bg-blue-900 text-white p-6 rounded-2xl text-center shadow-xl">
                <h4 className="font-bold text-lg mb-2">Başka sorunuz mu var?</h4>
                <p className="text-blue-200 text-sm mb-4">Size özel danışmanlık için hemen arayın.</p>
                <a href="tel:+905551234567" className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">
                  <Phone size={16} /> Bizi Arayın
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}