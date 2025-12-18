import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <span className="text-primary font-bold tracking-widest text-sm animate-pulse">
          YÜKLENİYOR...
        </span>
      </div>
    </div>
  );
}