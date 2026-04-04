interface SpotifyEmbedProps {
  url: string;
  compact?: boolean;
  variant?: "dark" | "light";
}

export function SpotifyEmbed({ url, compact = false, variant = "light" }: SpotifyEmbedProps) {
  // Convertir URL de Spotify a embed URL
  // open.spotify.com/track/xxx → open.spotify.com/embed/track/xxx
  const embedUrl = url.includes("/embed/")
    ? url
    : url.replace("open.spotify.com/", "open.spotify.com/embed/");

  const theme = variant === "dark" ? "&theme=0" : "";
  const height = compact ? 80 : 352;

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <iframe
        src={`${embedUrl}?utm_source=slidelab${theme}`}
        className="w-full border-0"
        style={{ height, borderRadius: 16 }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify"
      />
    </div>
  );
}
