"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldAlert } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-indigo-500/30">
      <Navbar />

      {/* 1. BAŞLIK ALANI */}
      <section className="pt-40 pb-10 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Bize <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Ulaşın.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Yeni bir proje başlatmak veya mevcut hizmetinizle ilgili destek almak için aşağıdaki kanalları kullanabilirsiniz.
        </p>
      </section>

      {/* 2. İLETİŞİM KARTLARI & FORM */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* SOL TARA: BİLGİLER */}
            <div className="space-y-8">
                {/* İletişim Bilgileri */}
                <div className="bg-[#111] border border-white/10 p-8 rounded-3xl space-y-6">
                    <h3 className="text-2xl font-bold mb-4">İletişim Bilgileri</h3>
                    
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">E-Posta</p>
                            <a href="mailto:info@ocscreative.com" className="text-lg font-semibold hover:text-indigo-400 transition">info@ocscreative.com</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Telefon / WhatsApp</p>
                            <a href="tel:+905555555555" className="text-lg font-semibold hover:text-purple-400 transition">+90 555 555 55 55</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-400">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Konum</p>
                            <p className="text-lg font-semibold">İstanbul, Türkiye</p>
                        </div>
                    </div>
                </div>

                {/* Destek Politikası (Müşteriyi Eğiten Kısım) */}
                <div className="bg-indigo-900/10 border border-indigo-500/20 p-8 rounded-3xl">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-400">
                        <ShieldAlert size={24} />
                        Destek Politikamız
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        Mevcut müşterilerimiz için teknik destek süreci hafta içi <strong>09:00 - 18:00</strong> saatleri arasındadır.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm text-gray-400">
                            <Clock size={16} className="text-indigo-400 mt-1 min-w-[16px]" />
                            <span>Acil durumlar (Site kapanması vb.) haricindeki talepler 24 saat içinde yanıtlanır.</span>
                        </li>
                        <li className="flex gap-3 text-sm text-gray-400">
                            <MessageSquare size={16} className="text-indigo-400 mt-1 min-w-[16px]" />
                            <span>İçerik girişi ve yeni özellik eklemeleri standart destek kapsamına dahil değildir.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* SAĞ TARAF: FORM */}
            <div className="bg-[#111] border border-white/10 p-8 md:p-10 rounded-3xl">
                <h3 className="text-2xl font-bold mb-2">Bize Yazın</h3>
                <p className="text-gray-400 mb-8">Projenizi anlatın veya sorunuzu sorun.</p>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Adınız Soyadınız</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-indigo-500 focus:outline-none transition" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Telefon</label>
                            <input type="text" placeholder="0555..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-indigo-500 focus:outline-none transition" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">E-Posta Adresi</label>
                        <input type="email" placeholder="ornek@sirket.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-indigo-500 focus:outline-none transition" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Konu</label>
                        <select className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-4 text-gray-300 focus:border-indigo-500 focus:outline-none transition">
                            <option>Yeni Web Sitesi Projesi</option>
                            <option>Mevcut Site Revizesi</option>
                            <option>Teknik Destek Talebi</option>
                            <option>Diğer</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Mesajınız</label>
                        <textarea rows="4" placeholder="Projenizden veya sorununuzdan bahsedin..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-indigo-500 focus:outline-none transition"></textarea>
                    </div>

                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-lg transition shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2">
                        <Send size={20} />
                        Gönder
                    </button>
                </form>
            </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}