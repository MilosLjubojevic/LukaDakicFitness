"use client";
import { useState } from "react";
import { Dumbbell, Users, Utensils, Check, Sparkles, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import CallTotActionCard from "@/components/ui/call-to-action-card";

export function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const services = [
    {
      icon: Dumbbell,
      title: "Personalni Trening",
      description:
        "Individualni treninzi prilagođeni vašim ciljevima i nivou fizičke spremnosti.",
      price: "20",
      period: "po sesiji (60 min)",
      features: [
        "Personalizovan plan treninga",
        "Korekcija forme u realnom vremenu",
        "Praćenje napretka",
        "Fleksibilno zakazivanje",
      ],
      badge: "Najpopularnije",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Polupersonalni Trening",
      description:
        "Trening u malim grupama koji kombinuje motivaciju i individualni pristup.",
      price: "15",
      period: "po osobi / sesiji (60 min)",
      features: [
        "2-4 osobe maksimalno",
        "Grupna motivacija",
        "Isplativija opcija",
        "Zabavna atmosfera",
      ],
      badge: null,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Utensils,
      title: "Nutricionističko Savetovanje",
      description:
        "Plan ishrane i saveti prilagođeni vašim ciljevima i vašem životnom stilu.",
      price: "50",
      period: "dvomesečni plan",
      features: [
        "Prilagođeni jelovnici",
        "Praćenje makronutrijenata",
        "Saveti o suplementima",
        "Podrška putem poruka",
      ],
      badge: "Najbolja vrednost",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const comparisonFeatures = [
    { name: "Individualna pažnja", personal: true, semi: "Delimično", nutrition: false },
    { name: "Korekcija forme", personal: true, semi: true, nutrition: false },
    { name: "Plan treninga", personal: true, semi: true, nutrition: false },
    { name: "Plan ishrane", personal: false, semi: false, nutrition: true },
    { name: "Praćenje makronutrijenata", personal: false, semi: false, nutrition: true },
    { name: "Fleksibilno zakazivanje", personal: true, semi: "Ograničeno", nutrition: true },
    { name: "Grupna motivacija", personal: false, semi: true, nutrition: false },
    { name: "Podrška putem poruka", personal: true, semi: true, nutrition: true },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      role="region"
      aria-labelledby="naslov-usluga"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Profesionalne usluge</span>
          </div>

          <h2
            id="naslov-usluga"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Usluge Prilagođene
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Vašem Uspehu
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Odaberite neku od naših fitnes usluga osmišljenih tako da vam
            pomognu da postignete svoje ciljeve zdravlja i kondicije.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-green-200 group overflow-hidden"
              aria-label={`${service.title}, cena ${service.price} € po ${service.period}`}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  {service.badge}
                </div>
              )}

              {/* Gradient top bar */}
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.gradient}`}
              ></div>

              <CardHeader className="text-center pt-8 pb-4">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-gray-900" />
                  </div>
                </div>

                <CardTitle className="text-2xl mb-2 text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 pb-8">
                {/* Price */}
                <div className="text-center py-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span
                      className={`text-5xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    >
                      {service.price}
                    </span>
                    <span className="text-gray-600 font-semibold">€</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    / {service.period}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <div
                        className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={handleClick}
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                >
                  Zakaži Termin
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table Toggle */}
        <div className="text-center mt-12">
          <Button
            onClick={() => setShowComparison(!showComparison)}
            variant="ghost"
            className="text-green-600 hover:text-green-700 hover:bg-green-50 font-semibold"
          >
            {showComparison ? "Sakrij poređenje" : "Uporedi usluge"}
            <svg
              className={`ml-2 w-4 h-4 transition-transform duration-300 ${showComparison ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>

        {/* Comparison Table */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            showComparison ? "max-h-[800px] opacity-100 mt-8" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Karakteristika</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">
                      <div className="flex flex-col items-center gap-1">
                        <Dumbbell className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Personalni</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">
                      <div className="flex flex-col items-center gap-1">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="text-sm">Polupersonalni</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">
                      <div className="flex flex-col items-center gap-1">
                        <Utensils className="w-5 h-5 text-orange-600" />
                        <span className="text-sm">Ishrana</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-6 text-gray-700">{feature.name}</td>
                      <td className="py-3 px-4 text-center">
                        {feature.personal === true ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : feature.personal === false ? (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-sm text-gray-500">{feature.personal}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {feature.semi === true ? (
                          <Check className="w-5 h-5 text-blue-600 mx-auto" />
                        ) : feature.semi === false ? (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-sm text-gray-500">{feature.semi}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {feature.nutrition === true ? (
                          <Check className="w-5 h-5 text-orange-600 mx-auto" />
                        ) : feature.nutrition === false ? (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-sm text-gray-500">{feature.nutrition}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-100 border-t-2 border-gray-200">
                    <td className="py-4 px-6 font-bold text-gray-900">Cena</td>
                    <td className="py-4 px-4 text-center font-bold text-green-600">20€/sesija</td>
                    <td className="py-4 px-4 text-center font-bold text-blue-600">15€/osoba</td>
                    <td className="py-4 px-4 text-center font-bold text-orange-600">50€/2 meseca</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Niste sigurni koja usluga je najbolja za vas?
          </p>
          <Button
            onClick={handleClick}
            variant="outline"
            size="lg"
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300"
          >
            Kontaktirajte nas za besplatnu konsultaciju
          </Button>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CallTotActionCard />
      </Modal>
    </section>
  );
}
