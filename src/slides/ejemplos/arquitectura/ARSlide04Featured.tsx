import { Slide } from "@/components/Slide";
import { ImageCompare } from "@/components/ImageCompare";

export function ARSlide04Featured() {
  return (
    <Slide variant="light">
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-medium tracking-wider mb-4">
            Proyecto destacado
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-3">
            Casa Monolito
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Transformación completa de una vivienda de los años 70 en Valle de Bravo. Antes y después del proceso de intervención arquitectónica.
          </p>
        </div>

        <ImageCompare
          variant="light"
          height={450}
          before={{
            src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
            label: "Antes",
          }}
          after={{
            src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
            label: "Después",
          }}
        />
      </div>
    </Slide>
  );
}
