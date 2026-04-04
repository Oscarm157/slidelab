"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 4 — Cómo funciona: 3 pasos
// ─────────────────────────────────────────────

const steps = [
  {
    number: "01",
    icon: "palette",
    title: "Personaliza",
    desc: "Sube tu logo, elige tus colores y tipografía. El sistema genera una instrucción lista para Claude Code.",
    code: "Actualiza mi presentación con color principal #CC0000...",
  },
  {
    number: "02",
    icon: "dashboard_customize",
    title: "Construye",
    desc: "Dile a la IA qué slides necesitas. Usa los 55 componentes — gráficas, timelines, pricing, mapas, todo.",
    code: "Agrega un slide con PricingTable de 3 planes...",
  },
  {
    number: "03",
    icon: "cloud_upload",
    title: "Comparte",
    desc: "Un comando y tu presentación tiene URL propia. Comparte por WhatsApp, email o en persona.",
    code: "$ vercel → tu-pitch.vercel.app ✓",
  },
];

export function Slide04Data() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        <StaggerItem>
          <div className="text-center mb-12">
            <span className="font-mono text-sm text-fg-dark/20 block mb-2">04</span>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-3">Así de simple</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-fg-dark">
              Tres pasos. Cero código.
            </h2>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-px bg-primary/15" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div key={step.number} className="relative" style={{ animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.1}s both` }}>
                  <div className="w-[52px] h-[52px] rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-5 relative z-10 shadow-[0_0_20px_rgba(139,105,20,0.2)]">
                    <span className="font-mono text-sm font-semibold">{step.number}</span>
                  </div>

                  <div className="bg-white/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] relative overflow-hidden">
                    <span className="absolute top-3 right-4 font-mono text-5xl text-primary/5 leading-none select-none">{step.number}</span>
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-primary text-[22px]">{step.icon}</span>
                      </div>
                      <h3 className="font-display text-xl mb-2">{step.title}</h3>
                      <p className="text-muted text-sm leading-relaxed mb-4">{step.desc}</p>
                      <div className="bg-fg-dark/5 rounded-xl px-4 py-3">
                        <code className="text-xs text-primary/80">{step.code}</code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
