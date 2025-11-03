"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownSection() {
  // Cambia esta fecha por la fecha del evento
  const eventDate = new Date("2025-12-06T22:00:00")

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">Faltan</h2>

        <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
          {[
            { label: "Días", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Min", value: timeLeft.minutes },
            { label: "Seg", value: timeLeft.seconds },
          ].map((item) => (
            <Card key={item.label} className="p-4 md:p-6 bg-card/80 backdrop-blur border-primary/20">
              <div className="text-3xl md:text-5xl font-bold text-primary font-serif mb-2">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{item.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
