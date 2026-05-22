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

const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap" });

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
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "OCS Creative" }],
  creator: "OCS Creative",
  publisher: "OCS Creative",
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/logo1.png", sizes: "any", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo1.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} – Web Tasarım & Yazılım Ajansı` }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} – Web Tasarım & Yazılım Ajansı` }],
    creator: "@ocscreative",
    site: "@ocscreative",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#organization`,
  "name": siteConfig.name,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "telephone": siteConfig.contact.phoneCall,
  "email": siteConfig.contact.email,
  "logo": {
    "@type": "ImageObject",
    "url": `${siteConfig.url}/logo.png`,
  },
  "image": `${siteConfig.url}/opengraph-image`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "İstanbul",
    "addressRegion": "İstanbul",
    "addressCountry": "TR"
  },
  "areaServed": [
    { "@type": "Country", "name": "Türkiye" }
  ],
  "priceRange": "₺₺₺",
  "sameAs": siteConfig.socials.map((s) => s.href),
  "knowsAbout": ["Web Tasarım", "Mobil Uygulama Geliştirme", "UI/UX Tasarım", "SEO", "Next.js", "React", "Tailwind CSS", "Sanity CMS"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dijital Hizmetler",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Tasarımı", "description": "Yüksek dönüşüm odaklı tek sayfa web tasarımı." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kurumsal Web Sitesi", "description": "CMS destekli, çok sayfalı kurumsal web sitesi geliştirme." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Özel Yazılım & SaaS", "description": "İş akışına özel web tabanlı yazılım çözümleri." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobil Uygulama Geliştirme", "description": "React Native ile iOS ve Android uygulama geliştirme." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Tasarım", "description": "Kullanıcı deneyimi odaklı arayüz tasarımı." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Teknik SEO", "description": "Google'da üst sıralara çıkmak için teknik SEO optimizasyonu." } },
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "12",
    "reviewCount": "12"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ahmet Yılmaz" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "OCS Creative, hayalimizdeki projeyi teknik mükemmellikle hayata geçirdi. Süreç boyunca şeffaf iletişim ve çözüm odaklı yaklaşım bizi çok etkiledi."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Elif Demir" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Sadece bir web sitesi değil, markamız için bir kimlik inşa ettiler. Tasarım detaylarına verdikleri önem ve hızları inanılmaz."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Mehmet Kaya" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "SEO ve hız konusunda vaat ettiklerinin fazlasını yaptılar. Site yayına girdikten sonra müşteri dönüşlerimizde %40 artış gözlemledik."
    }
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  "name": siteConfig.name,
  "url": siteConfig.url,
  "description": siteConfig.description,
  "publisher": {
    "@id": `${siteConfig.url}/#organization`,
  },
  "inLanguage": "tr-TR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020202] text-white antialiased selection:bg-indigo-500 selection:text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        
        <Suspense fallback={<div className="h-20 bg-black/50" />}>
          <Navbar />
        </Suspense>

        <div className="min-h-screen relative z-0">
          {children}
        </div>

        <Suspense fallback={null}>
          <Cta />
        </Suspense>

        <Footer />

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