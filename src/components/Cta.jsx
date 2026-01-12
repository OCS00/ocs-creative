"use client";
import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site"; // Merkezi Veri
import { ArrowRight, Mail } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      
      {/* Arka Plan Efektleri */}
      <div className="absolute inset-0 bg-indigo-900/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
          Markanızı Bir Sonraki <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Seviyeye Taşıyalım.
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
          Hazır şablonlarla vakit kaybetmeyin. Sizin için özel olarak tasarlanmış, 
          hızlı ve dönüşüm odaklı bir dijital deneyim inşa edelim.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Teklif Al Butonu */}
          <Link 
            href="/iletisim" 
            className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Hemen Başlayalım <ArrowRight size={20} />
          </Link>

          {/* E-Posta Butonu (Config'den Çeker) */}
          <a 
            href={`mailto:${siteConfig.contact.email}`}
            className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Mail size={20} />
            {siteConfig.contact.email}
          </a>

        </div>
      </div>
    </section>
  );
}