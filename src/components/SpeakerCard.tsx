"use client";

import { motion } from "motion/react";

interface SpeakerCardProps {
  name: string;
  title: string;
  organization?: string;
  photo: string;
  topic?: string;
  time?: string;
  bio?: string;
  variant?: "dark" | "light";
}

export function SpeakerCard({
  name, title, organization, photo, topic, time, bio, variant = "light",
}: SpeakerCardProps) {
  const styles = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`rounded-2xl p-5 flex flex-col sm:flex-row gap-5 ${styles}`}
    >
      <img
        src={photo}
        alt={name}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-xl mb-0.5">{name}</h3>
        <p className="text-muted text-sm">
          {title}{organization && <> · <span className="text-primary">{organization}</span></>}
        </p>
        {bio && <p className="text-muted text-xs leading-relaxed mt-2">{bio}</p>}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          {topic && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              <span className="material-symbols-outlined text-[14px]">mic</span>
              {topic}
            </span>
          )}
          {time && (
            <span className="inline-flex items-center gap-1 text-muted text-xs">
              <span className="material-symbols-outlined text-[14px]">schedule</span>
              {time}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
