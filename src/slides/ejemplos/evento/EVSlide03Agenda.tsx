"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { AgendaList } from "@/components/AgendaList";

// ─────────────────────────────────────────────
// Slide 03 — Agenda Día 1
// Timeline completo con 8 sesiones, multi-track
// ─────────────────────────────────────────────

const agendaItems = [
  {
    time: "08:30",
    title: "Registro y café de bienvenida",
    speaker: "Equipo DesignConf",
    track: "General",
    trackColor: "#78716C",
    duration: "30 min",
    icon: "coffee",
  },
  {
    time: "09:00",
    title: "Keynote: El futuro del diseño en la era AI",
    speaker: "Ana García · Spotify",
    track: "Design",
    trackColor: "#F43F5E",
    duration: "45 min",
    icon: "keynote",
  },
  {
    time: "10:00",
    title: "Scaling frontend at Netflix",
    speaker: "Carlos Ruiz · Netflix",
    track: "Engineering",
    trackColor: "#3B82F6",
    duration: "40 min",
    icon: "code",
  },
  {
    time: "11:00",
    title: "Workshop: Design tokens en la práctica",
    speaker: "Laura Méndez · Figma",
    track: "Design",
    trackColor: "#F43F5E",
    duration: "90 min",
    icon: "palette",
  },
  {
    time: "12:30",
    title: "Almuerzo & networking",
    speaker: "Terraza Citibanamex",
    track: "General",
    trackColor: "#78716C",
    duration: "60 min",
    icon: "restaurant",
  },
  {
    time: "14:00",
    title: "Panel: AI-first design — moda o futuro",
    speaker: "Mía Torres, Diego Santos + moderadora",
    track: "AI",
    trackColor: "#8B5CF6",
    duration: "50 min",
    icon: "smart_toy",
  },
  {
    time: "15:00",
    title: "Product-led growth en LATAM",
    speaker: "Diego Santos · Rappi",
    track: "Product",
    trackColor: "#10B981",
    duration: "40 min",
    icon: "trending_up",
  },
  {
    time: "16:00",
    title: "Closing keynote: Diseñando para los próximos 10 años",
    speaker: "Invitado especial",
    track: "Design",
    trackColor: "#F43F5E",
    duration: "45 min",
    icon: "rocket_launch",
  },
];

export function EVSlide03Agenda() {
  return (
    <Slide variant="dark" centered={false}>
      <StaggerReveal className="py-4">
        {/* Header */}
        <StaggerItem>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">
              Programa
            </span>
            <div className="h-px w-16 bg-primary/30" />
          </div>
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight">
                <span className="text-gradient">Agenda</span> Día 1
              </h2>
              <p className="text-muted text-sm mt-2">Lunes 15 de septiembre, 2026</p>
            </div>
            <div className="flex items-center gap-4">
              {[
                { color: "#F43F5E", label: "Design" },
                { color: "#3B82F6", label: "Engineering" },
                { color: "#8B5CF6", label: "AI" },
                { color: "#10B981", label: "Product" },
              ].map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-1.5"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: t.color }}
                  />
                  <span className="text-[10px] text-muted font-mono">{t.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </StaggerItem>

        {/* Agenda */}
        <StaggerItem>
          <AgendaList items={agendaItems} variant="dark" />
        </StaggerItem>

        {/* Bottom stat */}
        <StaggerItem className="mt-8">
          <div className="flex items-center gap-6 justify-center">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-center px-6 py-3 rounded-xl bg-card/80"
            >
              <span className="font-mono text-xl text-primary font-bold">
                <AnimatedCounter target={8} duration={1200} />
              </span>
              <span className="block text-muted text-[10px] mt-0.5">Sesiones</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-center px-6 py-3 rounded-xl bg-card/80"
            >
              <span className="font-mono text-xl text-primary font-bold">
                <AnimatedCounter target={4} duration={1200} />
              </span>
              <span className="block text-muted text-[10px] mt-0.5">Tracks</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-center px-6 py-3 rounded-xl bg-card/80"
            >
              <span className="font-mono text-xl text-primary font-bold">
                <AnimatedCounter target={7} suffix="h" duration={1200} />
              </span>
              <span className="block text-muted text-[10px] mt-0.5">De contenido</span>
            </motion.div>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
