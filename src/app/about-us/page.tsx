import type { Metadata } from "next";
import { AboutHero } from "@/components/About/AboutHero";
import { HomeStatsStrip } from "@/components/Home/HomeStatsStrip";
import { AboutIntro } from "@/components/About/AboutIntro";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Jet Now Drainage, an independent family-run team delivering professional drainage support across London, Essex and Hertfordshire.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HomeStatsStrip />
      <AboutIntro />
    </>
  );
}
