"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-900">FitCoach Pro</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </a>
          </nav>

          <Button className="hidden md:block bg-green-900 hover:bg-green-700">Book Session</Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
                Services
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </a>
              <Button className="bg-green-600 hover:bg-green-700 w-full">Book Session</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
