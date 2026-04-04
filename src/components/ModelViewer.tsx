"use client";

import { useEffect } from "react";

interface ModelViewerProps {
  src: string;
  poster?: string;
  alt?: string;
  height?: number;
  variant?: "dark" | "light";
}

export function ModelViewer({ src, poster, alt = "Modelo 3D", height = 400, variant = "light" }: ModelViewerProps) {
  // Cargar model-viewer web component desde CDN
  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";
      document.head.appendChild(script);
    }
  }, []);

  const bg = variant === "dark" ? "bg-card/80" : "bg-white/80";

  return (
    <div className={`rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)] ${bg}`} style={{ height }}>
      {/* @ts-expect-error model-viewer is a web component */}
      <model-viewer
        src={src}
        poster={poster}
        alt={alt}
        auto-rotate
        camera-controls
        shadow-intensity="1"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
