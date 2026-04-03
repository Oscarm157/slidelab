# Plan: Boilerplate "Slidelab" — Pitch Deck Template

## Contexto
Oscar está creando un curso para enseñar a profesionales creativos a construir presentaciones web profesionales con Claude Code + Next.js + Vercel. El público no se limita a vibe coders o programadores — es cualquier persona creativa que quiera presentar de forma más envolvente: un ingeniero que quiere mostrar datos de manera distinta, un químico que necesita una presentación impactante, un vendedor que quiere cerrar más, un arquitecto que busca presentar un proyecto de forma inmersiva, un emprendedor con su pitch deck, etc. El boilerplate es el producto estrella: el alumno hace fork, edita un archivo de config, y tiene una presentación lista para personalizar. Se basa en patrones probados de 3 proyectos ya desplegados: Central Ocho (principal), ATISA, y Narrativa.

## Decisiones de arquitectura

1. **Tailwind 4 sin tailwind.config.js** — Config via `@theme inline` en globals.css (como Central Ocho). Un archivo menos.
2. **Navegación modular** — El monolítico `slides-deck.tsx` de Central Ocho se separa en 3 hooks + 4 componentes para que sea más didáctico.
3. **Theming desde `deck.config.ts`** — layout.tsx inyecta CSS variables desde el config. El alumno edita UN solo archivo para cambiar colores/fonts/título.
4. **Slides con data inline** — Cada slide tiene su contenido directo, sin archivo de datos separado. Más simple para principiantes.
5. **Dark/light por slide** — Cada slide declara su variante, no es toggle global.
6. **Fonts hardcoded en layout.tsx** — `next/font/google` no permite imports dinámicos. Comentario claro para que el alumno sepa cambiar ambos archivos.

## Estructura de archivos (~40 archivos, ~1,700 líneas)

```
/root/Slidelab/
├── package.json                          # Next.js 16, React 19, Tailwind 4, Recharts
├── next.config.ts                        # Minimal (output: 'export' para estático)
├── postcss.config.mjs                    # @tailwindcss/postcss
├── tsconfig.json                         # paths: @/* -> ./src/*
├── .gitignore
├── CLAUDE.md                             # Instrucciones para Claude Code
├── README.md                             # Quick Start en español (5 pasos)
│
├── public/
│   └── images/                           # Carpeta vacía con .gitkeep
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout: fonts, CSS vars injection, meta
│   │   ├── page.tsx                      # Entry: importa SlideLayout + 6 slides
│   │   └── globals.css                   # Tailwind 4 import + @theme inline + base styles
│   │
│   ├── config/
│   │   └── deck.config.ts                # Config central: título, paleta, fonts, nav
│   │
│   ├── hooks/
│   │   ├── useSlideNavigation.ts         # Estado: current, direction, goTo/next/prev, sessionStorage
│   │   ├── useKeyboardNav.ts             # Listener: arrows, space, home/end, F, escape
│   │   └── useTouchNav.ts               # Touch/swipe: 80px threshold, 2x horizontal check
│   │
│   ├── components/
│   │   ├── Slide.tsx                     # Wrapper base: viewport, centered, variant dark/light
│   │   ├── SlideLayout.tsx               # Orquestador: wires hooks, renderiza slides con transiciones
│   │   ├── SlideNavigation.tsx           # Top bar: contador "01/06", flechas, fullscreen
│   │   ├── ProgressBar.tsx               # Barra inferior con color accent
│   │   ├── FullscreenToggle.tsx          # Botón fullscreen (usado dentro de SlideNavigation)
│   │   ├── SectionHeader.tsx             # Número + línea + título + subtítulo
│   │   ├── StatCard.tsx                  # Métrica con valor animado + label
│   │   ├── FeatureCard.tsx               # Ícono + título + descripción
│   │   ├── QuoteBlock.tsx                # Cita en itálica con borde izquierdo
│   │   ├── TimelineBlock.tsx             # Timeline horizontal con fases
│   │   ├── ImageZoom.tsx                 # Lupa interactiva (magnifying glass)
│   │   ├── ChartWrapper.tsx              # Wrapper client-side para Recharts
│   │   └── AnimatedCounter.tsx           # Contador animado con requestAnimationFrame
│   │
│   ├── slides/
│   │   ├── Slide01Cover.tsx              # Portada: título, subtítulo, autor, CTA
│   │   ├── Slide02Concept.tsx            # Concepto: número grande, 3 pilares, quote
│   │   ├── Slide03Product.tsx            # Producto: specs + imagen, 2 columnas
│   │   ├── Slide04Data.tsx               # Datos: gráfica de barras con Recharts
│   │   ├── Slide05Timeline.tsx           # Timeline: 4 fases con calendario
│   │   └── Slide06Contact.tsx            # Cierre: datos de contacto, CTA final
│   │
│   └── styles/
│       └── animations.css                # Keyframes: slideEnter, stagger, fade, glow, shimmer
│
└── .skills/                              # 7 skills para Claude Code
    ├── responsive.md
    ├── add-animation.md
    ├── add-chart.md
    ├── add-video.md
    ├── add-map.md
    ├── deploy-vercel.md
    └── customize-theme.md
```

