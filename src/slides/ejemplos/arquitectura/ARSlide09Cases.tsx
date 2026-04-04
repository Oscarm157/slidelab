import { Slide } from "@/components/Slide";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CardGrid } from "@/components/CardGrid";

export function ARSlide09Cases() {
  return (
    <Slide variant="dark">
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-medium tracking-wider mb-4">
            Portafolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-3">
            Proyectos seleccionados
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Dos intervenciones recientes que reflejan nuestra filosofía de diseño.
          </p>
        </div>

        <CardGrid columns={2} gap="lg">
          <CaseStudyCard
            variant="dark"
            title="Torre Ámbar"
            client="Grupo Inmobiliario Reforma"
            image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
            description="Edificio de usos mixtos en Paseo de la Reforma. 22 niveles con fachada paramétrica que responde al asoleamiento."
            metrics={[
              { label: "Superficie", value: "18,400 m²" },
              { label: "Niveles", value: "22" },
              { label: "Año", value: "2025" },
            ]}
            tags={["Corporativo", "Sustentable", "LEED Gold"]}
          />
          <CaseStudyCard
            variant="dark"
            title="Casa Raíz"
            client="Familia Villanueva"
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
            description="Vivienda unifamiliar en Tepoztlán integrada al paisaje volcánico. Muros de piedra local y techos verdes."
            metrics={[
              { label: "Superficie", value: "320 m²" },
              { label: "Terreno", value: "1,800 m²" },
              { label: "Año", value: "2024" },
            ]}
            tags={["Residencial", "Bioclimático", "Piedra local"]}
          />
        </CardGrid>
      </div>
    </Slide>
  );
}
