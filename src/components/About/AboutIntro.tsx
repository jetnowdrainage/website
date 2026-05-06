"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const aboutHighlights = [
  "Independent, family-run drainage specialists",
  "Serving London, Essex and Hertfordshire",
  "Residential and commercial drainage support",
  "Experienced engineers backed by the latest technology",
];

export function AboutIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const visibleClass = isVisible ? "is-visible" : "";
  const imageRevealClass = isMobile ? "reveal-fade-up" : "reveal-slide-left";
  const textRevealClass = isMobile ? "reveal-fade-up" : "reveal-slide-right";

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <div
          className={`relative h-[320px] overflow-hidden rounded-sm md:h-[460px] ${imageRevealClass} ${visibleClass}`}
        >
          <Image
            src="/JetNow/JN About US.jpeg"
            alt="Jet Now Drainage engineer carrying out specialist drainage work"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className={`space-y-6 ${textRevealClass} ${visibleClass}`}>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Local Drainage Experts
          </h2>

          <p className="text-base leading-8 text-[var(--text-muted)]">
            Jet Now Drainage is an independent, family-run business delivering dependable drainage
            services for homes, landlords, and businesses. Our team focuses on practical solutions,
            clear communication, and high standards on every job.
          </p>

          <p className="text-base leading-8 text-[var(--text-muted)]">
            Covering London, Essex and Hertfordshire, we provide responsive support for both urgent
            call-outs and planned maintenance work, helping clients keep drainage systems safe,
            compliant, and running smoothly.
          </p>

          <ul className="grid gap-3 text-base font-medium text-[var(--text-muted)] sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact-us"
            className="btn-outline-brand inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wide transition"
          >
            <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            <span>Speak to our team</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
