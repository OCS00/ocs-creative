"use client";
import Marquee from "react-fast-marquee";

const technologies = [
  "Next.js", "•", "React", "•", "Tailwind CSS", "•", "Sanity CMS", "•",
  "Framer Motion", "•", "Figma", "•", "Vercel", "•", "TypeScript", "•",
  "React Native", "•", "Node.js", "•",
];

export default function Clients() {
  return (
    <section className="py-8 bg-black border-t border-white/10 overflow-hidden relative z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
      <Marquee gradient={false} speed={30}>
        {technologies.map((item, index) => (
          <div key={index} className="mx-4 md:mx-6 select-none">
            <span className={`text-lg md:text-2xl font-bold tracking-tight ${
              item === "•"
                ? "text-indigo-500"
                : "text-white/30 hover:text-white transition-colors duration-500 font-mono"
            }`}>
              {item}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
