"use client";

import { motion } from "motion/react";

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  number?: string;
  variant?: "dark" | "light";
}

export function ValueCard({
  icon, title, description, number, variant = "light",
}: ValueCardProps) {
  const styles = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`rounded-2xl p-6 relative overflow-hidden ${styles}`}
    >
      {/* Número decorativo */}
      {number && (
        <span className="absolute top-2 right-4 font-mono text-6xl text-primary/5 leading-none select-none">
          {number}
        </span>
      )}

      <div className="relative">
        <motion.div
          whileHover={{ rotate: 5 }}
          className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4"
        >
          <span className="material-symbols-outlined text-primary text-[28px]">{icon}</span>
        </motion.div>

        <h3 className="font-display text-lg mb-2">{title}</h3>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
