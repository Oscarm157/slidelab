"use client";

import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { QuoteBlock } from "@/components/QuoteBlock";

// ─────────────────────────────────────────────
// Métricas — Grandes números + highlight banner
// Patrón: s08-estrategia y s11-retorno de Central Ocho
// ─────────────────────────────────────────────

const phases = [
  {
    fase: "Q1–Q2",
    value: 265,
    suffix: " ud.",
    label: "Unidades vendidas",
    status: "Crecimiento sostenido en preventa",
    bg: "bg-bg-light/70 border border-card-border/30",
    textColor: "text-fg-dark",
    valueColor: "text-primary",
    faseColor: "text-fg-dark/50",
  },
  {
    fase: "Q3–Q4",
    value: 360,
    suffix: " ud.",
    label: "Proyección de cierre",
    status: "Aceleración por nueva estrategia comercial",
    bg: "bg-primary/10 border border-primary/20",
    textColor: "text-fg-dark",
    valueColor: "text-primary",
    faseColor: "text-primary/70",
  },
  {
    fase: "Anual",
    value: 625,
    suffix: " ud.",
    label: "Total proyectado al cierre",
    status: "Récord histórico de la operación",
    bg: "bg-primary border border-primary",
    textColor: "text-white",
    valueColor: "text-white",
    faseColor: "text-white/70",
  },
];

export function Slide04Data() {
  return (
    <Slide variant="light">
      <div className="stagger-in">
        <div className="mb-6">
          <span className="font-mono text-sm text-fg-dark/20 block mb-2">04</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-fg-dark">
            RESULTADOS COMERCIALES
          </h2>
          <p className="mt-1 text-sm sm:text-base text-muted">
            Crecimiento trimestral · Proyección anual
          </p>
        </div>

        {/* 3 phase cards con flechas */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-2 sm:gap-0 mb-6">
          {phases.map((p, i) => (
            <div key={p.fase} className="flex items-center sm:flex-1">
              <div
                className={`${p.bg} rounded-xl p-5 sm:p-6 text-center w-full flex flex-col justify-between`}
                style={{ opacity: 0, animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.18}s forwards` }}
              >
                <p className={`text-lg sm:text-xl font-bold uppercase tracking-wider mb-2 ${p.faseColor}`}>
                  {p.fase}
                </p>
                <div className={`font-mono text-3xl sm:text-4xl font-medium mb-1 ${p.valueColor}`}>
                  <AnimatedCounter target={p.value} suffix={p.suffix} duration={1200} />
                </div>
                <p className={`text-sm font-medium mb-2 ${p.textColor}`}>{p.label}</p>
                <p className={`text-xs ${p.textColor === "text-white" ? "text-white/60" : "text-muted"}`}>
                  {p.status}
                </p>
              </div>

              {i < phases.length - 1 && (
                <span
                  className="text-primary text-2xl sm:text-3xl font-light mx-2 sm:mx-3 shrink-0 hidden sm:block"
                  style={{ opacity: 0, animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.18 + 0.09}s forwards` }}
                >
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Highlight banner */}
        <div className="bg-white border border-[#ddd] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shadow-md shadow-black/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-[22px]">trending_up</span>
            </div>
            <div>
              <p className="text-muted/70 text-xs mb-0.5">Crecimiento vs año anterior</p>
              <span className="text-primary font-mono text-2xl sm:text-3xl font-medium">
                +52% <span className="text-lg text-muted">interanual</span>
              </span>
            </div>
          </div>
          <div className="sm:text-right sm:border-l sm:border-[#ddd] sm:pl-5">
            <p className="text-muted/70 text-xs mb-0.5">Facturación proyectada</p>
            <span className="text-gradient font-mono text-xl sm:text-2xl font-medium">
              $8.4M USD
            </span>
          </div>
        </div>

        <QuoteBlock
          text="Los números hablan mejor cuando el producto tiene fundamento. Aquí lo tiene."
          variant="light"
        />
      </div>
    </Slide>
  );
}
