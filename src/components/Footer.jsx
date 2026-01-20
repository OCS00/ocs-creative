"use client";
import React, { useState } from "react";
import Link from "next/link";
// ✅ 1. IMPORT EKLENDİ
import { usePathname } from "next/navigation"; 
import { siteConfig } from "@/config/site";
import { ArrowRight, MessageCircle, Loader2, Check } from "lucide-react"; 
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function Footer() {
  // ✅ 2. PATHNAME TANIMLANDI
  const pathname = usePathname();

  // ✅ 3. GİZLEME MANTIĞI: Eğer Sanity panelindeysek footer'ı gösterme
  if (pathname && pathname.startsWith('/studio')) {
    return null;
  }

  const currentYear = new Date().getFullYear();
  const socials = siteConfig?.socials || [];
  const fullBrandName = (siteConfig?.name || "OCS Creative") + ".";

  // --- WHATSAPP NUMARASI ---
  const whatsappNumber = "905050082034"; 
  const whatsappMessage = "Merhaba, projemiz hakkında görüşmek istiyorum."; 

  // --- FORM DURUM YÖNETİMİ ---
  const [emailStatus, setEmailStatus] = useState("idle"); // idle | loading | success | error

  // --- BÜLTEN KAYIT FONKSİYONU ---
  const handleQuickSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    
    if (!email) return;
    
    setEmailStatus("loading");
    
    try {
      // API'ye istek atıyoruz
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email, 
          subject: "Bülten Kaydı", 
          message: "Kullanıcı footer alanından bültene kaydolmak istiyor." 
        }),
      });

      if (res.ok) {
        setEmailStatus("success");
        e.target.reset(); // Input'u temizle
        // 3 saniye sonra butonu eski haline getir
        setTimeout(() => setEmailStatus("idle"), 3000);
      } else {
        setEmailStatus("error");
      }
    } catch (err) {
      setEmailStatus("error");
    }
  };

  // --- İÇERİK AYARLARI ---
  const footerLinks = {
    hizmetler: [
      { name: "Web Tasarım & Yazılım", href: "/hizmetler/web-tasarim" },
      { name: "Mobil Uygulama", href: "/hizmetler/mobil-uygulama" },
      { name: "UI/UX Tasarım", href: "/hizmetler/ui-ux" },
      { name: "E-Ticaret Çözümleri", href: "/hizmetler/e-ticaret" },
      { name: "SEO & Dijital Pazarlama", href: "/hizmetler/seo" },
    ],
    kurumsal: [
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "Projelerimiz", href: "/projeler" },
      { name: "Kariyer", href: "/kariyer" },
      { name: "İletişim", href: "/iletisim" },
    ],
    yasal: [
      { name: "Hizmet Sözleşmesi", href: "/sozlesme" },
      { name: "Gizlilik Politikası", href: "/gizlilik" },
      { name: "Çerez Politikası", href: "/cerez-politikasi" },
      { name: "KVKK Aydınlatma Metni", href: "/kvkk" },
    ]
  };

  // --- MOUSE TAKİP MEKANİZMASI ---
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Işık Efektleri
  const ambientLight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(79, 70, 229, 0.03), transparent 80%)`;
  const textRevealMask = useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <footer 
      className="relative bg-black text-white font-sans overflow-hidden border-t border-white/[0.08] group" 
      onMouseMove={handleMouseMove}
    >
      
      {/* --- KATMAN 1: GRID --- */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1400px] mx-auto w-full z-10 px-6 md:px-0 opacity-20">
         <div className="w-px h-full bg-white/[0.2]"></div>
         <div className="w-px h-full bg-white/[0.2]"></div>
         <div className="w-px h-full bg-white/[0.2]"></div>
         <div className="w-px h-full bg-white/[0.2]"></div>
         <div className="w-px h-full bg-white/[0.2]"></div>
      </div>

      {/* --- KATMAN 2: AMBİYANS IŞIĞI --- */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: ambientLight }}
      />

      {/* --- KATMAN 3: HAYALET YAZI (Ghost Text) --- */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] flex items-end justify-center pointer-events-none select-none z-0 overflow-hidden pb-10">
        <h1 className="text-[14vw] font-black leading-none text-transparent opacity-0 tracking-tighter absolute bottom-0 translate-y-[10%]">
          {fullBrandName.toUpperCase()}
        </h1>
        <motion.h1 
          className="text-[14vw] font-black leading-none text-neutral-600 tracking-tighter absolute bottom-0 translate-y-[10%]"
          style={{ 
            maskImage: textRevealMask,
            WebkitMaskImage: textRevealMask,
          }}
        >
          {fullBrandName.toUpperCase()}
        </motion.h1>
      </div>

      {/* --- KATMAN 4: İÇERİK --- */}
      <div className="relative z-20 max-w-[1400px] mx-auto w-full pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[400px]">
          
          {/* KOLON 1 */}
          <div className="px-8 md:px-12 flex flex-col">
            <p className="text-[11px] font-bold text-[#666] uppercase tracking-widest mb-8 font-mono">Hizmetler</p>
            <div className="flex flex-col gap-4">
              {footerLinks.hizmetler.map((item, i) => (
                <Link key={i} href={item.href} className="text-[14px] text-[#888] hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* KOLON 2 */}
          <div className="px-8 md:px-12 flex flex-col">
            <p className="text-[11px] font-bold text-[#666] uppercase tracking-widest mb-8 font-mono">Kurumsal</p>
            <div className="flex flex-col gap-4">
              {footerLinks.kurumsal.map((item, i) => (
                <Link key={i} href={item.href} className="text-[14px] text-[#888] hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* KOLON 3 */}
          <div className="px-8 md:px-12 flex flex-col">
            <p className="text-[11px] font-bold text-[#666] uppercase tracking-widest mb-8 font-mono">Kaynaklar</p>
            <div className="flex flex-col gap-4">
              {footerLinks.yasal.map((item, i) => (
                <Link key={i} href={item.href} className="text-[14px] text-[#888] hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* KOLON 4: WHATSAPP & BÜLTEN (DÜZELTİLDİ) */}
          <div className="px-8 md:px-12 flex flex-col justify-between h-full">
            <div>
              <p className="text-[11px] font-bold text-[#666] uppercase tracking-widest mb-8 font-mono">Hızlı İletişim</p>
              
              {/* E-Bülten Formu (ARTIK ÇALIŞIYOR) */}
              <form className="mb-6 w-full group" onSubmit={handleQuickSubmit}>
                <div className={`relative flex items-center border-b pb-4 transition-colors group-focus-within:border-white ${emailStatus === "error" ? "border-red-500" : "border-white/20"}`}>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="E-posta adresiniz"
                    required
                    disabled={emailStatus === "loading" || emailStatus === "success"}
                    className="w-full bg-transparent text-white placeholder:text-[#555] text-sm focus:outline-none disabled:opacity-50"
                  />
                  <button 
                    type="submit" 
                    disabled={emailStatus === "loading" || emailStatus === "success"}
                    className="text-[#666] hover:text-white transition-colors px-2 disabled:opacity-50"
                  >
                    {emailStatus === "loading" ? (
                      <Loader2 size={18} className="animate-spin text-white" />
                    ) : emailStatus === "success" ? (
                      <Check size={18} className="text-emerald-500" />
                    ) : (
                      <ArrowRight size={18} />
                    )}
                  </button>
                </div>
                {emailStatus === "success" && <p className="text-xs text-emerald-500 mt-2">Kaydınız başarıyla alındı!</p>}
                {emailStatus === "error" && <p className="text-xs text-red-500 mt-2">Bir hata oluştu, tekrar deneyin.</p>}
              </form>

              {/* --- WHATSAPP BUTONU --- */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between w-full px-5 py-4 mb-8 rounded-xl bg-emerald-900/10 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
              >
                 {/* Buton Arkası Glow */}
                 <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                 
                 <div className="flex items-center gap-3 relative z-10">
                    <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                        <MessageCircle size={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-emerald-500/70 font-mono uppercase tracking-wider">Hızlı Destek</span>
                        <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">WhatsApp Hattı</span>
                    </div>
                 </div>
                 
                 <ArrowRight size={18} className="text-emerald-500/50 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all relative z-10" />
              </a>

              {/* Sosyal İkonlar */}
              <div className="flex gap-5">
                {socials.map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-white transition-colors">
                     {social.icon && <social.icon size={22} />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- KATMAN 5: ALT BİLGİ --- */}
      <div className="relative z-30 max-w-[1400px] mx-auto w-full border-t border-white/[0.08] mt-12">
         <div className="flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-12 text-[#444] text-[10px] font-mono uppercase tracking-wider">
            
            <div>
                <span>© {currentYear} {siteConfig.name}. Tüm hakları saklıdır.</span>
            </div>

            <div className="mt-2 md:mt-0">
                <span>Created by <span className="text-[#666] font-bold">OCS Creative</span></span>
            </div>

         </div>
      </div>

    </footer>
  );
}