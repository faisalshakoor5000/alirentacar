import {
  CalendarCheck,
  CalendarDays,
  CalendarRange,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";
import heroImage from "@/assets/hero-sedan.jpg";
import corollaImage from "@/assets/car-corolla.jpg";
import civicImage from "@/assets/car-civic.jpg";
import yarisImage from "@/assets/car-yaris.jpg";
import { BUSINESS } from "@/lib/business";

/* ---------------- Hero ---------------- */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-soft/60">
      <div className="section-shell grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-1.5 text-xs font-semibold text-primary">
            <Clock className="h-3.5 w-3.5" />
            Open 24 hours · Every day
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl">
            Clean sedans on rent — at{" "}
            <span className="text-primary">honestly cheap rates</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {BUSINESS.tagline} Based at Town Hall, Rahim Yar Khan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#booking"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_12px_24px_-12px_rgba(20,60,40,0.5)] transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Book a Car
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-6 text-base font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <span className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-gold text-gold"
                  aria-hidden
                />
              ))}
            </span>
            <span className="text-sm font-semibold text-foreground">
              {BUSINESS.rating} rating
            </span>
            <span className="text-sm text-muted-foreground">
              · {BUSINESS.reviewCount} Google reviews
            </span>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="White sedan available for rent in Rahim Yar Khan"
            width={1600}
            height={912}
            className="aspect-[16/10] w-full rounded-3xl object-cover shadow-[0_24px_60px_-24px_rgba(20,60,40,0.35)]"
          />
          <div className="card-surface absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl px-4 py-3 sm:left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </span>
            <span className="text-sm">
              <span className="block font-semibold text-foreground">
                New & well-maintained vehicles
              </span>
              <span className="text-muted-foreground">
                praised by our customers
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust bar ---------------- */

const TRUST_ITEMS = [
  { icon: Star, title: `${BUSINESS.rating} / 5.0`, sub: `${BUSINESS.reviewCount} verified reviews` },
  { icon: Clock, title: "Open 24 hours", sub: "Call any time, every day" },
  { icon: MapPin, title: "All Pakistan", sub: "Any city, any route" },
  { icon: ShieldCheck, title: "Clean & reliable", sub: "Well-maintained cars" },
];

export function TrustBar() {
  return (
    <section className="section-shell py-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_ITEMS.map(({ icon: Icon, title, sub }) => (
          <div
            key={title}
            className="card-surface flex items-center gap-4 rounded-2xl p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
              <Icon className="h-5 w-5 text-primary" />
            </span>
            <span>
              <span className="block font-display text-base font-bold text-foreground">
                {title}
              </span>
              <span className="text-sm text-muted-foreground">{sub}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Fleet ---------------- */

const FLEET = [
  {
    image: corollaImage,
    name: "Toyota Corolla Altis",
    category: "Most requested",
    description:
      "The favourite of our repeat customers — comfortable, dependable and perfect for long routes across Pakistan.",
    alt: "White Toyota Corolla Altis sedan available for rent",
  },
  {
    image: civicImage,
    name: "Honda Civic & similar",
    category: "Executive sedan",
    description:
      "A smooth, stylish ride for business trips and weddings — ask for the latest available model.",
    alt: "Silver Honda Civic sedan available for rent",
  },
  {
    image: yarisImage,
    name: "Toyota Yaris & similar",
    category: "Economy sedan",
    description:
      "Our cheapest option for daily city runs — light on fuel and easy to park anywhere.",
    alt: "White Toyota Yaris compact sedan available for rent",
  },
];

export function FleetSection() {
  return (
    <section id="cars" className="bg-secondary/50 py-20">
      <div className="section-shell">
        <p className="eyebrow">Our Cars</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Sedans for every trip
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          We keep all models of sedans — economy to executive. Tell us what you
          need and we'll have the right car ready.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FLEET.map((car) => (
            <article key={car.name} className="card-surface overflow-hidden">
              <img
                src={car.image}
                alt={car.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {car.category}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                  {car.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {car.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Other sedan models available on request — call for current
          availability and rates.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Rates ---------------- */

const PLANS = [
  {
    icon: CalendarDays,
    name: "Daily",
    sub: "Per day",
    description:
      "Perfect for city runs, errands and same-day trips around Rahim Yar Khan.",
  },
  {
    icon: CalendarRange,
    name: "Weekly",
    sub: "7 days & up",
    description:
      "Better value for work trips and family visits across nearby cities.",
    featured: true,
  },
  {
    icon: CalendarCheck,
    name: "Monthly",
    sub: "Long-term",
    description:
      "Our best rates — customers say our monthly deals beat every other company they compared.",
  },
];

export function RatesSection() {
  return (
    <section id="rates" className="py-20">
      <div className="section-shell">
        <p className="eyebrow">Rates</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Cheap rates, no surprises
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Daily, weekly and monthly packages for every sedan. Rates vary by
          model, season and route — send the form or call for an exact quote
          within minutes.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PLANS.map(({ icon: Icon, name, sub, description, featured }) => (
            <article
              key={name}
              className={`card-surface relative flex flex-col p-7 ${
                featured ? "border-primary/30 bg-brand-soft/50" : ""
              }`}
            >
              {featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft">
                <Icon className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                {name}
              </h3>
              <span className="mt-1 text-sm font-semibold text-primary">
                {sub}
              </span>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <a
                href="#booking"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get today's rate
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */

const REVIEWS = [
  {
    name: "Muhammad Shahzad",
    when: "5 months ago · 1 month rental",
    quote:
      "I rented a car for a whole month and it was an amazing experience. The price was really appropriate and actually better than the rest of the rental companies when I did the comparison. The whole process was really smooth.",
  },
  {
    name: "Amjad Ali",
    when: "4 weeks ago",
    quote:
      "Reasonable rates. Very interesting and reliable service — car was very clean. I am very satisfied.",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-secondary/50 py-20">
      <div className="section-shell">
        <p className="eyebrow">Reviews</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Customers rate us {BUSINESS.rating} out of 5
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="card-surface flex flex-col items-center justify-center rounded-2xl p-8 text-center">
            <span className="font-display text-6xl font-bold text-foreground">
              {BUSINESS.rating}
            </span>
            <span className="mt-3 flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-gold text-gold"
                  aria-hidden
                />
              ))}
            </span>
            <span className="mt-3 text-sm text-muted-foreground">
              Based on {BUSINESS.reviewCount} Google reviews
            </span>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              See all reviews on Google
            </a>
          </div>

          {REVIEWS.map((review) => (
            <figure key={review.name} className="card-surface flex flex-col p-7">
              <span className="flex" aria-hidden>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </span>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5">
                <span className="block font-semibold text-foreground">
                  {review.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {review.when}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
