import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Container } from "../ui/Container";
import { RouteButton } from "../ui/Button";
import { business } from "../../data/site";

const links = [
  { to: "/", label: "Αρχική" },
  { to: "/ypiresies", label: "Υπηρεσίες" },
  { to: "/#sxetika", label: "Σχετικά" },
  { to: "/epikoinonia", label: "Επικοινωνία" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 font-display text-lg font-bold text-white shadow-md shadow-brand-900/20">
            PC
          </span>
          <span
            className={`font-display text-xl font-bold tracking-tight ${
              scrolled ? "text-ink-900" : "text-ink-900"
            }`}
          >
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-brand-600 ${
                  isActive ? "text-brand-700" : "text-ink-800"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-ink-900 hover:text-brand-600"
          >
            <Phone className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <RouteButton to="/epikoinonia" size="sm">
            Ζητήστε Προσφορά
          </RouteButton>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Μενού"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-ink-800 hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={business.phoneHref}
              className="mt-2 flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-3 text-sm font-bold text-brand-700"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
