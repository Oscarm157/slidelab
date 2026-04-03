# Slidelab — Presentación Web Profesional

## Qué es este proyecto
Un pitch deck / presentación web construido con Next.js, desplegable en Vercel. Es 100% estático, sin backend.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (config via `@theme inline` en globals.css, NO hay tailwind.config.js)
- Recharts para gráficas
- CSS puro para animaciones (NO uses framer-motion)
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
├── components/              → Componentes reutilizables
│   ├── SlideLayout.tsx      → Orquestador de navegación y transiciones
│   ├── Slide.tsx            → Wrapper de cada slide (variant: dark/light)
│   ├── SlideNavigation.tsx  → Barra superior (contador, flechas, fullscreen)
│   ├── ProgressBar.tsx      → Barra de progreso inferior
│   ├── SectionHeader.tsx    → Encabezado de sección (número + título)
│   ├── StatCard.tsx         → Card de métrica con counter animado
│   ├── FeatureCard.tsx      → Card con ícono + título + descripción
│   ├── QuoteBlock.tsx       → Cita estilizada
│   ├── TimelineBlock.tsx    → Timeline horizontal de fases
│   ├── ImageZoom.tsx        → Lupa interactiva sobre imágenes
│   ├── ChartWrapper.tsx     → Wrapper para gráficas Recharts
│   └── AnimatedCounter.tsx  → Contador animado
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
- **Animaciones:** Usa las clases CSS de `styles/animations.css` (slide-enter, stagger-in, hero-fade-in, etc.). No instales framer-motion.
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

## El usuario
Es un profesional creativo, no necesariamente programador. Sé directo, práctico y orientado al resultado visual. Evita explicaciones teóricas de React o TypeScript — mejor muestra el código funcionando.
