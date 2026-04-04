"use client";

import { motion } from "motion/react";

interface ProximityItem {
  place: string;
  time: string;
}

interface MapEmbedProps {
  embedUrl?: string;
  image?: string;
  address?: string;
  details?: string[];
  proximity?: ProximityItem[];
  variant?: "dark" | "light";
}

export function MapEmbed({ embedUrl, image, address, details, proximity, variant = "light" }: MapEmbedProps) {
  const cardBg = variant === "dark"
    ? "bg-bg-dark/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
    : "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)]";

  return (
    <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      {/* Map content */}
      {embedUrl ? (
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa"
        />
      ) : image ? (
        <img src={image} alt="Mapa" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-muted/5 flex items-center justify-center">
          <span className="material-symbols-outlined text-muted/20 text-[64px]">map</span>
        </div>
      )}

      {/* Vignette overlay */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.15)] rounded-2xl" />

      {/* Animated pin */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="relative">
          <span className="material-symbols-outlined text-primary text-[36px] drop-shadow-lg" style={{ fontVariationSettings: '"FILL" 1' }}>
            location_on
          </span>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 rounded-full bg-black/20 blur-sm" />
        </div>
      </div>

      {/* Info card overlay */}
      {(address || proximity) && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm"
        >
          <div className={`rounded-xl overflow-hidden ${cardBg}`}>
            {address && (
              <div className="px-4 py-3 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{address}</p>
                  {details && details.map((d, i) => (
                    <p key={i} className="text-muted text-xs mt-0.5">{d}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Proximity grid (como Central Ocho) */}
            {proximity && proximity.length > 0 && (
              <>
                <div className="px-4 py-2 bg-primary/5 flex items-center justify-between">
                  <span className="text-xs font-semibold">Zona de influencia</span>
                  <span className="text-primary font-mono text-[10px]">{proximity.length} puntos</span>
                </div>
                <div className="grid grid-cols-2">
                  {proximity.map((p, i) => (
                    <div
                      key={p.place}
                      className={`flex items-center justify-between px-4 py-2 ${
                        i % 2 === 0 ? "border-r border-primary/5" : ""
                      } ${i < proximity.length - 2 ? "border-b border-primary/5" : ""}`}
                    >
                      <span className="text-muted text-xs truncate mr-2">{p.place}</span>
                      <span className="text-primary font-mono text-xs font-medium shrink-0">{p.time}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
