import type { Metadata } from "next";
import { AboutHero } from "@/components/About/AboutHero";
import { HomeStatsStrip } from "@/components/Home/HomeStatsStrip";
import { AboutIntro } from "@/components/About/AboutIntro";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/breadcrumb";
import { buildPageMetadata } from "@/lib/metadata";

// SEOPlan.md Phase 3: adds the brand + trade-specific differentiator
// ("family-run drainage specialists") the previous generic "About Us"
// title lacked, and states the real, existing "10+ years" claim already
// used in HomeStatsStrip rather than a new, unverified figure.
export const metadata: Metadata = buildPageMetadata({
  title: "About Jet Now Drainage | Family-Run Drainage Specialists",
  description:
    "Jet Now Drainage is an independent, family-run drainage specialist with 10+ years' experience, serving London, Essex and Hertfordshire.",
  path: "/about-us",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
]);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <AboutHero />
      <HomeStatsStrip />
      <AboutIntro />
    </>
  );
}
