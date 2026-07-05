import type { Metadata } from "next";
import { PhoneCall, Clock, AlertTriangle, ShieldCheck } from "lucide-react";
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

const PATH = "/services/emergency-drainage-services";
const BOOKING_LABEL = "Emergency Drainage";

export const metadata: Metadata = buildPageMetadata({
  title: "24/7 Emergency Drainage Services | Jet Now Drainage",
  description:
    "Sewage backing up or a drain flooding your property? We attend genuine drainage emergencies within 1-2 hours, 24/7, across London, Essex and Hertfordshire.",
  path: PATH,
});

const faqs = [
  {
    question: "What should I do while I wait for an emergency engineer?",
    answer:
      "Stop using taps, toilets and appliances so you don't add more water to the problem. Keep children and pets away from any contaminated area, and if it's safe to do so, turn off electricity near standing water and open windows for ventilation. Don't attempt to clear a serious blockage yourself.",
  },
  {
    question: "How quickly can you attend a genuine emergency?",
    answer:
      "We aim to attend within 1-2 hours and operate 24 hours a day, 7 days a week, across London, Essex and Hertfordshire.",
  },
  {
    question: "Will my home insurance cover an emergency drainage call-out?",
    answer:
      "Many home insurance policies include drainage cover, so it's worth checking your policy and contacting your insurer. We can provide photos and documentation of the work carried out if you need it for a claim.",
  },
  {
    question: "What if the emergency turns out to be a public sewer issue?",
    answer:
      "If the drain is shared with a neighbour or runs beyond your property boundary, it's usually the water company's responsibility, and they typically attend at no charge. We can help you establish which applies before agreeing to a paid call-out.",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "24/7 Emergency Drainage Services", path: PATH },
]);

const faqSchema = buildFaqSchema(faqs);

const serviceSchema = buildServiceSchema({
  name: "24/7 Emergency Drainage Services",
  description:
    "Round-the-clock emergency call-out service for sewage backing up, drain-related flooding and other urgent drainage failures.",
  path: PATH,
});

export default function EmergencyDrainageServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <ServicePageHero
        eyebrow="Emergency Response"
        title="24/7 Emergency Drainage Services"
        description="Sewage backing up, water flooding in, or your only toilet out of action? We attend genuine drainage emergencies within 1-2 hours, day or night."
        imageSrc="/JetNow/JN%20-%20HomeServicesImg.jpeg"
        imageAlt="Jet Now Drainage engineer responding to an emergency drainage call-out"
        bookingLabel={BOOKING_LABEL}
      />

      <ServicePageIntro
        paragraphs={[
          "Not every blocked drain needs an emergency response, but some genuinely can't wait: sewage coming back into the property, water actively flooding in, or losing your only working toilet all fall into that category. When it does happen, the priority is stopping the situation from getting worse while help is on the way, then getting a qualified engineer on site as quickly as possible to find and fix the actual cause.",
          "We operate a genuine 24/7 call-out line, aiming to attend within 1-2 hours regardless of the time of day. That includes evenings, weekends and bank holidays, when a drainage emergency is at its most disruptive and hardest to get seen quickly. As with every job we do, you'll get a fixed price agreed before work begins, even on an emergency call-out.",
        ]}
      />

      <ServicePageDetails
        heading="What's Involved"
        items={[
          {
            icon: <PhoneCall aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Always-On Call-Out Line",
            body: "Available 24 hours a day, 7 days a week, including nights, weekends and bank holidays.",
          },
          {
            icon: <Clock aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "1-2 Hour Attendance",
            body: "We aim to be on site within 1 to 2 hours of your call, wherever you are across our coverage area.",
          },
          {
            icon: <AlertTriangle aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Sewage & Flood Response",
            body: "Equipped to deal with sewage backing up internally, overflowing manholes and drain-related flooding.",
          },
          {
            icon: <ShieldCheck aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Fixed Price Before We Start",
            body: "A clear price is agreed before work begins, even on an emergency call-out, so there are no surprises.",
          },
        ]}
      />

      <ServicePageSigns
        heading="Is It a Genuine Drainage Emergency?"
        intro="If any of the following apply, treat it as an emergency and call us straight away."
        signs={[
          "Sewage is backing up into a toilet, bath, shower or sink",
          "Water is actively flooding into the property from a drain or manhole",
          "You've lost your only working toilet",
          "A strong, persistent sewage smell is coming from inside the building",
          "An external manhole or inspection chamber is visibly overflowing",
          "The situation is actively getting worse while you wait",
        ]}
      />

      <ServicePageLocalArea body="Our emergency call-out service covers London, Essex, Hertfordshire, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire and Suffolk, 24 hours a day." />

      <ServicePageFaq faqs={faqs} />

      <ServicePageRelatedLinks
        items={[
          { label: "Internal Drain Unblocking", href: "/services/internal-drain-unblocking" },
          { label: "External Drain Unblocking", href: "/services/external-drain-unblocking" },
          { label: "Tanker Services", href: "/services/tanker-drainage-services" },
        ]}
      />

      <ServicePageCta
        heading="Drainage Emergency Right Now?"
        body="Call us immediately for a genuine drainage emergency. We aim to be on site within 1-2 hours, any time, day or night."
        bookingLabel={BOOKING_LABEL}
      />
    </>
  );
}
