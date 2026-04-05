"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 10 — Roadmap
// Línea vertical animada + progress indicator + milestone cards
// ─────────────────────────────────────────────

const milestones = [
  { date: "Q1 2026", title: "Serie A close", desc: "Cerrar ronda de $5M. Equipo core a 30.", icon: "flag", status: "done" as const },
  { date: "Q2 2026", title: "IA v2 + Enterprise", desc: "Salesforce, HubSpot, SAP. Modelo fine-tuned por vertical.", icon: "smart_toy", status: "active" as const },
  { date: "Q3 2026", title: "Expansión US", desc: "Oficina en Austin. Equipo de ventas para mercado norteamericano.", icon: "flight_takeoff", status: "upcoming" as const },
  { date: "Q4 2026", title: "Marketplace", desc: "API pública + marketplace de integraciones para partners.", icon: "store", status: "upcoming" as const },
  { date: "Q1 2027", title: "Serie B prep", desc: "Target: $2M ARR, 500+ clientes.", icon: "rocket_launch", status: "upcoming" as const },
];

const completedCount = milestones.filter((m) => m.status === "done").length;
const progressPct = Math.round(((completedCount + 0.5) / milestones.length) * 100); // +0.5 para el "active"

export function SUSlide10Roadmap() {
  return (
    <Slide variant="light" className="relative">
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <span className="font-mono text-sm text-muted/50 block mb-2">10</span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight">
                  Roadmap
                </h2>
              </div>

              {/* Progress indicator */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/8"
              >
                <div className="w-24 h-2 bg-black/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progressPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
                <span className="font-mono text-xs text-primary font-semibold">{progressPct}%</span>
              </motion.div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="relative">
              {/* Línea vertical animada */}
              <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-black/[0.06] rounded-full">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full origin-top"
                  style={{
                    height: `${progressPct}%`,
                    background: "linear-gradient(to bottom, var(--t-primary), color-mix(in srgb, var(--t-primary) 30%, transparent))",
                  }}
                />
              </div>

              {/* Milestones */}
              <div className="space-y-6">
                {milestones.map((m, i) => {
                  const isDone = m.status === "done";
                  const isActive = m.status === "active";

                  return (
                    <motion.div
                      key={m.date}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex gap-5 items-start"
                    >
                      {/* Nodo */}
                      <div className="relative shrink-0">
                        {isActive && (
                          <motion.div
                            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 w-12 h-12 rounded-full bg-primary/20"
                          />
                        )}
                        <div className={`relative w-12 h-12 rounded-full flex items-center justify-center ${
                          isDone
                            ? "bg-primary text-white"
                            : isActive
                            ? "bg-primary/15 border-2 border-primary"
                            : "bg-black/[0.04]"
                        }`}>
                          {isDone ? (
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.4 + i * 0.12 }}
                              className="material-symbols-outlined text-[20px]"
                            >
                              check
                            </motion.span>
                          ) : (
                            <span className={`material-symbols-outlined text-[20px] ${isActive ? "text-primary" : "text-muted/40"}`}>
                              {m.icon}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`flex-1 pb-2 ${m.status === "upcoming" ? "opacity-50" : ""}`}>
                        <div className="flex items-center gap-3 mb-1">
                          <span className={`font-mono text-xs font-semibold ${isActive ? "text-gradient" : isDone ? "text-primary" : "text-muted"}`}>
                            {m.date}
                          </span>
                          {isActive && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary pulse-dot" />
                              En curso
                            </span>
                          )}
                        </div>
                        <p className="font-semibold text-fg-dark text-base">{m.title}</p>
                        <p className="text-muted text-xs mt-0.5">{m.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
