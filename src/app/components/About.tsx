"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section
      className="general-box bg-slate-50 min-h-screen dark:bg-slate-950"
      id="about"
    >
      <div className="general-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2 dark:text-slate-50">
            About Me
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto] gap-6 max-w-[1000px] mx-auto">
          {/* Main Bio Card */}
          <motion.div
            className="col-span-1 md:col-span-2 md:row-span-2 md:justify-center bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800/40 dark:border-white/5 dark:shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4 dark:text-slate-100">
              My Journey
            </h3>
            <div className="text-slate-600 space-y-4 leading-relaxed text-[1.05rem] dark:text-slate-400">
              <p>
                Hello! I&apos;m Toluwalope, a passionate frontend developer with
                over 2 years of experience building digital products. My journey
                started with a curiosity about how websites work, which quickly
                turned into an obsession with creating seamless user
                experiences.
              </p>
              <p>
                I specialize in translating design concepts into functional,
                responsive, and accessible code. Whether it&apos;s a complex
                dashboard or a creative portfolio, I focus on performance and
                usability. When I&apos;m not coding, you can find me exploring
                new tech trends, playing video games, or enjoying a good
                football match.
              </p>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            className="col-span-1 md:col-span-1 md:row-span-1 aspect-square relative overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-0 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800/40 dark:border-white/5 dark:shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full group">
              <Image
                src="/images/port-img.jpg"
                alt="About Image"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Stats/Tags Card */}
          <motion.div
            className="col-span-1 md:col-span-1 md:row-span-1 bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800/40 dark:border-white/5 dark:shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4 dark:text-slate-100">
              Quick Highlights
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Frontend Dev",
                "UI/UX Enthusiast",
                "Problem Solver",
                "Team Player",
                "React & Next.js",
                "Clean Code",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white/50 border border-black/5 rounded-full text-xs font-semibold text-teal-700 dark:bg-slate-900/40 dark:border-white/10 dark:text-teal-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
