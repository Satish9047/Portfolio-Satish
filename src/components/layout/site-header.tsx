import { navigationItems } from "@/constants/navigation";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_82%,transparent)] backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between gap-6 py-4">
          <a href="#top" className="text-sm font-bold uppercase tracking-[0.28em]">
            Satish
          </a>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-5 md:flex">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-[var(--foreground)]"
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
