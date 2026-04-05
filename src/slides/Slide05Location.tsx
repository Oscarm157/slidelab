"use client";

import { Slide } from "@/components/Slide";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 5 — Showcase: presentaciones reales
// ─────────────────────────────────────────────

const projects = [
  {
    url: "https://central-ocho.vercel.app",
    name: "Central Ocho",
    desc: "Pitch de inversión inmobiliaria — 12 slides con renders, mapas, gráficas financieras y lupa interactiva.",
    tags: ["Real estate", "Inversión", "12 slides"],
  },
  {
    url: "https://atisa-ia.vercel.app/ai-challenge",
    name: "ATISA AI Challenge",
    desc: "Campaña interna de adopción de IA para 250 personas — timeline, métricas, awards.",
    tags: ["Corporativo", "IA", "11 slides"],
  },
];

export function Slide05Location() {
  return (
    <Slide variant="dark">
      <StaggerReveal>
        <StaggerItem>
          <div className="mb-8">
            <span className="font-mono text-sm text-fg-light/35 block mb-2">05</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-fg-light tracking-tight">
              Construidos con esta tecnología
            </h2>
            <p className="mt-2 text-fg-light/40 text-base">
              Proyectos reales, desplegados y en producción.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.name} className="bg-card/60 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
                {/* Browser chrome */}
                <div className="bg-[#1c1c1c] px-4 py-2 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 bg-[#0a0a0a] rounded-md px-3 py-0.5 text-[10px] text-fg-light/30 font-mono truncate">
                    {p.url.replace("https://", "")}
                  </div>
                </div>
                {/* Iframe */}
                <div className="aspect-[21/9]">
                  <iframe src={p.url} className="w-full h-full border-0" title={p.name} loading="lazy" />
                </div>
                {/* Info */}
                <div className="px-5 py-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-base text-fg-light">{p.name}</h3>
                    <p className="text-muted text-xs mt-1 max-w-md">{p.desc}</p>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
