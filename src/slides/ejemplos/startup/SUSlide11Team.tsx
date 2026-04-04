"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 11 — El Equipo + Investors
// Cards con hover bio + badges expertise + LogoCloud animado
// ─────────────────────────────────────────────

const team = [
  {
    name: "María Fernández",
    role: "CEO & Co-founder",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
    bio: "Ex-VP Product en Rappi. Stanford MBA.",
    tags: ["Product", "Scale-ups"],
    founder: true,
  },
  {
    name: "Carlos Mendoza",
    role: "CTO & Co-founder",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    bio: "Ex-Staff Engineer en Datadog. PhD ML, MIT.",
    tags: ["ML/AI", "Infrastructure"],
    founder: true,
  },
  {
    name: "Ana Torres",
    role: "VP of Engineering",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
    bio: "Ex-Stripe, data infrastructure lead.",
    tags: ["Distributed Systems"],
    founder: false,
  },
  {
    name: "Diego Ramírez",
    role: "Head of Sales",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    bio: "Ex-Salesforce LATAM. 0→$10M ARR.",
    tags: ["Sales", "LATAM"],
    founder: false,
  },
];

const logos = [
  { name: "Y Combinator", src: "https://logo.clearbit.com/ycombinator.com" },
  { name: "Sequoia", src: "https://logo.clearbit.com/sequoiacap.com" },
  { name: "a16z", src: "https://logo.clearbit.com/a16z.com" },
  { name: "Stripe", src: "https://logo.clearbit.com/stripe.com" },
  { name: "Google", src: "https://logo.clearbit.com/google.com" },
  { name: "NVIDIA", src: "https://logo.clearbit.com/nvidia.com" },
];

export function SUSlide11Team() {
  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 40% at 50% 80%, color-mix(in srgb, var(--t-primary) 8%, transparent), transparent)",
      }} />

      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <span className="font-mono text-sm text-fg-light/20 block mb-2">11</span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-light tracking-tight">
                  El equipo
                </h2>
              </div>
              {/* Experiencia combinada */}
              <div className="text-right">
                <span className="font-mono text-3xl font-bold text-gradient">
                  <AnimatedCounter target={60} suffix="+" duration={1500} />
                </span>
                <p className="text-fg-light/30 text-[10px] uppercase tracking-widest">años de experiencia</p>
              </div>
            </div>
          </StaggerItem>

          {/* Team cards */}
          <StaggerItem>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="group bg-card/50 rounded-2xl p-4 border border-white/[0.04] hover:border-primary/20 transition-colors overflow-hidden"
                >
                  {/* Foto con ring para founders */}
                  <div className="relative mx-auto w-20 h-20 mb-3">
                    {m.founder && (
                      <div className="absolute -inset-1 rounded-full border-2 border-primary/30" />
                    )}
                    <motion.img
                      src={m.photo}
                      alt={m.name}
                      className="w-20 h-20 rounded-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    />
                  </div>

                  <p className="font-semibold text-fg-light text-sm text-center">{m.name}</p>
                  <p className="text-primary/60 text-[10px] text-center uppercase tracking-wider mb-2">{m.role}</p>

                  {/* Bio — visible on hover */}
                  <p className="text-fg-light/30 text-[11px] text-center mb-3 group-hover:text-fg-light/50 transition-colors">
                    {m.bio}
                  </p>

                  {/* Expertise badges */}
                  <div className="flex flex-wrap gap-1 justify-center">
                    {m.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-primary/8 text-primary/60 text-[9px] font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerItem>

          {/* Investor logos con stagger animation */}
          <StaggerItem>
            <div className="mt-8">
              <p className="text-fg-light/20 text-[10px] uppercase tracking-widest mb-4">Respaldados por</p>
              <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
                {logos.map((logo, i) => (
                  <motion.img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    className="h-7 sm:h-8 grayscale opacity-30 hover:grayscale-0 hover:opacity-80 transition-all duration-300"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 0.3, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  />
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
