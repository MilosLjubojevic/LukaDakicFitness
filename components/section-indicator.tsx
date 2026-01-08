"use client";
import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Početna" },
  { id: "about", label: "O meni" },
  { id: "services", label: "Usluge" },
  { id: "testimonials", label: "Iskustva" },
  { id: "faq", label: "Pitanja" },
  { id: "contact", label: "Kontakt" },
];

export function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
      aria-label="Navigacija po sekcijama"
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-3 justify-end"
          aria-label={`Idi na sekciju ${section.label}`}
          aria-current={activeSection === section.id ? "true" : undefined}
        >
          {/* Label - shows on hover */}
          <span
            className={`text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white px-2 py-1 rounded shadow-sm ${
              activeSection === section.id ? "text-green-600" : "text-gray-600"
            }`}
          >
            {section.label}
          </span>

          {/* Dot indicator */}
          <span
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? "bg-green-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
