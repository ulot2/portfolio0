"use client";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export const Projects = () => {
  const visibleProjects = projects.slice(0, 4);

  return (
    <section
      className="relative py-32 bg-slate-50 dark:bg-zinc-950 overflow-hidden"
      id="projects"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-secondary/20 to-transparent" />
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-cta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1100px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cta" />
              <span className="text-sm font-sans font-medium text-secondary">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-display text-primary tracking-tight">
              Featured <span className="text-cta">Projects</span>
            </h2>
          </div>

          <p className="text-lg text-secondary font-sans max-w-md leading-relaxed pb-2">
            A diverse collection of projects showcasing my journey in frontend
            development and UX design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                liveUrl={project.liveUrl}
                // gitUrl={project.gitUrl} // Assuming this prop exists or will be added
                // techStack={project.techStack} // Assuming this prop exists
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-background rounded-full font-sans font-medium overflow-hidden transition-transform active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">View all projects</span>
            <LuArrowRight
              className="relative z-10 transition-transform group-hover:translate-x-1"
              size={20}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
