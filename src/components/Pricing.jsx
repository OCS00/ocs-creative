"use client";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "LAUNCH",
    desc: "Dijital dünyaya ilk adımını atanlar için hızlı ve etkili bir başlangıç.",
    price: "Başlangıç", // İstersen buraya rakam (örn: 15.000₺) yazabilirsin
    features: [
      "Tek Sayfa (Landing Page) Tasarım",
      "Mobil ve Tablet Uyumlu (Responsive)",
      "Temel SEO Ayarları",
      "İletişim Formu Entegrasyonu",
      "Hızlı Teslimat (3-5 Gün)",
      "1 Ay Ücretsiz Teknik Destek"
    ],
    cta: "Teklif Al",
    popular: false,
    gradient: "from-gray-500 to-gray-700"
  },
  {
    name: "GROWTH",
    desc: "Markasını büyütmek ve içeriğini yönetmek isteyen profesyoneller için.",
    price: "Popüler",
    features: [
      "Çok Sayfalı Kurumsal Web Sitesi",
      "Sanity CMS (Yönetim Paneli)",
      "Blog / Haberler Altyapısı",
      "Gelişmiş SEO Optimizasyonu",
      "Google Analytics Kurulumu",
      "Sosyal Medya Entegrasyonu",
      "3 Ay Ücretsiz Bakım"
    ],
    cta: "Hemen Başla",
    popular: true, // Bu kartı öne çıkarır
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    name: "ENTERPRISE",
    desc: "Sınırları zorlayan, tamamen özel tasarım ve yazılım çözümleri.",
    price: "Özel Teklif",
    features: [
      "Tamamen Özel Tasarım (UI/UX)",
      "E-Ticaret / Ödeme Sistemleri",
      "Özel Web Uygulaması (Dashboard)",
      "Çoklu Dil Desteği (TR/EN)",
      "Veritabanı ve API Entegrasyonları",
      "Öncelikli 7/24 VIP Destek",
      "Performans Garantisi"
    ],
    cta: "İletişime Geç",
    popular: false,
    gradient: "from-blue-500 to-cyan-500"
  }
];

export default function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden bg-black" id="paketler">
      {/* Arka Plan Efekti */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projenize Uygun Çözümler
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            İster yeni başlıyor olun, ister global bir marka; hedeflerinize uygun bir planımız mutlaka var.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border ${
                plan.popular 
                  ? "border-indigo-500/50 bg-white/[0.03]" 
                  : "border-white/10 bg-white/[0.01]"
              } hover:border-white/20 transition-all duration-300 group`}
            >
              {/* Popüler Etiketi */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-xs font-bold tracking-widest text-white shadow-lg shadow-purple-500/30">
                  EN ÇOK TERCİH EDİLEN
                </div>
              )}

              {/* Başlık Bölümü */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-400 tracking-widest mb-2 uppercase">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed min-h-[50px]">
                  {plan.desc}
                </p>
              </div>

              {/* Özellikler Listesi */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className={`mt-0.5 p-1 rounded-full bg-white/5 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Buton */}
              <Link href="/iletisim" className="w-full">
                <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                }`}>
                  {plan.cta}
                </button>
              </Link>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}