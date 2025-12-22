import { Inter } from "next/font/google";
import "./globals.css";
// 1. İMPORT ET
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

// ... importlar aynı kalsın

export const metadata = {
  title: "OCS Creative | Yeni Nesil Web Tasarım & Dijital Ajans",
  description: "İstanbul merkezli dijital stüdyo. Next.js ve Sanity teknolojileriyle ışık hızında, SEO uyumlu, özel web tasarım ve mobil uygulama çözümleri üretiyoruz.",
  // İstersen ikon, openGraph vs. buraya eklersin
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        {/* 2. BURAYA KOY (Body kapanmadan hemen önce) */}
        <SpeedInsights />
      </body>
    </html>
  );
}