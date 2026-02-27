"use client";

import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

export function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
      details: ["Bulevar oslobođenja 83", "Classic Gym, Novi Sad"],
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+381 66 244 454", "Poziv ili poruka"],
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["luka_dakic@yahoo.com", "Odgovor u roku od 24h"],
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
    {
      icon: Clock,
      title: "Radno vreme",
      details: ["Pon - Pet: 7:00 - 18:00"],
      color: "text-purple-600",
      bg: "bg-purple-100",
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
    hidden: { opacity: 0, y: 30 },
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
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

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
            <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm text-green-800 px-5 py-2.5 rounded-full text-sm font-semibold border border-green-200/50">
              <MessageCircle className="w-4 h-4" />
              <span>Kontakt</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            variants={headerVariants}
          >
            Spreman/na za
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mt-1 pb-1">
              transformaciju?
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Kontaktiraj me danas i zakaži besplatan probni trening. Napravi prvi
            korak ka zdravijem, jačem i energičnijem telu.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-14"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(0, 0, 0, 0.08)" }}
              className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:border-gray-200 transition-colors duration-300"
            >
              <div className={`w-10 h-10 ${info.bg} rounded-xl flex items-center justify-center mb-4`}>
                <info.icon className={`w-5 h-5 ${info.color}`} />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">
                {info.title}
              </h3>
              <div className="space-y-0.5">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-500 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 sm:p-10 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl mb-5">
                <svg
                  className="w-7 h-7 text-white"
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

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Besplatan probni trening!
              </h3>
              <p className="text-green-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Rezerviši besplatan 30-minutni trening i otkrij kako ti mogu
                pomoći da postigneš svoje ciljeve – bilo da želiš smršati,
                izgraditi mišiće, poboljšati kondiciju ili rešiti bolove i
                posturalne probleme.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                {/* WhatsApp */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    onClick={handleWhatsApp}
                    className="bg-white text-green-700 hover:bg-green-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-5 rounded-xl"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>

                {/* Viber */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    onClick={handleViber}
                    className="bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 font-semibold shadow-lg transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-5 rounded-xl border border-white/20"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.812 3.45C18.594 1.226 15.473.024 12.198 0h-.048C5.592 0 1.292 3.924.636 8.862c-.12.912-.18 1.86-.18 2.838 0 2.382.594 4.596 1.722 6.396l-1.8 5.904 6.096-1.596c1.722.93 3.654 1.422 5.658 1.422h.006c6.558 0 11.892-5.334 11.892-11.892 0-3.174-1.236-6.162-3.48-8.412l.062-.074zM12.138 21.84h-.006c-1.818 0-3.6-.492-5.148-1.416l-.372-.216-3.816 1.002 1.02-3.726-.24-.378c-1.02-1.62-1.56-3.498-1.56-5.424 0-5.622 4.578-10.2 10.2-10.2 2.724 0 5.286 1.062 7.212 2.994a10.138 10.138 0 012.988 7.218c-.006 5.622-4.578 10.2-10.2 10.2l-.078-.054zm5.334-7.644c-.294-.15-1.734-.858-2.004-.954-.27-.102-.468-.15-.66.15-.198.294-.762.954-.936 1.152-.168.198-.342.222-.636.072-.294-.15-1.242-.456-2.364-1.458-.876-.78-1.464-1.74-1.638-2.034-.168-.294-.018-.456.132-.6.132-.132.294-.342.444-.516.144-.174.198-.294.294-.492.102-.198.054-.372-.024-.516-.072-.15-.66-1.596-.906-2.184-.24-.576-.48-.498-.66-.504-.168-.012-.366-.012-.564-.012-.198 0-.516.072-.786.366-.27.294-1.032 1.008-1.032 2.46 0 1.452 1.056 2.856 1.2 3.054.15.198 2.088 3.186 5.058 4.47.708.306 1.26.486 1.692.624.708.228 1.356.198 1.866.12.57-.084 1.734-.708 1.98-1.398.246-.69.246-1.278.174-1.398-.078-.126-.276-.198-.576-.348z" />
                    </svg>
                    Viber
                  </Button>
                </motion.div>

                {/* Instagram */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    onClick={handleInstagram}
                    className="bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 font-semibold shadow-lg transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-5 rounded-xl border border-white/20"
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
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
