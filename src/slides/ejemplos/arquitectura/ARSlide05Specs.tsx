import { Slide } from "@/components/Slide";
import { SpecSheet } from "@/components/SpecSheet";

export function ARSlide05Specs() {
  return (
    <Slide variant="dark">
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-medium tracking-wider mb-4">
            Ficha técnica
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-3">
            Casa Monolito — Especificaciones
          </h2>
        </div>

        <SpecSheet
          variant="dark"
          columns={2}
          specs={[
            { label: "Ubicación", value: "Valle de Bravo, Edo. Méx.", icon: "location_on" },
            { label: "Superficie terreno", value: "1,200 m²", icon: "landscape" },
            { label: "Superficie construida", value: "480 m²", icon: "square_foot", highlight: true },
            { label: "Niveles", value: "2 + sótano", icon: "layers" },
            { label: "Recámaras", value: "4", icon: "bed" },
            { label: "Estacionamiento", value: "3 autos", icon: "garage" },
            { label: "Sistema estructural", value: "Concreto aparente", icon: "foundation" },
            { label: "Eficiencia energética", value: "A+", icon: "bolt", highlight: true },
            { label: "Año de entrega", value: "2024", icon: "calendar_month" },
            { label: "Inversión", value: "$18.5 MDP", icon: "payments", highlight: true },
          ]}
        />
      </div>
    </Slide>
  );
}
