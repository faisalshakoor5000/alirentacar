import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/site/SiteHeader";
import BookingSection from "@/components/site/BookingSection";
import ContactSection, { SiteFooter } from "@/components/site/ContactSection";
import {
  FleetSection,
  Hero,
  RatesSection,
  ReviewsSection,
  TrustBar,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Ali Rent A Car RYK — Cheap Sedan Rentals in Rahim Yar Khan",
      },
      {
        name: "description",
        content:
          "Rent clean, reliable sedans on daily, weekly & monthly basis in Rahim Yar Khan. Open 24 hours, serving all Pakistan. Rated 5.0 from 146 reviews. Call +92 307 7625509.",
      },
      {
        property: "og:title",
        content: "Ali Rent A Car RYK — Cheap Sedan Rentals in Rahim Yar Khan",
      },
      {
        property: "og:description",
        content:
          "All sedan models available at cheap rates for daily, weekly & monthly rentals — all Pakistan. Open 24 hours. Rated 5.0 from 146 reviews.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <FleetSection />
        <RatesSection />
        <ReviewsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
