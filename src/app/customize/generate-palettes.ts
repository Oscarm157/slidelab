// ─────────────────────────────────────────────
// Generación de paletas a partir de colores detectados
// Usa TODOS los colores del logo, no solo el primero
// ─────────────────────────────────────────────

export interface Palette {
  name: string;
  primary: string;
  primaryLight: string;
  bgDark: string;
  bgLight: string;
  foreground: string;
  foregroundLight: string;
}

// ─── Helpers HSL ───

function hexToHSL(hex: string): { h: number; s: number; l: number } {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;

  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };

  return `#${f(0)}${f(8)}${f(4)}`;
}

function lighten(hex: string, amount: number): string {
  const { h, s, l } = hexToHSL(hex);
  return hslToHex(h, s, Math.min(100, l + amount));
}

function darken(hex: string, amount: number): string {
  const { h, s, l } = hexToHSL(hex);
  return hslToHex(h, s, Math.max(0, l - amount));
}

function desaturate(hex: string, amount: number): string {
  const { h, s, l } = hexToHSL(hex);
  return hslToHex(h, Math.max(0, s - amount), l);
}

// Calcula luminosidad relativa para contraste
function relativeLuminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const toLinear = (c: number) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

// Texto que contrasta con el fondo
function contrastingText(bgHex: string): string {
  return relativeLuminance(bgHex) > 0.4 ? "#1a1a1a" : "#F5F5F5";
}

// ─── Generador de paletas ───

export function generatePalettes(colors: string[]): Palette[] {
  const c1 = colors[0];
  const c2 = colors[1] ?? lighten(c1, 15);
  const c3 = colors[2] ?? null;
  const { h: h1 } = hexToHSL(c1);
  const { h: h2 } = hexToHSL(c2);

  const palettes: Palette[] = [];

  // Paleta 1 — Color 1 como primary
  const bg1Dark = "#0a0a0a";
  const bg1Light = hslToHex(h1, 8, 95);
  palettes.push({
    name: `${c1.toUpperCase()} principal`,
    primary: c1,
    primaryLight: lighten(c1, 15),
    bgDark: bg1Dark,
    bgLight: bg1Light,
    foreground: contrastingText(bg1Light),
    foregroundLight: contrastingText(bg1Dark),
  });

  // Paleta 2 — Color 2 como primary (si hay segundo color)
  if (c2 !== lighten(c1, 15)) {
    const bg2Dark = darken(c2, 40);
    const bg2Light = hslToHex(h2, 8, 95);
    palettes.push({
      name: `${c2.toUpperCase()} principal`,
      primary: c2,
      primaryLight: lighten(c2, 15),
      bgDark: bg2Dark,
      bgLight: bg2Light,
      foreground: contrastingText(bg2Light),
      foregroundLight: contrastingText(bg2Dark),
    });
  }

  // Paleta 3 — Bicolor: color 1 primary, color 2 accent
  const bg3Dark = "#0a0a0a";
  palettes.push({
    name: "Bicolor",
    primary: c1,
    primaryLight: c2,
    bgDark: bg3Dark,
    bgLight: "#F5F0EB",
    foreground: contrastingText("#F5F0EB"),
    foregroundLight: contrastingText(bg3Dark),
  });

  // Paleta 4 — Tricolor (si hay 3+ colores)
  if (c3) {
    const bg4Dark = darken(c1, 38);
    const bg4Light = hslToHex(h1, 5, 96);
    palettes.push({
      name: "Tricolor",
      primary: c3,
      primaryLight: c2,
      bgDark: bg4Dark,
      bgLight: bg4Light,
      foreground: contrastingText(bg4Light),
      foregroundLight: contrastingText(bg4Dark),
    });
  }

  // Paleta 5 — Monocromática del color 1
  const bgMonoDark = hslToHex(h1, 8, 6);
  const bgMonoLight = hslToHex(h1, 6, 95);
  palettes.push({
    name: "Monocromática",
    primary: c1,
    primaryLight: hslToHex(h1, Math.max(0, hexToHSL(c1).s - 10), Math.min(90, hexToHSL(c1).l + 15)),
    bgDark: bgMonoDark,
    bgLight: bgMonoLight,
    foreground: contrastingText(bgMonoLight),
    foregroundLight: contrastingText(bgMonoDark),
  });

  // Paleta 6 — Neutro elegante
  palettes.push({
    name: "Neutro elegante",
    primary: desaturate(c1, 25),
    primaryLight: desaturate(c2, 30),
    bgDark: "#111111",
    bgLight: "#F0EDED",
    foreground: "#1a1a1a",
    foregroundLight: "#F5F5F5",
  });

  return palettes;
}
