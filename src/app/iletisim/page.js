"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Check, Send, Loader2, ArrowRight, MessageSquare, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. KONFİGÜRASYONU İÇERİ ALIYORUZ ---
import { siteConfig } from "@/config/site"; 

// Hizmet Seçenekleri
const SERVICES = [
  "Web Mimarisi",
  "Mobil Uygulama",
  "UI/UX Tasarım",
  "SEO & Growth",
  "Özel Yazılım / SaaS",
  "Marka Danışmanlığı"
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    services: [],
    projectDetails: "", 
    name: "",
    email: "",
    phone: "" 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // Hizmet Seçimi
  const toggleService = (service) => {
    const currentServices = formData.services;
    if (currentServices.includes(service)) {
      setFormData({ ...formData, services: currentServices.filter((s) => s !== service) });
    } else {
      setFormData({ ...formData, services: [...currentServices, service] });
    }
  };

  // Input Değişikliği
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Gönderme
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // API Simülasyonu
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      setFormStatus("success");
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main className="bg-[#020202] min-h-screen text-white selection:bg-indigo-500/30 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col justify-center">
        {/* Arka Plan Işığı */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* --- SOL: İLETİŞİM BİLGİLERİ (CONFIG'DEN GELİYOR) --- */}
          <div className="lg:col-span-5 space-y-12">
             <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4 inline-block bg-white/5 px-3 py-1 rounded-full border border-white/10">
                   Bize Ulaşın
                </span>
                <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tighter">
                   Büyük Fikirler <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-gray-500">
                      Burada Başlar.
                   </span>
                </h1>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                   Sadece bir form doldurmuyorsunuz. Markanızın dijital geleceğini inşa edecek ilk adımı atıyorsunuz.
                </p>
             </motion.div>

             <div className="space-y-8 border-t border-white/10 pt-10">
                
                {/* E-POSTA (Otomatik) */}
                <div className="flex gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:bg-indigo-500/20 group-hover:border-indigo-500 transition-all">
                      <Mail size={20} />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">E-Posta</h4>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-xl font-medium text-white hover:text-indigo-400 transition-colors">
                        {siteConfig.contact.email}
                      </a>
                   </div>
                </div>

                {/* TELEFON (Otomatik) */}
                <div className="flex gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:bg-indigo-500/20 group-hover:border-indigo-500 transition-all">
                      <Phone size={20} />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Telefon</h4>
                      <a href={`tel:${siteConfig.contact.phoneCall}`} className="text-xl font-medium text-white hover:text-indigo-400 transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                   </div>
                </div>

                {/* ADRES / SAATLER (Otomatik) */}
                <div className="flex gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:bg-indigo-500/20 group-hover:border-indigo-500 transition-all">
                      <Clock size={20} />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Çalışma Saatleri</h4>
                      <p className="text-lg text-white">{siteConfig.contact.workingHours}</p>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                        <MapPin size={12}/> {siteConfig.contact.address}
                      </p>
                   </div>
                </div>

             </div>
          </div>

          {/* SAĞ: MULTI-STEP FORM (Aynı kaldı) */}
          <div className="lg:col-span-7">
             <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden min-h-[600px] flex flex-col justify-center shadow-2xl shadow-indigo-900/10">
                
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                   <motion.div 
                     initial={{ width: "0%" }} 
                     animate={{ width: `${(step / 3) * 100}%` }} 
                     className="h-full bg-indigo-500"
                   />
                </div>

                <AnimatePresence mode="wait">
                   
                   {/* ADIM 1: HİZMET SEÇİMİ */}
                   {step === 1 && (
                      <motion.div 
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                         <div>
                            <span className="text-indigo-400 font-bold text-sm mb-2 block">ADIM 01/03</span>
                            <h3 className="text-3xl font-bold mb-6 text-white">Hangi konuda desteğe ihtiyacınız var?</h3>
                         </div>
                         <div className="flex flex-wrap gap-3">
                            {SERVICES.map((s, i) => (
                               <button 
                                 key={i}
                                 onClick={() => toggleService(s)}
                                 className={`px-6 py-4 rounded-xl border transition-all text-left flex items-center gap-3 text-sm font-medium ${
                                    formData.services.includes(s) 
                                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                                 }`}
                               >
                                  {formData.services.includes(s) && <Check size={16} className="text-black" />}
                                  {s}
                               </button>
                            ))}
                         </div>
                         <div className="pt-8 flex justify-end">
                            <button 
                              onClick={nextStep}
                              disabled={formData.services.length === 0}
                              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-500 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                               Devam Et <ArrowRight size={18} />
                            </button>
                         </div>
                      </motion.div>
                   )}

                   {/* ADIM 2: PROJE VİZYONU */}
                   {step === 2 && (
                      <motion.div 
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                         <div>
                            <span className="text-indigo-400 font-bold text-sm mb-2 block">ADIM 02/03</span>
                            <h3 className="text-3xl font-bold mb-6 text-white">Bize vizyonunuzdan bahsedin.</h3>
                            <p className="text-gray-400 text-sm mb-4">Akılda kalan bir marka mı, yoksa çok satış yapan bir sistem mi? Hedefiniz ne?</p>
                         </div>
                         
                         <div className="relative">
                            <MessageSquare className="absolute top-4 left-4 text-gray-600" size={20} />
                            <textarea 
                              name="projectDetails"
                              value={formData.projectDetails}
                              onChange={handleChange}
                              rows={6}
                              placeholder="Örn: Mevcut sitemiz çok yavaş ve marka kimliğimizi yansıtmıyor. Daha modern, prestijli ve hızlı bir yapıya geçmek istiyoruz..."
                              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none text-lg leading-relaxed"
                            ></textarea>
                         </div>

                         <div className="pt-8 flex justify-between items-center">
                            <button onClick={prevStep} className="text-gray-500 hover:text-white font-medium transition-colors">Geri Dön</button>
                            <button 
                              onClick={nextStep}
                              disabled={!formData.projectDetails}
                              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-500 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                               Devam Et <ArrowRight size={18} />
                            </button>
                         </div>
                      </motion.div>
                   )}

                   {/* ADIM 3: İLETİŞİM BİLGİLERİ */}
                   {step === 3 && (
                      <motion.div 
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                         <div>
                            <span className="text-indigo-400 font-bold text-sm mb-2 block">ADIM 03/03</span>
                            <h3 className="text-3xl font-bold mb-6 text-white">Size nasıl hitap edelim?</h3>
                         </div>
                         
                         <div className="space-y-4">
                            <div className="space-y-2">
                               <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Adınız Soyadınız</label>
                               <input 
                                 name="name"
                                 value={formData.name}
                                 onChange={handleChange}
                                 placeholder="Örn: Ahmet Yılmaz"
                                 className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">E-Posta Adresiniz</label>
                               <input 
                                 name="email"
                                 type="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 placeholder="ahmet@sirket.com"
                                 className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Telefon Numaranız</label>
                               <input 
                                 name="phone"
                                 type="tel"
                                 value={formData.phone}
                                 onChange={handleChange}
                                 placeholder="0555 123 45 67"
                                 className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                               />
                            </div>
                         </div>

                         <div className="pt-6 flex justify-between items-center">
                            <button onClick={prevStep} className="text-gray-500 hover:text-white font-medium transition-colors">Geri Dön</button>
                            <button 
                              onClick={handleSubmit}
                              disabled={isLoading || !formData.name || !formData.email || !formData.phone}
                              className="px-10 py-4 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                            >
                               {isLoading ? <Loader2 className="animate-spin" /> : <>Projeyi Başlat <Send size={18} /></>}
                            </button>
                         </div>
                         
                         {/* Başarı Mesajı */}
                         {formStatus === "success" && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center font-medium">
                               Mesajınız harika bir şekilde bize ulaştı! En kısa sürede dönüş yapacağız. 🚀
                            </motion.div>
                         )}
                      </motion.div>
                   )}

                </AnimatePresence>
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}