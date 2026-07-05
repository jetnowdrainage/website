import type { Metadata } from "next";
import { Suspense } from "react";
import { AreasHero } from "@/components/Areas/AreasHero";
import { AreasSeo } from "@/components/Areas/AreasSeo";
import { HomeLocations } from "@/components/Areas/Locations";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/breadcrumb";
import { buildPageMetadata } from "@/lib/metadata";

// SEOPlan.md Phase 3: names the real county count (9 — matches
// `areasServed` in site-config.ts exactly) and lists every county rather
// than trailing off with "and more", which gave AI tools and searchers no
// way to confirm coverage of, say, Suffolk or Bedfordshire specifically.
export const metadata: Metadata = buildPageMetadata({
  title: "Areas We Cover | Drainage Services Across 9 UK Counties",
  description:
    "Jet Now Drainage covers London and the surrounding counties: Essex, Hertfordshire, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire and Suffolk.",
  path: "/areas-we-cover",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Areas We Cover", path: "/areas-we-cover" },
]);

export default function AreasWeCoverPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <AreasHero />
      <HomeLocations />
      <Suspense fallback={null}>
        <AreasSeo />
      </Suspense>
    </>
  );
}
