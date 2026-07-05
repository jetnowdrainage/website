"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/components/Services/services-data";

type AreaPageServicesProps = {
  county: string;
};

/**
 * Cross-links every area page through to all 8 individual service pages
 * (SEOPlan.md Phase 4), and vice versa via `AreaPageBackLink`/the areas
 * accordion. This is the internal-linking structure Phase 7 called for:
 * every service is reachable from every area, and every area is reachable
 * from the coverage page, so no page in the new site sections is an
 * unlinked dead end.
 */
export function AreaPageServices({ county }: AreaPageServicesProps) {
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
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-primary md:text-3xl">
            Our Drainage Services in {county}
          </h2>
          <p className="text-base leading-8 text-[var(--text-muted)]">
            Every service below is available to homes and businesses throughout {county}, backed by the same
            fixed-price approach and 1-2 hour response target.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="themed-card group flex flex-col gap-3 rounded-xl p-5 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5 hover:border-brand-primary"
            >
              <h3 className="text-base font-bold text-foreground">{service.title}</h3>
              <p className="flex-1 text-sm leading-6 text-[var(--text-muted)]">{service.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] transition group-hover:gap-2.5">
                Learn more
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
