import { client } from "@/sanity/lib/client";
import HomeContent from "@/components/HomeContent";

export const revalidate = 60;

export default async function Home() {
  const latestProjects = await client.fetch(
    `*[_type == "project"] | order(coalesce(publishedAt, _createdAt) desc)[0...2]{
      _id,
      title,
      category,
      mainImage,
      slug
    }`
  );

  return <HomeContent latestProjects={latestProjects} />;
}
