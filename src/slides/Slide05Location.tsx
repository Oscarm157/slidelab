"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Ubicación — Mapa + features en 2 columnas
// ─────────────────────────────────────────────

const features = [
  {
    icon: "location_on",
    title: "Zona consolidada",
    description: "Servicios completos, infraestructura madura, vecindario establecido.",
  },
  {
    icon: "directions_car",
    title: "Conectividad directa",
    description: "Acceso rápido a vías principales. Centro de la ciudad a minutos.",
  },
  {
    icon: "trending_up",
    title: "Alta demanda histórica",
    description: "El producto en esta zona no se queda en inventario.",
  },
];

const proximity = [
  { place: "Centro", time: "5 min" },
  { place: "Aeropuerto", time: "18 min" },
  { place: "Hospital Central", time: "8 min" },
  { place: "Zona Comercial", time: "4 min" },
  { place: "Universidad", time: "12 min" },
  { place: "Parque Metropolitano", time: "6 min" },
];

export function Slide05Location() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        <StaggerItem>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            {/* Columna izquierda */}
            <div>
              <div className="mb-6 sm:mb-8">
                <span className="font-mono text-sm text-fg-light/20 block mb-3">05</span>
                <div className="w-[60px] h-[2px] bg-primary mb-4" />
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-fg-light">UBICACIÓN</h2>
                <p className="mt-2 text-base sm:text-lg text-muted font-medium">
                  Av. Principal 420, Col. Centro
                </p>
              </div>

              <div className="space-y-5 mb-6">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-primary text-[20px]">{f.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-fg-light text-sm sm:text-base">{f.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted/60 font-mono mb-6">
                19.4326°N, -99.1332°W
              </p>

              <div className="w-10 h-[2px] bg-primary mb-4" />
              <p className="font-display text-sm sm:text-base text-muted italic max-w-sm">
                &ldquo;La ubicación habla por sí misma. Demanda sostenida y plusvalía documentada.&rdquo;
              </p>
            </div>

            {/* Columna derecha — mapa con tarjeta flotante */}
            <div className="relative h-[420px] sm:h-[500px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1ses!2smx!4v1234567890"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del proyecto"
              />

              {/* Tarjeta flotante */}
              <div className="absolute bottom-6 left-3 right-3">
                <div className="bg-bg-dark/90 backdrop-blur-md rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                  <div className="px-4 py-2.5 border-b border-fg-light/10 flex items-center justify-between">
                    <h3 className="text-fg-light/90 font-semibold text-sm">Zona de Influencia</h3>
                    <span className="text-primary font-mono text-xs">{proximity.length} puntos clave</span>
                  </div>
                  <div className="grid grid-cols-2">
                    {proximity.map((p, i) => (
                      <div
                        key={p.place}
                        className={`flex items-center justify-between px-4 py-2 ${
                          i % 2 === 0 ? "border-r border-fg-light/5" : ""
                        } ${i < proximity.length - 2 ? "border-b border-fg-light/5" : ""}`}
                      >
                        <span className="text-muted text-xs truncate mr-2">{p.place}</span>
                        <span className="text-primary font-mono text-xs font-medium shrink-0">{p.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
