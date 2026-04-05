"use client";

import { motion } from "motion/react";

// ─────────────────────────────────────────────
// Página hub de ejemplos — galería con links a cada presentación
// ─────────────────────────────────────────────

const examples = [
  {
    title: "Metrica AI",
    subtitle: "Pitch deck SaaS para inversionistas",
    href: "/ejemplos/startup",
    slides: 12,
    color: "#6366F1",
    icon: "rocket_launch",
    tags: ["SaaS", "Startup", "Serie A"],
  },
  {
    title: "Vertex Medical",
    subtitle: "Reporte anual de resultados — manufactura médica",
    href: "/ejemplos/reporte-anual",
    slides: 10,
    color: "#0D6E6E",
    icon: "medical_services",
    tags: ["Corporativo", "Reporte", "Manufactura"],
  },
  {
    title: "Residencial Bosque Verde",
    subtitle: "Desarrollo residencial de lujo — real estate",
    href: "/ejemplos/real-estate",
    slides: 10,
    color: "#1B4D3E",
    icon: "villa",
    tags: ["Real Estate", "Lujo", "Inversión"],
  },
  {
    title: "DesignConf 2026",
    subtitle: "Summit de diseño y tecnología — conferencia",
    href: "/ejemplos/evento",
    slides: 10,
    color: "#F43F5E",
    icon: "celebration",
    tags: ["Evento", "Conferencia", "Tech"],
  },
  {
    title: "Estudio Forma",
    subtitle: "Portfolio de arquitectura y diseño interior",
    href: "/ejemplos/arquitectura",
    slides: 10,
    color: "#D97706",
    icon: "architecture",
    tags: ["Arquitectura", "Portfolio", "Diseño"],
  },
  {
    title: "Apex Consulting",
    subtitle: "Propuesta de consultoría corporativa",
    href: "/ejemplos/consultoria",
    slides: 10,
    color: "#4338CA",
    icon: "insights",
    tags: ["Consultoría", "B2B", "Propuesta"],
  },
  {
    title: "Academia Digital",
    subtitle: "Plataforma de cursos online para profesionales",
    href: "/ejemplos/educacion",
    slides: 10,
    color: "#2563EB",
    icon: "school",
    tags: ["Educación", "Cursos", "E-learning"],
  },
  {
    title: "TechPro",
    subtitle: "Catálogo de productos tecnológicos premium",
    href: "/ejemplos/catalogo",
    slides: 10,
    color: "#059669",
    icon: "storefront",
    tags: ["Catálogo", "Ventas", "Producto"],
  },
];

export default function EjemplosPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-sm mb-8">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Volver a Slidelab
          </a>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Ejemplos
          </h1>
          <p className="mt-3 text-white/40 text-base sm:text-lg max-w-xl">
            8 presentaciones reales para 8 industrias distintas. Cada una usa un tema, tipografía y componentes diferentes.
          </p>
        </motion.div>
      </div>

      {/* Grid de ejemplos */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {examples.map((ex, i) => (
            <motion.a
              key={ex.href}
              href={ex.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              className="group relative bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-colors"
            >
              {/* Color accent bar */}
              <div className="h-1 w-full" style={{ background: ex.color }} />

              <div className="p-6">
                {/* Icon + slides count */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${ex.color}20` }}
                  >
                    <span className="material-symbols-outlined text-[24px]" style={{ color: ex.color }}>
                      {ex.icon}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-white/25">{ex.slides} slides</span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
                  {ex.title}
                </h2>
                <p className="text-white/35 text-sm mt-1 mb-4">{ex.subtitle}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {ex.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono"
                      style={{ background: `${ex.color}15`, color: `${ex.color}cc` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-5 flex items-center gap-2 text-white/20 group-hover:text-white/50 transition-colors">
                  <span className="text-xs">Ver presentación</span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
