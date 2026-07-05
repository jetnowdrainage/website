"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

type ServicePageSignsProps = {
  heading: string;
  intro?: string;
  signs: string[];
};

/**
 * Quotable, checklist-style "signs you need this" block. Written as short,
 * self-contained, factual statements on purpose: this is exactly the shape
 * of content Google's AI Overviews and assistants like ChatGPT and
 * Perplexity extract most readily when answering a "how do I know if..."
 * style query, per the SEOPlan.md Phase 4 content-depth research.
 */
export function ServicePageSigns({ heading, intro, signs }: ServicePageSignsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        <div className="themed-muted-surface rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-primary md:text-3xl">
            {heading}
          </h2>
          {intro ? (
            <p className="mt-2 text-base leading-8 text-[var(--text-muted)]">{intro}</p>
          ) : null}

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {signs.map((sign) => (
              <li key={sign} className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent"
                  strokeWidth={2}
                />
                <span className="text-sm leading-7 font-medium text-foreground">{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
