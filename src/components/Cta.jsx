"use client";
import React from "react";
import Link from "next/link";
// ✅ 1. IMPORT EKLENDİ
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function Cta() {
  // ✅ 2. PATHNAME TANIMLANDI
  const pathname = usePathname();

  // ✅ 3. GİZLEME MANTIĞI: Eğer Sanity panelindeysek bu bölümü gösterme
  if (pathname && pathname.startsWith('/studio')) {
    return null;
  }

  // --- MOUSE IŞIK MEKANİZMASI ---
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Mouse'u takip eden dinamik maske
  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section 
      className="relative w-full py-20 bg-[#020202] overflow-hidden border-t border-white/[0.08] group"
      onMouseMove={handleMouseMove}
    >
      
      {/* 1. SÜREKLİ GRID (Sönük Hal) */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1400px] mx-auto w-full z-0 px-6 md:px-0 opacity-10">
         <div className="w-px h-full bg-white"></div>
         <div className="w-px h-full bg-white"></div>
         <div className="w-px h-full bg-white"></div>
         <div className="w-px h-full bg-white"></div>
         <div className="w-px h-full bg-white"></div>
      </div>

      {/* 2. PARLAYAN GRID (Sadece Mouse gelince görünür) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none flex justify-between max-w-[1400px] mx-auto w-full z-10 px-6 md:px-0"
        style={{ 
          maskImage, 
          WebkitMaskImage: maskImage 
        }}
      >
         <div className="w-px h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
         <div className="w-px h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
         <div className="w-px h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
         <div className="w-px h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
         <div className="w-px h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
      </motion.div>

      {/* 3. UFUK IŞIĞI (Horizon Light) */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[250px] bg-indigo-600/30 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen animate-pulse-slow"></div>
      
      {/* 4. ZEMİN GÜRÜLTÜSÜ (Texture) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}>
      </div>

      {/* 5. İÇERİK */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Başlık */}
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.9] drop-shadow-2xl">
          Vizyonunuzu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">
             İnşa Edelim.
          </span>
        </h2>

        {/* Alt Metin */}
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
           Sınırları zorlayan markalar için, sınırları zorlayan dijital deneyimler.
        </p>

        {/* LIQUID BUTTON */}
        <div className="relative group/btn">
          
          {/* Buton Arkası Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-20 group-hover/btn:opacity-100 transition duration-500 group-hover/btn:duration-200"></div>
          
          <Link 
            href="/iletisim"
            className="relative inline-flex items-center justify-center gap-4 px-10 py-4 bg-black rounded-full leading-none overflow-hidden"
          >
            {/* Buton İçi Parlama */}
            <span className="absolute inset-0 rounded-full border border-white/10 group-hover/btn:border-white/30 transition-colors"></span>
            
            {/* Metin */}
            <span className="text-lg font-bold text-white group-hover/btn:text-indigo-100 transition-colors">Projeyi Başlat</span>
            
            {/* İkon */}
            <ArrowRight size={20} className="text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
            
            {/* Işık Yansıması */}
            <div className="absolute inset-0 rounded-full ring-1 ring-white/10 group-hover/btn:ring-white/30"></div>
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/20 blur-xl rounded-full opacity-0 group-hover/btn:opacity-30 transition-opacity duration-500"></div>
          </Link>
        </div>

      </div>
    </section>
  );
}