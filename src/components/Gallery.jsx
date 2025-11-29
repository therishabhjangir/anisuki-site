import React from "react"

const placeholders = [
  "https://picsum.photos/seed/ani1/800/500",
  "https://picsum.photos/seed/ani2/800/500",
  "https://picsum.photos/seed/ani3/800/500",
  "https://picsum.photos/seed/ani4/800/500",
  "https://picsum.photos/seed/ani5/800/500",
  "https://picsum.photos/seed/ani6/800/500"
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <p className="text-sm text-gray-600 mb-4">Replace these images by putting your files into the GitHub repo's public/ and update URLs here.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((u, i) => (
            <div key={i} className="rounded overflow-hidden shadow-sm">
              <img src={u} alt={`Ani ${i}`} className="w-full h-40 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
