interface SplitSlideProps {
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: "50/50" | "40/60" | "60/40";
  variant?: "dark" | "light";
}

const ratioMap = {
  "50/50": "lg:grid-cols-2",
  "40/60": "lg:grid-cols-[2fr_3fr]",
  "60/40": "lg:grid-cols-[3fr_2fr]",
};

export function SplitSlide({
  left,
  right,
  ratio = "50/50",
  variant = "light",
}: SplitSlideProps) {
  const bg = variant === "dark" ? "bg-bg-dark text-fg-light" : "bg-bg-light text-fg-dark";

  return (
    <div className={`w-full h-full overflow-y-auto scrollbar-hide ${bg}`}>
      <div className={`grid grid-cols-1 ${ratioMap[ratio]} min-h-full`}>
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-14 py-16">
          {left}
        </div>
        <div className="flex items-center justify-center p-4 lg:p-0">
          {right}
        </div>
      </div>
    </div>
  );
}
