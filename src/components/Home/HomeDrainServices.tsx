"use client";

import Image from "next/image";
import Link from "next/link";
import { Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const servicePoints = [
  "Drain Unblocking",
  "CCTV Drain Surveys",
  "High-Pressure Drain Jetting",
  "Drain Repairs and Relining",
  "Emergency Drain Services",
  "Drain Cleaning",
];

export function HomeDrainServices() {
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
          className={`order-1 relative h-[320px] overflow-hidden rounded-sm md:h-[460px] lg:order-1 ${imageRevealClass} ${visibleClass}`}
        >
          <Image
            src="/JetNow/JN%20-%20HomeServicesImg.jpeg"
            alt="Drain engineer carrying out specialist drain servicing"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center md:object-bottom"
          />
        </div>

        <div
          className={`order-2 space-y-6 lg:order-2 ${textRevealClass} ${visibleClass}`}
        >
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Complete Drainage Solutions
          </h2>

          <p className="text-base leading-8 text-[var(--text-muted)]">
            Experiencing a blocked drain or a more complex drainage issue? JetNow Drainage
            provides comprehensive drainage services designed to tackle problems quickly and
            professionally, helping your system run smoothly.
          </p>

          <p className="text-base leading-8 text-[var(--text-muted)]">
            From planned maintenance to urgent callouts, our skilled engineers use modern
            equipment and proven methods to deliver lasting results and minimise disruption.
          </p>

          <ul className="grid gap-3 text-base font-medium text-[var(--text-muted)] sm:grid-cols-2">
            {servicePoints.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/services"
            className="btn-outline-brand inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wide transition"
          >
            <Wrench aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            <span>Explore all services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
