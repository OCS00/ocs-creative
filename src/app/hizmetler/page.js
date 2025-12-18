"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta"; 
import { PortableText } from "@portabletext/react"; 
import * as LucideIcons from "lucide-react"; 
import { Check, X, Zap, Layers, ShieldCheck, BarChart3, Search, PenTool, Code, Rocket, ArrowRight, Star, ChevronRight, Cpu, Globe, Smartphone, Database, Layout, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion"; 

export default function ServicesPage() {
  const [showComparison, setShowComparison] = useState(false);
  
  // STATİK HİZMET VERİLERİ (Sanity'e sonra eklersin)
  const services = [
    {
      title: "High-End Web Development",
      description: "Sıradan şablonlar yok. Next.js 14 mimarisi üzerinde, SEO uyumlu, ışık hızında açılan ve Google Core Web Vitals standartlarını %100 karşılayan özel yazılımlar.",
      iconName: "Code"
    },
    {
      title: "UI/UX & İnteraktif Tasarım",
      description: "Kullanıcı deneyimini (UX) merkeze alan, Framer Motion ile zenginleştirilmiş mikro-animasyonlar ve 'Pixel-Perfect' arayüz tasarımları.",
      iconName: "Layout"
    },
    {
      title: "Headless CMS Entegrasyonu",
      description: "Sanity.io altyapısı sayesinde içeriğinizi kod bilgisi gerekmeden, sürükle-bırak kolaylığında ve tam özgürlükle yönetin.",
      iconName: "Database"
    },
    {
      title: "Mobil Uygulama (React Native)",
      description: "Tek kod tabanıyla hem iOS hem Android'de çalışan, native performansı sunan, ölçeklenebilir mobil uygulamalar geliştiriyoruz.",
      iconName: "Smartphone"
    },
    {
      title: "Marka & Kreatif Direktörlük",
      description: "Sadece logo değil; markanızın dijital dünyadaki ses tonunu, renk paletini ve duruşunu stratejik olarak kurguluyoruz.",
      iconName: "PenTool"
    },
    {
      title: "Growth & SEO Mühendisliği",
      description: "Sitenizi sadece yayına almıyoruz; teknik SEO optimizasyonları ve veri odaklı stratejilerle organik trafiğinizi artırıyoruz.",
      iconName: "BarChart3"
    }
  ];

  // TEKNOLOJİ ROZETLERİ
  const techStack = [
    { name: "Next.js 14", icon: Globe },
    { name: "React", icon: Code },
    { name: "Tailwind CSS", icon: Layers },
    { name: "Framer Motion", icon: Sparkles },
    { name: "Sanity CMS", icon: Database },
    { name: "Vercel", icon: Zap },
  ];

  // DETAYLI KARŞILAŞTIRMA TABLOSU VERİSİ
  const comparisonData = [
    {
      category: "TEKNİK ALTYAPI & PERFORMANS",
      items: [
        { name: "Yazılım Dili / Altyapı", startup: "Next.js 14 (Static)", kurumsal: "Next.js 14 (SSR)", enterprise: "Next.js 14 (Edge)" },
        { name: "Sunucu & Hosting", startup: "Vercel Standart", kurumsal: "Vercel Pro CDN", enterprise: "AWS / Vercel Enterprise" },
        { name: "Sayfa Açılış Hızı (Google)", startup: "90+ Puan", kurumsal: "95-100 Puan", enterprise: "100 Puan (Garanti)" },
        { name: "Siber Güvenlik (SSL/DDoS)", startup: "Standart Koruma", kurumsal: "Gelişmiş Firewall", enterprise: "Enterprise Shield" },
      ]
    },
    {
      category: "TASARIM & DENEYİM (UI/UX)",
      items: [
        { name: "Tasarım Yaklaşımı", startup: "Modern UI Kit", kurumsal: "Özel Tasarım Sistem", enterprise: "Bespoke (Terzi İşi)" },
        { name: "Mobil Uyumluluk (Responsive)", startup: "Tam Uyumlu", kurumsal: "Cihaza Özel UX", enterprise: "Mobile-First Mimari" },
        { name: "Karanlık Mod (Dark Mode)", startup: "-", kurumsal: "Opsiyonel", enterprise: "Otomatik / Seçmeli" },
        { name: "Animasyonlar", startup: "Temel Geçişler", kurumsal: "Framer Motion", enterprise: "WebGL / 3D Sahne" },
      ]
    },
    {
      category: "YÖNETİM PANELİ (CMS)",
      items: [
        { name: "İçerik Yönetim Sistemi", startup: "-", kurumsal: "Sanity Headless CMS", enterprise: "Sanity + Custom Dashboard" },
        { name: "Blog / Haber Modülü", startup: "-", kurumsal: "Var", enterprise: "Gelişmiş (Kategorili)" },
        { name: "Görsel Düzenleyici", startup: "-", kurumsal: "Sürükle-Bırak", enterprise: "Real-time Preview" },
      ]
    },
    {
      category: "PAZARLAMA & SEO",
      items: [
        { name: "SEO Altyapısı", startup: "Temel (Meta)", kurumsal: "Teknik SEO (Schema)", enterprise: "Full SEO Suite" },
        { name: "Google Entegrasyonları", startup: "Analytics", kurumsal: "GTM + Search Console", enterprise: "Dönüşüm Takibi API" },
        { name: "Çoklu Dil Desteği", startup: "-", kurumsal: "Opsiyonel (2 Dil)", enterprise: "Sınırsız (i18n)" },
      ]
    },
     {
      category: "DESTEK & SÜREÇ",
      items: [
        { name: "Teslim Süresi", startup: "3-5 İş Günü", kurumsal: "7-14 İş Günü", enterprise: "Proje Bazlı" },
        { name: "Teknik Destek", startup: "1 Ay (E-mail)", kurumsal: "6 Ay (Öncelikli)", enterprise: "1 Yıl (7/24 VIP)" },
        { name: "Eğitim", startup: "Dokümantasyon", kurumsal: "Online Toplantı", enterprise: "Yerinde / Ekip Eğitimi" },
      ]
    }
  ];

  // Animasyonlar
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-indigo-500/30 relative">
      
      {/* GLOBAL ARKA PLAN */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* 1. HERO ALANI */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" 
          />
          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                OCS CREATIVE STUDIO
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                Dijital Mükemmelliği <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient bg-300%">
                  Sanatla Kodluyoruz.
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light">
                Standart şablonları unutun. İşletmeniz için özel olarak tasarlanmış, 
                <span className="text-white font-medium"> yüksek performanslı</span>, 
                <span className="text-white font-medium"> güvenli</span> ve 
                <span className="text-white font-medium"> ölçeklenebilir</span> dijital deneyimler inşa ediyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. HİZMETLER ALANI */}
        <section className="py-16 px-6 relative">
          <div className="max-w-7xl mx-auto">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                className="mb-16 md:text-center max-w-4xl mx-auto"
              >
                  <h2 className="text-3xl font-bold mb-4">Uzmanlık Alanlarımız</h2>
                  <p className="text-gray-400 text-lg mb-8">
                    Teknolojiyi estetikle birleştiriyor, markanız için sürdürülebilir dijital varlıklar üretiyoruz.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {techStack.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white hover:border-indigo-500/50 transition-all cursor-default group backdrop-blur-md">
                        <tech.icon size={14} className="text-indigo-400 group-hover:text-indigo-300" />
                        {tech.name}
                      </div>
                    ))}
                  </div>
              </motion.div>
              
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
              >
                  {services.map((service, index) => {
                      const IconComponent = LucideIcons[service.iconName] || LucideIcons.Zap;
                      return (
                          <motion.div 
                            key={index} 
                            variants={fadeInUp}
                            className="group relative flex flex-col h-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 hover:bg-[#111] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
                          >
                              <div className="w-14 h-14 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0 shadow-lg">
                                  <IconComponent size={28} />
                              </div>
                              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                              <div className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                  {service.description}
                              </div>
                              <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sm font-semibold text-indigo-400 group-hover:text-white transition-colors cursor-pointer">
                                  Teknik Detaylar <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                              </div>
                          </motion.div>
                      )
                  })}
              </motion.div>
          </div>
        </section>

        {/* 3. SÜREÇLER */}
        <section className="py-24 px-6 bg-[#080808] border-y border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                  <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase">Metodoloji</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2">Geliştirme Süreci</h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { id:1, title:"Stratejik Analiz", desc:"Hedef kitlenizi ve rakiplerinizi analiz ederek dijital yol haritası çıkarıyoruz.", icon: Search, color:"text-blue-400", bg:"bg-blue-500/10", border:"hover:border-blue-500/30" },
                    { id:2, title:"UI/UX Mimari", desc:"Wireframe ve prototiplerle kullanıcı deneyimini kusursuzlaştırıyoruz.", icon: Layout, color:"text-purple-400", bg:"bg-purple-500/10", border:"hover:border-purple-500/30" },
                    { id:3, title:"Full-Stack Kodlama", desc:"Clean Code prensipleriyle güvenli, hızlı ve ölçeklenebilir geliştirme.", icon: Code, color:"text-pink-400", bg:"bg-pink-500/10", border:"hover:border-pink-500/30" },
                    { id:4, title:"Test & Deploy", desc:"Çapraz tarayıcı testleri, hız optimizasyonu ve global CDN yayını.", icon: Rocket, color:"text-green-400", bg:"bg-green-500/10", border:"hover:border-green-500/30" }
                  ].map((item, i) => (
                     <motion.div key={item.id} variants={fadeInUp} className={`relative p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 ${item.border} transition-all duration-300 hover:-translate-y-2 group h-full shadow-lg`}>
                        <div className={`absolute -top-4 -left-4 w-10 h-10 bg-[#151515] border border-white/10 rounded-full flex items-center justify-center font-bold ${item.color} shadow-lg z-10`}>{item.id}</div>
                        <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center ${item.color} mb-4`}>
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                     </motion.div>
                  ))}
              </motion.div>
          </div>
        </section>

        {/* 4. FİYAT PAKETLERİ */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white mb-4">Yatırım Planları</h2>
                  <p className="text-gray-400">Şeffaf fiyatlandırma, sürpriz maliyet yok.</p>
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
                   {/* STARTUP */}
                   <motion.div variants={fadeInUp} className="relative p-8 rounded-3xl bg-[#0f0f0f] border border-orange-700/30 hover:border-orange-500/50 transition duration-300 flex flex-col h-full group hover:bg-[#151515]">
                      <div className="mb-4">
                          <div className="w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition">
                              <Zap size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-white">STARTUP</h3>
                      </div>
                      <div className="text-4xl font-bold text-white mb-6">₺7.500<span className="text-sm font-normal text-gray-500">/proje</span></div>
                      <div className="h-px w-full bg-white/10 mb-6"></div>
                      <ul className="space-y-4 mb-8 flex-1">
                          <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-orange-500"/> Single Page Application (SPA)</li>
                          <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-orange-500"/> %100 Mobil Uyum (Responsive)</li>
                          <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-orange-500"/> Temel SEO Yapılandırması</li>
                      </ul>
                      <button onClick={() => setShowComparison(true)} className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition border border-white/10">Detayları İncele</button>
                  </motion.div>

                  {/* KURUMSAL */}
                  <motion.div variants={fadeInUp} className="relative p-8 rounded-3xl bg-[#121212] border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 transform md:-translate-y-6 flex flex-col h-full z-10">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg flex items-center gap-2">
                          <Star size={12} fill="white" /> Popüler Seçim
                      </div>
                      <div className="mb-4">
                          <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-4">
                              <Layers size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-white">KURUMSAL</h3>
                      </div>
                      <div className="text-4xl font-bold text-white mb-6">₺15.000<span className="text-sm font-normal text-gray-500">/proje</span></div>
                      <div className="h-px w-full bg-indigo-500/30 mb-6"></div>
                      <ul className="space-y-4 mb-8 flex-1">
                          <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-indigo-400"/> <strong>5-8 Özel Sayfa Tasarımı</strong></li>
                          <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-indigo-400"/> <strong>Sanity CMS Yönetim Paneli</strong></li>
                          <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-indigo-400"/> Blog / Haberler Modülü</li>
                      </ul>
                      <button className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold transition shadow-lg shadow-indigo-500/25 mb-4">Projeyi Başlat</button>
                      <button onClick={() => setShowComparison(true)} className="text-xs text-center text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-4">Teknik Karşılaştırma Tablosu</button>
                  </motion.div>

                  {/* ENTERPRISE */}
                  <motion.div variants={fadeInUp} className="relative p-8 rounded-3xl bg-[#0f0f0f] border border-yellow-600/30 hover:border-yellow-500/50 transition duration-300 flex flex-col h-full group hover:bg-[#151515]">
                       <div className="mb-4">
                          <div className="w-12 h-12 bg-yellow-900/20 rounded-lg flex items-center justify-center text-yellow-500 mb-4 group-hover:scale-110 transition">
                              <ShieldCheck size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-white">ENTERPRISE</h3>
                      </div>
                      <div className="text-4xl font-bold text-white mb-6">Teklif Al</div>
                      <div className="h-px w-full bg-white/10 mb-6"></div>
                      <ul className="space-y-4 mb-8 flex-1">
                          <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-yellow-500"/> Sınırsız Sayfa Yapısı</li>
                          <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-yellow-500"/> Çoklu Dil (i18n) Altyapısı</li>
                          <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-yellow-500"/> Özel WebGL Animasyonlar</li>
                      </ul>
                      <button onClick={() => setShowComparison(true)} className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition border border-white/10">Detayları İncele</button>
                  </motion.div>
              </motion.div>
               {/* Tablo Butonu */}
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
                  <button onClick={() => setShowComparison(true)} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition text-white font-semibold group">
                      <BarChart3 size={18} className="text-indigo-400"/> Tüm Özellikleri Kıyasla <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
              </motion.div>
          </div>
        </section>

        {/* 5. MODAL - DETAYLI KARŞILAŞTIRMA TABLOSU */}
        {showComparison && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-2 md:p-4">
              <motion.div initial={{opacity:0}} animate={{opacity:1}} className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowComparison(false)}></motion.div>
              <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} className="relative w-full max-w-6xl bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden h-[90vh] flex flex-col">
                  
                  <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#161616]">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">Paket Karşılaştırması</h3>
                        <p className="text-sm text-gray-400">Teknik özellikler ve kapsam detayları.</p>
                      </div>
                      <button onClick={() => setShowComparison(false)} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition hover:rotate-90"><X size={24} className="text-gray-400" /></button>
                  </div>

                  <div className="overflow-auto flex-1 p-0 md:p-6">
                      <table className="w-full text-left border-collapse">
                          <thead className="sticky top-0 bg-[#111] z-10 shadow-lg border-b border-white/10">
                              <tr>
                                  <th className="p-4 text-gray-400 font-medium w-1/4 bg-[#111]">Özellikler</th>
                                  <th className="p-4 text-orange-400 font-bold text-center w-1/4 bg-[#111]">STARTUP</th>
                                  <th className="p-4 text-indigo-400 font-bold text-center w-1/4 bg-[#1a1a1a] border-x border-indigo-500/20 relative">KURUMSAL</th>
                                  <th className="p-4 text-yellow-400 font-bold text-center w-1/4 bg-[#111]">ENTERPRISE</th>
                              </tr>
                          </thead>
                          <tbody className="text-sm">
                              {comparisonData.map((category, index) => (
                                <React.Fragment key={index}>
                                  <tr className="bg-white/[0.03] border-y border-white/5">
                                    <td colSpan="4" className="p-3 text-xs font-bold text-gray-300 uppercase tracking-widest pl-6">
                                      {category.category}
                                    </td>
                                  </tr>
                                  {category.items.map((item, i) => (
                                    <tr key={i} className="hover:bg-white/[0.02] border-b border-white/5 transition-colors">
                                      <td className="p-4 text-gray-400 pl-6">{item.name}</td>
                                      <td className="p-4 text-center text-white font-medium">{item.startup}</td>
                                      <td className="p-4 text-center text-white font-medium bg-white/[0.02] border-x border-white/5">{item.kurumsal}</td>
                                      <td className="p-4 text-center text-white font-medium">{item.enterprise}</td>
                                    </tr>
                                  ))}
                                </React.Fragment>
                              ))}
                          </tbody>
                      </table>
                  </div>

                  <div className="p-6 border-t border-white/10 bg-[#161616] flex justify-end gap-4">
                    <span className="text-xs text-gray-500 self-center hidden md:block">* Fiyatlara KDV dahil değildir. Hosting ilk yıl hediyedir.</span>
                    <button onClick={() => setShowComparison(false)} className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition">Kapat</button>
                  </div>
              </motion.div>
          </div>
        )}

        {/* 6. SSS */}
        <section className="py-20 px-6 max-w-4xl mx-auto border-t border-white/5 mt-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-bold text-center mb-10">Sıkça Sorulan Sorular</motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-4">
              <motion.details variants={fadeInUp} className="group bg-[#111] border border-white/5 p-6 rounded-2xl cursor-pointer hover:bg-[#161616] transition">
                  <summary className="flex justify-between items-center font-semibold text-lg list-none">Ödeme süreci nasıl işliyor?<span className="transition group-open:rotate-180"><Check className="rotate-45" /></span></summary>
                  <p className="text-gray-400 mt-4 leading-relaxed">Proje başlangıcında %40 avans alıyoruz. Kalan ödemeyi proje tesliminde ve onayınızdan sonra talep ediyoruz.</p>
              </motion.details>
               <motion.details variants={fadeInUp} className="group bg-[#111] border border-white/5 p-6 rounded-2xl cursor-pointer hover:bg-[#161616] transition">
                  <summary className="flex justify-between items-center font-semibold text-lg list-none">Teslim süresi ne kadar?<span className="transition group-open:rotate-180"><Check className="rotate-45" /></span></summary>
                  <p className="text-gray-400 mt-4 leading-relaxed">Startup paketleri ortalama 3-5 iş günü, Kurumsal paketler ise kapsamına göre 7-14 iş günü sürmektedir.</p>
              </motion.details>
              <motion.details variants={fadeInUp} className="group bg-[#111] border border-white/5 p-6 rounded-2xl cursor-pointer hover:bg-[#161616] transition">
                  <summary className="flex justify-between items-center font-semibold text-lg list-none">Hosting ve Domain dahil mi?<span className="transition group-open:rotate-180"><Check className="rotate-45" /></span></summary>
                  <p className="text-gray-400 mt-4 leading-relaxed">İlk yıl için yüksek hızlı hosting hizmetini hediye ediyoruz. Domain (alan adı) tescili müşteriye aittir.</p>
              </motion.details>
          </motion.div>
        </section>

        <Cta />
        <Footer />
      </div>
    </main>
  );
}