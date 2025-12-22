import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google"; // 1. Ekle
import CookieBanner from "@/components/CookieBanner"; // 2. Ekle

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OCS Creative | Yeni Nesil Web Tasarım & Dijital Ajans",
  description: "İstanbul merkezli dijital stüdyo...",
  icons: { icon: '/favicon.ico' }, // Varsa favicon yolun
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <CookieBanner /> {/* 3. Banner'ı Göster */}
        <SpeedInsights />
        <GoogleAnalytics gaId="G-XYZ123456" /> {/* 4. Kendi ID'ni yaz */}
      </body>
    </html>
  );
}