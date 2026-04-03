interface MapEmbedProps {
  embedUrl?: string;
  image?: string;
  address?: string;
  details?: string[];
  variant?: "dark" | "light";
}

export function MapEmbed({ embedUrl, image, address, details, variant = "light" }: MapEmbedProps) {
  const cardBg = variant === "dark"
    ? "bg-bg-dark/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
    : "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)]";

  return (
    <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa"
        />
      ) : image ? (
        <img src={image} alt="Mapa" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-muted/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-muted/30 text-[48px]">map</span>
        </div>
      )}

      {/* Card overlay */}
      {(address || details) && (
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs">
          <div className={`rounded-xl p-4 ${cardBg}`}>
            {address && (
              <div className="flex items-start gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">location_on</span>
                <p className="text-sm font-medium">{address}</p>
              </div>
            )}
            {details && (
              <div className="space-y-1">
                {details.map((d, i) => (
                  <p key={i} className="text-muted text-xs">{d}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
