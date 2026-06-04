import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--foreground)] py-16 bg-[var(--background)]">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Design System</span>
            <p className="text-sm font-semibold uppercase tracking-tight text-[var(--foreground)]">International Typographic Style</p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Tech Stack</span>
            <p className="text-sm font-semibold uppercase tracking-tight text-[var(--foreground)]">Next.js, Tailwind & GSAP</p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Status</span>
            <p className="text-sm font-semibold uppercase tracking-tight text-[var(--foreground)]">Open for Collaborations</p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Copyright</span>
            <p className="text-sm font-semibold uppercase tracking-tight text-[var(--foreground)]">© {new Date().getFullYear()} Satish Prajapati</p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-[var(--foreground)] leading-none select-none">
            S.PRAJAPATI
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 md:text-right max-w-xs">
            Precision engineered frontend experiences & premium web typography.
          </p>
        </div>
      </Container>
    </footer>
  );
}
