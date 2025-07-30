import Image from "next/image"
import BackExercise from "@/public/BackExercise.jpg"
import SquatExercise from "@/public/SquatExercise.jpg"


export function Gallery() {
  const images = [
    BackExercise,
   SquatExercise,
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our Training Environment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our state-of-the-art facility and see our training programs in action.
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
                alt={`Gallery image ${index + 1}`}
                className="w-full max-h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
