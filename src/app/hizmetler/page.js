"use client";
import { PortableText } from '@portabletext/react';
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta"; 
import { client } from "@/sanity/lib/client"; 
import * as LucideIcons from "lucide-react"; 
import { Check, X, Zap, Layers, ShieldCheck, BarChart3, ChevronRight, Star, Search, PenTool, Code, Rocket } from "lucide-react";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      const query = `*[_type == "service"]{ title, description, iconName }`;
      const data = await client.fetch(query);
      setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-indigo-500/30">
      <Navbar />

      {/* 1. HERO ALANI */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">
            OCS CREATIVE
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Markanız İçin <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Uçtan Uca Çözümler.</span>
          </h1>
          <div className="text-gray-400 text-sm leading-relaxed space-y-2">
                <PortableText 
                    value={service.description} 
                    components={{
                            // Müşteri 'Bold' yaparsa rengi beyaz olsun diyoruz
                            marks: {
                            strong: ({children}) => <strong className="text-white font-bold">{children}</strong>
                             },
                             // Müşteri madde işareti koyarsa düzgün görünsün
                            list: {
                            bullet: ({children}) => <ul className="list-disc pl-4 space-y-1">{children}</ul>,
                        }
                    }}
                />
            </div>
        </div>
      </section>

      {/* 2. NEDEN BİZ? (GÜVEN BANDI) - YENİ */}
      <section className="py-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
                <div className="text-3xl font-bold text-white">%100</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Müşteri Memnuniyeti</div>
            </div>
            <div className="space-y-2">
                <div className="text-3xl font-bold text-white">7/24</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Kesintisiz Sistem</div>
            </div>
            <div className="space-y-2">
                <div className="text-3xl font-bold text-white">Hızlı</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Teslimat Süreci</div>
            </div>
            <div className="space-y-2">
                <div className="text-3xl font-bold text-white">SEO</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Uyumlu Altyapı</div>
            </div>
        </div>
      </section>

      {/* 3. DİNAMİK HİZMETLER (SANITY) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Verdiğimiz Hizmetler</h2>
                <p className="text-gray-400">Modern teknolojiler ve yaratıcı tasarım anlayışıyla sunduğum profesyonel çözümler.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.length > 0 ? (
                    services.map((service, index) => {
                        const IconComponent = LucideIcons[service.iconName] || LucideIcons.HelpCircle;
                        return (
                        <div key={index} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                <IconComponent size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                        )
                    })
                ) : (
                    <div className="col-span-3 text-center text-gray-500 py-10 flex flex-col items-center">
                        <div className="animate-spin w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full mb-2"></div>
                        Veriler yükleniyor...
                    </div>
                )}
            </div>
        </div>
      </section>

      {/* 4. ÇALIŞMA SÜRECİ (ADIM ADIM) - YENİ EKLENDİ! */}
      <section className="py-20 px-6 bg-[#0f0f0f] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase">Nasıl Çalışıyoruz?</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">4 Adımda Proje Süreci</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Adım 1 */}
                <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition group">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center font-bold text-indigo-400 shadow-lg">1</div>
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                        <Search size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Analiz & Plan</h3>
                    <p className="text-sm text-gray-400">Sizi dinliyor, ihtiyaçlarınızı belirliyor ve proje haritasını çıkarıyoruz.</p>
                </div>

                {/* Adım 2 */}
                <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition group">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center font-bold text-purple-400 shadow-lg">2</div>
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                        <PenTool size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">UI/UX Tasarım</h3>
                    <p className="text-sm text-gray-400">Markanıza uygun, modern ve kullanıcı dostu arayüzler tasarlıyoruz.</p>
                </div>

                {/* Adım 3 */}
                <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-pink-500/30 transition group">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center font-bold text-pink-400 shadow-lg">3</div>
                    <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400 mb-4">
                        <Code size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Kodlama (Dev)</h3>
                    <p className="text-sm text-gray-400">Next.js ve modern teknolojilerle sitenizi hızlı ve güvenli kodluyoruz.</p>
                </div>

                {/* Adım 4 */}
                <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-green-500/30 transition group">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center font-bold text-green-400 shadow-lg">4</div>
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 mb-4">
                        <Rocket size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Test & Yayın</h3>
                    <p className="text-sm text-gray-400">Son kontrolleri yapıp, onayınızla birlikte projenizi yayına alıyoruz.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. FİYAT PAKETLERİ */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Hizmet Paketleri</h2>
                <p className="text-gray-400">İhtiyacınıza en uygun çözümü seçin.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
                
                 {/* BRONZ */}
                 <div className="relative p-8 rounded-3xl bg-[#0f0f0f] border border-orange-700/30 hover:border-orange-500/50 transition duration-300 flex flex-col h-full group">
                    <div className="mb-4">
                        <div className="w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">BRONZ PAKET</h3>
                        <p className="text-gray-400 text-sm mt-1">Dijital dünyaya hızlı giriş.</p>
                    </div>
                    <div className="text-4xl font-bold text-white mb-6">₺7.500<span className="text-sm font-normal text-gray-500">/tek sefer</span></div>
                    <div className="h-px w-full bg-white/10 mb-6"></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-orange-500"/> Tek Sayfa (Landing)</li>
                        <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-orange-500"/> Mobil Uyumlu</li>
                        <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-orange-500"/> Temel SEO</li>
                        <li className="flex items-center gap-3 text-gray-500 text-sm line-through"><X size={18} /> Yönetim Paneli</li>
                    </ul>
                    <button onClick={() => setShowComparison(true)} className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition border border-white/10">Özellikleri İncele</button>
                </div>

                {/* GÜMÜŞ */}
                <div className="relative p-8 rounded-3xl bg-[#141414] border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 transform md:-translate-y-6 flex flex-col h-full z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg flex items-center gap-2">
                        <Star size={12} fill="white" /> En Çok Tercih Edilen
                    </div>
                    <div className="mb-4">
                        <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-4">
                            <Layers size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">GÜMÜŞ PAKET</h3>
                        <p className="text-indigo-200 text-sm mt-1">Kurumsal firmalar için ideal.</p>
                    </div>
                    <div className="text-4xl font-bold text-white mb-6">₺15.000<span className="text-sm font-normal text-gray-500">/tek sefer</span></div>
                    <div className="h-px w-full bg-indigo-500/30 mb-6"></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-indigo-400"/> <strong>5-8 Sayfa</strong></li>
                        <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-indigo-400"/> <strong>Yönetim Paneli</strong></li>
                        <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-indigo-400"/> Blog Modülü</li>
                        <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-indigo-400"/> Google Kaydı</li>
                    </ul>
                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold transition shadow-lg shadow-indigo-500/25 mb-4">Hemen Başlayalım</button>
                    <button onClick={() => setShowComparison(true)} className="text-xs text-center text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-4">Detaylı karşılaştırma</button>
                </div>

                {/* ALTIN */}
                <div className="relative p-8 rounded-3xl bg-[#0f0f0f] border border-yellow-600/30 hover:border-yellow-500/50 transition duration-300 flex flex-col h-full group">
                     <div className="mb-4">
                        <div className="w-12 h-12 bg-yellow-900/20 rounded-lg flex items-center justify-center text-yellow-500 mb-4 group-hover:scale-110 transition">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">ALTIN PAKET</h3>
                        <p className="text-gray-400 text-sm mt-1">Sınır tanımayan özellikler.</p>
                    </div>
                    <div className="text-4xl font-bold text-white mb-6">Teklif Al</div>
                    <div className="h-px w-full bg-white/10 mb-6"></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-yellow-500"/> Sınırsız Sayfa</li>
                        <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-yellow-500"/> Çoklu Dil (TR/EN)</li>
                        <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-yellow-500"/> Özel Animasyonlar</li>
                        <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={18} className="text-yellow-500"/> 1 Yıl VIP Destek</li>
                    </ul>
                    <button onClick={() => setShowComparison(true)} className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition border border-white/10">Özellikleri İncele</button>
                </div>

            </div>

             {/* Tablo Butonu */}
             <div className="text-center">
                <button onClick={() => setShowComparison(true)} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition text-white font-semibold group">
                    <BarChart3 size={18} className="text-indigo-400"/> Tüm Özellikleri Tabloda Karşılaştır <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
            </div>
        </div>
      </section>

      {/* MODAL & SSS KISMI (DEĞİŞMEDİ, AYNI KALDI) */}
      {showComparison && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-2 md:p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowComparison(false)}></div>
            <div className="relative w-full max-w-6xl bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden h-[90vh] flex flex-col animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#161616]">
                    <div><h3 className="text-xl md:text-2xl font-bold text-white">Paket Karşılaştırması</h3><p className="text-sm text-gray-400">Tüm teknik detaylar.</p></div>
                    <button onClick={() => setShowComparison(false)} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition hover:rotate-90"><X size={24} className="text-gray-400" /></button>
                </div>
                <div className="overflow-auto flex-1 p-0 md:p-6">
                    <table className="w-full text-left border-collapse">
                        <thead className="sticky top-0 bg-[#111] z-10 shadow-lg">
                            <tr>
                                <th className="p-4 text-gray-400 font-medium w-1/4 bg-[#111]">Özellikler</th>
                                <th className="p-4 text-orange-400 font-bold text-center w-1/4 bg-[#111] border-b-2 border-orange-500/50">BRONZ</th>
                                <th className="p-4 text-indigo-400 font-bold text-center w-1/4 bg-[#1a1a1a] border-b-2 border-indigo-500 relative">GÜMÜŞ <span className="absolute top-1 right-2 text-[10px] bg-indigo-600 text-white px-2 rounded-full hidden md:inline-block">Önerilen</span></th>
                                <th className="p-4 text-yellow-400 font-bold text-center w-1/4 bg-[#111] border-b-2 border-yellow-500/50">ALTIN</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-white/5">
                            <tr className="bg-white/[0.02]"><td colSpan="4" className="p-3 text-xs font-bold text-gray-500 uppercase tracking-widest pl-4">Genel Yapı</td></tr>
                            <tr className="hover:bg-white/[0.02]"><td className="p-4 text-gray-300">Sayfa Sayısı</td><td className="text-center text-gray-400">Tek Sayfa</td><td className="text-center text-white bg-white/[0.02] font-semibold">5-8 Sayfa</td><td className="text-center text-white font-bold">Sınırsız</td></tr>
                            <tr className="hover:bg-white/[0.02]"><td className="p-4 text-gray-300">Mobil Uyum</td><td className="text-center"><Check size={18} className="mx-auto text-green-500"/></td><td className="text-center bg-white/[0.02]"><Check size={18} className="mx-auto text-green-500"/></td><td className="text-center"><Check size={18} className="mx-auto text-green-500"/></td></tr>
                            <tr className="bg-white/[0.02]"><td colSpan="4" className="p-3 text-xs font-bold text-gray-500 uppercase tracking-widest pl-4">Yönetim & İçerik</td></tr>
                            <tr className="hover:bg-white/[0.02]"><td className="p-4 text-gray-300">Yönetim Paneli (CMS)</td><td className="text-center"><X size={18} className="mx-auto text-gray-600"/></td><td className="text-center bg-white/[0.02]"><Check size={18} className="mx-auto text-green-500"/></td><td className="text-center"><Check size={18} className="mx-auto text-green-500"/></td></tr>
                            <tr className="hover:bg-white/[0.02]"><td className="p-4 text-gray-300">Blog Modülü</td><td className="text-center"><X size={18} className="mx-auto text-gray-600"/></td><td className="text-center bg-white/[0.02]"><Check size={18} className="mx-auto text-green-500"/></td><td className="text-center"><Check size={18} className="mx-auto text-green-500"/></td></tr>
                            <tr className="hover:bg-white/[0.02]"><td className="p-4 text-gray-300">Çoklu Dil</td><td className="text-center"><X size={18} className="mx-auto text-gray-600"/></td><td className="text-center bg-white/[0.02] text-gray-500">Opsiyonel</td><td className="text-center"><Check size={18} className="mx-auto text-green-500"/></td></tr>
                            <tr className="bg-white/[0.02]"><td colSpan="4" className="p-3 text-xs font-bold text-gray-500 uppercase tracking-widest pl-4">Destek</td></tr>
                            <tr className="hover:bg-white/[0.02]"><td className="p-4 text-gray-300">Teknik Destek</td><td className="text-center text-gray-400">1 Ay</td><td className="text-center bg-white/[0.02] text-white">6 Ay</td><td className="text-center text-yellow-400 font-bold">1 Yıl VIP</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-6 border-t border-white/10 bg-[#161616] flex justify-end"><button onClick={() => setShowComparison(false)} className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition">Kapat</button></div>
            </div>
        </div>
      )}

      {/* 6. SSS */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-white/5 mt-10">
        <h2 className="text-3xl font-bold text-center mb-10">Sıkça Sorulan Sorular</h2>
        <div className="space-y-4">
            <details className="group bg-white/5 p-6 rounded-2xl cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-lg list-none">Ödeme nasıl işliyor?<span className="transition group-open:rotate-180"><Check className="rotate-45" /></span></summary>
                <p className="text-gray-400 mt-4 leading-relaxed">%40 ön ödeme, kalanı teslimatta.</p>
            </details>
            <details className="group bg-white/5 p-6 rounded-2xl cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-lg list-none">Teslim süresi?<span className="transition group-open:rotate-180"><Check className="rotate-45" /></span></summary>
                <p className="text-gray-400 mt-4 leading-relaxed">Landing 3-5 gün, Kurumsal 7-14 gün.</p>
            </details>
             <details className="group bg-white/5 p-6 rounded-2xl cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-lg list-none">Hosting dahil mi?<span className="transition group-open:rotate-180"><Check className="rotate-45" /></span></summary>
                <p className="text-gray-400 mt-4 leading-relaxed">İlk yıl hosting hediye. Domain size ait.</p>
            </details>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}