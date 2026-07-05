"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { areas as coverageByCounty } from "@/components/Areas/areas-data";

export function AreasSeo() {
  const searchParams = useSearchParams();
  const [openCounties, setOpenCounties] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleExpandAll = () => {
      setOpenCounties(new Set(coverageByCounty.map((area) => area.county)));
    };

    window.addEventListener("expand-all-areas-locations", handleExpandAll);
    return () => window.removeEventListener("expand-all-areas-locations", handleExpandAll);
  }, []);

  useEffect(() => {
    // Genuinely synchronising state from the URL (`?expandAll=1`) rather than
    // a mount-time fallback, so this can't be replaced with a lazy `useState`
    // initialiser the way the IntersectionObserver fallbacks below can.
    if (searchParams.get("expandAll") === "1") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpenCounties(new Set(coverageByCounty.map((area) => area.county)));
    }
  }, [searchParams]);

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
    <section ref={sectionRef} id="full-locations" className="scroll-mt-24 pb-16 md:scroll-mt-28 md:pb-24">
      <div className={`mx-auto w-full max-w-7xl px-6 reveal-fade-up ${visibleClass}`}>
        <header className="mb-6 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Full Locations Covered
          </h2>
          <p className="max-w-4xl text-sm leading-7 text-[var(--text-muted)] md:text-base md:leading-8">
            Jet Now Drainage covers London and surrounding counties, with local teams operating
            across the locations below.
          </p>
        </header>

        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] md:p-6">
          <div className="divide-y divide-[var(--border)]">
            {coverageByCounty.map((area) => {
              const isOpen = openCounties.has(area.county);
              const contentId = `locations-${area.county.toLowerCase().replace(/\s+/g, "-")}`;

              return (
                <div key={area.county} className="py-3 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() =>
                      setOpenCounties((prev) => {
                        const next = new Set(prev);
                        if (next.has(area.county)) {
                          next.delete(area.county);
                        } else {
                          next.add(area.county);
                        }
                        return next;
                      })
                    }
                    className="flex w-full items-center justify-between gap-3 text-left"
                  >
                    <span className="text-sm font-semibold text-foreground md:text-base">{area.county}</span>
                    <span aria-hidden="true" className="text-lg font-semibold text-brand-primary">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <div id={contentId} className="mt-2 space-y-3">
                      <p className="text-sm leading-7 text-[var(--text-muted)]">{area.towns.join(", ")}</p>
                      <Link
                        href={`/areas-we-cover/${area.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] transition hover:underline"
                      >
                        <span>View location details</span>
                        <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />
                      </Link>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
