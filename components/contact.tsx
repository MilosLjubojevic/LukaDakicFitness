"use client"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export function Contact() {

  const phoneNumber = '+38166244454';
  const phoneNumberDisplay = '+381 66 244 454';
  
  const handleViber = () => {
    window.open(`viber://chat?number=${phoneNumber}`, '_blank');
  };
  
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/luka__dakic", "_blank");
  };

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
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Spreman si za transformaciju?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Kontaktiraj me još danas i zakaži besplatan probni trening. Napravi prvi korak ka zdravijem, jačem i energičnijem telu.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="space-y-6 sm:space-y-8 max-w-4xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-green-600"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-base sm:text-lg">
                      <div className="p-2 bg-green-100 rounded-lg mr-3">
                        <info.icon className="w-5 h-5 text-green-600" />
                      </div>
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm sm:text-base">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-2 border-green-600 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Besplatan probni trening!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                    Zakaži besplatan trening u trajanju od 30 minuta i saznaj kako mogu da ti pomognem da postigneš svoje ciljeve – bilo da je to mršavljenje, snaga ili kondicija.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
                  <Button onClick={handleWhatsApp} className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </Button>
                  <Button onClick={handleViber} className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.398.002C9.473.028 8.037.15 7.382.31c-.88.217-1.637.583-2.304 1.25-.666.667-1.033 1.425-1.25 2.304-.16.655-.282 2.091-.308 4.016C3.494 9.806 3.494 10.032 3.494 12c0 1.968 0 2.194.026 4.12.026 1.925.148 3.361.308 4.016.217.88.583 1.637 1.25 2.304.667.666 1.425 1.033 2.304 1.25.655.16 2.091.282 4.016.308 1.926.026 2.152.026 4.12.026 1.968 0 2.194 0 4.12-.026 1.925-.026 3.361-.148 4.016-.308.88-.217 1.637-.583 2.304-1.25.666-.667 1.033-1.425 1.25-2.304.16-.655.282-2.091.308-4.016.026-1.926.026-2.152.026-4.12 0-1.968 0-2.194-.026-4.12-.026-1.925-.148-3.361-.308-4.016-.217-.88-.583-1.637-1.25-2.304C20.638.893 19.88.526 19 .31c-.655-.16-2.091-.282-4.016-.308C13.058.002 12.832.002 12 .002c-1.968 0-2.194 0-4.12.026-.955.013-1.77.065-2.482.156zm.384 2.25c.71-.012 1.38-.018 2.218-.018 1.937 0 2.166.007 2.927.032.706.032 1.088.15 1.343.248.337.13.578.287.83.539.252.252.409.493.539.83.099.255.216.637.248 1.343.025.761.032.99.032 2.927s-.007 2.166-.032 2.927c-.032.706-.15 1.088-.248 1.343-.13.337-.287.578-.539.83-.252.252-.493.409-.83.539-.255.099-.637.216-1.343.248-.761.025-.99.032-2.927.032s-2.166-.007-2.927-.032c-.706-.032-1.088-.15-1.343-.248-.337-.13-.578-.287-.83-.539-.252-.252-.409-.493-.539-.83-.099-.255-.216-.637-.248-1.343-.025-.761-.032-.99-.032-2.927s.007-2.166.032-2.927c.032-.706.15-1.088.248-1.343.13-.337.287-.578.539-.83.252-.252.493-.409.83-.539.255-.099.637-.216 1.343-.248.664-.03.921-.039 2.279-.041zm4.48 2.089c-.48 0-.87.39-.87.87s.39.87.87.87.87-.39.87-.87-.39-.87-.87-.87zM12 6.865c-2.84 0-5.135 2.295-5.135 5.135S9.16 17.135 12 17.135s5.135-2.295 5.135-5.135S14.84 6.865 12 6.865zm0 2.25c1.588 0 2.885 1.297 2.885 2.885S13.588 14.885 12 14.885 9.115 13.588 9.115 12 10.412 9.115 12 9.115z"/>
                    </svg>
                    Viber
                  </Button>
                  <Button onClick={handleInstagram} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.155 13.893c.716-6.027-.344-9.832-2.256-11.553l.001-.001c-3.021-2.783-8.785-1.511-14.403 3.107C1.11 10.832-1.315 15.889.645 18.993c1.06 1.669 3.246 2.337 6.076 2.337 3.649 0 8.217-1.339 12.156-4.12v-.003l.002.003c1.667-1.178 2.887-2.479 3.641-3.878.89-1.639 1.18-3.339.635-5.439zm-2.544 4.912c-.596 1.108-1.629 2.192-3.074 3.229-3.63 2.572-8.027 3.872-11.008 3.253-1.813-.377-3.142-1.299-3.738-2.595C.792 18.741.846 14.243 4.94 9.597 9.036 4.95 13.836 2.841 16.917 3.968c1.853.679 3.178 2.508 3.738 5.158.418 1.981.096 3.46-.544 4.68v-.001z"/>
                    </svg>
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}