"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 10 — Outlook 2026 & Cierre
// Targets del próximo año + mensaje del CEO + CTA
// ─────────────────────────────────────────────

const targets = [
  { label: "Revenue target", value: 980, prefix: "$", suffix: "M", icon: "payments", desc: "+16% vs 2025" },
  { label: "Nuevos productos", value: 5, icon: "science", desc: "3 implantes + 2 diagnóstico" },
  { label: "Expansión a", value: 4, suffix: " países", icon: "public", desc: "India, Tailandia, Arabia Saudita, Nigeria" },
  { label: "Inversión I+D", value: 115, prefix: "$", suffix: "M", icon: "biotech", desc: "11.7% del revenue proyectado" },
];

const priorities = [
  { icon: "smart_toy", title: "IA en manufactura", desc: "Implementar inspección visual automatizada con machine learning en 4 plantas." },
  { icon: "diversity_3", title: "Adquisiciones estratégicas", desc: "Pipeline de 3 targets en neuroestimulación y robótica quirúrgica." },
  { icon: "eco", title: "Net zero para 2030", desc: "Roadmap acelerado: 85% energía renovable y compensación total de carbono." },
];

export function RASlide10Outlook() {
  return (
    <Slide variant="light" className="relative">
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="mb-6">
              <span className="font-mono text-sm text-muted/50 block mb-2">10</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight">
                Outlook <span className="text-gradient">2026</span>
              </h2>
            </div>
          </StaggerItem>

          {/* Target cards */}
          <StaggerItem>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {targets.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">{t.icon}</span>
                  </div>
                  <p className="font-mono text-2xl sm:text-3xl font-bold text-fg-dark">
                    <AnimatedCounter target={t.value} prefix={t.prefix} suffix={t.suffix} duration={1400} />
                  </p>
                  <p className="text-fg-dark text-[10px] uppercase tracking-widest mt-0.5">{t.label}</p>
                  <p className="text-muted text-[10px] mt-1">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </StaggerItem>

          {/* Prioridades estratégicas */}
          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {priorities.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="flex gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">{p.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-fg-dark text-sm">{p.title}</p>
                    <p className="text-muted text-xs mt-0.5">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerItem>

          {/* CEO quote + CTA */}
          <StaggerItem>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative bg-white/50 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden"
            >
              {/* Decorativo */}
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-full" />

              <div className="flex items-start gap-5 pl-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80"
                  alt="CEO"
                  className="w-14 h-14 rounded-full object-cover shrink-0 hidden sm:block"
                />
                <div>
                  <p className="text-fg-dark/70 text-sm italic leading-relaxed">
                    &ldquo;2025 fue un año transformador. Pero el verdadero impacto está por delante — nuestra misión de hacer accesible la tecnología médica de clase mundial apenas comienza.&rdquo;
                  </p>
                  <div className="mt-3 flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <p className="text-fg-dark font-semibold text-sm">Dr. Elena Vásquez</p>
                      <p className="text-muted text-[10px]">CEO, Vertex Medical Industries</p>
                    </div>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium text-sm shadow-[0_4px_20px_color-mix(in_srgb,var(--t-primary)_30%,transparent)]"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      Descargar reporte completo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
