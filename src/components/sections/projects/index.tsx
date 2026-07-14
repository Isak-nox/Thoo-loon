import SectionTitle from "@/components/custom/section-title";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "./project-card";
import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-background-lighter">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <SectionTitle title="Showcase Projects" />
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Public Shopify storefronts used as visual case studies of UX and
              theme patterns I work with. They are{" "}
              <span className="text-foreground/90">not employer or client
              attributions</span>
              —production delivery details live in Work Experience.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
