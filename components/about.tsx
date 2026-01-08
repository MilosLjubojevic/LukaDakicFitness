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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      description: "Sertifikovani personalni trener",
    },
    {
      name: "NASM CES",
      icon: BadgeCheck,
      color: "text-blue-600",
      description: "Specijalista korektivnog vežbanja",
    },
    {
      name: "HFS",
      icon: BadgeCheck,
      color: "text-orange-600",
      description: "Funkcionalni trening",
    },
    {
      name: "Master FSFV",
      icon: GraduationCap,
      color: "text-purple-600",
      description: "Fakultet sporta",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Upoznaj svog personalnog trenera
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Zovem se{" "}
                  <span className="font-semibold text-gray-900">
                    Luka Dakić
                  </span>{" "}
                  i master sam Fakulteta sporta i fizičkog vaspitanja. Više od 7
                  godina radim kao{" "}
                  <span className="font-semibold text-gray-900">
                    personalni trener
                  </span>
                  , pomažući klijentima svih uzrasta da ostvare svoje fitness
                  ciljeve – bilo da je reč o mršavljenju, povećanju mišićne
                  mase, poboljšanju kondicije ili uklanjanju bolova u leđima i
                  zglobovima.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Moja filozofija treninga zasniva se na{" "}
                  <span className="font-semibold text-gray-900">
                    individualnom pristupu
                  </span>
                  . Verujem da je svaki čovek jedinstven – sa različitim
                  potrebama, ciljevima i mogućnostima. Zato svaki trening
                  program koji kreiram bude pažljivo prilagođen tebi – tvom
                  telu, tvom načinu života i tvom tempu.
                </p>
              </div>
            </div>

            {/* Certification Badges */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                Sertifikacije i kvalifikacije
              </h3>

              {/* Certification Badges Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                  >
                    <cert.icon
                      className={`w-6 h-6 ${cert.color} flex-shrink-0`}
                    />
                    <div>
                      <div className="font-bold text-sm text-gray-900 whitespace-nowrap">
                        {cert.name}
                      </div>
                      <div className="text-xs text-gray-500">
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
                  <svg
                    className="w-4 h-4 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>
                      Diplomirani profesor fizičkog vaspitanja i sporta
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>NASM sertifikovani personalni trener (CPT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>NASM specijalista korektivnog vežbanja (CES)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>NASM specijalista kondicionog treninga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>HFS specijalista funkcionalnog treninga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>HFS pravilna ishrana i suplementacija</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>HFS instruktor grupnog fitnesa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>TRX instruktor</span>
                  </li>
                </ul>
              </details>
            </div>

            {/* Call to Action Text */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">
                Bilo da želite da smršate, izgradite mišićnu masu, poboljšate
                kondiciju ili jednostavno osećate više energije u svakodnevnom
                životu – tu sam da vas vodim kroz svaki korak. Nudim
                individualne i polu-personalne treninge u skladu sa vašim
                ciljevima.
              </p>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-8 lg:sticky lg:top-8">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <Image
                src="/DakicCitaDva.jpg"
                alt="Luka Dakić - Personalni trener Novi Sad"
                width={600}
                height={700}
                className="relative rounded-2xl shadow-xl w-full object-cover"
              />
            </div>

            {/* Stats Grid with Animated Counters */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-gray-200 hover:border-green-600 transition-all duration-300 hover:shadow-lg group"
                >
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-600 leading-tight">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
