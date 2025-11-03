import { Shirt } from "lucide-react"
import { Card } from "@/components/ui/card"

export function DressCodeSection() {
  return (
    <section className="py-16 px-4 bg-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shirt className="w-8 h-8 text-primary" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">Dress Code</h2>

        <Card className="p-8 bg-card/80 backdrop-blur border-primary/20 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold mb-4">Elegante</p>
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground"></p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/60 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground"></p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">

          </p>
        </Card>
      </div>
    </section>
  )
}
