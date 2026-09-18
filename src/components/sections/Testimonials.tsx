import { Star } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { testimonials } from "../../data/site";

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Μαρτυρίες Πελατών"
          title="Η γνώμη τους μετράει"
          description="Η ικανοποίηση των πελατών μας είναι η καλύτερη διαφήμιση."
        />

        <div className="grid w-full gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-ink-50 p-7"
            >
              <div className="flex gap-1 text-amber-glow">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-ink-800">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto text-sm font-bold text-ink-900">
                {t.name}
                <span className="ml-1.5 font-normal text-ink-400">— {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
