// FILE: src/components/sections/Skills.tsx
"use client";

import { useTranslations } from "next-intl";
import { skills } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

function SkillPill({ label }: { label: string }) {
  return (
    <span className="flex-shrink-0 px-3 py-1.5 text-xs font-mono border border-border bg-card text-muted-foreground hover:border-cyan-400/40 hover:text-foreground transition-all cursor-default whitespace-nowrap">
      {label}
    </span>
  );
}

// ── Section ────────────────────────────────────────────────────────────────
export function Skills() {
  const t = useTranslations("skills");

  const rows = [
    { label: t("group_ai"), items: skills.ai },
    { label: t("group_fullstack"), items: skills.fullstack },
    { label: t("group_infra"), items: skills.infra },
    { label: t("group_tools"), items: skills.tools },
  ];

  return (
    <section id="skills" className="relative border-t border-border py-16 md:py-24 overflow-hidden">
      <div className="px-4 md:px-12 max-w-6xl mx-auto">
        <SectionHeader num="02" title={t("title")} />
      </div>

      <div className="space-y-3">
        {rows.map((row, i) => (
          <div
            key={row.label}
          >
            {/* Group label — left-aligned, subtle */}
            <div className="px-4 md:px-12 mb-1.5">
              <span className="text-[10px] uppercase tracking-[0.15em] text-cyan-400/60 font-mono">
                {row.label}
              </span>
            </div>
            <div className="px-4 md:px-12 pb-2">
              <div className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <SkillPill key={item} label={item} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
