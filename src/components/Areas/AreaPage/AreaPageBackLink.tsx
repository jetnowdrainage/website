import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Simple back-navigation band so an area page never dead-ends — mirrors the
 * "You might also need" cross-linking pattern on service pages
 * (`ServicePageRelatedLinks.tsx`), but pointed at the single parent page
 * rather than sibling pages, since every area page shares the same "back to
 * the full list" destination.
 */
export function AreaPageBackLink() {
  return (
    <section className="pb-10">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-6">
        <Link
          href="/areas-we-cover"
          // SEOPlan.md Phase 9: hover fill is #235f82, not bg-brand-primary —
          // see HomeStatsStrip.tsx for the contrast maths.
          className="inline-flex items-center gap-2 rounded-md border border-brand-primary/40 px-5 py-2.5 text-sm font-semibold text-[var(--brand-primary)] transition hover:bg-[#235f82] hover:text-white"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
          <span>View All Areas</span>
        </Link>
      </div>
    </section>
  );
}
