"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal } from "@/components/StaggerReveal";
import { TestimonialCard } from "@/components/TestimonialCard";

// ─────────────────────────────────────────────
// Slide 07 — Testimonios
// 3 testimonios de clientes empresariales ficticios
// ─────────────────────────────────────────────

export function CASlide07Testimonials() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-4">
            Testimonios
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-fg-light">
            Lo que dicen{" "}
            <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="text-fg-light/40 text-base mt-3 max-w-lg mx-auto">
            Empresas líderes confían en TechPro para sus equipos de alto rendimiento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            variant="dark"
            quote="Desde que migramos a ProStation X1, el tiempo de render de nuestros proyectos 3D se redujo un 60%. El ROI fue inmediato."
            author="Elena Marchetti"
            role="CTO, Vertex Studios"
            rating={5}
          />
          <TestimonialCard
            variant="dark"
            quote="El soporte de TechPro es excepcional. Tuvimos un incidente a las 3 AM y lo resolvieron en 40 minutos. No hay comparación."
            author="Andrés Fuentes"
            role="VP Ingeniería, DataFlow Inc."
            rating={5}
          />
          <TestimonialCard
            variant="dark"
            quote="La calidad de construcción es impecable. Llevamos 2 años con 200 unidades desplegadas y cero fallos de hardware."
            author="Sarah Kim"
            role="Directora IT, Nexus Global"
            rating={5}
          />
        </div>
      </StaggerReveal>
    </Slide>
  );
}
