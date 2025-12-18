"use client";
import Link from "next/link";
import { ArrowRight, Code2, Rocket, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 pt-20">
      
      {/* --- ARKA PLAN EFEKTLERİ (NEON PARLAMALAR) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Sol Üst Mor Işık */}
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        {/* Sağ Alt Mavi Işık */}
        <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. KÜÇÜK ETİKET */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800 border border-dark-700 text-primary text-sm font-medium mb-8 hover:border-primary/50 transition-colors cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Dijital Çözüm Ortağınız
        </motion.div>

        {/* 2. ANA BAŞLIK (H1) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Markanızı <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary">
            Geleceğe Taşıyın
          </span>
        </motion.h1>

        {/* 3. AÇIKLAMA (P) */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Sadece güzel görünen değil, <strong>sonuç getiren</strong> web siteleri tasarlıyoruz. 
          Modern yazılım teknolojileri ve stratejik SEO ile rakiplerinizin önüne geçin.
        </motion.p>

        {/* 4. BUTONLAR */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/iletisim" 
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-2 group"
          >
            Hemen Başlayalım <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/#referanslar" 
            className="w-full sm:w-auto px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white border border-dark-700 hover:border-gray-500 rounded-full font-bold text-lg transition-all flex items-center justify-center"
          >
            İşlerimizi Gör
          </Link>
        </motion.div>

        {/* 5. İSTATİSTİKLER / GÜVEN ÖGELERİ (Alt Kısım) */}
        <motion.div 
          initial={{ opacity: 0, mt: 40 }}
          animate={{ opacity: 1, mt: 80 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-dark-800/50 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <Globe className="w-8 h-8 text-secondary mb-2 opacity-80" />
            <h3 className="text-2xl font-bold text-white">%100</h3>
            <p className="text-gray-500 text-sm">Mobil Uyumlu</p>
          </div>
          <div className="flex flex-col items-center">
            <Rocket className="w-8 h-8 text-primary mb-2 opacity-80" />
            <h3 className="text-2xl font-bold text-white">Hızlı</h3>
            <p className="text-gray-500 text-sm">Yüksek Performans</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center">
            <Code2 className="w-8 h-8 text-purple-400 mb-2 opacity-80" />
            <h3 className="text-2xl font-bold text-white">Modern</h3>
            <p className="text-gray-500 text-sm">Temiz Kodlama</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}