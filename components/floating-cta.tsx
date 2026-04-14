"use client";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const fireConversion = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17719238680/r1LqCPuP6YscEJjAmIFC",
      });
    }
  };

  return (
    <a
      href="https://wa.me/381662444454?text=Zdravo!%20Zanima%20me%20personalni%20trening."
      target="_blank"
      rel="noopener noreferrer"
      onClick={fireConversion}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      } md:hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Pošaljite poruku putem WhatsApp-a"
    >
      <div className="flex items-center gap-2 px-5 py-4">
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold whitespace-nowrap">
          Zakaži trening
        </span>
      </div>
    </a>
  );
}
