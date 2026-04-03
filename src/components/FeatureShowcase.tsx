interface FeatureShowcaseProps {
  title: string;
  subtitle?: string;
  image: string;
  features: { icon: string; title: string; description: string }[];
  imagePosition?: "left" | "right";
  variant?: "dark" | "light";
}

export function FeatureShowcase({
  title, subtitle, image, features, imagePosition = "right", variant = "light",
}: FeatureShowcaseProps) {
  const content = (
    <div>
      <h3 className="font-display text-2xl sm:text-3xl mb-2">{title}</h3>
      {subtitle && <p className="text-muted text-sm mb-6">{subtitle}</p>}

      <div className="space-y-5">
        {features.map((feat, i) => (
          <div
            key={feat.title}
            className="flex items-start gap-4"
            style={{ animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.08}s both` }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-primary text-[20px]">{feat.icon}</span>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-0.5">{feat.title}</h4>
              <p className="text-muted text-xs leading-relaxed">{feat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const imageEl = (
    <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <img src={image} alt={title} className="w-full h-auto" />
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {imagePosition === "left" ? (
        <>{imageEl}{content}</>
      ) : (
        <>{content}{imageEl}</>
      )}
    </div>
  );
}
