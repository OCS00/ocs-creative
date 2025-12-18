"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Web sitesi tasarımı ne kadar sürer?",
    answer: "Projenin kapsamına göre değişmekle birlikte, standart bir kurumsal web sitesini 1-2 hafta içinde, daha kapsamlı projeleri 3-4 hafta içinde teslim ediyoruz."
  },
  {
    question: "SEO uyumlu çalışma yapıyor musunuz?",
    answer: "Kesinlikle. Tüm projelerimizde Google'ın güncel algoritmalarına uygun, mobil uyumlu ve hızlı altyapılar kullanıyoruz. Temel SEO ayarları standarttır."
  },
  {
    question: "Ödeme koşullarınız nasıl?",
    answer: "Genellikle projenin %50'si iş başlangıcında, kalan %50'si ise proje tesliminde ve onayınız alındıktan sonra talep edilir."
  },
  {
    question: "Sonradan destek veriyor musunuz?",
    answer: "Evet, web sitenizi yayına aldıktan sonra 1 yıl boyunca teknik destek sağlıyoruz. Herhangi bir sorunda bize WhatsApp veya Mail üzerinden ulaşabilirsiniz."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-dark-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Merak Ettikleriniz
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-dark-700 rounded-2xl overflow-hidden bg-dark-900">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-dark-800 transition-colors"
              >
                <span className={`font-bold ${openIndex === index ? 'text-primary' : 'text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? <Minus size={20} className="text-primary"/> : <Plus size={20} className="text-gray-500"/>}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-dark-800/50 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}