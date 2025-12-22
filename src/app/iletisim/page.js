"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Clock, Check, Send, Loader2 } from "lucide-react"; // Loader2 eklendi
import { motion } from "framer-motion";

// Hizmet Seçenekleri
const SERVICES = [
  "Web Tasarım & Yazılım",
  "Mobil Uygulama",
  "E-Ticaret",
  "UI/UX Tasarım",
  "SEO & Growth",
  "Marka Kimliği",
  "Diğer"
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Yükleniyor durumu
  const [formStatus, setFormStatus] = useState(null); // Başarılı/Hata durumu

  // Hizmet seçip/bırakma fonksiyonu
  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // FORMU GÖNDERME FONKSİYONU (YENİ EKLENEN KISIM)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Sayfa yenilenmesini engelle

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      projectDetails: e.target.details.value,
      services: selectedServices
    };

    setIsLoading(true);
    setFormStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus("success");
        e.target.reset(); // Formu temizle
        setSelectedServices([]); // Seçimleri sıfırla
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form Hatası:", error);
      setFormStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-indigo-500/30">
      <Navbar />

      {/* Arka Plan Dokusu (Grid) */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <section className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* SOL TARAF: BİLGİ & MOTİVASYON */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4 inline-block">
                BİZE ULAŞIN
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight">
                Bir sonraki büyük <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  fikri konuşalım.
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
                Dijital dönüşüm yolculuğunuzda size rehberlik etmeye hazırız. 
                Projenizi detaylandırın, stratejimizi belirleyelim.
              </p>

              {/* İletişim Kartları */}
              <div className="space-y-8">
                
                {/* 1. E-Mail */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                    <Mail size={20} className="text-gray-300 group-hover:text-indigo-400"/>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">E-Mail</h3>
                    <p className="text-xl font-medium text-white">hello@ocscreative.com</p>
                  </div>
                </div>

                {/* 2. Telefon */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                    <Phone size={20} className="text-gray-300 group-hover:text-indigo-400"/>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Telefon</h3>
                    <p className="text-xl font-medium text-white">+90 (555) 123 45 67</p>
                  </div>
                </div>

                {/* 3. Çalışma Saatleri */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                    <Clock size={20} className="text-gray-300 group-hover:text-indigo-400"/>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Çalışma Saatleri</h3>
                    <p className="text-lg text-gray-300">Pzt - Cum: 09:00 - 18:00</p>
                    <p className="text-sm text-gray-500 mt-1">Remote / İstanbul</p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* SAĞ TARAF: İNTERAKTİF FORM */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
               {/* Form Arkasındaki Işık */}
               <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

               <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
                  
                  {/* 1. Hizmet Seçimi */}
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">
                      Hangi konuda destek alacaksınız?
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {SERVICES.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 flex items-center gap-2 ${
                              isSelected
                                ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                                : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            {isSelected && <Check size={14} />}
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Kişisel Bilgiler */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Adınız Soyadınız</label>
                      <input 
                        name="name" // Backend için name eklendi
                        type="text" 
                        required // Zorunlu alan
                        placeholder="Örn: Ahmet Yılmaz" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">E-Posta Adresiniz</label>
                      <input 
                        name="email" // Backend için name eklendi
                        type="email" 
                        required // Zorunlu alan
                        placeholder="ahmet@sirket.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* 3. Proje Detayı */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Proje Detayları</label>
                    <textarea 
                      name="details" // Backend için name eklendi
                      rows="4" 
                      required // Zorunlu alan
                      placeholder="Projenizden kısaca bahsedin..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* 4. Gönder Butonu */}
                  <button 
                    type="submit" // Submit olarak değiştirildi
                    disabled={isLoading} // Yüklenirken tıklanamaz
                    className="w-full py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                        <>
                            <Loader2 className="animate-spin" /> Gönderiliyor...
                        </>
                    ) : (
                        <>
                            Teklifi Gönder <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                  </button>

                  {/* BAŞARI MESAJI */}
                  {formStatus === "success" && (
                    <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 text-green-400 rounded-xl text-center animate-in fade-in">
                        Mesajınız başarıyla alındı! En kısa sürede size dönüş yapacağız. 🚀
                    </div>
                  )}

                  {/* HATA MESAJI */}
                  {formStatus === "error" && (
                    <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl text-center animate-in fade-in">
                        Bir hata oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.
                    </div>
                  )}

                  <p className="text-xs text-center text-gray-500 mt-4">
                    Formu göndererek <a href="/yasal" className="underline hover:text-white">Gizlilik Politikası</a>'nı kabul etmiş olursunuz.
                  </p>

               </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}