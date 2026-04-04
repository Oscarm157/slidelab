"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function ARSlide01Cover() {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Full-bleed background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=80)",
        }}
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-screen px-8 sm:px-14 pb-16 pt-20">
        <StaggerReveal className="max-w-3xl">
          <StaggerItem>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium tracking-wider mb-6">
              Est. 2008 · CDMX
            </span>
          </StaggerItem>

          <StaggerItem>
            <h1
              className="font-display text-5xl sm:text-7xl md:text-8xl font-bold mb-6"
              style={{
                background: "linear-gradient(135deg, #D97706, #FBBF24, #D97706)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Estudio Forma
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-white/60 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
              Arquitectura e interiorismo con identidad. Diseñamos espacios que transforman la manera de habitar.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <AnimatedCounter target={180} suffix="+" />
                </div>
                <div className="text-sm text-white/60 mt-1">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <AnimatedCounter target={15} />
                </div>
                <div className="text-sm text-white/60 mt-1">Premios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <AnimatedCounter target={12} />
                </div>
                <div className="text-sm text-white/60 mt-1">Arquitectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <AnimatedCounter target={3} />
                </div>
                <div className="text-sm text-white/60 mt-1">Sedes</div>
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </div>
  );
}
