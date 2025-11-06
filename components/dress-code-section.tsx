import { Shirt } from "lucide-react";
import { Card } from "@/components/ui/card";

export function DressCodeSection() {
  return (
    <section className="section bg-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary/80 flex items-center justify-center mx-auto mb-5 shadow-sm">
          <Shirt className="w-9 h-9 text-white" strokeWidth={1.5} />
        </div>

        <h2 className="title-gradient mb-2">Dress Code</h2>

        <Card className="mx-auto max-w-md p-6 bg-card/80 backdrop-blur border-primary/20">
          <p className="font-sans text-xl md:text-2xl font-semibold text-foreground">
            Elegante
          </p>

        </Card>
      </div>
    </section>
  );
}
