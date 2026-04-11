import { HomeHero } from "@/components/Home/HomeHero";
import { HomeDrainServices } from "@/components/Home/HomeDrainServices";
import { HomeLocations } from "@/components/Home/HomeLocations";
import { HomeCta } from "@/components/Home/HomeCta";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeDrainServices />
      <HomeLocations />
      <HomeCta />
    </>
  );
}
