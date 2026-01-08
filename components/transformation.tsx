"use client";
import { useState } from "react";
import Image from "next/image";
import Klijent1 from "@/public/Klijent1.jpg";
import Klijent2 from "@/public/Klijent2.jpg";
import Klijent3 from "@/public/Klijent3.jpg";

function TransformationImage({ src, alt, index }: { src: any; alt: string; index: number }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow aspect-[4/3]"
    >
      {/* Skeleton loader */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`object-cover hover:scale-105 transition-all duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        priority={index < 2}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

export function Transformation() {
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

  return (
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="transformacije-klijenata"
      role="region"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="transformacije-klijenata"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Pogledajte transformacije klijenata
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pravi rezultati mojih klijenata koji su postigli svoje ciljeve uz
            personalizovane treninge i plan ishrane.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <TransformationImage key={index} src={image.src} alt={image.alt} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
