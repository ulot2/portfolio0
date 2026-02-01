"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse move effect for background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const maskImage = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background z-10"
      id="hero"
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Interactive Hover Reveal */}
      <motion.div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#2563EB10_1px,transparent_1px),linear-gradient(to_bottom,#2563EB10_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      />

      <div className="w-full max-w-[1400px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content - Typography Focused */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
          style={{ y: y1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 py-2 px-4 bg-white border border-secondary/10 rounded-full text-sm font-sans font-medium text-secondary mb-8 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-secondary dark:text-zinc-900">
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] font-display font-bold tracking-tight text-primary mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
          >
            Creative <br />
            <span className="text-cta relative inline-block">
              Developer
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-cta/20"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-secondary leading-relaxed max-w-[600px] mb-12 font-sans font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Crafting motion-driven digital experiences that combine aesthetic
            excellence with technical precision.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-5 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 bg-primary text-white font-sans font-medium rounded-full overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">View Selected Work</span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-transparent border border-secondary/20 text-primary font-sans font-medium rounded-full cursor-pointer transition-all hover:bg-secondary/5 hover:border-secondary/40 active:scale-95"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Visual/Abstract */}
        <motion.div
          className="relative h-[400px] lg:h-[500px] flex items-center justify-center perspective-[2000px] mt-8 lg:mt-0"
          style={{ y: y2, opacity }}
        >
          {/* Abstract Glow */}
          <div className="absolute w-[600px] h-[600px] bg-cta/10 rounded-full blur-3xl animate-pulse" />

          {/* Main Composition Container */}
          <motion.div
            className="relative z-10 w-full max-w-lg aspect-square"
            initial={{ opacity: 0, rotateX: 20, rotateY: 20 }}
            animate={{ opacity: 1, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            style={{
              rotateX: useTransform(mouseY, [0, 500], [5, -5]),
              rotateY: useTransform(mouseX, [0, 500], [-5, 5]),
            }}
          >
            {/* Code Terminal */}
            <motion.div
              className="absolute inset-4 bg-[#1e1e1e] rounded-xl shadow-2xl border border-white/5 overflow-hidden flex flex-col"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Terminal Header */}
              <div className="h-8 bg-[#2d2d2d] flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <div className="ml-4 text-[10px] text-gray-500 font-mono">
                  dev — zsh — 80x24
                </div>
              </div>
              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-hidden">
                <div className="flex">
                  <span className="text-green-400 mr-2">➜</span>
                  <span className="text-blue-400 mr-2">~</span>
                  <span className="text-gray-400">
                    pnpm create next-app@latest my-app --yes
                  </span>
                </div>
                <div className="text-gray-500 mb-4">
                  Creating a new Next.js app...
                </div>

                <div className="flex">
                  <span className="text-green-400 mr-2">➜</span>
                  <span className="text-blue-400 mr-2">~</span>
                  <span className="text-gray-400">cd my-app</span>
                </div>

                <div className="flex mb-4">
                  <span className="text-green-400 mr-2">➜</span>
                  <span className="text-blue-400 mr-2">my-app</span>
                  <span className="text-yellow-400">git:(main)</span>
                  <span className="text-gray-400 ml-2">pnpm dev</span>
                </div>

                <div className="text-green-500">
                  <div>Ready on http://localhost:3000</div>
                </div>
                <div className="mt-4 border-l-2 border-cta pl-3 text-white/90">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-300">Developer</span> ={" "}
                  <span className="text-yellow-300">{"{"}</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">name</span>:{" "}
                  <span className="text-green-300">"Toluwalope"</span>,<br />
                  &nbsp;&nbsp;<span className="text-blue-300">skills</span>: [
                  <span className="text-green-300">"React"</span>,{" "}
                  <span className="text-green-300">"Motion"</span>],
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">
                    passion
                  </span>:{" "}
                  <span className="text-green-300">"Building Experiences"</span>
                  <br />
                  <span className="text-yellow-300">{"}"}</span>;
                </div>
              </div>
            </motion.div>

            {/* Floating Widget 1: Color Palette */}
            <motion.div
              className="absolute -right-8 top-20 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] border border-white/20 backdrop-blur-md w-40 z-20"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{ y: useTransform(scrollY, [0, 500], [0, -40]) }}
            >
              <div className="flex gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-cta" />
                <div className="w-6 h-6 rounded-full bg-purple-500" />
                <div className="w-6 h-6 rounded-full bg-teal-400" />
              </div>
              <div className="h-2 w-20 bg-gray-200 dark:bg-gray-700 rounded-full" />
              <div className="h-2 w-12 bg-gray-200 dark:bg-gray-700 rounded-full mt-2" />
            </motion.div>

            {/* Floating Widget 2: Success Notification */}
            <motion.div
              className="absolute -left-12 bottom-32 bg-white/90 dark:bg-zinc-900/90 py-3 px-4 rounded-lg shadow-xl border border-white/10 backdrop-blur-lg flex items-center gap-3 z-30"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              style={{ y: useTransform(scrollY, [0, 500], [0, 60]) }}
            >
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                  Deployment Successful
                </div>
                <div className="text-[10px] text-gray-500">Just now</div>
              </div>
            </motion.div>

            {/* Floating Shape */}
            <motion.div
              className="absolute -bottom-10 -right-4 w-24 h-24 bg-linear-to-tr from-cta to-purple-600 rounded-full opacity-80 blur-xl z-0"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
