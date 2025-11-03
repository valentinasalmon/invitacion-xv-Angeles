import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
        </div>

        <p className="text-muted-foreground text-sm md:text-base mb-4 tracking-widest uppercase">Mis Quince Años</p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Sofía
          </span>
        </h1>

        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
            <img src="/1.jpg" alt="Quinceañera" className="w-full h-full object-cover" />
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto text-balance leading-relaxed">
          Te invito a celebrar este momento tan especial en mi vida
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary" />
          <Sparkles className="w-6 h-6 text-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary" />
        </div>
      </div>
    </section>
  )
}
