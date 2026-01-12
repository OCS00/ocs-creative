"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Target, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetailContent() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const query = `*[_type == "project" && slug.current == $slug][0]{
        title, mainImage, gallery, "category": category, clientName, websiteUrl, tags, publishedAt, challenge, solution, stats, primaryColor,
        "relatedProjects": *[_type == "project" && slug.current != $slug][0...2]{ title, slug, mainImage }
      }`;
      const data = await client.fetch(query, { slug });
      setProject(data);
      setLoading(false);
    };
    if (slug) fetchProject();
  }, [slug]);

  if (loading) return <div className="bg-[#030303] min-h-screen flex items-center justify-center text-white font-mono">Yükleniyor...</div>;
  if (!project) return <div className="bg-[#030303] min-h-screen flex items-center justify-center text-white font-mono">Proje bulunamadı.</div>;

  // Marka rengi yoksa varsayılan indigo kullan
  const accentColor = project.primaryColor || "#6366F1";

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-indigo-500/30">
      <Navbar />

      {/* 1. CINEMATIC HERO */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/50 via-transparent to-[#030303] z-10" />
        {project.mainImage && (
            <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} className="w-full h-full">
               <img src={urlForImage(project.mainImage).url()} className="w-full h-full object-cover" alt={project.title} />
            </motion.div>
        )}
        <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12 pb-20">
            <div className="max-w-[1400px] mx-auto">
                <Link href="/projeler" className="inline-flex items-center text-sm font-bold text-gray-300 mb-8 hover:text-white transition-colors bg-white/5 backdrop-blur-lg px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/10">
                    <ArrowLeft size={16} className="mr-2"/> Tüm Projelere Dön
                </Link>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.2 }} 
                  className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]"
                >
                  {project.title}
                </motion.h1>
            </div>
        </div>
      </div>

      {/* 2. DETAYLAR VE HİKAYE */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto relative z-20">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* SOL: STICKY INFO PANEL */}
            <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                    <div className="p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/10 space-y-8 shadow-2xl relative overflow-hidden">
                        {/* Arkaplan Glow */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-[80px]" style={{ backgroundColor: `${accentColor}20` }} />
                        
                        <div>
                           <span className="text-xs text-gray-500 font-mono uppercase tracking-widest block mb-2">Müşteri</span>
                           <h3 className="text-2xl font-bold text-white">{project.clientName || project.title}</h3>
                        </div>

                        <div className="h-px bg-white/5 w-full"></div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <span className="text-xs text-gray-500 font-mono uppercase tracking-widest block mb-2">Sektör</span>
                                <p className="text-lg font-medium text-gray-200">{project.category}</p>
                            </div>
                            <div>
                                <span className="text-xs text-gray-500 font-mono uppercase tracking-widest block mb-2">Yıl</span>
                                <p className="text-lg font-medium text-gray-200">{project.publishedAt ? new Date(project.publishedAt).getFullYear() : "2024"}</p>
                            </div>
                        </div>

                        <div className="h-px bg-white/5 w-full"></div>

                        <div>
                            <span className="text-xs text-gray-500 font-mono uppercase tracking-widest block mb-4">Kullanılan Teknolojiler</span>
                            <div className="flex flex-wrap gap-2">
                                {project.tags?.map((tag, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.websiteUrl && (
                            <a 
                                href={project.websiteUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center justify-center w-full py-5 bg-white text-black font-bold text-lg rounded-xl hover:scale-[1.02] transition-transform"
                            >
                                Canlı Siteyi Gör <ExternalLink size={20} className="ml-2"/>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* SAĞ: HİKAYE (CASE STUDY) */}
            <div className="lg:col-span-8 space-y-24">
                
                {/* Challenge & Solution */}
                <div className="space-y-16">
                    {project.challenge && (
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 border border-red-500/20">
                                    <Target size={24} />
                                </span>
                                <h2 className="text-3xl font-bold">Problem (The Challenge)</h2>
                            </div>
                            <p className="text-xl text-gray-400 leading-relaxed font-light border-l-2 border-white/10 pl-6">
                                {project.challenge}
                            </p>
                        </motion.div>
                    )}

                    {project.solution && (
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                                    <CheckCircle2 size={24} />
                                </span>
                                <h2 className="text-3xl font-bold">Çözümümüz</h2>
                            </div>
                            <p className="text-xl text-gray-400 leading-relaxed font-light border-l-2 border-white/10 pl-6">
                                {project.solution}
                            </p>
                        </motion.div>
                    )}
                </div>

                {/* İstatistikler (Impact) */}
                {project.stats && project.stats.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {project.stats.map((stat, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, scale: 0.9 }} 
                                whileInView={{ opacity: 1, scale: 1 }} 
                                transition={{ delay: i * 0.1 }} 
                                className="p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/10 text-center relative group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{stat.value}</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Galeri Grid */}
                {project.gallery && project.gallery.length > 0 && (
                    <div className="space-y-10">
                        <h3 className="text-2xl font-bold border-b border-white/10 pb-6">Proje Galerisi</h3>
                        <div className="grid grid-cols-1 gap-12">
                            {project.gallery.map((image, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 40 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.8 }} 
                                    className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a]"
                                >
                                    <img 
                                        src={urlForImage(image).url()} 
                                        alt={`Project Shot ${i}`} 
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
         </div>
      </section>
      
      {/* 3. NEXT PROJECT CTA */}
      <Cta />
      <Footer />
    </main>
  );
}