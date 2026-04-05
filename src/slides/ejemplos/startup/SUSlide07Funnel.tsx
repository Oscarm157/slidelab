"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { FunnelChart } from "@/components/FunnelChart";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 07 — Funnel de Ventas
// Hero conversion rate + funnel + revenue highlights
// ─────────────────────────────────────────────

const stages = [
  { label: "Visitantes web", value: 45000, icon: "language" },
  { label: "Signups (free trial)", value: 6800, icon: "person_add" },
  { label: "Activados (onboarding)", value: 3400, icon: "check_circle" },
  { label: "Pagos (conversión)", value: 1020, icon: "credit_card" },
  { label: "Enterprise upsell", value: 187, icon: "diamond" },
];

export function SUSlide07Funnel() {
  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 60%, color-mix(in srgb, var(--t-primary) 10%, transparent), transparent)",
      }} />

      <StaggerReveal className="relative">
        <StaggerItem>
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div>
              <span className="font-mono text-sm text-fg-light/35 block mb-2">07</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-light tracking-tight">
                Funnel de <span className="text-gradient">conversión</span>
              </h2>
            </div>

            {/* Hero conversion rate */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
              className="flex items-center gap-4 px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/15"
            >
              <span className="font-mono text-3xl font-bold text-emerald-400">
                <AnimatedCounter target={15} suffix="%" duration={1200} />
              </span>
              <div>
                <p className="text-emerald-400/80 text-xs font-semibold">Trial-to-Paid</p>
                <p className="text-fg-light/30 text-[10px]">Top quartile B2B SaaS</p>
              </div>
            </motion.div>
          </div>
        </StaggerItem>

        <StaggerItem>
          <FunnelChart stages={stages} variant="dark" />
        </StaggerItem>

        {/* Revenue por stage */}
        <StaggerItem>
          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-6">
            {[
              { label: "ARR Starter", value: "$612K", icon: "star" },
              { label: "ARR Growth", value: "$2.1M", icon: "trending_up" },
              { label: "ARR Enterprise", value: "$1.3M", icon: "diamond" },
            ].map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-1">
                  <span className="material-symbols-outlined text-primary text-[14px]">{r.icon}</span>
                </div>
                <p className="font-mono text-sm font-bold text-fg-light/80">{r.value}</p>
                <p className="text-fg-light/40 text-[11px] uppercase tracking-wider">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
