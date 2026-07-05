"use client";

import { useEffect, useRef, useState } from "react";
import type { FaqEntry } from "@/lib/faq-schema";

type ServicePageFaqProps = {
  faqs: FaqEntry[];
  heading?: string;
};

/**
 * Per-service FAQ accordion. Visible copy here must stay in lock-step with
 * `buildFaqSchema` on the page itself — Google requires FAQPage structured
 * data to exactly match what a user actually sees, so never add a question
 * to the schema without rendering it here too.
 */
export function ServicePageFaq({ faqs, heading = "Frequently Asked Questions" }: ServicePageFaqProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // See ServicePageIntro.tsx: kept as an effect (not a lazy `useState`
      // initialiser) to avoid a server/client hydration mismatch, since
      // `IntersectionObserver` is undefined in Node during prerendering too.
      // eslint-disable-next-line react-hooks/set-state-in-effect
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

  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <section ref={sectionRef} className={`py-10 md:py-14 reveal-fade-up ${visibleClass}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-primary md:text-3xl">
          {heading}
        </h2>

        <div className="mt-6 divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `service-faq-${index}`;

            return (
              <article key={faq.question} className="py-4 first:pt-5 last:pb-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-semibold text-foreground">{faq.question}</span>
                  <span aria-hidden="true" className="text-xl font-semibold text-brand-primary">
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p id={contentId} className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    {faq.answer}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
