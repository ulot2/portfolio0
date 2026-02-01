"use client";
import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/app/components/ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-cta/20 selection:text-cta py-20 px-6">
      {/* Background Decor */}
      <div className="fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] pointer-events-none opacity-50 z-0"></div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8"
          >
            <div className="p-2 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors">
              <LuArrowLeft size={18} />
            </div>
            <span className="font-medium text-sm">Back to Home</span>
          </Link>

          <div className="flex w-30 items-center gap-2 px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cta" />
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Archive
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-display text-primary tracking-tight mb-6">
            All <span className="text-cta">Projects</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl leading-relaxed">
            A complete collection of my work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
