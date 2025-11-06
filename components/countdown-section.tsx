"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownSection() {
  const eventDate = new Date("2025-12-06T22:00:00-03:00");

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = eventDate.getTime() - Date.now();
      const total = Math.max(0, diff); // evita negativos
      setTimeLeft({
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor((total / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((total / 1000 / 60) % 60),
        seconds: Math.floor((total / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

    const items = [
    { label: "DÍAS", value: timeLeft.days },
    { label: "HS",   value: timeLeft.hours },
    { label: "MIN",  value: timeLeft.minutes },
    { label: "SEG",  value: timeLeft.seconds },
  ];

  return (
    <section className="section-tight">
      <div className="mx-auto w-full max-w-[420px] text-center">
        <h2 className="title-gradient mb-4">Faltan</h2>
        <div className="flex w-full items-end justify-between gap-2">
          {items.map((it) => (
            <div key={it.label} className="flex-1 min-w-0 text-center">
              <div className="count-num">{it.value.toString().padStart(2, "0")}</div>
              <div className="count-label">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}