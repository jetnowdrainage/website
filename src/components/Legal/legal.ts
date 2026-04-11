export type LegalPolicy = {
  id: string;
  title: string;
  lastUpdated: string;
  markdown: string;
};

export const legalPolicies: LegalPolicy[] = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "11/04/2026",
    markdown: `Jet Now Drainage is committed to protecting your personal data and handling it responsibly.

### What we collect
- Your name, email address, phone number, and any information you submit through contact forms.
- Basic technical information, such as browser type and pages viewed.

### How we use your information
- To respond to enquiries and provide drainage services.
- To manage bookings, quotations, and customer support.
- To improve website performance and user experience.

### Data sharing
We do not sell your personal data. We only share information with trusted providers where necessary to operate our business or comply with legal obligations.

### Data retention
We keep personal data only for as long as needed for operational, legal, and contractual purposes.

### Your rights
You may request access, correction, or deletion of your personal data by contacting us at info@jetnowdrainage.co.uk.
`,
  },
  {
    id: "cookie-policy",
    title: "Cookie Policy",
    lastUpdated: "11/04/2026",
    markdown: `This site uses cookies to ensure the website functions correctly and to understand usage trends.

### What cookies are used
- Essential cookies required for core site functionality.
- Analytics cookies that help us measure website usage and performance.

### How we use cookies
- To maintain secure, reliable website operation.
- To review anonymised traffic data and improve content and services.

### Managing cookies
You can manage or disable cookies through your browser settings. Disabling some cookies may affect parts of the website functionality.

For questions about cookies or personal data, please contact info@jetnowdrainage.co.uk.
`,
  },
];
