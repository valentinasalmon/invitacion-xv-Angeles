export function GallerySection() {
  const images = [
    { id: 1, query: "quinceañera elegant portrait dress" },
    { id: 2, query: "quinceañera celebration party" },
    { id: 3, query: "quinceañera formal dress blue" },
    { id: 4, query: "quinceañera portrait outdoor" },
  ]

  return (
    <section className="section">
      <div className="max-w-6xl mx-auto">
        <h2 className="title-section mb-12">Mis mejores momentos</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                src={`/.jpg?height=400&width=400&query=${image.query}`}
                alt={`Foto ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
