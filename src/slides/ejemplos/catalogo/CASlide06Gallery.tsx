"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal } from "@/components/StaggerReveal";
import { ImageGrid } from "@/components/ImageGrid";

// ─────────────────────────────────────────────
// Slide 06 — Galería de productos
// 6 imágenes de hardware premium, 3 columnas
// ─────────────────────────────────────────────

export function CASlide06Gallery() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-4">
            Galería
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
            Nuestros{" "}
            <span className="text-gradient">productos</span>
          </h2>
          <p className="text-muted text-base mt-3 max-w-lg mx-auto">
            Hardware diseñado para profesionales. Cada ángulo cuenta una historia de precisión.
          </p>
        </div>

        {/* Grid de imágenes */}
        <ImageGrid
          variant="light"
          columns={3}
          images={[
            {
              src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
              alt: "ProStation X1 — Vista lateral",
              caption: "ProStation X1",
            },
            {
              src: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80",
              alt: "ProStation Lite — Ultraligera",
              caption: "ProStation Lite",
            },
            {
              src: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
              alt: "ProDisplay 32\" — Monitor externo",
              caption: "ProDisplay 32\"",
            },
            {
              src: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&q=80",
              alt: "ProKeys — Teclado mecánico",
              caption: "ProKeys MX",
            },
            {
              src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
              alt: "ProStation Ultra — Estación de trabajo",
              caption: "ProStation Ultra",
            },
            {
              src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
              alt: "ProAudio — Auriculares inalámbricos",
              caption: "ProAudio ANC",
            },
          ]}
        />
      </StaggerReveal>
    </Slide>
  );
}
