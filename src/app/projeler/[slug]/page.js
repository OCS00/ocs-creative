import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import ProjectDetailContent from "@/components/ProjectDetailContent";

export const revalidate = 60;

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  title, mainImage, gallery, "category": category, clientName, websiteUrl, tags, publishedAt, challenge, solution, stats, primaryColor
}`;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{ title, seoDesc, mainImage }`,
    { slug }
  );

  if (!project) return { title: "Proje Bulunamadı | OCS Creative" };

  return {
    title: `${project.title} - Proje Detayı | OCS Creative`,
    description: project.seoDesc || `${project.title} projesi detayları ve başarı hikayesi.`,
    openGraph: {
      images: project.mainImage ? [urlForImage(project.mainImage).url()] : [],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await client.fetch(PROJECT_QUERY, { slug });

  if (!project) notFound();

  return <ProjectDetailContent project={project} />;
}