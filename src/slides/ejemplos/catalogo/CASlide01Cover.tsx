"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// ─────────────────────────────────────────────
// Slide 01 — Cover: TechPro
// Hero title premium, stats animados, estilo hardware de lujo
// ─────────────────────────────────────────────

// Partículas flotantes de circuito
const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: 8 + Math.random() * 84,
  y: 8 + Math.random() * 84,
  size: 2 + Math.random() * 3,
  duration: 7 + Math.random() * 10,
  delay: Math.random() * 4,
}));

export function CASlide01Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-bg-dark">
      {/* ═══ Capas de fondo ═══ */}

      {/* Gradiente primario — emerald glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 60% 45%, color-mix(in srgb, var(--t-primary) 20%, transparent), transparent)",
        }}
      />
      {/* Segundo gradiente — esquina inferior */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 35% 35% at 25% 80%, color-mix(in srgb, var(--t-primary-light) 8%, transparent), transparent)",
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

      {/* ═══ Grid decorativo ═══ */}
      <div className="absolute inset-0 pointer-events-none hidden md:block opacity-[0.04]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="var(--t-primary)" strokeWidth="0.1" />
          ))}
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="var(--t-primary)" strokeWidth="0.1" />
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
            x: [0, 12 * (p.id % 2 === 0 ? 1 : -1), -8 * (p.id % 2 === 0 ? 1 : -1), 0],
            y: [0, -10 * (p.id % 3 === 0 ? 1 : -1), 6, 0],
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
            <span className="material-symbols-outlined text-primary text-[14px]">devices</span>
            <span className="text-[10px] text-fg-light/50 font-mono tracking-widest uppercase">
              Catálogo 2026
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
          </div>
        </div>

        {/* Center — título con text-gradient */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              <span
                className="text-gradient"
                style={{ textShadow: "0 0 80px color-mix(in srgb, var(--t-primary) 30%, transparent)" }}
              >
                Diseñado
              </span>
              <br />
              <span className="relative inline-block shimmer text-fg-light">
                para impresionar
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
              Hardware premium que redefine la experiencia.
              <br className="hidden sm:block" />
              Tecnología de siguiente nivel para profesionales exigentes.
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
            { value: 50, suffix: "+", label: "Productos" },
            { value: 12, suffix: "", label: "Países" },
            { value: 99.7, suffix: "%", label: "Satisfacción" },
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
