import Image from "next/image";
import Link from "next/link";

const heroButtonBaseClass =
  "inline-flex border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition duration-200";

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[46vh] overflow-hidden md:min-h-[50vh]">
      <Image
        src="/JetNow/HomeHero.jpg"
        alt="Jet Now Drainage team delivering trusted drainage support"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-slate-950/45" />

      <div className="relative mx-auto flex min-h-[46vh] w-full max-w-7xl items-end px-6 pb-12 pt-16 md:min-h-[50vh] md:items-center md:pb-16">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 md:text-sm">
            Your drains, our expertise.
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            About Jet Now Drainage
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">
            JetNow - a small, family-run expert drainage solution with customer service at the
            heart of what we do. We provide professional, reliable, and cost-effective drainage
            solutions for residential, commercial, and industrial properties.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact-us"
              className={`${heroButtonBaseClass} bg-[#ea591b] hover:border-[#ea591b] hover:bg-white hover:text-[#ea591b]`}
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className={`${heroButtonBaseClass} bg-emerald-500 hover:border-emerald-500 hover:bg-white hover:text-emerald-500`}
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
