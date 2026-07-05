import { areasServed, siteUrl } from "@/lib/site-config";

type ServiceSchemaInput = {
  name: string;
  description: string;
  /** Site-relative path, e.g. "/services/cctv-drain-surveys". */
  path: string;
};

/**
 * Builds a schema.org `Service` block for one individual service page
 * (SEOPlan.md Phase 2 item 3 / Phase 4). Each one references the sitewide
 * `LocalBusiness` entity via `@id` rather than repeating the business's
 * contact details, so there is exactly one place (the root layout) where
 * that data can drift, and every service is tied back to the same, single
 * verified business entity for AI/search tools to connect the dots.
 */
export function buildServiceSchema({ name, description, path }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name,
    description,
    serviceType: name,
    url: `${siteUrl}${path}`,
    provider: {
      "@id": `${siteUrl}/#localbusiness`,
    },
    areaServed: [...areasServed],
  };
}
