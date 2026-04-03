interface QuoteBlockProps {
  text: string;
  author?: string;
}

export function QuoteBlock({ text, author }: QuoteBlockProps) {
  return (
    <blockquote className="border-l-[3px] border-primary bg-card/60 px-6 py-4 rounded-r-lg">
      <p className="font-display text-base sm:text-lg opacity-80 italic">
        &ldquo;{text}&rdquo;
      </p>
      {author && (
        <cite className="block mt-2 text-muted text-sm not-italic">— {author}</cite>
      )}
    </blockquote>
  );
}
