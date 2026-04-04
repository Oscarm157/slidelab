"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { MapEmbed } from "@/components/MapEmbed";
import { ImageGrid } from "@/components/ImageGrid";

// ─────────────────────────────────────────────
// Slide 06 — Venue
// Mapa de Centro Citibanamex + galería de fotos
// ─────────────────────────────────────────────

const venueImages = [
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    alt: "Auditorio principal",
    caption: "Auditorio principal · 2,500 asientos",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Zona de networking",
    caption: "Zona de networking y expo",
  },
  {
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    alt: "Salas de workshop",
    caption: "12 salas para workshops",
  },
];

export function EVSlide06Venue() {
  return (
    <Slide variant="light" centered={false}>
      <StaggerReveal className="py-4">
        {/* Header */}
        <StaggerItem>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">
              Venue
            </span>
            <div className="h-px w-16 bg-primary/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-2">
            <span className="text-gradient">Centro Citibanamex</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mb-8 max-w-xl">
            El espacio de eventos más icónico de Ciudad de México, equipado con
            tecnología de punta y capacidad para miles de asistentes.
          </p>
        </StaggerItem>

        {/* Map */}
        <StaggerItem>
          <MapEmbed
            image="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
            address="Av. del Conscripto 311, Lomas de Sotelo, CDMX"
            details={["Centro Citibanamex", "Sep 15-17, 2026"]}
            proximity={[
              { place: "Metro Auditorio", time: "5 min" },
              { place: "Aeropuerto AICM", time: "30 min" },
              { place: "Polanco", time: "10 min" },
              { place: "Reforma", time: "15 min" },
            ]}
            variant="light"
          />
        </StaggerItem>

        {/* Image grid */}
        <StaggerItem className="mt-6">
          <ImageGrid images={venueImages} columns={3} variant="light" />
        </StaggerItem>

        {/* Quick stats */}
        <StaggerItem className="mt-6">
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            {[
              { value: 50000, suffix: " m²", label: "Espacio total" },
              { value: 12, suffix: "", label: "Salas" },
              { value: 2500, suffix: "+", label: "Capacidad" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="text-center"
              >
                <span className="font-mono text-lg sm:text-xl font-bold glow-accent">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1600} />
                </span>
                <span className="block text-muted text-[10px] mt-0.5 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
