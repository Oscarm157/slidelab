"use client";

import { useState, useRef } from "react";

interface ImageCompareSide {
  src: string;
  label?: string;
}

interface ImageCompareProps {
  before: ImageCompareSide;
  after: ImageCompareSide;
  height?: number;
  variant?: "dark" | "light";
}

export function ImageCompare({ before, after, height = 400, variant = "light" }: ImageCompareProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPosition(x);
  };

  const onMouseDown = () => { dragging.current = true; };
  const onMouseUp = () => { dragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePosition(e.clientX); };
  const onTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden cursor-col-resize select-none shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
      style={{ height }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After (fondo completo) */}
      <img src={after.src} alt={after.label ?? "Después"} className="absolute inset-0 w-full h-full object-cover" />

      {/* Before (clip) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={before.src}
          alt={before.label ?? "Antes"}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minWidth: containerRef.current?.offsetWidth ?? "100%" }}
        />
      </div>

      {/* Línea divisoria */}
      <div className="absolute top-0 bottom-0 z-10" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
        <div className="w-0.5 h-full bg-white/80" />
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.2)] flex items-center justify-center">
          <span className="material-symbols-outlined text-fg-dark text-[20px]">drag_indicator</span>
        </div>
      </div>

      {/* Labels */}
      {before.label && (
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-[11px] font-medium">
            {before.label}
          </span>
        </div>
      )}
      {after.label && (
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-[11px] font-medium">
            {after.label}
          </span>
        </div>
      )}
    </div>
  );
}
