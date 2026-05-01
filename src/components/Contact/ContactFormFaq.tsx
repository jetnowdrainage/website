"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, SendHorizontal } from "lucide-react";

const contactFaqs = [
  {
    question: "How quickly can you respond to emergency?",
    answer: "We aim to attend within 1-2 hours. Our team respond 24 hours a day 7 days a week.",
  },
  {
    question: "How long does a CCTV survey take?",
    answer: "A typical CCTV survey takes our technicians up to one hour to complete.",
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

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const initialFormValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function ContactFormFaq() {
  const searchParams = useSearchParams();
  const [formValues, setFormValues] = useState<ContactFormValues>(initialFormValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (!serviceParam) return;

    setFormValues((prev) => (prev.service ? prev : { ...prev, service: serviceParam }));
  }, [searchParams]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);
    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitFeedback(null);
    setSubmitError(false);

    const payload = {
      name: formValues.name.trim(),
      phone: formValues.phone.trim(),
      email: formValues.email.trim(),
      service: formValues.service.trim(),
      message: formValues.message.trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string; message?: string };
      if (!response.ok) {
        setSubmitError(true);
        setSubmitFeedback(data.error ?? "Unable to send your enquiry right now. Please try again.");
        return;
      }

      setFormValues(initialFormValues);
      setSubmitFeedback(data.message ?? "Thanks, your enquiry has been sent successfully.");
    } catch {
      setSubmitError(true);
      setSubmitFeedback("Unable to send your enquiry right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const visibleClass = isVisible ? "is-visible" : "";
  const formRevealClass = isMobile ? "reveal-fade-up" : "reveal-slide-left";
  const faqRevealClass = isMobile ? "reveal-fade-up" : "reveal-slide-right";

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className={`mb-8 space-y-3 reveal-fade-up ${visibleClass}`}>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Contact Jet Now Drainage
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--text-muted)]">
            Send us your enquiry and our team will get back to you with practical guidance and the
            right next step for your drainage requirements.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <div
            id="contact-form"
            className={`scroll-mt-20 h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] md:scroll-mt-24 md:p-8 ${formRevealClass} ${visibleClass}`}
          >
            <form onSubmit={handleSubmit} className="flex h-full flex-col gap-4">
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
                    value={formValues.name}
                    onChange={(event) => setFormValues((prev) => ({ ...prev, name: event.target.value }))}
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
                    value={formValues.phone}
                    onChange={(event) => setFormValues((prev) => ({ ...prev, phone: event.target.value }))}
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
                  value={formValues.email}
                  onChange={(event) => setFormValues((prev) => ({ ...prev, email: event.target.value }))}
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
                  value={formValues.service}
                  onChange={(event) => setFormValues((prev) => ({ ...prev, service: event.target.value }))}
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
                  value={formValues.message}
                  onChange={(event) => setFormValues((prev) => ({ ...prev, message: event.target.value }))}
                  className="min-h-[150px] w-full flex-1 rounded-md border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-[var(--text-muted)] focus:border-brand-primary"
                  placeholder="Tell us about your drainage issue or request."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 border-2 border-[#ea591b] bg-[#ea591b] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface)] hover:text-[#ea591b] hover:shadow-[0_10px_22px_-14px_rgba(234,89,27,0.75)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-[#ea591b] disabled:hover:text-white disabled:hover:shadow-none sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" strokeWidth={2} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <SendHorizontal
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>

              {submitFeedback ? (
                <p
                  role="status"
                  className={`text-sm ${submitError ? "text-red-600 dark:text-red-300" : "text-emerald-700 dark:text-emerald-300"}`}
                >
                  {submitFeedback}
                </p>
              ) : null}
            </form>
          </div>

          <div
            className={`h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] md:p-8 ${faqRevealClass} ${visibleClass}`}
          >
            <div className="flex h-full flex-col">
              <h3 className="text-2xl font-bold tracking-tight text-brand-primary md:text-3xl">FAQs</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                Common questions about contacting our team and arranging drainage support.
              </p>

              <div className="mt-6 divide-y divide-[var(--border)] md:hidden">
                {contactFaqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  const contentId = `contact-faq-mobile-${index}`;

                  return (
                    <article key={faq.question} className="py-3 first:pt-0 last:pb-0">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                        onClick={() => setOpenFaqIndex((current) => (current === index ? null : index))}
                        className="flex w-full items-center justify-between gap-3 text-left"
                      >
                        <span className="text-base font-semibold text-foreground">{faq.question}</span>
                        <span
                          aria-hidden="true"
                          className="text-lg font-semibold text-brand-primary"
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen ? (
                        <p id={contentId} className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                          {faq.answer}
                        </p>
                      ) : null}
                    </article>
                  );
                })}
              </div>

              <div className="mt-6 hidden divide-y divide-[var(--border)] md:block">
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
