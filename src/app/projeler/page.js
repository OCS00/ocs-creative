"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta"; 
import { client } from "@/sanity/lib/client"; 
import { urlForImage } from "@/sanity/lib/image"; 
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  // KATEGORİLER ARTIK SABİT DEĞİL, STATE İÇİNDE
  const [categories, setCategories] = useState(["Tümü"]); 
  const [activeCategory, setActiveCategory] = useState("Tümü");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Tüm projeleri çek
        const query = `*[_type == "project"] | order(publishedAt desc){
          _id,
          title,
          category, 
          status,
          mainImage,
          tags,
          slug
        }`;
        const data = await client.fetch(query);
        
        setProjects(data);
        setFilteredProjects(data);

        // --- SİHİRLİ KISIM BURASI ---
        // 1. Projelerden sadece kategorileri al (data.map)
        // 2. Boş olanları filtrele (.filter)
        // 3. Tekrarlananları sil (new Set)
        // 4. Başına "Tümü" ekle
        const uniqueCategories = ["Tümü", ...new Set(data.map(item => item.category).filter(Boolean))];
        
        setCategories(uniqueCategories); // Butonları oluştur
        // ---------------------------

      } catch (error) {
        console.error("Sanity Hatası:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "Tümü") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === category));
    }
  };

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-indigo-500/30 relative">
      <Navbar />
        {/* ARKA PLAN */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="relative z-10">
      <section className="pt-40 pb-16 px-6 text-center">
         <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Seçilmiş <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Başarı Hikayeleri.
            </span>
         </h1>
      </section>

      {/* DİNAMİK FİLTRELER */}
      <section className="px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PROJELER GRID */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={project._id}
                className="group relative"
              >
                 <Link href={project.status === "inProgress" ? "#" : `/projeler/${project.slug.current}`} className={`block h-full ${project.status === "inProgress" ? "cursor-default" : "cursor-pointer"}`}>
                  
                  <div className="relative h-[450px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
                    {/* Görsel Kontrolü */}
                    {project.mainImage ? (
                        <img 
                        src={urlForImage(project.mainImage).url()} 
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                    ) : (
                        <div className="h-full w-full flex items-center justify-center bg-gray-900 text-gray-600">Görsel Yok</div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>

                    <div className="absolute top-6 left-6 flex gap-2">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold text-white">
                        {project.category}
                      </span>
                      {project.status === 'published' && (
                          <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-xs font-bold flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Yayında
                          </span>
                      )}
                      {project.status === 'inProgress' && (
                          <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 rounded-full text-xs font-bold flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span> Yapım Aşamasında
                          </span>
                      )}
                    </div>

                    {project.status === 'published' && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
                            <ArrowUpRight className="text-white" size={32} />
                        </div>
                        </div>
                    )}

                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags && project.tags.map((tag, i) => (
                          <span key={i} className="text-[11px] font-medium text-gray-300 tracking-wide bg-white/5 px-2 py-1 rounded border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 mt-10">
              <p className="text-gray-500">Henüz proje bulunamadı.</p>
            </div>
        )}
      </section>
      
      <Cta />
      <Footer />
      </div>
    </main>
  );
}