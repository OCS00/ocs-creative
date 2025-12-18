import { Code2, Megaphone, BarChart3, Palette } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Web Tasarım & Yazılım",
    description: "İşletmenizi en iyi yansıtan, mobil uyumlu ve hızlı açılan modern web siteleri tasarlıyoruz. Müşterileriniz size her yerden ulaşsın.",
    icon: <Code2 size={40} />, 
    features: ["Mobil Uyumlu Tasarım", "Hızlı & Güvenli Altyapı", "Yönetim Paneli", "Kurumsal E-Posta"],
    link: "/iletisim" // Detay sayfası yerine direkt iletişime yönlendirelim
  },
  {
    id: 2,
    title: "SEO Optimizasyonu",
    description: "Web sitenizi Google aramalarında üst sıralara taşıyacak stratejiler geliştiriyoruz. Organik olarak daha fazla müşteriye ulaşın.",
    icon: <BarChart3 size={40} />, 
    features: ["Anahtar Kelime Analizi", "Site İçi Düzenleme", "Google Harita Kaydı", "Aylık Raporlama"],
    link: "/iletisim"
  },
  {
    id: 3,
    title: "Sosyal Medya Yönetimi",
    description: "Instagram ve LinkedIn hesaplarınızı profesyonelce yönetiyoruz. Düzenli içerik paylaşımı ile marka bilinirliğinizi artırın.",
    icon: <Megaphone size={40} />, 
    features: ["İçerik Üretimi & Tasarım", "Hesap Yönetimi", "Etkileşim Artırma", "Reklam Yönetimi"],
    link: "/iletisim"
  },
  {
    id: 4,
    title: "Kurumsal Kimlik",
    description: "Markanızın yüzünü baştan yaratıyoruz. Logo, kartvizit ve tüm görsel ihtiyaçlarınız için profesyonel tasarım desteği.",
    icon: <Palette size={40} />, 
    features: ["Logo Tasarımı", "Renk Paleti Seçimi", "Sosyal Medya Görselleri", "Marka Kitapçığı"],
    link: "/iletisim"
  }
];