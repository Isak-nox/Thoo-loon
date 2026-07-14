"use client";

import { Button } from "@/components/ui/button";
import VideoIcon from "@/components/icon/video-icon";
import { Project } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ProjectDetailModal from "./project-detail-modal";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const cardTitle = project.title.split("—")[0]?.trim() || project.title;

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-sm transition-colors hover:border-primary/40">
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-zinc-900">
            <Image
              src={project.image}
              alt={cardTitle}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>

          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="h-px w-6 bg-zinc-500" />
            <span className="text-sm text-zinc-400">
              {project.platform.join(" • ")}
            </span>
            {project.showcase && (
              <span className="rounded-md border border-primary/40 bg-primary/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-primary">
                Showcase
              </span>
            )}
          </div>

          <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
            {cardTitle}
          </h3>

          <p className="mb-5 line-clamp-4 flex-1 text-sm leading-relaxed text-zinc-300 sm:text-[15px] sm:leading-6">
            {project.description}
          </p>

          <div className="mb-1 flex min-h-[52px] flex-wrap content-start gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex gap-3 px-5 pb-5 sm:px-6 sm:pb-6">
          <Button
            asChild
            className="h-11 flex-1 rounded-lg text-sm font-semibold sm:h-12 sm:text-base"
          >
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <VideoIcon width={16} height={16} />
              Live Demo
            </Link>
          </Button>

          <Button
            type="button"
            variant="secondary"
            className="h-11 flex-1 rounded-lg bg-zinc-800 text-sm font-semibold text-white hover:bg-zinc-700 sm:h-12 sm:text-base"
            onClick={() => setIsDetailOpen(true)}
          >
            Detail
          </Button>
        </div>
      </article>

      <ProjectDetailModal
        project={project}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
