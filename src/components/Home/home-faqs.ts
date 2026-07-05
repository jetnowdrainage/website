/**
 * Shared source for the homepage FAQ content, used both by the visible
 * `HomeFaq` component and by the `FAQPage` JSON-LD in `app/page.tsx`.
 *
 * Deliberately a distinct, broader set of questions from `contact-faqs.ts`
 * rather than a duplicate: these cover what a first-time visitor wants to
 * know before getting in touch (what we do, where, how fast, and who we
 * are), while the Contact page FAQ goes deeper into the logistics of
 * actually booking a job. Keeping the two sets genuinely different avoids
 * serving Google identical FAQPage content on two separate pages.
 */
export type HomeFaq = {
  question: string;
  answer: string;
};

export const homeFaqs: HomeFaq[] = [
  {
    question: "What drainage services does Jet Now Drainage offer?",
    answer:
      "We provide a full range of drainage services, including internal and external drain unblocking, CCTV drain surveys, high-pressure jetting, drain repairs and relining, tanker and septic tank services, drain descaling, and 24/7 emergency call-outs. Visit our Services page for full details on each.",
  },
  {
    question: "Which areas does Jet Now Drainage cover?",
    answer:
      "We cover London, Essex, Hertfordshire, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire and Suffolk, supporting homes and businesses across all nine counties. See our Areas We Cover page for the full list of towns.",
  },
  {
    question: "How fast is your emergency call-out response?",
    answer:
      "We aim to attend emergency call-outs within 1 to 2 hours, 24 hours a day, 7 days a week, so a blocked or overflowing drain doesn't have to wait.",
  },
  {
    question: "Do you offer fixed pricing?",
    answer:
      "Yes. We agree a fixed price with you before any work begins, so you know the cost upfront with no hidden extras.",
  },
  {
    question: "Are you a family-run business?",
    answer:
      "Yes. Jet Now Drainage is a small, family-operated business built on customer service and reputation, with over 10 years of experience in drainage.",
  },
  {
    question: "How do I get a quote or book a service?",
    answer:
      "Simply get in touch through our contact form, by phone or via WhatsApp with a few details about the issue. Our team will review your enquiry and get back to you with next steps and, where possible, an initial price.",
  },
];
