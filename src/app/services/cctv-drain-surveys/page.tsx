import type { Metadata } from "next";
import { Video, ClipboardList, Home, Wrench } from "lucide-react";
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

const PATH = "/services/cctv-drain-surveys";
const BOOKING_LABEL = "CCTV Drain Survey";

export const metadata: Metadata = buildPageMetadata({
  title: "CCTV Drain Surveys for Homes & Buyers | Jet Now Drainage",
  description:
    "CCTV drain surveys with a clear written report, covering recurring blockages, pre-purchase checks and extensions across London, Essex and Hertfordshire.",
  path: PATH,
});

const faqs = [
  {
    question: "What does a CCTV drain survey actually show?",
    answer:
      "A waterproof camera is fed through the drain, recording live footage of the full length of the pipe. This reveals blockages, cracks, displaced joints, tree root ingress and collapsed sections that aren't visible from ground level or picked up by a standard building survey.",
  },
  {
    question: "Do I need a CCTV survey before buying a house?",
    answer:
      "It isn't compulsory, but it's worth considering for a property built more than around 30 years ago, one with a history of blockages, a large tree nearby, or shared drains. Findings from a survey can be used to negotiate repairs, or a price reduction, before you exchange contracts.",
  },
  {
    question: "What happens if the survey finds a problem?",
    answer:
      "We'll talk you through what's been found and the realistic options, whether that's jetting to clean the pipe, mechanical descaling, or relining to repair a structural defect, with a fixed-price quote agreed before any further work goes ahead.",
  },
  {
    question: "How long does a survey take?",
    answer:
      "It depends on the number of drain runs on the property and how easy they are to access. Our engineer will give you a realistic timeframe once they've had a look at the site.",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "CCTV Drain Surveys", path: PATH },
]);

const faqSchema = buildFaqSchema(faqs);

const serviceSchema = buildServiceSchema({
  name: "CCTV Drain Surveys",
  description:
    "Camera-based drain surveys with a written condition report, used for recurring blockage diagnosis, pre-purchase checks, extensions and build-over agreements.",
  path: PATH,
});

export default function CctvDrainSurveysPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <ServicePageHero
        eyebrow="Drain Inspection"
        title="CCTV Drain Surveys"
        description="See exactly what's happening underground. Our CCTV drain surveys give you a clear picture of pipe condition, with a written report and honest recommendations."
        imageSrc="/JetNow/NewImages/JN-CCTVDrainSurveys.jpg"
        imageAlt="Jet Now Drainage engineer carrying out a CCTV drain survey"
        bookingLabel={BOOKING_LABEL}
      />

      <ServicePageIntro
        paragraphs={[
          "A CCTV drain survey uses a small, waterproof camera fed through the drainage system to record the condition of the pipe from the inside. It's the only reliable way to see faults like cracks, displaced joints, root ingress or a partial collapse before they turn into a blockage or a much larger repair, and standard building surveys don't cover drains at all.",
          "Surveys are most valuable in a few specific situations: buying an older property, particularly one built before the 1990s where clay and pitch-fibre pipes are prone to fracture; dealing with a blockage that keeps coming back despite clearing it; planning an extension or building work near an existing drain; or responding to a request from a solicitor, lender or insurer. Whatever the reason, you get a clear written report and a straightforward explanation of what, if anything, needs doing next.",
        ]}
      />

      <ServicePageDetails
        heading="What's Involved"
        items={[
          {
            icon: <Video aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Camera Inspection",
            body: "A waterproof camera is fed through the drain run, recording live footage of the full bore of the pipe as it travels.",
          },
          {
            icon: <ClipboardList aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Condition Report",
            body: "Findings are written up with the defect type, its location and severity, so you know exactly what's happening underground.",
          },
          {
            icon: <Home aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Pre-Purchase & Extension Surveys",
            body: "Useful before buying an older property, or before extension and building-over work near an existing drain run.",
          },
          {
            icon: <Wrench aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Clear Next Steps",
            body: "If a defect is found, we explain whether jetting, mechanical descaling or relining is the right fix, and what it would involve.",
          },
        ]}
      />

      <ServicePageSigns
        heading="When to Book a CCTV Drain Survey"
        signs={[
          "The property was built more than around 30 years ago and its drains have never been checked",
          "You've had the same blockage clear and then return more than once",
          "There's a large tree close to the drain run",
          "You're extending or building near an existing drain and need to confirm its route and condition",
          "You're buying a property and want to check for defects a standard survey won't cover",
          "A solicitor, insurer or lender has asked for evidence of drain condition",
        ]}
      />

      <ServicePageLocalArea body="We carry out CCTV drain surveys for homebuyers, homeowners and businesses across London, Essex, Hertfordshire, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire and Suffolk." />

      <ServicePageFaq faqs={faqs} />

      <ServicePageRelatedLinks
        items={[
          { label: "Drain Repairs & Relining", href: "/services/drain-repairs-relining" },
          { label: "High-Pressure Jetting", href: "/services/high-pressure-drain-jetting" },
          { label: "External Drain Unblocking", href: "/services/external-drain-unblocking" },
        ]}
      />

      <ServicePageCta
        heading="Want to See What's Really Going On?"
        body="Book a CCTV drain survey and get a clear, honest picture of your drainage system, backed by a written report."
        bookingLabel={BOOKING_LABEL}
      />
    </>
  );
}
