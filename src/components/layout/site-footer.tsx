import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Built with Next.js, Tailwind CSS, and a feature-first architecture.</p>
          <p>Designed for fast loading, minimal CLS, and maintainable growth.</p>
        </div>
      </Container>
    </footer>
  );
}
