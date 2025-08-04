import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sara Mičel",
      role: "Menadžer Marketinga",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Luka je promenio ne samo moje telo, već i moj odnos prema fitnesu. Izgubila sam 15 kg i stekla samopouzdanje. Njegov personalizovani pristup je sve promenio!",
    },
    {
      name: "Mikro Rodrigez",
      role: "Softverski Inženjer",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Godinama sam sedeo za računarom i mislio da nema pomoći. Luka mi je dokazao suprotno! Uz njegovu strpljivu podršku postigao sam snagu za koju nisam znao da imam.",
    },
    {
      name: "Emili Čen",
      role: "Nastavnica",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Savetovanje o ishrani je bilo ključ uspeha. Luka me naučio kako da pravilno hranim svoje telo – rezultati su neverovatni. Osećam se odlično!",
    },
    {
      name: "David Baja",
      role: "Penzionisani Veteran",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Nakon služenja vojske, bilo mi je teško da održim kondiciju. Lukin program mi je vratio disciplinu i snagu. Prezadovoljan sam rezultatima.",
    },
  ]

  return (
    <section id="iskustva" className="py-20 bg-lime-50" role="region" aria-labelledby="naslov-iskustva">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="naslov-iskustva" className="text-4xl font-bold text-gray-900 mb-4">
            Priče o Uspehu Naših Klijenata
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ne morate nam verovati na reč. Pogledajte šta naši klijenti kažu o svojim transformacijama sa FitCoach Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex" aria-label={`Ocena ${testimonial.rating} zvezdica`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={`Fotografija korisnika ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}