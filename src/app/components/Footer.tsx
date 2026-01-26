import React from "react";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="py-8 bg-linear-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 dark:text-slate-200">
      <div className="text-center mx-auto px-4 max-w-[1000px]">
        <h3 className="text-2xl font-bold mb-2">Toluwalope Adegoke</h3>
        <p className="text-base text-gray-500 dark:text-gray-400">
          Frontend Developer | Building Modern Web Experiences
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="https://github.com/ulot2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-2xl transition-colors duration-300 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
          >
            <LuGithub />
          </Link>
          <Link
            href="mailto:tolu.nuell@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-2xl transition-colors duration-300 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
          >
            <MdOutlineEmail />
          </Link>
          <Link
            href="https://www.linkedin.com/in/toluwalope-adegoke-b441b9380"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-2xl transition-colors duration-300 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
          >
            <LuLinkedin />
          </Link>
          <Link
            href="https://x.com/Tolu_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-2xl transition-colors duration-300 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
          >
            <FaXTwitter />
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Toluwalope Adegoke. All rights
          reserved.
        </p>
      </div>
    </section>
  );
};
