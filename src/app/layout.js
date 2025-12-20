import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OCS Creative | Dijital Çözüm Ortağınız",
  description: "Modern markalar için web tasarım, yazılım ve dijital büyüme stratejileri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}