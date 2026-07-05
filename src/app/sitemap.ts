import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";
import { services } from "@/components/Services/services-data";
import { areas } from "@/components/Areas/areas-data";

const routes = [
  "",
  "/about-us",
  "/services",
  "/areas-we-cover",
  "/contact-us",
  "/legal",
];

// SEOPlan.md Phase 4: each individual service page, generated from the same
// `services` catalog the flip-card grid and llms.txt use, so a new service
// only ever needs adding in one place.
const serviceRoutes = services.map((service) => `/services/${service.slug}`);

// SEOPlan.md Phase 5: each individual area/coverage page, generated from the
// same `areas` catalog the "Full Locations Covered" accordion and llms.txt
// use, so a new area only ever needs adding in one place.
const areaRoutes = areas.map((area) => `/areas-we-cover/${area.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...routes, ...serviceRoutes, ...areaRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/services/") || route.startsWith("/areas-we-cover/")
          ? 0.9
          : 0.8,
  }));
}
