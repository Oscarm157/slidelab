# Slidelab — Presentación Web Profesional

## Qué es este proyecto
Un pitch deck / presentación web construido con Next.js, desplegable en Vercel. Es 100% estático, sin backend.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (config via `@theme inline` en globals.css, NO hay tailwind.config.js)
- Recharts para gráficas
- motion.dev para animaciones interactivas (transiciones, hover, stagger)
- CSS para animaciones simples (shimmer, pulse, glow, fade-in)
- Google Fonts via `next/font/google`
- Material Symbols Outlined para íconos

## Estructura

```
src/
├── config/deck.config.ts    → Configuración central (título, colores, fonts)
├── app/
│   ├── layout.tsx           → Root layout, carga fonts e inyecta CSS vars
│   ├── page.tsx             → Ensambla los slides en SlideLayout
│   └── globals.css          → Tailwind + tema + estilos base
├── components/              → 55 componentes reutilizables
│   ├── **Infraestructura:** SlideLayout, Slide, SlideNavigation, ProgressBar, FullscreenToggle
│   ├── **Encabezados:** SectionHeader
│   ├── **Cards:** FeatureCard, StatCard, ValueCard, CaseStudyCard, TestimonialCard, SpeakerCard, ContactCard
│   ├── **Texto:** QuoteBlock, IconList, ProConList, FAQAccordion, CTABanner
│   ├── **Datos:** AnimatedCounter, KPIRow, DataCallout, MetricDelta, MiniChart, ComparisonTable
│   ├── **Charts:** ChartWrapper, FunnelChart
│   ├── **Proceso:** TimelineBlock, ProcessFlow, MilestoneTimeline, StepByStep
│   ├── **Precios:** PricingTable
│   ├── **People:** TeamGrid, OrgChart
│   ├── **Visual:** ImageZoom, ImageGrid, LogoCloud, BeforeAfter, FloorPlanViewer
│   ├── **Layout:** SplitSlide, CardGrid, FeatureShowcase, MatrixGrid, SpecSheet
│   ├── **Eventos:** AgendaList, CountdownTimer, MapEmbed
│   └── **Motion:** StaggerReveal + StaggerItem
├── slides/                  → Un archivo por slide
├── hooks/                   → Lógica de navegación
└── styles/animations.css    → Keyframes CSS reutilizables
```

## Cómo agregar un nuevo slide

1. Crea un archivo en `src/slides/` (ej: `Slide07Nuevo.tsx`)
2. Usa el componente `<Slide>` como wrapper:
   ```tsx
   import { Slide } from "@/components/Slide";
   
   export function Slide07Nuevo() {
     return (
       <Slide variant="dark">
         {/* Tu contenido aquí */}
       </Slide>
     );
   }
   ```
3. Impórtalo en `src/app/page.tsx` y agrégalo dentro de `<SlideLayout>`

## Cómo modificar el tema
Edita `src/config/deck.config.ts`. Los colores se inyectan como CSS variables automáticamente.
Si cambias los fonts, también actualiza los imports en `src/app/layout.tsx`.

## Convenciones
- **Animaciones interactivas:** Usa motion.dev (`import { motion } from "motion/react"`). Para hover, transiciones, stagger reveals.
- **Animaciones simples:** Usa clases CSS de `styles/animations.css` (shimmer, pulse, glow, hero-fade-in).
- **Stagger reveal:** Usa `<StaggerReveal>` + `<StaggerItem>` en vez de la clase CSS `stagger-in`.
- **Íconos:** Usa Material Symbols Outlined: `<span className="material-symbols-outlined">icon_name</span>`. Catálogo: https://fonts.google.com/icons
- **Slides dark/light:** Alterna entre `variant="dark"` y `variant="light"` para contraste visual.
- **Responsive:** Usa breakpoints de Tailwind (sm:, md:, lg:). Mobile-first.
- **Comentarios en español**, nombres de variables y funciones en inglés.

## Navegación
- Flechas izquierda/derecha: slide anterior/siguiente
- Espacio: siguiente slide
- F: pantalla completa
- Escape: salir de pantalla completa
- Home/End: primer/último slide
- Touch: swipe horizontal en móvil

## Skills disponibles
Lee los archivos en `.skills/` para guías detalladas:
- **create-presentation.md** — Guía maestra para crear una presentación completa (estructuras por industria, patrones, técnicas premium)
- **component-guide.md** — Referencia de TODOS los componentes con sus props exactas
- **add-animation.md** — Agregar animaciones CSS y motion.dev
- **add-chart.md** — Agregar gráficas con Recharts
- **add-map.md** — Agregar Google Maps
- **add-video.md** — Embeber video
- **customize-theme.md** — Cambiar colores y tipografía
- **deploy-vercel.md** — Deploy en Vercel
- **responsive.md** — Hacer responsive un slide

## El usuario
Es un profesional creativo, no necesariamente programador. Sé directo, práctico y orientado al resultado visual. Evita explicaciones teóricas de React o TypeScript — mejor muestra el código funcionando.
