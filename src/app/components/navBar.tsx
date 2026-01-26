"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { ThemeToggle } from "../ui/ThemeToggle";

const navItems = [
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" },
];

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 100; // Slightly more offset for floating nav
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
    setActiveSection("");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      const sections = navItems.map((item) => item.href);
      let currentSection = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold for better detection
          const threshold = window.innerHeight * 0.4;

          if (rect.top <= threshold && rect.bottom >= threshold) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (scrollPosition < 50) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`fixed top-6 left-0 right-0 flex justify-center z-1000 pointer-events-none px-4 transition-all duration-300 md:top-6 ${isScrolled ? "top-4" : ""}`}
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`pointer-events-auto flex items-center gap-4 py-2 px-3 bg-white/65 backdrop-blur-xl border border-white/30 rounded-full shadow-sm transition-all duration-400 min-w-min dark:bg-slate-900/65 dark:border-white/10 dark:shadow-md ${
          isMenuOpen ? "flex-col items-stretch rounded-3xl gap-0 p-2" : ""
        } ${isScrolled ? "bg-white/85! shadow-lg dark:bg-slate-900/85!" : ""}`}
      >
        {/* Mobile Header Row (Visible when menu is open) */}
        <div
          className={`flex justify-between items-center w-full p-2 mb-2 border-b border-black/5 dark:border-white/5 ${isMenuOpen ? "flex" : "hidden md:hidden"}`}
        >
          {isMenuOpen && (
            <>
              <div
                className="flex items-center justify-center px-2 cursor-pointer"
                onClick={handleLogoClick}
              >
                <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-slate-50">
                  TA
                </span>
              </div>
              <button
                className="p-2 bg-transparent border-none cursor-pointer text-slate-500 rounded-full transition-colors hover:bg-black/5 dark:text-slate-400 dark:hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <IoCloseOutline size={24} />
              </button>
            </>
          )}
        </div>

        {/* Regular Logo (Visible when closed) */}
        {!isMenuOpen && (
          <div
            className="flex items-center justify-center px-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-slate-50">
              TA
            </span>
          </div>
        )}

        <div className="w-px h-6 bg-black/10 mx-1 hidden md:block dark:bg-white/10"></div>

        {/* Desktop Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`relative py-2 px-4 text-sm font-medium text-slate-500 bg-transparent border-none cursor-pointer rounded-full transition-colors z-10 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 ${isActive ? "text-slate-900 dark:text-slate-50" : ""}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm dark:bg-slate-800 dark:shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className="w-px h-6 bg-black/10 mx-1 hidden md:block dark:bg-white/10"></div>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Button (Visible when closed) */}
        {!isMenuOpen && (
          <button
            className="md:hidden flex items-center justify-center p-2 bg-transparent border-none cursor-pointer text-slate-500 rounded-full transition-colors hover:bg-black/5 dark:text-slate-400 dark:hover:bg-white/5"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <IoIosMenu size={24} />
          </button>
        )}

        {/* Mobile Menu Content (Expanded Pill) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col gap-1 p-2 w-full md:hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`flex items-center py-3 px-4 rounded-xl text-base font-medium text-slate-500 no-underline bg-transparent border-none cursor-pointer text-left transition-all active:bg-black/5 active:scale-[0.98] dark:text-slate-400 dark:active:bg-white/5 ${
                    activeSection === item.href
                      ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-slate-50 dark:shadow-md"
                      : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex justify-center pt-2 border-t border-black/5 mt-2 dark:border-white/5">
                <ThemeToggle />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};
