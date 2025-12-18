"use client";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/servicesData";
import { Linkedin, Instagram, Twitter, ArrowUpRight, Mail, Globe } from "lucide-react"; // MapPin yerine Globe

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white border-t border-dark-800 pt-20 pb-10 relative overflow-hidden">
      
      {/* Arka Plan Efekti */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Üst Kısım */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 border-b border-dark-800 pb-12">
          <div className="max-w-lg">
             <Link href="/" className="text-3xl font-bold tracking-tighter text-white group inline-block mb-6">
                OCS <span className="text-primary">Creative</span>.
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed">
              Sınırları kaldırıyoruz. Dünyanın her yerindeki markalar için dijital stratejiler geliştiriyoruz.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">ONLINE GÖRÜŞELİM</span>
            <Link href="/iletisim" className="text-4xl md:text-5xl font-bold hover:text-primary transition-colors flex items-center gap-4 group">
              Başlayalım <ArrowUpRight className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300" size={40} />
            </Link>
          </div>
        </div>

        {/* Orta Kısım */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Adres / İletişim */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-4">İletişim</h4>
            {/* 🔥 BURAYI DEĞİŞTİRDİK: MapPin yerine Globe */}
            <div className="flex items-start gap-3 text-gray-400 text-sm">
              <Globe size={18} className="text-primary shrink-0 mt-1" />
              <span>{siteConfig.address}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail size={18} className="text-primary shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
            </div>
          </div>

          {/* Menü - AYNI KALIYOR */}
          <div>
            <h4 className="text-white font-bold mb-6">Keşfet</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/hakkimda" className="hover:text-primary transition-colors">Hakkımızda</Link></li>
              <li><Link href="/hizmetler" className="hover:text-primary transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/#referanslar" className="hover:text-primary transition-colors">Projeler</Link></li>
              <li><Link href="/iletisim" className="hover:text-primary transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Hizmetler - AYNI KALIYOR */}
          <div>
            <h4 className="text-white font-bold mb-6">Hizmetler</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {services.slice(0, 4).map((s) => (
                <li key={s.id}><Link href="/hizmetler" className="hover:text-primary transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Sosyal Medya - AYNI KALIYOR */}
          <div>
            <h4 className="text-white font-bold mb-6">Takip Et</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} {siteConfig.name}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-2">
            <span>Designed & Coded by</span>
            <span className="text-white font-bold">OCS Creative Team</span>
          </div>
        </div>

      </div>
    </footer>
  );
}