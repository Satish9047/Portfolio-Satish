"use client";
import { useGlobalState } from "@/zustand/store";
import React from "react";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useGlobalState();

  return (
    <div>
      <button onClick={toggleTheme}>{isDarkMode ? "light" : "dark"}</button>
    </div>
  );
};

export default ThemeToggle;
