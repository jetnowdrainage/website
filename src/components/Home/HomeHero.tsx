import Link from "next/link";
import { Phone, Wrench } from "lucide-react";

const heroButtonBaseClass =
  "inline-flex items-center gap-2 border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition duration-200";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[62vh] overflow-hidden md:min-h-[66vh]">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/JetNow/NewImages/JNTRIMMED2.mp4" type="video/mp4" />
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
              className={`${heroButtonBaseClass} bg-[#ea591b] hover:border-[#ea591b] hover:bg-white hover:text-[#ea591b]`}
            >
              <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              <span>Contact Us</span>
            </Link>
            <Link
              href="/services"
              className={`${heroButtonBaseClass} bg-emerald-500 hover:border-emerald-500 hover:bg-white hover:text-emerald-500`}
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
