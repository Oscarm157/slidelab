"use client";

// ────────────────────────���──────────────────��─
// Slide 01 — Cover: Metrica AI
// Hero dark con visualización de datos abstracta
// ─────────────────────────────────────────────

export function SUSlide01Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-bg-dark">
      {/* Gradiente radial índigo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 65% 45%, color-mix(in srgb, var(--t-primary) 12%, transparent), transparent)",
        }}
      />

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col justify-between px-8 sm:px-12 md:px-20 py-10 sm:py-14 z-10">
        {/* Top — badge */}
        <div className="hero-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-sm">
            <span className="material-symbols-outlined text-primary text-[14px]">rocket_launch</span>
            <span className="text-[10px] text-white/50 font-mono tracking-widest uppercase">
              Serie A · 2026
            </span>
          </div>
        </div>

        {/* Center — título + subtítulo + visualización */}
        <div className="flex items-center justify-between gap-12">
          <div className="max-w-xl">
            <div className="hero-fade-in-delayed">
              <h1
                className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-fg-light leading-[0.9] tracking-tight"
                style={{ textShadow: "0 4px 40px rgba(99,102,241,0.15)" }}
              >
                Metrica
                <br />
                <span className="text-primary">AI</span>
              </h1>
            </div>

            <div className="hero-fade-in-delayed-2 mt-6 sm:mt-8">
              <div className="h-[3px] w-12 bg-primary rounded-full mb-4" />
              <p className="text-fg-light/40 text-sm sm:text-base leading-relaxed max-w-md">
                Inteligencia de datos para equipos de producto. Decisiones más rápidas, basadas en evidencia real.
              </p>
            </div>
          </div>

          {/* Visualización abstracta de datos */}
          <div className="hidden lg:flex items-center justify-center relative w-80 h-80">
            {/* Anillos orbitales */}
            {[200, 260, 320].map((size, i) => (
              <div
                key={size}
                className="absolute rounded-full border border-primary/10"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${20 + i * 10}s linear infinite${i % 2 === 1 ? " reverse" : ""}`,
                }}
              />
            ))}
            {/* Puntos en órbita */}
            {[0, 45, 120, 200, 280].map((deg, i) => (
              <div
                key={deg}
                className="absolute w-2 h-2 rounded-full bg-primary"
                style={{
                  transform: `rotate(${deg}deg) translateX(${100 + i * 15}px)`,
                  opacity: 0.3 + i * 0.15,
                  animation: `pulse-dot 2s ease-in-out ${i * 0.3}s infinite`,
                }}
              />
            ))}
            {/* Centro */}
            <div className="w-16 h-16 rounded-2xl bg-primary/15 backdrop-blur-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">insights</span>
            </div>
          </div>
        </div>

        {/* Bottom — stats */}
        <div className="hero-fade-in-delayed-3 flex items-center gap-8 sm:gap-12">
          {[
            { value: "$47B", label: "Market Size" },
            { value: "3x", label: "Faster Insights" },
            { value: "98%", label: "Accuracy" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
              {i > 0 && <div className="w-px h-8 bg-fg-light/10" />}
              <div>
                <span className="font-mono text-xl sm:text-2xl text-fg-light/80 font-bold">
                  {stat.value}
                </span>
                <span className="block text-[9px] text-fg-light/30 uppercase tracking-widest mt-0.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS para animación de spin */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
