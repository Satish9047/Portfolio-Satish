import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        baseClassName,
        variant === "primary"
          ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
          : "surface text-[var(--foreground)]",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
