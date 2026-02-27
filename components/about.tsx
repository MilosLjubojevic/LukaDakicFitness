"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Award,
  Users,
  Clock,
  Target,
  GraduationCap,
  BadgeCheck,
  ChevronDown,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

// Animated counter component
function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "+",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, value: 100, suffix: "+", label: "Zadovoljnih klijenata" },
    { icon: Clock, value: 7, suffix: "+", label: "Godina iskustva" },
    { icon: Award, value: 15, suffix: "+", label: "Sertifikata i obuka" },
    {
      icon: Target,
      value: 100,
      suffix: "%",
      label: "Uspešnost transformacija",
    },
  ];

  const certifications = [
    {
      name: "NASM CPT",
      icon: BadgeCheck,
      color: "text-green-600",
      bg: "bg-green-100",
      description: "Sertifikovani personalni trener",
    },
    {
      name: "NASM CES",
      icon: BadgeCheck,
      color: "text-blue-600",
      bg: "bg-blue-100",
      description: "Specijalista korektivnog vežbanja",
    },
    {
      name: "HFS",
      icon: BadgeCheck,
      color: "text-orange-600",
      bg: "bg-orange-100",
      description: "Funkcionalni trening",
    },
    {
      name: "Master FSFV",
      icon: GraduationCap,
      color: "text-purple-600",
      bg: "bg-purple-100",
      description: "Fakultet sporta",
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

  const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
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
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration — mirrors Hero's blobs on opposite sides */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-100 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column — Image + Stats (mirrored from Hero) */}
          <motion.div
            className="space-y-8 lg:sticky lg:top-24"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            {/* Profile Image */}
            <div className="relative group">
              <div
                className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"
                aria-hidden="true"
              />
              <Image
                src="/DakicCitaDva.jpg"
                alt="Luka Dakić - Personalni trener Novi Sad"
                width={600}
                height={700}
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(0, 0, 0, 0.08)" }}
                  className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm hover:border-green-200 transition-colors duration-300"
                >
                  <stat.icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-0.5">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-500 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Text Content (mirrored from Hero) */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.div variants={headerVariants}>
              <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold border border-blue-200/50">
                <Award className="w-4 h-4" />
                <span>O meni</span>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              variants={headerVariants}
            >
              Upoznaj svog
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mt-1 pb-1">
                personalnog trenera
              </span>
            </motion.h2>

            <motion.div className="space-y-4" variants={headerVariants}>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Zovem se{" "}
                <span className="font-semibold text-gray-900">Luka Dakić</span>{" "}
                i master sam Fakulteta sporta i fizičkog vaspitanja. Više od 7
                godina radim kao{" "}
                <span className="font-semibold text-gray-900">
                  personalni trener
                </span>
                , pomažući klijentima svih uzrasta da ostvare svoje fitness
                ciljeve – bilo da je reč o mršavljenju, povećanju mišićne mase,
                poboljšanju kondicije ili uklanjanju bolova u leđima i
                zglobovima.
              </p>

              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Moja filozofija treninga zasniva se na{" "}
                <span className="font-semibold text-gray-900">
                  individualnom pristupu
                </span>
                . Verujem da je svaki čovek jedinstven – sa različitim
                potrebama, ciljevima i mogućnostima. Zato svaki trening program
                koji kreiram bude pažljivo prilagođen tebi – tvom telu, tvom
                načinu života i tvom tempu.
              </p>
            </motion.div>

            {/* Certification Badges */}
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              variants={headerVariants}
            >
              <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-green-600" />
                Sertifikacije i kvalifikacije
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                  >
                    <div className={`w-8 h-8 ${cert.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <cert.icon className={`w-4 h-4 ${cert.color}`} />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-gray-900">
                        {cert.name}
                      </div>
                      <div className="text-[11px] text-gray-500">
                        {cert.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Full Certification List */}
              <details className="group">
                <summary className="cursor-pointer text-sm text-green-600 font-medium hover:text-green-700 flex items-center gap-1">
                  Prikaži sve sertifikate
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                  {[
                    "Diplomirani profesor fizičkog vaspitanja i sporta",
                    "NASM sertifikovani personalni trener (CPT)",
                    "NASM specijalista korektivnog vežbanja (CES)",
                    "NASM specijalista kondicionog treninga",
                    "HFS specijalista funkcionalnog treninga",
                    "HFS pravilna ishrana i suplementacija",
                    "HFS instruktor grupnog fitnesa",
                    "TRX instruktor",
                  ].map((cert, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </motion.div>

            {/* CTA callout */}
            <motion.div
              className="relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 overflow-hidden"
              variants={headerVariants}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <p className="text-green-50 text-sm leading-relaxed relative z-10">
                Bilo da želite da smršate, izgradite mišićnu masu, poboljšate
                kondiciju ili jednostavno osećate više energije u svakodnevnom
                životu – tu sam da vas vodim kroz svaki korak. Nudim
                individualne i polu-personalne treninge u skladu sa vašim
                ciljevima.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
