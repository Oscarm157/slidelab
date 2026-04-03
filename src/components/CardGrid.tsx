interface CardGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

const gapMap = { sm: "gap-3", md: "gap-5", lg: "gap-8" };
const colMap = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" };

export function CardGrid({
  children,
  columns = 3,
  gap = "md",
  className = "",
}: CardGridProps) {
  return (
    <div className={`grid grid-cols-1 ${colMap[columns]} ${gapMap[gap]} ${className}`}>
      {children}
    </div>
  );
}
