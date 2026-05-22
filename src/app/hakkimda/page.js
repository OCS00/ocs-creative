/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Heart, Target, Globe, Sparkles, Anchor, BrainCircuit, Award, ChevronDown, Gem, Fingerprint } from "lucide-react";
import { siteConfig } from "@/config/site";

const STATS = [
  
   { value: "12", label: "Farklı Sektör" },
   { value: "%99", label: "Müşteri Memnuniyeti" },
];

const VALUES = [
  {
    title: "Yaratıcı Strateji",
    desc: "Tasarım sadece süsleme değil, problem çözüyoruz. Her projenin temelinde, pazar verilerine ve kullanıcı davranışlarına dayanan derin bir strateji yatar.",
    icon: BrainCircuit,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/20"
  },
  {
    title: "Butik Yaklaşım",
    desc: "Fabrikasyon iş yok. Her marka için sıfırdan, el işçiliği titizliğinde dijital deneyimler.",
    icon: Anchor,
    colSpan: "md:col-span-1",
    bg: "bg-pink-900/10 border-pink-500/20"
  },
  {
    title: "Global Standart",
    desc: "Lokasyon İstanbul, vizyon Dünya. Silikon Vadisi standartlarında kod, Avrupa estetiğinde tasarım.",
    icon: Globe,
    colSpan: "md:col-span-1",
    bg: "bg-blue-900/10 border-blue-500/20"
  },
  {
    title: "Pixel-Perfect Takıntısı",
    desc: "1 piksellik kayma bile kabul edilemez. Tasarımda ve kodlamada obsesif derecede titiziz. Mükemmellik, detaylarda gizlidir.",
    icon: Target,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border-emerald-500/20"
  }
];

const FAQS = [
  {
    q: `Neden büyük bir ajans yerine ${siteConfig.name}?`,
    a: `Büyük ajanslarda projeniz stajyerlere devredilebilir veya iletişim kopuklukları yaşanabilir. ${siteConfig.name.split(" ")[0]}'de ise doğrudan 'mimar' ile çalışırsınız. Aracı yok, kulaktan kulağa değişen briefler yok. Vizyonunuz, kayıpsız bir şekilde ve çok daha hızlı hayata geçer.`
  },
  {
    q: "Teknoloji olarak ne kullanıyorsunuz?",
    a: "Sektörün en ileri teknolojileri olan Next.js, React, Tailwind CSS ve Sanity.io kullanıyoruz. Bu, sitenizin sadece bugün değil, 5 yıl sonra bile modern, hızlı ve güvenli kalmasını sağlar. Wordpress gibi hantal yapılar kullanmıyoruz."
  },
  {
    q: "Proje süreci nasıl işliyor?",
    a: "Tanışma ve analiz ile başlıyoruz. Ardından stratejik planlama ve tasarım (UI/UX) aşamasına geçiyoruz. Onayınızla birlikte kodlama (Development) başlar ve son olarak test/yayın süreçleriyle projenizi dünyaya açarız."
  },
  {
    q: "Proje bittikten sonra destek veriyor musunuz?",
    a: "Kesinlikle. Dijital dünya sürekli değişiyor. Projenizi teslim ettikten sonra da teknik bakım, güncelleme ve danışmanlık hizmetlerimizle yanınızdayız. Bizimle çalışmak tek seferlik bir iş değil, uzun vadeli bir ortaklıktır."
  }
];

