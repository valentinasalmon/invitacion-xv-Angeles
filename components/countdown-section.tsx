"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownSection() {
  // 📅 Fecha y hora exacta del evento: 6 de diciembre de 2025 a las 22:00 (hora Argentina)
  const eventDate = new Date("2025-12-06T22:00:00-03:00")

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((distance / (1000 * 60)) % 60)
      const seconds = Math.floor((distance / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [eventDate])

  const items = [
    { label: "DÍAS", value: timeLeft.days },
    { label: "HS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEG", value: timeLeft.seconds },
  ]

  return (
    <section className="section-tight">
      <div className="mx-auto w-full max-w-[420px] text-center">
        <h2 className="title-gradient mb-6">Faltan</h2>
        <div className="flex w-full items-end justify-between gap-1.5 sm:gap-3">
          {items.map((it) => (
            <div key={it.label} className="flex-1 min-w-0 text-center">
              <div className="count-num">{it.value.toString().padStart(2, "0")}</div>
              <div className="count-label">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
