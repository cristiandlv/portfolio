

"use client";
import { useEffect, useRef } from "react";

const shipWidth = 48;
const shipHeight = 28;
const duration = 9; // segundos (más fluido y visible)

// Trayectoria Bezier fluida de izquierda a derecha
const bezier = [
  { x: -shipWidth, y: 0.54, r: 12 },
  { x: 0.08, y: 0.51, r: 8 },
  { x: 0.22, y: 0.48, r: 4 },
  { x: 0.38, y: 0.46, r: 0 },
  { x: 0.60, y: 0.47, r: -3 },
  { x: 0.80, y: 0.50, r: 2 },
  { x: 1.00, y: 0.53, r: 8 },
  { x: 1.10, y: 0.56, r: 14 },
];

// Tiempos de disparo (en segundos, ajustados a nueva duración)
const shots = [0.9, 1.1, 1.3, 3.1, 3.3, 3.5, 6.1, 6.3, 6.5];

export default function StarWarsShipAnim() {
  const shipRef = useRef<HTMLDivElement>(null);
  const laserRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animación nave
  useEffect(() => {
    const el = shipRef.current;
    if (!el) return;
    const start = performance.now();
    // Bezier interpolation helpers
    function bezierInterp(points: typeof bezier, t: number) {
      // De Casteljau's algorithm for cubic Bezier
      const pts = points.map(p => ({ ...p }));
      while (pts.length > 1) {
        for (let i = 0; i < pts.length - 1; i++) {
          pts[i] = {
            x: typeof pts[i].x === 'number' && typeof pts[i + 1].x === 'number' ? pts[i].x + (pts[i + 1].x - pts[i].x) * t : pts[i].x,
            y: typeof pts[i].y === 'number' && typeof pts[i + 1].y === 'number' ? pts[i].y + (pts[i + 1].y - pts[i].y) * t : pts[i].y,
            r: pts[i].r + (pts[i + 1].r - pts[i].r) * t,
          };
        }
        pts.pop();
      }
      return pts[0];
    }
    function easeInOutSine(t: number) {
      return -(Math.cos(Math.PI * t) - 1) / 2;
    }
    function animate(now: number) {
      const t = ((now - start) / 1000) % duration;
      const normT = t / duration;
      const easedT = easeInOutSine(normT);
      const { x, y, r } = bezierInterp(bezier, easedT);
      if (el) {
        // x: 0-1 -> 0vw-100vw, y: 0-1 -> 0-100% height
        el.style.left = typeof x === 'number' ? `calc(${x * 100}vw)` : x;
        el.style.top = typeof y === 'number' ? `${y * 100}%` : y;
        el.style.transform = `rotate(${r}deg)`;
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, []);

  // Animación disparos
  useEffect(() => {
    let raf: number;
    function animateLasers(now: number) {
      const t = (now / 1000) % duration;
      shots.forEach((shotTime, i) => {
        const laser = laserRefs.current[i];
        if (!laser) return;
        const dt = t - shotTime;
        if (dt > 0 && dt < 0.32) {
          laser.style.opacity = "1";
          laser.style.transform = `translateX(${dt * 180}px) scaleX(1.1)`;
        } else {
          laser.style.opacity = "0";
          laser.style.transform = "none";
        }
      });
      raf = requestAnimationFrame(animateLasers);
    }
    raf = requestAnimationFrame(animateLasers);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="pointer-events-none" style={{position:'absolute',left:0,top:0,width:'100vw',height:'100%',zIndex:60,overflow:'visible'}}>
      <div
        ref={shipRef}
        style={{position:'absolute',width:shipWidth,height:shipHeight,transition:'filter .2s',filter:'drop-shadow(0 2px 6px #0008)',overflow:'visible'}}
      >
        <img
          src="/starship.svg"
          alt="TIE Fighter"
          width={shipWidth}
          height={shipHeight}
          style={{width:shipWidth,height:shipHeight,objectFit:'contain',display:'block'}}
          draggable={false}
        />
        {/* Disparos verdes animados */}
        {shots.map((shot, i) => (
          <div
            key={i}
            ref={el => { laserRefs.current[i] = el; }}
            style={{
              position:'absolute',
              left:shipWidth-2,
              top:shipHeight/2-1,
              width:32,
              height:2.2,
              background:'linear-gradient(90deg,#39ff14 70%,#b9ffb0 100%)',
              borderRadius:2,
              boxShadow:'0 0 6px 2px #39ff14cc',
              filter:'blur(0.3px) brightness(1.5)',
              opacity:0,
              zIndex:10,
              pointerEvents:'none',
              transform:'translateY(-50%)',
              transition:'opacity .1s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
