import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/config/site";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import WhatsAppBtn from "@/components/WhatsAppBtn";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020202",
};

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name || "OCS Creative",
    template: `%s | ${siteConfig.name || "OCS Creative"}`,
  },
  description: siteConfig.description || "Dijital dünyada fark yaratan çözümler.",
  authors: [{ name: "OCS Creative" }],
  creator: "OCS Creative",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "telephone": siteConfig.contact.phoneCall,
  "email": siteConfig.contact.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "İstanbul",
    "addressCountry": "TR"
  },
  "sameAs": siteConfig.socials.map((s) => s.href),
  "knowsAbout": ["Web Tasarım", "Mobil Uygulama Geliştirme", "UI/UX Tasarım", "SEO", "Next.js", "React"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020202] text-white antialiased selection:bg-indigo-500 selection:text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
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

        <Suspense fallback={null}>
          <WhatsAppBtn />
        </Suspense>

        <SpeedInsights />
        
      </body>
    </html>
  );
}