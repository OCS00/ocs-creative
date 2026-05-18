import { client } from "@/sanity/lib/client";
import { siteConfig } from "@/config/site";

export default async function sitemap() {
  const baseUrl = siteConfig.url;

  // 1. Statik Sayfalar
  const routes = [
    "",
    "/hakkimda",
    "/hizmetler",
    "/projeler",
    "/iletisim",
    "/sozlesme",
    "/yasal",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Dinamik Proje Sayfaları (Sanity'den Çekiyoruz)
  const projects = await client.fetch(`*[_type == "project"]{ "slug": slug.current, _updatedAt }`);
  
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projeler/${project.slug}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: "weekly",
    priority: 0.9, 
  }));

  return [...routes, ...projectUrls];
}