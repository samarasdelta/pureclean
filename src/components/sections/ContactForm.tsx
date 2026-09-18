import { type FormEvent, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { business, services } from "../../data/site";

const inputClass =
  "w-full rounded-xl border border-ink-100 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const service = String(form.get("service") ?? "");
    const message = String(form.get("message") ?? "");

    // No backend is wired up yet — this opens the visitor's mail client with
    // the request pre-filled. Swap for a real form endpoint before launch
    // (e.g. Formspree, Netlify Forms, or a serverless function).
    const subject = encodeURIComponent(`Αίτημα προσφοράς — ${service || "Γενικό"}`);
    const body = encodeURIComponent(
      `Όνομα: ${name}\nΤηλέφωνο: ${phone}\nΥπηρεσία: ${service}\n\nΜήνυμα:\n${message}`,
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-600" />
        <h3 className="font-display text-xl font-bold text-ink-900">Ευχαριστούμε!</h3>
        <p className="text-sm text-ink-600">
          Ανοίξαμε το πρόγραμμα email σας με το αίτημά σας συμπληρωμένο — πατήστε αποστολή
          για να ολοκληρωθεί, ή καλέστε μας απευθείας για άμεση εξυπηρέτηση.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSent(false)}>
          Νέο Αίτημα
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-ink-800">
            Ονοματεπώνυμο
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="π.χ. Γιώργος Παπαδόπουλος" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-semibold text-ink-800">
            Τηλέφωνο
          </label>
          <input id="phone" name="phone" required type="tel" className={inputClass} placeholder="69XX XXX XXX" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm font-semibold text-ink-800">
          Υπηρεσία
        </label>
        <select id="service" name="service" className={inputClass} defaultValue="">
          <option value="" disabled>
            Επιλέξτε υπηρεσία
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Άλλο">Άλλο</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-ink-800">
          Μήνυμα
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Περιγράψτε σύντομα το αίτημά σας..."
        />
      </div>

      <Button type="submit" size="lg" className="mt-2 justify-center">
        Αποστολή Αιτήματος
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
