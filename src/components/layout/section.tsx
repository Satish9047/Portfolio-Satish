import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="section-anchor border-t border-[var(--foreground)] pt-12 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Section Header - Spans 1 to 4 */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-swiss-red flex-shrink-0" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {eyebrow}
            </span>
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-[var(--foreground)]">
              {title}
            </h2>
            <p className="text-sm leading-relaxed text-muted max-w-sm">
              {description}
            </p>
          </div>
        </div>

        {/* Section Content - Spans 5 to 12 */}
        <div className="lg:col-span-8 lg:pl-4">
          {children}
        </div>
      </div>
    </section>
  );
}
