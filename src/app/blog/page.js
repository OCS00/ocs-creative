"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";
import { Calendar, Tag, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* 🔥 ÜST BAŞLIK ALANI: bg-gray-50 YERİNE bg-blue-900 YAPTIK */}
      <section className="bg-blue-900 py-24 text-white border-b border-blue-800 relative overflow-hidden">
         {/* Hafif bir arka plan efekti */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-blue-200 font-bold tracking-widest uppercase text-xs mb-3 block">
            BİLGİ BANKASI
          </span>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Mali Müşavirlik Blogu
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Vergi mevzuatı, şirket kuruluş süreçleri ve devlet teşvikleri hakkında uzman görüşleri ve güncel makaleler.
          </p>
        </div>
      </section>

      {/* Blog Listesi */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                
                {/* Resim */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-900 flex items-center gap-1 shadow-sm">
                    <Tag size={12} /> {post.category}
                  </div>
                </div>

                {/* İçerik */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-bold">
                    <Calendar size={14} /> {post.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.summary}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="mt-auto inline-flex items-center text-blue-900 font-bold text-sm hover:underline"
                  >
                    Devamını Oku <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL (Değişiklik yok, aynı kalıyor) */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300" onClick={() => setSelectedPost(null)}>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative animate-in slide-in-from-bottom-10 duration-300" onClick={e => e.stopPropagation()}>
            
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-gray-500 hover:text-red-600 p-2 rounded-full transition-colors z-10 shadow-sm"
            >
              <X size={20} />
            </button>

            <div className="relative h-64 sm:h-80">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                 <h2 className="text-3xl font-bold text-white font-playfair leading-tight">{selectedPost.title}</h2>
              </div>
            </div>
            
            <div className="p-8 sm:p-12">
               <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-a:text-blue-900">
                  <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
               </div>
               
               <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                 <div className="flex items-center gap-4 text-sm text-gray-400 font-bold">
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.category}</span>
                 </div>
                 <Link 
                   href="/iletisim"
                   className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
                 >
                   Danışmanlık Alın
                 </Link>
               </div>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}