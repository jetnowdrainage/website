"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-[120] border-b border-white/10 bg-[#03060a]/95 backdrop-blur lg:hidden">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="Jet Now Drainage home" className="shrink-0" onClick={() => setIsOpen(false)}>
          <Image
            src="/JetNow/JetNowLogoCroppedNoBG.png"
            alt="Jet Now Drainage"
            width={146}
            height={58}
            priority
            className="h-auto w-auto"
          />
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-slate-200 transition hover:border-brand-primary hover:text-brand-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="Close mobile menu backdrop"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-20 z-[110] bg-slate-950/60"
          />
          <div
            id="mobile-nav-panel"
            className="fixed inset-x-0 top-20 z-[120] border-t border-white/10 bg-[#03060a] shadow-[0_22px_50px_-30px_rgba(2,6,23,0.85)]"
          >
            <nav aria-label="Mobile navigation" className="mx-auto flex w-full max-w-7xl flex-col px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-brand-primary"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+447804450233"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-primary px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <Phone aria-hidden="true" className="mr-2 h-4 w-4" strokeWidth={2} />
                <span>Call 07804 450 233</span>
              </a>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
