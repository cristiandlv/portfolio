"use client";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-[60vh] snap-start bg-[var(--accent-primary)] text-white flex flex-col items-center justify-center py-12 px-4 md:px-8"
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl font-bold mb-2">Proyectos</h2>
        <p className="mb-10 text-lg text-gray-600 dark:text-gray-400">
          Algunos de mis trabajos más recientes
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
