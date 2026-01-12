import React from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Resim için gerekli
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Veriler yoksa boş obje kullan (Hata önleyici)
  const contact = siteConfig?.contact || {};
  const socials = siteConfig?.socials || [];
  const brandName = siteConfig?.name || "OCS Creative";

  return (
    <footer className="bg-[#020202] border-t border-white/10 pt-20 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* 1. KOLON: LOGO & AÇIKLAMA */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6 relative w-48 h-12">
               {/* LOGO GÖRSELİ */}
               <Image
                 src="/logo1.png"
                 alt={brandName}
                 fill
                 className="object-contain object-left"
               />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              {siteConfig?.description || "Markanız için dijital çözümler."}
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#6366F1] hover:text-white transition-all"
                  aria-label={social.name}
                >
                  {social.icon && <social.icon size={18} />}
                </a>
              ))}
            </div>
          </div>

          {/* 2. KOLON */}
          <div>
            <h3 className="text-white font-bold mb-6">Keşfet</h3>
            <ul className="space-y-3">
              <li><Link href="/hizmetler" className="text-gray-400 hover:text-[#6366F1] transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/projeler" className="text-gray-400 hover:text-[#6366F1] transition-colors">Projeler</Link></li>
              <li><Link href="/hakkimda" className="text-gray-400 hover:text-[#6366F1] transition-colors">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="text-gray-400 hover:text-[#6366F1] transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* 3. KOLON */}
          <div>
            <h3 className="text-white font-bold mb-6">Kurumsal</h3>
            <ul className="space-y-3">
              <li><Link href="/iletisim" className="text-gray-400 hover:text-[#6366F1] transition-colors">Teklif Al</Link></li>
              <li><Link href="/sozlesme" className="text-gray-400 hover:text-[#6366F1] transition-colors">Hizmet Sözleşmesi</Link></li>
              <li><Link href="/yasal" className="text-gray-400 hover:text-[#6366F1] transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/kvkk" className="text-gray-400 hover:text-[#6366F1] transition-colors">KVKK Metni</Link></li>
            </ul>
          </div>

          {/* 4. KOLON */}
          <div>
            <h3 className="text-white font-bold mb-6">Bize Ulaşın</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-[#6366F1] mt-1 shrink-0" size={18} />
                <span>{contact.address || "Adres bilgisi yok"}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-[#6366F1] shrink-0" size={18} />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email || "info@site.com"}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-[#6366F1] shrink-0" size={18} />
                <a href={`tel:${contact.phoneCall}`} className="hover:text-white transition-colors">
                  {contact.phone || "0000 000 00 00"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500">© {currentYear} {brandName}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-2 text-gray-600 text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}