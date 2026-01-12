import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/10 pt-20 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* 1. KOLON: MARKA */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-black tracking-tight text-white">
                OCS <span className="text-[#6366F1]">Creative.</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Markaları dijital dünyada büyüten, strateji odaklı tasarım ve yazılım stüdyosu. Sizin hikayenizi teknolojiyle anlatıyoruz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#6366F1] hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* 2. KOLON: HIZLI LİNKLER */}
          <div>
            <h3 className="text-white font-bold mb-6">Keşfet</h3>
            <ul className="space-y-3">
              <li><Link href="/hizmetler" className="text-gray-400 hover:text-[#6366F1] transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/projeler" className="text-gray-400 hover:text-[#6366F1] transition-colors">Projeler</Link></li>
              <li><Link href="/hakkimda" className="text-gray-400 hover:text-[#6366F1] transition-colors">Hakkımızda</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-[#6366F1] transition-colors">Blog & İçerik</Link></li>
            </ul>
          </div>

          {/* 3. KOLON: YASAL & DESTEK */}
          <div>
            <h3 className="text-white font-bold mb-6">Kurumsal</h3>
            <ul className="space-y-3">
              <li><Link href="/iletisim" className="text-gray-400 hover:text-[#6366F1] transition-colors">İletişime Geç</Link></li>
              <li><Link href="/sozlesme" className="text-gray-400 hover:text-[#6366F1] transition-colors">Hizmet Sözleşmesi</Link></li>
              <li><Link href="/yasal" className="text-gray-400 hover:text-[#6366F1] transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/kvkk" className="text-gray-400 hover:text-[#6366F1] transition-colors">KVKK Metni</Link></li>
            </ul>
          </div>

          {/* 4. KOLON: İLETİŞİM */}
          <div>
            <h3 className="text-white font-bold mb-6">Bize Ulaşın</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-[#6366F1] mt-1" size={18} />
                <span>İstanbul, Türkiye <br /> (Global Hizmet)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-[#6366F1]" size={18} />
                <a href="mailto:hello@ocscreative.com" className="hover:text-white">hello@ocscreative.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-[#6366F1]" size={18} />
                <a href="tel:+905550000000" className="hover:text-white">+90 (555) 000 00 00</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ALT ÇİZGİ */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500">© {new Date().getFullYear()} OCS Creative. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-2 text-gray-600 text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}