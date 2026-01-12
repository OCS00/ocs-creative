"use client";
import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site"; // ✅ Config dosyasını çektik

export default function WhatsAppBtn() {
  // Numarayı config'den alıyoruz
  const whatsappLink = `https://wa.me/${siteConfig.contact.phoneCall}?text=Merhaba, proje hakkında bilgi almak istiyorum.`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="WhatsApp"
    >
      <span className="absolute right-16 bg-white text-black text-xs font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Hızlı Destek
      </span>
      <MessageCircle size={28} className="text-white" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 animate-ping"></span>
    </a>
  );
}