const PROCESS = [
  { step: "01", title: "Keşif & Empati", desc: "Sizi dinliyor, markanızı ve hedeflerinizi kendi işimiz gibi benimsiyoruz." },
  { step: "02", title: "Stratejik Tasarım", desc: "Rakiplerden ayrışan, markanızın ruhunu yansıtan görsel dünyayı inşa ediyoruz." },
  { step: "03", title: "İleri Mühendislik", desc: "Next.js ve modern teknolojilerle, hatasız ve ultra hızlı sistemler kodluyoruz." },
  { step: "04", title: "Kusursuz Teslimat", desc: "Testler, optimizasyonlar ve lansman. Sadece bir site değil, bir deneyim teslim ediyoruz." },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-[#020202] min-h-screen text-white selection:bg-indigo-500/30">
      

      <section className="relative pt-48 pb-32 px-6 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-md">
             <Sparkles size={14} /> EST. 2024 — İSTANBUL
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.95]">
            Dijitalin <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-gray-500">
              Sanatçılarıyız.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            {siteConfig.name}, karmaşık teknolojileri markalar için anlaşılır, estetik ve kârlı sanat eserlerine dönüştüren, 
            <span className="text-white font-medium"> yeni nesil bir tasarım stüdyosudur.</span>
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 border-y border-white/5 bg-[#050505]">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Sol: Görsel/Soyut Alan */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative h-[600px] rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 group"
            >
               <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] group-hover:bg-purple-500/30 transition-all duration-1000"></div>
               <div className="absolute bottom-12 left-12 right-12">
                  <Fingerprint size={64} className="text-white/20 mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-2">Benzersiz Kod.</h3>
                  <p className="text-gray-400 font-mono text-sm border-l-2 border-indigo-500 pl-4">
                     Her satırı elle yazılmış, <br/> fabrikasyon olmayan dijital varlıklar.
                  </p>
               </div>
            </motion.div>

            {/* Sağ: Metin İçeriği */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                  Gürültünün İçinde <br/> <span className="text-indigo-500">Kendi Sesinizi Bulun.</span>
               </h2>
               <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-light">
                  <p>
                     Dijital dünya artık çok kalabalık. Herkes bağırıyor ama çok azı dinleniyor. 
                     Bizim varoluş amacımız, markanızı bu gürültünün içinden sıyırıp, en net, en estetik ve en etkileyici haliyle sahneye çıkarmak.
                  </p>
                  <p>
                     Sıradan "web sitesi yapanlar"dan farklıyız. Biz, markanızın dijitaldeki kıyafetini diken terzileriz. 
                     Hazır kalıplar kullanmıyoruz. Sizi dinliyor, kültürünüzü anlıyor ve size özel bir dijital kimlik inşa ediyoruz.
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4">
                     <div className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                        <Anchor size={16} className="text-indigo-400"/> Butik Hizmet
                     </div>
                     <div className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                        <Award size={16} className="text-indigo-400"/> Premium Kalite
                     </div>
                  </div>
               </div>

               {/* İstatistik Bandı */}
               <div className="grid grid-cols-2 gap-4 mt-16 pt-12 border-t border-white/10">
                  {STATS.map((stat, i) => (
                     <div key={i} className="text-center">
                        <div className="text-2xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                        <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-bold">{stat.label}</div>
                     </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      <section className="py-32 px-6 bg-[#020202]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-3xl mx-auto">
               <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4 inline-block">DNA'MIZ</span>
               <h2 className="text-4xl md:text-6xl font-bold mb-6">Bizi Farklı Kılan Nedir?</h2>
               <p className="text-gray-400 text-lg">Teknolojiye hakimiyetimiz ve tasarıma olan tutkumuzla, standartların ötesinde işler üretiyoruz.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {VALUES.map((item, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                     className={`${item.colSpan} ${item.bg} border relative overflow-hidden rounded-[2.5rem] p-10 group transition-all duration-500 hover:scale-[1.02]`}
                  >
                     <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 backdrop-blur-md border border-white/10 shadow-lg">
                           <item.icon size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-200/80 leading-relaxed font-light text-lg">
                           {item.desc}
                        </p>
                     </div>
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] group-hover:bg-white/10 transition-colors duration-500 -mr-20 -mt-20 pointer-events-none"></div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 px-6 border-y border-white/5 bg-[#050505] relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] -z-10"></div>
         
         <div className="max-w-5xl mx-auto text-center relative z-10">
            <Gem className="w-20 h-20 text-indigo-400 mx-auto mb-10 opacity-80" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white mb-8 tracking-tight">
               Sıradan Olanı Unutun. <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300">
                  Biz Dijitalde Mükemmelliği Kodluyoruz.
               </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
               Teknoloji bir araç, tasarım bir dildir. Biz bu ikisini kullanarak, 
               markanızın gelecekteki duruşunu bugünden inşa ediyoruz.
            </p>
         </div>
      </section>

      <section className="py-32 px-6 bg-[#020202]">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
               <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2 inline-block">ŞEFFAFLIK</span>
               <h2 className="text-4xl md:text-5xl font-bold">Aklınızdaki Sorular</h2>
            </div>

            <div className="space-y-4">
               {FAQS.map((faq, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                     className="border border-white/10 rounded-2xl bg-[#080808] overflow-hidden"
                  >
                     <button 
                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                        className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
                     >
                        <span className="text-lg font-bold text-white">{faq.q}</span>
                        <ChevronDown className={`text-indigo-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                     </button>
                     <AnimatePresence>
                        {openFaq === i && (
                           <motion.div 
                              initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                              className="overflow-hidden"
                           >
                              <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
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

      <section className="py-32 px-6 border-t border-white/5 bg-[#050505]">
         <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">
                     Başarıyı Nasıl <br/> Tasarlıyoruz?
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                     İlham perilerini beklemiyoruz. Başarıyı, disiplinli bir çalışma süreci ve modern araçlarla inşa ediyoruz. 
                     Her adımda şeffaf, her adımda mükemmeliyetçi.
                  </p>
                  <div className="flex flex-wrap gap-3">
                     {["Next.js", "React", "Sanity CMS", "Framer Motion", "Tailwind", "Figma"].map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-[#111] border border-white/10 rounded-lg text-sm text-gray-400 font-mono">
                           {tech}
                        </span>
                     ))}
                  </div>
               </div>

               <div className="space-y-8">
                  {PROCESS.map((p, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="text-4xl font-black text-white/10 group-hover:text-indigo-500 transition-colors duration-300">
                           {p.step}
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
                           <p className="text-gray-400 leading-relaxed">{p.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

    
    </main>
  );
}