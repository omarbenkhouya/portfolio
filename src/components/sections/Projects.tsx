// FILE: src/components/sections/Projects.tsx
"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/config";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectDemo } from "@/components/ui/ProjectDemo";

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as "en" | "fr";

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative border-t border-border px-4 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader num="01" title={t("title")} />

        <div className="space-y-2">
          {/* ── FEATURED CARD ── */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative border border-border bg-card overflow-hidden group hover:border-cyan-400/30 transition-colors"
              style={{ "--card-accent": featured.accentColor } as React.CSSProperties}
            >
              {/* Top accent line */}
              <div
                className="h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: featured.accentColor }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
                {/* Left: info */}
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest mb-4" style={{ color: featured.accentColor }}>
                    <span className="w-4 h-px" style={{ background: featured.accentColor }} />
                    {t("featured_tag")}
                  </div>
                  <h3 className="font-sans text-xl font-bold mb-3 leading-snug">
                    {featured.title[locale]}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {featured.description[locale]}
                  </p>

                  {/* Metrics */}
                  {featured.metrics.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-5 p-4 bg-muted/50 border border-border">
                      {featured.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="font-sans text-lg font-bold" style={{ color: featured.accentColor }}>
                            {m.value}
                          </div>
                          <div className="text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <TechStack tech={featured.tech} accentColor={featured.accentColor} />

                  {/* Links */}
                  <ProjectLinks project={featured} t={t} />
                </div>

                {/* Right: image + demo */}
                <ProjectMedia project={featured} t={t} />
              </div>

              {/* Watermark number */}
              <span className="absolute bottom-4 right-6 font-sans text-6xl font-black text-border/30 pointer-events-none select-none">
                01
              </span>
            </motion.div>
          )}

          {/* ── GRID: remaining projects ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
            {rest.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative border border-border bg-card overflow-hidden group hover:border-zinc-600/50 hover:-translate-y-1 transition-all"
              >
                <div
                  className="h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: project.accentColor }}
                />
                <div className="p-6">
                  {/* Tag */}
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest mb-3" style={{ color: project.accentColor }}>
                    <span className="w-3 h-px" style={{ background: project.accentColor }} />
                    {t(project.tag as any)}
                  </div>

                  {/* Image thumbnail */}
                  <ProjectMedia project={project} t={t} compact />

                  <h3 className="font-sans text-base font-bold mb-2 leading-snug mt-4">
                    {project.title[locale]}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {project.description[locale]}
                  </p>

                  <TechStack tech={project.tech} accentColor={project.accentColor} />
                  <ProjectLinks project={project} t={t} />
                </div>

                <span className="absolute bottom-3 right-4 font-sans text-5xl font-black text-border/20 pointer-events-none select-none">
                  {String(i + 2).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Sub-components ──────────────────────────────

function TechStack({ tech, accentColor }: { tech: string[]; accentColor: string }) {
  return (
    <div className="flex flex-wrap gap-1.5 mb-5">
      {tech.map((t) => (
        <span
          key={t}
          className="text-[10px] px-2 py-0.5 border border-border bg-muted/30 text-muted-foreground group-hover:border-zinc-600 transition-colors break-words"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project, t }: { project: typeof projects[0]; t: any }) {
  return (
    <div className="flex gap-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={11} /> {t("view_github")}
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink size={11} /> {t("view_demo")}
        </a>
      )}
    </div>
  );
}

function ProjectMedia({
  project,
  t,
  compact = false,
}: {
  project: typeof projects[0];
  t: any;
  compact?: boolean;
}) {
  const hasImage = !!project.image;
  const hasDemo = !!project.demo;
  const hasAutoLoopDemo = (project.id === "phone-store" || project.id === "maroc-guide") && hasDemo;
  const hasAutoLoopFrames = project.id === "robotic-arm" || project.id === "rag-system";
  const isRagFeatured = project.id === "rag-system" && !compact;
  const roboticArmFrames = ["/rts1.png", "/rts2.png", "/rts3.png", "/rts4.png", "/rts5.png"];
  const ragSystemFrames = [
    "/screenshot_full_interface.png",
    "/screenshot_sidebar.png",
    "/screenshot_sidebar_debug.png",
    "/screenshot_sources.png",
  ];
  const ragSystemFrameDurations = [4500, 3000, 3000, 3000];
  const autoLoopFrames = project.id === "rag-system" ? ragSystemFrames : roboticArmFrames;

  if (!hasImage && !hasDemo) return null;

  return (
    <div
      className={cn(
        "relative rounded-sm overflow-hidden bg-muted/20 border border-border",
        compact ? "h-32" : "h-52",
        isRagFeatured && "md:h-full md:min-h-[24rem]"
      )}
    >
      {hasAutoLoopDemo && (
        <video
          src={project.demo!}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}

      {/* ↓ PROJECT IMAGE — place in /public/images/projects/<id>.png */}
      {hasAutoLoopFrames ? (
        <LoopingImageSequence
          frames={autoLoopFrames}
          alt={`${project.id} preview`}
          intervalMs={project.id === "rag-system" ? 1800 : 1200}
          frameDurationsMs={project.id === "rag-system" ? ragSystemFrameDurations : undefined}
          fitMode={project.id === "rag-system" ? "contain" : "cover"}
        />
      ) : hasImage && !hasAutoLoopDemo && (
        <Image
          src={project.image}
          alt={`${project.id} screenshot`}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}

      {/* Video demo overlay button */}
      {hasDemo && !hasAutoLoopDemo && !hasAutoLoopFrames && (
        <ProjectDemo src={project.demo!} compact={compact} />
      )}

      {/* Placeholder shown when no image */}
      {!hasImage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-muted-foreground/40 uppercase tracking-widest">
            Screenshot
          </span>
        </div>
      )}
    </div>
  );
}

function LoopingImageSequence({
  frames,
  alt,
  intervalMs = 1200,
  frameDurationsMs,
  fitMode = "cover",
}: {
  frames: string[];
  alt: string;
  intervalMs?: number;
  frameDurationsMs?: number[];
  fitMode?: "cover" | "contain";
}) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (frames.length <= 1) return;

    const nextDelay = frameDurationsMs?.[frameIndex] ?? intervalMs;
    const timeoutId = window.setTimeout(() => {
      setFrameIndex((currentIndex) => (currentIndex + 1) % frames.length);
    }, nextDelay);

    return () => window.clearTimeout(timeoutId);
  }, [frameIndex, frames.length, frameDurationsMs, intervalMs]);

  return (
    <Image
      key={frameIndex}
      src={frames[frameIndex]}
      alt={alt}
      fill
      className={cn(
        fitMode === "contain" ? "object-contain" : "object-cover",
        "opacity-90 group-hover:opacity-100 transition-opacity duration-300"
      )}
      unoptimized
    />
  );
}
