export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#020202] z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 rounded-full border-2 border-t-indigo-500 animate-spin" />
        </div>
        <span className="text-white/40 font-mono text-xs tracking-[0.3em] uppercase animate-pulse">
          Yükleniyor
        </span>
      </div>
    </div>
  );
}