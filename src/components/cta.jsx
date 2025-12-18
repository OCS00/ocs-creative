"use client";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Arka Plan Degrade */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
      
      {/* Desenler */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Markanızı Bir Üst Seviyeye <br /> Taşımaya Hazır mısınız?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Sizin için en doğru stratejiyi belirleyelim, dijital dünyada rakiplerinizin önüne geçin. Hemen tanışalım, projenizi konuşalım.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/iletisim" 
            className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            Teklif İste <ArrowRight size={20} />
          </Link>
          <a 
            href="tel:+905551234567" 
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Bizi Arayın
          </a>
        </div>
      </div>
    </section>
  );
}