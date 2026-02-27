"use client";
import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import CallTotActionCard from "@/components/ui/call-to-action-card";

export function TopicInlineCTA({ text }: { text?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="my-10 relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 sm:p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-50 text-sm sm:text-base leading-relaxed flex-1">
            {text || "Želiš da saznaš kako ti mogu pomoći? Javi mi se za besplatnu konsultaciju."}
          </p>
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-white text-green-700 hover:bg-green-50 font-semibold px-6 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 shrink-0 group"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Kontaktiraj me
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CallTotActionCard onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}

export function TopicBottomCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 sm:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Spreman/na za promenu?
                </h2>
                <p className="text-green-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                  Zakaži besplatan razgovor i napravimo plan prilagođen
                  tvojim ciljevima. Bez obaveza — samo konkretan savet.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="bg-white text-green-700 hover:bg-green-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 px-8 py-5 rounded-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Besplatna konsultacija
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-green-200/70 text-xs mt-4">
                  Dostupan sam radnim danima od 07:00 do 18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CallTotActionCard onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}
