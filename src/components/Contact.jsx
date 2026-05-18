"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        // 3 saniye sonra butonu eski haline getir
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Bir hata oluştu.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Sunucuya erişilemedi.");
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="iletisim">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-bold tracking-widest text-xs uppercase mb-2">BİZE ULAŞIN</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Bir Kahve İçelim mi?</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* İletişim Bilgileri */}
          <div className="space-y-8">
             <p className="text-gray-400 text-lg leading-relaxed">
               Projenizi dinlemek ve size özel çözümler üretmek için sabırsızlanıyoruz. 
               Aşağıdaki formu doldurarak veya doğrudan arayarak bize ulaşabilirsiniz.
             </p>

             <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-white/5 rounded-lg text-indigo-500"><MapPin size={24} /></div>
                   <div>
                      <h4 className="text-white font-bold text-lg">Ofis</h4>
                      <p className="text-gray-400">{siteConfig.contact.address}</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="p-3 bg-white/5 rounded-lg text-indigo-500"><Mail size={24} /></div>
                   <div>
                      <h4 className="text-white font-bold text-lg">E-Posta</h4>
                      <p className="text-gray-400">{siteConfig.contact.email}</p>
                      <p className="text-gray-500 text-sm">7/24 Destek</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="p-3 bg-white/5 rounded-lg text-indigo-500"><Phone size={24} /></div>
                   <div>
                      <h4 className="text-white font-bold text-lg">Telefon</h4>
                      <a href={`tel:${siteConfig.contact.phoneCall}`} className="text-gray-400 hover:text-white transition-colors">
                        {siteConfig.contact.phoneDisplay}
                      </a>
                      <p className="text-gray-500 text-sm">Hafta içi: 09:00 - 18:00</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 space-y-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-sm text-gray-400 ml-1">Adınız Soyadınız</label>
                   <input 
                     type="text" name="name" required 
                     value={formData.name} onChange={handleChange}
                     className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                     placeholder="John Doe"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-sm text-gray-400 ml-1">E-Posta</label>
                   <input 
                     type="email" name="email" required 
                     value={formData.email} onChange={handleChange}
                     className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                     placeholder="john@example.com"
                   />
                </div>
             </div>
             
             <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Konu</label>
                <input 
                  type="text" name="subject" required 
                  value={formData.subject} onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Proje Teklifi Hakkında"
                />
             </div>

             <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Mesajınız</label>
                <textarea 
                  name="message" required rows={4}
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Projenizden bahsedin..."
                />
             </div>

             <button 
               type="submit" 
               disabled={status === "loading" || status === "success"}
               className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                 status === "success" 
                   ? "bg-emerald-600 text-white cursor-default" 
                   : "bg-white text-black hover:bg-gray-200"
               }`}
             >
               {status === "loading" ? (
                 <> <Loader2 className="animate-spin" /> Gönderiliyor... </>
               ) : status === "success" ? (
                 <> <CheckCircle /> Mesaj Gönderildi! </>
               ) : (
                 <> <Send size={18} /> Mesajı Gönder </>
               )}
             </button>

             {status === "error" && (
               <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
             )}
          </form>

        </div>
      </div>
    </section>
  );
}