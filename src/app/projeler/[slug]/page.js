import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
// Az önce oluşturduğumuz görsel bileşeni çağırıyoruz
import ProjectDetailContent from "@/components/ProjectDetailContent";

// 1. DİNAMİK SEO AYARLARI (Sunucuda Çalışır)
export async function generateMetadata({ params }) {
  const { slug } = await params; // Next.js 15+ için params await edilmeli
  
  const query = `*[_type == "project" && slug.current == $slug][0]{ title, seoDesc, mainImage }`;
  const project = await client.fetch(query, { slug });

  if (!project) return { title: "Proje Bulunamadı | OCS Creative" };

  return {
    title: `${project.title} - Proje Detayı | OCS Creative`,
    description: project.seoDesc || `${project.title} projesi detayları ve başarı hikayesi.`,
    openGraph: {
      images: project.mainImage ? [urlForImage(project.mainImage).url()] : [],
    },
  };
}

// 2. SAYFA GÖRÜNÜMÜ
export default function ProjectPage() {
  // Burası sunucu tarafı. Client bileşeni çağırıyoruz.
  // URL parametresini (slug) client bileşen kendisi 'useParams' ile alacak.
  return <ProjectDetailContent />;
}