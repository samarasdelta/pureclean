import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceIcon } from "../ui/ServiceIcon";
import { RouteButton } from "../ui/Button";
import { services } from "../../data/site";

export function ServicesGrid({ showAll = false }: { showAll?: boolean }) {
  const list = showAll ? services : services.slice(0, 6);

  return (
    <section id="ypiresies" className="bg-ink-50 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Οι Υπηρεσίες μας"
          title="Ολοκληρωμένες λύσεις καθαρισμού"
          description="Καλύπτουμε κάθε ανάγκη καθαρισμού βόθρων και βιολογικών συστημάτων, για κατοικίες και επιχειρήσεις."
        />

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => (
            <RouteButton
              key={service.slug}
              to={`/ypiresies/${service.slug}`}
              variant="outline"
              className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-ink-100 bg-white p-7 text-left normal-case shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <ServiceIcon icon={service.icon} />
              </span>
              <span className="font-display text-lg font-bold text-ink-900">
                {service.title}
              </span>
              <span className="text-sm font-normal leading-relaxed text-ink-600">
                {service.shortDescription}
              </span>
              <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                Μάθετε Περισσότερα
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </RouteButton>
          ))}
        </div>

        {!showAll && (
          <RouteButton to="/ypiresies" variant="primary" size="lg">
            Δείτε Όλες τις Υπηρεσίες
            <ArrowRight className="h-4 w-4" />
          </RouteButton>
        )}
      </Container>
    </section>
  );
}
