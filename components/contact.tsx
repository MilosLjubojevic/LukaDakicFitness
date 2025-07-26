import { MapPin, Phone, Mail, Clock,PhoneCall,MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Fitness Street", "Downtown Gym District", "City, State 12345"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Call or Text"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["alex@fitcoachpro.com", "Quick Response Guaranteed"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 6AM - 9PM", "Sat-Sun: 8AM - 6PM"],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Transformation?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch today to schedule your free consultation and take the first step towards achieving your fitness
            goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <info.icon className="w-5 h-5 text-greene-600 mr-2" />
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-lime-50 border-green-900">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Besplatni probni trening!</h3>
                <p className="text-gray-600 mb-4">
                  Book your complimentary 30-minute consultation to discuss your goals and learn how we can help you
                  achieve them.
                </p>
                <div className="flex justify-start gap-2">
                <Button className="bg-green-600 hover:bg-green-700 text-white">What's App</Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Viber</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goals">Fitness Goals</Label>
                <Textarea
                  id="goals"
                  placeholder="Tell us about your fitness goals and what you'd like to achieve..."
                  rows={4}
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">Send Message</Button>
              
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
