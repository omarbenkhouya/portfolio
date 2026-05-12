// FILE: src/app/page.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Subtle grid background — visible in dark mode */}
      <div className="fixed inset-0 bg-grid opacity-[0.06] dark:opacity-[0.15] pointer-events-none z-0" />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
