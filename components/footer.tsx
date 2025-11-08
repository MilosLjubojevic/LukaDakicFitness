"use client";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const handleInstagram = () => {
    window.open("https://www.instagram.com/luka__dakic", "_blank");
  };

  return (
    <footer
      className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12 sm:py-16"
      role="contentinfo"
      aria-label="Podnožje sajta"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand and Social */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              Luka Dakić | Fitness trener
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Menjamo živote kroz personalizovane treninge i savete o ishrani.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Usluge
            </h3>
            <ul className="space-y-2.5 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-green-500 transition-colors duration-200 text-sm sm:text-base flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Individualni treninzi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-500 transition-colors duration-200 text-sm sm:text-base flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Poluindividualni treninzi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-500 transition-colors duration-200 text-sm sm:text-base flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Saveti o ishrani
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Brzi linkovi
            </h3>
            <ul className="space-y-2.5 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-green-500 transition-colors duration-200 text-sm sm:text-base flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  O meni
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-green-500 transition-colors duration-200 text-sm sm:text-base flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Usluge
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-green-500 transition-colors duration-200 text-sm sm:text-base flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Utisci
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-green-500 transition-colors duration-200 text-sm sm:text-base flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Kontakt
            </h3>
            <ul className="space-y-2.5 text-gray-400 text-sm sm:text-base">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Ulica Bulevar oslobođenja 83
                  <br />
                  Novi Sad, Srbija
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+38166244454"
                  className="hover:text-green-500 transition-colors"
                >
                  +381 66 244 454
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:luka_dakic@yahoo.com"
                  className="hover:text-green-500 transition-colors"
                >
                  luka_dakic@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1">
            <span>&copy; 2024 Luka Dakic. Sva prava zadržana.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex gap-2 sm:gap-1">
              <a
                href="#"
                className="hover:text-green-500 transition-colors underline"
              >
                Politika privatnosti
              </a>
              <span>|</span>
              <a
                href="#"
                className="hover:text-green-500 transition-colors underline"
              >
                Uslovi korišćenja
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
