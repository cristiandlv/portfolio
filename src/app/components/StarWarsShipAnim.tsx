

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const STARSHIP_SRC = "/starship.png";

const shipSize = { width: 38, height: 20 };
const duration = 8;

// Definición de ráfagas: cada ráfaga es un array de delays relativos
const bursts = [
  [1.1, 1.22, 1.34],
  [3.2, 3.32, 3.44],
  [5.5, 5.62, 5.74],
];


export default function StarWarsShipAnim() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;


  // Trayectoria centrada y visible en About
  const pathX = ['-40px', '0vw', '20vw', '50vw', '80vw', '100vw', 'calc(100vw + 40px)'];
  const pathY = ['50%', '48%', '46%', '45%', '46%', '48%', '50%'];
  const pathRotate = [10, 6, 2, 0, -2, 2, 8];


  // Generar todos los disparos con su delay y ráfaga
  const shots = bursts.flatMap((burst, burstIdx) =>
    burst.map((delay, i) => ({
      delay,
      key: `b${burstIdx}-s${i}`,
      burst: burstIdx,
    }))
  );


  return (
  <div className="absolute left-0 top-0 w-full h-full z-[60] pointer-events-none" style={{overflow:'visible'}}>
      <motion.div
        initial={false}
        animate={{
          x: pathX,
          y: pathY,
          rotate: pathRotate,
          opacity: 1,
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          times: [0, 0.18, 0.38, 0.62, 0.82, 1],
        }}
  style={{ width: shipSize.width, height: shipSize.height }}
  className="relative"
      >
        <Image
          src={STARSHIP_SRC}
          alt="Star Wars TIE Fighter"
          width={shipSize.width}
          height={shipSize.height}
          className="object-contain drop-shadow-lg opacity-100"
          draggable={false}
          priority
        />
        {/* Disparos verdes animados, 3 ráfagas */}
        {shots.map(({ delay, key }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: 0, scaleX: 1 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [0, 60, 120, 160],
              scaleX: [1, 1.15, 1.1, 1],
            }}
            transition={{
              duration: 0.32,
              repeat: Infinity,
              repeatType: "loop",
              delay,
              repeatDelay: duration - (delay + 0.32),
              times: [0, 0.13, 0.7, 1],
            }}
            className="absolute"
            style={{
              left: shipSize.width - 2,
              top: shipSize.height / 2 - 1,
              width: 28,
              height: 2.2,
              background: 'linear-gradient(90deg, #39ff14 70%, #b9ffb0 100%)',
              borderRadius: 2,
              boxShadow: '0 0 6px 2px #39ff14cc',
              filter: 'blur(0.3px) brightness(1.5)',
              zIndex: 2,
              position: 'absolute',
              transform: 'translateY(-50%)',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
