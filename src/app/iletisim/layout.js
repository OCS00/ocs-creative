import { siteConfig } from "@/config/site";

const pageUrl = `${siteConfig.url}/iletisim`;

export const metadata = {
  title: "İletişim & Ücretsiz Teklif Al | OCS Creative",
  description: "Web tasarım, mobil uygulama veya yazılım projeniz için ücretsiz teklif alın. İstanbul merkezli OCS Creative ile dijital hedeflerinizi konuşalım.",
  keywords: [
    "web tasarım teklif",
    "yazılım ajansı iletişim",
    "ücretsiz web sitesi teklifi",
    "dijital ajans İstanbul iletişim",
    "OCS Creative iletişim",
    "web tasarım danışmanlık",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "İletişim & Ücretsiz Teklif Al | OCS Creative",
    description: "Web tasarım, mobil uygulama veya yazılım projeniz için ücretsiz teklif alın. İstanbul merkezli OCS Creative ile dijital hedeflerinizi konuşalım.",
    url: pageUrl,
    type: "website",
    images: [{ url: `${siteConfig.url}/opengraph-image`, width: 1200, height: 630, alt: "OCS Creative – İletişim" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim & Ücretsiz Teklif Al | OCS Creative",
    description: "Web tasarım, mobil uygulama veya yazılım projeniz için ücretsiz teklif alın.",
    images: [{ url: `${siteConfig.url}/opengraph-image`, alt: "OCS Creative – İletişim" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": siteConfig.url },
    { "@type": "ListItem", "position": 2, "name": "İletişim", "item": pageUrl },
  ],
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
