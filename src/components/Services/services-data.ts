export type ServiceCard = {
  id: string;
  /** URL slug for the dedicated page at /services/[slug] (SEOPlan.md Phase 4). */
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  imageClassName?: string;
};

/**
 * Single source of truth for the 8 services, shared by the flip-card grid
 * on /services, the sitemap, and llms.txt — so a new service or a renamed
 * slug only ever needs to change in one place. Each `slug` links through to
 * its own hand-written page in `src/app/services/<slug>/page.tsx`.
 */
export const services: ServiceCard[] = [
  {
    id: "internal-unblocks",
    slug: "internal-drain-unblocking",
    title: "Internal Unblocks",
    description:
      "Fast clearance for blocked toilets, sinks, baths and internal waste pipework with clean, careful working practices.",
    imageSrc: "/JetNow/NewImages/JN-InternalUnblocks.jpg",
  },
  {
    id: "external-unblocks",
    slug: "external-drain-unblocking",
    title: "External Unblocks",
    description:
      "We clear blocked gullies, outside drains and shared runs to restore flow and reduce repeat issues.",
    imageSrc: "/JetNow/NewImages/JN-ExternalUnblocks.jpg",
  },
  {
    id: "tanker-services",
    slug: "tanker-drainage-services",
    title: "Tanker Services",
    description:
      "For heavy-duty jobs, our tanker support removes high volumes of waste to keep domestic and commercial clients free-flowing.",
    imageSrc: "/JetNow/NewImages/JN-TankerUnblocks.jpeg",
  },
  {
    id: "cctv-surveys",
    slug: "cctv-drain-surveys",
    title: "CCTV Drain Surveys",
    description:
      "Our engineers use CCTV drain cameras to inspect pipework and provide clear findings on condition and fault locations.",
    imageSrc: "/JetNow/NewImages/JN-CCTVDrainSurveys.jpg",
  },
  {
    id: "jetting",
    slug: "high-pressure-drain-jetting",
    title: "High-Pressure Jetting",
    description: "Powerful water jetting to remove build-up, grease and debris from drainage pipework.",
    imageSrc: "/JetNow/NewImages/highpressurejetting.jpeg",
  },
  {
    id: "repairs",
    slug: "drain-repairs-relining",
    title: "Drain Repairs & Relining",
    description: "Targeted repair and relining options designed to extend system life with less disruption.",
    imageSrc: "/JetNow/JN%20-%20Repairs%20Relining.jpeg",
  },
  {
    id: "emergency",
    slug: "emergency-drainage-services",
    title: "24/7 Emergency Response",
    description: "We aim to be on site within 1-2 hours to prevent disruption to your home or business.",
    imageSrc: "/JetNow/JN%20-%20HomeServicesImg.jpeg",
  },
  {
    id: "drain-cleaning",
    slug: "drain-descaling",
    title: "Drain Descaling",
    description:
      "Descaling and maintaining your drainage system expands the lifespan and decreases the likelihood of blockages. We offer warranty on all descaling works.",
    imageSrc: "/JetNow/JN%20-%20DrainDescaling2.jpeg",
  },
];
