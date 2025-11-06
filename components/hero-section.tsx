import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="section relative min-h-[80dvh] flex items-center justify-center overflow-hidden">
      {/* decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
          <Sparkles className="w-6 h-6 text-primary" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
        </div>

        <p className="eyebrow mb-3">Mis Quince Años</p>

        {/* Nombre con Pinyon Script */}
        <h1 className="mb-6">
          <span className="font-angeles text-[clamp(48px,18vw,92px)] title-gradient">
            Ángeles
          </span>
        </h1>

        {/* Foto */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
            <img src="/1.jpg" alt="Quinceañera" className="w-full h-full object-cover" />
          </div>
        </div>

        <p className="max-w-md mx-auto font-sans text-[15px] md:text-base text-muted-foreground">
          Te invito a celebrar este momento tan especial en mi vida
        </p>
      </div>
    </section>
  )
}
