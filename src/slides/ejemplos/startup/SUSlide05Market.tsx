"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 05 — Tamaño del Mercado
// $47B hero con shimmer + charts custom animados
// ─────────────────────────────────────────────

const segments = [
  { label: "Product Analytics", value: 47, pct: 42 },
  { label: "BI Tools", value: 28, pct: 25 },
  { label: "Data Platforms", value: 15, pct: 13 },
  { label: "AI Insights", value: 10, pct: 9 },
  { label: "Otros", value: 12, pct: 11 },
];

const yearlyGrowth = [
  { year: "2021", value: 22 },
  { year: "2022", value: 28 },
  { year: "2023", value: 33 },
  { year: "2024", value: 38 },
  { year: "2025", value: 44 },
  { year: "2026", value: 47 },
];

export function SUSlide05Market() {
  const maxGrowth = Math.max(...yearlyGrowth.map((y) => y.value));

  return (
    <Slide variant="dark" className="relative">
      {/* Gradiente agresivo */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 55% 55% at 50% 35%, color-mix(in srgb, var(--t-primary) 18%, transparent), transparent)",
      }} />

      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <span className="font-mono text-sm text-fg-light/20 block mb-2">05</span>
          </StaggerItem>

          {/* Hero stat — $47B con glow */}
          <StaggerItem>
            <div className="text-center mb-10 relative">
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-primary/10 rounded-full blur-3xl" />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative shimmer inline-block"
              >
                <span className="font-mono text-7xl sm:text-8xl md:text-9xl font-bold text-gradient">
                  <AnimatedCounter target={47} prefix="$" suffix="B" duration={2000} />
                </span>
              </motion.div>
              <p className="text-fg-light/40 text-base mt-2">
                TAM Global — Product Analytics + BI + AI Insights
              </p>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
              >
                <span className="material-symbols-outlined text-emerald-400 text-[16px]">trending_up</span>
                <span className="text-emerald-400 font-mono text-sm font-semibold">+18% YoY</span>
              </motion.div>
            </div>
          </StaggerItem>

          {/* Dos paneles: segmentos + crecimiento anual */}
          <StaggerItem>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Segmentos — barras horizontales */}
              <div className="bg-card/40 rounded-2xl p-5 border border-white/[0.04]">
                <p className="text-fg-light/30 text-[10px] uppercase tracking-widest mb-4">Segmentos del mercado</p>
                <div className="space-y-3">
                  {segments.map((s, i) => (
                    <div key={s.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-fg-light/60 text-xs">{s.label}</span>
                        <span className="font-mono text-xs text-fg-light/40">${s.value}B</span>
                      </div>
                      <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, var(--t-primary), var(--t-primary-light))`,
                            opacity: 0.9 - i * 0.12,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Crecimiento anual — bar chart vertical */}
              <div className="bg-card/40 rounded-2xl p-5 border border-white/[0.04]">
                <p className="text-fg-light/30 text-[10px] uppercase tracking-widest mb-4">Crecimiento anual del mercado</p>
                <div className="flex items-end justify-between gap-3 h-40">
                  {yearlyGrowth.map((y, i) => {
                    const heightPct = (y.value / maxGrowth) * 100;
                    const isLast = i === yearlyGrowth.length - 1;
                    return (
                      <div key={y.year} className="flex-1 flex flex-col items-center gap-2">
                        {/* Value label */}
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className={`font-mono text-[10px] ${isLast ? "text-primary font-semibold" : "text-fg-light/30"}`}
                        >
                          ${y.value}B
                        </motion.span>
                        {/* Bar */}
                        <div className="w-full flex-1 flex items-end">
                          <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay: 0.3 + i * 0.08,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className={`w-full rounded-t-lg origin-bottom ${isLast ? "glow-accent" : ""}`}
                            style={{
                              height: `${heightPct}%`,
                              background: isLast
                                ? "linear-gradient(to top, var(--t-primary), var(--t-primary-light))"
                                : `linear-gradient(to top, color-mix(in srgb, var(--t-primary) ${30 + i * 8}%, transparent), color-mix(in srgb, var(--t-primary) ${15 + i * 5}%, transparent))`,
                            }}
                          />
                        </div>
                        {/* Year label */}
                        <span className={`font-mono text-[9px] ${isLast ? "text-fg-light/60" : "text-fg-light/25"}`}>
                          {y.year}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
