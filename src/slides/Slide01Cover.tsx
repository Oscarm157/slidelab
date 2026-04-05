"use client";

import { deckConfig } from "@/config/deck.config";

// ─────────────────────────────────────────────
// Portada — Hero limpio, tipografía bold, espacio
// Menos es más. Que el título respire.
// ─────────────────────────────────────────────

export function Slide01Cover() {
  const navigate = () =>
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }));

  return (
    <div className="relative w-full h-full overflow-hidden bg-bg-dark">
      {/* Imagen hero */}
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay lateral suave */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      {/* ═══ Contenido — mitad izquierda ═══ */}
      <div className="absolute inset-0 flex flex-col justify-between px-8 sm:px-12 md:px-20 py-10 sm:py-14 z-10 max-w-3xl">

        {/* Top — badge sutil */}
        <div className="hero-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-sm">
            <span className="material-symbols-outlined text-white/60 text-[14px]">dashboard</span>
            <span className="text-[10px] text-white/50 font-mono tracking-widest uppercase">Slidelab · 2026</span>
          </div>
        </div>

        {/* Center — título + subtítulo */}
        <div>
          <div className="hero-fade-in-delayed">
            <h1
              className="font-body font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[110px] text-white uppercase leading-[0.85] tracking-tight"
              style={{ textShadow: "0 4px 40px rgba(0,0,0,0.4)" }}
            >
              {deckConfig.title}
            </h1>
          </div>

          <div className="hero-fade-in-delayed-2 mt-8 sm:mt-10">
            <div className="h-[3px] w-12 bg-primary rounded-full mb-5" />
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-sm">
              {deckConfig.subtitle}. Interactivas, animadas, compartibles por link.
            </p>
          </div>
        </div>

        {/* Bottom — CTAs + stat */}
        <div className="hero-fade-in-delayed-3 flex items-end justify-between gap-6">
          <div className="flex items-center gap-3">
            <button
              onClick={navigate}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/12 backdrop-blur-sm hover:bg-white/20 active:scale-95 transition-all"
            >
              <span className="text-sm text-white font-medium">Ver demo</span>
              <span className="material-symbols-outlined text-primary text-[16px]">arrow_forward</span>
            </button>
            <a
              href="/components"
              className="px-5 py-3 rounded-full text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Componentes
            </a>
          </div>

          {/* Stat compacto */}
          <div className="hidden sm:block text-right">
            <span className="font-mono text-2xl text-white/80 font-bold">44</span>
            <span className="block text-[11px] text-white/30 uppercase tracking-widest">componentes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
