import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Services from "@/components/Services"; // Eksikti (Anasayfa özeti)
import Projects from "@/components/Projects"; // Eksikti
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Faq from "@/components/Faq";           // Eksikti
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-indigo-500/30">
      <Navbar />
      
      <Hero />
      <Services />    {/* Hizmetlerimiz Özeti */}
      <Projects />    {/* Projeler / Referanslar */}
      <TechStack />   {/* Kullandığımız Teknolojiler */}
      <Process />     {/* Çalışma Süreci */}
      <Faq />         {/* Sıkça Sorulan Sorular */}
      <Cta />
      <Footer />
    </main>
  );
}