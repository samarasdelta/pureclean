import { ArrowRight, PhoneCall } from "lucide-react";
import { Container } from "../ui/Container";
import { RouteButton, LinkButton } from "../ui/Button";
import { business } from "../../data/site";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-16 sm:py-20">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
          <PhoneCall className="h-6 w-6" />
        </span>
        <h2 className="font-display text-balance max-w-xl text-3xl font-bold text-white sm:text-4xl">
          Έτοιμοι να κλείσετε ραντεβού;
        </h2>
        <p className="max-w-lg text-balance text-brand-100/90">
          Καλέστε μας τώρα για μια δωρεάν εκτίμηση ή κλείστε ραντεβού online μέσα σε λίγα λεπτά.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <LinkButton href={business.phoneHref} variant="accent" size="lg">
            <PhoneCall className="h-4 w-4" />
            {business.phoneDisplay}
          </LinkButton>
          <RouteButton to="/epikoinonia" variant="ghost" size="lg">
            Online Ραντεβού
            <ArrowRight className="h-4 w-4" />
          </RouteButton>
        </div>
      </Container>
    </section>
  );
}
