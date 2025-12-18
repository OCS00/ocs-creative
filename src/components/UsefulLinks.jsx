import Link from "next/link";
import { ExternalLink, Building2, FileText, UserCheck, CreditCard, Search, Globe } from "lucide-react";

const links = [
  {
    title: "İnternet Vergi Dairesi",
    desc: "Vergi borcu sorgulama ve ödeme.",
    url: "https://ivd.gib.gov.tr",
    icon: <Building2 className="w-6 h-6 text-white" />,
    color: "bg-blue-600"
  },
  {
    title: "E-Arşiv Portal",
    desc: "Fatura kesme ekranı (5.000/30.000).",
    url: "https://earsivportal.efatura.gov.tr/intragiris.html",
    icon: <FileText className="w-6 h-6 text-white" />,
    color: "bg-orange-500"
  },
  {
    title: "SGK İşveren",
    desc: "Sigortalı giriş-çıkış işlemleri.",
    url: "https://uyg.sgk.gov.tr/IsverenSistemi",
    icon: <UserCheck className="w-6 h-6 text-white" />,
    color: "bg-emerald-600"
  },
  {
    title: "MTV & Trafik",
    desc: "Araç vergisi ve ceza ödeme.",
    url: "https://ivd.gib.gov.tr/tvd_side/main.jsp",
    icon: <CreditCard className="w-6 h-6 text-white" />,
    color: "bg-purple-600"
  },
  {
    title: "Ticaret Sicil",
    desc: "Şirket kuruluş ve ilan sorgulama.",
    url: "https://www.ticaretsicil.gov.tr/",
    icon: <Search className="w-6 h-6 text-white" />,
    color: "bg-red-600"
  },
  {
    title: "E-Devlet",
    desc: "Tüm resmi işlemler kapısı.",
    url: "https://www.turkiye.gov.tr/",
    icon: <Globe className="w-6 h-6 text-white" />,
    color: "bg-gray-800"
  }
];

export default function UsefulLinks() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">PRATİK MENÜ</span>
          <h2 className="text-3xl font-playfair font-bold text-secondary mt-2">
            Mükellef <span className="text-primary">İşlem Merkezi</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.url} 
              target="_blank" 
              className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center gap-3"
            >
              <div className={`${link.color} p-3 rounded-lg shadow-md group-hover:scale-110 transition-transform`}>
                {link.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm text-secondary group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-[10px] text-gray-400 mt-1 leading-tight">
                  {link.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}