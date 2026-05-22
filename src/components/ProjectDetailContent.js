"use client";
import React, { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, Target, Lightbulb, Quote, Clock, Layers, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECT_TYPE_LABELS = {
  website:   { label: "Web Sitesi",       icon: "🌐" },
  mobile:    { label: "Mobil Uygulama",   icon: "📱" },
  saas:      { label: "SaaS Yazılım",     icon: "⚙️" },
  ecommerce: { label: "E-Ticaret",        icon: "🛒" },
  uiux:      { label: "UI/UX Tasarım",    icon: "🎨" },
};

export default function ProjectDetailContent({ project }) {
  const accent  = project.primaryColor || "#6366F1";
  const typeInfo = PROJECT_TYPE_LABELS[project.projectType] || null;
  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="bg-[#030303] min-h-screen text-white selection:bg-indigo-500/30">

      <div className="relative h-[80vh] w-full overflow-hidden">

        {project.mainImage ? (
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full h-full relative"
          >
            <Image
              src={urlForImage(project.mainImage).width(1920).url()}
              fill
              sizes="100vw"
              priority
              className="object-cover"
              alt={project.mainImage?.alt || project.title}
            />
          </motion.div>
        ) : (
          <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${accent}18, #09090b)` }} />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/60 to-transparent z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-14 pb-16">
          <div className="max-w-[1400px] mx-auto w-full">

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link
                href="/projeler"
                className="inline-flex items-center text-sm font-semibold text-gray-300 mb-10 hover:text-white transition-colors bg-white/8 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/15 gap-2"
              >
                <ArrowLeft size={15} /> Tüm Projeler
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-5"
            >
              {typeInfo && (
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
                  style={{ backgroundColor: `${accent}18`, borderColor: `${accent}40`, color: accent }}
                >
                  {typeInfo.icon} {typeInfo.label}
                </span>
              )}
              {project.duration && (
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/8 border border-white/12 text-gray-300">
                  <Clock size={11} /> {project.duration}
                </span>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-5"
            >
              {project.title}
            </motion.h1>

            {project.excerpt && (
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed"
              >
                {project.excerpt}
              </motion.p>
            )}
          </div>
        </div>
      </div>

      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-5">

              <div
                className="rounded-[2rem] bg-[#0c0c0e] border border-white/8 overflow-hidden shadow-2xl"
                style={{ boxShadow: `0 0 80px ${accent}12` }}
              >
                <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${accent}, ${accent}60, transparent)` }} />

                <div className="p-8 space-y-7">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 block mb-2">Müşteri</span>
                    <h2 className="text-2xl font-extrabold text-white leading-tight">
                      {project.clientName || project.title}
                    </h2>
                  </div>

                  <div className="h-px bg-white/5" />

                  <div className="grid grid-cols-2 gap-6">
                    {(project.projectType || project.category) && (
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 block mb-2">Tür</span>
                        <p className="text-sm font-semibold text-gray-200">
                          {typeInfo ? `${typeInfo.icon} ${typeInfo.label}` : project.category}
                        </p>
                      </div>
                    )}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 block mb-2">Yıl</span>
                      <p className="text-sm font-semibold text-gray-200">
                        {project.publishedAt ? new Date(project.publishedAt).getFullYear() : new Date().getFullYear()}
                      </p>
                    </div>
                    {project.duration && (
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 block mb-2">Süre</span>
                        <p className="text-sm font-semibold text-gray-200">{project.duration}</p>
                      </div>
                    )}
                  </div>

                  {project.tags?.length > 0 && (
                    <>
                      <div className="h-px bg-white/5" />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 block mb-3">
                          <Layers size={10} className="inline mr-1" />Teknoloji Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i}
                              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-xs font-mono text-gray-300 hover:border-white/20 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {project.websiteUrl && (
                    <>
                      <div className="h-px bg-white/5" />
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-4 rounded-xl font-bold text-sm transition-all hover:opacity-90 hover:scale-[1.02] gap-2"
                        style={{ backgroundColor: accent, color: "#fff", boxShadow: `0 0 24px ${accent}50` }}
                      >
                        Canlı Siteyi Gör <ExternalLink size={16} />
                      </a>
                    </>
                  )}
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-[#0c0c0e] border border-white/8 p-6 text-center">
                <p className="text-xs text-gray-500 mb-3">Benzer bir proje mi istiyorsunuz?</p>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-indigo-400 transition-colors"
                >
                  Ücretsiz Teklif Al <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-20">

            {(project.challenge || project.solution) && (
              <div className="space-y-12">
                {project.challenge && (
                  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-10 h-10 rounded-xl bg-red-500/12 border border-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0">
                        <Target size={20} />
                      </span>
                      <h2 className="text-2xl font-extrabold">Zorluk</h2>
                    </div>
                    <p className="text-lg text-gray-400 leading-relaxed font-light border-l-2 pl-6" style={{ borderColor: `${accent}50` }}>
                      {project.challenge}
                    </p>
                  </motion.div>
                )}

                {project.solution && (
                  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-10 h-10 rounded-xl bg-emerald-500/12 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                        <Lightbulb size={20} />
                      </span>
                      <h2 className="text-2xl font-extrabold">Çözüm</h2>
                    </div>
                    <p className="text-lg text-gray-400 leading-relaxed font-light border-l-2 pl-6" style={{ borderColor: `${accent}50` }}>
                      {project.solution}
                    </p>
                  </motion.div>
                )}
              </div>
            )}

            {project.stats?.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp size={20} style={{ color: accent }} />
                  <h2 className="text-2xl font-extrabold">Sonuçlar</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="relative rounded-2xl bg-[#0c0c0e] border border-white/8 p-7 text-center overflow-hidden group"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `radial-gradient(ellipse at center, ${accent}12, transparent 70%)` }}
                      />
                      <div className="relative z-10">
                        <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight" style={{ color: accent }}>
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {project.testimonial?.quote && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[2rem] overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${accent}10, transparent 60%)`, border: `1px solid ${accent}25` }}
              >
                <div className="p-10 md:p-12">
                  <Quote
                    size={48}
                    className="mb-6 opacity-30"
                    style={{ color: accent }}
                  />
                  <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed mb-8 italic">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    {project.testimonial.authorAvatar && (
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2" style={{ borderColor: accent }}>
                        <Image
                          src={urlForImage(project.testimonial.authorAvatar).width(96).height(96).url()}
                          width={48} height={48}
                          alt={project.testimonial.authorName || ""}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    <div>
                      {project.testimonial.authorName && (
                        <p className="font-bold text-white text-sm">{project.testimonial.authorName}</p>
                      )}
                      {project.testimonial.authorRole && (
                        <p className="text-xs text-gray-500 mt-0.5">{project.testimonial.authorRole}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {project.gallery?.length > 0 && (
              <div>
                <h2 className="text-2xl font-extrabold mb-8 pb-5 border-b border-white/8">Proje Galerisi</h2>
                <div className="space-y-8">
                  {project.gallery.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.7 }}
                      className="rounded-[1.5rem] overflow-hidden border border-white/8 bg-[#0c0c0e] cursor-zoom-in group"
                      onClick={() => setActiveImg(urlForImage(image).width(1600).url())}
                    >
                      <div className="overflow-hidden">
                        <Image
                          src={urlForImage(image).width(1280).url()}
                          alt={image?.alt || `Ekran görüntüsü ${i + 1}`}
                          width={1280}
                          height={800}
                          className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        />
                      </div>
                      {image.caption && (
                        <p className="text-xs text-gray-500 px-6 py-3 font-mono">{image.caption}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] bg-[#0c0c0e] border border-white/8 p-10 md:p-14 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 100%, ${accent}15, transparent 65%)` }} />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-3">
                  Buna Benzer Bir Proje İster Misiniz?
                </h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
                  Bu projeyi beğendiyseniz, aynı kalite ve özeni markanız için de sunabiliriz.
                </p>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 px-9 py-4 font-bold rounded-full transition-all hover:scale-105"
                  style={{ backgroundColor: accent, color: "#fff", boxShadow: `0 0 30px ${accent}50` }}
                >
                  Ücretsiz Teklif Al <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveImg(null)}
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              className="relative max-w-6xl w-full"
            >
              <Image
                src={activeImg}
                alt="Galeri görseli"
                width={1600}
                height={1000}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
