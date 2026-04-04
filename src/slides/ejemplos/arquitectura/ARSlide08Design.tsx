import { Slide } from "@/components/Slide";
import { FigmaEmbed } from "@/components/FigmaEmbed";

export function ARSlide08Design() {
  return (
    <Slide variant="light">
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-medium tracking-wider mb-4">
            Diseño interior
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-3">
            Paleta de materiales
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Explora el moodboard y la selección de materiales para Casa Monolito directamente desde Figma.
          </p>
        </div>

        <FigmaEmbed
          url="https://www.figma.com/file/placeholder-estudio-forma"
          title="Moodboard — Casa Monolito"
          height={450}
          variant="light"
        />
      </div>
    </Slide>
  );
}
