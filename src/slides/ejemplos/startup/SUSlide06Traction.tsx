"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MetricDelta } from "@/components/MetricDelta";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 06 — Tracción y Métricas
// Hero growth stat + KPIs con sparklines + revenue live
// ─────────────────────────────────────────────

const kpis = [
  {
    label: "MRR", value: 420, prefix: "$", suffix: "K",
    change: "+32%", up: true, icon: "attach_money",
    spark: [180, 210, 240, 280, 320, 370, 420],
  },
  {
    label: "Clientes", value: 187, suffix: "",
    change: "+45%", up: true, icon: "business",
    spark: [45, 68, 89, 112, 140, 165, 187],
  },
  {
    label: "NPS", value: 72, suffix: "",
    change: "+8pts", up: true, icon: "sentiment_very_satisfied",
    spark: [55, 58, 62, 64, 67, 70, 72],
  },
  {
    label: "Churn", value: 2.1, suffix: "%",
    change: "-15%", up: false, icon: "trending_down",
    spark: [4.8, 4.1, 3.5, 3.0, 2.6, 2.3, 2.1],
  },
];

// Revenue counter en vivo
function LiveRevenue() {
  const [revenue, setRevenue] = useState(420000);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue((r) => r + Math.floor(Math.random() * 80 + 20));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono tabular-nums">
      ${revenue.toLocaleString("en-US")}
    </span>
  );
}

// Mini sparkline SVG inline
function MiniSparkline({ data, up }: { data: number[]; up: boolean }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 60;
  const h = 24;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width={w} height={h} className="opacity-60">
      <polyline
        points={points}
        fill="none"
        stroke={up ? "#10B981" : "#EF4444"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SUSlide06Traction() {
  return (
    <Slide variant="light" className="relative">
      {/* Gradiente sutil L→R sugiriendo crecimiento */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--t-primary) 3%, transparent) 100%)",
      }} />

      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <span className="font-mono text-sm text-muted/30 block mb-2">06</span>
          </StaggerItem>

          {/* Hero growth stat */}
          <StaggerItem>
            <div className="flex items-center gap-6 mb-8">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-primary/8 rounded-2xl blur-xl" />
                <div className="relative glow-accent rounded-2xl px-6 py-4 bg-white/80 backdrop-blur-sm">
                  <span className="font-mono text-5xl sm:text-6xl font-bold text-gradient">
                    <AnimatedCounter target={32} suffix="%" duration={1500} />
                  </span>
                </div>
              </motion.div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-fg-dark tracking-tight">
                  Crecimiento mensual
                </h2>
                <p className="text-muted text-sm mt-1">
                  18 meses en el mercado. Compuesto. Consistente.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* KPI cards con sparklines */}
          <StaggerItem>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {kpis.map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-[16px]">{kpi.icon}</span>
                    </div>
                    <span className={`font-mono text-xs font-semibold ${kpi.up ? "text-emerald-500" : "text-rose-500"}`}>
                      {kpi.change}
                    </span>
                  </div>

                  <p className="font-mono text-2xl font-bold text-fg-dark">
                    <AnimatedCounter target={kpi.value} prefix={kpi.prefix} suffix={kpi.suffix} decimals={kpi.label === "Churn" ? 1 : 0} duration={1200} />
                  </p>
                  <p className="text-muted text-[10px] uppercase tracking-widest mt-0.5">{kpi.label}</p>

                  {/* Sparkline */}
                  <div className="mt-2">
                    <MiniSparkline data={kpi.spark} up={kpi.up} />
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerItem>

          {/* Revenue deltas + live counter */}
          <StaggerItem>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <MetricDelta label="Revenue mensual" from={85} to={420} prefix="$" suffix="K" variant="light" />
              <MetricDelta label="Usuarios activos diarios" from={1200} to={8400} variant="light" />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-center"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                  <span className="text-[10px] text-emerald-500 uppercase tracking-widest font-semibold">Live</span>
                </div>
                <p className="font-mono text-xl font-bold text-fg-dark">
                  <LiveRevenue />
                </p>
                <p className="text-muted text-[10px] uppercase tracking-widest mt-0.5">MRR Actual</p>
              </motion.div>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
