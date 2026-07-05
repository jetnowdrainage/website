import Link from "next/link";
import { Phone, Wrench } from "lucide-react";

const heroButtonBaseClass =
  "inline-flex items-center gap-2 border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition duration-200";

// SEOPlan.md Phase 9: `#b14110`/`emerald-700` replace the original
// `#ea591b`/`emerald-500` fills. At 14px bold, this button text is just
// under WCAG's 14pt-bold (18.67px) "large text" threshold, so it needs the
// stricter 4.5:1 ratio, not 3:1 — and white text on the original colours
// measured at 3.53:1 and 2.54:1 respectively (confirmed by calculation, and
// independently flagged by a live Lighthouse accessibility audit). These
// darker shades of the same hues measure 5.78:1 and 5.49:1, comfortably
// passing, in both the resting state and the hover state (which swaps the
// colour onto a white background, an equally valid pairing to check since
// contrast ratio is symmetric). This exact pattern is repeated across every
// hero/CTA button on the site — see SEOPlan.md Phase 9 for the full file list.

// SEOPlan.md Phase 9: the raw file is a 6.2MB, 4000x2667 unoptimised JPEG
// straight from the camera. A <video poster> is a plain HTML attribute, so
// it never passes through next/image like every other image on the site —
// pointing it at Next's own built-in /_next/image optimisation endpoint
// (the same one next/image uses under the hood) gets it resized and served
// as WebP/AVIF automatically, confirmed via a direct request against this
// exact URL: 6.2MB down to ~130KB. This is the dominant cause of the site's
// very poor Largest Contentful Paint score.
const heroPosterSrc = `/_next/image?url=${encodeURIComponent(
  "/JetNow/NewImages/JN-HomeHero.jpg",
)}&w=1920&q=75`;

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[62vh] overflow-hidden md:min-h-[66vh]">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={heroPosterSrc}
        aria-hidden="true"
      >
        <source src="/JetNow/NewImages/Trimmed3Compressed.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-slate-950/35" />

      <div className="relative mx-auto flex min-h-[62vh] w-full max-w-7xl items-end px-6 pb-14 pt-16 md:min-h-[66vh] md:items-center md:pb-16">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 md:text-sm">
            Your drains, our expertise.
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Fast, professional drainage support when you need it most.
          </h1>

          <p className="max-w-[41rem] text-base leading-relaxed text-slate-100 md:text-lg">
            JetNow Drainage delivers reliable, fixed-price drainage solutions for homes and
            businesses across the UK. Backed by over 10 years of hands-on experience, we resolve
            issues quickly, cleanly, and with minimal disruption
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact-us"
              className={`${heroButtonBaseClass} bg-[#b14110] hover:border-[#b14110] hover:bg-white hover:text-[#b14110]`}
            >
              <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              <span>Contact Us</span>
            </Link>
            <Link
              href="/services"
              className={`${heroButtonBaseClass} bg-emerald-700 hover:border-emerald-700 hover:bg-white hover:text-emerald-700`}
            >
              <Wrench aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
