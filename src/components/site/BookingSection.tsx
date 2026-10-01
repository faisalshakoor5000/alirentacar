import { useState } from "react";
import { Check, Loader2, MessageCircle, Send } from "lucide-react";
import { submitBooking } from "@/lib/booking.functions";
import { BUSINESS } from "@/lib/business";

const CAR_OPTIONS = [
  "Any sedan",
  "Toyota Corolla Altis",
  "Honda Civic",
  "Toyota Yaris",
  "Other model",
];

const PERIODS = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
] as const;

type Period = (typeof PERIODS)[number]["value"];

const initialForm = {
  name: "",
  phone: "",
  pickupCity: "",
  carPreference: "Any sedan",
  rentalPeriod: "daily" as Period,
  startDate: "",
  message: "",
  website: "", // honeypot
};

export default function BookingSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof typeof initialForm) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const whatsappMessage = `Hello ${BUSINESS.name}! My name is ${form.name || "____"}. I'd like to rent a car (${form.carPreference}) on a ${form.rentalPeriod} basis${form.pickupCity ? ` from ${form.pickupCity}` : ""}. Please contact me at ${form.phone || "____"}.`;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (form.name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!/^\+?[0-9][0-9\s-]{6,19}$/.test(form.phone.trim())) {
      setError("Please enter a valid phone number.");
      return;
    }

    setStatus("sending");
    try {
      await submitBooking({ data: form });
      setStatus("done");
    } catch {
      setStatus("idle");
      setError(
        "Could not send your request right now — please call or WhatsApp us instead."
      );
    }
  }

  return (
    <section id="booking" className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Book a Car</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Reserve your sedan in under a minute
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Send the form and we'll get back to you with an exact rate for your
            dates. Prefer to talk? We answer calls and WhatsApp 24 hours a day.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Exact quote for your dates — no hidden charges",
              "Pick-up from Town Hall, Rahim Yar Khan or your location",
              "Daily, weekly and monthly packages available",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </span>
                <span className="text-sm text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-surface p-6 sm:p-8">
          {status === "done" ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft">
                <Check className="h-8 w-8 text-primary" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                Request received!
              </h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Thank you{form.name ? `, ${form.name.trim()}` : ""}! We'll call
                you on {form.phone.trim()} shortly with your rate. Want a
                faster answer? Message us on WhatsApp.
              </p>
              <a
                href={BUSINESS.whatsapp(whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Continue on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground">
                  Full name *
                </span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => set("name")(e.target.value)}
                  maxLength={80}
                  placeholder="e.g. Ahmad Ali"
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </label>

              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground">
                  Phone number *
                </span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone")(e.target.value)}
                  maxLength={20}
                  placeholder="03XX XXXXXXX"
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </label>

              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground">
                  Pickup city
                </span>
                <input
                  type="text"
                  value={form.pickupCity}
                  onChange={(e) => set("pickupCity")(e.target.value)}
                  maxLength={80}
                  placeholder="Rahim Yar Khan"
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </label>

              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground">
                  Start date
                </span>
                <input
                  type="date"
                  value={form.startDate}
                  onChange={(e) => set("startDate")(e.target.value)}
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </label>

              <label className="text-sm sm:col-span-2">
                <span className="mb-1.5 block font-semibold text-foreground">
                  Which car?
                </span>
                <select
                  value={form.carPreference}
                  onChange={(e) => set("carPreference")(e.target.value)}
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                >
                  {CAR_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <div className="sm:col-span-2">
                <span className="mb-1.5 block text-sm font-semibold text-foreground">
                  Rental period
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {PERIODS.map((period) => (
                    <button
                      key={period.value}
                      type="button"
                      onClick={() => set("rentalPeriod")(period.value)}
                      className={`h-11 rounded-lg border text-sm font-semibold transition-colors ${
                        form.rentalPeriod === period.value
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-input bg-background text-foreground hover:bg-accent"
                      }`}
                    >
                      {period.label}
                    </button>
                  ))}
                </div>
              </div>

              <label className="text-sm sm:col-span-2">
                <span className="mb-1.5 block font-semibold text-foreground">
                  Anything else?
                </span>
                <textarea
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  maxLength={1000}
                  rows={3}
                  placeholder="Route, number of passengers, airport pickup…"
                  className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </label>

              {/* Honeypot — hidden from real visitors */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e) => set("website")(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {error && (
                <p className="rounded-lg bg-destructive/10 px-4 py-2.5 text-sm font-medium text-destructive sm:col-span-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 sm:col-span-2"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send booking request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
