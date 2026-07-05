"use client";

import { useEffect, useRef, useState } from "react";

type ServicePageIntroProps = {
  paragraphs: string[];
};

/**
 * Lead-in prose directly under the hero. Deliberately plain (no image, no
 * card) so each service's opening argument reads like considered editorial
 * copy rather than another templated block — the uniqueness Phase 4 is
 * about lives in this text, not the wrapper around it.
 */
export function ServicePageIntro({ paragraphs }: ServicePageIntroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // `isVisible` starts `false` to match the server-rendered HTML (Node
      // has no `IntersectionObserver` during prerendering, so a lazy
      // `useState` initialiser would disagree with the client's first render
      // in a real browser and cause a hydration mismatch). This branch only
      // runs post-mount, for the rare browser with no `IntersectionObserver`.
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
    <section ref={sectionRef} className={`pt-16 pb-4 md:pt-20 reveal-fade-up ${visibleClass}`}>
      <div className="mx-auto w-full max-w-6xl space-y-5 px-6">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-8 text-[var(--text-muted)]">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
