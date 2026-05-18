"use client";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "SMMM Yavuz Şahin",
    category: "Kurumsal Web Tasarım & SEO",
    description: "Mali müşavirlik ofisi için güven veren, modern ve mobil uyumlu kurumsal web sitesi. KDV hesaplama araçları ve blog altyapısı ile zenginleştirildi.",
    image: "/referans-smmm.jpg", // 🔥 Bu resmi public klasörüne atmalısın
    tags: ["Web Tasarım", "Next.js", "Tailwind CSS", "SEO", "Kurumsal"],
    link: "https://yavuzsahin.com", // Varsa gerçek link
    color: "from-blue-600 to-blue-900" // Kartın üzerine gelince çıkacak renk
  },
  {
    id: 2,
    title: "Avukat Osman Özkaya", // Burayı gerçek avukat ismiyle değiştir
    category: "Hukuk & Danışmanlık",
    description: "Hukuk bürosu için prestijli, siyah ve altın tonlarının hakim olduğu, randevu odaklı profesyonel web tasarımı.",
    image: "/referans-avukat.jpg", // 🔥 Bu resmi public klasörüne atmalısın
    tags: ["Web Tasarım", "Next.js", "Tailwind CSS", "SEO", "Kurumsal"],
    link: "#",
    color: "from-slate-800 to-slate-900"
  }
];

export default function Projects() {
  return (
    <section id="referanslar" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BAŞLIK */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">PORTFOLYO</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Son <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projelerimiz</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Farklı sektörlerden markalar için geliştirdiğimiz dijital dönüşüm hikayeleri.
          </p>
        </div>

        {/* PROJE KARTLARI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative rounded-2xl overflow-hidden bg-dark-800 border border-dark-700 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Resim Alanı */}
              <div className="relative h-64 overflow-hidden bg-gray-800">
                 {/* Resim Yoksa Gri Kutu Gösterir, Varsa Resmi Gösterir */}
                 <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60 z-10"></div>
                 {/* Buraya geçici olarak renkli kutu koyuyorum, resim ekleyince Image componentini açarsın */}
                 <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                 
                 {/* 🔥 RESİM EKLEYİNCE BURAYI AKTİF ET:*/}
                 <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />

              </div>

              {/* İçerik */}
              <div className="p-8 relative z-20 -mt-10">
                <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 shadow-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <Link href={project.link} className="p-2 bg-dark-700 rounded-full text-white hover:bg-primary transition-colors">
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-dark-900 border border-dark-700 rounded-full text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TÜMÜNÜ GÖR BUTONU */}
        <div className="text-center mt-16">
          <Link href="/referanslar" className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
            Tüm Projeleri İncele <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}