"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { Slide } from "@/components/Slide";

// ─────────────────────────────────────────────
// Slide 12 — The Ask: $5M Serie A
// Donut animado + barras de progreso + metrics proyectadas
// ─────────────────────────────────────────────

const funds = [
  {
    icon: "code",
    title: "Producto",
    pct: 40,
    color: "var(--t-primary)",
    desc: "Motor de IA v2 + 3 integraciones enterprise",
    metric: "3 integraciones enterprise",
  },
  {
    icon: "rocket_launch",
    title: "Go-to-Market",
    pct: 35,
    color: "var(--t-primary-light)",
    desc: "Equipo de ventas LATAM + US, partnerships",
    metric: "$2M ARR target",
  },
  {
    icon: "groups",
    title: "Equipo",
    pct: 25,
    color: "color-mix(in srgb, var(--t-primary) 60%, white)",
    desc: "15 ingenieros senior + 5 data scientists",
    metric: "45 personas en 12 meses",
  },
];

// SVG donut custom animado
function AnimatedDonut() {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        {/* Fondo del ring */}
        <circle cx="60" cy="60" r={radius} fill="none" stroke="var(--t-card-border)" strokeWidth="10" opacity="0.3" />

        {/* Segmentos animados */}
        {funds.map((f, i) => {
          const segmentLength = (f.pct / 100) * circumference;
          const gap = 3;
          const currentOffset = offset;
          offset += segmentLength + gap;

          return (
            <motion.circle
              key={f.title}
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke={f.color}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${segmentLength - gap} ${circumference - segmentLength + gap}`}
              strokeDashoffset={-currentOffset}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}
      </svg>

      {/* Centro del donut */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <span className="font-mono text-4xl sm:text-5xl font-bold text-gradient">
          <AnimatedCounter target={5} prefix="$" suffix="M" duration={1500} />
        </span>
        <span className="text-[10px] text-primary/60 uppercase tracking-widest mt-1">Serie A</span>
      </motion.div>
    </div>
  );
}

export function SUSlide12Ask() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <div className="mb-4">
            <span className="font-mono text-sm text-muted/30 block mb-2">12</span>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-dark tracking-tight">
              The <span className="text-gradient">Ask</span>
            </h2>
          </div>
        </StaggerItem>

        {/* Hero: donut + uso de fondos */}
        <StaggerItem>
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
            {/* Donut chart */}
            <div className="relative">
              {/* Glow detrás */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-110" />
              <AnimatedDonut />
            </div>

            {/* Cards de uso de fondos */}
            <div className="space-y-4">
              {funds.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -2, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    {/* Ícono */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `color-mix(in srgb, ${f.color} 15%, transparent)` }}
                    >
                      <span className="material-symbols-outlined text-[22px]" style={{ color: f.color }}>
                        {f.icon}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Título + porcentaje */}
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-fg-dark text-sm">{f.title}</p>
                        <span className="font-mono text-lg font-bold" style={{ color: f.color }}>
                          {f.pct}%
                        </span>
                      </div>

                      {/* Barra de progreso animada */}
                      <div className="h-1.5 bg-black/[0.04] rounded-full overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${f.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 1.0 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full"
                          style={{ background: f.color }}
                        />
                      </div>

                      {/* Descripción + métrica */}
                      <p className="text-muted text-xs">{f.desc}</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="material-symbols-outlined text-[14px] text-primary/50">arrow_forward</span>
                        <span className="font-mono text-[11px] text-primary/70 font-medium">{f.metric}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </StaggerItem>

        {/* Bottom CTA */}
        <StaggerItem>
          <div className="mt-8 text-center">
            <motion.a
              href="mailto:invest@metrica.ai"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium text-sm shadow-[0_4px_20px_color-mix(in_srgb,var(--t-primary)_30%,transparent)] hover:shadow-[0_8px_30px_color-mix(in_srgb,var(--t-primary)_40%,transparent)] transition-shadow"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Agendar call
            </motion.a>
            <p className="text-muted/40 text-xs font-mono mt-3">
              invest@metrica.ai · metrica.ai/deck
            </p>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
