"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 z-10 pt-24 md:pt-0"
      id="hero"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full blur-[80px] opacity-60 animate-aurora bg-teal-400 w-[50vw] h-[50vw] -top-[10%] -left-[10%] z-10 dark:bg-teal-800 dark:opacity-30"></div>
        <div className="absolute rounded-full blur-[80px] opacity-60 animate-aurora bg-indigo-400 w-[40vw] h-[40vw] -bottom-[10%] -right-[5%] z-20 delay-[-5s] dark:bg-indigo-700 dark:opacity-30"></div>
        <div className="absolute rounded-full blur-[80px] opacity-40 animate-aurora bg-pink-400 w-[30vw] h-[30vw] top-[40%] left-[40%] z-30 duration-[25s] dark:bg-pink-800 dark:opacity-20"></div>
      </div>

      <div className="w-full max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          className="text-center flex flex-col items-center md:text-left md:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex py-2 px-4 bg-white/50 border border-black/5 backdrop-blur-md rounded-full text-sm font-semibold text-slate-900 mb-6 shadow-sm dark:bg-slate-800/50 dark:border-white/10 dark:text-slate-200"
          >
            Available for hire
          </motion.div>

          <h1 className="text-5xl md:text-7xl leading-[1.1] font-extrabold tracking-tight text-slate-900 mb-6 dark:text-slate-50">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-indigo-400">
              experiences
            </span>{" "}
            that matter.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-[500px] mb-10 dark:text-slate-400">
            I&apos;m Toluwalope Adegoke, a frontend developer specializing in
            building exceptional digital experiences. Currently focused on
            creating accessible, human-centered products.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className="py-3.5 px-8 bg-slate-900 text-white font-semibold rounded-xl border-none cursor-pointer transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-slate-900"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="py-3.5 px-8 bg-white/30 backdrop-blur-sm text-slate-900 font-semibold rounded-xl border border-black/10 cursor-pointer transition-all duration-200 hover:bg-white/50 dark:bg-slate-800/30 dark:text-slate-50 dark:border-white/10 dark:hover:bg-slate-800/50"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Side: Visual/Image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-[450px] md:max-w-[320px] lg:max-w-[450px] aspect-square bg-white/20 backdrop-blur-xl border border-white/30 rounded-4xl p-6 shadow-xl flex items-center justify-center overflow-hidden dark:bg-slate-800/30 dark:border-white/10 dark:shadow-2xl">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image
                src="/images/port-img.jpg"
                alt="Toluwalope Adegoke"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-[26px] h-[40px] border-2 border-slate-500 rounded-full flex justify-center pt-2 dark:border-slate-400">
          <div className="w-[4px] h-[8px] bg-slate-500 rounded-sm animate-wheel-bounce dark:bg-slate-400"></div>
        </div>
        <span className="text-xs font-medium dark:text-slate-300">Scroll</span>
      </motion.div>
    </section>
  );
};
