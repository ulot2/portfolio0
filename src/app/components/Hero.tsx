"use client";
import React from "react";
import { motion } from "framer-motion";

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
      {/* Grid Background similar to Skills section */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="w-full max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          className="text-center flex flex-col items-center md:text-left md:items-start z-10"
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

        {/* Right Side: Abstract Geometric Visual */}
        <div className="relative flex justify-center items-center h-[400px] md:h-auto">
          {/* Abstract Shape 1: Main Gradient Blob */}
          <motion.div
            className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-linear-to-tr from-teal-400/30 to-blue-500/30 rounded-full blur-3xl dark:from-teal-500/20 dark:to-indigo-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Abstract Shape 2: Glassmorphism Card */}
          <motion.div
            className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl flex items-center justify-center p-6 rotate-12 dark:bg-slate-800/20 dark:border-white/10"
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 12 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              rotate: 15,
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-full h-full border border-white/30 rounded-2xl flex items-center justify-center dark:border-white/10">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-teal-400 to-blue-600 opacity-80" />
            </div>
          </motion.div>

          {/* Abstract Shape 3: Floating Circle Small */}
          <motion.div
            className="absolute -top-10 right-10 md:top-0 md:right-0 w-24 h-24 bg-blue-400/20 rounded-full blur-xl backdrop-blur-sm z-0"
            animate={{
              y: [-20, 20, -20],
              x: [10, -10, 10],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Abstract Shape 4: Floating Pill */}
          <motion.div
            className="absolute -bottom-5 left-5 md:bottom-10 md:left-10 w-32 h-12 bg-teal-400/20 rounded-full blur-lg backdrop-blur-sm border border-white/10 z-20"
            animate={{
              y: [15, -15, 15],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
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
