import type { Metadata } from "next";
import { HomeHero } from "@/components/Home/HomeHero";
import { HomeStatsStrip } from "@/components/Home/HomeStatsStrip";
import { HomeDrainServices } from "@/components/Home/HomeDrainServices";
import { HomeLocations } from "@/components/Home/HomeLocations";
import { HomeTestimonials } from "@/components/Home/HomeTestimonials";
import { HomeFaq } from "@/components/Home/HomeFaq";
import { HomeCta } from "@/components/Home/HomeCta";
import { homeFaqs } from "@/components/Home/home-faqs";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/faq-schema";
import { buildPageMetadata } from "@/lib/metadata";

// SEOPlan.md Phase 3: previously "Fast, Professional Drainage Services" —
// generic, no location, and (confirmed via a live SEMrush check) only 36
// characters against a 50-60 recommended range. Rewritten keyword-first
// (the core "drainage services" query) with the same three-county phrase
// used consistently elsewhere on the site (AboutIntro, footer), so this
// page reinforces rather than contradicts that existing signal.
export const metadata: Metadata = buildPageMetadata({
  title: "Drainage Services in London, Essex & Herts | Jet Now Drainage",
  description:
    "Fast, fixed-price drainage services across London, Essex and Hertfordshire: unblocking, CCTV surveys, jetting and 24/7 emergency call-outs within 1-2 hours.",
  path: "/",
});

// SEOPlan.md Phase 6: built from the exact same `homeFaqs` array `HomeFaq`
// renders, so this can never drift from the visible questions/answers.
const faqSchema = buildFaqSchema(homeFaqs);

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <HomeHero />
      <HomeStatsStrip />
      <HomeDrainServices />
      <HomeLocations />
      <HomeTestimonials />
      <HomeCta />
      <HomeFaq />
    </>
  );
}
