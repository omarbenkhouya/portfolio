// FILE: src/components/ui/SectionHeader.tsx
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  num: string;
  title: string;
  className?: string;
}

export function SectionHeader({ num, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-baseline gap-4 mb-14", className)}>
      <span className="text-[11px] text-cyan-400 tracking-[0.15em] uppercase font-mono">
        {num}
      </span>
      <h2 className="font-sans text-2xl md:text-3xl font-black tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border ml-4" />
    </div>
  );
}
