"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { Code2, Zap, Rocket, Layout, Database, Smartphone } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-indigo-500/30">
      <Navbar />

      {/* 1. HERO BÖLÜMÜ: DAHA SADE VE ETKİLEYİCİ */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        
        {/* Arka Plan Efektleri (Glow) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Merhaba, ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Yavuz.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Karmaşık ajans süreçlerini unutun. <br/>
            Modern web teknolojileriyle, markanız için <span className="text-white font-semibold">hızlı, estetik ve sonuç odaklı</span> dijital deneyimler tasarlıyorum.
          </p>
        </div>
      </section>

      {/* 2. İSTATİSTİKLER (GÜVEN VERMEK İÇİN) */}
      <section className="py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <h3 className="text-4xl font-bold text-white mb-1">5+</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Yıl Deneyim</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-white mb-1">40+</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Tamamlanan Proje</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-white mb-1">%100</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Müşteri Memnuniyeti</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-white mb-1">7/24</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Destek & İletişim</p>
            </div>
        </div>
      </section>

      {/* 3. PROFİL VE HİKAYE (GLASSMORPHISM KART) */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol: Görsel Alanı */}
          <div className="relative group">
            {/* Resim Arkasındaki Çerçeve Efekti */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] lg:aspect-square">
                {/* 🔥 RESİM BURAYA */}
                <Image 
                  src="/team-1.jpg" 
                  alt="Yavuz Şahin" 
                  fill 
                  className="object-cover hover:scale-105 transition duration-700" 
                />
            </div>
          </div>

          {/* Sağ: Metin Alanı */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Code2 size={14} /> Geliştirici & Tasarımcı
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Kod yazmak sadece işim değil, <br/> 
              <span className="text-gray-400">en büyük tutkum.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Büyük ajanslarda kaybolan projelerden sıkıldınız mı? Ben de sıkıldım. Bu yüzden "Butik Freelance" modelini benimsiyorum. Sizinle bir müşteri numarasından öte, bir iş ortağı gibi çalışıyorum.
              </p>
              <p>
                Sadece "çalışan" bir site değil; yaşayan, Google'da bulunan ve müşterilerinize güven veren platformlar inşa ediyorum. Tasarımdan kodlamaya, sunucu yönetiminden yayına almaya kadar tüm süreç bende.
              </p>
            </div>

            {/* Yetenekler / Tech Stack */}
            <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-white mb-4 font-semibold">Kullandığım Teknolojiler</p>
                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition cursor-default">Next.js 14</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition cursor-default">React</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition cursor-default">Tailwind CSS</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition cursor-default">Node.js</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition cursor-default">Figma</span>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HİZMETLER / NE YAPIYORUM? */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Neler Yapıyorum?</h2>
                <p className="text-gray-400">Sadece kod değil, tam kapsamlı dijital çözümler.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Kart 1 */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition hover:-translate-y-1">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                        <Layout size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Web Arayüz Tasarımı</h3>
                    <p className="text-gray-400 text-sm">Kullanıcı deneyimini (UX) ön planda tutan, modern ve mobil uyumlu tasarımlar.</p>
                </div>

                {/* Kart 2 */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition hover:-translate-y-1">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6">
                        <Database size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Full-Stack Geliştirme</h3>
                    <p className="text-gray-400 text-sm">Hızlı, güvenli ve ölçeklenebilir altyapılar. Admin panelleri ve API entegrasyonları.</p>
                </div>

                {/* Kart 3 */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition hover:-translate-y-1">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center text-pink-400 mb-6">
                        <Smartphone size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Responsive & SEO</h3>
                    <p className="text-gray-400 text-sm">Tüm cihazlarda kusursuz görünen ve Google'da üst sıraları hedefleyen kod yapısı.</p>
                </div>
            </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}