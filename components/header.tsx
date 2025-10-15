"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50" role="banner">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-900 to-green-700 bg-clip-text text-transparent" lang="sr" title="FitCoach Pro – Profesionalni fitnes trener">
            FitCoach Pro
          </div>

          {/* Navigacija za desktop */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" role="navigation" aria-label="Glavna navigacija">
            <a href="#home" className="text-sm lg:text-base text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group" title="Početna stranica">
              Početna
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-sm lg:text-base text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group" title="O treneru">
              O meni
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-sm lg:text-base text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group" title="Usluge i treninzi">
              Usluge
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="text-sm lg:text-base text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group" title="Iskustva klijenata">
              Iskustva
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-sm lg:text-base text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group" title="Kontakt informacije">
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <Button
            className="hidden md:block bg-gradient-to-r from-green-900 to-green-700 hover:from-green-800 hover:to-green-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
            aria-label="Zakaži trening"
            title="Zakaži besplatan trening"
            onClick={() => {
              const el = document.getElementById("services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Zakaži trening
          </Button>

          {/* Dugme za mobilni meni */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
            title={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
          >
            {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Navigacija za mobilne uređaje */}
        {isMenuOpen && (
          <nav 
            className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300" 
            role="navigation" 
            aria-label="Mobilna navigacija"
          >
            <div className="flex flex-col space-y-3 pt-4">
              <a 
                href="/" 
                className="text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-all duration-200 px-3 py-2 rounded-lg" 
                title="Početna stranica"
                onClick={() => setIsMenuOpen(false)}
              >
                Početna
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-all duration-200 px-3 py-2 rounded-lg" 
                title="O treneru"
                onClick={() => setIsMenuOpen(false)}
              >
                O meni
              </a>
              <a 
                href="/usluge" 
                className="text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-all duration-200 px-3 py-2 rounded-lg" 
                title="Usluge i treninzi"
                onClick={() => setIsMenuOpen(false)}
              >
                Usluge
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-all duration-200 px-3 py-2 rounded-lg" 
                title="Iskustva klijenata"
                onClick={() => setIsMenuOpen(false)}
              >
                Iskustva
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-all duration-200 px-3 py-2 rounded-lg" 
                title="Kontakt informacije"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
              <Button 
                className="bg-gradient-to-r from-green-900 to-green-700 hover:from-green-800 hover:to-green-600 w-full shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 mt-2" 
                title="Zakaži trening"
                onClick={() => {
                  setIsMenuOpen(false);
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Zakaži trening
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}