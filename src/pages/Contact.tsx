import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ContactForm } from "../components/sections/ContactForm";
import { business } from "../data/site";

export function Contact() {
  return (
    <>
      <section className="bg-ink-950 py-20 sm:py-24">
        <Container>
          <SectionHeading
            light
            eyebrow="Επικοινωνία"
            title="Ας μιλήσουμε για την ανάγκη σας"
            description="Συμπληρώστε τη φόρμα ή καλέστε μας απευθείας — απαντάμε γρήγορα, κάθε μέρα."
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-ink-100 bg-ink-50 p-6 sm:p-10">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex items-start gap-4 rounded-2xl border border-ink-100 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-bold text-ink-900">Τηλέφωνο</h3>
                <a href={business.phoneHref} className="block text-sm text-ink-600 hover:text-brand-700">
                  {business.phoneDisplay}
                </a>
                <a href={business.mobileHref} className="block text-sm text-ink-600 hover:text-brand-700">
                  {business.mobileDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-ink-100 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-bold text-ink-900">Email</h3>
                <a href={`mailto:${business.email}`} className="block text-sm text-ink-600 hover:text-brand-700">
                  {business.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-ink-100 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-bold text-ink-900">Έδρα</h3>
                <p className="text-sm text-ink-600">{business.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-ink-100 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-bold text-ink-900">Ωράριο</h3>
                <p className="text-sm text-ink-600">{business.hoursWeekdays}</p>
                <p className="text-sm text-ink-600">{business.hoursWeekend}</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-ink-100">
              <iframe
                title="Χάρτης - Νέα Μηχανιώνα"
                src="https://www.google.com/maps?q=Nea+Michaniona,+Thessaloniki&output=embed"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
