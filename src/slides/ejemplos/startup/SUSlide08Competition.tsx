"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { ComparisonTable } from "@/components/ComparisonTable";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 08 — Landscape Competitivo
// Quote hero + tabla con highlights + precio visual
// ─────────────────────────────────────────────

const columns = [
  { label: "Feature" },
  { label: "Metrica AI", highlighted: true },
  { label: "Amplitude" },
  { label: "Mixpanel" },
  { label: "Looker" },
];

const rows = [
  { feature: "IA generativa para insights", values: [true, false, false, false] },
  { feature: "Lenguaje natural → SQL", values: [true, false, false, true] },
  { feature: "Unificación multi-herramienta", values: [true, false, false, true] },
  { feature: "Impact analysis automático", values: [true, false, true, false] },
  { feature: "Setup en < 10 min", values: [true, true, true, false] },
  { feature: "Dashboards colaborativos", values: [true, true, true, true] },
  { feature: "Soporte en español", values: [true, false, false, false] },
];

const pricing = [
  { name: "Metrica AI", price: 299, highlight: true },
  { name: "Mixpanel", price: 449, highlight: false },
  { name: "Amplitude", price: 549, highlight: false },
  { name: "Looker", price: 3000, highlight: false },
];

export function SUSlide08Competition() {
  const maxPrice = Math.max(...pricing.map((p) => p.price));

  return (
    <Slide variant="light" className="relative">
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <span className="font-mono text-sm text-muted/50 block mb-2">08</span>
          </StaggerItem>

          {/* Quote hero con text-gradient */}
          <StaggerItem>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-fg-dark tracking-tight">
                Los incumbentes <span className="text-muted/40">analizan.</span>
                <br />
                Metrica <span className="text-gradient">entiende y recomienda.</span>
              </h2>
            </motion.div>
          </StaggerItem>

          {/* Tabla comparativa */}
          <StaggerItem>
            <ComparisonTable columns={columns} rows={rows} variant="light" />
          </StaggerItem>

          {/* Precio visual — barras proporcionales */}
          <StaggerItem>
            <div className="mt-6 bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <p className="text-muted text-[10px] uppercase tracking-widest mb-4">Precio mensual comparado</p>
              <div className="space-y-3">
                {pricing.map((p, i) => (
                  <div key={p.name} className="flex items-center gap-4">
                    <span className={`text-xs w-20 shrink-0 ${p.highlight ? "font-semibold text-fg-dark" : "text-muted"}`}>
                      {p.name}
                    </span>
                    <div className="flex-1 h-6 bg-black/[0.03] rounded-lg overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(p.price / maxPrice) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full rounded-lg flex items-center justify-end px-2 ${
                          p.highlight ? "glow-accent" : ""
                        }`}
                        style={{
                          background: p.highlight
                            ? "linear-gradient(90deg, var(--t-primary), var(--t-primary-light))"
                            : `color-mix(in srgb, var(--t-muted) 20%, transparent)`,
                        }}
                      >
                        <span className={`font-mono text-[10px] font-semibold ${
                          p.highlight ? "text-white" : "text-fg-dark/50"
                        }`}>
                          ${p.price.toLocaleString()}/mo
                        </span>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
