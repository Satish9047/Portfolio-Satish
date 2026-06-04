import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const baseClassName =
  "inline-flex items-center justify-center border border-[var(--foreground)] px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors duration-200";

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
          ? "bg-[var(--foreground)] text-[var(--background)] hover:bg-swiss-red hover:border-swiss-red"
          : "bg-transparent text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
