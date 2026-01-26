"use client";
import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div
      onClick={handleToggleTheme}
      className="static text-2xl text-black border-none rounded-lg cursor-pointer dark:text-white md:static md:m-0 z-9999 p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
    >
      {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </div>
  );
};
