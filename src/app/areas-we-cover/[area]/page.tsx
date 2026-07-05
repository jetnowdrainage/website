import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas, getAreaBySlug } from "@/components/Areas/areas-data";
import { AreaPageHero } from "@/components/Areas/AreaPage/AreaPageHero";
import { AreaPageTowns } from "@/components/Areas/AreaPage/AreaPageTowns";
import { AreaPageServices } from "@/components/Areas/AreaPage/AreaPageServices";
import { AreaPageCta } from "@/components/Areas/AreaPage/AreaPageCta";
import { AreaPageBackLink } from "@/components/Areas/AreaPage/AreaPageBackLink";
import { ServicePageIntro } from "@/components/Services/ServicePage/ServicePageIntro";
import { ServicePageFaq } from "@/components/Services/ServicePage/ServicePageFaq";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/breadcrumb";
import { buildFaqSchema } from "@/lib/faq-schema";
import { buildPageMetadata } from "@/lib/metadata";

type AreaPageParams = {
  params: Promise<{ area: string }>;
};

/**
 * One statically-generated page per county/coverage-area row on
 * /areas-we-cover (SEOPlan.md Phase 5, rewritten 05/07/2026 — this replaced
 * the original "Google reviews component" Phase 5, which is deferred; see
 * SEOPlan.md for the full rationale). Built as a single dynamic route reading
 * from `areas-data.ts` rather than ten hand-built files like the Phase 4
 * service pages: geographic coverage pages are naturally data-shaped (a
 * name, a town list, a set of services offered everywhere), so the
 * uniqueness that matters for SEO lives in each area's hand-written intro
 * and FAQ copy in the data file, not in bespoke page structure per county.
 */
export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: AreaPageParams): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return buildPageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas-we-cover/${area.slug}`,
  });
}

export default async function AreaPage({ params }: AreaPageParams) {
  const { area: slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Areas We Cover", path: "/areas-we-cover" },
    { name: area.county, path: `/areas-we-cover/${area.slug}` },
  ]);

  const faqSchema = buildFaqSchema(area.faqs);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <AreaPageHero
        county={area.county}
        description={area.heroDescription}
        imageSrc={area.heroImage}
        imageAlt={area.heroImageAlt}
      />

      <ServicePageIntro paragraphs={area.intro} />

      <AreaPageTowns county={area.county} towns={area.towns} />

      <AreaPageServices county={area.county} />

      <ServicePageFaq faqs={area.faqs} heading={`Frequently Asked Questions About ${area.county}`} />

      <AreaPageBackLink />

      <AreaPageCta county={area.county} />
    </>
  );
}
