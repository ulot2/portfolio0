"use client";
import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/app/components/ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-6"
          >
            <LuArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            All Projects
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl">
            A complete collection of my work, featuring web applications,
            experiments, and open source contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
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
      </div>
    </div>
  );
}
