/**
 * Shared source for the Contact page FAQ content, used both by the visible
 * `ContactFormFaq` component and by the `FAQPage` JSON-LD in
 * `app/contact-us/page.tsx`. Google's FAQ structured data guidelines require
 * schema to exactly mirror visible on-page content, so both consumers read
 * from this single array rather than keeping the copy in sync by hand.
 */
export type ContactFaq = {
  question: string;
  answer: string;
};

export const contactFaqs: ContactFaq[] = [
  {
    question: "How quickly can you respond to a drainage emergency?",
    answer:
      "We aim to attend emergency call-outs within 1 to 2 hours, and our team is available 24 hours a day, 7 days a week, including weekends and bank holidays.",
  },
  {
    question: "Is your pricing fixed, or could the cost change once you arrive?",
    answer:
      "We agree a fixed price with you before any work begins, so there are no surprise costs once our engineer is on site. If the job turns out to be different from what was described, we'll always explain this and agree a revised price with you first.",
  },
  {
    question: "Do you charge for a quote?",
    answer:
      "Quotes for planned drainage work are free. Share the details of what you need through our contact form and our team will review them and get back to you with next steps and, where possible, an initial price.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover London, Essex, Hertfordshire, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire and Suffolk. Visit our Areas We Cover page for the full list of towns in each county.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We keep payment simple and straightforward. Our team will confirm the payment methods available to you when your fixed price is agreed, before any work begins.",
  },
  {
    question: "Are you insured, and does your work come with a guarantee?",
    answer:
      "It's sensible to ask any drainage contractor, including us, for evidence of insurance before work begins, and we're happy to provide this on request. Where a service carries its own workmanship guarantee, such as our warranty on drain descaling, we'll confirm the details when you book.",
  },
  {
    question: "What happens during a CCTV drain survey?",
    answer:
      "A small waterproof camera is fed through your drainage system to record the condition of the pipe from the inside. A typical survey takes up to an hour, after which we provide a clear written report covering any faults found, such as cracks, root ingress or blockages, along with straightforward recommendations for what, if anything, needs doing next.",
  },
  {
    question: "Do you work with both residential and commercial customers?",
    answer:
      "Yes. We deliver drainage services for homeowners, landlords, letting agents, commercial premises and managed sites across our coverage area, from single blocked drains to planned maintenance programmes.",
  },
  {
    question: "Are you available outside normal working hours?",
    answer:
      "Yes. Jet Now Drainage operates 24 hours a day, 7 days a week, so evenings, weekends and bank holidays are all covered by the same team.",
  },
  {
    question: "How should I prepare for an engineer's visit?",
    answer:
      "Where it's safe to do so, please stop using the affected sink, toilet or drain until our engineer arrives, and try to ensure clear access to the drain, manhole cover or affected fixture. Letting us know when the problem started, or whether it's happened before, also helps our engineer diagnose the issue more quickly.",
  },
];
