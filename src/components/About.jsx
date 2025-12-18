"use client";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { useState, useEffect } from "react";
import { Menu, X, Phone, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sayfa aşağı kayınca menüye gölge ekleyelim
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımda", href: "#hakkimda" },
    { name: "Hizmetler", href: "#hizmetler" }, // Hizmetler id'sini services değil hizmetler yaptık
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="text-2xl font-playfair font-bold text-secondary group-hover:text-primary transition-colors">
                SMMM <span className="text-primary">{siteConfig.name}</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-secondary-light uppercase group-hover:text-primary transition-colors">
                Mali Müşavirlik
              </span>
            </div>
          </Link>

          {/* MASAÜSTÜ MENÜ */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="bg-primary text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-primary-hover transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <Phone size={16} />
              <span>Hemen Ara</span>
            </a>
          </div>

          {/* MOBİL MENÜ BUTONU */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-secondary hover:text-primary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ LİSTESİ */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen">
          <div className="flex flex-col p-8 space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-playfair font-bold text-secondary hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}