import Link from "next/link";
import Image from "next/image";

const heroButtonBaseClass =
  "inline-flex border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition duration-200";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[62vh] overflow-hidden md:min-h-[66vh]">
      <Image
        src="/JetNow/HomeHero.jpg"
        alt="Jet Now Drainage van with specialist drainage equipment"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-slate-950/35" />

      <div className="relative mx-auto flex min-h-[62vh] w-full max-w-7xl items-end px-6 pb-14 pt-16 md:min-h-[66vh] md:items-center md:pb-16">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Fast, professional drainage support when you need it most.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-100 md:text-lg">
            Jet Now Drainage delivers reliable unblocking, jetting and drainage services for
            homes and businesses across the UK.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
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
