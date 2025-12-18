"use client";
import { useEffect, useState } from "react";
import { Calendar, Rss, Loader2, ExternalLink, FileText } from "lucide-react";
import TaxCalendar from "@/components/TaxCalendar"; // 🔥 Takvimi ekledik

export default function HomeBlog() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`/api/haberler?t=${Date.now()}`);
        const data = await res.json();
        if (Array.isArray(data)) setNews(data);
      } catch (error) {
        console.error("Haber hatası:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* SOL TARA: HABERLER (Geniş Alan) */}
          <div className="lg:w-2/3">
            <div className="mb-10">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                <Rss size={16} /> Canlı Akış
              </span>
              <h2 className="text-3xl font-playfair font-bold text-secondary">
                Mevzuat & <span className="text-primary">Güncel Haberler</span>
              </h2>
            </div>

            {loading ? (
              <div className="flex justify-center py-10"><Loader2 className="animate-spin text-primary" /></div>
            ) : (
              <div className="grid gap-6">
                {news.map((item, index) => (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col sm:flex-row gap-6 transition-all">
                    <div className="shrink-0">
                       <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                         <FileText size={24} />
                       </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 font-bold">
                        <Calendar size={12} /> {item.date}
                      </div>
                      <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* SAĞ TARAF: VERGİ TAKVİMİ (Dar Alan) */}
          <div className="lg:w-1/3">
             <TaxCalendar />
          </div>

        </div>
      </div>
    </section>
  );
}