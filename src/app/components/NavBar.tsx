"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const doSearch = () => {
    const q = (search || "").trim().replace(/\s+/g, " ");
    if (!q) return;
    router.push(`/?q=${encodeURIComponent(q)}&page=1`, { scroll: false });
    setSearch("");
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center ">
        <div className="hidden md:flex items-center gap-6 font-medium">
          <a
            href="#hero"
            className="transition focus:outline-none"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#hero');
              const nav = document.querySelector('nav');
              const yOffset = nav ? -nav.offsetHeight : -80;
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Inicio
          </a>
          <a
            href="#about"
            className="transition focus:outline-none"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#about');
              const nav = document.querySelector('nav');
              const yOffset = nav ? -nav.offsetHeight : -80;
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Sobre
          </a>
          <a
            href="#projects"
            className="transition focus:outline-none"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#projects');
              const nav = document.querySelector('nav');
              const yOffset = nav ? -nav.offsetHeight : -80;
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="transition focus:outline-none"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#contact');
              const nav = document.querySelector('nav');
              const yOffset = nav ? -nav.offsetHeight : -80;
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Contacto
          </a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-neutral-800 transition cursor-pointer"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
            ) : (
              <Moon size={20} className="text-blue-600 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
            )}
          </button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 ">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-gray-900">
          <a
            href="#hero"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#hero');
              const nav = document.querySelector('nav');
              const yOffset = nav ? -nav.offsetHeight : -80;
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
              setMenuOpen(false);
            }}
            className="block py-2 font-semibold text-gray-900 dark:text-white transition focus:outline-none"
          >
            Inicio
          </a>
          <a
            href="#projects"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#projects');
              const nav = document.querySelector('nav');
              const yOffset = nav ? -nav.offsetHeight : -80;
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
              setMenuOpen(false);
            }}
            className="block py-2 font-semibold text-gray-900 dark:text-white transition focus:outline-none"
          >
            Proyectos
          </a>
          <a
            href="#about"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#about');
              const nav = document.querySelector('nav');
              const yOffset = nav ? -nav.offsetHeight : -80;
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
              setMenuOpen(false);
            }}
            className="block py-2 font-semibold text-gray-900 dark:text-white transition focus:outline-none"
          >
            Sobre
          </a>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#contact');
              const nav = document.querySelector('nav');
              const yOffset = nav ? -nav.offsetHeight : -80;
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
              setMenuOpen(false);
            }}
            className="block py-2 font-semibold text-gray-900 dark:text-white transition focus:outline-none"
          >
            Contacto
          </a>
          <div className="mt-2 flex items-center gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && doSearch()}
              placeholder="Buscar..."
              className="w-full px-3 py-2 rounded-md border bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-neutral-800 transition cursor-pointer"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
              ) : (
                <Moon size={20} className="text-blue-600 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}