"use client";
import React, { useEffect } from "react";
import { useGlobalState } from "@/zustand/store";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useGlobalState();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <div className={`${isDarkMode ? "dark" : "light"}`}>{children}</div>;
};

export default Wrapper;
