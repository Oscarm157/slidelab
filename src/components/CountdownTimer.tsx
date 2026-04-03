"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  label?: string;
  variant?: "dark" | "light";
}

function calcTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const labels = { days: "Días", hours: "Hrs", minutes: "Min", seconds: "Seg" };

export function CountdownTimer({ targetDate, label, variant = "light" }: CountdownTimerProps) {
  const [time, setTime] = useState(calcTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setTime(calcTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const boxBg = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <div className="text-center">
      {label && <p className="font-display text-xl sm:text-2xl mb-6">{label}</p>}

      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {(Object.keys(time) as (keyof typeof time)[]).map((key, i) => (
          <div key={key} className="flex items-center gap-3 sm:gap-4">
            <div className={`rounded-2xl p-4 sm:p-6 min-w-[70px] sm:min-w-[90px] ${boxBg}`}>
              <div className="font-mono text-3xl sm:text-4xl md:text-5xl text-gradient font-medium">
                {String(time[key]).padStart(2, "0")}
              </div>
              <p className="text-muted text-xs mt-1">{labels[key]}</p>
            </div>
            {i < 3 && (
              <span className="text-primary/30 text-2xl font-light">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
