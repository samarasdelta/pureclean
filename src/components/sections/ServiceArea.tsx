import { MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { business } from "../../data/site";

export function ServiceArea() {
  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Περιοχή Εξυπηρέτησης"
          title="Καλύπτουμε τη Νέα Μηχανιώνα και όλη τη Θεσσαλονίκη"
          description="Εξυπηρετούμε γρήγορα κατοικίες και επιχειρήσεις σε ολόκληρο τον νομό."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {business.areasServed.map((area) => (
            <span
              key={area}
              className="flex items-center gap-2 rounded-full border border-ink-100 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 shadow-sm"
            >
              <MapPin className="h-3.5 w-3.5 text-brand-600" />
              {area}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
