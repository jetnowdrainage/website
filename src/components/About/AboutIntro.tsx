import Image from "next/image";
import Link from "next/link";

const aboutHighlights = [
  "Independent, family-run drainage specialists",
  "Serving London and the South East",
  "Residential and commercial drainage support",
  "Reliable response with modern equipment",
];

export function AboutIntro() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative h-[320px] overflow-hidden rounded-sm md:h-[460px]">
          <Image
            src="/JetNow/HomeDrainServices.jpg"
            alt="Jet Now Drainage engineer carrying out specialist drainage work"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Local Drainage Experts
          </h2>

          <p className="text-base leading-8 text-slate-700">
            Jet Now Drainage is an independent, family-run business delivering dependable drainage
            services for homes, landlords, and businesses. Our team focuses on practical solutions,
            clear communication, and high standards on every job.
          </p>

          <p className="text-base leading-8 text-slate-700">
            Covering London and the South East, we provide responsive support for both urgent
            call-outs and planned maintenance work, helping clients keep drainage systems safe,
            compliant, and running smoothly.
          </p>

          <ul className="grid gap-3 text-base font-medium text-slate-700 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact-us"
            className="btn-outline-brand inline-flex px-8 py-3 text-sm font-bold uppercase tracking-wide transition"
          >
            Speak to our team
          </Link>
        </div>
      </div>
    </section>
  );
}
