import { blogPosts } from "@/data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Tag } from "lucide-react";

// Statik Parametreler (Build zamanı sayfaları oluşturmak için)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Üst Bilgiler */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
            <span className="flex items-center gap-1 text-primary font-medium"><Tag size={16} /> {post.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-playfair text-secondary leading-tight mb-8">
            {post.title}
          </h1>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Makale İçeriği */}
        <div 
          className="prose prose-lg prose-blue max-w-none text-secondary-light leading-loose"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Alt Navigasyon */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
          <Link href="/blog" className="flex items-center gap-2 text-gray-600 hover:text-primary font-bold transition-colors">
            <ArrowLeft size={20} /> Blog Listesine Dön
          </Link>
        </div>

      </article>

      <Footer />
    </main>
  );
}