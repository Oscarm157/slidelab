"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CountdownTimer } from "@/components/CountdownTimer";

// ─────────────────────────────────────────────
// Slide 01 — Cover: DesignConf 2026
// Full-bleed hero con countdown, stats y shimmer
// ─────────────────────────────────────────────

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: 5 + Math.random() * 90,
  y: 5 + Math.random() * 90,
  size: 2 + Math.random() * 4,
  duration: 6 + Math.random() * 10,
  delay: Math.random() * 4,
}));

const stats = [
  { value: 2500, suffix: "+", label: "Asistentes" },
  { value: 48, suffix: "", label: "Speakers" },
  { value: 3, suffix: "", label: "Días" },
  { value: 12, suffix: "", label: "Tracks" },
];

export function EVSlide01Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-bg-dark">
      {/* ═══ Imagen de fondo full-bleed ═══ */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=80"
          alt="DesignConf 2026"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/40" />
      </div>

      {/* Gradiente primario sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 60%, color-mix(in srgb, var(--t-primary) 18%, transparent), transparent)",
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

      {/* ═══ Partículas flotantes ═══ */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/25"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            x: [0, 12 * (p.id % 2 === 0 ? 1 : -1), -8, 0],
            y: [0, -10 * (p.id % 3 === 0 ? 1 : -1), 6, 0],
            opacity: [0.1, 0.4, 0.1],
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-md border border-primary/20">
            <span className="material-symbols-outlined text-primary text-[14px]">location_on</span>
            <span className="text-[11px] text-fg-light/60 font-mono tracking-widest uppercase">
              CDMX · Sep 15-17
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
          </div>
        </motion.div>

        {/* Center — título + countdown */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight">
              <span
                className="text-gradient"
                style={{ textShadow: "0 0 80px color-mix(in srgb, var(--t-primary) 35%, transparent)" }}
              >
                DesignConf
              </span>
              <br />
              <span className="relative inline-block shimmer text-fg-light">2026</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 sm:mt-8"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="h-[3px] bg-primary rounded-full mb-5"
            />
            <p className="text-fg-light/40 text-base sm:text-lg leading-relaxed max-w-lg">
              El summit de diseño y tecnología más grande de LATAM.
              <br className="hidden sm:block" />
              3 días de inspiración, comunidad y futuro.
            </p>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-8"
          >
            <CountdownTimer targetDate="2026-09-15" variant="dark" />
          </motion.div>
        </div>

        {/* Bottom — stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex items-center gap-6 sm:gap-10 flex-wrap"
        >
          {stats.map((stat, i) => (
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
                  delay: 1.7 + i * 0.12,
                }}
              >
                <span className="font-mono text-2xl sm:text-3xl text-fg-light/90 font-bold">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1800} />
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
