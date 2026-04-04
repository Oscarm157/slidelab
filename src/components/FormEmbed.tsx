interface FormEmbedProps {
  url: string;
  title?: string;
  height?: number;
  variant?: "dark" | "light";
}

export function FormEmbed({ url, title = "Formulario", height = 500, variant = "light" }: FormEmbedProps) {
  const barBg = variant === "dark" ? "bg-card/80" : "bg-white/80";

  // Detectar plataforma por URL
  const platform = url.includes("typeform") ? "Typeform"
    : url.includes("tally") ? "Tally"
    : url.includes("google.com/forms") ? "Google Forms"
    : "Formulario";

  const icon = url.includes("typeform") ? "edit_note"
    : url.includes("tally") ? "checklist"
    : "assignment";

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div className={`px-4 py-2.5 flex items-center justify-between ${barBg}`}>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <span className="text-[10px] text-muted font-mono">{platform}</span>
      </div>
      <iframe src={url} className="w-full border-0" style={{ height }} title={title} loading="lazy" />
    </div>
  );
}
