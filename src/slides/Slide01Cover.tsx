import { Slide } from "@/components/Slide";
import { deckConfig } from "@/config/deck.config";

// ─────────────────────────────────────────────
// Portada — Primera impresión
// Ejemplo genérico que toma datos del config
// ─────────────────────────────────────────────

export function Slide01Cover() {
  return (
    <Slide variant="dark" className="relative">
      {/* Sutil gradiente de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in srgb, var(--color-primary) 6%, transparent), transparent)`,
        }}
      />

      <div className="relative text-center max-w-3xl mx-auto">
        {/* Línea decorativa */}
        <div className="hero-fade-in flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary/40" />
          <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            {deckConfig.author}
          </span>
          <div className="h-px w-12 bg-primary/40" />
        </div>

        {/* Título principal */}
        <h1 className="hero-fade-in-delayed font-display text-4xl sm:text-5xl md:text-7xl leading-[1.1] mb-4">
          {deckConfig.title}
        </h1>

        {/* Subtítulo */}
        <p className="hero-fade-in-delayed-2 text-fg-light/60 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10">
          {deckConfig.subtitle}
        </p>

        {/* CTA sutil */}
        <div className="hero-fade-in-delayed-3">
          <button
            onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }))}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary text-sm hover:bg-primary/10 transition-colors"
          >
            Comenzar
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </Slide>
  );
}
