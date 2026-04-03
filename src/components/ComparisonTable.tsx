"use client";

interface ComparisonTableProps {
  columns: { label: string; highlighted?: boolean }[];
  rows: { feature: string; values: (string | boolean)[] }[];
  variant?: "dark" | "light";
}

export function ComparisonTable({ columns, rows, variant = "light" }: ComparisonTableProps) {
  const headerBg = variant === "dark" ? "bg-card/60" : "bg-fg-dark/5";
  const rowBg = variant === "dark" ? "bg-card/30" : "bg-white/50";
  const highlightBg = variant === "dark" ? "bg-primary/10" : "bg-primary/5";

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        {/* Header */}
        <thead>
          <tr>
            <th className={`${headerBg} px-5 py-4 text-muted text-xs uppercase tracking-widest font-mono rounded-tl-xl`}>
              Características
            </th>
            {columns.map((col, i) => (
              <th
                key={col.label}
                className={`px-5 py-4 text-center font-display text-base ${
                  col.highlighted ? `${highlightBg} text-primary font-semibold` : `${headerBg} text-muted`
                } ${i === columns.length - 1 ? "rounded-tr-xl" : ""}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Rows */}
        <tbody>
          {rows.map((row, ri) => (
            <tr key={row.feature}>
              <td className={`px-5 py-3.5 text-sm ${ri % 2 === 0 ? rowBg : ""}`}>
                {row.feature}
              </td>
              {row.values.map((val, vi) => (
                <td
                  key={vi}
                  className={`px-5 py-3.5 text-center text-sm ${
                    columns[vi]?.highlighted ? highlightBg : ri % 2 === 0 ? rowBg : ""
                  }`}
                >
                  {typeof val === "boolean" ? (
                    <span className={`material-symbols-outlined text-[20px] ${val ? "text-primary" : "text-muted/30"}`}>
                      {val ? "check_circle" : "remove"}
                    </span>
                  ) : (
                    <span className="font-mono text-sm">{val}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
