"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { SocialEmbed } from "@/components/SocialEmbed";

// ─────────────────────────────────────────────
// Slide 08 — Social Buzz
// Twitter embed + social stats cards
// ─────────────────────────────────────────────

const socialStats = [
  { icon: "tag", value: 12400, suffix: "", label: "Tweets", color: "#1DA1F2" },
  { icon: "visibility", value: 48000, suffix: "", label: "Alcance", color: "#F43F5E" },
  { icon: "trending_up", value: 1, suffix: "", label: "Trending CDMX", color: "#10B981" },
];

const hashtagMentions = [
  { tag: "#DesignConf2026", count: 8200 },
  { tag: "#DesignConf", count: 4100 },
  { tag: "#DCONF26", count: 2300 },
  { tag: "#DesignCDMX", count: 1800 },
];

export function EVSlide08Social() {
  return (
    <Slide variant="light">
      <StaggerReveal>
        {/* Header */}
        <StaggerItem>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">
              Social
            </span>
            <div className="h-px w-16 bg-primary/30" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-2">
            Lo que dicen de{" "}
            <span className="text-gradient">#DesignConf</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mb-8 max-w-lg">
            El buzz en redes sociales no para. DesignConf fue trending topic en
            CDMX durante los 3 días de la edición 2025.
          </p>
        </StaggerItem>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Social embed */}
          <StaggerItem>
            <SocialEmbed
              platform="twitter"
              url="https://twitter.com/designconf/status/placeholder"
              height={380}
              variant="light"
            />
          </StaggerItem>

          {/* Stats + hashtags */}
          <div className="flex flex-col gap-4">
            {/* Big stat cards */}
            <StaggerItem>
              <div className="grid grid-cols-3 gap-3">
                {socialStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                      delay: 0.2 + i * 0.08,
                    }}
                    whileHover={{ y: -3 }}
                    className="text-center p-4 rounded-xl bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                  >
                    <span
                      className="material-symbols-outlined text-[24px] mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.icon}
                    </span>
                    <span className="block font-mono text-xl sm:text-2xl font-bold glow-accent">
                      {stat.label === "Trending CDMX" ? (
                        <>
                          #<AnimatedCounter target={stat.value} duration={1200} />
                        </>
                      ) : (
                        <AnimatedCounter
                          target={stat.value}
                          suffix={stat.value >= 1000 ? "" : stat.suffix}
                          duration={1600}
                        />
                      )}
                    </span>
                    <span className="block text-muted text-[10px] mt-0.5 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>

            {/* Trending hashtags */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="rounded-2xl p-5 bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    trending_up
                  </span>
                  <span className="text-sm font-semibold">Hashtags trending</span>
                </div>
                <div className="space-y-2">
                  {hashtagMentions.map((h, i) => (
                    <motion.div
                      key={h.tag}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-primary">{h.tag}</span>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 rounded-full bg-primary/15 w-20 sm:w-32">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(h.count / 8200) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                            className="h-full rounded-full bg-primary"
                          />
                        </div>
                        <span className="font-mono text-xs text-muted">
                          <AnimatedCounter target={h.count} duration={1400} />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>

            {/* Total reach */}
            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="rounded-xl p-4 bg-primary/10 text-center"
              >
                <span className="font-mono text-2xl font-bold text-primary">
                  <AnimatedCounter target={48} suffix="K" duration={1600} />
                </span>
                <span className="block text-primary/70 text-xs mt-0.5">
                  alcance total en redes sociales
                </span>
              </motion.div>
            </StaggerItem>
          </div>
        </div>
      </StaggerReveal>
    </Slide>
  );
}
