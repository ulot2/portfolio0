"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeDropdown } from "./ThemeDropdown";

const navItems = [
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" },
];

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`fixed top-6 left-0 right-0 flex justify-center z-1000 pointer-events-none px-2 transition-all duration-300 md:top-6 md:px-4 ${isScrolled ? "top-4" : ""}`}
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`pointer-events-auto flex items-center gap-2 py-2 px-3 bg-white/70 backdrop-blur-md border border-white/40 rounded-full shadow-sm transition-all duration-400 min-w-min md:gap-4 md:px-4 dark:bg-zinc-900/70 dark:border-white/10 dark:shadow-md ${isScrolled ? "bg-white/90! shadow-md dark:bg-zinc-900/90!" : ""}`}
      >
        <div
          className="flex items-center justify-center px-1 cursor-pointer"
          onClick={handleLogoClick}
        >
          <span className="font-display font-bold text-lg tracking-tight text-primary md:text-xl transform transition-transform hover:scale-105 active:scale-95">
            TA
          </span>
        </div>

        <div className="w-px h-5 bg-secondary/10 mx-2 block"></div>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`relative py-1.5 px-3 text-sm font-sans font-medium text-secondary/80 bg-transparent border-none cursor-pointer rounded-full transition-colors z-10 hover:text-primary md:px-4 ${isActive ? "text-primary dark:text-zinc-100" : ""}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-white shadow-sm rounded-full -z-10 dark:bg-white/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className="w-px h-5 bg-secondary/10 mx-2 block"></div>

        <div className="block">
          <ThemeDropdown />
        </div>
      </motion.nav>
    </div>
  );
};
