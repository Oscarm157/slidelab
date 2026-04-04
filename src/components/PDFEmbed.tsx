interface PDFEmbedProps {
  src: string;
  title?: string;
  height?: number;
  variant?: "dark" | "light";
}

export function PDFEmbed({ src, title, height = 500, variant = "light" }: PDFEmbedProps) {
  const barBg = variant === "dark" ? "bg-card/80" : "bg-white/80";

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      {title && (
        <div className={`px-4 py-2.5 flex items-center justify-between ${barBg}`}>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">picture_as_pdf</span>
            <span className="text-sm font-medium">{title}</span>
          </div>
          <a href={src} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
            Abrir ↗
          </a>
        </div>
      )}
      <iframe src={src} className="w-full border-0" style={{ height }} title={title ?? "PDF"} />
    </div>
  );
}
