// components/Hero.tsx
"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import HeroBgEffect from "./HeroBgEffect";

export default function Hero() {
  const [showImg, setShowImg] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Detectar tema dinámicamente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      const updateTheme = () => {
        setTheme(html.classList.contains("dark") ? "dark" : "light");
      };
      updateTheme();
      const observer = new MutationObserver(updateTheme);
      observer.observe(html, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    }
  }, []);

  // Fade al cambiar imagen
  useEffect(() => {
    setShowImg(false);
    const timeout = setTimeout(() => setShowImg(true), 200);
    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[48vh] md:h-[60vh] flex items-center justify-center"
    >
      {/* Efecto animado de fondo */}
      <HeroBgEffect />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-4 max-w-4xl w-full">
        {/* Avatar en círculo */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-12 flex items-center justify-center">
          <div className="relative w-44 h-44 md:w-[340px] md:h-[340px] rounded-full bg-gray-100 shadow-xl overflow-hidden">
            <Image
              src={theme === "dark" ? "/me.png" : "/me-light.png"}
              alt="Foto de Cristian"
              fill
              className={`object-cover transition-opacity duration-500 ease-in-out ${
                showImg ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
          </div>
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1
            className={`text-3xl md:text-5xl font-bold transition-colors duration-300 ${
              theme === "dark"
                ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                : "text-gray-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]"
            }`}
          >
            Hola — Soy{' '}
            <span
              className={
                theme === "dark"
                  ? "text-[var(--accent-primary)]"
                  : "text-[var(--accent-secondary)]"
              }
            >
              Cristian
            </span>
            . <span className="hidden md:inline ">Frontend Developer</span>
          </h1>
          <div className="mt-2 mb-6 min-h-[32px] flex items-center justify-center md:justify-start">
            <TypeAnimation
              sequence={[
                "Frontend Developer 💻", 2000,
                "Amante del diseño 🎨", 2000,
                "Explorador tech 🚀", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block text-lg md:text-2xl font-semibold text-[var(--accent-secondary)]"
            />
          </div>
          {/* Skills tagline */}
          <p
            className={`mt-2 text-base md:text-lg font-medium transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span style={{ color: "var(--accent-primary)" }}>React</span>
            {" · Next.js · Tailwind CSS · "}
            <span style={{ color: "var(--accent-secondary)" }}>JavaScript</span>
          </p>
        </div>
      </div>
    </section>
  );
}
