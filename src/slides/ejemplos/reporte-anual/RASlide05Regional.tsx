"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 05 — Desempeño Regional
// Mapa abstracto + barras por región + top mercados
// ─────────────────────────────────────────────

const regions = [
  { name: "Norteamérica", revenue: 398, pct: 47, growth: "+16%", markets: "US, Canadá, México", flag: "🇺🇸" },
  { name: "Europa", revenue: 220, pct: 26, growth: "+14%", markets: "Alemania, España, Francia, UK", flag: "🇪🇺" },
  { name: "Asia-Pacífico", revenue: 144, pct: 17, growth: "+31%", markets: "Japón, China, Corea, Australia", flag: "🇯🇵" },
  { name: "LATAM", revenue: 59, pct: 7, growth: "+22%", markets: "Brasil, Colombia, Chile, Argentina", flag: "🇧🇷" },
  { name: "Otros", revenue: 26, pct: 3, growth: "+8%", markets: "Medio Oriente, África", flag: "🌍" },
];

const topMarkets = [
  { country: "Estados Unidos", revenue: 340, share: "40.1%" },
  { country: "Alemania", revenue: 78, share: "9.2%" },
  { country: "Japón", revenue: 65, share: "7.7%" },
  { country: "China", revenue: 52, share: "6.1%" },
  { country: "Brasil", revenue: 38, share: "4.5%" },
];

export function RASlide05Regional() {
  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 50% at 40% 50%, color-mix(in srgb, var(--t-primary) 10%, transparent), transparent)",
      }} />

      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
              <div>
                <span className="font-mono text-sm text-fg-light/20 block mb-2">05</span>
                <h2 className="font-display text-3xl sm:text-4xl text-fg-light tracking-tight">
                  Presencia <span className="text-gradient">global</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/15">
                <span className="material-symbols-outlined text-primary text-[18px]">public</span>
                <span className="font-mono text-2xl font-bold text-primary">
                  <AnimatedCounter target={28} duration={1200} />
                </span>
                <span className="text-fg-light/40 text-xs">países</span>
              </div>
            </div>
          </StaggerItem>

          {/* Regiones con barras */}
          <StaggerItem>
            <div className="bg-card/40 rounded-2xl p-5 border border-white/[0.04] mb-5">
              <p className="text-fg-light/30 text-[10px] uppercase tracking-widest mb-4">Revenue por región (USD millones)</p>
              <div className="space-y-4">
                {regions.map((r, i) => (
                  <motion.div
                    key={r.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{r.flag}</span>
                        <span className="text-fg-light/70 text-sm font-medium">{r.name}</span>
                        <span className="text-fg-light/25 text-[10px]">({r.markets})</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-emerald-400 font-semibold">{r.growth}</span>
                        <span className="font-mono text-sm text-fg-light/60 font-bold">${r.revenue}M</span>
                      </div>
                    </div>
                    <div className="h-3 bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${r.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, var(--t-primary), var(--t-primary-light))`,
                          opacity: 1 - i * 0.15,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Top 5 mercados */}
          <StaggerItem>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-fg-light/25 text-[10px] uppercase tracking-widest">Top mercados:</span>
              {topMarkets.map((m, i) => (
                <motion.div
                  key={m.country}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/60 border border-white/[0.04]"
                >
                  <span className="text-fg-light/60 text-xs">{m.country}</span>
                  <span className="font-mono text-[10px] text-primary font-semibold">${m.revenue}M</span>
                </motion.div>
              ))}
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
