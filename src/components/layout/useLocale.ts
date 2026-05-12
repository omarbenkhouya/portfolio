// FILE: src/components/layout/useLocale.ts
"use client";

import { useState, useEffect } from "react";

export function useLocale() {
  const [locale, setLocale] = useState<"en" | "fr">("en");

  useEffect(() => {
    // Read from cookie on mount
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="));
    if (cookie) {
      const val = cookie.split("=")[1];
      if (val === "en" || val === "fr") setLocale(val);
    }
  }, []);

  const toggleLocale = () => {
    const next = locale === "en" ? "fr" : "en";
    document.cookie = `locale=${next}; path=/; max-age=31536000`;
    setLocale(next);
    // Reload to re-fetch server-side translations
    window.location.reload();
  };

  return { locale, toggleLocale };
}
