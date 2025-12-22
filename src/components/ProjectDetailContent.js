"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, User, Layers, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetailContent() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const query = `*[_type == "project" && slug.current == $slug][0]{
        title,
        mainImage,
        gallery,
        "category": category,
        clientName,
        websiteUrl,
        tags,
        publishedAt,
        challenge,
        solution,
        stats,
        primaryColor,
        "relatedProjects": *[_type == "project" && slug.current != $slug][0...2]{
           title,
           slug,
           mainImage
        }
      }`;
      const data = await client.fetch(query, { slug });
      setProject(data);
      setLoading(false);
    };

    if (slug) fetchProject();
  }, [slug]);

  if (loading) return <div className="bg-[#030303] min-h-screen flex items-center justify-center text-white">Yükleniyor...</div>;
  if (!project) return <div className="bg-[#030303] min-h-screen flex items-center justify-center text-white">Proje bulunamadı.</div>;

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-indigo-500/30">
      <Navbar />

      {/* 1. HERO GÖRSELİ */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10"></div>
        {project.mainImage && (
            <motion.img 
            initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}
            src={urlForImage(project.mainImage).url()} 
            className="w-full h-full object-cover"
            alt={project.title} 
            />
        )}
        <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <Link href="/projeler" className="inline-flex items-center text-sm font-bold text-indigo-400 mb-6 hover:text-white transition-colors">
                    <ArrowLeft size={16} className="mr-2"/> Tüm Projelere Dön
                </Link>
                <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">{project.title}</h1>
            </div>
        </div>
      </div>

      {/* 2. PROJE DETAYLARI */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* SOL: YAPIŞKAN BİLGİ KARTI */}
            <div className="lg:col-span-1">
                <div className="sticky top-32 p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 space-y-8">
                    {/* Marka Rengi Çizgisi */}
                    {project.primaryColor && (
                        <div className="h-1 w-20 rounded-full mb-4" style={{ backgroundColor: project.primaryColor }}></div>
                    )}

                    <div>
                        <div className="flex items-center gap-3 text-gray-400 mb-2 text-sm uppercase tracking-widest font-bold">
                            <User size={16} className="text-indigo-500"/> Müşteri
                        </div>
                        <p className="text-xl font-medium">{project.clientName || project.title}</p>
                    </div>

                    <div className="h-px bg-white/10 w-full"></div>

                    <div>
                        <div className="flex items-center gap-3 text-gray-400 mb-2 text-sm uppercase tracking-widest font-bold">
                            <Layers size={16} className="text-indigo-500"/> Hizmet
                        </div>
                        <p className="text-xl font-medium">{project.category || "Genel"}</p>
                    </div>

                    <div className="h-px bg-white/10 w-full"></div>

                    <div>
                        <div className="flex items-center gap-3 text-gray-400 mb-2 text-sm uppercase tracking-widest font-bold">
                             <Calendar size={16} className="text-indigo-500"/> Tarih
                        </div>
                        <p className="text-xl font-medium">
                            {project.publishedAt 
                                ? new Date(project.publishedAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' }) 
                                : "2024"}
                        </p>
                    </div>

                    {/* Teknolojiler */}
                    {project.tags && (
                        <div className="pt-4">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {project.websiteUrl && (
                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors mt-4">
                            Siteyi Ziyaret Et <ExternalLink size={18}/>
                        </a>
                    )}
                </div>
            </div>

            {/* SAĞ: HİKAYE VE İÇERİK */}
            <div className="lg:col-span-2 text-lg text-gray-300 leading-relaxed space-y-12">
                
                {/* 1. İSTATİSTİKLER */}
                {project.stats && project.stats.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                        {project.stats.map((stat, i) => (
                            <div key={i} className="p-6 bg-[#111] border border-white/5 rounded-2xl text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ color: project.primaryColor }}>
                                    {stat.value}
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 2. ZORLUK (Challenge) */}
                {project.challenge && (
                    <div>
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
                            <Target className="text-red-500" /> Hedef & Zorluk
                        </h3>
                        <p>{project.challenge}</p>
                    </div>
                )}

                {/* 3. ÇÖZÜM (Solution) */}
                {project.solution && (
                    <div>
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
                            <Zap className="text-yellow-500" /> Yaklaşımımız
                        </h3>
                        <p>{project.solution}</p>
                    </div>
                )}
                
                {/* 4. GALERİ (Screenshots) */}
                {project.gallery && project.gallery.length > 0 && (
                    <div className="space-y-6 pt-6">
                        <h3 className="text-2xl font-bold text-white">Proje Galerisi</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {project.gallery.map((img, i) => (
                                <div key={i} className="rounded-2xl overflow-hidden border border-white/10">
                                    <img src={urlForImage(img).url()} alt={`Ekran Görüntüsü ${i}`} className="w-full h-auto"/>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
         </div>
      </section>
      
      <Cta />
      <Footer />
    </main>
  );
}