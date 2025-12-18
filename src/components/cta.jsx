import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Ana Kart */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] p-12 md:p-20 text-center group">
          
          {/* Arka Plan Grid Efekti */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>
          
          {/* Hareketli Mor Işık (Spotlight) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] group-hover:bg-indigo-600/30 transition-all duration-700 pointer-events-none"></div>
          
          {/* İçerik */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Markanızı Bir Üst Seviyeye <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Taşımaya Hazır mısınız?
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Sizin için en doğru stratejiyi belirleyelim, dijital dünyada rakiplerinizin önüne geçin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Teklif İste Butonu */}
              <Link 
                href="/iletisim" 
                className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 hover:scale-105 transition-all flex items-center gap-2 group/btn shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Teklif İste
                <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
              </Link>

              {/* Bizi Arayın Butonu */}
              <Link 
                href="tel:+905551234567" 
                className="px-8 py-4 rounded-full border border-white/10 text-white font-medium text-lg bg-white/5 hover:bg-white/10 hover:border-white transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <Phone size={20} className="text-indigo-400" />
                Bizi Arayın
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}