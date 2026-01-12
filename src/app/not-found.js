"use client";
import Link from "next/link";
import { Home, AlertTriangle, Mail } from "lucide-react";
import { siteConfig } from "@/config/site"; // ✅ Config Bağlantısı

export default function NotFound() {
  // GÜVENLİ KOD: Mail adresi yoksa varsayılanı kullan
  const supportEmail = siteConfig?.contact?.email || "info@ocscreative.com";

  return (
    <div className="min-h-screen bg-[#020202] text-white flex flex-col items-center justify-center text-center p-4 overflow-hidden relative selection:bg-indigo-500/30">
      
      {/* Arka Plan Efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
      
      <div className="relative z-10">
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-white mb-4">
          404
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
          <AlertTriangle className="text-yellow-500" /> Houston, Bir Sorunumuz Var!
        </h2>
        
        <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg">
          Aradığınız sayfa uzay boşluğunda kaybolmuş gibi görünüyor. Endişelenmeyin, sizi ana üsse geri götürebiliriz.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-8 py-4 bg-white text-black rounded-full font-bold transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
          >
            <Home size={20} /> Ana Sayfaya Dön
          </Link>

          <a 
            href={`mailto:${supportEmail}`}
            className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Mail size={20} /> Sorun Bildir
          </a>
        </div>
      </div>
    </div>
  );
}