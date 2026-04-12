import Image from "next/image";
import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="relative isolate min-h-[46vh] overflow-hidden md:min-h-[50vh]">
      <Image
        src="/JetNow/HomeHero.jpg"
        alt="Jet Now Drainage engineer delivering drainage services"
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
            Services We Offer
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">
            From emergency call-outs to planned maintenance, Jet Now Drainage provides reliable
            solutions backed by modern equipment, experienced engineers, and responsive support.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact-us"
              className="inline-flex border-2 border-white bg-[#ea591b] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition duration-200 hover:border-[#ea591b] hover:bg-white hover:text-[#ea591b]"
            >
              Contact Us
            </Link>
            <Link
              href="/areas-we-cover"
              className="inline-flex border-2 border-white bg-emerald-500 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition duration-200 hover:border-emerald-500 hover:bg-white hover:text-emerald-500"
            >
              Areas Covered
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
