"use client";
import { useState, useRef } from "react";
import {
  Dumbbell,
  Users,
  Utensils,
  Check,
  Sparkles,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import CallTotActionCard from "@/components/ui/call-to-action-card";
import { motion, useInView, AnimatePresence } from "framer-motion";

export function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
      accentColor: "green",
      gradient: "from-green-500 to-emerald-600",
      lightBg: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      borderHover: "hover:border-green-300",
      badgeBg: "bg-green-600",
      checkBg: "bg-green-100",
      checkColor: "text-green-600",
      btnGradient: "from-green-600 to-emerald-600",
      glowColor: "shadow-green-200/50",
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
      accentColor: "blue",
      gradient: "from-blue-500 to-cyan-600",
      lightBg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderHover: "hover:border-blue-300",
      badgeBg: "bg-blue-600",
      checkBg: "bg-blue-100",
      checkColor: "text-blue-600",
      btnGradient: "from-blue-600 to-cyan-600",
      glowColor: "shadow-blue-200/50",
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
      accentColor: "orange",
      gradient: "from-orange-500 to-red-600",
      lightBg: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      borderHover: "hover:border-orange-300",
      badgeBg: "bg-orange-600",
      checkBg: "bg-orange-100",
      checkColor: "text-orange-600",
      btnGradient: "from-orange-500 to-red-600",
      glowColor: "shadow-orange-200/50",
    },
  ];

  const comparisonFeatures = [
    {
      name: "Individualna pažnja",
      personal: true,
      semi: "Delimično",
      nutrition: false,
    },
    { name: "Korekcija forme", personal: true, semi: true, nutrition: false },
    { name: "Plan treninga", personal: true, semi: true, nutrition: false },
    { name: "Plan ishrane", personal: true, semi: false, nutrition: true },
    {
      name: "Praćenje makronutrijenata",
      personal: false,
      semi: false,
      nutrition: true,
    },
    {
      name: "Fleksibilno zakazivanje",
      personal: true,
      semi: "Ograničeno",
      nutrition: true,
    },
    {
      name: "Grupna motivacija",
      personal: false,
      semi: true,
      nutrition: false,
    },
    {
      name: "Podrška putem poruka",
      personal: true,
      semi: true,
      nutrition: true,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
      role="region"
      aria-labelledby="naslov-usluga"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-50 to-transparent rounded-full opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20 space-y-5"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div variants={headerVariants}>
            <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm text-green-800 px-5 py-2.5 rounded-full text-sm font-semibold border border-green-200/50">
              <Sparkles className="w-4 h-4" />
              <span>Profesionalne usluge</span>
            </div>
          </motion.div>

          <motion.h2
            id="naslov-usluga"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
            variants={headerVariants}
          >
            Usluge Prilagođene
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mt-1 pb-1">
              Vašem Uspehu
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Odaberite neku od naših fitnes usluga osmišljenih tako da vam
            pomognu da postignete svoje ciljeve zdravlja i kondicije.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-6 lg:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12)" }}
              className={`relative h-full bg-white rounded-3xl border border-gray-200/80 ${service.borderHover} transition-colors duration-300 overflow-hidden flex flex-col shadow-sm`}
              aria-label={`${service.title}, cena ${service.price} € po ${service.period}`}
            >
                {/* Badge */}
                <AnimatePresence>
                  {service.badge && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      className={`absolute top-5 right-5 ${service.badgeBg} text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg z-10`}
                    >
                      {service.badge}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card content */}
                <div className="p-8 pb-0 flex-1 flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                      rotate: hoveredCard === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-4xl font-extrabold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                      >
                        {service.price}
                      </span>
                      <span className="text-lg font-semibold text-gray-400">
                        €
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      / {service.period}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-100 mb-6" />

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{
                          delay: 0.4 + index * 0.15 + featureIndex * 0.08,
                          duration: 0.4,
                        }}
                      >
                        <div
                          className={`w-5 h-5 ${service.checkBg} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <Check className={`w-3 h-3 ${service.checkColor}`} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="p-8 pt-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleClick}
                      className={`w-full bg-gradient-to-r ${service.btnGradient} hover:opacity-90 text-white font-semibold py-6 rounded-2xl shadow-lg transition-all duration-300 group/btn`}
                    >
                      <span>Zakaži Termin</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table Toggle */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm px-6 py-3 rounded-full border border-green-200 hover:border-green-300 bg-white hover:bg-green-50 transition-all duration-300 shadow-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {showComparison ? "Sakrij poređenje" : "Uporedi sve usluge"}
            <motion.div
              animate={{ rotate: showComparison ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Comparison Table */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 32 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-5 px-6 font-semibold text-gray-900 bg-gray-50/50">
                          Karakteristika
                        </th>
                        <th className="text-center py-5 px-4 font-semibold text-gray-900 bg-gray-50/50">
                          <div className="flex flex-col items-center gap-1.5">
                            <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center">
                              <Dumbbell className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-xs">Personalni</span>
                          </div>
                        </th>
                        <th className="text-center py-5 px-4 font-semibold text-gray-900 bg-gray-50/50">
                          <div className="flex flex-col items-center gap-1.5">
                            <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center">
                              <Users className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-xs">Polupersonalni</span>
                          </div>
                        </th>
                        <th className="text-center py-5 px-4 font-semibold text-gray-900 bg-gray-50/50">
                          <div className="flex flex-col items-center gap-1.5">
                            <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center">
                              <Utensils className="w-4 h-4 text-orange-600" />
                            </div>
                            <span className="text-xs">Ishrana</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((feature, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                        >
                          <td className="py-4 px-6 text-sm text-gray-700">
                            {feature.name}
                          </td>
                          <td className="py-4 px-4 text-center">
                            {feature.personal === true ? (
                              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <Check className="w-3.5 h-3.5 text-green-600" />
                              </div>
                            ) : feature.personal === false ? (
                              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                <X className="w-3.5 h-3.5 text-gray-300" />
                              </div>
                            ) : (
                              <span className="text-xs text-gray-500 font-medium">
                                {feature.personal}
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-4 text-center">
                            {feature.semi === true ? (
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                <Check className="w-3.5 h-3.5 text-blue-600" />
                              </div>
                            ) : feature.semi === false ? (
                              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                <X className="w-3.5 h-3.5 text-gray-300" />
                              </div>
                            ) : (
                              <span className="text-xs text-gray-500 font-medium">
                                {feature.semi}
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-4 text-center">
                            {feature.nutrition === true ? (
                              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                                <Check className="w-3.5 h-3.5 text-orange-600" />
                              </div>
                            ) : feature.nutrition === false ? (
                              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                <X className="w-3.5 h-3.5 text-gray-300" />
                              </div>
                            ) : (
                              <span className="text-xs text-gray-500 font-medium">
                                {feature.nutrition}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-gray-50/80">
                        <td className="py-5 px-6 font-bold text-gray-900 text-sm">
                          Cena
                        </td>
                        <td className="py-5 px-4 text-center font-bold text-green-600 text-sm">
                          20€/sesija
                        </td>
                        <td className="py-5 px-4 text-center font-bold text-blue-600 text-sm">
                          15€/osoba
                        </td>
                        <td className="py-5 px-4 text-center font-bold text-orange-600 text-sm">
                          50€/2 meseca
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-gray-500 mb-5 text-sm">
            Niste sigurni koja usluga je najbolja za vas?
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={handleClick}
              variant="outline"
              size="lg"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-10 py-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              Kontaktirajte nas za besplatnu konsultaciju
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CallTotActionCard onClose={() => setIsOpen(false)} />
      </Modal>
    </section>
  );
}
