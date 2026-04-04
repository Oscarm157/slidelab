"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Slide } from "@/components/Slide";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 09 — Pricing
// Toggle anual/mensual + tier cards animadas
// ─────────────────────────────────────────────

const tiers = [
  {
    name: "Starter",
    monthly: 99,
    yearly: 79,
    desc: "Para startups early-stage.",
    features: ["5 usuarios", "3 integraciones", "Dashboards ilimitados", "IA básica (50 queries/día)", "Soporte email"],
    cta: "Empezar gratis",
    highlighted: false,
  },
  {
    name: "Growth",
    monthly: 299,
    yearly: 239,
    desc: "Para equipos que necesitan insights avanzados.",
    features: ["25 usuarios", "12+ integraciones", "IA avanzada (ilimitada)", "Impact analysis", "Alertas inteligentes", "Soporte prioritario"],
    cta: "14 días gratis",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    desc: "Para organizaciones con requerimientos específicos.",
    features: ["Usuarios ilimitados", "Integraciones custom", "IA dedicada (GPU propio)", "SSO + RBAC", "SLA 99.99%", "Customer success manager", "On-premise disponible"],
    cta: "Contactar ventas",
    highlighted: false,
  },
];

export function SUSlide09Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Slide variant="dark" className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 45% 45% at 50% 30%, color-mix(in srgb, var(--t-primary) 10%, transparent), transparent)",
      }} />

      <div className="relative">
        <StaggerReveal>
          <StaggerItem>
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <span className="font-mono text-sm text-fg-light/20 block mb-2">09</span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-light tracking-tight">
                  Pricing
                </h2>
                <p className="mt-2 text-fg-light/40 text-sm">Simple y transparente. Escala con tu equipo.</p>
              </div>

              {/* Toggle anual/mensual */}
              <motion.button
                onClick={() => setIsYearly(!isYearly)}
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/6 backdrop-blur-sm border border-white/[0.06]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={`text-xs transition-colors ${!isYearly ? "text-fg-light" : "text-fg-light/30"}`}>Mensual</span>
                <div className="w-10 h-5 rounded-full bg-white/10 relative">
                  <motion.div
                    animate={{ x: isYearly ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-5 h-5 rounded-full bg-primary shadow-md"
                  />
                </div>
                <span className={`text-xs transition-colors ${isYearly ? "text-fg-light" : "text-fg-light/30"}`}>
                  Anual
                  <span className="text-emerald-400 ml-1 text-[10px]">-20%</span>
                </span>
              </motion.button>
            </div>
          </StaggerItem>

          {/* Tier cards */}
          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: tier.highlighted ? -8 : 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: tier.highlighted ? 0.5 : 0.3 + i * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: tier.highlighted ? -12 : -4, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className={`relative rounded-2xl p-6 flex flex-col ${
                    tier.highlighted
                      ? "bg-primary/10 border border-primary/20 glow-accent"
                      : "bg-card/50 border border-white/[0.04]"
                  }`}
                >
                  {/* Badge recomendado */}
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 shimmer">
                      <span className="px-3 py-1 rounded-full bg-primary text-white text-[10px] font-semibold uppercase tracking-wider">
                        Recomendado
                      </span>
                    </div>
                  )}

                  <p className={`font-semibold text-lg mb-1 ${tier.highlighted ? "text-primary" : "text-fg-light"}`}>
                    {tier.name}
                  </p>
                  <p className="text-fg-light/30 text-xs mb-4">{tier.desc}</p>

                  {/* Precio animado */}
                  <div className="mb-5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isYearly ? "yearly" : "monthly"}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tier.monthly ? (
                          <div className="flex items-baseline gap-1">
                            <span className={`font-mono text-4xl font-bold ${tier.highlighted ? "text-gradient" : "text-fg-light"}`}>
                              ${isYearly ? tier.yearly : tier.monthly}
                            </span>
                            <span className="text-fg-light/30 text-sm">/mes</span>
                          </div>
                        ) : (
                          <span className="font-mono text-4xl font-bold text-fg-light">Custom</span>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 flex-1 mb-5">
                    {tier.features.map((f, fi) => (
                      <motion.div
                        key={f}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + fi * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-emerald-400 text-[14px]">check</span>
                        <span className="text-fg-light/50 text-xs">{f}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      tier.highlighted
                        ? "bg-primary text-white shadow-[0_4px_20px_color-mix(in_srgb,var(--t-primary)_30%,transparent)]"
                        : "bg-white/6 text-fg-light/70 hover:bg-white/10"
                    }`}
                  >
                    {tier.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </Slide>
  );
}
