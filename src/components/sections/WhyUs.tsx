import { CheckCircle2 } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceIcon } from "../ui/ServiceIcon";
import { whyUs } from "../../data/site";
import type { Service } from "../../data/site";

const highlightItems: { icon: Service["icon"]; label: string }[] = [
  { icon: "mattress", label: "Στρώματα" },
  { icon: "sofa", label: "Σαλόνια" },
  { icon: "rug", label: "Χαλιά - Μοκέτες" },
  { icon: "kids", label: "Παιδικός Εξοπλισμός" },
];

export function WhyUs() {
  return (
    <section id="sxetika" className="bg-white py-20 sm:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Γιατί Εμάς"
            title="15+ χρόνια εμπειρίας στην υπηρεσία σας"
            description="Η φήμη μας χτίστηκε πάνω στη συνέπεια, την ταχύτητα και τον σεβασμό στον χώρο σας. Δείτε γιατί εκατοντάδες νοικοκυριά και επιχειρήσεις μας εμπιστεύονται."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <h3 className="font-display font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 p-8 shadow-2xl sm:p-10">
          <div className="flex flex-col justify-center divide-y divide-white/15">
            {highlightItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4 py-5 first:pt-0 last:pb-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                  <ServiceIcon icon={item.icon} className="h-5 w-5" />
                </span>
                <span className="text-base font-semibold text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
