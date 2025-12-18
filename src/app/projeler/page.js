"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { ArrowUpRight, Code2, Layout, Smartphone, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Örnek Proje Verileri (Resimler için public klasörüne jpg atman lazım, yoksa renkli kutu çıkar)
const projects = [
  {
    id: 1,
    title: "SMMM Yavuz Şahin",
    category: "Kurumsal Web Tasarım",
    description: "Mali müşavirlik ofisi için güven veren, mobil uyumlu ve KDV hesaplama araçları içeren modern bir web sitesi.",
    tags: ["Next.js", "Tailwind", "SEO"],
    image: "/referans-smmm.jpg", 
    color: "from-blue-600 to-blue-900",
    link: "https://yavuzsahin.com"
  },
  {
    id: 2,
    title: "Av. Osman Özkaya", // Gerçek adını hatırlıyorsan buraya yaz (Örn: Av. Mehmet Yılmaz)
    category: "Kurumsal & Randevu Sistemi",
    description: "Hukuk bürosu için geliştirdiğimiz; müvekkillerin kolayca randevu alabildiği, makalelerin yayınlandığı, SEO uyumlu ve Premium tasarımlı web projesi.",
    tags: ["Next.js", "Tailwind CSS", "Randevu Modülü"],
    image: "/referans-avukat.jpg", // 🔥 Oraya attığın resim burada görünecek
    color: "from-slate-800 to-slate-900", // Siyah/Gri asil renkler
    link: "#" // Eğer canlıdaysa linkini koy, yoksa # kalsın
  },
  {
    id: 3,
    title: "Glory Cord",
    category: "Kurumsal Web Tasarım",
    description: "Moda sektörü için geliştirilen, yüksek dönüşüm odaklı ve hızlı e-ticaret arayüz tasarımı.",
    tags: ["Next.js", "Tailwind", "SEO"],
    image: "/referans-eticaret.jpg",
    color: "from-purple-600 to-purple-900",
    link: "#"
  },
  {
    id: 4,
    title: "Palm Architecture Studio",
    category: "Kurumsal Web Tasarım",
    description: "Peyzaj Tasarım ve Uygulama Hizmetleri",
    tags: ["Next.js", "Tailwind", "SEO"],
    image: "/referans-startup.jpg",
    color: "from-green-600 to-green-900",
    link: "#"
  }
];

export default function ProjectsPage() {
  return (
    <main className="bg-dark-900 min-h-screen text-white">
      <Navbar />

      {/* 1. HERO BÖLÜMÜ */}
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        {/* Arka plan ışıkları */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            PORTFOLYO
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            İmzamızı Attığımız <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dijital Eserler</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Bizim için her proje, anlatılmayı bekleyen yeni bir başarı hikayesidir. İşte gururla sunduğumuz işlerden bazıları.
          </p>
        </div>
      </section>

      {/* 2. FİLTRE BUTONLARI (Görsel Amaçlı) */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
            {['Tümü', 'Web Tasarım', 'E-Ticaret', 'Mobil Uygulama', 'SEO'].map((item, i) => (
                <button key={i} className={`px-6 py-2 rounded-full border text-sm font-bold transition-all ${i === 0 ? 'bg-white text-dark-900 border-white' : 'bg-transparent border-dark-700 text-gray-400 hover:border-primary hover:text-white'}`}>
                    {item}
                </button>
            ))}
        </div>
      </section>

      {/* 3. PROJE GALERİSİ */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-3xl overflow-hidden bg-dark-800 border border-dark-700 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              
              {/* RESİM ALANI (Yükseklik ayarlı) */}
              <div className="relative h-[400px] overflow-hidden">
                 {/* Renkli Overlay (Hover'da kaybolur) */}
                 <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10`}></div>
                 
                 {/* Siyah Gradyan (Yazıların okunması için alt kısım) */}
                 <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent z-20"></div>

                 {/* Resim Placeholder (Eğer resim yoksa renkli kutu) */}
                 <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-40`}></div>
                 
                 {/* 🔥 Eğer gerçek resim varsa alttaki satırı aç: 
                 <Image src={project.image} alt={project.title} fill className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 */}
                 
                 {/* Kategorisi (Sol üst köşe) */}
                 <div className="absolute top-6 left-6 z-30">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                        {project.category}
                    </span>
                 </div>
              </div>

              {/* İÇERİK ALANI (Kartın Altı) */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                    {project.title}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </h3>
                <p className="text-gray-300 mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                </p>
                
                {/* Etiketler */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-bold text-gray-400 bg-dark-900/80 px-3 py-1 rounded-lg border border-dark-600">
                            #{tag}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Daha Fazla Yükle Butonu */}
        <div className="text-center mt-16">
            <button className="px-8 py-4 bg-dark-800 border border-dark-700 rounded-full text-white font-bold hover:bg-dark-700 transition-all shadow-lg hover:shadow-primary/20">
                Daha Fazla Proje Yükle
            </button>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}