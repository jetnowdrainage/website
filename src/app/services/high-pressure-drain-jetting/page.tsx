import type { Metadata } from "next";
import { Gauge, Droplets, UtensilsCrossed, ShieldCheck } from "lucide-react";
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

const PATH = "/services/high-pressure-drain-jetting";
const BOOKING_LABEL = "High-Pressure Jetting";

export const metadata: Metadata = buildPageMetadata({
  title: "High-Pressure Drain Jetting & Cleaning | Jet Now Drainage",
  description:
    "High-pressure drain jetting removes grease, scale and root ingress across the full pipe, not just the blockage point. Serving London, Essex and Hertfordshire.",
  path: PATH,
});

const faqs = [
  {
    question: "How is jetting different from drain rodding?",
    answer:
      "Rodding typically punches a hole through a blockage at one point. Jetting uses high-pressure water to scour the entire internal wall of the pipe, removing grease, scale and debris that would otherwise cause the next blockage further down the line.",
  },
  {
    question: "Can high-pressure jetting damage old pipes?",
    answer:
      "It can, if the pressure isn't matched to the pipe's material and condition. That's why our engineers calibrate the output before starting, running older or more fragile pipework at a lower pressure than a modern, larger-diameter drain.",
  },
  {
    question: "How often should a commercial kitchen have its drains jetted?",
    answer:
      "Industry guidance suggests every three to six months for a busy commercial kitchen, though the right interval depends on how much fat, oil and grease the site produces. We can advise on a sensible schedule once we've seen your setup.",
  },
  {
    question: "Do you use jetting for tree root blockages?",
    answer:
      "Yes, jetting is effective at cutting through root growth and flushing the material away. It's often paired with a CCTV survey first, to confirm the cause and check whether relining is also needed to stop the roots returning.",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "High-Pressure Drain Jetting", path: PATH },
]);

const faqSchema = buildFaqSchema(faqs);

const serviceSchema = buildServiceSchema({
  name: "High-Pressure Drain Jetting",
  description:
    "High-pressure water jetting to remove grease, scale, silt and tree root ingress from drainage pipework, including scheduled commercial kitchen jetting.",
  path: PATH,
});

export default function HighPressureJettingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <ServicePageHero
        eyebrow="Drain Maintenance"
        title="High-Pressure Drain Jetting"
        description="A thorough clean, not just a quick fix. High-pressure jetting clears grease, scale and root ingress from the full length of the pipe."
        imageSrc="/JetNow/NewImages/highpressurejetting.jpeg"
        imageAlt="Jet Now Drainage engineer using a high-pressure water jetting hose"
        bookingLabel={BOOKING_LABEL}
      />

      <ServicePageIntro
        paragraphs={[
          "High-pressure drain jetting uses a pump to force water through a flexible hose and specialist nozzle, typically at pressures between 1,500 and 4,000 psi. Forward-facing jets cut through the blockage and pull the hose along the pipe, while rear-facing jets scour the walls behind it, removing grease, mineral scale, silt and root fibres from the entire bore rather than just the point where the blockage sits.",
          "This makes jetting a more thorough option than rodding alone, and the go-to method for commercial kitchens, where fats, oils and grease (FOG) build up steadily and cause recurring blockages if left unmanaged. We calibrate pressure to the pipe's material, age and diameter on every job, so it's just as suitable for delicate domestic pipework as it is for a heavily fouled commercial run.",
        ]}
      />

      <ServicePageDetails
        heading="What's Involved"
        items={[
          {
            icon: <Gauge aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Calibrated Pressure",
            body: "Output is set to suit the pipe's material, age and diameter, typically between 1,500 and 4,000 psi, strong enough to clear the blockage without risking damage.",
          },
          {
            icon: <Droplets aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Full-Bore Cleaning",
            body: "Forward jets cut through the blockage while rear-facing jets scour the whole pipe wall, not just punch a hole through it.",
          },
          {
            icon: <UtensilsCrossed aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Commercial Kitchen & Grease Line Jetting",
            body: "Scheduled jetting for fat, oil and grease build-up in restaurant, takeaway and catering drainage systems.",
          },
          {
            icon: <ShieldCheck aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Preparation for Repairs",
            body: "Pipes are cleaned before a CCTV survey or relining job, so nothing is missed and any new lining bonds properly.",
          },
        ]}
      />

      <ServicePageSigns
        heading="Signs You Need Jetting"
        signs={[
          "Drains that clear briefly after rodding but block again quickly",
          "A commercial kitchen with a history of grease-related blockages",
          "Slow-draining pipework affecting several fixtures",
          "A drain due for relining or a CCTV survey that needs cleaning first",
          "Visible grease, scale or silt build-up in an accessible pipe or gully",
          "A smell that returns even after a blockage has been cleared",
        ]}
      />

      <ServicePageLocalArea body="We carry out high-pressure drain jetting for homes, restaurants and commercial premises across London, Essex, Hertfordshire, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire and Suffolk." />

      <ServicePageFaq faqs={faqs} />

      <ServicePageRelatedLinks
        items={[
          { label: "CCTV Drain Surveys", href: "/services/cctv-drain-surveys" },
          { label: "Drain Descaling", href: "/services/drain-descaling" },
          { label: "Drain Repairs & Relining", href: "/services/drain-repairs-relining" },
        ]}
      />

      <ServicePageCta
        heading="Ready for a Proper Clean-Out?"
        body="Book high-pressure jetting for a one-off blockage or a scheduled commercial maintenance visit, with a fixed price agreed up front."
        bookingLabel={BOOKING_LABEL}
      />
    </>
  );
}
