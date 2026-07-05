import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactHero } from "@/components/Contact/ContactHero";
import { ContactFormFaq } from "@/components/Contact/ContactFormFaq";
// SEOPlan.md Phase 10: re-enable this import alongside the commented
// `<ContactReviews />` usage below once the Google reviews integration route
// is chosen and built.
// import { ContactReviews } from "@/components/Contact/ContactReviews";
import { contactFaqs } from "@/components/Contact/contact-faqs";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/breadcrumb";
import { buildFaqSchema } from "@/lib/faq-schema";
import { buildPageMetadata } from "@/lib/metadata";

// SEOPlan.md Phase 3: states the actual response-time promise (matching
// `business.responsePromise` in site-config.ts) instead of the vague word
// "rapid" alone, and names the three-county coverage area explicitly.
export const metadata: Metadata = buildPageMetadata({
  title: "Contact Jet Now Drainage | 24/7 Emergency Call-Outs",
  description:
    "Contact Jet Now Drainage for fast, fixed-price drainage support. We aim to attend call-outs within 1-2 hours, 24/7, across London, Essex and Hertfordshire.",
  path: "/contact-us",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact-us" },
]);

// Built from the exact same `contactFaqs` array `ContactFormFaq` renders,
// so this can never drift from the visible questions/answers on the page.
const faqSchema = buildFaqSchema(contactFaqs);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <ContactHero />
      <Suspense fallback={null}>
        <ContactFormFaq />
      </Suspense>
      {/*
      <ContactReviews />
      */}
    </>
  );
}
