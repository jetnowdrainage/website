"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type ServiceDetailItem = {
  /**
   * A pre-rendered icon element, e.g. `<Wrench className="h-5 w-5" />`.
   * Passed as a `ReactNode` rather than a bare component reference because
   * this is a Client Component: a Server Component can render a third-party
   * icon like `<Wrench />` and hand down the resulting element, but it can't
   * hand down the `Wrench` function itself across the server/client
   * boundary.
   */
  icon: ReactNode;
  title: string;
  body: string;
};

type ServicePageDetailsProps = {
  heading: string;
  intro?: string;
  items: ServiceDetailItem[];
};

/**
 * "What's involved" section: a grid of icon cards breaking the service down
 * into distinct, named steps or components. This is the part of the page
 * AI answer engines and Google's AI Overviews tend to lift most directly —
 * short, factual, self-contained statements rather than long narrative
 * paragraphs — so each item is written to stand alone as a citable answer.
 */
export function ServicePageDetails({ heading, intro, items }: ServicePageDetailsProps) {
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
            {heading}
          </h2>
          {intro ? <p className="text-base leading-8 text-[var(--text-muted)]">{intro}</p> : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="themed-card flex flex-col gap-3 rounded-xl p-6 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                {item.icon}
              </span>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-7 text-[var(--text-muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
