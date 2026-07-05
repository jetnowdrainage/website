import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DesktopNavbar } from "@/components/Navigation/DesktopNavbar/DesktopNavbar";
import { MobileNavbar } from "@/components/Navigation/MobileNavbar/MobileNavbar";
import { FloatingWhatsappButton } from "@/components/Contact/FloatingWhatsappButton";
import { SiteFooter } from "@/components/Footer/SiteFooter";
import { ComingSoonScreen } from "@/components/ComingSoon/ComingSoonScreen";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { JsonLd } from "@/components/JsonLd";
import { areasServed, business, openingHoursSpecification, sameAs, siteUrl } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogImagePath = business.ogImagePath;
const comingSoonFlag = process.env.coming_soon ?? process.env.COMING_SOON ?? "";
const isComingSoon = comingSoonFlag.toLowerCase() === "true";

// SEOPlan.md Phase 3: this block is a fallback only — every real page now
// supplies its own full title/description/Open Graph/Twitter data via
// `buildPageMetadata()` (see `src/lib/metadata.ts`), each hand-tuned for
// that page. Kept fresh (rather than left as generic filler text) purely
// so nothing stale is ever shown for a page that doesn't set its own —
// currently none.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jet Now Drainage | Drainage Services in London, Essex & Herts",
    template: "%s | Jet Now Drainage",
  },
  description:
    "Fast, fixed-price drainage services across London, Essex and Hertfordshire: unblocking, CCTV surveys, jetting and 24/7 emergency call-outs within 1-2 hours.",
  alternates: {
    canonical: "/",
  },
  robots: isComingSoon
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
      },
  openGraph: {
    title: "Jet Now Drainage | Drainage Services in London, Essex & Herts",
    description:
      "Fast, fixed-price drainage services across London, Essex and Hertfordshire: unblocking, CCTV surveys, jetting and 24/7 emergency call-outs within 1-2 hours.",
    url: siteUrl,
    siteName: "Jet Now Drainage",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: ogImagePath,
        width: 1024,
        height: 1024,
        alt: "Jet Now Drainage logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jet Now Drainage | Drainage Services in London, Essex & Herts",
    description:
      "Fast, fixed-price drainage services across London, Essex and Hertfordshire: unblocking, CCTV surveys, jetting and 24/7 emergency call-outs within 1-2 hours.",
    images: [ogImagePath],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SEOPlan.md Phase 2, item 1 — resolved (05/07/2026):
  // - `@type` upgraded to the schema.org "Plumber" subtype (under
  //   HomeAndConstructionBusiness), which is a closer, officially valid
  //   classification for a drainage trade business than the more generic
  //   "ProfessionalService" the audit suggested.
  // - `address` is deliberately still absent: Jack confirmed Jet Now
  //   Drainage runs as a service-area business with no public premises,
  //   which is the correct schema.org/Google representation for that
  //   business model — `areaServed` below carries the coverage signal
  //   instead. This is a considered decision, not a gap.
  // - `openingHoursSpecification` is now included: confirmed genuinely
  //   24/7 by Jack and cross-checked against the live Google Business
  //   Profile (see `business.googleBusinessProfileUrl`).
  // - `priceRange` remains omitted by choice — no figure was offered and
  //   none has been invented.
  //
  // SEOPlan.md Phase 2, item 2 — resolved (05/07/2026): `aggregateRating`
  // sourced from `business.googleRating`, confirmed by Jack directly from
  // the live, verified Google Business Profile listing (5.0 stars, 23
  // reviews) — see that constant's comment for why this is a snapshot
  // that should be re-verified periodically rather than a live figure.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber"],
    "@id": `${siteUrl}/#localbusiness`,
    name: business.name,
    url: siteUrl,
    image: `${siteUrl}${ogImagePath}`,
    telephone: business.phoneIntl,
    email: business.email,
    areaServed: [...areasServed],
    openingHoursSpecification,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.googleRating.ratingValue,
      reviewCount: business.googleRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [...sameAs],
  };

  return (
    // SEOPlan.md Phase 3: `lang` set to the specific `en-GB` locale rather
    // than generic `en` — a small, accurate signal for a site written in
    // British English, for a UK-only audience, using UK terminology and
    // GBP-implicit pricing language. `hreflang` tags were deliberately
    // *not* added: per current Google Search Central guidance, hreflang
    // only has a purpose when a site has multiple language/region
    // variants of the *same* page to disambiguate between (e.g. en-GB vs
    // en-US versions). Jet Now Drainage has exactly one version of every
    // page, in one language, for one country — there's nothing for
    // hreflang to disambiguate, so adding it would be inert markup that
    // does nothing (confirmed against Google's own docs and current
    // international-SEO guidance, not assumed).
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <JsonLd data={localBusinessSchema} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {isComingSoon ? (
            <ComingSoonScreen />
          ) : (
            <>
              <MobileNavbar />
              <DesktopNavbar />
              <main className="flex-1">{children}</main>
              <FloatingWhatsappButton />
              <SiteFooter />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
