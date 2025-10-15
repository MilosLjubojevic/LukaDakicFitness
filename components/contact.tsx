import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Lokacija",
      details: ["Ulica Fitnesa 123", "Teretana - Centar grada", "Beograd, Srbija"],
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+381 66 244 454", "Poziv ili poruka"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["luka@fitnestrener.rs", "Odgovor u roku od 24h"],
    },
    {
      icon: Clock,
      title: "Radno vreme",
      details: ["Ponedeljak - Petak: 6:00 - 21:00", "Vikendom: 8:00 - 18:00"],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Spreman si za transformaciju?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kontaktiraj me još danas i zakaži besplatan probni trening. Napravi prvi korak ka zdravijem, jačem i energičnijem telu.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <info.icon className="w-5 h-5 text-green-600 mr-2" />
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Besplatan probni trening!</h3>
                <p className="text-gray-600 mb-4">
                  Zakaži besplatan trening u trajanju od 30 minuta i saznaj kako mogu da ti pomognem da postigneš svoje ciljeve – bilo da je to mršavljenje, snaga ili kondicija.
                </p>
                <div className="flex justify-center gap-2">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">WhatsApp</Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Viber</Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Instagram</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          
        </div>
      </div>
    </section>
  )
}
