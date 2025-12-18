"use client";

const techs = [
  { name: "NEXT.JS 14", color: "text-white" },
  { name: "REACT", color: "text-blue-400" },
  { name: "TAILWIND CSS", color: "text-cyan-400" },
  { name: "VERCEL", color: "text-white" },
  { name: "GOOGLE ADS", color: "text-orange-400" },
  { name: "SEO", color: "text-green-400" },
  { name: "ANALYTICS", color: "text-yellow-400" },
];

export default function TechStack() {
  return (
    <section className="py-8 bg-dark-900 border-y border-dark-800 overflow-hidden relative">
      {/* Şeridin üzerindeki gölgeler (Daha yumuşak geçiş için) */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark-900 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark-900 to-transparent z-10"></div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 px-10">
          
          {/* 1. TUR */}
          {techs.map((tech, i) => (
            <span key={i} className={`text-3xl font-bold tracking-tighter ${tech.color} opacity-40 hover:opacity-100 transition-opacity cursor-default`}>
              {tech.name}
            </span>
          ))}

          {/* 2. TUR (Kopukluk olmasın diye tekrar ediyoruz) */}
          {techs.map((tech, i) => (
            <span key={`dup-${i}`} className={`text-3xl font-bold tracking-tighter ${tech.color} opacity-40 hover:opacity-100 transition-opacity cursor-default`}>
              {tech.name}
            </span>
          ))}
          
          {/* 3. TUR (Garanti olsun) */}
          {techs.map((tech, i) => (
            <span key={`dup2-${i}`} className={`text-3xl font-bold tracking-tighter ${tech.color} opacity-40 hover:opacity-100 transition-opacity cursor-default`}>
              {tech.name}
            </span>
          ))}

        </div>
      </div>
    </section>
  );
}