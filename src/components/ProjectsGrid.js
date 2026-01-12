"use client"; 
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

export default function ProjectsGrid({ initialProjects }) {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  // Kategorileri projelerden dinamik olarak çek
  const categories = ["Tümü", ...new Set(initialProjects.map((p) => p.category).filter(Boolean))];

  // Filtreleme
  const filteredProjects = activeCategory === "Tümü" 
    ? initialProjects 
    : initialProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* KATEGORİ FİLTRELERİ */}
      <section className="px-6 mb-20">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-md relative overflow-hidden ${
                activeCategory === cat
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PROJE LİSTESİ */}
      <section className="px-6 pb-32 max-w-[1400px] mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project._id}
                className="group w-full"
              >
                <Link 
                  href={project.status === "inProgress" ? "#" : `/projeler/${project.slug.current}`} 
                  className={`block h-full relative ${project.status === "inProgress" ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] group-hover:border-white/30 transition-colors duration-500">
                    
                    {/* Görsel */}
                    {project.mainImage ? (
                        <motion.img 
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.7 }}
                          src={urlForImage(project.mainImage).url()} 
                          alt={project.title}
                          className="h-full w-full object-cover opacity-90 group-hover:opacity-100"
                        />
                    ) : (
                        <div className="h-full w-full flex flex-col items-center justify-center bg-gray-900 text-gray-600 font-mono">
                            <Layers size={48} className="mb-4 opacity-50"/>
                            <span>Görsel Bekleniyor</span>
                        </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    {/* Sol Üst Etiketler */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                      <span className="px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                        {project.category}
                      </span>
                      {project.status === 'inProgress' && (
                          <span className="px-4 py-1.5 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 rounded-full text-xs font-bold flex items-center gap-2 backdrop-blur-md">
                              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span> Yapım Aşamasında
                          </span>
                      )}
                    </div>

                    {/* Hover İkonu */}
                    {project.status === 'published' && (
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-10">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-xl">
                                <ArrowUpRight size={24} />
                            </div>
                        </div>
                    )}

                    {/* Alt Bilgi */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-10">
                      <h3 className="text-3xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform translate-y-4 group-hover:translate-y-0">
                        {project.tags && project.tags.map((tag, i) => (
                          <span key={i} className="text-[11px] font-mono font-medium text-gray-300 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-sm">
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
            <div className="text-center py-32 bg-white/5 rounded-[2rem] border border-white/10 mt-10">
              <p className="text-gray-500 text-lg">Bu kategoride henüz yayınlanmış bir proje bulunmuyor.</p>
            </div>
        )}
      </section>
    </>
  );
}