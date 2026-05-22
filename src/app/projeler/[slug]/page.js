import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";
import ProjectDetailContent from "@/components/ProjectDetailContent";

export const revalidate = 3600;

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  title,
  excerpt,
  projectType,
  duration,
  status,
  featured,
  primaryColor,
  clientName,
  websiteUrl,
  tags,
  publishedAt,
  challenge,
  solution,
  stats[] { value, label },
  testimonial {
    quote,
    authorName,
    authorRole,
    authorAvatar
  },
  mainImage { ..., alt },
  gallery[] { ..., alt, caption },
  "category": projectType,
  seoDesc,
  seoKeywords
}`;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{ title, seoDesc, seoKeywords, mainImage, projectType, tags, publishedAt }`,
    { slug }
  );

  if (!project) return { title: "Proje Bulunamadı | OCS Creative" };

  const pageUrl = `${siteConfig.url}/projeler/${slug}`;
  const ogImage = project.mainImage ? urlForImage(project.mainImage).width(1200).height(630).url() : `${siteConfig.url}/opengraph-image`;
  const description = project.seoDesc || `${project.title} projesi — OCS Creative tarafından geliştirilen dijital çözümün detayları ve başarı hikayesi.`;

  return {
    title: `${project.title} | OCS Creative Portfolyo`,
    description,
    keywords: [
      project.title,
      project.projectType,
      ...(project.tags || []),
      ...(project.seoKeywords || []),
      "web tasarım projesi",
      "OCS Creative portfolyo",
    ].filter(Boolean),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${project.title} | OCS Creative`,
      description,
      url: pageUrl,
      type: "article",
      publishedTime: project.publishedAt,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${project.title} – OCS Creative` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | OCS Creative`,
      description,
      images: [{ url: ogImage, alt: `${project.title} – OCS Creative` }],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await client.fetch(PROJECT_QUERY, { slug });

  if (!project) notFound();

  const pageUrl = `${siteConfig.url}/projeler/${slug}`;
  const ogImage = project.mainImage ? urlForImage(project.mainImage).width(1200).height(630).url() : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": siteConfig.url },
      { "@type": "ListItem", "position": 2, "name": "Projeler", "item": `${siteConfig.url}/projeler` },
      { "@type": "ListItem", "position": 3, "name": project.title, "item": pageUrl },
    ],
  };

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "url": pageUrl,
    "creator": {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": siteConfig.name,
    },
    ...(project.clientName && { "author": { "@type": "Organization", "name": project.clientName } }),
    ...(project.publishedAt && { "datePublished": project.publishedAt }),
    ...(ogImage && { "image": ogImage }),
    ...(project.tags?.length && { "keywords": project.tags.join(", ") }),
    ...(project.projectType && { "genre": project.projectType }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <ProjectDetailContent project={project} />
    </>
  );
}
