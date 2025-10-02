"use client";
import Image from "next/image";
import TechIcons from "./TechIcons";
import StarWarsShipAnim from "./StarWarsShipAnim";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="h-auto min-h-[60vh] snap-start flex items-center justify-center bg-[var(--bg)] text-[var(--text)] px-4 py-10 md:py-16 relative overflow-hidden border-none outline-none shadow-none"
    >
      {/* Animación decorativa Star Wars */}
  <div className="absolute inset-0 w-full h-full z-40 border-none outline-none shadow-none">
        <StarWarsShipAnim />
      </div>
  <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center relative z-50 border-none outline-none shadow-none">
        {/* Avatar */}
        <div className="flex justify-center">
          <Image
            src="/cv2024.jpg"
            alt="Foto perfil"
            width={220}
            height={220}
            className="rounded-full border-4 border-white shadow-lg object-cover"
            priority
          />
        </div>
        {/* Texto */}
  <div className="space-y-5 text-center md:text-left">
          <h2 className="text-4xl font-bold">Sobre mí</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Soy un desarrollador frontend apasionado por crear interfaces limpias, modernas y funcionales. Me gusta combinar tecnología y diseño para lograr experiencias atractivas y fluidas. 🚀
          </p>
          <TechIcons />
          <a
            href="/cv-cristian-dlv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            aria-label="Descargar CV en PDF"
            className="inline-flex items-center gap-2 bg-[var(--accent-primary)] text-white font-medium px-5 py-2 rounded-lg border border-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] hover:text-white focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2 transition-colors duration-150 active:scale-95 select-none shadow-sm w-auto focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5 opacity-80">
              <path d="M12 3v10.5M12 13.5l-4-4M12 13.5l4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="6" y="17" width="12" height="2.5" rx="1.25" fill="currentColor"/>
            </svg>
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
