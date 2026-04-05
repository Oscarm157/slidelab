# Create Presentation — Crear una presentación completa desde cero

Este es el skill principal de Slidelab. Sigue estos pasos para crear una presentación profesional.

## Paso 1: Configurar el tema

Edita `src/config/deck.config.ts` con los colores y datos del cliente:

```ts
export const deckConfig = {
  title: "Nombre de la Presentación",
  subtitle: "Subtítulo descriptivo",
  author: "Nombre del autor",
  totalSlides: 10, // Ajustar al número real de slides
  
  theme: {
    primary: "#6366F1",        // Color principal de la marca
    primaryLight: "#818CF8",   // Variante clara del primary
    background: "#0a0a0a",     // Fondo oscuro
    backgroundLight: "#F5F0EB",// Fondo claro
    foreground: "#1a1a1a",     // Texto sobre fondo claro
    foregroundLight: "#F5F5F5",// Texto sobre fondo oscuro
    muted: "#5A5A5A",
    card: "#141414",
    cardLight: "#E8E0D6",
    cardBorder: "#222222",
  },
  fonts: {
    display: "var(--font-serif)",
    body: "var(--font-jakarta)",
    mono: "var(--font-dm-mono)",
  },
  navigation: {
    showProgress: true,
    showSlideCount: true,
    enableKeyboard: true,
    enableFullscreen: true,
    enableTouch: true,
  },
};
```

Si necesitas cambiar las tipografías, también actualiza los imports en `src/app/layout.tsx`.

## Paso 2: Planear la estructura

Elige los slides según el tipo de presentación:

### Pitch Deck (Startup/Emprendimiento) — 10-12 slides
1. Cover (dark) — Título + dato hero + visual
2. Problema (light) — Pain points con urgencia
3. Solución (dark) — Features + mockup/demo
4. Cómo funciona (light) — ProcessFlow 4 pasos
5. Mercado (dark) — DataCallout TAM + charts
6. Tracción (light) — KPIRow + MetricDelta
7. Competencia (dark) — ComparisonTable
8. Pricing (light) — PricingTable 3 tiers
9. Roadmap (dark) — MilestoneTimeline
10. Equipo (light) — TeamGrid + LogoCloud
11. The Ask (dark) — DataCallout + distribución
12. Contacto (light) — CTABanner + CalendlyEmbed

### Propuesta / Consultoría — 10 slides
1. Cover (dark) — Título elegante
2. El Reto (light) — StatCard x3 + contexto
3. Enfoque (dark) — MatrixGrid 2x2
4. Metodología (light) — StepByStep 4-5 pasos
5. Equipo (dark) — TeamGrid + OrgChart
6. Resultados esperados (light) — BeforeAfter + MetricDelta
7. Casos similares (dark) — CaseStudyCard x2
8. Pros/Contras (light) — ProConList
9. Inversión (dark) — PricingTable + MilestoneTimeline
10. Siguientes pasos (light) — StepByStep + FormEmbed

### Portfolio / Agencia — 10 slides
1. Cover (dark) — Hero visual
2. Filosofía (light) — SplitSlide + QuoteBlock
3. Servicios (dark) — FeatureCard x4-6 en CardGrid
4. Proceso (light) — ProcessFlow o TimelineBlock
5. Proyecto estrella (dark) — ImageCompare + SpecSheet
6. Galería (light) — ImageGrid
7. Testimonios (dark) — TestimonialCard x3
8. Clientes (light) — LogoCloud
9. Casos de estudio (dark) — CaseStudyCard x2
10. Contacto (light) — CTABanner + CalendlyEmbed

### Reporte de Resultados — 10 slides
1. Cover (dark) — Título + periodo
2. Highlights (light) — KPIRow + StatCard x4-6
3. Revenue (dark) — ChartWrapper con BarChart
4. Productos/Divisiones (light) — FeatureCard en CardGrid
5. Regional (dark) — Barras animadas por región
6. Pipeline / R&D (light) — MilestoneTimeline
7. Operaciones (dark) — SpecSheet + barras
8. ESG / Impacto (light) — IconList + DataCallout
9. Equipo (dark) — TeamGrid
10. Outlook (light) — Targets + QuoteBlock + CTA

### Evento / Conferencia — 10 slides
1. Cover (dark) — CountdownTimer + título
2. Sobre el evento (light) — ValueCard x3
3. Agenda (dark) — AgendaList
4. Speakers (light) — SpeakerCard x3-4
5. Testimonios (dark) — TestimonialCard x3
6. Venue (light) — MapEmbed + ImageGrid
7. Música/Vibe (dark) — SpotifyEmbed + AudioPlayer
8. Social (light) — SocialEmbed
9. Mentoría (dark) — CalendlyEmbed
10. Registro (light) — FormEmbed + CountdownTimer

