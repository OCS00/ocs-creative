import { Instagram, Linkedin, Twitter } from "lucide-react";

export const siteConfig = {
  // --- EKSİK OLAN KISIM BURASIYDI ---
  name: "OCS Creative",
  description: "Markalar için dijital dönüşüm ve yazılım çözümleri.",
  url: "https://ocscreative.com.tr",
  // ----------------------------------

  // İLETİŞİM (Telefon & Mail)
  contact: {
    email: "hello@ocscreative.com",
    phoneDisplay: "+90 (505) 008 20 34", // Ekranda görünen
    phoneCall: "+905050082034", // Tıklanınca arayan (boşluksuz)
    address: "İstanbul / Türkiye"
  },

  // SOSYAL MEDYA (İkonlar ve Linkler)
  socials: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/ocscreative",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/ocscreative",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ocscreative",
      icon: Twitter,
    },
  ],
};