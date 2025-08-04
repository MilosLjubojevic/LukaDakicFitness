import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Marko Jovović",
      role: "Director of Brame R&D",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Počeo sam da treniram sa Lukom jer me je motivisao da se aktiviram van stresnog poslovnog okruženja, a već nakon godinu dana osetio sam koliko mi treninzi snage prijaju, kako mentalno tako i fizički. Prevazišao je sva moja očekivanja – danas ne mogu da zamislim dan bez treninga.",
    },
    {
      name: "Igor Jambrek",
      role: "Director & Co-Founder at Servalit",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Ja sam Igor Jambrek, softverski inženjer, i nakon operacije kolena nisam uspevao da se vratim u normalno stanje. Luka mi je pomogao da potpuno oporavim povredu kolena, nastavili smo sa rekreativnim vežbama i ostvario sam sve zacrtane ciljeve, a sada zajedno postavljamo nove izazove za dalji napredak.",
    },
    {
      name: "Emili Čen",
      role: "Nastavnica",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Pre nego što sam počela da treniram sa Lukom, nisam imala ni motivaciju ni jasan pravac kako da ostvarim svoje ciljeve. Zahvaljujući njegovom stručnom i prilagođenom pristupu, rezultati su stigli već nakon nekoliko nedelja i sada trening postaje deo moje svakodnevice.",
    },
    {
      name: "David Baja",
      role: "Penzionisani Veteran",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Ono što mi se najviše dopada je to što Luka nije samo trener – on je i podrška, i motivator, i neko kome je iskreno stalo do napretka svojih klijenata. Svaki trening je drugačiji, zanimljiv, ali i izazovan, i uvek imam osećaj da napredujem.",
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
           <Card key={index} className="h-full flex flex-col">
           <CardContent className="p-6 flex flex-col justify-between flex-1">
             <div className="space-y-4">
               <div className="flex" aria-label={`Ocena ${testimonial.rating} zvezdica`}>
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                 ))}
               </div>
               <p className="text-gray-600 italic">"{testimonial.text}"</p>
             </div>
             <div className="flex items-center space-x-3 pt-4">
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