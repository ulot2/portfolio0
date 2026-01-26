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
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link
          href="/"
          className="px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full font-semibold transition-transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // Fallback data
  const client = "Personal Project";
  const year = "2024";
  const type = "Web Application";

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 group-hover:bg-slate-200 dark:group-hover:bg-slate-800 transition-colors">
              <LuArrowLeft size={18} />
            </div>
            <span className="font-medium text-sm">Back to Projects</span>
          </Link>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Visit Live <LuExternalLink size={16} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            {project.description}
          </motion.p>
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
              className="rounded-3xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900 aspect-video relative"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="w-fit">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Visit Live <LuExternalLink size={16} />
              </Link>
            </div>

            {/* Overview / Full Description */}
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Overview
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-8 text-lg whitespace-pre-line">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Gallery Images */}
            <div className="space-y-12">
              {project.image2 && (
                <div className="group rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
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
                <div className="group rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
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
            <div className="lg:hidden flex justify-between gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
              {prevProject ? (
                <Link
                  href={`/project/${prevProject.id}`}
                  className="flex-1 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                >
                  <span className="block text-xs uppercase tracking-wider text-slate-500 mb-1">
                    Previous
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-1">
                    <LuChevronLeft /> {prevProject.title}
                  </span>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}

              {nextProject ? (
                <Link
                  href={`/project/${nextProject.id}`}
                  className="flex-1 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-colors text-right"
                >
                  <span className="block text-xs uppercase tracking-wider text-slate-500 mb-1">
                    Next
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white flex items-center justify-end gap-1">
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
              <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
                  Project Details
                </h4>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <LuLayers className="w-5 h-5 text-slate-400 mt-1" />
                    <div>
                      <span className="block text-sm font-medium text-slate-400">
                        Category
                      </span>
                      <span className="text-slate-900 dark:text-white font-medium">
                        {type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <LuUser className="w-5 h-5 text-slate-400 mt-1" />
                    <div>
                      <span className="block text-sm font-medium text-slate-400">
                        Client
                      </span>
                      <span className="text-slate-900 dark:text-white font-medium">
                        {client}
                      </span>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-4">
                    <LuCalendar className="w-5 h-5 text-slate-400 mt-1" />
                    <div>
                      <span className="block text-sm font-medium text-slate-400">
                        Year
                      </span>
                      <span className="text-slate-900 dark:text-white font-medium">
                        {year}
                      </span>
                    </div>
                  </div> */}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Technology
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-col gap-4">
                {nextProject && (
                  <Link
                    href={`/project/${nextProject.id}`}
                    className="group block p-6 rounded-3xl bg-slate-900 dark:bg-slate-900 text-white dark:text-white transition-transform hover:-translate-y-1"
                  >
                    <span className="text-white/60 dark:text-slate-500 text-sm uppercase tracking-wider mb-2 block">
                      View Next Project
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">
                        {nextProject.title}
                      </span>
                      <LuChevronRight
                        className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0"
                        size={24}
                      />
                    </div>
                  </Link>
                )}
                {prevProject && (
                  <Link
                    href={`/project/${prevProject.id}`}
                    className="text-center p-4 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <LuChevronLeft size={16} /> Previous: {prevProject.title}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center py-12 border-t border-slate-100 dark:border-slate-900">
        <p className="text-slate-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Toluwalope Adegoke
        </p>
      </div>
    </main>
  );
}
