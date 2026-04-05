"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 04 — Portfolio de Productos
// 4 divisiones con métricas + growth indicators
// ─────────────────────────────────────────────

const divisions = [
  {
    icon: "orthopedics",
    name: "Implantes Ortopédicos",
    desc: "Prótesis de cadera, rodilla y columna. Titanio y PEEK de grado médico.",
    revenue: "$312M",
    growth: "+22%",
    units: "148K",
    highlight: true,
    products: ["Prótesis de cadera VX-400", "Implante espinal FlexCore", "Rodilla VX-Knee Pro"],
  },
  {
    icon: "cardiology",
    name: "Dispositivos Cardíacos",
    desc: "Stents, marcapasos y válvulas bioprotésicas de última generación.",
    revenue: "$246M",
    growth: "+15%",
    units: "890K",
    highlight: false,
    products: ["Stent coronario FlowMax III", "Marcapasos PulseSync", "Válvula aórtica BioValve"],
  },
  {
    icon: "surgical",
    name: "Instrumental Quirúrgico",
    desc: "Sets instrumentales para cirugía robótica y mínimamente invasiva.",
    revenue: "$178M",
    growth: "+11%",
    units: "67K",
    highlight: false,
    products: ["Kit robótico SurgiBot", "Instrumental laparoscópico", "Cauterizador UltraPrecise"],
  },
  {
    icon: "biotech",
    name: "Diagnóstico In-Vitro",
    desc: "Reactivos y equipos para laboratorio clínico y point-of-care.",
    revenue: "$111M",
    growth: "+28%",
    units: "1.3M",
    highlight: false,
    products: ["Analizador QuickLab 500", "Panel cardiaco rápido", "Kit de coagulación CoagCheck"],
  },
];

export function RASlide04Products() {
  return (
    <Slide variant="light" className="relative">
      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="mb-6">
              <span className="font-mono text-sm text-muted/50 block mb-2">04</span>
              <h2 className="font-display text-3xl sm:text-4xl text-fg-dark tracking-tight">
                Portfolio de <span className="text-gradient">productos</span>
              </h2>
              <p className="mt-2 text-muted text-sm">4 divisiones. 180+ dispositivos con registro regulatorio activo.</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {divisions.map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className={`rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow overflow-hidden relative ${
                    d.highlight ? "bg-primary/5 border border-primary/15" : "bg-white/70 backdrop-blur-sm"
                  }`}
                >
                  {d.highlight && <div className="absolute inset-0 glow-accent opacity-30 pointer-events-none" />}

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-[22px]">{d.icon}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-fg-dark text-sm">{d.name}</p>
                          <p className="text-muted text-[11px]">{d.desc}</p>
                        </div>
                      </div>
                    </div>

                    {/* Metrics row */}
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-black/[0.04]">
                      <div>
                        <p className="font-mono text-lg font-bold text-fg-dark">{d.revenue}</p>
                        <p className="text-muted text-[11px] uppercase tracking-wider">Revenue</p>
                      </div>
                      <div className="w-px h-8 bg-black/[0.06]" />
                      <div>
                        <p className="font-mono text-sm font-semibold text-emerald-600">{d.growth}</p>
                        <p className="text-muted text-[11px] uppercase tracking-wider">YoY</p>
                      </div>
                      <div className="w-px h-8 bg-black/[0.06]" />
                      <div>
                        <p className="font-mono text-sm font-bold text-fg-dark">{d.units}</p>
                        <p className="text-muted text-[11px] uppercase tracking-wider">Unidades</p>
                      </div>
                    </div>

                    {/* Top products */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {d.products.map((p) => (
                        <span key={p} className="px-2 py-0.5 rounded-md bg-primary/8 text-primary/70 text-[11px] font-mono">
                          {p}
                        </span>
                      ))}
                    </div>
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
