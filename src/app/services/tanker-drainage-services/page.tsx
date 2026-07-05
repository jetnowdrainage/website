import type { Metadata } from "next";
import { Truck, Droplets, Building2, FileCheck } from "lucide-react";
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

const PATH = "/services/tanker-drainage-services";
const BOOKING_LABEL = "Tanker Services";

export const metadata: Metadata = buildPageMetadata({
  title: "Septic Tank, Cesspit & Tanker Services | Jet Now Drainage",
  description:
    "Tanker services for septic tank and cesspit emptying, plus high-volume waste removal for homes and businesses across London, Essex and Hertfordshire.",
  path: PATH,
});

const faqs = [
  {
    question: "How often does a septic tank need emptying by law?",
    answer:
      "Under the general binding rules for septic tanks and small sewage treatment plants, the sludge that builds up must be removed at least once a year, or in line with the manufacturer's instructions, before it exceeds the tank's capacity. The waste must be removed by a registered waste carrier.",
  },
  {
    question: "What's the difference between a septic tank and a cesspit?",
    answer:
      "A septic tank treats wastewater and discharges the treated effluent to a drainage field, so it only needs the settled sludge removing periodically. A cesspit, or cesspool, has no outlet at all: everything that goes in has to be removed, so it typically needs emptying far more often, sometimes every few weeks depending on the size of the tank and how many people use it.",
  },
  {
    question: "How do I know if my waste is being disposed of legally?",
    answer:
      "Every household and business has a legal duty of care to ensure waste is removed by a registered waste carrier. It's reasonable to ask any contractor, including us, to confirm their waste carrier registration before booking a tanker visit.",
  },
  {
    question: "Do you offer one-off as well as scheduled tanker visits?",
    answer:
      "Yes. Whether you need a single emergency empty or want to arrange this as part of regular maintenance for a septic tank, cesspit or commercial system, get in touch and we'll agree what works for your property.",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Tanker Services", path: PATH },
]);

const faqSchema = buildFaqSchema(faqs);

const serviceSchema = buildServiceSchema({
  name: "Tanker Drainage Services",
  description:
    "Vacuum tanker services for septic tank emptying, cesspit and cesspool emptying, and high-volume commercial waste removal.",
  path: PATH,
});

export default function TankerServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <ServicePageHero
        eyebrow="Waste Removal"
        title="Tanker Drainage Services"
        description="High-volume tanker support for septic tank and cesspit emptying, and commercial waste removal, for jobs standard drain clearance can't handle."
        imageSrc="/JetNow/NewImages/JN-TankerUnblocks.jpeg"
        imageAlt="Jet Now Drainage tanker vehicle carrying out waste removal"
        bookingLabel={BOOKING_LABEL}
      />

      <ServicePageIntro
        paragraphs={[
          "Not every drainage job can be handled with drain rods or a jetting hose. Septic tanks, cesspits and larger commercial systems produce volumes of liquid waste that need a vacuum tanker to remove safely and take away for lawful disposal. Our tanker service covers scheduled and one-off emptying for domestic septic tanks and cesspits, as well as larger commercial jobs, including grease traps and welfare units.",
          "Septic tanks and cesspits are treated differently under UK regulations. A septic tank treats wastewater on site and discharges the treated effluent to a drainage field, so only the settled sludge needs periodic removal, at least once a year under the general binding rules. A cesspit, by contrast, is a sealed, collection-only tank with no outlet at all, so it fills continuously and needs emptying far more frequently, often every few weeks depending on the tank size and how many people rely on it.",
        ]}
      />

      <ServicePageDetails
        heading="What's Involved"
        intro="Our tanker team handles the collection, transport and disposal side of the job, so you don't have to arrange multiple contractors."
        items={[
          {
            icon: <Truck aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Septic Tank Emptying",
            body: "Sludge is removed before it reaches capacity, in line with the general binding rules requiring at least annual emptying, or sooner per the manufacturer's guidance.",
          },
          {
            icon: <Droplets aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Cesspit & Cesspool Emptying",
            body: "Collection-only systems with no outlet, needing far more frequent emptying depending on tank size and household or site usage.",
          },
          {
            icon: <Building2 aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Commercial & High-Volume Waste",
            body: "Grease traps, welfare units and larger sites producing more waste than a standard drain call-out is set up to remove.",
          },
          {
            icon: <FileCheck aria-hidden="true" className="h-5 w-5" strokeWidth={2} />,
            title: "Lawful Collection & Disposal",
            body: "Waste is collected and disposed of in line with UK waste-carrier duty of care requirements, so you stay compliant as the site owner.",
          },
        ]}
      />

      <ServicePageSigns
        heading="Signs You Need a Tanker Visit"
        signs={[
          "Your septic tank or treatment plant hasn't been emptied in the last 12 months",
          "A cesspit alarm has triggered, or the tank is close to full",
          "Slow-draining or gurgling fixtures with no obvious blockage nearby",
          "A strong smell around the tank, soakaway or drainage field",
          "Effluent pooling on the ground near a soakaway or drainage field",
          "You're buying or selling a property with a septic tank or cesspit that needs emptying and checking",
        ]}
      />

      <ServicePageLocalArea body="We provide tanker and waste removal services for domestic and commercial properties across London, Essex, Hertfordshire, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire and Suffolk." />

      <ServicePageFaq faqs={faqs} />

      <ServicePageRelatedLinks
        items={[
          { label: "External Drain Unblocking", href: "/services/external-drain-unblocking" },
          { label: "24/7 Emergency Response", href: "/services/emergency-drainage-services" },
          { label: "CCTV Drain Surveys", href: "/services/cctv-drain-surveys" },
        ]}
      />

      <ServicePageCta
        heading="Need a Tanker Booked?"
        body="Get in touch for septic tank, cesspit or commercial tanker services. We cover one-off emptying and ongoing maintenance visits."
        bookingLabel={BOOKING_LABEL}
      />
    </>
  );
}
