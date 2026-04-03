import { Slide } from "@/components/Slide";

// ─────────────────────────────────────────────
// Cierre — Contacto y llamado a acción
// Ejemplo limpio y directo
// ─────────────────────────────────────────────

export function Slide06Contact() {
  return (
    <Slide variant="dark" className="relative">
      {/* Gradiente de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 40% at 50% 60%, color-mix(in srgb, var(--color-primary) 8%, transparent), transparent)`,
        }}
      />

      <div className="relative text-center max-w-2xl mx-auto">
        <div className="slide-enter">
          {/* Ícono */}
          <span className="material-symbols-outlined text-primary text-[48px] mb-6 block animate-number">
            handshake
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
            Hablemos
          </h2>

          <p className="text-fg-light/60 text-base sm:text-lg mb-10 max-w-md mx-auto">
            Si este proyecto tiene sentido para ti, el siguiente paso es una conversación.
          </p>

          {/* Datos de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 stagger-in">
            <a
              href="mailto:hola@ejemplo.com"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-card-border hover:border-primary/30 transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
              <span className="text-sm">hola@ejemplo.com</span>
            </a>
            <a
              href="tel:+521234567890"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-card-border hover:border-primary/30 transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-[20px]">phone</span>
              <span className="text-sm">+52 123 456 7890</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-card-border hover:border-primary/30 transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-[20px]">language</span>
              <span className="text-sm">ejemplo.com</span>
            </a>
          </div>

          {/* Línea de cierre */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/30" />
            <span className="font-mono text-xs text-muted tracking-widest">GRACIAS</span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
        </div>
      </div>
    </Slide>
  );
}
