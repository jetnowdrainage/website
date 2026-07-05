"use client";

import { useEffect, useRef, useState } from "react";
import { homeFaqs } from "@/components/Home/home-faqs";

/**
 * Homepage FAQ accordion. Visible copy here must stay in lock-step with the
 * `FAQPage` schema built from `homeFaqs` on `app/page.tsx` — Google requires
 * FAQ structured data to exactly match what a user actually sees.
 */
export function HomeFaq() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // See AboutIntro.tsx: kept as an effect (not a lazy `useState`
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
    <section ref={sectionRef} className="pt-0 pb-16 md:pb-24">
      <div className={`mx-auto w-full max-w-7xl px-6 reveal-fade-up ${visibleClass}`}>
        <div className="mb-10 space-y-3 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--text-muted)]">
            Answers to the questions we hear most often before a first booking. For anything
            specific to your job, our team is happy to talk it through directly.
          </p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `home-faq-${index}`;

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
                  <span aria-hidden="true" className="shrink-0 text-xl font-semibold text-brand-primary">
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
