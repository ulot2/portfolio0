import React from "react";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-secondary/10 py-12">
      <div className="general-container flex flex-col items-center w-full max-w-7xl mx-auto px-6">
        {/* Brand Section */}
        <Link
          href="/"
          className="text-2xl font-bold font-display tracking-tight text-primary mb-4"
        >
          Toluwalope<span className="text-cta">.</span>
        </Link>

        <p className="text-secondary font-sans text-center max-w-lg leading-relaxed mb-8">
          Crafting digital experiences with a focus on performance,
          accessibility, and user-centric design.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mb-12">
          <a
            href="https://github.com/ulot2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-300 text-2xl hover:-translate-y-1 transform"
            title="GitHub"
          >
            <LuGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/toluwalope-adegoke-b441b9380"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-cta transition-colors duration-300 text-2xl hover:-translate-y-1 transform"
            title="LinkedIn"
          >
            <LuLinkedin />
          </a>
          <a
            href="https://x.com/Tolu_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-300 text-2xl hover:-translate-y-1 transform"
            title="X (Twitter)"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary/60 font-sans">
          <p className="text-center md:text-left">
            &copy; {currentYear} Toluwalope Adegoke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
