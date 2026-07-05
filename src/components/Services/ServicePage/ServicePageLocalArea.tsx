"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

type ServicePageLocalAreaProps = {
  body: string;
};

/**
 * Compact local-relevance strip. Reinforces the site's coverage area in the
 * specific context of one service (rather than a generic sitewide mention),
 * which is the kind of entity/location pairing local-SEO guidance recommends
 * for trade sites — and links through to the full coverage list rather than
 * repeating it here.
 */
export function ServicePageLocalArea({ body }: ServicePageLocalAreaProps) {
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
    <section ref={sectionRef} className={`pb-4 reveal-fade-up ${visibleClass}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-3 border-l-4 border-brand-primary bg-[var(--surface)] p-5 sm:flex-row sm:items-start sm:gap-4 sm:p-6">
          <MapPin aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-brand-primary" strokeWidth={2} />
          <div className="space-y-2">
            <p className="text-base leading-7 text-[var(--text-muted)]">{body}</p>
            <Link
              href="/areas-we-cover"
              className="inline-flex text-sm font-bold uppercase tracking-wide text-brand-primary underline-offset-4 hover:underline"
            >
              View all areas we cover
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
