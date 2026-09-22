import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { CtaBanner } from "../components/sections/CtaBanner";

export function Services() {
  return (
    <>
      <section className="bg-ink-950 py-20 sm:py-24">
        <Container>
          <SectionHeading
            light
            eyebrow="Υπηρεσίες"
            title="Ό,τι χρειάζεστε για καθαρό και υγιεινό περιβάλλον"
            description="Από τα στρώματα και τα σαλόνια μέχρι τα χαλιά και τον παιδικό εξοπλισμό, καλύπτουμε κάθε ανάγκη καθαρισμού με συνέπεια και σεβασμό στο περιβάλλον."
          />
        </Container>
      </section>
      <ServicesGrid showAll />
      <CtaBanner />
    </>
  );
}
