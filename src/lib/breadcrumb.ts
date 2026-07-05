import { siteUrl } from "@/lib/site-config";

export type BreadcrumbItem = {
  name: string;
  /** Site-relative path, e.g. "/about-us". Use "/" for the homepage. */
  path: string;
};

/**
 * Builds a schema.org `BreadcrumbList` for a page. Google and AI crawlers
 * use this to confirm a page's place in the site hierarchy, and Google can
 * render it as a breadcrumb trail directly in search results.
 *
 * Every page currently on the site is one level deep (Home > Page), so this
 * is used with a two-item trail today. Once individual service pages ship
 * (SEOPlan.md, Phase 4), the services pages should build a three-item trail
 * instead: Home > Services > [Service].
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
