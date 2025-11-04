"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Contact() {
  const phoneNumber = "+38166244454";

  const handleViber = () =>
    window.open(`viber://chat?number=${phoneNumber}`, "_blank");
  const handleWhatsApp = () =>
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  const handleInstagram = () =>
    window.open("https://www.instagram.com/luka__dakic", "_blank");

  const contactInfo = [
    {
      icon: MapPin,
      title: "Lokacija",
      details: [
        "Ulica Bulevar oslobođenja 83",
        "Teretana - Classic Gym",
        "Novi Sad, Srbija",
      ],
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+381 66 244 454", "Poziv ili poruka"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["luka_dakic@yahoo.com", "Odgovor u roku od 24h"],
    },
    {
      icon: Clock,
      title: "Radno vreme",
      details: ["Ponedeljak - Petak: 7:00 - 18:00"],
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spreman/na za transformaciju?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Kontaktiraj me danas i zakaži besplatan probni trening. Napravi prvi
            korak ka zdravijem, jačem i energičnijem telu.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-green-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm sm:text-base">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-2 border-green-600 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-full mb-4 shadow-md">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Besplatan probni trening!
              </h3>
              <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
                Rezerviši besplatan 30-minutni trening i otkrij kako ti mogu
                pomoći da postigneš svoje ciljeve – bilo da želiš smršati,
                izgraditi mišiće, poboljšati kondiciju ili rešiti bolove i
                posturalne probleme.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              {/* WhatsApp */}
              <Button
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Button>

              {/* Viber */}
              <Button
                onClick={handleViber}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.398.002C9.473.028 8.037.15 7.382.31c-.88.217-1.637.583-2.304 1.25-.666.667-1.033 1.425-1.25 2.304-.16.655-.282 2.091-.308 4.016C3.494 9.806 3.494 10.032 3.494 12c0 1.968 0 2.194.026 4.12.026 1.925.148 3.361.308 4.016.217.88.583 1.637 1.25 2.304.667.666 1.425 1.033 2.304 1.25.655.16 2.091.282 4.016.308 1.926.026 2.152.026 4.12.026 1.968 0 2.194 0 4.12-.026 1.925-.026 3.361-.148 4.016-.308.88-.217 1.637-.583 2.304-1.25.666-.667 1.033-1.425 1.25-2.304.16-.655.282-2.091.308-4.016.026-1.926.026-2.152.026-4.12 0-1.968 0-2.194-.026-4.12-.026-1.925-.148-3.361-.308-4.016-.217-.88-.583-1.637-1.25-2.304C20.638.893 19.88.526 19 .31c-.655-.16-2.091-.282-4.016-.308C13.058.002 12.832.002 12 .002c-1.968 0-2.194 0-4.12.026-.955.013-1.77.065-2.482.156zm.384 2.25c.71-.012 1.38-.018 2.218-.018 1.937 0 2.166.007 2.927.032.706.032 1.088.15 1.343.248.337.13.578.287.83.539.252.252.409.493.539.83.099.255.216.637.248 1.343.025.761.032.99.032 2.927s-.007 2.166-.032 2.927c-.032.706-.15 1.088-.248 1.343-.13.337-.287.578-.539.83-.252.252-.493.409-.83.539-.255.099-.637.216-1.343.248-.761.025-.99.032-2.927.032s-2.166-.007-2.927-.032c-.706-.032-1.088-.15-1.343-.248-.337-.13-.578-.287-.83-.539-.252-.252-.409-.493-.539-.83-.099-.255-.216-.637-.248-1.343-.025-.761-.032-.99-.032-2.927s.007-2.166.032-2.927c.032-.706.15-1.088.248-1.343.13-.337.287-.578.539-.83.252-.252.493-.409.83-.539.255-.099.637-.216 1.343-.248.664-.03.921-.039 2.279-.041zm4.48 2.089c-.48 0-.87.39-.87.87s.39.87.87.87.87-.39.87-.87-.39-.87-.87-.87zM12 6.865c-2.84 0-5.135 2.295-5.135 5.135S9.16 17.135 12 17.135s5.135-2.295 5.135-5.135S14.84 6.865 12 6.865zm0 2.25c1.588 0 2.885 1.297 2.885 2.885S13.588 14.885 12 14.885 9.115 13.588 9.115 12 10.412 9.115 12 9.115z" />
                </svg>
                Viber
              </Button>

              {/* Instagram */}
              <Button
                onClick={handleInstagram}
                className="bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-500 hover:opacity-90 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.25 1.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM12 9a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
                Instagram
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
