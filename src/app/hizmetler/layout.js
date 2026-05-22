import { siteConfig } from "@/config/site";

const pageUrl = `${siteConfig.url}/hizmetler`;

export const metadata = {
  title: "Hizmetlerimiz | Web Tasarım, Mobil App & UI/UX",
  description: "Kurumsal web tasarım, e-ticaret, React Native mobil uygulama, UI/UX tasarım ve teknik SEO hizmetleri. Landing page'den SaaS'a tüm dijital ihtiyaçlarınız için çözüm.",
  keywords: [
    "web tasarım hizmetleri",
    "kurumsal web sitesi fiyatı",
    "mobil uygulama geliştirme",
    "React Native uygulama",
    "UI UX tasarım hizmeti",
    "teknik SEO hizmeti",
    "landing page tasarımı",
    "SaaS geliştirme",
    "e-ticaret sitesi",
    "Sanity CMS entegrasyonu",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Hizmetlerimiz | Web Tasarım, Mobil App & UI/UX",
    description: "Kurumsal web tasarım, e-ticaret, React Native mobil uygulama, UI/UX tasarım ve teknik SEO hizmetleri. Landing page'den SaaS'a tüm dijital ihtiyaçlarınız için çözüm.",
    url: pageUrl,
    type: "website",
    images: [{ url: `${siteConfig.url}/opengraph-image`, width: 1200, height: 630, alt: "OCS Creative – Hizmetlerimiz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hizmetlerimiz | Web Tasarım, Mobil App & UI/UX",
    description: "Kurumsal web tasarım, e-ticaret, React Native mobil uygulama, UI/UX tasarım ve teknik SEO hizmetleri.",
    images: [{ url: `${siteConfig.url}/opengraph-image`, alt: "OCS Creative – Hizmetlerimiz" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": siteConfig.url },
    { "@type": "ListItem", "position": 2, "name": "Hizmetler", "item": pageUrl },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Neden Wordpress değil de Özel Yazılım (Next.js)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wordpress hantaldır, güvensizdir ve sürekli bakım ister. Next.js ise Google, Netflix ve Nike'ın kullandığı teknolojidir. 3 kat daha hızlıdır, hacklenemez ve SEO başarısı çok daha yüksektir.",
      },
    },
    {
      "@type": "Question",
      "name": "Yönetim paneli olacak mı? İçeriği değiştirebilir miyim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kesinlikle. Sanity CMS entegrasyonu sayesinde, kod bilmenize gerek kalmadan metinleri, görselleri, blog yazılarını ve projelerinizi kolayca güncelleyebilirsiniz.",
      },
    },
    {
      "@type": "Question",
      "name": "Ödeme süreci nasıl işliyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Proje başlangıcında %50 ön ödeme alıyoruz. Tasarım onayı ve demo sunumundan sonra, proje tesliminde kalan %50'yi tahsil ediyoruz. Her şey şeffaf ve sözleşmeli ilerler.",
      },
    },
    {
      "@type": "Question",
      "name": "Hosting ve Domain desteği veriyor musunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet. Projelerinizi dünyanın en hızlı sunucu altyapısı olan Vercel üzerinde barındırıyoruz. İlk yıl teknik bakım ve sunucu desteği bizden.",
      },
    },
  ],
};

const serviceListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "OCS Creative Hizmetleri",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "Service", "name": "Landing Page Tasarımı", "provider": { "@id": `${siteConfig.url}/#organization` }, "description": "Tek sayfa, yüksek dönüşümlü web tasarımı." } },
    { "@type": "ListItem", "position": 2, "item": { "@type": "Service", "name": "Kurumsal Web Sitesi", "provider": { "@id": `${siteConfig.url}/#organization` }, "description": "CMS destekli, çok sayfalı kurumsal web sitesi." } },
    { "@type": "ListItem", "position": 3, "item": { "@type": "Service", "name": "Özel Yazılım / SaaS", "provider": { "@id": `${siteConfig.url}/#organization` }, "description": "İşletmeye özel web tabanlı yazılım ve SaaS geliştirme." } },
    { "@type": "ListItem", "position": 4, "item": { "@type": "Service", "name": "Mobil Uygulama Geliştirme", "provider": { "@id": `${siteConfig.url}/#organization` }, "description": "React Native ile iOS ve Android uygulama geliştirme." } },
  ],
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListJsonLd) }}
      />
      {children}
    </>
  );
}
