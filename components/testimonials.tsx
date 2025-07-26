import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Manager",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Alex transformed not just my body, but my entire relationship with fitness. I've lost 30 pounds and gained so much confidence. His personalized approach made all the difference!",
    },
    {
      name: "Mike Rodriguez",
      role: "Software Engineer",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As someone who spent years behind a desk, I thought I was beyond help. Alex proved me wrong! His patient guidance helped me build strength I never thought possible.",
    },
    {
      name: "Emily Chen",
      role: "Teacher",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The nutrition coaching was a game-changer. Alex helped me understand how to fuel my body properly, and the results speak for themselves. I feel amazing!",
    },
    {
      name: "David Thompson",
      role: "Retired Veteran",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "After my military service, I struggled to maintain my fitness. Alex's program brought back my discipline and strength. Couldn't be happier with the results.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-lime-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories from Real Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their transformation journey with
            FitCoach Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
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
