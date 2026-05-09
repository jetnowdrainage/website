import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactHero } from "@/components/Contact/ContactHero";
import { ContactFormFaq } from "@/components/Contact/ContactFormFaq";
import { ContactReviews } from "@/components/Contact/ContactReviews";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Jet Now Drainage for rapid call-outs, planned drainage work and expert support for residential and commercial properties.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Suspense fallback={null}>
        <ContactFormFaq />
      </Suspense>
      {/*
      <ContactReviews />
      */}
    </>
  );
}
