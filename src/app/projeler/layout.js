import { siteConfig } from "@/config/site";

const pageUrl = `${siteConfig.url}/projeler`;

export const metadata = {
  title: "Portfolyo & Başarı Hikayeleri | OCS Creative",
  description: "OCS Creative'in gerçekleştirdiği kurumsal web sitesi, mobil uygulama ve UI/UX tasarım projeleri. Başarı hikayelerimizi ve referanslarımızı keşfedin.",
  keywords: [
    "web tasarım portfolyo",
    "dijital ajans referansları",
    "kurumsal web sitesi örnekleri",
    "Next.js proje örnekleri",
    "başarı hikayeleri",
    "OCS Creative projeler",
    "web tasarım case study",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Portfolyo & Başarı Hikayeleri | OCS Creative",
    description: "OCS Creative'in gerçekleştirdiği kurumsal web sitesi, mobil uygulama ve UI/UX tasarım projeleri. Başarı hikayelerimizi ve referanslarımızı keşfedin.",
    url: pageUrl,
    type: "website",
    images: [{ url: `${siteConfig.url}/opengraph-image`, width: 1200, height: 630, alt: "OCS Creative – Portfolyo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolyo & Başarı Hikayeleri | OCS Creative",
    description: "OCS Creative'in gerçekleştirdiği kurumsal web sitesi, mobil uygulama ve UI/UX tasarım projeleri.",
    images: [{ url: `${siteConfig.url}/opengraph-image`, alt: "OCS Creative – Portfolyo" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": siteConfig.url },
    { "@type": "ListItem", "position": 2, "name": "Projeler", "item": pageUrl },
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
