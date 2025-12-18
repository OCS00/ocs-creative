import "./globals.css";
import { Outfit } from "next/font/google"; // Sadece Outfit kullanacağız

// Fontu çağırıyoruz
const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "OCS Creative | Dijital Performans Ajansı",
  description: "Web tasarım, yazılım ve SEO hizmetleriyle markanızı dijital dünyada büyütüyoruz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      {/* Body'ye direkt fontu veriyoruz */}
      <body className={`${outfit.variable} font-sans antialiased bg-[#0B0F19] text-[#F8FAFC] selection:bg-blue-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}