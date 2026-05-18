"use client";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";

export default function Analytics() {
  const [consent, setConsent] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const checkConsent = () => {
      const stored = localStorage.getItem("cookieConsent");
      setConsent(stored === "true");
    };
    checkConsent();
    window.addEventListener("storage", checkConsent);
    window.addEventListener("cookie-consent-updated", checkConsent);
    return () => {
      window.removeEventListener("storage", checkConsent);
      window.removeEventListener("cookie-consent-updated", checkConsent);
    };
  }, [pathname, searchParams]);

  if (!consent) return null;
  if (!process.env.NEXT_PUBLIC_GA_ID) return null;

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />;
}