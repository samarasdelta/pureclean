import { Home as HomeIcon } from "lucide-react";
import { Container } from "../components/ui/Container";
import { RouteButton } from "../components/ui/Button";

export function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-ink-50 py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="font-display text-7xl font-extrabold text-brand-600">404</span>
        <h1 className="font-display text-2xl font-bold text-ink-900">
          Η σελίδα δεν βρέθηκε
        </h1>
        <p className="max-w-md text-ink-600">
          Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.
        </p>
        <RouteButton to="/" size="lg">
          <HomeIcon className="h-4 w-4" />
          Επιστροφή στην Αρχική
        </RouteButton>
      </Container>
    </section>
  );
}
