import { MessageCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ConfirmSection() {
  const whatsappNumber = "5493794999546"
  const message = encodeURIComponent("¡Hola! Confirmo mi asistencia a los XV años de Angeles 🎉, mi nombre es ..")

  return (
    <section className="section">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="title-section mb-4">¡Confirmá tu Asistencia!</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Tu presencia es muy importante para mí. Por favor, confirmá tu asistencia antes del 20 de Noviembre
          </p>
        </div>

        <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white text-lg px-8 py-6 h-auto" asChild>
          <a href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Confirmar por WhatsApp
          </a>
        </Button>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-small text-muted-foreground">¡Espero verte en mi fiesta! 💙✨</p>
        </div>
      </div>
    </section>
  )
}
