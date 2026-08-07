import SectionTitle from "@/components/custom/section-title";
import { PROJECT_CATEGORIES, PROJECTS } from "@/lib/constants";
import ProjectCard from "./project-card";
import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-background-lighter">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-16">
          <SectionTitle title="Projects" />

          <div className="flex w-full flex-col gap-16">
            {PROJECT_CATEGORIES.map((category) => {
              const projects = PROJECTS.filter(
                (project) => project.category === category
              );
              if (projects.length === 0) return null;

              return (
                <div key={category} className="flex w-full flex-col gap-8">
                  <h3 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-left sm:text-3xl">
                    {category}
                  </h3>
                  <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                    {projects.map((project) => (
                      <ProjectCard key={project.demo} project={project} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
