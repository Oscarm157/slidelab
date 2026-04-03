"use client";

import { useState, useRef } from "react";

interface ImageZoomProps {
  src: string;
  alt: string;
  lensSize?: number;
  zoomLevel?: number;
}

export function ImageZoom({
  src,
  alt,
  lensSize = 200,
  zoomLevel = 2,
}: ImageZoomProps) {
  const [zoomEnabled, setZoomEnabled] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoomEnabled || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setLensPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative">
      {/* Botón para activar/desactivar la lupa */}
      <button
        onClick={() => setZoomEnabled(!zoomEnabled)}
        className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors"
        aria-label={zoomEnabled ? "Desactivar lupa" : "Activar lupa"}
      >
        <span className="material-symbols-outlined text-[20px]">
          {zoomEnabled ? "zoom_out" : "zoom_in"}
        </span>
      </button>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden rounded-xl cursor-crosshair"
      >
        {/* Imagen base */}
        <img src={src} alt={alt} className="w-full h-auto" draggable={false} />

        {/* Lupa circular */}
        {zoomEnabled && (
          <div
            className="absolute pointer-events-none rounded-full border-2 border-white/60 shadow-2xl"
            style={{
              width: lensSize,
              height: lensSize,
              left: lensPos.x - lensSize / 2,
              top: lensPos.y - lensSize / 2,
              backgroundImage: `url(${src})`,
              backgroundSize: `${(containerRef.current?.offsetWidth ?? 0) * zoomLevel}px auto`,
              backgroundPosition: `-${lensPos.x * zoomLevel - lensSize / 2}px -${lensPos.y * zoomLevel - lensSize / 2}px`,
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
      </div>
    </div>
  );
}
