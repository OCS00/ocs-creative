import { CalendarClock, AlertCircle } from "lucide-react";

const events = [
  { day: "26", month: "HER AY", title: "KDV & Muhtasar", desc: "Beyannamelerin verilmesi ve ödenmesi." },
  { day: "31", month: "HER AY", title: "SGK Primleri", desc: "Bağ-Kur ve SGK prim ödemeleri." },
  { day: "31", month: "HER AY", title: "BA / BS Formları", desc: "Formların sisteme yüklenmesi." },
  { day: "17", month: "3 AYDA", title: "Geçici Vergi", desc: "Geçici vergi beyanı ve ödemesi." },
];

export default function TaxCalendar() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <div className="p-3 bg-red-50 text-red-600 rounded-lg">
          <CalendarClock size={24} />
        </div>
        <div>
          <h3 className="font-bold text-secondary text-lg">Mali Takvim</h3>
          <p className="text-xs text-gray-400">Önemli Vergi Tarihleri</p>
        </div>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex gap-4 items-start group">
            {/* Tarih Kutusu */}
            <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg w-16 h-16 shrink-0 group-hover:border-primary group-hover:bg-blue-50 transition-colors">
              <span className="text-xl font-bold text-secondary group-hover:text-primary">{event.day}</span>
              <span className="text-[10px] uppercase font-bold text-gray-400">{event.month}</span>
            </div>
            
            {/* Açıklama */}
            <div>
              <h4 className="font-bold text-sm text-secondary group-hover:text-primary transition-colors">
                {event.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {event.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
        <AlertCircle size={14} />
        <span>Resmi tatillerde tarihler değişebilir.</span>
      </div>
    </div>
  );
}