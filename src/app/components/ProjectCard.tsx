// components/ProjectCard.tsx

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ project }: { project: (typeof import("../data/projects").projects)[0] }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article
  className="bg-white dark:bg-neutral-900 rounded-xl shadow p-4 flex flex-col h-full transition-transform duration-300 ease-out hover:scale-115 focus-within:scale-115 cursor-pointer"
      >
        <div
          className="h-44 w-full relative rounded overflow-hidden group"
          onClick={() => setShowModal(true)}
          tabIndex={0}
          role="button"
          aria-label={`Ver imagen de ${project.title} en grande`}
        >
          <Image src={project.image} alt={project.title} fill className="object-cover group-hover:brightness-90 transition" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition text-white text-xs font-semibold">
            Ampliar imagen
          </div>
        </div>
        <h3 className="mt-3 font-semibold text-gray-800 dark:text-gray-200">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex-1">{project.description}</p>
        {/* Tags de tecnologías */}
        {project.techs && project.techs.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.techs.map((tech: string) => (
              <span key={tech} className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-200 px-2 py-0.5 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="mt-4">
          <Link
            href={project.url}
            className="text-sm text-violet-600 dark:text-violet-400 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto →
          </Link>
        </div>
      </article>

      {/* Modal para imagen ampliada */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl mx-4 flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition text-2xl z-10"
              onClick={() => setShowModal(false)}
              aria-label="Cerrar imagen ampliada"
            >
              ×
            </button>
            <div className="w-full flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={1240}
                height={700}
                className="rounded-xl object-contain bg-black max-h-[80vh] w-auto h-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
