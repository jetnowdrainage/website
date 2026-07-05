import type { Metadata } from "next";
import { Camera, Droplets, Layers, ShieldCheck } from "lucide-react";
import { ServicePageHero } from "@/components/Services/ServicePage/ServicePageHero";
import { ServicePageIntro } from "@/components/Services/ServicePage/ServicePageIntro";
import { ServicePageDetails } from "@/components/Services/ServicePage/ServicePageDetails";
import { ServicePageSigns } from "@/components/Services/ServicePage/ServicePageSigns";
import { ServicePageLocalArea } from "@/components/Services/ServicePage/ServicePageLocalArea";
import { ServicePageFaq } from "@/components/Services/ServicePage/ServicePageFaq";
import { ServicePageCta } from "@/components/Services/ServicePage/ServicePageCta";
import { ServicePageRelatedLinks } from "@/components/Services/ServicePage/ServicePageRelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/breadcrumb";
import { buildFaqSchema } from "@/lib/faq-schema";
import { buildServiceSchema } from "@/lib/service-schema";
import { buildPageMetadata } from "@/lib/metadata";

const PATH = "/services/drain-repairs-relining";
const BOOKING_LABEL = "Drain Repairs & Relining";

export const metadata: Metadata = buildPageMetadata({
  title: "Drain Repairs & No-Dig Relining | Jet Now Drainage",
  description:
    "No-dig drain repairs and relining for cracked, root-damaged or displaced pipework, without excavating your garden or driveway. Fixed-price quotes.",
  path: PATH,
});

const faqs = [
  {
    question: "What is no-dig drain relining?",
    answer:
      "It's a trenchless repair method where a flexible, resin-saturated liner is inserted into the damaged pipe through an existing access point, such as a manhole or inspection chamber, then inflated against the pipe wall and cured. Once hardened, it forms a new, structural pipe inside the old one, without any excavation.",
  },
  {
    question: "How long does a relining repair last?",
    answer:
      "Correctly installed, cured-in-place pipe (CIPP) systems are designed to a service life of 50 years or more, which is the industry standard for this type of repair.",
  },
  {
    question: "Will relining disrupt my garden or driveway?",
    answer:
      "No. The whole repair is carried out through existing access points, so there's no need to dig up landscaping, paving or driveways to reach the damaged section.",
  },
  {
    question: "Is every damaged drain suitable for relining?",
    answer:
      "Most defects, such as cracks, displaced joints and root damage, are. A fully collapsed section may need traditional excavation instead. A CCTV survey confirms which approach is right before any work begins, so you're not paying for the wrong fix.",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Drain Repairs & Relining", path: PATH },
]);

const faqSchema = buildFaqSchema(faqs);

const serviceSchema = buildServiceSchema({
  name: "Drain Repairs and Relining",
  description:
    "No-dig, trenchless drain repair and cured-in-place pipe (CIPP) relining for cracked, displaced or root-damaged drainage pipework.",
  path: PATH,
});

export default function DrainRepairsReliningPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <ServicePageHero
        eyebrow="No-Dig Repairs"
        title="Drain Repairs & Relining"
        description="Fix a damaged drain from the inside, without digging up your garden or driveway. No-dig relining restores structural strength with minimal disruption."
        imageSrc="/JetNow/JN%20-%20Repairs%20Relining.jpeg"
        imageAlt="Jet Now Drainage engineer carrying out a no-dig drain relining repair"
        bookingLabel={BOOKING_LABEL}
      />

      <ServicePageIntro
        paragraphs={[
          "Traditional drain repair means excavating down to the damaged section, which can mean tearing up a driveway, patio or garden to reach a single cracked joint. No-dig relining, more formally known as cured-in-place pipe (CIPP) repair, avoids that entirely. A flexible liner, soaked in resin, is fed into the pipe through an existing manhole or inspection chamber, inflated so it presses against the damaged walls, and then cured into a hard, seamless new pipe within the old one.",
          "This approach works for the great majority of defects we see, including cracks, displaced joints and root damage, and is significantly less disruptive and usually quicker than excavation. Every relining job starts with a CCTV survey to confirm the defect and check the pipe is a suitable candidate, followed by jetting to clean the pipe thoroughly before the liner goes in, since a clean surface is essential for a proper bond.",
        ]}
      />

      <ServicePageDetails
        heading="What's Involved"
        items={[
          {
            icon: <Camera aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Survey First",
            body: "A CCTV survey confirms the exact defect and whether the pipe is a suitable candidate for a no-dig repair.",
          },
          {
            icon: <Droplets aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Cleaning & Preparation",
            body: "High-pressure jetting removes debris and old deposits so the new liner can bond properly to the pipe wall.",
          },
          {
            icon: <Layers aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Liner Installation",
            body: "A flexible, resin-saturated liner is inserted through an existing access point, inflated against the pipe wall, and cured in place.",
          },
          {
            icon: <ShieldCheck aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Verification",
            body: "A follow-up check confirms the repair is fully bonded and the drain is flowing correctly before we finish the job.",
          },
        ]}
      />

      <ServicePageSigns
        heading="Signs You Need a Drain Repair"
        signs={[
          "A CCTV survey has identified a cracked, displaced or root-damaged section of pipe",
          "Recurring blockages at the same point in the drain run",
          "Visible subsidence or a damp patch above a drain route",
          "Water or waste seeping from a joint or crack",
          "You want to avoid excavating a driveway, patio or garden to fix a damaged section",
          "An insurer, surveyor or buyer has flagged a structural drain defect",
        ]}
      />

      <ServicePageLocalArea body="We carry out no-dig drain repairs and relining for homes and businesses across London, Essex, Hertfordshire, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire and Suffolk." />

      <ServicePageFaq faqs={faqs} />

      <ServicePageRelatedLinks
        items={[
          { label: "CCTV Drain Surveys", href: "/services/cctv-drain-surveys" },
          { label: "High-Pressure Jetting", href: "/services/high-pressure-drain-jetting" },
          { label: "Drain Descaling", href: "/services/drain-descaling" },
        ]}
      />

      <ServicePageCta
        heading="Found a Damaged Drain?"
        body="Get a fixed-price quote for no-dig drain repair or relining, starting with a CCTV survey to confirm the right fix for your pipe."
        bookingLabel={BOOKING_LABEL}
      />
    </>
  );
}
