// FILE: src/components/sections/Certifications.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { certifications } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";

const issuerColor: Record<string, string> = {
  IBM: "#00d4ff",
  Oracle: "#f59e0b",
  "365 Data Science": "#00ff88",
};

export function Certifications() {
  const t = useTranslations("certifications");

  return (
    <section id="certifications" className="relative border-t border-border px-4 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader num="04" title={t("title")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {certifications.map((cert, i) => (
            <motion.a
              key={`${cert.issuer}-${cert.name}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              href={cert.link ?? undefined}
              target={cert.link ? "_blank" : undefined}
              rel={cert.link ? "noopener noreferrer" : undefined}
              aria-disabled={!cert.link}
              className="border border-border bg-card p-5 hover:border-zinc-600/50 hover:-translate-y-1 transition-all block"
            >
              <p
                className="text-[10px] uppercase tracking-widest mb-2 font-mono"
                style={{ color: issuerColor[cert.issuer] ?? "#00d4ff" }}
              >
                {cert.issuer}
              </p>
              <p className="text-sm font-medium leading-snug">{cert.name}</p>
              {!cert.link && (
                <p className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                  Link unavailable
                </p>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
