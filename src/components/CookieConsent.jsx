"use client";
import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Daha önce kabul etmediyse göster
    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) {
      setTimeout(() => setShow(true), 2000); // 2 saniye sonra çıksın
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-dark-800 border border-dark-700 p-6 rounded-2xl shadow-2xl z-50 flex flex-col gap-4 animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 text-primary font-bold">
          <Cookie size={20} />
          <span>Çerez Politikası</span>
        </div>
        <button onClick={() => setShow(false)} className="text-gray-500 hover:text-white transition-colors">
          <X size={20} />
        </button>
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed">
        Size daha iyi bir deneyim sunmak ve trafiği analiz etmek için çerezleri kullanıyoruz. Sitemizi kullanarak bunu kabul etmiş sayılırsınız.
      </p>

      <div className="flex gap-2">
        <button 
          onClick={handleAccept}
          className="flex-1 bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2 rounded-lg transition-colors"
        >
          Kabul Et
        </button>
        <button 
          onClick={() => setShow(false)}
          className="flex-1 bg-dark-700 hover:bg-dark-600 text-white text-sm font-bold py-2 rounded-lg transition-colors"
        >
          Reddet
        </button>
      </div>
    </div>
  );
}