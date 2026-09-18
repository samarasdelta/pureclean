import { Droplets, FlaskConical, Flame, Waves, CircleGauge, Truck, type LucideIcon } from "lucide-react";
import type { Service } from "../../data/site";

const iconMap: Record<Service["icon"], LucideIcon> = {
  septic: Droplets,
  biological: FlaskConical,
  grease: Flame,
  drain: Waves,
  tank: CircleGauge,
  transport: Truck,
};

export function ServiceIcon({ icon, className = "h-6 w-6" }: { icon: Service["icon"]; className?: string }) {
  const Icon = iconMap[icon];
  return <Icon className={className} strokeWidth={2} />;
}
