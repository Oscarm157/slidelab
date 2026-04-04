interface LottiePlayerProps {
  src: string;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
  variant?: "dark" | "light";
}

export function LottiePlayer({ src, height = 300, loop = true, autoplay = true, variant = "light" }: LottiePlayerProps) {
  // Usa iframe de LottieFiles — cero dependencias
  const embedUrl = src.includes("lottiefiles.com")
    ? src
    : `https://lottie.host/embed/${src}`;

  return (
    <div className="rounded-2xl overflow-hidden" style={{ height }}>
      <iframe
        src={`${embedUrl}?loop=${loop}&autoplay=${autoplay}`}
        className="w-full h-full border-0"
        title="Lottie animation"
        loading="lazy"
      />
    </div>
  );
}
