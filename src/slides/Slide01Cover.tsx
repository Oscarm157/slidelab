"use client";

import { deckConfig } from "@/config/deck.config";

// ─────────────────────────────────────────────
// Portada — Hero moderno con tipografía bold
// Referencia: layout asimétrico, glassmorphism,
// texto gigante sobre imagen full-bleed
// ─────────────────────────────────────────────

export function Slide01Cover() {
  const navigate = () =>
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }));

  return (
    <div className="relative w-full h-full overflow-hidden bg-bg-dark">
      {/* Imagen hero full-bleed */}
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay — gradient lateral, no bloque negro */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* ═══ Badge top-left ═══ */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10 hero-fade-in z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
          <span className="material-symbols-outlined text-white text-[16px]">dashboard</span>
          <span className="text-[11px] text-white/70 font-medium tracking-wide uppercase">Slidelab</span>
        </div>
      </div>

      {/* ═══ Badge top-right ═══ */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-10 hero-fade-in z-10">
        <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
          <span className="text-[11px] text-white/60 font-mono tracking-wide">Presentaciones · 2026</span>
        </div>
      </div>

      {/* ═══ Contenido principal — alineado izquierda ═══ */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16 z-10">
        {/* Título gigante */}
        <div className="hero-fade-in-delayed">
          <h1
            className="font-body font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase leading-[0.9] tracking-tight max-w-4xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
          >
            {deckConfig.title}
          </h1>
        </div>

        {/* Línea accent */}
        <div className="hero-fade-in-delayed-2 mt-6 mb-8">
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>

        {/* Stat card + descripción */}
        <div className="hero-fade-in-delayed-2 flex items-end gap-5 flex-wrap">
          {/* Glassmorphism stat card */}
          <div className="px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="font-mono text-3xl sm:text-4xl text-white font-bold leading-none">44</div>
            <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1">componentes</div>
          </div>

          {/* Descripción */}
          <div className="max-w-xs">
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              Presentaciones web profesionales en minutos, no en días. Interactivas, animadas, compartibles por link.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-fade-in-delayed-3 flex items-center gap-3 mt-8">
          <button
            onClick={navigate}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/10 hover:bg-white/25 active:scale-95 transition-all"
          >
            <span className="text-sm text-white font-medium">Ver demo</span>
            <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
          </button>

          <a
            href="/components"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-all"
          >
            <span className="text-sm text-white/60 font-medium">Componentes</span>
          </a>
        </div>
      </div>

      {/* ═══ Iconos flotantes bottom-right ═══ */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 hero-fade-in-delayed-3 z-10">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-white/60 text-[18px]">grid_view</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-white/60 text-[18px]">palette</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-primary/80 backdrop-blur-md flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">play_arrow</span>
          </div>
        </div>
      </div>

      {/* ═══ Slide indicator bottom-left ═══ */}
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 hero-fade-in z-10">
        <span className="font-mono text-[11px] text-white/30 tracking-widest">01 / 06</span>
      </div>
    </div>
  );
}
