interface MatrixCell {
  title: string;
  description?: string;
  icon?: string;
  highlight?: boolean;
}

interface MatrixGridProps {
  cells: MatrixCell[];
  size?: 2 | 3;
  axisLabels?: { top?: string; right?: string; bottom?: string; left?: string };
  variant?: "dark" | "light";
}

export function MatrixGrid({
  cells, size = 2, axisLabels, variant = "light",
}: MatrixGridProps) {
  const cellBg = variant === "dark" ? "bg-card/60" : "bg-white/60";
  const highlightBg = variant === "dark" ? "bg-primary/10" : "bg-primary/5";

  return (
    <div className="relative">
      {/* Axis labels */}
      {axisLabels?.top && (
        <p className="text-center text-xs font-mono text-muted/60 uppercase tracking-widest mb-2">{axisLabels.top}</p>
      )}

      <div className="flex items-center gap-3">
        {axisLabels?.left && (
          <p className="text-xs font-mono text-muted/60 uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">{axisLabels.left}</p>
        )}

        <div className={`grid flex-1 gap-2 ${size === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
          {cells.map((cell, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 ${cell.highlight ? `${highlightBg} glow-accent` : cellBg} shadow-[0_2px_8px_rgba(0,0,0,0.04)]`}
            >
              {cell.icon && (
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">{cell.icon}</span>
                </div>
              )}
              <h4 className="font-semibold text-sm mb-1">{cell.title}</h4>
              {cell.description && (
                <p className="text-muted text-xs leading-relaxed">{cell.description}</p>
              )}
            </div>
          ))}
        </div>

        {axisLabels?.right && (
          <p className="text-xs font-mono text-muted/60 uppercase tracking-widest [writing-mode:vertical-lr]">{axisLabels.right}</p>
        )}
      </div>

      {axisLabels?.bottom && (
        <p className="text-center text-xs font-mono text-muted/60 uppercase tracking-widest mt-2">{axisLabels.bottom}</p>
      )}
    </div>
  );
}
