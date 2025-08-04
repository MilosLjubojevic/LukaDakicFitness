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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Upoznaj svog personalnog trenera</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
  Zovem se <strong>Luka Dakić</strong> i master sam Fakulteta sporta i fizičkog vaspitanja. Više od 7 godina radim kao <strong>personalni trener</strong>, pomažući klijentima svih uzrasta da ostvare svoje <em>fitness ciljeve</em> – bilo da je reč o mršavljenju, povećanju mišićne mase, poboljšanju kondicije ili uklanjanju bolova u leđima i zglobovima.
</p>

<p className="text-lg text-gray-600 leading-relaxed mt-4">
  Moja filozofija treninga zasniva se na <strong>individualnom pristupu</strong>. Verujem da je svaki čovek jedinstven – sa različitim potrebama, ciljevima i mogućnostima. Zato svaki trening program koji kreiram bude pažljivo prilagođen tebi – tvom telu, tvom načinu života i tvom tempu.
</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Moje sertifikacije:</h3>
              <ul className="space-y-2 text-gray-600">
              <li>• Diplomirani Profesor Fizickog Vaspitanja i Sporta </li>
              <li>• NASM Sertifikovani Personalni Trener </li>
              <li>• NASM Specijalista Korektivnog Vezbanja</li>
              <li>• NASM Specijalista Kondicionog Treninga</li>
              <li>• HFS Specijalista Funkcionalnog Treninga</li>
              <li>• HFS Pravilna Ishrana i Suplementacija</li>
              <li>• HFS Instruktor Grupnog Fitnesa</li> 
              <li>• TRX Instruktor</li>
              </ul>
            
              
            </div>

            <p className="text-gray-600">
  Bilo da želite da smršate, izgradite mišićnu masu, poboljšate kondiciju ili jednostavno osećate više energije u svakodnevnom životu – tu sam da vas vodim kroz svaki korak. Nudim individualne i grupne treninge u skladu sa vašim ciljevima.
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
