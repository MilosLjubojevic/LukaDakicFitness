import { Dumbbell, Heart, Users, Utensils } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "One-on-one training sessions tailored to your specific goals and fitness level.",
      price: "$80/session",
      features: ["Customized workout plans", "Form correction", "Progress tracking", "Flexible scheduling"],
    },
    {
      icon: Users,
      title: "Group Training",
      description: "Small group sessions that combine motivation with personalized attention.",
      price: "$40/session",
      features: ["2-4 people max", "Team motivation", "Cost effective", "Fun atmosphere"],
    },
    {
      icon: Utensils,
      title: "Nutrition Coaching",
      description: "Personalized meal plans and nutrition guidance to fuel your fitness journey.",
      price: "$60/session",
      features: ["Custom meal plans", "Macro tracking", "Supplement advice", "Lifestyle integration"],
    },
    {
      icon: Heart,
      title: "Wellness Coaching",
      description: "Holistic approach to health including stress management and lifestyle optimization.",
      price: "$70/session",
      features: ["Stress management", "Sleep optimization", "Habit formation", "Mental wellness"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Designed for Your Success</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of fitness and wellness services, all designed to help you achieve your
            health and fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <service.icon className="w-12 h-12 text-green-900 mx-auto mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-green-600">{service.price}</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Book Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
