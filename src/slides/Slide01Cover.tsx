"use client";

import { deckConfig } from "@/config/deck.config";

// ─────────────────────────────────────────────
// Portada — Video o imagen de fondo con título
// Patrón: hero fullscreen como Central Ocho
// ─────────────────────────────────────────────

export function Slide01Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-bg-dark">
      {/* Imagen de fondo */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Label superior */}
      <div className="absolute top-20 left-0 right-0 flex justify-center hero-fade-in">
        <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60 font-medium">
          Presentación · 2026
        </span>
      </div>

      {/* Contenido centrado abajo */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 sm:pb-28 px-6">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] text-white text-center hero-fade-in-delayed uppercase">
          {deckConfig.title}
        </h1>
        <p className="mt-4 text-sm sm:text-base uppercase tracking-[0.2em] text-primary font-medium hero-fade-in-delayed-2">
          {deckConfig.subtitle}
        </p>
        <p className="mt-2 text-sm text-white/50 hero-fade-in-delayed-2">
          {deckConfig.author}
        </p>

        <div className="mt-10 hero-fade-in-delayed-3">
          <button
            onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }))}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 active:scale-95 transition-all"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70 font-medium">
              Iniciar
            </span>
            <span className="material-symbols-outlined text-primary text-[18px]">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
