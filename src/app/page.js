"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero"; 
import Cta from "@/components/Cta";   
import Link from "next/link";
import { client } from "@/sanity/lib/client"; 
import { urlForImage } from "@/sanity/lib/image"; 
import { ArrowRight, Code, Layout, Smartphone, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Clients from "@/components/Clients"; // Bizim eklediğimiz profesyonel Marquee

export default function Home() {
  const [latestProjects, setLatestProjects] = useState([]);

  // Sanity'den En Son Eklenen 2 Projeyi Çek
  useEffect(() => {
    const fetchLatestProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(_createdAt desc)[0...2]{
          _id,
          title,
          "category": category->title, 
          mainImage,
          slug
        }`;
        const data = await client.fetch(query);
        setLatestProjects(data);
      } catch (error) {
        console.error("Projeler çekilemedi:", error);
      }
    };

    fetchLatestProjects();
  }, []);

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-indigo-500/30">
      <Navbar />
      
      {/* 1. HERO BÖLÜMÜ */}
      <Hero />
      
      {/* 2. LOGO ŞERİDİ (Eski kod silindi, sadece bu çalışacak) */}
      <Clients />

      {/* 3. BENTO GRID HİZMETLER */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Neler Yapıyoruz?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Dijital dünyada ihtiyacınız olan tüm yetenekler tek bir çatı altında.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Kart 1: Web Development */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 p-10 hover:border-indigo-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 transition-opacity">
                 <Code size={120} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-3xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-400 mb-6 max-w-md">Next.js ve React ile ışık hızında, SEO uyumlu ve yaşayan web siteleri.</p>
                <Link href="/hizmetler" className="inline-flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300">
                  İncele <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </Link>
              </div>
            </motion.div>

            {/* Kart 2: UI/UX */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between"
            >
               <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                 <Layout size={24} />
               </div>
               <div>
                 <h3 className="text-xl font-bold mb-2">UI/UX Tasarım</h3>
                 <p className="text-sm text-gray-400">Kullanıcı odaklı arayüzler.</p>
               </div>
            </motion.div>

            {/* Kart 3: Mobil */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 hover:border-pink-500/30 transition-all duration-500 flex flex-col justify-between"
            >
               <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                 <Smartphone size={24} />
               </div>
               <div>
                 <h3 className="text-xl font-bold mb-2">Mobil Uygulama</h3>
                 <p className="text-sm text-gray-400">iOS & Android çözümler.</p>
               </div>
            </motion.div>

            {/* Kart 4: SEO & Growth */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 p-10 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 transition-opacity">
                 <TrendingUp size={120} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-3xl font-bold mb-4">Growth & SEO</h3>
                <p className="text-gray-400 mb-6 max-w-md">Veri odaklı stratejilerle markanızı Google'da zirveye taşıyoruz.</p>
                <Link href="/hizmetler" className="inline-flex items-center text-blue-400 font-semibold group-hover:text-blue-300">
                  Detaylar <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. DİNAMİK SON PROJELER VİTRİNİ */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
           
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2 inline-block">PORTFOLYO</span>
                <h2 className="text-4xl md:text-5xl font-bold">Son Çalışmalar</h2>
              </div>
              <Link href="/projeler" className="px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all font-medium">
                Tüm Projeleri Gör
              </Link>
           </div>

           {/* Eğer Proje Varsa Listele */}
           {latestProjects.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {latestProjects.map((project, index) => (
                  <Link 
                    href={`/projeler/${project.slug?.current}`} 
                    key={project._id}
                    className={`group cursor-pointer block ${index === 1 ? 'md:mt-20' : ''}`} 
                  >
                     <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#111]">
                        {project.mainImage && (
                          <img 
                            src={urlForImage(project.mainImage).url()} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                            alt={project.title}
                          />
                        )}
                        {!project.mainImage && (
                          <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-700">Görsel Yok</div>
                        )}
                     </div>
                     <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                     <p className="text-gray-400">{project.category || "Genel"}</p>
                  </Link>
                ))}
             </div>
           ) : (
             <div className="text-center py-12 border border-dashed border-white/10 rounded-2xl bg-white/5">
                <p className="text-gray-400 mb-4">Henüz yayınlanmış proje bulunmuyor.</p>
                <Link href="/studio" className="text-indigo-400 underline hover:text-indigo-300">Panele gidip proje ekleyin.</Link>
             </div>
           )}

        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}