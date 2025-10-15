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
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-lime-50" role="region" aria-labelledby="naslov-iskustva">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 id="naslov-iskustva" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Priče o Uspehu Naših Klijenata
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ne morate nam verovati na reč. Pogledajte šta naši klijenti kažu o svojim transformacijama sa FitCoach Pro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
           <Card key={index} className="h-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
           <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1">
             <div className="space-y-3 sm:space-y-4">
               <div className="flex" aria-label={`Ocena ${testimonial.rating} zvezdica`}>
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                 ))}
               </div>
               <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
             </div>
             <div className="flex items-center space-x-2 sm:space-x-3 pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-100">
               <img
                 src={testimonial.image}
                 alt={`Fotografija korisnika ${testimonial.name}`}
                 className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
               />
               <div className="min-w-0">
                 <div className="font-semibold text-sm sm:text-base text-gray-900 truncate">{testimonial.name}</div>
                 <div className="text-xs sm:text-sm text-gray-600 truncate">{testimonial.role}</div>
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