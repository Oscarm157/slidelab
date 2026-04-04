import { Slide } from "@/components/Slide";
import { ModelViewer } from "@/components/ModelViewer";

export function ARSlide06Model() {
  return (
    <Slide variant="light">
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-medium tracking-wider mb-4">
            Modelo 3D
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-3">
            Explora el volumen
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Interactúa con el modelo tridimensional. Arrastra para rotar, pellizca para hacer zoom.
          </p>
        </div>

        <ModelViewer
          src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
          alt="Modelo 3D Casa Monolito"
          height={450}
          variant="light"
        />
      </div>
    </Slide>
  );
}
