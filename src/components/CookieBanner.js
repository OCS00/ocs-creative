"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-[#111] border border-white/10 p-6 rounded-2xl shadow-2xl z-[9999] animate-in slide-in-from-bottom-10 fade-in duration-700">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-bold text-white">🍪 Çerez Tercihleri</h4>
        <button onClick={() => setShow(false)}><X size={18} className="text-gray-500 hover:text-white" /></button>
      </div>
      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        Size daha iyi bir deneyim sunmak için çerezleri (cookies) kullanıyoruz. Devam ederek KVKK politikamızı kabul etmiş sayılırsınız.
      </p>
      <div className="flex gap-2">
        <button onClick={accept} className="flex-1 py-2 bg-white text-black text-sm font-bold rounded-lg hover:bg-gray-200">
          Kabul Et
        </button>
        <a href="/yasal" className="flex-1 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 text-center border border-white/10">
          İncele
        </a>
      </div>
    </div>
  );
}