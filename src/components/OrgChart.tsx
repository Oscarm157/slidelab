interface OrgNode {
  name: string;
  title: string;
  photo?: string;
  children?: OrgNode[];
}

interface OrgChartProps {
  root: OrgNode;
  variant?: "dark" | "light";
}

function OrgNodeCard({ node, variant, isRoot }: { node: OrgNode; variant: string; isRoot?: boolean }) {
  const styles = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <div className="flex flex-col items-center">
      {/* Node */}
      <div className={`rounded-2xl px-5 py-4 text-center transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(139,105,20,0.15)] ${styles} ${isRoot ? "ring-2 ring-primary/30" : ""}`}>
        {node.photo && (
          <img src={node.photo} alt={node.name} className="w-10 h-10 rounded-full object-cover mx-auto mb-2" />
        )}
        <p className={`font-semibold ${isRoot ? "text-base" : "text-sm"}`}>{node.name}</p>
        <p className="text-muted text-xs">{node.title}</p>
      </div>

      {/* Children */}
      {node.children && node.children.length > 0 && (
        <>
          <div className="w-px h-6 bg-primary/20" />
          <div className="flex items-start gap-4 relative">
            {/* Horizontal connector */}
            {node.children.length > 1 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-primary/20"
                style={{ width: `calc(100% - 80px)` }} />
            )}
            {node.children.map((child) => (
              <div key={child.name} className="flex flex-col items-center">
                <div className="w-px h-4 bg-primary/20" />
                <OrgNodeCard node={child} variant={variant} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function OrgChart({ root, variant = "light" }: OrgChartProps) {
  return (
    <div className="flex justify-center overflow-x-auto" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)" }}>
      <OrgNodeCard node={root} variant={variant} isRoot />
    </div>
  );
}
