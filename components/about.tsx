import { Award, Users, Clock, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const stats = [
    { icon: Users, number: "100+", label: "Zadovoljnih klijenata" },
    { icon: Clock, number: "7+", label: "Godina iskustva" },
    { icon: Award, number: "15+", label: "Sertifikata i obuka" },
    { icon: Target, number: "100%", label: "Uspešnost transformacija" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Upoznaj svog personalnog trenera
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Zovem se <span className="font-semibold text-gray-900">Luka Dakić</span> i master sam Fakulteta sporta i fizičkog vaspitanja. Više od 7 godina radim kao <span className="font-semibold text-gray-900">personalni trener</span>, pomažući klijentima svih uzrasta da ostvare svoje fitness ciljeve – bilo da je reč o mršavljenju, povećanju mišićne mase, poboljšanju kondicije ili uklanjanju bolova u leđima i zglobovima.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Moja filozofija treninga zasniva se na <span className="font-semibold text-gray-900">individualnom pristupu</span>. Verujem da je svaki čovek jedinstven – sa različitim potrebama, ciljevima i mogućnostima. Zato svaki trening program koji kreiram bude pažljivo prilagođen tebi – tvom telu, tvom načinu života i tvom tempu.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                Moje sertifikacije
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Diplomirani Profesor Fizičkog Vaspitanja i Sporta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>NASM Sertifikovani Personalni Trener</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>NASM Specijalista Korektivnog Vežbanja</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>NASM Specijalista Kondicionog Treninga</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>HFS Specijalista Funkcionalnog Treninga</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>HFS Pravilna Ishrana i Suplementacija</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>HFS Instruktor Grupnog Fitnesa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>TRX Instruktor</span>
                </li>
              </ul>
            </div>

            {/* Call to Action Text */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">
                Bilo da želite da smršate, izgradite mišićnu masu, poboljšate kondiciju ili jednostavno osećate više energije u svakodnevnom životu – tu sam da vas vodim kroz svaki korak. Nudim individualne i polu-presonalne treninge u skladu sa vašim ciljevima.
              </p>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-8 lg:sticky lg:top-8">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img
                src="/DakicCitaDva.jpg"
                alt="Luka Dakić - Personalni Trener"
                className="relative rounded-2xl shadow-xl w-full object-cover"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-gray-200 hover:border-green-600 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 leading-tight">
                      {stat.label}
                    </div>
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