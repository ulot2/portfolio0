"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import {
  LuArrowLeft,
  LuExternalLink,
  LuChevronLeft,
  LuChevronRight,
  LuCalendar,
  LuLayers,
  LuUser,
} from "react-icons/lu";
import { motion } from "framer-motion";

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

  const project = projects.find((p) => p.id === id);
  const nextProject = projects.find((p) => p.id === id + 1);
  const prevProject = projects.find((p) => p.id === id - 1);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-primary">
        <h1 className="text-4xl font-display font-bold mb-4">
          Project Not Found
        </h1>
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-full font-sans font-medium hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // Fallback data
  const client = "Personal Project";
  const type = "Web Application";

  return (
    <main className="min-h-screen bg-background font-sans selection:bg-cta/20 selection:text-cta">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group flex items-center gap-2 text-secondary hover:text-primary transition-colors"
          >
            <div className="p-2 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors">
              <LuArrowLeft size={18} />
            </div>
            <span className="font-medium text-sm">Back to Projects</span>
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Visit Live <LuExternalLink size={16} />
            </a>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-secondary/5 border-b border-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cta/10 text-cta border border-cta/20 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider">
                {type}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-primary tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-secondary max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Content & Gallery (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-20">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-secondary/10 bg-secondary/5 aspect-video relative"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Overview / Full Description */}
            <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
              <h3 className="text-3xl font-bold font-display text-primary mb-6">
                Overview
              </h3>
              <p className="text-secondary leading-8 text-lg whitespace-pre-line font-sans">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Gallery Images */}
            <div className="space-y-12">
              {project.image2 && (
                <div className="group rounded-3xl overflow-hidden shadow-xl border border-secondary/10 bg-secondary/5">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image2}
                      alt="Project Detail 1"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              )}
              {project.image3 && (
                <div className="group rounded-3xl overflow-hidden shadow-xl border border-secondary/10 bg-secondary/5">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image3}
                      alt="Project Detail 2"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Navigation (Mobile: Bottom) */}
            <div className="lg:hidden flex justify-between gap-4 pt-8 border-t border-secondary/10">
              {prevProject ? (
                <Link
                  href={`/project/${prevProject.id}`}
                  className="flex-1 p-4 rounded-2xl bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 transition-colors"
                >
                  <span className="block text-xs uppercase tracking-wider text-secondary mb-1">
                    Previous
                  </span>
                  <span className="font-bold text-primary font-display flex items-center gap-1">
                    <LuChevronLeft /> {prevProject.title}
                  </span>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}

              {nextProject ? (
                <Link
                  href={`/project/${nextProject.id}`}
                  className="flex-1 p-4 rounded-2xl bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 transition-colors text-right"
                >
                  <span className="block text-xs uppercase tracking-wider text-secondary mb-1">
                    Next
                  </span>
                  <span className="font-bold text-primary font-display flex items-center justify-end gap-1">
                    {nextProject.title} <LuChevronRight />
                  </span>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}
            </div>
          </div>

          {/* Right Column: Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 space-y-10">
              {/* Info Box */}
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-secondary/10 shadow-sm">
                <h4 className="text-sm font-bold uppercase tracking-wider text-secondary/60 mb-6">
                  Project Details
                </h4>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <LuLayers className="w-5 h-5 text-cta mt-1" />
                    <div>
                      <span className="block text-sm font-medium text-secondary/60">
                        Category
                      </span>
                      <span className="text-primary font-medium">{type}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <LuUser className="w-5 h-5 text-cta mt-1" />
                    <div>
                      <span className="block text-sm font-medium text-secondary/60">
                        Client
                      </span>
                      <span className="text-primary font-medium">{client}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-secondary/10">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-secondary/60 mb-4">
                    Technology
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-secondary/5 border border-secondary/10 rounded-lg text-sm font-medium text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  {prevProject && (
                    <Link
                      href={`/project/${prevProject.id}`}
                      className="flex-1 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-secondary/10 hover:border-cta/50 transition-colors group"
                    >
                      <div className="text-xs text-secondary mb-1">
                        Previous
                      </div>
                      <div className="font-bold text-primary font-display truncate group-hover:text-cta transition-colors">
                        {prevProject.title}
                      </div>
                    </Link>
                  )}
                  {nextProject && (
                    <Link
                      href={`/project/${nextProject.id}`}
                      className="flex-1 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-secondary/10 hover:border-cta/50 transition-colors group text-right"
                    >
                      <div className="text-xs text-secondary mb-1">Next</div>
                      <div className="font-bold text-primary font-display truncate group-hover:text-cta transition-colors">
                        {nextProject.title}
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center py-12 border-t border-secondary/10 bg-secondary/5">
        <p className="text-secondary text-sm font-medium">
          &copy; {new Date().getFullYear()} Toluwalope Adegoke. All rights
          reserved.
        </p>
      </div>
    </main>
  );
}
