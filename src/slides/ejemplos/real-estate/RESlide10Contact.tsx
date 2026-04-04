"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export function RESlide10Contact() {
  return (
    <Slide variant="light">
      <div className="flex flex-col h-full p-12 items-center justify-center text-center gap-8">
        <StaggerReveal>
          <StaggerItem>
            <span className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">
              Da el siguiente paso
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-5xl font-bold mt-4">
              <span className="text-gradient">Agenda tu visita</span>
              <br />
              <span className="text-gradient">al showroom</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl text-gray-600 max-w-xl mx-auto mt-4">
              Conoce en persona cada detalle de Residencial Bosque Verde.
              Nuestros asesores te esperan.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.a
            href="https://calendly.com/bosqueverde"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#1B4D3E] text-white rounded-full text-lg font-semibold shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-900/30 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Agendar visita
          </motion.a>

          <div className="flex flex-col sm:flex-row gap-8 text-gray-500 text-sm mt-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +52 (33) 1234-5678
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ventas@bosqueverde.mx
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Av. Bosque Real 2400, Zapopan
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-lg mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <CalendlyEmbed url="https://calendly.com/bosqueverde" />
        </motion.div>
      </div>
    </Slide>
  );
}
