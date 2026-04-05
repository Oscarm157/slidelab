"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 07 — Manufactura & Operaciones
// Plantas, capacidad, eficiencia, calidad
// ─────────────────────────────────────────────

const plants = [
  { city: "Guadalajara, MX", type: "Implantes ortopédicos", capacity: 92, employees: 1400, certifications: ["ISO 13485", "FDA QSR", "MDSAP"] },
  { city: "Minneapolis, US", type: "Dispositivos cardíacos", capacity: 87, employees: 980, certifications: ["ISO 13485", "FDA QSR"] },
  { city: "Munich, DE", type: "Instrumental quirúrgico", capacity: 78, employees: 620, certifications: ["ISO 13485", "CE MDR", "MDSAP"] },
  { city: "Shenzhen, CN", type: "Diagnóstico in-vitro", capacity: 95, employees: 850, certifications: ["ISO 13485", "NMPA"] },
];

const opMetrics = [
  { label: "Tasa de defectos", value: "0.02%", icon: "verified", trend: "↓ 40% vs 2024", color: "#10B981" },
  { label: "On-time delivery", value: "98.7%", icon: "local_shipping", trend: "↑ 1.2pts", color: "#10B981" },
  { label: "Tiempo ciclo promedio", value: "4.2 días", icon: "schedule", trend: "↓ 18%", color: "#10B981" },
  { label: "Utilización equipos", value: "89%", icon: "precision_manufacturing", trend: "↑ 3pts", color: "#14B8A6" },
];

export function RASlide07Operations() {
  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 50% at 60% 70%, color-mix(in srgb, var(--t-primary) 8%, transparent), transparent)",
      }} />

      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
              <div>
                <span className="font-mono text-sm text-fg-light/35 block mb-2">07</span>
                <h2 className="font-display text-3xl sm:text-4xl text-fg-light tracking-tight">
                  Manufactura <span className="text-gradient">& Operaciones</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="font-mono text-3xl font-bold text-gradient">
                    <AnimatedCounter target={4} duration={800} />
                  </span>
                  <p className="text-fg-light/30 text-[11px] uppercase tracking-widest">Plantas GMP</p>
                </div>
                <div className="w-px h-10 bg-primary/20" />
                <div className="text-right">
                  <span className="font-mono text-3xl font-bold text-fg-light/80">
                    <AnimatedCounter target={3850} suffix="+" duration={1500} />
                  </span>
                  <p className="text-fg-light/30 text-[11px] uppercase tracking-widest">Operarios</p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Operation metrics */}
          <StaggerItem>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {opMetrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="bg-card/50 rounded-xl p-4 border border-white/[0.04] hover:border-primary/15 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">{m.icon}</span>
                  </div>
                  <p className="font-mono text-xl font-bold text-fg-light">{m.value}</p>
                  <p className="text-fg-light/30 text-[10px] uppercase tracking-widest mt-0.5">{m.label}</p>
                  <span className="font-mono text-[10px] mt-1 inline-block" style={{ color: m.color }}>{m.trend}</span>
                </motion.div>
              ))}
            </div>
          </StaggerItem>

          {/* Plants grid */}
          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plants.map((p, i) => (
                <motion.div
                  key={p.city}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="bg-card/40 rounded-xl p-4 border border-white/[0.04] hover:border-primary/15 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-fg-light font-semibold text-sm">{p.city}</p>
                      <p className="text-fg-light/30 text-[11px]">{p.type}</p>
                    </div>
                    <span className="font-mono text-xs text-fg-light/40">{p.employees} emp.</span>
                  </div>

                  {/* Capacity bar */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.capacity}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, var(--t-primary), var(--t-primary-light))" }}
                      />
                    </div>
                    <span className="font-mono text-xs text-primary font-semibold">{p.capacity}%</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {p.certifications.map((c) => (
                      <span key={c} className="px-1.5 py-0.5 rounded bg-primary/8 text-primary/50 text-[8px] font-mono">{c}</span>
                    ))}
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
