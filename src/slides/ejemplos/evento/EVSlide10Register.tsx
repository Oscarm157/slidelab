"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { CountdownTimer } from "@/components/CountdownTimer";
import { FormEmbed } from "@/components/FormEmbed";

// ─────────────────────────────────────────────
// Slide 10 — Registro
// Form embed + pricing tiers + countdown + CTA
// ─────────────────────────────────────────────

const pricingTiers = [
  {
    name: "Early Bird",
    price: 199,
    features: ["Acceso 3 días", "Workshops incluidos", "Networking lounge"],
    icon: "bolt",
    highlight: false,
  },
  {
    name: "Regular",
    price: 349,
    features: ["Todo en Early Bird", "After parties VIP", "Grabaciones on-demand"],
    icon: "confirmation_number",
    highlight: true,
  },
  {
    name: "VIP",
    price: 599,
    features: ["Todo en Regular", "Mentoría 1:1", "Cena con speakers", "Front row seating"],
    icon: "diamond",
    highlight: false,
  },
];

export function EVSlide10Register() {
  return (
    <Slide variant="light" centered={false}>
      <StaggerReveal className="py-4">
        {/* Header */}
        <StaggerItem>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">
              Registro
            </span>
            <div className="h-px w-16 bg-primary/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-2">
            <span className="text-gradient shimmer">Asegura tu lugar</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mb-6 max-w-lg">
            Cupo limitado a 2,500 asistentes. La edición 2025 se agotó en 3 semanas.
          </p>
        </StaggerItem>

        {/* Countdown */}
        <StaggerItem className="mb-8">
          <CountdownTimer
            targetDate="2026-09-15"
            label="Faltan"
            variant="light"
          />
        </StaggerItem>

        {/* Pricing tiers */}
        <StaggerItem>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                  delay: 0.2 + i * 0.08,
                }}
                whileHover={{ y: -3 }}
                className={`rounded-2xl p-5 relative overflow-hidden ${
                  tier.highlight
                    ? "bg-primary text-white shadow-[0_8px_30px_rgba(244,63,94,0.3)] ring-2 ring-primary"
                    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-white/20 rounded-bl-xl text-[10px] font-mono uppercase tracking-wider">
                    Popular
                  </div>
                )}
                <span
                  className={`material-symbols-outlined text-[28px] mb-3 ${
                    tier.highlight ? "text-white/80" : "text-primary"
                  }`}
                >
                  {tier.icon}
                </span>
                <h3 className="font-display text-lg font-semibold">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mt-2 mb-4">
                  <span className="font-mono text-3xl font-bold">
                    $<AnimatedCounter target={tier.price} duration={1400} />
                  </span>
                  <span
                    className={`text-xs ${
                      tier.highlight ? "text-white/60" : "text-muted"
                    }`}
                  >
                    USD
                  </span>
                </div>
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs">
                      <span
                        className={`material-symbols-outlined text-[14px] ${
                          tier.highlight ? "text-white/70" : "text-primary"
                        }`}
                      >
                        check_circle
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </StaggerItem>

        {/* Form embed */}
        <StaggerItem>
          <FormEmbed
            url="https://tally.so/r/designconf-2026-registro"
            title="Registro DesignConf 2026"
            height={400}
            variant="light"
          />
        </StaggerItem>

        {/* CTA button */}
        <StaggerItem className="mt-6 text-center">
          <motion.a
            href="https://designconf.com/registro"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-display font-semibold text-base shadow-[0_8px_30px_rgba(244,63,94,0.35)] glow-accent"
          >
            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
            Registrarme ahora
          </motion.a>
          <p className="text-muted text-xs mt-3">
            <AnimatedCounter target={347} duration={1600} /> personas registradas esta semana
          </p>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
