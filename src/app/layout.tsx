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
  title: deckConfig.title,
  description: deckConfig.subtitle,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = deckConfig;

  // Inyecta los colores del config como CSS variables
  const cssVars: Record<string, string> = {
    "--color-primary": theme.primary,
    "--color-primary-light": theme.primaryLight,
    "--color-bg-dark": theme.background,
    "--color-bg-light": theme.backgroundLight,
    "--color-fg-dark": theme.foreground,
    "--color-fg-light": theme.foregroundLight,
    "--color-muted": theme.muted,
    "--color-card": theme.card,
    "--color-card-light": theme.cardLight,
    "--color-card-border": theme.cardBorder,
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
