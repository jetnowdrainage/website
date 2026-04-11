"use client";

import { useState } from "react";
import { LegalMarkdown } from "@/components/Legal/LegalMarkdown";
import { legalPolicies } from "@/components/Legal/legal";

export function LegalContent() {
  const [activePolicyId, setActivePolicyId] = useState<string>(legalPolicies[0]?.id ?? "");
  const activePolicy =
    legalPolicies.find((policy) => policy.id === activePolicyId) ?? legalPolicies[0] ?? null;

  if (!activePolicy) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-5xl space-y-10 px-6">
        <div className="flex flex-wrap gap-2">
          {legalPolicies.map((policy) => (
            <button
              key={policy.id}
              type="button"
              onClick={() => setActivePolicyId(policy.id)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                activePolicy.id === policy.id
                  ? "border-brand-primary bg-[#e8f2f9] text-brand-primary"
                  : "border-slate-200 bg-white text-slate-700 hover:border-brand-primary"
              }`}
            >
              {policy.title}
            </button>
          ))}
        </div>

        <article
          id={activePolicy.id}
          className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-[0_18px_32px_-26px_rgba(15,23,42,0.28)] md:p-8"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">{activePolicy.title}</h2>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Last updated: {activePolicy.lastUpdated}
            </p>
          </div>
          <div className="space-y-4">
            <LegalMarkdown markdown={activePolicy.markdown} />
          </div>
        </article>
      </div>
    </section>
  );
}
