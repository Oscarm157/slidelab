"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CardGrid } from "@/components/CardGrid";

// ─────────────────────────────────────────────
// Slide 05 — Testimonios
// Quotes de asistentes 2025, ratings, dark theme
// ─────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "DesignConf cambió mi perspectiva sobre design systems. Volví a mi equipo con ideas que implementamos en semanas.",
    author: "Valentina Reyes",
    role: "Senior Designer at Mercado Libre",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    rating: 5 as const,
  },
  {
    quote:
      "El mejor evento de tech en LATAM, sin duda. El nivel de los speakers y las conexiones que hice superaron mis expectativas.",
    author: "Andrés Fuentes",
    role: "Frontend Lead at Clip",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5 as const,
  },
  {
    quote:
      "Los workshops prácticos fueron increíbles. Salí con prototipos funcionales que presenté a mi equipo al día siguiente.",
    author: "Mariana López",
    role: "UX Manager at Kavak",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 4 as const,
  },
];

export function EVSlide05Testimonials() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        {/* Header */}
        <StaggerItem>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">
              Testimonios
            </span>
            <div className="h-px w-16 bg-primary/30" />
          </div>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight">
                Lo que dicen de{" "}
                <span className="text-gradient">DesignConf 2025</span>
              </h2>
              <p className="text-muted text-sm sm:text-base mt-2 max-w-lg">
                Más de 2,000 asistentes calificaron la edición anterior con un promedio de 4.8/5.
              </p>
            </div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/80"
            >
              <span className="font-mono text-3xl text-primary font-bold glow-accent">
                <AnimatedCounter target={4.8} decimals={1} duration={1400} />
              </span>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-primary text-[14px]"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="text-muted text-[10px]">promedio general</span>
              </div>
            </motion.div>
          </div>
        </StaggerItem>

        {/* Testimonial cards */}
        <StaggerItem>
          <CardGrid columns={3}>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
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
                <TestimonialCard
                  quote={t.quote}
                  author={t.author}
                  role={t.role}
                  photo={t.photo}
                  rating={t.rating}
                  variant="dark"
                />
              </motion.div>
            ))}
          </CardGrid>
        </StaggerItem>

        {/* Bottom stats */}
        <StaggerItem className="mt-8">
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            {[
              { value: 2000, suffix: "+", label: "Asistentes 2025" },
              { value: 96, suffix: "%", label: "Recomendarían" },
              { value: 340, suffix: "+", label: "Reviews" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <span className="font-mono text-xl sm:text-2xl text-fg-light/80 font-bold">
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
