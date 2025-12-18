"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState(null); // null, 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Burada API işlemi simüle ediliyor
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400 ml-1">Adınız Soyadınız</label>
          <input 
            type="text" 
            required
            className="w-full bg-dark-800 border border-dark-700 text-white p-4 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="Örn: Ahmet Yılmaz"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400 ml-1">E-Posta Adresiniz</label>
          <input 
            type="email" 
            required
            className="w-full bg-dark-800 border border-dark-700 text-white p-4 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="ornek@sirket.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-400 ml-1">Konu</label>
        <select className="w-full bg-dark-800 border border-dark-700 text-white p-4 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
          <option>Web Tasarım Teklifi</option>
          <option>SEO Danışmanlığı</option>
          <option>E-Ticaret Projesi</option>
          <option>Diğer</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-400 ml-1">Mesajınız</label>
        <textarea 
          rows="4"
          required
          className="w-full bg-dark-800 border border-dark-700 text-white p-4 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          placeholder="Projenizden kısaca bahsedin..."
        ></textarea>
      </div>

      <button 
        disabled={status === 'loading' || status === 'success'}
        type="submit" 
        className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 shadow-lg ${status === 'success' ? 'bg-green-600' : 'bg-primary hover:bg-primary-dark'}`}
      >
        {status === 'loading' ? (
          <span className="animate-pulse">Gönderiliyor...</span>
        ) : status === 'success' ? (
          <> <CheckCircle size={20} /> Mesaj Gönderildi! </>
        ) : (
          <> <Send size={20} /> Hemen Gönder </>
        )}
      </button>
    </form>
  );
}