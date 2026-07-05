import type { Metadata } from "next";
import { Sparkles, Camera, RotateCw, ShieldCheck } from "lucide-react";
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

const PATH = "/services/drain-descaling";
const BOOKING_LABEL = "Drain Descaling";

export const metadata: Metadata = buildPageMetadata({
  title: "Drain Descaling & Limescale Removal | Jet Now Drainage",
  description:
    "Mechanical drain descaling removes hardened limescale, rust and corrosion from older pipework, with a warranty on all work. Serving London, Essex and Herts.",
  path: PATH,
});

const faqs = [
  {
    question: "What's the difference between descaling and jetting?",
    answer:
      "Jetting uses high-pressure water to flush out debris and grease, and gives a useful all-round clean, but it doesn't always remove hardened mineral scale on its own. Mechanical descaling uses a rotating chain tool to physically strip that hardened build-up from the pipe wall, and is particularly effective on older cast-iron and clay pipework.",
  },
  {
    question: "Is descaling only needed for old houses?",
    answer:
      "It's most useful for older properties with cast-iron or clay drainage, or any pipe where a CCTV survey has confirmed a specific scale problem. Newer plastic pipework rarely needs it.",
  },
  {
    question: "Do you guarantee your descaling work?",
    answer:
      "Yes. We offer a warranty on all descaling work we carry out. Ask our team for the details when you book.",
  },
  {
    question: "Should I get a CCTV survey before booking descaling?",
    answer:
      "It's a good idea where the cause isn't already known. A survey confirms whether descaling, jetting or another repair method is the right fix, which keeps cost and disruption down.",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Drain Descaling", path: PATH },
]);

const faqSchema = buildFaqSchema(faqs);

const serviceSchema = buildServiceSchema({
  name: "Drain Descaling",
  description:
    "Mechanical drain descaling using a rotating chain flail tool to remove hardened limescale, rust and corrosion from older drainage pipework.",
  path: PATH,
});

export default function DrainDescalingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <ServicePageHero
        eyebrow="Drain Maintenance"
        title="Drain Descaling"
        description="Strip out hardened limescale, rust and corrosion that jetting alone can't remove, and restore your pipework closer to its original flow capacity."
        imageSrc="/JetNow/JN%20-%20DrainDescaling2.jpeg"
        imageAlt="Jet Now Drainage engineer carrying out mechanical drain descaling"
        bookingLabel={BOOKING_LABEL}
      />

      <ServicePageIntro
        paragraphs={[
          "Over time, older drainage pipework, particularly cast-iron and clay pipes, builds up a hard layer of mineral scale, rust and corrosion on the inside wall. Unlike grease or general debris, this build-up doesn't respond well to jetting alone: research shows hydro-jetting typically achieves around 70% descaling efficiency on hardened scale, leaving deposits behind that keep narrowing the pipe and causing repeat blockages.",
          "Mechanical descaling solves this with a rotating chain flail, a tool that physically chips and scrapes the hardened deposits from the pipe wall rather than relying on water pressure alone. It's a more targeted, controlled process, usually carried out after a camera inspection to confirm the pipe's material and condition, and it's particularly effective for the kind of long-established cast-iron and clay systems still common in older UK properties.",
        ]}
      />

      <ServicePageDetails
        heading="What's Involved"
        items={[
          {
            icon: <Sparkles aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Mechanical Descaling",
            body: "A rotating chain flail tool physically breaks apart hardened scale, rust and corrosion the way jetting alone cannot fully remove.",
          },
          {
            icon: <Camera aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Condition Check First",
            body: "A camera inspection confirms the pipe's material and condition before descaling begins, so the right technique and pressure are used.",
          },
          {
            icon: <RotateCw aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Restored Flow Capacity",
            body: "Removing built-up scale returns the pipe closer to its original diameter, cutting the risk of repeat blockages.",
          },
          {
            icon: <ShieldCheck aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Warranty on Descaling Work",
            body: "We offer a warranty on descaling work carried out, giving you confidence the job has been done properly.",
          },
        ]}
      />

      <ServicePageSigns
        heading="Signs You Need Drain Descaling"
        signs={[
          "Drains that block repeatedly despite regular jetting or rodding",
          "An older property with original cast-iron or clay drainage pipework",
          "Noticeably reduced water flow with no obvious single blockage",
          "A CCTV survey has identified scale or corrosion build-up inside a pipe",
          "Water draining slower over time rather than stopping suddenly",
          "A drain due for relining that needs its internal surface fully cleaned first",
        ]}
      />

      <ServicePageLocalArea body="We carry out drain descaling for older properties and businesses across London, Essex, Hertfordshire, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire and Suffolk." />

      <ServicePageFaq faqs={faqs} />

      <ServicePageRelatedLinks
        items={[
          { label: "CCTV Drain Surveys", href: "/services/cctv-drain-surveys" },
          { label: "High-Pressure Jetting", href: "/services/high-pressure-drain-jetting" },
          { label: "Drain Repairs & Relining", href: "/services/drain-repairs-relining" },
        ]}
      />

      <ServicePageCta
        heading="Recurring Blockages in an Older Property?"
        body="Book a drain descaling visit to clear hardened scale and corrosion, backed by our workmanship warranty."
        bookingLabel={BOOKING_LABEL}
      />
    </>
  );
}
