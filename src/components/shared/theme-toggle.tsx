"use client";

import {
  MdOutlineDesktopWindows,
  MdOutlineNightlight,
  MdOutlineWbSunny,
} from "react-icons/md";
import { useTheme } from "@/components/shared/theme-provider";

const themeLabelMap = {
  light: "light",
  dark: "dark",
  system: "system",
} as const;

export function ThemeToggle() {
  const { theme, cycleTheme } = useTheme();

  const Icon =
    theme === "dark"
      ? MdOutlineNightlight
      : theme === "light"
        ? MdOutlineWbSunny
        : MdOutlineDesktopWindows;

  return (
    <button
      type="button"
      aria-label={`Theme: ${themeLabelMap[theme]}. Click to cycle theme.`}
      title={`Theme: ${themeLabelMap[theme]}`}
      onClick={cycleTheme}
      className="border border-[var(--foreground)] bg-[var(--background)] inline-flex h-10 w-10 items-center justify-center text-base text-[var(--foreground)] hover:bg-swiss-red hover:border-swiss-red hover:text-white transition-colors duration-150"
    >
      <Icon />
    </button>
  );
}