## Implementación por fases

### Fase A: Scaffolding (5 archivos)
1. `package.json` — deps: next@16, react@19, recharts@3, tailwindcss@4, @tailwindcss/postcss
2. `next.config.ts` — minimal config
3. `postcss.config.mjs` — `{ plugins: { "@tailwindcss/postcss": {} } }`
4. `tsconfig.json` — paths alias `@/*` -> `./src/*`
5. `.gitignore` — node_modules, .next, etc.

### Fase B: Core (3 archivos)
1. **`deck.config.ts`** — Config central. Paleta default inspirada en Central Ocho (dorado/beige/oscuro). Fonts: DM Serif Display, Plus Jakarta Sans, DM Mono.
2. **`layout.tsx`** — Importa fonts con next/font/google, inyecta CSS vars desde deckConfig en `<html style={...}>`, link a Material Symbols, metadata desde config.
3. **`globals.css`** — `@import "tailwindcss"`, `@import "../styles/animations.css"`, `@theme inline` que mapea CSS vars a Tailwind (--color-primary, --font-sans, etc.), estilos base (scrollbar-hide, safe-area).

### Fase C: Animaciones (1 archivo)
- **`animations.css`** — Keyframes extraídos de Central Ocho: slideEnter, staggerChild (12 children), heroFadeIn (4 delays), countPop, barGrow, shimmer, pulse-dot, glow. Media query `prefers-reduced-motion`.

### Fase D: Hooks de navegación (3 archivos)
1. **`useSlideNavigation.ts`** — `useState(current, direction, isAnimating)`, funciones `goTo/next/prev`, persistencia en sessionStorage, guard contra animación en curso (500ms debounce). Patrón de Central Ocho.
2. **`useKeyboardNav.ts`** — `useEffect` con listener de keydown. ArrowRight/Space=next, ArrowLeft=prev, Home/End, F=fullscreen, Escape=exit. Recibe callbacks.
3. **`useTouchNav.ts`** — touchstart/touchend, threshold 80px, horizontal > 2x vertical. Patrón exacto de Central Ocho.

### Fase E: Componentes de navegación (4 archivos)
1. **`SlideLayout.tsx`** (~100 líneas) — Orquestador principal. Usa los 3 hooks. Renderiza slides con transiciones CSS (translate-x + opacity, cubic-bezier). Incluye SlideNavigation + ProgressBar. Touch listeners en el container. Ref para fullscreen.
2. **`SlideNavigation.tsx`** (~50 líneas) — Barra superior: título/brand izquierda, contador "01/06" + flechas + FullscreenToggle derecha.
3. **`ProgressBar.tsx`** (~15 líneas) — `div` fixed bottom con width animada = (current+1)/total * 100%.
4. **`FullscreenToggle.tsx`** (~20 líneas) — Botón con ícono Material "fullscreen"/"fullscreen_exit".

### Fase F: Componentes UI (8 archivos)
1. **`Slide.tsx`** (~25 líneas) — Wrapper: `w-full h-full overflow-y-auto`, max-w-6xl centered, variant "dark"/"light" para bg/text.
2. **`SectionHeader.tsx`** (~20 líneas) — Número estilo "02", divider, título serif, subtítulo opcional.
3. **`StatCard.tsx`** (~30 líneas) — Valor grande (con AnimatedCounter opcional), label, variant dark/light.
4. **`FeatureCard.tsx`** (~25 líneas) — Material icon + título + descripción, hover translate-y.
5. **`QuoteBlock.tsx`** (~15 líneas) — Border-left accent, texto itálica serif, comillas tipográficas.
6. **`TimelineBlock.tsx`** (~50 líneas) — Fases horizontales con línea conectora, íconos, labels.
7. **`ImageZoom.tsx`** (~60 líneas) — Lupa circular que sigue el mouse, zoom 2x, toggle on/off. Patrón de s05b-plantas de Central Ocho.
8. **`ChartWrapper.tsx`** (~20 líneas) — `"use client"`, ResponsiveContainer de Recharts con children.
9. **`AnimatedCounter.tsx`** (~40 líneas) — requestAnimationFrame, easing cubic `1 - Math.pow(1-p, 3)`, prefix/suffix.

