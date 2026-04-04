interface FigmaEmbedProps {
  url: string;
  title?: string;
  height?: number;
  variant?: "dark" | "light";
}

export function FigmaEmbed({ url, title = "Diseño en Figma", height = 450, variant = "light" }: FigmaEmbedProps) {
  // Convertir URL de Figma a embed URL
  const embedUrl = url.includes("embed")
    ? url
    : `https://www.figma.com/embed?embed_host=slidelab&url=${encodeURIComponent(url)}`;

  const barBg = variant === "dark" ? "bg-card/80" : "bg-white/80";

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div className={`px-4 py-2.5 flex items-center justify-between ${barBg}`}>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">design_services</span>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
          Abrir en Figma ↗
        </a>
      </div>
      <iframe src={embedUrl} className="w-full border-0" style={{ height }} title={title} loading="lazy" allowFullScreen />
    </div>
  );
}
