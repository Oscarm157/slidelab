"use client";

import { Slide } from "@/components/Slide";
import { TeamGrid } from "@/components/TeamGrid";
import { LogoCloud } from "@/components/LogoCloud";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

// ─────────────────────────────────────────────
// Slide 11 — El Equipo + Investors
// TeamGrid + LogoCloud de partners
// ─────────────────────────────────────────────

const team = [
  {
    name: "María Fernández",
    role: "CEO & Co-founder",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
    bio: "Ex-VP Product en Rappi. Stanford MBA. 12 años en product analytics.",
  },
  {
    name: "Carlos Mendoza",
    role: "CTO & Co-founder",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    bio: "Ex-Staff Engineer en Datadog. PhD en ML por MIT. 15+ patentes en AI.",
  },
  {
    name: "Ana Torres",
    role: "VP of Engineering",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
    bio: "Ex-Stripe, lideró el equipo de data infrastructure. 10 años en distributed systems.",
  },
  {
    name: "Diego Ramírez",
    role: "Head of Sales",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    bio: "Ex-Salesforce LATAM. Construyó equipos de ventas de 0 a $10M ARR.",
  },
];

const logos = [
  { src: "https://logo.clearbit.com/ycombinator.com", alt: "Y Combinator" },
  { src: "https://logo.clearbit.com/sequoiacap.com", alt: "Sequoia" },
  { src: "https://logo.clearbit.com/a16z.com", alt: "a16z" },
  { src: "https://logo.clearbit.com/stripe.com", alt: "Stripe" },
  { src: "https://logo.clearbit.com/google.com", alt: "Google Ventures" },
  { src: "https://logo.clearbit.com/nvidia.com", alt: "NVIDIA" },
];

export function SUSlide11Team() {
  return (
    <Slide variant="dark" className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 80%, color-mix(in srgb, var(--t-primary) 5%, transparent), transparent)",
        }}
      />

      <StaggerReveal className="relative">
        <StaggerItem>
          <div className="mb-8">
            <span className="font-mono text-sm text-fg-light/20 block mb-2">11</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-fg-light tracking-tight">
              El equipo
            </h2>
            <p className="mt-3 text-fg-light/40 text-base max-w-lg">
              Operadores con experiencia en las empresas que definieron la categoría.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <TeamGrid members={team} columns={4} variant="dark" />
        </StaggerItem>

        <StaggerItem>
          <div className="mt-10">
            <p className="text-fg-light/30 text-xs uppercase tracking-widest mb-4">
              Respaldados por
            </p>
            <LogoCloud logos={logos} columns={6} grayscale variant="dark" />
          </div>
        </StaggerItem>
      </StaggerReveal>
    </Slide>
  );
}
