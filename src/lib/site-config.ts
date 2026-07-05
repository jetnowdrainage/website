/**
 * Single source of truth for business details that are repeated across
 * machine-readable surfaces (robots.txt, sitemap.xml, llms.txt, and the
 * sitewide LocalBusiness JSON-LD in the root layout).
 *
 * Keeping these in one place means every AI crawler, search engine, and
 * structured data block sees exactly the same name, contact details, and
 * coverage area — inconsistency between these surfaces is itself a trust
 * signal AI systems and Google use when deciding whether to cite a site.
 */

export const siteUrl = "https://www.jetnowdrainage.co.uk";

export const business = {
  name: "Jet Now Drainage",
  /** E.164 format, used for `tel:` links and schema.org `telephone`. */
  phoneIntl: "+447804450233",
  /** Human-readable format, used in visible copy. */
  phoneDisplay: "07804 450 233",
  email: "info@jetnowdrainage.co.uk",
  /** wa.me deep link — same one used by the floating WhatsApp button and every "WhatsApp Us" CTA. */
  whatsappUrl: "https://wa.me/447804450233",
  /** Kept as prose so it can be reused verbatim in llms.txt and metadata. */
  responsePromise:
    "Jet Now Drainage aims to attend emergency call-outs within 1-2 hours and operates 24 hours a day, 7 days a week.",
  ogImagePath: "/JetNow/JetNowLogo.jpg",
  /**
   * Confirmed by Jack (05/07/2026) and independently cross-checked against
   * the live Google Business Profile listing, which shows "Open 24 hours"
   * — see `googleBusinessProfileUrl` below. Genuinely 24/7, not marketing
   * shorthand, so this is safe to state as a factual schema.org claim.
   */
  isOpen24Hours: true,
  /**
   * Confirmed by Jack (05/07/2026): Jet Now Drainage operates as a
   * service-area business with no public premises — engineers travel to
   * the customer rather than customers visiting a shopfront. This mirrors
   * Google Business Profile's own "service area business" (CUSTOMER_LOCATION_ONLY)
   * model. Per current schema.org / Google structured-data best practice
   * for this exact business type, no `address` is included anywhere in
   * this codebase's structured data — `areaServed` carries the coverage
   * signal instead. Do not add a fabricated or residential address here.
   */
  isServiceAreaBusiness: true,
  /**
   * The real, verified Google Business Profile for this exact business —
   * confirmed by fetching the listing directly (name "JetNow Drainage",
   * phone matches, "Open 24 hours"). Important because web search results
   * for this business name collide with several unrelated companies
   * (e.g. "NOW Drainage" in Bournemouth, "Jet Drains Ltd"), so this link is
   * the disambiguated source of truth for Phase 10's reviews integration.
   * The Places API needs a Place ID rather than this `cid`-based Maps URL;
   * resolving that is Phase 10 work.
   */
  googleBusinessProfileUrl:
    "https://www.google.com/maps/place/JetNow+Drainage/data=!4m2!3m1!1s0x0:0x2839d89031f2d90d",
  /**
   * Confirmed directly by Jack from the live Google Business Profile
   * listing (05/07/2026): 5.0 stars from 23 reviews. This is a real,
   * verified snapshot — not an estimate — but it's still a snapshot: the
   * review count will keep climbing, so this figure should be re-checked
   * periodically (or, better, replaced by a live Places API pull once
   * Phase 10's reviews component exists) rather than left to go stale
   * indefinitely.
   */
  googleRating: {
    ratingValue: 5.0,
    reviewCount: 23,
    /** Last confirmed against the live listing — see comment above. */
    lastVerified: "2026-07-05",
  },
} as const;

/**
 * schema.org `OpeningHoursSpecification` for a genuinely 24/7 business:
 * per Google's own structured data guidance, this is expressed as
 * `opens: "00:00"` / `closes: "23:59"` for every day of the week (rather
 * than "00:00"–"00:00", which Google's docs explicitly say means closed
 * all day).
 */
export const openingHoursSpecification = business.isOpen24Hours
  ? [
      {
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ]
  : [];

/** Counties covered, in the same order used by the LocalBusiness schema. */
export const areasServed = [
  "London",
  "Essex",
  "Hertfordshire",
  "Surrey",
  "Kent",
  "Cambridgeshire",
  "Bedfordshire",
  "Buckinghamshire",
  "Suffolk",
] as const;

export const sameAs = [
  "https://www.facebook.com/jetnowdrainage",
  "https://www.instagram.com/jetnow_drainage/",
  "https://www.tiktok.com/@jetnowdrainage",
  "https://www.youtube.com/@jetnowdrainage",
] as const;
