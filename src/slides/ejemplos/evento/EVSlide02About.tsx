"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { ValueCard } from "@/components/ValueCard";
import { CardGrid } from "@/components/CardGrid";

// ─────────────────────────────────────────────
// Slide 02 — Sobre el Evento
// ValueCards en grid, título con text-gradient
// ─────────────────────────────────────────────

const cards = [
  {
    icon: "groups",
    title: "Networking",
    description: "Conecta con 2,500 profesionales de diseño y tech",
    number: "01",
  },
  {
    icon: "school",
    title: "Aprendizaje",
    description: "48 charlas, 12 workshops, 6 masterclasses",
    number: "02",
  },
  {
    icon: "celebration",
    title: "Experiencia",
    description: "3 días de inspiración, after parties y actividades",
    number: "03",
  },
];

const highlights = [
  { value: 2500, suffix: "+", label: "Profesionales" },
  { value: 48, suffix: "", label: "Charlas" },
  { value: 6, suffix: "", label: "Masterclasses" },
  { value: 15, suffix: "+", label: "Países" },
];

export function EVSlide02About() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        {/* Header */}
        <StaggerItem>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">
              Sobre el evento
            </span>
            <div className="h-px w-16 bg-primary/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-3">
            <span className="text-gradient">El evento que define</span>
            <br />
            la industria
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            DesignConf reúne a las mentes más brillantes del diseño y la tecnología
            en un espacio de conexión, aprendizaje y visión de futuro.
          </p>
        </StaggerItem>

        {/* Cards */}
        <StaggerItem>
          <CardGrid columns={3}>
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                  delay: 0.2 + i * 0.08,
                }}
              >
                <ValueCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  number={card.number}
                  variant="light"
                />
              </motion.div>
            ))}
          </CardGrid>
        </StaggerItem>

        {/* Stats row */}
        <StaggerItem className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="text-center p-4 rounded-xl bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                style={{ animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.08}s both` }}
              >
                <span className="font-mono text-2xl sm:text-3xl font-bold glow-accent">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1600} />
                </span>
                <span className="block text-muted text-xs mt-1 uppercase tracking-wider">
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
