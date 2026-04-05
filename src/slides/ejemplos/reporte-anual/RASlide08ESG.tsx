"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 08 — ESG & Sustentabilidad
// Métricas ambientales, sociales, gobernanza
// ─────────────────────────────────────────────

const pillars = [
  {
    letter: "E",
    title: "Environmental",
    color: "#10B981",
    metrics: [
      { label: "Reducción CO₂", value: "32%", detail: "vs baseline 2020" },
      { label: "Energía renovable", value: "68%", detail: "del consumo total" },
      { label: "Residuos reciclados", value: "91%", detail: "de producción" },
      { label: "Consumo agua", value: "-24%", detail: "vs 2023" },
    ],
  },
  {
    letter: "S",
    title: "Social",
    color: "#3B82F6",
    metrics: [
      { label: "Diversidad liderazgo", value: "44%", detail: "mujeres en C-suite" },
      { label: "Accidentes laborales", value: "0.3", detail: "por 100 empleados" },
      { label: "Horas de capacitación", value: "48h", detail: "promedio/empleado" },
      { label: "Satisfacción empleados", value: "87%", detail: "eNPS score" },
    ],
  },
  {
    letter: "G",
    title: "Governance",
    color: "#8B5CF6",
    metrics: [
      { label: "Board independencia", value: "75%", detail: "directores independientes" },
      { label: "Auditorías internas", value: "24", detail: "completadas en 2025" },
      { label: "Compliance score", value: "98%", detail: "FDA + ISO cumplimiento" },
      { label: "Ética reportes", value: "100%", detail: "investigados en <72h" },
    ],
  },
];

export function RASlide08ESG() {
  return (
    <Slide variant="light" className="relative">
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
              <div>
                <span className="font-mono text-sm text-muted/50 block mb-2">08</span>
                <h2 className="font-display text-3xl sm:text-4xl text-fg-dark tracking-tight">
                  ESG <span className="text-gradient">& Sustentabilidad</span>
                </h2>
                <p className="mt-2 text-muted text-sm">Comprometidos con impacto positivo medible.</p>
              </div>
              {/* Calificación ESG */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-primary/8 rounded-2xl blur-xl" />
                <div className="relative glow-accent rounded-2xl px-5 py-3 bg-white/80 backdrop-blur-sm text-center">
                  <p className="font-mono text-3xl font-bold text-gradient">AA</p>
                  <p className="text-muted text-[11px] uppercase tracking-widest">MSCI ESG Rating</p>
                </div>
              </motion.div>
            </div>
          </StaggerItem>

          {/* 3 pilares ESG */}
          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pillars.map((pillar, pi) => (
                <motion.div
                  key={pillar.letter}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + pi * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden relative"
                >
                  {/* Letra grande de fondo */}
                  <span className="absolute -top-4 -right-2 font-display text-[120px] font-bold select-none pointer-events-none" style={{ color: pillar.color, opacity: 0.04 }}>
                    {pillar.letter}
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${pillar.color}15` }}>
                        <span className="font-mono text-sm font-bold" style={{ color: pillar.color }}>{pillar.letter}</span>
                      </div>
                      <p className="font-semibold text-fg-dark text-sm">{pillar.title}</p>
                    </div>

                    <div className="space-y-3">
                      {pillar.metrics.map((m, mi) => (
                        <motion.div
                          key={m.label}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + pi * 0.12 + mi * 0.06 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-fg-dark/70 text-xs">{m.label}</span>
                            <span className="font-mono text-sm font-bold" style={{ color: pillar.color }}>{m.value}</span>
                          </div>
                          <p className="text-muted text-[10px]">{m.detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
