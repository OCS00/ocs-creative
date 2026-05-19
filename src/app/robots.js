import { siteConfig } from "@/config/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}