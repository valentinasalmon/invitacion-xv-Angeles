"use client"

import { Gift, Copy, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function GiftsSection() {
  const [copied, setCopied] = useState(false)

  const bankInfo = {
    bank: "Mercado Pago",
    cbu: "0000003100006857328647",
    alias: "Angales.hc",
    holder: "Angeles Hidalgo Cabral",
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section bg-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Gift className="w-8 h-8 text-primary" />
        </div>

        <h2 className="title-section mb-6">Regalos</h2>

        <Card className="p-8 bg-card/80 backdrop-blur border-primary/20 max-w-2xl mx-auto">
          <p className="subtitle mb-6">
            Tu presencia es el mejor regalo, pero si deseás obsequiarme algo, podés hacerlo mediante transferencia
            bancaria
          </p>

          <div className="space-y-4 text-left">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <p className="text-small text-muted-foreground">Mercado Pago</p>
                <p className="text-body font-semibold">{bankInfo.bank}</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex-1">
                <p className="text-small text-muted-foreground">CBU</p>
                <p className="text-body font-mono text-sm md:text-base">{bankInfo.cbu}</p>
              </div>
              <Button size="sm" variant="ghost" onClick={() => copyToClipboard(bankInfo.cbu)} className="ml-2">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex-1">
                <p className="text-small text-muted-foreground">Alias</p>
                <p className="text-body font-semibold">{bankInfo.alias}</p>
              </div>
              <Button size="sm" variant="ghost" onClick={() => copyToClipboard(bankInfo.alias)} className="ml-2">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <p className="text-small text-muted-foreground">Titular</p>
                <p className="text-body font-semibold">{bankInfo.holder}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
