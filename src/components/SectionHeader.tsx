import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-ember-500" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-ember-600">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.05] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-ink-900/70 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
