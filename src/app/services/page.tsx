import type { Metadata } from "next";
import { ServicesHero } from "@/components/Services/ServicesHero";
import { ServicesGrid } from "@/components/Services/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Jet Now Drainage services including unblocking, CCTV surveys, jetting, drain repairs, relining and rapid emergency call-outs.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
    </>
  );
}
