"use client";

import XmarkIcon from "@/components/icon/xmark-icon";
import ChevronRightIcon from "@/components/icon/chevron-right-icon";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/constants";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ACCENT = "#FE8FB5";

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) => {
  const gallery =
    project.images?.length > 0 ? project.images : [project.image];

  const [index, setIndex] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIndex(0);
      setShouldRender(true);
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(t);
    }
    setIsAnimating(false);
    document.body.style.overflow = "";
    const t = setTimeout(() => setShouldRender(false), 300);
    return () => clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + gallery.length) % gallery.length);
      }
      if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % gallery.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, gallery.length]);

  if (!shouldRender) return null;

  const prev = () => setIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setIndex((i) => (i + 1) % gallery.length);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 transition-all duration-300 ${
        isAnimating ? "bg-black/75 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className={`relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-zinc-950 text-white shadow-2xl transition-all duration-300 ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="absolute right-3 top-3 z-20 size-10 rounded-full bg-zinc-800/90 text-white hover:bg-zinc-700"
          onClick={onClose}
          aria-label="Close"
        >
          <XmarkIcon className="h-4 w-4" />
        </Button>

        <div className="overflow-y-auto">
          <div className="bg-zinc-900 px-4 pb-4 pt-14 sm:px-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black sm:aspect-video">
              <Image
                src={gallery[index]}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover object-top"
                priority
              />

              {gallery.length > 1 && (
                <>
                  <Button
                    type="button"
                    size="icon"
                    className="absolute left-3 top-1/2 size-11 -translate-y-1/2 rounded-full bg-black/70 text-white hover:bg-black/90"
                    onClick={prev}
                    aria-label="Previous image"
                  >
                    <ChevronRightIcon className="h-4 w-4 rotate-180" />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    className="absolute right-3 top-1/2 size-11 -translate-y-1/2 rounded-full bg-black/70 text-white hover:bg-black/90"
                    onClick={next}
                    aria-label="Next image"
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </>
              )}

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/65 px-3 py-1 text-xs text-white">
                {index + 1} / {gallery.length}
              </div>
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {gallery.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  onClick={() => setIndex(i)}
                  className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition sm:h-16 sm:w-24"
                  style={{
                    borderColor: i === index ? ACCENT : "transparent",
                    opacity: i === index ? 1 : 0.65,
                  }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8 px-4 py-6 sm:px-8 sm:py-8">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-bold leading-snug sm:text-2xl lg:text-3xl">
                  {project.title}
                </h2>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-800 transition-colors hover:bg-zinc-700"
                  aria-label="Open live site"
                >
                  <Globe className="size-4" />
                </Link>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                {project.description}
              </p>
            </div>

            <div className="space-y-5">
              <h3
                className="text-lg font-bold sm:text-xl"
                style={{ color: ACCENT }}
              >
                Case Study Details
              </h3>
              <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
                {project.detailsIntro}
              </p>
              {project.detailSections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h4 className="text-base font-semibold text-white sm:text-lg">
                    {section.title}
                  </h4>
                  <ul className="space-y-2 pl-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-300 sm:text-base"
                      >
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3
                className="text-lg font-bold sm:text-xl"
                style={{ color: ACCENT }}
              >
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium sm:text-sm"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 pb-2">
              <h3
                className="text-lg font-bold sm:text-xl"
                style={{ color: ACCENT }}
              >
                Key Features & Skills
              </h3>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
                {project.keySkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-300 sm:text-base"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                      aria-hidden
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
