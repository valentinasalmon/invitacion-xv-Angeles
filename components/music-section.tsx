import { Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function MusicSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Music className="w-8 h-8 text-primary" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">Sugerí tu Canción</h2>

        <Card className="p-8 bg-card/80 backdrop-blur border-primary/20 max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            ¡Ayudame a armar la playlist perfecta! Sugerí tus canciones favoritas para bailar toda la noche
          </p>

          <Button size="lg" className="bg-[#1DB954] hover:bg-[#1DB954]/90 text-white" asChild>
            <a href="https://open.spotify.com/playlist/YOUR_PLAYLIST_ID" target="_blank" rel="noopener noreferrer">
              <Music className="w-4 h-4 mr-2" />
              Agregar en Spotify
            </a>
          </Button>
        </Card>
      </div>
    </section>
  )
}
