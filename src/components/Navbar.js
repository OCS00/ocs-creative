"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowRight } from "lucide-react";

// Ajans Menüsü
const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimda" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Projeler", href: "/projeler" }, // 🔥 BURAYI DEĞİŞTİRDİK (Eskiden /#referanslar idi)
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll olunca navbarın rengini değiştirme efekti
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-dark-900/90 backdrop-blur-md border-b border-dark-700 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO (Yazı Olarak) */}
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white group">
            OCS <span className="text-primary group-hover:text-white transition-colors">Creative</span>
            <span className="w-2 h-2 bg-primary rounded-full inline-block ml-1 animate-pulse"></span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors hover:tracking-wide duration-300"
              >
                {item.name}
              </Link>
            ))}
            
            <Link 
              href="/iletisim" 
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 hover:gap-3"
            >
              Teklif Al <ArrowRight size={16} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-dark-700 p-4 flex flex-col gap-4 shadow-2xl">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-primary font-medium py-2 border-b border-dark-700/50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
           <Link 
            href="/iletisim"
            className="bg-primary text-center text-white py-3 rounded-lg font-bold mt-2"
            onClick={() => setIsOpen(false)}
          >
            Hemen Başlayalım
          </Link>
        </div>
      )}
    </nav>
  );
}