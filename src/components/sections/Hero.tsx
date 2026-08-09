// FILE: src/components/sections/Hero.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/config";

// Framer Motion variants
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const roles = [t("role1"), t("role2"), t("role3")];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-14 px-4 md:px-12 overflow-hidden"
    >
      {/* Glow blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-400/4 blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center py-16 md:py-20">
        {/* LEFT: Text */}
        <div>
          {/* Terminal tag */}
          <motion.div {...fadeUp(0)} className="mb-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 border border-border rounded-sm bg-muted/40 text-muted-foreground flex-wrap">
              <span className="text-emerald-400">~$</span>
              <span className="break-words">./omar --role &quot;AI + Full-Stack&quot; --status available-now</span>
              <span className="w-2 h-3.5 bg-cyan-400 inline-block animate-pulse flex-shrink-0" />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 mb-6">
              ◆ {t("badge")}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-sans text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.92] tracking-[-3px] mb-4"
          >
            Omar
            <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_hsl(var(--border))] hover:text-cyan-400 hover:[-webkit-text-stroke:1.5px_#22d3ee] transition-all duration-300 cursor-default">
              Benkhouya
            </span>
          </motion.h1>

          {/* Roles */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-6"
          >
            {roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span className="text-border">/</span>}
                {role}
              </span>
            ))}
            <span className="text-border">·</span>
            <span>{t("location")}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.4)}
            className="max-w-xl text-sm text-muted-foreground leading-relaxed mb-10"
          >
            {t("description")}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-400 text-background text-xs font-bold uppercase tracking-widest hover:bg-cyan-300 transition-colors [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))] w-full sm:w-auto"
            >
              <ChevronRight size={12} />
              {t("cta_projects")}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border text-muted-foreground text-xs uppercase tracking-widest hover:border-cyan-400/40 hover:text-foreground transition-all w-full sm:w-auto"
            >
              <Github size={12} />
              {t("cta_github")}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border text-muted-foreground text-xs uppercase tracking-widest hover:border-cyan-400/40 hover:text-foreground transition-all w-full sm:w-auto"
            >
              <Linkedin size={12} />
              {t("cta_linkedin")}
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Photo + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-8 w-full md:w-auto"
          style={{ order: -1 }}
        >
          {/* Avatar */}
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/30 to-emerald-400/10 blur-sm" />
            {/* Border ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/20" />
            {/* Image */}
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              fill
              className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
            {/* Initials fallback */}
            <div className="absolute inset-0 flex items-center justify-center font-sans font-black text-4xl text-cyan-400/30 rounded-full">
              OB
            </div>
          </div>

          {/* Stats */}
          <div className="hidden md:flex flex-col gap-5 text-right">
            {[
              { value: "5+", label: t("stat1_label") },
              { value: "15+", label: t("stat2_label") },
              { value: "10+", label: t("stat3_label") },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-sans text-2xl md:text-3xl font-black leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
