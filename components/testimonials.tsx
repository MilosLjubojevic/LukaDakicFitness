"use client";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import Stefan from "@/public/Stefo.jpg";
import Vesna from "@/public/Vesna.jpg";
import Igor from "@/public/IgorJamberk.jpg";
import Marko from "@/public/MarkoJovovic.jpg";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Marko Jovović",
      role: "Direktor Brame R&D",
      image: Marko,
      rating: 5,
      text: "Počeo sam da treniram sa Lukom jer me je motivisao da se aktiviram van stresnog poslovnog okruženja, a već nakon godinu dana osetio sam koliko mi treninzi snage prijaju, kako mentalno, tako i fizički. Prevazišao je sva moja očekivanja – danas ne mogu da zamislim dan bez treninga.",
    },
    {
      name: "Igor Jambrek",
      role: "Direktor i suosnivač Servalit-a",
      image: Igor,
      rating: 5,
      text: "Nakon operacije kolena nisam uspevao da se vratim u normalno stanje. Luka mi je pomogao da potpuno oporavim povredu kolena, nastavili smo sa rekreativnim vežbama i ostvario sam sve zacrtane ciljeve. Sada zajedno postavljamo nove izazove za dalji napredak.",
    },
    {
      name: "Vesna Jančić",
      role: "Nastavnica",
      image: Vesna,
      rating: 5,
      text: "Pre nego što sam počela da treniram sa Lukom, nisam imala ni motivaciju ni jasan pravac kako da ostvarim svoje ciljeve. Zahvaljujući njegovom stručnom i prilagođenom pristupu, rezultati su stigli već nakon nekoliko nedelja i sada trening postaje deo moje svakodnevice.",
    },
    {
      name: "Stefan Tešić",
      role: "Direktor u Gama$",
      image: Stefan,
      rating: 5,
      text: "Ono što mi se najviše dopada je što Luka nije samo trener – on je i podrška, i motivator, i neko kome je iskreno stalo do napretka svojih klijenata. Svaki trening je drugačiji, zanimljiv, ali i izazovan, i uvek imam osećaj da napredujem.",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      role="region"
      aria-labelledby="naslov-iskustva"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-100 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div variants={headerVariants}>
            <div className="inline-flex items-center gap-2 bg-yellow-100/80 backdrop-blur-sm text-yellow-800 px-5 py-2.5 rounded-full text-sm font-semibold border border-yellow-200/50">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span>Iskustva klijenata</span>
            </div>
          </motion.div>

          <motion.h2
            id="naslov-iskustva"
            className="text-4xl md:text-5xl font-bold text-gray-900"
            variants={headerVariants}
          >
            Priče o uspehu
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mt-1 pb-1">
              naših klijenata
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Ne morate nam verovati na reč. Pogledajte šta naši klijenti kažu o
            svojim transformacijama.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)" }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm transition-colors duration-300 hover:border-green-200"
              aria-label={`Testimonial od ${testimonial.name}, ocena ${testimonial.rating} zvezdica`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                <Quote className="w-8 h-8 text-green-100 group-hover:text-green-200 transition-colors" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`Ocena ${testimonial.rating} od 5 zvezdica`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 pr-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  <Image
                    width={80}
                    height={80}
                    src={testimonial.image}
                    alt={`Fotografija korisnika ${testimonial.name}`}
                    className="relative w-11 h-11 rounded-full object-cover ring-2 ring-white"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
