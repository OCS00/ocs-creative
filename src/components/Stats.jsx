import { Users, Building2, Briefcase, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    number: "100+",
    label: "Aktif Mükellef",
    desc: "Farklı sektörlerden şahıs ve kurum",
    // Not: Burada renk vermedik, aşağıda kodla yöneteceğiz ki hover bozulmasın
    icon: <Users className="w-8 h-8" />
  },
  {
    id: 2,
    number: "30",
    label: "Yıllık Tecrübe",
    desc: "Mali mevzuat ve vergi hukuku deneyimi",
    icon: <Award className="w-8 h-8" />
  },
  {
    id: 3,
    number: "80+",
    label: "Şirket Kuruluşu",
    desc: "Başarıyla tamamlanan açılış işlemleri",
    icon: <Building2 className="w-8 h-8" />
  },
  {
    id: 4,
    number: "%100",
    label: "Müşteri Memnuniyeti",
    desc: "Çözüm odaklı ve şeffaf hizmet anlayışı",
    icon: <Briefcase className="w-8 h-8" />
  }
];

export default function Stats() {
  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Arka Plan Efektleri */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            // KARTLAR: MAVİ CAM GÖRÜNÜMÜ
            <div key={stat.id} className="bg-blue-800/40 backdrop-blur-md border border-blue-700/50 p-8 rounded-2xl hover:bg-blue-800 transition-all duration-300 group shadow-lg">
              
              <div className="flex items-center gap-4 mb-4">
                
                {/* İKON KUTUSU: Normalde Mavi, Hover olunca Beyaz */}
                <div className="p-3 bg-blue-900/50 rounded-xl group-hover:bg-white transition-colors duration-300 shadow-inner border border-blue-700/30">
                  {/* İKONUN KENDİSİ: Normalde Beyaz, Hover olunca Mavi */}
                  <div className="text-white group-hover:text-blue-900 transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold text-white font-playfair tracking-tight">
                  {stat.number}
                </h3>
              </div>

              <div>
                <p className="text-lg font-bold text-white mb-2">{stat.label}</p>
                <p className="text-sm text-blue-200 leading-relaxed group-hover:text-white transition-colors">
                  {stat.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}