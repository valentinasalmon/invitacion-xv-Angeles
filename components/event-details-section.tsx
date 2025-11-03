import { Calendar, Clock, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function EventDetailsSection() {
  return (
    <section className="py-16 px-4 bg-accent/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          Detalles del Evento
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-card/80 backdrop-blur border-primary/20">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Fecha</h3>
            <p className="text-muted-foreground">Sábado</p>
            <p className="text-lg font-semibold">6 de Diciembre</p>
            <p className="text-muted-foreground">2025</p>
          </Card>

          <Card className="p-6 text-center bg-card/80 backdrop-blur border-primary/20">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Horario</h3>
            <p className="text-lg font-semibold">22:00 hs</p>
            <p className="text-muted-foreground text-sm mt-2">Recepción y cena</p>
          </Card>

          <Card className="p-6 text-center bg-card/80 backdrop-blur border-primary/20">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Lugar</h3>
            <p className="text-lg font-semibold">Quinta La Isidora, por Ruta N°3</p>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="https://maps.app.goo.gl/v315gRXwgfPMdagn8" target="_blank" rel="noopener noreferrer">
              <MapPin className="w-4 h-4 mr-2" />
              Ver en el mapa
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
