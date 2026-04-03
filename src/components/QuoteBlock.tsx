interface QuoteBlockProps {
  text: string;
  author?: string;
  variant?: "dark" | "light";
}

export function QuoteBlock({ text, author, variant = "dark" }: QuoteBlockProps) {
  const styles = variant === "dark"
    ? "bg-card/60 shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
    : "bg-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)]";

  return (
    <blockquote className={`border-l-[3px] border-primary px-6 py-5 rounded-r-xl ${styles}`}>
      <p className="font-display text-lg sm:text-xl opacity-80 italic leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      {author && (
        <cite className="block mt-3 text-muted text-sm not-italic tracking-wide">— {author}</cite>
      )}
    </blockquote>
  );
}
