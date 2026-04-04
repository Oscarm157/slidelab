interface CalendlyEmbedProps {
  url: string;
  height?: number;
  variant?: "dark" | "light";
}

export function CalendlyEmbed({ url, height = 630, variant = "light" }: CalendlyEmbedProps) {
  const barBg = variant === "dark" ? "bg-card/80" : "bg-white/80";

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div className={`px-4 py-2.5 flex items-center gap-2 ${barBg}`}>
        <span className="material-symbols-outlined text-primary text-[18px]">calendar_month</span>
        <span className="text-sm font-medium">Agendar reunión</span>
      </div>
      <iframe
        src={url}
        className="w-full border-0"
        style={{ height }}
        title="Calendly"
        loading="lazy"
      />
    </div>
  );
}
