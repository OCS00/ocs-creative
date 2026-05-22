import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Yasal Politikalar | KVKK, Gizlilik & Kullanım Koşulları",
  description: "OCS Creative'in KVKK aydınlatma metni, gizlilik politikası, hizmet sözleşmesi ve kullanım koşulları.",
  alternates: {
    canonical: `${siteConfig.url}/yasal`,
  },
  openGraph: {
    title: "Yasal Politikalar | OCS Creative",
    description: "KVKK aydınlatma metni, gizlilik politikası ve kullanım koşulları.",
    url: `${siteConfig.url}/yasal`,
    type: "website",
  },
};

export default function Layout({ children }) {
  return children;
}
