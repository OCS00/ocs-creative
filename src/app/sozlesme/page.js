"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site"; // ✅ Config Bağlantısı
import { 
  Printer, 
  CheckCircle2, 
  ShieldAlert, 
  FileText, 
  CreditCard, 
  Loader2, 
  Check,
  Scale,
  Clock,
  FileWarning,
  Server,
  TrendingUp,
  Lock,
  RefreshCw,
  Zap
} from "lucide-react";

export default function ContractPage() {
  const [clientName, setClientName] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Varsayılan paket: GROWTH (Ortanca)
  const [selectedPackage, setSelectedPackage] = useState("growth");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("tr-TR"));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleSign = async () => {
    if (clientName.length > 2) {
      setIsLoading(true);
      
      try {
        const response = await fetch("/api/approve-contract", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clientName: clientName,
            packageType: packages[selectedPackage].name,
            price: packages[selectedPackage].price
          }),
        });

        const data = await response.json();

        if (data.success) {
          setIsSigned(true);
        } else {
          alert("Bir hata oluştu. Lütfen tekrar deneyin.");
        }
      } catch (error) {
        console.error("Hata:", error);
        alert("Sunucuya bağlanılamadı.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  // --- YENİ FİYATLAR VE İKNA EDİCİ PAKETLER ---
  const packages = {
    startup: {
      name: "STARTUP PAKETİ",
      color: "orange",
      price: "₺1.500",
      features: [
        "Temel Sunucu İzleme (Uptime)", 
        "Aylık Güvenlik Taraması", 
        "SSL Sertifika Yenileme", 
        "1 Adet İçerik Güncelleme"
      ],
      description: "Yeni başlayanlar için temel sigorta."
    },
    growth: {
      name: "KURUMSAL (GROWTH)",
      color: "indigo",
      price: "₺3.000",
      features: [
        "Vercel Pro Sunucu Yönetimi", 
        "Ayda 3 Adet İçerik/Görsel Revizyonu", 
        "7/24 DDoS Saldırı Koruması", 
        "Google Sıralama (SEO) Takibi"
      ],
      description: "Büyüyen işletmeler için tam koruma ve konfor."
    },
    enterprise: {
      name: "ENTERPRISE (VIP)",
      color: "emerald",
      price: "₺6.000",
      features: [
        "Özel CDN & Cache Mimarisi", 
        "Sınırsız Küçük Revizyon Hakkı", 
        "Özel Müşteri Temsilcisi (7/24)", 
        "Aylık Detaylı Performans Raporu"
      ],
      description: "Büyük ölçekli operasyonlar için VIP hizmet."
    }
  };

  const activePack = packages[selectedPackage];

  // Marka isminin ilk kelimesini arka plan için al (Örn: "OCS")
  const shortBrandName = siteConfig.name.split(" ")[0];

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-gray-800 font-sans relative selection:bg-indigo-200 selection:text-indigo-900">
      <Navbar />

      <div className="fixed inset-0 z-0 bg-[#050505]">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-900/20 to-transparent"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4">
        
        {/* --- KONTROL PANELİ --- */}
        {!isSigned && (
          <div className="max-w-[210mm] mx-auto mb-8 print:hidden bg-[#111] border border-white/10 p-4 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="text-white w-full md:w-auto">
              <h1 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 text-center md:text-left">Paket Seçimi</h1>
              <div className="flex gap-2 justify-center md:justify-start">
                <button onClick={() => setSelectedPackage("startup")} className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold border transition ${selectedPackage === 'startup' ? 'bg-orange-600 border-orange-500 text-white' : 'bg-transparent border-white/20 text-gray-400 hover:bg-white/5'}`}>STARTUP (1.5K)</button>
                <button onClick={() => setSelectedPackage("growth")} className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold border transition ${selectedPackage === 'growth' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-transparent border-white/20 text-gray-400 hover:bg-white/5'}`}>KURUMSAL (3K)</button>
                <button onClick={() => setSelectedPackage("enterprise")} className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold border transition ${selectedPackage === 'enterprise' ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-transparent border-white/20 text-gray-400 hover:bg-white/5'}`}>ENTERPRISE (6K)</button>
              </div>
            </div>
            <button onClick={handlePrint} className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg text-sm font-bold transition w-full md:w-auto justify-center">
              <Printer size={16} /> Yazdır / PDF
            </button>
          </div>
        )}

        {/* --- KAĞIT BAŞLANGICI --- */}
        <div className="max-w-[210mm] mx-auto bg-white shadow-2xl rounded-sm min-h-[297mm] p-8 md:p-16 relative overflow-hidden print:shadow-none print:m-0 print:w-full transition-all duration-500">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-100 font-bold text-9xl -rotate-45 pointer-events-none select-none z-0">
            {shortBrandName}
          </div>

          {isSigned && (
            <div className="absolute top-10 right-10 z-50 border-4 border-green-600 text-green-600 px-6 py-2 rounded-lg font-bold text-xl -rotate-12 opacity-80 mix-blend-multiply pointer-events-none">ONAYLANDI</div>
          )}

          <div className="relative z-10 space-y-8">
            
            <header className="border-b-2 border-gray-900 pb-6 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 uppercase tracking-tight">Hizmet Sözleşmesi</h2>
                <p className="text-sm text-gray-500 mt-1 font-mono uppercase">PAKET: {activePack.name}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">{siteConfig.name}</div>
                <div className="text-xs text-gray-500">{siteConfig.contact.address}</div>
                <div className="text-xs text-gray-500 font-mono">{currentDate}</div>
              </div>
            </header>

            <section className="text-sm leading-relaxed text-gray-700 text-justify">
              <p>İşbu sözleşme, {siteConfig.name} ("Yüklenici") ile Müşteri ("İşveren") arasında; projenin geliştirilmesi, hukuki sorumluluklar ve <strong>dijital varlığın sürdürülebilirliği</strong> şartlarını belirlemek üzere düzenlenmiştir.</p>
            </section>

            <section className="space-y-6">
              
              {/* MADDE 1 */}
              <div>
                <h3 className="text-base font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mb-2 uppercase">1. Konu ve Teslimat</h3>
                <p className="text-sm text-gray-700 text-justify">
                  Yüklenici, İşveren'in talepleri doğrultusunda web sitesini tasarlayıp kodlayacaktır. Proje bitiminde tüm panel şifreleri İşveren'e teslim edilir. Ödemenin tamamı yapılana kadar kaynak kod mülkiyeti Yüklenici'ye aittir.
                </p>
              </div>

              {/* MADDE 2: YÜKÜMLÜLÜKLER */}
              <div className="bg-gray-50 p-5 rounded border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2 mb-3 uppercase">
                  <Scale size={18} /> 2. Yükümlülükler ve Onay Süreci
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Clock size={16} className="text-orange-500 mt-1 shrink-0" />
                    <span><strong>72 Saat Onay Kuralı:</strong> Yüklenici'nin onay için gönderdiği her çalışma, en geç 72 saat içinde denetlenmelidir. Bu süre içinde olumlu/olumsuz dönüş yapılmazsa, çalışma <strong>onaylanmış sayılır.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileWarning size={16} className="text-red-500 mt-1 shrink-0" />
                    <span><strong>İçerik Sorumluluğu:</strong> Web sitesinde kullanılacak tüm metin, görsel ve içeriklerin hukuki sorumluluğu (Telif, KVKK vb.) İşveren'e aittir.</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <CheckCircle2 size={16} className="text-indigo-500 mt-1 shrink-0" />
                     <span><strong>Gecikme:</strong> İşveren'in gerekli dökümanları zamanında teslim etmemesinden kaynaklanan gecikmeler, proje teslim süresine eklenir.</span>
                  </li>
                </ul>
              </div>

              {/* MADDE 3: REVİZYON */}
              <div>
                <h3 className="text-base font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mb-2 uppercase">3. Revizyon ve Ek Ücretler</h3>
                <p className="text-sm text-gray-700 text-justify">
                  Mevcut tasarımın %50'sinden fazlasının değiştirilmesi talep edilirse, İşveren sözleşme tutarının <strong>%50'si kadar ek fark</strong> ödemeyi kabul eder. Küçük revizyonlar (renk, yazı tipi) paket kapsamına dahildir.
                </p>
              </div>

              {/* MADDE 4: DETAYLI VE İKNA EDİCİ BAKIM ALANI */}
              <div className={`bg-${activePack.color}-50/50 p-6 rounded-xl border border-${activePack.color}-100 print:bg-white print:border-gray-300 transition-colors duration-500`}>
                <div className={`flex justify-between items-start mb-4 border-b border-${activePack.color}-100 pb-2`}>
                  <h3 className={`text-base font-bold text-${activePack.color}-900 uppercase flex items-center gap-2`}>
                    <ShieldAlert size={18} /> 4. Sürdürülebilirlik & Bakım (SLA)
                  </h3>
                  <span className={`bg-${activePack.color}-600 text-white text-[10px] font-bold px-2 py-1 rounded tracking-wide transition-colors duration-500`}>
                    {activePack.name}
                  </span>
                </div>

                <div className="mb-6 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FileText size={16} className="text-indigo-500" /> Neden Bu Paket Zorunlu ve Gerekli?
                  </h4>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    Web siteniz statik bir broşür değil, <strong>yaşayan bir organizmadır.</strong> Google algoritmaları, tarayıcı teknolojileri ve siber tehditler her gün değişmektedir. Bu paket bir masraf değil, dijital yatırımınızın <strong>çöp olmaması için yapılan bir kaskodur.</strong>
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                     <div className="flex items-center gap-2 text-xs text-gray-700">
                       <Server size={14} className="text-green-600"/> 
                       <span><strong>Sunucu Garantisi:</strong> Vercel Enterprise altyapısında %99.9 erişilebilirlik.</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-700">
                       <TrendingUp size={14} className="text-blue-600"/> 
                       <span><strong>SEO Koruma:</strong> Sıralama kaybını önleyen teknik optimizasyonlar.</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-700">
                       <Lock size={14} className="text-red-600"/> 
                       <span><strong>Siber Kalkan:</strong> DDoS saldırılarına ve veri sızıntılarına karşı 7/24 izleme.</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-700">
                       <RefreshCw size={14} className="text-orange-600"/> 
                       <span><strong>İçerik Yönetimi:</strong> İşinizi kolaylaştıran düzenli metin/resim güncellemeleri.</span>
                     </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-700 font-medium mb-3">Seçilen paket kapsamındaki hizmetler:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {activePack.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-white p-2 rounded border border-gray-100 shadow-sm">
                        <Check size={14} className={`text-${activePack.color}-500`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-col md:flex-row items-center justify-between bg-${activePack.color}-900 p-4 rounded-lg text-white shadow-lg print:bg-gray-900 print:text-black print:border print:border-black transition-colors duration-500`}>
                    <div className="flex items-center gap-3">
                       <div className={`p-2 bg-${activePack.color}-800 rounded-full print:bg-gray-200 print:text-black transition-colors duration-500`}><CreditCard size={20}/></div>
                       <div>
                         <p className="text-xs opacity-80 font-bold uppercase tracking-wider print:text-gray-600">Periyodik Bakım Bedeli</p>
                         <p className="text-[10px] opacity-60 print:text-gray-500">3 Aylık dönemlerde faturalandırılır.</p>
                       </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                       <p className="text-2xl font-bold font-mono print:text-black">{activePack.price} <span className="text-xs font-normal opacity-70 print:text-gray-600">+ KDV</span></p>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-start gap-2 bg-yellow-50 p-2 rounded border border-yellow-200">
                    <Zap size={14} className="text-yellow-600 mt-0.5 shrink-0" />
                    <p className="text-[10px] text-yellow-800 italic">
                      <strong>Avantaj:</strong> Bu paketi aldığınızda, yapacağınız kampanya veya duyurular için dışarıdan tasarımcı/yazılımcı aramanıza gerek kalmaz. Güncellemeler paket kapsamındadır.
                    </p>
                  </div>
                </div>
              </div>

              {/* MADDE 5: HUKUKİ */}
              <div>
                <h3 className="text-base font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mb-2 uppercase">5. Yetkili Mahkeme ve Onay</h3>
                <p className="text-sm text-gray-700 text-justify">
                   İşbu sözleşmeden doğacak uyuşmazlıklarda <strong>İstanbul Mahkemeleri</strong> yetkilidir. İşveren, yukarıdaki şartları ve periyodik bakım bedelini kabul ettiğini beyan eder.
                </p>
              </div>

            </section>

            {/* İMZA ALANI */}
            <div className="mt-8 pt-8 border-t-2 border-dashed border-gray-300 print:hidden">
              {!isSigned ? (
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 transition-all">
                  <h4 className="font-bold text-gray-900 mb-1">Dijital Onay</h4>
                  <p className="text-xs text-gray-500 mb-4">Lütfen bilgilerinizi girerek sözleşmeyi imzalayınız.</p>
                  
                  <div className="flex gap-4 mb-4">
                     <input 
                        type="text" 
                        placeholder="Ad Soyad / Firma Ünvanı" 
                        className="flex-1 p-3 border border-gray-300 rounded text-gray-900 focus:outline-none focus:border-indigo-500 transition-colors"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                      />
                  </div>
                  
                  <button 
                    onClick={handleSign}
                    disabled={clientName.length < 3 || isLoading}
                    className={`w-full px-8 py-3 rounded text-white font-bold tracking-wide transition shadow-lg flex items-center justify-center gap-2 ${clientName.length < 3 ? 'bg-gray-300 cursor-not-allowed' : `bg-${activePack.color}-600 hover:opacity-90`}`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> İMZALANIYOR...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={18} /> {activePack.price} + KDV İLE ONAYLIYORUM
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 flex items-center gap-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Sözleşme Kaydedildi</h4>
                    <p className="text-sm text-green-700 mt-1">
                      Sayın <span className="font-bold">{clientName}</span>, işleminiz başarıyla tamamlandı. Sözleşme bir kopyası sistemimize kaydedildi.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* PRINT İMZA */}
            <div className="hidden print:flex mt-16 justify-between gap-10">
               <div className="flex-1">
                 <div className="border-t border-gray-400 pt-2 mb-1">
                   <p className="font-bold text-gray-900">YÜKLENİCİ</p>
                   <p className="text-sm text-gray-600">{siteConfig.name}</p>
                 </div>
                 <p className="text-xs text-gray-400 italic">İmza / Kaşe</p>
               </div>
               <div className="flex-1">
                 <div className="border-t border-gray-400 pt-2 mb-1">
                   <p className="font-bold text-gray-900">İŞVEREN</p>
                   <p className="text-sm text-gray-600">{clientName || "..............................."}</p>
                 </div>
                 <p className="text-xs text-gray-400 italic">İmza / Kaşe</p>
               </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}