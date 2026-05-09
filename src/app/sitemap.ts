import type { MetadataRoute } from "next";

const siteUrl = "https://www.jetnowdrainage.co.uk";

const routes = [
  "",
  "/about-us",
  "/services",
  "/areas-we-cover",
  "/contact-us",
  "/legal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
