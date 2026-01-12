"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site"; // ✅ Config eklendi

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Sol Taraf: Metin */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Bir Sonraki Projenizi <br />
              <span className="text-indigo-500">Birlikte Planlayalım.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Dijital dünyadaki varlığınızı güçlendirmek için buradayız. 
              Soru, görüş veya proje talepleriniz için bize ulaşın.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg">{siteConfig.contact.email}</span>
              </a>

              <a href={`tel:${siteConfig.contact.phoneCall}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-lg">{siteConfig.contact.phone}</span>
              </a>

              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span className="text-lg">{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Ofis Bilgisi (Yüklediğin dosyada burası farklı olabilir, mevcut yapıya sadık kaldım) */}
          <div className="relative h-[400px] bg-[#111] rounded-3xl border border-white/10 overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center text-center p-8">
                <div>
                   <h3 className="text-2xl font-bold text-white mb-2">Ofisimize Bekleriz</h3>
                   <p className="text-indigo-400">{siteConfig.contact.workingHours}</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}