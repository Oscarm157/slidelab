"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { SpeakerCard } from "@/components/SpeakerCard";

// ─────────────────────────────────────────────
// Slide 04 — Speakers
// 4 speakers con fotos Unsplash, topic badges
// ─────────────────────────────────────────────

const speakers = [
  {
    name: "Ana García",
    title: "Design Director",
    organization: "Spotify",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    topic: "El futuro del design system",
    time: "09:00 · Día 1",
  },
  {
    name: "Carlos Ruiz",
    title: "VP Engineering",
    organization: "Netflix",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    topic: "Scaling frontend at Netflix",
    time: "10:00 · Día 1",
  },
  {
    name: "Mía Torres",
    title: "AI Lead",
    organization: "Google",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    topic: "AI-first design",
    time: "14:00 · Día 2",
  },
  {
    name: "Diego Santos",
    title: "CPO",
    organization: "Rappi",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    topic: "Product-led growth en LATAM",
    time: "15:00 · Día 1",
  },
];

export function EVSlide04Speakers() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        {/* Header */}
        <StaggerItem>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">
              Speakers
            </span>
            <div className="h-px w-16 bg-primary/30" />
          </div>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight">
                Aprende de los{" "}
                <span className="text-gradient">mejores</span>
              </h2>
              <p className="text-muted text-sm sm:text-base mt-2 max-w-lg">
                Líderes de las empresas tech más influyentes del mundo comparten
                su visión en DesignConf.
              </p>
            </div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10"
            >
              <span className="font-mono text-lg text-primary font-bold">
                <AnimatedCounter target={48} duration={1400} />
              </span>
              <span className="text-xs text-primary/70">speakers en total</span>
            </motion.div>
          </div>
        </StaggerItem>

        {/* Speaker cards */}
        <StaggerItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {speakers.map((speaker, i) => (
              <motion.div
                key={speaker.name}
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
                <SpeakerCard
                  name={speaker.name}
                  title={speaker.title}
                  organization={speaker.organization}
                  photo={speaker.photo}
                  topic={speaker.topic}
                  time={speaker.time}
                  variant="light"
                />
              </motion.div>
            ))}
          </div>
        </StaggerItem>

        {/* CTA */}
        <StaggerItem className="mt-8 text-center">
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 text-primary text-sm font-medium cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            Ver los 48 speakers en designconf.com
          </motion.p>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
