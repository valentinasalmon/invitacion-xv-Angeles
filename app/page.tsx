"use client"

import { useState, useEffect, useRef } from "react"
import { Sparkles, Music, Gift, Copy, Check, Heart, Shirt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function InvitationPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [copied, setCopied] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showGiftDetails, setShowGiftDetails] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

useEffect(() => {
  // 📅 Fecha exacta del evento: 6 de diciembre de 2025 a las 22:00 (hora Argentina)
  const eventDate = new Date("2025-12-06T22:00:00-03:00").getTime()

  const timer = setInterval(() => {
    const now = new Date().getTime()
    const distance = eventDate - now

    if (distance <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      })
      return
    }

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    })
  }, 1000)

  const slideTimer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % photos.length)
  }, 4000)

  return () => {
    clearInterval(timer)
    clearInterval(slideTimer)
  }
}, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.currentTime = 0.05 
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const photos = [
    {
      src: "carrusel5.jpeg",
    },
    { src: "/carrusel1.jpeg?height=600&width=600&query=quinceañera photo 2", alt: "Foto 2" },
    { src: "/carrusel2.jpeg?height=600&width=600&query=quinceañera photo 3", alt: "Foto 3" },
    { src: "/carrusel3.jpeg?height=600&width=600&query=quinceañera photo 4", alt: "Foto 4" },
    { src: "/carrusel4.jpeg?height=600&width=600&query=quinceañera photo 5", alt: "Foto 5" },
  ]

  const whatsappNumber = "5493794999546"
  const whatsappMessage = "Hola! Confirmo mi asistencia a los XV años de Angeles, mi nombre es ..."
  const eventLocation = "Quinta La Isidora, por Ruta N°3"
  const googleMapsUrl = "https://maps.app.goo.gl/wHcSHqqrg59XVxUg9"

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <button
        onClick={toggleMusic}
        className="fixed right-6 top-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-slate-400 shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Reproducir música"
      >
        <Music className={`w-6 h-6 text-white ${isPlaying ? "animate-pulse" : ""}`} />
      </button>

      <audio ref={audioRef} loop>
        <source src="/musica/clocks.mp3" type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>

      {/* Hero Section */}
      <section className="section-tight relative min-h-[80dvh] flex items-center justify-center overflow-hidden px-4 py-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sky-300/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-slate-300/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-sky-400" />
            <Sparkles className="w-6 h-6 text-sky-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-sky-400" />
          </div>

          <p className="eyebrow mb-6">Mis Quince Años</p>

          <h1 className="mb-6">
            <span className="font-angeles text-[clamp(48px,18vw,92px)] bg-gradient-to-r from-sky-400 via-slate-400 to-sky-400 bg-clip-text text-transparent">
              Angeles
            </span>
          </h1>

          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-300/30 to-slate-300/30 rounded-full blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sky-300/50 shadow-2xl bg-gradient-to-br from-sky-100 to-slate-100">
              <img src="/portada.jpeg" alt="Quinceañera" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="max-w-md mx-auto subtitle">Te invito a celebrar este momento tan especial en mi vida</p>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-sky-50 via-white to-sky-50 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="title-gradient mb-6 text-slate-700">Faltan</h2>
          <div className="flex w-full items-end justify-between gap-2 max-w-[420px] mx-auto">
            {[
              { value: timeLeft.days, label: "DÍAS" },
              { value: timeLeft.hours, label: "HS" },
              { value: timeLeft.minutes, label: "MIN" },
              { value: timeLeft.seconds, label: "SEG" },
            ].map((item, index) => (
              <div key={index} className="flex-1 min-w-0 text-center">
                <div className="count-num">{item.value}</div>
                <div className="count-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-sky-50 via-white to-sky-50 relative overflow-hidden px-4 py-12">
        <div className="max-w-2xl mx-auto relative">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-400 to-slate-400 flex items-center justify-center shadow-xl">
              <Sparkles className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>

          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-slate-300" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-sky-400 to-slate-400 px-12 py-4 shadow-lg">
                <h2 className="title-subsection text-white">Fiesta</h2>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="eyebrow mb-3">DÍA</h3>
              <p className="text-body">Viernes 15 de Junio - 22:00 hs</p>
            </div>

            <div className="text-center">
              <h3 className="eyebrow mb-3">LUGAR</h3>
              <p className="text-body mb-1">{eventLocation}</p>
            </div>

            <div className="text-center">
              <Button
                className="mt-4 bg-gradient-to-r from-sky-400 to-slate-400 hover:from-sky-500 hover:to-slate-500 text-white rounded-full px-8 shadow-lg"
                onClick={() => window.open(googleMapsUrl, "_blank")}
              >
                ¿Cómo Llegar?
              </Button>
            </div>

            <div className="text-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-400 to-slate-400 hover:from-sky-500 hover:to-slate-500 text-white rounded-full px-12 py-6 text-lg shadow-xl"
                onClick={() =>
                  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
                }
              >
                Confirmar Asistencia
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative max-w-md mx-auto">
            <div className="relative aspect-[3/4] bg-gradient-to-br from-sky-300 to-slate-300 p-4 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="relative w-full h-full bg-white p-3 shadow-inner overflow-hidden">
                <img
                  src={photos[currentSlide].src || "/placeholder.svg"}
                  alt={photos[currentSlide].alt}
                  className="w-full h-full object-cover transition-opacity duration-700"
                  key={currentSlide}
                />
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-sky-400 w-8" : "bg-slate-300 w-2"
                  }`}
                  aria-label={`Ir a foto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-sky-50 via-white to-sky-50 px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 to-slate-400 flex items-center justify-center shadow-xl">
              <Shirt className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h2 className="title-gradient mb-6 text-slate-700">Dress Code </h2>
          <p className="subtitle">Elegante</p>
        </div>
      </section>

      <section className="section px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-400 to-slate-400 flex items-center justify-center shadow-lg">
              <Music className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </div>

 <h2 className="title-gradient mb-6 text-slate-700">Sugerí tu Canción</h2>
<p className="subtitle mb-8">Ayudame a armar la playlist perfecta para la fiesta</p>
<Button
  size="lg"
  className="bg-gradient-to-r from-sky-500 to-slate-500 hover:from-sky-600 hover:to-slate-600 rounded-full px-8"
  onClick={() => window.open("https://youtube.com/playlist?list=PLrScpsTCbSmG4C4CTahow4BmsaPqnurVi&si=0RrYILwLe2Z872SU", "_blank")}
>
  <Music className="w-5 h-5 mr-2" />
  Abrir Playlist 
</Button>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-sky-50 via-white to-sky-50 px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 to-slate-400 flex items-center justify-center shadow-xl">
              <Gift className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h2 className="title-gradient mb-6 text-slate-700">Regalos</h2>
          <p className="subtitle italic mb-8">Si deseas regalarme algo más que tu hermosa presencia...</p>

          {!showGiftDetails ? (
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-400 to-slate-400 hover:from-sky-500 hover:to-slate-500 text-white rounded-full px-12 py-6 text-lg shadow-xl"
              onClick={() => setShowGiftDetails(true)}
            >
              Ver Más
            </Button>
          ) : (
            <Card className="p-8 border-sky-200/50 shadow-xl bg-white/80 backdrop-blur">
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-small text-muted-foreground">Entidad Bancaria:</span>
                  <span className="text-body font-semibold">Mercado Pago</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-small text-muted-foreground">CBU:</span>
                  <span className="text-body font-semibold text-sm">0000003100006857328647</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-small text-muted-foreground">Alias:</span>
                  <span className="text-body font-semibold">angeles.hc</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-small text-muted-foreground">Titular:</span>
                  <span className="text-body font-semibold">Angeles Hidalgo Cabral</span>
                </div>
              </div>
              <Button
                className="w-full mt-6 bg-gradient-to-r from-sky-400 to-slate-400 hover:from-sky-500 hover:to-slate-500 rounded-full shadow-lg"
                onClick={() => copyToClipboard("angeles.hc")}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar alias
                  </>
                )}
              </Button>
            </Card>
          )}
        </div>
      </section>

      <footer className="py-12 text-center">
        <Heart className="w-6 h-6 mx-auto mb-3 text-sky-400" />
        <p className="title-subsection mb-6 text-slate-700">Con amor, Angeles</p>
    
      </footer>
    </main>
  )
}
