import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
}

export const ProjectCard = ({
  id,
  title,
  description,
  image,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div className="group h-full bg-white dark:bg-zinc-900 border border-secondary/10 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden">
      {/* Image Container with Reveal Effect */}
      <div className="relative w-full aspect-16/10 mb-5 overflow-hidden rounded-2xl bg-secondary/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold font-display text-primary group-hover:text-cta transition-colors duration-300">
          {title}
        </h3>
        {/* Optional: Add icon or year here if available */}
      </div>

      <p className="text-secondary font-sans text-sm leading-relaxed mb-6 grow line-clamp-3">
        {description}
      </p>

      <div className="mt-auto flex items-center gap-4">
        <Link
          href={`/project/${id}`}
          className="inline-flex items-center gap-2 text-sm font-medium font-sans text-primary hover:text-cta transition-colors"
        >
          View project details <LuChevronRight />
        </Link>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto px-4 py-2 text-xs font-bold uppercase tracking-wider bg-cta/10 text-cta rounded-full hover:bg-cta hover:text-white transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};
