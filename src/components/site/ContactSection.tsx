import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/50 pb-20 pt-20">
      <div className="section-shell">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Call any time — we're open 24 hours
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <a
            href={BUSINESS.phoneHref}
            className="card-surface group flex flex-col p-6 transition-transform hover:-translate-y-0.5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft">
              <Phone className="h-5 w-5 text-primary" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">
              Call us
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {BUSINESS.phoneDisplay}
            </p>
            <span className="mt-4 text-sm font-semibold text-primary group-hover:underline">
              Tap to call
            </span>
          </a>

          <a
            href={BUSINESS.whatsapp(
              `Hello ${BUSINESS.name}! I'd like to ask about renting a car.`
            )}
            target="_blank"
            rel="noreferrer"
            className="card-surface group flex flex-col p-6 transition-transform hover:-translate-y-0.5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft">
              <MessageCircle className="h-5 w-5 text-primary" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">
              WhatsApp
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Same number — quick replies
            </p>
            <span className="mt-4 text-sm font-semibold text-primary group-hover:underline">
              Start a chat
            </span>
          </a>

          <div className="card-surface flex flex-col p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft">
              <MapPin className="h-5 w-5 text-primary" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">
              Visit us
            </h3>
            <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
              {BUSINESS.address}
            </p>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Get directions on Google Maps
            </a>
          </div>

          <div className="card-surface flex flex-col p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft">
              <Clock className="h-5 w-5 text-primary" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">
              Hours
            </h3>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">
              Open 24 hours, every day of the week.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Plus code: {BUSINESS.plusCode}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="section-shell flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-base font-bold text-foreground">
            {BUSINESS.name}
          </p>
          <p className="text-sm text-muted-foreground">{BUSINESS.tagline}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 {BUSINESS.name} · Rahim Yar Khan, Pakistan
        </p>
      </div>
    </footer>
  );
}
