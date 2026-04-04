"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { KPIRow } from "@/components/KPIRow";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 03 — Desempeño Financiero
// Revenue chart animado + KPIs + margen evolution
// ─────────────────────────────────────────────

const revenueByYear = [
  { year: "2020", value: 520 },
  { year: "2021", value: 580 },
  { year: "2022", value: 645 },
  { year: "2023", value: 690 },
  { year: "2024", value: 718 },
  { year: "2025", value: 847 },
];

const kpis = [
  { label: "Revenue", value: 847, prefix: "$", suffix: "M", icon: "payments", change: 18 },
  { label: "Gross Margin", value: 62, suffix: "%", icon: "pie_chart", change: 3 },
  { label: "EBITDA", value: 237, prefix: "$", suffix: "M", icon: "trending_up", change: 23 },
  { label: "EPS", value: 4.82, prefix: "$", decimals: 2, icon: "monetization_on", change: 15 },
];

const revenueBySegment = [
  { segment: "Implantes ortopédicos", value: 312, pct: 37, color: "var(--t-primary)" },
  { segment: "Dispositivos cardíacos", value: 246, pct: 29, color: "var(--t-primary-light)" },
  { segment: "Instrumental quirúrgico", value: 178, pct: 21, color: "color-mix(in srgb, var(--t-primary) 60%, white)" },
  { segment: "Diagnóstico in-vitro", value: 111, pct: 13, color: "color-mix(in srgb, var(--t-primary) 40%, white)" },
];

export function RASlide03Revenue() {
  const maxRev = Math.max(...revenueByYear.map((r) => r.value));

  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 50% at 50% 30%, color-mix(in srgb, var(--t-primary) 12%, transparent), transparent)",
      }} />

      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <span className="font-mono text-sm text-fg-light/20 block mb-2">03</span>
            <h2 className="font-display text-3xl sm:text-4xl text-fg-light tracking-tight mb-6">
              Desempeño <span className="text-gradient">financiero</span>
            </h2>
          </StaggerItem>

          {/* KPI Row */}
          <StaggerItem>
            <KPIRow items={kpis} variant="dark" />
          </StaggerItem>

          <StaggerItem>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
              {/* Revenue evolution chart */}
              <div className="bg-card/40 rounded-2xl p-5 border border-white/[0.04]">
                <p className="text-fg-light/30 text-[10px] uppercase tracking-widest mb-4">Revenue anual (USD millones)</p>
                <div className="flex items-end justify-between gap-3 h-36">
                  {revenueByYear.map((r, i) => {
                    const heightPct = (r.value / maxRev) * 100;
                    const isLast = i === revenueByYear.length - 1;
                    return (
                      <div key={r.year} className="flex-1 flex flex-col items-center gap-2">
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.08 }}
                          className={`font-mono text-[10px] ${isLast ? "text-primary font-bold" : "text-fg-light/25"}`}
                        >
                          ${r.value}
                        </motion.span>
                        <div className="w-full flex-1 flex items-end">
                          <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className={`w-full rounded-t-lg origin-bottom ${isLast ? "glow-accent" : ""}`}
                            style={{
                              height: `${heightPct}%`,
                              background: isLast
                                ? "linear-gradient(to top, var(--t-primary), var(--t-primary-light))"
                                : `linear-gradient(to top, color-mix(in srgb, var(--t-primary) ${25 + i * 6}%, transparent), color-mix(in srgb, var(--t-primary) ${12 + i * 4}%, transparent))`,
                            }}
                          />
                        </div>
                        <span className={`font-mono text-[9px] ${isLast ? "text-fg-light/60" : "text-fg-light/20"}`}>{r.year}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Revenue por segmento */}
              <div className="bg-card/40 rounded-2xl p-5 border border-white/[0.04]">
                <p className="text-fg-light/30 text-[10px] uppercase tracking-widest mb-4">Revenue por segmento</p>
                <div className="space-y-3">
                  {revenueBySegment.map((s, i) => (
                    <div key={s.segment}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-fg-light/60 text-xs">{s.segment}</span>
                        <span className="font-mono text-xs text-fg-light/40">${s.value}M ({s.pct}%)</span>
                      </div>
                      <div className="h-2.5 bg-white/[0.04] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full"
                          style={{ background: s.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
