"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/447804450233";
const ctaButtonBaseClass =
  "inline-flex items-center justify-center gap-2 border-2 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition duration-200";

export function HomeCta() {
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

  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <section ref={sectionRef} className="pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div
          className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#165f8c] via-[#1f77a8] to-[#0d4f78] px-5 py-7 text-white shadow-lg sm:px-8 sm:py-10 md:px-12 md:py-14 reveal-fade-up ${visibleClass}`}
        >
          <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,#ffffff_0,transparent_40%),radial-gradient(circle_at_80%_80%,#ffffff_0,transparent_45%)]" />

          <div className="relative grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:whitespace-nowrap">
                Rapid. Trusted. Professional.
              </h2>

              <p className="max-w-xl text-sm leading-7 text-sky-100 sm:max-w-2xl sm:text-base sm:leading-8 md:text-lg">
                JetNow Drainage, a small family-operated business with customer service and
                reputation at the heart of everything we do. We approach every job and customer
                with the same level of passion and professionalism.
              </p>

              <div className="relative h-[190px] sm:h-[240px] md:hidden">
                <Image
                  src="/JetNow/JetNow%20Van%20Render.png"
                  alt="JetNow Drainage branded service van"
                  fill
                  sizes="100vw"
                  className="object-contain object-right"
                />
              </div>

              <p className="text-base font-bold sm:text-lg">Get in touch now for a free quote</p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <Link
                  href="/contact-us"
                  className={`${ctaButtonBaseClass} border-white bg-[#ea591b] hover:border-[#ea591b] hover:bg-white hover:text-[#ea591b]`}
                >
                  <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
                  <span>Contact Us</span>
                </Link>
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaButtonBaseClass} border-white bg-emerald-500 hover:border-emerald-500 hover:bg-white hover:text-emerald-500`}
                >
                  <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
                  <span>WhatsApp Us</span>
                </Link>
              </div>
            </div>

            <div className="relative hidden h-[360px] md:block">
              <Image
                src="/JetNow/JetNow%20Van%20Render.png"
                alt="JetNow Drainage branded service van"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-contain object-right drop-shadow-2xl lg:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