### Fase G: 6 Slides de ejemplo
1. **Slide01Cover** (dark) — Título grande serif, subtítulo, autor, botón "Comenzar", animaciones hero-fade-in.
2. **Slide02Concept** (light) — SectionHeader "01", número grande de fondo, 3 FeatureCards en grid, QuoteBlock.
3. **Slide03Product** (dark) — 2 columnas: specs con barras a la izquierda, imagen placeholder a la derecha.
4. **Slide04Data** (light) — SectionHeader, BarChart de Recharts con datos de ejemplo, 3 StatCards abajo.
5. **Slide05Timeline** (dark) — SectionHeader, TimelineBlock con 4 fases de ejemplo.
6. **Slide06Contact** (light) — Datos de contacto, quote final, botón CTA.

### Fase H: page.tsx
- Importa SlideLayout + 6 slides, los renderiza como children.

### Fase I: CLAUDE.md
- Explica: qué es el proyecto, estructura, componentes disponibles, cómo agregar slides, convenciones (CSS no framer-motion, Material Symbols, etc.), que el usuario es vibe coder.

### Fase J: 7 Skills (.skills/)
Cada uno: título, qué hace, pasos, código de ejemplo funcional.
1. `responsive.md` — Breakpoints Tailwind, patrones grid, texto responsive
2. `add-animation.md` — Clases CSS disponibles, cómo crear nuevas
3. `add-chart.md` — Importar Recharts, usar ChartWrapper, ejemplo BarChart/LineChart
4. `add-video.md` — `<video>` autoplay muted loop, responsive
5. `add-map.md` — iframe Google Maps, styling container
6. `deploy-vercel.md` — `npm i -g vercel && vercel` o conectar repo GitHub
7. `customize-theme.md` — Editar deck.config.ts, cambiar fonts en layout.tsx

### Fase K: README.md
- En español
- Quick Start: 1) Fork/clone, 2) npm install, 3) npm run dev, 4) Edita deck.config.ts, 5) Personaliza slides
- Screenshots placeholder
- Sección "Qué puedes hacer" con lista de features
- Link a skills

## Patrones reutilizados de proyectos existentes

| Patrón | Origen | Archivo destino |
|--------|--------|----------------|
| Slide transitions (translate-x + opacity) | Central Ocho `slides-deck.tsx` | `SlideLayout.tsx` |
| Keyboard nav (arrows, F, space) | Central Ocho `slides-deck.tsx` | `useKeyboardNav.ts` |
| Touch swipe (80px, 2x check) | Central Ocho `slides-deck.tsx` | `useTouchNav.ts` |
| Session storage persistence | Central Ocho `slides-deck.tsx` | `useSlideNavigation.ts` |
| CSS animations (stagger, fade, glow) | Central Ocho `globals.css` | `animations.css` |
| QuoteBlock | Central Ocho `ui/quote-block.tsx` | `QuoteBlock.tsx` |
| StatCard + AnimatedCounter | Central Ocho `ui/stat-card.tsx` + `animated-counter.tsx` | `StatCard.tsx` + `AnimatedCounter.tsx` |
| FeatureCard | Central Ocho `ui/feature-card.tsx` | `FeatureCard.tsx` |
| ImageZoom (lupa) | Central Ocho `slides/s05b-plantas.tsx` | `ImageZoom.tsx` |
| Color system (CSS vars + @theme inline) | Central Ocho `globals.css` | `globals.css` |
| Font loading (next/font/google) | Central Ocho `layout.tsx` | `layout.tsx` |
| Timeline | ATISA `timeline-visual.tsx` | `TimelineBlock.tsx` |
| Slide wrapper | Central Ocho `slide.tsx` | `Slide.tsx` |

## Verificación

1. `cd /root/Slidelab && npm install && npm run dev` — debe correr sin errores en localhost:3000
2. Navegar con flechas del teclado entre 6 slides
3. Verificar swipe en mobile (o DevTools responsive)
4. F para fullscreen, Escape para salir
5. Verificar progress bar avanza correctamente
6. Verificar que la gráfica de Recharts renderiza en Slide04
7. Verificar alternancia dark/light entre slides
8. Editar `deck.config.ts` (cambiar primary color) y verificar que se aplica globalmente
9. `npm run build` — debe compilar sin errores (deploy-ready para Vercel)
