import Image from "next/image"
import BackExercise from "@/public/BackExercise.jpg"
import SquatExercise from "@/public/SquatExercise.jpg"
import DakicVesla from "@/public/DakicVesla.jpg"

export function Gallery() {
  const images = [
    {
      src: BackExercise,
      alt: "Trening leđa sa personalnim trenerom u modernoj teretani",
    },
    {
      src: SquatExercise,
      alt: "Čučanj vežba uz stručno vođenje fitnes instruktora",
    },
    {
      src: DakicVesla,
      alt: "Veslanje vežba – jačanje leđa i ruku uz profesionalni nadzor",
    },
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
            Galerija Treninga – Profesionalni Fitnes i Personalni Treninzi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pogledajte kako izgledaju moji <strong>personalni treninzi</strong> i 
 <strong> fitnes programi</strong>. Ja vas vodim kroz
<strong> pravilnu tehniku vežbanja</strong>, pomažem vam da
<strong> izgradite snagu</strong>, povećate izdržljivost i postignete
najbolje rezultate.  
Zavirite u moj prostor za trening i osetite energiju vežbanja uz
stručan nadzor, motivaciju i podršku <strong>profesionalnog
personalnog trenera</strong>.
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
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
