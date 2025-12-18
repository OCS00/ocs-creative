"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Slogan */}
          <div className="md:col-span-1">
            {/* GÜNCELLENMİŞ LOGO: OCS (Beyaz) Creative (İndigo) */}
            <Link href="/" className="text-2xl font-bold tracking-tight text-white mb-6 block">
              OCS <span className="text-indigo-500">Creative.</span>
            </Link>
            
            <p className="text-gray-500 text-sm leading-relaxed">
              Modern markalar için stratejik dijital deneyimler ve yüksek performanslı web çözümleri tasarlıyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-white font-bold mb-6">Keşfet</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/projeler" className="hover:text-indigo-400 transition">Projeler</Link></li>
              <li><Link href="/hizmetler" className="hover:text-indigo-400 transition">Hizmetler</Link></li>
              <li><Link href="/hakkimda" className="hover:text-indigo-400 transition">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="hover:text-indigo-400 transition">İletişim</Link></li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-white font-bold mb-6">Hizmetler</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Web Tasarım & Yazılım</li>
              <li>Mobil Uygulama (React Native)</li>
              <li>UI/UX Tasarım</li>
              <li>SEO & Dijital Büyüme</li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4 className="text-white font-bold mb-6">Takip Et</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all"><Instagram size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all"><Linkedin size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all"><Github size={18}/></a>
            </div>
          </div>
        </div>

        {/* Telif Hakkı */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2024 OCS Creative Studio. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Gizlilik Politikası</a>
            <a href="#" className="hover:text-gray-400">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}