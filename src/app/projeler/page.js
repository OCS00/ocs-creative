import React from "react";
import { client } from "@/sanity/lib/client";
import ProjectsGrid from "@/components/ProjectsGrid"; 
import { CheckCircle2, Award, Zap, Users } from "lucide-react";
import { siteConfig } from "@/config/site"; // ✅ Config Bağlantısı

export const metadata = {
  title: `Projelerimiz & Başarı Hikayeleri | ${siteConfig.name}`,
  description: "Markalar için geliştirdiğimiz web tasarım, yazılım ve mobil uygulama projelerimizi inceleyin.",
};

async function getProjects() {
  const query = `*[_type == "project"] | order(publishedAt desc){
    _id,
    title,
    category,
    status,
    mainImage,
    tags,
    slug
  }`;
  return await client.fetch(query);
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-indigo-500/30 relative">
      
      
      {/* ARKA PLAN DOKUSU */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="relative z-10">
        
        {/* --- 1. HERO BÖLÜMÜ --- */}
        <section className="pt-48 pb-20 px-6 text-center max-w-5xl mx-auto">
           {/* Etiket */}
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-400 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              PORTFOLYO & REFERANSLAR
           </div>

           <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.95]">
              Söz Değil, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-600">
                İş Üretiyoruz.
              </span>
           </h1>
           
           <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
             Her proje, müşterimizin vizyonu ile bizim teknolojik yeteneklerimizin birleşimidir. 
             Sadece güzel görünen değil, <strong>ölçülebilir sonuçlar</strong> üreten dijital varlıklar tasarlıyoruz.
           </p>

           {/* Mini İstatistikler */}
           <div className="flex flex-wrap justify-center gap-8 md:gap-20 border-t border-white/10 pt-12">
              {[
                  { label: "Teslim Edilen Proje", value: "50+", icon: Award },
                  { label: "Müşteri Memnuniyeti", value: "%100", icon: Users },
                  { label: "Sektör Deneyimi", value: "5 Yıl", icon: Zap }
              ].map((stat, i) => (
                  <div key={i} className="text-center group">
                      <div className="flex items-center justify-center gap-2 text-3xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                        <stat.icon size={24} className="opacity-50"/> {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
              ))}
           </div>
        </section>

        {/* --- 2. PROJE IZGARASI --- */}
        <ProjectsGrid initialProjects={projects} />
        
        {/* --- 3. METODOLOJİ --- */}
        <section className="py-32 border-t border-white/10 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Başarıyı Şansa <br/> <span className="text-gray-600">Bırakmıyoruz.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                        Her projenin arkasında titizlikle kurgulanmış bir <strong>"{siteConfig.name} Standartları"</strong> süreci vardır. 
                        Veri odaklı analiz, modern tasarım prensipleri ve hatasız kodlama ile sürdürülebilir başarıyı hedefliyoruz.
                    </p>
                    
                    <ul className="space-y-6">
                        {[
                            { title: "Kapsamlı Sektör Analizi", desc: "Rakiplerinizi inceliyor, sizi öne geçirecek fırsatları belirliyoruz." },
                            { title: "Kullanıcı Deneyimi (UX) Tasarımı", desc: "Ziyaretçilerinizi müşteriye dönüştüren psikolojik akışlar kurguluyoruz." },
                            { title: "Clean Code & Performans", desc: "Google'ın sevdiği, temiz ve hızlı çalışan kod mimarisi kuruyoruz." },
                            { title: "Detaylı Test ve Optimizasyon", desc: "Yayına almadan önce tüm cihazlarda pixel-perfect kontroller yapıyoruz." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <div className="mt-1 bg-indigo-500/10 p-2 rounded-lg h-fit text-indigo-400">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Soyut Görsel Alan */}
                <div className="relative h-[500px] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="text-center p-8 relative z-10">
                        <div className="text-7xl font-black text-white/5 mb-4 group-hover:text-indigo-500/20 transition-colors duration-500">PROCESS</div>
                        <p className="text-indigo-400 font-mono text-sm tracking-widest border border-indigo-500/30 px-4 py-2 rounded-full inline-block bg-indigo-900/10">
                            WORKFLOW_INITIATED
                        </p>
                    </div>
                </div>
            </div>
        </section>

      
      </div>
    </main>
  );
}