import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceIcon } from "../ui/ServiceIcon";
import { LinkButton } from "../ui/Button";
import { business, whyUs } from "../../data/site";
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
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <SectionHeading align="left" eyebrow="Γιατί Εμάς" title={`Από το ${business.foundedYear}`} />
          <div className="flex max-w-3xl flex-col gap-4 text-lg leading-relaxed text-ink-600">
            <p>
              Η επιχείρηση του κ. Τζάτζου Παναγιώτη "Pure Clean", η οποία εδρεύει από το{" "}
              {business.foundedYear} στη Θεσσαλονίκη, έχοντας πολυετή εμπειρία και γνώση αναλαμβάνει
              παντός είδους βιολογικούς καθαρισμούς σαλονιών, στρωμάτων, χαλιών, μοκετών, παιδικού
              εξοπλισμού και καθισμάτων γραφείου και αυτοκινήτου.
            </p>
            <p>
              Έχοντας φέρει σε πέρας ένα μεγάλο αριθμό υπηρεσιών βιολογικού καθαρισμού, η εταιρεία μας
              συνεχίζει ανοδικά την πορεία της, καθώς το ενδιαφέρον μας επικεντρώνεται να γίνουμε όχι μόνο
              μια επιτυχημένη επιχείρηση, αλλά μια επιχείρηση πρότυπο, αναβαθμίζοντας τη ποιότητα ζωής των
              πελατών μας.
            </p>
          </div>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
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
        </div>

        <div className="flex flex-col items-start gap-4 rounded-2xl border border-ink-100 bg-ink-50 p-6 sm:flex-row sm:items-center sm:p-7">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <p className="font-display font-bold text-ink-900">Πιστοποίηση TÜV AUSTRIA</p>
            <p className="mt-0.5 text-sm text-ink-600">
              Οι υπηρεσίες μας φέρουν την επίσημη πιστοποίηση της TÜV AUSTRIA.
            </p>
          </div>
          <LinkButton
            href={business.certificationUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="md"
          >
            Πιστοποίηση
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
