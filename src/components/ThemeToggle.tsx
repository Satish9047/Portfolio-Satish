"use client";
import React from "react";
import { useGlobalState } from "@/zustand/store";
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";

const ThemeToggleBtn = () => {
  const { isDarkMode, toggleTheme } = useGlobalState();

  return (
    <div className="flex justify-end">
      <button onClick={toggleTheme} name="theme-toggle">
        {isDarkMode ? (
          <MdOutlineWbSunny className="w-16 h-16 p-4 bg-gray-200 rounded-lg shadow-md" />
        ) : (
          <MdOutlineNightlight className="w-16 h-16 p-4 bg-gray-200 rounded-lg shadow-md" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleBtn;
