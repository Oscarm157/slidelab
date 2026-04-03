"use client";

import { motion } from "motion/react";

interface LogoItem {
  src: string;
  alt: string;
}

interface LogoCloudProps {
  logos: LogoItem[];
  columns?: 3 | 4 | 5 | 6;
  grayscale?: boolean;
  variant?: "dark" | "light";
}

export function LogoCloud({ logos, columns = 4, grayscale = true, variant = "light" }: LogoCloudProps) {
  const bg = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";
  const colMap = { 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5", 6: "grid-cols-3 sm:grid-cols-6" };

  return (
    <div className={`rounded-2xl p-6 ${bg}`}>
      <div className={`grid ${colMap[columns]} gap-6 items-center justify-items-center`}>
        {logos.map((logo, i) => (
          <motion.img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-8 sm:h-10 w-auto object-contain"
            style={grayscale ? { filter: "grayscale(1)", opacity: 0.5 } : {}}
            whileHover={grayscale ? { filter: "grayscale(0)", opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
