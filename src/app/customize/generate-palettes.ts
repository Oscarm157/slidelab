// ─────────────────────────────────────────────
// Generación de paletas a partir de colores detectados
// ─────────────────────────────────────────────

export interface Palette {
  name: string;
  primary: string;
  primaryLight: string;
  bgDark: string;
  bgLight: string;
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

// ─── Generador de paletas ───

export function generatePalettes(colors: string[]): Palette[] {
  const primary = colors[0];
  const secondary = colors[1] ?? lighten(primary, 15);
  const { h, s } = hexToHSL(primary);

  const palettes: Palette[] = [];

  // Paleta 1 — Directa
  palettes.push({
    name: "Directa",
    primary,
    primaryLight: lighten(primary, 15),
    bgDark: "#0a0a0a",
    bgLight: hslToHex(h, Math.min(s, 10), 95),
  });

  // Paleta 2 — Complementaria
  palettes.push({
    name: "Complementaria",
    primary,
    primaryLight: secondary,
    bgDark: darken(primary, 40),
    bgLight: "#F5F0EB",
  });

  // Paleta 3 — Monocromática
  palettes.push({
    name: "Monocromática",
    primary,
    primaryLight: hslToHex(h, Math.max(0, s - 10), Math.min(100, hexToHSL(primary).l + 15)),
    bgDark: hslToHex(h, 5, 5),
    bgLight: hslToHex(h, 5, 95),
  });

  // Paleta 4 — Neutro elegante
  palettes.push({
    name: "Neutro elegante",
    primary: desaturate(primary, 30),
    primaryLight: desaturate(lighten(primary, 15), 40),
    bgDark: "#111111",
    bgLight: "#F0EDED",
  });

  return palettes;
}
