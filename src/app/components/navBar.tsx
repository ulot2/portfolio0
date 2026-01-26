"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "../ui/ThemeToggle";

const navItems = [
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" },
];

export const NavBar = () => {
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
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

  return (
    <div
      className={`fixed top-6 left-0 right-0 flex justify-center z-1000 pointer-events-none px-2 transition-all duration-300 md:top-6 md:px-4 ${isScrolled ? "top-4" : ""}`}
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`pointer-events-auto flex items-center gap-2 py-1.5 px-2 bg-white/65 backdrop-blur-xl border border-white/30 rounded-full shadow-sm transition-all duration-400 min-w-min md:gap-4 md:py-2 md:px-3 dark:bg-slate-900/65 dark:border-white/10 dark:shadow-md ${isScrolled ? "bg-white/85! shadow-lg dark:bg-slate-900/85!" : ""}`}
      >
        <div
          className="flex items-center justify-center px-2 cursor-pointer"
          onClick={handleLogoClick}
        >
          <span className="font-bold text-base tracking-tight text-slate-800 md:text-lg dark:text-slate-50">
            TA
          </span>
        </div>

        <div className="w-px h-6 bg-black/10 mx-1 block dark:bg-white/10"></div>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`relative py-2 px-2 text-xs font-medium text-slate-500 bg-transparent border-none cursor-pointer rounded-full transition-colors z-10 hover:text-slate-900 md:px-4 md:text-sm dark:text-slate-400 dark:hover:text-slate-50 ${isActive ? "text-slate-900 dark:text-slate-50" : ""}`}
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

        <div className="w-px h-6 bg-black/10 mx-1 block dark:bg-white/10"></div>

        <div className="block">
          <ThemeToggle />
        </div>
      </motion.nav>
    </div>
  );
};
