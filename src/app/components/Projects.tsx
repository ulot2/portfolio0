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
      className="general-box bg-slate-50/50 dark:bg-slate-900"
      id="projects"
    >
      <div className="w-full max-w-[800px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2 dark:text-slate-50">
            Featured Projects
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            {
              "Here are some of my recent projects that highlight what I’ve been learning and building."
            }
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex gap-6 flex-wrap mt-8 justify-center">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="w-full md:w-[48%] lg:w-[48%]"
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  liveUrl={project.liveUrl}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full font-semibold transition-transform hover:scale-105"
            >
              View All Projects <LuArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
