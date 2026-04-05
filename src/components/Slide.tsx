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
  const bg = variant === "dark"
    ? "bg-bg-dark text-fg-light"
    : "bg-bg-light text-fg-dark";

  return (
    <div className={`w-full h-full overflow-y-auto scrollbar-hide touch-pan-y ${bg} ${className}`}>
      <div
        className={`w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-14 pt-14 sm:pt-16 pb-10 sm:pb-12 ${
          centered ? "min-h-full flex flex-col justify-center" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
