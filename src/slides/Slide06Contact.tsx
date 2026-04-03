"use client";

import { AnimatedCounter } from "@/components/AnimatedCounter";

// ─────────────────────────────────────────────
// Cierre — Retorno + contacto
// Patrón: s11-retorno de Central Ocho
// ─────────────────────────────────────────────

const backing = [
  { icon: "home", title: "Activo físico" },
  { icon: "location_on", title: "Ubicación validada" },
  { icon: "verified", title: "Track record" },
  { icon: "shield", title: "Estructura legal" },
];

export function Slide06Contact() {
  return (
    <div className="w-full h-full overflow-y-auto scrollbar-hide touch-pan-y bg-bg-dark text-fg-light">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-14 pt-16 sm:pt-14 pb-10 sm:pb-12 min-h-full flex flex-col justify-center">
        <div className="stagger-in flex flex-col">
          <div className="mb-5">
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-fg-light">
              SIGUIENTE PASO
            </h2>
            <p className="mt-1 text-sm sm:text-base text-muted">
              Los números respaldan la decisión
            </p>
          </div>

          {/* 3 métricas grandes */}
          <div className="flex items-start justify-center mb-5">
            <div className="flex-1 text-center px-3 sm:px-6">
              <div className="text-gradient font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-1">
                <AnimatedCounter target={15} suffix="%" duration={1500} />
              </div>
              <p className="text-muted text-xs sm:text-sm">Rendimiento anual</p>
            </div>
            <div className="border-l border-card-border self-stretch" />
            <div className="flex-1 text-center px-3 sm:px-6">
              <div className="text-fg-light font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-1">
                Anual
              </div>
              <p className="text-muted text-xs sm:text-sm">Pago de rendimientos</p>
            </div>
            <div className="border-l border-card-border self-stretch" />
            <div className="flex-1 text-center px-3 sm:px-6">
              <div className="text-gradient font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-1">
                <AnimatedCounter target={30} duration={1500} />
              </div>
              <p className="text-muted text-xs sm:text-sm">Meses máximo</p>
            </div>
          </div>

          <div className="border-t border-card-border mb-5" />

          {/* Respaldo */}
          <p className="uppercase tracking-wider text-primary text-xs font-medium mb-4 text-center">
            Respaldo y Seguridad
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {backing.map((s) => (
              <div
                key={s.title}
                className="bg-card border border-card-border/50 rounded-xl p-4 flex flex-col items-center text-center gap-2 transition-all duration-300 hover:border-primary/25 hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-primary text-[22px]">{s.icon}</span>
                <h3 className="text-fg-light font-semibold text-xs sm:text-sm leading-tight">{s.title}</h3>
              </div>
            ))}
          </div>

          {/* Contacto */}
          <div className="bg-card border border-card-border/50 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-fg-light font-semibold text-sm mb-1">¿Listo para conversar?</p>
              <p className="text-muted text-xs">hola@ejemplo.com · +52 123 456 7890</p>
            </div>
            <a
              href="mailto:hola@ejemplo.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 text-primary text-sm hover:bg-primary/10 transition-all shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
