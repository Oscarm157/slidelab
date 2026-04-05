"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import { AudioPlayer } from "@/components/AudioPlayer";

// ─────────────────────────────────────────────
// Slide 07 — Playlist & Vibe
// Spotify embed + audio player + ambiente visual
// ─────────────────────────────────────────────

const vibeWords = ["Creatividad", "Innovación", "Conexión", "Futuro", "Comunidad"];

export function EVSlide07Music() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        {/* Header */}
        <StaggerItem>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">
              Vibe
            </span>
            <div className="h-px w-16 bg-primary/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-2">
            <span className="text-gradient">Playlist</span> & Vibe
          </h2>
          <p className="text-muted text-sm sm:text-base mb-8 max-w-xl">
            La energía de DesignConf no se vive solo en las charlas. La música, el
            ambiente y las experiencias sensoriales son parte del ADN del evento.
          </p>
        </StaggerItem>

        {/* Layout: Spotify + Audio + Vibe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna izquierda: Spotify */}
          <StaggerItem>
            <SpotifyEmbed
              url="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
              variant="dark"
            />
          </StaggerItem>

          {/* Columna derecha: Audio + Vibe */}
          <div className="flex flex-col gap-4">
            <StaggerItem>
              <AudioPlayer
                src=""
                title="DesignConf Theme 2026"
                artist="DesignConf"
                variant="dark"
              />
            </StaggerItem>

            {/* Vibe card */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="rounded-2xl p-6 bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)] flex-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    equalizer
                  </span>
                  <span className="text-sm font-semibold">La experiencia sensorial</span>
                </div>
                <p className="text-muted text-xs leading-relaxed mb-4">
                  Cada espacio del evento está curado con iluminación, sonido ambiental y
                  aromas que potencian la creatividad y la conexión entre asistentes.
                </p>

                {/* Animated vibe words */}
                <div className="flex flex-wrap gap-2">
                  {vibeWords.map((word, i) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.2 + i * 0.08,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>

            {/* Mini stats */}
            <StaggerItem>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 3, label: "DJ sets" },
                  { value: 2, label: "After parties" },
                  { value: 5, label: "Espacios" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="text-center p-3 rounded-xl bg-card/60"
                  >
                    <span className="font-mono text-lg text-primary font-bold">
                      <AnimatedCounter target={stat.value} duration={1200} />
                    </span>
                    <span className="block text-muted text-[11px] mt-0.5">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>
          </div>
        </div>
      </StaggerReveal>
    </Slide>
  );
}
