import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center text-center p-4">
      {/* Arka Plan Efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 relative z-10">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
        Houston, Bir Sorunumuz Var!
      </h2>
      <p className="text-gray-400 max-w-md mb-10 relative z-10">
        Aradığınız sayfa uzay boşluğunda kaybolmuş gibi görünüyor. Endişelenmeyin, sizi ana üsse geri götürebiliriz.
      </p>
      
      <Link 
        href="/" 
        className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-lg shadow-primary/25 flex items-center gap-2 relative z-10"
      >
        <Home size={20} /> Ana Sayfaya Dön
      </Link>
    </div>
  );
}