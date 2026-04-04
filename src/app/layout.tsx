import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import { deckConfig } from "@/config/deck.config";
import "./globals.css";

// ─────────────────────────────────────────────
// Fonts — si cambias la tipografía, modifica aquí
// y actualiza los nombres en deck.config.ts
// ─────────────────────────────────────────────

const serif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${deckConfig.title} — ${deckConfig.subtitle}`,
  description: "Crea presentaciones web interactivas con 55 componentes, animaciones y diseño profesional. En 90 minutos, no en 3 días.",
  openGraph: {
    title: `${deckConfig.title} — ${deckConfig.subtitle}`,
    description: "Presentaciones web interactivas con gráficas, animaciones y diseño profesional. 55 componentes listos para usar.",
    type: "website",
    siteName: "Slidelab",
  },
  twitter: {
    card: "summary_large_image",
    title: `${deckConfig.title} — ${deckConfig.subtitle}`,
    description: "Presentaciones web interactivas. 55 componentes. 90 minutos.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = deckConfig;

  // Inyecta los colores del config como CSS variables
  // Usa prefijo --t- para evitar conflicto con @theme inline
  const cssVars: Record<string, string> = {
    "--t-primary": theme.primary,
    "--t-primary-light": theme.primaryLight,
    "--t-bg-dark": theme.background,
    "--t-bg-light": theme.backgroundLight,
    "--t-fg-dark": theme.foreground,
    "--t-fg-light": theme.foregroundLight,
    "--t-muted": theme.muted,
    "--t-card": theme.card,
    "--t-card-light": theme.cardLight,
    "--t-card-border": theme.cardBorder,
  };

  return (
    <html
      lang="es"
      className={`${serif.variable} ${jakarta.variable} ${mono.variable}`}
      style={cssVars as React.CSSProperties}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
