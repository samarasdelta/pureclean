import { Phone } from "lucide-react";
import { business } from "../../data/site";

export function FloatingCall() {
  return (
    <a
      href={business.phoneHref}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand-900/30 transition hover:bg-brand-700 hover:-translate-y-0.5 sm:bottom-7 sm:right-7"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-glow opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-glow" />
      </span>
      <Phone className="h-4 w-4" />
      <span className="hidden sm:inline">Καλέστε Τώρα</span>
    </a>
  );
}
