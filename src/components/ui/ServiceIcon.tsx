import { Leaf, Bed, Sofa, SwatchBook, Baby, Briefcase, SprayCan, type LucideIcon } from "lucide-react";
import type { Service } from "../../data/site";

const iconMap: Record<Service["icon"], LucideIcon> = {
  bio: Leaf,
  mattress: Bed,
  sofa: Sofa,
  rug: SwatchBook,
  kids: Baby,
  office: Briefcase,
  sanitize: SprayCan,
};

export function ServiceIcon({ icon, className = "h-6 w-6" }: { icon: Service["icon"]; className?: string }) {
  const Icon = iconMap[icon];
  return <Icon className={className} strokeWidth={2} />;
}
