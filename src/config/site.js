// src/config/site.js

import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

export const siteConfig = {
  // GENEL BİLGİLER
  name: "OCS Creative",
  description: "Markalar için dijital dönüşüm ve yazılım çözümleri.",
  url: "https://ocscreative.com",

  // İLETİŞİM BİLGİLERİ (Burası değişince her yer değişir)
  contact: {
    email: "hello@ocscreative.com",
    phone: "+90 (555) 123 45 67",
    phoneCall: "+905551234567", // Tıklayınca arama yapması için boşluksuz
    address: "Maslak, İstanbul / Türkiye",
    workingHours: "Pzt - Cum: 09:00 - 18:00",
  },

  // SOSYAL MEDYA LİNKLERİ
  socials: [
    {
      name: "Instagram",
      href: "https://instagram.com/ocscreative",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/ocscreative",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ocscreative",
      icon: Twitter,
    },
    // İstersen Github vb. ekleyebilirsin
  ],
};