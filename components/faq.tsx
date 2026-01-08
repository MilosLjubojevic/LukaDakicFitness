"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import CallTotActionCard from "@/components/ui/call-to-action-card";

const faqs = [
  {
    question: "Koliko košta prvi trening sa personalnim trenerom?",
    answer:
      "Prvi personalni trening je potpuno BESPLATAN i bez obaveza! Na besplatnoj konsultaciji procenjujemo vašu trenutnu fizičku formu, razgovaramo o fitnes ciljevima (mršavljenje, povećanje mišićne mase, poboljšanje kondicije) i kreiramo individualni plan treninga prilagođen vašim potrebama.",
  },
  {
    question: "Koliko treninga nedeljno je potrebno za vidljive rezultate?",
    answer:
      "Za optimalne rezultate transformacije tela preporučujem 3-4 personalna treninga nedeljno. Program prilagođavam vašem rasporedu i ciljevima – čak i sa 2 treninga nedeljno možete postići značajno mršavljenje ili povećanje mišićne mase uz pravilnu tehniku vežbanja i disciplinu.",
  },
  {
    question: "Da li personalni trener radi sa početnicima?",
    answer:
      "Apsolutno! Kao sertifikovani NASM personalni trener, imam iskustvo sa klijentima svih nivoa – od potpunih početnika do naprednih vežbača. Svaki trening program prilagođavam individualnim potrebama, a početnicima posebno posvećujem pažnju pravilnoj tehnici vežbanja i bezbednosti.",
  },
  {
    question: "Šta je uključeno u nutricionistički plan ishrane?",
    answer:
      "Dvomesečni plan ishrane uključuje: personalizovani jelovnik prilagođen vašim ciljevima (mršavljenje ili povećanje mase), detaljan spisak namirnica, praćenje makronutrijenata (proteini, ugljeni hidrati, masti), stručne savete o suplementaciji i kontinuiranu podršku putem poruka tokom celog perioda.",
  },
  {
    question: "Gde se održavaju personalni treninzi u Novom Sadu?",
    answer:
      "Personalni treninzi se održavaju u Classic Gym teretani u Novom Sadu – jednoj od najbolje opremljenih teretana u gradu. Teretana ima svu neophodnu opremu za efikasan trening snage i kondicije.",
  },
  {
    question: "Kako mogu da zakažem personalni trening?",
    answer:
      "Zakazivanje personalnog treninga je jednostavno – kontaktirajte me putem WhatsApp-a, Viber-a ili Instagram-a (@luka__dakic). Broj telefona je +381 66 244 454. Odgovaram brzo i zajedno ćemo pronaći termine koji vam odgovaraju. Prvi trening je besplatan!",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Često postavljana pitanja</span>
          </div>

          <h2
            id="faq-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Imate pitanja?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Imamo odgovore
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pronađite odgovore na najčešća pitanja o treninzima, ishrani i
            saradnji.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Nemate odgovor na svoje pitanje?</p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Kontaktirajte me direktno
          </Button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CallTotActionCard />
      </Modal>
    </section>
  );
}
