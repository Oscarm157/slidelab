"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// ─────────────────────────────────────────────
// Slide 01 — Cover: Metrica AI
// Grafo de datos animado, tipografía premium, stats vivos
// ─────────────────────────────────────────────

// Nodos del grafo de datos
const nodes = [
  { id: 0, x: 50, y: 50, size: 18, label: "AI" },
  { id: 1, x: 20, y: 25, size: 10, label: "" },
  { id: 2, x: 80, y: 20, size: 12, label: "" },
  { id: 3, x: 15, y: 70, size: 9, label: "" },
  { id: 4, x: 75, y: 75, size: 11, label: "" },
  { id: 5, x: 35, y: 15, size: 8, label: "" },
  { id: 6, x: 85, y: 50, size: 10, label: "" },
  { id: 7, x: 40, y: 80, size: 8, label: "" },
  { id: 8, x: 65, y: 30, size: 9, label: "" },
];

// Conexiones entre nodos
const edges = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 6], [0, 8],
  [1, 5], [2, 8], [2, 6], [3, 7], [4, 7], [5, 8],
];

// Partículas flotantes
const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: 10 + Math.random() * 80,
  y: 10 + Math.random() * 80,
  size: 2 + Math.random() * 3,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 5,
}));

export function SUSlide01Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-bg-dark">
      {/* ═══ Capas de fondo ═══ */}

      {/* Gradiente primario — más agresivo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 62% 40%, color-mix(in srgb, var(--t-primary) 22%, transparent), transparent)",
        }}
      />
      {/* Segundo gradiente — esquina opuesta */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 20% 80%, color-mix(in srgb, var(--t-primary-light) 8%, transparent), transparent)",
        }}
      />
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }}
      />

      {/* ═══ Grafo de datos animado (SVG) ═══ */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Conexiones — líneas con data flow animation */}
          {edges.map(([from, to], i) => {
            const n1 = nodes[from];
            const n2 = nodes[to];
            const length = Math.sqrt((n2.x - n1.x) ** 2 + (n2.y - n1.y) ** 2);
            return (
              <g key={`edge-${i}`}>
                {/* Línea base */}
                <line
                  x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
                  stroke="var(--t-primary)"
                  strokeOpacity="0.08"
                  strokeWidth="0.15"
                />
                {/* Data pulse que recorre la línea */}
                <line
                  x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
                  stroke="var(--t-primary)"
                  strokeOpacity="0.4"
                  strokeWidth="0.2"
                  strokeDasharray={`${length * 0.15} ${length * 0.85}`}
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values={`${length};${-length}`}
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </line>
              </g>
            );
          })}

          {/* Nodos */}
          {nodes.map((node, i) => (
            <g key={`node-${node.id}`}>
              {/* Glow halo */}
              <circle
                cx={node.x} cy={node.y} r={node.size * 0.8}
                fill="var(--t-primary)"
                opacity="0.04"
              >
                <animate
                  attributeName="r"
                  values={`${node.size * 0.6};${node.size * 1.0};${node.size * 0.6}`}
                  dur={`${3 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Nodo sólido */}
              <circle
                cx={node.x} cy={node.y}
                r={node.id === 0 ? 2.5 : node.size * 0.12}
                fill={node.id === 0 ? "var(--t-primary)" : "var(--t-primary)"}
                opacity={node.id === 0 ? 0.9 : 0.35 + i * 0.06}
              >
                <animate
                  attributeName="opacity"
                  values={`${0.3 + i * 0.05};${0.6 + i * 0.05};${0.3 + i * 0.05}`}
                  dur={`${2 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Nodo central más grande con ring */}
              {node.id === 0 && (
                <>
                  <circle
                    cx={node.x} cy={node.y} r="4"
                    fill="none"
                    stroke="var(--t-primary)"
                    strokeWidth="0.3"
                    strokeOpacity="0.3"
                  >
                    <animate
                      attributeName="r"
                      values="4;5.5;4"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-opacity"
                      values="0.3;0.1;0.3"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* ═══ Partículas flotantes ═══ */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            x: [0, 15 * (p.id % 2 === 0 ? 1 : -1), -10 * (p.id % 2 === 0 ? 1 : -1), 0],
            y: [0, -12 * (p.id % 3 === 0 ? 1 : -1), 8, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* ═══ Contenido ═══ */}
      <div className="absolute inset-0 flex flex-col justify-between px-8 sm:px-12 md:px-20 py-10 sm:py-14 z-10">

        {/* Top — badge premium */}
        <div className="hero-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/6 backdrop-blur-md border border-primary/15">
            <span className="material-symbols-outlined text-primary text-[14px]">rocket_launch</span>
            <span className="text-[10px] text-fg-light/50 font-mono tracking-widest uppercase">
              Serie A · 2026
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
          </div>
        </div>

        {/* Center — título con text-gradient + shimmer */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight">
              <span
                className="text-gradient"
                style={{ textShadow: "0 0 80px color-mix(in srgb, var(--t-primary) 30%, transparent)" }}
              >
                Metrica
              </span>
              <br />
              <span className="relative inline-block shimmer text-fg-light">
                AI
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8"
          >
            {/* Divider animado */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="h-[3px] bg-primary rounded-full mb-5"
            />
            <p className="text-fg-light/40 text-base sm:text-lg leading-relaxed max-w-md">
              Inteligencia de datos para equipos de producto.
              <br className="hidden sm:block" />
              Decisiones más rápidas, basadas en evidencia real.
            </p>
          </motion.div>
        </div>

        {/* Bottom — stats con AnimatedCounter + pop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 sm:gap-10"
        >
          {[
            { value: 47, prefix: "$", suffix: "B", label: "Market Size" },
            { value: 3, suffix: "x", label: "Faster Insights" },
            { value: 98, suffix: "%", label: "Accuracy" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
              {i > 0 && (
                <div className="w-px h-10 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              )}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring", stiffness: 300, damping: 20,
                  delay: 1.4 + i * 0.15,
                }}
              >
                <span className="font-mono text-2xl sm:text-3xl text-fg-light/90 font-bold">
                  <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={1800} />
                </span>
                <span className="block text-[9px] text-fg-light/25 uppercase tracking-[0.2em] mt-1">
                  {stat.label}
                </span>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
