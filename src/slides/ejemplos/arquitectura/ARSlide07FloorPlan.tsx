import { Slide } from "@/components/Slide";
import { FloorPlanViewer } from "@/components/FloorPlanViewer";

export function ARSlide07FloorPlan() {
  return (
    <Slide variant="dark">
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-medium tracking-wider mb-4">
            Planta arquitectónica
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-3">
            Distribución planta baja
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Toca los puntos para explorar cada zona de la vivienda.
          </p>
        </div>

        <FloorPlanViewer
          variant="dark"
          image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80"
          alt="Planta baja Casa Monolito"
          hotspots={[
            { x: 25, y: 30, label: "Sala principal", description: "Doble altura con ventanal al jardín", icon: "weekend" },
            { x: 55, y: 25, label: "Cocina", description: "Isla central, acabados en mármol", icon: "countertops" },
            { x: 75, y: 45, label: "Terraza", description: "Vista panorámica al lago", icon: "deck" },
            { x: 40, y: 65, label: "Estudio", description: "Espacio de trabajo con luz natural", icon: "menu_book" },
            { x: 15, y: 70, label: "Acceso", description: "Vestíbulo con jardín interior", icon: "door_front" },
          ]}
        />
      </div>
    </Slide>
  );
}
