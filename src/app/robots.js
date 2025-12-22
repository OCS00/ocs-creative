export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/", // Yönetim paneline girmesin
    },
    // ⚠️ GÜNCELLENDİ: Yeni harita adresi
    sitemap: "https://www.ocscreative.com.tr/sitemap.xml", 
  };
}