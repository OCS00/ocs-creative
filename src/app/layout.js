import { Inter } from "next/font/google";
import "./globals.css";
// 1. İMPORT ET
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OCS Creative Studio",
  description: "Dijital Çözüm Ortağınız",
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