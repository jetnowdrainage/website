export type FaqEntry = {
  question: string;
  answer: string;
};

/**
 * Builds a schema.org `FAQPage` block from the same question/answer pairs
 * rendered on the page. Google explicitly requires FAQ structured data to
 * match visible content exactly — never add questions here that aren't
 * shown to users, and never let this drift from the visible copy.
 *
 * Reused for the Contact page today, and intended for the per-service FAQ
 * sections in SEOPlan.md Phase 4/6 once those pages exist.
 */
export function buildFaqSchema(faqs: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
