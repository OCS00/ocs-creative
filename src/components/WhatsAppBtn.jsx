"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppBtn() {
  return (
    <a
      href="https://wa.me/905551234567" // 🔥 Buraya kendi numaranı yaz (Başında 90 olsun)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="WhatsApp ile iletişime geç"
    >
      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
      <MessageCircle size={28} fill="white" className="text-green-500" />
      
      {/* Hover olunca çıkan yazı */}
      <span className="absolute right-full mr-4 bg-white text-dark-900 px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Hemen Yazın
      </span>
    </a>
  );
}