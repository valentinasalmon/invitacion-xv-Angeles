import { Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function MusicSection() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Music className="w-8 h-8 text-primary" />
        </div>

        <h2 className="title-section mb-6">Sugerí tu Canción</h2>

        <Card className="p-8 bg-card/80 backdrop-blur border-primary/20 max-w-2xl mx-auto">
          <p className="subtitle mb-6">
            ¡Ayudame a armar la playlist perfecta! Sugerí tus canciones favoritas para bailar toda la noche
          </p>

          <Button size="lg" className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white" asChild>
            <a
              href="https://youtube.com/playlist?list=PLrScpsTCbSmG4C4CTahow4BmsaPqnurVi&si=0RrYILwLe2Z872SU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Music className="w-4 h-4 mr-2" />
              Ver lista 
            </a>
          </Button>
        </Card>
      </div>
    </section>
  )
}