### Catálogo / Ventas — 10 slides
1. Cover (dark) — Hero producto
2. Propuesta de valor (light) — ValueCard x3
3. Producto principal (dark) — FeatureShowcase
4. Especificaciones (light) — SpecSheet
5. Comparativa (dark) — ComparisonTable
6. Galería (light) — ImageGrid o ImageZoom
7. Testimonios (dark) — TestimonialCard
8. Pricing (light) — PricingTable
9. FAQ (dark) — FAQAccordion
10. Contacto (light) — CTABanner + CalendlyEmbed

### Educación / Curso — 10 slides
1. Cover (dark) — Título + dato impactante
2. El problema (light) — IconList con pain points
3. Qué aprenderás (dark) — FeatureCard x4-6
4. Temario (light) — AgendaList o StepByStep
5. Metodología (dark) — ProcessFlow
6. Resultados (light) — StatCard + TestimonialCard
7. Instructor (dark) — TeamGrid + bio
8. Pricing (light) — PricingTable
9. FAQ (dark) — FAQAccordion
10. Inscripción (light) — CTABanner + FormEmbed

## Paso 3: Crear los archivos de slides

Cada slide es un archivo en `src/slides/`. Sigue este patrón:

```tsx
"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
// Importar los componentes que necesites

export function Slide01Cover() {
  return (
    <Slide variant="dark">
      <div className="flex flex-col h-full p-12 gap-8">
        <StaggerReveal>
          <StaggerItem>
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">
              Subtítulo
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-4xl font-bold mt-2">
              <span className="text-gradient">Título Principal</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-white/60 mt-2">
              Descripción del slide.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <motion.div
          className="flex-1 min-h-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Componentes del slide aquí */}
        </motion.div>
      </div>
    </Slide>
  );
}
```

### Reglas de naming
- Archivo: `Slide01Cover.tsx`, `Slide02Problem.tsx`, etc.
- Función: `Slide01Cover`, `Slide02Problem`, etc.
- Para ejemplos por ruta, usar prefijo: `SUSlide01Cover.tsx` (startup), `RESlide01Cover.tsx` (real estate)

### Ritmo visual
- **Alternar dark/light** en cada slide para crear contraste
- Slides impares: dark. Slides pares: light (o viceversa)
- El cover siempre es dark
- El slide final puede romper el patrón si necesita contraste especial

## Paso 4: Ensamblar en page.tsx

```tsx
"use client";

import { SlideLayout } from "@/components/SlideLayout";
import { Slide01Cover } from "@/slides/Slide01Cover";
import { Slide02Problem } from "@/slides/Slide02Problem";
// ... importar todos

export default function PresentationPage() {
  return (
    <SlideLayout>
      <Slide01Cover />
      <Slide02Problem />
      {/* ... todos los slides en orden */}
    </SlideLayout>
  );
}
```

Actualiza `totalSlides` en `deck.config.ts` para que coincida.

## Paso 5: Técnicas premium

### Títulos con gradiente
```tsx
<span className="text-gradient">Texto importante</span>
```

### Números animados
```tsx
import { AnimatedCounter } from "@/components/AnimatedCounter";
<AnimatedCounter target={1500} prefix="$" suffix="K" />
```

### Hover en cards
```tsx
<motion.div
  whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 17 } }}
>
```

### Stagger de entrada
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
>
```

### Glow en datos hero
```tsx
<div className="glow-accent">
  <DataCallout value={47} prefix="$" suffix="B" label="TAM" variant="dark" />
</div>
```

### Shimmer en badges
```tsx
<span className="shimmer px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
  Recomendado
</span>
```

### Barras animadas
```tsx
<motion.div
  className="h-3 rounded-full bg-primary"
  initial={{ width: 0 }}
  animate={{ width: "75%" }}
  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
/>
```

## Paso 6: Verificar

1. `npm run dev` — revisar cada slide visualmente
2. Verificar navegación: flechas, espacio, touch
3. Verificar responsive: reducir ventana a mobile
4. `npm run build` — debe compilar sin errores
5. Deploy: `vercel` o `vercel --prod`

## Errores comunes

- **No olvides `"use client"`** al inicio de cada slide
- **No uses `value=` en AnimatedCounter**, usa `target=`
- **KPIRow usa `items=`**, no `kpis=`
- **ComparisonTable usa `columns=[{label, highlighted}]`**, no `headers=[]`
- **QuoteBlock usa `text=`**, no `quote=`
- **MapEmbed proximity usa `place`**, no `label`
- **FloorPlanViewer requiere `alt`** además de `image`
- **CardGrid columns acepta 2|3|4**, no 1
- **StatCard values son números**, no strings — usa `value={18}` con `suffix="%"`, no `value="18%"`
