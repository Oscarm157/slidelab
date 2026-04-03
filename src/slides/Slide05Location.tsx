"use client";

import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageZoom } from "@/components/ImageZoom";

// ─────────────────────────────────────────────
// Producto — Detalle visual con lupa interactiva
// Muestra cómo presentar algo visual: planos,
// diseños, productos, renders, etc.
// ─────────────────────────────────────────────

export function Slide05Location() {
  return (
    <Slide variant="dark">
      <div className="slide-enter">
        <SectionHeader
          number="04"
          title="Detalle de producto"
          subtitle="Explora los detalles con la lupa interactiva. Haz clic en el ícono de zoom para activarla."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Imagen con zoom */}
          <ImageZoom
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
            alt="Detalle arquitectónico"
          />

          {/* Especificaciones */}
          <div className="space-y-4 stagger-in">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">
                straighten
              </span>
              <div>
                <h4 className="font-semibold text-sm">Superficie total</h4>
                <p className="text-muted text-sm">2,400 m² de terreno, 1,560 m² construidos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">
                layers
              </span>
              <div>
                <h4 className="font-semibold text-sm">Niveles</h4>
                <p className="text-muted text-sm">3 niveles + roof garden privado por unidad</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">
                garage
              </span>
              <div>
                <h4 className="font-semibold text-sm">Estacionamiento</h4>
                <p className="text-muted text-sm">2 cajones por unidad, techados</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">
                eco
              </span>
              <div>
                <h4 className="font-semibold text-sm">Acabados</h4>
                <p className="text-muted text-sm">Piso de ingeniería, cocina integral, herrería arquitectónica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
