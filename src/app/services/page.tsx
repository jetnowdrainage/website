import type { Metadata } from "next";
import { ServicesHero } from "@/components/Services/ServicesHero";
import { ServicesGrid } from "@/components/Services/ServicesGrid";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/breadcrumb";
import { buildPageMetadata } from "@/lib/metadata";

// SEOPlan.md Phase 3: leads with the actual service names (drain
// unblocking, CCTV surveys, jetting) rather than the word "services"
// twice, matching current local-trade SEO guidance of naming the primary
// keyword first rather than a generic category term.
export const metadata: Metadata = buildPageMetadata({
  title: "Drain Unblocking, CCTV Surveys & Jetting | Jet Now Drainage",
  description:
    "Jet Now Drainage's full range of services: drain unblocking, CCTV surveys, high-pressure jetting, relining, tankering and 24/7 emergency call-outs.",
  path: "/services",
});

// NOTE (SEOPlan.md, Phase 4): once individual /services/[slug] pages exist,
// each of those pages should build a three-item trail instead of reusing
// this one — Home > Services > [Service].
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ServicesHero />
      <ServicesGrid />
    </>
  );
}
