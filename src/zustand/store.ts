import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useGlobalState = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleTheme: () =>
        set((state) => ({
          isDarkMode: !state.isDarkMode,
        })),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
