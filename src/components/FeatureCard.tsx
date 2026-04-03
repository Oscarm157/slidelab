"use client";

import { motion } from "motion/react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: "dark" | "light";
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = "dark",
}: FeatureCardProps) {
  const styles = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: variant === "dark"
        ? "0 8px 30px rgba(0,0,0,0.25)"
        : "0 8px 30px rgba(0,0,0,0.08)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`rounded-2xl p-6 ${styles}`}
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-primary text-[22px]">
          {icon}
        </span>
      </div>
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
