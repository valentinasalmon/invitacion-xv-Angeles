import { Shirt } from "lucide-react"

export function DressCodeSection() {
  return (
    <section className="section bg-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary/80 flex items-center justify-center mx-auto mb-5 shadow-sm">
          <Shirt className="w-9 h-9 text-white" strokeWidth={1.5} />
        </div>

        <h2 className="title-gradient mb-6">Dress Code</h2>

        <p className="subtitle">Elegante</p>
      </div>
    </section>
  )
}
