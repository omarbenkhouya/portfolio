// FILE: src/components/layout/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/config";
import { useLocale } from "./useLocale";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const { theme, setTheme } = useTheme();
  const { locale, toggleLocale } = useLocale();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "#projects", label: t("projects") },
    { href: "#skills", label: t("skills") },
    { href: "#experience", label: t("experience") },
    { href: "#contact", label: t("contact") },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 md:px-12 bg-background/80 backdrop-blur-md border-b border-border">
        {/* Logo */}
        <a href="#" className="font-sans font-black text-base tracking-tight">
          {siteConfig.initials}
          <span className="text-cyan-400">.</span>
        </a>

        {/* Nav links — hidden on mobile */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-cyan-400 opacity-0 group-hover:opacity-100 mr-1 transition-opacity">
                  //
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: status + lang + theme + hamburger */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Available badge */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
            {t("available")}
          </div>

          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            className="hidden sm:flex items-center gap-1.5 text-xs px-2.5 py-1.5 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-cyan-400/40 transition-all"
            aria-label="Toggle language"
          >
            <Globe size={12} />
            {locale.toUpperCase()}
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-cyan-400/40 transition-all"
            aria-label="Toggle theme"
          >
            {mounted ? theme === "dark" ? <Sun size={14} /> : <Moon size={14} /> : <Moon size={14} />}
          </button>

          {/* Hamburger menu button - mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-cyan-400/40 transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-14 z-40 bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-xl uppercase tracking-widest text-muted-foreground hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* Language toggle - mobile */}
            <button
              onClick={() => {
                toggleLocale();
                closeMenu();
              }}
              className="flex items-center gap-2 text-sm px-3 py-1.5 border border-border rounded-sm text-muted-foreground hover:text-cyan-400 transition-all"
            >
              <Globe size={14} />
              {locale === "en" ? "FRANÇAIS" : "ENGLISH"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
