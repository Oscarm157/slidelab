"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// ─────────────────────────────────────────────
// Slide 01 — Cover: Apex Consulting
// Abstracto profesional, geométrico, confianza
// ─────────────────────────────────────────────

export function COSlide01Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-bg-dark">
      {/* Gradientes mesh */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 50% at 70% 35%, color-mix(in srgb, var(--t-primary) 20%, transparent), transparent), radial-gradient(ellipse 40% 40% at 25% 75%, color-mix(in srgb, var(--t-primary-light) 8%, transparent), transparent)",
      }} />

      {/* Patrón geométrico sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 8 }, (_, i) => (
            <g key={i}>
              <line x1={i * 14} y1="0" x2={i * 14} y2="100" stroke="white" strokeWidth="0.1" />
              <line x1="0" y1={i * 14} x2="100" y2={i * 14} stroke="white" strokeWidth="0.1" />
            </g>
          ))}
        </svg>
      </div>

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col justify-between px-8 sm:px-12 md:px-20 py-10 sm:py-14 z-10">
        {/* Top */}
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary text-[20px]">insights</span>
            </div>
            <div>
              <p className="text-fg-light font-semibold text-sm">Apex Consulting</p>
              <p className="text-fg-light/30 text-[10px] font-mono uppercase tracking-widest">Advisory & Transformation</p>
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-white/6 backdrop-blur-md border border-primary/15">
            <span className="text-[10px] text-fg-light/50 font-mono tracking-widest uppercase">Propuesta · 2026</span>
          </div>
        </motion.div>

        {/* Center */}
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-primary/60 text-xs uppercase tracking-[0.3em] font-semibold mb-4">Transformación Operativa</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-fg-light leading-[0.9] tracking-tight">
              Resultados
              <br />
              <span className="text-gradient">medibles</span>
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="mt-6">
            <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ duration: 0.6, delay: 1.0 }} className="h-[3px] bg-primary rounded-full mb-5" />
            <p className="text-fg-light/35 text-sm sm:text-base leading-relaxed max-w-lg">
              Propuesta de consultoría para optimizar operaciones, reducir costos y acelerar el crecimiento de Grupo Industrial Monterrey.
            </p>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-6 sm:gap-10">
          {[
            { value: 200, suffix: "+", label: "Proyectos entregados" },
            { value: 15, label: "Años de experiencia" },
            { value: 94, suffix: "%", label: "Clientes repiten" },
            { value: 3.2, suffix: "x", label: "ROI promedio" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
              {i > 0 && <div className="w-px h-10 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />}
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.3 + i * 0.12 }}>
                <span className="font-mono text-xl sm:text-2xl text-fg-light/90 font-bold">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={stat.label.includes("ROI") ? 1 : 0} duration={1800} />
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
