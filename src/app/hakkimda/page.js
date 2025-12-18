"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Zap, Layers, Fingerprint } from "lucide-react";

// MANİFESTO MADDELERİ
const PHILOSOPHY = [
  {
    title: "Kodun Sanatı",
    desc: "Bizim için kod yazmak sadece fonksiyon değil, dijital bir şiirdir. Temiz, okunabilir ve sürdürülebilir mimari kuruyoruz.",
    icon: Code2
  },
  {
    title: "Sessiz Performans",
    desc: "İyi tasarım bağırmaz. Arka planda sessizce çalışır, ışık hızında yüklenir ve kullanıcıyı yormaz.",
    icon: Zap
  },
  {
    title: "Global Standart",
    desc: "Yerel düşünmüyoruz. Silikon Vadisi standartlarında, ölçeklenebilir ve global teknolojiler kullanıyoruz.",
    icon: Globe
  }
];

// TEKNOLOJİ YIĞINI (Senin 'Dijital Ekibin')
const TECH_STACK = [
  { name: "Next.js 14", category: "Core" },
  { name: "React", category: "UI Library" },
  { name: "TypeScript", category: "Safety" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Sanity.io", category: "CMS" },
  { name: "Vercel", category: "Deployment" },
  { name: "Figma", category: "Design" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-indigo-500/30">
      <Navbar />

      {/* 1. HERO: GİZEMLİ VE TİPOGRAFİK GİRİŞ */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        
        {/* Arka Plan Izgarası */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
        
        {/* Odak Işığı */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
              We Are <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-gray-500">
                The Architects.
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mt-12 border-t border-white/10 pt-12">
               <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                 OCS Creative, dijital gürültünün içinde netlik arayan markalar için kurulmuş bir tasarım stüdyosudur. 
                 Biz kalabalık bir ajans değil, <span className="text-white font-medium">odaklanmış bir vizyonuz.</span>
               </p>
               <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-indigo-400">
                    Est. 2024
                  </div>
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-gray-400">
                    İstanbul Base
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MANİFESTO (Bento Grid Tasarımı) */}
      <section className="py-24 px-6 border-y border-white/5 bg-[#050505]">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Sol Büyük Kart */}
                <motion.div 
                   initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                   className="md:col-span-2 p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden group"
                >
                   <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Fingerprint size={150} />
                   </div>
                   <h2 className="text-3xl font-bold mb-6">Butik Yaklaşım, Dev Etki.</h2>
                   <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                      Büyük ajansların hantal süreçlerine, bitmeyen toplantılarına ve şişirilmiş faturalarına inanmıyoruz. 
                      OCS Creative'de doğrudan geliştiriciyle (yani işin mimarıyla) çalışırsınız. Aracı yok, vakit kaybı yok.
                      Sadece saf yetenek ve sonuç odaklı çalışma var.
                   </p>
                </motion.div>

                {/* Sağ Kartlar (Dikey Liste) */}
                <div className="space-y-6">
                   {PHILOSOPHY.map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/30 transition-all group"
                      >
                         <item.icon className="text-indigo-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
                         <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                         <p className="text-sm text-gray-400">{item.desc}</p>
                      </motion.div>
                   ))}
                </div>
            </div>
         </div>
      </section>

      {/* 3. DİJİTAL KADRO (Tech Stack) */}
      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto text-center">
            <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-6 inline-block">
               GÜÇ ÜNİTESİ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
               Arkamızdaki Teknoloji Ordusu
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
               {TECH_STACK.map((tech, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="group relative px-6 py-4 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-white/30 transition-all cursor-default"
                  >
                     <div className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{tech.name}</div>
                     <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{tech.category}</div>
                  </motion.div>
               ))}
            </div>

            <p className="mt-12 text-gray-500 text-sm max-w-2xl mx-auto">
               * Projelerimizde endüstri standardı olan en güncel ve güvenilir teknolojileri kullanıyoruz. 
               Bu sayede siteniz yıllarca güncel kalıyor.
            </p>
         </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}