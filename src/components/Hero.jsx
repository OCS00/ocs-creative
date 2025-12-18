"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black group"
      onMouseMove={handleMouseMove}
    >
      {/* --- 1. YILDIZ ALANI (CSS İLE) --- */}
      {/* Bu katman sabit duran, çok hafif yıldızları oluşturur */}
      <div className="absolute inset-0 z-0 opacity-40"
           style={{
             backgroundImage: `radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
                               radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
                               radial-gradient(1px 1px at 50px 160px, #fff, rgba(0,0,0,0)),
                               radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
                               radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
                               radial-gradient(1px 1px at 160px 120px, #fff, rgba(0,0,0,0))`,
             backgroundSize: '200px 200px'
           }}
      ></div>

      {/* --- 2. MOUSE SPOTLIGHT (GİZLİ GÜÇ) --- */}
      {/* Mouse'un olduğu yerde devasa, renkli bir aydınlatma oluşturur */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-1"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(79, 70, 229, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* --- 3. PRO GRID DOKUSU (ÇOK HAFİF) --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-1"></div>


      {/* --- 4. HAREKETLİ IŞIK ŞERİTLERİ (SHOOTING STARS) --- */}
      {/* Arka planda ara sıra kayan ışık çizgileri */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent opacity-20"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent opacity-20"></div>
      
      {/* --- İÇERİK --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-[-50px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          
          {/* Rozet */}
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl mb-12 shadow-2xl shadow-indigo-500/10 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-bold tracking-[0.2em] text-gray-300 uppercase">
              OCS Creative Studio
            </span>
          </div>

          {/* Başlık (Devasa ve Keskin) */}
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-tighter text-white mb-8 leading-[0.9] drop-shadow-2xl">
            Beyond <br />
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
              Boundaries.
            </span>
          </h1>

          {/* Alt Metin */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Limitleri kaldırın. <span className="text-white font-medium">Next.js 14</span> mimarisi ve <span className="text-white font-medium">Ödüllü Tasarım</span> anlayışıyla markanızı geleceğe taşıyoruz.
          </p>
          
          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            
            {/* Primary Button */}
            <Link href="/projeler">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Projeleri Gör <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </span>
              </motion.button>
            </Link>

            {/* Secondary Button */}
            <Link href="/iletisim">
              <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-10 py-5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl text-white font-medium text-lg hover:bg-white/10 transition-colors flex items-center gap-3"
              >
                <Play size={16} fill="currentColor" />
                Tanışalım
              </motion.button>
            </Link>
          </div>

        </motion.div>
      </div>

      {/* Alt Dekorasyon (Sahne Işığı Efekti) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-t-full"></div>
    </section>
  );
}