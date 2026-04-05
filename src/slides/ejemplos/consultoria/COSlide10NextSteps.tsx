"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 10 — Siguientes Pasos & CTA
// ─────────────────────────────────────────────

const nextSteps = [
  { num: "01", title: "Alineación con board", desc: "Presentación de esta propuesta al consejo directivo.", icon: "groups", timeline: "Semana 1" },
  { num: "02", title: "Firma de engagement letter", desc: "Términos, alcance y confidencialidad.", icon: "draw", timeline: "Semana 2" },
  { num: "03", title: "Kick-off diagnóstico", desc: "Inicio de inmersión con equipo Apex on-site.", icon: "rocket_launch", timeline: "Semana 3" },
];

export function COSlide10NextSteps() {
  return (
    <Slide variant="light" className="relative">
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <span className="font-mono text-sm text-muted/50 block mb-2">10</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight mb-8">
              Siguientes <span className="text-gradient">pasos</span>
            </h2>
          </StaggerItem>

          {/* 3 pasos */}
          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {nextSteps.map((s, i) => (
                <motion.div key={s.num}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow relative overflow-hidden">
                  <span className="absolute -top-3 -right-1 font-mono text-[80px] font-bold text-primary/[0.04] select-none pointer-events-none">{s.num}</span>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                        <span className="font-mono text-sm font-bold">{s.num}</span>
                      </div>
                      <span className="font-mono text-[10px] text-primary px-2 py-0.5 rounded-lg bg-primary/8">{s.timeline}</span>
                    </div>
                    <p className="font-semibold text-fg-dark text-base mb-1">{s.title}</p>
                    <p className="text-muted text-xs">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerItem>

          {/* ROI hero + CTA */}
          <StaggerItem>
            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative bg-white/50 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden text-center">
              <div className="absolute inset-0 glow-accent opacity-20 pointer-events-none" />
              <div className="relative">
                <p className="text-muted text-xs uppercase tracking-widest mb-2">ROI esperado del proyecto</p>
                <motion.div initial={{ scale: 0.85, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 }}>
                  <span className="font-mono text-6xl sm:text-7xl font-bold text-gradient shimmer inline-block">
                    <AnimatedCounter target={3.2} suffix="x" decimals={1} duration={1800} />
                  </span>
                </motion.div>
                <p className="text-muted text-sm mt-2 mb-5">$45M MXN de ahorro anual estimado sobre inversión de $3.4M MXN</p>

                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <motion.a href="mailto:propuestas@apexconsulting.mx"
                    whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium text-sm shadow-[0_4px_20px_color-mix(in_srgb,var(--t-primary)_30%,transparent)]">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    Agendar reunión con board
                  </motion.a>
                  <span className="text-muted text-xs font-mono">propuestas@apexconsulting.mx · +52 81 1234 5678</span>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
