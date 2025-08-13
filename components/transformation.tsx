import Image from "next/image"
import Klijent1 from "@/public/Klijent1.jpg"
import Klijent2 from "@/public/Klijent2.jpg"


export function Transformation() {
  const images = [
    Klijent1,
    Klijent2,
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="galerija-treninga"
      role="region"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="galerija-treninga"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Pogledajte Transformacije Klijenata
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zavirite u naš moderan fitnes centar i pogledajte kako izgleda
            individualni i grupni rad sa klijentima.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                width={400}
                height={300}
                src={image || "/placeholder.svg"}
                alt={`Trening slika ${index + 1}`}
                className="w-full max-h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
