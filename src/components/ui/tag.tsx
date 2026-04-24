import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--surface)_92%,white)] px-3 py-1 text-sm font-medium text-[var(--foreground)]">
      {children}
    </span>
  );
}
