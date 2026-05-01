"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  title: string;
  quote: string;
  author: string;
  area: string;
};

const testimonials: Testimonial[] = [
  {
    title: "Fast and professional",
    quote:
      "Called JetNow Drainage for an emergency blocked outside drain. The engineer arrived quickly, explained the issue clearly, and left everything clean and tidy.",
    author: "Sarah Whitmore",
    area: "Chelmsford, Essex",
  },
  {
    title: "Clear pricing and no surprises",
    quote:
      "Excellent service from first call to completion. The fixed pricing was clear up front, the team was polite, and the blockage was resolved without any fuss.",
    author: "Daniel Harper",
    area: "Guildford, Surrey",
  },
  {
    title: "Helpful CCTV report",
    quote:
      "We needed a CCTV drain survey for a managed property. JetNow provided a detailed report and talked us through the next steps.",
    author: "Priya Shah",
    area: "Watford, Hertfordshire",
  },
  {
    title: "Reliable emergency response",
    quote:
      "Our restaurant had a serious drainage issue late evening. JetNow attended promptly, fixed the problem, and kept disruption to an absolute minimum.",
    author: "Michael Bennett",
    area: "Croydon, Greater London",
  },
];

export function HomeTestimonials() {
  const rotateMs = 4800;
  const tickMs = 80;
  const circleRadius = 7;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = testimonials[activeIndex];
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;

    let elapsed = 0;
    const intervalId = window.setInterval(() => {
      elapsed += tickMs;
      if (elapsed >= rotateMs) {
        elapsed = 0;
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setProgress(0);
        return;
      }
      setProgress(elapsed / rotateMs);
    }, tickMs);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, isPaused]);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <section ref={sectionRef} className="pt-0 pb-16 md:pb-24">
      <div className={`mx-auto w-full max-w-7xl px-6 reveal-fade-up ${visibleClass}`}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Trusted by homes and businesses
          </h2>
        </div>

        <article
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] md:p-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col gap-4">
            <div className="min-w-0 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">
                {active.title}
              </p>
              <p className="text-base leading-8 text-foreground">&ldquo;{active.quote}&rdquo;</p>
              <div className="space-y-0.5">
                <p className="text-sm font-semibold text-foreground">{active.author}</p>
                <p className="text-sm text-[var(--text-muted)]">{active.area}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goToIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-foreground transition hover:border-brand-accent hover:text-brand-accent"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            </button>

            <div className="flex items-center justify-center gap-2">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                const strokeOffset = circleCircumference - progress * circleCircumference;

                return (
                  <button
                    key={`${testimonial.author}-${testimonial.area}`}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    onClick={() => goToIndex(index)}
                    className="relative inline-flex h-5 w-5 items-center justify-center rounded-full"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition ${
                        isActive ? "bg-brand-accent" : "bg-[var(--text-muted)]/50 hover:bg-brand-accent"
                      }`}
                    />
                    {isActive ? (
                      <svg
                        viewBox="0 0 20 20"
                        className="pointer-events-none absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-90"
                        aria-hidden="true"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r={circleRadius}
                          fill="none"
                          stroke="var(--border)"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="10"
                          cy="10"
                          r={circleRadius}
                          fill="none"
                          stroke="var(--brand-accent)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeDasharray={circleCircumference}
                          strokeDashoffset={strokeOffset}
                        />
                      </svg>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goToIndex((activeIndex + 1) % testimonials.length)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-foreground transition hover:border-brand-accent hover:text-brand-accent"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
