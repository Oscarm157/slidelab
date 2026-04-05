"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// ─────────────────────────────────────────────
// Slide 01 — Cover: Vertex Medical · Reporte Anual 2025
// Fotografía médica + datos hero + línea ECG animada
// ─────────────────────────────────────────────

// Línea ECG animada como elemento decorativo
function ECGLine() {
  const path = "M0,25 L15,25 L20,25 L23,10 L26,40 L29,5 L32,35 L35,25 L50,25 L65,25 L68,10 L71,40 L74,5 L77,35 L80,25 L100,25";
  return (
    <svg viewBox="0 0 100 50" className="w-full h-8 opacity-30" preserveAspectRatio="none">
      <motion.path
        d={path}
        fill="none"
        stroke="var(--t-primary-light)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

export function RASlide01Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-bg-dark">
      {/* Imagen de fondo — manufactura médica */}
      <img
        src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1800&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060E0E]/90 via-[#060E0E]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060E0E]/80 via-transparent to-[#060E0E]/30" />

      {/* Gradiente teal decorativo */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 40% 40% at 25% 60%, color-mix(in srgb, var(--t-primary) 15%, transparent), transparent)",
      }} />

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col justify-between px-8 sm:px-12 md:px-20 py-10 sm:py-14 z-10">

        {/* Top — logo + año */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary text-[20px]">medical_services</span>
            </div>
            <div>
              <p className="text-fg-light font-semibold text-sm">Vertex Medical</p>
              <p className="text-fg-light/30 text-[10px] font-mono uppercase tracking-widest">Industries</p>
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-white/6 backdrop-blur-md border border-primary/15">
            <span className="text-[10px] text-fg-light/50 font-mono tracking-widest uppercase">
              Reporte Anual · 2025
            </span>
          </div>
        </motion.div>

        {/* Center — título principal */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-primary/60 text-xs uppercase tracking-[0.3em] font-semibold mb-4">
              Resultados Fiscales
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-fg-light leading-[0.9] tracking-tight">
              Un año de
              <br />
              <span className="text-gradient">crecimiento</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6"
          >
            <ECGLine />
            <p className="text-fg-light/35 text-sm sm:text-base leading-relaxed max-w-lg mt-3">
              Liderando la innovación en dispositivos médicos de clase III.
              <br />
              42 años transformando la salud en 28 países.
            </p>
          </motion.div>
        </div>

        {/* Bottom — KPIs hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-6 sm:gap-10"
        >
          {[
            { value: 847, prefix: "$", suffix: "M", label: "Revenue" },
            { value: 28, suffix: "%", label: "Margen EBITDA" },
            { value: 4200, suffix: "+", label: "Empleados" },
            { value: 28, label: "Países" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
              {i > 0 && <div className="w-px h-10 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.3 + i * 0.12 }}
              >
                <span className="font-mono text-xl sm:text-2xl text-fg-light/90 font-bold">
                  <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={1800} />
                </span>
                <span className="block text-[11px] text-fg-light/40 uppercase tracking-[0.2em] mt-1">{stat.label}</span>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
