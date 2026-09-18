import { ShieldCheck, Clock3, Leaf, ArrowRight, Phone } from "lucide-react";
import { Container } from "../ui/Container";
import { RouteButton, LinkButton } from "../ui/Button";
import { business } from "../../data/site";

const badges = [
  { icon: ShieldCheck, label: "Αδειοδοτημένη Εταιρεία" },
  { icon: Clock3, label: "Άμεση Εξυπηρέτηση" },
  { icon: Leaf, label: "Φιλικό προς το Περιβάλλον" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-950 to-ink-950" />
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-amber-glow/10 blur-3xl" />

      <Container className="relative flex flex-col items-center gap-10 py-24 text-center sm:py-32 lg:py-36">
        <div className="animate-fade-up flex flex-wrap items-center justify-center gap-3">
          {badges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-brand-100 backdrop-blur"
            >
              <Icon className="h-3.5 w-3.5 text-brand-300" />
              {label}
            </span>
          ))}
        </div>

        <h1
          className="animate-fade-up font-display text-balance max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "0.1s" }}
        >
          Βιολογικοί Καθαρισμοί & Άδειασμα Βόθρων στη{" "}
          <span className="bg-gradient-to-r from-brand-300 to-amber-glow bg-clip-text text-transparent">
            Νέα Μηχανιώνα
          </span>
        </h1>

        <p
          className="animate-fade-up max-w-2xl text-balance text-lg leading-relaxed text-ink-100/80 sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          Εξειδικευμένες υπηρεσίες καθαρισμού βόθρων, βιολογικών συστημάτων και λιποσυλλεκτών
          σε όλη τη Θεσσαλονίκη. Γρήγορη ανταπόκριση, σύγχρονος εξοπλισμός, καθαρή δουλειά.
        </p>

        <div
          className="animate-fade-up flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <RouteButton to="/epikoinonia" variant="accent" size="lg">
            Ζητήστε Δωρεάν Προσφορά
            <ArrowRight className="h-4 w-4" />
          </RouteButton>
          <LinkButton href={business.phoneHref} variant="ghost" size="lg">
            <Phone className="h-4 w-4" />
            {business.phoneDisplay}
          </LinkButton>
        </div>
      </Container>

      <svg
        className="relative block w-full text-ink-50"
        viewBox="0 0 1440 80"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0 40 C 240 90, 480 0, 720 30 C 960 60, 1200 10, 1440 40 L1440 80 L0 80 Z" />
      </svg>
    </section>
  );
}
