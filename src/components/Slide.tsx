interface SlideProps {
  children: React.ReactNode;
  variant?: "dark" | "light";
  centered?: boolean;
  className?: string;
}

export function Slide({
  children,
  variant = "dark",
  centered = true,
  className = "",
}: SlideProps) {
  const bg = variant === "dark" ? "bg-bg-dark text-fg-light" : "bg-bg-light text-fg-dark";

  return (
    <div className={`w-full h-full overflow-y-auto scrollbar-hide touch-pan-y ${bg} ${className}`}>
      <div
        className={`w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 pt-16 sm:pt-14 pb-8 sm:pb-10 ${
          centered ? "min-h-full flex flex-col justify-center" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
