interface QuoteBlockProps {
  text: string;
  author?: string;
  variant?: "dark" | "light";
}

export function QuoteBlock({ text, author, variant = "dark" }: QuoteBlockProps) {
  const bg = variant === "dark"
    ? "bg-card/80 border-l-primary"
    : "bg-white/80 border-l-primary";

  return (
    <blockquote className={`border-l-[3px] ${bg} px-6 py-5 rounded-r-xl`}>
      <p className="font-display text-lg sm:text-xl opacity-80 italic leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      {author && (
        <cite className="block mt-3 text-muted text-sm not-italic tracking-wide">— {author}</cite>
      )}
    </blockquote>
  );
}
