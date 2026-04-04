"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { extractColors } from "./extract-colors";
import { generatePalettes, type Palette } from "./generate-palettes";

// ─────────────────────────────────────────────
// Brand Customizer — personaliza tu presentación
// Todo client-side, localStorage para persistencia
// ─────────────────────────────────────────────

interface BrandConfig {
  primary: string;
  primaryLight: string;
  bgDark: string;
  bgLight: string;
  displayFont: string;
  bodyFont: string;
  monoFont: string;
  logo: string | null;
}

const defaults: BrandConfig = {
  primary: "#8B6914",
  primaryLight: "#A67C00",
  bgDark: "#0a0a0a",
  bgLight: "#F5F0EB",
  displayFont: "DM Serif Display",
  bodyFont: "Plus Jakarta Sans",
  monoFont: "DM Mono",
  logo: null,
};

const fontOptions = {
  display: ["DM Serif Display", "Playfair Display", "Libre Baskerville", "EB Garamond", "Bodoni Moda"],
  body: ["Plus Jakarta Sans", "Inter", "DM Sans", "Source Sans 3", "Manrope"],
  mono: ["DM Mono", "JetBrains Mono", "IBM Plex Mono", "Fira Code"],
};

function ColorPicker({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-3">
      <label className="relative cursor-pointer">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="w-10 h-10 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.2)]" style={{ backgroundColor: value }} />
      </label>
      <div className="flex-1">
        <p className="text-xs text-fg-light/40 mb-0.5">{label}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent font-mono text-sm text-fg-light outline-none"
        />
      </div>
    </div>
  );
}

function FontSelect({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-xs text-fg-light/40 mb-1.5">{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-card/60 text-fg-light text-sm rounded-xl px-4 h-12 outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
      >
        {options.map((f) => (
          <option key={f} value={f} style={{ fontFamily: f }}>{f}</option>
        ))}
      </select>
    </div>
  );
}

