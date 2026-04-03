"use client";

import { motion } from "motion/react";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[3px] bg-white/10 z-50">
      <motion.div
        className="h-full bg-primary"
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
    </div>
  );
}
