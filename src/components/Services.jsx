"use client";
import Link from "next/link";
import { services } from "@/data/servicesData"; // 🔥 Verileri buradan çekiyoruz
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-dark-900 relative overflow-hidden">
       {/* Arka Plan Işığı (Sağ alttan vuran mavi ışık) */}
       <div className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BAŞLIK */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">HİZMETLERİMİZ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Dijital Dünyada <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Büyümeniz İçin</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            İşletmenizin ihtiyaçlarına özel, ölçülebilir ve sonuç odaklı dijital çözümler üretiyoruz.
          </p>
        </div>

        {/* HİZMET KARTLARI (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-dark-800 border border-dark-700 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
            >
              {/* Hover Efekti (Alttan çıkan ışık) */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              
              {/* İkon */}
              <div className="w-16 h-16 bg-dark-900 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-lg shadow-primary/10">
                {service.icon}
              </div>
              
              {/* Başlık & Açıklama */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Özellikler (Liste) */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-primary mr-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Buton */}
              <Link href="/iletisim" className="inline-flex items-center text-primary font-bold hover:tracking-wide transition-all">
                Teklif Al <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}