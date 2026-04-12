const contactFaqs = [
  {
    question: "How quickly can you respond to an enquiry?",
    answer:
      "We aim to respond promptly during business hours and prioritise urgent drainage enquiries as quickly as possible.",
  },
  {
    question: "Do you provide emergency drainage call-outs?",
    answer:
      "Yes. We support emergency drainage issues and will advise on the fastest available response when you contact us.",
  },
  {
    question: "Can I request a quote for planned drainage work?",
    answer:
      "Absolutely. Share your requirements in the form and our team will review the details and provide next steps.",
  },
  {
    question: "Do you cover both residential and commercial properties?",
    answer:
      "Yes. We deliver drainage services for homes, landlords, commercial premises, and managed sites.",
  },
];

export function ContactFormFaq() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 space-y-3">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Contact Jet Now Drainage
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--text-muted)]">
            Send us your enquiry and our team will get back to you with practical guidance and the
            right next step for your drainage requirements.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] md:p-8">
            <form className="flex h-full flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm text-foreground outline-none transition placeholder:text-[var(--text-muted)] focus:border-brand-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-md border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm text-foreground outline-none transition placeholder:text-[var(--text-muted)] focus:border-brand-primary"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm text-foreground outline-none transition placeholder:text-[var(--text-muted)] focus:border-brand-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-foreground">
                  Service Needed
                </label>
                <input
                  id="service"
                  name="service"
                  type="text"
                  className="w-full rounded-md border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm text-foreground outline-none transition placeholder:text-[var(--text-muted)] focus:border-brand-primary"
                  placeholder="e.g. Drain unblocking, CCTV survey"
                />
              </div>

              <div className="flex flex-1 flex-col space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="min-h-[150px] w-full flex-1 rounded-md border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-[var(--text-muted)] focus:border-brand-primary"
                  placeholder="Tell us about your drainage issue or request."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center border-2 border-[#ea591b] bg-[#ea591b] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition duration-200 hover:bg-[var(--surface)] hover:text-[#ea591b] sm:w-auto"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] md:p-8">
            <div className="flex h-full flex-col">
              <h3 className="text-2xl font-bold tracking-tight text-brand-primary md:text-3xl">FAQs</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                Common questions about contacting our team and arranging drainage support.
              </p>

              <div className="mt-6 divide-y divide-[var(--border)]">
                {contactFaqs.map((faq) => (
                  <article key={faq.question} className="py-4 first:pt-0 last:pb-0">
                    <h4 className="text-base font-semibold text-foreground">{faq.question}</h4>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
