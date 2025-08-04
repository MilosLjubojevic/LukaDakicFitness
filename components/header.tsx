"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-900" lang="sr" title="FitCoach Pro – Profesionalni fitnes trener">
            FitCoach Pro
          </div>

          {/* Navigacija za desktop */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Glavna navigacija">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors" title="Početna stranica">
              Početna
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors" title="O treneru">
              O meni
            </a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors" title="Usluge i treninzi">
              Usluge
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors" title="Iskustva klijenata">
              Iskustva
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors" title="Kontakt informacije">
              Kontakt
            </a>
          </nav>

          <Button
            className="hidden md:block bg-green-900 hover:bg-green-700"
            aria-label="Zakaži trening"
            title="Zakaži besplatan trening"
            onClick={() => {
              const el = document.getElementById("usluge");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Zakaži trening
          </Button>

          {/* Dugme za mobilni meni */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
            title={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigacija za mobilne uređaje */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t" role="navigation" aria-label="Mobilna navigacija">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors" title="Početna stranica">
                Početna
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors" title="O treneru">
                O meni
              </a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors" title="Usluge i treninzi">
                Usluge
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors" title="Iskustva klijenata">
                Iskustva
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors" title="Kontakt informacije">
                Kontakt
              </a>
              <Button className="bg-green-600 hover:bg-green-700 w-full" title="Zakaži trening">
                Zakaži trening
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
