"use client";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";


// Usa variables de entorno para las keys de EmailJS
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

// Debug: mostrar valores de las variables de entorno
console.log('EmailJS ENV:', SERVICE_ID, TEMPLATE_ID, USER_ID);

// Debug: mostrar valores de las variables de entorno
console.log('EmailJS ENV:', SERVICE_ID, TEMPLATE_ID, USER_ID);


export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sendTime, setSendTime] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    message: ""
  });
  const formRef = useRef<HTMLFormElement>(null);

  // Actualiza la hora al montar el formulario y al enviar
  useEffect(() => {
    setSendTime(new Date().toLocaleString('es-AR', { hour12: false }));
  }, [sent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSendTime(new Date().toLocaleString('es-AR', { hour12: false }));
    if (!formRef.current) return;
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(
        () => {
          setSent(true);
          setLoading(false);
          setFormData({ title: "", name: "", email: "", message: "" });
        },
        () => {
          setError("Ocurrió un error. Intenta de nuevo o usa otro medio de contacto.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-[60vh] snap-start flex flex-col items-center justify-center bg-[var(--accent-secondary)] text-white px-6 py-16 md:py-24"
    >
      <div className="max-w-xl w-full text-center space-y-6">
        <h2 className="text-3xl font-bold">Contacto</h2>
       

        {/* Formulario */}
        {!sent ? (
          <form ref={formRef} className="space-y-4 text-left" onSubmit={handleSubmit} autoComplete="off"> 
          <p className="text-lg text-center">
          ¿Querés contactarme? Escribime o buscame en redes 👇
        </p>
            <input
              type="text"
              name="title"
              placeholder="Asunto"
              className="w-full p-3 rounded-md border border-gray-300 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              required
              value={formData.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="w-full p-3 rounded-md border border-gray-300 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              className="w-full p-3 rounded-md border border-gray-300 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {/* Campo oculto para la hora de envío */}
            <input
              type="hidden"
              name="time"
              value={sendTime}
              readOnly
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows={4}
              className="w-full p-3 rounded-md border border-gray-300 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full bg-white text-[var(--accent-secondary)] font-semibold py-3 rounded-md shadow hover:bg-gray-200 transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>
            {error && (
              <div className="text-red-200 text-sm mt-2">{error}</div>
            )}
          </form>
        ) : (
          <div className="py-8 text-green-200 text-lg font-semibold animate-fade-in">
            ¡Gracias por tu mensaje! Te responderé pronto.
          </div>
        )}

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
          <a href="https://www.instagram.com/rmade.dlv/" target="_blank" className="hover:opacity-80">
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
