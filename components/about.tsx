import { Award, Users, Clock, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Clock, number: "5+", label: "Years Experience" },
    { icon: Award, number: "15+", label: "Certifications" },
    { icon: Target, number: "95%", label: "Success Rate" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Meet Your Personal Trainer</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hi, I'm Alex Johnson, a certified personal trainer with over 5 years of experience helping people
                achieve their fitness goals. My approach combines science-based training methods with personalized
                attention to ensure you get the results you deserve.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">My Certifications:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• NASM Certified Personal Trainer</li>
                <li>• Precision Nutrition Level 1</li>
                <li>• Functional Movement Screen (FMS)</li>
                <li>• CPR/AED Certified</li>
              </ul>
            </div>

            <p className="text-gray-600">
              Whether you're looking to lose weight, build muscle, improve athletic performance, or simply feel better
              in your own skin, I'm here to guide you every step of the way.
            </p>
          </div>

          <div className="space-y-8">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Alex Johnson - Personal Trainer"
              className="rounded-2xl shadow-lg w-full"
            />

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
