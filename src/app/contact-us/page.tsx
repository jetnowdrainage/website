import { Suspense } from "react";
import { ContactHero } from "@/components/Contact/ContactHero";
import { ContactFormFaq } from "@/components/Contact/ContactFormFaq";
import { ContactReviews } from "@/components/Contact/ContactReviews";

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
