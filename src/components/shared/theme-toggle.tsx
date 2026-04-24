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
      className="surface inline-flex h-11 w-11 items-center justify-center rounded-full text-xl text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5"
    >
      <Icon />
    </button>
  );
}
