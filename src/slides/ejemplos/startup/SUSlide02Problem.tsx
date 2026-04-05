"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// ─────────────────────────────────────────────
// Slide 02 — El Problema
// Dato hero impactante + cards de dolor con urgencia
// ─────────────────────────────────────────────

const painPoints = [
  {
    num: "01",
    icon: "visibility_off",
    title: "Datos en 12+ herramientas",
    desc: "Analytics, CRM, soporte, producto — cada uno cuenta una historia distinta.",
    color: "#EF4444",
  },
  {
    num: "02",
    icon: "hourglass_top",
    title: "3 semanas por reporte",
    desc: "Los equipos de BI están saturados. Las decisiones se retrasan.",
    color: "#F59E0B",
  },
  {
    num: "03",
    icon: "trending_down",
    title: "40% de features no mueven la aguja",
    desc: "Sin feedback loop, se construye por intuición, no por evidencia.",
    color: "#EF4444",
  },
  {
    num: "04",
    icon: "group_off",
    title: "Product y Data no hablan igual",
    desc: "SQL vs tickets de Jira — la brecha sigue creciendo.",
    color: "#F59E0B",
  },
];

export function SUSlide02Problem() {
  return (
    <Slide variant="light" className="relative">
      {/* Noise texture sutil que sugiere caos */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-center h-full">
        {/* Columna izquierda — hero stat + título */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-sm text-muted/50 block mb-2">02</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight leading-[1.1]">
              Los equipos de producto
              <br />
              <span className="text-gradient">vuelan a ciegas</span>
            </h2>
          </motion.div>

          {/* Hero stat */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
            className="mt-8 relative"
          >
            <div className="absolute -inset-2 bg-red-500/5 rounded-2xl blur-xl" />
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-500/10">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-5xl sm:text-6xl font-bold text-red-500/80">
                  <AnimatedCounter target={72} suffix="%" duration={1500} />
                </span>
              </div>
              <p className="text-fg-dark/60 text-sm mt-2 max-w-xs">
                de Product Managers dicen que toman decisiones sin datos suficientes
              </p>
              <p className="text-muted/50 text-[10px] font-mono mt-2 uppercase tracking-wider">
                ProductPlan Report 2025
              </p>
            </div>
          </motion.div>
        </div>

        {/* Columna derecha — pain point cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {painPoints.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: 20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow overflow-hidden group"
            >
              {/* Número grande de fondo */}
              <span
                className="absolute -top-2 -right-1 font-mono text-7xl font-bold opacity-[0.04] select-none group-hover:opacity-[0.07] transition-opacity"
              >
                {p.num}
              </span>

              {/* Ícono con color de urgencia */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${p.color}12` }}
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{ color: p.color }}
                >
                  {p.icon}
                </span>
              </div>

              <p className="font-semibold text-fg-dark text-sm mb-1">{p.title}</p>
              <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
