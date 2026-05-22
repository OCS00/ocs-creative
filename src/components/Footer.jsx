"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function Footer() {
  const pathname = usePathname();
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const ambientLight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(79, 70, 229, 0.03), transparent 80%)`;
  const textRevealMask = useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  if (pathname && pathname.startsWith('/studio')) {
    return null;
  }

  const currentYear = new Date().getFullYear();
  const fullBrandName = (siteConfig?.name || "OCS Creative") + ".";
  const whatsappNumber = siteConfig.contact.phoneCall.replace("+", "");
  const whatsappMessage = "Merhaba, projemiz hakkında görüşmek istiyorum.";

  const footerLinks = {
    hizmetler: [
      { name: "Web Tasarım & Yazılım", href: "/hizmetler" },
      { name: "Mobil Uygulama", href: "/hizmetler" },
      { name: "UI/UX Tasarım", href: "/hizmetler" },
      { name: "E-Ticaret Çözümleri", href: "/hizmetler" },
      { name: "SEO & Dijital Pazarlama", href: "/hizmetler" },
    ],
    kurumsal: [
      { name: "Hakkımızda", href: "/hakkimda" },
      { name: "Projelerimiz", href: "/projeler" },
      { name: "İletişim", href: "/iletisim" },
    ],
    yasal: [
      { name: "Hizmet Sözleşmesi", href: "/sozlesme" },
      { name: "Yasal Bilgiler", href: "/yasal" },
    ],
  };

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <footer
      className="relative bg-black text-white font-sans overflow-hidden border-t border-white/[0.08] group"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1400px] mx-auto w-full z-10 px-6 md:px-0 opacity-20">
        <div className="w-px h-full bg-white/[0.2]"></div>
        <div className="w-px h-full bg-white/[0.2]"></div>
        <div className="w-px h-full bg-white/[0.2]"></div>
        <div className="w-px h-full bg-white/[0.2]"></div>
        <div className="w-px h-full bg-white/[0.2]"></div>
      </div>

      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: ambientLight }}
      />

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

      <div className="relative z-20 max-w-[1400px] mx-auto w-full pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[400px]">

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

          <div className="px-8 md:px-12 flex flex-col">
            <p className="text-[11px] font-bold text-[#666] uppercase tracking-widest mb-8 font-mono">Hızlı İletişim</p>

            <div className="flex flex-col gap-4 mb-8">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[14px] text-[#888] hover:text-white transition-colors"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneCall}`}
                className="text-[14px] text-[#888] hover:text-white transition-colors"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between w-full px-5 py-4 rounded-xl bg-emerald-900/10 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
            >
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
          </div>

        </div>
      </div>

      <div className="relative z-30 max-w-[1400px] mx-auto w-full border-t border-white/[0.08] mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-12 text-[#444] text-[10px] font-mono uppercase tracking-wider">
          <span>© {currentYear} {siteConfig.name}. Tüm hakları saklıdır.</span>
          <span className="mt-2 md:mt-0">{siteConfig.contact.address}</span>
        </div>
      </div>
    </footer>
  );
}
