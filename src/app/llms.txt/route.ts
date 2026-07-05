import { areasServed, business, siteUrl } from "@/lib/site-config";
import { services } from "@/components/Services/services-data";
import { areas as areaPages } from "@/components/Areas/areas-data";

/**
 * llms.txt — an emerging, unratified convention (llmstxt.org) for giving AI
 * assistants a short, curated, plain-language map of a site: who the
 * business is, what it does, and where to find the pages that matter.
 *
 * As of mid-2026 no major AI vendor has confirmed reading this file at
 * inference time, so it is not a substitute for the structured data
 * (schema.org JSON-LD) or the content depth work elsewhere in the SEO plan —
 * see docs/SEOPlan.md, Phase 1. It is a low-cost, low-risk addition that
 * closes the specific gap raised in the AI search audit, and it costs
 * nothing to keep in sync going forward.
 *
 * Served as a real Route Handler (rather than a static file in `public/`)
 * so the content can be composed from the same `site-config` values used by
 * the sitewide LocalBusiness schema, keeping every machine-readable surface
 * consistent. See `app/rss.xml/route.ts`-style "Non-UI Responses" pattern
 * documented for Next.js Route Handlers.
 *
 * SEOPlan.md Phase 4: the "## Services" section below now links to each of
 * the 8 individual `/services/[slug]` pages directly, generated from the
 * same `services` catalog the flip-card grid and sitemap use.
 *
 * SEOPlan.md Phase 5: the "## Areas We Cover" section below links to each of
 * the 10 individual `/areas-we-cover/[area]` pages directly, generated from
 * the same `areas` catalog the coverage accordion and sitemap use.
 */

const summary =
  "Jet Now Drainage is a family-run drainage company providing fast, fixed-price drain unblocking, CCTV drain surveys, high-pressure jetting, tanker services, drain repairs and relining, and drain descaling for homes and businesses.";

function buildLlmsTxt(): string {
  const areasList = areasServed.join(", ");
  const serviceLinks = services
    .map((service) => `- [${service.title}](${siteUrl}/services/${service.slug}): ${service.description}`)
    .join("\n");
  const areaLinks = areaPages
    .map((area) => `- [${area.county}](${siteUrl}/areas-we-cover/${area.slug}): ${area.heroDescription}`)
    .join("\n");

  return `# ${business.name}

> ${summary}

${business.responsePromise} It operates across ${areasList}. Contact by phone on ${business.phoneDisplay} or by email at ${business.email}.

## Services

${serviceLinks}

Full details: [Services overview](${siteUrl}/services)

## Areas We Cover

${areaLinks}

Full details: [Areas We Cover overview](${siteUrl}/areas-we-cover)

## Company

- [Homepage](${siteUrl}/): Jet Now Drainage's core service promise and an overview of the business.
- [About Us](${siteUrl}/about-us): Background on Jet Now Drainage as a family-run, experienced drainage team.
- [Services](${siteUrl}/services): Full list of drainage services offered.
- [Areas We Cover](${siteUrl}/areas-we-cover): Full list of towns and counties served across London and the surrounding counties.
- [Contact Us](${siteUrl}/contact-us): Contact form, phone number, and email address for enquiries and quotes.

## Optional

- [Legal](${siteUrl}/legal): Privacy and cookie information for ${new URL(siteUrl).host}.
`;
}

// Content has no request-time dependency, so force this to be prerendered as
// static output at build time (matching `robots.txt` and `sitemap.xml`)
// rather than defaulting to a dynamic, per-request Route Handler.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
