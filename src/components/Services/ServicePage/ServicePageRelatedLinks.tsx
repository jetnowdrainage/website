import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RelatedLink = {
  label: string;
  href: string;
};

type ServicePageRelatedLinksProps = {
  items: RelatedLink[];
};

/**
 * Lightweight cross-linking strip between services that are commonly booked
 * together (e.g. a CCTV survey before relining, or jetting before
 * descaling). SEOPlan.md Phase 7 will add a fuller "related services" card
 * strip site-wide once all 8 pages exist; this is the minimum version that
 * makes sure no new page launches as an isolated, unlinked dead end.
 */
export function ServicePageRelatedLinks({ items }: ServicePageRelatedLinksProps) {
  if (items.length === 0) return null;

  return (
    <section className="pb-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-6">
          <span className="shrink-0 text-sm font-bold uppercase tracking-wide text-[var(--text-muted)]">
            You might also need:
          </span>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              // `text-[var(--brand-primary)]` (not the hand-written `.text-brand-primary`
              // class in globals.css) is used deliberately: that class lives outside any
              // Tailwind cascade layer, so it always beats a layered `hover:text-white`
              // utility regardless of `:hover` state, leaving the text invisible against
              // the equally-blue hover background. This arbitrary-value form is a real
              // Tailwind utility in the same layer as `hover:text-white`, so hover wins.
              // Separately (SEOPlan.md Phase 9), the hover fill itself is `#235f82`
              // rather than `bg-brand-primary` — see HomeStatsStrip.tsx for why.
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-brand-primary/40 px-4 py-1.5 text-sm font-semibold text-[var(--brand-primary)] transition hover:bg-[#235f82] hover:text-white"
            >
              <span>{item.label}</span>
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
