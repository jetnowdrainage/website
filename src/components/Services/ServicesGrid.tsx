"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/components/Services/services-data";

export function ServicesGrid() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [visibleCardIndices, setVisibleCardIndices] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

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
      // See AboutIntro.tsx: kept as an effect (not a lazy `useState`
      // initialiser) to avoid a server/client hydration mismatch, since
      // `IntersectionObserver` is undefined in Node during prerendering too.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsHeadingVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeadingVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      // See AboutIntro.tsx: kept as an effect (not a lazy `useState`
      // initialiser) to avoid a server/client hydration mismatch, since
      // `IntersectionObserver` is undefined in Node during prerendering too.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisibleCardIndices(new Set(services.map((_, index) => index)));
      return;
    }

    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((node, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCardIndices((prev) => {
                if (prev.has(index)) return prev;
                const next = new Set(prev);
                next.add(index);
                return next;
              });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
      );
      observer.observe(node);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const setCardRef = (index: number) => (node: HTMLDivElement | null) => {
    if (node) {
      cardRefs.current.set(index, node);
    } else {
      cardRefs.current.delete(index);
    }
  };

  const toggleCard = (cardId: string) => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (supportsHover) {
      return;
    }
    setActiveCardId((currentId) => (currentId === cardId ? null : cardId));
  };

  const headingVisibleClass = isHeadingVisible ? "is-visible" : "";

  return (
    <section ref={sectionRef} className="relative overflow-visible pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className={`mb-8 space-y-3 reveal-fade-up ${headingVisibleClass}`}>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Our Drainage Services
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--text-muted)] lg:max-w-none">
            Tap or click a card to view a quick overview of each service. JetNow Drainage delivers practical,
            professional support for homes and businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 overflow-visible sm:gap-4 lg:grid-cols-3">
          {services.map((service, index) => {
            const isActive = activeCardId === service.id;
            const isLeftColumn = index % 2 === 0;
            const mobileRevealClass = isLeftColumn ? "reveal-slide-left" : "reveal-slide-right";
            const cardRevealClass = isMobile ? mobileRevealClass : "reveal-rise";
            const desktopColumnDelayMs = (index % 3) * 70;
            const cardDelayMs = isMobile ? 0 : desktopColumnDelayMs;
            const cardStyle: CSSProperties = {
              ["--reveal-delay" as never]: `${cardDelayMs}ms`,
            };
            const cardVisibleClass = visibleCardIndices.has(index) ? "is-visible" : "";

            return (
              <div
                key={service.id}
                ref={setCardRef(index)}
                className={`relative h-[220px] w-full [perspective:1200px] sm:h-[260px] ${cardRevealClass} ${cardVisibleClass}`}
                style={cardStyle}
              >
                <button
                  type="button"
                  onClick={() => toggleCard(service.id)}
                  className="group relative h-full w-full overflow-visible rounded-xl bg-transparent text-left transition hover:-translate-y-0.5 hover:z-20 focus-visible:z-20"
                  aria-pressed={isActive}
                >
                  <div
                    className={`relative h-full w-full transition-transform duration-500 will-change-transform [transform-style:preserve-3d] [-webkit-transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] md:group-hover:[-webkit-transform:rotateY(180deg)] ${
                      isActive ? "[transform:rotateY(180deg)] [-webkit-transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                      <Image
                        src={service.imageSrc}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={service.imageClassName ?? "object-cover"}
                      />
                      <div className="absolute inset-0 bg-slate-950/40" />
                      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                        <p className="text-sm font-bold text-white sm:text-lg">{service.title}</p>
                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 sm:text-xs md:hidden">
                          Tap to flip
                        </p>
                        <p className="mt-1 hidden text-xs font-semibold uppercase tracking-wide text-slate-200 md:block">
                          Hover to flip
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] [-webkit-transform:rotateY(180deg)]">
                      <Image
                        src={service.imageSrc}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={service.imageClassName ?? "object-cover"}
                      />
                      {/* SEOPlan.md Phase 9: #235f82, not bg-brand-primary — see HomeStatsStrip.tsx */}
                      <div className="absolute inset-0 bg-[#235f82]/95" />
                      <div className="absolute inset-0 flex items-end p-3 sm:p-5">
                        <div className="w-full space-y-1.5 sm:space-y-2">
                          <p className="text-sm font-bold text-white sm:text-lg">{service.title}</p>
                          <p className="text-[11px] leading-5 text-slate-200 sm:text-sm sm:leading-6">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            <Link
                              href={`/services/${service.slug}`}
                              onClick={(event) => event.stopPropagation()}
                              onPointerDown={(event) => event.stopPropagation()}
                              className="inline-flex self-center rounded-full border border-white/45 bg-transparent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-primary sm:px-4 sm:py-1.5 sm:text-xs"
                            >
                              More info
                            </Link>
                            <Link
                              href={`/contact-us?service=${encodeURIComponent(service.title)}${isMobile ? "#contact-form" : ""}`}
                              onClick={(event) => event.stopPropagation()}
                              onPointerDown={(event) => event.stopPropagation()}
                              className="inline-flex self-center rounded-full border border-white/45 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-primary sm:px-4 sm:py-1.5 sm:text-xs"
                            >
                              Book service
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
