import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { Container } from "../components/ui/Container";
import { ServiceIcon } from "../components/ui/ServiceIcon";
import { RouteButton, LinkButton } from "../components/ui/Button";
import { business, services } from "../data/site";

export function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/ypiresies" replace />;
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="bg-ink-950 py-20 sm:py-24">
        <Container className="flex flex-col items-start gap-6">
          <Link
            to="/ypiresies"
            className="flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Όλες οι Υπηρεσίες
          </Link>
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-900/30">
            <ServiceIcon icon={service.icon} className="h-8 w-8" />
          </span>
          <h1 className="font-display max-w-2xl text-balance text-3xl font-bold text-white sm:text-4xl">
            {service.title}
          </h1>
          <p className="max-w-2xl text-balance text-lg text-ink-100/80">
            {service.shortDescription}
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-balance text-lg leading-relaxed text-ink-700">
              {service.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 rounded-xl bg-ink-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm font-medium text-ink-800">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-ink-50 p-7 h-fit">
            <h2 className="font-display text-lg font-bold text-ink-900">
              Χρειάζεστε αυτή την υπηρεσία;
            </h2>
            <p className="text-sm text-ink-600">
              Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση κόστους, χωρίς καμία δέσμευση.
            </p>
            <LinkButton href={business.phoneHref} variant="primary" className="justify-center">
              <PhoneCall className="h-4 w-4" />
              {business.phoneDisplay}
            </LinkButton>
            <RouteButton to="/epikoinonia" variant="outline" className="justify-center">
              Ζητήστε Προσφορά Online
            </RouteButton>
          </aside>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <h2 className="font-display text-2xl font-bold text-ink-900">Σχετικές Υπηρεσίες</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/ypiresies/${r.slug}`}
                className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-ink-100 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <ServiceIcon icon={r.icon} className="h-5 w-5" />
                </span>
                <span className="font-display font-bold text-ink-900">{r.title}</span>
                <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Δείτε Περισσότερα
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
