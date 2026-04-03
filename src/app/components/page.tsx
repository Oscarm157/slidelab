"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";
import { StatCard } from "@/components/StatCard";
import { QuoteBlock } from "@/components/QuoteBlock";
import { TimelineBlock } from "@/components/TimelineBlock";
import { ImageZoom } from "@/components/ImageZoom";
import { ChartWrapper } from "@/components/ChartWrapper";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// ─────────────────────────────────────────────
// Catálogo de componentes
// Ruta: /components
// ─────────────────────────────────────────────

const chartData = [
  { mes: "Ene", valor: 40 },
  { mes: "Feb", valor: 65 },
  { mes: "Mar", valor: 80 },
  { mes: "Abr", valor: 95 },
];

const timelinePhases = [
  { icon: "search", title: "Diagnóstico", description: "Análisis inicial del proyecto.", label: "Sem 1–2" },
  { icon: "architecture", title: "Diseño", description: "Prototipos y validación.", label: "Sem 3–5" },
  { icon: "code", title: "Desarrollo", description: "Implementación por sprints.", label: "Sem 6–10" },
  { icon: "rocket_launch", title: "Lanzamiento", description: "Deploy y monitoreo.", label: "Sem 11–12" },
];

function ComponentSection({ title, description, children, variant = "dark" }: {
  title: string;
  description: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  const bg = variant === "dark" ? "bg-bg-dark text-fg-light" : "bg-bg-light text-fg-dark";
  return (
    <section className={`px-6 sm:px-10 md:px-14 py-16 sm:py-20 ${bg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-2">{title}</p>
          <p className="text-muted text-sm max-w-lg">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function ComponentsPage() {
  return (
    <div className="w-full min-h-screen overflow-y-auto">
      {/* Hero */}
      <section className="bg-bg-dark text-fg-light px-6 sm:px-10 md:px-14 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <StaggerReveal>
            <StaggerItem>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-primary/40" />
                <span className="font-mono text-[11px] tracking-[0.35em] text-primary uppercase">Slidelab</span>
                <div className="h-px w-16 bg-primary/40" />
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">
                Componentes
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-fg-light/50 text-lg max-w-xl">
                Todos los componentes disponibles para construir tu presentación. Copia, adapta y combina.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* SectionHeader */}
      <ComponentSection
        title="SectionHeader"
        description="Encabezado de sección con número, línea decorativa, título y subtítulo opcional."
        variant="light"
      >
        <SectionHeader
          number="01"
          title="Título de la sección"
          subtitle="Subtítulo descriptivo que acompaña al título principal de la sección."
        />
      </ComponentSection>

      {/* FeatureCard */}
      <ComponentSection
        title="FeatureCard"
        description="Card con ícono, título y descripción. Hover con elevación spring. Variantes dark y light."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard icon="water_drop" title="Captación pluvial" description="Sistema de recolección que cubre el 40% del consumo." variant="dark" />
          <FeatureCard icon="air" title="Ventilación cruzada" description="Orientación norte-sur que reduce climatización artificial." variant="dark" />
          <FeatureCard icon="park" title="Jardín central" description="360 m² de área verde con especies nativas." variant="dark" />
        </div>
        <p className="text-xs text-muted/50 font-mono mt-4">variant=&quot;dark&quot;</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 bg-bg-light/10 rounded-2xl p-6">
          <FeatureCard icon="shield" title="Estructura legal" description="Fideicomiso de garantía para cada inversionista." variant="light" />
          <FeatureCard icon="trending_up" title="Plusvalía" description="Crecimiento sostenido documentado en la zona." variant="light" />
          <FeatureCard icon="verified" title="Track record" description="3 desarrollos entregados en los últimos 5 años." variant="light" />
        </div>
        <p className="text-xs text-muted/50 font-mono mt-4">variant=&quot;light&quot;</p>
      </ComponentSection>

      {/* StatCard */}
      <ComponentSection
        title="StatCard"
        description="Métrica con contador animado. El número cuenta de 0 al valor con easing cubic."
        variant="light"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value={198} suffix=" ud." label="Unidades vendidas" variant="light" />
          <StatCard value={52} suffix="%" label="Crecimiento anual" variant="light" />
          <StatCard value={4.2} suffix="M" prefix="$" label="Facturación" decimals={1} variant="light" />
          <StatCard value={96} suffix="%" label="Retención" variant="light" />
        </div>
      </ComponentSection>

      {/* QuoteBlock */}
      <ComponentSection
        title="QuoteBlock"
        description="Cita estilizada con borde accent, tipografía serif en itálica y autor opcional."
      >
        <div className="space-y-6 max-w-2xl">
          <QuoteBlock
            text="Un proyecto donde la arquitectura responde al clima, no lo combate."
            author="Estudio de arquitectura"
            variant="dark"
          />
          <div className="bg-bg-light/10 rounded-2xl p-6">
            <QuoteBlock
              text="El producto que supera el estándar de mercado en su rango de precio."
              variant="light"
            />
          </div>
        </div>
      </ComponentSection>

      {/* TimelineBlock */}
      <ComponentSection
        title="TimelineBlock"
        description="Timeline horizontal de 4 fases con línea conectora, íconos y labels. Se apila en móvil."
        variant="light"
      >
        <TimelineBlock phases={timelinePhases} variant="light" />
      </ComponentSection>

      {/* AnimatedCounter */}
      <ComponentSection
        title="AnimatedCounter"
        description="Contador que anima de 0 al valor objetivo con easing ease-out cubic. Soporta prefijo, sufijo y decimales."
      >
        <div className="flex items-end gap-12">
          <div>
            <div className="text-gradient font-mono text-5xl sm:text-6xl font-medium">
              <AnimatedCounter target={15} suffix="%" />
            </div>
            <p className="text-muted text-sm mt-2">Rendimiento</p>
          </div>
          <div>
            <div className="text-gradient font-mono text-5xl sm:text-6xl font-medium">
              <AnimatedCounter target={8.4} prefix="$" suffix="M" decimals={1} />
            </div>
            <p className="text-muted text-sm mt-2">Facturación</p>
          </div>
          <div>
            <div className="text-gradient font-mono text-5xl sm:text-6xl font-medium">
              <AnimatedCounter target={30} />
            </div>
            <p className="text-muted text-sm mt-2">Meses</p>
          </div>
        </div>
      </ComponentSection>

      {/* ChartWrapper + Recharts */}
      <ComponentSection
        title="ChartWrapper + Recharts"
        description="Wrapper responsive para gráficas de Recharts. Soporta BarChart, LineChart, AreaChart, PieChart, etc."
        variant="light"
      >
        <div className="bg-white/80 rounded-2xl p-4 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <ChartWrapper height={280}>
            <BarChart data={chartData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="mes" stroke="#999" fontSize={12} tickLine={false} />
              <YAxis stroke="#999" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: 12,
                  fontSize: 13,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              />
              <Bar dataKey="valor" fill="var(--t-primary)" radius={[6, 6, 0, 0]} name="Valor" />
            </BarChart>
          </ChartWrapper>
        </div>
      </ComponentSection>

      {/* ImageZoom */}
      <ComponentSection
        title="ImageZoom"
        description="Lupa interactiva sobre imágenes. Clic en el ícono para activar, mueve el mouse para explorar."
      >
        <div className="max-w-xl">
          <ImageZoom
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
            alt="Detalle arquitectónico"
          />
        </div>
      </ComponentSection>

      {/* StaggerReveal */}
      <ComponentSection
        title="StaggerReveal + StaggerItem"
        description="Wrapper de motion.dev que anima los hijos secuencialmente con spring physics. Reemplaza la clase CSS stagger-in."
        variant="light"
      >
        <p className="text-muted text-xs font-mono mb-4">Los componentes de esta página usan StaggerReveal — recarga para ver el efecto.</p>
        <div className="bg-fg-dark/5 rounded-2xl p-6 font-mono text-sm text-fg-dark/70 space-y-1">
          <p>&lt;StaggerReveal&gt;</p>
          <p className="pl-4">&lt;StaggerItem&gt;Elemento 1&lt;/StaggerItem&gt;</p>
          <p className="pl-4">&lt;StaggerItem&gt;Elemento 2&lt;/StaggerItem&gt;</p>
          <p className="pl-4">&lt;StaggerItem&gt;Elemento 3&lt;/StaggerItem&gt;</p>
          <p>&lt;/StaggerReveal&gt;</p>
        </div>
      </ComponentSection>

      {/* Nav footer */}
      <section className="bg-bg-dark text-fg-light px-6 sm:px-10 md:px-14 py-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="text-sm">Volver a la presentación</span>
          </a>
          <span className="font-mono text-xs text-muted">Slidelab</span>
        </div>
      </section>
    </div>
  );
}
