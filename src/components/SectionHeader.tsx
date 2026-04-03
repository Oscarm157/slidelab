interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8 sm:mb-10">
      {number && (
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-primary tracking-widest">{number}</span>
          <div className="h-px w-12 bg-primary/30" />
        </div>
      )}
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-muted text-sm sm:text-base max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
