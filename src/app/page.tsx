import type { Metadata } from "next";
import { HomeHero } from "@/components/Home/HomeHero";
import { HomeStatsStrip } from "@/components/Home/HomeStatsStrip";
import { HomeDrainServices } from "@/components/Home/HomeDrainServices";
import { HomeLocations } from "@/components/Home/HomeLocations";
import { HomeTestimonials } from "@/components/Home/HomeTestimonials";
import { HomeCta } from "@/components/Home/HomeCta";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Jet Now Drainage provides fast, fixed-price drainage services for homes and businesses across London, Essex and Hertfordshire.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStatsStrip />
      <HomeDrainServices />
      <HomeLocations />
      <HomeTestimonials />
      <HomeCta />
    </>
  );
}
