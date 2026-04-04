interface SplitSlideProps {
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: "50/50" | "40/60" | "60/40";
  imageSrc?: string;
  imagePosition?: "left" | "right";
  variant?: "dark" | "light";
}

const ratioMap = {
  "50/50": "lg:grid-cols-2",
  "40/60": "lg:grid-cols-[2fr_3fr]",
  "60/40": "lg:grid-cols-[3fr_2fr]",
};

export function SplitSlide({
  left, right, ratio = "50/50", imageSrc, imagePosition = "right", variant = "light",
}: SplitSlideProps) {
  const bg = variant === "dark" ? "bg-bg-dark text-fg-light" : "bg-bg-light text-fg-dark";

  const imageEl = imageSrc && (
    <div className="relative h-full min-h-[300px] lg:min-h-full">
      <img
        src={imageSrc}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover ${
          imagePosition === "right" ? "lg:rounded-l-3xl" : "lg:rounded-r-3xl"
        }`}
      />
      {/* Gradient overlay para profundidad */}
      <div className={`absolute inset-0 ${
        imagePosition === "right"
          ? "bg-gradient-to-r from-black/20 to-transparent lg:rounded-l-3xl"
          : "bg-gradient-to-l from-black/20 to-transparent lg:rounded-r-3xl"
      }`} />
    </div>
  );

  return (
    <div className={`w-full h-full overflow-y-auto scrollbar-hide ${bg}`}>
      <div className={`grid grid-cols-1 ${ratioMap[ratio]} min-h-full relative`}>
        {/* Separador vertical sutil */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-primary/5 z-10" />

        {imagePosition === "left" && imageSrc ? (
          <>
            {imageEl}
            <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 py-16">
              <div className="max-w-lg">{right}</div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 py-16">
              <div className="max-w-lg">{left}</div>
            </div>
            {imageSrc ? imageEl : (
              <div className="flex items-center justify-center p-6 lg:p-10">{right}</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
