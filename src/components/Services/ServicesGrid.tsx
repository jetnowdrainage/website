"use client";

import { useState } from "react";
import Image from "next/image";

type ServiceCard = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

const services: ServiceCard[] = [
  {
    id: "internal-unblocks",
    title: "Internal Unblocks",
    description:
      "Fast clearance for blocked toilets, sinks, baths and internal waste pipework with clean, careful working practices.",
    imageSrc: "/JetNow/NewImages/JN-InternalUnblocks.jpg",
  },
  {
    id: "external-unblocks",
    title: "External Unblocks",
    description:
      "We clear blocked gullies, outside drains and shared runs to restore flow and reduce repeat issues.",
    imageSrc: "/JetNow/NewImages/JN-ExternalUnblocks.jpg",
  },
  {
    id: "tanker-unblocks",
    title: "Tanker Unblocks",
    description:
      "For heavy-duty jobs, our tanker support removes high volumes of waste and keeps commercial and large sites moving.",
    imageSrc: "/JetNow/NewImages/JN-TankerUnblocks.jpeg",
  },
  {
    id: "cctv-surveys",
    title: "CCTV Drain Surveys",
    description:
      "Our engineers use CCTV drain cameras to inspect pipework and provide clear findings on condition and fault locations.",
    imageSrc: "/JetNow/NewImages/JN-CCTVDrainSurveys.jpg",
  },
  {
    id: "jetting",
    title: "High-Pressure Jetting",
    description: "Powerful water jetting to remove build-up, grease and debris from drainage pipework.",
    imageSrc: "/JetNow/HomeDrainServices.jpg",
  },
  {
    id: "repairs",
    title: "Drain Repairs and Relining",
    description: "Targeted repair and relining options designed to extend system life with less disruption.",
    imageSrc: "/JetNow/HomeDrainServices.jpg",
  },
  {
    id: "emergency",
    title: "24/7 Emergency Response",
    description: "We aim to be on site within 1-2 hours to prevent disruption to your home or business.",
    imageSrc: "/JetNow/HomeDrainServices.jpg",
  },
  {
    id: "drain-cleaning",
    title: "Drain Descaling",
    description: "Descaling and maintaining your drainage system expands the lifespan and decreases the likelihood of blockages. We offer warranty on all descaling works.",
    imageSrc: "/JetNow/HomeDrainServices.jpg",
  },
];

export function ServicesGrid() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      return;
    }
    setActiveCardId((currentId) => (currentId === cardId ? null : cardId));
  };

  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 space-y-3">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Our Drainage Services
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--text-muted)]">
            Tap or click a card to view a quick overview of each service. We can update imagery and
            copy in the next pass once final content is approved.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const isActive = activeCardId === service.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => toggleCard(service.id)}
                className="group relative h-[260px] w-full overflow-hidden rounded-xl bg-[var(--surface)] text-left shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5"
                aria-pressed={isActive}
              >
                <div
                  className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] ${
                    isActive ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/40" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-lg font-bold text-white">{service.title}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-200 md:hidden">
                        Tap to flip
                      </p>
                      <p className="mt-1 hidden text-xs font-semibold uppercase tracking-wide text-slate-200 md:block">
                        Hover to flip
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex [backface-visibility:hidden] [transform:rotateY(180deg)] items-end bg-brand-primary p-5">
                    <div className="space-y-3">
                      <p className="text-lg font-bold text-white">{service.title}</p>
                      <p className="min-h-[72px] text-sm leading-6 text-slate-200">{service.description}</p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
