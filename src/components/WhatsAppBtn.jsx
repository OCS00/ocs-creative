"use client";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function WhatsAppBtn() {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) return null;

  const waNumber = siteConfig.contact.phoneCall.replace("+", "");

  return (
    <motion.a
      href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Merhaba, projemiz hakkında görüşmek istiyorum.")}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] transition-shadow"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle size={26} fill="white" className="text-white" />
      <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#030303] animate-pulse" />
    </motion.a>
  );
}
