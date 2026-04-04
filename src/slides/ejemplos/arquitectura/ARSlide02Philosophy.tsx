import { SplitSlide } from "@/components/SplitSlide";
import { QuoteBlock } from "@/components/QuoteBlock";
import { IconList } from "@/components/IconList";

export function ARSlide02Philosophy() {
  return (
    <SplitSlide
      variant="light"
      ratio="50/50"
      imageSrc="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
      imagePosition="right"
      left={
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-medium tracking-wider">
            Filosofía
          </span>
          <h2 className="font-display text-3xl sm:text-4xl">
            Diseñar es pensar el futuro
          </h2>
          <QuoteBlock
            text="La arquitectura es el juego sabio, correcto y magnífico de los volúmenes reunidos bajo la luz."
            author="Le Corbusier"
            variant="light"
          />
          <IconList
            variant="light"
            items={[
              { icon: "eco", text: "Sustentabilidad activa", subtext: "Materiales responsables y eficiencia energética" },
              { icon: "palette", text: "Diseño con identidad", subtext: "Cada proyecto refleja su contexto y cultura" },
              { icon: "groups", text: "Proceso colaborativo", subtext: "Trabajamos junto al cliente en cada fase" },
              { icon: "lightbulb", text: "Innovación constante", subtext: "Tecnología y artesanía en equilibrio" },
            ]}
          />
        </div>
      }
      right={<></>}
    />
  );
}
