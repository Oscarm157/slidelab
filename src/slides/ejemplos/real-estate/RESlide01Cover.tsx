"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function RESlide01Cover() {
  const stats = [
    { value: 48, suffix: "", label: "Residencias" },
    { value: 4.2, suffix: "M MXN", label: "Desde", prefix: "$", decimals: 1 },
    { value: 180, suffix: "m²", label: "Promedio" },
    { value: 2027, suffix: "", label: "Entrega" },
  ];

  return (
    <Slide variant="dark">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
          alt="Residencial Bosque Verde"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient overlay from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f18]/95 via-[#0a1f18]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-sm font-medium tracking-wide">
            Preventa Exclusiva · 2026
          </span>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <motion.h1
            className="text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">Residencial</span>
            <br />
            <span className="text-gradient">Bosque Verde</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/70 max-w-lg"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Vivir rodeado de naturaleza con el lujo que mereces.
            Zapopan, Jalisco.
          </motion.p>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
            >
              <div className="text-3xl font-bold text-white mb-1">
                {stat.prefix || ""}
                <AnimatedCounter
                  target={stat.value}
                  decimals={stat.decimals || 0}
                />
                {stat.suffix}
              </div>
              <div className="text-sm text-white/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
