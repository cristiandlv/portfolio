"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function HeroBgEffect() {
  // Generar valores pseudoaleatorios deterministas para evitar hydration mismatch
  function seededRandom(seed: number) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }
  const bubbles = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => {
      // Usar el índice como semilla para que sea determinista
      const rand = (factor: number) => seededRandom(i * 100 + factor);
      // Helper para redondear a 4 decimales
      const round = (n: number) => Math.round(n * 10000) / 10000;
      return {
        initial: {
          y: round(rand(1) * 600 + 100),
          x: `${round(rand(2) * 100)}%`,
          opacity: round(0.15 + rand(3) * 0.15),
          scale: round(0.7 + rand(4) * 0.7),
        },
        animate: {
          y: -100,
          opacity: round(0.2 + rand(5) * 0.2),
        },
        transition: {
          duration: round(7 + rand(6) * 4),
          repeat: Infinity,
          repeatType: "loop" as const,
          delay: round(rand(7) * 2),
        },
        style: {
          width: `${round(60 + rand(8) * 60)}px`,
          height: `${round(60 + rand(9) * 60)}px`,
          left: `${round(rand(10) * 90)}%`,
        },
      };
    });
  }, []);
  return (
    <div className="pointer-events-none fixed md:absolute inset-0 z-0 w-full h-full overflow-hidden">
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          initial={bubble.initial}
          animate={bubble.animate}
          transition={bubble.transition}
          className="absolute rounded-full bg-[var(--accent-primary)] blur-2xl opacity-20"
          style={bubble.style}
        />
      ))}
    </div>
  );
}
