"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

const NAV_LINKS = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Projeler", href: "/projeler" },
  { name: "Hakkımda", href: "/hakkimda" },
  { name: "Hizmetler", href: "/hizmetler" }, 
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // ✅ KRİTİK EKLEME: Eğer Sanity Yönetim Panelindeysek (/studio), Navbar'ı gizle!
  if (pathname && pathname.startsWith('/studio')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#030303]/80 backdrop-blur-xl border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO: Görsel Kullanımı */}
        <Link href="/" className="relative w-40 h-10 flex items-center">
           <Image
             src="/logo1.png" // public klasöründeki dosya
             alt={siteConfig?.name || "Logo"}
             fill
             className="object-contain object-left" 
             priority 
           />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative hover:text-white ${
                pathname === link.href ? "text-white" : "text-gray-400"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-px w-full bg-indigo-500 mt-1"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link
            href="/iletisim"
            className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-indigo-50 transition-colors flex items-center gap-2"
          >
            Teklif Al
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    pathname === link.href ? "text-indigo-400" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/iletisim"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-center"
              >
                Projemi Başlat
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}