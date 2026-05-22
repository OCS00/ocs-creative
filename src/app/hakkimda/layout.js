import { siteConfig } from "@/config/site";

const pageUrl = `${siteConfig.url}/hakkimda`;

export const metadata = {
  title: "Hakkımızda | Dijitalin Mimarlarıyla Tanışın",
  description: "OCS Creative; butik yaklaşımı, global standartları ve pixel-perfect takıntısıyla markalar için terzi usulü dijital çözümler üreten İstanbul merkezli bir yazılım stüdyosudur.",
  keywords: [
    "OCS Creative hakkında",
    "dijital ajans İstanbul",
    "butik yazılım stüdyosu",
    "web tasarım ekibi",
    "Next.js geliştirici",
    "kurumsal kimlik tasarım",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Hakkımızda | Dijitalin Mimarlarıyla Tanışın",
    description: "OCS Creative; butik yaklaşımı, global standartları ve pixel-perfect takıntısıyla markalar için terzi usulü dijital çözümler üreten İstanbul merkezli bir yazılım stüdyosudur.",
    url: pageUrl,
    type: "website",
    images: [{ url: `${siteConfig.url}/opengraph-image`, width: 1200, height: 630, alt: "OCS Creative – Hakkımızda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | Dijitalin Mimarlarıyla Tanışın",
    description: "OCS Creative; butik yaklaşımı, global standartları ve pixel-perfect takıntısıyla markalar için terzi usulü dijital çözümler üreten İstanbul merkezli bir yazılım stüdyosudur.",
    images: [{ url: `${siteConfig.url}/opengraph-image`, alt: "OCS Creative – Hakkımızda" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": siteConfig.url },
    { "@type": "ListItem", "position": 2, "name": "Hakkımızda", "item": pageUrl },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": `Neden büyük bir ajans yerine ${siteConfig.name}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Büyük ajanslarda projeniz stajyerlere devredilebilir veya iletişim kopuklukları yaşanabilir. ${siteConfig.name}'de ise doğrudan 'mimar' ile çalışırsınız. Aracı yok, kulaktan kulağa değişen briefler yok. Vizyonunuz, kayıpsız bir şekilde ve çok daha hızlı hayata geçer.`,
      },
    },
    {
      "@type": "Question",
      "name": "Teknoloji olarak ne kullanıyorsunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sektörün en ileri teknolojileri olan Next.js, React, Tailwind CSS ve Sanity.io kullanıyoruz. Bu, sitenizin sadece bugün değil, 5 yıl sonra bile modern, hızlı ve güvenli kalmasını sağlar. Wordpress gibi hantal yapılar kullanmıyoruz.",
      },
    },
    {
      "@type": "Question",
      "name": "Proje süreci nasıl işliyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tanışma ve analiz ile başlıyoruz. Ardından stratejik planlama ve tasarım (UI/UX) aşamasına geçiyoruz. Onayınızla birlikte kodlama (Development) başlar ve son olarak test/yayın süreçleriyle projenizi dünyaya açarız.",
      },
    },
    {
      "@type": "Question",
      "name": "Proje bittikten sonra destek veriyor musunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kesinlikle. Dijital dünya sürekli değişiyor. Projenizi teslim ettikten sonra da teknik bakım, güncelleme ve danışmanlık hizmetlerimizle yanınızdayız. Bizimle çalışmak tek seferlik bir iş değil, uzun vadeli bir ortaklıktır.",
      },
    },
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
      {children}
    </>
  );
}
