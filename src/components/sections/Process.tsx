import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { steps } from "../../data/site";

export function Process() {
  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Πώς Δουλεύουμε"
          title="Απλή διαδικασία, χωρίς έκπληξεις"
          description="Από το πρώτο τηλεφώνημα μέχρι την ολοκλήρωση της εργασίας, φροντίζουμε η διαδικασία να είναι απλή και ξεκάθαρη."
        />

        <div className="relative grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-7 left-0 hidden h-px w-full bg-ink-200 lg:block" />
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center gap-4 text-center">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-bold text-white shadow-lg shadow-brand-900/20">
                {index + 1}
              </span>
              <h3 className="font-display text-lg font-bold text-ink-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
