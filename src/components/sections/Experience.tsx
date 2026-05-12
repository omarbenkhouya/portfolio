// FILE: src/components/sections/Experience.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ExternalLink } from "lucide-react";
import { experience } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale() as "en" | "fr";
  const getExperienceTypeLabel = (type: string) => t(type.replace(/^experience\./, ""));
  const { resolvedTheme } = useTheme();

  return (
    <section id="experience" className="relative border-t border-border px-4 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader num="03" title={t("title")} />

        <div className="relative">
          {/* Vertical timeline line — hidden on mobile */}
          <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-2 pl-0">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 border border-border bg-card p-4 md:p-8 md:ml-6 group hover:border-zinc-600/50 transition-colors"
              >
                {/* Timeline dot — hidden on mobile */}
                <div
                  className="hidden md:block absolute -left-[31px] top-8 w-3 h-3 rounded-full border-2 border-background transition-colors"
                  style={{ background: exp.accentColor }}
                />

                {/* Left: meta */}
                <div>
                  {exp.logo && (
                    <div className="mb-3">
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${exp.company} official website`}
                          className="inline-flex"
                        >
                          <Image
                            src={resolvedTheme === "dark" && (exp as any).logoDark ? (exp as any).logoDark : exp.logo}
                            alt={exp.company}
                            width={120}
                            height={60}
                            className="h-10 md:h-12 w-auto max-w-[80px] md:max-w-none object-contain"
                          />
                        </a>
                      ) : (
                        <Image
                          src={resolvedTheme === "dark" && (exp as any).logoDark ? (exp as any).logoDark : exp.logo}
                          alt={exp.company}
                          width={120}
                          height={60}
                          className="h-10 md:h-12 w-auto max-w-[80px] md:max-w-none object-contain"
                        />
                      )}
                    </div>
                  )}
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-mono">
                    {exp.startDate[locale]} — {exp.endDate[locale]}
                  </p>
                  {exp.website ? (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-sans font-bold text-sm mb-1 transition-colors"
                      style={{ color: exp.accentColor }}
                    >
                      {exp.company}
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <p
                      className="font-sans font-bold text-sm mb-1"
                      style={{ color: exp.accentColor }}
                    >
                      {exp.company}
                    </p>
                  )}
                  <p className="text-[11px] text-muted-foreground">
                    {exp.location[locale]}
                  </p>
                  <span className="inline-block mt-2 text-[10px] uppercase tracking-wider px-2 py-0.5 border border-border text-muted-foreground">
                    {getExperienceTypeLabel(exp.type)}
                  </span>
                </div>

                {/* Right: role + bullets */}
                <div>
                  <h3 className="font-sans text-lg font-bold mb-4 leading-snug">
                    {exp.role[locale]}
                  </h3>
                  <ul className="space-y-2.5">
                    {exp.bullets[locale].map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="text-emerald-400 mt-0.5 flex-shrink-0 text-xs">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
