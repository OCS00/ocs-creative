import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "@/components/CookieBanner";
import { siteConfig } from "@/config/site"; // ✅ Config Bağlantısı

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`, // Örn: "Projeler | OCS Creative"
  },
  description: siteConfig.description,
  keywords: ["Web Tasarım", "Dijital Ajans", "Next.js", "React", "Kurumsal Web Sitesi"],
  authors: [{ name: siteConfig.name }],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020202] text-white antialiased`}>
        {children}
        <CookieBanner />
        <SpeedInsights />
        {/* Google Analytics ID'nizi buraya veya .env dosyasına ekleyebilirsiniz */}
        <GoogleAnalytics gaId="G-XYZ123456" /> 
      </body>
    </html>
  );
}