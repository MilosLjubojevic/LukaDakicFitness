import Image from "next/image"
import Klijent1 from "@/public/Klijent1.jpg"
import Klijent2 from "@/public/Klijent2.jpg"

export function Transformation() {
  const images = [
    {
      src: Klijent1,
      alt: "Transformacija klijenta - pre i posle rezultati",
    },
    {
      src: Klijent2,
      alt: "Uspešna transformacija tela klijenta",
    },
    {
      src: Klijent2,
      alt: "Uspešna transformacija tela klijenta",
    },
    {
      src: Klijent2,
      alt: "Uspešna transformacija tela klijenta",
    },
    {
      src: Klijent2,
      alt: "Uspešna transformacija tela klijenta",
    },
    {
      src: Klijent2,
      alt: "Uspešna transformacija tela klijenta",
    },
  ]

  return (
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="transformacije-klijenata"
      role="region"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="transformacije-klijenata"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Pogledajte Transformacije Klijenata
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pravi rezultati mojih klijenata koji su postigli svoje ciljeve uz
            personalizovane treninge i ishranu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow aspect-[4/3]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}