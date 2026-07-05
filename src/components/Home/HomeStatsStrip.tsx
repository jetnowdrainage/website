const stats = [
  {
    value: "10+ years",
    label: "Professional experience",
    mobileValue: "10+ years",
    mobileLabel: "Professional experience",
  },
  {
    value: "Fixed pricing",
    label: "Clear upfront costs",
    mobileValue: "Fixed pricing",
    mobileLabel: "Clear upfront\ncosts",
  },
  {
    value: "2-hour response",
    label: "Rapid local call-outs",
    mobileValue: "2 hour",
    mobileLabel: "Rapid call-out response",
  },
];

// SEOPlan.md Phase 9: `--brand-primary` (`#408ab9`) only measures 3.78:1
// for white text, short of WCAG's 4.5:1 normal-text requirement — the
// value/label text here never reaches the 18.66px-bold "large text" size
// that would allow the relaxed 3:1 ratio. `#235f82` is the same blue hue
// darkened until white text clears 6.9:1, applied locally here rather than
// changing the shared `--brand-primary` variable, which is used all over
// the site as plain text/border colour where it already passes comfortably.

export function HomeStatsStrip() {
  return (
    <section className="bg-[#235f82]">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-0 py-3 text-white sm:py-4">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`flex flex-col justify-center px-1 py-2 text-center sm:px-5 sm:py-0 ${
                index < stats.length - 1 ? "border-r border-white/25" : ""
              }`}
            >
              <p className="text-sm font-bold leading-tight sm:text-base md:text-lg">
                <span className="sm:hidden">{stat.mobileValue}</span>
                <span className="hidden sm:inline">{stat.value}</span>
              </p>
              <p className="text-[11px] font-medium leading-tight text-slate-100 sm:text-xs md:text-sm">
                <span className="whitespace-pre-line sm:hidden">{stat.mobileLabel}</span>
                <span className="hidden sm:inline">{stat.label}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
