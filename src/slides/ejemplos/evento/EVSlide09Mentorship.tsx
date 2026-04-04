"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

// ─────────────────────────────────────────────
// Slide 09 — Mentoría 1:1
// Calendly embed + mentor preview cards
// ─────────────────────────────────────────────

const mentors = [
  {
    name: "Ana García",
    specialty: "Design Systems & Leadership",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    slots: 8,
  },
  {
    name: "Carlos Ruiz",
    specialty: "Frontend Architecture & Scale",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    slots: 5,
  },
  {
    name: "Mía Torres",
    specialty: "AI Product Design & Strategy",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    slots: 6,
  },
];

export function EVSlide09Mentorship() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        {/* Header */}
        <StaggerItem>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">
              Mentoría
            </span>
            <div className="h-px w-16 bg-primary/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-2">
            Reserva tu{" "}
            <span className="text-gradient">mentoría 1:1</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mb-8 max-w-xl">
            Sesiones exclusivas de 30 minutos con líderes de la industria.
            Resuelve dudas específicas, recibe feedback directo y lleva tu carrera
            al siguiente nivel.
          </p>
        </StaggerItem>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Mentor cards — columna izquierda */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <StaggerItem>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  people
                </span>
                <span className="text-sm font-semibold">Mentores disponibles</span>
              </div>
            </StaggerItem>

            {mentors.map((mentor, i) => (
              <StaggerItem key={mentor.name}>
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                    delay: 0.2 + i * 0.08,
                  }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                >
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm">{mentor.name}</h4>
                    <p className="text-muted text-xs mt-0.5">{mentor.specialty}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="material-symbols-outlined text-primary text-[12px]">
                        event_available
                      </span>
                      <span className="text-primary text-[10px] font-mono">
                        <AnimatedCounter target={mentor.slots} duration={1000} /> slots disponibles
                      </span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      arrow_forward
                    </span>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}

            {/* Quick stats */}
            <StaggerItem>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="text-center p-3 rounded-xl bg-card/60">
                  <span className="font-mono text-lg text-primary font-bold">
                    <AnimatedCounter target={30} suffix=" min" duration={1200} />
                  </span>
                  <span className="block text-muted text-[9px] mt-0.5">Por sesión</span>
                </div>
                <div className="text-center p-3 rounded-xl bg-card/60">
                  <span className="font-mono text-lg text-primary font-bold glow-accent">
                    Gratis
                  </span>
                  <span className="block text-muted text-[9px] mt-0.5">Con tu entrada</span>
                </div>
              </div>
            </StaggerItem>
          </div>

          {/* Calendly embed — columna derecha */}
          <StaggerItem className="md:col-span-3">
            <CalendlyEmbed
              url="https://calendly.com/designconf/mentoria-1-1"
              height={520}
              variant="dark"
            />
          </StaggerItem>
        </div>
      </StaggerReveal>
    </Slide>
  );
}
