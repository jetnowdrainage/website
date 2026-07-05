import type { Metadata } from "next";
import { business, siteUrl } from "@/lib/site-config";

type PageMetadataInput = {
  /**
   * The full, final `<title>` text for this page. Uses `title.absolute`
   * under the hood, which deliberately bypasses the root layout's
   * `title.template` ("%s | Jet Now Drainage") entirely — Next.js only
   * applies that template to plain-string titles, and only on segments
   * *below* the one that defines it (the homepage's own page.tsx sits at
   * the same segment as the root layout, so the template silently never
   * applied there — confirmed by curling the live homepage `<title>`,
   * which is 36 characters with no brand suffix at all). Rather than rely
   * on an inconsistent mechanical suffix, every page writes its own
   * complete, hand-tuned title via this helper instead.
   */
  title: string;
  description: string;
  /** Site-relative path, e.g. "/about-us". Use "/" for the homepage. */
  path: string;
};

/**
 * Builds a page's full `<title>`/description/canonical *and* its
 * page-specific Open Graph + Twitter card data. Before this, every page
 * shared the homepage's Open Graph/Twitter title and description verbatim
 * (Next.js replaces the whole `openGraph`/`twitter` object per segment
 * rather than merging it field-by-field, so a page that doesn't set its
 * own just inherits the root layout's) — meaning every page looked
 * identical when shared on social media or read by a link-preview/AI
 * crawler. This gives each page its own accurate summary everywhere it's
 * read, while still sharing one logo image and one `siteName` so the
 * brand identity stays consistent site-wide.
 */
export function buildPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: business.ogImagePath,
          width: 1024,
          height: 1024,
          alt: `${business.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [business.ogImagePath],
    },
  };
}
