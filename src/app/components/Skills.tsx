"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoLogoHtml5 } from "react-icons/io";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
interface Skill {
  name: string;
  icon: string | React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: "HTML5", icon: <IoLogoHtml5 />, color: "text-orange-600" },
  { name: "CSS3", icon: <SiCss3 />, color: "text-blue-600" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
  { name: "React", icon: <SiReact />, color: "text-cyan-400" },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-black dark:text-white",
  },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500" },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    color: "text-teal-700 dark:text-teal-300",
  },
  { name: "Git", icon: <SiGit />, color: "text-orange-500" },
  { name: "GitHub", icon: <SiGithub />, color: "text-black dark:text-white" },
  { name: "Figma", icon: <SiFigma />, color: "text-purple-500" },
];

export const Skills = () => {
  return (
    <section
      className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative"
      id="skills"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="general-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-teal-100/50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4 border border-teal-200 dark:border-teal-800">
            My Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Turning "What If" into "What's Next"
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            You have the concept. I have the stack. Let's ship it together.
          </p>
        </motion.div>

        <div className="relative w-full max-w-7xl mx-auto overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex gap-8 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="relative group flex items-center gap-4 px-8 py-6 bg-white/5 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl hover:border-teal-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(20,184,166,0.2)]"
              >
                <div
                  className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                >
                  {skill.icon}
                </div>
                <span className="text-xl font-semibold text-slate-700 dark:text-slate-200">
                  {skill.name}
                </span>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Reverse direction row for variety if desired in future, strictly one row for now as per design "Infinite Marquee" usually implies one strong row or two opposing. I'll stick to one robust one first. */}
      </div>
    </section>
  );
};
