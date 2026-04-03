interface IconListItem {
  icon: string;
  text: string;
  subtext?: string;
}

interface IconListProps {
  items: IconListItem[];
  variant?: "dark" | "light";
}

export function IconList({ items, variant = "light" }: IconListProps) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-4"
          style={{ animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s both` }}
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-primary text-[20px]">{item.icon}</span>
          </div>
          <div>
            <p className="font-semibold text-sm">{item.text}</p>
            {item.subtext && <p className="text-muted text-xs leading-relaxed mt-0.5">{item.subtext}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
