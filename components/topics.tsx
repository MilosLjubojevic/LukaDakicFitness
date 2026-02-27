"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Dumbbell,
  Zap,
  HeartPulse,
  Apple,
  Globe,
  MessageCircle,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import CallTotActionCard from "@/components/ui/call-to-action-card";
import { motion, useInView } from "framer-motion";

export function Topics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const topics = [
    {
      label: "Fizička transformacija",
      hook: "Oblikuj telo kakvo želiš",
      items: [
        "Rekompozicija tela (gubitak masti + dobitak mišićne mase)",
        "Definicija i oblikovanje tela (gubitak masnih naslaga)",
        "Zatezanje tela posle trudnoće",
      ],
      href: "/Fizicka-Transformacija",
      icon: Dumbbell,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      borderHover: "hover:border-green-300",
      ctaColor: "from-green-600 to-emerald-600",
    },
    {
      label: "Snaga i performanse",
      hook: "Pomeri granice svojih mogućnosti",
      items: [
        "Povećanje snage",
        "Eksplozivnost i brzina",
        "Kondicija i izdržljivost",
        "Priprema za testove/takmičenja",
      ],
      href: "/Snaga-i-Performanse",
      icon: Zap,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      borderHover: "hover:border-orange-300",
      ctaColor: "from-orange-500 to-red-500",
    },
    {
      label: "Zdravlje i funkcionalnost",
      hook: "Živi bez bolova i ograničenja",
      items: [
        "Ispravak deformiteta",
        "Oporavak nakon povrede",
        "Mobilnost i fleksibilnost",
        "Bolovi u leđima i zglobovima",
      ],
      href: "/Zdravlje-i-Funkcionalnost",
      icon: HeartPulse,
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      borderHover: "hover:border-rose-300",
      ctaColor: "from-rose-500 to-pink-600",
    },
    {
      label: "Dijeta i suplementi",
      hook: "Ishrana koja prati tvoje ciljeve",
      items: [
        "Plan ishrane (mršavljenje ili nabacivanje mase)",
        "Keto dijeta",
        "Savetovanje za suplemente",
      ],
      href: "/Dijeta-i-Suplementi",
      icon: Apple,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderHover: "hover:border-blue-300",
      ctaColor: "from-blue-500 to-cyan-600",
    },
    // {
    //   label: "Online saradnja",
    //   hook: "Treniraj uz podršku bilo gde",
    //   items: ["Plan treninga", "Praćenje napretka", "Edukacija o treningu"],
    //   href: "/Online-Saradnja",
    //   icon: Globe,
    //   iconBg: "bg-purple-100",
    //   iconColor: "text-purple-600",
    //   borderHover: "hover:border-purple-300",
    //   ctaColor: "from-purple-500 to-violet-600",
    // },
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
      id="topics"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-100 rounded-full blur-3xl opacity-20 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/3" />

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
              <Dumbbell className="w-4 h-4" />
              <span>Oblasti rada</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            variants={headerVariants}
          >
            Pronađi svoj
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mt-1 pb-1">
              cilj — ja ću te voditi
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Bez obzira na to gde se nalaziš, imam plan za tebe. Izaberi oblast i
            zakažimo besplatnu konsultaciju.
          </motion.p>
        </motion.div>

        {/* Topics Grid — 3 + 2 layout */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Top row — 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 max-w-4xl mx-auto">
            {topics.slice(0, 2).map((topic) => (
              <TopicCard
                key={topic.label}
                topic={topic}
                variants={cardVariants}
                onCtaClick={() => setIsModalOpen(true)}
              />
            ))}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {topics.slice(2).map((topic) => (
              <TopicCard
                key={topic.label}
                topic={topic}
                variants={cardVariants}
                onCtaClick={() => setIsModalOpen(true)}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 sm:p-8 overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <p className="text-green-50 text-sm sm:text-base mb-4 leading-relaxed">
                Nisi siguran/na koji program je pravi za tebe? Javi mi se —
                zajedno ćemo napraviti plan.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Besplatna konsultacija
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CallTotActionCard onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
}

function TopicCard({
  topic,
  variants,
  onCtaClick,
}: {
  topic: {
    label: string;
    hook: string;
    items: string[];
    href: string;
    icon: any;
    iconBg: string;
    iconColor: string;
    borderHover: string;
    ctaColor: string;
  };
  variants: any;
  onCtaClick: () => void;
}) {
  return (
    <motion.div variants={variants} className="h-full">
      <motion.div
        whileHover={{
          y: -4,
          boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)",
        }}
        className={`relative h-full p-6 bg-white border border-gray-100 rounded-2xl shadow-sm ${topic.borderHover} transition-colors duration-300 overflow-visible flex flex-col group`}
      >
        {/* Top-right arrow indicator — visible on hover */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-50 group-hover:bg-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
        </div>

        {/* Icon */}
        <div
          className={`w-11 h-11 ${topic.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <topic.icon className={`w-5 h-5 ${topic.iconColor}`} />
        </div>

        {/* Clickable label */}
        <Link href={topic.href} className="block mb-1 group/title">
          <h3 className="text-base font-bold text-gray-900 group-hover/title:text-gray-700 transition-colors inline-flex items-center gap-1.5">
            {topic.label}
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-200" />
          </h3>
        </Link>

        {/* Hook — outcome-focused tagline */}
        <p className={`text-xs font-medium ${topic.iconColor} mb-4`}>
          {topic.hook}
        </p>

        {/* Items list */}
        <ul className="space-y-2 mb-6 flex-1">
          {topic.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-gray-600"
            >
              <div
                className={`mt-0.5 w-4 h-4 ${topic.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <Check className={`w-2.5 h-2.5 ${topic.iconColor}`} />
              </div>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        {/* Dual CTA — primary: book, secondary: learn more */}
        <div className="space-y-2.5 mt-auto">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={(e) => {
                e.preventDefault();
                onCtaClick();
              }}
              className={`w-full bg-gradient-to-r ${topic.ctaColor} hover:opacity-90 text-white font-semibold py-5 rounded-xl shadow-md transition-all duration-300 text-sm`}
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
              Zakaži konsultaciju
            </Button>
          </motion.div>

          <Link
            href={topic.href}
            className={`flex items-center justify-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-all py-2 rounded-xl hover:bg-gray-50 group/link`}
          >
            <span>Saznajte više o ovoj oblasti</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
