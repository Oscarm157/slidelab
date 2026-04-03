interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10 sm:mb-12">
      {number && (
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">{number}</span>
          <div className="h-px w-16 bg-primary/30" />
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-muted text-base sm:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
