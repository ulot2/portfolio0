"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-background overflow-hidden"
      id="about"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-cta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cta" />
            <span className="text-sm font-sans font-medium text-secondary">
              Get to know me
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-primary tracking-tight">
            Beyond the <span className="text-cta">Code</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Bio Card - Spans 8 cols */}
          <motion.div
            className="md:col-span-8 bg-white dark:bg-zinc-900 border border-secondary/10 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cta/10 transition-colors duration-500" />

            <h3 className="text-2xl font-bold font-display text-primary mb-6 relative z-10">
              My Journey
            </h3>
            <div className="space-y-6 text-lg text-secondary font-sans leading-relaxed relative z-10">
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
                usability.
              </p>
            </div>
          </motion.div>

          {/* Photo Card - Spans 4 cols */}
          <motion.div
            className="md:col-span-4 h-[400px] md:h-auto relative rounded-3xl overflow-hidden border border-secondary/10 shadow-sm group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/port-img.jpg"
              alt="Toluwalope Adegoke"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-20 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 text-white z-10">
              <p className="text-sm font-sans font-medium opacity-80">
                Based in
              </p>
              <p className="text-xl font-display font-bold">Lagos, Nigeria</p>
            </div>
          </motion.div>

          {/* Stats/Tech Stack - Spans 5 cols */}
          <motion.div
            className="md:col-span-5 bg-zinc-900 relative overflow-hidden text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-700" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold font-display mb-2 text-white">
                Tech Stack
              </h3>
              <p className="text-sm font-sans text-zinc-400 mb-8">
                The tools that power my work
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 relative z-10">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Framer Motion",
              ].map((tech, i) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10 hover:border-cta/50 hover:text-white hover:-translate-y-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Personal/Hobbies - Spans 7 cols */}
          {/* Focus Areas - Spans 7 cols */}
          <motion.div
            className="md:col-span-7 bg-white dark:bg-zinc-900 border border-secondary/10 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-center relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

            <h3 className="text-xl font-bold font-display text-primary mb-6">
              What I Bring to the Table
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  label: "Design",
                  desc: "Pixel-perfect interfaces with a focus on usability.",
                  color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
                },
                {
                  label: "Engineering",
                  desc: "Clean, scalable code built for performance.",
                  color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
                },
                {
                  label: "Collaboration",
                  desc: "Clear communication and teamwork driven.",
                  color:
                    "bg-purple-500/10 text-purple-600 dark:text-purple-400",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div
                    className={`self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${item.color}`}
                  >
                    {item.label}
                  </div>
                  <p className="text-sm text-secondary font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
