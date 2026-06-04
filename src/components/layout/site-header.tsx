import { navigationItems } from "@/constants/navigation";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--foreground)] bg-[var(--background)]">
      <Container>
        <div className="flex items-center justify-between py-5">
          <a 
            href="#top" 
            className="text-sm font-black uppercase tracking-tighter text-[var(--foreground)] hover:text-swiss-red transition-colors"
          >
            Satish Prajapati <span className="text-swiss-red">●</span>
          </a>
          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-8 md:flex">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[10px] font-bold uppercase tracking-widest text-[var(--foreground)] opacity-60 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
