import SectionTitle from "@/components/custom/section-title";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "./project-card";
import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-background-lighter">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-16">
          <SectionTitle title="Projects" />

          <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.demo} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
