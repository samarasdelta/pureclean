import { CheckCircle2 } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { whyUs } from "../../data/site";

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

        <div className="relative">
          <div className="aspect-4/5 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 shadow-2xl">
            <div className="bg-grid flex h-full w-full items-end p-10 opacity-90">
              <div className="rounded-2xl bg-white/10 p-6 text-white backdrop-blur-md">
                <p className="font-display text-2xl font-bold">24/7</p>
                <p className="mt-1 text-sm text-white/80">
                  Έκτακτη εξυπηρέτηση για επείγοντα περιστατικά, κάθε μέρα του χρόνου.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
            <p className="font-display text-3xl font-extrabold text-brand-700">100%</p>
            <p className="text-xs font-medium text-ink-600">Νόμιμη Διαδικασία</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
