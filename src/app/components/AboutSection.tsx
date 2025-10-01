"use client";
import Image from "next/image";
import TechIcons from "./TechIcons";
import StarWarsShipAnim from "./StarWarsShipAnim";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="h-auto min-h-[60vh] snap-start flex items-center justify-center bg-[var(--bg)] text-[var(--text)] px-4 py-10 md:py-16 relative"
    >
      {/* Animación decorativa Star Wars */}
  <div className="absolute inset-0 w-full h-full z-40">
        <StarWarsShipAnim />
      </div>
  <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center relative z-0">
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
            href="./Cristian De la Vega - CV - Frontend Developer.pdf"
            download
            className="inline-block bg-white text-[var(--accent-primary)] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
