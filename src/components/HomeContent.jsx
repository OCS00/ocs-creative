"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { ArrowRight, Code, Layout, Smartphone, TrendingUp, CheckCircle2, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Clients from "@/components/Clients";
import { siteConfig } from "@/config/site";

export default function HomeContent({ latestProjects }) {
  const brandName = siteConfig?.name || "OCS Creative";

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-indigo-500/30">

      {/* 1. HERO BÖLÜMÜ */}
      <Hero />

      {/* 2. LOGO ŞERİDİ */}
      <Clients />

      {/* 3. GÜVEN VE FELSEFE BÖLÜMÜ */}
      <section className="py-20 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4">
                NEDEN {brandName.toUpperCase()}?
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Sadece Kod Yazmıyoruz, <br/>
                <span className="text-gray-500">İşinizi Büyüten Stratejiler Geliştiriyoruz.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Dijital dünyada &ldquo;var olmak&rdquo; artık yeterli değil. Siteniz hızlı, güvenli ve ikna edici olmalı.
                Biz, bir freelancer gibi değil, sizin <strong>dijital departmanınız</strong> gibi çalışıyoruz.
                Veri odaklı tasarım ve son teknoloji yazılım altyapısıyla, ziyaretçilerinizi müşteriye dönüştürüyoruz.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "%100 SEO Uyumlu", desc: "Google standartlarına tam uygun semantik kod yapısı." },
                { title: "Ultra Hızlı", desc: "Next.js ile milisaniyeler içinde açılan sayfalar." },
                { title: "Mobil Öncelikli", desc: "Her cihazda kusursuz görünen responsive tasarım." },
                { title: "7/24 Destek", desc: "Proje bittiğinde değil, işiniz büyüdüğünde yanınızdayız." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <CheckCircle2 className="text-indigo-500 mb-3" size={24} />
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HİZMETLER (BENTO GRID) */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2 inline-block">HİZMETLERİMİZ</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Uçtan Uca Dijital Çözümler</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Modern markaların ihtiyacı olan tüm teknik ve kreatif yetenekleri tek bir çatı altında, en yüksek standartlarda sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 p-10 hover:border-indigo-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity">
                <Code size={150} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-3xl font-bold mb-4">Web Yazılım & Geliştirme</h3>
                <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
                  Hazır şablonlar kullanmıyoruz. <strong>Next.js 14, React ve Tailwind CSS</strong> teknolojileriyle;
                  Google&apos;ın sevdiği, siber saldırılara karşı korumalı ve rakiplerinizden 3 kat daha hızlı açılan özel web siteleri kodluyoruz.
                </p>
                <Link href="/hizmetler" className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-indigo-400 font-semibold group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all">
                  Teknolojilerimizi İncele <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
                <Layout size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">UI/UX Tasarım</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Kullanıcı psikolojisini (UX) ve estetiği (UI) birleştiriyoruz. Sadece güzel görünen değil,
                  ziyaretçiyi müşteriye dönüştüren akıllı arayüzler tasarlıyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 hover:border-pink-500/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 border border-pink-500/20">
                <Smartphone size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Mobil Uygulama</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong>React Native</strong> ile tek kod tabanından hem iOS hem Android mağazalarına uygun,
                  yüksek performanslı ve ölçeklenebilir native uygulamalar.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 p-10 hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity">
                <TrendingUp size={150} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-3xl font-bold mb-4">Growth & SEO Mühendisliği</h3>
                <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
                  Web sitenizi yaptık, peki ya sonra? Rakip analizi, teknik SEO optimizasyonu ve veri odaklı içerik stratejileriyle;
                  markanızı Google arama sonuçlarında zirveye taşıyor ve organik trafiğinizi artırıyoruz.
                </p>
                <Link href="/hizmetler" className="inline-flex items-center text-emerald-400 font-semibold group-hover:text-emerald-300">
                  SEO Stratejilerimiz <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MÜŞTERİ YORUMLARI */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2 inline-block">REFERANSLAR</span>
            <h2 className="text-3xl md:text-4xl font-bold">Müşterilerimiz Ne Diyor?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: `${brandName} ekibi, hayalimizdeki projeyi teknik mükemmellikle birleştirdi. Süreç boyunca şeffaf iletişimleri ve çözüm odaklı yaklaşımları bizi çok etkiledi.`, author: "Ahmet Yılmaz", role: "CEO, TechOne Global" },
              { text: "Sadece bir web sitesi değil, markamız için bir kimlik inşa ettiler. Tasarım detaylarına verdikleri önem ve hızları inanılmaz. Kesinlikle tavsiye ederim.", author: "Elif Demir", role: "Kurucu, Art Studio" },
              { text: "SEO ve hız konusunda vaat ettiklerinin fazlasını yaptılar. Site yayına girdikten sonra müşteri dönüşlerimizde %40 artış gözlemledik.", author: "Mehmet Kaya", role: "Pazarlama Müdürü, SoftSys" }
            ].map((item, i) => (
              <div key={i} className="bg-[#050505] p-8 rounded-3xl border border-white/5 relative">
                <Quote className="text-indigo-500 mb-6 opacity-50" size={32} />
                <p className="text-gray-300 mb-6 leading-relaxed italic">&ldquo;{item.text}&rdquo;</p>
                <div>
                  <h4 className="font-bold text-white">{item.author}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SON PROJELER (DİNAMİK) */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2 inline-block">PORTFOLYO</span>
              <h2 className="text-4xl md:text-5xl font-bold">Son Başarı Hikayeleri</h2>
              <p className="text-gray-400 mt-4 max-w-lg">
                Farklı sektörlerden markalar için geliştirdiğimiz, ödüllük tasarım ve yazılım projeleri.
              </p>
            </div>
            <Link href="/projeler" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all font-medium">
              Tüm Projeleri İncele
            </Link>
          </div>

          {latestProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {latestProjects.map((project, index) => (
                <Link
                  href={`/projeler/${project.slug?.current}`}
                  key={project._id}
                  className={`group cursor-pointer block ${index === 1 ? 'md:mt-24' : ''}`}
                >
                  <div className="relative h-[450px] rounded-3xl overflow-hidden mb-6 border border-white/10 bg-[#111]">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />
                    {project.mainImage ? (
                      <Image
                        src={urlForImage(project.mainImage).url()}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        alt={project.title}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-700">Görsel Yok</div>
                    )}
                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-xl">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-lg font-light">{project.category || "Genel"}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5">
              <p className="text-gray-400 mb-6 text-lg">Henüz vitrine eklenmiş proje bulunmuyor.</p>
              <Link href="/studio" className="text-indigo-400 underline hover:text-indigo-300">Yönetim paneline gidip ilk projeyi ekleyin.</Link>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
