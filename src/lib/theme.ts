export const THEME_STORAGE_KEY = "portfolio-theme";
export const DARK_THEME_CLASS = "dark";
export const THEME_MODES = ["light", "dark", "system"] as const;

export type ThemeMode = (typeof THEME_MODES)[number];

export function getSystemTheme() {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return "light";
}

export function resolveTheme(
  theme: ThemeMode,
  systemTheme: "light" | "dark",
): "light" | "dark" {
  return theme === "system" ? systemTheme : theme;
}

export const themeScript = `
(() => {
  const storageKey = "${THEME_STORAGE_KEY}";
  const darkClass = "${DARK_THEME_CLASS}";
  const isValidTheme = (value) => ["light", "dark", "system"].includes(value);
  const savedTheme = localStorage.getItem(storageKey);
  const theme = isValidTheme(savedTheme) ? savedTheme : "system";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const root = document.documentElement;

  root.dataset.theme = theme;
  root.classList.toggle(darkClass, resolvedTheme === "dark");
})();
`;
