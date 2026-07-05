import type { Metadata } from "next";
import { Search, Wrench, Droplets, ShieldCheck } from "lucide-react";
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

const PATH = "/services/internal-drain-unblocking";
const BOOKING_LABEL = "Internal Drain Unblocking";

export const metadata: Metadata = buildPageMetadata({
  title: "Blocked Toilet, Sink & Bath Unblocking | Jet Now Drainage",
  description:
    "Fast, fixed-price internal drain unblocking for blocked toilets, sinks, baths and waste pipework across London, Essex and Hertfordshire. On site within 1-2 hours.",
  path: PATH,
});

const faqs = [
  {
    question: "Am I responsible for an internal drain blockage, or is it the water company's problem?",
    answer:
      "Drains within your property boundary that only serve your home are your responsibility. Since the 2011 transfer of private sewers, any drain shared with a neighbour or running beyond your boundary is usually the water company's, and they typically clear it at no charge. If you're unsure which applies, our engineer can help you work it out on site.",
  },
  {
    question: "Is it safe to use a chemical drain cleaner before calling someone out?",
    answer:
      "We'd advise against it. Chemical cleaners rarely clear a genuine blockage, can damage older pipework, and leave a hazardous residue that puts the engineer at risk when they come to clear the drain properly. A plunger or a kettle of hot water is a safer first step for a minor clog.",
  },
  {
    question: "How quickly can you attend an internal blockage?",
    answer:
      "We aim to attend within 1-2 hours and operate 24 hours a day, 7 days a week, across London, Essex and Hertfordshire.",
  },
  {
    question: "Will you need to remove fixtures like a toilet or a sink trap?",
    answer:
      "Most internal blockages are cleared through existing access points, such as the WC pan, waste pipe or an accessible trap, without removing fixtures. In the rare case a fixture itself needs attention, we'll explain why and agree the cost with you before doing any further work.",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Internal Drain Unblocking", path: PATH },
]);

const faqSchema = buildFaqSchema(faqs);

const serviceSchema = buildServiceSchema({
  name: "Internal Drain Unblocking",
  description:
    "Clearance of blocked toilets, sinks, baths, showers and internal waste pipework using drain rods, mechanical clearance and internal jetting.",
  path: PATH,
});

export default function InternalDrainUnblockingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <ServicePageHero
        eyebrow="Internal Drainage"
        title="Internal Drain Unblocking"
        description="Blocked toilet, sink, bath or shower? We clear internal drains and waste pipework quickly and cleanly, with a fixed price agreed before we start."
        imageSrc="/JetNow/NewImages/JN-InternalUnblocks.jpg"
        imageAlt="Jet Now Drainage engineer clearing an internal drain blockage"
        bookingLabel={BOOKING_LABEL}
      />

      <ServicePageIntro
        paragraphs={[
          "A blocked toilet, sink or bath is one of the most common drainage problems in any home or business, and usually one of the most disruptive. Inside a property, blockages typically build up from fat, oil and grease cooling and solidifying in kitchen pipework, or from hair, soap scum and so-called \"flushable\" wipes catching in bathroom waste pipes and toilet branches. On their own, these deposits narrow the pipe gradually until water can no longer pass freely.",
          "Some minor clogs can be cleared with a plunger or hot water, but once a blockage affects more than one fixture, keeps returning, or brings sewage smells into the property, it usually points to something further down the system that needs proper equipment to clear. Our engineers carry drain rods, motorised mechanical clearance tools and jetting equipment suited to internal pipework, so we can identify the cause and clear it in a single visit.",
        ]}
      />

      <ServicePageDetails
        heading="What's Involved"
        intro="Every internal call-out follows the same careful process, from first diagnosis through to a final flow test."
        items={[
          {
            icon: <Search aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "On-Site Diagnosis",
            body: "We check which fixtures are affected to establish whether the blockage sits in an individual branch pipe or further along the main run.",
          },
          {
            icon: <Wrench aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Drain Rods & Mechanical Clearance",
            body: "Manual rodding or a motorised drain snake is used first to break up and remove the blockage through the nearest access point.",
          },
          {
            icon: <Droplets aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Internal Jetting Where Needed",
            body: "For grease build-up or a stubborn clog that rodding alone won't shift, we use jetting equipment calibrated for internal pipework.",
          },
          {
            icon: <ShieldCheck aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Flow Test & Clean-Up",
            body: "Before we leave, every affected fixture is tested to confirm it's flowing freely, and the work area is left clean and tidy.",
          },
        ]}
      />

      <ServicePageSigns
        heading="Signs You Need Internal Drain Unblocking"
        intro="These are the clearest signs a professional clearance is needed rather than a DIY fix."
        signs={[
          "Water draining slowly from a sink, bath or shower",
          "Gurgling sounds from a drain or toilet when water runs elsewhere in the property",
          "Water rising in a bath or shower tray when the toilet is flushed",
          "A persistent smell of sewage gas from a drain or fixture",
          "More than one fixture backing up at the same time",
          "The same blockage returning within days of clearing it yourself",
        ]}
      />

      <ServicePageLocalArea body="We carry out internal drain unblocking for homes, landlords and businesses across London, Essex, Hertfordshire, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire and Suffolk." />

      <ServicePageFaq faqs={faqs} />

      <ServicePageRelatedLinks
        items={[
          { label: "External Drain Unblocking", href: "/services/external-drain-unblocking" },
          { label: "CCTV Drain Surveys", href: "/services/cctv-drain-surveys" },
          { label: "24/7 Emergency Response", href: "/services/emergency-drainage-services" },
        ]}
      />

      <ServicePageCta
        heading="Blocked Toilet, Sink or Bath?"
        body="Get in touch now for fast, fixed-price internal drain unblocking. Our engineers aim to be on site within 1-2 hours, day or night."
        bookingLabel={BOOKING_LABEL}
      />
    </>
  );
}
