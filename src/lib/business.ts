export const BUSINESS = {
  name: "Ali Rent A Car RYK",
  shortName: "Ali Rent A Car",
  phoneDisplay: "+92 307 7625509",
  phoneHref: "tel:+923077625509",
  whatsappNumber: "923077625509",
  whatsapp: (message: string) =>
    `https://wa.me/923077625509?text=${encodeURIComponent(message)}`,
  address: "Town Hall, Main St, Rahim Yar Khan, 62400, Pakistan",
  plusCode: "C8F7+82 Rahim Yar Khan",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=C8F7%2B82%20Rahim%20Yar%20Khan",
  rating: "5.0",
  reviewCount: 146,
  tagline:
    "All models of sedans available at cheap rates — daily, weekly & monthly basis, all Pakistan.",
} as const;
