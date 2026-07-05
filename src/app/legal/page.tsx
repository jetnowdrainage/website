import type { Metadata } from "next";
import { LegalHero } from "@/components/Legal/LegalHero";
import { LegalContent } from "@/components/Legal/LegalContent";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/breadcrumb";
import { buildPageMetadata } from "@/lib/metadata";

// SEOPlan.md Phase 3: a low-traffic utility page, so kept short and
// functional rather than keyword-optimised — accuracy matters far more
// than SEO reach here.
export const metadata: Metadata = buildPageMetadata({
  title: "Legal | Privacy & Cookie Policy | Jet Now Drainage",
  description:
    "Read Jet Now Drainage's privacy policy and cookie policy, covering how we collect, use and protect your personal data on jetnowdrainage.co.uk.",
  path: "/legal",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Legal", path: "/legal" },
]);

export default function LegalPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <LegalHero />
      <LegalContent />
    </>
  );
}
