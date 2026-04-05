"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MilestoneTimeline } from "@/components/MilestoneTimeline";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 06 — Investigación & Desarrollo
// Pipeline de innovación + inversión + patentes
// ─────────────────────────────────────────────

const pipeline = [
  { date: "Q1 2025", title: "VX-Knee Pro Gen 3", description: "Aprobación FDA 510(k). Superficie de contacto biónica.", icon: "orthopedics", status: "completed" as const },
  { date: "Q2 2025", title: "FlowMax III Stent", description: "CE Mark obtenido. Polímero biodegradable de 3ra gen.", icon: "cardiology", status: "completed" as const },
  { date: "Q3 2025", title: "QuickLab 500", description: "Analizador point-of-care. 12 biomarcadores en 8 minutos.", icon: "biotech", status: "completed" as const },
  { date: "Q4 2025", title: "SurgiBot v2.0", description: "Cirugía robótica con guía AI. 7 aprobaciones regulatorias.", icon: "surgical", status: "current" as const },
  { date: "2026", title: "BioValve + Neuro", description: "Válvula aórtica transcatéter + primera línea neuro.", icon: "science", status: "upcoming" as const },
];

export function RASlide06RnD() {
  return (
    <Slide variant="light" className="relative">
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
              <div>
                <span className="font-mono text-sm text-muted/50 block mb-2">06</span>
                <h2 className="font-display text-3xl sm:text-4xl text-fg-dark tracking-tight">
                  Investigación <span className="text-gradient">& Desarrollo</span>
                </h2>
              </div>
            </div>
          </StaggerItem>

          {/* Hero stats I+D */}
          <StaggerItem>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { icon: "science", value: 94, prefix: "$", suffix: "M", label: "Inversión I+D", sub: "11.1% del revenue" },
                { icon: "groups", value: 620, label: "Científicos e ingenieros", sub: "14.8% del headcount" },
                { icon: "description", value: 47, label: "Patentes activas", sub: "+12 nuevas en 2025" },
                { icon: "approval", value: 7, label: "Aprobaciones FDA", sub: "+3 vs año anterior" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="bg-white/70 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">{s.icon}</span>
                  </div>
                  <p className="font-mono text-2xl font-bold text-fg-dark">
                    <AnimatedCounter target={s.value} prefix={s.prefix} suffix={s.suffix} duration={1200} />
                  </p>
                  <p className="text-fg-dark text-[10px] uppercase tracking-widest mt-0.5">{s.label}</p>
                  <p className="text-muted text-[10px] mt-0.5">{s.sub}</p>
                </motion.div>
              ))}
            </div>
          </StaggerItem>

          {/* Pipeline timeline */}
          <StaggerItem>
            <div className="bg-white/50 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <p className="text-muted text-[10px] uppercase tracking-widest mb-4">Pipeline de innovación 2025-2026</p>
              <MilestoneTimeline milestones={pipeline} variant="light" />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
