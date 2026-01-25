"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import "@/styles/NavBar.css";
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
    <div className={`nav-wrapper ${isScrolled ? "nav-scrolled" : ""}`}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`nav-pill ${isMenuOpen ? "menu-open" : ""}`}
      >
        {/* Mobile Header Row (Visible when menu is open) */}
        <div className={`mobile-header-row ${isMenuOpen ? "" : "mobile-only"}`}>
          {/* If menu is open, this row is visible inside the column layout. 
               If menu is closed, we need the toggle button to be visible, but that's handled by the 'mobile-toggle' button below.
               Actually, the 'mobile-header-row' logic in CSS handles hiding/showing based on 'menu-open'.
               But here, to replicate the pill structure when open, we might need to duplicate the logo?
               
               Let's simplify:
               When closed: Row is [Logo ... DesktopItems ... MobileToggle]
               When open: Column is [HeaderRow(Logo...Toggle) ... MobileItems]
           */}
          {/* Render Logo and Close button inside header row when open */}
          {isMenuOpen && (
            <>
              <div className="nav-logo-container" onClick={handleLogoClick}>
                <span className="nav-logo-text">TA</span>
              </div>
              <button
                className="mobile-toggle"
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
          <div className="nav-logo-container" onClick={handleLogoClick}>
            <span className="nav-logo-text">TA</span>
          </div>
        )}

        <div className="nav-divider desktop-only"></div>

        {/* Desktop Items */}
        <div className="nav-items-container">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="nav-active-pill"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="nav-link-text">{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className="nav-divider desktop-only"></div>

        {/* Theme Toggle (Desktop) */}
        <div className="desktop-only">
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Button (Visible when closed) */}
        {!isMenuOpen && (
          <button
            className="mobile-toggle"
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
              className="mobile-menu-content mobile-only"
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`mobile-nav-link ${
                    activeSection === item.href ? "active" : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="nav-mobile-footer">
                <ThemeToggle />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};
