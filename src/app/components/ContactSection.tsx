"use client";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] snap-start flex flex-col items-center justify-center bg-[var(--accent-secondary)] text-white px-6 py-16 md:py-24"
    >
      <div className="max-w-xl w-full text-center space-y-6">
        <h2 className="text-3xl font-bold">Contacto</h2>
        <p className="text-lg">
          ¿Querés charlar o colaborar? Escribime o buscame en redes 👇
        </p>

        {/* Formulario */}
        <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-3 rounded-md border border-gray-300 text-black"
          />
          <input
            type="email"
            placeholder="Tu email"
            className="w-full p-3 rounded-md border border-gray-300 text-black"
          />
          <textarea
            placeholder="Tu mensaje"
            rows={4}
            className="w-full p-3 rounded-md border border-gray-300 text-black"
          />
          <button
            type="submit"
            className="w-full bg-white text-[var(--accent-secondary)] font-semibold py-3 rounded-md shadow hover:bg-gray-200 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="mailto:dlvcristian@gmail.com" className="hover:opacity-80">
            <Mail size={28} />
          </a>
          <a href="https://github.com/cristiandlv" target="_blank" className="hover:opacity-80">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/cristian-de-la-vega/" target="_blank" className="hover:opacity-80">
            <Linkedin size={28} />
          </a>
          <a href="https://instagram.com/" target="_blank" className="hover:opacity-80">
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
