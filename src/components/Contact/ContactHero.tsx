import Image from "next/image";
import Link from "next/link";

const heroButtonBaseClass =
  "inline-flex border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition duration-200";

export function ContactHero() {
  return (
    <section className="relative isolate min-h-[46vh] overflow-hidden md:min-h-[50vh]">
      <Image
        src="/JetNow/HomeHero.jpg"
        alt="Jet Now Drainage team ready to help with contact enquiries"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-slate-950/45" />

      <div className="relative mx-auto flex min-h-[46vh] w-full max-w-7xl items-end px-6 pb-12 pt-16 md:min-h-[50vh] md:items-center md:pb-16">
        <div className="max-w-3xl space-y-5">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Get In Touch Today
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">
            Whether you need an urgent call-out or want to arrange planned drainage work, our team
            is ready to respond quickly with practical advice and dependable support.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/services"
              className={`${heroButtonBaseClass} bg-[#ea591b] hover:border-[#ea591b] hover:bg-white hover:text-[#ea591b]`}
            >
              View Services
            </Link>
            <Link
              href="/areas-we-cover"
              className={`${heroButtonBaseClass} bg-emerald-500 hover:border-emerald-500 hover:bg-white hover:text-emerald-500`}
            >
              Areas Covered
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
