"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Hotspot {
  x: number;
  y: number;
  label: string;
  description?: string;
  icon?: string;
}

interface FloorPlanViewerProps {
  image: string;
  alt: string;
  hotspots: Hotspot[];
  variant?: "dark" | "light";
}

export function FloorPlanViewer({ image, alt, hotspots, variant = "light" }: FloorPlanViewerProps) {
  const [active, setActive] = useState<number | null>(null);

  const tooltipBg = variant === "dark"
    ? "bg-card/95 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
    : "bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.1)]";

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <img src={image} alt={alt} className="w-full h-auto" />

      {hotspots.map((spot, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: "translate(-50%, -50%)" }}
        >
          {/* Marker */}
          <button
            onClick={() => setActive(active === i ? null : i)}
            className="w-7 h-7 rounded-full bg-primary text-white text-xs font-mono font-medium flex items-center justify-center pulse-dot cursor-pointer hover:scale-110 transition-transform"
          >
            {i + 1}
          </button>

          {/* Tooltip */}
          <AnimatePresence>
            {active === i && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 rounded-xl px-4 py-3 min-w-[180px] ${tooltipBg}`}
              >
                <div className="flex items-start gap-2">
                  {spot.icon && (
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">{spot.icon}</span>
                  )}
                  <div>
                    <p className="font-semibold text-sm">{spot.label}</p>
                    {spot.description && (
                      <p className="text-muted text-xs mt-0.5">{spot.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
