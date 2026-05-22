/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Smartphone, Search, Check, X, ArrowRight,
  Rocket, ChevronDown, Layers, Code2, Cpu,
  CheckCircle2, Sparkles, Gem, MessageCircle,
  Clock, Palette, Terminal, Zap
} from "lucide-react";
import { siteConfig } from "@/config/site";

const PACKAGES = [
  {
    id: "landing",
    name: "Landing Page",
    tagline: "Hızlı & Etkili Başlangıç",
    desc: "Tek ürün, etkinlik veya portfolyo için yüksek dönüşüm odaklı, nokta atışı tasarım.",
    startingPrice: "₺12.500",
    priceNote: "başlangıç fiyatı",
    deliveryTime: "1 Hafta",
    cta: "Hemen Başlayalım",
    features: [
      "Tek Sayfa (One-Page) Tasarım",
      "Next.js ile Ultra Hızlı",
      "Temel SEO Kurulumu",
      "İletişim Formu Entegrasyonu",
      "Mobil Uyumlu (Responsive)",
    ],
    notIncluded: ["CMS (Yönetim Paneli)", "Blog Altyapısı", "Çoklu Dil Desteği"],
    icon: Rocket,
    popular: false,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "corporate",
    name: "Kurumsal Web",
    tagline: "Prestij ve Otorite",
    desc: "Şirketinizin dijitaldeki genel merkezi. Yönetim panelli, bloglu ve tam kapsamlı yapı.",
    startingPrice: "₺27.500",
    priceNote: "başlangıç fiyatı",
    deliveryTime: "2–4 Hafta",
    cta: "Projeyi Konuşalım",
    features: [
      "5–10 Alt Sayfa Tasarımı",
      "Gelişmiş Sanity CMS Paneli",
      "Blog & Haberler Modülü",
      "Google Analytics & Console",
      "Çoklu Dil Altyapısı (TR/EN)",
      "Kurumsal E-Posta Kurulumu",
      "Google Haritalar Kaydı",
    ],
    notIncluded: ["Özel Web Uygulaması (SaaS)"],
    icon: Gem,
    popular: true,
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: "custom",
    name: "Özel Yazılım / SaaS",
    tagline: "Limitleri Kaldırın",
    desc: "Standartların ötesinde. İş akışınıza özel geliştirilen web tabanlı yazılım çözümleri.",
    startingPrice: "Özel Fiyat",
    priceNote: "projeye özel fiyatlandırma",
    deliveryTime: "Planlama Sonrası",
    cta: "Ekiple Tanışın",
    features: [
      "Sınırsız Sayfa & Özellik",
      "Özel Veritabanı Mimarisi",
      "Kullanıcı Giriş/Üyelik Sistemi",
      "API Entegrasyonları (CRM, ERP)",
      "Gelişmiş Admin Dashboard",
      "Yüksek Güvenlik (WAF)",
      "Özel Sunucu Optimizasyonu",
    ],
    notIncluded: [],
    icon: Cpu,
    popular: false,
    gradient: "from-emerald-500/20 to-teal-500/20",
  }
];

