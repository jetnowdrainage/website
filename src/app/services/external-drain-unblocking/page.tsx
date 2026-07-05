import type { Metadata } from "next";
import { Search, Wrench, Droplets, Camera } from "lucide-react";
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

const PATH = "/services/external-drain-unblocking";
const BOOKING_LABEL = "External Drain Unblocking";

export const metadata: Metadata = buildPageMetadata({
  title: "External Drain & Gully Unblocking | Jet Now Drainage",
  description:
    "Blocked outside drain, gully or manhole? We clear external drains fast across London, Essex and Hertfordshire, with CCTV diagnosis for recurring blockages.",
  path: PATH,
});

const faqs = [
  {
    question: "Who is responsible for an outside drain that runs to a neighbour's property or the public sewer?",
    answer:
      "Drains and gullies entirely within your property boundary, serving only your home, are your responsibility. Since the 2011 transfer of private sewers, any lateral drain shared with another property, or running beyond your boundary, is usually the water company's responsibility to clear, generally at no charge to you.",
  },
  {
    question: "What usually causes external drains to block?",
    answer:
      "The most common causes are leaves and silt washing into gullies, tree roots seeking moisture through pipe joints, and misuse such as pouring fat, oil or building debris down an outside drain.",
  },
  {
    question: "Is a blocked external drain ever a genuine emergency?",
    answer:
      "Yes, if it's causing flooding into the property or across a large area of the garden or driveway, especially during heavy rain. In that situation, treat it as an emergency and call us straight away rather than waiting for a scheduled visit.",
  },
  {
    question: "Can you tell me if a blockage is my responsibility before I book a full job?",
    answer:
      "In most cases, yes. Our engineer can usually establish where a blockage sits, and whether it falls within your boundary, during the initial visit, before any further work is agreed.",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "External Drain Unblocking", path: PATH },
]);

const faqSchema = buildFaqSchema(faqs);

const serviceSchema = buildServiceSchema({
  name: "External Drain Unblocking",
  description:
    "Clearance of blocked outside drains, gullies, manholes and shared drain runs, with CCTV diagnosis available for recurring blockages.",
  path: PATH,
});

export default function ExternalDrainUnblockingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <ServicePageHero
        eyebrow="External Drainage"
        title="External Drain Unblocking"
        description="Standing water in a gully, manhole or garden drain? We clear external blockages and get water flowing again, with a fixed price agreed up front."
        imageSrc="/JetNow/NewImages/JN-ExternalUnblocks.jpg"
        imageAlt="Jet Now Drainage engineer clearing an external drain and gully"
        bookingLabel={BOOKING_LABEL}
      />

      <ServicePageIntro
        paragraphs={[
          "External drains and gullies carry rainwater and wastewater away from the property before it reaches the shared or public sewer network. Because they sit outside, they're exposed to leaves, silt, garden debris and tree roots in a way internal pipework isn't, and a blockage here often shows up as standing water in a manhole or gully, or as flooding across a patio, driveway or lawn after rain.",
          "Responsibility for an external drain depends on exactly where it sits. Since the 2011 transfer of private sewers, drains and gullies entirely within your boundary that serve only your property remain yours to maintain, while any section shared with a neighbour, or running beyond your boundary, is usually the water company's. We can help establish which applies to your blockage, then clear it using rodding, jetting, or a CCTV check if it keeps coming back.",
        ]}
      />

      <ServicePageDetails
        heading="What's Involved"
        intro="External blockages are traced from the nearest access point outward, so we clear the actual cause rather than just the visible symptom."
        items={[
          {
            icon: <Search aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Manhole & Gully Inspection",
            body: "We check inspection chambers and gullies to trace where the blockage sits and confirm whether it falls within your property boundary.",
          },
          {
            icon: <Wrench aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Rodding & Mechanical Clearance",
            body: "Drain rods are used to break up and clear leaves, silt and general debris from gullies and shorter drain runs.",
          },
          {
            icon: <Droplets aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "High-Pressure Jetting",
            body: "For compacted silt, grease or tree root ingress, jetting equipment scours the full length of the pipe rather than just the blockage point.",
          },
          {
            icon: <Camera aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "CCTV Check for Recurring Blockages",
            body: "If a drain blocks repeatedly, a camera survey identifies structural causes like root ingress, a displaced joint or a partial collapse.",
          },
        ]}
      />

      <ServicePageSigns
        heading="Signs You Need External Drain Unblocking"
        signs={[
          "Standing water in an outside gully, manhole or inspection chamber",
          "Water pooling on the patio, driveway or lawn after rain",
          "A foul smell lingering around an outside drain",
          "Water backing up outside when a downstairs toilet or sink is used",
          "Visibly slow-draining surface water following rainfall",
          "The same external drain blocking repeatedly over a short period",
        ]}
      />

      <ServicePageLocalArea body="We clear external drains and gullies for homes and businesses across London, Essex, Hertfordshire, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire and Suffolk." />

      <ServicePageFaq faqs={faqs} />

      <ServicePageRelatedLinks
        items={[
          { label: "Internal Drain Unblocking", href: "/services/internal-drain-unblocking" },
          { label: "CCTV Drain Surveys", href: "/services/cctv-drain-surveys" },
          { label: "24/7 Emergency Response", href: "/services/emergency-drainage-services" },
        ]}
      />

      <ServicePageCta
        heading="Outside Drain Blocked or Flooding?"
        body="Contact us for fast external drain unblocking. We aim to be on site within 1-2 hours across London, Essex and Hertfordshire, 24 hours a day."
        bookingLabel={BOOKING_LABEL}
      />
    </>
  );
}
