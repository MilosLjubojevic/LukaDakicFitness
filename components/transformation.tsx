"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Klijent1 from "@/public/Klijent1.jpg";
import Klijent2 from "@/public/Klijent2.jpg";
import Klijent3 from "@/public/Klijent3.jpg";
import { TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";

function TransformationImage({
  src,
  alt,
  index,
  isInView,
}: {
  src: any;
  alt: string;
  index: number;
  isInView: boolean;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        delay: 0.2 + index * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      }}
      className="relative overflow-hidden rounded-2xl shadow-sm group cursor-pointer"
    >
      <div className="aspect-[4/3] relative">
        {/* Skeleton loader */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-all duration-500 group-hover:scale-105 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          priority={index < 2}
          onLoad={() => setIsLoading(false)}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Caption on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white text-sm font-medium leading-snug">{alt}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Transformation() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const images = [
    {
      src: Klijent1,
      alt: "Transformacija klijenta – pre i posle rezultati fitnes programa",
    },
    {
      src: Klijent2,
      alt: "Uspešna transformacija tela klijenta sa personalnim trenerom",
    },
    {
      src: Klijent3,
      alt: "Rezultati mršavljenja i izgradnje mišića sa Lukom Dakićem",
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

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      aria-labelledby="transformacije-klijenata"
      role="region"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-30" />

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
            <div className="inline-flex items-center gap-2 bg-orange-100/80 backdrop-blur-sm text-orange-800 px-5 py-2.5 rounded-full text-sm font-semibold border border-orange-200/50">
              <TrendingUp className="w-4 h-4" />
              <span>Rezultati</span>
            </div>
          </motion.div>

          <motion.h2
            id="transformacije-klijenata"
            className="text-4xl md:text-5xl font-bold text-gray-900"
            variants={headerVariants}
          >
            Transformacije
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mt-1 pb-1">
              naših klijenata
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Pravi rezultati mojih klijenata koji su postigli svoje ciljeve uz
            personalizovane treninge i plan ishrane.
          </motion.p>
        </motion.div>

        {/* Transformation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <TransformationImage
              key={index}
              src={image.src}
              alt={image.alt}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
