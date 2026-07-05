import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Wrench } from "lucide-react";
import { business } from "@/lib/site-config";

const heroButtonBaseClass =
  "inline-flex items-center gap-2 border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition duration-200";

type AreaPageHeroProps = {
  county: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

/**
 * Hero shell for every individual area page, matching `ServicePageHero.tsx`
 * (SEOPlan.md Phase 4) so the service and area detail pages read as one
 * consistent pattern site-wide. Includes the same breadcrumb bar, this time
 * trailing through Areas We Cover rather than Services.
 */
export function AreaPageHero({ county, description, imageSrc, imageAlt }: AreaPageHeroProps) {
  return (
    <section className="relative isolate min-h-[46vh] overflow-hidden md:min-h-[52vh]">
      <Image src={imageSrc} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-center" />

      <div className="absolute inset-0 bg-slate-950/55" />

      <div className="absolute inset-x-0 top-0 z-10 border-b border-white/10 bg-black/35 backdrop-blur-sm">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex w-full max-w-7xl items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-200 md:text-sm"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-slate-400" strokeWidth={2} />
          <Link href="/areas-we-cover" className="transition hover:text-white">
            Areas We Cover
          </Link>
          <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-slate-400" strokeWidth={2} />
          <span aria-current="page" className="truncate text-white">
            {county}
          </span>
        </nav>
      </div>

      <div className="relative mx-auto flex min-h-[46vh] w-full max-w-7xl items-end px-6 pb-12 pt-16 md:min-h-[52vh] md:items-center md:pb-16">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 md:text-sm">
            Local Drainage Coverage
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Drainage Services in {county}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">{description}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={`/contact-us#contact-form`}
              className={`${heroButtonBaseClass} bg-[#b14110] hover:border-[#b14110] hover:bg-white hover:text-[#b14110]`}
            >
              <Wrench aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              <span>Get a Quote</span>
            </Link>
            <Link
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${heroButtonBaseClass} bg-emerald-700 hover:border-emerald-700 hover:bg-white hover:text-emerald-700`}
            >
              <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              <span>WhatsApp Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
