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

export function HomeStatsStrip() {
  return (
    <section className="bg-brand-primary">
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
