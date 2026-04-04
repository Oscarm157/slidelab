"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 04 — Cómo Funciona
// 4 pasos con línea SVG animada + micro-datos
// ─────────────────────────────────────────────

const steps = [
  {
    num: 1, title: "Conecta", icon: "cable",
    desc: "Integra tus herramientas en 5 minutos. Sin código.",
    stat: "5 min setup",
    status: "done" as const,
  },
  {
    num: 2, title: "Unifica", icon: "hub",
    desc: "Consolidamos datos de producto, revenue y soporte en un modelo.",
    stat: "12+ fuentes",
    status: "done" as const,
  },
  {
    num: 3, title: "Pregunta", icon: "chat",
    desc: "Haz preguntas en lenguaje natural. La IA genera análisis al instante.",
    stat: "Lenguaje natural",
    status: "active" as const,
  },
  {
    num: 4, title: "Actúa", icon: "rocket_launch",
    desc: "Recomendaciones accionables. Mide el impacto automáticamente.",
    stat: "ROI automático",
    status: "upcoming" as const,
  },
];

export function SUSlide04HowItWorks() {
  return (
    <Slide variant="light" className="relative">
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="mb-10">
              <span className="font-mono text-sm text-muted/30 block mb-2">04</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight">
                De datos fragmentados a
                <br />
                <span className="text-gradient">decisiones inteligentes</span>
              </h2>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="relative">
              {/* Línea conectora animada (desktop) */}
              <div className="hidden lg:block absolute top-12 left-[calc(12.5%)] right-[calc(12.5%)] h-[2px]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full origin-left"
                  style={{ background: "linear-gradient(90deg, var(--t-primary), color-mix(in srgb, var(--t-primary) 20%, transparent))" }}
                />
              </div>

              {/* Steps grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, i) => {
                  const isDone = step.status === "done";
                  const isActive = step.status === "active";

                  return (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                      className={`relative text-center ${isActive ? "z-10" : ""}`}
                    >
                      {/* Nodo circular */}
                      <div className="relative mx-auto mb-4">
                        {isActive && (
                          <div className="absolute inset-0 w-24 h-24 -top-6 -left-6 mx-auto bg-primary/8 rounded-full blur-xl" />
                        )}
                        <motion.div
                          className={`relative w-12 h-12 rounded-full mx-auto flex items-center justify-center ${
                            isDone
                              ? "bg-primary text-white"
                              : isActive
                              ? "bg-primary/15 border-2 border-primary glow-accent"
                              : "bg-black/[0.04] text-muted"
                          }`}
                          animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                          transition={isActive ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
                        >
                          {isDone ? (
                            <span className="material-symbols-outlined text-[20px]">check</span>
                          ) : (
                            <span className={`material-symbols-outlined text-[20px] ${isActive ? "text-primary" : ""}`}>
                              {step.icon}
                            </span>
                          )}
                        </motion.div>
                      </div>

                      <p className="font-semibold text-fg-dark text-base mb-1">{step.title}</p>
                      <p className="text-muted text-xs leading-relaxed mb-3 max-w-[200px] mx-auto">{step.desc}</p>

                      {/* Micro dato */}
                      <span className="inline-block font-mono text-[10px] text-primary font-semibold px-2 py-1 rounded-lg bg-primary/8">
                        {step.stat}
                      </span>
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
