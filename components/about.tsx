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
  Zovem se Luka Dakić i kao licencirani personalni trener sa više od 5 godina iskustva, pomogao sam desetinama ljudi širom Srbije da dostignu svoje fitness ciljeve. Moj pristup kombinuje naučno zasnovane metode vežbanja sa individualnim planovima prilagođenim vašim potrebama.
</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Moje sertifikacije:</h3>
              <ul className="space-y-2 text-gray-600">
              <li>• Diplomirani Profesor Fizickog Vaspitanja i Sporta </li>
              <li>• NASM Sertifikovani Personalni Trener (Nacionalna Akademija Sporta i Medicine)</li>
              <li>• NASM Sertifikovani Personalni Trener NASM Specijalista Kondicionog Treninga</li>
              <li>• </li>
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
