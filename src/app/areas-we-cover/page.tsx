import type { Metadata } from "next";
import { Suspense } from "react";
import { AreasHero } from "@/components/Areas/AreasHero";
import { AreasSeo } from "@/components/Areas/AreasSeo";
import { HomeLocations } from "@/components/Areas/Locations";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "View Jet Now Drainage coverage across London and surrounding counties, including Essex, Hertfordshire, Surrey, Kent and more.",
  alternates: {
    canonical: "/areas-we-cover",
  },
};

export default function AreasWeCoverPage() {
  return (
    <>
      <AreasHero />
      <HomeLocations />
      <Suspense fallback={null}>
        <AreasSeo />
      </Suspense>
    </>
  );
}
