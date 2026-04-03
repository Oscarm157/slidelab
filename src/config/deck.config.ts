// ─────────────────────────────────────────────
// Configuración central de tu presentación
// Edita este archivo para personalizar todo el deck
// ─────────────────────────────────────────────

export const deckConfig = {
  // Información general
  title: "Slidelab",
  subtitle: "Presentaciones web profesionales",
  author: "Tu Nombre",
  totalSlides: 6,

  // Paleta de colores
  theme: {
    primary: "#8B6914",        // Color accent (dorado)
    primaryLight: "#A67C00",   // Accent claro
    background: "#0a0a0a",     // Fondo oscuro
    backgroundLight: "#F5F0EB",// Fondo claro
    foreground: "#1a1a1a",     // Texto sobre fondo claro
    foregroundLight: "#F5F5F5",// Texto sobre fondo oscuro
    muted: "#5A5A5A",         // Texto secundario
    card: "#141414",          // Fondo de cards (dark)
    cardLight: "#E8E0D6",    // Fondo de cards (light)
    cardBorder: "#222222",    // Bordes
  },

  // Tipografía (si cambias los fonts, actualiza también layout.tsx)
  fonts: {
    display: "var(--font-serif)",    // Títulos
    body: "var(--font-jakarta)",     // Texto general
    mono: "var(--font-dm-mono)",     // Números y datos
  },

  // Navegación
  navigation: {
    showProgress: true,
    showSlideCount: true,
    enableKeyboard: true,
    enableFullscreen: true,
    enableTouch: true,
  },
};
