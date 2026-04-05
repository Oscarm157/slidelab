"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 02 — Highlights del Año
// 6 métricas hero con comparativa YoY
// ─────────────────────────────────────────────

const highlights = [
  { icon: "payments", label: "Revenue", value: 847, prefix: "$", suffix: "M", change: "+18%", up: true, color: "#10B981" },
  { icon: "trending_up", label: "EBITDA", value: 237, prefix: "$", suffix: "M", change: "+23%", up: true, color: "#10B981" },
  { icon: "inventory_2", label: "Unidades producidas", value: 2.4, suffix: "M", decimals: 1, change: "+12%", up: true, color: "#10B981" },
  { icon: "science", label: "Inversión en I+D", value: 94, prefix: "$", suffix: "M", change: "+31%", up: true, color: "#14B8A6" },
  { icon: "approval", label: "Aprobaciones FDA", value: 7, suffix: "", change: "+3 vs 2024", up: true, color: "#14B8A6" },
  { icon: "workspace_premium", label: "Net Promoter Score", value: 78, suffix: "", change: "+5pts", up: true, color: "#10B981" },
];

export function RASlide02Highlights() {
  return (
    <Slide variant="light" className="relative">
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="mb-8">
              <span className="font-mono text-sm text-muted/50 block mb-2">02</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight">
                Highlights <span className="text-gradient">2025</span>
              </h2>
              <p className="mt-2 text-muted text-sm">Un año récord en todas las métricas clave.</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-[20px]">{h.icon}</span>
                    </div>
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-full" style={{
                      color: h.color,
                      background: `${h.color}15`,
                    }}>
                      {h.change}
                    </span>
                  </div>

                  <p className="font-mono text-3xl sm:text-4xl font-bold text-fg-dark">
                    <AnimatedCounter target={h.value} prefix={h.prefix} suffix={h.suffix} decimals={h.decimals} duration={1400} />
                  </p>
                  <p className="text-muted text-xs uppercase tracking-widest mt-1">{h.label}</p>
                </motion.div>
              ))}
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
