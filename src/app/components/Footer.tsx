import React from "react";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 dark:bg-slate-950 dark:border-slate-900 py-12">
      <div className="general-container flex flex-col items-center">
        {/* Brand Section */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Toluwalope<span className="text-teal-600">.</span>
        </Link>

        <p className="text-slate-500 dark:text-slate-400 text-center max-w-lg leading-relaxed mb-8">
          Crafting digital experiences with a focus on performance,
          accessibility, and user-centric design.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mb-12">
          <a
            href="https://github.com/ulot2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors duration-300 text-2xl dark:hover:text-white"
            title="GitHub"
          >
            <LuGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/toluwalope-adegoke-b441b9380"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600 transition-colors duration-300 text-2xl"
            title="LinkedIn"
          >
            <LuLinkedin />
          </a>
          <a
            href="https://x.com/Tolu_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-black transition-colors duration-300 text-2xl dark:hover:text-white"
            title="X (Twitter)"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 dark:text-slate-500">
          <p className="text-center md:text-left">
            &copy; {currentYear} Toluwalope Adegoke. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
