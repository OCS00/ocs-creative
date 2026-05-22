import { client } from "@/sanity/lib/client";
import HomeContent from "@/components/HomeContent";
import { siteConfig } from "@/config/site";

export const revalidate = 60;

export const metadata = {
  title: "Web Tasarım & Yazılım Ajansı | OCS Creative",
  description: "İstanbul'dan dünyaya; Next.js, React ve modern teknolojilerle markalar için kurumsal web sitesi, mobil uygulama ve UI/UX tasarımı yapıyoruz.",
  keywords: [
    ...siteConfig.keywords,
    "web tasarım İstanbul",
    "next.js web sitesi",
    "butik dijital ajans",
    "kurumsal web tasarım",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Web Tasarım & Yazılım Ajansı | OCS Creative",
    description: "İstanbul'dan dünyaya; Next.js, React ve modern teknolojilerle markalar için kurumsal web sitesi, mobil uygulama ve UI/UX tasarımı yapıyoruz.",
    url: siteConfig.url,
    type: "website",
  },
  twitter: {
    title: "Web Tasarım & Yazılım Ajansı | OCS Creative",
    description: "İstanbul'dan dünyaya; Next.js, React ve modern teknolojilerle markalar için kurumsal web sitesi, mobil uygulama ve UI/UX tasarımı yapıyoruz.",
  },
};

export default async function Home() {
  const latestProjects = await client.fetch(
    `*[_type == "project" && status == "published"] | order(coalesce(order, publishedAt, _createdAt) asc)[0...2]{
      _id,
      title,
      projectType,
      mainImage,
      slug
    }`
  );

  return <HomeContent latestProjects={latestProjects} />;
}
