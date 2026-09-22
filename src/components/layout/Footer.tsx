import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../ui/Container";
import { FacebookIcon, InstagramIcon } from "../ui/SocialIcons";
import { BrandMark } from "../ui/BrandMark";
import { business, services } from "../../data/site";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-100">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link to="/">
            <BrandMark textClassName="text-white" size="sm" />
          </Link>
          <p className="text-sm leading-relaxed text-ink-100/70">
            Βιολογικοί καθαρισμοί στρωμάτων, σαλονιών, χαλιών & μοκετών και συναφείς
            υπηρεσίες στη Νέα Μηχανιώνα και σε όλη τη Θεσσαλονίκη.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-600"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-600"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Υπηρεσίες
          </h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-ink-100/70">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link to={`/ypiresies/${service.slug}`} className="transition hover:text-brand-300">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Σύνδεσμοι
          </h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-ink-100/70">
            <li>
              <Link to="/" className="transition hover:text-brand-300">
                Αρχική
              </Link>
            </li>
            <li>
              <Link to="/ypiresies" className="transition hover:text-brand-300">
                Όλες οι Υπηρεσίες
              </Link>
            </li>
            <li>
              <Link to="/#sxetika" className="transition hover:text-brand-300">
                Σχετικά με εμάς
              </Link>
            </li>
            <li>
              <Link to="/epikoinonia" className="transition hover:text-brand-300">
                Επικοινωνία
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Επικοινωνία
          </h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-ink-100/70">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <a href={business.phoneHref} className="hover:text-brand-300">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <a href={`mailto:${business.email}`} className="hover:text-brand-300">
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <span>{business.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-ink-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {business.legalName}. Με επιφύλαξη παντός δικαιώματος.</p>
          <p>Σχεδιασμός & Ανάπτυξη ιστοσελίδας</p>
        </Container>
      </div>
    </footer>
  );
}
