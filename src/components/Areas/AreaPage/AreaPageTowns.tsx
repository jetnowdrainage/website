"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

type AreaPageTownsProps = {
  county: string;
  towns: string[];
};

/**
 * Named-town list for one area page. Listing every town explicitly (rather
 * than "and surrounding areas") gives search engines and AI assistants a
 * concrete, quotable answer to "does Jet Now Drainage cover [town]?" for
 * each place individually, matching the specificity principle behind
 * SEOPlan.md Phase 3's meta description work.
 */
export function AreaPageTowns({ county, towns }: AreaPageTownsProps) {
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
        <div className="mb-6 max-w-3xl space-y-3">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-primary md:text-3xl">
            Towns We Cover in {county}
          </h2>
          <p className="text-base leading-8 text-[var(--text-muted)]">
            Our engineers attend homes and businesses across {county}, including the towns listed below. If your
            town isn&apos;t shown, get in touch and we&apos;ll confirm coverage for your postcode.
          </p>
        </div>

        <ul className="flex flex-wrap gap-2.5">
          {towns.map((town) => (
            <li
              key={town}
              className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-sm font-semibold text-foreground"
            >
              <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-brand-primary" strokeWidth={2} />
              <span>{town}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
