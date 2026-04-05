"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 02 — El Reto del Cliente
// ─────────────────────────────────────────────

const challenges = [
  { icon: "trending_down", value: 23, suffix: "%", label: "Caída en margen operativo", desc: "En los últimos 3 años, el margen EBITDA pasó de 28% a 21.5%.", color: "#EF4444" },
  { icon: "inventory_2", value: 47, suffix: " días", label: "Inventario en exceso", desc: "47 días de inventario vs benchmark de 28 días en la industria.", color: "#F59E0B" },
  { icon: "group_off", value: 34, suffix: "%", label: "Rotación de talento", desc: "Rotación anual en mandos medios, 2x el promedio del sector.", color: "#EF4444" },
];

export function COSlide02Challenge() {
  return (
    <Slide variant="light" className="relative">
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <span className="font-mono text-sm text-muted/50 block mb-2">02</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight mb-2">
              El reto de <span className="text-gradient">Grupo Industrial Monterrey</span>
            </h2>
            <p className="text-muted text-sm mb-8">Diagnóstico inicial basado en 6 semanas de análisis.</p>
          </StaggerItem>

          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {challenges.map((c, i) => (
                <motion.div key={c.label}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow relative overflow-hidden">
                  {/* Número grande de fondo */}
                  <span className="absolute -top-4 -right-2 font-mono text-[100px] font-bold select-none pointer-events-none" style={{ color: c.color, opacity: 0.05 }}>!</span>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${c.color}12` }}>
                      <span className="material-symbols-outlined text-[24px]" style={{ color: c.color }}>{c.icon}</span>
                    </div>
                    <p className="font-mono text-4xl font-bold mb-1" style={{ color: c.color }}>
                      <AnimatedCounter target={c.value} suffix={c.suffix} duration={1400} />
                    </p>
                    <p className="font-semibold text-fg-dark text-sm mb-2">{c.label}</p>
                    <p className="text-muted text-xs leading-relaxed">{c.desc}</p>
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
