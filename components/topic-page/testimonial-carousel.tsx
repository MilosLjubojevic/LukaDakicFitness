"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  result: string;
  quote: string;
  duration: string;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  accentColor?: string;
  title?: string;
}

export function TestimonialCarousel({
  testimonials,
  accentColor = "green",
  title = "Šta kažu klijenti"
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const colorClasses: Record<string, { bg: string; text: string; accent: string; ring: string }> = {
    green: { bg: "bg-green-50", text: "text-green-600", accent: "bg-green-500", ring: "ring-green-200" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", accent: "bg-orange-500", ring: "ring-orange-200" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", accent: "bg-rose-500", ring: "ring-rose-200" },
    blue: { bg: "bg-blue-50", text: "text-blue-600", accent: "bg-blue-500", ring: "ring-blue-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", accent: "bg-purple-500", ring: "ring-purple-200" },
  };

  const colors = colorClasses[accentColor] || colorClasses.green;

  return (
    <section className={`py-12 ${colors.bg} rounded-3xl my-12 relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-2`}>
            {title}
          </h3>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-600 font-medium">5/5 prosečna ocena</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
            >
              {/* Quote icon */}
              <div className={`w-12 h-12 ${colors.accent} rounded-xl flex items-center justify-center mb-4`}>
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Quote text */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                "{testimonials[current].quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center ring-2 ${colors.ring}`}>
                    <span className={`text-lg font-bold ${colors.text}`}>
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[current].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[current].duration}</p>
                  </div>
                </div>

                {/* Result badge */}
                <div className={`${colors.bg} px-4 py-2 rounded-full`}>
                  <span className={`font-semibold ${colors.text}`}>
                    {testimonials[current].result}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? `w-6 ${colors.accent}` : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
