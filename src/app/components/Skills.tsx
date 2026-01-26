"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoLogoHtml5 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

interface Skill {
  name: string;
  icon: string | React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: "HTML5", icon: <IoLogoHtml5 />, color: "text-orange-600" },
  { name: "CSS3", icon: "🎨", color: "text-blue-600" },
  { name: "JavaScript", icon: "⚡", color: "text-yellow-600" },
  { name: "React", icon: "⚛️", color: "text-blue-500" },
  {
    name: "Next.js",
    icon: <RiNextjsLine />,
    color: "text-gray-800 dark:text-gray-200",
  },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-teal-600" },
];

export const Skills = () => {
  return (
    <section className="general-box bg-slate-50 dark:bg-slate-950" id="skills">
      <div className="general-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2 dark:text-slate-50">
            Skills & Technologies
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Here are some of the skills and technologies I work with:
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto mt-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group p-6 backdrop-blur-xl bg-white/80 border border-white/20 shadow-lg rounded-2xl min-w-[140px] text-center transition-all duration-300 cursor-pointer mb-8 hover:shadow-xl hover:scale-110 hover:-translate-y-2 dark:bg-slate-900 dark:border-slate-800 dark:hover:shadow-2xl"
            >
              <motion.div
                className="text-4xl mb-2 flex justify-center"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                {skill.icon}
              </motion.div>
              <h3
                className={`transition-transform duration-200 group-hover:scale-110 font-semibold ${skill.color}`}
              >
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
