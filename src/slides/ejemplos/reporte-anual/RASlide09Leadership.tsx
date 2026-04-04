"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 09 — Liderazgo & Gobierno Corporativo
// C-Suite + Board highlights + experiencia combinada
// ─────────────────────────────────────────────

const leadership = [
  {
    name: "Dr. Elena Vásquez",
    role: "CEO",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
    years: "12 años en Vertex",
    prev: "Ex-VP Medtronic",
    founder: true,
  },
  {
    name: "James Chen, PhD",
    role: "CTO",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
    years: "8 años en Vertex",
    prev: "Ex-Director I+D J&J",
    founder: true,
  },
  {
    name: "Carla Moretti",
    role: "CFO",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
    years: "5 años en Vertex",
    prev: "Ex-CFO Zimmer Biomet",
    founder: false,
  },
  {
    name: "Dr. Raj Patel",
    role: "CMO",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    years: "6 años en Vertex",
    prev: "Cirujano cardiovascular",
    founder: false,
  },
  {
    name: "María Rodríguez",
    role: "COO",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
    years: "9 años en Vertex",
    prev: "Ex-Ops Lead Stryker",
    founder: false,
  },
  {
    name: "Thomas Weber",
    role: "VP Regulatory",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    years: "7 años en Vertex",
    prev: "Ex-FDA reviewer",
    founder: false,
  },
];

const boardStats = [
  { label: "Directores independientes", value: "75%" },
  { label: "Diversidad de género", value: "44%" },
  { label: "Experiencia promedio", value: "22 años" },
  { label: "Reuniones anuales", value: "12" },
];

export function RASlide09Leadership() {
  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 40% at 50% 80%, color-mix(in srgb, var(--t-primary) 8%, transparent), transparent)",
      }} />

      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
              <div>
                <span className="font-mono text-sm text-fg-light/20 block mb-2">09</span>
                <h2 className="font-display text-3xl sm:text-4xl text-fg-light tracking-tight">
                  Liderazgo <span className="text-gradient">ejecutivo</span>
                </h2>
              </div>
              <div className="text-right">
                <span className="font-mono text-3xl font-bold text-gradient">
                  <AnimatedCounter target={120} suffix="+" duration={1500} />
                </span>
                <p className="text-fg-light/30 text-[9px] uppercase tracking-widest">años de experiencia combinada</p>
              </div>
            </div>
          </StaggerItem>

          {/* C-Suite grid */}
          <StaggerItem>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {leadership.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="group bg-card/50 rounded-xl p-3 border border-white/[0.04] hover:border-primary/20 transition-colors text-center"
                >
                  <div className="relative mx-auto w-16 h-16 mb-2">
                    {m.founder && <div className="absolute -inset-0.5 rounded-full border-2 border-primary/30" />}
                    <motion.img
                      src={m.photo}
                      alt={m.name}
                      className="w-16 h-16 rounded-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    />
                  </div>
                  <p className="text-fg-light text-xs font-semibold">{m.name}</p>
                  <p className="text-primary/60 text-[9px] uppercase tracking-wider">{m.role}</p>
                  <p className="text-fg-light/25 text-[9px] mt-1 group-hover:text-fg-light/40 transition-colors">{m.prev}</p>
                </motion.div>
              ))}
            </div>
          </StaggerItem>

          {/* Board stats */}
          <StaggerItem>
            <div className="bg-card/40 rounded-xl p-4 border border-white/[0.04]">
              <p className="text-fg-light/25 text-[10px] uppercase tracking-widest mb-3">Gobierno corporativo</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {boardStats.map((bs, i) => (
                  <motion.div
                    key={bs.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="text-center"
                  >
                    <p className="font-mono text-xl font-bold text-fg-light/80">{bs.value}</p>
                    <p className="text-fg-light/30 text-[9px] uppercase tracking-wider mt-0.5">{bs.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
