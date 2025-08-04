'use client'

import { Dumbbell, Heart, Users, Utensils } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Personalni Trening",
      description: "Individualni treninzi prilagođeni vašim ciljevima i nivou fizičke spremnosti.",
      price: "20 € / sesija",
      features: [
        "Personalizovan plan treninga",
        "Korekcija forme",
        "Praćenje napretka",
        "Fleksibilno zakazivanje",
      ],
    },
    {
      icon: Users,
      title: "Polupersonalni Trening",
      description: "Trening u malim grupama koji kombinuje motivaciju i individualni pristup.",
      price: "15 € / po osobi",
      features: [
        "2-4 osobe maksimalno",
        "Grupna motivacija",
        "Isplativije opcije",
        "Zabavna atmosfera",
      ],
    },
    {
      icon: Utensils,
      title: "Nutricionističko Savetovanje",
      description: "Plan ishrane i saveti prilagođeni vašim ciljevima i vašem životnom stilu.",
      price: "50 € / dvomesečni plan",
      features: [
        "Prilagođeni jelovnici",
        "Praćenje makronutrijenata",
        "Saveti o suplementima",
        "Usklađivanje sa stilom života",
      ],
    },
  ]

  return (
    <section id="usluge" className="py-20 bg-gray-50" role="region" aria-labelledby="naslov-usluga">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="naslov-usluga" className="text-4xl font-bold text-gray-900 mb-4">
            Usluge Prilagođene Vašem Uspehu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Odaberite neku od naših fitnes i wellness usluga osmišljenih tako da vam pomognu da postignete svoje ciljeve zdravlja i kondicije.
          </p>
        </div>

        {/* Responsive Grid for services */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }} className="w-full bg-green-600 hover:bg-green-700">Zakaži Termin</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
