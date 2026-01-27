"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdDesktopWindows,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeDropdown = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center text-slate-500 dark:text-slate-400">
        <MdOutlineLightMode className="text-xl" />
      </div>
    );
  }

  const getIcon = () => {
    switch (theme) {
      case "dark":
        return <MdOutlineDarkMode className="text-xl" />;
      case "light":
        return <MdOutlineLightMode className="text-xl" />;
      case "system":
        return <MdDesktopWindows className="text-xl" />;
      default:
        // Fallback for when theme might be undefined initially
        try {
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return <MdOutlineDarkMode className="text-xl" />;
          }
        } catch (e) {
          // ignore
        }
        return <MdOutlineLightMode className="text-xl" />;
    }
  };

  const options = [
    { value: "light", label: "Light", icon: MdOutlineLightMode },
    { value: "dark", label: "Dark", icon: MdOutlineDarkMode },
    { value: "system", label: "System", icon: MdDesktopWindows },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50"
        aria-label="Toggle theme"
      >
        {getIcon()}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 min-w-[140px] bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 dark:bg-slate-900 dark:border-slate-800"
          >
            <div className="p-1">
              {options.map((option) => {
                const isActive = theme === option.value;
                const Icon = option.icon;

                return (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTheme(option.value);
                      setIsOpen(false);
                    }}
                    className={`flex items-center w-full gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors
                      ${
                        isActive
                          ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-50"
                      }
                    `}
                  >
                    <Icon className="text-lg" />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