export default function CustomizePage() {
  const [config, setConfig] = useState<BrandConfig>(defaults);
  const [copied, setCopied] = useState(false);
  const [detectedColors, setDetectedColors] = useState<string[]>([]);
  const [palettes, setPalettes] = useState<Palette[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Cargar de localStorage
  useEffect(() => {
    const saved = localStorage.getItem("slidelab-brand");
    if (saved) {
      try { setConfig({ ...defaults, ...JSON.parse(saved) }); } catch {}
    }
  }, []);

  // Guardar en localStorage y actualizar iframe
  useEffect(() => {
    localStorage.setItem("slidelab-brand", JSON.stringify(config));

    // Inyectar CSS vars en el iframe
    const iframe = iframeRef.current;
    if (iframe?.contentDocument) {
      const html = iframe.contentDocument.documentElement;
      html.style.setProperty("--t-primary", config.primary);
      html.style.setProperty("--t-primary-light", config.primaryLight);
      html.style.setProperty("--t-bg-dark", config.bgDark);
      html.style.setProperty("--t-bg-light", config.bgLight);
    }
  }, [config]);

  const update = (key: keyof BrandConfig, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result as string;
      update("logo", dataUrl);

      // Extraer colores y generar paletas
      const colors = await extractColors(dataUrl);
      setDetectedColors(colors);
      setPalettes(generatePalettes(colors));
    };
    reader.readAsDataURL(file);
  };

  const applyPalette = (palette: Palette) => {
    setConfig((prev) => ({
      ...prev,
      primary: palette.primary,
      primaryLight: palette.primaryLight,
      bgDark: palette.bgDark,
      bgLight: palette.bgLight,
    }));
  };

  const generateConfig = () => {
    return `export const deckConfig = {
  title: "Mi Presentación",
  subtitle: "Subtítulo aquí",
  author: "Tu Nombre",
  totalSlides: 6,
  theme: {
    primary: "${config.primary}",
    primaryLight: "${config.primaryLight}",
    background: "${config.bgDark}",
    backgroundLight: "${config.bgLight}",
    foreground: "#1a1a1a",
    foregroundLight: "#F5F5F5",
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
};`;
  };

  const copyConfig = () => {
    navigator.clipboard.writeText(generateConfig());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-bg-dark text-fg-light">
      {/* Nav */}
      <nav className="px-6 sm:px-10 py-4 flex items-center justify-between border-b border-fg-light/5">
        <a href="/" className="font-display text-xl tracking-tight">Slidelab</a>
        <div className="flex items-center gap-4">
          <a href="/components" className="text-fg-light/40 text-sm hover:text-fg-light transition-colors">Componentes</a>
          <a href="/demo" className="text-fg-light/40 text-sm hover:text-fg-light transition-colors">Demo</a>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] min-h-[calc(100dvh-57px)]">
        {/* ═══════ SIDEBAR ═══════ */}
        <div className="bg-card/30 px-6 py-8 space-y-8 overflow-y-auto border-r border-fg-light/5">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-2">Personalizar</p>
            <h2 className="font-display text-2xl tracking-tight">Tu marca</h2>
          </div>

          {/* Logo */}
          <div>
            <p className="text-xs text-fg-light/40 mb-3 font-medium">Logo</p>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="rounded-2xl border-2 border-dashed border-fg-light/10 hover:border-primary/30 transition-colors p-6 text-center cursor-pointer"
            >
              {config.logo ? (
                <img src={config.logo} alt="Logo" className="max-h-16 mx-auto object-contain" />
              ) : (
                <>
                  <span className="material-symbols-outlined text-fg-light/20 text-[36px] mb-2 block">cloud_upload</span>
                  <p className="text-fg-light/30 text-xs">Arrastra o haz clic para subir</p>
                </>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
            {config.logo && (
              <button onClick={() => { update("logo", ""); setDetectedColors([]); setPalettes([]); }} className="text-xs text-muted hover:text-fg-light mt-2 transition-colors">
                Quitar logo
              </button>
            )}
          </div>

          {/* Colores detectados del logo */}
          {detectedColors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <p className="text-xs text-fg-light/40 mb-2 font-medium">Colores detectados</p>
              <div className="flex gap-2 mb-4">
                {detectedColors.map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.3)] cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: c }}
                    title={c}
                    onClick={() => update("primary", c)}
                  />
                ))}
              </div>

              <p className="text-xs text-fg-light/40 mb-2 font-medium">Paletas sugeridas</p>
              <div className="grid grid-cols-2 gap-2">
                {palettes.map((p) => (
                  <motion.button
                    key={p.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => applyPalette(p)}
                    className="rounded-xl bg-card/60 p-3 hover:bg-card/80 transition-colors text-left"
                  >
                    <p className="text-[11px] font-medium text-fg-light/60 mb-2">{p.name}</p>
                    <div className="flex gap-1">
                      <div className="flex-1 h-5 rounded" style={{ background: p.primary }} />
                      <div className="flex-1 h-5 rounded" style={{ background: p.primaryLight }} />
                      <div className="flex-1 h-5 rounded" style={{ background: p.bgDark }} />
                      <div className="flex-1 h-5 rounded" style={{ background: p.bgLight }} />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Colores */}
          <div>
            <p className="text-xs text-fg-light/40 mb-3 font-medium">Colores</p>
            <div className="space-y-4">
              <ColorPicker label="Primary" value={config.primary} onChange={(v) => update("primary", v)} />
              <ColorPicker label="Primary Light" value={config.primaryLight} onChange={(v) => update("primaryLight", v)} />
              <ColorPicker label="Fondo oscuro" value={config.bgDark} onChange={(v) => update("bgDark", v)} />
              <ColorPicker label="Fondo claro" value={config.bgLight} onChange={(v) => update("bgLight", v)} />
            </div>
          </div>

          {/* Fonts */}
          <div>
            <p className="text-xs text-fg-light/40 mb-3 font-medium">Tipografía</p>
            <div className="space-y-3">
              <FontSelect label="Display (títulos)" value={config.displayFont} options={fontOptions.display} onChange={(v) => update("displayFont", v)} />
              <FontSelect label="Body (texto)" value={config.bodyFont} options={fontOptions.body} onChange={(v) => update("bodyFont", v)} />
              <FontSelect label="Mono (números)" value={config.monoFont} options={fontOptions.mono} onChange={(v) => update("monoFont", v)} />
            </div>
          </div>

          {/* Reset */}
          <button
            onClick={() => setConfig(defaults)}
            className="w-full py-3 rounded-xl bg-fg-light/5 text-fg-light/40 text-sm hover:bg-fg-light/10 transition-colors"
          >
            Restaurar valores por defecto
          </button>
        </div>

        {/* ═══════ PREVIEW ═══════ */}
        <div className="px-6 sm:px-10 py-8 space-y-8 overflow-y-auto">
          {/* Preview heading */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-2">Vista previa</p>
            <h2 className="font-display text-2xl tracking-tight">Así se vería tu presentación</h2>
          </div>

          {/* Browser mockup con iframe */}
          <div className="rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
            <div className="bg-[#1c1c1c] px-4 py-2.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 bg-[#0a0a0a] rounded-md px-3 py-1 text-[10px] text-fg-light/30 font-mono">
                tu-presentacion.vercel.app
              </div>
            </div>
            <div className="aspect-[16/9]" style={{ backgroundColor: config.bgDark }}>
              <iframe
                ref={iframeRef}
                src="/demo"
                className="w-full h-full border-0"
                title="Preview"
              />
            </div>
          </div>

          {/* Paleta visual */}
          <div>
            <p className="text-xs text-fg-light/40 mb-3 font-medium">Tu paleta</p>
            <div className="flex gap-2">
              {[config.primary, config.primaryLight, config.bgDark, config.bgLight].map((c, i) => (
                <div key={i} className="flex-1 h-12 rounded-xl shadow-inner" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>

          {/* Config code */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-fg-light/40 font-medium">deck.config.ts</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={copyConfig}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">{copied ? "check" : "content_copy"}</span>
                {copied ? "Copiado" : "Copiar"}
              </motion.button>
            </div>
            <div className="bg-[#0a0a0a] rounded-2xl p-5 overflow-x-auto">
              <pre className="font-mono text-xs text-fg-light/60 leading-relaxed whitespace-pre">
                {generateConfig()}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
