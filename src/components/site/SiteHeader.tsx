import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const NAV_LINKS = [
  { label: "Our Cars", href: "#cars" },
  { label: "Rates", href: "#rates" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/85 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground">
            AR
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold text-foreground">
              {BUSINESS.shortName}
              <span className="text-primary"> RYK</span>
            </span>
            <span className="block text-xs font-medium text-muted-foreground">
              Car Rental Agency · Rahim Yar Khan
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BUSINESS.phoneHref}
            className="hidden h-10 items-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-semibold text-foreground transition-colors hover:bg-accent sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            Call Now
          </a>
          <a
            href="#booking"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Car
          </a>
        </div>
      </div>
    </header>
  );
}
