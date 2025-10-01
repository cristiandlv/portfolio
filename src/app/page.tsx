"use client";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { ChevronDown } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[var(--bg)]">
      <Navbar />
      <section
        id="hero"
        className="min-h-[60vh] snap-start flex flex-col items-center justify-center text-center px-2 sm:px-4 md:px-8 relative animate-fadein"
      >
        <Hero />
        <a
          href="#projects"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white drop-shadow-lg"
        >
          <ChevronDown size={38} strokeWidth={2.5} />
        </a>
      </section>
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <footer className="bg-[#0B0B0B] text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} Tu Nombre · Creado con Next.js & Tailwind
      </footer>
      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadein {
          animation: fadein 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  );
}