const SERVICES_DETAILED = [
  {
    title: "Web Mimarisi",
    desc: "Hazır şablon yok. Next.js ve React ile piksel hassasiyetinde, Google'ın aşık olduğu kodlar.",
    icon: Code2,
    color: "text-blue-400"
  },
  {
    title: "Mobil Uygulama",
    desc: "React Native ile hem iOS hem Android mağazalarında çalışan, native performanslı uygulamalar.",
    icon: Smartphone,
    color: "text-purple-400"
  },
  {
    title: "UI/UX Tasarım",
    desc: "Kullanıcı alışkanlıklarını analiz ediyor, sadece şık değil, satışı artıran arayüzler tasarlıyoruz.",
    icon: Layers,
    color: "text-pink-400"
  },
  {
    title: "SEO & Growth",
    desc: "Siteniz yayına girdiği an Google'da yarışa 1-0 önde başlar. Teknik SEO standarttır.",
    icon: Search,
    color: "text-emerald-400"
  }
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Keşif Toplantısı",
    desc: "Projenizi, hedeflerinizi ve rekabet ortamınızı anlıyoruz. Birlikte net bir yol haritası çiziyoruz.",
    icon: Search,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    number: "02",
    title: "Stratejik Tasarım",
    desc: "Wireframe ve interaktif prototiplerle vizyonunuzu görselleştiriyoruz. Onaylamadan koda geçmiyoruz.",
    icon: Palette,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    number: "03",
    title: "Geliştirme",
    desc: "Next.js ile sağlam, hızlı ve ölçeklenebilir yapıyı piksel hassasiyetinde kodluyor, test ediyoruz.",
    icon: Terminal,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    number: "04",
    title: "Lansman & Destek",
    desc: "Canlıya alıyor, SEO kurulumunu tamamlıyor ve ilk yıl teknik destek için yanınızda kalıyoruz.",
    icon: Zap,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

const FAQS = [
  {
    q: "Neden Wordpress değil de Özel Yazılım (Next.js)?",
    a: "Wordpress hantaldır, güvensizdir ve sürekli bakım ister. Next.js ise Google, Netflix ve Nike'ın kullandığı teknolojidir. 3 kat daha hızlıdır, çok daha güvenlidir ve SEO başarısı çok daha yüksektir."
  },
  {
    q: "Yönetim paneli olacak mı? İçeriği değiştirebilir miyim?",
    a: "Kesinlikle. Sanity CMS entegrasyonu sayesinde, kod bilmenize gerek kalmadan metinleri, görselleri, blog yazılarını ve projelerinizi kolayca güncelleyebilirsiniz."
  },
  {
    q: "Ödeme süreci nasıl işliyor?",
    a: "Proje başlangıcında %50 ön ödeme alıyoruz. Tasarım onayı ve demo sunumundan sonra, proje tesliminde kalan %50'yi tahsil ediyoruz. Her şey şeffaf ve sözleşmeli ilerler."
  },
  {
    q: "Hosting ve Domain desteği veriyor musunuz?",
    a: "Evet. Projelerinizi dünyanın en hızlı sunucu altyapısı olan Vercel üzerinde barındırıyoruz. İlk yıl teknik bakım ve sunucu desteği bizden."
  }
];

function SpotlightCard({ children, className = "" }) {
  const divRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] group ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const brandName = siteConfig?.name || "OCS Creative";
  const whatsappNumber = siteConfig?.contact?.phoneCall?.replace("+", "") || "";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.")}`;

  return (
    <main className="bg-[#020202] min-h-screen text-white selection:bg-indigo-500/30 overflow-x-hidden">

      <section className="relative pt-48 pb-32 px-6 overflow-hidden flex flex-col items-center text-center min-h-[80vh] justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none opacity-50 animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-indigo-300 mb-8 backdrop-blur-xl hover:bg-white/10 transition-colors cursor-default"
          >
            <Sparkles size={14} className="text-yellow-400" />
            <span>DİJİTAL MİMARİ & YAZILIM</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            Sadece Site Değil, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-300 to-gray-500">
              Geleceği Kodluyoruz.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Şablonları unutun. Markanız için terzi usulü, Google'ın sevdiği ve rakiplerinizin kıskanacağı dijital ekosistemler inşa ediyoruz.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#paketler"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Paketleri İncele <ArrowRight size={18}/>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-3"
            >
              <MessageCircle size={16} />
              Hemen Yazın
            </a>
          </motion.div>
          <p className="text-gray-600 text-xs mt-5">İlk keşif toplantısı ücretsizdir.</p>
        </motion.div>
      </section>

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DETAILED.map((service, i) => (
              <SpotlightCard key={i} className="p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                  <service.icon size={28} className={service.color} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4 inline-block">SÜREÇ</span>
            <h2 className="text-3xl md:text-5xl font-bold">Nasıl Çalışıyoruz?</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Teklif aldığınız andan lansmanınıza kadar her adımda tam şeffaflık.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center mb-6`}>
                  <step.icon size={24} className={step.color} />
                </div>
                <span className="text-xs font-bold text-gray-700 tracking-widest mb-3 block">{step.number}</span>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="paketler" className="py-32 px-6 bg-[#020202] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-gradient-to-r from-indigo-900/10 to-purple-900/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4 inline-block">PAKETLER</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Size Uygun Modeli Seçin</h2>
            <p className="text-gray-400 text-lg">Şeffaf fiyatlandırma, sürpriz faturalar yok.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-[1px] rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${pkg.popular ? 'lg:-mt-8 lg:mb-8 z-10' : ''}`}
              >
                <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-b ${pkg.popular ? 'from-indigo-500 via-purple-500 to-indigo-500' : 'from-white/10 to-white/5'}`}></div>

                <div className="relative h-full bg-[#0a0a0a] rounded-[2.4rem] p-8 md:p-10 flex flex-col">
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-white/20 whitespace-nowrap">
                      En Çok Tercih Edilen
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center border border-white/10`}>
                      <pkg.icon size={32} className="text-white" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">
                      <Clock size={11} />
                      <span>{pkg.deliveryTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-xs font-bold text-indigo-400 mb-5 tracking-widest uppercase">{pkg.tagline}</p>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl font-black text-white">{pkg.startingPrice}</span>
                    <p className="text-xs text-gray-600 mt-1">{pkg.priceNote}</p>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{pkg.desc}</p>

                  <div className="space-y-4 mb-10 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                        <div className="mt-0.5 p-1 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0">
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {pkg.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <div className="mt-0.5 p-1 rounded-full bg-gray-800/50 text-gray-700 shrink-0">
                          <X size={12} strokeWidth={4} />
                        </div>
                        <span className="line-through decoration-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/iletisim"
                    className={`block w-full py-5 rounded-2xl text-center font-bold transition-all text-base ${
                      pkg.popular
                        ? "bg-white text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                    }`}
                  >
                    {pkg.cta} →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-10">
            Fiyatlar KDV hariçtir. Proje kapsamına göre özel fiyatlandırma yapılabilir.
          </p>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Farkımız Ortada.</h2>
            <p className="text-gray-400">Geleneksel ajansların hantal yapısına karşı, modern ve çevik yaklaşım.</p>
          </div>

          <div className="rounded-3xl border border-white/10 overflow-hidden bg-[#0a0a0a]">
            <div className="grid grid-cols-3 bg-white/5 p-6 border-b border-white/10 text-xs md:text-sm font-bold uppercase tracking-widest">
              <div className="col-span-1 text-gray-400">KRİTERLER</div>
              <div className="col-span-1 text-center text-red-500/70">DİĞER AJANSLAR</div>
              <div className="col-span-1 text-center text-indigo-400">{brandName.toUpperCase()}</div>
            </div>

            {[
              { title: "İletişim", bad: "Asistanlar & Temsilciler", good: "Direkt Kurucu & Geliştirici" },
              { title: "Teknoloji", bad: "WordPress (Hantal)", good: "Next.js (Ultra Hızlı)" },
              { title: "Süreç", bad: "Bitmeyen Toplantılar", good: "Çevik & Sonuç Odaklı" },
              { title: "Güvenlik", bad: "Eklenti Bağımlı", good: "Kurumsal Düzeyde Koruma" },
              { title: "Maliyet", bad: "Ofis Giderleri Eklenir", good: "Sadece Kaliteyi Ödersiniz" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors items-center">
                <div className="col-span-1 font-bold text-white text-sm md:text-base">{row.title}</div>
                <div className="col-span-1 text-center border-r border-white/5 px-2">
                  <span className="inline-flex items-center justify-center gap-1.5 text-red-500/60 text-xs md:text-sm">
                    <X size={13} className="shrink-0" />
                    <span>{row.bad}</span>
                  </span>
                </div>
                <div className="col-span-1 text-center px-2">
                  <span className="inline-flex items-center justify-center gap-1.5 text-white font-medium text-xs md:text-sm">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                    <span>{row.good}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Aklınızdaki Sorular</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-white/10 rounded-2xl bg-[#0a0a0a] overflow-hidden group hover:border-indigo-500/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="text-lg font-bold text-white pr-4 group-hover:text-indigo-400 transition-colors">{faq.q}</span>
                  <ChevronDown className={`text-gray-500 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180 text-white' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 text-sm md:text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
