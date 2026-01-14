import React, { Suspense } from "react"; // ✅ Suspense import edildi
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"; 
import { siteConfig } from "@/config/site"; 

// --- BİLEŞENLER ---
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import Cta from "@/components/Cta";       
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics"; 

// Font Ayarı
const inter = Inter({ subsets: ["latin"] });

// --- METADATA (SEO) ---
export const metadata = {
  title: {
    default: siteConfig.name || "OCS Creative",
    template: `%s | ${siteConfig.name || "OCS Creative"}`,
  },
  description: siteConfig.description || "Dijital dünyada fark yaratan çözümler.",
  keywords: ["Web Tasarım", "Dijital Ajans", "Next.js", "React", "Kurumsal Web Sitesi", "SEO", "Yazılım"],
  authors: [{ name: "OCS Creative" }],
  creator: "OCS Creative",
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage || "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage || "/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020202] text-white antialiased selection:bg-indigo-500 selection:text-white`}>
        
        {/* 1. ÜST MENÜ (NAVBAR) */}
        {/* Navbar'da URL okuma ihtimaline karşı Suspense içine almak güvenlidir */}
        <Suspense fallback={<div className="h-20 bg-black/50" />}>
          <Navbar />
        </Suspense>

        {/* 2. ANA İÇERİK */}
        <main className="min-h-screen relative z-0">
          {children}
        </main>
        
        {/* 3. CTA & FOOTER (GLOBAL ALAN) */}
        {/* CTA'da ?paket=startup gibi query okumaları varsa Suspense şarttır */}
        <Suspense fallback={null}>
           <Cta />
        </Suspense>

        <Footer />
        
        {/* --- EKLENTİLER & SCRIPTS --- */}
        {/* Bu bileşenler URL parametrelerine (UTM vs) baktığı için HATA BUNLARDAN ÇIKAR */}
        {/* Mutlaka Suspense içine alınmalı */}
        
        <Suspense fallback={null}>
           <CookieBanner />
        </Suspense>
        
        <Suspense fallback={null}>
           <Analytics />
        </Suspense>
        
        <SpeedInsights />
        
      </body>
    </html>
  );
}