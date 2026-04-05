import { DM_Serif_Display, DM_Sans, DM_Mono } from "next/font/google";
import { localConfig } from "./deck.config";

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function CatalogoLayout({ children }: { children: React.ReactNode }) {
  const { theme } = localConfig;

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
    <div
      className={`${dmSerif.variable} ${dmSans.variable} ${mono.variable}`}
      style={{ ...cssVars, overflow: "hidden", height: "100dvh" } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
