// FILE: src/components/layout/Footer.tsx
import { siteConfig } from "@/data/config";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-4 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground font-mono">
      <span>© 2026 {siteConfig.name}</span>
      <span className="flex items-center gap-1.5">
        {siteConfig.location}
        <span className="text-emerald-400">·</span>
        Available Jul 2026
      </span>
    </footer>
  );
}
