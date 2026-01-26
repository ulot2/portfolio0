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
    <div className="bg-white dark:bg-slate-800 rounded-4xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-3xl bg-slate-100">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 grow">
        {description}
      </p>

      <Link
        href={`/project/${id}`}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-slate-900 dark:text-white font-semibold transition-colors w-fit"
      >
        View Details <LuChevronRight size={20} />
      </Link>
    </div>
  );
};
