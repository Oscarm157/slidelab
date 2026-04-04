interface GoogleDocsEmbedProps {
  url: string;
  type?: "doc" | "sheet" | "slide";
  title?: string;
  height?: number;
  variant?: "dark" | "light";
}

export function GoogleDocsEmbed({ url, type = "doc", title, height = 500, variant = "light" }: GoogleDocsEmbedProps) {
  // Convertir URL de sharing a embed URL
  const embedUrl = url.includes("/embed") || url.includes("/pubhtml")
    ? url
    : url.replace(/\/edit.*$/, "/preview").replace(/\/view.*$/, "/preview");

  const barBg = variant === "dark" ? "bg-card/80" : "bg-white/80";
  const icons = { doc: "description", sheet: "table_chart", slide: "slideshow" };
  const labels = { doc: "Google Docs", sheet: "Google Sheets", slide: "Google Slides" };
  const displayTitle = title ?? labels[type];

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div className={`px-4 py-2.5 flex items-center justify-between ${barBg}`}>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">{icons[type]}</span>
          <span className="text-sm font-medium">{displayTitle}</span>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
          Abrir ↗
        </a>
      </div>
      <iframe src={embedUrl} className="w-full border-0" style={{ height }} title={displayTitle} loading="lazy" />
    </div>
  );
}
