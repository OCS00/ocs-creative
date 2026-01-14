"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, Lock, ShieldCheck, FileWarning, ScrollText } from "lucide-react";
import { siteConfig } from "@/config/site"; // ✅ Config Bağlantısı

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("hizmet");
  const currentYear = new Date().getFullYear();

  const renderContent = () => {
    switch (activeTab) {
      case "hizmet":
        return (
          <article className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base font-light">
            <div className="border-b border-white/10 pb-4 mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">Mesafeli Satış ve Hizmet Sözleşmesi</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Doküman No: OCS-LEGAL-{currentYear}/01 | Sürüm: 2.4</p>
            </div>

            <div className="bg-red-900/10 border-l-4 border-red-600 p-4 rounded-r-lg mb-8">
              <h4 className="text-red-500 font-bold text-sm mb-2 flex items-center gap-2">
                <FileWarning size={16} /> YASAL UYARI: CAYMA HAKKI İSTİSNASI
              </h4>
              <p className="text-xs text-gray-400">
                27.11.2014 tarihli ve 29188 sayılı Resmi Gazete'de yayımlanan Mesafeli Sözleşmeler Yönetmeliği'nin <strong>15. Maddesi (ğ) bendi</strong> uyarınca; "Elektronik ortamda anında ifa edilen hizmetler" cayma hakkının istisnaları kapsamındadır. Bu sebeple, proje onayı verilip hizmet süreci başladıktan sonra <strong>ücret iadesi yasal olarak mümkün değildir.</strong>
              </p>
            </div>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">MADDE 1: TARAFLAR VE KONU</h3>
              <p>
                İşbu sözleşme, {siteConfig.name} (bundan böyle "YÜKLENİCİ" olarak anılacaktır) ile dijital hizmet alımı yapan gerçek veya tüzel kişi ("MÜŞTERİ") arasında, web tasarım, yazılım geliştirme ve dijital danışmanlık hizmetlerinin kapsamını, ödeme şartlarını ve hukuki sorumlulukları belirlemek amacıyla akdedilmiştir.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">MADDE 2: FİKRİ MÜLKİYET VE LİSANS HAKLARI</h3>
              <p>
                <strong>2.1. Mülkiyetin Saklı Tutulması:</strong> Proje kapsamında üretilen tüm arayüz tasarımları, kaynak kodlar (Source Code), veritabanı şemaları ve grafiksel materyallerin mülkiyeti, proje bedelinin <strong>tamamı (%100'ü)</strong> YÜKLENİCİ'ye ödenene kadar YÜKLENİCİ'ye aittir.
              </p>
              <p>
                <strong>2.2. Lisans Devri:</strong> Ödemenin tamamlanmasını müteakip, YÜKLENİCİ ilgili projenin "Kullanım Hakkını" (Lisans) MÜŞTERİ'ye devreder. Ancak bu devir, YÜKLENİCİ'nin yazdığı temel kod kütüphanelerini başka projelerde kullanma hakkını kısıtlamaz.
              </p>
              <p>
                <strong>2.3. İzinsiz Kullanım:</strong> Ödeme tamamlanmadan projenin kaynak kodlarının kopyalanması, başka bir sunucuya taşınması veya tersine mühendislik (Reverse Engineering) işlemine tabi tutulması, 5846 sayılı Fikir ve Sanat Eserleri Kanunu uyarınca suç teşkil eder ve YÜKLENİCİ'nin tazminat hakkı saklıdır.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">MADDE 3: ÖDEME VE TESLİMAT ŞARTLARI</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li><strong>3.1. Ön Ödeme (Avans):</strong> Proje başlangıcında, toplam hizmet bedelinin %50'si peşin olarak tahsil edilir. Avans ödenmeden iş takvimi başlatılmaz.</li>
                <li><strong>3.2. Final Ödemesi:</strong> Proje, YÜKLENİCİ'nin test sunucularında (Demo Ortamı) MÜŞTERİ onayına sunulur. MÜŞTERİ onayı ve kalan %50 bakiyenin ödenmesi şartıyla proje canlı sunucuya (Production) taşınır.</li>
                <li><strong>3.3. Temerrüt:</strong> Ödemesi 7 (yedi) iş gününden fazla geciken projelerde, YÜKLENİCİ hizmeti askıya alma, erişimi kısıtlama ve yasal faiz işletme hakkına sahiptir.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">MADDE 4: REVİZYON VE EK TALEPLER</h3>
              <p>
                YÜKLENİCİ, proje süresince MÜŞTERİ'ye her etapta (Tasarım ve Kodlama) makul sınırlar dahilinde <strong>2 (iki) tur ücretsiz revizyon</strong> hakkı tanır. Onaylanmış tasarımlar üzerinde talep edilen köklü değişiklikler, yeni sayfa eklemeleri veya sistemin çalışma mantığını değiştiren talepler "Ek İş" (Change Request) olarak değerlendirilir ve ek adam/saat ücreti ile faturalandırılır.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">MADDE 5: MÜCBİR SEBEPLER</h3>
              <p>
                Doğal afet, savaş, siber saldırı, genel internet altyapı arızaları veya yasal düzenlemeler gibi YÜKLENİCİ'nin kontrolü dışında gelişen durumlar "Mücbir Sebep" sayılır. Bu durumlarda proje teslim süresinin uzamasından YÜKLENİCİ sorumlu tutulamaz.
              </p>
            </section>
          </article>
        );
      case "gizlilik":
        return (
          <article className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base font-light">
             <div className="border-b border-white/10 pb-4 mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">KVKK Aydınlatma Metni ve Gizlilik Politikası</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Veri Sorumlusu: {siteConfig.name}</p>
            </div>

             <section className="space-y-4">
               <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">1. VERİ SORUMLUSU VE İŞLEME AMACI</h3>
               <p>
                 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca; web sitemiz aracılığıyla tarafımıza ilettiğiniz kimlik (Ad, Soyad) ve iletişim (E-posta, Telefon) verileriniz; teklif süreçlerinin yönetilmesi, faturalandırma işlemlerinin yapılması ve müşteri ilişkilerinin sürdürülmesi amacıyla sınırlı ve ölçülü olarak işlenmektedir.
               </p>
             </section>

             <section className="space-y-4">
               <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">2. KİŞİSEL VERİLERİN TOPLANMA YÖNTEMİ</h3>
               <p>
                 Kişisel verileriniz, web sitemizdeki "İletişim Formu", "Teklif Al Formu" veya doğrudan e-posta/telefon yoluyla elektronik ortamda toplanmaktadır. Ayrıca, site trafiğini analiz etmek amacıyla <strong>Google Analytics</strong> ve <strong>Vercel Analytics</strong> çerezleri (Cookies) aracılığıyla anonim veriler toplanmaktadır.
               </p>
             </section>

             <section className="space-y-4">
               <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">3. VERİLERİN AKTARILMASI</h3>
               <p>
                 Toplanan kişisel verileriniz; kanunen yetkili kamu kurumları (Vergi Dairesi, Emniyet, Mahkemeler) haricinde hiçbir üçüncü kişi veya kurumla paylaşılmaz, ticari amaçla satılmaz veya kiralanmaz. Hosting ve veritabanı hizmeti aldığımız 3. taraf sağlayıcılar (Sanity.io, Vercel Inc.) ile yapılan sözleşmelerde veri güvenliği taahhüdü alınmıştır.
               </p>
             </section>

             <section className="space-y-4">
               <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">4. İLGİLİ KİŞİNİN HAKLARI (KVKK MADDE 11)</h3>
               <p>KVKK'nın 11. maddesi uyarınca veri sahibi olarak;</p>
               <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                  <li>Verilerin düzeltilmesini veya silinmesini isteme,</li>
                  <li>Aleyhinize bir sonucun ortaya çıkmasına itiraz etme hakkına sahipsiniz.</li>
               </ul>
               <p className="mt-2 text-sm text-gray-500">Bu haklarınızı kullanmak için <a href={`mailto:${siteConfig.contact.email}`} className="text-indigo-400 hover:underline">{siteConfig.contact.email}</a> adresine başvurabilirsiniz.</p>
             </section>
          </article>
        );
      case "kullanim":
        return (
           <article className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base font-light">
             <div className="border-b border-white/10 pb-4 mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">Kullanım Koşulları ve Yasal Sorumluluk Reddi</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Yürürlük: Tüm Ziyaretçiler İçin Geçerlidir</p>
            </div>
             
             <section className="space-y-4">
               <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">1. GENEL HÜKÜMLER</h3>
               <p>
                 Bu web sitesini ziyaret eden veya hizmet alan her kullanıcı, işbu Kullanım Koşullarını peşinen kabul etmiş sayılır. {siteConfig.name}, sitede yer alan bilgileri, hizmet kapsamını ve fiyatları önceden bildirmeksizin değiştirme hakkını saklı tutar.
               </p>
             </section>

             <section className="space-y-4">
               <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">2. SORUMLULUK REDDİ (DISCLAIMER)</h3>
               <p>
                 <strong>2.1. Kesintisiz Hizmet Garantisi Yoktur:</strong> YÜKLENİCİ, web sitesinin veya geliştirdiği projelerin %100 kesintisiz çalışacağını garanti etmez. 3. parti servis sağlayıcılar (Hosting, Domain, API servisleri, Google vb.) kaynaklı erişim sorunlarından, veri kayıplarından veya siber saldırılardan {siteConfig.name} sorumlu tutulamaz.
               </p>
               <p>
                 <strong>2.2. İçerik Sorumluluğu:</strong> Müşteri tarafından siteye eklenmesi için iletilen metin, görsel ve videoların telif hakkı sorumluluğu tamamen Müşteriye aittir. YÜKLENİCİ, içeriklerin hukuka uygunluğunu denetlemekle yükümlü değildir.
               </p>
             </section>

             <section className="space-y-4">
               <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">3. TELİF HAKLARI</h3>
               <p>
                 Bu web sitesinin tasarımı, yazılım altyapısı, logo ve marka kimliği {siteConfig.name}'e aittir. Siteden herhangi bir materyalin izinsiz kopyalanması, çoğaltılması veya ticari amaçla kullanılması durumunda, YÜKLENİCİ tüm hukuki ve cezai yollara başvurma hakkını saklı tutar.
               </p>
             </section>

             <section className="space-y-4">
               <h3 className="text-lg font-bold text-white border-l-2 border-indigo-500 pl-3">4. UYUŞMAZLIKLARIN ÇÖZÜMÜ</h3>
               <p>
                 İşbu sözleşmeden ve hizmet sürecinden doğabilecek her türlü ihtilafın çözümünde Türk Hukuku uygulanacak olup, <strong>İstanbul (Çağlayan) Mahkemeleri ve İcra Daireleri</strong> yetkilidir.
               </p>
             </section>
          </article>
        );
      default:
        return null;
    }
  };

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-indigo-500/30 flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Kurumsal Politikalar</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Şeffaflık, güven ve yasal uyumluluk ilkeleriyle yönetilen iş süreçlerimizin detayları.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* SOL MENU (STICKY) */}
            <div className="w-full lg:w-1/4 flex flex-col gap-3 lg:sticky lg:top-32">
              <button 
                onClick={() => setActiveTab("hizmet")}
                className={`group flex items-center gap-4 px-6 py-5 rounded-xl text-left transition-all border ${activeTab === "hizmet" ? "bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-500/20" : "bg-[#0a0a0a] border-white/5 text-gray-400 hover:bg-white/5 hover:border-white/10 hover:text-white"}`}
              >
                <div className={`p-2 rounded-lg ${activeTab === "hizmet" ? "bg-white/20" : "bg-white/5 group-hover:bg-white/10"}`}>
                  <ScrollText size={20} /> 
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base">Hizmet Sözleşmesi</div>
                  <div className="text-[10px] md:text-xs opacity-70 mt-1 uppercase tracking-wider">Satış & İade</div>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab("gizlilik")}
                className={`group flex items-center gap-4 px-6 py-5 rounded-xl text-left transition-all border ${activeTab === "gizlilik" ? "bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-500/20" : "bg-[#0a0a0a] border-white/5 text-gray-400 hover:bg-white/5 hover:border-white/10 hover:text-white"}`}
              >
                 <div className={`p-2 rounded-lg ${activeTab === "gizlilik" ? "bg-white/20" : "bg-white/5 group-hover:bg-white/10"}`}>
                  <Lock size={20} /> 
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base">KVKK & Gizlilik</div>
                  <div className="text-[10px] md:text-xs opacity-70 mt-1 uppercase tracking-wider">Veri Güvenliği</div>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab("kullanim")}
                className={`group flex items-center gap-4 px-6 py-5 rounded-xl text-left transition-all border ${activeTab === "kullanim" ? "bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-500/20" : "bg-[#0a0a0a] border-white/5 text-gray-400 hover:bg-white/5 hover:border-white/10 hover:text-white"}`}
              >
                 <div className={`p-2 rounded-lg ${activeTab === "kullanim" ? "bg-white/20" : "bg-white/5 group-hover:bg-white/10"}`}>
                  <Scale size={20} /> 
                </div>
                 <div>
                  <div className="font-bold text-sm md:text-base">Kullanım Koşulları</div>
                  <div className="text-[10px] md:text-xs opacity-70 mt-1 uppercase tracking-wider">Yasal Sorumluluk</div>
                </div>
              </button>
            </div>

            {/* SAĞ İÇERİK ALANI */}
            <div className="w-full lg:w-3/4 bg-[#0a0a0a] border border-white/10 p-8 md:p-16 rounded-3xl min-h-[800px] relative overflow-hidden shadow-2xl">
              {/* Arka Plan Efekti */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                {renderContent()}
              </div>

              {/* Footer Note */}
              <div className="mt-16 pt-8 border-t border-white/5 text-center">
                 <p className="text-xs text-gray-600">
                   Bu sayfadaki bilgiler {siteConfig.name}'in yasal çalışma prensiplerini oluşturur. Hizmet alan her müşteri bu şartları kabul etmiş sayılır.<br/>
                   &copy; {currentYear} {siteConfig.name}. Tüm Hakları Saklıdır.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </main>
  );
}