import type { Metadata } from "next";
import { LegalHero } from "@/components/Legal/LegalHero";
import { LegalContent } from "@/components/Legal/LegalContent";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Read Jet Now Drainage privacy and cookie information for jetnowdrainage.co.uk.",
  alternates: {
    canonical: "/legal",
  },
};

export default function LegalPage() {
  return (
    <>
      <LegalHero />
      <LegalContent />
    </>
  );
}
