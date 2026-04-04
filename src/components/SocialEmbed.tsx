interface SocialEmbedProps {
  platform: "twitter" | "instagram" | "linkedin";
  url: string;
  height?: number;
  variant?: "dark" | "light";
}

export function SocialEmbed({ platform, url, height = 400, variant = "light" }: SocialEmbedProps) {
  const styles = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  const icons = { twitter: "share", instagram: "photo_camera", linkedin: "work" };
  const labels = { twitter: "X (Twitter)", instagram: "Instagram", linkedin: "LinkedIn" };

  // Construir embed URL según plataforma
  const getEmbedUrl = () => {
    switch (platform) {
      case "twitter":
        return `https://platform.twitter.com/embed/Tweet.html?url=${encodeURIComponent(url)}`;
      case "instagram":
        return `${url.replace(/\/$/, "")}/embed`;
      case "linkedin":
        return url;
    }
  };

  return (
    <div className={`rounded-2xl overflow-hidden ${styles}`}>
      <div className="px-4 py-2.5 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-[18px]">{icons[platform]}</span>
        <span className="text-sm font-medium">{labels[platform]}</span>
        <a href={url} target="_blank" rel="noopener noreferrer" className="ml-auto text-xs text-primary hover:underline">
          Ver original ↗
        </a>
      </div>
      <iframe src={getEmbedUrl()} className="w-full border-0" style={{ height }} title={labels[platform]} loading="lazy" />
    </div>
  );
}
