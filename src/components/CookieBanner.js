"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // 1. Onayı kaydet
    localStorage.setItem("cookieConsent", "true");
    
    // 2. Analytics bileşenine "Uyan!" sinyali gönder (Custom Event)
    window.dispatchEvent(new Event("cookie-consent-updated"));
    
    // 3. Banner'ı kapat
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    // Reddedilirse sinyal göndermeye gerek yok, Analytics zaten çalışmıyor.
    setIsVisible(false);
  };

  const brandName = siteConfig?.name || "Sitemiz";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[400px] z-[9999]"
        >
          <div className="bg-[#111]/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl shadow-black/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
                  <Cookie size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Çerez Tercihleri</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {brandName} olarak, deneyiminizi iyileştirmek için çerezler kullanıyoruz.
                    Detaylı bilgi için <Link href="/yasal" className="text-indigo-400 hover:underline">Gizlilik Politikası</Link>&apos;nı inceleyebilirsiniz.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleDecline}
                  className="flex-1 py-2.5 rounded-lg border border-white/10 text-gray-400 text-sm font-medium hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <X size={16} /> Reddet
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                >
                  <Check size={16} /> Kabul Et
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}