"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DARK_THEME_CLASS,
  type ThemeMode,
  THEME_MODES,
  THEME_STORAGE_KEY,
  getSystemTheme,
  resolveTheme,
  themeScript,
} from "@/lib/theme";

interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: ThemeMode) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  const nextResolvedTheme = resolveTheme(theme, getSystemTheme());

  root.classList.toggle(DARK_THEME_CLASS, nextResolvedTheme === "dark");
  root.dataset.theme = theme;
}

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme = THEME_MODES.includes(savedTheme as ThemeMode)
      ? (savedTheme as ThemeMode)
      : "system";

    setThemeState(initialTheme);
    const nextResolvedTheme = resolveTheme(initialTheme, getSystemTheme());
    setResolvedTheme(nextResolvedTheme);
    applyTheme(initialTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const currentTheme =
        (document.documentElement.dataset.theme as ThemeMode | undefined) ?? initialTheme;

      if (currentTheme !== "system") {
        return;
      }

      const nextResolved = getSystemTheme();
      setResolvedTheme(nextResolved);
      document.documentElement.classList.toggle(DARK_THEME_CLASS, nextResolved === "dark");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const setTheme = useCallback((nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
    const nextResolvedTheme = resolveTheme(nextTheme, getSystemTheme());
    setResolvedTheme(nextResolvedTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  }, []);

  const cycleTheme = useCallback(() => {
    const currentIndex = THEME_MODES.indexOf(theme);
    const nextTheme = THEME_MODES[(currentIndex + 1) % THEME_MODES.length];
    setTheme(nextTheme);
  }, [theme, setTheme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      cycleTheme,
    }),
    [cycleTheme, resolvedTheme, setTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
