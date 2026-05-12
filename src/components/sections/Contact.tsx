// FILE: src/components/sections/Contact.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";

const contactLinks = [
  {
    icon: Mail,
    labelKey: "email_label" as const,
    value: "omar.benkhouya.official@gmail.com",
    href: `mailto:omar.benkhouya.official@gmail.com`,
  },
  {
    icon: Github,
    labelKey: "github_label" as const,
    value: "github.com/omarbenkhouya",
    href: siteConfig.github,
    external: true,
  },
  {
    icon: Linkedin,
    labelKey: "linkedin_label" as const,
    value: "linkedin.com/in/omar-benkhouya",
    href: siteConfig.linkedin,
    external: true,
  },
  {
    icon: Phone,
    labelKey: "phone_label" as const,
    value: "+212 613 309 792",
    href: `tel:${siteConfig.phone}`,
  },
];

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="relative border-t border-border px-4 md:px-12 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Availability badge */}
          <div className="flex items-center gap-2 text-xs text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
            {t("availability")}
          </div>

          <h2 className="font-sans text-2xl md:text-4xl lg:text-5xl font-black leading-none tracking-tight mb-4">
            {t("title")}
            <br />
            <span className="text-cyan-400">{t("title_accent")}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Right: contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-2"
        >
          {contactLinks.map(({ icon: Icon, labelKey, value, href, external }) => (
            <a
              key={labelKey}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-5 border border-border bg-card hover:border-cyan-400/40 hover:bg-muted/30 transition-all group gap-3 sm:gap-0"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="w-8 h-8 flex items-center justify-center border border-border bg-muted/30 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-background group-hover:border-cyan-400 transition-all flex-shrink-0">
                  <Icon size={14} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                    {t(labelKey)}
                  </p>
                  <p className={`text-sm font-mono truncate ${labelKey === "email_label" ? "sm:truncate" : "break-words"}`}>{value}</p>
                </div>
              </div>
              <ArrowRight
                size={14}
                className="text-muted-foreground group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
