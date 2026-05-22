import { client } from "@/sanity/lib/client";
import { siteConfig } from "@/config/site";

export default async function sitemap() {
  const baseUrl = siteConfig.url;

  // Statik sayfalar (noindex olanlar — sozlesme — dahil edilmedi)
  const staticRoutes = [
    { route: "", priority: 1.0, changeFrequency: "weekly" },
    { route: "/hizmetler", priority: 0.9, changeFrequency: "monthly" },
    { route: "/projeler", priority: 0.9, changeFrequency: "weekly" },
    { route: "/hakkimda", priority: 0.8, changeFrequency: "monthly" },
    { route: "/iletisim", priority: 0.8, changeFrequency: "monthly" },
    { route: "/yasal", priority: 0.3, changeFrequency: "yearly" },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  // Dinamik proje sayfaları (Sanity'den)
  const projects = await client.fetch(`*[_type == "project"]{ "slug": slug.current, _updatedAt }`);

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projeler/${project.slug}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...projectUrls];
}
