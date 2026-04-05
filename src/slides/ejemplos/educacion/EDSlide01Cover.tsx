"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// Partículas flotantes decorativas
const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: 8 + Math.random() * 84,
  y: 8 + Math.random() * 84,
  size: 2 + Math.random() * 3,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 5,
}));

// Iconos de materias flotantes
const floatingIcons = [
  { icon: "psychology", x: 78, y: 18, delay: 0 },
  { icon: "code", x: 85, y: 45, delay: 0.8 },
  { icon: "analytics", x: 72, y: 72, delay: 1.6 },
  { icon: "design_services", x: 90, y: 30, delay: 0.4 },
  { icon: "science", x: 82, y: 60, delay: 1.2 },
];

export function EDSlide01Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-bg-dark">
      {/* ═══ Capas de fondo ═══ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 55% 45%, color-mix(in srgb, var(--t-primary) 20%, transparent), transparent)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 15% 80%, color-mix(in srgb, var(--t-primary-light) 8%, transparent), transparent)",
        }}
      />
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ═══ Iconos flotantes de materias ═══ */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            animate={{
              y: [0, -12, 8, 0],
              opacity: [0.08, 0.2, 0.08],
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <span className="material-symbols-outlined text-primary text-[32px]">
              {item.icon}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ═══ Particulas flotantes ═══ */}
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
        {/* Top — badge */}
        <div className="hero-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/6 backdrop-blur-md border border-primary/15">
            <span className="material-symbols-outlined text-primary text-[14px]">school</span>
            <span className="text-[10px] text-fg-light/50 font-mono tracking-widest uppercase">
              Academia Digital · 2026
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
          </div>
        </div>

        {/* Center — titulo principal */}
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
                Aprende
              </span>
              <br />
              <span className="relative inline-block shimmer text-fg-light">
                haciendo
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="h-[3px] bg-primary rounded-full mb-5"
            />
            <p className="text-fg-light/40 text-base sm:text-lg leading-relaxed max-w-md">
              La plataforma de aprendizaje para profesionales.
              <br className="hidden sm:block" />
              Cursos prácticos con proyectos reales.
            </p>
          </motion.div>
        </div>

        {/* Bottom — stats con AnimatedCounter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 sm:gap-10"
        >
          {[
            { value: 50, suffix: "K+", label: "Alumnos activos" },
            { value: 120, suffix: "+", label: "Cursos disponibles" },
            { value: 4.8, suffix: "", label: "Rating promedio", decimals: 1 },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
              {i > 0 && (
                <div className="w-px h-10 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              )}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 1.4 + i * 0.15,
                }}
              >
                <span className="font-mono text-2xl sm:text-3xl text-fg-light/90 font-bold">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={1800}
                    decimals={stat.decimals ?? 0}
                  />
                </span>
                <span className="block text-[11px] text-fg-light/40 uppercase tracking-[0.2em] mt-1">
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
